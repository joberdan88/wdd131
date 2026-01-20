// Function Declaration
function fullName(first, last) {
    return `${first} ${last}`;
}

let firstName = 'Antonia';
let lastName = 'Francesca';

console.log(fullName(firstName, lastName));


//Function Expression
const fullName2 = function (first, last) {
    return `${first} ${last}`;
};

console.log(fullName2('Antonia', 'Francesca'));

// Arrow Function Expression
const fullName3 = (first, last) => `${first}, ${last}`;
console.log(fullName3('Antonia', 'Francesca'));

// Functions in html
document.querySelector('#fullName').innerHTML = fullName(firstName, lastName);