<template>
    <h1>PAGINA LLISTAT</h1>

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
        <filtreIllistat01 />
    </div>

    <div>
        <h3>FOOTER</h3>
    </div>

</template>

<script>
/* Mode API */
// Definim imports **********************************************************************
    // Components
    import header01   from "@/views/parts/HEADER/mainHeaderV2.vue"
    import filtreIllistat01 from "@/components/llistatAmbFiltre.vue"

// Definim exports **********************************************************************
export default {
    name: "llistatV1.2",
    components: {header01, filtreIllistat01}
}    
</script>

<style scoped>
ul {display:flex;flex-wrap: wrap;}
li {width: 20%;}
</style>