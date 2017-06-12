function checkerboard() {
  for (var i = 0; i < 81; i++) {
    var space = document.createElement("div");
    document.body.appendChild(space);
    space.style.width = "11.1%";
    space.style.paddingBottom = "11.1%";
    space.style.float = "left";
    if (i % 2) {
      space.style.backgroundColor = "red";
    } else {
      space.style.backgroundColor = "black";
    }
  }
}
document.body.style.margin = "0";
checkerboard();
