let condition = !((true && false) || (!false && false) && true);


// If statement (statement, izjava, izraz)
// let number = 1;

// if (number < 3) {
//     console.log('manje');
// } else if (number > 3) {
//     console.log('vece');
// } else {
//     console.log('jednako');
// }

// let nameOfThePerson = 'Ivan';

// if (nameOfThePerson == 'Ivan') {
//     console.log('Kockarevic');
// } else if (nameOfThePerson == 'Isidor') {
//     console.log('Susnjevic');
// } else {
//     console.log('Dadasovic');
// }

// // Switch
// switch (nameOfThePerson) {
//     case 'Ivan':
//         console.log('Kockarevic');
//         break;
//     case 'Isidor':
//         console.log('Susnjevic');
//         break;
//     case 'Radovan':
//         console.log('Dadasovic');
//         break;
//     default:
//         console.log('Nemam pojma');
//         break;
// }

// Ternary operator
let truthName = 'Ivan the truth';
let lieName = 'Ivan the liar';

// let someName =
//     condition ? // Logicki uslov koji proveravam
//     truthName : // ono sto dodeljujem ako je uslov tacan
//     lieName;    // ono sto dodeljujem ako je uslov netacan

let someName = condition ? truthName : lieName;

// Equivalent if statement
// if (condition) {
//     someName = truthName;
// } else {
//     someName = lieName;
// }

console.log(someName);







////////////////////////////////////////////////////////////


let windowOpen = true ;
let windowClosed = false ;

if (windowOpen) {
    console.log('otvoren je');
} else if (windowClosed || windowClosed) {
    console.log('poluotvoren je ');
} else {
    console.log('zatvoren je ');
};


let name = 'isidor';

switch (name) {
    case 'ivan':
       console.log('Kockarevic');
       break;
    case 'isidor':
        console.log('Susnejvic');
        break;
    case 'ageag':
            console.log('ASDGAG');
        break;
     case 'radovan':
                console.log('dadasovic');
        break;
}



let poruka = windowOpen ? 'Promaja je' : 'Nije promaja' ;
console.log(poruka)
