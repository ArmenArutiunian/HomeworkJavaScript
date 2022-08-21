
// - є масив
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
//
//

// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

//
// let container = document.getElementsByClassName('container')[0];
//
// for (const simpson of simpsons) {
//     let div = document.createElement('div');
//     div.innerText = `${simpson.name},
//     ${simpson.surname},
//     ${simpson.age},
//     ${simpson.info},
//     ${simpson.photo},`;
//     div.classList.add('member')
//     container.appendChild(div)
//
// }










////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Цикл в циклі
// - Є масив
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей,
// для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
// ------------------
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let container = document.createElement('div');
// document.body.appendChild(container);
// container.classList.add('main');
//
//
//
// let main = document.getElementsByClassName('main')[0];
// for (const element of coursesArray) {
//     let mainDiv = document.createElement('div')
//     mainDiv.classList.add('product-box')
//
//     // mainDiv.innerText = `${element.title},
//     // ${element.monthDuration},
//     // ${element.hourDuration},
//     // ${element.modules}`;
//     main.appendChild(mainDiv);
//
// ////////////////////////////////////////////////////////////////////////////////////////////////////////
//     let one = document.createElement('div');
//     one.classList.add('one');
//     mainDiv.appendChild(one)                                                 //блок для title
//
//     let title = document.createElement('h2');
//     title.innerText = element.title
//     one.appendChild(title)
// ////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     let monthDuration = document.createElement('div');
//     monthDuration.classList.add('MONTHDURATION')                                                  //блок monthDuration
//     mainDiv.appendChild(monthDuration)
//
//     let monthD = document.createElement('h2');
//     monthD.innerText = element.monthDuration
//     monthDuration.appendChild(monthD)
//
//     ///////////////////////////////////////////////////////////////////////
//     let hourDuration = document.createElement('div');
//     hourDuration.classList.add('HOURDURATION');                                               //блок hourDuration
//     mainDiv.appendChild(hourDuration)
//
//     let hourD = document.createElement('h2');
//     hourD.innerText = element.hourDuration
//     hourDuration.appendChild(hourD)
//
//     ///////////////////////////////////////////////////////////////////////
//
//
//         let modulesContainer = document.createElement('div');
//         modulesContainer.classList.add('ModulesContainer');
//         mainDiv.appendChild((modulesContainer))
//
//         let modul1 = document.createElement('div');
//         modul1.classList.add('html')                                         //блок в контейнері для html
//         modulesContainer.appendChild(modul1)
//
//     let modules1 = document.createElement('h2');
//     modules1.innerText = element.modules[0]
//     modul1.appendChild(modules1)
// ///////////////////////////////////////////////////////////////////////
//
//         let modul2 = document.createElement('div');
//         modul2.classList.add('css')                                         //блок в контейнері для css
//         modulesContainer.appendChild(modul2)
//
//     let modules2 = document.createElement('h2');
//     modules2.innerText = element.modules[1]
//     modul2.appendChild(modules2)
//
// ///////////////////////////////////////////////////////////////////////
//         let modul3 = document.createElement('div');
//         modul3.classList.add('js')                                         //блок в контейнері для js
//         modulesContainer.appendChild(modul3)
//
//     let modules3 = document.createElement('h2');
//     modules3.innerText = element.modules[2]
//     modul3.appendChild(modules3)
// ////////////////////////////////////////////////////////////////////////////////
//     let ul = document.createElement('ul');
//     ul.classList.add('UL');
//     modulesContainer.appendChild(ul);
//     for (const ulElement of element.modules) {
//         let tagLi = document.createElement('li');
//           tagLi.innerText = ulElement
//         ul.appendChild(tagLi)
//
//
//     }
//
//     }



/////////////////////////////////////////////////////////////////////////////////////////////////////////
//     - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

//)
// let div = document.createElement('div');
// div.classList.add("wrap");
// div.classList.add("collapse");
// div.classList.add("alpha");
// div.classList.add("beta");
// document.body.appendChild(div)
// let h2 = document.createElement('h1');
// h2.classList.add("Text");
// div.appendChild(h2);
// h2.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque excepturi hic id labore nisi perferendis quibusdam quis rerum sit ut.'
// //////////////////////////////////////////
// let h4 = document.createElement('h4');
// h4.classList.add("Text");
// div.appendChild(h4);
// h4.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque excepturi hic id .'
// ////////////////////////////////////////////////////////////////////////////
// div.style.marginTop = '100px'
// div.style.width = '500px'
// div.style.height = '300px'
// div.style.boxShadow = '0 0 0 10px'
// div.style.background = 'greenyellow'                            //style
// h4.style.color = 'red'
// h2.style.color = 'blue'
// let classContainer = document.getElementsByClassName('wrap')[0]
// classContainer.appendChild(div.cloneNode(true))
// document.body.appendChild(classContainer
/////////////////////////////////////////////////////////////////////////////////////////////////


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

// let array = ['Main','Products','About us','Contacts'];
//
// let menu = document.getElementsByClassName('menu')[0];
//
//
// for (const element of array) {
// let li = document.createElement('li');
//     li.innerText = element
//
//
//     menu.appendChild(li)
// }
//////////////////////////////////////////////////////////////////////////////////////////

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // Завдання робити через цикли.
//
// for (const element of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     document.body.appendChild(div)
//     div.classList.add('block')
//   div.innerText = `${element.title} ,${element.monthDuration} `
//
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

// for (const element of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     document.body.appendChild(div)
//     div.classList.add('item')
//
//     /////////////////////////////////
//     let h1 = document.createElement('h1');
//     h1.classList.add('heading');
//     h1.innerText = `${element.title}`;
//     div.appendChild(h1);
// ////////////////////////////////////
//     let p = document.createElement('p');
//     p.classList.add('description');
//     p.innerText = `${element.monthDuration}`;
//     div.appendChild(p)
// }
///////////////////////////////////////////////////////////////////////////////////////////////////
// Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".



// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
