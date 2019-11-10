
@extends('layouts/app')

@section('titre') {{ __('Formulaire - EasyToC') }} @endsection

@section('content')
<div class="container">
        <div class="entete">
            <h2 class="entete__title">{{ __('Créer un formulaire') }}</h2>
            <div class="entete__under"></div>
        </div>
        <div class="panel-body">
                <!-- Display Validation Errors -->
                @include('common.errors')
        
                <!-- New Task Form -->
                <form action="{{ route('content.store') }}" method="post">
                    @csrf
                    <input type="hidden" disabled name="type_id" value="1">
                    <input type="text" name="title" placeholder="title" value="{{ old('title') }}">
                    <textarea type="text" name="description" placeholder="description">{{ old('description') }}</textarea>
                    <textarea type="text" name="html" placeholder="html">{{ old('html') }}</textarea>
                    <button type="submit">Sauvegarder ce formulaire</button>
                </form>
            </div>
   </div>
@endsection