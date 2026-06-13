// Get the form element
const form = document.querySelector('#todo-form');
let clickCount = 0

// Listen for form submission
form.addEventListener('submit',(event) => {
    event.preventDefault();
    clickCount++;

    // Get the input value from the text field
    const inputValue = document.querySelector('#todo-input').value;

    // Create a new task div with the same structure as in HTML
    const newDiv = document.createElement('div');
    newDiv.className = 'task';
    newDiv.innerHTML = `
        <div class="content">
            <input type="text" class="text" value="${inputValue}" readonly />
        </div>
        <div class="action">
            <button type="button" class="edit">Edit</button>
            <button class="delete">Delete</button>
        </div>
    `;

    // Add the new div to the output container
    document.querySelector('#outputContainer').appendChild(newDiv);

    // Add delete button functionality
    newDiv.querySelector('.delete').addEventListener('click', function() {
        newDiv.remove(); // Remove the task
    });

    // Add edit button functionality
    newDiv.querySelector('.edit').addEventListener('click', function() {
        const textInput = newDiv.querySelector('.text');
        textInput.removeAttribute('readonly'); // Enable editing
        textInput.focus();
    });

    // Clear the input field after adding
    document.querySelector('#todo-input').value = '';
});