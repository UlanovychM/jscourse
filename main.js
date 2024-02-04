'use strict';

//

// const w = 10;

// const h = 5;

// console.log(sum(w, h));
// /*
// Ваша часовая ставка 80$ и вы готовы работать не
// более 5 часов в день 5 дней в неделю (кроме выходных).
// К вам приходит заказчик и предлагает заказ на 40
// часов работы.
// Сейчас понедельник.
// Вы должны уехать через 11 дней.
// Выведете в консоль:
// - Boolean переменную успеете ли вы взяться за работу
// - Сколько вы за неё попросите?
// */

const salary = 80;
const hour = 40;
const days = (11 - 2) * 5;

console.log(days > hour);
console.log(salary * hour);

// /*
// 	Пользователь:
// 	- Возраст
// 	- Наличие работы
// 	- Деньги
// 	Нужно проверить может ли он купить новый MacBook за 2000$?
// 	Он может брать не только свои деньги, но и взять кредит.
// 	Ему дадут 500$, только если ему больше 24-х лет и он
// 	имеет работу, 100$ если ему просто больше 24-х лет и 0 в
// 	ином случае.
// 	Напишите функцию, которая принимает данные пользователя
// 	и товара и возвращает true или false;
// */

// const creditCheck = (age, work = true, cash) => {
// 	const macBook = 2000;
// 	let credit;
// 	if (age >= 24 && work) {
// 		credit = 500;
// 	} else if (age >= 24 && !work) {
// 		credit = 100;
// 	} else {
// 		credit = 0;
// 	}

// 	return Boolean(
// 		(macBook <= cash || macBook <= cash + credit) | (macBook == credit)
// 	);
// };

// console.log(creditCheck(24, false, 1500));

// const clientDep = 12000;

// const userCapital = 0.07;

// let sum = clientDep * (1 + userCapital / 12) ** 24;

// const userHouse = 13500;

// if (userHouse <= sum) {
// 	console.log(`uss ${sum - userHouse}`);
// } else {
// 	console.log('u this didnt buy');
// }

// function computeCredit(age, hasJob = false) {
// 	switch (true) {
// 		case age >= 24 && hasJob:
// 			return 500;
// 		case age > 24:
// 			return 100;
// 		default:
// 			return 0;
// 	}
// }

// function canBay(productPrice, age, money, hasJob = false) {
// 	const creditMoney = computeCredit(age, hasJob);
// 	return productPrice <= money + creditMoney;
// }

// console.log(canBay(2000, 25, 1500, true));

// let checkRobot = prompt('Сколько будет 7 + 15');

// switch (checkRobot) {
// 	case '23':
// 		alert('Успех');
// 		break;
// 	default:
// 		alert('Ви робот');
// }

// const res = prompt('Сколько будет 7 + 15');

// switch (true) {
// 	case res === 'Я не робот':
// 	case Number(res) === 22:
// 	case Number(res) === -8:
// 		console.log('Успех');
// 		break;
// 	default:
// 		console.log('Ви робот');
// }

// let balance = 900;
// let bonusBalance = 90;
// let isBalance = false;
// let isExist = false;
// let isSelling = true;

// let payGame =
// 	balance >= 1000 || bonusBalance >= 100
// 		? !isBalance && !isExist && isSelling
// 			? true
// 			: false
// 		: false;

// console.log(payGame);

// const canBay =
// 	(balance >= 1000 || bonusBalance >= 100) &&
// 	!isBalance &&
// 	!isExist &&
// 	isSelling;

// console.log(`Зможу придбаті чи ні ${canBay ? 'Yes' : 'No'}`);

// const toPower = (num, power) => {
// 	const res = num ** power;
// 	return res;
// };

// const tasks = ['Задача'];

// const userTasksPush = arr => {
// 	tasks.push(arr);
// };

// userTasksPush('aaaa');

// console.log(tasks);

// const Remove = arr => {
// 	const index = tasks.indexOf(arr);
// 	if (index === -1) {
// 		return;
// 	}
// 	return tasks.splice(index, 1);
// };

// console.log(tasks);

// const userTasksRevers = arr => {
// 	const result = Remove(arr);
// 	if (result) {
// 		tasks.unshift(result[0]);
// 	}
// };

// userTasksRevers('aaaa');

// console.log(tasks);

// const url = 'https://docs.google.com/document/d/edit';

// const getUrl = url => {
// 	const [protocol, _, host, path] = url.split('/');
// 	console.log(`Protocol ${protocol.split(':')[0]}`);
// 	console.log(`Domen ${host}`);
// 	console.log(`Protocol /${path.join('/')}`);
// };

// const arr = ['!', 'JS', 'люблю', 'Я'];
// const resArr = [];

// for (let i = arr.length - 1; i >= 0; i--) {
// 	resArr.push(arr[i]);
// }

// console.log(resArr.join(' '));

// const balance = 100;
// const operations = [1000, -700, 300, -500, 10000];

// const getBalance = (arrOfOperations, initialBlance) => {
// 	let balance = initialBlance;
// 	for (const element of arrOfOperations) {
// 		balance += element;
// 	}
// 	return balance;
// };

// function checkOperations(arrOfOperations, initialBlance) {
// 	let balance = initialBlance;
// 	let isOk = true;
// 	for (const element of arrOfOperations) {
// 		balance += element;

// 		if (balance < 0) {
// 			isOk = false;
// 			break;
// 		}
// 	}
// 	return isOk;
// }

// const average = arrOfOperations => {
// 	let positiveCount = 0;
// 	let positiveSum = 0;
// 	let negativeSum = 0;
// 	let negativeCount = 0;
// 	for (const element of arrOfOperations) {
// 		if (element > 0) {
// 			positiveCount++;
// 			positiveSum += element;
// 		}

// 		if (element < 0) {
// 			negativeSum++;
// 			negativeCount += element;
// 		}
// 	}

// 	return [positiveSum / positiveCount, negativeSum / negativeCount];
// };

// function add(a, b) {
// 	return a + b;
// }

// function substract(a, b) {
// 	return a - b;
// }

// function calucate(a, b, fn) {
// 	const res = fn(a, b);
// 	return res;
// }

// const rs = calucate(5, 6, add);

// console.log(rs);

// const power = pow => num => num ** pow;

