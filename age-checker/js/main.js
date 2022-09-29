//Create a conditonal that checks their age
//If under 16, tell them they can not drive


//--- Harder
//On click of the h1
document.querySelector('h1').addEventListener('click', takeValue)


//Take the value from the input

function takeValue(){
    let age = document.querySelector('#danceDanceRevolution').value

    
if(age< 16){
    document.querySelector('p'). innerHTML = 'can not drive'
   
}

//If under 18, tell them they can't hate from outside the club, because they can't even get in

else if(age < 18){
    document.querySelector('p'). innerHTML = 'can\'t hate from outside the club, because they can\'t even get in'
}
//If under 21, tell them they can not drink
else if(age < 21){
    document.querySelector('p'). innerHTML ='can not drink'
}
//If under 25, tell them they can not rent cars affordably
else if(age < 25){
    document.querySelector('p'). innerHTML ='can not rent cars affordably'
}
//If under 30, tell them they can not rent fancy cars affordably
else if(age < 30){
    document.querySelector('p'). innerHTML ='can not rent fancy cars affordably'
}
//If over 30, tell them there is nothing left to look forward too
else if(age > 30){
    document.querySelector('p'). innerHTML ='Sorry, there is nothing left to look forward too'
}

    //Place the result of the conditional in the paragraph

    
}

