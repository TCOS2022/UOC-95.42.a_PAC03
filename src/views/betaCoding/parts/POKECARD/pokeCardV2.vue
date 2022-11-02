<!--
// **************************************************** //
    TITOL: pokeCardV2

    DATA/VERSIO: 20220925 / 2.0.0
    AUTOR:

    DESCRIPCIO:
    Component que dibuixa una pokeCard, be a partir de sols el id o be amb un array amb les dades
    Tambe espera un 'viewType' per determinar quina vista volem que generi
    SI no reb res, pintara una vista 'detall' del pokeID=0

    IN  -> <pokeCardV2 :itemView="llistat" :itemData='{id:"",nom:"", ....}' />
    OUT ->

    USE:

    HISTORIC VERSION:
    2.0.0 Codi basic adaptat a html-vue amb un minim de JS

// **************************************************** //
-->

<template>
    <div class="pokeContainer">
        <article class="pokeCard" id="pokeID">

            <section class="poke_tapa">
                <div class="combat">
                    <img src='media/imatges/pokeCards/pokemonCard_backside2.png' alt=''>
                </div>
            </section>

            <section class="poke_contingut">
                <div class="llistat detall combat">
                    <div class="pokeImg">
                        <div class="pID">
                            <span class="pokeId0">ID:</span>
                            <span class="pokeId1">[ {{ itemData.poke_id }} ] </span>
                        </div>
                        <div class="pImg">
                            <span>URL1: {{this.itemData.poke_imgURL1}}</span><br>
                            <img :src='recoverURLImage(1)' alt='Imatge frontal'>
                            <img :src='recoverURLImage(2)' alt='Imatge posterior'>
                        </div>
                        <div class="pName">
                            <span class="pokeName0">NOM:</span>
                            <span class="pokeName1"> [ {{ itemData.poke_nom }} ] </span>
                        </div>
                    </div>

                    <div class="pokeData">
                        <div class="pAtk">
                            <span class="pokeAtk0">Atac:</span><br>
                            <span class="pokeAtk1"> [ {{ itemData.poke_atk }} ] </span>
                        </div>
                        <div class="pDef">
                            <span class="pokeDef0">Defensa:</span><br>
                            <span class="pokeDef1"> [ {{ itemData.poke_def }} ] </span>
                        </div>
                    </div>
                </div>

                <div class="combat">
                    <div class="pokeData">
                        <div class="ptypes">
                            <span v-for = "(type1) in itemData.poke_types"  class="pokeType1" > [ {{ type1 }} ] </span>
                        </div>
                    </div>
                </div>

                <div class="llistat">
                    <div class="pokeControls">
                        <!-- asignem el event aqui amteix i no cal fer-ho via addEvents al initializaer -->
                        <button v-on:click="btnDetall">MES DADES !!</button>
                    </div>
                </div>

                <div class="detall">
                    <div class="pokeControls">
                        <button>RETORNAR</button>
                    </div>
                </div>
            </section>
        </article>  
    </div>
</template>

