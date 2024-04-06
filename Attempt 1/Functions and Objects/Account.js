class Account {
  constructor(accNumber, accHolderName, bal) {
    (this.accNumber = accNumber),
      (this.accHolderName = accHolderName),
      (this.bal = bal);
  }

  deposit(amt) {
    if (this.bal < 0) {
      console.log("bal is lessthan zero");
      return;
    } else if (amt < 0) {
      console.log("amt is lessthan zero");
      return;
    } else if (this.bal > 0 && amt > 0) {
      this.bal = this.bal + amt;
      console.log(`balance after depositing amount ${amt} = ${this.bal}`);
    }
  }

  withdraw(amt) {
    if (bal < 0) {
      console.log("bal is lessthan zero");
      return;
    }
    if (amt < 0) {
      console.log("the amount is lessthan zero");
      return;
    }
    if (amt > this.bal) {
      console.log("the amount entered is greater than balance");
    }
    if (amt < this.bal && this.bal > 0 && amt > 0) {
      this.bal = this.bal - amt;
      console.log(
        `the bal after withdrawing amt ${amt} is equal to ${this.bal} `
      );
    }
  }
}

rama = new Account("159846", "rama", 50);
console.log(rama["accNumber"]);
console.log(rama["accHolderName"]);
bal = rama.deposit(10);
bal = rama.withdraw(16);

sita = new Account("96584623", "sita", 3);
sita.withdraw(2);
sita.deposit(9);
