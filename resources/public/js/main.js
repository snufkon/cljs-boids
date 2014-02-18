;(function(){
var b = document.getElementById("world"), k = b.getContext("2d"), l = [];
function m() {
  a: {
    k.clearRect(0, 0, 500, 500);
    for(var d = 0;;) {
      if(d < l.length) {
        k.fillRect(l[d].x - 2.5, l[d].y - 2.5, 5, 5), d += 1
      }else {
        break a
      }
    }
  }
  a: {
    for(d = 0;;) {
      if(d < l.length) {
        b: {
          for(var a = d, f = l.length, g = 0, h = 0, c = 0;;) {
            if(c < f) {
              var h = h + l[c].y, e = c + 1, g = g + l[c].x, c = e
            }else {
              c = (h - l[a].y) / (f - 1);
              e = l[a];
              e.vx += ((g - l[a].x) / (f - 1) - e.x) / 100;
              e.vy += (c - e.y) / 100;
              break b
            }
          }
        }
        b: {
          for(a = d, f = l.length, g = 0;;) {
            if(g < f) {
              g !== a && (c = l[a], h = l[g], e = h.x - c.x, h = h.y - c.y, 5 > (Math.sqrt.a ? Math.sqrt.a(e * e + h * h) : Math.sqrt.call(null, e * e + h * h)) && (c.vx -= l[g].x - c.x, c.vy -= l[g].y - c.y)), g += 1
            }else {
              break b
            }
          }
        }
        b: {
          for(a = d, f = l.length, c = h = g = 0;;) {
            if(c < f) {
              h += l[c].vy, e = c + 1, g += l[c].vx, c = e
            }else {
              c = (h - l[a].vy) / (f - 1);
              e = l[a];
              e.vx += ((g - l[a].vx) / (f - 1) - e.vx) / 8;
              e.vy += (c - e.vy) / 8;
              break b
            }
          }
        }
        a = l[d];
        f = Math.sqrt.a ? Math.sqrt.a(a.vx * a.vx + a.vy * a.vy) : Math.sqrt.call(null, a.vx * a.vx + a.vy * a.vy);
        7 <= f && (f = 7 / f, a.vx *= f, a.vy *= f);
        if(0 > a.x && 0 > a.vx || 500 < a.x && 0 < a.vx) {
          a.vx *= -1
        }
        if(0 > a.y && 0 > a.vy || 500 < a.y && 0 < a.vy) {
          a.vy *= -1
        }
        a = l[d];
        a.x += a.vx;
        a.y += a.vy;
        d += 1
      }else {
        d = null;
        break a
      }
    }
    d = void 0
  }
  return d
}
window.onload = function() {
  b.width = 500;
  b.height = 500;
  k.fillStyle = "rgba(33, 33, 33, 0.8)";
  a: {
    for(var d = 0;;) {
      if(100 > d) {
        l[d] = {x:500 * Math.random(), y:500 * Math.random(), vx:0, vy:0}, d += 1
      }else {
        break a
      }
    }
  }
  return setInterval(m, 1E3 / 30)
};

})();
