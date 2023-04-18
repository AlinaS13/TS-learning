//*Interface in TS*//

//todo___Інтерфейс - це визначення кастомного типу даних, але без реалізації. У всіх мовах, які підтримують ООП, інтерфейси працюють однаково, чимось схоже на абстрактні класи, тільки в абстрактних є часткова реалізація і тільки деякі частини реалізації ми кладемо на плечі дочірніх класів, а ось в інтерфейсі взагалі відсутня реалізація, він просто описує, яка повинна бути структура.*//

//!______interface__object_____
// interface IPerson {
//   readonly name: string;
//   age?: number;
//   greet(phrase: string): void;
// }

// let user: IPerson;

// user = {
//   name: "Max",
//   age: 21,

//   greet(phrase: string) {
//     console.log(phrase, this.name);
//   },
// };

// user.greet("Hello");

//?_________type__________

// type IPerson2 {
//   readonly name: string;
//   age: number;
//   greet: (phrase: string)=> void;
// }

// let user2: IPerson2;

// user2 = {
//   name: "Max",
//   age: 21,

//   greet(phrase: string) {
//     console.log(phrase, this.name);
//   },
// };

// user2.greet("Hello");

//!______interface__class_____
// interface IPerson {
//   readonly name: string;
//   age?: number;
//   greet(phrase: string): void;
// }

// interface IPilot {
//   flyMessage(): void;
// }

// class Pilot implements IPerson, IPilot {
//   constructor(public readonly name: string, public age: number) {
//     this.checkAge();
//   }

//   private checkAge() {
//     if (this.age < 28) {
//       throw new Error("Pilotto young");
//     }
//   }
//   public greet(phrase: string): void {
//     console.log(phrase, this.name);
//   }

//   public flyMessage(): void {
//     console.log("Plane up");
//   }
// }
// abstract class Plane {
//   protected pilot?: IPilot;

//   public sitInPlane(pilot: IPilot) {
//     this.pilot = pilot;
//   }

//   public abstract startEngine(): boolean;
// }

// class Boeing extends Plane {
//   public startEngine(): boolean {
//     if (!this.pilot) {
//       throw new Error("Pilot is absent");
//     }
//     console.log("The sound of turbines");

//     this.pilot.flyMessage();

//     return true;
//   }
// }

// class Terrorist implements IPilot {
//   bluff(phrase: string): void {
//     console.log(phrase);
//   }

//   flyMessage(): void {
//     console.log(
//       "Наші вимоги 9 мільйонів, інакше ми можемо вбити всіх заручників"
//     );
//   }
// }

// const boeing = new Boeing();
// const pilot = new Terrorist();

// //Капітан вітає пасажирів на трапі
// pilot.bluff("Ми захопили цей літак!");

// // Займає місце пілота
// boeing.sitInPlane(pilot);

// // Запускаємо двигуни
// boeing.startEngine();

// const pilot = new Pilot("Max", 32);
// const boeing = new Boeing();

// pilot.greet("Hello dear pasenger");

// boeing.sitInPlane(pilot);
// boeing.startEngine();

//____________
// let user: IPerson;

// user = {
//   name: "Max",
//   age: 21,

//   greet(phrase: string) {
//     console.log(phrase, this.name);
//   },
// };

// user.greet("Hello");

//!______interface__as_a_type_function_____

// type AddFunc = (n1: number, n2: number) => number;

// //___або__
// // interface AddFunc {
// //     (n1: number, n2: number): number;
// // }

// const foo: AddFunc = (n1: number, n2: number) => {
//   return n1 + n2;
// };
