//////////////////// Activité 2 ///////////////////

var listeLiens = [{
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
creationOfElement(listeLiens)
    //////// buttons /////////

document.querySelector("#btn_form").addEventListener('click', function() {
    document.querySelector(".form").style.display = "block"
    document.querySelector("#btn_form").style.display = "none";
})

document.querySelector("#btn_add").addEventListener("click", function() {
    document.querySelector(".form").style.display = "none";
    document.querySelector("#btn_form").style.display = "block";
    document.querySelector(".done").style.display = "block";
    setTimeout(function() {
        document.querySelector(".done").style.display = "none";
    }, 2000);
    let newTitre = document.querySelector(".titre").value;
    let newUrl = document.querySelector(".url").value;
    // newUrl = validateText(newUrl);
    let newAuteur = document.querySelector(".auteur").value;

    let newLiens = [{
        titre: newTitre,
        url: newUrl,
        auteur: newAuteur
    }]

    creationOfElement(newLiens);
})

function validateText(url) {
    if (url.indexOf("http://") == 0 || url.indexOf("https://") == 0) {
        let regexUrl = "https://" + url;
        return regexUrl;
    }
}

function creationOfElement(array) {
    array.forEach(element => {

        let elementA = document.createElement("a");
        let titre = document.createTextNode(element.titre + " ");
        elementA.appendChild(titre);
        elementA.style.color = "#428bca";
        elementA.style.textDecoration = "none";



        let elementSpan = document.createElement("span");
        let elementBr = document.createElement("br");
        let url = document.createTextNode(element.url);
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
}



// TODO : compléter ce fichier pour ajouter les liens à la page web