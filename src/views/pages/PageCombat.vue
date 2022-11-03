<template>
    <div class="pageContainer">
        <!-- <h1>PAGINA LLISTAT 1.2</h1> -->

        <header>
            <!-- <h3>HEADER</h3> -->
            <MainHeader />
        </header>

        <main>
            <div class="loader" style="display:none">
                <!-- <h3>LOADER</h3> -->
                <img src="media/imatges/animacions/loading_v2.gif" alt="" srcset="">
            </div>

            <div class="contents">
                <!-- <h3>CONTENTS</h3> -->
                <!-- <filtreIllistat01 /> -->
                <CombatAmbFiltre />
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
    import MainHeader       from "@/views/parts/header/MainHeader.vue"
    import CombatAmbFiltre from "@/components/CombatAmbFiltre.vue"

// Definim exports **********************************************************************
export default {
    name: "PageCombat",
    components: {MainHeader, CombatAmbFiltre}
}    
</script>

<style>
</style>