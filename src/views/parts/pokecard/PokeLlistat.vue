<template>
    <div class="pokeLlistat">
        <div>
            <!--
            <h3>ARRAY DE DADES REBUDES</h3>

            <p>**********************************</p>
            <p>Dades de visualitzacio1: {{ itemView1 }} </p>
            <p>**********************************</p>
            <p>Dades de visualitzacio2: {{ itemData1 }} </p>
            <p>**********************************</p>
            -->
        </div>
        <div class="combatResults"></div>
        <br><br>
        <ul class="llistatPokes0">
            <!-- <div v-for="(item, index) in array" :key="index">{{ index }}. {{ item }}</div> -->
            <!-- <pokeCard0 :itemView="enviar_itemView()" :itemData="enviar_itemData(index)"/> -->
            <li v-for="(item,index) in itemData1" :key="index">
                <!-- <span>ELEMENT Nº: {{index}} / DADES: {{enviar_itemData(index)}}</span> -->
                <!-- canviar itemView entre "llistat/detall/combat/full" genera les diferents vistes -->
                <PokeCard :itemView="enviar_itemView()" :itemData="enviar_itemData(index)"/>
            </li>
        </ul>
        <br>

    </div>
</template>

<script>
// Definim imports
import PokeCard from "@/views/parts/pokecard/PokeCard.vue"
// Definim export
export default {
    name:"PokeLlistat.vue",
    components:{PokeCard},
    props:{
        items:{},
        itemView1:{
            type: String,
            default:"llistat"
        },
        itemData1:{
            type: [Array,Object],
            default:()=>{return{}}
        }
    },
    data:function(){return {}},
    methods:{
        enviar_itemView:function(){return this.itemView1},
        enviar_itemData:function(z){
            console.log("Dades enviades a la pokecard: ",this.itemData1[z])
            return this.itemData1[z]
        }
    }
}
</script>

<style scoped>

.pokeLlistat{
    background-color: lightcoral;
    width: 90%;
    margin:0 auto;
    padding:1rem;
}
.pokeLlistat ul.llistatPokes0{
    display:flex;
    list-style: none;
    flex-wrap: wrap;
}
.pokeLlistat ul.llistatPokes0 li{
    min-width: 20%;
    margin-top: 0.5rem;
}

</style>