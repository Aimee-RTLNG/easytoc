@extends('layouts/app')

@section('title')
    Editors
@endsection

@section('content')
    <h1>Editors</h1>
    @can('create', \App\Editor::class)
    <a class="btn btn-primary" href="{{ route('editor.create') }}">Create</a>
    @endcan
    
    <ul>
    @foreach ($editors as $editor)
        <li>
            @can('view', $editor)
            <a href="{{ route('editor.show', ['editor'=>$editor]) }}">{{ $editor->name }}</a>
            @else
            {{ $editor->name }}
            @endcan
        </li>
    @endforeach
    </ul>
@endsection