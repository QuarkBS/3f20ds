let n = 10;

console.log(calcularlucas(n));

function calcularlucas(lucas){
    if(lucas === 1){
        return 2;
    }
    if(lucas === 2){
        return 1;
    }
    lucas = calcularlucas(lucas-1) + calcularlucas(lucas-2);
    return lucas;
}