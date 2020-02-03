(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/components/table"],{

/***/ "./resources/js/components/table.js":
/*!******************************************!*\
  !*** ./resources/js/components/table.js ***!
  \******************************************/
/*! exports provided: getOldContent, addCol, addRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOldContent", function() { return getOldContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCol", function() { return addCol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRow", function() { return addRow; });
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../js/app */ "./resources/js/app.js");
// ANCHOR Données initiales
var element;
var element_selected_container;
var input;
var intitule;
var previous_col;
var next_col;
var previous_row;
var next_row;
var message;
var previous_cell;
var selected_cell;
var next_cell;
var cell_index;
var selected_cell_index;
var selected_col;
var selected_row;
var parent_tag;
var user_id = $('input[name=user_id]').val();
var type_id = $('input[name=type_id]').val();
var csrf_token = $('meta[name="csrf-token"]').attr('content');
var initial_content = '<div id="generated-table" class="theme-white">\n\t<span class="table-title table-text" id="table-title" contenteditable=true data-tag="title">Titre</span>\n\t<table data-tag="table" id="full-table">\n\t\t<caption class="table-caption" id="table-caption">\n\t\t\t<span class="table-text" contenteditable="true" data-tag="caption">Légende</span>\n\t\t</caption>\n\t\t<thead data-tag="header">\n\t\t\t<tr>\n\t\t\t\t<th class="table-header-cell cell-text" contenteditable="true" data-tag="cell-header" scope="col">Ceci est un test</th>\n\t\t\t\t<th class="table-header-cell cell-text" contenteditable="true" data-tag="cell-header" scope="col">Ceci est un test</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr>\n\t\t\t\t<td contenteditable="true" data-tag="cell">Ceci est un test</td>\n\t\t\t\t<td contenteditable="true" data-tag="cell">Ceci est un test</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n</div>'; // Imports

 // ANCHOR Caractères restants Description du projet

$('#desc-input').keypress(function (e) {
  var tval = $('#desc-input').val(),
      tlength = tval.length,
      set = $('#desc-input').attr('maxlength'),
      remain = parseInt(set - tlength);
  $('#chara-desc-remains').text(remain + " caractères restants");

  if (remain <= 0 && e.which !== 0 && e.charCode !== 0) {
    $('#desc-input').val(tval.substring(0, tlength - 1));
  }
}); // ANCHOR Caractères restants Titre du projet

$('#title-input').keypress(function (e) {
  var tval = $('#title-input').val(),
      tlength = tval.length,
      set = $('#title-input').attr('maxlength'),
      remain = parseInt(set - tlength);
  $('#chara-title-remains').text(remain + " caractères restants");

  if (remain <= 0 && e.which !== 0 && e.charCode !== 0) {
    $('#title-input').val(tval.substring(0, tlength - 1));
  }
}); // ANCHOR Liste de tous les tags possibles dans un tableau

var tags_list = ["table", "tr", "th", "td", "abbr"]; // ANCHOR Liste WYSIWYG : liste de tous les éléments dynamiques ajoutables
// \t = tabulation,  \n = saut de ligne

var element_types = {
  "type-container": {
    "insert-header": "\n\t\t<thead class='table-head' data-tag='header'></thead>",
    "insert-row": "\n\t\t\t<tr class='table-row' data-tag='row'></tr>",
    "insert-footer": "\n\t\t<tfoot class='table-footer' data-tag='footer'></tfoot>"
  },
  "type-unique": {
    "insert-header-col": "\n\t\t\t\t<th class='table-header-cell cell-text' contenteditable=true data-tag='cell-header' scope='col'>&#160</th>",
    "insert-header-row": "\n\t\t\t\t<th class='table-header-cell cell-text' contenteditable=true data-tag='cell-header' scope='row'>&#160</th>",
    "insert-cell": "\n\t\t\t\t<td class='table-cell cell-text' contenteditable=true data-tag='cell'>&#160</td>"
  }
};
function getOldContent() {
  // On rend l'ancien contenu modifiable
  $('#full-table .cell-text').attr('contenteditable', true);
  $('#full-table .table-text').attr('contenteditable', true); // Theme

  var actual_theme = $("#generated-table").attr('class');
  actual_theme = actual_theme.replace('theme-', '');
  var selected_theme = $('.theme-switch').find('input[value=' + actual_theme + ']');
  selected_theme.prop('checked', true); // Titre

  var actual_title = $("#table-title").text();
  $("#table-creator-title").val(actual_title);
} // ANCHOR Fonction de sauvegarde

