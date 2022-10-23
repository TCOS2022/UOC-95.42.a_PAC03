<template>
<div id="pageContainer">

    <header>
        <h3>HEADER</h3>
        <header01 />
    </header>

    <main>
        <div class="loader">
            <h3>LOADER</h3>
            <img src="media/imatges/animacions/loading_v2.gif" alt="" srcset="">
        </div>

        <div class="contents">
            <h3>CONTENTS</h3>
            <!-- <filtreIllistat01 /> -->
            <llistatAmbFiltre />
        </div>
    </main>

    <footer>
        <h3>FOOTER</h3>
    </footer>
</div>

</template>

<script>
/* Mode API */
// Definim imports **********************************************************************
    // Components
    import header01   from "@/views/parts/HEADER/mainHeaderV2.vue"
    import llistatAmbFiltre from "@/components/llistatAmbFiltre.vue"

// Definim exports **********************************************************************
export default {
    name: "llistatV1.2",
    components: {header01, llistatAmbFiltre}
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