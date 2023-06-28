function sortArrayAscending(array) {
    return array.slice().sort(function(a, b) {
        
      return a - b;
    });
  }
  
  // Test the function
  const input = prompt("Enter array elements");
  const array = input.split(",").map(item => parseInt(item.trim()));
  const sortedNumbers = sortArrayAscending(array);
  console.log(sortedNumbers);
  


  //[1,10,2]
  //[1,10,2]
  //[1,10,2]-[1,10,2]
  //[0]
  //[10,1,2]
  //