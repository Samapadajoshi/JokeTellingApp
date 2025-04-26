
// https://official-joke-api.appspot.com/random_joke
const setupPara = document.getElementById("setup");
const punchlinePara = document.getElementById("punchline");

function getJoke() {
    const resPromise = fetch("https://official-joke-api.appspot.com/random_joke");

    resPromise
        .then((data) => data.json())
        .then((joke) => {
            setupPara.innerText = joke.setup;
            punchlinePara.innerText = joke.punchline;
        })
        .catch((err) => console.log(err));
}
