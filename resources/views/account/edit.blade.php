@extends('layouts/app')

@section('title')
    Edit comment #{{$comment->id}}
@endsection

@section('content')
    <h1>Edit comment #{{$comment->id}}</h1>

    @if ($errors->any())
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
    @endif

    <form action="{{ route('comment.update', ['comment'=>$comment]) }}" method="post">
        @csrf
        @method('PUT')
        <textarea name="content" placeholder="Content" rows="5" cols="60">{{ old('content', $comment->content) }}</textarea>
        <button type="submit">Ok</button>
    </form>
@endsection