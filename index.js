function IniciarJuego() {
    alert("Need for Speed Most Wanted");
    Nivel1();
}
function Nivel1() {
    var opciones = ["Lanzarse del auto", "Lanzar aceite", "Bajarse del auto y entregarse"];
    var respuesta = prompt("¿Cuál es la mejor opcion para detener a la policia?\n\n" + opciones.join("\n"));
    respuesta = respuesta.toLowerCase();
    
    if (respuesta === "lanzar aceite") {
        alert(" Has superado el nivel 1.");
        Nivel2();
    } else {
        alert("Respuesta incorrecta. Has sido arrestado.");
        ReiniciarJuego();
        
    }
}

function Nivel2() {
    var opciones = ["Quedarse en el tunel", "Entrar a la fabrica", "Entrar al subterraneo"];
    var respuesta = prompt("Un helicoptero vuela sobre ti y quiere derribarte: ¿Que haras para escapar?\n\n" + opciones.join("\n"));
    respuesta = respuesta.toLowerCase();
    
    if (respuesta === "entrar al subterraneo") {
        alert("Has superado el nivel 2.");
        Nivel3();
    } else {
        alert("Has sido arrestado.");
        ReiniciarJuego();
    }
}

function Nivel3() {
    var opciones = ["Rockport", "Rosewood", "Playa de Candem"];
    var respuesta = prompt("Desicion Rapida: ¿Que zona tiene mas trampas y lugares ocultos?\n\n" + opciones.join("\n"));
    respuesta = respuesta.toLowerCase();
    
    if (respuesta === "rosewood") {
        alert("¡Respuesta correcta! Has superado el nivel 3.");
        Nivel4();
    } else {
        alert("Inténtalo de nuevo.");
        ReiniciarJuego();
    }
}

function Nivel4() {
    var opciones = ["Explotar la gasolinera mas cercana", "Dirigirse a otro distrito", "Llamar a un colega"];
    var respuesta = prompt("Si el sargento Cross te persigue ¿Como lo derribarias?\n\n" + opciones.join("\n"));
    respuesta = respuesta.toLowerCase();
    
    if (respuesta === "explotar la gasolinera mas cercana") {
        alert("¡Respuesta correcta! Has superado el nivel 4.");
        Nivel5();
    } else {
        alert("Has sido arrestado.");
        ReiniciarJuego();
    }
}

function Nivel5() {
    var opciones = ["Entregarse", "Continuar la persecucion", "Cambiar la llanta"];
    var respuesta = prompt("Has pisado una banda de clavos, ¿Que piensas hacer?\n\n" + opciones.join("\n"));
    respuesta = respuesta.toLowerCase();
    
    if (respuesta === "entregarse") {
        alert("¡Respuesta correcta! Has superado el nivel 5.");
        Nivel6();
    } else {
        alert("Has sido arrestado.");
        ReiniciarJuego();
    }
}

function Nivel6() {
    var opciones = ["35km", "120km", "85km"];
    var respuesta = prompt("Elige la velocidad en la que se puede pasar este radar\n\n" + opciones.join("\n"));
    respuesta = respuesta.toLowerCase();
    
    if (respuesta === "120km") {
        alert("¡Respuesta correcta! Has superado el nivel 6.");
        Nivel7();
    } else {
        alert("¡No superaste el reto! .");
        ReiniciarJuego();
    }
}

function Nivel7() {
    var opciones = ["Acelerar", "Usar camara lenta", "Usar freno de mano"];
    var respuesta = prompt("¿Que debes hacer para tomar curvas cerradas?\n\n" + opciones.join("\n"));
    respuesta = respuesta.toLowerCase();
    
    if (respuesta === "usar camara lenta") {
        alert("¡Respuesta correcta! Has superado el nivel 7.");
        Nivel8();
    } else {
        alert("¡No superaste el reto! .");
        ReiniciarJuego();
    }
}

function Nivel8() {
    var opciones = ["Nitroso", "Alerones", "Llantas"];
    var respuesta = prompt("¿Que debes mejorar para mayor velocidad en carrera?\n\n" + opciones.join("\n"));
    respuesta = respuesta.toLowerCase();
    
    if (respuesta === "nitroso") {
        alert("¡Respuesta correcta! Has superado el nivel 8.");
        Nivel9();
    } else {
        alert("¡Tu coche da pena!.");
        ReiniciarJuego();
    }
}

function Nivel9() {
    var opciones = ["Refugio", "Taller", "Con Mia"];
    var respuesta = prompt("¡Ohh noo! Razor a trucado tu coche, piensa ¿Donde debo ir?\n\n" + opciones.join("\n"));
    respuesta = respuesta.toLowerCase();
    
    if (respuesta === "con mia") {
        alert("¡Respuesta correcta! Has superado el nivel 9.");
        Nivel10();
    } else {
        alert("Nadie es de confianza.");
        ReiniciarJuego();
    }
}

function Nivel10() {
    var opciones = ["Saltar el puente roto", "Dirigirte a la playa de candem", "Rendirte y denunciar a todos"];
    var respuesta = prompt("Te an tendido una trampa y as sido denunciado, ahora te persiguen toda la policia ¿Que camino debes tomar para huir?\n\n" + opciones.join("\n"));
    respuesta = respuesta.toLowerCase();
    
    if (respuesta === "saltar el puente roto") {
        alert("¡Felicidades as completado todos los retos y los maderos y la Blacklist sabra de ti!.");
    } else {
        alert("Fuiste arrestado y torturado .");
    }
}

function ReiniciarJuego() {
    if (confirm("¿Deseas reiniciar el juego?")) {
        IniciarJuego();
    }
}

IniciarJuego();