// const prices = [
// 	[100, 200],
// 	[120, 100],
// 	[200, 350],
// ];

// const result = prices
// 	.map(product => product[1] - product[0])
// 	.filter(price => price > 0);

// // const arr = [1, 2, 3, 10]; середне значення числа

// // const reducer = arr.reduce((acc, elem, i) => {
// // 	if (i != arr.length - 1) {
// // 		return acc + elem;
// // 	} else {
// // 		return (acc + el) / arr.length;
// // 	}
// // }, 0);

// // const arr = [1, 2, 3, 10]; пошук числа

// // const some = (ar, num) => {
// // 	const res = ar.find(e => e == num);
// // 	return res == undefined ? false : true;
// // };

// // console.log(some(arr, 5));

// const arr = [
// 	[2, 4],
// 	[3, 4],
// 	[10, 20],
// ];

// const res = arr.flat();
// console.log(res);

// const users = ['Міша', 'Женя', 'Дима', 'Витя'];

// users.sort();

// // String

// const userName = 'qwerty';

// console.log(userName.charAt(2));
// console.log(userName.indexOf('qw'));
// console.log(userName.lastIndexOf('w'));
// console.log(userName.includes('qw'));

// console.log(userName.slice(4));

// const fullUserNames = 'asd fgth wasd';

// const usersName = fullUserNames.slice(0, fullUserNames.indexOf(' '));

// const userSurname = fullUserNames.slice(
// 	fullUserNames.lastIndexOf(' ') + 1,
// 	fullUserNames.length
// );

// const str = 'ABCD EFGH';

// str.replace('A', 'N');
// str.replaceAll('A', 'N');
// str.replace(/a/g, 'N');
// str.toLowerCase();
// str.toUpperCase();
// str.trim();
// str.trimEnd();
// str.trimStart();

// const num1 = '380635940401';
// const num2 = '380635940402';
// const num3 = '+380635940404';
// const num4 = '+38(063)5940401';
// const num5 = '0635940401';
// const num6 = '380635940401';
// const num7 = '380635940401';

// function isPhoneNumber(num) {
// 	num = num.trim();
// 	num = num.replace('+380', '+38');
// 	if (!num.startWith('380')) {
// 		return false;
// 	}
// 	num = num.replaceAll('(', '');
// 	num = num.replaceAll(')', '');
// 	num = num.replaceAll(' ', '');
// 	num = num.replaceAll('-', '');
// 	if (!num.length != 12) {
// 		return false;
// 	}

// 	let onlyNumber = true;
// 	for (const char of num) {
// 		if (isNaN(Number(char))) {
// 			onlyNumber = false;
// 			break;
// 		}
// 	}
// 	return onlyNumber;
// }

// function getEvenNumbers(start, end) {
// 	let arr = [];

// 	for (let i = start; i < end; i++) {
// 		arr.push(start + 1);
// 	}

// 	return;
// }

// console.log(10 % 4);

// function checkStorage(storage, item) {
// 	let cheker = item.toLowerCase();

// 	return storage.includes(cheker)
// 		? `${cheker} is available to order!`
// 		: 'Sorry! We are out of stock!';
// }

// console.log(checkStorage(['apple', 'plum', 'pear'], 'pLuM'));

// function getCommonElements(array1, array2) {
// 	const arr = [];

// 	for (let i = 0; i < array1.length; i++) {
// 		array1[i];
// 		if (array2.includes(array1[i])) {
// 			arr.push(array1[i]);
// 		}
// 	}

// 	return arr;
// }

// const planets = ['Earth', 'Mars', 'Venus'];

// for (const planet of planets) {
// 	console.log(planet);
// }

// function calculateTotalPrice(order) {
// 	let sum = 0;

// 	for (const e of order) {
// 		sum += e;
// 	}

// 	return sum;
// }

// console.log(calculateTotalPrice([]));

// // function sum(a, b) {
// // 	console.log(arguments);
// // 	return a + b;
// // }

// // sum(2, 5);

// // const apartment = {
// // 	descr: 'Spacious apartment in the city center',
// // 	rating: 4,
// // 	price: 2153,
// // };

// // const keys = [];
// // const values = [];

// // for (key in apartment) {
// // 	keys.push(key);
// // 	values.push(apartment[key]);
// // }

// // const apartment = {
// // 	descr: 'Spacious apartment in the city center',
// // 	rating: 4,
// // 	price: 2153,
// // };

// // const values = [];
// // const keys = Object.keys(apartment);

// // for (const key of keys) {
// // 	values.push(keys[key]);
// // }

// function countProps(object) {
// 	let propCount = 0;

// 	const keys = Object.keys(object);

// 	for (const key of keys) {
// 		object[key] = propCount += 1;
// 	}
// 	return propCount;
// }
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

// function countTotalSalary(salaries) {
// 	let totalSalary = 0;

// 	const saler = Object.values(salaries);
// 	for (const key of saler) {
// 		totalSalary += key;
// 	}
// 	return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// const colors = [
// 	{ hex: '#f44336', rgb: '244,67,54' },
// 	{ hex: '#2196f3', rgb: '33,150,243' },
// 	{ hex: '#4caf50', rgb: '76,175,80' },
// 	{ hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const elem of colors) {
// 	hexColors.push(elem.hex);
// 	rgbColors.push(elem.rgb);
// }

// console.log(hexColors);

// console.log(rgbColors);

// function getProductPrice(productName) {
// 	const products = [
// 		{ name: 'Radar', price: 1300, quantity: 4 },
// 		{ name: 'Scanner', price: 2700, quantity: 3 },
// 		{ name: 'Droid', price: 400, quantity: 7 },
// 		{ name: 'Grip', price: 1200, quantity: 9 },
// 	];

// 	for (const product of products) {
// 		if (product.name === productName) {
// 			return product.price;
// 		}
// 	}
// }

// console.log(getProductPrice('Radar'));

// function getAllPropValues(propName) {
// 	const products = [
// 		{ name: 'Radar', price: 1300, quantity: 4 },
// 		{ name: 'Scanner', price: 2700, quantity: 3 },
// 		{ name: 'Droid', price: 400, quantity: 7 },
// 		{ name: 'Grip', price: 1200, quantity: 9 },
// 	];

// 	const nameProd = [];

