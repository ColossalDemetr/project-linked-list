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

    // At
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

    // Pop
    pop() {
        let oldHead = this.head;

        // Base
        if(this.size() === 0) return undefined;

        // Save head before changing
        const result = oldHead.value;
        // Change head
        this.head = this.head.nextNode;
        
        const resultText = `Popped item was '${result}'`

        return resultText;

    };


    // Contains
    contains(valueOf) {

        let current = this.head;

        if (current.value === valueOf) {return true} else {

            while(current !== null && current.value !== valueOf) {
            
                current = current.nextNode;

            };
        };

        const result = current === null ? false : true;

        return result;

    };


    // findIndex
    findIndex(valueOf) {

        let current = this.head;
        let i = 0;

        if (current.value === valueOf) return 0;

        while (valueOf !== current.value) {
            current = current.nextNode;
            i++;

            if (current === null) return -1;
        }

        return i;

    };

};

export { Node, LinkedList };