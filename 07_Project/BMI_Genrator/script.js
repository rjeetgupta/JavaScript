const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result')
    const p = document.querySelector('#weight-result')

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid height ${height}`
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid height ${weight}`
    }
    else {
        const bmi = (weight / ((height * height) / 1000)).toFixed(2);
        // show the result 
        result.innerHTML = `<span>Result : ${bmi}</span>`;


        if (bmi < 18.3) {
            p.innerHTML = `Under weight`;
        }
        if (bmi > 18.6 && bmi < 24.5) {
            p.innerHTML = `Normal Range`;
        }
        if (bmi > 24.5) {
            p.innerHTML = `Over weight`;
        }
    }


    
});