// 	for (const product of products) {
// 		switch (propName) {
// 			case 'name':
// 				nameProd.push(product.name);
// 				break;
// 			case 'price':
// 				nameProd.push(product.price);
// 				break;
// 			case 'quantity':
// 				nameProd.push(product.quantity);
// 				break;
// 			default:
// 				nameProd;
// 		}
// 	}

// 	return nameProd;
// }

// console.log(getAllPropValues('name'));

// function calculateTotalPrice(productName) {
// 	const products = [
// 		{ name: 'Radar', price: 1300, quantity: 4 },
// 		{ name: 'Scanner', price: 2700, quantity: 3 },
// 		{ name: 'Droid', price: 400, quantity: 7 },
// 		{ name: 'Grip', price: 1200, quantity: 9 },
// 	];

// 	for (const product of products) {
// 		if (product.name === productName) {
// 			return product.price * product.quantity;
// 		}
// 	}

// 	return `Product ${productName} not found!`;
// }

// console.log(calculateTotalPrice('Blaster'));
// console.log(calculateTotalPrice('Scanner'));
// console.log(calculateTotalPrice('Droid'));
// console.log(calculateTotalPrice('Grip'));

// function add(...args) {
// 	let sum = 0;

// 	for (const elem in args) {
// 		sum += args[elem];
// 	}
// 	return sum;
// }

// console.log(add(12, 4, 11, 48));
// console.log(add(15, 27));

// function addOverNum(value, ...args) {
// 	let sum = 0;

// 	for (const key in args) {
// 		if (value < args[key]) {
// 			sum += args[key];
// 		}
// 	}

// 	return sum;
// }

// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));

// console.log(addOverNum(15, 32, 6, 13, 19, 8));

// function getExtremeScores(scores) {
// 	return { best: Math.max(...scores), worst: Math.min(...scores) };
// }

// let arri = [];

// console.log(fillArray(2, 10));

// function fillArray(min, max) {
// 	for (let i = min; i <= max; i += 2) {
// 		return arri.push(i);
// 	}
// }

// function deliverPizza(pizzaName) {
// 	return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
// 	return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
// 	return callback(pizzaName);
// }

// function makePizza(pizzaName, callback) {
// 	console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
// 	callback(pizzaName);
// }

// makePizza('Royal Grand', function deliverPizza(pizzaName) {
// 	console.log(`Delivering pizza ${pizzaName}`);
// });

// makePizza('Ultracheese', function eatPizza(pizzaName) {
// 	console.log(`Eating pizza ${pizzaName}`);
// });

// function calculateTotalPrice(orderedItems) {
// 	let totalPrice = 0;

// 	orderedItems.forEach(element => {
// 		totalPrice += element;
// 	});

// 	return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// function filterArray(numbers, value) {
// 	let arr = [];

// 	numbers.forEach(elem => {
// 		if (elem > value) {
// 			return arr.push(elem);
// 		}
// 	});

// 	return arr;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// const calculateTotalPrice = orderedItems => {
// 	let totalPrice = 0;

// 	orderedItems.forEach(item => (totalPrice += item));

// 	return totalPrice;
// };

// function changeEven(numbers, value) {
// 	let arr = [];

// 	for (const key in numbers) {
// 		if (numbers[key] % 2 === 0) {
// 			arr = numbers[key] += value;
// 		}
// 	}

// 	return arr;
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10));

// function changeEven(numbers, value) {
// 	const arr = [];

// 	numbers.forEach(elem => {
// 		if (elem % 2 === 0) {
// 			elem += value;
// 		}
// 		arr.push(elem);
// 	});

// 	return arr;
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10));

// // const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];

// // const planetsLengths = planets.map(planet => planet.length);

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// //filter

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);

// const books = [
// 	{
// 		title: 'The Last Kingdom',
// 		author: 'Bernard Cornwell',
// 		rating: 8.38,
// 	},
// 	{
// 		title: 'Beside Still Waters',
// 		author: 'Robert Sheckley',
// 		rating: 8.51,
// 	},
// 	{
// 		title: 'The Dream of a Ridiculous Man',
// 		author: 'Fyodor Dostoevsky',
// 		rating: 7.75,
// 	},
// 	{ title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// 	{ title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Bernard Cornwell';

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// console.log(topRatedBooks);

// console.log(booksByAuthor);

// const getUserColorEye = [
// 	{
// 		name: 'Moore Hensley',
// 		email: 'moorehensley@indexia.com',
// 		eyeColor: 'blue',
// 		friends: ['Sharron Pace'],
// 		isActive: false,
// 		balance: 2811,
// 		gender: 'male',
// 	},
// 	{
// 		name: 'Sharlene Bush',
// 		email: 'sharlenebush@tubesys.com',
// 		eyeColor: 'blue',
// 		friends: ['Briana Decker', 'Sharron Pace'],
// 		isActive: true,
// 		balance: 3821,
// 		gender: 'female',
// 	},
// 	{
// 		name: 'Ross Vazquez',
// 		email: 'rossvazquez@xinware.com',
// 		eyeColor: 'green',
// 		friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
// 		isActive: false,
// 		balance: 3793,
// 		gender: 'male',
// 	},
// 	{
// 		name: 'Elma Head',
// 		email: 'elmahead@omatom.com',
// 		eyeColor: 'green',
// 		friends: ['Goldie Gentry', 'Aisha Tran'],
// 		isActive: true,
// 		balance: 2278,
// 		gender: 'female',
// 	},
// 	{
// 		name: 'Carey Barr',
// 		email: 'careybarr@nurali.com',
// 		eyeColor: 'blue',
// 		friends: ['Jordan Sampson', 'Eddie Strong'],
// 		isActive: true,
// 		balance: 3951,
// 		gender: 'male',
// 	},
// 	{
// 		name: 'Blackburn Dotson',
// 		email: 'blackburndotson@furnigeer.com',
// 		eyeColor: 'brown',
// 		friends: ['Jacklyn Lucas', 'Linda Chapman'],
// 		isActive: false,
// 		balance: 1498,
// 		gender: 'male',
// 	},
// 	{
// 		name: 'Sheree Anthony',
// 		email: 'shereeanthony@kog.com',
// 		eyeColor: 'brown',
// 		friends: ['Goldie Gentry', 'Briana Decker'],
// 		isActive: true,
// 		balance: 2764,
// 		gender: 'female',
// 	},
// ];

