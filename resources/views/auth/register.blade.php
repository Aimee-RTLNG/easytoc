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
                        <p class="commentaire">Tous les champs sont obligatoires</p>
                   </div>
                    <div class="register__line">
                        <label for="name" class="form-label">{{ __('Nom') }}</label>
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
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">
                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
        
                            <div class="register__line--mdp__item">
                                <label for="password-confirm" class="form-label">{{ __('Mot de passe (encore)') }}</label>
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                            </div>
                    </div>

                    <div class="register__check">
                        <div class="check-conditions">
                            <input type="checkbox" class="check" id="lire">
                            <label class="check-conditions__txt" for="lire">J'ai lu et j'accepte les <a href="">Conditions générales d'utilisation</a> du site</label>
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

                </form>
        </div>
        <div class="register__illu" style="background-image: url('./images/register-fond.jpg');">
        </div>
    </div>



















    {{-- <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Inscription') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('register') }}">
                        @csrf
                        <div class="col-md-8 offset-md-4 mb-3">
                                <a href="{{ route('provider_login','google') }}"><img src="./images/google_logo.png" style="width: 30px; height: 30px; margin: 10px">{{ __('S\'inscrire avec') }} Google</a>
                            </div>
                            <div class="col-md-8 offset-md-4 mb-3">
                                <a href="{{ route('provider_login','facebook') }}"><img src="./images/facebook_logo.png" style="width: 30px; height: 30px; margin: 10px">{{ __('S\'inscrire avec') }} Facebook</a>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('Nom') }}</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>

                                @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('Adresse e-mail') }}</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">

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
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password-confirm" class="col-md-4 col-form-label text-md-right">{{ __('Mot de passe (encore)') }}</label>

                            <div class="col-md-6">
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('S\'inscrire') }}
                                </button>
                                <a class="btn btn-link" href="{{ route('login') }}">
                                        {{ __('J\'ai déjà un compte') }}
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>--}}
</div> 
@endsection
