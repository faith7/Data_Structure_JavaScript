class priorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubble();
    }
    bubble() {
        let index = this.values.length - 1;
        const element = this.values[index];
        while (index > 0) {
            let parentIdx = Math.floor((index - 1) / 2);
            let parent = this.values[parentIdx];
            if (element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[index] = parent;
            index = parentIdx;
        }
    }
    dequeue() {
        const min = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }

    sinkDown() {
        let index = 0;
        let length = this.values.length;
        let element = this.values[0];
        while (true) {
            let leftIndex = 2 * index + 1;
            let rightIndex = 2 * index + 2;
            let left, right;
            let swap = null;

            if (leftIndex < length) {
                left = this.values[leftIndex];
                if (left.priority < element.priority) {
                    swap = leftIndex;
                }
            }
            if (rightIndex < length) {
                right = this.values[rightIndex];
                if ((swap === null && right.priority < element.priority) ||
                    (swap !== null && right.priority < left.priority)) {
                    swap = rightIndex;
                }
            }
            if (swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;

        }
    }
}

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}


let ER = new priorityQueue();
ER.enqueue("common cold", 5);
ER.enqueue("gunShot wound", 1);
ER.enqueue("high fever", 4);
ER.enqueue("broken arm", 2);
ER.enqueue("glass in foot", 3);
console.log(ER.dequeue());
console.log(ER);
console.log(ER.dequeue());
console.log(ER);
console.log(ER.dequeue());
console.log(ER);
console.log(ER.dequeue());
console.log(ER);
console.log(ER.dequeue());
console.log(ER);
console.log(ER.dequeue());
console.log(ER);