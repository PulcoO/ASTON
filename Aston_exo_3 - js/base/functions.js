function sayHello(name) {
    name = name || "";
    // l'equivalent de if name = true if else name = false
    return 'hello ' + name;
}


document.write(sayHello('Mathieu').toUpperCase());

let f = function () {
    return 'test';
};

f();

/////// distinction entre VAR et LET ////////////////

//var name = 'var';
let name = 'let';

(function () {
        // methode pour déclarer une function
        alert('la fonction anonyme fonctionne');
        let name = 'aston';
        window.name = name;
    }() // ici on la lance
);

console.log(name);

//////////// LES FONCTIONS FLECHEES ///////////

let funky = () => {
    return 'green Arrow';
};
// let funky = () => return 'green Arrow';

// let funky = () => 'green Arrow';

console.log(funky());

///////////////// LES CALLBACK ///////////////

function callMe(callback) {
    console.log('connexion a la bdd');
    console.log('initialize...');
    setTimeout(callback(), 3000);
}

callMe(function () {
    console.log('boom');
});


/////////////////// Modifier le titre //////////////

let h1 = document.getElementById('h1');
let p = document.querySelector('p');
const h1default = document.getElementById('h1').innerHTML;
const colordefault = document.getElementById('h1').style.color;
const pHauteur = p.offsetTop;
console.log(pHauteur);


h1.addEventListener('mouseenter', function () {
    if (h1.innerHTML == h1default) {
        h1.innerHTML = 'Ta mère la pute';
        h1.style.color = "yellow";
    } else {
        h1.innerHTML = h1default;
        h1.style.color = colordefault;
    }


});

window.onscroll = function() {myScrollFunction(p)};

function myScrollFunction(element){
    if (document.body.scrollTop > element.offsetTop || document.documentElement.scrollTop > element.offsetTop){
        element.className = ".slide";
    }
}
//h1.addEventListener('mouseover', function (){alert('boom')} )

let elementInput = document.querySelector('input');
let elementHelpInput = document.querySelector('.help_input');




elementInput.addEventListener('input', miroir, false);

function miroir () {
    elementHelpInput.textContent = elementInput.value;
}