export class Player {
    // private name: string;
    // public age: number;
    // readonly country: string;
    // constructor(n: string, a: number, c: string) {
    //   this.name = n;
    //   this.age = a;
    //   this.country = c;
    // }
    // another way
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing!`);
    }
    getProperty() {
        return this.age;
    }
}
