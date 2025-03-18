//loop is used to execute a block of code repeated 
//until a specific condition is met 
//a, for loop runs a block of code a specific number of times 
for(let i = 0; i < 5; i++){
    console.log("iteration number:"+ i);
}
const colors =["red","green","blue","yellow"]
for(let i = 0; i< colors.length; i++){
    console.log("Color:", colors[i])
}

const fruit = ["watermelon", "vegetables", "oranges", "lime", "apple"]
for(let a = 0; a< fruit.length; a++){
    console.log("Fruit Available:",fruit[a])
}
const students =[
    {name: "Jeremiah",grade: 86},
    {name: "Tochukwu", grade: 92},
    {name: "Charlie", grade: 88},
]
for(let i = 0; i < students.length; i++){
    console.log("student:", students[i].name, "Grade:",students[i].grade);
    if(students[i].name == "Tochukwu"){
        console.log("from conditions",students[i].grade)
    }
}
//while loop 
//the while loop executes a block of code as long as the specified condition is true 

let counts = 0;
while(counts < 5){
    console.log("count is:" + counts);
    counts++
}

//do while statements two e.g & explain