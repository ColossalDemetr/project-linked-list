class Node {
    constructor(value, nextNode) {
        this.value = value;
        this.nextNode = null;
    };
};

class LinkedList {
    constructor () {
        this.head = null;
    };
};

export { Node, LinkedList };