


// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

// створити пустий масив, наповнити його 10 об'єктами new User(....)


// function Users(id, name, surname , email, phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// arrayUser = [];
// arrayUser.push(new users (10, 'ABDABaDWA', 'jkhfsbfsjhbfjs', '@bbbbbbbbawd', +382222222222))
// arrayUser.push(new users (7, 'BBDABaDWA', 'ggggggggggggjs', '@dassssssswd', +383333336151))
// arrayUser.push(new users (9, 'CBDABaDWA', 'jkqqqqqqqqbfjs', '@dxxxxxxxxxd', +380555555151))
// arrayUser.push(new users (8, 'DBDABaDWA', 'jknllllllllljs', '@dshfsjydawd', +380577777771))
// arrayUser.push(new users (2, 'EBDABaDWA', 'jnnnnnnnnnnfjs', '@dalmimpdawd', +380561616151))
// arrayUser.push(new users ( 5,'FBDABaDWA', 'jkjjjjjjjhbfjs', '@dadsfjhdawd', +380555555551))
// arrayUser.push(new users (4, 'GBDABaDWA', 'jkhddddddhbfjs', '@yfgjsyfdawd', +380343111111))
// arrayUser.push(new users (3, 'NBDABaDWA', 'jkhaaaaaaabfjs', '@dvdrvdvdawd', +380111111151))
// arrayUser.push(new users (6, 'KBDABaDWA', 'jkyyyyyyyyyyjs', '@daqqqqqqqwd', +380500000151))
// arrayUser.push(new users (1, 'FBDABaDWA', 'jtttttthbfjs', '@ssssssadawd', +380566666661))


// console.log(arrayUser);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let sortUsers = arrayUser.filter(item => item.id % 2 === 0 );
// console.log(sortUsers);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// arrayUser.sort((user1 ,user2) => user1.id - user2.id )
// console.log(arrayUser);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client


// class Client {
//     constructor(id, name, surname , email, phone, order) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
//     }
//
//
//
// }

// arrayUser = [];
// let clientUsers1 =  new Client(10, 'ABDABaDWA', 'jkhfsbfsjhbfjs', '@bbbbbbbbawd',+382222222222, [1,2,3,4,5,6,7,8,9]);
// let clientUsers2 =  new Client(7, 'BBDABaDWA', 'ggggggggggggjs', '@dassssssswd', +383333336151, [1,2,3,4,5,6,]);
// let clientUsers3 =  new Client(9, 'CBDABaDWA', 'jkqqqqqqqqbfjs', '@dxxxxxxxxxd', +380555555151, [1,2,3,4,5,6,]);
// let clientUsers4 =  new Client(8, 'DBDABaDWA', 'jknllllllllljs', '@dshfsjydawd', +380577777771, [1,2,3,4,5,6,7,]);
// let clientUsers5 =  new Client(2, 'EBDABaDWA', 'jnnnnnnnnnnfjs', '@dalmimpdawd', +380561616151, [1,2,3,4,5,6,7,8,]);
// let clientUsers6 =  new Client(5,'FBDABaDWA', 'jkjjjjjjjhbfjs', '@dadsfjhdawd', +3805555555851, [1,2,3,4,5,]);
// let clientUsers7 =  new Client(4, 'GBDABaDWA', 'jkhddddddhbfjs', '@yfgjsyfdawd', +380343111111, [1,2,3,]);
// let clientUsers8 =  new Client(3, 'NBDABaDWA', 'jkhaaaaaaabfjs', '@dvdrvdvdawd', +380111111151, [1,2,3,4,]);
// let clientUsers9 =  new Client(6, 'KBDABaDWA', 'jkyyyyyyyyyyjs', '@daqqqqqqqwd', +380500000151, [1,2,]);
// let clientUsers10 = new Client(1, 'FBDABaDWA', 'jtttttthbfjs', '@ssssssadawd',  +380566666661, [1,]);

// arrayUser.push(clientUsers1, clientUsers2, clientUsers3, clientUsers4, clientUsers5, clientUsers6, clientUsers7, clientUsers8, clientUsers9, clientUsers10);
// console.log(arrayUser);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// arrayUser.sort((a, b) => a.order.length - b.order.length)
// console.log(arrayUser);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////





// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model,from,year,maxSpeed,Engine){
//
//     this.model  = model;
//     this.from  = from;
//     this.year  = year;
//     this.maxSpeed = maxSpeed;
//     this.Engine = Engine;
//   // 11111111  // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     this.drive = function (){
//
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
// // 22222222222222222-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//         this.info = function (){
//             for (const detal in this) {
//
//                 if (typeof this[detal] != "function" ){
//                     console.log(`${detal} -- ${this[detal]}`)
//                 }
//             }
//         }
// 3333333333333333333   // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля` {2}
            // this.info = function (){
            //
            //     console.log(`${this.model}, ${this.from},${this.year},${this.maxSpeed},${this.Engine}`)
            // }
// 444444444444444444-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

        // this.increaseMaxSpeed = function (newSpeed){
        //     this.maxSpeed += newSpeed;
        //     console.log(this.maxSpeed)
        // }

    // -- changeYear (newValue) - змінює рік випуску на значення newValue

     // this.changeYear = function (newValue){
     //     this.year = newValue;
     //     console.log(this.year)
     // }

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

   // this.addDriver = function (driver){
   //     this.driver = driver;

   // }




    // }

// }






// let haracterCar = new Car('mercedes','Germany',1993,260,5.5);
// haracterCar.addDriver({name: 'Chambaboomba', age:34 });
// haracterCar.changeYear('one thousand nine hundred and ninety-third ');

// haracterCar.increaseMaxSpeed(80);

// haracterCar.drive();

// haracterCar.info();
// console.log(haracterCar)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//

/////////////////////////////////////////зробити то і наступне у четверг


// class Car {
//
//     constructor(model,from,year,maxSpeed,Engine) {
//         this.model = model;
//         this.from = from;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.Engine = Engine;

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину` // 1
//          this.drive = function () {
//              console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//          }
////////////////////////////////////////////////////////////////////////////////////////////////////
        // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    // this.info = function (){
    //
    //     console.log(`model : ${this.model}`, `from : ${this.from}`, `year : ${this.year}`, `maxSpeed : ${this.maxSpeed}`,  `Engine : ${Engine}` )
    // }
////////////////////////////////////////////////////////////////////////////////////////////////////
        // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

        // this.increaseMaxSpeed = function (newSpeed){
        //     this.maxSpeed += newSpeed
        //     console.log(this.maxSpeed)
        //
        // }
////////////////////////////////////////////////////////////////////////////////////////////////////
        // -- changeYear (newValue) - змінює рік випуску на значення newValue
// this.changeYear = function (newValue){
//     this.year = newValue ;
//     console.log(this.year)
// }
///////////////////////////////////////////////////////////////////////////////////////////////////
        // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
        // this.addDriver = function (driver){
        //     this.driver = driver ;
        // }
///////////////////////////////////////////////////////////////////////////////////////////////////
//     }
// }
// let haracterCar = new Car('Mersedes','Germany','1993',260,5.5);

// haracterCar.drive()  // 1
// haracterCar.info() // 2
// haracterCar.increaseMaxSpeed(150) // 3
// haracterCar.changeYear('Тисяча Девятсот девяносто третій ') // 4
// haracterCar.addDriver({name: 'Igor ', Age: 55} )  // 5
// console.log(haracterCar)

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// class Popelushka {
//
//     constructor(name,age,headSize) {
//         this.name = name;
//         this.age = age;
//         this.headSize = footSize;
//
//     }
// }
// //
// let popelushka1 = new Popelushka('Anna1',25,45)
// let popelushka2 = new Popelushka('Anna2',24,44)
// let popelushka3 = new Popelushka('Anna3',23,43)
// let popelushka4 = new Popelushka('Anna4',22,42)
// let popelushka5 = new Popelushka('Anna5',21,41)
// let popelushka6 = new Popelushka('Anna6',20,40)
// let popelushka7 = new Popelushka('Anna7',19,39)
// let popelushka8 = new Popelushka('Anna8',18,38)
// let popelushka9 = new Popelushka('Anna9',17,37)
// let popelushka10 = new Popelushka('Anna10',16,36)
//
//
//             class Prince extends Popelushka{
//
//                 constructor(name,age,shoessize) {
//                     super(name ,age);
//                     this.shoessize = shoesize ;
//
//                     for (const Element of prince) {
//                         if (Popelushha.shoessize === )
//                     }
//
//                 }
//
//
//
//
//             }








//
