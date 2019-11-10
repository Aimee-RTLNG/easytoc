<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Content extends Model
{
    protected $fillable = ['title', 'description', 'html'];

    function user(){
        return $this->belongsTo('App\User');
    }
}
