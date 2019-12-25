(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('chart.js')) :
  typeof define === 'function' && define.amd ? define(['exports', 'chart.js'], factory) :
  (global = global || self, factory(global.chartisan = {}, global.Chart));
}(this, (function (exports, Chart) { 'use strict';

  Chart = Chart && Chart.hasOwnProperty('default') ? Chart['default'] : Chart;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  /**
   * Determines if the given object satisfies ChartData.
   *
   * @export
   * @param {*} obj
   * @returns {obj is ChartData}
   */
  function isChartData(obj) {
      return 'labels' in obj && 'extra' in obj;
  }
  /**
   * Determines if obj satisfies ChartData.
   *
   * @export
   * @param {*} obj
   * @returns {obj is DatasetData}
   */
  function isDatasetData(obj) {
      return ('id' in obj &&
          'name' in obj &&
          'values' in obj &&
          'isDatetime' in obj &&
          'extra' in obj);
  }
  /**
   * Determine if the given  object satisfies ServerData.
   *
   * @export
   * @param {*} obj
   * @returns {obj is ServerData}
   */
  function isServerData(obj) {
      return ('chart' in obj &&
          'datasets' in obj &&
          isChartData(obj.chart) &&
          obj.datasets.every(function (d) { return isDatasetData(d); }));
  }

  /**
   * Represents the hooks of the chart.
   *
   * @export
   * @class Hooks
   * @template D
   */
  var Hooks = /** @class */ (function () {
      function Hooks() {
          /**
           * Stores the hooks.
           *
           * @type {Hook<D>[]}
           * @memberof Hooks
           */
          this.hooks = [];
      }
      return Hooks;
  }());

  var isMergeableObject = function isMergeableObject(value) {
  	return isNonNullObject(value)
  		&& !isSpecial(value)
  };

  function isNonNullObject(value) {
  	return !!value && typeof value === 'object'
  }

  function isSpecial(value) {
  	var stringValue = Object.prototype.toString.call(value);

  	return stringValue === '[object RegExp]'
  		|| stringValue === '[object Date]'
  		|| isReactElement(value)
  }

  // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
  var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
  var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

  function isReactElement(value) {
  	return value.$$typeof === REACT_ELEMENT_TYPE
  }

  function emptyTarget(val) {
  	return Array.isArray(val) ? [] : {}
  }

  function cloneUnlessOtherwiseSpecified(value, options) {
  	return (options.clone !== false && options.isMergeableObject(value))
  		? deepmerge(emptyTarget(value), value, options)
  		: value
  }

  function defaultArrayMerge(target, source, options) {
  	return target.concat(source).map(function(element) {
  		return cloneUnlessOtherwiseSpecified(element, options)
  	})
  }

  function getMergeFunction(key, options) {
  	if (!options.customMerge) {
  		return deepmerge
  	}
  	var customMerge = options.customMerge(key);
  	return typeof customMerge === 'function' ? customMerge : deepmerge
  }

  function getEnumerableOwnPropertySymbols(target) {
  	return Object.getOwnPropertySymbols
  		? Object.getOwnPropertySymbols(target).filter(function(symbol) {
  			return target.propertyIsEnumerable(symbol)
  		})
  		: []
  }

  function getKeys(target) {
  	return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
  }

  function propertyIsOnObject(object, property) {
  	try {
  		return property in object
  	} catch(_) {
  		return false
  	}
  }

  // Protects from prototype poisoning and unexpected merging up the prototype chain.
  function propertyIsUnsafe(target, key) {
  	return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
  		&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
  			&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
  }

  function mergeObject(target, source, options) {
  	var destination = {};
  	if (options.isMergeableObject(target)) {
  		getKeys(target).forEach(function(key) {
  			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
  		});
  	}
  	getKeys(source).forEach(function(key) {
  		if (propertyIsUnsafe(target, key)) {
  			return
  		}

  		if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
  			destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
  		} else {
  			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
  		}
  	});
  	return destination
  }

  function deepmerge(target, source, options) {
  	options = options || {};
  	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
  	options.isMergeableObject = options.isMergeableObject || isMergeableObject;
  	// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
  	// implementations can use it. The caller may not replace it.
  	options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

  	var sourceIsArray = Array.isArray(source);
  	var targetIsArray = Array.isArray(target);
  	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

  	if (!sourceAndTargetTypesMatch) {
  		return cloneUnlessOtherwiseSpecified(source, options)
  	} else if (sourceIsArray) {
  		return options.arrayMerge(target, source, options)
  	} else {
  		return mergeObject(target, source, options)
  	}
  }

  deepmerge.all = function deepmergeAll(array, options) {
  	if (!Array.isArray(array)) {
  		throw new Error('first argument should be an array')
  	}

  	return array.reduce(function(prev, next) {
  		return deepmerge(prev, next, options)
  	}, {})
  };

  var deepmerge_1 = deepmerge;

  var cjs = deepmerge_1;

  var colorPalette = [
      '#667EEA',
      '#F56565',
      '#48BB78',
      '#ED8936',
      '#9F7AEA',
      '#38B2AC',
      '#ECC94B',
      '#4299E1',
      '#ED64A6'
  ];
  var mergeOptions = cjs;

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0

  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.

  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */

  var __assign = function() {
      __assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
      };
      return __assign.apply(this, arguments);
  };

  var general = (function (_a) {
      var size = _a.size, color = _a.color;
      return "\n    <svg\n        role=\"img\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        width=\"" + size[0] + "\"\n        height=\"" + size[1] + "\"\n        viewBox=\"0 0 24 24\"\n        aria-labelledby=\"refreshIconTitle\"\n        stroke=\"" + color + "\"\n        stroke-width=\"1\"\n        stroke-linecap=\"square\"\n        stroke-linejoin=\"miter\"\n        fill=\"none\"\n        color=\"" + color + "\"\n    >\n        <title id=\"refreshIconTitle\">Refresh</title>\n        <polyline points=\"22 12 19 15 16 12\"/>\n        <path d=\"M11,20 C6.581722,20 3,16.418278 3,12 C3,7.581722 6.581722,4 11,4 C15.418278,4 19,7.581722 19,12 L19,14\"/>\n    </svg>\n";
  });

  var errors = {
      general: general
  };
  var error = function (options, error) { return "\n    <div class=\"chartisan-help-block\">\n    <div class=\"chartisan-refresh-chart\">\n        " + errors[options.type](options) + "\n    </div>\n    " + (options.text != ''
      ? "\n                <div class=\"chartisan-help-text\" style=\"color: " + options.textColor + ";\">\n                    " + options.text + "\n                </div>\n            "
      : '') + "\n    " + (options.debug
      ? "<div class=\"chartisan-help-text-error\">\n        " + error.message + "\n    </div>"
      : '') + "\n    </div>\n"; };

  /**
   * The bar loader.
   *
   * @export
   * @param {LoaderOptions} { size, color }
   */
  var bar = (function (_a) {
      var size = _a.size, color = _a.color;
      return "\n    <svg width=\"" + size[0] + "\" height=\"" + size[1] + "\" viewBox=\"0 0 135 140\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"" + color + "\">\n        <rect y=\"10\" width=\"15\" height=\"120\" rx=\"6\">\n            <animate attributeName=\"height\"\n                begin=\"0.5s\" dur=\"1s\"\n                values=\"120;110;100;90;80;70;60;50;40;140;120\" calcMode=\"linear\"\n                repeatCount=\"indefinite\" />\n            <animate attributeName=\"y\"\n                begin=\"0.5s\" dur=\"1s\"\n                values=\"10;15;20;25;30;35;40;45;50;0;10\" calcMode=\"linear\"\n                repeatCount=\"indefinite\" />\n        </rect>\n        <rect x=\"30\" y=\"10\" width=\"15\" height=\"120\" rx=\"6\">\n            <animate attributeName=\"height\"\n                begin=\"0.25s\" dur=\"1s\"\n                values=\"120;110;100;90;80;70;60;50;40;140;120\" calcMode=\"linear\"\n                repeatCount=\"indefinite\" />\n            <animate attributeName=\"y\"\n                begin=\"0.25s\" dur=\"1s\"\n                values=\"10;15;20;25;30;35;40;45;50;0;10\" calcMode=\"linear\"\n                repeatCount=\"indefinite\" />\n        </rect>\n        <rect x=\"60\" width=\"15\" height=\"140\" rx=\"6\">\n            <animate attributeName=\"height\"\n                begin=\"0s\" dur=\"1s\"\n                values=\"120;110;100;90;80;70;60;50;40;140;120\" calcMode=\"linear\"\n                repeatCount=\"indefinite\" />\n            <animate attributeName=\"y\"\n                begin=\"0s\" dur=\"1s\"\n                values=\"10;15;20;25;30;35;40;45;50;0;10\" calcMode=\"linear\"\n                repeatCount=\"indefinite\" />\n        </rect>\n        <rect x=\"90\" y=\"10\" width=\"15\" height=\"120\" rx=\"6\">\n            <animate attributeName=\"height\"\n                begin=\"0.25s\" dur=\"1s\"\n                values=\"120;110;100;90;80;70;60;50;40;140;120\" calcMode=\"linear\"\n                repeatCount=\"indefinite\" />\n            <animate attributeName=\"y\"\n                begin=\"0.25s\" dur=\"1s\"\n                values=\"10;15;20;25;30;35;40;45;50;0;10\" calcMode=\"linear\"\n                repeatCount=\"indefinite\" />\n        </rect>\n        <rect x=\"120\" y=\"10\" width=\"15\" height=\"120\" rx=\"6\">\n            <animate attributeName=\"height\"\n                begin=\"0.5s\" dur=\"1s\"\n                values=\"120;110;100;90;80;70;60;50;40;140;120\" calcMode=\"linear\"\n                repeatCount=\"indefinite\" />\n            <animate attributeName=\"y\"\n                begin=\"0.5s\" dur=\"1s\"\n                values=\"10;15;20;25;30;35;40;45;50;0;10\" calcMode=\"linear\"\n                repeatCount=\"indefinite\" />\n        </rect>\n    </svg>\n";
  });

  /**
   * Determines the available loaders.
   *
   * @type {string}
   * @memberof LoaderOptions
   */
  var loaders = {
      bar: bar
  };
  /**
   * Creates the loader given the options.
   *
   * @export
   * @param {LoaderOptions} { color, size, type, textColor }
   */
  var loader = function (options) { return "\n    <div class=\"chartisan-help-block\">\n        " + loaders[options.type](options) + "\n        " + (options.text != ''
      ? "\n                    <div class=\"chartisan-help-text\" style=\"color: " + options.textColor + ";\">\n                        " + options.text + "\n                    </div>\n                "
      : '') + "\n    </div>\n"; };

  /**
   * Represents the states of the chart.
   *
   * @export
   * @enum {number}
   */
  var ChartState;
  (function (ChartState) {
      ChartState["Initializing"] = "initializing";
      ChartState["Loading"] = "loading";
      ChartState["Error"] = "error";
      ChartState["Show"] = "show";
  })(ChartState || (ChartState = {}));
  /**
   * Chartisan class
   *
   * @export
   * @abstract
   * @class Chartisan
   * @template D
   */
  var Chartisan = /** @class */ (function () {
      /**
       * Creates an instance of Chartisan.
       *
       * @param {ChartisanOptions} { identifier }
       * @memberof Chartisan
       */
      function Chartisan(options) {
          /**
           * Stores the chartisan options. The options
           * assigned here are the defaults and can be
           * overwritten given the constructor options.
           *
           * @protected
           * @type {ChartisanOptions}
           * @memberof Chartisan
           */
          this.options = {
              el: '.chart',
              url: '',
              loader: {
                  type: 'bar',
                  size: [35, 35],
                  color: '#000',
                  text: 'Loading chart',
                  textColor: '#a0aec0'
              },
              error: {
                  type: 'general',
                  size: [50, 50],
                  color: '#f56565',
                  text: 'There was an error',
                  textColor: '#a0aec0',
                  debug: true
              },
              hooks: undefined
          };
          /**
           * State of the chart.
           *
           * @protected
           * @type {ChartState}
           * @memberof Chartisan
           */
          this.cstate = ChartState.Initializing;
          var el = (this.options = __assign(__assign({}, this.options), options)).el;
          var element = document.querySelector(el);
          if (!element)
              throw Error("[Chartisan] Unable to find an element to bind the chart to a DOM element with the selector = '" + el + "'");
          this.element = element;
          this.controller = document.createElement('div');
          this.bootstrap();
      }
      /**
       * Changes the status of the chart.
       *
       * @protected
       * @param {ChartState} state
       * @memberof Chartisan
       */
      Chartisan.prototype.changeTo = function (state, err) {
          switch (state) {
              case (ChartState.Initializing, ChartState.Loading): {
                  this.controller.innerHTML = loader(this.options.loader);
                  break;
              }
              case ChartState.Show: {
                  this.controller.innerHTML = '';
                  break;
              }
              case ChartState.Error: {
                  this.controller.innerHTML = error(this.options.error, (err !== null && err !== void 0 ? err : new Error('Unknown Error')));
                  this.refreshEvent();
                  break;
              }
          }
          this.cstate = state;
      };
      /**
       * Bootstraps the chart.
       *
       * @protected
       * @memberof Chartisan
       */
      Chartisan.prototype.bootstrap = function () {
          // Append the controller to the element.
          this.element.appendChild(this.controller);
          // Append the chartisan class to it.
          this.controller.classList.add('chartisan');
          this.request();
      };
      /**
       * Requests the data to the server.
       *
       * @protected
       * @param {boolean} [setLoading=true]
       * @memberof Chartisan
       */
      Chartisan.prototype.request = function (setLoading) {
          var _this = this;
          if (setLoading === void 0) { setLoading = true; }
          if (setLoading)
              this.changeTo(ChartState.Loading);
          fetch(this.options.url)
              .then(function (res) { return res.json(); })
              .then(function (res) { return _this.onRawUpdate(res); })
              .catch(function (err) { return _this.onError(err); });
      };
      /**
       * Attaches the refresh event handler to the icon.
       *
       * @protected
       * @memberof Chartisan
       */
      Chartisan.prototype.refreshEvent = function () {
          var _this = this;
          var refresh = this.controller.getElementsByClassName('chartisan-refresh-chart')[0];
          refresh.addEventListener('click', function () { return _this.refresh(); }, { once: true });
      };
      /**
       * Refresh the chart with new information.
       *
       * @param {boolean} [setLoading=true]
       * @memberof Chartisan
       */
      Chartisan.prototype.refresh = function (setLoading) {
          if (setLoading === void 0) { setLoading = true; }
          this.request(setLoading);
      };
      /**
       * Called when the data is correctly recieved from
       * the server. This method calls onUpdate() internally.
       *
       * @protected
       * @param {JSON} response
       * @memberof Chartisan
       */
      Chartisan.prototype.onRawUpdate = function (response) {
          if (!isServerData(response))
              return this.onError(new Error('Invalid server data'));
          /*const data = this.options.hooks!.reduce(
              (data, hook) => hook(data),
              this.formatData(response)
          )*/
          var data = this.formatData(response);
          if (this.options.hooks) {
              for (var _i = 0, _a = this.options.hooks.hooks; _i < _a.length; _i++) {
                  var hook = _a[_i];
                  data = hook(data);
              }
          }
          this.changeTo(ChartState.Show);
          this.onUpdate(data);
      };
      /**
       * Handles an error when getting the data of the chart.
       *
       * @protected
       * @param {Error} error
       * @memberof Chartisan
       */
      Chartisan.prototype.onError = function (err) {
          this.changeTo(ChartState.Error, err);
      };
      /**
       * Returns the current chart state.
       *
       * @returns {ChartState}
       * @memberof Chartisan
       */
      Chartisan.prototype.state = function () {
          return this.cstate;
      };
      return Chartisan;
  }());

  var Hooks$1 =
  /*#__PURE__*/
  function (_BaseHooks) {
    _inherits(Hooks, _BaseHooks);

    function Hooks() {
      _classCallCheck(this, Hooks);

      return _possibleConstructorReturn(this, _getPrototypeOf(Hooks).apply(this, arguments));
    }

    _createClass(Hooks, [{
      key: "colors",

      /**
       * Used to set the color color of a dataset.
       *
       * @param {*} [colors=colorPalette]
       * @returns {this}
       * @memberof Hooks
       */
      value: function colors() {
        var _colors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : colorPalette;

        this.hooks.push(function (chart) {
          var _chart$data;

          if ((_chart$data = chart.data) === null || _chart$data === void 0 ? void 0 : _chart$data.datasets) chart.data.datasets = chart.data.datasets.map(function (dataset, index) {
            return _objectSpread2({}, dataset, {
              borderColor: _colors[index % _colors.length],
              backgroundColor: _colors[index % _colors.length]
            });
          });
          return chart;
        });
        return this;
      }
      /**
       * Used to make the chart responsive.
       *
       * @param {boolean} [maintainAspectRatio=true]
       * @returns {this}
       * @memberof Hooks
       */

    }, {
      key: "responsive",
      value: function responsive() {
        var maintainAspectRatio = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        this.hooks.push(function (chart) {
          return mergeOptions(chart, {
            options: {
              maintainAspectRatio: maintainAspectRatio
            }
          });
        });
        return this;
      }
      /**
       * Set the chart legend options. If a boolean is
       * supplied, it will be used as the display value.
       *
       * @param {(boolean | ChartLegendOptions)} [legend={}]
       * @returns {this}
       * @memberof Hooks
       */

    }, {
      key: "legend",
      value: function legend() {
        var _legend = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        if (typeof _legend === 'boolean') _legend = {
          display: _legend
        };
        this.hooks.push(function (chart) {
          return mergeOptions(chart, {
            options: {
              legend: _legend
            }
          });
        });
        return this;
      }
      /**
       * Determines if the chart will show the axes.
       *
       * @param {boolean} [display=true]
       * @param {boolean} [strict=false]
       * @returns {Hook}
       * @memberof Hooks
       */

    }, {
      key: "displayAxes",
      value: function displayAxes() {
        var display = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var strict = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        this.hooks.push(function (chart) {
          if (strict) return mergeOptions(chart, {
            options: {
              scale: {
                display: display
              }
            }
          });
          return mergeOptions(chart, {
            options: {
              scales: {
                xAxes: [{
                  display: display
                }],
                yAxes: [{
                  display: display
                }]
              }
            }
          });
        });
        return this;
      }
      /**
       * Creates a minimalist chart.
       *
       * @param {boolean} [value=true]
       * @returns {Hook}
       * @memberof Hooks
       */

    }, {
      key: "minimalist",
      value: function minimalist() {
        var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        this.legend({
          display: !value
        });
        this.displayAxes(!value);
        return this;
      }
      /**
       * Determines the padding of the chart.
       *
       * @param {(number | ChartLayoutPaddingObject)} [padding=5]
       * @returns
       * @memberof Hooks
       */

    }, {
      key: "padding",
      value: function padding() {
        var _padding = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;

        this.hooks.push(function (chart) {
          return mergeOptions(chart, {
            options: {
              layout: {
                padding: _padding
              }
            }
          });
        });
        return this;
      }
      /**
       * Set the dataset options. If a single string is provided, all the datasets
       * will will be specified to the desired type. If an array is provided, if the
       * inner element is a string, it will be used as a type, otherwise, the options
       * will be applied, in both cases, to the nth position. Keep in mind that if the
       * array length is less than the datasets, it will start from the start again.
       *
       * @param {(ChartType | (ChartType | DatasetHook)[])} types
       * @param {string} [general='bar']
       * @returns {this}
       * @memberof Hooks
       */

    }, {
      key: "datasets",
      value: function datasets(types) {
        var general = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'bar';
        var t = Array.isArray(types) ? types.map(function (e) {
          return typeof e === 'string' ? {
            type: e
          } : e;
        }) : [{
          type: types
        }];
        this.hooks.push(function (chart) {
          var _chart$data2, _chart$data3;

          chart.type = general;
          (_chart$data2 = chart.data) === null || _chart$data2 === void 0 ? void 0 : _chart$data2.datasets;
          if ((_chart$data3 = chart.data) === null || _chart$data3 === void 0 ? void 0 : _chart$data3.datasets) chart.data.datasets = chart.data.datasets.map(function (dataset, index) {
            return _objectSpread2({}, dataset, {}, t[index % t.length]);
          });
          return chart;
        });
        return this;
      }
      /**
       * Sets a title to the chart.
       *
       * @param {(string | ChartTitleOptions)} [title={}]
       * @returns {this}
       * @memberof Hooks
       */

    }, {
      key: "title",
      value: function title() {
        var _title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _title = typeof _title === 'string' ? {
          text: _title,
          display: true
        } : _objectSpread2({
          display: true
        }, _title);
        this.hooks.push(function (chart) {
          return mergeOptions(chart, {
            options: {
              title: _title
            }
          });
        });
        return this;
      }
      /**
       * Set the chart to begin at zero.
       *
       * @param {boolean} [beginAtZero=true]
       * @returns {this}
       * @memberof Hooks
       */

    }, {
      key: "beginAtZero",
      value: function beginAtZero() {
        var _beginAtZero = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        this.hooks.push(function (chart) {
          return mergeOptions(chart, {
            options: {
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: _beginAtZero
                  }
                }]
              }
            }
          });
        });
        return this;
      }
    }]);

    return Hooks;
  }(Hooks);

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css = ".chartisan {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.chartisan-help-block {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.chartisan-help-text {\n    margin-top: 1.5rem;\n    text-transform: uppercase;\n    letter-spacing: 0.2em;\n    font-size: 0.75rem;\n}\n.chartisan-help-text-error {\n    margin-top: 1.5rem;\n    text-transform: uppercase;\n    letter-spacing: 0.2em;\n    font-size: 0.6rem;\n    color: #f56565;\n}\n.chartisan-refresh-chart {\n    cursor: pointer;\n}\n";
  styleInject(css);

  /**
   * Base chart class for ChartJS.
   *
   * @export
   * @class Chart
   * @extends {Base}
   */

  var Chartisan$1 =
  /*#__PURE__*/
  function (_Base) {
    _inherits(Chartisan, _Base);

    /**
     * The chart canvas.
     *
     * @type {HTMLCanvasElement}
     * @memberof Chartisan
     */

    /**
     * Stores the chart instance.
     *
     * @type {Chart}
     * @memberof Chartisan
     */

    /**
     * Creates an instance of Chartisan.
     *
     * @param {ChartisanOptions} options
     * @memberof Chartisan
     */
    function Chartisan(options) {
      var _this;

      _classCallCheck(this, Chartisan);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Chartisan).call(this, options));

      _defineProperty(_assertThisInitialized(_this), "canvas", void 0);

      _defineProperty(_assertThisInitialized(_this), "chart", void 0);

      _this.canvas = document.createElement('canvas');
      _this.canvas.style.width = '100%';
      _this.canvas.style.height = '100%';
      return _this;
    }
    /**
     * Formats the data of the request to match the data that
     * the chart needs (acording to the desired front-end).
     *
     * @protected
     * @param {ServerData} response
     * @returns {ChartConfiguration}
     * @memberof Chartisan
     */


    _createClass(Chartisan, [{
      key: "formatData",
      value: function formatData(response) {
        return {
          type: 'bar',
          data: {
            labels: response.chart.labels,
            datasets: response.datasets.map(function (dataset) {
              return {
                label: dataset.name,
                data: dataset.values
              };
            })
          },
          options: {}
        };
      }
      /**
       * Handles a successfull response of the chart data.
       *
       * @protected
       * @param {ChartConfiguration} data
       * @memberof Chartisan
       */

    }, {
      key: "onUpdate",
      value: function onUpdate(data) {
        console.log(data);
        this.controller.appendChild(this.canvas);
        this.chart = new Chart(this.canvas, data);
        console.log('Chart created...');
      }
    }]);

    return Chartisan;
  }(Chartisan);
  window.Chartisan = Chartisan$1;
  window.ChartisanHooks = Hooks$1;

  exports.Chartisan = Chartisan$1;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
