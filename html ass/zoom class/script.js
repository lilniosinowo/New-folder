var info = document.querySelector("#text");
info.innerText = "hello";
info.innerHTML = "<p>Hello</p>";
info.setAttribute("class", "red");
info.removeAttribute("class");
function changeColor(element) {
  element.setAttribute("class", "red");
}

changeColor(info);
