let http = require ('http');
let url = require ('url');
let querystring = require ('querystring');

let server = http.createServer (function (req,res){//on cree le serveur et on recoit une requete et on renvoie un reponse
    let page = url.parse(req.url).pathname;//recupere le chemin de l'url
    
    let params = querystring.parse(url.parse(req.url).query); // découpage de l'emsemble des parametre envoyé de l'url pour l'introduire dans une tableau d'objets
    console.log(params);
    if (params['prenom']){
        console.log('coucou je suis ' + params['prenom'] );
    }else{
        res.writeHead(404,{"content-type":"text/html"}); // renvoi la réponse n'existe pas
        res.write('dsl je n\'ai pas ton paramètre');
    }
    //code Status et type de retour
    switch (page){
        case '/':
            res.writeHead(200,{"content-type":"text/html"}); // renvoi la réponse ok 
            res.write('accueil');
            break
        case '/apero':
            res.writeHead(200,{"content-type":"text/html"});
            res.write('apero time');
            break
        case '/tapas':
            res.writeHead(200,{"content-type":"text/html"});
            res.write('tapas time');
            break
        default :
            res.writeHead(404,{"content-type":"text/html"}); // renvoi la réponse n'existe pas
            res.write('404');
            break
    }

    
    res.end();
})

server.listen(9090);//port ecoute pour le serveur web 