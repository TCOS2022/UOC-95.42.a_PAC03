<!--
// **************************************************** //
    TITOL: template_props
    
    DATA/VERSIO: 20220922 / 1.0.0
    AUTOR: 

    DESCRIPCIO: 
    Modul demo per props

    IN  -> array [{logo:””, títol:””, imgURL:””}, {}, ...]
    OUT -> none

    US:
    Si no posem la variable, agafa el valor definit com a "default" al modul
    <template_props />
    <template_props :contentTitle='{logo:"logo2",titol:"titol2",imgURL:"url2"}' />
    <template_props :contentTitleArray='[{dato:"d10",data:"e10"},{dato:"d20",data:"e20"},{dato:"d30",data:"e30"}]' />

// **************************************************** //
-->

<template>
    <div>
        <h2>Text creat dinamicament model 1</h2>
        logo  -> {{ contentTitle1 }} <br>
        titol -> {{ contentTitle2 }} <br>
        img   -> {{ contentTitle3 }}
        <h2>Text creat dinamicament model 2</h2>
        logo  -> {{ contentTitle.logo }} <br>
        titol -> {{ contentTitle.titol }} <br>
        img   -> {{ contentTitle.imgURL }}
        <h2>Text creat dinamicament model 3</h2>
        <ul>
            <li v-for="item in contentTitleArray">
                dato -> {{item.dato}} <br>
                data -> {{item.data}}
            </li>
        </ul>
    </div>
</template>

<script>
/* Importacions de components */
/* Exportacions a template i outbounds */
export default {
    name: "template_props",
    props: {
            contentTitle1:{
                type: String,
                default: "-logo 1-"
            },
            contentTitle2:{
                type: String,
                default: "-titol 1-"
            },
            contentTitle3:{                
                type: String,
                default: "-imgURL 1-"
            },
            contentTitle:{
                type:Array,
                default: {logo:"logo2_default***",titol:"titol2_default***",imgURL:"urlImg2_default***"}
            },
            contentTitleArray:{
                type:[Array,Object],
                default:[{dato:"d1",data:"e1"},{dato:"d2",data:"e2"},{dato:"d3",data:"e3"}]
            }
    }
}
</script>

<style></style>

