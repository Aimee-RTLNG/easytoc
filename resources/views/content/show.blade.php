@extends('layouts.app')

@section('pagespecificstyles')
    <link href="{{ URL::asset('css/themes/form/all-themes.css') }}" rel="stylesheet">
    <link href="{{ URL::asset('css/themes/menu/all-themes.css') }}" rel="stylesheet">
    <link href="{{ URL::asset('css/themes/table/all-themes.css') }}" rel="stylesheet">
@endsection

@section('content')
<div class="container">

    @if (session('info'))
    <div class="row">
        <div class="col-md-12">
            <div class="alert alert-success alert-dismissible">
                <button type="button" class="close" data-dismiss="alert" aria-hidden="true" title="{{ __('Fermer') }}">×</button>
                {{ session('info') }}
            </div>
        </div>
    </div>
    @elseif (session('error'))
    <div class="row">
        <div class="col-md-12">
            <div class="alert alert-danger alert-dismissible">
                <button type="button" class="close" data-dismiss="alert" aria-hidden="true" title="{{ __('Fermer') }}">×</button>
                {{ session('error') }}
            </div>
        </div>
    </div>
    @endif

    <div class="entete">
        <h2 class="entete__title">
            {{ $content->type["name_fr"] }}
        </h2>
        <div class="entete__under"></div>
    </div>

    <div class="panel-body">

        {{-- Infos prrojet et actions --}}
        <h3 class="display-4">{{ __('Projet') }}</h3>
        <div class="row">
            <div class="col-8">
                <div class="content-title">
                    <h4>
                        {{ $content->title }}
                    </h4>
                </div>
                <div class="content-description">
                    <p>
                        {{ $content->description }}
                    </p>
                </div>
            </div>
            <div class="element-actions">
                <a class="btn btn-info edit-content-button" href="{{ route('content.edit', ['content'=>$content]) }}" title="{{ __('Modifier le projet') }}">
                    <i class="fa fa-edit"></i>
                    {{ __('Modifier') }}
                </a>
                <form class="crea-item__btn-delete btn btn-gris btn-form-final" action="{{ route('content.destroy', ['content'=>$content]) }}" method="POST">
                    @csrf
                    @method('DELETE')
                    <div class="crea-item__btns__icon btn--rouge">
                        <i class="fa fa-times"></i>
                    </div>
                    <input type="submit" value="{{ __('Supprimer') }}" class="" onclick="return confirm('{{ __('Voulez vous vraiment supprimer cet élément ?') }}')" data-toggle="tooltip" title="Supprimer">       
                </form>
            </div>
        </div>

        {{-- Visualisation --}}
        <h3 class="display-4">{{ __('Visualisation') }}</h3>
        <div class="row">

            <div class="content-html-preview">
                {!! $content->html !!}
            </div>

        </div>

        {{-- Code généré --}}
        <h3 class="display-4">{{ __('Code généré') }}</h3>
        <div class="row">

            <h3>{{ __('Liens CSS à mettre dans la balise') }} &lt;head&gt; </h3>
            <a target="_blank" href="aide#formcode" class="btn btn-light" title="{{ __('Accéder à la page d\'aide') }}">
                <i class="fa fa-question-circle"></i>
                {{ __("Besoin d'aide !") }}
            </a>
            <div class="copy-container w-100 d-flex flex-row-reverse">
                <button data-clipboard-action="copy" data-clipboard-target="#css-link" id="copy-css-link" type="button" class="btn btn-info" title="{{ __('Copier') }}"> 
                    {{ __("Copier") }}
                </button>
            </div>

            <!-- Lien du style à utiliser -->
            @if ($content->type_id == 1)
                <xmp class="code-display" id="css-link"><link href="{{ URL::asset('css/themes/form/all-themes.css') }}" rel="stylesheet"></xmp>
            @elseif ($content->type_id == 2)
                <xmp class="code-display" id="css-link"><link href="{{ URL::asset('css/themes/table/all-themes.css') }}" rel="stylesheet"></xmp>
            @elseif ($content->type_id == 3)
                <xmp class="code-display" id="css-link"><link href="{{ URL::asset('css/themes/menu/all-themes.css') }}" rel="stylesheet"></xmp>
            @endif
            <h3 class="mt-3">
                {{ __("Voici le code brut généré: copiez le où vous le souhaitez, mais ne le modifiez pas !") }}
            </h3>
            <div class="copy-container w-100 d-flex flex-row-reverse">
                <button data-clipboard-action="copy" data-clipboard-target="#formatted-code" id="copy-raw-code" type="button" class="btn btn-info" title="{{ __('Copier') }}">
                    {{ __("Copier") }}
                </button>
            </div>
            <!-- Code formatté -->
            <div class="content-html-code">
                <pre class="prettyprint content-panel" id="formatted-code">{{ $content->html }}</pre>
            </div>

        </div>

    </div>
</div>
@endsection

@section('pagespecificscripts')
    <script type="application/javascript" src="{{ URL::asset('js/components/content_view.js') }}"></script>
    {{-- Script PRETTIFY + skin --}}
    <script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js?autorun=true&amp;skin=sunburst"></script>
@endsection