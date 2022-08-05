const arreglo = ["blue", "red","pink","green", "black"];

// console.log(arreglo);
// console.log(arreglo.length);

// acceder al primer elemento de mi arreglo

// console.log(arreglo[0]);
// console.log(arreglo[1]);
// console.log(arreglo[2]);
// console.log(arreglo[3]);

// acceder al ultimo usando el método length
// console.log(arreglo[arreglo.length-1]);

var n1 = [1,2,3,4,5];

// console.log(n1);
// console.log(n1.length);

// agregar un elemento al final

n1.push(6);
// console.log(n1);
// console.log(n1.length);

// eliminar al final
n1.pop();
// console.log(n1);
// console.log(n1.length);

// agregar al unicio
n1.unshift(0);
// console.log(n1);
// console.log(n1.length);

// eliminar al inicio
n1.shift();
// console.log(n1);
// console.log(n1.length);

// iteramos un arreglo
for(let i=0; i < arreglo.length; i++ ){
	// console.log(arreglo[i]);
}

for(let i=0; i < n1.length; i++ ){
	// console.log(n1[i]);
}

var nuevoArray = [];
// console.log(nuevoArray);
// console.log(nuevoArray.length);

for (let i = 0;i <= 10; i++){
	nuevoArray.push(i);
}
// console.log(nuevoArray);

var n2doble = [];
var n2 = [10, 405, 24];

// console.log(n2[0]);

n2doble[0] = n2[0]*2;
n2doble[1] = n2[1]*2;
n2doble[2] = n2[2]*2;

// console.log(n2doble);

// console.log(n2doble);

var n2doble = [];
for(let i = 0; i<n2.length;i++){
	n2doble.push(n2[i]*2);
}

// console.log(n2doble);

// promedio: la suma de todos los elementos del arreglo entre el numero de elementos

var a = [10, 405, 24];
var nElemento = a.length;
var sumaElementos = 0;
let promedio;

console.log(nElemento);

// sumar los elementos de una lista
for(let i = 0; i < nElemento; i++){
	sumaElementos = sumaElementos + a[i];
}
console.log(sumaElementos)

promedio = sumaElementos / nElemento;

console.log(promedio);

// sumaElementos = a[0]+a[1]+a[2];

// i = 0

// sumaElementos = sumaElementos + a[0];
// sumaElementos = 10;
// i = 1

// sumaElementos = sumaElementos + a[1];

// sumaElementos = 415;

// i = 2

// sumaElementos = sumaElementos + a[2];

// sumaElementos = 439;
