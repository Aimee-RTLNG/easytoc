(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/components/import_data_menu"],{

/***/ "./resources/js/components/import_data_menu.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/import_data_menu.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ "./resources/js/app.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./resources/js/components/menu.js");
var message;
var success = true;
var element_selected_container;
var previous_element;
var next_element; // Imports



$('#import-data').on('click', function () {
  var regex_csv = /^([a-zA-Z0-9\s_\\.\-:])+(.csv)$/;
  var regex_json = /^([a-zA-Z0-9\s_\\.\-:])+(.json)$/; // FORMAT CSV

  if (regex_csv.test($("#imported_data").val().toLowerCase())) {
    if (typeof FileReader != "undefined") {
      var formatted_csv = {
        type: "",
        title: "",
        logo: "",
        theme: "",
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
            formatted_csv.logo = row[2];
            formatted_csv.theme = row[3];
          } else if (i > 1 && row[0]) {
            // On récupère les items si présents
            formatted_csv.items.push({
              type: row[0],
              name: row[1],
              url: row[2]
            });
          }
        }

        importData(formatted_csv);
      };

      reader.readAsText($("#imported_data")[0].files[0]);
    }
  } else if (regex_json.test($("#imported_data").val().toLowerCase())) {
    // SI JSON
    if (typeof FileReader != "undefined") {
      var reader = new FileReader();

      reader.onload = function (e) {
        var formatted_json = e.target.result; // On formatte en mode JSON

        try {
          formatted_json = JSON.parse(formatted_json); // On importe les données dans le générateur

          importData(formatted_json);
          success = true;
        } catch (e) {
          success = false;

          if (_app__WEBPACK_IMPORTED_MODULE_0__["lang"] == "en") {
            message = "Your file has an error : please try again.";
          } else {
            message = "Votre fichier contient une erreur. Merci de réessayer.";
          }

          Object(_app__WEBPACK_IMPORTED_MODULE_0__["alertMsg"])(message, "error");
        }
      };

      reader.readAsText($("#imported_data")[0].files[0]);
    }
  } else {
    if (_app__WEBPACK_IMPORTED_MODULE_0__["lang"] == "en") {
      message = "Incorrect file format : only JSON and CSV allowed;";
    } else {
      message = "Format de fichier invalide : fichiers JSON et CSV seulement.";
    }

    Object(_app__WEBPACK_IMPORTED_MODULE_0__["alertMsg"])(message, "error");
  }
}); // ANCHOR Générer un exemple

$('#generate-example').on('click', function () {
  var formatted_json = $.getJSON(baseUrl + '/templates/menu_template.json').done(function (json) {
    importData(json);
  }).fail(function (jqxhr, textStatus, error) {
    console.log(textStatus);
    console.log(error);

    if (_app__WEBPACK_IMPORTED_MODULE_0__["lang"] == "en") {
      message = "Error while loading : the example could not be generated";
    } else {
      message = "Erreur dans le chargement de l'exemple";
    }

    Object(_app__WEBPACK_IMPORTED_MODULE_0__["alertMsg"])(message, "error");
  });
});

function importData(menu) {
  // On modifie les informations de base du formulaire
  $("#generated-menu").attr('class', 'theme-' + menu.theme);

  if ($("#menu-creator-title-display").is(":checked")) {
    $("#menu-creator-title-display").click();
  }

  if ($("#menu-creator-link-display").is(":checked")) {
    $("#menu-creator-link-display").click();
  }

  $("#full-menu #menubar-easytoc").html(""); // Si présent, alors

  if (menu.title) {
    $("#menu-creator-title").val(menu.title);
    $("#menu-creator-title-display").click();
  } else {
    $("#menu-creator-title").val("");
  }

  if (menu.logo) {
    $("#menu-creator-link").val(menu.logo);
    $("#menu-creator-link-display").click();
  } else {
    $("#menu-creator-link").val("");
  }

  var items_list = menu.items;
  Object.keys(items_list).forEach(function (key) {
    var menu_item = items_list[key];

    if (menu_item.type == "link") {
      Object(_menu__WEBPACK_IMPORTED_MODULE_1__["addLink"])(menu_item.type);
      $("#full-menu #menubar-easytoc").find('li').last().find('span').text(menu_item.name);
      $("#full-menu #menubar-easytoc").find('li').last().find('a').attr('href', menu_item.url);
    } else if (menu_item.type == "sub_menu") {
      Object(_menu__WEBPACK_IMPORTED_MODULE_1__["addLink"])(menu_item.type);
      $("#full-menu #menubar-easytoc").find('li').last().find('span').text(menu_item.name);
    } else if (menu_item.type == "sub_link") {
      $("#full-menu #menubar-easytoc").find('li').last().find('span').focus();
      Object(_menu__WEBPACK_IMPORTED_MODULE_1__["addLink"])(menu_item.type);
      $("#full-menu #menubar-easytoc").find('li').last().find('span').text(menu_item.name);
      $("#full-menu #menubar-easytoc").find('li').last().find('a').attr('href', menu_item.url);
    }
  }); // On rend le contenu modifiable 

  Object(_menu__WEBPACK_IMPORTED_MODULE_1__["getOldContent"])();

  if (success) {
    if (_app__WEBPACK_IMPORTED_MODULE_0__["lang"] == "en") {
      message = "Data imported";
    } else {
      message = "Données récupérées";
    }

    Object(_app__WEBPACK_IMPORTED_MODULE_0__["alertMsg"])(message, "success");
  } else {
    if (_app__WEBPACK_IMPORTED_MODULE_0__["lang"] == "en") {
      message = "Error while loading data";
    } else {
      message = "Erreur dans l'importation des données";
    }

    Object(_app__WEBPACK_IMPORTED_MODULE_0__["alertMsg"])(message, "error");
  }

  if ($('.content-editable-selected').last()) {
    $('.content-editable-selected').last().click();
  }
}

/***/ }),

/***/ 6:
/*!***********************************************************!*\
  !*** multi ./resources/js/components/import_data_menu.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\laravel\easytoc\resources\js\components\import_data_menu.js */"./resources/js/components/import_data_menu.js");


/***/ })

},[[6,"/js/manifest","/js/vendor"]]]);