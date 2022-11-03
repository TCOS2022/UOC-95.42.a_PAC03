<!-- eslint-disable vue/no-mutating-props -->
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

        <article class="pokeCard " :id="retornaPokeID()">
            <div class="vistaActiva llistat detall">
                <!--
                <div class="vistaActiva combat">
                    <section class="poke_tapa">
                        <img src='media/imatges/pokeCards/pokemonCard_backside2.png' alt=''>
                    </section>
                </div>
                -->
                <section class="poke_contingut">   
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

                    <div class="vistaActiva detall">
                        <div class="pokeTypes">
                            <div class="pTypes">
                                <span class="pokeType0">Tipus declarats:</span><br>
                                <span v-for = "(type1) in itemData.types1"  class="pokeType1" :key="type1"> [ {{ type1 }} ] </span>
                            </div>
                        </div>
                    </div>

                    <div class="pokeControls">
                        <div class="vistaActiva llistat">
                            <!-- li pasem al btn el id del poke pq pugui carregar correctament les dades -->
                            <button @:click="btnDetall(itemData.id)">MES DADES [{{itemData.id}}]</button>
                        </div>
                        <div class="vistaActiva detall">
                            <button @:click="btnRetorn()">RETORNAR</button>
                        </div>
                    </div>
                </section>
            </div>

            <div class="vistaActiva combat combat1">
                <section class="poke_tapa">
                    <!---->
                        <img src='media/imatges/pokeCards/pokemonCard_backside2.png' alt=''>
                    <!---->
                </section>
                <section class="poke_contingut">   
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

                    <div class="pokeTypes" style="display:none">
                        <div class="pTypes">
                            <span class="pokeType0">Tipus declarats:</span><br>
                            <span v-for = "(type1) in itemData.types1"  class="pokeType1" :key="type1"> [ {{ type1 }} ] </span>
                        </div>
                    </div>

                    <div class="pokeControls" style="display:none">
                        <div class="vistaActiva llistat">
                            <!-- li pasem al btn el id del poke pq pugui carregar correctament les dades -->
                            <button @:click="btnDetall(itemData.id)">MES DADES [{{itemData.id}}]</button>
                        </div>
                        <div class="vistaActiva detall">
                            <button @:click="btnRetorn()">RETORNAR</button>
                        </div>
                    </div>
                </section>
            </div>  
        </article>  

    </div>

</template>

<script>
/* Importacions de components */
import {dadesPokeByIDV2} from "@/assets/js/libs/lib_pokeAPI.js"

