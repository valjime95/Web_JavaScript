//  Ejercicio Zombies (CASO 0)

var armas = ['pistola','escopeta']

var cargadores = {
    'pistola': [10, 10], 
    'escopeta': [2, 2, 2, 2, 2]
}

var zombies = 0;
var municiones = cargadores["pistola"].concat(cargadores['escopeta']);

// console.log(municiones);

for(let i = 0;i < municiones.length; i++){
    zombies = zombies + municiones[i];
}
// console.log(zombies)


// Caso 1: Mismas armas que municiones

armas = ['pistola', 'ametralladora', 'escopeta', 'fusil de francotirador']

cargadores = {
    'pistola': [12, 13, 4, 5, 20, 17], 
    'ametralladora': [33, 40], 
    'escopeta': [2, 2, 2, 1], 
    'fusil de francotirador': [1, 2, 4]
}

zombies = 0;
municiones = [];

// primera opcion
for(let i = 0; i < armas.length; i++){
    if(armas[i] in cargadores){
        municiones = municiones.concat(cargadores[armas[i]]);
    }
}

// opcion utilizando for of

for(const arma of armas){
    if(arma in cargadores){
        for(const bala of cargadores[arma]){
            zombies = zombies + bala;
        }
    }
}
console.log(zombies)