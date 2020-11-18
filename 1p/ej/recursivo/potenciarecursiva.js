let x = 5, y = 2;

console.log(potenciarecursiva(x,y));

function potenciarecursiva(num,elevado){
    if(elevado === 0){
        return 1;
    }
    if(elevado === 1){
        return x;
    }
    num = num*potenciarecursiva(num,elevado-1);
    return num;
}