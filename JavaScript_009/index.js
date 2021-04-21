// function add(number1, number2) {
//     return number1  number2;
// }

// add(5,6;);

const numbers = function (number1, number2) {
    const numberSqrd1 = number1 ** 2;
    const numberSqrd2 = number2 ** 2;
    const numberSqrdTotal = numberSqrd1 + numberSqrd2;
    const numberSumSqrd = numberSqrdTotal ** 2;
    return numberSumSqrd;
};

console.log(numbers(13, 27));

const numbers2 = (number1, number2) => {
    const numberSqrd1 = number1 ** 2;
    const numberSqrd2 = number2 ** 2;
    const numberSqrdTotal = numberSqrd1 + numberSqrd2;
    const numberSumSqrd = numberSqrdTotal ** 2;
    return numberSumSqrd;
};

console.log(numbers2(13, 27));


