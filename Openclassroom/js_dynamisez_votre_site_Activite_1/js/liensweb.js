/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

const section = document.querySelector("#contenu");

listeLiens.forEach(element => {

    let elementA = document.createElement("a");
    let titre = document.createTextNode(element.titre + " " );
    elementA.appendChild(titre);
    elementA.style.color = "#428bca";
    elementA.style.textDecoration = "none";
    
    
   
    let elementSpan = document.createElement("span");
    let elementBr = document.createElement("br");
    let url = document.createTextNode(element.url + "/n");
    let auteur = document.createTextNode("Ajouté par : " + element.auteur);

    elementA.href = url.textContent;


    elementSpan.appendChild(url);
    elementSpan.appendChild(elementBr);
    elementSpan.appendChild(auteur);


    let div = document.createElement("div");
    div.className = "lien";
    div.appendChild(elementA);
    div.appendChild(elementSpan)
    section.appendChild(div);
    

});


// TODO : compléter ce fichier pour ajouter les liens à la page web