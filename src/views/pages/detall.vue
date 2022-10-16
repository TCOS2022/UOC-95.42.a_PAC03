<template>
    <h1>PAGINA DETALL</h1>

    <div><h3>HEADER</h3></div>

    <div>
        <h3>LOADER</h3>
        <img src="/media/imatges/animacions/loading_v2.gif" alt="" srcset="">
    </div>

    <div>
        <h3>CONTENTS</h3>


        <h4>DETALL</h4>
        <p>**************</p>
        <p>Dades rebude via url: $route.query.pokeID</p>
        <p>{{$route.query.pokeID}}</p>
        <p>{{dadesPerEnviar}}</p>
        <p>**************</p>
        <!-- -->
        <pokeCard0 itemView="detall" :itemData="enviarAlPokeCard()" />
        <!---->
    </div>

    <div><h3>FOOTER</h3></div>

</template>

<script>
    import {
        numeroMaximPokesV2, 
        resumedPokePackV1,
        pokePackByArrayV2,
        extractPokeNames,
        extractPokeNames2
    } from "@/assets/js/libs/lib_pokeAPI.js";

    import pokeCard0 from "@/views/parts/pokecard/pokeCardV2.1.vue";
    export default{
        name:"detall.vue",
        components:{pokeCard0},
        props:{
            pokeID:{
                type:String,
                default:""
            },
            itemData:{
                type:Array,
                default:[{}]
            }
        },
        data:function(){return {
            dadesPerEnviar:{}
        }},
        methods:{
            initializer:async function(){
                console.log("Inicialitzant .....");
                // Demanem les dades a la api ...
                console.log("Enviem peticio amb: ",this.$route.query.pokeID)
                let dadesID = []
                dadesID.push(this.$route.query.pokeID);
                let pokeData0 = await pokePackByArrayV2(dadesID);
                // Mirem que em rebut ....
                console.log("Dades del pokeID -> ",pokeData0);
                // Filtrem sols les dades qeu volem ...
                pokeData0 = await resumedPokePackV1(pokeData0);
                console.log("Dades del pokeID resumed -> ",pokeData0);
                // Convertim el array de objectes ... es un sol objecte
                let pokeDataObj = {}
                pokeDataObj = pokeData0[0]
                console.log("Dades del pokeID [obj] -> ",pokeDataObj);
                // i ho enviem a imprimir ...
                this.dadesPerEnviar = pokeDataObj;
                console.log(".....  inicialitzat")
            },
            enviarAlPokeCard: function(){
                /** Funcio per enviar les dades a imprimir com pokeCard */
                console.log("Enviem al pokeCard ... ",this.dadesPerEnviar)
                return this.dadesPerEnviar
            }
        },
        mounted:function(){
            console.log("Mounting   [detall.vue]");
            this.initializer()
            console.log("[detall.vue]  muntat!!!")
        }
    }
</script>

<style></style>