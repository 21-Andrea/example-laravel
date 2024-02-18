

<!DOCTYPE html>
<html>
<head>
    <title>Mi Aplicación con React</title>
    <!-- Enlaza los estilos CSS generados por Laravel Mix -->

    @vite([
           'resources/js/app.jsx',
           'resources/js/index.jsx',
        'resources/assets/dist/css/bootstrap.min.css',
      ]);
          @vite(['resources/js/js_views/material.min.js',
    'resources/js/js_views/sweetalert2.min.js',
    'resources/js/js_views/jquery.mCustomScrollbar.concat.min.js',
    'resources/js/js_views/main.js',
    'resources/js/js_views/jquery-1.11.2.min.js'
    ])

</head>
<div>
    @extends('layouts.menuNavEncue')
    @yield('contenido_menu_nav_enc')
    </div>
<<body class="vertical light">
    <div class="wrapper">
        <main role="main" class="main-content">
          <div class="container-fluid">
            <div class="row justify-content-center">
                @php
                      $rootElementId='root_3'; // Define aquí el ID del elemento de montaje según tus necesidades
                @endphp
                <div id="{{ $rootElementId }}">
                    <!-- Aquí es donde se cargarán tus componentes de React -->
                </div>
                <div id="root">
                    <!-- Aquí es donde se cargarán tus componentes de React -->
                </div>
            </div>
        </main>
    </div>
    <!-- Incluye el archivo JavaScript generado por Laravel Mix -->
    <script  src="{{ asset('js/app.jsx') }}"></script>
</body>
</html>
