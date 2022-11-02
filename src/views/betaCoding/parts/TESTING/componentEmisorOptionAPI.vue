<template>
    <button @click="emitFunction1">CLICA AQUI</button>
    <input 
        @keyup="emitFunction2" 
        type="text" 
        id="input1" 
        name="filtreInput" 
        placeholder="Posi aqui el text que vulgui comparar amb la entrada"  
        autocomplete="off"
    >
</template>

<script>
    /* Mode optionAPI */
    export default {
        name:"componentEmisorOptionAPI",
        methods:{
            emitFunction1: function(){
                /* Definim nomEvent i valor ... */
                this.$emit('nomEvent1', 2)
            },
            emitFunction2: function(){
                const input1 = document.querySelector("input")
                let enviar2 = input1.value
                this.$emit("nomEvent2", enviar2)
            }
        },
        /* Array amb els noms del events que enviarem */
        emits:["nomEvent1","nomEvent2"],
        data(){return{
            /* Definim variables que exportem al TEMPLATE ... */
        }}
    }
</script>

<style></style>

