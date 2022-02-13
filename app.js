const submitBtn = document.querySelector('.submit-btn');
const clearBtn = document.querySelector('.clear-list');
const newItem = document.getElementById('add-item');
const ul = document.getElementById('list');
let btns = document.querySelectorAll('.btn2');

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
            
            button.addEventListener('click', modifyItem)
        }) 
        
    }
}; 



const modifyItem = (e) => {
    if (e.target.id == 'done-btn'){
        console.log('done')
    };
    if (e.target.id == 'delete-btn'){
        console.log('del')
    };
    if (e.target.id == 'edit-btn'){
        console.log('ed')
    }
}


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

// btn to mark complete, delete, edit item
btns.forEach(function(e){
    e.addEventListener('click', modifyItem)
})

// submit button to add item to page on click
submitBtn.addEventListener('click', createNewItem);


// button to clear the list of all items
clearBtn.addEventListener('click', clearList);