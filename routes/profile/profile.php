<?php
Route::middleware('auth')->group(function () {
    Route::group(['namespace' => 'Profile'], function() {
        // view    
        Route::view('/profile', 'profile.profile');
        // api
        Route::group(['prefix' => 'api/profile'], function() {
            Route::get('/getAuthUser',
                       'ProfileController@getAuthUser')->name('profile');
            Route::put('/updateAuthUser',
                       'ProfileController@updateAuthUser')->name('updateprofile');
        });
    });
});