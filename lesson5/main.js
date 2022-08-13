// - Знайти та вивести довижину настипних стрінгових значень

// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str = 'hello world' ;
// let str2 = 'lorem ipsum';
// let str3 =  'javascript is cool' ;
//
// console.log(str.length);
// console.log(str2.length);
// console.log(str3.length);




// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str = 'hello world' ;
// let str2 = 'lorem ipsum';
// let str3 =  'javascript is cool' ;
//
// console.log(str.toUpperCase(str));
// console.log(str2.toUpperCase(str2));
// console.log(str3.toUpperCase(str3));


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str = 'HELLO WORLD' ;
// let str2 = 'LOREM IPSUM';
// let str3 =  'JAVASCRIPT IS COOL' ;
//
// console.log(str.toLowerCase());
// console.log(str2.toLowerCase());
// console.log(str3.toLowerCase());




// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   '
//
// clean = str.trim();
// console.log(clean);
// console.log(clean.length);





// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
//
// let arr = str.split(' ')
// console.log(arr)



// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let numberArray = [10,8,-7,55,987,-1011,0,1050,0].map(element => element.toString())
// console.log(numberArray)



// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
            //let nums = [11,21,3]
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11,21,3]
//
// const sortNums = (direction,arr) =>{
//     if (direction === 'ascending' ){
//         arr.sort ((a,b) =>  a - b  );
//
//     } else if (direction === 'descending') {
//         arr.sort((a,b) => b-a );
//     }
// return arr;
// }
//
//
// console.log(sortNums('ascending', nums));
// console.log(sortNums('descending', nums));
//

//                                                          - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
                                    // -- відсортувати його за спаданням за monthDuration


// coursesAndDurationArray.sort((a,b) => b.monthDuration - a.monthDuration );
// console.log(coursesAndDurationArray);



                                        // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// let filter  = coursesAndDurationArray.filter(obj => obj.monthDuration > 5 );
// console.log(filter);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////



// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//

let cards = [
    {cardSuit: 'clubs', value: 'Ace', color:'black'},
    {cardSuit: 'clubs', value: 2, color:'black'},
    {cardSuit: 'clubs', value: 3, color:'black'},
    {cardSuit: 'clubs', value: 4, color:'black'},
    {cardSuit: 'clubs', value: 5, color:'black'},
    {cardSuit: 'clubs', value: 6, color:'black'},
    {cardSuit: 'clubs', value: 7, color:'black'},
    {cardSuit: 'clubs', value: 8, color:'black'},
    {cardSuit: 'clubs', value: 9, color:'black'},
    {cardSuit: 'clubs', value: 10, color:'black'},
    {cardSuit: 'clubs', value: 'Jack', color:'black'},
    {cardSuit: 'clubs', value: 'Queen', color:'black'},
    {cardSuit: 'clubs', value: 'King', color:'black'},

    {cardSuit: 'diamonds', value: 'Ace', color:'red'},
    {cardSuit: 'diamonds', value: 2, color:'red'},
    {cardSuit: 'diamonds', value: 3, color:'red'},
    {cardSuit: 'diamonds', value: 4, color:'red'},
    {cardSuit: 'diamonds', value: 5, color:'red'},
    {cardSuit: 'diamonds', value: 6, color:'red'},
    {cardSuit: 'diamonds', value: 7, color:'red'},
    {cardSuit: 'diamonds', value: 8, color:'red'},
    {cardSuit: 'diamonds', value: 9, color:'red'},
    {cardSuit: 'diamonds', value: 10, color:'red'},
    {cardSuit: 'diamonds', value: 'Jack', color:'red'},
    {cardSuit: 'diamonds', value: 'Queen', color:'red'},
    {cardSuit: 'diamonds', value: 'King', color:'red'},

    {cardSuit: 'hearts', value: 'Ace', color:'red'},
    {cardSuit: 'hearts', value: 2, color:'red'},
    {cardSuit: 'hearts', value: 3, color:'red'},
    {cardSuit: 'hearts', value: 4, color:'red'},
    {cardSuit: 'hearts', value: 5, color:'red'},
    {cardSuit: 'hearts', value: 6, color:'red'},
    {cardSuit: 'hearts', value: 7, color:'red'},
    {cardSuit: 'hearts', value: 8, color:'red'},
    {cardSuit: 'hearts', value: 9, color:'red'},
    {cardSuit: 'hearts', value: 10, color:'red'},
    {cardSuit: 'hearts', value: 'Jack', color:'red'},
    {cardSuit: 'hearts', value: 'Queen', color:'red'},
    {cardSuit: 'hearts', value: 'King', color:'red'},
    {value: 'Joker', color:'red'},

    {cardSuit: 'spades', value: 'Ace', color:'black'},
    {cardSuit: 'spades', value: 2, color:'black'},
    {cardSuit: 'spades', value: 3, color:'black'},
    {cardSuit: 'spades', value: 4, color:'black'},
    {cardSuit: 'spades', value: 5, color:'black'},
    {cardSuit: 'spades', value: 6, color:'black'},
    {cardSuit: 'spades', value: 7, color:'black'},
    {cardSuit: 'spades', value: 8, color:'black'},
    {cardSuit: 'spades', value: 9, color:'black'},
    {cardSuit: 'spades', value: 10, color:'black'},
    {cardSuit: 'spades', value: 'Jack', color:'black'},
    {cardSuit: 'spades', value: 'Queen', color:'black'},
    {cardSuit: 'spades', value: 'King', color:'black'},
    {value: 'Joker', color:'black'},

];

// описати колоду карт
// - знайти піковий туз/////////////////////////////////

// let find = cards.find(item => item.cardSuit === "spades" && item.color === "black");
// console.log(find)

// - всі шістки////////////////////////////////

// let sortNumber  = cards.filter(item => item.value === 6);
//
// console.log(sortNumber);

// - всі червоні карти /////////////////////////////

// let sortColor = cards.filter(item => item.color === "red");
// console.log(sortColor)


// - всі буби ///////////////////////////////////////////////

//  let sordCardSuit = cards.filter(item => item.cardSuit === "diamonds" && item.color === "red");
// console.log(sordCardSuit);

// - всі трефи від 9 та більше

// let sortClubs = cards.filter(item => item.cardSuit === "clubs" && item.value >= 9 || typeof item.value === "string"
//     && item.cardSuit === "clubs" || item.value === "Joker" && item.color === "black"
//                    );
// console.log(sortClubs)




// spade - піка
// diamond - бубна
// heart - черва
// clubs - хреста




//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]

let deckOfCards = cards.reduce(function (acamulator,card) {
    if (card.cardSuit === "clubs"){
        acamulator.clubs.push(card);
    }
    else if (card.cardSuit === "diamonds"){
        acamulator.diamonds.push(card);
    }
    else if (card.cardSuit === "hearts"){
        acamulator.hearts.push(card);
    }

   else if (card.cardSuit === "spades"){
       acamulator.spades.push(card);
    }
return acamulator;


},   { spades:[] ,  diamonds:[],  hearts:[], clubs:[] }    );

console.log(deckOfCards)











