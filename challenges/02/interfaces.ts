// Practicing the concept of interfaces and how they interact with objects

interface User {
    name: string;
    age: number;
    email: string;
};

const printUser = (user:User): void => {
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`Email: ${user.email}`);
};

const randomUser: User = {
    name: 'Elian',
    age: 23,
    email: 'myemail@mail.com',
};

printUser(randomUser);