<template>
<div id="pageLlistat">
    <h1>PAGINA LLISTAT 1.2</h1>

    <div>
        <h3>HEADER</h3>
        <header01 />
    </div>

    <div>
        <h3>LOADER</h3>
        <img src="media/imatges/animacions/loading_v2.gif" alt="" srcset="">
    </div>

    <div>
        <h3>CONTENTS</h3>
        <!-- <filtreIllistat01 /> -->
        <combatAmbFiltre />
    </div>

    <div>
        <h3>FOOTER</h3>
    </div>
</div>

</template>

<script>
/* Mode API */
// Definim imports **********************************************************************
    // Components
    import header01   from "@/views/parts/HEADER/mainHeaderV2.vue"
    import combatAmbFiltre from "@/components/combatAmbFiltre.vue"

// Definim exports **********************************************************************
export default {
    name: "llistatV1.2",
    components: {header01, combatAmbFiltre}
}    
</script>

<style scoped>
#pageLlistat{
    background-color: lightgreen;
    width: 95%;
    margin: 0 auto;
    padding:1rem;
}
ul {display:flex;flex-wrap: wrap;}
li {width: 20%;}
</style>