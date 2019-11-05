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
        // user
        $viewData = [
            'user' => $user,
        ];
        // render view with data
        return view('profile.edit', $viewData);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProfile $request, User $user)
    {
        // form data
        $data = $request->validated();
        if($data["password"] != ""){
            $data["password"] = Hash::make($data["password"]);
        }else{
            $data["password"] = $user->password;
        }
        $user->update($data);
        return redirect(route('profile.edit', ['user' => $user]))
                    ->with('info', 'Your profile has been updated successfully.');
    }
}