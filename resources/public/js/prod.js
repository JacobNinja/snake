function aa() {
  return function(a) {
    return a
  }
}
function h(a) {
  return function() {
    return this[a]
  }
}
function q(a) {
  return function() {
    return a
  }
}
var r, ba = this;
function s(a) {
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
function ca(a) {
  return"string" == typeof a
}
function ea(a) {
  return a[fa] || (a[fa] = ++ga)
}
var fa = "closure_uid_" + (1E9 * Math.random() >>> 0), ga = 0;
function ha(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.rc = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a
}
;function ia(a) {
  for(var b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296
  }
  return b
}
;var ja = Array.prototype, ka = ja.indexOf ? function(a, b, c) {
  return ja.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if(ca(a)) {
    return ca(b) && 1 == b.length ? a.indexOf(b, c) : -1
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
};
function la(a, b) {
  for(var c in a) {
    b.call(void 0, a[c], c, a)
  }
}
var ma = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function oa(a, b) {
  for(var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for(c in d) {
      a[c] = d[c]
    }
    for(var f = 0;f < ma.length;f++) {
      c = ma[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
}
;function pa(a, b) {
  null != a && this.append.apply(this, arguments)
}
pa.prototype.Ia = "";
pa.prototype.append = function(a, b, c) {
  this.Ia += a;
  if(null != b) {
    for(var d = 1;d < arguments.length;d++) {
      this.Ia += arguments[d]
    }
  }
  return this
};
pa.prototype.toString = h("Ia");
var t = {}, qa;
function ra() {
  return sa([t.ce, !0, t.gc, !0, t.Nb, !1, t.ee, !1])
}
function v(a) {
  return null != a && !1 !== a
}
function ta(a) {
  return v(a) ? !1 : !0
}
function w(a, b) {
  return a[s(null == b ? null : b)] ? !0 : a._ ? !0 : t.n ? !1 : null
}
function ua(a) {
  return null == a ? null : a.constructor
}
function x(a, b) {
  var c = ua(b), c = v(v(c) ? c.Ca : c) ? c.Ba : s(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""))
}
function va(a) {
  var b = a.Ba;
  return v(b) ? b : "" + y(a)
}
function wa(a) {
  return Array.prototype.slice.call(arguments)
}
var xa = {}, ya = {};
function za(a) {
  if(a ? a.G : a) {
    return a.G(a)
  }
  var b;
  b = za[s(null == a ? null : a)];
  if(!b && (b = za._, !b)) {
    throw x("ICounted.-count", a);
  }
  return b.call(null, a)
}
function Aa(a) {
  if(a ? a.L : a) {
    return a.L(a)
  }
  var b;
  b = Aa[s(null == a ? null : a)];
  if(!b && (b = Aa._, !b)) {
    throw x("IEmptyableCollection.-empty", a);
  }
  return b.call(null, a)
}
var Ba = {};
function Ca(a, b) {
  if(a ? a.J : a) {
    return a.J(a, b)
  }
  var c;
  c = Ca[s(null == a ? null : a)];
  if(!c && (c = Ca._, !c)) {
    throw x("ICollection.-conj", a);
  }
  return c.call(null, a, b)
}
var Da = {}, z = function() {
  function a(a, b, c) {
    if(a ? a.M : a) {
      return a.M(a, b, c)
    }
    var g;
    g = z[s(null == a ? null : a)];
    if(!g && (g = z._, !g)) {
      throw x("IIndexed.-nth", a);
    }
    return g.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.A : a) {
      return a.A(a, b)
    }
    var c;
    c = z[s(null == a ? null : a)];
    if(!c && (c = z._, !c)) {
      throw x("IIndexed.-nth", a);
    }
    return c.call(null, a, b)
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.d = a;
  return c
}(), Ea = {};
function B(a) {
  if(a ? a.S : a) {
    return a.S(a)
  }
  var b;
  b = B[s(null == a ? null : a)];
  if(!b && (b = B._, !b)) {
    throw x("ISeq.-first", a);
  }
  return b.call(null, a)
}
function C(a) {
  if(a ? a.T : a) {
    return a.T(a)
  }
  var b;
  b = C[s(null == a ? null : a)];
  if(!b && (b = C._, !b)) {
    throw x("ISeq.-rest", a);
  }
  return b.call(null, a)
}
var Fa = {}, Ga = function() {
  function a(a, b, c) {
    if(a ? a.P : a) {
      return a.P(a, b, c)
    }
    var g;
    g = Ga[s(null == a ? null : a)];
    if(!g && (g = Ga._, !g)) {
      throw x("ILookup.-lookup", a);
    }
    return g.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.Y : a) {
      return a.Y(a, b)
    }
    var c;
    c = Ga[s(null == a ? null : a)];
    if(!c && (c = Ga._, !c)) {
      throw x("ILookup.-lookup", a);
    }
    return c.call(null, a, b)
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.d = a;
  return c
}();
function Ha(a, b, c) {
  if(a ? a.ja : a) {
    return a.ja(a, b, c)
  }
  var d;
  d = Ha[s(null == a ? null : a)];
  if(!d && (d = Ha._, !d)) {
    throw x("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c)
}
var Ja = {}, Ka = {};
function La(a) {
  if(a ? a.Gb : a) {
    return a.Gb(a)
  }
  var b;
  b = La[s(null == a ? null : a)];
  if(!b && (b = La._, !b)) {
    throw x("IMapEntry.-key", a);
  }
  return b.call(null, a)
}
function Ma(a) {
  if(a ? a.Hb : a) {
    return a.Hb(a)
  }
  var b;
  b = Ma[s(null == a ? null : a)];
  if(!b && (b = Ma._, !b)) {
    throw x("IMapEntry.-val", a);
  }
  return b.call(null, a)
}
var Na = {};
function Oa(a, b, c) {
  if(a ? a.ub : a) {
    return a.ub(a, b, c)
  }
  var d;
  d = Oa[s(null == a ? null : a)];
  if(!d && (d = Oa._, !d)) {
    throw x("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c)
}
function Pa(a) {
  if(a ? a.fb : a) {
    return a.fb(a)
  }
  var b;
  b = Pa[s(null == a ? null : a)];
  if(!b && (b = Pa._, !b)) {
    throw x("IDeref.-deref", a);
  }
  return b.call(null, a)
}
var Qa = {};
function Ra(a) {
  if(a ? a.B : a) {
    return a.B(a)
  }
  var b;
  b = Ra[s(null == a ? null : a)];
  if(!b && (b = Ra._, !b)) {
    throw x("IMeta.-meta", a);
  }
  return b.call(null, a)
}
var Sa = {};
function Ta(a, b) {
  if(a ? a.C : a) {
    return a.C(a, b)
  }
  var c;
  c = Ta[s(null == a ? null : a)];
  if(!c && (c = Ta._, !c)) {
    throw x("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b)
}
var Ua = {}, Va = function() {
  function a(a, b, c) {
    if(a ? a.R : a) {
      return a.R(a, b, c)
    }
    var g;
    g = Va[s(null == a ? null : a)];
    if(!g && (g = Va._, !g)) {
      throw x("IReduce.-reduce", a);
    }
    return g.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.Q : a) {
      return a.Q(a, b)
    }
    var c;
    c = Va[s(null == a ? null : a)];
    if(!c && (c = Va._, !c)) {
      throw x("IReduce.-reduce", a);
    }
    return c.call(null, a, b)
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.d = a;
  return c
}();
function Wa(a, b) {
  if(a ? a.w : a) {
    return a.w(a, b)
  }
  var c;
  c = Wa[s(null == a ? null : a)];
  if(!c && (c = Wa._, !c)) {
    throw x("IEquiv.-equiv", a);
  }
  return c.call(null, a, b)
}
function Xa(a) {
  if(a ? a.H : a) {
    return a.H(a)
  }
  var b;
  b = Xa[s(null == a ? null : a)];
  if(!b && (b = Xa._, !b)) {
    throw x("IHash.-hash", a);
  }
  return b.call(null, a)
}
var Ya = {};
function Za(a) {
  if(a ? a.t : a) {
    return a.t(a)
  }
  var b;
  b = Za[s(null == a ? null : a)];
  if(!b && (b = Za._, !b)) {
    throw x("ISeqable.-seq", a);
  }
  return b.call(null, a)
}
var $a = {};
function E(a, b) {
  if(a ? a.Jb : a) {
    return a.Jb(0, b)
  }
  var c;
  c = E[s(null == a ? null : a)];
  if(!c && (c = E._, !c)) {
    throw x("IWriter.-write", a);
  }
  return c.call(null, a, b)
}
function ab(a) {
  if(a ? a.dc : a) {
    return null
  }
  var b;
  b = ab[s(null == a ? null : a)];
  if(!b && (b = ab._, !b)) {
    throw x("IWriter.-flush", a);
  }
  return b.call(null, a)
}
var bb = {};
function cb(a, b, c) {
  if(a ? a.v : a) {
    return a.v(a, b, c)
  }
  var d;
  d = cb[s(null == a ? null : a)];
  if(!d && (d = cb._, !d)) {
    throw x("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c)
}
function db(a, b, c) {
  if(a ? a.Ib : a) {
    return a.Ib(a, b, c)
  }
  var d;
  d = db[s(null == a ? null : a)];
  if(!d && (d = db._, !d)) {
    throw x("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c)
}
function eb(a) {
  if(a ? a.Ta : a) {
    return a.Ta(a)
  }
  var b;
  b = eb[s(null == a ? null : a)];
  if(!b && (b = eb._, !b)) {
    throw x("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a)
}
function fb(a, b) {
  if(a ? a.Ka : a) {
    return a.Ka(a, b)
  }
  var c;
  c = fb[s(null == a ? null : a)];
  if(!c && (c = fb._, !c)) {
    throw x("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b)
}
function gb(a) {
  if(a ? a.Ua : a) {
    return a.Ua(a)
  }
  var b;
  b = gb[s(null == a ? null : a)];
  if(!b && (b = gb._, !b)) {
    throw x("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a)
}
function hb(a, b, c) {
  if(a ? a.Aa : a) {
    return a.Aa(a, b, c)
  }
  var d;
  d = hb[s(null == a ? null : a)];
  if(!d && (d = hb._, !d)) {
    throw x("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c)
}
function ib(a) {
  if(a ? a.Bb : a) {
    return a.Bb()
  }
  var b;
  b = ib[s(null == a ? null : a)];
  if(!b && (b = ib._, !b)) {
    throw x("IChunk.-drop-first", a);
  }
  return b.call(null, a)
}
function jb(a) {
  if(a ? a.eb : a) {
    return a.eb(a)
  }
  var b;
  b = jb[s(null == a ? null : a)];
  if(!b && (b = jb._, !b)) {
    throw x("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a)
}
function kb(a) {
  if(a ? a.Sa : a) {
    return a.Sa(a)
  }
  var b;
  b = kb[s(null == a ? null : a)];
  if(!b && (b = kb._, !b)) {
    throw x("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a)
}
function lb(a) {
  this.qc = a;
  this.o = 0;
  this.e = 1073741824
}
lb.prototype.Jb = function(a, b) {
  return this.qc.append(b)
};
lb.prototype.dc = q(null);
function F(a) {
  var b = new pa, c = new lb(b);
  a.v(a, c, ra());
  ab(c);
  return"" + y(b)
}
function G(a, b, c, d, e) {
  this.va = a;
  this.name = b;
  this.xa = c;
  this.ra = d;
  this.ya = e;
  this.e = 2154168321;
  this.o = 4096
}
r = G.prototype;
r.v = function(a, b) {
  return E(b, this.xa)
};
r.H = function(a) {
  var b = this.ra;
  return null != b ? b : this.ra = a = mb.a ? mb.a(H.c ? H.c(a.va) : H.call(null, a.va), H.c ? H.c(a.name) : H.call(null, a.name)) : mb.call(null, H.c ? H.c(a.va) : H.call(null, a.va), H.c ? H.c(a.name) : H.call(null, a.name))
};
r.C = function(a, b) {
  return new G(this.va, this.name, this.xa, this.ra, b)
};
r.B = h("ya");
r.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Ga.d(c, this, null);
      case 3:
        return Ga.d(c, this, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.w = function(a, b) {
  return b instanceof G ? this.xa === b.xa : !1
};
r.toString = h("xa");
function I(a) {
  if(null == a) {
    return null
  }
  var b;
  b = a ? ((b = a.e & 8388608) ? b : a.Zd) ? !0 : !1 : !1;
  if(b) {
    return a.t(a)
  }
  if(a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new nb(a, 0)
  }
  if(w(Ya, a)) {
    return Za(a)
  }
  if(t.n) {
    throw Error([y(a), y("is not ISeqable")].join(""));
  }
  return null
}
function J(a) {
  if(null == a) {
    return null
  }
  var b;
  b = a ? ((b = a.e & 64) ? b : a.Ja) ? !0 : !1 : !1;
  if(b) {
    return a.S(a)
  }
  a = I(a);
  return null == a ? null : B(a)
}
function K(a) {
  if(null != a) {
    var b;
    b = a ? ((b = a.e & 64) ? b : a.Ja) ? !0 : !1 : !1;
    if(b) {
      return a.T(a)
    }
    a = I(a);
    return null != a ? C(a) : L
  }
  return L
}
function M(a) {
  if(null == a) {
    a = null
  }else {
    var b;
    b = a ? ((b = a.e & 128) ? b : a.Yd) ? !0 : !1 : !1;
    a = b ? a.ca(a) : I(K(a))
  }
  return a
}
var P = function() {
  function a(a, b) {
    var c = a === b;
    return c ? c : Wa(a, b)
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l)
    }
    function c(a, d, e) {
      for(;;) {
        if(v(b.a(a, d))) {
          if(M(e)) {
            a = d, d = J(e), e = M(e)
          }else {
            return b.a(d, J(e))
          }
        }else {
          return!1
        }
      }
    }
    a.q = 2;
    a.k = function(a) {
      var b = J(a);
      a = M(a);
      var d = J(a);
      a = K(a);
      return c(b, d, a)
    };
    a.g = c;
    return a
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a.call(this, b, e);
      default:
        return c.g(b, e, N(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.q = 2;
  b.k = c.k;
  b.c = q(!0);
  b.a = a;
  b.g = c.g;
  return b
}();
Xa["null"] = q(0);
ya["null"] = !0;
za["null"] = q(0);
Wa["null"] = function(a, b) {
  return null == b
};
Sa["null"] = !0;
Ta["null"] = q(null);
Qa["null"] = !0;
Ra["null"] = q(null);
Aa["null"] = q(null);
Ja["null"] = !0;
Date.prototype.w = function(a, b) {
  var c = b instanceof Date;
  return c ? a.toString() === b.toString() : c
};
Xa.number = function(a) {
  return Math.floor(a) % 2147483647
};
Wa.number = function(a, b) {
  return a === b
};
Xa["boolean"] = function(a) {
  return!0 === a ? 1 : 0
};
Qa["function"] = !0;
Ra["function"] = q(null);
xa["function"] = !0;
Xa._ = function(a) {
  return ea(a)
};
var ob = function() {
  function a(a, b, c, d) {
    for(var l = za(a);;) {
      if(d < l) {
        c = b.a ? b.a(c, z.a(a, d)) : b.call(null, c, z.a(a, d)), d += 1
      }else {
        return c
      }
    }
  }
  function b(a, b, c) {
    for(var d = za(a), l = 0;;) {
      if(l < d) {
        c = b.a ? b.a(c, z.a(a, l)) : b.call(null, c, z.a(a, l)), l += 1
      }else {
        return c
      }
    }
  }
  function c(a, b) {
    var c = za(a);
    if(0 === c) {
      return b.l ? b.l() : b.call(null)
    }
    for(var d = z.a(a, 0), l = 1;;) {
      if(l < c) {
        d = b.a ? b.a(d, z.a(a, l)) : b.call(null, d, z.a(a, l)), l += 1
      }else {
        return d
      }
    }
  }
  var d = null, d = function(d, f, g, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.d = b;
  d.m = a;
  return d
}(), pb = function() {
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
      return b.l ? b.l() : b.call(null)
    }
    for(var d = a[0], l = 1;;) {
      if(l < c) {
        d = b.a ? b.a(d, a[l]) : b.call(null, d, a[l]), l += 1
      }else {
        return d
      }
    }
  }
  var d = null, d = function(d, f, g, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.d = b;
  d.m = a;
  return d
}();
function qb(a) {
  if(a) {
    var b = a.e & 2;
    a = (b ? b : a.Zb) ? !0 : a.e ? !1 : w(ya, a)
  }else {
    a = w(ya, a)
  }
  return a
}
function rb(a) {
  if(a) {
    var b = a.e & 16;
    a = (b ? b : a.Fb) ? !0 : a.e ? !1 : w(Da, a)
  }else {
    a = w(Da, a)
  }
  return a
}
function nb(a, b) {
  this.b = a;
  this.i = b;
  this.o = 0;
  this.e = 166199550
}
r = nb.prototype;
r.H = function(a) {
  return sb.c ? sb.c(a) : sb.call(null, a)
};
r.ca = function() {
  return this.i + 1 < this.b.length ? new nb(this.b, this.i + 1) : null
};
r.J = function(a, b) {
  return Q.a ? Q.a(b, a) : Q.call(null, b, a)
};
r.toString = function() {
  return F(this)
};
r.Q = function(a, b) {
  return pb.m(this.b, b, this.b[this.i], this.i + 1)
};
r.R = function(a, b, c) {
  return pb.m(this.b, b, c, this.i)
};
r.t = aa();
r.G = function() {
  return this.b.length - this.i
};
r.S = function() {
  return this.b[this.i]
};
r.T = function() {
  return this.i + 1 < this.b.length ? new nb(this.b, this.i + 1) : S.l ? S.l() : S.call(null)
};
r.w = function(a, b) {
  return tb.a ? tb.a(a, b) : tb.call(null, a, b)
};
r.A = function(a, b) {
  var c = b + this.i;
  return c < this.b.length ? this.b[c] : null
};
r.M = function(a, b, c) {
  a = b + this.i;
  return a < this.b.length ? this.b[a] : c
};
r.L = function() {
  return L
};
var vb = function() {
  function a(a, b) {
    return b < a.length ? new nb(a, b) : null
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
  c.c = b;
  c.a = a;
  return c
}(), N = function() {
  function a(a, b) {
    return vb.a(a, b)
  }
  function b(a) {
    return vb.a(a, 0)
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
  c.c = b;
  c.a = a;
  return c
}();
Wa._ = function(a, b) {
  return a === b
};
var wb = function() {
  function a(a, b) {
    return null != a ? Ca(a, b) : S.c ? S.c(b) : S.call(null, b)
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l)
    }
    function c(a, d, e) {
      for(;;) {
        if(v(e)) {
          a = b.a(a, d), d = J(e), e = M(e)
        }else {
          return b.a(a, d)
        }
      }
    }
    a.q = 2;
    a.k = function(a) {
      var b = J(a);
      a = M(a);
      var d = J(a);
      a = K(a);
      return c(b, d, a)
    };
    a.g = c;
    return a
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.g(b, e, N(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.q = 2;
  b.k = c.k;
  b.a = a;
  b.g = c.g;
  return b
}();
function T(a) {
  if(null != a) {
    var b;
    b = a ? ((b = a.e & 2) ? b : a.Zb) ? !0 : !1 : !1;
    if(b) {
      a = a.G(a)
    }else {
      if(a instanceof Array) {
        a = a.length
      }else {
        if("string" === typeof a) {
          a = a.length
        }else {
          if(w(ya, a)) {
            a = za(a)
          }else {
            if(t.n) {
              a: {
                a = I(a);
                for(b = 0;;) {
                  if(qb(a)) {
                    a = b + za(a);
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
var xb = function() {
  function a(a, b, c) {
    for(;;) {
      if(null == a) {
        return c
      }
      if(0 === b) {
        return I(a) ? J(a) : c
      }
      if(rb(a)) {
        return z.d(a, b, c)
      }
      if(I(a)) {
        a = M(a), b -= 1
      }else {
        return t.n ? c : null
      }
    }
  }
  function b(a, b) {
    for(;;) {
      if(null == a) {
        throw Error("Index out of bounds");
      }
      if(0 === b) {
        if(I(a)) {
          return J(a)
        }
        throw Error("Index out of bounds");
      }
      if(rb(a)) {
        return z.a(a, b)
      }
      if(I(a)) {
        var c = M(a), g = b - 1;
        a = c;
        b = g
      }else {
        if(t.n) {
          throw Error("Index out of bounds");
        }
        return null
      }
    }
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.d = a;
  return c
}(), U = function() {
  function a(a, b, c) {
    if(null != a) {
      if(function() {
        var b;
        b = a ? ((b = a.e & 16) ? b : a.Fb) ? !0 : !1 : !1;
        return b
      }()) {
        return a.M(a, Math.floor(b), c)
      }
      if(a instanceof Array || "string" === typeof a) {
        return b < a.length ? a[b] : c
      }
      if(w(Da, a)) {
        return z.a(a, b)
      }
      if(t.n) {
        if(function() {
          var b;
          b = a ? ((b = a.e & 64) ? b : a.Ja) ? !0 : a.e ? !1 : w(Ea, a) : w(Ea, a);
          return b
        }()) {
          return xb.d(a, Math.floor(b), c)
        }
        throw Error([y("nth not supported on this type "), y(va(ua(a)))].join(""));
      }
      return null
    }
    return c
  }
  function b(a, b) {
    if(null == a) {
      return null
    }
    if(function() {
      var b;
      b = a ? ((b = a.e & 16) ? b : a.Fb) ? !0 : !1 : !1;
      return b
    }()) {
      return a.A(a, Math.floor(b))
    }
    if(a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null
    }
    if(w(Da, a)) {
      return z.a(a, b)
    }
    if(t.n) {
      if(function() {
        var b;
        b = a ? ((b = a.e & 64) ? b : a.Ja) ? !0 : a.e ? !1 : w(Ea, a) : w(Ea, a);
        return b
      }()) {
        return xb.a(a, Math.floor(b))
      }
      throw Error([y("nth not supported on this type "), y(va(ua(a)))].join(""));
    }
    return null
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.d = a;
  return c
}(), yb = function() {
  function a(a, b, c) {
    if(null != a) {
      var g;
      g = a ? ((g = a.e & 256) ? g : a.tb) ? !0 : !1 : !1;
      a = g ? a.P(a, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : w(Fa, a) ? Ga.d(a, b, c) : t.n ? c : null
    }else {
      a = c
    }
    return a
  }
  function b(a, b) {
    var c;
    null == a ? c = null : (c = a ? ((c = a.e & 256) ? c : a.tb) ? !0 : !1 : !1, c = c ? a.Y(a, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : w(Fa, a) ? Ga.a(a, b) : null);
    return c
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.d = a;
  return c
}(), Ab = function() {
  function a(a, b, c) {
    return null != a ? Ha(a, b, c) : zb.a ? zb.a(b, c) : zb.call(null, b, c)
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var n = null;
      3 < arguments.length && (n = N(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, n)
    }
    function c(a, d, e, l) {
      for(;;) {
        if(a = b.d(a, d, e), v(l)) {
          d = J(l), e = J(M(l)), l = M(M(l))
        }else {
          return a
        }
      }
    }
    a.q = 3;
    a.k = function(a) {
      var b = J(a);
      a = M(a);
      var d = J(a);
      a = M(a);
      var l = J(a);
      a = K(a);
      return c(b, d, l, a)
    };
    a.g = c;
    return a
  }(), b = function(b, e, f, g) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, f);
      default:
        return c.g(b, e, f, N(arguments, 3))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.q = 3;
  b.k = c.k;
  b.d = a;
  b.g = c.g;
  return b
}();
function Bb(a) {
  var b = "function" == s(a);
  return b ? b : a ? v(v(null) ? null : a.Yb) ? !0 : a.ec ? !1 : w(xa, a) : w(xa, a)
}
var Eb = function Cb(b, c) {
  return function() {
    var c = Bb(b);
    c && (c = b ? ((c = b.e & 262144) ? c : b.be) ? !0 : b.e ? !1 : w(Sa, b) : w(Sa, b), c = !c);
    return c
  }() ? Cb(function() {
    "undefined" === typeof qa && (qa = {}, qa = function(b, c, f, g) {
      this.h = b;
      this.zb = c;
      this.uc = f;
      this.kc = g;
      this.o = 0;
      this.e = 393217
    }, qa.Ca = !0, qa.Ba = "cljs.core/t11863", qa.La = function(b, c) {
      return E(c, "cljs.core/t11863")
    }, qa.prototype.call = function() {
      function b(d, g) {
        d = this;
        var k = null;
        1 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, d, k)
      }
      function c(b, d) {
        return Db.a ? Db.a(b.zb, d) : Db.call(null, b.zb, d)
      }
      b.q = 1;
      b.k = function(b) {
        var d = J(b);
        b = K(b);
        return c(d, b)
      };
      b.g = c;
      return b
    }(), qa.prototype.apply = function(b, c) {
      b = this;
      return b.call.apply(b, [b].concat(c.slice()))
    }, qa.prototype.Yb = !0, qa.prototype.B = h("kc"), qa.prototype.C = function(b, c) {
      return new qa(this.h, this.zb, this.uc, c)
    });
    return new qa(c, b, Cb, null)
  }(), c) : Ta(b, c)
};
function Fb(a) {
  var b;
  b = a ? ((b = a.e & 131072) ? b : a.bc) ? !0 : a.e ? !1 : w(Qa, a) : w(Qa, a);
  return b ? Ra(a) : null
}
var Gb = {}, Hb = 0, H = function() {
  function a(a, b) {
    var c = ca(a);
    (c ? b : c) ? (255 < Hb && (Gb = {}, Hb = 0), c = Gb[a], "number" !== typeof c && (c = ia(a), Gb[a] = c, Hb += 1)) : c = Xa(a);
    return c
  }
  function b(a) {
    return c.a(a, !0)
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
  c.c = b;
  c.a = a;
  return c
}();
function Ib(a) {
  if(null == a) {
    a = !1
  }else {
    if(a) {
      var b = a.e & 8;
      a = (b ? b : a.Td) ? !0 : a.e ? !1 : w(Ba, a)
    }else {
      a = w(Ba, a)
    }
  }
  return a
}
function Jb(a) {
  if(a) {
    var b = a.e & 16777216;
    a = (b ? b : a.$d) ? !0 : a.e ? !1 : w($a, a)
  }else {
    a = w($a, a)
  }
  return a
}
function Kb(a) {
  if(null == a) {
    a = !1
  }else {
    if(a) {
      var b = a.e & 1024;
      a = (b ? b : a.Wd) ? !0 : a.e ? !1 : w(Ja, a)
    }else {
      a = w(Ja, a)
    }
  }
  return a
}
function Lb(a) {
  if(a) {
    var b = a.e & 16384;
    a = (b ? b : a.ae) ? !0 : a.e ? !1 : w(Na, a)
  }else {
    a = w(Na, a)
  }
  return a
}
function Mb(a) {
  if(a) {
    var b = a.o & 512;
    a = (b ? b : a.Sd) ? !0 : !1
  }else {
    a = !1
  }
  return a
}
function Nb(a) {
  var b = [];
  la(a, function(a, d) {
    return b.push(d)
  });
  return b
}
function Ob(a, b, c, d, e) {
  for(;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1
  }
}
var Pb = {};
function Qb(a) {
  if(null == a) {
    a = !1
  }else {
    if(a) {
      var b = a.e & 64;
      a = (b ? b : a.Ja) ? !0 : a.e ? !1 : w(Ea, a)
    }else {
      a = w(Ea, a)
    }
  }
  return a
}
function Rb(a) {
  return v(a) ? !0 : !1
}
function Sb(a, b) {
  if(a === b) {
    return 0
  }
  if(null == a) {
    return-1
  }
  if(null == b) {
    return 1
  }
  if(ua(a) === ua(b)) {
    var c;
    c = a ? ((c = a.o & 2048) ? c : a.Db) ? !0 : !1 : !1;
    return c ? a.Eb(a, b) : a > b ? 1 : a < b ? -1 : 0
  }
  if(t.n) {
    throw Error("compare on non-nil objects of different types");
  }
  return null
}
var Tb = function() {
  function a(a, b, c, g) {
    for(;;) {
      var k = Sb(U.a(a, g), U.a(b, g)), l = 0 === k;
      if(l ? g + 1 < c : l) {
        g += 1
      }else {
        return k
      }
    }
  }
  function b(a, b) {
    var f = T(a), g = T(b);
    return f < g ? -1 : f > g ? 1 : t.n ? c.m(a, b, f, 0) : null
  }
  var c = null, c = function(c, e, f, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 4:
        return a.call(this, c, e, f, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.m = a;
  return c
}(), V = function() {
  function a(a, b, c) {
    for(c = I(c);;) {
      if(c) {
        b = a.a ? a.a(b, J(c)) : a.call(null, b, J(c)), c = M(c)
      }else {
        return b
      }
    }
  }
  function b(a, b) {
    var c = I(b);
    return c ? Ub.d ? Ub.d(a, J(c), M(c)) : Ub.call(null, a, J(c), M(c)) : a.l ? a.l() : a.call(null)
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.d = a;
  return c
}(), Ub = function() {
  function a(a, b, c) {
    var g;
    g = c ? ((g = c.e & 524288) ? g : c.cc) ? !0 : !1 : !1;
    return g ? c.R(c, a, b) : c instanceof Array ? pb.d(c, a, b) : "string" === typeof c ? pb.d(c, a, b) : w(Ua, c) ? Va.d(c, a, b) : t.n ? V.d(a, b, c) : null
  }
  function b(a, b) {
    var c;
    c = b ? ((c = b.e & 524288) ? c : b.cc) ? !0 : !1 : !1;
    return c ? b.Q(b, a) : b instanceof Array ? pb.a(b, a) : "string" === typeof b ? pb.a(b, a) : w(Ua, b) ? Va.a(b, a) : t.n ? V.a(a, b) : null
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.d = a;
  return c
}();
function Vb(a) {
  return 0 <= a ? Math.floor.c ? Math.floor.c(a) : Math.floor.call(null, a) : Math.ceil.c ? Math.ceil.c(a) : Math.ceil.call(null, a)
}
function Wb(a) {
  return Vb((a - a % 2) / 2)
}
var Xb = function() {
  function a(a) {
    return a * c.l()
  }
  function b() {
    return Math.random.l ? Math.random.l() : Math.random.call(null)
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.l = b;
  c.c = a;
  return c
}();
function Yb(a) {
  return Vb(Xb.c(a))
}
function Zb(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24
}
var y = function() {
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
      return function(a, c) {
        for(;;) {
          if(v(c)) {
            var d = a.append(b.c(J(c))), e = M(c);
            a = d;
            c = e
          }else {
            return a.toString()
          }
        }
      }.call(null, new pa(b.c(a)), d)
    }
    a.q = 1;
    a.k = function(a) {
      var b = J(a);
      a = K(a);
      return c(b, a)
    };
    a.g = c;
    return a
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 0:
        return"";
      case 1:
        return a.call(this, b);
      default:
        return c.g(b, N(arguments, 1))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.q = 1;
  b.k = c.k;
  b.l = q("");
  b.c = a;
  b.g = c.g;
  return b
}();
function tb(a, b) {
  return Rb(Jb(b) ? function() {
    for(var c = I(a), d = I(b);;) {
      if(null == c) {
        return null == d
      }
      if(null == d) {
        return!1
      }
      if(P.a(J(c), J(d))) {
        c = M(c), d = M(d)
      }else {
        return t.n ? !1 : null
      }
    }
  }() : null)
}
function mb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2)
}
function sb(a) {
  return Ub.d(function(a, c) {
    return mb(a, H.a(c, !1))
  }, H.a(J(a), !1), M(a))
}
function $b(a) {
  var b = 0;
  for(a = I(a);;) {
    if(a) {
      var c = J(a), b = (b + (H.c(bc.c ? bc.c(c) : bc.call(null, c)) ^ H.c(cc.c ? cc.c(c) : cc.call(null, c)))) % 4503599627370496;
      a = M(a)
    }else {
      return b
    }
  }
}
function dc(a, b, c, d, e) {
  this.h = a;
  this.Na = b;
  this.ma = c;
  this.count = d;
  this.j = e;
  this.o = 0;
  this.e = 65937646
}
r = dc.prototype;
r.H = function(a) {
  var b = this.j;
  return null != b ? b : this.j = a = sb(a)
};
r.ca = function() {
  return 1 === this.count ? null : this.ma
};
r.J = function(a, b) {
  return new dc(this.h, b, a, this.count + 1, null)
};
r.toString = function() {
  return F(this)
};
r.Q = function(a, b) {
  return V.a(b, a)
};
r.R = function(a, b, c) {
  return V.d(b, c, a)
};
r.t = aa();
r.G = h("count");
r.S = h("Na");
r.T = function() {
  return 1 === this.count ? L : this.ma
};
r.w = function(a, b) {
  return tb(a, b)
};
r.C = function(a, b) {
  return new dc(b, this.Na, this.ma, this.count, this.j)
};
r.B = h("h");
r.L = function() {
  return L
};
function ec(a) {
  this.h = a;
  this.o = 0;
  this.e = 65937614
}
r = ec.prototype;
r.H = q(0);
r.ca = q(null);
r.J = function(a, b) {
  return new dc(this.h, b, null, 1, null)
};
r.toString = function() {
  return F(this)
};
r.Q = function(a, b) {
  return V.a(b, a)
};
r.R = function(a, b, c) {
  return V.d(b, c, a)
};
r.t = q(null);
r.G = q(0);
r.S = q(null);
r.T = function() {
  return L
};
r.w = function(a, b) {
  return tb(a, b)
};
r.C = function(a, b) {
  return new ec(b)
};
r.B = h("h");
r.L = aa();
var L = new ec(null), S = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    var b;
    if(a instanceof nb) {
      b = a.b
    }else {
      a: {
        for(b = [];;) {
          if(null != a) {
            b.push(a.S(a)), a = a.ca(a)
          }else {
            break a
          }
        }
        b = void 0
      }
    }
    a = b.length;
    for(var e = L;;) {
      if(0 < a) {
        var f = a - 1, e = e.J(e, b[a - 1]);
        a = f
      }else {
        return e
      }
    }
  }
  a.q = 0;
  a.k = function(a) {
    a = I(a);
    return b(a)
  };
  a.g = b;
  return a
}();
function fc(a, b, c, d) {
  this.h = a;
  this.Na = b;
  this.ma = c;
  this.j = d;
  this.o = 0;
  this.e = 65929452
}
r = fc.prototype;
r.H = function(a) {
  var b = this.j;
  return null != b ? b : this.j = a = sb(a)
};
r.ca = function() {
  return null == this.ma ? null : Za(this.ma)
};
r.J = function(a, b) {
  return new fc(null, b, a, this.j)
};
r.toString = function() {
  return F(this)
};
r.Q = function(a, b) {
  return V.a(b, a)
};
r.R = function(a, b, c) {
  return V.d(b, c, a)
};
r.t = aa();
r.S = h("Na");
r.T = function() {
  return null == this.ma ? L : this.ma
};
r.w = function(a, b) {
  return tb(a, b)
};
r.C = function(a, b) {
  return new fc(b, this.Na, this.ma, this.j)
};
r.B = h("h");
r.L = function() {
  return Eb(L, this.h)
};
function Q(a, b) {
  var c = null == b;
  c || (c = b ? ((c = b.e & 64) ? c : b.Ja) ? !0 : !1 : !1);
  return c ? new fc(null, a, b, null) : new fc(null, a, I(b), null)
}
Xa.string = function(a) {
  return ia(a)
};
function gc(a, b, c, d) {
  this.va = a;
  this.name = b;
  this.oa = c;
  this.ra = d;
  this.e = 2153775105;
  this.o = 4096
}
r = gc.prototype;
r.v = function(a, b) {
  return E(b, [y(":"), y(this.oa)].join(""))
};
r.H = function() {
  null == this.ra && (this.ra = mb(H.c(this.va), H.c(this.name)) + 2654435769);
  return this.ra
};
r.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        var e;
        null == c ? e = null : (e = c ? ((e = c.e & 256) ? e : c.tb) ? !0 : c.e ? !1 : w(Fa, c) : w(Fa, c), e = e ? Ga.d(c, this, null) : null);
        return e;
      case 3:
        return null == c ? e = d : (e = c ? ((e = c.e & 256) ? e : c.tb) ? !0 : c.e ? !1 : w(Fa, c) : w(Fa, c), e = e ? Ga.d(c, this, d) : d), e
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.w = function(a, b) {
  return b instanceof gc ? this.oa === b.oa : !1
};
r.toString = function() {
  return[y(":"), y(this.oa)].join("")
};
function hc(a, b) {
  var c;
  c = a === b ? !0 : ((c = a instanceof gc) ? b instanceof gc : c) ? a.oa === b.oa : !1;
  return c
}
var jc = function() {
  function a(a, b) {
    return new gc(a, b, [y(v(a) ? [y(a), y("/")].join("") : null), y(b)].join(""), null)
  }
  function b(a) {
    return a instanceof gc ? a : a instanceof G ? new gc(null, ic.c ? ic.c(a) : ic.call(null, a), ic.c ? ic.c(a) : ic.call(null, a), null) : t.n ? new gc(null, a, a, null) : null
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
  c.c = b;
  c.a = a;
  return c
}();
function kc(a, b, c, d) {
  this.h = a;
  this.Fa = b;
  this.s = c;
  this.j = d;
  this.o = 0;
  this.e = 32374988
}
r = kc.prototype;
r.H = function(a) {
  var b = this.j;
  return null != b ? b : this.j = a = sb(a)
};
r.ca = function(a) {
  a.t(a);
  return null == this.s ? null : this.s.ca(this.s)
};
r.J = function(a, b) {
  return Q(b, a)
};
r.toString = function() {
  return F(this)
};
function lc(a) {
  null != a.Fa && (a.s = a.Fa.l ? a.Fa.l() : a.Fa.call(null), a.Fa = null);
  return a.s
}
r.Q = function(a, b) {
  return V.a(b, a)
};
r.R = function(a, b, c) {
  return V.d(b, c, a)
};
r.t = function(a) {
  lc(a);
  if(null == this.s) {
    return null
  }
  for(a = this.s;;) {
    if(a instanceof kc) {
      a = lc(a)
    }else {
      return this.s = a, null == this.s ? null : this.s.t(this.s)
    }
  }
};
r.S = function(a) {
  a.t(a);
  return null == this.s ? null : this.s.S(this.s)
};
r.T = function(a) {
  a.t(a);
  return null != this.s ? this.s.T(this.s) : L
};
r.w = function(a, b) {
  return tb(a, b)
};
r.C = function(a, b) {
  return new kc(b, this.Fa, this.s, this.j)
};
r.B = h("h");
r.L = function() {
  return Eb(L, this.h)
};
function mc(a, b) {
  this.I = a;
  this.end = b;
  this.o = 0;
  this.e = 2
}
mc.prototype.G = h("end");
mc.prototype.add = function(a) {
  this.I[this.end] = a;
  return this.end += 1
};
mc.prototype.ba = function() {
  var a = new nc(this.I, 0, this.end);
  this.I = null;
  return a
};
function nc(a, b, c) {
  this.b = a;
  this.u = b;
  this.end = c;
  this.o = 0;
  this.e = 524306
}
r = nc.prototype;
r.Q = function(a, b) {
  return pb.m(this.b, b, this.b[this.u], this.u + 1)
};
r.R = function(a, b, c) {
  return pb.m(this.b, b, c, this.u)
};
r.Bb = function() {
  if(this.u === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new nc(this.b, this.u + 1, this.end)
};
r.A = function(a, b) {
  return this.b[this.u + b]
};
r.M = function(a, b, c) {
  return((a = 0 <= b) ? b < this.end - this.u : a) ? this.b[this.u + b] : c
};
r.G = function() {
  return this.end - this.u
};
var oc = function() {
  function a(a, b, c) {
    return new nc(a, b, c)
  }
  function b(a, b) {
    return new nc(a, b, a.length)
  }
  function c(a) {
    return new nc(a, 0, a.length)
  }
  var d = null, d = function(d, f, g) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, f);
      case 3:
        return a.call(this, d, f, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.c = c;
  d.a = b;
  d.d = a;
  return d
}();
function pc(a, b, c, d) {
  this.ba = a;
  this.ha = b;
  this.h = c;
  this.j = d;
  this.e = 31850732;
  this.o = 1536
}
r = pc.prototype;
r.H = function(a) {
  var b = this.j;
  return null != b ? b : this.j = a = sb(a)
};
r.ca = function() {
  if(1 < za(this.ba)) {
    return new pc(ib(this.ba), this.ha, this.h, null)
  }
  var a = Za(this.ha);
  return null == a ? null : a
};
r.J = function(a, b) {
  return Q(b, a)
};
r.toString = function() {
  return F(this)
};
r.t = aa();
r.S = function() {
  return z.a(this.ba, 0)
};
r.T = function() {
  return 1 < za(this.ba) ? new pc(ib(this.ba), this.ha, this.h, null) : null == this.ha ? L : this.ha
};
r.Cb = function() {
  return null == this.ha ? null : this.ha
};
r.w = function(a, b) {
  return tb(a, b)
};
r.C = function(a, b) {
  return new pc(this.ba, this.ha, b, this.j)
};
r.B = h("h");
r.L = function() {
  return Eb(L, this.h)
};
r.eb = h("ba");
r.Sa = function() {
  return null == this.ha ? L : this.ha
};
function qc(a, b) {
  return 0 === za(a) ? b : new pc(a, b, null, null)
}
function rc(a) {
  for(var b = [];;) {
    if(I(a)) {
      b.push(J(a)), a = M(a)
    }else {
      return b
    }
  }
}
function sc(a, b) {
  if(qb(a)) {
    return T(a)
  }
  for(var c = a, d = b, e = 0;;) {
    var f;
    f = (f = 0 < d) ? I(c) : f;
    if(v(f)) {
      c = M(c), d -= 1, e += 1
    }else {
      return e
    }
  }
}
var uc = function tc(b) {
  return null == b ? null : null == M(b) ? I(J(b)) : t.n ? Q(J(b), tc(M(b))) : null
}, vc = function() {
  function a(a, b, c, d) {
    return Q(a, Q(b, Q(c, d)))
  }
  function b(a, b, c) {
    return Q(a, Q(b, c))
  }
  var c = null, d = function() {
    function a(c, d, e, n, m) {
      var p = null;
      4 < arguments.length && (p = N(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, n, p)
    }
    function b(a, c, d, e, f) {
      return Q(a, Q(c, Q(d, Q(e, uc(f)))))
    }
    a.q = 4;
    a.k = function(a) {
      var c = J(a);
      a = M(a);
      var d = J(a);
      a = M(a);
      var e = J(a);
      a = M(a);
      var m = J(a);
      a = K(a);
      return b(c, d, e, m, a)
    };
    a.g = b;
    return a
  }(), c = function(c, f, g, k, l) {
    switch(arguments.length) {
      case 1:
        return I(c);
      case 2:
        return Q(c, f);
      case 3:
        return b.call(this, c, f, g);
      case 4:
        return a.call(this, c, f, g, k);
      default:
        return d.g(c, f, g, k, N(arguments, 4))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.q = 4;
  c.k = d.k;
  c.c = function(a) {
    return I(a)
  };
  c.a = function(a, b) {
    return Q(a, b)
  };
  c.d = b;
  c.m = a;
  c.g = d.g;
  return c
}();
function wc(a, b, c) {
  var d = I(c);
  if(0 === b) {
    return a.l ? a.l() : a.call(null)
  }
  c = B(d);
  var e = C(d);
  if(1 === b) {
    return a.c ? a.c(c) : a.c ? a.c(c) : a.call(null, c)
  }
  var d = B(e), f = C(e);
  if(2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d)
  }
  var e = B(f), g = C(f);
  if(3 === b) {
    return a.d ? a.d(c, d, e) : a.d ? a.d(c, d, e) : a.call(null, c, d, e)
  }
  var f = B(g), k = C(g);
  if(4 === b) {
    return a.m ? a.m(c, d, e, f) : a.m ? a.m(c, d, e, f) : a.call(null, c, d, e, f)
  }
  g = B(k);
  k = C(k);
  if(5 === b) {
    return a.O ? a.O(c, d, e, f, g) : a.O ? a.O(c, d, e, f, g) : a.call(null, c, d, e, f, g)
  }
  a = B(k);
  var l = C(k);
  if(6 === b) {
    return a.ka ? a.ka(c, d, e, f, g, a) : a.ka ? a.ka(c, d, e, f, g, a) : a.call(null, c, d, e, f, g, a)
  }
  var k = B(l), n = C(l);
  if(7 === b) {
    return a.za ? a.za(c, d, e, f, g, a, k) : a.za ? a.za(c, d, e, f, g, a, k) : a.call(null, c, d, e, f, g, a, k)
  }
  var l = B(n), m = C(n);
  if(8 === b) {
    return a.rb ? a.rb(c, d, e, f, g, a, k, l) : a.rb ? a.rb(c, d, e, f, g, a, k, l) : a.call(null, c, d, e, f, g, a, k, l)
  }
  var n = B(m), p = C(m);
  if(9 === b) {
    return a.sb ? a.sb(c, d, e, f, g, a, k, l, n) : a.sb ? a.sb(c, d, e, f, g, a, k, l, n) : a.call(null, c, d, e, f, g, a, k, l, n)
  }
  var m = B(p), u = C(p);
  if(10 === b) {
    return a.gb ? a.gb(c, d, e, f, g, a, k, l, n, m) : a.gb ? a.gb(c, d, e, f, g, a, k, l, n, m) : a.call(null, c, d, e, f, g, a, k, l, n, m)
  }
  var p = B(u), D = C(u);
  if(11 === b) {
    return a.hb ? a.hb(c, d, e, f, g, a, k, l, n, m, p) : a.hb ? a.hb(c, d, e, f, g, a, k, l, n, m, p) : a.call(null, c, d, e, f, g, a, k, l, n, m, p)
  }
  var u = B(D), A = C(D);
  if(12 === b) {
    return a.ib ? a.ib(c, d, e, f, g, a, k, l, n, m, p, u) : a.ib ? a.ib(c, d, e, f, g, a, k, l, n, m, p, u) : a.call(null, c, d, e, f, g, a, k, l, n, m, p, u)
  }
  var D = B(A), O = C(A);
  if(13 === b) {
    return a.jb ? a.jb(c, d, e, f, g, a, k, l, n, m, p, u, D) : a.jb ? a.jb(c, d, e, f, g, a, k, l, n, m, p, u, D) : a.call(null, c, d, e, f, g, a, k, l, n, m, p, u, D)
  }
  var A = B(O), R = C(O);
  if(14 === b) {
    return a.kb ? a.kb(c, d, e, f, g, a, k, l, n, m, p, u, D, A) : a.kb ? a.kb(c, d, e, f, g, a, k, l, n, m, p, u, D, A) : a.call(null, c, d, e, f, g, a, k, l, n, m, p, u, D, A)
  }
  var O = B(R), da = C(R);
  if(15 === b) {
    return a.lb ? a.lb(c, d, e, f, g, a, k, l, n, m, p, u, D, A, O) : a.lb ? a.lb(c, d, e, f, g, a, k, l, n, m, p, u, D, A, O) : a.call(null, c, d, e, f, g, a, k, l, n, m, p, u, D, A, O)
  }
  var R = B(da), na = C(da);
  if(16 === b) {
    return a.mb ? a.mb(c, d, e, f, g, a, k, l, n, m, p, u, D, A, O, R) : a.mb ? a.mb(c, d, e, f, g, a, k, l, n, m, p, u, D, A, O, R) : a.call(null, c, d, e, f, g, a, k, l, n, m, p, u, D, A, O, R)
  }
  var da = B(na), Ia = C(na);
  if(17 === b) {
    return a.nb ? a.nb(c, d, e, f, g, a, k, l, n, m, p, u, D, A, O, R, da) : a.nb ? a.nb(c, d, e, f, g, a, k, l, n, m, p, u, D, A, O, R, da) : a.call(null, c, d, e, f, g, a, k, l, n, m, p, u, D, A, O, R, da)
  }
  var na = B(Ia), ac = C(Ia);
  if(18 === b) {
    return a.ob ? a.ob(c, d, e, f, g, a, k, l, n, m, p, u, D, A, O, R, da, na) : a.ob ? a.ob(c, d, e, f, g, a, k, l, n, m, p, u, D, A, O, R, da, na) : a.call(null, c, d, e, f, g, a, k, l, n, m, p, u, D, A, O, R, da, na)
  }
  Ia = B(ac);
  ac = C(ac);
  if(19 === b) {
    return a.pb ? a.pb(c, d, e, f, g, a, k, l, n, m, p, u, D, A, O, R, da, na, Ia) : a.pb ? a.pb(c, d, e, f, g, a, k, l, n, m, p, u, D, A, O, R, da, na, Ia) : a.call(null, c, d, e, f, g, a, k, l, n, m, p, u, D, A, O, R, da, na, Ia)
  }
  var ub = B(ac);
  C(ac);
  if(20 === b) {
    return a.qb ? a.qb(c, d, e, f, g, a, k, l, n, m, p, u, D, A, O, R, da, na, Ia, ub) : a.qb ? a.qb(c, d, e, f, g, a, k, l, n, m, p, u, D, A, O, R, da, na, Ia, ub) : a.call(null, c, d, e, f, g, a, k, l, n, m, p, u, D, A, O, R, da, na, Ia, ub)
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var Db = function() {
  function a(a, b, c, d, e) {
    b = vc.m(b, c, d, e);
    c = a.q;
    return a.k ? (d = sc(b, c + 1), d <= c ? wc(a, d, b) : a.k(b)) : a.apply(a, rc(b))
  }
  function b(a, b, c, d) {
    b = vc.d(b, c, d);
    c = a.q;
    return a.k ? (d = sc(b, c + 1), d <= c ? wc(a, d, b) : a.k(b)) : a.apply(a, rc(b))
  }
  function c(a, b, c) {
    b = vc.a(b, c);
    c = a.q;
    if(a.k) {
      var d = sc(b, c + 1);
      return d <= c ? wc(a, d, b) : a.k(b)
    }
    return a.apply(a, rc(b))
  }
  function d(a, b) {
    var c = a.q;
    if(a.k) {
      var d = sc(b, c + 1);
      return d <= c ? wc(a, d, b) : a.k(b)
    }
    return a.apply(a, rc(b))
  }
  var e = null, f = function() {
    function a(c, d, e, f, g, D) {
      var A = null;
      5 < arguments.length && (A = N(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, f, g, A)
    }
    function b(a, c, d, e, f, g) {
      c = Q(c, Q(d, Q(e, Q(f, uc(g)))));
      d = a.q;
      return a.k ? (e = sc(c, d + 1), e <= d ? wc(a, e, c) : a.k(c)) : a.apply(a, rc(c))
    }
    a.q = 5;
    a.k = function(a) {
      var c = J(a);
      a = M(a);
      var d = J(a);
      a = M(a);
      var e = J(a);
      a = M(a);
      var f = J(a);
      a = M(a);
      var g = J(a);
      a = K(a);
      return b(c, d, e, f, g, a)
    };
    a.g = b;
    return a
  }(), e = function(e, k, l, n, m, p) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, n);
      case 5:
        return a.call(this, e, k, l, n, m);
      default:
        return f.g(e, k, l, n, m, N(arguments, 5))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.q = 5;
  e.k = f.k;
  e.a = d;
  e.d = c;
  e.m = b;
  e.O = a;
  e.g = f.g;
  return e
}();
function xc(a, b) {
  for(;;) {
    if(null == I(b)) {
      return!0
    }
    if(v(a.c ? a.c(J(b)) : a.call(null, J(b)))) {
      var c = a, d = M(b);
      a = c;
      b = d
    }else {
      return t.n ? !1 : null
    }
  }
}
function yc(a) {
  for(var b = zc;;) {
    if(I(a)) {
      var c = b.c ? b.c(J(a)) : b.call(null, J(a));
      if(v(c)) {
        return c
      }
      a = M(a)
    }else {
      return null
    }
  }
}
function zc(a) {
  return a
}
var Ac = function() {
  function a(a, b, c, e) {
    return new kc(null, function() {
      var n = I(b), m = I(c), p = I(e);
      return(n ? m ? p : m : n) ? Q(a.d ? a.d(J(n), J(m), J(p)) : a.call(null, J(n), J(m), J(p)), d.m(a, K(n), K(m), K(p))) : null
    }, null, null)
  }
  function b(a, b, c) {
    return new kc(null, function() {
      var e = I(b), n = I(c);
      return(e ? n : e) ? Q(a.a ? a.a(J(e), J(n)) : a.call(null, J(e), J(n)), d.d(a, K(e), K(n))) : null
    }, null, null)
  }
  function c(a, b) {
    return new kc(null, function() {
      var c = I(b);
      if(c) {
        if(Mb(c)) {
          for(var e = jb(c), n = T(e), m = new mc(Array(n), 0), p = 0;;) {
            if(p < n) {
              var u = a.c ? a.c(z.a(e, p)) : a.call(null, z.a(e, p));
              m.add(u);
              p += 1
            }else {
              break
            }
          }
          return qc(m.ba(), d.a(a, kb(c)))
        }
        return Q(a.c ? a.c(J(c)) : a.call(null, J(c)), d.a(a, K(c)))
      }
      return null
    }, null, null)
  }
  var d = null, e = function() {
    function a(c, d, e, f, p) {
      var u = null;
      4 < arguments.length && (u = N(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, u)
    }
    function b(a, c, e, f, g) {
      return d.a(function(b) {
        return Db.a(a, b)
      }, function D(a) {
        return new kc(null, function() {
          var b = d.a(I, a);
          return xc(zc, b) ? Q(d.a(J, b), D(d.a(K, b))) : null
        }, null, null)
      }(wb.g(g, f, N([e, c], 0))))
    }
    a.q = 4;
    a.k = function(a) {
      var c = J(a);
      a = M(a);
      var d = J(a);
      a = M(a);
      var e = J(a);
      a = M(a);
      var f = J(a);
      a = K(a);
      return b(c, d, e, f, a)
    };
    a.g = b;
    return a
  }(), d = function(d, g, k, l, n) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, k);
      case 4:
        return a.call(this, d, g, k, l);
      default:
        return e.g(d, g, k, l, N(arguments, 4))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.q = 4;
  d.k = e.k;
  d.a = c;
  d.d = b;
  d.m = a;
  d.g = e.g;
  return d
}();
function Bc(a, b) {
  var c;
  null != a ? (c = a ? ((c = a.o & 4) ? c : a.Ud) ? !0 : !1 : !1, c ? (c = Ub.d(fb, eb(a), b), c = gb(c)) : c = Ub.d(Ca, a, b)) : c = Ub.d(wb, L, b);
  return c
}
function Cc(a, b) {
  this.p = a;
  this.b = b
}
function Dc(a) {
  a = a.f;
  return 32 > a ? 0 : a - 1 >>> 5 << 5
}
function Ec(a, b, c) {
  for(;;) {
    if(0 === b) {
      return c
    }
    var d = new Cc(a, Array(32));
    d.b[0] = c;
    c = d;
    b -= 5
  }
}
var Gc = function Fc(b, c, d, e) {
  var f = new Cc(d.p, d.b.slice()), g = b.f - 1 >>> c & 31;
  5 === c ? f.b[g] = e : (d = d.b[g], b = null != d ? Fc(b, c - 5, d, e) : Ec(null, c - 5, e), f.b[g] = b);
  return f
};
function Hc(a, b) {
  throw Error([y("No item "), y(a), y(" in vector of length "), y(b)].join(""));
}
function Ic(a, b) {
  var c = 0 <= b;
  if(c ? b < a.f : c) {
    if(b >= Dc(a)) {
      return a.r
    }
    for(var c = a.root, d = a.shift;;) {
      if(0 < d) {
        var e = d - 5, c = c.b[b >>> d & 31], d = e
      }else {
        return c.b
      }
    }
  }else {
    return Hc(b, a.f)
  }
}
var Kc = function Jc(b, c, d, e, f) {
  var g = new Cc(d.p, d.b.slice());
  if(0 === c) {
    g.b[e & 31] = f
  }else {
    var k = e >>> c & 31;
    b = Jc(b, c - 5, d.b[k], e, f);
    g.b[k] = b
  }
  return g
};
function Lc(a, b, c, d, e, f) {
  this.h = a;
  this.f = b;
  this.shift = c;
  this.root = d;
  this.r = e;
  this.j = f;
  this.o = 4;
  this.e = 167668511
}
r = Lc.prototype;
r.Ta = function() {
  return new Mc(this.f, this.shift, Nc.c ? Nc.c(this.root) : Nc.call(null, this.root), Oc.c ? Oc.c(this.r) : Oc.call(null, this.r))
};
r.H = function(a) {
  var b = this.j;
  return null != b ? b : this.j = a = sb(a)
};
r.Y = function(a, b) {
  return a.M(a, b, null)
};
r.P = function(a, b, c) {
  return a.M(a, b, c)
};
r.ja = function(a, b, c) {
  var d = 0 <= b;
  if(d ? b < this.f : d) {
    return Dc(a) <= b ? (a = this.r.slice(), a[b & 31] = c, new Lc(this.h, this.f, this.shift, this.root, a, null)) : new Lc(this.h, this.f, this.shift, Kc(a, this.shift, this.root, b, c), this.r, null)
  }
  if(b === this.f) {
    return a.J(a, c)
  }
  if(t.n) {
    throw Error([y("Index "), y(b), y(" out of bounds  [0,"), y(this.f), y("]")].join(""));
  }
  return null
};
r.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.A(this, c);
      case 3:
        return this.M(this, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.J = function(a, b) {
  if(32 > this.f - Dc(a)) {
    var c = this.r.slice();
    c.push(b);
    return new Lc(this.h, this.f + 1, this.shift, this.root, c, null)
  }
  var d = this.f >>> 5 > 1 << this.shift, c = d ? this.shift + 5 : this.shift;
  if(d) {
    d = new Cc(null, Array(32));
    d.b[0] = this.root;
    var e = Ec(null, this.shift, new Cc(null, this.r));
    d.b[1] = e
  }else {
    d = Gc(a, this.shift, this.root, new Cc(null, this.r))
  }
  return new Lc(this.h, this.f + 1, c, d, [b], null)
};
r.Gb = function(a) {
  return a.A(a, 0)
};
r.Hb = function(a) {
  return a.A(a, 1)
};
r.toString = function() {
  return F(this)
};
r.Q = function(a, b) {
  return ob.a(a, b)
};
r.R = function(a, b, c) {
  return ob.d(a, b, c)
};
r.t = function(a) {
  return 0 === this.f ? null : 32 > this.f ? N.c(this.r) : t.n ? W.d ? W.d(a, 0, 0) : W.call(null, a, 0, 0) : null
};
r.G = h("f");
r.ub = function(a, b, c) {
  return a.ja(a, b, c)
};
r.w = function(a, b) {
  return tb(a, b)
};
r.C = function(a, b) {
  return new Lc(b, this.f, this.shift, this.root, this.r, this.j)
};
r.B = h("h");
r.A = function(a, b) {
  return Ic(a, b)[b & 31]
};
r.M = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.f : d) ? a.A(a, b) : c
};
r.L = function() {
  return Eb(Pc, this.h)
};
var Qc = new Cc(null, Array(32)), Pc = new Lc(null, 0, 5, Qc, [], 0);
function X(a) {
  var b = a.length;
  if(32 > b) {
    return new Lc(null, b, 5, Qc, a, null)
  }
  for(var c = a.slice(0, 32), d = 32, e = eb(new Lc(null, 32, 5, Qc, c, null));;) {
    if(d < b) {
      c = d + 1, e = fb(e, a[d]), d = c
    }else {
      return gb(e)
    }
  }
}
function Rc(a) {
  return gb(Ub.d(fb, eb(Pc), a))
}
var Sc = function() {
  function a(a) {
    var c = null;
    0 < arguments.length && (c = N(Array.prototype.slice.call(arguments, 0), 0));
    return Rc(c)
  }
  a.q = 0;
  a.k = function(a) {
    a = I(a);
    return Rc(a)
  };
  a.g = function(a) {
    return Rc(a)
  };
  return a
}();
function Tc(a, b, c, d, e, f) {
  this.F = a;
  this.aa = b;
  this.i = c;
  this.u = d;
  this.h = e;
  this.j = f;
  this.e = 32243948;
  this.o = 1536
}
r = Tc.prototype;
r.H = function(a) {
  var b = this.j;
  return null != b ? b : this.j = a = sb(a)
};
r.ca = function(a) {
  return this.u + 1 < this.aa.length ? (a = W.m ? W.m(this.F, this.aa, this.i, this.u + 1) : W.call(null, this.F, this.aa, this.i, this.u + 1), null == a ? null : a) : a.Cb(a)
};
r.J = function(a, b) {
  return Q(b, a)
};
r.toString = function() {
  return F(this)
};
r.Q = function(a, b) {
  return ob.a(Uc.d ? Uc.d(this.F, this.i + this.u, T(this.F)) : Uc.call(null, this.F, this.i + this.u, T(this.F)), b)
};
r.R = function(a, b, c) {
  return ob.d(Uc.d ? Uc.d(this.F, this.i + this.u, T(this.F)) : Uc.call(null, this.F, this.i + this.u, T(this.F)), b, c)
};
r.t = aa();
r.S = function() {
  return this.aa[this.u]
};
r.T = function(a) {
  return this.u + 1 < this.aa.length ? (a = W.m ? W.m(this.F, this.aa, this.i, this.u + 1) : W.call(null, this.F, this.aa, this.i, this.u + 1), null == a ? L : a) : a.Sa(a)
};
r.Cb = function() {
  var a = this.aa.length, a = this.i + a < za(this.F) ? W.d ? W.d(this.F, this.i + a, 0) : W.call(null, this.F, this.i + a, 0) : null;
  return null == a ? null : a
};
r.w = function(a, b) {
  return tb(a, b)
};
r.C = function(a, b) {
  return W.O ? W.O(this.F, this.aa, this.i, this.u, b) : W.call(null, this.F, this.aa, this.i, this.u, b)
};
r.L = function() {
  return Eb(Pc, this.h)
};
r.eb = function() {
  return oc.a(this.aa, this.u)
};
r.Sa = function() {
  var a = this.aa.length, a = this.i + a < za(this.F) ? W.d ? W.d(this.F, this.i + a, 0) : W.call(null, this.F, this.i + a, 0) : null;
  return null == a ? L : a
};
var W = function() {
  function a(a, b, c, d, l) {
    return new Tc(a, b, c, d, l, null)
  }
  function b(a, b, c, d) {
    return new Tc(a, b, c, d, null, null)
  }
  function c(a, b, c) {
    return new Tc(a, Ic(a, b), b, c, null, null)
  }
  var d = null, d = function(d, f, g, k, l) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, f, g);
      case 4:
        return b.call(this, d, f, g, k);
      case 5:
        return a.call(this, d, f, g, k, l)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.d = c;
  d.m = b;
  d.O = a;
  return d
}();
function Vc(a, b, c, d, e) {
  this.h = a;
  this.ia = b;
  this.start = c;
  this.end = d;
  this.j = e;
  this.o = 0;
  this.e = 32400159
}
r = Vc.prototype;
r.H = function(a) {
  var b = this.j;
  return null != b ? b : this.j = a = sb(a)
};
r.Y = function(a, b) {
  return a.M(a, b, null)
};
r.P = function(a, b, c) {
  return a.M(a, b, c)
};
r.ja = function(a, b, c) {
  var d = this, e = d.start + b;
  return Wc.O ? Wc.O(d.h, Ab.d(d.ia, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b
  }(), null) : Wc.call(null, d.h, Ab.d(d.ia, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b
  }(), null)
};
r.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.A(this, c);
      case 3:
        return this.M(this, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.J = function(a, b) {
  return Wc.O ? Wc.O(this.h, Oa(this.ia, this.end, b), this.start, this.end + 1, null) : Wc.call(null, this.h, Oa(this.ia, this.end, b), this.start, this.end + 1, null)
};
r.toString = function() {
  return F(this)
};
r.Q = function(a, b) {
  return ob.a(a, b)
};
r.R = function(a, b, c) {
  return ob.d(a, b, c)
};
r.t = function() {
  var a = this;
  return function c(d) {
    return d === a.end ? null : Q(z.a(a.ia, d), new kc(null, function() {
      return c(d + 1)
    }, null, null))
  }(a.start)
};
r.G = function() {
  return this.end - this.start
};
r.ub = function(a, b, c) {
  return a.ja(a, b, c)
};
r.w = function(a, b) {
  return tb(a, b)
};
r.C = function(a, b) {
  return Wc.O ? Wc.O(b, this.ia, this.start, this.end, this.j) : Wc.call(null, b, this.ia, this.start, this.end, this.j)
};
r.B = h("h");
r.A = function(a, b) {
  var c = 0 > b;
  return(c ? c : this.end <= this.start + b) ? Hc(b, this.end - this.start) : z.a(this.ia, this.start + b)
};
r.M = function(a, b, c) {
  return((a = 0 > b) ? a : this.end <= this.start + b) ? c : z.d(this.ia, this.start + b, c)
};
r.L = function() {
  return Eb(Pc, this.h)
};
function Wc(a, b, c, d, e) {
  for(;;) {
    if(b instanceof Vc) {
      var f = b.start + c, g = b.start + d;
      b = b.ia;
      c = f;
      d = g
    }else {
      var k = T(b);
      if(function() {
        var a = 0 > c;
        return a || (a = 0 > d) ? a : (a = c > k) ? a : d > k
      }()) {
        throw Error("Index out of bounds");
      }
      return new Vc(a, b, c, d, e)
    }
  }
}
var Uc = function() {
  function a(a, b, c) {
    return Wc(null, a, b, c, null)
  }
  function b(a, b) {
    return c.d(a, b, T(a))
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.d = a;
  return c
}();
function Nc(a) {
  return new Cc({}, a.b.slice())
}
function Oc(a) {
  var b = Array(32);
  Ob(a, 0, b, 0, a.length);
  return b
}
var Yc = function Xc(b, c, d, e) {
  d = b.root.p === d.p ? d : new Cc(b.root.p, d.b.slice());
  var f = b.f - 1 >>> c & 31;
  if(5 === c) {
    b = e
  }else {
    var g = d.b[f];
    b = null != g ? Xc(b, c - 5, g, e) : Ec(b.root.p, c - 5, e)
  }
  d.b[f] = b;
  return d
};
function Mc(a, b, c, d) {
  this.f = a;
  this.shift = b;
  this.root = c;
  this.r = d;
  this.e = 275;
  this.o = 88
}
r = Mc.prototype;
r.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.Y(this, c);
      case 3:
        return this.P(this, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.Y = function(a, b) {
  return a.M(a, b, null)
};
r.P = function(a, b, c) {
  return a.M(a, b, c)
};
r.A = function(a, b) {
  if(this.root.p) {
    return Ic(a, b)[b & 31]
  }
  throw Error("nth after persistent!");
};
r.M = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.f : d) ? a.A(a, b) : c
};
r.G = function() {
  if(this.root.p) {
    return this.f
  }
  throw Error("count after persistent!");
};
function Zc(a, b, c, d) {
  if(a.root.p) {
    if(function() {
      var b = 0 <= c;
      return b ? c < a.f : b
    }()) {
      if(Dc(b) <= c) {
        a.r[c & 31] = d
      }else {
        var e = function g(b, e) {
          var n = a.root.p === e.p ? e : new Cc(a.root.p, e.b.slice());
          if(0 === b) {
            n.b[c & 31] = d
          }else {
            var m = c >>> b & 31, p = g(b - 5, n.b[m]);
            n.b[m] = p
          }
          return n
        }.call(null, a.shift, a.root);
        a.root = e
      }
      return b
    }
    if(c === a.f) {
      return b.Ka(b, d)
    }
    if(t.n) {
      throw Error([y("Index "), y(c), y(" out of bounds for TransientVector of length"), y(a.f)].join(""));
    }
    return null
  }
  throw Error("assoc! after persistent!");
}
r.Aa = function(a, b, c) {
  return Zc(a, a, b, c)
};
r.Ka = function(a, b) {
  if(this.root.p) {
    if(32 > this.f - Dc(a)) {
      this.r[this.f & 31] = b
    }else {
      var c = new Cc(this.root.p, this.r), d = Array(32);
      d[0] = b;
      this.r = d;
      if(this.f >>> 5 > 1 << this.shift) {
        var d = Array(32), e = this.shift + 5;
        d[0] = this.root;
        d[1] = Ec(this.root.p, this.shift, c);
        this.root = new Cc(this.root.p, d);
        this.shift = e
      }else {
        this.root = Yc(a, this.shift, this.root, c)
      }
    }
    this.f += 1;
    return a
  }
  throw Error("conj! after persistent!");
};
r.Ua = function(a) {
  if(this.root.p) {
    this.root.p = null;
    a = this.f - Dc(a);
    var b = Array(a);
    Ob(this.r, 0, b, 0, a);
    return new Lc(null, this.f, this.shift, this.root, b, null)
  }
  throw Error("persistent! called twice");
};
function $c() {
  this.o = 0;
  this.e = 2097152
}
$c.prototype.w = q(!1);
var ad = new $c;
function bd(a, b) {
  return Rb(Kb(b) ? T(a) === T(b) ? xc(zc, Ac.a(function(a) {
    return P.a(yb.d(b, J(a), ad), J(M(a)))
  }, a)) : null : null)
}
function cd(a, b) {
  var c = a.b;
  if(b instanceof gc) {
    a: {
      for(var d = c.length, e = b.oa, f = 0;;) {
        if(d <= f) {
          c = -1;
          break a
        }
        var g = c[f], k = g instanceof gc;
        if(k ? e === g.oa : k) {
          c = f;
          break a
        }
        if(t.n) {
          f += 2
        }else {
          c = null;
          break a
        }
      }
      c = void 0
    }
  }else {
    if((d = ca(b)) ? d : "number" === typeof b) {
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
          if(t.n) {
            e += 2
          }else {
            c = null;
            break a
          }
        }
        c = void 0
      }
    }else {
      if(b instanceof G) {
        a: {
          d = c.length;
          e = b.xa;
          for(f = 0;;) {
            if(d <= f) {
              c = -1;
              break a
            }
            g = c[f];
            if((k = g instanceof G) ? e === g.xa : k) {
              c = f;
              break a
            }
            if(t.n) {
              f += 2
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
              if(t.n) {
                e += 2
              }else {
                c = null;
                break a
              }
            }
            c = void 0
          }
        }else {
          if(t.n) {
            a: {
              d = c.length;
              for(e = 0;;) {
                if(d <= e) {
                  c = -1;
                  break a
                }
                if(P.a(b, c[e])) {
                  c = e;
                  break a
                }
                if(t.n) {
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
function dd(a, b, c) {
  this.b = a;
  this.i = b;
  this.ya = c;
  this.o = 0;
  this.e = 32374990
}
r = dd.prototype;
r.H = function(a) {
  return sb(a)
};
r.ca = function() {
  return this.i < this.b.length - 2 ? new dd(this.b, this.i + 2, this.ya) : null
};
r.J = function(a, b) {
  return Q(b, a)
};
r.toString = function() {
  return F(this)
};
r.Q = function(a, b) {
  return V.a(b, a)
};
r.R = function(a, b, c) {
  return V.d(b, c, a)
};
r.t = aa();
r.G = function() {
  return(this.b.length - this.i) / 2
};
r.S = function() {
  return X([this.b[this.i], this.b[this.i + 1]])
};
r.T = function() {
  return this.i < this.b.length - 2 ? new dd(this.b, this.i + 2, this.ya) : L
};
r.w = function(a, b) {
  return tb(a, b)
};
r.C = function(a, b) {
  return new dd(this.b, this.i, b)
};
r.B = h("ya");
r.L = function() {
  return Eb(L, this.ya)
};
function ed(a, b, c, d) {
  this.h = a;
  this.f = b;
  this.b = c;
  this.j = d;
  this.o = 4;
  this.e = 16123663
}
r = ed.prototype;
r.Ta = function() {
  return new fd({}, this.b.length, this.b.slice())
};
r.H = function(a) {
  var b = this.j;
  return null != b ? b : this.j = a = $b(a)
};
r.Y = function(a, b) {
  return a.P(a, b, null)
};
r.P = function(a, b, c) {
  a = cd(a, b);
  return-1 === a ? c : this.b[a + 1]
};
r.ja = function(a, b, c) {
  var d = cd(a, b);
  if(-1 === d) {
    if(this.f < gd) {
      d = a.b;
      a = d.length;
      for(var e = Array(a + 2), f = 0;;) {
        if(f < a) {
          e[f] = d[f], f += 1
        }else {
          break
        }
      }
      e[a] = b;
      e[a + 1] = c;
      return new ed(this.h, this.f + 1, e, null)
    }
    return Ta(Ha(Bc(hd, a), b, c), this.h)
  }
  return c === this.b[d + 1] ? a : t.n ? (b = this.b.slice(), b[d + 1] = c, new ed(this.h, this.f, b, null)) : null
};
r.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.Y(this, c);
      case 3:
        return this.P(this, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.J = function(a, b) {
  return Lb(b) ? a.ja(a, z.a(b, 0), z.a(b, 1)) : Ub.d(Ca, a, b)
};
r.toString = function() {
  return F(this)
};
r.t = function() {
  return 0 <= this.b.length - 2 ? new dd(this.b, 0, null) : null
};
r.G = h("f");
r.w = function(a, b) {
  return bd(a, b)
};
r.C = function(a, b) {
  return new ed(b, this.f, this.b, this.j)
};
r.B = h("h");
r.L = function() {
  return Ta(id, this.h)
};
var id = new ed(null, 0, [], null), gd = 8;
function sa(a) {
  return new ed(null, a.length / 2, a, null)
}
function fd(a, b, c) {
  this.Da = a;
  this.ua = b;
  this.b = c;
  this.o = 56;
  this.e = 258
}
r = fd.prototype;
r.Aa = function(a, b, c) {
  if(v(this.Da)) {
    var d = cd(a, b);
    if(-1 === d) {
      if(this.ua + 2 <= 2 * gd) {
        return this.ua += 2, this.b.push(b), this.b.push(c), a
      }
      a = jd.a ? jd.a(this.ua, this.b) : jd.call(null, this.ua, this.b);
      return hb(a, b, c)
    }
    c !== this.b[d + 1] && (this.b[d + 1] = c);
    return a
  }
  throw Error("assoc! after persistent!");
};
r.Ka = function(a, b) {
  if(v(this.Da)) {
    var c;
    c = b ? ((c = b.e & 2048) ? c : b.ac) ? !0 : b.e ? !1 : w(Ka, b) : w(Ka, b);
    if(c) {
      return a.Aa(a, bc.c ? bc.c(b) : bc.call(null, b), cc.c ? cc.c(b) : cc.call(null, b))
    }
    c = I(b);
    for(var d = a;;) {
      var e = J(c);
      if(v(e)) {
        c = M(c), d = d.Aa(d, bc.c ? bc.c(e) : bc.call(null, e), cc.c ? cc.c(e) : cc.call(null, e))
      }else {
        return d
      }
    }
  }else {
    throw Error("conj! after persistent!");
  }
};
r.Ua = function() {
  if(v(this.Da)) {
    return this.Da = !1, new ed(null, Wb(this.ua), this.b, null)
  }
  throw Error("persistent! called twice");
};
r.Y = function(a, b) {
  return a.P(a, b, null)
};
r.P = function(a, b, c) {
  if(v(this.Da)) {
    return a = cd(a, b), -1 === a ? c : this.b[a + 1]
  }
  throw Error("lookup after persistent!");
};
r.G = function() {
  if(v(this.Da)) {
    return Wb(this.ua)
  }
  throw Error("count after persistent!");
};
function jd(a, b) {
  for(var c = eb(hd), d = 0;;) {
    if(d < a) {
      c = hb(c, b[d], b[d + 1]), d += 2
    }else {
      return c
    }
  }
}
function kd() {
  this.K = !1
}
function ld(a, b) {
  return a === b ? !0 : hc(a, b) ? !0 : t.n ? P.a(a, b) : null
}
var md = function() {
  function a(a, b, c, g, k) {
    a = a.slice();
    a[b] = c;
    a[g] = k;
    return a
  }
  function b(a, b, c) {
    a = a.slice();
    a[b] = c;
    return a
  }
  var c = null, c = function(c, e, f, g, k) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 5:
        return a.call(this, c, e, f, g, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.O = a;
  return c
}(), nd = function() {
  function a(a, b, c, g, k, l) {
    a = a.Ea(b);
    a.b[c] = g;
    a.b[k] = l;
    return a
  }
  function b(a, b, c, g) {
    a = a.Ea(b);
    a.b[c] = g;
    return a
  }
  var c = null, c = function(c, e, f, g, k, l) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, e, f, g);
      case 6:
        return a.call(this, c, e, f, g, k, l)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.m = b;
  c.ka = a;
  return c
}();
function od(a, b, c) {
  this.p = a;
  this.D = b;
  this.b = c
}
r = od.prototype;
r.fa = function(a, b, c, d, e, f) {
  var g = 1 << (c >>> b & 31), k = Zb(this.D & g - 1);
  if(0 === (this.D & g)) {
    var l = Zb(this.D);
    if(2 * l < this.b.length) {
      a = this.Ea(a);
      b = a.b;
      f.K = !0;
      a: {
        for(c = 2 * (l - k), f = 2 * k + (c - 1), l = 2 * (k + 1) + (c - 1);;) {
          if(0 === c) {
            break a
          }
          b[l] = b[f];
          l -= 1;
          c -= 1;
          f -= 1
        }
      }
      b[2 * k] = d;
      b[2 * k + 1] = e;
      a.D |= g;
      return a
    }
    if(16 <= l) {
      k = Array(32);
      k[c >>> b & 31] = pd.fa(a, b + 5, c, d, e, f);
      for(e = d = 0;;) {
        if(32 > d) {
          0 !== (this.D >>> d & 1) && (k[d] = null != this.b[e] ? pd.fa(a, b + 5, H.c(this.b[e]), this.b[e], this.b[e + 1], f) : this.b[e + 1], e += 2), d += 1
        }else {
          break
        }
      }
      return new qd(a, l + 1, k)
    }
    return t.n ? (b = Array(2 * (l + 4)), Ob(this.b, 0, b, 0, 2 * k), b[2 * k] = d, b[2 * k + 1] = e, Ob(this.b, 2 * k, b, 2 * (k + 1), 2 * (l - k)), f.K = !0, a = this.Ea(a), a.b = b, a.D |= g, a) : null
  }
  l = this.b[2 * k];
  g = this.b[2 * k + 1];
  return null == l ? (l = g.fa(a, b + 5, c, d, e, f), l === g ? this : nd.m(this, a, 2 * k + 1, l)) : ld(d, l) ? e === g ? this : nd.m(this, a, 2 * k + 1, e) : t.n ? (f.K = !0, nd.ka(this, a, 2 * k, null, 2 * k + 1, rd.za ? rd.za(a, b + 5, l, g, c, d, e) : rd.call(null, a, b + 5, l, g, c, d, e))) : null
};
r.Pa = function() {
  return sd.c ? sd.c(this.b) : sd.call(null, this.b)
};
r.Ea = function(a) {
  if(a === this.p) {
    return this
  }
  var b = Zb(this.D), c = Array(0 > b ? 4 : 2 * (b + 1));
  Ob(this.b, 0, c, 0, 2 * b);
  return new od(a, this.D, c)
};
r.ea = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), g = Zb(this.D & f - 1);
  if(0 === (this.D & f)) {
    var k = Zb(this.D);
    if(16 <= k) {
      g = Array(32);
      g[b >>> a & 31] = pd.ea(a + 5, b, c, d, e);
      for(d = c = 0;;) {
        if(32 > c) {
          0 !== (this.D >>> c & 1) && (g[c] = null != this.b[d] ? pd.ea(a + 5, H.c(this.b[d]), this.b[d], this.b[d + 1], e) : this.b[d + 1], d += 2), c += 1
        }else {
          break
        }
      }
      return new qd(null, k + 1, g)
    }
    a = Array(2 * (k + 1));
    Ob(this.b, 0, a, 0, 2 * g);
    a[2 * g] = c;
    a[2 * g + 1] = d;
    Ob(this.b, 2 * g, a, 2 * (g + 1), 2 * (k - g));
    e.K = !0;
    return new od(null, this.D | f, a)
  }
  k = this.b[2 * g];
  f = this.b[2 * g + 1];
  return null == k ? (k = f.ea(a + 5, b, c, d, e), k === f ? this : new od(null, this.D, md.d(this.b, 2 * g + 1, k))) : ld(c, k) ? d === f ? this : new od(null, this.D, md.d(this.b, 2 * g + 1, d)) : t.n ? (e.K = !0, new od(null, this.D, md.O(this.b, 2 * g, null, 2 * g + 1, rd.ka ? rd.ka(a + 5, k, f, b, c, d) : rd.call(null, a + 5, k, f, b, c, d)))) : null
};
r.ta = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if(0 === (this.D & e)) {
    return d
  }
  var f = Zb(this.D & e - 1), e = this.b[2 * f], f = this.b[2 * f + 1];
  return null == e ? f.ta(a + 5, b, c, d) : ld(c, e) ? f : t.n ? d : null
};
var pd = new od(null, 0, []);
function qd(a, b, c) {
  this.p = a;
  this.f = b;
  this.b = c
}
r = qd.prototype;
r.fa = function(a, b, c, d, e, f) {
  var g = c >>> b & 31, k = this.b[g];
  if(null == k) {
    return a = nd.m(this, a, g, pd.fa(a, b + 5, c, d, e, f)), a.f += 1, a
  }
  b = k.fa(a, b + 5, c, d, e, f);
  return b === k ? this : nd.m(this, a, g, b)
};
r.Pa = function() {
  return td.c ? td.c(this.b) : td.call(null, this.b)
};
r.Ea = function(a) {
  return a === this.p ? this : new qd(a, this.f, this.b.slice())
};
r.ea = function(a, b, c, d, e) {
  var f = b >>> a & 31, g = this.b[f];
  if(null == g) {
    return new qd(null, this.f + 1, md.d(this.b, f, pd.ea(a + 5, b, c, d, e)))
  }
  a = g.ea(a + 5, b, c, d, e);
  return a === g ? this : new qd(null, this.f, md.d(this.b, f, a))
};
r.ta = function(a, b, c, d) {
  var e = this.b[b >>> a & 31];
  return null != e ? e.ta(a + 5, b, c, d) : d
};
function ud(a, b, c) {
  b *= 2;
  for(var d = 0;;) {
    if(d < b) {
      if(ld(c, a[d])) {
        return d
      }
      d += 2
    }else {
      return-1
    }
  }
}
function vd(a, b, c, d) {
  this.p = a;
  this.na = b;
  this.f = c;
  this.b = d
}
r = vd.prototype;
r.fa = function(a, b, c, d, e, f) {
  if(c === this.na) {
    b = ud(this.b, this.f, d);
    if(-1 === b) {
      if(this.b.length > 2 * this.f) {
        return a = nd.ka(this, a, 2 * this.f, d, 2 * this.f + 1, e), f.K = !0, a.f += 1, a
      }
      c = this.b.length;
      b = Array(c + 2);
      Ob(this.b, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.K = !0;
      f = this.f + 1;
      a === this.p ? (this.b = b, this.f = f, a = this) : a = new vd(this.p, this.na, f, b);
      return a
    }
    return this.b[b + 1] === e ? this : nd.m(this, a, b + 1, e)
  }
  return(new od(a, 1 << (this.na >>> b & 31), [null, this, null, null])).fa(a, b, c, d, e, f)
};
r.Pa = function() {
  return sd.c ? sd.c(this.b) : sd.call(null, this.b)
};
r.Ea = function(a) {
  if(a === this.p) {
    return this
  }
  var b = Array(2 * (this.f + 1));
  Ob(this.b, 0, b, 0, 2 * this.f);
  return new vd(a, this.na, this.f, b)
};
r.ea = function(a, b, c, d, e) {
  return b === this.na ? (a = ud(this.b, this.f, c), -1 === a ? (a = this.b.length, b = Array(a + 2), Ob(this.b, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.K = !0, new vd(null, this.na, this.f + 1, b)) : P.a(this.b[a], d) ? this : new vd(null, this.na, this.f, md.d(this.b, a + 1, d))) : (new od(null, 1 << (this.na >>> a & 31), [null, this])).ea(a, b, c, d, e)
};
r.ta = function(a, b, c, d) {
  a = ud(this.b, this.f, c);
  return 0 > a ? d : ld(c, this.b[a]) ? this.b[a + 1] : t.n ? d : null
};
var rd = function() {
  function a(a, b, c, g, k, l, n) {
    var m = H.c(c);
    if(m === k) {
      return new vd(null, m, 2, [c, g, l, n])
    }
    var p = new kd;
    return pd.fa(a, b, m, c, g, p).fa(a, b, k, l, n, p)
  }
  function b(a, b, c, g, k, l) {
    var n = H.c(b);
    if(n === g) {
      return new vd(null, n, 2, [b, c, k, l])
    }
    var m = new kd;
    return pd.ea(a, n, b, c, m).ea(a, g, k, l, m)
  }
  var c = null, c = function(c, e, f, g, k, l, n) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, f, g, k, l);
      case 7:
        return a.call(this, c, e, f, g, k, l, n)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.ka = b;
  c.za = a;
  return c
}();
function wd(a, b, c, d, e) {
  this.h = a;
  this.ga = b;
  this.i = c;
  this.s = d;
  this.j = e;
  this.o = 0;
  this.e = 32374860
}
r = wd.prototype;
r.H = function(a) {
  var b = this.j;
  return null != b ? b : this.j = a = sb(a)
};
r.J = function(a, b) {
  return Q(b, a)
};
r.toString = function() {
  return F(this)
};
r.Q = function(a, b) {
  return V.a(b, a)
};
r.R = function(a, b, c) {
  return V.d(b, c, a)
};
r.t = aa();
r.S = function() {
  return null == this.s ? X([this.ga[this.i], this.ga[this.i + 1]]) : J(this.s)
};
r.T = function() {
  return null == this.s ? sd.d ? sd.d(this.ga, this.i + 2, null) : sd.call(null, this.ga, this.i + 2, null) : sd.d ? sd.d(this.ga, this.i, M(this.s)) : sd.call(null, this.ga, this.i, M(this.s))
};
r.w = function(a, b) {
  return tb(a, b)
};
r.C = function(a, b) {
  return new wd(b, this.ga, this.i, this.s, this.j)
};
r.B = h("h");
r.L = function() {
  return Eb(L, this.h)
};
var sd = function() {
  function a(a, b, c) {
    if(null == c) {
      for(c = a.length;;) {
        if(b < c) {
          if(null != a[b]) {
            return new wd(null, a, b, null, null)
          }
          var g = a[b + 1];
          if(v(g) && (g = g.Pa(), v(g))) {
            return new wd(null, a, b + 2, g, null)
          }
          b += 2
        }else {
          return null
        }
      }
    }else {
      return new wd(null, a, b, c, null)
    }
  }
  function b(a) {
    return c.d(a, 0, null)
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.d = a;
  return c
}();
function xd(a, b, c, d, e) {
  this.h = a;
  this.ga = b;
  this.i = c;
  this.s = d;
  this.j = e;
  this.o = 0;
  this.e = 32374860
}
r = xd.prototype;
r.H = function(a) {
  var b = this.j;
  return null != b ? b : this.j = a = sb(a)
};
r.J = function(a, b) {
  return Q(b, a)
};
r.toString = function() {
  return F(this)
};
r.Q = function(a, b) {
  return V.a(b, a)
};
r.R = function(a, b, c) {
  return V.d(b, c, a)
};
r.t = aa();
r.S = function() {
  return J(this.s)
};
r.T = function() {
  return td.m ? td.m(null, this.ga, this.i, M(this.s)) : td.call(null, null, this.ga, this.i, M(this.s))
};
r.w = function(a, b) {
  return tb(a, b)
};
r.C = function(a, b) {
  return new xd(b, this.ga, this.i, this.s, this.j)
};
r.B = h("h");
r.L = function() {
  return Eb(L, this.h)
};
var td = function() {
  function a(a, b, c, g) {
    if(null == g) {
      for(g = b.length;;) {
        if(c < g) {
          var k = b[c];
          if(v(k) && (k = k.Pa(), v(k))) {
            return new xd(a, b, c + 1, k, null)
          }
          c += 1
        }else {
          return null
        }
      }
    }else {
      return new xd(a, b, c, g, null)
    }
  }
  function b(a) {
    return c.m(null, a, 0, null)
  }
  var c = null, c = function(c, e, f, g) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, e, f, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.m = a;
  return c
}();
function yd(a, b, c, d, e, f) {
  this.h = a;
  this.f = b;
  this.root = c;
  this.W = d;
  this.$ = e;
  this.j = f;
  this.o = 4;
  this.e = 16123663
}
r = yd.prototype;
r.Ta = function() {
  return new zd({}, this.root, this.f, this.W, this.$)
};
r.H = function(a) {
  var b = this.j;
  return null != b ? b : this.j = a = $b(a)
};
r.Y = function(a, b) {
  return a.P(a, b, null)
};
r.P = function(a, b, c) {
  return null == b ? this.W ? this.$ : c : null == this.root ? c : t.n ? this.root.ta(0, H.c(b), b, c) : null
};
r.ja = function(a, b, c) {
  if(null == b) {
    var d = this.W;
    return(d ? c === this.$ : d) ? a : new yd(this.h, this.W ? this.f : this.f + 1, this.root, !0, c, null)
  }
  d = new kd;
  c = (null == this.root ? pd : this.root).ea(0, H.c(b), b, c, d);
  return c === this.root ? a : new yd(this.h, d.K ? this.f + 1 : this.f, c, this.W, this.$, null)
};
r.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.Y(this, c);
      case 3:
        return this.P(this, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.J = function(a, b) {
  return Lb(b) ? a.ja(a, z.a(b, 0), z.a(b, 1)) : Ub.d(Ca, a, b)
};
r.toString = function() {
  return F(this)
};
r.t = function() {
  if(0 < this.f) {
    var a = null != this.root ? this.root.Pa() : null;
    return this.W ? Q(X([null, this.$]), a) : a
  }
  return null
};
r.G = h("f");
r.w = function(a, b) {
  return bd(a, b)
};
r.C = function(a, b) {
  return new yd(b, this.f, this.root, this.W, this.$, this.j)
};
r.B = h("h");
r.L = function() {
  return Ta(hd, this.h)
};
var hd = new yd(null, 0, null, !1, null, 0);
function zd(a, b, c, d, e) {
  this.p = a;
  this.root = b;
  this.count = c;
  this.W = d;
  this.$ = e;
  this.o = 56;
  this.e = 258
}
r = zd.prototype;
r.Aa = function(a, b, c) {
  return Ad(a, b, c)
};
r.Ka = function(a, b) {
  var c;
  a: {
    if(a.p) {
      c = b ? ((c = b.e & 2048) ? c : b.ac) ? !0 : b.e ? !1 : w(Ka, b) : w(Ka, b);
      if(c) {
        c = Ad(a, bc.c ? bc.c(b) : bc.call(null, b), cc.c ? cc.c(b) : cc.call(null, b));
        break a
      }
      c = I(b);
      for(var d = a;;) {
        var e = J(c);
        if(v(e)) {
          c = M(c), d = Ad(d, bc.c ? bc.c(e) : bc.call(null, e), cc.c ? cc.c(e) : cc.call(null, e))
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
r.Ua = function(a) {
  if(a.p) {
    a.p = null, a = new yd(null, a.count, a.root, a.W, a.$, null)
  }else {
    throw Error("persistent! called twice");
  }
  return a
};
r.Y = function(a, b) {
  return null == b ? this.W ? this.$ : null : null == this.root ? null : this.root.ta(0, H.c(b), b)
};
r.P = function(a, b, c) {
  return null == b ? this.W ? this.$ : c : null == this.root ? c : this.root.ta(0, H.c(b), b, c)
};
r.G = function() {
  if(this.p) {
    return this.count
  }
  throw Error("count after persistent!");
};
function Ad(a, b, c) {
  if(a.p) {
    if(null == b) {
      a.$ !== c && (a.$ = c), a.W || (a.count += 1, a.W = !0)
    }else {
      var d = new kd;
      b = (null == a.root ? pd : a.root).fa(a.p, 0, H.c(b), b, c, d);
      b !== a.root && (a.root = b);
      d.K && (a.count += 1)
    }
    return a
  }
  throw Error("assoc! after persistent!");
}
var zb = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    for(var b = I(a), e = eb(hd);;) {
      if(b) {
        a = M(M(b));
        var f = J(b), b = J(M(b)), e = hb(e, f, b), b = a
      }else {
        return gb(e)
      }
    }
  }
  a.q = 0;
  a.k = function(a) {
    a = I(a);
    return b(a)
  };
  a.g = b;
  return a
}(), Bd = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    return new ed(null, Wb(T(a)), Db.a(wa, a), null)
  }
  a.q = 0;
  a.k = function(a) {
    a = I(a);
    return b(a)
  };
  a.g = b;
  return a
}();
function bc(a) {
  return La(a)
}
function cc(a) {
  return Ma(a)
}
var Cd = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    return v(yc(a)) ? Ub.a(function(a, b) {
      return wb.a(v(a) ? a : id, b)
    }, a) : null
  }
  a.q = 0;
  a.k = function(a) {
    a = I(a);
    return b(a)
  };
  a.g = b;
  return a
}();
function ic(a) {
  var b;
  b = a ? ((b = a.o & 4096) ? b : a.Xd) ? !0 : !1 : !1;
  if(b) {
    return a.name
  }
  if("string" === typeof a) {
    return a
  }
  throw Error([y("Doesn't support name: "), y(a)].join(""));
}
function Dd(a, b, c, d, e) {
  this.h = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.j = e;
  this.o = 0;
  this.e = 32375006
}
r = Dd.prototype;
r.H = function(a) {
  var b = this.j;
  return null != b ? b : this.j = a = sb(a)
};
r.ca = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new Dd(this.h, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new Dd(this.h, this.start + this.step, this.end, this.step, null) : null
};
r.J = function(a, b) {
  return Q(b, a)
};
r.toString = function() {
  return F(this)
};
r.Q = function(a, b) {
  return ob.a(a, b)
};
r.R = function(a, b, c) {
  return ob.d(a, b, c)
};
r.t = function(a) {
  return 0 < this.step ? this.start < this.end ? a : null : this.start > this.end ? a : null
};
r.G = function(a) {
  return ta(a.t(a)) ? 0 : Math.ceil((this.end - this.start) / this.step)
};
r.S = h("start");
r.T = function(a) {
  return null != a.t(a) ? new Dd(this.h, this.start + this.step, this.end, this.step, null) : L
};
r.w = function(a, b) {
  return tb(a, b)
};
r.C = function(a, b) {
  return new Dd(b, this.start, this.end, this.step, this.j)
};
r.B = h("h");
r.A = function(a, b) {
  if(b < a.G(a)) {
    return this.start + b * this.step
  }
  var c = this.start > this.end;
  if(c ? 0 === this.step : c) {
    return this.start
  }
  throw Error("Index out of bounds");
};
r.M = function(a, b, c) {
  c = b < a.G(a) ? this.start + b * this.step : ((a = this.start > this.end) ? 0 === this.step : a) ? this.start : c;
  return c
};
r.L = function() {
  return Eb(L, this.h)
};
var Ed = function() {
  function a(a, b, c) {
    return new Dd(null, a, b, c, null)
  }
  function b(a, b) {
    return e.d(a, b, 1)
  }
  function c(a) {
    return e.d(0, a, 1)
  }
  function d() {
    return e.d(0, Number.MAX_VALUE, 1)
  }
  var e = null, e = function(e, g, k) {
    switch(arguments.length) {
      case 0:
        return d.call(this);
      case 1:
        return c.call(this, e);
      case 2:
        return b.call(this, e, g);
      case 3:
        return a.call(this, e, g, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.l = d;
  e.c = c;
  e.a = b;
  e.d = a;
  return e
}(), Fd = function() {
  function a(a, b) {
    for(;;) {
      var c = I(b);
      if(v(c ? 0 < a : c)) {
        var c = a - 1, g = M(b);
        a = c;
        b = g
      }else {
        return null
      }
    }
  }
  function b(a) {
    for(;;) {
      if(I(a)) {
        a = M(a)
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
  c.c = b;
  c.a = a;
  return c
}(), Gd = function() {
  function a(a, b) {
    Fd.a(a, b);
    return b
  }
  function b(a) {
    Fd.c(a);
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
  c.c = b;
  c.a = a;
  return c
}();
function Y(a, b, c, d, e, f, g) {
  E(a, c);
  I(g) && (b.d ? b.d(J(g), a, f) : b.call(null, J(g), a, f));
  c = I(M(g));
  g = null;
  for(var k = 0, l = 0;;) {
    if(l < k) {
      var n = g.A(g, l);
      E(a, d);
      b.d ? b.d(n, a, f) : b.call(null, n, a, f);
      l += 1
    }else {
      if(c = I(c)) {
        g = c, Mb(g) ? (c = jb(g), l = kb(g), g = c, k = T(c), c = l) : (c = J(g), E(a, d), b.d ? b.d(c, a, f) : b.call(null, c, a, f), c = M(g), g = null, k = 0), l = 0
      }else {
        break
      }
    }
  }
  return E(a, e)
}
var Hd = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = N(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e)
  }
  function b(a, b) {
    for(var e = I(b), f = null, g = 0, k = 0;;) {
      if(k < g) {
        var l = f.A(f, k);
        E(a, l);
        k += 1
      }else {
        if(e = I(e)) {
          f = e, Mb(f) ? (e = jb(f), g = kb(f), f = e, l = T(e), e = g, g = l) : (l = J(f), E(a, l), e = M(f), f = null, g = 0), k = 0
        }else {
          return null
        }
      }
    }
  }
  a.q = 1;
  a.k = function(a) {
    var d = J(a);
    a = K(a);
    return b(d, a)
  };
  a.g = b;
  return a
}(), Id = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Jd(a) {
  return[y('"'), y(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return Id[a]
  })), y('"')].join("")
}
var Z = function Kd(b, c, d) {
  if(null == b) {
    return E(c, "nil")
  }
  if(void 0 === b) {
    return E(c, "#\x3cundefined\x3e")
  }
  if(t.n) {
    v(function() {
      var c = yb.a(d, t.Nb);
      return v(c) ? (c = b ? ((c = b.e & 131072) ? c : b.bc) ? !0 : b.e ? !1 : w(Qa, b) : w(Qa, b), v(c) ? Fb(b) : c) : c
    }()) && (E(c, "^"), Kd(Fb(b), c, d), E(c, " "));
    if(null == b) {
      return E(c, "nil")
    }
    if(b.Ca) {
      return b.La(b, c, d)
    }
    if(function() {
      var c;
      c = b ? ((c = b.e & 2147483648) ? c : b.N) ? !0 : !1 : !1;
      return c
    }()) {
      return b.v(b, c, d)
    }
    if(function() {
      var c = ua(b) === Boolean;
      return c ? c : "number" === typeof b
    }()) {
      return E(c, "" + y(b))
    }
    if(b instanceof Array) {
      return Y(c, Kd, "#\x3cArray [", ", ", "]\x3e", d, b)
    }
    if(ca(b)) {
      return v(t.gc.call(null, d)) ? E(c, Jd(b)) : E(c, b)
    }
    if(Bb(b)) {
      return Hd.g(c, N(["#\x3c", "" + y(b), "\x3e"], 0))
    }
    if(b instanceof Date) {
      var e = function(b, c) {
        for(var d = "" + y(b);;) {
          if(T(d) < c) {
            d = [y("0"), y(d)].join("")
          }else {
            return d
          }
        }
      };
      return Hd.g(c, N(['#inst "', "" + y(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0))
    }
    return v(b instanceof RegExp) ? Hd.g(c, N(['#"', b.source, '"'], 0)) : function() {
      var c;
      c = b ? ((c = b.e & 2147483648) ? c : b.N) ? !0 : b.e ? !1 : w(bb, b) : w(bb, b);
      return c
    }() ? cb(b, c, d) : t.n ? Hd.g(c, N(["#\x3c", "" + y(b), "\x3e"], 0)) : null
  }
  return null
}, Ld = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    var b = ra(), e = null == a;
    if(e ? e : ta(I(a))) {
      b = ""
    }else {
      var e = y, f = new pa, g = new lb(f);
      a: {
        Z(J(a), g, b);
        a = I(M(a));
        for(var k = null, l = 0, n = 0;;) {
          if(n < l) {
            var m = k.A(k, n);
            E(g, " ");
            Z(m, g, b);
            n += 1
          }else {
            if(a = I(a)) {
              k = a, Mb(k) ? (a = jb(k), l = kb(k), k = a, m = T(a), a = l, l = m) : (m = J(k), E(g, " "), Z(m, g, b), a = M(k), k = null, l = 0), n = 0
            }else {
              break a
            }
          }
        }
      }
      ab(g);
      b = "" + e(f)
    }
    return b
  }
  a.q = 0;
  a.k = function(a) {
    a = I(a);
    return b(a)
  };
  a.g = b;
  return a
}();
nb.prototype.N = !0;
nb.prototype.v = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, a)
};
Vc.prototype.N = !0;
Vc.prototype.v = function(a, b, c) {
  return Y(b, Z, "[", " ", "]", c, a)
};
pc.prototype.N = !0;
pc.prototype.v = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, a)
};
ed.prototype.N = !0;
ed.prototype.v = function(a, b, c) {
  return Y(b, function(a) {
    return Y(b, Z, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
kc.prototype.N = !0;
kc.prototype.v = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, a)
};
wd.prototype.N = !0;
wd.prototype.v = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, a)
};
Tc.prototype.N = !0;
Tc.prototype.v = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, a)
};
yd.prototype.N = !0;
yd.prototype.v = function(a, b, c) {
  return Y(b, function(a) {
    return Y(b, Z, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
Lc.prototype.N = !0;
Lc.prototype.v = function(a, b, c) {
  return Y(b, Z, "[", " ", "]", c, a)
};
dc.prototype.N = !0;
dc.prototype.v = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, a)
};
dd.prototype.N = !0;
dd.prototype.v = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, a)
};
ec.prototype.N = !0;
ec.prototype.v = function(a, b) {
  return E(b, "()")
};
fc.prototype.N = !0;
fc.prototype.v = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, a)
};
Dd.prototype.N = !0;
Dd.prototype.v = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, a)
};
xd.prototype.N = !0;
xd.prototype.v = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, a)
};
Lc.prototype.Db = !0;
Lc.prototype.Eb = function(a, b) {
  return Tb.a(a, b)
};
Vc.prototype.Db = !0;
Vc.prototype.Eb = function(a, b) {
  return Tb.a(a, b)
};
function Md(a, b, c, d) {
  this.state = a;
  this.h = b;
  this.sc = c;
  this.tc = d;
  this.e = 2153938944;
  this.o = 2
}
r = Md.prototype;
r.H = function(a) {
  return ea(a)
};
r.Ib = function(a, b, c) {
  for(var d = I(this.tc), e = null, f = 0, g = 0;;) {
    if(g < f) {
      var k = e.A(e, g), l = U.d(k, 0, null), k = U.d(k, 1, null);
      k.m ? k.m(l, a, b, c) : k.call(null, l, a, b, c);
      g += 1
    }else {
      if(d = I(d)) {
        Mb(d) ? (e = jb(d), d = kb(d), l = e, f = T(e), e = l) : (e = J(d), l = U.d(e, 0, null), k = U.d(e, 1, null), k.m ? k.m(l, a, b, c) : k.call(null, l, a, b, c), d = M(d), e = null, f = 0), g = 0
      }else {
        return null
      }
    }
  }
};
r.v = function(a, b, c) {
  E(b, "#\x3cAtom: ");
  Z(this.state, b, c);
  return E(b, "\x3e")
};
r.B = h("h");
r.fb = h("state");
r.w = function(a, b) {
  return a === b
};
var Nd = function() {
  function a(a) {
    return new Md(a, null, null, null)
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k)
    }
    function b(a, c) {
      var d = Qb(c) ? Db.a(zb, c) : c, e = yb.a(d, t.fe), d = yb.a(d, t.Nb);
      return new Md(a, d, e, null)
    }
    a.q = 1;
    a.k = function(a) {
      var c = J(a);
      a = K(a);
      return b(c, a)
    };
    a.g = b;
    return a
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.g(b, N(arguments, 1))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.q = 1;
  b.k = c.k;
  b.c = a;
  b.g = c.g;
  return b
}();
function Od(a, b) {
  var c = a.sc;
  if(v(c) && !v(c.c ? c.c(b) : c.call(null, b))) {
    throw Error([y("Assert failed: "), y("Validator rejected reference state"), y("\n"), y(Ld.g(N([S(new G(null, "validate", "validate", 1233162959, null), new G(null, "new-value", "new-value", 972165309, null))], 0)))].join(""));
  }
  c = a.state;
  a.state = b;
  db(a, c, b)
}
var Pd = {};
function Qd(a, b) {
  if(a ? a.$b : a) {
    return a.$b(a, b)
  }
  var c;
  c = Qd[s(null == a ? null : a)];
  if(!c && (c = Qd._, !c)) {
    throw x("IEncodeClojure.-js-\x3eclj", a);
  }
  return c.call(null, a, b)
}
var Rd = function() {
  function a(a) {
    return b.g(a, N([sa([t.fc, !1])], 0))
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k)
    }
    function b(a, c) {
      if(a ? v(v(null) ? null : a.Vd) || (a.ec ? 0 : w(Pd, a)) : w(Pd, a)) {
        return Qd(a, Db.a(Bd, c))
      }
      if(I(c)) {
        var d = Qb(c) ? Db.a(zb, c) : c, e = yb.a(d, t.fc);
        return function(a, b, c, d) {
          return function A(e) {
            return Qb(e) ? Gd.c(Ac.a(A, e)) : Ib(e) ? Bc(Aa(e), Ac.a(A, e)) : e instanceof Array ? Rc(Ac.a(A, e)) : ua(e) === Object ? Bc(id, function() {
              return function(a, b, c, d) {
                return function ub(f) {
                  return new kc(null, function(a, b, c, d) {
                    return function() {
                      for(;;) {
                        var a = I(f);
                        if(a) {
                          if(Mb(a)) {
                            var b = jb(a), c = T(b), g = new mc(Array(c), 0);
                            a: {
                              for(var k = 0;;) {
                                if(k < c) {
                                  var l = z.a(b, k), l = X([d.c ? d.c(l) : d.call(null, l), A(e[l])]);
                                  g.add(l);
                                  k += 1
                                }else {
                                  b = !0;
                                  break a
                                }
                              }
                              b = void 0
                            }
                            return b ? qc(g.ba(), ub(kb(a))) : qc(g.ba(), null)
                          }
                          g = J(a);
                          return Q(X([d.c ? d.c(g) : d.call(null, g), A(e[g])]), ub(K(a)))
                        }
                        return null
                      }
                    }
                  }(a, b, c, d), null, null)
                }
              }(a, b, c, d)(Nb(e))
            }()) : t.n ? e : null
          }
        }(c, d, e, v(e) ? jc : y)(a)
      }
      return null
    }
    a.q = 1;
    a.k = function(a) {
      var c = J(a);
      a = K(a);
      return b(c, a)
    };
    a.g = b;
    return a
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.g(b, N(arguments, 1))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.q = 1;
  b.k = c.k;
  b.c = a;
  b.g = c.g;
  return b
}(), Xb = function() {
  function a(a) {
    return(Math.random.l ? Math.random.l() : Math.random.call(null)) * a
  }
  function b() {
    return c.c(1)
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.l = b;
  c.c = a;
  return c
}(), Yb = function(a) {
  return Math.floor.c ? Math.floor.c((Math.random.l ? Math.random.l() : Math.random.call(null)) * a) : Math.floor.call(null, (Math.random.l ? Math.random.l() : Math.random.call(null)) * a)
};
function Sd(a) {
  return U.a(a, Yb(T(a)))
}
;var Td, Ud;
function Vd(a, b) {
  if(a ? a.vb : a) {
    return a.vb(0, b)
  }
  var c;
  c = Vd[s(null == a ? null : a)];
  if(!c && (c = Vd._, !c)) {
    throw x("ReadPort.take!", a);
  }
  return c.call(null, a, b)
}
function Wd(a, b, c) {
  if(a ? a.Va : a) {
    return a.Va(0, b, c)
  }
  var d;
  d = Wd[s(null == a ? null : a)];
  if(!d && (d = Wd._, !d)) {
    throw x("WritePort.put!", a);
  }
  return d.call(null, a, b, c)
}
function Xd(a) {
  if(a ? a.la : a) {
    return a.la(a)
  }
  var b;
  b = Xd[s(null == a ? null : a)];
  if(!b && (b = Xd._, !b)) {
    throw x("Handler.active?", a);
  }
  return b.call(null, a)
}
function Yd(a) {
  if(a ? a.Z : a) {
    return a.Z(a)
  }
  var b;
  b = Yd[s(null == a ? null : a)];
  if(!b && (b = Yd._, !b)) {
    throw x("Handler.commit", a);
  }
  return b.call(null, a)
}
;var Zd, ae = function $d(b) {
  "undefined" === typeof Zd && (Zd = {}, Zd = function(b, d, e) {
    this.Pb = b;
    this.hc = d;
    this.oc = e;
    this.o = 0;
    this.e = 393216
  }, Zd.Ca = !0, Zd.Ba = "cljs.core.async.impl.ioc-helpers/t14616", Zd.La = function(b, d) {
    return E(d, "cljs.core.async.impl.ioc-helpers/t14616")
  }, Zd.prototype.la = q(!0), Zd.prototype.Z = h("Pb"), Zd.prototype.B = h("oc"), Zd.prototype.C = function(b, d) {
    return new Zd(this.Pb, this.hc, d)
  });
  return new Zd(b, $d, null)
};
function be(a) {
  try {
    return a[0].call(null, a)
  }catch(b) {
    if(b instanceof Object) {
      throw a[4].Kb(), b;
    }
    if(t.n) {
      throw b;
    }
    return null
  }
}
function ce(a, b) {
  var c = b.vb(0, ae(function(b) {
    a[2] = b;
    a[1] = 4;
    return be(a)
  }));
  return v(c) ? (a[2] = Pa(c), a[1] = 4, t.Lb) : null
}
function de(a, b, c, d) {
  c = c.Va(0, d, ae(function() {
    a[2] = null;
    a[1] = b;
    return be(a)
  }));
  return v(c) ? (a[2] = Pa(c), a[1] = b, t.Lb) : null
}
var fe = function() {
  function a(a, d, e, f) {
    var g = null;
    3 < arguments.length && (g = N(Array.prototype.slice.call(arguments, 3), 0));
    return b.call(this, a, d, e, g)
  }
  function b(a, b, e, f) {
    f = Qb(f) ? Db.a(zb, f) : f;
    a[1] = b;
    b = ee(function(b) {
      a[2] = b;
      return be(a)
    }, e, f);
    return v(b) ? (a[2] = Pa(b), t.Lb) : null
  }
  a.q = 3;
  a.k = function(a) {
    var d = J(a);
    a = M(a);
    var e = J(a);
    a = M(a);
    var f = J(a);
    a = K(a);
    return b(d, e, f, a)
  };
  a.g = b;
  return a
}();
function ge(a, b) {
  var c = a[4];
  null != b && c.Va(0, b, ae(q(null)));
  c.Kb();
  return c
}
;function he(a, b, c, d, e) {
  for(var f = 0;;) {
    if(f < e) {
      c[d + f] = a[b + f], f += 1
    }else {
      break
    }
  }
}
function ie(a, b, c, d) {
  this.head = a;
  this.r = b;
  this.length = c;
  this.b = d
}
ie.prototype.pop = function() {
  if(0 === this.length) {
    return null
  }
  var a = this.b[this.r];
  this.b[this.r] = null;
  this.r = (this.r + 1) % this.b.length;
  this.length -= 1;
  return a
};
ie.prototype.unshift = function(a) {
  this.b[this.head] = a;
  this.head = (this.head + 1) % this.b.length;
  this.length += 1;
  return null
};
function je(a, b) {
  if(a.length + 1 === a.b.length) {
    var c = Array(2 * a.b.length);
    a.r < a.head ? (he(a.b, a.r, c, 0, a.length), a.r = 0, a.head = a.length, a.b = c) : a.r > a.head ? (he(a.b, a.r, c, 0, a.b.length - a.r), he(a.b, 0, c, a.b.length - a.r, a.head), a.r = 0, a.head = a.length, a.b = c) : a.r === a.head && (a.r = 0, a.head = 0, a.b = c)
  }
  a.unshift(b)
}
function ke(a, b) {
  for(var c = a.length, d = 0;;) {
    if(d < c) {
      var e = a.pop();
      (b.c ? b.c(e) : b.call(null, e)) && a.unshift(e);
      d += 1
    }else {
      break
    }
  }
}
function le(a) {
  if(!(0 < a)) {
    throw Error([y("Assert failed: "), y("Can't create a ring buffer of size 0"), y("\n"), y(Ld.g(N([S(new G(null, "\x3e", "\x3e", -1640531465, null), new G(null, "n", "n", -1640531417, null), 0)], 0)))].join(""));
  }
  return new ie(0, 0, 0, Array(a))
}
function me(a, b) {
  this.I = a;
  this.Rb = b;
  this.o = 0;
  this.e = 2
}
me.prototype.G = function() {
  return this.I.length
};
function ne(a, b, c) {
  if(!ta(b.I.length === b.Rb)) {
    throw Error([y("Assert failed: "), y("Can't add to a full buffer"), y("\n"), y(Ld.g(N([S(new G(null, "not", "not", -1640422260, null), S(new G("impl", "full?", "impl/full?", -1337857039, null), new G(null, "this", "this", -1636972457, null)))], 0)))].join(""));
  }
  a.I.unshift(c)
}
;var oe = null, pe = le(32), qe = !1, re = !1;
function se() {
  qe = !0;
  re = !1;
  for(var a = 0;;) {
    var b = pe.pop();
    if(null != b && (b.l ? b.l() : b.call(null), 1024 > a)) {
      a += 1;
      continue
    }
    break
  }
  qe = !1;
  return 0 < pe.length ? te.l ? te.l() : te.call(null) : null
}
"undefined" !== typeof MessageChannel && (oe = new MessageChannel, oe.port1.onmessage = function() {
  return se()
});
function te() {
  var a = re;
  if(v(v(a) ? qe : a)) {
    return null
  }
  re = !0;
  return"undefined" !== typeof MessageChannel ? oe.port2.postMessage(0) : "undefined" !== typeof setImmediate ? setImmediate(se) : t.n ? setTimeout(se, 0) : null
}
function ue(a) {
  je(pe, a);
  te()
}
;var ve, xe = function we(b) {
  "undefined" === typeof ve && (ve = {}, ve = function(b, d, e) {
    this.K = b;
    this.Xb = d;
    this.nc = e;
    this.o = 0;
    this.e = 425984
  }, ve.Ca = !0, ve.Ba = "cljs.core.async.impl.channels/t14605", ve.La = function(b, d) {
    return E(d, "cljs.core.async.impl.channels/t14605")
  }, ve.prototype.fb = h("K"), ve.prototype.B = h("nc"), ve.prototype.C = function(b, d) {
    return new ve(this.K, this.Xb, d)
  });
  return new ve(b, we, null)
};
function ye(a, b) {
  this.Ga = a;
  this.K = b
}
function ze(a) {
  return Xd(a.Ga)
}
function Ae(a, b, c, d, e, f) {
  this.Qa = a;
  this.Xa = b;
  this.ab = c;
  this.Wa = d;
  this.I = e;
  this.closed = f
}
Ae.prototype.Kb = function() {
  if(!this.closed) {
    for(this.closed = !0;;) {
      var a = this.Qa.pop();
      if(null != a) {
        if(a.la(a)) {
          var b = a.Z(a);
          ue(function(a) {
            return function() {
              return a.c ? a.c(null) : a.call(null, null)
            }
          }(b, a))
        }
      }else {
        break
      }
    }
  }
};
Ae.prototype.vb = function(a, b) {
  if(b.la(b)) {
    var c = null != this.I;
    if(c ? 0 < T(this.I) : c) {
      return b.Z(b), xe(this.I.I.pop())
    }
    for(;;) {
      var d = this.ab.pop();
      if(null != d) {
        if(c = d.Ga, d = d.K, c.la(c)) {
          return c = c.Z(c), b.Z(b), ue(c), xe(d)
        }
      }else {
        if(this.closed) {
          return b.Z(b), xe(null)
        }
        64 < this.Xa ? (this.Xa = 0, ke(this.Qa, Xd)) : this.Xa += 1;
        if(!(1024 > this.Qa.length)) {
          throw Error([y("Assert failed: "), y([y("No more than "), y(1024), y(" pending takes are allowed on a single channel.")].join("")), y("\n"), y(Ld.g(N([S(new G(null, "\x3c", "\x3c", -1640531467, null), S(new G(null, ".-length", ".-length", 1395928862, null), new G(null, "takes", "takes", -1530407291, null)), new G("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", -1989946393, null))], 0)))].join(""));
        }
        je(this.Qa, b);
        return null
      }
    }
  }else {
    return null
  }
};
Ae.prototype.Va = function(a, b, c) {
  var d = this;
  if(null == b) {
    throw Error([y("Assert failed: "), y("Can't put nil in on a channel"), y("\n"), y(Ld.g(N([S(new G(null, "not", "not", -1640422260, null), S(new G(null, "nil?", "nil?", -1637150201, null), new G(null, "val", "val", -1640415014, null)))], 0)))].join(""));
  }
  if((a = d.closed) ? a : !c.la(c)) {
    return xe(null)
  }
  for(;;) {
    if(a = d.Qa.pop(), null != a) {
      if(a.la(a)) {
        var e = a.Z(a);
        c = c.Z(c);
        ue(function(a) {
          return function() {
            return a.c ? a.c(b) : a.call(null, b)
          }
        }(e, c, a));
        return xe(null)
      }
    }else {
      if(function() {
        var a = null == d.I;
        return a ? a : d.I.I.length === d.I.Rb
      }()) {
        64 < d.Wa ? (d.Wa = 0, ke(d.ab, ze)) : d.Wa += 1;
        if(!(1024 > d.ab.length)) {
          throw Error([y("Assert failed: "), y([y("No more than "), y(1024), y(" pending puts are allowed on a single channel."), y(" Consider using a windowed buffer.")].join("")), y("\n"), y(Ld.g(N([S(new G(null, "\x3c", "\x3c", -1640531467, null), S(new G(null, ".-length", ".-length", 1395928862, null), new G(null, "puts", "puts", -1637078787, null)), new G("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", -1989946393, null))], 0)))].join(""));
        }
        je(d.ab, new ye(c, b));
        return null
      }
      c = c.Z(c);
      ne(d.I, d.I, b);
      return xe(null)
    }
  }
};
function Be(a, b, c) {
  this.key = a;
  this.K = b;
  this.forward = c;
  this.o = 0;
  this.e = 2155872256
}
Be.prototype.v = function(a, b, c) {
  return Y(b, Z, "[", " ", "]", c, a)
};
Be.prototype.t = function() {
  return S.g(N([this.key, this.K], 0))
};
(function() {
  function a(a, b, c) {
    c = Array(c + 1);
    for(var g = 0;;) {
      if(g < c.length) {
        c[g] = null, g += 1
      }else {
        break
      }
    }
    return new Be(a, b, c)
  }
  function b(a) {
    return c.d(null, null, a)
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.d = a;
  return c
})().c(0);
var Ce = function() {
  function a(a) {
    a = P.a(a, 0) ? null : a;
    a = "number" === typeof a ? new me(le(a), a) : a;
    return new Ae(le(32), 0, le(32), 0, a, null)
  }
  function b() {
    return c.c(null)
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.l = b;
  c.c = a;
  return c
}();
function De(a) {
  for(var b = Array(a), c = 0;;) {
    if(c < a) {
      b[c] = 0, c += 1
    }else {
      break
    }
  }
  for(c = 1;;) {
    if(P.a(c, a)) {
      return b
    }
    var d = Yb(c);
    b[c] = b[d];
    b[d] = c;
    c += 1
  }
}
var Fe = function Ee() {
  var b = Nd.c(!0);
  "undefined" === typeof Td && (Td = {}, Td = function(b, d, e) {
    this.sa = b;
    this.Vb = d;
    this.lc = e;
    this.o = 0;
    this.e = 393216
  }, Td.Ca = !0, Td.Ba = "cljs.core.async/t12646", Td.La = function(b, d) {
    return E(d, "cljs.core.async/t12646")
  }, Td.prototype.la = function() {
    return Pa(this.sa)
  }, Td.prototype.Z = function() {
    Od(this.sa, null);
    return!0
  }, Td.prototype.B = h("lc"), Td.prototype.C = function(b, d) {
    return new Td(this.sa, this.Vb, d)
  });
  return new Td(b, Ee, null)
}, He = function Ge(b, c) {
  "undefined" === typeof Ud && (Ud = {}, Ud = function(b, c, f, g) {
    this.Ab = b;
    this.sa = c;
    this.Wb = f;
    this.mc = g;
    this.o = 0;
    this.e = 393216
  }, Ud.Ca = !0, Ud.Ba = "cljs.core.async/t12652", Ud.La = function(b, c) {
    return E(c, "cljs.core.async/t12652")
  }, Ud.prototype.la = function() {
    return Xd(this.sa)
  }, Ud.prototype.Z = function() {
    Yd(this.sa);
    return this.Ab
  }, Ud.prototype.B = h("mc"), Ud.prototype.C = function(b, c) {
    return new Ud(this.Ab, this.sa, this.Wb, c)
  });
  return new Ud(c, b, Ge, null)
};
function ee(a, b, c) {
  var d = Fe(), e = T(b), f = De(e), g = t.de.call(null, c), k = function() {
    for(var c = 0;;) {
      if(c < e) {
        var k = v(g) ? c : f[c], m = U.a(b, k), p = Lb(m) ? m.c ? m.c(0) : m.call(null, 0) : null, u = v(p) ? function() {
          var b = m.c ? m.c(1) : m.call(null, 1);
          return Wd(p, b, He(d, function(b, c, d, e, f) {
            return function() {
              return a.c ? a.c(X([null, f])) : a.call(null, X([null, f]))
            }
          }(c, b, k, m, p, d, e, f, g)))
        }() : Vd(m, He(d, function(b, c, d) {
          return function(b) {
            return a.c ? a.c(X([b, d])) : a.call(null, X([b, d]))
          }
        }(c, k, m, p, d, e, f, g)));
        if(v(u)) {
          return xe(X([Pa(u), function() {
            var a = p;
            return v(a) ? a : m
          }()]))
        }
        c += 1
      }else {
        return null
      }
    }
  }();
  return v(k) ? k : yb.d(c, t.Mb, Pb) !== Pb && (k = function() {
    var a = Xd(d);
    return v(a) ? Yd(d) : a
  }(), v(k)) ? xe(X([t.Mb.call(null, c), t.Mb])) : null
}
;var Ie = document.getElementById("world"), Je = Ie.getContext("2d"), Ke = Nd.c(null), Le = Nd.c(null);
function Me(a, b, c) {
  Je.fillStyle = c;
  Je.strokeStyle = "#cdcdcd";
  Je.fillRect(30 * a, 30 * b, 30, 30);
  return Je.strokeRect(30 * a, 30 * b, 30, 30)
}
function Ne(a) {
  var b = Ce.c(1);
  ue(function() {
    var c = function() {
      return function(a) {
        return function() {
          function b(c) {
            for(;;) {
              var d = a(c);
              if(!hc(d, t.V)) {
                return d
              }
            }
          }
          function c() {
            var a = Array(14);
            a[0] = d;
            a[1] = 1;
            return a
          }
          var d = null, d = function(a) {
            switch(arguments.length) {
              case 0:
                return c.call(this);
              case 1:
                return b.call(this, a)
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          d.l = c;
          d.c = b;
          return d
        }()
      }(function(b) {
        var c = b[1];
        if(1 === c) {
          return b[2] = null, b[1] = 2, t.V
        }
        if(2 === c) {
          return ce(b, a)
        }
        if(3 === c) {
          return c = b[2], ge(b, c)
        }
        if(4 === c) {
          var c = b[2], d;
          a: {
            for(var k = I(Ed.c(Pa(Le))), l = null, n = 0, m = 0;;) {
              if(m < n) {
                d = l.A(l, m);
                for(var p = I(Ed.c(Pa(Ke))), u = null, D = 0, A = 0;;) {
                  if(A < D) {
                    var O = u.A(u, A);
                    Me(O, d, "#eee");
                    A += 1
                  }else {
                    if(p = I(p)) {
                      u = p, Mb(u) ? (p = jb(u), A = kb(u), u = p, D = T(p), p = A) : (p = J(u), Me(p, d, "#eee"), p = M(u), u = null, D = 0), A = 0
                    }else {
                      break
                    }
                  }
                }
                m += 1
              }else {
                if(d = I(k)) {
                  k = d;
                  if(Mb(k)) {
                    l = jb(k), k = kb(k), d = l, n = T(l), l = d
                  }else {
                    d = J(k);
                    l = I(Ed.c(Pa(Ke)));
                    n = null;
                    for(p = m = 0;;) {
                      if(p < m) {
                        u = n.A(n, p), Me(u, d, "#eee"), p += 1
                      }else {
                        if(l = I(l)) {
                          n = l, Mb(n) ? (l = jb(n), p = kb(n), n = l, m = T(l), l = p) : (l = J(n), Me(l, d, "#eee"), l = M(n), n = null, m = 0), p = 0
                        }else {
                          break
                        }
                      }
                    }
                    k = M(k);
                    l = null;
                    n = 0
                  }
                  m = 0
                }else {
                  d = null;
                  break a
                }
              }
            }
            d = void 0
          }
          c = I(c);
          b[5] = d;
          b[6] = null;
          b[7] = 0;
          b[8] = 0;
          b[9] = c;
          b[2] = null;
          b[1] = 5;
          return t.V
        }
        return 5 === c ? (k = b[7], l = b[8], b[1] = v(l < k) ? 7 : 8, t.V) : 6 === c ? (b[10] = b[2], b[2] = null, b[1] = 2, t.V) : 7 === c ? (d = b[6], k = b[7], l = b[8], c = b[9], m = z.a(d, l), n = U.d(m, 0, null), m = U.d(m, 1, null), n = Me(n, m, "666"), b[11] = n, b[6] = d, b[7] = k, b[8] = l + 1, b[9] = c, b[2] = null, b[1] = 5, t.V) : 8 === c ? (c = b[12], c = b[9], c = I(c), b[12] = c, b[1] = c ? 10 : 11, t.V) : 9 === c ? (c = b[2], b[2] = c, b[1] = 6, t.V) : 10 === c ? (c = b[12], c = 
        Mb(c), b[1] = c ? 13 : 14, t.V) : 11 === c ? (b[2] = null, b[1] = 12, t.V) : 12 === c ? (c = b[2], b[2] = c, b[1] = 9, t.V) : 13 === c ? (c = b[12], d = jb(c), c = kb(c), k = T(d), b[6] = d, b[7] = k, b[8] = 0, b[9] = c, b[2] = null, b[1] = 5, t.V) : 14 === c ? (c = b[12], k = J(c), d = U.d(k, 0, null), k = U.d(k, 1, null), d = Me(d, k, "666"), c = M(c), b[13] = d, b[6] = null, b[7] = 0, b[8] = 0, b[9] = c, b[2] = null, b[1] = 5, t.V) : 15 === c ? (c = b[2], b[2] = c, b[1] = 12, t.V) : null
      })
    }(), d = function() {
      var a = c.l ? c.l() : c.call(null);
      a[4] = b;
      return a
    }();
    return be(d)
  });
  return b
}
function Oe(a) {
  Ie.width = window.innerWidth;
  Ie.height = window.innerHeight;
  Od(Ke, Ie.width / 30);
  Od(Le, Ie.height / 30);
  return Ne(a)
}
function Pe(a) {
  Oe(a);
  window.onresize = function() {
    return Oe(a)
  };
  return X([Sd(Ed.c(Pa(Ke))), Sd(Ed.c(Pa(Le)))])
}
;var Qe, Re, Se, Te;
function Ue() {
  return ba.navigator ? ba.navigator.userAgent : null
}
Te = Se = Re = Qe = !1;
var Ve;
if(Ve = Ue()) {
  var We = ba.navigator;
  Qe = 0 == Ve.indexOf("Opera");
  Re = !Qe && -1 != Ve.indexOf("MSIE");
  Se = !Qe && -1 != Ve.indexOf("WebKit");
  Te = !Qe && !Se && "Gecko" == We.product
}
var Xe = Qe, $ = Re, Ye = Te, Ze = Se, $e = ba.navigator, af = -1 != ($e && $e.platform || "").indexOf("Mac");
function bf() {
  var a = ba.document;
  return a ? a.documentMode : void 0
}
var cf;
a: {
  var df = "", ef;
  if(Xe && ba.opera) {
    var ff = ba.opera.version, df = "function" == typeof ff ? ff() : ff
  }else {
    if(Ye ? ef = /rv\:([^\);]+)(\)|;)/ : $ ? ef = /MSIE\s+([^\);]+)(\)|;)/ : Ze && (ef = /WebKit\/(\S+)/), ef) {
      var gf = ef.exec(Ue()), df = gf ? gf[1] : ""
    }
  }
  if($) {
    var hf = bf();
    if(hf > parseFloat(df)) {
      cf = String(hf);
      break a
    }
  }
  cf = df
}
var jf = {};
function kf(a) {
  var b;
  if(!(b = jf[a])) {
    b = 0;
    for(var c = String(cf).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var g = c[f] || "", k = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), n = RegExp("(\\d*)(\\D*)", "g");
      do {
        var m = l.exec(g) || ["", "", ""], p = n.exec(k) || ["", "", ""];
        if(0 == m[0].length && 0 == p[0].length) {
          break
        }
        b = ((0 == m[1].length ? 0 : parseInt(m[1], 10)) < (0 == p[1].length ? 0 : parseInt(p[1], 10)) ? -1 : (0 == m[1].length ? 0 : parseInt(m[1], 10)) > (0 == p[1].length ? 0 : parseInt(p[1], 10)) ? 1 : 0) || ((0 == m[2].length) < (0 == p[2].length) ? -1 : (0 == m[2].length) > (0 == p[2].length) ? 1 : 0) || (m[2] < p[2] ? -1 : m[2] > p[2] ? 1 : 0)
      }while(0 == b)
    }
    b = jf[a] = 0 <= b
  }
  return b
}
var lf = ba.document, mf = lf && $ ? bf() || ("CSS1Compat" == lf.compatMode ? parseInt(cf, 10) : 5) : void 0;
var nf = !$ || $ && 9 <= mf, of = $ && !kf("9");
!Ze || kf("528");
Ye && kf("1.9b") || $ && kf("8") || Xe && kf("9.5") || Ze && kf("528");
Ye && !kf("8") || $ && kf("9");
function pf() {
  0 != qf && (this.ge = Error().stack, ea(this))
}
var qf = 0;
function rf(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
rf.prototype.Ha = !1;
rf.prototype.defaultPrevented = !1;
rf.prototype.bb = !0;
rf.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
  this.bb = !1
};
var sf = {Bc:"click", Jc:"dblclick", ed:"mousedown", jd:"mouseup", hd:"mouseover", gd:"mouseout", fd:"mousemove", Jd:"selectstart", $c:"keypress", Zc:"keydown", ad:"keyup", zc:"blur", Tc:"focus", Kc:"deactivate", Uc:$ ? "focusin" : "DOMFocusIn", Vc:$ ? "focusout" : "DOMFocusOut", Ac:"change", Id:"select", Kd:"submit", Yc:"input", Ed:"propertychange", Qc:"dragstart", Lc:"drag", Nc:"dragenter", Pc:"dragover", Oc:"dragleave", Rc:"drop", Mc:"dragend", Pd:"touchstart", Od:"touchmove", Nd:"touchend", Md:"touchcancel", 
yc:"beforeunload", Gc:"contextmenu", Sc:"error", Xc:"help", bd:"load", cd:"losecapture", Fd:"readystatechange", Gd:"resize", Hd:"scroll", Rd:"unload", Wc:"hashchange", Ad:"pagehide", Bd:"pageshow", Dd:"popstate", Hc:"copy", Cd:"paste", Ic:"cut", vc:"beforecopy", wc:"beforecut", xc:"beforepaste", zd:"online", yd:"offline", dd:"message", Fc:"connect", Qd:Ze ? "webkitTransitionEnd" : Xe ? "oTransitionEnd" : "transitionend", kd:"MSGestureChange", ld:"MSGestureEnd", md:"MSGestureHold", nd:"MSGestureStart", 
od:"MSGestureTap", pd:"MSGotPointerCapture", qd:"MSInertiaStart", rd:"MSLostPointerCapture", sd:"MSPointerCancel", td:"MSPointerDown", ud:"MSPointerMove", wd:"MSPointerOver", vd:"MSPointerOut", xd:"MSPointerUp", Ld:"textinput", Dc:"compositionstart", Ec:"compositionupdate", Cc:"compositionend"};
function tf(a) {
  tf[" "](a);
  return a
}
tf[" "] = function() {
};
function uf(a, b) {
  a && this.Oa(a, b)
}
ha(uf, rf);
r = uf.prototype;
r.target = null;
r.relatedTarget = null;
r.offsetX = 0;
r.offsetY = 0;
r.clientX = 0;
r.clientY = 0;
r.screenX = 0;
r.screenY = 0;
r.button = 0;
r.keyCode = 0;
r.charCode = 0;
r.ctrlKey = !1;
r.altKey = !1;
r.shiftKey = !1;
r.metaKey = !1;
r.pc = !1;
r.xb = null;
r.Oa = function(a, b) {
  var c = this.type = a.type;
  rf.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(Ye) {
      var e;
      a: {
        try {
          tf(d.nodeName);
          e = !0;
          break a
        }catch(f) {
        }
        e = !1
      }
      e || (d = null)
    }
  }else {
    "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement)
  }
  this.relatedTarget = d;
  this.offsetX = Ze || void 0 !== a.offsetX ? a.offsetX : a.layerX;
  this.offsetY = Ze || void 0 !== a.offsetY ? a.offsetY : a.layerY;
  this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
  this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.pc = af ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.xb = a;
  a.defaultPrevented && this.preventDefault();
  delete this.Ha
};
r.preventDefault = function() {
  uf.rc.preventDefault.call(this);
  var a = this.xb;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = !1, of) {
      try {
        if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
var vf = 0;
function wf() {
}
r = wf.prototype;
r.key = 0;
r.wa = !1;
r.Ra = !1;
r.Oa = function(a, b, c, d, e, f) {
  if("function" == s(a)) {
    this.Qb = !0
  }else {
    if(a && a.handleEvent && "function" == s(a.handleEvent)) {
      this.Qb = !1
    }else {
      throw Error("Invalid listener argument");
    }
  }
  this.qa = a;
  this.Ub = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.Ga = f;
  this.Ra = !1;
  this.key = ++vf;
  this.wa = !1
};
r.handleEvent = function(a) {
  return this.Qb ? this.qa.call(this.Ga || this.src, a) : this.qa.handleEvent.call(this.qa, a)
};
var xf = {}, yf = {}, zf = {}, Af = {};
function Bf(a, b, c, d, e) {
  if("array" == s(b)) {
    for(var f = 0;f < b.length;f++) {
      Bf(a, b[f], c, d, e)
    }
    return null
  }
  a: {
    if(!b) {
      throw Error("Invalid event type");
    }
    d = !!d;
    var g = yf;
    b in g || (g[b] = {da:0, U:0});
    g = g[b];
    d in g || (g[d] = {da:0, U:0}, g.da++);
    var g = g[d], f = ea(a), k;
    g.U++;
    if(g[f]) {
      k = g[f];
      for(var l = 0;l < k.length;l++) {
        if(g = k[l], g.qa == c && g.Ga == e) {
          if(g.wa) {
            break
          }
          k[l].Ra = !1;
          a = k[l];
          break a
        }
      }
    }else {
      k = g[f] = [], g.da++
    }
    l = Cf();
    g = new wf;
    g.Oa(c, l, a, b, d, e);
    g.Ra = !1;
    l.src = a;
    l.qa = g;
    k.push(g);
    zf[f] || (zf[f] = []);
    zf[f].push(g);
    a.addEventListener ? a != ba && a.Ob || a.addEventListener(b, l, d) : a.attachEvent(b in Af ? Af[b] : Af[b] = "on" + b, l);
    a = g
  }
  b = a.key;
  xf[b] = a;
  return b
}
function Cf() {
  var a = Df, b = nf ? function(c) {
    return a.call(b.src, b.qa, c)
  } : function(c) {
    c = a.call(b.src, b.qa, c);
    if(!c) {
      return c
    }
  };
  return b
}
function Ef(a, b, c, d, e) {
  if("array" == s(b)) {
    for(var f = 0;f < b.length;f++) {
      Ef(a, b[f], c, d, e)
    }
  }else {
    d = !!d;
    a: {
      f = yf;
      if(b in f && (f = f[b], d in f && (f = f[d], a = ea(a), f[a]))) {
        a = f[a];
        break a
      }
      a = null
    }
    if(a) {
      for(f = 0;f < a.length;f++) {
        if(a[f].qa == c && a[f].capture == d && a[f].Ga == e) {
          Ff(a[f].key);
          break
        }
      }
    }
  }
}
function Ff(a) {
  var b = xf[a];
  if(b && !b.wa) {
    var c = b.src, d = b.type, e = b.Ub, f = b.capture;
    c.removeEventListener ? c != ba && c.Ob || c.removeEventListener(d, e, f) : c.detachEvent && c.detachEvent(d in Af ? Af[d] : Af[d] = "on" + d, e);
    c = ea(c);
    if(zf[c]) {
      var e = zf[c], g = ka(e, b);
      0 <= g && ja.splice.call(e, g, 1);
      0 == e.length && delete zf[c]
    }
    b.wa = !0;
    if(b = yf[d][f][c]) {
      b.Sb = !0, Gf(d, f, c, b)
    }
    delete xf[a]
  }
}
function Gf(a, b, c, d) {
  if(!d.$a && d.Sb) {
    for(var e = 0, f = 0;e < d.length;e++) {
      d[e].wa ? d[e].Ub.src = null : (e != f && (d[f] = d[e]), f++)
    }
    d.length = f;
    d.Sb = !1;
    0 == f && (delete yf[a][b][c], yf[a][b].da--, 0 == yf[a][b].da && (delete yf[a][b], yf[a].da--), 0 == yf[a].da && delete yf[a])
  }
}
function Hf(a, b, c, d, e) {
  var f = 1;
  b = ea(b);
  if(a[b]) {
    var g = --a.U, k = a[b];
    k.$a ? k.$a++ : k.$a = 1;
    try {
      for(var l = k.length, n = 0;n < l;n++) {
        var m = k[n];
        m && !m.wa && (f &= !1 !== If(m, e))
      }
    }finally {
      a.U = Math.max(g, a.U), k.$a--, Gf(c, d, b, k)
    }
  }
  return Boolean(f)
}
function If(a, b) {
  a.Ra && Ff(a.key);
  return a.handleEvent(b)
}
function Df(a, b) {
  if(a.wa) {
    return!0
  }
  var c = a.type, d = yf;
  if(!(c in d)) {
    return!0
  }
  var d = d[c], e, f;
  if(!nf) {
    var g;
    if(!(g = b)) {
      a: {
        g = ["window", "event"];
        for(var k = ba;e = g.shift();) {
          if(null != k[e]) {
            k = k[e]
          }else {
            g = null;
            break a
          }
        }
        g = k
      }
    }
    e = g;
    g = !0 in d;
    k = !1 in d;
    if(g) {
      if(0 > e.keyCode || void 0 != e.returnValue) {
        return!0
      }
      a: {
        var l = !1;
        if(0 == e.keyCode) {
          try {
            e.keyCode = -1;
            break a
          }catch(n) {
            l = !0
          }
        }
        if(l || void 0 == e.returnValue) {
          e.returnValue = !0
        }
      }
    }
    l = new uf;
    l.Oa(e, this);
    e = !0;
    try {
      if(g) {
        for(var m = [], p = l.currentTarget;p;p = p.parentNode) {
          m.push(p)
        }
        f = d[!0];
        f.U = f.da;
        for(var u = m.length - 1;!l.Ha && 0 <= u && f.U;u--) {
          l.currentTarget = m[u], e &= Hf(f, m[u], c, !0, l)
        }
        if(k) {
          for(f = d[!1], f.U = f.da, u = 0;!l.Ha && u < m.length && f.U;u++) {
            l.currentTarget = m[u], e &= Hf(f, m[u], c, !1, l)
          }
        }
      }else {
        e = If(a, l)
      }
    }finally {
      m && (m.length = 0)
    }
    return e
  }
  c = new uf(b, this);
  return e = If(a, c)
}
;function Jf() {
  pf.call(this)
}
ha(Jf, pf);
r = Jf.prototype;
r.Ob = !0;
r.Tb = null;
r.addEventListener = function(a, b, c, d) {
  Bf(this, a, b, c, d)
};
r.removeEventListener = function(a, b, c, d) {
  Ef(this, a, b, c, d)
};
r.dispatchEvent = function(a) {
  var b = a.type || a, c = yf;
  if(b in c) {
    if(ca(a)) {
      a = new rf(a, this)
    }else {
      if(a instanceof rf) {
        a.target = a.target || this
      }else {
        var d = a;
        a = new rf(b, this);
        oa(a, d)
      }
    }
    var d = 1, e, c = c[b], b = !0 in c, f;
    if(b) {
      e = [];
      for(f = this;f;f = f.Tb) {
        e.push(f)
      }
      f = c[!0];
      f.U = f.da;
      for(var g = e.length - 1;!a.Ha && 0 <= g && f.U;g--) {
        a.currentTarget = e[g], d &= Hf(f, e[g], a.type, !0, a) && !1 != a.bb
      }
    }
    if(!1 in c) {
      if(f = c[!1], f.U = f.da, b) {
        for(g = 0;!a.Ha && g < e.length && f.U;g++) {
          a.currentTarget = e[g], d &= Hf(f, e[g], a.type, !1, a) && !1 != a.bb
        }
      }else {
        for(e = this;!a.Ha && e && f.U;e = e.Tb) {
          a.currentTarget = e, d &= Hf(f, e, a.type, !1, a) && !1 != a.bb
        }
      }
    }
    a = Boolean(d)
  }else {
    a = !0
  }
  return a
};
function Kf(a, b, c, d, e) {
  if(!($ || Ze && kf("525"))) {
    return!0
  }
  if(af && e) {
    return Lf(a)
  }
  if(e && !d || !c && (17 == b || 18 == b || af && 91 == b)) {
    return!1
  }
  if(Ze && d && c) {
    switch(a) {
      case 220:
      ;
      case 219:
      ;
      case 221:
      ;
      case 192:
      ;
      case 186:
      ;
      case 189:
      ;
      case 187:
      ;
      case 188:
      ;
      case 190:
      ;
      case 191:
      ;
      case 192:
      ;
      case 222:
        return!1
    }
  }
  if($ && d && b == a) {
    return!1
  }
  switch(a) {
    case 13:
      return!($ && $ && 9 <= mf);
    case 27:
      return!Ze
  }
  return Lf(a)
}
function Lf(a) {
  if(48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || Ze && 0 == a) {
    return!0
  }
  switch(a) {
    case 32:
    ;
    case 63:
    ;
    case 107:
    ;
    case 109:
    ;
    case 110:
    ;
    case 111:
    ;
    case 186:
    ;
    case 59:
    ;
    case 189:
    ;
    case 187:
    ;
    case 61:
    ;
    case 188:
    ;
    case 190:
    ;
    case 191:
    ;
    case 192:
    ;
    case 222:
    ;
    case 219:
    ;
    case 220:
    ;
    case 221:
      return!0;
    default:
      return!1
  }
}
function Mf(a) {
  switch(a) {
    case 61:
      return 187;
    case 59:
      return 186;
    case 224:
      return 91;
    case 0:
      return 224;
    default:
      return a
  }
}
;function Nf(a, b) {
  pf.call(this);
  a && (this.Za && this.detach(), this.Ma = a, this.Ya = Bf(this.Ma, "keypress", this, b), this.yb = Bf(this.Ma, "keydown", this.ic, b, this), this.Za = Bf(this.Ma, "keyup", this.jc, b, this))
}
ha(Nf, Jf);
r = Nf.prototype;
r.Ma = null;
r.Ya = null;
r.yb = null;
r.Za = null;
r.X = -1;
r.pa = -1;
r.cb = !1;
var Of = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, Pf = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, Qf = $ || 
Ze && kf("525"), Rf = af && Ye;
Nf.prototype.ic = function(a) {
  Ze && (17 == this.X && !a.ctrlKey || 18 == this.X && !a.altKey || af && 91 == this.X && !a.metaKey) && (this.pa = this.X = -1);
  -1 == this.X && (a.ctrlKey && 17 != a.keyCode ? this.X = 17 : a.altKey && 18 != a.keyCode ? this.X = 18 : a.metaKey && 91 != a.keyCode && (this.X = 91));
  Qf && !Kf(a.keyCode, this.X, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.pa = Ye ? Mf(a.keyCode) : a.keyCode, Rf && (this.cb = a.altKey))
};
Nf.prototype.jc = function(a) {
  this.pa = this.X = -1;
  this.cb = a.altKey
};
Nf.prototype.handleEvent = function(a) {
  var b = a.xb, c, d, e = b.altKey;
  $ && "keypress" == a.type ? (c = this.pa, d = 13 != c && 27 != c ? b.keyCode : 0) : Ze && "keypress" == a.type ? (c = this.pa, d = 0 <= b.charCode && 63232 > b.charCode && Lf(c) ? b.charCode : 0) : Xe ? (c = this.pa, d = Lf(c) ? b.keyCode : 0) : (c = b.keyCode || this.pa, d = b.charCode || 0, Rf && (e = this.cb), af && (63 == d && 224 == c) && (c = 191));
  var f = c, g = b.keyIdentifier;
  c ? 63232 <= c && c in Of ? f = Of[c] : 25 == c && a.shiftKey && (f = 9) : g && g in Pf && (f = Pf[g]);
  a = f == this.X;
  this.X = f;
  b = new Sf(f, d, a, b);
  b.altKey = e;
  this.dispatchEvent(b)
};
Nf.prototype.detach = function() {
  this.Ya && (Ff(this.Ya), Ff(this.yb), Ff(this.Za), this.Za = this.yb = this.Ya = null);
  this.Ma = null;
  this.pa = this.X = -1
};
function Sf(a, b, c, d) {
  d && this.Oa(d, void 0);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
ha(Sf, uf);
function Tf(a) {
  if(a ? a.wb : a) {
    return a.wb(a)
  }
  var b;
  b = Tf[s(null == a ? null : a)];
  if(!b && (b = Tf._, !b)) {
    throw x("EventType.event-types", a);
  }
  return b.call(null, a)
}
Element.prototype.wb = function() {
  return Bc(id, Ac.a(function(a) {
    var b = U.d(a, 0, null);
    a = U.d(a, 1, null);
    return X([jc.c(b.toLowerCase()), a])
  }, Cd.g(N([Rd.c(sf)], 0))))
};
Jf.prototype.wb = function() {
  return Bc(id, Ac.a(function(a) {
    var b = U.d(a, 0, null);
    a = U.d(a, 1, null);
    return X([jc.c(b.toLowerCase()), a])
  }, Cd.g(N([Rd.c(sf)], 0))))
};
var Uf = function() {
  function a(a, b, c, g) {
    return Bf(a, yb.d(Tf(a), b, b), c, g)
  }
  function b(a, b, f) {
    return c.m(a, b, f, !1)
  }
  var c = null, c = function(c, e, f, g) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 4:
        return a.call(this, c, e, f, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.m = a;
  return c
}();
var Vf = new gc(null, "recur", "recur");
var Wf = new Nf(document), Xf = Ce.l();
function Yf(a) {
  var b = a.keyCode;
  a = P.a(b, 38) ? 38 : P.a(b, 39) ? 39 : P.a(b, 40) ? 40 : P.a(b, 37) ? 37 : null;
  if(v(a)) {
    var c = Ce.c(1);
    ue(function() {
      var a = function() {
        return function(a) {
          return function() {
            function b(c) {
              for(;;) {
                var d = a(c);
                if(!hc(d, Vf)) {
                  return d
                }
              }
            }
            function c() {
              var a = Array(5);
              a[0] = d;
              a[1] = 1;
              return a
            }
            var d = null, d = function(a) {
              switch(arguments.length) {
                case 0:
                  return c.call(this);
                case 1:
                  return b.call(this, a)
              }
              throw Error("Invalid arity: " + arguments.length);
            };
            d.l = c;
            d.c = b;
            return d
          }()
        }(function(a) {
          var c = a[1];
          return 2 === c ? ge(a, a[2]) : 1 === c ? de(a, 2, Xf, b) : null
        })
      }(), e = function() {
        var b = a.l ? a.l() : a.call(null);
        b[4] = c;
        return b
      }();
      return be(e)
    });
    return c
  }
  return null
}
function Zf(a, b) {
  var c = U.d(b, 0, null), d = U.d(b, 1, null), e = Ce.c(1);
  ue(function() {
    var b = function() {
      return function(a) {
        return function() {
          function b(c) {
            for(;;) {
              var d = a(c);
              if(!hc(d, Vf)) {
                return d
              }
            }
          }
          function c() {
            var a = Array(10);
            a[0] = d;
            a[1] = 1;
            return a
          }
          var d = null, d = function(a) {
            switch(arguments.length) {
              case 0:
                return c.call(this);
              case 1:
                return b.call(this, a)
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          d.l = c;
          d.c = b;
          return d
        }()
      }(function(b) {
        var e = b[1];
        if(9 === e) {
          return e = b, e[2] = b[2], e[1] = 4, Vf
        }
        if(8 === e) {
          var f = b[5], g = b[6];
          b[5] = f;
          b[6] = g - 1;
          b[2] = null;
          b[1] = 3;
          return Vf
        }
        return 7 === e ? (f = b[5], g = b[6], e = b[7], f = Sc.g(N([g, f], 0)), g = U.d(f, 0, null), f = U.d(f, 1, null), f = P.a(e, 38) ? X([g, f - 1]) : P.a(e, 39) ? X([g + 1, f]) : P.a(e, 40) ? X([g, f + 1]) : P.a(e, 37) ? X([g - 1, f]) : null, e = U.d(f, 0, null), f = U.d(f, 1, null), b[5] = f, b[6] = e, b[2] = null, b[1] = 3, Vf) : 6 === e ? (f = b[2], e = U.d(f, 0, null), f = U.d(f, 1, null), f = P.a(f, Xf), b[7] = e, b[1] = f ? 7 : 8, Vf) : 5 === e ? (e = b[2], f = Sc.g(N([a, Xf], 0)), b[8] = 
        e, fe(b, 6, f)) : 4 === e ? (e = b[2], ge(b, e)) : 3 === e ? (f = b[5], g = b[6], e = Sc.g(N([g, f], 0)), e = Sc.g(N([e], 0)), de(b, 5, a, e)) : 2 === e ? (e = b[2], g = c, f = d, b[5] = f, b[9] = e, b[6] = g, b[2] = null, b[1] = 3, Vf) : 1 === e ? (e = Sc.g(N([c, d], 0)), e = Sc.g(N([e], 0)), de(b, 2, a, e)) : null
      })
    }(), g = function() {
      var a = b.l ? b.l() : b.call(null);
      a[4] = e;
      return a
    }();
    return be(g)
  });
  return e
}
function $f() {
  var a = Ce.l();
  Pe(a);
  Uf.d(Wf, "key", Yf);
  return Zf(a, Pe(a))
}
var ag = ["snake", "core", "init"], bg = ba;
ag[0] in bg || !bg.execScript || bg.execScript("var " + ag[0]);
for(var cg;ag.length && (cg = ag.shift());) {
  var dg;
  if(dg = !ag.length) {
    dg = void 0 !== $f
  }
  dg ? bg[cg] = $f : bg = bg[cg] ? bg[cg] : bg[cg] = {}
}
;