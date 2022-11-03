<!--
// **************************************************** //
    TITOL: mainHeaderV2

    DATA/VERSIO: 20220922 / 2.0.0
    AUTOR:

    DESCRIPCIO:
    Modul qeu pinta el titol i els grup sde navegacio i themeSelector a base
    de cridar els seus components

    IN  -> none
    OUT -> none

    USE:
        <mainHeaderV2 />

// **************************************************** //
-->

<template>
    <div class="mainHeader">
        <!-- Seccio de HEADER principal de la pagina -->
        <div class="mainTitle">
            <MainTitle />
        </div>

        <nav class="mainNav">
            <ul>
                <li>
                    <NavLinks />
                </li>
                <li>
                    <TsLinks />
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    // Importem els components ..... 
    import MainTitle from "@/views/parts/header/MainTitle.vue"
    import NavLinks  from "@/views/parts/header/NavLinks.vue"
    import TsLinks   from "@/views/parts/header/TsLinks.vue"
    // Definim exports **********************************************************************
    export default {
        name: "MainTitle.vue",
        components: {MainTitle, NavLinks, TsLinks}
    }    
</script>



<style scoped>
    .mainTitle{width:100%; text-align:center}

    .mainNav{width: 100%; text-align:left}
    ul{
        list-style: none;
        display:flex;
        justify-content: space-between;
        padding-left: 0
    }
</style>