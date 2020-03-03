// Result of arithmetic expressions are numbers.
// Result of logic expressions are booleans.
// Results of arithmetic and logic expressions can be assigned to variables.
// Results of both expressions are calculated before assigning to a variable.

// Arithmetics
let wall1 = 100;
let wall2 = 100;
let surface = wall1 * wall2;
let result = surface + 34534 + 4385 - 54123 * 6 / 34 - surface;

console.log(result);

// Logic
let logicResult = 2 > 3; // false
logicResult = 2 < 3; // true

let isidorIsOlderThan18 = true;// isidor.age > 18
let ivanIsOlderThan18 = true;// ivan.age > 18

let theyCanBothDrink = isidorIsOlderThan18 && ivanIsOlderThan18; // true 

// Arithmetic operations: +, -, *, /
// Logic operations: &&, ||, !


!true; // false
true && true; // true
true && false; // false
false && true; // false
false || true; // true
true || false; // true
true || true; // true


!((true && false) || (!false && false) && true); // this will return true
