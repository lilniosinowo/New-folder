alert("WELCOME LILNI");
var theme = "light";
var button = document.querySelector(".button");
var body = document.querySelector("body");

function changeTheme() {
  if (theme == "light") {
    body.setAttribute("class", "dark");
    theme = "dark";
  } else {
    body.setAttribute("class", "light");
    theme = "light";
  }
}
button.onclick = changeTheme;
