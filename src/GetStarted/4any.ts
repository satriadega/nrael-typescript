let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
// obj.foo();
// obj();
console.log(obj);
obj.bar = 100;
console.log(obj);
obj = "hello";
console.log(obj);
const n: number = obj;
console.log(n);
