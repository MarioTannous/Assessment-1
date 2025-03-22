var LRUCache = /** @class */ (function () {
    function LRUCache(capacity) {
        if (typeof capacity !== 'number' || capacity <= 0) {
            throw new Error("Capacity must be a positive integer");
        }
        this.capacity = capacity;
        this.cache = new Map();
    }
    LRUCache.prototype.get = function (key) {
        if (typeof key !== 'number') {
            throw new Error("Key must be a valid number");
        }
        if (!this.cache.has(key)) {
            console.log("Key ".concat(key, " not found in cache"));
            return null;
        }
        var value = this.cache.get(key);
        if (value === undefined) {
            console.log("Value for key ".concat(key, " is undefined"));
            return null;
        }
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    };
    LRUCache.prototype.put = function (key, value) {
        if (typeof key !== 'number' || typeof value !== 'number') {
            throw new Error("Key and Value must be valid numbers");
        }
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }
        if (this.cache.size >= this.capacity) {
            var firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }
        this.cache.set(key, value);
    };
    LRUCache.prototype.size = function () {
        return this.cache.size;
    };
    return LRUCache;
}());
var cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));
cache.put(3, 3);
console.log(cache.get(2));
