<?php

namespace App\Http\Controllers\ApisEncuesta;

use App\Http\Controllers\Controller;
use App\Models\encuestado;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class encuestado_c extends Controller
{
    public function index(){
        $encuestado = encuestado::with('usuario')->get();

        return response()->json($encuestado, 200,);

        /*    $usuario = usuario::with('tipo')->get();
        return response()->json($usuario, 200,);*/
    }


    public function show (encuestado $encuestado)
    {
        $encuestado = encuestado::findOrFail($encuestado)[0];
        return $encuestado;
        //


    }
    public function show_E(Request $request, $clave1)
    {
        $resultados =DB::table('encuestado')
        ->where('cedula_U', $clave1)->first();
        return $resultados;
    }

    public function store_C(Request $request)  {
      //  $request->validated();  // validaciones falta por hacer
        $encuestado= new encuestado();
        $encuestado->Empresa = $request->Empresa;
        $encuestado->Cargo = $request->Cargo;
        $encuestado->Ciudad = $request->Ciudad;
        $encuestado->Celular = $request->Celular;
        $encuestado->Correo = $request->Correo;
        $encuestado->cedula_U = $request->cedula_U;

        if ($encuestado->save()) {
            return response()->json([
                'status'=>'OK',
                'message'=>'encuestado regisamente',
                'encuestado'=>$encuestado
            ]);
        }
    }

    public function destroy_C(encuestado $encuestado)
    {

        $data = [
            'status'=>'Error',
            'message'=>'Hubo un error al eliminar el registro usuario'
        ];

        if ($encuestado->delete()) {
            $data = [
                'status'=>'OK',
                'message'=>'El administrador fue eliminado exitosamente'
            ];
            return response()->json($data, 200);
        }
        return response()->json($data);
    }

    public function update_C(Request $request, $encuestado)
    {
      //  $request->validated();  // hay que terminar de validar
      //  $request->validated();  // hay que terminar de validar
        $encuestado= encuestado::findOrFail($encuestado);
        $encuestado->Cargo = $request->Cargo;
        $encuestado->Ciudad = $request->Ciudad;
        $encuestado->Celular = $request->Celular;
        $encuestado->Correo = $request->Correo;
        $encuestado->cedula_U = $request->cedula_U;
        return $encuestado;
    }

}
