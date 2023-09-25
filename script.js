const daysElement = document.querySelector(".days")
const hoursElement = document.querySelector(".hours")
const minutesElement = document.querySelector(".minutes")
const secondsElement = document.querySelector(".seconds")
const counterTimer = document.querySelector(".counterTimer");
const heading = document.querySelector("h1");

console.log(heading);
console.log(counterTimer);
const second=1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;

const timerFunction = () => {

    let now = new Date();
    let dd = String(now.getDate()).padStart(2, "0");
    let mm = String(now.getMonth() + 1).padStart(2, "0");
    let yyyy = now.getFullYear();

    const enteredDay = prompt("Enter Day").padStart(2, "0");
    const enteredMonth = prompt("Enter Month").padStart(2,"0");
    now = `${mm}/${dd}/${yyyy}`;
    let targetDate = `${enteredMonth}/${enteredDay}/${yyyy}`;
    
    if(now > targetDate){
        targetDate = `${enteredMonth}/${enteredDay}/${yyyy + 1}`;
    }
    const intervalId = setInterval(()=>{
    const timer = new Date(targetDate).getTime();
    const today = new Date().getTime();
    const difference = timer - today;
    const daysLeft = Math.floor(difference/day);
    const hoursLeft = Math.floor((difference%day)/hour);
    const minutesLeft = Math.floor((difference%hour)/minute);
    const secondsLeft = Math.floor((difference%minute)/second);
    
    daysElement.innerText = daysLeft;
    hoursElement.innerText = hoursLeft;
    minutesElement.innerText = minutesLeft;
    secondsElement.innerText = secondsLeft;
    
    if(difference < 0){
        counterTimer.style.display = "none";
        heading.innerText = "Hurray. Your time is here";
        clearInterval(intervalId);
    }
    //console.log(`${daysLeft}:${hoursLeft}:${minutesLeft}:${secondsLeft}`)
},0);
}


timerFunction();