// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором


let s = 15;


let check =( s < 50  ) ? ' positive'  :
                     s > -50 ? 'Negative'  :
                         s === 0

console.log(check)