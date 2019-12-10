## Table of Contents

1. arrayReverse - PR: https://github.com/TravelFiend/data-structures-and-algorithms/pull/1
1. arrayShift - PR: https://github.com/TravelFiend/data-structures-and-algorithms/pull/2
1. arrayBinarySearch - PR: https://github.com/TravelFiend/data-structures-and-algorithms/pull/3
1. mockInterview - N/A


# Reverse an Array
<!-- Short summary or background information -->
First of many code challenges in career track. Completed by Mike Grace

## Challenge
<!-- Description of the challenge -->
Reverse an array without using any of Javascript's built in methods

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
For this challenge I decided to do the following:

1. set a variable to an empty array
2. set another variable to 0
3. loop backwards through the argument array
4. set the index (chosen by our set variable) of our empty array to be equal to the value of the argument array at current iteration
5. return our new array

## Solution
<!-- Embedded whiteboard image -->
~~~~
const reverseArray = arr => {
    let newArr = [];
    let newArrIndex = 0;
    for(let i = arr.length - 1; i >= 0; i--) {
        newArr[newArrIndex] = arr[i];
        newArrIndex++;
    }
    return newArr;
};
~~~~



# Shift an Array
<!-- Short summary or background information -->
Second code chalenge in career track. Completed by Mike Grace

## Challenge
<!-- Description of the challenge -->
Splice a value into the middle of an array without using any of Javascript's built in methods

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
For this challenge I went with the following approach:

1. set variable to halfway of arr.length
1. set variable to 0
1. set variable to empty array
1. loop through array up to halfway point
1. A - set 0 index of new array to arr[i]
1. B - increment 0 variable by 1 for each iteration
1. add number argument to array at halfway point
1. loop through array from halfway to arr.length
1. reapeat steps "A" and "B" except for "A", start at halway point and for "B", increment halfway variable
1. return new array

## Solution
<!-- Embedded whiteboard image -->
[logo]: ./assets/array-shift-whiteboard.jpg
![logo]
~~~~
const insertShiftArray = (arr, num) => {
    const newArr = [];
    let half = Math.ceil(arr.length / 2);
    let startIndex = 0;

    for(let i = 0; i < half; i++) {
        newArr[startIndex] = arr[i];
        startIndex++;
    }

    newArr[half] = num;

    for(let j = half; j < arr.length; j++) {
        newArr[half + 1] = arr[j];
        half++;
    }

    return newArr;
};
~~~~



# Array Binary Search
<!-- Short summary or background information -->
Third code chalenge in career track. Completed by Mike Grace

## Challenge
<!-- Description of the challenge -->
Return the index of the array’s element that is equal to the search key, or -1 if the element does not exist

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
For this challenge I decided to do the following:

1. Loop through the array
1. Check if the value at each index equals the search key
1. If so, return the index where it was found
1. If not, return -1

## Solution
<!-- Embedded whiteboard image -->
![array-binary-search](./assets/array-binary-search.jpg)
~~~~
const binarySearch = (sortedArr, searchKey) => {
    for(let i = 0; i < sortedArr.length; i++) {
        if(sortedArr[i] === searchKey) {
            return i;
        }
    }
    return -1;
};
~~~~

# Array Binary Search
<!-- Short summary or background information -->
Fourth code chalenge in career track. Completed by Mike Grace

## Challenge
<!-- Description of the challenge -->
Write a function to add up the sum of each row in a matrix of arbitrary size, and return an array with the appropriate values.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
For this challenge I decided to do the following:

1. Create an empty array
1. Loop through outer array
1. Create counter variable and set it to zero index of inner array
1. Loop through inner arrays (starting and index 1)
1. For each inner array, add each element to counter
1. Set index of outer array to new counter value
1. Return new arr

## Solution
<!-- Embedded whiteboard image -->
![mock-interview](./assets/mock-interview-whiteboard.jpg)
~~~~
const arrayCondenser = arr => {
    const newArr = [];
    for(let i = 0; i < arr.length; i++){
        let counter = arr[i][0];
        for(let j = 1; j < arr[i].length; j++) {
            counter += arr[i][j];
        }
        newArr[i] = counter;
    }
    return newArr;
};
~~~~