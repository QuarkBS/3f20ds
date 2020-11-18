const array = [1,2,3,4,5,6];
const b = {
    nomb: 1
}

let Nmap = new Map();
let Nweakmap = new WeakMap();

Nmap.set(b, 'hola').set(1, 'nomb').set(array, 'adios');
Nweakmap.set(array, 'hola')//.set(1, 'adios');  weakmaps no acepta valores primitivos

console.log(Nmap);
console.log(Nweakmap); //weakmaps no son iterables