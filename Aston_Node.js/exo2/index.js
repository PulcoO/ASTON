class Tache {
    constructor (name, content, dateCrea, dateFin, check, done ){
        this.name = name;
        this.content = content;
        this.dateCrea = dateCrea;
        this.dateFin = dateFin;
        this.check = check;
        this.done = done;
    }
    setName (name){
        this.name = name;
    }
    setContent (content){
        this.content = content;
    }
    setCheck(check){
        this.check = check;
    }
    setDone(done){
        this.done = done;
    }
}

let listeTaches = [
    new Tache("Courses",["banane","groseille","litière du chat"],new Date(),"12/12/2019",false, false ),
    new Tache("Faire le Ménage","Lave ton sol grosse kich",new Date(),"08/08/2019", false, false),
    new Tache("Donner a manger au chat","",new Date(),"09/07/2019", false, false),
];



let btnAdd = document.querySelector(".btnAdd");
let btnDone = document.querySelector(".btnDone");
let form = document.querySelector(".form");
let helpInput = document.querySelector(".help_input");

let inputTitre = document.querySelector("#input_Titre");
let inputContenu = document.querySelector("#input_contenu");
let inputDateEnd = document.querySelector("#input_Date_End");

let listContent = document.querySelector(".list_task");

btnAdd.addEventListener("click",function(event){
    form.style.display = "block";
    btnAdd.style.display = "none";
    event.preventDefault();
})
btnDone.addEventListener("click",function(event){
    form.style.display = "none";
    btnAdd.style.display = "block";
    helpInput.style.display = "block";

    setTimeout(function() {
        helpInput.style.display = "none";
    }, 2000);

    let newElement = [
        new Tache(inputTitre.value,inputContenu,new Date(),inputDateEnd,false, false )
    ]
    creationOfElement(newElement);
    event.preventDefault();
})



function creationOfElement(array){
    array.forEach(element => {
        //creation d'un élement h2
        let elementH2 = document.createElement("h1");
        let titre = document.createTextNode(element.name);
        elementH2.appendChild(titre);
        elementH2.style.color = "#428bca";
        //creation d'un elément p
        let elementP = document.createElement("p");
        let contentP = document.createTextNode(element.content);
        elementP.appendChild(contentP);
        //creation d'un élement div et a l'intérieur deux date
        let elementDivDate = document.createElement("div");
        //elementDivDate.style.display = "flex";

        let elementDateCrea = document.createElement("p");
        let contentDateCrea = document.createTextNode(new Date())
        let elementDateFin = document.createElement("p");
        let contentDateFin = document.createTextNode(element.dateFin)

        elementDateCrea.appendChild(contentDateCrea);
        elementDateFin.appendChild(contentDateFin);

        elementDivDate.appendChild(elementDateCrea);
        elementDivDate.appendChild(elementDateFin);

        //creation d'un élément checkbox
        let elementCheckBox = document.createElement("input")
        elementCheckBox.setAttribute("type", "checkbox");

        //creation d'un élement i
        let elementI = document.createElement("i");
        //elementI.className("fas fa-trash");

        //creation de la div.
        let div = document.createElement("div");
        div.style.backgroundColor = "#444";
        //ajout de chaque élement dans la div
        div.appendChild(elementH2);
        div.appendChild(elementP)
        div.appendChild(elementDivDate);
        div.appendChild(elementCheckBox);
        //Fin de l'enchainement ==> creation de la div
        listContent.appendChild(div);
        
    });}

creationOfElement(listeTaches);