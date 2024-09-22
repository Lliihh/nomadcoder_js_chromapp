
const clockEl = document.querySelector(".clock");


function today(){
    const date = new Date();
    clockEl.innerText = `${date.getFullYear()}년 ${date.getMonth()+1}월 ${date.getDate()}일 ${date.getHours()}시 ${date.getMinutes()}분 ${date.getSeconds()}초`;
}
today();
setInterval(today, 1000);