// function sumNumbers(a: number, b: number): number {
//     return a + b;
// }

// console.log(sumNumbers(7, 8));

// function sum(a: string, b: number): string {
//     return a + b;
// }

// console.log(sum("Hello", 8));

// interface User {
//     name: string;
//     age: number;
// }

// function greetUser(user: User): string {
//     return `Hello, ${user.name}! You are ${user.age} years old.`;
// }

// const john: User = {
//     name: "John Doe",
//     age: 30,
// };

// console.log(greetUser(john));

// enum Color {
//     Red = "Red",
//     Green = "Green",
//     Blue = "Blue"
// }

// function fun(color: Color): string {
//     return `you have selected ${color}`;
// }

// console.log(fun(Color.Green));

// function printId(id: number | string): string | number {
// 	return `Your ID is <${id}>`;
// }
//     console.log(printId(123));
//     console.log(printId("abc"));

// function reverseArray<T>(arr: T[]): T[]{
//     return arr.reverse();
// }

// const numbers = [1, 2, 3, 4, 5];
// const reversedNumbers = reverseArray(numbers);
// console.log(reversedNumbers);
// const strings = ["apple", "banana", "cherry"];
// const reversedStrings = reverseArray(strings);
// console.log(reversedStrings);
   
// function isString(val:any):boolean {
//     return typeof val === "string";
// }
// console.log(isString("hello"));
// console.log(isString(5));
// console.log(isString(true));
// console.log(isString([]));

// function isNumber(val:any):boolean {
//     return typeof val === "number";
// }   
// console.log(isNumber(5));
// console.log(isNumber("hello"));
// console.log(isNumber(true));
// console.log(isNumber([]));

// function getPerson(name:string,age:number): [string, number] {
//     return [name, age]; 
// }

// const person = getPerson("John Doe", 30);

// console.log(person); 


// interface User {
//     name: string;
//     age: number;
// }
// type ReadonlyUser = {
//     readonly [K in keyof User]: User[K];
// };

// const john: ReadonlyUser = {
//     name: "John Doe",
//     age: 30,
// };

// john.name = "Jane Doe"; // Error: Cannot assign to 'name' because it is a read-only property.

// class Animal{
//     makeSound(): void {
//         console.log("Animal makes a sound");
//     }
// }

// class Dog extends Animal{
//     makeSound(): void {
//         console.log("Dog barks");
//     }
// }

// const dog = new Dog();
// dog.makeSound(); // Output: Dog barks
// const animal = new Animal();
// animal.makeSound(); // Output: Animal makes a sound

// function checktType(val:any):string {
//     if(typeof val === "string"){
//         return "string";
//     } else {
//         return "otherType";
//     }
// }

// console.log(checktType("hello")); // Output: string

// console.log(checktType(5)); // Output: otherType

// function getFirstElement<T>(arr: T[]): T{
//     return arr[0];
// }

// const numbers = [1, 2, 3, 4, 5];
// const firstNumber = getFirstElement(numbers);

// console.log(firstNumber); // Output: 1

// const strings = ["apple", "banana", "cherry"];

// const firstString = getFirstElement(strings);

// console.log(firstString); // Output: apple

// function formatInput(input: string|number):string{
//     if(typeof input === "string"){
//         return `You entered a string: ${input}`;
//     } else {
//         return `You entered a number: ${input}`;
//     }
// }

// console.log(formatInput("Hello World")); // Output: You entered a string: Hello World

// console.log(formatInput(123)); // Output: You entered a number: 123

// function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
//     return {...obj1, ...obj2};
// }
// const obj1 = { name: "Asad", age: 22 };
// const obj2 = { role: "Developer", skills: ["TypeScript", "Next.js"] };
// type ReadOnlyObject<T> = {
//     readonly [K in keyof T]: T[K];
// }
// const merged: ReadOnlyObject<typeof obj1 & typeof obj2> = mergeObjects(obj1, obj2);

// console.log(merged);
// merged.name = 'John'; // Error: Cannot assign to 'name' because it is a read-only property.

// function mergeObjects<T, U extends object>(obj1: T, obj2: U): T & U {
//     const merged = {...obj1, ...obj2};
//     for (const key in obj1) {
//         if (key in obj2) {
//             console.warn(`Conflict: The key '${key}' is present in both objects.`);
//         }
//     }
//     return merged;
// }
// const obj1 = { name: "Asad", age: 22 };
// const obj2 = { name: "John", age: 33 };
// const merged = mergeObjects(obj1, obj2);
// console.log(merged);

const original = { 
    name: "Asad", 
    details: { age: 22, skills: ["TypeScript", "Next.js"] } 
};
function deepClone(obj: any): any {
    if (typeof obj!== 'object' || obj === null) {
        return obj;
    }
    const clone: any = Array.isArray(obj)? [] : {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]);
        }
    }
    return clone;
}
const cloned = deepClone(original);
cloned.details.age = 25;
cloned.details.skills.push("React");

console.log(original.details.age); // Should still be 22
console.log(original.details.skills); // Should still be ["TypeScript", "Next.js"]
console.log(cloned.details.age);// Should still be 25
console.log(cloned.details.skills); // Output: ["TypeScript", "Next.js", "React"]


