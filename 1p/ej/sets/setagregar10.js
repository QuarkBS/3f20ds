let valoresrandom = [];
let vectorauxiliar = [];
let NombSet = new Set();

console.log(agregar(valoresrandom));

function agregar(valores){
    random(valores);
    for(let i = 0; i < 10; i++){
        vectorauxiliar.push('name'.concat(valores[i]));
        NombSet.add(vectorauxiliar[i]);
    }
    return NombSet;
}

function random(x){
    for (let k = 0; k < 10; k++){
        x[k] = Math.floor(Math.random() * 100* 10 + 1);
    }
        let SetAux = new Set(x);
        if(SetAux.size < 10){
            random(x);
        }
    return x;
}