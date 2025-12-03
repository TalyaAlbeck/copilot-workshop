/**
 * Reverses the vowels in a given string.
 * iterates from both ends of the string towards the center,
 * swapping vowels when found.
 * @param s - input string
 * @returns string with vowels reversed
 */

function magic(s) {
    const a = 'aeiouAEIOU';
    const yyy = s.split('');
    let i = 0, j = s.length - 1;
    while (i < j) {
        if (!a.includes(yyy[i])) {
            i++;
            continue;
        }
        if (!a.includes(yyy[j])) {
            j--;
            continue;
        }
        [yyy[i], yyy[j]] = [yyy[j], yyy[i]];
        i++;
        j--;
    }
    return yyy.join('');
}


/**
 *  this function that takes a string and returns the string reversed.
    * @param str - input string
    * @returns reversed string
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}


function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

/**
 * function that takes a string and sums the ascii values of its characters
*/
function sumAsciiValues(str) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += str.charCodeAt(i);
    }
    return sum;
}