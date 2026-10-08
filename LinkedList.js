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

    // Size
    size() {

        let i = 0;
        let current = this.head;

        // Base case
        if (current === null) { return; };

        // —————————————————————————
        while (current !== null) {

            current = current.nextNode;
            i++;

        };

        return i;
    };

    // Head
    getHead() {
        const current = this.head;

        // Base
        if (this.head === null) { return undefined;};

        // —————————————————————————
        const result = current.value;

        return result;

    };

    // Tail
    tail() {
        let current = this.head;

        // Base
        if (this.head === null) { return undefined;};

        // —————————————————————————
        while(current.nextNode !== null) {
            current = current.nextNode;
        };

        const result = current.value;
        return result;

    };

    at(index){
        let current = this.head;
        let i = 0;

        if (this.size() < index) return undefined;

        while(i !== index) {
            current = current.nextNode;
            i++;
        };

        return current.value;


    };

};

export { Node, LinkedList };