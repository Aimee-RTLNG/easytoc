<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

use App\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class UpdateProfile extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $id = Auth::user()->id;
        $u = User::find($id);
        $pw_db = $this->user()->password;
        return [
            'name' => 'string|min:3|max:255',
            'email' => 'string|min:10|max:255|unique:users,email,' .$u->id,
            'password' => 'sometimes|nullable|required_with:password_confirmation|string|confirmed',
            'password_confirmation' => 'sometimes|nullable|required_with:password|string',
            'current_password' => 'sometimes|required_with:password',
        ];
    }
    public function messages()
    {
        return ['unique' => __("Adresse e-mail déjà utilisée : choisissez une autre adresse.")];
    }

    /**
     * Configure the validator instance.
     *
     * @param  \Illuminate\Validation\Validator  $validator
     * @return void
     */
    public function withValidator($validator)
    {
        // checks user current password
        // before making changes
        $validator->after(function ($validator) {
            $pw_db = $this->user()->password;
            $pw_entered = $this->current_password;
            if(!is_null($pw_db) && !is_null($pw_entered)){
                // $hashed = Hash::make($pw);
                if ( !empty($pw_entered) && !Hash::check($pw_entered, $pw_db) ) {
                    $validator->errors()->add('current_password', __('Le mot de passe actuel entré est incorrect') );
                };
            };
        });
        return;
    }
}