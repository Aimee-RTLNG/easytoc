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
        <h1 class="entete__title">{{ __('Modifier un menu') }}</h1>
        <div class="entete__under"></div>
    </div>
    <div class="panel-body mb-3">
        <!-- Display Validation Errors -->
        @include('common.errors')

        <!-- interface d'initialisation du projet -->
        <div class="row creator-panel" role="region" aria-labelledby="interface-heading">

            @if (Auth::check())
            <!-- infos du projet -->
            <div class="info-panel col-lg-4" role="region" aria-labelledby="menu_infos">
                <form action="{{ route('content.update', ['content'=>$content]) }}" method="post" id="edit-menu">
                    @csrf
                    @method('PUT')
                    <input type="hidden" name="type_id" value="3">
                    <input type="hidden" name="user_id" value="{{ auth()->user()->id }}">
                    <div class="form-group" role="region">
                        <label class="creator-panel__title" for="title">{{ __('Titre du projet') }} *</label>
                        <input class="shadow-box  border-12" type="text" name="title" placeholder="{{ __('Titre') }}" class="form-control" id="title-input" maxlength="150" value="{{ old('title', $content->title) }}" required>
                        <p id="chara-title-remains"></p>
                    </div>
                    <div class="form-group" role="region">
                        <label class="creator-panel__title" for="desc-input">{{ __('Description du projet') }} *</label>
                        <textarea class="shadow-box border-12" type="text" name="description" placeholder="{{ __('Description') }}" class="form-control" id="desc-input" rows="3" maxlength="300" required>{{ old('description', $content->description) }}</textarea>
                        <p id="chara-desc-remains"></p>
                    </div>
                    <!-- Code en brut (non formatté) -->
                    <textarea name="html" placeholder="html" id="raw-code" class="d-none" aria-hidden="true">{{ old('html', $content->html) }}</textarea>
                </form>
            </div>
            @endif

            <!-- actions d'initialisation -->
            <div class="actions-panel @if (Auth::check()) col-lg-5 col-md-6 @else col-lg-5 col-md-6 @endif" role="region" aria-labelledby="form_tools">
                <h3 id="form_tools" class="mb-3 creator-panel__title creator-panel__title">{{ __("Outils d'aide à la création") }}</h3>
                <div class="actions-panel__btn" role="complementary">
                    <button type="button" class="btn btn-form-final btn-primary btn-crea" data-toggle="modal" data-target="#importData" title="{{ __("Importer des données") }}">
                        <div class="btn-crea__icon">
                            <i class="fa fa-file-upload"></i>
                        </div>
                        <p>{{ __('Importer des données') }}</p>
                    </button>
                    
                    <button type="button" class="btn btn-form-final btn-primary btn-crea" id="generate-example" title="{{ __("Générer un exemple") }}">
                        <div class="btn-crea__icon">
                            <i class="fa fa-sync"></i>
                            {{-- <i class="fa fa-file-code"></i> --}}
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
                <h3 id="form_themes" class="mb-3 creator-panel__title">{{ __('Thème du menu') }}</h3>
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
        <div class="row creator-interfaces d-flex justify-content-around mt-5" role="section" aria-label="{{ __('Actions sur l\'élement') }}">

            <div id="content-interface" class="content-interface col shadow-box border-12 bg-white" role="section" aria-label="{{ __('Actions sur l\'élement') }}">
                <!-- navigation entre les panneaux -->

                <div class="pb-md-3 row m-0" role="region">
                    <div class="col-md-6 d-flex align-items-end m-0" role="region">
                        <div class="col pl-0">
                            <label class="creator-panel__title" for="menu-creator-title">{{ __('Titre de menu') }}</label>
                            <input type="text" name="menu-creator-title" id="menu-creator-title" placeholder="{{ __('Titre de menu') }}" class="form-control input-creator" size="30" value="{{ __('Titre de menu') }}" autocomplete="off"/>
                        </div>
                        <div class="cont-checkbox">
                            <input class="check-box" type="checkbox" name="menu-creator-title-display" id="menu-creator-title-display" checked autocomplete="off" />
                            <label class="creator-panel__title-display" for="menu-creator-title-display">{{ __('Afficher le titre') }}</label>
                        </div>
                    </div>

                    <div class="col-md-6 d-flex align-items-end mb-3-md mt-3-md" role="region">
                        <div class="col pl-0">
                            <label class="creator-panel__link creator-panel__title" for="menu-creator-link">{{ __('Logo de menu') }}</label>
                            <input type="url" name="menu-creator-link" id="menu-creator-link" placeholder="{{ __('URL') }}" value="{{ URL::asset('images/Logo-white.webp') }}" class="form-control input-creator" autocomplete="off"/>
                        </div>
                        <div class="cont-checkbox">
                            <input class="check-box" type="checkbox" name="menu-creator-link-display" id="menu-creator-link-display" checked autocomplete="off" />
                            <label class="creator-panel__link-display" for="menu-creator-link-display">{{ __('Afficher le logo') }}</label>
                        </div>
                    </div>
                </div>

                <div role="section" class="row mt-4 form_actions_element custom-info-element m-0 p-0" aria-labelledby="form_actions_element" style="display: none">
                    <div role="section" class="w-100 mr-3 d-flex justify-content-between align-items-end pb-2" aria-labelledby="form_actions_crud">
                        <div class="col">
                            <label class="creator-panel__title" for="nav-name">{{ __('Nom du lien') }}</label>
                            <input type="text" id="nav-name" class="form-control input-creator" placeholder="{{ __('Titre') }}">
                        </div>

                        <div class="col">
                            <label class="creator-panel__title" for="nav-link">{{ __('URL de redirection du lien') }}</label>
                            <input type="url" id="nav-link" class="form-control input-creator" placeholder="URL">
                        </div>
                    </div>
                </div>
                
                <div role="section" class="row form_actions_element static-buttons-creator justify-content-center" aria-labelledby="form_actions_element">
                    <div role="section" aria-labelledby="form_add_static" class="w-100 btns_menu">
                        <div class="btns_menu__child mb-3-sm">
                            <button class="btn btn-primary add-element type-menu" type="button" aria-label="{{ __('Lien simple') }}" id="insert-menu_link" role="listitem" title="{{ __("Ajouter un lien simple") }}" data-toggle="tooltip" data-placement="bottom">
                                <i class="fa fa-link"></i>
                            </button>
                            <button class="btn btn-primary add-element type-menu" type="button" aria-label="{{ __('Rubrique avec sous-menu') }}" id="insert-sub_menu" role="listitem" title="{{ __("Ajouter une rubrique avec sous-menu") }}" data-toggle="tooltip" data-placement="bottom">
                                <i class="fa fa-heading"></i>
                            </button>
                            <button class="btn btn-primary add-element type-menu" type="button" aria-label="{{ __('Lien de sous-menu') }}" id="insert-sub_link" role="listitem" title="{{ __("Ajouter un lien de sous-menu") }}" disabled data-toggle="tooltip" data-placement="bottom">
                                <i class="fa fa-list-ul"></i>
                            </button>
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
                        </div>
                        <div class="btns_menu__child">
                            <div class="btn-separator d-none-sm"></div>
                            <button class="btn btn-primary mb-0 form-element-action action-move-left" aria-label="{{ __('Déplacer à gauche') }}" id="action-move-left" data-action="move-left" title="{{ __('Déplacer à gauche') }}" data-toggle="tooltip" data-placement="bottom">
                                <i class="fa fa-arrow-left"></i>
                            </button>
                            <button class="btn btn-primary mb-0 form-element-action action-move-right" aria-label="{{ __('Déplacer à droite') }}" id="action-move-right" data-action="move-right" title="{{ __('Déplacer à droite') }}" data-toggle="tooltip" data-placement="bottom">
                                <i class="fa fa-arrow-right"></i>
                            </button>
                            <button class="btn btn-primary mb-0 form-element-action action-move-up" aria-label="{{ __('Déplacer en haut') }}" id="action-move-up" data-action="move-up" title="{{ __('Déplacer en haut') }}" data-toggle="tooltip" data-placement="bottom">
                                <i class="fa fa-arrow-up"></i>
                            </button>
                            {{-- <button aria-label="{{ __('Déplacer en bas') }}" class="btn btn-primary mb-0 form-element-action action-move-down" aria-label="{{ __('Déplacer en bas') }}" id="action-move-down" data-action="move-down" title="{{ __('Déplacer en bas') }}" data-toggle="tooltip" data-placement="bottom"> --}}
                            <button class="btn btn-primary mb-0 form-element-action action-move-down" aria-label="{{ __('Déplacer en bas') }}" id="action-move-down" data-action="move-down" title="{{ __('Déplacer en bas') }}" data-toggle="tooltip" data-placement="bottom">
                                <i class="fa fa-arrow-down"></i>
                            </button>
                            <div class="btn-separator"></div>
                            <button class="btn btn-primary mb-0 element_delete form-element-action action-delete" aria-label="{{ __('Supprimer') }}" id="action-delete" data-action="delete" title="{{ __('Supprimer l\'élément') }}" data-toggle="tooltip" data-placement="bottom">
                                <i class="fa fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="bloc-creation-interface">
                    <div class="bloc-visualisation col mb-3 p-0">

                        <div class="col p-0 m-0">
                            <nav>
                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                    <a class="nav-item nav-link active" id="nav-blueprint-tab" data-toggle="tab" href="#nav-blueprint" role="tab" aria-controls="nav-blueprint" aria-selected="true" title="{{ __('Voir le menu') }}">{{ __('Menu') }}</a>
                                    <a class="nav-item nav-link" id="nav-code-tab" data-toggle="tab" href="#nav-code" role="tab" aria-controls="nav-code" aria-selected="false" title="{{ __('Voir le code généré') }}">{{ __('Code généré') }}</a>
                                </div>
                            </nav>


                            <!-- panneaux -->
                            <div class="tab-content menu-tabs" id="nav-tabContent" role="section">

                                <!-- panneau blueprint -->
                                <div class="tab-pane fade show active" id="nav-blueprint" role="tabpanel" aria-labelledby="nav-blueprint-tab">
                                    <div id="content-created-blueprint" class="content-panel menu-blueprint border border-top-0 rounded-bottom p-4">{!! old('html', $content->html) !!}</div>
                                </div>

                                <!-- panneau code -->
                                <div class="tab-pane fade blueprint" id="nav-code" role="tabpanel" aria-labelledby="nav-code-tab">
                                    <h2 class="blueprint__titre creator-panel__title">{{ __('Liens CSS et JS à mettre dans la balise') }} &lt;head&gt; </h2>
                                    <a href="aide#formcode" class="btn btn-primary btn_crea" title="{{ __('Voir la page d\'aide') }}">
                                        <i class="fa fa-question-circle"></i>
                                        {{ __("Besoin d'aide !") }}
                                    </a>
                                    <div class="copy-container w-100 d-flex flex-row-reverse">
                                        <button data-clipboard-action="copy" data-clipboard-target="#css-link" id="copy-css-link" type="button" class="btn btn-primary btn_crea" title="{{ __('Copier') }}">
                                            {{ __("Copier le lien CSS et JS") }}
                                        </button>
                                    </div>
                                    <!-- Lien du style à utiliser -->
                                    <div class="code-display" id="css-link">
                                        <xmp><link href="{{ URL::asset('css/themes/menu/all-themes.css') }}" rel="stylesheet"></xmp>
                                        <xmp><script type="application/javascript" src="{{ URL::asset('js/usage/menu_script.js') }}"></script></xmp>
                                    </div>
                                    <h3 class="creator-panel__title mt-5 mb-4">{{ __("Voici le code brut pour votre menu: copiez le où vous le souhaitez, sans le modifier !") }}</h3>
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
                    </div>
                </div>
            </div>
        </div>

        @if (Auth::check())

        <!-- Actions importantes sur le projet -->
        <div class="project-action row edit-project-action col-12 my-3" role="region" aria-labelledby="form_actions">
            
            <form class="form_btn-delete-def" action="{{ route('content.destroy', ['content'=>$content]) }}" method="POST">
                @csrf
                @method('DELETE')
                <button type="submit" value="" class="shadow-box btn-delete-def btn btn-danger" onclick="return confirm('{{ __('Voulez vous vraiment supprimer cet élément ?') }}')" data-toggle="tooltip" title="Supprimer ce projet">
                    <div class="crea-item__btns__icon btn--danger">
                        <i class="fa fa-times"></i>
                    </div>
                    <p>{{ __('Supprimer') }}</p>
                </button>       
            </form>

            <button title="{{ __('Annuler les modifications') }}" type="button" class="btn btn-gris-annule btn-form-final" id="btn-cancel-project" aria-label="{{ __('Annuler les modifications') }}" onclick="if(confirm('{{ __('Voulez vous vraiment quitter sans sauvegarder ?') }}')){ window.location.href = '{{ route('content.show', ['content'=>$content]) }}' }">
                <div class="btn-crea__icon"><i class="fa fa-trash-alt"></i></div>
                <p>{{ __('Annuler les modifications') }}</p>
            </button>

            <button title="{{ __('Sauvegarder ce projet') }}" type="submit" form="edit-menu" class="btn btn-form-final btn-success btn-crea" id="btn-update-project" title="{{ __('Sauvegarder ce projet') }}">
                <div class="btn-crea__icon"><i class="fa fa-save"></i></div>
                <p>
                    {{ __('Sauvegarder ce projet') }}
                </p>
            </button>
            
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

<div class="modal fade import-data" tabindex="-1" aria-live="assertive" aria-atomic="true" role="dialog" id="importData" aria-labelledby="importDataTitle" aria-hidden="true">
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

<script type="application/javascript" src="{{ URL::asset('js/usage/menu_script.js') }}"></script>
<script type="application/javascript" src="{{ URL::asset('js/components/menu.js') }}"></script>
<script type="application/javascript" src="{{ URL::asset('js/components/import_data_menu.js') }}"></script>
{{-- Script PRETTIFY + skin --}}
<script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js?autorun=true&amp;skin=sunburst"></script>

@endsection