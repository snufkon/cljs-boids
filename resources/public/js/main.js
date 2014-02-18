;(function(){
function f(a) {
  return function() {
    return this[a]
  }
}
function aa(a) {
  return function() {
    return a
  }
}
var n;
function r(a) {
  var b = typeof a;
  if("object" == b) {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }
      if(a instanceof Object) {
        return b
      }
      var c = Object.prototype.toString.call(a);
      if("[object Window]" == c) {
        return"object"
      }
      if("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == b && "undefined" == typeof a.call) {
      return"object"
    }
  }
  return b
}
var ba = "closure_uid_" + (1E9 * Math.random() >>> 0), ca = 0;
function da(a, b) {
  null != a && this.append.apply(this, arguments)
}
da.prototype.la = "";
da.prototype.append = function(a, b, c) {
  this.la += a;
  if(null != b) {
    for(var d = 1;d < arguments.length;d++) {
      this.la += arguments[d]
    }
  }
  return this
};
da.prototype.toString = f("la");
function s(a) {
  return null != a && !1 !== a
}
function t(a, b) {
  return a[r(null == b ? null : b)] ? !0 : a._ ? !0 : u ? !1 : null
}
function ea(a) {
  return null == a ? null : a.constructor
}
function w(a, b) {
  var c = ea(b), c = s(s(c) ? c.eb : c) ? c.cb : r(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""))
}
function ga(a) {
  var b = a.cb;
  return s(b) ? b : "" + x(a)
}
function y(a) {
  for(var b = a.length, c = Array(b), d = 0;;) {
    if(d < b) {
      c[d] = a[d], d += 1
    }else {
      break
    }
  }
  return c
}
var ha = {}, ia = {};
function ja(a) {
  if(a ? a.C : a) {
    return a.C(a)
  }
  var b;
  b = ja[r(null == a ? null : a)];
  if(!b && (b = ja._, !b)) {
    throw w("ICounted.-count", a);
  }
  return b.call(null, a)
}
function ka(a, b) {
  if(a ? a.B : a) {
    return a.B(a, b)
  }
  var c;
  c = ka[r(null == a ? null : a)];
  if(!c && (c = ka._, !c)) {
    throw w("ICollection.-conj", a);
  }
  return c.call(null, a, b)
}
var la = {}, z = function() {
  function a(a, b, c) {
    if(a ? a.S : a) {
      return a.S(a, b, c)
    }
    var h;
    h = z[r(null == a ? null : a)];
    if(!h && (h = z._, !h)) {
      throw w("IIndexed.-nth", a);
    }
    return h.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.N : a) {
      return a.N(a, b)
    }
    var c;
    c = z[r(null == a ? null : a)];
    if(!c && (c = z._, !c)) {
      throw w("IIndexed.-nth", a);
    }
    return c.call(null, a, b)
  }
  var c = null, c = function(d, c, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, d, c);
      case 3:
        return a.call(this, d, c, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}(), ma = {};
function A(a) {
  if(a ? a.O : a) {
    return a.O(a)
  }
  var b;
  b = A[r(null == a ? null : a)];
  if(!b && (b = A._, !b)) {
    throw w("ISeq.-first", a);
  }
  return b.call(null, a)
}
function B(a) {
  if(a ? a.P : a) {
    return a.P(a)
  }
  var b;
  b = B[r(null == a ? null : a)];
  if(!b && (b = B._, !b)) {
    throw w("ISeq.-rest", a);
  }
  return b.call(null, a)
}
var oa = {}, pa = function() {
  function a(a, b, c) {
    if(a ? a.G : a) {
      return a.G(a, b, c)
    }
    var h;
    h = pa[r(null == a ? null : a)];
    if(!h && (h = pa._, !h)) {
      throw w("ILookup.-lookup", a);
    }
    return h.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.F : a) {
      return a.F(a, b)
    }
    var c;
    c = pa[r(null == a ? null : a)];
    if(!c && (c = pa._, !c)) {
      throw w("ILookup.-lookup", a);
    }
    return c.call(null, a, b)
  }
  var c = null, c = function(d, c, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, d, c);
      case 3:
        return a.call(this, d, c, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}();
