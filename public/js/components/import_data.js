(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/components/import_data"],{

/***/ "./resources/js/components/import_data.js":
/*!************************************************!*\
  !*** ./resources/js/components/import_data.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$('#import-data').on('click', function () {
  var data;
  var path = $('#imported_data').val(); // importData(file);

  var file = new FileReader();
  file.onload("GET", path, true);

  file.onreadystatechange = function () {
    data = file.responseText;
    console.log(data);
  };
});

function importData(file) {
  if (type == "json") {
    console.log("json");
  } else if (type == "csv") {
    console.log("CSV");
  }

  console.log(file);
}

/***/ }),

/***/ 3:
/*!******************************************************!*\
  !*** multi ./resources/js/components/import_data.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp2\htdocs\laravel\easytoc\resources\js\components\import_data.js */"./resources/js/components/import_data.js");


/***/ })

},[[3,"/js/manifest"]]]);