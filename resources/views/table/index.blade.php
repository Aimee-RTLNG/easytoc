@extends('layouts/app')

@section('title')
    Books
@endsection

@section('content')
    <h1>Books</h1>

    @can('create', \App\Book::class)
    <a class="btn btn-primary" href="{{ route('book.create') }}">Create</a>
    @endcan

    <div class="book-list">
        @foreach ($books as $book)
             @can('view', $book)
             <a href="{{ route('book.show', ['book'=>$book]) }}">
                <div class="bookbox">
                    <img src="../public/img/{{ $book->cover }}">
                    <div class="bookinfo">
                        <p class="book-title">{{ $book->title }}</p>
                        @if ($book->author)
                            <p>by 
                            @can('view', $book->author)
                            <a class="book-author" href="{{ route('author.show', ['author'=>$book->author]) }}">{{ $book->author->lastname }} {{ $book->author->firstname }}</a>
                            @else
                            <a class="book-author">{{ $book->author->lastname }} {{ $book->author->firstname }}</a>
                            @endcan
                            </p>        
                        @endif       
                     </div>
                </div>
             </a>
             @else
             <a href="#">
                <div class="bookbox">
                    <img src="../public/img/{{ $book->cover }}">
                    <div class="bookinfo">
                        <p class="book-title">{{ $book->title }}</p>
                        @if ($book->author)
                            <a class="book-author">by</a>
                            @can('view', $book->author)
                            <a class="book-author" href="{{ route('author.show', ['author'=>$book->author]) }}">{{ $book->author->lastname }} {{ $book->author->firstname }}</a>
                            @else
                            <a class="book-author">{{ $book->author->lastname }} {{ $book->author->firstname }}</a>
                            @endcan      
                        @endif       
                    </div>
                </div>
            </a>
            @endcan 
        @endforeach
    </div>
@endsection