(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/components/table"],{

/***/ "./resources/js/components/table.js":
/*!******************************************!*\
  !*** ./resources/js/components/table.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// ANCHOR Données initiales
var element_selected_container;
var input;
var intitule;
var previous_element;
var next_element;
var message;
var user_id = $('input[name=user_id]').val();
var type_id = $('input[name=type_id]').val();
var csrf_token = $('meta[name="csrf-token"]').attr('content');
var initial_content = '<table data-tag="table" class="theme-white" id="generated-table">\n\t<caption>Dinosaurs in the Jurassic period</caption>\n\t<thead>\n\t\t<tr>\n\t\t\t<th>Ceci est un test</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr>\n\t\t\t<td>Ceci est un test\n\t\t\t</td></tr>\n\t</tbody>\n\t</table>'; // ANCHOR Liste de tous les tags possibles dans un formulaire

var tags_list = ["table", "tr", "th", "td", "a", "abbr"]; // ANCHOR Liste WYSIWYG : liste de tous les éléments dynamiques ajoutables
// \t = tabulation,  \n = saut de ligne

var element_types = {// TODO Remplir
}; // ANCHOR Fonction de sauvegarde

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

; // ANCHOR Initialisation du formulaire

$('#content-created-blueprint').html(initial_content);

if ($('#content-created-blueprint').html()) {
  updatecontent();
} // ANCHOR Caractères restants Description du projet


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
    element.appendTo("#full-");
  }
}); // ANCHOR Mise en tablee du texte (gras, italic, underline...)

$('.text-formatting').on("click", function () {
  switch ($(this).attr('id')) {
    case 'element-bold':
      document.execCommand('bold');
      updatecontent();
      break;

    case 'element-italic':
      document.execCommand('italic');
      updatecontent();
      break;

    case 'element-underline':
      document.execCommand('underline');
      updatecontent();
      break;

    case 'justify-left':
      $(element_select).removeClass('text-justify');
      $(element_select).removeClass('text-center');
      $(element_select).addClass('text-left');
      updatecontent();
      break;

    case 'justify-center':
      $(element_select).removeClass('text-justify');
      $(element_select).removeClass('text-left');
      $(element_select).addClass('text-center');
      updatecontent();
      break;

    case 'justify-full':
      $(element_select).removeClass('text-left');
      $(element_select).removeClass('text-center');
      $(element_select).addClass('text-justify');
      updatecontent();
      break;
  }

  updatecontent();
}); // ANCHOR Theme

$('input[name="theme"]').on('change', function () {
  var theme = "theme-" + $(this).val();
  $('#generated-table').attr('class', theme);
}); // ANCHOR Activer / désactiver les boutons de déplacement

function refreshMoveButtons(previous_element, next_element, option) {
  if (option) {
    if (previous_element) {
      if (previous_element.attr("disabled") != "true" && previous_element.attr('data-tag') == "option") {
        $('#action-move-up').removeAttr('disabled');
      } else {
        $('#action-move-up').attr('disabled', true);
      }

      if (next_element.attr("disabled") != "true" && next_element.attr('data-tag') == "option") {
        $('#action-move-down').removeAttr('disabled');
      } else {
        $('#action-move-down').attr('disabled', true);
      }
    } else {
      $('#action-move-up').attr('disabled', true);
      $('#action-move-down').attr('disabled', true);
    }
  } else {
    if (previous_element) {
      if (previous_element.attr("id") == "table-title" && !$(previous_element).hasClass("element-container")) {
        $('#action-move-up').attr('disabled', true);
      } else {
        $('#action-move-up').removeAttr('disabled');
      }

      if (!$(next_element).hasClass("element-container")) {
        $('#action-move-down').attr('disabled', true);
      } else {
        $('#action-move-down').removeAttr('disabled');
      }
    } else {
      $('#action-move-up').attr('disabled', true);
      $('#action-move-down').attr('disabled', true);
    }
  }
} // ANCHOR Copier le contenu code 


$("#copy-raw-code, #copy-css-link").on('click', function () {
  message = "Code copié !";
  $(".copy-container button").text("Copier");
  $(this).text(message);
  alertMsg(message);
});
new ClipboardJS('#copy-css-link');
new ClipboardJS('#copy-raw-code'); // ANCHOR Message d'alerte

var alert_timeout;

function alertMsg(message) {
  clearTimeout(alert_timeout);

  if ($('.alert-success').is(":hidden")) {
    $('.alert-success .alert-content').text(message);
    $('.alert-success').slideDown();
  } else {
    $('.alert-success').slideUp("fast", function () {
      $('.alert-success .alert-content').text(message);
      $('.alert-success').slideDown();
    });
  }

  alert_timeout = setTimeout(function () {
    $('.alert-success').slideUp();
  }, 7000);
}

/***/ }),

/***/ 2:
/*!************************************************!*\
  !*** multi ./resources/js/components/table.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp2\htdocs\laravel\easytoc\resources\js\components\table.js */"./resources/js/components/table.js");


/***/ })

},[[2,"/js/manifest"]]]);