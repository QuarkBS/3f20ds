//Elaborado por David Alejandro Bernal Sandoval 3°F
let pilaOrigen = [], pilaAux = [], pilaFinal = [];//"Varillas" del rompecabezas en físico
let i = 0;//variable para contar la cantidad de movimientos
const cantidadDiscos = 5;//pues cantidad de discos qué más xD

function crearDiscos(cantidad){
    for(let i = 0; i < cantidad; i++){
        pilaOrigen.push(cantidad-i);//como los discos tienen que ser menores que el disco anterior, usar random es no viable
    }//y se agragan a la "varilla" de origen
    return pilaOrigen;
}

function Hanoi(n, Origen, Final, Aux){
    i++;//variable para contar cuantos movimientos hace
    if(n === 1){//caso inicial, solo hay un disco
        Final.push(Origen.pop());
        return Final;
    }
    Hanoi(n - 1, Origen, Aux, Final);
    console.log(pilaOrigen, pilaAux, pilaFinal);//console para ver los movimientos, el primero no cuenta como movimiento
    Final.push(Origen.pop());
    console.log(pilaOrigen, pilaAux, pilaFinal);//console para ver los movimientos
    Hanoi(n - 1, Aux, Final, Origen);
    return (Origen, Aux, Final);
}

crearDiscos(cantidadDiscos);//se crean los discos
console.log(pilaOrigen, pilaAux, pilaFinal);//muestra las pilas antes de hacer el algoritmo
Hanoi(cantidadDiscos, pilaOrigen, pilaFinal, pilaAux);
console.log(pilaOrigen, pilaAux, pilaFinal);//muestra las pilas después del algoritmo
console.log('Tomó '+ i +' pasos');