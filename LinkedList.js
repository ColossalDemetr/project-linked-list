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


    // Append 
    append(value) {
        const newNode = new Node(value);
        let current = this.head;

        // Base

        if (this.head === null) { 
            this.head = newNode;
            return;
        };

        // —————————————————————————

        while (current.nextNode !== null) {
            current = current.nextNode;
        };

        current.nextNode = newNode;
    };

    // Prepend
    prepend(value) {
        const newNode = new Node(value);


        newNode.nextNode = this.head;
        this.head = newNode;

    };



};

export { Node, LinkedList };