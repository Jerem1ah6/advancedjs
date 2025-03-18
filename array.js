let users =["Jeremiah", "Harrison", "Tochukwu", "Bella", "Mojoola"];
console.log(users)

//push add at the end
users.push("Tolulope")
console.log(users)

//unshift add at begining
users.unshift("Shumpert")
console.log(users)

//pop()
users.pop()
console.log(users)

//shift
users.shift()
console.log(users)

//splice remove from a specific position
users.splice(1, 1)
console.log(users)

//splice2 remove from a specific position
users.splice(0, 2)
console.log(users)

//splice add at a specific position
users.splice(1, 0, "Peter", "Samson")
console.log(users)

//slice used to return new array from our array
let newUsers = users.slice(1, 3)
console.log(newUsers);

//():call function
//{}:contain process in function and write object
//[]:array


let fruits = ["banana","orange","coconut","cherry","Mango"];
console.log(fruits)
let newFruits = fruits.slice(1, 3)
console.log(newFruits)

let text ="Hello world"
console.log(text.length)
let newText = text.slice(5, 11);
console.log(newText);

let colors =["red","yellow", "white", "black", "Navy Blue"]
//map
//map is use to iterate over all 
let uppercaseColors = colors.map(color => color.toLocaleUpperCase())
console.log(uppercaseColors)

//forEach
uppercaseColors.forEach(function(color){
    const lowercaseColor = color.toLocaleLowerCase()
    console.log(lowercaseColor)
})

uppercaseColors.forEach((color) =>{
    const lowercaseColor = color.toLocaleLowerCase()
    console.log(lowercaseColor)
})

let products =["phone", "laptop", "charger", "battery"]
let longerProducts = products.filter(product => product.length > 6);
console.log(longerProducts);

//write an array and apply all the following methods 
//find()
//include()
//sort()
//concat
//reverse
//reduce