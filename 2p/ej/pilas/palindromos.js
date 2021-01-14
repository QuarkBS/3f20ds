//Elaborado por David Alejandro Bernal Sandoval 3°F
let string = 'holaaloh';

console.log(palindromo(string));

function palindromo(palabra){
    debugger;
    let pString = [], rString;
    for(let i = 0; i < palabra.length; i++){
        pString.push(palabra[palabra.length-i-1]);
    }
    rString = pString.join('');
    if(rString === palabra){
        return true;
    } else{
        return false
    }
}