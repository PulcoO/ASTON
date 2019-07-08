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
let cible = document.getElementById('cible');

function affichage(){
    cible.innerHTML = ''; //je vide ma div cible
    for(i = 0; i < list.length ; i++){
        cible.innerHTML +='<div class="row my-3"><div class="col-1"><button class="btn btn-danger btn-sm" onclick="supprime('+i+')">X</button></div><div class="col-4">'+list[i].nom+'</div><div class="col-3">'+list[i].date+'</div><div class="col-2"><input type="checkbox" value="'+list[i].fini+'"></div><div class="col-2"><input type="checkbox" class="archive" value="'+list[i].archive+'"></div></div>';
    }
}

function add(){
    let nom = document.getElementById('nom');
    let date = document.getElementById('date');
    list.push(new Todo(nom.value,'',new Date(),date.value,false,false));
    nom.value = '';
    date.value = '';
    affichage();
}

function check() {
    document.getElementById("archive").checked = true;
}

function uncheck() {
    document.getElementById("archive").checked = false;
}

function supprime(i){
    list.splice(i,1);
    affichage();
}
document.getElementById('envoi').addEventListener('click',add,false);

affichage();