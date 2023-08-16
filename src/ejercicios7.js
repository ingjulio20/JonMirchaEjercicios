/* 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, 
pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25]. */
function alCuadrado(){
  const arr = [1,4,5]
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.pow(arr[i],2)
    }
    return arr
}
console.log(alCuadrado())
document.querySelector('#respuesta21').innerHTML = "Resultado: "+alCuadrado()
/* 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, 
pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60]. */
function numerosAltosyBajos(arreglo){
  let minimo = arreglo[0];
  let maximo = arreglo[0];
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > maximo) {
        maximo = arreglo[i];
    } else if (arreglo[i] < minimo) {
        minimo = arreglo[i];
    }
  }
  return [maximo, minimo];

}
console.log(numerosAltosyBajos([1, 4, 5, 99, -60]))
document.querySelector('#respuesta22').innerHTML = "Resultado: "+numerosAltosyBajos([1, 4, 5, 99, -60])
/* 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena 
los números pares y en el segundo los impares.
pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}. */
function paresEimpares(){
    const arreglo = [1,2,3,4,5,6,7,8,9,0]
    const pares = [], impares = []
   for (let i = 0; i < arreglo.length; i++) {
    arreglo[i] % 2 === 0 ? pares.push(arreglo[i]) : impares.push(arreglo[i])
   }
   return console.log(`pares: [${pares}], impares: [${impares}]`)
}
paresEimpares()
