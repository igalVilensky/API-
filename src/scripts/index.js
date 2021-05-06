// Fetch

function fetchTextFile() {
  fetch("./plain.txt")
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      document.querySelector(".result").innerHTML = data;
    })
    .catch((err) => console.log(err));
}
function fetchJsonFile() {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let userCard = "<h2>All Users </h2>";
      data.forEach((user) => {
        let { id, name, city, age, photo } = user;
        userCard += `
          <div class='card' id=${id}>
          <div class='avatar'>${photo}</div>
        ${name}, <span>${age}</span> old, and I live in <span>${city}</span>
          </div>
          `;
      });
      document.querySelector(".result").innerHTML = userCard;
    })
    .catch((err) => console.log(err));
}
// API
//  Application Programming Interface

// https://jsonplaceholder.typicode.com/

// we will use
// https://jsonplaceholder.typicode.com/photos
function fetchApiTodos() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let userCard = "<h2> Todos API response </h2>";
      data.forEach((todos) => {
        let { userId, id, title, completed } = todos;
        userCard += `
          <div id=${userId}>
          <p> ID is ${id}</p>
          <h1>The title for this file is: "${title}"</h1>
          <p>Is this task completed? - ${completed}</p>

        
          </div>
          `;
      });
      document.querySelector(".result").innerHTML = userCard;
    })
    .catch((err) => console.log(err));
}

function fetchApiComments() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((data) => {
      let card = "<h2> Comments API response </h2>";
      data.forEach((comments) => {
        let { postId, id, name, email, body } = comments;
        card += `
        <div>
        <h2>The post id is - ${postId}</h2>
          <h1>Commented by: ${name} (User ID: ${id})</h1>
          
          
          
          <p>${body}</p>   
          <p>email: ${email}</p>     
          </div>
        
        
        `;
      });
      document.querySelector(".result").innerHTML = card;
    })
    .catch((err) => console.log(err));
}
