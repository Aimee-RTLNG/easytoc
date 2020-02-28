@extends('layouts.app')

@section('titre') {{ __('Tableau') }} - EasyToC @endsection

@section('pagespecificstyles')
    <link href="{{ URL::asset('css/themes/table/all-themes.css') }}" rel="stylesheet">
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
        <h2 class="entete__title">{{ __('Créer un tableau') }}</h2>
        <div class="entete__under"></div>
    </div>
    <div class="panel-body mb-3">
        <!-- Display Validation Errors -->
        @include('common.errors')

        <!-- interface d'initialisation du projet -->
        <div class="row creator-panel" role="region" aria-labelledby="interface-heading">

            @if (Auth::check())
            <!-- infos du projet -->
            <div class="info-panel col-lg-4" role="region" aria-labelledby="table_infos">
                {{-- <h3 id="table_infos" class="mb-3 font-weight-bold">{{ __('Informations basiques concernant le tableau') }}</h3> --}}
                <form id="full-table-post" action="{{ route('content.store') }}" method="post" autocomplete="off">
                    @csrf
                    <input type="hidden" name="type_id" value="2">
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
            <div class="actions-panel @if (Auth::check()) col-lg-5 col-md-6 @else col-lg-5 col-md-6 @endif" role="region" aria-labelledby="table_tools">
                <h3 id="table_tools" class="mb-3 creator-panel__title creator-panel__title">{{ __("Outils d'aide à la création") }}</h3>
                <div class="actions-panel__btn" role="complementary">
                    <button type="button" class="btn btn-form-final btn-primary btn-crea" data-toggle="modal" data-target="#importData" title="{{ __('Importer des données') }}">
                        <div class="btn-crea__icon">
                            <i class="fas fa-file-upload"></i>
                        </div>
                        <p>{{ __('Importer des données') }}</p>
                    </button>
                    
                    <button type="button" class="btn btn-form-final btn-primary btn-crea" id="generate-example" title="{{ __('Générer un exemple') }}">
                        <div class="btn-crea__icon">
                            <i class="fas fa-sync"></i>
                            {{-- <i class="fas fa-file-code"></i> --}}
                        </div>
                        <p>{{ __('Générer un exemple') }}</p>
                    </button>
                </div>
                <h3 id="table_help" class="mt-5 creator-panel__title">{{ __("Aide") }}</h3>
                <div class="help-panel">
                    <a href="aide#tabledata" title="{{ __('Guide d\'importation des données') }}">{{ __("Guide d'importation des données") }}</a>
                    <a href="aide#tablecreator" title="{{ __('Guide d\'utilisation du créateur') }}">{{ __("Guide d'utilisation du créateur") }}</a>
                </div>
            </div>

            <!-- templates -->
            <div class="template-panel @if (Auth::check()) col-lg-3 col-md-6 @else col-lg-4 col-md-6 @endif justify-content-center align-items-center" role="region" aria-labelledby="form_themes">
                <h3 id="table_themes" class="mb-3 creator-panel__title">{{ __('Thème du tableau') }}</h3>
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
                </div>
            </div>

        </div>

        <!-- interface d'interaction avec le projet -->
        <div class="row creator-interfaces d-flex justify-content-around mt-5" role="section" aria-label="Actions sur l'élement">

            <div id="content-interface" class="col shadow-box border-12 bg-white content-interface" role="section" aria-label="Actions sur l'élement">
                <!-- navigation entre les panneaux -->

                <div class="row mb-4" role="region">
                    <div class="col-md-6" role="region">
                        <label class="creator-panel__title" for="table-creator-title">{{ __('Titre du tableau') }}</label>
                        <input name="table-creator-title" id="table-creator-title" placeholder="{{ __('Titre') }}" class="form-control input-creator" size="30"/>
                    </div>
                    <div class="col-md-6 mt-4-md" role="region">
                        <label class="creator-panel__caption creator-panel__title" for="table-creator-caption">{{ __('Légende du tableau') }}</label>
                        <input class="form-control input-creator" type="text" name="table-creator-caption" id="table-creator-caption" placeholder="{{ __('Légende') }}" size="250"/>
                    </div>
                </div>

                <div class="row mb-4" role="region">
                    <div class="col-sm-6 col-md-3" role="region">
                        {{-- NB LIGNES --}}
                        <label class="creator-panel__row_nb creator-panel__title" for="table-row-nb">{{ __('Nombre de lignes') }}</label>
                        <input class="form-control input-creator" type="number" name="table-row-nb" id="table-row-nb" size="3" value="2" min="2"/>
                    </div>
                    <div class="col-sm-6 col-md-3" role="region">
                        {{-- NB COLONNES --}}
                        <label class="creator-panel__col_nb creator-panel__title" for="table-col-nb">{{ __('Nombre de colonnes') }}</label>
                        <input class="form-control input-creator" type="number" name="table-col-nb" id="table-col-nb" size="3" value="2" min="2"/>
                    </div>
                    <div class="col-md-6 mt-4-md" role="region">
                        <label class="creator-panel__footer d-block creator-panel__title" for="table-footer">{{ __('Options du tableau') }}</label>
                        {{-- OPTIONS DU TABLEAU --}}
                       <div class="choice-header-tab">
                        <label class="central-header-button tab-radio-header" for="central-header-button">
                            <input tabindex="0" type="checkbox" class="add-element type-special check-box" value="" id="central-header-button" name="central-header-button" checked>
                            <span class="ml-3">{{ __('En-têtes horizontales') }}</span>
                        </label>
                        <label class="lateral-header-button tab-radio-header" for="lateral-header-button">
                            <input tabindex="0" type="checkbox" class="add-element type-special check-box" value="" id="lateral-header-button" name="lateral-header-button">
                            <span class="ml-3">{{ __('En-têtes verticales') }}</span>
                        </label>
                        <label class="footer-button tab-radio-header" for="footer-button">
                            <input tabindex="0" type="checkbox" class="add-element type-special check-box" value="" id="footer-button" name="footer-button">
                            <span class="ml-3">{{ __('Pied de tableau') }}</span>
                        </label>
                       </div>
                    </div>
                </div>

                <div role="section" class="row" aria-labelledby="form_actions_element">
                    <div role="section" class="col-md-6" aria-labelledby="form_add_static">
                        <h3 id="form_add_static" class="mb-3 creator-panel__title">{{ __('Ajouter un élément') }}</h3>
                        <button class="btn btn-primary btn_crea add-element type-container" type="button" aria-label="{{ __('Nouvelle colonne à gauche') }}" title="{{ __('Nouvelle colonne à gauche') }}" id="insert-col_left" role="listitem">
                            <i class="fa fa-grip-lines-vertical"></i>
                            {{ __('Nouvelle colonne à gauche') }}
                        </button>
                        <button class="btn btn-primary btn_crea add-element type-container" type="button" aria-label="{{ __('Nouvelle colonne à droite') }}" title="{{ __('Nouvelle colonne à droite') }}" id="insert-col_right" role="listitem">
                            <i class="fa fa-grip-lines-vertical"></i>
                            {{ __('Nouvelle colonne à droite') }}
                        </button>            
                        <br>
                        <button class="btn btn-primary btn_crea add-element type-container" type="button" aria-label="{{ __('Nouvelle ligne en haut') }}" title="{{ __('Nouvelle ligne en haut') }}" id="insert-row_up" role="listitem">
                            <i class="fa fa-grip-lines"></i>
                            {{ __('Nouvelle ligne en haut') }}
                        </button>
                        <button class="btn btn-primary btn_crea add-element type-container" type="button" aria-label="{{ __('Nouvelle ligne en bas') }}" title="{{ __('Nouvelle ligne en bas') }}" id="insert-row_down" role="listitem">
                            <i class="fa fa-grip-lines"></i>
                            {{ __('Nouvelle ligne en bas') }}
                        </button>
                    </div>
                    <div role="section" class="col-md-6 mt-4-md" aria-labelledby="form_actions_text">
                        <h3 id="form_actions_text" class="mb-3 creator-panel__title">{{ __('Mise en forme du texte') }}</h3>
                        <button class="btn btn-primary btn_crea text-formatting" type="button" aria-label=" {{ __('Gras') }}" title="{{ __('Mettre le texte en gras') }}" id="element-bold" role="listitem">
                            <i class="fa fa-bold"></i>
                            {{ __('Gras') }}
                        </button>
                        <button class="btn btn-primary btn_crea text-formatting" type="button" aria-label="{{ __('Italique') }}" title="{{ __('Mettre le texte en italique') }}" id="element-italic" role="listitem">
                            <i class="fa fa-italic"></i>
                            {{ __('Italique') }}
                        </button>
                        <button class="btn btn-primary btn_crea text-formatting" type="button" aria-label="{{ __('Souligné') }}" title="{{ __('Mettre le texte en souligné') }}" id="element-underline" role="listitem">
                            <i class="fa fa-underline"></i>
                            {{ __('Souligné') }}
                        </button>
                        <br>
                        <button class="btn btn-primary btn_crea text-formatting" type="button" aria-label="{{ __('Aligner à gauche') }}" title="{{ __('Mettre le texte à gauche') }}" id="justify-left" role="listitem">
                            <i class="fa fa-align-left"></i>
                            {{ __('Aligner à gauche') }}
                        </button>
                        <button class="btn btn-primary btn_crea text-formatting" type="button" aria-label="{{ __('Centrer') }}" title="{{ __('Mettre le texte au centre') }}" id="justify-center" role="listitem">
                            <i class="fa fa-align-center"></i>
                            {{ __('Centrer') }}
                        </button>
                        <button class="btn btn-primary btn_crea text-formatting" type="button" aria-label="{{ __('Aligner à droite') }}" title="{{ __('Mettre le texte à droite') }}" id="justify-right" role="listitem">
                            <i class="fa fa-align-right"></i>
                            {{ __('Aligner à droite') }}
                        </button>
                    </div>
                </div>
                <div role="section" class="row mt-4" aria-labelledby="form_actions_crud">
                    <div role="section" class="col-md-6" aria-labelledby="form_actions_crud">
                       <div class="mb-4">
                            <h3 id="form_add_static" class="mb-3 creator-panel__title">{{ __('Déplacer une case') }}</h3>
                            <button disabled="true" aria-label="{{ __('Déplacer la case à gauche') }}" title="{{ __('Déplacer la case à gauche') }}" class="btn btn-primary btn_crea cell-action element_move table-element-action action-move-cell-left" data-action="move-cell-left">
                                <i class="fa fa-arrow-left"></i><i class="fa fa-vector-square"></i>
                                {{ __('Gauche') }}
                            </button>
                            <button disabled="true" aria-label="{{ __('Déplacer la case à droite') }}" title="{{ __('Déplacer la case à droite') }}" class="btn btn-primary btn_crea cell-action element_move table-element-action action-move-cell-right" data-action="move-cell-right">
                                <i class="fa fa-vector-square"></i><i class="fa fa-arrow-right"></i>
                                {{ __('Droite') }}
                            </button>
                            <button disabled="true" aria-label="{{ __('Déplacer la case en haut') }}" title="{{ __('Déplacer la case en haut') }}" class="btn btn-primary btn_crea cell-action element_move table-element-action action-move-cell-up" data-action="move-cell-up">
                                <i class="fa fa-vector-square"></i><i class="fa fa-arrow-up"></i>
                                {{ __('Haut') }}
                            </button>
                            <button disabled="true" aria-label="{{ __('Déplacer la case en bas') }}" title="{{ __('Déplacer la case en bas') }}" class="btn btn-primary btn_crea cell-action element_move table-element-action action-move-cell-down" data-action="move-cell-down">
                                <i class="fa fa-vector-square"></i><i class="fa fa-arrow-down"></i>
                                {{ __('Bas') }}
                            </button>
                       </div>
                        <h3 id="form_add_static" class="mb-3 creator-panel__title">{{ __('Déplacer une ligne / colonne') }}</h3>
                        <button disabled="true" aria-label="{{ __('Déplacer la colonne à gauche') }}" title="{{ __('Déplacer la colonne à gauche') }}" class="btn btn-primary btn_crea cell-action element_move table-element-action action-move-col-left" data-action="move-col-left">
                            <i class="fa fa-arrow-left"></i><i class="fa fa-grip-lines-vertical"></i>
                            {{ __('Gauche') }}
                        </button>
                        <button disabled="true" aria-label="{{ __('Déplacer la colonne à droite') }}" title="{{ __('Déplacer la colonne à droite') }}" class="btn btn-primary btn_crea cell-action element_move table-element-action action-move-col-right" data-action="move-col-right">
                            <i class="fa fa-grip-lines-vertical"></i><i class="fa fa-arrow-right"></i>
                            {{ __('Droite') }}
                        </button>
                        <button disabled="true" aria-label="{{ __('Déplacer la ligne en haut') }}" title="{{ __('Déplacer la ligne en haut') }}" class="btn btn-primary btn_crea cell-action element_move table-element-action action-move-row-up" data-action="move-row-up">
                            <i class="fa fa-grip-lines"></i><i class="fa fa-arrow-up"></i>
                            {{ __('Haut') }}
                        </button>
                        <button disabled="true" aria-label="{{ __('Déplacer la ligne en bas') }}" title="{{ __('Déplacer la ligne en bas') }}" class="btn btn-primary btn_crea cell-action element_move table-element-action action-move-row-down" data-action="move-row-down">
                            <i class="fa fa-grip-lines"></i><i class="fa fa-arrow-down"></i>
                            {{ __('Bas') }}
                        </button>
                    </div>
                    <div role="section" class="col-md-6 mt-4-md" aria-labelledby="form_actions_crud">
                        <div class="action_delete_td mb-4">
                            <h3 id="table_actions_crud" class="mb-3 creator-panel__title">{{ __('Suppression') }}</h3>
                            <button disabled="true" aria-label="{{ __('Supprimer la ligne') }}" title="{{ __('Supprimer la ligne') }}" class="btn btn-primary btn_crea cell-action element_delete form-element-action action-delete-row" data-action="delete-row">
                                <i class="fa fa-grip-lines"></i><i class="fa fa-trash"></i>
                                {{ __('Supprimer la ligne') }}
                            </button>
                            <button disabled="true" aria-label="{{ __('Supprimer la colonne') }}" title="{{ __('Supprimer la colonne') }}" class="btn btn-primary btn_crea cell-action element_delete form-element-action action-delete-col" data-action="delete-col">
                                <i class="fa fa-grip-lines-vertical"></i><i class="fa fa-trash"></i>
                                {{ __('Supprimer la colonne') }}
                            </button>
                            <button disabled="true" aria-label="{{ __('Vider la case') }}" title="{{ __('Vider la case') }}" class="btn btn-primary btn_crea cell-action element_empty form-element-action action-delete" data-action="empty-cell">
                                <i class="fa fa-vector-square"></i><i class="fa fa-trash"></i>
                                {{ __('Vider la case') }}
                            </button>
                        </div>
                        <h3 id="table_actions_crud" class="mb-3 creator-panel__title">{{ __('Fusion de cases') }}</h3>
                        {{-- MERGE --}}
                        <button disabled="true" aria-label="{{ __('Diviser la case') }}" title="{{ __('Diviser la case') }}" class="btn btn-primary btn_crea cell-action element_split form-element-action action-split" data-action="split-cell">
                            <i class="fa fa-cut"></i>
                            {{-- Si précédemment merged --}}
                            {{ __('Diviser la case fusionnée') }} 
                        </button>
                        <button disabled="true" aria-label="{{ __('Fusionner vers la droite') }}" title="{{ __('Fusionner vers la droite') }}" class="btn btn-primary btn_crea cell-action element_merge-right form-element-action action-merge-right" data-action="merge-right">
                            <i class="fa fa-object-group"></i><i class="fa fa-arrow-right"></i>
                            {{ __('Fusion droite') }}
                        </button>
                        <button disabled="true" aria-label="{{ __('Fusionner vers le bas') }}" title="{{ __('Fusionner vers le bas') }}" class="btn btn-primary btn_crea cell-action element_merge-down form-element-action action-merge-down" data-action="merge-down">
                            <i class="fa fa-object-group"></i><i class="fa fa-arrow-down"></i>
                            {{ __('Fusion bas') }}
                        </button>
                        {{-- FIN MERGE --}}
                    </div>
                </div>



                <div class="row w-100 bloc-creation-interface">

                    <div class="col-12">
                        <nav class="">
                            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                <a class="nav-item nav-link active" id="nav-blueprint-tab" data-toggle="tab" href="#nav-blueprint" role="tab" aria-controls="nav-blueprint" aria-selected="true" title="{{ __('Voir le tableau') }}">{{ __('Tableau') }}</a>
                                <a class="nav-item nav-link" id="nav-code-tab" data-toggle="tab" href="#nav-code" role="tab" aria-controls="nav-code" aria-selected="false" title="{{ __('Voir le code généré') }}">{{ __('Code généré') }}</a>
                            </div>
                        </nav>


                        <!-- panneaux -->
                        <div class="tab-content" id="nav-tabContent" role="section">

                            <!-- Code en brut (non formaatté) -->
                            <textarea name="html" placeholder="html" id="raw-code" class="d-none" aria-hidden="true"></textarea>

                            <!-- panneau blueprint -->
                            <div class="tab-pane fade show active" id="nav-blueprint" role="tabpanel" aria-labelledby="nav-blueprint-tab">
                                <div id="content-created-blueprint" class="content-panel border border-top-0 rounded-bottom p-4">@include('content.table.template')</div>
                            </div>

                            <!-- panneau code -->
                            <div class="tab-pane fade" id="nav-code" role="tabpanel" aria-labelledby="nav-code-tab">
                                <h3>{{ __('Liens CSS à mettre dans la balise') }} &lt;head&gt; </h3>
                                <a href="aide#tablecode" class="btn btn-primary btn_crea" title="{{ __('Voir la page d\'aide') }}">
                                    <i class="fa fa-question-circle"></i>
                                    {{ __("Besoin d'aide !") }}
                                </a>
                                <div class="copy-container w-100 d-flex flex-row-reverse">
                                    <button data-clipboard-action="copy" data-clipboard-target="#css-link" id="copy-css-link" type="button" class="btn btn-primary btn_crea" title="{{ __('Copier') }}"> 
                                        {{ __("Copier le lien css") }}
                                    </button>
                                </div>
                                <!-- Lien du style à utiliser -->
                                <xmp class="code-display" id="css-link"><link href="{{ URL::asset('css/themes/table/all-themes.css') }}" rel="stylesheet"></xmp>
                                <h3 class="mt-3">{{ __("Voici le code brut pour votre tableau: copiez le où vous le souhaitez, mais ne le modifiez pas !") }}</h3>
                                <div class="copy-container w-100 d-flex flex-row-reverse">
                                    <button data-clipboard-action="copy" data-clipboard-target="#formatted-code" id="copy-raw-code" type="button" class="btn btn-primary btn_crea" title="{{ __('Copier') }}" > 
                                        {{ __("Copier le code généré") }}
                                    </button>
                                </div>
                                <!-- Code formatté -->
                                <pre class="prettyprint linenums:4 content-panel" id="formatted-code"></pre>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>

        @if (Auth::check())

        <!-- Actions importantes sur le projet -->
        <div class="project-action col-8 mx-auto my-3" role="region" aria-labelledby="form_actions">
            <button type="submit" class="btn btn-form-final btn-success btn-crea" id="btn-save-project" aria-label="{{ __('Sauvegarder ce projet') }}" title="{{ __('Sauvegarder ce projet') }}">
                <div class="btn-crea__icon"><i class="fas fa-save"></i></div>
                <p>
                    {{ __('Sauvegarder ce projet') }}
                </p>
            </button>
        </div>

        @endif
    </div>
