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
    
    removeEdge(nodo1, nodo2){
        if(!this.vertices.includes(nodo1) || !this.vertices.includes(nodo2)){
            return -1;
        }        
        this.adjmatrix[this.vertices.indexOf(nodo1)][this.vertices.indexOf(nodo2)] = 0;
        this.sizeOfedges--;
        return this.adjmatrix;
    }

    removeVertex(nodo){
        if(!this.vertices.includes(nodo)){
            return -1;
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
                debugger;
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
        return this.vertices;
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

    hasLoops(){
        let suma = 0;
        for(let i = 0; i < this.sizeOfvertex; i++){
            suma += this.adjmatrix[i][i];
        }
        if(suma > 0){
            return true;
        }else{
            return false;
        }
    }

    isDirected(){
        let matrix = [];
        for (let i = 0, len = this.adjmatrix.length; i < len; i++) {
            matrix[i] = this.adjmatrix[i].slice();
        }
        for(let i = 0; i < this.sizeOfvertex; i++){
            for(let j = i; j < this.sizeOfvertex; j++){
                let temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }

        debugger;
        let temp1 = [];
        let temp2 = [];
        temp1 = this.adjmatrix.flat();
        temp2 = matrix.flat();

        for(let i = 0; i < this.sizeOfvertex; i++){
            if(temp1[i] != temp2[i]){
                return true
            }
        }
        return false;
    }

    size(){
        return this.sizeOfvertex;
    }
    
    order(){
        return this.sizeOfedges;
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
//hola.fill();
//console.log(hola.size());
//console.log(hola.order());
//console.log(hola.removeEdge(5, 4));
//console.log(hola.removeVertex(5));
console.log(hola.adjmatrix);
//console.log(hola.hasLoops());
console.log(hola.isDirected());