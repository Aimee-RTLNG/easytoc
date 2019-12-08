
@extends('layouts/app')

@section('titre') {{ __('Accueil - EasyToC') }} @endsection

@section('content')
    <section class="home-present section-home">
        <div class="container">
            <div class="row section-home__row">
                <div class="col-xl-5 col-lg-6">
                    <div class="home-present__txt">
                        <h2 class="home-present__txt__titre section-home__title">Laissez nous vous aider à rendre votre site web plus accessible</h2>
                        <p class="home-present__txt__descr">Pour certaines personnes, l’accès aux ressources web est difficile et pénible.
                            Rendre les sites accessibles est important pour que chacun, peu importe sa
                            condition, ait un accès égal aux savoirs et aux connaissances.
                            Easy to C peut vous aider dans cette démarche.
                        </p>
                        <div class="home-present__txt__btn">
                            <div class="dropdown btn-primary btn-form-final">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fas fa-arrow-right"></i> Commencer un projet
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="menu">Menu</a>
                                        <a class="dropdown-item" href="formulaire">Formulaire</a>
                                        <a class="dropdown-item" href="tableau">Tableau</a>
                                    </div>
                            </div>
                            <a href="register" class="btn-primary btn-form-final">
                                <i class="fas fa-arrow-right"></i>
                                <p>S'inscrire</p>
                            </a>
                        </div>
                        <ul class="home-present__txt__tips">
                            <li><a href="#">Pourquoi rendre son site accessible ?</a></li>
                            <li><a href="#">Comment Easy to C peut m’aider ?</a></li>
                            <li><a href="#">Comment fonctionnent les outils Easy to C ?</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-7 col-lg-6">
                    <div class="home-present__video">
                        <iframe class="video-yt" src="https://www.youtube.com/embed/X51vpwvHq5I"></iframe>
                        <div class="video-yt__btn">
                            <a class="btn-primary btn-form-final" href="#">Auto-Description</a>
                            <a class="btn-primary btn-form-final" href="#">Activer les sous-titres</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="home-tools section-home" id="tools">
        <div class="container">
            <div class="row home-tools__blocs">
                <div class="col-12 section-home__entete">
                    <h2 class="section-home__title">Nous vous proposons trois outils pour vous faciliter la vie</h2>
                    <div class="section-home__underline"></div>
                </div>
                <div class="slider-tools">
                    <div class="col-lg-4 col-md-6">
                            <div class="home-tools__item">
                                <div class="home-tools__item__illu" style="background-image: url('./images/icone_menu.png');">
        
                                </div>
                                <div class="home-tools__item__txt">
                                    <h3 class="home-tools__item__name">Menu</h3>
                                    <div class="home-tools__underline"></div>
                                    <p class="home-tools__item__descr">
                                        Un menu simple et design. Il permettra à vos utilisateur de naviguer paisiblement sur votre site web. Il suffit de quelques clics pour faire disparaître la complexité du code et faire apparaître le menu dont vous avez besoin.
                                    </p>
                                    <a href="{{ route('menu') }}" class="btn-primary btn-form-final">Créer un menu</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6">
                            <div class="home-tools__item">
                                <div class="home-tools__item__illu" style="background-image: url('./images/icone_table.png');">
        
                                </div>
                                <div class="home-tools__item__txt">
                                    <h3 class="home-tools__item__name">Tableau</h3>
                                    <div class="home-tools__underline"></div>
                                    <p class="home-tools__item__descr">
                                        Facile à analyser, code optimisé et accessible. Ses fonctionnalités permettent la création de lignes et colonnes à l’infini ainsi que la composition de cases à fusionner et bien d’autres fonctions encore.
                                    </p>
                                    <a href="{{ route('tableau') }}" class="btn-primary btn-form-final">Créer un tableau</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="home-tools__item">
                                <div class="home-tools__item__illu" style="background-image: url('./images/icone_form.png');">
        
                                </div>
                                <div class="home-tools__item__txt">
                                    <h3 class="home-tools__item__name">Formulaire</h3>
                                    <div class="home-tools__underline"></div>
                                    <p class="home-tools__item__descr">
                                        Afin de recevoir des réponses favorables sur vos formulaires, il faut se poser la question : est-ce que tout le monde peut y répondre ? EasyToC vous permet de manipuler tous types de champs de formulaire pour créer celui dont vous avez besoin.                             </p>
                                    <a href="{{ route('formulaire') }}" class="btn-primary btn-form-final">Créer un formulaire</a>
                                </div>
                            </div>
                        </div>
{{-- Aimée --}}
                        {{-- <div class="home-tools__item__txt">
                            <h3 class="home-tools__item__name">Menu</h3>
                            <div class="home-tools__underline"></div>
                            <p class="home-tools__item__descr">
                                Nous vous proposons un outil de création de menu de navigation pour votre site. Vous pouvez le personnaliser et même ajouter plusieurs niveaux de profondeurs : il sera accessible par tous vos utilisateurs !
                            </p>
                            <a href="{{ route('menu') }}" class="btn-primary btn-form-final">Créer un menu</a>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="home-tools__item">
                        <div class="home-tools__item__illu" style="background-image: url('./images/icone_table.png');">

                        </div>
                        <div class="home-tools__item__txt">
                            <h3 class="home-tools__item__name">Tableau</h3>
                            <div class="home-tools__underline"></div>
                            <p class="home-tools__item__descr">
                                Il est parfois compliqué de rendre un tableau de données lisible et compréhensible par tous. C'est pourquoi vous pouvez créer un tableau via notre outil : il sera formatté pour être accessible, peu importe les données.
                            </p>
                            <a href="{{ route('tableau') }}" class="btn-primary btn-form-final">Créer un tableau</a>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="home-tools__item">
                        <div class="home-tools__item__illu" style="background-image: url('./images/icone_form.png');">

                        </div>
                        <div class="home-tools__item__txt">
                            <h3 class="home-tools__item__name">Formulaire</h3>
                            <div class="home-tools__underline"></div>
                            <p class="home-tools__item__descr">
                                Un formulaire de contact est très utile pour communiquer avec vos internautes : pour obtenir le plus de réponses possibles, il est important d'avoir un formulaire accessible. Notre outil vous aidera à faire cela.
                            </p>
                            <a href="{{ route('formulaire') }}" class="btn-primary btn-form-final">Créer un formulaire</a>
                        </div>
                    </div> --}}

                </div>
            </div>
        </div>
    </section>
    <section class="section-home use-list" id="how">
        <div class="container">
            <div class="row use-list__blocs">
                <div class="col-12 section-home__entete">
                    <h2 class="section-home__title">Voici ce que nous pouvons faire pour vous et vos utilisateurs</h2>
                    <div class="section-home__underline"></div>
                </div>
                <div class="slider-use-list">
                    <div class="col-lg-4 col-md-6">
                        <div class="use-list__item">
                            <div class="use-list__item__icon" style="background-image: url('./images/002-view.png');"></div>
                            <h3 class="use-list__item__titre">Améliorer la visibilité</h3>
                            <p class="use-list__item__txt">
                                Un site web accessible reflète un code optimisé, c’est à dire quelque chose de propre. Et même si vos utilisateur ne le vois pas, votre navigateur passe plus de temps sur vos pages et ainsi favorise votre référencement naturel. Ce qui permet d’être mieux vu et par tous. 
                                {{-- Les utilisateurs de votre site doivent pouvoir voir tout le contenu important proposé : avec Easy to C, peu importe l'affichage ou la vue de l'utilisateur, votre contenu sera perceptible par tous, de la façon dont vous le souhaitez. --}}
                            </p>
                        </div>
                        <div class="use-list__item__ombre"></div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="use-list__item">
                            <div class="use-list__item__icon" style="background-image: url('./images/003-clicker.png');"></div>
                            <h3 class="use-list__item__titre">Rendre l'intéraction facile</h3>
                            <p class="use-list__item__txt">
                                Interagir avec une page internet peut parfois s’avérer contraignant. Une erreur de code peut  gêner vos utilisateur, qui mécontent ou simplement désarçonner quitte le site. EasyToC vous guide, pour ne pas commettre d’erreurs et ainsi penser au confort de vos utilisateurs.
                                {{-- Avec Easy to C, les utilisateurs pourront utiliser vos composants d'interface utilisateur et naviguer dans le contenu, même si ils ne peuvent pas utiliser de souris ou clavier, ou s'ils sont sur un écran tactile.  --}}
                            </p>
                        </div>
                        <div class="use-list__item__ombre"></div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="use-list__item">
                            <div class="use-list__item__icon" style="background-image: url('./images/001-ear.png');"></div>
                            <h3 class="use-list__item__titre">Etre compris par tous</h3>
                            <p class="use-list__item__txt">
                                Négliger l’accessibilité d’un site web peut provoquer la perte de nombreux prospects. C’est pourquoi, EasyToC permet à vos utilisateur de voir et de comprendre vos contenus sans pour autant avoir la capacité de voir. Notamment avec la compatibilité de son code et les lecteurs d’écrans.
                                {{-- Les composants crées avec les outils Easy to C permettront aux utilisateurs de comprendre les informations transmises, sans confusion ou doutes. Avec nos différents guides, vous pourrez également adapter votre contenu. --}}
                            </p>
                        </div>
                        <div class="use-list__item__ombre"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section-home def" id="reasons">
        <div class="container">
            <div class="row def__blocs">
                <div class="col-12 section-home__entete">
                    <h2 class="section-home__title">Améliorer l’accessibilité de mon site, à quoi ça sert ?</h2>
                    <div class="section-home__underline"></div>
                </div>
                <div class="col-lg-4">
                   <div class="def__txt">

                        <p>
                            <span class="citation">"Mettre le Web et ses services à la disposition de tous les individus, quels que soient leur matériel ou logiciel, leur infrastructure réseau, leur langue maternelle, leur culture, leur localisation, géographique, ou leurs aptitudes physiques ou mentales."</span>
                            Voici la définition de l'accessibilité. Nous pouvons souvent avoir une image réductrice de l’accessibilité en pensant qu’il s’agit uniquement d’adaptements pour les handicapés mais ce terme concerne bien plus de monde. C’est ce qui est transcrit à travers de cette définition.
                        </p>
                        <p class="def__txt__citation"> L’accessibilité pourrait être considérée comme une source d’opportunités et de développement par les acteurs du Web.
                        </p>
                        <p> Améliorer l’accessibilité de votre site web vous permettra de toucher un public plus large, d’augmenter le trafic et les conversions sur votre site. Il faut toujours être conscient qu’entre 15% et 20% de la population souffrent d’un handicap.Ne pas travailler sur l’accessibilité web de son site, c’est se priver de millions de visiteurs potentiels.

                        {{-- <p>Lorsque l’on vous parle d’accessibilité numérique, vous pensez sûrement en priorité à une partie de la population : les personnes handicapées. Vous n’avez pas tout à fait tort car cette catégorie de personnes possède des besoins particuliers qui doivent être pris en compte, notamment dans la création de sites web.
                        </p>
                        <p class="def__txt__citation"> L’accessibilité pourrait être considérée comme une source d’opportunités et de développement par les acteurs du Web.
                        </p>
                        <p>Par exemple, les personnes aveugles doivent pouvoir accéder aux informations des sites internet comme les autres, grâce à du matériel dédié, permettant de restituer la page sous forme audio ou en braille. Une personne sourde doit également avoir la possibilité de mettre des sous-titres sur une vidéo et les internautes handicapés moteur doivent avoir la possibilité de naviguer uniquement à l’aide du clavier. Par exemple, les personnes aveugles doivent pouvoir accéder aux informations des sites internet comme les autres, grâce à du matériel dédié, permettant de restituer la page sous forme audio ou en braille.  --}}
                        </p>
                   </div>
                </div>
                <div class="col-lg-4">
                    <div class="def__illu" style="background-image: url('./images/planete_people.png');"></div>
                </div>
                <div class="col-lg-4">
                    <div class="def__txt">
                        <p>En France, la loi du 11 février 2005, “Pour l’égalité des droits et des chances, la participation et la citoyenneté des personnes handicapées” impose, dans son article 47, “l’accessibilité des services de communication publique en ligne pour les services de l’Etat, des collectivités territoriales et des établissements publics qui en dépendent”, dans un premier temps. Dans d’autres pays cette obligation existe depuis les années 90, c’est le cas des Etats-Unis.
                        </p>
                        <p class="def__txt__citation">L’univers d’Internet ne doit pas être une source d’exclusion supplémentaire, mais comme un outil favorisant l’inclusion sociale.
                        </p>
                        <p>L’Europe parle de l’accessibilité numérique comme d’une obligation citoyenne : une plus large diffusion de produits et services numériques accessibles favorise l’insertion professionnelle, l’intégration sociale et un cadre de vie autonome.
                        {{-- <p>Une personne sourde doit également avoir la possibilité de mettre des sous-titres  De plus, cette “partie infime de la population” représente 80 millions de personnes en Europe : l’accessibilité numérique est donc primordiale pour ces individus et leur permet une meilleure intégration sociale. 
                        </p>
                        <p class="def__txt__citation">L’univers d’Internet ne doit pas être une source d’exclusion supplémentaire, mais comme un outil favorisant l’inclusion sociale.
                        </p>
                        <p>L’accessibilité ne touche pas seulement cette catégorie de personne spécifique, mais bel et bien tous les individus utilisant le web. Effectivement, de nombreux utilisateurs peuvent rencontrer des difficultés d’accès aux services en ligne : les personnes connectées en bas débit, peu compétentes au niveau informatique, équipées de configurations spécifiques, ou encore les seniors, de plus en plus présents sur le web. L’accessibilité numérique serait alors utile à toutes les sphères de la société et à tous les individus : il semble donc nécessaire de la mettre en place rapidement. --}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

@endsection