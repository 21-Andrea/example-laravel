<?php

namespace App\Http\Controllers\ApisEncuesta;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use App\Models\encuesta;
use App\Models;

use Illuminate\Http\Request;

class encuesta_c extends Controller
{
    public function index()
    {
        $encuesta = encuesta::orderBy('id', 'asc') ->get();  // retorna en descendente por id
        //orderBy('id', 'desc') ->get()all();   // retorna en orden por id
        return $encuesta;
    }

    public function store_E(Request $request){ //guardar

        $encuesta= new encuesta();
        $encuesta->name=$request->nombre;
        $encuesta->descripcion=$request->descripcion;


        if ($encuesta->save()) {
            return response()->json([
                'status'=>'OK',
                'message'=>'encuesta registrado correctamente',
                'encuesta'=>$encuesta
            ]);
        }
    }

    public function show($id){ // muestra una encuesta en especifico

        $encuesta = encuesta::find($id);
       return $encuesta;
    }

    public function show_N($nombre) {
        Log::info('Buscando encuesta con nombre: ' . $nombre);

        $encuesta1 = Encuesta::where('nombre', $nombre)->first();

        if ($encuesta1) {
            Log::info('Encuesta encontrada: ' . $encuesta1->toJson());
            return response()->json($encuesta1);
        } else {
            Log::info('Encuesta no encontrada con nombre: ' . $nombre);
            return response()->json(['error' => 'Encuesta no encontrada'], 404);
        }
    }
    public function update_E(Request $request, $id){

        $D_encuesta= encuesta::findOrFail($id);
        $D_encuesta->nombre=$request->nombre;
        $D_encuesta->descripcion=$request->descripcion;
       $D_encuesta->save();
        return $D_encuesta;  // puedo ver los datos q se estan enviado en formato json en el navegador
    }

    public function destroy_E( $id){  //elimina uno especifico

        $D_encuesta = encuesta::destroy($id);

        return $D_encuesta;  // puedo ver los datos q se estan enviado en formato json en el navegador
    }

}
