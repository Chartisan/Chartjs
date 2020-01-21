(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('chart.js')) :
    typeof define === 'function' && define.amd ? define(['exports', 'chart.js'], factory) :
    (global = global || self, factory(global['@chartisan/chartjs'] = {}, global.Chart));
}(this, (function (exports, Chart) { 'use strict';

    Chart = Chart && Chart.hasOwnProperty('default') ? Chart['default'] : Chart;

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
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

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

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function _typeof(obj) {
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function (obj) {
          return typeof obj;
        };
      } else {
        _typeof = function (obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
      }

      return _typeof(obj);
    }

    var REACT_ELEMENT_TYPE;

    function _jsx(type, props, key, children) {
      if (!REACT_ELEMENT_TYPE) {
        REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 0xeac7;
      }

      var defaultProps = type && type.defaultProps;
      var childrenLength = arguments.length - 3;

      if (!props && childrenLength !== 0) {
        props = {
          children: void 0
        };
      }

      if (childrenLength === 1) {
        props.children = children;
      } else if (childrenLength > 1) {
        var childArray = new Array(childrenLength);

        for (var i = 0; i < childrenLength; i++) {
          childArray[i] = arguments[i + 3];
        }

        props.children = childArray;
      }

      if (props && defaultProps) {
        for (var propName in defaultProps) {
          if (props[propName] === void 0) {
            props[propName] = defaultProps[propName];
          }
        }
      } else if (!props) {
        props = defaultProps || {};
      }

      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type: type,
        key: key === undefined ? null : '' + key,
        ref: null,
        props: props,
        _owner: null
      };
    }

    function _asyncIterator(iterable) {
      var method;

      if (typeof Symbol !== "undefined") {
        if (Symbol.asyncIterator) {
          method = iterable[Symbol.asyncIterator];
          if (method != null) return method.call(iterable);
        }

        if (Symbol.iterator) {
          method = iterable[Symbol.iterator];
          if (method != null) return method.call(iterable);
        }
      }

      throw new TypeError("Object is not async iterable");
    }

    function _AwaitValue(value) {
      this.wrapped = value;
    }

    function _AsyncGenerator(gen) {
      var front, back;

      function send(key, arg) {
        return new Promise(function (resolve, reject) {
          var request = {
            key: key,
            arg: arg,
            resolve: resolve,
            reject: reject,
            next: null
          };

          if (back) {
            back = back.next = request;
          } else {
            front = back = request;
            resume(key, arg);
          }
        });
      }

      function resume(key, arg) {
        try {
          var result = gen[key](arg);
          var value = result.value;
          var wrappedAwait = value instanceof _AwaitValue;
          Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) {
            if (wrappedAwait) {
              resume(key === "return" ? "return" : "next", arg);
              return;
            }

            settle(result.done ? "return" : "normal", arg);
          }, function (err) {
            resume("throw", err);
          });
        } catch (err) {
          settle("throw", err);
        }
      }

      function settle(type, value) {
        switch (type) {
          case "return":
            front.resolve({
              value: value,
              done: true
            });
            break;

          case "throw":
            front.reject(value);
            break;

          default:
            front.resolve({
              value: value,
              done: false
            });
            break;
        }

        front = front.next;

        if (front) {
          resume(front.key, front.arg);
        } else {
          back = null;
        }
      }

      this._invoke = send;

      if (typeof gen.return !== "function") {
        this.return = undefined;
      }
    }

    if (typeof Symbol === "function" && Symbol.asyncIterator) {
      _AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
        return this;
      };
    }

    _AsyncGenerator.prototype.next = function (arg) {
      return this._invoke("next", arg);
    };

    _AsyncGenerator.prototype.throw = function (arg) {
      return this._invoke("throw", arg);
    };

    _AsyncGenerator.prototype.return = function (arg) {
      return this._invoke("return", arg);
    };

    function _wrapAsyncGenerator(fn) {
      return function () {
        return new _AsyncGenerator(fn.apply(this, arguments));
      };
    }

    function _awaitAsyncGenerator(value) {
      return new _AwaitValue(value);
    }

    function _asyncGeneratorDelegate(inner, awaitWrap) {
      var iter = {},
          waiting = false;

      function pump(key, value) {
        waiting = true;
        value = new Promise(function (resolve) {
          resolve(inner[key](value));
        });
        return {
          done: false,
          value: awaitWrap(value)
        };
      }

      ;

      if (typeof Symbol === "function" && Symbol.iterator) {
        iter[Symbol.iterator] = function () {
          return this;
        };
      }

      iter.next = function (value) {
        if (waiting) {
          waiting = false;
          return value;
        }

        return pump("next", value);
      };

      if (typeof inner.throw === "function") {
        iter.throw = function (value) {
          if (waiting) {
            waiting = false;
            throw value;
          }

          return pump("throw", value);
        };
      }

      if (typeof inner.return === "function") {
        iter.return = function (value) {
          if (waiting) {
            waiting = false;
            return value;
          }

          return pump("return", value);
        };
      }

      return iter;
    }

    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
      try {
        var info = gen[key](arg);
        var value = info.value;
      } catch (error) {
        reject(error);
        return;
      }

      if (info.done) {
        resolve(value);
      } else {
        Promise.resolve(value).then(_next, _throw);
      }
    }

    function _asyncToGenerator(fn) {
      return function () {
        var self = this,
            args = arguments;
        return new Promise(function (resolve, reject) {
          var gen = fn.apply(self, args);

          function _next(value) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
          }

          function _throw(err) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
          }

          _next(undefined);
        });
      };
    }

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

    function _defineEnumerableProperties(obj, descs) {
      for (var key in descs) {
        var desc = descs[key];
        desc.configurable = desc.enumerable = true;
        if ("value" in desc) desc.writable = true;
        Object.defineProperty(obj, key, desc);
      }

      if (Object.getOwnPropertySymbols) {
        var objectSymbols = Object.getOwnPropertySymbols(descs);

        for (var i = 0; i < objectSymbols.length; i++) {
          var sym = objectSymbols[i];
          var desc = descs[sym];
          desc.configurable = desc.enumerable = true;
          if ("value" in desc) desc.writable = true;
          Object.defineProperty(obj, sym, desc);
        }
      }

      return obj;
    }

    function _defaults(obj, defaults) {
      var keys = Object.getOwnPropertyNames(defaults);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var value = Object.getOwnPropertyDescriptor(defaults, key);

        if (value && value.configurable && obj[key] === undefined) {
          Object.defineProperty(obj, key, value);
        }
      }

      return obj;
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

    function _extends() {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      return _extends.apply(this, arguments);
    }

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(Object(source));

        if (typeof Object.getOwnPropertySymbols === 'function') {
          ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
          }));
        }

        ownKeys.forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      }

      return target;
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

    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
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

    function isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;

      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
        return true;
      } catch (e) {
        return false;
      }
    }

    function _construct(Parent, args, Class) {
      if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct(Parent, args, Class) {
          var a = [null];
          a.push.apply(a, args);
          var Constructor = Function.bind.apply(Parent, a);
          var instance = new Constructor();
          if (Class) _setPrototypeOf(instance, Class.prototype);
          return instance;
        };
      }

      return _construct.apply(null, arguments);
    }

    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }

    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : undefined;

      _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;

        if (typeof Class !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }

        if (typeof _cache !== "undefined") {
          if (_cache.has(Class)) return _cache.get(Class);

          _cache.set(Class, Wrapper);
        }

        function Wrapper() {
          return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }

        Wrapper.prototype = Object.create(Class.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class);
      };

      return _wrapNativeSuper(Class);
    }

    function _instanceof(left, right) {
      if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
      } else {
        return left instanceof right;
      }
    }

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function _getRequireWildcardCache() {
      if (typeof WeakMap !== "function") return null;
      var cache = new WeakMap();

      _getRequireWildcardCache = function () {
        return cache;
      };

      return cache;
    }

    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }

      if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
          default: obj
        };
      }

      var cache = _getRequireWildcardCache();

      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }

      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }

      newObj.default = obj;

      if (cache) {
        cache.set(obj, newObj);
      }

      return newObj;
    }

    function _newArrowCheck(innerThis, boundThis) {
      if (innerThis !== boundThis) {
        throw new TypeError("Cannot instantiate an arrow function");
      }
    }

    function _objectDestructuringEmpty(obj) {
      if (obj == null) throw new TypeError("Cannot destructure undefined");
    }

    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null) return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;

      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
      }

      return target;
    }

    function _objectWithoutProperties(source, excluded) {
      if (source == null) return {};

      var target = _objectWithoutPropertiesLoose(source, excluded);

      var key, i;

      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key = sourceSymbolKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
          target[key] = source[key];
        }
      }

      return target;
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

    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null) break;
      }

      return object;
    }

    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get(target, property, receiver) {
          var base = _superPropBase(target, property);

          if (!base) return;
          var desc = Object.getOwnPropertyDescriptor(base, property);

          if (desc.get) {
            return desc.get.call(receiver);
          }

          return desc.value;
        };
      }

      return _get(target, property, receiver || target);
    }

    function set(target, property, value, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.set) {
        set = Reflect.set;
      } else {
        set = function set(target, property, value, receiver) {
          var base = _superPropBase(target, property);

          var desc;

          if (base) {
            desc = Object.getOwnPropertyDescriptor(base, property);

            if (desc.set) {
              desc.set.call(receiver, value);
              return true;
            } else if (!desc.writable) {
              return false;
            }
          }

          desc = Object.getOwnPropertyDescriptor(receiver, property);

          if (desc) {
            if (!desc.writable) {
              return false;
            }

            desc.value = value;
            Object.defineProperty(receiver, property, desc);
          } else {
            _defineProperty(receiver, property, value);
          }

          return true;
        };
      }

      return set(target, property, value, receiver);
    }

    function _set(target, property, value, receiver, isStrict) {
      var s = set(target, property, value, receiver || target);

      if (!s && isStrict) {
        throw new Error('failed to set property');
      }

      return value;
    }

    function _taggedTemplateLiteral(strings, raw) {
      if (!raw) {
        raw = strings.slice(0);
      }

      return Object.freeze(Object.defineProperties(strings, {
        raw: {
          value: Object.freeze(raw)
        }
      }));
    }

    function _taggedTemplateLiteralLoose(strings, raw) {
      if (!raw) {
        raw = strings.slice(0);
      }

      strings.raw = raw;
      return strings;
    }

    function _readOnlyError(name) {
      throw new Error("\"" + name + "\" is read-only");
    }

    function _classNameTDZError(name) {
      throw new Error("Class \"" + name + "\" cannot be referenced in computed property keys.");
    }

    function _temporalUndefined() {}

    function _tdz(name) {
      throw new ReferenceError(name + " is not defined - temporal dead zone");
    }

    function _temporalRef(val, name) {
      return val === _temporalUndefined ? _tdz(name) : val;
    }

    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
    }

    function _slicedToArrayLoose(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimitLoose(arr, i) || _nonIterableRest();
    }

    function _toArray(arr) {
      return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest();
    }

    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
    }

    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

        return arr2;
      }
    }

    function _arrayWithHoles(arr) {
      if (Array.isArray(arr)) return arr;
    }

    function _iterableToArray(iter) {
      if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
    }

    function _iterableToArrayLimit(arr, i) {
      if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
        return;
      }

      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    function _iterableToArrayLimitLoose(arr, i) {
      if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
        return;
      }

      var _arr = [];

      for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
        _arr.push(_step.value);

        if (i && _arr.length === i) break;
      }

      return _arr;
    }

    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }

    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }

    function _skipFirstGeneratorNext(fn) {
      return function () {
        var it = fn.apply(this, arguments);
        it.next();
        return it;
      };
    }

    function _toPrimitive(input, hint) {
      if (typeof input !== "object" || input === null) return input;
      var prim = input[Symbol.toPrimitive];

      if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }

      return (hint === "string" ? String : Number)(input);
    }

    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");

      return typeof key === "symbol" ? key : String(key);
    }

    function _initializerWarningHelper(descriptor, context) {
      throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.');
    }

    function _initializerDefineProperty(target, property, descriptor, context) {
      if (!descriptor) return;
      Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
      });
    }

    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
      var desc = {};
      Object.keys(descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
      });
      desc.enumerable = !!desc.enumerable;
      desc.configurable = !!desc.configurable;

      if ('value' in desc || desc.initializer) {
        desc.writable = true;
      }

      desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
      }, desc);

      if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
      }

      if (desc.initializer === void 0) {
        Object.defineProperty(target, property, desc);
        desc = null;
      }

      return desc;
    }

    var id = 0;

    function _classPrivateFieldLooseKey(name) {
      return "__private_" + id++ + "_" + name;
    }

    function _classPrivateFieldLooseBase(receiver, privateKey) {
      if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
        throw new TypeError("attempted to use private field on non-instance");
      }

      return receiver;
    }

    function _classPrivateFieldGet(receiver, privateMap) {
      var descriptor = privateMap.get(receiver);

      if (!descriptor) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      if (descriptor.get) {
        return descriptor.get.call(receiver);
      }

      return descriptor.value;
    }

    function _classPrivateFieldSet(receiver, privateMap, value) {
      var descriptor = privateMap.get(receiver);

      if (!descriptor) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      if (descriptor.set) {
        descriptor.set.call(receiver, value);
      } else {
        if (!descriptor.writable) {
          throw new TypeError("attempted to set read only private field");
        }

        descriptor.value = value;
      }

      return value;
    }

    function _classPrivateFieldDestructureSet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      var descriptor = privateMap.get(receiver);

      if (descriptor.set) {
        if (!("__destrObj" in descriptor)) {
          descriptor.__destrObj = {
            set value(v) {
              descriptor.set.call(receiver, v);
            }

          };
        }

        return descriptor.__destrObj;
      } else {
        if (!descriptor.writable) {
          throw new TypeError("attempted to set read only private field");
        }

        return descriptor;
      }
    }

    function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) {
      if (receiver !== classConstructor) {
        throw new TypeError("Private static access of wrong provenance");
      }

      if (descriptor.get) {
        return descriptor.get.call(receiver);
      }

      return descriptor.value;
    }

    function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) {
      if (receiver !== classConstructor) {
        throw new TypeError("Private static access of wrong provenance");
      }

      if (descriptor.set) {
        descriptor.set.call(receiver, value);
      } else {
        if (!descriptor.writable) {
          throw new TypeError("attempted to set read only private field");
        }

        descriptor.value = value;
      }

      return value;
    }

    function _classStaticPrivateMethodGet(receiver, classConstructor, method) {
      if (receiver !== classConstructor) {
        throw new TypeError("Private static access of wrong provenance");
      }

      return method;
    }

    function _classStaticPrivateMethodSet() {
      throw new TypeError("attempted to set read only static private field");
    }

    function _decorate(decorators, factory, superClass, mixins) {
      var api = _getDecoratorsApi();

      if (mixins) {
        for (var i = 0; i < mixins.length; i++) {
          api = mixins[i](api);
        }
      }

      var r = factory(function initialize(O) {
        api.initializeInstanceElements(O, decorated.elements);
      }, superClass);
      var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators);
      api.initializeClassElements(r.F, decorated.elements);
      return api.runClassFinishers(r.F, decorated.finishers);
    }

    function _getDecoratorsApi() {
      _getDecoratorsApi = function () {
        return api;
      };

      var api = {
        elementsDefinitionOrder: [["method"], ["field"]],
        initializeInstanceElements: function (O, elements) {
          ["method", "field"].forEach(function (kind) {
            elements.forEach(function (element) {
              if (element.kind === kind && element.placement === "own") {
                this.defineClassElement(O, element);
              }
            }, this);
          }, this);
        },
        initializeClassElements: function (F, elements) {
          var proto = F.prototype;
          ["method", "field"].forEach(function (kind) {
            elements.forEach(function (element) {
              var placement = element.placement;

              if (element.kind === kind && (placement === "static" || placement === "prototype")) {
                var receiver = placement === "static" ? F : proto;
                this.defineClassElement(receiver, element);
              }
            }, this);
          }, this);
        },
        defineClassElement: function (receiver, element) {
          var descriptor = element.descriptor;

          if (element.kind === "field") {
            var initializer = element.initializer;
            descriptor = {
              enumerable: descriptor.enumerable,
              writable: descriptor.writable,
              configurable: descriptor.configurable,
              value: initializer === void 0 ? void 0 : initializer.call(receiver)
            };
          }

          Object.defineProperty(receiver, element.key, descriptor);
        },
        decorateClass: function (elements, decorators) {
          var newElements = [];
          var finishers = [];
          var placements = {
            static: [],
            prototype: [],
            own: []
          };
          elements.forEach(function (element) {
            this.addElementPlacement(element, placements);
          }, this);
          elements.forEach(function (element) {
            if (!_hasDecorators(element)) return newElements.push(element);
            var elementFinishersExtras = this.decorateElement(element, placements);
            newElements.push(elementFinishersExtras.element);
            newElements.push.apply(newElements, elementFinishersExtras.extras);
            finishers.push.apply(finishers, elementFinishersExtras.finishers);
          }, this);

          if (!decorators) {
            return {
              elements: newElements,
              finishers: finishers
            };
          }

          var result = this.decorateConstructor(newElements, decorators);
          finishers.push.apply(finishers, result.finishers);
          result.finishers = finishers;
          return result;
        },
        addElementPlacement: function (element, placements, silent) {
          var keys = placements[element.placement];

          if (!silent && keys.indexOf(element.key) !== -1) {
            throw new TypeError("Duplicated element (" + element.key + ")");
          }

          keys.push(element.key);
        },
        decorateElement: function (element, placements) {
          var extras = [];
          var finishers = [];

          for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) {
            var keys = placements[element.placement];
            keys.splice(keys.indexOf(element.key), 1);
            var elementObject = this.fromElementDescriptor(element);
            var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject);
            element = elementFinisherExtras.element;
            this.addElementPlacement(element, placements);

            if (elementFinisherExtras.finisher) {
              finishers.push(elementFinisherExtras.finisher);
            }

            var newExtras = elementFinisherExtras.extras;

            if (newExtras) {
              for (var j = 0; j < newExtras.length; j++) {
                this.addElementPlacement(newExtras[j], placements);
              }

              extras.push.apply(extras, newExtras);
            }
          }

          return {
            element: element,
            finishers: finishers,
            extras: extras
          };
        },
        decorateConstructor: function (elements, decorators) {
          var finishers = [];

          for (var i = decorators.length - 1; i >= 0; i--) {
            var obj = this.fromClassDescriptor(elements);
            var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj);

            if (elementsAndFinisher.finisher !== undefined) {
              finishers.push(elementsAndFinisher.finisher);
            }

            if (elementsAndFinisher.elements !== undefined) {
              elements = elementsAndFinisher.elements;

              for (var j = 0; j < elements.length - 1; j++) {
                for (var k = j + 1; k < elements.length; k++) {
                  if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) {
                    throw new TypeError("Duplicated element (" + elements[j].key + ")");
                  }
                }
              }
            }
          }

          return {
            elements: elements,
            finishers: finishers
          };
        },
        fromElementDescriptor: function (element) {
          var obj = {
            kind: element.kind,
            key: element.key,
            placement: element.placement,
            descriptor: element.descriptor
          };
          var desc = {
            value: "Descriptor",
            configurable: true
          };
          Object.defineProperty(obj, Symbol.toStringTag, desc);
          if (element.kind === "field") obj.initializer = element.initializer;
          return obj;
        },
        toElementDescriptors: function (elementObjects) {
          if (elementObjects === undefined) return;
          return _toArray(elementObjects).map(function (elementObject) {
            var element = this.toElementDescriptor(elementObject);
            this.disallowProperty(elementObject, "finisher", "An element descriptor");
            this.disallowProperty(elementObject, "extras", "An element descriptor");
            return element;
          }, this);
        },
        toElementDescriptor: function (elementObject) {
          var kind = String(elementObject.kind);

          if (kind !== "method" && kind !== "field") {
            throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"');
          }

          var key = _toPropertyKey(elementObject.key);

          var placement = String(elementObject.placement);

          if (placement !== "static" && placement !== "prototype" && placement !== "own") {
            throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"');
          }

          var descriptor = elementObject.descriptor;
          this.disallowProperty(elementObject, "elements", "An element descriptor");
          var element = {
            kind: kind,
            key: key,
            placement: placement,
            descriptor: Object.assign({}, descriptor)
          };

          if (kind !== "field") {
            this.disallowProperty(elementObject, "initializer", "A method descriptor");
          } else {
            this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor");
            this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor");
            this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor");
            element.initializer = elementObject.initializer;
          }

          return element;
        },
        toElementFinisherExtras: function (elementObject) {
          var element = this.toElementDescriptor(elementObject);

          var finisher = _optionalCallableProperty(elementObject, "finisher");

          var extras = this.toElementDescriptors(elementObject.extras);
          return {
            element: element,
            finisher: finisher,
            extras: extras
          };
        },
        fromClassDescriptor: function (elements) {
          var obj = {
            kind: "class",
            elements: elements.map(this.fromElementDescriptor, this)
          };
          var desc = {
            value: "Descriptor",
            configurable: true
          };
          Object.defineProperty(obj, Symbol.toStringTag, desc);
          return obj;
        },
        toClassDescriptor: function (obj) {
          var kind = String(obj.kind);

          if (kind !== "class") {
            throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"');
          }

          this.disallowProperty(obj, "key", "A class descriptor");
          this.disallowProperty(obj, "placement", "A class descriptor");
          this.disallowProperty(obj, "descriptor", "A class descriptor");
          this.disallowProperty(obj, "initializer", "A class descriptor");
          this.disallowProperty(obj, "extras", "A class descriptor");

          var finisher = _optionalCallableProperty(obj, "finisher");

          var elements = this.toElementDescriptors(obj.elements);
          return {
            elements: elements,
            finisher: finisher
          };
        },
        runClassFinishers: function (constructor, finishers) {
          for (var i = 0; i < finishers.length; i++) {
            var newConstructor = (0, finishers[i])(constructor);

            if (newConstructor !== undefined) {
              if (typeof newConstructor !== "function") {
                throw new TypeError("Finishers must return a constructor.");
              }

              constructor = newConstructor;
            }
          }

          return constructor;
        },
        disallowProperty: function (obj, name, objectType) {
          if (obj[name] !== undefined) {
            throw new TypeError(objectType + " can't have a ." + name + " property.");
          }
        }
      };
      return api;
    }

    function _createElementDescriptor(def) {
      var key = _toPropertyKey(def.key);

      var descriptor;

      if (def.kind === "method") {
        descriptor = {
          value: def.value,
          writable: true,
          configurable: true,
          enumerable: false
        };
      } else if (def.kind === "get") {
        descriptor = {
          get: def.value,
          configurable: true,
          enumerable: false
        };
      } else if (def.kind === "set") {
        descriptor = {
          set: def.value,
          configurable: true,
          enumerable: false
        };
      } else if (def.kind === "field") {
        descriptor = {
          configurable: true,
          writable: true,
          enumerable: true
        };
      }

      var element = {
        kind: def.kind === "field" ? "field" : "method",
        key: key,
        placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype",
        descriptor: descriptor
      };
      if (def.decorators) element.decorators = def.decorators;
      if (def.kind === "field") element.initializer = def.value;
      return element;
    }

    function _coalesceGetterSetter(element, other) {
      if (element.descriptor.get !== undefined) {
        other.descriptor.get = element.descriptor.get;
      } else {
        other.descriptor.set = element.descriptor.set;
      }
    }

    function _coalesceClassElements(elements) {
      var newElements = [];

      var isSameElement = function (other) {
        return other.kind === "method" && other.key === element.key && other.placement === element.placement;
      };

      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var other;

        if (element.kind === "method" && (other = newElements.find(isSameElement))) {
          if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) {
            if (_hasDecorators(element) || _hasDecorators(other)) {
              throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated.");
            }

            other.descriptor = element.descriptor;
          } else {
            if (_hasDecorators(element)) {
              if (_hasDecorators(other)) {
                throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ").");
              }

              other.decorators = element.decorators;
            }

            _coalesceGetterSetter(element, other);
          }
        } else {
          newElements.push(element);
        }
      }

      return newElements;
    }

    function _hasDecorators(element) {
      return element.decorators && element.decorators.length;
    }

    function _isDataDescriptor(desc) {
      return desc !== undefined && !(desc.value === undefined && desc.writable === undefined);
    }

    function _optionalCallableProperty(obj, name) {
      var value = obj[name];

      if (value !== undefined && typeof value !== "function") {
        throw new TypeError("Expected '" + name + "' to be a function");
      }

      return value;
    }

    function _classPrivateMethodGet(receiver, privateSet, fn) {
      if (!privateSet.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return fn;
    }

    function _classPrivateMethodSet() {
      throw new TypeError("attempted to reassign private method");
    }

    function _wrapRegExp(re, groups) {
      _wrapRegExp = function (re, groups) {
        return new BabelRegExp(re, undefined, groups);
      };

      var _RegExp = _wrapNativeSuper(RegExp);

      var _super = RegExp.prototype;

      var _groups = new WeakMap();

      function BabelRegExp(re, flags, groups) {
        var _this = _RegExp.call(this, re, flags);

        _groups.set(_this, groups || _groups.get(re));

        return _this;
      }

      _inherits(BabelRegExp, _RegExp);

      BabelRegExp.prototype.exec = function (str) {
        var result = _super.exec.call(this, str);

        if (result) result.groups = buildGroups(result, this);
        return result;
      };

      BabelRegExp.prototype[Symbol.replace] = function (str, substitution) {
        if (typeof substitution === "string") {
          var groups = _groups.get(this);

          return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) {
            return "$" + groups[name];
          }));
        } else if (typeof substitution === "function") {
          var _this = this;

          return _super[Symbol.replace].call(this, str, function () {
            var args = [];
            args.push.apply(args, arguments);

            if (typeof args[args.length - 1] !== "object") {
              args.push(buildGroups(args, _this));
            }

            return substitution.apply(this, args);
          });
        } else {
          return _super[Symbol.replace].call(this, str, substitution);
        }
      };

      function buildGroups(result, re) {
        var g = _groups.get(re);

        return Object.keys(g).reduce(function (groups, name) {
          groups[name] = result[g[name]];
          return groups;
        }, Object.create(null));
      }

      return _wrapRegExp.apply(this, arguments);
    }

    function t(t) {
      return "labels" in t && "extra" in t;
    }

    function n(t) {
      return "id" in t && "name" in t && "values" in t && "extra" in t;
    }

    function e(e) {
      return "chart" in e && "datasets" in e && t(e.chart) && e.datasets.every(function (t) {
        return n(t);
      });
    }

    !function (t, n) {
      void 0 === n && (n = {});
      var e = n.insertAt;

      if (t && "undefined" != typeof document) {
        var r = document.head || document.getElementsByTagName("head")[0],
            i = document.createElement("style");
        i.type = "text/css", "top" === e && r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i), i.styleSheet ? i.styleSheet.cssText = t : i.appendChild(document.createTextNode(t));
      }
    }(".chartisan-controller,\n.chartisan-body {\n    position: relative;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.chartisan-modal {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    justify-content: center;\n    align-items: center;\n}\n.chartisan-help-block {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.chartisan-help-text {\n    margin-top: 1.5rem;\n    text-transform: uppercase;\n    letter-spacing: 0.2em;\n    font-size: 0.75rem;\n}\n.chartisan-help-text-error {\n    margin-top: 1.5rem;\n    text-transform: uppercase;\n    letter-spacing: 0.2em;\n    font-size: 0.6rem;\n    color: #f56565;\n}\n.chartisan-refresh-chart {\n    cursor: pointer;\n}\n");

    var r = function r() {
      this.hooks = [];
    },
        i = function i(t) {
      return function (t) {
        return !!t && "object" == _typeof(t);
      }(t) && !function (t) {
        var n = Object.prototype.toString.call(t);
        return "[object RegExp]" === n || "[object Date]" === n || function (t) {
          return t.$$typeof === o;
        }(t);
      }(t);
    };

    var o = "function" == typeof Symbol && Symbol["for"] ? Symbol["for"]("react.element") : 60103;

    function a(t, n) {
      return !1 !== n.clone && n.isMergeableObject(t) ? d((e = t, Array.isArray(e) ? [] : {}), t, n) : t;
      var e;
    }

    function s(t, n, e) {
      return t.concat(n).map(function (t) {
        return a(t, e);
      });
    }

    function c(t) {
      return Object.keys(t).concat(function (t) {
        return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function (n) {
          return t.propertyIsEnumerable(n);
        }) : [];
      }(t));
    }

    function l(t, n) {
      try {
        return n in t;
      } catch (t) {
        return !1;
      }
    }

    function h(t, n, e) {
      var r = {};
      return e.isMergeableObject(t) && c(t).forEach(function (n) {
        r[n] = a(t[n], e);
      }), c(n).forEach(function (i) {
        (function (t, n) {
          return l(t, n) && !(Object.hasOwnProperty.call(t, n) && Object.propertyIsEnumerable.call(t, n));
        })(t, i) || (l(t, i) && e.isMergeableObject(n[i]) ? r[i] = function (t, n) {
          if (!n.customMerge) return d;
          var e = n.customMerge(t);
          return "function" == typeof e ? e : d;
        }(i, e)(t[i], n[i], e) : r[i] = a(n[i], e));
      }), r;
    }

    function d(t, n, e) {
      (e = e || {}).arrayMerge = e.arrayMerge || s, e.isMergeableObject = e.isMergeableObject || i, e.cloneUnlessOtherwiseSpecified = a;
      var r = Array.isArray(n);
      return r === Array.isArray(t) ? r ? e.arrayMerge(t, n, e) : h(t, n, e) : a(n, e);
    }

    d.all = function (t, n) {
      if (!Array.isArray(t)) throw new Error("first argument should be an array");
      return t.reduce(function (t, e) {
        return d(t, e, n);
      }, {});
    };

    var u,
        p = ["#667EEA", "#F56565", "#48BB78", "#ED8936", "#9F7AEA", "#38B2AC", "#ECC94B", "#4299E1", "#ED64A6"],
        f = d,
        _v = function v() {
      return (_v = Object.assign || function (t) {
        for (var n, e = 1, r = arguments.length; e < r; e++) {
          for (var i in n = arguments[e]) {
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
        }

        return t;
      }).apply(this, arguments);
    },
        g = {
      general: function general(t) {
        var n = t.size,
            e = t.color;
        return '\n    <svg\n        role="img"\n        xmlns="http://www.w3.org/2000/svg"\n        width="' + n[0] + '"\n        height="' + n[1] + '"\n        viewBox="0 0 24 24"\n        aria-labelledby="refreshIconTitle"\n        stroke="' + e + '"\n        stroke-width="1"\n        stroke-linecap="square"\n        stroke-linejoin="miter"\n        fill="none"\n        color="' + e + '"\n    >\n        <title id="refreshIconTitle">Refresh</title>\n        <polyline points="22 12 19 15 16 12"/>\n        <path d="M11,20 C6.581722,20 3,16.418278 3,12 C3,7.581722 6.581722,4 11,4 C15.418278,4 19,7.581722 19,12 L19,14"/>\n    </svg>\n';
      }
    },
        m = function m(t, n) {
      return '\n    <div class="chartisan-help-block">\n    <div class="chartisan-refresh-chart">\n        ' + g[t.type](t) + "\n    </div>\n    " + ("" != t.text ? '\n                <div class="chartisan-help-text" style="color: ' + t.textColor + ';">\n                    ' + t.text + "\n                </div>\n            " : "") + "\n    " + (t.debug ? '<div class="chartisan-help-text-error">\n        ' + n.message + "\n    </div>" : "") + "\n    </div>\n";
    },
        y = {
      bar: function bar(t) {
        var n = t.size,
            e = t.color;
        return '\n    <svg width="' + n[0] + '" height="' + n[1] + '" viewBox="0 0 135 140" xmlns="http://www.w3.org/2000/svg" fill="' + e + '">\n        <rect y="10" width="15" height="120" rx="6">\n            <animate attributeName="height"\n                begin="0.5s" dur="1s"\n                values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"\n                repeatCount="indefinite" />\n            <animate attributeName="y"\n                begin="0.5s" dur="1s"\n                values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"\n                repeatCount="indefinite" />\n        </rect>\n        <rect x="30" y="10" width="15" height="120" rx="6">\n            <animate attributeName="height"\n                begin="0.25s" dur="1s"\n                values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"\n                repeatCount="indefinite" />\n            <animate attributeName="y"\n                begin="0.25s" dur="1s"\n                values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"\n                repeatCount="indefinite" />\n        </rect>\n        <rect x="60" width="15" height="140" rx="6">\n            <animate attributeName="height"\n                begin="0s" dur="1s"\n                values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"\n                repeatCount="indefinite" />\n            <animate attributeName="y"\n                begin="0s" dur="1s"\n                values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"\n                repeatCount="indefinite" />\n        </rect>\n        <rect x="90" y="10" width="15" height="120" rx="6">\n            <animate attributeName="height"\n                begin="0.25s" dur="1s"\n                values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"\n                repeatCount="indefinite" />\n            <animate attributeName="y"\n                begin="0.25s" dur="1s"\n                values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"\n                repeatCount="indefinite" />\n        </rect>\n        <rect x="120" y="10" width="15" height="120" rx="6">\n            <animate attributeName="height"\n                begin="0.5s" dur="1s"\n                values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"\n                repeatCount="indefinite" />\n            <animate attributeName="y"\n                begin="0.5s" dur="1s"\n                values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"\n                repeatCount="indefinite" />\n        </rect>\n    </svg>\n';
      }
    },
        b = function b(t) {
      return '\n    <div class="chartisan-help-block">\n        ' + y[t.type](t) + "\n        " + ("" != t.text ? '\n                    <div class="chartisan-help-text" style="color: ' + t.textColor + ';">\n                        ' + t.text + "\n                    </div>\n                " : "") + "\n    </div>\n";
    };

    !function (t) {
      t.Initializing = "initializing", t.Loading = "loading", t.Error = "error", t.Show = "show";
    }(u || (u = {}));

    var w = function () {
      function t(t) {
        this.options = {
          el: ".chart",
          url: void 0,
          options: void 0,
          data: void 0,
          loader: {
            type: "bar",
            size: [35, 35],
            color: "#000",
            text: "Loading chart",
            textColor: "#a0aec0"
          },
          error: {
            type: "general",
            size: [50, 50],
            color: "#f56565",
            text: "There was an error",
            textColor: "#a0aec0",
            debug: !0
          },
          hooks: void 0
        }, this.cstate = u.Initializing;

        var n = (this.options = _v(_v({}, this.options), t)).el,
            e = document.querySelector(n);

        if (!e) throw Error("[Chartisan] Unable to find an element to bind the chart to a DOM element with the selector = '" + n + "'");
        this.element = e, this.controller = document.createElement("div"), this.body = document.createElement("div"), this.modal = document.createElement("div"), this.bootstrap();
      }

      return t.prototype.setModal = function (t) {
        var n = t.show,
            e = void 0 === n || n,
            r = t.color,
            i = void 0 === r ? "#FFFFFF" : r,
            o = t.content;
        this.modal.style.backgroundColor = i, this.modal.style.display = e ? "flex" : "none", o && (this.modal.innerHTML = o);
      }, t.prototype.changeTo = function (t, n) {
        switch (t) {
          case (u.Initializing, u.Loading):
            this.setModal({
              show: !0,
              content: b(this.options.loader)
            });
            break;

          case u.Show:
            this.setModal({
              show: !1
            });
            break;

          case u.Error:
            this.setModal({
              show: !0,
              content: m(this.options.error, null != n ? n : new Error("Unknown Error"))
            }), this.refreshEvent();
        }

        this.cstate = t;
      }, t.prototype.bootstrap = function () {
        this.element.appendChild(this.controller), this.controller.appendChild(this.body), this.controller.appendChild(this.modal), this.controller.classList.add("chartisan-controller"), this.body.classList.add("chartisan-body"), this.modal.classList.add("chartisan-modal"), this.update(this.options);
      }, t.prototype.request = function (t) {
        var n = this;
        this.options.url || this.onError(new Error("[Chartisan] No URL provided to fetch the data.")), fetch(this.options.url, this.options.options).then(function (t) {
          return t.json();
        }).then(function (e) {
          return n.onRawUpdate(e, t);
        })["catch"](function (t) {
          return n.onError(t);
        });
      }, t.prototype.refreshEvent = function () {
        var t = this;
        this.controller.getElementsByClassName("chartisan-refresh-chart")[0].addEventListener("click", function () {
          return t.update();
        }, {
          once: !0
        });
      }, t.prototype.update = function (t) {
        var n, r, i, o, a, s, c;

        if ((null === (n = t) || void 0 === n ? void 0 : n.url) && (this.options.url = t.url), (null === (r = t) || void 0 === r ? void 0 : r.options) && (this.options.options = t.options), null === (i = t) || void 0 === i ? void 0 : i.data) {
          var l = void 0;
          e(t.data) ? l = t.data : ((null === (o = t) || void 0 === o ? void 0 : o.background) || this.changeTo(u.Loading), l = t.data());
          var h = this.getDataFrom(l);
          return this.changeTo(u.Show), t.background ? this.onBackgroundUpdate(h, null === (a = t) || void 0 === a ? void 0 : a.additional) : this.onUpdate(h, null === (s = t) || void 0 === s ? void 0 : s.additional);
        }

        (null === (c = t) || void 0 === c ? void 0 : c.background) || this.changeTo(u.Loading), this.request(t);
      }, t.prototype.getDataFrom = function (t) {
        var n = this.formatData(t);
        if (this.options.hooks) for (var e = 0, r = this.options.hooks.hooks; e < r.length; e++) {
          n = (0, r[e])(n);
        }
        return n;
      }, t.prototype.onRawUpdate = function (t, n) {
        var r, i, o;
        if (!e(t)) return this.onError(new Error("Invalid server data"));
        var a = this.getDataFrom(t);
        this.changeTo(u.Show), (null === (r = n) || void 0 === r ? void 0 : r.background) ? this.onBackgroundUpdate(a, null === (i = n) || void 0 === i ? void 0 : i.additional) : this.onUpdate(a, null === (o = n) || void 0 === o ? void 0 : o.additional);
      }, t.prototype.onError = function (t) {
        this.changeTo(u.Error, t);
      }, t.prototype.state = function () {
        return this.cstate;
      }, t;
    }();

    var Hooks =
    /** @class */
    function (_super) {
      __extends(Hooks, _super);

      function Hooks() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      /**
       * Used to set the color color of a dataset.
       *
       * @param {*} [colors=colorPalette]
       * @returns {this}
       * @memberof Hooks
       */


      Hooks.prototype.colors = function (colors) {
        if (colors === void 0) {
          colors = p;
        }

        this.hooks.push(function (chart) {
          var _a;

          if ((_a = chart.data) === null || _a === void 0 ? void 0 : _a.datasets) chart.data.datasets = chart.data.datasets.map(function (dataset, index) {
            return __assign(__assign({}, dataset), {
              borderColor: colors[index % colors.length],
              backgroundColor: colors[index % colors.length]
            });
          });
          return chart;
        });
        return this;
      };
      /**
       * Used to make the chart responsive.
       *
       * @param {boolean} [maintainAspectRatio=true]
       * @returns {this}
       * @memberof Hooks
       */


      Hooks.prototype.responsive = function (value) {
        if (value === void 0) {
          value = true;
        }

        this.hooks.push(function (chart) {
          return f(chart, {
            options: {
              maintainAspectRatio: !value
            }
          });
        });
        return this;
      };
      /**
       * Set the chart legend options. If a boolean is
       * supplied, it will be used as the display value.
       *
       * @param {(boolean | ChartLegendOptions)} [legend={}]
       * @returns {this}
       * @memberof Hooks
       */


      Hooks.prototype.legend = function (legend) {
        if (legend === void 0) {
          legend = {};
        }

        if (typeof legend === 'boolean') legend = {
          display: legend
        };
        this.hooks.push(function (chart) {
          return f(chart, {
            options: {
              legend: legend
            }
          });
        });
        return this;
      };
      /**
       * Determines if the chart will show the axes.
       *
       * @param {boolean} [display=true]
       * @param {boolean} [strict=false]
       * @returns {Hook}
       * @memberof Hooks
       */


      Hooks.prototype.displayAxes = function (display, strict) {
        if (display === void 0) {
          display = true;
        }

        if (strict === void 0) {
          strict = false;
        }

        this.hooks.push(function (chart) {
          if (strict) return f(chart, {
            options: {
              scale: {
                display: display
              }
            }
          });
          return f(chart, {
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
      };
      /**
       * Creates a minimalist chart.
       *
       * @param {boolean} [value=true]
       * @returns {Hook}
       * @memberof Hooks
       */


      Hooks.prototype.minimalist = function (value) {
        if (value === void 0) {
          value = true;
        }

        this.legend({
          display: !value
        });
        this.displayAxes(!value);
        return this;
      };
      /**
       * Determines the padding of the chart.
       *
       * @param {(number | ChartLayoutPaddingObject)} [padding=5]
       * @returns
       * @memberof Hooks
       */


      Hooks.prototype.padding = function (padding) {
        if (padding === void 0) {
          padding = 5;
        }

        this.hooks.push(function (chart) {
          return f(chart, {
            options: {
              layout: {
                padding: padding
              }
            }
          });
        });
        return this;
      };
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


      Hooks.prototype.datasets = function (types, general) {
        if (general === void 0) {
          general = 'bar';
        }

        this.hooks.push(function (chart) {
          var _a;

          chart.type = typeof types === 'string' ? types : general;

          if (Array.isArray(types) && ((_a = chart.data) === null || _a === void 0 ? void 0 : _a.datasets)) {
            var t_1 = types.map(function (e) {
              return typeof e === 'string' ? {
                type: e
              } : e;
            });
            chart.data.datasets = chart.data.datasets.map(function (dataset, index) {
              return __assign(__assign({}, dataset), t_1[index % t_1.length]);
            });
          }

          return chart;
        });
        return this;
      };
      /**
       * Sets a title to the chart.
       *
       * @param {(string | ChartTitleOptions)} [title={}]
       * @returns {this}
       * @memberof Hooks
       */


      Hooks.prototype.title = function (title) {
        if (title === void 0) {
          title = {};
        }

        title = typeof title === 'string' ? {
          text: title,
          display: true
        } : __assign({
          display: true
        }, title);
        this.hooks.push(function (chart) {
          return f(chart, {
            options: {
              title: title
            }
          });
        });
        return this;
      };
      /**
       * Set the chart to begin at zero.
       *
       * @param {boolean} [beginAtZero=true]
       * @returns {this}
       * @memberof Hooks
       */


      Hooks.prototype.beginAtZero = function (beginAtZero) {
        if (beginAtZero === void 0) {
          beginAtZero = true;
        }

        this.hooks.push(function (chart) {
          return f(chart, {
            options: {
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: beginAtZero
                  }
                }]
              }
            }
          });
        });
        return this;
      };

      return Hooks;
    }(r);

    /**
     * Base chart class for ChartJS.
     *
     * @export
     * @class Chart
     * @extends {Base}
     */

    var Chartisan =
    /** @class */
    function (_super) {
      __extends(Chartisan, _super);

      function Chartisan() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      /**
       * Helper to mutate an array manually (this is used
       * because chartjs can only handle animations when the
       * original array is modified).
       *
       * @static
       * @template T
       * @param {T[]} dest
       * @param {T[]} src
       * @param {(dest: T[], src: T[], index: number) => void} [action]
       * @memberof Chartisan
       */


      Chartisan.mutateArray = function (dest, src, action) {
        var i;

        for (i = 0; i < src.length; i++) {
          if (i < dest.length) {
            if (action) {
              action(dest, src, i);
              continue;
            }

            dest[i] = src[i];
            continue;
          }

          dest.push(src[i]);
        }

        while (i < dest.length) {
          dest.pop();
        }
      };
      /**
       * Formats the data of the request to match the data that
       * the chart needs (acording to the desired front-end).
       *
       * @protected
       * @param {ServerData} response
       * @returns {ChartConfiguration}
       * @memberof Chartisan
       */


      Chartisan.prototype.formatData = function (response) {
        return {
          type: 'bar',
          data: {
            labels: response.chart.labels,
            datasets: response.datasets.map(function (_a) {
              var name = _a.name,
                  values = _a.values;
              return {
                label: name,
                data: values
              };
            })
          },
          options: {}
        };
      };
      /**
       * Renews the canvas for another chart to be used.
       *
       * @protected
       * @memberof Chartisan
       */


      Chartisan.prototype.renewCanvas = function () {
        if (this.canvas) this.body.removeChild(this.canvas);
        this.canvas = document.createElement('canvas');
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.body.appendChild(this.canvas);
      };
      /**
       * Handles a successfull response of the chart data.
       *
       * @protected
       * @param {ChartConfiguration} data
       * @memberof Chartisan
       */


      Chartisan.prototype.onUpdate = function (data) {
        if (this.chart) this.chart.destroy();
        this.renewCanvas();
        this.chart = new Chart(this.canvas, data);
      };
      /**
       * Handles a successfull response of the chart data
       * in the background (possibly, updating the values
       * of the chart without creating a new one).
       *
       * @protected
       * @param {ChartConfiguration} data
       * @param {ChartUpdateProps} [options]
       * @memberof Chartisan
       */


      Chartisan.prototype.onBackgroundUpdate = function (data, options) {
        var _a, _b;

        if (this.chart) {
          // Update the chart options.
          this.chart.options = __assign(__assign({}, this.chart.options), data.options); // Update the labels.

          if (this.chart.data.labels && ((_a = data.data) === null || _a === void 0 ? void 0 : _a.labels)) {
            Chartisan.mutateArray(this.chart.data.labels, data.data.labels);
          } // To update the data arrays, it need to be performed
          // to the original one. If the original one is not modified
          // no animation will be performed. Therefore, please don't
          // try beeing smarter here.


          if (this.chart.data.datasets && ((_b = data.data) === null || _b === void 0 ? void 0 : _b.datasets)) {
            Chartisan.mutateArray(this.chart.data.datasets, data.data.datasets, function (dest, src, i) {
              Chartisan.mutateArray(dest[i].data, src[i].data);
            });
          }

          this.chart.update(options);
        }
      };

      return Chartisan;
    }(w);
    window.Chartisan = Chartisan;
    window.ChartisanHooks = Hooks;

    exports.Chartisan = Chartisan;
    exports.ChartisanHooks = Hooks;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
