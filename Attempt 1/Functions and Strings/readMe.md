# Functions and Strings

---

This project contains practice exercises focused on implementing various functions and Strings using the MERN (MongoDB, Express.js, React.js, Node.js) stack.

## How to use this project

- Navigate to the project directory.
- In order to run this file, get Node installed.
- Open the project in your preferred code editor.
- Implement the functions for each practice problem as specified in the source files.
- Test your implementations by running the provided test cases.
- Repeat the process for each practice problem until all problems are solved.

### Practice Problems

Q1. [Reverse given Array. reverseArray(arr)
I/P : [1,3,5,2,6] O/P : [6,2,5,3,1]](#)

1. **Describe the function:** Create JavaScript function named `reverseArray.js` that takes an array as input.
2. **Intialise Variable:** Inside a function intialise a array to store values.
3. **looping:** Inside the function, a loop iterates over the input array starting from the last element and moving towards the first..
4. **Store values:** During each iteration of the loop, the current element of the input array is pushed into a new array in reverse order.
5. **Returned Value:** Once the loop completes, the function returns the new array containing the reversed elements.

Q2. [Given an array, return k largest elements in the array. kLargest(arri, k) : array](#)
[I/P: arri = [93, 17, 56, 91,98, 33, 9, 38, 55, 78, 29, 81, 60] k=3 ,
O/P: arro = [91,93,98]](#)

1. **Describe Function:** Create a JavaScript Function named `largestElement.js` which takes an array and int as parameters.
2. **Intialise Variable:** Inside the function initialise a variable to store boolean value.
3. **Outer Loop for Passess:** Use for loop to iterate over array for each pass.The loop should run from index 0 to length-1.
4. **Inner Loop for Comparisons:**Use another for loop nested inside the outer loop to iterate over the array elements for comparisons. This loop should run from index 0 to length -1.
5. **Compare Adjacent Elements:** Within the inner loop, compare each element with its adjacent element. If the current element is greater than the next element, perform a swap.
6. **Swap Elements:** If a swap is performed, swap the positions of the current element and the next element.
7. **Check for Swaps:**After completing the inner loop, check if any swaps were made during the pass. If no swaps were made (swapped remains false), break out of the outer loop as the array is already sorted.
8. **Return Sorted Array:** Outside the loops, return the sorted array (arr).

Q3. [WAF to reverse string : reverseString(str) : string](#)
[Eg: JavaScript Arrayè yarrA tpircSavaJ ](#)

1. **Describe Function:** Create a JavaScript function named `reverseString.js` which takes string as input.
2. **Initialise the variable:** Inside a function create a variable to store string value.
3. **Loop:** Inside the function, a loop iterates over the characters of the input string, starting from the last character and moving towards the first.
4. **Concatenate :** During each iteration, the current character is appended to a new string in reverse order.
5. **Return:**Once all characters have been processed, the function returns the new string with reversed characters.

Q4. [WAF to check whether given string is palindrome: checkPalindrome(str) : boolean ,](#)
[Eg: madam = true, madama = false](#)

1. **Describe Function:** Create a JavaScript function named `checkPalindrome.js` which takes string input.
2. **loop:** Using for loop, iterate over each character in a string.
3. **Apply Logic:** Inside the loop check whether first character and the last character are similar and simultaneoulsy check for next adjecent characters.
4. **Return:** If condition satisfies return boolean value.
