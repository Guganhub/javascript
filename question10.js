function findArrayIntersection(array1, array2) {
    const set1 = new Set(array1);
    const intersection = [];
  
    for (let element of array2) {
      if (set1.has(element)) {
        intersection.push(element);
        set1.delete(element);
      }
    }
  
    return intersection;
  }
  
  // Test the function
//   const array1 = [1, 2, 3, 4, 5];
//   const array2 = [4, 5, 6, 7, 8];
const input1 = prompt("Enter array elements 1");
const array1 = input1.split(",").map(item => parseInt(item.trim()));

const input2 = prompt("Enter array elements 2"); 
const array2 = input2.split(",").map(item => parseInt(item.trim()));
const intersection = findArrayIntersection(array1, array2);
console.log(intersection);


// [1,2,3,4,5] - array1
// [4,5,6,7,8] - array2
// [1,2,3,4,5] -set1
// [] -intersection
// 4 -> intersection =[4]
//[1,2,3,5] -set 1
//5 ->intersection =[4,5]
//[1,2,3] - set 1

//