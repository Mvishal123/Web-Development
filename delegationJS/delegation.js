const newSport = document.createElement('li');
const ul = document.querySelector('.sports-list');

newSport.innerHTML = "Rugby";

ul.appendChild(newSport);

ul.addEventListener('click', (e) => {
    console.log(e.target.textContent + " is clicked");

    const change = e.target;
    if(change.matches('li')){
    change.style.backgroundColor = "lightgrey";
    };


})

