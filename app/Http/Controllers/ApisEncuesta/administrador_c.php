<?php

namespace App\Http\Controllers\ApisEncuesta;

use App\Http\Controllers\Controller;
use App\Models\administrador;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

use Illuminate\Support\Facades\Log;



class administrador_c extends Controller
{
    public function index(){

        $usuario = administrador::with('usuario')->get();
        return response()->json($usuario, 200,);
    }

    public function administradores()
    {
        $administrador = administrador::with('usuario')->get();
        return $administrador->all();
    }

    public function show($id){ // muestra una encuesta en especifico

        $encuesta = administrador::find($id);
       return $encuesta;
    }



    public function store_C(Request $request)  {
      //  $request->validated();  // validaciones falta por hacer
        $administrador= new administrador();
        $administrador->username = $request->username;
        $administrador->password =  Hash::make($request->password);
        $administrador->cedula_U = $request->cedula_U;
        if ($administrador->save()) {
            return response()->json([
                'status'=>'OK',
                'message'=>'administrador registrado correctamente',
                'administrador'=>$administrador
            ]);
        }
        return response()->json([
            'status'=>'Error',
            'message'=>'Hubo un error al registrar el administrador',
        ], 500);
    }

    public function destroy_C(administrador $administrador)
    {

        $data = [
            'status'=>'Error',
            'message'=>'Hubo un error al eliminar el registro usuario'
        ];

        if ($administrador->delete()) {
            $data = [
                'status'=>'OK',
                'message'=>'El administrador fue eliminado exitosamente'
            ];
            return response()->json($data, 200);
        }
        return response()->json($data);
    }

    public function update_C(Request $request, $administrador)
    {
      //  $request->validated();  // hay que terminar de validar
      //  $request->validated();  // hay que terminar de validar
        $administrador= administrador::findOrFail($administrador);
        $administrador->username = strtolower(e($request->username));
        $administrador->password = Hash::make(strtolower(e($request->password)));
        $administrador->cedula_U = $request->cedula_U;
        if ($administrador->save()) {
            $data = [
                'status'=>'OK',
                'message'=>'administrador actualizado correctamente',
                'administrador'=>$administrador
            ];
            return response()->json($data, 200);
        }
    }

    public function index_v()
    {
        $administrador= new administrador();
        return $administrador->all();
    }
    public function show_A($username) {
        Log::info('Buscando Administrador por Nombre de Usuario: ' . $username);

        $encuesta1 = administrador::where('username', $username)->first();

        if ($encuesta1) {
            Log::info('Nombre de Usuario encontrado: ' . $encuesta1->toJson());
            return response()->json($encuesta1);
        } else {
            Log::info('Nombre de Usuario no encontrado con nombre: ' . $username);
            return response()->json(['error' => 'Nombre de Usuario no encontrado'], 404);
        }
    }


    public function login(Request $request)
    {
        $response = ["status"=>0,"msg"=>""];
        $data = json_decode($request->getContent());
        $user = administrador::where('NombreU',$data->NombreU)->first();

        if($user){

                if(Hash::check($data->password,$user->password)){
                    $token = $user->createToken("example");
                    $response["status"]=1;
                    $response["msg"]= $token->plainTextToken ;

            }else{
                $response["msg"] = "credenciales incorrectas";
            }

        }else{
            $response["msg"] = "usuario no encontrado";
        }
        return response()->json($response);
    }



}
