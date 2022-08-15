//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }

  introduce() {
     
     console.log(`Hi I am ${this.name}, I'm a ${this.type}, of color ${this.color}`);
}

}

class Mamal extends Animal {
  constructor(name, type, color) {
    super(name, type, color);
  }

  sound() {
  	
  		console.log(`Moooooooooo I'm ${this.name}, a ${this.type}, of color ${this.color}`);
  	} 
}

class Parrot extends Animal {
  constructor(name, type, color) {
    super(name, type, color);
  }

  sound() {
    
      console.log(`Chiiii Chiiiii I'm ${this.name}, a ${this.type}, of color ${this.color}`);
    } 
}

const mamal = new Mamal("Cow","healthy","black");
const parrot = new Parrot("Parrot","bird","green");

mamal.introduce();
mamal.sound();
parrot.introduce();
parrot.sound();

//Evaluate these:
//#1
[2] === [2] => false
{} === {} => false

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; // 4
const object2 = object1; // 4
const object3 = object2; // 4
const object4 = { a: 5}; // 4
object1.a = 4; // 4
