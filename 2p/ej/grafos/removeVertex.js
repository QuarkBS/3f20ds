//Elaborado por David Alejandro Bernal Sandoval 3°F
class Grafo{
    constructor(){
        this.vertices = [];
        this.sizeOfvertex = 0;
        this.sizeOfedges = 0;
        this.adjmatrix = [];
    }

    addVertex(nodo){
        if(this.vertices.includes(nodo)){
            return -1;
        }
        this.vertices.push(nodo);
        this.sizeOfvertex++;
        this.adjmatrix = new Array(this.sizeOfvertex);
        for(let i = 0; i < this.sizeOfvertex; i++){
            this.adjmatrix[i] = new Array(this.sizeOfvertex);
        }
        this.fill();
        return this.vertices;
    }
    
    addEdge(nodo1, nodo2){
        if(this.adjmatrix[this.vertices.indexOf(nodo1)][this.vertices.indexOf(nodo2)] !== 1){
            this.adjmatrix[this.vertices.indexOf(nodo1)][this.vertices.indexOf(nodo2)] = 1;
            this.sizeOfedges++;
            return this.adjmatrix;
        }else{
            this.adjmatrix[this.vertices.indexOf(nodo1)][this.vertices.indexOf(nodo2)]++;
            this.sizeOfedges++;
            return this.adjmatrix;
        }
    }
    
    removeVertex(nodo){
        if(!this.vertices.includes(nodo)){
            return 'No existe el vértice indicado';
        }        
        let temp = [];
        let index = this.vertices.indexOf(nodo);
        for(let i = 0; i < this.vertices.length; i++){
            if(i === index){
                continue;
            }
            temp.push(this.vertices[i]);
        }
        this.sizeOfvertex--;
        this.vertices = temp;
        let tempmatrix = [];
        temp = [];
        for(let i = 0; i < this.vertices.length+1; i++){
            for(let j = 0; j < this.vertices.length+1; j++){
                if(i === index || j === index){
                    continue;
                }
                temp.push(this.adjmatrix[i][j]);
            }
            if(temp.length === 0){
                continue;
            }
            tempmatrix.push(temp);
            temp = [];
        }
        this.adjmatrix = tempmatrix;
        return 'Éxito';
    }

    fill(){
        for(let i = 0; i < this.sizeOfvertex; i++){
            for(let j = 0; j < this.sizeOfvertex; j++){
                if(this.adjmatrix[i][j] === undefined ){
                    this.adjmatrix[i][j] = 0
                }else{
                    continue;
                }
            }
        }
    }
}

let hola = new Grafo();
hola.addVertex(5);
hola.addVertex(4);
hola.addVertex(7);
hola.addVertex(9);
hola.addVertex(8);
hola.addVertex(6);
hola.addEdge(5, 4);
hola.addEdge(4, 5);
hola.addEdge(5, 5);
hola.addEdge(5, 5);
hola.addEdge(9, 5);
hola.addEdge(5, 9);
hola.addEdge(4, 7);
hola.addEdge(7, 4);
hola.addEdge(8, 9);
hola.addEdge(9, 8);
hola.addEdge(4, 6);
hola.addEdge(6, 4);
hola.fill();
console.log(hola.adjmatrix);
console.log('Removiendo vértice... '+hola.removeVertex(5));
console.log(hola.adjmatrix);
