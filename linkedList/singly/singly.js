class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        //if there's no head
        if (!this.head) return null;

        let current = this.head;
        let newTail = current;

        //assign new tail
        while (current.next) {
            newTail = current;
            current = current.next;
        }

        //update old tail to new tail
        this.tail = newTail;
        //cut the connection between tail and popped node
        this.tail.next = null;

        this.length--;

        //if there's no items left to pop 
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current;
    }
    shift() {

        if (!this.head) return null;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    unshift(val) {
        let newHead = new Node(val);
        if (!this.head) {
            this.head = newHead;
            this.tail = this.head;
        } else {
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while (counter != index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, val) {
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return this.push(val);
        if (index === 0) return this.unshift(val);
        let newNode = new Node(val);
        let prev = this.get(index - 1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return false;
        if (index === this.length - 1) return this.pop();
        if (index === 0) return this.shift();
        let prev = this.get(index - 1);
        let removed = prev.next;
        prev.next = removed.next;
        this.length--;
        return removed;
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }

        return this;
    }

    print() {
        let arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
}

let list = new SinglyLinkedList();
// console.log(list.push("hello"));
// console.log(list.push("world"));
// console.log(list.push("!!!"));
// // console.log(list.pop());
// console.log(list.shift());
// console.log(list.unshift("???"));
// console.log(list.get(2));
// console.log(list.set(2, ":)"));
// console.log(list.get(2));
// console.log(list.insert(2,"two"));
// console.log(list.get(2));
console.log(list.push(1));
console.log(list.push(3));
console.log(list.push(5));
console.log(list.push(7));
console.log(list.remove(0));
console.log(list);
console.log(list.remove(0));
console.log(list);
console.log(list.reverse());
