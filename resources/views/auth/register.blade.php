@extends('layouts.app')

@section('titre') {{ __('Inscription') }} - EasyToC @endsection

@section('content')
<div class="container">
    <div class="register">
        <div class="register__info">
            <div class="entete-title">
                <h2 class="register__title">{{ __('Inscription') }}</h2>
                <div class="register__under-title"></div>
            </div>
            <form class="register__form" method="POST" action="{{ route('register') }}">
                    @csrf
                   <div>
                        <div class="connect-network">
                            <a href="{{ route('provider_login','facebook') }}"><img src="./images/facebook_logo.png" class="connect-network__img">{{ __('S\'inscrire avec') }} Facebook</a>
                            <a href="{{ route('provider_login','google') }}"><img src="./images/google_logo.png" class="connect-network__img">{{ __('S\'inscrire avec') }} Google</a>
                        </div>
                        <p class="commentaire">{{ __('Tous les champs sont obligatoires') }}</p>
                   </div>
                    <div class="register__line">
                        <label for="name" class="form-label">{{ __('Identifiant') }}</label>
                        <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>
                        @error('name')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
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

                    <div class="register__line register__line--mdp">
                        <div class="register__line--mdp__item">
                                <label for="password" class="form-label">{{ __('Mot de passe') }}</label>
                                <div class="password-input d-flex">
                                    <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">
                                    <button type="button" class="btn-seepassword__icon btn-primary" aria-label="{{ __('Afficher/masquer le mot de passe en clair : cela va rendre votre mot de passe visible sur votre écran') }}" title="{{ __('Afficher/masquer le mot de passe en clair') }}">
                                        <i class="fas fa-eye" title="{{ __('Voir le mot de passe en clair') }}"></i>
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
                            </div>
        
                            <div class="register__line--mdp__item">
                                <label for="password-confirm" class="form-label">{{ __('Confirmation du mot de passe') }}</label>
                                <div class="password-input d-flex">
                                    <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                                    <button type="button" class="btn-seepassword__icon btn-primary" aria-label="{{ __('Afficher/masquer le mot de passe en clair : cela va rendre votre mot de passe visible sur votre écran') }}" title="{{ __('Afficher/masquer le mot de passe en clair') }}">
                                        <i class="fas fa-eye" title="{{ __('Voir le mot de passe en clair') }}"></i>
                                    </button>
                                </div>
                                <!-- ATTENTION : ne pas toucher à cette structure / ni classes, ni style -->
                                    <span class="warning-block" style="display: none">
                                        <strong>{{ __('La touche Majuscules est active') }}</strong>
                                    </span>
                                <!-- -->
                            </div>
                    </div>

                    <div class="register__check">
                        <div class="check-conditions">
                            <input type="checkbox" class="check" id="cgu" required>
                            <label class="check-conditions__txt" for="cgu">{{ __("J'ai lu et j'accepte les") }} <a href="{{ route('cgu') }}">{{ __("Conditions générales d'utilisation du site") }}</a></label>
                        </div>
                        <div class="register__form-final">
                            <button type="submit" class="btn btn-primary btn-form-final">
                                <i class="fas fa-arrow-right"></i>
                                <p>{{ __('S\'inscrire') }}</p>
                            </button>
                            <a class="link-account-ok" href="{{ route('login') }}">
                                <i class="fas fa-arrow-right"></i> {{ __('J\'ai déjà un compte') }}
                            </a>
                        </div> 
                    </div>
              
                </div>
                <div class="register__illu" style="background-image: url('./images/register-fond.jpg');">
                </div>
            </div>
        </div>
    </div>
</div> 
@endsection
