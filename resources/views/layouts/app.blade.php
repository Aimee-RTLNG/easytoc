<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title> @yield('titre') </title>

        <!-- Favicon -->
        <link rel="icon" href="{{ URL::asset('favicon.ico') }}" type="image/ico">

        <!-- Fonts -->
        <link rel="dns-prefetch" href="//fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

        <!-- Style -->
        <link rel="stylesheet" href="{{asset(mix('css/app.css'))}}">
        
    </head>
    <body>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark shadow-sm">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/') }}">
                    <img src="{{ URL::asset('images/Logo-white.png') }}" id="logo-nav"/>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                  <ul class="nav navbar-dark bg-dark">
                    <li class="nav-items"><a class="nav-link text-light" href="{{ route('home') }}">{{ __('Accueil') }}</a></li>
                    <li class="nav-items"><a class="nav-link text-light" href="{{ route('menu') }}">{{ __('Créer un menu') }}</a></li>
                    <li class="nav-items"><a class="nav-link text-light" href="{{ route('tableau') }}">{{ __('Créer un tableau') }}</a></li>
                    <li class="nav-items"><a class="nav-link text-light" href="{{ route('formulaire') }}">{{ __('Créer un formulaire') }}</a></li>
                    <li class="nav-items"><a class="nav-link text-light" href="{{ route('aide') }}">{{ __('Aide') }}</a></li>
                </ul>

                    <ul class="navbar-nav mr-auto">
                        <a href="{{ route('setlang', 'en') }}">{{ __('EN') }}</a>
                        <a href="{{ route('setlang', 'fr') }}">{{ __('FR') }}</a>
                    </ul>
                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->
                        @guest
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('login') }}">{{ __('Connexion') }}</a>
                            </li>
                            @if (Route::has('register'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('register') }}">{{ __('Inscription') }}</a>
                                </li>
                            @endif
                        @else
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ Auth::user()->name }} <span class="caret"></span>
                                </a>

                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="{{ url('/profile') }}">
                                        {{ __('Profile') }}
                                    </a>
                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        {{ __('Déconnexion') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form>
                                </div>
                            </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </nav>

        @yield('content')

    <footer>
        <ul class="nav navbar-dark bg-dark">
            <li class="nav-items"><a class="nav-link text-light" href="{{ route('mentions_legales') }}">{{ __('Mentions légales') }}</a></li>
            <li class="nav-items"><a class="nav-link text-light" href="{{ route('cgu') }}">{{ __('Conditions générales d\'utilisation') }}</a></li>
            <li class="nav-items"><a class="nav-link text-light" href="{{ route('aide') }}">{{ __('Aide') }}</a></li>
        </ul>
    </footer>
        <script src="{{asset(mix('js/manifest.js'))}}" ></script>
        <script src="{{asset(mix('js/vendor.js'))}}" ></script>
        <script src="{{asset(mix('js/app.js'))}}" ></script>

    </body>
</html>
