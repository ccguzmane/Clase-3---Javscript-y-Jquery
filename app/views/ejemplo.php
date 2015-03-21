<html>
    <head>
        <title>Mi pagina web</title>
        <script src="../public/assets/js/holaMundo.js"></script>
        <script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
        <script src="../public/lbs/alertify/lib/alertify.min.js"></script>
        <link rel="stylesheet" type="text/css" href="./lbs/alertify/themes/alertify.bootstrap.css"/> 
        <link rel="stylesheet" type="text/css" href="./lbs/alertify/themes/alertify.default.css"/>
        <link rel="stylesheet" type="text/css" href="./lbs/alertify/themes/alertify.core.css"/>
        <script type="text/javascript" src="/js/jquery.complexify.js"></script>
    </head>
    <body>
        <button onclick="ms.saludar()">Hola</button>
        <button onclick="ms.cambiarColor('green')">Verde</button>
        <button onclick="ms.cambiarColor('red')">Rojo</button>
        <button onclick="ms.cambiarColorParrafo('parrafo','blue')">Cambiar color de parrafo</button>
        <button onclick="ms.ocultarParrafo()">Borrar un parrafo</button>
        <button onclick="ms.alertifyLog()">Alertify</button>
        <button onclick="ms.alertify()">Desvanecer</button>
        <p id="parrafo">Esto es un parafo</p>
        <div>Esto es un div</div>
        <p>Parrafo 2</p>
        <p>Parrafo 3</p>
        <p>Parrafo 4</p>
    </body>
</html>



