import { g as Se } from "./_commonjsHelpers-BosuxZz1.js";
import { s as L, g as X, a as ke } from "./index.esm-C-hvzvEL.js";

function k(s) {
  (this._maxSize = s), this.clear();
}
k.prototype.clear = function () {
  (this._size = 0), (this._values = Object.create(null));
};
k.prototype.get = function (s) {
  return this._values[s];
};
k.prototype.set = function (s, e) {
  return (
    this._size >= this._maxSize && this.clear(),
    s in this._values || this._size++,
    (this._values[s] = e)
  );
};
var Te = /[^.^\]^[]+|(?=\[\]|\.\.)/g,
  ye = /^\d+$/,
  De = /^\d/,
  Ae = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,
  Ce = /^\s*(['"]?)(.*?)(\1)\s*$/,
  Q = 512,
  le = new k(Q),
  oe = new k(Q),
  fe = new k(Q),
  S = {
    Cache: k,
    split: H,
    normalizePath: G,
    setter: function (s) {
      var e = G(s);
      return (
        oe.get(s) ||
        oe.set(s, function (r, n) {
          for (var i = 0, a = e.length, u = r; i < a - 1; ) {
            var l = e[i];
            if (l === "__proto__" || l === "constructor" || l === "prototype")
              return r;
            u = u[e[i++]];
          }
          u[e[i]] = n;
        })
      );
    },
    getter: function (s, e) {
      var t = G(s);
      return (
        fe.get(s) ||
        fe.set(s, function (n) {
          for (var i = 0, a = t.length; i < a; )
            if (n != null || !e) n = n[t[i++]];
            else return;
          return n;
        })
      );
    },
    join: function (s) {
      return s.reduce(function (e, t) {
        return e + (W(t) || ye.test(t) ? "[" + t + "]" : (e ? "." : "") + t);
      }, "");
    },
    forEach: function (s, e, t) {
      je(Array.isArray(s) ? s : H(s), e, t);
    },
  };
function G(s) {
  return (
    le.get(s) ||
    le.set(
      s,
      H(s).map(function (e) {
        return e.replace(Ce, "$2");
      }),
    )
  );
}
function H(s) {
  return s.match(Te) || [""];
}
function je(s, e, t) {
  var r = s.length,
    n,
    i,
    a,
    u;
  for (i = 0; i < r; i++)
    (n = s[i]),
      n &&
        (Ie(n) && (n = '"' + n + '"'),
        (u = W(n)),
        (a = !u && /^\d+$/.test(n)),
        e.call(t, n, u, a, i, s));
}
function W(s) {
  return typeof s == "string" && s && ["'", '"'].indexOf(s.charAt(0)) !== -1;
}
function Ne(s) {
  return s.match(De) && !s.match(ye);
}
function ze(s) {
  return Ae.test(s);
}
function Ie(s) {
  return !W(s) && (Ne(s) || ze(s));
}
const Re =
    /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,
  V = (s) => s.match(Re) || [],
  M = (s) => s[0].toUpperCase() + s.slice(1),
  ee = (s, e) => V(s).join(e).toLowerCase(),
  xe = (s) =>
    V(s).reduce(
      (e, t) =>
        `${e}${e ? t[0].toUpperCase() + t.slice(1).toLowerCase() : t.toLowerCase()}`,
      "",
    ),
  Ve = (s) => M(xe(s)),
  Me = (s) => ee(s, "_"),
  Pe = (s) => ee(s, "-"),
  Ue = (s) => M(ee(s, " ")),
  Ze = (s) => V(s).map(M).join(" ");
var Y = {
    words: V,
    upperFirst: M,
    camelCase: xe,
    pascalCase: Ve,
    snakeCase: Me,
    kebabCase: Pe,
    sentenceCase: Ue,
    titleCase: Ze,
  },
  te = { exports: {} };
te.exports = function (s) {
  return be(qe(s), s);
};
te.exports.array = be;
function be(s, e) {
  var t = s.length,
    r = new Array(t),
    n = {},
    i = t,
    a = Le(e),
    u = Ge(s);
  for (
    e.forEach(function (o) {
      if (!u.has(o[0]) || !u.has(o[1]))
        throw new Error(
          "Unknown node. There is an unknown node in the supplied edges.",
        );
    });
    i--;

  )
    n[i] || l(s[i], i, new Set());
  return r;
  function l(o, f, c) {
    if (c.has(o)) {
      var h;
      try {
        h = ", node was:" + JSON.stringify(o);
      } catch {
        h = "";
      }
      throw new Error("Cyclic dependency" + h);
    }
    if (!u.has(o))
      throw new Error(
        "Found unknown node. Make sure to provided all involved nodes. Unknown node: " +
          JSON.stringify(o),
      );
    if (!n[f]) {
      n[f] = !0;
      var p = a.get(o) || new Set();
      if (((p = Array.from(p)), (f = p.length))) {
        c.add(o);
        do {
          var b = p[--f];
          l(b, u.get(b), c);
        } while (f);
        c.delete(o);
      }
      r[--t] = o;
    }
  }
}
function qe(s) {
  for (var e = new Set(), t = 0, r = s.length; t < r; t++) {
    var n = s[t];
    e.add(n[0]), e.add(n[1]);
  }
  return Array.from(e);
}
function Le(s) {
  for (var e = new Map(), t = 0, r = s.length; t < r; t++) {
    var n = s[t];
    e.has(n[0]) || e.set(n[0], new Set()),
      e.has(n[1]) || e.set(n[1], new Set()),
      e.get(n[0]).add(n[1]);
  }
  return e;
}
function Ge(s) {
  for (var e = new Map(), t = 0, r = s.length; t < r; t++) e.set(s[t], t);
  return e;
}
var Ye = te.exports;
const Xe = Se(Ye),
  He = Object.prototype.toString,
  Ke = Error.prototype.toString,
  Je = RegExp.prototype.toString,
  Be = typeof Symbol < "u" ? Symbol.prototype.toString : () => "",
  Qe = /^Symbol\((.*)\)(.*)$/;
function We(s) {
  return s != +s ? "NaN" : s === 0 && 1 / s < 0 ? "-0" : "" + s;
}
function ce(s, e = !1) {
  if (s == null || s === !0 || s === !1) return "" + s;
  const t = typeof s;
  if (t === "number") return We(s);
  if (t === "string") return e ? `"${s}"` : s;
  if (t === "function") return "[Function " + (s.name || "anonymous") + "]";
  if (t === "symbol") return Be.call(s).replace(Qe, "Symbol($1)");
  const r = He.call(s).slice(8, -1);
  return r === "Date"
    ? isNaN(s.getTime())
      ? "" + s
      : s.toISOString(s)
    : r === "Error" || s instanceof Error
      ? "[" + Ke.call(s) + "]"
      : r === "RegExp"
        ? Je.call(s)
        : null;
}
function F(s, e) {
  let t = ce(s, e);
  return t !== null
    ? t
    : JSON.stringify(
        s,
        function (r, n) {
          let i = ce(this[r], e);
          return i !== null ? i : n;
        },
        2,
      );
}
function ge(s) {
  return s == null ? [] : [].concat(s);
}
let ve,
  we,
  _e,
  et = /\$\{\s*(\w+)\s*\}/g;
ve = Symbol.toStringTag;
class he {
  constructor(e, t, r, n) {
    (this.name = void 0),
      (this.message = void 0),
      (this.value = void 0),
      (this.path = void 0),
      (this.type = void 0),
      (this.params = void 0),
      (this.errors = void 0),
      (this.inner = void 0),
      (this[ve] = "Error"),
      (this.name = "ValidationError"),
      (this.value = t),
      (this.path = r),
      (this.type = n),
      (this.errors = []),
      (this.inner = []),
      ge(e).forEach((i) => {
        if (y.isError(i)) {
          this.errors.push(...i.errors);
          const a = i.inner.length ? i.inner : [i];
          this.inner.push(...a);
        } else this.errors.push(i);
      }),
      (this.message =
        this.errors.length > 1
          ? `${this.errors.length} errors occurred`
          : this.errors[0]);
  }
}
we = Symbol.hasInstance;
_e = Symbol.toStringTag;
class y extends Error {
  static formatError(e, t) {
    const r = t.label || t.path || "this";
    return (
      r !== t.path && (t = Object.assign({}, t, { path: r })),
      typeof e == "string"
        ? e.replace(et, (n, i) => F(t[i]))
        : typeof e == "function"
          ? e(t)
          : e
    );
  }
  static isError(e) {
    return e && e.name === "ValidationError";
  }
  constructor(e, t, r, n, i) {
    const a = new he(e, t, r, n);
    if (i) return a;
    super(),
      (this.value = void 0),
      (this.path = void 0),
      (this.type = void 0),
      (this.params = void 0),
      (this.errors = []),
      (this.inner = []),
      (this[_e] = "Error"),
      (this.name = a.name),
      (this.message = a.message),
      (this.type = a.type),
      (this.value = a.value),
      (this.path = a.path),
      (this.errors = a.errors),
      (this.inner = a.inner),
      Error.captureStackTrace && Error.captureStackTrace(this, y);
  }
  static [we](e) {
    return he[Symbol.hasInstance](e) || super[Symbol.hasInstance](e);
  }
}
let g = {
    default: "${path} is invalid",
    required: "${path} is a required field",
    defined: "${path} must be defined",
    notNull: "${path} cannot be null",
    oneOf: "${path} must be one of the following values: ${values}",
    notOneOf: "${path} must not be one of the following values: ${values}",
    notType: ({ path: s, type: e, value: t, originalValue: r }) => {
      const n =
        r != null && r !== t ? ` (cast from the value \`${F(r, !0)}\`).` : ".";
      return e !== "mixed"
        ? `${s} must be a \`${e}\` type, but the final value was: \`${F(t, !0)}\`` +
            n
        : `${s} must match the configured type. The validated value was: \`${F(t, !0)}\`` +
            n;
    },
  },
  m = {
    length: "${path} must be exactly ${length} characters",
    min: "${path} must be at least ${min} characters",
    max: "${path} must be at most ${max} characters",
    matches: '${path} must match the following: "${regex}"',
    email: "${path} must be a valid email",
    url: "${path} must be a valid URL",
    uuid: "${path} must be a valid UUID",
    datetime: "${path} must be a valid ISO date-time",
    datetime_precision:
      "${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",
    datetime_offset:
      '${path} must be a valid ISO date-time with UTC "Z" timezone',
    trim: "${path} must be a trimmed string",
    lowercase: "${path} must be a lowercase string",
    uppercase: "${path} must be a upper case string",
  },
  tt = {
    min: "${path} must be greater than or equal to ${min}",
    max: "${path} must be less than or equal to ${max}",
    lessThan: "${path} must be less than ${less}",
    moreThan: "${path} must be greater than ${more}",
    positive: "${path} must be a positive number",
    negative: "${path} must be a negative number",
    integer: "${path} must be an integer",
  },
  K = {
    min: "${path} field must be later than ${min}",
    max: "${path} field must be at earlier than ${max}",
  },
  rt = { isValue: "${path} field must be ${value}" },
  J = { noUnknown: "${path} field has unspecified keys: ${unknown}" },
  st = {
    min: "${path} field must have at least ${min} items",
    max: "${path} field must have less than or equal to ${max} items",
    length: "${path} must have ${length} items",
  },
  nt = {
    notType: (s) => {
      const { path: e, value: t, spec: r } = s,
        n = r.types.length;
      if (Array.isArray(t)) {
        if (t.length < n)
          return `${e} tuple value has too few items, expected a length of ${n} but got ${t.length} for value: \`${F(t, !0)}\``;
        if (t.length > n)
          return `${e} tuple value has too many items, expected a length of ${n} but got ${t.length} for value: \`${F(t, !0)}\``;
      }
      return y.formatError(g.notType, s);
    },
  };
Object.assign(Object.create(null), {
  mixed: g,
  string: m,
  number: tt,
  date: K,
  object: J,
  array: st,
  boolean: rt,
  tuple: nt,
});
const re = (s) => s && s.__isYupSchema__;
class I {
  static fromOptions(e, t) {
    if (!t.then && !t.otherwise)
      throw new TypeError(
        "either `then:` or `otherwise:` is required for `when()` conditions",
      );
    let { is: r, then: n, otherwise: i } = t,
      a = typeof r == "function" ? r : (...u) => u.every((l) => l === r);
    return new I(e, (u, l) => {
      var o;
      let f = a(...u) ? n : i;
      return (o = f == null ? void 0 : f(l)) != null ? o : l;
    });
  }
  constructor(e, t) {
    (this.fn = void 0), (this.refs = e), (this.refs = e), (this.fn = t);
  }
  resolve(e, t) {
    let r = this.refs.map((i) =>
        i.getValue(
          t == null ? void 0 : t.value,
          t == null ? void 0 : t.parent,
          t == null ? void 0 : t.context,
        ),
      ),
      n = this.fn(r, e, t);
    if (n === void 0 || n === e) return e;
    if (!re(n)) throw new TypeError("conditions must return a schema object");
    return n.resolve(t);
  }
}
const N = { context: "$", value: "." };
class T {
  constructor(e, t = {}) {
    if (
      ((this.key = void 0),
      (this.isContext = void 0),
      (this.isValue = void 0),
      (this.isSibling = void 0),
      (this.path = void 0),
      (this.getter = void 0),
      (this.map = void 0),
      typeof e != "string")
    )
      throw new TypeError("ref must be a string, got: " + e);
    if (((this.key = e.trim()), e === ""))
      throw new TypeError("ref must be a non-empty string");
    (this.isContext = this.key[0] === N.context),
      (this.isValue = this.key[0] === N.value),
      (this.isSibling = !this.isContext && !this.isValue);
    let r = this.isContext ? N.context : this.isValue ? N.value : "";
    (this.path = this.key.slice(r.length)),
      (this.getter = this.path && S.getter(this.path, !0)),
      (this.map = t.map);
  }
  getValue(e, t, r) {
    let n = this.isContext ? r : this.isValue ? e : t;
    return (
      this.getter && (n = this.getter(n || {})),
      this.map && (n = this.map(n)),
      n
    );
  }
  cast(e, t) {
    return this.getValue(
      e,
      t == null ? void 0 : t.parent,
      t == null ? void 0 : t.context,
    );
  }
  resolve() {
    return this;
  }
  describe() {
    return { type: "ref", key: this.key };
  }
  toString() {
    return `Ref(${this.key})`;
  }
  static isRef(e) {
    return e && e.__isYupRef;
  }
}
T.prototype.__isYupRef = !0;
const O = (s) => s == null;
function D(s) {
  function e(
    { value: t, path: r = "", options: n, originalValue: i, schema: a },
    u,
    l,
  ) {
    const { name: o, test: f, params: c, message: h, skipAbsent: p } = s;
    let {
      parent: b,
      context: x,
      abortEarly: _ = a.spec.abortEarly,
      disableStackTrace: C = a.spec.disableStackTrace,
    } = n;
    function E(d) {
      return T.isRef(d) ? d.getValue(t, b, x) : d;
    }
    function se(d = {}) {
      const $ = Object.assign(
        {
          value: t,
          originalValue: i,
          label: a.spec.label,
          path: d.path || r,
          spec: a.spec,
          disableStackTrace: d.disableStackTrace || C,
        },
        c,
        d.params,
      );
      for (const ue of Object.keys($)) $[ue] = E($[ue]);
      const ae = new y(
        y.formatError(d.message || h, $),
        t,
        $.path,
        d.type || o,
        $.disableStackTrace,
      );
      return (ae.params = $), ae;
    }
    const U = _ ? u : l;
    let Z = {
      path: r,
      parent: b,
      type: o,
      from: n.from,
      createError: se,
      resolve: E,
      options: n,
      originalValue: i,
      schema: a,
    };
    const q = (d) => {
        y.isError(d) ? U(d) : d ? l(null) : U(se());
      },
      ne = (d) => {
        y.isError(d) ? U(d) : u(d);
      };
    if (p && O(t)) return q(!0);
    let j;
    try {
      var ie;
      if (
        ((j = f.call(Z, t, Z)),
        typeof ((ie = j) == null ? void 0 : ie.then) == "function")
      ) {
        if (n.sync)
          throw new Error(
            `Validation test of type: "${Z.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`,
          );
        return Promise.resolve(j).then(q, ne);
      }
    } catch (d) {
      ne(d);
      return;
    }
    q(j);
  }
  return (e.OPTIONS = s), e;
}
function it(s, e, t, r = t) {
  let n, i, a;
  return e
    ? (S.forEach(e, (u, l, o) => {
        let f = l ? u.slice(1, u.length - 1) : u;
        s = s.resolve({ context: r, parent: n, value: t });
        let c = s.type === "tuple",
          h = o ? parseInt(f, 10) : 0;
        if (s.innerType || c) {
          if (c && !o)
            throw new Error(
              `Yup.reach cannot implicitly index into a tuple type. the path part "${a}" must contain an index to the tuple element, e.g. "${a}[0]"`,
            );
          if (t && h >= t.length)
            throw new Error(
              `Yup.reach cannot resolve an array item at index: ${u}, in the path: ${e}. because there is no value at that index. `,
            );
          (n = t), (t = t && t[h]), (s = c ? s.spec.types[h] : s.innerType);
        }
        if (!o) {
          if (!s.fields || !s.fields[f])
            throw new Error(
              `The schema does not contain the path: ${e}. (failed at: ${a} which is a type: "${s.type}")`,
            );
          (n = t), (t = t && t[f]), (s = s.fields[f]);
        }
        (i = f), (a = l ? "[" + u + "]" : "." + u);
      }),
      { schema: s, parent: n, parentPath: i })
    : { parent: n, parentPath: e, schema: s };
}
class R extends Set {
  describe() {
    const e = [];
    for (const t of this.values()) e.push(T.isRef(t) ? t.describe() : t);
    return e;
  }
  resolveAll(e) {
    let t = [];
    for (const r of this.values()) t.push(e(r));
    return t;
  }
  clone() {
    return new R(this.values());
  }
  merge(e, t) {
    const r = this.clone();
    return e.forEach((n) => r.add(n)), t.forEach((n) => r.delete(n)), r;
  }
}
function A(s, e = new Map()) {
  if (re(s) || !s || typeof s != "object") return s;
  if (e.has(s)) return e.get(s);
  let t;
  if (s instanceof Date) (t = new Date(s.getTime())), e.set(s, t);
  else if (s instanceof RegExp) (t = new RegExp(s)), e.set(s, t);
  else if (Array.isArray(s)) {
    (t = new Array(s.length)), e.set(s, t);
    for (let r = 0; r < s.length; r++) t[r] = A(s[r], e);
  } else if (s instanceof Map) {
    (t = new Map()), e.set(s, t);
    for (const [r, n] of s.entries()) t.set(r, A(n, e));
  } else if (s instanceof Set) {
    (t = new Set()), e.set(s, t);
    for (const r of s) t.add(A(r, e));
  } else if (s instanceof Object) {
    (t = {}), e.set(s, t);
    for (const [r, n] of Object.entries(s)) t[r] = A(n, e);
  } else throw Error(`Unable to clone ${s}`);
  return t;
}
class v {
  constructor(e) {
    (this.type = void 0),
      (this.deps = []),
      (this.tests = void 0),
      (this.transforms = void 0),
      (this.conditions = []),
      (this._mutate = void 0),
      (this.internalTests = {}),
      (this._whitelist = new R()),
      (this._blacklist = new R()),
      (this.exclusiveTests = Object.create(null)),
      (this._typeCheck = void 0),
      (this.spec = void 0),
      (this.tests = []),
      (this.transforms = []),
      this.withMutation(() => {
        this.typeError(g.notType);
      }),
      (this.type = e.type),
      (this._typeCheck = e.check),
      (this.spec = Object.assign(
        {
          strip: !1,
          strict: !1,
          abortEarly: !0,
          recursive: !0,
          disableStackTrace: !1,
          nullable: !1,
          optional: !0,
          coerce: !0,
        },
        e == null ? void 0 : e.spec,
      )),
      this.withMutation((t) => {
        t.nonNullable();
      });
  }
  get _type() {
    return this.type;
  }
  clone(e) {
    if (this._mutate) return e && Object.assign(this.spec, e), this;
    const t = Object.create(Object.getPrototypeOf(this));
    return (
      (t.type = this.type),
      (t._typeCheck = this._typeCheck),
      (t._whitelist = this._whitelist.clone()),
      (t._blacklist = this._blacklist.clone()),
      (t.internalTests = Object.assign({}, this.internalTests)),
      (t.exclusiveTests = Object.assign({}, this.exclusiveTests)),
      (t.deps = [...this.deps]),
      (t.conditions = [...this.conditions]),
      (t.tests = [...this.tests]),
      (t.transforms = [...this.transforms]),
      (t.spec = A(Object.assign({}, this.spec, e))),
      t
    );
  }
  label(e) {
    let t = this.clone();
    return (t.spec.label = e), t;
  }
  meta(...e) {
    if (e.length === 0) return this.spec.meta;
    let t = this.clone();
    return (t.spec.meta = Object.assign(t.spec.meta || {}, e[0])), t;
  }
  withMutation(e) {
    let t = this._mutate;
    this._mutate = !0;
    let r = e(this);
    return (this._mutate = t), r;
  }
  concat(e) {
    if (!e || e === this) return this;
    if (e.type !== this.type && this.type !== "mixed")
      throw new TypeError(
        `You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`,
      );
    let t = this,
      r = e.clone();
    const n = Object.assign({}, t.spec, r.spec);
    return (
      (r.spec = n),
      (r.internalTests = Object.assign({}, t.internalTests, r.internalTests)),
      (r._whitelist = t._whitelist.merge(e._whitelist, e._blacklist)),
      (r._blacklist = t._blacklist.merge(e._blacklist, e._whitelist)),
      (r.tests = t.tests),
      (r.exclusiveTests = t.exclusiveTests),
      r.withMutation((i) => {
        e.tests.forEach((a) => {
          i.test(a.OPTIONS);
        });
      }),
      (r.transforms = [...t.transforms, ...r.transforms]),
      r
    );
  }
  isType(e) {
    return e == null
      ? !!(
          (this.spec.nullable && e === null) ||
          (this.spec.optional && e === void 0)
        )
      : this._typeCheck(e);
  }
  resolve(e) {
    let t = this;
    if (t.conditions.length) {
      let r = t.conditions;
      (t = t.clone()),
        (t.conditions = []),
        (t = r.reduce((n, i) => i.resolve(n, e), t)),
        (t = t.resolve(e));
    }
    return t;
  }
  resolveOptions(e) {
    var t, r, n, i;
    return Object.assign({}, e, {
      from: e.from || [],
      strict: (t = e.strict) != null ? t : this.spec.strict,
      abortEarly: (r = e.abortEarly) != null ? r : this.spec.abortEarly,
      recursive: (n = e.recursive) != null ? n : this.spec.recursive,
      disableStackTrace:
        (i = e.disableStackTrace) != null ? i : this.spec.disableStackTrace,
    });
  }
  cast(e, t = {}) {
    let r = this.resolve(Object.assign({ value: e }, t)),
      n = t.assert === "ignore-optionality",
      i = r._cast(e, t);
    if (t.assert !== !1 && !r.isType(i)) {
      if (n && O(i)) return i;
      let a = F(e),
        u = F(i);
      throw new TypeError(
        `The value of ${t.path || "field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${a} 
` + (u !== a ? `result of cast: ${u}` : ""),
      );
    }
    return i;
  }
  _cast(e, t) {
    let r =
      e === void 0
        ? e
        : this.transforms.reduce((n, i) => i.call(this, n, e, this), e);
    return r === void 0 && (r = this.getDefault(t)), r;
  }
  _validate(e, t = {}, r, n) {
    let { path: i, originalValue: a = e, strict: u = this.spec.strict } = t,
      l = e;
    u || (l = this._cast(l, Object.assign({ assert: !1 }, t)));
    let o = [];
    for (let f of Object.values(this.internalTests)) f && o.push(f);
    this.runTests(
      { path: i, value: l, originalValue: a, options: t, tests: o },
      r,
      (f) => {
        if (f.length) return n(f, l);
        this.runTests(
          {
            path: i,
            value: l,
            originalValue: a,
            options: t,
            tests: this.tests,
          },
          r,
          n,
        );
      },
    );
  }
  runTests(e, t, r) {
    let n = !1,
      { tests: i, value: a, originalValue: u, path: l, options: o } = e,
      f = (x) => {
        n || ((n = !0), t(x, a));
      },
      c = (x) => {
        n || ((n = !0), r(x, a));
      },
      h = i.length,
      p = [];
    if (!h) return c([]);
    let b = { value: a, originalValue: u, path: l, options: o, schema: this };
    for (let x = 0; x < i.length; x++) {
      const _ = i[x];
      _(b, f, function (E) {
        E && (Array.isArray(E) ? p.push(...E) : p.push(E)), --h <= 0 && c(p);
      });
    }
  }
  asNestedTest({
    key: e,
    index: t,
    parent: r,
    parentPath: n,
    originalParent: i,
    options: a,
  }) {
    const u = e ?? t;
    if (u == null)
      throw TypeError("Must include `key` or `index` for nested validations");
    const l = typeof u == "number";
    let o = r[u];
    const f = Object.assign({}, a, {
      strict: !0,
      parent: r,
      value: o,
      originalValue: i[u],
      key: void 0,
      [l ? "index" : "key"]: u,
      path:
        l || u.includes(".")
          ? `${n || ""}[${l ? u : `"${u}"`}]`
          : (n ? `${n}.` : "") + e,
    });
    return (c, h, p) => this.resolve(f)._validate(o, f, h, p);
  }
  validate(e, t) {
    var r;
    let n = this.resolve(Object.assign({}, t, { value: e })),
      i =
        (r = t == null ? void 0 : t.disableStackTrace) != null
          ? r
          : n.spec.disableStackTrace;
    return new Promise((a, u) =>
      n._validate(
        e,
        t,
        (l, o) => {
          y.isError(l) && (l.value = o), u(l);
        },
        (l, o) => {
          l.length ? u(new y(l, o, void 0, void 0, i)) : a(o);
        },
      ),
    );
  }
  validateSync(e, t) {
    var r;
    let n = this.resolve(Object.assign({}, t, { value: e })),
      i,
      a =
        (r = t == null ? void 0 : t.disableStackTrace) != null
          ? r
          : n.spec.disableStackTrace;
    return (
      n._validate(
        e,
        Object.assign({}, t, { sync: !0 }),
        (u, l) => {
          throw (y.isError(u) && (u.value = l), u);
        },
        (u, l) => {
          if (u.length) throw new y(u, e, void 0, void 0, a);
          i = l;
        },
      ),
      i
    );
  }
  isValid(e, t) {
    return this.validate(e, t).then(
      () => !0,
      (r) => {
        if (y.isError(r)) return !1;
        throw r;
      },
    );
  }
  isValidSync(e, t) {
    try {
      return this.validateSync(e, t), !0;
    } catch (r) {
      if (y.isError(r)) return !1;
      throw r;
    }
  }
  _getDefault(e) {
    let t = this.spec.default;
    return t == null ? t : typeof t == "function" ? t.call(this, e) : A(t);
  }
  getDefault(e) {
    return this.resolve(e || {})._getDefault(e);
  }
  default(e) {
    return arguments.length === 0
      ? this._getDefault()
      : this.clone({ default: e });
  }
  strict(e = !0) {
    return this.clone({ strict: e });
  }
  nullability(e, t) {
    const r = this.clone({ nullable: e });
    return (
      (r.internalTests.nullable = D({
        message: t,
        name: "nullable",
        test(n) {
          return n === null ? this.schema.spec.nullable : !0;
        },
      })),
      r
    );
  }
  optionality(e, t) {
    const r = this.clone({ optional: e });
    return (
      (r.internalTests.optionality = D({
        message: t,
        name: "optionality",
        test(n) {
          return n === void 0 ? this.schema.spec.optional : !0;
        },
      })),
      r
    );
  }
  optional() {
    return this.optionality(!0);
  }
  defined(e = g.defined) {
    return this.optionality(!1, e);
  }
  nullable() {
    return this.nullability(!0);
  }
  nonNullable(e = g.notNull) {
    return this.nullability(!1, e);
  }
  required(e = g.required) {
    return this.clone().withMutation((t) => t.nonNullable(e).defined(e));
  }
  notRequired() {
    return this.clone().withMutation((e) => e.nullable().optional());
  }
  transform(e) {
    let t = this.clone();
    return t.transforms.push(e), t;
  }
  test(...e) {
    let t;
    if (
      (e.length === 1
        ? typeof e[0] == "function"
          ? (t = { test: e[0] })
          : (t = e[0])
        : e.length === 2
          ? (t = { name: e[0], test: e[1] })
          : (t = { name: e[0], message: e[1], test: e[2] }),
      t.message === void 0 && (t.message = g.default),
      typeof t.test != "function")
    )
      throw new TypeError("`test` is a required parameters");
    let r = this.clone(),
      n = D(t),
      i = t.exclusive || (t.name && r.exclusiveTests[t.name] === !0);
    if (t.exclusive && !t.name)
      throw new TypeError(
        "Exclusive tests must provide a unique `name` identifying the test",
      );
    return (
      t.name && (r.exclusiveTests[t.name] = !!t.exclusive),
      (r.tests = r.tests.filter(
        (a) =>
          !(
            a.OPTIONS.name === t.name &&
            (i || a.OPTIONS.test === n.OPTIONS.test)
          ),
      )),
      r.tests.push(n),
      r
    );
  }
  when(e, t) {
    !Array.isArray(e) && typeof e != "string" && ((t = e), (e = "."));
    let r = this.clone(),
      n = ge(e).map((i) => new T(i));
    return (
      n.forEach((i) => {
        i.isSibling && r.deps.push(i.key);
      }),
      r.conditions.push(
        typeof t == "function" ? new I(n, t) : I.fromOptions(n, t),
      ),
      r
    );
  }
  typeError(e) {
    let t = this.clone();
    return (
      (t.internalTests.typeError = D({
        message: e,
        name: "typeError",
        skipAbsent: !0,
        test(r) {
          return this.schema._typeCheck(r)
            ? !0
            : this.createError({ params: { type: this.schema.type } });
        },
      })),
      t
    );
  }
  oneOf(e, t = g.oneOf) {
    let r = this.clone();
    return (
      e.forEach((n) => {
        r._whitelist.add(n), r._blacklist.delete(n);
      }),
      (r.internalTests.whiteList = D({
        message: t,
        name: "oneOf",
        skipAbsent: !0,
        test(n) {
          let i = this.schema._whitelist,
            a = i.resolveAll(this.resolve);
          return a.includes(n)
            ? !0
            : this.createError({
                params: { values: Array.from(i).join(", "), resolved: a },
              });
        },
      })),
      r
    );
  }
  notOneOf(e, t = g.notOneOf) {
    let r = this.clone();
    return (
      e.forEach((n) => {
        r._blacklist.add(n), r._whitelist.delete(n);
      }),
      (r.internalTests.blacklist = D({
        message: t,
        name: "notOneOf",
        test(n) {
          let i = this.schema._blacklist,
            a = i.resolveAll(this.resolve);
          return a.includes(n)
            ? this.createError({
                params: { values: Array.from(i).join(", "), resolved: a },
              })
            : !0;
        },
      })),
      r
    );
  }
  strip(e = !0) {
    let t = this.clone();
    return (t.spec.strip = e), t;
  }
  describe(e) {
    const t = (e ? this.resolve(e) : this).clone(),
      { label: r, meta: n, optional: i, nullable: a } = t.spec;
    return {
      meta: n,
      label: r,
      optional: i,
      nullable: a,
      default: t.getDefault(e),
      type: t.type,
      oneOf: t._whitelist.describe(),
      notOneOf: t._blacklist.describe(),
      tests: t.tests
        .map((l) => ({ name: l.OPTIONS.name, params: l.OPTIONS.params }))
        .filter((l, o, f) => f.findIndex((c) => c.name === l.name) === o),
    };
  }
}
v.prototype.__isYupSchema__ = !0;
for (const s of ["validate", "validateSync"])
  v.prototype[`${s}At`] = function (e, t, r = {}) {
    const { parent: n, parentPath: i, schema: a } = it(this, e, t, r.context);
    return a[s](n && n[i], Object.assign({}, r, { parent: n, path: e }));
  };
for (const s of ["equals", "is"]) v.prototype[s] = v.prototype.oneOf;
for (const s of ["not", "nope"]) v.prototype[s] = v.prototype.notOneOf;
const at =
  /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function ut(s) {
  const e = B(s);
  if (!e) return Date.parse ? Date.parse(s) : Number.NaN;
  if (e.z === void 0 && e.plusMinus === void 0)
    return new Date(
      e.year,
      e.month,
      e.day,
      e.hour,
      e.minute,
      e.second,
      e.millisecond,
    ).valueOf();
  let t = 0;
  return (
    e.z !== "Z" &&
      e.plusMinus !== void 0 &&
      ((t = e.hourOffset * 60 + e.minuteOffset),
      e.plusMinus === "+" && (t = 0 - t)),
    Date.UTC(
      e.year,
      e.month,
      e.day,
      e.hour,
      e.minute + t,
      e.second,
      e.millisecond,
    )
  );
}
function B(s) {
  var e, t;
  const r = at.exec(s);
  return r
    ? {
        year: w(r[1]),
        month: w(r[2], 1) - 1,
        day: w(r[3], 1),
        hour: w(r[4]),
        minute: w(r[5]),
        second: w(r[6]),
        millisecond: r[7] ? w(r[7].substring(0, 3)) : 0,
        precision:
          (e = (t = r[7]) == null ? void 0 : t.length) != null ? e : void 0,
        z: r[8] || void 0,
        plusMinus: r[9] || void 0,
        hourOffset: w(r[10]),
        minuteOffset: w(r[11]),
      }
    : null;
}
function w(s, e = 0) {
  return Number(s) || e;
}
let lt =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  ot =
    /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
  ft =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
  ct = "^\\d{4}-\\d{2}-\\d{2}",
  ht = "\\d{2}:\\d{2}:\\d{2}",
  dt = "(([+-]\\d{2}(:?\\d{2})?)|Z)",
  pt = new RegExp(`${ct}T${ht}(\\.\\d+)?${dt}$`),
  mt = (s) => O(s) || s === s.trim(),
  yt = {}.toString();
function xt() {
  return new Fe();
}
class Fe extends v {
  constructor() {
    super({
      type: "string",
      check(e) {
        return e instanceof String && (e = e.valueOf()), typeof e == "string";
      },
    }),
      this.withMutation(() => {
        this.transform((e, t, r) => {
          if (!r.spec.coerce || r.isType(e) || Array.isArray(e)) return e;
          const n = e != null && e.toString ? e.toString() : e;
          return n === yt ? e : n;
        });
      });
  }
  required(e) {
    return super
      .required(e)
      .withMutation((t) =>
        t.test({
          message: e || g.required,
          name: "required",
          skipAbsent: !0,
          test: (r) => !!r.length,
        }),
      );
  }
  notRequired() {
    return super
      .notRequired()
      .withMutation(
        (e) => (
          (e.tests = e.tests.filter((t) => t.OPTIONS.name !== "required")), e
        ),
      );
  }
  length(e, t = m.length) {
    return this.test({
      message: t,
      name: "length",
      exclusive: !0,
      params: { length: e },
      skipAbsent: !0,
      test(r) {
        return r.length === this.resolve(e);
      },
    });
  }
  min(e, t = m.min) {
    return this.test({
      message: t,
      name: "min",
      exclusive: !0,
      params: { min: e },
      skipAbsent: !0,
      test(r) {
        return r.length >= this.resolve(e);
      },
    });
  }
  max(e, t = m.max) {
    return this.test({
      name: "max",
      exclusive: !0,
      message: t,
      params: { max: e },
      skipAbsent: !0,
      test(r) {
        return r.length <= this.resolve(e);
      },
    });
  }
  matches(e, t) {
    let r = !1,
      n,
      i;
    return (
      t &&
        (typeof t == "object"
          ? ({ excludeEmptyString: r = !1, message: n, name: i } = t)
          : (n = t)),
      this.test({
        name: i || "matches",
        message: n || m.matches,
        params: { regex: e },
        skipAbsent: !0,
        test: (a) => (a === "" && r) || a.search(e) !== -1,
      })
    );
  }
  email(e = m.email) {
    return this.matches(lt, {
      name: "email",
      message: e,
      excludeEmptyString: !0,
    });
  }
  url(e = m.url) {
    return this.matches(ot, {
      name: "url",
      message: e,
      excludeEmptyString: !0,
    });
  }
  uuid(e = m.uuid) {
    return this.matches(ft, {
      name: "uuid",
      message: e,
      excludeEmptyString: !1,
    });
  }
  datetime(e) {
    let t = "",
      r,
      n;
    return (
      e &&
        (typeof e == "object"
          ? ({
              message: t = "",
              allowOffset: r = !1,
              precision: n = void 0,
            } = e)
          : (t = e)),
      this.matches(pt, {
        name: "datetime",
        message: t || m.datetime,
        excludeEmptyString: !0,
      })
        .test({
          name: "datetime_offset",
          message: t || m.datetime_offset,
          params: { allowOffset: r },
          skipAbsent: !0,
          test: (i) => {
            if (!i || r) return !0;
            const a = B(i);
            return a ? !!a.z : !1;
          },
        })
        .test({
          name: "datetime_precision",
          message: t || m.datetime_precision,
          params: { precision: n },
          skipAbsent: !0,
          test: (i) => {
            if (!i || n == null) return !0;
            const a = B(i);
            return a ? a.precision === n : !1;
          },
        })
    );
  }
  ensure() {
    return this.default("").transform((e) => (e === null ? "" : e));
  }
  trim(e = m.trim) {
    return this.transform((t) => (t != null ? t.trim() : t)).test({
      message: e,
      name: "trim",
      test: mt,
    });
  }
  lowercase(e = m.lowercase) {
    return this.transform((t) => (O(t) ? t : t.toLowerCase())).test({
      message: e,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (t) => O(t) || t === t.toLowerCase(),
    });
  }
  uppercase(e = m.uppercase) {
    return this.transform((t) => (O(t) ? t : t.toUpperCase())).test({
      message: e,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (t) => O(t) || t === t.toUpperCase(),
    });
  }
}
xt.prototype = Fe.prototype;
let bt = new Date(""),
  gt = (s) => Object.prototype.toString.call(s) === "[object Date]";
class P extends v {
  constructor() {
    super({
      type: "date",
      check(e) {
        return gt(e) && !isNaN(e.getTime());
      },
    }),
      this.withMutation(() => {
        this.transform((e, t, r) =>
          !r.spec.coerce || r.isType(e) || e === null
            ? e
            : ((e = ut(e)), isNaN(e) ? P.INVALID_DATE : new Date(e)),
        );
      });
  }
  prepareParam(e, t) {
    let r;
    if (T.isRef(e)) r = e;
    else {
      let n = this.cast(e);
      if (!this._typeCheck(n))
        throw new TypeError(
          `\`${t}\` must be a Date or a value that can be \`cast()\` to a Date`,
        );
      r = n;
    }
    return r;
  }
  min(e, t = K.min) {
    let r = this.prepareParam(e, "min");
    return this.test({
      message: t,
      name: "min",
      exclusive: !0,
      params: { min: e },
      skipAbsent: !0,
      test(n) {
        return n >= this.resolve(r);
      },
    });
  }
  max(e, t = K.max) {
    let r = this.prepareParam(e, "max");
    return this.test({
      message: t,
      name: "max",
      exclusive: !0,
      params: { max: e },
      skipAbsent: !0,
      test(n) {
        return n <= this.resolve(r);
      },
    });
  }
}
P.INVALID_DATE = bt;
P.prototype;
function vt(s, e = []) {
  let t = [],
    r = new Set(),
    n = new Set(e.map(([a, u]) => `${a}-${u}`));
  function i(a, u) {
    let l = S.split(a)[0];
    r.add(l), n.has(`${u}-${l}`) || t.push([u, l]);
  }
  for (const a of Object.keys(s)) {
    let u = s[a];
    r.add(a),
      T.isRef(u) && u.isSibling
        ? i(u.path, a)
        : re(u) && "deps" in u && u.deps.forEach((l) => i(l, a));
  }
  return Xe.array(Array.from(r), t).reverse();
}
function de(s, e) {
  let t = 1 / 0;
  return (
    s.some((r, n) => {
      var i;
      if ((i = e.path) != null && i.includes(r)) return (t = n), !0;
    }),
    t
  );
}
function Ee(s) {
  return (e, t) => de(s, e) - de(s, t);
}
const wt = (s, e, t) => {
  if (typeof s != "string") return s;
  let r = s;
  try {
    r = JSON.parse(s);
  } catch {}
  return t.isType(r) ? r : s;
};
function z(s) {
  if ("fields" in s) {
    const e = {};
    for (const [t, r] of Object.entries(s.fields)) e[t] = z(r);
    return s.setFields(e);
  }
  if (s.type === "array") {
    const e = s.optional();
    return e.innerType && (e.innerType = z(e.innerType)), e;
  }
  return s.type === "tuple"
    ? s.optional().clone({ types: s.spec.types.map(z) })
    : "optional" in s
      ? s.optional()
      : s;
}
const _t = (s, e) => {
  const t = [...S.normalizePath(e)];
  if (t.length === 1) return t[0] in s;
  let r = t.pop(),
    n = S.getter(S.join(t), !0)(s);
  return !!(n && r in n);
};
let pe = (s) => Object.prototype.toString.call(s) === "[object Object]";
function Ft(s, e) {
  let t = Object.keys(s.fields);
  return Object.keys(e).filter((r) => t.indexOf(r) === -1);
}
const Et = Ee([]);
function $t(s) {
  return new $e(s);
}
class $e extends v {
  constructor(e) {
    super({
      type: "object",
      check(t) {
        return pe(t) || typeof t == "function";
      },
    }),
      (this.fields = Object.create(null)),
      (this._sortErrors = Et),
      (this._nodes = []),
      (this._excludedEdges = []),
      this.withMutation(() => {
        e && this.shape(e);
      });
  }
  _cast(e, t = {}) {
    var r;
    let n = super._cast(e, t);
    if (n === void 0) return this.getDefault(t);
    if (!this._typeCheck(n)) return n;
    let i = this.fields,
      a = (r = t.stripUnknown) != null ? r : this.spec.noUnknown,
      u = [].concat(
        this._nodes,
        Object.keys(n).filter((c) => !this._nodes.includes(c)),
      ),
      l = {},
      o = Object.assign({}, t, {
        parent: l,
        __validating: t.__validating || !1,
      }),
      f = !1;
    for (const c of u) {
      let h = i[c],
        p = c in n;
      if (h) {
        let b,
          x = n[c];
        (o.path = (t.path ? `${t.path}.` : "") + c),
          (h = h.resolve({ value: x, context: t.context, parent: l }));
        let _ = h instanceof v ? h.spec : void 0,
          C = _ == null ? void 0 : _.strict;
        if (_ != null && _.strip) {
          f = f || c in n;
          continue;
        }
        (b = !t.__validating || !C ? h.cast(n[c], o) : n[c]),
          b !== void 0 && (l[c] = b);
      } else p && !a && (l[c] = n[c]);
      (p !== c in l || l[c] !== n[c]) && (f = !0);
    }
    return f ? l : n;
  }
  _validate(e, t = {}, r, n) {
    let {
      from: i = [],
      originalValue: a = e,
      recursive: u = this.spec.recursive,
    } = t;
    (t.from = [{ schema: this, value: a }, ...i]),
      (t.__validating = !0),
      (t.originalValue = a),
      super._validate(e, t, r, (l, o) => {
        if (!u || !pe(o)) {
          n(l, o);
          return;
        }
        a = a || o;
        let f = [];
        for (let c of this._nodes) {
          let h = this.fields[c];
          !h ||
            T.isRef(h) ||
            f.push(
              h.asNestedTest({
                options: t,
                key: c,
                parent: o,
                parentPath: t.path,
                originalParent: a,
              }),
            );
        }
        this.runTests(
          { tests: f, value: o, originalValue: a, options: t },
          r,
          (c) => {
            n(c.sort(this._sortErrors).concat(l), o);
          },
        );
      });
  }
  clone(e) {
    const t = super.clone(e);
    return (
      (t.fields = Object.assign({}, this.fields)),
      (t._nodes = this._nodes),
      (t._excludedEdges = this._excludedEdges),
      (t._sortErrors = this._sortErrors),
      t
    );
  }
  concat(e) {
    let t = super.concat(e),
      r = t.fields;
    for (let [n, i] of Object.entries(this.fields)) {
      const a = r[n];
      r[n] = a === void 0 ? i : a;
    }
    return t.withMutation((n) =>
      n.setFields(r, [...this._excludedEdges, ...e._excludedEdges]),
    );
  }
  _getDefault(e) {
    if ("default" in this.spec) return super._getDefault(e);
    if (!this._nodes.length) return;
    let t = {};
    return (
      this._nodes.forEach((r) => {
        var n;
        const i = this.fields[r];
        let a = e;
        (n = a) != null &&
          n.value &&
          (a = Object.assign({}, a, { parent: a.value, value: a.value[r] })),
          (t[r] = i && "getDefault" in i ? i.getDefault(a) : void 0);
      }),
      t
    );
  }
  setFields(e, t) {
    let r = this.clone();
    return (
      (r.fields = e),
      (r._nodes = vt(e, t)),
      (r._sortErrors = Ee(Object.keys(e))),
      t && (r._excludedEdges = t),
      r
    );
  }
  shape(e, t = []) {
    return this.clone().withMutation((r) => {
      let n = r._excludedEdges;
      return (
        t.length &&
          (Array.isArray(t[0]) || (t = [t]), (n = [...r._excludedEdges, ...t])),
        r.setFields(Object.assign(r.fields, e), n)
      );
    });
  }
  partial() {
    const e = {};
    for (const [t, r] of Object.entries(this.fields))
      e[t] =
        "optional" in r && r.optional instanceof Function ? r.optional() : r;
    return this.setFields(e);
  }
  deepPartial() {
    return z(this);
  }
  pick(e) {
    const t = {};
    for (const r of e) this.fields[r] && (t[r] = this.fields[r]);
    return this.setFields(
      t,
      this._excludedEdges.filter(([r, n]) => e.includes(r) && e.includes(n)),
    );
  }
  omit(e) {
    const t = [];
    for (const r of Object.keys(this.fields)) e.includes(r) || t.push(r);
    return this.pick(t);
  }
  from(e, t, r) {
    let n = S.getter(e, !0);
    return this.transform((i) => {
      if (!i) return i;
      let a = i;
      return (
        _t(i, e) &&
          ((a = Object.assign({}, i)), r || delete a[e], (a[t] = n(i))),
        a
      );
    });
  }
  json() {
    return this.transform(wt);
  }
  noUnknown(e = !0, t = J.noUnknown) {
    typeof e != "boolean" && ((t = e), (e = !0));
    let r = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: t,
      test(n) {
        if (n == null) return !0;
        const i = Ft(this.schema, n);
        return (
          !e ||
          i.length === 0 ||
          this.createError({ params: { unknown: i.join(", ") } })
        );
      },
    });
    return (r.spec.noUnknown = e), r;
  }
  unknown(e = !0, t = J.noUnknown) {
    return this.noUnknown(!e, t);
  }
  transformKeys(e) {
    return this.transform((t) => {
      if (!t) return t;
      const r = {};
      for (const n of Object.keys(t)) r[e(n)] = t[n];
      return r;
    });
  }
  camelCase() {
    return this.transformKeys(Y.camelCase);
  }
  snakeCase() {
    return this.transformKeys(Y.snakeCase);
  }
  constantCase() {
    return this.transformKeys((e) => Y.snakeCase(e).toUpperCase());
  }
  describe(e) {
    const t = (e ? this.resolve(e) : this).clone(),
      r = super.describe(e);
    r.fields = {};
    for (const [i, a] of Object.entries(t.fields)) {
      var n;
      let u = e;
      (n = u) != null &&
        n.value &&
        (u = Object.assign({}, u, { parent: u.value, value: u.value[i] })),
        (r.fields[i] = a.describe(u));
    }
    return r;
  }
}
$t.prototype = $e.prototype;
const me = (s, e, t) => {
    if (s && "reportValidity" in s) {
      const r = X(t, e);
      s.setCustomValidity((r && r.message) || ""), s.reportValidity();
    }
  },
  Oe = (s, e) => {
    for (const t in e.fields) {
      const r = e.fields[t];
      r && r.ref && "reportValidity" in r.ref
        ? me(r.ref, t, s)
        : r.refs && r.refs.forEach((n) => me(n, t, s));
    }
  },
  Ot = (s, e) => {
    e.shouldUseNativeValidation && Oe(s, e);
    const t = {};
    for (const r in s) {
      const n = X(e.fields, r),
        i = Object.assign(s[r] || {}, { ref: n && n.ref });
      if (St(e.names || Object.keys(s), r)) {
        const a = Object.assign({}, X(t, r));
        L(a, "root", i), L(t, r, a);
      } else L(t, r, i);
    }
    return t;
  },
  St = (s, e) => s.some((t) => t.startsWith(e + "."));
