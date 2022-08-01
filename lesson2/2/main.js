
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 22;

if (time >= 0 && time <= 15 ){
    console.log('first quarter');
}
else if (time >=16  &&time <= 30){
    console.log('second quarter');
}
else if (time >= 31 && time <= 45){
    console.log('third quarter');

}
else if (time >= 46 && time <= 59 ){
    console.log('fourth quarter');
}




/////////////////////////////////////////////////////////////////
//
// let time = +prompt('what a quarter ?' );
//
// if (time >= 0 && time <= 15 ){
//     console.log('first quarter');
// }
// else if (time >=16  &&time <= 30){
//     console.log('second quarter');
// }
// else if (time >= 31 && time <= 45){
//     console.log('third quarter');
//
// }
// else if (time >= 46 && time <= 59 ){
//     console.log('fourth quarter');
// }
