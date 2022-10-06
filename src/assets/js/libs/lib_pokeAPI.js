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

async function numeroMaximPokesV2(){
    /**
     * 
     */

    /* Informem a la consola que comencem ... */
    console.log("FUNCIO: " + arguments.callee.name + " / INICI")

    /* Definim algunes variables que podem necessitar */
    const urlAPI         = "https://pokeapi.co/api/v2/"
    const pokemonspecies = "pokemon-species/"
    const pokemondata    = "pokemon/"

    /* Demanem el numero maxim de Pokemons a la API */
    let pokedata = await axios.get(urlAPI + pokemonspecies + "?limit=0")  // com retorna una promesa, esperem a rebre el resultat
    let maxpokes = pokedata.count                                         // Recuperem el count total 

    /* retornem el resultat */
    console.log("FUNCIO: " + arguments.callee.name + " / RETORN: " + maxpokes)
    return maxpokes
}

async function dadesPokeByIDV2(pokeID){}

async function pokePackByArrayV2(arrayPokes){
    /**
     * 
     */

    /* Informem a la consola que comencem ... */
    console.log("FUNCIO: " + arguments.callee.name + " / INICI ")

    /* Definim algunes variables que podem necessitar */
    const urlAPI         = "https://pokeapi.co/api/v2/"
    const pokemonspecies = "pokemon-species/"
    const pokemondata    = "pokemon/"

    let peticio = ""
    let peticions = []
    let resultat0 = []
    let resultat1 = []

    /* recorrem el array ... */
    arrayPokes.forEach(element => {
        /* Generem les peticions adients */
        peticio = axios.get(urlAPI + "?pokeID=" + element.ID)
        /* Les posem en un array */
        peticions.push(peticio)
    });

    /* Resolem la peticio en paralel ... */
    resultat0 = await axios.all(peticions)

    /* retornem el resultats ... */
    resultat1 = resumedPokePackV1(resultat0)
    console.log("Dades obtingudes (raw)", resultat0)
    console.log("Dades filtrades (filtrades)", resultat1)
    console.log("FUNCIO: " + arguments.callee.name + " / FI: ")
    return resultat1
}


/* *********************************************************************************************** */
/* DEFINICIO DE FUNCIONS COMUNS */
/* *********************************************************************************************** */

async function resumedPokePackV1(arrayPokesRAW){
    /**
     * 
     * Rebem un array (raw) que ens be en aquest format:
     * 
     * Retornem un array amb les dades recolectades en el seguent format
     *  -->> {id:x ,imgFrontURL:"", imgBackURL:"", name:"", pokeAtk:x, pokeDef:x, types1:[]}
     *  -->> [{},{},{}, ...]
    */

    /* Informem a la consola que comencem ... */
    console.log("FUNCIO: " + arguments.callee.name + " / INICI ")

    /* Definim les variables locals */
    let item = {}
    let resultat0 =[]

    /* Recorrem el el array de entrada i anem construint ele elments de sortida */
    arrayPokesRAW.forEach(element => {
        /* recuperem el ID */
            item.id = element.id 
        /* recuperem imgFrontURL */
        /* recuperem imgBackURL */
        /* recuperem name */
        /* recuperem pokeAtk */
        /* recuperem pokeDef */
        /* recuperem els tipus */
        /* Afegim el item al array de resultats .... */
        resultat0.push(item)
    });

    /* Retornem el resultat i informem .... */
    console.log("Dades rebudes: ", arrayPokesRAW)
    console.log("dades procesades: ", resultat0)
    console.log("FUNCIO: " + arguments.callee.name + " / FI ")
    return resultat0
}