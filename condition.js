//conditional statements execute differemt code blocks 
//based on whether a specific conditon is true or false
//a. if statements
let temperature = 30;
if (temperature > 34){
console.log("It is a Hot day");
} else {
    console.log("It is a Cold day");
}
let urAge = 25
if(urAge > 25){
    console.log("Your age is greater than"+ urAge)
} else if(urAge < 25){
    console.log("Your age is lesser than" + urAge)
} else{
    console.log("Your age is" + urAge)
}
let user ="isLoggedIn";
if(user ==="isLoggedIn"){
    console.log("user is active");
}else if(user === "isLoggedOut"){
    console.log("user is not Active");
}else {
    console.log("user is deleted");
}

let fruit = "apple";
if(fruit === "apple"){
    console.log("We have apple in our Store");
}else if(fruit === "orange"){
    console.log("we have orange in our store");
}else if(fruit === "coconuts"){
    console.log("we have coconut in our store")
} else{
    console.log("we don not have any fruit our store");
}


//switch statements

let fruit2="apple";
switch (fruit2){
    case "banana":
        console.log("We have Banana in our store");
        break;
        case "apple":
            console.log("We have apple in our Store");
            break;
            case "coconut":
                console.log("We have coconut in our store");
                break;
                default:
                    console.log("We don not have any fruit in our store")
}


const options = ["option1","option2","option3"];
let input ="option2";
let isAdmin= true;

switch (true){
    case options.includes(input) && isAdmin:
        console.log("Admin access granted for" + input);
        break;
        case options.includes(input) && !isAdmin:
            console.log("User access granted for"+ input);
            break;
            case !options.includes(input);
            console.log("Invalid Option");
            break;
            default:
                console.log("No Matching case found")
                break;
}


const actions= ["start","stop","pause"];
let userAction = "start";
let isLoggedIn = true;

switch (true){
    case actions.includes(userAction) && isLoggedIn;
    console.log("Action permitted: " + userAction);
    break;
    case actions.includes(userAction) && !isLoggedIn:
        console.log("Please Log in to perform this action.");
        break;
        case !actions.includes(userAction):
            console.log("invalid action")
            break;
            default:
                console.log("No valid case found")
                break;
}