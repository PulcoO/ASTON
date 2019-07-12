fetch('http://localhost:9090/')
    .then(data =>{
        data.json()
            .then(reponse =>{
                let cibleTodo = document.getElementById("todo");
                cibleTodo.innerHTML = '';
                let contenu = '';
                
                let tasks = Object.values(reponse);
                console.log(Object.values(reponse));
                for (i=0; i<tasks.length; i++){
                    console.log(tasks[i].nom)
                        console.log(contenu);
                    contenu += '<div>';
                        contenu += '<h2>'+ tasks[i].nom +'</h2>';
                     contenu += '</div>';
                    
                    console.log(contenu);
                }
                cibleTodo.innerHTML = contenu;
                

            })
    })