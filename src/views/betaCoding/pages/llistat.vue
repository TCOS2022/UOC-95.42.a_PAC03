<template>
    <h1>PAGINA LLISTAT</h1>

    <div>
        <h3>HEADER</h3>
        <header0 />
    </div>

    <div>
        <h3>LOADER</h3>
        <img src="media/imatges/animacions/loading_v2.gif" alt="" srcset="">
    </div>

    <div>
        <h3>CONTENTS</h3>
        <div class="filtratge">
            <h4>FILTRE</h4>
            <!-- "@"" son els emits i els ":" son els props  :dadesArray="['A','B','C']" -->
            <filtre @fromFilter="alRebre()" :toFilter="dadesReactives.arrayFiltreIN" />   
            <br><br>
            <p>
                Resultats sense filtrar:<br>
                <!--{{ arrayPokesRAW }}-->
            </p>
            <p>
                Resultats filtrats:<br>
                <!--{{ arrayPokesNames }}-->
            </p>           
        </div>
        <br><br>
        <div class="llistat10">
            <h4>LLISTAT</h4>
            <br><br>
            <!--
            <ul>
                <li v-for="item in items">
                    <pokeCard0 />
                </li>
            </ul>
            -->
        </div>
    </div>

    <div>
        <h3>FOOTER</h3>
    </div>

</template>

<script setup>
/* Mode compositionAPI - setup */
    import { 
        //defineEmits,  // Permet definir els emits
        //defineProps,  // Permet dfinir els props
        ref,            // Fa que valors primitius siguin REATIUS
        reactive,       // Fa que arrays i objectes siguin REACTIUS
        onMounted,      // Fa que tinguem disponible el hook "mounted"
        onUpdated       // Fa que tinguem disponible el hook "updated"
    } from "vue";

    import axios from "axios"

    import {
        numeroMaximPokesV2, 
        resumedPokePackV1,
        pokePackByArrayV2,
        extractPokeNames,
    } from "@/assets/js/libs/lib_pokeAPI"

    import {
        createArrayNoRepeatedValues
    } from "@/assets/js/libs/lib_Arrays.js"
    
    import filtre       from "@/views/parts/main/filtres/filtre_jordi/mainFiltreV1.2_optionAPI.vue"
    import header0      from "@/views/parts/HEADER/mainHeaderV2.vue"
    import pokeCard0    from "@/views/parts/POKECARD/pokeCardV2.vue"

    let items = [0,1,2,3,4,5,6,7,8,9]
    const dadesReactives=reactive(
        {
        arrayFiltreIN:[],
        arrayFiltreOUT:[]
        }
    )

    function alRebre(e){
        console.log("Rebent dades del input del filtre: ", e)
    }

    onMounted(()=>{
        console.log("Inicialitzant PAGINA LLISTAT ....")
        initializer()
        console.log(" .... PAGINA LLISTAT Inicialitzada!!")
    })

    async function initializer(){
        /**
         * 
         * Que farem:
         *      0) LOADER ON!!!
         *      1) Demanar a la pokeAPI el maxim nombre de pokes disponibles
         *      2) Crear un array de n valors no repetits entre 1 i el maxim anterior
         *      3) demanar a la pokeAPI els valors dels n ids obtinguts
         *      4) generar el array reduit i el array dels noms
         *      5) enviar a filtre i a pintarllistat
         *      6) LOADER OFF !!!!
         */

        /* 0 - LOADER ON / CONTENTS OFF */
        /* 1 - Obtenim el nombre de pokes */
        let maxNumPokes      = await numeroMaximPokesV2()
        //console.log("El numero maxim de pokes es: ", maxNumPokes)
        /* 2 - crearem el array de valors */
        let arrayPokesID     = await createArrayNoRepeatedValues(1,maxNumPokes,10)
        //console.log("El array de ids es: ", arrayPokesID)
        /* 3 - Recuperem les dades de la pokeAPI ja netes i polides */
        let arrayPokesFull   = await pokePackByArrayV2(arrayPokesID)
        //console.log("Les dades RAW dels 10 pokes: ", arrayPokesFull)
        /* 4 - generem arrays des de el original */
        let arrayPokesNames  = extractPokeNames(arrayPokesFull)
        console.log("El array de noms: ", arrayPokesNames)
        let arrayPokesPacked = await resumedPokePackV1(arrayPokesFull)
        console.log("les dades PACKED dels 10 pokes: ", arrayPokesPacked)
        /* 5 - Actualitzem props de FILTER i PINTARLLISTA */
        dadesReactives.arrayFiltreIN = arrayPokesNames
        console.log("dadesFiltre: ", dadesReactives.arrayFiltreIN)
        /* 6 - LOADER OFF / CONTENTS ON */
    }
</script>

<style scoped>
ul {display:flex;flex-wrap: wrap;}
li {width: 20%;}
</style>