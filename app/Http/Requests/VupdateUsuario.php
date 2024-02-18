<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class VupdateUsuario extends FormRequest
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
            "cedula" => "required|unique:personas,cedula|max:10".$this->route('usuario')->id,            "nombre" => "required|max:150",
            "id_T_U" => "required"
        ];
    }
}
