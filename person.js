// Your code here

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  //instance method: introduces the person
  introduce() {
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`);
  }
  //static method: takes array of Person instances
  static introducePeople(peopleArr) {
    if (!Array.isArray(peopleArr)) {
      console.log(`introducePeople only takes an array as an argument.`);
    } else if (peopleArr.some(person => !(person instanceof Person))) { //returns true only if one of the person elements is not an instance of Person
      console.log(`All items in array must be Person class instances.`);
    } else { //otherwise, no errors and call introduce on each person instance in peopleArr (make sure to invoke the instance method with ()!)
      peopleArr.forEach(person => person.introduce());
    }
  }
}



/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
