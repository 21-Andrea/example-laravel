<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class VsaveAdministrador extends FormRequest
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
            //Nombre_U,Pass,cedula_U,
            'Nombre'=>'required|unique:administrador,Nombre|max:100',
            'Pass'=>'required|min:8',
            'cedula_U'=>'required'
        ];
    }
}
