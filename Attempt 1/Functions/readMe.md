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

5. **RTest Cases:** Test the function with different values of 'x' to verify its correctness.

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
