
let myArray = ["One", "Two", "Three", "Four", "Five", "Six"]

for (let i  = 0; i < myArray.length; i++){
    console.log(myArray[i]);
}

// reverse
for (let i =  myArray.length -1; i >= 0; i-- ) {
    console.log(myArray[i]);
}

// while loop with array

let i = 0;
while (i < myArray.length) {
    console.log(myArray[i]);
    i++;
}

// reverse while loop with array

// while(i<myArray.length -1) {
//     console.log(myArray[i]);
//     i--;
// }


let myPrompt = Number(prompt(":Enter a larger Number!"));

while(myPrompt < 10) {
    alert("Please Enter A Larger Number!");
    myPrompt = Number(prompt("Enter A Number!"))
}

if(myPrompt >= 10) {
    alert("Congratulations!")
}