<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('profile.view');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('content.create');
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
     * Display the specified resource.
     *
     * @param  \App\Content  $content
     * @return \Illuminate\Http\Response
     */
    public function show(\App\Content $content)
    {
        return view('content.show', ['content'=>$content]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Content  $content
     * @return \Illuminate\Http\Response
     */
    public function edit(\App\Content $content)
    {
        return view('content.edit', ['content'=>$content] );
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
        return redirect()->route('profile.view');
    }
}
