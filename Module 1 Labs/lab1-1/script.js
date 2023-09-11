document.addEventListener('DOMContentLoaded', function () {

    const diceResultElement = document.getElementById('diceResult');
    const rollButton = document.getElementById('rollButton');

    function rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }

    rollButton.addEventListener('click', function () {
        const diceRoll = rollDice();
        diceResultElement.textContent = diceRoll;
    });

});

