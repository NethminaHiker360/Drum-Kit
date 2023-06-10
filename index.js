// for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click",function (){
//         alert("I got Clicked!");
//     });
// }

function add(num1,num2){
    return num1+num2;
}

function minus(num1,num2){
    return num1-num2;
}

function multiply(num1,num2){
    return num1*num2;
}

function devide(num1,num2){
    return Number(num1/num2).toFixed(2);
}

function calculator(num1,num2,operator){
    return operator(num1,num2);
}


console.log(calculator(8,3,add));