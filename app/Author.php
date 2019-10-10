<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Author extends Model
{

    protected $fillable = ['lastname', 'firstname'];

    function books(){
        return $this->hasMany('App\Book');
    }
}
