var x = document.getElementById("btn-save");
var y = document.getElementById("add-skill");
var z = document.getElementById('image-upload')
x.style.display = "none";
z.style.display = "none";


function edit(){
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  if (z.style.display === "none") {
    z.style.display = "block";
  }
  document.getElementById("name").contentEditable="true";
  document.getElementById("mail").contentEditable="true";
  document.getElementById("phone").contentEditable="true";
  document.getElementById("mobile").contentEditable="true";
  document.getElementById("address").contentEditable="true";
  document.getElementById("portfolio").contentEditable="true";
  document.getElementById("github").contentEditable="true";
  document.getElementById("twitter").contentEditable="true";
  document.getElementById("instagram").contentEditable="true";
  document.getElementById("facebook").contentEditable="true";
  
}  

function save(){
  if (x.style.display === "block") {
    x.style.display = "none";
  }
  if (z.style.display === "block") {
    z.style.display = "none";
  }
  document.getElementById("name").contentEditable="false";
  document.getElementById("mail").contentEditable="false";
  document.getElementById("phone").contentEditable="false";
  document.getElementById("mobile").contentEditable="false";
  document.getElementById("address").contentEditable="false";
  document.getElementById("portfolio").contentEditable="false";
  document.getElementById("github").contentEditable="false";
  document.getElementById("twitter").contentEditable="false";
  document.getElementById("instagram").contentEditable="false";
  document.getElementById("facebook").contentEditable="false";
}

