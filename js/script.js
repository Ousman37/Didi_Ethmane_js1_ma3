//function getRemainder(a, b) {
//  return a % b;
//}

let getRemainder = (a, b) => "${a} -${b}";

//console.log();
getRemainder();

///const url = "https://rawg.io/games";

const url = "https://noroffcors.herokuapp.com/";

const resultsContainer = document.querySelector(".results");

//async function getData() {
//  // fetch !! d9026239a5414beba58c930af1adbfed
//  try {
//    const response = await fetch("d9026239a5414beba58c930af1adbfed");
//    const name = await response.json();
//    resultsContainer.innerHTML = "";
//    for (let i = 0; i < name.length; i++) {
//      console.log(name[i].text);
//      if (i === 8) {
//        break;
//      }
//      resultsContainer.innerHTML += `<div class="result">${name[i].text}</div>`;
//    }
//  } catch (error) {
//    console.log("An error occurred");
//    resultsContainer.innerHTML = displayError(
//      "An error occurred when calling the API"
//    );
//  }
//
//  //console.log(results);
//}
//getData();
//
