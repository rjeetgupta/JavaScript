const btn = document.querySelectorAll(".button");
const body = document.querySelector("body");

btn.forEach(function (button) {
    button.addEventListener('click', function(e) {
        if (e.target.id === 'grey') {
            document.body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'white') {
            document.body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'blue') {
            document.body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'yellow') {
            document.body.style.backgroundColor = e.target.id;
        }
    })
})