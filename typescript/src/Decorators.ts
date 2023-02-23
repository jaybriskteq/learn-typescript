// function Component(constructor: Function) {
//   console.log("component decoreter");
//   constructor.prototype.uniqueId = Date.now();
//   constructor.prototype.insertInDOM = () => {
//     console.log("INSERTING The component");
//   };
// }

// @Component
// class ProfileComponent {}

//decorator factory

// type componentoption = {
//   selector: string;
// };

// function Component(options: componentoption) {
//   return (constructor: Function) => {
//     console.log("component decoreter");
//     constructor.prototype.options = options;
//     constructor.prototype.uniqueId = Date.now();
//     constructor.prototype.insertInDOM = () => {
//       console.log("INSERTING The component");
//     };
//   };
// }

// @Component({ selector : '#my-id' })
// class ProfileComponent {}

//decorator composition

// type componentoption = {
//   selector: string;
// };

// function Component(options: componentoption) {
//   return (constructor: Function) => {
//     console.log("component decoreter");
//     constructor.prototype.options = options;
//     constructor.prototype.uniqueId = Date.now();
//     constructor.prototype.insertInDOM = () => {
//       console.log("INSERTING The component");
//     };
//   };
// }

// function Pipe(constructor: Function) {
//   console.log("Pipe decorator called");
//   constructor.prototype.pipe = true;
// }

// @Component({ selector: "#my-id" })
// @Pipe
// class ProfileComponent { }

//method decorator

// function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
//   const ori = descriptor.value as Function;
//   descriptor.value = function (...arg: any) {
//     console.log("b");
//     ori.call(this, ...arg);
//     console.log("a");
//   };
// }

// class Person {
//   @Log
//   say(message: any) {
//     console.log("Person says " + message);
//   }
// }

// let person = new Person();
// person.say(["jay", "jay2"]);

//accessor decorators

// function Capitalize(
//   target: any,
//   methodName: string,
//   descriptor: PropertyDescriptor
// ) {
//   const ori = descriptor.get;
//   descriptor.get = function () {
//     const r = ori?.call(this) ;
//     return r.toUpperCase();
//   };
// }

// class Person {
//   constructor(public fn: string, public ln: string) {}

//   @Capitalize
//   get fullName() {
//     return `${this.fn} ${this.ln}`;
//   }
// }

// let p = new Person("jay", "ranpariya");
// console.log(p.fullName);

// Property Decorators

// function MinLength(length: number) {
//   return (target: any, propertyName: string) => {
//     let value: string;
//     const descriptor: PropertyDescriptor = {
//       get() {
//         return value;
//       },

//       set(newValue: string) {
//         if (newValue.length < length)
//           throw new Error(
//             `${propertyName} should be at least ${length}  characters long.`
//           );

//         value = newValue;
//       },
//     };
//     Object.defineProperty(target, propertyName, descriptor);
//   };
// }

// class User {
//   @MinLength(4)
//   password: string;

//   constructor(password: string) {
//     this.password = password;
//   }
// }

// let u = new User("123");
// u.password = '1'
// console.log(u.password);

//parameter decorators

type wp = {
  methodName: string;
  parameterIndex: number;
};

const watchedParameters: wp[] = [];

function Watch(target: any, methodName: string, parameterIndex: number) {
  watchedParameters.push({
    methodName,
    parameterIndex,
  });
}

class Vehicle {
  move(@Watch speed: number) {}
}

console.log(watchedParameters);


