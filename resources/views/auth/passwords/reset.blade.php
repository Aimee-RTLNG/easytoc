@extends('layouts.app')

@section('content')
<div class="container reset-email">
    <div class="row justify-content-center">
        <div class="col-md-8 authen">
           <div class="authen__content">
                <div class="entete">
                    <div class="entete-title">
                        <h2 class="register__title">{{ __('Mettre à jour mon mot de passe') }}</h2>
                        <div class="register__under-title"></div>
                    </div>
                </div>
                <form method="POST" class="authen__form" action="{{ route('password.update') }}">
                    @csrf
                    <input type="hidden" name="token" value="{{ $token }}">
                    <div class="register__line">
                        <label for="email" class="form-label text-md-right">{{ __('Adresse e-mail') }}</label>
                        <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ $email ?? old('email') }}" required autocomplete="email" autofocus>
                            @error('email')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                    </div>
    
                    <div class="register__line">
                        <label for="password" class="form-label text-md-right">{{ __('Mot de passe') }}</label>
                            <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">
                            @error('password')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                    </div>
    
                    <div class="register__line">
                        <label for="password-confirm" class="form-label text-md-right">{{ __('Mot de passe (encore)') }}</label>
                        <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                    </div>
    
                    <button type="submit" class="btn btn-primary btn-form-final btn-reset">
                        {{ __('Mise à jour') }}
                    </button>
                </form>
           </div>
        </div>
    </div>
</div>
@endsection