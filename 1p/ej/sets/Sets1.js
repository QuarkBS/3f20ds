const array = [1,2,3,4,5,'hola1','hola1'];

let Nset = new Set(array);
//let NweakSet = new WeakSet({array}); WeakSet solo almacena objetos
let NweakSet = new WeakSet([{valores: 1},{valores: 2},{valores: 3}]);

Nset.add(NweakSet);
Nset.add('hola'.concat(1));
console.log(Nset); //Set guarda las referencias de objetos y valores primitivos y quita los repetidos
console.log(NweakSet); //los weaksets no son iterables