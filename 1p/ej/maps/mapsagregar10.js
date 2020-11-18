let valoresrandom = [];
let vectorauxiliar = [];
let NombMap = new Map();

agregar(valoresrandom);

function agregar(valores){
    random(valores);
    for(let i = 0; i < 10; i++){
        vectorauxiliar.push('name'.concat(valores[i]));
        NombMap = vectorauxiliar;
    }
    return console.log(NombMap);
}

function random(x){
    for (let k = 0; k < 10; k++){
        x[k] = Math.floor(Math.random() * 100*10 + 1);
    }
    return x;
}