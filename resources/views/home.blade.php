
@extends('layouts/app')

@section('titre') {{ __('Accueil - EasyToC') }} @endsection

@section('content')
    <section class="home-present section-home">
        <div class="container">
            <div class="row">
                <div class="col-5">
                    <div class="home-present__txt">
                        <h2 class="home-present__txt__titre section-home__title">Laissez nous vous aider à rendre votre site web plus accessible</h2>
                        <p class="home-present__txt__descr">Pour certaines personnes, l’accès aux ressources web est difficile et pénible.
                                Rendre les sites accessibles est important pour que chacun, peu importe sa
                                condition, ait un accès égal aux savoirs et aux connaissances.
                                Easy to C peut vous aider dans cette démarche.
                        </p>
                        <div class="home-present__txt__btn">
                            <a href="" class="btn-primary btn-form-final">
                                <i class="fas fa-arrow-right"></i>
                                <p>Commencer un projet</p>
                            </a>
                            <a href="" class="btn-primary btn-form-final">
                                <i class="fas fa-arrow-right"></i>
                                <p>S'inscrire</p>
                            </a>
                        </div>
                        <ul class="home-present__txt__tips">
                            <li>Pourquoi rendre son site accessible ?</li>
                            <li>Pourquoi rendre son site accessible ?</li>
                            <li>Pourquoi rendre son site accessible ?</li>
                        </ul>
                    </div>
                </div>
                <div class="col-7">
                    <div class="home-present__video">
µ                        <iframe class="video-yt" src="https://www.youtube.com/embed/X51vpwvHq5I"></iframe>
                        <div class="video-yt__btn">
                            <a class="btn-primary btn-form-final" href="#">Auto-Description</a>
                            <a class="btn-primary btn-form-final" href="#">Activer les sous-titres</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="home-tools section-home">
        <div class="container">
            <div class="row home-tools__blocs">
                <div class="col-12">
                    <h2 class="section-home__title">Nous vous proposons trois outils pour vous faciliter la vie</h2>
                    <div class="section-home__underline"></div>
                </div>
                <div class="col-4">
                    <div class="home-tools__item">
                        <div class="home-tools__item__illu" style="background-image: url('./images/icone_menu.png');">

                        </div>
                        <div class="home-tools__item__txt">
                            <h3 class="home-tools__item__name">Menu</h3>
                            <div class="home-tools__underline"></div>
                            <p class="home-tools__item__descr">
                                Sin autem ad adulescentiam perduxissent, dirimi tamen interdum contentione vel uxoriae condicionis vel commodi alicuius, quod idem adipisci uterque non posset. Sin autem ad adulescentiam perduxissent, direm.
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
                                Sin autem ad adulescentiam perduxissent, dirimi tamen interdum contentione vel uxoriae condicionis vel commodi alicuius, quod idem adipisci uterque non posset. Sin autem ad adulescentiam perduxissent, direm.
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
                                Sin autem ad adulescentiam perduxissent, dirimi tamen interdum contentione vel uxoriae condicionis vel commodi alicuius, quod idem adipisci uterque non posset. Sin autem ad adulescentiam perduxissent, direm.
                            </p>
                            <a href="{{ route('formulaire') }}" class="btn-primary btn-form-final">Créer un formulaire</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section-home use-list">
        <div class="container">
            <div class="row use-list__blocs">
                <div class="col-12">
                    <h2 class="section-home__title">Voici ce que nous pouvons faire pour vous et vos utilisateurs</h2>
                    <div class="section-home__underline"></div>
                </div>
                <div class="col-4">
                    <div class="use-list__item">
                        <div class="use-list__item__icon" style="background-image: url('./images/002-view.png');"></div>
                        <h3 class="use-list__item__titre">Améliorer la visibilité</h3>
                        <p class="use-list__item__txt">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        </p>
                    </div>
                    <div class="use-list__item__ombre"></div>
                </div>
                <div class="col-4">
                    <div class="use-list__item">
                        <div class="use-list__item__icon" style="background-image: url('./images/003-clicker.png');"></div>
                        <h3 class="use-list__item__titre">Rendre l'intéraction facile</h3>
                        <p class="use-list__item__txt">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        </p>
                    </div>
                    <div class="use-list__item__ombre"></div>
                </div>
                <div class="col-4">
                    <div class="use-list__item">
                        <div class="use-list__item__icon" style="background-image: url('./images/001-ear.png');"></div>
                        <h3 class="use-list__item__titre">Etre compris sans être vu</h3>
                        <p class="use-list__item__txt">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        </p>
                    </div>
                    <div class="use-list__item__ombre"></div>
                </div>
            </div>
        </div>
    </section>
    <section class="section-home def">
        <div class="container">
            <div class="row def__blocs">
                <div class="col-12">
                    <h2 class="section-home__title">Améliorer l’accessibilité de mon site, à quoi ça sert ?</h2>
                    <div class="section-home__underline"></div>
                </div>
                <div class="col-4">
                   <div class="def__txt">
                        <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, 
                        </p>
                        <p class="def__txt__citation"> L’accessibilité pourrait être considérée comme une source d’opportunités et de développement par les acteurs du Web.
                        </p>
                        <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, 
                        </p>
                   </div>
                </div>
                <div class="col-4">
                    <div class="def__illu" style="background-image: url('./images/planete_people.png');"></div>
                </div>
                <div class="col-4">
                    <div class="def__txt">
                            <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, 
                            </p>
                            <p class="def__txt__citation">L’univers d’Internet ne doit pas être une source d’exclusion supplémentaire, mais comme un outil favorisant l’inclusion sociale.
                            </p>
                            <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, 
                            </p>
                    </div>
                </div>
            </div>
        </div>
    </section>



@endsection