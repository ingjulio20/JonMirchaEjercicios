/* 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, 
el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, 
pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }. */
function ascendenteYdescendente(){
   const arreglo = [7,5,7,8,6]
   const ascendente = arreglo.sort((a, b) => a - b)
   const descendente = arreglo.sort((a, b) => b - a)
   let resultado = `asc: [${ascendente}], desc: [${descendente}]`
   return resultado
}
console.log(ascendenteYdescendente())
document.querySelector('#respuesta24').innerHTML = "Resultado: "+ascendenteYdescendente()
/* 25) Programa una función que dado un arreglo de elementos, 
elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) 
devolverá ["x", 10, 2, "10", true]. */
function eliminarDuplicados(){
   const arreglo = ["x", 10, "x", 2, "10", 10, true, true]
    const unicos = []
   for (let i = 0; i < arreglo.length; i++) {
    if(!unicos.includes(arreglo[i])){
        unicos.push(arreglo[i])
    }
   }
   return unicos
}
console.log(eliminarDuplicados())
document.querySelector('#respuesta25').innerHTML = "Resultado: "+eliminarDuplicados()
/* 26) Programa una función que dado un arreglo de números obtenga el promedio, 
pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5. */
function obtenerPromedio(){
    const arreglo = [9,8,7,6,5,4,3,2,1,0]
    const sumatoria = arreglo.reduce((a, b) => a + b)
    let promedio = sumatoria / arreglo.length
    return promedio

}
console.log(obtenerPromedio())
document.querySelector('#respuesta26').innerHTML = "Resultado: "+obtenerPromedio()