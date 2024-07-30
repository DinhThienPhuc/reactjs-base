import { R as nt, r as ur } from "./index-Cs7sjTYM.js";

var R = function () {
  return (
    (R =
      Object.assign ||
      function (r) {
        for (var e, n = 1, s = arguments.length; n < s; n++) {
          e = arguments[n];
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) && (r[o] = e[o]);
        }
        return r;
      }),
    R.apply(this, arguments)
  );
};
function st(t, r, e) {
  if (e || arguments.length === 2)
    for (var n = 0, s = r.length, o; n < s; n++)
      (o || !(n in r)) &&
        (o || (o = Array.prototype.slice.call(r, 0, n)), (o[n] = r[n]));
  return t.concat(o || Array.prototype.slice.call(r));
}
var v = "-ms-",
  et = "-moz-",
  h = "-webkit-",
  fr = "comm",
  wt = "rule",
  Mt = "decl",
  Wr = "@import",
  pr = "@keyframes",
  Hr = "@layer",
  hr = Math.abs,
  Yt = String.fromCharCode,
  Tt = Object.assign;
function qr(t, r) {
  return _(t, 0) ^ 45
    ? (((((((r << 2) ^ _(t, 0)) << 2) ^ _(t, 1)) << 2) ^ _(t, 2)) << 2) ^
        _(t, 3)
    : 0;
}
function dr(t) {
  return t.trim();
}
function D(t, r) {
  return (t = r.exec(t)) ? t[0] : t;
}
function u(t, r, e) {
  return t.replace(r, e);
}
function lt(t, r, e) {
  return t.indexOf(r, e);
}
function _(t, r) {
  return t.charCodeAt(r) | 0;
}
function H(t, r, e) {
  return t.slice(r, e);
}
function O(t) {
  return t.length;
}
function lr(t) {
  return t.length;
}
function rt(t, r) {
  return r.push(t), t;
}
function Kr(t, r) {
  return t.map(r).join("");
}
function Jt(t, r) {
  return t.filter(function (e) {
    return !D(e, r);
  });
}
var Ct = 1,
  q = 1,
  gr = 0,
  k = 0,
  I = 0,
  J = "";
