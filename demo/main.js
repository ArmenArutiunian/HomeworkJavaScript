

// function writer(text){
//
// document.write(`<div><h2>${text}</h2> </div>`);
//
// }
//
// writer(`helo`);
// writer(`hrgsgdg`);
// writer(`hdgrdgdfdvbn`);
// writer(`awdq2qdqqwd`);



// let users = [
//
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// let products = [
//
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
//
// function arrayPrinter(array){
//     for (const item of array) {
//         console.log(item);
//     }
//
// }
// arrayPrinter(users);
// arrayPrinter(products);











let a = [];
function cutString(str, n) {

    for (let i = 0; i < str.length; i+=n) {
        let sub = str.substring(i, i + n);
        a.push(sub);
    }
    return a;
}

console.log(cutString('наслаждение', 3));