<?php

namespace Database\Seeders;

use App\Models\Curso;
use App\Models\encuesta;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Factories\Curso_factoFactory;
use HasFactory;
class curso_seeders extends Seeder
{
    /**
     * Run the database seeds.
     */

    public function run(): void

    {
         /*
        $cont=1;
        do{

        $curso = new Curso();
        $curso->name = "laravel $cont";
        $curso->descripcion = "el mejor curso $cont";
        $curso->categoria = "poo $cont";
        $curso->save();
        $cont++;
        }while($cont!=5);*/

        //Curso::factory(50)->create();


        $encuesta =new encuesta();
        $encuesta->nombre= "ENCUESTA DE SST EN LAS MIPYMES";
        $encuesta->descripcion="Seguridad industrial";
        $encuesta->save();

    }
}
