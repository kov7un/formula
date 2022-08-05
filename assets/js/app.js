

let a = +prompt('Длина стороны квадрата в см');

console.log(`Длина стороны квадрата ${a} см`)

let perimetr = a * 4;

console.log(`Периметр квадрата ${perimetr} см`);

let b = +prompt('Длина ребра куба в см');

console.log(`Длина ребра куба ${b} см`)

let obiom = b * b * b;

console.log(`Обьем куба равен ${obiom} см`);

let D = 4 * (b * b)

console.log(`Площадь боковой поверхности куба равна ${D} см²`)

let r = +prompt('Радиус окружности ');

console.log(`Радиус окружности ${r}см`)

let p = 3.14;

let s = p * (r ** 2);

console.log(`Площадь Круга равен ${s} см²`);

let F = 2 * 3.14 * r;

console.log(`Длина окружности круга = ${F} см`)

F = F * 100;
F = Math.round(F);
F = F / 100;

let m = +prompt('Масса Вещества в кг');

console.log(`Масса вещества ${m} кг`)

let v = +prompt('Обьем вещества в литрах');

console.log(`Обьем вещества  ${v} литр`)

let P = m / v;

console.log(`Плотность материала равна ${P} кг/л`);

let N = +prompt('Численность населения');

console.log(`Численность населения ${N} чел`)

let S = +prompt('Площадь территории');

console.log(`Площадь территории ${S} км²`)

let W = N / S;

console.log(`Плотность населения равна ${W} чел./ км²`);

let A = +prompt('Катет А');

console.log(`Катет А = ${A}`)

let B = +prompt('Катет B');

console.log(`Катет B = ${B}`)

let C = Math.sqrt(A * A + B * B);

C = C * 100;
C = Math.round(C);
C = C / 100;

console.log(`Гипотенуза равна ${C}`);

let Z = +prompt('Значение а');

console.log(`Значение а ${Z}`)

// let Y = (Z * Z + 10) / Math.sqrt(Z * Z + 1) или в одной формуле

let X = Z * Z + 10;

let V = Math.sqrt(Z * Z + 1);

let Y = X / V;

Y = Y * 100;
Y = Math.round(Y);
Y = Y / 100;

console.log(`Значение y равен ${Y}`)