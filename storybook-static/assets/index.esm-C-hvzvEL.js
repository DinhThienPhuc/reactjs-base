import { R as D } from "./index-Cs7sjTYM.js";

var ce = (e) => e.type === "checkbox",
  ie = (e) => e instanceof Date,
  O = (e) => e == null;
const et = (e) => typeof e == "object";
var T = (e) => !O(e) && !Array.isArray(e) && et(e) && !ie(e),
  tt = (e) =>
    T(e) && e.target ? (ce(e.target) ? e.target.checked : e.target.value) : e,
  At = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
  rt = (e, s) => e.has(At(s)),
  xt = (e) => {
    const s = e.constructor && e.constructor.prototype;
    return T(s) && s.hasOwnProperty("isPrototypeOf");
  },
  Re =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function p(e) {
  let s;
  const t = Array.isArray(e);
  if (e instanceof Date) s = new Date(e);
  else if (e instanceof Set) s = new Set(e);
  else if (!(Re && (e instanceof Blob || e instanceof FileList)) && (t || T(e)))
    if (((s = t ? [] : {}), !t && !xt(e))) s = e;
    else for (const u in e) e.hasOwnProperty(u) && (s[u] = p(e[u]));
  else return e;
  return s;
}
var Ae = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
  w = (e) => e === void 0,
  f = (e, s, t) => {
    if (!s || !T(e)) return t;
    const u = Ae(s.split(/[,[\].]+?/)).reduce((n, a) => (O(n) ? n : n[a]), e);
    return w(u) || u === e ? (w(e[s]) ? t : e[s]) : u;
  },
  j = (e) => typeof e == "boolean",
  Te = (e) => /^\w*$/.test(e),
  st = (e) => Ae(e.replace(/["|']|\]/g, "").split(/\.|\[/)),
  x = (e, s, t) => {
    let u = -1;
    const n = Te(s) ? [s] : st(s),
      a = n.length,
      y = a - 1;
    for (; ++u < a; ) {
      const h = n[u];
      let m = t;
      if (u !== y) {
        const S = e[h];
        m = T(S) || Array.isArray(S) ? S : isNaN(+n[u + 1]) ? {} : [];
      }
      if (h === "__proto__") return;
      (e[h] = m), (e = e[h]);
    }
    return e;
  };
const ve = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
  W = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all",
  },
  z = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  },
  mt = D.createContext(null),
  Le = () => D.useContext(mt);
var it = (e, s, t, u = !0) => {
    const n = { defaultValues: s._defaultValues };
    for (const a in e)
      Object.defineProperty(n, a, {
        get: () => {
          const y = a;
          return (
            s._proxyFormState[y] !== W.all &&
              (s._proxyFormState[y] = !u || W.all),
            t && (t[y] = !0),
            e[y]
          );
        },
      });
    return n;
  },
  B = (e) => T(e) && !Object.keys(e).length,
  ut = (e, s, t, u) => {
    t(e);
    const { name: n, ...a } = e;
    return (
      B(a) ||
      Object.keys(a).length >= Object.keys(s).length ||
      Object.keys(a).find((y) => s[y] === (!u || W.all))
    );
  },
  oe = (e) => (Array.isArray(e) ? e : [e]),
  lt = (e, s, t) =>
    !e ||
    !s ||
    e === s ||
    oe(e).some((u) => u && (t ? u === s : u.startsWith(s) || s.startsWith(u)));
function Ue(e) {
  const s = D.useRef(e);
  (s.current = e),
    D.useEffect(() => {
      const t =
        !e.disabled &&
        s.current.subject &&
        s.current.subject.subscribe({ next: s.current.next });
      return () => {
        t && t.unsubscribe();
      };
    }, [e.disabled]);
}
function Dt(e) {
  const s = Le(),
    { control: t = s.control, disabled: u, name: n, exact: a } = e || {},
    [y, h] = D.useState(t._formState),
    m = D.useRef(!0),
    S = D.useRef({
      isDirty: !1,
      isLoading: !1,
      dirtyFields: !1,
      touchedFields: !1,
      validatingFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    }),
    _ = D.useRef(n);
  return (
    (_.current = n),
    Ue({
      disabled: u,
      next: (v) =>
        m.current &&
        lt(_.current, v.name, a) &&
        ut(v, S.current, t._updateFormState) &&
        h({ ...t._formState, ...v }),
      subject: t._subjects.state,
    }),
    D.useEffect(
      () => (
        (m.current = !0),
        S.current.isValid && t._updateValid(!0),
        () => {
          m.current = !1;
        }
      ),
      [t],
    ),
    it(y, t, S.current, !1)
  );
}
var $ = (e) => typeof e == "string",
  at = (e, s, t, u, n) =>
    $(e)
      ? (u && s.watch.add(e), f(t, e, n))
      : Array.isArray(e)
        ? e.map((a) => (u && s.watch.add(a), f(t, a)))
        : (u && (s.watchAll = !0), t);
function wt(e) {
  const s = Le(),
    {
      control: t = s.control,
      name: u,
      defaultValue: n,
      disabled: a,
      exact: y,
    } = e || {},
    h = D.useRef(u);
  (h.current = u),
    Ue({
      disabled: a,
      subject: t._subjects.values,
      next: (_) => {
        lt(h.current, _.name, y) &&
          S(p(at(h.current, t._names, _.values || t._formValues, !1, n)));
      },
    });
  const [m, S] = D.useState(t._getWatch(u, n));
  return D.useEffect(() => t._removeUnmounted()), m;
}
function Et(e) {
  const s = Le(),
    { name: t, disabled: u, control: n = s.control, shouldUnregister: a } = e,
    y = rt(n._names.array, t),
    h = wt({
      control: n,
      name: t,
      defaultValue: f(n._formValues, t, f(n._defaultValues, t, e.defaultValue)),
      exact: !0,
    }),
    m = Dt({ control: n, name: t }),
    S = D.useRef(
      n.register(t, {
        ...e.rules,
        value: h,
        ...(j(e.disabled) ? { disabled: e.disabled } : {}),
      }),
    );
  return (
    D.useEffect(() => {
      const _ = n._options.shouldUnregister || a,
        v = (N, H) => {
          const L = f(n._fields, N);
          L && L._f && (L._f.mount = H);
        };
      if ((v(t, !0), _)) {
        const N = p(f(n._options.defaultValues, t));
        x(n._defaultValues, t, N),
          w(f(n._formValues, t)) && x(n._formValues, t, N);
      }
      return () => {
        (y ? _ && !n._state.action : _) ? n.unregister(t) : v(t, !1);
      };
    }, [t, n, y, a]),
    D.useEffect(() => {
      f(n._fields, t) &&
        n._updateDisabledField({
          disabled: u,
          fields: n._fields,
          name: t,
          value: f(n._fields, t)._f.value,
        });
    }, [u, t, n]),
    {
      field: {
        name: t,
        value: h,
        ...(j(u) || m.disabled ? { disabled: m.disabled || u } : {}),
        onChange: D.useCallback(
          (_) =>
            S.current.onChange({
              target: { value: tt(_), name: t },
              type: ve.CHANGE,
            }),
          [t],
        ),
        onBlur: D.useCallback(
          () =>
            S.current.onBlur({
              target: { value: f(n._formValues, t), name: t },
              type: ve.BLUR,
            }),
          [t, n],
        ),
        ref: (_) => {
          const v = f(n._fields, t);
          v &&
            _ &&
            (v._f.ref = {
              focus: () => _.focus(),
              select: () => _.select(),
              setCustomValidity: (N) => _.setCustomValidity(N),
              reportValidity: () => _.reportValidity(),
            });
        },
      },
      formState: m,
      fieldState: Object.defineProperties(
        {},
        {
          invalid: { enumerable: !0, get: () => !!f(m.errors, t) },
          isDirty: { enumerable: !0, get: () => !!f(m.dirtyFields, t) },
          isTouched: { enumerable: !0, get: () => !!f(m.touchedFields, t) },
          isValidating: {
            enumerable: !0,
            get: () => !!f(m.validatingFields, t),
          },
          error: { enumerable: !0, get: () => f(m.errors, t) },
        },
      ),
    }
  );
}
const Wt = (e) => e.render(Et(e));
var St = (e, s, t, u, n) =>
    s
      ? {
          ...t[e],
          types: { ...(t[e] && t[e].types ? t[e].types : {}), [u]: n || !0 },
        }
      : {},
  Ke = (e) => ({
    isOnSubmit: !e || e === W.onSubmit,
    isOnBlur: e === W.onBlur,
    isOnChange: e === W.onChange,
    isOnAll: e === W.all,
    isOnTouch: e === W.onTouched,
  }),
  Ge = (e, s, t) =>
    !t &&
    (s.watchAll ||
      s.watch.has(e) ||
      [...s.watch].some(
        (u) => e.startsWith(u) && /^\.\w+/.test(e.slice(u.length)),
      ));
const fe = (e, s, t, u) => {
  for (const n of t || Object.keys(e)) {
    const a = f(e, n);
    if (a) {
      const { _f: y, ...h } = a;
      if (y) {
        if (y.refs && y.refs[0] && s(y.refs[0], n) && !u) break;
        if (y.ref && s(y.ref, y.name) && !u) break;
        fe(h, s);
      } else T(h) && fe(h, s);
    }
  }
};
var kt = (e, s, t) => {
    const u = oe(f(e, t));
    return x(u, "root", s[t]), x(e, t, u), e;
  },
  Oe = (e) => e.type === "file",
  X = (e) => typeof e == "function",
  _e = (e) => {
    if (!Re) return !1;
    const s = e ? e.ownerDocument : 0;
    return (
      e instanceof
      (s && s.defaultView ? s.defaultView.HTMLElement : HTMLElement)
    );
  },
  he = (e) => $(e),
  pe = (e) => e.type === "radio",
  be = (e) => e instanceof RegExp;
const ze = { value: !1, isValid: !1 },
  Je = { value: !0, isValid: !0 };
var nt = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const s = e
        .filter((t) => t && t.checked && !t.disabled)
        .map((t) => t.value);
      return { value: s, isValid: !!s.length };
    }
    return e[0].checked && !e[0].disabled
      ? e[0].attributes && !w(e[0].attributes.value)
        ? w(e[0].value) || e[0].value === ""
          ? Je
          : { value: e[0].value, isValid: !0 }
        : Je
      : ze;
  }
  return ze;
};
const Qe = { isValid: !1, value: null };
var ot = (e) =>
  Array.isArray(e)
    ? e.reduce(
        (s, t) =>
          t && t.checked && !t.disabled ? { isValid: !0, value: t.value } : s,
        Qe,
      )
    : Qe;
