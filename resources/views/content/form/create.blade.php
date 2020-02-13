@extends('layouts.app')

@section('titre') {{ __('Formulaire') }} - EasyToC @endsection

@section('pagespecificstyles')
    <link href="{{ URL::asset('css/themes/form/all-themes.css') }}" rel="stylesheet">
@endsection

@section('content')
<div class="container">
    @if (session('info'))
    <div class="row">
        <div class="col-md-12">
            <div class="alert alert-success alert-dismissible">
                <button type="button" class="close" data-dismiss="alert" aria-hidden="true" title="{{ __('Fermer') }}">×</button>
                {{ session('info') }}
            </div>
        </div>
    </div>
    @elseif (session('error'))
    <div class="row">
        <div class="col-md-12">
            <div class="alert alert-danger alert-dismissible">
                <button type="button" class="close" data-dismiss="alert" aria-hidden="true" title="{{ __('Fermer') }}">×</button>
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
        <div class="row creator-panel" role="region" aria-labelledby="interface-heading">

            @if (Auth::check())
            <!-- infos du projet -->
            <div class="info-panel col-lg-4" role="region" aria-labelledby="form_infos">
                {{-- <h3 id="form_infos" class="mb-3 font-weight-bold">{{ __('Informations basiques concernant le formulaire') }}</h3> --}}
                <form id="full-form-post" action="{{ route('content.store') }}" method="post">
                    @csrf
                    <input type="hidden" name="type_id" value="1">
                    <input type="hidden" name="user_id" value="{{ auth()->user()->id }}">
                    <div class="form-group" role="region">
                        <label class="creator-panel__title" for="title">{{ __('Titre du projet') }}</label>
                        <input class="shadow-box  border-12" type="text" name="title" placeholder="{{ __('Titre') }}" class="form-control" id="title-input" maxlength="150" required>
                        <p id="chara-title-remains"></p>
                    </div>
                    <div class="form-group" role="region">
                        <label class="creator-panel__title" for="desc-input">{{ __('Description du projet') }}</label>
                        <textarea class="shadow-box border-12" type="text" name="description" placeholder="{{ __('Description') }}" class="form-control" id="desc-input" rows="3" maxlength="300"></textarea>
                        <p id="chara-desc-remains"></p>
                    </div>
                </form>
            </div>
            @endif

            <!-- actions d'initialisation -->
            <div class="actions-panel @if (Auth::check()) col-lg-4 col-md-6 @else col-lg-5 col-md-6 @endif" role="region" aria-labelledby="form_tools">
                <h3 id="form_tools" class="mb-3 creator-panel__title creator-panel__title">{{ __("Outils d'aide à la création") }}</h3>
                <div class="actions-panel__btn" role="complementary">
                    <button type="button" class="btn btn-form-final btn-primary btn-crea" data-toggle="modal" data-target="#importData" title="{{ __("Importer des données") }}">
                        <div class="btn-crea__icon">
                            <i class="fas fa-file-upload"></i>
                        </div>
                        <p>{{ __('Importer des données') }}</p>
                    </button>
                    
                    <button type="button" class="btn btn-form-final btn-primary btn-crea" id="generate-example" title="{{ __("Générer un exemple") }}">
                        <div class="btn-crea__icon">
                            <i class="fas fa-sync"></i>
                            {{-- <i class="fas fa-file-code"></i> --}}
                        </div>
                        <p>{{ __('Générer un exemple') }}</p>
                    </button>
                </div>
                <h3 id="form_help" class="mt-5 creator-panel__title">{{ __("Aide") }}</h3>
                <div class="help-panel">
                    <a href="aide#formdata" title="{{ __('Accéder au guide d\'importation des données') }}">{{ __("Guide d'importation des données") }}</a>
                    <a href="aide#formcreator" title="{{ __('Accéder au guide d\'utilisation du créateur') }}">{{ __("Guide d'utilisation du créateur") }}</a>
                </div>
            </div>

            <!-- templates -->
            <div class="template-panel @if (Auth::check()) col-lg-3 col-md-6 @else col-lg-4 col-md-6 @endif justify-content-center align-items-center" role="region" aria-labelledby="form_themes">
                <h3 id="form_themes" class="mb-3 creator-panel__title">{{ __('Thème du formulaire') }}</h3>
                <div class="template-panel__choice shadow-box border-12 theme-switch" role="complementary">
                    <div>
                        <div>
                            <input type="radio" value="blue" id="radio01" name="theme">
                            <label tabindex="0" for="radio01">{{ __('Bleu') }}</label>
                        </div>
                        <div>
                            <input type="radio" value="white" id="radio02" name="theme" checked>
                            <label tabindex="0" for="radio02">{{ __('Blanc') }}</label>
                        </div>
                    </div>
                    <div>
                        <div>
                            <input type="radio" value="green" id="radio03" name="theme">
                            <label tabindex="0" for="radio03">{{ __('Vert') }}</label>
                        </div>
                        <div>
                            <input type="radio" value="red" id="radio04" name="theme">
                            <label tabindex="0" for="radio04">{{ __('Rouge') }}</label>
                        </div>
                    </div>
                    <div>
                        <div>
                            <input type="radio" value="black" id="radio05" name="theme">
                            <label tabindex="0" for="radio05">{{ __('Noir') }}</label>
                        </div>
                        <div>
                            <input type="radio" value="grey" id="radio06" name="theme">
                            <label tabindex="0" for="radio06">{{ __('Gris') }}</label>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <!-- interface d'interaction avec le projet -->
        <div class="row creator-interfaces d-flex justify-content-around mt-5" role="section" aria-label="Actions sur l'élement">

            <div id="content-interface" class="content-interface col shadow-box border-12 bg-white" role="section" aria-label="Actions sur l'élement">
                <!-- navigation entre les panneaux -->

                <div class="main-info-form row" role="region">
                    <div class="col-lg-3 col-md-6" role="region">
                        <label class="creator-panel__title" for="form-creator-title">{{ __('Titre du formulaire') }}</label>
                        <input name="form-creator-title" id="form-creator-title" placeholder="{{ __('Titre du formulaire') }}" class="form-control input-creator" size="30" value="{{ __('Titre du formulaire') }}" />
                    </div>
                    <div class="col-lg-4 col-md-6" role="region">
                        <label class="creator-panel__title" for="form-creator-link">{{ __('Lien de traitement des données') }}</label>
                        <input name="form-creator-link" id="form-creator-link" placeholder="Lien du formulaire" class="form-control input-creator" size="30" />
                    </div>
                    <div class="col-lg-2 col-md-6" role="region">
                        <label class="creator-panel__title" for="form-creator-method" class="mr-3">{{ __('Méthode') }}</label>
                        <select class="form-control input-creator" name="form-creator-method" id="form-creator-method">
                            <option value="get">GET</option>
                            <option value="post">POST</option>
                        </select>
                    </div>
                    <div class="col-lg-3 col-md-6" role="region">
                        <label class="creator-panel__title">Option du formulaire</label>
                        <label class="reset-button" for="reset-button" class="d-block">
                            <input type="checkbox" class="add-element type-special check-box" value="" id="reset-button" name="reset-button">
                            <span class="ml-3">{{ __('Bouton de réinitialisation') }}</span>
                        </label>
                    </div>
                </div>

                <div role="section" class="row form_actions_element" aria-labelledby="form_actions_element">
                    <div role="section" class="col-md-7" aria-labelledby="form_add_static">
                        <h3 id="form_add_static" class="mb-3 creator-panel__title">{{ __('Ajouter un élément statique') }}</h3>
                        <button class="btn btn-primary btn_crea add-element type-layout" type="button" aria-label="{{ __('Nouvelle séparation') }}" id="insert-horizontal_rule" role="listitem" title="{{ __("Ajouter une séparation") }}">
                            <i class="fa fa-grip-lines"></i>
                            {{ __('Nouvelle section') }}
                        </button>
                        <button class="btn btn-primary btn_crea add-element type-layout" type="button" aria-label="{{ __('Titre') }}" id="insert-title" role="listitem" title="{{ __("Ajouter un titre") }}">
                            <i class="fa fa-heading"></i>
                            {{ __('Titre') }}
                        </button>
                        <button class="btn btn-primary btn_crea add-element type-layout" type="button" aria-label="{{ __('Paragraphe') }}" id="insert-paragraph" role="listitem" title="{{ __("Ajouter un paragraphe") }}">
                            <i class="fa fa-paragraph"></i>
                            {{ __('Paragraphe') }}
                        </button>
                        <button class="btn btn-primary btn_crea add-element type-layout" type="button" aria-label="{{ __('Lien') }}" id="insert-link" role="listitem" title="{{ __("Ajouter un lien") }}">
                            <i class="fa fa-link"></i>
                            {{ __('Lien') }}
                        </button>
                        <button class="btn btn-primary btn_crea add-element type-layout" type="button" aria-label="{{ __('Liste numérotée') }}"  id="insert-ordered_list" role="listitem" title="{{ __("Ajouter une liste numérotée") }}">
                            <i class="fa fa-list-ol"></i>
                            {{ __('Liste numérotée') }}
                        </button>
                        <button class="btn btn-primary btn_crea add-element type-layout" type="button" aria-label="{{ __('Liste à puces') }}" id="insert-unordered_list" role="listitem" title="{{ __("Ajouter une liste à puces") }}">
                            <i class="fa fa-list-ul"></i>
                            {{ __('Liste à puces') }}
                        </button>
                    </div>
                    <div role="section" class="col-md-5" aria-labelledby="form_actions_text">
                        <h3 id="form_actions_text" class="mb-3 creator-panel__title">{{ __('Mise en forme du texte') }}</h3>
                        <button class="btn btn-primary btn_crea text-formatting" type="button" aria-label=" {{ __('Gras') }}" id="element-bold" role="listitem" title="{{ __("Mettre le texte en gras") }}">
                            <i class="fa fa-bold"></i>
                            {{ __('Gras') }}
                        </button>
                        <button class="btn btn-primary btn_crea text-formatting" type="button" aria-label="{{ __('Italique') }}" id="element-italic" role="listitem" title="{{ __("Mettre le texte en italique") }}">
                            <i class="fa fa-italic"></i>
                            {{ __('Italique') }}
                        </button>
                        <button class="btn btn-primary btn_crea text-formatting" type="button" aria-label="{{ __('Souligné') }}" id="element-underline" role="listitem" title="{{ __("Mettre le texte en souligné") }}">
                            <i class="fa fa-underline"></i>
                            {{ __('Souligné') }}
                        </button>
                        <button class="btn btn-primary btn_crea text-formatting" type="button" aria-label="{{ __('Aligner à gauche') }}" id="justify-left" role="listitem" title="{{ __("Mettre le texte à gauche") }}">
                            <i class="fa fa-align-left"></i>
                            {{ __('Aligner à gauche') }}
                        </button>
                        <button class="btn btn-primary btn_crea text-formatting" type="button" aria-label="{{ __('Centrer') }}" id="justify-center" role="listitem" title="{{ __("Mettre le texte au centre") }}">
                            <i class="fa fa-align-center"></i>
                            {{ __('Centrer') }}
                        </button>
                        <button class="btn btn-primary btn_crea text-formatting" type="button" aria-label="{{ __('Justifier') }}" id="justify-full" role="listitem" title="{{ __("Justifier le texte") }}">
                            <i class="fa fa-align-justify"></i>
                            {{ __('Justifier') }}
                        </button>
                    </div>
                </div>
                <div role="section" class="row mt-4 form_actions_element" aria-labelledby="form_actions_element">
                    <div role="section" class="col-md-7" aria-labelledby="form_add_question">
                        <h3 id="form_add_question" class="mb-3 creator-panel__title">{{ __('Ajouter une question') }}</h3>
                        <button class="btn btn-primary btn_crea add-element type-question" type="button" aria-label="{{ __('Réponse libre courte') }}" id="insert-short_answer" title="{{ __('Ajouter une réponse libre courte') }}">
                            <i class="fa fa-comment"></i>
                            {{ __('Réponse libre courte') }}
                        </button>
                        <button class="btn btn-primary btn_crea add-element type-question" type="button" aria-label="{{ __('Réponse libre longue') }}" id="insert-long_answer" title="{{ __('Ajouter une réponse libre longue') }}">
                            <i class="fa fa-comment-alt"></i>
                            {{ __('Réponse libre longue') }}
                        </button>
                        <button class="btn btn-primary btn_crea add-element type-question" type="button" aria-label="{{ __('Réponse Oui/Non') }}" id="insert-binary_answer" title="{{ __('Ajouter une réponse binaire') }}">
                            <i class="fa fa-check-square"></i>
                            {{ __('Réponse Oui/Non') }}
                        </button>
                        <button class="btn btn-primary btn_crea add-element type-question" type="button" aria-label="{{ __('Choix unique') }}"  id="insert-one_answer" title="{{ __('Ajouter une réponse à choix unique') }}">
                            <i class="fa fa-check-circle"></i>
                            {{ __('Choix unique') }}
                        </button>
                        <button class="btn btn-primary btn_crea add-element type-question" type="button" aria-label="{{ __('Choix multiple') }}" id="insert-many_answer" title="{{ __('Ajouter une réponse à choix multiple') }}">
                            <i class="fa fa-tasks"></i>
                            {{ __('Choix multiple') }}
                        </button>
                        <button class="btn btn-primary btn_crea add-element type-question" type="button" aria-label="{{ __('Choix en liste') }}" id="insert-list_answer" title="{{ __('Ajouter une réponse à choix listé') }}">
                            <i class="fa fa-caret-down"></i>
                            {{ __('Choix en liste') }}
                        </button>
                    </div>
                    <div role="section" class="col-md-5" aria-labelledby="form_actions_crud">
                        <h3 id="form_actions_crud" class="mb-3 creator-panel__title">{{ __('Actions sur l\'élément') }}</h3>
                        <button disabled="true" aria-label="{{ __('Supprimer') }}" class="btn btn-primary btn_crea element_delete form-element-action action-delete" data-action="delete" title="{{ __('Supprimer l\'élément') }}">
                            <i class="fa fa-trash"></i>
                            {{ __('Supprimer') }}
                        </button>
                        <button disabled="true" aria-label="{{ __('Annuler la suppression') }}" class="btn btn-primary btn_crea element_undo form-element-action action-undo" data-action="undo" title="{{ __('Annuler la suppression') }}">
                            <i class="fa fa-undo"></i>
                            {{ __('Annuler la suppression') }}
                        </button>
                        <!-- Ajout d'option -->
                        <button type="button" aria-label="{{ __('Ajouter une option') }}" disabled="true" data-action="add-option" class="btn btn-primary btn_crea form-element-action element_add-option" title="{{ __('Ajouter une option') }}">
                            <i class="fa fa-check-square"></i>
                            {{ __('Ajouter une option') }}
                        </button>
                    </div>
                </div>

                <div class="d-flex bloc-creation-interface">
                    <div class="bloc-visualisation col p-0 d-flex m-0 mb-3">
                        <div class="side-tool" style="display: none">
                            <button accesskey="u" id="action-move-up" data-action="move-up" class="mb-2 btn-info form-element-action action-move-up" title="{{ __('Déplacer vers le haut') }}">
                                <i class="fas fa-sort-up" title="{{ __('Déplacer vers le haut') }}"></i>
                            </button>
                            <button accesskey="d" id="action-move-down" data-action="move-down" class="btn-info form-element-action action-move-down" title="{{ __('Déplacer vers le bas') }}">
                                <i class="fas fa-sort-down" title="{{ __('Déplacer vers le bas') }}"></i>
                            </button>
                        </div>

                        <div class="col p-0 m-0">
                            <nav>
                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                    <a class="nav-item nav-link active" id="nav-blueprint-tab" data-toggle="tab" href="#nav-blueprint" role="tab" aria-controls="nav-blueprint" aria-selected="true" title="{{ __('Voir le formulaire') }}">{{ __('Formulaire') }}</a>
                                    <a class="nav-item nav-link" id="nav-code-tab" data-toggle="tab" href="#nav-code" role="tab" aria-controls="nav-code" aria-selected="false" title="{{ __('Voir le code généré') }}">{{ __('Code généré') }}</a>
                                </div>
                            </nav>


                            <!-- panneaux -->
                            <div class="tab-content" id="nav-tabContent" role="section">

                                <!-- Code en brut (non formatté) -->
                                <textarea name="html" placeholder="html" id="raw-code" class="d-none" aria-hidden="true"></textarea>

                                <!-- panneau blueprint -->
                                <div class="tab-pane fade show active" id="nav-blueprint" role="tabpanel" aria-labelledby="nav-blueprint-tab">
                                    <div id="content-created-blueprint" class="content-panel border border-top-0 rounded-bottom p-4">@include('content.form.template')</div>
                                </div>

                                <!-- panneau code -->
                                <div class="tab-pane fade blueprint" id="nav-code" role="tabpanel" aria-labelledby="nav-code-tab">
                                    <h3 class="blueprint__titre creator-panel__title">{{ __('Liens CSS à mettre dans la balise') }} &lt;head&gt; </h3>
                                    <a href="aide#formcode" class="btn btn-primary btn_crea blueprint__btn">
                                        <i class="fa fa-question-circle"></i>
                                        {{ __("Besoin d'aide !") }}
                                    </a>
                                    <div class="copy-container w-100 d-flex flex-row-reverse">
                                        <button data-clipboard-action="copy" data-clipboard-target="#css-link" id="copy-css-link" type="button" class="btn btn-primary btn_crea" 
                                            {{ __("Copier") }}
                                        </button>
                                    </div>
                                    <!-- Lien du style à utiliser -->
                                    <xmp class="code-display" id="css-link"><link href="{{ URL::asset('css/themes/form/all-themes.css') }}" rel="stylesheet"></xmp>
                                    <h3 class="creator-panel__title mt-5 mb-4">{{ __("Voici le code brut pour votre formulaire: copiez le où vous le souhaitez, sans le modifier !") }}</h3>
                                    <div class="copy-container w-100 d-flex flex-row-reverse">
                                        <button data-clipboard-action="copy" data-clipboard-target="#formatted-code" id="copy-raw-code" type="button" class="btn btn-info" title="{{ __('Copier') }}">
                                            {{ __("Copier") }}
                                        </button>
                                    </div>
                                    <!-- Code formatté -->
                                    <pre class="prettyprint linenums:4 content-panel" id="formatted-code"></pre>
                                </div>
                            </div>
                        </div>

                        <div class="side-tool" style="display: none">
                            <button accesskey="t" class="form-element-action action-delete btn-danger  mt-3" id="action-delete" data-action="delete" title="{{ __('Supprimer l\'élément') }}">
                                <i class="fas fa-trash" title="{{ __('Supprimer l\'élément') }}"></i>
                            </button>
                        </div>
                    </div>

                    <div id="actions-interface" class="bloc-actions d-none col-3 p-0">
                        <h3 id="form_edit_element" class=" creator-panel__title action-supp-titre">{{ __('Élément sélectionné') }}</h3>
                        <div class="border bg-white rounded p-3 action-supp text-center" role="section">
                            <div class="action-supp-crea" role="section">
                                <!-- Intitulé -->
                                <div role="section" class="col action-question-text">
                                    <label for="elem-title" class="creator-panel__title">
                                        {{ __("Intitulé") }}
                                    </label>
                                    <input class="form-control form-element-action input-creator" data-action="question-text" id="elem-title" name="elem-title" placeholder="{{ __('Texte') }}" size="50" />
                                </div>  
                                <!-- Placeholder -->                      
                                <div role="section" class="col action-placeholder" style="display:none">
                                    <label for="elem-placeholder" class="creator-panel__title">
                                        {{ __('Exemple de réponse') }}
                                    </label>
                                    <input class="form-control form-element-action input-creator" data-action="placeholder" name="elem-placeholder" id="elem-placeholder" placeholder="{{ __('Exemple de réponse') }}" size="25" aria-label="{{ __('Exemple de réponse') }}" />
                                </div>
                                <!-- Référence des options -->                      
                                <div role="section" class="col action-options-name" style="display:none">
                                    <label for="elem-options-name" class="creator-panel__title">
                                        {{ __('Référence de la question') }}
                                    </label>
                                    <input class="form-control form-element-action input-creator" data-action="options-name" name="elem-options-name" id="elem-options-name" placeholder="{{ __('Référence') }}" aria-label="{{ __('Référence') }}" />
                                </div>
                                <!-- Nom des options -->                      
                                <div role="section" class="col action-option-label" style="display:none">
                                    <label for="elem-option-label" class="creator-panel__title">
                                        {{ __("Nom de l'option") }}
                                    </label>
                                    <input class="form-control form-element-action input-creator" data-action="option-label" name="elem-option-label" id="elem-option-label" placeholder="{{ __('Label') }}" aria-label="{{ __('Label') }}" />
                                </div>
                                <!-- Valeur des options -->                      
                                <div role="section" class="col action-option-value" style="display:none">
                                    <label for="elem-option-value" class="creator-panel__title">
                                        {{ __("Valeur de l'option") }}
                                    </label>
                                    <input class="form-control form-element-action input-creator" data-action="option-value" name="elem-option-value" id="elem-option-value" placeholder="{{ __('Valeur') }}" aria-label="{{ __('Valeur') }}" />
                                </div>
                                <!-- Type de réponse-->
                                <div role="section" class="col action-answer-type" style="display:none">
                                    <label for="elem-type" class="creator-panel__title">{{ __('Type de réponse attendue') }}</label>
                                    <select class="form-control form-element-action input-creator" data-action="answer-type" name="elem-type" id="elem-type">
                                        <option selected disabled>{{ __('Type') }}</option>
                                        <option value="email">{{ __('Email') }}</option>
                                        <option value="number">{{ __('Nombre') }}</option>
                                        <option value="date">{{ __('Date') }}</option>
                                        <option value="text">{{ __('Texte') }}</option>
                                    </select>
                                </div>
                                <!-- Longueur max-->
                                <div role="section" class="col action-maxlength" style="display:none">
                                    <label for="elem-length" class="creator-panel__title">
                                        {{ __('Longueur de caractères maximum') }}
                                    </label>
                                    <input class="form-control form-element-action input-creator" data-action="maxlength" name="elem-length" id="elem-length" placeholder="0 = {{ __('sans limite') }}" />
                                </div>
                            <!-- Si élément == select -->
                                <!-- Si élément == lien -->
                                <div role="section" class="col align-items-center action-url" style="display:none">
                                    <label for="elem-url" class="creator-panel__title ">
                                        {{ __('Lien associé') }} (url)
                                    </label>
                                    <input class="input-creator form-control" name="elem-url" id="elem-url" placeholder="{{ __('Entrez une URL') }}" class="form-control  form-element-action" data-action="url" aria-label="{{ __('Lien associé') }}" />
                                </div>
                                <div role="section" class="col align-items-center action-title" style="display:none">
                                    <label for="elem-url-title" class="creator-panel__title">
                                        {{ __('Indication de navigation') }}
                                    </label>
                                    <input class="input-creator form-control" name="elem-url-title" id="elem-url-title" placeholder="{{ __('Indication de navigation') }}" class="form-control  form-element-title" data-action="title" aria-label="{{ __('Indication de navigation') }}" />
                                </div>
                                <!-- Ajout d'option -->
                                <div role="section" class="col action-add-option" style="display:none">
                                    <button type="button" aria-label="{{ __('Ajouter une option') }}" data-action="add-option" class="btn btn-primary btn_crea form-element-action element_add-option">
                                        <i class="fa fa-check-square"></i>
                                        {{ __('Ajouter une option') }}
                                    </button>
                                </div>
                                <!-- Suppression d'option -->
                                <div role="section" class="col action-delete-option" style="display:none">
                                    <button type="button" aria-label="{{ __('Supprimer l\'option') }}" data-action="delete-option" class="btn btn-primary btn_crea form-element-action element_delete-option">
                                    <i class="fas fa-trash"></i>
                                        {{ __("Supprimer l'option") }}
                                    </button>
                                </div>
                            </div>
                            <!-- Si élément == select -->
                            <div role="section" class="col align-items-center action-multiple-answer"style="display:none">
                                <div class="action-multiple__cont">
                                    <input class="mr-2 form-element-action input-creator" data-action="multiple-answer" type="checkbox" name="elem-multiple-choice" id="elem-multiple-choice" role="section">
                                    <label for="elem-multiple-choice" class="creator-panel__title">
                                        {{ __('Choix multiples') }}
                                    </label>
                                </div>
                            </div>
                            <!-- Required-->
                            <div role="section" class="col p-0 action-required">
                                <div class="action-required-cont">
                                    <input class="form-element-action mr-2" data-action="required" type="checkbox" name="elem-required" id="elem-required" role="section">
                                    <label for="elem-required" class="creator-panel__title">
                                        {{ __('Réponse obligatoire') }}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        @if (Auth::check())

        <!-- Actions importantes sur le projet -->
        <div class="project-action row" role="region" aria-labelledby="form_actions">
           <div class="col-lg-8 mt-4 mb-4 project-action__btn">
                <button type="button" accesskey="c" class="btn btn-form-final btn-gris-annule btn-crea" id="btn-cancel-project" aria-label="Annuler les modifications" onclick="if(confirm('{{ __('Voulez vous vraiment quitter sans sauvegarder ?') }}')){ window.location.href = 'profile/{{ auth()->user()->id }}/view' }">
                    <div class="btn-crea__icon"><i class="fas fa-trash-alt"></i></div>
                    <p>{{ __('Annuler les modifications') }}</p>
                </button>
                <button type="submit" accesskey="s" class="btn btn-form-final btn-success btn-crea" id="btn-save-project" aria-label="Sauvegarder ce projet">
                    <div class="btn-crea__icon"><i class="fas fa-save"></i></div>
                    <p>
                        {{ __('Sauvegarder ce projet') }}
                    </p>
                </button>
           </div>
        </div>

        @endif
    </div>
