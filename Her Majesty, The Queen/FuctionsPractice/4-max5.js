//All practice exercises come from https://www.100jsfunctions.com/

//4.max5
//Write a function named max5 that receives 5 numbers as parameters and returns the biggest one between them.

//Example 1

//Input
//nr1=19
//nr2=12
//nr3=2
//nr4=-31
//nr5=19.5

//Output
//19.5

/*function max5(nr1, nr2, nr3, nr4, nr5) {
    if (nr1 >= nr2 && nr1 >= nr3 && nr1 >= nr4 && nr1 >= nr5) {
        return nr1;
    }

    // same check for nr2
    // same check for nr3
    // same check for nr4
    // default to nr5
}

export { max5 };*/

// This would take too much code and would be too hard to understand ^ Do this instead:

function max5(nr1, nr2, nr3, nr4, nr5) {
    return Math.max(nr1, nr2, nr3, nr4, nr5)
}

export { max5 };

console.log(max5(
    19, 12, 2, -31, 19.5
))

