class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    insert(element) {
        this.values.push(element);
        this.bubble();
    }
    bubble() {
        let index = this.values.length - 1;
        const element = this.values[index];
        while (index > 0) {
            let parentIdx = Math.floor((index - 1) / 2);
            let parent = this.values[parentIdx];
            if (element <= parent) break;
            this.values[parentIdx] = element;
            this.values[index] = parent;
            index = parentIdx;
        }
    }
    extract(){
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length>0){
            this.values[0] = end; 
            this.sinkDown(); 
        }
        return max;
    }

    sinkDown(){
        let index =0; 
        let length = this.values.length; 
        let element = this.values[0]; 
        while(true){
            let leftIndex = 2*index +1; 
            let rightIndex = 2*index +2;
            let left, right; 
            let swap =null; 

            if(leftIndex < length){
                left = this.values[leftIndex]; 
                if(left > element){
                    swap = leftIndex; 
                }     
            }
            if(rightIndex < length){
                right = this.values[rightIndex]; 
                if((swap === null && right > element)||
                    (swap !== null && right > left )){
                        swap = rightIndex; 
                }
            }
            if(swap === null) break; 
            this.values[index] = this.values[swap]; 
            this.values[swap] = element; 
            index = swap;
            
        }
    }
}


let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap);
console.log(heap.extract());
console.log(heap);
console.log(heap.extract());
console.log(heap);