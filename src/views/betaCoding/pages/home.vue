<template>
    <div class="mainContainer">
        <header>
            <!-- Aqui va el HEADER carregat de manera dinamica -->
            <mainHeader />
        </header>
        
        <main>
            <!-- Aqui va el MAIN carregat de manera dinamica -->
            <div class="loader"></div>
            <div class="contents">
                <mainHome />
            </div>

        </main>
        
        <footer>
            <!-- Aqui va el FOOTER carregat de manera dinamica -->
            <mainFooter />
        </footer>
    </div>
</template>

<script setup>
    /* Importem els elements que integrem al template */
    import mainHeader from "@/views/parts/HEADER/mainHeaderV2.vue"
    import mainFooter from "@/views/parts/FOOTER/mainFooter.vue"
    import mainHome   from "@/views/parts/MAIN/HOME/mainHomeV1.vue"
</script>

<style scoped>
    .mainContainer{
        position:relative;
        margin: 1.5rem auto;
        border: red solid 5px;
        border-radius: 0 2rem 0 2rem;
        padding: 2rem;
        display:flex;
        flex-direction: column;
        width:90%;
    }

    header, main, footer {
        width: 100%;
        border: blue solid 2.5px;
        /*border-radius: 2rem;*/
        min-height:25px
    }

    main{margin:1rem 0}

    footer{display:flex;justify-content: space-around;}
</style>