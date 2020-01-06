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

__webpack_require__(/*! code-prettify/src/run_prettify.js?autorun=true&amp;skin=sunburst */ "./node_modules/code-prettify/src/run_prettify.js?autorun=true&amp;skin=sunburst");

__webpack_require__(/*! code-prettify/src/prettify.js?autorun=true&amp;skin=sunburst */ "./node_modules/code-prettify/src/prettify.js?autorun=true&amp;skin=sunburst");

__webpack_require__(/*! clipboard/dist/clipboard.min.js */ "./node_modules/clipboard/dist/clipboard.min.js"); // ANCHOR Font awesome




_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUserCircle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faArrowCircleUp"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faArrowCircleDown"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTrash"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSortUp"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSortDown"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEye"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faArrowRight"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faArrowLeft"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlusCircle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSearch"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSort"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPen"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTimes"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faItalic"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBold"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUnderline"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faAlignCenter"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faAlignJustify"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faAlignLeft"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUndo"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCheckSquare"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTasks"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCaretDown"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCheckCircle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faComment"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCommentAlt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGripLines"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faParagraph"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHeading"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faLink"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faListOl"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faListUl"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faQuestionCircle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEdit"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTrashAlt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faAngleDown"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faChevronDown"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUpload"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSync"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFileUpload"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFileCode"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faVectorSquare"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGripLinesVertical"]);
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["dom"].watch(); // ANCHOR Visualisation des contenus générés (form, table, menu)
// Empêcher l'envoi du formulaire 

$(document).ready(function () {
  $('.content-html-preview input[type=submit]').attr('disabled', true);
}); // ANCHOR Burger menu

window.addEventListener("DOMContentLoaded", function (event) {
  var btn_burger = document.getElementById('bars');
  btn_burger.addEventListener('click', function () {
    btn_burger.classList.toggle('open');
  }); // Scroll vers ancres

  function scrollTo(target) {
    if (target.length) {
      $("html, body").stop().animate({
        scrollTop: target.offset().top
      }, 500);
    }
  }

  $('.next-section div').on('click', function () {
    scrollTo($('#tools'));
  });
  $('.link-ancre').on('click', function () {
    var id = $(this).attr('href');
    scrollTo($(id));
  }); // Profile Mobile

  $(".fleche-plus").on('click', function () {
    $('.mon-compte').toggleClass('open');
    $(this).toggleClass('open');
  }); // Voir les mots de passes

  $('input[type="password"').on('keyup', function (event) {
    var text = $(this).parent().parent().find("span.warning-block")[0];

    if (event.originalEvent.getModifierState("CapsLock")) {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  });
  $('input[type="password"').on('focusout', function () {
    var text = $(this).parent().parent().find("span.warning-block")[0];
    text.style.display = "none";
  });
  $(".btn-seepassword__icon").on('click', function () {
    var password_input = $(this).parent().find('input')[0];
    var vision_button_icon = $(this).find('i')[0];

    if (password_input.type === "password") {
      password_input.type = "text";
      vision_button_icon.className = "far fa-eye-slash";
    } else {
      password_input.type = "password";
      vision_button_icon.className = "far fa-eye";
    }
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

/***/ 1:
/*!***********************************!*\
  !*** multi ./resources/js/app.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\IUT\LP-MI-server\ProjetApp\easytoc\easytoc\resources\js\app.js */"./resources/js/app.js");


/***/ })

},[[1,"/js/manifest","/js/vendor"]]]);