const edit = document.getElementById("editbutton");
const save = document.getElementById("savebutton");

/*
 TODO EDIT FUNCTION : when we click edit button it will convert the title , content to input area
 TODO edit button will hide and save button will be dispaly
 */
function editfunction() {
  edit.style.display = "none";
  save.style.display = "block";

  // ?title related Dom Manipulation
  let title_target = document.getElementById("title_Post");
  let x = title_target.innerText;
  title_target.innerHTML = `<input type="text" class="title_input"> `;
  document.getElementsByClassName("title_input")[0].value = x;

  // ?content related dom manipulation
  let content_target = document.getElementById("content");
  let y = content_target.innerText;
  content_target.innerHTML = `<textarea cols="50" class="content_input"> </textarea>`;
  document.getElementsByClassName("content_input")[0].value = y;
}

/*
 TODO EDIT FUNCTION : when we click save button it will convert the title input, textare to normal 
 TODO edit button will shown and save button will be hide
 */
function savefunction() {
  save.style.display = "none";
  edit.style.display = "block";

  // ?title related Dom Manipulation
  let title_target = document.getElementById("title_Post");
  let save_input_value = document.getElementsByClassName("title_input")[0];
  title_target.innerHTML = save_input_value.value;

  // ?content related Dom manipulation
  let content_target = document.getElementById("content");
  let save_content_value = document.getElementsByClassName("content_input")[0];
  content_target.innerHTML = save_content_value.value;
}

/*
TODO  LIKE BUTTON:  when we click to like button it will be change to LIKED and no of likes will be changed
*/
let likeCount = 0;
document.getElementById("likebutton").onclick = function () {
  likeCount++;
  this.innerHTML = '<i class="fas fa-thumbs-up"></i> Liked';
  document.getElementById(
    "no_likes"
  ).innerText = `${likeCount} people like this!`;
};

/*
TODO ADDING COMMENT :  when we click to comment button then comment will be added to comments section
*/
function addcommentfun() {
  let data = document.getElementById("addcomment");

  // ? this condition : if the input have a value then only it should be added orelse no
  if (data.value) {
    document.getElementById("showcomments").classList.add("p-3");
    document.getElementById("showcomments").innerHTML += `<p>${data.value}</p>`;
  }
  data.value = "";
}
