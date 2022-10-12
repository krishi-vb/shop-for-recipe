export class Ingredient {
  //   public name: string;
  //   public amount: number;
  //   constructor(name: string, amount: number) {
  //     this.name = name;
  //     this.amount = amount;
  //   }
  // instead of doing above stuff we can add accessors
  // in the constructor directly.
  constructor(public name: string, public amount: number) {}
}
