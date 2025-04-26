const sumar=(num1,num2)=>num1+num2;
const restar=(num1,num2)=>num1-num2; 
const multiplicar=(num1,num2)=>num1*num2;
const dividir=(num1,num2)=>num1/num2;
function validarNums(num1,num2){
    return (isNaN(num1)||isNaN(num2));
}
const pi=3.14;
const strNumeros = ["dos","cuatro","ocho","diez"];

export default {
    sumar,
    restar,
    multiplicar,
    dividir,
    pi,
    strNumeros,
    validarNums
};
