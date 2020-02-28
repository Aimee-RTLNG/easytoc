<div data-tag="menu" class="theme-blue" id="generated-menu" name="generated-menu">
    <nav id="full-menu" aria-label="{{ __('Mon menu') }}" role="menubar">
        <div class="menu-identity">
            <div class="menu-logo" id="menu-logo" style="background-image: url({{ URL::asset('images/favicon.ico') }})"></div>
            <span contenteditable="true" data-tag="menu-title" class="menu-title" id="menu-title">
                {{ __('Titre du menu') }}
            </span>
            <span class="menu-separator"></span>
        </div>
        <ul class="menu-items" role="menubar" aria-label="{{ __('Mon menu') }}" id="menubar-easytoc">
            <li role="none" class="menu-item">
                <a role="menuitem"  href="/home" class="menu-name" tabindex="0">
                    <span contenteditable="true" class="menu-item-title">
                        {{ __('Accueil') }}
                    </span>
                </a>
            </li>
            <li role="none" class="menu-item has-submenu">
                <button role="menuitem" aria-haspopup="true" aria-expanded="false" aria-controls="presentation_menu"  class="menu-name menu-submenus closed" tabindex="0" onclick="displayMenu(event)">
                    <span contenteditable="true" class="menu-item-title">
                        {{ __('Présentation') }}
                    </span>
                </button>
                <ul role="menu" class="submenu hidden" aria-label="" id="presentation_menu">
                    <li role="none" class="menu-item" >
                        <a role="menuitem" href="/" class="menu-link" >
                            <span contenteditable="true" class="menu-item-title">
                                {{ __('Notre équipe') }}
                            </span>
                        </a>
                    </li>
                    <li role="none" class="menu-item">
                        <a role="menuitem"  href="/" class="menu-link" >
                            <span contenteditable="true" class="menu-item-title">
                                {{ __('Nos valeurs') }}
                            </span>
                        </a>
                    </li>
                    <li role="none" class="menu-item">
                        <a role="menuitem"  href="/" class="menu-link" >
                            <span contenteditable="true" class="menu-item-title">
                                {{ __('Notre histoire') }}
                            </span>
                        </a>
                    </li>
                </ul>
            </li>
            <li role="none" class="menu-item has-submenu">
                <button role="menuitem" aria-haspopup="true" aria-expanded="false" aria-controls="catalog_menu" class="menu-name menu-submenus closed" tabindex="0" onclick="displayMenu(event)">
                    <span contenteditable="true" class="menu-item-title">
                        {{ __('Catalogue') }}
                    </span>
                </button>
                <ul role="menu" class="submenu hidden" aria-label="" id="catalog_menu">
                    <li role="none" class="menu-item">
                        <a role="menuitem" href="/sneakers" class="menu-link" >
                            <span contenteditable="true" class="menu-item-title">
                                {{ __('Baskets') }}
                            </span>
                        </a>
                    </li>
                    <li role="none" class="menu-item">
                        <a role="menuitem" href="/heels" class="menu-link" >
                            <span contenteditable="true" class="menu-item-title">
                                {{ __('Talons') }}
                            </span>
                        </a>
                    </li>
                    <li role="none" class="menu-item">
                        <a role="menuitem" href="/flipflops" class="menu-link" >
                            <span contenteditable="true" class="menu-item-title">
                                {{ __('Claquettes') }}
                            </span>
                        </a>
                    </li>
                </ul>
            </li>
            <li role="none" class="menu-item" >
                <a role="menuitem"  href="/contact" class="menu-link" tabindex="0">
                    <span contenteditable="true" class="menu-item-title">
                        {{ __('Contact') }}
                    </span>
                </a>
            </li>
        </ul>
    </nav>
</div>
