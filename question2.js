function findMaxElement(array) {
    if (array.length === 0) {
      return null; // Return null if the array is empty
    }
  
    let max = array[0]; // Assume the first element is the maximum
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i]; // Update the max variable if a larger element is found
      }
    }
  
    return max;//5
  }
  
  // Test the function
  const input = prompt("Enter array elements");
  const array = input.split(",").map(item => parseInt(item.trim()));
  console.log(array)
  const maxNumber = findMaxElement(array);
  console.log(maxNumber);

  //1,2,3,4,5


  //for(let i=1;i<array.length(5);i++){5<5
    //if(array[i]>max){ array[1](2)>1
    //array[2]>max (3>2)
    //array[3]>max(4>3)
    //array[4]>max(5>4)
    // max=array[i] 1=array[1]
    //max = 5
    //}
 // }