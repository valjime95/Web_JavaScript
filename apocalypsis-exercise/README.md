# Apocalypsis

![](./images/thewalkingdead.jpeg){style="display: block; margin: 0 auto" }

Cargas un arsenal de armas y una mochila con cargadores de munición de tamaño variable para algunos tipos de armas.

 **¿Cuántos zombies puedes matar antes de tener que echar a correr por tu vida?**

 Deberás imprimir el resultado de cada caso que corresponde al número de balas que tienes de las armas que cargas.

**ALGORITMO:** Por cada arma diferente que cargas, tienes que comprobar si portas cargadores para ella. Si esto es afirmativo deberás sumar el total de balas que podrás disparar.

```javascript

// Caso 0: Ejemplo simple
var armas = ['pistola','escopeta']

var cargadores = {
    'pistola': [10, 10], 
    'escopeta': [2, 2, 2, 2, 2]
}

// Output esperado -> 30

armas = ['pistola', 'ametralladora', 'escopeta', 'fusil de francotirador']

cargadores = {
    'pistola': [12, 13, 4, 5, 20, 17], 
    'ametralladora': [33, 40], 
    'escopeta': [2, 2, 2, 1], 
    'fusil de francotirador': [1, 2, 4]
}

// Output esperado -> 158

```
