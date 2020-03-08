<div data-tag="menu" class="theme-blue" id="generated-menu" name="generated-menu">
    <nav id="full-menu" role="menubar">
        <div class="menu-identity">
        {{-- <a href="/" class="menu-identity">
            <div class="menu-logo" id="menu-logo" style="background-image: url('{{ URL::asset('images/Logo-white.png') }}')"></div> --}}
            <div class="menu-logo" id="menu-logo" style="background-image: url({{ URL::asset('images/Logo-white.png') }})"></div>
            <span contenteditable="true" data-tag="menu-title" class="menu-title" id="menu-title">
                {{ __('Titre du menu') }}
            </span>
            <span class="menu-separator"></span>
        </div>
        <ul class="menu-items" role="menubar" id="menubar-easytoc">
            <li role="none" class="menu-item element-container">
                <a role="menuitem"  href="/home" class="menu-name" tabindex="0" title="{{ __('Se rendre sur la page Accueil') }}">
                    <span contenteditable="true" class="menu-item-title">
                        {{ __('Accueil') }}
                    </span>
                </a>
            </li>
            <li role="none" class="menu-item has-submenu element-container">
                <button role="menuitem" aria-haspopup="true" aria-expanded="false" aria-controls="presentation_menu"  class="menu-name menu-submenus closed" tabindex="0" onclick="displayMenu(event)">
                    <span contenteditable="true" class="menu-item-title">
                        {{ __('Présentation') }}
                    </span>
                </button>
                <ul role="menu" class="submenu hidden" id="presentation_menu">
                    <li role="none" class="menu-item" >
                        <a role="menuitem" href="/" class="menu-link sub-link" title="{{ __('Se rendre sur la page Présentation - Notre équipe') }}">
                            <span contenteditable="true" class="menu-item-title">
                                {{ __('Notre équipe') }}
                            </span>
                        </a>
                    </li>
                    <li role="none" class="menu-item">
                        <a role="menuitem"  href="/" class="menu-link sub-link" title="{{ __('Se rendre sur la page Présentation - Nos valeurs') }}">
                            <span contenteditable="true" class="menu-item-title">
                                {{ __('Nos valeurs') }}
                            </span>
                        </a>
                    </li>
                    <li role="none" class="menu-item">
                        <a role="menuitem"  href="/" class="menu-link sub-link" title="{{ __('Se rendre sur la page Présentation - Notre histoire') }}">
                            <span contenteditable="true" class="menu-item-title">
                                {{ __('Notre histoire') }}
                            </span>
                        </a>
                    </li>
                </ul>
            </li>
            <li role="none" class="menu-item has-submenu element-container">
                <button role="menuitem" aria-haspopup="true" aria-expanded="false" aria-controls="catalog_menu" class="menu-name menu-submenus closed" tabindex="0" onclick="displayMenu(event)">
                    <span contenteditable="true" class="menu-item-title">
                        {{ __('Catalogue') }}
                    </span>
                </button>
                <ul role="menu" class="submenu hidden" id="catalog_menu">
                    <li role="none" class="menu-item">
                        <a role="menuitem" href="/sneakers" class="menu-link sub-link" title="{{ __('Se rendre sur la page Catalogue - Baskets') }}">
                            <span contenteditable="true" class="menu-item-title">
                                {{ __('Baskets') }}
                            </span>
                        </a>
                    </li>
                    <li role="none" class="menu-item">
                        <a role="menuitem" href="/heels" class="menu-link sub-link" title="{{ __('Se rendre sur la page Catalogue - Talons') }}">
                            <span contenteditable="true" class="menu-item-title">
                                {{ __('Talons') }}
                            </span>
                        </a>
                    </li>
                    <li role="none" class="menu-item">
                        <a role="menuitem" href="/flipflops" class="menu-link sub-link" title="{{ __('Se rendre sur la page Catalogue - Claquettes') }}">
                            <span contenteditable="true" class="menu-item-title">
                                {{ __('Claquettes') }}
                            </span>
                        </a>
                    </li>
                </ul>
            </li>
            <li role="none" class="menu-item element-container">
                <a role="menuitem"  href="/contact" class="menu-link" tabindex="0" title="{{ __('Se rendre sur la page Contact') }}">
                    <span contenteditable="true" class="menu-item-title">
                        {{ __('Contact') }}
                    </span>
                </a>
            </li>
        </ul>
        <div class="bars_easytoc" aria-haspopup="true" tabindex="0">
            <div class="bars_easytoc__line line1"></div>
            <div class="bars_easytoc__line line2"></div>
            <div class="bars_easytoc__line line3"></div>
        </div>
    </nav>
</div>