function updatecontent() {
  // on récupère le contenu
  var blueprint_content = $('#content-created-blueprint').html(); // on trie les éléments à ne pas inclure dans le code 

  blueprint_content = blueprint_content.replace(/ contenteditable="(.*?)\"/g, "");
  blueprint_content = blueprint_content.replace(/ disabled="(.*?)\"/g, "");
  blueprint_content = blueprint_content.replace(/ option-selected /g, "");
  blueprint_content = blueprint_content.replace(/ content-editable-selected/g, ""); // on remplace les doubles sauts de lignes

  blueprint_content = blueprint_content.replace(/\n\s*\n/g, "\n"); // on update le code par rapport au blueprint

  $('#raw-code').html(blueprint_content);
  var code_content = $('<div>').text($('#raw-code').text()).html(); // prettify

  $("#formatted-code").html(PR.prettyPrintOne(code_content));
}

; // ANCHOR Initialisation du tableau

if ($('#raw-code').val().length <= 0) {
  console.log("Création");
  $('#content-created-blueprint').html(initial_content);
  updatecontent();
} else {
  console.log("Modification");
  getOldContent();
  updatecontent();
} // ANCHOR Changement de titre


$('#table-creator-title').on('keyup', function () {
  $('#table-title').text($('#table-creator-title').val());
  updatecontent();
}); // ANCHOR Changement de caption

$('#table-creator-caption').on('keyup', function () {
  $('#table-caption span').text($('#table-creator-caption').val());
  updatecontent();
}); // ANCHOR Changement du nombre de lignes via INPUT

$('#table-row-nb').on('change', function () {
  $('.content-editable-selected').blur();
  $('.content-editable-selected').removeClass('content-editable-selected');
  var new_nb_row = $(this).val();

  if (new_nb_row < 2) {
    message = "A quoi sert un tableau sans lignes ?";
    Object(_js_app__WEBPACK_IMPORTED_MODULE_0__["alertMsg"])(message, "error");
    this.val("2");
    return;
  }

  var actual_nb_row = $("#full-table").find('tr').length;

  if (new_nb_row > actual_nb_row) {
    var nb_new_row = new_nb_row - actual_nb_row;

    for (var i = 0; i < nb_new_row; i++) {
      addRow("down");
      message = "Ligne ajoutée";
      Object(_js_app__WEBPACK_IMPORTED_MODULE_0__["alertMsg"])(message, "success");
    }
  } else if (new_nb_row < actual_nb_row) {
    var _nb_new_row = actual_nb_row - new_nb_row;

    for (var _i = 0; _i < _nb_new_row; _i++) {
      var is_removed = removeRow($("#full-table tbody").find('tr').last());

      if (!is_removed) {
        break;
      } else {
        message = "Ligne supprimée";
        Object(_js_app__WEBPACK_IMPORTED_MODULE_0__["alertMsg"])(message, "success");
      }
    }
  }

  updatecontent();
}); // ANCHOR Changement du nombre de colonnes via INPUT

$('#table-col-nb').on('change', function () {
  $('.content-editable-selected').blur();
  $('.content-editable-selected').removeClass('.content-editable-selected');
  var new_nb_col = $(this).val();

  if (new_nb_col < 2) {
    message = "A quoi sert un tableau sans colonnes ?";
    Object(_js_app__WEBPACK_IMPORTED_MODULE_0__["alertMsg"])(message, "error");
    $(this).val("2");
    return;
  }

  var actual_nb_col = $("#full-table").find('tr').first().find('th').length;

  if (new_nb_col > actual_nb_col) {
    var nb_new_col = new_nb_col - actual_nb_col;

    for (var i = 0; i < nb_new_col; i++) {
      addCol("right");
      message = "Colonne ajoutée";
      Object(_js_app__WEBPACK_IMPORTED_MODULE_0__["alertMsg"])(message, "success");
    }
  } else if (new_nb_col < actual_nb_col) {
    var _nb_new_col = actual_nb_col - new_nb_col;

    var actual_nb_row = $("#full-table").find('tr').length;
    var col_cells = [];

    for (var x = 0; x < _nb_new_col; x++) {
      for (var _i2 = 0; _i2 < actual_nb_row; _i2++) {
        var actual_row = $("#full-table tr")[_i2];

        col_cells[_i2] = $(actual_row).find('th, td').last();
      }

      var col_removed = removeCol(col_cells);

      if (col_removed) {
        message = "Colonne supprimée";
        Object(_js_app__WEBPACK_IMPORTED_MODULE_0__["alertMsg"])(message, "success");
      } else {
        break;
      }
    }
  }

  updatecontent();
}); // Ajout de colonne

function addCol(side) {
  var actual_nb_col = $("#full-table").find('tr').first().find('th').length;
  var row_html = element_types["type-container"]["insert-row"];
  var cell_header_html = element_types["type-unique"]["insert-header-col"];
  var cell_html = element_types["type-unique"]["insert-cell"];
  var rows_header = $("#full-table").find('thead tr').length;
  cell_html = "\n\t\t\t\t" + cell_html + "\n\t\t\t";
  cell_header_html = "\n\t\t\t\t" + cell_header_html + "\n\t\t\t";
  var is_header;

  if ($(".content-editable-selected").hasClass('table-header-cell') && parent_tag == "TBODY") {
    is_header = true;
  }

  if (side == "left") {
    if ($(".content-editable-selected").length) {
      cell_index = $(".content-editable-selected").parent().find(".content-editable-selected").index();
      $("#full-table tr").each(function (index, tr) {
        $(cell_html).insertBefore($(tr).find("td")[cell_index]);

        if (index < rows_header) {
          $(cell_header_html).insertBefore($(tr).find("th")[cell_index]);
        }
      });
    } else {
      $("#full-table tr").each(function (index, tr) {
        $(cell_html).insertBefore($(tr).find("td").first());

        if (index < rows_header) {
          $(cell_header_html).insertBefore($(tr).find("th").first());
        }
      });
    }
  } else if (side == "right") {
    if ($(".content-editable-selected").length) {
      cell_index = $(".content-editable-selected").parent().find(".content-editable-selected").index();
      $("#full-table tr").each(function (index, tr) {
        $(cell_html).insertAfter($(tr).find("td")[cell_index]);

        if (index < rows_header) {
          $(cell_header_html).insertAfter($(tr).find("th")[cell_index]);
        }
      });
    } else {
      $("#full-table tr").each(function (index, tr) {
        $(cell_html).insertAfter($(tr).find("td").last());

        if (index < rows_header) {
          $(cell_header_html).insertAfter($(tr).find("th").last());
        }
      });
    }
  }
} // Ajout de ligne

function addRow(side) {
  var inserted_row;
  var actual_nb_col = $("#full-table").find('tbody tr').first().find('th, td').length;
  var row_html = element_types["type-container"]["insert-row"];
  var col_header = $('#lateral-header-button').prop('checked');
  var is_header;

  if ($(".content-editable-selected").hasClass('table-header-cell') && parent_tag == "THEAD") {
    is_header = true;
  } // Ligne au dessus


  if (side == "up") {
    if ($('.content-editable-selected').length) {
      $(row_html + "\n\t\t\t").insertBefore($(".content-editable-selected").closest('tr'));
      inserted_row = $(".content-editable-selected").closest('tr').prev();
    } else {
      $(row_html + "\n\t\t\t").insertBefore($("#full-table").find('tbody tr').first());
      inserted_row = $("#full-table").find('tbody tr').first();
    }
  } // Ligne en dessous
  else if (side == "down") {
      if ($('.content-editable-selected').length) {
        $(row_html + "\n\t\t\t").insertAfter($(".content-editable-selected").closest('tr'));
        inserted_row = $(".content-editable-selected").closest('tr').next();
      } else {
        $(row_html + "\n\t\t\t").insertAfter($("#full-table tbody").find('tr').last());
        inserted_row = $("#full-table").find('tbody tr').last();
      }
    } // On ajoute les colonnes


  for (var i = 0; i < actual_nb_col; i++) {
    var cell_html = void 0;

    if (col_header && i == 0) {
      cell_html = element_types["type-unique"]["insert-header-row"];
    } else {
      if (is_header) {
        cell_html = element_types["type-unique"]["insert-header-col"];
      } else {
        cell_html = element_types["type-unique"]["insert-cell"];
      }
    }

    inserted_row.append("\n\t\t\t\t" + cell_html + "\n\t\t\t");
  }
} // Suppression de ligne

function removeRow(row) {
  // On vérifie que la ligne soit vide
  var is_filled = false;
  var actual_nb_col = row.find('td, th').length;

  for (var i = 0; i < actual_nb_col; i++) {
    var actual_cell = row.find('td, th')[i];

    if ($(actual_cell).text().trim()) {
      is_filled = true;
    }
  }

  var row_length = $('#full-table tbody').find('tr').length;
  console.log(row_length);

  if (row_length <= 1) {
    return false;
  } // Si la ligne est remplie : on demande confirmation


  if (row_length > 1 && is_filled) {
    if (confirm('Attention : il y a du contenu dans la ligne en question. Voulez-vous vraiment supprimer ?')) {
      row.remove();
      return true;
    } // Si on annule la suppression
    else {
        $("#table-row-nb").val($("#full-table").find('tr').length);
        return false;
      }
  } // Si il n'y a rien : on supprime
  else {
      row.remove();
      return true;
    }
} // Déplacement de ligne


function moveRow(side) {
  if (side == "up") {
    $(selected_row).insertBefore(previous_row);
  } else if (side == "down") {
    $(selected_row).insertAfter(next_row);
  }
} // Déplacement de colonne


function moveCol(side) {
  var col_id = selected_cell_index;
  var cols;
  var rows = $('#full-table tr');

  if (side == "left") {
    rows.each(function () {
      cols = $(this).children('th, td');
      cols.eq(col_id).detach().insertBefore(cols.eq(col_id - 1));
    });
  } else if (side == "right") {
    rows.each(function () {
      cols = $(this).children('th, td');
      cols.eq(col_id).detach().insertAfter(cols.eq(col_id + 1));
    });
  }
}

function moveCell(side) {
  var text_cell = $(".content-editable-selected").text();
  var text_other;
  var other_cell;

  if (side == "up") {
    other_cell = $(".content-editable-selected").parent().prev().find('td, th')[selected_cell_index];
    text_other = $(other_cell).text();
  } else if (side == "down") {
    other_cell = $(".content-editable-selected").parent().next().find('td, th')[selected_cell_index];
    text_other = $(other_cell).text();
  } else if (side == "left") {
    other_cell = $(".content-editable-selected").prev();
    text_other = $(other_cell).text();
  } else if (side == "right") {
    other_cell = $(".content-editable-selected").next();
    text_other = $(other_cell).text();
  }

  $(".content-editable-selected").text(text_other);
  $(other_cell).text(text_cell);
  $(other_cell).focus();
}

function mergeCell(side, cell, other_cell) {
  console.log(other_cell);

  if (side == "row") {
    var previous_colspan = 1;
    var next_colspan = 1;

    if ($(cell).attr('colspan')) {
      previous_colspan = $(cell).attr('colspan');
    }

    if ($(other_cell).attr('colspan')) {
      next_colspan = $(other_cell).attr('colspan');
    }

    $(cell).attr('colspan', parseInt(previous_colspan) + parseInt(next_colspan));
    $(other_cell).detach();
  } else if (side == "col") {
    var previous_rowspan = 1;
    var next_rowspan = 1;

    if ($(cell).attr('rowspan')) {
      previous_rowspan = $(cell).attr('rowspan');
    }

    if ($(other_cell).attr('rowspan')) {
      next_rowspan = $(other_cell).attr('rowspan');
    }

    $(cell).attr('rowspan', parseInt(previous_rowspan) + parseInt(next_rowspan));
    $(other_cell).detach();
  }

  $('.content-editable-selected').focus();
  updatecontent();
}

function splitCell() {
  var colspan_len = $('.content-editable-selected').attr('colspan');
  var rowspan_len = $('.content-editable-selected').attr('rowspan');

  if (colspan_len) {
    $('.content-editable-selected').removeAttr('colspan');
    var new_cell_html = element_types["type-unique"]["insert-header-col"];

    for (var i = 1; i < colspan_len; i++) {
      $(new_cell_html).insertAfter('.content-editable-selected');
    }
  } else if (rowspan_len) {
    $('.content-editable-selected').removeAttr('rowspan');
    var _new_cell_html = element_types["type-unique"]["insert-header-row"];

    for (var _i3 = 1; _i3 < rowspan_len; _i3++) {
      $(_new_cell_html).insertAfter('.content-editable-selected');
    }
  }
} // Suppression de colonne


function removeCol(cells) {
  // ATTENTION : cells doit être un array d'item
  if (Array.isArray(cells)) {
    // On vérifie que la ligne soit vide
    var is_filled = false;
    cells.forEach(function (item, index) {
      var actual_cell = item;

      if ($(actual_cell).text().trim()) {
        is_filled = true;
      }
    }); // Si la ligne est remplie : on demande confirmation

    if (is_filled) {
      if (confirm('Attention : il y a du contenu dans la colonne en question. Voulez-vous vraiment supprimer ?')) {
        cells.forEach(function (item, index) {
          var actual_cell = item;
          actual_cell.remove();
        });
        return true;
      } // Si on annule la suppression
      else {
          $("#table-col-nb").val($("#full-table").find('tr').first().find('th').length);
          return false;
        }
    } // Si il n'y a rien : on supprime
    else {
        cells.forEach(function (item, index) {
          var actual_cell = item;
          actual_cell.remove();
        });
        return true;
      }
  } else {
    console.warn('Erreur dans la suppression de colonne : not an array.');
    return false;
  }
}

$('.cell-action').on('click', function () {
  var element_action = $(this).attr("data-action");
  var nb_col = $('#table-col-nb').val();
  var nb_row = $('#table-row-nb').val(); // Vider la case

  if (element_action == "empty-cell") {
    $('.content-editable-selected').text(""); // DEPLACER LIGNE VERS LE HAUT
  } else if (element_action == "move-row-up") {
    moveRow("up"); // DEPLACER LIGNE VERS LE BAS
  } else if (element_action == "move-row-down") {
    moveRow("down"); // DEPLACER COLONNE VERS LA DROITE
  } else if (element_action == "move-col-right") {
    moveCol("right"); // DEPLACER COLONNE VERS LA GAUCHE
  } else if (element_action == "move-col-left") {
    moveCol("left"); // DEPLACER CASE VERS LE HAUT
  } else if (element_action == "move-cell-up") {
    moveCell("up"); // DEPLACER CASE VERS LE BAS
  } else if (element_action == "move-cell-down") {
    moveCell("down"); // DEPLACER CASE VERS LA DROITE
  } else if (element_action == "move-cell-right") {
    moveCell("right"); // DEPLACER CASE VERS LA GAUCHE
  } else if (element_action == "move-cell-left") {
    moveCell("left"); // MERGE RIGHT
  } else if (element_action == "merge-right") {
    if ($('.content-editable-selected').next().length) {
      mergeCell("row", $('.content-editable-selected'), $('.content-editable-selected').next());
    } else {
      message = "Fusion impossible : pas de case à droite";
      Object(_js_app__WEBPACK_IMPORTED_MODULE_0__["alertMsg"])(message, "error");
    } // MERGE DOWN

  } else if (element_action == "merge-down") {
    var other_cell = selected_row.nextAll().find('th');
    console.log(other_cell);

    if (other_cell.length) {
      mergeCell("col", $('.content-editable-selected'), other_cell[0]);
    } else {
      message = "Fusion impossible : pas de case en bas";
      Object(_js_app__WEBPACK_IMPORTED_MODULE_0__["alertMsg"])(message, "error");
    } // TODO ATTENTION à la fusion avec des cellules déjà fusionnées !!
    // SPLIT

  } else if (element_action == "split-cell") {
    splitCell(); // Supprimer la colonne
  } else if (element_action == "delete-col") {
    if (selected_col && nb_col > 2) {
      var col_removed = removeCol(selected_col);

      if (col_removed) {
        $('#table-col-nb').val(parseInt(nb_col) - 1);
        message = "Colonne supprimée";
        Object(_js_app__WEBPACK_IMPORTED_MODULE_0__["alertMsg"])(message, "success");
      }
    } else {
      message = "A quoi sert un tableau sans colonnes ?";
      Object(_js_app__WEBPACK_IMPORTED_MODULE_0__["alertMsg"])(message, "error");
    }
  } // Supprimer la ligne
  else if (element_action == "delete-row") {
      if (selected_row && nb_row > 2) {
        var row_removed = removeRow(selected_row);

        if (row_removed) {
          $('#table-row-nb').val(parseInt(nb_row) - 1);
          message = "Colonne supprimée";
          Object(_js_app__WEBPACK_IMPORTED_MODULE_0__["alertMsg"])(message, "success");
        }
      } else {
        message = "A quoi sert un tableau sans lignes ?";
        Object(_js_app__WEBPACK_IMPORTED_MODULE_0__["alertMsg"])(message, "error");
      } // TODO unfocus total;

    }

  $('.content-editable-selected').focus();
  updatecontent();
}); // ANCHOR Ajout d'un élément

$('.add-element').on('click', function () {
  var element_type = $(this).attr("id");
  var nb_col = $('#table-col-nb').val();
  var nb_row = $('#table-row-nb').val(); // AJOUT DE LIGNE EN HAUT

  if (element_type == "insert-row_up") {
    addRow("up");
    $('#table-row-nb').val(parseInt(nb_row) + 1); // AJOUT DE LIGNE EN BAS
  } else if (element_type == "insert-row_down") {
    addRow("down");
    $('#table-row-nb').val(parseInt(nb_row) + 1); // AJOUT DE COL A DROITE
  } else if (element_type == "insert-col_right") {
    addCol("right");
    $('#table-col-nb').val(parseInt(nb_col) + 1); // AJOUT DE COL A DROITE
  } else if (element_type == "insert-col_left") {
    addCol("left");
    $('#table-col-nb').val(parseInt(nb_col) + 1); // PIED DE TABLEAU 
  } else if (element_type == "footer-button") {
    if ($(this).prop('checked')) {
      // On active le footer
      var footer_html = element_types["type-container"]["insert-footer"];
      $('#full-table').append(footer_html); // On ajoute une ligne 

      var row_html = element_types["type-container"]["insert-row"];
      $('#full-table tfoot').append(row_html); // On ajoute les cases

      var cell_html = element_types["type-unique"]["insert-cell"];
      var cols = $('#full-table tbody tr').first().find('td, th').length;

      for (var x = 0; x < cols; x++) {
        $('#full-table tfoot tr').append(cell_html);
      }

      message = "Pied de tableau ajouté";
      Object(_js_app__WEBPACK_IMPORTED_MODULE_0__["alertMsg"])(message, "success");
    } else {
      // On enlève le footer (déjà activé)
      $("#full-table tfoot").remove();
    } // HEADER HORIZONTAL : central header

  } else if (element_type == "central-header-button") {
    var rows = $('#full-table thead').find('tr');

    if ($(this).prop('checked')) {
      $('#full-table thead').append(element_types["type-container"]["insert-row"]);
      $('#full-table thead tr').append(element_types["type-unique"]["insert-header-col"]);
      $('#full-table thead th').first().addClass("content-editable-selected");
      $(".content-editable-selected").focus();
      addRow("down");
      $('#full-table thead tr').first().remove();
    } else {
      if ($('#full-table tbody').find('th').length) {
        rows.each(function (index) {
          removeRow($(this));
        });
      } else {
        message = "Veuillez d'abord ajouter des en-têtes verticales.";
        Object(_js_app__WEBPACK_IMPORTED_MODULE_0__["alertMsg"])(message, "error");
        $(this).prop('checked', 'true');
      }
    } // PREMIERE COLONNE EN HEADER

  } else if (element_type == "lateral-header-button") {
    var _rows = $('#full-table').find('tr');

    var rows_header = $('#full-table thead').find('tr').length;

    if ($(this).prop('checked')) {
      _rows.each(function (index) {
        if (index >= rows_header) {
          var new_header = $(this).find('th, td').first();
          var old_text = $(new_header).text();
          var new_cell_html = element_types["type-unique"]["insert-header-row"];
          $(new_header).replaceWith(new_cell_html);
          $(new_header).text(old_text);
          $(this).find('th').first().text(old_text);
        }
      });
    } else {
      if ($('#full-table thead').find('th').length) {
        _rows.each(function (index) {
          if (index >= rows_header) {
            var new_cell = $(this).find('th, td').first();
            var old_text = $(new_cell).text();
            var new_cell_html = element_types["type-unique"]["insert-cell"];
            $(new_cell).replaceWith(new_cell_html);
            $(this).find('td').first().text(old_text);
          }
        });
      } else {
        message = "Veuillez d'abord ajouter des en-têtes horizontales.";
        Object(_js_app__WEBPACK_IMPORTED_MODULE_0__["alertMsg"])(message, "error");
        $(this).prop('checked', 'true');
      }
    }
  }

  $('.content-editable-selected').focus();
  updatecontent();
}); // ANCHOR Sauvegarde définitive

$('#btn-save-project').on('click', function () {
  updatecontent();
  var post_url = $("#full-table-post").attr('action');
  $.ajax({
    method: "POST",
    url: post_url,
    data: {
      "_token": csrf_token,
      "type_id": type_id,
      "user_id": user_id,
      "title": $('#title-input').val(),
      "description": $('#desc-input').val(),
      "html": $('#raw-code').val()
    }
  }).done(function (msg) {
    console.log(msg);
    window.location.href = "profile/" + user_id + "/view";
    $("#title-input").removeClass('required-failed');
  }).fail(function (xhr, status, error) {
    console.log(xhr.responseText);
    console.log(status);
    console.log(error); // Erreur

    if (!$('#title-input').val()) {
      $("#title-input").addClass('required-failed');
      $("#title-input").focus();
    }

    message = "Votre projet n'a pas de titre : veuillez remplir le champ en rouge.";
    Object(_js_app__WEBPACK_IMPORTED_MODULE_0__["alertMsg"])(message, "error");
  });
}); // ANCHOR Action sur l'élement

var element_select;
$(document.body).off('keyup') // ré-initialisation
// Quand on sélectionne un élément éditable
.on('focus', '[contenteditable=true]', function (e) {
  // on récupère l'élément sélectionné et on focus sur l'élément parent
  if (e.target) {
    $(".content-editable-selected").removeClass("content-editable-selected");
    element_selected_container = e.target;
  }

  $(element_selected_container).addClass("content-editable-selected");
  var tag = $(this).attr('data-tag');

  if (tag != "title" && tag != "caption") {
    // si ce n'est pas le titre ou la caption
    $('.cell-action').removeAttr('disabled');
    var cell_width = parseInt($('.content-editable-selected').css("width").replace("px", ""));
    var position_left = parseInt($('.content-editable-selected').position().left) + 15;
    var position_top = $('.content-editable-selected').position().top + 100 + "px";
    $('.side-tool.vertical-tools').css("margin-top", position_top);
    $('.side-tool.horizontal-tools').css("margin-left", position_left);
    $('.side-tool.horizontal-tools').css("width", cell_width); // Side tool : déplacemet haut bas et suppression 

    $('.side-tool').show(); // Si l'élément est dans le header

    parent_tag = $('.content-editable-selected').parent().parent().prop("tagName");

    if (parent_tag == "THEAD") {
      $('.side-tool.vertical-tools').hide();
      $('.action-merge-right').attr('disabled', false);
      $('.action-merge-down').attr('disabled', true);

      if ($("#full-table thead tr").length < 2) {
        $('.action-delete-row').attr('disabled', true);
      }
    } // Si l'élément est dans le footer
    else if (parent_tag == "TFOOT") {
        $('#insert-row_up').attr('disabled', true);
        $('#insert-row_down').attr('disabled', true);
        $('.side-tool.vertical-tools').hide();
        $('.action-delete-row').attr('disabled', true);
        $('.action-merge-right, .action-merge-down').attr('disabled', true);
      } // Si l'élément est un header latéral
      else if ($('.content-editable-selected').hasClass('table-header-cell')) {
          $('#insert-col_left').attr('disabled', true);
          $('.action-merge-right').attr('disabled', true);
          $('.action-merge-down').attr('disabled', false);
        } // Si l'élément n'est ni un header horizontal ni vertical
        else {
            $('#insert-col_left').removeAttr('disabled');
            $('#insert-row_up').removeAttr('disabled');
            $('#insert-row_down').removeAttr('disabled');
            $('.action-merge-right, .action-merge-down').attr('disabled', true);
          } // Gestion des lignes


    selected_row = $(".content-editable-selected").parent();
    previous_row = $(".content-editable-selected").parent().prev("tr");
    next_row = $(".content-editable-selected").parent().next("tr"); // Si il n'y a pas de ligne au dessus, on ne peut pas le déplacer vers le haut

    if (previous_row.length == 0) {
      $('#action-move-up').hide();
      $('.action-move-cell-up').attr('disabled', true);
      $('.action-move-row-up').attr('disabled', true);
    } else {
      $('.action-move-cell-up').attr('disabled', false);
      $('.action-move-row-up').attr('disabled', false);
      $('#action-move-up').show();
    } // Si il n'y a pas de ligne en dessous, on ne peut pas le déplacer vers le bas


    if (next_row.length == 0) {
      $('#action-move-down').hide();
      $('.action-move-cell-down').attr('disabled', true);
      $('.action-move-row-down').attr('disabled', true);
      $('.action-merge-down').attr('disabled', true);
    } else {
      $('.action-move-cell-down').attr('disabled', false);
      $('.action-move-row-down').attr('disabled', false);
      $('#action-move-down').show();
    } // Si il n'y a plus qu'une ligne


    if (previous_row.length == 0 && next_row.length == 0) {
      $('.action-delete-row').attr('disabled', true);
    } else {
      $('.action-delete-row').attr('disabled', false);
    } // Gestion des cases


    next_cell = $(".content-editable-selected").next();
    previous_cell = $(".content-editable-selected").prev();
    selected_cell = $(".content-editable-selected");
    selected_cell_index = $(".content-editable-selected").parent().find(".content-editable-selected").index(); // Gestion des colonnes 

    selected_col = [];
    previous_col = [];
    next_col = [];
    $("#full-table tr").each(function (i, element) {
      var actual_row = $("#full-table tr")[i];

      if (selected_cell_index - 1 >= 0) {
        previous_col[i] = $(actual_row).find('th, td')[selected_cell_index - 1];
      }

      selected_col[i] = $(actual_row).find('th, td')[selected_cell_index];

      if (selected_cell_index + 1 < $(actual_row).find('th, td').length) {
        next_col[i] = $(actual_row).find('th, td')[selected_cell_index + 1];
      }
    }); // Si il n'y a plus qu'une colonne

    if (selected_row[0].cells.length <= 2) {
      $('.action-delete-col').attr('disabled', true);
    } else {
      $('.action-delete-col').attr('disabled', false);
    } // Si il n'y a pas de colonne à gauche , on ne peut pas le déplacer vers la gauche
    // console.log(previous_col);


    if (previous_col.length == 0) {
      $('#action-move-left').hide();
      $('.action-move-cell-left').attr('disabled', true);
      $('.action-move-col-left').attr('disabled', true);
    } else {
      $('.action-move-cell-left').attr('disabled', false);
      $('.action-move-col-left').attr('disabled', false);
      $('#action-move-left').show();
    } // Si il n'y a pas de colonne à droite, on ne peut pas le déplacer vers la droite
    // console.log(next_col);


    if (next_col.length == 0) {
      $('.action-move-cell-right').attr('disabled', true);
      $('.action-move-col-right').attr('disabled', true);
      $('#action-move-right').hide();
      $('.action-merge-right').attr('disabled', true);
    } else {
      $('.action-move-cell-right').attr('disabled', false);
      $('.action-move-col-right').attr('disabled', false);
      $('#action-move-right').show();
    } // Si il n'y a pas de cellule adjacente ; pas de merge


    if (next_cell.length == 0) {
      $('.action-merge-right').attr('disabled', true);
    } // Si la case a été merged


    if ($('.content-editable-selected').attr('colspan') || $('.content-editable-selected').attr('rowspan')) {
      $('.action-split').attr('disabled', false);
    } else {
      $('.action-split').attr('disabled', true);
    }
  } else {
    // Si on a sélectionné le titre principal
    $('.cell-action').attr('disabled', true);
    $('.add-element').attr('disabled', true);
    $('.side-tool').hide();
  }

  updatecontent();
}) // ANCHOR Modification du texte via l'intérieur du formulaire
.on('keyup', '#table-title', function () {
  $('#table-creator-title').val($('#table-title').text());
  updatecontent();
}).on('keyup', '#table-caption', function () {
  $('#table-creator-caption').val($('#table-caption span').text());
  updatecontent();
}); // ANCHOR Masquer les sidetools au changement d'onglet

$("#nav-code-tab").on('click', function () {
  $('.side-tool').hide();
  updatecontent();
}); // ANCHOR Fonction Undo/Redo suppression

function command(instance) {
  this.command = instance;
  this.done = [];

  this.execute = function execute() {
    this.command.execute();
    this.done.push(this.command);
  };

  this.undo = function undo() {
    var command = this.done.pop();
    command.undo();
  };
} // ANCHOR Fonction Suppression


var deletecommand = new command({
  execute: function execute() {// element = $(".content-editable-selected").removeClass('content-editable-selected');
    // element = element.detach();
  },
  undo: function undo() {
    element.appendTo("#full-table");
  }
}); // ANCHOR Mise en tablee du texte (gras, italic, underline...)

$('.text-formatting').on("click", function () {
  // TODO NS_ERROR_FAILURE
  var is_text_selected;

  if (window.getSelection().toString().length) {
    is_text_selected = true;
  }

  ;

  switch ($(this).attr('id')) {
    case 'element-bold':
      if (is_text_selected) {
        document.execCommand('bold');
      } else {
        if (!$('.content-editable-selected').hasClass('font-weight-bold')) {
          $('.content-editable-selected').addClass('font-weight-bold');
        } else {
          $('.content-editable-selected').removeClass('font-weight-bold');
        }
      }

      updatecontent();
      break;

    case 'element-italic':
      if (is_text_selected) {
        document.execCommand('italic');
      } else {
        if (!$('.content-editable-selected').hasClass('font-style-italic')) {
          $('.content-editable-selected').addClass('font-style-italic');
        } else {
          $('.content-editable-selected').removeClass('font-style-italic');
        }
      }

      updatecontent();
      break;

    case 'element-underline':
      if (is_text_selected) {
        document.execCommand('underline');
      } else {
        if (!$('.content-editable-selected').hasClass('font-underline')) {
          $('.content-editable-selected').addClass('font-underline');
        } else {
          $('.content-editable-selected').removeClass('font-underline');
        }
      }

      updatecontent();
      break;

    case 'justify-left':
      $('.content-editable-selected').attr('style', 'text-align: left');
      updatecontent();
      break;

    case 'justify-center':
      $('.content-editable-selected').attr('style', 'text-align: center');
      updatecontent();
      break;

    case 'justify-right':
      $('.content-editable-selected').attr('style', 'text-align: right');
      updatecontent();
      break;
  }

  updatecontent();
}); // ANCHOR Theme

$('input[name="theme"]').on('change', function () {
  var theme = "theme-" + $(this).val();
  $('#generated-table').attr('class', theme);
}); // ANCHOR Copier le contenu code 

$("#copy-raw-code, #copy-css-link").on('click', function () {
  message = "Code copié !";
  $(".copy-container button").text("Copier");
  $(this).text(message);
  Object(_js_app__WEBPACK_IMPORTED_MODULE_0__["alertMsg"])(message);
});
new ClipboardJS('#copy-css-link');
new ClipboardJS('#copy-raw-code');

/***/ }),

/***/ 2:
/*!************************************************!*\
  !*** multi ./resources/js/components/table.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp2\htdocs\laravel\easytoc\resources\js\components\table.js */"./resources/js/components/table.js");


/***/ })

},[[2,"/js/manifest","/js/vendor"]]]);