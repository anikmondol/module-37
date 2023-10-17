const products = [
    {name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver'},
    {name: 'phone', price: 7000, brand: 'iphone', color: 'golden'},
    {name: 'watch', price: 3000, brand: 'casio', color: 'yellow'},
    {name: 'sunglass', price: 300, brand: 'lenovo', color: 'silver'}
];


// 1. map
const brand = products.map(product => product.name);
// console.log(brand);
// const price = products.map(product => product.price);
// console.log(price);


// 2. ForEach
// products.forEach(product => console.log(product));
// products.forEach(product => console.log(product.color));

// products.forEach(product =>{

// })


// 3. filter
const cheap = products.filter(product => product.price <= 5000);
// console.log(cheap);
const specificName = products.filter(product => product.name.includes('n'));
// console.log(specificName);


// 4. fined

const special = products.find(product => product.name.includes('n'));
// console.log(special);


//5. reduce
const priceSum = products.reduce((a, b) => a + b.price, 0);
console.log(priceSum);
