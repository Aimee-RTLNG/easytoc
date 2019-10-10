<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>@yield('title')</title>
        <link rel="stylesheet" href="{{ asset(mix('css/app.css')) }}">
        <link href="{{ URL::asset('css/main.css') }}" rel="stylesheet" type="text/css" >
    </head>
    <body>
        <div class="container">
        <ul>
            <li><a href="{{ route('home') }}">Home</a></li>
            <li><a href="{{ route('book.index') }}">Books</a></li>
            <li><a href="{{ route('author.index') }}">Authors</a></li>
            <li><a href="{{ route('editor.index') }}">Editors</a></li>
            <li><a href="{{ route('category.index') }}">Categories</a></li>
            <li><a href="{{ route('about') }}">About</a></li>
        </ul>
        @yield('content')
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="{{ asset(mix('js/manifest.js')) }}"></script>
        <script src="{{ asset(mix('js/vendor.js')) }}"></script>
        <script src="{{ asset(mix('js/app.js')) }}"></script>
    </body>
</html>