const car = {
  color: 'grey',
  brand: 'Aston Martin',
  model: 'DB5',
  getDetails() { 
    return `${this.color}, ${this.model}, ${this.brand}`;
  }};
const agent = {
  name: 'James Bond',
  code: '007',
  age: 57,
  car: car, 
  getDetails() {
    console.log('Agent information: ' + this.name + ', ' + this.code + ', ' + this.age);
    console.log(this.name + "'s Car information: " + this.car.getDetails());
    console.log('Car information: ' + this.car.getDetails());
  }};
agent.getDetails();
