@extends('layouts/app')

@section('title')
    Book {{ $book->title }}
@endsection

@section('content')

{{ Breadcrumbs::render('book.show', $book) }}

    <h1 class="category-repeat">BOOK<br><div class="separator"></div>{{ $book->title }}</h1>

    <div class="flexbox book-show-box">
        <img src="../img/{{ $book->cover }}">
        <div class="summary-box">
        <h2>SUMMARY</h2>
        <p>{{ $book->summary }}</p>
        </div>
    </div>

    @can('update', $book)
    <a class="btn btn-primary" href="{{ route('book.edit', ['book'=>$book]) }}">Edit</a>
    @endcan   

    @can('delete', $book)
    <form action="{{ route('book.destroy', ['book'=>$book]) }}" method="post">
        @csrf
        @method('DELETE')
        <button type="submit" class="btn btn-danger">Delete</button>
    </form>
    @endcan    

    @if ($book->categories()->get()->isNotEmpty())
    <h2>Categories</h2>
    <ul>
    @foreach ($book->categories as $category)
        <li>
            @can('view', $category)
            <a href="{{ route('category.show', ['category'=>$category]) }}">{{ $category->name }}</a>
            @else
            {{ $category->name }}
            @endcan
        </li>
    @endforeach
    </ul>
    @endif

    @can('viewAny', \App\Comment::class)
        <h2>Comments</h2>
        @foreach ($book->comments()->orderBy('created_at','desc')->get() as $comment)
            <p>{!! nl2br(e($comment->content), false) !!}</p>
            <p>{{ $comment->user->name }} - {{ $comment->created_at->format('m/d/Y H:i') }}</p>
            @can('update', $comment)
                <a class="btn btn-sm btn-primary" href="{{ route('comment.edit', ['comment'=>$comment]) }}">Edit</a>
            @endcan
            @can('delete', $comment)
                <form action="{{ route('comment.destroy', ['comment'=>$comment]) }}" method="post">
                @csrf
                @method('DELETE')
                <button class="btn btn-sm btn-danger" type="submit">Delete</button>
                </form>
            @endcan
        @endforeach
    @endcan

    @can('create', \App\Comment::class)
        <h3>New comment</h3>
        @if ($errors->any())
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
        @endif
        <form action="{{ route('comment.store') }}" method="POST">
            @csrf
            <input type="hidden" name="book_id" value="{{ $book->id }}">
            <textarea name="content" rows="5" cols="60" placeholder="new comment">{{ old('content') }}</textarea>
            <button type="submit">Ok</button>
        </form>
    @endcan
@endsection