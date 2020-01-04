@extends('layouts.app')

@section('pagespecificstyles')
    <link href="{{ URL::asset('css/themes/form/all-themes.css') }}" rel="stylesheet">
    <link href="{{ URL::asset('css/themes/menu/all-themes.css') }}" rel="stylesheet">
    <link href="{{ URL::asset('css/themes/table/all-themes.css') }}" rel="stylesheet">
@endsection

@section('content')

        <div class="panel panel-default">
            <div class="panel-heading">
                
            </div>

            <div class="panel-body">

                <div class="content-type">{{ $content->type["name_fr"] }}</div>

                <div class="content-title">{{ $content->title }}</div>
                <div class="content-description">{{ $content->description }}</div>
                
                <div class="col content-html-preview">
                    {!! $content->html !!}
                </div>
                <div class="col content-html-code">
                    <pre class="prettyprint content-panel" id="formatted-code">{{ $content->html }}</pre>
                </div>
            </div>

            <div class="d-flex element-actions">
                <a class="btn btn-info edit-content-button" href="{{ route('content.edit', ['content'=>$content]) }}">{{ __('Modifier') }}</a>
                <form action="{{ route('content.destroy', ['content'=>$content]) }}" method="POST" onsubmit="if(confirm('{{ __('Voulez vous vraiment supprimer cet élément ?') }}')){ this.submit(); }">
                    @csrf
                    @method('DELETE')
                    <input type="submit" value="{{ __('Supprimer') }}" class="btn btn-danger delete-content-button">       
                </form>
            </div>

        </div>

@endsection

@section('pagespecificscripts')
    <script type="application/javascript" src="{{ URL::asset('js/components/content_view.js') }}"></script>
    {{-- Script PRETTIFY + skin --}}
    <script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js?autorun=true&amp;skin=sunburst"></script>
@endsection