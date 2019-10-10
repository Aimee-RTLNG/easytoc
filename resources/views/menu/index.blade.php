@extends('layouts/app')

@section('title')
    Authors
@endsection

@section('content')

    <h1>Authors</h1>
    @can('create', \App\Author::class)
    <a class="btn btn-primary" href="{{ route('book.create') }}">Create</a>
    @endcan
    
    <ul>
    @foreach ($authors as $author)
        <li>
            @can('view', $author)
            <a href="{{ route('author.show', ['author'=>$author]) }}">{{ $author->lastname }} {{ $author->firstname }}</a>
            @else
            {{ $author->lastname }} {{ $author->firstname }}
            @endcan
        </li>
    @endforeach
    </ul>
@endsection