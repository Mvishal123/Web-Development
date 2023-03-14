const revealBtn = document.querySelector('.reveal-btn');
const revealContent = document.querySelector('.revealed-content');

revealBtn.addEventListener('click', () => {
    if(revealContent.classList.contains('content-disappear')){
        revealBtn.classList.add('full-btn');
        revealBtn.textContent = 'reveal less'
        revealContent.classList.remove('content-disappear');
    } else{
        revealContent.classList.add('content-disappear');
        revealBtn.textContent = 'reveal more';
    }
})