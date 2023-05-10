
function popFront(arr){

    for(var i = 0; i < arr.length-1; i++){
        arr[i] = arr[i + 1];
    }
    arr.pop();

    console.log(arr);
    return arr;
}   
popFront([5, 93, 22, 4]);
