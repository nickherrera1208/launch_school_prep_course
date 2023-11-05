//  ***********************************************************************Exercises*******************************************************************************

/* 1. Modify the age.js program you wrote in the exercises for the input/output chapter. The updated code should use a for loop to display the future ages. */

/* 2. Write a function that computes and returns the factorial of a number by using a for loop. The factorial of a positive integer n, signified by n!, is defined 
      as the product of all integers between 1 and n, inclusive. */

      /* function factorial(num)
      {
          if(num<0)
          return "Undefined";
          let fact=1;
          for(let i=num;i>1;i--)
            fact*=i;
          return fact;
      }

      console.log(factorial(5)); */

/* 3. The following code causes an infinite loop ( a loop that never stops iterating). Why? 

      let counter = 0;

      while (counter = 1) {
        console.log(counter);
        counter += 1;

        if (counter > 2) {
          break;
        }
      }    */
      
      /* The code above is stuck in an infinite loop because the while loop is assigning counter rather than checking its value. */

/* 4. Does the following code produce an error? Why or why not? What output does this code send to the console? 

      for (let i = 0; i < 5;) {
        console.log(i += 1);
      }    
      It logs 1 2 3 4 5 to the console. */