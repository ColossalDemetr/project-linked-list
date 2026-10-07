import { Node, LinkedList } from "./LinkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("kitty");
list.append("elephant");
list.prepend("bark");
list.prepend("bite");


console.log(list.head);