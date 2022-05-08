import { GetRandomStrEnum, Mathematics, Vector2 } from '../dist/index.js';
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

console.log("getRandomInt start...");
if (Mathematics.getRandomInt(0, 10) >= 0 && Mathematics.getRandomInt(0, 10) < 10) {
    console.log('yes ~');
}
else throw new Error("cao !!!!")
console.log("getRandomInt end");

console.log("getDisorganizeArray start...");
if (Mathematics.getDisorganizeArray(['a', 'b', 'c', 'd'])) {
    console.log('yes ~');
}
else throw new Error("cao !!!!")
console.log("getDisorganizeArray end");

console.log("sameSign start...");
if (!Mathematics.sameSign(-1, 1)) {
    console.log('yes ~');
}
else throw new Error("cao !!!!")
console.log("sameSign end");

console.log("new Vector2 start...");
if (new Vector2(1, 2).x == 1) {
    console.log('yes ~');
}
else throw new Error("cao !!!!")
console.log("new Vector2 end");

console.log("Vector2.subtraction start...");
if (Vector2.subtraction(Vector2.c(1, 0), Vector2.c(1, 0)).x == 0) {
    console.log('yes ~');
}
else throw new Error("cao !!!!")
console.log("Vector2.subtraction end");

console.log("Vector2.multiplicationCross start...");
if (Vector2.multiplicationCross(Vector2.c(1, 0), Vector2.c(1, 0)) == 0) {
    console.log('yes ~');
}
else throw new Error("cao !!!!")
console.log("Vector2.multiplicationCross end");

console.log("Vector2.checkInRectangle start...");
if (Vector2.checkInRectangle(Vector2.c(-1.9, 0), Vector2.c(0, 2), Vector2.c(2, 0), Vector2.c(0, -2), Vector2.c(-2, 0))) {
    console.log('yes ~');
}
else throw new Error("cao !!!!")
console.log("Vector2.checkInRectangle end");

console.log("Vector2.rotateAroundPoint start...");
if (Vector2.rotateAroundPoint(Vector2.c(1, 1), Vector2.c(0, 0), 90).y == -1) {
    console.log('yes ~');
}
else throw new Error("cao !!!!")
console.log("Vector2.rotateAroundPoint end");

console.log("Vector2.distance start...");
if (Vector2.distance(Vector2.c(3, 4), Vector2.c(0, 0)) == 5) {
    console.log('yes ~');
}
else throw new Error("cao !!!!")
console.log("Vector2.distance end");

console.log("test end");
