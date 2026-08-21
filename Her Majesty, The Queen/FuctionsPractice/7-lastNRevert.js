//All practice exercises come from https://www.100jsfunctions.com/

//7.lastNRevert

//Write a function named lastNRevert that receives 2 parameters:
//a string named text
//a number - n

//and returns the last n characters of text but in reverse order.

//Example 1

//Input
//text = "T-shirts"
//n = 4

//Output
//"stri"

//Explanation
//Last 4 characters are irts and their reversed order is stri.

function lastNRevert(text, n) {
    return text.slice(-n).split('').reverse().join('');
}

export { lastNRevert };

console.log(lastNRevert("T-shirts", 4)); // Expected: "stri"