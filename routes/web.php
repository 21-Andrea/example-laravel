<?php

use App\Http\Controllers\administrador_c as ControllersAdministrador_c;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Controller;
use App\Http\Controllers\curso;
use App\Http\Controllers\rutas;
use App\Http\Controllers\ApisEncuesta\administrador_c;
use Illuminate\Validation\ValidationException;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

//Route::get('/', function () { return view ('index'); });
////////////////////// RUTAS PRICIPAL Y LOGGIN /////////////////////////////////////
Route::get('/', function () {
    return view('welcome');
});



Route::get('/login', function () {
    return view('login');
})->name('login');



Route::post('login', function () {

    $credenciales = request()->validate([
        'username' => ['required','string']
        ,'password' => ['required','string']
    ]);

    if(Auth::attempt($credenciales)){
        request()->session()->regenerate();
        return redirect('Cursos');
    }

    throw ValidationException::withMessages([
        'username' => 'Estas credenciales no coinciden con nuestros registros'
    ]);
});


Route::post('/logout', function (Request $request) {
    Auth::logout();
    $request->session()->invalidate();
    $request->session()->regenerateToken();
    return redirect('')->with('status','Has cerrado sesión');
})->name('logout');


/////////////////////// RUTAS DE ENCUESTAS /////////////////////////////////////

Route::get('Encuestado/Encuesta',[rutas::class,'vista_encuesta_public'])->name('encuestado.encuesta');

Route::get('Encuestado/Login',[rutas::class,'login_vista_encuesta_public'])->name('encuestado.loginEncuestado');


//////////////////////////////////////////
//////////////////////////////////////////////////////////////////
Route::get('Cursos',[curso::class,'ingreso'])->name('cursos.ingreso');


Route::get('Cursos/Curso1',[curso::class,'create'])->name('cursos.create');


Route::get('Cursos/{id}',[curso::class,'show'])->name('cursos.show');

// crear las rutas para los crud
// inf de formularios la base -- con post o set

Route::post('Cursos',[curso::class,'store'])->name('cursos.store');


////////////////////////////////
//Route::get('welcome',[curso::class,'welcome'])->name('welcome');
Route::get('/home_T_1', function () {
    return view('home_1');
})->name('home2');





//////////////////////////////////////////////////////////
/// EVALUCAION ////////////////////


Route::get('/Evaluacion/Añadir',[rutas::class,'evaluacion_anadir'])->name('evaluacion_anadir_1');

Route::get('/Evaluacion/Busqueda',[rutas::class,'evaluacion_busqueda'])->name('evaluacion_busqueda_1');

Route::get('/Evaluacion/Gestion',[rutas::class,'evaluacion_gestion'])->name('evaluacion_gestion_1');

Route::get('/Evaluacion/Editar/{id}',[rutas::class,'evaluacion_edicion'])->name('evaluacion_edicion_1');


/////////////////////////////
/// ADMINISTRADORES ////////////////////


Route::get('/Administradores/Añadir',[rutas::class,'administradores_anadir'])->name('administradores_anadir_1');

Route::get('/Administradores/Busqueda',[rutas::class,'administradores_busqueda'])->name('administradores_busqueda_1');

Route::get('/Administradores/Gestion',[rutas::class,'administradores_gestion'])->name('administradores_gestion_1');

Route::get('/Administradores/Informe',[rutas::class,'administradores_informe'])->name('administradores_informe_1');


/////////////////////////////
/////////////////////////////
/// ENCUESTADOS ////////////////////


//Route::get('/Administradores/Añadir',[rutas::class,'administradores_anadir'])->name('administradores_anadir_1');

//Route::get('/Administradores/Busqueda',[rutas::class,'administradores_busqueda'])->name('administradores_busqueda_1');

Route::get('/Encuestados/Gestion',[rutas::class,'administradores_gestion'])->name('encuestados_gestion_1');
Route::get('/Encuestados/Informe',[rutas::class,'encuestados_informe'])->name('encuestados_informe_1');
Route::get('/Encuestados/Informe_Especifico',[rutas::class,'encuestados_informe_Esp'])->name('encuestados_informe_Esp');


//Route::get('/Evaluacion/Editar',[rutas::class,'evaluacion_edicion'])->name('evaluacion_edicion_1');
/////////////////////////////
////// EVALUCIONES DESCARGA/////////////
Route::get('/Descarga/Evaluaciones',[rutas::class,'descarga_eva_informe'])->name('descarga_evaluacion_informe_1');
Route::get('/Descarga/Respuestas_Evaluaciones',[rutas::class,'descarga_resp_eva_informe'])->name('descarga_resp_evaluacion_informe_1');

/////////////////////////////
////// ANALISIS VISTA GENERAL///////////


Route::get('/Analisis/Grafica',[rutas::class,'analisis_com_final_eva_informe'])->name('analisis_infor_enc_informe_1');

////////////////index///
Route::get('/home', function () {
    return view('index');
})->name('index2');
