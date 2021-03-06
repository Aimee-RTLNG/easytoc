@extends('layouts.app')

@section('titre') {{ __('Mon compte') }} - EasyToC @endsection

@section('content')
<main class="compte-page">
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
        <div class="row d-flex">
            <div class="col-lg-8">
                <div class="entete">
                    <h1 class="entete__title">{{ __('Voici votre tableau de bord') }}, <span class="entete__title--username">{{ $user->name }}</span></h1>
                    <div class="entete__under"></div>
                </div>
            </div>
            <div class="col-lg-4 start-project-profile">
                <div class="profile_content__list-crea nav-item dropdown select-home btn-form-final btn-primary"  title="{{ __('Menu création d\'éléments HTML') }}">
                    <a class="nav-link dropdown-toggle profile_content__list-crea__link " data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-arrow-right"></i>
                        <p>{{ __('Commencer un projet') }}</p>
                    </a>
                    <div class="dropdown-menu mt-2">
                        <a class="dropdown-item" href="{{ route('formulaire') }}">{{ __('Créer un formulaire') }}</a>
                        <a class="dropdown-item" href="{{ route('menu') }}">{{ __('Créer un menu') }}</a>
                        <a class="dropdown-item" href="{{ route('tableau') }}">{{ __('Créer un tableau') }}</a>
                    </div>
                </div>
            </div>
        </div>
        <a class="sr-only sr-only-focusable" href="#my-account">{{ __('Passer vos créations pour modifier les informations de votre compte') }}</a>
        <div class="row profile_content" id="profile-content">
            <div class="col-lg-8">
                <div class="dashboard">
                    <div class="row profile_content__filters m-0 p-0">
                        <div class="profile_content__options col-12">
                            <div id="list-filters" class="list-filters">
                                <button class="btn btn-filter-type active" title="{{ __('Voir toutes vos créations')}}" data-type="all" tabindex="0">
                                    {{ __('Tous') }}
                                    <div class="all_types">
                                        <span class="type-pin type-Menu" data-type="Menu"></span>
                                        <span class="type-pin type-Form" data-type="Form"></span>
                                        <span class="type-pin type-Table" data-type="Table"></span>
                                    </div>
                                </button>
                                <button class="btn btn-filter-type" data-type="menu" title="{{ __('Voir uniquement vos créations Menu')}}" tabindex="0">
                                    {{ __('Menu') }}
                                    <span class="type-pin type-Menu" data-type="Menu"></span>
                                </button>
                                <button class="btn btn-filter-type" data-type="form" title="{{ __('Voir uniquement vos créations Formulaire')}}" tabindex="0">
                                    {{ __('Formulaire') }}
                                    <span class="type-pin type-Form" data-type="Form"></span>
                                </button>
                                <button class="btn btn-filter-type" data-type="table" title="{{ __('Voir uniquement vos créations Tableaux')}}" tabindex="0">
                                    {{ __('Tableau') }}
                                    <span class="type-pin type-Table" data-type="Table"></span>
                                </button>
                            </div>
                            <div class="input-group filter-name">
                                <label for="search_create" class="d-none" aria-hidden="true">{{ __('Rechercher') }}</label>
                                <input type="text" class="form-control" id="search_create" placeholder="{{ __('Rechercher') }}">
                                <div class="input-group-append">
                                    <span class="input-group-text">
                                        <i class="fa fa-search"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    @if($user->contents->isEmpty())
                        <h2 class="dashboard__title mt-5">
                            {{ __('Vous n\'avez aucun projet sauvegardé') }}
                        </h2>
                    @endif
                    <div class="panel panel-default full-list">
                    @foreach ($user->contents as $content)
                        <div class="crea-item row list-element"  data-type="{{ $content->type->name_en }}" data-date="{{ $content->updated_at }}" >
                            <span class="type-pin type-{{ $content->type->name_en }}" data-type="{{ $content->type->name_en }}"></span>
                            <div class="col-md-8 crea-item__infos">
                                <div class="crea-item__entete">
                                    <h2 class="crea-item__entete__title">
                                        <a class="see-content-button" href="{{ route('content.show', ['content'=>$content]) }}" title="{{ __('Voir le projet') }}">{{ $content->title }}</a>
                                    </h2>
                                    <div class="crea-item__entete__under"></div>
                                </div>
                                <p class="crea-item__descr">
                                    {{ $content->description }}
                                </p>
                                <?php 
                                $date_project = date('d/m/Y', strtotime( $content->updated_at ));
                                if (App::isLocale('en')) {
                                ?>
                                    <p class="crea-item__type-date">
                                        {{ $content->type->name_en }} / {{ __('Dernière modification') }} : <?php echo $date_project ?>
                                    </p>
                                <?php
                                }else if (App::isLocale('fr')) {
                                ?>
                                    <p class="crea-item__type-date">
                                        {{ $content->type->name_fr }} / {{ __('Dernière modification') }} :  <?php echo $date_project ?>
                                    </p>
                                <?php
                                    }
                                ?>
                            </div>
                            <div class="col-md-4 crea-item__btns">
                                <div class="crud_btn">
                                    <a class="btn btn-form-final btn-primary" href="{{ route('content.show', ['content'=>$content]) }}" data-toggle="tooltip" title="{{ __('Visualiser ma création')}}">
                                        <div  class="crea-item__btns__icon">
                                            <i class="fa fa-eye"></i>
                                        </div>
                                        <p>{{ __('Visualiser') }}</p>
                                    </a>
                                    <a class="btn btn-form-final btn-primary" href="{{ route('content.edit', ['content'=>$content]) }}" data-toggle="tooltip" title="{{ __('Modifier ma création')}}">
                                        <div class="crea-item__btns__icon">
                                            <i class="fa fa-edit"></i>
                                        </div>
                                        <p>{{ __('Modifier') }}</p>
                                    </a>
                                    <form class="form_btn-delete-def" action="{{ route('content.destroy', ['content'=>$content]) }}" method="POST">
                                        @csrf
                                        @method('DELETE')
                        
                                    <button type="submit" value="{{ __('Supprimer') }}" class="shadow-box btn-delete-def btn btn-danger btn-form-final" onclick="return confirm('{{ __('Voulez vous vraiment supprimer cet élément ?') }}')" data-toggle="tooltip" title="{{__('Supprimer ce projet')}}">
                                            <div class="crea-item__btns__icon btn--danger">
                                                <i class="fa fa-times"></i>
                                            </div>
                                            <p>{{ __('Supprimer') }}</p>
                                        </button>  
                                    </form>
                                </div>
                            </div>
                        </div>
                    @endforeach             
                    </div>
                </div>
            </div>
            <div class="col-lg-4 modif-compte">
                <div class="mon-compte" id="my-account">
                    <div class="mon-compte__entete">
                        <div class="mon-compte__entete__picto"><i class="fa fa-user-circle"></i></div>
                        <h2 class="mon-compte__entete__title">{{ __('Informations de votre compte') }}</h2>
                        <div class="fleche-plus">
                            <i class="fa fa-chevron-down" tabindex="0"></i>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <form id="formInfos" class="form-horizontal" method="POST" action="{{ route('profile.updateInfo', ['user' => $user]) }}">
                                {{ csrf_field() }}
                                {{ method_field('PUT') }}

                                <!-- Identifiants (nom et mot de passe) -->
                                <div>
                                    {{-- <h3 class="panel-heading">{{ __('Modifier mes identifiants') }}</h3> --}}
                                    <!-- Nom -->
                                    <div class="form-group{{ $errors->has('name') ? ' has-error' : '' }}">
                                        <label for="name" class=" control-label">{{ __('Nom') }}</label>
                                        <div>
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
                                        <label for="email" class=" control-label">{{ __('Adresse e-mail') }}</label>
                                        <div>
                                            <input id="email" type="text" class="form-control" name="email" value="{{ $user->email }}">

                                            @if ($errors->has('email'))
                                            <span class="help-block">
                                                <strong>{{ $errors->first('email') }}</strong>
                                            </span>
                                            @endif
                                        </div>
                                    </div>

                                    <!-- Bouton d'envoi -->
                                    <div class="form-group mon-compte__btn-save">
                                        <div class="d-flex justify-content-end">
                                            <button type="submit" form="formInfos" class="formInfoSend btn btn-primary btn-form-final">
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
                                    {{-- <h3 class="panel-heading">{{ __('Modifier mon mot de passe') }}</h3> --}}

                                    <!-- Nouveau mot de passe-->
                                    <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                                        <label for="password" class="control-label">{{ __('Nouveau mot de passe') }}</label>

                                        <div class="">
                                            <div class="password-input d-flex">
                                                <input id="password" type="password" class="form-control" name="password">
                                                <button type="button" class="btn-seepassword__icon mon-compte__seepassword" aria-label="{{ __('Afficher/masquer le mot de passe en clair : cela va rendre votre mot de passe visible sur votre écran') }}" title="{{ __('Afficher/masquer le mot de passe en clair') }}">
                                                        <i class="fa fa-eye"></i>
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

                                        <div class="">
                                            <div class="password-input d-flex">
                                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation">
                                                <button type="button" class="btn-seepassword__icon mon-compte__seepassword" aria-label="{{ __('Afficher/masquer le mot de passe en clair : cela va rendre votre mot de passe visible sur votre écran') }}" title="{{ __('Afficher/masquer le mot de passe en clair') }}">
                                                    <i class="fa fa-eye"></i>
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

                                            <div class="">
                                                <div class="password-input d-flex">
                                                    <input id="current-password" type="password" class="form-control" name="current_password">
                                                    <button type="button" class="btn-seepassword__icon mon-compte__seepassword" aria-label="{{ __('Afficher/masquer le mot de passe en clair : cela va rendre votre mot de passe visible sur votre écran') }}" title="{{ __('Afficher/masquer le mot de passe en clair') }}">
                                                        <i class="fa fa-eye"></i>
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
                                    <div class="form-group mon-compte__btn-save">
                                        <div class="d-flex justify-content-end">
                                            <button type="submit" form="formPassword" class="formInfoSend btn btn-primary btn-form-final">
                                                {{ __('Sauvegarder mon mot de passe') }}
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </form>
                            <hr>
                            <div class="mon-compte__entete">
                                <div class="mon-compte__entete__picto"><i class="fa fa-frown"></i></div>
                                <h2 class="mon-compte__entete__title">{{ __('Supprimer votre compte') }}</h2>
                                {{-- <div class="fleche-plus">
                                    <i class="fa fa-chevron-down " tabindex="0"></i>
                                </div> --}}
                            </div>
                            <form id="formDeleteUser" class="form-horizontal" method="POST" action="{{ route('profile.destroy', ['user' => $user]) }}">
                                {{ csrf_field() }}
                                {{ method_field('POST') }}
                                <div>
                                    <p>
                                        {{ __("Attention, en supprimant votre compte, tout le contenu sera également supprimé. On peut tout de même rester amis, non ?") }}
                                    </p>
                                    <!-- Bouton d'envoi -->
                                    <div class="form-group mon-compte__btn-save">
                                        <div class="d-flex justify-content-end">
                                            <button type="submit" form="formDeleteUser" class="formDeleteUser btn btn-danger btn-form-final formInfoSend" onclick="return confirm('{{ __('Voulez vous vraiment supprimer votre compte ?') }}')" >
                                                {{ __('Supprimer le compte') }}
                                            </button>
                                        </div>
                                    </div>
                                    
                                </div>
                                <a class="sr-only sr-only-focusable" href="#profile-content">{{ __('Voir vos créations') }}</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
@endsection

@section('pagespecificscripts')
    <script type="application/javascript" src="{{ URL::asset('js/components/profile/profile.js') }}"></script>
@endsection