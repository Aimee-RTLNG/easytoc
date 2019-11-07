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
        <link href="https://fonts.googleapis.com/css?family=Expletus+Sans:400,400i,500,500i,600,600i,700,700i&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous">        <!-- Style -->
        <link rel="stylesheet" href="{{asset(mix('css/app.css'))}}">
        
    </head>
    <body>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark shadow-sm">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/') }}">
                    <img src="{{ URL::asset('images/Logo-white.png') }}" id="logo-nav"/>
                </a>
                {{-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}"> --}}
                    {{-- <span class="navbar-toggler-icon"></span> --}}
                {{-- </button> --}}

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                  <ul class="nav navbar-dark bg-dark main-menu">
                    <li class="nav-items"><a class="nav-link text-light" href="{{ route('home') }}">{{ __('Accueil') }}</a></li>
                    <li class="nav-items"><a class="nav-link text-light" href="{{ route('menu') }}">{{ __('Créer un menu') }}</a></li>
                    <li class="nav-items"><a class="nav-link text-light" href="{{ route('tableau') }}">{{ __('Créer un tableau') }}</a></li>
                    <li class="nav-items"><a class="nav-link text-light" href="{{ route('formulaire') }}">{{ __('Créer un formulaire') }}</a></li>
                    <li class="nav-items"><a class="nav-link text-light" href="{{ route('aide') }}">{{ __('Aide') }}</a></li>
                </ul>

                    <ul class="navbar-nav mr-auto text-light ml-3 menu-lang">
                        <a class="mr-2 text-light" href="{{ route('setlang', 'en') }}">{{ __('EN') }}</a>
                        <a class="text-light" href="{{ route('setlang', 'fr') }}">{{ __('FR') }}</a>
                    </ul>
                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->
                        @guest
                            @if (Route::has('register'))
                                <li class="nav-item btn-connect ">
                                    <div class="btn-connect__icon"><i class="fas fa-arrow-right"></i></div>
                                    <a class=" btn-connect__link" href="{{ route('register') }}">{{ __('Inscription') }}</a>
                                </li>
                            @endif
                            <li class="nav-item btn-connect btn-connect--two">
                                <div class="btn-connect__icon"><i class="fas fa-pen"></i></div>
                                <a class=" btn-connect__link" href="{{ route('login') }}">{{ __('Connexion') }}</a>
                            </li>
                        @else

                        {{-- {{ Auth::user()->name }} --}}
                            <li class="nav-item btn-connect">
                                <div class="btn-connect__icon"><i class="far fa-user"></i></div>
                                <a class=" btn-connect__link" href="{{ route('profile.view', auth()->user()) }}">{{ __('Mon compte') }}</a>
                            </li>
                            <li class="nav-item btn-connect btn-connect--two">
                                <div class="btn-connect__icon"><i class="fas fa-times"></i></i></div>
                                <a class=" btn-connect__link" href="{{ route('logout') }}"
                                onclick="event.preventDefault();
                                              document.getElementById('logout-form').submit();">
                                 {{ __('Déconnexion') }}
                             </a>
                            </li>
                            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                @csrf
                            </form>
                        @endguest
                    </ul>
                </div>
            </div>
        </nav>

        @yield('content')

    <footer class="bg-dark footer">
       <div class="container">
            <div class="row footer-cont">
                <div class="col-md-6 footer__info">
                    <h3 class="footer-title">{{ __('Besoin d\'aide ?') }}</h3>
                    <p  class="footer-txt">Vous pouvez retrouver nos tutoriels sur la page Aide</p>
                </div>
                <div class="col-md-6 footer__info-2 footer__info">
                    <h3 class="footer-title">{{ __('Contact') }}</h3>
                    <p  class="footer-txt">adresse@mail.fr / 06 88 45 12 32</p>
                </div>
                <div class="col-12 menu-footer">
                    <ul class="nav navbar-dark ">
                        <li class="nav-items"><a class="nav-link text-light" href="{{ route('mentions_legales') }}">{{ __('Mentions légales') }}</a></li>
                        <li class="nav-items"><a class="nav-link text-light" href="{{ route('cgu') }}">{{ __('Conditions générales d\'utilisation') }}</a></li>
                        <li class="nav-items"><a class="nav-link text-light" href="{{ route('aide') }}">{{ __('Aide') }}</a></li>
                        <li class="nav-items"><a class="nav-link text-light" >Copyright 2019</a></li>
                    </ul>
                </div>
            </div>
       </div>
    </footer>

        <script src="{{asset(mix('js/manifest.js'))}}" ></script>
        <script src="{{asset(mix('js/vendor.js'))}}" ></script>
        <script src="{{asset(mix('js/app.js'))}}" ></script>

    </body>
</html>