function Xe(e, s, t = "validate") {
  if (he(e) || (Array.isArray(e) && e.every(he)) || (j(e) && !e))
    return { type: t, message: he(e) ? e : "", ref: s };
}
var se = (e) => (T(e) && !be(e) ? e : { value: e, message: "" }),
  Ye = async (e, s, t, u, n) => {
    const {
        ref: a,
        refs: y,
        required: h,
        maxLength: m,
        minLength: S,
        min: _,
        max: v,
        pattern: N,
        validate: H,
        name: L,
        valueAsNumber: xe,
        mount: J,
        disabled: Q,
      } = e._f,
      V = f(s, L);
    if (!J || Q) return {};
    const K = y ? y[0] : a,
      G = (b) => {
        u &&
          K.reportValidity &&
          (K.setCustomValidity(j(b) ? "" : b || ""), K.reportValidity());
      },
      k = {},
      ee = pe(a),
      de = ce(a),
      Y = ee || de,
      te =
        ((xe || Oe(a)) && w(a.value) && w(V)) ||
        (_e(a) && a.value === "") ||
        V === "" ||
        (Array.isArray(V) && !V.length),
      P = St.bind(null, L, t, k),
      ye = (b, F, C, U = z.maxLength, q = z.minLength) => {
        const I = b ? F : C;
        k[L] = { type: b ? U : q, message: I, ref: a, ...P(b ? U : q, I) };
      };
    if (
      n
        ? !Array.isArray(V) || !V.length
        : h &&
          ((!Y && (te || O(V))) ||
            (j(V) && !V) ||
            (de && !nt(y).isValid) ||
            (ee && !ot(y).isValid))
    ) {
      const { value: b, message: F } = he(h)
        ? { value: !!h, message: h }
        : se(h);
      if (
        b &&
        ((k[L] = { type: z.required, message: F, ref: K, ...P(z.required, F) }),
        !t)
      )
        return G(F), k;
    }
    if (!te && (!O(_) || !O(v))) {
      let b, F;
      const C = se(v),
        U = se(_);
      if (!O(V) && !isNaN(V)) {
        const q = a.valueAsNumber || (V && +V);
        O(C.value) || (b = q > C.value), O(U.value) || (F = q < U.value);
      } else {
        const q = a.valueAsDate || new Date(V),
          I = (ae) => new Date(new Date().toDateString() + " " + ae),
          ue = a.type == "time",
          le = a.type == "week";
        $(C.value) &&
          V &&
          (b = ue
            ? I(V) > I(C.value)
            : le
              ? V > C.value
              : q > new Date(C.value)),
          $(U.value) &&
            V &&
            (F = ue
              ? I(V) < I(U.value)
              : le
                ? V < U.value
                : q < new Date(U.value));
      }
      if ((b || F) && (ye(!!b, C.message, U.message, z.max, z.min), !t))
        return G(k[L].message), k;
    }
    if ((m || S) && !te && ($(V) || (n && Array.isArray(V)))) {
      const b = se(m),
        F = se(S),
        C = !O(b.value) && V.length > +b.value,
        U = !O(F.value) && V.length < +F.value;
      if ((C || U) && (ye(C, b.message, F.message), !t))
        return G(k[L].message), k;
    }
    if (N && !te && $(V)) {
      const { value: b, message: F } = se(N);
      if (
        be(b) &&
        !V.match(b) &&
        ((k[L] = { type: z.pattern, message: F, ref: a, ...P(z.pattern, F) }),
        !t)
      )
        return G(F), k;
    }
    if (H) {
      if (X(H)) {
        const b = await H(V, s),
          F = Xe(b, K);
        if (F && ((k[L] = { ...F, ...P(z.validate, F.message) }), !t))
          return G(F.message), k;
      } else if (T(H)) {
        let b = {};
        for (const F in H) {
          if (!B(b) && !t) break;
          const C = Xe(await H[F](V, s), K, F);
          C &&
            ((b = { ...C, ...P(F, C.message) }), G(C.message), t && (k[L] = b));
        }
        if (!B(b) && ((k[L] = { ref: K, ...b }), !t)) return k;
      }
    }
    return G(!0), k;
  };
