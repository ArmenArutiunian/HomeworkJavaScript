// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let types = [ 15, 16, 17, 18, 19, 'do','re','mi','fa','soly',  'lala','fafa',18, false,true    ];
//
// for (let type of types){
//     console.log(type)
// }


//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let array = [];
//
// for (let i = 0 ; i < 1; i++){
//     array[i] = 325 ;
//     console.log(array)
// }


// - є масив [2,17,13,6,22,31,45,66,100,-18] :


// 1. перебрати його циклом while

// let lacs = [2,17,13,6,22,31,45,66,100,-18] ;
//
// let i = 0;
// while (i < lacs.length){
//     console.log(i)
//     i++;


//     2. перебрати його циклом for

// let lacs = [2,17,13,6,22,31,45,66,100,-18] ;
//
// for (let i = 0; i < lacs.length; i++ ){
//     console.log(lacs[i]);

// }


//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let lacs = [2,17,13,6,22,31,45,66,100,-18] ;
//
// let i = 0;
// while (i < lacs.length){
//     if (i%2){
//         console.log([lacs[i]]);
//     }
//         i++;
// }
//


// 4. перебрати циклом for та вивести  числа тільки з непарним індексом


//
// let array = [2,17,13,6,22,31,45,66,100,-18] ;
//
// for (let i=0; i<array.length; i++){
//     if (i%2){
//         console.log(array[i])
//     }
// }
//
// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let array= [2,17,13,6,22,31,45,66,100,-18] ;

// let i = 0;
// while (i < array.length){
//     if (!(array[i] % 2)){
//         console.log([array[i]]);
//     }
//         i++;
// }
// 6. перебрати циклом for та вивести  числа тільки парні  значення

// let array = [2,17,13,6,22,31,45,66,100,-18] ;
//
// for (let i=0; i<array.length;i++){
//     if (!(array[i] % 2)){
//         console.log(array[i])
//     }
// }
//
// 7. замінити кожне число кратне 3 на слово "okten"
// let array = [2,17,13,6,22,31,45,66,100,-18];
// for (let i=0; i<array.length;i++){
//     if (!(array[i]%2 )){
//         array[i] = 'okten';
//         // console.log(array[i])
//     }
//     console.log(array[i])
// }

// 8. вивести масив в зворотньому порядку.
// let array = [2,17,13,6,22,31,45,66,100,-18] ;
//
// for (let i =array.length-1; i>0; i--){
//     console.log(array[i]);
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//
//     2. перебрати його циклом while(наоборот)
// let array = [2,17,13,6,22,31,45,66,100,-18] ;
//
// let i = array.length;
// while  (i>=0){
//     console.log(array[i]);
//     i--;
// }


//     2. перебрати його циклом for(наоборот)


// let array = [2,17,13,6,22,31,45,66,100,-18] ;
// //
// for (let i =array.length-1; i>0; i--){
//     console.log(array[i]);}
//
//


//     3. перебрати циклом while та вивести  числа тільки з непарним індексом (наоборот)

// let array = [2,17,13,6,22,31,45,66,100,-18] ;
//
// let  i = array.length;
// while (i>=0){
//     if (i%2){
//         console.log(array[i]);
//     }
//     i--;
// }
//


// 4. перебрати циклом for та вивести  числа тільки з непарним індексом  (наоборот)


// let array = [2,17,13,6,22,31,45,66,100,-18] ;
//
// for (let i = array.length;i > 0; i--){
//     if (i%2){
//         console.log(array[i])
//     }
// }
//
//
//
//

// 5. перебрати циклом while та вивести  числа тільки парні  значення  (наоборот)
//
// let array= [2,17,13,6,22,31,45,66,100,-18] ;
//
// let i = array.length;
// while (i>0){
//     if(!(array[i]%2)){
//         console.log(array[i])
//     }
//     i--;
// }
//

// // / 6. перебрати циклом for та вивести  числа тільки парні  значення   (наоборот)
//
// let array = [2,17,13,6,22,31,45,66,100,-18] ;
//
// for (let i = array.length;i>0;i--){
//     if (!(array[i]%2)){
//         console.log(array[i])
//     }
//
// }

