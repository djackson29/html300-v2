// Create the Dog class constructor
class Dog {
  // give it expected parameters
  constructor(name, age, breed, color) {
    // set those equal to the instance
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.color = color;
    this.energyLevel = 0;
    this.barkLevel = 10;
  }

  // pat method
  pat() {
    // increase energy
    this.energyLevel++
    //decrease bark
    this.barkLevel--;
    // log out the dog's info
    console.log(`This dog's name is ${this.name}, age is ${this.age}, current energy is ${this.energyLevel} and current bark level is ${this.barkLevel}.`);
  }
}

// Create Marty
const marty = new Dog('Marty', 6, 'Mutt', 'Brown');

// Pat Marty 5 times
marty.pat();
marty.pat();
marty.pat();
marty.pat();
marty.pat();
