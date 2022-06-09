// Type Conversion

// Number to string
let val;

val = String(5);
val = String(4+4);

// Bool to string
val = String(true);

// Date to string
val = String(new Date());

// Array to string
val = String([1,2,3,4,5]);

// toString()
val = (55).toString();
val = (true).toString();

// Strings to numbers
val = Number('55');
val = Number(true);
val = Number(null);
val = Number('hello');
val = Number([1,2,3,4,5])

val = parseInt('100');

console.log(val)
console.log(typeof val)
//console.log(val.length)
console.log(val.toFixed(2));

// Type coercion
const val1 = 5;
const val2 = 6;
const sum = val1 + val2;

console.log(sum)
console.log(typeof sum)