</div>


<div class="alert alert-success" role="alert" style="display: none" id="alert-message">
    <span class="alert-content">
        Contenu de l'alerte
    </span>
    <button type="button" class="close ml-3" data-dismiss="alert" aria-label="{{ __('Fermer') }}" title="{{ __('Fermer') }}">
        <span aria-hidden="true">
            <i class="fa fa-times"></i>
        </span>
    </button>
</div>

<div class="modal fade import-data" tabindex="-1" role="dialog" id="importData" aria-labelledby="importDataTitle" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="importDataTitle">{{ __('Importer des données') }}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="{{ __('Fermer') }}" title="{{ __('Fermer') }}">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <input type="file" name="imported_data" id="imported_data"/>
            </div>
            <div class="modal-footer">
                <button type="button" id="import-data" class="btn btn-primary" data-dismiss="modal" title="{{ __('Importer les données') }}">{{ __('Importer mes données') }}</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">{{ __('Annuler') }}</button>
            </div>
        </div>
    </div>
</div>

@endsection

@section('pagespecificscripts')

<script type="application/javascript" src="{{ URL::asset('js/components/form.js') }}"></script>
<script type="application/javascript" src="{{ URL::asset('js/components/import_data_form.js') }}"></script>
{{-- Script PRETTIFY + skin --}}
<script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js?autorun=true&amp;skin=sunburst"></script>

@endsection