/***************************************************************************
 *  Factorial is math operation. It is simply the product of all integers  *
 *  up until the one written. So 5! = 1 * 2 * 3 * 4 * 5                    *
 *  We will use the fact that n! = (n-1)! * n to write recursion           *
 ***************************************************************************/
const factorial = function(number)
{
  if(number === 1) // 1! = 1. Or we can write if 0 then return 1, since
    return 1;     // 0! is accepted to be 1 

  return number * factorial(number - 1); // n! = n * (n-1)!
};

console.log(factorial(5));
