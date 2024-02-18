<?php

namespace App\Http\Controllers\ApisEncuesta;

use App\Http\Controllers\Controller;
use App\Models\respuestas;
use App\Models\preguntas;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class respuestas_c extends Controller
{

    public function index(){

        $respuestas = respuestas::with('preguntas','encuestado')->get();
        return response()->json($respuestas, 200,);
    }


    public function show (respuestas $respuestas, $clave1,$clave2)
    {
        //
        $registro = respuestas::where('id_p', $clave1)
                        ->where('id_e', $clave2)
                        ->first();
        if (!$registro) {
                 // Maneja el caso en el que el registro no se encuentra
                 return abort(404); // O cualquier otra acción que desees
         }
         return response()->json($registro, 200);
    }

    public function show_e (respuestas $respuestas, $clave1)
    {
       $data = respuestas::where('id_e', $clave1)->get();
       if( empty($data) ){
        return response()->json([
            'status'=>'Error',
            'message'=>'respuestas no existen de ese encuestado',
        ], 500);
       }
        return response()->json($data, 200);


    }

    public function show_e_2 (respuestas $respuestas, $clave1)
    {
        $clave2=1;
       $data = respuestas::where('id_e', $clave1)->get();
       $data2= preguntas::where ('id_e', $clave2)->get();
       if( empty($data) && empty($data2) ){
        return response()->json([
            'status'=>'Error',
            'message'=>'respuestas no existen de ese encuestado',
        ], 500);
       }
       return response()->json([
        $data, $data2,
    ], 200);
    }

    public function store_C(Request $request)  {
      //  $request->validated();  // validaciones falta por hacer
        $respuestas= new respuestas();
        $respuestas->id_p = $request->id_p;
        $respuestas->id_e = $request->id_e;
        $respuestas->Respuesta = $request->Respuesta;
        if ($respuestas->save()) {
            return response()->json([
                'status'=>'OK',
                'message'=>'respuestas registrado correctamente',
                'respuestas'=>$respuestas
            ]);
        }
        return response()->json([
            'status'=>'Error',
            'message'=>'Hubo un error al registrar el encuestado',
        ], 500);
    }

    public function destroy_C(respuestas $respuestas , $clave1 )
    {
      DB::table('respuestas')
        ->where('id_e', $clave1)
        ->delete();

        // Redirige o responde con un mensaje de éxito
        return response()->json([
            'status'=>'ok',
            'message'=>'eliminadas todas la respuestas de un encuestado especifico',
        ], 500);

    }

    public function update_C(Request $request, $respuestas)
    {
      //  $request->validated();  // hay que terminar de validar
      //  $request->validated();  // hay que terminar de validar
        $respuestas= respuestas::findOrFail($respuestas);
        $respuestas->id_p = $request->id_p;
        $respuestas->id_e = $request->id_e;
        $respuestas->Respuesta = $request->Respuesta;
     if ($respuestas->save()) {
            $data = [
                'status'=>'OK',
                'message'=>'respuestas actualizado correctamente',
                'respuestas'=>$respuestas
            ];
            return response()->json($data, 200);
        }
    }

}
