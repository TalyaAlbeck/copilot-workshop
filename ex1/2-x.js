/**
 * Counts how many elements from array a are present in array b.
 * @param a - first array
 * @param b - second array
 * @returns the count of matching elements
 */

function countMatchingElements(a, b) {
    return a.reduce((c, d) => c + (b.includes(d) ? 1 : 0), 0);
}

function test2() {
    const arrA = [1, 2, 3, 4, 5];
    const arrB = [4, 5, 6, 7, 8];
    const result = countMatchingElements(arrA, arrB);
    console.log(result); // Output: 2

    const arrC = ['apple', 'banana', 'cherry'];
    const arrD = ['banana', 'dragonfruit', 'elderberry'];
    const result2 = countMatchingElements(arrC, arrD);
    console.log(result2); // Output: 1

    const arrE = [10, 20, 30];
    const arrF = [40, 50, 60];
    const result3 = countMatchingElements(arrE, arrF);
    console.log(result3); // Output: 0

    if (result === 2 && result2 === 1 && result3 === 0) {
        console.log("Success!");
    } else {
        console.log("Failure!");
    }
}
