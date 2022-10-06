<!--
// **************************************************** //
    TITOL: pokeCardV2

    DATA/VERSIO: 20220925 / 2.0.0
    AUTOR:

    DESCRIPCIO:
    Component que dibuixa una pokeCard, be a partir de sols el id o be amb un array amb les dades
    Tambe espera un 'viewType' per determinar quina vista volem que generi
    SI no reb res, pintara una vista 'detall' del pokeID=0

    IN  -> <pokeCardV2 :itemArray='[{viewType:”llistat”}, {object pokeAPI}]' />
    OUT ->

    USE:

    HISTORIC VERSION:
    2.0.0 Codi basic adaptat a html-vue amb un minim de JS

// **************************************************** //
-->

<template>
    <div class="pokeContainer">
        <article class="pokeCard" id="pokeID">

            <section class="poke_tapa">
                <div class="combat">
                    <img src='media/imatges/pokeCards/pokemonCard_backside2.png' alt=''>
                </div>
            </section>

            <section class="poke_contingut">
                <div class="llistat detall combat">
                    <div class="pokeImg">
                        <div class="pID">
                            <span class="pokeId0">ID:</span>
                            <span class="pokeId1">[ {{ itemArray[1].poke_id }} ] </span>
                        </div>
                        <div class="pImg">
                            <img :src='itemArray[1].imgURL1' alt='Imatge frontal'>
                            <img :src='itemArray[1].imgURL2' alt='Imatge posterior'>
                        </div>
                        <div class="pName">
                            <span class="pokeName0">NOM:</span>
                            <span class="pokeName1"> [ {{ itemArray[1].poke_nom }} ] </span>
                        </div>
                    </div>

                    <div class="pokeData">
                        <div class="pAtk">
                            <span class="pokeAtk0">Atac:</span><br>
                            <span class="pokeAtk1"> [ {{ itemArray[1].poke_atk }} ] </span>
                        </div>
                        <div class="pDef">
                            <span class="pokeDef0">Defensa:</span><br>
                            <span class="pokeDef1"> [ {{ itemArray[1].poke_def }} ] </span>
                        </div>
                    </div>
                </div>

                <div class="combat">
                    <div class="pokeData">
                        <div class="ptypes">
                            <span v-for = "(type1) in itemArray[1].poke_types"  class="pokeType1" > [ {{ type1 }} ] </span>
                        </div>
                    </div>
                </div>

                <div class="llistat">
                    <div class="pokeControls">
                        <button>MES DADES</button>
                    </div>
                </div>

                <div class="detall">
                    <div class="pokeControls">
                        <button>RETORNAR</button>
                    </div>
                </div>
            </section>
        </article>  
    </div>
</template>

<script>
/* Importacions de components */
/* Exportacions a template i outbounds */
export default {
    name: "pokeCardV2",
    props: {
        itemArray:{
            type:[Array,Object],
            default:[
                {viewType:"detall"},
                {poke_id: 0,
                poke_imgURL1: "media/imatges/pokeCards/imatgeNoDisponible_cuadrada.png",
                poke_imgURL2: "media/imatges/pokeCards/imatgeNoDisponible_rodona.png",
                poke_nom: "POKE DEMON MASTER",
                poke_atk: 999,
                poke_def: 999,
                poke_types: ["Terra", "Aire", "Aigua", "Foc", "5º Element"]
                }
            ]
        }
    },
    updated(){
        /* Aquesta funcio s activa CADA cop que s actualiten les dades del component */
        console.log("[UPDATING] pokeCard component")
        console.log(itemArray)
        initializer();
    }
}
/* Funcions auxiliars */
function initializer(){
/* Funcio que:
            1 - comproba els arguments rebuts
            2 - determina si ha de fer consulta a la api externa o no
            3 - comproba si tenim imatges i asigna una per defecte si cal
            4 - Asigna les dades al array de pokeData
            5 - pinta la pokeCard
*/
    console.log("[INITIALIZING] pokeCard component")
    console.log(itemArray)
}
</script>

<style></style>