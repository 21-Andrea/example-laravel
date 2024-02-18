 {{-- <!DOCTYPE html>
<html lang="{{str_replace('_','-',app()->getLocale() )}}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Instituto TCS</title>
    <meta name="csrf-tken" content={{ csrf_token}}>
    <link rel= "stylesheet" href="css/app.css">
    {{-- @viteReactRefresh
    @vite("resources/js/app.js")


</head>
<body>
    <div id= "root" ></div>
</body>
 <script src="{{ mix('js/app.js') }}"></script>
</html> --}}



<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content=" Josué Tello">
    <meta name="generator" content="Hugo 0.84.0">
    <title>Bienvenidos - Instituto Superior Tecnológico José Ortega y Gasset - "ISTOG" </title>
    <link rel="shortcut icon" type="image/png" href="https://www.equirentas.com.mx/favicon.png">


    <link rel="canonical" href="https://getbootstrap.com/docs/5.0/examples/carousel/">

    <!-- Bootstrap core CSS -->
    @vite(['resources/assets/dist/css/bootstrap.min.css',
    'resources/css/carousel.css',
    'resources/cover/carousel.rtl.css',
    'resources/js/js_views/bootstrap.bundle.min.js',
    'resources/js/js_views/bootstrap.bundle.min.js.map'


    ])


    <style>
    .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
    }

    @media (min-width: 768px) {
        .bd-placeholder-img-lg {
            font-size: 3.5rem;
        }
    }
    </style>


</head>

<body>

    <header>
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="">Instituto Superior Universitario Carlos Cisneros - "ISUCC" </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav me-auto mb-2 mb-md-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#"></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"></a>
                        </li>
                    </ul>
                        @auth
                        Bienvenido {{Auth::user()->username}}
                        <li><a> </a></li>
                        <a href="{{ route('cursos.ingreso') }}"><button class="btn btn-lg btn-primary" >Sistema</button></a>
                        <li><a> </a></li>

                        <form action="/logout" method="POST">
                            @csrf
                            <a href="{{ route('login') }}"><button class="btn btn-lg btn-primary" >Cerrar Sesión</button></a>
                        </form>
                        @else
                        <a href="{{ route('login') }}"><button class="btn btn-lg btn-primary" >Ingreso</button></a>
                        <li><a> </a></li>
                        @endauth
                </div>
            </div>
        </nav>
    </header>

    <main>

        <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <svg class="bd-placeholder-img" width="100%" height="100%" aria-hidden="true"
                        preserveAspectRatio="xMidYMid slice" focusable="false">

                        <rect width="100%" height="100%"><img src="https://scontent.fltx1-1.fna.fbcdn.net/v/t39.30808-6/360141844_791543502758384_1668147821987445242_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=783fdb&_nc_eui2=AeHoUdMWwfWtk0-QYT8BkAuKl1_dJLCRae6XX90ksJFp7rUoU8ujWfv6GIa2MNcHVP328ywecUbSsYX_mmIGV8Ap&_nc_ohc=mCmaF6bwzFQAX847wSq&_nc_ht=scontent.fltx1-1.fna&oh=00_AfAhafOLcEurnS3_LPuIATpI2j83F-mH1QLY8bRALM3OQw&oe=65D4FB8F" alt="Un hermoso paisaje"></rect>
                    </svg>

                    <div class="container">
                        <div class="carousel-caption text-end" width="1%" height="50%">
                          <!--  <img  width="15%" height="50%" src="https://scontent.fltx1-1.fna.fbcdn.net/v/t39.30808-6/360141844_791543502758384_1668147821987445242_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=783fdb&_nc_eui2=AeHoUdMWwfWtk0-QYT8BkAuKl1_dJLCRae6XX90ksJFp7rUoU8ujWfv6GIa2MNcHVP328ywecUbSsYX_mmIGV8Ap&_nc_ohc=mCmaF6bwzFQAX847wSq&_nc_ht=scontent.fltx1-1.fna&oh=00_AfAhafOLcEurnS3_LPuIATpI2j83F-mH1QLY8bRALM3OQw&oe=65D4FB8F"  width="200 " height="200"> -->
                        </div>
                    </div>
                </div>


                <!--         /////////////////////   -->
                <div class="carousel-item">
                    <svg class="bd-placeholder-img" width="100%" height="100%" src="fotos/koala-630117__340.jpg"
                        aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <rect width="100%" height="100%"><img src="fotos/renta_maquinaria_ligera_01.jpg" /></rect>
                    </svg>

                    <div class="container">
                        <div class="carousel-caption text-end">
                            <img src="fotos/logo.png" / width="200 " height="200">
                        </div>
                    </div>
                </div>

                <div class="carousel-item">
                    <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <rect width="100%" height="100%"><img src="fotos/imagen1-png.png" /></rect>
                    </svg>

                    <div class="container">
                        <div class="carousel-caption text-end">
                            <img src="fotos/logo.png" / width="200 " height="200">
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Anterior</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Siguiente</span>
            </button>
        </div>


        <!-- Marketing messaging and featurettes
  ================================================== -->
        <!-- Wrap the rest of the page in another container to center all the content. -->

        <div class="container marketing">

            <!-- Three columns of text below the carousel -->
            <div class="row">
                <div class="col-lg-4">

                    <svg class="bd-placeholder-img rounded-circle" width="140" height="140" src="fotos/2501230_0.jpg"
                        xmlns="https://istog.edu.ec/wpnew/wp-content/uploads/2023/03/WhatsApp-Image-2022-02-24-at-21.30.19-1024x944-1.jpeg" role="img" aria-label="Placeholder: 140x140"
                        preserveAspectRatio="xMidYMid slice" focusable="false">
                        <img src="https://istog.edu.ec/wpnew/wp-content/uploads/2023/03/WhatsApp-Image-2022-02-24-at-21.30.19-1024x944-1.jpeg" / width="140 " height="140">
                        <rect width="100%" height="100%" fill="#777" />
                    </svg>

                </div><!-- /.col-lg-4 -->
                <div class="col-lg-4">
                    <svg class="bd-placeholder-img rounded-circle" width="140" height="140"
                        xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140"
                        preserveAspectRatio="xMidYMid slice" focusable="false">
                        <title>Placeholder</title>
                        <img src="fotos/weg-vector-logo.png" / width="140 " height="140">
                        <rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777"
                            dy=".3em"></text>
                    </svg>

                </div><!-- /.col-lg-4 -->
                <div class="col-lg-4">
                    <svg class="bd-placeholder-img rounded-circle" width="140" height="140"
                        xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140"
                        preserveAspectRatio="xMidYMid slice" focusable="false">
                        <title>Placeholder</title>
                        <img src="fotos/777e.png" / width="140 " height="140">
                        <rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777"
                            dy=".3em"></text>
                    </svg>

                </div><!-- /.col-lg-4 -->
                <br><br>
             <!--  <center>  <br><br><a href="{{ route('encuestado.encuesta') }}"><button class="btn btn-lg btn-primary" >....</button></a>
                <li><a> </a></li></center>-->
                <br><br>
                <center>  <br><br><a href="{{ route('encuestado.loginEncuestado') }}"><button class="btn btn-lg btn-primary" >INGRESO A LA ENCUESTA</button></a>
                 <li><a> </a></li></center>


                <h2 class="featurette-heading">Pertinencia de la Carrerra de <span class="text-muted">
                    Mecánica Industrial</span></h2>

            </div><!-- /.row -->


            <!-- START THE FEATURETTES -->

            <hr class="featurette-divider">

            <div class="row featurette">
                <div class="col-md-7">
                    <h2 class="featurette-heading">Mecánica Industrial   <span class="text-muted"></span></h2>
                    <p class="lead">Determinar, diseñar, fabricar y comprobar elementos mecánicos a partir de
                        los diferentes tipos de materiales, mediante procesos de manufactura destinados a cubrir
                        una necesidad operativa de diversa índole, utilizando adecuadamente los recursos humanos,
                         físicos, tecnológicos y de información, con claro compromiso y responsabilidad social y ambiental,
                         contribuyendo a la calidad de los procesos productivos y la competitividad de las empresas.</p>
                </div>
                <div class="col-md-5">
                    <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="100"
                        height="100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500"
                        preserveAspectRatio="xMidYMid slice" focusable="false">
                        <img src="fotos/Caroteadora de Diamante DM 280 4.jpeg" / width="200 " height="200">
                        <rect width="80%" height="80%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">
                    </svg>
                </div>
            </div>

            <hr class="featurette-divider">

            <div class="row featurette">
                <div class="col-md-7 order-md-2">
                    <h2 class="featurette-heading">Formación Académica <span class="text-muted"></span></h2>
                    <p class="lead">Al concluir su formación, el Tecnólogo en Mecánica Industrial es competente para
                         desempeñar labores de asistencia técnica en gerencia de planta, jefe de manufactura y de
                         mantenimiento, puede realizar dibujos mecánicos de producción y levantamiento de planos,
                         utilizando software especializado de dibujo técnico, puede supervisar labores de control de
                         calidad de productos manufacturados y de servicios, así como realizar actividades operativas
                         de manufactura, mantenimiento y automatización de sistemas técnicos-mecánicos.</p>
                </div>
                <div class="col-md-5 order-md-1">
                    <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="100"
                        height="100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500"
                        preserveAspectRatio="xMidYMid slice" focusable="false">
                        <img src="fotos/constructores-2.jpg" / width="200 " height="200">
                        <rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa"
                            dy=".3em"></text>
                    </svg>

                </div>
            </div>

            <hr class="featurette-divider">

            <!-- /END THE FEATURETTES -->

        </div><!-- /.container -->


        <!-- FOOTER -->
        <footer class="container">
            <p class="float-end"> Todos los derechos reservados</p>
            <p>&copy; 2023 Company, Inc. &middot;
            </p>
        </footer>
    </main>





</body>

</html>
