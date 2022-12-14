!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t(require("grapesjs")))
    : "function" == typeof define && define.amd
    ? define(["grapesjs"], t)
    : "object" == typeof exports
    ? (exports["grapesjs-blocks-flexbox"] = t(require("grapesjs")))
    : (e["grapesjs-blocks-flexbox"] = t(e.grapesjs));
})(this, function (e) {
  return (function (e) {
    function t(r) {
      if (n[r]) return n[r].exports;
      var a = (n[r] = { i: r, l: !1, exports: {} });
      return e[r].call(a.exports, a, a.exports, t), (a.l = !0), a.exports;
    }
    var n = {};
    return (
      (t.m = e),
      (t.c = n),
      (t.d = function (e, n, r) {
        t.o(e, n) ||
          Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r,
          });
      }),
      (t.n = function (e) {
        var n =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return t.d(n, "a", n), n;
      }),
      (t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (t.p = ""),
      t((t.s = 0))
    );
  })([
    function (e, t, n) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        o = n(1),
        l = r(o),
        s = n(2),
        i = r(s);
      t.default = l.default.plugins.add("gjs-blocks-flexbox", function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = {
            flexboxBlock: {},
            stylePrefix: "",
            labelRow: "Row",
            labelColumn: "Column",
          },
          r = a({}, t, n);
        (0, i.default)(e, r);
      });
    },
    function (t, n) {
      t.exports = e;
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        };
      t.default = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = e.BlockManager,
          a = (t.blocks, t.stylePrefix),
          o = a + "row",
          l = a + "cell",
          s = t.labelRow,
          i = t.labelColumn,
          c = function (e) {
            var t = [];
            for (var n in e) {
              var r = e[n],
                a = r instanceof Array || r instanceof Object;
              (r = a ? JSON.stringify(r) : r),
                t.push(n + "=" + (a ? "'" + r + "'" : '"' + r + '"'));
            }
            return t.length ? " " + t.join(" ") : "";
          },
          f = { tl: 0, tc: 0, tr: 0, cl: 0, cr: 0, bl: 0, br: 0, minDim: 1 },
          u = r({}, f, {
            cr: 1,
            bc: 0,
            keyWidth: "flex-basis",
            currentUnit: 1,
            minDim: 1,
            step: 0.2,
          }),
          d = {
            class: o,
            "data-gjs-droppable": "." + l,
            "data-gjs-resizable": f,
            "data-gjs-custom-name": s,
          },
          p = {
            class: l,
            "data-gjs-draggable": "." + o,
            "data-gjs-resizable": u,
            "data-gjs-custom-name": i,
            "data-gjs-unstylable": ["width"],
            "data-gjs-stylable-require": ["flex-basis"],
          },
          b = ["." + o, "." + l];
        e.on("selector:add", function (e) {
          return b.indexOf(e.getFullName()) >= 0 && e.set("private", 1);
        });
        var x = c(d),
          g = c(p),
          j =
            "\n    ." +
            o +
            " {\n      display: flex;\n      justify-content: flex-start;\n      align-items: stretch;\n      flex-wrap: nowrap;\n      padding: 10px;\n    }\n    @media (max-width: 768px) {\n      ." +
            o +
            " {\n        flex-wrap: wrap;\n      }\n    }\n    ",
          v =
            "\n    ." +
            l +
            " {\n      min-height: 75px;\n      flex-grow: 1;\n      flex-basis: 100%;\n    }";
        n.add(
          "flexbox",
          r(
            {
              label: "Flexbox",
              category: "Basic",
              attributes: { class: "gjs-fonts gjs-f-b2" },
              content:
                "\n        <div " +
                x +
                ">\n          <div " +
                g +
                "></div>\n          <div " +
                g +
                "></div>\n        </div>\n        <style>\n          " +
                j +
                "\n          " +
                v +
                "\n        </style>\n        ",
            },
            t.flexboxBlock
          )
        );
      };
    },
  ]);
});
