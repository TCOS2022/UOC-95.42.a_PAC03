<template>
    <ul class="tsLinks">
        <!-- <li @click="changeTheme($event, 'system')" class="linkActivat"> -->
        <li @click="changeTheme($event, 'system')" class="">
            <span>icon </span>    
            <span>System</span>
        </li>
        <li @click="changeTheme($event, 'light')">
            <span>icon </span>    
            <span>Light</span>
        </li>
        <li @click="changeTheme($event, 'dark')">
            <span>icon </span>    
            <span>Dark</span>
        </li>
        <li @click="changeTheme($event, 'inferno')">
            <span>icon </span>    
            <span>Inferno</span>
        </li>
    </ul>
</template>

<script>
    // NOTA "setup" permet abreviar la notacio eliminant el export
    // importem els elements qeu ens facin falta
    // importem les llibreries que ens facin falta
    // Exportem el que ens calgui enviar a les vistes
    
    // Importem els funcions de localStorage de la seva llibreria
    // Fem el export
    export default {
        name:"tsLinksV1.vue",
        components:{},
        props:{},
        data:()=>{
            themeSelected:""
        },
        methods:{
            changeActiveClass:function(e){
                /** Canviem la clase activa al element */
                let activat = false
                // Seleccionem els elements
                let elements = document.querySelectorAll('.themeSelectorUL li')
                // Dades a ña consola
                console.log("Event seleccionat -> ", e)
                console.log("items seleccionats -> ", elements)
                // Eliminem la clase de tots els elements
                elements.forEach(element => {
                    element.classList.remove("linkActivat")
                });
                // Afegim la clase al element especificat
                e.target.classList.add("linkActivat")
            },
            changeTheme:function(event,t){
                /** Funcio qeu canvia el thema segon la varaible t (nom del thema) rebuda */
                // Capturem el element amb id que esta al index.html ....
                let linkCSS0 = document.querySelector('#plantilla_colors')
                //let linkSPAN = document.
                let cssURL = ""
                switch(t){
                    case "light"  :  // Configuracio per LIGHT
                                    cssURL = "colors_light.css"
                                    break;
                    case "dark"   :  // Configuracio per DARK
                                    cssURL = "colors_dark.css"
                                    break;
                    case "inferno":  // Configuracio per INFERNO
                                    cssURL = "colors_inferno.css"
                                    break;
                    case "system" :  // Configuracio per defecte
                    default       :  // Qualsevol nit pot sortir el Sol ...
                                    cssURL = "colors_default.css"
                }
                // I finalment canviem el arxiu de css
                linkCSS0.href = "css/" + cssURL
                // i actualizem el link actiu
                this.changeActiveClass(event)
            }
        },
        /* HOOKS !!!! */
        beforeCreate:()=>{},
        mounted:()=>{},
        updated:()=>{},
        beforeDestroy:()=>{}
    }
</script>

<style>
    ul.tsLinks{
        list-style: none;
        display:flex;
        justify-content: space-around;
    }
    .tsLinks li{
        display:block;
        margin:0;
        color: blue;
        background-color: lightgreen;
        border:solid orange 0.25rem
    }
    
    /* Podem apagar els icons ja que no els em afegit encara .... */
    .tsLinks li span:first-child{display:none}

    .tsLinks li:hover{
        transform: scale(150%);
    }
    .tsLinks li.linkActivat{
        color:lightgreen;
        background-color: blue;
        font-weight: bolder;
    }
</style>