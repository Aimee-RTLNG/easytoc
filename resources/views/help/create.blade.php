@extends('layouts/app')

@section('title')
    Create editor
@endsection

@section('content')
    <h1>Create editor</h1>

    @if ($errors->any())
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
    @endif

    <form action="{{ route('editor.store') }}" method="post">
        @csrf
        <input type="text" name="name" placeholder="name" value="{{ old('name') }}">
        <button type="submit">Ok</button>
    </form>
@endsection