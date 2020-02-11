@extends('layouts.app')

@section('titre') {{ __('Menu') }} - EasyToC @endsection

@section('pagespecificstyles')
    <link href="{{ URL::asset('css/themes/menu/all-themes.css') }}" rel="stylesheet">
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
            <h2 class="entete__title">{{ __('Créer un menu') }}</h2>
            <div class="entete__under"></div>
        </div>
        <div class="panel-body">
                <!-- Display Validation Errors -->
                @include('common.errors')

        <!-- interface d'initialisation du projet -->
        <div class="row creator-panel" role="region" aria-labelledby="interface-heading">

            
            <!-- actions d'initialisation -->
            <div class="actions-panel" role="region" aria-labelledby="menu_tools">
                <h3 id="menu_tools" class="mb-3 creator-panel__title creator-panel__title">{{ __("Outils d'aide à la création") }}</h3>
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
            <div class="template-panel justify-content-center align-items-center" role="region" aria-labelledby="form_themes">
                <h3 id="menu_themes" class="mb-3 creator-panel__title">{{ __('Thème du Menu') }}</h3>
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

            <div id="content-interface" class="col shadow-box border-12 bg-white p-3" role="section" aria-label="Actions sur l'élement">
                <!-- navigation entre les panneaux -->

                <div class="main-info-form" role="region">
                    <div class="col p-0 mr-3" role="region">
                        <label class="creator-panel__title" for="menu-creator-title">{{ __('Titre du menu') }}</label>
                        <input name="menu-creator-title" id="menu-creator-title" placeholder="{{ __('Titre') }}" class="form-control" size="30"/>
                    </div>
                    <div class="col p-0" role="region">
                        <label class="creator-panel__caption" for="menu-creator-caption">{{ __('Légende du menu') }}</label>
                        <input name="menu-creator-caption" id="menu-creator-caption" placeholder="{{ __('Légende') }}" class="form-control" size="30"/>
                    </div>
                </div>

                <div role="section" class="row" aria-labelledby="form_actions_element">
                    <div role="section" class="col" aria-labelledby="form_add_static">
                        <h3 id="form_add_static" class="mb-3 creator-panel__title">{{ __('Ajouter un élément') }}</h3>
                        <button class="btn btn-primary btn_crea add-element type-container" type="button" aria-label="{{ __('Nouveau menu') }}" title="{{ __('Nouveau menu') }}" id="insert-menu" role="listitem">
                            <i class="fa fa-grip-lines-vertical"></i>
                            {{ __('Nouveau menu') }}
                        </button> 
                        <button class="btn btn-primary btn_crea add-element type-container" type="button" aria-label="{{ __('Nouveau sous-menu') }}" title="{{ __('Nouveau sous-menu') }}" id="insert-menu_down" role="listitem">
                            <i class="fa fa-grip-lines"></i>
                            {{ __('Nouveau sous-menu') }}
                        </button>
                    </div>


                    <div role="section" class="col-5" aria-labelledby="form_actions_text">
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
                        <button class="btn btn-primary btn_crea text-formatting" type="button" aria-label="{{ __('Justifier') }}" title="{{ __('Justifier le texte') }}" id="justify-full" role="listitem">
                            <i class="fa fa-align-justify"></i>
                            {{ __('Justifier') }}
                        </button>
                    </div>
                </div>

                
                <div role="section" class="row d-block p-0 m-0" aria-labelledby="menu_actions_crud">
                    <h3 id="menu_actions_crud" class="mb-3 creator-panel__title">{{ __('Actions sur l\'élément') }}</h3>
                        <button disabled="true" aria-label="{{ __('Supprimer le menu') }}" title="{{ __('Supprimer le menu') }}" class="btn btn-primary btn_crea cell-action element_delete menu-element-action action-delete-ul" data-action="delete-ul">
                            <i class="fa fa-grip-lines"></i><i class="fa fa-trash"></i>
                            {{ __('Supprimer le menu') }}
                        </button>
                        <button disabled="true" aria-label="{{ __('Supprimer le sous-menu') }}" title="{{ __('Supprimer le sous-menu') }}" class="btn btn-primary btn_crea cell-action element_delete menu-element-action action-delete-li" data-action="delete-li">
                            <i class="fa fa-grip-lines-vertical"></i><i class="fa fa-trash"></i>
                            {{ __('Supprimer le sous-menu') }}
                        </button>
                        <br>
                        <button disabled="true" aria-label="{{ __('Déplacer le menu à gauche') }}" title="{{ __('Déplacer le menu à gauche') }}" class="btn btn-primary btn_crea cell-action element_move menu-element-action action-move-ul-left" data-action="move-ul-left">
                            <i class="fa fa-arrow-left"></i><i class="fa fa-vector-square"></i>
                            {{ __('Déplacer le menu à gauche') }}
                        </button>
                        <button disabled="true" aria-label="{{ __('Déplacer le menu à droite') }}" title="{{ __('Déplacer le menu à droite') }}" class="btn btn-primary btn_crea cell-action element_move menu-element-action action-move-ul-right" data-action="move-ul-right">
                            <i class="fa fa-vector-square"></i><i class="fa fa-arrow-right"></i>
                            {{ __('Déplacer le menu à droite') }}
                        </button>
                        <button disabled="true" aria-label="{{ __('Déplacer le sous-menu en haut') }}" title="{{ __('Déplacer le sous-menu en haut') }}" class="btn btn-primary btn_crea cell-action element_move table-element-action action-li-cell-up" data-action="move-li-up">
                            <i class="fa fa-vector-square"></i><i class="fa fa-arrow-up"></i>
                            {{ __('Déplacer le sous-menu en haut') }}
                        </button>
                        <button disabled="true" aria-label="{{ __('Déplacer le sous-menu en bas') }}" title="{{ __('Déplacer le sous-menu en bas') }}" class="btn btn-primary btn_crea cell-action element_move table-element-action action-move-li-down" data-action="move-li-down">
                            <i class="fa fa-vector-square"></i><i class="fa fa-arrow-down"></i>
                            {{ __('Déplacer le sous-menu en bas') }}
                        </button>
                </div>



                <div class="row w-100 d-flex m-0 mb-3">

                    <div class="col p-0 m-0">
                        <nav class="mt-5">
                            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                <a class="nav-item nav-link active" id="nav-blueprint-tab" data-toggle="tab" href="#nav-blueprint" role="tab" aria-controls="nav-blueprint" aria-selected="true" title="{{ __('Voir le tableau') }}">{{ __('Tableau') }}</a>
                                <a class="nav-item nav-link" id="nav-code-tab" data-toggle="tab" href="#nav-code" role="tab" aria-controls="nav-code" aria-selected="false" title={{ __('Voir le code généré') }}>{{ __('Code généré') }}</a>
                            </div>
                        </nav>


                        <!-- panneaux -->
                        <div class="tab-content" id="nav-tabContent" role="section">

                            <!-- Code en brut (non formaatté) -->
                            <textarea name="html" placeholder="html" id="raw-code" class="d-none" aria-hidden="true"></textarea>

                            <!-- panneau blueprint -->
                            <div class="tab-pane fade show active" id="nav-blueprint" role="tabpanel" aria-labelledby="nav-blueprint-tab">
                                <div id="content-created-blueprint" class="content-panel border border-top-0 rounded-bottom p-4">
                                </div>
                            </div>

                            <!-- panneau code -->
                            <div class="tab-pane fade" id="nav-code" role="tabpanel" aria-labelledby="nav-code-tab">
                                <h3>{{ __('Liens CSS à mettre dans la balise') }} &lt;head&gt; </h3>
                                <a href="aide#tablecode" class="btn btn-primary btn_crea" title="{{ __('Voir la page d\'aide') }}">
                                    <i class="fa fa-question-circle"></i>
                                    {{ __("Besoin d'aide !") }}
                                </a>
                                <div class="copy-container w-100 d-flex flex-row-reverse">
                                    <button data-clipboard-action="copy" data-clipboard-target="#css-link" id="copy-css-link" type="button" class="btn btn-info" title="{{ __('Copier') }}"> 
                                        {{ __("Copier") }}
                                    </button>
                                </div>
                                <!-- Lien du style à utiliser -->
                                <xmp class="code-display" id="css-link"><link href="{{ URL::asset('css/themes/table/all-themes.css') }}" rel="stylesheet"></xmp>
                                <h3 class="mt-3">{{ __("Voici le code brut pour votre tableau: copiez le où vous le souhaitez, mais ne le modifiez pas !") }}</h3>
                                <div class="copy-container w-100 d-flex flex-row-reverse">
                                    <button data-clipboard-action="copy" data-clipboard-target="#formatted-code" id="copy-raw-code" type="button" class="btn btn-info" title="{{ __('Copier') }}" > 
                                        {{ __("Copier") }}
                                    </button>
                                </div>
                                <!-- Code formatté -->
                                <pre class="prettyprint linenums:4 content-panel" id="formatted-code"></pre>
                            </div>
                        </div>
                    </div>

                    <div class="side-tool vertical-tools" style="display: none">
                        <button accesskey="u" id="action-move-up" data-action="move-up" class="mb-2 btn-info form-element-action action-move-up" title="{{ __('Déplacer vers le haut') }}">
                            <i class="fas fa-sort-up" title="{{ __('Déplacer vers le haut') }}"></i>
                        </button>
                        <button accesskey="d" id="action-move-down" data-action="move-down" class="btn-info form-element-action action-move-down" title="{{ __('Déplacer verse le bas') }}">
                            <i class="fas fa-sort-down" title="{{ __('Déplacer vers le bas') }}"></i>
                        </button>
                    </div>

                </div>

                <div class="side-tool horizontal-tools w-100 flex-row" style="display: none">
                    <button accesskey="l" id="action-move-left" data-action="move-left" class="btn-info table-element-action action-move-left" title="{{ __('Déplacer vers la gauche') }}">
                        <i class="fas fa-caret-left" title="{{ __('Déplacer vers la gauche') }}"></i>
                    </button>
                    <button accesskey="r" id="action-move-right" data-action="move-right" class="btn-info table-element-action action-move-right" title="{{ __('Déplacer vers la droite') }}">
                        <i class="fas fa-caret-right" title="{{ __('Déplacer vers la droite') }}"></i>
                    </button>
                </div>

            </div>
        </div>

        @if (Auth::check())

        <!-- Actions importantes sur le projet -->
        <div class="project-action col-8 mx-auto my-3 d-flex justify-content-between align-items-center" role="region" aria-labelledby="form_actions">
            <button type="button" accesskey="c" class="btn btn-danger btn-form-final" id="btn-cancel-project" aria-label="{{ __('Annuler les modifications') }}" title="{{ __('Annuler les modifications') }}" onclick="if(confirm('{{ __('Voulez vous vraiment quitter sans sauvegarder ?') }}')){ window.location.href = 'profile/{{ auth()->user()->id }}/view' }">{{ __('Annuler les
                            modifications') }}</button>
            <button type="submit" accesskey="s" class="btn btn-form-final btn-success btn_crea" id="btn-save-project" aria-label="{{ __('Sauvegarder ce projet') }}" title="{{ __('Sauvegarder ce projet') }}">{{ __('Sauvegarder ce projet') }}</button>
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
                <h5 class="modal-title" id="importDataTitle">{{ __('Importer des données') }}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="{{ __('Fermer') }}" title="{{ __('Fermer') }}">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <input type="file" name="imported_data" id="imported_data"/>
            </div>
            <div class="modal-footer">
                <button type="button" id="import-data" class="btn btn-primary" data-dismiss="modal" title="{{ __('Importer mes données') }}">{{ __('Importer mes données') }}</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal" title="{{ __('Annuler') }}">{{ __('Annuler') }}</button>
            </div>
        </div>
    </div>
</div>

@endsection



@section('pagespecificscripts')
<script type="application/javascript" src="{{ URL::asset('js/components/menu.js') }}"></script>
<script type="application/javascript" src="{{ URL::asset('js/components/import_data_menu.js') }}"></script>
    {{-- Script PRETTIFY + skin --}}
    <script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js?autorun=true&amp;skin=sunburst"></script>
@endsection