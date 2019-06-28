function sayHello(name) {
    name = name || "";
    // l'equivalent de if name = true if else name = false
    return 'hello ' + name;
}


document.write(sayHello('Mathieu').toUpperCase());

let f = function () {
    return 'test';
};

f();

/////// distinction entre VAR et LET ////////////////

//var name = 'var';
let name = 'let';

(function () {
        // methode pour déclarer une function
        alert('la fonction anonyme fonctionne');
        let name = 'aston';
        window.name = name;
    }() // ici on la lance
);

console.log(name);

//////////// LES FONCTIONS FLECHEES ///////////

let funky = () => {
    return 'green Arrow';
};
// let funky = () => return 'green Arrow';

// let funky = () => 'green Arrow';

console.log(funky());

///////////////// LES CALLBACK ///////////////

function callMe(callback) {
    console.log('connexion a la bdd');
    console.log('initialize...');
    setTimeout(callback(), 3000);
}

callMe(function () {
    console.log('boom');
});


/////////////////// Modifier le titre //////////////

let h1 = document.getElementById('h1');
let p = document.querySelector('p');
const h1default = document.getElementById('h1').innerHTML;
const colordefault = document.getElementById('h1').style.color;
const pHauteur = p.offsetTop;
console.log(pHauteur);


h1.addEventListener('mouseenter', function () {
    if (h1.innerHTML == h1default) {
        h1.innerHTML = 'Ta mère la pute';
        h1.style.color = "yellow";
    } else {
        h1.innerHTML = h1default;
        h1.style.color = colordefault;
    }


});

window.onscroll = function() {myScrollFunction(p)};

function myScrollFunction(element){
    if (document.body.scrollTop > element.offsetTop || document.documentElement.scrollTop > element.offsetTop){
        element.className = ".slide";
    }
}
//h1.addEventListener('mouseover', function (){alert('boom')} )

let elementInput = document.querySelector('input');
let elementHelpInput = document.querySelector('.help_input');
let elementListInput = document.querySelector('.list_input');

elementInput.addEventListener('keyup', miroir, false);

function miroir (event) {
    console.log(event.keyCode);
    elementHelpInput.textContent = elementInput.value;
    if (event.keyCode === 13){
        console.log(elementInput.value.length);
        if(elementInput.value.length > 20){
            for (let i=20;i<elementInput.value.length;i+=20){
                elementInput.value[i] += '\n';
            }
        }
        let liTextContent = elementInput.value;
        creationElementsli (liTextContent);
    }
}

function creationElementsli (liTextContent){
    var newLi = document.createElement("li");  // Create a <li> element
    var textLi = document.createTextNode(liTextContent); // enregistrement du text
    
    var newA = document.createElement("a"); // create a <a> element
    
    var newIcone = document.createElement("i") // creation d'une classe i
    newIcone.className = "fas fa-trash"; // attribution de la classe

    newA.appendChild(newIcone); // introduction de l'icone dans le a
    
    newLi.appendChild(textLi); //insert text
    newLi.id = Date.now(); // ajout de l'id
    newLi.className = "createdLi"; // ajout d'une class
    newLi.appendChild(newA); // instroduction du a dans le li !
    elementListInput.appendChild(newLi); // mise en forme de l'élement dans son parent
    elementInput.value = null; // vide le champs text


    
}

let elementLi = document.querySelector(".createdLi");

elementListInput.addEventListener('click', function (event){
    console.log(event.target.tagName);
    const element = event.target;
    if (element.tagName === "I"){ // bien mettre ca en maj ici
        //element.style.textDecoration = "line-through"; // barré la li
        //elementListInput.removeChild(element); // supprime le li si clic
        elementListInput.removeChild(element.parentNode.parentNode); // supprime le li si clic sur la poubelle
    }else if (element.tagName === "A"){
        elementListInput.removeChild(element.parentNode)
    }
})

