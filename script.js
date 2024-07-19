let numbers = document.querySelectorAll('.number')
let calculatorScreen = document.getElementById('calculatorScreen');

numbers.forEach(number => {
    number.addEventListener('click', function() {
        // Convert the current screen value and the clicked number to numbers
        let currentScreenValue = Number(calculatorScreen.value);
        let clickedNumber = Number(number.innerText);

        // Perform addition and update the calculator screen
        calculatorScreen.value = (currentScreenValue + clickedNumber).toString();
    });
});