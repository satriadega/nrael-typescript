export {};

class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person2 {
  firstName: string;
  lastName: string;
  middleInitial: string;
  fullName: string;
}

function greeter2(person: Person2) {
  return (
    "Hello greeter2, " +
    person.firstName +
    " " +
    person.lastName +
    " " +
    person.middleInitial +
    " " +
    person.fullName
  );
}

let user2 = new Student("Jane", "M.", "User");

console.log(greeter2(user2));
