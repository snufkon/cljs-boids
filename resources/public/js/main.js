;(function(){
var b = this;
var k, l, m, n;
function p() {
  return b.navigator ? b.navigator.userAgent : null
}
n = m = l = k = !1;
var q;
if(q = p()) {
  var r = b.navigator;
  k = 0 == q.indexOf("Opera");
  l = !k && -1 != q.indexOf("MSIE");
  m = !k && -1 != q.indexOf("WebKit");
  n = !k && !m && "Gecko" == r.product
}
var s = l, t = n, u = m;
var v;
if(k && b.opera) {
  var w = b.opera.version;
  "function" == typeof w && w()
}else {
  t ? v = /rv\:([^\);]+)(\)|;)/ : s ? v = /MSIE\s+([^\);]+)(\)|;)/ : u && (v = /WebKit\/(\S+)/), v && v.exec(p())
}
;var x, y;
var z = window.location.href, A = z.search(/#|$/), B;
b: {
  for(var C = 0;0 <= (C = z.indexOf("n", C)) && C < A;) {
    var D = z.charCodeAt(C - 1);
    if(38 == D || 63 == D) {
      var E = z.charCodeAt(C + 1);
      if(!E || 61 == E || 38 == E || 35 == E) {
        B = C;
        break b
      }
    }
    C += 2
  }
  B = -1
}
if(0 > B) {
  y = null
}else {
  var F = z.indexOf("\x26", B);
  if(0 > F || F > A) {
    F = A
  }
  B += 2;
  y = decodeURIComponent(z.substr(B, F - B).replace(/\+/g, " "))
}
x = null != y && !1 !== y ? y : 100;
var G = document.getElementById("world"), H = G.getContext("2d"), I = [];
function J() {
  a: {
    H.clearRect(0, 0, 500, 500);
    for(var d = 0;;) {
      if(d < I.length) {
        H.fillRect(I[d].x - 2.5, I[d].y - 2.5, 5, 5), d += 1
      }else {
        break a
      }
    }
  }
  a: {
    for(d = 0;;) {
      if(d < I.length) {
        b: {
          for(var a = d, f = I.length, g = 0, h = 0, c = 0;;) {
            if(c < f) {
              var h = h + I[c].y, e = c + 1, g = g + I[c].x, c = e
            }else {
              c = (h - I[a].y) / (f - 1);
              e = I[a];
              e.vx += ((g - I[a].x) / (f - 1) - e.x) / 100;
              e.vy += (c - e.y) / 100;
              break b
            }
          }
        }
        b: {
          for(a = d, f = I.length, g = 0;;) {
            if(g < f) {
              g !== a && (c = I[a], h = I[g], e = h.x - c.x, h = h.y - c.y, 5 > (Math.sqrt.a ? Math.sqrt.a(e * e + h * h) : Math.sqrt.call(null, e * e + h * h)) && (c.vx -= I[g].x - c.x, c.vy -= I[g].y - c.y)), g += 1
            }else {
              break b
            }
          }
        }
        b: {
          for(a = d, f = I.length, c = h = g = 0;;) {
            if(c < f) {
              h += I[c].vy, e = c + 1, g += I[c].vx, c = e
            }else {
              c = (h - I[a].vy) / (f - 1);
              e = I[a];
              e.vx += ((g - I[a].vx) / (f - 1) - e.vx) / 8;
              e.vy += (c - e.vy) / 8;
              break b
            }
          }
        }
        a = I[d];
        f = Math.sqrt.a ? Math.sqrt.a(a.vx * a.vx + a.vy * a.vy) : Math.sqrt.call(null, a.vx * a.vx + a.vy * a.vy);
        7 <= f && (f = 7 / f, a.vx *= f, a.vy *= f);
        if(0 > a.x && 0 > a.vx || 500 < a.x && 0 < a.vx) {
          a.vx *= -1
        }
        if(0 > a.y && 0 > a.vy || 500 < a.y && 0 < a.vy) {
          a.vy *= -1
        }
        a = I[d];
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
  G.width = 500;
  G.height = 500;
  H.fillStyle = "rgba(33, 33, 33, 0.8)";
  a: {
    for(var d = 0;;) {
      if(d < x) {
        I[d] = {x:500 * Math.random(), y:500 * Math.random(), vx:0, vy:0}, d += 1
      }else {
        break a
      }
    }
  }
  return setInterval(J, 1E3 / 30)
};

})();
