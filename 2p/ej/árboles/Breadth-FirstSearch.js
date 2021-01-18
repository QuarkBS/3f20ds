//Elaborado por David Alejandro Bernal Sandoval 3°F
class Node{
    constructor(data){
        this.data = data;
        this.children = [];
    }
}

class Arbol{
    constructor(){
        this.root = null;
    }

    addNode(dato, parentNode){
        let node = new Node(dato);
        let parent = parentNode ? this.BFS(parentNode) : null;

        if(parent){
            parent.children.push(node);
        }else{
            if(!this.root){
                this.root = node;
            }else{
                return 'El nodo especificado ya existe';
            }
        }
    }

    BFS(dato){
        let cola = [this.root];
        let _node = null;

        this.recorrerBFS((node) => {
          if (node.data == dato)
            _node = node;
        })
    
        return _node;
    }

    recorrerBFS(cb){
        let cola = [this.root];
        while(cola.length){
            let node = cola.shift();
            if(cb){
                cb(node)
            }
            for(let i = 0; i < node.children.length; i++){
                cola.push(node.children[i]);
            }
        }
    }
}

let hola = new Arbol();
hola.addNode('a');
hola.addNode('b', 'a');
hola.addNode('c', 'a');
hola.addNode('d', 'b');
hola.addNode('e', 'b');
hola.addNode('f', 'c');
hola.addNode('g', 'c');
hola.recorrerBFS((node) => {console.log('Nodo actual: ', node)});