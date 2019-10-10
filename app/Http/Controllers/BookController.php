<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BookController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(\App\Book::class);
    }

    function index(){
        $books = \App\Book::all();
        return view('book.index', ['books'=>$books]);
    }

    function show(\App\Book $book){
        return view('book.show', ['book'=>$book]);
    }

    function create(){
        $authors = \App\Author::all();
        $editors = \App\Editor::all();
        $categories = \App\Category::all();
        return view('book.create', ['authors'=>$authors, 'editors'=>$editors, 'categories'=>$categories]);
    }

    function store(\App\Http\Requests\BookRequest $request){
        $data = $request->validated();
        $book = new \App\Book();
        $book->fill($data);
        $book->save();
        if(isset($data['category'])){
            $book->categories()->sync($data['category']);
        }
        return redirect()->route('book.show', ['book'=>$book]);
    }

    function edit(\App\Book $book){
        $authors = \App\Author::all();
        $editors = \App\Editor::all();
        $categories = \App\Category::all();
        return view('book.edit', ['book'=>$book, 'authors'=>$authors, 'editors'=>$editors, 'categories'=>$categories]);
    }

    function update(\App\Http\Requests\BookRequest $request, \App\Book $book){
        $data = $request->validated();
        $book->fill($data);
        $book->save();
        $book->categories()->sync($data['category'] ?? []);
        return redirect()->route('book.show', ['book'=>$book]);
    }

    function destroy(\App\Book $book){
        $book->delete();
        return redirect()->route('book.index');
    }


}
