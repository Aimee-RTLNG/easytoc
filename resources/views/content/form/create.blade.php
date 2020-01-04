@extends('layouts/app')

@section('titre') {{ __('Formulaire - EasyToC') }} @endsection

@section('pagespecificstyles')
<link href="{{ URL::asset('css/themes/form/all-themes.css') }}" rel="stylesheet">
@endsection

@section('content')
<div class="container">
    @if (session('info'))
    <div class="row">
        <div class="col-md-12">
            <div class="alert alert-success alert-dismissible">
                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                {{ session('info') }}
            </div>
        </div>
    </div>
    @elseif (session('error'))
    <div class="row">
        <div class="col-md-12">
            <div class="alert alert-danger alert-dismissible">
                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                {{ session('error') }}
            </div>
        </div>
    </div>
    @endif
    <div class="entete">
        <h2 class="entete__title">{{ __('Créer un formulaire') }}</h2>
        <div class="entete__under"></div>
    </div>
    <div class="panel-body mb-3">
        <!-- Display Validation Errors -->
        @include('common.errors')

        <!-- interface d'initialisation du projet -->
        <div class="row creator-panel justify-content-between d-flex" role="region" aria-labelledby="interface-heading">

            @if (Auth::check())
            <!-- infos du projet -->
            <div class="info-panel" role="region" aria-labelledby="form_infos">
                <h3 id="form_infos" class="mb-3 font-weight-bold">{{ __('Informations basiques concernant le formulaire') }}</h3>
                <form id="full-form-post" action="{{ route('content.store') }}" method="post">
                    @csrf
                    <input type="hidden" name="type_id" value="1">
                    <input type="hidden" name="user_id" value="{{ auth()->user()->id }}">
                    <div class="form-group" role="region">
                        <label for="title">{{ __('Titre du projet') }}</label>
                        <input type="text" name="title" placeholder="Titre du projet" class="form-control" id="title-input" maxlength="150" value="{{ old('title') }}">
                        <p id="chara-title-remains"></p>
                    </div>
                    <div class="form-group" role="region">
                        <label for="desc-input">{{ __('Description du projet') }}</label>
                        <textarea type="text" name="description" placeholder="Description du projet" class="form-control" id="desc-input" rows="2" maxlength="300"></textarea>
                        <p id="chara-desc-remains"></p>
                    </div>
                </form>
            </div>
            @endif

            <!-- actions d'initialisation -->
            <div class="actions-panel col-3 flex-column justify-content-around align-items-center" role="region" aria-labelledby="form_tools">
                <h3 id="form_tools" class="mb-3 font-weight-bold">{{ __("Outils d'aide à la création") }}</h3>
                <div class="d-flex justify-content-around align-items-center" role="complementary">
                    <button type="button" class="btn btn-dark">{{ __('Importer des données') }}</button>
                    <button type="button" class="btn btn-dark">{{ __('Générer un exemple') }}</button>
                </div>
                <h3 id="form_help" class="mt-5 font-weight-bold">{{ __("Aide") }}</h3>
                <div class="d-flex flex-column">
                    <a target="_blank" href="aide#formdata">{{ __("Guide d'importation des données") }}</a>
                    <a target="_blank" href="aide#formcreator">{{ __("Guide d'utilisation du créateur") }}</a>
                </div>
            </div>

            <!-- templates -->
            <div class="template-panel col-3 justify-content-center align-items-center" role="region" aria-labelledby="form_themes">
                <h3 id="form_themes" class="mb-3 font-weight-bold">{{ __('Modèles de formulaire') }}</h3>
                <div class="d-flex justify-content-around align-items-center" role="complementary">
                    <div>
                        <div>
                            <input type="radio" value="blue" id="radio01" name="theme">
                            <label for="radio01">{{ __('Bleu') }}</label>
                        </div>
                        <div>
                            <input type="radio" value="white" id="radio02" name="theme" checked>
                            <label for="radio02">{{ __('Blanc') }}</label>
                        </div>
                    </div>
                    <div>
                        <div>
                            <input type="radio" value="green" id="radio03" name="theme">
                            <label for="radio03">{{ __('Vert') }}</label>
                        </div>
                        <div>
                            <input type="radio" value="red" id="radio04" name="theme">
                            <label for="radio04">{{ __('Rouge') }}</label>
                        </div>
                    </div>
                    <div>
                        <div>
                            <input type="radio" value="black" id="radio05" name="theme">
                            <label for="radio05">{{ __('Noir') }}</label>
                        </div>
                        <div>
                            <input type="radio" value="grey" id="radio06" name="theme">
                            <label for="radio06">{{ __('Gris') }}</label>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <!-- interface d'interaction avec le projet -->
        <div class="row creator-interfaces d-flex justify-content-around mt-5" role="section" aria-label="Actions sur l'élement">

            <div id="content-interface" class="col border bg-white rounded p-3" role="section" aria-label="Actions sur l'élement">
                <!-- navigation entre les panneaux -->

                <div class="d-flex justify-content-around mb-2" role="region">
                    <div class="col p-0" role="region">
                        <label for="form-creator-title">{{ __('Titre du formulaire') }}</label>
                        <input name="form-creator-title" id="form-creator-title" placeholder="Titre du formulaire" class="form-control" size="30" value="Titre du formulaire" />
                    </div>
                    <div class="col p-0 ml-2" role="region">
                        <label for="form-creator-link">{{ __('Lien de traitement des données') }}</label>
                        <input name="form-creator-link" id="form-creator-link" placeholder="Lien du formulaire" class="form-control" size="30" />
                    </div>
                    <div class="col-2" role="region">
                        <label for="form-creator-method" class="mr-3">{{ __('Méthode') }}</label>
                        <select class="form-control" name="form-creator-method" id="form-creator-method">
                            <option value="get">GET</option>
                            <option value="post">POST</option>
                        </select>
                    </div>
                    <div class="col-3" role="region">
                        <label>Option du formulaire</label>
                        <label for="reset-button" class="d-block">
                            <input type="checkbox" class="add-element type-special" value="" id="reset-button" name="reset-button">
                            <span class="ml-2">{{ __('Bouton de réinitialisation') }}</span>
                        </label>
                    </div>
                </div>

                <div role="section" class="row px-4 mt-5" aria-labelledby="form_actions_element">
                <div role="section" class="col" aria-labelledby="form_add_static">
                        <h3 id="form_add_static" class="mb-3 font-weight-bold">{{ __('Ajouter un élément statique') }}</h3>
                        <button class="btn btn-light add-element type-layout" type="button" aria-label="{{ __('Nouvelle section') }}" id="insert-horizontal_rule" role="listitem">
                            <i class="fa fa-grip-lines"></i>
                            {{ __('Nouvelle section') }}
                        </button>
                        <button class="btn btn-light add-element type-layout" type="button" aria-label="{{ __('Titre') }}" id="insert-title" role="listitem">
                            <i class="fa fa-heading"></i>
                            {{ __('Titre') }}
                        </button>
                        <button class="btn btn-light add-element type-layout" type="button" aria-label="{{ __('Paragraphe') }}" id="insert-paragraph" role="listitem">
                            <i class="fa fa-paragraph"></i>
                            {{ __('Paragraphe') }}
                        </button>
                        <button class="btn btn-light add-element type-layout" type="button" aria-label="{{ __('Lien') }}" id="insert-link" role="listitem">
                            <i class="fa fa-link"></i>
                            {{ __('Lien') }}
                        </button>
                        <button class="btn btn-light add-element type-layout" type="button" aria-label="{{ __('Liste numérotée') }}"  id="insert-ordered_list" role="listitem">
                            <i class="fa fa-list-ol"></i>
                            {{ __('Liste numérotée') }}
                        </button>
                        <button class="btn btn-light add-element type-layout" type="button" aria-label="{{ __('Liste à puces') }}" id="insert-unordered_list" role="listitem">
                            <i class="fa fa-list-ul"></i>
                            {{ __('Liste à puces') }}
                        </button>
                    </div>
                    <div role="section" class="col-5" aria-labelledby="form_actions_text">
                        <h3 id="form_actions_text" class="mb-3 font-weight-bold">{{ __('Mise en forme du texte') }}</h3>
                        <button class="btn btn-light text-formatting" type="button" aria-label=" {{ __('Gras') }}" id="element-bold" role="listitem">
                            <i class="fa fa-bold"></i>
                            {{ __('Gras') }}
                        </button>
                        <button class="btn btn-light text-formatting" type="button" aria-label="{{ __('Italique') }}" id="element-italic" role="listitem">
                            <i class="fa fa-italic"></i>
                            {{ __('Italique') }}
                        </button>
                        <button class="btn btn-light text-formatting" type="button" aria-label="{{ __('Souligné') }}" id="element-underline" role="listitem">
                            <i class="fa fa-underline"></i>
                            {{ __('Souligné') }}
                        </button>
                        <button class="btn btn-light text-formatting" type="button" aria-label="{{ __('Aligner à gauche') }}" id="justify-left" role="listitem">
                            <i class="fa fa-align-left"></i>
                            {{ __('Aligner à gauche') }}
                        </button>
                        <button class="btn btn-light text-formatting" type="button" aria-label="{{ __('Centrer') }}" id="justify-center" role="listitem">
                            <i class="fa fa-align-center"></i>
                            {{ __('Centrer') }}
                        </button>
                        <button class="btn btn-light text-formatting" type="button" aria-label="{{ __('Justifier') }}" id="justify-full" role="listitem">
                            <i class="fa fa-align-justify"></i>
                            {{ __('Justifier') }}
                        </button>
                    </div>
                </div>
                <div role="section" class="row px-4 mt-5" aria-labelledby="form_actions_element">
                    <div role="section" class="col" aria-labelledby="form_add_question">
                        <h3 id="form_add_question" class="mb-3 font-weight-bold">{{ __('Ajouter une question') }}</h3>
                        <button class="btn btn-light add-element type-question" type="button" aria-label="{{ __('Réponse libre courte') }}" id="insert-short_answer">
                            <i class="fa fa-comment"></i>
                            {{ __('Réponse libre courte') }}
                        </button>
                        <button class="btn btn-light add-element type-question" type="button" aria-label="{{ __('Réponse libre longue') }}" id="insert-long_answer">
                            <i class="fa fa-comment-alt"></i>
                            {{ __('Réponse libre longue') }}
                        </button>
                        <button class="btn btn-light add-element type-question" type="button" aria-label="{{ __('Réponse Oui/Non') }}" id="insert-binary_answer">
                            <i class="fa fa-check-square"></i>
                            {{ __('Réponse Oui/Non') }}
                        </button>
                        <button class="btn btn-light add-element type-question" type="button" aria-label="{{ __('Choix unique') }}"  id="insert-one_answer">
                            <i class="fa fa-check-circle"></i>
                            {{ __('Choix unique') }}
                        </button>
                        <button class="btn btn-light add-element type-question" type="button" aria-label="{{ __('Choix multiple') }}" id="insert-many_answer">
                            <i class="fa fa-tasks"></i>
                            {{ __('Choix multiple') }}
                        </button>
                        <button class="btn btn-light add-element type-question" type="button" aria-label="{{ __('Choix en liste') }}" id="insert-list_answer">
                            <i class="fa fa-caret-down"></i>
                            {{ __('Choix en liste') }}
                        </button>
                    </div>
                    <div role="section" class="col-5" aria-labelledby="form_actions_text">
                        <h3 id="form_actions_text" class="mb-3 font-weight-bold">{{ __('Actions sur l\'élément') }}</h3>
                        <button disabled="true" aria-label="Supprimer" class="btn btn-light element_delete form-element-action action-delete" data-action="delete">
                            <i class="fa fa-trash"></i>
                            {{ __('Supprimer') }}
                        </button>
                        <button disabled="true" aria-label="Annuler la suppression" class="btn btn-light element_undo form-element-action action-undo" data-action="undo">
                            <i class="fa fa-undo"></i>
                            {{ __('Annuler la suppression') }}
                        </button>
                        <!-- Ajout d'option -->
                        <button type="button" aria-label="{{ __('Ajouter une option') }}" disabled="true" data-action="add-option" class="btn btn-light form-element-action element_add-option">
                            <i class="fa fa-check-square"></i>
                            {{ __('Ajouter une option') }}
                        </button>
                    </div>
                </div>


                <div class="row d-flex m-0 mb-3">

                    <div class="side-tool" style="display: none">
                        <button accesskey="u" id="action-move-up" data-action="move-up" class="mb-2 btn-info form-element-action action-move-up" title="Déplacer vers le haut">
                            <i class="fas fa-sort-up" title="{{ __('Déplacer vers le haut') }}"></i>
                        </button>
                        <button accesskey="d" id="action-move-down" data-action="move-down" class="btn-info form-element-action action-move-down" title="Déplacer vers le bas">
                            <i class="fas fa-sort-down" title="{{ __('Déplacer vers le bas') }}"></i>
                        </button>
                    </div>

                    <div class="col p-0 m-0">
                        <nav class="mt-5">
                            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                <a class="nav-item nav-link active" id="nav-blueprint-tab" data-toggle="tab" href="#nav-blueprint" role="tab" aria-controls="nav-blueprint" aria-selected="true">{{ __('Formulaire') }}</a>
                                <a class="nav-item nav-link" id="nav-code-tab" data-toggle="tab" href="#nav-code" role="tab" aria-controls="nav-code" aria-selected="false">{{ __('Code généré') }}</a>
                            </div>
                        </nav>


                        <!-- panneaux -->
                        <div class="tab-content" id="nav-tabContent" role="section">

                            <!-- Code en brut (non formatté) -->
                            <textarea name="html" placeholder="html" id="raw-code" class="d-none" aria-hidden="true"></textarea>

                            <!-- panneau blueprint -->
                            <div class="tab-pane fade show active" id="nav-blueprint" role="tabpanel" aria-labelledby="nav-blueprint-tab">
                                <div id="content-created-blueprint" class="content-panel border border-top-0 rounded-bottom p-4">
                                </div>
                            </div>

                            <!-- panneau code -->
                            <div class="tab-pane fade" id="nav-code" role="tabpanel" aria-labelledby="nav-code-tab">
                                <h3>{{ __('Liens CSS à mettre dans la balise') }} &lt;head&gt; </h3>
                                <a target="_blank" href="aide#formcode" class="btn btn-light">
                                    <i class="fa fa-question-circle"></i>
                                    {{ __("Besoin d'aide !") }}
                                </a>
                                <div class="copy-container w-100 d-flex flex-row-reverse">
                                    <button data-clipboard-action="copy" data-clipboard-target="#css-link" id="copy-css-link" type="button" class="btn btn-info">
                                        {{ __("Copier") }}
                                    </button>
                                </div>
                                <!-- Lien du style à utiliser -->
                                <xmp class="code-display" id="css-link"><link href="{{ URL::asset('css/themes/form/all-themes.css') }}" rel="stylesheet"></xmp>
                                <h3 class="mt-3">{{ __("Voici le code brut pour votre formulaire: copiez le où vous le souhaitez, mais ne le modifiez pas !") }}</h3>
                                <div class="copy-container w-100 d-flex flex-row-reverse">
                                    <button data-clipboard-action="copy" data-clipboard-target="#formatted-code" id="copy-raw-code" type="button" class="btn btn-info">
                                        {{ __("Copier") }}
                                    </button>
                                </div>
                                <!-- Code formatté -->
                                <pre class="prettyprint linenums:4 content-panel" id="formatted-code"></pre>
                            </div>
                        </div>
                    </div>

                    <div class="side-tool" style="display: none">
                        <button accesskey="t" class="form-element-action action-delete btn-danger  mt-3" id="action-delete" data-action="delete" title="Supprimer l'élement">
                            <i class="fas fa-trash" title="{{ __('Supprimer l\'élément') }}"></i>
                        </button>
                    </div>
                </div>


                <div id="actions-interface" class="border bg-white rounded p-3" style="display: none" role="section">
                    <h3 id="form_edit_element" class="mb-3 font-weight-bold">{{ __('Élément sélectionné') }}</h3>
                    <a target="_blank" href="aide#formuse" class="btn btn-light">
                        <i class="fa fa-question-circle"></i>
                        {{ __("Besoin d'aide !") }}
                    </a>
                    <div class="d-flex" role="section">
                        <!-- Intitulé -->
                        <div role="section" class="col action-question-text">
                            <label for="elem-title">
                                {{ __("Intitulé") }}
                                <input class="form-control form-element-action" data-action="question-text" id="elem-title" name="elem-title" placeholder="{{ __('Texte') }}" size="50" />
                            </label>
                        </div>  
                        <!-- Placeholder -->                      
                        <div role="section" class="col action-placeholder" style="display:none">
                            <label for="elem-placeholder">
                                {{ __('Exemple de réponse') }}
                                <input class="form-control form-element-action" data-action="placeholder" name="elem-placeholder" id="elem-placeholder" placeholder="{{ __('Exemple de réponse') }}" size="25" aria-label="{{ __('Exemple de réponse') }}" />
                            </label>
                        </div>
                        <!-- Référence des options -->                      
                        <div role="section" class="col action-options-name" style="display:none">
                            <label for="elem-options-name">
                                {{ __('Référence de la question') }}
                                <input class="form-control form-element-action" data-action="options-name" name="elem-options-name" id="elem-options-name" placeholder="{{ __('Référence') }}" aria-label="{{ __('Référence') }}" />
                            </label>
                        </div>
                        <!-- Nom des options -->                      
                        <div role="section" class="col action-option-label" style="display:none">
                            <label for="elem-option-label">
                                {{ __("Nom de l'option") }}
                                <input class="form-control form-element-action" data-action="option-label" name="elem-option-label" id="elem-option-label" placeholder="{{ __('Label') }}" aria-label="{{ __('Label') }}" />
                            </label>
                        </div>
                        <!-- Valeur des options -->                      
                        <div role="section" class="col action-option-value" style="display:none">
                            <label for="elem-option-value">
                                {{ __("Valeur de l'option") }}
                                <input class="form-control form-element-action" data-action="option-value" name="elem-option-value" id="elem-option-value" placeholder="{{ __('Valeur') }}" aria-label="{{ __('Valeur') }}" />
                            </label>
                        </div>
                        <!-- Type de réponse-->
                        <div role="section" class="col action-answer-type" style="display:none">
                            <label for="elem-type">{{ __('Type de réponse attendue') }}</label>
                            <select class="form-control form-element-action" data-action="answer-type" name="elem-type" id="elem-type">
                                <option selected disabled>{{ __('Type') }}</option>
                                <option value="email">{{ __('Email') }}</option>
                                <option value="number">{{ __('Nombre') }}</option>
                                <option value="date">{{ __('Date') }}</option>
                                <option value="text">{{ __('Texte') }}</option>
                            </select>
                        </div>
                        <!-- Required-->
                        <div role="section" class="col action-required">
                            <label for="elem-required">
                                <input class="form-element-action mr-2" data-action="required" type="checkbox" name="elem-required" id="elem-required" role="section">
                                {{ __('Réponse obligatoire') }}
                            </label>
                        </div>
                        <!-- Longueur max-->
                        <div role="section" class="col action-maxlength" style="display:none">
                            <label for="elem-length">
                                {{ __('Longueur de caractères maximum') }}
                                <input class="form-control form-element-action" data-action="maxlength" name="elem-length" id="elem-length" placeholder="Longueur" />
                            </label>
                            <i class="d-block">0 = {{ __('sans limite') }}</i>
                        </div>
                       <!-- Si élément == select -->
                        <div role="section" class="col align-items-center action-multiple-answer"style="display:none">
                            <input class="mr-2 form-element-action" data-action="multiple-answer" type="checkbox" name="elem-multiple-choice" id="elem-multiple-choice" role="section">
                            <label for="elem-multiple-choice">
                                {{ __('Choix multiples') }}
                            </label>
                        </div>
                        <!-- Si élément == lien -->
                        <div role="section" class="col align-items-center action-url" style="display:none">
                            <label for="elem-url">
                                {{ __('Lien associé') }} (url)
                                <input name="elem-url" id="elem-url" placeholder="{{ __('Entrez une URL') }}" class="form-control  form-element-action" data-action="url" size="250" aria-label="{{ __('Lien associé') }}" />
                            </label>
                        </div>
                        <!-- Ajout d'option -->
                         <div role="section" class="col action-add-option" style="display:none">
                            <button type="button" aria-label="{{ __('Ajouter une option') }}" data-action="add-option" class="btn btn-light form-element-action element_add-option">
                                <i class="fa fa-check-square"></i>
                                {{ __('Ajouter une option') }}
                            </button>
                        </div>
                        <!-- Ajout d'option -->
                        <div role="section" class="col action-delete-option" style="display:none">
                           <button type="button" aria-label="{{ __('Supprimer l\'option') }}" data-action="delete-option" class="btn btn-light form-element-action element_delete-option">
                            <i class="fas fa-trash"></i>
                               {{ __("Supprimer l'option") }}
                           </button>
                       </div>
                    </div>
                </div>
            </div>
        </div>

        @if (Auth::check())

        <!-- Actions importantes sur le projet -->
        <div class="project-action col-8 mx-auto my-3 d-flex justify-content-between align-items-center" role="region" aria-labelledby="form_actions">
            <button type="button" accesskey="c" class="btn btn-danger" id="btn-cancel-project" aria-label="Annuler les modifications" onclick="if(confirm('{{ __('Voulez vous vraiment quitter sans sauvegarder ?') }}')){ window.location.href = 'profile/{{ auth()->user()->id }}/view' }">{{ __('Annuler les
                            modifications') }}</button>
            <button type="submit" accesskey="s" class="btn btn-success" id="btn-save-project" aria-label="Sauvegarder ce projet">{{ __('Sauvegarder ce projet') }}</button>
        </div>

        @endif
    </div>
</div>

<div class="alert alert-success" role="alert" style="display: none">
    <span class="alert-content">
        Contenu de l'alerte
    </span>
    <button type="button" class="close ml-3" data-dismiss="alert" aria-label="{{ __('Fermer') }}">
        <span aria-hidden="true">
            <i class="fa fa-times"></i>
        </span>
    </button>
</div>

@endsection

@section('pagespecificscripts')

<script type="application/javascript" src="{{ URL::asset('js/components/form.js') }}"></script>
{{-- Script PRETTIFY + skin --}}
<script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js?autorun=true&amp;skin=sunburst"></script>

@endsection