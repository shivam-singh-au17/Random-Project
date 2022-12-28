!(function (e, n) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = n())
    : "function" == typeof define && define.amd
    ? define([], n)
    : "object" == typeof exports
    ? (exports["grapesjs-preset-webpage"] = n())
    : (e["grapesjs-preset-webpage"] = n());
})(
  "undefined" != typeof globalThis
    ? globalThis
    : "undefined" != typeof window
    ? window
    : this,
  () =>
    (() => {
      "use strict";
      var e = {
          d: (n, t) => {
            for (var o in t)
              e.o(t, o) &&
                !e.o(n, o) &&
                Object.defineProperty(n, o, { enumerable: !0, get: t[o] });
          },
          o: (e, n) => Object.prototype.hasOwnProperty.call(e, n),
          r: (e) => {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(e, "__esModule", { value: !0 });
          },
        },
        n = {};
      e.r(n), e.d(n, { default: () => u });
      var t = "gjs-open-import-webpage",
        o = "set-device-desktop",
        r = "set-device-tablet",
        a = "set-device-mobile",
        i = "canvas-clear",
        c =
          (void 0 && (void 0).__assign) ||
          function () {
            return (
              (c =
                Object.assign ||
                function (e) {
                  for (var n, t = 1, o = arguments.length; t < o; t++)
                    for (var r in (n = arguments[t]))
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  return e;
                }),
              c.apply(this, arguments)
            );
          };
      const l = function (e, n) {
        var l = e.Commands,
          s = n.textCleanCanvas;
        l.add(
          t,
          (function (e, n) {
            var o = e.getConfig("stylePrefix"),
              r = e.Modal,
              a = document.createElement("div"),
              i = n.modalImportLabel,
              l = n.modalImportContent,
              s = e.CodeManager.getViewer("CodeMirror").clone(),
              d = s.editor,
              u = document.createElement("button");
            return (
              (u.type = "button"),
              (u.innerHTML = n.modalImportButton),
              (u.className = "".concat(o, "btn-prim ").concat(o, "btn-import")),
              (u.onclick = function (n) {
                e.Css.clear(), e.setComponents(d.getValue().trim()), r.close();
              }),
              s.set(
                c(
                  { codeName: "htmlmixed", theme: "hopscotch", readOnly: 0 },
                  n.importViewerOptions
                )
              ),
              {
                run: function (e) {
                  if (!d) {
                    var c = document.createElement("textarea");
                    if (i) {
                      var p = document.createElement("div");
                      (p.className = "".concat(o, "import-label")),
                        (p.innerHTML = i),
                        a.appendChild(p);
                    }
                    a.appendChild(c),
                      a.appendChild(u),
                      s.init(c),
                      (d = s.editor);
                  }
                  r.setTitle(n.modalImportTitle), r.setContent(a);
                  var m = "function" == typeof l ? l(e) : l;
                  s.setContent(m || ""),
                    r.open().onceClose(function () {
                      return e.stopCommand(t);
                    }),
                    d.refresh();
                },
                stop: function () {
                  r.close();
                },
              }
            );
          })(e, n)
        ),
          l.add(o, {
            run: function (e) {
              return e.setDevice("Desktop");
            },
            stop: function () {},
          }),
          l.add(r, {
            run: function (e) {
              return e.setDevice("Tablet");
            },
            stop: function () {},
          }),
          l.add(a, {
            run: function (e) {
              return e.setDevice("Mobile portrait");
            },
            stop: function () {},
          }),
          l.add(i, function (e) {
            return confirm(s) && e.runCommand("core:canvas-clear");
          });
      };
      var s =
        (void 0 && (void 0).__assign) ||
        function () {
          return (
            (s =
              Object.assign ||
              function (e) {
                for (var n, t = 1, o = arguments.length; t < o; t++)
                  for (var r in (n = arguments[t]))
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                return e;
              }),
            s.apply(this, arguments)
          );
        };
      var d =
        (void 0 && (void 0).__assign) ||
        function () {
          return (
            (d =
              Object.assign ||
              function (e) {
                for (var n, t = 1, o = arguments.length; t < o; t++)
                  for (var r in (n = arguments[t]))
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                return e;
              }),
            d.apply(this, arguments)
          );
        };
      const u = function (e, n) {
        void 0 === n && (n = {});
        var c = d(
          {
            blocks: ["link-block", "quote", "text-basic"],
            block: function () {
              return {};
            },
            modalImportTitle: "Import",
            modalImportButton: "Import",
            modalImportLabel: "",
            modalImportContent: "",
            importViewerOptions: {},
            textCleanCanvas: "Are you sure you want to clear the canvas?",
            showStylesOnChange: !0,
            useCustomTheme: !0,
          },
          n
        );
        if (c.useCustomTheme && "undefined" != typeof window) {
          var u = "gjs-",
            p = "";
          [
            ["one", "#463a3c"],
            ["two", "#b9a5a6"],
            ["three", "#804f7b"],
            ["four", "#d97aa6"],
          ].forEach(function (e) {
            var n = e[0],
              t = e[1];
            p += "\n        ."
              .concat(u)
              .concat(n, "-bg {\n          background-color: ")
              .concat(t, ";\n        }\n\n        .")
              .concat(u)
              .concat(n, "-color {\n          color: ")
              .concat(t, ";\n        }\n\n        .")
              .concat(u)
              .concat(n, "-color-h:hover {\n          color: ")
              .concat(t, ";\n        }\n      ");
          });
          var m = document.createElement("style");
          (m.innerText = p), document.head.appendChild(m);
        }
        !(function (e, n) {
          var t = function (t, o) {
            n.blocks.indexOf(t) >= 0 &&
              e.Blocks.add(
                t,
                s(s({ select: !0, category: "Basic" }, o), n.block(t))
              );
          };
          t("link-block", {
            label: "Link Block",
            media:
              '<svg viewBox="0 0 24 24">\n      <path fill="currentColor" d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z"></path>\n    </svg>',
            content: {
              type: "link",
              editable: !1,
              droppable: !0,
              style: {
                display: "inline-block",
                padding: "5px",
                "min-height": "50px",
                "min-width": "50px",
              },
            },
          }),
            t("quote", {
              label: "Quote",
              media:
                '<svg viewBox="0 0 24 24">\n        <path fill="currentColor" d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />\n    </svg>',
              content:
                '<blockquote class="quote">\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit\n      </blockquote>',
            }),
            t("text-basic", {
              label: "Text section",
              media:
                '<svg viewBox="0 0 24 24">\n        <path fill="currentColor" d="M21,6V8H3V6H21M3,18H12V16H3V18M3,13H21V11H3V13Z" />\n    </svg>',
              content:
                '<section class="bdg-sect">\n      <h1 class="heading">Insert title here</h1>\n      <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>\n      </section>',
            });
        })(e, c),
          l(e, c),
          (function (e, n) {
            var c = e.Panels,
              l = e.getConfig(),
              s = "sw-visibility",
              d = "export-template",
              u = "open-sm",
              p = "open-tm",
              m = "open-layers",
              v = "open-blocks",
              H = "fullscreen",
              C = "preview",
              f = 'style="display: block; max-width:22px"';
            (l.showDevices = !1),
              c.getPanels().reset([
                { id: "commands", buttons: [{}] },
                {
                  id: "devices-c",
                  buttons: [
                    {
                      id: o,
                      command: o,
                      active: !0,
                      label: "<svg ".concat(
                        f,
                        ' viewBox="0 0 24 24">\n            <path fill="currentColor" d="M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z" />\n        </svg>'
                      ),
                    },
                    {
                      id: r,
                      command: r,
                      label: "<svg ".concat(
                        f,
                        ' viewBox="0 0 24 24">\n            <path fill="currentColor" d="M19,18H5V6H19M21,4H3C1.89,4 1,4.89 1,6V18A2,2 0 0,0 3,20H21A2,2 0 0,0 23,18V6C23,4.89 22.1,4 21,4Z" />\n        </svg>'
                      ),
                    },
                    {
                      id: a,
                      command: a,
                      label: "<svg ".concat(
                        f,
                        ' viewBox="0 0 24 24">\n            <path fill="currentColor" d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3C19,1.89 18.1,1 17,1Z" />\n        </svg>'
                      ),
                    },
                  ],
                },
                {
                  id: "options",
                  buttons: [
                    {
                      id: s,
                      command: s,
                      context: s,
                      label: "<svg ".concat(
                        f,
                        ' viewBox="0 0 24 24">\n        <path fill="currentColor" d="M15,5H17V3H15M15,21H17V19H15M11,5H13V3H11M19,5H21V3H19M19,9H21V7H19M19,21H21V19H19M19,13H21V11H19M19,17H21V15H19M3,5H5V3H3M3,9H5V7H3M3,13H5V11H3M3,17H5V15H3M3,21H5V19H3M11,21H13V19H11M7,21H9V19H7M7,5H9V3H7V5Z" />\n    </svg>'
                      ),
                    },
                    {
                      id: C,
                      context: C,
                      command: function () {
                        return e.runCommand(C);
                      },
                      label: "<svg ".concat(
                        f,
                        ' viewBox="0 0 24 24"><path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"></path></svg>'
                      ),
                    },
                    {
                      id: H,
                      command: H,
                      context: H,
                      label: "<svg ".concat(
                        f,
                        ' viewBox="0 0 24 24">\n            <path fill="currentColor" d="M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z" />\n        </svg>'
                      ),
                    },
                    {
                      id: d,
                      command: function () {
                        return e.runCommand(d);
                      },
                      label: "<svg ".concat(
                        f,
                        ' viewBox="0 0 24 24">\n            <path fill="currentColor" d="M12.89,3L14.85,3.4L11.11,21L9.15,20.6L12.89,3M19.59,12L16,8.41V5.58L22.42,12L16,18.41V15.58L19.59,12M1.58,12L8,5.58V8.41L4.41,12L8,15.58V18.41L1.58,12Z" />\n        </svg>'
                      ),
                    },
                    {
                      id: "undo",
                      command: function () {
                        return e.runCommand("core:undo");
                      },
                      label: "<svg ".concat(
                        f,
                        ' viewBox="0 0 24 24">\n            <path fill="currentColor" d="M20 13.5C20 17.09 17.09 20 13.5 20H6V18H13.5C16 18 18 16 18 13.5S16 9 13.5 9H7.83L10.91 12.09L9.5 13.5L4 8L9.5 2.5L10.92 3.91L7.83 7H13.5C17.09 7 20 9.91 20 13.5Z" />\n        </svg>'
                      ),
                    },
                    {
                      id: "redo",
                      command: function () {
                        return e.runCommand("core:redo");
                      },
                      label: "<svg ".concat(
                        f,
                        ' viewBox="0 0 24 24">\n            <path fill="currentColor" d="M10.5 18H18V20H10.5C6.91 20 4 17.09 4 13.5S6.91 7 10.5 7H16.17L13.08 3.91L14.5 2.5L20 8L14.5 13.5L13.09 12.09L16.17 9H10.5C8 9 6 11 6 13.5S8 18 10.5 18Z" />\n        </svg>'
                      ),
                    },
                    {
                      id: t,
                      command: function () {
                        return e.runCommand(t);
                      },
                      label: "<svg ".concat(
                        f,
                        ' viewBox="0 0 24 24">\n            <path fill="currentColor" d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />\n        </svg>'
                      ),
                    },
                    {
                      id: i,
                      command: function () {
                        return e.runCommand(i);
                      },
                      label: "<svg ".concat(
                        f,
                        ' viewBox="0 0 24 24">\n              <path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />\n          </svg>'
                      ),
                    },
                  ],
                },
                {
                  id: "views",
                  buttons: [
                    {
                      id: u,
                      command: u,
                      active: !0,
                      label: "<svg ".concat(
                        f,
                        ' viewBox="0 0 24 24">\n            <path fill="currentColor" d="M20.71,4.63L19.37,3.29C19,2.9 18.35,2.9 17.96,3.29L9,12.25L11.75,15L20.71,6.04C21.1,5.65 21.1,5 20.71,4.63M7,14A3,3 0 0,0 4,17C4,18.31 2.84,19 2,19C2.92,20.22 4.5,21 6,21A4,4 0 0,0 10,17A3,3 0 0,0 7,14Z" />\n        </svg>'
                      ),
                    },
                    {
                      id: p,
                      command: p,
                      label: "<svg ".concat(
                        f,
                        ' viewBox="0 0 24 24">\n          <path fill="currentColor" d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />\n      </svg>'
                      ),
                    },
                    {
                      id: m,
                      command: m,
                      label: "<svg ".concat(
                        f,
                        ' viewBox="0 0 24 24">\n          <path fill="currentColor" d="M12,16L19.36,10.27L21,9L12,2L3,9L4.63,10.27M12,18.54L4.62,12.81L3,14.07L12,21.07L21,14.07L19.37,12.8L12,18.54Z" />\n      </svg>'
                      ),
                    },
                    {
                      id: v,
                      command: v,
                      label: "<svg ".concat(
                        f,
                        ' viewBox="0 0 24 24">\n          <path fill="currentColor" d="M17,13H13V17H11V13H7V11H11V7H13V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" />\n      </svg>'
                      ),
                    },
                  ],
                },
              ]);
            var g = c.getButton("views", v);
            e.on("load", function () {
              return null == g ? void 0 : g.set("active", !0);
            }),
              n.showStylesOnChange &&
                e.on("component:selected", function () {
                  var n = c.getButton("views", u),
                    t = c.getButton("views", m);
                  (t && t.get("active")) ||
                    !e.getSelected() ||
                    null == n ||
                    n.set("active", !0);
                });
          })(e, c);
      };
      return n;
    })()
);
