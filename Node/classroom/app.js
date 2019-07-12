let http = require ('http');
let url = require ('url');
let querystring = require ('querystring');
// Local storage pour node https://git.coolaj86.com/coolaj86/dom-storage.js.git
var Storage = require('dom-storage');
var localStorage = new Storage('./db.json', { strict: false, ws: '  ' });

let eleves = [] // declaration d'un tableau vide
if(localStorage.getItem('eleves')){
    eleves = localStorage.getItem('eleves'); // si local storage existe alors remplacement du tableau par la valeur du local storage avec la key ="eleves"
}



let server = http.createServer(function(req,res){
    let page = url.parse(req.url).pathname;
    let parameters = querystring.parse(url.parse(req.url).query);
    let code200 = res.writeHead(200,{"content-type":"text/html; = charset=charset=utf-8"});
    console.log(parameters);
    
    


    //redirection 
    switch(page){
        case'/':
            code200
            res.write('<h1>Si vous souhaitez rajouter un éleve dans la liste : </h1>');
            res.write('<h2>Veuillez taper comme suit : /add?prenom=prenom</h2>')
            break
        case'/list':
            code200
            res.write('<ul>');
            for(i=0; i<eleves.length;i++){
                res.write('<li>'+eleves[i]+'<a href = "/delete?index='+ i +'">DELETE</a></li>');
            }  
            
            res.write('</ul>')
            break
        case'/add':
            if(parameters['prenom'] && typeof(parameters['prenom'] === 'string')){
                eleves.push(parameters['prenom']);
                localStorage.setItem('eleves', eleves);
                console.log(localStorage)
                res.writeHead(302 , {'Location' : '/list' // This is your url which you want
            });
                res.end();
            }else if(typeof(parameters['prenom'] != 'string')){
                code200
                res.write('votre paramètre n\'est pas pas une string');
            }else{
                res.writeHead(404,{"content-type":"text/html"});
                res.write('404');
            }
            code200
            break
        case '/delete':
            if (parameters['index'] && parameters['index'] != null && parameters['index'] != ''){
                eleves.splice(parameters['index'],1);
                localStorage.setItem('eleves',eleves);
                res.writeHead(302, {
                    'location' : '/list'
                });

            }
            
            code200
            break

        default : 
            res.writeHead(404,{"content-type":"text/html"});
            res.write('404');
            break

    }
    res.end();
})




server.listen(9090);//port ecoute pour le serveur web


