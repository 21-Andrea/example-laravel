
@vite([

'resources/css/cssTesis/app-dark.css',
'resources/assets/dist/css/bootstrap.min.css'
]);

<div class="menu_nav">
    @yield('contenido_menu_nav_enc')
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
    <a class=" mx-auto mt-2 flex-fill text-center" href="/">
        <center><img src="../fotos/logo_Cs.png"  width="120 " height="120"></center>
    </a>
  </div>
  <ul class="navbar-nav flex-fill w-100 mb-2">
    <li class="nav-item dropdown">
      <a href="#dashboard   " data-toggle="collapse" aria-expanded="false" class="dropdown-toggle nav-link">
        <i class="fe fe-home fe-16"></i>
        <span class="ml-3 item-text">Encuesta</span><span class="sr-only">(current)</span>
      </a>
      <ul class="collapse1 list-unstyled pl-4 w-100" id="dashboard">

        <li class="nav-item">
          <a class="nav-link pl-3" href="./dashboard-analytics.html"><span class="ml-1 item-text">Objetivo</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link pl-3" href="./dashboard-analytics.html"><span class="ml-1 item-text">Plan de Estudio</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link pl-3" href="./dashboard-analytics.html"><span class="ml-1 item-text">Planificación</span></a>
        </li>


      </ul>
    </li>
  </ul>
  <p class="text-muted nav-heading mt-4 mb-1">
    <span>Componentes</span>
  </p>
  <ul class="navbar-nav flex-fill w-100 mb-2">
    <li class="nav-item dropdown">
      <a href="#ui-elements" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle nav-link">
        <i class="fe fe-box fe-16"></i>
        <span class="ml-3 item-text">Seguridad Industrial</span>
      </a>
      <ul class="collapse1 list-unstyled pl-4 w-100" id="ui-elements">
        <li class="nav-item">
          <a class="nav-link pl-3" href="./ui-color.html"><span class="ml-1 item-text">Fundamentos</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link pl-3" href="./ui-typograpy.html"><span class="ml-1 item-text">Requerimientos</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link pl-3" href="./ui-typograpy.html"><span class="ml-1 item-text">Estandares de Seguridad</span></a>
          </li>
      </ul>
    </li>
    <li class="nav-item dropdown">
      <a href="#forms" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle nav-link">
        <i class="fe fe-credit-card fe-16"></i>
        <span class="ml-3 item-text">Normativa uso de Talleres  </span>
      </a>
      <ul class="collapse1 list-unstyled pl-4 w-100" id="forms">
        <li class="nav-item">
          <a class="nav-link pl-3" href="./form_elements.html"><span class="ml-1 item-text">Normativa</span></a>
        </li>

        <li class="nav-item">
          <a class="nav-link pl-3" href="./form_upload.html"><span class="ml-1 item-text">Areas de Aplicación</span></a>
        </li>
      </ul>
    </li>

    <li class="nav-item dropdown">
      <a href="#tables" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle nav-link">
        <i class="fe fe-grid fe-16"></i>
        <span class="ml-3 item-text">Descargar Encuesta</span>
      </a>
      <ul class="collapse1 list-unstyled pl-4 w-100" id="tables">
        <li class="nav-item">
          <a class="nav-link pl-3" href="./table_basic.html"><span class="ml-1 item-text">Descargar</span></a>
        </li>

      </ul>
    </li>
  </ul>

  <p class="text-muted nav-heading mt-4 mb-1">
    <span>Documentation - Ayuda</span>
  </p>
  <ul class="navbar-nav flex-fill w-100 mb-2">
    <li class="nav-item w-100">
      <a class="nav-link" href="../docs/index.html">
        <i class="fe fe-help-circle fe-16"></i>
        <span class="ml-3 item-text">Descarga Manual - Ayuda</span>
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
