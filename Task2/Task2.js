//DOM manipulation for HTML tags
document.body.innerHTML = `<h1>Random API*</h1>
<p>* Page will refresh in each 10 seconds</p>
<div id="data"></div>

`;

let data = document.getElementById("data");

const url = "https://api.publicapis.org/random";

//Logic used is async and await
let result = async() => {
  try {
    let res = await fetch(url);
    let obj = await res.json();
//To create table element under div element id data
      data.innerHTML = `
  <div class="container">
  <table>
<thead>
<tr><th><p class="para blue">API DETAIL</p></th><th><p class="para blue">VALUE</p></th></tr>
</thead>
<tbody>
  <tr><th><p class="para blue">API:</p></th><td><p class="para blue">${obj.entries[0].API}</p></td></tr>
  <tr><th><p class="para blue">DESCRIPTION:</p></th><td><p class="para blue">${obj.entries[0].Description}</p></td></tr>
  <tr><th><p class="para blue">HTTPS:</p></th><td><p class="para blue">${obj.entries[0].HTTPS}</p></td></tr>
  <tr><th><p class="para blue">LINK:</p></th><td><p class="para blue"><a href="${obj.entries[0].Link}" target="_blank">${obj.entries[0].Link}</a></p></td></tr>
  <tr><th><p class="para blue">CATEGORY:</p></th><td><p class="para blue">${obj.entries[0].Category}</p></td></tr>
  </tbody>
  </table>
  </div>`
  } catch (err) {
    console.log(err);
  }
}


window.setInterval('refresh()', 10000); 	
{
    // Call a function every 10000 milliseconds 
    // (OR 10 seconds).

    // Refresh or reload page.
    result();
}
    function refresh() {
        window.location.reload();
    }