/**
 * this is a sample function that sums up the elements of an array
 * @param arr - array of numbers 
 * @returns the sum of the elements in the array
 */
function fn(arr) {
    let r = 0;
    for (let i = 0; i < arr.length; i++) {
        r += arr[i];
    }
    return r;
}

function test1() {
    const arr = [1, 2, 3, 4, 5];
    const result = fn(arr);
    console.log(result); // Output: 15

    const arr2 = [10, 20, 30];
    const result2 = fn(arr2);
    console.log(result2); // Output: 60

    const arr3 = [];
    const result3 = fn(arr3);
    console.log(result3); // Output: 0

    if (result === 15 && result2 === 60 && result3 === 0) {
        console.log("Success!");
    } else {
        console.log("Failure!");
    }
}

