<template>
    <!-- Seccio de HEADER principal de la pagina -->
    <div class="mainTitle">
        <span><h1>PokeDex Machine v3.x [SPA with Vue.js] </h1></span>
        <img src="" alt="Imatge del titol">
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
</template>

<script setup>
    // Importem els components ..... 
    import navLinksV1 from "@/views/parts/navLinksV1.vue"
    import navLinksV2 from "@/views/parts/navLinksV2.vue"
    import tsLinksV1 from "@/views/parts/tsLinksV1.vue"
</script>



<style scoped>
    .mainTitle{width:100%;}

    .mainNav{width: 100%; text-align:left}
    ul{
        list-style: none;
        display:flex;
        justify-content: space-between;
        padding-left: 0
    }
</style>