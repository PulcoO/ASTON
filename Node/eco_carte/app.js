let Actor = require('./classActor.js');
let Geo = require('./classGeo.js');
let Address = require('./classAddress');

let express = require('express');
// creation du serveur
let app = express();

//creation du parser via body parser 
let bodyParser = require('body-parser');
app.use(bodyParser.json()) // supporter le type json
app.use(bodyParser.urlencoded({
    extended: true
}))

// Mise en place du stockage !
var Storage = require('dom-storage');
var localStorage = new Storage('./db.json', { strict: false, ws: '  ' });

let actorList = [
    new Actor(00,'Ecole Montessori de Beauséjour',new Geo(-20.89299,55.52815),new Address('461, rue Pointe Allisard','Sainte-marie',97438,"FR"),'01/08/2017 à 14:15','29/12/2017 à 18:36','http://www.montesourire.com',"Fondée par des enseignants et des parents, l'association Montesourire gère l'école Montessori de Beauséjour. Deux ambiances (3-6 / 6-11) permettent la formation et l'éducation des jeunes basés sur la pédagogie Montessori.","Lundi, Mardi, Jeudi et Vendredi : 8h30 - 16h30")
];
console.log(actorList);


if(localStorage.getItem('actorList')){
    actorList = localStorage.getItem('actorList'); // si local storage existe alors remplacement du tableau par la valeur du local storage avec la key ="eleves"
}

app.get('/',function(req,res){
    res.setHeader('Content-type','text/html');
    res.status(200)
    res.redirect(301,'C:\wamp64\www\Node\eco_carte\index.html')

})

.get('/listing',function(req,res){
    res.setHeader('Content-type','application/json');
    res.json(actorList);
    res.status(200);
    res.end()
    
    

})

.post('/add',function(req,res){
    res.setHeader('Content-type','application/json');
    res.send('add');
    res.status(200)
    let cpt = actorList.length;
    actorList.push(new Actor(cpt,body.name,new Address(body.latitude,body.longitude),new Address(body.streetAddress,body.addressLocality,body.postalCode,body.addressCountry),new Date(),new Date(),body.website,body.description,body.openhours_more_infos))
    res.json(actorList);
    res.redirect(301,'/listing')

})
.post('/delete',function(req,res){
    res.setHeader('Content-type','application/json');
    res.send('delete');
})
.post('/update',function(req,res){
    res.setHeader('Content-type','application/json');
    res.send('update');
})
//retour 404
app.use((req,res,next)=>{
    res.setHeader('Content-type','text/plain');
    res.status(404).send('Page introuvable')
})

app.listen(9090);