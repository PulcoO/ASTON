let res;
fetch('http://localhost:9090/listing')
    .then(data =>{
        data.json()
            .then(res =>{
                let cibleList = document.getElementById("cibleList");
                cibleList.innerHTML = '';
                let contenu = '';
                
                let actorList = Object.values(res);
                console.log(Object.values(res));
                for (i=0; i<actorList.length; i++){
                    console.log(actorList[i].name)
                    contenu += '<div>';
                        contenu += '<h2>'+ actorList[i].name +'</h2>';
                     contenu += '</div>';
                    
                    console.log(contenu);
                }
                cibleList.innerHTML = contenu;
                

            })
    })