(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/components/import_data_form"],{

/***/ "./resources/js/components/import_data_form.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/import_data_form.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ "./resources/js/app.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ "./resources/js/components/form.js");
// Imports

 // Variables

var message; // ORDRE DES VALEURS
// Type, Texte du label, Nom/Name, Lien, Options (reset/post), Theme/Style, Placeholder, Maxlength 
// Après ça : liste d'items si item présent dans l'élément (option) :  Item 1 Value 1 Item 2 Value 2...

$('#import-data').on('click', function () {
  var regex_csv = /^([a-zA-Z0-9\s_\\.\-:])+(.csv)$/;
  var regex_json = /^([a-zA-Z0-9\s_\\.\-:])+(.json)$/;

  if (regex_csv.test($("#imported_data").val().toLowerCase())) {
    if (typeof FileReader != "undefined") {
      console.log('Format CSV');
      var formatted_csv = {
        type: "",
        title: "",
        url: "",
        options: "",
        style: "",
        items: []
      };
      var reader = new FileReader();

      reader.onload = function (e) {
        var rows = e.target.result.split("\r\n");

        for (var i = 1; i < rows.length - 1; i++) {
          var row = rows[i].split(";");

          if (i == 1) {
            // Première ligne : paramètres généraux
            formatted_csv.type = row[0];
            formatted_csv.title = row[1];
            formatted_csv.url = row[3];
            var form_options = row[4].split(",");
            formatted_csv.options = {
              method: form_options[0],
              reset: form_options[1]
            };
            formatted_csv.style = row[5];
          } else if (i > 1) {
            var items = [];

            for (var y = 8; y < row.length; y = y + 2) {
              var item = {
                value: row[y + 1],
                name: row[y]
              };
              items.push(item);
            }

            formatted_csv.items.push({
              type: row[0],
              content: row[1],
              link: row[2],
              url: row[3],
              options: row[4].split(","),
              style: row[5].split(","),
              placeholder: row[6],
              maxlength: row[7],
              items: items
            });
          }
        }

        importData(formatted_csv);
      };

      reader.readAsText($("#imported_data")[0].files[0]);
    } else {
      alert("This browser does not support HTML5.");
    }
  } else if (regex_json.test($("#imported_data").val().toLowerCase())) {
    if (typeof FileReader != "undefined") {
      console.log('Format JSON');
      var reader = new FileReader();

      reader.onload = function (e) {
        var formatted_json = e.target.result; // On formatte en mode JSON

        formatted_json = JSON.parse(formatted_json); // On importe les données dans le générateur

        importData(formatted_json);
      };

      reader.readAsText($("#imported_data")[0].files[0]);
    } else {
      message = "Votre fichier est invalide. Merci de réessayer.";
      Object(_app__WEBPACK_IMPORTED_MODULE_0__["alertMsg"])(message, "error");
    }
  } else {
    message = "Format de fichier incorrect";
    Object(_app__WEBPACK_IMPORTED_MODULE_0__["alertMsg"])(message, "error");
  }
});

function importData(form) {
  console.log(form);
  message = "Données récupérées"; // On modifie les informations de base du formulaire

  $("#generated-form").attr('class', 'theme-' + form.style);
  $("#generated-form").attr('action', form.url);
  $("#generated-form").attr('method', form.options.method);
  $("#form-title").text(form.title);

  if (form.options.reset && !$('#reset-button').prop('checked')) {
    $("#reset-button").click();
  } // On enlève le contenu précédent sauf le titre


  $("#full-form .element-container").remove();
  $('.side-tool').hide();
  $("#actions-interface").hide(); // On ajoute les items du formulaire uploadé

  var items_list = form.items;
  Object.keys(items_list).forEach(function (key) {
    var element_type_name = items_list[key].type;
    element_type_name = element_type_name.replace(/-/g, "_");
    element_type_name = "insert-" + element_type_name;
    Object(_form__WEBPACK_IMPORTED_MODULE_1__["addElement"])("type-question", element_type_name);
  }); // On rend le contenu modifiable 

  Object(_form__WEBPACK_IMPORTED_MODULE_1__["getOldContent"])();
  Object(_app__WEBPACK_IMPORTED_MODULE_0__["alertMsg"])(message, "success");
}

/***/ }),

/***/ 3:
/*!***********************************************************!*\
  !*** multi ./resources/js/components/import_data_form.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp2\htdocs\laravel\easytoc\resources\js\components\import_data_form.js */"./resources/js/components/import_data_form.js");


/***/ })

},[[3,"/js/manifest","/js/vendor"]]]);