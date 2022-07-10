let buttonSelections = Array.from(document.querySelectorAll('.todo-list__select'));
const indicator = document.querySelector('.todo-list__select--indicator')

let buttonActive = buttonSelections[0];


buttonActive.classList.add('todo-list__select--active')

buttonSelections.forEach(element => {
    element.addEventListener('click', setButtonActive)
})

function setButtonActive(e) {
    e.preventDefault();
    if(buttonActive === e.target) return;
    buttonActive.classList.remove('todo-list__select--active')
    buttonActive = e.target;
    setTimeout(() => {
        buttonActive.classList.add('todo-list__select--active')
    }, 100)
    setIndicator(e)
}

function setIndicator(e) {
    e.preventDefault();
    const index = buttonSelections.indexOf(buttonActive)
    left = index === 0 ? '0px' : '20px';
    indicator.style.transform = `translateX(calc(100% * ${index} + ${left}))`    
}