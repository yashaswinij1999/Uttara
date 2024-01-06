let markMass = 78;
let johnMass = 92;
let markHeight = 1.69;
let johnHeight = 1.95;

johnBMI = johnMass / johnHeight ** 2;
console.log(johnBMI);

markBMI = markMass / markHeight ** 2;
console.log(markBMI);

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
