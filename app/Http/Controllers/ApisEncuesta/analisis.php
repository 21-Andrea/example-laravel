<?php

namespace App\Http\Controllers\ApisEncuesta;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use App\Models\encuestado;

class analisis extends Controller
{
    public function realizarConsulta()
    {
        $resultados = DB::table('respuestas as A')
            ->join('encuestado as B', 'A.id_e', '=', 'B.id')
            ->join('preguntas as C', 'A.id_p', '=', 'C.id')
            ->select(DB::raw('count(A.respuesta) as count_respuesta'), 'A.respuesta')
            ->where('C.id', 10)
            ->groupBy('A.respuesta')
            ->get();

            return response()->json($resultados);
    }

            public function obtenerEncuestas_R_categoria1()
        {
            $datosEncuesta = DB::table('encuestado as enc')
            ->join('respuestas as rep', 'enc.id', '=', 'rep.id_e')
            ->join('preguntas as pre', 'pre.id', '=', 'rep.id_p')
            ->select('enc.cedula_U', 'pre.Preguntas', 'rep.Respuesta')
            ->where('pre.Categoria', 'CaracteristicasLaboralesyfamiliares')
            ->orderBy('cedula_U', 'ASC')
            ->get();

            return response()->json($datosEncuesta);
        }

        public function obtenerEncuestas_R_categoria2()
        {
            $datosEncuesta = DB::table('encuestado as enc')
            ->join('respuestas as rep', 'enc.id', '=', 'rep.id_e')
            ->join('preguntas as pre', 'pre.id', '=', 'rep.id_p')
            ->select('enc.cedula_U', 'pre.Preguntas', 'rep.Respuesta')
            ->where('pre.Categoria', 'CondicionesDeEmpleo')
            ->orderBy('cedula_U', 'ASC')
            ->get();

            return response()->json($datosEncuesta);
        }

        public function obtenerEncuestas_R_categoria3()
        {
            $datosEncuesta = DB::table('encuestado as enc')
            ->join('respuestas as rep', 'enc.id', '=', 'rep.id_e')
            ->join('preguntas as pre', 'pre.id', '=', 'rep.id_p')
            ->select('enc.cedula_U', 'pre.Preguntas', 'rep.Respuesta')
            ->where('pre.Categoria', 'CondicionesDeTrabajoHigiene')
            ->orderBy('cedula_U', 'ASC')
            ->get();

            return response()->json($datosEncuesta);
        }


        public function obtenerEncuestas_R_categoria4()
        {
            $datosEncuesta = DB::table('encuestado as enc')
            ->join('respuestas as rep', 'enc.id', '=', 'rep.id_e')
            ->join('preguntas as pre', 'pre.id', '=', 'rep.id_p')
            ->select('enc.cedula_U', 'pre.Preguntas', 'rep.Respuesta')
            ->where('pre.Categoria', 'CondicionesDeTrabajoSeguridad')
            ->orderBy('cedula_U', 'ASC')
            ->get();

            return response()->json($datosEncuesta);
        }

        public function obtenerEncuestas_R_categoria5()
        {
            $datosEncuesta = DB::table('encuestado as enc')
            ->join('respuestas as rep', 'enc.id', '=', 'rep.id_e')
            ->join('preguntas as pre', 'pre.id', '=', 'rep.id_p')
            ->select('enc.cedula_U', 'pre.Preguntas', 'rep.Respuesta')
            ->where('pre.Categoria', 'CondicionesDeTrabajoErgonomicas')
            ->orderBy('cedula_U', 'ASC')
            ->get();

            return response()->json($datosEncuesta);
        }

        public function obtenerEncuestas_R_categoria6()
        {
            $datosEncuesta = DB::table('encuestado as enc')
            ->join('respuestas as rep', 'enc.id', '=', 'rep.id_e')
            ->join('preguntas as pre', 'pre.id', '=', 'rep.id_p')
            ->select('enc.cedula_U', 'pre.Preguntas', 'rep.Respuesta')
            ->where('pre.Categoria', 'CondicionesDeTrabajoPsicosocialDemanda')
            ->orderBy('cedula_U', 'ASC')
            ->get();

            return response()->json($datosEncuesta);
        }

        public function obtenerEncuestas_R_categoria7()
        {
            $datosEncuesta = DB::table('encuestado as enc')
            ->join('respuestas as rep', 'enc.id', '=', 'rep.id_e')
            ->join('preguntas as pre', 'pre.id', '=', 'rep.id_p')
            ->select('enc.cedula_U', 'pre.Preguntas', 'rep.Respuesta')
            ->where('pre.Categoria', 'CondicionesDeTrabajoPsicosocialControl')
            ->orderBy('cedula_U', 'ASC')
            ->get();

            return response()->json($datosEncuesta);
        }

        public function obtenerEncuestas_R_categoria8()
        {
            $datosEncuesta = DB::table('encuestado as enc')
            ->join('respuestas as rep', 'enc.id', '=', 'rep.id_e')
            ->join('preguntas as pre', 'pre.id', '=', 'rep.id_p')
            ->select('enc.cedula_U', 'pre.Preguntas', 'rep.Respuesta')
            ->where('pre.Categoria', 'CondicionesDeTrabajoPsicosocialApoyoSocia')
            ->orderBy('cedula_U', 'ASC')
            ->get();

            return response()->json($datosEncuesta);
        }


        public function obtenerEncuestas_R_categoria9()
        {
            $datosEncuesta = DB::table('encuestado as enc')
            ->join('respuestas as rep', 'enc.id', '=', 'rep.id_e')
            ->join('preguntas as pre', 'pre.id', '=', 'rep.id_p')
            ->select('enc.cedula_U', 'pre.Preguntas', 'rep.Respuesta')
            ->where('pre.Categoria', 'SaludOcupacional')
            ->orderBy('cedula_U', 'ASC')
            ->get();

            return response()->json($datosEncuesta);
        }

        public function obtenerEncuestas_R_categoria10()
        {
            $datosEncuesta = DB::table('encuestado as enc')
            ->join('respuestas as rep', 'enc.id', '=', 'rep.id_e')
            ->join('preguntas as pre', 'pre.id', '=', 'rep.id_p')
            ->select('enc.cedula_U', 'pre.Preguntas', 'rep.Respuesta')
            ->where('pre.Categoria', 'CondicionesDeTrabajoPsicosocialRecompensa')
            ->orderBy('cedula_U', 'ASC')
            ->get();

            return response()->json($datosEncuesta);
        }
        public function obtenerEncuestas_R_categoria11()
        {
            $datosEncuesta = DB::table('encuestado as enc')
            ->join('respuestas as rep', 'enc.id', '=', 'rep.id_e')
            ->join('preguntas as pre', 'pre.id', '=', 'rep.id_p')
            ->select('enc.cedula_U', 'pre.Preguntas', 'rep.Respuesta')
            ->where('pre.Categoria', 'RecursosActividadesPreventivas')
            ->orderBy('cedula_U', 'ASC')
            ->get();

            return response()->json($datosEncuesta);
        }


}
