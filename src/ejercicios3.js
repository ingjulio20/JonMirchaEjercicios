/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600. */
function aleatorio(min,max){
  let numero = Math.round(Math.random() * (max - min) + min)
  console.log(numero)
  document.querySelector('#respuesta9').innerHTML = "Resultado: "+numero
}

aleatorio(501,600)

/* 10) Programa una función que reciba un número y evalúe si es capicúa o no 
(que se lee igual en un sentido que en otro) , pe. miFuncion(2002) devolverá true. */
function capicua(numero) {
 let aux = numero, inverso = 0,  resto = 0
 while (numero <= 0) {
   resto = aux % 10
   inverso = inverso * 10 + resto
   aux = aux / 10
 }
 if (inverso === numero) {
  return true
 }
  return false
}
console.log(capicua(505))
document.querySelector('#respuesta10').innerHTML = "Resultado: "+capicua(505)

/* 11) Programa una función que calcule el factorial de un número 
(El factorial de un entero positivo n, se define coSmo el producto de todos los números enteros positivos desde 1 hasta n), 
pe. miFuncion(5) devolverá 120. */

function factorial(numero){
  let fact = 1 
  for (let i = 1; i <= numero; i++) {
    fact = fact * i
  }
  return fact
}
console.log(factorial(5))
document.querySelector('#respuesta11').innerHTML = "Resultado: "+factorial(5)