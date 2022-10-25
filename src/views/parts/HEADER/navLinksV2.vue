<!--
// **************************************************** //
    TITOL: navLinksV2

    DATA/VERSIO: 20220922 / 2.0.0
    AUTOR:

    DESCRIPCIO:
    Modul que s encarrega de pintar un llistat amb els enllaços de navegacio

    IN  -> :contentNavArray=[{class:"", icona:"Icon ", nom:"Contacte", url:"contacte.html"}, {}, .....]
    OUT ->

    NOTA: 'Class'clear determina el link actiu amb class="linkActivat"

    USE:
        <navLinksV2 />
        <navLinksV2 :contentNavArray="[{class:"",icona:"",nom:"",url:""},.....]"
    
        HISTORY:
        20220926 2.1 Canviem els <a> per router-to i afegim el <router view />
                     Canviem les rutes del default
// **************************************************** //
-->

<template>
    <ul class="navLinks">
        <li v-for = "(item) in contentNavArray" :class="item.class">
            <!-- v2.0
            <a :href="item.url" >
                <span>{{item.icona}}</span>    
                <span>{{item.nom}}</span>
            </a>
            -->
            <!-- V2.1 -->
            <router-link :to="item.url"> 
                <span> {{ item.icona }} </span>    
                <span> {{ item.nom }} </span>
            </router-link>
            
        </li>
    </ul>
    
</template>

<script>
/* Importacions de components */
/* Exportacions a template i outbounds */
    export default {
        name: "navLinksV2",
        props: {
            contentNavArray:{
                    type:[Array,Object],
                    /* V2.0
                    default:[
                            {class:"linkActivat",icona:"Icon ", nom:"Home",     url:"home.html"},
                            {class:"",           icona:"Icon ", nom:"Llistat",  url:"llistat.html"},
                            {class:"",           icona:"Icon ", nom:"Detall",   url:"detall.html"},
                            {class:"",           icona:"Icon ", nom:"Combat",   url:"combat.html"},
                            {class:"",           icona:"Icon ", nom:"Contacte", url:"contacte.html"}
                    ]
                    */
                    /* v2.1 */
                    default:[
                            //{class:"linkActivat",icona:"Icon ", nom:"Home",     url:"/"},
                            {class:"",icona:"Icon ", nom:"Home",     url:"/"},
                            {class:"",           icona:"Icon ", nom:"Llistat",  url:"/llistat"},
                            //{class:"",           icona:"Icon ", nom:"Detall",   url:"/detall"},                          
                            {class:"",           icona:"Icon ", nom:"Combat",   url:"/combat"},
                            {class:"",           icona:"Icon ", nom:"Contacte", url:"/contacte"}
                    ]

            }
        }
    }

    function setejarClase(){
        // Definim variables
        let claseActivada = "linkActivat"
        let selector = this.queryselectorAll(li)
        // Esborrem la clase de TOTS els elements, com es un array ...
        selector.forEach(element => {
            element.class.delete(claseActivada)
        });
        // Afegim la clase SOLS a aquest element
        this.class.add(claseActivada)
    }
</script>

<style scoped>
    ul{
        list-style: none;
        display:flex;
        justify-content: space-around;
    }
    li{
        display:block;
        margin:0;
        color: blue;
        background-color: lightgreen;
        border:solid orange 0.25rem
    }

    /* Podem apagar els icons ja que no els em afegit encara .... */
    li span:first-child{display:none}

    li:hover{
        transform: scale(150%);
    }
    .linkActivat span{
        color:lightgreen !important;
        background-color: blue;
        font-weight: bolder;
    }
</style>