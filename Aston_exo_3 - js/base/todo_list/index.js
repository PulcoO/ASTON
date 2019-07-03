let elementInput = document.querySelector('input');
let elementHelpInput = document.querySelector('.help_input');
let elementListInput = document.querySelector('.list_input');
let elementLi = document.querySelector(".createdLi");

function miroir (event) {
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

elementInput.addEventListener('keyup', miroir, false);

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