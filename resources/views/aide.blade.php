
@extends('layouts/app')

@section('titre') {{ __('Aide') }} - EasyToC @endsection

@section('content')

    <div class="container">
        <div class="entete">

            <h2 class="entete__title">{{ __('Aide') }}</h2>
            <div class="entete__under"></div>
            
            {{-- ANCHOR Introduction --}}
            <p>{{ __("Voici quelques conseils afin de mieux comprendre et utiliser le potentiel de EasytoC, l’outil qui facilitera l’intégration de vos contenus. Les articles ci-dessous sont là pour résoudre tout problème que vous pourriez rencontrer et pour vous aider à découvrir des fonctionnalités dont vous ignoriez l'existence. Sélectionnez simplement l'une des sections ci-dessous pour accéder à plusieurs documents d'aide détaillés et pertinents pour les créateurs de formulaires, menus et tableaux en ligne.") }} </p>
            
        </div>

        <div class="help-container">

            {{-- ANCHOR Contenu de la page d'aide --}}
            <div class="help-text-container"> 

                    <div id="tablecreator">
                        <h3>{{ __('Générateur de tableau') }}</h3>
                    </div>         
                    
                    <div id="menucreator">
                        <h3>{{ __('Générateur de menu') }}</h3>
                    </div>

                    <div id="formcreator">
                        <h3>{{ __('Générateur de formulaire') }}</h3>
                    </div>

            </div>

            {{-- Sommaire --}}
            <div class="summary-container">
                {{-- ANCHOR Sommaire --}}
                <h3>{{ __('Table des matières') }}</h3>
                <ul>
                    {{-- Compte Utilisateur --}}
                    <li><a href="#account" title="{{ __('Compte Easy to C') }}">{{ __('Compte Easy to C') }}</a></li>
                    <ul>
                        {{-- S'inscrire / Se connecter --}}
                        <li><a href="#signIn" title="{{ __('Se créer un compte Easy to C') }}">{{ __('Créer un compte Easy to C') }}</a></li>
                        <li><a href="#signUp" title="{{ __('Se connecter à son compte Easy to C') }}">{{ __('Accéder à son compte') }}</a></li>
                        <li><a href="#listAccount" title="{{ __("Retrouver ses anciennes créations") }}">{{ __('Retrouver ses créations') }}</a></li>
                        <li><a href="#infoAccount" title="{{ __('Modifier ses informations de compte') }}">{{ __('Modifier ses informations de compte') }}</a></li>
                        <li><a href="#deleteAccount" title="{{ __('Effacer toutes les données de son compte') }}">{{ __('Supprimer son compte') }}</a></li>
                    </ul>
                    {{-- Création d'un projet --}}
                    <li><a href="#createProject" title="{{ __('Création de projet') }}">{{ __('Créer un projet') }}</a></li>
                    <ul> 
                        <li><a href="#infoProject" title="{{ __('Informations essentielles') }}">{{ __('Informations essentielles') }}</a></li>
                        <li><a href="#useCode" title="{{ __('Utiliser le code généreré') }}">{{ __('Utiliser le code généreré') }}</a></li>
                        <li><a href="#actionsProject" title="{{ __('Actions sur mon projet') }}">{{ __('Actions sur le projet') }}</a></li>
                    </ul>
                    {{-- Générateur de tableau --}}
                    <li><a href="#tableCreator" title="{{ __('Guide d\'utilisation du générateur de tableau') }}">{{ __('Générateur de tableau') }}</a></li>
                    <ul> 
                        <li><a href="#importTable" title="{{ __('Générer un tableau à partir de données') }}">{{ __('Générer un tableau à partir de données') }}</a></li>
                        <li><a href="#generateTable" title="{{ __('Générer un tableau exemple') }}">{{ __('Générer un tableau exemple') }}</a></li>
                        <li><a href="#addElementTable" title="{{ __('Ajouter du contenu au tableau') }}">{{ __('Ajouter du contenu au tableau') }}</a></li>
                        <li><a href="#editElementTable" title="{{ __('Modifier le tableau') }}">{{ __('Modifier le tableau') }}</a></li>
                    </ul>
                    <li><a href="#menuCreator" title="{{ __('Guide d\'utilisation du générateur de menu') }}">{{ __('Générateur de menu') }}</a></li>
                    <ul> 
                        <li><a href="#importMenu" title="{{ __('Générer un menu à partir de données') }}">{{ __('Générer un menu à partir de données') }}</a></li>
                        <li><a href="#generateTable" title="{{ __('Générer un menu exemple') }}">{{ __('Générer un menu exemple') }}</a></li>
                        <li><a href="#addElementTable" title="{{ __('Ajouter du contenu au menu') }}">{{ __('Ajouter du contenu au menu') }}</a></li>
                        <li><a href="#editElementTable" title="{{ __('Modifier le menu') }}">{{ __('Modifier le menu') }}</a></li>
                    </ul>
                    <li><a href="#formCreator" title="{{ __('Guide d\'utilisation du générateur de formulaire') }}">{{ __('Générateur de formulaire') }}</a></li>
                    <ul> 
                        <li><a href="#importForm" title="{{ __('Générer un formulaire à partir de données') }}">{{ __('Générer un formulaire à partir de données') }}</a></li>
                        <li><a href="#generateForm" title="{{ __('Générer un formulaire exemple') }}">{{ __('Générer un formulaire exemple') }}</a></li>
                        <li><a href="#addElementForm" title="{{ __('Ajouter du contenu au formulaire') }}">{{ __('Ajouter du contenu au formulaire') }}</a></li>
                        <li><a href="#editElementForm" title="{{ __('Modifier le formulaire') }}">{{ __('Modifier le formulaire') }}</a></li>
                    </ul>
                </ul>
            </div>
        </div>
    </div>
    
@endsection