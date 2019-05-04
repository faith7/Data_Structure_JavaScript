class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true) {
            if (val === current.val) return undefined;
            if (val < current.val) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
    find(val){
        if(this.root===null) return undefined;
        let current= this.root;
        let found = false;
        while(current && !found){
            if(val < current.val){
                current = current.left;
            }else if(val > current.val){
                current= current.right; 
            }else{
                found =true; 
            }
        } 
        if(!found) return false; 
        return current; 
    }
    BFS(){
        let queue =[];
        let data=[]; 
        if(this.root) 
            queue.push(this.root); 
        while(queue.length){
            let shift = queue.shift(); 
            data.push(shift); 
            if(shift.left) queue.push(shift.left); 
            if(shift.right) queue.push(shift.right); 
        }
        return data;
    }

    DFSPreorder(){
        let data=[]; 
        let current = this.root;
        function traverse(node){
            data.push(node.val);
            if(node.left) traverse(node.left);  
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }

    DFSPostorder(){
        let data=[]; 
        let current = this.root;
        function traverse(node){
            if(node.left) traverse(node.left);  
            if(node.right) traverse(node.right);
            data.push(node.val);
        }
        traverse(current);
        return data;
    }

    DFSInorder(){
        let data=[]; 
        let current = this.root;
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.val);  
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }
}

let tree = new Tree();
console.log(tree.insert(10));
console.log(tree.insert(2));
console.log(tree.insert(7));
console.log(tree.insert(20));
console.log(tree.insert(1));
console.log(tree.find(10));
console.log(tree.find(7));
console.log(tree.find(0));
console.log(tree.BFS());
console.log(tree.DFSPreorder());
console.log(tree.DFSPostorder());
console.log(tree.DFSInorder());