//Adding search Logic
function search() {
  const url = "https://random-words-api.vercel.app/word";
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (users) {
      getData(users);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function getData(users) {
  let userDIv = document.querySelector("#users");
  userDIv.innerHTML = "";

  //create a table element and append it to the div
  let table = document.createElement("table");
  let thead = table.insertRow();
  let thead1 = thead.insertCell(); 
  let thead2 = thead.insertCell(); 
  let thead3 = thead.insertCell(); 
  thead1.innerHTML = "Word"; 
  thead2.innerHTML = "Definition"; 
  thead3.innerHTML = "Pronunciation"; 

  //create a table header

  users.forEach(function (user) {
    //create a row for each user
    let row = table.insertRow();
    let word = row.insertCell();
    word.innerText = user.word;

    let definition = row.insertCell();
    definition.innerHTML = user.definition;

    let pronunciation = row.insertCell();
    pronunciation.innerHTML = user.pronunciation;

  });

  //Append table data to user Div who is holding id users from the html
  userDIv.appendChild(table);
}