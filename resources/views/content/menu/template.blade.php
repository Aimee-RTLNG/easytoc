<div data-tag="menu" class="theme-blue" id="generated-menu" name="generated-menu">
    <nav id="full-menu" aria-label="{{ __('Mon menu') }}" role="menubar">
        <div class="menu-identity">
            <div class="menu-logo" style="background-image: url({{ URL::asset('images/favicon.ico') }})"></div>
            <span contenteditable="true" data-tag="menu-title" class="menu-title">
                {{ __('Mon menu') }}
            </span>
            <span class="menu-separator"></span>
        </div>
        <ul class="menu-items" role="menubar" aria-label="{{ __('Mon menu') }}" id="menubar-easytoc">
            <li role="none" class="menu-item">
                <a role="menuitem" tabindex="0" href="/home" class="menu-link" onclick="return false;">
                    <span contenteditable="true" class="menu-item-title">
                        {{ __('Accueil') }}
                    </span>
                </a>
            </li>
            <li role="none" class="menu-item has-submenu">
                <a role="menuitem" aria-haspopup="true" aria-expanded="false" tabindex="0" class="menu-title" onclick="return false;">
                    <span contenteditable="true" class="menu-item-title">
                        {{ __('Présentation') }}
                    </span>
                </a>
                <ul role="menu" aria-label="">
                    <li role="none" class="menu-item">
                        <a role="menuitem" tabindex="-1" href="/team" class="menu-link" onclick="return false;">
                            <span contenteditable="true" class="menu-item-title">
                                {{ __('Notre équipe') }}
                            </span>
                        </a>
                    </li>
                    <li role="none" class="menu-item">
                        <a role="menuitem" tabindex="-1" href="/values" class="menu-link" onclick="return false;">
                            <span contenteditable="true" class="menu-item-title">
                                {{ __('Nos valeurs') }}
                            </span>
                        </a>
                    </li>
                    <li role="none" class="menu-item">
                        <a role="menuitem" tabindex="-1" href="/history" class="menu-link" onclick="return false;">
                            <span contenteditable="true" class="menu-item-title">
                                {{ __('Notre histoire') }}
                            </span>
                        </a>
                    </li>
                </ul>
            </li>
            <li role="none" class="menu-item has-submenu">
                <a role="menuitem" aria-haspopup="true" aria-expanded="false" tabindex="0" class="menu-link" href="/catalog" onclick="return false;">
                    <span contenteditable="true" class="menu-item-title">
                        {{ __('Catalogue') }}
                    </span>
                </a>
                <ul role="menu" aria-label="">
                    <li role="none" class="menu-item">
                        <a role="menuitem" tabindex="-1" href="/sneakers" class="menu-link" onclick="return false;">
                            <span contenteditable="true" class="menu-item-title">
                                {{ __('Baskets') }}
                            </span>
                        </a>
                    </li>
                    <li role="none" class="menu-item">
                        <a role="menuitem" tabindex="-1" href="/heels" class="menu-link" onclick="return false;">
                            <span contenteditable="true" class="menu-item-title">
                                {{ __('Talons') }}
                            </span>
                        </a>
                    </li>
                    <li role="none" class="menu-item">
                        <a role="menuitem" tabindex="-1" href="/flipflops" class="menu-link" onclick="return false;">
                            <span contenteditable="true" class="menu-item-title">
                                {{ __('Claquettes') }}
                            </span>
                        </a>
                    </li>
                </ul>
            </li>
            <li role="none" class="menu-item">
                <a role="menuitem" tabindex="0" href="/contact" class="menu-link" onclick="return false;">
                    <span contenteditable="true" class="menu-item-title">
                        {{ __('Contact') }}
                    </span>
                </a>
            </li>
        </ul>
    </nav>
</div>
