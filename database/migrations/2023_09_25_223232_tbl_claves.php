<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Migrations\Migrator;


return new class extends Migration
{
   // $val =new User
    public function up()
    {
       // include(database_path('migrations/' . 'User.php'));

        Schema::create('usuario', function (Blueprint $table) {
            $table->string('cedula')->primary();
            $table->string('nombre');
            $table->unsignedBigInteger('id_T_U'); // La clave foránea tipó de usuario
            $table->timestamps();
            $table->foreign('id_T_U')->references('id')->on('tipo')->onDelete('cascade');

        });

        schema::create('administrador', function(Blueprint $table  ){
            $table->id();
            $table-> string('username');
            $table-> string('password');
            $table-> string('cedula_U'); // La clave foránea  de usuario
            $table->timestamps();

            $table->foreign('cedula_U')
              ->references('cedula')
              ->on('usuario')->onDelete('cascade');
           // $table->foreign('cedula_U')->references('cedula')->on('usuario');

        });

        schema::create ('encuestado', function (Blueprint $table){
            $table->id();
            $table-> string('Empresa');
            $table-> longText('Cargo')->nullable();
            $table-> longText('Ciudad')->nullable();
            $table-> String('Celular', 10)->nullable();
            $table-> String('Correo')->nullable()->unique();
            $table->String('cedula_U'); // La clave foránea  de usuario
            $table->timestamps();
            $table->foreign('cedula_U')
            ->references('cedula')
            ->on('usuario')->onDelete('cascade');

           // $table->foreign('cedula_U')->references('cedula')->on('usuario');


        });
        schema::create ('preguntas', function (Blueprint $table){
            $table->id();
            $table-> unsignedBigInteger('id_e'); // id de encuesta
            $table-> string('Preguntas');
            $table-> string('Categoria');
            $table->timestamps();
            $table->foreign('id_e')->references('id')->on('encuesta')->onDelete('cascade');

        });

        schema::create ('respuestas', function (Blueprint $table){
            $table->primary(['id_p','id_e']);
            $table-> unsignedBigInteger('id_p');  // id de preguntas
            $table-> unsignedBigInteger('id_e'); //id de encuestado
            $table-> string('Respuesta');
            $table-> timestamps();

            $table->foreign('id_p')->references('id')->on('preguntas')->onDelete('cascade');
            $table->foreign('id_e')->references('id')->on('encuestado')->onDelete('cascade');

        });



        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('description');
            $table->double('price', 8, 2);
            $table->integer('stock');
            $table->timestamps();
        });



    }




};
