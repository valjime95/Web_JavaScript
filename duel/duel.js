var gandalf = [10, 11, 13, 30, 22, 11, 10, 33, 22, 22]
var saruman = [23, 66, 12, 43, 12, 10, 44, 23, 12, 17]


// Si se quiere ver si para empate funciona
// var gandalf = [10, 11, 10]
// var saruman = [10, 10, 12]

/*definimos tres variables
gwins (las batallas ganas de gandalf)
swins (las batallas ganas de saruman)
empate(donde tengan la misma puntuacion)
*/

var gwins = 0;
var swins = 0;
var empate = 0;

// iteramos por el indice
for(let i = 0; i < gandalf.length; i++){
	if(gandalf[i] > saruman[i]){
		gwins++;
	} else if (gandalf[i] < saruman[i]){
		swins++;
	} else{
		empate++;
	}
}

if (empate < gwins && empate < swins){
	if (gwins > swins) {
		console.log(`Gano Gandalf con: ${gwins} puntos`);
	} else{
		console.log(`Gano Saruman con: ${swins} puntos`);
	}
} else{
	console.log("Empate")
}

