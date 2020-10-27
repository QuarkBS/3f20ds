let logaritmo = 0, valor_i = 0;
let x = prompt('Introduce x: ');
let n = prompt('Introduce el número de iteraciones: ')

for(let k = 1; k <= n; k++){
  valor_i = (Math.pow(x, k)*Math.pow(-1,k+1))/k;
  logaritmo += valor_i;
  console.log(valor_i);
}

//Esta serie de Taylor solo funciona para -1 <= x <= 1, así que no tiene mucho senido leer x
//peeeero el problema lo pide, así que hágalo dentro de ese intervalo. 
//Por eso el console.log de abajo va a estar mal si lo descomenta cunado x no esté en ese intervalo
//console.log('Ln(1+x) es igual a: ', logaritmo);