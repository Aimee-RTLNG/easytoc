<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>@yield('titre')</title>
    <link rel="stylesheet" href="{{asset(mix('css/app.css'))}}">
    </head>
    <body>
                <ul class="nav navbar-dark bg-dark">
                    <li class="nav-items"><a class="nav-link text-light" href="{{ route('home') }}">Accueil</a></li>
                    <li class="nav-items"><a class="nav-link text-light" href="{{ route('menu') }}">Créer un menu</a></li>
                    <li class="nav-items"><a class="nav-link text-light" href="{{ route('tableau') }}">Créer un tableau</a></li>
                    <li class="nav-items"><a class="nav-link text-light" href="{{ route('formulaire') }}">Créer un formulaire</a></li>
                    <li class="nav-items"><a class="nav-link text-light" href="{{ route('aide') }}">Aide</a></li>
                </ul>
                @yield('content')
                </div>

    <footer>
        <ul class="nav navbar-dark bg-dark">
            <li class="nav-items"><a class="nav-link text-light" href="{{ route('mentions_legales') }}">Mentions légales</a></li>
            <li class="nav-items"><a class="nav-link text-light" href="{{ route('cgu') }}">CGU</a></li>
            <li class="nav-items"><a class="nav-link text-light" href="{{ route('aide') }}">Aide</a></li>
        </ul>
    </footer>
        <script src="{{asset(mix('js/manifest.js'))}}" ></script>
        <script src="{{asset(mix('js/vendor.js'))}}" ></script>
        <script src="{{asset(mix('js/app.js'))}}" ></script>

    </body>
</html>
