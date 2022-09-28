// *Variables*
// Create a variable and console log the value

const dustBin = 1;
console.log(dustBin)

// Create a variable, add 10 to it, and alert the value
let sum = 9;
sum = sum + 10
alert(sum)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub(num1,num2,num3,num4){
    
    let subtraction = num1 - num2 - num3 - num4
    return subtraction

}
alert(sub(50,4,5,7))

// Create a function that divides one number by another and returns the remainder
let modu = (a,b) => a % b
console.log(modu(50,6))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50, alert Jumanji
function Jumanji(x,y) {
    let result = x + y;
    if(result > 50){
    alert('Jumanji')
}

Jumanji(50,40);


}
