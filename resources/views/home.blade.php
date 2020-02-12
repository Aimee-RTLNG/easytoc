@extends('layouts/app')

@section('titre') {{ __('Accueil') }} - EasyToC @endsection

@section('content')
    <section class="home-present section-home">
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
            <div class="row section-home__row">
                <div class="col-xl-5 col-lg-6">
                    <div class="home-present__txt">
                        <h2 class="home-present__txt__titre section-home__title">{{ __('Laissez nous vous aider à rendre votre site web plus accessible') }}</h2>
                        <p class="home-present__txt__descr">{{__('Pour certaines personnes, l’accès aux ressources web est difficile et pénible. Rendre les sites accessibles est important pour que chacun, peu importe sa condition, ait un accès égal aux savoirs et aux connaissances. Easy to C peut vous aider dans cette démarche.')}}
                        </p>
                        <div class="home-present__txt__btn">
                        <div class="nav-item dropdown select-home btn-form-final btn-primary"  title="{{__('Menu création d´éléments HTML')}}">
                        <a class="nav-link dropdown-toggle select-home__link" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-arrow-right"></i>
                            {{__('Commencer un projet')}}
                        </a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="{{ route('formulaire') }}">{{ __('Créer un formulaire') }}</a>
                                    <a class="dropdown-item" href="{{ route('menu') }}">{{ __('Créer un menu') }}</a>
                                    <a class="dropdown-item" href="{{ route('tableau') }}">{{ __('Créer un tableau') }}</a>
                                </div>
                            </div>
                            <a href="register" class="btn-primary btn-form-final">
                                <i class="fas fa-arrow-right"></i>
                                <p>{{__("S'inscrire")}}</p>
                            </a>
                        </div>
                        <ul class="home-present__txt__tips">
                            <li><a class="link-ancre" tabindex="0" href="#reasons">{{__('Pourquoi rendre son site accessible ?')}}</a></li>
                            <li><a class="link-ancre" tabindex="0" href="#how">{{__('Comment Easy to C peut m’aider ?')}}</a></li>
                            <li><a class="link-ancre" tabindex="0" href="#tools">{{__('Comment fonctionnent les outils Easy to C ?')}}</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-7 col-lg-6">
                    <div class="home-present__video">
                        <iframe class="video-yt" src="https://www.youtube.com/embed/X51vpwvHq5I"></iframe>
                        {{-- <div class="video-yt__btn">
                            <a class="btn-primary btn-form-final" href="#">{{__('Audio-Description')}}</a>
                            <a class="btn-primary btn-form-final" href="#">{{__('Activer les sous-titres')}}</a>
                        </div> --}}
                    </div>
                </div>
            </div>
        </div>
        <div class="next-section" >
            <div tabindex="0"><i class="fas fa-chevron-down"></i></div>
        </div>
    </section>
    <section class="home-tools section-home" id="tools">
        <div class="container">
            <div class="row home-tools__blocs">
                <div class="col-12 section-home__entete">
                    <h2 class="section-home__title">{{__('Nous vous proposons trois outils pour vous faciliter la vie')}}</h2>
                    <div class="section-home__underline"></div>
                </div>
                <div class="slider-tools">
                    <div class="col-lg-4 col-md-6">
                        <div class="home-tools__item" tabindex="0">
                            <div class="home-tools__item__illu" style="background-image: url('./images/icone_menu.png');">
    
                            </div>
                            <div class="home-tools__item__txt">
                                <h3 class="home-tools__item__name">{{__('Menu')}}</h3>
                                <div class="home-tools__underline"></div>
                                <p class="home-tools__item__descr">
                                    {{__('Un menu simple et design. Il permettra à vos utilisateur de naviguer paisiblement sur votre site web. Il suffit de quelques clics pour faire disparaître la complexité du code et faire apparaître le menu dont vous avez besoin.')}}
                                </p>
                                <a href="{{ route('menu') }}" class="btn-primary btn-form-final">{{__('Créer un menu')}}</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="home-tools__item" tabindex="0">
                            <div class="home-tools__item__illu" style="background-image: url('./images/icone_table.png');">
    
                            </div>
                            <div class="home-tools__item__txt">
                                <h3 class="home-tools__item__name">{{__('Tableau')}}</h3>
                                <div class="home-tools__underline"></div>
                                <p class="home-tools__item__descr">
                                    {{__('Facile à analyser, code optimisé et accessible. Ses fonctionnalités permettent la création de lignes et colonnes à l’infini ainsi que la composition de cases à fusionner et bien d’autres fonctions encore.')}}
                                </p>
                                <a href="{{ route('tableau') }}" class="btn-primary btn-form-final">{{__('Créer un tableau')}}</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="home-tools__item" tabindex="0">
                            <div class="home-tools__item__illu" style="background-image: url('./images/icone_form.png');">
    
                            </div>
                            <div class="home-tools__item__txt">
                                <h3 class="home-tools__item__name">{{__('Formulaire')}}</h3>
                                <div class="home-tools__underline"></div>
                                <p class="home-tools__item__descr">
                                    {{__('Afin de recevoir des réponses favorables sur vos formulaires, il faut se poser la question : est-ce que tout le monde peut y répondre ? EasyToC vous permet de manipuler tous types de champs de formulaire pour créer celui dont vous avez besoin.')}}
                                </p>
                                <a href="{{ route('formulaire') }}" class="btn-primary btn-form-final">{{__('Créer un formulaire')}}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section-home use-list" id="how">
        <div class="container">
            <div class="row use-list__blocs">
                <div class="col-12 section-home__entete">
                    <h2 class="section-home__title">{{__('Voici ce que nous pouvons faire pour vous et vos utilisateurs')}}</h2>
                    <div class="section-home__underline"></div>
                </div>
                <div class="slider-use-list">
                    <div class="col-lg-4 col-md-6">
                        <div class="use-list__item" tabindex="0">
                            <div class="use-list__item__icon" style="background-image: url('./images/002-view.png');"></div>
                            <h3 class="use-list__item__titre">{{__('Améliorer la visibilité')}}</h3>
                            <p class="use-list__item__txt">
                                {{__('Un site web accessible reflète un code optimisé, c’est à dire quelque chose de propre. Et même si vos utilisateur ne le vois pas, votre navigateur passe plus de temps sur vos pages et ainsi favorise votre référencement naturel. Ce qui permet d’être mieux vu et par tous.')}} 
                            </p>
                        </div>
                        <div class="use-list__item__ombre"></div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="use-list__item" tabindex="0">
                            <div class="use-list__item__icon" style="background-image: url('./images/003-clicker.png');"></div>
                            <h3 class="use-list__item__titre">{{__("Rendre l'intéraction facile")}}</h3>
                            <p class="use-list__item__txt">
                                {{__('Interagir avec une page internet peut parfois s’avérer contraignant. Une erreur de code peut  gêner vos utilisateur, qui mécontent ou simplement désarçonner quitte le site. EasyToC vous guide, pour ne pas commettre d’erreurs et ainsi penser au confort de vos utilisateurs.')}}
                            </p>
                        </div>
                        <div class="use-list__item__ombre"></div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="use-list__item" tabindex="0">
                            <div class="use-list__item__icon" style="background-image: url('./images/001-ear.png');"></div>
                            <h3 class="use-list__item__titre">{{__('Etre compris par tous')}}</h3>
                            <p class="use-list__item__txt">
                                {{__("Négliger l’accessibilité d’un site web peut provoquer la perte de nombreux prospects. C’est pourquoi, EasyToC permet à vos utilisateur de voir et de comprendre vos contenus sans pour autant avoir la capacité de voir. Notamment avec la compatibilité de son code et les lecteurs d’écrans.")}}
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
            <div class="row def__blocs" tabindex="0">
                <div class="col-12 section-home__entete">
                    <h2 class="section-home__title">{{__('Améliorer l’accessibilité de mon site, à quoi ça sert ?')}}</h2>
                    <div class="section-home__underline"></div>
                </div>
                <div class="col-lg-4">
                   <div class="def__txt">
                        <p>
                            <span class="citation">"{{__('Mettre le Web et ses services à la disposition de tous les individus, quels que soient leur matériel ou logiciel, leur infrastructure réseau, leur langue maternelle, leur culture, leur localisation, géographique, ou leurs aptitudes physiques ou mentales.')}}"</span>
                            {{__("Voici la définition de l'accessibilité. Nous pouvons souvent avoir une image réductrice de l’accessibilité en pensant qu’il s’agit uniquement d’adaptements pour les handicapés mais ce terme concerne bien plus de monde. C’est ce qui est transcrit à travers de cette définition.")}}
                        </p>
                        <p class="def__txt__citation"> {{__('L’accessibilité pourrait être considérée comme une source d’opportunités et de développement par les acteurs du Web.')}}
                        </p>
                        <p> {{__('Améliorer l’accessibilité de votre site web vous permettra de toucher un public plus large, d’augmenter le trafic et les conversions sur votre site. Il faut toujours être conscient qu’entre 15% et 20% de la population souffrent d’un handicap.Ne pas travailler sur l’accessibilité web de son site, c’est se priver de millions de visiteurs potentiels.')}}
                        </p>
                   </div>
                </div>
                <div class="col-lg-4">
                    <div class="def__illu" style="background-image: url('./images/planete_people.png');"></div>
                </div>
                <div class="col-lg-4">
                    <div class="def__txt">
                        <p>{{__('En France, la loi du 11 février 2005, “Pour l’égalité des droits et des chances, la participation et la citoyenneté des personnes handicapées” impose, dans son article 47, “l’accessibilité des services de communication publique en ligne pour les services de l’Etat, des collectivités territoriales et des établissements publics qui en dépendent”, dans un premier temps. Dans d’autres pays cette obligation existe depuis les années 90, c’est le cas des Etats-Unis.')}}
                        </p>
                        <p class="def__txt__citation">{{__('L’univers d’Internet ne doit pas être une source d’exclusion supplémentaire, mais comme un outil favorisant l’inclusion sociale.')}}
                        </p>
                        <p>{{__('L’Europe parle de l’accessibilité numérique comme d’une obligation citoyenne : une plus large diffusion de produits et services numériques accessibles favorise l’insertion professionnelle, l’intégration sociale et un cadre de vie autonome.')}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

@endsection