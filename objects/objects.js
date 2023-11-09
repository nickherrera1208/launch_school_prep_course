//  ***********************************************************************Exercises*******************************************************************************

/* 1. Given the following code, how can you access the name of the person? 

      let person = {
      name:       'Bob',
      occupation: 'web developer',
      hobbies:    'painting',
    }; */

    // personal.name;

/* 2. Which of the following values are valid keys for an object? */

    /* 1, '1', 'true', 'hello world', undefined, true. All of these are valid. Any non-string values will be converted to strings. */

/* 3. Use object literal syntax (e.g., { key: value, ... } notation) to create an object that behaves as an array in a for statement. The object should contain 
      at least 3 elements. You should place your code between the braces in the let statement: */

      /* let myArray = { 
        0 : 4, 1 : 34, 2 : 42, length : 3
      };

      for (let i = 0; i < myArray.length; i += 1) {
      console.log(myArray[i]);
      } */

/* 4. Create an array from the keys of the object obj below, with all of the keys converted to uppercase. Your implementation must not mutate obj. */

      /* let obj = {
        b: 2,
        a: 1,
        c: 3,
      };

      let arrObj = Object.keys(obj);

      arrObj = arrObj.map(i => i.toUpperCase());

      console.log(arrObj); */

/* 5. Create a new object named myObj that uses myProtoObj as its prototype. */

       let myProtoObj = {
        foo: 1,
        bar: 2,
      }; 

      let myObj = Object.create(myProtoObj); 
      
      myObj.qux = 3;

/* 6. Which of the following values are primitive values? Which are objects? Which are neither? 

      "foo" primitive
      3.1415 primitive
      [ 'a', 'b', 'c' ] object
      false primitive
      foo neither
      function bar() { return "bar"; } object
      undefined primitive
      { a: 1, b: 2 } object */

/* 7. Add a qux property with value 3 to the myObj object we created in the previous exercise. Now, examine the following code snippets: */

      /* let objKeys = Object.keys(myObj);
      objKeys.forEach(function(key) {
        console.log(key);
      });

      for (let key in myObj) {
        console.log(key);
      } */

// The first only returns the keys of its own. 
// the second snippet iterates over all keys in myObj, including the inherited ones from myProtoObj. 