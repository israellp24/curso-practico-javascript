/* 
---- FUNCIONAMIENTO DE SORT ---
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

//Ejemplo de como lo ordena el sort
[4, 2, 5, 1, 3];

// - a antes que b
// + b antes que a
// 0 no hay cambios se queda en la posicion

1 orden : [2, 4, 5, 1, 3];
2 orden : [2, 4, 5, 1, 3];
3 orden : [2, 4, 1, 5, 3];
4 orden : [2, 4, 1, 3, 5];

//Comienza nuevamente
1 orden : [2, 4, 1, 3, 5];
2 orden : [2, 1, 4, 3, 5];
3 orden : [2, 1, 3, 4, 5];
4 orden : [2, 1, 3, 4, 5];

//Comienza nuevamente
1 orden : [1, 2, 3, 4, 5]; 
*/

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado= 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista =sumaLista / lista.length;

    return promedioLista;
}

/* const lista1 = [
    100,
    200,
    500,
    4000000,
]; */

/* function ordenaArray(array){ //forma artesanal
    let b;
    debugger;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(array[j]>array[j+1]){
                b=array[j];
                array[j]=array[j+1];
                array[j+1]=b;
            }            
        } 
    }
    return array;
} */

function mediana (listaOrg){

    //const lista = ordenaArray(listaOrg); //forma artesanal
    const lista = listaOrg.sort((a,b)=> a-b);
    const mitadLista1 = parseInt(lista.length / 2);
    
    function esPar(numerito){
        if(numerito % 2 === 0){
            return true;
        }else{
            return false;
        }
    }
    
    let mediana;
    
    if(esPar(lista.length)){
        const elemento1 = lista[mitadLista1 - 1];
        const elemento2 = lista[mitadLista1 ];
    
        const promedioElemto1y2= calcularMediaAritmetica([elemento1,elemento2]);
    
        mediana = promedioElemto1y2;
    }else{
        mediana = lista[mitadLista1];
    }

    return mediana;
}