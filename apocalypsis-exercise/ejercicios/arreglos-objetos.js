const color =  ["red","blue","green"];
const numbers = [1,3,4,7,2,1,9,0];
var double = [];

// console.log(numbers.length);

// push y pop

numbers.push(10);
// console.log(numbers, numbers.length)

numbers.pop()
// console.log(numbers, numbers.length)

// iteramos un arreglo

for(let i = 0; i < color.length; i++){
    console.log(color[i])
}

// hacemos un arreglo con el doble de los elementos 

for(let i = 0; i < numbers.length; i++){
	double.push(numbers[i]*2)
}

// console.log(numbers, double);

// RETO 1. CALCULAR PROMEDIO de un arreglo

let sum = 0;

for(let i = 0; i < numbers.length; i++){
	sum = sum + numbers[i];
}

// console.log(sum/numbers.length);

// concatenar dos arreglos
var arr1 = [0,1,2,3,4]
var arr2 = [5,6,7,8,9]

var arregloCompleto = arr1.concat(arr2);
// console.log(arregloCompleto);


// ver si un elemento esta dentro de un arreglo

// console.log(arr1.indexOf(10)) // -1  si no se encuentra
// console.log(arr2.indexOf(7)) // 2

// OBJETOS EN JS


const objeto = {
	key1: "value1",
	key2: "value2",
	key3: "value3"
}

// Accedemos a los valores del objeto

// console.log(Object.keys(objeto));

// Accedemos a los valores del objeto por separado

// console.log(objeto.key1);

// Accedemos a los valoores con

// console.log(Object.values(objeto));

// checar si un valor está dentro de las keys de un objeto

// console.log('key1' in objeto)

// Convertir un objeto en un arreglo
let arregloObjeto = Object.entries(objeto);

console.log(arregloObjeto);
// accedemos a una lista de listas
// la primera lista
console.log(arregloObjeto[0]);

// primer elemento de la primera lista
console.log(arregloObjeto[0][0]);

// segundo elemento de la primera lista
console.log(arregloObjeto[0][1]);

var object = Object.fromEntries(arregloObjeto);
console.log(object);

