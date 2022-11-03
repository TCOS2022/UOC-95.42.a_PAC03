<template>
    <div class="pageContainer">
        <header>
            <!-- Aqui va el HEADER carregat de manera dinamica -->
            <MainHeader />
        </header>
        
        <main>
            <div class="loader"></div>
            <div class="contents">
                <!-- Aqui va el MAIN carregat de manera dinamica -->
                <MainHome />
            </div>
        </main>
        
        <footer>
            <!-- Aqui va el FOOTER carregat de manera dinamica -->
            <MainFooter />
        </footer>
    </div>
</template>

<script>
    /* Importem els elements que integrem al template */
    import MainHeader from "@/views/parts/header/MainHeader.vue"
    import MainFooter from "@/views/parts/footer/MainFooter.vue"
    import MainHome   from "@/views/parts/main/home/MainHome.vue"

    export default {
    name: "PageHome",
    components: {MainHeader, MainFooter, MainHome}
} 
</script>

<style>
/* ATENCIO, IMPORTAR ARXIUS CSS SOLS FUNCIONA SI NO ESTEM SCOPED */
/* @import "@/assets/css/plantilla_colors.css"; --> :root{--color03: green;}*/
</style>