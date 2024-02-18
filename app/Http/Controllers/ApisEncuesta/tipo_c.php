<?php

namespace App\Http\Controllers\ApisEncuesta;


use App\Http\Controllers\Controller;
use App\Models\tipo;
use Illuminate\Http\Request;

class tipo_c extends Controller
{
    public function index(){
        $tipo= new tipo();
        return $tipo->all();
    }

    public function store_T(Request $request){ //guardar

        $tipo= new tipo();
        $tipo->detalle=$request->detalle;
        $tipo->save();
    }

    public function show_T($id){ // muestra una encuesta en especifico

        $tipo = tipo::find($id);
       return $tipo;
    }

    public function update_T(Request $request, $id){

        $tipo= tipo::findOrFail($id);
        $tipo->detalle=$request->detalle;
         $tipo->save();
        return $tipo;  // puedo ver los datos q se estan enviado en formato json en el navegador
    }

    public function destroy_T( $id){  //elimina uno especifico

        $tipo = tipo::destroy($id);

        return $tipo;  // puedo ver los datos q se estan enviado en formato json en el navegador
    }


}
