function findMissingNumber(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array.');
    }
    if (arr.length === 0) {
        throw new Error('Array cannot be empty.');
    }
    if (!arr.every(function (num) { return typeof num === 'number'; })) {
        throw new Error('Array must contain only numbers.');
    }
    var N = arr.length + 1;
    var expectedSum = (N * (N + 1)) / 2;
    var actualSum = arr.reduce(function (acc, num) { return acc + num; }, 0);
    return expectedSum - actualSum;
}
console.log(findMissingNumber([1, 2, 3, 5, 6]));
