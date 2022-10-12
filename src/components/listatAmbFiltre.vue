<script>
// Imports necesaris pq funcioni

// Exports
export default {
    name:"llistatAmbFiltreV1.vue",
    props:{},
    data:function(){ return{} },
    methods:{
        // Metodes que reben dades (props)
        // Metodes que envien dades (emits)
        initializer:function(){console.log("Inicialitzador de la vista")}
    },
    watch:{},
    // HOOKS !!!!! 
    beforeMount:function(){
        console.log("beforeMounting ....")
        this.initializer()
        console.log(".... beforeMounting")
    },
    mounted:function(){
        console.log("beforeMounting ....")
        this.initializer()
        console.log(".... beforeMounting")
    },
    updated(){
        console.log("beforeMounting ....")
        this.initializer()
        console.log(".... beforeMounting")
    },
    beforeDestroy(){
        console.log("beforeMounting ....")
        this.initializer()
        console.log(".... beforeMounting")
    }
}
</script>

<template>
    <div>
        <h2> BLOC DEL FILTRE </h2>
    </div>
    <div>
        <h2> BLOC DE LES POKECARDS </h2>
        <ul>
            <li v-for="card in cards">
                <pokeCard />
                <!-- <pokeCard :itemView="enviarVista1()" :itemData="enviarDades1()" /> -->
            </li>
        </ul>
    </div>
</template>

<style></style>