const task = document.getElementById('todo-input');

inputField.addEventListener('input', (event) => {
    outputSpan.innerText = event.target.value;
})

alert(task)