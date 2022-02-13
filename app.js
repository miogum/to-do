const submitBtn = document.querySelector('.btn');
const clearBtn = document.querySelector('.clear-list');
const newItem = document.getElementById('add-item');
const list = document.getElementById('list');


// function to add item
const addItem = () => {
    // creates a new 'li' on HTML
    let newLi = document.createElement('li');
    // sets the value of the new 'li' to the inut from the form
    newLi.innerText = newItem.value;
    // adds the new item to the HTML page
    list.appendChild(newLi)
}; 

// function to remove all elements from list
const clearList = () => {
    list.remove();
};

// add item with the enter key
// document.addEventListener('keyup', function(event){
//     if(event.key === 13){
//         console.log('hrllo');
//     }
// });

// submit button to add item to page on click
submitBtn.addEventListener('click', addItem);
submitBtn.addEventListener('click', addItem);

// button to clear the list of all items
clearBtn.addEventListener('click', clearList);