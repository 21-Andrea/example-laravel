<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\tipo;
use Database\Seeders\Curso_db_seeds;
use Database\Seeders\tbl_preguntas;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

      //  \App\Models\Curso_db_seeds::class ;
      $this->call([tipo_seeder::class ]);
      $this->call([usuario_seeder::class ]);
      $this->call([encuesta_seeder::class ]);

      $this->call([tbl_preguntas::class ]);
      $this->call([administrador_seeder::class ]);
    //  $this->call([tbl_preguntas::class, ]);

    }
}
