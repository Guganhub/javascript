function removeElementFromArray(array, element) {
    const index = array.indexOf(element); // Find the index of the element (3)
    console.log(index)

  
    if (index !== -1) {
      array.splice(index, 1); // Remove the element at the found index
    }
  
    return array;
  }
  
  // Test the program
  const input = prompt("Enter array elements");
  const array = input.split(",").map(item => parseInt(item.trim()));
  const element = prompt("Enter the number to remove");
  const elementToRemove =parseInt(element)//(3)
  const updatedArray = removeElementFromArray(array, elementToRemove);
  console.log(updatedArray);            //[1,2,3] (3)
  

  //[1,2,3, ]
  // 0 1 2 4