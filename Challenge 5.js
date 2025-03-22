function deepEqual(obj1, obj2) {
    if (obj1 === obj2)
        return true;
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
        return false;
    }
    var keys1 = Object.keys(obj1);
    var keys2 = new Set(Object.keys(obj2));
    if (keys1.length !== keys2.size)
        return false;
    for (var _i = 0, keys1_1 = keys1; _i < keys1_1.length; _i++) {
        var key = keys1_1[_i];
        if (!keys2.has(key))
            return false;
        var val1 = obj1[key];
        var val2 = obj2[key];
        if (typeof val1 === 'object' && typeof val2 === 'object') {
            if (!deepEqual(val1, val2))
                return false;
        }
        else if (val1 !== val2) {
            return false;
        }
    }
    return true;
}
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }));
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } }));
