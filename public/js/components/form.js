
// ANCHOR Données initiales
let user_id = $('input[name=user_id]').val();
let type_id = $('input[name=type_id]').val();
let csrf_token = $('meta[name="csrf-token"]').attr('content');
let initial_content = '<form data-tag="form" class="theme-white" id="generated-form" contenteditable="false" action="#" method="get" name="emailform">\n&nbsp;&nbsp;<div id="full-form">\n\t<h1 contenteditable="true" id="form-title" data-tag="form-title">Titre du formulaire</h1>\n&nbsp;&nbsp;</div>\n</form>\n<div class="mt-4" id="form-actions" contenteditable="false">\n\t<input data-tag="input-submit" form="generated-form" type="submit" value="Envoyer" accesskey="s">\n</div>\n';

// ANCHOR Caractères restants Description du projet
$('#desc-input').keypress(function (e) {
    var tval = $('#desc-input').val(),
        tlength = tval.length,
        set = $('#desc-input').attr('maxlength'),
        remain = parseInt(set - tlength);
    $('#chara-desc-remains').text(remain + " caractères restants");
    if (remain <= 0 && e.which !== 0 && e.charCode !== 0) {
        $('#desc-input').val((tval).substring(0, tlength - 1))
    }
})

// ANCHOR Caractères restants Titre du projet
$('#title-input').keypress(function (e) {
    var tval = $('#title-input').val(),
        tlength = tval.length,
        set = $('#title-input').attr('maxlength'),
        remain = parseInt(set - tlength);
    $('#chara-title-remains').text(remain + " caractères restants");
    if (remain <= 0 && e.which !== 0 && e.charCode !== 0) {
        $('#title-input').val((tval).substring(0, tlength - 1))
    }
})

// ANCHOR Liste de tous les tags possibles dans un formulaire
const tags_list = ["form", "fieldset", "legend", "input", "button", "label", "a", "p", "h1", "h2", "h3", "h4", "h5",
    "select", "optgroup", "option", "hr", "textarea", "abbr"
];

// ANCHOR Liste WYSIWYG : liste de tous les éléments dynamiques ajoutables
// \t = tabulation,  \n = saut de ligne
var element_types = {
    "type-question": {
        "insert-short_answer"  : "\t<label for='answer' contenteditable='true' data-tag='label'>Exemple de question</label>\n\t\t<input type='text' name='answer' class='form-control' placeholder='Exemple de réponse' contenteditable='true' data-tag='input-text'/>\n",
        "insert-long_answer"   : "\t<label for='answer' contenteditable='true' data-tag='label'>Exemple de question</label>\n\t\t<textarea type='text' name='answer' class='form-control' placeholder='Exemple de réponse' contenteditable='true' data-tag='input-text'/></textarea>\n",
        "insert-binary_answer" : "\t<fieldset>\n\t\t\t<legend contenteditable='true'>Légende</legend>\n\t\t\t<input type='checkbox' name='answer' checked>\n\t\t\t<label for='answer' contenteditable='true'>Affirmation</label>\n\t\t</fieldset>\n",
        "insert-one_answer"    : "\t<fieldset>\n\t\t\t<legend contenteditable='true' data-tag='text'>Légende</legend>\n\t</fieldset>\n",
        "insert-many_answer"   : "\t<fieldset>\n\t\t\t<legend contenteditable='true' data-tag='text'>Légende</legend>\n\t</fieldset>\n",
        "insert-list_answer"   : "\t<fieldset>\n\t\t\t<legend contenteditable='true' data-tag='text'>Légende</legend>\n\t</fieldset>\n"
    },
    "type-answer-option": {
        "insert-one_answer" : "<div><input type='radio' id='answer-option' name='answer-option' value='answer-value'><label for='answer-option' data-tag='option' contenteditable='true'>Option 1</label></div>",
        "insert-many_answer": "<div><input type='checkbox' id='answer-option' name='answer-option' value='answer-value'><label for='answer-option' data-tag='option' contenteditable='true'>Option 1</label></div>",
        "insert-list_answer": "<div><input type='checkbox' id='answer-option' name='answer-option' value='answer-value'><label for='answer-option' data-tag='option' contenteditable='true'>Option 1</label></div>"
    },
    "type-layout": {
        "insert-title"            : "<h2 contenteditable='true' data-tag='text'>Titre</h2>",
        "insert-paragraph"        : "<p contenteditable='true' data-tag='text'>Paragraphe</p>",
        "insert-link"             : "<a href='#' contenteditable='true' data-tag='link'>Nom du lien</a>",
        "insert-ordered_list"     : "<ol contenteditable='true' data-tag='text'>Nom de la liste<li>a</li><li>b</li><li>c</li></ol>",
        "insert-unordered_list"   : "<ul contenteditable='true' data-tag='text'>Nom de la liste<li>a</li><li>b</li><li>c</li></ul>",
        "insert-horizontal_rule"  : "<hr>",
    },
    "type-special": {
        "make-required" : "\t<abbr title='required' aria-label='required'>*</abbr>\n",
        "reset-button"  : "\n\t<input contenteditable='true' type='reset' value='Réinitialiser' accesskey='r' form='generated-form'>"
    }
};

