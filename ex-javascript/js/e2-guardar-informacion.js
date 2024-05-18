//1. DECLARAR UNA VARIABLE
//Nombre de variable recomendado en minuscula
let variable;
//Nombre de variable si tiene espacio, usar camelCase, que es la primera palabra minuscula y la siguiente mayuscula sin espacios
let miVariable;
//Podeis usar guiones para separar los espacios pero es mas recomendable camelCase.
let mi_variable;
//Los nombres de las variables no pueden comenzar por un numero 2Nombre
//Los nombres de las variables pueden tener un numero siempre y cuando no empiece por el
let variable2;

//2.INICIAR UNA VARIABLE
//Primero declarar la variable y luego iniciarla.
document.write("EJEMPLO 1: INICIAR UNA VARIABLE CIUDAD </br>");

let ciudad;
ciudad = "Madrid";
document.write("La variable ciudad tiene el valor: " + ciudad);

//Declarar la variable e iniciarla a la vez
document.write("</br> EJEMPLO 2: INICIAR UNA VARIABLE EDAD </br>");
let edad = 33;
//cambiamos el valor de la variable edad
edad = 34;
document.write("La variable edad tiene el valor: " + edad);


//TIPOS DE VARIABLES
//NUMERO ENTERO O CON DECIMALES. LOS DECIMALES VAN CON PUNTO. Y SIEMPRE SIN COMILLAS LOS NUMEROS.
document.write("</br> EJEMPLO 3: CREAR UNA VARIABLE DE TIPO NUMERO </br>");
let numero = 5;
let numeroDecimales = 5.5;
document.write("El numero sin decimales es:" + numero);
document.write("</br>");
document.write("El numero con decimales es "+ numeroDecimales);
//CADENAS. Pueden usarse comillas simples o dobles. No las mezcles, usa solo una de ellas. Cuidado con caracteres especiales, no pueden ir comillas del mismo tipo dentro del texto.
document.write("</br> EJEMPLO 4: CREAR UNA VARIABLE DE TIPO TEXTO - STRING </br>");
let saludo = "Hola que tal?";
let despedida = 'Adios me voy';
let numeroEnTexto = "33";
document.write("La variable de texto saludo es: "+ saludo);
document.write("</br>");
document.write(despedida);
document.write("</br>");
document.write(numeroEnTexto);
//BOOLEANOS. true o false. En minuscula y sin comillas.
document.write("</br> EJEMPLO 5: CREAR UNA VARIABLE DE TIPO BOOLEANO </br>");
let estaSoleado = true;
let esDeDia = false;
document.write("La variable booleana esta soleado es: " + estaSoleado);
document.write("</br>");
document.write("La variable booleana es de dia es:" + esDeDia);

//EJERCICIOS PARA PRACTICAR
document.write("</br> EJERCICIOS PARA PRACTICAR </br>");

//EJERCICIO 1:

let name = "Sara";
let surname = "Borras Bartual";
let age = 34;
let height = 1.57;
let city = "Valencia";
let likeBeach = true;
let likeMountain = false;
let likeChocolate = true;
let havePet = true;

document.write("</br>Nombre: " + name);
document.write("</br>Apellidos: " + surname);
document.write("</br>Edad: " + age);
document.write("</br>Ciudad: " + height);
document.write("</br>Te gusta la playa? " + (likeBeach ? "Sí" : "No"));
document.write("</br>Te gusta la montaña? " + likeMountain);
document.write("</br>Te gusta el chocolate? " + likeChocolate);
document.write("</br>Tienes mascota? " + havePet);

name = "Kike";
document.write("</br>Nombre actualizado: " + name);

surname = "Albert Caballero"
document.write("</br>Apellido actualizado: " + surname);

//EJERCICIO 7:
const numMonthYear = 12;
document.write("</br>Numero de meses del año: " + numMonthYear);

//OPERACIONES:

let precioManzana = 2.5;
let precioPera = 1.5;
let precioPlatano = 1.8;
let kilosManzanas = 3;
let kilosPeras = 2;
let kilosPlatanos= 4;
let precioManzanayPera = precioManzana + precioPera;
let precioPlatanoyPera = precioPlatano + precioPera;
let precio2KilosPeras = precioPera * kilosPeras;
let precio3kilosPlatanos = precioPlatano * kilosPlatanos;
let precio2kManzanasy3kPeras = (precioManzana * kilosManzanas) + (precioPera * kilosPeras);
let precio5kPlatanosy2kPerasy3kManzanas = (precioPlatano * kilosPlatanos) + (precioPera * kilosPeras) + (precioManzana * kilosManzanas);


//Crea variables para guardar las notas de un alumno: 7.5, 10.5, 8, 9.5, 7 y muestra su nota media.

let nota1 = 7.5;
let nota2 = 10.5;
let nota3 = 8;
let nota4 = 9.5;
let nota5 = 7;
let mediaNotas = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;



let lado = 5;
let area = lado * lado;

let largo = 8;
let ancho = 6;
let areaRectangulo = ancho * largo;

//base x altura partido por 2
//Determina el área de un triángulo con base de 10 metros y altura de 8 metros.

let base = 10;
let altura = 8;
let areaTriangulo = (base * altura) / 2;

