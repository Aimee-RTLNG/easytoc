
@extends('layouts/app')

@section('titre') {{ __('Formulaire - EasyToC') }} @endsection

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
        <div class="panel-body">
                <!-- Display Validation Errors -->
                @include('common.errors')
        
                @guest
                    <form id="full-form-post" action="{{ route('content.store') }}" method="post">
                        @csrf
                        <input type="hidden" name="type_id" value="1">
                        <input type="text" name="title" placeholder="title" value="{{ old('title') }}">
                        <textarea type="text" name="description" placeholder="description">{{ old('description') }}</textarea>
                        <textarea type="text" name="html" placeholder="html">{{ old('html') }}</textarea>
                    </form>

                @else 
          
                <!-- interface d'initialisation du projet -->
                <h3 id="interface-heading" class="mb-3 font-weight-bold">Interface d'initialisation du projet</h3>
                <div class="creator-panel justify-content-between d-flex" role="region" aria-labelledby="interface-heading">
                    <!-- infos du projet -->
                    <div class="info-panel col-5 my-4" role="region" aria-labelledby="form_infos">
                        <h6 id="form_infos" class="mb-3 font-weight-bold">Informations basiques concernant le formulaire</h6>
                        <form id="full-form-post" action="{{ route('content.store') }}" method="post">
                            @csrf
                            <input type="hidden" name="type_id" value="1">
                            <input type="hidden" name="user_id" value="{{ auth()->user()->id }}">
                            <div class="form-group" role="region">
                                <label for="exampleFormControlInput1">Titre</label>
                                <input type="text" name="title" placeholder="title" class="form-control" id="exampleFormControlInput1" maxlength="30"
                                    placeholder="Titre" value="{{ old('title') }}">
                                <p id="chara-title-remains"></p>
                            </div>
                            <div class="form-group" role="region">
                                <label for="exampleFormControlTextarea1">Description</label>
                                <textarea type="text" name="description" placeholder="description" class="form-control" id="exampleFormControlTextarea1" rows="3"
                                    maxlength="200"></textarea>
                                <p id="chara-desc-remains"></p>
                            </div>
                            <textarea type="text" name="html" placeholder="html" id="raw-code" class="hidden" aria-hidden="true"></textarea> <!-- Code en brut (non formatté) -->
                            <button type="submit" class="btn btn-success" id="btn-save-project" aria-label="Sauvegarder ce projet">Sauvegarder ce
                        projet</button>
                        </form>
                    </div>

                    <!-- actions d'initialisation -->
                    <div class="actions-panel col-2 my-5 flex-column justify-content-around align-items-center m-4"
                        role="region" aria-labelledby="form_tools">
                        <h6 id="form_tools" class="mb-3 font-weight-bold">Outils d'aide à la création</h6>
                        <div class="d-flex flex-column justify-content-center align-items-center" role="complementary">
                            <button type="button" class="btn btn-dark">Importer des données</button>
                            <button type="button" class="btn btn-dark">Générer un exemple</button>
                        </div>
                    </div>

                    <!-- templates -->
                    <div class="template-panel col-3 my-5 justify-content-center align-items-center" role="region"
                        aria-labelledby="form_themes">
                        <h6 id="form_themes" class="mb-3 font-weight-bold">Modèles de formulaire</h6>
                        <div class="m-4 d-flex justify-content-around align-items-center" role="complementary">
                            <div>
                                <div>
                                    <input type="radio" value="" id="radio01" name="radio01">
                                    <label for="radio01">Thème bleu</label>
                                </div>
                                <div>
                                    <input type="radio" value="" id="radio02" name="radio02">
                                    <label for="radio02">Thème blanc</label>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <input type="radio" value="" id="radio03" name="radio03">
                                    <label for="radio03">Thème vert</label>
                                </div>
                                <div>
                                    <input type="radio" value="" id="radio04" name="radio04">
                                    <label for="radio04">Thème rouge</label>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <input type="radio" value="" id="radio05" name="radio05">
                                    <label for="radio05">Thème noir</label>
                                </div>
                                <div>
                                    <input type="radio" value="" id="radio06" name="radio06">
                                    <label for="radio06">Thème gris</label>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- interface d'interaction avec le projet -->
                <div class="creator-interfaces d-flex justify-content-around" role="section" aria-label="Actions sur l'élement">

                    <div id="content-interface" class="col-11 border bg-white rounded mt-3 p-3" role="section"
                        aria-label="Actions sur l'élement">
                        <!-- navigation entre les panneaux -->

                        <div class="d-flex justify-content-around mb-2" role="region">
                            <div class="col-4" role="region">
                                <label for="form-creator-title">Titre du formulaire</label>
                                <input name="form-creator-title" id="form-creator-title" placeholder="Titre du formulaire"
                                    class="form-control" size="30" value="Titre du formulaire" />
                            </div>
                            <div class="col-4" role="region">
                                <label for="form-creator-link">Lien de traitement des données</label>
                                <input name="form-creator-link" id="form-creator-link" placeholder="Lien du formulaire"
                                    class="form-control" size="30" />
                            </div>
                            <div class="col-2 d-flex align-items-center justify-content-center" role="region">
                                <input type="checkbox" class="add-element type-special" value="" id="reset-button"
                                    name="reset-button">
                                <label for="reset-button" class="ml-3">Option de réinitialisation</label>
                            </div>
                            <div class="col-2 d-flex align-items-center justify-content-center" role="region">
                                <label for="form-creator-method" class="mr-3">Méthode</label>
                                <select name="form-creator-method" id="form-creator-method">
                                    <option value="get">GET</option>
                                    <option value="post">POST</option>
                                </select>
                            </div>
                        </div>

                        <form id="testForm" class="mb-2" role="list">
                            <div role="section" aria-labelledby="form_actions_element">
                                <h6 id="form_actions_element" class="mb-3 font-weight-bold">Actions sur l'élement</h6>
                                <div role="section" aria-label="Actions sur l'élement">
                                    <input class="btn btn-light" type="button" aria-label="Couper" value="Couper"
                                        id="element_cut" role="listitem">
                                    <input class="btn btn-light" type="button" aria-label="Copier" value="Copier"
                                        id="element_copy" role="listitem">
                                    <input class="btn btn-light" type="button" aria-label="Coller" value="Coller"
                                        id="element_paste" role="listitem">
                                    <input class="btn btn-light" type="button" aria-label="Supprimer l'élement"
                                        value="Supprimer l'élement" id="element_delete" role="listitem">
                                    <input class="btn btn-light" type="button" aria-label="Annuler" value="Annuler"
                                        id="element_undo" role="listitem">
                                    <input class="btn btn-light" type="button" aria-label="Rétablir" value="Rétablir"
                                        id="element_redo" role="listitem">
                                </div>
                            </div>
                            <div role="section" aria-labelledby="form_add_static">
                                <h6 id="form_add_static" class="mb-3 font-weight-bold">Ajouter un élément statique</h6>
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
                            <div role="section" aria-labelledby="form_add_question">
                                <h6 id="form_add_question" class="mb-3 font-weight-bold">Ajouter une question</h6>
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
                        </form>

                        <nav>
                            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                <a class="nav-item nav-link active" id="nav-blueprint-tab" data-toggle="tab"
                                    href="#nav-blueprint" role="tab" aria-controls="nav-blueprint"
                                    aria-selected="true">Blueprint</a>
                                <!--
                                    <a class="nav-item nav-link" id="nav-preview-tab" data-toggle="tab" href="#nav-preview" role="tab"
                                        aria-controls="nav-preview" aria-selected="false">Preview</a>
                                    -->
                                <a class="nav-item nav-link" id="nav-code-tab" data-toggle="tab" href="#nav-code" role="tab"
                                    aria-controls="nav-code" aria-selected="false">Code</a>
                            </div>
                        </nav>


                        <!-- panneaux -->
                        <div class="tab-content" id="nav-tabContent" role="section">

                            <!-- panneau blueprint -->
                            <div class="tab-pane fade show active" id="nav-blueprint" role="tabpanel"
                                aria-labelledby="nav-blueprint-tab">
                                <div id="content-created-blueprint"
                                    class="content-panel border border-top-0 rounded-bottom p-4">
                                </div>
                            </div>

                            <!-- panneau code -->
                            <div class="tab-pane fade" id="nav-code" role="tabpanel" aria-labelledby="nav-code-tab">
                                <pre class="prettyprint content-panel" id="formatted-code"></pre> <!-- Code formatté -->
                            </div>

                        </div>
                    </div>

                    <div id="actions-interface" class="col-6 border bg-white rounded mt-3 p-3 hidden" role="section" >
                        <div>
                            <div class="d-flex justify-content-between flex-wrap" role="section">
                                <div class="col-4" role="section">
                                    <label for="elem-title">Intitulé de la question</label>
                                    <input name="elem-title" placeholder="Quelle est la question ?" class="form-control"
                                        size="25" />
                                </div>
                                <div class="col-3" role="section">
                                    <label for="elem-type">Type de réponse</label>
                                    <select name="elem-type" class="form-control">
                                        <option selected disabled>Type</option>
                                        <option value="email">Email</option>
                                        <option value="number">Nombre</option>
                                        <option value="date">Date</option>
                                        <option value="text">Texte</option>
                                    </select>
                                </div>
                                <div class="col-3" role="section">
                                    <label for="elem-length">Longueur max</label>
                                    <div class="d-flex justify-content-center align-items-center" role="section">
                                        <input type="number" name="elem-length" placeholder="15" class="form-control"
                                            size="2" />
                                        <a class="ml-2">caractères</a>
                                    </div>
                                </div>
                                <div class="col-2 d-flex align-items-center mt-4" role="section">
                                    <input type="checkbox" name="elem-required" class="mr-2" role="section">
                                    <label for="elem-required">Réponse obligatoire</label>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between flex-wrap" role="section">
                                <div class="col-4" role="section">
                                    <label for="elem-placeholder">Exemple de réponse</label>
                                    <input name="elem-placeholder" placeholder="Ceci est le placeholder" class="form-control"
                                        size="25" aria-label="Exemple de réponse" />
                                </div>
                                <div class="col-3" role="section">
                                    <label for="elem-name">Identifiant</label>
                                    <input name="elem-name" placeholder="couleur-ciel" class="form-control" size="25"
                                        aria-label="Identifiant" />
                                </div>
                                <div class="col-2 d-flex align-items-center mt-4" role="section">
                                    <button aria-label="Supprimer">Supprimer</button>
                                </div>
                            </div>
                            <div role="section" aria-labelledby="form_actions_text">
                                <h6 id="form_actions_text" class="mb-3 font-weight-bold">Mise en forme du texte</h6>
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
                    </div>
                </div>

                <!-- Actions importantes sur le projet -->
                <div class="project-action col-8 mx-auto mt-3 d-flex justify-content-between align-items-center" role="region"
                    aria-labelledby="form_actions">
                    <h6 id="form_actions" class="mb-3 font-weight-bold">Modèles de formulaire</h6>
                    <button type="button" class="btn btn-danger" aria-label="Annuler les modifications">Annuler les
                        modifications</button>
                        
                    <a href="#">Guide d'importation des données</a>
                    <a href="#">Guide d'utilisation du créateur</a>

                </div>

                    
                @endguest

            </div>
   </div>
@endsection