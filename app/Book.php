<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $fillable = ['title', 'summary', 'author_id', 'editor_id'];

    function author(){
        return $this->belongsTo('App\Author');
    }

    function editor(){
        return $this->belongsTo('App\Editor');
    }

    function categories(){
        return $this->belongsToMany('App\Category');
    }

    function comments(){
        return $this->hasMany('App\Comment');
    }
}
