
@extends('layouts/app')

@section('titre') {{ __('Aide - EasyToC') }} @endsection

@section('content')
    <div class="container">
        <div class="entete">
            <h2 class="entete__title">{{ __('Aide') }}</h2>
            <div class="entete__under"></div>
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