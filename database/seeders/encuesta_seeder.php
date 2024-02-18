<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\encuesta;

class encuesta_seeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $encuesta =new encuesta();
        $encuesta->nombre= "ENCUESTA DE SST EN LAS MIPYMES";
        $encuesta->descripcion="Seguridad industrial";
        $encuesta->save();
    }
}
