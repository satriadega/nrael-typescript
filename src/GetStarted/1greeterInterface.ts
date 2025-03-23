export {}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };

console.log(greeter(user));

// You can use TypeScript even if there are errors in your code. But in this case, TypeScript is warning that your code will likely not run as expected.
