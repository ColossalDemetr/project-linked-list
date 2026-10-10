import { Node, LinkedList } from "./LinkedList.js";

const list = new LinkedList();

list.prepend("22");
list.prepend("51"); // 1st Element
list.append("77");
list.append("99");
list.append("999");


// console.log(list.size());
// console.log(list.getHead());
// console.log(list.tail());
// console.log(list.at(4));
// console.log(list.at(10));
// console.log(list.pop());
// console.log(list.contains('baby'));
// console.log(list.findIndex('bite'));
// console.log(list.findIndex('babe'));
// console.log(list.insertAt(4, '20', '27'));
// console.log(list.insertAt(25, '20', '27'));
console.log(list.removeAt(3));
console.log(list.removeAt(10));
console.log(list.removeAt(-1));
console.log(list.toString());