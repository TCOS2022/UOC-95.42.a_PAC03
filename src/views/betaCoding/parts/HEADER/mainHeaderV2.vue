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
            <mainTitleV2 />
        </div>

        <nav class="mainNav">
            <ul>
                <li>
                    <navLinksV2 />
                </li>
                <li>
                    <tsLinksV1 />
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
    // Importem els components ..... 
    import mainTitleV2 from "@/views/parts/HEADER/mainTitleV2.vue"
    import navLinksV2  from "@/views/parts/HEADER/navLinksV2.vue"
    import tsLinksV1   from "@/views/parts/HEADER/tsLinksV1.vue"
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