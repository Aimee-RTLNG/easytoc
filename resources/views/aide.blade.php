
@extends('layouts/app')

@section('titre') {{ __('Aide') }} - EasyToC @endsection

@section('content')
    <div class="container">
        <div class="entete">
            <h2 class="entete__title">{{ __('Aide') }}</h2>
            <div class="entete__under"></div>

            <p>Voici la page d'aide bla bla Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet consectetur unde modi beatae officia mollitia dolore provident voluptate doloremque quaerat asperiores non, omnis velit laudantium impedit? Dolore ea debitis eius. </p>
            <h3>
                {{ __('Sommaire') }}
            </h3>
            <ul>
                <li><a href="#tablecreator" title="{{ __('Guide d\'utilisation du générateur de tableau') }}">{{ __('Générateur de tableau') }}</a></li>
                <li><a href="#menucreator" title="{{ __('Guide d\'utilisation du générateur de menu') }}">{{ __('Générateur de menu') }}</a></li>
                <li><a href="#formcreator" title="{{ __('Guide d\'utilisation du générateur de formulaire') }}">{{ __('Générateur de formulaire') }}</a></li>
            </ul>

            <hr>    

            <div id="tablecreator">
                <h3>
                    {{ __('Générateur de tableau') }}
                </h3>
            </div>

            <hr>            
            
            <div id="menucreator">
                <h3>
                    {{ __('Générateur de menu') }}
                </h3>
            </div>

            <hr>

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
                        <p>Vous devez d'abord utiliser une des combinaisons de touches suivantes (différentes en fonction du navigateur) :</p>
                        <ul>
                            <li><b>CTRL + ALT + </b><i>[touche spécifique]</i></li>
                            <li><b>ALT + </b><i>[touche spécifique]</i> (Chrome)</li>
                            <li><b>ALT + SHIFT + </b><i>[touche spécifique]</i> (Firefox)</li>
                        </ul>
                        <p>Puis, en fonction de l'action souhaitée, remplacer la [touche spécifique] </p>
                        <ul>
                            <li>Supprimer l'élément avec la <b>touche spécifique T (trash)</b></li>
                            <li>Déplacer l'élément vers le haut avec la <b>touche spécifique U (up)</b></li>
                            <li>Déplacer l'élément vers le bas avec la <b>touche spécifique D (down)</b></li>
                        </ul>
                        <p>Vous pouvez également annuler les modifications ou sauvegarder votre travail avec les <b>touches C (cancel)</b> et <b>S (save)</b>.</p>
                        <p>Si vous utilisez le raccourci clavier pour annuler les modifications, un message de confirmation apparaitra pour éviter toute mauvaise manipulation.</p>
                        <img class="m-auto" src="{{ URL::asset('images/keyboard.png') }}" alt="{{ __('Les touches CTRL, ALT et SHIFT sont sur les extrémités de votre clavier') }}.">
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
        <hr>
        <div id="summary" class="my-5 d-flex flex-column">
                <h3>{{ __("Sommaire du guide") }}</h3>
                <a href="#creator">- {{ __("Comment utiliser l'espace de création Easy to C ?") }}</a>
                <a href="#data">- {{ __('Comment importer des données via Easy to C ?') }}</a>
                <a href="#use">- {{ __('Comment utiliser le code généré par Easy to C ?') }}</a>
        </div>
        <hr>
        <div id="creator" class="my-5 p-5">
            <h3>{{ __("Comment utiliser l'espace de création Easy to C ?") }}</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, ratione. Praesentium, delectus porro. Corrupti, ipsam reiciendis sed distinctio quia cupiditate minima in, quisquam quidem facere cumque eveniet aperiam vero voluptatum blanditiis alias. Repellat adipisci repellendus ipsum possimus eveniet dolorum et. Quos a impedit voluptates consectetur!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, ratione. Praesentium, delectus porro. Corrupti, ipsam reiciendis sed distinctio quia cupiditate minima in, quisquam quidem facere cumque eveniet aperiam vero voluptatum blanditiis alias. Repellat adipisci repellendus ipsum possimus eveniet dolorum et. Quos a impedit voluptates consectetur!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, ratione. Praesentium, delectus porro. Corrupti, ipsam reiciendis sed distinctio quia cupiditate minima in, quisquam quidem facere cumque eveniet aperiam vero voluptatum blanditiis alias. Repellat adipisci repellendus ipsum possimus eveniet dolorum et. Quos a impedit voluptates consectetur!</p>
            <h4>Menu</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, debitis ratione. Nostrum totam voluptatum saepe quos quisquam nulla in inventore.</p>
            <h4>Formulaire</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, debitis ratione. Nostrum totam voluptatum saepe quos quisquam nulla in inventore.</p>
            <h4>Tableau</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, debitis ratione. Nostrum totam voluptatum saepe quos quisquam nulla in inventore.</p>
        </div>
        <hr>
        <div id="data" class="my-5 p-5">
            <h3>{{ __('Comment importer des données via Easy to C ?') }}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio architecto aspernatur voluptatum. Ut minima vel inventore animi consequuntur sed, sequi molestiae quod beatae necessitatibus accusantium, harum dolorem perspiciatis quis voluptatibus!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio architecto aspernatur voluptatum. Ut minima vel inventore animi consequuntur sed, sequi molestiae quod beatae necessitatibus accusantium, harum dolorem perspiciatis quis voluptatibus!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio architecto aspernatur voluptatum. Ut minima vel inventore animi consequuntur sed, sequi molestiae quod beatae necessitatibus accusantium, harum dolorem perspiciatis quis voluptatibus!</p>
            <h4>Format</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, debitis ratione. Nostrum totam voluptatum saepe quos quisquam nulla in inventore.</p>
        </div>
        <hr>
        <div id="use" class="my-5 p-5">
            <h3>{{ __('Comment utiliser le code généré par Easy to C ?') }}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, accusamus. Veniam deleniti obcaecati iure veritatis asperiores, pariatur sunt! Asperiores vero earum odio architecto voluptatum similique. Iure cumque sunt quia cum sequi consequuntur molestiae quasi velit commodi dolorum dolorem, inventore fuga debitis non facilis quae mollitia autem et eos pariatur! Sunt!</p>
            <h4>Code généré</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, accusamus. Veniam deleniti obcaecati iure veritatis asperiores, pariatur sunt! Asperiores vero earum odio architecto voluptatum similique. Iure cumque sunt quia cum sequi consequuntur molestiae quasi velit commodi dolorum dolorem, inventore fuga debitis non facilis quae mollitia autem et eos pariatur! Sunt!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, accusamus. Veniam deleniti obcaecati iure veritatis asperiores, pariatur sunt! Asperiores vero earum odio architecto voluptatum similique. Iure cumque sunt quia cum sequi consequuntur molestiae quasi velit commodi dolorum dolorem, inventore fuga debitis non facilis quae mollitia autem et eos pariatur! Sunt!</p>
            <h4>Lien CSS</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, debitis ratione. Nostrum totam voluptatum saepe quos quisquam nulla in inventore.</p>
        </div>
    </div>
@endsection