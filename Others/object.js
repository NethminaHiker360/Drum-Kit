//===========================================================================

// Constructor Function

function Bellboy(name, age, salary, languages) {
  this.name = name;
  this.age = age;
  this.salary = salary;
  this.languages = languages;
  this.clean=function(){
    return "Cleaning in progress"
  }
}

var bellB1 = new Bellboy('saman', 23, 40000, ['japan', 'eng']);

// console.log(bellB1.clean());

//===========================================================================

// Higer order Function

function add(num1, num2) {
  return num1 + num2;
}

function minus(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}
function devision(num1, num2) {
  return Number(num1 / num2).toFixed(2);
}

function calc(num1, num2, operator) {
  return operator(num1, num2);
}

// console.log(calc(7, 4, devision));

//===========================================================================


function anotherAddEventListner(typeofEvent,callback){
  var eventhappened={
    eventType:"keypress",
    key:"p",
    durationOfKeyPress:2
  }
  if(eventhappened.eventType===typeofEvent){
    callback(eventhappened);
  }
}