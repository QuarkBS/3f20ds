//Elaborado por David Alejandro Bernal Sandoval 3°F
class Nodo{//clase para crear nodos
    constructor(dato, next){
        this.dato = dato;
        this.next = next;
    }
}

class ListaLigada{//clase para listas ligadas simples
    constructor(){
        this.head = null;
        this.size = 0;
    }
    
    append(dato){//agrega un nuevo nodo al final de la lista
        const nuevoNodo = new Nodo(dato, null);
        if(this.head === null){
            this.head = nuevoNodo;
        } else{
            let current = this.head;
            while(current.next){
                current = current.next
            }
            current.next = nuevoNodo;
        }
        this.size++;
    }
    
    removeAt(position){//remueve el nodo en la posición indicada
        if(position > -1 && position < this.size){
            let current = this.head, previous, index = 0;
            
            if(position === 0){
                this.head = current.next
            } else{
                while(index++ < position){
                    previous = current;
                    current = current.next
                }
                previous.next = current.next;
            }
            this.size--;
            return current.dato;

        } else{
            return null;
        }
    }

    insert(position, dato){//inserta un nodo en la posición indicada con el valor indicado
        if(position >= 0 && position <= this.size){
            let nuevoNodo = new Nodo(dato, null), current = this.head, previous, index = 0;
            
            if(position === 0){
                nuevoNodo.next = this.head;
                this.head = nuevoNodo;
            } else{
                while(index++ < position){
                    previous = current;
                    current = current.next
                }
                nuevoNodo.next = current;
                previous.next = nuevoNodo;
            }
            this.size++;
            return true;

        } else{
            return false;
        }        
    }

    toString(){//convierte a string toda la lista '=>' representa cuál apunta a cuál
        let current = this.head;
        let string = '';
        while(current){
            string += current.dato + (current.next ? ' => ' : '');//no sé bien qué hace xd
            current = current.next;
        }
        string += (' => null');
        return string;
    }

    indexOf(dato){//devuelve el índice del dato proporcionado, si no existe, devuelve -1
        let current = this.head;
        let index = 0;
        while(current){
            if(dato === current.dato){
                return index;
            }
            index++;
            current = current.next;
        }
        return 'No existe dicho valor';
    }

    remove(dato){//remueve el dato indicado
        let index = this.indexOf(dato);
        return this.removeAt(index);
    }

    length(){
        return this.size;//devuelve la longitud de la lista
    }

    isEmpty(){//devuelve true o false según la lista esté vacía o no
        if(this.size === 0){
            return true;
        }
        return false;
    }

    getHead(){//devuelve el primer nodo
        return this.head;
    }

    clear(){//vacía la lista
        this.head = null;
        this.size = 0;
        return 'Lista borrada con éxito'
    }
}

let hola = new ListaLigada();
//Se inician los métodos
hola.append('Hola te ayudo?');
hola.append('Unimarc');
hola.append('xd');
console.log('La lista es: '+hola);
hola.removeAt(1);
hola.insert(2, 'hola');
hola.remove('Hola te ayudo?');
console.log('El indice del valor indicado es: '+hola.indexOf('Unimarc'));
console.log('La longitud de la lista es: '+hola.length());
console.log('¿La lista está vacía? '+hola.isEmpty());
console.log('La cabeza de la lista es: '+hola.getHead());
console.log('Limpiando lista... '+hola.clear());
console.log('La lista es: '+hola.toString());