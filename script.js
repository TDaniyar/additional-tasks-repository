'use strict';

let lang = prompt("Введите 'ru' или 'en':");
if (lang === 'ru') {
    console.log("Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье");
}else if (lang === 'en'){
    console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
}

switch (lang) {
    case "ru":
        console.log("Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье");
        break;
    case "en": 
        console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");   
        break;
}

let ruArray = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
let enArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

lang === 'ru'? console.log(String(ruArray)): console.log(String(enArray));


let namePerson = prompt("Please input the name: ");
namePerson === "Артем"? console.log("директор"): namePerson === "Александр"? console.log("преподаватель") : console.log("студент")