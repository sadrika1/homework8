// tsk 1
const arrMult = (arr) => {
    let sum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        sum = sum * arr[i];
    }
    return sum;
};

const arrSum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
};

const getResult = (arr, callback) => callback(arr);

console.log(getResult([3, 4, 1, 9], arrMult));
console.log(getResult([3, 4, 1, 9], arrSum));

// task 2
const users = [
	{name: 'Jon', age: 22},
	{name: 'Richard', age: 18},
	{name: 'Anton', age: 32},
	{name: 'Lida', age: 23},
	{name: 'Bob', age: 44}
];

const sortAge = (a, b) => a.age - b.age;

const getSortedArrayObj = (obj) => obj.sort(sortAge);

console.log(getSortedArrayObj(users));

// task 3

const arrTestRevers = [1, '4', 9, 'two'];
const arrTestNumber = [1, '4', false, 9, 'two'];

const reversArr = (arr) => arr.reverse();

const toNumberArr = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != Number) arr[i] = Number(arr[i]);
        if (isNaN(arr[i])) arr.splice(i, 1);
    }
    return arr;
};

console.log(each(arrTestRevers, reversArr));
console.log(each(arrTestNumber, toNumberArr));

// task 4

const timer = () => {
    let date = new Date();
    console.log(date);
    const interval = setInterval(() => {
        date = Date();
        console.log(date);
    }, 3 * 1000);

    setTimeout(() => {
        clearInterval(interval);
        console.log('30 секунд прошло');
    }, 30 * 1000)
};

timer();

// task 5

function calling() {
    console.log('Звоню!')
};

function beeps(call) {
    setTimeout(() => {
        console.log('Идут гудки...')
        call();
    }, 1000);
};

function talk() {
    console.log('Разговор')
};

setTimeout(() => {
    calling();
    beeps(talk);
}, 10 * 1000);