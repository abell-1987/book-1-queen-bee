//All practice exercises come from https://www.100jsfunctions.com/

//2.averageOf4Numbers
//Write a function named averageOf4Numbers that receives 4 numbers as parameters and returns the mathematical average between them.

//Example 1

//Input
//nr1=11
//nr2=9
//nr3=33
//nr4=28

//Output
//20.25

function averageOf4Numbers(nr1, nr2, nr3, nr4) {
    const sum = nr1 + nr2 + nr3 + nr4;
    return sum / 4;
}

export { averageOf4Numbers };

console.log(averageOf4Numbers(
    11, 9, 33, 28
))
