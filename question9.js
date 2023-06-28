function countSubstringOccurrences(string, substring) {
    const regex = new RegExp(substring, 'g');
    const matches = string.match(regex);
    return matches ? matches.length : 0;
  }
  
  // Test the function
  const string = prompt("Enter the string");
  const substring = prompt("Enter the substring");
  const count = countSubstringOccurrences(string, substring);
  console.log(count);
  


  //hello Hello hello - string

  //hellos - substring
  //
  //0