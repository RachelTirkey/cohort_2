// decode, verify, generate

const jwt = require("jsonwebtoken");


const value = {
    username: "robin",
    accountNumber: 1234567890
}

// sign not generate
const token = jwt.sign(value, "secret"); // this token has been generated using this secret, and hence this token can only be verified using this secret
console.log(token);

// this is your checquebook
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJvYmluIiwiYWNjb3VudE51bWJlciI6MTIzNDU2Nzg5MCwiaWF0IjoxNzg4MzYwODY3fQ.hT_i-HkSqLuTEpvd2c3IzPyKfL-z1fX7rflVB01VKFA
