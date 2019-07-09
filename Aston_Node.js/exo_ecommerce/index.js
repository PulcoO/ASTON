class Produit {
    constructor(id, name, description, image, price ){
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.price = price;
    }
}

let produits = [
    new Produit = (03, "Godemichet", "Afin de contenter ta maman d'amour","Mini-Vibromasseur-Le-Chat-KinKy.png", 39),
    new Produit = (04,"Chat de schrodinger", "un chat aussi discret que potentiellement mort","chatSchrodinger.jpg",5000),
    new Produit = (01,"carotte","Pour bien grandir","carottes.jpg", 10),
    new Produit(02,"concombre","Parce que c'est bon","concombre.jpg",15),
]

let sectionView = document.getElementsByClassName("view_product");

function affichageProduct (){
    for(i=0;i<produits.length;i++){
        let image = produits[i].image;
        sectionView.innerHTML += '<div class="contenu_product"><div class="img" style="background:url('+image+') no-repeat center center; background-size:cover"></div><div class="contenu_describe"></div><div class="contenu_price"></div></div>'
        
    }
}

