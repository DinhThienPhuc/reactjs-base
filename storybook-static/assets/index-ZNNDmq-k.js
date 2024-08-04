import { r as e } from "./index-Cs7sjTYM.js";

const c = (t, r = !1) => {
    const [s, u] = e.useState(t),
      a = e.useCallback(
        (o) => {
          r && u(o);
        },
        [r],
      );
    return { currentValue: r ? s : t, setCurrentValue: a };
  },
  n = c;
export { n as V };
