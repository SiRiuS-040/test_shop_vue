
const url = '../src/components/features/testData.json';

// пример запроса
export function getCatalogData (myData) {
    fetch(url)
        .then(res => res.json())
        .then(data => adder(data, myData))
        .catch((error) => {
            console.error(error)
        })
}

function adder(data, myData) {
    Object.assign(myData, data)

    return data
}

export function loadCatalogRandomItems(data, newData, itemCount) {
    let newArr = getRandomUniqueItems(data, itemCount)
    Object.assign(newData, newArr)
}

// пример запроса

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function getRandomUniqueItems(arr, itemCount) {
    let randomItemIndexArr = []
    let copyArr = []
    const itemsToGet = itemCount;

    Object.assign(copyArr, arr)

    for (let i = 0; i < itemsToGet; i++) {
        let copyArrLength = copyArr.length;
        let resultData = {};
        let randomIndex = randomInteger(0, copyArrLength - 1)
        Object.assign(resultData, copyArr[randomIndex])
        randomItemIndexArr.push(resultData)
        copyArr.splice(randomIndex, 1)
    }
    return randomItemIndexArr
}




