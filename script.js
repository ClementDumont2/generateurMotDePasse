function passwdGenerator(){
    listeCaracteres = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789";
    
    if(document.querySelector("#caractereSpeciaux").checked == true){
        listeCaracteres += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
    }
    result = "";

    for (let index = 0; index < document.querySelector("#longueurMDP").value; index++) {
        nombreAleatoire = Math.floor(Math.random() * listeCaracteres.length);
        result += listeCaracteres[nombreAleatoire];
        
    }
    document.querySelector("#resultat").innerHTML = "Mot de passe : " + result;
 }

// ajouter cet événement sur le bouton valider
document.getElementById("boutonValider").addEventListener('click', passwdGenerator);