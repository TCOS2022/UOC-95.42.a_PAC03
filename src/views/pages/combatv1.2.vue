<template>
    <div class="pageContainer">
        <!-- <h1>PAGINA LLISTAT 1.2</h1> -->

        <header>
            <!-- <h3>HEADER</h3> -->
            <header01 />
        </header>

        <main>
            <div class="loader">
                <!-- <h3>LOADER</h3> -->
                <img src="media/imatges/animacions/loading_v2.gif" alt="" srcset="">
            </div>

            <div class="contents">
                <!-- <h3>CONTENTS</h3> -->
                <!-- <filtreIllistat01 /> -->
                <combatAmbFiltre />
            </div>
        </main>


        <footer>
            <!-- <h3>FOOTER</h3> -->
        </footer>
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

<style>
</style>