// ANCHOR Fonction de sauvegarde
function updatecontent() {

    console.log('Mise a jour du contenu');

    var blueprint_content = $('#content-created-blueprint').html();

    // on trie les éléments à ne pas inclure dans le code 
    blueprint_content = blueprint_content.replace(/<easytoc (.*?)\>/g, "");
    blueprint_content = blueprint_content.replace(/<\/easytoc>/g, "");
    blueprint_content = blueprint_content.replace(/ contenteditable="(.*?)\"/g, "");
    // on remplace les doubles sauts de lignes
    blueprint_content = blueprint_content.replace(/\n\s*\n/g, "\n");

    // on update le code par rapport au blueprint
    $('#raw-code').html(blueprint_content);
    var code_content = $('<div>').text($('#raw-code').val()).html();

    // prettify
    $("#formatted-code").html(PR.prettyPrintOne(code_content));
};

// ANCHOR Initialisation
$('#content-created-blueprint').html(initial_content);
if ($('#content-created-blueprint').html()) {
    updatecontent();
}

// ANCHOR Déclenchement sauvegarde (onglets)
$('#nav-code-tab').on('click', function () {
    $('#form-title').text($('#form-creator-title').val());
    $('#generated-form').attr("action", $('#form-creator-link').val());
    $('#generated-form').attr("method", $('#form-creator-method').val());
    updatecontent();
});

// ANCHOR Déclenchement sauvegarde (titre inside)
$('#form-title').on('keyup', function () {
    $('#form-creator-title').val($('#form-title').text());
    $('#elem-title').val($(this).text());
    updatecontent();
});

// ANCHOR Déclenchement sauvegarde (titre outside)
$('#form-creator-title').on('keyup', function () {
    $('#form-title').text($('#form-creator-title').val());
    $('#elem-title').val($(this).val());
    updatecontent();
});

// ANCHOR Déclenchement sauvegarde (lien)
$('#form-creator-link').on('keyup', function () {
    $('#generated-form').attr("action", $('#form-creator-link').val());
    updatecontent();
});

// ANCHOR Déclenchement sauvegarde (méthode)
$('#form-creator-method').on('change', function () {
    $('#generated-form').attr("method", $('#form-creator-method').val());
    updatecontent();
});

// ANCHOR Déclenchement sauvegarde (élément)
$('.add-element').on('click', function () {

    // permettra d'identifier l'élément (lui donne un ID aléatoire)
    var element_id = Math.random().toString(36).substr(2, 9);

    // on différencie les éléments questions, layout, special etc 
    var element_type = $(this).attr("class");
    element_type = element_type.match(/type-([^ ]+)/gi);
    element_type = element_type[0];

    // on récupère le type de l'élément
    var element_type_name = $(this).attr("id");
    if (element_type_name != "reset-button") {
        var element_content = "\t<div id=" + element_id + " class='" + element_type + " " + element_type_name + "'>\n\t" + element_types[element_type][element_type_name] + "\n\t</div>\n";
    } else {
        var element_content = element_types[element_type][element_type_name];
    }

    // on récupère l'ancien contenu 
    var previous_content = $('#content-created-blueprint #full-form').html();

    // en fonction du type , différentes actions 
    var actions_content = $('#form-actions').html();

    // on ajoute le contenu sauf si c'est lié au bouton RESET (doit être ajouté ou enlevé)
    if (element_type_name == "reset-button") {
        if (actions_content.indexOf('type="reset"') > -1 || actions_content.indexOf("type='reset'") > -1) {
            $('#form-actions input[type="reset"]').remove();
        } else {
            var previous_content = $('#form-actions').html();
            $('#form-actions').html(element_content + actions_content);
        }
        actions_content = $('#form-actions').html();
    } else if (element_type == "type-question" && (element_type_name == "insert-one_answer" || element_type_name == "insert-many_answer" || element_type_name == "insert-list_answer")) {
        // on ajoute l'element mais aussi plusieurs réponses exemple
        switch (element_type_name) {
            case "insert-one_answer":
                // code block
                break;
            case "insert-many_answer":
                // code block
                break;
            case "insert-list_answer":
                // code block
                break;
        }
    } else {
        // et on y ajoute l'élément voulu
        $('#content-created-blueprint #full-form').html(previous_content + element_content);
    }

    // mise à jour du code
    updatecontent();

});

// ANCHOR Sauvegarde définitive
$('#btn-save-project').on('click', function () {
    updatecontent();
    console.log("Sauvegarde");
    let post_url = $("#full-form-post").attr('action');
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
    }).fail(function (xhr, status, error) {
        console.log(xhr.responseText);
        console.log(status);
        console.log(error);
    });
})

