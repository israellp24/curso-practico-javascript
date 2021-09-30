/* const precioOriginal = 120;
const descuento = 18; */

function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento= 100-descuento;
    
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice=document.getElementById("InputPrice");
    const priceValue=inputPrice.value;
    const inputDiscount=document.getElementById("InputDiscount");
    const discountValue=inputDiscount.value;
    const inputCoupon=document.getElementById("InputCoupon");
    const couponValue=inputCoupon.value;
    let descuento;

    const coupons = [
        {
            name: "Isra_es_Batman",
            discount: 15
        },
        {
            name: "pero_no_le_digas_a_nadie",
            discount: 30
        },
        {
            name: "es_un_secreto",
            discount: 25
        },
    ];

    //opcion 1: Expresión de función:No aplica el hoisting
/*     const isCouponValueValid = function(coupon){
        return coupon.name === couponValue
    };

    const userCoupon = coupons.find(isCouponValueValid); */
    
    //opcion 2: Funcion de flecha
    const userCoupon = coupons.find(coupon => coupon.name === couponValue)
    
    if(!userCoupon){
        alert("El cupon " + couponValue + " no es valido")
    }else{
        const precioConDescuento= calcularPrecioConDescuento(priceValue,userCoupon.discount);

        const resultP = document.getElementById("ResultP");
    
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }

/*     switch (couponValue) {
        case coupons[0]:
            descuento=15;
            break;
        case coupons[1]:
            descuento=30;
            break;
        case coupons[2]:
            descuento=25;
            break;
        default:
            descuento=0;
            break;
    } */



}

/* console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
}); */