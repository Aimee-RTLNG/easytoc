<div data-tag="menu" class="theme-blue" id="generated-menu" name="generated-menu">
    <nav id="full-menu" aria-label="{{ __('Menu de navigation') }}">
        <div class="menu-identity">
            <div class="menu-logo" style="background-image: url({{ URL::asset('images/favicon.ico') }})"></div>
            <span contenteditable="true" data-tag="menu-title" class="menu-title">
                {{ __('Mon menu') }}
            </span>
            <span class="menu-separator"></span>
        </div>
        <ul class="menu-items">
            <div class="menu-item">
                <a href="/home" class="menu-link" onclick="return false;">
                    <li>
                        <span contenteditable="true" data-tag="menu-item" class="menu-item-title">
                            {{ __('Accueil') }}
                        </span>
                    </li>
                </a>
            </div>
            <div class="menu-item">
                <a href="/presentation" class="menu-link" onclick="return false;">
                    <li>
                        <span contenteditable="true" data-tag="menu-item" class="menu-item-title">
                            {{ __('Présentation') }}
                        </span>
                </li>
                </a>
                <div class="menu-submenu">
                    <ul>
                        <li>{{ __('Notre histoire') }}</li>
                        <li>{{ __('Nos valeurs') }}</li>
                        <li>{{ __('Notre équipe') }}</li>
                    </ul>
                </div>
            </div>
            <div class="menu-item">
                <a href="/produits" class="menu-link" onclick="return false;">
                    <li>
                        <span contenteditable="true" data-tag="menu-item" class="menu-item-title">
                            {{ __('Services') }}
                        </span>
                    </li>
                </a>
                <div class="menu-submenu">
                    <ul>
                        <li>{{ __('Catalogue') }}</li>
                        <li>{{ __('Réservations') }}</li>
                        <li>{{ __('Tarifs') }}</li>
                    </ul>
                </div>
            </div>
            <div class="menu-item">
                <a href="/contact" class="menu-link" onclick="return false;">
                    <li>
                        <span contenteditable="true" data-tag="menu-item" class="menu-item-title">
                            {{ __('Contact') }}
                        </span>
                    </li>
                </a>
            </div>
        </ul>
    </nav>
</div>
