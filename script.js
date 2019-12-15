window.onload = function() {
    var dynamicbox = document.getElementById("dynamicbox");
    var staticbox = document.getElementById("staticbox");
    dynamicbox.onmousedown = function(event) {
        document.onmousemove = function(event) {
            event = event || window.event;
            var st = document.body.scrollTop || document.documentElement.scrollTop;
            var sl = document.body.scrollLeft || document.documentElement.scrollLeft;
            var left = event.clientX + sl;
            var top = event.clientY + st;
            if (left <= 920) {
                dynamicbox.style.left = left + "px";
            } else {
                dynamicbox.style.left = 920 + "px";
            }
            if (top < 0) {
                dynamicbox.style.top = 0;
            } else if (top <= 720) {
                dynamicbox.style.top = top + "px";
            } else if (top > 720) {
                dynamicbox.style.top = 720 + "px";
            }
            if (left > 120 && left < 280) {
                if (top > 120 && top < 280) {
                    staticbox.style.background = "blue";
                } else {
                    staticbox.style.background = "glod";
                }
            } else {
                staticbox.style.background = "glod";
            }

        }
        document.onmouseup = function() {
            document.onmousemove = null;
            docuemnt.onmouseup = null;
        }
    }

}