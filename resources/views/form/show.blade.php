@extends('layouts/app')

@section('title')
    Category {{ $category->name }}
@endsection

@section('content')

{{ Breadcrumbs::render('category.show', $category) }}

    <h1>Category {{ $category->name }}</h1>

    @can('update', $category)
    <a class="btn btn-primary" href="{{ route('category.edit', ['category'=>$category]) }}">Edit</a>
    @endcan
    
    @can('delete', $category)
    <form action="{{ route('category.destroy', ['category'=>$category]) }}" method="post">
        @csrf
        @method('DELETE')
        <button type="submit" class="btn btn-danger">Delete</button>
    </form>
    @endcan    

    @if ($category->books()->get()->isNotEmpty())
    <h2>Books</h2>
    <ul>
        @foreach ($category->books as $book)
        <li>
            @can('view', $book)
            <a href="{{ route('book.show', ['book'=>$book]) }}">{{ $book->title }}</a>
            @else
            {{ $book->title }}
            @endcan
        </li>
        @endforeach        
    </ul>
    @endif
    
@endsection