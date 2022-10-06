<template>
    <h1>PAGINA LLISTAT</h1>

    <div>
        <h3>HEADER</h3>
        <header0 />
    </div>

    <div>
        <h3>LOADER</h3>
        <img src="media/imatges/animacions/loading_v2.gif" alt="" srcset="">
    </div>

    <div>
        <h3>CONTENTS</h3>

        <h4>FILTRE</h4>
        <filtre_jordi />

        <h4>LLISTAT</h4>
        <ul>
            <li v-for="item in items">
                <pokeCard0 />
            </li>
        </ul>

    </div>

    <div>
        <h3>FOOTER</h3>
    </div>

</template>

<script setup>
    import filtre_jordi from "@/views/parts/main/filtres/filtre_jordi/mainFiltreV1_componentAPI.vue"
    import header0      from "@/views/parts/HEADER/mainHeaderV2.vue"
    import pokeCard0    from "@/views/parts/POKECARD/pokeCardV2.vue"
    let items = [0,1,2,3,4,5,6,7,8,9]

</script>

<style scoped>
ul {display:flex;flex-wrap: wrap;}
li {width: 20%;}
</style>