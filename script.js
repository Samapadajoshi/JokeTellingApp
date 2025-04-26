// https://dummyjson.com/todos

// https://dummyjson.com/recipes/1

const resPromise = fetch("https://dummyjson.com/recipes/1");

resPromise
    .then((data) => data.json())
    .then((actualData) => {
        console.log(actualData);
    })
    .catch((error) => console.log(error));

console.log("Hiii");