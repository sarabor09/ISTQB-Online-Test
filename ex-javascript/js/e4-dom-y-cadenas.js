let introduccion = "Hola que tal, bienvenido a Qa";
let presentacion1 = document.getElementById("presentacion");
presentacion1.innerHTML = introduccion;

let longitud = document.getElementById("longitud");
longitud.innerHTML = introduccion.length;

let posicionQa = document.getElementById("posicionQa");
posicionQa.innerHTML = introduccion.indexOf("Qa");

let primeraLetra = document.getElementById ("primeraLetra");
primeraLetra.innerHTML = introduccion.charAt(0);

let ultimaLetra = document.getElementById ("ultimaLetra");
ultimaLetra.innerHTML = introduccion.charAt(introduccion.length-1);

let fraseMayuscula = document.getElementById ("fraseMayuscula");
fraseMayuscula.innerHTML = introduccion.toUpperCase();

let miNombre = "Sara";
let saludo = "Hola " + miNombre;
presentacion1.innerHTML = saludo;

let nuevaFrase = document.getElementById ("nuevaFrase");
nuevaFrase.innerHTML = introduccion.substring(0 , introduccion.indexOf(" que tal")) + introduccion.substring(introduccion.indexOf(", bienvenido"), introduccion.length);




