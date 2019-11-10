<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContentRequest extends FormRequest
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
            'title' => 'required|max:150',
            'description' => 'nullable|max:300',
            'html' => 'required',
            'type_id' => 'required|numeric|min:1|max:3',
            'user_id' => 'required|numeric|min:1'
        ];
    }
}
