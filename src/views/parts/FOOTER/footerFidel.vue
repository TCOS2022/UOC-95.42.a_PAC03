<template>
    <h3 >                               {{titol1}}</h3>
    <h3 :class="clase1">                {{titol2}}</h3>
    <h3 :class="`${clase1} ${clase2}`"> {{titol3}}</h3>
</template>

<script setup>
    let clase1 = "activa"
    let clase2 = "finolis"
    let titol1 = "Footer sense clases"
    let titol2 = "Footer amb clase [activa]"
    let titol3 = "Footer amb clase [activa] i [finolis]"
</script>

<style scoped>
    h3 {
        color:green;
        background-color: blue;
        font-size: 2rem;
        width: 80%;
        border: dotted black 0.5rem;
        padding: 0.5rem;
        border-radius: 0.25rem;
        text-align: center;
    }

    h3.activa {color:yellow}
    h3.finolis {background-color: red;}
</style>


