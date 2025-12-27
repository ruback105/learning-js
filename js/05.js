// functions
const sum = (a, b) => {
    return a + b;
}

const result = sum(2, 4)
const result2 = sum(10, 20)

const divide = (a, b) => {
    const result = a / b;
    return result;
}
const result3 = divide(60, 5)

const getDiscriminant = (a, b, c) => {
    return (b * b) - (4 * a * c)
}

const getSquares = (a,b,c) => {
    const discriminant = getDiscriminant(a,b,c);

    if(discriminant < 0) {
        return [null, null];
    }

    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    return [x1, x2];
}

const a = 3;
const b = 5;
const c = 1;

const squareResults = getSquares(a, b, c);

console.log(squareResults)

const concatWords = (word1, word2) => {
    return `${word1} ${word2}`;
}
const word1 = "hello";
const word2 = 'gej'
const sumWords = concatWords(word1, word2);
console.log(sumWords)

// const testVariable = "Anastasija";
// const textVariable2 = "Mamedbekova - Pusko";

// const concatAnastasija = () => {
//     return `${testVariable} ${textVariable2}`
// }

// console.log(concatAnastasija())

const aNumber = 2;
const bNumber = 5;
let sumResult;

console.log(sumResult)

const sumNumbers = () => {
    sumResult = aNumber + bNumber;
}

console.log(sumResult)

sumNumbers()

console.log(sumResult)
