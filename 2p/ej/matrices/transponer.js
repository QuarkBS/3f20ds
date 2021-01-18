//Elaborado por David Alejandro Bernal Sandoval 3°F
//Funciona para matrices nxn y nxm
class Matrices{
    constructor(rows, columns, matrix){ //constructor filas, columnas y matriz
        this.rows = rows;
        this.columns = columns;
        this.matrix = matrix;
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
let filas = 5, columnas = 5;//se establece la dimensión n x m de la matriz

matrizA = CrearMatriz(filas, columnas, matrizA);//se crea y se llena la matriz

const matriz = new Matrices(filas, columnas, matrizA);//se crea el objeto a usar
console.log(matrizA);//se imprime la matriz original

console.log('La matriz transpuesta es: ');//método transponer
console.log(matriz.transponer());