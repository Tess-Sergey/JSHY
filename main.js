/*
    Task 1:

    Необходимо создать информацию о себе, используя переменные, в которых будет:
    -ваше имя,
    -ваш возраст,  
    -поле с вашим статусом о семейном положении, замужем/женаты (Либо истина , либо ложь)
    -по аналогии с предыдущим, поле с детьми

    Также необходимо определить тип данных всех ваших полей и вывести результат в консоль
*/
const myName = "Serey";
const myAge = 33;
const married = true;
const children = false;
console.log(typeof myName);
console.log(typeof myAge);
console.log(typeof married);
console.log(typeof children);

/* 
    Task 2:

    Напишите скрипт, который находит площадь прямоугольника

    -высота 23см,
    -шириной 10см

    Каждая сущность должна находиться в своей переменной
*/

let a = 23;
let b = 10;
let result = (a * b) / 2;
console.log(result);

/*
    Task 3:

    Напиши скрипт, который находит объем цилиндра
    
    -высота 10м  
    -площадь основания 4м

    Каждая сущность должна находиться в своей переменной
*/
let h = 10;
let w = 4;
let p = 3.14;

let sum = p * (w * w) * h;
console.log(sum);

/*
    Task 4:

    Напиши рядом с каждым выражением , тот ответ который по вашему мнению выведет console.
    И потом сравните ваш результат с тем что на самом деле вывела консоль.
    
    Infinity - "1" //infinity
	 "42" + 42 // 
	 4242  
    2 + "1 1" // 21 1
    99 + 101 // 200 
    "1" - "1" // 0
    "Result: " + 10/2 // Result: 5
    3 + " bananas " + 2 + " apples " // 3 bananas 2 apples 

*/

console.log(Infinity - "1");
console.log("42" + 42);
console.log(2 + "1 1");
console.log(99 + 101);
console.log("1" - "1");
console.log("Result: " + 10 / 2);
console.log(3 + " bananas " + 2 + " apples ");
