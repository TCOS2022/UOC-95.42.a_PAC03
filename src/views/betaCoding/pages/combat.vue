<template>
    <h1>PAGINA COMBAT</h1>

    <div><h3>HEADER</h3></div>

    <div>
        <h3>LOADER</h3>
        <img src="media/imatges/animacions/loading_v2.gif" alt="" srcset="">
    </div>

    <div>
        <h3>CONTENTS</h3>

        <h4>COMBAT</h4>
        <filtre />
    </div>

    <div><h3>FOOTER</h3></div>

</template>

<script setup>
    import filtre       from "@/views/parts/main/filtres/filtre_jordi/mainFiltreV1_optionAPI.vue"
    import header0      from "@/views/parts/HEADER/mainHeaderV2.vue"
    import pokeCard0    from "@/views/parts/POKECARD/pokeCardV2.vue"
    let items = [0,1,2,3,4,5,6,7,8,9]
</script>

<style></style>