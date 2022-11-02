<template>
    <h1>PAGINA LLISTAT</h1>

    <div>
        <h3>HEADER</h3>
        <header01 />
    </div>

    <div>
        <h3>LOADER</h3>
        <img src="media/imatges/animacions/loading_v2.gif" alt="" srcset="">
    </div>

    <div>
        <h3>CONTENTS</h3>
        <div class="filtratge">
            <h4>FILTRE 1.2</h4>
            <!-- "@"" son els emits i els ":" son els props  :dadesArray="['A','B','C']" -->
            <filter01 @fromFilter = "alRebre1()" :toFilter="perEnviar1()" />
            <br><br>
            <p>
                Resultats sense filtrar:<br>
                {{ alFiltre }}
            </p>
            <p>
                Resultats filtrats:<br>
                {{ delFiltre }}
            </p>           
        </div>
        <br><br>
        <div class="llistat10">
            <h4>LLISTAT</h4>
            <br><br>
            <ul>
                <li v-for="item in alFiltre"> pintant item: {{ item }}</li>
            </ul>
        </div>
    </div>

    <div>
        <h3>FOOTER</h3>
    </div>

</template>

<script>
/* Mode API */
// Definim imports **********************************************************************
    // Components
    import axios      from "axios"
    import header01   from "@/views/parts/HEADER/mainHeaderV2.vue"
    import filter01   from "@/views/parts/MAIN/FILTRES/FILTRE_JORDI/mainFiltreV1.2_optionAPI.vue"
    import pokecard01 from "@/views/parts/POKECARD/pokeCardV2.vue"

    // Funcions
    import {
        numeroMaximPokesV2, 
        resumedPokePackV1,
        pokePackByArrayV2,
        extractPokeNames,
    } from "@/assets/js/libs/lib_pokeAPI"

    import {
        createArrayNoRepeatedValues
    } from "@/assets/js/libs/lib_Arrays.js"

// Definim exports **********************************************************************
export default {
    name: "llistatV1.1.vue",
    components: {header01, filter01, pokecard01},
    props:{},
    data: function(){return{
        // intercanvis amb la llista de impresio de pokes
        // Intercanvis amb el Filter ....
        //alFiltre:["alias0", "Sherezade0", "Cedric0", "Humor0", "She-Hulk0", "Atlante0", "Humbertus0", "alita0", "Chenoa0", "Shakira0", "Chewaaka0", "Hum0"],
        alFiltre:"",
        delFiltre:[],
        alLlistat:"AlLlistat!!!",
        items:[1,2,3,4,5,6,7,8,9,0]
    }},
    methods:{
        // Funcions per rebre/enviar del filtre
        alRebre1: function(d){return this.delFiltre = d},
        perEnviar1: function(){ 
            console.log("Enviant al filtre: ",this.alFiltre)
            return this.alFiltre
        },

        // Altres funcions
        printValues: function(){
            console.log("Imprimint valors de les variables")
            console.log("alFiltre:  " ,this.alFiltre)
            console.log("delFiltre: " ,this.delFiltre)
            console.log("alLlistat: " ,this.alLlistat)
        },
        initializer: async function(){
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

            console.log ("INICI FUNCIO initializer de la pagina Llistat")
            /* 0 - LOADER ON / CONTENTS OFF */
            /* 1 - Obtenim el nombre de pokes */
            let maxNumPokes      = await numeroMaximPokesV2()
            console.log("   maxNumPokes: ", maxNumPokes)
            /* 2 - crearem el array de valors */
            let arrayPokesID     = await createArrayNoRepeatedValues(1,maxNumPokes,10)
            console.log("   arrayPokesID: ", arrayPokesID)
            /* 3 - Recuperem les dades de la pokeAPI ja netes i polides */
            let arrayPokesFull   = await pokePackByArrayV2(arrayPokesID)
            console.log("   arrayPokesFull: ", arrayPokesFull)
            /* 4 - generem arrays des de el original */
            let arrayPokesNames  = await extractPokeNames(arrayPokesFull)
            console.log("   arrayPokesNames: ", arrayPokesNames)
            let arrayPokesPacked = await resumedPokePackV1(arrayPokesFull)
            console.log("   arrayPokesPacked: ", arrayPokesPacked)
            /* 5 - Actualitzem props de FILTER i PINTARLLISTA */
            let arrayFiltreIN = arrayPokesNames
            this.alFiltre     = await arrayPokesNames
            console.log("   alFiltre: ", arrayFiltreIN)
            await this.printValues()
            /* 6 - LOADER OFF / CONTENTS ON */   
            console.log ("FI FUNCIO initializer de la pagina Llistat")
        }
    },
    watch:{
        // Posem la varaible que volem 'vigilar'i la funcio que fara el qeu volguem que pasi quant canvii el valor
        alFiltre: {
            deep:true,
            handler:function(oldValue,newValue){
                console.log("alFiltre val: ", oldValue)
                console.log("El valor de ALFILTRE ha canviat!")
                console.log(oldValue,newValue)
                console.log("alFiltre val: ", newValue)
                console.log("Al filtre this -> ",this.alFiltre)
            }
        }
    },
    // **** HOOKS !!!! ****
    created(){
        console.log("LLISTAT [CREANT ...]")
        console.log("LLISTAT [... CREAT]");
    },
    beforeMount(){
        console.log("LLISTAT [BeforeMount ...]")
        this.initializer()      
        console.log("LLISTAT [... BeforeMount]")
    },
    mounted(){
        console.log("LLISTAT [MOUNTING ...]")
     
        console.log("LLISTAT [... MOUNTED]")
    },
    updated(){
        console.log("LLISTAT [UPDATEJAT]")
    }
}

</script>

<style scoped>
ul {display:flex;flex-wrap: wrap;}
li {width: 20%;}
</style>