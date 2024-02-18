

<!DOCTYPE html>
<html>
<head>
    <title>Evaluación Instituto</title>
    <!-- Enlaza los estilos CSS generados por Laravel Mix -->

    @vite([
           'resources/js/app.jsx',
           'resources/js/index.jsx',
        'resources/assets/dist/css/bootstrap.min.css',
      ]);
          @vite(['resources/js/js_views/material.min.js',
    'resources/js/js_views/sweetalert2.min.js',
    ])
       @vite([
        'resources/css/app-light.css',
       'resources/css/cssTesis/app-dark.css',
       'resources/css/sweetalert2.css',
       'resources/css/main.css',
       'resources/css/material-design-iconic-font.min.css',
       'resources/css/jquery.mCustomScrollbar.css',
       'resources/css/feather.css',
       'resources/css/material-design-iconic-font.min.css',
       'resources/css/cssTesis/daterangepicker.css',
       'resources/css/cssTesis/simplebar.css',
       'resources/assets/dist/css/bootstrap.min.css'
   ]);
   @vite(['resources/css/normalize.css','resources/css/sweetalert2.css','resources/css/material.min.css','resources/css/material-design-iconic-font.min.css','resources/css/jquery.mCustomScrollbar.css','resources/css/main.css' ])
   @vite(['resources/js/js_views/material.min.js',
   'resources/js/js_views/sweetalert2.min.js',
   'resources/js/js_views/jquery.mCustomScrollbar.concat.min.js',
   'resources/js/js_views/main.js',
   'resources/js/js_views/jquery-1.11.2.min.js'
   ]);
</head>
<div>
    @extends('layouts.menuNav')
    @yield('contenido_menu_nav_ADM')
    </div>
    <<body class="vertical light">
    <div class="wrapper">
        <main role="main" class="main-content">
          <div class="container-fluid">
            <h1>INFORMES POR CATEGORIA</h1>
            <div class="row justify-content-center">

                @php
                    $rootElementId='root_informe_resp_desc_eva'; // Define aquí el ID del elemento de montaje según tus necesidades
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
    <script src="{{ asset('js/app.jsx') }}"></script>
</body>
</html>
