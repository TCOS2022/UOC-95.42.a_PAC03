<template>
    <div class="pageContainer">
        <header>
            <!-- Aqui va el HEADER carregat de manera dinamica -->
            <mainHeaderV2 />
        </header>
        
        <main>
            <div class="loader"></div>
            <div class="contents">
                <!-- Aqui va el MAIN carregat de manera dinamica -->
                <mainHome />
            </div>
        </main>
        
        <footer>
            <!-- Aqui va el FOOTER carregat de manera dinamica -->
            <mainFooter />
        </footer>
    </div>
</template>

<script>
    /* Importem els elements que integrem al template */
    import mainHeaderV2 from "@/views/parts/header/MainHeader.vue"
    import mainFooter   from "@/views/parts/footer/MainFooter.vue"
    import mainHome     from "@/views/parts/main/home/MainHome.vue"

    export default {
    name: "PageHome",
    components: {mainHeaderV2, mainFooter,mainHome}
} 
</script>

<style>
/* ATENCIO, IMPORTAR ARXIUS CSS SOLS FUNCIONA SI NO ESTEM SCOPED */
/* @import "@/assets/css/plantilla_colors.css"; --> :root{--color03: green;}*/
</style>