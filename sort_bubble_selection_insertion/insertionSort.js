function insertion(arr){

    let swap = (i, j, arr) => ([arr[i],arr[j]]=[arr[j], arr[i]]);
    for(let i=0; i<arr.length; i++){
        for(let j=arr.length-1; j>=i; j--){
            if(arr[i] > arr[j]){
                swap(i, j, arr);
                while(arr[i]>arr[i+1]){
                    swap(arr[i], arr[i+1]);
                } 

            }
        }
    }
    return arr; 
}
console.log(insertion([1, 2, 3, 4, 6, 5]));
console.log(insertion([1, 5, 3, 7, 9]));
console.log(insertion([9, 6, 3, 2, 15]));
console.log(insertion([10, 9, 8, 7, 15, 6])); 