function Ct(e, s) {
  const t = s.slice(0, -1).length;
  let u = 0;
  for (; u < t; ) e = w(e) ? u++ : e[s[u++]];
  return e;
}
function Rt(e) {
  for (const s in e) if (e.hasOwnProperty(s) && !w(e[s])) return !1;
  return !0;
}
function R(e, s) {
  const t = Array.isArray(s) ? s : Te(s) ? [s] : st(s),
    u = t.length === 1 ? e : Ct(e, t),
    n = t.length - 1,
    a = t[n];
  return (
    u && delete u[a],
    n !== 0 &&
      ((T(u) && B(u)) || (Array.isArray(u) && Rt(u))) &&
      R(e, t.slice(0, -1)),
    e
  );
}
var Se = () => {
    let e = [];
    return {
      get observers() {
        return e;
      },
      next: (n) => {
        for (const a of e) a.next && a.next(n);
      },
      subscribe: (n) => (
        e.push(n),
        {
          unsubscribe: () => {
            e = e.filter((a) => a !== n);
          },
        }
      ),
      unsubscribe: () => {
        e = [];
      },
    };
  },
  Ve = (e) => O(e) || !et(e);
function Z(e, s) {
  if (Ve(e) || Ve(s)) return e === s;
  if (ie(e) && ie(s)) return e.getTime() === s.getTime();
  const t = Object.keys(e),
    u = Object.keys(s);
  if (t.length !== u.length) return !1;
  for (const n of t) {
    const a = e[n];
    if (!u.includes(n)) return !1;
    if (n !== "ref") {
      const y = s[n];
      if (
        (ie(a) && ie(y)) ||
        (T(a) && T(y)) ||
        (Array.isArray(a) && Array.isArray(y))
          ? !Z(a, y)
          : a !== y
      )
        return !1;
    }
  }
  return !0;
}
var ft = (e) => e.type === "select-multiple",
  Tt = (e) => pe(e) || ce(e),
  ke = (e) => _e(e) && e.isConnected,
  ct = (e) => {
    for (const s in e) if (X(e[s])) return !0;
    return !1;
  };
