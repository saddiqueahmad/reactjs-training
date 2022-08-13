class Animal {

	constructor(name, age){

		this.name = name;
		this.age = age;
	}

	introduce() {
     
     console.log(`Hi I am ${this.name}, I'm a ${this.age}`);
    
	}
}

class Cow extends Animal {

	constructor(name, age, lang){

		super(name, age)

		this.lang = lang;
	}
    
    voice() {

    	console.log(`name is ${this.name}, Age is ${this.age}, and Voice is ${this.lang}`);
    }

}

const cow = new Cow("Cow","2 years","MOOOOOO.....");

cow.introduce();
cow.voice();