// const getUsersWithEyeColor = (users, color) => {
// 	return users.filter(user => user.eyeColor === color);
// };

// const getUsersWithAge = (users, minAge, maxAge) => {
// 	return users.filter(user => minAge <= user.age && maxAge >= user.age);
// };

// console.log(getUsersWithAge(ageCheck, 20, 30));

// // find

// const books2 = [
// 	{
// 		title: 'The Last Kingdom',
// 		author: 'Bernard Cornwell',
// 		rating: 8.38,
// 	},
// 	{
// 		title: 'Beside Still Waters',
// 		author: 'Robert Sheckley',
// 		rating: 8.51,
// 	},
// 	{
// 		title: 'The Dream of a Ridiculous Man',
// 		author: 'Fyodor Dostoevsky',
// 		rating: 7.75,
// 	},
// 	{ title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR2 = 'Robert Sheckley';

// const bookWithTitle = books2.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books2.find(book => book.author === AUTHOR2);

// console.log(bookWithTitle);
// console.log(bookByAuthor);

// const getUserWithEmail = (users, email) => {
// 	return users.find(user => user.email === email);
// };

// // every
// const isEveryUserActive = users => {
// 	return users.every(user => user.isActive === true);
// };

// // some

// const isAnyUserActive = users => {
// 	return users.some(user => user.isActive === true);
// };

// // reduce

// const players = {
// 	mango: 1270,
// 	poly: 468,
// 	ajax: 710,
// 	kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((init, num) => {
// 	return init + num;
// }, 0);

// const averagePlayTime = totalPlayTime / playtimes.length;

// const playersArr = [
// 	{ name: 'Mango', playtime: 1270, gamesPlayed: 4 },
// 	{ name: 'Poly', playtime: 469, gamesPlayed: 2 },
// 	{ name: 'Ajax', playtime: 690, gamesPlayed: 3 },
// 	{ name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((time, played) => {
// 	return time + played.playtime / played.gamesPlayed;
// }, 0);

// const calculateTotalBalance = users => {
// 	return users.reduce((total, user) => {
// 		return total + user.balance;
// 	}, 0);
// };

// // toSorted

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
// 	'Tanith Lee',
// 	'Bernard Cornwell',
// 	'Robert Sheckley',
// 	'Fyodor Dostoevsky',
// ];

// const ascendingReleaseDates = releaseDates.toSorted();

// const alphabeticalAuthors = authors.toSorted();

// const ascendingReleaseDate = releaseDates.toSorted((a, b) => a - b);

// const descendingReleaseDate = releaseDates.toSorted((a, b) => b - a);

// // toSorted localeCompare

// const students = ['Jacob', 'Artemis', 'Solomon', 'Adrian', 'Kai', 'Ganymede'];

// const inAlphabetOrder = students.toSorted((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

// const inReversedOrder = students.toSorted((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // [ "Solomon", "Kai", "Jacob", "Ganymede", "Artemis", "Adrian" ]

// const authorsInAlphabetOrder = authors.toSorted((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = authors.toSorted((a, b) => b.localeCompare(a));

// const sortedByAuthorName = books.toSorted((firstAuthor, secondAuthor) =>
// 	firstAuthor.author.localeCompare(secondAuthor.author)
// );

// const sortedByReversedAuthorName = books.toSorted((firstAuthor, secondAuthor) =>
// 	secondAuthor.author.localeCompare(firstAuthor.author)
// );

// const sortedByAscendingRating = books.toSorted(
// 	(firstRating, secondRating) => firstRating.rating - secondRating.rating
// );

// const sortedByDescentingRating = books.toSorted(
// 	(firstRating, secondRating) => secondRating.rating - firstRating.rating
// );

// // Method chains

// const uniqueSortedCourses = students
// 	.flatMap(student => student.courses)
// 	.filter((course, index, array) => array.indexOf(course) === index)
// 	.toSorted((a, b) => a.localeCompare(b));

// console.log(uniqueSortedCourses); // ["biology", "science", "literature", "mathematics", "physics"]

// const MIN_BOOK_RATING = 8;

// const names = books
// 	.filter(book => book.rating > MIN_BOOK_RATING)
// 	.map(book => book.author)
// 	.toSorted((a, b) => a.localeCompare(b));

// // OOP

// const pizzaPalace = {
// 	pizzas: ['Supercheese', 'Smoked', 'Four meats'],
// 	checkPizza(pizzaName) {
// 		return this.pizzas.includes(pizzaName);
// 	},
// 	order(pizzaName) {
// 		const isPizzaAvailable = this.checkPizza(pizzaName);

// 		if (!isPizzaAvailable) {
// 			return `Sorry, there is no pizza named «${pizzaName}»`;
// 		}

// 		return `Order accepted, preparing «${pizzaName}» pizza`;
// 	},
// };

// console.log(pizzaPalace.order('Smoked'));

// //call
// function greet(str) {
// 	console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }

// const mango = {
// 	username: 'Mango',
// 	room: 27,
// };

// const poly = {
// 	username: 'Poly',
// 	room: 191,
// };

// greet.call(mango, 'Welcome'); // "Welcome, Mango, your room is 27!"
// greet.call(poly, 'Aloha'); // "Aloha, Poly, your room is 191!"

// //apply

// greet.apply(mango, ['Welcome']); // "Welcome, Mango, your room is 27!"
// greet.apply(poly, ['Aloha']); // "Aloha, Poly, your room is 191!"

// //bind

// const customer = {
// 	firstName: 'Jacob',
// 	lastName: 'Mercer',
// 	getFullName() {
// 		return `${this.firstName} ${this.lastName}`;
// 	},
// };

// function makeMessage(callback) {
// 	const username = callback();
// 	console.log(`Processing an application from ${username}`);
// }

// makeMessage(customer.getFullName.bind(customer)); // "Processing an application from Jacob Mercer"

// // [[Prototype]]

// // const parent = {
// // 	name: 'Stacey',
// // 	surname: 'Moore',
// // 	age: 54,
// // 	heritage: 'Irish',
// // };

// // const child = Object.create(parent);
// // child.name = 'Jason';
// // child.age = 27;

// const ancestor = {
// 	name: 'Paul',
// 	age: 83,
// 	surname: 'Dawson',
// 	heritage: 'Irish',
// };

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// // Class

