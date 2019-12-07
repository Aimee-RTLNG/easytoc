@extends('layouts.app')

@section('content')

        <div class="panel panel-default">
            <div class="panel-heading">
                
            </div>

            <div class="panel-body">
                <div>{{ $content->title }}</div>
                <div>{{ $content->description }}</div>
                <div>{{ $content->html }}</div>
            </div>

            <div class="d-flex element-actions">
                <a class="btn btn-info edit-content-button" href="{{ route('content.edit', ['content'=>$content]) }}">{{ __('Modifier') }}</a>
                <form action="{{ route('content.destroy', ['content'=>$content]) }}" method="POST">
                    @csrf
                    @method('DELETE')
                    <input type="submit" value="{{ __('Supprimer') }}" class="btn btn-danger delete-content-button" onclick="return confirm({{ __('Voulez vous vraiment supprimer cet élément ?') }})">       
                </form>
            </div>

        </div>

@endsection