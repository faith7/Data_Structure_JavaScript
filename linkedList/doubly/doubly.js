class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;

    }
}

class Doubly {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return undefined;
        let pop = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = pop.prev;
            this.tail.next = null;
            pop.prev = null;
        }
        this.length--;
        return pop;
    }

    shift() {
        if (this.length === 0) return null;
        let shift = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = shift.next;
            this.head.prev = null;
            shift.next = null;
        }
        this.length--;
        return shift;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let count;
        let current;
        if (index <= this.length / 2) {
            count = 0;
            current = this.head;
            while (count != index) {
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while (count != index) {
                current = current.prev;
                count--;
            }
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
        if (index === 0) return !!this.unshift(val);
        if (index === this.length - 1) return !!this.push(val);

        let newNode = new Node(val);
        let beforeNode = this.get(newNode - 1);
        let afterNode = beforeNode.next;

        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        this.length++;

        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return false;
        if (index === 0) return !!this.shift();
        if (index === this.length - 1) return !!this.pop();

        let removeNode = this.get(index);
        let prevNode = removeNode.prev;
        let afterNode = removeNode.next;

        prevNode.next = afterNode;
        afterNode.prev = prevNode;
        removeNode.prev = null;
        removeNode.next = null;

        this.length--;
        return removeNode;
    }
}

let list = new Doubly();
console.log(list.push(1));
console.log(list.push(2));
console.log(list.push(3));
console.log(list.push("Hello"));
console.log(list.pop());
console.log(list.unshift("Hi"));
console.log(list.get(2));
console.log(list.get(7));
console.log(list.set(1, "Aloha"));
console.log(list.get(1));
console.log(list.insert(5, "hello"));
console.log(list.remove(1));  