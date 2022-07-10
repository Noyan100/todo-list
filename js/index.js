let buttonSelections = Array.from(document.querySelectorAll('.todo-container__select'));
const indicator = document.querySelector('.todo-container__select--indicator')

let buttonActive = buttonSelections[0];

buttonSelections.forEach(element => {
    element.addEventListener('click', setButtonActive)
})

function setButtonActive(e) {
    e.preventDefault();
    if(buttonActive === e.target) return;
    buttonActive = e.target;
    setIndicator(e)
}

function setIndicator(e) {
    e.preventDefault();
    const index = buttonSelections.indexOf(buttonActive)
    left = index === 0 ? '0px' : '20px';
    indicator.style.transform = `translateX(calc(100% * ${index} + ${left}))`    
}