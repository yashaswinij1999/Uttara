# Functional Array

---

The Main Objective of this excercise is to get practice on implementing array methods like maps, reduce and filter.

## How to use this project

- Navigate to the project directory.
- In order to run this file, get node installed.
- Open the project in preferred Code Editor.
- Implement functions and Objects for each practice problem as specified in the source files.
- Test the implementations and repeat the process for each practice problem.

### Excercise

Q1. [Compute product of given array functional way](#)
[Eg: a = [1,2,3,4,5] O/P: 120](#)

- create javascript function with name `Product.js` takes an array as input.
- Implement reduce method for the given input array.
- Reduce method takes two paramters `current element` and `aggreate`.
- Reduce method iterates over each element and multiples the current element to the aggregate and returns their total product.

Q2.[Print Prime numbers from 1……100](#)
[O/P : 2,3,5,7…… there are 25 prime numbers](#)

- create javascript function named `generatePrime.js`
- Inside a function, intialise a empty array.
- Store numbers from 1 to 100 in the array using for loop.
- Implement a function to check the number is prime or not.
- Filter method takes a callback as parameter and apply that functions condition on each and every element in the array.
- The Filter method returns a new array which contains 25 prime numbers from 1 to 100.

Q3.[Compute total amount given array of products with name, price and quantity](#)
[Eg: let obj_arr = [{ name: "soap", price: 15, quan3ty: 3 }]](#)
[{ name: "salt", price: 20, quan3ty: 5 }](#)
[{ name: "sugar", price: 45, quan3ty: 2 }](#)

- create javascript function named `getAmount.js` takes an array as input.
- Implement reduce method on array which takes current element and sum as parameters.
- Reduce method iterates over current element and adds current elements price, multiplied by its quantity to the sum value and finally it returns totalSum value.

Q4.[WAF to reverse string Func3onal way: reverseString(str) : string](#)
[Eg: JavaScript è tpircSavaJ](#)
- Create Javascript function named `reverseString.js` takes string as input.
- Convert the string into array using `split` method.
- Iterate over the array in the reverse direction.
- Concatenate the each character of array into a string variable.
- After completion of loop, return that reversed string.
