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
        <h1 class="entete__title">{{ __('Créer un formulaire accessible') }}</h1>
        <div class="entete__under"></div>
    </div>
    <div class="panel-body mb-3 interface-creation">
        <!-- Display Validation Errors -->
        @include('common.errors')

        <!-- interface d'initialisation du projet -->
        <div class="row creator-panel" role="region">

            @if (Auth::check())
            <!-- infos du projet -->
            <div class="info-panel col-lg-4" role="region" aria-labelledby="form_infos">
                {{-- <h3 id="form_infos" class="mb-3 font-weight-bold">{{ __('Informations basiques concernant le formulaire') }}</h3> --}}
                <form id="full-form-post" action="{{ route('content.store') }}" method="post">
                    @csrf
                    <input type="hidden" name="type_id" value="1">
                    <input type="hidden" name="user_id" value="{{ auth()->user()->id }}">
                    <div class="form-group" role="region">
                        <label class="creator-panel__title" for="title">{{ __('Titre du projet') }} *</label>
                        <input class="shadow-box  border-12" type="text" name="title" placeholder="{{ __('Titre') }}" class="form-control" id="title-input" maxlength="150" required>
                        <p id="chara-title-remains"></p>
                    </div>
                    <div class="form-group" role="region">
                        <label class="creator-panel__title" for="desc-input">{{ __('Description du projet') }} *</label>
                        <textarea class="shadow-box border-12" type="text" name="description" placeholder="{{ __('Description') }}" class="form-control" id="desc-input" rows="3" maxlength="300"></textarea>
                        <p id="chara-desc-remains"></p>
                    </div>
                </form>
            </div>
            @endif

            <!-- actions d'initialisation -->
            <div class="actions-panel @if (Auth::check()) col-lg-5 col-md-6 @else col-lg-5 col-md-6 @endif" role="region" aria-labelledby="form_tools">
                <h2 id="form_tools" class="mb-3 creator-panel__title creator-panel__title">{{ __("Outils d'aide à la création") }}</h2>
                <div class="actions-panel__btn" role="complementary">
                    <button type="button" class="btn btn-form-final btn-primary btn-crea" data-toggle="modal" data-target="#importData" title="{{ __("Importer un tableau via le format CSV ou JSON") }}">
                        <div class="btn-crea__icon">
                            <i class="fa fa-file-upload"></i>
                        </div>
                        <p>{{ __('Importer des données') }}</p>
                    </button>
                    
                    <button type="button" class="btn btn-form-final btn-primary btn-crea" id="generate-example" title="{{ __("Créer un tableau exemple") }}">
                        <div class="btn-crea__icon">
                            <i class="fa fa-sync"></i>
                            {{-- <i class="fa fa-file-code"></i> --}}
                        </div>
                        <p>{{ __('Générer un exemple') }}</p>
                    </button>
                </div>
                <h2 id="form_help" class="mt-5 creator-panel__title">{{ __("Aide") }}</h2>
                <div class="help-panel">
                    <a href="aide#importForm" title="{{ __('Accéder au guide d\'importation des données') }}">{{ __("Guide d'importation des données") }}</a>
                    <a href="aide#formCreator" title="{{ __('Accéder au guide d\'utilisation du créateur') }}">{{ __("Guide d'utilisation du créateur") }}</a>
                </div>
            </div>

            <!-- templates -->
            <div class="template-panel @if (Auth::check()) col-lg-3 col-md-6 @else col-lg-4 col-md-6 @endif justify-content-center align-items-center" role="region" aria-labelledby="form_themes">
                {{-- <h2 id="form_themes" class="mb-3 creator-panel__title">{{ __('Thème du formulaire') }}</h2>
                <div role="complementary" tabindex="0">
                    <fieldset class="template-panel__choice shadow-box border-12 theme-switch" >
                    <legend class="d-none">{{ __('Modifier le thème du formulaire') }}</legend> --}}
                <h3 id="form_themes" class="mb-3 creator-panel__title">{{ __('Thème du formulaire') }}</h3>
                <div class="template-panel__choice shadow-box border-12 theme-switch" role="complementary" tabindex="0">
                    <div>
                        <div>
                            <input type="radio" value="blue" id="radio01" name="theme" checked>
                            <label for="radio01">{{ __('Bleu') }}</label>
                        </div>
                        <div>
                            <input type="radio" value="white" id="radio02" name="theme">
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
                    </fieldset>
                </div>
            </div>
        </div>

        <!-- interface d'interaction avec le projet -->
        <div class="row creator-interfaces d-flex justify-content-around mt-5" role="section" aria-label="{{ __('Actions sur l\'élement') }}">

            <div id="content-interface" class="content-interface col shadow-box border-12 bg-white" role="section" aria-label="{{ __('Actions sur l\'élement') }}">
                <!-- navigation entre les panneaux -->

                <div class="main-info-form row mx-0 px-0" role="region">
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
                        <h2 class="creator-panel__title">{{ __('Option du formulaire') }}</h2>
                        <label class="reset-button" for="reset-button" class="d-block">
                            <input type="checkbox" class="add-element type-special check-box" value="" id="reset-button" name="reset-button">
                            <span class="ml-3">{{ __('Bouton de réinitialisation') }}</span>
                        </label>
                    </div>
                </div>

                <div role="section" class="row form_actions_element form-btns static-buttons-creator" aria-labelledby="form_actions_element">
                    <div role="section" aria-labelledby="form_add_static" class="btns_form w-100">
                        <div class="btns_form__child mb-3-lg btns_form--first">
                            <div class="btns_form__sub-child">
                                <button class="btn btn-primary add-element type-layout" type="button" aria-label="{{ __('Nouvelle séparation') }}" id="insert-horizontal_rule" role="listitem" title="{{ __("Ajouter une séparation") }}" data-toggle="tooltip" data-placement="bottom">
                                    <i class="fa fa-grip-lines"></i>
                                </button>
                                <button class="btn btn-primary add-element type-layout" type="button" aria-label="{{ __('Titre') }}" id="insert-title" role="listitem" title="{{ __("Ajouter un titre") }}" data-toggle="tooltip" data-placement="bottom">
                                    <i class="fa fa-heading"></i>
                                </button>
                                <button class="btn btn-primary add-element type-layout" type="button" aria-label="{{ __('Paragraphe') }}" id="insert-paragraph" role="listitem" title="{{ __("Ajouter un paragraphe") }}" data-toggle="tooltip" data-placement="bottom">
                                    <i class="fa fa-paragraph"></i>
                                </button>
                                <button class="btn btn-primary add-element type-layout" type="button" aria-label="{{ __('Lien') }}" id="insert-link" role="listitem" title="{{ __("Ajouter un lien") }}" data-toggle="tooltip" data-placement="bottom">
                                    <i class="fa fa-link"></i>
                                </button>
                                <button class="btn btn-primary add-element type-layout" type="button" aria-label="{{ __('Liste numérotée') }}"  id="insert-ordered_list" role="listitem" title="{{ __("Ajouter une liste numérotée") }}" data-toggle="tooltip" data-placement="bottom">
                                    <i class="fa fa-list-ol"></i>
                                </button>
                                <button class="btn btn-primary add-element type-layout" type="button" aria-label="{{ __('Liste à puces') }}" id="insert-unordered_list" role="listitem" title="{{ __("Ajouter une liste à puces") }}" data-toggle="tooltip" data-placement="bottom">
                                    <i class="fa fa-list-ul"></i>
                                </button>
                            </div>
                            <div class="btns_form__sub-child">
                                <div class="btn-separator"></div>
                                <button class="btn btn-primary text-formatting" type="button" aria-label=" {{ __('Gras') }}" id="element-bold" role="listitem" title="{{ __("Mettre le texte en gras") }}" data-toggle="tooltip" data-placement="bottom">
                                    <i class="fa fa-bold"></i>
                                </button>
                                <button class="btn btn-primary text-formatting" type="button" aria-label="{{ __('Italique') }}" id="element-italic" role="listitem" title="{{ __("Mettre le texte en italique") }}" data-toggle="tooltip" data-placement="bottom">
                                    <i class="fa fa-italic"></i>
                                </button>
                                <button class="btn btn-primary text-formatting" type="button" aria-label="{{ __('Souligné') }}" id="element-underline" role="listitem" title="{{ __("Mettre le texte en souligné") }}" data-toggle="tooltip" data-placement="bottom">
                                    <i class="fa fa-underline"></i>
                                </button>
                                <button class="btn btn-primary text-formatting" type="button" aria-label="{{ __('Aligner à gauche') }}" id="justify-left" role="listitem" title="{{ __("Mettre le texte à gauche") }}" data-toggle="tooltip" data-placement="bottom">
                                    <i class="fa fa-align-left"></i>
                                </button>
                                <button class="btn btn-primary text-formatting" type="button" aria-label="{{ __('Centrer') }}" id="justify-center" role="listitem" title="{{ __("Mettre le texte au centre") }}" data-toggle="tooltip" data-placement="bottom">
                                    <i class="fa fa-align-center"></i>
                                </button>
                                <button class="btn btn-primary text-formatting" type="button" aria-label="{{ __('Justifier') }}" id="justify-full" role="listitem" title="{{ __("Justifier le texte") }}" data-toggle="tooltip" data-placement="bottom">
                                    <i class="fa fa-align-justify"></i>
                                </button>
                            </div>
                        </div>
                        <div class="btns_form__child">
                            <div class="btn-separator d-none-lg"></div>
                            <button class="btn btn-primary add-element type-question" type="button" aria-label="{{ __('Réponse libre courte') }}" id="insert-short_answer" title="{{ __('Ajouter une réponse libre courte') }}" data-toggle="tooltip" data-placement="bottom">
                                <i class="fa fa-comment"></i>
                            </button>
                            <button class="btn btn-primary add-element type-question" type="button" aria-label="{{ __('Réponse libre longue') }}" id="insert-long_answer" title="{{ __('Ajouter une réponse libre longue') }}" data-toggle="tooltip" data-placement="bottom">
                                <i class="fa fa-comment-alt"></i>
                            </button>
                            <button class="btn btn-primary add-element type-question" type="button" aria-label="{{ __('Réponse Oui/Non') }}" id="insert-binary_answer" title="{{ __('Ajouter une réponse binaire') }}" data-toggle="tooltip" data-placement="bottom">
                                <i class="fa fa-check-square"></i>
                            </button>
                            <button class="btn btn-primary add-element type-question" type="button" aria-label="{{ __('Choix unique') }}"  id="insert-one_answer" title="{{ __('Ajouter une réponse à choix unique') }}" data-toggle="tooltip" data-placement="bottom">
                                <i class="fa fa-check-circle"></i>
                            </button>
                            <button class="btn btn-primary add-element type-question" type="button" aria-label="{{ __('Choix multiple') }}" id="insert-many_answer" title="{{ __('Ajouter une réponse à choix multiple') }}" data-toggle="tooltip" data-placement="bottom">
                                <i class="fa fa-tasks"></i>
                            </button>
                            <button class="btn btn-primary add-element type-question" type="button" aria-label="{{ __('Choix en liste') }}" id="insert-list_answer" title="{{ __('Ajouter une réponse à choix listé') }}" data-toggle="tooltip" data-placement="bottom">
                                <i class="fa fa-caret-down"></i>
                            </button>
                            <div class="btn-separator"></div>
                            <button disabled="true" aria-label="{{ __('Supprimer') }}" class="btn btn-primary element_delete form-element-action action-delete" data-action="delete" title="{{ __('Supprimer l\'élément') }}" data-toggle="tooltip" data-placement="bottom">
                                <i class="fa fa-trash"></i>
                            </button>
                            <button disabled="true" aria-label="{{ __('Annuler la suppression') }}" class="btn btn-primary element_undo form-element-action action-undo" data-action="undo" title="{{ __('Annuler la suppression') }}" data-toggle="tooltip" data-placement="bottom">
                                <i class="fa fa-undo"></i>
                            </button>
                            <!-- Ajout d'option -->
                            <button type="button" aria-label="{{ __('Ajouter une option') }}" disabled="true" data-action="add-option" class="btn btn-primary text-white form-element-action element_add-option" title="{{ __('Ajouter une option') }}" data-toggle="tooltip" data-placement="bottom">
                                <i class="fa fa-check-square"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="bloc-creation-interface crea_form_inter">
                    <div class="bloc-visualisation col mb-3 p-0">
                        <div class="side-tool" style="display: none">
                            <button id="action-move-up" data-action="move-up" class="mb-2 btn-info form-element-action action-move-up" title="{{ __('Déplacer vers le haut') }}">
                                <i class="fa fa-sort-up" title="{{ __('Déplacer vers le haut') }}"></i>
                            </button>
                            <button id="action-move-down" data-action="move-down" class="btn-info form-element-action action-move-down" title="{{ __('Déplacer vers le bas') }}">
                                <i class="fa fa-sort-down" title="{{ __('Déplacer vers le bas') }}"></i>
                            </button>
                        </div>

                        <div class="col p-0 m-0">
                            <nav>
                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                    <a class="nav-item nav-link active" id="nav-blueprint-tab" data-toggle="tab" href="#nav-blueprint" role="tab" aria-controls="nav-blueprint" aria-selected="true" title="{{ __('Voir le formulaire') }}"><i class="fa fa-eye mr-3"></i>{{ __('Formulaire') }}</a>
                                    <a class="nav-item nav-link" id="nav-code-tab" data-toggle="tab" href="#nav-code" role="tab" aria-controls="nav-code" aria-selected="false" title="{{ __('Voir le code généré') }}"><i class="fa fa-code mr-3"></i>{{ __('Code généré') }}</a>
                                </div>
                            </nav>


                            <!-- panneaux -->
                            <div class="tab-content" id="nav-tabContent" role="section">

                                <!-- Code en brut (non formatté) -->
                                <label for="raw-code" class="d-none">Code html</label>
                                <textarea name="html" placeholder="html" id="raw-code" class="d-none" aria-hidden="true"></textarea>

                                <!-- panneau blueprint -->
                                <div class="tab-pane fade show active" id="nav-blueprint" role="tabpanel" aria-labelledby="nav-blueprint-tab">
                                    <div id="content-created-blueprint" class="content-panel border border-top-0 rounded-bottom p-4">@include('content.form.template')</div>
                                </div>

                                <!-- panneau code -->
                                <div class="tab-pane fade blueprint" id="nav-code" role="tabpanel" aria-labelledby="nav-code-tab">

                                    <h3 class="blueprint__titre creator-panel__title">{{ __('Liens CSS à mettre dans la balise') }} &lt;head&gt; </h3>
                                    <a href="aide#useCode" class="btn btn-primary btn_crea" title="{{ __('Voir la page d\'aide') }}">
                                    
                                        <i class="fa fa-question-circle"></i>
                                        {{ __("Besoin d'aide !") }}
                                    </a>
                                    <div class="copy-container w-100 d-flex flex-row-reverse">
                                        <button data-clipboard-action="copy" data-clipboard-target="#css-link" id="copy-css-link" type="button" class="btn btn-primary btn_crea" title="{{ __('Copier') }}">
                                            {{ __("Copier le lien CSS") }}
                                        </button>
                                    </div>
                                    <!-- Lien du style à utiliser -->
                                    <xmp class="code-display" id="css-link"><link href="{{ URL::asset('css/themes/form/all-themes.css') }}" rel="stylesheet"></xmp>
                                    <h3 class="creator-panel__title mt-5 mb-4">{{ __("Voici le code brut pour votre formulaire: copiez le où vous le souhaitez, sans le modifier !") }}</h3>
                                    <div class="copy-container w-100 d-flex flex-row-reverse">
                                        <button data-clipboard-action="copy" data-clipboard-target="#formatted-code" id="copy-raw-code" type="button" class="btn btn-primary btn_crea" title="{{ __('Copier') }}">
                                            {{ __("Copier le code généré") }}
                                        </button>
                                    </div>
                                    <!-- Code formatté -->
                                    <pre class="prettyprint content-panel" id="formatted-code"></pre>
                                </div>
                            </div>
                        </div>
                        <div class="side-tool" style="display: none">
                            <button class="form-element-action action-delete btn-danger  mt-3" id="action-delete" data-action="delete" title="{{ __('Supprimer l\'élément') }}">
                                <i class="fa fa-trash" title="{{ __('Supprimer l\'élément') }}"></i>
                            </button>
                        </div>
                    </div>

                    <div id="actions-interface" class="form-inter bloc-actions d-none col-3 p-0">
                        <div class="border bg-white rounded p-3 action-supp" role="section" id="actions-interface-bloc" >
                            <h3 id="form_edit_element" class=" creator-panel__title action-supp-titre">{{ __('Élément sélectionné') }}</h3>
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
                                    <i class="fa fa-trash"></i>
                                        {{ __("Supprimer l'option") }}
                                    </button>
                                </div>
                            </div>
                            <!-- Si élément == select -->
                            <div role="section" class=" align-items-center action-multiple-answer"style="display:none">
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
        <div class="project-action row m-0" role="region" aria-labelledby="form_actions">
           <div class="col-lg-8 mt-4 mb-4 mx-auto project-action__btn p-0">
                {{-- <button type="button" class="btn btn-form-final btn-gris-annule btn-crea" id="btn-cancel-project" aria-label="Annuler les modifications" onclick="if(confirm('{{ __('Voulez vous vraiment quitter sans sauvegarder ?') }}')){ window.location.href = 'profile/{{ auth()->user()->id }}/view' }">
                    <div class="btn-crea__icon"><i class="fa fa-trash-alt"></i></div>
                    <p>{{ __('Annuler les modifications') }}</p>
                </button> --}}
                <button type="submit" class="btn btn-form-final btn-success btn-crea ml-2" id="btn-save-project" title="{{ __('Sauvegarder ce projet') }}">
                    <div class="btn-crea__icon"><i class="fa fa-save"></i></div>
                    <p>
                        {{ __('Sauvegarder ce projet') }}
                    </p>
                </button>
           </div>
        </div>

        @endif
    </div>
