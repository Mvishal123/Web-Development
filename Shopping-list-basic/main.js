const ul = document.querySelector('ul');
const addBtn = document.querySelector('.add-btn');
const inputData = document.querySelector('.inputData');

// const doneBtn = document.getElementsByClassName('done');
// const deleteBtn = document.getElementsByClassName('remove');
// const listItems = document.querySelectorAll('li');

function addListItems(){
        // creating elements
        let li = document.createElement('li');
        let strikeBtn = document.createElement('button');
        let deleteBtn = document.createElement('button');

        // creating buttons
        strikeBtn.innerHTML = 'done';
        strikeBtn.setAttribute('class', 'done');
        deleteBtn.innerHTML = 'remove';
        deleteBtn.setAttribute('class', 'remove');
        
        // inserting buttons
        li.appendChild(document.createTextNode(inputData.value));
        li.appendChild(strikeBtn);
        li.appendChild(deleteBtn);

        // button functions
        strikeBtn.addEventListener('click', () => {
            li.classList.toggle('doneStrike');
        })

        deleteBtn.addEventListener('click', () => {
            li.parentNode.removeChild(li);
        })



        ul.appendChild(li);
        inputData.value = "";
}



addBtn.addEventListener('click', () => {
    if(inputData.value.length > 0){
        addListItems();
    }
})

inputData.addEventListener('keypress', (event) => {
    if(inputData.value.length > 0 && event.key === 'Enter'){
        addListItems();
    }
})
