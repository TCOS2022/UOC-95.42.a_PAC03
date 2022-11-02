<template>
    <!-- Seccio de FOOTER principal de la pagina -->
    <section class="S1">
        <span>LSSI / RGPD / ARCO</span><br>
        <!--
        <footerFidel />
        -->
    </section>
    <section class="S2">
        <span>WEB </span><br>
        <br>
        <!--
        <footerIrene />
        -->
    </section>
    <section class="S3">
        <span>Technologies</span><br><br>
        <footerTechnologies />
    </section>
</template>

<script>
    // Importem els components ..... 
    import footerTechnologies from "@/views/parts/footer/FooterTechnologies.vue";
    // Definim exports **********************************************************************
    export default {
        name: "MainFooter",
        components: {footerTechnologies},
    };
</script>

<style scoped>
    section{width:30%;min-height:10px; text-align: center;}
    .S1{background-color: lightgreen;}
    .S2{background-color: lightyellow;}
    .S3{background-color: lightpink;}
</style>