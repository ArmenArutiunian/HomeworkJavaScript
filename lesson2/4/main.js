// - Скласти розклад на тиждень за домопоги switch.
//     Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день,
//         (можна замість плану на день, назву дня англійською).
let week = +prompt( 'what day will you choose ?' )

switch (week) {
    // MONDAY
    case 1 :
        document.write(`
<h1> After work, I have practice </h1> `);
        break;
    // THUESDAY
    case 2 :
        document.write(`
<h1> Play football </h1> `);
        break;

        // WEDNESDAY
    case 3:
        document.write(`
<h1> I'm watching preview </h1> `);
        break;

        // THURSDAY
    case 4 :
        document.write(`
<h1> I go to the gym </h1> `);
        break;

         // FRIDAY
    case 5 :
        document.write(`
<h1> The gym is coming to me </h1> `);
        break;


       // SATURDAY
    case 6 :
        document.write(`
<h1> I teach English </h1> `);
        break;


         // SUNDAY
    case 7 :
        document.write(`
<h1> I sleep for a long time </h1> `);
        break;


}
