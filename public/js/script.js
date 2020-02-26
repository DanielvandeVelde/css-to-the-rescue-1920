window.addEventListener("keypress", keyPress, false);

function keyPress() {
  if (document.body.id == "dark") {
    document.body.id = "light";
    return;
  }
  document.body.id = "dark";
}
