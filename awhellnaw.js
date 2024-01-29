let pee;
switch (new Date().getDay()) {
  case 2:
    pee = "Today's tuesday ඞඞඞ";
    break;
  default:
    pee = hidden;
    break;
}
document.getElementById("js").innerHTML =  pee;

function toggleMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}