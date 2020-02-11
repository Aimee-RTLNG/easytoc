console.log("test");
// Contenu initial du formulaire 
let initial_content = '<nav class="navbar" id="generated-menu" contenteditable action="#" name="emailmenu">\n\t<h1 id="form-title">Titre du menu</h1>\n</nav>\n<div class="mt-4" id="menu-actions" contenteditable="false">\n\t<input form="generated-menu" type="submit" value="Envoyer" accesskey="s">\n</div>\n';
$('#content-created-blueprint').html(initial_content);

// Données initiales (user id et type id)
let user_id = $('input[name=user_id]').val();
let type_id = $('input[name=type_id]').val();
let csrf_token = $('meta[name="csrf-token"]').attr('content');


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
    //updatecontent();
}

// mise à jour du code quand on change d'onglet (pour être sûr et + efficace sur IE)
$('#nav-code-tab').on('click', function () {
    $('#menu-title').text($('#menu-creator-title').val());
    $('#generated-menu').attr("action", $('#menu-creator-link').val());
    $('#generated-menu').attr("method", $('#menu-creator-method').val());
    updatecontent();
});            

$('#menu-creator-title').on('keyup', function () {
    $('#menu-title').text($('#menu-creator-title').val());
    updatecontent();
});

$('#menu-creator-link').on('keyup', function () {
    $('#generated-menu').attr("action", $('#menu-creator-link').val());
    updatecontent();
});

$('#menu-creator-method').on('change', function () {
    $('#generated-menu').attr("method", $('#menu-creator-method').val());
    updatecontent();
});


// Actions WYSIWYG : liste de tous les éléments dynamiques ajoutables
// \t = tabulation,  \n = saut de ligne
// La balise EASYTOC permet de cocher une case quand l'attribut contenteditable est présent
var element_types = {
    "type-container": {
        "insert-menu": "\n\t\t<ul data-tag='menu' contenteditable='true'></ul>",
        "insert-sous-menu": "\n\t\t\t<ul data-tag='sous-menu' contenteditable='true'><li></li></ul>",
    },
};


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