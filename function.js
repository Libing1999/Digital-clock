// setInterval(() => {
//     let date = new Date()
//     let clock = document.getElementById('clock')
//     clock.innerHTML =
//         date.getHours() + ":" +
//         date.getMinutes() + ":" +
//         date.getSeconds()
// }, 1000);


setInterval(() => {
    const clock = document.querySelector("#clock");
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day_night = "AM";
    if (hours > 12) {
        day_night = "PM";
        hours = hours - 12;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    clock.textContent = hours + ":" + minutes + ":" + seconds + " " + day_night;
});