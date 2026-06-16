// async function myFunction() {
//     return "Hello";
// }

// function myFunction() {
//     return Promise.resolve("Hello");
// }


// Example 1
// async function greet() {
//     return "Hello Anshul";
// }

// greet().then((data) => {
//     console.log(data);
// }); 


// USing Await 
// function getData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Data Received");
//         }, 2000);
//     });
// }

// async function fetchData() {
//     console.log("Loading...");

//     let result = await getData();

//     console.log(result);
// }

// fetchData();


// Fetch API
// async function getProducts() {
//     let res = await fetch("https://dummyjson.com/products");

//     let data = await res.json();

//     console.log(data.products);
// }

// getProducts();


// Without Async/Await
// fetch("https://dummyjson.com/products")
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data.products);
//     });


// Async Arrow function 
// const getUser = async () => {
//     return "Anshul";
// };

// getUser().then((data) => {
//     console.log(data);
// }); 


// Multiple Await
// function firstTask() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("Task 1 Done"), 1000);
//     });
// }

// function secondTask() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("Task 2 Done"), 1000);
//     });
// }

// async function runTasks() {
//     let a = await firstTask();
//     console.log(a);

//     let b = await secondTask();
//     console.log(b);
// }

// runTasks();


// Error Handling
async function getData() {
    try {
        let res = await fetch("https://dummyjson.com/products");

        let data = await res.json();

        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}

getData();