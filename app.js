async function getFoxes() {
  //fetch data from API
  const response = await fetch("https://randomfox.ca/floof/");
  console.log("HTTP Response:", response);

  //parse response into json
  const data = await response.json();
  console.log("JSON Data:", data);

  //wrangle data (optional)
  const wrangledFoxes = data.image;

  return wrangledFoxes;
}

function displayFox(fox) {
  console.log("Fox:", fox);
  document.getElementById("fox-img").src = fox;
  //   document.getElementById("fox-img-2").src = fox;
  //   document.getElementById("fox-img-3").src = fox;
  document.getElementById("fox-img").alt = "fox image";
}

async function addFoxes() {
  // getFoxes contains our data
  const myFoxes = await getFoxes();
  console.log("My Foxes:", myFoxes);

  //give myFoxes (our data) as argument to displayFox
  displayFox(myFoxes);
}

addFoxes();
