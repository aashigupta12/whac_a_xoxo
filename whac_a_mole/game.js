const square = document.querySelectorAll(".square");     //for class we use (.)

const mole = document.querySelectorAll(".mole");        

const timeLeft = document.querySelector("#time-left");    //for id we use(#)

let score = document.querySelector("#score");

let result = 0;
let currentTime = timeLeft.textContent;//60


function randomSquare()
{
    square.forEach(className => {
        className.classList.remove("mole");
    })

    let randomPosition = square[Math.floor(Math.random() * 9)];
    randomPosition.classList.add("mole");

    hitPosition = randomPosition.id; 
}


square.forEach(id => {
    id.addEventListener("mouseup", () => {
        if(id.id === hitPosition)
        {
           result = result + 1;
           Score.textContent = result;
           hitPosition = null  ;
        }  
    } )
})

function moveMole()
{
    let timerId = null;
    timerId = setInterval(randomSquare, 1000);

}
//starting of mole moving
moveMole();

function countDown()//60
{
    currentTime--; //59
    timeLeft.textContent = currentTime;
    if (currentTime === 0) 
    {
        clearInterval(timerId);
        alert("GAMEOVER!!" +result)   ;
     }
     
}

let timerId = setInterval(countDown,1000);




