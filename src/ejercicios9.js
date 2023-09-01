/* 27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios. (listo)
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números. (listo)
  - Valida que el título no rebase los 100 caracteres. (listo)
  - Valida que el director no rebase los 50 caracteres. (listo)
  - Valida que el año de estreno sea un número entero de 4 dígitos. (listo)
  - Valida que el país o paises sea introducidos en forma de arreglo.(listo)
  - Valida que los géneros sean introducidos en forma de arreglo. (listo)
  - Valida que los géneros introducidos esten dentro de los géneros (listo)
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*. (listo)
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición. (listo)
  - Crea un método que devuelva toda la ficha técnica de la película. (listo)
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película. (listo)

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,
 Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, 
 Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western */
 class Pelicula{

    /* Constructor de la clase */
    constructor({idpelicula,titulo,director,anio,paises,generos,calificacion}){
        this.idpelicula = idpelicula
        this.titulo = titulo
        this.director = director
        this.anio = anio
        this.paises = paises
        this.generos = generos
        this.calificacion = parseFloat(calificacion)

        /* Llamado de metodos dentro de constructor */
        this.validarIdPelicula(idpelicula)
        this.validarTitulo(titulo)
        this.validarDirector(director)
        this.validarAnio(anio)
        this.validarPaises(paises)
        this.validarGeneros(generos)
        this.validarCalificacion(calificacion)
    }

   /* Metodo Estatico */
    static get listaGeneros(){
      return ["Action","Adult","Adventure","Animation","Biography","Comedy","Crime","Documentary","Drama", 
      "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", 
      "Reality-TV","Romance","Sci-Fi","Short","Sport","Talk-Show","Thriller","War","Wester"]
      
    }

   static mostrarGeneros(){
      return console.info(`Generos Aceptados: ${Pelicula.listaGeneros.join(",")}`)
   }


    /* Metodos normales o genericos */
    validarCadena(property, value){
      if(!value) return console.warn(`${property} "${value}" esta vacio`)

      if(typeof value !== "string") return console.error(`${property} "${value}" NO es un String(Cadena de Texto)`)

      return true
    }

    validarNumero(property, value){
      if(!value) return console.warn(`${property} "${value}" esta vacio`)
        
      if(typeof value !== "number") return console.error(`${property} "${value}" NO es un Numero(Numero entero)`)
        
      return true
    }

    validarArreglo(property, value){
      if(!value) return console.warn(`${property} "${value}" esta vacio`)

      if(!(value instanceof Array)) return console.error(`${property} "${value}" NO es un Array(Arreglo [])`)

      if(value.length === 0) return console.error(`${property} "${value}" no tiene datos`)

      for (let cadena of value) {
        if(typeof cadena !== "string") return console.error(`El valor "${cadena}" dentro del arreglo NO es un String(Cadena de Texto)`)
      }

      return true
    }

    validarIdPelicula(idpelicula){
      if (this.validarCadena("IMDB id", idpelicula)){
        if (!(/^([a-z]){2}([0-9]){7}$/.test(idpelicula))) 
          return console.error(`IMDB id "${idpelicula}" NO es valido, Debe tener 9 caracteres (2 letras y 7 numeros)`)
      }
    }

    validarTitulo(titulo){
      if(this.validarCadena("Titulo", titulo))
        if(titulo.length  > 100)
          return console.error(`Titulo "${titulo}" NO es valido, Debe tener maximo 100 caracteres`)
    }

    validarDirector(director){
      if(this.validarCadena("Director", director))
        if(director.length  > 50)
          return console.error(`Director "${director}" NO es valido, Debe tener maximo 50 caracteres`)
    }

    validarAnio(anio){
      if(this.validarNumero("Año", anio))
         if(!(/^([0-9]){4}$/.test(anio)))
          return console.error(`Año "${anio}" NO es valido, Debe tener un numero de 4 cifras(1900)`) 
    }

    validarPaises(paises){
      this.validarArreglo("Paises", paises)
    }

    validarGeneros(generos){
     if(this.validarArreglo("Generos", generos))
      for (let genero of generos) {
        if(!Pelicula.listaGeneros.includes(genero)){
          console.error(`Genero(s) Incorrectos "${generos.join(",")}"`)
          Pelicula.mostrarGeneros()
        } 
      }
    }

    validarCalificacion(calificacion){
      if(this.validarNumero("Calificación", calificacion))
        return (calificacion < 0 || calificacion > 10) ?
        console.error(`Calificación "${calificacion}" No es valida, Debe ser entre 0 y 10`)
        : this.calificacion.toFixed(1)
    }

    fichaTecnica(){
      console.info(`Ficha Tecnica:\nIDMB id: ${this.idpelicula}\nTitulo: ${this.titulo}\nDirector: ${this.director}\nAño de Estreno: ${this.anio}\nPaises: ${this.paises.join("-")}\nGeneros: ${this.generos.join(", ")}\nCalificación: ${this.calificacion}`)
    }
 }

 /* Instancia de Clase */
/*  Pelicula.mostrarGeneros()
 const peli = new Pelicula("tt0099785","Home Alone")
 peli.setDirector = "Chris Columbus"
 peli.setAnio = 1990
 peli.setPaises = ["España","USA"]
 peli.setGeneros = ["Comedy","Family"]
 peli.setCalificacion = 7.7 */

const peli1 = new Pelicula({
  idpelicula: "tt1539876",
  titulo: "Oppenheimer",
  director: "Christopher Nolan",
  anio: 2023,
  paises: ["USA","United Kingdom"],
  generos: ["Biography","Drama","History"],
  calificacion: 8})

 const peli2 = new Pelicula({
  idpelicula: "tt0099785",
  titulo: "Home Alone",
  director: "Chris Columbus",
  anio: 1990,
  paises: ["España","USA"],
  generos: ["Comedy","Family"],
  calificacion: 7.7})

 const peli3 = new Pelicula({
  idpelicula: "tt0104431",
  titulo: "Home Alone 2:Lost in New York",
  director: "Chris Columbus",
  anio: 1992,
  paises: ["España","USA"],
  generos: ["Comedy","Adventure","Crime"],
  calificacion: 6.8})
 

/* Arreglo */
const arregloPeliculas = [peli1,peli2,peli3]
document.querySelector('#respuesta27').innerHTML = `Resultado: ${arregloPeliculas.forEach(el => new Pelicula(el).fichaTecnica())}`