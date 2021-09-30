/* const lista1 =[
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
]; */


function moda(lista1){
    const lista1Count = {};
    
    lista1.map(
        function(elemento){
            console.log()
            if(lista1Count[elemento]){
                lista1Count[elemento] +=1;
            }else{
                lista1Count[elemento] = 1;
            }
        }
    );
    
    const lista1Array = Object.entries(lista1Count).sort((a,b)=>a[1]-b[1]);
    
    const moda = lista1Array[lista1Array.length-1];

    return moda;
}