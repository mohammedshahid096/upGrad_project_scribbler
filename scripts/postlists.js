/*
TODO if we click to header it will redirect to index page and from there we can sign in and sign up
TODO can be don
*/
function showsignup() {
  alert("go to home page and signup please.....");
  window.location.href = "../";
}
function showsignin() {
  alert("go to home page and login please.....");
  window.location.href = "../";
}

// TODO --------------------pop ups function for delete confirmation  ------------------

let clickValue = "";
function yesremove() {
  console.log(clickValue);
  let x = document.getElementById(`${clickValue}`);
  x.style.display = "none";
  closepop();
}

function showdeletepop(val) {
  // console.log(typeof val);
  document.getElementById("Deletepop").style.display = "flex";
  clickValue = val;
}

function closepop() {
  // event.preventDefault();
  document.getElementById("Deletepop").style.display = "none";
}

function individualPost() {
  window.location.href = `./post.html`;
}
