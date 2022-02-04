///////////////////////a//////////
const arr = [];

function primeArray(arrLength) {
    for (let i = 0; i < arrLength; i++) {
        arr.push(Math.floor(Math.random() * 101))
    };
};
primeArray(5);
console.log(arr);

///////////////////////b///////////

const str = 'У Пети было 10 яблок, 2.5 он отдал Маше, 3.5 Васе и 4 оставил себе.';
const arrStr = str.split(' ');
const rezult = [];
arrStr.map(item => {
    if (Number(item)) {
        rezult.push(+item)
    };
});
console.log(rezult);

///////////////////d///////////////////
const get = (arr, path) => {
    const keys = path.split('.');
    let obj = arr;
    console.log(keys)
    console.log(obj)
    for (let i = 0; i < keys.length; i++) {
        if (keys[i] in obj) {
            obj = obj[keys[i]]
        }
    };
    console.log(obj)
}

const exampleArr = [{
    a: {
        b: [{ c: 4 }, { c: 5 }]
    }
}, {
    a: {
        b: [{ c: 6 }, { c: 7 }]
    }
}];


const exampleObj = {
    a: '',
    b: {
        c: 5
    }
};

get(exampleArr, '0.a.b.1.c') // 5
get(exampleObj, 'b') // {c:5}

//////////////////////////e////////////////////

const filling = () => {
    const arr = [];
    const fillingArr = () => {

        while (arr.length < 100) {
            let randomNumber = Math.floor(Math.random() * 101);
            let found = false;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === randomNumber) {
                    found = true;
                    break;
                }
            }
            if (!found) { arr[arr.length] = randomNumber; }
        }

    }
    fillingArr();
};
filling();
///////////////////////c///////////////////////////////

// assdssddffffrrreeeweggggg // => 'as2ds2d2f4r3e3weg5';

const strTwo = 'assdssddffffrrreeeweggggg';

function strAAA(string) {
    const strArr = string.split('');
    const newArr = [];
    // const uniArr = [...new Set(strArr)]
    // console.log(uniArr);

    strArr.reduce(function(count, item) {
        if (count !== item) {
            newArr.push(item);
        }
        return count = item

    }, '');

    console.log(newArr.join(''))

};

strAAA(strTwo);
/////////////////////////////f/////////////////////////////