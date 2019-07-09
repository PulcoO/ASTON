class Todo{
    constructor(nom, contenu, dateCrea, date, fini, archive){
        this.nom = nom;
        this.contenu = contenu;
        this.dateCrea = dateCrea;
        this.date = date;
        this.fini = fini;
        this.archive = archive;
    }
    getNom(){
        return this.nom;
    }
    getContenu(){
        return this.contenu;
    }
    getDateCrea(){
        return this.dateCrea;
    }
    getDate(){
        return this.date;
    }
    getFini(){
        return this.fini;
    }
    getArchive(){
        return this.archive;
    }
    setNom(parametre){
        this.nom = parametre;
    }
    setContenu(parametre){
        this.contenu = parametre;
    }
    setDateCrea(parametre){
        this.dateCrea = parametre;
    }
    setDate(parametre){
        this.date = parametre;
    }
    setFini(parametre){
        this.fini = parametre;
    }
    setArchive(parametre){
        this.archive = parametre;
    }
}

let list = [
    new Todo('chercher du pain','Au super boulanger du coin',new Date(), '2019-08-21', false, false),
    new Todo('Faire des courses','A Hyper U',new Date(), '2019-10-21', false, false),
];
let listArchive = [];

let cible = document.getElementById('cible');

function affichage(archive = false){
    archive ? tableau = listArchive : tableau = list
    cible.innerHTML = ''; //je vide ma div cible
    let message ='';
    for(i = 0; i < tableau.length ; i++){
        message += '<div class="row my-3">';
        message += '<div class="col-1"><button class="btn btn-danger btn-sm" onclick="supprime('+i+')">X</button></div>';
        message += '<div class="col-4">'+tableau[i].nom+'</div>';
        message += '<div class="col-3">'+tableau[i].date+'</div>';
        message += '<div class="col-2"><input type="checkbox" value="'+tableau[i].fini+'"></div>';
        if(archive == true ){
            message += '<div class="col-2"><button class="btn btn-success" onclick="desarchive('+i+')">Liberez</button></div>';
        }
        else
        {
            message += '<div class="col-2"><button class="btn btn-success" onclick="archive('+i+')">Archive</button></div>';
        }
        message += '</div>'
    }
    cible.innerHTML = message;
}

function add(){
    let nom = document.getElementById('nom');
    let date = document.getElementById('date');
    list.push(new Todo(nom.value,'',new Date(),date.value,false,false));
    nom.value = '';
    date.value = '';
    affichage();
}

function archive(i){
    list[i].setArchive = true;
    listArchive.push(list[i]);
    list.splice(i,1);
    affichage();
    console.log(listArchive)
    console.log(list)
}
function desarchive(i){
    listArchive[i].setArchive = false;
    list.push(listArchive[i]);
    listArchive.splice(i,1);
    affichage(true);
    console.log(list);
    console.log(listArchive)
}

function supprime(i){
    list.splice(i,1);
    affichage();
}

let btnToggleArchiveRetour = document.querySelector('#btnArchive');
let textAide = document.querySelector('#text_aide');


btnToggleArchiveRetour.addEventListener("click",function(){
    console.log(btnToggleArchiveRetour.textContent)
    if (btnToggleArchiveRetour.innerHTML == "Archive"){
        btnToggleArchiveRetour.innerHTML = "Retour";
        textAide.innerHTML = "Elements Archivés";
        affichage(true);
        console.log(1);
    }else{
        btnToggleArchiveRetour.innerHTML = "Archive"
        console.log(2)
        textAide.innerHTML = "Elements de la Todo";
        affichage(false);
    }
    
})

document.getElementById('envoi').addEventListener('click',add,false);

affichage();