<template>
    <div class="mainContacte">
        <h1> PAGINA DE CONTACTE</h1>

        <div class="contacteDades">
            <h2>Les nostres dades de contacte</h2>
            <!--
            LOGO:     <img src="media/imatges/logos/fire_001.jpg"  alt="Logo Doom Sons" srcset="" width="150px">
            NOM:      <img src="media/imatges/logos/doom_sons.png" alt="Doom Sons"      srcset="" width="150px">
            -->
            LOGO:     <img class="logo" src="media/imatges/logos/logo_neverEnding-projects.png" alt="Logo NeverEnding Projects" width="100px"><br>
            NOM:      NeverEnding Projects<br>
            ADREÇA:   Rue del Percebe nº 13, sotano 1<br>
            TELEFON:  555 666 555<br>
            EMAIL:    sincasa@sinreglas.zom
        </div>

        <form action="" method="post" class="contacteForm">
            <h2>Formulari de contacte</h2>
            <fieldset>
                <label for="nom">NOM:</label><br>
                <input type="text" name="nom"><br>
                <label for="email">EMAIL:</label><br>
                <input type="email" name="email" id=""><br>
                <label for="descripcio">CONTINGUT:</label> <br>
                <textarea name="descripcio" id="" cols="30" rows="10"></textarea>
            </fieldset>
            <fieldset>
                <p>Cumplimentacio del Reglament de Proteccio de Dades</p>
                <label for="rgpd"></label><br>
                <input type="checkbox" name="rgpd" id=""> SI, Acepto les condicions del rgpd<br>
                <br><br>
                <a href="#">LSSI</a><br>
                <a href="#">Condicions Reglament General de Proteccio de Dades Europeu</a>"<br>
                <a href="#">Drets ARCO</a>
            </fieldset>
            <fieldset>
                <button>NETEJAR</button>
                <button>ENVIAR</button>
            </fieldset>
        </form>

        <div class="contacteMap" style="display:none">
            <h2>Mapes de Situacio .... al Google Maps</h2>
            <div><img src="media/imatges/mapes/earth.jpg" alt="mapa situacio google maps" width="300"></div>   
        </div>

        <div class="contacteVideo" style="display:none">
            <!-- Afegim uns videos de youtube per fer provatures -->
            <h2>Uns videos per pasar l' estona .....</h2>
            <h3>SHAKIRA - Dias de Enero</h3>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/BPidLpADlaM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h3>Phil Rey Gibbons- Samaritan</h3>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/xLOQNNWYils" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <div class="contacteLinks" style="display:none">
            <!-- Afegim uns links recomanats per fer provatures -->
            <h2>Alguns links recomenats per visitar</h2>
            <h3> Enllaços sobre astronomia </h3>
            <a href="http://www.nasa.gov">N.A.S.A</a><br>
            <a href="https:www.skymaps.com/">Sky Maps</a><br>
            <a href="https://stellarium.org/">Stellarium</a>
            <br><br>
            <h3> Canal ROL (D&D 5ed i altres) </h3>
            <a href="https://www.youtube.com/c/lamazmorradepacheco/videos"> La Mazmorra de Pacheco</a>
        </div>

    </div>
</template>

<script></script>

<style>
/*
    .logo {width:75%;text-align:center;margin:auto}
*/
</style>