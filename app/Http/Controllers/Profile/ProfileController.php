<?php

namespace App\Http\Controllers\Profile;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\UpdateProfile;
use App\User;


class ProfileController extends Controller
{
    public function getAuthUser ()
    {
        return Auth::user();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, User $user)
    {
        // On récupère les identifiants de l'utilisateur dont la page est demandé
        $viewData = [
            'user' => $user,
            'id' =>  $user->id
        ];

        // On récupère les identifiants de l'utilisateur
        $user = Auth::user();

        // Si l'url du profil demandé est le bon
        if( $user->id == $viewData["id"]){
            return view('profile.view', $viewData);
        }else{
            return view('home');
        }
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function updateInfo(UpdateProfile $request, User $user)
    {
        // form data
        $data = $request->validated();
        $user->update($data);
        return redirect(route('profile.view', ['user' => $user]))
                    ->with('info', __('Votre profil a été mis à jour'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function updatePass(UpdateProfile $request, User $user)
    {
        // form data
        $data = $request->validated();
        if($data["password"] != ""){
            $data["password"] = Hash::make($data["password"]);
        }else{
            $data["password"] = $user->password;
        }
        $user->update($data);
        return redirect(route('profile.view', ['user' => $user]))
                    ->with('info', __('Votre mot de passe a été mis à jour'));
    }
}