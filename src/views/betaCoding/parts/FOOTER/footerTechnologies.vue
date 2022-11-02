<template>
    <ul>
        <li v-for="(icon,index) in iconsArray">
            <img :src="fullURLIcon(index)" alt="">
        </li>
    </ul>
</template>

<script setup>
    let urlIcons = "media/imatges/icons/"
    let iconsArray = ["logo_axios.png",
                    "logo_bootstrap5.png",
                    "logo_css3.png",
                    "logo_git.png",
                    "logo_github.png",
                    "logo_html5.png",
                    "logo_js.png",
                    "logo_laragon.png",
                    "logo_nodejs.png",
                    "logo_npm.png",
                    "logo_tailwind.png",
                    "logo_vsc.png",
                    "logo_vue.png"]

    function fullURLIcon(index){
        return urlIcons + iconsArray[index]
    }
</script>

<style scoped>
    ul{
        list-style: none;
        display:flex;
        flex-direction: row;

        justify-content: space-between;
        flex-wrap: wrap;
    }
    li img{
        height: 2rem;
    }
</style>
