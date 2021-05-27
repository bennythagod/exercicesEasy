/*
Write a function that returns true if you can partition an array into one element and the rest, such that this element is equal to the product of all other elements excluding itself.

Examples
canPartition([2, 8, 4, 1]) ➞ true
// 8 = 2 x 4 x 1

canPartition([-1, -10, 1, -2, 20]) ➞ false

canPartition([-1, -20, 5, -1, -2, 2]) ➞ true
Notes
The array may contain duplicates.
Multiple solutions can exist, any solution is sufficient to return true.
*/

function canPartition(arr) {


    for (let i = 0; i < arr.length; i++) {

        var resultValue = arr[i];
        var returnValue = 1;



        for (let x = 0; x < arr.length; x++) {
            var actualValue2 = arr[x];

            if (x != i) {
                returnValue = returnValue * actualValue2;
            }
        }


        if (resultValue == returnValue) {
            return true;
        }
    }


    return false;
}

exports.solution = canPartition;