// ANCHOR Action sur l'élement
$(document.body)
    // When you click on item, record into data("initialText") content of this item.
    .on('focus', '[contenteditable=true]', function () {
        
        // Tools latéraux
        console.log($(this).position().top); 
        $('.side-tool').css("margin-top", $(this).position().top+"px");

        $(this).data("initialText", $(this).html());
        $(".content-editable-selected").removeClass('content-editable-selected'); // on déselectionne le reste
        console.log("Selection d'un élément");
        selectText($(this))
        let tag = $(this).attr('data-tag');
         
        if(tag != "form-title"){ // si ce n'est pas le titre général du formulaire (locked)

            $('.element_delete').attr('disabled', 'false');
            $('.side-tool').show();
            $("#actions-interface").show(); // on affiche l'interface de modification

            let label = $(this).parent().find('label');
            if(label){
                label.on('keyup', function(){
                    $('#elem-title').val(label.text());
                })
            }else{
                console.log($(this).parent());
            }
        }else{
            $('.element_delete').attr('disabled', 'true');
        }
        $(this).addClass("content-editable-selected");
        $('#elem-title').val($(this).text());
        
        updatecontent();
    })
    // quand on déselectionne un élement...
    .on('blur', '[contenteditable=true]', function () {
        // ...si le contenu est différent...
        if ($(this).data("initialText") !== $(this).html()) {
            console.log('Modification d\'un élément');
            console.log($(this).html());
            $("#element_undo").on("click", function(){
                // resetcommand.undo($(this).data("initialText"));
            })
            
            $("#element_redo").on("click", function(){
                // resetcommand.execute($(this).html());
            })
        }
        updatecontent();
});

// ANCHOR Selection de tout le texte au clic
function selectText(element) { 
	var sel, range;
	var el = element[0];
	if (window.getSelection && document.createRange) { //Browser compatibility
	  sel = window.getSelection();
	  if(sel.toString() == ''){ //no text selection
		 window.setTimeout(function(){
			range = document.createRange(); //range object
			range.selectNodeContents(el); //sets Range
			sel.removeAllRanges(); //remove all ranges from selection
			sel.addRange(range);//add Range to a Selection.
		},1);
	  }
	}else if (document.selection) { //older ie
		sel = document.selection.createRange();
		if(sel.text == ''){ //no text selection
			range = document.body.createTextRange();//Creates TextRange object
			range.moveToElementText(el);//sets Range
			range.select(); //make selection.
		}
	}
};

// ANCHOR Fonction Undo/Redo suppression
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
}

// ANCHOR Fonction Suppression
var deletecommand = new command({
    execute: function(){
        element = $(".content-editable-selected").detach();
    },
    undo: function(){
        element.appendTo( "#full-form" );
    }
});

// ANCHOR Commandes JQUERY

$(".element_delete").on('click', function(){
    deletecommand.execute();
})

$("#element_redo").on("click", function(){
    document.execCommand('redo', false, null); // annuler
})

$("#element_undo").on("click", function(){
    document.execCommand('undo', false, null); // rétablir
})

$('#element_bold').click(function() {
    document.execCommand('bold', false, null); // gras
});

$('#element_italic').click(function() {
    document.execCommand('italic', false, null); // italic
});

$('#element_underline').click(function() {
    document.execCommand('underline', false, null); // underline
});

$('#element_cut').click(function() {
    document.execCommand('cut', false, null); // couper
});

$('#element_copy').click(function() {
    document.execCommand('copy', false, null);
});

$('#element_paste').click(function() {
    document.execCommand('paste', false, null);
});

$('#justify-left').click(function() {
    document.execCommand('justifyLeft', false, null);
});

$('#justify-right').click(function() {
    document.execCommand('justifyRight', false, null);
});

$('#justify-center').click(function() {
    document.execCommand('justifyCenter', false, null);
});

$('#justify-full').click(function() {
    document.execCommand('justifyFull', false, null);
});

// ANCHOR Panel droit 

$('#elem-title').on('keyup', function () {
    $('.content-editable-selected').text($(this).val());
    updatecontent();
});

$('.content-editable-selected').on('keyup', function () {
    $('#elem-title').val($('.content-editable-selected').text());
    updatecontent();
});

// ANCHOR Themes 

$('input[name="theme"]').on('change', function(){
    console.log($(this).val());
    let theme = "theme-"+ $(this).val();
    $('#generated-form').attr('class', theme);
})

// ANCHOR Copier le contenu code 

$("#copy-css-link").on('click', function(){
    $(this).text("Copié !")
    $("#copy-raw-code").text("Copier");
})
new ClipboardJS('#copy-css-link');

$("#copy-raw-code").on('click', function(){
    $(this).text("Copié !")
    $("#copy-css-link").text("Copier");
})
new ClipboardJS('#copy-raw-code');

$("#form-actions input").on('click', function(e){
    e.preventdefault;
})
