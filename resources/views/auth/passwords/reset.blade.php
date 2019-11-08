@extends('layouts.app')

@section('content')
<div class="container reset-email">
    <div class="row justify-content-center">
        <div class="col-md-8 authen">
           <div class="authen__content">
                <div class="entete">
                    <div class="entete-title">
                        <h2 class="register__title">{{ __('Réinitialiser mon mot de passe') }}</h2>
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
                        {{ __('Mettre à jour mon mot de passe') }}
                    </button>
                </form>
           </div>
        </div>
    </div>
</div>
@endsection

{{-- <form method="POST" action="{{ route('password.update') }}">
    @csrf

    <input type="hidden" name="token" value="{{ $token }}">

    <div class="form-group row">
        <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('Adresse e-mail') }}</label>

        <div class="col-md-6">
            <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ $email ?? old('email') }}" required autocomplete="email" autofocus>

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
                {{ __('Mettre à jour mon mot de passe') }}
            </button>
        </div>
    </div>
</form> --}}