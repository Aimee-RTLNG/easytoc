@extends('layouts.app')

@section('title')
    Home
@endsection

@section('content')

{{ Breadcrumbs::render('home') }}

<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    You are now connected. Enjoy.
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
