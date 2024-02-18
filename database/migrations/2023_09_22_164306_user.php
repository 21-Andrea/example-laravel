<?php

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class User extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    use HasFactory;
    public function up()
    {

        schema::create('tipo', function(Blueprint $table  ){
            $table->id();
            $table->longText('detalle')->nullable();
            $table->timestamps();

        });

        schema::create('encuesta', function(Blueprint $table2  ){
            $table2->id();
            $table2-> string('nombre');
            $table2-> longText('descripcion')->unique();
            $table2->timestamps();
        });



    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        schema::dropIfExists('tipo');
    }
}