function qa(a, b, c) {
  if(a ? a.ma : a) {
    return a.ma(a, b, c)
  }
  var d;
  d = qa[r(null == a ? null : a)];
  if(!d && (d = qa._, !d)) {
    throw w("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c)
}
var ra = {}, sa = {};
function ta(a) {
  if(a ? a.Ta : a) {
    return a.Ta()
  }
  var b;
  b = ta[r(null == a ? null : a)];
  if(!b && (b = ta._, !b)) {
    throw w("IMapEntry.-key", a);
  }
  return b.call(null, a)
}
function ua(a) {
  if(a ? a.Ua : a) {
    return a.Ua()
  }
  var b;
  b = ua[r(null == a ? null : a)];
  if(!b && (b = ua._, !b)) {
    throw w("IMapEntry.-val", a);
  }
  return b.call(null, a)
}
var va = {};
function wa(a, b, c) {
  if(a ? a.Qa : a) {
    return a.Qa(a, b, c)
  }
  var d;
  d = wa[r(null == a ? null : a)];
  if(!d && (d = wa._, !d)) {
    throw w("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c)
}
var xa = {};
function ya(a) {
  if(a ? a.L : a) {
    return a.L(a)
  }
  var b;
  b = ya[r(null == a ? null : a)];
  if(!b && (b = ya._, !b)) {
    throw w("IMeta.-meta", a);
  }
  return b.call(null, a)
}
function za(a, b) {
  if(a ? a.K : a) {
    return a.K(a, b)
  }
  var c;
  c = za[r(null == a ? null : a)];
  if(!c && (c = za._, !c)) {
    throw w("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b)
}
var Aa = {}, Ba = function() {
  function a(a, b, c) {
    if(a ? a.J : a) {
      return a.J(a, b, c)
    }
    var h;
    h = Ba[r(null == a ? null : a)];
    if(!h && (h = Ba._, !h)) {
      throw w("IReduce.-reduce", a);
    }
    return h.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.I : a) {
      return a.I(a, b)
    }
    var c;
    c = Ba[r(null == a ? null : a)];
    if(!c && (c = Ba._, !c)) {
      throw w("IReduce.-reduce", a);
    }
    return c.call(null, a, b)
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}();
function Ca(a, b) {
  if(a ? a.t : a) {
    return a.t(a, b)
  }
  var c;
  c = Ca[r(null == a ? null : a)];
  if(!c && (c = Ca._, !c)) {
    throw w("IEquiv.-equiv", a);
  }
  return c.call(null, a, b)
}
function Da(a) {
  if(a ? a.v : a) {
    return a.v(a)
  }
  var b;
  b = Da[r(null == a ? null : a)];
  if(!b && (b = Da._, !b)) {
    throw w("IHash.-hash", a);
  }
  return b.call(null, a)
}
var Ea = {};
function Fa(a) {
  if(a ? a.A : a) {
    return a.A(a)
  }
  var b;
  b = Fa[r(null == a ? null : a)];
  if(!b && (b = Fa._, !b)) {
    throw w("ISeqable.-seq", a);
  }
  return b.call(null, a)
}
var Ga = {};
function D(a, b) {
  if(a ? a.Wa : a) {
    return a.Wa(0, b)
  }
  var c;
  c = D[r(null == a ? null : a)];
  if(!c && (c = D._, !c)) {
    throw w("IWriter.-write", a);
  }
  return c.call(null, a, b)
}
var Ha = {};
function Ia(a, b, c) {
  if(a ? a.u : a) {
    return a.u(a, b, c)
  }
  var d;
  d = Ia[r(null == a ? null : a)];
  if(!d && (d = Ia._, !d)) {
    throw w("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c)
}
function Ja(a) {
  if(a ? a.ra : a) {
    return a.ra(a)
  }
  var b;
  b = Ja[r(null == a ? null : a)];
  if(!b && (b = Ja._, !b)) {
    throw w("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a)
}
function Ka(a, b) {
  if(a ? a.ta : a) {
    return a.ta(a, b)
  }
  var c;
  c = Ka[r(null == a ? null : a)];
  if(!c && (c = Ka._, !c)) {
    throw w("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b)
}
function La(a) {
  if(a ? a.ua : a) {
    return a.ua(a)
  }
  var b;
  b = La[r(null == a ? null : a)];
  if(!b && (b = La._, !b)) {
    throw w("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a)
}
function Ma(a, b, c) {
  if(a ? a.na : a) {
    return a.na(a, b, c)
  }
  var d;
  d = Ma[r(null == a ? null : a)];
  if(!d && (d = Ma._, !d)) {
    throw w("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c)
}
function Na(a, b, c) {
  if(a ? a.Va : a) {
    return a.Va(0, b, c)
  }
  var d;
  d = Na[r(null == a ? null : a)];
  if(!d && (d = Na._, !d)) {
    throw w("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c)
}
function Oa(a) {
  if(a ? a.Ra : a) {
    return a.Ra()
  }
  var b;
  b = Oa[r(null == a ? null : a)];
  if(!b && (b = Oa._, !b)) {
    throw w("IChunk.-drop-first", a);
  }
  return b.call(null, a)
}
function Pa(a) {
  if(a ? a.za : a) {
    return a.za(a)
  }
  var b;
  b = Pa[r(null == a ? null : a)];
  if(!b && (b = Pa._, !b)) {
    throw w("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a)
}
function Qa(a) {
  if(a ? a.Aa : a) {
    return a.Aa(a)
  }
  var b;
  b = Qa[r(null == a ? null : a)];
  if(!b && (b = Qa._, !b)) {
    throw w("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a)
}
function Ra(a) {
  if(a ? a.ya : a) {
    return a.ya(a)
  }
  var b;
  b = Ra[r(null == a ? null : a)];
  if(!b && (b = Ra._, !b)) {
    throw w("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a)
}
function Sa(a) {
  this.fb = a;
  this.n = 0;
  this.f = 1073741824
}
Sa.prototype.Wa = function(a, b) {
  return this.fb.append(b)
};
function F(a) {
  var b = new da;
  a.u(null, new Sa(b), new Ta(null, 5, [Ua, !0, Va, !0, Wa, !1, Xa, !1, Ya, null], null));
  return"" + x(b)
}
function Za(a, b) {
  if(s($a.a ? $a.a(a, b) : $a.call(null, a, b))) {
    return 0
  }
  var c = s(a.ba) ? !1 : !0;
  if(s(c ? b.ba : c)) {
    return-1
  }
  if(s(a.ba)) {
    if(!s(b.ba)) {
      return 1
    }
    c = ab.a ? ab.a(a.ba, b.ba) : ab.call(null, a.ba, b.ba);
    return 0 === c ? ab.a ? ab.a(a.name, b.name) : ab.call(null, a.name, b.name) : c
  }
  return bb ? ab.a ? ab.a(a.name, b.name) : ab.call(null, a.name, b.name) : null
}
function G(a) {
  if(null == a) {
    return null
  }
  if(a && (a.f & 8388608 || a.mb)) {
    return a.A(null)
  }
  if(a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new cb(a, 0)
  }
  if(t(Ea, a)) {
    return Fa(a)
  }
  if(u) {
    throw Error([x(a), x("is not ISeqable")].join(""));
  }
  return null
}
function H(a) {
  if(null == a) {
    return null
  }
  if(a && (a.f & 64 || a.sa)) {
    return a.O(null)
  }
  a = G(a);
  return null == a ? null : A(a)
}
function I(a) {
  return null != a ? a && (a.f & 64 || a.sa) ? a.P(null) : (a = G(a)) ? B(a) : K : K
}
function L(a) {
  return null == a ? null : a && (a.f & 128 || a.lb) ? a.da(null) : G(I(a))
}
var $a = function() {
  function a(a, b) {
    return a === b || Ca(a, b)
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l)
    }
    function c(a, d, e) {
      for(;;) {
        if(b.a(a, d)) {
          if(L(e)) {
            a = d, d = H(e), e = L(e)
          }else {
            return b.a(d, H(e))
          }
        }else {
          return!1
        }
      }
    }
    a.s = 2;
    a.m = function(a) {
      var b = H(a);
      a = L(a);
      var d = H(a);
      a = I(a);
      return c(b, d, a)
    };
    a.j = c;
    return a
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a.call(this, b, e);
      default:
        return c.j(b, e, N(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.s = 2;
  b.m = c.m;
  b.d = aa(!0);
  b.a = a;
  b.j = c.j;
  return b
}();
Da["null"] = aa(0);
ia["null"] = !0;
ja["null"] = aa(0);
Ca["null"] = function(a, b) {
  return null == b
};
za["null"] = aa(null);
xa["null"] = !0;
ya["null"] = aa(null);
ra["null"] = !0;
Date.prototype.t = function(a, b) {
  return b instanceof Date && this.toString() === b.toString()
};
Ca.number = function(a, b) {
  return a === b
};
xa["function"] = !0;
ya["function"] = aa(null);
ha["function"] = !0;
Da._ = function(a) {
  return a[ba] || (a[ba] = ++ca)
};
var db = function() {
  function a(a, b, c, d) {
    for(var l = ja(a);;) {
      if(d < l) {
        c = b.a ? b.a(c, z.a(a, d)) : b.call(null, c, z.a(a, d)), d += 1
      }else {
        return c
      }
    }
  }
  function b(a, b, c) {
    for(var d = ja(a), l = 0;;) {
      if(l < d) {
        c = b.a ? b.a(c, z.a(a, l)) : b.call(null, c, z.a(a, l)), l += 1
      }else {
        return c
      }
    }
  }
  function c(a, b) {
    var c = ja(a);
    if(0 === c) {
      return b.ha ? "" : b.call(null)
    }
    for(var d = z.a(a, 0), l = 1;;) {
      if(l < c) {
        d = b.a ? b.a(d, z.a(a, l)) : b.call(null, d, z.a(a, l)), l += 1
      }else {
        return d
      }
    }
  }
  var d = null, d = function(d, g, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, h);
      case 4:
        return a.call(this, d, g, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.c = b;
  d.l = a;
  return d
}(), eb = function() {
  function a(a, b, c, d) {
    for(var l = a.length;;) {
      if(d < l) {
        c = b.a ? b.a(c, a[d]) : b.call(null, c, a[d]), d += 1
      }else {
        return c
      }
    }
  }
  function b(a, b, c) {
    for(var d = a.length, l = 0;;) {
      if(l < d) {
        c = b.a ? b.a(c, a[l]) : b.call(null, c, a[l]), l += 1
      }else {
        return c
      }
    }
  }
  function c(a, b) {
    var c = a.length;
    if(0 === a.length) {
      return b.ha ? "" : b.call(null)
    }
    for(var d = a[0], l = 1;;) {
      if(l < c) {
        d = b.a ? b.a(d, a[l]) : b.call(null, d, a[l]), l += 1
      }else {
        return d
      }
    }
  }
  var d = null, d = function(d, g, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, h);
      case 4:
        return a.call(this, d, g, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.c = b;
  d.l = a;
  return d
}();
function gb(a) {
  return a ? a.f & 2 || a.Ya ? !0 : a.f ? !1 : t(ia, a) : t(ia, a)
}
function hb(a) {
  return a ? a.f & 16 || a.Sa ? !0 : a.f ? !1 : t(la, a) : t(la, a)
}
function cb(a, b) {
  this.b = a;
  this.g = b;
  this.n = 0;
  this.f = 166199550
}
n = cb.prototype;
n.v = function() {
  return ib.d ? ib.d(this) : ib.call(null, this)
};
n.da = function() {
  return this.g + 1 < this.b.length ? new cb(this.b, this.g + 1) : null
};
n.B = function(a, b) {
  return O.a ? O.a(b, this) : O.call(null, b, this)
};
n.toString = function() {
  return F(this)
};
n.I = function(a, b) {
  return eb.l(this.b, b, this.b[this.g], this.g + 1)
};
n.J = function(a, b, c) {
  return eb.l(this.b, b, c, this.g)
};
n.A = function() {
  return this
};
n.C = function() {
  return this.b.length - this.g
};
n.O = function() {
  return this.b[this.g]
};
n.P = function() {
  return this.g + 1 < this.b.length ? new cb(this.b, this.g + 1) : K
};
n.t = function(a, b) {
  return P.a ? P.a(this, b) : P.call(null, this, b)
};
n.N = function(a, b) {
  var c = b + this.g;
  return c < this.b.length ? this.b[c] : null
};
n.S = function(a, b, c) {
  a = b + this.g;
  return a < this.b.length ? this.b[a] : c
};
var jb = function() {
  function a(a, b) {
    return b < a.length ? new cb(a, b) : null
  }
  function b(a) {
    return c.a(a, 0)
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.a = a;
  return c
}(), N = function() {
  function a(a, b) {
    return jb.a(a, b)
  }
  function b(a) {
    return jb.a(a, 0)
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.a = a;
  return c
}();
Ca._ = function(a, b) {
  return a === b
};
var kb = function() {
  function a(a, b) {
    return null != a ? ka(a, b) : ka(K, b)
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l)
    }
    function c(a, d, e) {
      for(;;) {
        if(s(e)) {
          a = b.a(a, d), d = H(e), e = L(e)
        }else {
          return b.a(a, d)
        }
      }
    }
    a.s = 2;
    a.m = function(a) {
      var b = H(a);
      a = L(a);
      var d = H(a);
      a = I(a);
      return c(b, d, a)
    };
    a.j = c;
    return a
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.j(b, e, N(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.s = 2;
  b.m = c.m;
  b.a = a;
  b.j = c.j;
  return b
}();
function Q(a) {
  if(null != a) {
    if(a && (a.f & 2 || a.Ya)) {
      a = a.C(null)
    }else {
      if(a instanceof Array) {
        a = a.length
      }else {
        if("string" === typeof a) {
          a = a.length
        }else {
          if(t(ia, a)) {
            a = ja(a)
          }else {
            if(u) {
              a: {
                a = G(a);
                for(var b = 0;;) {
                  if(gb(a)) {
                    a = b + ja(a);
                    break a
                  }
                  a = L(a);
                  b += 1
                }
                a = void 0
              }
            }else {
              a = null
            }
          }
        }
      }
    }
  }else {
    a = 0
  }
  return a
}
var lb = function() {
  function a(a, b, c) {
    for(;;) {
      if(null == a) {
        return c
      }
      if(0 === b) {
        return G(a) ? H(a) : c
      }
      if(hb(a)) {
        return z.c(a, b, c)
      }
      if(G(a)) {
        a = L(a), b -= 1
      }else {
        return u ? c : null
      }
    }
  }
  function b(a, b) {
    for(;;) {
      if(null == a) {
        throw Error("Index out of bounds");
      }
      if(0 === b) {
        if(G(a)) {
          return H(a)
        }
        throw Error("Index out of bounds");
      }
      if(hb(a)) {
        return z.a(a, b)
      }
      if(G(a)) {
        var c = L(a), h = b - 1;
        a = c;
        b = h
      }else {
        if(u) {
          throw Error("Index out of bounds");
        }
        return null
      }
    }
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}(), mb = function() {
  function a(a, b, c) {
    if(null != a) {
      if(a && (a.f & 16 || a.Sa)) {
        return a.S(null, b, c)
      }
      if(a instanceof Array || "string" === typeof a) {
        return b < a.length ? a[b] : c
      }
      if(t(la, a)) {
        return z.a(a, b)
      }
      if(u) {
        if(a ? a.f & 64 || a.sa || (a.f ? 0 : t(ma, a)) : t(ma, a)) {
          return lb.c(a, b, c)
        }
        throw Error([x("nth not supported on this type "), x(ga(ea(a)))].join(""));
      }
      return null
    }
    return c
  }
  function b(a, b) {
    if(null == a) {
      return null
    }
    if(a && (a.f & 16 || a.Sa)) {
      return a.N(null, b)
    }
    if(a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null
    }
    if(t(la, a)) {
      return z.a(a, b)
    }
    if(u) {
      if(a ? a.f & 64 || a.sa || (a.f ? 0 : t(ma, a)) : t(ma, a)) {
        return lb.a(a, b)
      }
      throw Error([x("nth not supported on this type "), x(ga(ea(a)))].join(""));
    }
    return null
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}(), nb = function() {
  function a(a, b, c) {
    return null != a ? a && (a.f & 256 || a.Za) ? a.G(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : t(oa, a) ? pa.c(a, b, c) : u ? c : null : c
  }
  function b(a, b) {
    return null == a ? null : a && (a.f & 256 || a.Za) ? a.F(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : t(oa, a) ? pa.a(a, b) : null
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}(), pb = function() {
  function a(a, b, c) {
    return null != a ? qa(a, b, c) : ob.a ? ob.a([b], [c]) : ob.call(null, [b], [c])
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var m = null;
      3 < arguments.length && (m = N(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, m)
    }
    function c(a, d, e, l) {
      for(;;) {
        if(a = b.c(a, d, e), s(l)) {
          d = H(l), e = H(L(l)), l = L(L(l))
        }else {
          return a
        }
      }
    }
    a.s = 3;
    a.m = function(a) {
      var b = H(a);
      a = L(a);
      var d = H(a);
      a = L(a);
      var l = H(a);
      a = I(a);
      return c(b, d, l, a)
    };
    a.j = c;
    return a
  }(), b = function(b, e, g, h) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, g);
      default:
        return c.j(b, e, g, N(arguments, 3))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.s = 3;
  b.m = c.m;
  b.c = a;
  b.j = c.j;
  return b
}();
function qb(a) {
  var b = "function" == r(a);
  return b ? b : a ? s(s(null) ? null : a.hb) ? !0 : a.qb ? !1 : t(ha, a) : t(ha, a)
}
function rb(a) {
  return(a ? a.f & 131072 || a.ab || (a.f ? 0 : t(xa, a)) : t(xa, a)) ? ya(a) : null
}
var sb = {}, tb = 0;
function R(a) {
  if(a && (a.f & 4194304 || a.jb)) {
    a = a.v(null)
  }else {
    if("number" === typeof a) {
      a = Math.floor(a) % 2147483647
    }else {
      if(!0 === a) {
        a = 1
      }else {
        if(!1 === a) {
          a = 0
        }else {
          if("string" === typeof a) {
            255 < tb && (sb = {}, tb = 0);
            var b = sb[a];
            if("number" !== typeof b) {
              for(var c = b = 0;c < a.length;++c) {
                b = 31 * b + a.charCodeAt(c), b %= 4294967296
              }
              sb[a] = b;
              tb += 1
            }
            a = b
          }else {
            a = u ? Da(a) : null
          }
        }
      }
    }
  }
  return a
}
function ub(a) {
  return a ? a.f & 16384 || a.ob ? !0 : a.f ? !1 : t(va, a) : t(va, a)
}
function vb(a, b, c, d, e) {
  for(;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1
  }
}
function wb(a) {
  return s(a) ? !0 : !1
}
function ab(a, b) {
  if(a === b) {
    return 0
  }
  if(null == a) {
    return-1
  }
  if(null == b) {
    return 1
  }
  if(ea(a) === ea(b)) {
    return a && (a.n & 2048 || a.Ba) ? a.Ca(null, b) : a > b ? 1 : a < b ? -1 : 0
  }
  if(u) {
    throw Error("compare on non-nil objects of different types");
  }
  return null
}
var xb = function() {
  function a(a, b, c, h) {
    for(;;) {
      var k = ab(mb.a(a, h), mb.a(b, h));
      if(0 === k && h + 1 < c) {
        h += 1
      }else {
        return k
      }
    }
  }
  function b(a, b) {
    var g = Q(a), h = Q(b);
    return g < h ? -1 : g > h ? 1 : u ? c.l(a, b, g, 0) : null
  }
  var c = null, c = function(c, e, g, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 4:
        return a.call(this, c, e, g, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.l = a;
  return c
}(), S = function() {
  function a(a, b, c) {
    for(c = G(c);;) {
      if(c) {
        b = a.a ? a.a(b, H(c)) : a.call(null, b, H(c)), c = L(c)
      }else {
        return b
      }
    }
  }
  function b(a, b) {
    var c = G(b);
    return c ? yb.c ? yb.c(a, H(c), L(c)) : yb.call(null, a, H(c), L(c)) : a.ha ? "" : a.call(null)
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}(), yb = function() {
  function a(a, b, c) {
    return c && (c.f & 524288 || c.bb) ? c.J(null, a, b) : c instanceof Array ? eb.c(c, a, b) : "string" === typeof c ? eb.c(c, a, b) : t(Aa, c) ? Ba.c(c, a, b) : u ? S.c(a, b, c) : null
  }
  function b(a, b) {
    return b && (b.f & 524288 || b.bb) ? b.I(null, a) : b instanceof Array ? eb.a(b, a) : "string" === typeof b ? eb.a(b, a) : t(Aa, b) ? Ba.a(b, a) : u ? S.a(a, b) : null
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}();
function zb(a) {
  return 0 <= a ? Math.floor.d ? Math.floor.d(a) : Math.floor.call(null, a) : Math.ceil.d ? Math.ceil.d(a) : Math.ceil.call(null, a)
}
function Ab(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24
}
var x = function() {
  function a(a) {
    return null == a ? "" : a.toString()
  }
  var b = null, c = function() {
    function a(b, d) {
      var k = null;
      1 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, k)
    }
    function c(a, d) {
      for(var e = new da(b.d(a)), l = d;;) {
        if(s(l)) {
          e = e.append(b.d(H(l))), l = L(l)
        }else {
          return e.toString()
        }
      }
    }
    a.s = 1;
    a.m = function(a) {
      var b = H(a);
      a = I(a);
      return c(b, a)
    };
    a.j = c;
    return a
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 0:
        return"";
      case 1:
        return a.call(this, b);
      default:
        return c.j(b, N(arguments, 1))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.s = 1;
  b.m = c.m;
  b.ha = aa("");
  b.d = a;
  b.j = c.j;
  return b
}();
function P(a, b) {
  return wb((b ? b.f & 16777216 || b.nb || (b.f ? 0 : t(Ga, b)) : t(Ga, b)) ? function() {
    for(var c = G(a), d = G(b);;) {
      if(null == c) {
        return null == d
      }
      if(null == d) {
        return!1
      }
      if($a.a(H(c), H(d))) {
        c = L(c), d = L(d)
      }else {
        return u ? !1 : null
      }
    }
  }() : null)
}
function Bb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2)
}
function ib(a) {
  if(G(a)) {
    var b = R(H(a));
    for(a = L(a);;) {
      if(null == a) {
        return b
      }
      b = Bb(b, R(H(a)));
      a = L(a)
    }
  }else {
    return 0
  }
}
function Cb(a) {
  var b = 0;
  for(a = G(a);;) {
    if(a) {
      var c = H(a), b = (b + (R(T.d ? T.d(c) : T.call(null, c)) ^ R(U.d ? U.d(c) : U.call(null, c)))) % 4503599627370496;
      a = L(a)
    }else {
      return b
    }
  }
}
function Db(a, b, c, d, e) {
  this.i = a;
  this.oa = b;
  this.ca = c;
  this.count = d;
  this.h = e;
  this.n = 0;
  this.f = 65937646
}
n = Db.prototype;
n.v = function() {
  var a = this.h;
  return null != a ? a : this.h = a = ib(this)
};
n.da = function() {
  return 1 === this.count ? null : this.ca
};
n.B = function(a, b) {
  return new Db(this.i, b, this, this.count + 1, null)
};
n.toString = function() {
  return F(this)
};
n.I = function(a, b) {
  return S.a(b, this)
};
n.J = function(a, b, c) {
  return S.c(b, c, this)
};
n.A = function() {
  return this
};
n.C = f("count");
n.O = f("oa");
n.P = function() {
  return 1 === this.count ? K : this.ca
};
n.t = function(a, b) {
  return P(this, b)
};
n.K = function(a, b) {
  return new Db(b, this.oa, this.ca, this.count, this.h)
};
n.L = f("i");
function Eb(a) {
  this.i = a;
  this.n = 0;
  this.f = 65937614
}
n = Eb.prototype;
n.v = aa(0);
n.da = aa(null);
n.B = function(a, b) {
  return new Db(this.i, b, null, 1, null)
};
n.toString = function() {
  return F(this)
};
n.I = function(a, b) {
  return S.a(b, this)
};
n.J = function(a, b, c) {
  return S.c(b, c, this)
};
n.A = aa(null);
n.C = aa(0);
n.O = aa(null);
n.P = function() {
  return K
};
n.t = function(a, b) {
  return P(this, b)
};
n.K = function(a, b) {
  return new Eb(b)
};
n.L = f("i");
var K = new Eb(null);
function Fb(a, b, c, d) {
  this.i = a;
  this.oa = b;
  this.ca = c;
  this.h = d;
  this.n = 0;
  this.f = 65929452
}
n = Fb.prototype;
n.v = function() {
  var a = this.h;
  return null != a ? a : this.h = a = ib(this)
};
n.da = function() {
  return null == this.ca ? null : G(this.ca)
};
n.B = function(a, b) {
  return new Fb(null, b, this, this.h)
};
n.toString = function() {
  return F(this)
};
n.I = function(a, b) {
  return S.a(b, this)
};
n.J = function(a, b, c) {
  return S.c(b, c, this)
};
n.A = function() {
  return this
};
n.O = f("oa");
n.P = function() {
  return null == this.ca ? K : this.ca
};
n.t = function(a, b) {
  return P(this, b)
};
n.K = function(a, b) {
  return new Fb(b, this.oa, this.ca, this.h)
};
n.L = f("i");
function O(a, b) {
  var c = null == b;
  return(c ? c : b && (b.f & 64 || b.sa)) ? new Fb(null, a, b, null) : new Fb(null, a, G(b), null)
}
function W(a, b, c, d) {
  this.ba = a;
  this.name = b;
  this.fa = c;
  this.va = d;
  this.f = 2153775105;
  this.n = 4096
}
n = W.prototype;
n.u = function(a, b) {
  return D(b, [x(":"), x(this.fa)].join(""))
};
n.v = function() {
  null == this.va && (this.va = Bb(R(this.ba), R(this.name)) + 2654435769);
  return this.va
};
n.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return nb.a(c, this);
      case 3:
        return nb.c(c, this, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(y(b)))
};
n.d = function(a) {
  return nb.a(a, this)
};
n.a = function(a, b) {
  return nb.c(a, this, b)
};
n.t = function(a, b) {
  return b instanceof W ? this.fa === b.fa : !1
};
n.toString = function() {
  return[x(":"), x(this.fa)].join("")
};
function Gb(a, b, c, d) {
  this.i = a;
  this.pa = b;
  this.o = c;
  this.h = d;
  this.n = 0;
  this.f = 32374988
}
n = Gb.prototype;
n.v = function() {
  var a = this.h;
  return null != a ? a : this.h = a = ib(this)
};
n.da = function() {
  Fa(this);
  return null == this.o ? null : L(this.o)
};
n.B = function(a, b) {
  return O(b, this)
};
n.toString = function() {
  return F(this)
};
function Hb(a) {
  null != a.pa && (a.o = a.pa.ha ? "" : a.pa.call(null), a.pa = null);
  return a.o
}
n.I = function(a, b) {
  return S.a(b, this)
};
n.J = function(a, b, c) {
  return S.c(b, c, this)
};
n.A = function() {
  Hb(this);
  if(null == this.o) {
    return null
  }
  for(var a = this.o;;) {
    if(a instanceof Gb) {
      a = Hb(a)
    }else {
      return this.o = a, G(this.o)
    }
  }
};
n.O = function() {
  Fa(this);
  return null == this.o ? null : H(this.o)
};
n.P = function() {
  Fa(this);
  return null != this.o ? I(this.o) : K
};
n.t = function(a, b) {
  return P(this, b)
};
n.K = function(a, b) {
  return new Gb(b, this.pa, this.o, this.h)
};
n.L = f("i");
function Jb(a, b) {
  this.xa = a;
  this.end = b;
  this.n = 0;
  this.f = 2
}
Jb.prototype.C = f("end");
Jb.prototype.add = function(a) {
  this.xa[this.end] = a;
  return this.end += 1
};
Jb.prototype.Z = function() {
  var a = new Kb(this.xa, 0, this.end);
  this.xa = null;
  return a
};
function Kb(a, b, c) {
  this.b = a;
  this.p = b;
  this.end = c;
  this.n = 0;
  this.f = 524306
}
n = Kb.prototype;
n.I = function(a, b) {
  return eb.l(this.b, b, this.b[this.p], this.p + 1)
};
n.J = function(a, b, c) {
  return eb.l(this.b, b, c, this.p)
};
n.Ra = function() {
  if(this.p === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Kb(this.b, this.p + 1, this.end)
};
n.N = function(a, b) {
  return this.b[this.p + b]
};
n.S = function(a, b, c) {
  return 0 <= b && b < this.end - this.p ? this.b[this.p + b] : c
};
n.C = function() {
  return this.end - this.p
};
var Lb = function() {
  function a(a, b, c) {
    return new Kb(a, b, c)
  }
  function b(a, b) {
    return new Kb(a, b, a.length)
  }
  function c(a) {
    return new Kb(a, 0, a.length)
  }
  var d = null, d = function(d, g, h) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, g);
      case 3:
        return a.call(this, d, g, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.d = c;
  d.a = b;
  d.c = a;
  return d
}();
function Mb(a, b, c, d) {
  this.Z = a;
  this.W = b;
  this.i = c;
  this.h = d;
  this.f = 31850732;
  this.n = 1536
}
n = Mb.prototype;
n.v = function() {
  var a = this.h;
  return null != a ? a : this.h = a = ib(this)
};
n.da = function() {
  if(1 < ja(this.Z)) {
    return new Mb(Oa(this.Z), this.W, this.i, null)
  }
  var a = Fa(this.W);
  return null == a ? null : a
};
n.B = function(a, b) {
  return O(b, this)
};
n.toString = function() {
  return F(this)
};
n.A = function() {
  return this
};
n.O = function() {
  return z.a(this.Z, 0)
};
n.P = function() {
  return 1 < ja(this.Z) ? new Mb(Oa(this.Z), this.W, this.i, null) : null == this.W ? K : this.W
};
n.ya = function() {
  return null == this.W ? null : this.W
};
n.t = function(a, b) {
  return P(this, b)
};
n.K = function(a, b) {
  return new Mb(this.Z, this.W, b, this.h)
};
n.L = f("i");
n.za = f("Z");
n.Aa = function() {
  return null == this.W ? K : this.W
};
function Nb(a) {
  for(var b = [];;) {
    if(G(a)) {
      b.push(H(a)), a = L(a)
    }else {
      return b
    }
  }
}
function Ob(a, b) {
  if(gb(a)) {
    return Q(a)
  }
  for(var c = a, d = b, e = 0;;) {
    if(0 < d && G(c)) {
      c = L(c), d -= 1, e += 1
    }else {
      return e
    }
  }
}
var Qb = function Pb(b) {
  return null == b ? null : null == L(b) ? G(H(b)) : u ? O(H(b), Pb(L(b))) : null
}, Rb = function() {
  function a(a, b, c, d) {
    return O(a, O(b, O(c, d)))
  }
  function b(a, b, c) {
    return O(a, O(b, c))
  }
  var c = null, d = function() {
    function a(c, d, e, m, p) {
      var q = null;
      4 < arguments.length && (q = N(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, m, q)
    }
    function b(a, c, d, e, g) {
      return O(a, O(c, O(d, O(e, Qb(g)))))
    }
    a.s = 4;
    a.m = function(a) {
      var c = H(a);
      a = L(a);
      var d = H(a);
      a = L(a);
      var e = H(a);
      a = L(a);
      var p = H(a);
      a = I(a);
      return b(c, d, e, p, a)
    };
    a.j = b;
    return a
  }(), c = function(c, g, h, k, l) {
    switch(arguments.length) {
      case 1:
        return G(c);
      case 2:
        return O(c, g);
      case 3:
        return b.call(this, c, g, h);
      case 4:
        return a.call(this, c, g, h, k);
      default:
        return d.j(c, g, h, k, N(arguments, 4))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.s = 4;
  c.m = d.m;
  c.d = function(a) {
    return G(a)
  };
  c.a = function(a, b) {
    return O(a, b)
  };
  c.c = b;
  c.l = a;
  c.j = d.j;
  return c
}();
function Sb(a, b, c) {
  var d = G(c);
  if(0 === b) {
    return a.ha ? "" : a.call(null)
  }
  c = A(d);
  var e = B(d);
  if(1 === b) {
    return a.d ? a.d(c) : a.d ? a.d(c) : a.call(null, c)
  }
  var d = A(e), g = B(e);
  if(2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d)
  }
  var e = A(g), h = B(g);
  if(3 === b) {
    return a.c ? a.c(c, d, e) : a.c ? a.c(c, d, e) : a.call(null, c, d, e)
  }
  var g = A(h), k = B(h);
  if(4 === b) {
    return a.l ? a.l(c, d, e, g) : a.l ? a.l(c, d, e, g) : a.call(null, c, d, e, g)
  }
  h = A(k);
  k = B(k);
  if(5 === b) {
    return a.D ? a.D(c, d, e, g, h) : a.D ? a.D(c, d, e, g, h) : a.call(null, c, d, e, g, h)
  }
  a = A(k);
  var l = B(k);
  if(6 === b) {
    return a.$ ? a.$(c, d, e, g, h, a) : a.$ ? a.$(c, d, e, g, h, a) : a.call(null, c, d, e, g, h, a)
  }
  var k = A(l), m = B(l);
  if(7 === b) {
    return a.ia ? a.ia(c, d, e, g, h, a, k) : a.ia ? a.ia(c, d, e, g, h, a, k) : a.call(null, c, d, e, g, h, a, k)
  }
  var l = A(m), p = B(m);
  if(8 === b) {
    return a.Oa ? a.Oa(c, d, e, g, h, a, k, l) : a.Oa ? a.Oa(c, d, e, g, h, a, k, l) : a.call(null, c, d, e, g, h, a, k, l)
  }
  var m = A(p), q = B(p);
  if(9 === b) {
    return a.Pa ? a.Pa(c, d, e, g, h, a, k, l, m) : a.Pa ? a.Pa(c, d, e, g, h, a, k, l, m) : a.call(null, c, d, e, g, h, a, k, l, m)
  }
  var p = A(q), v = B(q);
  if(10 === b) {
    return a.Da ? a.Da(c, d, e, g, h, a, k, l, m, p) : a.Da ? a.Da(c, d, e, g, h, a, k, l, m, p) : a.call(null, c, d, e, g, h, a, k, l, m, p)
  }
  var q = A(v), C = B(v);
  if(11 === b) {
    return a.Ea ? a.Ea(c, d, e, g, h, a, k, l, m, p, q) : a.Ea ? a.Ea(c, d, e, g, h, a, k, l, m, p, q) : a.call(null, c, d, e, g, h, a, k, l, m, p, q)
  }
  var v = A(C), E = B(C);
  if(12 === b) {
    return a.Fa ? a.Fa(c, d, e, g, h, a, k, l, m, p, q, v) : a.Fa ? a.Fa(c, d, e, g, h, a, k, l, m, p, q, v) : a.call(null, c, d, e, g, h, a, k, l, m, p, q, v)
  }
  var C = A(E), J = B(E);
  if(13 === b) {
    return a.Ga ? a.Ga(c, d, e, g, h, a, k, l, m, p, q, v, C) : a.Ga ? a.Ga(c, d, e, g, h, a, k, l, m, p, q, v, C) : a.call(null, c, d, e, g, h, a, k, l, m, p, q, v, C)
  }
  var E = A(J), M = B(J);
  if(14 === b) {
    return a.Ha ? a.Ha(c, d, e, g, h, a, k, l, m, p, q, v, C, E) : a.Ha ? a.Ha(c, d, e, g, h, a, k, l, m, p, q, v, C, E) : a.call(null, c, d, e, g, h, a, k, l, m, p, q, v, C, E)
  }
  var J = A(M), V = B(M);
  if(15 === b) {
    return a.Ia ? a.Ia(c, d, e, g, h, a, k, l, m, p, q, v, C, E, J) : a.Ia ? a.Ia(c, d, e, g, h, a, k, l, m, p, q, v, C, E, J) : a.call(null, c, d, e, g, h, a, k, l, m, p, q, v, C, E, J)
  }
  var M = A(V), fa = B(V);
  if(16 === b) {
    return a.Ja ? a.Ja(c, d, e, g, h, a, k, l, m, p, q, v, C, E, J, M) : a.Ja ? a.Ja(c, d, e, g, h, a, k, l, m, p, q, v, C, E, J, M) : a.call(null, c, d, e, g, h, a, k, l, m, p, q, v, C, E, J, M)
  }
  var V = A(fa), na = B(fa);
  if(17 === b) {
    return a.Ka ? a.Ka(c, d, e, g, h, a, k, l, m, p, q, v, C, E, J, M, V) : a.Ka ? a.Ka(c, d, e, g, h, a, k, l, m, p, q, v, C, E, J, M, V) : a.call(null, c, d, e, g, h, a, k, l, m, p, q, v, C, E, J, M, V)
  }
  var fa = A(na), fb = B(na);
  if(18 === b) {
    return a.La ? a.La(c, d, e, g, h, a, k, l, m, p, q, v, C, E, J, M, V, fa) : a.La ? a.La(c, d, e, g, h, a, k, l, m, p, q, v, C, E, J, M, V, fa) : a.call(null, c, d, e, g, h, a, k, l, m, p, q, v, C, E, J, M, V, fa)
  }
  na = A(fb);
  fb = B(fb);
  if(19 === b) {
    return a.Ma ? a.Ma(c, d, e, g, h, a, k, l, m, p, q, v, C, E, J, M, V, fa, na) : a.Ma ? a.Ma(c, d, e, g, h, a, k, l, m, p, q, v, C, E, J, M, V, fa, na) : a.call(null, c, d, e, g, h, a, k, l, m, p, q, v, C, E, J, M, V, fa, na)
  }
  var Ib = A(fb);
  B(fb);
  if(20 === b) {
    return a.Na ? a.Na(c, d, e, g, h, a, k, l, m, p, q, v, C, E, J, M, V, fa, na, Ib) : a.Na ? a.Na(c, d, e, g, h, a, k, l, m, p, q, v, C, E, J, M, V, fa, na, Ib) : a.call(null, c, d, e, g, h, a, k, l, m, p, q, v, C, E, J, M, V, fa, na, Ib)
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var Tb = function() {
  function a(a, b, c, d, e) {
    b = Rb.l(b, c, d, e);
    c = a.s;
    return a.m ? (d = Ob(b, c + 1), d <= c ? Sb(a, d, b) : a.m(b)) : a.apply(a, Nb(b))
  }
  function b(a, b, c, d) {
    b = Rb.c(b, c, d);
    c = a.s;
    return a.m ? (d = Ob(b, c + 1), d <= c ? Sb(a, d, b) : a.m(b)) : a.apply(a, Nb(b))
  }
  function c(a, b, c) {
    b = Rb.a(b, c);
    c = a.s;
    if(a.m) {
      var d = Ob(b, c + 1);
      return d <= c ? Sb(a, d, b) : a.m(b)
    }
    return a.apply(a, Nb(b))
  }
  function d(a, b) {
    var c = a.s;
    if(a.m) {
      var d = Ob(b, c + 1);
      return d <= c ? Sb(a, d, b) : a.m(b)
    }
    return a.apply(a, Nb(b))
  }
  var e = null, g = function() {
    function a(c, d, e, g, h, C) {
      var E = null;
      5 < arguments.length && (E = N(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, g, h, E)
    }
    function b(a, c, d, e, g, h) {
      c = O(c, O(d, O(e, O(g, Qb(h)))));
      d = a.s;
      return a.m ? (e = Ob(c, d + 1), e <= d ? Sb(a, e, c) : a.m(c)) : a.apply(a, Nb(c))
    }
    a.s = 5;
    a.m = function(a) {
      var c = H(a);
      a = L(a);
      var d = H(a);
      a = L(a);
      var e = H(a);
      a = L(a);
      var g = H(a);
      a = L(a);
      var h = H(a);
      a = I(a);
      return b(c, d, e, g, h, a)
    };
    a.j = b;
    return a
  }(), e = function(e, k, l, m, p, q) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, m);
      case 5:
        return a.call(this, e, k, l, m, p);
      default:
        return g.j(e, k, l, m, p, N(arguments, 5))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.s = 5;
  e.m = g.m;
  e.a = d;
  e.c = c;
  e.l = b;
  e.D = a;
  e.j = g.j;
  return e
}();
function Ub(a, b) {
  for(;;) {
    if(null == G(b)) {
      return!0
    }
    if(s(a.d ? a.d(H(b)) : a.call(null, H(b)))) {
      var c = a, d = L(b);
      a = c;
      b = d
    }else {
      return u ? !1 : null
    }
  }
}
function Vb(a) {
  return a
}
var Wb = function() {
  function a(a, b, c, e) {
    return new Gb(null, function() {
      var m = G(b), p = G(c), q = G(e);
      return m && p && q ? O(a.c ? a.c(H(m), H(p), H(q)) : a.call(null, H(m), H(p), H(q)), d.l(a, I(m), I(p), I(q))) : null
    }, null, null)
  }
  function b(a, b, c) {
    return new Gb(null, function() {
      var e = G(b), m = G(c);
      return e && m ? O(a.a ? a.a(H(e), H(m)) : a.call(null, H(e), H(m)), d.c(a, I(e), I(m))) : null
    }, null, null)
  }
  function c(a, b) {
    return new Gb(null, function() {
      var c = G(b);
      if(c) {
        if(c && (c.n & 512 || c.Xa)) {
          for(var e = Pa(c), m = Q(e), p = new Jb(Array(m), 0), q = 0;;) {
            if(q < m) {
              var v = a.d ? a.d(z.a(e, q)) : a.call(null, z.a(e, q));
              p.add(v);
              q += 1
            }else {
              break
            }
          }
          e = p.Z();
          c = d.a(a, Qa(c));
          return 0 === ja(e) ? c : new Mb(e, c, null, null)
        }
        return O(a.d ? a.d(H(c)) : a.call(null, H(c)), d.a(a, I(c)))
      }
      return null
    }, null, null)
  }
  var d = null, e = function() {
    function a(c, d, e, g, q) {
      var v = null;
      4 < arguments.length && (v = N(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, g, v)
    }
    function b(a, c, e, g, h) {
      return d.a(function(b) {
        return Tb.a(a, b)
      }, function C(a) {
        return new Gb(null, function() {
          var b = d.a(G, a);
          return Ub(Vb, b) ? O(d.a(H, b), C(d.a(I, b))) : null
        }, null, null)
      }(kb.j(h, g, N([e, c], 0))))
    }
    a.s = 4;
    a.m = function(a) {
      var c = H(a);
      a = L(a);
      var d = H(a);
      a = L(a);
      var e = H(a);
      a = L(a);
      var g = H(a);
      a = I(a);
      return b(c, d, e, g, a)
    };
    a.j = b;
    return a
  }(), d = function(d, h, k, l, m) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, k);
      case 4:
        return a.call(this, d, h, k, l);
      default:
        return e.j(d, h, k, l, N(arguments, 4))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.s = 4;
  d.m = e.m;
  d.a = c;
  d.c = b;
  d.l = a;
  d.j = e.j;
  return d
}(), Yb = function Xb(b, c) {
  return new Gb(null, function() {
    if(0 < b) {
      var d = G(c);
      return d ? O(H(d), Xb(b - 1, I(d))) : null
    }
    return null
  }, null, null)
}, Zb = function() {
  function a(a, b) {
    return Yb(a, c.d(b))
  }
  function b(a) {
    return new Gb(null, function() {
      return O(a.ha ? "" : a.call(null), c.d(a))
    }, null, null)
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.a = a;
  return c
}();
function $b(a, b) {
  this.k = a;
  this.b = b
}
function ac(a) {
  a = a.e;
  return 32 > a ? 0 : a - 1 >>> 5 << 5
}
function bc(a, b, c) {
  for(;;) {
    if(0 === b) {
      return c
    }
    var d = new $b(a, Array(32));
    d.b[0] = c;
    c = d;
    b -= 5
  }
}
var dc = function cc(b, c, d, e) {
  var g = new $b(d.k, y(d.b)), h = b.e - 1 >>> c & 31;
  5 === c ? g.b[h] = e : (d = d.b[h], b = null != d ? cc(b, c - 5, d, e) : bc(null, c - 5, e), g.b[h] = b);
  return g
};
function ec(a, b) {
  throw Error([x("No item "), x(a), x(" in vector of length "), x(b)].join(""));
}
function fc(a, b) {
  if(0 <= b && b < a.e) {
    if(b >= ac(a)) {
      return a.w
    }
    for(var c = a.root, d = a.shift;;) {
      if(0 < d) {
        var e = d - 5, c = c.b[b >>> d & 31], d = e
      }else {
        return c.b
      }
    }
  }else {
    return ec(b, a.e)
  }
}
var hc = function gc(b, c, d, e, g) {
  var h = new $b(d.k, y(d.b));
  if(0 === c) {
    h.b[e & 31] = g
  }else {
    var k = e >>> c & 31;
    b = gc(b, c - 5, d.b[k], e, g);
    h.b[k] = b
  }
  return h
};
function X(a, b, c, d, e, g) {
  this.i = a;
  this.e = b;
  this.shift = c;
  this.root = d;
  this.w = e;
  this.h = g;
  this.n = 4;
  this.f = 167668511
}
n = X.prototype;
n.ra = function() {
  return new ic(this.e, this.shift, jc.d ? jc.d(this.root) : jc.call(null, this.root), kc.d ? kc.d(this.w) : kc.call(null, this.w))
};
n.v = function() {
  var a = this.h;
  return null != a ? a : this.h = a = ib(this)
};
n.F = function(a, b) {
  return z.c(this, b, null)
};
n.G = function(a, b, c) {
  return z.c(this, b, c)
};
n.ma = function(a, b, c) {
  if(0 <= b && b < this.e) {
    return ac(this) <= b ? (a = y(this.w), a[b & 31] = c, new X(this.i, this.e, this.shift, this.root, a, null)) : new X(this.i, this.e, this.shift, hc(this, this.shift, this.root, b, c), this.w, null)
  }
  if(b === this.e) {
    return ka(this, c)
  }
  if(u) {
    throw Error([x("Index "), x(b), x(" out of bounds  [0,"), x(this.e), x("]")].join(""));
  }
  return null
};
n.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.N(null, c);
      case 3:
        return this.S(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(y(b)))
};
n.d = function(a) {
  return this.N(null, a)
};
n.a = function(a, b) {
  return this.S(null, a, b)
};
n.B = function(a, b) {
  if(32 > this.e - ac(this)) {
    for(var c = this.w.length, d = Array(c + 1), e = 0;;) {
      if(e < c) {
        d[e] = this.w[e], e += 1
      }else {
        break
      }
    }
    d[c] = b;
    return new X(this.i, this.e + 1, this.shift, this.root, d, null)
  }
  c = (d = this.e >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = new $b(null, Array(32)), d.b[0] = this.root, e = bc(null, this.shift, new $b(null, this.w)), d.b[1] = e) : d = dc(this, this.shift, this.root, new $b(null, this.w));
  return new X(this.i, this.e + 1, c, d, [b], null)
};
n.Ta = function() {
  return z.a(this, 0)
};
n.Ua = function() {
  return z.a(this, 1)
};
n.toString = function() {
  return F(this)
};
n.I = function(a, b) {
  return db.a(this, b)
};
n.J = function(a, b, c) {
  return db.c(this, b, c)
};
n.A = function() {
  return 0 === this.e ? null : 32 > this.e ? N.d(this.w) : u ? Y.c ? Y.c(this, 0, 0) : Y.call(null, this, 0, 0) : null
};
n.C = f("e");
n.Qa = function(a, b, c) {
  return qa(this, b, c)
};
n.t = function(a, b) {
  return P(this, b)
};
n.K = function(a, b) {
  return new X(b, this.e, this.shift, this.root, this.w, this.h)
};
n.L = f("i");
n.N = function(a, b) {
  return fc(this, b)[b & 31]
};
n.S = function(a, b, c) {
  return 0 <= b && b < this.e ? z.a(this, b) : c
};
var lc = new $b(null, Array(32));
function mc(a, b, c, d, e, g) {
  this.r = a;
  this.R = b;
  this.g = c;
  this.p = d;
  this.i = e;
  this.h = g;
  this.f = 32243948;
  this.n = 1536
}
n = mc.prototype;
n.v = function() {
  var a = this.h;
  return null != a ? a : this.h = a = ib(this)
};
n.da = function() {
  if(this.p + 1 < this.R.length) {
    var a = Y.l ? Y.l(this.r, this.R, this.g, this.p + 1) : Y.call(null, this.r, this.R, this.g, this.p + 1);
    return null == a ? null : a
  }
  return Ra(this)
};
n.B = function(a, b) {
  return O(b, this)
};
n.toString = function() {
  return F(this)
};
n.I = function(a, b) {
  return db.a(nc.c ? nc.c(this.r, this.g + this.p, Q(this.r)) : nc.call(null, this.r, this.g + this.p, Q(this.r)), b)
};
n.J = function(a, b, c) {
  return db.c(nc.c ? nc.c(this.r, this.g + this.p, Q(this.r)) : nc.call(null, this.r, this.g + this.p, Q(this.r)), b, c)
};
n.A = function() {
  return this
};
n.O = function() {
  return this.R[this.p]
};
n.P = function() {
  if(this.p + 1 < this.R.length) {
    var a = Y.l ? Y.l(this.r, this.R, this.g, this.p + 1) : Y.call(null, this.r, this.R, this.g, this.p + 1);
    return null == a ? K : a
  }
  return Qa(this)
};
n.ya = function() {
  var a = this.R.length, a = this.g + a < ja(this.r) ? Y.c ? Y.c(this.r, this.g + a, 0) : Y.call(null, this.r, this.g + a, 0) : null;
  return null == a ? null : a
};
n.t = function(a, b) {
  return P(this, b)
};
n.K = function(a, b) {
  return Y.D ? Y.D(this.r, this.R, this.g, this.p, b) : Y.call(null, this.r, this.R, this.g, this.p, b)
};
n.za = function() {
  return Lb.a(this.R, this.p)
};
n.Aa = function() {
  var a = this.R.length, a = this.g + a < ja(this.r) ? Y.c ? Y.c(this.r, this.g + a, 0) : Y.call(null, this.r, this.g + a, 0) : null;
  return null == a ? K : a
};
var Y = function() {
  function a(a, b, c, d, l) {
    return new mc(a, b, c, d, l, null)
  }
  function b(a, b, c, d) {
    return new mc(a, b, c, d, null, null)
  }
  function c(a, b, c) {
    return new mc(a, fc(a, b), b, c, null, null)
  }
  var d = null, d = function(d, g, h, k, l) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, g, h);
      case 4:
        return b.call(this, d, g, h, k);
      case 5:
        return a.call(this, d, g, h, k, l)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.c = c;
  d.l = b;
  d.D = a;
  return d
}();
function oc(a, b, c, d, e) {
  this.i = a;
  this.X = b;
  this.start = c;
  this.end = d;
  this.h = e;
  this.n = 0;
  this.f = 32400159
}
n = oc.prototype;
n.v = function() {
  var a = this.h;
  return null != a ? a : this.h = a = ib(this)
};
n.F = function(a, b) {
  return z.c(this, b, null)
};
n.G = function(a, b, c) {
  return z.c(this, b, c)
};
n.ma = function(a, b, c) {
  var d = this, e = d.start + b;
  return pc.D ? pc.D(d.i, pb.c(d.X, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b
  }(), null) : pc.call(null, d.i, pb.c(d.X, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b
  }(), null)
};
n.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.N(null, c);
      case 3:
        return this.S(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(y(b)))
};
n.d = function(a) {
  return this.N(null, a)
};
n.a = function(a, b) {
  return this.S(null, a, b)
};
n.B = function(a, b) {
  return pc.D ? pc.D(this.i, wa(this.X, this.end, b), this.start, this.end + 1, null) : pc.call(null, this.i, wa(this.X, this.end, b), this.start, this.end + 1, null)
};
n.toString = function() {
  return F(this)
};
n.I = function(a, b) {
  return db.a(this, b)
};
n.J = function(a, b, c) {
  return db.c(this, b, c)
};
n.A = function() {
  var a = this;
  return function c(d) {
    return d === a.end ? null : O(z.a(a.X, d), new Gb(null, function() {
      return c(d + 1)
    }, null, null))
  }(a.start)
};
n.C = function() {
  return this.end - this.start
};
n.Qa = function(a, b, c) {
  return qa(this, b, c)
};
n.t = function(a, b) {
  return P(this, b)
};
n.K = function(a, b) {
  return pc.D ? pc.D(b, this.X, this.start, this.end, this.h) : pc.call(null, b, this.X, this.start, this.end, this.h)
};
n.L = f("i");
n.N = function(a, b) {
  return 0 > b || this.end <= this.start + b ? ec(b, this.end - this.start) : z.a(this.X, this.start + b)
};
n.S = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : z.c(this.X, this.start + b, c)
};
function pc(a, b, c, d, e) {
  for(;;) {
    if(b instanceof oc) {
      c = b.start + c, d = b.start + d, b = b.X
    }else {
      var g = Q(b);
      if(0 > c || 0 > d || c > g || d > g) {
        throw Error("Index out of bounds");
      }
      return new oc(a, b, c, d, e)
    }
  }
}
var nc = function() {
  function a(a, b, c) {
    return pc(null, a, b, c, null)
  }
  function b(a, b) {
    return c.c(a, b, Q(a))
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}();
function jc(a) {
  return new $b({}, y(a.b))
}
function kc(a) {
  var b = Array(32);
  vb(a, 0, b, 0, a.length);
  return b
}
var rc = function qc(b, c, d, e) {
  d = b.root.k === d.k ? d : new $b(b.root.k, y(d.b));
  var g = b.e - 1 >>> c & 31;
  if(5 === c) {
    b = e
  }else {
    var h = d.b[g];
    b = null != h ? qc(b, c - 5, h, e) : bc(b.root.k, c - 5, e)
  }
  d.b[g] = b;
  return d
};
function ic(a, b, c, d) {
  this.e = a;
  this.shift = b;
  this.root = c;
  this.w = d;
  this.f = 275;
  this.n = 88
}
n = ic.prototype;
n.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.F(null, c);
      case 3:
        return this.G(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(y(b)))
};
n.d = function(a) {
  return this.F(null, a)
};
n.a = function(a, b) {
  return this.G(null, a, b)
};
n.F = function(a, b) {
  return z.c(this, b, null)
};
n.G = function(a, b, c) {
  return z.c(this, b, c)
};
n.N = function(a, b) {
  if(this.root.k) {
    return fc(this, b)[b & 31]
  }
  throw Error("nth after persistent!");
};
n.S = function(a, b, c) {
  return 0 <= b && b < this.e ? z.a(this, b) : c
};
n.C = function() {
  if(this.root.k) {
    return this.e
  }
  throw Error("count after persistent!");
};
n.Va = function(a, b, c) {
  var d = this;
  if(d.root.k) {
    if(0 <= b && b < d.e) {
      return ac(this) <= b ? d.w[b & 31] = c : (a = function g(a, k) {
        var l = d.root.k === k.k ? k : new $b(d.root.k, y(k.b));
        if(0 === a) {
          l.b[b & 31] = c
        }else {
          var m = b >>> a & 31, p = g(a - 5, l.b[m]);
          l.b[m] = p
        }
        return l
      }.call(null, d.shift, d.root), d.root = a), this
    }
    if(b === d.e) {
      return Ka(this, c)
    }
    if(u) {
      throw Error([x("Index "), x(b), x(" out of bounds for TransientVector of length"), x(d.e)].join(""));
    }
    return null
  }
  throw Error("assoc! after persistent!");
};
n.na = function(a, b, c) {
  return Na(this, b, c)
};
n.ta = function(a, b) {
  if(this.root.k) {
    if(32 > this.e - ac(this)) {
      this.w[this.e & 31] = b
    }else {
      var c = new $b(this.root.k, this.w), d = Array(32);
      d[0] = b;
      this.w = d;
      if(this.e >>> 5 > 1 << this.shift) {
        var d = Array(32), e = this.shift + 5;
        d[0] = this.root;
        d[1] = bc(this.root.k, this.shift, c);
        this.root = new $b(this.root.k, d);
        this.shift = e
      }else {
        this.root = rc(this, this.shift, this.root, c)
      }
    }
    this.e += 1;
    return this
  }
  throw Error("conj! after persistent!");
};
n.ua = function() {
  if(this.root.k) {
    this.root.k = null;
    var a = this.e - ac(this), b = Array(a);
    vb(this.w, 0, b, 0, a);
    return new X(null, this.e, this.shift, this.root, b, null)
  }
  throw Error("persistent! called twice");
};
function sc() {
  this.n = 0;
  this.f = 2097152
}
sc.prototype.t = aa(!1);
var tc = new sc;
function uc(a, b) {
  return wb((null == b ? 0 : b ? b.f & 1024 || b.kb || (b.f ? 0 : t(ra, b)) : t(ra, b)) ? Q(a) === Q(b) ? Ub(Vb, Wb.a(function(a) {
    return $a.a(nb.c(b, H(a), tc), H(L(a)))
  }, a)) : null : null)
}
function vc(a, b) {
  var c = a.b;
  if(b instanceof W) {
    a: {
      for(var d = c.length, e = b.fa, g = 0;;) {
        if(d <= g) {
          c = -1;
          break a
        }
        var h = c[g];
        if(h instanceof W && e === h.fa) {
          c = g;
          break a
        }
        if(u) {
          g += 2
        }else {
          c = null;
          break a
        }
      }
      c = void 0
    }
  }else {
    if("string" == typeof b || "number" === typeof b) {
      a: {
        d = c.length;
        for(e = 0;;) {
          if(d <= e) {
            c = -1;
            break a
          }
          if(b === c[e]) {
            c = e;
            break a
          }
          if(u) {
            e += 2
          }else {
            c = null;
            break a
          }
        }
        c = void 0
      }
    }else {
      if(null == b) {
        a: {
          d = c.length;
          for(e = 0;;) {
            if(d <= e) {
              c = -1;
              break a
            }
            if(null == c[e]) {
              c = e;
              break a
            }
            if(u) {
              e += 2
            }else {
              c = null;
              break a
            }
          }
          c = void 0
        }
      }else {
        if(u) {
          a: {
            d = c.length;
            for(e = 0;;) {
              if(d <= e) {
                c = -1;
                break a
              }
              if($a.a(b, c[e])) {
                c = e;
                break a
              }
              if(u) {
                e += 2
              }else {
                c = null;
                break a
              }
            }
            c = void 0
          }
        }else {
          c = null
        }
      }
    }
  }
  return c
}
function wc(a, b, c) {
  this.b = a;
  this.g = b;
  this.wa = c;
  this.n = 0;
  this.f = 32374990
}
n = wc.prototype;
n.v = function() {
  return ib(this)
};
n.da = function() {
  return this.g < this.b.length - 2 ? new wc(this.b, this.g + 2, this.wa) : null
};
n.B = function(a, b) {
  return O(b, this)
};
n.toString = function() {
  return F(this)
};
n.I = function(a, b) {
  return S.a(b, this)
};
n.J = function(a, b, c) {
  return S.c(b, c, this)
};
n.A = function() {
  return this
};
n.C = function() {
  return(this.b.length - this.g) / 2
};
n.O = function() {
  return new X(null, 2, 5, lc, [this.b[this.g], this.b[this.g + 1]], null)
};
n.P = function() {
  return this.g < this.b.length - 2 ? new wc(this.b, this.g + 2, this.wa) : K
};
n.t = function(a, b) {
  return P(this, b)
};
n.K = function(a, b) {
  return new wc(this.b, this.g, b)
};
n.L = f("wa");
function Ta(a, b, c, d) {
  this.i = a;
  this.e = b;
  this.b = c;
  this.h = d;
  this.n = 4;
  this.f = 16123663
}
n = Ta.prototype;
n.ra = function() {
  return new xc({}, this.b.length, y(this.b))
};
n.v = function() {
  var a = this.h;
  return null != a ? a : this.h = a = Cb(this)
};
n.F = function(a, b) {
  return pa.c(this, b, null)
};
n.G = function(a, b, c) {
  a = vc(this, b);
  return-1 === a ? c : this.b[a + 1]
};
n.ma = function(a, b, c) {
  a = vc(this, b);
  if(-1 === a) {
    if(this.e < yc) {
      a = this.b;
      for(var d = a.length, e = Array(d + 2), g = 0;;) {
        if(g < d) {
          e[g] = a[g], g += 1
        }else {
          break
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new Ta(this.i, this.e + 1, e, null)
    }
    a = za;
    d = qa;
    e = zc;
    null != e ? e && (e.n & 4 || e.ib) ? (e = yb.c(Ka, Ja(e), this), e = La(e)) : e = yb.c(ka, e, this) : e = yb.c(kb, K, this);
    return a(d(e, b, c), this.i)
  }
  return c === this.b[a + 1] ? this : u ? (b = y(this.b), b[a + 1] = c, new Ta(this.i, this.e, b, null)) : null
};
n.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.F(null, c);
      case 3:
        return this.G(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(y(b)))
};
n.d = function(a) {
  return this.F(null, a)
};
n.a = function(a, b) {
  return this.G(null, a, b)
};
n.B = function(a, b) {
  return ub(b) ? qa(this, z.a(b, 0), z.a(b, 1)) : yb.c(ka, this, b)
};
n.toString = function() {
  return F(this)
};
n.A = function() {
  return 0 <= this.b.length - 2 ? new wc(this.b, 0, null) : null
};
n.C = f("e");
n.t = function(a, b) {
  return uc(this, b)
};
n.K = function(a, b) {
  return new Ta(b, this.e, this.b, this.h)
};
n.L = f("i");
var yc = 8;
function xc(a, b, c) {
  this.ja = a;
  this.aa = b;
  this.b = c;
  this.n = 56;
  this.f = 258
}
n = xc.prototype;
n.na = function(a, b, c) {
  if(s(this.ja)) {
    a = vc(this, b);
    if(-1 === a) {
      if(this.aa + 2 <= 2 * yc) {
        return this.aa += 2, this.b.push(b), this.b.push(c), this
      }
      a = Ac.a ? Ac.a(this.aa, this.b) : Ac.call(null, this.aa, this.b);
      return Ma(a, b, c)
    }
    c !== this.b[a + 1] && (this.b[a + 1] = c);
    return this
  }
  throw Error("assoc! after persistent!");
};
n.ta = function(a, b) {
  if(s(this.ja)) {
    if(b ? b.f & 2048 || b.$a || (b.f ? 0 : t(sa, b)) : t(sa, b)) {
      return Ma(this, T.d ? T.d(b) : T.call(null, b), U.d ? U.d(b) : U.call(null, b))
    }
    for(var c = G(b), d = this;;) {
      var e = H(c);
      if(s(e)) {
        c = L(c), d = Ma(d, T.d ? T.d(e) : T.call(null, e), U.d ? U.d(e) : U.call(null, e))
      }else {
        return d
      }
    }
  }else {
    throw Error("conj! after persistent!");
  }
};
n.ua = function() {
  if(s(this.ja)) {
    return this.ja = !1, new Ta(null, zb((this.aa - this.aa % 2) / 2), this.b, null)
  }
  throw Error("persistent! called twice");
};
n.F = function(a, b) {
  return pa.c(this, b, null)
};
n.G = function(a, b, c) {
  if(s(this.ja)) {
    return a = vc(this, b), -1 === a ? c : this.b[a + 1]
  }
  throw Error("lookup after persistent!");
};
n.C = function() {
  if(s(this.ja)) {
    return zb((this.aa - this.aa % 2) / 2)
  }
  throw Error("count after persistent!");
};
function Ac(a, b) {
  for(var c = Ja(zc), d = 0;;) {
    if(d < a) {
      c = Ma(c, b[d], b[d + 1]), d += 2
    }else {
      return c
    }
  }
}
function Bc() {
  this.Y = !1
}
function Cc(a, b) {
  return a === b ? !0 : a === b || a instanceof W && b instanceof W && a.fa === b.fa ? !0 : u ? $a.a(a, b) : null
}
var Dc = function() {
  function a(a, b, c, h, k) {
    a = y(a);
    a[b] = c;
    a[h] = k;
    return a
  }
  function b(a, b, c) {
    a = y(a);
    a[b] = c;
    return a
  }
  var c = null, c = function(c, e, g, h, k) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, g);
      case 5:
        return a.call(this, c, e, g, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.D = a;
  return c
}(), Ec = function() {
  function a(a, b, c, h, k, l) {
    a = a.ka(b);
    a.b[c] = h;
    a.b[k] = l;
    return a
  }
  function b(a, b, c, h) {
    a = a.ka(b);
    a.b[c] = h;
    return a
  }
  var c = null, c = function(c, e, g, h, k, l) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, e, g, h);
      case 6:
        return a.call(this, c, e, g, h, k, l)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.l = b;
  c.$ = a;
  return c
}();
function Fc(a, b, c) {
  this.k = a;
  this.q = b;
  this.b = c
}
n = Fc.prototype;
n.U = function(a, b, c, d, e, g) {
  var h = 1 << (c >>> b & 31), k = Ab(this.q & h - 1);
  if(0 === (this.q & h)) {
    var l = Ab(this.q);
    if(2 * l < this.b.length) {
      a = this.ka(a);
      b = a.b;
      g.Y = !0;
      a: {
        for(c = 2 * (l - k), g = 2 * k + (c - 1), l = 2 * (k + 1) + (c - 1);;) {
          if(0 === c) {
            break a
          }
          b[l] = b[g];
          l -= 1;
          c -= 1;
          g -= 1
        }
      }
      b[2 * k] = d;
      b[2 * k + 1] = e;
      a.q |= h;
      return a
    }
    if(16 <= l) {
      k = Array(32);
      k[c >>> b & 31] = Gc.U(a, b + 5, c, d, e, g);
      for(e = d = 0;;) {
        if(32 > d) {
          0 !== (this.q >>> d & 1) && (k[d] = null != this.b[e] ? Gc.U(a, b + 5, R(this.b[e]), this.b[e], this.b[e + 1], g) : this.b[e + 1], e += 2), d += 1
        }else {
          break
        }
      }
      return new Hc(a, l + 1, k)
    }
    return u ? (b = Array(2 * (l + 4)), vb(this.b, 0, b, 0, 2 * k), b[2 * k] = d, b[2 * k + 1] = e, vb(this.b, 2 * k, b, 2 * (k + 1), 2 * (l - k)), g.Y = !0, a = this.ka(a), a.b = b, a.q |= h, a) : null
  }
  l = this.b[2 * k];
  h = this.b[2 * k + 1];
  return null == l ? (l = h.U(a, b + 5, c, d, e, g), l === h ? this : Ec.l(this, a, 2 * k + 1, l)) : Cc(d, l) ? e === h ? this : Ec.l(this, a, 2 * k + 1, e) : u ? (g.Y = !0, Ec.$(this, a, 2 * k, null, 2 * k + 1, Ic.ia ? Ic.ia(a, b + 5, l, h, c, d, e) : Ic.call(null, a, b + 5, l, h, c, d, e))) : null
};
n.qa = function() {
  return Jc.d ? Jc.d(this.b) : Jc.call(null, this.b)
};
n.ka = function(a) {
  if(a === this.k) {
    return this
  }
  var b = Ab(this.q), c = Array(0 > b ? 4 : 2 * (b + 1));
  vb(this.b, 0, c, 0, 2 * b);
  return new Fc(a, this.q, c)
};
n.T = function(a, b, c, d, e) {
  var g = 1 << (b >>> a & 31), h = Ab(this.q & g - 1);
  if(0 === (this.q & g)) {
    var k = Ab(this.q);
    if(16 <= k) {
      h = Array(32);
      h[b >>> a & 31] = Gc.T(a + 5, b, c, d, e);
      for(d = c = 0;;) {
        if(32 > c) {
          0 !== (this.q >>> c & 1) && (h[c] = null != this.b[d] ? Gc.T(a + 5, R(this.b[d]), this.b[d], this.b[d + 1], e) : this.b[d + 1], d += 2), c += 1
        }else {
          break
        }
      }
      return new Hc(null, k + 1, h)
    }
    a = Array(2 * (k + 1));
    vb(this.b, 0, a, 0, 2 * h);
    a[2 * h] = c;
    a[2 * h + 1] = d;
    vb(this.b, 2 * h, a, 2 * (h + 1), 2 * (k - h));
    e.Y = !0;
    return new Fc(null, this.q | g, a)
  }
  k = this.b[2 * h];
  g = this.b[2 * h + 1];
  return null == k ? (k = g.T(a + 5, b, c, d, e), k === g ? this : new Fc(null, this.q, Dc.c(this.b, 2 * h + 1, k))) : Cc(c, k) ? d === g ? this : new Fc(null, this.q, Dc.c(this.b, 2 * h + 1, d)) : u ? (e.Y = !0, new Fc(null, this.q, Dc.D(this.b, 2 * h, null, 2 * h + 1, Ic.$ ? Ic.$(a + 5, k, g, b, c, d) : Ic.call(null, a + 5, k, g, b, c, d)))) : null
};
n.ga = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if(0 === (this.q & e)) {
    return d
  }
  var g = Ab(this.q & e - 1), e = this.b[2 * g], g = this.b[2 * g + 1];
  return null == e ? g.ga(a + 5, b, c, d) : Cc(c, e) ? g : u ? d : null
};
var Gc = new Fc(null, 0, []);
function Hc(a, b, c) {
  this.k = a;
  this.e = b;
  this.b = c
}
n = Hc.prototype;
n.U = function(a, b, c, d, e, g) {
  var h = c >>> b & 31, k = this.b[h];
  if(null == k) {
    return a = Ec.l(this, a, h, Gc.U(a, b + 5, c, d, e, g)), a.e += 1, a
  }
  b = k.U(a, b + 5, c, d, e, g);
  return b === k ? this : Ec.l(this, a, h, b)
};
n.qa = function() {
  return Kc.d ? Kc.d(this.b) : Kc.call(null, this.b)
};
n.ka = function(a) {
  return a === this.k ? this : new Hc(a, this.e, y(this.b))
};
n.T = function(a, b, c, d, e) {
  var g = b >>> a & 31, h = this.b[g];
  if(null == h) {
    return new Hc(null, this.e + 1, Dc.c(this.b, g, Gc.T(a + 5, b, c, d, e)))
  }
  a = h.T(a + 5, b, c, d, e);
  return a === h ? this : new Hc(null, this.e, Dc.c(this.b, g, a))
};
n.ga = function(a, b, c, d) {
  var e = this.b[b >>> a & 31];
  return null != e ? e.ga(a + 5, b, c, d) : d
};
function Lc(a, b, c) {
  b *= 2;
  for(var d = 0;;) {
    if(d < b) {
      if(Cc(c, a[d])) {
        return d
      }
      d += 2
    }else {
      return-1
    }
  }
}
function Mc(a, b, c, d) {
  this.k = a;
  this.ea = b;
  this.e = c;
  this.b = d
}
n = Mc.prototype;
n.U = function(a, b, c, d, e, g) {
  if(c === this.ea) {
    b = Lc(this.b, this.e, d);
    if(-1 === b) {
      if(this.b.length > 2 * this.e) {
        return a = Ec.$(this, a, 2 * this.e, d, 2 * this.e + 1, e), g.Y = !0, a.e += 1, a
      }
      c = this.b.length;
      b = Array(c + 2);
      vb(this.b, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      g.Y = !0;
      g = this.e + 1;
      a === this.k ? (this.b = b, this.e = g, a = this) : a = new Mc(this.k, this.ea, g, b);
      return a
    }
    return this.b[b + 1] === e ? this : Ec.l(this, a, b + 1, e)
  }
  return(new Fc(a, 1 << (this.ea >>> b & 31), [null, this, null, null])).U(a, b, c, d, e, g)
};
n.qa = function() {
  return Jc.d ? Jc.d(this.b) : Jc.call(null, this.b)
};
n.ka = function(a) {
  if(a === this.k) {
    return this
  }
  var b = Array(2 * (this.e + 1));
  vb(this.b, 0, b, 0, 2 * this.e);
  return new Mc(a, this.ea, this.e, b)
};
n.T = function(a, b, c, d, e) {
  return b === this.ea ? (a = Lc(this.b, this.e, c), -1 === a ? (a = 2 * this.e, b = Array(a + 2), vb(this.b, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.Y = !0, new Mc(null, this.ea, this.e + 1, b)) : $a.a(this.b[a], d) ? this : new Mc(null, this.ea, this.e, Dc.c(this.b, a + 1, d))) : (new Fc(null, 1 << (this.ea >>> a & 31), [null, this])).T(a, b, c, d, e)
};
n.ga = function(a, b, c, d) {
  a = Lc(this.b, this.e, c);
  return 0 > a ? d : Cc(c, this.b[a]) ? this.b[a + 1] : u ? d : null
};
var Ic = function() {
  function a(a, b, c, h, k, l, m) {
    var p = R(c);
    if(p === k) {
      return new Mc(null, p, 2, [c, h, l, m])
    }
    var q = new Bc;
    return Gc.U(a, b, p, c, h, q).U(a, b, k, l, m, q)
  }
  function b(a, b, c, h, k, l) {
    var m = R(b);
    if(m === h) {
      return new Mc(null, m, 2, [b, c, k, l])
    }
    var p = new Bc;
    return Gc.T(a, m, b, c, p).T(a, h, k, l, p)
  }
  var c = null, c = function(c, e, g, h, k, l, m) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, g, h, k, l);
      case 7:
        return a.call(this, c, e, g, h, k, l, m)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.$ = b;
  c.ia = a;
  return c
}();
function Nc(a, b, c, d, e) {
  this.i = a;
  this.V = b;
  this.g = c;
  this.o = d;
  this.h = e;
  this.n = 0;
  this.f = 32374860
}
n = Nc.prototype;
n.v = function() {
  var a = this.h;
  return null != a ? a : this.h = a = ib(this)
};
n.B = function(a, b) {
  return O(b, this)
};
n.toString = function() {
  return F(this)
};
n.I = function(a, b) {
  return S.a(b, this)
};
n.J = function(a, b, c) {
  return S.c(b, c, this)
};
n.A = function() {
  return this
};
n.O = function() {
  return null == this.o ? new X(null, 2, 5, lc, [this.V[this.g], this.V[this.g + 1]], null) : H(this.o)
};
n.P = function() {
  return null == this.o ? Jc.c ? Jc.c(this.V, this.g + 2, null) : Jc.call(null, this.V, this.g + 2, null) : Jc.c ? Jc.c(this.V, this.g, L(this.o)) : Jc.call(null, this.V, this.g, L(this.o))
};
n.t = function(a, b) {
  return P(this, b)
};
n.K = function(a, b) {
  return new Nc(b, this.V, this.g, this.o, this.h)
};
n.L = f("i");
var Jc = function() {
  function a(a, b, c) {
    if(null == c) {
      for(c = a.length;;) {
        if(b < c) {
          if(null != a[b]) {
            return new Nc(null, a, b, null, null)
          }
          var h = a[b + 1];
          if(s(h) && (h = h.qa(), s(h))) {
            return new Nc(null, a, b + 2, h, null)
          }
          b += 2
        }else {
          return null
        }
      }
    }else {
      return new Nc(null, a, b, c, null)
    }
  }
  function b(a) {
    return c.c(a, 0, null)
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.c = a;
  return c
}();
function Oc(a, b, c, d, e) {
  this.i = a;
  this.V = b;
  this.g = c;
  this.o = d;
  this.h = e;
  this.n = 0;
  this.f = 32374860
}
n = Oc.prototype;
n.v = function() {
  var a = this.h;
  return null != a ? a : this.h = a = ib(this)
};
n.B = function(a, b) {
  return O(b, this)
};
n.toString = function() {
  return F(this)
};
n.I = function(a, b) {
  return S.a(b, this)
};
n.J = function(a, b, c) {
  return S.c(b, c, this)
};
n.A = function() {
  return this
};
n.O = function() {
  return H(this.o)
};
n.P = function() {
  return Kc.l ? Kc.l(null, this.V, this.g, L(this.o)) : Kc.call(null, null, this.V, this.g, L(this.o))
};
n.t = function(a, b) {
  return P(this, b)
};
n.K = function(a, b) {
  return new Oc(b, this.V, this.g, this.o, this.h)
};
n.L = f("i");
var Kc = function() {
  function a(a, b, c, h) {
    if(null == h) {
      for(h = b.length;;) {
        if(c < h) {
          var k = b[c];
          if(s(k) && (k = k.qa(), s(k))) {
            return new Oc(a, b, c + 1, k, null)
          }
          c += 1
        }else {
          return null
        }
      }
    }else {
      return new Oc(a, b, c, h, null)
    }
  }
  function b(a) {
    return c.l(null, a, 0, null)
  }
  var c = null, c = function(c, e, g, h) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, e, g, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.l = a;
  return c
}();
function Pc(a, b, c, d, e, g) {
  this.i = a;
  this.e = b;
  this.root = c;
  this.M = d;
  this.Q = e;
  this.h = g;
  this.n = 4;
  this.f = 16123663
}
n = Pc.prototype;
n.ra = function() {
  return new Qc({}, this.root, this.e, this.M, this.Q)
};
n.v = function() {
  var a = this.h;
  return null != a ? a : this.h = a = Cb(this)
};
n.F = function(a, b) {
  return pa.c(this, b, null)
};
n.G = function(a, b, c) {
  return null == b ? this.M ? this.Q : c : null == this.root ? c : u ? this.root.ga(0, R(b), b, c) : null
};
n.ma = function(a, b, c) {
  if(null == b) {
    return this.M && c === this.Q ? this : new Pc(this.i, this.M ? this.e : this.e + 1, this.root, !0, c, null)
  }
  a = new Bc;
  b = (null == this.root ? Gc : this.root).T(0, R(b), b, c, a);
  return b === this.root ? this : new Pc(this.i, a.Y ? this.e + 1 : this.e, b, this.M, this.Q, null)
};
n.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.F(null, c);
      case 3:
        return this.G(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(y(b)))
};
n.d = function(a) {
  return this.F(null, a)
};
n.a = function(a, b) {
  return this.G(null, a, b)
};
n.B = function(a, b) {
  return ub(b) ? qa(this, z.a(b, 0), z.a(b, 1)) : yb.c(ka, this, b)
};
n.toString = function() {
  return F(this)
};
n.A = function() {
  if(0 < this.e) {
    var a = null != this.root ? this.root.qa() : null;
    return this.M ? O(new X(null, 2, 5, lc, [null, this.Q], null), a) : a
  }
  return null
};
n.C = f("e");
n.t = function(a, b) {
  return uc(this, b)
};
n.K = function(a, b) {
  return new Pc(b, this.e, this.root, this.M, this.Q, this.h)
};
n.L = f("i");
var zc = new Pc(null, 0, null, !1, null, 0);
function ob(a, b) {
  for(var c = a.length, d = 0, e = Ja(zc);;) {
    if(d < c) {
      var g = d + 1, e = e.na(null, a[d], b[d]), d = g
    }else {
      return La(e)
    }
  }
}
function Qc(a, b, c, d, e) {
  this.k = a;
  this.root = b;
  this.count = c;
  this.M = d;
  this.Q = e;
  this.n = 56;
  this.f = 258
}
n = Qc.prototype;
n.na = function(a, b, c) {
  return Rc(this, b, c)
};
n.ta = function(a, b) {
  var c;
  a: {
    if(this.k) {
      if(b ? b.f & 2048 || b.$a || (b.f ? 0 : t(sa, b)) : t(sa, b)) {
        c = Rc(this, T.d ? T.d(b) : T.call(null, b), U.d ? U.d(b) : U.call(null, b));
        break a
      }
      c = G(b);
      for(var d = this;;) {
        var e = H(c);
        if(s(e)) {
          c = L(c), d = Rc(d, T.d ? T.d(e) : T.call(null, e), U.d ? U.d(e) : U.call(null, e))
        }else {
          c = d;
          break a
        }
      }
    }else {
      throw Error("conj! after persistent");
    }
    c = void 0
  }
  return c
};
n.ua = function() {
  var a;
  if(this.k) {
    this.k = null, a = new Pc(null, this.count, this.root, this.M, this.Q, null)
  }else {
    throw Error("persistent! called twice");
  }
  return a
};
n.F = function(a, b) {
  return null == b ? this.M ? this.Q : null : null == this.root ? null : this.root.ga(0, R(b), b)
};
n.G = function(a, b, c) {
  return null == b ? this.M ? this.Q : c : null == this.root ? c : this.root.ga(0, R(b), b, c)
};
n.C = function() {
  if(this.k) {
    return this.count
  }
  throw Error("count after persistent!");
};
function Rc(a, b, c) {
  if(a.k) {
    if(null == b) {
      a.Q !== c && (a.Q = c), a.M || (a.count += 1, a.M = !0)
    }else {
      var d = new Bc;
      b = (null == a.root ? Gc : a.root).U(a.k, 0, R(b), b, c, d);
      b !== a.root && (a.root = b);
      d.Y && (a.count += 1)
    }
    return a
  }
  throw Error("assoc! after persistent!");
}
function T(a) {
  return ta(a)
}
function U(a) {
  return ua(a)
}
var Sc = function() {
  function a(a, b) {
    for(;;) {
      if(G(b) && 0 < a) {
        var c = a - 1, h = L(b);
        a = c;
        b = h
      }else {
        return null
      }
    }
  }
  function b(a) {
    for(;;) {
      if(G(a)) {
        a = L(a)
      }else {
        return null
      }
    }
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.a = a;
  return c
}(), Tc = function() {
  function a(a, b) {
    Sc.a(a, b);
    return b
  }
  function b(a) {
    Sc.d(a);
    return a
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.a = a;
  return c
}();
function Z(a, b, c, d, e, g, h) {
  D(a, c);
  G(h) && (b.c ? b.c(H(h), a, g) : b.call(null, H(h), a, g));
  c = L(h);
  for(h = Ya.d(g);c && (null == h || 0 !== h);) {
    D(a, d), b.c ? b.c(H(c), a, g) : b.call(null, H(c), a, g), c = L(c), h -= 1
  }
  s(Ya.d(g)) && (D(a, d), b.c ? b.c("...", a, g) : b.call(null, "...", a, g));
  return D(a, e)
}
var Uc = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = N(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e)
  }
  function b(a, b) {
    for(var e = G(b), g = null, h = 0, k = 0;;) {
      if(k < h) {
        var l = g.N(null, k);
        D(a, l);
        k += 1
      }else {
        if(e = G(e)) {
          (g = e) && (g.n & 512 || g.Xa) ? (e = Pa(g), h = Qa(g), g = e, l = Q(e), e = h, h = l) : (l = H(g), D(a, l), e = L(g), g = null, h = 0), k = 0
        }else {
          return null
        }
      }
    }
  }
  a.s = 1;
  a.m = function(a) {
    var d = H(a);
    a = I(a);
    return b(d, a)
  };
  a.j = b;
  return a
}(), Vc = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Wc(a) {
  return[x('"'), x(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return Vc[a]
  })), x('"')].join("")
}
var Yc = function Xc(b, c, d) {
  if(null == b) {
    return D(c, "nil")
  }
  if(void 0 === b) {
    return D(c, "#\x3cundefined\x3e")
  }
  if(u) {
    s(function() {
      var c = nb.a(d, Wa);
      return s(c) ? (c = b ? b.f & 131072 || b.ab ? !0 : b.f ? !1 : t(xa, b) : t(xa, b)) ? rb(b) : c : c
    }()) && (D(c, "^"), Xc(rb(b), c, d), D(c, " "));
    if(null == b) {
      return D(c, "nil")
    }
    if(b.eb) {
      return b.pb(c)
    }
    if(b && (b.f & 2147483648 || b.H)) {
      return b.u(null, c, d)
    }
    if(ea(b) === Boolean || "number" === typeof b) {
      return D(c, "" + x(b))
    }
    if(b instanceof Array) {
      return Z(c, Xc, "#\x3cArray [", ", ", "]\x3e", d, b)
    }
    if("string" == typeof b) {
      return s(Va.d(d)) ? D(c, Wc(b)) : D(c, b)
    }
    if(qb(b)) {
      return Uc.j(c, N(["#\x3c", "" + x(b), "\x3e"], 0))
    }
    if(b instanceof Date) {
      var e = function(b, c) {
        for(var d = "" + x(b);;) {
          if(Q(d) < c) {
            d = [x("0"), x(d)].join("")
          }else {
            return d
          }
        }
      };
      return Uc.j(c, N(['#inst "', "" + x(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0))
    }
    return b instanceof RegExp ? Uc.j(c, N(['#"', b.source, '"'], 0)) : (b ? b.f & 2147483648 || b.H || (b.f ? 0 : t(Ha, b)) : t(Ha, b)) ? Ia(b, c, d) : u ? Uc.j(c, N(["#\x3c", "" + x(b), "\x3e"], 0)) : null
  }
  return null
};
cb.prototype.H = !0;
cb.prototype.u = function(a, b, c) {
  return Z(b, Yc, "(", " ", ")", c, this)
};
oc.prototype.H = !0;
oc.prototype.u = function(a, b, c) {
  return Z(b, Yc, "[", " ", "]", c, this)
};
Mb.prototype.H = !0;
Mb.prototype.u = function(a, b, c) {
  return Z(b, Yc, "(", " ", ")", c, this)
};
Ta.prototype.H = !0;
Ta.prototype.u = function(a, b, c) {
  return Z(b, function(a) {
    return Z(b, Yc, "", " ", "", c, a)
  }, "{", ", ", "}", c, this)
};
Gb.prototype.H = !0;
Gb.prototype.u = function(a, b, c) {
  return Z(b, Yc, "(", " ", ")", c, this)
};
Nc.prototype.H = !0;
Nc.prototype.u = function(a, b, c) {
  return Z(b, Yc, "(", " ", ")", c, this)
};
mc.prototype.H = !0;
mc.prototype.u = function(a, b, c) {
  return Z(b, Yc, "(", " ", ")", c, this)
};
Pc.prototype.H = !0;
Pc.prototype.u = function(a, b, c) {
  return Z(b, function(a) {
    return Z(b, Yc, "", " ", "", c, a)
  }, "{", ", ", "}", c, this)
};
X.prototype.H = !0;
X.prototype.u = function(a, b, c) {
  return Z(b, Yc, "[", " ", "]", c, this)
};
Db.prototype.H = !0;
Db.prototype.u = function(a, b, c) {
  return Z(b, Yc, "(", " ", ")", c, this)
};
wc.prototype.H = !0;
wc.prototype.u = function(a, b, c) {
  return Z(b, Yc, "(", " ", ")", c, this)
};
Eb.prototype.H = !0;
Eb.prototype.u = function(a, b) {
  return D(b, "()")
};
Fb.prototype.H = !0;
Fb.prototype.u = function(a, b, c) {
  return Z(b, Yc, "(", " ", ")", c, this)
};
Oc.prototype.H = !0;
Oc.prototype.u = function(a, b, c) {
  return Z(b, Yc, "(", " ", ")", c, this)
};
X.prototype.Ba = !0;
X.prototype.Ca = function(a, b) {
  return xb.a(this, b)
};
oc.prototype.Ba = !0;
oc.prototype.Ca = function(a, b) {
  return xb.a(this, b)
};
W.prototype.Ba = !0;
W.prototype.Ca = function(a, b) {
  return Za(this, b)
};
var Xa = new W(null, "dup", "dup"), bb = new W(null, "default", "default"), Ua = new W(null, "flush-on-newline", "flush-on-newline"), Ya = new W(null, "print-length", "print-length"), u = new W(null, "else", "else"), Va = new W(null, "readably", "readably"), Wa = new W(null, "meta", "meta");
var Zc = document.getElementById("world"), $c = Zc.getContext("2d"), $ = [];
function ad() {
  for(var a = 0;;) {
    if(a < $.length) {
      console.log($[a]), a += 1
    }else {
      return null
    }
  }
}
window.onload = function() {
  Zc.width = 500;
  Zc.height = 500;
  $c.fillStyle = "rgba(33, 33, 33, 0.8)";
  $[0] = {x:10, y:10, vx:0, vy:0};
  $[1] = {x:100, y:100, vx:0, vy:0};
  $[2] = {x:200, y:10, vx:0, vy:0};
  ad();
  Tc.d(Zb.a(1E3, function() {
    a: {
      $c.clearRect(0, 0, 500, 500);
      for(var a = 0;;) {
        if(a < $.length) {
          $c.fillRect($[a].x - 2.5, $[a].y - 2.5, 5, 5), a += 1
        }else {
          break a
        }
      }
    }
    a: {
      for(a = 0;;) {
        if(a < $.length) {
          b: {
            for(var b = a, c = $.length, d = 0, e = 0, g = 0;;) {
              if(g < c) {
                var e = e + $[g].y, h = g + 1, d = d + $[g].x, g = h
              }else {
                g = (e - $[b].y) / (c - 1);
                h = $[b];
                h.vx += ((d - $[b].x) / (c - 1) - h.x) / 100;
                h.vy += (g - h.y) / 100;
                break b
              }
            }
          }
          b: {
            for(b = a, c = $.length, d = 0;;) {
              if(d < c) {
                d !== b && (g = $[b], e = $[d], h = e.x - g.x, e = e.y - g.y, 5 > (Math.sqrt.d ? Math.sqrt.d(h * h + e * e) : Math.sqrt.call(null, h * h + e * e)) && (g.vx -= $[d].x - g.x, g.vy -= $[d].y - g.y)), d += 1
              }else {
                break b
              }
            }
          }
          b: {
            for(b = a, c = $.length, g = e = d = 0;;) {
              if(g < c) {
                e += $[g].vy, h = g + 1, d += $[g].vx, g = h
              }else {
                g = (e - $[b].vy) / (c - 1);
                h = $[b];
                h.vx += ((d - $[b].vx) / (c - 1) - h.vx) / 8;
                h.vy += (g - h.vy) / 8;
                break b
              }
            }
          }
          b = $[a];
          c = Math.sqrt.d ? Math.sqrt.d(b.vx * b.vx + b.vy * b.vy) : Math.sqrt.call(null, b.vx * b.vx + b.vy * b.vy);
          7 <= c && (c = 7 / c, b.vx *= c, b.vy *= c);
          if(0 > b.x && 0 > b.vx || 500 < b.x && 0 < b.vx) {
            b.vx *= -1
          }
          if(0 > b.y && 0 > b.vy || 500 < b.y && 0 < b.vy) {
            b.vy *= -1
          }
          b = $[a];
          b.x += b.vx;
          b.y += b.vy;
          a += 1
        }else {
          a = null;
          break a
        }
      }
      a = void 0
    }
    return a
  }));
  console.log("finish simulate!");
  return ad()
};

})();
