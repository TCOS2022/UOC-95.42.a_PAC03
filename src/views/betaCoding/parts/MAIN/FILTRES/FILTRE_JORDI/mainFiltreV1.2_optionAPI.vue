<!--
// **************************************************** //
    TITOL: mainFiltreV1.2_optionAPI.vue

    DATA/VERSIO: 20221012 / 1.2.0
    AUTOR: T.C.O.S

    DESCRIPCIO:
    component filtre definit amb optionAPI.
    Rebem un array amb els noms, i el component te un INPUT que genera un filtre de text
    Retornem un array al els element de entrada que compleixen el criteri del filtre

    IN  -> array ["a","a","a","a","a","a","a","a","a"]
    OUT -> array ["a","a","a","a","a","a","a","a","a"]

    NOTA: Recordar que podem pasar UNA FUNCIO tambe com a parametre, que retorni el array "burro"

    USE: <<mainFiltreV1.1_optionAPI :toFilter = "..." @fromFilter = "..." />

    HISTORIC VERSION:

    NOTES:
    /**
       * Descripcio generable al JSDoc
       * @values , @example, @deprecated, @see, @link, @author, @since, @version, @ignore
    */

    URL: https://lenguajejs.com/vuejs/componentes/options-api/

    console.log("INICI FUNCIO: " + arguments.callee.name)
    console.log("INICI FUNCIO: " + arguments.callee.name + " FINAL RESULT: " + result0)

// **************************************************** //
-->

<template>
    <div class="template">
        <form class="filtre1">
            <fieldset>
                <h3 class="filtreTitol"> FILTRE !!!</h3>
            </fieldset>
            <fieldset>
                <label for="filtreInput">FILTRE </label>
                <input @keyup="updatingFilter" type="text" id="input1" name="filtreInput" placeholder="Posi aqui el text que vulgui comparar amb la entrada"  autocomplete="off">
            </fieldset>
            <fieldset class="filtreRadioButtons">
                <h4>Tria com vols que es faci el cribatge</h4>
                <input type="radio" id="op1" name="options1" value="OP1">
                <label for="op1">Que comenci igual</label><br>
                <input type="radio" id="op2" name="options1" value="OP2" disabled>
                <label for="op2">Que contingui el text</label><br>
                <input type="radio" id="op3" name="options1" value="OP3" disabled>
                <label for="op3">Que contingui les lletres independents</label>
            </fieldset>
            <!-- SOLS PER EFECTES DE DEBUGGING  INICI -->
            <fieldset>
                ENTRADA ARRAY : <span id="arrayInput">     </span> <br>
                DADES FILTRE  : <span id="filtre1">        </span> <br>
                OPTIONS       : <span id="filtre1_options"></span> <br>
                SORTIDA FILTRE: <span id="arrayOutput">    </span> <br>

            </fieldset>
            <!-- SOLS PER EFECTES DE DEBUGGING  FINAL -->
        </form>
    </div>
</template>

<script>
/* Definim IMPORTS */

