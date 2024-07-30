// Day 5: Functions

// Tasks/Activities:

// Activity 1: Function Declaration

// Task 1: Write a function to check if a number is even or odd and log the result to the console.

function eveodd(num){
  if(num%2==0){
    console.log("even",num);
  }else{
    console.log("odd",num);
  }
}

eveodd(5);

// Task 2: Write a function to calculate the square of a number and return the result.

function square(number){
    sq=number*number;
    console.log("square=",sq);
}

square(2);

// Activity 2: Arrow Functions

// Task 5: Write an arrow function to calculate the sum of two numbers and retum the result.

let sum=(num1,num2)=>{
sum=num1+num2;
console.log("sum=",sum);
}

sum(2,5);


