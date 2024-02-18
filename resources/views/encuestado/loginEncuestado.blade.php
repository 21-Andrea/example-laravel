

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Login - Encuestado</title>
    <!-- Simple bar CSS -->

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

    @vite([
     'resources/css/app-light.css',
    'resources/css/cssTesis/app-dark.css',
    'resources/css/feather.css',
    'resources/css/material-design-iconic-font.min.css',
    'resources/css/cssTesis/daterangepicker.css',
    'resources/css/cssTesis/simplebar.css',
    'resources/assets/dist/css/bootstrap.min.css'
])
</head>
  <div>

    @extends('layouts.menuNavEncue')
    @yield('contenido_menu_nav_enc')


    </div>


<body class="vertical  light  ">


<div class="wrapper">
      <main role="main" class="main-content">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-12 col-lg-10 col-xl-8">
              <h2 class="h3 mb-4 page-title">Registro del Encuestado</h2>
              <div class="my-4">
                <ul class="nav nav-tabs mb-4" id="myTab" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Registro - Inicio</a>
                  </li>

                </ul>

                <div class="row mt-5 align-items-center">
                    <div class="col-md-3 text-center mb-5">
                      <div class="avatar avatar-xl">
                        <p class="text-center" style="font-size: 170px;">
                            <i class="zmdi zmdi-account-circle"></i>
                        </p>
                      </div>
                    </div>
                    <div class="col">
                      <div class="row align-items-center">
                        <div class="col-md-7">
                          <h4 class="mb-1">Información encuestado</h4>
                          <p class="small mb-3"><span class="badge badge-dark">Riobamba - Ecuador</span></p>
                        </div>
                      </div>
                      <div class="row mb-4">
                        <div class="col-md-7">
                          <p class="text-muted"> La finalidad de realizar una encuesta sobre seguridad industrial en talleres de mecánica es recopilar información importante para evaluar y mejorar las condiciones de seguridad en el entorno laboral de estos talleres. Las encuestas de seguridad industrial en talleres mecánicos se utilizan con varios propósitos fundamentales de carácter preventivo. </p>
                        </div>
                        <div class="col">
                          <p class="small mb-0 text-muted">Istituto Carlos Cisneros</p>
                          <p class="small mb-0 text-muted">Riobamba - Ecuador</p>
                          <p class="small mb-0 text-muted">(537) 315-1481</p>
                        </div>
                      </div>
                    </div>
                  </div>

                <div id="root">     </div>
              </div> <!-- /.card-body -->
            </div> <!-- /.col-12 -->
          </div> <!-- .row -->
        </div> <!-- .container-fluid -->
      </main> <!-- main -->
    </div> <!-- .wrapper -->
    <script  src="{{ asset('js/app.jsx') }}"></script>
  </body>
</html>
