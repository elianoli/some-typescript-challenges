// Practicing the concept of interfaces and how they interact with objects
;
var printUser = function (user) {
    console.log("Name: ".concat(user.name));
    console.log("Age: ".concat(user.age));
    console.log("Email: ".concat(user.email));
};
var randomUser = {
    name: 'Elian',
    age: 23,
    email: 'myemail@mail.com',
};
printUser(randomUser);
