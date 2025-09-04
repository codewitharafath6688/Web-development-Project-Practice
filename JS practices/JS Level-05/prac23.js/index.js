// Load Json Data using API Fetch Function

load = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1") // promise to response
      .then((res) => res.json()) // promise to get json data
      .then((data) => console.log(data)); // store the json data
}

document.getElementById("btn").addEventListener('click', load);