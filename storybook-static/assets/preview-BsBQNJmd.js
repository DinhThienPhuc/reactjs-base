import "../sb-preview/runtime.js";
import { _ as a } from "./iframe-CMcQjm1L.js";

const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./DocsRenderer-PKQXORMH-OhjJCkwv.js",
      "./iframe-CMcQjm1L.js",
      "./index-Cs7sjTYM.js",
      "./_commonjsHelpers-BosuxZz1.js",
      "./react-18-CxOrbeQH.js",
      "./index-BMdlDBjA.js",
      "./index-D-8MO0q_.js",
      "./isArray-BUAaHnL1.js",
      "./index-DrFu-skq.js",
    ]),
) => i.map((i) => d[i]);
import "../sb-preview/runtime.js";
const { global: i } = __STORYBOOK_MODULE_GLOBAL__;
var s = Object.entries(i.TAGS_OPTIONS ?? {}).reduce((e, r) => {
    let [t, o] = r;
    return o.excludeFromDocsStories && (e[t] = !0), e;
  }, {}),
  n = {
    docs: {
      renderer: async () => {
        let { DocsRenderer: e } = await a(
          () => import("./DocsRenderer-PKQXORMH-OhjJCkwv.js").then((r) => r.ai),
          __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]),
          import.meta.url,
        );
        return new e();
      },
      stories: {
        filter: (e) => {
          var r;
          return (
            (e.tags || []).filter((t) => s[t]).length === 0 &&
            !((r = e.parameters.docs) != null && r.disable)
          );
        },
      },
    },
  };
export { n as parameters };