// class Car {
// 	constructor({ brand, model, price }) {
// 		this.brand = brand;
// 		this.model = model;
// 		this.price = price;
// 	}

// 	getPrice() {
// 		return this.price;
// 	}

// 	changePrice(newPrice) {
// 		this.price = newPrice;
// 	}
// }

// // Privat
// class Car {
// 	#brand;

// 	constructor({ brand, model, price }) {
// 		this.#brand = brand;
// 		this.model = model;
// 		this.price = price;
// 	}

// 	getPrice() {
// 		return this.price;
// 	}

// 	changePrice(newPrice) {
// 		this.price = newPrice;
// 	}

// 	getBrand() {
// 		return this.#brand;
// 	}

// 	changeBrand(newBrand) {
// 		this.#brand = newBrand;
// 	}
// }

// // Privat metod

// class User {
// 	name;
// 	#email;

// 	constructor({ name, email }) {
// 		this.name = name;
// 		this.#email = email;
// 	}

// 	// Публічний метод для отримання електронної пошти
// 	getEmail() {
// 		return this.#email;
// 	}

// 	// Публічний метод для зміни електронної пошти
// 	changeEmail(newEmail) {
// 		if (this.#validateEmail(newEmail)) {
// 			this.#email = newEmail;
// 		} else {
// 			console.log('Invalid email format');
// 		}
// 	}

// 	// Приватний метод для валідації електронної пошти
// 	#validateEmail(email) {
// 		return email.includes('@');
// 	}
// }

// const mangoU = new User({
// 	name: 'Mango',
// 	email: 'mango@mail.com',
// });

// // Спробуємо змінити електронну пошту
// mangoU.changeEmail('newmail.com'); // "Invalid email format"
// mangoU.changeEmail('new@mail.com');
// console.log(mango.getEmail()); // "new@mail.com"

// // Прямий виклик приватного методу ззовні призведе до помилки
// // mangoU.#validateEmail('test'); // Помилка

// // get & set
// class Car {
// 	#brand;
// 	#model;
// 	#price;

// 	constructor({ brand, model, price }) {
// 		this.#brand = brand;
// 		this.#model = model;
// 		this.#price = price;
// 	}

// 	get brand() {
// 		return this.#brand;
// 	}

// 	set brand(newBrand) {
// 		this.#brand = newBrand;
// 	}

// 	get model() {
// 		return this.#model;
// 	}

// 	set model(newModel) {
// 		this.#model = newModel;
// 	}

// 	get price() {
// 		return this.#price;
// 	}

// 	set price(newPrice) {
// 		this.#price = newPrice;
// 	}
// }

// class Car {
// 	static maxPrice = 50000;

// 	#price;

// 	constructor({ price }) {
// 		this.#price = price;
// 	}

// 	get price() {
// 		return this.#price;
// 	}

// 	set price(newPrice) {
// 		if (newPrice <= Car.maxPrice) {
// 			this.#price = newPrice;
// 		}
// 	}
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// class Car {
// 	static #maxPrice = 50000;

// 	static checkPrice(price) {
// 		if (this.#maxPrice < price) {
// 			return 'Error! Price exceeds the maximum';
// 		}

// 		return 'Success! Price is within acceptable limits';
// 	}

// 	constructor({ price }) {
// 		this.price = price;
// 	}
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// class User {
// 	constructor(email) {
// 		this.email = email;
// 	}

// 	get email() {
// 		return this.email;
// 	}

// 	set email(newEmail) {
// 		this.email = newEmail;
// 	}
// }

// class Admin extends User {
// 	static role = {
// 		BASIC: 'basic',
// 		SUPERUSER: 'superuser',
// 	};
// }

// class User {
// 	email;

// 	constructor(email) {
// 		this.email = email;
// 	}

// 	get email() {
// 		return this.email;
// 	}

// 	set email(newEmail) {
// 		this.email = newEmail;
// 	}
// }

// class Admin extends User {
// 	static role = {
// 		BASIC: 'basic',
// 		SUPERUSER: 'superuser',
// 	};
// 	constructor({ email, access }) {
// 		super(email);
// 		this.access = access;
// 	}
// }

// console.log(mangos.email); // "mango@mail.com"
// console.log(mangos.access); // "superuser"

// class User {
// 	email;

// 	constructor(email) {
// 		this.email = email;
// 	}

// 	get email() {
// 		return this.email;
// 	}

// 	set email(newEmail) {
// 		this.email = newEmail;
// 	}
// }
// class Admin extends User {
// 	static role = {
// 		BASIC: 'basic',
// 		SUPERUSER: 'superuser',
// 	};

// 	blacklistedEmails = [];

// 	constructor({ email, access }) {
// 		super(email);
// 		this.access = access;
// 	}

// 	blacklist(email) {
// 		return this.blacklistedEmails.push(email);
// 	}

// 	isBlacklisted(email) {
// 		return this.blacklistedEmails.includes(email);
// 	}
// }

// const mangos = new Admin({
// 	email: 'mango@mail.com',
// 	access: Admin.role.SUPERUSER,
// });

// console.log(mangos.email); // "mango@mail.com"
// console.log(mangos.access); // "superuser"

// mangos.blacklist('poly@mail.com');
// console.log(mangos.blacklistedEmails); // ["poly@mail.com"]
// console.log(mangos.isBlacklisted('mango@mail.com')); // false
// console.log(mangos.isBlacklisted('poly@mail.com')); // true

// //dom

// const heading = document.createElement('h1');
// headding.classList.add('title');
// heading.textContent = 'This is a heading';
// console.log(heading); // <h1 class="title">This is a heading</h1>

// const image = document.createElement('img');
// image.src = '<https://picsum.photos/id/11/320/240>';
// image.alt = 'Nature';
// console.log(image); // <img src="<https://picsum.photos/id/11/320/240>" alt="Nature" />

// const button = document.querySelector('.btn');

// button.addEventListener('click', handleClick);

// const handleClick = event => {
// 	console.log('event: ', event);
// 	console.log('event type: ', event.type);
// 	console.log('currentTarget: ', event.currentTarget);
// };

// button.addEventListener('click', handleClick);

