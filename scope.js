let i = 10;
function scope() {
    let i = 3;
    if(true) {
        let i = 115;
        console.log("inside blocks", i);
    }
    console.log("Inside functions", i);
}

scope();
console.log("outside functions", i);


// var j = 1;
// function scope() {
//     var j = 30;
//     if(true) {
//         j = 15;
//         console.log("inside block", j);
//     }
//     console.log("Inside function", j);
// }

// scope();
// console.log("outside function", j);


var x = 17;
function scope() {
    var x = 340;
    if(true) {
        var x = 1500;
        console.log("inside block", x);
    }
    console.log("Inside function", x);
}

scope();
console.log("outside function", x);