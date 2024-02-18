<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class VsavePreguntas extends FormRequest
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
            // id_e,Preguntas,Categoria
            'id_e'=>'required',
            'Preguntas'=> 'required|max:100',
            'Categoria'=>'required|max:100'
        ];
    }
}
