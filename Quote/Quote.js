const button = document.querySelector('.next-btn');
const quote = document.querySelector('.quote');
const person = document.querySelector('.person');

let quotes = [
    {
        quote: "“A room without books is like a body without a soul.”",
        person: "Marcus Tullius Cicero"
    }, 
    {
        quote:"“So many books, so little time.”",
        person: "Frank Zappa"
    }, 
    {
        quote:"“A room without books is like a body without a soul.”",
        person: "Marcus Tullius Cicero"
    }, 
    {
        quote:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        person: "Bernard M. Baruch"
    }, 
    {
        quote:"“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”",
        person: "William W. Purkey"
    }, 
    {
        quote:"“In three words I can sum up everything I've learned about life: it goes on.”",
        person:"Robert Frost"
    }, 
    {
        quote:"“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
        person: " J.K. Rowling."
    }
];

button.addEventListener('click', () => {
    const random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})