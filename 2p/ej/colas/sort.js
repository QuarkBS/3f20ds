//Elaborado por David Alejandro Bernal Sandoval 3°F
class Cola{
    constructor(){
        this.dataStore = [];
    }

    enQueue(dato){
        return this.dataStore.push(dato);
    }
    
    deQueue(){
        return this.dataStore.shift();
    }

    isEmpty(){
        if(this.dataStore.length === 0){
            return true;
        }else{
            return false;
        }
    } 
}

function distribute(nums, colas, n, digito){
    for(let i = 0; i < n; i++){
        if(digito === 1){
            colas[nums[i]%10].enQueue(nums[i]);
        }else{
            colas[Math.floor(nums[i] / 10)].enQueue(nums[i]);
        }
    }
}

function colectar(colas, numeros){
    let i = 0;
    debugger;
    for(let digito = 0; digito < 10; ++digito){
        while(!colas[digito].isEmpty()){
            numeros[i++] = colas[digito].deQueue();
        }
    }
}

function displayArray(Array){
    return Array.toString();
}

let colas = [];
for(let i = 0; i < 10; i++){
    colas[i] = new Cola();
}
let numeros = [];
for(let i = 0; i < 10; i++){
    numeros[i] = Math.floor(Math.floor(Math.random()*101));
}

console.log('Antes del sort: ' + displayArray(numeros));
distribute(numeros, colas, 10, 1);
colectar(colas, numeros);
distribute(numeros, colas, 10, 10);
colectar(colas, numeros);
console.log('Después del sort: ' + displayArray(numeros));