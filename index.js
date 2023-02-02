const buttons = document.querySelectorAll('button');
const input = document.getElementById('input');
const equal = document.getElementById('equal');
const history = document.getElementById('history');
buttons.forEach(button => {
    button.onclick = () => {
        input.value += button.value;
    }
});
equal.onclick = () => {
    const Value = eval(input.value);
    history.innerHTML += input.value + '<br>';
    input.value = Value;
}
