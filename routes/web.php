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
Route::get('/home', 'HomeController@index')->name('home');

Route::get('/aide', 'HomeController@aide')->name('aide');
Route::get('/mentions_legales', 'HomeController@mentions_legales')->name('mentions_legales');
Route::get('/cgu', 'HomeController@cgu')->name('cgu');

// ROUTE WIDGETS
Route::get('/menu', 'MenuController@index')->name('menu');
Route::get('/formulaire', 'FormulaireController@index')->name('formulaire');
Route::get('/tableau', 'TableauController@index')->name('tableau');

// ROUTE LANGUES
// Route qui permet de connaître la langue active
Route::get('locale', 'LocalizationController@getLang')->name('getlang');
// Route qui permet de modifier la langue
Route::get('locale/{lang}', 'LocalizationController@setLang')->name('setlang');

// Routes connexion Reseaux sociaux
Route::get('/login/{provider}', [
    'as'=>'provider_login', 
    'uses'=>'Auth\LoginController@redirectToProvider' 
]);
Route::get('/{provider}/callback', [
    'as'=>'provider_login_callback', 
    'uses'=>'Auth\LoginController@handleProviderCallback' 
]);

Auth::routes();
