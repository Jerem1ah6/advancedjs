//function is a reusable block of code that we can pass arguments into
//types of function
//1.Function Expression 
//2.Function Declaration
//3.Arrow Function

//function declaration
function greet(name, school){
    console.log("Hello," + name +"!" + "Welcome to" + school)
}
greet("Jeremiah", "New Horizon Nigeria")
greet("Tolulope", "New Horizon Nigeria")

function greeting(person){
    console.log("Hello," + person +  "Welcome to Advanced Javascript Class")
}
greeting("Jeremiah")

function add (a, b){
    return a + b;
}
    console.log(add(2,4))

function times (a,b){
return a * b;
}
console.log(times(10,9))


//function Expression
const greet3 = function(name){
console.log("Hello," + name + "!")
}

function add(a,b,c){
    return a + b + c;
}
console.log(add(1,2,3))

const sum1=function(d,e,f){
    return d + e + f;
}
console.log(sum1(9,8,5))

//arrow Function
const addNumbers = (a,b) => a + b;
console.log(addNumbers(9,10))


const mysum =(j,k) => j - k;
console.log(mysum(15,8))