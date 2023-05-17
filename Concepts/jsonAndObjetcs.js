// JSON and JS objects
let obj = {
    name: "Vishal",
    age: 18,
    gender: "male",
    family: {
        father: "Maheshwaran",
        mother: "Sathya Priya",
        brother: "Vaibhav"
    }
}

let json = JSON.stringify(obj);
console.log(json);
console.log(JSON.parse(json));