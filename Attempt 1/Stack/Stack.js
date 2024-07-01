class Stack {
  constructor(arr) {
    this.arr = arr;
  }

  push = function (item) {
    this.arr.push(item);
  };

  printElements = function () {
    for (let num of this.arr) {
      console.log(num);
    }
  };

  pop = function () {
    if (this.arr.length > 0) {
      return this.arr.pop();
    }
    return "array is empty";
  };

  peek() {
    if (this.arr.length >= 0) {
      console.log(this.arr[this.arr.length - 1]);
    }
    return "array is empty";
  }
}
stack = new Stack([]);
stack.push(1);
stack.push(11);
stack.push(28);
console.log(stack.pop());
console.log(stack.arr.length);
stack.peek();
