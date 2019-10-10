@extends('layouts/app')

@section('title')
    Edit author {{$author->lastname}} {{$author->firstname}}
@endsection

@section('content')
    <h1>Edit author {{$author->lastname}} {{$author->firstname}}</h1>

    @if ($errors->any())
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
    @endif

    <form action="{{ route('author.update', ['author'=>$author]) }}" method="post">
        @csrf
        @method('PUT')
        <input type="text" name="lastname" placeholder="lastname" value="{{ old('lastname', $author->lastname) }}">
        <input type="text" name="firstname" placeholder="firstname" value="{{ old('firstname', $author->firstname) }}">
        <button type="submit">Ok</button>
    </form>
@endsection