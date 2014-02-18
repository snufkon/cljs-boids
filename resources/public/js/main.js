;(function(){
var e = document.getElementById("world"), h = e.getContext("2d"), k = [];
function l(a) {
  for(var f = k.length, d = 0, g = 0, b = 0;;) {
    if(b < f) {
      var g = g + k[b].y, c = b + 1, d = d + k[b].x, b = c
    }else {
      return b = (g - k[a].y) / (f - 1), c = k[a], c.vx += ((d - k[a].x) / (f - 1) - c.x) / 100, c.vy += (b - c.y) / 100
    }
  }
}
function m(a) {
  for(var f = k.length, d = 0;;) {
    if(d < f) {
      if(d !== a) {
        var g = k[a], b = k[d], c = b.x - g.x, b = b.y - g.y;
        5 > (Math.sqrt.a ? Math.sqrt.a(c * c + b * b) : Math.sqrt.call(null, c * c + b * b)) && (g.vx -= k[d].x - g.x, g.vy -= k[d].y - g.y)
      }
      d += 1
    }else {
      return null
    }
  }
}
function n(a) {
  for(var f = k.length, d = 0, g = 0, b = 0;;) {
    if(b < f) {
      var g = g + k[b].vy, c = b + 1, d = d + k[b].vx, b = c
    }else {
      return b = (g - k[a].vy) / (f - 1), c = k[a], c.vx += ((d - k[a].vx) / (f - 1) - c.vx) / 8, c.vy += (b - c.vy) / 8
    }
  }
}
function p(a) {
  a = k[a];
  var f = Math.sqrt.a ? Math.sqrt.a(a.vx * a.vx + a.vy * a.vy) : Math.sqrt.call(null, a.vx * a.vx + a.vy * a.vy);
  7 <= f && (f = 7 / f, a.vx *= f, a.vy *= f);
  (0 > a.x && 0 > a.vx || 500 < a.x && 0 < a.vx) && (a.vx *= -1);
  return 0 > a.y && 0 > a.vy || 500 < a.y && 0 < a.vy ? a.vy *= -1 : null
}
function q(a, f) {
  console.time(f);
  for(var d = 0;;) {
    if(500 > d) {
      a.a ? a.a(d) : a.call(null, d), d += 1
    }else {
      break
    }
  }
  return console.timeEnd(f)
}
window.onload = function() {
  e.width = 500;
  e.height = 500;
  h.fillStyle = "rgba(33, 33, 33, 0.8)";
  a: {
    for(var a = 0;;) {
      if(500 > a) {
        k[a] = {x:500 * Math.random(), y:500 * Math.random(), vx:0, vy:0}, a += 1
      }else {
        break a
      }
    }
  }
  q(l, "rule1");
  q(m, "rule2");
  q(n, "rule3");
  return q(p, "restrict")
};

})();
