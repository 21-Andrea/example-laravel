<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class VsaveEncuesta extends FormRequest
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
            //nombre,descripcion,
            'nombre'=>'required|unique:encuesta,nombre|max:100',
            'descripcion'=>'required|max:100'


        ];
    }
}
