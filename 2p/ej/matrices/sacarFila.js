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
let filaAsacar = 0; //fila a sacar para los métodos (empieza en 0)

matrizA = CrearMatriz(filas, columnas, matrizA);//se crea y se llena la matriz

const matriz = new Matrices(filas, columnas, matrizA);//se crea el objeto a usar
console.log(matrizA);//se imprime la matriz original

console.log('La fila 1 es: ' +matriz.sacarFila(filaAsacar));//método sacar fila