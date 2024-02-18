@extends('layouts.plantilla')
@section('title_C' , 'index terminado')

@section('contenido_C')

<h1>principal pagina ingreso </h1>

     <form action="{{route('cursos.store')}}" method="POST">  {{-- especificamos la ruta para mandar datos esta en routers/web --}}
        @section('contenido_main')
        @csrf  {{-- es el token se pone obligado --}}


        <label >Nombre
            <br>
            <input type="text" name="nombre">
            <br>
        </label>
        <br>


        <label >Descripcion
            <br>
           <textarea name="descripcion"></textarea>

        </label>
        <br><br><br>

        <button class="btn btn-primary" type="submit">formulario enviar</button>


    </form>
@endsection
