let { Mathematics } = require('../dist/index.js');
console.log("test start...");
console.log("getFactors start...");
console.log('input x = 2');
if (JSON.stringify(Mathematics.getFactors(2)) == JSON.stringify([{ a: 1, b: 2 }]))
    console.log('yes ~');
else throw new Error("cao !!!!")

console.log('input x = 4');
if (JSON.stringify(Mathematics.getFactors(4)) == JSON.stringify([{ a: 1, b: 4 }, { a: 2, b: 2 }]))
    console.log('yes ~');
else throw new Error("cao !!!!")
console.log("getFactors end");

console.log("getFactorsByApproach start...");
console.log('input x = 4');
if (JSON.stringify(Mathematics.getFactorsByApproach(4)) == JSON.stringify([{ a: 2, b: 2 }, { a: 1, b: 4 }]))
    console.log('yes ~');
else throw new Error("cao !!!!")
console.log("getFactorsByApproach end");
console.log("test end");