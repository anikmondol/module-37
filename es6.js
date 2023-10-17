const numbers = [11, 32, 45, 87];

const student = {
    name : 'anik',
    age : 22,
    class : '11',
    programming: ['python', 'javascript', 'C#'] 
};

// 1.template string
const about = `my Name is ${student.name}. my age is ${student.age}. my exam total number ${numbers[3]}. i am lear ${student.programming[1]} programming.`;

// console.log(about);

// 2. arrow function
const getFiftyFive = () => 10;
const addSixtyFive = num => num + 65;
const isEvent = number => number % 2 == 0;
const addThree = (a, b, c) => a + b + c;
const multiple = (num1, num2, num3) =>{
    const mul = num1 * num2 * num3;
    return mul;
}

const outPut = multiple(12, 4, 44);
console.log(outPut);


//  3. spread operator

// create a new array from an older array and add an element 

const myArray = [...numbers, 12,12]

const newNumber = [...numbers];
numbers.push(11);

console.log(numbers);
console.log(newNumber);
console.log(myArray);