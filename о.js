function sequence(start, end) {
    let result = start;
    let step = 0;
    return function () {
        result += step;
        if (result == start) {
            if (end == undefined) {
                end = 1;
            }
            step += end;
            return result;
        }
        else {
            return result;
        }
    }
}


// let generator = sequence(10);
// console.log(generator());
// console.log(generator());
// console.log(generator());

function take(gen, x) {
    let arr = [];
    for (let i = 0; i < x; i++) {
        arr.push(gen());
    }
    return arr;
}

// var gen2 = sequence(0, 2);
// console.log(take(gen2, 5));

function map(fn, array) {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        arr.push(fn(array[i]));
    }

    return arr;
}


// console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]

function fmap(fun1, fun2) {
    return function () {
        return fun1(fun2());
    }
}

let gen = sequence(1, 1);

function square(x) {
    return x * x;
}

let squareGen = fmap(square, gen);
squareGen();

// console.log(squareGen()); // 1
// console.log(squareGen()); // 4
// console.log(squareGen()); // 9
// console.log(squareGen()); // 16

var characters = [
    {'name': 'barney', 'age': 36},
    {'name': 'fred', 'age': 40}
];

function pluck(array, main) {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        for (let key in array[i]) {
            if (key == main) {
                arr.push(array[i][key])
            }
        }
    }
    return arr;
}

// console.log(pluck(characters, 'name'));

function filter(array, fun) {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        if (fun(array[i]) == true) {
            arr.push(array[i])
        }
    }
    return arr;
}

// var input = [1, 2, 3, 4, 5, 6];
// function isEven(x) { return x % 2 == 0; } // проверяет на четность
// console.log(filter(input, isEven)); // [2, 4, 6]

//
// function count() {
//
// }
//
// let a = {a: 1, b: 2};
// console.log(count(a)); // 2
// let b = function () {
// };
// console.log(count(b)); // 0
// let c = [1, 2, 3];
// console.log(count(c)); // 3
// let d = [];
// d[100] = 1;
// console.log(count(d)); // 1


// function findOdd(arr) {
//     return arr.find((item, index) => arr.filter(el => el == item).length % 2)
// }
//
//
// console.log(findOdd([10, 10, 7, 7, 7, 2, 0, 1, 5, 6, 9]));


// function Hex(number) {
//     this.number = number;
//     return this.number;
// }
//
// Hex.prototype.toString = function () {
//     return "0x" + Number(this.number).toString(16);
// }
//
// Hex.prototype.parce = function (a) {
//     this.a = a.substring(2);
//     return parseInt(this.a, 16)
// }
//
// Hex.prototype.plus = function (x) {
//     this.x = Number(x);
//     this.number += this.x;
//     return this;
// }
//
//
// let a = new Hex(10);
// let b = new Hex(5);
// console.log(a.plus(b).toString());


// function Hex(value){
//     //...
//
//     this.valueOf = function(){};
//
//     this.toString = function(){};
//
//     this.toJSON = function(){};
//
//     this.plus = function(){};
//
//     this.minus = function(){}
//
// }
//
// Hex.parse = function(string){
//     //...
// }

// let F = new Hex(15);
// console.log(F.toString());
// console.log(F.parce("0xFF"));


// function redarr(arr) {
//     arr.sort();
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == arr[i + 1]) {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
//
//     let obj = {};
//
//     arr.forEach(function (item, i) {
//         obj[i] = item;
//     });
//
//     return obj;
// }
//
//
// console.log(redarr(["BBC2", "MTV", "BBC1", "BBC1", "MTV", "BBC1"]));


// function makeLooper(str) {
//     let arr = str.split('');
//     let i = -1;
//
//     let bar = function () {
//         i++;
//         if (i == arr.length){
//             i=0;
//         }
//         return arr[i]
//     }
//
//     return bar;
// }
//
// var abc = makeLooper('abc');
// console.log(abc());
// console.log(abc());
// console.log(abc());
// console.log(abc());
// console.log(abc());
// console.log(abc());


function catalog(s, article) {
    let arr = s.split('\n');

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "") {
            arr.splice(i, 1);
        }
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].replace(/(\<(\/?[^>]+)>)/gi, ' ');
        arr[i] = arr[i].split('  ');
        arr[i].splice(0, 1);
        arr[i].splice(arr[i].length - 1, 1)
        console.log(arr[i]);
    }


    let obj = {name: "", price: Number, count: Number};

    for (let i = 0; i < arr.length; i++) {
        let j = 0;
        for (let key in obj) {
            if (!isNaN(+arr[i][j])) {
                obj[key] = +arr[i][j].;
            } else {
                obj[key] = arr[i][j];
            }
            j++;
        }
        arr[i] = obj;
        obj = {name: "", price: Number, count: Number};
    }

    console.log(arr);

    let str = '';

    arr.forEach(function (item) {
        if (item.name == article) {
            str += '' + item.name + ' > prx: $' + item.price + " qty: " + item.count;
        }
    })

    return str;

}


console.log(catalog('<prod><name>drill</name><prx>13.80</prx><qty>5</qty></prod>\n' +
    '\n' +
    '<prod><name>hammer</name><prx>10</prx><qty>50</qty></prod>\n' +
    '\n' +
    '<prod><name>screwdriver</name><prx>5</prx><qty>51</qty></prod>\n' +
    '\n' +
    '<prod><name>table saw</name><prx>1099.99</prx><qty>5</qty></prod>', "hammer"))



let mass = [];
let obj = {id:Number, };


