<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Content extends Model
{
    protected $fillable = ['title', 'description', 'html', 'type_id', 'user_id'];

    function user(){
        return $this->belongsTo('App\User');
    }
}
