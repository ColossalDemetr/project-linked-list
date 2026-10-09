import { Node, LinkedList } from "./LinkedList.js";

const list = new LinkedList();

list.prepend("bark");
// list.prepend("bite"); // 1st Element
list.append("dog");
list.append("kitty");
list.append("elephant");
list.append("bite");


// console.log(list.size());
// console.log(list.getHead());
// console.log(list.tail());
console.log(list.at(4));
// console.log(list.at(10));
// console.log(list.pop());
// console.log(list.contains('baby'));
console.log(list.findIndex('bite'));
console.log(list.findIndex('babe'));