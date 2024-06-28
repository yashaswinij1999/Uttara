class Account {
  constructor(accNum, accName, bal) {
    this.accNum = accNum;
    this.accName = accName;
    this.bal = bal;
  }
  deposit = function (amt) {
    this.bal = this.bal + amt;
    return this.bal;
  };
  withDraw = function (amt) {
    this.bal = this.bal - amt;
    return this.bal;
  };
}

a1 = new Account("hdfc4512", "rama", 100);
console.log(a1.deposit(10));
console.log(a1.withDraw(50));
