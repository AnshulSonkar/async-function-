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
function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Received");
        }, 2000);
    });
}

async function fetchData() {
    console.log("Loading...");

    let result = await getData();

    console.log(result);
}

fetchData();