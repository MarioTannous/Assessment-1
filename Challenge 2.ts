function countVowels(str: string): number {

    if (typeof str !== 'string' || str === null || str === undefined) {
      throw new Error("Input must be a string");
    }
  
    if (str.length ===0) {
      return 0;
    }
  
    let vowelCount = 0;
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    
    str = str.toLowerCase();  
    
    for (let i = 0; i < str.length; i++) {
      if (vowels.has(str[i])) {
        vowelCount++;
      }
    }
    
    return vowelCount;
    
  }
  
  console.log(countVowels("typescript"));
  