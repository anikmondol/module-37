// 1. array destructuring

const numbers = [42, 65];
const x = numbers[0];
const y = numbers[1];

// console.log(x,y);

// const [first, seconde] = [42, 65];
const [first, seconde] = numbers;

function getValues(num1, num2){
    const num = [num1, num2]
    return num;
};

const my = getValues(90, 10)
// console.log(my);


// object destructuring

const student = {
    name : 'anik',
    age : 22,
    class : '11',
    programming: ['python', 'javascript', 'C#'] 
}

const [firstProgram, secondeProgram, ...other] = student.programming;

// console.log(other);

const employee = {
    ide: 'vsCode',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js', 'python'],
    specification: {
        height: 66,
        weight: 67,
        address: 'Dhaka',
        drink: 'Water',
        watch:{
            color: 'black',
            price: 550,
            brand: 'garmin'
        }
    }
};

const {machine, ide} = employee;
const {height, address} = employee.specification;
const [html, css, ...other1] = employee.languages;
const {brand, price} = employee.specification.watch;
console.log(price);