// Contenu initial du formulaire 
let initial_content = '<nav class="navbar" id="generated-form" contenteditable action="#" name="emailmenu">\n\t<h1 id="form-title">Titre du menu</h1>\n</nav>\n<div class="mt-4" id="form-actions" contenteditable="false">\n\t<input form="generated-form" type="submit" value="Envoyer" accesskey="s">\n</div>\n';
$('#content-created-blueprint').html(initial_content);


// Liste de tous les tags possibles dans un formulaire
const tags_list = ["nav", "navbar-nav", "navbar", "a"
];