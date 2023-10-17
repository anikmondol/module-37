// // 1. json
// const student = {
//     name: 'anik',
//     age: 22,
//     class: '11',
//     programming: ['python', 'javascript', 'C#']
// }

// const studentJSON = JSON.stringify(student);
// // console.log(student);
// // console.log(studentJSON);
// const studentParse = JSON.parse(studentJSON);
// // console.log(studentParse);


// // objects = keys, values

// const keys = Object.keys(student);
// const values = Object.values(student);
// console.log(values);
// console.log(keys);


// // 2. fetch

// // fetch(`url`)
// //     .then(res => res.json())
// //     .then(data => console.log(data));

// // for 

// const numbers = [10, 58, 74, 112, 85, 956];

// numbers.forEach(num => console.log(num));
// const double = numbers.map(num => num* 2);
// console.log(double);

// for of on array like object
// loop on an object using for in


// add or remove from an array
const products = [
    {name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver'},
    {name: 'phone', price: 7000, brand: 'iphone', color: 'golden'},
    {name: 'watch', price: 3000, brand: 'casio', color: 'yellow'},
    {name: 'sunglass', price: 300, brand: 'lenovo', color: 'silver'}
];

const newProduct = {name: 'webcam', price: 700, brand: 'Lal'};

// copy products array and then add newProduct

const newProducts = [...products, newProduct];
// console.log(newProducts);

const remaining = newProducts.filter(product => product.name !== 'phone');
console.log(remaining);