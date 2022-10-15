<!--
// **************************************************** //
    TITOL: pokeCardV2

    DATA/VERSIO: 20220925 / 2.1.0
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
                <div class="vistaActiva combat">
                    <img src='media/imatges/pokeCards/pokemonCard_backside2.png' alt=''>
                </div>
            </section>

            <section class="poke_contingut">
                <div class="vistaActiva llistat detall combat">
                    <div class="pokeImg">
                        <div class="pID">
                            <span class="pokeId0">ID:</span>
                            <span class="pokeId1">[ {{ itemData.id }} ] </span>
                        </div>
                        <div class="pImg">
                            <!-- <span>URL1: {{this.itemData.imgFrontURL}}</span><br> -->
                            <img :src='recoverURLImage(1)' alt='Imatge frontal'>
                            <img :src='recoverURLImage(2)' alt='Imatge posterior'>
                        </div>
                        <div class="pName">
                            <span class="pokeName0">NOM:</span>
                            <span class="pokeName1"> [ {{ itemData.name }} ] </span>
                        </div>
                    </div>

                    <div class="pokeData">
                        <div class="pAtk">
                            <span class="pokeAtk0">Atac:</span><br>
                            <span class="pokeAtk1"> [ {{ itemData.pokeAtk }} ] </span>
                        </div>
                        <div class="pDef">
                            <span class="pokeDef0">Defensa:</span><br>
                            <span class="pokeDef1"> [ {{ itemData.pokeDef }} ] </span>
                        </div>
                    </div>
                </div>

                <div class="vistaActiva combat">
                    <div class="pokeData">
                        <div class="ptypes">
                            <span class="pokeType1">Tipus declarats:</span><br>
                            <span v-for = "(type1) in itemData.types1"  class="pokeType1" > [ {{ type1 }} ] </span>
                        </div>
                    </div>
                </div>

                <div class="vistaActiva llistat">
                    <div class="pokeControls">
                        <button>MES DADES</button>
                    </div>
                </div>

                <div class="vistaActiva detall">
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
        /*
        itemData:{
            type:Object,
            default: {
                poke_id: 0,
                //poke_imgURL1: "media/imatges/pokeCards/imatgeNoDisponible_cuadrada.png",
                //poke_imgURL2: "media/imatges/pokeCards/imatgeNoDisponible_rodona.png",                /*
                poke_imgURL1: "",
                poke_imgURL2: "media/imatges/pokeCards/imatgeNoDisponible_rodona.png",
                poke_nom: "POKE-DEMON-MASTER",
                poke_atk: 999,
                poke_def: 999,
                poke_types: ["Terra", "Aire", "Aigua", "Foc", "5º Element"]
            }*/
        itemData:{
            type:Object,
            default: {
                id: 0,
                imgFrontURL: "",
                imgBackURL: "",
                name: "POKE-DEMON-MASTER",
                pokeAtk: 999,
                pokeDef: 999,
                types1: ["Terra", "Aire", "Aigua", "Foc", "5º Element"]
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
        recoverURLImage:function(z){
            //console.log("recoverURLImage!!!")
            //console.log("URL1 Actual:", this.itemData.imgFrontURL)
            //console.log("URL2 Actual:", this.itemData.imgBackURL)
            if(z==1){return this.itemData.imgFrontURL}
            if(z==2){return this.itemData.imgBackURL}
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
        console.log("Validant si te imatge ...")
        //console.log("URL1->",this.itemData.imgFrontURL)
        //console.log("URL2->",this.itemData.imgBackURL)
        this.itemData.imgFrontURL = this.validarImatges(this.itemData.imgFrontURL)
        this.itemData.imgBackURL = this.validarImatges(this.itemData.imgBackURL)
        //console.log("URL1-->",this.itemData.imgFrontURL)
        //console.log("URL2-->",this.itemData.imgBackURL)

        // 5 - pintem els blocs determinats per la vista
        console.log("Rendering pokecard view")
        this.activarVistaCard(this.itemView)
        console.log("[INITIALIZED] pokeCard component")
        },
        validarImatges:function(urlIMG){
            console.log("Validar URL:", urlIMG)
            if(urlIMG == "" || urlIMG == null){
                // SI no tenim cap imatge, li posem la que tenim per defecte
                urlIMG = "media/imatges/pokeCards/imatgeNoDisponible_cuadrada.png"
            }else{
                // Si ja tenim imatge, no fem res
            }
            console.log("Validada a: ",urlIMG)
            return urlIMG
        },
        activarVistaCard:function(tipusVista){
            /** Funcio qeu asigna que s ha de veure i que no segons la vista seleccionada
             *  Podem rebre: "llistat", "detall", "combat"
             *  Definim visibilitats per tapa/contingut
             *  Definim visibilitats tals que si tenim la clase "vistActiva" i una de les 3 altres estara "visible", 
            */ 
            
            /* Definim tots esl divs amb indicador de clase "vistaActiva" */
            console.log("Activant render de visualitzacio ....")
            console.log("Vista demanada: ", tipusVista)
            let marcadors = document.querySelectorAll(".vistaActiva")
            switch(tipusVista)
                {
                case "llistat": /* Vista LLISTAT */
                                console.log("VISTA -> ",tipusVista)
                                marcadors.forEach((element,index) => {
                                    // Mirem cada element si te la clase "llistat" i la ctivem o apaguem
                                    if(element.classList.contains("llistat")){
                                        /* Si tenim la clase activada, mostrem el elemnt */
                                        element.style.display = "block"
                                    }else{
                                        /* Si no es de la calse buscada, apaguem el element */
                                        element.style.display = "none"
                                    }
                                });
                                break;
                case "detall":  /* Vista DETALL */
                                console.log("VISTA -> ",tipusVista)
                                marcadors.forEach((element,index) => {
                                    // Mirem cada element si te la clase "llistat" i la ctivem o apaguem
                                    if(element.classList.contains("detall")){
                                        /* Si tenim la clase activada, mostrem el elemnt */
                                        element.style.display = "block"
                                    }else{
                                        /* Si no es de la calse buscada, apaguem el element */
                                        element.style.display = "none"
                                    }
                                });
                                break;

                case "combat":  /* Vista COMBAT */
                                console.log("VISTA -> ",tipusVista)
                                marcadors.forEach((element,index) => {
                                    // Mirem cada element si te la clase "llistat" i la ctivem o apaguem
                                    if(element.classList.contains("combat")){
                                        /* Si tenim la clase activada, mostrem el elemnt */
                                        element.style.display = "block"
                                    }else{
                                        /* Si no es de la calse buscada, apaguem el element */
                                        element.style.display = "none"
                                    }
                                });
                                break;  

                default:        /* Sense vista definida */
                                console.log("VISTA -> ",tipusVista)
                                marcadors.forEach((element,index) => {
                                    // Mirem cada element si te la clase "llistat" i la ctivem o apaguem
                                    element.style.display = "block"
                                });
                                break;             
                }
            console.log(".... render de visualitzacio Activat")
        }
    },
    /* ¡¡¡¡¡¡ HOOKS !!!!! */
    mounted(){
        /* Aquesta funcio s activa CADA cop que s actualiten les dades del component */
        console.log("[MOUNTING] pokeCard component")
        this.initializer();
        console.log("[MOUNTED] pokeCard component")
    },
    updated(){
        /* Aquesta funcio s activa CADA cop que s actualiten les dades del component */
        console.log("[UPDATING] pokeCard component")
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
    .pImg img{height: 5rem;width: 50%;}
</style>