/*
Create a function that takes a string and returns dashes on the left and right side of every vowel (a e i o u).

Examples

dashed("Carpe Diem") ➞ "C-a-rp-e- D-i--e-m"

dashed("Fight for your right to party!") ➞ "F-i-ght f-o-r y-o--u-r r-i-ght t-o- p-a-rty!"
Notes
A string can contain uppercase and lowercase vowels.
*/

function dashed(str) {
    var returnStr = "";

    for (let i = 0; i < str.length; i++) {
        var actualLetter = str[i];

        if (actualLetter == "a" || actualLetter == "e" || actualLetter == "i" || actualLetter == "o" || actualLetter == "u" ||
            actualLetter == "A" || actualLetter == "E" || actualLetter == "I" || actualLetter == "O" || actualLetter == "U")
            returnStr = returnStr + "-" + actualLetter + "-";
        else
            returnStr = returnStr + actualLetter;
    }

    return returnStr;
}

exports.solution = dashed;