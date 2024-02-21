/*function reverse(arr) {
    let mid = (arr.length-1)/2;
    for (let index = 0; index <= mid; index++) {
        let temp = arr[index];
        arr[index] = arr[arr.length -1 -index];
        arr[arr.length - 1 - index] = temp;
    }
    return arr;
}
*/
function reverse(arr) {
   return arr.reverse();
}
//recursion
//through stack input into stack and pop one by one
console.log(reverse([1, 2, 3, 4,5, 6, 7]));
console.log(reverse([1, 2, 3, 4,5, 6]));
console.log(reverse([1, 2, 3, 4, 5]));
console.log(reverse([1, 2, 3, 4]));
console.log(reverse([1, 2, 3]));
console.log(reverse([1, 2]));
console.log(reverse([1]));
