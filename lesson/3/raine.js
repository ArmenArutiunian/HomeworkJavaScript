// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let firstbook = {
    title: 'Green Mile',
    pageCount: 570 ,
    genre: 'Novel',
    authors: [
        {
            name: 'Stiven king',
            age: 74,
        }
    ]



};

let secondbook = {
    title: 'Sherlock Holmes',
    pageCount: 1680,
    genre: 'detective',
    authors: [
        {
            name:'Arthur Ignatius Conan Doyle',
            age : 150,
        }
    ]


};

let thirdbook = {
    title: 'Screw It,Lets Do It ',
    pageCount: 360,
    genre: 'Real-life',
    authors: [
        {
            name : 'Richard Branson',
            age:        71,
        }
    ]


}

console.log(firstbook);
console.log(secondbook);
console.log(thirdbook);