//*Class in TS*//
//!____________________________________
// class House {
//   private tenants: string[] = [];

//   constructor(public readonly type: string, protected street: string) {}
//   public showAddres(this: House): void {
//     console.log("Addres", this.street);
//   }
//   public showType(this: House): void {
//     console.log("Type", this.type);
//   }
//   public addTenant(name: string): void {
//     this.tenants.push(name);
//   }

//   public showTenants(): void {
//     console.log(this.tenants);
//   }
// }

// class StoneHouse extends House {
//   private chargeOfTheHouse: string;
//   constructor(street: string, general: string) {
//     super("stone", street);
//     this.chargeOfTheHouse = general;
//   }
//   public showAddres(): void {
//     console.log("Addres", this.street);
//   }

//   public showTenants(): void {
//     console.log("General", this.chargeOfTheHouse);

//     super.showTenants();
//   }
// }

// const stoneHouse = new StoneHouse("Stone-world", "Max");

// stoneHouse.addTenant("Roy");
// stoneHouse.addTenant("Sam");
// stoneHouse.showTenants();

// const house = new House("wood", "Midle-ear");
// house.addTenant("Max");
// house.addTenant("Bob");
// house.showTenants();

// console.log(house.type);

// house.showAddres();
// const copyHouse = { showAddres: house.showAddres, street: "New street" };

// copyHouse.showAddres();

//!_________________________
// class UseStatic {
//   private static count = 0;

//   constructor() {
//     UseStatic.count += 1;
//   }
//   public static isStaticMethod() {
//     console.log("I am static");
//   }

//   public showCount() {
//     console.log(UseStatic.count);
//   }
// }

// const obj1 = new UseStatic();
// const obj2 = new UseStatic();
// const obj3 = new UseStatic();

// obj1.showCount();
// obj2.showCount();
// obj3.showCount();

// UseStatic.isStaticMethod();

//*abstract class *//

// abstract class Plane {
//   protected pilotInCabin = false;

//   public sitInPlane() {
//     this.pilotInCabin = true;
//   }

//   public abstract startEngine(): string;
// }

// class Maize extends Plane {
//   public startEngine(): string {
//     return "Ta ta ta ";
//   }
// }

// class Boeing extends Plane {
//   public startEngine(): string {
//     return "Buuuuuuu";
//   }
// }

// const maize = new Maize();
// const boeing = new Boeing();

// maize.sitInPlane();
// boeing.sitInPlane();

// console.log(maize.startEngine());
// console.log(boeing.startEngine());

//TODO___________Practice____________________
class Key {
  //є тільки властивість signature
  private signature: number;
  //під час створення об'єкта генерує випадкове число та зберігає його у signature
  constructor() {
    this.signature = Math.random();
  }
  //метод getSignature повертає випадкове число з signature
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  //конструктор приймає ключ класу Key і зберігає його у властивість key
  constructor(private key: Key) {}
  //метод getKey повертає key
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  //властивість door – вона може бути закрита, або відкрита.
  protected door = false;

  //властивість key – об'єкт класу Key.
  private tenants: Person[] = [];

  //конструктор приймає аргумент класу Key та зберігає його у властивість key.
  constructor(protected key: Key) {}

  //метод comeIn, який додає об'єкт класу Person у властивість tenants і це спрацьовує лише, якщо door відкрита.

  comeIn(person: Person): void {
    if (!this.door) {
      throw new Error("Door is close");
    }

    this.tenants.push(person);
    console.log("Person inside");
  }
  //абстрактний метод openDoor приймає аргумент класу Key

  abstract openDoor(key: Key): boolean;
}

class MyHouse extends House {
  //створюємо метод openDoor, оскільки він приймає ключ, звіряємо збережений ключ у властивості key чи дорівнює він ключу з аргументу, якщо так, відкриваємо двері.
  openDoor(key: Key) {
    if (key.getSignature() !== this.key.getSignature()) {
      throw new Error("Key to another door");
    }
    return (this.door = true);
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);
