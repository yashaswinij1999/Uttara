# Controls and Functions

---

This project contains practice exercises focused on implementing various controls and functions using the MERN (MongoDB, Express.js, React.js, Node.js) stack.

## How to use this project

- Navigate to the project directory.
- In order to run this file, get **Node** installed.
- Open the project in your preferred code editor.
- Implement the functions for each practice problem as specified in the source files.
- Test your implementations by running the provided test cases.
- Repeat the process for each practice problem until all problems are solved.

Q1. [Check whether given number ‘x’ is Prime or not. isPrime(x) : bool
Eg: x=0 false, x=25 false, x=91 false, x=67 true ](#)

In order to acheive the above output, you can follow below steps:

1. **Define a Function:** Create a JavaScript function to encapsulate the logic for determining whether a number is prime or not.
2. **Handle Edge Cases:** Check for edge cases where 'x' is less than 2, as prime numbers start from 2. Return false for such cases.
3. **Loop for Divisors** Use a loop to iterate from 2 to the square root of 'x' to check for divisors. If 'x' is divisible by any number in this range, it is not prime..
4. **Return Result:** After completing the loop, return false if 'x' is divisible by any number in the range, indicating that it is not prime. Otherwise, return true.
5. **Test Cases:** Test the function with different values of 'x' to verify its correctness.

Q2.a [Write functions to print following patterns.](#)

```
     1        *
     12       **
     123      ***
     1234     ****
     12345    *****
```

In order to acheive the above output, you can follow below steps:

1. **Define a Function:** Create a JavaScript function to encapsulate the logic for generating the pattern.
2. **Loop for Lines:** Use a loop to iterate over the desired number of lines (in this case, 5).
3. **Concatenate Asterisks** Within each line iteration, concatenate the appropriate number of asterisks to form the pattern. The number of asterisks on each line corresponds to the line number.
4. **Print Line:** After completing the inner loop, print the concatenated line to the console.
5. **Repeat:** Repeat steps 3-5 for the desired number of lines.

Q2.b [Write functions to print following patterns.](#)

```12345
    12345
    12345
    12345
    12345
```

To achieve the desired output of printing numbers from 1 to 5 repeatedly on separate lines, you can follow these steps:

1. **Define a Function:** Create a JavaScript function to encapsulate the logic for generating the pattern.
2. **Loop for Lines:** Use a loop to iterate over the desired number of lines (in this case, 5).
3. **Loop for Numbers** Within each line iteration, use another loop to iterate over the numbers from 1 to 5.
4. **Concatenate Numbers:** Inside the inner loop, concatenate each number to a string variable representing the current line.
5. **Print Line:** After completing the inner loop, print the concatenated line to the console.
6. **Repeat:** Repeat steps 3-5 for the desired number of lines.

Q2c.[Write funcIons to print following patterns](#)

```
* * * * *
* * * *
* * *
* *
*
```

In order to achieve the desired output, follow the below steps:

1. **Define a Function:** Create a JavaScript function to encapsulate the logic for generating the pattern.
2. **Loop for Lines:** Use a loop to iterate over the desired number of lines (in this case, 5).
3. **Concatenate Asterisks** Within each line iteration, concatenate the appropriate number of asterisks to form the pattern. The number of asterisks on each line corresponds to the line number.
4. **Print Line:** After completing the inner loop, print the concatenated line to the console.
5. **Repeat:** Repeat steps 3-5 for the desired number of lines.

Q3.[Write a function to implement bubble sort algorithm : bubbleSort(arr) ,
Eg: arr = [9,6,4,10,12] arr=[4,6,9,10,12]](#)

In order to achieve the desired output, follow the below steps:

1. **Define a Function:** Create a JavaScript function named bubbleSort that takes an array (arr) as input.
2. **Initialize Variables:** Inside the function, initialize a variable n to store the length of the array (arr).
3. **Outer Loop for Passes:** Use a for loop to iterate over the array for each pass. The loop should run from index 0 to n - 1.
4. **Initialize Swapped Flag:** Within the outer loop, initialize a boolean variable swapped to false. This flag will be used to determine if any swaps are made during a pass.
5. **Inner Loop for Comparisons:** Use another for loop nested inside the outer loop to iterate over the array elements for comparisons. This loop should run from index 0 to n - i - 1, where i is the current pass number.
6. **Compare Adjacent Elements:** Within the inner loop, compare each element with its adjacent element. If the current element is greater than the next element, perform a swap.
7. **Swap Elements:** If a swap is performed, swap the positions of the current element and the next element using array destructuring assignment.
8. **Check for Swaps:** After completing the inner loop, check if any swaps were made during the pass. If no swaps were made (swapped remains false), break out of the outer loop as the array is already sorted.
9. **Return Sorted Array:** Outside the loops, return the sorted array (arr).

Q5. [Given “n” , return nth Fibonacci number.
Eg: n=0, 0; n=1, 1; n=10, 55; n=15, 610; n=20, 6765](#)

In order to achieve the desired output, please follow the below steps:

1. **Describe the function:** Create a JavaScript function named nFibnocci that takes an number (n) as input.
2. **Intialise Varibales:** Inside the function, initialize a variable f,s and r to store the values.
3. **Apply logic:** Add f and s to r variable `(r = f+s)`
4. **Loop for lines:** Use a loop to iterate over the desired number of lines (in this case, absed on nth value).
5. **Print value:**Print the final value to the console.
6. **swap the variables:** swap the current value to the second value, second value to the first value.

Q6. [Generate multiplication table from 1 to 10 as array of arrays using looping
constructs. O/P : [[1,2,3,4,5,6,7,8,9,10], [2,4,6,8,10,12,14,16,18,20],[10,20,30,40,50,60,70,80,90,100]]](#)

In order to acheive the desired output, please follow the below steps,

1. **Describe the function:** Create a javascript function with name tableArray.
2. **Intialise variables:** Inside a function, create an empty array to store the multiplication table..
3. **Outer Loop:** Use a loop to iterate from 1 to 10 for the multiplicand (outer loop).
4. **Intialise array inside loop:** Inside the outer loop, create an inner array to store the multiplication results for the current multiplicand.
5. **Inner Loop:** Use another loop to iterate from 1 to 10 for the multiplier (inner loop).
6. **logic:** Calculate the product of the current multiplicand and multiplier and push it to the inner array.
7. **Push** After completing the inner loop, push the inner array to the main array.
8. **Repeat** Repeat steps 3-6 for all multiplicands from 1 to 10.
9. **Return Array:** Return the resulting array of arrays representing the multiplication table.

Q7.[Generate prime numbers from 1 to 100 (Store in an array and return)](#)

1. **Describe the function** Create Javascript function with name `generatePrime.js`
2. **Intialise** Inside a function intialise a variable of an array to store all prime numbers.
3. **Loop** Use a loop to iterate from 1 to 100.
4. **Declare function** Create a function to check whether the given number is prime or not.
5. **call a function** Inside a loop, call the function `isPrime` to check whether the given number is prime or not.
6. **Push** If the result is true, push the given value into the array.
7. **Return** After completing the loop, return the array.
