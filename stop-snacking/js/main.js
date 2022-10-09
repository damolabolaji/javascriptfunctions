//Create a function that grabs the number of snacks from the input and tells you to stop that many times
document.querySelector('#help').addEventListener('click', stopSnacking)

function stopSnacking(){
    let food = document.querySelector('#foods').value
    document.querySelector('#stops').innerText += '' //removes whatever 'stops' already printed
    for(let i = 1; i <= food; i++){
        document.querySelector('#stops').innerText += 'stop eating that!'
    }
}