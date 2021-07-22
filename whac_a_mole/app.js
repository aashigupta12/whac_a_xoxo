// . is used to denote class
// we have selected all the class named square
const square = document.querySelectorAll(".square");

const mole = document.querySelectorAll(".mole");
// # is used to denote id
const timeLeft = document.querySelector("#time-left");
let score = document.querySelector("#score");

let result  = 0;
let currentTime = timeLeft.textContent;

function randomSquare(){
    square.forEach(className => {
        className.classList.remove("mole");
    })

    let randomPosition = square[Math.floor(Math.random() * 9)];
    randomPosition.classList.add("mole");

    //assign id of randomPosition ti hitPosition for later use
    hitPosition = randomPosition.id;
}

square.forEach(id => {
    id.addEventListener("mouseup", () => {
        if(id.id === hitPosition){
            result = result  + 1;
            score.textContent = result;
            hitPosition = null;
        }
    })
})

function moveMole(){
    let timerId = null;
    timerId = setInterval(randomSquare, 1000);
}

moveMole();

function countDown(){
    currentTime--;
    timeLeft.textContent = currentTime;

    if(currentTime === 0){
        clearInterval(timerId);
        alert("GAME OVER!, your score is " +result);
    }
}

let timerId = setInterval(countDown , 1000);