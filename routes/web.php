<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('locale/{locale}', function ($locale) {
    Session::put('locale', $locale);
    return redirect()->back();
});

Route::middleware(['auth'])->group(function () {
    Route::get('/', 'HomeController@index')->name('home');
    Route::get('/about', 'HomeController@about')->name('about');
    Route::get('/book', 'BookController@index')->name('book.index');
    Route::get('/book/{book}', 'BookController@show')->name('book.show')->where('book', '[0-9]+');
    Route::get('/book/create', 'BookController@create')->name('book.create');
    Route::post('/book/create', 'BookController@store')->name('book.store');
    Route::get('/book/{book}/edit', 'BookController@edit')->name('book.edit')->where('book', '[0-9]+');
    Route::put('/book/{book}/edit', 'BookController@update')->name('book.update')->where('book', '[0-9]+');
    Route::delete('/book/{book}', 'BookController@destroy')->name('book.destroy')->where('book', '[0-9]+');

    Route::get('/author', 'AuthorController@index')->name('author.index');
    Route::get('/author/{author}', 'AuthorController@show')->name('author.show')->where('author', '[0-9]+');
    Route::get('/author/create', 'AuthorController@create')->name('author.create');
    Route::post('/author/create', 'AuthorController@store')->name('author.store');
    Route::delete('/author/{author}', 'AuthorController@destroy')->name('author.destroy')->where('author', '[0-9]+');
    Route::get('/author/{author}/edit', 'AuthorController@edit')->name('author.edit')->where('author', '[0-9]+');
    Route::put('/author/{author}/edit', 'AuthorController@update')->name('author.update')->where('author', '[0-9]+');

    Route::resource('/editor', 'EditorController');

    Route::resource('/category', 'CategoryController');

    Route::resource('/comment', 'CommentController')->except(['index', 'show', 'create']);
});
Auth::routes(/*['register'=>false]*/);
