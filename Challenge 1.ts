function reverseString(str: string): string {

    if (typeof str !== 'string' || str === null || str === undefined) {
    throw new Error("Input must be a string");
  }

    if (str.length === 0) {
        return '';
    }

    if (str.length === 1) {
        return str;
    }

    return str.split('').reverse().join('');
}

console.log(reverseString("Hello"));
