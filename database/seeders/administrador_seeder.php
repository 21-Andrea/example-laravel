<?php

namespace Database\Seeders;

use App\Models\administrador;
use GuzzleHttp\Psr7\Request;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class administrador_seeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $pass="userj";
        $var=Hash::make($pass);
        $administrador=new administrador();
        $administrador->username = "user";
        $administrador->password = $var;
        $administrador->cedula_U = "0604402248";
        $administrador->save();

    }
}
