@extends('layouts/app')

@section('title')
    Author {{ $author->lastname }} {{ $author->firstname }}
@endsection

@section('content')

{{ Breadcrumbs::render('author.show', $author) }}

    <h1>Author {{ $author->lastname }} {{ $author->firstname }}</h1>
    
    @can('update', $author)
    <a class="btn btn-primary" href="{{ route('author.edit', ['author'=>$author]) }}">Edit</a>
    @endcan

    @can('delete', $author)
    <form action="{{ route('author.destroy', ['author'=>$author]) }}" method="post">
        @csrf
        @method('DELETE')
        <button type="submit" class="btn btn-danger">Delete</button>
    </form>
    @endcan

    <h2>Books</h2>
    <ul>
        @foreach ($author->books as $book)
        <li>
            @can('view', $book)
            <a href="{{ route('book.show', ['book'=>$book]) }}">{{ $book->title }}</a>
            @else
            {{ $book->title }}
            @endcan
        </li>    
        @endforeach        
    </ul>
@endsection