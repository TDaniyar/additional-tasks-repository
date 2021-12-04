'use strict';

/*
Дописать функционал игрового бота.
Кол-во попыток пользователя должно быть ограничено: 10
— если пользовательское число больше, то бот выводит "Загаданное число меньше, осталось попыток ..." и предлагает ввести новый вариант;
— если пользовательское число меньше, то бот выводит "Загаданное число больше, осталось попыток ..." и предлагает ввести новый вариант;
— если пользователь вводит правильное число, то бот выводит "Поздравляю, Вы угадали!!! Хотели бы сыграть еще?", при нажатии ОК игра перезапускается (снова 10 попыток и новое загаданное число)
— если пользователь ввел не число, то выводит сообщение "Введи число!" и предлагает ввести новый вариант;
— если пользователь нажимает "Отмена", то игра выводит прощальное сообщение и завершается.
— если закончились попытки то программа сообщает: "Попытки закончились, хотите сыграть еще?"
Программа должны быть выполнена с помощью рекурсии, без единого цикла.
Загаданное число и оставшиеся кол-во попыток должно храниться «в замыкании»
*/

let greeting;
let gameExplanation;
let gameStartNumber;
let undefinedNumber;
let gameNumberisNumber;
let totalAtempt;

const getTotalAtempt = function (a) {
    if (a === 0) {
        return a;
    } else {
        console.log(a);

        return getTotalAtempt(a - 1);
    }
};
getTotalAtempt(10);
const gameStart = function () {
    greeting = alert("Загадывание случайного числа от 1 до 100");
    gameExplanation = confirm("Ты хочешь угадать число от 1 до 100? У тебя есть только 10 попыток");
    if (gameExplanation === true) {
        const getGameStartNumber = function () {
            gameStartNumber = +prompt("Введи число от 1 до 100");
            const isNumber = function (num) {
                return !isNaN(parseFloat(num)) && isFinite(num);
            };
            gameNumberisNumber = isNumber(gameStartNumber);
            if (gameNumberisNumber === true) {
                const gamerunning = function (num1, num2) {
                    if (isNaN(num1) === true) {
                        return getGameStartNumber(alert("Введи число!"));
                    } else if (num1 === 0) {
                        return alert("Игра окончена");
                    } else if (num1 > num2) {
                        return gamerunning(+prompt("Загаданное число больше, Введи новое число!"), num2);
                    } else if (num1 < num2) {
                        return gamerunning(+prompt("Загаданное число меньше, Введи новое число!"), num2);
                    } else if (num1 === num2) {
                        return alert("Поздравляю, Вы угадали!!!");
                    }
                };
                gamerunning(gameStartNumber, undefinedNumber);
            } else if (gameNumberisNumber === false) {
                return getGameStartNumber(alert("Введи число!"));
            }
            console.log(isNumber(gameStartNumber));
        };
        getGameStartNumber();
    } else if (gameExplanation === false) {
        return alert("До свидания!");
    }

};
undefinedNumber = Math.floor(Math.random() * 99 + 1);
gameStart();
totalAtempt = 10;