
let resultat;
fetch('https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=87dfa1c669eea853da609d4968d294be')
    .then(data =>{
        data.json()
            .then (reponse =>{
                let cibleFilms = document.getElementById("section_films");
                cibleFilms.innerHTML = '';
                console.log(Object.values(reponse));
                let films = Object.values(reponse)[3];
                for(i=0; i<films.length; i++){
                    console.log('fuck');
                    let image = 'https://image.tmdb.org/t/p/w500'+films[i].backdrop_path;


                    cibleFilms.innerHTML += '<div class="films" style="background:url('+image+') no-repeat center center; background-size:cover"><h1>'+ films[i].title +'</h1></div>';


                }
                //mettre les plus petits dans le plus gros
                cibleFilms.innerHTML = contenu;
            })
        
    })
