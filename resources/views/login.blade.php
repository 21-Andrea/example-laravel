<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>EL PERNO</title>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script>
    window.jQuery || document.write('<script src="../js/jquery-1.11.2.min.js"><\/script>')
    </script>
    @vite(['resources/css/normalize.css','resources/css/sweetalert2.css','resources/css/material.min.css','resources/css/material-design-iconic-font.min.css','resources/css/jquery.mCustomScrollbar.css','resources/css/main.css'
    ])
    @vite(['resources/js/js_views/material.min.js',
    'resources/js/js_views/sweetalert2.min.js',
    'resources/js/js_views/jquery.mCustomScrollbar.concat.min.js',
    'resources/js/js_views/main.js',
    'resources/js/js_views/jquery-1.11.2.min.js'
    ])

<body class="cover">
    <div class="container-login">
        <p>
        <article>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
            <button type="button" class="btn btn-default btn-lg" data-bs-toggle="dropdown"
                style="background-color:transparent; border:none;">
                <a href="/"><span class="glyphicon glyphicon-home" aria-hidden="true"></span> Regresar </a>
            </button>
        </article>

        </p>
        <p class="text-center" style="font-size: 150px;">
            <i class="zmdi zmdi-account-circle"></i>
        </p>
        <p class="text-center text-condensedLight" font size="1">Inicio de sesión</p>

        <form method="POST">
            @csrf
            @error('username') {{$message}} @enderror
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input name="username" class="mdl-textfield__input" required autofocus type="text"
                    value="{{old('username')}}" id="userName">
                <label class="mdl-textfield__label" for="userName" font-size=100px>Nombre de usuario</label>
            </div>
            @error('password') {{$message}} @enderror
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input name="password" class="mdl-textfield__input" required type="password" id="pass">
                <label class="mdl-textfield__label" for="pass">Contraseña</label>
            </div>
            <a href="home.html">
                <button type="submit" id="SingIn" class="mdl-button mdl-js-button mdl-js-ripple-effect"
                    style="color: #3F51B5; float:right; ">Iniciar sesión

                </button>
            </a>


        </form>

    </div>
</body>

</html>
