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
    import mainHeader0 from "@/views/parts/header/MainHeader.vue";
    import mainFooter0 from "@/views/parts/footer/MainFooter.vue";
    import contact0    from "@/views/parts/main/contacte/MainContacte.vue";
    
    export default {
    name: "PageContact.vue",
    components: {mainHeader0, mainFooter0,contact0}
    }
</script>

<style></style>