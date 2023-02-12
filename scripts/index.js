//TODO              sign up related
// ?----------------------------------------------------------
// ! showsignup will show the pop display

function showsignup() {
  document.getElementById("signupmodal").style.display = "flex";
}
// ! it will hide the signup pop
function hidesignupPOP() {
  document.getElementById("signupmodal").style.display = "none";
}

//TODO              sign in related
// ?----------------------------------------------------------
// ! showsigin will show the pop display

function showsignin() {
  document.getElementById("signinmodal").style.display = "flex";
}
// ! it will hide the signin pop
function hidesigninPOP() {
  document.getElementById("signinmodal").style.display = "none";
}
// ! whem click not  a member sign up
function singinfooter() {
  hidesigninPOP();
  showsignup();
}

//TODO              Create Post related
// ?----------------------------------------------------------
// !  will show the pop up display of create post model

function showcreatepost() {
  document.getElementById("createpostmodal").style.display = "flex";
}
// ! it will hide the createposst model pop up
function hidecreatepostPOP() {
  document.getElementById("createpostmodal").style.display = "none";
}

// TODO            redirecting to  all post through javascript
function showallposts(paramValue) {
  window.location.href = `html/postslist.html`;
}
