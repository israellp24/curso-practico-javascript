
//Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {

    return lado * 4;

}

function areaCuadrado(lado) {

    return lado * lado;

}

console.groupEnd();

//Código del triángulo
console.group("Triangulo");

function perimetroTriangulo(lado1, lado2, base){

    //return Number(lado1) + Number(lado2) + Number(base);
    return lado1 + lado2 + base;

}

function areaTriangulo (base, altura){

    return (base * altura)/2

}


console.groupEnd();

//Código del triángulo
console.group("Círculo");

function diametroCirculo(radio){

    return radio * 2;

}

const PI = Math.PI;

function perimetroCirculo(radio){

    const diametro = diametroCirculo(radio);

    return diametro * PI;

}

function areaCirculo(radio){

    return PI * (radio**2);

}

console.groupEnd();

//Interactuando con el HTM

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);

    alert(area);
}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputLado1");
    const input2 = document.getElementById("InputLado2");
    const input3 = document.getElementById("InputBase");
    const lado1 = Number(input1.value);
    const lado2 = Number(input2.value);
    const base = Number(input3.value);

    const perimetro = perimetroTriangulo(lado1,lado2,base);

    alert(perimetro);
}

function calcularAreaTriangulo(){
    const input3 = document.getElementById("InputBase");
    const input4 = document.getElementById("InputAltura");
    const base = Number(input3.value);
    const altura = Number(input4.value);

    const area = areaTriangulo(base,altura);

    alert(area);
}


function calcularPerimetroCirculo(){
    const input = document.getElementById("InputRadio");
    const value = input.value;

    const perimetro = perimetroCirculo(value);

    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputRadio");
    const value = input.value;

    const area = areaCirculo(value);

    alert(area);
}

//Reto 1: Triangulo isósceles

function calcularAlturaTriangulo(){
    const input1 = document.getElementById("InputALado1");
    const input2 = document.getElementById("InputALado2");
    const input3 = document.getElementById("InputABase");
    const lado1 = Number(input1.value);
    const lado2 = Number(input2.value);
    const base = Number(input3.value);
    let altura;
debugger

    if(lado1==lado2 && (lado1!=base && lado2!=base)){

        altura=Math.sqrt(lado1**2-(base**2/4))
        alert("Es un triangulo isosceles, con una altura de " + altura)
    }else{
        alert("No es un triangulo isosceles")
    }

}