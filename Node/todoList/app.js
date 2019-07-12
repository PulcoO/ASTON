let http = require('http');
let url = require('url');
let querystring = require('querystring');


var Tasks = require('./class.js');

// Local storage pour node https://git.coolaj86.com/coolaj86/dom-storage.js.git
var Storage = require('dom-storage');
var localStorage = new Storage('./db.json', { strict: false, ws: '  ' });

let todoList = [
    new Tasks('faire le menage'),
    new Tasks('dormir'),
    new Tasks('comprendre node'),
];

if(localStorage.getItem('tasks')){
    todoList = localStorage.getItem('tasks'); // si local storage existe alors remplacement du tableau par la valeur du local storage avec la key ="eleves"
}

let server = http.createServer(function(req,res){
    let page = url.parse(req.url).pathname;
    let parameters = querystring.parse(url.parse(req.url).query);
    let code200 = res.writeHead(200,{"content-type":"text/html; = charset=charset=utf-8"});
    console.log(parameters);
    

    //redirection
    switch(page){
        case '/': // Ma liste
            // Front : ici bouton en front qui redirige vers le add, delete, edit
            // Front : affichage List
            res.write(JSON.stringify(todoList))
            console.log(todoList) // ca marche
            code200;
            break;
        case '/add':
            res.writeHeader(200 , {"Content-Type" : "application/json"});
            
            //ici rajouter le fait que si la tache n'existe pas alors l'ajouter au tableau

            for(i = 0; i < todoList.length ; i++){
                todoList.push(new Tasks(parameters["nom"]));
                console.log(todoList);
            }
            res.write(JSON.stringify(todoList));
            //ici traitement de la donnée add
            // redirection vers '/'   
            code200;
            break;
        case '/delete':
            res.writeHeader(200 , {"Content-Type" : "application/json"});
            //ici traitement de la donnée delete
            // redirection vers '/'
            code200;
            break;
        case '/edit':
            res.writeHeader(200 , {"Content-Type" : "application/json"});
            //ici traitement de la donnée edit
            // redirection vers '/'
            code200;
            break;
        default :
            res.writeHead(404,{"content-type":"text/html; = charset=charset=utf-8"});
            res.write('<h1>404</h1>')

    }

    res.end();

})
server.listen(9090);//port ecoute pour le serveur web