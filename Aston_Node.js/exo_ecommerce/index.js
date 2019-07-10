console.log("hello")
class Produit {
    constructor(id, name, description, image, price ){
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.price = price;
    }
}
class ProduitCart{
    constructor(id, qte){
        this.id = id;
        this.qte = qte;
    }
    setQte(parametre){
        this.qte = parametre;
    }
}

class User{
    constructor(id, nom, prenom){
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
    }
}

let users = [
    new User (01, "Veys", "Mathieu")
]


let produits = [
    new Produit (03, "Godemichet", "Afin de contenter ta maman d'amour",'Mini-Vibromasseur-Le-Chat-KinKy.png', 39),
    new Produit (04,"Chat de schrodinger", "un chat aussi discret que potentiellement mort",'chatSchrodinger.jpg',5000),
    new Produit (01,"carotte","Pour bien grandir","carottes.jpg", 10),
    new Produit (02,"concombre","Parce que c'est bon","concombre.jpg",15)
];


let sectionView = document.getElementById("view_product");
console.log(sectionView)

function affichageProduct(){
    let affichage = '';
    for(let i=0; i<produits.length; i++){
        let image = produits[i].image;
        affichage += '<article class="contenu_product">';

            //image
            affichage += '<div class="img" style="background:url('+ image +') no-repeat center center; background-size:cover"></div>';
            //h1 + p
            affichage += '<div class="contenu_describe"><h2>'+ produits[i].name +'</h2><p>' + produits[i].description +'</p></div>';
            //prix et panier
            affichage += '<div class="contenu_price"><div class="text_price">' + produits[i].price + "€" + '</div><div class="btns"><button onclick="addCart('+i+')">Ajout</button></div></div>';

        affichage += '</article>';  
    }
    sectionView.innerHTML = affichage;
}

let cibleUser = document.getElementById('profil');
let ciblePanierHeader = document.getElementById('panier')

function affichageHeader(){
    let affichage = '';
    for(i=0; i<users.length; i++){
        affichage += '<h3>Bonjour</h3>'
        affichage += '<div id="nom">' + users[i].nom + '</div>';
        affichage += '<div id="prenom">' + users[i].prenom + '</div>';
    }
    cibleUser.innerHTML = affichage;
    ciblePanierHeader.innerHTML = '<button id="btnPanier">Panier</button>'
    // ciblePanierHeader.innerHTML = '<div id="header_panier" style="background:url('+ "panier.png" +') no-repeat center center; background-size:cover"></div>';
}

affichageHeader();
affichageProduct();

let cart = [];

function addCart (i){
    let produit = produits[i];
    cart.push(new ProduitCart(produit.id,1));
}

function affichageCart (){
    console.log(cart)
    console.log(produits)
    affichage = '';
    for(i=0; i<cart.length; i++){
            console.log(cart[i].id);
            let index = produits.findIndex(produit => produit.id == cart[i].id);
            let total = produits[index].price*cart[i].qte;
            
            affichage += '<article class="contenu_card">';
            //let total = produits[index].prix * cart[i].qte
    
                    //h1 + p
                    affichage += '<div class="cart_text"><h2>'+ produits[index].name +'</h2><p>' + produits[index].description +'</p></div>';

                    //quantité
                    affichage += '<div class="cart_qte">' + cart[i].qte + '</div>'

                    // button ajout & moin
                    affichage += '<div>';
                    affichage += '<input type="number" id="input_qte" oninput = changeQte('+ i +',this.value,'+produits[index].price+') value="'+cart[i].qte+'"></div>';
                    affichage +='</div>';
                        
                    //prix
                    affichage += '<div class="cart_prix"><div class="text_price">' + produits[index].price + "€" + '</div>'

                    //Total
                    affichage += '<div id="total'+ i +'">'+ total +'</div>'
    
            affichage += '</article>';    
    }
    document.getElementById('view_product').setAttribute("class","view_card");
    affichage += '<div>'+ sommeTotal +'</div>';
    sectionView.innerHTML = affichage; 
}
function changeQte(i,quantite, prix){
    cart[i].setQte(quantite);
    document.getElementById('total' +i).innerHTML = Math.round(quantite * prix * 100)/100;
}

function sommeTotal()
    


document.getElementById("btnPanier").addEventListener("click",affichageCart);


    
    
    


