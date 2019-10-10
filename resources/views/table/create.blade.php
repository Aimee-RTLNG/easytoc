@extends('layouts/app')

@section('title')
    Create book
@endsection

@section('content')
    <h1>Create book</h1>

    @if ($errors->any())
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
    @endif

    <form action="{{ route('book.store') }}" method="post">
        @csrf
        <input type="text" name="title" placeholder="title" value="{{ old('title') }}">
        <textarea type="text" name="summary" placeholder="summary">{{ old('summary') }}</textarea>
        <select name="author_id">
            <option value=""></option>
        @foreach ($authors as $author)
            <option value="{{ $author->id }}"{{ $author->id == old('author_id') ?' selected="selected"' : '' }}>{{ $author->lastname }} {{ $author->firstname }}</option>
        @endforeach
        </select>
        <select name="editor_id">
            <option value="">-- Editor --</option>
        @foreach ($editors as $editor)
            <option value="{{ $editor->id }}"{{ $editor->id == old('editor_id') ?' selected="selected"' : '' }}>{{ $editor->name }}</option>
        @endforeach
        </select>
        @foreach ($categories as $category)
            <input type="checkbox" name="category[]" value="{{ $category->id }}" {{ array_search($category->id, old('category', [])) !== false ? ' checked="checked"' : '' }}> <label>{{ $category->name }}</label>
        @endforeach
        <button type="submit">Ok</button>
    </form>
@endsection