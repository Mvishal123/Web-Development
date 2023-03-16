const modalBtn = document.querySelector('.modal-btn');
const modalMain = document.querySelector('.modal-main');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', () => {
    modalMain.style.display = "block";
});

closeBtn.addEventListener('click', () => {
    modalMain.style.display = "none";
});

window.addEventListener('click', (e) => {
    if(e.target === modalMain){
    modalMain.style.display = "none";
    };
});