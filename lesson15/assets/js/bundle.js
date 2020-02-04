var loginInput = document.querySelector('.js-Login');

loginInput.addEventListener('change', handlerLoginInputChange);

function handlerLoginInputChange(event) {
    console.log('login input was change:', event.target.value);
}

loginInput.addEventListener('keydown', handlerLoginInputKeyDown);

function handlerLoginInputKeyDown(event) {
    console.log('login input was keydown:', event.target.value);
}