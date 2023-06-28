function areArraysEqual(array1, array2) {
    if (array1.length !== array2.length) {
      return false; // Return false if the arrays have different lengths
    }
  
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false; // Return false if any elements differ at the same index
      }
    }
  
    return true; // Return true if all elements are equal at the same indices
  }
  
  // Test the function
//   const arr1 = [1, 2, 3, 4, 5];
//   const arr2 = [1, 2, 3, 4, 5];
//   const arr3 = [1, 2, 3, 4, 6];
const input1 = prompt("Enter array elements 1");
const array1 = input1.split(",").map(item => parseInt(item.trim()));

const input2 = prompt("Enter array elements 2");
const array2 = input2.split(",").map(item => parseInt(item.trim()));
  
console.log(areArraysEqual(array1, array2));
  