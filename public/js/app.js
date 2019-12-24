(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");

__webpack_require__(/*! ./components/run_prettify.js */ "./resources/js/components/run_prettify.js");

__webpack_require__(/*! ./components/clipboard.min.js */ "./resources/js/components/clipboard.min.js");



_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUserCircle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faArrowCircleUp"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faArrowCircleDown"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTrash"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSortUp"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSortDown"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEye"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faArrowRight"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faArrowLeft"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlusCircle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSearch"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSort"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPen"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTimes"]);
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["dom"].watch();
/*
import Vue from 'vue';
import VueRouter from 'vue-router';
// import VueMaterial from 'vue-material';
// import VeeValidare from 'vee-validate';

import Profile from './components/profile/Profile.vue';
import ExampleComponent from './components/ExampleComponent.vue';
import Toasted from 'vue-toasted';

Vue.use(VueRouter);
// Vue.use(VueMaterial);
// Vue.use(VeeValidate);

window.Vue = require('vue');

let routes = [{
    path: '/profile',
    component: Profile
}]

Vue.component('profile', require('./components/profile/Profile.vue'));

Vue.use(Toasted)
Vue.toasted.register('error', message => message, {
    position: 'bottom-center',
    duration: 1000
})

const router = new VueRouter({
    routes // short for `routes: routes`
});

Vue.component('example-component', ExampleComponent);

new Vue({
    router,
    render: (h) => h(Profile)
}).$mount('#profile');

*/
// Attention Merge à decommenter 
// const app = new Vue({
//     el: '#app',
// });

window.addEventListener("DOMContentLoaded", function (event) {
  var btn_burger = document.getElementById('bars');
  btn_burger.addEventListener('click', function () {
    btn_burger.classList.toggle('open');
  });
});

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.Popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")["default"];
  window.$ = window.jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
  window.ClipboardJS = __webpack_require__(/*! clipboard */ "./node_modules/clipboard/dist/clipboard.js");

  __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
} catch (e) {}
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */


window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });

/***/ }),

