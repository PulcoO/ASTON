


function onReady() {
    let title = document.querySelector('h1');
    title.style.color = 'red';

    let name = 'toto';
    console.log(name);
    name = 'Wilfrid';
    console.log(name);

    let firstName = 'Miguel';
    firstName = 'Miguel';

    const t = ['a', 'b', 'c'];
    t[0] = 'e';

    console.log(t);

    if (true) {
        console.log('ok');
    } else {
        console.log('test');
    }

    console.log(3 + 3);

}   console.log('hello'.toUpperCase());

//window.onload = onReady;
window.addEventListener('load', onReady);