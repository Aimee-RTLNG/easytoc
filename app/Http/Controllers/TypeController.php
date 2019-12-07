<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TypeController extends Controller
{
    function index(){
        return view('type.index', ['types'=>\App\Type::all()]);
    }

    function show(\App\Type $type){
        return view('type.show', ['type'=>$type]);
    }

}
