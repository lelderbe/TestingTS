interface Runnable {}

class Animal {
  public name;

  constructor(name: string) {
    this.name = name;
  }
}

class Cat extends Animal implements Runnable {

}

const cat = new Cat('Tom');

console.log(cat);

console.log(cat instanceof Animal);
console.log(cat instanceof Array);

// console.log(cat instanceof Runnable);
