
@extends('layouts/app')

@section('titre') {{ __('Aide') }} - EasyToC @endsection

@section('content')

    <div class="container">
        <div class="entete">
            <h2 class="entete__title">{{ __('Aide') }}</h2>
            <div class="entete__under"></div>
        </div>
            
            {{-- ANCHOR Introduction --}}
            <p>
                {{ __("Voici quelques conseils afin de mieux comprendre et utiliser le potentiel de EasytoC, l’outil qui facilitera l’intégration de vos contenus. Les articles ci-dessous sont là pour résoudre tout problème que vous pourriez rencontrer et pour vous aider à découvrir des fonctionnalités dont vous ignoriez l'existence. Sélectionnez simplement l'une des sections ci-dessous pour accéder à plusieurs documents d'aide détaillés et pertinents pour les créateurs de formulaires, menus et tableaux en ligne.") }} 
            </p>
            
        

        <div class="help-container" tabindex="2">

            {{-- ANCHOR Contenu de la page d'aide --}}
            <div class="help-text-container"> 

                <div id="account">
                    <h2>{{ __('Compte Easy to C') }}</h2>

                    <p>
                        {{ __("Vous n'avez pas besoin de créer un compte sur Easy to C pour pouvoir utiliser nos outils. Cependant, nous vous le recommandons fortement car cela vous permettra de sauvegarder votre contenu, de le retrouver ultérieurement et de le modifier à votre guise. De plus, il n'existe pas de limite de projets. La création de compte ne prend pas plus de quelques minutes: nous ne vous demandons pas d'informations personnelles.") }}
                    </p>

                    <div id="signUp">
                        <h3>{{ __('Se créer un compte Easy to C') }}</h3>
                        <p>
                            {{ __("Si vous souhaitez vous créer un compte sur Easy to C, voici quelques étapes très simples : il vous suffit de vous rendre sur la ") }} <a href="register" title="{{ __('Redirection vers la page Inscription') }}">
                                {{ __('page Inscription') }}
                            </a>.
                            {{ __("Vous avez également la possibilité de vous inscrire plus rapidement en utilisant l'inscription via Facebook ou via Google. Si vous choissiez cette option, vous devez autorisé Easy to C à accéder à certaines informations de votre compte. Vous ne serez cependant pas connecté automatiquement.") }}
                        </p>
                        <p>
                            {{ __("Sur cette page, vous avez alors à remplir quelques informations, notamment votre identifiant (nom du compte), qui n'a pas besoin d'être votre véritable nom ni votre prénom. Vous devez également indiquer une adresse e-mail, essentielle pour se connecter et accéder à son compte : c'est également sur cette adresse e-mail que vous recevrez des mails de notre part (uniquement dans le cadre d'une ré-initialisation de mot de passe). Votre mot de passe doit être indiqué deux fois pour éviter les fautes de frappes. Le mot de passe que vous choisissez doit minimum faire 8 caractères de long. Si par la suite, vous perdez votre mot de passe, vous avez la possibilité de le réinitialiser en cliquant sur ce lien: ") }}
                            <a href="password/reset" title="{{ __("Redirection vers la page d'oubli de mot de passe") }}">
                                {{ __("J'ai oublié mon mot de passe") }}
                            </a>.
                        </p>
                        <p>
                            {{ __("Afin de s'assurer que vous respecterez les Conditions Générales d'Utilisation du site Easy to C, vous ne pouvez procéder à l'inscription qu'après avoir lu et consenti à ces règles: le bouton \"J'ai lu et j'accepte les Conditions générales d'utilisation du site\" est obligatoire. Vous pouvez consulter ces conditions sur la ") }}
                            <a href="cgu" title="{{ __('Redirection vers la page CGU') }}">
                                {{ __('page CGU') }}
                            </a>
                        </p> 
                        <p>
                            {{ __("Pour faciliter votre inscription, vous avez la possibilité de rendre visible le mot de passe que vous avez tapé. Cela vous permettra d'éviter les fautes de frappes (en plus de la confirmation du mot de passe). Pour voir le mot de passe tapé, il suffit de cliquer sur l'icône Oeil, sur la droite du champ.") }}
                        </p> 
                        <p>
                            {{ __("Chaque champ du formulaire est obligatoire : vous ne pouvez pas vous inscrire sans valider ces conditions. Si il s'avère que votre compte ou votre utilisation du site ne respecte pas les Conditions générales d'utilisation du site, nous nous reservons le droit de supprimer définitivement votre compte et les données associées.") }}
                        </p>
                        <p>
                            {{ __("Une fois inscrit, vous êtes automatiquement redirigé sur votre compte. Pour avoir plus d'informations sur votre compte, référez vous aux sous-parties ") }}
                            <a href="#listAccount" title="{{ __('Redirection vers la partie "Retrouver ses créations"') }}">
                                {{ __('Retrouver ses créations') }}
                            </a>, 
                            <a href="#infoAccount" title="{{ __('Redirection vers la partie "Modifier ses informations de compte"') }}">
                                {{ __('Modifier ses informations de compte') }}
                            </a>
                            {{ __('et') }}
                            <a href="#deleteAccount" title="{{ __('Redirection vers la partie "Supprimer son compte"') }}">
                                {{ __('Supprimer son compte') }}
                            </a>.
                        </p>
                        <p>
                            <i class="fa fa-exclamation-triangle mr-2"></i>
                            {{ __("Attention : vous ne pouvez pas avoir la même adresse e-mail qu'un autre utilisateur. Vous ne pouvez donc pas avoir plusieurs compte sur la même adresse.") }}
                        </p>
                    </div>         
                    
                    <div id="signIn">
                        <h3>{{ __('Se connecter à son compte Easy to C') }}</h3>
                        <p>
                            {{ __("Si vous souhaitez vous connecter à votre compte sur Easy to C, rendez vous sur ") }} 
                            <a href="login" title="{{ __('Redirection vers la page Connexion') }}">
                                {{ __('page Connexion') }}
                            </a>
                            {{ __("Pour vous connecter, vous aurez besoin de votre adresse e-mail utilisée lors de votre inscription, ainsi que de votre mot de passe. Pour faciliter votre connexion, vous avez la possibilité de voir le mot de passe que vous avez tapé, pour éviter les fautes de frappes, et de cocher la case 'Se souvenir de moi'. Cela permettra au navigateur de se souvenir de votre connexion, et vous n'aurez alors pas à vous reconnecter à chaque utilisation du site.") }}
                        </p>    
                        <p>
                            {{ __("Vous avez la possibilité de vous connecter plus rapidement en utilisant la connexion via Facebook ou via Google (uniquement disponible si vous vous êtes inscrit via une de ces méthodes. Si vous vous êtes inscrit manuellement, vous ne pouvez accéder à ce compte qu'en vous connectant manuellement, et inversement.") }}
                        </p> 
                        <p>
                            {{ __("Pour accéder à votre compte une fois connecté, rendez vous sur la ") }} 
                            <a href="profile" title="{{ __('Redirection vers la page Mon Compte') }}">
                                {{ __('page Mon Compte') }}
                            </a>.
                            {{ __("Via cette page, vous retrouverez vos différentes créations, les informations concernant votre compte, ainsi que différentes actions possibles.") }} 
                        </p> 
                    </div>

                    <div id="listAccount">
                        <h3>{{ __("Accéder à mes projets") }}</h3>
                        <p>
                            {{ __("Vous pouvez retrouver les différent projets que vous avez sauvegardé, accédez à la ") }} 
                            <a href="profile" title="{{ __('Redirection vers la page Mon Compte') }}">
                                {{ __('page Mon Compte') }}
                            </a>.
                            {{ __("La liste des projets sauvegardés se trouvent sur la gauche du tableau de bord. Vous avez la possibilité de trier cette liste par type (Menu, Formulaire, Tableau), par date de modification. Vous pouvez également rechercher dans la liste via la barre de recherche.") }}
                            {{ __("Pour chaque projet, vous pouvez voir son titre, sa description, sa date de dernière modification ainsi que son type (Tableau, Formulaire ou Menu).") }}
                            {{ __("Sur la droite de chaque projet, vous avez trois actions disponibles : visualiser, modifier et supprimer.") }}
                        </p> 
                        <p>
                            <b>"{{ __("Visualiser") }}"</b> {{ __('vous permettra de voir votre projet, l\'afficher en tant que tel mais également voir le code qui permet de le générer et le copier. Les autres actions possibles sur ce projet sont également présentes sur la page Visualisation.') }}
                        </p> 
                        <p>
                            <b>"{{ __("Modifer") }}"</b> {{ __('vous permettra de modifier votre projet avec la même interface qui vous a permis de le créer. Les outils sont les mêmes pour ne pas vous dérouter. Sur la page de modification, vous aurez la possibilité d\'annuler ou de sauvegarder vos modifications. Vous pourrez également le supprimer.') }}
                        </p> 
                        <p>
                            <b>"{{ __("Supprimer") }}"</b> {{ __('vous permettra de supprimer définitivement votre projet. Un message de confirmation vous demandera de valider la suppression avant de le faire. Attention : un dossier supprimé ne peut pas être rétabli.') }}
                        </p>
                    </div>

                    <div id="infoAccount">
                        <h3>{{ __('Modifier ses informations de compte') }}</h3>
                        <p>
                            {{ __("Vous pouvez retrouver les informations de votre compte sur votre tableau de bord de la ") }} 
                            <a href="profile" title="{{ __('Redirection vers la page Mon Compte') }}">
                                {{ __('page Mon Compte') }}
                            </a>.
                            {{ __("Toutes les informations concernant votre compte se trouve sur la droite du tableau de bord. Vous avez la possibilité de modifier ces informations : adresse e-mail, mot de passe, nom du compte.") }}
                        </p>
                        <p>
                            <i class="fa fa-exclamation-triangle mr-2"></i>
                            {{ __("Attention : vous ne pouvez pas avoir la même adresse e-mail qu'un autre utilisateur. Vous ne pouvez donc pas avoir plusieurs compte sur la même adresse.") }}
                        </p>
                    </div>

                    <div id="deleteAccount">
                        <h3>{{ __('Supprimer son compte') }}</h3>
                        <p>
                            {{ __("Si vous ne souhaitez plus utiliser votre compte, ou pour toute autre raison, vous avez la possibilité de Supprimer votre compte.") }}
                            {{ __("Vous devrez valider l'action avant que votre compte soit supprimé : ce sera la seule étape. Soyez vigilant, lors du choix que vous faites.") }}
                            <i>{{ __("Avez-vous fait le bon choix ? Pourrons-nous un jour vous pardonner ? Toutes ces questions ne devraient pas se poser : ne nous quittez pas, vous allez nous manquer.") }}</i>
                            {{ __("Tous les contenus associés à votre compte seront supprimés et ne pourrons pas être rétablis.") }}
                        </p>
                    </div>
                </div>

                <hr class="pb-5">

                <div id="project">
                    <h2>{{ __('Création de projet') }}</h2>

                    <div id="infoProject">
                        <h3>{{ __('Informations essentielles') }}</h3>
                        <p>
                            {{ __("Une fois inscrit et connecté sur Easy To C, vous aurez la possiblité d'avoir une vision globale sur l'ensemble de vos projets sauvegardé sur le tableau de bord accessible depuis la page de votre Compte.") }}
                            {{ __("En tant que nouveau venu vous n'aurez bien sur aucun projet. Pour commencer un projet, il vous suffira de cliquer sur le bouton 'Commencer un projet' puis choisir la nature de votre projet ( menu, tableau, formulaire).") }}
                        </p>
                        <p>
                            {{ __('Pour sauvegarder votre projet vous devrez cliquer sur le bouton "Sauvegarder mon projet" disponible en dessous de la zone de travail.') }}
                            {{ __('Votre projet sera alors sauvegardé et disponible à tout moment via le tableau de bord, vous pourrez retravailler dessus plus tard.') }}
                        </p>
                    </div>   

                    <div id="updateProject">
                        <h3>{{ __('Modifier mon projet') }}</h3>
                        <p>
                            {{ __("Si vous n'êtes pas satisfait de votre réalisation ou que vous vouliez simplement modifier tout ou partie de celle-ci, vous avez la possibilité de modifier celui-ci en vous rendant dans votre tableau de bord. Vous retrouverez vos projets avec l'option") }}<strong>{{ __(" Modifier") }}</strong>{{ __(" a droite du résumé du projet.") }}
                        </p>
                    </div>   

                    <div id="useCode">
                        <h3>{{ __('Utiliser le code généreré') }}</h3>
                        <p>
                            {{ __("Une fois votre projet terminé, vous pouvez utiliser le code à des fins extérieures en utilisant le code généré. Vous n'avez qu'à copier/coller le code (n'oubliez pas la première balise link pour obtenir le même style graphique) pour l'utiliser") }}
                        </p>
                        <p>
                            <strong>{{ __('Attention') }}</strong> {{ __('Si vous voulez importer vos données vous devez impérativement avoir un fichier au format CSV ou format JSON') }}
                        </p>
                        <div class="row">
                            <div class="col">
                                <p>
                                    {{ __('Exemple de fichier JSON') }}
                                </p>
                                <pre class="prettyprint linenums:4 content-panel prettyprinted">{ {{ __('prenom : toto') }}, <br>{{ __('age : 25') }} }</pre>
                            </div>
                            <div class="col">
                                <br>
                                <p>
                                    {{ __('Exemple de fichier CSV') }}
                                </p>
                                <pre class="prettyprint linenums:4 content-panel prettyprinted">{{ __('équipe gagnante;équipe verte;équipe rouge;équipe bleu;;;;') }}</pre>
                            </div>
                        </div>
                    </div>   

                    <div id="actionsProject">
                        <h3>{{ __('Actions sur mon projet') }}</h3>
                        <p>
                            {{ __('Sur votre tableau de bord, vous retrouvez la totalité de vos projets enregistrés. Pour chaque projets, plusieures options sont disponibles :') }}
                        </p>
                        <p>
                            <strong>{{ __("Visualiser : ") }}</strong>{{ __("Visualiser votre projet.") }}
                        </p>
                        <p>
                            <strong>{{ __("Modifier : ") }}</strong>{{ __("Modifier mon projet.") }}
                        </p>
                        <p>
                            <strong>{{ __("Supprimer : ") }}</strong>{{ __("Supprimer mon projet.") }}
                        </p>
                    </div>  
                </div>

                <hr class="pb-5">
                
                <div id="tableCreator">
                    <h2>{{ __('Guide d\'utilisation du générateur de tableau') }}</h2>

                    <div id="importTable">
                        <h3>{{ __('Générer un tableau à partir de données') }}</h3>
                        <p>
                            {{ __("Si vous possedez déjà un code personnel générant un tableau par l'intermédiaire de données brutes vous avez la possibilité de travailler sur celui-ci
                            via le bouton 'Importer des données' se situant en haut à gauche de l'interface.") }}
                        </p>
                        <p>
                            {{ __('En important votre fichier de données, Easy To C generera votre code, vous aurez ensuite la possibilité de modifier celui-ci selon vos souhaits.') }}
                        </p>
                    </div>  
                    
                    <div id="generateTable">
                        <h3>{{ __('Générer un tableau exemple') }}</h3>
                        <p>
                            {{ __("Parce que nous n'avons pas toujours la bonne idée au moment où l'on voudrait, ou que vous avez souffert trop longtemps du syndrome de la page blanche, Easy to C vous propose de travailler en 
                            vous basant sur un exemple de tableau. En cliquant sur le bouton 'Générer un exemple', un tableau sera généré automatiquement sur l'espace de travail d'Easy To C.
                            Vous pourrez ainsi vous faire une idée sur les possibilités offertes par le générateur de tableau Easy To C et les nombreuses possibilités de personnalisation qu'il offre et ainsi les tester") }}
                        </p>
                        
                    </div>  

                    <div id="addElementTable">
                        <h3>{{ __('Ajouter du contenu au tableau') }}</h3>
                        <p>
                            {{ __("En créant votre tableau, vous aurez la possibilité de modifier à loisir son titre, son nombre de lignes, de colonnes et leur contenu ainsi que sa légende.
                            Mais ce n'est pas  tout, Easy To C vous propose également la possibilité d'ajouter des en-têtes verticales et/ou horizontales et également un pied de tableau.
                            Vous pourrez déplacer une case, en fusionner certaines, déplacer ou supprimer une ligne/colonne. Vous n'avez plus aucune excuse pour vous y mettre !") }}
                        </p>
                        <p>
                            {{ __("Nous vous rappelons que la sauvegarde d'un projet est disponible uniquement à nos utilisateurs inscrits. Voir ") }}<a href="#signUp" title="{{ __('Se créer un compte Easy to C') }}">{{ __('Créer un compte Easy to C') }}</a>
                        </p>
                    </div>  

                </div>

                <hr class="pb-5">

                <div id="menuCreator">
                    <h2>{{ __('Guide d\'utilisation du générateur de menu') }}</h2>

                    <div id="importMenu">
                        <h3>{{ __('Générer un menu à partir de données') }}</h3>
                        <p>
                            {{ __("Si vous possedez déjà un code personnel générant un tableau par l'intermédiaire de données brutes ( fichiers JSON, fichiers CSV), vous avez la possibilité de travailler sur celui-ci
                            via le bouton 'Importer des données' se situant en haut à gauche de l'interface.") }}
                        </p>
                        <p>
                            {{ __('En important votre fichier de données, Easy To C generera votre code, vous aurez ensuite la possibilité de modifier celui-ci selon vos souhaits.') }}
                        </p>
                    </div>  
                    
                    <div id="generateMenu">
                        <h3>{{ __('Générer un menu exemple') }}</h3>
                        <p>
                            {{ __("Parce que nous n'avons pas toujours la bonne idée au moment où l'on voudrait, ou que vous avez souffert trop longtemps du syndrome de la page blanche, Easy to C vous propose de travailler en 
                            vous basant sur un exemple de menu.") }}
                        </p>
                        <p>
                            {{ __("En cliquant sur le bouton 'Générer un exemple', un menu sera généré automatiquement sur l'espace de travail d'Easy To C.") }}
                        </p>
                        <p>
                            {{ __("Vous pourrez ainsi vous faire une idée sur les possibilités offertes par le générateur de menuEasy To C et les nombreuses possibilités de personnalisation qu'il offre et ainsi les tester.") }}
                        </p>
                    </div>  

                    <div id="addElementMenu">
                        <h3>{{ __('Ajouter du contenu au menu') }}</h3>
                        <p>
                            {{ __('En créant votre menu, vous aurez la possibilité de modifier à loisir son titre et le logo de votre menu.') }}
                        </p>
                        <p>
                            {{ __("Easy To C vous propose également la possibilité d'ajouter une rubrique avec sous-menu, d'ajouter un lien simple ou un lien de sous-menu tout en personnalisant leurs titres.") }}
                        </p>
                        <p>
                            {{ __("Vous pourrez déplacer chaque rubrique de gauche à droite et chaque sous-menus de bas en haut. Vous n'avez plus aucune excuse pour vous y mettre !") }}
                        </p>
                        <p>
                            {{ __("Nous vous rappelons que la sauvegarde d'un projet est disponible uniquement à nos utilisateurs inscrits. Voir ") }}<a href="#signUp" title="{{ __('Se créer un compte Easy to C') }}">{{ __('Créer un compte Easy to C') }}</a>
                        </p>
                    </div>  
                </div>

                <hr class="pb-5">

                <div id="formCreator">
                    <h2>{{ __('Guide d\'utilisation du générateur de formulaire') }}</h2>

                    <div id="importForm">
                        <h3>{{ __('Générer un formulaire à partir de données') }}</h3>
                        <p>
                            {{ __("Si vous possedez déjà un code personnel générant un formulaire par l'intermédiaire de données brutes ( fichiers JSON, fichiers CSV), vous avez la possibilité de travailler sur celui-ci via le bouton 'Importer des données' se situant en haut à gauche de l'interface.") }} 
                            {{ __("En important votre fichier de données, Easy To C generera votre code, vous aurez ensuite la possibilité de modifier votre formulaire selon vos souhaits.") }}
                        </p>
                    </div>  
                    
                    <div id="generateForm">
                        <h3>{{ __('Générer un formulaire exemple') }}</h3>
                        <p>
                            {{ __("Parce que nous n'avons pas toujours la bonne idée au moment où l'on voudrait, ou que vous avez souffert trop longtemps du syndrome de la page blanche, Easy to C vous propose de travailler en 
                            vous basant sur un exemple de formulaire.") }}
                            {{ __("En cliquant sur le bouton 'Générer un exemple', un formulaire sera généré automatiquement sur l'espace de travail d'Easy To C présentant l'ensemble des fonctionnalités proposées.
                            Vous pourrez ainsi vous faire une idée sur les possiblités offertes par le générateur de formulaire Easy To C et les nombreuses possibilités de personnalisation qu'il offre et ainsi les tester.") }}
                        </p>
                    </div>  

                    <div id="addElementForm">
                        <h3>{{ __('Ajouter du contenu au formulaire') }}</h3>
                        <p>
                            {{ __("En créant votre formulaire vous aurez la possibilité de modifier à loisir son titre, son lien de traitement des données ainsi que sa méthode (GET ou POST). Un bouton de réinitialisation permet de remettre à zéro l'espace de travail.
                            Vous avez 2 niveaux de personnalisation :") }}
                        </p>
                        <p>
                            <b>{{ __("Ajouter un élément statique") }}</b>
                        </p>
                        <p>
                            <strong>{{ __("Nouvelle section : ") }}</strong>{{ __("Ajouter une nouvelle section à votre formulaire.") }}
                        </p>
                        <p>
                            <strong>{{ __("Titre : ") }}</strong>{{ __("Ajoute un titre sur votre formulaire.") }}
                        </p>
                        <p>
                            <strong>{{ __("Paragraphe : ") }}</strong>{{ __("Ajoute un paragraphe.") }}
                        </p>
                        <p>
                            <strong>{{ __("Lien : ") }}</strong>{{ __("Ajoute un lien hypertexte à votre formulaire.") }}
                        </p>
                        <p>
                            <strong>{{ __("Liste numérotée : ") }}</strong>{{ __("Ajoute une liste numérotée au formulaire.") }}
                        </p>
                        <p>
                            <strong>{{ __("Liste à puces : ") }}</strong>{{ __("Ajoute une liste sous forme de puces au formulaire.") }}
                        </p>
                        <p>
                            <b>{{ __("Ajouter une question") }}</b>
                        </p>
                        <p>
                            <strong>{{ __("Réponse libre courte : ") }}</strong>{{ __("Ajoute une question avec un champs de texte court. Vous pouvez précisez le type de réponse attendu (Texte, Nombre, Email ou Date).") }}
                        </p>
                        <p>
                            <strong>{{ __("Réponse libre longue : ") }}</strong>{{ __("Ajoute une question avec un champs de texte long.") }}
                        </p>
                        <p>
                            <strong>{{ __("Réponse oui/non : ") }}</strong>{{ __("Ajoute une réponse.") }}
                        </p>
                        <p>
                            <strong>{{ __("Choix unique : ") }}</strong>{{ __("Ajoute une question à choix unique.") }}
                        </p>
                        <p>
                            <strong>{{ __("Choix multiple : ") }}</strong>{{ __("Ajoute une question à choix multiple.") }}
                        </p>
                        <p>
                            <strong>{{ __("Choix en liste : ") }}</strong>{{ __("Ajoute un choix en liste d'options. Vous pouvez ajouter des options et spécifier des choix multiples ou une réponse obligatoire par option.") }}
                        </p>
                        <p>
                            {{ __("Ainsi que les options d'actions sur les éléments et celles de mise en forme du texte.") }}
                        </p>
                        <p>
                            {{ __("Vous n'avez plus aucune excuse pour vous y mettre !") }}
                        </p>
                        <p>
                            {{ __("Nous vous rappelons que la sauvegarde d'un projet est disponible uniquement à nos utilisateurs inscrits. Voir ") }}<a href="#signUp" title="{{ __('Se créer un compte Easy to C') }}">{{ __('Créer un compte Easy to C') }}</a>
                        </p>
                    </div>  
                </div>

            </div>

            {{-- Sommaire --}}
            <div class="summary-container" tabindex="1">
                {{-- ANCHOR Sommaire --}}
                <h3>{{ __('Table des matières') }}</h3>
                <ul>
                    {{-- Compte Utilisateur --}}
                    <li>
                        <a href="#account" title="{{ __('Compte Easy to C') }}">{{ __('Compte Easy to C') }}</a>
                        <ul>
                            {{-- S'inscrire / Se connecter --}}
                            <li><a href="#signUp" title="{{ __('Se créer un compte Easy to C') }}">{{ __('Créer un compte Easy to C') }}</a></li>
                            <li><a href="#signIn" title="{{ __('Se connecter à son compte Easy to C') }}">{{ __('Se connecter à son compte') }}</a></li>
                            <li><a href="#listAccount" title="{{ __("Accéder à mes projets") }}">{{ __('Accéder à mes projets') }}</a></li>
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

            <hr class="pb-5">

        </div>
    </div>
    
@endsection