
@extends('layouts/app')

@section('titre') {{ __('Aide - EasyToC') }} @endsection

@section('content')
    <div class="container">
        <div class="entete">
            <h2 class="entete__title">{{ __('Aide') }}</h2>
            <div class="entete__under"></div>

            <div id="formcreator">

                <h3>
                    {{ __('Générateur de formulaire') }}
                </h3>

                <div id="formuse">
                    <!-- ANCHOR Ajouter un élément -->
                    <h4>
                        {{ __('Ajouter un élément') }}
                    </h4>
                        <p>Bla bla</p>
                    <!-- ANCHOR Modifier un élément -->
                    <h4>
                        {{ __('Modifier un élément') }}
                    </h4>
                        <p>Bla bla</p>
                        <!-- ANCHOR Styliser le texte -->
                        <h5>
                            {{ __('Styliser le texte') }}
                        </h5>
                        <p>Pour styliser du texte, sélectionner le avant puis cliquez sur le bouton associé au style souhaité.</p>
                    <!-- ANCHOR Déplacement un élément -->
                    <h4>
                        {{ __('Déplacer un élément') }}
                    </h4>
                        <p>Bla bla</p>
                    <!-- ANCHOR Supprimer un élément -->
                    <h4>
                        {{ __('Supprimer un élément') }}
                    </h4>
                        <p>Pour supprimer un élément, il vous suffit de le sélectionner et de cliquer sur un des doux boutons suivants :</p>
                        <ul>
                            <li>Le bouton avec l'îcone de poubelle sur la droite de l'élément</li>
                            <-- IMAGE -->
                            <li>Le bouton Supprimer l'élément dans les options d'éléments, situés en bas du formulaire.</li>
                            <-- IMAGE -->
                        </ul>
                    <!-- ANCHOR Raccourcis clavier -->
                    <h4>
                        {{ __('Raccourcis clavier') }}
                    </h4>
                        <p>Lorsque vous avez sélectionné un élément, vous avez la possibilité d'effectuer plusieurs actions via des raccourcis claviers :</p>
                        <ul>
                            <li>Supprimer l'élément avec la touche T (trash)</li>
                            <li>Déplacer l'élément vers le haut avec la touche U (up)</li>
                            <li>Déplacer l'élément vers le bas avec la touche D (down)</li>
                        </ul>
                        <p>Vous pouvez également annuler les modifications ou sauvegarder votre travail avec les touches C (cancel) et S (save).</p>
                        <p>Si vous utilisez le raccourci clavier pour annuler les modifications, un message de confirmation apparaitra pour éviter toute mauvaise manipulation.</p>
                </div>

                <div id="formdata">
                    <!-- ANCHOR Importer un formulaire-->
                    <h4>
                        {{ __('Importer un formulaire') }}
                    </h4>
                    <p>Bla bla</p>
                        <!-- ANCHOR Modèle de données -->
                        <h5>
                            {{ __('Modèle de données') }}
                        </h5>
                        <p>Bla bla</p>
                </div>

                <div id="formcode">
                    <h4>
                        {{ __('Utiliser le code généré') }}
                    </h4>
                    <p>Bla bla</p>
                        <!-- ANCHOR Modèle de données -->
                        <h5>
                            {{ __('Où le placer ?') }}
                        </h5>
                        <p>Bla bla</p>
                </div>

            </div>

        </div>
    </div>
@endsection