/* Definim EXPORT */
export default {
    /* -- OptionAPI FORMAT -- */
    /* Definim un nom, opcional, pel component */
    name: "mainFiltreV1.2_optionAPI",

    /* Definim les props que son les ENTRADES al component, JA son REACTIVES */
    props: {
        toFilter:{
            type: Array,
            default: ["alias", "Sherezade", "Cedric", "Humor", "She-Hulk", "Atlante", "Humbertus", "alita", "Chenoa", "Shakira", "Chewaaka", "Hum"]
        }
    },

    /* Definim les variables "locals" del component i que son "exportades" al template */
    data:function(){
        return {
            ENTRADA:this.toFilter, // Fem servir this.variable per referir-nos a les variables definides al objecte
            SORTIDA:"",
            FILTRE:"",
            FILTRE_OPTIONS:"",
        }
    },

    /* Funcions auxiliars */
    computed: {},

    /* Funcions del component */
    methods: {
        printVariables: function(){
            console.log("Imprimint valors de les variables")
            console.log("FILTRE -> toFilter: ", this.toFilter)
            console.log("FILTRE -> ENTRADA:  ", this.ENTRADA)
            console.log("FILTRE -> FILTRE:   ", this.FILTRE)
            console.log("FILTRE -> SORTIDA:  ", this.SORTIDA)
        },
        /* Funcio qeu envia dades, a traves del EMIT, al parent, la crida el @keyup del input del form */
        from_Filter: function(){
            console.log(" Funcio qeu s  executa al evnet KEYUP del input ")
            /* indiquem el nom que ha de fer servir el receptor per capturar, i les dades .... 
            i fem el "emit" aqui i aixi no cal afegir-lo als emits del esport */
            this.$emit("fromFilter", this.SORTIDA)
        },
        /* Funcio setup - initialize */
        filtre_initializer: async function(){
            /**
            * Funcio de setup
            * @values , @example, @deprecated, @see, @link, @author, @since, @version, @ignore
            */
            
            console.log("INICI FUNCIO: FILTRE INITIALIZER ")
            //this.printVariables()
            //this.simular_output()

            /* Posem els valors per defecte */ 
            console.log("Asignant valors al inici ...")
            this.ENTRADA = ["alias", "beto", "Cedric", "Humor", "Atlante", "alita", "Chenoa", "Shakira", "Chewaaka"]
            this.ENTRADA = this.toFilter
            this.SORTIDA = this.tofilter
            this.FILTRE  = ""
            this.FILTRE_OPTIONS = "OP1"

            /* activem la opcio del op1 .... */ 
            console.log("Asignant valors a les opcions ...")
            const opcio_op1 = document.querySelector("#op1")
            opcio_op1.checked=true

            /* Asignacio de events al input */
            console.log("Asignant event al input ...")
            const input1 = document.querySelector('[name="filtreInput"]')
            input1.addEventListener("keyup", this.validar_filtre, false);

            /* Asignacio de events als radioButtons */
            console.log("Asignant events als radiobuttons ...")
            const radioBtns = document.querySelectorAll('[name="options1"]')
            radioBtns.forEach(radioBtn => {
                radioBtn.addEventListener("click", this.validar_radioBtn, false);
            });

            /* Mostrem sortida */
            console.log("Mostrant dades de sortida ...")
            this.ENTRADA=this.toFilter
            this.simular_output()
            //console.log("INICI FUNCIO: " + arguments.callee.name + " / FINAL")
            console.log("FINAL FUNCIO: FILTRE INITIALIZER")
        },
        /* Funcio que simula la sortida enviant els resultats al form */
        simular_output: function (){
            /**
            * funcio que simula la sortida de dades
            * @values , @example, @deprecated, @see, @link, @author, @since, @version, @ignore
            */

            const entrada = document.querySelector("span#arrayInput")
            const filtre  = document.querySelector("span#filtre1")
            const opcions = document.querySelector("span#filtre1_options")
            const sortida = document.querySelector("span#arrayOutput")

            entrada.innerHTML = this.ENTRADA
            filtre.innerHTML  = this.FILTRE
            opcions.innerHTML = this.FILTRE_OPTIONS
            sortida.innerHTML = this.SORTIDA

            /* I fianalment retornem al exterior el resultat */
            this.printVariables()
            this.from_Filter()
        },
        /* Funcions de buscar un char en un string */
        searchCharInString: function (lletraBuscada,paraulaEntrada){
                /**
                * funcio que busca si un caracter esta contingut en una cadena 
                * @values , @example, @deprecated, @see, @link, @author, @since, @version, @ignore
                * Consultar: https://www.fwait.com/how-to-check-if-string-contains-characters-from-array-in-javascript/
                */
                
                /*
                Val, el primer sera convertir la paraula en un string.
                Despres recorrerem el string comparant amb la lletra, si tenim coincidencia, acabem amb TRUE
                    NOTA:   Si fems ervir foreach es molt facil, pero em de recorrer TOTA la praula, si fem servir el FOR 
                            lalvors em de calcular primer la llargada del array pero podrem saltar en qulsevol punt
                Si no tenim cap coincidencia, acabem aamb FALSE
                */ 

                /* Definim les variables locals */
                let resultat0 = false

                /* convertim la paraula de entrada en un string */ 
                paraulaEntrada = paraulaEntrada.split('')

                /* busquem dintre del array */
                paraulaEntrada.forEach(lletraParaula => {
                    if(lletraParaula == lletraBuscada){
                        /* Val!!! ja em trobat al menys 1 coincidencia, canviem el resultat a TRUE */
                        resultat0=true; 
                    }
                });

                /* retornem el resultat */
                console.log ("FUNCIO: searchCharInString(lletraBuscada,paraulaEntrada)")
                console.log("BUSCAR/ENTRADA/RESULT: ", lletraBuscada, paraulaEntrada, resultat0)
                return resultat0
        },
        searchCharInStringPositioned: function (lletraBuscada,paraulaEntrada,posicioLletra){
            /**
            * funcio que busca si un caracter esta contingut en una cadena 
            * @values , @example, @deprecated, @see, @link, @author, @since, @version, @ignore
            * Consultar: https://www.fwait.com/how-to-check-if-string-contains-characters-from-array-in-javascript/
            */

            /* Compliquem la funcio anterior definint qeu el "TRUE" ha de ser en la posicio indicada */

            /* Definim les variables locals */
            let resultat0 = false

            /* convertim la paraula de entrada en un string */ 
            paraulaEntrada = paraulaEntrada.split('')

            /* busquem a la posicio */
            if(paraulaEntrada[posicioLletra] == lletraBuscada) {resultat0 = true}

            /* retornem el resultat */
            console.log ("FUNCIO: searchCharInStringPositioned(lletraBuscada,paraulaEntrada,posicioLletra)")
            console.log("BUSCAR/ENTRADA/POSICIO/RESULT: ", lletraBuscada, paraulaEntrada, posicioLletra,resultat0)
            return resultat0
        },
        /* Funcions de OP1, OP2 i OP3 */
        /*
        function op1(cadenaFiltre){// comença igual que el filtre }
        function op2(cadenaFiltre){// inclou el filtre, en algun lloc del nom }
        function op3(cadenaFiltre){// inclou les lletres del filtre en qualsevol lloc del nom }
        */
        op1V0: function (){
            /* comença igual que el filtre */
            /* Definim varaibles locals */
            let limitScan = 0
            let resultat0=false
            let sortida0 = []
            let contadorLletres = 0
            console.log("FILTRE/ENTRADA ES:")
            console.log(this.FILTRE,this.ENTRADA)
            console.log(typeof(this.FILTRE),typeof(this.ENTRADA),typeof(this.toFilter))
            let filtre0 = this.FILTRE
            let entrada0 = this.ENTRADA
            let paraula0 = ""
            let paraula1 = []
            /* Mirem cuants caracters em de comparar */
            let filtre1 = filtre0.split("")
            let maxCharsTested = filtre0.length()
            /* Revisem CADA element de la llista de ENTRADA */ 
            (entrada0).forEach(paraula0 => {
                /* Convertim la praula del array de entradas en un array .... */
                console.log("COMPARANT FILTRE/PARAULA [" + filtre0 + "] AMB [" + paraula0 + "]")
                paraula1 = paraula0.split('')
                /* Validem quin array es mes lalrg, el filtre o la paraula, per limitar la comparacio  */
                if(maxCharsTested <= paraula1.length){limitScan = maxCharsTested}else{ limitScan = paraula1.length}
                /* I ara mirarem si els chars de la paraula son iguals als del filtre */
                for(let x=0; x<limitScan; x++){
                    /* Comprovem cada lletra valida ... */ 
                    console.log("     COMPARANT " + paraula1[x] + " AMB " + filtre1[x])
                    if (paraula1[x].toLowerCase()==filtre1[x].toLowerCase()) {
                        contadorLletres++
                        console.log("     Letra [" + filtre1[x] + "] aceptada! [" + contadorLletres + "]")
                    } else {
                        console.log("     Letra [" + filtre1[x] + "] DOLENTA! [" + contadorLletres + "]")
                        break
                    }
                }
                // Valeee!!! ... si ara tenim que contadorLletras = maxCharsTested es que la paraula conte el filtre!!!!
                // Per tant, afegim la paraula a la llista de sortida i reinicem contadors ....
                if(contadorLletres == limitScan){
                    console.log("     Paraula " + paraula0 + " aceptada!")
                    sortida0.push(paraula0)
                } else {
                    console.log("     Paraula " + paraula0 + " DOLENTA!")
                }
                contadorLletres = 0
                paraula1 = []
            });
            /* Presentem els resultats: */
            console.log("ENTRADA:  ", this.ENTRADA)
            console.log("FILTRE :  ", this.FILTRE)
            console.log("SORTIDA:  ", sortida0)
            this.SORTIDA = sortida0
            this.simular_output()
        },
        /* Funcio de filtratge */
        validar_filtre: function (){
                /**
                * funcio de filtratge
                * @values , @example, @deprecated, @see, @link, @author, @since, @version, @ignore
                */

                /* Variables locals */ 
                const btnInput = document.querySelector("#input1")
                const opcions  = document.querySelector("span#filtre1_options")          
                /* Recuperem cadena del input */
                this.FILTRE = btnInput.value
                /* Seleccio principal */
                switch(this.FILTRE_OPTIONS){
                    case ("OP1"):
                        // comença igual que el filtre ;
                        // op1(FILTRE);
                        this.op1V0()
                        break;
                    case ("OP2"):
                        // inclou el filtre ;
                        this.op2(FILTRE);
                        break;
                    case ("OP3"):
                        // inclou lletres del filtre ;
                        this.op3(FILTRE);
                        break;
                    default:
                        //default statement or expression;
                        console.log("Una opcio .... INESPERADA!!!")
                }
                /* retornem resultats */
                console.log("OPCIO ACTIVA -> ", this.FILTRE_OPTIONS)
                console.log("FILTRATGE    -> ", this.FILTRE)
                this.simular_output()
        },
        /* Funcions dels radioBtns */
        validar_radioBtn: function (event){
            /**
            * funcio de filtratge
            * @values , @example, @deprecated, @see, @link, @author, @since, @version, @ignore
            */

            const btnInput = document.querySelector("#input1")
            const opcions  = document.querySelectorAll('[name="options1"]')
            console.log(event)
            /* RESET de les dades del INPUT */ 
            btnInput.value=""
            this.FILTRE_OPTIONS = event.target.attributes.value.value
            event.checked = true
            btnInput.focus()
            simular_output()
        }
    },

    /* Funcions que s executen quant pasa "algo" ... */
    watch: {},

    /* Definim les dades o events de SORTIDA que es retornen al parent .... */
    /*emits: "",*/

    /* ¡¡¡ HOOKS !!!  */
    /* Quant esta disponible el element, aqui va el INITIALIZE !!! */
    mounted() {
        /* Notificacio a la consola */
        this.filtre_initializer();
        console.log("El component " + this.$options.name + " esta [MUNTAT].");
    },
    /* Quant en fan canvis en les variables ???? ....  */
    updated() {
        /* Notificacio a la consola */
        //this.ENTRADA = this.toFilter 
        //this.simular_output()
        console.log("ENTRADA/FILTRE/SORTIDA")
        console.log(this.ENTRADA)
        console.log(this.FILTRE)
        console.log(this.SORTIDA)
        console.log("El component " + this.$options.name + " ha estat [UPDATED]."); 
   
    }
}

/* Definim funcions auxiliars */



</script>

<style>
    /* comment */
</style>