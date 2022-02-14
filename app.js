const submitBtn = document.querySelector('.submit-btn');
const clearBtn = document.querySelector('.clear-list');
const newItem = document.getElementById('add-item');
const ul = document.getElementById('list');
let btns = document.querySelectorAll('.btn2');
const doneBtn = document.getElementById('done-btn');
const deleteBtn = document.getElementById('delete-btn');
const editBtn = document.getElementById('edit-btn');

// function to add item
const createNewItem = () => {
    // code to prevent empty string being added
    if (newItem.value == ""){
        alert('Uh-oh, Please enter a new task first.')
    }
    // code to create new task 
    else {
        // creates a new 'li' on HTML
        const newLi = document.createElement('li');
        // sets the value of the new 'li' to the inut from the form
        newLi.innerText = newItem.value;
        // adds the new item to the HTML page
        ul.appendChild(newLi);
        btns.forEach(function(btn){
            let button = document.createElement('button');
            button.innerHTML = btn.innerHTML
            newLi.appendChild(button)
            
            //button.addEventListener('click', modifyItem)
        }) 
        
    }
  
}; 


// function to remove all elements from list
const clearList = () => {
    list.remove();
};


// add item with the enter key
const addItemAfterKeypress = (event) => {
    if (event.keyCode === 13) {
        createNewItem();
    }
};
newItem.addEventListener('keypress', addItemAfterKeypress);


// submit button to add item to page on click
submitBtn.addEventListener('click', createNewItem);


// button to clear the list of all items
clearBtn.addEventListener('click', clearList);