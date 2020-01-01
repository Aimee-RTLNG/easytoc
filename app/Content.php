<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Content extends Model
{
    protected $fillable = ['title', 'description', 'html', 'type_id', 'user_id'];

    function type(){
        return $this->hasOne('App\Type', 'id', 'type_id');
    }

    function user(){
        return $this->belongsTo('App\User');
    }

    function lastid(){
        return Content::max('id');
    }
}
