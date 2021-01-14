//Elaborado por David Alejandro Bernal Sandoval 3°F
class Matrices{
    constructor(rows, columns, matrix){ //constructor filas, columnas y matriz
        this.rows = rows;
        this.columns = columns;
        this.matrix = matrix;
    }

    sacarFila(fila){//Método para sacar filas. La fila a sacar se indica cuando se crea un objeto matrices
        const matrixfila = []; //matriz fila 
        for(let i = 0; i < this.columns; i++){
            matrixfila[i] = this.matrix[fila][i];
        }
        return matrixfila;
    }
    
    sacarColumna(columna){ //Método para sacar columnas. La columna a sacar se indica cuando se crea un objeto matrices
        const matrixcolumna = []; //matriz columna
        for(let i = 0; i < this.rows; i++){
            matrixcolumna[i] = this.matrix[i][columna];
        }
        return matrixcolumna;
    }

    transponer(){
        if(this.rows === this.columns){
            for(let i = 0; i < this.rows; i++){
                for(let j = i; j < this.rows; j++){
                    let temp = this.matrix[i][j];
                    this.matrix[i][j] = this.matrix[j][i];
                    this.matrix[j][i] = temp;
                }
            }
            return this.matrix;
        }
        if(this.rows > this.columns){
            let aux = [];
            aux = CrearMatriz(this.columns, this.rows, aux);
            for(let i = 0; i < this.columns; i++){
                for(let j = 0; j < this.rows; j++){
                    aux[i][j] = this.matrix[j][i];
                }
            }
            return aux;
        }
        if(this.rows < this.columns){
            let aux = []; 
            aux = CrearMatriz(this.columns, this.rows, aux);
            for(let i = 0; i < this.columns; i++){
                for(let j = 0; j < this.rows; j++){
                    aux[i][j] = this.matrix[j][i];
                }
            }
            return aux;
        }
    }
}

function CrearMatriz(filas, columnas, linearmap){ //función para crear la matriz
    let matrix = [];
    matrix = new Array(filas);
    for(let i = 0; i < matrix.length; i++){
        matrix[i] = new Array(columnas);
    }
    return linearmap = LlenarMatriz(filas, columnas, matrix);
}

function LlenarMatriz(nfilas, mcolumnas, matrix){ //función para llenar la matriz
    for(let i = 0; i < nfilas; i++){
        for(let j = 0; j < mcolumnas; j++){
            matrix[i][j] = Math.floor(Math.random() * 11);
        }
    }
    return matrix;
}

let matrizA = [];//matriz a usar
let filas = 5, columnas = 6;//se establece la dimensión n x m de la matriz
let columnaAsacar = 0, filaAsacar = 0; //fila y columna a sacar para los métodos (empieza en 0)

matrizA = CrearMatriz(filas, columnas, matrizA);//se crea y se llena la matriz

const matriz = new Matrices(filas, columnas, matrizA);//se crea el objeto a usar
console.log(matrizA);//se imprime la matriz original

//se usan los metodos sobre el objeto matriz
console.log('La fila 1 es: ' +matriz.sacarFila(filaAsacar));//método sacar fila
console.log('La columna 1 es: '+matriz.sacarColumna(columnaAsacar));//método sacar columna
console.log('La matriz transpuesta es: '+matriz.transponer());//método transponer