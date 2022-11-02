<!--
// **************************************************** //
    TITOL:

    DATA/VERSIO: 20220929 / 1.0.0
    AUTOR: T.C.O.S

    DESCRIPCIO:

    IN  ->
    OUT ->

    USE:

    HISTORIC VERSION:
// **************************************************** //
-->

<template>
    <form class="filtre1">
        <fieldset>
            <h3 class="filtreTitol"> FILTRE !!!</h3>
        </fieldset>
        <fieldset>
            <label for="filtreInput">FILTRE </label>
            <input v-model="text" name="filtreInput" placeholder="Posi el text que vulgui comparar amb els noms dels pokes">
        </fieldset>
        <fieldset class="filtreRadioButtons">
            <h4>Tria com vols que es faci el cribatge</h4>
            <input type="radio" id="op1" name="options1">
            <label for="op1">Que comenci igual</label><br>
            <input type="radio" id="op2" name="options1">
            <label for="op2">Que contingui el text</label><br>
            <input type="radio" id="op3" name="options1">
            <label for="op3">Qur contingui les lletres independents</label>
        </fieldset>
        <!-- SOLS PER EFECTES DE DEBUGGING  INICI -->
        <fieldset>
            ENTRADA: {{ arrayInput }} <br>
            FILTRE:  {{ arrayFiltre }} <br>
            SORTIDA: {{ arrayOutput }}
        </fieldset>
        <!-- SOLS PER EFECTES DE DEBUGGING  FINAL -->
    </form>
</template>

<script>
/* Importacions de components */
/* Exportacions a template i outbounds */
export default {
    name: "mainFiltre",
    props: {
        arrayInput:{
            type:[Array],
            default:["alias","beto","Cedric","Humor","Atlante","alita"]
        },
        arrayOutput:{
            type:[Array],
            default:["alias","beto","Cedric"]               
        }
    }
    /* ,emits: {
        arrayOutput:{
            type:[Array],
            default:["alias","beto","Cedric"]               
        }
    }*/
}

</script>

<style scoped>
    .filtre1 {
        width: 100%;
        padding: 2em;
        margin: 0 auto;
        background-color:lightgrey;
        color:blue;
        border: green dotted 5px;
        text-align: left;
    }
    .filtreRadioButtons{
        text-align: left;
    }
</style>