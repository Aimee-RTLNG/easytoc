@extends('layouts/app')

@section('title')
    Categories
@endsection

@section('content')
    <h1>Categories</h1>
    @can('create', \App\Category::class)
    <a class="btn btn-primary" href="{{ route('category.create') }}">Create</a>
    @endcan

    <ul>
    @foreach ($categories as $category)
        <li>
            @can('view', $category)
            <a href="{{ route('category.show', ['category'=>$category]) }}">{{ $category->name }}</a>
            @else
            {{ $category->name }}
            @endcan            
        </li>
    @endforeach
    </ul>
@endsection