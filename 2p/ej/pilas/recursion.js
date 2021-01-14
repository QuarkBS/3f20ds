let indice = 10;

console.log(factorial(indice));

function factorial(n){
    let pila = [], producto = 1;
    while(n > 0){
        pila.push(n--);
    }
    while(pila.length > 0){
        producto *= pila.pop();
    }
    return producto;
}