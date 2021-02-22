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
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index){

  }
  shiftIndex(index){
    for(let i = index; i< this.length -1; i++){

    }
  }
}

const myArray = new MyArray();
myArray.push("Juan");
myArray.push("Adriana");
myArray.push("Manuel");

myArray.pop();

console.log(myArray);
