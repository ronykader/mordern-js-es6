// Create First basic object

let data = {
    name: 'Md.Tarikul Islam',
    age: 22,
    address: 'Dhaka 1216'
}

console.log(data.name);

// add a method in a Object

let dataWithMethod = {
  name: "Md.Tarikul Islam",
  age: 22,
  address: "Dhaka 1216",
  getInfo: function () {
      return 'Name: ' + this.name + ' Age: ' + this.age + ' Address: ' + this.address
  }
};

console.log(dataWithMethod.getInfo());