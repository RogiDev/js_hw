let array = [];
let counter = 0;
while(counter < 6){
let input = +prompt("please enter a number: ");
array.push(input);
counter++;
}
console.log(Math.max(...array));
console.log(Math.min(...array));
var total = 0;
for(let item of array){
    total += item;
}
console.log(total);

for(let item of array){
    if(item%2 === 0 ){
        console.log('even');
    }else{
        console.log("odd"); 
    }
}


secondLargest = array.slice(0).sort((a,b) =>  b-a)[1]; 
console.log(secondLargest);

let matrix = [[true,true],[true,false],[false,true],[false,false]];