<script>
/* Importacions de components */
/* Exportacions a template i outbounds */
export default {
    /* Nom asignat */
    name: "pokeCardV2",
    /* Dades rebudes */
    props: {
        itemView: {
            type: String,
            default: "llistat"
        },
        itemData:{
            type:Object,
            default: {
                poke_id: 0,
                /*
                poke_imgURL1: "media/imatges/pokeCards/imatgeNoDisponible_cuadrada.png",
                poke_imgURL2: "media/imatges/pokeCards/imatgeNoDisponible_rodona.png",                /*
                */
                poke_imgURL1: "",
                poke_imgURL2: "media/imatges/pokeCards/imatgeNoDisponible_rodona.png",
                poke_nom: "POKE-DEMON-MASTER",
                poke_atk: 999,
                poke_def: 999,
                poke_types: ["Terra", "Aire", "Aigua", "Foc", "5º Element"]
            }
        }
    },
    data:function(){
        return {
            src:""
        }
    },
    /* Metodes */
    methods:{
        // Metodes generals
        recoverURLImage:function(z){
            if(z==1){return this.itemData.poke_imgURL1}
            if(z==2){return this.itemData.poke_imgURL2}
        },
        initializer:function(){
        /* Funcio que:
            1 - comproba els arguments rebuts
            2 - determina si ha de fer consulta a la api externa o no
            3 - comproba si tenim imatges i asigna una per defecte si cal
            4 - Asigna les dades al array de pokeData
            5 - pinta la pokeCard segons la vista seleccionada

            itemView: "" / "llistat" / "detall" / "combat"
            itemData: {
                poke_id: 0,
                poke_imgURL1: "media/imatges/pokeCards/imatgeNoDisponible_cuadrada.png",
                poke_imgURL2: "media/imatges/pokeCards/imatgeNoDisponible_rodona.png",
                poke_nom: "POKE DEMON MASTER",
                poke_atk: 999,
                poke_def: 999,
                poke_types: ["Terra", ...]
            }   
        */
        console.log("[INITIALIZING] pokeCard component")
        // 3 - Validem les imatges ...
        console.log("URL1->",this.itemData.poke_imgURL1)
        this.itemData.poke_imgURL1 = this.validarImatges(this.itemData.poke_imgURL1)
        this.itemData.poke_imgURL2 = this.validarImatges(this.itemData.poke_imgURL2)
        console.log("URL1-->",this.itemData.poke_imgURL1)

        // 5 - pintem els blocs determinats per la vista
        //activarVistaCard(this.itemView)
        console.log("[INITIALIZED] pokeCard component")
        },
        validarImatges:function(urlIMG){
            if(urlIMG == ""){
                // SI no tenim cap imatge, li posem la que tenim per defecte
                urlIMG = "media/imatges/pokeCards/imatgeNoDisponible_cuadrada.png"
            }else{
                // Si ja tenim imatge, no fem res
            }
            return urlIMG
        },
        activarVistaCard:function(){
            /** Funcio qeu asigna que s ha de veure i que no segons la vista seleccionada
             *  Podem rebre: "llistat", "detall", "combat"
             *  Definim visibilitats per tapa/contingut
             *  Definim visibilitats tals que si tenim la clase "vistActiva" i una de les 3 altres estara "visible", 
            */ 
            
            /* Definim tots esl divs amb indicador de clase "vistaActiva" */
            marcadors = document.querySelectorAll(".vistaActiva")
            tipusVista = this.itemView
            switch(tipusVista)
                {
                case "llistat": /* Vista LLISTAT */
                                marcadors.forEach((element,index) => {
                                    // Mirem cada element si te la clase "llistat" i la ctivem o apaguem
                                    if(element.classlist.contains("llistat")){
                                        /* Si tenim la clase activada, mostrem el elemnt */
                                        element.style.display = flex
                                    }else{
                                        /* Si no es de la calse buscada, apaguem el element */
                                        element.style.display = none
                                    }
                                });
                                break;
                case "detall":  /* Vista DETALL */
                                marcadors.forEach((element,index) => {
                                    // Mirem cada element si te la clase "llistat" i la ctivem o apaguem
                                    if(element.classlist.contains("detall")){
                                        /* Si tenim la clase activada, mostrem el elemnt */
                                        element.style.display = flex
                                    }else{
                                        /* Si no es de la calse buscada, apaguem el element */
                                        element.style.display = none
                                    }
                                });
                                break;
                case "combat":  /* Vista COMBAT */
                                marcadors.forEach((element,index) => {
                                    // Mirem cada element si te la clase "llistat" i la ctivem o apaguem
                                    if(element.classlist.contains("combat")){
                                        /* Si tenim la clase activada, mostrem el elemnt */
                                        element.style.display = flex
                                    }else{
                                        /* Si no es de la calse buscada, apaguem el element */
                                        element.style.display = none
                                    }
                                });
                                break;  
                default:        /* Sense vista */
                                break;             
                }
        },
        // Metodes per vista llistat -> btnDetall 
        btnDetall: function (e){
            // Tot el qeu ha de fer es anar a la vista detall amb les dades del poke
            let itemView = "detall"
            console.log("Anem al detall del poke id: ",e)
            //let itemData = this.ArrayPokes[0]
        }
        // Metodes per vista detall  -> btnRetorn
        // Metodes per vista combat  -> clickOverTapa
        //                           -> combat
    },
    /* ¡¡¡¡¡¡ HOOKS !!!!! */
    mounted(){
        /* Aquesta funcio s activa CADA cop que s actualiten les dades del component */
        console.log("[MOUNTING] pokeCard component")
        console.log("*** LES DADES REBUDES SON: ***")
        console.log("tipus vista: ", this.itemView)
        console.log("Dades rebudes: ", this.itemData)
        this.initializer();
        console.log("[MOUNTED] pokeCard component")
    },
    updated(){
        /* Aquesta funcio s activa CADA cop que s actualiten les dades del component */
        console.log("[UPDATING] pokeCard component")
        console.log("*** LES DADES REBUDES SON: ***")
        console.log("tipus vista: ", itemView)
        console.log("Dades rebudes: ", itemData)
        initializer();
        console.log("[UPDATED] pokeCard component")
    }
}
</script>

<style scoped>
    .pokeContainer{
        background-color: lightskyblue;
        width: 90%;
        margin:0 auto;
        padding:1rem
    }

    .poke_tapa img{height: 10rem;}
    .pImg img{height: 5rem;}
</style>