</div>

<div class="alert alert-success" aria-live="assertive" aria-atomic="true" role="alert" style="display: none" id="alert-message">
    <span class="alert-content">
        Contenu de l'alerte
    </span>
    <button type="button" class="close ml-3" data-dismiss="alert" aria-label="{{ __('Fermer') }}" title="{{ __('Fermer') }}">
        <span aria-hidden="true">
            <i class="fa fa-times"></i>
        </span>
    </button>
</div>

<div class="modal fade import-data" aria-live="assertive" aria-atomic="true" tabindex="-1" role="dialog" id="importData" aria-labelledby="importDataTitle" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="importDataTitle">{{ __('Importer des données') }}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="{{ __('Fermer') }}" title="{{ __('Fermer') }}">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <label for="imported_data">{{ __('Importer des données via un fichier CSV ou JSON : attention, les autres formats ne sont pas acceptés.') }}</label>
                <input type="file" name="imported_data" id="imported_data"/>
            </div>
            <div class="modal-footer">
                {{-- <button type="button" id="import-data" class="btn btn-primary" data-dismiss="modal" title="{{ __('Importer mes données') }}">{{ __('Importer mes données') }}</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal" title="{{ __('Annuler') }}">{{ __('Annuler') }}</button> --}}
                <button type="button" class="btn btn-form-final btn-primary btn-crea" id="import-data" data-dismiss="modal" title="{{ __('Importer mes données') }}">
                    <div class="btn-crea__icon">
                        <i class="fa fa-file-upload"></i>
                    </div>
                    <p>{{ __('Importer mes données') }}</p>
                </button>
                <button type="button" class="btn btn-form-final btn-gris-annule btn-crea" data-dismiss="modal" title="{{ __('Annuler') }}" class="btn btn-form-final btn-gris-annule btn-crea">
                    <div class="btn-crea__icon">
                        <i class="fa fa-trash-alt"></i>
                    </div>
                    <p>{{ __('Annuler') }}</p>
                </button>
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