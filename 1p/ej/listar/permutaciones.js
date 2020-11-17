//Puse el segundo como 32 para que se notaran bien las permutaciones, pero igual funciona bien si se lo cambia a 3
let S = [3, 1, 4, 2, 32];

console.log(permutar(S));

function permutar(conjunto){
    let resultado = [];
    if (conjunto.length === 0){
        return [];
    }
    if (conjunto.length === 1){
        return [conjunto];
    }
    for (let i = 0; i < conjunto.length; i++) {
        const valoractual = conjunto[i];
        const restantes = conjunto.slice(0, i).concat(conjunto.slice(i + 1));
        const restantespermutados = permutar(restantes);
        for (let j = 0; j < restantespermutados.length; j++){
            const permutados = [valoractual].concat(restantespermutados[j]);
            resultado.push(permutados);
        }
    }
    return resultado;
}