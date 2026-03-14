const person = {
    name: "John",
    age: 25,
    isStudent: true,

    greet: function(){
        return "hello my name is  " + this.name + " and I am " + this.age + " years old";
    }
};
console.log(person.greet());

const people = [
    {name: "James", age: 32},
    {name: "presley", age: 25},
    {name: "betty", age: 65},
    {name: "rebecca", age: 25},
    {name: "Alice", age: 30},
    {name: "Bob", age: 40},
    {name: "Charlie", age: 35},
    {name: "Diana", age: 28}
];

let sum = 0;
function averageAge() {

    for(let i = 0; i < people.length; i++) {
    sum += people[i].age;
    
    } 
    return sum / people.length;
}
console.log("Average age:", averageAge());



        document.getElementById('contactForm').addEventListener('submit', function(event) {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name) {
                alert('Please enter your name.');
                event.preventDefault();
                return;
            }

            if (!email) {
                alert('Please enter your email.');
                event.preventDefault();
                return;
            }

            if (!message) {
                alert('Please enter your message.');
                event.preventDefault();
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                event.preventDefault();
                return;
            }

        });

