// - У змінній day дано якесь число від 1 до 31. Потрібно визначити,
// у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю)\

let day = 26;

if (day >= 0 && day <=10 ){
    console.log('first-dec');
}
else if (day >= 11 && day <=20){
    console.log('second-dec');
}
else if ( day >= 21 && day <=31){
    console.log('third-dec');
}
else {
    console.log('There is no such day!')
}
