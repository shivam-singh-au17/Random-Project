!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports["grapesjs-parser-postcss"] = t())
    : (e["grapesjs-parser-postcss"] = t());
})(
  "undefined" != typeof globalThis
    ? globalThis
    : "undefined" != typeof window
    ? window
    : this,
  () =>
    (() => {
      var e = {
          241: (e) => {
            var t = String,
              s = function () {
                return {
                  isColorSupported: !1,
                  reset: t,
                  bold: t,
                  dim: t,
                  italic: t,
                  underline: t,
                  inverse: t,
                  hidden: t,
                  strikethrough: t,
                  black: t,
                  red: t,
                  green: t,
                  yellow: t,
                  blue: t,
                  magenta: t,
                  cyan: t,
                  white: t,
                  gray: t,
                  bgBlack: t,
                  bgRed: t,
                  bgGreen: t,
                  bgYellow: t,
                  bgBlue: t,
                  bgMagenta: t,
                  bgCyan: t,
                  bgWhite: t,
                };
              };
            (e.exports = s()), (e.exports.createColors = s);
          },
          353: (e, t, s) => {
            "use strict";
            let r = s(19);
            class i extends r {
              constructor(e) {
                super(e), (this.type = "atrule");
              }
              append(...e) {
                return (
                  this.proxyOf.nodes || (this.nodes = []), super.append(...e)
                );
              }
              prepend(...e) {
                return (
                  this.proxyOf.nodes || (this.nodes = []), super.prepend(...e)
                );
              }
            }
            (e.exports = i), (i.default = i), r.registerAtRule(i);
          },
          932: (e, t, s) => {
            "use strict";
            let r = s(631);
            class i extends r {
              constructor(e) {
                super(e), (this.type = "comment");
              }
            }
            (e.exports = i), (i.default = i);
          },
          19: (e, t, s) => {
            "use strict";
            let r,
              i,
              n,
              { isClean: o, my: l } = s(513),
              a = s(258),
              h = s(932),
              u = s(631);
            function c(e) {
              return e.map(
                (e) => (e.nodes && (e.nodes = c(e.nodes)), delete e.source, e)
              );
            }
            function p(e) {
              if (((e[o] = !1), e.proxyOf.nodes))
                for (let t of e.proxyOf.nodes) p(t);
            }
            class f extends u {
              push(e) {
                return (e.parent = this), this.proxyOf.nodes.push(e), this;
              }
              each(e) {
                if (!this.proxyOf.nodes) return;
                let t,
                  s,
                  r = this.getIterator();
                for (
                  ;
                  this.indexes[r] < this.proxyOf.nodes.length &&
                  ((t = this.indexes[r]),
                  (s = e(this.proxyOf.nodes[t], t)),
                  !1 !== s);

                )
                  this.indexes[r] += 1;
                return delete this.indexes[r], s;
              }
              walk(e) {
                return this.each((t, s) => {
                  let r;
                  try {
                    r = e(t, s);
                  } catch (e) {
                    throw t.addToError(e);
                  }
                  return !1 !== r && t.walk && (r = t.walk(e)), r;
                });
              }
              walkDecls(e, t) {
                return t
                  ? e instanceof RegExp
                    ? this.walk((s, r) => {
                        if ("decl" === s.type && e.test(s.prop)) return t(s, r);
                      })
                    : this.walk((s, r) => {
                        if ("decl" === s.type && s.prop === e) return t(s, r);
                      })
                  : ((t = e),
                    this.walk((e, s) => {
                      if ("decl" === e.type) return t(e, s);
                    }));
              }
              walkRules(e, t) {
                return t
                  ? e instanceof RegExp
                    ? this.walk((s, r) => {
                        if ("rule" === s.type && e.test(s.selector))
                          return t(s, r);
                      })
                    : this.walk((s, r) => {
                        if ("rule" === s.type && s.selector === e)
                          return t(s, r);
                      })
                  : ((t = e),
                    this.walk((e, s) => {
                      if ("rule" === e.type) return t(e, s);
                    }));
              }
              walkAtRules(e, t) {
                return t
                  ? e instanceof RegExp
                    ? this.walk((s, r) => {
                        if ("atrule" === s.type && e.test(s.name))
                          return t(s, r);
                      })
                    : this.walk((s, r) => {
                        if ("atrule" === s.type && s.name === e) return t(s, r);
                      })
                  : ((t = e),
                    this.walk((e, s) => {
                      if ("atrule" === e.type) return t(e, s);
                    }));
              }
              walkComments(e) {
                return this.walk((t, s) => {
                  if ("comment" === t.type) return e(t, s);
                });
              }
              append(...e) {
                for (let t of e) {
                  let e = this.normalize(t, this.last);
                  for (let t of e) this.proxyOf.nodes.push(t);
                }
                return this.markDirty(), this;
              }
              prepend(...e) {
                e = e.reverse();
                for (let t of e) {
                  let e = this.normalize(t, this.first, "prepend").reverse();
                  for (let t of e) this.proxyOf.nodes.unshift(t);
                  for (let t in this.indexes)
                    this.indexes[t] = this.indexes[t] + e.length;
                }
                return this.markDirty(), this;
              }
              cleanRaws(e) {
                if ((super.cleanRaws(e), this.nodes))
                  for (let t of this.nodes) t.cleanRaws(e);
              }
              insertBefore(e, t) {
                let s,
                  r = 0 === (e = this.index(e)) && "prepend",
                  i = this.normalize(t, this.proxyOf.nodes[e], r).reverse();
                for (let t of i) this.proxyOf.nodes.splice(e, 0, t);
                for (let t in this.indexes)
                  (s = this.indexes[t]),
                    e <= s && (this.indexes[t] = s + i.length);
                return this.markDirty(), this;
              }
              insertAfter(e, t) {
                e = this.index(e);
                let s,
                  r = this.normalize(t, this.proxyOf.nodes[e]).reverse();
                for (let t of r) this.proxyOf.nodes.splice(e + 1, 0, t);
                for (let t in this.indexes)
                  (s = this.indexes[t]),
                    e < s && (this.indexes[t] = s + r.length);
                return this.markDirty(), this;
              }
              removeChild(e) {
                let t;
                (e = this.index(e)),
                  (this.proxyOf.nodes[e].parent = void 0),
                  this.proxyOf.nodes.splice(e, 1);
                for (let s in this.indexes)
                  (t = this.indexes[s]), t >= e && (this.indexes[s] = t - 1);
                return this.markDirty(), this;
              }
              removeAll() {
                for (let e of this.proxyOf.nodes) e.parent = void 0;
                return (this.proxyOf.nodes = []), this.markDirty(), this;
              }
              replaceValues(e, t, s) {
                return (
                  s || ((s = t), (t = {})),
                  this.walkDecls((r) => {
                    (t.props && !t.props.includes(r.prop)) ||
                      (t.fast && !r.value.includes(t.fast)) ||
                      (r.value = r.value.replace(e, s));
                  }),
                  this.markDirty(),
                  this
                );
              }
              every(e) {
                return this.nodes.every(e);
              }
              some(e) {
                return this.nodes.some(e);
              }
              index(e) {
                return "number" == typeof e
                  ? e
                  : (e.proxyOf && (e = e.proxyOf),
                    this.proxyOf.nodes.indexOf(e));
              }
              get first() {
                if (this.proxyOf.nodes) return this.proxyOf.nodes[0];
              }
              get last() {
                if (this.proxyOf.nodes)
                  return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
              }
              normalize(e, t) {
                if ("string" == typeof e) e = c(r(e).nodes);
                else if (Array.isArray(e)) {
                  e = e.slice(0);
                  for (let t of e)
                    t.parent && t.parent.removeChild(t, "ignore");
                } else if ("root" === e.type && "document" !== this.type) {
                  e = e.nodes.slice(0);
                  for (let t of e)
                    t.parent && t.parent.removeChild(t, "ignore");
                } else if (e.type) e = [e];
                else if (e.prop) {
                  if (void 0 === e.value)
                    throw new Error("Value field is missed in node creation");
                  "string" != typeof e.value && (e.value = String(e.value)),
                    (e = [new a(e)]);
                } else if (e.selector) e = [new i(e)];
                else if (e.name) e = [new n(e)];
                else {
                  if (!e.text)
                    throw new Error("Unknown node type in node creation");
                  e = [new h(e)];
                }
                return e.map(
                  (e) => (
                    e[l] || f.rebuild(e),
                    (e = e.proxyOf).parent && e.parent.removeChild(e),
                    e[o] && p(e),
                    void 0 === e.raws.before &&
                      t &&
                      void 0 !== t.raws.before &&
                      (e.raws.before = t.raws.before.replace(/\S/g, "")),
                    (e.parent = this.proxyOf),
                    e
                  )
                );
              }
              getProxyProcessor() {
                return {
                  set: (e, t, s) => (
                    e[t] === s ||
                      ((e[t] = s),
                      ("name" !== t && "params" !== t && "selector" !== t) ||
                        e.markDirty()),
                    !0
                  ),
                  get: (e, t) =>
                    "proxyOf" === t
                      ? e
                      : e[t]
                      ? "each" === t ||
                        ("string" == typeof t && t.startsWith("walk"))
                        ? (...s) =>
                            e[t](
                              ...s.map((e) =>
                                "function" == typeof e
                                  ? (t, s) => e(t.toProxy(), s)
                                  : e
                              )
                            )
                        : "every" === t || "some" === t
                        ? (s) => e[t]((e, ...t) => s(e.toProxy(), ...t))
                        : "root" === t
                        ? () => e.root().toProxy()
                        : "nodes" === t
                        ? e.nodes.map((e) => e.toProxy())
                        : "first" === t || "last" === t
                        ? e[t].toProxy()
                        : e[t]
                      : e[t],
                };
              }
              getIterator() {
                this.lastEach || (this.lastEach = 0),
                  this.indexes || (this.indexes = {}),
                  (this.lastEach += 1);
                let e = this.lastEach;
                return (this.indexes[e] = 0), e;
              }
            }
            (f.registerParse = (e) => {
              r = e;
            }),
              (f.registerRule = (e) => {
                i = e;
              }),
              (f.registerAtRule = (e) => {
                n = e;
              }),
              (e.exports = f),
              (f.default = f),
              (f.rebuild = (e) => {
                "atrule" === e.type
                  ? Object.setPrototypeOf(e, n.prototype)
                  : "rule" === e.type
                  ? Object.setPrototypeOf(e, i.prototype)
                  : "decl" === e.type
                  ? Object.setPrototypeOf(e, a.prototype)
                  : "comment" === e.type &&
                    Object.setPrototypeOf(e, h.prototype),
                  (e[l] = !0),
                  e.nodes &&
                    e.nodes.forEach((e) => {
                      f.rebuild(e);
                    });
              });
          },
          671: (e, t, s) => {
            "use strict";
            let r = s(241),
              i = s(868);
            class n extends Error {
              constructor(e, t, s, r, i, o) {
                super(e),
                  (this.name = "CssSyntaxError"),
                  (this.reason = e),
                  i && (this.file = i),
                  r && (this.source = r),
                  o && (this.plugin = o),
                  void 0 !== t &&
                    void 0 !== s &&
                    ("number" == typeof t
                      ? ((this.line = t), (this.column = s))
                      : ((this.line = t.line),
                        (this.column = t.column),
                        (this.endLine = s.line),
                        (this.endColumn = s.column))),
                  this.setMessage(),
                  Error.captureStackTrace && Error.captureStackTrace(this, n);
              }
              setMessage() {
                (this.message = this.plugin ? this.plugin + ": " : ""),
                  (this.message += this.file ? this.file : "<css input>"),
                  void 0 !== this.line &&
                    (this.message += ":" + this.line + ":" + this.column),
                  (this.message += ": " + this.reason);
              }
              showSourceCode(e) {
                if (!this.source) return "";
                let t = this.source;
                null == e && (e = r.isColorSupported), i && e && (t = i(t));
                let s,
                  n,
                  o = t.split(/\r?\n/),
                  l = Math.max(this.line - 3, 0),
                  a = Math.min(this.line + 2, o.length),
                  h = String(a).length;
                if (e) {
                  let { bold: e, red: t, gray: i } = r.createColors(!0);
                  (s = (s) => e(t(s))), (n = (e) => i(e));
                } else s = n = (e) => e;
                return o
                  .slice(l, a)
                  .map((e, t) => {
                    let r = l + 1 + t,
                      i = " " + (" " + r).slice(-h) + " | ";
                    if (r === this.line) {
                      let t =
                        n(i.replace(/\d/g, " ")) +
                        e.slice(0, this.column - 1).replace(/[^\t]/g, " ");
                      return s(">") + n(i) + e + "\n " + t + s("^");
                    }
                    return " " + n(i) + e;
                  })
                  .join("\n");
              }
              toString() {
                let e = this.showSourceCode();
                return (
                  e && (e = "\n\n" + e + "\n"),
                  this.name + ": " + this.message + e
                );
              }
            }
            (e.exports = n), (n.default = n);
          },
          258: (e, t, s) => {
            "use strict";
            let r = s(631);
            class i extends r {
              constructor(e) {
                e &&
                  void 0 !== e.value &&
                  "string" != typeof e.value &&
                  (e = { ...e, value: String(e.value) }),
                  super(e),
                  (this.type = "decl");
              }
              get variable() {
                return this.prop.startsWith("--") || "$" === this.prop[0];
              }
            }
            (e.exports = i), (i.default = i);
          },
          461: (e, t, s) => {
            "use strict";
            let r,
              i,
              n = s(19);
            class o extends n {
              constructor(e) {
                super({ type: "document", ...e }),
                  this.nodes || (this.nodes = []);
              }
              toResult(e = {}) {
                return new r(new i(), this, e).stringify();
              }
            }
            (o.registerLazyResult = (e) => {
              r = e;
            }),
              (o.registerProcessor = (e) => {
                i = e;
              }),
              (e.exports = o),
              (o.default = o);
          },
          250: (e, t, s) => {
            "use strict";
            let r = s(258),
              i = s(981),
              n = s(932),
              o = s(353),
              l = s(995),
              a = s(25),
              h = s(675);
            function u(e, t) {
              if (Array.isArray(e)) return e.map((e) => u(e));
              let { inputs: s, ...c } = e;
              if (s) {
                t = [];
                for (let e of s) {
                  let s = { ...e, __proto__: l.prototype };
                  s.map && (s.map = { ...s.map, __proto__: i.prototype }),
                    t.push(s);
                }
              }
              if (
                (c.nodes && (c.nodes = e.nodes.map((e) => u(e, t))), c.source)
              ) {
                let { inputId: e, ...s } = c.source;
                (c.source = s), null != e && (c.source.input = t[e]);
              }
              if ("root" === c.type) return new a(c);
              if ("decl" === c.type) return new r(c);
              if ("rule" === c.type) return new h(c);
              if ("comment" === c.type) return new n(c);
              if ("atrule" === c.type) return new o(c);
              throw new Error("Unknown node type: " + e.type);
            }
            (e.exports = u), (u.default = u);
          },
          995: (e, t, s) => {
            "use strict";
            let { SourceMapConsumer: r, SourceMapGenerator: i } = s(209),
              { fileURLToPath: n, pathToFileURL: o } = s(414),
              { resolve: l, isAbsolute: a } = s(830),
              { nanoid: h } = s(961),
              u = s(868),
              c = s(671),
              p = s(981),
              f = Symbol("fromOffsetCache"),
              d = Boolean(r && i),
              m = Boolean(l && a);
            class g {
              constructor(e, t = {}) {
                if (null == e || ("object" == typeof e && !e.toString))
                  throw new Error(
                    `PostCSS received ${e} instead of CSS string`
                  );
                if (
                  ((this.css = e.toString()),
                  "\ufeff" === this.css[0] || "￾" === this.css[0]
                    ? ((this.hasBOM = !0), (this.css = this.css.slice(1)))
                    : (this.hasBOM = !1),
                  t.from &&
                    (!m || /^\w+:\/\//.test(t.from) || a(t.from)
                      ? (this.file = t.from)
                      : (this.file = l(t.from))),
                  m && d)
                ) {
                  let e = new p(this.css, t);
                  if (e.text) {
                    this.map = e;
                    let t = e.consumer().file;
                    !this.file && t && (this.file = this.mapResolve(t));
                  }
                }
                this.file || (this.id = "<input css " + h(6) + ">"),
                  this.map && (this.map.file = this.from);
              }
              fromOffset(e) {
                let t, s;
                if (this[f]) s = this[f];
                else {
                  let e = this.css.split("\n");
                  s = new Array(e.length);
                  let t = 0;
                  for (let r = 0, i = e.length; r < i; r++)
                    (s[r] = t), (t += e[r].length + 1);
                  this[f] = s;
                }
                t = s[s.length - 1];
                let r = 0;
                if (e >= t) r = s.length - 1;
                else {
                  let t,
                    i = s.length - 2;
                  for (; r < i; )
                    if (((t = r + ((i - r) >> 1)), e < s[t])) i = t - 1;
                    else {
                      if (!(e >= s[t + 1])) {
                        r = t;
                        break;
                      }
                      r = t + 1;
                    }
                }
                return { line: r + 1, col: e - s[r] + 1 };
              }
              error(e, t, s, r = {}) {
                let i, n, l;
                if (t && "object" == typeof t) {
                  let e = t,
                    r = s;
                  if ("number" == typeof t.offset) {
                    let r = this.fromOffset(e.offset);
                    (t = r.line), (s = r.col);
                  } else (t = e.line), (s = e.column);
                  if ("number" == typeof r.offset) {
                    let e = this.fromOffset(r.offset);
                    (n = e.line), (l = e.col);
                  } else (n = r.line), (l = r.column);
                } else if (!s) {
                  let e = this.fromOffset(t);
                  (t = e.line), (s = e.col);
                }
                let a = this.origin(t, s, n, l);
                return (
                  (i = a
                    ? new c(
                        e,
                        void 0 === a.endLine
                          ? a.line
                          : { line: a.line, column: a.column },
                        void 0 === a.endLine
                          ? a.column
                          : { line: a.endLine, column: a.endColumn },
                        a.source,
                        a.file,
                        r.plugin
                      )
                    : new c(
                        e,
                        void 0 === n ? t : { line: t, column: s },
                        void 0 === n ? s : { line: n, column: l },
                        this.css,
                        this.file,
                        r.plugin
                      )),
                  (i.input = {
                    line: t,
                    column: s,
                    endLine: n,
                    endColumn: l,
                    source: this.css,
                  }),
                  this.file &&
                    (o && (i.input.url = o(this.file).toString()),
                    (i.input.file = this.file)),
                  i
                );
              }
              origin(e, t, s, r) {
                if (!this.map) return !1;
                let i,
                  l,
                  h = this.map.consumer(),
                  u = h.originalPositionFor({ line: e, column: t });
                if (!u.source) return !1;
                "number" == typeof s &&
                  (i = h.originalPositionFor({ line: s, column: r })),
                  (l = a(u.source)
                    ? o(u.source)
                    : new URL(
                        u.source,
                        this.map.consumer().sourceRoot || o(this.map.mapFile)
                      ));
                let c = {
                  url: l.toString(),
                  line: u.line,
                  column: u.column,
                  endLine: i && i.line,
                  endColumn: i && i.column,
                };
                if ("file:" === l.protocol) {
                  if (!n)
                    throw new Error(
                      `file: protocol is not available in this PostCSS build`
                    );
                  c.file = n(l);
                }
                let p = h.sourceContentFor(u.source);
                return p && (c.source = p), c;
              }
              mapResolve(e) {
                return /^\w+:\/\//.test(e)
                  ? e
                  : l(
                      this.map.consumer().sourceRoot || this.map.root || ".",
                      e
                    );
              }
              get from() {
                return this.file || this.id;
              }
              toJSON() {
                let e = {};
                for (let t of ["hasBOM", "css", "file", "id"])
                  null != this[t] && (e[t] = this[t]);
                return (
                  this.map &&
                    ((e.map = { ...this.map }),
                    e.map.consumerCache && (e.map.consumerCache = void 0)),
                  e
                );
              }
            }
            (e.exports = g),
              (g.default = g),
              u && u.registerInput && u.registerInput(g);
          },
          939: (e, t, s) => {
            "use strict";
            let { isClean: r, my: i } = s(513),
              n = s(505),
              o = s(88),
              l = s(19),
              a = s(461),
              h = (s(448), s(632)),
              u = s(964),
              c = s(25);
            const p = {
                document: "Document",
                root: "Root",
                atrule: "AtRule",
                rule: "Rule",
                decl: "Declaration",
                comment: "Comment",
              },
              f = {
                postcssPlugin: !0,
                prepare: !0,
                Once: !0,
                Document: !0,
                Root: !0,
                Declaration: !0,
                Rule: !0,
                AtRule: !0,
                Comment: !0,
                DeclarationExit: !0,
                RuleExit: !0,
                AtRuleExit: !0,
                CommentExit: !0,
                RootExit: !0,
                DocumentExit: !0,
                OnceExit: !0,
              },
              d = { postcssPlugin: !0, prepare: !0, Once: !0 },
              m = 0;
            function g(e) {
              return "object" == typeof e && "function" == typeof e.then;
            }
            function w(e) {
              let t = !1,
                s = p[e.type];
              return (
                "decl" === e.type
                  ? (t = e.prop.toLowerCase())
                  : "atrule" === e.type && (t = e.name.toLowerCase()),
                t && e.append
                  ? [s, s + "-" + t, m, s + "Exit", s + "Exit-" + t]
                  : t
                  ? [s, s + "-" + t, s + "Exit", s + "Exit-" + t]
                  : e.append
                  ? [s, m, s + "Exit"]
                  : [s, s + "Exit"]
              );
            }
            function y(e) {
              let t;
              return (
                (t =
                  "document" === e.type
                    ? ["Document", m, "DocumentExit"]
                    : "root" === e.type
                    ? ["Root", m, "RootExit"]
                    : w(e)),
                {
                  node: e,
                  events: t,
                  eventIndex: 0,
                  visitors: [],
                  visitorIndex: 0,
                  iterator: 0,
                }
              );
            }
            function x(e) {
              return (e[r] = !1), e.nodes && e.nodes.forEach((e) => x(e)), e;
            }
            let b = {};
            class v {
              constructor(e, t, s) {
                let r;
                if (
                  ((this.stringified = !1),
                  (this.processed = !1),
                  "object" != typeof t ||
                    null === t ||
                    ("root" !== t.type && "document" !== t.type))
                )
                  if (t instanceof v || t instanceof h)
                    (r = x(t.root)),
                      t.map &&
                        (void 0 === s.map && (s.map = {}),
                        s.map.inline || (s.map.inline = !1),
                        (s.map.prev = t.map));
                  else {
                    let e = u;
                    s.syntax && (e = s.syntax.parse),
                      s.parser && (e = s.parser),
                      e.parse && (e = e.parse);
                    try {
                      r = e(t, s);
                    } catch (e) {
                      (this.processed = !0), (this.error = e);
                    }
                    r && !r[i] && l.rebuild(r);
                  }
                else r = x(t);
                (this.result = new h(e, r, s)),
                  (this.helpers = { ...b, result: this.result, postcss: b }),
                  (this.plugins = this.processor.plugins.map((e) =>
                    "object" == typeof e && e.prepare
                      ? { ...e, ...e.prepare(this.result) }
                      : e
                  ));
              }
              get [Symbol.toStringTag]() {
                return "LazyResult";
              }
              get processor() {
                return this.result.processor;
              }
              get opts() {
                return this.result.opts;
              }
              get css() {
                return this.stringify().css;
              }
              get content() {
                return this.stringify().content;
              }
              get map() {
                return this.stringify().map;
              }
              get root() {
                return this.sync().root;
              }
              get messages() {
                return this.sync().messages;
              }
              warnings() {
                return this.sync().warnings();
              }
              toString() {
                return this.css;
              }
              then(e, t) {
                return this.async().then(e, t);
              }
              catch(e) {
                return this.async().catch(e);
              }
              finally(e) {
                return this.async().then(e, e);
              }
              async() {
                return this.error
                  ? Promise.reject(this.error)
                  : this.processed
                  ? Promise.resolve(this.result)
                  : (this.processing || (this.processing = this.runAsync()),
                    this.processing);
              }
              sync() {
                if (this.error) throw this.error;
                if (this.processed) return this.result;
                if (((this.processed = !0), this.processing))
                  throw this.getAsyncError();
                for (let e of this.plugins) {
                  if (g(this.runOnRoot(e))) throw this.getAsyncError();
                }
                if ((this.prepareVisitors(), this.hasListener)) {
                  let e = this.result.root;
                  for (; !e[r]; ) (e[r] = !0), this.walkSync(e);
                  if (this.listeners.OnceExit)
                    if ("document" === e.type)
                      for (let t of e.nodes)
                        this.visitSync(this.listeners.OnceExit, t);
                    else this.visitSync(this.listeners.OnceExit, e);
                }
                return this.result;
              }
              stringify() {
                if (this.error) throw this.error;
                if (this.stringified) return this.result;
                (this.stringified = !0), this.sync();
                let e = this.result.opts,
                  t = o;
                e.syntax && (t = e.syntax.stringify),
                  e.stringifier && (t = e.stringifier),
                  t.stringify && (t = t.stringify);
                let s = new n(t, this.result.root, this.result.opts).generate();
                return (
                  (this.result.css = s[0]),
                  (this.result.map = s[1]),
                  this.result
                );
              }
              walkSync(e) {
                e[r] = !0;
                let t = w(e);
                for (let s of t)
                  if (s === m)
                    e.nodes &&
                      e.each((e) => {
                        e[r] || this.walkSync(e);
                      });
                  else {
                    let t = this.listeners[s];
                    if (t && this.visitSync(t, e.toProxy())) return;
                  }
              }
              visitSync(e, t) {
                for (let [s, r] of e) {
                  let e;
                  this.result.lastPlugin = s;
                  try {
                    e = r(t, this.helpers);
                  } catch (e) {
                    throw this.handleError(e, t.proxyOf);
                  }
                  if ("root" !== t.type && "document" !== t.type && !t.parent)
                    return !0;
                  if (g(e)) throw this.getAsyncError();
                }
              }
              runOnRoot(e) {
                this.result.lastPlugin = e;
                try {
                  if ("object" == typeof e && e.Once) {
                    if ("document" === this.result.root.type) {
                      let t = this.result.root.nodes.map((t) =>
                        e.Once(t, this.helpers)
                      );
                      return g(t[0]) ? Promise.all(t) : t;
                    }
                    return e.Once(this.result.root, this.helpers);
                  }
                  if ("function" == typeof e)
                    return e(this.result.root, this.result);
                } catch (e) {
                  throw this.handleError(e);
                }
              }
              getAsyncError() {
                throw new Error(
                  "Use process(css).then(cb) to work with async plugins"
                );
              }
              handleError(e, t) {
                let s = this.result.lastPlugin;
                try {
                  t && t.addToError(e),
                    (this.error = e),
                    "CssSyntaxError" !== e.name || e.plugin
                      ? s.postcssVersion
                      : ((e.plugin = s.postcssPlugin), e.setMessage());
                } catch (e) {
                  console && console.error && console.error(e);
                }
                return e;
              }
              async runAsync() {
                this.plugin = 0;
                for (let e = 0; e < this.plugins.length; e++) {
                  let t = this.plugins[e],
                    s = this.runOnRoot(t);
                  if (g(s))
                    try {
                      await s;
                    } catch (e) {
                      throw this.handleError(e);
                    }
                }
                if ((this.prepareVisitors(), this.hasListener)) {
                  let e = this.result.root;
                  for (; !e[r]; ) {
                    e[r] = !0;
                    let t = [y(e)];
                    for (; t.length > 0; ) {
                      let e = this.visitTick(t);
                      if (g(e))
                        try {
                          await e;
                        } catch (e) {
                          let s = t[t.length - 1].node;
                          throw this.handleError(e, s);
                        }
                    }
                  }
                  if (this.listeners.OnceExit)
                    for (let [t, s] of this.listeners.OnceExit) {
                      this.result.lastPlugin = t;
                      try {
                        if ("document" === e.type) {
                          let t = e.nodes.map((e) => s(e, this.helpers));
                          await Promise.all(t);
                        } else await s(e, this.helpers);
                      } catch (e) {
                        throw this.handleError(e);
                      }
                    }
                }
                return (this.processed = !0), this.stringify();
              }
              prepareVisitors() {
                this.listeners = {};
                let e = (e, t, s) => {
                  this.listeners[t] || (this.listeners[t] = []),
                    this.listeners[t].push([e, s]);
                };
                for (let t of this.plugins)
                  if ("object" == typeof t)
                    for (let s in t) {
                      if (!f[s] && /^[A-Z]/.test(s))
                        throw new Error(
                          `Unknown event ${s} in ${t.postcssPlugin}. ` +
                            `Try to update PostCSS (${this.processor.version} now).`
                        );
                      if (!d[s])
                        if ("object" == typeof t[s])
                          for (let r in t[s])
                            e(
                              t,
                              "*" === r ? s : s + "-" + r.toLowerCase(),
                              t[s][r]
                            );
                        else "function" == typeof t[s] && e(t, s, t[s]);
                    }
                this.hasListener = Object.keys(this.listeners).length > 0;
              }
              visitTick(e) {
                let t = e[e.length - 1],
                  { node: s, visitors: i } = t;
                if ("root" !== s.type && "document" !== s.type && !s.parent)
                  return void e.pop();
                if (i.length > 0 && t.visitorIndex < i.length) {
                  let [e, r] = i[t.visitorIndex];
                  (t.visitorIndex += 1),
                    t.visitorIndex === i.length &&
                      ((t.visitors = []), (t.visitorIndex = 0)),
                    (this.result.lastPlugin = e);
                  try {
                    return r(s.toProxy(), this.helpers);
                  } catch (e) {
                    throw this.handleError(e, s);
                  }
                }
                if (0 !== t.iterator) {
                  let i,
                    n = t.iterator;
                  for (; (i = s.nodes[s.indexes[n]]); )
                    if (((s.indexes[n] += 1), !i[r]))
                      return (i[r] = !0), void e.push(y(i));
                  (t.iterator = 0), delete s.indexes[n];
                }
                let n = t.events;
                for (; t.eventIndex < n.length; ) {
                  let e = n[t.eventIndex];
                  if (((t.eventIndex += 1), e === m))
                    return void (
                      s.nodes &&
                      s.nodes.length &&
                      ((s[r] = !0), (t.iterator = s.getIterator()))
                    );
                  if (this.listeners[e])
                    return void (t.visitors = this.listeners[e]);
                }
                e.pop();
              }
            }
            (v.registerPostcss = (e) => {
              b = e;
            }),
              (e.exports = v),
              (v.default = v),
              c.registerLazyResult(v),
              a.registerLazyResult(v);
          },
          715: (e) => {
            "use strict";
            let t = {
              split(e, t, s) {
                let r = [],
                  i = "",
                  n = !1,
                  o = 0,
                  l = !1,
                  a = !1;
                for (let s of e)
                  a
                    ? (a = !1)
                    : "\\" === s
                    ? (a = !0)
                    : l
                    ? s === l && (l = !1)
                    : '"' === s || "'" === s
                    ? (l = s)
                    : "(" === s
                    ? (o += 1)
                    : ")" === s
                    ? o > 0 && (o -= 1)
                    : 0 === o && t.includes(s) && (n = !0),
                    n
                      ? ("" !== i && r.push(i.trim()), (i = ""), (n = !1))
                      : (i += s);
                return (s || "" !== i) && r.push(i.trim()), r;
              },
              space: (e) => t.split(e, [" ", "\n", "\t"]),
              comma: (e) => t.split(e, [","], !0),
            };
            (e.exports = t), (t.default = t);
          },
          505: (e, t, s) => {
            "use strict";
            let { SourceMapConsumer: r, SourceMapGenerator: i } = s(209),
              { dirname: n, resolve: o, relative: l, sep: a } = s(830),
              { pathToFileURL: h } = s(414),
              u = s(995),
              c = Boolean(r && i),
              p = Boolean(n && o && l && a);
            e.exports = class {
              constructor(e, t, s, r) {
                (this.stringify = e),
                  (this.mapOpts = s.map || {}),
                  (this.root = t),
                  (this.opts = s),
                  (this.css = r);
              }
              isMap() {
                return void 0 !== this.opts.map
                  ? !!this.opts.map
                  : this.previous().length > 0;
              }
              previous() {
                if (!this.previousMaps)
                  if (((this.previousMaps = []), this.root))
                    this.root.walk((e) => {
                      if (e.source && e.source.input.map) {
                        let t = e.source.input.map;
                        this.previousMaps.includes(t) ||
                          this.previousMaps.push(t);
                      }
                    });
                  else {
                    let e = new u(this.css, this.opts);
                    e.map && this.previousMaps.push(e.map);
                  }
                return this.previousMaps;
              }
              isInline() {
                if (void 0 !== this.mapOpts.inline) return this.mapOpts.inline;
                let e = this.mapOpts.annotation;
                return (
                  (void 0 === e || !0 === e) &&
                  (!this.previous().length ||
                    this.previous().some((e) => e.inline))
                );
              }
              isSourcesContent() {
                return void 0 !== this.mapOpts.sourcesContent
                  ? this.mapOpts.sourcesContent
                  : !this.previous().length ||
                      this.previous().some((e) => e.withContent());
              }
              clearAnnotation() {
                if (!1 !== this.mapOpts.annotation)
                  if (this.root) {
                    let e;
                    for (let t = this.root.nodes.length - 1; t >= 0; t--)
                      (e = this.root.nodes[t]),
                        "comment" === e.type &&
                          0 === e.text.indexOf("# sourceMappingURL=") &&
                          this.root.removeChild(t);
                  } else
                    this.css &&
                      (this.css = this.css.replace(
                        /(\n)?\/\*#[\S\s]*?\*\/$/gm,
                        ""
                      ));
              }
              setSourcesContent() {
                let e = {};
                if (this.root)
                  this.root.walk((t) => {
                    if (t.source) {
                      let s = t.source.input.from;
                      s &&
                        !e[s] &&
                        ((e[s] = !0),
                        this.map.setSourceContent(
                          this.toUrl(this.path(s)),
                          t.source.input.css
                        ));
                    }
                  });
                else if (this.css) {
                  let e = this.opts.from
                    ? this.toUrl(this.path(this.opts.from))
                    : "<no source>";
                  this.map.setSourceContent(e, this.css);
                }
              }
              applyPrevMaps() {
                for (let e of this.previous()) {
                  let t,
                    s = this.toUrl(this.path(e.file)),
                    i = e.root || n(e.file);
                  !1 === this.mapOpts.sourcesContent
                    ? ((t = new r(e.text)),
                      t.sourcesContent &&
                        (t.sourcesContent = t.sourcesContent.map(() => null)))
                    : (t = e.consumer()),
                    this.map.applySourceMap(t, s, this.toUrl(this.path(i)));
                }
              }
              isAnnotation() {
                return (
                  !!this.isInline() ||
                  (void 0 !== this.mapOpts.annotation
                    ? this.mapOpts.annotation
                    : !this.previous().length ||
                      this.previous().some((e) => e.annotation))
                );
              }
              toBase64(e) {
                return Buffer
                  ? Buffer.from(e).toString("base64")
                  : window.btoa(unescape(encodeURIComponent(e)));
              }
              addAnnotation() {
                let e;
                e = this.isInline()
                  ? "data:application/json;base64," +
                    this.toBase64(this.map.toString())
                  : "string" == typeof this.mapOpts.annotation
                  ? this.mapOpts.annotation
                  : "function" == typeof this.mapOpts.annotation
                  ? this.mapOpts.annotation(this.opts.to, this.root)
                  : this.outputFile() + ".map";
                let t = "\n";
                this.css.includes("\r\n") && (t = "\r\n"),
                  (this.css += t + "/*# sourceMappingURL=" + e + " */");
              }
              outputFile() {
                return this.opts.to
                  ? this.path(this.opts.to)
                  : this.opts.from
                  ? this.path(this.opts.from)
                  : "to.css";
              }
              generateMap() {
                if (this.root) this.generateString();
                else if (1 === this.previous().length) {
                  let e = this.previous()[0].consumer();
                  (e.file = this.outputFile()), (this.map = i.fromSourceMap(e));
                } else
                  (this.map = new i({ file: this.outputFile() })),
                    this.map.addMapping({
                      source: this.opts.from
                        ? this.toUrl(this.path(this.opts.from))
                        : "<no source>",
                      generated: { line: 1, column: 0 },
                      original: { line: 1, column: 0 },
                    });
                return (
                  this.isSourcesContent() && this.setSourcesContent(),
                  this.root &&
                    this.previous().length > 0 &&
                    this.applyPrevMaps(),
                  this.isAnnotation() && this.addAnnotation(),
                  this.isInline() ? [this.css] : [this.css, this.map]
                );
              }
              path(e) {
                if (0 === e.indexOf("<")) return e;
                if (/^\w+:\/\//.test(e)) return e;
                if (this.mapOpts.absolute) return e;
                let t = this.opts.to ? n(this.opts.to) : ".";
                return (
                  "string" == typeof this.mapOpts.annotation &&
                    (t = n(o(t, this.mapOpts.annotation))),
                  (e = l(t, e))
                );
              }
              toUrl(e) {
                return (
                  "\\" === a && (e = e.replace(/\\/g, "/")),
                  encodeURI(e).replace(/[#?]/g, encodeURIComponent)
                );
              }
              sourcePath(e) {
                if (this.mapOpts.from) return this.toUrl(this.mapOpts.from);
                if (this.mapOpts.absolute) {
                  if (h) return h(e.source.input.from).toString();
                  throw new Error(
                    "`map.absolute` option is not available in this PostCSS build"
                  );
                }
                return this.toUrl(this.path(e.source.input.from));
              }
              generateString() {
                (this.css = ""),
                  (this.map = new i({ file: this.outputFile() }));
                let e,
                  t,
                  s = 1,
                  r = 1,
                  n = "<no source>",
                  o = {
                    source: "",
                    generated: { line: 0, column: 0 },
                    original: { line: 0, column: 0 },
                  };
                this.stringify(this.root, (i, l, a) => {
                  if (
                    ((this.css += i),
                    l &&
                      "end" !== a &&
                      ((o.generated.line = s),
                      (o.generated.column = r - 1),
                      l.source && l.source.start
                        ? ((o.source = this.sourcePath(l)),
                          (o.original.line = l.source.start.line),
                          (o.original.column = l.source.start.column - 1),
                          this.map.addMapping(o))
                        : ((o.source = n),
                          (o.original.line = 1),
                          (o.original.column = 0),
                          this.map.addMapping(o))),
                    (e = i.match(/\n/g)),
                    e
                      ? ((s += e.length),
                        (t = i.lastIndexOf("\n")),
                        (r = i.length - t))
                      : (r += i.length),
                    l && "start" !== a)
                  ) {
                    let e = l.parent || { raws: {} };
                    ("decl" !== l.type || l !== e.last || e.raws.semicolon) &&
                      (l.source && l.source.end
                        ? ((o.source = this.sourcePath(l)),
                          (o.original.line = l.source.end.line),
                          (o.original.column = l.source.end.column - 1),
                          (o.generated.line = s),
                          (o.generated.column = r - 2),
                          this.map.addMapping(o))
                        : ((o.source = n),
                          (o.original.line = 1),
                          (o.original.column = 0),
                          (o.generated.line = s),
                          (o.generated.column = r - 1),
                          this.map.addMapping(o)));
                  }
                });
              }
              generate() {
                if ((this.clearAnnotation(), p && c && this.isMap()))
                  return this.generateMap();
                {
                  let e = "";
                  return (
                    this.stringify(this.root, (t) => {
                      e += t;
                    }),
                    [e]
                  );
                }
              }
            };
          },
          647: (e, t, s) => {
            "use strict";
            let r = s(505),
              i = s(88),
              n = (s(448), s(964));
            const o = s(632);
            class l {
              constructor(e, t, s) {
                let n;
                (t = t.toString()),
                  (this.stringified = !1),
                  (this._processor = e),
                  (this._css = t),
                  (this._opts = s),
                  (this._map = void 0);
                let l = i;
                (this.result = new o(this._processor, n, this._opts)),
                  (this.result.css = t);
                let a = this;
                Object.defineProperty(this.result, "root", {
                  get: () => a.root,
                });
                let h = new r(l, n, this._opts, t);
                if (h.isMap()) {
                  let [e, t] = h.generate();
                  e && (this.result.css = e), t && (this.result.map = t);
                }
              }
              get [Symbol.toStringTag]() {
                return "NoWorkResult";
              }
              get processor() {
                return this.result.processor;
              }
              get opts() {
                return this.result.opts;
              }
              get css() {
                return this.result.css;
              }
              get content() {
                return this.result.css;
              }
              get map() {
                return this.result.map;
              }
              get root() {
                if (this._root) return this._root;
                let e,
                  t = n;
                try {
                  e = t(this._css, this._opts);
                } catch (e) {
                  this.error = e;
                }
                if (this.error) throw this.error;
                return (this._root = e), e;
              }
              get messages() {
                return [];
              }
              warnings() {
                return [];
              }
              toString() {
                return this._css;
              }
              then(e, t) {
                return this.async().then(e, t);
              }
              catch(e) {
                return this.async().catch(e);
              }
              finally(e) {
                return this.async().then(e, e);
              }
              async() {
                return this.error
                  ? Promise.reject(this.error)
                  : Promise.resolve(this.result);
              }
              sync() {
                if (this.error) throw this.error;
                return this.result;
              }
            }
            (e.exports = l), (l.default = l);
          },
          631: (e, t, s) => {
            "use strict";
            let { isClean: r, my: i } = s(513),
              n = s(671),
              o = s(62),
              l = s(88);
            function a(e, t) {
              let s = new e.constructor();
              for (let r in e) {
                if (!Object.prototype.hasOwnProperty.call(e, r)) continue;
                if ("proxyCache" === r) continue;
                let i = e[r],
                  n = typeof i;
                "parent" === r && "object" === n
                  ? t && (s[r] = t)
                  : "source" === r
                  ? (s[r] = i)
                  : Array.isArray(i)
                  ? (s[r] = i.map((e) => a(e, s)))
                  : ("object" === n && null !== i && (i = a(i)), (s[r] = i));
              }
              return s;
            }
            class h {
              constructor(e = {}) {
                (this.raws = {}), (this[r] = !1), (this[i] = !0);
                for (let t in e)
                  if ("nodes" === t) {
                    this.nodes = [];
                    for (let s of e[t])
                      "function" == typeof s.clone
                        ? this.append(s.clone())
                        : this.append(s);
                  } else this[t] = e[t];
              }
              error(e, t = {}) {
                if (this.source) {
                  let { start: s, end: r } = this.rangeBy(t);
                  return this.source.input.error(
                    e,
                    { line: s.line, column: s.column },
                    { line: r.line, column: r.column },
                    t
                  );
                }
                return new n(e);
              }
              warn(e, t, s) {
                let r = { node: this };
                for (let e in s) r[e] = s[e];
                return e.warn(t, r);
              }
              remove() {
                return (
                  this.parent && this.parent.removeChild(this),
                  (this.parent = void 0),
                  this
                );
              }
              toString(e = l) {
                e.stringify && (e = e.stringify);
                let t = "";
                return (
                  e(this, (e) => {
                    t += e;
                  }),
                  t
                );
              }
              assign(e = {}) {
                for (let t in e) this[t] = e[t];
                return this;
              }
              clone(e = {}) {
                let t = a(this);
                for (let s in e) t[s] = e[s];
                return t;
              }
              cloneBefore(e = {}) {
                let t = this.clone(e);
                return this.parent.insertBefore(this, t), t;
              }
              cloneAfter(e = {}) {
                let t = this.clone(e);
                return this.parent.insertAfter(this, t), t;
              }
              replaceWith(...e) {
                if (this.parent) {
                  let t = this,
                    s = !1;
                  for (let r of e)
                    r === this
                      ? (s = !0)
                      : s
                      ? (this.parent.insertAfter(t, r), (t = r))
                      : this.parent.insertBefore(t, r);
                  s || this.remove();
                }
                return this;
              }
              next() {
                if (!this.parent) return;
                let e = this.parent.index(this);
                return this.parent.nodes[e + 1];
              }
              prev() {
                if (!this.parent) return;
                let e = this.parent.index(this);
                return this.parent.nodes[e - 1];
              }
              before(e) {
                return this.parent.insertBefore(this, e), this;
              }
              after(e) {
                return this.parent.insertAfter(this, e), this;
              }
              root() {
                let e = this;
                for (; e.parent && "document" !== e.parent.type; ) e = e.parent;
                return e;
              }
              raw(e, t) {
                return new o().raw(this, e, t);
              }
              cleanRaws(e) {
                delete this.raws.before,
                  delete this.raws.after,
                  e || delete this.raws.between;
              }
              toJSON(e, t) {
                let s = {},
                  r = null == t;
                t = t || new Map();
                let i = 0;
                for (let e in this) {
                  if (!Object.prototype.hasOwnProperty.call(this, e)) continue;
                  if ("parent" === e || "proxyCache" === e) continue;
                  let r = this[e];
                  if (Array.isArray(r))
                    s[e] = r.map((e) =>
                      "object" == typeof e && e.toJSON ? e.toJSON(null, t) : e
                    );
                  else if ("object" == typeof r && r.toJSON)
                    s[e] = r.toJSON(null, t);
                  else if ("source" === e) {
                    let n = t.get(r.input);
                    null == n && ((n = i), t.set(r.input, i), i++),
                      (s[e] = { inputId: n, start: r.start, end: r.end });
                  } else s[e] = r;
                }
                return (
                  r && (s.inputs = [...t.keys()].map((e) => e.toJSON())), s
                );
              }
              positionInside(e) {
                let t = this.toString(),
                  s = this.source.start.column,
                  r = this.source.start.line;
                for (let i = 0; i < e; i++)
                  "\n" === t[i] ? ((s = 1), (r += 1)) : (s += 1);
                return { line: r, column: s };
              }
              positionBy(e) {
                let t = this.source.start;
                if (e.index) t = this.positionInside(e.index);
                else if (e.word) {
                  let s = this.toString().indexOf(e.word);
                  -1 !== s && (t = this.positionInside(s));
                }
                return t;
              }
              rangeBy(e) {
                let t = {
                    line: this.source.start.line,
                    column: this.source.start.column,
                  },
                  s = this.source.end
                    ? {
                        line: this.source.end.line,
                        column: this.source.end.column + 1,
                      }
                    : { line: t.line, column: t.column + 1 };
                if (e.word) {
                  let r = this.toString().indexOf(e.word);
                  -1 !== r &&
                    ((t = this.positionInside(r)),
                    (s = this.positionInside(r + e.word.length)));
                } else
                  e.start
                    ? (t = { line: e.start.line, column: e.start.column })
                    : e.index && (t = this.positionInside(e.index)),
                    e.end
                      ? (s = { line: e.end.line, column: e.end.column })
                      : e.endIndex
                      ? (s = this.positionInside(e.endIndex))
                      : e.index && (s = this.positionInside(e.index + 1));
                return (
                  (s.line < t.line ||
                    (s.line === t.line && s.column <= t.column)) &&
                    (s = { line: t.line, column: t.column + 1 }),
                  { start: t, end: s }
                );
              }
              getProxyProcessor() {
                return {
                  set: (e, t, s) => (
                    e[t] === s ||
                      ((e[t] = s),
                      ("prop" !== t &&
                        "value" !== t &&
                        "name" !== t &&
                        "params" !== t &&
                        "important" !== t &&
                        "text" !== t) ||
                        e.markDirty()),
                    !0
                  ),
                  get: (e, t) =>
                    "proxyOf" === t
                      ? e
                      : "root" === t
                      ? () => e.root().toProxy()
                      : e[t],
                };
              }
              toProxy() {
                return (
                  this.proxyCache ||
                    (this.proxyCache = new Proxy(
                      this,
                      this.getProxyProcessor()
                    )),
                  this.proxyCache
                );
              }
              addToError(e) {
                if (
                  ((e.postcssNode = this),
                  e.stack && this.source && /\n\s{4}at /.test(e.stack))
                ) {
                  let t = this.source;
                  e.stack = e.stack.replace(
                    /\n\s{4}at /,
                    `$&${t.input.from}:${t.start.line}:${t.start.column}$&`
                  );
                }
                return e;
              }
              markDirty() {
                if (this[r]) {
                  this[r] = !1;
                  let e = this;
                  for (; (e = e.parent); ) e[r] = !1;
                }
              }
              get proxyOf() {
                return this;
              }
            }
            (e.exports = h), (h.default = h);
          },
          964: (e, t, s) => {
            "use strict";
            let r = s(19),
              i = s(867),
              n = s(995);
            function o(e, t) {
              let s = new n(e, t),
                r = new i(s);
              try {
                r.parse();
              } catch (e) {
                throw e;
              }
              return r.root;
            }
            (e.exports = o), (o.default = o), r.registerParse(o);
          },
          867: (e, t, s) => {
            "use strict";
            let r = s(258),
              i = s(852),
              n = s(932),
              o = s(353),
              l = s(25),
              a = s(675);
            const h = { empty: !0, space: !0 };
            e.exports = class {
              constructor(e) {
                (this.input = e),
                  (this.root = new l()),
                  (this.current = this.root),
                  (this.spaces = ""),
                  (this.semicolon = !1),
                  (this.customProperty = !1),
                  this.createTokenizer(),
                  (this.root.source = {
                    input: e,
                    start: { offset: 0, line: 1, column: 1 },
                  });
              }
              createTokenizer() {
                this.tokenizer = i(this.input);
              }
              parse() {
                let e;
                for (; !this.tokenizer.endOfFile(); )
                  switch (((e = this.tokenizer.nextToken()), e[0])) {
                    case "space":
                      this.spaces += e[1];
                      break;
                    case ";":
                      this.freeSemicolon(e);
                      break;
                    case "}":
                      this.end(e);
                      break;
                    case "comment":
                      this.comment(e);
                      break;
                    case "at-word":
                      this.atrule(e);
                      break;
                    case "{":
                      this.emptyRule(e);
                      break;
                    default:
                      this.other(e);
                  }
                this.endFile();
              }
              comment(e) {
                let t = new n();
                this.init(t, e[2]),
                  (t.source.end = this.getPosition(e[3] || e[2]));
                let s = e[1].slice(2, -2);
                if (/^\s*$/.test(s))
                  (t.text = ""), (t.raws.left = s), (t.raws.right = "");
                else {
                  let e = s.match(/^(\s*)([^]*\S)(\s*)$/);
                  (t.text = e[2]), (t.raws.left = e[1]), (t.raws.right = e[3]);
                }
              }
              emptyRule(e) {
                let t = new a();
                this.init(t, e[2]),
                  (t.selector = ""),
                  (t.raws.between = ""),
                  (this.current = t);
              }
              other(e) {
                let t = !1,
                  s = null,
                  r = !1,
                  i = null,
                  n = [],
                  o = e[1].startsWith("--"),
                  l = [],
                  a = e;
                for (; a; ) {
                  if (((s = a[0]), l.push(a), "(" === s || "[" === s))
                    i || (i = a), n.push("(" === s ? ")" : "]");
                  else if (o && r && "{" === s) i || (i = a), n.push("}");
                  else if (0 === n.length) {
                    if (";" === s) {
                      if (r) return void this.decl(l, o);
                      break;
                    }
                    if ("{" === s) return void this.rule(l);
                    if ("}" === s) {
                      this.tokenizer.back(l.pop()), (t = !0);
                      break;
                    }
                    ":" === s && (r = !0);
                  } else
                    s === n[n.length - 1] &&
                      (n.pop(), 0 === n.length && (i = null));
                  a = this.tokenizer.nextToken();
                }
                if (
                  (this.tokenizer.endOfFile() && (t = !0),
                  n.length > 0 && this.unclosedBracket(i),
                  t && r)
                ) {
                  if (!o)
                    for (
                      ;
                      l.length &&
                      ((a = l[l.length - 1][0]),
                      "space" === a || "comment" === a);

                    )
                      this.tokenizer.back(l.pop());
                  this.decl(l, o);
                } else this.unknownWord(l);
              }
              rule(e) {
                e.pop();
                let t = new a();
                this.init(t, e[0][2]),
                  (t.raws.between = this.spacesAndCommentsFromEnd(e)),
                  this.raw(t, "selector", e),
                  (this.current = t);
              }
              decl(e, t) {
                let s = new r();
                this.init(s, e[0][2]);
                let i,
                  n = e[e.length - 1];
                for (
                  ";" === n[0] && ((this.semicolon = !0), e.pop()),
                    s.source.end = this.getPosition(
                      n[3] ||
                        n[2] ||
                        (function (e) {
                          for (let t = e.length - 1; t >= 0; t--) {
                            let s = e[t],
                              r = s[3] || s[2];
                            if (r) return r;
                          }
                        })(e)
                    );
                  "word" !== e[0][0];

                )
                  1 === e.length && this.unknownWord(e),
                    (s.raws.before += e.shift()[1]);
                for (
                  s.source.start = this.getPosition(e[0][2]), s.prop = "";
                  e.length;

                ) {
                  let t = e[0][0];
                  if (":" === t || "space" === t || "comment" === t) break;
                  s.prop += e.shift()[1];
                }
                for (s.raws.between = ""; e.length; ) {
                  if (((i = e.shift()), ":" === i[0])) {
                    s.raws.between += i[1];
                    break;
                  }
                  "word" === i[0] && /\w/.test(i[1]) && this.unknownWord([i]),
                    (s.raws.between += i[1]);
                }
                ("_" !== s.prop[0] && "*" !== s.prop[0]) ||
                  ((s.raws.before += s.prop[0]), (s.prop = s.prop.slice(1)));
                let o,
                  l = [];
                for (
                  ;
                  e.length && ((o = e[0][0]), "space" === o || "comment" === o);

                )
                  l.push(e.shift());
                this.precheckMissedSemicolon(e);
                for (let t = e.length - 1; t >= 0; t--) {
                  if (((i = e[t]), "!important" === i[1].toLowerCase())) {
                    s.important = !0;
                    let r = this.stringFrom(e, t);
                    (r = this.spacesFromEnd(e) + r),
                      " !important" !== r && (s.raws.important = r);
                    break;
                  }
                  if ("important" === i[1].toLowerCase()) {
                    let r = e.slice(0),
                      i = "";
                    for (let e = t; e > 0; e--) {
                      let t = r[e][0];
                      if (0 === i.trim().indexOf("!") && "space" !== t) break;
                      i = r.pop()[1] + i;
                    }
                    0 === i.trim().indexOf("!") &&
                      ((s.important = !0), (s.raws.important = i), (e = r));
                  }
                  if ("space" !== i[0] && "comment" !== i[0]) break;
                }
                e.some((e) => "space" !== e[0] && "comment" !== e[0]) &&
                  ((s.raws.between += l.map((e) => e[1]).join("")), (l = [])),
                  this.raw(s, "value", l.concat(e), t),
                  s.value.includes(":") && !t && this.checkMissedSemicolon(e);
              }
              atrule(e) {
                let t,
                  s,
                  r,
                  i = new o();
                (i.name = e[1].slice(1)),
                  "" === i.name && this.unnamedAtrule(i, e),
                  this.init(i, e[2]);
                let n = !1,
                  l = !1,
                  a = [],
                  h = [];
                for (; !this.tokenizer.endOfFile(); ) {
                  if (
                    ((t = (e = this.tokenizer.nextToken())[0]),
                    "(" === t || "[" === t
                      ? h.push("(" === t ? ")" : "]")
                      : "{" === t && h.length > 0
                      ? h.push("}")
                      : t === h[h.length - 1] && h.pop(),
                    0 === h.length)
                  ) {
                    if (";" === t) {
                      (i.source.end = this.getPosition(e[2])),
                        (this.semicolon = !0);
                      break;
                    }
                    if ("{" === t) {
                      l = !0;
                      break;
                    }
                    if ("}" === t) {
                      if (a.length > 0) {
                        for (
                          r = a.length - 1, s = a[r];
                          s && "space" === s[0];

                        )
                          s = a[--r];
                        s && (i.source.end = this.getPosition(s[3] || s[2]));
                      }
                      this.end(e);
                      break;
                    }
                    a.push(e);
                  } else a.push(e);
                  if (this.tokenizer.endOfFile()) {
                    n = !0;
                    break;
                  }
                }
                (i.raws.between = this.spacesAndCommentsFromEnd(a)),
                  a.length
                    ? ((i.raws.afterName = this.spacesAndCommentsFromStart(a)),
                      this.raw(i, "params", a),
                      n &&
                        ((e = a[a.length - 1]),
                        (i.source.end = this.getPosition(e[3] || e[2])),
                        (this.spaces = i.raws.between),
                        (i.raws.between = "")))
                    : ((i.raws.afterName = ""), (i.params = "")),
                  l && ((i.nodes = []), (this.current = i));
              }
              end(e) {
                this.current.nodes &&
                  this.current.nodes.length &&
                  (this.current.raws.semicolon = this.semicolon),
                  (this.semicolon = !1),
                  (this.current.raws.after =
                    (this.current.raws.after || "") + this.spaces),
                  (this.spaces = ""),
                  this.current.parent
                    ? ((this.current.source.end = this.getPosition(e[2])),
                      (this.current = this.current.parent))
                    : this.unexpectedClose(e);
              }
              endFile() {
                this.current.parent && this.unclosedBlock(),
                  this.current.nodes &&
                    this.current.nodes.length &&
                    (this.current.raws.semicolon = this.semicolon),
                  (this.current.raws.after =
                    (this.current.raws.after || "") + this.spaces);
              }
              freeSemicolon(e) {
                if (((this.spaces += e[1]), this.current.nodes)) {
                  let e = this.current.nodes[this.current.nodes.length - 1];
                  e &&
                    "rule" === e.type &&
                    !e.raws.ownSemicolon &&
                    ((e.raws.ownSemicolon = this.spaces), (this.spaces = ""));
                }
              }
              getPosition(e) {
                let t = this.input.fromOffset(e);
                return { offset: e, line: t.line, column: t.col };
              }
              init(e, t) {
                this.current.push(e),
                  (e.source = {
                    start: this.getPosition(t),
                    input: this.input,
                  }),
                  (e.raws.before = this.spaces),
                  (this.spaces = ""),
                  "comment" !== e.type && (this.semicolon = !1);
              }
              raw(e, t, s, r) {
                let i,
                  n,
                  o,
                  l,
                  a = s.length,
                  u = "",
                  c = !0;
                for (let e = 0; e < a; e += 1)
                  (i = s[e]),
                    (n = i[0]),
                    "space" !== n || e !== a - 1 || r
                      ? "comment" === n
                        ? ((l = s[e - 1] ? s[e - 1][0] : "empty"),
                          (o = s[e + 1] ? s[e + 1][0] : "empty"),
                          h[l] || h[o] || "," === u.slice(-1)
                            ? (c = !1)
                            : (u += i[1]))
                        : (u += i[1])
                      : (c = !1);
                if (!c) {
                  let r = s.reduce((e, t) => e + t[1], "");
                  e.raws[t] = { value: u, raw: r };
                }
                e[t] = u;
              }
              spacesAndCommentsFromEnd(e) {
                let t,
                  s = "";
                for (
                  ;
                  e.length &&
                  ((t = e[e.length - 1][0]), "space" === t || "comment" === t);

                )
                  s = e.pop()[1] + s;
                return s;
              }
              spacesAndCommentsFromStart(e) {
                let t,
                  s = "";
                for (
                  ;
                  e.length && ((t = e[0][0]), "space" === t || "comment" === t);

                )
                  s += e.shift()[1];
                return s;
              }
              spacesFromEnd(e) {
                let t,
                  s = "";
                for (; e.length && ((t = e[e.length - 1][0]), "space" === t); )
                  s = e.pop()[1] + s;
                return s;
              }
              stringFrom(e, t) {
                let s = "";
                for (let r = t; r < e.length; r++) s += e[r][1];
                return e.splice(t, e.length - t), s;
              }
              colon(e) {
                let t,
                  s,
                  r,
                  i = 0;
                for (let [n, o] of e.entries()) {
                  if (
                    ((t = o),
                    (s = t[0]),
                    "(" === s && (i += 1),
                    ")" === s && (i -= 1),
                    0 === i && ":" === s)
                  ) {
                    if (r) {
                      if ("word" === r[0] && "progid" === r[1]) continue;
                      return n;
                    }
                    this.doubleColon(t);
                  }
                  r = t;
                }
                return !1;
              }
              unclosedBracket(e) {
                throw this.input.error(
                  "Unclosed bracket",
                  { offset: e[2] },
                  { offset: e[2] + 1 }
                );
              }
              unknownWord(e) {
                throw this.input.error(
                  "Unknown word",
                  { offset: e[0][2] },
                  { offset: e[0][2] + e[0][1].length }
                );
              }
              unexpectedClose(e) {
                throw this.input.error(
                  "Unexpected }",
                  { offset: e[2] },
                  { offset: e[2] + 1 }
                );
              }
              unclosedBlock() {
                let e = this.current.source.start;
                throw this.input.error("Unclosed block", e.line, e.column);
              }
              doubleColon(e) {
                throw this.input.error(
                  "Double colon",
                  { offset: e[2] },
                  { offset: e[2] + e[1].length }
                );
              }
              unnamedAtrule(e, t) {
                throw this.input.error(
                  "At-rule without name",
                  { offset: t[2] },
                  { offset: t[2] + t[1].length }
                );
              }
              precheckMissedSemicolon() {}
              checkMissedSemicolon(e) {
                let t = this.colon(e);
                if (!1 === t) return;
                let s,
                  r = 0;
                for (
                  let i = t - 1;
                  i >= 0 &&
                  ((s = e[i]), "space" === s[0] || ((r += 1), 2 !== r));
                  i--
                );
                throw this.input.error(
                  "Missed semicolon",
                  "word" === s[0] ? s[3] + 1 : s[2]
                );
              }
            };
          },
          20: (e, t, s) => {
            "use strict";
            let r = s(671),
              i = s(258),
              n = s(939),
              o = s(19),
              l = s(723),
              a = s(88),
              h = s(250),
              u = s(461),
              c = s(728),
              p = s(932),
              f = s(353),
              d = s(632),
              m = s(995),
              g = s(964),
              w = s(715),
              y = s(675),
              x = s(25),
              b = s(631);
            function v(...e) {
              return (
                1 === e.length && Array.isArray(e[0]) && (e = e[0]), new l(e)
              );
            }
            (v.plugin = function (e, t) {
              let s,
                r = !1;
              function i(...s) {
                console &&
                  console.warn &&
                  !r &&
                  ((r = !0),
                  console.warn(
                    e +
                      ": postcss.plugin was deprecated. Migration guide:\n" +
                      "https://evilmartians.com/chronicles/postcss-8-plugin-migration"
                  ),
                  process.env.LANG &&
                    process.env.LANG.startsWith("cn") &&
                    console.warn(
                      e +
                        ": 里面 postcss.plugin 被弃用. 迁移指南:\n" +
                        "https://www.w3ctech.com/topic/2226"
                    ));
                let i = t(...s);
                return (
                  (i.postcssPlugin = e), (i.postcssVersion = new l().version), i
                );
              }
              return (
                Object.defineProperty(i, "postcss", {
                  get: () => (s || (s = i()), s),
                }),
                (i.process = function (e, t, s) {
                  return v([i(s)]).process(e, t);
                }),
                i
              );
            }),
              (v.stringify = a),
              (v.parse = g),
              (v.fromJSON = h),
              (v.list = w),
              (v.comment = (e) => new p(e)),
              (v.atRule = (e) => new f(e)),
              (v.decl = (e) => new i(e)),
              (v.rule = (e) => new y(e)),
              (v.root = (e) => new x(e)),
              (v.document = (e) => new u(e)),
              (v.CssSyntaxError = r),
              (v.Declaration = i),
              (v.Container = o),
              (v.Processor = l),
              (v.Document = u),
              (v.Comment = p),
              (v.Warning = c),
              (v.AtRule = f),
              (v.Result = d),
              (v.Input = m),
              (v.Rule = y),
              (v.Root = x),
              (v.Node = b),
              n.registerPostcss(v),
              (e.exports = v),
              (v.default = v);
          },
          981: (e, t, s) => {
            "use strict";
            let { SourceMapConsumer: r, SourceMapGenerator: i } = s(209),
              { existsSync: n, readFileSync: o } = s(777),
              { dirname: l, join: a } = s(830);
            class h {
              constructor(e, t) {
                if (!1 === t.map) return;
                this.loadAnnotation(e),
                  (this.inline = this.startWith(this.annotation, "data:"));
                let s = t.map ? t.map.prev : void 0,
                  r = this.loadMap(t.from, s);
                !this.mapFile && t.from && (this.mapFile = t.from),
                  this.mapFile && (this.root = l(this.mapFile)),
                  r && (this.text = r);
              }
              consumer() {
                return (
                  this.consumerCache || (this.consumerCache = new r(this.text)),
                  this.consumerCache
                );
              }
              withContent() {
                return !!(
                  this.consumer().sourcesContent &&
                  this.consumer().sourcesContent.length > 0
                );
              }
              startWith(e, t) {
                return !!e && e.substr(0, t.length) === t;
              }
              getAnnotationURL(e) {
                return e.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
              }
              loadAnnotation(e) {
                let t = e.match(/\/\*\s*# sourceMappingURL=/gm);
                if (!t) return;
                let s = e.lastIndexOf(t.pop()),
                  r = e.indexOf("*/", s);
                s > -1 &&
                  r > -1 &&
                  (this.annotation = this.getAnnotationURL(e.substring(s, r)));
              }
              decodeInline(e) {
                if (
                  /^data:application\/json;charset=utf-?8,/.test(e) ||
                  /^data:application\/json,/.test(e)
                )
                  return decodeURIComponent(e.substr(RegExp.lastMatch.length));
                if (
                  /^data:application\/json;charset=utf-?8;base64,/.test(e) ||
                  /^data:application\/json;base64,/.test(e)
                )
                  return (
                    (t = e.substr(RegExp.lastMatch.length)),
                    Buffer
                      ? Buffer.from(t, "base64").toString()
                      : window.atob(t)
                  );
                var t;
                let s = e.match(/data:application\/json;([^,]+),/)[1];
                throw new Error("Unsupported source map encoding " + s);
              }
              loadFile(e) {
                if (((this.root = l(e)), n(e)))
                  return (this.mapFile = e), o(e, "utf-8").toString().trim();
              }
              loadMap(e, t) {
                if (!1 === t) return !1;
                if (t) {
                  if ("string" == typeof t) return t;
                  if ("function" != typeof t) {
                    if (t instanceof r) return i.fromSourceMap(t).toString();
                    if (t instanceof i) return t.toString();
                    if (this.isMap(t)) return JSON.stringify(t);
                    throw new Error(
                      "Unsupported previous source map format: " + t.toString()
                    );
                  }
                  {
                    let s = t(e);
                    if (s) {
                      let e = this.loadFile(s);
                      if (!e)
                        throw new Error(
                          "Unable to load previous source map: " + s.toString()
                        );
                      return e;
                    }
                  }
                } else {
                  if (this.inline) return this.decodeInline(this.annotation);
                  if (this.annotation) {
                    let t = this.annotation;
                    return e && (t = a(l(e), t)), this.loadFile(t);
                  }
                }
              }
              isMap(e) {
                return (
                  "object" == typeof e &&
                  ("string" == typeof e.mappings ||
                    "string" == typeof e._mappings ||
                    Array.isArray(e.sections))
                );
              }
            }
            (e.exports = h), (h.default = h);
          },
          723: (e, t, s) => {
            "use strict";
            let r = s(647),
              i = s(939),
              n = s(461),
              o = s(25);
            class l {
              constructor(e = []) {
                (this.version = "8.4.14"), (this.plugins = this.normalize(e));
              }
              use(e) {
                return (
                  (this.plugins = this.plugins.concat(this.normalize([e]))),
                  this
                );
              }
              process(e, t = {}) {
                return 0 === this.plugins.length &&
                  void 0 === t.parser &&
                  void 0 === t.stringifier &&
                  void 0 === t.syntax
                  ? new r(this, e, t)
                  : new i(this, e, t);
              }
              normalize(e) {
                let t = [];
                for (let s of e)
                  if (
                    (!0 === s.postcss
                      ? (s = s())
                      : s.postcss && (s = s.postcss),
                    "object" == typeof s && Array.isArray(s.plugins))
                  )
                    t = t.concat(s.plugins);
                  else if ("object" == typeof s && s.postcssPlugin) t.push(s);
                  else if ("function" == typeof s) t.push(s);
                  else if ("object" != typeof s || (!s.parse && !s.stringify))
                    throw new Error(s + " is not a PostCSS plugin");
                return t;
              }
            }
            (e.exports = l),
              (l.default = l),
              o.registerProcessor(l),
              n.registerProcessor(l);
          },
          632: (e, t, s) => {
            "use strict";
            let r = s(728);
            class i {
              constructor(e, t, s) {
                (this.processor = e),
                  (this.messages = []),
                  (this.root = t),
                  (this.opts = s),
                  (this.css = void 0),
                  (this.map = void 0);
              }
              toString() {
                return this.css;
              }
              warn(e, t = {}) {
                t.plugin ||
                  (this.lastPlugin &&
                    this.lastPlugin.postcssPlugin &&
                    (t.plugin = this.lastPlugin.postcssPlugin));
                let s = new r(e, t);
                return this.messages.push(s), s;
              }
              warnings() {
                return this.messages.filter((e) => "warning" === e.type);
              }
              get content() {
                return this.css;
              }
            }
            (e.exports = i), (i.default = i);
          },
          25: (e, t, s) => {
            "use strict";
            let r,
              i,
              n = s(19);
            class o extends n {
              constructor(e) {
                super(e), (this.type = "root"), this.nodes || (this.nodes = []);
              }
              removeChild(e, t) {
                let s = this.index(e);
                return (
                  !t &&
                    0 === s &&
                    this.nodes.length > 1 &&
                    (this.nodes[1].raws.before = this.nodes[s].raws.before),
                  super.removeChild(e)
                );
              }
              normalize(e, t, s) {
                let r = super.normalize(e);
                if (t)
                  if ("prepend" === s)
                    this.nodes.length > 1
                      ? (t.raws.before = this.nodes[1].raws.before)
                      : delete t.raws.before;
                  else if (this.first !== t)
                    for (let e of r) e.raws.before = t.raws.before;
                return r;
              }
              toResult(e = {}) {
                return new r(new i(), this, e).stringify();
              }
            }
            (o.registerLazyResult = (e) => {
              r = e;
            }),
              (o.registerProcessor = (e) => {
                i = e;
              }),
              (e.exports = o),
              (o.default = o);
          },
          675: (e, t, s) => {
            "use strict";
            let r = s(19),
              i = s(715);
            class n extends r {
              constructor(e) {
                super(e), (this.type = "rule"), this.nodes || (this.nodes = []);
              }
              get selectors() {
                return i.comma(this.selector);
              }
              set selectors(e) {
                let t = this.selector ? this.selector.match(/,\s*/) : null,
                  s = t ? t[0] : "," + this.raw("between", "beforeOpen");
                this.selector = e.join(s);
              }
            }
            (e.exports = n), (n.default = n), r.registerRule(n);
          },
          62: (e) => {
            "use strict";
            const t = {
              colon: ": ",
              indent: "    ",
              beforeDecl: "\n",
              beforeRule: "\n",
              beforeOpen: " ",
              beforeClose: "\n",
              beforeComment: "\n",
              after: "\n",
              emptyBody: "",
              commentLeft: " ",
              commentRight: " ",
              semicolon: !1,
            };
            class s {
              constructor(e) {
                this.builder = e;
              }
              stringify(e, t) {
                if (!this[e.type])
                  throw new Error(
                    "Unknown AST node type " +
                      e.type +
                      ". " +
                      "Maybe you need to change PostCSS stringifier."
                  );
                this[e.type](e, t);
              }
              document(e) {
                this.body(e);
              }
              root(e) {
                this.body(e), e.raws.after && this.builder(e.raws.after);
              }
              comment(e) {
                let t = this.raw(e, "left", "commentLeft"),
                  s = this.raw(e, "right", "commentRight");
                this.builder("/*" + t + e.text + s + "*/", e);
              }
              decl(e, t) {
                let s = this.raw(e, "between", "colon"),
                  r = e.prop + s + this.rawValue(e, "value");
                e.important && (r += e.raws.important || " !important"),
                  t && (r += ";"),
                  this.builder(r, e);
              }
              rule(e) {
                this.block(e, this.rawValue(e, "selector")),
                  e.raws.ownSemicolon &&
                    this.builder(e.raws.ownSemicolon, e, "end");
              }
              atrule(e, t) {
                let s = "@" + e.name,
                  r = e.params ? this.rawValue(e, "params") : "";
                if (
                  (void 0 !== e.raws.afterName
                    ? (s += e.raws.afterName)
                    : r && (s += " "),
                  e.nodes)
                )
                  this.block(e, s + r);
                else {
                  let i = (e.raws.between || "") + (t ? ";" : "");
                  this.builder(s + r + i, e);
                }
              }
              body(e) {
                let t = e.nodes.length - 1;
                for (; t > 0 && "comment" === e.nodes[t].type; ) t -= 1;
                let s = this.raw(e, "semicolon");
                for (let r = 0; r < e.nodes.length; r++) {
                  let i = e.nodes[r],
                    n = this.raw(i, "before");
                  n && this.builder(n), this.stringify(i, t !== r || s);
                }
              }
              block(e, t) {
                let s,
                  r = this.raw(e, "between", "beforeOpen");
                this.builder(t + r + "{", e, "start"),
                  e.nodes && e.nodes.length
                    ? (this.body(e), (s = this.raw(e, "after")))
                    : (s = this.raw(e, "after", "emptyBody")),
                  s && this.builder(s),
                  this.builder("}", e, "end");
              }
              raw(e, s, r) {
                let i;
                if ((r || (r = s), s && ((i = e.raws[s]), void 0 !== i)))
                  return i;
                let n = e.parent;
                if ("before" === r) {
                  if (!n || ("root" === n.type && n.first === e)) return "";
                  if (n && "document" === n.type) return "";
                }
                if (!n) return t[r];
                let o = e.root();
                if ((o.rawCache || (o.rawCache = {}), void 0 !== o.rawCache[r]))
                  return o.rawCache[r];
                if ("before" === r || "after" === r)
                  return this.beforeAfter(e, r);
                {
                  let t = "raw" + ((l = r)[0].toUpperCase() + l.slice(1));
                  this[t]
                    ? (i = this[t](o, e))
                    : o.walk((e) => {
                        if (((i = e.raws[s]), void 0 !== i)) return !1;
                      });
                }
                var l;
                return void 0 === i && (i = t[r]), (o.rawCache[r] = i), i;
              }
              rawSemicolon(e) {
                let t;
                return (
                  e.walk((e) => {
                    if (
                      e.nodes &&
                      e.nodes.length &&
                      "decl" === e.last.type &&
                      ((t = e.raws.semicolon), void 0 !== t)
                    )
                      return !1;
                  }),
                  t
                );
              }
              rawEmptyBody(e) {
                let t;
                return (
                  e.walk((e) => {
                    if (
                      e.nodes &&
                      0 === e.nodes.length &&
                      ((t = e.raws.after), void 0 !== t)
                    )
                      return !1;
                  }),
                  t
                );
              }
              rawIndent(e) {
                if (e.raws.indent) return e.raws.indent;
                let t;
                return (
                  e.walk((s) => {
                    let r = s.parent;
                    if (
                      r &&
                      r !== e &&
                      r.parent &&
                      r.parent === e &&
                      void 0 !== s.raws.before
                    ) {
                      let e = s.raws.before.split("\n");
                      return (
                        (t = e[e.length - 1]), (t = t.replace(/\S/g, "")), !1
                      );
                    }
                  }),
                  t
                );
              }
              rawBeforeComment(e, t) {
                let s;
                return (
                  e.walkComments((e) => {
                    if (void 0 !== e.raws.before)
                      return (
                        (s = e.raws.before),
                        s.includes("\n") && (s = s.replace(/[^\n]+$/, "")),
                        !1
                      );
                  }),
                  void 0 === s
                    ? (s = this.raw(t, null, "beforeDecl"))
                    : s && (s = s.replace(/\S/g, "")),
                  s
                );
              }
              rawBeforeDecl(e, t) {
                let s;
                return (
                  e.walkDecls((e) => {
                    if (void 0 !== e.raws.before)
                      return (
                        (s = e.raws.before),
                        s.includes("\n") && (s = s.replace(/[^\n]+$/, "")),
                        !1
                      );
                  }),
                  void 0 === s
                    ? (s = this.raw(t, null, "beforeRule"))
                    : s && (s = s.replace(/\S/g, "")),
                  s
                );
              }
              rawBeforeRule(e) {
                let t;
                return (
                  e.walk((s) => {
                    if (
                      s.nodes &&
                      (s.parent !== e || e.first !== s) &&
                      void 0 !== s.raws.before
                    )
                      return (
                        (t = s.raws.before),
                        t.includes("\n") && (t = t.replace(/[^\n]+$/, "")),
                        !1
                      );
                  }),
                  t && (t = t.replace(/\S/g, "")),
                  t
                );
              }
              rawBeforeClose(e) {
                let t;
                return (
                  e.walk((e) => {
                    if (
                      e.nodes &&
                      e.nodes.length > 0 &&
                      void 0 !== e.raws.after
                    )
                      return (
                        (t = e.raws.after),
                        t.includes("\n") && (t = t.replace(/[^\n]+$/, "")),
                        !1
                      );
                  }),
                  t && (t = t.replace(/\S/g, "")),
                  t
                );
              }
              rawBeforeOpen(e) {
                let t;
                return (
                  e.walk((e) => {
                    if (
                      "decl" !== e.type &&
                      ((t = e.raws.between), void 0 !== t)
                    )
                      return !1;
                  }),
                  t
                );
              }
              rawColon(e) {
                let t;
                return (
                  e.walkDecls((e) => {
                    if (void 0 !== e.raws.between)
                      return (t = e.raws.between.replace(/[^\s:]/g, "")), !1;
                  }),
                  t
                );
              }
              beforeAfter(e, t) {
                let s;
                s =
                  "decl" === e.type
                    ? this.raw(e, null, "beforeDecl")
                    : "comment" === e.type
                    ? this.raw(e, null, "beforeComment")
                    : "before" === t
                    ? this.raw(e, null, "beforeRule")
                    : this.raw(e, null, "beforeClose");
                let r = e.parent,
                  i = 0;
                for (; r && "root" !== r.type; ) (i += 1), (r = r.parent);
                if (s.includes("\n")) {
                  let t = this.raw(e, null, "indent");
                  if (t.length) for (let e = 0; e < i; e++) s += t;
                }
                return s;
              }
              rawValue(e, t) {
                let s = e[t],
                  r = e.raws[t];
                return r && r.value === s ? r.raw : s;
              }
            }
            (e.exports = s), (s.default = s);
          },
          88: (e, t, s) => {
            "use strict";
            let r = s(62);
            function i(e, t) {
              new r(t).stringify(e);
            }
            (e.exports = i), (i.default = i);
          },
          513: (e) => {
            "use strict";
            (e.exports.isClean = Symbol("isClean")),
              (e.exports.my = Symbol("my"));
          },
          852: (e) => {
            "use strict";
            const t = "'".charCodeAt(0),
              s = '"'.charCodeAt(0),
              r = "\\".charCodeAt(0),
              i = "/".charCodeAt(0),
              n = "\n".charCodeAt(0),
              o = " ".charCodeAt(0),
              l = "\f".charCodeAt(0),
              a = "\t".charCodeAt(0),
              h = "\r".charCodeAt(0),
              u = "[".charCodeAt(0),
              c = "]".charCodeAt(0),
              p = "(".charCodeAt(0),
              f = ")".charCodeAt(0),
              d = "{".charCodeAt(0),
              m = "}".charCodeAt(0),
              g = ";".charCodeAt(0),
              w = "*".charCodeAt(0),
              y = ":".charCodeAt(0),
              x = "@".charCodeAt(0),
              b = /[\t\n\f\r "#'()/;[\\\]{}]/g,
              v = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,
              C = /.[\n"'(/\\]/,
              O = /[\da-f]/i;
            e.exports = function (e, k = {}) {
              let S,
                A,
                P,
                R,
                E,
                M,
                I,
                j,
                U,
                B,
                F = e.css.valueOf(),
                L = k.ignoreErrors,
                D = F.length,
                z = 0,
                _ = [],
                T = [];
              function N(t) {
                throw e.error("Unclosed " + t, z);
              }
              return {
                back: function (e) {
                  T.push(e);
                },
                nextToken: function (e) {
                  if (T.length) return T.pop();
                  if (z >= D) return;
                  let k = !!e && e.ignoreUnclosed;
                  switch (((S = F.charCodeAt(z)), S)) {
                    case n:
                    case o:
                    case a:
                    case h:
                    case l:
                      A = z;
                      do {
                        (A += 1), (S = F.charCodeAt(A));
                      } while (
                        S === o ||
                        S === n ||
                        S === a ||
                        S === h ||
                        S === l
                      );
                      (B = ["space", F.slice(z, A)]), (z = A - 1);
                      break;
                    case u:
                    case c:
                    case d:
                    case m:
                    case y:
                    case g:
                    case f: {
                      let e = String.fromCharCode(S);
                      B = [e, e, z];
                      break;
                    }
                    case p:
                      if (
                        ((j = _.length ? _.pop()[1] : ""),
                        (U = F.charCodeAt(z + 1)),
                        "url" === j &&
                          U !== t &&
                          U !== s &&
                          U !== o &&
                          U !== n &&
                          U !== a &&
                          U !== l &&
                          U !== h)
                      ) {
                        A = z;
                        do {
                          if (
                            ((M = !1), (A = F.indexOf(")", A + 1)), -1 === A)
                          ) {
                            if (L || k) {
                              A = z;
                              break;
                            }
                            N("bracket");
                          }
                          for (I = A; F.charCodeAt(I - 1) === r; )
                            (I -= 1), (M = !M);
                        } while (M);
                        (B = ["brackets", F.slice(z, A + 1), z, A]), (z = A);
                      } else
                        (A = F.indexOf(")", z + 1)),
                          (R = F.slice(z, A + 1)),
                          -1 === A || C.test(R)
                            ? (B = ["(", "(", z])
                            : ((B = ["brackets", R, z, A]), (z = A));
                      break;
                    case t:
                    case s:
                      (P = S === t ? "'" : '"'), (A = z);
                      do {
                        if (((M = !1), (A = F.indexOf(P, A + 1)), -1 === A)) {
                          if (L || k) {
                            A = z + 1;
                            break;
                          }
                          N("string");
                        }
                        for (I = A; F.charCodeAt(I - 1) === r; )
                          (I -= 1), (M = !M);
                      } while (M);
                      (B = ["string", F.slice(z, A + 1), z, A]), (z = A);
                      break;
                    case x:
                      (b.lastIndex = z + 1),
                        b.test(F),
                        (A =
                          0 === b.lastIndex ? F.length - 1 : b.lastIndex - 2),
                        (B = ["at-word", F.slice(z, A + 1), z, A]),
                        (z = A);
                      break;
                    case r:
                      for (A = z, E = !0; F.charCodeAt(A + 1) === r; )
                        (A += 1), (E = !E);
                      if (
                        ((S = F.charCodeAt(A + 1)),
                        E &&
                          S !== i &&
                          S !== o &&
                          S !== n &&
                          S !== a &&
                          S !== h &&
                          S !== l &&
                          ((A += 1), O.test(F.charAt(A))))
                      ) {
                        for (; O.test(F.charAt(A + 1)); ) A += 1;
                        F.charCodeAt(A + 1) === o && (A += 1);
                      }
                      (B = ["word", F.slice(z, A + 1), z, A]), (z = A);
                      break;
                    default:
                      S === i && F.charCodeAt(z + 1) === w
                        ? ((A = F.indexOf("*/", z + 2) + 1),
                          0 === A && (L || k ? (A = F.length) : N("comment")),
                          (B = ["comment", F.slice(z, A + 1), z, A]),
                          (z = A))
                        : ((v.lastIndex = z + 1),
                          v.test(F),
                          (A =
                            0 === v.lastIndex ? F.length - 1 : v.lastIndex - 2),
                          (B = ["word", F.slice(z, A + 1), z, A]),
                          _.push(B),
                          (z = A));
                  }
                  return z++, B;
                },
                endOfFile: function () {
                  return 0 === T.length && z >= D;
                },
                position: function () {
                  return z;
                },
              };
            };
          },
          448: (e) => {
            "use strict";
            let t = {};
            e.exports = function (e) {
              t[e] ||
                ((t[e] = !0),
                "undefined" != typeof console &&
                  console.warn &&
                  console.warn(e));
            };
          },
          728: (e) => {
            "use strict";
            class t {
              constructor(e, t = {}) {
                if (
                  ((this.type = "warning"),
                  (this.text = e),
                  t.node && t.node.source)
                ) {
                  let e = t.node.rangeBy(t);
                  (this.line = e.start.line),
                    (this.column = e.start.column),
                    (this.endLine = e.end.line),
                    (this.endColumn = e.end.column);
                }
                for (let e in t) this[e] = t[e];
              }
              toString() {
                return this.node
                  ? this.node.error(this.text, {
                      plugin: this.plugin,
                      index: this.index,
                      word: this.word,
                    }).message
                  : this.plugin
                  ? this.plugin + ": " + this.text
                  : this.text;
              }
            }
            (e.exports = t), (t.default = t);
          },
          868: () => {},
          777: () => {},
          830: () => {},
          209: () => {},
          414: () => {},
          961: (e) => {
            let t =
              "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
            e.exports = {
              nanoid: (e = 21) => {
                let s = "",
                  r = e;
                for (; r--; ) s += t[(64 * Math.random()) | 0];
                return s;
              },
              customAlphabet:
                (e, t = 21) =>
                (s = t) => {
                  let r = "",
                    i = s;
                  for (; i--; ) r += e[(Math.random() * e.length) | 0];
                  return r;
                },
            };
          },
        },
        t = {};
      function s(r) {
        var i = t[r];
        if (void 0 !== i) return i.exports;
        var n = (t[r] = { exports: {} });
        return e[r](n, n.exports, s), n.exports;
      }
      (s.d = (e, t) => {
        for (var r in t)
          s.o(t, r) &&
            !s.o(e, r) &&
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      }),
        (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (s.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      var r = {};
      return (
        (() => {
          "use strict";
          s.r(r), s.d(r, { default: () => a });
          var e = s(20);
          const t = e;
          e.stringify,
            e.fromJSON,
            e.plugin,
            e.parse,
            e.list,
            e.document,
            e.comment,
            e.atRule,
            e.rule,
            e.decl,
            e.root,
            e.CssSyntaxError,
            e.Declaration,
            e.Container,
            e.Processor,
            e.Document,
            e.Comment,
            e.Warning,
            e.AtRule,
            e.Result,
            e.Input,
            e.Rule,
            e.Root,
            e.Node;
          var i =
              (void 0 && (void 0).__assign) ||
              function () {
                return (
                  (i =
                    Object.assign ||
                    function (e) {
                      for (var t, s = 1, r = arguments.length; s < r; s++)
                        for (var i in (t = arguments[s]))
                          Object.prototype.hasOwnProperty.call(t, i) &&
                            (e[i] = t[i]);
                      return e;
                    }),
                  i.apply(this, arguments)
                );
              },
            n = function (e, t) {
              return e && e.log(t, { ns: "parser-poscss" });
            },
            o = function (e) {
              var t = e.nodes || [],
                s = {};
              return (
                t.forEach(function (e) {
                  var t = e.prop,
                    r = e.value,
                    i = e.important;
                  s[t] = r + (i ? " !important" : "");
                }),
                { selectors: e.selector || "", style: s }
              );
            };
          const l = function (e, s) {
            var r = [];
            n(s, ["Input CSS", e]);
            var l = t().process(e).sync().root;
            return (
              n(s, ["PostCSS AST", l]),
              l.nodes.forEach(function (e) {
                switch (e.type) {
                  case "rule":
                    r.push(o(e));
                    break;
                  case "atrule":
                    !(function (e, t) {
                      var s = e.name,
                        r = e.params;
                      ["media", "keyframes"].indexOf(s) >= 0
                        ? e.nodes.forEach(function (e) {
                            t.push(i(i({}, o(e)), { atRule: s, params: r }));
                          })
                        : t.push(i(i({}, o(e)), { atRule: s }));
                    })(e, r);
                }
              }),
              n(s, ["Output", r]),
              r
            );
          };
          const a = function (e) {
            e.setCustomParserCss(l);
          };
        })(),
        r
      );
    })()
);
