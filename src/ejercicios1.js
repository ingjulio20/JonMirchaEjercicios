/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, 
pe. miFuncion("Hola Mundo") devolverá 10.*/

function contarCaracteres(cadena){
    console.log(cadena.length)
    document.querySelector('#resultado1').innerHTML = "Resultado: "+cadena.length
}

contarCaracteres("Hola Mundo")

/* 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, 
pe. miFuncion("Hola Mundo", 4) devolverá "Hola". */

function devolverTexto(cadena, tamaño){
    console.log(cadena.slice(" ", tamaño))
    document.querySelector('#resultado2').innerHTML = "Resultado: " +cadena.slice(" ", tamaño)
}

devolverTexto("Hola Mundo", 4)

/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, 
pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']. */

function textoEnArreglo(cadena, tamaño){
    console.log(cadena.split(" ", tamaño))
    document.querySelector('#resultado3').innerHTML = "Resultado: [" +cadena.split(" ", tamaño)+ "]"
}

textoEnArreglo("hola que tal", 3)

/* Programa una función que repita un texto X veces, 
pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */

function textoRepetido(cadena, contador){
    console.log(" "+cadena.repeat(contador))
    document.querySelector('#resultado4').innerHTML = "Resultado: "+cadena.repeat(contador)
}

textoRepetido("Hola mundo ", 5)