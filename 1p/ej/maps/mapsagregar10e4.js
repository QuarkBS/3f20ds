//Tiene que cambiar el valor de n manualmente.
const n = 10e4;
let z = 0;
let valoresrandom = [];
let vectorauxiliar = [];
let NombMap = new Map();

let v = new Date().getTime();
agregar(valoresrandom, n);
let y = new Date().getTime();
z += y-v;

console.log('El tiempo de ejecución es de: ',z,'milisegundos');


function agregar(valores,lim){
    random(valores, lim);
    for(let i = 0; i < lim; i++){
        vectorauxiliar.push('name'.concat(valores[i]));
        NombMap = vectorauxiliar;
    }
    return console.log(NombMap);
}

function random(x, cantidad){
    for (let k = 0; k < cantidad; k++){
        x[k] = Math.floor(Math.random() * 10e5*cantidad + 1);
    }
    return x;
}