function At(s, e, t) {
  return (
    e === void 0 && (e = {}),
    t === void 0 && (t = {}),
    function (r, n, i) {
      try {
        return Promise.resolve(
          (function (a, u) {
            try {
              var l =
                (e.context,
                Promise.resolve(
                  s[t.mode === "sync" ? "validateSync" : "validate"](
                    r,
                    Object.assign({ abortEarly: !1 }, e, { context: n }),
                  ),
                ).then(function (o) {
                  return (
                    i.shouldUseNativeValidation && Oe({}, i),
                    { values: t.raw ? r : o, errors: {} }
                  );
                }));
            } catch (o) {
              return u(o);
            }
            return l && l.then ? l.then(void 0, u) : l;
          })(0, function (a) {
            if (!a.inner) throw a;
            return {
              values: {},
              errors: Ot(
                ((u = a),
                (l = !i.shouldUseNativeValidation && i.criteriaMode === "all"),
                (u.inner || []).reduce(function (o, f) {
                  if (
                    (o[f.path] ||
                      (o[f.path] = { message: f.message, type: f.type }),
                    l)
                  ) {
                    var c = o[f.path].types,
                      h = c && c[f.type];
                    o[f.path] = ke(
                      f.path,
                      l,
                      o,
                      f.type,
                      h ? [].concat(h, f.message) : f.message,
                    );
                  }
                  return o;
                }, {})),
                i,
              ),
            };
            var u, l;
          }),
        );
      } catch (a) {
        return Promise.reject(a);
      }
    }
  );
}
export { xt as a, $t as c, At as o };
