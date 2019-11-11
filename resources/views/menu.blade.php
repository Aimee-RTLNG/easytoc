
@extends('layouts/app')

@section('titre') {{ __('Menu - EasyToC') }}  @endsection

@section('content')
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
            <h2 class="entete__title">{{ __('Créer un menu') }}</h2>
            <div class="entete__under"></div>
        </div>
        <div class="panel-body">
                <!-- Display Validation Errors -->
                @include('common.errors')
        
                @guest


                @else 
                    <form action="{{ route('content.store') }}" method="post">
                        @csrf
                        <input type="hidden" name="type_id" value="3">
                        <input type="hidden" name="user_id" value="{{ auth()->user()->id }}">
                        <input type="text" name="title" placeholder="title" value="{{ old('title') }}">
                        <textarea type="text" name="description" placeholder="description">{{ old('description') }}</textarea>
                        <textarea type="text" name="html" placeholder="html">{{ old('html') }}</textarea>
                        <button type="submit">{{ __('Sauvegarder ce menu') }}</button>
                    </form>
                @endguest

            </div>
   </div>
@endsection