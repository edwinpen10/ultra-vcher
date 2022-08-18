function groupAnagrams(strs) {
    let result = {};
    for (let word of strs) {
      let cleansed = word.split('').sort().join('');
      if (result[cleansed]) {
          console.log(result[cleansed])
        result[cleansed].push(word);
      } else {
      //console.log(result[cleansed])
        result[cleansed] = [word];
      }
    }
    return Object.values(result);
  }
  
console.log(groupAnagrams(['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map']))