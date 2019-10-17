<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>@yield('titre')</title>

        <!-- Favicon -->
        <link rel="icon" href="../favicon.ico" type="image/ico">

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
                    <!-- {{ config('app.name', 'Laravel') }} -->
                    <img src="./images/Logo-white.png" id="logo-nav"/>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                  <ul class="nav navbar-dark bg-dark">
                    <li class="nav-items"><a class="nav-link text-light" href="{{ route('home') }}">Accueil</a></li>
                    <li class="nav-items"><a class="nav-link text-light" href="{{ route('menu') }}">Créer un menu</a></li>
                    <li class="nav-items"><a class="nav-link text-light" href="{{ route('tableau') }}">Créer un tableau</a></li>
                    <li class="nav-items"><a class="nav-link text-light" href="{{ route('formulaire') }}">Créer un formulaire</a></li>
                    <li class="nav-items"><a class="nav-link text-light" href="{{ route('aide') }}">Aide</a></li>
                </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->
                        @guest
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                            </li>
                            @if (Route::has('register'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                                </li>
                            @endif
                        @else
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ Auth::user()->name }} <span class="caret"></span>
                                </a>

                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        {{ __('Logout') }}
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
