
<div class="menu_nav">
    @yield('contenido_menu_nav_ADM')
    @vite([
           'assets/img/logo_Cs.png'
      ]);
    <aside class="sidebar-left border-right bg-white shadow" id="leftSidebar" data-simplebar>
<a href="#" class="btn collapseSidebar toggle-btn d-lg-none text-muted ml-2 mt-3" data-toggle="toggle">
  <i class="fe fe-x"><span class="sr-only"></span></i>
</a>
<nav class="vertnav navbar navbar-light">
  <!-- nav bar -->
  <div class="w-100 mb-4 d-flex">
    <a class="navbar-brand mx-auto mt-2 flex-fill text-center" href="{{ route('index2') }}">
        <center><img src="../fotos/logo_Cs.png"  width="120" height="120"></center>
    </a>
  </div>
  <ul class="navbar-nav flex-fill w-100 mb-2">
    <li class="nav-item dropdown">
      <a href="#dashboard   " data-toggle="collapse" aria-expanded="false" class="dropdown-toggle nav-link">
        <i class="fe fe-home fe-16"></i>
        <span class="ml-3 item-text">Evaluación</span><span class="sr-only">(current)</span>
      </a>
      <ul class="collapse1 list-unstyled pl-4 w-100" id="dashboard">

        <li class="nav-item">
          <a class="nav-link pl-3" href="{{ route('evaluacion_anadir_1') }}"><span class="ml-1 item-text">Añadir Evaluación</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link pl-3" href="{{ route('evaluacion_busqueda_1') }}"><span class="ml-1 item-text">Búsqueda Evaluación</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link pl-3" href="{{ route('evaluacion_gestion_1') }}"><span class="ml-1 item-text">Gestión de evaluación</span></a>
        </li>
      </ul>
    </li>
  </ul>
  <p class="text-muted nav-heading mt-4 mb-1">
    <span>Administradores</span>
  </p>
  <ul class="navbar-nav flex-fill w-100 mb-2">
    <li class="nav-item dropdown">
      <a href="{{ route('administradores_anadir_1') }}" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle nav-link">
        <i class="fe fe-box fe-16"></i>
        <span class="ml-3 item-text">Nuevo Administrador</span>
      </a>
      <ul class="collapse1 list-unstyled pl-4 w-100" id="ui-elements">
        <li class="nav-item">
          <a class="nav-link pl-3" href="{{ route('administradores_busqueda_1') }}"><span class="ml-1 item-text">Búsqueda de Administrador</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link pl-3"  href="{{ route('administradores_gestion_1') }}"><span class="ml-1 item-text">Gestión administradores</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link pl-3" href="{{ route('administradores_informe_1') }}"><span class="ml-1 item-text">Informe de Administradores</span></a>
          </li>
      </ul>
    </li>
    <p class="text-muted nav-heading mt-4 mb-1">
        <span>Encuestados</span>
      </p>

    <li class="nav-item dropdown">
      <a href="{{ route('encuestados_gestion_1') }}" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle nav-link">
        <i class="fe fe-credit-card fe-16"></i>
        <span class="ml-3 item-text">Gestión de Encuestados </span>
      </a>
      <ul class="collapse1 list-unstyled pl-4 w-100" id="forms">
        <li class="nav-item">
          <a class="nav-link pl-3" href="{{ route('encuestados_informe_1') }}"><span class="ml-1 item-text">Informe de Encuestados Generales</span></a>
        </li>

        <li class="nav-item">
          <a class="nav-link pl-3" href="{{ route('encuestados_informe_Esp') }}"><span class="ml-1 item-text">Informe de Encuestado Especificos</span></a>
        </li>
      </ul>
    </li>
    <p class="text-muted nav-heading mt-4 mb-1">
        <span>Descarga</span>
      </p>
    <li class="nav-item dropdown">
      <a href="#tables" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle nav-link">
        <i class="fe fe-grid fe-16"></i>
        <span class="ml-3 item-text">Descarga de documentación</span>
      </a>
      <ul class="collapse1 list-unstyled pl-4 w-100" id="tables">
        <li class="nav-item">
          <a class="nav-link pl-3" href="{{ route('descarga_evaluacion_informe_1') }}" ><span class="ml-1 item-text">Evaluaciones</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link pl-3" href="{{ route('descarga_resp_evaluacion_informe_1') }}" ><span class="ml-1 item-text">Respuestas de Evaluaciones</span></a>
          </li>


      </ul>
    </li>
    <p class="text-muted nav-heading mt-4 mb-1">
        <span>Informes</span>
      </p>

    <li class="nav-item dropdown">
        <a href="#tables" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle nav-link">
          <i class="fe fe-grid fe-16"></i>
          <span class="ml-3 item-text">Informes por categoría</span>
        </a>
    </li>


    <p class="text-muted nav-heading mt-4 mb-1">
        <span>Análisis</span>
      </p>

    <li class="nav-item dropdown">
        <a href="{{ route('analisis_infor_enc_informe_1') }}" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle nav-link">
          <i class="fe fe-grid fe-16"></i>
          <span class="ml-3 item-text">Análisis por categoría</span>
        </a>
    </li>
  </ul>


  <div class="btn-box w-100 mt-4 mb-1">
    <a href="https://themeforest.net/item/tinydash-bootstrap-html-admin-dashboard-template/27511269" target="_blank" class="btn mb-2 btn-primary btn-lg btn-block">
      <i class="fe fe-mail fe-12 mx-2"></i><span class="small">Enviar - Encuesta</span>
    </a>
  </div>
</nav>
</aside>
</div>