// document.addEventListener('keydown', event => {
// 	if ((event.ctrlKey || event.metaKey) && event.code === 'KeyS') {
// 		console.log('«Ctrl + s» or «Command + s» combo');
// 	}
// });

// const colorPalette = document.querySelector('.color-palette');
// const output = document.querySelector('.output');

// colorPalette.addEventListener('click', selectColor);

// // This is where delegation «magic» happens
// function selectColor(event) {
// 	if (event.target.nodeName !== 'BUTTON') {
// 		return;
// 	}

// 	const selectedColor = event.target.dataset.color;
// 	output.textContent = `Selected color: ${selectedColor}`;
// 	output.style.color = selectedColor;
// }

// // Some helper functions to render palette items
// createPaletteItems();

// function createPaletteItems() {
// 	const items = [];
// 	for (let i = 0; i < 60; i++) {
// 		const color = getRandomHexColor();
// 		const item = document.createElement('button');
// 		item.type = 'button';
// 		item.dataset.color = color;
// 		item.style.backgroundColor = color;
// 		item.classList.add('item');
// 		items.push(item);
// 	}
// 	colorPalette.append(...items);
// }

// function getRandomHexColor() {
// 	const letters = '0123456789ABCDEF';
// 	let color = '#';

// 	for (let i = 0; i < 6; i++) {
// 		color += letters[Math.floor(Math.random() * 16)];
// 	}

// 	return color;
// }
// console.log(_.partition([1, 2, 3, 4], n => n % 2)); // 20

// const book = {
// 	title: 'The Last Kingdom',
// 	pages: 736,
// 	downloads: 10283,
// 	rating: 8.38,
// 	isPublic: true,
// };

// // 1 patern

// // function doStuffWithBook(book) {
// // 	// Робимо щось з властивостями об'єкта
// // 	console.log(book.title);
// // 	console.log(book.pages);
// // 	console.log(book.downloads);
// // 	console.log(book.rating);
// // 	console.log(book.isPublic);
// // 	// І так далі
// // }

// // patern 2 and 3

// // function doStuffWithBook(book) {
// // 	const { title, pages, downloads, rating, isPublic } = book;
// // 	console.log(title);
// // 	console.log(pages);
// // 	console.log(downloads);
// // 	console.log(rating);
// // 	console.log(isPublic);
// // }

// // function doStuffWithBook({ title, pages, downloads, rating, isPublic }) {
// // 	console.log(title);
// // 	console.log(pages);
// // 	console.log(downloads);
// // 	console.log(rating);
// // 	console.log(isPublic);
// // }

// // for destri object in object
// const user = {
// 	name: 'Jacques Gluke',
// 	tag: 'jgluke',
// 	stats: {
// 		followers: 5603,
// 		views: 4827,
// 		likes: 1308,
// 	},
// };

// // const {
// // 	name,
// // 	tag,
// // 	stats: { followers, views, likes },
// // } = user;

// const { name, isOnline, ...otherProps } = user;

// // console.log(name); // Jacques Gluke
// // // console.log(tag); // jgluke
// // console.log(stats); // { followers: 5603, views: 4827, likes: 1308 }
// // console.log(isOnline); // true
// // console.log(otherProps); // {age: 32, email: "j.cob@mail.com"}

// //

// // console.log(name); // Jacques Gluke
// // console.log(tag); // jgluke
// // console.log(followers); // 5603
// // console.log(views); // 4827
// // console.log(likes); // 1308

// const color = [200, 255, 100];
// // const [red, green, blue] = color;

// // console.log(`rgb(${red}, ${green}, ${blue})`); // “rgb(200, 255, 100)"

// // const [red, ...otherColors] = color;

// // // console.log(red); // 200
// // // console.log(otherColors); // [255, 100]

// // function printFruits(fruits) {
// // 	console.log(fruits[0], fruits[1], fruits[2]);
// // }

// printFruits(['apple', 'banana', 'orange']); // "apple banana orange"

// function printFruits([firstFruit, secondFruit, thirdFruit]) {
// 	console.log(firstFruit, secondFruit, thirdFruit);
// }

// printFruits(['apple', 'banana', 'orange']); // "apple banana orange"

// const settings = {
// 	theme: 'dark',
// 	isAuthenticated: true,
// 	options: [1, 2, 3],
// };
// localStorage.setItem('settings', JSON.stringify(settings));

// const savedSettings = localStorage.getItem('settings');
// console.log(savedSettings); // A string

// const parsedSettings = JSON.parse(savedSettings);
// console.log(parsedSettings); // Settings object

// sessionStorage.setItem('user-id', '123');
// sessionStorage.setItem(
// 	'tickets',
// 	JSON.stringify({ from: 'Lviv', to: 'Kyiv', quantity: 2 })
// );
// console.log(sessionStorage);
// // Storage {user-id: '123', tickets: '{"from":"Lviv","to":"Kyiv","quantity":2}', length: 2}

// const userId = sessionStorage.getItem('user-id');
// console.log(userId); // "123"

// const tickets = JSON.parse(sessionStorage.getItem('tickets'));
// console.log(tickets); // { from: "Lviv", to: "Kyiv", quantity: 2 }

// // Listener input
// // let formDate = {};

// // form.addEventListener('input', e => {
// // 	formDate[e.target.name] = e.target.value.trim();
// // }); // e.target.name - додасть нозву ключ  e.target.value = значення

// // Date

// const date = new Date(2030, 2, 16, 14, 25, 0, 0);
// console.log(date); // "Sat Mar 16 2030 14:25:00 GMT+0200 "
// console.log(date.getTime()); // 1624021654154

// const startTime = Date.now();

// // Твій код, виконуваний упродовж деякого часу
// for (let i = 0; i <= 100; i += 1) {
// 	console.log(i);
// }

// const endTime = Date.now();
// const elapsedTime = endTime - startTime;

// console.log(`Elapsed time: ${elapsedTime} ms`);

// // Promise
// const isSuccess = true;

// // Create promise
// const promise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		if (isSuccess) {
// 			resolve('Success! Value passed to resolve function');
// 		} else {
// 			reject('Error! Error passed to reject function');
// 		}
// 	}, 2000);
// });

// // Registering promise callbacks
// promise
// 	.then(value => console.log(value)) // "Success! Value passed to resolve function"
// 	.catch(error => console.log(error)) // "Error! Error passed to reject function"
// 	.finally(() => console.log('Promise settled')); // "Promise settled"

