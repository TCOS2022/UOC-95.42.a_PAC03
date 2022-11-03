<template>
    <div class="pageContainer">
 
        <header>
            <MainHeader />
        </header>

        <main>
           <!--  main -->
            <div class="loader" style="display:none">
            </div>
            
            <div class="contents">
                <MainContact />
            </div>
        </main>
        
        <footer>
            <!-- 
                footer
                <MainFooter />
            -->
        </footer>

    </div>
</template>

<script>
    import MainHeader  from "@/views/parts/header/MainHeader.vue";
    import MainFooter  from "@/views/parts/footer/MainFooter.vue";
    import MainContact from "@/views/parts/main/contacte/MainContacte.vue";
    
    export default {
    name: "PageContact.vue",
    components: {MainHeader, MainFooter, MainContact}
    }
</script>

<style></style>