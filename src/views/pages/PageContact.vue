<template>
    <div class="pageContainer">
 
        <header>
            <mainHeader0 />
        </header>

        <main>
           <!--  main -->
            <div class="loader"></div>
            <div class="contents">
                <contact0 />
            </div>
        </main>
        
        <footer>
            <!-- 
                footer
                <mainFooter0 />
            -->
        </footer>

    </div>
</template>

<script>
    import mainHeader0 from "@/views/parts/header/mainHeaderV2.vue";
    import mainFooter0   from "@/views/parts/footer/mainFooter.vue";
    import contact0 from "@/views/parts/MAIN/CONTACTE/mainContacteV1.vue";
    
    export default {
    name: "contact.vue",
    components: {mainHeader0, mainFooter0,contact0}
    }
</script>

<style></style>