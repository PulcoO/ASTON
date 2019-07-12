let http = require('http');
let url = require('url');

let server = http.createServer(function(req,res){ //on cree le serveur et on recoit une requete et on renvoie un reponse
    let page = url.parse(req.url).pathname; //recupere le chemin de l'url
     //code Status et type de retour
    switch(page){
        case '/':
            res.writeHead(200, {"Content-type":"text/html"});
            res.write('ici c est l accueil');
            break;
        case '/test':
            res.writeHead(200, {"Content-type":"text/html"});
            res.write('ici c est la vie');
            break;
        default:
            res.writeHead(404, {"Content-type":"text/html"});
            res.write('404');
            break;
    }
    
    
    
    res.end();
})

server.listen(9090); //port ecoute pour le serveur web 