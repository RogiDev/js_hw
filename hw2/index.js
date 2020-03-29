// question 1

let num = prompt('please enter a number:');
if(num > 928 || num < 532){
    alert(num);
}
// q2
let num1 = prompt(`please enter a number`);
let num2 = prompt(`please enter a number`);
let num3 = prompt(`please enter a number`);
if(num3 > num2 && num2 > num1 ){
    alert('increasing...');
}
// q3
let num4 = prompt('please enter a number');
let num5 = prompt('please enter a number');
if(num5 > num4){
    alert("growing...");
}
// q 4
let someNum = prompt("please enter a number:");
if(someNum%2 === 0){
    alert("Even");
}else{
    alert("Odd");
}

// q5
let num6 = prompt('please enter a number:'); 
let num7 = prompt('please enter a number:'); 

if(num7 > num6){
    alert(num6);
    alert(num7);
}else{
    alert(num7);
    alert(num6);
}

// q6
let num8 = prompt('please enter a number');
if(num8 > 0){
    alert(`your number is: ${num8} and he is positive`);
}else if(num8 < 0){
    alert(`your number is: ${num8} and he is negative`);
}else{
    alert(`your number is: ${num8}`);
}