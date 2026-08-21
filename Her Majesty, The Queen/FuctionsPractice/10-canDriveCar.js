//All practice exercises come from https://www.100jsfunctions.com/

//10.canDriveCar

//Write a function named canDriveCar that receives 2 parameters:

//an object named user
//an object named car

//and returns a boolean indicating if the user can drive the car or not.

//Note: anybody can drive a car if it has at least 18 years old or if the car has an engine smaller than 1000cc.

//Example 1

//Input
//user = {"name":"Jon Doe","age":21}
//car = {"engineSize":1200,"name":"Mazda 3"}

//Output
//true

function canDriveCar(user, car) {
    return user.age >= 18 || car.engineSize < 1000;
}

export { canDriveCar };

console.log(canDriveCar(
    { age: 21, name: "Jon Doe" },
    { engineSize: 1200, name: "Mazda 3" }
)); // Expected: true