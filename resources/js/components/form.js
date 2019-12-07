// Contenu initial du formulaire 
let initial_content = '<form id="generated-form" contenteditable action="#" method="get" name="emailform">\n\t<h1 id="form-title">Titre du formulaire</h1>\n</form>\n<div class="mt-4" id="form-actions" contenteditable="false">\n\t<input form="generated-form" type="submit" value="Envoyer" accesskey="s">\n</div>\n';
$('#content-created-blueprint').html(initial_content);

// Données initiales (user id et type id)
let user_id = $('input[name=user_id]').val();
let type_id = $('input[name=type_id]').val();
let csrf_token = $('meta[name="csrf-token"]').attr('content');

// Caractères restants Description du projet
$('#desc-input').keypress(function (e) {
    var tval = $('#desc-input').val(),
        tlength = tval.length,
        set = 200,
        remain = parseInt(set - tlength);
    $('#chara-desc-remains').text(remain + " caractères restants");
    if (remain <= 0 && e.which !== 0 && e.charCode !== 0) {
        $('#desc-input').val((tval).substring(0, tlength - 1))
    }
})

// Titre du projet
$('#title-input').keypress(function (e) {
    var tval = $('#title-input').val(),
        tlength = tval.length,
        set = 30,
        remain = parseInt(set - tlength);
    $('#chara-title-remains').text(remain + " caractères restants");
    if (remain <= 0 && e.which !== 0 && e.charCode !== 0) {
        $('#title-input').val((tval).substring(0, tlength - 1))
    }
})

// Liste de tous les tags possibles dans un formulaire
const tags_list = ["form", "fieldset", "legend", "input", "button", "label", "a", "p", "h1", "h2", "h3", "h4", "h5",
    "select", "optgroup", "option", "hr", "textarea", "abbr"
];

// Traitement du code vers la prévisualisation
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

// Mise à jour du code initial
if ($('#content-created-blueprint').html()) {
    updatecontent();
}

// mise à jour du code quand on change d'onglet (pour être sûr et + efficace sur IE)
$('#nav-code-tab').on('click', function () {
    $('#form-title').text($('#form-creator-title').val());
    $('#generated-form').attr("action", $('#form-creator-link').val());
    $('#generated-form').attr("method", $('#form-creator-method').val());
    updatecontent();
});

$('#form-creator-title').on('keyup', function () {
    $('#form-title').text($('#form-creator-title').val());
    updatecontent();
});

$('#form-creator-link').on('keyup', function () {
    $('#generated-form').attr("action", $('#form-creator-link').val());
    updatecontent();
});

$('#form-creator-method').on('change', function () {
    $('#generated-form').attr("method", $('#form-creator-method').val());
    updatecontent();
});


// Actions WYSIWYG : liste de tous les éléments dynamiques ajoutables
// \t = tabulation,  \n = saut de ligne
// La balise EASYTOC permet de cocher une case quand l'attribut contenteditable est présent
var element_types = {
    "type-question": {
        "insert-short_answer": "\t<label for='answer'>Exemple de question</label>\n\t\t<input type='text' name='answer' class='form-control' placeholder='Exemple de réponse' />\n",
        "insert-long_answer": "\t<label for='answer'>Exemple de question</label>\n\t\t<textarea type='text' name='answer' class='form-control' placeholder='Exemple de réponse' /></textarea>\n",
        "insert-binary_answer": "\t<fieldset>\n\t\t\t<legend>Légende</legend>\n\t\t\t<easytoc contenteditable='false'><input type='checkbox' name='answer' checked></easytoc>\n\t\t\t<label for='answer'>Affirmation</label>\n\t\t</fieldset>\n",
        "insert-one_answer": "\t<fieldset>\n\t\t\t<legend>Légende</legend>\n\t</fieldset>\n",
        "insert-many_answer": "\t<fieldset>\n\t\t\t<legend>Légende</legend>\n\t</fieldset>\n",
        "insert-list_answer": "\t<fieldset>\n\t\t\t<legend>Légende</legend>\n\t</fieldset>\n"
    },
    "type-answer-option": {
        "insert-one_answer": "<div><easytoc contenteditable='false'><input type='radio' id='answer-option' name='answer-option' value='answer-value'></easytoc><label for='answer-option'>Option 1</label></div>",
        "insert-many_answer": "<div><easytoc contenteditable='false'><input type='checkbox' id='answer-option' name='answer-option' value='answer-value'></easytoc><label for='answer-option'>Option 1</label></div>",
        "insert-list_answer": "<div><easytoc contenteditable='false'><input type='checkbox' id='answer-option' name='answer-option' value='answer-value'></easytoc><label for='answer-option'>Option 1</label></div>"
    },
    "type-layout": {
        "insert-title": "<h2>Titre</h2>",
        "insert-paragraph": "<p>Paragraphe</p>",
        "insert-link": "<a href='#'>Nom du lieu</a>",
        "insert-ordered_list": "<ol>Nom de la liste<li>a</li><li>b</li><li>c</li></ol>",
        "insert-unordered_list": "<ul>Nom de la liste<li>a</li><li>b</li><li>c</li></ul>",
        "insert-horizontal_rule": "<hr>",
    },
    "type-special": {
        "make-required": "\t<abbr title='required' aria-label='required'>*</abbr>\n",
        "reset-button": "\n\t<input type='reset' value='Réinitialiser' accesskey='r' form='generated-form'>"
    }
};

// Quand on ajoute un élément
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
    var previous_content = $('#content-created-blueprint form').html();

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
    } else if (element_type == "type-question") {
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
        $('#content-created-blueprint form').html(previous_content + element_content);
    }

    // mise à jour du code
    updatecontent();

});


// Annuler les modifications et redirection
$('#btn-cancel-project').on('click', function () {
    console.log("Annulation");
    let answer = window.confirm("Voulez vous vraiment fermer ce projet sans sauvegarder ?")
    if (answer) {
        window.location.href = "profile/" + user_id + "/view";
    }
})

// Sauvegarder les modifications
$('#btn-save-project').on('click', function () {
    console.log("Sauvegarde");
    let post_url = $("#full-form-post").attr('action');
    $.ajax({
        method: "POST",
        url: post_url,
        data: {
            "_token": csrf_token,
            "type_id" : type_id,
            "user_id" : user_id,
            "title" : $('#title-input').val(),
            "description" : $('#desc-input').val(),
            "html" : $('#raw-code').val()
        }
    }).done(function (msg) {
        console.log(msg);
        window.location.href = "profile/" + user_id + "/view";
    }).fail(function(xhr, status, error) {
        console.log(xhr.responseText);
        console.log(status);
        console.log(error);
    });
})
