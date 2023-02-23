// class Account {
//   nickname?: string;

//   constructor(
//     public readonly id: number,
//     public owner: string,
//     private _balance: number
//   ) {}

//   deposit(amount: number): void {
//     if (amount <= 0) {
//       throw new Error("INVALID AMOUNT");
//     }
//     this._balance += amount;
//   }

//   get balance(): number {
//     return this._balance;
//   }

//   set balance(value: number) {
//     if (value < 0) {
//       throw new Error("invalid value");
//     }
//     this._balance = value;
//   }
// }

// let account = new Account(1, "jay", 0);
// account.deposit(100);
// console.log(account.balance);
// account.balance = 200;
// console.log(account.balance);

//index signatures
//index signatures

// class SeatAssignment {
//index signatures property
//   [seatNumber: string]: string;
// }

// let seats = new SeatAssignment();
// seats.A1 = "jay";
// seats.A2 = "jay";

// console.log(seats);

//static members

// class Ride {
//   private static _activeRides: number = 0;

//   start() {
//     Ride._activeRides++;
//   }
//   stop() {
//     Ride._activeRides--;
//   }
//   static get activeRides() {
//     return Ride._activeRides;
//   }
// }

// let ride1 = new Ride();
// ride1.start();

// let ride2 = new Ride();
// ride2.start();
// ride2.start();

// console.log(Ride.activeRides);

//inheritance

// class Person {
//   constructor(public firstname: string, public lastname: string) {}

//   get fullName() {
//     return this.firstname + " " + this.lastname;
//   }

//   walk() {
//     console.log("walking");
//   }
// }

// class Student extends Person {
//   constructor(public studentId: number, firstname: string, lastname: string) {
//     super(firstname, lastname);
//   }
//   takeTest() {
//     console.log("firstname");
//   }
// }

// let student = new Student(1, "jay", "ranpariya");
// console.log(student.fullName);

// class Teacher extends Person {
//   override get fullName() {
//     return "pro " + super.fullName;
//   }
// }

// let teacher = new Teacher("jay", "ranpariya");

// console.log(teacher.fullName);
