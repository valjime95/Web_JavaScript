const usuario = {
	name:"Valeria",
	apellidoP:"jimeno",
	apellidoM:"Villegas",
	edad: 56
};
// console.log(usuario.edad);

usuario.edad = 27;

// console.log(usuario);


// STRINGS ---> Cadenas de texto

var stringTexto = "valeria jimeno villegas";
var sola = "                 ";
var comillasSimples= 'valeria Jimeno';
var conflcto = "I'm valeria";
var conflcto2 = 'I\'m valeria';

// Printear una cadena de texto

// console.log(conflcto2);

var nombre = "valeria";
var apellido = "jimeno"

// console.log("Hola me llamo: "+ nombre + " " + apellido);
// console.log(`Hola me llamo: ${nombre} ${apellido}`);

// var nombreSaludo = "Hola me llamo: " + nombre

// console.log(nombreSaludo);

// var numString = "12345";
// console.log(numString);

// NUMBER ---> numeros
var a = 10;
var b = 20;
var c = 32.50;
var d = 2.53e-2;

// console.log(`La suma de a + b es: ${a+b}`);


// console.log(-7/0);

// console.log("hola"/2);

var t = true;
var f = false;

var n = null;
// console.log(n);

// OPERADOR typeof

// var conversion = '12345';
// console.log(conversion);
// console.log(typeof(conversion));

// var conversion = 12345;
// console.log(conversion);
// console.log(typeof(conversion));

// console.log(`tipo de dato de la variable t ${typeof(t)}`);

// CONVERSION DE DATOS
var conversion = 12345;

// console.log(typeof(conversion))

conversion = String(conversion);

// console.log(typeof(conversion))

var bool = true;
// console.log(typeof(bool));

bool = String(bool);
// console.log(typeof(bool));

var n = "hola";
// console.log(typeof(n));

// convertir un string a numero

n = Number(n);
// console.log(n);

// console.log(+'123');
// console.log(typeof(+'123'));

t = Number(t) // t era true
f = Number(f) // f era false

// console.log(t);
// console.log(typeof(t));

// console.log(f);
// console.log(typeof(f));


// conversion booleana 
var uno = 1;
var cero = 0;

// console.log(typeof(Boolean(uno)));
// console.log(Boolean(uno));

// console.log(typeof(Boolean(cero)));
// console.log(`El tipo de dato de la variable uno despues de la conversión a booleano es:${typeof(Boolean(cero))} y su valor es:${Boolean(cero)}.`);

// definimos tres variables nuevas
// var a = 5;
// var b = 10;
// var c = 15;

// console.log(a);
// console.log(c);
// // console.log(a+b);
// console.log(b-a);
// console.log(a*c);
// console.log(c/a);
// console.log(`El residuo de dividir 10/5 es:${b%a}`);

// a++ 
// a++
// c-- // A "c" se le disminuye uno 

// console.log(a);
// console.log(c);


// AND

// console.log(false && true);
// console.log(true && false);
// console.log(false && false);
// console.log(true && true); // verdad 


// console.log((2 < 1) && (3 > 2)); // verdad

// OR


// console.log(false || true);
// console.log(true || false);
// console.log(false|| false);
// console.log(true || true);


// NOT 

// console.log(!true);
// console.log(!false);

// NULL

// console.log(5 ?? 3);

// CONDICIONAL IF
// var n = 0;

// if (5 <= 10) {

// 	n = 10
// 	console.log(n)

// } else{
// 	n = -80
// 	console.log(n)
// }


const time = 0;
let greeting;

if (time < 1 || time > 24 ){
	greeting = "No existe esa hora";
} else if (time < 12) {
  greeting = "Good morning";
} else if (time < 20){
  greeting = "Good afternoon";
} else if (time <= 24) {
  greeting = "Good evening";
}

// console.log(greeting) // Good afternoon


// switch

const day = 5;
let text;

switch(day){
	case 0:
		text = "Domingo";
		break;
	case 1:
		text = "Lunes";
		break;
	case 2:
		text = "martes";
		break;
	case 3:
		text = "miercoles";
		break;
	case 4:
		text = "jueves";
		break;
	case 5:
		text = "viernes";
		break;
	case 6:
		text = "sabado";
		break;
	default:
		text = "Escribe un número entre 0 y 6"
}


// console.log(text);


// condicion ternaria


const velocidad = 500;

// PRIMERA FORMA DE HACERLO
var mensaje1 = velocidad > 100 ? "Vas muy rapido" : "Good job"

// SEGUNDA FORMA DE HACERLO
if (velocidad > 100){
	mensaje2 = "Vas muy rapido";
} else{
	mensaje2 = "Good job"
}


var forma = "primera"

// if (forma = "primera"){
// 	console.log(mensaje1);
// } else if (forma = "segunda"){
// 	console.log(mensaje2);
// }



// for (ciclo)

// Numeros pares / divisibles entre 5 y 10



for(let i = 0; i <= 20; i++){
	if (i%10 == 0)  console.log(i)
}




