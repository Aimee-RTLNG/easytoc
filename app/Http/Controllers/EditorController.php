<?php

namespace App\Http\Controllers;

use App\Editor;
use App\Http\Requests\EditorRequest;
use Illuminate\Http\Request;

class EditorController extends Controller
{
    function __construct()
    {
        $this->authorizeResource(Editor::class);
    }    
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('editor.index', ['editors'=>Editor::all()]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('editor.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(EditorRequest $request)
    {
        $data = $request->validated();
        $editor = new Editor();
        $editor->fill($data);
        $editor->save();
        return redirect()->route('editor.show', ['editor'=>$editor]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Editor  $editor
     * @return \Illuminate\Http\Response
     */
    public function show(Editor $editor)
    {
        return view('editor.show', ['editor'=>$editor]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Editor  $editor
     * @return \Illuminate\Http\Response
     */
    public function edit(Editor $editor)
    {
        return view('editor.edit', ['editor'=>$editor]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Editor  $editor
     * @return \Illuminate\Http\Response
     */
    public function update(EditorRequest $request, Editor $editor)
    {
        $data = $request->validated();
        $editor->fill($data);
        $editor->save();
        return redirect()->route('editor.show', ['editor'=>$editor]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Editor  $editor
     * @return \Illuminate\Http\Response
     */
    public function destroy(Editor $editor)
    {
        $editor->delete();
        return redirect()->route('editor.index');
    }
}
