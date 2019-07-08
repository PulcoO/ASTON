const ArrayOfChoice = ["pierre","feuille","ciseaux"];
let utilisateurxp = 0;
let robotxp = 0;

// do { 
//     let choixUtilisateur = prompt("Entrez un nombre entre 0 et 2 : \r\n 0:Rock \r\n 1:Paper \r\n 2:Scissors");
// }while (choixUtilisateur == 0 || choixUtilisateur == 1 || choixUtilisateur == 2);

rockPaperScissors();

function rockPaperScissors(){

    while (utilisateurxp < 3 && robotxp < 3){
        console.log('user : ' + utilisateurxp + "robot : " + robotxp);

        let choixRandom = Math.round(Math.random()*3)-1;
        let choixUtilisateur = prompt("Entrez un nombre entre 0 et 2 : \r\n 0:Rock \r\n 1:Paper \r\n 2:Scissors");
        
        console.log("Vous avez choisi : " + ArrayOfChoice[choixUtilisateur] + ", L'ordinateur quant a lui a choisi : " +ArrayOfChoice[choixRandom])

        if (choixUtilisateur-choixRandom == 0){
            alert("No Win, no Defeated");
           

        }else if(choixUtilisateur-choixRandom == 1){
            alert ("We have a Winner");
            utilisateurxp++;

        }else{
            alert("We have a Looser")
            robotxp++;

        }
    }
    if (utilisateurxp == 3){
        alert("UUUUUUUU WIN");
    }else {
        alert('Fucking Looser, U suck !')
    }
}


