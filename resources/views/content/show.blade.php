@extends('layouts.app')

@section('pagespecificstyles')
    <link href="{{ URL::asset('css/themes/form/all-themes.css') }}" rel="stylesheet">
    <link href="{{ URL::asset('css/themes/menu/all-themes.css') }}" rel="stylesheet">
    <link href="{{ URL::asset('css/themes/table/all-themes.css') }}" rel="stylesheet">
@endsection

@section('content')
<div class="container visualisation">

    @if (session('info'))
    <div class="row">
        <div class="col-md-12">
            <div class="alert alert-success alert-dismissible" aria-live="assertive" aria-atomic="true">
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
        <h1 class="entete__title">
            {{ __('Visualiser mon ') }} {{ $content->type["name_fr"] }}
        </h1>
        <div class="entete__under"></div>
    </div>
        {{-- Infos prrojet et actions --}}
        <div class="row visualisation__infos">
            <div class="col-lg-7 border-12 shadow-box mb-4-lg">
                <div class="content-title py-3">
                    {{-- <h2 class="mb-2">{{ __('Titre') }}</h2> --}}
                    <h3 class="visu__title text-italic pl-3 m-0">
                        {{ $content->title }}
                    </h3>
                    <p class="pl-3 last_updated">Dernière modification :  {{ date('d/m/Y', strtotime($content->updated_at)) }}</p>
                   
                </div>
                <div class="content-description py-3">
                    {{-- <h2 class="mb-2">{{ __('Description') }}</h2> --}}
                    <p class="pl-3">
                        {{ $content->description }}
                    </p>
                </div>
            </div>
            <div class="col-lg-5 element-actions">
                <a class="btn btn-form-final btn-primary edit-content-button" href="{{ route('content.edit', ['content'=>$content]) }}">
                    <div class="rond-i">
                        <i class="fa fa-edit"></i>
                    </div>
                    {{ __('Modifier') }}
                </a>
                <form class="crea-item__btn-delete btn btn-gris btn-form-final" action="{{ route('content.destroy', ['content'=>$content]) }}" method="POST">
                    @csrf
                    @method('DELETE')
                    <button type="submit" value="" class="shadow-box btn-delete-def btn btn-danger btn-form-final">
                        <div class="rond-i crea-item__btns__icon btn--danger">
                            <i class="fa fa-times"></i>
                        </div>
                        {{ __('Supprimer') }}
                    </button>
                </form>
            </div>
        </div>

        <hr class="py-3">

        {{-- Visualisation --}}
        <h3 class="visu__title" tabindex="0"><i class="fa fa-eye mr-3" aria-hidden="true"></i> {{ __('Visualisation') }}</h3>
        <div class="row m-0 p-0">

            <div class="content-html-preview col-12 mb-4 py-5">
                {!! $content->html !!}
            </div>

        </div>

        <hr class="py-5">

        <div class="d-flex justify-content-between">
            <h3 class="visu__title" tabindex="0">
                <i class="fa fa-code mr-3" aria-hidden="true"></i>
                {{ __('Code généré') }}
            </h3>
            <a target="_blank" href="../aide#useCode" class="btn btn-primary btn_crea" title="{{ __('Accéder à la page d\'aide') }}">
                <i class="fa fa-question-circle"></i>
                {{ __("Besoin d'aide !") }}
            </a>
        </div>
        <div class="row m-0 p-0">

            <div class="copy-container visu-copy-container w-100">
                <button data-clipboard-action="copy" data-clipboard-target="#css-link" id="copy-css-link" type="button" class="btn btn-primary btn_crea" title="{{ __('Copier') }}"> 
                    {{ __("Copier") }}
                </button>
            </div>

            <!-- Lien du style à utiliser -->
            @if ($content->type_id == 1)
                <xmp class="code-display" id="css-link"><link href="{{ URL::asset('css/themes/form/all-themes.css') }}" rel="stylesheet"></xmp>
            @elseif ($content->type_id == 2)
                <xmp class="code-display" id="css-link"><link href="{{ URL::asset('css/themes/table/all-themes.css') }}" rel="stylesheet"></xmp>
            @elseif ($content->type_id == 3)
                <div class="code-display" id="css-link">
                    <xmp><link href="{{ URL::asset('css/themes/form/all-themes.css') }}" rel="stylesheet"></xmp>
                    <xmp><script type="application/javascript" src="{{ URL::asset('js/usage/menu_script.js') }}"></script></xmp>
                </div>
            @endif
            <h3 class="mt-3 ml-2">
                {{ __("Voici le code brut généré: copiez le où vous le souhaitez, mais ne le modifiez pas !") }}
            </h3>
            <div class="copy-container visu-copy-container btn-code w-100">
                <button data-clipboard-action="copy" data-clipboard-target="#formatted-code" id="copy-raw-code" type="button" class="btn btn-primary btn_crea" title="{{ __('Copier') }}">
                    {{ __("Copier") }}
                </button>
            </div>
            <!-- Code formatté -->
            <div class="content-html-code">
                <pre class="prettyprint content-panel" id="formatted-code">{{ $content->html }}</pre>
            </div>

        </div>
</div>
@endsection

@section('pagespecificscripts')
    {{-- <script type="application/javascript" src="{{ URL::asset('js/components/content_view.js') }}"></script> --}}
    {{-- Script PRETTIFY + skin --}}
    <script type="application/javascript" src="{{ URL::asset('js/usage/menu_script.js') }}"></script>
    <script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js?autorun=true&amp;skin=sunburst"></script>
@endsection