// 7. замінити кожне число кратне 3 на слово "okten"  (наоборот)
// let array = [2,17,13,6,22,31,45,66,100,-18];
//
// for (let i = array.length; i>0;i--){
//     if (!(array[i] % 2)) {
//         array[i] = 'okten';
//         // console.log(array[i])
//     }
//     console.log(array[i])
//
//
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let container = [true, 515,15515,'sadasdad','sfsufhskuf,',false,undefined,'dawdasdawd',5153513,15313,];

// for (const containerElement of container) {
//     if (typeof containerElement==='number')
//         console.log(containerElement)
// }


// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи


// let container = [true, 515,15515,'sadasdad','sfsufhskuf,',false,undefined,'dawdasdawd',5153513,15313,];
//
// for (const containerElement of container) {
//     if (typeof containerElement==='string')
//         console.log(containerElement)
// }
//


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let array = [ 10,11,12,13,14,15,16,17,18,19];
//
// for (let i=0; i < array.length; i++){
//     console.log(array[i])
// }


// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let array = [ 'fa','ma','la','ja','ij','ink','ubjn','inj','in','nuok'];
//
// let i = 0;
// while ( i < array.length){
//     console.log(array[i]);
//     i++;
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let array = [ 'fa',12, 'la','ja',16,'ink',true,'inj',',''nuok'];
//
// for (let i = 0; i < array.length; i++){
//     console.log( typeof array[i]);
// }
//

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
//
// let array = [ 'fa',12, 'la','ja',16,'ink',true, false, 158];
//
// for (let i=0; i<1; i++){
//     if (array = )
// }


//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.


// let array = [];
//
// for (let i=0;i<1; i++){
//     array[i] = ['lala', 'adada', 15151, 158851,NaN,false,true,'drgdrg',88888,'adfasdadawddf' ];
//
//     console.log(array)
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write


//
// let number ;
// for (let i=0;i<10; i++){
//     console.log(i);
//     document.write(i);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

//
// let number ;
// for (let i=0;i<100; i++){
//     console.log(i);
//     document.write(i);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// ????????????????????????????????????????????????????????????????????????????????????????
// let number ;
// for (let i=0;i<100; i+= 2) {
//     console.log(i);
//     {
//         document.write(`<div> ${i}</div>`);
//     }
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (!(i % 2) && i!==0) {
//         console.log(i);
//         document.write(`<h6>${i}</h6>`);
//     }
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write


// стоврити масив книжок (назва, кількість сторінок, автори , жанри).

let books = [
    {
        name: 'Harry Potter-JAN',
        pages: 475,
        author: ['jan 1 rele','audkaud','adkuhaksuhda'],
        genre: ['fantastic', 'Mysticism','fantazy','magic'],
    },
    {
        name: 'OnePiese',
        pages: 1056,
        author: ['ODA'],
        genre: ['fantastic', 'Manga','super-natural']
    },
    {
        name: 'Sherlok Holms Potter-JANS.DKJNAKD- ADMNASKJD',
        pages: 645,
        author: ['Arthur Konan Doil ','sinka bull'],
        genre: ['Novel', 'Detective']
    }

];
// -знайти наібльшу книжку.

// let maxbook = books[0].pages;
//
// for (let book of books){
//     if (maxbook < book.pages ){
//         maxbook=book
//
//     }
// }
//
//     console.log(maxbook);



// - знайти книжку/ки з найдовшою назвою

// let lengthName = books[0].name;
//
// for (const book of lengthName) {
//     if ( lengthName.length < book.name.length ){
//         lengthName = book
//     }
//     // console.log(lengthName.name)
// }
// console.log(lengthName)



// let maxbook = books[0].name;
//
// for (let book of books){
//     if (maxbook.length < book.name.length){
//         maxbook = book
//     }
//     // console.log(book.name)
// }
// console.log(maxbook);
















// - знайти книжку/ки з найбільшою кількістю жан



//
// let maxbook = books[0];
//
// for (let book of books){
//     if (maxbook.genre.length < book.genre.length) {
//         maxbook = book
//     }
// }
//
//         console.log(maxbook)




// - знайти книжку/ки які писали 2 автори

// let authors = books[0].author;
//
// for (let book of books){
//     if (book.author.length === 2){
//         authors = book
//
//     }
// }
//
//         console.log(authors)


// - знайти книжку/ки які писав 1 автор

// let authors = books[0].author;
//
// for (let book of books){
//     if (book.author.length === 1){
//         authors = book
//     }
// }
// console.log(authors)
















