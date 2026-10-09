import { Node, LinkedList } from "./LinkedList.js";

const list = new LinkedList();

list.prepend("2");
list.prepend("1"); // 1st Element
list.append("3");
list.append("4");
list.append("5");


// console.log(list.size());
// console.log(list.getHead());
// console.log(list.tail());
// console.log(list.at(4));
// console.log(list.at(10));
// console.log(list.pop());
// console.log(list.contains('baby'));
// console.log(list.findIndex('bite'));
// console.log(list.findIndex('babe'));
console.log(list.insertAt(4, '20', '27'));
console.log(list.insertAt(25, '20', '27'));
console.log(list.toString());