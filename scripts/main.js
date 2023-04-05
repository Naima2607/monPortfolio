window.onload = init;

function init(){
    
    //Je recupere ma balise main afin de pouvoir créer du contenu
    // dynamiquement(sans rechargement de page) avec Javscript qui manipule le DOM
    var domMain = document.getElementById( 'baliseMain');

    //
    var domP = document.createElement('p');
    domP.innerHTML = "Bienvenu sur mon portfolio!!";

    //Une fois la balise bien préparée, je la rajoute dans domMain
    domMain.appendChild(domP);

}