<?php

namespace App\Http\Controllers;

use App\Content;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ContentController extends Controller
{

    public function __construct()
    {
        $this->authorizeResource(\App\Content::class);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('profile.view');
    }

    public function create($type_name)
    {
        return view('content/'.$type_name.'/create');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Content  $content
     * @return \Illuminate\Http\Response
     */
    public function show(\App\Content $content)
    {
        if (Auth::id() == $content->user['id']){
            return view('content.show', ['content'=>$content]);
        } else {
            return view('home');
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(\App\Http\Requests\ContentRequest $request)
    {
        $data = $request->validated();
        $content = new \App\Content();
        $content->fill($data);
        $content->save();
        return redirect()->route('content.show', ['content'=>$content]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Content  $content
     * @return \Illuminate\Http\Response
     */
    public function edit(\App\Content $content)
    {
        $type_name = strtolower($content->type["name_en"]);
        return view('content/'.$type_name.'/edit', ['content'=>$content] );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Content  $content
     * @return \Illuminate\Http\Response
     */
    public function update(\App\Http\Requests\ContentRequest $request, \App\Content $content)
    {
        $data = $request->validated();
        $content->fill($data);
        $content->save();
        return redirect()->route('content.show', ['content'=>$content]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Content  $content
     * @return \Illuminate\Http\Response
     */
    public function destroy(\App\Content $content)
    {
        $content->delete();
        return redirect()->route('profile.view', Auth::user());
    }
}
