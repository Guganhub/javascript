function findMaxSumSubarray(array) {
    let maxSum = -Infinity;
    let currentSum = 0;
  
    for (let i = 0; i < array.length; i++) {
      currentSum += array[i];
  
      if (currentSum > maxSum) {
        maxSum = currentSum;
      }
  
      if (currentSum < 0) {
        currentSum = 0;
      }
    }
  
    return maxSum;
  }
  
  // Test the program
  const numbers = [-2, 3, -1];
  const maxSum = findMaxSumSubarray(numbers);
  console.log(maxSum);


//-inifinity....-2,-1,0,0,1,2....inifinity



  //maxsum= -inifinity
  //currentsum =0 
  //i=0 0<8
  //currentsum=0+(-2)
  //currentsum= -2
  //if(-2>-inifinity)
  //maxsum=-2
  //currentsum (-2)<0
  //currentsum=0
  //-2
  //i=1 1<3
  //currentsum=3
  //3>-2
  //maxsum=3
  //i=2 2<3
  //currentsum=-1
  //-1>3
  //currentsum<0
  //currentsum=0
  //maxsum=3
  //i=3 3<4
  //currentsum=0+4
  //4>3
  //maxsum=4
  //
  