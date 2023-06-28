function power(base, exponent) {
    if (exponent === 0) {
      return 1; // Any number raised to the power of 0 is 1
    } else if (exponent === 1) {
      return base; // Any number raised to the power of 1 is the number itself
    } else if (exponent < 0) {
      return 1 / power(base, -exponent); // Negative exponent is equivalent to 1 divided by positive exponent
    } else {
      return base * power(base, exponent - 1); // Recursive case: multiply the base by the power of (exponent - 1)
    }
  }
  
  // Test the function
  const baseNumber = prompt("Enter the number");
  const base = parseInt(baseNumber);
  const numberExponent = prompt("Enter the exponent");
  const exponent = parseInt(numberExponent)
  const result = power(base, exponent);
  console.log(result);
  

  //anything power 1
  // base 2
  // exponent -2
  // return 1/(2,-(-2))
  // base=2 exp =3
  //2 * (2,3-1)
  //2*(2,2)(4)
  //2*4=8