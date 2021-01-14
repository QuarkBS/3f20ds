//Elaborado por David Alejandro Bernal Sandoval 3°F
let listaOriginal = []; //se crea la lista vacía
let n = 10; //cantidad de datos en la lista

console.log('La lista es: '+rellenarLista(n));//se llena la lista con numeros random
console.log('Después de ordenar es: '+ mergeSort(listaOriginal));//se ordenan

function rellenarLista(cantidad){
    for(let i = 0; i < cantidad; i++){
        listaOriginal[i] = Math.floor(Math.random()*n*n) + 1;//n*n es para que no repitan tanto los números
    }
    return listaOriginal;
}

function mergeSort(lista){
    let listafinal = [];//lista final de resultado
    if(lista.length <= 1){//caso inicial
        return lista;
    }
    let sublisIzq = lista.slice(0, lista.length/2);//sublista Izquierda
    let sublisDer = lista.slice(lista.length/2, lista.length);//sublista derecha
    sublisIzq = mergeSort(sublisIzq, sublisIzq.length);//ordenar sublista Izq
    sublisDer = mergeSort(sublisDer, sublisDer.length);//oredenar sublista Der
    if(sublisIzq[sublisIzq.length - 1] <= sublisDer[0]){ 
        sublisIzq = sublisIzq.concat(sublisDer);//caso ambas listas se ordenan sin llamar a merge
        return sublisIzq;
    }
    listafinal = merge(sublisIzq, sublisDer);//caso ambas listas no se ordenan antes de llegar a merge
    return listafinal//salida de datos
}

function merge(izquierda, derecha){
    let resultado = [];//lista resultado que se va a retornar
    while(izquierda.length > 0 && derecha.length > 0){
        if(izquierda[0] <= derecha[0]){
            resultado = resultado.concat(izquierda[0]);
            izquierda = izquierda.slice(1);
        }
        else{
            resultado = resultado.concat(derecha[0]);
            derecha = derecha.slice(1);
        }
    }
    if(izquierda.length > 0){
        resultado = resultado.concat(izquierda);
    }
    if(derecha.length > 0){
        resultado = resultado.concat(derecha);
    }
    return resultado;
}