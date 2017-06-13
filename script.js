function checkerboard() {
  for (var i = 0; i < 81; i++) {
    var space = document.createElement("div");
    document.body.appendChild(space);
    space.style.width = "11.1%";
    space.style.paddingBottom = "11.1%";
    space.style.float = "left";
  }
}

function color() {
  var color1 = Math.floor(Math.random()*256);
  var color2 = Math.floor(Math.random()*256);
  var color3 = Math.floor(Math.random()*256);
  return "rgb" + "(" + color1 + ", " + color2 + ", " + color3 + ")";
}

function flash() {
  var space = document.getElementsByTagName("div");
  for (var i = 0; i < 81; i++) {
    space[i].style.backgroundColor = color();
  }
}
document.body.style.margin = "0";
checkerboard();
setInterval(function() {
  flash()
}, 2000);
