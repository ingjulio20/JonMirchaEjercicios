/* 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, 
pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5. */
function vocales(cadena){
    let vocales = 0
    let consonantes = 0
    cadena = cadena.toLowerCase()
    for (let i = 0; i < cadena.length; i++) {
      if (cadena[i] === "a" || cadena[i] === "e" || cadena[i] === "i" || cadena[i] === "o" || cadena[i] === "u") {
        vocales++
      } else if (cadena.charCodeAt(i) >= 97 && cadena.charCodeAt(i) <= 122) {
        consonantes++
      }
    }
    return `Vocales: ${vocales}, Consonantes: ${consonantes}`
}
console.log(vocales("Hola mundo"))
document.querySelector('#respuesta18').innerHTML = "Resultado: "+vocales("Hola Mundo")
/* 19) Programa una función que valide que un texto sea un nombre válido, 
pe. miFuncion("Jonathan MirCha") devolverá verdadero. */
function validarNombre(cadena){
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/
    return regex.test(cadena)
}
console.log(validarNombre("Julio Orozco"))
document.querySelector('#respuesta19').innerHTML = "Resultado: "+validarNombre("Julio Orozco")
/* 20) Programa una función que valide que un texto sea un email válido, 
pe. miFuncion("jonmircha@gmail.com") devolverá verdadero. */
function validarCorreo(correo){
    const regex = /\S+@\S+\.\S+/
    return regex.test(correo)
}
console.log(validarCorreo("jonmircha@gmail.com"))
document.querySelector('#respuesta20').innerHTML = "Resultado: "+validarCorreo("jonmircha@gmail.com")