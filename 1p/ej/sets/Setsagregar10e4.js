//Tiene que cambiar el valor de n manualmente.
//Pensé en cambiarlo automaticamente, pero mi computadora hubiera explotado
//con 10e6 oficialmente explotó mi computadora
const n = 10e4;
let z = 0;
let vectorauxiliar = [];
let NombSet = new Set();
let valoresrandom = [];
    
let v = new Date().getTime();
agregar(valoresrandom, n);
let y = new Date().getTime();
z += y-v;

console.log(NombSet);
console.log('El tiempo de ejecución es de: ',z,'milisegundos');

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
        x[k] = Math.floor(Math.random() *10e5*cantidad + 1);
    }
//Es una función que escribí para que si se repiten valores aleatorios la función random
//vuelva a correr hasta que no haya valores repetidos.
//Esto con el fin de que el Set tenga la misma cantidad de valores que n
//Lamentablemente en mi computadora no corre debido a la gran cantidad de valores
//Por eso puse un 10e5* arriba para reducir el margen de repetición
/*      let SetAux = new Set(x);
        if(SetAux.size < cantidad){
            random(x, cantidad);
        }*/
    return x;
}