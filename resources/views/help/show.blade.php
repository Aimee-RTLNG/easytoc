@extends('layouts/app')

@section('title')
    Editor {{ $editor->name }}
@endsection

@section('content')

{{ Breadcrumbs::render('editor.show', $editor) }}

    <h1>Editor {{ $editor->name }}</h1>

    @can('update', $editor)
    <a class="btn btn-primary" href="{{ route('editor.edit', ['editor'=>$editor]) }}">Edit</a>
    @endcan

    @can('delete', $editor)
    <form action="{{ route('editor.destroy', ['editor'=>$editor]) }}" method="post">
        @csrf
        @method('DELETE')
        <button type="submit" class="btn btn-danger">Delete</button>
    </form>
    @endcan

    <h2>Books</h2>
    <ul>
        @foreach ($editor->books as $book)
        @can('view', $book)
        <a href="{{ route('book.show', ['book'=>$book]) }}">{{ $book->title }}</a>
        @else
        {{ $book->title }}
        @endcan    
        @endforeach        
    </ul>
@endsection