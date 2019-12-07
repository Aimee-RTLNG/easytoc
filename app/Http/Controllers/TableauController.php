<?php

namespace App\Http\Controllers;

use App\Tableau;
use Illuminate\Http\Request;

class TableauController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('tableau');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Tableau  $tableau
     * @return \Illuminate\Http\Response
     */
    public function show(Tableau $tableau)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Tableau  $tableau
     * @return \Illuminate\Http\Response
     */
    public function edit(Tableau $tableau)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Tableau  $tableau
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Tableau $tableau)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Tableau  $tableau
     * @return \Illuminate\Http\Response
     */
    public function destroy(Tableau $tableau)
    {
        //
    }
}
