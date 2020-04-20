// q1

function reverseNumbers(num) {
    var i = num;
    var reverse = 0;
    while(i > 0)
    {
        var digit = i % 10;
        reverse = (reverse * 10) + digit;
        i = parseInt(i / 10);
    }
    console.log(`${reverse}`);
    return reverse;
}
var enterNum = +prompt("Enter a number: ");
reverseNumbers(enterNum);

//q2

function isPrime(num1) {
    var prime = num1 != 1;
    for(var i=2; i<num1; i++) {
        if(num1 % i === 0) {
            prime = false;
           
            break;
        }
    }
    return prime;
}
var enterNum = +prompt("Enter a number: ");
var primeNum = isPrime(enterNum);
if(primeNum){
    console.log(`the number is prime`);
}else{
    console.log(`number is not prime`);
}

//q3 

function getType(val) {
    return typeof(val);
}
var aa;
console.log(getType(3)); //num
console.log(getType("a")); // string
console.log(getType({name:"igor",age:30})); // obj
console.log(getType(true)); //bool
console.log(getType(getType));
console.log(getType(aa));

//q4

function convertDollarToSekel(sekel){
    return sekel * 3.554;
}
function convertSekelToDollar(dollar){
    return dollar / 3.554;
}
function convertEuroToSekel(sekel){
    return sekel * 3.865;
}
function convertSekelToEuro(euro){
    return euro / 3.865;
}
console.log(convertDollarToSekel(200));
console.log(convertEuroToSekel(200));
console.log(convertSekelToDollar(1).toFixed(2));
console.log(convertSekelToEuro(1).toFixed(2));

