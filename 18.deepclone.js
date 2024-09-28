const obj = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        zip: 10001
    },
    hobbies: ["reading", "gaming"],
    greet: function() {
        console.log("Hello!");
    }
};

const clonedObj = { ...obj };

obj.address.city = "Los Angeles";
obj.hobbies.push("Swimming");

console.log(obj.address.city );
console.log(clonedObj.address.city );

console.log(obj.hobbies);
console.log(clonedObj.hobbies);
