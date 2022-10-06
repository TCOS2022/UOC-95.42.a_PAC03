<!--
// **************************************************** //
    TITOL: mainFiltreV1_optionAPI.vue

    DATA/VERSIO: 20221001 / 1.0.0
    AUTOR: T.C.O.S

    DESCRIPCIO:
    component filtre defindia amb optionAPI.
    Rebem un array amb els noms, i el component te un INPUT que genera un filtre de text
    Retornem un array al els element de entrada que compleixen el criteri del filtre

    IN  -> array ["a","a","a","a","a","a","a","a","a"]
    OUT -> array ["a","a","a","a","a","a","a","a","a"]

    NOTA: Recordar que podem pasar UNA FUNCIO tambe com a parametre, que retorni el array "burro"

    USE: <mainFiltreV1_optionAPI :dadesArray = '["a","a","a"]' ..... />
    USE: <mainFiltreV1_optionAPI :dadesArray = 'func_getArrayENTRADA' ..... />

    HISTORIC VERSION:

    NOTES:
    /**
       * Descripcio generable al JSDoc
       * @values , @example, @deprecated, @see, @link, @author, @since, @version, @ignore
    */

    URL: https://lenguajejs.com/vuejs/componentes/options-api/

// **************************************************** //
-->

<template>
    <!-- Comment -->
</template>

<script>
/* Podem definir aqui "fora", variables i functions i cridarles a dintre del export .... */
/* Definim variables de us local que no cal exportar ... */

/* Definim les funcions auxiliars */
function initializer(){}

export default {
    /* Definim un nom,opcional, pel component */
    name: "mainFiltreV1_optionAPI",
    /* Definim les props que son les ENTRADES al component */
    props: {
        dadesArray:{
                    type: Array,
                    default: ["alias", "beto", "Cedric", "Humor", "Atlante", "alita", "Chenoa", "Shakira", "Chewaaka"]
        }
    },
    /* Definim les variables "locals" del component i que son "exportades" al template */
    data() {
        return {
            ENTRADA: this.dadesArray, // Fem servir this.variable per referiri-nos a les variables definides al objecte
            SORTIDA: [],
            FILTRE: "",
            FILTRE_OPTIONS: "OP1"
        }
    },
    /* Funcions auxiliars */
    computed: {},
    /* Funcions del component */
    methods: {},
    /* Funcions que s executen quant pasa "algo" ... */
    watch: {},
    /* Definim les dades o events de SORTIDA que es retornen al parent .... */
    emits: ["SORTIDA",this.SORTIDA],
    /* ¡¡¡ HOOKS !!!  */
    /* Quant esta disponible el element, aqui va el INITIALIZE */
    mounted() {
        /* Notificacio a la consola */
        console.log("El component " + this.$options.name + " esta [MUNTAT].");
        initializer();
    },
    /* Quant en fan canvis en les variables ....  */
    updated() {
        /* Notificacio a la consola */
        console.log("El component " + this.$options.name + " esta [UPDATED].");        
    }
}
</script>

<style>
    /* comment */
</style>