function greeter(person: string) {
  return "Hello, " + person;
}

let user = ["Jane Doe", "John Smith"];

//Solution 1: Iterate through the array and greet each person
for (const name of user) {
  console.log(greeter(name));
}

//Solution 2: Use a function that accepts an array of strings
function greetMultiplePeople(people: string[]): string[] {
  return people.map(person => greeter(person));
}

console.log(greetMultiplePeople(user));

//Solution 3: Check if the input is an array, throw an error if it is and handle a single string otherwise
function greetPerson(person: string | string[]): string | string[]{
    if (Array.isArray(person)){
        throw new Error('Input must be a string')
    } else {
        return "Hello, " + person
    }
}

console.log(greetPerson("Jane Doe"))
console.log(greetPerson(user))