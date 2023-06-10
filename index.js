// for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click",function (){
//         // var audio=new Audio("sounds/tom-1.mp3");
//         // audio.play();
//         this.style.color = 'blue';
//     });
// }

function BellBoy(name,age,hasWorkPermit,languages){  // Constructor Function -- start function name with Capital Letter
    this.name=name;
    this.age=age;
    this.hasWorkPermit=hasWorkPermit;
    this.languages=languages;
}

var bellBoy01=new BellBoy("tim",21,true,["japanese","english"]);

console.log(bellBoy01.age);