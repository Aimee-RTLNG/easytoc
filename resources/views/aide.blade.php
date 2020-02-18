
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

                <div id="account">
                    <h2>{{ __('Compte Easy to C') }}</h2>

                    <p>{{ __("Vous n'avez pas besoin de créer un compte sur Easy to C pour pouvoir utiliser nos outils. Cependant, nous vous le recommandons fortement car cela vous permettra de sauvegarder votre contenu, de le retrouver ultérieurement et de le modifier à votre guise. De plus, il n'existe pas de limite de projets. La création de compte ne prend pas plus de quelques minutes: nous ne vous demandons pas d'informations personnelles.") }}</p>

                    <div id="signUp">
                        <h3>{{ __('Se créer un compte Easy to C') }}</h3>
                        <p>{{ __("Si vous souhaitez vous créer un compte sur Easy to C, voici quelques étapes très simples : il vous suffit de vous rendre sur la ") }} <a href="register" title="{{ __('Redirection vers la page Inscription') }}">{{ __('page Inscription') }}</a>.</p>
                        <p>{{ __("Sur cette page, vous avez alors à remplir quelques informations, notamment votre identifiant (nom du compte), qui n'a pas besoin d'être votre véritable nom ni votre prénom. Vous devez également indiquer une adresse e-mail, essentielle pour se connecter et accéder à son compte : c'est également sur cette adresse e-mail que vous recevrez des mails de notre part (uniquement dans le cadre d'une ré-initialisation de mot de passe). Votre mot de passe doit être indiqué deux fois pour éviter les fautes de frappes. Le mot de passe que vous choisissez doit minimum faire 8 caractères de long. Si par la suite, vous perdez votre mot de passe, vous avez la possibilité de le réinitialiser en cliquant sur ce lien: ") }}<a href="password/reset" title="{{ __("Redirection vers la page d'oubli de mot de passe") }}">{{ __("J'ai oublié mon mot de passe") }}</a>.</p>
                        <p>{{ __("Afin de s'assurer que vous respecterez les conditions d'utilisation du site Easy to C, vous ne pouvez procéder à l'inscription qu'après avoir lu et consenti à ces règles: le bouton \"J'ai lu et j'accepte les Conditions générales d'utilisation du site\" est obligatoire.") }}</p> <p>{{ __("Chaque champ du formulaire est obligatoire : vous ne pouvez pas vous inscrire sans valider ces conditions. Si il s'avère que votre compte ou votre utilisation du site ne respecte pas les Conditions générales d'utilisation du site, nous nous reservons le droit de supprimer définitivement votre compte et les données associées.") }}</p>
                    </div>         
                    
                    <div id="signIn">
                        <h3>{{ __('Se connecter à son compte Easy to C') }}</h3>
                        <p>{{ __("Si vous souhaitez vous connecter à votre compte sur Easy to C, voici quelques étapes très simples : il vous suffit de vous rendre sur la ") }} <a href="register" title="{{ __('Redirection vers la page Inscription') }}">{{ __('page Inscription') }}</a>.</p>

                    </div>

                    <div id="listAccount">
                        <h3>{{ __("Retrouver ses anciennes créations") }}</h3>
                    </div>

                    <div id="infoAccount">
                        <h3>{{ __('Modifier ses informations de compte') }}</h3>
                    </div>

                    <div id="deleteAccount">
                        <h3>{{ __('Effacer toutes les données de son compte') }}</h3>
                    </div>
                </div>

                <hr>

                <div id="project">
                    <h2>{{ __('Création de projet') }}</h2>

                    <div id="infoProject">
                        <h3>{{ __('Informations essentielles') }}</h3>
                    </div>   

                    <div id="updateProject">
                        <h3>{{ __('Modifier mon projet') }}</h3>
                    </div>   

                    <div id="useCode">
                        <h3>{{ __('Utiliser le code généreré') }}</h3>
                    </div>   

                    <div id="actionsProject">
                        <h3>{{ __('Actions sur mon projet') }}</h3>
                    </div>  
                </div>

                <hr>
                
                <div id="tableCreator">
                    <h2>{{ __('Guide d\'utilisation du générateur de tableau') }}</h2>

                    <div id="importTable">
                        <h3>{{ __('Générer un tableau à partir de données') }}</h3>
                    </div>  
                    
                    <div id="generateTable">
                        <h3>{{ __('Générer un tableau exemple') }}</h3>
                    </div>  

                    <div id="addElementTable">
                        <h3>{{ __('Ajouter du contenu au tableau') }}</h3>
                    </div>  

                </div>

                <hr>

                <div id="menuCreator">
                    <h2>{{ __('Guide d\'utilisation du générateur de menu') }}</h2>

                    <div id="importMenu">
                        <h3>{{ __('Générer un menu à partir de données') }}</h3>
                    </div>  
                    
                    <div id="generateMenu">
                        <h3>{{ __('Générer un menu exemple') }}</h3>
                    </div>  

                    <div id="addElementMenu">
                        <h3>{{ __('Ajouter du contenu au menu') }}</h3>
                    </div>  
                </div>

                <hr>

                <div id="formCreator">
                    <h2>{{ __('Guide d\'utilisation du générateur de formulaire') }}</h2>

                    <div id="importForm">
                        <h3>{{ __('Générer un formulaire à partir de données') }}</h3>
                    </div>  
                    
                    <div id="generateForm">
                        <h3>{{ __('Générer un formulaire exemple') }}</h3>
                    </div>  

                    <div id="addElementForm">
                        <h3>{{ __('Ajouter du contenu au formulaire') }}</h3>
                    </div>  
                </div>

            </div>

            {{-- Sommaire --}}
            <div class="summary-container">
                {{-- ANCHOR Sommaire --}}
                <h3>{{ __('Table des matières') }}</h3>
                <ul>
                    {{-- Compte Utilisateur --}}
                    <li>
                        <a href="#account" title="{{ __('Compte Easy to C') }}">{{ __('Compte Easy to C') }}</a>
                        <ul>
                            {{-- S'inscrire / Se connecter --}}
                            <li><a href="#signUp" title="{{ __('Se créer un compte Easy to C') }}">{{ __('Créer un compte Easy to C') }}</a></li>
                            <li><a href="#signIn" title="{{ __('Se connecter à son compte Easy to C') }}">{{ __('Accéder à son compte') }}</a></li>
                            <li><a href="#listAccount" title="{{ __("Retrouver ses anciennes créations") }}">{{ __('Retrouver ses créations') }}</a></li>
                            <li><a href="#infoAccount" title="{{ __('Modifier ses informations de compte') }}">{{ __('Modifier ses informations de compte') }}</a></li>
                            <li><a href="#deleteAccount" title="{{ __('Effacer toutes les données de son compte') }}">{{ __('Supprimer son compte') }}</a></li>
                        </ul>
                    </li>
                    {{-- Création d'un projet --}}
                    <li>
                        <a href="#project" title="{{ __('Création de projet') }}">{{ __('Créer un projet') }}</a>
                        <ul> 
                            <li><a href="#infoProject" title="{{ __('Informations essentielles') }}">{{ __('Informations essentielles') }}</a></li>
                            <li><a href="#updateProject" title="{{ __('Modifier mon projet') }}">{{ __('Modifier mon projet') }}</a></li>
                            <li><a href="#useCode" title="{{ __('Utiliser le code généreré') }}">{{ __('Utiliser le code généreré') }}</a></li>
                            <li><a href="#actionsProject" title="{{ __('Actions sur mon projet') }}">{{ __('Actions sur le projet') }}</a></li>
                        </ul>
                    </li>
                    {{-- Générateur de tableau --}}
                    <li>
                        <a href="#tableCreator" title="{{ __('Guide d\'utilisation du générateur de tableau') }}">{{ __('Générateur de tableau') }}</a>
                        <ul> 
                            <li><a href="#importTable" title="{{ __('Générer un tableau à partir de données') }}">{{ __('Générer un tableau à partir de données') }}</a></li>
                            <li><a href="#generateTable" title="{{ __('Générer un tableau exemple') }}">{{ __('Générer un tableau exemple') }}</a></li>
                            <li><a href="#addElementTable" title="{{ __('Ajouter du contenu au tableau') }}">{{ __('Ajouter du contenu au tableau') }}</a></li>
                        </ul>
                    </li>
                    {{-- Générateur de menu --}}
                    <li>
                        <a href="#menuCreator" title="{{ __('Guide d\'utilisation du générateur de menu') }}">{{ __('Générateur de menu') }}</a>
                        <ul> 
                            <li><a href="#importMenu" title="{{ __('Générer un menu à partir de données') }}">{{ __('Générer un menu à partir de données') }}</a></li>
                            <li><a href="#generateTable" title="{{ __('Générer un menu exemple') }}">{{ __('Générer un menu exemple') }}</a></li>
                            <li><a href="#addElementTable" title="{{ __('Ajouter du contenu au menu') }}">{{ __('Ajouter du contenu au menu') }}</a></li>
                        </ul>
                    </li>
                    {{-- Générateur de formulaire --}}
                    <li>
                        <a href="#formCreator" title="{{ __('Guide d\'utilisation du générateur de formulaire') }}">{{ __('Générateur de formulaire') }}</a>
                        <ul> 
                            <li><a href="#importForm" title="{{ __('Générer un formulaire à partir de données') }}">{{ __('Générer un formulaire à partir de données') }}</a></li>
                            <li><a href="#generateForm" title="{{ __('Générer un formulaire exemple') }}">{{ __('Générer un formulaire exemple') }}</a></li>
                            <li><a href="#addElementForm" title="{{ __('Ajouter du contenu au formulaire') }}">{{ __('Ajouter du contenu au formulaire') }}</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    
@endsection