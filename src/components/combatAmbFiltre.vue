<template>
<div id="blocFilter">
    <!--
    <h2> BLOC DEL FILTRE </h2>
    <br><br>
    -->
    <div class="filtre">
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
                <input type="radio" id="op1" name="options1" value="OP1" checked>
                <label for="op1">Que comenci igual</label><br>
                <input type="radio" id="op2" name="options1" value="OP2" disabled>
                <label for="op2">Que contingui el text</label><br>
                <input type="radio" id="op3" name="options1" value="OP3" disabled>
                <label for="op3">Que contingui les lletres independents</label>
            </fieldset>
            <!-- SOLS PER EFECTES DE DEBUGGING  INICI -->
            
            <fieldset style="display:none">
                ENTRADA ARRAY : <span id="filtreEntrada">   </span> <br>
                DADES FILTRE  : <span id="filtreInput">     </span> <br>
                OPTIONS       : <span id="filtreOption">    </span> <br>
                SORTIDA FILTRE: <span id="filtreSortida">   </span> <br>
            </fieldset>
            <br><br>
            <fieldset style="display:none">
                <p> DADES CREADES AMB ELS INITIALIZERS </p>
                arrayPokes: <!-- {{ arrayPokes }}  --><br><br>
                arrayNoms : {{ arrayNoms }}
            </fieldset>
            <!-- SOLS PER EFECTES DE DEBUGGING  FINAL -->
        </form>
    </div>

    <div class="llistats">
        <!---->
        <h2 style="display:block"> COMBAT DE  POKECARDS </h2>
        <br><br>
        <!---->
        <!-- <pokeLlistat :itemData="enviarDadeAlLlistat()" /> -->
        <pokeLlistat itemView1="combat" :itemData1="enviarDadesAlLlistat()"/>
    </div>
</div>
</template>

<script>
// Imports necesaris pq funcioni
    // Components
    //import pokeCardComponent from "@/views/parts/pokecard/pokeCardV2.vue"
    import pokeLlistat from "@/views/parts/pokecard/PokeLlistat.vue"
    // Funcions
    import {
        numeroMaximPokesV2, 
        resumedPokePackV1,
        pokePackByArrayV2,
        extractPokeNames,
        extractPokeNames2
    } from "@/assets/js/libs/lib_pokeAPI.js"

    import {
        createArrayNoRepeatedValues
    } from "@/assets/js/libs/lib_Arrays.js"

