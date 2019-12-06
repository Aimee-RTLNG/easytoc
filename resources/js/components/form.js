$('#content-created-blueprint').html('<form id="generated-form" contenteditable action="#" method="get" name="emailform">\n\t<h1 id="form-title">Titre du formulaire</h1>\n</form>\n<div class="mt-4" id="form-actions" contenteditable="false">\n\t<input form="generated-form" type="submit" value="Envoyer" accesskey="s">\n</div>\n');

// OBTENIR LE NB DE CARACTERES RESTANTS
$('#exampleFormControlTextarea1').keypress(function (e) {
    var tval = $('#exampleFormControlTextarea1').val(),
        tlength = tval.length,
        set = 200,
        remain = parseInt(set - tlength);
    $('#chara-desc-remains').text(remain + " caractères restants");
    if (remain <= 0 && e.which !== 0 && e.charCode !== 0) {
        $('#exampleFormControlTextarea1').val((tval).substring(0, tlength - 1))
    }
})

$('#exampleFormControlInput1').keypress(function (e) {
    var tval = $('#exampleFormControlInput1').val(),
        tlength = tval.length,
        set = 30,
        remain = parseInt(set - tlength);
    $('#chara-title-remains').text(remain + " caractères restants");
    if (remain <= 0 && e.which !== 0 && e.charCode !== 0) {
        $('#exampleFormControlInput1').val((tval).substring(0, tlength - 1))
    }
})

// LISTE DE TOUS LES TAGS POSSIBLES
const tags_list = ["form", "fieldset", "legend", "input", "button", "label", "a", "p", "h1", "h2", "h3", "h4", "h5",
    "select", "optgroup", "option", "hr", "textarea", "abbr"
];

// TRAITEMENT DU BLUEPRINT VERS LE PREVIEW
function updatecontent() {

    console.log('Mise a jour du contenu');

    $('#content-created-preview form').html("");
    $('#content-created-code').html("");

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
if($('#content-created-blueprint').html()){
    updatecontent();      
}


// mise à jour du code quand on change d'onglet (pour être sûr et + efficace sur IE)
$('#nav-code-tab').on('click', function () {
    $('#form-title').text($('#form-creator-title').val());
    $('#generated-form').attr("action", $('#form-creator-link').val());
    $('#generated-form').attr("method", $('#form-creator-method').val());
    updatecontent();
});


// Actions WYSIWYG : liste de tous les éléments dynamiques ajoutables
// \t = tabulation,  \n = saut de ligne
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

$('.add-element').on('click', function () {

    // permettra d'identifier l'élément
    var element_id=Math.random().toString(36).substr(2, 9);

    // on différencie les éléments questions, layout, special etc 
    var element_type = $(this).attr("class");
    element_type = element_type.match(/type-([^ ]+)/gi);
    element_type = element_type[0];

    // on récupère le type de l'élément
    var element_type_name = $(this).attr("id");
    if(element_type_name != "reset-button"){
        var element_content = "\t<div id="+element_id+" class='"+element_type+" "+element_type_name+"'>\n\t"+element_types[element_type][element_type_name]+"\n\t</div>\n";
    }else{
        var element_content = element_types[element_type][element_type_name];
    }

    // on récupère l'ancien contenu 
    var previous_content = $('#content-created-blueprint form').html();

    // en fonction du type , différentes actions 
    var actions_content = $('#form-actions').html();

    // on ajoute le contenu sauf si c'est lié au bouton RESET (doit être ajouté ou enlevé)
    if (element_type_name == "reset-button") {
        if (actions_content.indexOf('type="reset"') > -1 || actions_content.indexOf("type='reset'") > -1 ) {
            $('#form-actions input[type="reset"]').remove();
        } else {
            var previous_content = $('#form-actions').html();
            $('#form-actions').html(element_content + actions_content);
        }
        actions_content = $('#form-actions').html();
    } else if (element_type == "type-question" && element_type_name == "insert-oneanswer") {
        // on ajoute l'element mais aussi plusieurs réponses exemple
    } else {
        // et on y ajoute l'élément voulu
        $('#content-created-blueprint form').html(previous_content + element_content);
    }

    // mise à jour du code
    updatecontent();

});

/* ne marche pas 
$('#btn-save-project').on('click', function(){
    console.log("ye");
    $("#full-form-post").submit(function(){
        console.log("Submitted");
      });
})
*/