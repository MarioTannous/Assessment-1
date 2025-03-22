class LRUCache {
    private capacity: number;
    private cache: Map<number, number>;
  
    constructor(capacity: number) {
      if (typeof capacity !== 'number' || capacity <= 0) {
        throw new Error("Capacity must be a positive integer");
      }
      this.capacity = capacity;
      this.cache = new Map<number, number>();
    }
  
    get(key: number): number | null {
      if (typeof key !== 'number') {
        throw new Error("Key must be a valid number");
      }
  
      if (!this.cache.has(key)) {
      console.log(`Key ${key} not found in cache`);
        return null; 
      }
  
      const value = this.cache.get(key); 
      if (value === undefined) {
      console.log(`Value for key ${key} is undefined`);
        return null; 
      }
  
      this.cache.delete(key);
      this.cache.set(key, value);
  
      return value;
    }
  
    put(key: number, value: number): void {
      if (typeof key !== 'number' || typeof value !== 'number') {
        throw new Error("Key and Value must be valid numbers");
      }
      
      if (this.cache.has(key)) {
        this.cache.delete(key);
      }
  
      
      if (this.cache.size >= this.capacity) {
        const firstKey = this.cache.keys().next().value; 
        this.cache.delete(firstKey); 
      }
  
      
      this.cache.set(key, value);
    }
  
    
    size(): number {
      return this.cache.size;
    }
  }
  
  
  const cache = new LRUCache(2);
  cache.put(1, 1);
  cache.put(2, 2);
  console.log(cache.get(1));  
  cache.put(3, 3);  
  console.log(cache.get(2)); 
  