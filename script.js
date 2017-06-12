function checkerboard() {
  for (var i = 0; i < 81; i++) {
    var space = document.createElement("div");
    document.body.appendChild(space);
    space.style.width = "11.1%";
    space.style.paddingBottom = "11.1%";
    space.style.float = "left";
    var x = Math.floor(Math.random()*256);
    var y = Math.floor(Math.random()*256);
    var z = Math.floor(Math.random()*256);
    space.style.backgroundColor = "rgb" + "(" + x + ", " + y + ", " + z + ")";
    console.log(x, y, z);
  }
}
document.body.style.margin = "0";
checkerboard();
