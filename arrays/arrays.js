//  ***********************************************************************Exercises*******************************************************************************

/* 1. in the following code, what are the final length values for array1, array2, array3, array4, and array5?

    let array1 = [1, 2, undefined, 4];

    let array2 = [1];
    array2.length = 5;

    let array3 = [];
    array3[-1] = [1];

    let array4 = [1, 2, 3, 4, 5];
    array4.length = 3;

    let array5 = [];
    array5[100] = 3;  
    
    lengths are 4, 5, 0, 3, 101*/

/* 2. Log all of the even values from myArray to the console. 

    let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

    for (let i = 0; i < myArray.length; i++){
      if (myArray[i] % 2 === 0){
        console.log(myArray[i]);
    }
    } */

/* 3. Let's make the problem a little harder. In this problem, we're again interested in even numbers, but this time the numbers are in nested arrays in a
      single outer array. */

      /*let myArray = [
        [1, 3, 6, 11],
        [4, 2, 4],
        [9, 17, 16, 0],
      ]; 

      for (let i = 0; i < myArray.length; i++){
        for (let j = 0; j < myArray[i].length; j++){
          if (myArray[i][j] % 2 === 0){
            console.log(myArray[i][j]);
          } 
        }
      } */

/* 4. Let's try another variation on the even-numbers theme. 

      We'll return to the simpler one-dimensional array. In this problem, we want to use the map function to create a new array that contains one element for each 
      element in the original array. If the element is an even value, then the corresponding element in the new array should contain the string 'even'; otherwise, 
      the element in the new array should contain 'odd'. */
    
      let myArray = [
        1, 3, 6, 11,
        4, 2, 4, 9,
        17, 16, 0,
      ];