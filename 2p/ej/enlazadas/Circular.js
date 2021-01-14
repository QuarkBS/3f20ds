//Elaborado por David Alejandro Bernal Sandoval 3°F
class Nodo{//clase para crear nodos
    constructor(dato, next){
        this.dato = dato;
        this.next = next;
    }
}

class ListaCircular{//clase para listas ligadas circulares
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    
    append(dato){//agrega un nuevo nodo al final de la lista
        const nuevoNodo = new Nodo(dato, null, null);
        if(this.head === null){
            this.head = nuevoNodo;
            nuevoNodo.next = this.head;
            this.tail = nuevoNodo;
        } else{
            let current = this.head;
            while(current.next){
                current = current.next
                if(current === this.tail){
                    this.tail = nuevoNodo;
                    break;                    
                }
            }
            current.next = nuevoNodo;
            nuevoNodo.next = this.head;
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
                    this.tail.next = this.head;
                }
            } 
            
            else if (position === this.size-1){
                while(current.next != this.tail){
                    current = current.next;
                }
                this.tail = current;
                this.tail.next = this.head;
            }

            else{
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
                if(!this.head){
                    this.head = nuevoNodo;
                    this.head.next = this.tail;
                    this.tail = nuevoNodo;
                    this.tail.next = this.head;
                } else{
                    nuevoNodo.next = current;
                    this.head = nuevoNodo;
                    this.tail.next = nuevoNodo;
                }
            } else if(position === this.size){
                current = this.tail;
                current.next = nuevoNodo;
                this.tail = nuevoNodo;
                this.tail.next = this.head;
            }
            
            else{
                while(index++ < position){
                    previous = current;
                    current = current.next
                }
                previous.next = nuevoNodo;
                nuevoNodo.next = current;
            }
            this.size++;
            return true;

        } else{
            return false;
        }
    }

    toString(){//convierte a string toda la lista '=> representa cuál apunta a cuál
        let current = this.head;
        if(this.head === null){
            return 'null'
        } else{
            let string = '';
            while(current){
                string += current.dato + (current.next ? ' => ' : '');
                if(current === this.tail){
                    string += (this.head.dato);
                    return string;                    
                }
                current = current.next;
            }
        }
    }

    indexOf(dato){//devuelve el índice del dato proporcionado, si no existe, devuelve -1
        let current = this.head;
        debugger;
        let index = 0;
        while(current != this.tail){
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

    clear(){//vacía la lista
        this.head = null;
        this.tail = null;
        this.size = 0;
        return 'Lista borrada con éxito';
    }
}

let hola = new ListaCircular();
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