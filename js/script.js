//function getRemainder(a, b) {
//  return a % b;
//}
// Question 1. Expecting 3

const getRemainder = (a, b) => a % b;

console.log(getRemainder(21, 9));

//Question 2

const apiKey = "d9026239a5414beba58c930af1adbfed";
const apiUrl = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${apiKey}`;

const resultsContainer = document.querySelector(".results");

async function getData() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const results = data.results;

    resultsContainer.innerHTML = "";
    console.log(data);
    //console.log(data.results[0].stores[0].store.name);
    for (let i = 0; i < 8; i++) {
      resultsContainer.innerHTML += `<div class="result">Name: ${results[i].name}</div>`;
      resultsContainer.innerHTML += `<div class="result">Rating: ${results[i].rating}</div>`;
      resultsContainer.innerHTML += `<div class="result">Number of tags: ${results[i].tags.length}</div>`;
    }
  } catch (error) {
    console.log("An error occurred");
    resultsContainer.innerHTML = displayError(
      "An error occurred when calling the API"
    );
  }

  //console.log(results);
}
getData();
