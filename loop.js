let m = 7;
while (m-- > 0) {
    console.log(m);
}

let n = 5;
while (--n >0) {
    console.log(n);
}

// // while 
let a = 1;
while (a < 10) {
    if (a % 2 == 0) {
        console.log(a);
    }
    a++
}

// short method of up
let b = 2;
while (b < 11) {
    console.log(b);
    b+=2
}

//stop infinite
let c = 12;
while (true) {
    console.log(c);
    if (22 == c) {
        break
    }
    c++
}

// do while 


//from zero to expert

const jonas = [
    'Jonas',
    'Schedtman',
    2037-1991,
    'teacher',
    ['Michel', 'Peter', 'Steven'],
    true
]

for (let i = jonas.length -1; i >= 0; i--) {
    // console.log(jonas[i]);
    console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++ ) {
    console.log(`----Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6 ; rep++) {
        console.log(`Lifting weight repetition ${rep}`);
    }
}