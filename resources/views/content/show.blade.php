@extends('layouts.app')

@section('content')

        <div class="panel panel-default">
            <div class="panel-heading">
                
            </div>

            <div class="panel-body">
                <div>{{ $content->title }}</div>
                <div>{{ $content->description }}</div>
                <div>{{ $content->html }}</div>
            </div>

        </div>

@endsection