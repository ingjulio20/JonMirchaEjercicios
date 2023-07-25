/* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) 
o no, pe. miFuncion(7) devolverá true. */
function esPrimo(numero) {
    for (let i = 2; i < numero; i++) {
      let resultado = (numero % i === 0) ? false : numero !== 1
      return resultado
}
}
console.log(esPrimo(7))
document.querySelector('#respuesta12').innerHTML = "Resultado: "+esPrimo(7)
/* 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar. */
function esPar(numero) {
    let resultado = (numero % 2 === 0) ? "Par" : "Impar"
    return resultado
}
console.log(esPar(29))
document.querySelector('#respuesta13').innerHTML = "Resultado: "+esPar(29)
/* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, 
pe. miFuncion(0,"C") devolverá 32°F. */
function grados(numero,unidad) {
    let temperatura 
   if (unidad === "C") {
     temperatura =((numero*9)/5)+32 + '°F.' /* Fahrenheit */
   }else if(unidad === "F"){
     temperatura = (numero-32)*5/9 + '°C.' /* Celsius */
   }
   return temperatura
}
console.log(grados(0,"C"))
document.querySelector('#respuesta14').innerHTML = "Resultado: "+grados(0,"C")