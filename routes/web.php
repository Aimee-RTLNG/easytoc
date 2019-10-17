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

// Route::resource('/', 'HomeController');
Route::get('/', 'HomeController@index')->name('home');

Route::get('/aide', 'HomeController@aide')->name('aide');
Route::get('/mentions_legales', 'HomeController@mentions_legales')->name('mentions_legales');
Route::get('/cgu', 'HomeController@cgu')->name('cgu');

// ROUTE WIDGETS
Route::get('/menu', 'MenuController@index')->name('menu');
Route::get('/formulaire', 'FormulaireController@index')->name('formulaire');
Route::get('/tableau', 'TableauController@index')->name('tableau');