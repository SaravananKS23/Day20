//select the html button
document.body.innerHTML = `<h1>Memes List</h1>
<div id="datas"></div>
`;

let datas = document.getElementById("datas");

const url = "https://api.imgflip.com/get_memes";


let result = async() => {
  try {
    let res = await fetch(url);
    let obj = await res.json();
    for (i=0;i<80;i++){
      datas.innerHTML += `
  <div class="container">
  <h3 class="blue"><span>${obj.data.memes[i].name}</span></h3>
  <p class="para blue"><span><img src="${obj.data.memes[i].url}" alt="image" height="170px" width="120px"/></span></p>
  <p class="para blue">Mems ID:<span>${obj.data.memes[i].id}</span></p>
  </div>`
}} catch (err) {
    console.log(err);
  }
}
result();