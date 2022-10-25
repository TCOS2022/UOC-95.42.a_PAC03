/*
// **************************************************** //
    TITOL:

    DATA/VERSIO: 20220927 / 1.0.0
    AUTOR:

    DESCRIPCIO:

    Llibreria que fa les peticions a la pokeAPI ... amb FETCH
    Llibreria que fa les peticions a la pokeAPI ... amb AXIOS

    IN  ->
    OUT ->

    USE:

    HISTORIC VERSION:

    NOTES:
    Una codi util per saber a quina funcio estem:  
        console.log("FUNCIO: " + arguments.callee.name + " / INICI")
        console.log("FUNCIO: " + arguments.callee.name + " / RETORN: " + resultat0)   

    /**
       * Descripcio generable al JSDoc
       * @values , @example, @deprecated, @see, @link, @author, @since, @version, @ignore
    */
// **************************************************** //


import axios from "axios"


/* *********************************************************************************************** */
/* DEFINICIO DE LES FUNCIONS AMB FETCH */
/* *********************************************************************************************** */


async function numeroMaximPokesV1(){
    /* Definim algunes variables que podem necessitar */
    const urlAPI         = "https://pokeapi.co/api/v2/"
    const pokemonspecies = "pokemon-species/"
    const pokemondata    = "pokemon/"

    /* Demanem el numero maxim de Pokemons a la API */
    let pokedata = await fetch(urlAPI + pokemonspecies + "?limit=0")  // com retorna una promesa, esperem a rebre el resultat
        pokedata = await pokedata.json()                              // Convertim el resultat a json tambe en forma de promesa
    let maxpokes = pokedata.count                                     // Recuperem el count total 

    /* retornem el resultat */
    console.log(`El nombre de pokemons disponibles es: ${maxpokes}`)
    return maxpokes
}

async function dadesPokeByIDV1(pokeID){}

async function pokePackByArrayV1(arrayID){
    /* Definim algunes variables que podem necessitar */
    const urlAPI         = "https://pokeapi.co/api/v2/"
    const pokemondata    = "pokemon/"

    /* Preparem i recuperem les dades de les peticions asincrones amb les id aleatories creades */
    let array_pokemons = []
    let array_peticions = []
    let peticio = ""
    for(let x=0; x<10; x++){
        // Recuperem les dades de cada pokemon a traves de la seva ID
        peticio = fetch(urlAPI + pokemondata + arrayID[x]).then((res)=>res.json())
        // i l afegim al array ....
        array_peticions.push(peticio)
    }

    // Fem totes les peticions de cop i en paralel
    console.log("Preparant peticio de promeses ....")
    console.log(array_peticions)
    array_pokemons = await Promise.all(array_peticions)
    console.log("Promesa conjunta retornada!")

    // Mostrem el array de Pokemons a la consola
    console.log("Dades dels pokemons obtinguts:", array_pokemons)

    // Retornem el resultat !!!!!
    return array_pokemons
}


/* *********************************************************************************************** */
/* DEFINICIO DE LES FUNCIONS AMB AXIOS */
/* *********************************************************************************************** */

export async function numeroMaximPokesV2(){
    /**
     * 
     */

    /* Informem a la consola que comencem ... */
    //console.log("FUNCIO: " + arguments.callee.name + " / INICI")

    /* Definim algunes variables que podem necessitar */
    const urlAPI         = "https://pokeapi.co/api/v2/"
    const pokemonspecies = "pokemon-species/"
    const pokemondata    = "pokemon/"
    
    /* Demanem el numero maxim de Pokemons a la API */
    let pokedata = await axios.get(urlAPI + pokemonspecies + "?limit=0")  // com retorna una promesa, esperem a rebre el resultat
    console.log("retorn max num pokes", pokedata)
    let maxpokes = pokedata.data.count                                         // Recuperem el count total 

    /* retornem el resultat */
    //console.log("FUNCIO: " + arguments.callee.name + " / RETORN: " + maxpokes)
    return maxpokes
}

export async function dadesPokeByIDV2(pokeID){
    /** Obtenim les dades de un pokeitem a partir de la seva id */
        /**
     * 
     */

    /* Informem a la consola que comencem ... */
    //console.log("FUNCIO: " + arguments.callee.name + " / INICI ")

    /* Definim algunes variables que podem necessitar */
    const urlAPI         = "https://pokeapi.co/api/v2/"
    const pokemonspecies = "pokemon-species/"
    const pokemondata    = "pokemon/"
    let peticio = await axios.get(urlAPI + "pokemon/" + pokeID).then(response => response.data)
    console.log("Recuperant dades de la pokeID [" + pokeID + "] ... ", peticio)
    return peticio
}

