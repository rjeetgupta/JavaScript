const clock = document.getElementById('clock');
// const clock = document.querySelctor('#clock');



setInterval(function () {
    const date = new Date();
// console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)