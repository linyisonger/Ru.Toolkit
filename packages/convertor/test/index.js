import { Convertor } from '../dist/index.js';
console.log("test start...");


console.log("usciToOibc start...");
if (Convertor.usciToOibc('91533400K312QNFQ3L') == 'K312QNFQ-3')
    console.log('yes ~');
else throw new Error("cao !!!!")
console.log("usciToOibc end");


console.log("timeFormat start...");
if (Convertor.timeFormat(new Date('2019/08/08'), 'MM-dd') == '08-08')
    console.log('yes ~');
else throw new Error("cao !!!!")
console.log("timeFormat end");

console.log("thousands start...");
if (Convertor.thousands(2000) == '2,000')
    console.log('yes ~');
else throw new Error("cao !!!!")
console.log("thousands end");


console.log("base64ToText and textToBase64 start...");
if (Convertor.base64ToText(Convertor.textToBase64('12345')) == '12345')
    console.log('yes ~');
else throw new Error("cao !!!!")
console.log("base64ToText and textToBase64 end");

console.log("base64ToJson and jsonToBase64 start...");
if (JSON.stringify(Convertor.base64ToJson(Convertor.jsonToBase64({ a: 1 }))) == JSON.stringify({ a: 1 }))
    console.log('yes ~');
else throw new Error("cao !!!!")
console.log("base64ToJson and jsonToBase64 end");


console.log("hexToRgb start...");
if (Convertor.hexToRgb("#fff") == 'rgb(255,255,255)')
    console.log('yes ~');
else throw new Error("cao !!!!")
console.log("hexToRgb end");

console.log("test end");


