<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthorController extends Controller
{

    function __construct()
    {
        $this->authorizeResource(\App\Author::class);
    }

    function index(){
        return view('author.index', ['authors'=>\App\Author::all()]);
    }

    function show(\App\Author $author){
        return view('author.show', ['author'=>$author]);
    }

    function create(){
        return view('author.create');
    }

    function store(\App\Http\Requests\AuthorRequest $request){
        $data = $request->validated();
        $author = new \App\Author();
        $author->fill($data);
        $author->save();
        return redirect()->route('author.show', ['author'=>$author]);
    }

    function edit(\App\Author $author){
        return view('author.edit', ['author'=>$author]);
    }

    function update(\App\Http\Requests\AuthorRequest $request, \App\Author $author){
        $data = $request->validated();
        $author->fill($data);
        $author->save();
        return redirect()->route('author.show', ['author'=>$author]);
    }

    function destroy(\App\Author $author){
        $author->delete();
        return redirect()->route('author.index');
    }


}
