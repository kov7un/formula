

let a = +prompt('Длина стороны квадрата в см');

let perimetr = a * 4;

console.log(`Периметр квадрата ${perimetr} см`);

let b = +prompt('Длина ребра куба в см');

let obiom = b * b * b;

console.log(`Обьем куба равен ${obiom} см`);

let r = +prompt('Радиус окружности');

let p = 3.14;

let s = p * (r ** 2);

console.log(`Площадь Круга равен ${s} см²`);

let m = +prompt('Масса Вещества в кг');

let v = +prompt('Обьем вещества в литрах');

let P = m / v;

console.log(`Плотность материала равна ${P} кг/л`);

let N = +prompt('Численность населения');

let S = +prompt('Площадь территории');

let W = N / S;

console.log(`Плотность населения равна ${W} чел./ км²`);

let A = +prompt('Катет А');

let B = +prompt('Катет B');

let C = Math.sqrt(A * A + B * B);

C = C * 100;
C = Math.round(C);
C = C / 100;

console.log(`Гипотенуза равна ${C}`);

let Z = +prompt('Значение а');

// let Y = (Z * Z + 10) / Math.sqrt(Z * Z + 1) или в одной формуле

let X = Z * Z + 10;

let V = Math.sqrt(Z * Z + 1);

let Y = X / V;

console.log(`Значение y равен ${Y}`)