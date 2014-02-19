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
var n, ba = this;
function q(a) {
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
var ca = "closure_uid_" + (1E9 * Math.random() >>> 0), da = 0;
function ea(a, b) {
  null != a && this.append.apply(this, arguments)
}
ea.prototype.na = "";
ea.prototype.append = function(a, b, c) {
  this.na += a;
  if(null != b) {
    for(var d = 1;d < arguments.length;d++) {
      this.na += arguments[d]
    }
  }
  return this
};
ea.prototype.toString = f("na");
function ga() {
  return new ha(null, 5, [ia, !0, ja, !0, ka, !1, la, !1, ma, null], null)
}
function s(a) {
  return null != a && !1 !== a
}
function t(a, b) {
  return a[q(null == b ? null : b)] ? !0 : a._ ? !0 : u ? !1 : null
}
function na(a) {
  return null == a ? null : a.constructor
}
function v(a, b) {
  var c = na(b), c = s(s(c) ? c.gb : c) ? c.fb : q(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""))
}
function oa(a) {
  var b = a.fb;
  return s(b) ? b : "" + w(a)
}
function x(a) {
  for(var b = a.length, c = Array(b), d = 0;;) {
    if(d < b) {
      c[d] = a[d], d += 1
    }else {
      break
    }
  }
  return c
}
var qa = {}, ra = {};
function sa(a) {
  if(a ? a.C : a) {
    return a.C(a)
  }
  var b;
  b = sa[q(null == a ? null : a)];
  if(!b && (b = sa._, !b)) {
    throw v("ICounted.-count", a);
  }
  return b.call(null, a)
}
function ta(a, b) {
  if(a ? a.A : a) {
    return a.A(a, b)
  }
  var c;
  c = ta[q(null == a ? null : a)];
  if(!c && (c = ta._, !c)) {
    throw v("ICollection.-conj", a);
  }
  return c.call(null, a, b)
}
var ua = {}, z = function() {
  function a(a, b, c) {
    if(a ? a.T : a) {
      return a.T(a, b, c)
    }
    var h;
    h = z[q(null == a ? null : a)];
    if(!h && (h = z._, !h)) {
      throw v("IIndexed.-nth", a);
    }
    return h.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.L : a) {
      return a.L(a, b)
    }
    var c;
    c = z[q(null == a ? null : a)];
    if(!c && (c = z._, !c)) {
      throw v("IIndexed.-nth", a);
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
}(), va = {};
function A(a) {
  if(a ? a.O : a) {
    return a.O(a)
  }
  var b;
  b = A[q(null == a ? null : a)];
  if(!b && (b = A._, !b)) {
    throw v("ISeq.-first", a);
  }
  return b.call(null, a)
}
function B(a) {
  if(a ? a.Q : a) {
    return a.Q(a)
  }
  var b;
  b = B[q(null == a ? null : a)];
  if(!b && (b = B._, !b)) {
    throw v("ISeq.-rest", a);
  }
  return b.call(null, a)
}
var wa = {}, xa = function() {
  function a(a, b, c) {
    if(a ? a.G : a) {
      return a.G(a, b, c)
    }
    var h;
    h = xa[q(null == a ? null : a)];
    if(!h && (h = xa._, !h)) {
      throw v("ILookup.-lookup", a);
    }
    return h.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.F : a) {
      return a.F(a, b)
    }
    var c;
    c = xa[q(null == a ? null : a)];
    if(!c && (c = xa._, !c)) {
      throw v("ILookup.-lookup", a);
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
function ya(a, b, c) {
  if(a ? a.oa : a) {
    return a.oa(a, b, c)
  }
  var d;
  d = ya[q(null == a ? null : a)];
  if(!d && (d = ya._, !d)) {
    throw v("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c)
}
var za = {}, Aa = {};
function Ba(a) {
  if(a ? a.Ua : a) {
    return a.Ua()
  }
  var b;
  b = Ba[q(null == a ? null : a)];
  if(!b && (b = Ba._, !b)) {
    throw v("IMapEntry.-key", a);
  }
  return b.call(null, a)
}
function Ca(a) {
  if(a ? a.Va : a) {
    return a.Va()
  }
  var b;
  b = Ca[q(null == a ? null : a)];
  if(!b && (b = Ca._, !b)) {
    throw v("IMapEntry.-val", a);
  }
  return b.call(null, a)
}
var Da = {};
function Ea(a, b, c) {
  if(a ? a.Ra : a) {
    return a.Ra(a, b, c)
  }
  var d;
  d = Ea[q(null == a ? null : a)];
  if(!d && (d = Ea._, !d)) {
    throw v("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c)
}
function Fa(a) {
  if(a ? a.$a : a) {
    return a.state
  }
  var b;
  b = Fa[q(null == a ? null : a)];
  if(!b && (b = Fa._, !b)) {
    throw v("IDeref.-deref", a);
  }
  return b.call(null, a)
}
var Ga = {};
function Ha(a) {
  if(a ? a.H : a) {
    return a.H(a)
  }
  var b;
  b = Ha[q(null == a ? null : a)];
  if(!b && (b = Ha._, !b)) {
    throw v("IMeta.-meta", a);
  }
  return b.call(null, a)
}
function Ia(a, b) {
  if(a ? a.J : a) {
    return a.J(a, b)
  }
  var c;
  c = Ia[q(null == a ? null : a)];
  if(!c && (c = Ia._, !c)) {
    throw v("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b)
}
var Ja = {}, Ka = function() {
  function a(a, b, c) {
    if(a ? a.N : a) {
      return a.N(a, b, c)
    }
    var h;
    h = Ka[q(null == a ? null : a)];
    if(!h && (h = Ka._, !h)) {
      throw v("IReduce.-reduce", a);
    }
    return h.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.M : a) {
      return a.M(a, b)
    }
    var c;
    c = Ka[q(null == a ? null : a)];
    if(!c && (c = Ka._, !c)) {
      throw v("IReduce.-reduce", a);
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
function La(a, b) {
  if(a ? a.s : a) {
    return a.s(a, b)
  }
  var c;
  c = La[q(null == a ? null : a)];
  if(!c && (c = La._, !c)) {
    throw v("IEquiv.-equiv", a);
  }
  return c.call(null, a, b)
}
function Ma(a) {
  if(a ? a.v : a) {
    return a.v(a)
  }
  var b;
  b = Ma[q(null == a ? null : a)];
  if(!b && (b = Ma._, !b)) {
    throw v("IHash.-hash", a);
  }
  return b.call(null, a)
}
var Na = {};
function Oa(a) {
  if(a ? a.B : a) {
    return a.B(a)
  }
  var b;
  b = Oa[q(null == a ? null : a)];
  if(!b && (b = Oa._, !b)) {
    throw v("ISeqable.-seq", a);
  }
  return b.call(null, a)
}
var Pa = {};
function D(a, b) {
  if(a ? a.Ya : a) {
    return a.Ya(0, b)
  }
  var c;
  c = D[q(null == a ? null : a)];
  if(!c && (c = D._, !c)) {
    throw v("IWriter.-write", a);
  }
  return c.call(null, a, b)
}
var Qa = {};
function Ra(a, b, c) {
  if(a ? a.t : a) {
    return a.t(a, b, c)
  }
  var d;
  d = Ra[q(null == a ? null : a)];
  if(!d && (d = Ra._, !d)) {
    throw v("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c)
}
function Sa(a, b, c) {
  if(a ? a.Xa : a) {
    return a.Xa(0, b, c)
  }
  var d;
  d = Sa[q(null == a ? null : a)];
  if(!d && (d = Sa._, !d)) {
    throw v("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c)
}
function Ta(a) {
  if(a ? a.xa : a) {
    return a.xa(a)
  }
  var b;
  b = Ta[q(null == a ? null : a)];
  if(!b && (b = Ta._, !b)) {
    throw v("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a)
}
function Ua(a, b) {
  if(a ? a.ya : a) {
    return a.ya(a, b)
  }
  var c;
  c = Ua[q(null == a ? null : a)];
  if(!c && (c = Ua._, !c)) {
    throw v("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b)
}
function Va(a) {
  if(a ? a.za : a) {
    return a.za(a)
  }
  var b;
  b = Va[q(null == a ? null : a)];
  if(!b && (b = Va._, !b)) {
    throw v("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a)
}
function Wa(a, b, c) {
  if(a ? a.ra : a) {
    return a.ra(a, b, c)
  }
  var d;
  d = Wa[q(null == a ? null : a)];
  if(!d && (d = Wa._, !d)) {
    throw v("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c)
}
function Xa(a, b, c) {
  if(a ? a.Wa : a) {
    return a.Wa(0, b, c)
  }
  var d;
  d = Xa[q(null == a ? null : a)];
  if(!d && (d = Xa._, !d)) {
    throw v("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c)
}
function Ya(a) {
  if(a ? a.Sa : a) {
    return a.Sa()
  }
  var b;
  b = Ya[q(null == a ? null : a)];
  if(!b && (b = Ya._, !b)) {
    throw v("IChunk.-drop-first", a);
  }
  return b.call(null, a)
}
function Za(a) {
  if(a ? a.Ca : a) {
    return a.Ca(a)
  }
  var b;
  b = Za[q(null == a ? null : a)];
  if(!b && (b = Za._, !b)) {
    throw v("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a)
}
function $a(a) {
  if(a ? a.Da : a) {
    return a.Da(a)
  }
  var b;
  b = $a[q(null == a ? null : a)];
  if(!b && (b = $a._, !b)) {
    throw v("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a)
}
function ab(a) {
  if(a ? a.Ba : a) {
    return a.Ba(a)
  }
  var b;
  b = ab[q(null == a ? null : a)];
  if(!b && (b = ab._, !b)) {
    throw v("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a)
}
function bb(a) {
  this.hb = a;
  this.n = 0;
  this.f = 1073741824
}
bb.prototype.Ya = function(a, b) {
  return this.hb.append(b)
};
function E(a) {
  var b = new ea;
  a.t(null, new bb(b), ga());
  return"" + w(b)
}
function cb(a, b) {
  if(s(db.a ? db.a(a, b) : db.call(null, a, b))) {
    return 0
  }
  var c = s(a.K) ? !1 : !0;
  if(s(c ? b.K : c)) {
    return-1
  }
  if(s(a.K)) {
    if(!s(b.K)) {
      return 1
    }
    c = eb.a ? eb.a(a.K, b.K) : eb.call(null, a.K, b.K);
    return 0 === c ? eb.a ? eb.a(a.name, b.name) : eb.call(null, a.name, b.name) : c
  }
  return fb ? eb.a ? eb.a(a.name, b.name) : eb.call(null, a.name, b.name) : null
}
function gb(a, b, c, d, e) {
  this.K = a;
  this.name = b;
  this.ia = c;
  this.ga = d;
  this.ma = e;
  this.f = 2154168321;
  this.n = 4096
}
n = gb.prototype;
n.t = function(a, b) {
  return D(b, this.ia)
};
n.v = function() {
  var a = this.ga;
  return null != a ? a : this.ga = a = hb.a ? hb.a(G.d ? G.d(this.K) : G.call(null, this.K), G.d ? G.d(this.name) : G.call(null, this.name)) : hb.call(null, G.d ? G.d(this.K) : G.call(null, this.K), G.d ? G.d(this.name) : G.call(null, this.name))
};
n.J = function(a, b) {
  return new gb(this.K, this.name, this.ia, this.ga, b)
};
n.H = f("ma");
n.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return xa.c(c, this, null);
      case 3:
        return xa.c(c, this, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)))
};
n.d = function(a) {
  return xa.c(a, this, null)
};
n.a = function(a, b) {
  return xa.c(a, this, b)
};
n.s = function(a, b) {
  return b instanceof gb ? this.ia === b.ia : !1
};
n.toString = f("ia");
function H(a) {
  if(null == a) {
    return null
  }
  if(a && (a.f & 8388608 || a.qb)) {
    return a.B(null)
  }
  if(a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new ib(a, 0)
  }
  if(t(Na, a)) {
    return Oa(a)
  }
  if(u) {
    throw Error([w(a), w("is not ISeqable")].join(""));
  }
  return null
}
function I(a) {
  if(null == a) {
    return null
  }
  if(a && (a.f & 64 || a.qa)) {
    return a.O(null)
  }
  a = H(a);
  return null == a ? null : A(a)
}
function J(a) {
  return null != a ? a && (a.f & 64 || a.qa) ? a.Q(null) : (a = H(a)) ? B(a) : K : K
}
function M(a) {
  return null == a ? null : a && (a.f & 128 || a.pb) ? a.ba(null) : H(J(a))
}
var db = function() {
  function a(a, b) {
    return a === b || La(a, b)
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
          if(M(e)) {
            a = d, d = I(e), e = M(e)
          }else {
            return b.a(d, I(e))
          }
        }else {
          return!1
        }
      }
    }
    a.p = 2;
    a.k = function(a) {
      var b = I(a);
      a = M(a);
      var d = I(a);
      a = J(a);
      return c(b, d, a)
    };
    a.i = c;
    return a
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a.call(this, b, e);
      default:
        return c.i(b, e, N(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.p = 2;
  b.k = c.k;
  b.d = aa(!0);
  b.a = a;
  b.i = c.i;
  return b
}();
Ma["null"] = aa(0);
ra["null"] = !0;
sa["null"] = aa(0);
La["null"] = function(a, b) {
  return null == b
};
Ia["null"] = aa(null);
Ga["null"] = !0;
Ha["null"] = aa(null);
za["null"] = !0;
Date.prototype.s = function(a, b) {
  return b instanceof Date && this.toString() === b.toString()
};
La.number = function(a, b) {
  return a === b
};
Ga["function"] = !0;
Ha["function"] = aa(null);
qa["function"] = !0;
Ma._ = function(a) {
  return a[ca] || (a[ca] = ++da)
};
var jb = function() {
  function a(a, b, c, d) {
    for(var l = sa(a);;) {
      if(d < l) {
        c = b.a ? b.a(c, z.a(a, d)) : b.call(null, c, z.a(a, d)), d += 1
      }else {
        return c
      }
    }
  }
  function b(a, b, c) {
    for(var d = sa(a), l = 0;;) {
      if(l < d) {
        c = b.a ? b.a(c, z.a(a, l)) : b.call(null, c, z.a(a, l)), l += 1
      }else {
        return c
      }
    }
  }
  function c(a, b) {
    var c = sa(a);
    if(0 === c) {
      return b.pa ? "" : b.call(null)
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
}(), kb = function() {
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
      return b.pa ? "" : b.call(null)
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
function lb(a) {
  return a ? a.f & 2 || a.Za ? !0 : a.f ? !1 : t(ra, a) : t(ra, a)
}
function mb(a) {
  return a ? a.f & 16 || a.Ta ? !0 : a.f ? !1 : t(ua, a) : t(ua, a)
}
function ib(a, b) {
  this.b = a;
  this.g = b;
  this.n = 0;
  this.f = 166199550
}
n = ib.prototype;
n.v = function() {
  return nb.d ? nb.d(this) : nb.call(null, this)
};
n.ba = function() {
  return this.g + 1 < this.b.length ? new ib(this.b, this.g + 1) : null
};
n.A = function(a, b) {
  return P.a ? P.a(b, this) : P.call(null, b, this)
};
n.toString = function() {
  return E(this)
};
n.M = function(a, b) {
  return kb.l(this.b, b, this.b[this.g], this.g + 1)
};
n.N = function(a, b, c) {
  return kb.l(this.b, b, c, this.g)
};
n.B = function() {
  return this
};
n.C = function() {
  return this.b.length - this.g
};
n.O = function() {
  return this.b[this.g]
};
n.Q = function() {
  return this.g + 1 < this.b.length ? new ib(this.b, this.g + 1) : K
};
n.s = function(a, b) {
  return Q.a ? Q.a(this, b) : Q.call(null, this, b)
};
n.L = function(a, b) {
  var c = b + this.g;
  return c < this.b.length ? this.b[c] : null
};
n.T = function(a, b, c) {
  a = b + this.g;
  return a < this.b.length ? this.b[a] : c
};
var ob = function() {
  function a(a, b) {
    return b < a.length ? new ib(a, b) : null
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
    return ob.a(a, b)
  }
  function b(a) {
    return ob.a(a, 0)
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
La._ = function(a, b) {
  return a === b
};
var pb = function() {
  function a(a, b) {
    return null != a ? ta(a, b) : ta(K, b)
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
          a = b.a(a, d), d = I(e), e = M(e)
        }else {
          return b.a(a, d)
        }
      }
    }
    a.p = 2;
    a.k = function(a) {
      var b = I(a);
      a = M(a);
      var d = I(a);
      a = J(a);
      return c(b, d, a)
    };
    a.i = c;
    return a
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.i(b, e, N(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.p = 2;
  b.k = c.k;
  b.a = a;
  b.i = c.i;
  return b
}();
function R(a) {
  if(null != a) {
    if(a && (a.f & 2 || a.Za)) {
      a = a.C(null)
    }else {
      if(a instanceof Array) {
        a = a.length
      }else {
        if("string" === typeof a) {
          a = a.length
        }else {
          if(t(ra, a)) {
            a = sa(a)
          }else {
            if(u) {
              a: {
                a = H(a);
                for(var b = 0;;) {
                  if(lb(a)) {
                    a = b + sa(a);
                    break a
                  }
                  a = M(a);
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
var qb = function() {
  function a(a, b, c) {
    for(;;) {
      if(null == a) {
        return c
      }
      if(0 === b) {
        return H(a) ? I(a) : c
      }
      if(mb(a)) {
        return z.c(a, b, c)
      }
      if(H(a)) {
        a = M(a), b -= 1
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
        if(H(a)) {
          return I(a)
        }
        throw Error("Index out of bounds");
      }
      if(mb(a)) {
        return z.a(a, b)
      }
      if(H(a)) {
        var c = M(a), h = b - 1;
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
}(), sb = function() {
  function a(a, b, c) {
    if(null != a) {
      if(a && (a.f & 16 || a.Ta)) {
        return a.T(null, b, c)
      }
      if(a instanceof Array || "string" === typeof a) {
        return b < a.length ? a[b] : c
      }
      if(t(ua, a)) {
        return z.a(a, b)
      }
      if(u) {
        if(a ? a.f & 64 || a.qa || (a.f ? 0 : t(va, a)) : t(va, a)) {
          return qb.c(a, b, c)
        }
        throw Error([w("nth not supported on this type "), w(oa(na(a)))].join(""));
      }
      return null
    }
    return c
  }
  function b(a, b) {
    if(null == a) {
      return null
    }
    if(a && (a.f & 16 || a.Ta)) {
      return a.L(null, b)
    }
    if(a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null
    }
    if(t(ua, a)) {
      return z.a(a, b)
    }
    if(u) {
      if(a ? a.f & 64 || a.qa || (a.f ? 0 : t(va, a)) : t(va, a)) {
        return qb.a(a, b)
      }
      throw Error([w("nth not supported on this type "), w(oa(na(a)))].join(""));
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
}(), tb = function() {
  function a(a, b, c) {
    return null != a ? a && (a.f & 256 || a.ab) ? a.G(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : t(wa, a) ? xa.c(a, b, c) : u ? c : null : c
  }
  function b(a, b) {
    return null == a ? null : a && (a.f & 256 || a.ab) ? a.F(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : t(wa, a) ? xa.a(a, b) : null
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
}(), vb = function() {
  function a(a, b, c) {
    return null != a ? ya(a, b, c) : ub.a ? ub.a([b], [c]) : ub.call(null, [b], [c])
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
          d = I(l), e = I(M(l)), l = M(M(l))
        }else {
          return a
        }
      }
    }
    a.p = 3;
    a.k = function(a) {
      var b = I(a);
      a = M(a);
      var d = I(a);
      a = M(a);
      var l = I(a);
      a = J(a);
      return c(b, d, l, a)
    };
    a.i = c;
    return a
  }(), b = function(b, e, g, h) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, g);
      default:
        return c.i(b, e, g, N(arguments, 3))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.p = 3;
  b.k = c.k;
  b.c = a;
  b.i = c.i;
  return b
}();
function wb(a) {
  var b = "function" == q(a);
  return b ? b : a ? s(s(null) ? null : a.kb) ? !0 : a.ub ? !1 : t(qa, a) : t(qa, a)
}
function xb(a) {
  return(a ? a.f & 131072 || a.cb || (a.f ? 0 : t(Ga, a)) : t(Ga, a)) ? Ha(a) : null
}
var yb = {}, zb = 0;
function G(a) {
  if(a && (a.f & 4194304 || a.nb)) {
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
            255 < zb && (yb = {}, zb = 0);
            var b = yb[a];
            if("number" !== typeof b) {
              for(var c = b = 0;c < a.length;++c) {
                b = 31 * b + a.charCodeAt(c), b %= 4294967296
              }
              yb[a] = b;
              zb += 1
            }
            a = b
          }else {
            a = u ? Ma(a) : null
          }
        }
      }
    }
  }
  return a
}
function Ab(a) {
  return a ? a.f & 16384 || a.sb ? !0 : a.f ? !1 : t(Da, a) : t(Da, a)
}
function Bb(a) {
  return a ? a.n & 512 || a.lb ? !0 : !1 : !1
}
function Cb(a, b, c, d, e) {
  for(;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1
  }
}
function Db(a) {
  return s(a) ? !0 : !1
}
function eb(a, b) {
  if(a === b) {
    return 0
  }
  if(null == a) {
    return-1
  }
  if(null == b) {
    return 1
  }
  if(na(a) === na(b)) {
    return a && (a.n & 2048 || a.va) ? a.wa(null, b) : a > b ? 1 : a < b ? -1 : 0
  }
  if(u) {
    throw Error("compare on non-nil objects of different types");
  }
  return null
}
var Eb = function() {
  function a(a, b, c, h) {
    for(;;) {
      var k = eb(sb.a(a, h), sb.a(b, h));
      if(0 === k && h + 1 < c) {
        h += 1
      }else {
        return k
      }
    }
  }
  function b(a, b) {
    var g = R(a), h = R(b);
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
    for(c = H(c);;) {
      if(c) {
        b = a.a ? a.a(b, I(c)) : a.call(null, b, I(c)), c = M(c)
      }else {
        return b
      }
    }
  }
  function b(a, b) {
    var c = H(b);
    return c ? Fb.c ? Fb.c(a, I(c), M(c)) : Fb.call(null, a, I(c), M(c)) : a.pa ? "" : a.call(null)
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
}(), Fb = function() {
  function a(a, b, c) {
    return c && (c.f & 524288 || c.eb) ? c.N(null, a, b) : c instanceof Array ? kb.c(c, a, b) : "string" === typeof c ? kb.c(c, a, b) : t(Ja, c) ? Ka.c(c, a, b) : u ? S.c(a, b, c) : null
  }
  function b(a, b) {
    return b && (b.f & 524288 || b.eb) ? b.M(null, a) : b instanceof Array ? kb.a(b, a) : "string" === typeof b ? kb.a(b, a) : t(Ja, b) ? Ka.a(b, a) : u ? S.a(a, b) : null
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
function Gb(a) {
  return 0 <= a ? Math.floor.d ? Math.floor.d(a) : Math.floor.call(null, a) : Math.ceil.d ? Math.ceil.d(a) : Math.ceil.call(null, a)
}
function Hb(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24
}
var w = function() {
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
      for(var e = new ea(b.d(a)), l = d;;) {
        if(s(l)) {
          e = e.append(b.d(I(l))), l = M(l)
        }else {
          return e.toString()
        }
      }
    }
    a.p = 1;
    a.k = function(a) {
      var b = I(a);
      a = J(a);
      return c(b, a)
    };
    a.i = c;
    return a
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 0:
        return"";
      case 1:
        return a.call(this, b);
      default:
        return c.i(b, N(arguments, 1))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.p = 1;
  b.k = c.k;
  b.pa = aa("");
  b.d = a;
  b.i = c.i;
  return b
}();
function Q(a, b) {
  return Db((b ? b.f & 16777216 || b.rb || (b.f ? 0 : t(Pa, b)) : t(Pa, b)) ? function() {
    for(var c = H(a), d = H(b);;) {
      if(null == c) {
        return null == d
      }
      if(null == d) {
        return!1
      }
      if(db.a(I(c), I(d))) {
        c = M(c), d = M(d)
      }else {
        return u ? !1 : null
      }
    }
  }() : null)
}
function hb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2)
}
function nb(a) {
  if(H(a)) {
    var b = G(I(a));
    for(a = M(a);;) {
      if(null == a) {
        return b
      }
      b = hb(b, G(I(a)));
      a = M(a)
    }
  }else {
    return 0
  }
}
function Ib(a) {
  var b = 0;
  for(a = H(a);;) {
    if(a) {
      var c = I(a), b = (b + (G(T.d ? T.d(c) : T.call(null, c)) ^ G(U.d ? U.d(c) : U.call(null, c)))) % 4503599627370496;
      a = M(a)
    }else {
      return b
    }
  }
}
function Jb(a, b, c, d, e) {
  this.j = a;
  this.sa = b;
  this.da = c;
  this.count = d;
  this.h = e;
  this.n = 0;
  this.f = 65937646
}
n = Jb.prototype;
n.v = function() {
  var a = this.h;
  return null != a ? a : this.h = a = nb(this)
};
n.ba = function() {
  return 1 === this.count ? null : this.da
};
n.A = function(a, b) {
  return new Jb(this.j, b, this, this.count + 1, null)
};
n.toString = function() {
  return E(this)
};
n.M = function(a, b) {
  return S.a(b, this)
};
n.N = function(a, b, c) {
  return S.c(b, c, this)
};
n.B = function() {
  return this
};
n.C = f("count");
n.O = f("sa");
n.Q = function() {
  return 1 === this.count ? K : this.da
};
n.s = function(a, b) {
  return Q(this, b)
};
n.J = function(a, b) {
  return new Jb(b, this.sa, this.da, this.count, this.h)
};
n.H = f("j");
function Kb(a) {
  this.j = a;
  this.n = 0;
  this.f = 65937614
}
n = Kb.prototype;
n.v = aa(0);
n.ba = aa(null);
n.A = function(a, b) {
  return new Jb(this.j, b, null, 1, null)
};
n.toString = function() {
  return E(this)
};
n.M = function(a, b) {
  return S.a(b, this)
};
n.N = function(a, b, c) {
  return S.c(b, c, this)
};
n.B = aa(null);
n.C = aa(0);
n.O = aa(null);
n.Q = function() {
  return K
};
n.s = function(a, b) {
  return Q(this, b)
};
n.J = function(a, b) {
  return new Kb(b)
};
n.H = f("j");
var K = new Kb(null), Lb = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    var b;
    if(a instanceof ib) {
      b = a.b
    }else {
      a: {
        for(b = [];;) {
          if(null != a) {
            b.push(a.O(null)), a = a.ba(null)
          }else {
            break a
          }
        }
        b = void 0
      }
    }
    a = b.length;
    for(var e = K;;) {
      if(0 < a) {
        var g = a - 1, e = e.A(null, b[a - 1]);
        a = g
      }else {
        return e
      }
    }
  }
  a.p = 0;
  a.k = function(a) {
    a = H(a);
    return b(a)
  };
  a.i = b;
  return a
}();
function Mb(a, b, c, d) {
  this.j = a;
  this.sa = b;
  this.da = c;
  this.h = d;
  this.n = 0;
  this.f = 65929452
}
n = Mb.prototype;
n.v = function() {
  var a = this.h;
  return null != a ? a : this.h = a = nb(this)
};
n.ba = function() {
  return null == this.da ? null : H(this.da)
};
n.A = function(a, b) {
  return new Mb(null, b, this, this.h)
};
n.toString = function() {
  return E(this)
};
n.M = function(a, b) {
  return S.a(b, this)
};
n.N = function(a, b, c) {
  return S.c(b, c, this)
};
n.B = function() {
  return this
};
n.O = f("sa");
n.Q = function() {
  return null == this.da ? K : this.da
};
n.s = function(a, b) {
  return Q(this, b)
};
n.J = function(a, b) {
  return new Mb(b, this.sa, this.da, this.h)
};
n.H = f("j");
function P(a, b) {
  var c = null == b;
  return(c ? c : b && (b.f & 64 || b.qa)) ? new Mb(null, a, b, null) : new Mb(null, a, H(b), null)
}
function V(a, b, c, d) {
  this.K = a;
  this.name = b;
  this.fa = c;
  this.ga = d;
  this.f = 2153775105;
  this.n = 4096
}
n = V.prototype;
n.t = function(a, b) {
  return D(b, [w(":"), w(this.fa)].join(""))
};
n.v = function() {
  null == this.ga && (this.ga = hb(G(this.K), G(this.name)) + 2654435769);
  return this.ga
};
n.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return tb.a(c, this);
      case 3:
        return tb.c(c, this, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)))
};
n.d = function(a) {
  return tb.a(a, this)
};
n.a = function(a, b) {
  return tb.c(a, this, b)
};
n.s = function(a, b) {
  return b instanceof V ? this.fa === b.fa : !1
};
n.toString = function() {
  return[w(":"), w(this.fa)].join("")
};
function Nb(a, b, c, d) {
  this.j = a;
  this.ta = b;
  this.o = c;
  this.h = d;
  this.n = 0;
  this.f = 32374988
}
n = Nb.prototype;
n.v = function() {
  var a = this.h;
  return null != a ? a : this.h = a = nb(this)
};
n.ba = function() {
  Oa(this);
  return null == this.o ? null : M(this.o)
};
n.A = function(a, b) {
  return P(b, this)
};
n.toString = function() {
  return E(this)
};
function Ob(a) {
  null != a.ta && (a.o = a.ta.pa ? "" : a.ta.call(null), a.ta = null);
  return a.o
}
n.M = function(a, b) {
  return S.a(b, this)
};
n.N = function(a, b, c) {
  return S.c(b, c, this)
};
n.B = function() {
  Ob(this);
  if(null == this.o) {
    return null
  }
  for(var a = this.o;;) {
    if(a instanceof Nb) {
      a = Ob(a)
    }else {
      return this.o = a, H(this.o)
    }
  }
};
n.O = function() {
  Oa(this);
  return null == this.o ? null : I(this.o)
};
n.Q = function() {
  Oa(this);
  return null != this.o ? J(this.o) : K
};
n.s = function(a, b) {
  return Q(this, b)
};
n.J = function(a, b) {
  return new Nb(b, this.ta, this.o, this.h)
};
n.H = f("j");
function Pb(a, b) {
  this.Aa = a;
  this.end = b;
  this.n = 0;
  this.f = 2
}
Pb.prototype.C = f("end");
Pb.prototype.add = function(a) {
  this.Aa[this.end] = a;
  return this.end += 1
};
Pb.prototype.$ = function() {
  var a = new Qb(this.Aa, 0, this.end);
  this.Aa = null;
  return a
};
function Qb(a, b, c) {
  this.b = a;
  this.q = b;
  this.end = c;
  this.n = 0;
  this.f = 524306
}
n = Qb.prototype;
n.M = function(a, b) {
  return kb.l(this.b, b, this.b[this.q], this.q + 1)
};
n.N = function(a, b, c) {
  return kb.l(this.b, b, c, this.q)
};
n.Sa = function() {
  if(this.q === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Qb(this.b, this.q + 1, this.end)
};
n.L = function(a, b) {
  return this.b[this.q + b]
};
n.T = function(a, b, c) {
  return 0 <= b && b < this.end - this.q ? this.b[this.q + b] : c
};
n.C = function() {
  return this.end - this.q
};
var Rb = function() {
  function a(a, b, c) {
    return new Qb(a, b, c)
  }
  function b(a, b) {
    return new Qb(a, b, a.length)
  }
  function c(a) {
    return new Qb(a, 0, a.length)
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
function Sb(a, b, c, d) {
  this.$ = a;
  this.X = b;
  this.j = c;
  this.h = d;
  this.f = 31850732;
  this.n = 1536
}
n = Sb.prototype;
n.v = function() {
  var a = this.h;
  return null != a ? a : this.h = a = nb(this)
};
n.ba = function() {
  if(1 < sa(this.$)) {
    return new Sb(Ya(this.$), this.X, this.j, null)
  }
  var a = Oa(this.X);
  return null == a ? null : a
};
n.A = function(a, b) {
  return P(b, this)
};
n.toString = function() {
  return E(this)
};
n.B = function() {
  return this
};
n.O = function() {
  return z.a(this.$, 0)
};
n.Q = function() {
  return 1 < sa(this.$) ? new Sb(Ya(this.$), this.X, this.j, null) : null == this.X ? K : this.X
};
n.Ba = function() {
  return null == this.X ? null : this.X
};
n.s = function(a, b) {
  return Q(this, b)
};
n.J = function(a, b) {
  return new Sb(this.$, this.X, b, this.h)
};
n.H = f("j");
n.Ca = f("$");
n.Da = function() {
  return null == this.X ? K : this.X
};
function Tb(a) {
  for(var b = [];;) {
    if(H(a)) {
      b.push(I(a)), a = M(a)
    }else {
      return b
    }
  }
}
function Ub(a, b) {
  if(lb(a)) {
    return R(a)
  }
  for(var c = a, d = b, e = 0;;) {
    if(0 < d && H(c)) {
      c = M(c), d -= 1, e += 1
    }else {
      return e
    }
  }
}
var Wb = function Vb(b) {
  return null == b ? null : null == M(b) ? H(I(b)) : u ? P(I(b), Vb(M(b))) : null
}, Xb = function() {
  function a(a, b, c, d) {
    return P(a, P(b, P(c, d)))
  }
  function b(a, b, c) {
    return P(a, P(b, c))
  }
  var c = null, d = function() {
    function a(c, d, e, m, p) {
      var r = null;
      4 < arguments.length && (r = N(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, m, r)
    }
    function b(a, c, d, e, g) {
      return P(a, P(c, P(d, P(e, Wb(g)))))
    }
    a.p = 4;
    a.k = function(a) {
      var c = I(a);
      a = M(a);
      var d = I(a);
      a = M(a);
      var e = I(a);
      a = M(a);
      var p = I(a);
      a = J(a);
      return b(c, d, e, p, a)
    };
    a.i = b;
    return a
  }(), c = function(c, g, h, k, l) {
    switch(arguments.length) {
      case 1:
        return H(c);
      case 2:
        return P(c, g);
      case 3:
        return b.call(this, c, g, h);
      case 4:
        return a.call(this, c, g, h, k);
      default:
        return d.i(c, g, h, k, N(arguments, 4))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.p = 4;
  c.k = d.k;
  c.d = function(a) {
    return H(a)
  };
  c.a = function(a, b) {
    return P(a, b)
  };
  c.c = b;
  c.l = a;
  c.i = d.i;
  return c
}();
function Yb(a, b, c) {
  var d = H(c);
  if(0 === b) {
    return a.pa ? "" : a.call(null)
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
    return a.aa ? a.aa(c, d, e, g, h, a) : a.aa ? a.aa(c, d, e, g, h, a) : a.call(null, c, d, e, g, h, a)
  }
  var k = A(l), m = B(l);
  if(7 === b) {
    return a.ja ? a.ja(c, d, e, g, h, a, k) : a.ja ? a.ja(c, d, e, g, h, a, k) : a.call(null, c, d, e, g, h, a, k)
  }
  var l = A(m), p = B(m);
  if(8 === b) {
    return a.Pa ? a.Pa(c, d, e, g, h, a, k, l) : a.Pa ? a.Pa(c, d, e, g, h, a, k, l) : a.call(null, c, d, e, g, h, a, k, l)
  }
  var m = A(p), r = B(p);
  if(9 === b) {
    return a.Qa ? a.Qa(c, d, e, g, h, a, k, l, m) : a.Qa ? a.Qa(c, d, e, g, h, a, k, l, m) : a.call(null, c, d, e, g, h, a, k, l, m)
  }
  var p = A(r), y = B(r);
  if(10 === b) {
    return a.Ea ? a.Ea(c, d, e, g, h, a, k, l, m, p) : a.Ea ? a.Ea(c, d, e, g, h, a, k, l, m, p) : a.call(null, c, d, e, g, h, a, k, l, m, p)
  }
  var r = A(y), C = B(y);
  if(11 === b) {
    return a.Fa ? a.Fa(c, d, e, g, h, a, k, l, m, p, r) : a.Fa ? a.Fa(c, d, e, g, h, a, k, l, m, p, r) : a.call(null, c, d, e, g, h, a, k, l, m, p, r)
  }
  var y = A(C), F = B(C);
  if(12 === b) {
    return a.Ga ? a.Ga(c, d, e, g, h, a, k, l, m, p, r, y) : a.Ga ? a.Ga(c, d, e, g, h, a, k, l, m, p, r, y) : a.call(null, c, d, e, g, h, a, k, l, m, p, r, y)
  }
  var C = A(F), L = B(F);
  if(13 === b) {
    return a.Ha ? a.Ha(c, d, e, g, h, a, k, l, m, p, r, y, C) : a.Ha ? a.Ha(c, d, e, g, h, a, k, l, m, p, r, y, C) : a.call(null, c, d, e, g, h, a, k, l, m, p, r, y, C)
  }
  var F = A(L), O = B(L);
  if(14 === b) {
    return a.Ia ? a.Ia(c, d, e, g, h, a, k, l, m, p, r, y, C, F) : a.Ia ? a.Ia(c, d, e, g, h, a, k, l, m, p, r, y, C, F) : a.call(null, c, d, e, g, h, a, k, l, m, p, r, y, C, F)
  }
  var L = A(O), Y = B(O);
  if(15 === b) {
    return a.Ja ? a.Ja(c, d, e, g, h, a, k, l, m, p, r, y, C, F, L) : a.Ja ? a.Ja(c, d, e, g, h, a, k, l, m, p, r, y, C, F, L) : a.call(null, c, d, e, g, h, a, k, l, m, p, r, y, C, F, L)
  }
  var O = A(Y), fa = B(Y);
  if(16 === b) {
    return a.Ka ? a.Ka(c, d, e, g, h, a, k, l, m, p, r, y, C, F, L, O) : a.Ka ? a.Ka(c, d, e, g, h, a, k, l, m, p, r, y, C, F, L, O) : a.call(null, c, d, e, g, h, a, k, l, m, p, r, y, C, F, L, O)
  }
  var Y = A(fa), pa = B(fa);
  if(17 === b) {
    return a.La ? a.La(c, d, e, g, h, a, k, l, m, p, r, y, C, F, L, O, Y) : a.La ? a.La(c, d, e, g, h, a, k, l, m, p, r, y, C, F, L, O, Y) : a.call(null, c, d, e, g, h, a, k, l, m, p, r, y, C, F, L, O, Y)
  }
  var fa = A(pa), rb = B(pa);
  if(18 === b) {
    return a.Ma ? a.Ma(c, d, e, g, h, a, k, l, m, p, r, y, C, F, L, O, Y, fa) : a.Ma ? a.Ma(c, d, e, g, h, a, k, l, m, p, r, y, C, F, L, O, Y, fa) : a.call(null, c, d, e, g, h, a, k, l, m, p, r, y, C, F, L, O, Y, fa)
  }
  pa = A(rb);
  rb = B(rb);
  if(19 === b) {
    return a.Na ? a.Na(c, d, e, g, h, a, k, l, m, p, r, y, C, F, L, O, Y, fa, pa) : a.Na ? a.Na(c, d, e, g, h, a, k, l, m, p, r, y, C, F, L, O, Y, fa, pa) : a.call(null, c, d, e, g, h, a, k, l, m, p, r, y, C, F, L, O, Y, fa, pa)
  }
  var ec = A(rb);
  B(rb);
  if(20 === b) {
    return a.Oa ? a.Oa(c, d, e, g, h, a, k, l, m, p, r, y, C, F, L, O, Y, fa, pa, ec) : a.Oa ? a.Oa(c, d, e, g, h, a, k, l, m, p, r, y, C, F, L, O, Y, fa, pa, ec) : a.call(null, c, d, e, g, h, a, k, l, m, p, r, y, C, F, L, O, Y, fa, pa, ec)
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var Zb = function() {
  function a(a, b, c, d, e) {
    b = Xb.l(b, c, d, e);
    c = a.p;
    return a.k ? (d = Ub(b, c + 1), d <= c ? Yb(a, d, b) : a.k(b)) : a.apply(a, Tb(b))
  }
  function b(a, b, c, d) {
    b = Xb.c(b, c, d);
    c = a.p;
    return a.k ? (d = Ub(b, c + 1), d <= c ? Yb(a, d, b) : a.k(b)) : a.apply(a, Tb(b))
  }
  function c(a, b, c) {
    b = Xb.a(b, c);
    c = a.p;
    if(a.k) {
      var d = Ub(b, c + 1);
      return d <= c ? Yb(a, d, b) : a.k(b)
    }
    return a.apply(a, Tb(b))
  }
  function d(a, b) {
    var c = a.p;
    if(a.k) {
      var d = Ub(b, c + 1);
      return d <= c ? Yb(a, d, b) : a.k(b)
    }
    return a.apply(a, Tb(b))
  }
  var e = null, g = function() {
    function a(c, d, e, g, h, C) {
      var F = null;
      5 < arguments.length && (F = N(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, g, h, F)
    }
    function b(a, c, d, e, g, h) {
      c = P(c, P(d, P(e, P(g, Wb(h)))));
      d = a.p;
      return a.k ? (e = Ub(c, d + 1), e <= d ? Yb(a, e, c) : a.k(c)) : a.apply(a, Tb(c))
    }
    a.p = 5;
    a.k = function(a) {
      var c = I(a);
      a = M(a);
      var d = I(a);
      a = M(a);
      var e = I(a);
      a = M(a);
      var g = I(a);
      a = M(a);
      var h = I(a);
      a = J(a);
      return b(c, d, e, g, h, a)
    };
    a.i = b;
    return a
  }(), e = function(e, k, l, m, p, r) {
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
        return g.i(e, k, l, m, p, N(arguments, 5))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.p = 5;
  e.k = g.k;
  e.a = d;
  e.c = c;
  e.l = b;
  e.D = a;
  e.i = g.i;
  return e
}();
function $b(a, b) {
  for(;;) {
    if(null == H(b)) {
      return!0
    }
    if(s(a.d ? a.d(I(b)) : a.call(null, I(b)))) {
      var c = a, d = M(b);
      a = c;
      b = d
    }else {
      return u ? !1 : null
    }
  }
}
function ac(a) {
  return a
}
var bc = function() {
  function a(a, b, c, e) {
    return new Nb(null, function() {
      var m = H(b), p = H(c), r = H(e);
      return m && p && r ? P(a.c ? a.c(I(m), I(p), I(r)) : a.call(null, I(m), I(p), I(r)), d.l(a, J(m), J(p), J(r))) : null
    }, null, null)
  }
  function b(a, b, c) {
    return new Nb(null, function() {
      var e = H(b), m = H(c);
      return e && m ? P(a.a ? a.a(I(e), I(m)) : a.call(null, I(e), I(m)), d.c(a, J(e), J(m))) : null
    }, null, null)
  }
  function c(a, b) {
    return new Nb(null, function() {
      var c = H(b);
      if(c) {
        if(Bb(c)) {
          for(var e = Za(c), m = R(e), p = new Pb(Array(m), 0), r = 0;;) {
            if(r < m) {
              var y = a.d ? a.d(z.a(e, r)) : a.call(null, z.a(e, r));
              p.add(y);
              r += 1
            }else {
              break
            }
          }
          e = p.$();
          c = d.a(a, $a(c));
          return 0 === sa(e) ? c : new Sb(e, c, null, null)
        }
        return P(a.d ? a.d(I(c)) : a.call(null, I(c)), d.a(a, J(c)))
      }
      return null
    }, null, null)
  }
  var d = null, e = function() {
    function a(c, d, e, g, r) {
      var y = null;
      4 < arguments.length && (y = N(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, g, y)
    }
    function b(a, c, e, g, h) {
      return d.a(function(b) {
        return Zb.a(a, b)
      }, function C(a) {
        return new Nb(null, function() {
          var b = d.a(H, a);
          return $b(ac, b) ? P(d.a(I, b), C(d.a(J, b))) : null
        }, null, null)
      }(pb.i(h, g, N([e, c], 0))))
    }
    a.p = 4;
    a.k = function(a) {
      var c = I(a);
      a = M(a);
      var d = I(a);
      a = M(a);
      var e = I(a);
      a = M(a);
      var g = I(a);
      a = J(a);
      return b(c, d, e, g, a)
    };
    a.i = b;
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
        return e.i(d, h, k, l, N(arguments, 4))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.p = 4;
  d.k = e.k;
  d.a = c;
  d.c = b;
  d.l = a;
  d.i = e.i;
  return d
}();
function cc(a, b) {
  this.m = a;
  this.b = b
}
function dc(a) {
  a = a.e;
  return 32 > a ? 0 : a - 1 >>> 5 << 5
}
function fc(a, b, c) {
  for(;;) {
    if(0 === b) {
      return c
    }
    var d = new cc(a, Array(32));
    d.b[0] = c;
    c = d;
    b -= 5
  }
}
var hc = function gc(b, c, d, e) {
  var g = new cc(d.m, x(d.b)), h = b.e - 1 >>> c & 31;
  5 === c ? g.b[h] = e : (d = d.b[h], b = null != d ? gc(b, c - 5, d, e) : fc(null, c - 5, e), g.b[h] = b);
  return g
};
function ic(a, b) {
  throw Error([w("No item "), w(a), w(" in vector of length "), w(b)].join(""));
}
function jc(a, b) {
  if(0 <= b && b < a.e) {
    if(b >= dc(a)) {
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
    return ic(b, a.e)
  }
}
var lc = function kc(b, c, d, e, g) {
  var h = new cc(d.m, x(d.b));
  if(0 === c) {
    h.b[e & 31] = g
  }else {
    var k = e >>> c & 31;
    b = kc(b, c - 5, d.b[k], e, g);
    h.b[k] = b
  }
  return h
};
function mc(a, b, c, d, e, g) {
  this.j = a;
  this.e = b;
  this.shift = c;
  this.root = d;
  this.w = e;
  this.h = g;
  this.n = 4;
  this.f = 167668511
}
n = mc.prototype;
n.xa = function() {
  return new nc(this.e, this.shift, oc.d ? oc.d(this.root) : oc.call(null, this.root), pc.d ? pc.d(this.w) : pc.call(null, this.w))
};
n.v = function() {
  var a = this.h;
  return null != a ? a : this.h = a = nb(this)
};
n.F = function(a, b) {
  return z.c(this, b, null)
};
n.G = function(a, b, c) {
  return z.c(this, b, c)
};
n.oa = function(a, b, c) {
  if(0 <= b && b < this.e) {
    return dc(this) <= b ? (a = x(this.w), a[b & 31] = c, new mc(this.j, this.e, this.shift, this.root, a, null)) : new mc(this.j, this.e, this.shift, lc(this, this.shift, this.root, b, c), this.w, null)
  }
  if(b === this.e) {
    return ta(this, c)
  }
  if(u) {
    throw Error([w("Index "), w(b), w(" out of bounds  [0,"), w(this.e), w("]")].join(""));
  }
  return null
};
n.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.L(null, c);
      case 3:
        return this.T(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)))
};
n.d = function(a) {
  return this.L(null, a)
};
n.a = function(a, b) {
  return this.T(null, a, b)
};
n.A = function(a, b) {
  if(32 > this.e - dc(this)) {
    for(var c = this.w.length, d = Array(c + 1), e = 0;;) {
      if(e < c) {
        d[e] = this.w[e], e += 1
      }else {
        break
      }
    }
    d[c] = b;
    return new mc(this.j, this.e + 1, this.shift, this.root, d, null)
  }
  c = (d = this.e >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = new cc(null, Array(32)), d.b[0] = this.root, e = fc(null, this.shift, new cc(null, this.w)), d.b[1] = e) : d = hc(this, this.shift, this.root, new cc(null, this.w));
  return new mc(this.j, this.e + 1, c, d, [b], null)
};
n.Ua = function() {
  return z.a(this, 0)
};
n.Va = function() {
  return z.a(this, 1)
};
n.toString = function() {
  return E(this)
};
n.M = function(a, b) {
  return jb.a(this, b)
};
n.N = function(a, b, c) {
  return jb.c(this, b, c)
};
n.B = function() {
  return 0 === this.e ? null : 32 > this.e ? N.d(this.w) : u ? W.c ? W.c(this, 0, 0) : W.call(null, this, 0, 0) : null
};
n.C = f("e");
n.Ra = function(a, b, c) {
  return ya(this, b, c)
};
n.s = function(a, b) {
  return Q(this, b)
};
n.J = function(a, b) {
  return new mc(b, this.e, this.shift, this.root, this.w, this.h)
};
n.H = f("j");
n.L = function(a, b) {
  return jc(this, b)[b & 31]
};
n.T = function(a, b, c) {
  return 0 <= b && b < this.e ? z.a(this, b) : c
};
var qc = new cc(null, Array(32));
function rc(a, b, c, d, e, g) {
  this.u = a;
  this.S = b;
  this.g = c;
  this.q = d;
  this.j = e;
  this.h = g;
  this.f = 32243948;
  this.n = 1536
}
n = rc.prototype;
n.v = function() {
  var a = this.h;
  return null != a ? a : this.h = a = nb(this)
};
n.ba = function() {
  if(this.q + 1 < this.S.length) {
    var a = W.l ? W.l(this.u, this.S, this.g, this.q + 1) : W.call(null, this.u, this.S, this.g, this.q + 1);
    return null == a ? null : a
  }
  return ab(this)
};
n.A = function(a, b) {
  return P(b, this)
};
n.toString = function() {
  return E(this)
};
n.M = function(a, b) {
  return jb.a(sc.c ? sc.c(this.u, this.g + this.q, R(this.u)) : sc.call(null, this.u, this.g + this.q, R(this.u)), b)
};
n.N = function(a, b, c) {
  return jb.c(sc.c ? sc.c(this.u, this.g + this.q, R(this.u)) : sc.call(null, this.u, this.g + this.q, R(this.u)), b, c)
};
n.B = function() {
  return this
};
n.O = function() {
  return this.S[this.q]
};
n.Q = function() {
  if(this.q + 1 < this.S.length) {
    var a = W.l ? W.l(this.u, this.S, this.g, this.q + 1) : W.call(null, this.u, this.S, this.g, this.q + 1);
    return null == a ? K : a
  }
  return $a(this)
};
n.Ba = function() {
  var a = this.S.length, a = this.g + a < sa(this.u) ? W.c ? W.c(this.u, this.g + a, 0) : W.call(null, this.u, this.g + a, 0) : null;
  return null == a ? null : a
};
n.s = function(a, b) {
  return Q(this, b)
};
n.J = function(a, b) {
  return W.D ? W.D(this.u, this.S, this.g, this.q, b) : W.call(null, this.u, this.S, this.g, this.q, b)
};
n.Ca = function() {
  return Rb.a(this.S, this.q)
};
n.Da = function() {
  var a = this.S.length, a = this.g + a < sa(this.u) ? W.c ? W.c(this.u, this.g + a, 0) : W.call(null, this.u, this.g + a, 0) : null;
  return null == a ? K : a
};
var W = function() {
  function a(a, b, c, d, l) {
    return new rc(a, b, c, d, l, null)
  }
  function b(a, b, c, d) {
    return new rc(a, b, c, d, null, null)
  }
  function c(a, b, c) {
    return new rc(a, jc(a, b), b, c, null, null)
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
function tc(a, b, c, d, e) {
  this.j = a;
  this.Y = b;
  this.start = c;
  this.end = d;
  this.h = e;
  this.n = 0;
  this.f = 32400159
}
n = tc.prototype;
n.v = function() {
  var a = this.h;
  return null != a ? a : this.h = a = nb(this)
};
n.F = function(a, b) {
  return z.c(this, b, null)
};
n.G = function(a, b, c) {
  return z.c(this, b, c)
};
n.oa = function(a, b, c) {
  var d = this, e = d.start + b;
  return uc.D ? uc.D(d.j, vb.c(d.Y, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b
  }(), null) : uc.call(null, d.j, vb.c(d.Y, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b
  }(), null)
};
n.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.L(null, c);
      case 3:
        return this.T(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)))
};
n.d = function(a) {
  return this.L(null, a)
};
n.a = function(a, b) {
  return this.T(null, a, b)
};
n.A = function(a, b) {
  return uc.D ? uc.D(this.j, Ea(this.Y, this.end, b), this.start, this.end + 1, null) : uc.call(null, this.j, Ea(this.Y, this.end, b), this.start, this.end + 1, null)
};
n.toString = function() {
  return E(this)
};
n.M = function(a, b) {
  return jb.a(this, b)
};
n.N = function(a, b, c) {
  return jb.c(this, b, c)
};
n.B = function() {
  var a = this;
  return function c(d) {
    return d === a.end ? null : P(z.a(a.Y, d), new Nb(null, function() {
      return c(d + 1)
    }, null, null))
  }(a.start)
};
n.C = function() {
  return this.end - this.start
};
n.Ra = function(a, b, c) {
  return ya(this, b, c)
};
n.s = function(a, b) {
  return Q(this, b)
};
n.J = function(a, b) {
  return uc.D ? uc.D(b, this.Y, this.start, this.end, this.h) : uc.call(null, b, this.Y, this.start, this.end, this.h)
};
n.H = f("j");
n.L = function(a, b) {
  return 0 > b || this.end <= this.start + b ? ic(b, this.end - this.start) : z.a(this.Y, this.start + b)
};
n.T = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : z.c(this.Y, this.start + b, c)
};
function uc(a, b, c, d, e) {
  for(;;) {
    if(b instanceof tc) {
      c = b.start + c, d = b.start + d, b = b.Y
    }else {
      var g = R(b);
      if(0 > c || 0 > d || c > g || d > g) {
        throw Error("Index out of bounds");
      }
      return new tc(a, b, c, d, e)
    }
  }
}
var sc = function() {
  function a(a, b, c) {
    return uc(null, a, b, c, null)
  }
  function b(a, b) {
    return c.c(a, b, R(a))
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
function oc(a) {
  return new cc({}, x(a.b))
}
function pc(a) {
  var b = Array(32);
  Cb(a, 0, b, 0, a.length);
  return b
}
var wc = function vc(b, c, d, e) {
  d = b.root.m === d.m ? d : new cc(b.root.m, x(d.b));
  var g = b.e - 1 >>> c & 31;
  if(5 === c) {
    b = e
  }else {
    var h = d.b[g];
    b = null != h ? vc(b, c - 5, h, e) : fc(b.root.m, c - 5, e)
  }
  d.b[g] = b;
  return d
};
function nc(a, b, c, d) {
  this.e = a;
  this.shift = b;
  this.root = c;
  this.w = d;
  this.f = 275;
  this.n = 88
}
n = nc.prototype;
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
  return this.call.apply(this, [this].concat(x(b)))
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
n.L = function(a, b) {
  if(this.root.m) {
    return jc(this, b)[b & 31]
  }
  throw Error("nth after persistent!");
};
n.T = function(a, b, c) {
  return 0 <= b && b < this.e ? z.a(this, b) : c
};
n.C = function() {
  if(this.root.m) {
    return this.e
  }
  throw Error("count after persistent!");
};
n.Wa = function(a, b, c) {
  var d = this;
  if(d.root.m) {
    if(0 <= b && b < d.e) {
      return dc(this) <= b ? d.w[b & 31] = c : (a = function g(a, k) {
        var l = d.root.m === k.m ? k : new cc(d.root.m, x(k.b));
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
      return Ua(this, c)
    }
    if(u) {
      throw Error([w("Index "), w(b), w(" out of bounds for TransientVector of length"), w(d.e)].join(""));
    }
    return null
  }
  throw Error("assoc! after persistent!");
};
n.ra = function(a, b, c) {
  return Xa(this, b, c)
};
n.ya = function(a, b) {
  if(this.root.m) {
    if(32 > this.e - dc(this)) {
      this.w[this.e & 31] = b
    }else {
      var c = new cc(this.root.m, this.w), d = Array(32);
      d[0] = b;
      this.w = d;
      if(this.e >>> 5 > 1 << this.shift) {
        var d = Array(32), e = this.shift + 5;
        d[0] = this.root;
        d[1] = fc(this.root.m, this.shift, c);
        this.root = new cc(this.root.m, d);
        this.shift = e
      }else {
        this.root = wc(this, this.shift, this.root, c)
      }
    }
    this.e += 1;
    return this
  }
  throw Error("conj! after persistent!");
};
n.za = function() {
  if(this.root.m) {
    this.root.m = null;
    var a = this.e - dc(this), b = Array(a);
    Cb(this.w, 0, b, 0, a);
    return new mc(null, this.e, this.shift, this.root, b, null)
  }
  throw Error("persistent! called twice");
};
function xc() {
  this.n = 0;
  this.f = 2097152
}
xc.prototype.s = aa(!1);
var yc = new xc;
function zc(a, b) {
  return Db((null == b ? 0 : b ? b.f & 1024 || b.ob || (b.f ? 0 : t(za, b)) : t(za, b)) ? R(a) === R(b) ? $b(ac, bc.a(function(a) {
    return db.a(tb.c(b, I(a), yc), I(M(a)))
  }, a)) : null : null)
}
function Ac(a, b) {
  var c = a.b;
  if(b instanceof V) {
    a: {
      for(var d = c.length, e = b.fa, g = 0;;) {
        if(d <= g) {
          c = -1;
          break a
        }
        var h = c[g];
        if(h instanceof V && e === h.fa) {
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
      if(b instanceof gb) {
        a: {
          d = c.length;
          e = b.ia;
          for(g = 0;;) {
            if(d <= g) {
              c = -1;
              break a
            }
            h = c[g];
            if(h instanceof gb && e === h.ia) {
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
                if(db.a(b, c[e])) {
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
  }
  return c
}
function Bc(a, b, c) {
  this.b = a;
  this.g = b;
  this.ma = c;
  this.n = 0;
  this.f = 32374990
}
n = Bc.prototype;
n.v = function() {
  return nb(this)
};
n.ba = function() {
  return this.g < this.b.length - 2 ? new Bc(this.b, this.g + 2, this.ma) : null
};
n.A = function(a, b) {
  return P(b, this)
};
n.toString = function() {
  return E(this)
};
n.M = function(a, b) {
  return S.a(b, this)
};
n.N = function(a, b, c) {
  return S.c(b, c, this)
};
n.B = function() {
  return this
};
n.C = function() {
  return(this.b.length - this.g) / 2
};
n.O = function() {
  return new mc(null, 2, 5, qc, [this.b[this.g], this.b[this.g + 1]], null)
};
n.Q = function() {
  return this.g < this.b.length - 2 ? new Bc(this.b, this.g + 2, this.ma) : K
};
n.s = function(a, b) {
  return Q(this, b)
};
n.J = function(a, b) {
  return new Bc(this.b, this.g, b)
};
n.H = f("ma");
function ha(a, b, c, d) {
  this.j = a;
  this.e = b;
  this.b = c;
  this.h = d;
  this.n = 4;
  this.f = 16123663
}
n = ha.prototype;
n.xa = function() {
  return new Cc({}, this.b.length, x(this.b))
};
n.v = function() {
  var a = this.h;
  return null != a ? a : this.h = a = Ib(this)
};
n.F = function(a, b) {
  return xa.c(this, b, null)
};
n.G = function(a, b, c) {
  a = Ac(this, b);
  return-1 === a ? c : this.b[a + 1]
};
n.oa = function(a, b, c) {
  a = Ac(this, b);
  if(-1 === a) {
    if(this.e < Dc) {
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
      return new ha(this.j, this.e + 1, e, null)
    }
    a = Ia;
    d = ya;
    e = Ec;
    null != e ? e && (e.n & 4 || e.mb) ? (e = Fb.c(Ua, Ta(e), this), e = Va(e)) : e = Fb.c(ta, e, this) : e = Fb.c(pb, K, this);
    return a(d(e, b, c), this.j)
  }
  return c === this.b[a + 1] ? this : u ? (b = x(this.b), b[a + 1] = c, new ha(this.j, this.e, b, null)) : null
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
  return this.call.apply(this, [this].concat(x(b)))
};
n.d = function(a) {
  return this.F(null, a)
};
n.a = function(a, b) {
  return this.G(null, a, b)
};
n.A = function(a, b) {
  return Ab(b) ? ya(this, z.a(b, 0), z.a(b, 1)) : Fb.c(ta, this, b)
};
n.toString = function() {
  return E(this)
};
n.B = function() {
  return 0 <= this.b.length - 2 ? new Bc(this.b, 0, null) : null
};
n.C = f("e");
n.s = function(a, b) {
  return zc(this, b)
};
n.J = function(a, b) {
  return new ha(b, this.e, this.b, this.h)
};
n.H = f("j");
var Dc = 8;
function Cc(a, b, c) {
  this.ka = a;
  this.ca = b;
  this.b = c;
  this.n = 56;
  this.f = 258
}
n = Cc.prototype;
n.ra = function(a, b, c) {
  if(s(this.ka)) {
    a = Ac(this, b);
    if(-1 === a) {
      if(this.ca + 2 <= 2 * Dc) {
        return this.ca += 2, this.b.push(b), this.b.push(c), this
      }
      a = Fc.a ? Fc.a(this.ca, this.b) : Fc.call(null, this.ca, this.b);
      return Wa(a, b, c)
    }
    c !== this.b[a + 1] && (this.b[a + 1] = c);
    return this
  }
  throw Error("assoc! after persistent!");
};
n.ya = function(a, b) {
  if(s(this.ka)) {
    if(b ? b.f & 2048 || b.bb || (b.f ? 0 : t(Aa, b)) : t(Aa, b)) {
      return Wa(this, T.d ? T.d(b) : T.call(null, b), U.d ? U.d(b) : U.call(null, b))
    }
    for(var c = H(b), d = this;;) {
      var e = I(c);
      if(s(e)) {
        c = M(c), d = Wa(d, T.d ? T.d(e) : T.call(null, e), U.d ? U.d(e) : U.call(null, e))
      }else {
        return d
      }
    }
  }else {
    throw Error("conj! after persistent!");
  }
};
n.za = function() {
  if(s(this.ka)) {
    return this.ka = !1, new ha(null, Gb((this.ca - this.ca % 2) / 2), this.b, null)
  }
  throw Error("persistent! called twice");
};
n.F = function(a, b) {
  return xa.c(this, b, null)
};
n.G = function(a, b, c) {
  if(s(this.ka)) {
    return a = Ac(this, b), -1 === a ? c : this.b[a + 1]
  }
  throw Error("lookup after persistent!");
};
n.C = function() {
  if(s(this.ka)) {
    return Gb((this.ca - this.ca % 2) / 2)
  }
  throw Error("count after persistent!");
};
function Fc(a, b) {
  for(var c = Ta(Ec), d = 0;;) {
    if(d < a) {
      c = Wa(c, b[d], b[d + 1]), d += 2
    }else {
      return c
    }
  }
}
function Gc() {
  this.Z = !1
}
function Hc(a, b) {
  return a === b ? !0 : a === b || a instanceof V && b instanceof V && a.fa === b.fa ? !0 : u ? db.a(a, b) : null
}
var Ic = function() {
  function a(a, b, c, h, k) {
    a = x(a);
    a[b] = c;
    a[h] = k;
    return a
  }
  function b(a, b, c) {
    a = x(a);
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
}(), Jc = function() {
  function a(a, b, c, h, k, l) {
    a = a.la(b);
    a.b[c] = h;
    a.b[k] = l;
    return a
  }
  function b(a, b, c, h) {
    a = a.la(b);
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
  c.aa = a;
  return c
}();
function Kc(a, b, c) {
  this.m = a;
  this.r = b;
  this.b = c
}
n = Kc.prototype;
n.V = function(a, b, c, d, e, g) {
  var h = 1 << (c >>> b & 31), k = Hb(this.r & h - 1);
  if(0 === (this.r & h)) {
    var l = Hb(this.r);
    if(2 * l < this.b.length) {
      a = this.la(a);
      b = a.b;
      g.Z = !0;
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
      a.r |= h;
      return a
    }
    if(16 <= l) {
      k = Array(32);
      k[c >>> b & 31] = Lc.V(a, b + 5, c, d, e, g);
      for(e = d = 0;;) {
        if(32 > d) {
          0 !== (this.r >>> d & 1) && (k[d] = null != this.b[e] ? Lc.V(a, b + 5, G(this.b[e]), this.b[e], this.b[e + 1], g) : this.b[e + 1], e += 2), d += 1
        }else {
          break
        }
      }
      return new Mc(a, l + 1, k)
    }
    return u ? (b = Array(2 * (l + 4)), Cb(this.b, 0, b, 0, 2 * k), b[2 * k] = d, b[2 * k + 1] = e, Cb(this.b, 2 * k, b, 2 * (k + 1), 2 * (l - k)), g.Z = !0, a = this.la(a), a.b = b, a.r |= h, a) : null
  }
  l = this.b[2 * k];
  h = this.b[2 * k + 1];
  return null == l ? (l = h.V(a, b + 5, c, d, e, g), l === h ? this : Jc.l(this, a, 2 * k + 1, l)) : Hc(d, l) ? e === h ? this : Jc.l(this, a, 2 * k + 1, e) : u ? (g.Z = !0, Jc.aa(this, a, 2 * k, null, 2 * k + 1, Nc.ja ? Nc.ja(a, b + 5, l, h, c, d, e) : Nc.call(null, a, b + 5, l, h, c, d, e))) : null
};
n.ua = function() {
  return Oc.d ? Oc.d(this.b) : Oc.call(null, this.b)
};
n.la = function(a) {
  if(a === this.m) {
    return this
  }
  var b = Hb(this.r), c = Array(0 > b ? 4 : 2 * (b + 1));
  Cb(this.b, 0, c, 0, 2 * b);
  return new Kc(a, this.r, c)
};
n.U = function(a, b, c, d, e) {
  var g = 1 << (b >>> a & 31), h = Hb(this.r & g - 1);
  if(0 === (this.r & g)) {
    var k = Hb(this.r);
    if(16 <= k) {
      h = Array(32);
      h[b >>> a & 31] = Lc.U(a + 5, b, c, d, e);
      for(d = c = 0;;) {
        if(32 > c) {
          0 !== (this.r >>> c & 1) && (h[c] = null != this.b[d] ? Lc.U(a + 5, G(this.b[d]), this.b[d], this.b[d + 1], e) : this.b[d + 1], d += 2), c += 1
        }else {
          break
        }
      }
      return new Mc(null, k + 1, h)
    }
    a = Array(2 * (k + 1));
    Cb(this.b, 0, a, 0, 2 * h);
    a[2 * h] = c;
    a[2 * h + 1] = d;
    Cb(this.b, 2 * h, a, 2 * (h + 1), 2 * (k - h));
    e.Z = !0;
    return new Kc(null, this.r | g, a)
  }
  k = this.b[2 * h];
  g = this.b[2 * h + 1];
  return null == k ? (k = g.U(a + 5, b, c, d, e), k === g ? this : new Kc(null, this.r, Ic.c(this.b, 2 * h + 1, k))) : Hc(c, k) ? d === g ? this : new Kc(null, this.r, Ic.c(this.b, 2 * h + 1, d)) : u ? (e.Z = !0, new Kc(null, this.r, Ic.D(this.b, 2 * h, null, 2 * h + 1, Nc.aa ? Nc.aa(a + 5, k, g, b, c, d) : Nc.call(null, a + 5, k, g, b, c, d)))) : null
};
n.ha = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if(0 === (this.r & e)) {
    return d
  }
  var g = Hb(this.r & e - 1), e = this.b[2 * g], g = this.b[2 * g + 1];
  return null == e ? g.ha(a + 5, b, c, d) : Hc(c, e) ? g : u ? d : null
};
var Lc = new Kc(null, 0, []);
function Mc(a, b, c) {
  this.m = a;
  this.e = b;
  this.b = c
}
n = Mc.prototype;
n.V = function(a, b, c, d, e, g) {
  var h = c >>> b & 31, k = this.b[h];
  if(null == k) {
    return a = Jc.l(this, a, h, Lc.V(a, b + 5, c, d, e, g)), a.e += 1, a
  }
  b = k.V(a, b + 5, c, d, e, g);
  return b === k ? this : Jc.l(this, a, h, b)
};
n.ua = function() {
  return Pc.d ? Pc.d(this.b) : Pc.call(null, this.b)
};
n.la = function(a) {
  return a === this.m ? this : new Mc(a, this.e, x(this.b))
};
n.U = function(a, b, c, d, e) {
  var g = b >>> a & 31, h = this.b[g];
  if(null == h) {
    return new Mc(null, this.e + 1, Ic.c(this.b, g, Lc.U(a + 5, b, c, d, e)))
  }
  a = h.U(a + 5, b, c, d, e);
  return a === h ? this : new Mc(null, this.e, Ic.c(this.b, g, a))
};
n.ha = function(a, b, c, d) {
  var e = this.b[b >>> a & 31];
  return null != e ? e.ha(a + 5, b, c, d) : d
};
function Qc(a, b, c) {
  b *= 2;
  for(var d = 0;;) {
    if(d < b) {
      if(Hc(c, a[d])) {
        return d
      }
      d += 2
    }else {
      return-1
    }
  }
}
function Rc(a, b, c, d) {
  this.m = a;
  this.ea = b;
  this.e = c;
  this.b = d
}
n = Rc.prototype;
n.V = function(a, b, c, d, e, g) {
  if(c === this.ea) {
    b = Qc(this.b, this.e, d);
    if(-1 === b) {
      if(this.b.length > 2 * this.e) {
        return a = Jc.aa(this, a, 2 * this.e, d, 2 * this.e + 1, e), g.Z = !0, a.e += 1, a
      }
      c = this.b.length;
      b = Array(c + 2);
      Cb(this.b, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      g.Z = !0;
      g = this.e + 1;
      a === this.m ? (this.b = b, this.e = g, a = this) : a = new Rc(this.m, this.ea, g, b);
      return a
    }
    return this.b[b + 1] === e ? this : Jc.l(this, a, b + 1, e)
  }
  return(new Kc(a, 1 << (this.ea >>> b & 31), [null, this, null, null])).V(a, b, c, d, e, g)
};
n.ua = function() {
  return Oc.d ? Oc.d(this.b) : Oc.call(null, this.b)
};
n.la = function(a) {
  if(a === this.m) {
    return this
  }
  var b = Array(2 * (this.e + 1));
  Cb(this.b, 0, b, 0, 2 * this.e);
  return new Rc(a, this.ea, this.e, b)
};
n.U = function(a, b, c, d, e) {
  return b === this.ea ? (a = Qc(this.b, this.e, c), -1 === a ? (a = 2 * this.e, b = Array(a + 2), Cb(this.b, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.Z = !0, new Rc(null, this.ea, this.e + 1, b)) : db.a(this.b[a], d) ? this : new Rc(null, this.ea, this.e, Ic.c(this.b, a + 1, d))) : (new Kc(null, 1 << (this.ea >>> a & 31), [null, this])).U(a, b, c, d, e)
};
n.ha = function(a, b, c, d) {
  a = Qc(this.b, this.e, c);
  return 0 > a ? d : Hc(c, this.b[a]) ? this.b[a + 1] : u ? d : null
};
var Nc = function() {
  function a(a, b, c, h, k, l, m) {
    var p = G(c);
    if(p === k) {
      return new Rc(null, p, 2, [c, h, l, m])
    }
    var r = new Gc;
    return Lc.V(a, b, p, c, h, r).V(a, b, k, l, m, r)
  }
  function b(a, b, c, h, k, l) {
    var m = G(b);
    if(m === h) {
      return new Rc(null, m, 2, [b, c, k, l])
    }
    var p = new Gc;
    return Lc.U(a, m, b, c, p).U(a, h, k, l, p)
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
  c.aa = b;
  c.ja = a;
  return c
}();
function Sc(a, b, c, d, e) {
  this.j = a;
  this.W = b;
  this.g = c;
  this.o = d;
  this.h = e;
  this.n = 0;
  this.f = 32374860
}
n = Sc.prototype;
n.v = function() {
  var a = this.h;
  return null != a ? a : this.h = a = nb(this)
};
n.A = function(a, b) {
  return P(b, this)
};
n.toString = function() {
  return E(this)
};
n.M = function(a, b) {
  return S.a(b, this)
};
n.N = function(a, b, c) {
  return S.c(b, c, this)
};
n.B = function() {
  return this
};
n.O = function() {
  return null == this.o ? new mc(null, 2, 5, qc, [this.W[this.g], this.W[this.g + 1]], null) : I(this.o)
};
n.Q = function() {
  return null == this.o ? Oc.c ? Oc.c(this.W, this.g + 2, null) : Oc.call(null, this.W, this.g + 2, null) : Oc.c ? Oc.c(this.W, this.g, M(this.o)) : Oc.call(null, this.W, this.g, M(this.o))
};
n.s = function(a, b) {
  return Q(this, b)
};
n.J = function(a, b) {
  return new Sc(b, this.W, this.g, this.o, this.h)
};
n.H = f("j");
var Oc = function() {
  function a(a, b, c) {
    if(null == c) {
      for(c = a.length;;) {
        if(b < c) {
          if(null != a[b]) {
            return new Sc(null, a, b, null, null)
          }
          var h = a[b + 1];
          if(s(h) && (h = h.ua(), s(h))) {
            return new Sc(null, a, b + 2, h, null)
          }
          b += 2
        }else {
          return null
        }
      }
    }else {
      return new Sc(null, a, b, c, null)
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
function Tc(a, b, c, d, e) {
  this.j = a;
  this.W = b;
  this.g = c;
  this.o = d;
  this.h = e;
  this.n = 0;
  this.f = 32374860
}
n = Tc.prototype;
n.v = function() {
  var a = this.h;
  return null != a ? a : this.h = a = nb(this)
};
n.A = function(a, b) {
  return P(b, this)
};
n.toString = function() {
  return E(this)
};
n.M = function(a, b) {
  return S.a(b, this)
};
n.N = function(a, b, c) {
  return S.c(b, c, this)
};
n.B = function() {
  return this
};
n.O = function() {
  return I(this.o)
};
n.Q = function() {
  return Pc.l ? Pc.l(null, this.W, this.g, M(this.o)) : Pc.call(null, null, this.W, this.g, M(this.o))
};
n.s = function(a, b) {
  return Q(this, b)
};
n.J = function(a, b) {
  return new Tc(b, this.W, this.g, this.o, this.h)
};
n.H = f("j");
var Pc = function() {
  function a(a, b, c, h) {
    if(null == h) {
      for(h = b.length;;) {
        if(c < h) {
          var k = b[c];
          if(s(k) && (k = k.ua(), s(k))) {
            return new Tc(a, b, c + 1, k, null)
          }
          c += 1
        }else {
          return null
        }
      }
    }else {
      return new Tc(a, b, c, h, null)
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
function Uc(a, b, c, d, e, g) {
  this.j = a;
  this.e = b;
  this.root = c;
  this.P = d;
  this.R = e;
  this.h = g;
  this.n = 4;
  this.f = 16123663
}
n = Uc.prototype;
n.xa = function() {
  return new Vc({}, this.root, this.e, this.P, this.R)
};
n.v = function() {
  var a = this.h;
  return null != a ? a : this.h = a = Ib(this)
};
n.F = function(a, b) {
  return xa.c(this, b, null)
};
n.G = function(a, b, c) {
  return null == b ? this.P ? this.R : c : null == this.root ? c : u ? this.root.ha(0, G(b), b, c) : null
};
n.oa = function(a, b, c) {
  if(null == b) {
    return this.P && c === this.R ? this : new Uc(this.j, this.P ? this.e : this.e + 1, this.root, !0, c, null)
  }
  a = new Gc;
  b = (null == this.root ? Lc : this.root).U(0, G(b), b, c, a);
  return b === this.root ? this : new Uc(this.j, a.Z ? this.e + 1 : this.e, b, this.P, this.R, null)
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
  return this.call.apply(this, [this].concat(x(b)))
};
n.d = function(a) {
  return this.F(null, a)
};
n.a = function(a, b) {
  return this.G(null, a, b)
};
n.A = function(a, b) {
  return Ab(b) ? ya(this, z.a(b, 0), z.a(b, 1)) : Fb.c(ta, this, b)
};
n.toString = function() {
  return E(this)
};
n.B = function() {
  if(0 < this.e) {
    var a = null != this.root ? this.root.ua() : null;
    return this.P ? P(new mc(null, 2, 5, qc, [null, this.R], null), a) : a
  }
  return null
};
n.C = f("e");
n.s = function(a, b) {
  return zc(this, b)
};
n.J = function(a, b) {
  return new Uc(b, this.e, this.root, this.P, this.R, this.h)
};
n.H = f("j");
var Ec = new Uc(null, 0, null, !1, null, 0);
function ub(a, b) {
  for(var c = a.length, d = 0, e = Ta(Ec);;) {
    if(d < c) {
      var g = d + 1, e = e.ra(null, a[d], b[d]), d = g
    }else {
      return Va(e)
    }
  }
}
function Vc(a, b, c, d, e) {
  this.m = a;
  this.root = b;
  this.count = c;
  this.P = d;
  this.R = e;
  this.n = 56;
  this.f = 258
}
n = Vc.prototype;
n.ra = function(a, b, c) {
  return Wc(this, b, c)
};
n.ya = function(a, b) {
  var c;
  a: {
    if(this.m) {
      if(b ? b.f & 2048 || b.bb || (b.f ? 0 : t(Aa, b)) : t(Aa, b)) {
        c = Wc(this, T.d ? T.d(b) : T.call(null, b), U.d ? U.d(b) : U.call(null, b));
        break a
      }
      c = H(b);
      for(var d = this;;) {
        var e = I(c);
        if(s(e)) {
          c = M(c), d = Wc(d, T.d ? T.d(e) : T.call(null, e), U.d ? U.d(e) : U.call(null, e))
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
n.za = function() {
  var a;
  if(this.m) {
    this.m = null, a = new Uc(null, this.count, this.root, this.P, this.R, null)
  }else {
    throw Error("persistent! called twice");
  }
  return a
};
n.F = function(a, b) {
  return null == b ? this.P ? this.R : null : null == this.root ? null : this.root.ha(0, G(b), b)
};
n.G = function(a, b, c) {
  return null == b ? this.P ? this.R : c : null == this.root ? c : this.root.ha(0, G(b), b, c)
};
n.C = function() {
  if(this.m) {
    return this.count
  }
  throw Error("count after persistent!");
};
function Wc(a, b, c) {
  if(a.m) {
    if(null == b) {
      a.R !== c && (a.R = c), a.P || (a.count += 1, a.P = !0)
    }else {
      var d = new Gc;
      b = (null == a.root ? Lc : a.root).V(a.m, 0, G(b), b, c, d);
      b !== a.root && (a.root = b);
      d.Z && (a.count += 1)
    }
    return a
  }
  throw Error("assoc! after persistent!");
}
var Xc = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    for(var b = H(a), e = Ta(Ec);;) {
      if(b) {
        a = M(M(b));
        var g = I(b), b = I(M(b)), e = Wa(e, g, b), b = a
      }else {
        return Va(e)
      }
    }
  }
  a.p = 0;
  a.k = function(a) {
    a = H(a);
    return b(a)
  };
  a.i = b;
  return a
}();
function T(a) {
  return Ba(a)
}
function U(a) {
  return Ca(a)
}
function X(a, b, c, d, e, g, h) {
  D(a, c);
  H(h) && (b.c ? b.c(I(h), a, g) : b.call(null, I(h), a, g));
  c = M(h);
  for(h = ma.d(g);c && (null == h || 0 !== h);) {
    D(a, d), b.c ? b.c(I(c), a, g) : b.call(null, I(c), a, g), c = M(c), h -= 1
  }
  s(ma.d(g)) && (D(a, d), b.c ? b.c("...", a, g) : b.call(null, "...", a, g));
  return D(a, e)
}
var Yc = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = N(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e)
  }
  function b(a, b) {
    for(var e = H(b), g = null, h = 0, k = 0;;) {
      if(k < h) {
        var l = g.L(null, k);
        D(a, l);
        k += 1
      }else {
        if(e = H(e)) {
          g = e, Bb(g) ? (e = Za(g), h = $a(g), g = e, l = R(e), e = h, h = l) : (l = I(g), D(a, l), e = M(g), g = null, h = 0), k = 0
        }else {
          return null
        }
      }
    }
  }
  a.p = 1;
  a.k = function(a) {
    var d = I(a);
    a = J(a);
    return b(d, a)
  };
  a.i = b;
  return a
}(), Zc = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function $c(a) {
  return[w('"'), w(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return Zc[a]
  })), w('"')].join("")
}
var Z = function ad(b, c, d) {
  if(null == b) {
    return D(c, "nil")
  }
  if(void 0 === b) {
    return D(c, "#\x3cundefined\x3e")
  }
  if(u) {
    s(function() {
      var c = tb.a(d, ka);
      return s(c) ? (c = b ? b.f & 131072 || b.cb ? !0 : b.f ? !1 : t(Ga, b) : t(Ga, b)) ? xb(b) : c : c
    }()) && (D(c, "^"), ad(xb(b), c, d), D(c, " "));
    if(null == b) {
      return D(c, "nil")
    }
    if(b.gb) {
      return b.tb(c)
    }
    if(b && (b.f & 2147483648 || b.I)) {
      return b.t(null, c, d)
    }
    if(na(b) === Boolean || "number" === typeof b) {
      return D(c, "" + w(b))
    }
    if(b instanceof Array) {
      return X(c, ad, "#\x3cArray [", ", ", "]\x3e", d, b)
    }
    if("string" == typeof b) {
      return s(ja.d(d)) ? D(c, $c(b)) : D(c, b)
    }
    if(wb(b)) {
      return Yc.i(c, N(["#\x3c", "" + w(b), "\x3e"], 0))
    }
    if(b instanceof Date) {
      var e = function(b, c) {
        for(var d = "" + w(b);;) {
          if(R(d) < c) {
            d = [w("0"), w(d)].join("")
          }else {
            return d
          }
        }
      };
      return Yc.i(c, N(['#inst "', "" + w(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0))
    }
    return b instanceof RegExp ? Yc.i(c, N(['#"', b.source, '"'], 0)) : (b ? b.f & 2147483648 || b.I || (b.f ? 0 : t(Qa, b)) : t(Qa, b)) ? Ra(b, c, d) : u ? Yc.i(c, N(["#\x3c", "" + w(b), "\x3e"], 0)) : null
  }
  return null
}, bd = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    var b;
    (b = null == a) || (b = H(a), b = s(b) ? !1 : !0);
    if(b) {
      b = ""
    }else {
      b = w;
      var e = ga(), g = new ea;
      a: {
        var h = new bb(g);
        Z(I(a), h, e);
        a = H(M(a));
        for(var k = null, l = 0, m = 0;;) {
          if(m < l) {
            var p = k.L(null, m);
            D(h, " ");
            Z(p, h, e);
            m += 1
          }else {
            if(a = H(a)) {
              k = a, Bb(k) ? (a = Za(k), l = $a(k), k = a, p = R(a), a = l, l = p) : (p = I(k), D(h, " "), Z(p, h, e), a = M(k), k = null, l = 0), m = 0
            }else {
              break a
            }
          }
        }
      }
      b = "" + b(g)
    }
    return b
  }
  a.p = 0;
  a.k = function(a) {
    a = H(a);
    return b(a)
  };
  a.i = b;
  return a
}();
ib.prototype.I = !0;
ib.prototype.t = function(a, b, c) {
  return X(b, Z, "(", " ", ")", c, this)
};
tc.prototype.I = !0;
tc.prototype.t = function(a, b, c) {
  return X(b, Z, "[", " ", "]", c, this)
};
Sb.prototype.I = !0;
Sb.prototype.t = function(a, b, c) {
  return X(b, Z, "(", " ", ")", c, this)
};
ha.prototype.I = !0;
ha.prototype.t = function(a, b, c) {
  return X(b, function(a) {
    return X(b, Z, "", " ", "", c, a)
  }, "{", ", ", "}", c, this)
};
Nb.prototype.I = !0;
Nb.prototype.t = function(a, b, c) {
  return X(b, Z, "(", " ", ")", c, this)
};
Sc.prototype.I = !0;
Sc.prototype.t = function(a, b, c) {
  return X(b, Z, "(", " ", ")", c, this)
};
rc.prototype.I = !0;
rc.prototype.t = function(a, b, c) {
  return X(b, Z, "(", " ", ")", c, this)
};
Uc.prototype.I = !0;
Uc.prototype.t = function(a, b, c) {
  return X(b, function(a) {
    return X(b, Z, "", " ", "", c, a)
  }, "{", ", ", "}", c, this)
};
mc.prototype.I = !0;
mc.prototype.t = function(a, b, c) {
  return X(b, Z, "[", " ", "]", c, this)
};
Jb.prototype.I = !0;
Jb.prototype.t = function(a, b, c) {
  return X(b, Z, "(", " ", ")", c, this)
};
Bc.prototype.I = !0;
Bc.prototype.t = function(a, b, c) {
  return X(b, Z, "(", " ", ")", c, this)
};
Kb.prototype.I = !0;
Kb.prototype.t = function(a, b) {
  return D(b, "()")
};
Mb.prototype.I = !0;
Mb.prototype.t = function(a, b, c) {
  return X(b, Z, "(", " ", ")", c, this)
};
Tc.prototype.I = !0;
Tc.prototype.t = function(a, b, c) {
  return X(b, Z, "(", " ", ")", c, this)
};
mc.prototype.va = !0;
mc.prototype.wa = function(a, b) {
  return Eb.a(this, b)
};
tc.prototype.va = !0;
tc.prototype.wa = function(a, b) {
  return Eb.a(this, b)
};
V.prototype.va = !0;
V.prototype.wa = function(a, b) {
  return cb(this, b)
};
gb.prototype.va = !0;
gb.prototype.wa = function(a, b) {
  return cb(this, b)
};
function cd(a, b, c, d) {
  this.state = a;
  this.j = b;
  this.ib = c;
  this.jb = d;
  this.f = 2153938944;
  this.n = 2
}
n = cd.prototype;
n.v = function() {
  return this[ca] || (this[ca] = ++da)
};
n.Xa = function(a, b, c) {
  a = H(this.jb);
  for(var d = null, e = 0, g = 0;;) {
    if(g < e) {
      var h = d.L(null, g), k = sb.c(h, 0, null), h = sb.c(h, 1, null);
      h.l ? h.l(k, this, b, c) : h.call(null, k, this, b, c);
      g += 1
    }else {
      if(a = H(a)) {
        Bb(a) ? (d = Za(a), a = $a(a), k = d, e = R(d), d = k) : (d = I(a), k = sb.c(d, 0, null), h = sb.c(d, 1, null), h.l ? h.l(k, this, b, c) : h.call(null, k, this, b, c), a = M(a), d = null, e = 0), g = 0
      }else {
        return null
      }
    }
  }
};
n.t = function(a, b, c) {
  D(b, "#\x3cAtom: ");
  Z(this.state, b, c);
  return D(b, "\x3e")
};
n.H = f("j");
n.$a = f("state");
n.s = function(a, b) {
  return this === b
};
var ed = function() {
  function a(a) {
    return new cd(a, null, null, null)
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k)
    }
    function b(a, c) {
      var d = (null == c ? 0 : c ? c.f & 64 || c.qa || (c.f ? 0 : t(va, c)) : t(va, c)) ? Zb.a(Xc, c) : c, e = tb.a(d, dd), d = tb.a(d, ka);
      return new cd(a, d, e, null)
    }
    a.p = 1;
    a.k = function(a) {
      var c = I(a);
      a = J(a);
      return b(c, a)
    };
    a.i = b;
    return a
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.i(b, N(arguments, 1))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.p = 1;
  b.k = c.k;
  b.d = a;
  b.i = c.i;
  return b
}();
function fd(a, b) {
  var c = a.ib;
  if(s(c) && !s(c.d ? c.d(b) : c.call(null, b))) {
    throw Error([w("Assert failed: "), w("Validator rejected reference state"), w("\n"), w(bd.i(N([Lb(new gb(null, "validate", "validate", 1233162959, null), new gb(null, "new-value", "new-value", 972165309, null))], 0)))].join(""));
  }
  c = a.state;
  a.state = b;
  Sa(a, c, b)
}
;var gd, hd, id, jd;
function kd() {
  return ba.navigator ? ba.navigator.userAgent : null
}
jd = id = hd = gd = !1;
var ld;
if(ld = kd()) {
  var md = ba.navigator;
  gd = 0 == ld.indexOf("Opera");
  hd = !gd && -1 != ld.indexOf("MSIE");
  id = !gd && -1 != ld.indexOf("WebKit");
  jd = !gd && !id && "Gecko" == md.product
}
var nd = hd, od = jd, pd = id;
var qd;
if(gd && ba.opera) {
  var rd = ba.opera.version;
  "function" == typeof rd && rd()
}else {
  od ? qd = /rv\:([^\);]+)(\)|;)/ : nd ? qd = /MSIE\s+([^\);]+)(\)|;)/ : pd && (qd = /WebKit\/(\S+)/), qd && qd.exec(kd())
}
;var la = new V(null, "dup", "dup"), fb = new V(null, "default", "default"), ia = new V(null, "flush-on-newline", "flush-on-newline"), ma = new V(null, "print-length", "print-length"), u = new V(null, "else", "else"), ja = new V(null, "readably", "readably"), dd = new V(null, "validator", "validator"), ka = new V(null, "meta", "meta");
var sd = ed.d(500), td = ed.d(500), ud, vd;
var wd = window.location.href, xd = wd.search(/#|$/), yd;
b: {
  for(var zd = 0;0 <= (zd = wd.indexOf("n", zd)) && zd < xd;) {
    var Ad = wd.charCodeAt(zd - 1);
    if(38 == Ad || 63 == Ad) {
      var Bd = wd.charCodeAt(zd + 1);
      if(!Bd || 61 == Bd || 38 == Bd || 35 == Bd) {
        yd = zd;
        break b
      }
    }
    zd += 2
  }
  yd = -1
}
if(0 > yd) {
  vd = null
}else {
  var Cd = wd.indexOf("\x26", yd);
  if(0 > Cd || Cd > xd) {
    Cd = xd
  }
  yd += 2;
  vd = decodeURIComponent(wd.substr(yd, Cd - yd).replace(/\+/g, " "))
}
ud = s(vd) ? vd : 100;
var Dd = document.getElementById("world"), Ed = Dd.getContext("2d"), $ = [];
function Fd() {
  a: {
    Ed.clearRect(0, 0, Fa(sd), Fa(td));
    for(var a = 0;;) {
      if(a < $.length) {
        Ed.fillRect($[a].x - 2.5, $[a].y - 2.5, 5, 5), a += 1
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
        if(0 > b.x && 0 > b.vx || b.x > Fa(sd) && 0 < b.vx) {
          b.vx *= -1
        }
        if(0 > b.y && 0 > b.vy || b.y > Fa(td) && 0 < b.vy) {
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
}
function Gd() {
  fd(sd, document.documentElement.clientWidth);
  fd(td, document.documentElement.clientHeight);
  Dd.width = Fa(sd);
  return Dd.height = Fa(td)
}
window.onload = function() {
  Gd();
  Ed.fillStyle = "rgba(33, 33, 33, 0.8)";
  a: {
    for(var a = 0;;) {
      if(a < ud) {
        $[a] = {x:Math.random() * Fa(sd), y:Math.random() * Fa(td), vx:0, vy:0}, a += 1
      }else {
        break a
      }
    }
  }
  return setInterval(Fd, 1E3 / 30)
};
window.onresize = Gd;

})();
