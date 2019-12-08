@extends('layouts.app')

@section('titre') {{ __('Connexion') }} - EasyToC @endsection

@section('content')
<div class="container">
        <div class="register connexion">
                <div class="register__info">
                    <div class="entete-title">
                        <h2 class="register__title">{{ __('Connexion') }}</h2>
                        <div class="register__under-title"></div>
                    </div>
                    <form class="register__form" method="POST" action="{{ route('login') }}">
                            @csrf
                           <div>
                                <div class="connect-network connect-network--connexion">
                                    <a href="{{ route('provider_login','facebook') }}"><img src="./images/facebook_logo.png" class="connect-network__img">{{ __('Connexion') }} Facebook</a>
                                    <a href="{{ route('provider_login','google') }}"><img src="./images/google_logo.png" class="connect-network__img">{{ __('Connexion') }} Google</a>
                                </div>
                                <p class="commentaire">Tous les champs sont obligatoires</p>
                           </div>
        
                            <div class="register__line">
                                <label for="email" class="form-label">{{ __('Adresse e-mail') }}</label>
                                <input id="email" type="email" class="form-control form-control-mail @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">
                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>

                            <div class="register__line">
                                <label for="password" class="form-label">{{ __('Mot de passe') }}</label>
                                <div class="password-input d-flex">
                                    <input id="password" type="password" class="form-control form-control-mail @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">
                                    <button type="button" class="btn-seepassword__icon btn-primary" aria-label="{{ __('Afficher/masquer le mot de passe en clair : cela va rendre votre mot de passe visible sur votre écran') }}" title="{{ __('Afficher/masquer le mot de passe en clair') }}">
                                        <i class="far fa-eye"></i>
                                    </button>
                                </div>
                                <!-- ATTENTION : ne pas toucher à cette structure / ni classes, ni style -->
                                    <span class="warning-block" style="display: none">
                                        <strong>{{ __('La touche Majuscules est active') }}</strong>
                                    </span>
                                <!-- -->
                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                                @if (Route::has('password.request'))
                                    <a class="link-form link-mdp-forgot" href="{{ route('password.request') }}">
                                        {{ __('J\'ai oublié mon mot de passe') }}
                                    </a>
                                @endif
                            </div>

                            <div class="register__check">
                                <div class="check-conditions me-forever">
                                   <div>
                                        <input type="checkbox" class="check" id="remember_me">
                                        <label class="check-conditions__txt" for="remember_me">{{ __('Se souvenir de moi') }}</label>
                                   </div>
                                   <a class="link-account-ok" href="{{ route('register') }}">
                                        <i class="fas fa-arrow-right"></i> {{ __('Je n\'ai pas encore de compte') }}
                                    </a>
                                </div>
                                <div class="register__form-final">
                                    <button type="submit" class="btn btn-primary btn-form-final">
                                        <i class="fas fa-arrow-right"></i>
                                        <p>{{ __('Se connecter') }}</p>
                                    </button>
                                </div> 
                            </div>

                        </form>
                </div>
                <div class="register__illu" style="background-image: url('./images/hand.jpg');">
        
                </div>
            </div>
    {{-- <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Connexion') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('login') }}">
                        @csrf
                        <div class="form-group row mb-0">
                        <div class="col-md-8 offset-md-4 mb-3">
                                <a href="{{ route('provider_login','google') }}"><img src="./images/google_logo.png" style="width: 30px; height: 30px; margin: 10px">{{ __('Se connecter avec') }} Google</a>
                            </div>
                            <div class="col-md-8 offset-md-4 mb-3">
                                <a href="{{ route('provider_login','facebook') }}"><img src="./images/facebook_logo.png" style="width: 30px; height: 30px; margin: 10px">{{ __('Se connecter avec') }} Facebook</a>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('Adresse e-mail') }}</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Mot de passe') }}</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-6 offset-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                                    <label class="form-check-label" for="remember">
                                        {{ __('Se souvenir de moi') }}
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Se connecter') }}
                                </button>

                                @if (Route::has('password.request'))
                                    <a class="btn btn-link" href="{{ route('password.request') }}">
                                        {{ __('J\'ai oublié mon mot de passe') }}
                                    </a>
                                @endif
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div> --}}
</div>
@endsection
