<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

    <title>create</title>
</head>
<body>

    <h1>pagina create</h1>
    <br>
    <a href="{{ route('cursos.ingreso') }}">
        <button class="btn btn-primary" >Button para enviar a pagina de ingreso</button>
    </a>

    <ul>

        @foreach ($encuesta1 as $encuest)  <!--imprime todo los datos de la base-->
        <li>
          <a href="{{route('cursos.show', $encuest->id)}}"->
            {{$encuest->nombre}},{{$encuest->id}}</a>
           {{-- {{$encuest->nombre}},{{$encuest->id}},{{$encuest->created_at}} --}} <!--muestra losa datos de la tbl a mostrar-->
        </li>


        @endforeach
    </ul>
    {{$encuesta1->links()}}  <!--   menu para navegar al numero infinito de paginas creadas -->


</body>
</html>
