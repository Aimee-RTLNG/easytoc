@extends('layouts.app')

@section('titre') {{ __('Édition de formulaire') }} - EasyToC @endsection

@section('pagespecificstyles')
    <link href="{{ URL::asset('css/themes/form/all-themes.css') }}" rel="stylesheet">
@endsection

@section('content')

@if (Auth::id() != $content->user['id'])
    <script type="text/javascript">
        window.location = "{{ route('home') }}";
    </script>
@else
<div class="container">
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
    <div class="entete">
        <h2 class="entete__title">{{ __('Édition de formulaire') }}</h2>
        <div class="entete__under"></div>
    </div>
    <div class="panel-body mb-3">
        <!-- Display Validation Errors -->
        @include('common.errors')
        
        @if ($errors->any())
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
        @endif

        <!-- interface d'initialisation du projet -->
        <div class="row creator-panel justify-content-between d-flex" role="region" aria-labelledby="interface-heading">
            <div class="info-panel" role="region" aria-labelledby="form_infos">
                <h3 id="form_infos" class="mb-3 font-weight-bold">{{ __('Informations basiques concernant le formulaire') }}</h3>
                <form action="{{ route('content.update', ['content'=>$content]) }}" method="post" id="edit-form">
                    @csrf
                    @method('PUT')
                    <div class="form-group" role="region">
                        <label for="title">{{ __('Titre du projet') }}</label>
                        <input type="text" name="title" placeholder="Titre du projet" class="form-control" id="title-input" maxlength="150" value="{{ old('title', $content->title) }}">
                        <p id="chara-title-remains"></p>
                    </div>
                    <div class="form-group" role="region">
                        <label for="desc-input">{{ __('Description du projet') }}</label>
                        <textarea type="text" name="description" placeholder="Description du projet" class="form-control" id="desc-input" rows="2" maxlength="300" value="{{ old('description', $content->description) }}"></textarea>
                        <p id="chara-desc-remains"></p>
                        <textarea class="d-none" type="text" name="html" placeholder="html">{{ old('html', $content->html) }}</textarea>
                    </div>
                </form>
            </div>
            <div class="d-flex element-actions">
                <button form="edit-form" type="submit">{{ __('Sauvegarder les modifications') }}</button>
                <button form="edit-form" type="reset" onclick="return confirm('{{ __('Voulez vous vraiment annuler toutes les modifications ?') }}')">
                    {{ __('Annuler les modifications') }}
                </button>
                <form action="{{ route('content.destroy', ['content'=>$content]) }}" method="POST">
                    @csrf
                    @method('DELETE')
                    <input type="submit" value="{{ __('Supprimer') }}" class="btn btn-danger delete-content-button" onclick="return confirm({{ __('Voulez vous vraiment supprimer cet élément ?') }})">       
                </form>
            </div>
            
        </div>
    </div>
</div>


                    
                        
    @endif
@endsection

@section('pagespecificscripts')
    <script type="application/javascript" src="{{ URL::asset('js/components/form.js') }}"></script>
    {{-- Script PRETTIFY + skin --}}
    <script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js?autorun=true&amp;skin=sunburst"></script>
@endsection