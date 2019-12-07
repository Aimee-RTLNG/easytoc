@extends('layouts.app')

@section('content')
<div class="container forget-email authen">
    <div class="row justify-content-center">
        <div class="col-lg-8">
           <div class="forget-email__content authen__content">
                <div class="entete">
                    <div class="entete-title">
                        <h2 class="register__title">{{ __('Réinitialiser mon mot de passe') }}</h2>
                        <div class="register__under-title"></div>
                    </div>
                </div>
                @if (session('status'))
                    <div class="alert alert-success" role="alert">
                        {{ session('status') }}
                    </div>
                @endif
                <form method="POST" class="authen__form" action="{{ route('password.email') }}">
                    @csrf

                    <div class="register__line">
                        <label for="email" class="form-label text-md-right">{{ __('Adresse e-mail') }}</label>
                        <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>
                        @error('email')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>

                    <div class="register__line register__line--send">
                        <button type="submit" class="btn btn-primary btn-form-final btn-reini">
                            {{ __('Envoyer un lien de réinitialisation') }}
                        </button>
                    </div>
                </form>
           </div>
        </div>





        {{-- <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Réinitialiser mon mot de passe') }}</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    <form method="POST" action="{{ route('password.email') }}">
                        @csrf

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

                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Envoyer un lien de réinitialisation') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div> --}}
    </div>
</div>
@endsection
