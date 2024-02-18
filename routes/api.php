<?php


use App\Http\Controllers\ApisEncuesta\analisis;
use App\Http\Controllers\curso;
use App\Http\Controllers\ApisEncuesta\administrador_c;
use App\Http\Controllers\ApisEncuesta\encuesta_c;
use App\Http\Controllers\ApisEncuesta\preguntas_c;
use App\Http\Controllers\ApisEncuesta\ProductController;
use App\Http\Controllers\ApisEncuesta\respuestas_c;
use App\Http\Controllers\ApisEncuesta\tipo_c;
use App\Http\Controllers\ApisEncuesta\usuario_c;
use App\Http\Controllers\ApisEncuesta\encuestado_c;
use App\Http\Controllers\ApisEncuesta\idEncuestado;
use App\Models\respuestas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::get('/wallet','WalletController@index');
Route::post('/transfer','TransferController@store');
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::controller(ProductController::class)->group( function(){
    Route::get('/products', 'index');
    Route::post('/product', 'store');
    Route::get('/product/{id}', 'show');
    Route::put('/product/{id}', 'update');
    Route::delete('/product/{id}', 'destroy');
});


Route::controller(encuesta_c::class)->group( function(){
    Route::get('/encuesta', 'index');
    Route::post('/encuestas', 'store_E');
    Route::get('/encuestasN/{nombre}', 'show_N');
    Route::get('/encuestas/{id}', 'show');
    Route::put('/encuestas/{id}', 'update_E');
    Route::delete('/encuestas/{id}', 'destroy_E');
});


Route::controller(tipo_c::class)->group( function(){
    Route::get('/tipo', 'index');
    Route::post('/tipo', 'store_T');
    Route::get('/tipo/{id}', 'show_T');
    Route::put('/tipo/{id}', 'update_T');
    Route::delete('/tipo/{id}', 'destroy_T');
});


Route::controller(usuario_c::class)->group( function(){

    Route::get('/usuario','index');
    Route::post('/usuario','store_C');
    Route::get('/usuario/{usuario}','show');
    Route::delete('/usuario/{usuario}','destroy_C');
    Route::put('/usuario/{usuario}', 'update_C');
});

Route::controller(preguntas_c::class)->group( function(){

    Route::get('/preguntas','index');
    Route::post('/preguntas','store_C');
    Route::get('/preguntas/{preguntas}','show');
    Route::delete('/preguntas/{preguntas}','destroy_C');
    Route::put('/preguntas/{preguntas}', 'update_C');
});

Route::controller(administrador_c::class)->group( function(){

    Route::get('/administrador','index');
    Route::get('/administrador1','administradores');
    Route::get('/administradorN/{nombre}', 'show_A');
    Route::post('/administrador','store_C');
    Route::get('/administrador/{id}','show');
    Route::delete('/administrador/{administrador}','destroy_C');
    Route::put('/administrador/{administrador}', 'update_C');
});


Route::controller(encuestado_c::class)->group( function(){

    Route::get('/encuestado','index');
    Route::post('/encuestado','store_C');
    Route::get('/encuestado/{encuestado}','show');
    Route::get('/encuestado_E/{encuestado}','show_E');
    Route::delete('/encuestado/{encuestado}','destroy_C');
    Route::put('/encuestado/{encuestado}', 'update_C');
});

Route::controller(respuestas_c::class)->group( function(){

    Route::get('/respuestas','index'); //muesta todas las respuestas
    Route::post('/respuestas','store_C'); //añade una respuesta
    Route::get('/respuestas/{id_e}','show_e'); // muestra todas las respuestas de un encuestado
    Route::get('/respuestas_R_P/{id_e}','show_e_2'); // muestra todas las respuestas de un encuestado
    Route::get('/respuestas/{id_p}/{id_e}','show'); //muestra una pregunta de un usuario especifico
    Route::delete('/respuestas/{id_e}','destroy_C'); //destruye todas las respuestats de un encuestado especifico
    Route::put('/respuestas/{id_p}/{id_e}', 'update_C'); // modifica una respuesta espcifica
});

Route::controller(analisis::class)->group( function(){

    Route::get('/realizarConsulta','realizarConsulta');

});

Route::controller(idEncuestado::class)->group( function(){

    Route::get('/idEncuestado','ejecutarConsulta');

});

Route::controller(idEncuestado::class)->group( function(){   Route::get('/ejecutarConsulta_1','ejecutarConsulta_1'); });
Route::controller(idEncuestado::class)->group( function(){   Route::get('/ejecutarConsulta_2','ejecutarConsulta_2'); });
Route::controller(idEncuestado::class)->group( function(){   Route::get('/ejecutarConsulta_3','ejecutarConsulta_3'); });
Route::controller(idEncuestado::class)->group( function(){   Route::get('/ejecutarConsulta_4','ejecutarConsulta_4'); });
Route::controller(idEncuestado::class)->group( function(){   Route::get('/ejecutarConsulta_5','ejecutarConsulta_5'); });
Route::controller(idEncuestado::class)->group( function(){   Route::get('/ejecutarConsulta_6','ejecutarConsulta_6'); });

// genera pdf por categoria
Route::controller(analisis::class)->group( function(){   Route::get('/obtenerEncuestas_R_categoria1','obtenerEncuestas_R_categoria1'); });
Route::controller(analisis::class)->group( function(){   Route::get('/obtenerEncuestas_R_categoria2','obtenerEncuestas_R_categoria2'); });
Route::controller(analisis::class)->group( function(){   Route::get('/obtenerEncuestas_R_categoria3','obtenerEncuestas_R_categoria3'); });
Route::controller(analisis::class)->group( function(){   Route::get('/obtenerEncuestas_R_categoria4','obtenerEncuestas_R_categoria4'); });
Route::controller(analisis::class)->group( function(){   Route::get('/obtenerEncuestas_R_categoria5','obtenerEncuestas_R_categoria5'); });
Route::controller(analisis::class)->group( function(){   Route::get('/obtenerEncuestas_R_categoria6','obtenerEncuestas_R_categoria6'); });
Route::controller(analisis::class)->group( function(){   Route::get('/obtenerEncuestas_R_categoria7','obtenerEncuestas_R_categoria7'); });
Route::controller(analisis::class)->group( function(){   Route::get('/obtenerEncuestas_R_categoria8','obtenerEncuestas_R_categoria8'); });
Route::controller(analisis::class)->group( function(){   Route::get('/obtenerEncuestas_R_categoria9','obtenerEncuestas_R_categoria9'); });
Route::controller(analisis::class)->group( function(){   Route::get('/obtenerEncuestas_R_categoria10','obtenerEncuestas_R_categoria10'); });
Route::controller(analisis::class)->group( function(){   Route::get('/obtenerEncuestas_R_categoria11','obtenerEncuestas_R_categoria11'); });