// Exports
    export default {
        name:"llistatAmbFiltreV1.vue",
        components:{
            //pokeCardComponent,
            pokeLlistat},
        props:{},
        data:function(){ return{
            // Valors generals al template
            arrayNoms:[],
            arrayPokes:[],
            arrayPokesFiltrat:[],
            // Valors pel filtre
            filterEntrada:"",
            filterInput:"",
            filterOption:"",
            filterSortida:"",
            // Valors per enviar al llistat
            itemData:""
            } 
        },
        methods:{
            // Metodes que reben dades (props)
            // Metodes que envien dades (emits)
            // Metodes de inicialitzacio
            initializer: async function(){
                console.log("Inicialitzador de pagina (UP)")
                await this.pokesInitializer()
                await this.filterInitializer()
                //await this.updatingData()
                //await this.activateView()
                // Acabem ....
                console.log("Inicialitzador de pagina (DOWN)")
            },

            // Metodes que afecten als pokes
            pokesInitializer: async function(){
                console.log("Inicialitzador de dades dels Pokes (UP)")
                // Obtenim limit de pokes
                    let maxpokes0    = await numeroMaximPokesV2()
                // Obtenim array 10 valors no repaetits aleatoris
                    let arrayValors0 = await createArrayNoRepeatedValues(1,maxpokes0,10)
                // Obtenim dades dels 10 valors
                    let arrayPokes0 = await pokePackByArrayV2(arrayValors0)
                    //let arrayPokesResumed0 = await resumedPokePackV1(arrayPokes0)
                    this.arrayPokes = await resumedPokePackV1(arrayPokes0)
                // Obtenim noms dels 10 valors
                    //let arrayNoms0 = extractPokeNames(arrayPokes0)
                    this.arrayNoms = extractPokeNames(arrayPokes0)
                // Actualitzem els valors del component
                    //let arrayPokesResumed0 = await resumedPokePackV1(arrayPokes0)
                    //let arrayNoms0 = extractPokeNames(arrayPokes0)
                // Msotrem resultats parcials
                this.printVariables()
                // Acabem ....
                console.log("Inicialitzador de dades dels Pokes (DOWN)")
            },
            pokesPaintlist: function(){
                // Com el v-for no funcion amb objectes reactius, sols agafa el primer valor,
                // Crearem un objecte que si que ho sigui i el ficarem amb innerHTML ...
                console.log("Pintem la llista de pokes ... (UP)")
                // Apuntem els tags del html ...
                let tagLlistat = document.querySelector("#llistatPokes")
                // afagem el array dels noms ....
                // afagem el array dels valors ...
                // Crearem un array amb les dades que volem imprimir, em de deixar sols els nom que tenim a la llista
                let llistaActualitzada = []
                let numValorsFiltre = (this.filterSortida).length;
                let numValorsPokes  = (this.arrayPokes).length;     // que de fet es 10!!!
                //console.log("valors del filtre: ",numValorsFiltre);
                //console.log("Filtre: ", this.arrayNoms);
                // per cada element de la llista gran, mirem si esta a la llista petita
                (this.arrayPokes).forEach(element1 => {
                    // em de mirar si el element.name esta al array de noms .....
                    //console.log("Estem al item:", element1.name);
                    (this.filterSortida).forEach(element2 => {
                        //console.log("Comparant amb: ", element2);
                        if(element1.name == element2){
                            // Si el nom de la llisat de pokes general es igual al de la llista de noms
                            // Afegeim aqeust poke a la llista actualitzada
                            console.log("Afegim element [" + element1.name + "] pq te de nom [" + element2 + "]")
                            llistaActualitzada.push(element1)
                        }else{
                            // no farem res pq no cal fer res ....
                        }
                    }
                    );
                }
                );

                //Pasem la llistaActualitzada a una variable this ....
                this.arrayPokesFiltrat=llistaActualitzada
                console.log("Array enviat a imprimir: ",this.arrayPokesFiltrat)

                // debuggggggggg IN
                    console.log("numero de noms: ", numValorsFiltre)
                    console.log("numero de pokes filtrats: ", llistaActualitzada.length)
                    console.log("pokes a imprimir: ", llistaActualitzada)
                // debuggggggggg OUT
                
                /*
                // Crearem el codi html .... 
                let llistat_inici ="<div><ul>"
                let llistat_final ="</ul></div>" 
                let llistat_continguts = ""
                let elementData = ""
                llistaActualitzada.forEach(element => {
                    elementData = elementData + ' <li><pokeCard /></li>'
                    //elementData = '{"id":' + element.id + ',"img1":"","img2":"","nom":"' + element.name + '","atk":' +  element.pokeAtk +',"def":' + element.pokeDef + ',"typus":[]}';
                    llistat_continguts = llistat_continguts + "<li>" + element.name + " <pokeCardComponent /> </li>"
                })
                let llistatHTML = llistat_inici + llistat_continguts + llistat_final
                // Imprimirem el resultat al template ....
                tagLlistat.innerHTML = llistatHTML
                console.log("Codi html: ", llistatHTML)
                */
            
                // Acabem
                console.log("Pintem la llista de pokes .... (DOWN)")
            },
            
            // Metodes que afecten al filtre
            filterInitializer: async function(){
                console.log("Inicialitzador de dades del filtre (UP)")
                // Definim valor inicials del input, options, entrada i sortida
                console.log("Definint valors inicials ....")
                this.filterEntrada=this.arrayNoms
                this.filterInput=""
                this.filterOption="OP1"
                this.filterSortida=this.arrayNoms
                // Asignacio de events
                // Asignacio de events al input
                console.log("Asignant event (keyup) al input ...")
                const input1 = document.querySelector('[name="filtreInput"]')
                input1.addEventListener("keyup", this.filterRun, false); // filterRun sense () pq No s executi ara)
                // Events dels radiobuttons
                // Print values to template
                this.filterPaintvalues()
                // Acabem ....
                console.log("Inicialitzador de dades del filtre (DOWN)")
            },
            filterPaintvalues: function(){
                //console.log("Pintem (templete/console) les variables del filtre ...")
                // Definim els tags del template
                let tagEntrada = document.querySelector('#filtreEntrada')
                let tagInput   = document.querySelector('#filtreInput')
                let tagOption  = document.querySelector('#filtreOption')
                let tagSortida = document.querySelector('#filtreSortida')
                // Omplim els tags del template
                tagEntrada.innerHTML = this.filterEntrada
                tagInput.innerHTML   = this.filterInput
                tagOption.innerHTML  = this.filterOption
                tagSortida.innerHTML = this.filterSortida
                // pintem la llista de pokes
                this.pokesPaintlist()
            },
            filter_op1V0: function (){
                /* comença igual que el filtre */
                /* Definim varaibles locals */
                let limitScan = 0
                let resultat0=false
                let sortida0 = []
                let contadorLletres = 0
                let filtre0 = this.filterInput
                let entrada0 = this.filterEntrada
                // debuggggg in
                    //console.log("Degugeant valors ....")
                    //console.log("FilterInput: ",    filtre0)
                    //console.log("filterEntrada: ",  entrada0)
                    //console.log("length input: ",   filtre0.length)
                    //console.log("length Entrada: ", entrada0.length)
                // debuggggg out
                let paraula0 = ""
                let paraula1 = []
                /* Mirem cuants caracters em de comparar */
                let filtre1 = filtre0.split("")
                let maxCharsTested = filtre0.length
                /* Revisem CADA element de la llista de ENTRADA */ 
                entrada0.forEach(paraula0 => {
                    /* Convertim la praula del array de entradas en un array .... */
                    //console.log("COMPARANT FILTRE/PARAULA [" + filtre0 + "] AMB [" + paraula0 + "]")
                    paraula1 = paraula0.split('')
                    /* Validem quin array es mes lalrg, el filtre o la paraula, per limitar la comparacio  */
                    if(maxCharsTested <= paraula1.length){limitScan = maxCharsTested}else{ limitScan = paraula1.length}
                    /* I ara mirarem si els chars de la paraula son iguals als del filtre */
                    for(let x=0; x<limitScan; x++){
                        /* Comprovem cada lletra valida ... */ 
                        //console.log("     COMPARANT " + paraula1[x] + " AMB " + filtre1[x])
                        if (paraula1[x].toLowerCase()==filtre1[x].toLowerCase()) {
                            contadorLletres++
                            //console.log("     Letra [" + filtre1[x] + "] aceptada! [" + contadorLletres + "]")
                        } else {
                            //console.log("     Letra [" + filtre1[x] + "] DOLENTA! [" + contadorLletres + "]")
                            break
                        }
                    }
                    // Valeee!!! ... si ara tenim que contadorLletras = maxCharsTested es que la paraula conte el filtre!!!!
                    // Per tant, afegim la paraula a la llista de sortida i reinicem contadors ....
                    if(contadorLletres == limitScan){
                        //console.log("     Paraula " + paraula0 + " aceptada!")
                        sortida0.push(paraula0)
                    } else {
                        //console.log("     Paraula " + paraula0 + " DOLENTA!")
                    }
                    contadorLletres = 0
                    paraula1 = []
                });
                this.filterSortida = sortida0
                /* Presentem els resultats: */
                //console.log("ENTRADA:  ", this.filterEntrada)
                //console.log("FILTRE :  ", this.filterInput)
                //console.log("SORTIDA:  ", this.filterSortida)
                //this.simular_output()
            },
            filterRun: function(e){
                // capturem els tags
                let tagInput   = document.querySelector('#input1')
                let tagOptions = "OP1"
                // Obtenim els valors
                this.filterInput = tagInput.value
                this.filterOption = "OP1"
                // triem la funcio de filtratge
                switch(this.filterOption){
                        case ("OP1"):
                            // comença igual que el filtre ;
                            // op1(FILTRE);
                            //console.log("Activant filtratge segons [" + this.filterOption + "] ...")
                            this.filter_op1V0()
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
                //console.log("Filter is running and a key is pressed!!!")
                //console.log("Valor del input (e): ", e)
                //console.log("Valor del input => ", this.filterInput)
                this.filterPaintvalues()
            },

            // Altres metodes, utils o no
            printVariables: function (){
                // Imprimim a consola les variables disponibles
                //console.log("[arrayNoms] -> " ,this.arrayNoms)
                //console.log("[arrayPokes] -> ",this.arrayPokes)
            },

            // Enviant dades al llistat ....
            enviarDadesAlLlistat: function (){
                // Enviem la llsita actualitzada pq pinti el llistat amb esl pokes seleccionats
                return this.arrayPokesFiltrat
            }
        },
        watch:{},
        // HOOKS !!!!! 
        beforeMount:function(){
            console.log("beforeMounting ....")
            console.log(".... beforeMounting")
        },
        mounted:async function(){
            console.log("Mounting ....")
            await this.initializer()
            console.log(".... Mounting")
        },
        updated(){
            console.log("updating ....")
            console.log(".... updating")
        },
        beforeDestroy(){
            console.log("beforedestroy ....")
            console.log(".... beforeDestroy")
        }
    }
</script>

<style scoped>
#blocFilter{
    background-color: lightyellow;
    width:95%;
    margin:0 auto;
    padding:1rem;
}
</style>