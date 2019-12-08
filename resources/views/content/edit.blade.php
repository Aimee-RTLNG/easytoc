@extends('layouts.app')

@section('content')

        <div class="panel panel-default">
            <div class="panel-heading">
                
            </div>

            <div class="panel-body">

                        @if ($errors->any())
                        <div class="alert alert-danger">
                            <ul>
                                @foreach ($errors->all() as $error)
                                    <li>{{ $error }}</li>
                                @endforeach
                            </ul>
                        </div>
                        @endif
                    

                    <form action="{{ route('content.update', ['content'=>$content]) }}" method="post">
                            @csrf
                            @method('PUT')
                            <input type="text" name="title" placeholder="title" value="{{ old('title', $content->title) }}">
                            <textarea type="text" name="description" placeholder="description">{{ old('description', $content->description) }}</textarea>
                            <textarea type="text" name="html" placeholder="html">{{ old('html', $content->html) }}</textarea>
                            <button type="submit">{{ __('Sauvegarder les modifications') }}</button>
                            <button type="reset" onclick="return confirm('{{ __('Voulez vous vraiment annuler toutes les modifications ?') }}')">
                                {{ __('Annuler les modifications') }}
                            </button>
                    </form>
                    
                    <div class="d-flex element-actions">
                        <form action="{{ route('content.destroy', ['content'=>$content]) }}" method="POST">
                            @csrf
                            @method('DELETE')
                            <input type="submit" value="{{ __('Supprimer') }}" class="btn btn-danger delete-content-button" onclick="return confirm({{ __('Voulez vous vraiment supprimer cet élément ?') }})">       
                        </form>
                    </div>
            </div>

        </div>

@endsection