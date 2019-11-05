<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

use Illuminate\Support\Facades\Hash;

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
        return [
            'name' => 'required|string|max:255',
            'email' => 'required|string|max:255',
            'password' => 'nullable|required_with:password_confirmation|string|confirmed',
            'current_password' => 'required',
        ];
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
            if(!is_null($pw_db)){
                $pw_entered = $this->current_password;
                // $hashed = Hash::make($pw);
                if ( !Hash::check($pw_entered, $pw_db) ) {
                    $validator->errors()->add('current_password', 'Your current password is incorrect.');
                };
            };
        });
        return;
    }
}