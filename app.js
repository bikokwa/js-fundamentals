// Block Scope With let and const

// Global Scope

var a = 1;
let b = 2;
const c = 3;

function test(){
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Function scope: ', a,b,c)
}

// block level scope

if (true) {
    // Block Scope

    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Block scope: ', a,b,c)
}

for (var a = 0; a < 10;a++){
    console.log(a)
}


console.log('Global scope: ', a,b,c)

//test();