</div>

<div class="alert alert-success" role="alert" style="display: none">
    <span class="alert-content">
        Contenu de l'alerte
    </span>
    <button type="button" class="close ml-3" data-dismiss="alert" aria-label="{{ __('Fermer') }}" title="{{ __('Fermer') }}">
        <span aria-hidden="true">
            <i class="fa fa-times"></i>
        </span>
    </button>
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
                <h5 class="modal-title creator-panel__title" id="importDataTitle">{{ __('Importer des données') }}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="{{ __('Fermer') }}" title="{{ __('Fermer') }}">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <input type="file" name="imported_data" id="imported_data"/>
            </div>
            <div class="modal-footer">
                {{-- <button type="button" id="import-data" class="btn btn-primary" data-dismiss="modal" title="{{ __('Importer mes données') }}">{{ __('Importer mes données') }}</button> --}}
                <button type="button" class="btn btn-form-final btn-primary btn-crea" id="import-data" data-dismiss="modal" title="{{ __('Importer mes données') }}">
                    <div class="btn-crea__icon">
                        <i class="fas fa-file-upload"></i>
                    </div>
                    <p>{{ __('Importer mes données') }}</p>
                </button>
                <button type="button" class="btn btn-form-final btn-gris-annule btn-crea" data-dismiss="modal" title="{{ __('Annuler') }}" class="btn btn-form-final btn-gris-annule btn-crea">
                    <div class="btn-crea__icon">
                        <i class="fas fa-trash-alt"></i>
                    </div>
                    <p>{{ __('Annuler') }}</p>
                </button>
                {{-- <button type="button" class="btn btn-secondary" data-dismiss="modal" title="{{ __('Annuler') }}">{{ __('Annuler') }}</button> --}}
            </div>
        </div>
    </div>
</div>

@endsection

@section('pagespecificscripts')

<script type="application/javascript" src="{{ URL::asset('js/components/table.js') }}"></script>
<script type="application/javascript" src="{{ URL::asset('js/components/import_data_table.js') }}"></script>
{{-- Script PRETTIFY + skin --}}
<script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js?autorun=true&amp;skin=sunburst"></script>

@endsection