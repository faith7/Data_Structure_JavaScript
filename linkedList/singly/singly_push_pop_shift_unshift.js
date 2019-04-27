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
    pop(){
        //if there's no head
        if(!this.head) return null; 

        let current = this.head; 
        let newTail = current;

        //assign new tail
        while(current.next){
            newTail = current;
            current = current.next; 
        }

        //update old tail to new tail
        this.tail = newTail; 
        //cut the connection between tail and popped node
        this.tail.next = null; 

        this.length--; 

        //if there's no items left to pop 
        if(this.length === 0){
            this.head =null;
            this.tail=null; 
        }

        return current;
    }
    shift(){

        if(!this.head) return null; 
        let currentHead = this.head; 
        this.head = currentHead.next; 
        this.length--; 

        if(this.length===0) {
            this.tail = null; 
        }
        return currentHead;
    }

    unshift(val){
        let newHead = new Node(val); 
        if(!this.head) {
            this.head = newHead;
            this.tail = this.head; 
        }else{
            newHead.next =this.head; 
            this.head = newHead; 
        }
        this.length++;
        return this;
    }
}

let list = new SinglyLinkedList();
console.log(list.push("hello"));
console.log(list.push("world"));
console.log(list.push("!!!"));
console.log(list.pop());
console.log(list.shift());
console.log(list.unshift("???"));