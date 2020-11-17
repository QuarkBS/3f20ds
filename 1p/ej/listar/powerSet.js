//Puse el segundo como 32 para que se notaran bien los conjuntos, pero igual funciona bien si se lo cambia a 3
//Ya se que la complejidad es horrible xD, pero quería demostrar que el power set
//son las combinaciones con todos los posibles valores de r 
let S = [3, 1, 2, 4, 32];
let subconjuntos = [];

for(let k = 0; k <= S.length; k++){
    let r = S.length-k;
    console.log(combinaciones(S,r));
}

function combinaciones(conjunto, cantidadsub){
    let resultado = [];
    if(cantidadsub === 0 || cantidadsub > conjunto.length){
        return [];
    }
    if(conjunto.length === cantidadsub){
        return [conjunto];
    }
    if(cantidadsub === 1){
        const subconjunto = [];
        for(let k = 0; k < conjunto.length; k++){
            subconjunto[k] = [conjunto[k]];
        }
        return subconjunto;
    }
    for(let i = 0; i < conjunto.length; i++){
        const valoractual = conjunto[i];
        let limite = cantidadsub-1;
        const resto = conjunto.slice(i+1);
        const combs = combinaciones(resto, limite);
        for(let j = 0; j < combs.length;j++){
            const comb = [valoractual].concat(combs[j]);
            resultado.push(comb);
        }
    }

    return resultado;
}