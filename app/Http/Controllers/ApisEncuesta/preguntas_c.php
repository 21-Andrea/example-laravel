<?php

namespace App\Http\Controllers\ApisEncuesta;

use App\Http\Controllers\Controller;
use App\Models\preguntas;
use Illuminate\Http\Request;

class preguntas_c extends Controller
{


    public function index()
    {

        $preguntas = preguntas::with('encuesta')->get();
        return response()->json($preguntas, 200,);
    }
/*

    public function show( $usuario)
    {
         $usuario = tipo::find($usuario);
         // $usuario2= $tipo->usuario;
          //usuario::with('tipo')->get();
         //  $posts = $user->posts;

        $data = [
            'status' =>'OK',
            'message'=>'Registro encontrado',
            'usuario'=> $usuario
        ];

        return response()->json($usuario, 200);
    }
*/

    public function show (preguntas $preguntas)
    {
        //
        $data = [
            'status' =>'OK',
            'message'=>'Registro encontrado',
            'articulo'=> $preguntas
        ];

        return response()->json($data, 200);
    }

    public function store_C(Request $request)  {
      //  $request->validated();  // validaciones falta por hacer
        $preguntas= new preguntas();
        $preguntas->Preguntas = $request->Preguntas;
        $preguntas->Categoria = $request->Categoria;
        $preguntas->id_e = $request->id_e;
        if ($preguntas->save()) {
            return response()->json([
                'status'=>'OK',
                'message'=>'preguntas registrado correctamente',
                'preguntas'=>$preguntas
            ]);
        }
        return response()->json([
            'status'=>'Error',
            'message'=>'Hubo un error al registrar las preguntas',
        ], 500);
    }

    public function destroy_C(preguntas $preguntas)
    {

        $data = [
            'status'=>'Error',
            'message'=>'Hubo un error al eliminar el registro preguntas'
        ];

        if ($preguntas->delete()) {
            $data = [
                'status'=>'OK',
                'message'=>'Las preguntas fue eliminado exitosamente'
            ];
            return response()->json($data, 200);
        }
        return response()->json($data);
    }

    public function update_C(Request $request, $preguntas)
    {
      //  $request->validated();  // hay que terminar de validar
      //  $request->validated();  // hay que terminar de validar
        $preguntas= preguntas::findOrFail($preguntas);
        $preguntas->Preguntas = strtoupper(e($request->Preguntas));
        $preguntas->Categoria = strtoupper(e($request->Categoria));
        $preguntas->id_e = $request->id_e;
        if ($preguntas->save()) {
            $data = [
                'status'=>'OK',
                'message'=>'preguntas actualizado correctamente',
                'preguntas'=>$preguntas
            ];
            return response()->json($data, 200);
        }
    }


}