export async function pokePackByArrayV2(arrayPokes){
    /**
     * 
     */

    /* Informem a la consola que comencem ... */
    //console.log("FUNCIO: " + arguments.callee.name + " / INICI ")

    /* Definim algunes variables que podem necessitar */
    const urlAPI         = "https://pokeapi.co/api/v2/"
    const pokemonspecies = "pokemon-species/"
    const pokemondata    = "pokemon/"

    let peticio = ""
    let peticions = []
    let resultat0 = []
    let resultat1 = []

    // recorrem el array ... 
    arrayPokes.forEach((item,index)  => {
        // Generem les peticions adients, i recuperem ja lsols la aprt de data
        peticio = axios.get(urlAPI + "pokemon/" + arrayPokes[index]).then(response => response.data)
        // Les posem en un array 
        peticions.push(peticio)
    });

    /* Resolem la peticio en paralel ... */
    resultat0 = await axios.all(peticions)
    /* retornem el resultats ... */
    //console.log("Dades obtingudes (raw)", resultat0)
    //resultat1 = resumedPokePackV1(resultat0)

    //console.log("Dades filtrades (filtrades)", resultat1)
    return resultat0
}


/* *********************************************************************************************** */
/* DEFINICIO DE FUNCIONS COMUNS */
/* *********************************************************************************************** */

export function extractPokeNames(arrayPokes){
    /**
     * rebem un array amb les dades ja arreglades
     * generem un array sols amb els noms
     */

    let resultat0=[]
    let nomPoke=""

    // recorrem el array i extreiem els noms pasant-los a un altre array
    for (let z=0; z<arrayPokes.length; z++){
        nomPoke = arrayPokes[z].name
        resultat0.push(nomPoke)
    }

    // retornem el array ordenat, o no
    return resultat0.sort()
}
export async function extractPokeNames2(arrayPokes){
    /**
     * rebem un array amb les dades ja arreglades
     * generem un array sols amb els noms
     */

    let resultat0=[]
    let tempPoke={}
    let posPoke =0
    let nomPoke=""

    // recorrem el array i extreiem els noms pasant-los a un altre array
    for (let z=0; z<arrayPokes.length; z++){
        nomPoke = arrayPokes[z].name
        posPoke = z
        tempPoke["id"] = posPoke
        tempPoke['name'] = nomPoke
        resultat0.push(tempPoke)
        tempPoke={}
    }
    // retornem el objecte ordenat, o no
    console.log("Object amb els noms del pokes: ", resultat0)
    return resultat0
}
export async function resumedPokePackV1(arrayPokesRAW1){
    /**
     * 
     * Rebem un array (raw) que ens be en aquest format:
     * 
     * Retornem un array amb les dades recolectades en el seguent format
     *  -->> {id:x ,imgFrontURL:"", imgBackURL:"", name:"", pokeAtk:x, pokeDef:x, types1:[]}
     *  -->> [{},{},{}, ...]
    */

    /* Definim les variables locals */
    let item1 = {}
    let resultat10 = []
    let arrayTipus = []
    let ntypes = []

    // Recorrem el objecte de entrada i anem construint ele elements de sortida
    for(let x1=0; x1<arrayPokesRAW1.length; x1++){
        item1={}
        item1.id             = arrayPokesRAW1[x1].id
        item1.imgFrontURL    = arrayPokesRAW1[x1].sprites.front_default
        item1.imgBackURL     = arrayPokesRAW1[x1].sprites.back_default
        item1.name           = arrayPokesRAW1[x1].name 
        item1.pokeAtk        = arrayPokesRAW1[x1].stats[1].base_stat
        item1.pokeDef        = arrayPokesRAW1[x1].stats[2].base_stat
        ntypes               = arrayPokesRAW1[x1].types.length
        // NOTA: types es un array, els noms el podem obtenir amb: .types[x].type.name
        // Extreurem els noms i els posem en un array
        arrayTipus = []
        for(let y=0; y<ntypes; y++){
            arrayTipus.push(arrayPokesRAW1[x1].types[y].type.name)
        }
        item1.types1 = arrayTipus
        // I finalment fiquem totes els dades en un array de objectes
        //console.log("item -> ", item1)
        resultat10.push(item1)
    }

    /* Retornem el resultat i informem .... */
    console.log("resumedPokePacked -> Dades rebudes: ", arrayPokesRAW1)
    console.log("resumedPokePacked -> dades procesades: ", resultat10)
    return resultat10
}
export function extractPokeDataFromID(pokeid,arrayPokes){
    /** funcio qeu recupera les dades del poke amb id:pokeid */
    console.log("Extreient dataPoke from pokeArray");
    console.log("ID buscat: ", pokeid)
    console.log("Array de dades: ", arrayPokes )
    arrayPokes.forEach(item =>{
        if(item.id == pokeid){
            // JA tenim el poke buscat, retornem les dades i acabem la funcio
            return item
        }
    });
}
