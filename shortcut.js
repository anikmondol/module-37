// true = 'almas', 2, true, {}, []
// false = '', 0, false, null, undefined


// check truthy values
let myVar = 5;
// if(myVar){
//     console.log(myVar = myVar * 100);
// }
// else{
//     console.log(myVar = 0);
// }


// you check negative or falsy anything
let myMoney = 50;
if(!myMoney){

}


let money = 80;
let food ;

// if(money > 100){
//     console.log(food = 'biryani');
// }
// else{
//     console.log(food = 'cha biscuit');
// }

// ternary 

let food1 = money > 100 ? 'biryani' :  'cha biscuit';

// console.log(food1);

let drink = (money > 100 && myVar > 100) ? 'coke' : 'filter water';
// console.log(drink);


// number to string conversion
const n = 52;
const v = n + '';
// console.log(typeof(v));

// string to number conversion
const w = '55';
const e = +w;
// console.log(typeof(e));

// 
const isActive = true;

const showUser = () => console.log('display User');

const hideUser = () => console.log('hide User');

// isActive && showUser() // use && if the left side is true then right side will be executed
// isActive || hideUser() // use || if the left side false then right side will be executed

isActive ? showUser() : hideUser();


// toggle boolean
isActive = !isActive