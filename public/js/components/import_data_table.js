(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/components/import_data_table"],{

/***/ "./resources/js/components/import_data_table.js":
/*!******************************************************!*\
  !*** ./resources/js/components/import_data_table.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ "./resources/js/app.js");
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table */ "./resources/js/components/table.js");
// Imports

 // Variables

var message;
var success = true;
var element_selected_container;
var previous_element;
var next_element;
var required_count = 0; // ORDRE DES VALEURS
// Type; Title; Caption; Theme; Header top; Header left; Footer; Headers row;
// table; ""  ; ""     ; ""   ; true/false; true/false ; true/f; INT        ;
// Headers row > Nb de lignes de header horizontal

$('#import-data').on('click', function () {
  var regex_csv = /^([a-zA-Z0-9\s_\\.\-:])+(.csv)$/;
  var regex_json = /^([a-zA-Z0-9\s_\\.\-:])+(.json)$/; // FORMAT CSV

  if (regex_csv.test($("#imported_data").val().toLowerCase())) {
    if (typeof FileReader != "undefined") {
      var formatted_csv = {
        type: "",
        title: "",
        caption: "",
        options: "",
        items: {
          thead: [],
          tbody: [],
          tfoot: []
        },
        size: []
      };
      var reader = new FileReader();

      reader.onload = function (e) {
        var data = e.target.result;
        var rows = data.split("\r\n");
        var filtered_rows = [];
        rows.forEach(function (element, index) {
          var row = element.split(";");
          var row_empty = 0;
          row.forEach(function (cell) {
            if (!cell) {
              row_empty = row_empty + 1;
            }
          });

          if (row_empty < row.length) {
            filtered_rows.push(row);
          }
        });

        for (var i = 1; i < filtered_rows.length; i++) {
          var row = filtered_rows[i];

          if (i == 1) {
            // Première ligne : paramètres généraux
            formatted_csv.type = row[0];
            formatted_csv.title = row[1];
            formatted_csv.caption = row[2];
            formatted_csv.theme = row[3];
            formatted_csv.options = {
              header_top: row[4],
              header_left: row[5],
              footer: row[6]
            };
            formatted_csv.size = {
              header_row: row[7]
            };
          } else if (i > 1) {
            var row_type = void 0;

            if (formatted_csv.options.header_top && i <= parseInt(formatted_csv.size.header_row) + 1) {
              // On ajoute + 1 à cause de la ligne skippée 
              row_type = "thead";
              formatted_csv.items.thead.push(row);
            } else if (i == filtered_rows.length - 1 && formatted_csv.options.footer) {
              row_type = "tfoot";
              formatted_csv.items.tfoot.push(row);
            } else {
              row_type = "tbody";
              formatted_csv.items.tbody.push(row);
            }
          }
        }

        importData(formatted_csv);
      };

      reader.readAsText($("#imported_data")[0].files[0]);
    } // FORMAT JSON

  } else if (regex_json.test($("#imported_data").val().toLowerCase())) {
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
          console.log(e);
          message = "Votre fichier est invalide. Merci de réessayer.";
          Object(_app__WEBPACK_IMPORTED_MODULE_0__["alertMsg"])(message, "error");
        }
      };

      reader.readAsText($("#imported_data")[0].files[0]);
    }
  } else {
    message = "Format de fichier incorrect";
    Object(_app__WEBPACK_IMPORTED_MODULE_0__["alertMsg"])(message, "error");
  }
}); // ANCHOR Générer un exemple

$('#generate-example').on('click', function () {
  var formatted_json = $.getJSON(baseUrl + '/templates/table_template.json').done(function (json) {
    importData(json);
  }).fail(function (jqxhr, textStatus, error) {
    console.log(textStatus);
    console.log(error);
    message = "Erreur dans le chargement de l'exemple";
    Object(_app__WEBPACK_IMPORTED_MODULE_0__["alertMsg"])(message, "error");
  });
});

function importData(table) {
  console.log(table);
  $("#generated-table #full-table").empty();
  $("#generated-table #table-title").text(table.title);
  $("#generated-table #table-caption").text(table.caption); // HEADER

  if (table.options.header_top) {
    $("#full-table").append(_table__WEBPACK_IMPORTED_MODULE_1__["element_types"]["type-container"]["insert-header"]);
    table.items.thead.forEach(function (header_row, index) {
      $("#full-table thead").append(_table__WEBPACK_IMPORTED_MODULE_1__["element_types"]["type-container"]["insert-row"]);
      header_row.forEach(function (element, index) {
        $("#full-table thead tr").last().append(_table__WEBPACK_IMPORTED_MODULE_1__["element_types"]["type-unique"]["insert-header-col"]);
        $("#full-table thead tr th").last().text(element);
      });
    });
  } // BODY


  $("#full-table").append("<tbody></tbody>");
  table.items.tbody.forEach(function (body_row) {
    $("#full-table tbody").append("<tr></tr>");
    body_row.forEach(function (element, index) {
      if (index == 0 && table.options.header_left) {
        $("#full-table tbody tr").last().append("<th>" + element + "</th>");
      } else {
        $("#full-table tbody tr").last().append("<td>" + element + "</td>");
      }
    });
  }); // FOOTER

  if (table.options.footer) {
    $("#full-table").append("<tfoot><tr></tr></tfoot>");
    var footer_row = table.items.tfoot[0];
    footer_row.forEach(function (element, index) {
      $("#full-table tfoot tr").append("<td>" + element + "</td>");
    });
  } // On rend le contenu modifiable 


  Object(_table__WEBPACK_IMPORTED_MODULE_1__["getOldContent"])(); // On supprime les lignes et colonnes vides si existantes

  $('#full-table tbody tr').each(function () {
    console.log($(this).text());

    if (!$(this).text()) {
      $(this).remove();
    }
  });
  $("#full-table tr").each(function (i, element) {
    var selected_col;
    var actual_row = $("#full-table tr")[i];
    selected_col[i] = $(actual_row).find('th, td')[i];
    console.log(selected_col);
  });

  if (success) {
    message = "Données récupérées";
    Object(_app__WEBPACK_IMPORTED_MODULE_0__["alertMsg"])(message, "success");
  } else {
    message = "Erreur dans l'importation des données";
    Object(_app__WEBPACK_IMPORTED_MODULE_0__["alertMsg"])(message, "error");
  }

  if ($('.content-editable-selected').last()) {
    $('.content-editable-selected').last().focus();
  }
}

/***/ }),

/***/ 4:
/*!************************************************************!*\
  !*** multi ./resources/js/components/import_data_table.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\laravel\easytoc\resources\js\components\import_data_table.js */"./resources/js/components/import_data_table.js");


/***/ })

},[[4,"/js/manifest","/js/vendor"]]]);