function Fe(e, s = {}) {
  const t = Array.isArray(e);
  if (T(e) || t)
    for (const u in e)
      Array.isArray(e[u]) || (T(e[u]) && !ct(e[u]))
        ? ((s[u] = Array.isArray(e[u]) ? [] : {}), Fe(e[u], s[u]))
        : O(e[u]) || (s[u] = !0);
  return s;
}
function dt(e, s, t) {
  const u = Array.isArray(e);
  if (T(e) || u)
    for (const n in e)
      Array.isArray(e[n]) || (T(e[n]) && !ct(e[n]))
        ? w(s) || Ve(t[n])
          ? (t[n] = Array.isArray(e[n]) ? Fe(e[n], []) : { ...Fe(e[n]) })
          : dt(e[n], O(s) ? {} : s[n], t[n])
        : (t[n] = !Z(e[n], s[n]));
  return t;
}
var ge = (e, s) => dt(e, s, Fe(s)),
  yt = (e, { valueAsNumber: s, valueAsDate: t, setValueAs: u }) =>
    w(e)
      ? e
      : s
        ? e === ""
          ? NaN
          : e && +e
        : t && $(e)
          ? new Date(e)
          : u
            ? u(e)
            : e;
function Ce(e) {
  const s = e.ref;
  if (!(e.refs ? e.refs.every((t) => t.disabled) : s.disabled))
    return Oe(s)
      ? s.files
      : pe(s)
        ? ot(e.refs).value
        : ft(s)
          ? [...s.selectedOptions].map(({ value: t }) => t)
          : ce(s)
            ? nt(e.refs).value
            : yt(w(s.value) ? e.ref.value : s.value, e);
}
var Lt = (e, s, t, u) => {
    const n = {};
    for (const a of e) {
      const y = f(s, a);
      y && x(n, a, y._f);
    }
    return {
      criteriaMode: t,
      names: [...e],
      fields: n,
      shouldUseNativeValidation: u,
    };
  },
  ne = (e) =>
    w(e)
      ? e
      : be(e)
        ? e.source
        : T(e)
          ? be(e.value)
            ? e.value.source
            : e.value
          : e,
  Ut = (e) =>
    e.mount &&
    (e.required ||
      e.min ||
      e.max ||
      e.maxLength ||
      e.minLength ||
      e.pattern ||
      e.validate);
function Ze(e, s, t) {
  const u = f(e, t);
  if (u || Te(t)) return { error: u, name: t };
  const n = t.split(".");
  for (; n.length; ) {
    const a = n.join("."),
      y = f(s, a),
      h = f(e, a);
    if (y && !Array.isArray(y) && t !== a) return { name: t };
    if (h && h.type) return { name: a, error: h };
    n.pop();
  }
  return { name: t };
}
var Ot = (e, s, t, u, n) =>
    n.isOnAll
      ? !1
      : !t && n.isOnTouch
        ? !(s || e)
        : (t ? u.isOnBlur : n.isOnBlur)
          ? !e
          : (t ? u.isOnChange : n.isOnChange)
            ? e
            : !0,
  pt = (e, s) => !Ae(f(e, s)).length && R(e, s);
