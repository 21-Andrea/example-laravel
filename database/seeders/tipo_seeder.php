<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\tipo;
class tipo_seeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $tipo =new tipo();
        $tipo->detalle= "Encuestado";
        $tipo->save();

        $tipo2 =new tipo();
        $tipo2->detalle= "Administrador";
        $tipo2->save();
    }
}
