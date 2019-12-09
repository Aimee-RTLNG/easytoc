@extends('layouts.app')

@section('titre') {{ __('Vérification de l\'e-mail') }} - EasyToC @endsection

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Vérifier votre adresse e-mail') }}</div>

                <div class="card-body">
                    @if (session('resent'))
                        <div class="alert alert-success" role="alert">
                            {{ __('Un lien de vérification vous a été envoyé sur votre adresse e-mail.') }}
                        </div>
                    @endif

                    {{ __('Avant de continuer, veuillez valider votre adresse e-mail.') }}
                    {{ __('Si vous n\'avez pas reçu d\'adresse e-mail') }},
                    <form class="d-inline" method="POST" action="{{ route('verification.resend') }}">
                        @csrf
                        <button type="submit" class="btn btn-link p-0 m-0 align-baseline">{{ __('cliquez ici pour faire une nouvelle demande') }}</button>.
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
