//aliases type

// type Employee = {
//   readonly id: number;
//   name: string;
//   retire: (date: String) => void;
// };

// let employee: Employee = {
//   id: 1,
//   name: "jay",
//   retire: (date: String) => {
//     console.log(date);
//   },
// };

// employee.retire("jay");

//union type

// function KGTOLBS(weight: number | string): number {
//   if (typeof weight === "number") {
//     return weight * 2.2;
//   } else return parseInt(weight) * 2.2;
// }

// console.log(KGTOLBS(10));
// console.log(KGTOLBS("10"));

//intersection type

// type Draggable = {
//   drag: () => void;
// };

// type Resizable = {
//   resize: () => void;
// };

// type UIWidger = Draggable & Resizable;

// let textBox: UIWidger = {
//   drag: () => {},
//   resize: () => {},
// };

//literal type

// type q = 50 | 100;
// type Metric = "cm" | "inch";

// let quan: q | Metric = "cm";
// console.log(quan);

//nullable type

// function greet(name: string | null) {
//   if (name) {
//     console.log(name.toUpperCase());
//   } else {
//     console.log("halo");
//   }
// }

// greet(null);

//optional chaining

// type Customer = {
//   birthday?: Date;
// };

// function getCustomer(id: number): Customer | null | undefined {
//   return id === 0 ? null : { birthday: new Date() };
// }

// let customer = getCustomer(0);
// console.log(customer?.birthday?.getFullYear());

//optional element access operator

// customer?.[0];

//optional call operator

// let log: any = null;
// console.log(log?.("a"));

//nullish coaelscing operator

// let speed: number | null = null;
// speed = 50;

// let ride = {
//falsy (undefined , null,"",false,0)
//nullish coalescing operator

//   speed: speed ?? 30,
// };

// console.log(ride);

//assertion

// let phone = document.getElementById("phone") as HTMLInputElement;
// let phone = <HTMLInputElement> document.getElementById("phone");

//unknown type

// function render(document: unknown) {

//     if (document instanceof Document) {

//     }

//   document.move();
//   document.fly();
// }

// never type

// function p(): never {
//   while (true) {}
// }
// p();
// console.log("jay");

// Exercises

// type User = { name: string; age: number; occupation?: string };

// let users: User[] = [
//   {
//     name: "John Smith",
//     age: 30,
//     occupation: "Software engineer",
//   },
//   {
//     name: "Kate Müller",
//     age: 28,
//   },
// ];

// let user = getUser();
// console.log(user?.address?.streetA);

// let x = foo ?? Bar();
