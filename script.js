window.onload = function () {
  var dynamicBox = document.getElementById("dynamicbox");
  var staticBox = document.getElementById("staticbox");
  dynamicBox.onmousedown = function (event) {
    document.onmousemove = function (event) {
      event = event || window.event;
      var st = document.body.scrollTop || document.documentElement.scrollTop;
      var sl = document.body.scrollLeft || document.documentElement.scrollLeft;
      var left = event.clientX + sl;
      var top = event.clientY + st;
      if (left <= 920) {
        dynamicBox.style.left = left + "px";
      } else {
        dynamicBox.style.left = 920 + "px";
      }
      if (top < 0) {
        dynamicBox.style.top = 0;
      } else if (top <= 720) {
        dynamicBox.style.top = top + "px";
      } else if (top > 720) {
        dynamicBox.style.top = 720 + "px";
      }
      if (left > 120 && left < 280) {
        if (top > 120 && top < 280) {
          staticBox.style.background = "blue";
        } else {
          staticBox.style.background = "glod";
        }
      } else {
        staticBox.style.background = "glod";
      }

    }
    document.onmouseup = function () {
      document.onmousemove = null;
      docuemnt.onmouseup = null;
    }
  }

}