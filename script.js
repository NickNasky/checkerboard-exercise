function checkerboard() {
  for (var i = 0; i < 81; i++) {
    var space = document.createElement("div");
    document.body.appendChild(space);
    document.body.style.backgroundImage = "linear-gradient(0, white, blue)";
    if (i % 2){
      space.style.width = "11.1%";
      space.style.paddingBottom = "11.1%";
      space.style.float = "left";
      space.style.backgroundColor = "red";
      space.style.opacity = ".5"
    } else {
      space.style.width = "11.1%";
      space.style.paddingBottom = "11.1%";
      space.style.float = "left";
      space.style.backgroundColor = "white";
      space.style.opacity = ".5"
    }
  }
}
document.body.style.margin = "0";
checkerboard();
