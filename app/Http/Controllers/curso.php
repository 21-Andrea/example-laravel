<?php

namespace App\Http\Controllers;

use App\Models\encuesta;
use Illuminate\Http\Request;

class curso extends Controller
{
    public function ver(){
    return   view('index');}

    public function welcome(){
        return
       view('layouts.app');
    }

    public function ingreso(){
        return
       view('cursos.ingreso');
    }


    public function create(){
       // $encuesta=encuesta::orderBy('id', 'desc') ->get(); // consulta sql para traer datos de la bd
       $encuesta1=encuesta::orderBy('id', 'desc') ->paginate(5);  // paginate crea paginado importante sino no funciona en blade el paginado
       //  return $encuesta;
        return view('cursos.create', compact('encuesta1'));  // compact parar traer los datos de la base
    }

    public function store(Request $request){

        $encuesta= new encuesta();
        $encuesta->name=$request->nombre;
        $encuesta->descripcion=$request->descripcion;


        if ($encuesta->save()) {
            /*return response()->json([
                'status'=>'OK',
                'message'=>'usuario registrado correctamente',
                'usuario'=>$encuesta
            ]);*/
            return  redirect()->route('cursos.show', $encuesta);
        }
        return response()->json([
            'status'=>'Error',
            'message'=>'Hubo un error al registrar el usuario',
        ], 500);

      //return  redirect()->route('cursos.show', $encuesta);
        // return redirect()->route('cursos.create');  // redireccciona a otra vista
       //   return $request->all();  // puedo ver los datos q se estan enviado en formato json en el navegador
    }

    public function show($id){
        $D_encuesta= encuesta::find($id);
        return view('cursos.show',["encuesta" => $D_encuesta]);
    }

}
