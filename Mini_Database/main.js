var database = [
    {
        username: "Vishal", 
        password: "password123"
    },
    {
        username: "Andrei",
        password: "123"
    },
    {
        username: "Anne",
        password: "anne123"
    }
];

var newsfeed = [
    {
        username: "Vishal",
        news: "Earthquake in Turkey"
    },
    {
        username: "Andrei",
        news : "It is so cold outside"
    },
    {
        username: "Anne",
        news: "Anne has given birth to 4 new kittens"
    }
];

var username = prompt("Enter your username: ");
var password = prompt("Enter your password: ");
display(database, newsfeed, username, password);
var index;

function display(database, newsfeed, username, password){
    if(user_input(database, username, password)){
        console.log(newsfeed[index]);
    }else{
        alert("the entered credentials are wrong");
    }
}


function user_input(database, username, password){
    for(var i = 0; i<database.length; i++){
        if(database[i].username === username && database[i].password === password){
            index = i;
            return true;
        }
    }
    return false;
}

