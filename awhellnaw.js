let pee;
switch (new Date().getDay()) {
  case 2:
    pee = "Javascript kinda cool";
    break;
  default:
    pee = "Today's not tuesday. sad";
    break;
}
document.getElementById("js").innerHTML =  pee;