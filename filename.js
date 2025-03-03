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
// const original = { 
//     name: "Asad", 
//     details: { age: 22, skills: ["TypeScript", "Next.js"] } 
// };
// function deepClone(obj: any): any {
//     if (typeof obj!== 'object' || obj === null) {
//         return obj;
//     }
//     const clone: any = Array.isArray(obj)? [] : {};
//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             clone[key] = deepClone(obj[key]);
//         }
//     }
//     return clone;
// }
// const cloned = deepClone(original);
// cloned.details.age = 25;
// cloned.details.skills.push("React");
// console.log(original.details.age); // Should still be 22
// console.log(original.details.skills); // Should still be ["TypeScript", "Next.js"]
// console.log(cloned.details.age);// Should still be 25
// console.log(cloned.details.skills); // Output: ["TypeScript", "Next.js", "React"]
// interface User {
//     name?: string;
//     id?: number;
//     role?: string;
//   }
//   class UserAccount {
//     name: string;
//     id: number;
//     role: string;
//     constructor(name: string, id: number, role: string) {
//       this.name = name;
//       this.id = id;
//       this.role = role;
//     }
//   }
//   const user1: User = new UserAccount("Murphy", 1, "admin");
//   const user2: User = new UserAccount("Murphy", 1, "user");
//   function deleteUser(user: User) {
//     delete user.name;
//     delete user.id;
//     delete user.role;
//     return user;
//   }
//   function getAdminUser(user:User): User {
//     if(user.role === "admin"){
//         return user;
//     }
//     throw new Error("The user is not an admin.");
//   }
//   console.log(getAdminUser(user1)); // Output: UserAccount { name: 'Murphy', id: 1, role: 'admin' }
//   console.log(deleteUser(user2)); // Output: {}
// const jsonParserUnknown = (jsonString: string): unknown => JSON.parse(jsonString);
// const myOtherAccount = jsonParserUnknown(`{ "name": "Samuel" }`);
// console.log(myOtherAccount);  Output:{ name: 'Samuel' }
// myUserAccount.name; // Error: Property 'name' does not exist on type 'unknown'.
//type User = { name: string };
// const myUserAccount = jsonParserUnknown(`{ "name": "Samuel" }`) as User;
// console.log(myUserAccount.name); // Output: Samuel
// const neverReturns = () => {
//     // If it throws on the first line
//     throw new Error("Always throws, never returns");
//   };
//   const myValue = neverReturns();
//   console.log(myValue); // Output: Error: Always throws, never returns
//   const validateUser = (user: User) => {
//     if (user) {
//       return user.name !== "NaN";
//     }
//     return neverReturns();
// };
// // const myUser = { name: "Samuel" };
// const myUser={name: "NaN"};
// const isValid = validateUser(myUser);
// console.log(isValid); // Output: true
// type NeverIsRemoved = string | never | number;
// enum Flower {
//     Rose,
//     Rhododendron,
//     Violet,
//     Daisy,
//   }
//   const flowerLatinName = (flower: Flower) => {
//     switch (flower) {
//       case Flower.Rose:
//         return "Rosa rubiginosa";
//       case Flower.Rhododendron:
//         return "Rhododendron ferrugineum";
//       case Flower.Violet:
//         return "Viola reichenbachiana";
//       case Flower.Daisy:
//         return "Bellis perennis";
//       default:
//         const _exhaustiveCheck: never = flower;
//         return _exhaustiveCheck;
//     }
//   };
//   console.log(flowerLatinName(Flower.Rose)); // Output: Rosa rubiginosa
//   console.log(flowerLatinName(Flower.Rhododendron)); // Output: Rhododendron ferrugineum
//   console.log(flowerLatinName(Flower.Violet)); // Output: Viola reichenbachiana
//   console.log(flowerLatinName(Flower.Daisy)); // Output: Bellis perennis
//   console.log(flowerLatinName(5)); // Output: Error: Argument of type '5' is not assignable to parameter of type 'Flower'.
// type StringArray = Array<string>;
// type NumberArray = Array<number>;
// type ObjectWithNameArray = Array<{ name: string }>;
// interface Point {
//     x: number;
//     y: number;
//   }
//   function logPoint(p: Point) {
//     console.log(`${p.x}, ${p.y}`);
//   }
//   // logs "12, 26"
//   const point = { x: 12, y: 26 };
//   logPoint(point);
//   const point3 = { x: 12, y: 26, z: 89 };
// logPoint(point3); // logs "12, 26"
// const rect = { x: 33, y: 3, width: 30, height: 80 };
// logPoint(rect); // logs "33, 3"
// // const color = { hex: "#187ABF" };
// // logPoint(color); // Argument of type '{ hex: string; }' is not assignable to parameter of type 'Point'.
// class VirtualPoint {
//     x: number;
//     y: number;
//     constructor(x: number, y: number) {
//       this.x = x;
//       this.y = y;
//     }
//   }
//   const newVPoint = new VirtualPoint(13, 56);
//   logPoint(newVPoint); // logs "13, 56"
var Name = "joh";
var Age = 30;
var isUpdated = true;
// function updateProfile(name?: string, age?: number, isUpdated?: boolean) {
//     if (name) {
//         Name = name;
//     }
//     if (age) {
//         Age = age;
//     }
//     if (isUpdated !== undefined) {
//         isUpdated = isUpdated;
//     }
// }
// updateProfile("jane doe", 35, false);
// console.log(Name); // Output: jane doe
// console.log(Age); // Output: 35     
// console.log(isUpdated); // Output: false
function validate(name, age, isUpdated) {
    if (name.length < 4) {
        return false;
    }
    else if (age <= 0) {
        return false;
    }
    else if (isUpdated === undefined) {
        return false;
    }
    else {
        return true;
    }
}
console.log(validate(Name, Age, isUpdated)); // Output: true
