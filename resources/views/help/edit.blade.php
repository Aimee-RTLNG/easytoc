@extends('layouts/app')

@section('title')
    Edit editor {{$editor->name}}
@endsection

@section('content')
    <h1>Edit editor {{$editor->name}}</h1>

    @if ($errors->any())
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
    @endif

    <form action="{{ route('editor.update', ['editor'=>$editor]) }}" method="post">
        @csrf
        @method('PUT')
        <input type="text" name="name" placeholder="name" value="{{ old('name', $editor->name) }}">
        <button type="submit">Ok</button>
    </form>
@endsection