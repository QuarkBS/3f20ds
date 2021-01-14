//Elaborado por David Alejandro Bernal Sandoval 3°F
class Nodo{//clase para crear nodos
    constructor(dato, next, prev){
        this.dato = dato;
        this.next = next;
        this.prev = prev;
    }
}

class ListaDoble{//clase para listas ligadas dobles
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    
    append(dato){//agrega un nuevo nodo al final de la lista
        const nuevoNodo = new Nodo(dato, null, null);
        if(this.head === null){
            this.head = nuevoNodo;
            this.tail = nuevoNodo;
        } else{
            let current = this.head;
            while(current.next){
                current = current.next
                this.tail = nuevoNodo;
            }
            current.next = nuevoNodo;
            nuevoNodo.prev = current;
        }
        this.size++;
    }
    removeAt(position){//remueve el nodo en la posición indicada
        if(position > -1 && position < this.size){
            let current = this.head, previous, index = 0;
            
            if(position === 0){
                this.head = current.next
                if(this.size === 1){
                    this.tail = null;
                } else{
                    this.head.prev = null;
                }
            } 
            
            else if (position === this.size-1){
                current = this.tail;
                this.tail = current.prev;
                this.tail.next = null;
                } 

            else{
                while(index++ < position){
                    previous = current;
                    current = current.next
                }
                previous.next = current.next;
                current.next.prev = previous;
            }
            this.size--;
            return current.dato;

        } else{
            return null;
        }
    }

    insert(position, dato){//inserta un nodo en la posición indicada con el valor indicado
        if(position >= 0 && position <= this.size){
            let nuevoNodo = new Nodo(dato, null, null), current = this.head, previous, index = 0;
            
            if(position === 0){
                if(!this.head){
                    this.head = nuevoNodo;
                    this.tail = nuevoNodo;
                } else{
                    nuevoNodo.next = current;
                    current.prev = nuevoNodo;
                    this.head = node;
                }
            } else if(position === this.size){
                current = this.tail;
                current.next = nuevoNodo;
                nuevoNodo.prev = current;
                this.tail = nuevoNodo;
            }
            
            else{
                while(index++ < position){
                    previous = current;
                    current = current.next
                }
                nuevoNodo.next = current;
                previous.next = nuevoNodo;
                current.prev = nuevoNodo;
                nuevoNodo.prev = previous; 
            }
            this.size++;
            return true;

        } else{
            return false;
        }        
    }

    toString(){//convierte a string toda la lista '=> y <=' representa cuál apunta a cuál
        let current = this.head;
        if(this.head === null){
            return 'null'
        } else{
            let string = 'null <= ';
            while(current){
                string += current.dato + (current.next ? ' <= => ' : '');
                current = current.next;
            }
            string += (' => null');
            return string;
        }
    }

    indexOf(dato){//devuelve el índice del dato proporcionado, si no existe, devuelve -1
        let current = this.head;
        let index = 0;
        debugger;
        while(current){
            if(dato === current.dato){
                return index;
            }
            index++;
            current = current.next;
        }
        return 'El valor indicado no existe';
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

    getTail(){
        return this.tail;//devuelve el último nodo
    }

    clear(){//vacía la lista
        this.head = null;
        this.tail = null;
        this.size = 0;
        return 'Lista borrada con éxito';
    }
}

let hola = new ListaDoble();
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
console.log('La cola de la lista es: '+hola.getTail());
console.log('Limpiando lista... '+hola.clear());
console.log('La lista es: '+hola.toString());