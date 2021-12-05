let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('calc-button'));

buttons.map((button) => {
    button.addEventListener('click', (element) => {
        switch (element.target.innerText) {
            case 'AC':
                display.innerText = '';
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error!';
                }
                break;
            case 'DEL':
                display.innerText = display.innerText.slice(0, -1);
                break;
            default:
                display.innerText += element.target.innerText;
        }
    })
})