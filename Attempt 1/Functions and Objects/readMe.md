# Functions and Objects

---

The Main Objective of this excercise is to get practice on creating Objects and Functions.

## How to use this project

- Navigate to the project directory.
- In order to run this file, get node installed.
- Open the project in preferred Code Editor.
- Implement functions and Objects for each practice problem as specified in the source files.
- Test the implementations and repeat the process for each practice problem.

### Practice problems.

Q1. [Write a Function greeting, takes two parameters name, a call back function. Calls the](#)
[call back function with name. Write two other functions “welcome”, “farewell” which take](#)
[name as parameter and console log “welcome name”, “Goodbye name” respectively.](#)
[Call the function greeting passing some name and welcome function once, farewell function](#)
[other time.](#)

1. **Describe a Function:** Create a Javascript function named `greeting.js` takes `name` and `callback` as inputs.
2. **Invoke Callback:** Inside a function, invoke the callback function with name.
3. **Create Function:** Create other two functions with name `welcome` and `farewell` which taked name as parameters.
4. **Test:** Testing the working of greeting function by passing name and callback as parameters.

Q2. [Write a JavaScript program that creates a class called Account with properties for](#)
[account number, account holder name, and balance. Include methods to deposit, withdraw.](#)
[Create multiple instances of the Bank Account class and perform operations such as deposit,](#)
[withdraw.](#)

1. **Create Class:** Create a class with name Account.
2. **Create Constructor:** Create a constructor for Account class with takes `accountNumber`,`accountHolderName`, and `balance` as parameters.
3. **Add Instance Properties:** Inside the constructor, assign the provided parameters (accountNumber, accountHolderName, balance) to the instance properties of the Account class (this.accountNumber, this.accountHolderName, this.balance).
4. **Create deposit Method:** Add a deposit method to the Account class that allows adding funds (amount) to the account's balance. Ensure that the deposit method performs input validation (e.g., only accept positive amounts).
5. **Create withdraw Method:** Implement a withdraw method in the Account class to enable withdrawing funds (amount) from the account balance. Include validation to prevent overdrawing (e.g., do not allow withdrawals that exceed the account balance).
6. **Instantiate Account Objects:** Create multiple instances (accounts) of the Account class with different account details.
7. **Perform Operations:** Use the deposit and withdraw methods on the account instances to perform banking operations such as depositing and withdrawing funds.

Q3. [Write a JavaScript program that creates a class called University with properties for](#)
[university name and departments. Include methods to add a department, remove a](#)
[department, and display all departments. Create an instance of the University class and add](#)
[and remove departments](#)

1. **Create a class:** Create a class with name `University`.
2. **Create Cinstructor:** Create a constructor body for account class which takes `name` and `departments` as inputs.
3. **Add Instance Properties:** Inside the constructor, assign the provided parameters (name, departments) to the instance properties of the University class (this.name, this.departments).
4. **Create add method:** Create a add method inside the University class that allows adding of departments to the university. ensure the add method performs validations like (checks whether dept already exists in the university).
5. **Remove Method:** Create a remove method inside the University class that allows removing of departments to the university. ensure  remove method performs validations like (checks whether dept existing in the university).
6. **Display method:** Create display method inside the university function which displays the existing departments inside the universty class.
7. **Perform Operation:** Use the add and remove methods for various instances of university class with different details.
