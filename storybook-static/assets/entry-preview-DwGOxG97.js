import "./_commonjsHelpers-BosuxZz1.js";
import "./index-BMdlDBjA.js";
import { R as a, r as i } from "./index-Cs7sjTYM.js";
import { r as E, u as l } from "./react-18-CxOrbeQH.js";

import "./_commonjsHelpers-BosuxZz1.js";
import "./index-BMdlDBjA.js";
var v = Object.defineProperty,
  _ = (r, e) => {
    for (var t in e) v(r, t, { get: e[t], enumerable: !0 });
  };
const { global: f } = __STORYBOOK_MODULE_GLOBAL__;
var g = {};
_(g, {
  mount: () => M,
  parameters: () => O,
  render: () => w,
  renderToCanvas: () => D,
});
var w = (r, e) => {
    let { id: t, component: n } = e;
    if (!n)
      throw new Error(
        `Unable to render story ${t} as the component annotation is missing from the default export`,
      );
    return a.createElement(n, { ...r });
  },
  { FRAMEWORK_OPTIONS: s } = f,
  b = class extends i.Component {
    constructor() {
      super(...arguments), (this.state = { hasError: !1 });
    }
    static getDerivedStateFromError() {
      return { hasError: !0 };
    }
    componentDidMount() {
      let { hasError: r } = this.state,
        { showMain: e } = this.props;
      r || e();
    }
    componentDidCatch(r) {
      let { showException: e } = this.props;
      e(r);
    }
    render() {
      let { hasError: r } = this.state,
        { children: e } = this.props;
      return r ? null : e;
    }
  },
  d = s != null && s.strictMode ? i.StrictMode : i.Fragment;
async function D(
  {
    storyContext: r,
    unboundStoryFn: e,
    showMain: t,
    showException: n,
    forceRemount: u,
  },
  o,
) {
  var m, c;
  let p = a.createElement(
      b,
      { showMain: t, showException: n },
      a.createElement(e, { ...r }),
    ),
    h = d ? a.createElement(d, null, p) : p;
  return (
    u && l(o),
    await E(
      h,
      o,
      (c =
        (m = r == null ? void 0 : r.parameters) == null ? void 0 : m.react) ==
        null
        ? void 0
        : c.rootOptions,
    ),
    () => l(o)
  );
}
var M = (r) => async (e) => (
    e != null && (r.originalStoryFn = () => e),
    await r.renderToCanvas(),
    r.canvas
  ),
  O = { renderer: "react" };
export { M as mount, O as parameters, w as render, D as renderToCanvas };
