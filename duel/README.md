# Suelo de hechiceros

## Introducción

![](./images/content_lightning_bolt_big.jpg){style="display: block; margin: 0 auto"}

Estás presenciando una batalla épica entre dos poderosos hechiceros: **Gandalf** y **Saruman**. Cada hechicero tiene en mente 10 hechizos de poder variable y los va a lanzar uno tras otro. El ganador del duelo será el que gane más de esos enfrentamientos entre hechizos. Los hechizos se representan como una lista de 10 números enteros cuyo valor es igual al poder del hechizo.

```javascript
var gandalf = [10, 11, 13, 30, 22, 11, 10, 33, 22, 22]
var saruman = [23, 66, 12, 43, 12, 10, 44, 23, 12, 17]

```

Por ejemplo:

El primer choque lo gana Saruman: 10 contra 23, gana 23.

El segundo choque lo gana Saruman: 11 contra 66, gana 66
etc.


Crearás dos variables, una para cada hechicero, donde se almacenará la suma de los enfrentamientos ganados. Dependiendo de qué variable sea mayor al final del duelo, mostrará uno de los siguientes tres resultados en la pantalla:


```shell
Gandalf gana
Saruman gana
Empate
```
