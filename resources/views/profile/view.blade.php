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
    <div class="container">
        <div class="entete">
            <h2 class="entete__title">{{ __('Voici votre espace') }}, {{ $user->name }}</h2>
            <div class="entete__under"></div>
        </div>
        <div class="row profile_content">
            <div class="col col-md-offset-2">
                <h2>{{ __('Vos créations') }}</h2>
                <div>  
                    <i class="fas fa-plus-circle"></i>
                    <select onchange="location = this.value;">
                        <option selected disabled>{{ __('Créer un projet') }}</option>
                        <option value="{{ route('menu') }}">{{ __('Menu') }}</option>
                        <option value="{{ route('formulaire') }}">{{ __('Formulaire') }}</option>
                        <option value="{{ route('tableau') }}">{{ __('Tableau') }}</option>
                    </select>
                </div>
                <div id="list-filters">
                    <button class="btn btn-filter-type active" data-type="all">
                        {{ __('Tout voir') }}
                        <span class="type-pin type-Menu" data-type="Menu"></span>
                        <span class="type-pin type-Form" data-type="Form"></span>
                        <span class="type-pin type-Table" data-type="Table"></span>
                    </button>
                    <button class="btn btn-filter-type" data-type="Menu">
                        {{ __('Menu') }}
                        <span class="type-pin type-Menu" data-type="Menu"></span>
                    </button>
                    <button class="btn btn-filter-type" data-type="Form">
                        {{ __('Formulaire') }}
                        <span class="type-pin type-Form" data-type="Form"></span>
                    </button>
                    <button class="btn btn-filter-type" data-type="Table">
                        {{ __('Tableau') }}
                        <span class="type-pin type-Table" data-type="Table"></span>
                    </button>
                    <button class="btn btn-filter-date" data-date="old">
                        {{ __('Trier par date de modification') }}
                        <i class="fas fa-sort"></i>
                    </button>
                    <div class="filter-name">
                        <input type="text" placeholder="{{ __('Search') }}">
                        <i class="fas fa-search"></i>
                    </div>
                </div>
                <div class="panel m-2 panel-default full-list">
                    @foreach ($user->contents as $content)
                        <div class="justify-content-between list-element" data-type="{{ $content->type->name_en }}" data-date="{{ $content->updated_at }}">
                            <div class="d-flex element-info">
                                <span class="type-pin type-{{ $content->type->name_en }}" data-type="{{ $content->type->name_en }}"></span>
                                <div>
                                    <h3><a class="see-content-button" href="{{ route('content.show', ['content'=>$content]) }}">{{ $content->title }}</a></h3>
                                    <div class="content-description">
                                        <p class="content-description-text">{{ $content->description }}</p>
                                    </div>
                                    <?php 
                                        if (App::isLocale('en')) {
                                    ?>
                                        <span class="mr-2 type-name type-{{ $content->type->name_en }}" data-type="{{ $content->type->name_en }}">
                                            {{ $content->type->name_en }}
                                        </span>
                                        / 
                                        <span class="ml-2 type-date">
                                            {{ $content->updated_at }}
                                        </span>
                                    <?php
                                    }else if (App::isLocale('fr')) {
                                    ?>
                                        <span class="mr-2 type-name type-{{ $content->type->name_en }}" data-type="{{ $content->type->name_en }}">
                                            {{ $content->type->name_fr }}
                                        </span>
                                        / 
                                        <span class="ml-2 type-date">
                                            {{ $content->updated_at }}
                                        </span>
                                    <?php
                                        }
                                    ?>
                                </div>
                            </div>
                            <div class="d-flex flex-column element-actions">
                                <a class="btn btn-info view-content-button" href="{{ route('content.show', ['content'=>$content]) }}">{{ __('Visualiser') }}</a>
                                <a class="btn btn-info edit-content-button" href="{{ route('content.edit', ['content'=>$content]) }}">{{ __('Modifier') }}</a>
                                <form action="{{ route('content.destroy', ['content'=>$content]) }}" method="POST">
                                    @csrf
                                    @method('DELETE')
                                    <input type="submit" value="{{ __('Supprimer') }}" class="btn btn-danger delete-content-button" onclick="return confirm('Are you sure to delete?')">       
                                </form>
                            </div>
                        </div>    
                    @endforeach        
                </div>
            </div>
            <div class="col-4 col-md-offset-2 account-infos">
                <h2>{{ __('Votre compte') }}</h2>
                <div class="panel m-2 panel-default">
                    <div class="panel-body">
                        <form id="formInfos" class="form-horizontal" method="POST" action="{{ route('profile.updateInfo', ['user' => $user]) }}">
                            {{ csrf_field() }}
                            {{ method_field('PUT') }}

                            <!-- Identifiants (nom et mot de passe) -->
                            <div>
                                <h3 class="panel-heading">{{ __('Modifier mes identifiants') }}</h3>
                                <!-- Nom -->
                                <div class="form-group{{ $errors->has('name') ? ' has-error' : '' }}">
                                    <label for="name" class="control-label">{{ __('Nom') }}</label>
                                    <div class="col">
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
                                    <label for="email" class="control-label">{{ __('Adresse e-mail') }}</label>
                                    <div class="col">
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
                                    <div class="col">
                                        <button type="submit" form="formInfos" class="btn btn-primary">
                                            {{ __('Enregistrer les informations') }}
                                        </button>
                                    </div>
                                </div>
                                
                            </div>
                        </form>
                        <hr>
                        <form id="formPassword" class="form-horizontal" method="POST" action="{{ route('profile.updatePass', ['user' => $user]) }}">
                            {{ csrf_field() }}
                            {{ method_field('PUT') }}
                            <!-- Mot de passe -->
                            <div>
                                <h3 class="panel-heading">{{ __('Modifier mon mot de passe') }}</h3>

                                <!-- Nouveau mot de passe-->
                                <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                                    <label for="password" class="control-label">{{ __('Nouveau mot de passe') }}</label>

                                    <div class="col">
                                        <div class="password-input d-flex">
                                            <input id="password" type="password" class="form-control" name="password">
                                            <button type="button" class="btn-seepassword__icon" aria-label="{{ __('Afficher/masquer le mot de passe en clair : cela va rendre votre mot de passe visible sur votre écran') }}" title="{{ __('Afficher/masquer le mot de passe en clair') }}">
                                                    <i class="fas fa-eye"></i>
                                            </button>
                                        </div>
                                        <!-- ATTENTION : ne pas toucher à cette structure / ni classes, ni style -->
                                        <span class="warning-block" style="display: none">
                                            <strong>{{ __('La touche Majuscules est active') }}</strong>
                                        </span>
                                        <!-- -->

                                        @if ($errors->has('password'))
                                        <span class="help-block">
                                            <strong>{{ $errors->first('password') }}</strong>
                                        </span>
                                        @endif
                                    </div>
                                </div>

                                <!-- Confirmation du nouveau mot de passe-->
                                <div class="form-group">
                                    <label for="password-confirm" class="control-label">{{ __('Confimation du nouveau mot de passe') }}</label>

                                    <div class="col">
                                        <div class="password-input d-flex">
                                            <input id="password-confirm" type="password" class="form-control" name="password_confirmation">
                                            <button type="button" class="btn-seepassword__icon" aria-label="{{ __('Afficher/masquer le mot de passe en clair : cela va rendre votre mot de passe visible sur votre écran') }}" title="{{ __('Afficher/masquer le mot de passe en clair') }}">
                                                <i class="fas fa-eye"></i>
                                            </button>
                                        </div>  
                                        <!-- ATTENTION : ne pas toucher à cette structure / ni classes, ni style -->
                                        <span class="warning-block" style="display: none">
                                            <strong>{{ __('La touche Majuscules est active') }}</strong>
                                        </span>
                                        <!-- -->
                                        
                                        @if ($errors->has('password_confirmation'))
                                            <span class="help-block">
                                                <strong>{{ $errors->first('password_confirmation') }}</strong>
                                            </span>
                                        @endif
                                    </div>
                                </div>

                                <!-- Si l'utilisateur a un de mot de passe (hors Google \ Facebook) -->
                                @if (!is_null($user->password))

                                    <!-- Vérification du mot de passe actuel -->    
                                    <div class="form-group{{ $errors->has('current_password') ? ' has-error' : '' }}">
                                        <label for="current-password" class="control-label">{{ __('Mot de passe actuel') }}</label>

                                        <div class="col">
                                            <div class="password-input d-flex">
                                                <input id="current-password" type="password" class="form-control" name="current_password">
                                                <button type="button" class="btn-seepassword__icon" aria-label="{{ __('Afficher/masquer le mot de passe en clair : cela va rendre votre mot de passe visible sur votre écran') }}" title="{{ __('Afficher/masquer le mot de passe en clair') }}">
                                                    <i class="fas fa-eye"></i>
                                                </button>
                                            </div>  
                                            <!-- ATTENTION : ne pas toucher à cette structure / ni classes, ni style -->
                                            <span class="warning-block" style="display: none">
                                                <strong>{{ __('La touche Majuscules est active') }}</strong>
                                            </span>
                                            <!-- -->
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
                                    <div class="col">
                                        <button type="submit" form="formPassword" class="btn btn-primary">
                                            {{ __('Sauvegarder mon nouveau mot de passe') }}
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
</div>
@endsection

@section('pagespecificscripts')
    <script type="application/javascript" src="{{ URL::asset('js/components/profile/profile.js') }}"></script>
@endsection