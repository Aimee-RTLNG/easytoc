@extends('layouts/app')

@section('title')
    Edit book {{ $book->title }}
@endsection

@section('content')
    <h1>Edit book {{ $book->title }}</h1>

    @if ($errors->any())
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
    @endif

    <form action="{{ route('book.update', ['book'=>$book]) }}" method="post">
        @csrf
        @method('PUT')
        <input type="text" name="title" placeholder="title" value="{{ old('title', $book->title) }}">
        <textarea type="text" name="summary" placeholder="summary">{{ old('summary', $book->summary) }}</textarea>
        <select name="author_id">
            <option value=""></option>
        @foreach ($authors as $author)
            <option value="{{ $author->id }}"{{ $author->id == old('author_id', $book->author_id) ?' selected="selected"' : '' }}>{{ $author->lastname }} {{ $author->firstname }}</option>
        @endforeach
        </select>
        <select name="editor_id">
            <option value="">-- Editor --</option>
        @foreach ($editors as $editor)
            <option value="{{ $editor->id }}"{{ $editor->id == old('editor_id', $book->editor_id) ?' selected="selected"' : '' }}>{{ $editor->name }}</option>
        @endforeach
        </select>
        @php
            $categories_selected = $book->categories()->get()->pluck('id')->all();
        @endphp
        @foreach ($categories as $category)
            <input type="checkbox" name="category[]" value="{{ $category->id }}" {{ array_search($category->id, old('category', $categories_selected)) !== false ? ' checked="checked"' : '' }}> <label>{{ $category->name }}</label>
        @endforeach
        <button type="submit">Ok</button>
    </form>
@endsection