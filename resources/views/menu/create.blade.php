@extends('layouts/app')

@section('title')
    Create author
@endsection

@section('content')
    <h1>Create author</h1>

    @if ($errors->any())
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
    @endif

    <form action="{{ route('author.store') }}" method="post">
        @csrf
        <input type="text" name="lastname" placeholder="lastname" value="{{ old('lastname') }}">
        <input type="text" name="firstname" placeholder="firstname" value="{{ old('firstname') }}">
        <button type="submit">Ok</button>
    </form>
@endsection