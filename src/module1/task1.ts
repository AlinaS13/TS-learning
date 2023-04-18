// const button = document.querySelector("button");
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;

// function add(num1: number, num2: number) {
//   return num1 + num2;
// }

// button.addEventListener("click", function () {
//   console.log(add(+input1.value, +input2.value));
// });
//!_______________
// let age: number;
// age = 50;

// let UserName: string;
// UserName = "Max";

// let toggle: boolean;
// toggle = true;

// let empty: null;
// empty = null;

// let notInitialize: undefined;
// notInitialize = undefined;

// let callback = (a: number) => number;
// callback = (a) => {
//   return 100 + a;
// };
//!_______________
// let anything: any;
// anything = -20;
// anything = "Text";
// anything = {};
//!_______________

// let some: unknown;
// some = "Text";

// let str: string;

// if (typeof some === "string") {
//   str = some;
// }

// //!_______________

// let person: [string, number];
// person = ["Max", 21];

//!_______________
//Опишіть enum умову наступну: він повинен відображати статус завантаження. Завантажується (LOADING) та завантажена (READY).

// enum Status {
//   READY,
//   PENDING,
//   LOADING,
// }

// const isRady = {
//   status: Status.READY,
// };

// if (isRady.status === Status.LOADING) {
// }
// console.log("status1 : ", Status.LOADING);
// console.log("status2 : ", Status.READYY);
// console.log("status3 : ", Status.PENDING);

//!_______________
//Зробіть змінну, яка може приймати або рядок, або число.

// let union: string | number;

//!_______________
//Зробіть змінну, яка може приймати лише одне значення з двох: 'enable' або 'disable'

// let literal: "enable" | "disable";

//!_______________

// function showMessage(message: string): void {
//   console.log(message);
// }

// function calc(num1: number, num2: number): number {
//   return num1 + num2;
// }

// function customError(): never {
//   throw new Error("Error");
// }

//!_______________

type BasePage = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: {
    createAt: string;
    updateAt: string;
  };
};

const page1: BasePage = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: "2021-01-01",
    updateAt: "2021-05-01",
  },
};

const page2: BasePage = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
