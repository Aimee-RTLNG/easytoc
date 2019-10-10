@extends('layouts/app')

@section('title')
    Edit category {{$category->name}}
@endsection

@section('content')
    <h1>Edit category {{$category->name}}</h1>

    @if ($errors->any())
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
    @endif

    <form action="{{ route('category.update', ['category'=>$category]) }}" method="post">
        @csrf
        @method('PUT')
        <input type="text" name="name" placeholder="name" value="{{ old('name', $category->name) }}">
        <button type="submit">Ok</button>
    </form>
@endsection