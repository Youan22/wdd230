const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', (e) => {
e.preventDefault();
  const inputValue = input.value; 

  if (inputValue) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = inputValue; 
    deleteButton.textContent = '❌';
    
    deleteButton.addEventListener('click', () => {
      list.removeChild(li);
      input.focus();

    });

    li.appendChild(deleteButton);

    list.appendChild(li);

    input.value = '';


  } 
    input.focus();
  
});

/*const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
  const inputValue = input.value;

  if (inputValue) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = inputValue;
    deleteButton.textContent = '❌';
    li.appendChild(deleteButton);

    list.appendChild(li);

    deleteButton.addEventListener('click', () => {
      list.removeChild(li);
    });

    // Disable input after adding to the list
    input.value = ''; // Clear input
    input.disabled = true;
  } else {
    input.focus();
  }
});*/

