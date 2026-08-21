//All practice exercises come from https://www.100jsfunctions.com/

//8.getBusinessAddress
//Write a function named getBusinessAddress that receives an Object representing a business as a parameter, and returns a string representation of the it's address.

//Example 1

//Input

/*business
    =
    {… }
address: { number: 3, street: "Avenuepark", zipCode: 123500 }
name: "100 Functions ltd."
    < prototype >: Object*/

//Output
//"Avenuepark, number 3, 123500"

function getBusinessAddress(business) {
    return `${business.address.street}, number ${business.address.number}, ${business.address.zipCode}`;
}

export { getBusinessAddress };

console.log(getBusinessAddress({
    address: { number: 3, street: "Avenuepark", zipCode: 123500 },
    name: "100 Functions ltd."
})); // Expected: "Avenuepark, number 3, 123500"