// const promise2 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve(5);
// 	}, 2000);
// });

// promise2
// 	.then(value => {
// 		console.log(value); // 5
// 		return value * 2;
// 	})
// 	.then(value => {
// 		console.log(value); // 10
// 		return value * 3;
// 	})
// 	.then(value => {
// 		console.log(value); // 30
// 	})
// 	.catch(error => {
// 		console.log(error);
// 	})
// 	.finally(() => {
// 		console.log('finally');
// 	});

// // const fetchUserFromServer = (username, onSuccess, onError) => {
// // 	console.log(`Fetching data for ${username}`);

// // 	setTimeout(() => {
// // 		// Change value of isSuccess variable to simulate request status
// // 		const isSuccess = true;

// // 		if (isSuccess) {
// // 			onSuccess('success value');
// // 		} else {
// // 			onError('error');
// // 		}
// // 	}, 2000);
// // };

// // fetchUserFromServer(
// // 	'Mango',
// // 	user => console.log(user),
// // 	error => console.error(error)
// // );

// const fetchUserFromServer = username => {
// 	return new Promise((resolve, reject) => {
// 		console.log(`Fetching data for ${username}`);

// 		setTimeout(() => {
// 			// Change value of isSuccess variable to simulate request status
// 			const isSuccess = true;

// 			if (isSuccess) {
// 				resolve('success value'); // значенням параметра resolve буде колбек-функція методу then()
// 			} else {
// 				reject('error'); // значенням параметра reject буде колбек-функція методу catch()
// 			}
// 		}, 2000);
// 	});
// };

// const userPromise = fetchUserFromServer('Mango'); // результатом виклику fetchUserFromServer("Mango") буде проміс

// // проміс обробляємо у методах then() i catch()
// userPromise
// 	.then(user => console.log(user))
// 	.catch(error => console.error(error));

// new Promise(resolve => resolve('success value'))
// 	.then(value => console.log(value))
// 	.catch(error => console.log(error));

// // Так створюється успішно виконаний проміс через Promise.resolve():

// Promise.resolve('success value')
// 	.then(value => console.log(value))
// 	.catch(error => console.log(error));

// // Так створюється проміс, що виконався з помилкою через new Promise():

// new Promise((resolve, reject) => reject('error'))
// 	.then(value => console.log(value))
// 	.catch(error => console.log(error));

// // Так створюється проміс, що виконався з помилкою через Promise.reject():

// Promise.reject('error')
// 	.then(value => console.log(value))
// 	.catch(error => console.log(error));

// // Промисифікація

// // const makeGreeting = guestName => {
// // 	return new Promise((resolve, reject) => {
// // 		if (!guestName) {
// // 			reject('Guest name must not be empty');
// // 		} else {
// // 			resolve(`Welcome ${guestName}`);
// // 		}
// // 	});
// // };

// // makeGreeting('Mango')
// // 	.then(greeting => console.log(greeting))
// // 	.catch(error => console.error(error));

// // Metodth .resolve() .reject()

// const makeGreeting = guestName => {
// 	if (!guestName) {
// 		return Promise.reject('Guest name must not be empty');
// 	} else {
// 		return Promise.resolve(`Welcome ${guestName}`);
// 	}
// };

// makeGreeting('Mango')
// 	.then(greeting => console.log(greeting))
// 	.catch(error => console.error(error));

// new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve('Fulfilled A');
// 	}, 1000);
// })
// 	.then(value => console.log(value))
// 	.catch(error => console.log(error));

// new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve('Fulfilled B');
// 	}, 3000);
// })
// 	.then(value => console.log(value))
// 	.catch(error => console.log(error));

// new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		reject('Rejected C');
// 	}, 2000);
// })
// 	.then(value => console.log(value))
// 	.catch(error => console.log(error)); // "Rejected C"

// const makePromise = ({ value, delay, shouldResolve = true }) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			if (shouldResolve) {
// 				resolve(value);
// 			} else {
// 				reject(value);
// 			}
// 		}, delay);
// 	});
// };

// makePromise({ value: 'A', delay: 1000 })
// 	.then(value => console.log(value)) // "A"
// 	.catch(error => console.log(error));

// makePromise({ value: 'B', delay: 3000 })
// 	.then(value => console.log(value)) // "B"
// 	.catch(error => console.log(error));

// makePromise({ value: 'C', delay: 2000, shouldResolve: false })
// 	.then(value => console.log(value))
// 	.catch(error => console.log(error)); // "C"

// const p1 = Promise.resolve(1);
// const p2 = Promise.resolve(2);
// const p3 = Promise.resolve(3);

// // .all()

// Promise.all([p1, p2, p3])
// 	.then(values => console.log(values)) // [1, 2, 3]
// 	.catch(error => console.log(error));

// // const p1 = Promise.resolve(1);
// // const p2 = Promise.reject('Rejected promise 2');
// // const p3 = Promise.resolve(3);

// // .allSettled()

// Promise.allSettled([p1, p2, p3]).then(values => console.log(values));
// // [
// //   { status: "fulfilled", value: 1},
// //   { status: "rejected", value: "Rejected promise 2"},
// //   { status: "fulfilled", value: 3}
// // ]

// Read
// const options = {
// 	method: 'GET',
// };

// fetch('https://jsonplaceholder.typicode.com/users', options)
// 	.then(response => {
// 		if (!response.ok) {
// 			throw new Error(response.status);
// 		}
// 		return response.json();
// 	})
// 	.then(data => {
// 		// Data handling
// 		console.log(data);
// 	})
// 	.catch(error => {
// 		// Error handling
// 		console.log(error);
// 	});

// // LIteral
// fetch('some-url', {
// 	headers: {
// 		'Content-Type': 'application/json',
// 		'X-Custom-Header': 'custom value',
// 	},
// });

// fetch('https://jsonplaceholder.typicode.com/users', {
// 	headers: {
// 		Accept: 'application/json',
// 	},
// }).then(response => {
// 	// ...
// });

// // User-Agent: Ідентифікує клієнтське програмне забезпечення, яке виконує запит
// // Accept: Вказує, які типи медіа клієнт може обробляти
// // Content-Type: Вказує тип контенту в тілі запиту або відповіді
// // Authorization: Використовується для передачі облікових даних для аутентифікації
// // Cache-Control: Директиви для керування кешуванням
// // Host: Доменне ім'я ресурсу, до якого виконується запит

