let express = require('express');
// creation du serveur
let app = express();

app.get('/',function(req,res){
    res.setHeader('Content-type','text/plain');
    res.send('vous etes a la home');
})

.get('/liste',function(req,res){
    
    res.setHeader('Content-type','text/plain');
    res.send('vous etes sur la liste');
})
.get('/prenom/:prenom',function(req,res){
    res.setHeader('Content-type','text/plain');
    res.send('Yo '+ req.params.prenom + ' t es un con' );
})
//retour 404
app.use((req,res,next)=>{
    res.setHeader('Content-type','text/plain');
    res.status(404).send('Page introuvable')
})

app.listen(9090);