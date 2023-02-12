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
