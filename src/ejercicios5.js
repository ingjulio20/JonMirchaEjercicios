/* 15) Programa una función para convertir números de base binaria a decimal y viceversa, 
pe. miFuncion(100,2) devolverá 4 base 10. */
function binario(numero, base){
 let convertir
 if(base === 2){
    convertir = parseInt(numero,base) + ' base 10' /* Decimal */
 }else if(base === 10){
    convertir = numero.toString(2) + ' base 2' /* Binario */
 }
 return convertir
}
console.log(binario(167,10))
document.querySelector('#respuesta15').innerHTML = "Resultado: "+binario(167,10)
/* 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, 
pe. miFuncion(1000, 20) devolverá 800. */
function montoFinal(pago, desc){
    let descuento = Math.round(pago * (desc/100))
    let cantidad = pago - descuento
    return cantidad
}
console.log(montoFinal(1000, 20))
document.querySelector('#respuesta16').innerHTML = "Resultado: "+montoFinal(1000, 20)
/* 17) Programa una función que dada una fecha válida determine cuantos años han pasado 
hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020). */
function tiempoTranscurrido(a, m, d){
   let fechaInicio = new Date(a, m, d)
   let fechaFin = new Date()
   let anios =`${fechaFin.getFullYear() - fechaInicio.getFullYear()} años` 
   return anios
}
console.log(tiempoTranscurrido(1990,4,23))
document.querySelector('#respuesta17').innerHTML = "Resultado: "+tiempoTranscurrido(1990,4,23)