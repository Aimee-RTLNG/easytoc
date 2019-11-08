@extends('layouts.app')

@section('titre') {{ __('Mon compte - EasyToC') }} @endsection

@section('content')
<div class="container">
    @if (session('info'))
    <div class="row">
        <div class="col-md-12">
            <div class="alert alert-success alert-dismissible">
                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                {{ session('info') }}
            </div>
        </div>
    </div>
    @elseif (session('error'))
    <div class="row">
        <div class="col-md-12">
            <div class="alert alert-danger alert-dismissible">
                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                {{ session('error') }}
            </div>
        </div>
    </div>
    @endif
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel m-5 panel-default">
                <div class="panel-body">
                    <h3 class="panel-heading">{{ __('Informations de compte') }}</h3>
                    <form class="form-horizontal" method="POST" action="{{ route('profile.update', ['user' => $user]) }}">
                        {{ csrf_field() }}
                        {{ method_field('PUT') }}

                        <!-- Identifiants (nom et mot de passe) -->
                        <div>
                            <h3 class="panel-heading">{{ __('Modifier mes identifiants') }}</h3>

                            <!-- Nom -->
                            <div class="form-group{{ $errors->has('name') ? ' has-error' : '' }}">
                                <label for="name" class="col-md-4 control-label">{{ __('Nom') }}</label>
                                <div class="col-md-6">
                                    <input id="name" type="text" class="form-control" name="name" value="{{ $user->name }}">

                                    @if ($errors->has('name'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                                    @endif
                                </div>
                            </div>

                            <!-- Email -->
                            <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                                <label for="email" class="col-md-4 control-label">{{ __('Adresse e-mail') }}</label>
                                <div class="col-md-6">
                                    <input id="email" type="text" class="form-control" name="email" value="{{ $user->email }}">

                                    @if ($errors->has('email'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                    @endif
                                </div>
                            </div>

                            <!-- Bouton d'envoi -->
                            <div class="form-group">
                                <div class="col-md-6 col-md-offset-4">
                                    <button type="submit" class="btn btn-primary">
                                        {{ __('Enregistrer les informations') }}
                                    </button>
                                </div>
                            </div>
                            
                        </div>

                        <!-- Mot de passe -->
                        <div>
                            <h3 class="panel-heading">{{ __('Modifier mon mot de passe') }}</h3>

                            <!-- Nouveau mot de passe-->
                            <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                                <label for="password" class="col-md-4 control-label">{{ __('Nouveau mot de passe') }}</label>

                                <div class="col-md-6">
                                    <input id="password" type="password" class="form-control" name="password">

                                    @if ($errors->has('password'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                    @endif
                                </div>
                            </div>

                            <!-- Confirmation du nouveau mot de passe-->
                            <div class="form-group">
                                <label for="password-confirm" class="col-md-4 control-label">{{ __('Confimation du nouveau mot de passe') }}</label>

                                <div class="col-md-6">
                                    <input id="password-confirm" type="password" class="form-control" name="password_confirmation">
                                </div>
                            </div>

                            <!-- Si l'utilisateur a un de mot de passe (hors Google \ Facebook) -->
                            @if (!is_null($user->password))

                                <!-- Vérification du mot de passe actuel -->    
                                <div class="form-group{{ $errors->has('current_password') ? ' has-error' : '' }}">
                                    <label for="current-password" class="col-md-4 control-label">{{ __('Mot de passe actuel') }}</label>

                                    <div class="col-md-6">
                                        <input id="current-password" type="password" class="form-control" name="current_password">

                                        @if ($errors->has('current_password'))
                                        <span class="help-block">
                                            <strong>{{ $errors->first('current_password') }}</strong>
                                        </span>
                                        @endif
                                    </div>
                                </div>
                            @else 
                                @if ($errors->has('current_password'))
                                <span class="help-block">
                                    <strong>{{ $errors->first('current_password') }}</strong>
                                </span>
                                @endif
                            @endif


                            <!-- Bouton d'envoi -->      
                            <div class="form-group">
                                <div class="col-md-6 col-md-offset-4">
                                    <button type="submit" class="btn btn-primary">
                                        {{ __('Modifier mon mot de passe') }}
                                    </button>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection