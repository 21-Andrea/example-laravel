<?php

namespace Database\Seeders;

use App\Models\usuario;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class usuario_seeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $usuario =new usuario();
        $usuario->cedula="0604402248";
        $usuario->nombre="Josue T";
        $usuario->id_T_U="1";
        $usuario->save();


        $usuario2 =new usuario();
        $usuario2->cedula="0605552222";
        $usuario2->nombre="Emanuel M";
        $usuario2->id_T_U="2";
        $usuario2->save();

        $usuario3 =new usuario();
        $usuario3->cedula="0601111144";
        $usuario3->nombre="Novillo E";
        $usuario3->id_T_U="1";
        $usuario3->save();
    }
}
