<!--
// **************************************************** //
    TITOL: mainTitleV2
    
    DATA/VERSIO: 20220922 / 2.0.0
    AUTOR: 

    DESCRIPCIO: 
    Modul per pintar el titol principal. Si no li passem valors, posara
    els que ell te definits per defecte

    IN  -> array [{logoURL:””, titol:””, imgURL:””}, {}, ...]
    OUT -> none

    US:
    al parent: 
        <mainTitleV2  />
        <mainTitleV2 :contentTitleArray="[{logoURL:"logo2",titol:"titol2",imgURL:"url2"}]" />
// **************************************************** //
-->

<template>
    <!-- Main Title in HEADER -->
    <!-- 
    <img :src="contentTitleArray[0].logoURL" alt="Imatge del logo">
    -->
    <span><h1> {{contentTitleArray[0].titol}} </h1></span>
    <img :src="contentTitleArray[0].imgURL" alt="Imatge del titol">
    <!-- -->
</template>

<script>
/* Importacions de components */
/* Exportacions a template i outbounds */
export default {
    name: "mainTitleV2",
    props: {
        contentTitleArray:{
                type:[Array,Object],
                default:[{logoURL:"", titol:"PokeDex Machine v3.x [SPA with Vue.js]", imgURL:""}]
        }
    }
}
</script>

<style scoped>
    img, span {width: 100%;}
    h1{text-align: center; width: 100%;}
</style>
