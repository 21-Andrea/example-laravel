@extends('layouts.plantilla')
@section('title_C', 'show' . $encuesta)

@section('contenido_C')
    <h1>Nombre: {{ $encuesta->nombre }} </h1>
    <a href="{{ route('cursos.create') }}">
        <button class="btn btn-primary">Button para enviar a pagina de ingreso</button>
    </a>
    <h3>Descripcion: {{ $encuesta->descripcion }} </h3>

    <h5> {{ $encuesta->created_at }} </h5>

@endsection