// const fetchUsersBtn = document.querySelector('.btn');
// const userList = document.querySelector('.user-list');

// fetchUsersBtn.addEventListener('click', () => {
// 	fetch('https://jsonplaceholder.typicode.com/users')
// 		.then(response => {
// 			if (!response.ok) {
// 				throw new Error(response.status);
// 			}
// 			return response.json();
// 		})
// 		.then(users => {
// 			const markup = users
// 				.map(user => {
// 					return `<li>
// 	          <p><b>Name</b>: ${user.name}</p>
// 	          <p><b>Email</b>: ${user.email}</p>
// 	          <p><b>Company</b>: ${user.company.name}</p>
// 	        </li>`;
// 				})
// 				.join('');

// 			userList.insertAdjacentHTML('beforeend', markup);
// 		})
// 		.catch(error => console.log(error));
// });

// const searchParams = new URLSearchParams({
// 	_limit: 5,
// 	_sort: 'name',
// });

// console.log(searchParams.toString()); // "_limit=5&_sort=name"
// const url = `https://jsonplaceholder.typicode.com/users?${searchParams}`;
// console.log(url); // "<https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name>"

// const postId = 1;

// fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
// 	.then(response => {
// 		if (!response.ok) {
// 			throw new Error(response.status);
// 		}
// 		return response.json();
// 	})
// 	.then(posts => console.log(posts))
// 	.catch(error => console.log(error));

// // Create

// const postToAdd = {
// 	title: 'CRUD',
// 	body: 'CRUD is awesome!',
// };

// const options2 = {
// 	method: 'POST',
// 	body: JSON.stringify(postToAdd),
// 	headers: {
// 		'Content-Type': 'application/json; charset=UTF-8',
// 	},
// };

// fetch('https://jsonplaceholder.typicode.com/posts', options2)
// 	.then(response => {
// 		if (!response.ok) {
// 			throw new Error(response.status);
// 		}
// 		return response.json();
// 	})
// 	.then(post => console.log(post))
// 	.catch(error => console.log(error));

// // Update

// const postToUpdate = {
// 	id: 1,
// 	body: 'CRUD is really awesome!',
// };

// const options3 = {
// 	method: 'PATCH',
// 	body: JSON.stringify(postToUpdate),
// 	headers: {
// 		'Content-Type': 'application/json; charset=UTF-8',
// 	},
// };

// fetch(`https://jsonplaceholder.typicode.com/posts/${postToUpdate.id}`, options3)
// 	.then(response => {
// 		if (!response.ok) {
// 			throw new Error(response.status);
// 		}
// 		return response.json();
// 	})
// 	.then(post => console.log(post))
// 	.catch(error => console.log('ERROR:', error));

// //Delete

// const postIdToDelete = 1;

// fetch(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`, {
// 	method: 'DELETE',
// })
// 	.then(response => {
// 		if (!response.ok) {
// 			throw new Error(response.status);
// 		}
// 		return response.json();
// 	})
// 	.then(deletedPost => console.log(deletedPost))
// 	.catch(error => console.log('Error:', error));

// // Axios

import axios from 'axios';

// axios.defaults.baseURL = '<https://jsonplaceholder.typicode.com>';

// const myApiKey = 'secret-api-key-for-every-request';
// axios.defaults.headers.common['api'] = myApiKey;

// axios.get('/users').then().catch();

// axios.get('/posts').then().catch();

// axios.get('/images').then().catch();

// axios
// 	.get('<https://jsonplaceholder.typicode.com/users>', {
// 		params: {
// 			_limit: 7,
// 			_sort: 'name',
// 		},
// 	})
// 	.then(response => {
// 		console.log(response.data);
// 		console.log(response.status);
// 		console.log(response.statusText);
// 		console.log(response.headers);
// 		console.log(response.config);
// 	})
// 	.catch(error => {
// 		console.log(error);
// 	});

// const foo = async () => {
// 	console.log('Before await');

// 	const promiseValue = await new Promise(resolve => {
// 		setTimeout(() => resolve(5), 2000);
// 	});

// 	console.log('After await', promiseValue);
// };

// foo();

// const fetchUsers = async () => {
// 	const response = await axios.get(
// 		'<https://jsonplaceholder.typicode.com/users>'
// 	);
// 	return response.data;
// };

// const doStuff = async () => {
// 	try {
// 		const users = await fetchUsers();
// 		console.log(users);
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

// doStuff();

// // fetchUsers().then(users => console.log(users));

// const fetchPosts = async () => {
// 	const response = await axios.get(
// 		'<https://jsonplaceholder.typicode.com/posts>'
// 	);
// 	console.log('Posts: ', response.data);
// };

const fetchPostsBtn = document.querySelector('.btn');
const postList = document.querySelector('.posts');

// Controls the group number
let page = 1;
// Controls the number of items in the group
let perPage = 10;

fetchPostsBtn.addEventListener('click', async () => {
	try {
		const posts = await fetchPosts();
		renderPosts(posts);
		// Increase the group number
		page += 1;

		// Replace button text after first request
		if (page > 1) {
			fetchPostsBtn.textContent = 'Fetch more posts';
		}
	} catch (error) {
		console.log(error);
	}
});

async function fetchPosts() {
	const params = new URLSearchParams({
		_limit: perPage,
		_page: page,
	});

	const response = await axios.get(
		`https://jsonplaceholder.typicode.com/posts?${params}`
	);
	return response.data;
}

function renderPosts(posts) {
	const markup = posts
		.map(({ id, title, body, userId }) => {
			return `<li>
          <h2 class="post-title">${title.slice(0, 30)}</h2>
          <p><b>Post id</b>: ${id}</p>
          <p><b>Author id</b>: ${userId}</p>
          <p class="post-body">${body}</p>
        </li>`;
		})
		.join('');
	postList.insertAdjacentHTML('beforeend', markup);
}

// Контролює кількість елементів в групі
let limit = 30;
// Кількість груп в колекції
const totalPages = Math.ceil(100 / limit);

if (page > totalPages) {
	return iziToast.error({
		position: 'topRight',
		message: "We're sorry, there are no more posts to load",
	});
}
