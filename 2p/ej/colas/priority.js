//Elaborado por David Alejandro Bernal Sandoval 3°F
class Paciente{
    constructor(nombre, codigo){
        this.nombre = nombre;
        this.codigo = codigo;
    }
}

class Cola{
    constructor(){
        this.dataStore = [];
    }

    enQueue(dato){
        return this.dataStore.push(dato);
    }
    
    deQueue(){
        let priority = this.dataStore[0].codigo;
        for (let i = 1; i < this.dataStore.length; ++i){
            if (this.dataStore[i].codigo < priority){
            priority = i;
            }
        }
        return this.dataStore.splice(priority, 1);
    }

    front(){
        return this.dataStore[0];
    }

    back(){
        return this.dataStore[this.dataStore.length - 1];
    }

    toString() {
        let retStr = "";
        for (let i = 0; i < this.dataStore.length; ++i){
            retStr += this.dataStore[i].nombre + " código: "+ this.dataStore[i].codigo + "\n";
        }
        return retStr;
    }

    isEmpty(){
        if(this.dataStore.length === 0){
            return true;
        }else{
            return false;
        }
    } 
}

const pacientes = ['Smith','Jones', 'Fehrenbach','Ingram', 'Brown'];
const codigos = [5, 4, 6, 1, 1];
let cola = new Cola()
for(let i = 0; i < pacientes.length; i++){
    let paciente = new Paciente(pacientes[i], codigos[i]);
    cola.enQueue(paciente);
}

console.log(cola.toString());
for(let i = 0; i < 3; i++){
    let visto = cola.deQueue();
    console.log("Paciente siendo atendido: " + visto[0].nombre);
    console.log("Pacientes en espera: ");
    console.log(cola.toString());
}