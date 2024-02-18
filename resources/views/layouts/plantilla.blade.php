<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

    <title>@yield('title_C')</title>
</head>
<style>
    /* Estilos para el formulario */
form {
    max-width: 0 auto;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    font-family: Arial, sans-serif;
}

/* Estilos para las etiquetas y los campos de entrada */
label {
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
    color: #333;
}

input[type="text"],
textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    margin-bottom: 10px;
}

/* Estilos para el botón */
button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #0056b3;
}

    .layout {
        width: 100%;
        height: 768px;

        display: grid;
        grid:
            "header" auto "main" 1fr "footer" auto "pie_pagina" 15% / 1fr;
        gap: 8px;
        grid-auto-flow: row dense;
        background: darkblue;
    }

    .header {
        grid-area: header;
        background: antiquewhite;
    }

    .main {
        grid-area: main;
        background: antiquewhite;
    }

    .footer {
        grid-area: footer;
        background: blue;
    }

    .pie_pagina {
        grid-area: pie_pagina;
        background: blue;
    }

    .layout2 {
        width: 100%;
        display: flex;
        gap: 16px;
        background: blueviolet;
    }

    .marginLeft {
        margin-left: auto;
    }

    .layout_3 {
        width: 100%;
        display: flex;
        flex-direction: row-reverse;
        gap: 25px;

        justify-content: space-around;
        align-items: center;
    }

    .grow1 {
        flex-grow: 1;
        background: blueviolet;
        height: 100px;
    }

    .grow2 {
        flex-grow: 1;
        background: blue;
        height: 100px;
    }

    .grow3 {
        flex-grow: 1;
        background: gold;
        height: 100px;
    }

    .marginLeft {
        margin-left: auto;
    }
</style>

<body>

    @yield('contenido_C')

    <div>
        <section class="layout">
            <div class="header">
                <section class="layout2">
                    <div>1</div>
                    <div>2</div>
                    <div class="marginLeft">3</div>
                </section>
            </div id="sd">
            <div class="main">
             @yield('contenido_main')
            </div>
            <div class="footer">3</div>
            <div class="pie_pagina">4</div>
        </section>
        <section class="layout_3" align-items=center>
            <div class="grow1">1</div>
            <div class="grow2">2</div>
            <div class="grow3 marginLeft">3</div>
        </section>
</body>

</html>
