//Forma nativa de crear un array
const array = ["Fede", "Karen", "Raul", "Rodrigo"];
array.push("Ana");

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
}

const myArray = new MyArray();
myArray.push("Juan");
myArray.push("Adriana");
myArray.push("Manuel");

myArray.get(1);

console.log(myArray);
