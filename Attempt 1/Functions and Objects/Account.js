class Account {
  constructor(accNumber, accHolderName, bal) {
    (this.accNumber = accNumber),
      (this.accHolderName = accHolderName),
      (this.bal = bal);
  }

  deposit(amt) {
    this.bal = this.bal + amt;
    return this.bal;
  }

  withdraw(amt) {
    this.bal = this.bal - amt;
    return this.bal;
  }
}

rama = new Account("159846", "rama", 50);
console.log(rama["accNumber"]);
console.log(rama["accHolderName"]);
bal = rama.deposit(10);
bal = rama.withdraw(16);
console.log(bal);
