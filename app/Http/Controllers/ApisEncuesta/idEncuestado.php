<?php

namespace App\Http\Controllers\ApisEncuesta;


use App\Http\Controllers\Controller;
use App\Models\preguntas;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Psy\Readline\Hoa\Console;

class idEncuestado extends Controller
{
    public function ejecutarConsulta()
    {

        $ultimoNombre = DB::table('encuestado')
        ->orderBy('id', 'desc') // Ordena por el ID en orden descendente para obtener el último
        ->value('id');


        try {
            return response()->json($ultimoNombre);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }


    public function ejecutarConsulta_1()
    {

        $ultimoNombre = DB::table('encuesta')
        ->count('id'); // Ordena por el ID en orden descendente para obtener el último



        try {
            return response()->json($ultimoNombre);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }


    public function ejecutarConsulta_2()
    {

        $ultimoNombre = DB::table('preguntas')
        ->count('id'); // Ordena por el ID en orden descendente para obtener el último

        try {
            return response()->json($ultimoNombre);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
    public function ejecutarConsulta_3()
    {

        $ultimoNombre = DB::table('encuestado')
        ->count('id'); // Ordena por el ID en orden descendente para obtener el último

        try {
            return response()->json($ultimoNombre);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function ejecutarConsulta_4()
    {

        $ultimoNombre = DB::table('usuario')
        ->count('cedula'); // Ordena por el ID en orden descendente para obtener el último

        try {
            return response()->json($ultimoNombre);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function ejecutarConsulta_5()
    {

        $ultimoNombre = DB::table('respuestas')
        ->count('id_p'); // Ordena por el ID en orden descendente para obtener el último

        try {
            return response()->json($ultimoNombre);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }


    public function ejecutarConsulta_6()
    {

        $cantidad = DB::table('preguntas')->select(DB::raw('COUNT(DISTINCT Categoria) as Cantidad'))->first();


        $ultimoNombre = 7;
        try {
            return response()->json($ultimoNombre);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
