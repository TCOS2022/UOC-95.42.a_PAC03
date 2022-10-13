/* 
// **************************************************** //
    TITOL:

    DATA/VERSIO: 20220926 / 2.0.0
    AUTOR:

    DESCRIPCIO:
    Arciu router que conte les dades necesaries per anar fent els salts

    IN  ->
    OUT ->

    USE:

    HISTORIC VERSION:
// **************************************************** //
*/

/* Definim les importacions */
import { createRouter, createWebHistory } from "vue-router";

/* Definim les importacions dels moduls de destinacio */
import Home      from "@/views/pages/homeV2.vue";
import Llistat   from "@/views/pages/llistatV1.1.vue";
import Detall    from "@/views/pages/detall.vue";
import Combat    from "@/views/pages/combat.vue";
import Contacte  from "@/views/pages/contact.vue";
import pageError from "@/views/pages/pageError.vue";
import pageTest  from "@/views/pages/paginaTestEmit.vue"
import Llistat2  from "@/views/pages/llistatv1.2.vue"

/* Definim  les rutes de destinacio */
const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/llistat",
        name: "listat",
        component: Llistat
    },
    {
        path: "/detall",
        name: "detall",
        component: Detall
    },
    {
        path: "/combat",
        name: "combat",
        component: Combat
    },
    {
        path: "/contacte",
        name: "contacte",
        component: Contacte
    },
    {
        path: "/tests",
        name: "pageTest",
        component: Llistat2
    },
    {
        path: "/error",
        name: "notFound",
        component: pageError
    },

    /* Nova manera de fer el 'catch all amb *' */
    // Manera antiga: {path: "*", name: "notFound", component: pageError}
    // pathMatch is the name of the param, e.g., going to /not/found yields
    // { params: { pathMatch: ['not', 'found'] }}
    // this is thanks to the last *, meaning repeated params and it is necessary 
    // if you plan on directly navigating to the not-found route using its name
    { 
        path: '/:pathMatch(.*)*', 
        name: 'not-found', 
        component: pageError
    },
    // if you omit the last `*`, the `/` character in params will be encoded when 
    // resolving or pushing
    { 
        path: '/:pathMatch(.*)', 
        name: 'bad-not-found', 
        component: pageError
    }

];

/* Definim la funcio de creacio */
const history = createWebHistory();
  
const router = createRouter({
    history,
    routes,
});

/* Definim les exportacions */
export default router;




