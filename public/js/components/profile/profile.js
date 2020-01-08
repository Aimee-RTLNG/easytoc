(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/components/profile/profile"],{

/***/ "./resources/js/components/profile/profile.js":
/*!****************************************************!*\
  !*** ./resources/js/components/profile/profile.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

console.log('bllblbbl'); // Ajout de la classe Active sur le bouton filtre

var btnContainer = document.getElementById("list-filters");
var btns = btnContainer.getElementsByClassName("btn-filter-type");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
} // Filtres par type


$("#list-filters .btn-filter-type").on('click', function () {
  var filter_type = $(this).attr('data-type');

  switch (filter_type) {
    case "all":
      $('.list-element').fadeIn();
      break;

    default:
      $('.list-element').hide();
      $('.list-element[data-type=' + filter_type + ']').fadeIn();
      break;
  }
});
var full_list = $(".full-list");

function sortList(order) {
  var sorted_list = full_list.children('.list-element').detach().get();

  switch (order) {
    case "ascending":
      sorted_list.sort(function (a, b) {
        return new Date($(b).data("date")) - new Date($(a).data("date"));
      });
      full_list.append(sorted_list);
      break;

    case "descending":
      sorted_list.sort(function (a, b) {
        return new Date($(a).data("date")) - new Date($(b).data("date"));
      });
      full_list.append(sorted_list);
      break;
  }
} // Filtres par nom


$("#list-filters .btn-filter-date").on('click', function () {
  if (!$(this).hasClass('active')) {
    $(this).addClass('active');
  }

  var filter_date = $(this).attr('data-date');

  switch (filter_date) {
    case "all":
      sortList("descending");
      $(this).removeClass('active');
      $(this).attr('data-date', "old");
      $(".fas", this).attr('class', 'fas fa-sort');
      break;

    case "old":
      sortList("descending");
      $(this).attr('data-date', "recent");
      $(".fas", this).attr('class', 'fas fa-sort-down');
      break;

    case "recent":
      sortList("ascending");
      $(this).attr('data-date', "old");
      $(".fas", this).attr('class', 'fas fa-sort-up');
      break;
  }
});
$('.filter-name input').on('keyup', function () {
  var value = $(this).val().toLowerCase();
  $(".full-list .list-element").filter(function () {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
  });
});

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
/*!************************************************************************************!*\
  !*** multi ./resources/js/components/profile/profile.js ./resources/sass/app.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\xampp2\htdocs\laravel\easytoc\resources\js\components\profile\profile.js */"./resources/js/components/profile/profile.js");
module.exports = __webpack_require__(/*! C:\xampp2\htdocs\laravel\easytoc\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

},[[0,"/js/manifest"]]]);