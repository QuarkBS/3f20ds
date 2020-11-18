const n = 20;
let valoresrandom = [];
let vectorauxiliar = [];
let NombMap = new Map();

agregar(valoresrandom, n);

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
        x[k] = Math.floor(Math.random() * 100*cantidad + 1);
    }
    return x;
}