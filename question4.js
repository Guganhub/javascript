function findSecondSmallest(array) {
    if (array.length < 2) {
      return null; // Return null if the array has less than two elements
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] < smallest) {
        secondSmallest = smallest;
        smallest = array[i];
      } else if (array[i] < secondSmallest && array[i] !== smallest) {
        secondSmallest = array[i];
      }
    }
  
    if (secondSmallest === Infinity) {
      return null; // Return null if the second smallest element was not found
    }
  
    return secondSmallest;
  }
  
  // Test the program
  const input = prompt("Enter array elements");
  const array = input.split(",").map(item => parseInt(item.trim()));
  const secondSmallestNumber = findSecondSmallest(array);
  console.log(secondSmallestNumber);



  //[1,2,3](3)
  //array[0](1)<infinity
  //1<infinity
  //infinity=infinity
  //infinity=array[0](1)
  //smallest=1
  //array[1](2)<1
  //2<inifinity(true) && 2!==1
  //secondsmallest =2
  //array[2](3)<1
  //3<2
  // 2
  