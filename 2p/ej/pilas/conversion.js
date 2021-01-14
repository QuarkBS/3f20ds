//Elaborado por David Alejandro Bernal Sandoval 3°F
let numero = 32, base = 16;

console.log(conversion(numero, base));

function conversion(n, b){
    let pila = [], resultado = [];
    
    while(n > 0){
        pila.push(n % b);
        n = Math.floor(n / b);
    }
    while(pila.length > 0){
        resultado.push(pila.pop());
    }
    return resultado.join('');
}