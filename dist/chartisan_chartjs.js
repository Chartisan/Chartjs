var chartisan_chartjs = (function (exports) {
  'use strict';

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

  function _typeof(obj) {
    if (typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol") {
      _typeof = function _typeof$1(obj) {
        return _typeof(obj);
      };
    } else {
      _typeof = function _typeof$1(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof(obj);
      };
    }

    return _typeof(obj);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
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

  function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') {
      return;
    }

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

  var bar = (function (_ref) {
    var size = _ref.size,
        color = _ref.color;
    return "\n    <svg width=\"".concat(size[0], "\" height=\"").concat(size[1], "\" viewBox=\"0 0 135 140\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"").concat(color, "\">\n        <rect y=\"10\" width=\"15\" height=\"120\" rx=\"6\">\n            <animate attributeName=\"height\"\n                begin=\"0.5s\" dur=\"1s\"\n                values=\"120;110;100;90;80;70;60;50;40;140;120\" calcMode=\"linear\"\n                repeatCount=\"indefinite\" />\n            <animate attributeName=\"y\"\n                begin=\"0.5s\" dur=\"1s\"\n                values=\"10;15;20;25;30;35;40;45;50;0;10\" calcMode=\"linear\"\n                repeatCount=\"indefinite\" />\n        </rect>\n        <rect x=\"30\" y=\"10\" width=\"15\" height=\"120\" rx=\"6\">\n            <animate attributeName=\"height\"\n                begin=\"0.25s\" dur=\"1s\"\n                values=\"120;110;100;90;80;70;60;50;40;140;120\" calcMode=\"linear\"\n                repeatCount=\"indefinite\" />\n            <animate attributeName=\"y\"\n                begin=\"0.25s\" dur=\"1s\"\n                values=\"10;15;20;25;30;35;40;45;50;0;10\" calcMode=\"linear\"\n                repeatCount=\"indefinite\" />\n        </rect>\n        <rect x=\"60\" width=\"15\" height=\"140\" rx=\"6\">\n            <animate attributeName=\"height\"\n                begin=\"0s\" dur=\"1s\"\n                values=\"120;110;100;90;80;70;60;50;40;140;120\" calcMode=\"linear\"\n                repeatCount=\"indefinite\" />\n            <animate attributeName=\"y\"\n                begin=\"0s\" dur=\"1s\"\n                values=\"10;15;20;25;30;35;40;45;50;0;10\" calcMode=\"linear\"\n                repeatCount=\"indefinite\" />\n        </rect>\n        <rect x=\"90\" y=\"10\" width=\"15\" height=\"120\" rx=\"6\">\n            <animate attributeName=\"height\"\n                begin=\"0.25s\" dur=\"1s\"\n                values=\"120;110;100;90;80;70;60;50;40;140;120\" calcMode=\"linear\"\n                repeatCount=\"indefinite\" />\n            <animate attributeName=\"y\"\n                begin=\"0.25s\" dur=\"1s\"\n                values=\"10;15;20;25;30;35;40;45;50;0;10\" calcMode=\"linear\"\n                repeatCount=\"indefinite\" />\n        </rect>\n        <rect x=\"120\" y=\"10\" width=\"15\" height=\"120\" rx=\"6\">\n            <animate attributeName=\"height\"\n                begin=\"0.5s\" dur=\"1s\"\n                values=\"120;110;100;90;80;70;60;50;40;140;120\" calcMode=\"linear\"\n                repeatCount=\"indefinite\" />\n            <animate attributeName=\"y\"\n                begin=\"0.5s\" dur=\"1s\"\n                values=\"10;15;20;25;30;35;40;45;50;0;10\" calcMode=\"linear\"\n                repeatCount=\"indefinite\" />\n        </rect>\n    </svg>\n");
  });

  var loaders = {
    bar: bar
  };
  var loader = function loader(options) {
    return "\n    <div class=\"chartisan-help-block\">\n        ".concat(loaders[options.type](options), "\n        ").concat(options.text != '' ? "\n                    <div class=\"chartisan-help-text\" style=\"color: ".concat(options.textColor, ";\">\n                        ").concat(options.text, "\n                    </div>\n                ") : '', "\n    </div>\n");
  };

  var general = (function (_ref) {
    var size = _ref.size,
        color = _ref.color;
    return "\n    <svg\n        role=\"img\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        width=\"".concat(size[0], "\"\n        height=\"").concat(size[1], "\"\n        viewBox=\"0 0 24 24\"\n        aria-labelledby=\"refreshIconTitle\"\n        stroke=\"").concat(color, "\"\n        stroke-width=\"1\"\n        stroke-linecap=\"square\"\n        stroke-linejoin=\"miter\"\n        fill=\"none\"\n        color=\"").concat(color, "\"\n    >\n        <title id=\"refreshIconTitle\">Refresh</title>\n        <polyline points=\"22 12 19 15 16 12\"/>\n        <path d=\"M11,20 C6.581722,20 3,16.418278 3,12 C3,7.581722 6.581722,4 11,4 C15.418278,4 19,7.581722 19,12 L19,14\"/>\n    </svg>\n");
  });

  var errors = {
    general: general
  };
  var error = function error(options, _error) {
    return "\n    <div class=\"chartisan-help-block\">\n    <div class=\"chartisan-refresh-chart\">\n        ".concat(errors[options.type](options), "\n    </div>\n    ").concat(options.text != '' ? "\n                <div class=\"chartisan-help-text\" style=\"color: ".concat(options.textColor, ";\">\n                    ").concat(options.text, "\n                </div>\n            ") : '', "\n    ").concat(options.debug ? "<div class=\"chartisan-help-text-error\">\n        ".concat(_error.message, "\n    </div>") : '', "\n    </div>\n");
  };

  function isChartData(obj) {
    return 'labels' in obj && 'options' in obj;
  }
  function isDatasetData(obj) {
    return 'name' in obj && 'type' in obj && 'values' in obj && 'options' in obj;
  }
  function isServerData(obj) {
    return 'chart' in obj && 'datasets' in obj && isChartData(obj.chart) && obj.datasets.every(function (d) {
      return isDatasetData(d);
    });
  }

  var ChartState;

  (function (ChartState) {
    ChartState["Initializing"] = "initializing";
    ChartState["Loading"] = "loading";
    ChartState["Error"] = "error";
    ChartState["Show"] = "show";
  })(ChartState || (ChartState = {}));

  var Chartisan =
  /*#__PURE__*/
  function () {
    function Chartisan(options) {
      _classCallCheck(this, Chartisan);

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
        }
      };
      this.cstate = ChartState.Initializing;

      var _this$options = this.options = Object.assign(Object.assign({}, this.options), options),
          el = _this$options.el;

      var element = document.querySelector(el);
      if (!element) throw Error("[Chartisan] Unable to find an element to bind the chart to a DOM element with the selector = '".concat(el, "'"));
      this.element = element;
      this.controller = document.createElement('div');
      this.bootstrap();
    }

    _createClass(Chartisan, [{
      key: "changeTo",
      value: function changeTo(state, err) {
        switch (state) {
          case (ChartState.Initializing, ChartState.Loading):
            {
              this.controller.innerHTML = loader(this.options.loader);
              break;
            }

          case ChartState.Show:
            {
              this.controller.innerHTML = '';
              break;
            }

          case ChartState.Error:
            {
              this.controller.innerHTML = error(this.options.error, err !== null && err !== void 0 ? err : new Error('Unknown Error'));
              this.refreshEvent();
              break;
            }
        }

        this.cstate = state;
      }
    }, {
      key: "bootstrap",
      value: function bootstrap() {
        this.element.appendChild(this.controller);
        this.controller.classList.add('chartisan');
        this.request();
      }
    }, {
      key: "request",
      value: function request() {
        var _this = this;

        this.changeTo(ChartState.Loading);
        fetch(this.options.url).then(function (res) {
          return res.json();
        }).then(function (res) {
          return _this.onRawUpdate(res);
        }).catch(function (err) {
          return _this.onError(err);
        });
      }
    }, {
      key: "refreshEvent",
      value: function refreshEvent() {
        var _this2 = this;

        var refresh = this.controller.getElementsByClassName('chartisan-refresh-chart')[0];
        refresh.addEventListener('click', function () {
          return _this2.refresh();
        }, {
          once: true
        });
      }
    }, {
      key: "refresh",
      value: function refresh() {
        this.request();
      }
    }, {
      key: "onRawUpdate",
      value: function onRawUpdate(response) {
        if (!isServerData(response)) return this.onError(new Error('Invalid server data'));
        this.changeTo(ChartState.Show);
        this.onUpdate(response);
      }
    }, {
      key: "onError",
      value: function onError(err) {
        this.changeTo(ChartState.Error, err);
      }
    }, {
      key: "state",
      value: function state() {
        return this.cstate;
      }
    }]);

    return Chartisan;
  }();

  var Chart =
  /*#__PURE__*/
  function (_Chartisan) {
    _inherits(Chart, _Chartisan);

    function Chart(options) {
      var _this;

      _classCallCheck(this, Chart);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Chart).call(this, options));
      _this.canvas = document.createElement('canvas');
      return _this;
    }

    _createClass(Chart, [{
      key: "onUpdate",
      value: function onUpdate(response) {
        console.log(response);
      }
    }]);

    return Chart;
  }(Chartisan);
  window.Chartisan = Chart;

  exports.Chart = Chart;

  return exports;

}({}));
