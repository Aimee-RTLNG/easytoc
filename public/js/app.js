(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js"); // require('./components/run_prettify.js');

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

__webpack_require__(/*! D:\IUT\LP-MI-server\ProjetApp\easytoc\easytoc\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! D:\IUT\LP-MI-server\ProjetApp\easytoc\easytoc\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);