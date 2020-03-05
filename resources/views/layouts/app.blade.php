<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title> @yield('titre') </title>

        <!-- Favicon -->
        <link rel="icon" href="{{ URL::asset('favicon.ico') }}" type="image/ico">

        <!-- Fonts -->
        <link rel="dns-prefetch" href="//fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i&display=swap" rel="stylesheet">
        {{-- <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet"> --}}
        <link href="https://fonts.googleapis.com/css?family=Expletus+Sans:400,400i,500,500i,600,600i,700,700i&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="{{asset(mix('css/app.css'))}}">
        <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
         
        {{-- SEO --}}
        <meta name="title" content="EasytoC - Générateur de menus, tableaux et formulaires">
        <meta name="description" content="EasytoC est le nouveau générateur de contenu web ! Il vous permet de créer vous même des menus, tableaux et formulaires accessibles.">
        <meta name="keywords" content="accessibilité, création, génération, tableau, menu, formulaire, accessible, compte, sauvegarde, facile, pratique">
        <meta name="robots" content="index, follow">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="language" content="French">
        <meta name="author" content="Aimee RITLENG, Louise MATT, Pierre BOULANGER">

        <!-- page specific style -->
        @yield('pagespecificstyles')

    </head>
    <body>
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
                <div class="container">
                    <h1>
                        <a class="navbar-brand" href="{{ url('/') }}" title="EasyToC">
                            <img src="{{ URL::asset('images/Logo-white.png') }}" id="logo-nav"/>
                        </a>
                    </h1>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}" title="{{ __('Menu de navigation') }}">
                        <div class="bars" id="bars">
                            <div class="bars__line bars--first"></div>
                            <div class="bars__line bars--snd"></div>
                            <div class="bars__line bars--last"></div>
                        </div>
                    </button>
    
                    <div class="collapse navbar-collapse justify-content-between row" id="navbarSupportedContent">
                            <!-- Left Side Of Navbar -->
                        <ul class="nav navbar-dark bg-dark main-menu col-lg-7 m-0 p-0">
                            <li class="nav-items"><a class="nav-link text-light" href="{{ route('home') }}" title="{{ __('Accéder à l\'accueil') }}"><span>{{ __('Accueil') }}</span></a></li>
                            <li class="nav-items"><a class="nav-link text-light" href="{{ route('menu') }}" title="{{ __('Créer un menu') }}"><span>{{ __('Créer un menu') }}</span></a></li>
                            <li class="nav-items"><a class="nav-link text-light" href="{{ route('tableau') }}" title="{{ __('Créer un tableau') }}"><span>{{ __('Créer un tableau') }}</span></a></li>
                            <li class="nav-items"><a class="nav-link text-light" href="{{ route('formulaire') }}" title="{{ __('Créer un formulaire') }}"><span>{{ __('Créer un formulaire') }}</span></a></li>
                            <li class="nav-items"><a class="nav-link text-light" href="{{ route('aide') }}" title="{{ __('Accéder à la page d\'aide') }}"><span>{{ __('Aide') }}</span></a></li>
                        </ul>
                        <ul class="navbar-nav text-light menu-lang col mr-3 p-0">
                            <a class="text-light link-flag" href="{{ route('setlang', 'en') }}" title="{{ __('Passer en français') }}"><div class="flag flag-en" style="background-image: url({{ URL::asset('images/en.png') }})"></div> {{ __('EN') }}</a>
                            <a class="text-light link-flag" href="{{ route('setlang', 'fr') }}" title="{{ __('Passer en anglais') }}"><div class="flag flag-fr" style="background-image: url({{ URL::asset('images/fr.png') }})"></div> {{ __('FR') }}</a>
                        </ul>
                        <!-- Right Side Of Navbar -->
                        <ul class="navbar-nav menu-connect col m-0">
                            <!-- Authentication Links -->
                            @guest
                                @if (Route::has('register'))
                                    <li class="nav-item">
                                        <a class="btn-connect" href="{{ route('register') }}" title="{{ __('Page d\'inscription') }}">
                                            <div class="btn-connect__icon"><i class="fas fa-pen"></i></div>
                                            <p class=" btn-connect__link">{{ __('Inscription') }}</p>
                                        </a>
                                    </li>
                                @endif
                                <li class="nav-item btn-connect--two">
                                    <a class="btn-connect"  href="{{ route('login') }}" title="{{ __('Page de connexion') }}">
                                        <div class="btn-connect__icon"><i class="fas fa-arrow-right"></i></div>
                                        <p class=" btn-connect__link">{{ __('Connexion') }}</p>
                                    </a>
                                </li>
                            @else
                                <li class="nav-item">
                                    <a class=" btn-connect" href="{{ route('profile.view', auth()->user()) }}" title="{{ __('Accéder à mon compte') }}">
                                        <div class="btn-connect__icon"><i class="fas fa-user-circle"></i></div>
                                        <p class="btn-connect__link" >{{ __('Mon compte') }}</p>
                                    </a>
                                </li>
                                <li class="nav-item btn-connect--two">
                                    <a class="btn-connect" href="{{ route('logout') }}" title="{{ __('Se déconnecter') }}"
                                    onclick="event.preventDefault();
                                                  document.getElementById('logout-form').submit();">
                                        <div class="btn-connect__icon"><i class="fas fa-times"></i></i></div>
                                         <p class="btn-connect__link">{{ __('Déconnexion') }}</p>
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
        </header>

        @yield('content')

    <footer class="bg-dark footer">
       <div class="container">
            <div class="row footer-cont">
                <div class="col-md-6 footer__info">
                    <h3 class="footer-title">{{ __('Besoin d\'aide ?') }}</h3>
                    <p  class="footer-txt">Vous pouvez retrouver nos tutoriels sur la page <a class="link-help" href="{{ route('aide') }}" title="{{ __('Accéder à la page d\'aide') }}">{{ __('Aide') }}</a></p>
                </div>
                <div class="col-md-6 footer__info-2 footer__info">
                    <h3 class="footer-title">{{ __('Contact') }}</h3>
                    <p  class="footer-txt"><a class="link-footer" href="mailto:easytoc@outlook.com" title="{{ __('Envoyer un mail au Webmaster') }}">easytoc@outlook.com</a></p>
                </div>
                <div class="col-12 menu-footer">
                    <ul class="nav navbar-dark ">
                        <li class="nav-items"><a class="nav-link text-light" href="{{ route('mentions_legales') }}" title="{{ __('Accéder à la page des mentions légales') }}">{{ __('Mentions légales') }}</a></li>
                        <li class="nav-items"><a class="nav-link text-light" href="{{ route('cgu') }}" title="{{ __('Accéder à la page des CGU') }}">{{ __('CGU') }}</a></li>
                        <li class="nav-items"><a class="nav-link text-light" href="{{ route('aide') }}" title="{{ __('Accéder à la page d\'aide') }}">{{ __('Aide') }}</a></li>
                        <li class="nav-items"><a class="nav-link" >Copyright - Tous droits réservés : 2019</a></li>
                    </ul>
                </div>
            </div>
       </div>
    </footer>
    
        <script>
            var baseUrl = "{{ URL::asset('/') }}";
        </script>

        <script src="{{asset(mix('js/manifest.js'))}}" ></script>
        <script src="{{asset(mix('js/vendor.js'))}}" ></script>
        <script src="{{asset(mix('js/app.js'))}}" ></script>
        <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>

        <!-- page specific scripts -->
        @yield('pagespecificscripts')

    </body>
</html>
