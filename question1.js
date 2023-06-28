//factorial of integer
// function factorial(n) { //factorial(5)
//     if (n === 0 || n === 1) {
//       return 1;
//     } else {factorial(n - 1)
//       return n * ;// 5 * factorial(5-1)
//                                 //5*factorial(4)
//                                 //n*facctorial(0)
//     }
//   }
  
//   // Test the function
//   const number = prompt("Enter the number");//5
//   const result = factorial(number);//factorial(5)
//   console.log(result);



  //input = 5
  // 5*4*3*2*1 = 120*1=120
  //0! = 1
  //1!=1



  const num= prompt("Enter the number");
  var result=1;
  if(num===0 || num===1){
     console.log(1);
  }
  else{
        for(var i=1;i<=num;i++){
        result=result*i
       }
        console.log(result)
    }
  