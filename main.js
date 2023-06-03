let hr = document.getElementById('hour');
let min = document.getElementById('minute');
let sec = document.getElementById('second');

function displayTime(){
    let date = new Date();
    
    let hHand = date.getHours();
    let mHand = date.getMinutes();
    let sHand = date.getSeconds();

    let hrRotation = 30*hHand + mHand/2;
    let mnRotation = 6*mHand;
    let scRotation = 6*sHand;
    
    hr.style.transform =`rotate(${hrRotation}deg)`;
    min.style.transform = `rotate(${mnRotation}deg)`;
    sec.style.transform = `rotate(${scRotation}deg)`;
}

setInterval(displayTime,1000);