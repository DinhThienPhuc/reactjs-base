import { c as Ae, g as fn } from "./_commonjsHelpers-BosuxZz1.js";

var Tn = Object.create,
  Ye = Object.defineProperty,
  vn = Object.getOwnPropertyDescriptor,
  hn = Object.getOwnPropertyNames,
  gn = Object.getPrototypeOf,
  bn = Object.prototype.hasOwnProperty,
  a = (r, t) => Ye(r, "name", { value: t, configurable: !0 }),
  f = (r, t) => () => (t || r((t = { exports: {} }).exports, t), t.exports),
  Jn = (r, t, n, o) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let i of hn(t))
        !bn.call(r, i) &&
          i !== n &&
          Ye(r, i, {
            get: () => t[i],
            enumerable: !(o = vn(t, i)) || o.enumerable,
          });
    return r;
  },
  It = (r, t, n) => (
    (n = r != null ? Tn(gn(r)) : {}),
    Jn(Ye(n, "default", { value: r, enumerable: !0 }), r)
  ),
  Rt = f((r, t) => {
    var n =
      typeof global == "object" && global && global.Object === Object && global;
    t.exports = n;
  }),
  Z = f((r, t) => {
    var n = Rt(),
      o = typeof self == "object" && self && self.Object === Object && self,
      i = n || o || Function("return this")();
    t.exports = i;
  }),
  Re = f((r, t) => {
    var n = Z(),
      o = n.Symbol;
    t.exports = o;
  }),
  xn = f((r, t) => {
    var n = Re(),
      o = Object.prototype,
      i = o.hasOwnProperty,
      p = o.toString,
      l = n ? n.toStringTag : void 0;
    function u(y) {
      var m = i.call(y, l),
        T = y[l];
      try {
        y[l] = void 0;
        var h = !0;
      } catch {}
      var x = p.call(y);
      return h && (m ? (y[l] = T) : delete y[l]), x;
    }
    a(u, "getRawTag"), (t.exports = u);
  }),
  wn = f((r, t) => {
    var n = Object.prototype,
      o = n.toString;
    function i(p) {
      return o.call(p);
    }
    a(i, "objectToString"), (t.exports = i);
  }),
  ge = f((r, t) => {
    var n = Re(),
      o = xn(),
      i = wn(),
      p = "[object Null]",
      l = "[object Undefined]",
      u = n ? n.toStringTag : void 0;
    function y(m) {
      return m == null
        ? m === void 0
          ? l
          : p
        : u && u in Object(m)
          ? o(m)
          : i(m);
    }
    a(y, "baseGetTag"), (t.exports = y);
  }),
  ze = f((r, t) => {
    function n(o) {
      var i = typeof o;
      return o != null && (i == "object" || i == "function");
    }
    a(n, "isObject"), (t.exports = n);
  }),
  Ft = f((r, t) => {
    var n = ge(),
      o = ze(),
      i = "[object AsyncFunction]",
      p = "[object Function]",
      l = "[object GeneratorFunction]",
      u = "[object Proxy]";
    function y(m) {
      if (!o(m)) return !1;
      var T = n(m);
      return T == p || T == l || T == i || T == u;
    }
    a(y, "isFunction"), (t.exports = y);
  }),
  Pn = f((r, t) => {
    var n = Z(),
      o = n["__core-js_shared__"];
    t.exports = o;
  }),
  On = f((r, t) => {
    var n = Pn(),
      o = (function () {
        var p = /[^.]+$/.exec((n && n.keys && n.keys.IE_PROTO) || "");
        return p ? "Symbol(src)_1." + p : "";
      })();
    function i(p) {
      return !!o && o in p;
    }
    a(i, "isMasked"), (t.exports = i);
  }),
  Lt = f((r, t) => {
    var n = Function.prototype,
      o = n.toString;
    function i(p) {
      if (p != null) {
        try {
          return o.call(p);
        } catch {}
        try {
          return p + "";
        } catch {}
      }
      return "";
    }
    a(i, "toSource"), (t.exports = i);
  }),
  Nn = f((r, t) => {
    var n = Ft(),
      o = On(),
      i = ze(),
      p = Lt(),
      l = /[\\^$.*+?()[\]{}|]/g,
      u = /^\[object .+?Constructor\]$/,
      y = Function.prototype,
      m = Object.prototype,
      T = y.toString,
      h = m.hasOwnProperty,
      x = RegExp(
        "^" +
          T.call(h)
            .replace(l, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?",
            ) +
          "$",
      );
    function g(w) {
      if (!i(w) || o(w)) return !1;
      var _ = n(w) ? x : u;
      return _.test(p(w));
    }
    a(g, "baseIsNative"), (t.exports = g);
  }),
  _n = f((r, t) => {
    function n(o, i) {
      return o == null ? void 0 : o[i];
    }
    a(n, "getValue"), (t.exports = n);
  }),
  ie = f((r, t) => {
    var n = Nn(),
      o = _n();
    function i(p, l) {
      var u = o(p, l);
      return n(u) ? u : void 0;
    }
    a(i, "getNative"), (t.exports = i);
  }),
  Sn = f((r, t) => {
    var n = ie(),
      o = (function () {
        try {
          var i = n(Object, "defineProperty");
          return i({}, "", {}), i;
        } catch {}
      })();
    t.exports = o;
  }),
  jn = f((r, t) => {
    var n = Sn();
    function o(i, p, l) {
      p == "__proto__" && n
        ? n(i, p, { configurable: !0, enumerable: !0, value: l, writable: !0 })
        : (i[p] = l);
    }
    a(o, "baseAssignValue"), (t.exports = o);
  }),
  En = f((r, t) => {
    function n(o) {
      return function (i, p, l) {
        for (var u = -1, y = Object(i), m = l(i), T = m.length; T--; ) {
          var h = m[o ? T : ++u];
          if (p(y[h], h, y) === !1) break;
        }
        return i;
      };
    }
    a(n, "createBaseFor"), (t.exports = n);
  }),
  kn = f((r, t) => {
    var n = En(),
      o = n();
    t.exports = o;
  }),
  An = f((r, t) => {
    function n(o, i) {
      for (var p = -1, l = Array(o); ++p < o; ) l[p] = i(p);
      return l;
    }
    a(n, "baseTimes"), (t.exports = n);
  }),
  be = f((r, t) => {
    function n(o) {
      return o != null && typeof o == "object";
    }
    a(n, "isObjectLike"), (t.exports = n);
  }),
  In = f((r, t) => {
    var n = ge(),
      o = be(),
      i = "[object Arguments]";
    function p(l) {
      return o(l) && n(l) == i;
    }
    a(p, "baseIsArguments"), (t.exports = p);
  }),
  Ut = f((r, t) => {
    var n = In(),
      o = be(),
      i = Object.prototype,
      p = i.hasOwnProperty,
      l = i.propertyIsEnumerable,
      u = n(
        (function () {
          return arguments;
        })(),
      )
        ? n
        : function (y) {
            return o(y) && p.call(y, "callee") && !l.call(y, "callee");
          };
    t.exports = u;
  }),
  ne = f((r, t) => {
    var n = Array.isArray;
    t.exports = n;
  }),
  Rn = f((r, t) => {
    function n() {
      return !1;
    }
    a(n, "stubFalse"), (t.exports = n);
  }),
  Vt = f((r, t) => {
    var n = Z(),
      o = Rn(),
      i = typeof r == "object" && r && !r.nodeType && r,
      p = i && typeof t == "object" && t && !t.nodeType && t,
      l = p && p.exports === i,
      u = l ? n.Buffer : void 0,
      y = u ? u.isBuffer : void 0,
      m = y || o;
    t.exports = m;
  }),
  $t = f((r, t) => {
    var n = 9007199254740991,
      o = /^(?:0|[1-9]\d*)$/;
    function i(p, l) {
      var u = typeof p;
      return (
        (l = l ?? n),
        !!l &&
          (u == "number" || (u != "symbol" && o.test(p))) &&
          p > -1 &&
          p % 1 == 0 &&
          p < l
      );
    }
    a(i, "isIndex"), (t.exports = i);
  }),
  We = f((r, t) => {
    var n = 9007199254740991;
    function o(i) {
      return typeof i == "number" && i > -1 && i % 1 == 0 && i <= n;
    }
    a(o, "isLength"), (t.exports = o);
  }),
  Fn = f((r, t) => {
    var n = ge(),
      o = We(),
      i = be(),
      p = "[object Arguments]",
      l = "[object Array]",
      u = "[object Boolean]",
      y = "[object Date]",
      m = "[object Error]",
      T = "[object Function]",
      h = "[object Map]",
      x = "[object Number]",
      g = "[object Object]",
      w = "[object RegExp]",
      _ = "[object Set]",
      L = "[object String]",
      R = "[object WeakMap]",
      P = "[object ArrayBuffer]",
      A = "[object DataView]",
      j = "[object Float32Array]",
      D = "[object Float64Array]",
      I = "[object Int8Array]",
      V = "[object Int16Array]",
      E = "[object Int32Array]",
      k = "[object Uint8Array]",
      N = "[object Uint8ClampedArray]",
      K = "[object Uint16Array]",
      G = "[object Uint32Array]",
      S = {};
    (S[j] = S[D] = S[I] = S[V] = S[E] = S[k] = S[N] = S[K] = S[G] = !0),
      (S[p] =
        S[l] =
        S[P] =
        S[u] =
        S[A] =
        S[y] =
        S[m] =
        S[T] =
        S[h] =
        S[x] =
        S[g] =
        S[w] =
        S[_] =
        S[L] =
        S[R] =
          !1);
    function Y(M) {
      return i(M) && o(M.length) && !!S[n(M)];
    }
    a(Y, "baseIsTypedArray"), (t.exports = Y);
  }),
  Ln = f((r, t) => {
    function n(o) {
      return function (i) {
        return o(i);
      };
    }
    a(n, "baseUnary"), (t.exports = n);
  }),
  Un = f((r, t) => {
    var n = Rt(),
      o = typeof r == "object" && r && !r.nodeType && r,
      i = o && typeof t == "object" && t && !t.nodeType && t,
      p = i && i.exports === o,
      l = p && n.process,
      u = (function () {
        try {
          var y = i && i.require && i.require("util").types;
          return y || (l && l.binding && l.binding("util"));
        } catch {}
      })();
    t.exports = u;
  }),
  Dt = f((r, t) => {
    var n = Fn(),
      o = Ln(),
      i = Un(),
      p = i && i.isTypedArray,
      l = p ? o(p) : n;
    t.exports = l;
  }),
  Vn = f((r, t) => {
    var n = An(),
      o = Ut(),
      i = ne(),
      p = Vt(),
      l = $t(),
      u = Dt(),
      y = Object.prototype,
      m = y.hasOwnProperty;
    function T(h, x) {
      var g = i(h),
        w = !g && o(h),
        _ = !g && !w && p(h),
        L = !g && !w && !_ && u(h),
        R = g || w || _ || L,
        P = R ? n(h.length, String) : [],
        A = P.length;
      for (var j in h)
        (x || m.call(h, j)) &&
          !(
            R &&
            (j == "length" ||
              (_ && (j == "offset" || j == "parent")) ||
              (L &&
                (j == "buffer" || j == "byteLength" || j == "byteOffset")) ||
              l(j, A))
          ) &&
          P.push(j);
      return P;
    }
    a(T, "arrayLikeKeys"), (t.exports = T);
  }),
  $n = f((r, t) => {
    var n = Object.prototype;
    function o(i) {
      var p = i && i.constructor,
        l = (typeof p == "function" && p.prototype) || n;
      return i === l;
    }
    a(o, "isPrototype"), (t.exports = o);
  }),
  Dn = f((r, t) => {
    function n(o, i) {
      return function (p) {
        return o(i(p));
      };
    }
    a(n, "overArg"), (t.exports = n);
  }),
  Kn = f((r, t) => {
    var n = Dn(),
      o = n(Object.keys, Object);
    t.exports = o;
  }),
  Cn = f((r, t) => {
    var n = $n(),
      o = Kn(),
      i = Object.prototype,
      p = i.hasOwnProperty;
    function l(u) {
      if (!n(u)) return o(u);
      var y = [];
      for (var m in Object(u)) p.call(u, m) && m != "constructor" && y.push(m);
      return y;
    }
    a(l, "baseKeys"), (t.exports = l);
  }),
  Mn = f((r, t) => {
    var n = Ft(),
      o = We();
    function i(p) {
      return p != null && o(p.length) && !n(p);
    }
    a(i, "isArrayLike"), (t.exports = i);
  }),
  He = f((r, t) => {
    var n = Vn(),
      o = Cn(),
      i = Mn();
    function p(l) {
      return i(l) ? n(l) : o(l);
    }
    a(p, "keys"), (t.exports = p);
  }),
  qn = f((r, t) => {
    var n = kn(),
      o = He();
    function i(p, l) {
      return p && n(p, l, o);
    }
    a(i, "baseForOwn"), (t.exports = i);
  }),
  Bn = f((r, t) => {
    function n() {
      (this.__data__ = []), (this.size = 0);
    }
    a(n, "listCacheClear"), (t.exports = n);
  }),
  Kt = f((r, t) => {
    function n(o, i) {
      return o === i || (o !== o && i !== i);
    }
    a(n, "eq"), (t.exports = n);
  }),
  Fe = f((r, t) => {
    var n = Kt();
    function o(i, p) {
      for (var l = i.length; l--; ) if (n(i[l][0], p)) return l;
      return -1;
    }
    a(o, "assocIndexOf"), (t.exports = o);
  }),
  Gn = f((r, t) => {
    var n = Fe(),
      o = Array.prototype,
      i = o.splice;
    function p(l) {
      var u = this.__data__,
        y = n(u, l);
      if (y < 0) return !1;
      var m = u.length - 1;
      return y == m ? u.pop() : i.call(u, y, 1), --this.size, !0;
    }
    a(p, "listCacheDelete"), (t.exports = p);
  }),
  Yn = f((r, t) => {
    var n = Fe();
    function o(i) {
      var p = this.__data__,
        l = n(p, i);
      return l < 0 ? void 0 : p[l][1];
    }
    a(o, "listCacheGet"), (t.exports = o);
  }),
  zn = f((r, t) => {
    var n = Fe();
    function o(i) {
      return n(this.__data__, i) > -1;
    }
    a(o, "listCacheHas"), (t.exports = o);
  }),
  Wn = f((r, t) => {
    var n = Fe();
    function o(i, p) {
      var l = this.__data__,
        u = n(l, i);
      return u < 0 ? (++this.size, l.push([i, p])) : (l[u][1] = p), this;
    }
    a(o, "listCacheSet"), (t.exports = o);
  }),
  Le = f((r, t) => {
    var n = Bn(),
      o = Gn(),
      i = Yn(),
      p = zn(),
      l = Wn();
    function u(y) {
      var m = -1,
        T = y == null ? 0 : y.length;
      for (this.clear(); ++m < T; ) {
        var h = y[m];
        this.set(h[0], h[1]);
      }
    }
    a(u, "ListCache"),
      (u.prototype.clear = n),
      (u.prototype.delete = o),
      (u.prototype.get = i),
      (u.prototype.has = p),
      (u.prototype.set = l),
      (t.exports = u);
  }),
  Hn = f((r, t) => {
    var n = Le();
    function o() {
      (this.__data__ = new n()), (this.size = 0);
    }
    a(o, "stackClear"), (t.exports = o);
  }),
  Xn = f((r, t) => {
    function n(o) {
      var i = this.__data__,
        p = i.delete(o);
      return (this.size = i.size), p;
    }
    a(n, "stackDelete"), (t.exports = n);
  }),
  Qn = f((r, t) => {
    function n(o) {
      return this.__data__.get(o);
    }
    a(n, "stackGet"), (t.exports = n);
  }),
  Zn = f((r, t) => {
    function n(o) {
      return this.__data__.has(o);
    }
    a(n, "stackHas"), (t.exports = n);
  }),
  Xe = f((r, t) => {
    var n = ie(),
      o = Z(),
      i = n(o, "Map");
    t.exports = i;
  }),
  Ue = f((r, t) => {
    var n = ie(),
      o = n(Object, "create");
    t.exports = o;
  }),
  ea = f((r, t) => {
    var n = Ue();
    function o() {
      (this.__data__ = n ? n(null) : {}), (this.size = 0);
    }
    a(o, "hashClear"), (t.exports = o);
  }),
  ta = f((r, t) => {
    function n(o) {
      var i = this.has(o) && delete this.__data__[o];
      return (this.size -= i ? 1 : 0), i;
    }
    a(n, "hashDelete"), (t.exports = n);
  }),
  ra = f((r, t) => {
    var n = Ue(),
      o = "__lodash_hash_undefined__",
      i = Object.prototype,
      p = i.hasOwnProperty;
    function l(u) {
      var y = this.__data__;
      if (n) {
        var m = y[u];
        return m === o ? void 0 : m;
      }
      return p.call(y, u) ? y[u] : void 0;
    }
    a(l, "hashGet"), (t.exports = l);
  }),
  na = f((r, t) => {
    var n = Ue(),
      o = Object.prototype,
      i = o.hasOwnProperty;
    function p(l) {
      var u = this.__data__;
      return n ? u[l] !== void 0 : i.call(u, l);
    }
    a(p, "hashHas"), (t.exports = p);
  }),
  aa = f((r, t) => {
    var n = Ue(),
      o = "__lodash_hash_undefined__";
    function i(p, l) {
      var u = this.__data__;
      return (
        (this.size += this.has(p) ? 0 : 1),
        (u[p] = n && l === void 0 ? o : l),
        this
      );
    }
    a(i, "hashSet"), (t.exports = i);
  }),
  oa = f((r, t) => {
    var n = ea(),
      o = ta(),
      i = ra(),
      p = na(),
      l = aa();
    function u(y) {
      var m = -1,
        T = y == null ? 0 : y.length;
      for (this.clear(); ++m < T; ) {
        var h = y[m];
        this.set(h[0], h[1]);
      }
    }
    a(u, "Hash"),
      (u.prototype.clear = n),
      (u.prototype.delete = o),
      (u.prototype.get = i),
      (u.prototype.has = p),
      (u.prototype.set = l),
      (t.exports = u);
  }),
  sa = f((r, t) => {
    var n = oa(),
      o = Le(),
      i = Xe();
    function p() {
      (this.size = 0),
        (this.__data__ = {
          hash: new n(),
          map: new (i || o)(),
          string: new n(),
        });
    }
    a(p, "mapCacheClear"), (t.exports = p);
  }),
  ia = f((r, t) => {
    function n(o) {
      var i = typeof o;
      return i == "string" || i == "number" || i == "symbol" || i == "boolean"
        ? o !== "__proto__"
        : o === null;
    }
    a(n, "isKeyable"), (t.exports = n);
  }),
  Ve = f((r, t) => {
    var n = ia();
    function o(i, p) {
      var l = i.__data__;
      return n(p) ? l[typeof p == "string" ? "string" : "hash"] : l.map;
    }
    a(o, "getMapData"), (t.exports = o);
  }),
  pa = f((r, t) => {
    var n = Ve();
    function o(i) {
      var p = n(this, i).delete(i);
      return (this.size -= p ? 1 : 0), p;
    }
    a(o, "mapCacheDelete"), (t.exports = o);
  }),
  ca = f((r, t) => {
    var n = Ve();
    function o(i) {
      return n(this, i).get(i);
    }
    a(o, "mapCacheGet"), (t.exports = o);
  }),
  la = f((r, t) => {
    var n = Ve();
    function o(i) {
      return n(this, i).has(i);
    }
    a(o, "mapCacheHas"), (t.exports = o);
  }),
  ua = f((r, t) => {
    var n = Ve();
    function o(i, p) {
      var l = n(this, i),
        u = l.size;
      return l.set(i, p), (this.size += l.size == u ? 0 : 1), this;
    }
    a(o, "mapCacheSet"), (t.exports = o);
  }),
  Qe = f((r, t) => {
    var n = sa(),
      o = pa(),
      i = ca(),
      p = la(),
      l = ua();
    function u(y) {
      var m = -1,
        T = y == null ? 0 : y.length;
      for (this.clear(); ++m < T; ) {
        var h = y[m];
        this.set(h[0], h[1]);
      }
    }
    a(u, "MapCache"),
      (u.prototype.clear = n),
      (u.prototype.delete = o),
      (u.prototype.get = i),
      (u.prototype.has = p),
      (u.prototype.set = l),
      (t.exports = u);
  }),
  ya = f((r, t) => {
    var n = Le(),
      o = Xe(),
      i = Qe(),
      p = 200;
    function l(u, y) {
      var m = this.__data__;
      if (m instanceof n) {
        var T = m.__data__;
        if (!o || T.length < p - 1)
          return T.push([u, y]), (this.size = ++m.size), this;
        m = this.__data__ = new i(T);
      }
      return m.set(u, y), (this.size = m.size), this;
    }
    a(l, "stackSet"), (t.exports = l);
  }),
  Ct = f((r, t) => {
    var n = Le(),
      o = Hn(),
      i = Xn(),
      p = Qn(),
      l = Zn(),
      u = ya();
    function y(m) {
      var T = (this.__data__ = new n(m));
      this.size = T.size;
    }
    a(y, "Stack"),
      (y.prototype.clear = o),
      (y.prototype.delete = i),
      (y.prototype.get = p),
      (y.prototype.has = l),
      (y.prototype.set = u),
      (t.exports = y);
  }),
  da = f((r, t) => {
    var n = "__lodash_hash_undefined__";
    function o(i) {
      return this.__data__.set(i, n), this;
    }
    a(o, "setCacheAdd"), (t.exports = o);
  }),
  ma = f((r, t) => {
    function n(o) {
      return this.__data__.has(o);
    }
    a(n, "setCacheHas"), (t.exports = n);
  }),
  fa = f((r, t) => {
    var n = Qe(),
      o = da(),
      i = ma();
    function p(l) {
      var u = -1,
        y = l == null ? 0 : l.length;
      for (this.__data__ = new n(); ++u < y; ) this.add(l[u]);
    }
    a(p, "SetCache"),
      (p.prototype.add = p.prototype.push = o),
      (p.prototype.has = i),
      (t.exports = p);
  }),
  Ta = f((r, t) => {
    function n(o, i) {
      for (var p = -1, l = o == null ? 0 : o.length; ++p < l; )
        if (i(o[p], p, o)) return !0;
      return !1;
    }
    a(n, "arraySome"), (t.exports = n);
  }),
  va = f((r, t) => {
    function n(o, i) {
      return o.has(i);
    }
    a(n, "cacheHas"), (t.exports = n);
  }),
  Mt = f((r, t) => {
    var n = fa(),
      o = Ta(),
      i = va(),
      p = 1,
      l = 2;
    function u(y, m, T, h, x, g) {
      var w = T & p,
        _ = y.length,
        L = m.length;
      if (_ != L && !(w && L > _)) return !1;
      var R = g.get(y),
        P = g.get(m);
      if (R && P) return R == m && P == y;
      var A = -1,
        j = !0,
        D = T & l ? new n() : void 0;
      for (g.set(y, m), g.set(m, y); ++A < _; ) {
        var I = y[A],
          V = m[A];
        if (h) var E = w ? h(V, I, A, m, y, g) : h(I, V, A, y, m, g);
        if (E !== void 0) {
          if (E) continue;
          j = !1;
          break;
        }
        if (D) {
          if (
            !o(m, function (k, N) {
              if (!i(D, N) && (I === k || x(I, k, T, h, g))) return D.push(N);
            })
          ) {
            j = !1;
            break;
          }
        } else if (!(I === V || x(I, V, T, h, g))) {
          j = !1;
          break;
        }
      }
      return g.delete(y), g.delete(m), j;
    }
    a(u, "equalArrays"), (t.exports = u);
  }),
  ha = f((r, t) => {
    var n = Z(),
      o = n.Uint8Array;
    t.exports = o;
  }),
  ga = f((r, t) => {
    function n(o) {
      var i = -1,
        p = Array(o.size);
      return (
        o.forEach(function (l, u) {
          p[++i] = [u, l];
        }),
        p
      );
    }
    a(n, "mapToArray"), (t.exports = n);
  }),
  ba = f((r, t) => {
    function n(o) {
      var i = -1,
        p = Array(o.size);
      return (
        o.forEach(function (l) {
          p[++i] = l;
        }),
        p
      );
    }
    a(n, "setToArray"), (t.exports = n);
  }),
  Ja = f((r, t) => {
    var n = Re(),
      o = ha(),
      i = Kt(),
      p = Mt(),
      l = ga(),
      u = ba(),
      y = 1,
      m = 2,
      T = "[object Boolean]",
      h = "[object Date]",
      x = "[object Error]",
      g = "[object Map]",
      w = "[object Number]",
      _ = "[object RegExp]",
      L = "[object Set]",
      R = "[object String]",
      P = "[object Symbol]",
      A = "[object ArrayBuffer]",
      j = "[object DataView]",
      D = n ? n.prototype : void 0,
      I = D ? D.valueOf : void 0;
    function V(E, k, N, K, G, S, Y) {
      switch (N) {
        case j:
          if (E.byteLength != k.byteLength || E.byteOffset != k.byteOffset)
            return !1;
          (E = E.buffer), (k = k.buffer);
        case A:
          return !(E.byteLength != k.byteLength || !S(new o(E), new o(k)));
        case T:
        case h:
        case w:
          return i(+E, +k);
        case x:
          return E.name == k.name && E.message == k.message;
        case _:
        case R:
          return E == k + "";
        case g:
          var M = l;
        case L:
          var J = K & y;
          if ((M || (M = u), E.size != k.size && !J)) return !1;
          var oe = Y.get(E);
          if (oe) return oe == k;
          (K |= m), Y.set(E, k);
          var ee = p(M(E), M(k), K, G, S, Y);
          return Y.delete(E), ee;
        case P:
          if (I) return I.call(E) == I.call(k);
      }
      return !1;
    }
    a(V, "equalByTag"), (t.exports = V);
  }),
  xa = f((r, t) => {
    function n(o, i) {
      for (var p = -1, l = i.length, u = o.length; ++p < l; ) o[u + p] = i[p];
      return o;
    }
    a(n, "arrayPush"), (t.exports = n);
  }),
  wa = f((r, t) => {
    var n = xa(),
      o = ne();
    function i(p, l, u) {
      var y = l(p);
      return o(p) ? y : n(y, u(p));
    }
    a(i, "baseGetAllKeys"), (t.exports = i);
  }),
  Pa = f((r, t) => {
    function n(o, i) {
      for (var p = -1, l = o == null ? 0 : o.length, u = 0, y = []; ++p < l; ) {
        var m = o[p];
        i(m, p, o) && (y[u++] = m);
      }
      return y;
    }
    a(n, "arrayFilter"), (t.exports = n);
  }),
  Oa = f((r, t) => {
    function n() {
      return [];
    }
    a(n, "stubArray"), (t.exports = n);
  }),
  Na = f((r, t) => {
    var n = Pa(),
      o = Oa(),
      i = Object.prototype,
      p = i.propertyIsEnumerable,
      l = Object.getOwnPropertySymbols,
      u = l
        ? function (y) {
            return y == null
              ? []
              : ((y = Object(y)),
                n(l(y), function (m) {
                  return p.call(y, m);
                }));
          }
        : o;
    t.exports = u;
  }),
  _a = f((r, t) => {
    var n = wa(),
      o = Na(),
      i = He();
    function p(l) {
      return n(l, i, o);
    }
    a(p, "getAllKeys"), (t.exports = p);
  }),
  Sa = f((r, t) => {
    var n = _a(),
      o = 1,
      i = Object.prototype,
      p = i.hasOwnProperty;
    function l(u, y, m, T, h, x) {
      var g = m & o,
        w = n(u),
        _ = w.length,
        L = n(y),
        R = L.length;
      if (_ != R && !g) return !1;
      for (var P = _; P--; ) {
        var A = w[P];
        if (!(g ? A in y : p.call(y, A))) return !1;
      }
      var j = x.get(u),
        D = x.get(y);
      if (j && D) return j == y && D == u;
      var I = !0;
      x.set(u, y), x.set(y, u);
      for (var V = g; ++P < _; ) {
        A = w[P];
        var E = u[A],
          k = y[A];
        if (T) var N = g ? T(k, E, A, y, u, x) : T(E, k, A, u, y, x);
        if (!(N === void 0 ? E === k || h(E, k, m, T, x) : N)) {
          I = !1;
          break;
        }
        V || (V = A == "constructor");
      }
      if (I && !V) {
        var K = u.constructor,
          G = y.constructor;
        K != G &&
          "constructor" in u &&
          "constructor" in y &&
          !(
            typeof K == "function" &&
            K instanceof K &&
            typeof G == "function" &&
            G instanceof G
          ) &&
          (I = !1);
      }
      return x.delete(u), x.delete(y), I;
    }
    a(l, "equalObjects"), (t.exports = l);
  }),
  ja = f((r, t) => {
    var n = ie(),
      o = Z(),
      i = n(o, "DataView");
    t.exports = i;
  }),
  Ea = f((r, t) => {
    var n = ie(),
      o = Z(),
      i = n(o, "Promise");
    t.exports = i;
  }),
  ka = f((r, t) => {
    var n = ie(),
      o = Z(),
      i = n(o, "Set");
    t.exports = i;
  }),
  Aa = f((r, t) => {
    var n = ie(),
      o = Z(),
      i = n(o, "WeakMap");
    t.exports = i;
  }),
  Ia = f((r, t) => {
    var n = ja(),
      o = Xe(),
      i = Ea(),
      p = ka(),
      l = Aa(),
      u = ge(),
      y = Lt(),
      m = "[object Map]",
      T = "[object Object]",
      h = "[object Promise]",
      x = "[object Set]",
      g = "[object WeakMap]",
      w = "[object DataView]",
      _ = y(n),
      L = y(o),
      R = y(i),
      P = y(p),
      A = y(l),
      j = u;
    ((n && j(new n(new ArrayBuffer(1))) != w) ||
      (o && j(new o()) != m) ||
      (i && j(i.resolve()) != h) ||
      (p && j(new p()) != x) ||
      (l && j(new l()) != g)) &&
      (j = a(function (D) {
        var I = u(D),
          V = I == T ? D.constructor : void 0,
          E = V ? y(V) : "";
        if (E)
          switch (E) {
            case _:
              return w;
            case L:
              return m;
            case R:
              return h;
            case P:
              return x;
            case A:
              return g;
          }
        return I;
      }, "getTag")),
      (t.exports = j);
  }),
  Ra = f((r, t) => {
    var n = Ct(),
      o = Mt(),
      i = Ja(),
      p = Sa(),
      l = Ia(),
      u = ne(),
      y = Vt(),
      m = Dt(),
      T = 1,
      h = "[object Arguments]",
      x = "[object Array]",
      g = "[object Object]",
      w = Object.prototype,
      _ = w.hasOwnProperty;
    function L(R, P, A, j, D, I) {
      var V = u(R),
        E = u(P),
        k = V ? x : l(R),
        N = E ? x : l(P);
      (k = k == h ? g : k), (N = N == h ? g : N);
      var K = k == g,
        G = N == g,
        S = k == N;
      if (S && y(R)) {
        if (!y(P)) return !1;
        (V = !0), (K = !1);
      }
      if (S && !K)
        return (
          I || (I = new n()),
          V || m(R) ? o(R, P, A, j, D, I) : i(R, P, k, A, j, D, I)
        );
      if (!(A & T)) {
        var Y = K && _.call(R, "__wrapped__"),
          M = G && _.call(P, "__wrapped__");
        if (Y || M) {
          var J = Y ? R.value() : R,
            oe = M ? P.value() : P;
          return I || (I = new n()), D(J, oe, A, j, I);
        }
      }
      return S ? (I || (I = new n()), p(R, P, A, j, D, I)) : !1;
    }
    a(L, "baseIsEqualDeep"), (t.exports = L);
  }),
  qt = f((r, t) => {
    var n = Ra(),
      o = be();
    function i(p, l, u, y, m) {
      return p === l
        ? !0
        : p == null || l == null || (!o(p) && !o(l))
          ? p !== p && l !== l
          : n(p, l, u, y, i, m);
    }
    a(i, "baseIsEqual"), (t.exports = i);
  }),
  Fa = f((r, t) => {
    var n = Ct(),
      o = qt(),
      i = 1,
      p = 2;
    function l(u, y, m, T) {
      var h = m.length,
        x = h,
        g = !T;
      if (u == null) return !x;
      for (u = Object(u); h--; ) {
        var w = m[h];
        if (g && w[2] ? w[1] !== u[w[0]] : !(w[0] in u)) return !1;
      }
      for (; ++h < x; ) {
        w = m[h];
        var _ = w[0],
          L = u[_],
          R = w[1];
        if (g && w[2]) {
          if (L === void 0 && !(_ in u)) return !1;
        } else {
          var P = new n();
          if (T) var A = T(L, R, _, u, y, P);
          if (!(A === void 0 ? o(R, L, i | p, T, P) : A)) return !1;
        }
      }
      return !0;
    }
    a(l, "baseIsMatch"), (t.exports = l);
  }),
  Bt = f((r, t) => {
    var n = ze();
    function o(i) {
      return i === i && !n(i);
    }
    a(o, "isStrictComparable"), (t.exports = o);
  }),
  La = f((r, t) => {
    var n = Bt(),
      o = He();
    function i(p) {
      for (var l = o(p), u = l.length; u--; ) {
        var y = l[u],
          m = p[y];
        l[u] = [y, m, n(m)];
      }
      return l;
    }
    a(i, "getMatchData"), (t.exports = i);
  }),
  Gt = f((r, t) => {
    function n(o, i) {
      return function (p) {
        return p == null ? !1 : p[o] === i && (i !== void 0 || o in Object(p));
      };
    }
    a(n, "matchesStrictComparable"), (t.exports = n);
  }),
  Ua = f((r, t) => {
    var n = Fa(),
      o = La(),
      i = Gt();
    function p(l) {
      var u = o(l);
      return u.length == 1 && u[0][2]
        ? i(u[0][0], u[0][1])
        : function (y) {
            return y === l || n(y, l, u);
          };
    }
    a(p, "baseMatches"), (t.exports = p);
  }),
  Ze = f((r, t) => {
    var n = ge(),
      o = be(),
      i = "[object Symbol]";
    function p(l) {
      return typeof l == "symbol" || (o(l) && n(l) == i);
    }
    a(p, "isSymbol"), (t.exports = p);
  }),
  et = f((r, t) => {
    var n = ne(),
      o = Ze(),
      i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      p = /^\w*$/;
    function l(u, y) {
      if (n(u)) return !1;
      var m = typeof u;
      return m == "number" ||
        m == "symbol" ||
        m == "boolean" ||
        u == null ||
        o(u)
        ? !0
        : p.test(u) || !i.test(u) || (y != null && u in Object(y));
    }
    a(l, "isKey"), (t.exports = l);
  }),
  Va = f((r, t) => {
    var n = Qe(),
      o = "Expected a function";
    function i(p, l) {
      if (typeof p != "function" || (l != null && typeof l != "function"))
        throw new TypeError(o);
      var u = a(function () {
        var y = arguments,
          m = l ? l.apply(this, y) : y[0],
          T = u.cache;
        if (T.has(m)) return T.get(m);
        var h = p.apply(this, y);
        return (u.cache = T.set(m, h) || T), h;
      }, "memoized");
      return (u.cache = new (i.Cache || n)()), u;
    }
    a(i, "memoize"), (i.Cache = n), (t.exports = i);
  }),
  $a = f((r, t) => {
    var n = Va(),
      o = 500;
    function i(p) {
      var l = n(p, function (y) {
          return u.size === o && u.clear(), y;
        }),
        u = l.cache;
      return l;
    }
    a(i, "memoizeCapped"), (t.exports = i);
  }),
  Da = f((r, t) => {
    var n = $a(),
      o =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      i = /\\(\\)?/g,
      p = n(function (l) {
        var u = [];
        return (
          l.charCodeAt(0) === 46 && u.push(""),
          l.replace(o, function (y, m, T, h) {
            u.push(T ? h.replace(i, "$1") : m || y);
          }),
          u
        );
      });
    t.exports = p;
  }),
  Ka = f((r, t) => {
    function n(o, i) {
      for (var p = -1, l = o == null ? 0 : o.length, u = Array(l); ++p < l; )
        u[p] = i(o[p], p, o);
      return u;
    }
    a(n, "arrayMap"), (t.exports = n);
  }),
  Ca = f((r, t) => {
    var n = Re(),
      o = Ka(),
      i = ne(),
      p = Ze(),
      l = 1 / 0,
      u = n ? n.prototype : void 0,
      y = u ? u.toString : void 0;
    function m(T) {
      if (typeof T == "string") return T;
      if (i(T)) return o(T, m) + "";
      if (p(T)) return y ? y.call(T) : "";
      var h = T + "";
      return h == "0" && 1 / T == -l ? "-0" : h;
    }
    a(m, "baseToString"), (t.exports = m);
  }),
  Ma = f((r, t) => {
    var n = Ca();
    function o(i) {
      return i == null ? "" : n(i);
    }
    a(o, "toString"), (t.exports = o);
  }),
  Yt = f((r, t) => {
    var n = ne(),
      o = et(),
      i = Da(),
      p = Ma();
    function l(u, y) {
      return n(u) ? u : o(u, y) ? [u] : i(p(u));
    }
    a(l, "castPath"), (t.exports = l);
  }),
  $e = f((r, t) => {
    var n = Ze(),
      o = 1 / 0;
    function i(p) {
      if (typeof p == "string" || n(p)) return p;
      var l = p + "";
      return l == "0" && 1 / p == -o ? "-0" : l;
    }
    a(i, "toKey"), (t.exports = i);
  }),
  zt = f((r, t) => {
    var n = Yt(),
      o = $e();
    function i(p, l) {
      l = n(l, p);
      for (var u = 0, y = l.length; p != null && u < y; ) p = p[o(l[u++])];
      return u && u == y ? p : void 0;
    }
    a(i, "baseGet"), (t.exports = i);
  }),
  qa = f((r, t) => {
    var n = zt();
    function o(i, p, l) {
      var u = i == null ? void 0 : n(i, p);
      return u === void 0 ? l : u;
    }
    a(o, "get"), (t.exports = o);
  }),
  Ba = f((r, t) => {
    function n(o, i) {
      return o != null && i in Object(o);
    }
    a(n, "baseHasIn"), (t.exports = n);
  }),
  Ga = f((r, t) => {
    var n = Yt(),
      o = Ut(),
      i = ne(),
      p = $t(),
      l = We(),
      u = $e();
    function y(m, T, h) {
      T = n(T, m);
      for (var x = -1, g = T.length, w = !1; ++x < g; ) {
        var _ = u(T[x]);
        if (!(w = m != null && h(m, _))) break;
        m = m[_];
      }
      return w || ++x != g
        ? w
        : ((g = m == null ? 0 : m.length),
          !!g && l(g) && p(_, g) && (i(m) || o(m)));
    }
    a(y, "hasPath"), (t.exports = y);
  }),
  Ya = f((r, t) => {
    var n = Ba(),
      o = Ga();
    function i(p, l) {
      return p != null && o(p, l, n);
    }
    a(i, "hasIn"), (t.exports = i);
  }),
  za = f((r, t) => {
    var n = qt(),
      o = qa(),
      i = Ya(),
      p = et(),
      l = Bt(),
      u = Gt(),
      y = $e(),
      m = 1,
      T = 2;
    function h(x, g) {
      return p(x) && l(g)
        ? u(y(x), g)
        : function (w) {
            var _ = o(w, x);
            return _ === void 0 && _ === g ? i(w, x) : n(g, _, m | T);
          };
    }
    a(h, "baseMatchesProperty"), (t.exports = h);
  }),
  Wa = f((r, t) => {
    function n(o) {
      return o;
    }
    a(n, "identity"), (t.exports = n);
  }),
  Ha = f((r, t) => {
    function n(o) {
      return function (i) {
        return i == null ? void 0 : i[o];
      };
    }
    a(n, "baseProperty"), (t.exports = n);
  }),
  Xa = f((r, t) => {
    var n = zt();
    function o(i) {
      return function (p) {
        return n(p, i);
      };
    }
    a(o, "basePropertyDeep"), (t.exports = o);
  }),
  Qa = f((r, t) => {
    var n = Ha(),
      o = Xa(),
      i = et(),
      p = $e();
    function l(u) {
      return i(u) ? n(p(u)) : o(u);
    }
    a(l, "property"), (t.exports = l);
  }),
  Za = f((r, t) => {
    var n = Ua(),
      o = za(),
      i = Wa(),
      p = ne(),
      l = Qa();
    function u(y) {
      return typeof y == "function"
        ? y
        : y == null
          ? i
          : typeof y == "object"
            ? p(y)
              ? o(y[0], y[1])
              : n(y)
            : l(y);
    }
    a(u, "baseIteratee"), (t.exports = u);
  }),
  eo = f((r, t) => {
    var n = jn(),
      o = qn(),
      i = Za();
    function p(l, u) {
      var y = {};
      return (
        (u = i(u, 3)),
        o(l, function (m, T, h) {
          n(y, T, u(m, T, h));
        }),
        y
      );
    }
    a(p, "mapValues"), (t.exports = p);
  }),
  to = f((r, t) => {
    (function (n, o) {
      typeof r == "object" && typeof t < "u"
        ? o(r)
        : typeof define == "function" && define.amd
          ? define(["exports"], o)
          : ((n = typeof globalThis < "u" ? globalThis : n || self),
            o((n.jtpp = {})));
    })(r, function (n) {
      function o(e) {
        return e.text !== void 0 && e.text !== ""
          ? `'${e.type}' with value '${e.text}'`
          : `'${e.type}'`;
      }
      a(o, "tokenToString");
      let i = class Wt extends Error {
        constructor(s) {
          super(`No parslet found for token: ${o(s)}`),
            (this.token = s),
            Object.setPrototypeOf(this, Wt.prototype);
        }
        getToken() {
          return this.token;
        }
      };
      a(i, "NoParsletFoundError");
      let p = i,
        l = class Ht extends Error {
          constructor(s) {
            super(`The parsing ended early. The next token was: ${o(s)}`),
              (this.token = s),
              Object.setPrototypeOf(this, Ht.prototype);
          }
          getToken() {
            return this.token;
          }
        };
      a(l, "EarlyEndOfParseError");
      let u = l,
        y = class Xt extends Error {
          constructor(s, c) {
            let d = `Unexpected type: '${s.type}'.`;
            c !== void 0 && (d += ` Message: ${c}`),
              super(d),
              Object.setPrototypeOf(this, Xt.prototype);
          }
        };
      a(y, "UnexpectedTypeError");
      let m = y;
      function T(e) {
        return (s) => (s.startsWith(e) ? { type: e, text: e } : null);
      }
      a(T, "makePunctuationRule");
      function h(e) {
        let s = 0,
          c,
          d = e[0],
          v = !1;
        if (d !== "'" && d !== '"') return null;
        for (; s < e.length; ) {
          if ((s++, (c = e[s]), !v && c === d)) {
            s++;
            break;
          }
          v = !v && c === "\\";
        }
        if (c !== d) throw new Error("Unterminated String");
        return e.slice(0, s);
      }
      a(h, "getQuoted");
      let x = new RegExp(
          "[$_\\p{ID_Start}]|\\\\u\\p{Hex_Digit}{4}|\\\\u\\{0*(?:\\p{Hex_Digit}{1,5}|10\\p{Hex_Digit}{4})\\}",
          "u",
        ),
        g = new RegExp(
          "[$\\-\\p{ID_Continue}\\u200C\\u200D]|\\\\u\\p{Hex_Digit}{4}|\\\\u\\{0*(?:\\p{Hex_Digit}{1,5}|10\\p{Hex_Digit}{4})\\}",
          "u",
        );
      function w(e) {
        let s = e[0];
        if (!x.test(s)) return null;
        let c = 1;
        do {
          if (((s = e[c]), !g.test(s))) break;
          c++;
        } while (c < e.length);
        return e.slice(0, c);
      }
      a(w, "getIdentifier");
      let _ = /^(NaN|-?((\d*\.\d+|\d+)([Ee][+-]?\d+)?|Infinity))/;
      function L(e) {
        var s, c;
        return (c =
          (s = _.exec(e)) === null || s === void 0 ? void 0 : s[0]) !== null &&
          c !== void 0
          ? c
          : null;
      }
      a(L, "getNumber");
      let R = a((e) => {
        let s = w(e);
        return s == null ? null : { type: "Identifier", text: s };
      }, "identifierRule");
      function P(e) {
        return (s) => {
          if (!s.startsWith(e)) return null;
          let c = s[e.length];
          return c !== void 0 && g.test(c) ? null : { type: e, text: e };
        };
      }
      a(P, "makeKeyWordRule");
      let A = a((e) => {
          let s = h(e);
          return s == null ? null : { type: "StringValue", text: s };
        }, "stringValueRule"),
        j = a(
          (e) => (e.length > 0 ? null : { type: "EOF", text: "" }),
          "eofRule",
        ),
        D = a((e) => {
          let s = L(e);
          return s === null ? null : { type: "Number", text: s };
        }, "numberRule"),
        I = [
          j,
          T("=>"),
          T("("),
          T(")"),
          T("{"),
          T("}"),
          T("["),
          T("]"),
          T("|"),
          T("&"),
          T("<"),
          T(">"),
          T(","),
          T(";"),
          T("*"),
          T("?"),
          T("!"),
          T("="),
          T(":"),
          T("..."),
          T("."),
          T("#"),
          T("~"),
          T("/"),
          T("@"),
          P("undefined"),
          P("null"),
          P("function"),
          P("this"),
          P("new"),
          P("module"),
          P("event"),
          P("external"),
          P("typeof"),
          P("keyof"),
          P("readonly"),
          P("import"),
          P("is"),
          P("in"),
          D,
          R,
          A,
        ],
        V = /^\s*\n\s*/,
        E = class Ie {
          static create(s) {
            let c = this.read(s);
            s = c.text;
            let d = this.read(s);
            return (s = d.text), new Ie(s, void 0, c.token, d.token);
          }
          constructor(s, c, d, v) {
            (this.text = ""),
              (this.text = s),
              (this.previous = c),
              (this.current = d),
              (this.next = v);
          }
          static read(s, c = !1) {
            (c = c || V.test(s)), (s = s.trim());
            for (let d of I) {
              let v = d(s);
              if (v !== null) {
                let b = Object.assign(Object.assign({}, v), { startOfLine: c });
                return (s = s.slice(b.text.length)), { text: s, token: b };
              }
            }
            throw new Error("Unexpected Token " + s);
          }
          advance() {
            let s = Ie.read(this.text);
            return new Ie(s.text, this.current, this.next, s.token);
          }
        };
      a(E, "Lexer");
      let k = E;
      function N(e) {
        if (e === void 0) throw new Error("Unexpected undefined");
        if (
          e.type === "JsdocTypeKeyValue" ||
          e.type === "JsdocTypeParameterList" ||
          e.type === "JsdocTypeProperty" ||
          e.type === "JsdocTypeReadonlyProperty" ||
          e.type === "JsdocTypeObjectField" ||
          e.type === "JsdocTypeJsdocObjectField" ||
          e.type === "JsdocTypeIndexSignature" ||
          e.type === "JsdocTypeMappedType"
        )
          throw new m(e);
        return e;
      }
      a(N, "assertRootResult");
      function K(e) {
        return e.type === "JsdocTypeKeyValue" ? S(e) : N(e);
      }
      a(K, "assertPlainKeyValueOrRootResult");
      function G(e) {
        return e.type === "JsdocTypeName" ? e : S(e);
      }
      a(G, "assertPlainKeyValueOrNameResult");
      function S(e) {
        if (e.type !== "JsdocTypeKeyValue") throw new m(e);
        return e;
      }
      a(S, "assertPlainKeyValueResult");
      function Y(e) {
        var s;
        if (e.type === "JsdocTypeVariadic") {
          if (
            ((s = e.element) === null || s === void 0 ? void 0 : s.type) ===
            "JsdocTypeName"
          )
            return e;
          throw new m(e);
        }
        if (e.type !== "JsdocTypeNumber" && e.type !== "JsdocTypeName")
          throw new m(e);
        return e;
      }
      a(Y, "assertNumberOrVariadicNameResult");
      function M(e) {
        return (
          e.type === "JsdocTypeIndexSignature" ||
          e.type === "JsdocTypeMappedType"
        );
      }
      a(M, "isSquaredProperty");
      var J;
      (function (e) {
        (e[(e.ALL = 0)] = "ALL"),
          (e[(e.PARAMETER_LIST = 1)] = "PARAMETER_LIST"),
          (e[(e.OBJECT = 2)] = "OBJECT"),
          (e[(e.KEY_VALUE = 3)] = "KEY_VALUE"),
          (e[(e.UNION = 4)] = "UNION"),
          (e[(e.INTERSECTION = 5)] = "INTERSECTION"),
          (e[(e.PREFIX = 6)] = "PREFIX"),
          (e[(e.INFIX = 7)] = "INFIX"),
          (e[(e.TUPLE = 8)] = "TUPLE"),
          (e[(e.SYMBOL = 9)] = "SYMBOL"),
          (e[(e.OPTIONAL = 10)] = "OPTIONAL"),
          (e[(e.NULLABLE = 11)] = "NULLABLE"),
          (e[(e.KEY_OF_TYPE_OF = 12)] = "KEY_OF_TYPE_OF"),
          (e[(e.FUNCTION = 13)] = "FUNCTION"),
          (e[(e.ARROW = 14)] = "ARROW"),
          (e[(e.ARRAY_BRACKETS = 15)] = "ARRAY_BRACKETS"),
          (e[(e.GENERIC = 16)] = "GENERIC"),
          (e[(e.NAME_PATH = 17)] = "NAME_PATH"),
          (e[(e.PARENTHESIS = 18)] = "PARENTHESIS"),
          (e[(e.SPECIAL_TYPES = 19)] = "SPECIAL_TYPES");
      })(J || (J = {}));
      let oe = class {
        constructor(s, c, d) {
          (this.grammar = s),
            typeof c == "string"
              ? (this._lexer = k.create(c))
              : (this._lexer = c),
            (this.baseParser = d);
        }
        get lexer() {
          return this._lexer;
        }
        parse() {
          let s = this.parseType(J.ALL);
          if (this.lexer.current.type !== "EOF")
            throw new u(this.lexer.current);
          return s;
        }
        parseType(s) {
          return N(this.parseIntermediateType(s));
        }
        parseIntermediateType(s) {
          let c = this.tryParslets(null, s);
          if (c === null) throw new p(this.lexer.current);
          return this.parseInfixIntermediateType(c, s);
        }
        parseInfixIntermediateType(s, c) {
          let d = this.tryParslets(s, c);
          for (; d !== null; ) (s = d), (d = this.tryParslets(s, c));
          return s;
        }
        tryParslets(s, c) {
          for (let d of this.grammar) {
            let v = d(this, c, s);
            if (v !== null) return v;
          }
          return null;
        }
        consume(s) {
          return (
            Array.isArray(s) || (s = [s]),
            s.includes(this.lexer.current.type)
              ? ((this._lexer = this.lexer.advance()), !0)
              : !1
          );
        }
        acceptLexerState(s) {
          this._lexer = s.lexer;
        }
      };
      a(oe, "Parser");
      let ee = oe;
      function Ke(e) {
        return e === "EOF" || e === "|" || e === "," || e === ")" || e === ">";
      }
      a(Ke, "isQuestionMarkUnknownType");
      let Ce = a((e, s, c) => {
        let d = e.lexer.current.type,
          v = e.lexer.next.type;
        return (c == null && d === "?" && !Ke(v)) || (c != null && d === "?")
          ? (e.consume("?"),
            c == null
              ? {
                  type: "JsdocTypeNullable",
                  element: e.parseType(J.NULLABLE),
                  meta: { position: "prefix" },
                }
              : {
                  type: "JsdocTypeNullable",
                  element: N(c),
                  meta: { position: "suffix" },
                })
          : null;
      }, "nullableParslet");
      function F(e) {
        let s = a((c, d, v) => {
          let b = c.lexer.current.type,
            O = c.lexer.next.type;
          if (v === null) {
            if ("parsePrefix" in e && e.accept(b, O)) return e.parsePrefix(c);
          } else if ("parseInfix" in e && e.precedence > d && e.accept(b, O))
            return e.parseInfix(c, v);
          return null;
        }, "parslet");
        return Object.defineProperty(s, "name", { value: e.name }), s;
      }
      a(F, "composeParslet");
      let xe = F({
          name: "optionalParslet",
          accept: a((e) => e === "=", "accept"),
          precedence: J.OPTIONAL,
          parsePrefix: a(
            (e) => (
              e.consume("="),
              {
                type: "JsdocTypeOptional",
                element: e.parseType(J.OPTIONAL),
                meta: { position: "prefix" },
              }
            ),
            "parsePrefix",
          ),
          parseInfix: a(
            (e, s) => (
              e.consume("="),
              {
                type: "JsdocTypeOptional",
                element: N(s),
                meta: { position: "suffix" },
              }
            ),
            "parseInfix",
          ),
        }),
        we = F({
          name: "numberParslet",
          accept: a((e) => e === "Number", "accept"),
          parsePrefix: a((e) => {
            let s = parseFloat(e.lexer.current.text);
            return e.consume("Number"), { type: "JsdocTypeNumber", value: s };
          }, "parsePrefix"),
        }),
        Yr = F({
          name: "parenthesisParslet",
          accept: a((e) => e === "(", "accept"),
          parsePrefix: a((e) => {
            if ((e.consume("("), e.consume(")")))
              return { type: "JsdocTypeParameterList", elements: [] };
            let s = e.parseIntermediateType(J.ALL);
            if (!e.consume(")")) throw new Error("Unterminated parenthesis");
            return s.type === "JsdocTypeParameterList"
              ? s
              : s.type === "JsdocTypeKeyValue"
                ? { type: "JsdocTypeParameterList", elements: [s] }
                : { type: "JsdocTypeParenthesis", element: N(s) };
          }, "parsePrefix"),
        }),
        zr = F({
          name: "specialTypesParslet",
          accept: a(
            (e, s) =>
              (e === "?" && Ke(s)) ||
              e === "null" ||
              e === "undefined" ||
              e === "*",
            "accept",
          ),
          parsePrefix: a((e) => {
            if (e.consume("null")) return { type: "JsdocTypeNull" };
            if (e.consume("undefined")) return { type: "JsdocTypeUndefined" };
            if (e.consume("*")) return { type: "JsdocTypeAny" };
            if (e.consume("?")) return { type: "JsdocTypeUnknown" };
            throw new Error("Unacceptable token: " + e.lexer.current.text);
          }, "parsePrefix"),
        }),
        Wr = F({
          name: "notNullableParslet",
          accept: a((e) => e === "!", "accept"),
          precedence: J.NULLABLE,
          parsePrefix: a(
            (e) => (
              e.consume("!"),
              {
                type: "JsdocTypeNotNullable",
                element: e.parseType(J.NULLABLE),
                meta: { position: "prefix" },
              }
            ),
            "parsePrefix",
          ),
          parseInfix: a(
            (e, s) => (
              e.consume("!"),
              {
                type: "JsdocTypeNotNullable",
                element: N(s),
                meta: { position: "suffix" },
              }
            ),
            "parseInfix",
          ),
        });
      function dt({ allowTrailingComma: e }) {
        return F({
          name: "parameterListParslet",
          accept: a((s) => s === ",", "accept"),
          precedence: J.PARAMETER_LIST,
          parseInfix: a((s, c) => {
            let d = [K(c)];
            s.consume(",");
            do
              try {
                let v = s.parseIntermediateType(J.PARAMETER_LIST);
                d.push(K(v));
              } catch (v) {
                if (e && v instanceof p) break;
                throw v;
              }
            while (s.consume(","));
            if (
              d.length > 0 &&
              d.slice(0, -1).some((v) => v.type === "JsdocTypeVariadic")
            )
              throw new Error(
                "Only the last parameter may be a rest parameter",
              );
            return { type: "JsdocTypeParameterList", elements: d };
          }, "parseInfix"),
        });
      }
      a(dt, "createParameterListParslet");
      let Hr = F({
          name: "genericParslet",
          accept: a((e, s) => e === "<" || (e === "." && s === "<"), "accept"),
          precedence: J.GENERIC,
          parseInfix: a((e, s) => {
            let c = e.consume(".");
            e.consume("<");
            let d = [];
            do d.push(e.parseType(J.PARAMETER_LIST));
            while (e.consume(","));
            if (!e.consume(">"))
              throw new Error("Unterminated generic parameter list");
            return {
              type: "JsdocTypeGeneric",
              left: N(s),
              elements: d,
              meta: { brackets: "angle", dot: c },
            };
          }, "parseInfix"),
        }),
        Xr = F({
          name: "unionParslet",
          accept: a((e) => e === "|", "accept"),
          precedence: J.UNION,
          parseInfix: a((e, s) => {
            e.consume("|");
            let c = [];
            do c.push(e.parseType(J.UNION));
            while (e.consume("|"));
            return { type: "JsdocTypeUnion", elements: [N(s), ...c] };
          }, "parseInfix"),
        }),
        Me = [
          Ce,
          xe,
          we,
          Yr,
          zr,
          Wr,
          dt({ allowTrailingComma: !0 }),
          Hr,
          Xr,
          xe,
        ];
      function le({
        allowSquareBracketsOnAnyType: e,
        allowJsdocNamePaths: s,
        pathGrammar: c,
      }) {
        return a(function (d, v, b) {
          if (b == null || v >= J.NAME_PATH) return null;
          let O = d.lexer.current.type,
            U = d.lexer.next.type;
          if (
            !(
              (O === "." && U !== "<") ||
              (O === "[" && (e || b.type === "JsdocTypeName")) ||
              (s && (O === "~" || O === "#"))
            )
          )
            return null;
          let $,
            q = !1;
          d.consume(".")
            ? ($ = "property")
            : d.consume("[")
              ? (($ = "property-brackets"), (q = !0))
              : d.consume("~")
                ? ($ = "inner")
                : (d.consume("#"), ($ = "instance"));
          let Q = c !== null ? new ee(c, d.lexer, d) : d,
            z = Q.parseIntermediateType(J.NAME_PATH);
          d.acceptLexerState(Q);
          let me;
          switch (z.type) {
            case "JsdocTypeName":
              me = {
                type: "JsdocTypeProperty",
                value: z.value,
                meta: { quote: void 0 },
              };
              break;
            case "JsdocTypeNumber":
              me = {
                type: "JsdocTypeProperty",
                value: z.value.toString(10),
                meta: { quote: void 0 },
              };
              break;
            case "JsdocTypeStringValue":
              me = {
                type: "JsdocTypeProperty",
                value: z.value,
                meta: { quote: z.meta.quote },
              };
              break;
            case "JsdocTypeSpecialNamePath":
              if (z.specialType === "event") me = z;
              else
                throw new m(
                  z,
                  "Type 'JsdocTypeSpecialNamePath' is only allowed with specialType 'event'",
                );
              break;
            default:
              throw new m(
                z,
                "Expecting 'JsdocTypeName', 'JsdocTypeNumber', 'JsdocStringValue' or 'JsdocTypeSpecialNamePath'",
              );
          }
          if (q && !d.consume("]")) {
            let jt = d.lexer.current;
            throw new Error(
              `Unterminated square brackets. Next token is '${jt.type}' with text '${jt.text}'`,
            );
          }
          return {
            type: "JsdocTypeNamePath",
            left: N(b),
            right: me,
            pathType: $,
          };
        }, "namePathParslet");
      }
      a(le, "createNamePathParslet");
      function W({ allowedAdditionalTokens: e }) {
        return F({
          name: "nameParslet",
          accept: a(
            (s) =>
              s === "Identifier" ||
              s === "this" ||
              s === "new" ||
              e.includes(s),
            "accept",
          ),
          parsePrefix: a((s) => {
            let { type: c, text: d } = s.lexer.current;
            return s.consume(c), { type: "JsdocTypeName", value: d };
          }, "parsePrefix"),
        });
      }
      a(W, "createNameParslet");
      let ue = F({
        name: "stringValueParslet",
        accept: a((e) => e === "StringValue", "accept"),
        parsePrefix: a((e) => {
          let s = e.lexer.current.text;
          return (
            e.consume("StringValue"),
            {
              type: "JsdocTypeStringValue",
              value: s.slice(1, -1),
              meta: { quote: s[0] === "'" ? "single" : "double" },
            }
          );
        }, "parsePrefix"),
      });
      function ye({ pathGrammar: e, allowedTypes: s }) {
        return F({
          name: "specialNamePathParslet",
          accept: a((c) => s.includes(c), "accept"),
          parsePrefix: a((c) => {
            let d = c.lexer.current.type;
            if ((c.consume(d), !c.consume(":")))
              return { type: "JsdocTypeName", value: d };
            let v,
              b = c.lexer.current;
            if (c.consume("StringValue"))
              v = {
                type: "JsdocTypeSpecialNamePath",
                value: b.text.slice(1, -1),
                specialType: d,
                meta: { quote: b.text[0] === "'" ? "single" : "double" },
              };
            else {
              let $ = "",
                q = ["Identifier", "@", "/"];
              for (; q.some((Q) => c.consume(Q)); )
                ($ += b.text), (b = c.lexer.current);
              v = {
                type: "JsdocTypeSpecialNamePath",
                value: $,
                specialType: d,
                meta: { quote: void 0 },
              };
            }
            let O = new ee(e, c.lexer, c),
              U = O.parseInfixIntermediateType(v, J.ALL);
            return c.acceptLexerState(O), N(U);
          }, "parsePrefix"),
        });
      }
      a(ye, "createSpecialNamePathParslet");
      let mt = [
          W({ allowedAdditionalTokens: ["external", "module"] }),
          ue,
          we,
          le({
            allowSquareBracketsOnAnyType: !1,
            allowJsdocNamePaths: !0,
            pathGrammar: null,
          }),
        ],
        pe = [...mt, ye({ allowedTypes: ["event"], pathGrammar: mt })];
      function Pe(e) {
        let s;
        if (e.type === "JsdocTypeParameterList") s = e.elements;
        else if (e.type === "JsdocTypeParenthesis") s = [e.element];
        else throw new m(e);
        return s.map((c) => K(c));
      }
      a(Pe, "getParameters");
      function ft(e) {
        let s = Pe(e);
        if (s.some((c) => c.type === "JsdocTypeKeyValue"))
          throw new Error("No parameter should be named");
        return s;
      }
      a(ft, "getUnnamedParameters");
      function Oe({
        allowNamedParameters: e,
        allowNoReturnType: s,
        allowWithoutParenthesis: c,
        allowNewAsFunctionKeyword: d,
      }) {
        return F({
          name: "functionParslet",
          accept: a(
            (v, b) => v === "function" || (d && v === "new" && b === "("),
            "accept",
          ),
          parsePrefix: a((v) => {
            let b = v.consume("new");
            v.consume("function");
            let O = v.lexer.current.type === "(";
            if (!O) {
              if (!c) throw new Error("function is missing parameter list");
              return { type: "JsdocTypeName", value: "function" };
            }
            let U = {
                type: "JsdocTypeFunction",
                parameters: [],
                arrow: !1,
                constructor: b,
                parenthesis: O,
              },
              $ = v.parseIntermediateType(J.FUNCTION);
            if (e === void 0) U.parameters = ft($);
            else {
              if (b && $.type === "JsdocTypeFunction" && $.arrow)
                return (U = $), (U.constructor = !0), U;
              U.parameters = Pe($);
              for (let q of U.parameters)
                if (q.type === "JsdocTypeKeyValue" && !e.includes(q.key))
                  throw new Error(
                    `only allowed named parameters are ${e.join(", ")} but got ${q.type}`,
                  );
            }
            if (v.consume(":")) U.returnType = v.parseType(J.PREFIX);
            else if (!s) throw new Error("function is missing return type");
            return U;
          }, "parsePrefix"),
        });
      }
      a(Oe, "createFunctionParslet");
      function Ne({ allowPostfix: e, allowEnclosingBrackets: s }) {
        return F({
          name: "variadicParslet",
          accept: a((c) => c === "...", "accept"),
          precedence: J.PREFIX,
          parsePrefix: a((c) => {
            c.consume("...");
            let d = s && c.consume("[");
            try {
              let v = c.parseType(J.PREFIX);
              if (d && !c.consume("]"))
                throw new Error("Unterminated variadic type. Missing ']'");
              return {
                type: "JsdocTypeVariadic",
                element: N(v),
                meta: { position: "prefix", squareBrackets: d },
              };
            } catch (v) {
              if (v instanceof p) {
                if (d)
                  throw new Error(
                    "Empty square brackets for variadic are not allowed.",
                  );
                return {
                  type: "JsdocTypeVariadic",
                  meta: { position: void 0, squareBrackets: !1 },
                };
              } else throw v;
            }
          }, "parsePrefix"),
          parseInfix: e
            ? (c, d) => (
                c.consume("..."),
                {
                  type: "JsdocTypeVariadic",
                  element: N(d),
                  meta: { position: "suffix", squareBrackets: !1 },
                }
              )
            : void 0,
        });
      }
      a(Ne, "createVariadicParslet");
      let Tt = F({
          name: "symbolParslet",
          accept: a((e) => e === "(", "accept"),
          precedence: J.SYMBOL,
          parseInfix: a((e, s) => {
            if (s.type !== "JsdocTypeName")
              throw new Error(
                "Symbol expects a name on the left side. (Reacting on '(')",
              );
            e.consume("(");
            let c = { type: "JsdocTypeSymbol", value: s.value };
            if (!e.consume(")")) {
              let d = e.parseIntermediateType(J.SYMBOL);
              if (((c.element = Y(d)), !e.consume(")")))
                throw new Error("Symbol does not end after value");
            }
            return c;
          }, "parseInfix"),
        }),
        vt = F({
          name: "arrayBracketsParslet",
          precedence: J.ARRAY_BRACKETS,
          accept: a((e, s) => e === "[" && s === "]", "accept"),
          parseInfix: a(
            (e, s) => (
              e.consume("["),
              e.consume("]"),
              {
                type: "JsdocTypeGeneric",
                left: { type: "JsdocTypeName", value: "Array" },
                elements: [N(s)],
                meta: { brackets: "square", dot: !1 },
              }
            ),
            "parseInfix",
          ),
        });
      function _e({ objectFieldGrammar: e, allowKeyTypes: s }) {
        return F({
          name: "objectParslet",
          accept: a((c) => c === "{", "accept"),
          parsePrefix: a((c) => {
            c.consume("{");
            let d = {
              type: "JsdocTypeObject",
              meta: { separator: "comma" },
              elements: [],
            };
            if (!c.consume("}")) {
              let v,
                b = new ee(e, c.lexer, c);
              for (;;) {
                b.acceptLexerState(c);
                let O = b.parseIntermediateType(J.OBJECT);
                c.acceptLexerState(b),
                  O === void 0 && s && (O = c.parseIntermediateType(J.OBJECT));
                let U = !1;
                if (
                  (O.type === "JsdocTypeNullable" &&
                    ((U = !0), (O = O.element)),
                  O.type === "JsdocTypeNumber" ||
                    O.type === "JsdocTypeName" ||
                    O.type === "JsdocTypeStringValue")
                ) {
                  let $;
                  O.type === "JsdocTypeStringValue" && ($ = O.meta.quote),
                    d.elements.push({
                      type: "JsdocTypeObjectField",
                      key: O.value.toString(),
                      right: void 0,
                      optional: U,
                      readonly: !1,
                      meta: { quote: $ },
                    });
                } else if (
                  O.type === "JsdocTypeObjectField" ||
                  O.type === "JsdocTypeJsdocObjectField"
                )
                  d.elements.push(O);
                else throw new m(O);
                if (c.lexer.current.startOfLine) v = "linebreak";
                else if (c.consume(",")) v = "comma";
                else if (c.consume(";")) v = "semicolon";
                else break;
                if (c.lexer.current.type === "}") break;
              }
              if (((d.meta.separator = v ?? "comma"), !c.consume("}")))
                throw new Error("Unterminated record type. Missing '}'");
            }
            return d;
          }, "parsePrefix"),
        });
      }
      a(_e, "createObjectParslet");
      function Se({
        allowSquaredProperties: e,
        allowKeyTypes: s,
        allowReadonly: c,
        allowOptional: d,
      }) {
        return F({
          name: "objectFieldParslet",
          precedence: J.KEY_VALUE,
          accept: a((v) => v === ":", "accept"),
          parseInfix: a((v, b) => {
            var O;
            let U = !1,
              $ = !1;
            d && b.type === "JsdocTypeNullable" && ((U = !0), (b = b.element)),
              c &&
                b.type === "JsdocTypeReadonlyProperty" &&
                (($ = !0), (b = b.element));
            let q = (O = v.baseParser) !== null && O !== void 0 ? O : v;
            if (
              (q.acceptLexerState(v),
              b.type === "JsdocTypeNumber" ||
                b.type === "JsdocTypeName" ||
                b.type === "JsdocTypeStringValue" ||
                M(b))
            ) {
              if (M(b) && !e) throw new m(b);
              q.consume(":");
              let Q;
              b.type === "JsdocTypeStringValue" && (Q = b.meta.quote);
              let z = q.parseType(J.KEY_VALUE);
              return (
                v.acceptLexerState(q),
                {
                  type: "JsdocTypeObjectField",
                  key: M(b) ? b : b.value.toString(),
                  right: z,
                  optional: U,
                  readonly: $,
                  meta: { quote: Q },
                }
              );
            } else {
              if (!s) throw new m(b);
              q.consume(":");
              let Q = q.parseType(J.KEY_VALUE);
              return (
                v.acceptLexerState(q),
                { type: "JsdocTypeJsdocObjectField", left: N(b), right: Q }
              );
            }
          }, "parseInfix"),
        });
      }
      a(Se, "createObjectFieldParslet");
      function je({ allowOptional: e, allowVariadic: s }) {
        return F({
          name: "keyValueParslet",
          precedence: J.KEY_VALUE,
          accept: a((c) => c === ":", "accept"),
          parseInfix: a((c, d) => {
            let v = !1,
              b = !1;
            if (
              (e &&
                d.type === "JsdocTypeNullable" &&
                ((v = !0), (d = d.element)),
              s &&
                d.type === "JsdocTypeVariadic" &&
                d.element !== void 0 &&
                ((b = !0), (d = d.element)),
              d.type !== "JsdocTypeName")
            )
              throw new m(d);
            c.consume(":");
            let O = c.parseType(J.KEY_VALUE);
            return {
              type: "JsdocTypeKeyValue",
              key: d.value,
              right: O,
              optional: v,
              variadic: b,
            };
          }, "parseInfix"),
        });
      }
      a(je, "createKeyValueParslet");
      let ht = [
          ...Me,
          Oe({
            allowWithoutParenthesis: !0,
            allowNamedParameters: ["this", "new"],
            allowNoReturnType: !0,
            allowNewAsFunctionKeyword: !1,
          }),
          ue,
          ye({
            allowedTypes: ["module", "external", "event"],
            pathGrammar: pe,
          }),
          Ne({ allowEnclosingBrackets: !0, allowPostfix: !0 }),
          W({ allowedAdditionalTokens: ["keyof"] }),
          Tt,
          vt,
          le({
            allowSquareBracketsOnAnyType: !1,
            allowJsdocNamePaths: !0,
            pathGrammar: pe,
          }),
        ],
        Qr = [
          ...ht,
          _e({
            objectFieldGrammar: [
              W({ allowedAdditionalTokens: ["module", "in"] }),
              Se({
                allowSquaredProperties: !1,
                allowKeyTypes: !0,
                allowOptional: !1,
                allowReadonly: !1,
              }),
              ...ht,
            ],
            allowKeyTypes: !0,
          }),
          je({ allowOptional: !0, allowVariadic: !0 }),
        ],
        gt = F({
          name: "typeOfParslet",
          accept: a((e) => e === "typeof", "accept"),
          parsePrefix: a(
            (e) => (
              e.consume("typeof"),
              {
                type: "JsdocTypeTypeof",
                element: N(e.parseType(J.KEY_OF_TYPE_OF)),
              }
            ),
            "parsePrefix",
          ),
        }),
        Zr = [
          W({
            allowedAdditionalTokens: [
              "module",
              "keyof",
              "event",
              "external",
              "in",
            ],
          }),
          Ce,
          xe,
          ue,
          we,
          Se({
            allowSquaredProperties: !1,
            allowKeyTypes: !1,
            allowOptional: !1,
            allowReadonly: !1,
          }),
        ],
        en = [
          ...Me,
          _e({ allowKeyTypes: !1, objectFieldGrammar: Zr }),
          W({ allowedAdditionalTokens: ["event", "external", "in"] }),
          gt,
          Oe({
            allowWithoutParenthesis: !1,
            allowNamedParameters: ["this", "new"],
            allowNoReturnType: !0,
            allowNewAsFunctionKeyword: !1,
          }),
          Ne({ allowEnclosingBrackets: !1, allowPostfix: !1 }),
          W({ allowedAdditionalTokens: ["keyof"] }),
          ye({ allowedTypes: ["module"], pathGrammar: pe }),
          le({
            allowSquareBracketsOnAnyType: !1,
            allowJsdocNamePaths: !0,
            pathGrammar: pe,
          }),
          je({ allowOptional: !1, allowVariadic: !1 }),
          Tt,
        ];
      function bt({ allowQuestionMark: e }) {
        return F({
          name: "tupleParslet",
          accept: a((s) => s === "[", "accept"),
          parsePrefix: a((s) => {
            s.consume("[");
            let c = { type: "JsdocTypeTuple", elements: [] };
            if (s.consume("]")) return c;
            let d = s.parseIntermediateType(J.ALL);
            if (
              (d.type === "JsdocTypeParameterList"
                ? d.elements[0].type === "JsdocTypeKeyValue"
                  ? (c.elements = d.elements.map(S))
                  : (c.elements = d.elements.map(N))
                : d.type === "JsdocTypeKeyValue"
                  ? (c.elements = [S(d)])
                  : (c.elements = [N(d)]),
              !s.consume("]"))
            )
              throw new Error("Unterminated '['");
            if (!e && c.elements.some((v) => v.type === "JsdocTypeUnknown"))
              throw new Error("Question mark in tuple not allowed");
            return c;
          }, "parsePrefix"),
        });
      }
      a(bt, "createTupleParslet");
      let tn = F({
          name: "keyOfParslet",
          accept: a((e) => e === "keyof", "accept"),
          parsePrefix: a(
            (e) => (
              e.consume("keyof"),
              {
                type: "JsdocTypeKeyof",
                element: N(e.parseType(J.KEY_OF_TYPE_OF)),
              }
            ),
            "parsePrefix",
          ),
        }),
        rn = F({
          name: "importParslet",
          accept: a((e) => e === "import", "accept"),
          parsePrefix: a((e) => {
            if ((e.consume("import"), !e.consume("(")))
              throw new Error("Missing parenthesis after import keyword");
            let s = e.parseType(J.PREFIX);
            if (s.type !== "JsdocTypeStringValue")
              throw new Error(
                "Only string values are allowed as paths for imports",
              );
            if (!e.consume(")"))
              throw new Error(
                "Missing closing parenthesis after import keyword",
              );
            return { type: "JsdocTypeImport", element: s };
          }, "parsePrefix"),
        }),
        nn = F({
          name: "readonlyPropertyParslet",
          accept: a((e) => e === "readonly", "accept"),
          parsePrefix: a(
            (e) => (
              e.consume("readonly"),
              {
                type: "JsdocTypeReadonlyProperty",
                element: e.parseType(J.KEY_VALUE),
              }
            ),
            "parsePrefix",
          ),
        }),
        an = F({
          name: "arrowFunctionParslet",
          precedence: J.ARROW,
          accept: a((e) => e === "=>", "accept"),
          parseInfix: a(
            (e, s) => (
              e.consume("=>"),
              {
                type: "JsdocTypeFunction",
                parameters: Pe(s).map(G),
                arrow: !0,
                constructor: !1,
                parenthesis: !0,
                returnType: e.parseType(J.OBJECT),
              }
            ),
            "parseInfix",
          ),
        }),
        on = F({
          name: "intersectionParslet",
          accept: a((e) => e === "&", "accept"),
          precedence: J.INTERSECTION,
          parseInfix: a((e, s) => {
            e.consume("&");
            let c = [];
            do c.push(e.parseType(J.INTERSECTION));
            while (e.consume("&"));
            return { type: "JsdocTypeIntersection", elements: [N(s), ...c] };
          }, "parseInfix"),
        }),
        sn = F({
          name: "predicateParslet",
          precedence: J.INFIX,
          accept: a((e) => e === "is", "accept"),
          parseInfix: a((e, s) => {
            if (s.type !== "JsdocTypeName")
              throw new m(
                s,
                "A typescript predicate always has to have a name on the left side.",
              );
            return (
              e.consume("is"),
              {
                type: "JsdocTypePredicate",
                left: s,
                right: N(e.parseIntermediateType(J.INFIX)),
              }
            );
          }, "parseInfix"),
        }),
        pn = F({
          name: "objectSquareBracketPropertyParslet",
          accept: a((e) => e === "[", "accept"),
          parsePrefix: a((e) => {
            if (e.baseParser === void 0)
              throw new Error("Only allowed inside object grammar");
            e.consume("[");
            let s = e.lexer.current.text;
            e.consume("Identifier");
            let c;
            if (e.consume(":")) {
              let d = e.baseParser;
              d.acceptLexerState(e),
                (c = {
                  type: "JsdocTypeIndexSignature",
                  key: s,
                  right: d.parseType(J.ARRAY_BRACKETS),
                }),
                e.acceptLexerState(d);
            } else if (e.consume("in")) {
              let d = e.baseParser;
              d.acceptLexerState(e),
                (c = {
                  type: "JsdocTypeMappedType",
                  key: s,
                  right: d.parseType(J.ARRAY_BRACKETS),
                }),
                e.acceptLexerState(d);
            } else
              throw new Error(
                "Missing ':' or 'in' inside square bracketed property.",
              );
            if (!e.consume("]"))
              throw new Error("Unterminated square brackets");
            return c;
          }, "parsePrefix"),
        }),
        cn = [
          nn,
          W({
            allowedAdditionalTokens: [
              "module",
              "event",
              "keyof",
              "event",
              "external",
              "in",
            ],
          }),
          Ce,
          xe,
          ue,
          we,
          Se({
            allowSquaredProperties: !0,
            allowKeyTypes: !1,
            allowOptional: !0,
            allowReadonly: !0,
          }),
          pn,
        ],
        ln = [
          ...Me,
          _e({ allowKeyTypes: !1, objectFieldGrammar: cn }),
          gt,
          tn,
          rn,
          ue,
          Oe({
            allowWithoutParenthesis: !0,
            allowNoReturnType: !1,
            allowNamedParameters: ["this", "new", "args"],
            allowNewAsFunctionKeyword: !0,
          }),
          bt({ allowQuestionMark: !1 }),
          Ne({ allowEnclosingBrackets: !1, allowPostfix: !1 }),
          W({ allowedAdditionalTokens: ["event", "external", "in"] }),
          ye({ allowedTypes: ["module"], pathGrammar: pe }),
          vt,
          an,
          le({
            allowSquareBracketsOnAnyType: !0,
            allowJsdocNamePaths: !1,
            pathGrammar: pe,
          }),
          on,
          sn,
          je({ allowVariadic: !0, allowOptional: !0 }),
        ];
      function qe(e, s) {
        switch (s) {
          case "closure":
            return new ee(en, e).parse();
          case "jsdoc":
            return new ee(Qr, e).parse();
          case "typescript":
            return new ee(ln, e).parse();
        }
      }
      a(qe, "parse");
      function Jt(e, s = ["typescript", "closure", "jsdoc"]) {
        let c;
        for (let d of s)
          try {
            return qe(e, d);
          } catch (v) {
            c = v;
          }
        throw c;
      }
      a(Jt, "tryParse");
      function ce(e, s) {
        let c = e[s.type];
        if (c === void 0)
          throw new Error(
            `In this set of transform rules exists no rule for type ${s.type}.`,
          );
        return c(s, (d) => ce(e, d));
      }
      a(ce, "transform");
      function B(e) {
        throw new Error(
          "This transform is not available. Are you trying the correct parsing mode?",
        );
      }
      a(B, "notAvailableTransform");
      function Be(e) {
        let s = { params: [] };
        for (let c of e.parameters)
          c.type === "JsdocTypeKeyValue"
            ? c.key === "this"
              ? (s.this = c.right)
              : c.key === "new"
                ? (s.new = c.right)
                : s.params.push(c)
            : s.params.push(c);
        return s;
      }
      a(Be, "extractSpecialParams");
      function de(e, s, c) {
        return e === "prefix" ? c + s : s + c;
      }
      a(de, "applyPosition");
      function H(e, s) {
        switch (s) {
          case "double":
            return `"${e}"`;
          case "single":
            return `'${e}'`;
          case void 0:
            return e;
        }
      }
      a(H, "quote");
      function Ge() {
        return {
          JsdocTypeParenthesis: a(
            (e, s) => `(${e.element !== void 0 ? s(e.element) : ""})`,
            "JsdocTypeParenthesis",
          ),
          JsdocTypeKeyof: a(
            (e, s) => `keyof ${s(e.element)}`,
            "JsdocTypeKeyof",
          ),
          JsdocTypeFunction: a((e, s) => {
            if (e.arrow) {
              if (e.returnType === void 0)
                throw new Error("Arrow function needs a return type.");
              let c = `(${e.parameters.map(s).join(", ")}) => ${s(e.returnType)}`;
              return e.constructor && (c = "new " + c), c;
            } else {
              let c = e.constructor ? "new" : "function";
              return (
                e.parenthesis &&
                  ((c += `(${e.parameters.map(s).join(", ")})`),
                  e.returnType !== void 0 && (c += `: ${s(e.returnType)}`)),
                c
              );
            }
          }, "JsdocTypeFunction"),
          JsdocTypeName: a((e) => e.value, "JsdocTypeName"),
          JsdocTypeTuple: a(
            (e, s) => `[${e.elements.map(s).join(", ")}]`,
            "JsdocTypeTuple",
          ),
          JsdocTypeVariadic: a(
            (e, s) =>
              e.meta.position === void 0
                ? "..."
                : de(e.meta.position, s(e.element), "..."),
            "JsdocTypeVariadic",
          ),
          JsdocTypeNamePath: a((e, s) => {
            let c = s(e.left),
              d = s(e.right);
            switch (e.pathType) {
              case "inner":
                return `${c}~${d}`;
              case "instance":
                return `${c}#${d}`;
              case "property":
                return `${c}.${d}`;
              case "property-brackets":
                return `${c}[${d}]`;
            }
          }, "JsdocTypeNamePath"),
          JsdocTypeStringValue: a(
            (e) => H(e.value, e.meta.quote),
            "JsdocTypeStringValue",
          ),
          JsdocTypeAny: a(() => "*", "JsdocTypeAny"),
          JsdocTypeGeneric: a((e, s) => {
            if (e.meta.brackets === "square") {
              let c = e.elements[0],
                d = s(c);
              return c.type === "JsdocTypeUnion" ||
                c.type === "JsdocTypeIntersection"
                ? `(${d})[]`
                : `${d}[]`;
            } else
              return `${s(e.left)}${e.meta.dot ? "." : ""}<${e.elements.map(s).join(", ")}>`;
          }, "JsdocTypeGeneric"),
          JsdocTypeImport: a(
            (e, s) => `import(${s(e.element)})`,
            "JsdocTypeImport",
          ),
          JsdocTypeObjectField: a((e, s) => {
            let c = "";
            return (
              e.readonly && (c += "readonly "),
              typeof e.key == "string"
                ? (c += H(e.key, e.meta.quote))
                : (c += s(e.key)),
              e.optional && (c += "?"),
              e.right === void 0 ? c : c + `: ${s(e.right)}`
            );
          }, "JsdocTypeObjectField"),
          JsdocTypeJsdocObjectField: a(
            (e, s) => `${s(e.left)}: ${s(e.right)}`,
            "JsdocTypeJsdocObjectField",
          ),
          JsdocTypeKeyValue: a((e, s) => {
            let c = e.key;
            return (
              e.optional && (c += "?"),
              e.variadic && (c = "..." + c),
              e.right === void 0 ? c : c + `: ${s(e.right)}`
            );
          }, "JsdocTypeKeyValue"),
          JsdocTypeSpecialNamePath: a(
            (e) => `${e.specialType}:${H(e.value, e.meta.quote)}`,
            "JsdocTypeSpecialNamePath",
          ),
          JsdocTypeNotNullable: a(
            (e, s) => de(e.meta.position, s(e.element), "!"),
            "JsdocTypeNotNullable",
          ),
          JsdocTypeNull: a(() => "null", "JsdocTypeNull"),
          JsdocTypeNullable: a(
            (e, s) => de(e.meta.position, s(e.element), "?"),
            "JsdocTypeNullable",
          ),
          JsdocTypeNumber: a((e) => e.value.toString(), "JsdocTypeNumber"),
          JsdocTypeObject: a(
            (e, s) =>
              `{${e.elements.map(s).join((e.meta.separator === "comma" ? "," : ";") + " ")}}`,
            "JsdocTypeObject",
          ),
          JsdocTypeOptional: a(
            (e, s) => de(e.meta.position, s(e.element), "="),
            "JsdocTypeOptional",
          ),
          JsdocTypeSymbol: a(
            (e, s) => `${e.value}(${e.element !== void 0 ? s(e.element) : ""})`,
            "JsdocTypeSymbol",
          ),
          JsdocTypeTypeof: a(
            (e, s) => `typeof ${s(e.element)}`,
            "JsdocTypeTypeof",
          ),
          JsdocTypeUndefined: a(() => "undefined", "JsdocTypeUndefined"),
          JsdocTypeUnion: a(
            (e, s) => e.elements.map(s).join(" | "),
            "JsdocTypeUnion",
          ),
          JsdocTypeUnknown: a(() => "?", "JsdocTypeUnknown"),
          JsdocTypeIntersection: a(
            (e, s) => e.elements.map(s).join(" & "),
            "JsdocTypeIntersection",
          ),
          JsdocTypeProperty: a(
            (e) => H(e.value, e.meta.quote),
            "JsdocTypeProperty",
          ),
          JsdocTypePredicate: a(
            (e, s) => `${s(e.left)} is ${s(e.right)}`,
            "JsdocTypePredicate",
          ),
          JsdocTypeIndexSignature: a(
            (e, s) => `[${e.key}: ${s(e.right)}]`,
            "JsdocTypeIndexSignature",
          ),
          JsdocTypeMappedType: a(
            (e, s) => `[${e.key} in ${s(e.right)}]`,
            "JsdocTypeMappedType",
          ),
        };
      }
      a(Ge, "stringifyRules");
      let un = Ge();
      function xt(e) {
        return ce(un, e);
      }
      a(xt, "stringify");
      let yn = [
        "null",
        "true",
        "false",
        "break",
        "case",
        "catch",
        "class",
        "const",
        "continue",
        "debugger",
        "default",
        "delete",
        "do",
        "else",
        "export",
        "extends",
        "finally",
        "for",
        "function",
        "if",
        "import",
        "in",
        "instanceof",
        "new",
        "return",
        "super",
        "switch",
        "this",
        "throw",
        "try",
        "typeof",
        "var",
        "void",
        "while",
        "with",
        "yield",
      ];
      function X(e) {
        let s = { type: "NameExpression", name: e };
        return yn.includes(e) && (s.reservedWord = !0), s;
      }
      a(X, "makeName");
      let dn = {
        JsdocTypeOptional: a((e, s) => {
          let c = s(e.element);
          return (c.optional = !0), c;
        }, "JsdocTypeOptional"),
        JsdocTypeNullable: a((e, s) => {
          let c = s(e.element);
          return (c.nullable = !0), c;
        }, "JsdocTypeNullable"),
        JsdocTypeNotNullable: a((e, s) => {
          let c = s(e.element);
          return (c.nullable = !1), c;
        }, "JsdocTypeNotNullable"),
        JsdocTypeVariadic: a((e, s) => {
          if (e.element === void 0)
            throw new Error(
              "dots without value are not allowed in catharsis mode",
            );
          let c = s(e.element);
          return (c.repeatable = !0), c;
        }, "JsdocTypeVariadic"),
        JsdocTypeAny: a(() => ({ type: "AllLiteral" }), "JsdocTypeAny"),
        JsdocTypeNull: a(() => ({ type: "NullLiteral" }), "JsdocTypeNull"),
        JsdocTypeStringValue: a(
          (e) => X(H(e.value, e.meta.quote)),
          "JsdocTypeStringValue",
        ),
        JsdocTypeUndefined: a(
          () => ({ type: "UndefinedLiteral" }),
          "JsdocTypeUndefined",
        ),
        JsdocTypeUnknown: a(
          () => ({ type: "UnknownLiteral" }),
          "JsdocTypeUnknown",
        ),
        JsdocTypeFunction: a((e, s) => {
          let c = Be(e),
            d = { type: "FunctionType", params: c.params.map(s) };
          return (
            c.this !== void 0 && (d.this = s(c.this)),
            c.new !== void 0 && (d.new = s(c.new)),
            e.returnType !== void 0 && (d.result = s(e.returnType)),
            d
          );
        }, "JsdocTypeFunction"),
        JsdocTypeGeneric: a(
          (e, s) => ({
            type: "TypeApplication",
            applications: e.elements.map((c) => s(c)),
            expression: s(e.left),
          }),
          "JsdocTypeGeneric",
        ),
        JsdocTypeSpecialNamePath: a(
          (e) => X(e.specialType + ":" + H(e.value, e.meta.quote)),
          "JsdocTypeSpecialNamePath",
        ),
        JsdocTypeName: a(
          (e) =>
            e.value !== "function"
              ? X(e.value)
              : { type: "FunctionType", params: [] },
          "JsdocTypeName",
        ),
        JsdocTypeNumber: a((e) => X(e.value.toString()), "JsdocTypeNumber"),
        JsdocTypeObject: a((e, s) => {
          let c = { type: "RecordType", fields: [] };
          for (let d of e.elements)
            d.type !== "JsdocTypeObjectField" &&
            d.type !== "JsdocTypeJsdocObjectField"
              ? c.fields.push({ type: "FieldType", key: s(d), value: void 0 })
              : c.fields.push(s(d));
          return c;
        }, "JsdocTypeObject"),
        JsdocTypeObjectField: a((e, s) => {
          if (typeof e.key != "string")
            throw new Error(
              "Index signatures and mapped types are not supported",
            );
          return {
            type: "FieldType",
            key: X(H(e.key, e.meta.quote)),
            value: e.right === void 0 ? void 0 : s(e.right),
          };
        }, "JsdocTypeObjectField"),
        JsdocTypeJsdocObjectField: a(
          (e, s) => ({ type: "FieldType", key: s(e.left), value: s(e.right) }),
          "JsdocTypeJsdocObjectField",
        ),
        JsdocTypeUnion: a(
          (e, s) => ({
            type: "TypeUnion",
            elements: e.elements.map((c) => s(c)),
          }),
          "JsdocTypeUnion",
        ),
        JsdocTypeKeyValue: a(
          (e, s) => ({
            type: "FieldType",
            key: X(e.key),
            value: e.right === void 0 ? void 0 : s(e.right),
          }),
          "JsdocTypeKeyValue",
        ),
        JsdocTypeNamePath: a((e, s) => {
          let c = s(e.left),
            d;
          e.right.type === "JsdocTypeSpecialNamePath"
            ? (d = s(e.right).name)
            : (d = H(e.right.value, e.right.meta.quote));
          let v =
            e.pathType === "inner"
              ? "~"
              : e.pathType === "instance"
                ? "#"
                : ".";
          return X(`${c.name}${v}${d}`);
        }, "JsdocTypeNamePath"),
        JsdocTypeSymbol: a((e) => {
          let s = "",
            c = e.element,
            d = !1;
          return (
            (c == null ? void 0 : c.type) === "JsdocTypeVariadic" &&
              (c.meta.position === "prefix" ? (s = "...") : (d = !0),
              (c = c.element)),
            (c == null ? void 0 : c.type) === "JsdocTypeName"
              ? (s += c.value)
              : (c == null ? void 0 : c.type) === "JsdocTypeNumber" &&
                (s += c.value.toString()),
            d && (s += "..."),
            X(`${e.value}(${s})`)
          );
        }, "JsdocTypeSymbol"),
        JsdocTypeParenthesis: a(
          (e, s) => s(N(e.element)),
          "JsdocTypeParenthesis",
        ),
        JsdocTypeMappedType: B,
        JsdocTypeIndexSignature: B,
        JsdocTypeImport: B,
        JsdocTypeKeyof: B,
        JsdocTypeTuple: B,
        JsdocTypeTypeof: B,
        JsdocTypeIntersection: B,
        JsdocTypeProperty: B,
        JsdocTypePredicate: B,
      };
      function wt(e) {
        return ce(dn, e);
      }
      a(wt, "catharsisTransform");
      function te(e) {
        switch (e) {
          case void 0:
            return "none";
          case "single":
            return "single";
          case "double":
            return "double";
        }
      }
      a(te, "getQuoteStyle");
      function Pt(e) {
        switch (e) {
          case "inner":
            return "INNER_MEMBER";
          case "instance":
            return "INSTANCE_MEMBER";
          case "property":
            return "MEMBER";
          case "property-brackets":
            return "MEMBER";
        }
      }
      a(Pt, "getMemberType");
      function Ee(e, s) {
        return s.length === 2
          ? { type: e, left: s[0], right: s[1] }
          : { type: e, left: s[0], right: Ee(e, s.slice(1)) };
      }
      a(Ee, "nestResults");
      let mn = {
        JsdocTypeOptional: a(
          (e, s) => ({
            type: "OPTIONAL",
            value: s(e.element),
            meta: {
              syntax:
                e.meta.position === "prefix"
                  ? "PREFIX_EQUAL_SIGN"
                  : "SUFFIX_EQUALS_SIGN",
            },
          }),
          "JsdocTypeOptional",
        ),
        JsdocTypeNullable: a(
          (e, s) => ({
            type: "NULLABLE",
            value: s(e.element),
            meta: {
              syntax:
                e.meta.position === "prefix"
                  ? "PREFIX_QUESTION_MARK"
                  : "SUFFIX_QUESTION_MARK",
            },
          }),
          "JsdocTypeNullable",
        ),
        JsdocTypeNotNullable: a(
          (e, s) => ({
            type: "NOT_NULLABLE",
            value: s(e.element),
            meta: {
              syntax:
                e.meta.position === "prefix" ? "PREFIX_BANG" : "SUFFIX_BANG",
            },
          }),
          "JsdocTypeNotNullable",
        ),
        JsdocTypeVariadic: a((e, s) => {
          let c = {
            type: "VARIADIC",
            meta: {
              syntax:
                e.meta.position === "prefix"
                  ? "PREFIX_DOTS"
                  : e.meta.position === "suffix"
                    ? "SUFFIX_DOTS"
                    : "ONLY_DOTS",
            },
          };
          return e.element !== void 0 && (c.value = s(e.element)), c;
        }, "JsdocTypeVariadic"),
        JsdocTypeName: a(
          (e) => ({ type: "NAME", name: e.value }),
          "JsdocTypeName",
        ),
        JsdocTypeTypeof: a(
          (e, s) => ({ type: "TYPE_QUERY", name: s(e.element) }),
          "JsdocTypeTypeof",
        ),
        JsdocTypeTuple: a(
          (e, s) => ({ type: "TUPLE", entries: e.elements.map(s) }),
          "JsdocTypeTuple",
        ),
        JsdocTypeKeyof: a(
          (e, s) => ({ type: "KEY_QUERY", value: s(e.element) }),
          "JsdocTypeKeyof",
        ),
        JsdocTypeImport: a(
          (e) => ({
            type: "IMPORT",
            path: {
              type: "STRING_VALUE",
              quoteStyle: te(e.element.meta.quote),
              string: e.element.value,
            },
          }),
          "JsdocTypeImport",
        ),
        JsdocTypeUndefined: a(
          () => ({ type: "NAME", name: "undefined" }),
          "JsdocTypeUndefined",
        ),
        JsdocTypeAny: a(() => ({ type: "ANY" }), "JsdocTypeAny"),
        JsdocTypeFunction: a((e, s) => {
          let c = Be(e),
            d = {
              type: e.arrow ? "ARROW" : "FUNCTION",
              params: c.params.map((v) => {
                if (v.type === "JsdocTypeKeyValue") {
                  if (v.right === void 0)
                    throw new Error(
                      "Function parameter without ':' is not expected to be 'KEY_VALUE'",
                    );
                  return {
                    type: "NAMED_PARAMETER",
                    name: v.key,
                    typeName: s(v.right),
                  };
                } else return s(v);
              }),
              new: null,
              returns: null,
            };
          return (
            c.this !== void 0
              ? (d.this = s(c.this))
              : e.arrow || (d.this = null),
            c.new !== void 0 && (d.new = s(c.new)),
            e.returnType !== void 0 && (d.returns = s(e.returnType)),
            d
          );
        }, "JsdocTypeFunction"),
        JsdocTypeGeneric: a((e, s) => {
          let c = {
            type: "GENERIC",
            subject: s(e.left),
            objects: e.elements.map(s),
            meta: {
              syntax:
                e.meta.brackets === "square"
                  ? "SQUARE_BRACKET"
                  : e.meta.dot
                    ? "ANGLE_BRACKET_WITH_DOT"
                    : "ANGLE_BRACKET",
            },
          };
          return (
            e.meta.brackets === "square" &&
              e.elements[0].type === "JsdocTypeFunction" &&
              !e.elements[0].parenthesis &&
              (c.objects[0] = { type: "NAME", name: "function" }),
            c
          );
        }, "JsdocTypeGeneric"),
        JsdocTypeObjectField: a((e, s) => {
          if (typeof e.key != "string")
            throw new Error(
              "Index signatures and mapped types are not supported",
            );
          if (e.right === void 0)
            return {
              type: "RECORD_ENTRY",
              key: e.key,
              quoteStyle: te(e.meta.quote),
              value: null,
              readonly: !1,
            };
          let c = s(e.right);
          return (
            e.optional &&
              (c = {
                type: "OPTIONAL",
                value: c,
                meta: { syntax: "SUFFIX_KEY_QUESTION_MARK" },
              }),
            {
              type: "RECORD_ENTRY",
              key: e.key.toString(),
              quoteStyle: te(e.meta.quote),
              value: c,
              readonly: !1,
            }
          );
        }, "JsdocTypeObjectField"),
        JsdocTypeJsdocObjectField: a(() => {
          throw new Error("Keys may not be typed in jsdoctypeparser.");
        }, "JsdocTypeJsdocObjectField"),
        JsdocTypeKeyValue: a((e, s) => {
          if (e.right === void 0)
            return {
              type: "RECORD_ENTRY",
              key: e.key,
              quoteStyle: "none",
              value: null,
              readonly: !1,
            };
          let c = s(e.right);
          return (
            e.optional &&
              (c = {
                type: "OPTIONAL",
                value: c,
                meta: { syntax: "SUFFIX_KEY_QUESTION_MARK" },
              }),
            {
              type: "RECORD_ENTRY",
              key: e.key,
              quoteStyle: "none",
              value: c,
              readonly: !1,
            }
          );
        }, "JsdocTypeKeyValue"),
        JsdocTypeObject: a((e, s) => {
          let c = [];
          for (let d of e.elements)
            (d.type === "JsdocTypeObjectField" ||
              d.type === "JsdocTypeJsdocObjectField") &&
              c.push(s(d));
          return { type: "RECORD", entries: c };
        }, "JsdocTypeObject"),
        JsdocTypeSpecialNamePath: a((e) => {
          if (e.specialType !== "module")
            throw new Error(
              `jsdoctypeparser does not support type ${e.specialType} at this point.`,
            );
          return {
            type: "MODULE",
            value: {
              type: "FILE_PATH",
              quoteStyle: te(e.meta.quote),
              path: e.value,
            },
          };
        }, "JsdocTypeSpecialNamePath"),
        JsdocTypeNamePath: a((e, s) => {
          let c = !1,
            d,
            v;
          e.right.type === "JsdocTypeSpecialNamePath" &&
          e.right.specialType === "event"
            ? ((c = !0), (d = e.right.value), (v = te(e.right.meta.quote)))
            : ((d = e.right.value), (v = te(e.right.meta.quote)));
          let b = {
            type: Pt(e.pathType),
            owner: s(e.left),
            name: d,
            quoteStyle: v,
            hasEventPrefix: c,
          };
          if (b.owner.type === "MODULE") {
            let O = b.owner;
            return (b.owner = b.owner.value), (O.value = b), O;
          } else return b;
        }, "JsdocTypeNamePath"),
        JsdocTypeUnion: a(
          (e, s) => Ee("UNION", e.elements.map(s)),
          "JsdocTypeUnion",
        ),
        JsdocTypeParenthesis: a(
          (e, s) => ({ type: "PARENTHESIS", value: s(N(e.element)) }),
          "JsdocTypeParenthesis",
        ),
        JsdocTypeNull: a(
          () => ({ type: "NAME", name: "null" }),
          "JsdocTypeNull",
        ),
        JsdocTypeUnknown: a(() => ({ type: "UNKNOWN" }), "JsdocTypeUnknown"),
        JsdocTypeStringValue: a(
          (e) => ({
            type: "STRING_VALUE",
            quoteStyle: te(e.meta.quote),
            string: e.value,
          }),
          "JsdocTypeStringValue",
        ),
        JsdocTypeIntersection: a(
          (e, s) => Ee("INTERSECTION", e.elements.map(s)),
          "JsdocTypeIntersection",
        ),
        JsdocTypeNumber: a(
          (e) => ({ type: "NUMBER_VALUE", number: e.value.toString() }),
          "JsdocTypeNumber",
        ),
        JsdocTypeSymbol: B,
        JsdocTypeProperty: B,
        JsdocTypePredicate: B,
        JsdocTypeMappedType: B,
        JsdocTypeIndexSignature: B,
      };
      function Ot(e) {
        return ce(mn, e);
      }
      a(Ot, "jtpTransform");
      function Nt() {
        return {
          JsdocTypeIntersection: a(
            (e, s) => ({
              type: "JsdocTypeIntersection",
              elements: e.elements.map(s),
            }),
            "JsdocTypeIntersection",
          ),
          JsdocTypeGeneric: a(
            (e, s) => ({
              type: "JsdocTypeGeneric",
              left: s(e.left),
              elements: e.elements.map(s),
              meta: { dot: e.meta.dot, brackets: e.meta.brackets },
            }),
            "JsdocTypeGeneric",
          ),
          JsdocTypeNullable: a((e) => e, "JsdocTypeNullable"),
          JsdocTypeUnion: a(
            (e, s) => ({ type: "JsdocTypeUnion", elements: e.elements.map(s) }),
            "JsdocTypeUnion",
          ),
          JsdocTypeUnknown: a((e) => e, "JsdocTypeUnknown"),
          JsdocTypeUndefined: a((e) => e, "JsdocTypeUndefined"),
          JsdocTypeTypeof: a(
            (e, s) => ({ type: "JsdocTypeTypeof", element: s(e.element) }),
            "JsdocTypeTypeof",
          ),
          JsdocTypeSymbol: a((e, s) => {
            let c = { type: "JsdocTypeSymbol", value: e.value };
            return e.element !== void 0 && (c.element = s(e.element)), c;
          }, "JsdocTypeSymbol"),
          JsdocTypeOptional: a(
            (e, s) => ({
              type: "JsdocTypeOptional",
              element: s(e.element),
              meta: { position: e.meta.position },
            }),
            "JsdocTypeOptional",
          ),
          JsdocTypeObject: a(
            (e, s) => ({
              type: "JsdocTypeObject",
              meta: { separator: "comma" },
              elements: e.elements.map(s),
            }),
            "JsdocTypeObject",
          ),
          JsdocTypeNumber: a((e) => e, "JsdocTypeNumber"),
          JsdocTypeNull: a((e) => e, "JsdocTypeNull"),
          JsdocTypeNotNullable: a(
            (e, s) => ({
              type: "JsdocTypeNotNullable",
              element: s(e.element),
              meta: { position: e.meta.position },
            }),
            "JsdocTypeNotNullable",
          ),
          JsdocTypeSpecialNamePath: a((e) => e, "JsdocTypeSpecialNamePath"),
          JsdocTypeObjectField: a(
            (e, s) => ({
              type: "JsdocTypeObjectField",
              key: e.key,
              right: e.right === void 0 ? void 0 : s(e.right),
              optional: e.optional,
              readonly: e.readonly,
              meta: e.meta,
            }),
            "JsdocTypeObjectField",
          ),
          JsdocTypeJsdocObjectField: a(
            (e, s) => ({
              type: "JsdocTypeJsdocObjectField",
              left: s(e.left),
              right: s(e.right),
            }),
            "JsdocTypeJsdocObjectField",
          ),
          JsdocTypeKeyValue: a(
            (e, s) => ({
              type: "JsdocTypeKeyValue",
              key: e.key,
              right: e.right === void 0 ? void 0 : s(e.right),
              optional: e.optional,
              variadic: e.variadic,
            }),
            "JsdocTypeKeyValue",
          ),
          JsdocTypeImport: a(
            (e, s) => ({ type: "JsdocTypeImport", element: s(e.element) }),
            "JsdocTypeImport",
          ),
          JsdocTypeAny: a((e) => e, "JsdocTypeAny"),
          JsdocTypeStringValue: a((e) => e, "JsdocTypeStringValue"),
          JsdocTypeNamePath: a((e) => e, "JsdocTypeNamePath"),
          JsdocTypeVariadic: a((e, s) => {
            let c = {
              type: "JsdocTypeVariadic",
              meta: {
                position: e.meta.position,
                squareBrackets: e.meta.squareBrackets,
              },
            };
            return e.element !== void 0 && (c.element = s(e.element)), c;
          }, "JsdocTypeVariadic"),
          JsdocTypeTuple: a(
            (e, s) => ({ type: "JsdocTypeTuple", elements: e.elements.map(s) }),
            "JsdocTypeTuple",
          ),
          JsdocTypeName: a((e) => e, "JsdocTypeName"),
          JsdocTypeFunction: a((e, s) => {
            let c = {
              type: "JsdocTypeFunction",
              arrow: e.arrow,
              parameters: e.parameters.map(s),
              constructor: e.constructor,
              parenthesis: e.parenthesis,
            };
            return (
              e.returnType !== void 0 && (c.returnType = s(e.returnType)), c
            );
          }, "JsdocTypeFunction"),
          JsdocTypeKeyof: a(
            (e, s) => ({ type: "JsdocTypeKeyof", element: s(e.element) }),
            "JsdocTypeKeyof",
          ),
          JsdocTypeParenthesis: a(
            (e, s) => ({ type: "JsdocTypeParenthesis", element: s(e.element) }),
            "JsdocTypeParenthesis",
          ),
          JsdocTypeProperty: a((e) => e, "JsdocTypeProperty"),
          JsdocTypePredicate: a(
            (e, s) => ({
              type: "JsdocTypePredicate",
              left: s(e.left),
              right: s(e.right),
            }),
            "JsdocTypePredicate",
          ),
          JsdocTypeIndexSignature: a(
            (e, s) => ({
              type: "JsdocTypeIndexSignature",
              key: e.key,
              right: s(e.right),
            }),
            "JsdocTypeIndexSignature",
          ),
          JsdocTypeMappedType: a(
            (e, s) => ({
              type: "JsdocTypeMappedType",
              key: e.key,
              right: s(e.right),
            }),
            "JsdocTypeMappedType",
          ),
        };
      }
      a(Nt, "identityTransformRules");
      let _t = {
        JsdocTypeAny: [],
        JsdocTypeFunction: ["parameters", "returnType"],
        JsdocTypeGeneric: ["left", "elements"],
        JsdocTypeImport: [],
        JsdocTypeIndexSignature: ["right"],
        JsdocTypeIntersection: ["elements"],
        JsdocTypeKeyof: ["element"],
        JsdocTypeKeyValue: ["right"],
        JsdocTypeMappedType: ["right"],
        JsdocTypeName: [],
        JsdocTypeNamePath: ["left", "right"],
        JsdocTypeNotNullable: ["element"],
        JsdocTypeNull: [],
        JsdocTypeNullable: ["element"],
        JsdocTypeNumber: [],
        JsdocTypeObject: ["elements"],
        JsdocTypeObjectField: ["right"],
        JsdocTypeJsdocObjectField: ["left", "right"],
        JsdocTypeOptional: ["element"],
        JsdocTypeParenthesis: ["element"],
        JsdocTypeSpecialNamePath: [],
        JsdocTypeStringValue: [],
        JsdocTypeSymbol: ["element"],
        JsdocTypeTuple: ["elements"],
        JsdocTypeTypeof: ["element"],
        JsdocTypeUndefined: [],
        JsdocTypeUnion: ["elements"],
        JsdocTypeUnknown: [],
        JsdocTypeVariadic: ["element"],
        JsdocTypeProperty: [],
        JsdocTypePredicate: ["left", "right"],
      };
      function ke(e, s, c, d, v) {
        d == null || d(e, s, c);
        let b = _t[e.type];
        for (let O of b) {
          let U = e[O];
          if (U !== void 0)
            if (Array.isArray(U)) for (let $ of U) ke($, e, O, d, v);
            else ke(U, e, O, d, v);
        }
        v == null || v(e, s, c);
      }
      a(ke, "_traverse");
      function St(e, s, c) {
        ke(e, void 0, void 0, s, c);
      }
      a(St, "traverse"),
        (n.catharsisTransform = wt),
        (n.identityTransformRules = Nt),
        (n.jtpTransform = Ot),
        (n.parse = qe),
        (n.stringify = xt),
        (n.stringifyRules = Ge),
        (n.transform = ce),
        (n.traverse = St),
        (n.tryParse = Jt),
        (n.visitorKeys = _t);
    });
  });