function xt(t, r, e, n, s, o, a, i) {
  return {
    value: t,
    root: r,
    parent: e,
    type: n,
    props: s,
    children: o,
    line: Ct,
    column: q,
    length: a,
    return: "",
    siblings: i,
  };
}
function F(t, r) {
  return Tt(
    xt("", null, null, "", null, null, 0, t.siblings),
    t,
    { length: -t.length },
    r,
  );
}
function Y(t) {
  for (; t.root; ) t = F(t.root, { children: [t] });
  rt(t, t.siblings);
}
function Ur() {
  return I;
}
function Zr() {
  return (I = k > 0 ? _(J, --k) : 0), q--, I === 10 && ((q = 1), Ct--), I;
}
function N() {
  return (I = k < gr ? _(J, k++) : 0), q++, I === 10 && ((q = 1), Ct++), I;
}
function B() {
  return _(J, k);
}
function gt() {
  return k;
}
function At(t, r) {
  return H(J, t, r);
}
function Dt(t) {
  switch (t) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Jr(t) {
  return (Ct = q = 1), (gr = O((J = t))), (k = 0), [];
}
function Qr(t) {
  return (J = ""), t;
}
function Pt(t) {
  return dr(At(k - 1, jt(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function Vr(t) {
  for (; (I = B()) && I < 33; ) N();
  return Dt(t) > 2 || Dt(I) > 3 ? "" : " ";
}
function Xr(t, r) {
  for (
    ;
    --r &&
    N() &&
    !(I < 48 || I > 102 || (I > 57 && I < 65) || (I > 70 && I < 97));

  );
  return At(t, gt() + (r < 6 && B() == 32 && N() == 32));
}
function jt(t) {
  for (; N(); )
    switch (I) {
      case t:
        return k;
      case 34:
      case 39:
        t !== 34 && t !== 39 && jt(I);
        break;
      case 40:
        t === 41 && jt(t);
        break;
      case 92:
        N();
        break;
    }
  return k;
}
function te(t, r) {
  for (; N() && t + I !== 57; ) if (t + I === 84 && B() === 47) break;
  return "/*" + At(r, k - 1) + "*" + Yt(t === 47 ? t : N());
}
function re(t) {
  for (; !Dt(B()); ) N();
  return At(t, k);
}
function ee(t) {
  return Qr(mt("", null, null, null, [""], (t = Jr(t)), 0, [0], t));
}
function mt(t, r, e, n, s, o, a, i, c) {
  for (
    var p = 0,
      d = 0,
      g = a,
      m = 0,
      l = 0,
      S = 0,
      x = 1,
      $ = 1,
      A = 1,
      w = 0,
      b = "",
      C = s,
      E = o,
      y = n,
      f = b;
    $;

  )
    switch (((S = w), (w = N()))) {
      case 40:
        if (S != 108 && _(f, g - 1) == 58) {
          lt((f += u(Pt(w), "&", "&\f")), "&\f", hr(p ? i[p - 1] : 0)) != -1 &&
            (A = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        f += Pt(w);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        f += Vr(S);
        break;
      case 92:
        f += Xr(gt() - 1, 7);
        continue;
      case 47:
        switch (B()) {
          case 42:
          case 47:
            rt(ne(te(N(), gt()), r, e, c), c);
            break;
          default:
            f += "/";
        }
        break;
      case 123 * x:
        i[p++] = O(f) * A;
      case 125 * x:
      case 59:
      case 0:
        switch (w) {
          case 0:
          case 125:
            $ = 0;
          case 59 + d:
            A == -1 && (f = u(f, /\f/g, "")),
              l > 0 &&
                O(f) - g &&
                rt(
                  l > 32
                    ? Vt(f + ";", n, e, g - 1, c)
                    : Vt(u(f, " ", "") + ";", n, e, g - 2, c),
                  c,
                );
            break;
          case 59:
            f += ";";
          default:
            if (
              (rt(
                (y = Qt(f, r, e, p, d, s, i, b, (C = []), (E = []), g, o)),
                o,
              ),
              w === 123)
            )
              if (d === 0) mt(f, r, y, y, C, o, g, i, E);
              else
                switch (m === 99 && _(f, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    mt(
                      t,
                      y,
                      y,
                      n && rt(Qt(t, y, y, 0, 0, s, i, b, s, (C = []), g, E), E),
                      s,
                      E,
                      g,
                      i,
                      n ? C : E,
                    );
                    break;
                  default:
                    mt(f, y, y, y, [""], E, 0, i, E);
                }
        }
        (p = d = l = 0), (x = A = 1), (b = f = ""), (g = a);
        break;
      case 58:
        (g = 1 + O(f)), (l = S);
      default:
        if (x < 1) {
          if (w == 123) --x;
          else if (w == 125 && x++ == 0 && Zr() == 125) continue;
        }
        switch (((f += Yt(w)), w * x)) {
          case 38:
            A = d > 0 ? 1 : ((f += "\f"), -1);
            break;
          case 44:
            (i[p++] = (O(f) - 1) * A), (A = 1);
            break;
          case 64:
            B() === 45 && (f += Pt(N())),
              (m = B()),
              (d = g = O((b = f += re(gt())))),
              w++;
            break;
          case 45:
            S === 45 && O(f) == 2 && (x = 0);
        }
    }
  return o;
}
function Qt(t, r, e, n, s, o, a, i, c, p, d, g) {
  for (
    var m = s - 1, l = s === 0 ? o : [""], S = lr(l), x = 0, $ = 0, A = 0;
    x < n;
    ++x
  )
    for (var w = 0, b = H(t, m + 1, (m = hr(($ = a[x])))), C = t; w < S; ++w)
      (C = dr($ > 0 ? l[w] + " " + b : u(b, /&\f/g, l[w]))) && (c[A++] = C);
  return xt(t, r, e, s === 0 ? wt : i, c, p, d, g);
}
function ne(t, r, e, n) {
  return xt(t, r, e, fr, Yt(Ur()), H(t, 2, -2), 0, n);
}
function Vt(t, r, e, n, s) {
  return xt(t, r, e, Mt, H(t, 0, n), H(t, n + 1, -1), n, s);
}
function mr(t, r, e) {
  switch (qr(t, r)) {
    case 5103:
      return h + "print-" + t + t;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return h + t + t;
    case 4789:
      return et + t + t;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return h + t + et + t + v + t + t;
    case 5936:
      switch (_(t, r + 11)) {
        case 114:
          return h + t + v + u(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
        case 108:
          return h + t + v + u(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
        case 45:
          return h + t + v + u(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
      }
    case 6828:
    case 4268:
    case 2903:
      return h + t + v + t + t;
    case 6165:
      return h + t + v + "flex-" + t + t;
    case 5187:
      return (
        h + t + u(t, /(\w+).+(:[^]+)/, h + "box-$1$2" + v + "flex-$1$2") + t
      );
    case 5443:
      return (
        h +
        t +
        v +
        "flex-item-" +
        u(t, /flex-|-self/g, "") +
        (D(t, /flex-|baseline/)
          ? ""
          : v + "grid-row-" + u(t, /flex-|-self/g, "")) +
        t
      );
    case 4675:
      return (
        h +
        t +
        v +
        "flex-line-pack" +
        u(t, /align-content|flex-|-self/g, "") +
        t
      );
    case 5548:
      return h + t + v + u(t, "shrink", "negative") + t;
    case 5292:
      return h + t + v + u(t, "basis", "preferred-size") + t;
    case 6060:
      return (
        h +
        "box-" +
        u(t, "-grow", "") +
        h +
        t +
        v +
        u(t, "grow", "positive") +
        t
      );
    case 4554:
      return h + u(t, /([^-])(transform)/g, "$1" + h + "$2") + t;
    case 6187:
      return (
        u(u(u(t, /(zoom-|grab)/, h + "$1"), /(image-set)/, h + "$1"), t, "") + t
      );
    case 5495:
    case 3959:
      return u(t, /(image-set\([^]*)/, h + "$1$`$1");
    case 4968:
      return (
        u(
          u(t, /(.+:)(flex-)?(.*)/, h + "box-pack:$3" + v + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        h +
        t +
        t
      );
    case 4200:
      if (!D(t, /flex-|baseline/)) return v + "grid-column-align" + H(t, r) + t;
      break;
    case 2592:
    case 3360:
      return v + u(t, "template-", "") + t;
    case 4384:
    case 3616:
      return e &&
        e.some(function (n, s) {
          return (r = s), D(n.props, /grid-\w+-end/);
        })
        ? ~lt(t + (e = e[r].value), "span", 0)
          ? t
          : v +
            u(t, "-start", "") +
            t +
            v +
            "grid-row-span:" +
            (~lt(e, "span", 0) ? D(e, /\d+/) : +D(e, /\d+/) - +D(t, /\d+/)) +
            ";"
        : v + u(t, "-start", "") + t;
    case 4896:
    case 4128:
      return e &&
        e.some(function (n) {
          return D(n.props, /grid-\w+-start/);
        })
        ? t
        : v + u(u(t, "-end", "-span"), "span ", "") + t;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return u(t, /(.+)-inline(.+)/, h + "$1$2") + t;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (O(t) - 1 - r > 6)
        switch (_(t, r + 1)) {
          case 109:
            if (_(t, r + 4) !== 45) break;
          case 102:
            return (
              u(
                t,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  h +
                  "$2-$3$1" +
                  et +
                  (_(t, r + 3) == 108 ? "$3" : "$2-$3"),
              ) + t
            );
          case 115:
            return ~lt(t, "stretch", 0)
              ? mr(u(t, "stretch", "fill-available"), r, e) + t
              : t;
        }
      break;
    case 5152:
    case 5920:
      return u(
        t,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (n, s, o, a, i, c, p) {
          return (
            v +
            s +
            ":" +
            o +
            p +
            (a ? v + s + "-span:" + (i ? c : +c - +o) + p : "") +
            t
          );
        },
      );
    case 4949:
      if (_(t, r + 6) === 121) return u(t, ":", ":" + h) + t;
      break;
    case 6444:
      switch (_(t, _(t, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            u(
              t,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              "$1" +
                h +
                (_(t, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                h +
                "$2$3$1" +
                v +
                "$2box$3",
            ) + t
          );
        case 100:
          return u(t, ":", ":" + v) + t;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return u(t, "scroll-", "scroll-snap-") + t;
  }
  return t;
}
function bt(t, r) {
  for (var e = "", n = 0; n < t.length; n++) e += r(t[n], n, t, r) || "";
  return e;
}
function se(t, r, e, n) {
  switch (t.type) {
    case Hr:
      if (t.children.length) break;
    case Wr:
    case Mt:
      return (t.return = t.return || t.value);
    case fr:
      return "";
    case pr:
      return (t.return = t.value + "{" + bt(t.children, n) + "}");
    case wt:
      if (!O((t.value = t.props.join(",")))) return "";
  }
  return O((e = bt(t.children, n))) ? (t.return = t.value + "{" + e + "}") : "";
}
function oe(t) {
  var r = lr(t);
  return function (e, n, s, o) {
    for (var a = "", i = 0; i < r; i++) a += t[i](e, n, s, o) || "";
    return a;
  };
}
function ae(t) {
  return function (r) {
    r.root || ((r = r.return) && t(r));
  };
}
function ie(t, r, e, n) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case Mt:
        t.return = mr(t.value, t.length, e);
        return;
      case pr:
        return bt([F(t, { value: u(t.value, "@", "@" + h) })], n);
      case wt:
        if (t.length)
          return Kr((e = t.props), function (s) {
            switch (D(s, (n = /(::plac\w+|:read-\w+)/))) {
              case ":read-only":
              case ":read-write":
                Y(F(t, { props: [u(s, /:(read-\w+)/, ":" + et + "$1")] })),
                  Y(F(t, { props: [s] })),
                  Tt(t, { props: Jt(e, n) });
                break;
              case "::placeholder":
                Y(F(t, { props: [u(s, /:(plac\w+)/, ":" + h + "input-$1")] })),
                  Y(F(t, { props: [u(s, /:(plac\w+)/, ":" + et + "$1")] })),
                  Y(F(t, { props: [u(s, /:(plac\w+)/, v + "input-$1")] })),
                  Y(F(t, { props: [s] })),
                  Tt(t, { props: Jt(e, n) });
                break;
            }
            return "";
          });
    }
}
var ce = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  P = {},
  K =
    (typeof process < "u" &&
      P !== void 0 &&
      (P.REACT_APP_SC_ATTR || P.SC_ATTR)) ||
    "data-styled",
  yr = "active",
  vr = "data-styled-version",
  It = "6.1.11",
  Wt = `/*!sc*/
`,
  Ht = typeof window < "u" && "HTMLElement" in window,
  ue = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
        P !== void 0 &&
        P.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
        P.REACT_APP_SC_DISABLE_SPEEDY !== ""
      ? P.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
        P.REACT_APP_SC_DISABLE_SPEEDY
      : typeof process < "u" &&
        P !== void 0 &&
        P.SC_DISABLE_SPEEDY !== void 0 &&
        P.SC_DISABLE_SPEEDY !== "" &&
        P.SC_DISABLE_SPEEDY !== "false" &&
        P.SC_DISABLE_SPEEDY),
  Et = Object.freeze([]),
  U = Object.freeze({});
function fe(t, r, e) {
  return (
    e === void 0 && (e = U), (t.theme !== e.theme && t.theme) || r || e.theme
  );
}
var br = new Set([
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "track",
    "u",
    "ul",
    "use",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ]),
  pe = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  he = /(^-|-$)/g;
function Xt(t) {
  return t.replace(pe, "-").replace(he, "");
}
var de = /(a)(d)/gi,
  ht = 52,
  tr = function (t) {
    return String.fromCharCode(t + (t > 25 ? 39 : 97));
  };
function zt(t) {
  var r,
    e = "";
  for (r = Math.abs(t); r > ht; r = (r / ht) | 0) e = tr(r % ht) + e;
  return (tr(r % ht) + e).replace(de, "$1-$2");
}
var kt,
  Sr = 5381,
  W = function (t, r) {
    for (var e = r.length; e; ) t = (33 * t) ^ r.charCodeAt(--e);
    return t;
  },
  wr = function (t) {
    return W(Sr, t);
  };
function Cr(t) {
  return zt(wr(t) >>> 0);
}
function le(t) {
  return t.displayName || t.name || "Component";
}
function Nt(t) {
  return typeof t == "string" && !0;
}
var xr = typeof Symbol == "function" && Symbol.for,
  Ar = xr ? Symbol.for("react.memo") : 60115,
  ge = xr ? Symbol.for("react.forward_ref") : 60112,
  me = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  ye = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  Ir = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  ve =
    (((kt = {})[ge] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (kt[Ar] = Ir),
    kt);
function rr(t) {
  return ("type" in (r = t) && r.type.$$typeof) === Ar
    ? Ir
    : "$$typeof" in t
      ? ve[t.$$typeof]
      : me;
  var r;
}
var be = Object.defineProperty,
  Se = Object.getOwnPropertyNames,
  er = Object.getOwnPropertySymbols,
  we = Object.getOwnPropertyDescriptor,
  Ce = Object.getPrototypeOf,
  nr = Object.prototype;
function Er(t, r, e) {
  if (typeof r != "string") {
    if (nr) {
      var n = Ce(r);
      n && n !== nr && Er(t, n, e);
    }
    var s = Se(r);
    er && (s = s.concat(er(r)));
    for (var o = rr(t), a = rr(r), i = 0; i < s.length; ++i) {
      var c = s[i];
      if (!(c in ye || (e && e[c]) || (a && c in a) || (o && c in o))) {
        var p = we(r, c);
        try {
          be(t, c, p);
        } catch {}
      }
    }
  }
  return t;
}
function Z(t) {
  return typeof t == "function";
}
function qt(t) {
  return typeof t == "object" && "styledComponentId" in t;
}
function L(t, r) {
  return t && r ? "".concat(t, " ").concat(r) : t || r || "";
}
function Ft(t, r) {
  if (t.length === 0) return "";
  for (var e = t[0], n = 1; n < t.length; n++) e += t[n];
  return e;
}
function ot(t) {
  return (
    t !== null &&
    typeof t == "object" &&
    t.constructor.name === Object.name &&
    !("props" in t && t.$$typeof)
  );
}
function Gt(t, r, e) {
  if ((e === void 0 && (e = !1), !e && !ot(t) && !Array.isArray(t))) return r;
  if (Array.isArray(r))
    for (var n = 0; n < r.length; n++) t[n] = Gt(t[n], r[n]);
  else if (ot(r)) for (var n in r) t[n] = Gt(t[n], r[n]);
  return t;
}
function Kt(t, r) {
  Object.defineProperty(t, "toString", { value: r });
}
function at(t) {
  for (var r = [], e = 1; e < arguments.length; e++) r[e - 1] = arguments[e];
  return new Error(
    "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
      .concat(t, " for more information.")
      .concat(r.length > 0 ? " Args: ".concat(r.join(", ")) : ""),
  );
}
var xe = (function () {
    function t(r) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = r);
    }
    return (
      (t.prototype.indexOfGroup = function (r) {
        for (var e = 0, n = 0; n < r; n++) e += this.groupSizes[n];
        return e;
      }),
      (t.prototype.insertRules = function (r, e) {
        if (r >= this.groupSizes.length) {
          for (var n = this.groupSizes, s = n.length, o = s; r >= o; )
            if ((o <<= 1) < 0) throw at(16, "".concat(r));
          (this.groupSizes = new Uint32Array(o)),
            this.groupSizes.set(n),
            (this.length = o);
          for (var a = s; a < o; a++) this.groupSizes[a] = 0;
        }
        for (
          var i = this.indexOfGroup(r + 1), c = ((a = 0), e.length);
          a < c;
          a++
        )
          this.tag.insertRule(i, e[a]) && (this.groupSizes[r]++, i++);
      }),
      (t.prototype.clearGroup = function (r) {
        if (r < this.length) {
          var e = this.groupSizes[r],
            n = this.indexOfGroup(r),
            s = n + e;
          this.groupSizes[r] = 0;
          for (var o = n; o < s; o++) this.tag.deleteRule(n);
        }
      }),
      (t.prototype.getGroup = function (r) {
        var e = "";
        if (r >= this.length || this.groupSizes[r] === 0) return e;
        for (
          var n = this.groupSizes[r],
            s = this.indexOfGroup(r),
            o = s + n,
            a = s;
          a < o;
          a++
        )
          e += "".concat(this.tag.getRule(a)).concat(Wt);
        return e;
      }),
      t
    );
  })(),
  yt = new Map(),
  St = new Map(),
  vt = 1,
  dt = function (t) {
    if (yt.has(t)) return yt.get(t);
    for (; St.has(vt); ) vt++;
    var r = vt++;
    return yt.set(t, r), St.set(r, t), r;
  },
  Ae = function (t, r) {
    (vt = r + 1), yt.set(t, r), St.set(r, t);
  },
  Ie = "style[".concat(K, "][").concat(vr, '="').concat(It, '"]'),
  Ee = new RegExp(
    "^".concat(K, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
  ),
  _e = function (t, r, e) {
    for (var n, s = e.split(","), o = 0, a = s.length; o < a; o++)
      (n = s[o]) && t.registerName(r, n);
  },
  Re = function (t, r) {
    for (
      var e,
        n = ((e = r.textContent) !== null && e !== void 0 ? e : "").split(Wt),
        s = [],
        o = 0,
        a = n.length;
      o < a;
      o++
    ) {
      var i = n[o].trim();
      if (i) {
        var c = i.match(Ee);
        if (c) {
          var p = 0 | parseInt(c[1], 10),
            d = c[2];
          p !== 0 && (Ae(d, p), _e(t, d, c[3]), t.getTag().insertRules(p, s)),
            (s.length = 0);
        } else s.push(i);
      }
    }
  };
function $e() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var _r = function (t) {
    var r = document.head,
      e = t || r,
      n = document.createElement("style"),
      s = (function (i) {
        var c = Array.from(i.querySelectorAll("style[".concat(K, "]")));
        return c[c.length - 1];
      })(e),
      o = s !== void 0 ? s.nextSibling : null;
    n.setAttribute(K, yr), n.setAttribute(vr, It);
    var a = $e();
    return a && n.setAttribute("nonce", a), e.insertBefore(n, o), n;
  },
  Pe = (function () {
    function t(r) {
      (this.element = _r(r)),
        this.element.appendChild(document.createTextNode("")),
        (this.sheet = (function (e) {
          if (e.sheet) return e.sheet;
          for (var n = document.styleSheets, s = 0, o = n.length; s < o; s++) {
            var a = n[s];
            if (a.ownerNode === e) return a;
          }
          throw at(17);
        })(this.element)),
        (this.length = 0);
    }
    return (
      (t.prototype.insertRule = function (r, e) {
        try {
          return this.sheet.insertRule(e, r), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (t.prototype.deleteRule = function (r) {
        this.sheet.deleteRule(r), this.length--;
      }),
      (t.prototype.getRule = function (r) {
        var e = this.sheet.cssRules[r];
        return e && e.cssText ? e.cssText : "";
      }),
      t
    );
  })(),
  ke = (function () {
    function t(r) {
      (this.element = _r(r)),
        (this.nodes = this.element.childNodes),
        (this.length = 0);
    }
    return (
      (t.prototype.insertRule = function (r, e) {
        if (r <= this.length && r >= 0) {
          var n = document.createTextNode(e);
          return (
            this.element.insertBefore(n, this.nodes[r] || null),
            this.length++,
            !0
          );
        }
        return !1;
      }),
      (t.prototype.deleteRule = function (r) {
        this.element.removeChild(this.nodes[r]), this.length--;
      }),
      (t.prototype.getRule = function (r) {
        return r < this.length ? this.nodes[r].textContent : "";
      }),
      t
    );
  })(),
  Ne = (function () {
    function t(r) {
      (this.rules = []), (this.length = 0);
    }
    return (
      (t.prototype.insertRule = function (r, e) {
        return (
          r <= this.length && (this.rules.splice(r, 0, e), this.length++, !0)
        );
      }),
      (t.prototype.deleteRule = function (r) {
        this.rules.splice(r, 1), this.length--;
      }),
      (t.prototype.getRule = function (r) {
        return r < this.length ? this.rules[r] : "";
      }),
      t
    );
  })(),
  sr = Ht,
  Oe = { isServer: !Ht, useCSSOMInjection: !ue },
  Rr = (function () {
    function t(r, e, n) {
      r === void 0 && (r = U), e === void 0 && (e = {});
      var s = this;
      (this.options = R(R({}, Oe), r)),
        (this.gs = e),
        (this.names = new Map(n)),
        (this.server = !!r.isServer),
        !this.server &&
          Ht &&
          sr &&
          ((sr = !1),
          (function (o) {
            for (
              var a = document.querySelectorAll(Ie), i = 0, c = a.length;
              i < c;
              i++
            ) {
              var p = a[i];
              p &&
                p.getAttribute(K) !== yr &&
                (Re(o, p), p.parentNode && p.parentNode.removeChild(p));
            }
          })(this)),
        Kt(this, function () {
          return (function (o) {
            for (
              var a = o.getTag(),
                i = a.length,
                c = "",
                p = function (g) {
                  var m = (function (A) {
                    return St.get(A);
                  })(g);
                  if (m === void 0) return "continue";
                  var l = o.names.get(m),
                    S = a.getGroup(g);
                  if (l === void 0 || S.length === 0) return "continue";
                  var x = "".concat(K, ".g").concat(g, '[id="').concat(m, '"]'),
                    $ = "";
                  l !== void 0 &&
                    l.forEach(function (A) {
                      A.length > 0 && ($ += "".concat(A, ","));
                    }),
                    (c += ""
                      .concat(S)
                      .concat(x, '{content:"')
                      .concat($, '"}')
                      .concat(Wt));
                },
                d = 0;
              d < i;
              d++
            )
              p(d);
            return c;
          })(s);
        });
    }
    return (
      (t.registerId = function (r) {
        return dt(r);
      }),
      (t.prototype.reconstructWithOptions = function (r, e) {
        return (
          e === void 0 && (e = !0),
          new t(R(R({}, this.options), r), this.gs, (e && this.names) || void 0)
        );
      }),
      (t.prototype.allocateGSInstance = function (r) {
        return (this.gs[r] = (this.gs[r] || 0) + 1);
      }),
      (t.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((r = (function (e) {
              var n = e.useCSSOMInjection,
                s = e.target;
              return e.isServer ? new Ne(s) : n ? new Pe(s) : new ke(s);
            })(this.options)),
            new xe(r)))
        );
        var r;
      }),
      (t.prototype.hasNameForId = function (r, e) {
        return this.names.has(r) && this.names.get(r).has(e);
      }),
      (t.prototype.registerName = function (r, e) {
        if ((dt(r), this.names.has(r))) this.names.get(r).add(e);
        else {
          var n = new Set();
          n.add(e), this.names.set(r, n);
        }
      }),
      (t.prototype.insertRules = function (r, e, n) {
        this.registerName(r, e), this.getTag().insertRules(dt(r), n);
      }),
      (t.prototype.clearNames = function (r) {
        this.names.has(r) && this.names.get(r).clear();
      }),
      (t.prototype.clearRules = function (r) {
        this.getTag().clearGroup(dt(r)), this.clearNames(r);
      }),
      (t.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      t
    );
  })(),
  Te = /&/g,
  De = /^\s*\/\/.*$/gm;
function $r(t, r) {
  return t.map(function (e) {
    return (
      e.type === "rule" &&
        ((e.value = "".concat(r, " ").concat(e.value)),
        (e.value = e.value.replaceAll(",", ",".concat(r, " "))),
        (e.props = e.props.map(function (n) {
          return "".concat(r, " ").concat(n);
        }))),
      Array.isArray(e.children) &&
        e.type !== "@keyframes" &&
        (e.children = $r(e.children, r)),
      e
    );
  });
}
function je(t) {
  var r,
    e,
    n,
    s = U,
    o = s.options,
    a = o === void 0 ? U : o,
    i = s.plugins,
    c = i === void 0 ? Et : i,
    p = function (m, l, S) {
      return S.startsWith(e) && S.endsWith(e) && S.replaceAll(e, "").length > 0
        ? ".".concat(r)
        : m;
    },
    d = c.slice();
  d.push(function (m) {
    m.type === wt &&
      m.value.includes("&") &&
      (m.props[0] = m.props[0].replace(Te, e).replace(n, p));
  }),
    a.prefix && d.push(ie),
    d.push(se);
  var g = function (m, l, S, x) {
    l === void 0 && (l = ""),
      S === void 0 && (S = ""),
      x === void 0 && (x = "&"),
      (r = x),
      (e = l),
      (n = new RegExp("\\".concat(e, "\\b"), "g"));
    var $ = m.replace(De, ""),
      A = ee(S || l ? "".concat(S, " ").concat(l, " { ").concat($, " }") : $);
    a.namespace && (A = $r(A, a.namespace));
    var w = [];
    return (
      bt(
        A,
        oe(
          d.concat(
            ae(function (b) {
              return w.push(b);
            }),
          ),
        ),
      ),
      w
    );
  };
  return (
    (g.hash = c.length
      ? c
          .reduce(function (m, l) {
            return l.name || at(15), W(m, l.name);
          }, Sr)
          .toString()
      : ""),
    g
  );
}
var ze = new Rr(),
  Lt = je(),
  Pr = nt.createContext({
    shouldForwardProp: void 0,
    styleSheet: ze,
    stylis: Lt,
  });
Pr.Consumer;
nt.createContext(void 0);
function or() {
  return ur.useContext(Pr);
}
var kr = (function () {
    function t(r, e) {
      var n = this;
      (this.inject = function (s, o) {
        o === void 0 && (o = Lt);
        var a = n.name + o.hash;
        s.hasNameForId(n.id, a) ||
          s.insertRules(n.id, a, o(n.rules, a, "@keyframes"));
      }),
        (this.name = r),
        (this.id = "sc-keyframes-".concat(r)),
        (this.rules = e),
        Kt(this, function () {
          throw at(12, String(n.name));
        });
    }
    return (
      (t.prototype.getName = function (r) {
        return r === void 0 && (r = Lt), this.name + r.hash;
      }),
      t
    );
  })(),
  Fe = function (t) {
    return t >= "A" && t <= "Z";
  };
function ar(t) {
  for (var r = "", e = 0; e < t.length; e++) {
    var n = t[e];
    if (e === 1 && n === "-" && t[0] === "-") return t;
    Fe(n) ? (r += "-" + n.toLowerCase()) : (r += n);
  }
  return r.startsWith("ms-") ? "-" + r : r;
}
var Nr = function (t) {
    return t == null || t === !1 || t === "";
  },
  Or = function (t) {
    var r,
      e,
      n = [];
    for (var s in t) {
      var o = t[s];
      t.hasOwnProperty(s) &&
        !Nr(o) &&
        ((Array.isArray(o) && o.isCss) || Z(o)
          ? n.push("".concat(ar(s), ":"), o, ";")
          : ot(o)
            ? n.push.apply(
                n,
                st(st(["".concat(s, " {")], Or(o), !1), ["}"], !1),
              )
            : n.push(
                ""
                  .concat(ar(s), ": ")
                  .concat(
                    ((r = s),
                    (e = o) == null || typeof e == "boolean" || e === ""
                      ? ""
                      : typeof e != "number" ||
                          e === 0 ||
                          r in ce ||
                          r.startsWith("--")
                        ? String(e).trim()
                        : "".concat(e, "px")),
                    ";",
                  ),
              ));
    }
    return n;
  };
function M(t, r, e, n) {
  if (Nr(t)) return [];
  if (qt(t)) return [".".concat(t.styledComponentId)];
  if (Z(t)) {
    if (!Z((o = t)) || (o.prototype && o.prototype.isReactComponent) || !r)
      return [t];
    var s = t(r);
    return M(s, r, e, n);
  }
  var o;
  return t instanceof kr
    ? e
      ? (t.inject(e, n), [t.getName(n)])
      : [t]
    : ot(t)
      ? Or(t)
      : Array.isArray(t)
        ? Array.prototype.concat.apply(
            Et,
            t.map(function (a) {
              return M(a, r, e, n);
            }),
          )
        : [t.toString()];
}
function Ge(t) {
  for (var r = 0; r < t.length; r += 1) {
    var e = t[r];
    if (Z(e) && !qt(e)) return !1;
  }
  return !0;
}
var Le = wr(It),
  Be = (function () {
    function t(r, e, n) {
      (this.rules = r),
        (this.staticRulesId = ""),
        (this.isStatic = (n === void 0 || n.isStatic) && Ge(r)),
        (this.componentId = e),
        (this.baseHash = W(Le, e)),
        (this.baseStyle = n),
        Rr.registerId(e);
    }
    return (
      (t.prototype.generateAndInjectStyles = function (r, e, n) {
        var s = this.baseStyle
          ? this.baseStyle.generateAndInjectStyles(r, e, n)
          : "";
        if (this.isStatic && !n.hash)
          if (
            this.staticRulesId &&
            e.hasNameForId(this.componentId, this.staticRulesId)
          )
            s = L(s, this.staticRulesId);
          else {
            var o = Ft(M(this.rules, r, e, n)),
              a = zt(W(this.baseHash, o) >>> 0);
            if (!e.hasNameForId(this.componentId, a)) {
              var i = n(o, ".".concat(a), void 0, this.componentId);
              e.insertRules(this.componentId, a, i);
            }
            (s = L(s, a)), (this.staticRulesId = a);
          }
        else {
          for (
            var c = W(this.baseHash, n.hash), p = "", d = 0;
            d < this.rules.length;
            d++
          ) {
            var g = this.rules[d];
            if (typeof g == "string") p += g;
            else if (g) {
              var m = Ft(M(g, r, e, n));
              (c = W(c, m + d)), (p += m);
            }
          }
          if (p) {
            var l = zt(c >>> 0);
            e.hasNameForId(this.componentId, l) ||
              e.insertRules(
                this.componentId,
                l,
                n(p, ".".concat(l), void 0, this.componentId),
              ),
              (s = L(s, l));
          }
        }
        return s;
      }),
      t
    );
  })(),
  Tr = nt.createContext(void 0);
Tr.Consumer;
var Ot = {};
function Me(t, r, e) {
  var n = qt(t),
    s = t,
    o = !Nt(t),
    a = r.attrs,
    i = a === void 0 ? Et : a,
    c = r.componentId,
    p =
      c === void 0
        ? (function (C, E) {
            var y = typeof C != "string" ? "sc" : Xt(C);
            Ot[y] = (Ot[y] || 0) + 1;
            var f = "".concat(y, "-").concat(Cr(It + y + Ot[y]));
            return E ? "".concat(E, "-").concat(f) : f;
          })(r.displayName, r.parentComponentId)
        : c,
    d = r.displayName,
    g =
      d === void 0
        ? (function (C) {
            return Nt(C) ? "styled.".concat(C) : "Styled(".concat(le(C), ")");
          })(t)
        : d,
    m =
      r.displayName && r.componentId
        ? "".concat(Xt(r.displayName), "-").concat(r.componentId)
        : r.componentId || p,
    l = n && s.attrs ? s.attrs.concat(i).filter(Boolean) : i,
    S = r.shouldForwardProp;
  if (n && s.shouldForwardProp) {
    var x = s.shouldForwardProp;
    if (r.shouldForwardProp) {
      var $ = r.shouldForwardProp;
      S = function (C, E) {
        return x(C, E) && $(C, E);
      };
    } else S = x;
  }
  var A = new Be(e, m, n ? s.componentStyle : void 0);
  function w(C, E) {
    return (function (y, f, Q) {
      var it = y.attrs,
        zr = y.componentStyle,
        Fr = y.defaultProps,
        Gr = y.foldedComponentIds,
        Lr = y.styledComponentId,
        Br = y.target,
        Mr = nt.useContext(Tr),
        Yr = or(),
        _t = y.shouldForwardProp || Yr.shouldForwardProp,
        Ut = fe(f, Mr, Fr) || U,
        T = (function (ut, X, ft) {
          for (
            var tt, G = R(R({}, X), { className: void 0, theme: ft }), $t = 0;
            $t < ut.length;
            $t += 1
          ) {
            var pt = Z((tt = ut[$t])) ? tt(G) : tt;
            for (var z in pt)
              G[z] =
                z === "className"
                  ? L(G[z], pt[z])
                  : z === "style"
                    ? R(R({}, G[z]), pt[z])
                    : pt[z];
          }
          return X.className && (G.className = L(G.className, X.className)), G;
        })(it, f, Ut),
        ct = T.as || Br,
        V = {};
      for (var j in T)
        T[j] === void 0 ||
          j[0] === "$" ||
          j === "as" ||
          (j === "theme" && T.theme === Ut) ||
          (j === "forwardedAs"
            ? (V.as = T.forwardedAs)
            : (_t && !_t(j, ct)) || (V[j] = T[j]));
      var Zt = (function (ut, X) {
          var ft = or(),
            tt = ut.generateAndInjectStyles(X, ft.styleSheet, ft.stylis);
          return tt;
        })(zr, T),
        Rt = L(Gr, Lr);
      return (
        Zt && (Rt += " " + Zt),
        T.className && (Rt += " " + T.className),
        (V[Nt(ct) && !br.has(ct) ? "class" : "className"] = Rt),
        (V.ref = Q),
        ur.createElement(ct, V)
      );
    })(b, C, E);
  }
  w.displayName = g;
  var b = nt.forwardRef(w);
  return (
    (b.attrs = l),
    (b.componentStyle = A),
    (b.displayName = g),
    (b.shouldForwardProp = S),
    (b.foldedComponentIds = n
      ? L(s.foldedComponentIds, s.styledComponentId)
      : ""),
    (b.styledComponentId = m),
    (b.target = n ? s.target : t),
    Object.defineProperty(b, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (C) {
        this._foldedDefaultProps = n
          ? (function (E) {
              for (var y = [], f = 1; f < arguments.length; f++)
                y[f - 1] = arguments[f];
              for (var Q = 0, it = y; Q < it.length; Q++) Gt(E, it[Q], !0);
              return E;
            })({}, s.defaultProps, C)
          : C;
      },
    }),
    Kt(b, function () {
      return ".".concat(b.styledComponentId);
    }),
    o &&
      Er(b, t, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    b
  );
}
function ir(t, r) {
  for (var e = [t[0]], n = 0, s = r.length; n < s; n += 1)
    e.push(r[n], t[n + 1]);
  return e;
}
var cr = function (t) {
  return Object.assign(t, { isCss: !0 });
};
function Dr(t) {
  for (var r = [], e = 1; e < arguments.length; e++) r[e - 1] = arguments[e];
  if (Z(t) || ot(t)) return cr(M(ir(Et, st([t], r, !0))));
  var n = t;
  return r.length === 0 && n.length === 1 && typeof n[0] == "string"
    ? M(n)
    : cr(M(ir(n, r)));
}
function Bt(t, r, e) {
  if ((e === void 0 && (e = U), !r)) throw at(1, r);
  var n = function (s) {
    for (var o = [], a = 1; a < arguments.length; a++) o[a - 1] = arguments[a];
    return t(r, e, Dr.apply(void 0, st([s], o, !1)));
  };
  return (
    (n.attrs = function (s) {
      return Bt(
        t,
        r,
        R(R({}, e), {
          attrs: Array.prototype.concat(e.attrs, s).filter(Boolean),
        }),
      );
    }),
    (n.withConfig = function (s) {
      return Bt(t, r, R(R({}, e), s));
    }),
    n
  );
}
var jr = function (t) {
    return Bt(Me, t);
  },
  Ye = jr;
br.forEach(function (t) {
  Ye[t] = jr(t);
});
function He(t) {
  for (var r = [], e = 1; e < arguments.length; e++) r[e - 1] = arguments[e];
  var n = Ft(Dr.apply(void 0, st([t], r, !1))),
    s = Cr(n);
  return new kr(s, n);
}
export { Dr as c, He as f, Ye as p };
