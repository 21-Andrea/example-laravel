<!DOCTYPE html>
<html>

<head>
    <title>Analisis Instituto</title>
    <!-- Enlaza los estilos CSS generados por Laravel Mix -->

    @vite(['resources/js/app.jsx', 'resources/js/index.jsx', 'resources/assets/dist/css/bootstrap.min.css']);
    @vite(['resources/js/js_views/material.min.js', 'resources/js/js_views/sweetalert2.min.js'])
    @vite(['resources/css/app-light.css', 'resources/css/cssTesis/app-dark.css', 'resources/css/feather.css', 'resources/css/material-design-iconic-font.min.css', 'resources/css/cssTesis/daterangepicker.css', 'resources/css/cssTesis/simplebar.css', 'resources/assets/dist/css/bootstrap.min.css']);
</head>
<style>
   .layout {
  width: 1366px;
  height: 768px;

  display: grid;
  grid:
    "a1 a2 a3" 1fr
    "a4 a5 a6" 1fr
    ". . ." 1fr
    / 1fr 1fr 1fr;
  gap: 8px;
}

.a1 { grid-area: a1; }
.a2 { grid-area: a2; }
.a3 { grid-area: a3; }
</style>

<div>
    @extends('layouts.menuNav')
    @yield('contenido_menu_nav_ADM')
</div>
<body class="vertical light">
    <div class="wrapper">
        <main role="main" class="main-content">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <h1>ANALISIS DE RESULTADOS</h1>
                    <section class="layout">

                            @php
                                $rootElementId = 'root_analisis_V'; // Define aquí el ID del elemento de montaje según tus necesidades
                            @endphp <!-- Aquí es donde se cargarán tus componentes de React -->


                            <div class="a1" id="root"  style="width: 100px; height: 80px; border: 1px solid rgb(54, 98, 219);">
                                   </div>

                    </section>
                </div>
        </main>
    </div>
    <!-- Incluye el archivo JavaScript generado por Laravel Mix -->
    <script src="{{ asset('js/app.jsx') }}"></script>
    </body>

</html>
