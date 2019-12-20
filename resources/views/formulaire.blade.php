
@extends('layouts/app')

@section('titre') {{ __('Formulaire - EasyToC') }} @endsection

@section('pagespecificstyles')
    <link href="{{ URL::asset('css/themes/all-themes.css') }}" rel="stylesheet">
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
                                    <input type="text" name="title" placeholder="Titre du projet" class="form-control" id="title-input" maxlength="150"  value="{{ old('title') }}">
                                    <p id="chara-title-remains"></p>
                                </div>
                                <div class="form-group" role="region">
                                    <label for="desc-input">{{ __('Description du projet') }}</label>
                                    <textarea type="text" name="description" placeholder="Description du projet" class="form-control" id="desc-input" rows="2"
                                        maxlength="300"></textarea>
                                    <p id="chara-desc-remains"></p>
                                </div>
                            </form>
                        </div>
                        @endif

                        <!-- actions d'initialisation -->
                        <div class="actions-panel col-3 flex-column justify-content-around align-items-center"
                            role="region" aria-labelledby="form_tools">
                            <h3 id="form_tools" class="mb-3 font-weight-bold">{{ __("Outils d'aide à la création") }}</h3>
                            <div class="d-flex justify-content-around align-items-center" role="complementary">
                                <button type="button" class="btn btn-dark">{{ __('Importer des données') }}</button>
                                <button type="button" class="btn btn-dark">{{ __('Générer un exemple') }}</button>
                            </div>
                            <h3 id="form_help" class="mt-5 font-weight-bold">{{ __("Aide") }}</h3>
                            <div class="d-flex flex-column">
                                <a href="aide#data">{{ __("Guide d'importation des données") }}</a>
                                <a href="aide#creator">{{ __("Guide d'utilisation du créateur") }}</a>
                            </div>
                        </div>

                        <!-- templates -->
                        <div class="template-panel col-3 justify-content-center align-items-center" role="region"
                            aria-labelledby="form_themes">
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

                        <div id="content-interface" class="col border bg-white rounded p-3" role="section"
                            aria-label="Actions sur l'élement">
                            <!-- navigation entre les panneaux -->

                            <div class="d-flex justify-content-around mb-2" role="region">
                                <div class="col p-0" role="region">
                                    <label for="form-creator-title">{{ __('Titre du formulaire') }}</label>
                                    <input name="form-creator-title" id="form-creator-title" placeholder="Titre du formulaire"
                                        class="form-control" size="30" value="Titre du formulaire" />
                                </div>
                                <div class="col p-0 ml-2" role="region">
                                    <label for="form-creator-link">{{ __('Lien de traitement des données') }}</label>
                                    <input name="form-creator-link" id="form-creator-link" placeholder="Lien du formulaire"
                                        class="form-control" size="30" />
                                </div>
                                <div class="col-2 d-flex align-items-center justify-content-center" role="region">
                                    <input type="checkbox" class="add-element type-special" value="" id="reset-button"
                                        name="reset-button">
                                    <label for="reset-button" class="ml-3">{{ __('Option de réinitialisation') }}</label>
                                </div>
                                <div class="col-2 d-flex flex-column align-items-center justify-content-center" role="region">
                                    <label for="form-creator-method" class="mr-3">{{ __('Méthode') }}</label>
                                    <select name="form-creator-method" id="form-creator-method">
                                        <option value="get">GET</option>
                                        <option value="post">POST</option>
                                    </select>
                                </div>
                            </div>

                                <div role="section" class="row px-4 mt-5" aria-labelledby="form_actions_element">
                                    <!--
                                    <div role="section" class="col" aria-label="Actions sur l'élement">
                                        <h3 id="form_actions_element" class="mb-3 font-weight-bold">{{ __("Actions sur l'élement") }}</h3>
                                        <input class="btn btn-light" type="button" aria-label="Couper" value="Couper"
                                            id="element_cut" role="listitem">
                                        <input class="btn btn-light" type="button" aria-label="Copier" value="Copier"
                                            id="element_copy" role="listitem">
                                        <input class="btn btn-light" type="button" aria-label="Coller" value="Coller"
                                            id="element_paste" role="listitem">
                                        <input class="btn btn-light element_delete" type="button" aria-label="Supprimer l'élement"
                                            value="Supprimer l'élement" role="listitem">
                                        <input class="btn btn-light" type="button" aria-label="Annuler" value="Annuler"
                                            id="element_undo" role="listitem">
                                        <input class="btn btn-light" type="button" aria-label="Rétablir" value="Rétablir"
                                            id="element_redo" role="listitem">
                                    </div>
                                    -->
                                    <div role="section" class="col" aria-labelledby="form_actions_text">
                                        <h3 id="form_actions_text" class="mb-3 font-weight-bold">{{ __('Mise en forme du texte') }}</h3>
                                        <input class="btn btn-light" type="button" aria-label="Gras" value="Gras" id="element_bold"
                                            role="listitem">
                                        <input class="btn btn-light" type="button" aria-label="Italique" value="Italique"
                                            id="element_italic" role="listitem">
                                        <input class="btn btn-light" type="button" aria-label="Souligné" value="Souligné"
                                            id="element_underline" role="listitem">
                                        <input class="btn btn-light" type="button" aria-label="Aligner à gauche"
                                            value="Aligner à gauche" id="justify-left" role="listitem">
                                        <input class="btn btn-light" type="button" aria-label="Aligner à droite"
                                            value="Aligner à droite" id="justify-right" role="listitem">
                                        <input class="btn btn-light" type="button" aria-label="Centrer" value="Centrer"
                                            id="justify-center" role="listitem">
                                        <input class="btn btn-light" type="button" aria-label="Justifier" value="Justifier"
                                            id="justify-full" role="listitem">
                                    </div>
                                </div>
                                <div role="section" class="row px-4 mt-5" aria-labelledby="form_actions_element">
                                    <div role="section" class="col" aria-labelledby="form_add_question">
                                        <h3 id="form_add_question" class="mb-3 font-weight-bold">{{ __('Ajouter une question') }}</h3>
                                        <input class="btn btn-light add-element type-question" type="button"
                                            aria-label="Réponse libre courte" value="Réponse libre courte" id="insert-short_answer">
                                        <input class="btn btn-light add-element type-question" type="button"
                                            aria-label="Réponse libre longue" value="Réponse libre longue" id="insert-long_answer">
                                        <input class="btn btn-light add-element type-question" type="button"
                                            aria-label="Réponse Oui/Non" value="Réponse Oui/Non" id="insert-binary_answer">
                                        <input class="btn btn-light add-element type-question" type="button" aria-label="Choix unique"
                                            value="Choix unique" id="insert-one_answer">
                                        <input class="btn btn-light add-element type-question" type="button" aria-label="Choix multiple"
                                            value="Choix multiple" id="insert-many_answer">
                                        <input class="btn btn-light add-element type-question" type="button" aria-label="Choix en liste"
                                            value="Choix en liste" id="insert-list_answer">
                                    </div>
                                    <div role="section" class="col" aria-labelledby="form_add_static">
                                        <h3 id="form_add_static" class="mb-3 font-weight-bold">{{ __('Ajouter un élément statique') }}</h3>
                                        <input class="btn btn-light add-element type-layout" type="button" aria-label="Nouvelle section"
                                            value="Nouvelle section" id="insert-horizontal_rule" role="listitem">
                                        <input class="btn btn-light add-element type-layout" type="button" aria-label="Titre"
                                            value="Titre" id="insert-title" role="listitem">
                                        <input class="btn btn-light add-element type-layout" type="button" aria-label="Paragraphe"
                                            value="Paragraphe" id="insert-paragraph" role="listitem">
                                        <input class="btn btn-light add-element type-layout" type="button" aria-label="Lien"
                                            value="Lien" id="insert-link" role="listitem">
                                        <input class="btn btn-light add-element type-layout" type="button" aria-label="Liste numérotée"
                                            value="Liste numérotée" id="insert-ordered_list" role="listitem">
                                        <input class="btn btn-light add-element type-layout" type="button" aria-label="Liste à puces"
                                            value="Liste à puces" id="insert-unordered_list" role="listitem">
                                    </div>
                                </div>
                            

                        <div class="row d-flex m-0 mb-3">

                            <div class="side-tool" style="display: none">
                                <button id="action-move-up" data-action="move-up" class="mb-2 form-element-action action-move-up" title="Déplacer vers le haut">
                                    <i class="fas fa-caret-up"></i>🔺
                                </button>
                                <button id="action-move-down" data-action="move-down" class="form-element-action action-move-down" title="Déplacer vers le bas">
                                    <i class="fas fa-sort-down"></i>🔻
                                </button>
                            </div>

                            <div class="col p-0 m-0">
                                <nav class="mt-5">
                                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                        <a class="nav-item nav-link active" id="nav-blueprint-tab" data-toggle="tab"
                                            href="#nav-blueprint" role="tab" aria-controls="nav-blueprint"
                                            aria-selected="true">{{ __('Blueprint') }}</a>
                                        <!--
                                            <a class="nav-item nav-link" id="nav-preview-tab" data-toggle="tab" href="#nav-preview" role="tab"
                                                aria-controls="nav-preview" aria-selected="false">Preview</a>
                                            -->
                                        <a class="nav-item nav-link" id="nav-code-tab" data-toggle="tab" href="#nav-code" role="tab"
                                            aria-controls="nav-code" aria-selected="false">{{ __('Code') }}</a>
                                    </div>
                                </nav>
                            

                                <!-- panneaux -->
                                <div class="tab-content" id="nav-tabContent" role="section">
                                    
                                    <!-- Code en brut (non formatté) -->
                                    <textarea type="text" name="html" placeholder="html" id="raw-code" class="d-none" aria-hidden="true"></textarea> 

                                    <!-- panneau blueprint -->
                                    <div class="tab-pane fade show active" id="nav-blueprint" role="tabpanel"
                                        aria-labelledby="nav-blueprint-tab">
                                        <div id="content-created-blueprint"
                                            class="content-panel border border-top-0 rounded-bottom p-4">
                                        </div>
                                    </div>

                                    <!-- panneau code -->
                                    <div class="tab-pane fade" id="nav-code" role="tabpanel" aria-labelledby="nav-code-tab">
                                        <h3>Liens CSS à mettre dans la balise &lt;head&gt; </h3>
                                        <a href="aide#use">Besoin d'aide !</a>
                                        <div class="copy-container w-100 d-flex flex-row-reverse"><button data-clipboard-action="copy" data-clipboard-target="#css-link" id="copy-css-link">Copier</button></div>
                                        <xmp class="code-display" id="css-link"><link href="{{ URL::asset('css/themes/all-themes.css') }}" rel="stylesheet"></xmp>
                                        <h3>Voici le code brut pour votre formulaire: copiez le où vous le souhaitez, mais ne le modifiez pas !</h3>
                                        <div class="copy-container w-100 d-flex flex-row-reverse"><button data-clipboard-action="copy" data-clipboard-target="#formatted-code" id="copy-raw-code">Copier</button></div>
                                        <pre class="prettyprint content-panel" id="formatted-code"></pre> <!-- Code formatté -->
                                    </div>
                                </div>
                            </div>

                            <div class="side-tool" style="display: none">
                                <button class="form-element-action action-delete" id="action-delete" data-action="delete" title="Supprimer l'élement">
                                    <i class="fas fa-trash-alt"></i>🗑
                                </button>
                            </div>
                        </div>
                    
                    
                        <div id="actions-interface" class="border bg-white rounded p-3" style="display: none" role="section" >
                            <h3 id="form_edit_element" class="mb-3 font-weight-bold">{{ __('Élément sélectionné') }}</h3>
                                <div class="d-flex" role="section">     
                                    <div role="section" class="form-element-action action-change-text" data-action="change-text" >
                                        <label for="elem-title">{{ __("Intitulé de l'élément sélectionné") }}
                                            <input id="elem-title" name="elem-title" placeholder="Texte" class="form-control"
                                            size="50" />
                                        </label>
                                    </div>
                                    <div role="section" class="form-element-action action-answer-type">
                                        <label for="elem-type">{{ __('Type de réponse attendue') }}</label>
                                        <select name="elem-type" id="elem-type" class="form-control">
                                            <option selected disabled>{{ __('Type') }}</option>
                                            <option value="email">{{ __('Email') }}</option>
                                            <option value="number">{{ __('Nombre') }}</option>
                                            <option value="date">{{ __('Date') }}</option>
                                            <option value="text">{{ __('Texte') }}</option>
                                        </select>
                                    </div>
                                    <div class="d-flex align-items-center form-element-action action-required" role="section">
                                        <input type="checkbox" name="elem-required" id="elem-required" class="mr-2" role="section">
                                        <label for="elem-required">{{ __('Réponse obligatoire') }}</label>
                                    </div>
                                    <div class="form-element-action action-placeholder" role="section">
                                            <label for="elem-placeholder">{{ __('Exemple de réponse') }}
                                            <input name="elem-placeholder" id="elem-placeholder" placeholder="Ceci est le placeholder" class="form-control"
                                                size="25" aria-label="Exemple de réponse" />
                                            </label>
                                    </div>
                                    <div class="form-element-action action-maxlength" role="section">
                                        <label for="elem-length">
                                            {{ __('Longueur de caractères maximum') }}
                                            <input type="number" name="elem-length" id="elem-length" placeholder="Longueur" class="form-control"
                                                size="2" />
                                        </label>
                                    </div>
                                    <!-- Si élément tag == select -->
                                    <div class="d-flex align-items-center form-element-action action-required" role="section">
                                        <input type="checkbox" name="elem-multiple-choice" id="elem-multiple-choice" class="mr-2" role="section">
                                        <label for="elem-multiple-choice">{{ __('Choix multiples') }}</label>
                                    </div>
                                    <div class="form-element-action action-delete" data-action="delete" role="section">
                                        <button aria-label="Supprimer" class="element_delete">{{ __('Supprimer') }}</button>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    @if (Auth::check())

                    <!-- Actions importantes sur le projet -->
                    <div class="project-action col-8 mx-auto my-3 d-flex justify-content-between align-items-center" role="region"
                        aria-labelledby="form_actions">
                        <button type="button" class="btn btn-danger" id="btn-cancel-project" aria-label="Annuler les modifications" onclick="if(confirm('{{ __('Voulez vous vraiment quitter sans sauvegarder ?') }}')){ window.location.href = 'profile/{{ auth()->user()->id }}/view' }">{{ __('Annuler les
                            modifications') }}</button>
                        <button type="submit" class="btn btn-success" id="btn-save-project" aria-label="Sauvegarder ce projet">{{ __('Sauvegarder ce projet') }}</button>
                    </div>
               
                    @endif
            </div>
   </div>
   
   

@endsection

@section('pagespecificscripts')
    <script type="application/javascript" src="{{ URL::asset('js/components/form.js') }}"></script>
    {{-- Script PRETTIFY + skin --}}
    <script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js?autorun=true&amp;skin=sunburst"></script>
@endsection
