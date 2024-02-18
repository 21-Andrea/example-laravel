<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>SEGURIDAD INDUSTRIAL</title>
    <meta name= "keywords" content="web, pagina, crear">



    @vite(['resources/js/app.jsx','resources/css/css/bootstrap_1.css','resources/js/index.jsx', 'resources/assets/dist/css/bootstrap.min.css']);



    @vite(['resources/js/js_views/material.min.js', 'resources/js/js_views/sweetalert2.min.js', 'resources/js/js_views/jquery.mCustomScrollbar.concat.min.js', 'resources/js/js_views/main.js', 'resources/js/js_views/jquery-1.11.2.min.js'])

    @vite(['resources/css/app-light.css', 'resources/css/cssTesis/app-dark.css', 'resources/css/feather.css', 'resources/css/material-design-iconic-font.min.css', 'resources/css/cssTesis/daterangepicker.css', 'resources/css/cssTesis/simplebar.css', 'resources/assets/dist/css/bootstrap.min.css'])


    @vite([
        'resources/css/normalize.css',

        //'resources/css/css/bootstrap.css',

        'resources/css/material.min.css',
        'resources/css/material-design-iconic-font.min.css',
        'resources/css/jquery.mCustomScrollbar.css',
        'resources/css/main.css',
        'resources/css/dis.css',
        'resources/css/estilo.css',
        'resources/assets/dist/css/bootstrap.min.css',
    ])

    @vite(['resources/js/js_views/material.min.js', 'resources/js/js_views/sweetalert2.min.js', 'resources/js/js_views/jquery.mCustomScrollbar.concat.min.js', 'resources/js/js_views/main.js', 'resources/js/js_views/jquery-1.11.2.min.js'])

    @vite(['resources/css/app-light.css', 'resources/css/cssTesis/app-dark.css', 'resources/css/feather.css', 'resources/css/material-design-iconic-font.min.css', 'resources/css/cssTesis/daterangepicker.css', 'resources/css/cssTesis/simplebar.css', 'resources/assets/dist/css/bootstrap.min.css'])


</head>

<div>

    @extends('layouts.menuNavEncue')
    @yield('contenido_menu_nav_enc')


</div>


<body class="vertical  light  ">

    <div class="wrapper">
        <main role="main" class="main-content">


            <div class="content-all">
                <section class="encabezado_encuesta">
                    <nav class="navbar navbar-expand-md navbar-dark bg-dark" id="2">
                        <div class="container-fluid" id="1">
                            <a class="navbar-brand" href="">Instituto Superior Tecnológico José Ortega y Gasset -
                                "ISTOG" </a>
                        </div>
                    </nav>
                </section>
            </div>

            <div class="contenedor1" id="titulo_encuesta">

                <h1 style="color: black">ENCUESTA DE INFORMACIÓN DE SEGURIDAD Y SALUD OCUPACIONAL EN LAS MIPYMES</h1>
                <h4 style="color: black">( micro, pequeñas y medianas empresas )</h4>
                <h5 style="color: black">Riobamba - Ecuador </h5>

            </div>

            <section>

                <div id="root">      </div>
            </section>
            <br>

            <footer>
                <p>&copy; 2023 ISTITUTO ISTOG. Todos los derechos reservados.</p>
            </footer>

        </main>

        <script src="{{ asset('js/app.jsx') }}"></script>
    </div>
</body>

</html>
