<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Type extends Model
{
    protected $fillable = ['name_fr', 'name_en'];

    function contents(){
        return $this->hasMany('App\Content');
    }

}
