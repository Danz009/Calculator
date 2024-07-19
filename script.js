let numbers = document.querySelectorAll('.number')
let calculatorScreen = document.getElementById('calculatorScreen');

numbers.forEach(el => {
    el.addEventListener('click', function() {
        calculatorScreen.value = calculatorScreen.value + el.innerText;
    });
});