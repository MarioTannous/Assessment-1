function findMissingNumber(arr: number[]): number {

    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array.');
    }

    if (arr.length === 0) {
        throw new Error('Array cannot be empty.');
    }

    if (!arr.every(num => typeof num === 'number')) {
        throw new Error('Array must contain only numbers.');
    }

    const N = arr.length + 1;

    const expectedSum = (N * (N + 1)) / 2;

    const actualSum = arr.reduce((acc, num) => acc + num, 0);

    return expectedSum - actualSum;
}

console.log(findMissingNumber([1,2,3,5,6]));
