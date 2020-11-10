import bcrypt from 'bcryptjs';


const users = [
    {
       name: 'Admin User',
       email: 'admin@example.com',
       password: bcrypt.hashSync('123456', 10),
       isAdmin: true, 
    },
    {
        name: 'Alice Jones',
        email: 'alice@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false, 
     }, 
     {
         name: 'Bob Jones',
         email: 'bob@example.com',
         password: bcrypt.hashSync('123456', 10),
         isAdmin: false,
     }
];

export default users;