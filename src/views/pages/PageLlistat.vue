<template>
    <div class="pageContainer">

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
                <LlistatAmbFiltre />
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
    import LlistatAmbFiltre from "@/components/LlistatAmbFiltre.vue"

// Definim exports **********************************************************************
export default {
    name: "PageLlistat",
    components: {MainHeader, LlistatAmbFiltre}
}    
</script>

<style>
</style>