const Mt = {
  mode: W.onSubmit,
  reValidateMode: W.onChange,
  shouldFocusError: !0,
};
function Bt(e = {}) {
  let s = { ...Mt, ...e },
    t = {
      submitCount: 0,
      isDirty: !1,
      isLoading: X(s.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: s.errors || {},
      disabled: s.disabled || !1,
    },
    u = {},
    n =
      T(s.defaultValues) || T(s.values)
        ? p(s.defaultValues || s.values) || {}
        : {},
    a = s.shouldUnregister ? {} : p(n),
    y = { action: !1, mount: !1, watch: !1 },
    h = {
      mount: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    m,
    S = 0;
  const _ = {
      isDirty: !1,
      dirtyFields: !1,
      validatingFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    },
    v = { values: Se(), array: Se(), state: Se() },
    N = Ke(s.mode),
    H = Ke(s.reValidateMode),
    L = s.criteriaMode === W.all,
    xe = (r) => (i) => {
      clearTimeout(S), (S = setTimeout(r, i));
    },
    J = async (r) => {
      if (_.isValid || r) {
        const i = s.resolver ? B((await Y()).errors) : await P(u, !0);
        i !== t.isValid && v.state.next({ isValid: i });
      }
    },
    Q = (r, i) => {
      (_.isValidating || _.validatingFields) &&
        ((r || Array.from(h.mount)).forEach((l) => {
          l && (i ? x(t.validatingFields, l, i) : R(t.validatingFields, l));
        }),
        v.state.next({
          validatingFields: t.validatingFields,
          isValidating: !B(t.validatingFields),
        }));
    },
    V = (r, i = [], l, d, c = !0, o = !0) => {
      if (d && l) {
        if (((y.action = !0), o && Array.isArray(f(u, r)))) {
          const g = l(f(u, r), d.argA, d.argB);
          c && x(u, r, g);
        }
        if (o && Array.isArray(f(t.errors, r))) {
          const g = l(f(t.errors, r), d.argA, d.argB);
          c && x(t.errors, r, g), pt(t.errors, r);
        }
        if (_.touchedFields && o && Array.isArray(f(t.touchedFields, r))) {
          const g = l(f(t.touchedFields, r), d.argA, d.argB);
          c && x(t.touchedFields, r, g);
        }
        _.dirtyFields && (t.dirtyFields = ge(n, a)),
          v.state.next({
            name: r,
            isDirty: b(r, i),
            dirtyFields: t.dirtyFields,
            errors: t.errors,
            isValid: t.isValid,
          });
      } else x(a, r, i);
    },
    K = (r, i) => {
      x(t.errors, r, i), v.state.next({ errors: t.errors });
    },
    G = (r) => {
      (t.errors = r), v.state.next({ errors: t.errors, isValid: !1 });
    },
    k = (r, i, l, d) => {
      const c = f(u, r);
      if (c) {
        const o = f(a, r, w(l) ? f(n, r) : l);
        w(o) || (d && d.defaultChecked) || i
          ? x(a, r, i ? o : Ce(c._f))
          : U(r, o),
          y.mount && J();
      }
    },
    ee = (r, i, l, d, c) => {
      let o = !1,
        g = !1;
      const A = { name: r },
        E = !!(f(u, r) && f(u, r)._f && f(u, r)._f.disabled);
      if (!l || d) {
        _.isDirty &&
          ((g = t.isDirty),
          (t.isDirty = A.isDirty = b()),
          (o = g !== A.isDirty));
        const M = E || Z(f(n, r), i);
        (g = !!(!E && f(t.dirtyFields, r))),
          M || E ? R(t.dirtyFields, r) : x(t.dirtyFields, r, !0),
          (A.dirtyFields = t.dirtyFields),
          (o = o || (_.dirtyFields && g !== !M));
      }
      if (l) {
        const M = f(t.touchedFields, r);
        M ||
          (x(t.touchedFields, r, l),
          (A.touchedFields = t.touchedFields),
          (o = o || (_.touchedFields && M !== l)));
      }
      return o && c && v.state.next(A), o ? A : {};
    },
    de = (r, i, l, d) => {
      const c = f(t.errors, r),
        o = _.isValid && j(i) && t.isValid !== i;
      if (
        (e.delayError && l
          ? ((m = xe(() => K(r, l))), m(e.delayError))
          : (clearTimeout(S),
            (m = null),
            l ? x(t.errors, r, l) : R(t.errors, r)),
        (l ? !Z(c, l) : c) || !B(d) || o)
      ) {
        const g = {
          ...d,
          ...(o && j(i) ? { isValid: i } : {}),
          errors: t.errors,
          name: r,
        };
        (t = { ...t, ...g }), v.state.next(g);
      }
    },
    Y = async (r) => {
      Q(r, !0);
      const i = await s.resolver(
        a,
        s.context,
        Lt(r || h.mount, u, s.criteriaMode, s.shouldUseNativeValidation),
      );
      return Q(r), i;
    },
    te = async (r) => {
      const { errors: i } = await Y(r);
      if (r)
        for (const l of r) {
          const d = f(i, l);
          d ? x(t.errors, l, d) : R(t.errors, l);
        }
      else t.errors = i;
      return i;
    },
    P = async (r, i, l = { valid: !0 }) => {
      for (const d in r) {
        const c = r[d];
        if (c) {
          const { _f: o, ...g } = c;
          if (o) {
            const A = h.array.has(o.name);
            Q([d], !0);
            const E = await Ye(c, a, L, s.shouldUseNativeValidation && !i, A);
            if ((Q([d]), E[o.name] && ((l.valid = !1), i))) break;
            !i &&
              (f(E, o.name)
                ? A
                  ? kt(t.errors, E, o.name)
                  : x(t.errors, o.name, E[o.name])
                : R(t.errors, o.name));
          }
          g && (await P(g, i, l));
        }
      }
      return l.valid;
    },
    ye = () => {
      for (const r of h.unMount) {
        const i = f(u, r);
        i &&
          (i._f.refs ? i._f.refs.every((l) => !ke(l)) : !ke(i._f.ref)) &&
          me(r);
      }
      h.unMount = new Set();
    },
    b = (r, i) => (r && i && x(a, r, i), !Z(Me(), n)),
    F = (r, i, l) =>
      at(r, h, { ...(y.mount ? a : w(i) ? n : $(r) ? { [r]: i } : i) }, l, i),
    C = (r) => Ae(f(y.mount ? a : n, r, e.shouldUnregister ? f(n, r, []) : [])),
    U = (r, i, l = {}) => {
      const d = f(u, r);
      let c = i;
      if (d) {
        const o = d._f;
        o &&
          (!o.disabled && x(a, r, yt(i, o)),
          (c = _e(o.ref) && O(i) ? "" : i),
          ft(o.ref)
            ? [...o.ref.options].forEach(
                (g) => (g.selected = c.includes(g.value)),
              )
            : o.refs
              ? ce(o.ref)
                ? o.refs.length > 1
                  ? o.refs.forEach(
                      (g) =>
                        (!g.defaultChecked || !g.disabled) &&
                        (g.checked = Array.isArray(c)
                          ? !!c.find((A) => A === g.value)
                          : c === g.value),
                    )
                  : o.refs[0] && (o.refs[0].checked = !!c)
                : o.refs.forEach((g) => (g.checked = g.value === c))
              : Oe(o.ref)
                ? (o.ref.value = "")
                : ((o.ref.value = c),
                  o.ref.type || v.values.next({ name: r, values: { ...a } })));
      }
      (l.shouldDirty || l.shouldTouch) &&
        ee(r, c, l.shouldTouch, l.shouldDirty, !0),
        l.shouldValidate && ae(r);
    },
    q = (r, i, l) => {
      for (const d in i) {
        const c = i[d],
          o = `${r}.${d}`,
          g = f(u, o);
        (h.array.has(r) || !Ve(c) || (g && !g._f)) && !ie(c)
          ? q(o, c, l)
          : U(o, c, l);
      }
    },
    I = (r, i, l = {}) => {
      const d = f(u, r),
        c = h.array.has(r),
        o = p(i);
      x(a, r, o),
        c
          ? (v.array.next({ name: r, values: { ...a } }),
            (_.isDirty || _.dirtyFields) &&
              l.shouldDirty &&
              v.state.next({
                name: r,
                dirtyFields: ge(n, a),
                isDirty: b(r, o),
              }))
          : d && !d._f && !O(o)
            ? q(r, o, l)
            : U(r, o, l),
        Ge(r, h) && v.state.next({ ...t }),
        v.values.next({ name: y.mount ? r : void 0, values: { ...a } });
    },
    ue = async (r) => {
      y.mount = !0;
      const i = r.target;
      let l = i.name,
        d = !0;
      const c = f(u, l),
        o = () => (i.type ? Ce(c._f) : tt(r)),
        g = (A) => {
          d = Number.isNaN(A) || A === f(a, l, A);
        };
      if (c) {
        let A, E;
        const M = o(),
          re = r.type === ve.BLUR || r.type === ve.FOCUS_OUT,
          bt =
            (!Ut(c._f) && !s.resolver && !f(t.errors, l) && !c._f.deps) ||
            Ot(re, f(t.touchedFields, l), t.isSubmitted, H, N),
          we = Ge(l, h, re);
        x(a, l, M),
          re
            ? (c._f.onBlur && c._f.onBlur(r), m && m(0))
            : c._f.onChange && c._f.onChange(r);
        const Ee = ee(l, M, re, !1),
          Vt = !B(Ee) || we;
        if (
          (!re && v.values.next({ name: l, type: r.type, values: { ...a } }),
          bt)
        )
          return (
            _.isValid && J(), Vt && v.state.next({ name: l, ...(we ? {} : Ee) })
          );
        if ((!re && we && v.state.next({ ...t }), s.resolver)) {
          const { errors: je } = await Y([l]);
          if ((g(M), d)) {
            const Ft = Ze(t.errors, u, l),
              $e = Ze(je, u, Ft.name || l);
            (A = $e.error), (l = $e.name), (E = B(je));
          }
        } else
          Q([l], !0),
            (A = (await Ye(c, a, L, s.shouldUseNativeValidation))[l]),
            Q([l]),
            g(M),
            d && (A ? (E = !1) : _.isValid && (E = await P(u, !0)));
        d && (c._f.deps && ae(c._f.deps), de(l, E, A, Ee));
      }
    },
    le = (r, i) => {
      if (f(t.errors, i) && r.focus) return r.focus(), 1;
    },
    ae = async (r, i = {}) => {
      let l, d;
      const c = oe(r);
      if (s.resolver) {
        const o = await te(w(r) ? r : c);
        (l = B(o)), (d = r ? !c.some((g) => f(o, g)) : l);
      } else
        r
          ? ((d = (
              await Promise.all(
                c.map(async (o) => {
                  const g = f(u, o);
                  return await P(g && g._f ? { [o]: g } : g);
                }),
              )
            ).every(Boolean)),
            !(!d && !t.isValid) && J())
          : (d = l = await P(u));
      return (
        v.state.next({
          ...(!$(r) || (_.isValid && l !== t.isValid) ? {} : { name: r }),
          ...(s.resolver || !r ? { isValid: l } : {}),
          errors: t.errors,
        }),
        i.shouldFocus && !d && fe(u, le, r ? c : h.mount),
        d
      );
    },
    Me = (r) => {
      const i = { ...(y.mount ? a : n) };
      return w(r) ? i : $(r) ? f(i, r) : r.map((l) => f(i, l));
    },
    Be = (r, i) => ({
      invalid: !!f((i || t).errors, r),
      isDirty: !!f((i || t).dirtyFields, r),
      error: f((i || t).errors, r),
      isValidating: !!f(t.validatingFields, r),
      isTouched: !!f((i || t).touchedFields, r),
    }),
    gt = (r) => {
      r && oe(r).forEach((i) => R(t.errors, i)),
        v.state.next({ errors: r ? t.errors : {} });
    },
    Pe = (r, i, l) => {
      const d = (f(u, r, { _f: {} })._f || {}).ref,
        c = f(t.errors, r) || {},
        { ref: o, message: g, type: A, ...E } = c;
      x(t.errors, r, { ...E, ...i, ref: d }),
        v.state.next({ name: r, errors: t.errors, isValid: !1 }),
        l && l.shouldFocus && d && d.focus && d.focus();
    },
    ht = (r, i) =>
      X(r)
        ? v.values.subscribe({ next: (l) => r(F(void 0, i), l) })
        : F(r, i, !0),
    me = (r, i = {}) => {
      for (const l of r ? oe(r) : h.mount)
        h.mount.delete(l),
          h.array.delete(l),
          i.keepValue || (R(u, l), R(a, l)),
          !i.keepError && R(t.errors, l),
          !i.keepDirty && R(t.dirtyFields, l),
          !i.keepTouched && R(t.touchedFields, l),
          !i.keepIsValidating && R(t.validatingFields, l),
          !s.shouldUnregister && !i.keepDefaultValue && R(n, l);
      v.values.next({ values: { ...a } }),
        v.state.next({ ...t, ...(i.keepDirty ? { isDirty: b() } : {}) }),
        !i.keepIsValid && J();
    },
    Ie = ({ disabled: r, name: i, field: l, fields: d, value: c }) => {
      if ((j(r) && y.mount) || r) {
        const o = r ? void 0 : w(c) ? Ce(l ? l._f : f(d, i)._f) : c;
        x(a, i, o), ee(i, o, !1, !1, !0);
      }
    },
    De = (r, i = {}) => {
      let l = f(u, r);
      const d = j(i.disabled);
      return (
        x(u, r, {
          ...(l || {}),
          _f: {
            ...(l && l._f ? l._f : { ref: { name: r } }),
            name: r,
            mount: !0,
            ...i,
          },
        }),
        h.mount.add(r),
        l
          ? Ie({ field: l, disabled: i.disabled, name: r, value: i.value })
          : k(r, !0, i.value),
        {
          ...(d ? { disabled: i.disabled } : {}),
          ...(s.progressive
            ? {
                required: !!i.required,
                min: ne(i.min),
                max: ne(i.max),
                minLength: ne(i.minLength),
                maxLength: ne(i.maxLength),
                pattern: ne(i.pattern),
              }
            : {}),
          name: r,
          onChange: ue,
          onBlur: ue,
          ref: (c) => {
            if (c) {
              De(r, i), (l = f(u, r));
              const o =
                  (w(c.value) &&
                    c.querySelectorAll &&
                    c.querySelectorAll("input,select,textarea")[0]) ||
                  c,
                g = Tt(o),
                A = l._f.refs || [];
              if (g ? A.find((E) => E === o) : o === l._f.ref) return;
              x(u, r, {
                _f: {
                  ...l._f,
                  ...(g
                    ? {
                        refs: [
                          ...A.filter(ke),
                          o,
                          ...(Array.isArray(f(n, r)) ? [{}] : []),
                        ],
                        ref: { type: o.type, name: r },
                      }
                    : { ref: o }),
                },
              }),
                k(r, !1, void 0, o);
            } else
              (l = f(u, r, {})),
                l._f && (l._f.mount = !1),
                (s.shouldUnregister || i.shouldUnregister) &&
                  !(rt(h.array, r) && y.action) &&
                  h.unMount.add(r);
          },
        }
      );
    },
    Ne = () => s.shouldFocusError && fe(u, le, h.mount),
    vt = (r) => {
      j(r) &&
        (v.state.next({ disabled: r }),
        fe(
          u,
          (i, l) => {
            const d = f(u, l);
            d &&
              ((i.disabled = d._f.disabled || r),
              Array.isArray(d._f.refs) &&
                d._f.refs.forEach((c) => {
                  c.disabled = d._f.disabled || r;
                }));
          },
          0,
          !1,
        ));
    },
    qe = (r, i) => async (l) => {
      let d;
      l && (l.preventDefault && l.preventDefault(), l.persist && l.persist());
      let c = p(a);
      if ((v.state.next({ isSubmitting: !0 }), s.resolver)) {
        const { errors: o, values: g } = await Y();
        (t.errors = o), (c = g);
      } else await P(u);
      if ((R(t.errors, "root"), B(t.errors))) {
        v.state.next({ errors: {} });
        try {
          await r(c, l);
        } catch (o) {
          d = o;
        }
      } else i && (await i({ ...t.errors }, l)), Ne(), setTimeout(Ne);
      if (
        (v.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: B(t.errors) && !d,
          submitCount: t.submitCount + 1,
          errors: t.errors,
        }),
        d)
      )
        throw d;
    },
    _t = (r, i = {}) => {
      f(u, r) &&
        (w(i.defaultValue)
          ? I(r, p(f(n, r)))
          : (I(r, i.defaultValue), x(n, r, p(i.defaultValue))),
        i.keepTouched || R(t.touchedFields, r),
        i.keepDirty ||
          (R(t.dirtyFields, r),
          (t.isDirty = i.defaultValue ? b(r, p(f(n, r))) : b())),
        i.keepError || (R(t.errors, r), _.isValid && J()),
        v.state.next({ ...t }));
    },
    We = (r, i = {}) => {
      const l = r ? p(r) : n,
        d = p(l),
        c = B(r),
        o = c ? n : d;
      if ((i.keepDefaultValues || (n = l), !i.keepValues)) {
        if (i.keepDirtyValues)
          for (const g of h.mount)
            f(t.dirtyFields, g) ? x(o, g, f(a, g)) : I(g, f(o, g));
        else {
          if (Re && w(r))
            for (const g of h.mount) {
              const A = f(u, g);
              if (A && A._f) {
                const E = Array.isArray(A._f.refs) ? A._f.refs[0] : A._f.ref;
                if (_e(E)) {
                  const M = E.closest("form");
                  if (M) {
                    M.reset();
                    break;
                  }
                }
              }
            }
          u = {};
        }
        (a = e.shouldUnregister ? (i.keepDefaultValues ? p(n) : {}) : p(o)),
          v.array.next({ values: { ...o } }),
          v.values.next({ values: { ...o } });
      }
      (h = {
        mount: i.keepDirtyValues ? h.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: "",
      }),
        (y.mount = !_.isValid || !!i.keepIsValid || !!i.keepDirtyValues),
        (y.watch = !!e.shouldUnregister),
        v.state.next({
          submitCount: i.keepSubmitCount ? t.submitCount : 0,
          isDirty: c
            ? !1
            : i.keepDirty
              ? t.isDirty
              : !!(i.keepDefaultValues && !Z(r, n)),
          isSubmitted: i.keepIsSubmitted ? t.isSubmitted : !1,
          dirtyFields: c
            ? {}
            : i.keepDirtyValues
              ? i.keepDefaultValues && a
                ? ge(n, a)
                : t.dirtyFields
              : i.keepDefaultValues && r
                ? ge(n, r)
                : i.keepDirty
                  ? t.dirtyFields
                  : {},
          touchedFields: i.keepTouched ? t.touchedFields : {},
          errors: i.keepErrors ? t.errors : {},
          isSubmitSuccessful: i.keepIsSubmitSuccessful
            ? t.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
        });
    },
    He = (r, i) => We(X(r) ? r(a) : r, i);
  return {
    control: {
      register: De,
      unregister: me,
      getFieldState: Be,
      handleSubmit: qe,
      setError: Pe,
      _executeSchema: Y,
      _getWatch: F,
      _getDirty: b,
      _updateValid: J,
      _removeUnmounted: ye,
      _updateFieldArray: V,
      _updateDisabledField: Ie,
      _getFieldArray: C,
      _reset: We,
      _resetDefaultValues: () =>
        X(s.defaultValues) &&
        s.defaultValues().then((r) => {
          He(r, s.resetOptions), v.state.next({ isLoading: !1 });
        }),
      _updateFormState: (r) => {
        t = { ...t, ...r };
      },
      _disableForm: vt,
      _subjects: v,
      _proxyFormState: _,
      _setErrors: G,
      get _fields() {
        return u;
      },
      get _formValues() {
        return a;
      },
      get _state() {
        return y;
      },
      set _state(r) {
        y = r;
      },
      get _defaultValues() {
        return n;
      },
      get _names() {
        return h;
      },
      set _names(r) {
        h = r;
      },
      get _formState() {
        return t;
      },
      set _formState(r) {
        t = r;
      },
      get _options() {
        return s;
      },
      set _options(r) {
        s = { ...s, ...r };
      },
    },
    trigger: ae,
    register: De,
    handleSubmit: qe,
    watch: ht,
    setValue: I,
    getValues: Me,
    reset: He,
    resetField: _t,
    clearErrors: gt,
    unregister: me,
    setError: Pe,
    setFocus: (r, i = {}) => {
      const l = f(u, r),
        d = l && l._f;
      if (d) {
        const c = d.refs ? d.refs[0] : d.ref;
        c.focus && (c.focus(), i.shouldSelect && c.select());
      }
    },
    getFieldState: Be,
  };
}
function Ht(e = {}) {
  const s = D.useRef(),
    t = D.useRef(),
    [u, n] = D.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: X(e.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: e.errors || {},
      disabled: e.disabled || !1,
      defaultValues: X(e.defaultValues) ? void 0 : e.defaultValues,
    });
  s.current || (s.current = { ...Bt(e), formState: u });
  const a = s.current.control;
  return (
    (a._options = e),
    Ue({
      subject: a._subjects.state,
      next: (y) => {
        ut(y, a._proxyFormState, a._updateFormState, !0) &&
          n({ ...a._formState });
      },
    }),
    D.useEffect(() => a._disableForm(e.disabled), [a, e.disabled]),
    D.useEffect(() => {
      if (a._proxyFormState.isDirty) {
        const y = a._getDirty();
        y !== u.isDirty && a._subjects.state.next({ isDirty: y });
      }
    }, [a, u.isDirty]),
    D.useEffect(() => {
      e.values && !Z(e.values, t.current)
        ? (a._reset(e.values, a._options.resetOptions),
          (t.current = e.values),
          n((y) => ({ ...y })))
        : a._resetDefaultValues();
    }, [e.values, a]),
    D.useEffect(() => {
      e.errors && a._setErrors(e.errors);
    }, [e.errors, a]),
    D.useEffect(() => {
      a._state.mount || (a._updateValid(), (a._state.mount = !0)),
        a._state.watch &&
          ((a._state.watch = !1), a._subjects.state.next({ ...a._formState })),
        a._removeUnmounted();
    }),
    D.useEffect(() => {
      e.shouldUnregister && a._subjects.values.next({ values: a._getWatch() });
    }, [e.shouldUnregister, a]),
    (s.current.formState = it(u, a)),
    s.current
  );
}
export { Wt as C, St as a, f as g, x as s, Ht as u };