const { UnknownArgTypesError: ro } =
  __STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;
var Qt = /^['"]|['"]$/g,
  no = a((r) => r.replace(Qt, ""), "trimQuotes"),
  ao = a((r) => Qt.test(r), "includesQuotes"),
  Zt = a((r) => {
    let t = no(r);
    return ao(r) || Number.isNaN(Number(t)) ? t : Number(t);
  }, "parseLiteral"),
  oo = a((r) => {
    switch (r.type) {
      case "function":
        return { name: "function" };
      case "object":
        let t = {};
        return (
          r.signature.properties.forEach((n) => {
            t[n.key] = ve(n.value);
          }),
          { name: "object", value: t }
        );
      default:
        throw new ro({ type: r, language: "Typescript" });
    }
  }, "convertSig"),
  ve = a((r) => {
    var i, p, l, u;
    let { name: t, raw: n } = r,
      o = {};
    switch ((typeof n < "u" && (o.raw = n), r.name)) {
      case "string":
      case "number":
      case "symbol":
      case "boolean":
        return { ...o, name: t };
      case "Array":
        return { ...o, name: "array", value: r.elements.map(ve) };
      case "signature":
        return { ...o, ...oo(r) };
      case "union":
        let y;
        return (
          (i = r.elements) != null && i.every((m) => m.name === "literal")
            ? (y = {
                ...o,
                name: "enum",
                value:
                  (p = r.elements) == null ? void 0 : p.map((m) => Zt(m.value)),
              })
            : (y = {
                ...o,
                name: t,
                value: (l = r.elements) == null ? void 0 : l.map(ve),
              }),
          y
        );
      case "intersection":
        return {
          ...o,
          name: t,
          value: (u = r.elements) == null ? void 0 : u.map(ve),
        };
      default:
        return { ...o, name: "other", value: t };
    }
  }, "convert");
const { UnknownArgTypesError: so } =
  __STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;
var io = a((r) => r.name === "literal", "isLiteral"),
  po = a((r) => r.value.replace(/['|"]/g, ""), "toEnumOption"),
  co = a((r) => {
    switch (r.type) {
      case "function":
        return { name: "function" };
      case "object":
        let t = {};
        return (
          r.signature.properties.forEach((n) => {
            t[n.key] = he(n.value);
          }),
          { name: "object", value: t }
        );
      default:
        throw new so({ type: r, language: "Flow" });
    }
  }, "convertSig"),
  he = a((r) => {
    var i, p, l, u;
    let { name: t, raw: n } = r,
      o = {};
    switch ((typeof n < "u" && (o.raw = n), r.name)) {
      case "literal":
        return { ...o, name: "other", value: r.value };
      case "string":
      case "number":
      case "symbol":
      case "boolean":
        return { ...o, name: t };
      case "Array":
        return { ...o, name: "array", value: r.elements.map(he) };
      case "signature":
        return { ...o, ...co(r) };
      case "union":
        return (i = r.elements) != null && i.every(io)
          ? {
              ...o,
              name: "enum",
              value: (p = r.elements) == null ? void 0 : p.map(po),
            }
          : {
              ...o,
              name: t,
              value: (l = r.elements) == null ? void 0 : l.map(he),
            };
      case "intersection":
        return {
          ...o,
          name: t,
          value: (u = r.elements) == null ? void 0 : u.map(he),
        };
      default:
        return { ...o, name: "other", value: t };
    }
  }, "convert"),
  lo = It(eo()),
  uo = /^\(.*\) => /,
  Te = a((r) => {
    let { name: t, raw: n, computed: o, value: i } = r,
      p = {};
    switch ((typeof n < "u" && (p.raw = n), t)) {
      case "enum": {
        let u = o ? i : i.map((y) => Zt(y.value));
        return { ...p, name: t, value: u };
      }
      case "string":
      case "number":
      case "symbol":
        return { ...p, name: t };
      case "func":
        return { ...p, name: "function" };
      case "bool":
      case "boolean":
        return { ...p, name: "boolean" };
      case "arrayOf":
      case "array":
        return { ...p, name: "array", value: i && Te(i) };
      case "object":
        return { ...p, name: t };
      case "objectOf":
        return { ...p, name: t, value: Te(i) };
      case "shape":
      case "exact":
        let l = (0, lo.default)(i, (u) => Te(u));
        return { ...p, name: "object", value: l };
      case "union":
        return { ...p, name: "union", value: i.map((u) => Te(u)) };
      case "instanceOf":
      case "element":
      case "elementType":
      default: {
        if ((t == null ? void 0 : t.indexOf("|")) > 0)
          try {
            let m = t.split("|").map((T) => JSON.parse(T));
            return { ...p, name: "enum", value: m };
          } catch {}
        let u = i ? `${t}(${i})` : t,
          y = uo.test(t) ? "function" : "other";
        return { ...p, name: y, value: u };
      }
    }
  }, "convert"),
  tt = a((r) => {
    let { type: t, tsType: n, flowType: o } = r;
    try {
      if (t != null) return Te(t);
      if (n != null) return ve(n);
      if (o != null) return he(o);
    } catch (i) {
      console.error(i);
    }
    return null;
  }, "convert"),
  yo = ((r) => (
    (r.JAVASCRIPT = "JavaScript"),
    (r.FLOW = "Flow"),
    (r.TYPESCRIPT = "TypeScript"),
    (r.UNKNOWN = "Unknown"),
    r
  ))(yo || {}),
  mo = ["null", "undefined"];
function De(r) {
  return mo.some((t) => t === r);
}
a(De, "isDefaultValueBlacklisted");
var fo = a((r) => {
  if (!r) return "";
  if (typeof r == "string") return r;
  throw new Error(`Description: expected string, got: ${JSON.stringify(r)}`);
}, "str");
function rt(r) {
  return !!r.__docgenInfo;
}
a(rt, "hasDocgen");
function er(r) {
  return r != null && Object.keys(r).length > 0;
}
a(er, "isValidDocgenSection");
function tr(r, t) {
  return rt(r) ? r.__docgenInfo[t] : null;
}
a(tr, "getDocgenSection");
function rr(r) {
  return rt(r) ? fo(r.__docgenInfo.description) : "";
}
a(rr, "getDocgenDescription");
var re;
(function (r) {
  (r.start = "/**"), (r.nostart = "/***"), (r.delim = "*"), (r.end = "*/");
})((re = re || (re = {})));
function nr(r) {
  return /^\s+$/.test(r);
}
a(nr, "isSpace");
function ar(r) {
  let t = r.match(/\r+$/);
  return t == null
    ? ["", r]
    : [r.slice(-t[0].length), r.slice(0, -t[0].length)];
}
a(ar, "splitCR");
function se(r) {
  let t = r.match(/^\s+/);
  return t == null ? ["", r] : [r.slice(0, t[0].length), r.slice(t[0].length)];
}
a(se, "splitSpace");
function or(r) {
  return r.split(/\n/);
}
a(or, "splitLines");
function sr(r = {}) {
  return Object.assign(
    {
      tag: "",
      name: "",
      type: "",
      optional: !1,
      description: "",
      problems: [],
      source: [],
    },
    r,
  );
}
a(sr, "seedSpec");
function ir(r = {}) {
  return Object.assign(
    {
      start: "",
      delimiter: "",
      postDelimiter: "",
      tag: "",
      postTag: "",
      name: "",
      postName: "",
      type: "",
      postType: "",
      description: "",
      end: "",
      lineEnd: "",
    },
    r,
  );
}
a(ir, "seedTokens");
var To = /^@\S+/;
function pr({ fence: r = "```" } = {}) {
  let t = cr(r),
    n = a((o, i) => (t(o) ? !i : i), "toggleFence");
  return a(function (o) {
    let i = [[]],
      p = !1;
    for (let l of o)
      To.test(l.tokens.description) && !p
        ? i.push([l])
        : i[i.length - 1].push(l),
        (p = n(l.tokens.description, p));
    return i;
  }, "parseBlock");
}
a(pr, "getParser");
function cr(r) {
  return typeof r == "string" ? (t) => t.split(r).length % 2 === 0 : r;
}
a(cr, "getFencer");
function lr({ startLine: r = 0, markers: t = re } = {}) {
  let n = null,
    o = r;
  return a(function (i) {
    let p = i,
      l = ir();
    if (
      (([l.lineEnd, p] = ar(p)),
      ([l.start, p] = se(p)),
      n === null &&
        p.startsWith(t.start) &&
        !p.startsWith(t.nostart) &&
        ((n = []),
        (l.delimiter = p.slice(0, t.start.length)),
        (p = p.slice(t.start.length)),
        ([l.postDelimiter, p] = se(p))),
      n === null)
    )
      return o++, null;
    let u = p.trimRight().endsWith(t.end);
    if (
      (l.delimiter === "" &&
        p.startsWith(t.delim) &&
        !p.startsWith(t.end) &&
        ((l.delimiter = t.delim),
        (p = p.slice(t.delim.length)),
        ([l.postDelimiter, p] = se(p))),
      u)
    ) {
      let y = p.trimRight();
      (l.end = p.slice(y.length - t.end.length)),
        (p = y.slice(0, -t.end.length));
    }
    if (
      ((l.description = p), n.push({ number: o, source: i, tokens: l }), o++, u)
    ) {
      let y = n.slice();
      return (n = null), y;
    }
    return null;
  }, "parseSource");
}
a(lr, "getParser");
function ur({ tokenizers: r }) {
  return a(function (t) {
    var n;
    let o = sr({ source: t });
    for (let i of r)
      if (
        ((o = i(o)),
        !((n = o.problems[o.problems.length - 1]) === null || n === void 0) &&
          n.critical)
      )
        break;
    return o;
  }, "parseSpec");
}
a(ur, "getParser");
function yr() {
  return (r) => {
    let { tokens: t } = r.source[0],
      n = t.description.match(/\s*(@(\S+))(\s*)/);
    return n === null
      ? (r.problems.push({
          code: "spec:tag:prefix",
          message: 'tag should start with "@" symbol',
          line: r.source[0].number,
          critical: !0,
        }),
        r)
      : ((t.tag = n[1]),
        (t.postTag = n[3]),
        (t.description = t.description.slice(n[0].length)),
        (r.tag = n[2]),
        r);
  };
}
a(yr, "tagTokenizer");
function dr(r = "compact") {
  let t = mr(r);
  return (n) => {
    let o = 0,
      i = [];
    for (let [u, { tokens: y }] of n.source.entries()) {
      let m = "";
      if (u === 0 && y.description[0] !== "{") return n;
      for (let T of y.description)
        if ((T === "{" && o++, T === "}" && o--, (m += T), o === 0)) break;
      if ((i.push([y, m]), o === 0)) break;
    }
    if (o !== 0)
      return (
        n.problems.push({
          code: "spec:type:unpaired-curlies",
          message: "unpaired curlies",
          line: n.source[0].number,
          critical: !0,
        }),
        n
      );
    let p = [],
      l = i[0][0].postDelimiter.length;
    for (let [u, [y, m]] of i.entries())
      (y.type = m),
        u > 0 &&
          ((y.type = y.postDelimiter.slice(l) + m),
          (y.postDelimiter = y.postDelimiter.slice(0, l))),
        ([y.postType, y.description] = se(y.description.slice(m.length))),
        p.push(y.type);
    return (
      (p[0] = p[0].slice(1)),
      (p[p.length - 1] = p[p.length - 1].slice(0, -1)),
      (n.type = t(p)),
      n
    );
  };
}
a(dr, "typeTokenizer");
var vo = a((r) => r.trim(), "trim");
function mr(r) {
  return r === "compact"
    ? (t) => t.map(vo).join("")
    : r === "preserve"
      ? (t) =>
          t.join(`
`)
      : r;
}
a(mr, "getJoiner");
var ho = a((r) => r && r.startsWith('"') && r.endsWith('"'), "isQuoted");
function fr() {
  let r = a((t, { tokens: n }, o) => (n.type === "" ? t : o), "typeEnd");
  return (t) => {
    let { tokens: n } = t.source[t.source.reduce(r, 0)],
      o = n.description.trimLeft(),
      i = o.split('"');
    if (i.length > 1 && i[0] === "" && i.length % 2 === 1)
      return (
        (t.name = i[1]),
        (n.name = `"${i[1]}"`),
        ([n.postName, n.description] = se(o.slice(n.name.length))),
        t
      );
    let p = 0,
      l = "",
      u = !1,
      y;
    for (let T of o) {
      if (p === 0 && nr(T)) break;
      T === "[" && p++, T === "]" && p--, (l += T);
    }
    if (p !== 0)
      return (
        t.problems.push({
          code: "spec:name:unpaired-brackets",
          message: "unpaired brackets",
          line: t.source[0].number,
          critical: !0,
        }),
        t
      );
    let m = l;
    if (l[0] === "[" && l[l.length - 1] === "]") {
      (u = !0), (l = l.slice(1, -1));
      let T = l.split("=");
      if (
        ((l = T[0].trim()),
        T[1] !== void 0 && (y = T.slice(1).join("=").trim()),
        l === "")
      )
        return (
          t.problems.push({
            code: "spec:name:empty-name",
            message: "empty name",
            line: t.source[0].number,
            critical: !0,
          }),
          t
        );
      if (y === "")
        return (
          t.problems.push({
            code: "spec:name:empty-default",
            message: "empty default value",
            line: t.source[0].number,
            critical: !0,
          }),
          t
        );
      if (!ho(y) && /=(?!>)/.test(y))
        return (
          t.problems.push({
            code: "spec:name:invalid-default",
            message: "invalid default value syntax",
            line: t.source[0].number,
            critical: !0,
          }),
          t
        );
    }
    return (
      (t.optional = u),
      (t.name = l),
      (n.name = m),
      y !== void 0 && (t.default = y),
      ([n.postName, n.description] = se(o.slice(n.name.length))),
      t
    );
  };
}
a(fr, "nameTokenizer");
function Tr(r = "compact", t = re) {
  let n = nt(r);
  return (o) => ((o.description = n(o.source, t)), o);
}
a(Tr, "descriptionTokenizer");
function nt(r) {
  return r === "compact" ? vr : r === "preserve" ? hr : r;
}
a(nt, "getJoiner");
function vr(r, t = re) {
  return r
    .map(({ tokens: { description: n } }) => n.trim())
    .filter((n) => n !== "")
    .join(" ");
}
a(vr, "compactJoiner");
var go = a((r, { tokens: t }, n) => (t.type === "" ? r : n), "lineNo"),
  bo = a(
    ({ tokens: r }) =>
      (r.delimiter === "" ? r.start : r.postDelimiter.slice(1)) + r.description,
    "getDescription",
  );
function hr(r, t = re) {
  if (r.length === 0) return "";
  r[0].tokens.description === "" &&
    r[0].tokens.delimiter === t.start &&
    (r = r.slice(1));
  let n = r[r.length - 1];
  return (
    n !== void 0 &&
      n.tokens.description === "" &&
      n.tokens.end.endsWith(t.end) &&
      (r = r.slice(0, -1)),
    (r = r.slice(r.reduce(go, 0))),
    r.map(bo).join(`
`)
  );
}
a(hr, "preserveJoiner");
function gr({
  startLine: r = 0,
  fence: t = "```",
  spacing: n = "compact",
  markers: o = re,
  tokenizers: i = [yr(), dr(n), fr(), Tr(n)],
} = {}) {
  if (r < 0 || r % 1 > 0) throw new Error("Invalid startLine");
  let p = lr({ startLine: r, markers: o }),
    l = pr({ fence: t }),
    u = ur({ tokenizers: i }),
    y = nt(n);
  return function (m) {
    let T = [];
    for (let h of or(m)) {
      let x = p(h);
      if (x === null) continue;
      let g = l(x),
        w = g.slice(1).map(u);
      T.push({
        description: y(g[0], o),
        tags: w,
        source: x,
        problems: w.reduce((_, L) => _.concat(L.problems), []),
      });
    }
    return T;
  };
}
a(gr, "getParser");
function br(r) {
  return (
    r.start +
    r.delimiter +
    r.postDelimiter +
    r.tag +
    r.postTag +
    r.type +
    r.postType +
    r.name +
    r.postName +
    r.description +
    r.end +
    r.lineEnd
  );
}
a(br, "join");
function Jo() {
  return (r) =>
    r.source.map(({ tokens: t }) => br(t)).join(`
`);
}
a(Jo, "getStringifier");
function Jr(r, t = {}) {
  return gr(t)(r);
}
a(Jr, "parse");
var at = It(to());
function xr(r) {
  return r != null && r.includes("@");
}
a(xr, "containsJsDoc");
function wr(r) {
  let t =
      `/**
` +
      (r ?? "")
        .split(
          `
`,
        )
        .map((o) => ` * ${o}`).join(`
`) +
      `
*/`,
    n = Jr(t, { spacing: "preserve" });
  if (!n || n.length === 0) throw new Error("Cannot parse JSDoc tags.");
  return n[0];
}
a(wr, "parse");
var xo = {
    tags: ["param", "arg", "argument", "returns", "ignore", "deprecated"],
  },
  wo = a((r, t = xo) => {
    if (!xr(r)) return { includesJsDoc: !1, ignore: !1 };
    let n = wr(r),
      o = Pr(n, t.tags);
    return o.ignore
      ? { includesJsDoc: !0, ignore: !0 }
      : {
          includesJsDoc: !0,
          ignore: !1,
          description: n.description.trim(),
          extractedTags: o,
        };
  }, "parseJsDoc");
function Pr(r, t) {
  let n = { params: null, deprecated: null, returns: null, ignore: !1 };
  for (let o of r.tags)
    if (!(t !== void 0 && !t.includes(o.tag)))
      if (o.tag === "ignore") {
        n.ignore = !0;
        break;
      } else
        switch (o.tag) {
          case "param":
          case "arg":
          case "argument": {
            let i = Nr(o);
            i != null &&
              (n.params == null && (n.params = []), n.params.push(i));
            break;
          }
          case "deprecated": {
            let i = _r(o);
            i != null && (n.deprecated = i);
            break;
          }
          case "returns": {
            let i = Sr(o);
            i != null && (n.returns = i);
            break;
          }
        }
  return n;
}
a(Pr, "extractJsDocTags");
function Or(r) {
  return r.replace(/[\.-]$/, "");
}
a(Or, "normaliseParamName");
function Nr(r) {
  if (!r.name || r.name === "-") return null;
  let t = it(r.type);
  return {
    name: r.name,
    type: t,
    description: st(r.description),
    getPrettyName: a(() => Or(r.name), "getPrettyName"),
    getTypeName: a(() => (t ? pt(t) : null), "getTypeName"),
  };
}
a(Nr, "extractParam");
function _r(r) {
  return r.name ? ot(r.name, r.description) : null;
}
a(_r, "extractDeprecated");
function ot(r, t) {
  let n = r === "" ? t : `${r} ${t}`;
  return st(n);
}
a(ot, "joinNameAndDescription");
function st(r) {
  let t = r.replace(/^- /g, "").trim();
  return t === "" ? null : t;
}
a(st, "normaliseDescription");
function Sr(r) {
  let t = it(r.type);
  return t
    ? {
        type: t,
        description: ot(r.name, r.description),
        getTypeName: a(() => pt(t), "getTypeName"),
      }
    : null;
}
a(Sr, "extractReturns");
var ae = (0, at.stringifyRules)(),
  Po = ae.JsdocTypeObject;
ae.JsdocTypeAny = () => "any";
ae.JsdocTypeObject = (r, t) => `(${Po(r, t)})`;
ae.JsdocTypeOptional = (r, t) => t(r.element);
ae.JsdocTypeNullable = (r, t) => t(r.element);
ae.JsdocTypeNotNullable = (r, t) => t(r.element);
ae.JsdocTypeUnion = (r, t) => r.elements.map(t).join("|");
function it(r) {
  try {
    return (0, at.parse)(r, "typescript");
  } catch {
    return null;
  }
}
a(it, "extractType");
function pt(r) {
  return (0, at.transform)(ae, r);
}
a(pt, "extractTypeName");
function ct(r) {
  return r.length > 90;
}
a(ct, "isTooLongForTypeSummary");
function jr(r) {
  return r.length > 50;
}
a(jr, "isTooLongForDefaultValueSummary");
function C(r, t) {
  return r === t ? { summary: r } : { summary: r, detail: t };
}
a(C, "createSummaryValue");
function lt({ name: r, value: t, elements: n, raw: o }) {
  return t ?? (n != null ? n.map(lt).join(" | ") : (o ?? r));
}
a(lt, "generateUnionElement");
function Er({ name: r, raw: t, elements: n }) {
  return n != null
    ? C(n.map(lt).join(" | "))
    : t != null
      ? C(t.replace(/^\|\s*/, ""))
      : C(r);
}
a(Er, "generateUnion");
function kr({ type: r, raw: t }) {
  return t != null ? C(t) : C(r);
}
a(kr, "generateFuncSignature");
function Ar({ type: r, raw: t }) {
  return t != null ? (ct(t) ? C(r, t) : C(t)) : C(r);
}
a(Ar, "generateObjectSignature");
function Ir(r) {
  let { type: t } = r;
  return t === "object" ? Ar(r) : kr(r);
}
a(Ir, "generateSignature");
function Rr({ name: r, raw: t }) {
  return t != null ? (ct(t) ? C(r, t) : C(t)) : C(r);
}
a(Rr, "generateDefault");
function Fr(r) {
  if (r == null) return null;
  switch (r.name) {
    case "union":
      return Er(r);
    case "signature":
      return Ir(r);
    default:
      return Rr(r);
  }
}
a(Fr, "createType");
function Lr(r, t) {
  if (r != null) {
    let { value: n } = r;
    if (!De(n)) return jr(n) ? C(t == null ? void 0 : t.name, n) : C(n);
  }
  return null;
}
a(Lr, "createDefaultValue");
var Oo = a((r, t) => {
  let { flowType: n, description: o, required: i, defaultValue: p } = t;
  return {
    name: r,
    type: Fr(n),
    required: i,
    description: o,
    defaultValue: Lr(p ?? null, n ?? null),
  };
}, "createFlowPropDef");
function Ur({ tsType: r, required: t }) {
  if (r == null) return null;
  let n = r.name;
  return (
    t || (n = n.replace(" | undefined", "")),
    C(["Array", "Record", "signature"].includes(r.name) ? r.raw : n)
  );
}
a(Ur, "createType");
function Vr({ defaultValue: r }) {
  if (r != null) {
    let { value: t } = r;
    if (!De(t)) return C(t);
  }
  return null;
}
a(Vr, "createDefaultValue");
var No = a((r, t) => {
  let { description: n, required: o } = t;
  return {
    name: r,
    type: Ur(t),
    required: o,
    description: n,
    defaultValue: Vr(t),
  };
}, "createTsPropDef");
function $r(r) {
  return r != null ? C(r.name) : null;
}
a($r, "createType");
function Dr(r) {
  let { computed: t, func: n } = r;
  return typeof t > "u" && typeof n > "u";
}
a(Dr, "isReactDocgenTypescript");
function Kr(r) {
  return r
    ? r.name === "string"
      ? !0
      : r.name === "enum"
        ? Array.isArray(r.value) &&
          r.value.every(
            ({ value: t }) =>
              typeof t == "string" && t[0] === '"' && t[t.length - 1] === '"',
          )
        : !1
    : !1;
}
a(Kr, "isStringValued");
function Cr(r, t) {
  if (r != null) {
    let { value: n } = r;
    if (!De(n)) return Dr(r) && Kr(t) ? C(JSON.stringify(n)) : C(n);
  }
  return null;
}
a(Cr, "createDefaultValue");
function ut(r, t, n) {
  let { description: o, required: i, defaultValue: p } = n;
  return {
    name: r,
    type: $r(t),
    required: i,
    description: o,
    defaultValue: Cr(p, t),
  };
}
a(ut, "createBasicPropDef");
function Je(r, t) {
  var n;
  if (t != null && t.includesJsDoc) {
    let { description: o, extractedTags: i } = t;
    o != null && (r.description = t.description);
    let p = {
      ...i,
      params:
        (n = i == null ? void 0 : i.params) == null
          ? void 0
          : n.map((l) => ({
              name: l.getPrettyName(),
              description: l.description,
            })),
    };
    Object.values(p).filter(Boolean).length > 0 && (r.jsDocTags = p);
  }
  return r;
}
a(Je, "applyJsDocResult");
var _o = a((r, t, n) => {
    let o = ut(r, t.type, t);
    return (o.sbType = tt(t)), Je(o, n);
  }, "javaScriptFactory"),
  So = a((r, t, n) => {
    let o = No(r, t);
    return (o.sbType = tt(t)), Je(o, n);
  }, "tsFactory"),
  jo = a((r, t, n) => {
    let o = Oo(r, t);
    return (o.sbType = tt(t)), Je(o, n);
  }, "flowFactory"),
  Eo = a((r, t, n) => {
    let o = ut(r, { name: "unknown" }, t);
    return Je(o, n);
  }, "unknownFactory"),
  Mr = a((r) => {
    switch (r) {
      case "JavaScript":
        return _o;
      case "TypeScript":
        return So;
      case "Flow":
        return jo;
      default:
        return Eo;
    }
  }, "getPropDefFactory"),
  qr = a(
    (r) =>
      r.type != null
        ? "JavaScript"
        : r.flowType != null
          ? "Flow"
          : r.tsType != null
            ? "TypeScript"
            : "Unknown",
    "getTypeSystem",
  ),
  ko = a((r) => {
    let t = qr(r[0]),
      n = Mr(t);
    return r.map((o) => {
      var p;
      let i = o;
      return (
        (p = o.type) != null &&
          p.elements &&
          (i = { ...o, type: { ...o.type, value: o.type.elements } }),
        yt(i.name, i, t, n)
      );
    });
  }, "extractComponentSectionArray"),
  Ao = a((r) => {
    let t = Object.keys(r),
      n = qr(r[t[0]]),
      o = Mr(n);
    return t
      .map((i) => {
        let p = r[i];
        return p != null ? yt(i, p, n, o) : null;
      })
      .filter(Boolean);
  }, "extractComponentSectionObject"),
  ws = a((r, t) => {
    let n = tr(r, t);
    return er(n) ? (Array.isArray(n) ? ko(n) : Ao(n)) : [];
  }, "extractComponentProps");
function yt(r, t, n, o) {
  let i = wo(t.description);
  return i.includesJsDoc && i.ignore
    ? null
    : {
        propDef: o(r, t, i),
        jsDocTags: i.extractedTags,
        docgenInfo: t,
        typeSystem: n,
      };
}
a(yt, "extractProp");
function Io(r) {
  return r != null ? rr(r) : "";
}
a(Io, "extractComponentDescription");
const { combineParameters: Ro } = __STORYBOOK_MODULE_PREVIEW_API__;
var Ps = a((r) => {
    let {
        component: t,
        argTypes: n,
        parameters: { docs: o = {} },
      } = r,
      { extractArgTypes: i } = o,
      p = i && t ? i(t) : {};
    return p ? Ro(p, n) : n;
  }, "enhanceArgTypes"),
  Fo = "storybook/docs",
  Os = `${Fo}/snippet-rendered`,
  Lo = ((r) => (
    (r.AUTO = "auto"), (r.CODE = "code"), (r.DYNAMIC = "dynamic"), r
  ))(Lo || {}),
  Uo = typeof Ae == "object" && Ae && Ae.Object === Object && Ae,
  Vo = Uo,
  $o = Vo,
  Do = typeof self == "object" && self && self.Object === Object && self,
  Ko = $o || Do || Function("return this")(),
  Co = Ko,
  Mo = Co,
  qo = Mo.Symbol,
  Br = qo,
  Et = Br,
  Gr = Object.prototype,
  Bo = Gr.hasOwnProperty,
  Go = Gr.toString,
  fe = Et ? Et.toStringTag : void 0;
function Yo(r) {
  var t = Bo.call(r, fe),
    n = r[fe];
  try {
    r[fe] = void 0;
    var o = !0;
  } catch {}
  var i = Go.call(r);
  return o && (t ? (r[fe] = n) : delete r[fe]), i;
}
var zo = Yo,
  Wo = Object.prototype,
  Ho = Wo.toString;
function Xo(r) {
  return Ho.call(r);
}
var Qo = Xo,
  kt = Br,
  Zo = zo,
  es = Qo,
  ts = "[object Null]",
  rs = "[object Undefined]",
  At = kt ? kt.toStringTag : void 0;
function ns(r) {
  return r == null
    ? r === void 0
      ? rs
      : ts
    : At && At in Object(r)
      ? Zo(r)
      : es(r);
}
var as = ns;
function os(r, t) {
  return function (n) {
    return r(t(n));
  };
}
var ss = os,
  is = ss,
  ps = is(Object.getPrototypeOf, Object),
  Ns = ps;
function cs(r) {
  return r != null && typeof r == "object";
}
var _s = cs;
function ls(r) {
  var t = typeof r;
  return r != null && (t == "object" || t == "function");
}
var us = ls,
  ys = as,
  ds = us,
  ms = "[object AsyncFunction]",
  fs = "[object Function]",
  Ts = "[object GeneratorFunction]",
  vs = "[object Proxy]";
function hs(r) {
  if (!ds(r)) return !1;
  var t = ys(r);
  return t == fs || t == Ts || t == ms || t == vs;
}
var gs = hs;
const Ss = fn(gs);
var bs = Array.isArray,
  js = bs;
export {
  Io as $,
  ws as B,
  ct as H,
  rt as K,
  C as O,
  yo as P,
  Co as _,
  as as a,
  Ns as b,
  _s as c,
  js as d,
  Os as e,
  Ss as f,
  tr as g,
  gs as h,
  us as i,
  Br as j,
  Vo as k,
  ss as l,
  jr as o,
  Lo as s,
  Ps as z,
};
