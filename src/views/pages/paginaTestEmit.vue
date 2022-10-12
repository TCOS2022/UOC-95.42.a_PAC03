<template>
    <h1>PAGINA PER TESTEJAR ELS EMITS</h1>

    <div>
        <h2>COMPONENT</h2>
        <componentEmisor1 
            @nomEvent1 = "funcioParent1"
            @nomEvent2 = "funcioParent2"
        />

        <h2>RESULTATS REBUTS</h2>
        <p>CLICK -> {{ clickCounter }}</p>
        <p>INPUT -> {{ inputValue }}</p>

    </div>
</template>

<script>
    /* Mode optionAPI */
    import componentEmisor1 from "@/views/parts/TESTING/componentEmisorOptionAPI.vue"
    import {randomInteger} from "@/assets/js/libs/lib_Arrays.js"

    export default {
        components:{
            componentEmisor1
        },
        methods:{
            funcioParent1: function (e){
                console.log("dades rebudes al emit1 (btn): ", e);
                this.clickCounter=randomInteger(1,100)
            },
            funcioParent2: function (e){
                console.log("dades rebudes al emit2 (input): ", e)
                this.inputValue=e
            }
        },
        data(){
            return{
                clickCounter: 0,
                inputValue: ""
            }
        }
    }
</script>

<style></style>