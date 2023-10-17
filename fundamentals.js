// 1. how to declare a variable using let and const

const fatherName = 'Arnold';
let  season = 'rainy';
season = 'winter';

// 2. 6 basic conditions : >, <, ===, !==, <=, >=
// multiple conditions : && , ||

if (fatherName === 'arnold' || season === 'rainy'){

}
else if(fatherName === 'Arnold'){

}
else{

}

// 3. array declare 
// index 
// length, push

const numbers = [11, 32, 45, 87];
numbers[1] = 110;



// 4. loop 
for(let i = 0; i < numbers.length; i++){
    const num = numbers[i];
    console.log(num);
}


// 5. function
function multiple(num1, num2){
    const result = num1 * num2;
    return result;
}

const outPut = multiple(10, 20);
console.log(outPut);



// 6 object
// 3 ways to  access property by name
const student = {
    name : 'anik',
    age : 22,
    class : '11',
    programming: ['python', 'javascript', 'C#'] 
}

const myAge = student.age;

console.log(student.age); // direct by property
console.log(student['age']); // access by property age string
console.log(student['myAge']); // access by property age in a variable