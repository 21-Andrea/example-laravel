<?php

namespace App\Http\Controllers\ApisEncuesta;

use App\Http\Controllers\Controller;
use App\Models\tipo;
use App\Models\usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class usuario_c extends Controller
{

    public function index()
    {

        $usuario = usuario::with('tipo')->get();
        return response()->json($usuario, 200,);
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

    public function show (usuario $usuario)
    {
        //
        $encuesta = usuario::find($usuario)[0];
        return $encuesta;
    }

    public function store_C(Request $request)  {
      //  $request->validated();  // validaciones falta por hacer
        $usuario= new usuario();
        $usuario->cedula = $request->cedula;
        $usuario->nombre = $request->nombre;
        $usuario->id_T_U = $request->id_T_U;
        if ($usuario->save()) {
            return response()->json([
                'status'=>'OK',
                'message'=>'usuario registrado correctamente',
                'usuario'=>$usuario
            ]);
        }
        return response()->json([
            'status'=>'Error',
            'message'=>'Hubo un error al registrar el usuario',
        ], 500);
    }

    public function destroy_C(usuario $usuario)
    {

        $data = [
            'status'=>'Error',
            'message'=>'Hubo un error al eliminar el registro usuario'
        ];

        if ($usuario->delete()) {
            $data = [
                'status'=>'OK',
                'message'=>'El usuario fue eliminado exitosamente'
            ];
            return response()->json($data, 200);
        }
        return response()->json($data);
    }

    public function update_C(Request $request, $usuario)
    {
      //  $request->validated();  // hay que terminar de validar
      //  $request->validated();  // hay que terminar de validar
        $usuario= usuario::findOrFail($usuario);
        $usuario->cedula = strtoupper(e($request->cedula));
        $usuario->nombre = strtoupper(e($request->nombre));
        $usuario->id_T_U = $request->id_T_U;
        if ($usuario->save()) {
            $data = [
                'status'=>'OK',
                'message'=>'Articulo actualizado correctamente',
                'usuario'=>$usuario
            ];
            return response()->json($data, 200);
        }
    }



}
