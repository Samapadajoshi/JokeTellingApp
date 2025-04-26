
function random(resolve, reject) {
    setTimeout(() => {
        resolve("Promise is resolved");
    }, 4000);
}

function random2(resolve, reject) {
    setTimeout(() => {
        resolve("Promise is resolved");
    }, 4000);
}

const p = new Promise(random);

// p.then((data) => console.log(data)).catch((error) => console.log(error));

function getDataFromBe() {
    return new Promise(random2);
}

const promise = getDataFromBe();

promise.then((data) => console.log(data)).catch((err) => console.log(err));
