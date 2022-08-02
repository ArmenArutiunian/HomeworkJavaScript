//
//
// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
// //     Знайти, яке з них є середнім (більше одного, але менше за інше).
// //     Перевірити, чи знаходиться перше число між двома іншими
let a = 1;
let b = 2;
let c = 3
//   1   2    1   3       3   1    2    1
if ((a > b || a > c ) && (c > a || b > a )){
    console.log(a );

}
//   2   3    2   1        2   3    2   1
if ((b > c || b > a  ) && (b < c || b < a)){
    console.log(b);

}
//   3   1    3   2       3   1    3   2
if ((c > a || c > b)  && (c < a || c < b ) ){
    console.log(c);
}

















//
// let a1 = 1;
// let a2 = 2;
// let a3 = 3;
// if ((a1 > a2 || a1 > a3) && (a1 < a3 || a1 < a2)) {
//     console.log(a1+' winn and the first number is in the middle ')
// }
// if ((a2 > a1 || a2 > a3) && (a2 < a3 || a2 < a1)) {
//     console.log(a2+' winn ,the first number is not in the middle')
// }
// if ((a3 > a1 || a3 > a2) && (a3 < a1 || a3 < a2)) {
//     console.log(a3 +'winn, the first number is not in the middle')
// }




























//
//
// let a = 15;
// let b = 111;
// let c = 135
//
//
// if ( a < b){
//     console.log(b)
// }else if (b < c){
//     console.log(c)
//
// }else if (c > a){
//     console.log(c)
//
// }























