<?php

namespace App\Http\Controllers;
use App\Models\encuesta;
use Illuminate\Http\Request;

class rutas extends Controller
{
    public function vista_encuesta_public(){
        return
       view('encuestado.encuesta');
    }

    public function login_vista_encuesta_public(){
        return
       view('encuestado.loginEncuestado');
    }

    /////////////////////////////
    /// rutas de evalucaciones///
    public function evaluacion_anadir(){
        return
       view('evaluacion.anadir');
    }
    public function evaluacion_busqueda(){
        return
       view('evaluacion.busqueda');
    }
    public function evaluacion_gestion(){
        return
       view('evaluacion.gestion');
    }

    public function evaluacion_edicion($id){
       // $D_encuesta= encuesta::find($id);
        return
       view('evaluacion.editar',['id' => $id]);
    }

    public function administradores_anadir(){
        return
       view('administradores.añadir_ad');
    }

    public function administradores_busqueda(){
        return
       view('administradores.busqueda_ad');
    }
    public function administradores_gestion(){
        return
       view('administradores.gestion_ad');
    }
    public function encuestados_informe(){
        return
       view('encuest.informe_R');
    }
    public function encuestados_informe_Esp(){
        return
       view('encuest.informe_esp_R');
    }
    public function administradores_informe(){
        return
       view('administradores.informe_ad');
    }

    public function analisis_com_final_eva_informe(){
        return
       view('analisis.analisis_general');
    }
    public function descarga_eva_informe(){
        return
       view('descarga.desc_evalua_enc');
    }

    public function descarga_resp_eva_informe(){
        return
       view('descarga.desc_resp_eva_enc');
    }


    public function encuestados_gestion(){
        return
       view('encuest.gestion_enc');
    }



}
