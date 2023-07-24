/* 5) Programa una función que invierta las palabras de una cadena de texto, 
pe. miFuncion("Hola Mundo") devolverá "odnuM aloH". */

function invertir(cadena){
    console.log(cadena.split("").reverse().join(""))
    document.querySelector('#resultado5').innerHTML = "Resultado: "+cadena.split("").reverse().join("")
  }
  
  invertir("Hola Mundo")
/* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, 
pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2. */

function conteo(cadena,palabra){
 let contador = 0
 let posicion = cadena.indexOf(palabra)
  while (posicion !== -1) {
  contador++
  posicion = cadena.indexOf(palabra, posicion + 1)
  }
  return contador
}
console.log(conteo("Hola mundo, Adios mundo","mundo"))
document.querySelector('#resultado6').innerHTML = "Resultado: "+conteo("Hola mundo, Adios mundo","mundo")
/* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo 
(que se lee igual en un sentido que en otro),  pe. mifuncion("Salas") devolverá true. */

function palindromo(cadena) {
  let re = /[^A-Za-z0-9]/g
  cadena = cadena.toLowerCase().replace(re, '')
  let len = cadena.length
  for (let i = 0; i < len/2; i++) {
    if(cadena[i] !== cadena [len - 1 - i]){
      return false
    }
    return true
  }
 }

 console.log(palindromo("oro"))
 document.querySelector('#resultado7').innerHTML = "Resultado: "+palindromo("oro")
/* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, 
pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */

function eliminar(cadena,palabra){
  let str = cadena.replace(new RegExp(palabra, 'g'), '')
  console.log(str)
  document.querySelector('#resultado8').innerHTML = "Resultado: "+str
}
eliminar("xyz1, xyz2, xyz3, xyz4 y xyz5","xyz")