/***/ "./resources/js/components/clipboard.min.js":
/*!**************************************************!*\
  !*** ./resources/js/components/clipboard.min.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * clipboard.js v2.0.4
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
!function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module)) ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  return function (n) {
    var o = {};

    function r(t) {
      if (o[t]) return o[t].exports;
      var e = o[t] = {
        i: t,
        l: !1,
        exports: {}
      };
      return n[t].call(e.exports, e, e.exports, r), e.l = !0, e.exports;
    }

    return r.m = n, r.c = o, r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, {
        enumerable: !0,
        get: n
      });
    }, r.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      });
    }, r.t = function (e, t) {
      if (1 & t && (e = r(e)), 8 & t) return e;
      if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
      var n = Object.create(null);
      if (r.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var o in e) {
        r.d(n, o, function (t) {
          return e[t];
        }.bind(null, o));
      }
      return n;
    }, r.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t["default"];
      } : function () {
        return t;
      };
      return r.d(e, "a", e), e;
    }, r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, r.p = "", r(r.s = 0);
  }([function (t, e, n) {
    "use strict";

    var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
    },
        i = function () {
      function o(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        }
      }

      return function (t, e, n) {
        return e && o(t.prototype, e), n && o(t, n), t;
      };
    }(),
        a = o(n(1)),
        c = o(n(3)),
        u = o(n(4));

    function o(t) {
      return t && t.__esModule ? t : {
        "default": t
      };
    }

    var l = function (t) {
      function o(t, e) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, o);

        var n = function (t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
        }(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this));

        return n.resolveOptions(e), n.listenClick(t), n;
      }

      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
      }(o, c["default"]), i(o, [{
        key: "resolveOptions",
        value: function value() {
          var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
          this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, this.text = "function" == typeof t.text ? t.text : this.defaultText, this.container = "object" === r(t.container) ? t.container : document.body;
        }
      }, {
        key: "listenClick",
        value: function value(t) {
          var e = this;
          this.listener = (0, u["default"])(t, "click", function (t) {
            return e.onClick(t);
          });
        }
      }, {
        key: "onClick",
        value: function value(t) {
          var e = t.delegateTarget || t.currentTarget;
          this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new a["default"]({
            action: this.action(e),
            target: this.target(e),
            text: this.text(e),
            container: this.container,
            trigger: e,
            emitter: this
          });
        }
      }, {
        key: "defaultAction",
        value: function value(t) {
          return s("action", t);
        }
      }, {
        key: "defaultTarget",
        value: function value(t) {
          var e = s("target", t);
          if (e) return document.querySelector(e);
        }
      }, {
        key: "defaultText",
        value: function value(t) {
          return s("text", t);
        }
      }, {
        key: "destroy",
        value: function value() {
          this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null);
        }
      }], [{
        key: "isSupported",
        value: function value() {
          var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
              e = "string" == typeof t ? [t] : t,
              n = !!document.queryCommandSupported;
          return e.forEach(function (t) {
            n = n && !!document.queryCommandSupported(t);
          }), n;
        }
      }]), o;
    }();

    function s(t, e) {
      var n = "data-clipboard-" + t;
      if (e.hasAttribute(n)) return e.getAttribute(n);
    }

    t.exports = l;
  }, function (t, e, n) {
    "use strict";

    var o,
        r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
    },
        i = function () {
      function o(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        }
      }

      return function (t, e, n) {
        return e && o(t.prototype, e), n && o(t, n), t;
      };
    }(),
        a = n(2),
        c = (o = a) && o.__esModule ? o : {
      "default": o
    };

    var u = function () {
      function e(t) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, e), this.resolveOptions(t), this.initSelection();
      }

      return i(e, [{
        key: "resolveOptions",
        value: function value() {
          var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
          this.action = t.action, this.container = t.container, this.emitter = t.emitter, this.target = t.target, this.text = t.text, this.trigger = t.trigger, this.selectedText = "";
        }
      }, {
        key: "initSelection",
        value: function value() {
          this.text ? this.selectFake() : this.target && this.selectTarget();
        }
      }, {
        key: "selectFake",
        value: function value() {
          var t = this,
              e = "rtl" == document.documentElement.getAttribute("dir");
          this.removeFake(), this.fakeHandlerCallback = function () {
            return t.removeFake();
          }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[e ? "right" : "left"] = "-9999px";
          var n = window.pageYOffset || document.documentElement.scrollTop;
          this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, c["default"])(this.fakeElem), this.copyText();
        }
      }, {
        key: "removeFake",
        value: function value() {
          this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null);
        }
      }, {
        key: "selectTarget",
        value: function value() {
          this.selectedText = (0, c["default"])(this.target), this.copyText();
        }
      }, {
        key: "copyText",
        value: function value() {
          var e = void 0;

          try {
            e = document.execCommand(this.action);
          } catch (t) {
            e = !1;
          }

          this.handleResult(e);
        }
      }, {
        key: "handleResult",
        value: function value(t) {
          this.emitter.emit(t ? "success" : "error", {
            action: this.action,
            text: this.selectedText,
            trigger: this.trigger,
            clearSelection: this.clearSelection.bind(this)
          });
        }
      }, {
        key: "clearSelection",
        value: function value() {
          this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges();
        }
      }, {
        key: "destroy",
        value: function value() {
          this.removeFake();
        }
      }, {
        key: "action",
        set: function set() {
          var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "copy";
          if (this._action = t, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"');
        },
        get: function get() {
          return this._action;
        }
      }, {
        key: "target",
        set: function set(t) {
          if (void 0 !== t) {
            if (!t || "object" !== (void 0 === t ? "undefined" : r(t)) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element');
            if ("copy" === this.action && t.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
            if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
            this._target = t;
          }
        },
        get: function get() {
          return this._target;
        }
      }]), e;
    }();

    t.exports = u;
  }, function (t, e) {
    t.exports = function (t) {
      var e;
      if ("SELECT" === t.nodeName) t.focus(), e = t.value;else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
        var n = t.hasAttribute("readonly");
        n || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), n || t.removeAttribute("readonly"), e = t.value;
      } else {
        t.hasAttribute("contenteditable") && t.focus();
        var o = window.getSelection(),
            r = document.createRange();
        r.selectNodeContents(t), o.removeAllRanges(), o.addRange(r), e = o.toString();
      }
      return e;
    };
  }, function (t, e) {
    function n() {}

    n.prototype = {
      on: function on(t, e, n) {
        var o = this.e || (this.e = {});
        return (o[t] || (o[t] = [])).push({
          fn: e,
          ctx: n
        }), this;
      },
      once: function once(t, e, n) {
        var o = this;

        function r() {
          o.off(t, r), e.apply(n, arguments);
        }

        return r._ = e, this.on(t, r, n);
      },
      emit: function emit(t) {
        for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), o = 0, r = n.length; o < r; o++) {
          n[o].fn.apply(n[o].ctx, e);
        }

        return this;
      },
      off: function off(t, e) {
        var n = this.e || (this.e = {}),
            o = n[t],
            r = [];
        if (o && e) for (var i = 0, a = o.length; i < a; i++) {
          o[i].fn !== e && o[i].fn._ !== e && r.push(o[i]);
        }
        return r.length ? n[t] = r : delete n[t], this;
      }
    }, t.exports = n;
  }, function (t, e, n) {
    var d = n(5),
        h = n(6);

    t.exports = function (t, e, n) {
      if (!t && !e && !n) throw new Error("Missing required arguments");
      if (!d.string(e)) throw new TypeError("Second argument must be a String");
      if (!d.fn(n)) throw new TypeError("Third argument must be a Function");
      if (d.node(t)) return s = e, f = n, (l = t).addEventListener(s, f), {
        destroy: function destroy() {
          l.removeEventListener(s, f);
        }
      };
      if (d.nodeList(t)) return a = t, c = e, u = n, Array.prototype.forEach.call(a, function (t) {
        t.addEventListener(c, u);
      }), {
        destroy: function destroy() {
          Array.prototype.forEach.call(a, function (t) {
            t.removeEventListener(c, u);
          });
        }
      };
      if (d.string(t)) return o = t, r = e, i = n, h(document.body, o, r, i);
      throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
      var o, r, i, a, c, u, l, s, f;
    };
  }, function (t, n) {
    n.node = function (t) {
      return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType;
    }, n.nodeList = function (t) {
      var e = Object.prototype.toString.call(t);
      return void 0 !== t && ("[object NodeList]" === e || "[object HTMLCollection]" === e) && "length" in t && (0 === t.length || n.node(t[0]));
    }, n.string = function (t) {
      return "string" == typeof t || t instanceof String;
    }, n.fn = function (t) {
      return "[object Function]" === Object.prototype.toString.call(t);
    };
  }, function (t, e, n) {
    var a = n(7);

    function i(t, e, n, o, r) {
      var i = function (e, n, t, o) {
        return function (t) {
          t.delegateTarget = a(t.target, n), t.delegateTarget && o.call(e, t);
        };
      }.apply(this, arguments);

      return t.addEventListener(n, i, r), {
        destroy: function destroy() {
          t.removeEventListener(n, i, r);
        }
      };
    }

    t.exports = function (t, e, n, o, r) {
      return "function" == typeof t.addEventListener ? i.apply(null, arguments) : "function" == typeof n ? i.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), Array.prototype.map.call(t, function (t) {
        return i(t, e, n, o, r);
      }));
    };
  }, function (t, e) {
    if ("undefined" != typeof Element && !Element.prototype.matches) {
      var n = Element.prototype;
      n.matches = n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector;
    }

    t.exports = function (t, e) {
      for (; t && 9 !== t.nodeType;) {
        if ("function" == typeof t.matches && t.matches(e)) return t;
        t = t.parentNode;
      }
    };
  }]);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./resources/js/components/run_prettify.js":
/*!*************************************************!*\
  !*** ./resources/js/components/run_prettify.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

!function () {
  /*
  Copyright (C) 2013 Google Inc.
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  Copyright (C) 2006 Google Inc.
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  */
  (function () {
    function aa(g) {
      function r() {
        try {
          L.doScroll("left");
        } catch (ba) {
          k.setTimeout(r, 50);
          return;
        }

        x("poll");
      }

      function x(r) {
        if ("readystatechange" != r.type || "complete" == z.readyState) ("load" == r.type ? k : z)[B](n + r.type, x, !1), !l && (l = !0) && g.call(k, r.type || r);
      }

      var X = z.addEventListener,
          l = !1,
          E = !0,
          v = X ? "addEventListener" : "attachEvent",
          B = X ? "removeEventListener" : "detachEvent",
          n = X ? "" : "on";
      if ("complete" == z.readyState) g.call(k, "lazy");else {
        if (z.createEventObject && L.doScroll) {
          try {
            E = !k.frameElement;
          } catch (ba) {}

          E && r();
        }

        z[v](n + "DOMContentLoaded", x, !1);
        z[v](n + "readystatechange", x, !1);
        k[v](n + "load", x, !1);
      }
    }

    function T() {
      U && aa(function () {
        var g = M.length;
        ca(g ? function () {
          for (var r = 0; r < g; ++r) {
            (function (g) {
              k.setTimeout(function () {
                k.exports[M[g]].apply(k, arguments);
              }, 0);
            })(r);
          }
        } : void 0);
      });
    }

    for (var k = window, z = document, L = z.documentElement, N = z.head || z.getElementsByTagName("head")[0] || L, B = "", F = z.getElementsByTagName("script"), l = F.length; 0 <= --l;) {
      var O = F[l],
          Y = O.src.match(/^[^?#]*\/run_prettify\.js(\?[^#]*)?(?:#.*)?$/);

      if (Y) {
        B = Y[1] || "";
        O.parentNode.removeChild(O);
        break;
      }
    }

    var U = !0,
        H = [],
        P = [],
        M = [];
    B.replace(/[?&]([^&=]+)=([^&]+)/g, function (g, r, x) {
      x = decodeURIComponent(x);
      r = decodeURIComponent(r);
      "autorun" == r ? U = !/^[0fn]/i.test(x) : "lang" == r ? H.push(x) : "skin" == r ? P.push(x) : "callback" == r && M.push(x);
    });
    l = 0;

    for (B = H.length; l < B; ++l) {
      (function () {
        var g = z.createElement("script");

        g.onload = g.onerror = g.onreadystatechange = function () {
          !g || g.readyState && !/loaded|complete/.test(g.readyState) || (g.onerror = g.onload = g.onreadystatechange = null, --S, S || k.setTimeout(T, 0), g.parentNode && g.parentNode.removeChild(g), g = null);
        };

        g.type = "text/javascript";
        g.src = "https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/lang-" + encodeURIComponent(H[l]) + ".js";
        N.insertBefore(g, N.firstChild);
      })(H[l]);
    }

    for (var S = H.length, F = [], l = 0, B = P.length; l < B; ++l) {
      F.push("https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/skins/" + encodeURIComponent(P[l]) + ".css");
    }

    F.push("https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/prettify.css");

    (function (g) {
      function r(l) {
        if (l !== x) {
          var k = z.createElement("link");
          k.rel = "stylesheet";
          k.type = "text/css";
          l + 1 < x && (k.error = k.onerror = function () {
            r(l + 1);
          });
          k.href = g[l];
          N.appendChild(k);
        }
      }

      var x = g.length;
      r(0);
    })(F);

    var ca = function () {
      "undefined" !== typeof window && (window.PR_SHOULD_USE_CONTINUATION = !0);
      var g;

      (function () {
        function r(a) {
          function d(e) {
            var a = e.charCodeAt(0);
            if (92 !== a) return a;
            var c = e.charAt(1);
            return (a = k[c]) ? a : "0" <= c && "7" >= c ? parseInt(e.substring(1), 8) : "u" === c || "x" === c ? parseInt(e.substring(2), 16) : e.charCodeAt(1);
          }

          function f(e) {
            if (32 > e) return (16 > e ? "\\x0" : "\\x") + e.toString(16);
            e = String.fromCharCode(e);
            return "\\" === e || "-" === e || "]" === e || "^" === e ? "\\" + e : e;
          }

          function c(e) {
            var c = e.substring(1, e.length - 1).match(RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]", "g"));
            e = [];
            var a = "^" === c[0],
                b = ["["];
            a && b.push("^");

            for (var a = a ? 1 : 0, h = c.length; a < h; ++a) {
              var m = c[a];
              if (/\\[bdsw]/i.test(m)) b.push(m);else {
                var m = d(m),
                    p;
                a + 2 < h && "-" === c[a + 1] ? (p = d(c[a + 2]), a += 2) : p = m;
                e.push([m, p]);
                65 > p || 122 < m || (65 > p || 90 < m || e.push([Math.max(65, m) | 32, Math.min(p, 90) | 32]), 97 > p || 122 < m || e.push([Math.max(97, m) & -33, Math.min(p, 122) & -33]));
              }
            }

            e.sort(function (e, a) {
              return e[0] - a[0] || a[1] - e[1];
            });
            c = [];
            h = [];

            for (a = 0; a < e.length; ++a) {
              m = e[a], m[0] <= h[1] + 1 ? h[1] = Math.max(h[1], m[1]) : c.push(h = m);
            }

            for (a = 0; a < c.length; ++a) {
              m = c[a], b.push(f(m[0])), m[1] > m[0] && (m[1] + 1 > m[0] && b.push("-"), b.push(f(m[1])));
            }

            b.push("]");
            return b.join("");
          }

          function g(e) {
            for (var a = e.source.match(RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)", "g")), b = a.length, d = [], h = 0, m = 0; h < b; ++h) {
              var p = a[h];
              "(" === p ? ++m : "\\" === p.charAt(0) && (p = +p.substring(1)) && (p <= m ? d[p] = -1 : a[h] = f(p));
            }

            for (h = 1; h < d.length; ++h) {
              -1 === d[h] && (d[h] = ++r);
            }

            for (m = h = 0; h < b; ++h) {
              p = a[h], "(" === p ? (++m, d[m] || (a[h] = "(?:")) : "\\" === p.charAt(0) && (p = +p.substring(1)) && p <= m && (a[h] = "\\" + d[p]);
            }

            for (h = 0; h < b; ++h) {
              "^" === a[h] && "^" !== a[h + 1] && (a[h] = "");
            }

            if (e.ignoreCase && A) for (h = 0; h < b; ++h) {
              p = a[h], e = p.charAt(0), 2 <= p.length && "[" === e ? a[h] = c(p) : "\\" !== e && (a[h] = p.replace(/[a-zA-Z]/g, function (a) {
                a = a.charCodeAt(0);
                return "[" + String.fromCharCode(a & -33, a | 32) + "]";
              }));
            }
            return a.join("");
          }

          for (var r = 0, A = !1, q = !1, I = 0, b = a.length; I < b; ++I) {
            var t = a[I];
            if (t.ignoreCase) q = !0;else if (/[a-z]/i.test(t.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi, ""))) {
              A = !0;
              q = !1;
              break;
            }
          }

          for (var k = {
            b: 8,
            t: 9,
            n: 10,
            v: 11,
            f: 12,
            r: 13
          }, u = [], I = 0, b = a.length; I < b; ++I) {
            t = a[I];
            if (t.global || t.multiline) throw Error("" + t);
            u.push("(?:" + g(t) + ")");
          }

          return new RegExp(u.join("|"), q ? "gi" : "g");
        }

        function l(a, d) {
          function f(a) {
            var b = a.nodeType;

            if (1 == b) {
              if (!c.test(a.className)) {
                for (b = a.firstChild; b; b = b.nextSibling) {
                  f(b);
                }

                b = a.nodeName.toLowerCase();
                if ("br" === b || "li" === b) g[q] = "\n", A[q << 1] = r++, A[q++ << 1 | 1] = a;
              }
            } else if (3 == b || 4 == b) b = a.nodeValue, b.length && (b = d ? b.replace(/\r\n?/g, "\n") : b.replace(/[ \t\r\n]+/g, " "), g[q] = b, A[q << 1] = r, r += b.length, A[q++ << 1 | 1] = a);
          }

          var c = /(?:^|\s)nocode(?:\s|$)/,
              g = [],
              r = 0,
              A = [],
              q = 0;
          f(a);
          return {
            a: g.join("").replace(/\n$/, ""),
            c: A
          };
        }

        function k(a, d, f, c, g) {
          f && (a = {
            h: a,
            l: 1,
            j: null,
            m: null,
            a: f,
            c: null,
            i: d,
            g: null
          }, c(a), g.push.apply(g, a.g));
        }

        function z(a) {
          for (var d = void 0, f = a.firstChild; f; f = f.nextSibling) {
            var c = f.nodeType,
                d = 1 === c ? d ? a : f : 3 === c ? S.test(f.nodeValue) ? a : d : d;
          }

          return d === a ? void 0 : d;
        }

        function E(a, d) {
          function f(a) {
            for (var q = a.i, r = a.h, b = [q, "pln"], t = 0, A = a.a.match(g) || [], u = {}, e = 0, l = A.length; e < l; ++e) {
              var D = A[e],
                  w = u[D],
                  h = void 0,
                  m;
              if ("string" === typeof w) m = !1;else {
                var p = c[D.charAt(0)];
                if (p) h = D.match(p[1]), w = p[0];else {
                  for (m = 0; m < n; ++m) {
                    if (p = d[m], h = D.match(p[1])) {
                      w = p[0];
                      break;
                    }
                  }

                  h || (w = "pln");
                }
                !(m = 5 <= w.length && "lang-" === w.substring(0, 5)) || h && "string" === typeof h[1] || (m = !1, w = "src");
                m || (u[D] = w);
              }
              p = t;
              t += D.length;

              if (m) {
                m = h[1];
                var C = D.indexOf(m),
                    G = C + m.length;
                h[2] && (G = D.length - h[2].length, C = G - m.length);
                w = w.substring(5);
                k(r, q + p, D.substring(0, C), f, b);
                k(r, q + p + C, m, F(w, m), b);
                k(r, q + p + G, D.substring(G), f, b);
              } else b.push(q + p, w);
            }

            a.g = b;
          }

          var c = {},
              g;

          (function () {
            for (var f = a.concat(d), q = [], k = {}, b = 0, t = f.length; b < t; ++b) {
              var n = f[b],
                  u = n[3];
              if (u) for (var e = u.length; 0 <= --e;) {
                c[u.charAt(e)] = n;
              }
              n = n[1];
              u = "" + n;
              k.hasOwnProperty(u) || (q.push(n), k[u] = null);
            }

            q.push(/[\0-\uffff]/);
            g = r(q);
          })();

          var n = d.length;
          return f;
        }

        function v(a) {
          var d = [],
              f = [];
          a.tripleQuotedStrings ? d.push(["str", /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/, null, "'\""]) : a.multiLineStrings ? d.push(["str", /^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/, null, "'\"`"]) : d.push(["str", /^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/, null, "\"'"]);
          a.verbatimStrings && f.push(["str", /^@\"(?:[^\"]|\"\")*(?:\"|$)/, null]);
          var c = a.hashComments;
          c && (a.cStyleComments ? (1 < c ? d.push(["com", /^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/, null, "#"]) : d.push(["com", /^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/, null, "#"]), f.push(["str", /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/, null])) : d.push(["com", /^#[^\r\n]*/, null, "#"]));
          a.cStyleComments && (f.push(["com", /^\/\/[^\r\n]*/, null]), f.push(["com", /^\/\*[\s\S]*?(?:\*\/|$)/, null]));

          if (c = a.regexLiterals) {
            var g = (c = 1 < c ? "" : "\n\r") ? "." : "[\\S\\s]";
            f.push(["lang-regex", RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*(" + ("/(?=[^/*" + c + "])(?:[^/\\x5B\\x5C" + c + "]|\\x5C" + g + "|\\x5B(?:[^\\x5C\\x5D" + c + "]|\\x5C" + g + ")*(?:\\x5D|$))+/") + ")")]);
          }

          (c = a.types) && f.push(["typ", c]);
          c = ("" + a.keywords).replace(/^ | $/g, "");
          c.length && f.push(["kwd", new RegExp("^(?:" + c.replace(/[\s,]+/g, "|") + ")\\b"), null]);
          d.push(["pln", /^\s+/, null, " \r\n\t\xA0"]);
          c = "^.[^\\s\\w.$@'\"`/\\\\]*";
          a.regexLiterals && (c += "(?!s*/)");
          f.push(["lit", /^@[a-z_$][a-z_$@0-9]*/i, null], ["typ", /^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/, null], ["pln", /^[a-z_$][a-z_$@0-9]*/i, null], ["lit", /^(?:0x[a-f0-9]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+\-]?\d+)?)[a-z]*/i, null, "0123456789"], ["pln", /^\\[\s\S]?/, null], ["pun", new RegExp(c), null]);
          return E(d, f);
        }

        function B(a, d, f) {
          function c(a) {
            var b = a.nodeType;
            if (1 == b && !r.test(a.className)) {
              if ("br" === a.nodeName.toLowerCase()) g(a), a.parentNode && a.parentNode.removeChild(a);else for (a = a.firstChild; a; a = a.nextSibling) {
                c(a);
              }
            } else if ((3 == b || 4 == b) && f) {
              var e = a.nodeValue,
                  d = e.match(n);
              d && (b = e.substring(0, d.index), a.nodeValue = b, (e = e.substring(d.index + d[0].length)) && a.parentNode.insertBefore(q.createTextNode(e), a.nextSibling), g(a), b || a.parentNode.removeChild(a));
            }
          }

          function g(a) {
            function c(a, b) {
              var e = b ? a.cloneNode(!1) : a,
                  p = a.parentNode;

              if (p) {
                var p = c(p, 1),
                    d = a.nextSibling;
                p.appendChild(e);

                for (var f = d; f; f = d) {
                  d = f.nextSibling, p.appendChild(f);
                }
              }

              return e;
            }

            for (; !a.nextSibling;) {
              if (a = a.parentNode, !a) return;
            }

            a = c(a.nextSibling, 0);

            for (var e; (e = a.parentNode) && 1 === e.nodeType;) {
              a = e;
            }

            b.push(a);
          }

          for (var r = /(?:^|\s)nocode(?:\s|$)/, n = /\r\n?|\n/, q = a.ownerDocument, k = q.createElement("li"); a.firstChild;) {
            k.appendChild(a.firstChild);
          }

          for (var b = [k], t = 0; t < b.length; ++t) {
            c(b[t]);
          }

          d === (d | 0) && b[0].setAttribute("value", d);
          var l = q.createElement("ol");
          l.className = "linenums";
          d = Math.max(0, d - 1 | 0) || 0;

          for (var t = 0, u = b.length; t < u; ++t) {
            k = b[t], k.className = "L" + (t + d) % 10, k.firstChild || k.appendChild(q.createTextNode("\xA0")), l.appendChild(k);
          }

          a.appendChild(l);
        }

        function n(a, d) {
          for (var f = d.length; 0 <= --f;) {
            var c = d[f];
            V.hasOwnProperty(c) ? Q.console && console.warn("cannot override language handler %s", c) : V[c] = a;
          }
        }

        function F(a, d) {
          a && V.hasOwnProperty(a) || (a = /^\s*</.test(d) ? "default-markup" : "default-code");
          return V[a];
        }

        function H(a) {
          var d = a.j;

          try {
            var f = l(a.h, a.l),
                c = f.a;
            a.a = c;
            a.c = f.c;
            a.i = 0;
            F(d, c)(a);
            var g = /\bMSIE\s(\d+)/.exec(navigator.userAgent),
                g = g && 8 >= +g[1],
                d = /\n/g,
                r = a.a,
                k = r.length,
                f = 0,
                q = a.c,
                n = q.length,
                c = 0,
                b = a.g,
                t = b.length,
                v = 0;
            b[t] = k;
            var u, e;

            for (e = u = 0; e < t;) {
              b[e] !== b[e + 2] ? (b[u++] = b[e++], b[u++] = b[e++]) : e += 2;
            }

            t = u;

            for (e = u = 0; e < t;) {
              for (var x = b[e], z = b[e + 1], w = e + 2; w + 2 <= t && b[w + 1] === z;) {
                w += 2;
              }

              b[u++] = x;
              b[u++] = z;
              e = w;
            }

            b.length = u;
            var h = a.h;
            a = "";
            h && (a = h.style.display, h.style.display = "none");

            try {
              for (; c < n;) {
                var m = q[c + 2] || k,
                    p = b[v + 2] || k,
                    w = Math.min(m, p),
                    C = q[c + 1],
                    G;

                if (1 !== C.nodeType && (G = r.substring(f, w))) {
                  g && (G = G.replace(d, "\r"));
                  C.nodeValue = G;
                  var Z = C.ownerDocument,
                      W = Z.createElement("span");
                  W.className = b[v + 1];
                  var B = C.parentNode;
                  B.replaceChild(W, C);
                  W.appendChild(C);
                  f < m && (q[c + 1] = C = Z.createTextNode(r.substring(w, m)), B.insertBefore(C, W.nextSibling));
                }

                f = w;
                f >= m && (c += 2);
                f >= p && (v += 2);
              }
            } finally {
              h && (h.style.display = a);
            }
          } catch (y) {
            Q.console && console.log(y && y.stack || y);
          }
        }

        var Q = "undefined" !== typeof window ? window : {},
            J = ["break,continue,do,else,for,if,return,while"],
            K = [[J, "auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,restrict,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"], "catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],
            R = [K, "alignas,alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,noexcept,noreturn,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],
            L = [K, "abstract,assert,boolean,byte,extends,finally,final,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],
            M = [K, "abstract,add,alias,as,ascending,async,await,base,bool,by,byte,checked,decimal,delegate,descending,dynamic,event,finally,fixed,foreach,from,get,global,group,implicit,in,interface,internal,into,is,join,let,lock,null,object,out,override,orderby,params,partial,readonly,ref,remove,sbyte,sealed,select,set,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,value,var,virtual,where,yield"],
            K = [K, "abstract,async,await,constructor,debugger,enum,eval,export,from,function,get,import,implements,instanceof,interface,let,null,of,set,undefined,var,with,yield,Infinity,NaN"],
            N = [J, "and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],
            O = [J, "alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],
            J = [J, "case,done,elif,esac,eval,fi,function,in,local,set,then,until"],
            P = /^(DIR|FILE|array|vector|(de|priority_)?queue|(forward_)?list|stack|(const_)?(reverse_)?iterator|(unordered_)?(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,
            S = /\S/,
            T = v({
          keywords: [R, M, L, K, "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END", N, O, J],
          hashComments: !0,
          cStyleComments: !0,
          multiLineStrings: !0,
          regexLiterals: !0
        }),
            V = {};
        n(T, ["default-code"]);
        n(E([], [["pln", /^[^<?]+/], ["dec", /^<!\w[^>]*(?:>|$)/], ["com", /^<\!--[\s\S]*?(?:-\->|$)/], ["lang-", /^<\?([\s\S]+?)(?:\?>|$)/], ["lang-", /^<%([\s\S]+?)(?:%>|$)/], ["pun", /^(?:<[%?]|[%?]>)/], ["lang-", /^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i], ["lang-js", /^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i], ["lang-css", /^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i], ["lang-in.tag", /^(<\/?[a-z][^<>]*>)/i]]), "default-markup htm html mxml xhtml xml xsl".split(" "));
        n(E([["pln", /^[\s]+/, null, " \t\r\n"], ["atv", /^(?:\"[^\"]*\"?|\'[^\']*\'?)/, null, "\"'"]], [["tag", /^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i], ["atn", /^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i], ["lang-uq.val", /^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/], ["pun", /^[=<>\/]+/], ["lang-js", /^on\w+\s*=\s*\"([^\"]+)\"/i], ["lang-js", /^on\w+\s*=\s*\'([^\']+)\'/i], ["lang-js", /^on\w+\s*=\s*([^\"\'>\s]+)/i], ["lang-css", /^style\s*=\s*\"([^\"]+)\"/i], ["lang-css", /^style\s*=\s*\'([^\']+)\'/i], ["lang-css", /^style\s*=\s*([^\"\'>\s]+)/i]]), ["in.tag"]);
        n(E([], [["atv", /^[\s\S]+/]]), ["uq.val"]);
        n(v({
          keywords: R,
          hashComments: !0,
          cStyleComments: !0,
          types: P
        }), "c cc cpp cxx cyc m".split(" "));
        n(v({
          keywords: "null,true,false"
        }), ["json"]);
        n(v({
          keywords: M,
          hashComments: !0,
          cStyleComments: !0,
          verbatimStrings: !0,
          types: P
        }), ["cs"]);
        n(v({
          keywords: L,
          cStyleComments: !0
        }), ["java"]);
        n(v({
          keywords: J,
          hashComments: !0,
          multiLineStrings: !0
        }), ["bash", "bsh", "csh", "sh"]);
        n(v({
          keywords: N,
          hashComments: !0,
          multiLineStrings: !0,
          tripleQuotedStrings: !0
        }), ["cv", "py", "python"]);
        n(v({
          keywords: "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",
          hashComments: !0,
          multiLineStrings: !0,
          regexLiterals: 2
        }), ["perl", "pl", "pm"]);
        n(v({
          keywords: O,
          hashComments: !0,
          multiLineStrings: !0,
          regexLiterals: !0
        }), ["rb", "ruby"]);
        n(v({
          keywords: K,
          cStyleComments: !0,
          regexLiterals: !0
        }), ["javascript", "js", "ts", "typescript"]);
        n(v({
          keywords: "all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",
          hashComments: 3,
          cStyleComments: !0,
          multilineStrings: !0,
          tripleQuotedStrings: !0,
          regexLiterals: !0
        }), ["coffee"]);
        n(E([], [["str", /^[\s\S]+/]]), ["regex"]);
        var U = Q.PR = {
          createSimpleLexer: E,
          registerLangHandler: n,
          sourceDecorator: v,
          PR_ATTRIB_NAME: "atn",
          PR_ATTRIB_VALUE: "atv",
          PR_COMMENT: "com",
          PR_DECLARATION: "dec",
          PR_KEYWORD: "kwd",
          PR_LITERAL: "lit",
          PR_NOCODE: "nocode",
          PR_PLAIN: "pln",
          PR_PUNCTUATION: "pun",
          PR_SOURCE: "src",
          PR_STRING: "str",
          PR_TAG: "tag",
          PR_TYPE: "typ",
          prettyPrintOne: function prettyPrintOne(a, d, f) {
            f = f || !1;
            d = d || null;
            var c = document.createElement("div");
            c.innerHTML = "<pre>" + a + "</pre>";
            c = c.firstChild;
            f && B(c, f, !0);
            H({
              j: d,
              m: f,
              h: c,
              l: 1,
              a: null,
              i: null,
              c: null,
              g: null
            });
            return c.innerHTML;
          },
          prettyPrint: g = function g(a, d) {
            function f() {
              for (var c = Q.PR_SHOULD_USE_CONTINUATION ? b.now() + 250 : Infinity; t < r.length && b.now() < c; t++) {
                for (var d = r[t], k = h, n = d; n = n.previousSibling;) {
                  var q = n.nodeType,
                      l = (7 === q || 8 === q) && n.nodeValue;
                  if (l ? !/^\??prettify\b/.test(l) : 3 !== q || /\S/.test(n.nodeValue)) break;

                  if (l) {
                    k = {};
                    l.replace(/\b(\w+)=([\w:.%+-]+)/g, function (a, b, c) {
                      k[b] = c;
                    });
                    break;
                  }
                }

                n = d.className;

                if ((k !== h || u.test(n)) && !e.test(n)) {
                  q = !1;

                  for (l = d.parentNode; l; l = l.parentNode) {
                    if (w.test(l.tagName) && l.className && u.test(l.className)) {
                      q = !0;
                      break;
                    }
                  }

                  if (!q) {
                    d.className += " prettyprinted";
                    q = k.lang;

                    if (!q) {
                      var q = n.match(v),
                          A;
                      !q && (A = z(d)) && D.test(A.tagName) && (q = A.className.match(v));
                      q && (q = q[1]);
                    }

                    if (x.test(d.tagName)) l = 1;else var l = d.currentStyle,
                        y = g.defaultView,
                        l = (l = l ? l.whiteSpace : y && y.getComputedStyle ? y.getComputedStyle(d, null).getPropertyValue("white-space") : 0) && "pre" === l.substring(0, 3);
                    y = k.linenums;
                    (y = "true" === y || +y) || (y = (y = n.match(/\blinenums\b(?::(\d+))?/)) ? y[1] && y[1].length ? +y[1] : !0 : !1);
                    y && B(d, y, l);
                    H({
                      j: q,
                      h: d,
                      m: y,
                      l: l,
                      a: null,
                      i: null,
                      c: null,
                      g: null
                    });
                  }
                }
              }

              t < r.length ? Q.setTimeout(f, 250) : "function" === typeof a && a();
            }

            for (var c = d || document.body, g = c.ownerDocument || document, c = [c.getElementsByTagName("pre"), c.getElementsByTagName("code"), c.getElementsByTagName("xmp")], r = [], k = 0; k < c.length; ++k) {
              for (var n = 0, l = c[k].length; n < l; ++n) {
                r.push(c[k][n]);
              }
            }

            var c = null,
                b = Date;
            b.now || (b = {
              now: function now() {
                return +new Date();
              }
            });
            var t = 0,
                v = /\blang(?:uage)?-([\w.]+)(?!\S)/,
                u = /\bprettyprint\b/,
                e = /\bprettyprinted\b/,
                x = /pre|xmp/i,
                D = /^code$/i,
                w = /^(?:pre|code|xmp)$/i,
                h = {};
            f();
          }
        },
            R = Q.define;
        "function" === typeof R && R.amd && R("google-code-prettify", [], function () {
          return U;
        });
      })();

      return g;
    }();

    S || k.setTimeout(T, 0);
  })();
}();

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\xampp\htdocs\laravel\easytoc\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! C:\xampp\htdocs\laravel\easytoc\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);