/* Exportacions a template i outbounds */
export default {
    /* Nom asignat */
    name: "PokeCard",
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
            default: ()=>{return{
                id: 0,
                imgFrontURL: "",
                imgBackURL: "",
                name: "POKE-DEMON-MASTER",
                pokeAtk: 999,
                pokeDef: 999,
                types1: ["Terra", "Aire", "Aigua", "Foc", "5º Element"]
            }}
        }
    },
    data:function(){
        return {
            src:""
        }
    },
    /* Metodes */
    methods:{
        retornaPokeID:function(){return this.itemData.id},
        recoverDataIfIdReceived:function(){
            /**
             * funcio qeu recupera les dades del id si detectem qeu sols ens han pasat aixo
             */
            //Mirem si sols em rebut un id
            if ((this.itemData).length==1){
                // Si resulta que el objecte rebut sols te un par key:value i es un id
                // farem una peticio a la api, recuperarem les dades i les pintarem
            }
        },
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
        // eslint-disable-next-line vue/no-mutating-props
        this.itemData.imgFrontURL = this.validarImatges(this.itemData.imgFrontURL)
        // eslint-disable-next-line vue/no-mutating-props
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
            //let articlesContainer="";
            let anclaPoke="";
            switch(tipusVista)
                {
                case "llistat": /* Vista LLISTAT */
                                // Eliminem el 2 article, quee s epr llistat/detall
                                // per elininar el 1er pargraf de cada div ....
                                //  var primerParrafo = document.querySelectorAll(«div p»)[0];
                                //  primerParrafo.parentNode.removeChild(primerParrafo);
                                // articlesContainer = document.querySelector("pokeContainer")
                                // articlesContainer.removeChild(articlesContainer.lastElementChild);

                                console.log("VISTA -> ",tipusVista)
                                marcadors.forEach((element,index) => {
                                    // Mirem cada element si te la clase "llistat" i la ctivem o apaguem
                                    console.log(index)
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
                                // Eliminem el 2 article, quee s epr llistat/detall
                                // per elininar el 1er pargraf de cada div ....
                                //  var primerParrafo = document.querySelectorAll(«div p»)[0];
                                //  primerParrafo.parentNode.removeChild(primerParrafo);
                                // articlesContainer = document.querySelector("pokeContainer")
                                // articlesContainer.removeChild(articlesContainer.lastElementChild);

                                console.log("VISTA -> ",tipusVista)
                                marcadors.forEach((element,index) => {
                                    // Mirem cada element si te la clase "llistat" i la ctivem o apaguem
                                    console.log(index)
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
                                // Eliminem el 1 article, quee s epr llistat/detall
                                // per elininar el 1er pargraf de cada div ....
                                //  var primerParrafo = document.querySelectorAll(«div p»)[0];
                                //  primerParrafo.parentNode.removeChild(primerParrafo);
                                // articlesContainer = document.querySelector("pokeContainer")
                                // articlesContainer.removeChild(articlesContainer.firstElementChild);

                                console.log("VISTA -> ",tipusVista)
                                marcadors.forEach((element,index) => {
                                    // Mirem cada element si te la clase "llistat" i la ctivem o apaguem
                                    console.log(index)
                                    if(element.classList.contains("combat")){
                                        /* Si tenim la clase activada, mostrem el elemnt */
                                        element.style.display = "block"
                                    }else{
                                        /* Si no es de la calse buscada, apaguem el element */
                                        element.style.display = "none"
                                    }
                                });

                                // Com es un  combat, cal que li asignem 2 coses mes:
                                //  1) event click a article.pokeCard
                                //  2) estils especials a la poke_tapa i al poke_contingut

                                // Afegint event click ....
                                console.log("Asignant event al article amb id: [" + this.itemData.id + "]")
                                /*
                                let anclasPoke = document.querySelector('article')
                                anclasPoke.forEach(element => {
                                    element.addEventListener("click",this.pokeClickEvent)
                                });

                                // NOTA: per fer servir nº al querySelector ... es realment una pesadill pq s ahn de escapar primer
                                // he trobat una explicacio aqui: https://foroayuda.es/uso-de-queryselector-con-id-que-son-numeros/#:~:text=Uso%20de%20querySelector%20con%20ID%20que%20son%20n%C3%BAmeros,danos%20de%20tu%20ayuda%20para%20ampliar%20esta%20comunidad.

                                */
                                anclaPoke = document.getElementById(this.itemData.id);
                                //let anclaPoke = document.querySelector("article.pokeCard.vistaActiva.combat")
                                anclaPoke.addEventListener("click",()=>{this.pokeClickEvent()}) // cal funcio anonima si volem pasar parametres
                                break;  

                default:        /* Sense vista definida */
                                console.log("VISTA -> ",tipusVista)
                                marcadors.forEach((element,index) => {
                                    console.log(index)
                                    // Mirem cada element si te la clase "llistat" i la ctivem o apaguem
                                    element.style.display = "block"
                                });
                                break;             
                }
            console.log(".... render de visualitzacio Activat")
        },
        // Metodes pels buttons
        btnDetall:function(pokeID){
            // Avisem per la consola
            console.log("Has premut DETALL!! ",pokeID)
            //this.$router.push("/detall")
            // Em afegit al router props:true i ara em de posar com a parametre la porp que rebra pero
            // com aixo esta obsolet, pasarem al final les dades via query ....
            //      this.$router.push({path:'/users',query:{name:'sai'}});
            // i per recuperar les dades: 
            //      template -> <h1>User {{$route.query.name}}</h1>
            //      script   -> this.$route.query.name
            this.$router.push({name:'detall', query:{pokeID:this.itemData.id}}); 
        },
        btnRetorn:function(){
            // Avisem per la consola
            console.log("Has premut RETORN!! ",this.itemData.id)
            // this.$router.push("/detall")
            this.$router.push('/llistat'); 
        },
        // Combat!!!!
        pokeClickEvent:function(){
            /** Funcio que esta asignada al evnet click de la carta a l pantalla de combat
            * Que em de fer:
            *   detectar si ja tenim una carta activada (via class = "cartaActivada" per exemple)
            *       si -> realitzar un combat i inicialitzar stats cartes
            *       no -> voltejar carta 
            *  */
           console.log("Ha clicat sobre una carta!!!!")
           console.log("pokeID-> ",this.itemData.id)
           
           if(this.pokeCardCartesActivades()==0){ 
                // no tenim cap carta activada, aquesta es la primera
                console.log("CAP carta activada encara, aquesta sera la 1ª")
                // Netegem area de resultats
                this.pokeGirarCarta()
            }
           else if(this.pokeCardCartesActivades()==1){ 
                // ja tenim 1 carta, aqeusta es la segona 
                console.log("JA tenim 1, aquesta sera la 2ª")
                this.pokeGirarCarta();
                this.pokeCombat();
            }
           else if(this.pokeCardCartesActivades()>=2){ 
                // ja tenim dos cartes, reset!!!!! 
                console.log("JA tenim 2, reset!!!!!")
                this.pokeCardsReset();
           }
           
        },
        pokeCardCartesActivades(){
            /** Funcio qeu ens retorna quantes cartes tenim activades */
            let anclas = document.querySelectorAll(".pokeCard.activada")
            let contador = anclas.length
            console.log("COMBAT? Tenim [" + contador + "] activades")
            return contador
        },
        pokeCardsReset(){
            /** funcio qeu posa TOTES les cartes tapades */
            // Esborrem el div de resultats ....
            let anclaResultat = document.querySelector(".combatResults");
            anclaResultat.innerHTML = "";
            console.log("COMBAT -> resetejant TOTES les cartes!!!!")
            let anclas = document.querySelectorAll(".pokeCard")
            anclas.forEach(element => {
                if(element.classList.contains("activada")){
                    element.classList.remove("activada")
                }
            });    
        },
        pokeGirarCarta(e){
            /** Funcio qeu gira la carta clickada */
            console.log("Event->",e)
            console.log("COMBAT -> girant la carta [" + this.itemData.id + "]")
            // recuperem el selector del element sobre el qual s ha fet el click, que ens ve del event
            // canviem el stat del element
            let ancla = document.getElementById(this.itemData.id)
            if(ancla.classList.contains("activada")){
                // Si JA estem tumbats, ens "destumbem"
                console.log("Carta ACTIVADA, la DESACTIVEM")
                ancla.classList.remove("activada")
            }else{
                // Si no estem tumbats, ens tumbem
                console.log("Carta DESACTIVADA, la ACTIVEM")
                ancla.classList.add("activada")
            }  
        },
        async pokeCombat(){
            /**
             * Funcio que realitza el combat i imprimeix el resultat la carta 1ª sempre ATACA
             */
            console.log("COMBAT -> realitzant combat ...")
            let resultat  = ""
            let resultat0 = ""
            let resultat1 = ""

            // Definim el defensor (2ª carta, que es la carta actual)
            let cardDefensor_ID  = this.itemData.id
            let cardDefensor_NOM = this.itemData.name
            let cardDefensor_DEF = this.itemData.pokeDef
            let cardAtacant_ID  = "element.id"
            let cardAtacant_NOM = "element.name"
            let cardAtacant_ATK = "element.pokeAtk"

            // Definim el atacant (1ª carta), busquem quina card esta activada i ES diferent de la actual
            let anclaActivades = document.querySelectorAll(".pokeCard.activada")
            anclaActivades.forEach( async element => {
                // Comprovem si el seu id es el mateix que el actual
                console.log("ID del llegit: ",element.id)
                if(this.itemData.id == element.id){
                    // SI, es el mateix, no serveix
                }else{
                    // NO, es diferent, es el qeu busquem!!!
                    //fem la apeticio a la pokeAPI
                    let dadesPoke = await dadesPokeByIDV2(element.id);
                    console.log("Dades rebudes desde API:")
                    console.log(dadesPoke)
                    cardAtacant_ID  = dadesPoke.id
                    cardAtacant_NOM = dadesPoke.name
                    cardAtacant_ATK = dadesPoke.stats[1].base_stat
                    console.log("Dades atacant ID / NOM / ATK")
                    console.log(cardAtacant_ID + " / " + cardAtacant_NOM + " / " + cardAtacant_ATK)
                    console.log("element->")
                    console.log(element)

                    // Definim el resultat
                    if (cardAtacant_ATK == cardDefensor_DEF){
                        // EMPAT!!   
                        resultat1 = "<span>[ EMPATA ]</span>"
                    }
                    else if (cardAtacant_ATK > cardDefensor_DEF){
                        // GUANYA ATACANT
                        resultat1 = "<span>[ GUANYA ]</span>"
                    }
                    else{
                        // GUANYA DEFENSOR
                        resultat1 = "<span>[ PERD ]</span>"
                    }
                    // Imprimir el resultat
                    resultat0 = "El Poke <span>[" + cardAtacant_ID + " / " + cardAtacant_NOM + "]</span> ATACA al Poke <span>[" + cardDefensor_ID + " / " + cardDefensor_NOM + "]</span>, i "
                    resultat = "<span>" + resultat0 + resultat1 + "</span>"
                    console.log(resultat)
                    let anclaResultat = document.querySelector(".combatResults")
                    anclaResultat.innerHTML = resultat 
                }
            });  
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

<style>
</style>