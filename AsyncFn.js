// async function myFunction() {
//     return "Hello";
// }

// function myFunction() {
//     return Promise.resolve("Hello");
// }


// Example 1
async function greet() {
    return "Hello Anshul";
}

greet().then((data) => {
    console.log(data);
});