---
title: "Sabado de reverseString()"
excerpt: "Aprende 3 implementaciones de este algorítmo, y así le 
demostradas a tu entrevistador que sabes como voltear un string"
coverImage: "/assets/blog/algorithms/reversed.png"
date: "2020-06-27T06:35:07.322Z"
author:
  name: Juan Millord
  picture: "/assets/blog/authors/millord.jpg"
ogImage:
  url: "/assets/blog/big/big.webp"
---

## Sabado de reverseString()

Aprende 3 implementaciones de este algorítmo, y así le
demostradas a tu entrevistador que sabes como voltear un string.
Es uno de los algoritmos más sencillos pero que te va a ayudar a conocer más de los string en JavaScript.

# 1. Solución No. 1, usando **reverse()** <br/>

```
 function reverseWord(str){
   const reversed = str.split('').reverse().join('')
   return reversed
 }
```

Esta es un solución muy directa y facil de implementar. Uno se ayuda
con el método **[reverse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)** el cual ya viene integrado en JavaScript.

# 2. Solución No. 2, usando **for of**

```
function reverseWord(str){
   let reversed =  ''

   for(let character of str){
     reversed = character + reversed;
   }
   return reversed

 }
```

En esta solución se procede añadiendo cada caracter al inicio
del array. Es un procedimiento directo y sencillo. El único problema
es que se usa si quieres itarar sobre todo el array. Si quieres hacerlo
por un número especifico de elementos deberias usar un for loop normal
(e.g) **for(let i = O; i < str.length; i++ ) **

# 3. Solución No. 3, usando **reduce()**

```
function reverse(str){
 return str.split('').reduce((reversed, characher)=> {
   return characher + reversed
 }, '')
}
```

Para desarrollar esta implementación hay que tomar el string y convertirlo
en un array usando el método split(). El método **[reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/R),** es usado para tomar todos los valores en un array converirlos en un solo valor.

Este método toma dos argumentos:

a. El primero es una función flecha.

b. El segundo va a hacer un valor inicial, el cual en este caso va a hacer un string vacio.

c. Entonces cada vez que corra **[reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/R),** va a tomar el valor inicial y lo va a pasar a la función flecha como el primer argumento de lo que sea returnado de la función interna. En su totalidad **[reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/R),** corre una vez por cada elemento dentro del array.

## Conclusiones

Este es un algoritmo sencillo como pudiste apreciar pero que te abre el camino a otros más complejos. Estate atento a más de estos para que rompas en tu entrevista.
