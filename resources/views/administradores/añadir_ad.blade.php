

<!DOCTYPE html>
<html>
<head>
    <title>Admistradores Instituto</title>
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
       'resources/css/feather.css',
       'resources/css/material-design-iconic-font.min.css',
       'resources/css/cssTesis/daterangepicker.css',
       'resources/css/cssTesis/simplebar.css',
       'resources/assets/dist/css/bootstrap.min.css'
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
            <div class="row justify-content-center">

                <div class="col-12 col-lg-10 col-xl-8">
                    <h2 class="h3 mb-4 page-title"  style={color:Blue} >Registro del Nuevo Administrador</h2>
                    <div class="my-4">
                      <ul class="nav nav-tabs mb-4" id="myTab" role="tablist">
                        <li class="nav-item">
                          <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Registro - Inicio - Administrador</a>
                        </li>

                      </ul>

                      <div class="row align-items-center">
                          <div class="col-md-3 text-center ">
                            <div class="avatar avatar-xl">
                              <p class="text-center" style="font-size: 100px;">
                                  <i class="zmdi zmdi-account-circle"></i>
                              </p>
                            </div>
                          </div>
                          <div class="col">
                            <div class="row align-items-center">
                              <div class="col-md-7">
                                <h4 class="mb-1">Información del Administrador</h4>
                                <p class="small mb-3"><span class="badge badge-dark">Riobamba - Ecuador</span></p>
                              </div>
                            </div>
                            <div class="row mb-4">
                              <div class="col-md-7">
                                <p class="text-muted">  Ingreso de datos generales del Administrador. </p>
                              </div>
                              <div class="col">
                                <p class="small mb-0 text-muted">Istituto Carlos Cisneros</p>
                                <p class="small mb-0 text-muted">Riobamba - Ecuador</p>
                                <p class="small mb-0 text-muted">(537) 315-1481</p>
                              </div>
                            </div>
                          </div>
                        </div>

                @php
                    $rootElementId='root_anade_Ad'; // Define aquí el ID del elemento de montaje según tus necesidades
                @endphp
                <div id="{{ $rootElementId }}">
                    <!-- Aquí es donde se cargarán tus componentes de React -->
                </div>
                <div id="root">
                    <!-- Aquí es donde se cargarán tus componentes de React -->
                </div>
            </div> <!-- /.card-body -->
        </div> <!-- /.col-12 -->
      </div> <!-- .row -->
    </div> <!-- .container-fluid -->
  </main> <!-- main -->
</div> <!-- .wrapper -->
    <!-- Incluye el archivo JavaScript generado por Laravel Mix -->
    <script src="{{ asset('js/app.jsx') }}"></script>
</body>
</html>
