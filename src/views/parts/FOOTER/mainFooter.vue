<template>
    <!-- Seccio de FOOTER principal de la pagina -->
    <section class="S1">
        LSSI / RGPD / ARCO
        <footerFidel />
    </section>
    <section class="S2">
        WEB 
        <footerIrene />
    </section>
    <section class="S3">
        <span>Technologies</span>
        <footerTechnologies />
    </section>
</template>

<script setup>
    // Importem els components ..... 
    import footerTechnologies from "@/views/parts/FOOTER/footerTechnologies.vue"
    import footerFidel        from "@/views/parts/FOOTER/footerFidel.vue"
    import footerIrene        from "@/views/parts/FOOTER/footerIrene.vue"
</script>

<style scoped>
    section{width:30%;min-height:10px; text-align: center;}
    .S1{background-color: lightgreen;}
    .S2{background-color: lightyellow;}
    .S3{background-color: lightpink;}
</style>