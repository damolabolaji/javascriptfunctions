// *Variables*
// Create a variable and console log the value

// Create a variable, add 10 to it, and alert the value

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

// Create a function that divides one number by another and returns the remainder

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in






// Your code here.

// We want to write a program that prints numbers and labels: 
// the numbers of cows and chickens on a farm, with the 
// words Cows and Chickens after them and zeros padded 
// before both numbers so that they are always three digits long.

// 007 Cows
// 011 Chickens


//pseudo code
//1. get the numbers 
//2. to pad them, you need to convert the numbers to string
//3. get the present length of the string. if less than 3, add a zero. keep adding zero until it is 3 digits (loop)
//4. console.log the result and add label to it (concatenation)



//function to console log result


// let cow = document.querySelector('#cows')
// let chicken = document.querySelector('#chicken')
// let pigs = document.querySelector('#pigs')
// let errorMsg = document.querySelector('#msg')
// let formList = document.querySelector('#string-list')


// document.querySelector('#my-form').addEventListener('submit', printFarmList)

// function printFarmList(e){
//   e.preventDefault();

//   if(cow.value === '' || chicken.value === '' || pigs.value === ''){
//     errorMsg.classList.add('error');
//     errorMsg.innerHTML = 'Please enter a value in the empty fields'
//     setTimeout(() => errorMsg.remove(), 3000 )
    
//   }else{

//     function farmList(input,label){
    
  
//       while(input.length < 3){
//         input = '#' + input;
//       }

//       const li = document.createElement('li')
//       li.appendChild(document.createTextNode(`${label} : ${input}`))
//       formList.appendChild(li)
      
//     }

//     function printList(num1,num2,num3){
    
//       farmList(num1,'cow');
//       farmList(num2,'chicken');
//       farmList(num3,'pig');
//     }
    
//     printList(cow.value, chicken.value, pigs.value);
  
  
  
    
//   }
   
// }


let a = 5;
let b = 3;

a = 0 + b;

console.log(a);
console.log(b);




//function to creeate an unordered list










// function printFarmList(){

//   cowCount = cow.value;
//   chickenCount = chicken.value;
//   pigsCount = pigs.value;

//   console.log(`${cowCount},${chickenCount},${pigsCount}`);

// console.log(`${cow.value},${chicken.value},${pigs.value}`);
   
// }


























// function printZeroPaddedWithLabel(number, label) {
//   let numberString = String(number);
//   while (numberString.length < 3) {
//     numberString = "0" + numberString;
//   }
//   console.log(`${numberString} ${label}`);
// }

// function printFarmInventory(cows, chickens, pigs) {
//   printZeroPaddedWithLabel(cows, "Cows");
//   printZeroPaddedWithLabel(chickens, "Chickens");
//   printZeroPaddedWithLabel(pigs, "Pigs");
// }

// printFarmInventory(7, 11, 3);