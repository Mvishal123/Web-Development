const addListBtn = document.querySelector('.add-list');
const removeListBtn = document.querySelector('.remove-list');
const listBox = document.querySelector('.list-box');
const list = document.querySelectorAll('.list');

addListBtn.addEventListener('click', () => {
    let list = document.createElement('div');
    let para = document.createElement('p');
    list.setAttribute('class', 'list');
    list.setAttribute('contentEditable', 'true');
    list.appendChild(para);

    listBox.appendChild(list);
})


removeListBtn.addEventListener('click', () => {
    let numberOfLists = document.querySelectorAll('.list');
    if(numberOfLists.length === 0) return;
    else{
        numberOfLists[numberOfLists.length-1].remove();
    }
})