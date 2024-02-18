<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class VupdateEncuestado extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'empresa'=>'required|max:100'.$this->route('encuestado')->id,
            'cargo'=>'required|max:50',
            'ciudad'=>'required|max:40',
            'celular'=>'required|max:10',
            'email' =>'required|email:rfc,dns',
            'cedula_U'=>'required'
        ];
    }
}
