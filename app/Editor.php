<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Editor extends Model
{
    use SoftDeletes;

    protected $fillable = ['name'];

    function books(){
        return $this->hasMany('App\Book');
    }
}
