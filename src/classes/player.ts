import { isPlayer } from "../interfaces/isPlayer";

export class Player implements isPlayer {
  // private name: string;
  // public age: number;
  // readonly country: string;

  // constructor(n: string, a: number, c: string) {
  //   this.name = n;
  //   this.age = a;
  //   this.country = c;
  // }
  // another way
  constructor(
    public name: string,
    public age: number,
    readonly country: string
  ) {}

  play() {
    console.log(`${this.name} from ${this.country} is playing!`);
  }
  getProperty(): Number {
    return this.age;
  }
}
