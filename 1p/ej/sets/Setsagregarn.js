const n = 20;
let valoresrandom = [];
let vectorauxiliar = [];
let NombSet = new Set();

console.log(agregar(valoresrandom, n));

function agregar(valores,lim){
    random(valores, lim);
    for(let i = 0; i < lim; i++){
        vectorauxiliar.push('name'.concat(valores[i]));
        NombSet.add(vectorauxiliar[i]);
    }
    return NombSet;
}

function random(x,cantidad){
    for (let k = 0; k < cantidad; k++){
        x[k] = Math.floor(Math.random() * 100*cantidad + 1);//el 100 es para reducir el margen de repetición
    }   
        let SetAux = new Set(x);
        if(SetAux.size < cantidad){
            console.log(SetAux.size)
            random(x, cantidad);
        }
    return x;
}