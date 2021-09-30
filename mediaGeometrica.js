const lista=[
    0.72,
    1.6,
    0.9,
    2,
];


function mediaGeometrica(lista1){

    debugger;
    const Multiplicacion = lista1.reduce((x,y) => x*y);

    const tamanioLista = lista1.length;

    const mediaGeo= Math.pow(Multiplicacion, 1/tamanioLista);

    return mediaGeo;

}