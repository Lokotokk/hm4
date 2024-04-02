"use strict";
// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число


for (let i = 0; i <= 10; i++) {
    if (i === 0) {
        console.log(`${i}  - это ноль`);
    } else if (i % 2 === 0) {
        console.log(`${i}  - четное число`);
    } else {
        console.log(`${i}  - нечетное число`);
    }
}

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

let arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3, 2);
alert(arr);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

let arr = createArray(5, 0, 10);
console.log(arr);
console.log(sumArray(arr));
console.log(findMin(arr));
console.log(findMeaning(arr, 3));

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // Максимум не включается, минимум включается
  }

function createArray(lenght, min, max) {
    let array = [];
    for (let i = 0; i < lenght; i++) {
        array.push(getRandomInt(min, max));
    }
    return array;
}  

function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

function findMin(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

function findMeaning(array, meaning) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === meaning) {
            return 1;
        }
    }
    return 0;
}

// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

let arr = createArray(20, "х");
printArray(arr);


function createArray(n, meaning) {
    let xBox = meaning;
    let array = [xBox];
    
    for (let i = 1; i < n; i++) {
        xBox = xBox + meaning;
        array[i] = xBox;
    }
    return array;
}

function printArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}


