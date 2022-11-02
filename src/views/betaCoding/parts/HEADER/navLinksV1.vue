<template>
    <ul>
        <li class="linkActivat">
            <span>icon</span>    
            <span>Home</span>
        </li>
        <li>
            <span>icon</span>    
            <span>Llistat</span>
        </li>
        <li>
            <span>icon</span>    
            <span>Detall</span>
        </li>
        <li>
            <span>icon</span>    
            <span>Combat</span>
        </li>
        <li>
            <span>icon</span>    
            <span>Contacte</span>
        </li>
    </ul>
</template>

<script setup>
    // NOTA "setup" permet abreviar la notacio eliminant el export
    // importem els elements qeu ens facin falta
    // importem les llibreries que ens facin falta
    // Exportem el que ens calgui enviar a les vistes
</script>

<style scoped>
    ul{
        list-style: none;
        display:flex;
        justify-content: space-around;
    }
    li{
        display:block;
        margin:0;
        color: blue;
        background-color: lightgreen;
        border:solid orange 0.25rem
    }
    li:hover{
        transform: scale(150%);
    }
    li.linkActivat{
        color:lightgreen;
        background-color: blue;
        font-weight: bolder;
    }
</style>