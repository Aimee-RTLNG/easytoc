<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        {{-- SEO --}}
        <meta name="title" content="EasytoC - Générateur de menus, tableaux et formulaires">
        <meta name="description" content="EasyToC vous permet de générer des menus, tableaux et formulaires en un code html accessible">

        <meta property="og:title" content="EasyToC un générateur de menus, tableaux et formulaires accessibles." />
        <meta property="og:description" content="Pour certaines personnes, l’accès aux ressources web est difficile et pénible .Easy to C peut vous aider à rendre vos sites accessibles, peu importe votre niveau avec le code."" />
        <meta property="og:image" content="{{ URL::asset('images/capture_easytoc.jpg') }}" />
        <meta property="og:site_name" content="EasyToC" />
        <link rel="canonical" href="{{url()->current()}}" />

        <meta property="twitter:title" content="EasyToC, un générateur de formulaires, tableaux et menus dans en code HTML accessible." />
        <meta property="twitter:description" content="EasyToC générateur de menus, tableaux et formulaire" />
        <meta property="twitter:image" content="{{ URL::asset('images/capture_easytoc.jpg') }}" />

        <meta property="twitter:site" content="EasyToC" />
        <meta property="twitter:url" content="{{url()->current()}}" />
        <meta name="application-name" content="EasyToC" />

        <meta name="keywords" content="accessibilité, création, génération, tableau, menu, formulaire, accessible, compte, sauvegarde, facile, pratique">
        <meta name="robots" content="index, follow">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="language" content="French">
        <meta name="author" content="Aimee RITLENG, Louise MATT, Pierre BOULANGER">

        <title> @yield('titre') </title>

        <!-- Favicon -->
        <link rel="icon" href="{{ URL::asset('favicon.ico') }}" type="image/ico">

        <!-- Fonts -->
        <!-- <link rel="dns-prefetch" href="//fonts.gstatic.com"> -->
        <link rel="stylesheet" href="{{asset(mix('css/app.css'))}}">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

        <!-- page specific style -->
        @yield('pagespecificstyles')

        <script type="text/javascript" src="{{ URL::asset('/tarteaucitron/tarteaucitron.js') }}"></script>

        <script type="text/javascript">
			tarteaucitron.init({
			  "privacyUrl": "", /* Privacy policy url */
			  "cookieName": "tarteaucitron", /* Cookie name */
			  "orientation": "bottom", /* Banner position (top - bottom) */
			  "showAlertSmall": false, /* Show the small banner on bottom right */
			  "cookieslist": true, /* Show the cookie list */
			  "adblocker": false, /* Show a Warning if an adblocker is detected */
			  "AcceptAllCta" : true, /* Show the accept all button when highPrivacy on */
			  "highPrivacy": false, /* Disable auto consent */
			  "handleBrowserDNTRequest": false, /* If Do Not Track == 1, disallow all */
			  "removeCredit": false, /* Remove credit link */
			  "moreInfoLink": true, /* Show more info link */
			  "useExternalCss": false, /* If false, the tarteaucitron.css file will be loaded */
			  "readmoreLink": "/cookiespolicy" /* Change the default readmore link */
			});
		</script>

    </head>
    <body>
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
                <div class="container">
                    <a class="navbar-brand" href="{{ url('/') }}" title="EasyToC">
                        <img src="{{ URL::asset('images/Logo-white.webp') }}" id="logo-nav" alt="Easy to C"/>
                    </a>
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
                            <li class="nav-items"><a class="nav-link text-light" href="{{ route('menu') }}" title="{{ __('Accéder au générateur de menu accessible') }}"><span>{{ __('Créer un menu') }}</span></a></li>
                            <li class="nav-items"><a class="nav-link text-light" href="{{ route('tableau') }}" title="{{ __('Accéder au générateur de tableau accessible') }}"><span>{{ __('Créer un tableau') }}</span></a></li>
                            <li class="nav-items"><a class="nav-link text-light" href="{{ route('formulaire') }}" title="{{ __('Accéder au générateur de formulaire accessible') }}"><span>{{ __('Créer un formulaire') }}</span></a></li>
                            <li class="nav-items"><a class="nav-link text-light" href="{{ route('aide') }}" title="{{ __('Accéder à la page d\'aide') }}"><span>{{ __('Aide') }}</span></a></li>
                        </ul>
                        <ul class="navbar-nav text-light menu-lang col mr-3 p-0">
                            <a class="text-light link-flag" href="{{ route('setlang', 'en') }}" title="{{ __('Traduire le site en anglais') }}"><div class="flag flag-en" style="background-image: url({{ URL::asset('images/en.webp') }})"></div> {{ __('EN') }}</a>
                            <a class="text-light link-flag" href="{{ route('setlang', 'fr') }}" title="{{ __('Traduire le site en français') }}"><div class="flag flag-fr" style="background-image: url({{ URL::asset('images/fr.webp') }})"></div> {{ __('FR') }}</a>
                        </ul>
                        <!-- Right Side Of Navbar -->
                        <ul class="navbar-nav menu-connect col-lg-3 m-0">
                            <!-- Authentication Links -->
                            @guest
                                @if (Route::has('register'))
                                    <li class="nav-item">
                                        <a class="btn-connect" href="{{ route('register') }}" title="{{ __('Page d\'inscription') }}">
                                            <div class="btn-connect__icon"><i class="fa fa-pencil"></i></div>
                                            <p class=" btn-connect__link">{{ __('Inscription') }}</p>
                                        </a>
                                    </li>
                                @endif
                                <li class="nav-item btn-connect--two">
                                    <a class="btn-connect"  href="{{ route('login') }}" title="{{ __('Page de connexion') }}">
                                        <div class="btn-connect__icon"><i class="fa fa-arrow-right"></i></div>
                                        <p class=" btn-connect__link">{{ __('Connexion') }}</p>
                                    </a>
                                </li>
                            @else
                                <li class="nav-item">
                                    <a class=" btn-connect" href="{{ route('profile.view', auth()->user()) }}" title="{{ __('Accéder à mon compte') }}">
                                        <div class="btn-connect__icon"><i class="fa fa-user-circle"></i></div>
                                        <p class="btn-connect__link" >{{ __('Mon compte') }}</p>
                                    </a>
                                </li>
                                <li class="nav-item btn-connect--two">
                                    <a class="btn-connect" href="{{ route('logout') }}" title="{{ __('Se déconnecter') }}"
                                    onclick="event.preventDefault();
                                                  document.getElementById('logout-form').submit();">
                                        <div class="btn-connect__icon"><i class="fa fa-times"></i></i></div>
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
                    <h2 class="footer-title">{{ __('Besoin d\'aide ?') }}</h2>
                    <p  class="footer-txt">{{ __('Vous pouvez retrouver nos tutoriels sur la page') }} <a class="link-help" href="{{ route('aide') }}" title="{{ __('Accéder à la page d\'aide') }}">{{ __('Aide') }}</a></p>
                </div>
                <div class="col-md-6 footer__info-2 footer__info">
                    <h2 class="footer-title">{{ __('Contact') }}</h2>
                    <p  class="footer-txt"><a class="link-footer" href="mailto:easytoc@outlook.com" title="{{ __('Envoyer un mail au Webmaster') }}">easytoc@outlook.com</a></p>
                </div>
                <div class="col-12 menu-footer">
                    <ul class="nav navbar-dark ">
                        <li class="nav-items"><a class="nav-link text-light" href="{{ route('mentions_legales') }}" title="{{ __('Accéder à la page des mentions légales') }}">{{ __('Mentions légales') }}</a></li>
                        <li class="nav-items"><a class="nav-link text-light" href="{{ route('cgu') }}" title="{{ __('Accéder à la page des CGU') }}">{{ __('CGU') }}</a></li>
                        <li class="nav-items"><a class="nav-link text-light" href="{{ route('aide') }}" title="{{ __('Accéder à la page d\'aide') }}">{{ __('Aide') }}</a></li>
                        <li class="nav-items"><a class="nav-link" >Copyright / {{ __('Tous droits réservés') }} - 2020</a></li>
                    </ul>
                </div>
            </div>
       </div>
    </footer>

        <script type="text/javascript">
            (tarteaucitron.job = tarteaucitron.job || []).push('youtube');
        </script>
    
        <script>
            var baseUrl = "{{ URL::asset('/') }}";
        </script>

        <script src="{{asset(mix('js/manifest.js'))}}" ></script>
        <script src="{{asset(mix('js/vendor.js'))}}" ></script>
        <script src="{{asset(mix('js/app.js'))}}" ></script>

        <!-- page specific scripts -->
        @yield('pagespecificscripts')

    </body>
</html>
