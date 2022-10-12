/*
// **************************************************** //
    TITOL: lib_Arrays.js

    DATA/VERSIO: 20220927 / 1.0.0
    AUTOR:

    DESCRIPCIO:
    Llibreria de funcions per fer cosetes amb arrays

    IN  ->
    OUT ->

    USE:

    HISTORIC VERSION:
// **************************************************** //
*/

/* Funcions auxiliars */
/* **************************************************** */

export function randomInteger(min1,max1){
    /**
     * Funcio que calcula un nº integer en el domini TANCAT [min,max]
     * @values , @example, @deprecated, @see, @link, @author, @since, @version, @ignore
    */

    //console.log("INICI FUNCIO: " + arguments.callee.name)

    // Definim variables locals
    let resultat0 =  min1 + Math.floor(Math.random() * (max1 - min1 + 1));
    //  Retornem el resultat 
    //console.log("FUNCIO: " + arguments.callee.name + " / RETORN: " + resultat0)   
    return resultat0
}

export function sortArrayWithNumbers(array1){
    /**
       * Funcio que ordena de PETIT a GRAN un array de numeros
       * @values , @example, @deprecated, @see, @link, @author, @since, @version, @ignore
    */
   
    /* OPCIO 1 amb: numArray.sort((a, b) => a - b) */
    /* OPCIO 2 amb: definim un typed array de integers, i lalvors funciona .sort() correctament */
    //console.log("INICI FUNCIO: " + arguments.callee.name)

    // Definim variaables locals
    let resultat0 = array1.sort((a, b) => a - b)
    //  Retornem el resultat 
    // console.log("FUNCIO: " + arguments.callee.name + " / RETORN: ", resultat0)   
    return resultat0
}

export function checkExists(value1, ...arrayItems1){
    /**
       * Funcio que evalua TRUE/FALSE segons un item JA estigui en un array numeric
       * @values , @example, @deprecated, @see, @link, @author, @since, @version, @ignore
    */ 

    // Definim variables locals
    let numeroitems = arrayItems1.length
    let resultat0=false
    // Repasem el array a veure si tenim el valor ....
    // NOTA: SI el array esta buit, el seu .length = 0 !!!!!!!
    // Comprovem que tingui ALGUN valor !!!!!
    if(numeroitems==0){
        // Si no te items
        console.log("El array esta BUIT")
        resultat0 = false
    } else {
        // Si te algun item ...
        // Fem servir for i no foreach pq podem sortir abans si es compleix la condicio
        for(let x=0; x<numeroitems; x++){
           if (arrayItems1[x] == value1){resultat0=true;break}else{resultat0=false}
        }
    }
    //  Retornem el resultat 
    //console.log("INICI FUNCIO: " + arguments.callee.name + " / RETORN: ", resultat0)   
    return resultat0
}

export function resumeArray(...arrayPokes){
    /* Estructura poke retornat desde api poke: */
    // {}
    /* Definim el objecte que farem servir de plantilla */
    let plantillaPoke = {pokeID:0, pokeImgURLFront:"", pokeImgURLBack:"", pokeName:"", pokeAtk:0, pokeDef:0, pokeTypes:["Aire","Terra","Aigua","Foc","5é Element"]}
    let defaultURL = "media/imatges/pokeCards/imatgeNoDisponible_cuadrada.png"
    /* Definim el array de resultats */
    let pokeArrayResumed = []
    /* Convertim les dades */
    arrayPokes.forEach(item => {
        /* Obtenim les dades directes */
        plantillaPoke.pokeID          = item.pokeid 
        /* Canviem la URL si no te URL */
        if (imgFront == ""){plantillaPoke.pokeImgURLFront = defaultURL} else {plantillaPoke.pokeImgURLFront = imgFront}  
        /* Canviem la URL si no te URL (fent ervir el operador ternari ...*/
        if (imgBack == "" ){plantillaPoke.pokeImgURLBack = defaultURL } else {plantillaPoke.pokeImgURLBack = imgBack}  
        plantillaPoke.pokeName        = item.pokeid 
        plantillaPoke.pokeAtk         = item.pokeid 
        plantillaPoke.pokeDef         = item.pokeid 
        /* Recuperem els types */ 

        /* Afegim les dades al array */
        pokeArrayResumed.push(plantillaPoke)    
    });
    /* Retornem el resultat */
    return pokeArrayResumed
}

/* Funcions exportables */
/* **************************************************** */
export function createArrayNoRepeatedValues(min1,max1,items1){
    /**
       * Funcio que crea una ARRAY de n numeros al domini TANCAT [min,max]
       * @values , @example, @deprecated, @see, @link, @author, @since, @version, @ignore
    */

    //console.log("FUNCIO: " + arguments.callee.name)

    // Definimm variables locals
    let resultat = []
    let valor0 = 0
    // Fem el array
    for (let x=0; x<items1; x++){
        // demanem un valor aleatori
        valor0 = randomInteger(min1,max1)
        // comprovem si esta al array
        let x1=0
        while (checkExists(valor0,...resultat)){
            // Mentre el resultat JA estigui al array, repetim 
            // demanem un nou valor aleatori
            valor0 = randomInteger(min1,max1)
        }
        
        // Ja tenim un valor VALID, l' afegim
        console.log(resultat)
        resultat.push(valor0)
    }
    // Retornem el resultat 
    console.log(resultat)
    return resultat
}

export function createArrayNoRepeatedValuesSorted(min1,max1,items1){
    /**
       * Funcio que crea una ARRAY de n numeros al domini TANCAT [min,max], ordenats de petit a gran
       * @values , @example, @deprecated, @see, @link, @author, @since, @version, @ignore
    */
   
    //console.log("FUNCIO: " + arguments.callee.name)

    // Definim variables locals
    let resultat0 = []
    let resultat1 = []
    // Fem el array ....
    resultat0 = createArrayNoRepeatedValues(min1,max1,items1)
    // El fem ordenar ....
    resultat1 = sortArrayWithNumbers(resultat0)
    //  Retornem el resultat 
    console.log("FUNCIO: " + arguments.callee.name + " / RETORN: " + resultat1)   
    return resultat1
}


/* Exportacio de funcions */
/* **************************************************** */
