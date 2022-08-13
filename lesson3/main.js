//
//
// for (let i = 0; i <10; i++ ){
//     document.write(`<div><h2>Orange</h2></div>`);
// }
//
// ..............................................................................................
//
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//
//
// for (let i = 0; i <10; i++ ){
//     document.write (`<div><h2>Orange</h2></div>` );
//     document.write(i);
// }
//
// ..............................................................................................
//
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//
//
//
//
//
// let i=0;
// while(i<20){
//     document.write(`<h1>yjhhbjhbj</h1>`)
//     i++;
// }
//
//
//
// ..............................................................................................
//
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині
//
// let i=0;
// while(i<20){
//     document.write(i)
//     document.write(`<h1>yjhhbjhbj</h1>`)
//     i++;
// }
//
//
//
// ..............................................................................................
// ..............................................................................................
//
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
//
//
//
//
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// for (let listOfItem of listOfItems ){
//     document.write(`<ul><li> ${listOfItem} </li>
// // </ul>`)
//
// }
//
//
// // ..............................................................................................
// // ..............................................................................................
// // / за допомоги циклу вивести:
// //     - користувачів зі статусом true
//
//
// let users = [
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
// for (let user of users ){
//     if (user.status){
//         console.log(user)
//     }
//
// }
//
//
//
// // ..............................................................................................
// // ..............................................................................................
//
//
// // за допомоги циклу вивести:
// // - користувачів зі статусом false
//
//
//
// let users = [
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
// for (let user of users ){
//     if (user.status === false){
//         console.log(user)
//     }
//
// }
//
// // ..............................................................................................
// // ..............................................................................................
//
// за допомоги циклу вивести:
// - користувачів які старші за 30 років
// let users = [
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
// for (let user of users ){
//     if (user.age >=30){
//         console.log(user)
//     }
//
// }
//
//
//
//









