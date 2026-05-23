const form = document.getElementById("todo-form");
const inout = document.getElementById("todo-input");
const todolist = document.getElementById("todo-list");

form.addEventListener("submit",function(event)
{
    event.preventDefault();
    const task = InputDeviceInfo.value;
    const li = document.createElement("li");
    li.innertext = taskText;
    todolist.appendChild(li);
    InputDeviceInfo.value = "";
});