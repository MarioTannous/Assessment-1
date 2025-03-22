function firstNonRepeatingChar(str: string): string | null {

    if (!str || str.length === 0) {
      return null;
    }
  
    const frequency: { [key: string]: number } = {};
    
    for (let i = 0; i < str.length; i++) {
      frequency[str[i]] = (frequency[str[i]] || 0) + 1;
    }
  
    for (let i = 0; i < str.length; i++) {
      if (frequency[str[i]] === 1) {
        return str[i];
      }
    }
  
    return null;
  }
  
  console.log(firstNonRepeatingChar("swiss")); 
  console.log(firstNonRepeatingChar("racecar")); 
  