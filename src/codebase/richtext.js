/*
@license

dhtmlxRichtext v.1.1.2 Evaluation

This software is covered by DHTMLX Evaluation License and purposed only for evaluation.
Contact sales@dhtmlx.com to get Commercial or Enterprise license.
Usage without proper license is prohibited.

(c) XB Software.

*/
if (
  (window.dhx && ((window.dhx_legacy = dhx), delete window.dhx),
  (function (t, e) {
    "object" == typeof exports && "object" == typeof module
      ? (module.exports = e())
      : "function" == typeof define && define.amd
      ? define([], e)
      : "object" == typeof exports
      ? (exports.dhx = e())
      : (t.dhx = e());
  })(window, function () {
    return (function (t) {
      var e = {};
      function n(i) {
        if (e[i]) return e[i].exports;
        var o = (e[i] = { i: i, l: !1, exports: {} });
        return t[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
      }
      return (
        (n.m = t),
        (n.c = e),
        (n.d = function (t, e, i) {
          n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
        }),
        (n.r = function (t) {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (n.t = function (t, e) {
          if ((1 & e && (t = n(t)), 8 & e)) return t;
          if (4 & e && "object" == typeof t && t && t.__esModule) return t;
          var i = Object.create(null);
          if (
            (n.r(i),
            Object.defineProperty(i, "default", { enumerable: !0, value: t }),
            2 & e && "string" != typeof t)
          )
            for (var o in t)
              n.d(
                i,
                o,
                function (e) {
                  return t[e];
                }.bind(null, o)
              );
          return i;
        }),
        (n.n = function (t) {
          var e =
            t && t.__esModule
              ? function () {
                  return t.default;
                }
              : function () {
                  return t;
                };
          return n.d(e, "a", e), e;
        }),
        (n.o = function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (n.p = "/codebase/"),
        n((n.s = 43))
      );
    })([
      function (t, e, n) {
        "use strict";
        (function (t) {
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = n(57);
          function o(t) {
            var n = window.ResizeObserver,
              i = function (e) {
                var n = e.el.offsetHeight,
                  i = e.el.offsetWidth;
                t(i, n);
              };
            return n
              ? e.el("div.dhx-resize-observer", {
                  _hooks: {
                    didInsert: function (t) {
                      new n(function () {
                        return i(t);
                      }).observe(t.el);
                    },
                  },
                })
              : e.el("iframe.dhx-resize-observer", {
                  _hooks: {
                    didInsert: function (t) {
                      (t.el.contentWindow.onresize = function () {
                        return i(t);
                      }),
                        i(t);
                    },
                  },
                });
          }
          (e.el = i.defineElement),
            (e.sv = i.defineSvgElement),
            (e.view = i.defineView),
            (e.create = i.createView),
            (e.inject = i.injectView),
            (e.KEYED_LIST = i.KEYED_LIST),
            (e.disableHelp = function () {
              (i.DEVMODE.mutations = !1),
                (i.DEVMODE.warnings = !1),
                (i.DEVMODE.verbose = !1),
                (i.DEVMODE.UNKEYED_INPUT = !1);
            }),
            (e.resizer = o),
            (e.resizeHandler = function (t, n) {
              return e
                .create({
                  render: function () {
                    return o(n);
                  },
                })
                .mount(t);
            }),
            (e.awaitRedraw = function () {
              return new t(function (t) {
                requestAnimationFrame(function () {
                  t();
                });
              });
            });
        }.call(this, n(5)));
      },
      function (t, e, n) {
        "use strict";
        var i =
          (this && this.__assign) ||
          function () {
            return (i =
              Object.assign ||
              function (t) {
                for (var e, n = 1, i = arguments.length; n < i; n++)
                  for (var o in (e = arguments[n]))
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t;
              }).apply(this, arguments);
          };
        function o(t, e, n) {
          for (
            void 0 === e && (e = "dhx_id"),
              void 0 === n && (n = "target"),
              t instanceof Event && (t = t[n]);
            t;

          ) {
            if (t.getAttribute && t.getAttribute(e)) return t;
            t = t.parentNode;
          }
        }
        Object.defineProperty(e, "__esModule", { value: !0 }),
          n(46),
          (e.toNode = function (t) {
            return (
              "string" == typeof t &&
                (t = document.getElementById(t) || document.querySelector(t)),
              t || document.body
            );
          }),
          (e.eventHandler = function (t, e) {
            var n = Object.keys(e);
            return function (i) {
              for (var o = t(i), r = i.target; r; ) {
                var s = (r.getAttribute && r.getAttribute("class")) || "";
                if (s.length)
                  for (var a = s.split(" "), l = 0; l < n.length; l++)
                    if (a.indexOf(n[l]) > -1) return e[n[l]](i, o);
                r = r.parentNode;
              }
              return !0;
            };
          }),
          (e.locate = function (t, e) {
            void 0 === e && (e = "dhx_id");
            var n = o(t, e);
            return n ? n.getAttribute(e) : "";
          }),
          (e.locateNode = o),
          (e.locateNodeByClassName = function (t, e) {
            for (t instanceof Event && (t = t.target); t; ) {
              if (e) {
                if (t.classList && t.classList.contains(e)) return t;
              } else if (t.getAttribute && t.getAttribute("dhx_id")) return t;
              t = t.parentNode;
            }
          }),
          (e.getBox = function (t) {
            var e = t.getBoundingClientRect(),
              n = document.body,
              i = window.pageYOffset || n.scrollTop,
              o = window.pageXOffset || n.scrollLeft;
            return {
              top: e.top + i,
              left: e.left + o,
              right: n.offsetWidth - e.right,
              bottom: n.offsetHeight - e.bottom,
              width: e.right - e.left,
              height: e.bottom - e.top,
            };
          });
        var r,
          s = -1;
        function a(t) {
          var e = t.getBoundingClientRect();
          return {
            left: e.left + window.pageXOffset,
            right: e.right + window.pageXOffset,
            top: e.top + window.pageYOffset,
            bottom: e.bottom + window.pageYOffset,
          };
        }
        function l(t, e) {
          var n = e.mode === r.bottom || e.mode === r.top ? u(t, e) : d(t, e),
            i = n.left,
            o = n.top;
          return {
            left: Math.round(i) + "px",
            top: Math.round(o) + "px",
            minWidth: Math.round(e.width) + "px",
            position: "absolute",
          };
        }
        function c() {
          return {
            rightBorder: window.pageXOffset + window.innerWidth,
            bottomBorder: window.pageYOffset + window.innerHeight,
          };
        }
        function u(t, e) {
          var n,
            o,
            s = c(),
            a = s.rightBorder,
            l = s.bottomBorder - t.bottom - e.height,
            u = t.top - e.height;
          if (
            (e.mode === r.bottom
              ? l >= 0
                ? (o = t.bottom)
                : u >= 0 && (o = u)
              : u >= 0
              ? (o = u)
              : l >= 0 && (o = t.bottom),
            l < 0 && u < 0)
          ) {
            if (e.auto) return d(t, i(i({}, e), { mode: r.right, auto: !1 }));
            o = l > u ? t.bottom : u;
          }
          if (e.centering)
            n = (function (t, e, n) {
              var i = (e - (t.right - t.left)) / 2,
                o = t.left - i,
                r = t.right + i;
              return o >= 0 && r <= n ? o : o < 0 ? 0 : n - e;
            })(t, e.width, a);
          else {
            var h = a - t.left - e.width,
              f = t.right - e.width;
            n = h >= 0 ? t.left : f >= 0 ? f : f > h ? t.left : f;
          }
          return { left: n, top: o };
        }
        function d(t, e) {
          var n,
            o,
            s = c(),
            a = s.rightBorder,
            l = s.bottomBorder,
            d = a - t.right - e.width,
            h = t.left - e.width;
          if (
            (e.mode === r.right
              ? d >= 0
                ? (n = t.right)
                : h >= 0 && (n = h)
              : h >= 0
              ? (n = h)
              : d >= 0 && (n = t.right),
            h < 0 && d < 0)
          ) {
            if (e.auto) return u(t, i(i({}, e), { mode: r.bottom, auto: !1 }));
            n = h > d ? h : t.right;
          }
          if (e.centering)
            o = (function (t, e, n) {
              var i = (e - (t.bottom - t.top)) / 2,
                o = t.top - i,
                r = t.bottom + i;
              return o >= 0 && r <= n ? o : o < 0 ? 0 : n - e;
            })(t, e.height, a);
          else {
            var f = t.bottom - e.height,
              p = l - t.top - e.height;
            o = p >= 0 ? t.top : f > 0 ? f : f > p ? f : t.top;
          }
          return { left: n, top: o };
        }
        (e.getScrollbarWidth = function () {
          if (s > -1) return s;
          var t = document.createElement("div");
          return (
            document.body.appendChild(t),
            (t.style.cssText =
              "position: absolute;left: -99999px;overflow:scroll;width: 100px;height: 100px;"),
            (s = t.offsetWidth - t.clientWidth),
            document.body.removeChild(t),
            s
          );
        }),
          (e.fitPosition = function (t, e) {
            return l(a(t), e);
          }),
          (e.isIE = function () {
            var t = window.navigator.userAgent;
            return t.indexOf("MSIE ") > -1 || t.indexOf("Trident/") > -1;
          }),
          (e.getRealPosition = a),
          (function (t) {
            (t.left = "left"),
              (t.right = "right"),
              (t.bottom = "bottom"),
              (t.top = "top");
          })((r = e.Position || (e.Position = {}))),
          (e.calculatePosition = l);
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (function (t) {
            (t[(t.none = 0)] = "none"),
              (t.style = "style"),
              (t.align = "align"),
              (t.blockquote = "blockquote"),
              (t.bold = "bold"),
              (t.italic = "italic"),
              (t.strike = "strike"),
              (t.fontSize = "font-size"),
              (t.fontFamily = "font-family"),
              (t.underline = "underline"),
              (t.color = "color"),
              (t.background = "background"),
              (t.link = "link");
          })(e.Modifier || (e.Modifier = {})),
          (function (t) {
            (t.add = "add"),
              (t.innerAdd = "innerAdd"),
              (t.remove = "remove"),
              (t.update = "update"),
              (t.undo = "undo"),
              (t.paste = "paste"),
              (t.copy = "copy"),
              (t.cut = "cut"),
              (t.redo = "redo"),
              (t.clear = "clear"),
              (t.parse = "parse"),
              (t.selectAll = "selectAll");
          })(e.Action || (e.Action = {})),
          (function (t) {
            (t.default = "default"),
              (t.undo = "undo"),
              (t.style = "style"),
              (t.decoration = "decoration"),
              (t.color = "colors"),
              (t.align = "align"),
              (t.link = "link"),
              (t.clear = "clear"),
              (t.fullscreen = "fullscreen"),
              (t.stats = "stats");
          })(e.RTEToolbarBlock || (e.RTEToolbarBlock = {})),
          (function (t) {
            (t.change = "change"),
              (t.action = "action"),
              (t.selectionChange = "selectionchange"),
              (t.selectionRefresh = "selectionrefresh"),
              (t.showLinkEditor = "showlinkeditor"),
              (t.compositionStart = "compositionstart"),
              (t.compositionUpdate = "compositionupdate"),
              (t.compositionEnd = "compositionend");
          })(e.RichTextEvents || (e.RichTextEvents = {}));
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(1),
          o = new Date().valueOf();
        (e.uid = function () {
          return "u" + o++;
        }),
          (e.extend = function t(e, n, i) {
            if ((void 0 === i && (i = !0), n))
              for (var o in n) {
                var r = n[o],
                  s = e[o];
                void 0 === r
                  ? delete e[o]
                  : !i ||
                    "object" != typeof s ||
                    s instanceof Date ||
                    s instanceof Array
                  ? (e[o] = r)
                  : t(s, r);
              }
            return e;
          }),
          (e.copy = function (t, e) {
            var n = {};
            for (var i in t) (e && "$" === i[0]) || (n[i] = t[i]);
            return n;
          }),
          (e.naturalSort = function (t) {
            return t.sort(function (t, e) {
              return "string" == typeof t ? t.localeCompare(e) : t - e;
            });
          }),
          (e.findIndex = function (t, e) {
            for (var n = t.length, i = 0; i < n; i++) if (e(t[i])) return i;
            return -1;
          }),
          (e.isEqualString = function (t, e) {
            if (t.length > e.length) return !1;
            for (var n = 0; n < t.length; n++)
              if (t[n].toLowerCase() !== e[n].toLowerCase()) return !1;
            return !0;
          }),
          (e.singleOuterClick = function (t) {
            var e = function (n) {
              t(n) && document.removeEventListener("click", e);
            };
            document.addEventListener("click", e);
          }),
          (e.detectWidgetClick = function (t, e) {
            var n = function (n) {
              return e(i.locate(n, "dhx_widget_id") === t);
            };
            return (
              document.addEventListener("click", n),
              function () {
                return document.removeEventListener("click", n);
              }
            );
          }),
          (e.unwrapBox = function (t) {
            return Array.isArray(t) ? t[0] : t;
          }),
          (e.wrapBox = function (t) {
            return Array.isArray(t) ? t : [t];
          }),
          (e.isDefined = function (t) {
            return null !== t && void 0 !== t;
          }),
          (e.range = function (t, e) {
            if (t > e) return [];
            for (var n = []; t <= e; ) n.push(t++);
            return n;
          }),
          (e.isNumeric = function (t) {
            return !isNaN(t - parseFloat(t));
          }),
          (e.downloadFile = function (t, e, n) {
            void 0 === n && (n = "text/plain");
            var i = new Blob([t], { type: n });
            if (window.navigator.msSaveOrOpenBlob)
              window.navigator.msSaveOrOpenBlob(i, e);
            else {
              var o = document.createElement("a"),
                r = URL.createObjectURL(i);
              (o.href = r),
                (o.download = e),
                document.body.appendChild(o),
                o.click(),
                setTimeout(function () {
                  document.body.removeChild(o), window.URL.revokeObjectURL(r);
                }, 0);
            }
          }),
          (e.debounce = function (t, e, n) {
            var i;
            return function () {
              var o = this,
                r = arguments,
                s = n && !i;
              clearTimeout(i),
                (i = setTimeout(function () {
                  (i = null), n || t.apply(o, r);
                }, e)),
                s && t.apply(this, r);
            };
          }),
          (e.compare = function t(e, n) {
            for (var i in e) {
              if (e.hasOwnProperty(i) !== n.hasOwnProperty(i)) return !1;
              switch (typeof e[i]) {
                case "object":
                  if (!t(e[i], n[i])) return !1;
                  break;
                case "function":
                  if (
                    void 0 === n[i] ||
                    ("compare" !== i && e[i].toString() !== n[i].toString())
                  )
                    return !1;
                  break;
                default:
                  if (e[i] !== n[i]) return !1;
              }
            }
            for (var i in n) if (void 0 === e[i]) return !1;
            return !0;
          }),
          (e.isType = function (t) {
            return (
              (Object.prototype.toString.call(t).match(/^\[object (\S+?)\]$/) ||
                [])[1] || "undefined"
            ).toLowerCase();
          });
      },
      function (t, e, n) {
        "use strict";
        function i(t) {
          return null !== t && "object" == typeof t && !(t instanceof Date);
        }
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getTextHash = function (t, e) {
            return t + "_" + e;
          }),
          (e.getLinkRefer = function () {
            var t = 0;
            return function () {
              return "link_ref_" + t++;
            };
          }),
          (e.hashToInfo = function (t) {
            return (
              void 0 === t && (t = ""),
              t
                ? t.split("_").map(function (t) {
                    return parseInt(t, 10);
                  })
                : []
            );
          }),
          (e.actionIdToModifierValue = function (t) {
            return t.split("-").pop();
          }),
          (e.textColor = function (t) {
            return (
              '<span class="dxi dxi-format-color-text dhx_richtext__text-color" style="border-color: ' +
              t +
              ';"></span>'
            );
          }),
          (e.textSelectColor = function (t) {
            return (
              '<span class="dxi dxi-format-color-fill dhx_richtext__background-color" style="border-color: ' +
              t +
              ';"></span>'
            );
          }),
          (e.isEqual = function t(e, n, o) {
            void 0 === o && (o = !1);
            var r = Object.keys(e),
              s = Object.keys(n);
            if (r.length !== s.length) return !1;
            for (var a = 0, l = r; a < l.length; a++) {
              var c = l[a];
              if (o && i(e[c]) && i(n[c])) {
                if (!t(e[c], n[c], o)) return !1;
              } else if (e[c] !== n[c]) return !1;
            }
            return !0;
          }),
          (e.copyWithout = function (t, e) {
            var n = {};
            for (var i in t) e.hasOwnProperty(i) || (n[i] = t[i]);
            return n;
          }),
          (e.startsWith = function (t, e) {
            if (t.length < e.length) return !1;
            for (var n = 0; n < e.length; n++) if (t[n] !== e[n]) return !1;
            return !0;
          });
      },
      function (t, e, n) {
        (function (e, n) {
          !(function () {
            var i = 1,
              o = {},
              r = !1;
            function s(t) {
              e.setImmediate
                ? n(t)
                : e.importScripts
                ? setTimeout(t)
                : ((o[++i] = t), e.postMessage(i, "*"));
            }
            function a(t) {
              "use strict";
              if ("function" != typeof t && void 0 != t) throw TypeError();
              if ("object" != typeof this || (this && this.then))
                throw TypeError();
              var e,
                n,
                i = this,
                o = 0,
                r = 0,
                l = [];
              (i.promise = i),
                (i.resolve = function (t) {
                  return (
                    (e = i.fn), (n = i.er), o || ((r = t), (o = 1), s(d)), i
                  );
                }),
                (i.reject = function (t) {
                  return (
                    (e = i.fn), (n = i.er), o || ((r = t), (o = 2), s(d)), i
                  );
                }),
                (i._d = 1),
                (i.then = function (t, e) {
                  if (1 != this._d) throw TypeError();
                  var n = new a();
                  return (
                    (n.fn = t),
                    (n.er = e),
                    3 == o ? n.resolve(r) : 4 == o ? n.reject(r) : l.push(n),
                    n
                  );
                }),
                (i.catch = function (t) {
                  return i.then(null, t);
                });
              var c = function (t) {
                (o = t || 4),
                  l.map(function (t) {
                    (3 == o && t.resolve(r)) || t.reject(r);
                  });
              };
              try {
                "function" == typeof t && t(i.resolve, i.reject);
              } catch (t) {
                i.reject(t);
              }
              return i;
              function u(t, e, n, i) {
                if (2 == o) return i();
                if (
                  ("object" != typeof r && "function" != typeof r) ||
                  "function" != typeof t
                )
                  i();
                else
                  try {
                    var s = 0;
                    t.call(
                      r,
                      function (t) {
                        s++ || ((r = t), e());
                      },
                      function (t) {
                        s++ || ((r = t), n());
                      }
                    );
                  } catch (t) {
                    (r = t), n();
                  }
              }
              function d() {
                var t;
                try {
                  t = r && r.then;
                } catch (t) {
                  return (r = t), (o = 2), d();
                }
                u(
                  t,
                  function () {
                    (o = 1), d();
                  },
                  function () {
                    (o = 2), d();
                  },
                  function () {
                    try {
                      1 == o && "function" == typeof e
                        ? (r = e(r))
                        : 2 == o &&
                          "function" == typeof n &&
                          ((r = n(r)), (o = 1));
                    } catch (t) {
                      return (r = t), c();
                    }
                    r == i
                      ? ((r = TypeError()), c())
                      : u(
                          t,
                          function () {
                            c(3);
                          },
                          c,
                          function () {
                            c(1 == o && 3);
                          }
                        );
                  }
                );
              }
            }
            (e = this).setImmediate ||
              e.addEventListener("message", function (t) {
                if (t.source == e)
                  if (r) s(o[t.data]);
                  else {
                    r = !0;
                    try {
                      o[t.data]();
                    } catch (t) {}
                    delete o[t.data], (r = !1);
                  }
              }),
              (a.resolve = function (t) {
                if (1 != this._d) throw TypeError();
                return t instanceof a
                  ? t
                  : new a(function (e) {
                      e(t);
                    });
              }),
              (a.reject = function (t) {
                if (1 != this._d) throw TypeError();
                return new a(function (e, n) {
                  n(t);
                });
              }),
              (a.all = function (t) {
                if (1 != this._d) throw TypeError();
                if (!(t instanceof Array)) return a.reject(TypeError());
                var e = new a();
                return (
                  (function n(i, o) {
                    return o
                      ? e.resolve(o)
                      : i
                      ? e.reject(i)
                      : (0 ==
                          t.reduce(function (t, e) {
                            return e && e.then ? t + 1 : t;
                          }, 0) && e.resolve(t),
                        void t.map(function (e, i) {
                          e &&
                            e.then &&
                            e.then(function (e) {
                              return (t[i] = e), n(), e;
                            }, n);
                        }));
                  })(),
                  e
                );
              }),
              (a.race = function (t) {
                if (1 != this._d) throw TypeError();
                if (!(t instanceof Array)) return a.reject(TypeError());
                if (0 == t.length) return new a();
                var e = new a();
                return (
                  (function n(i, o) {
                    return o
                      ? e.resolve(o)
                      : i
                      ? e.reject(i)
                      : (0 ==
                          t.reduce(function (t, e) {
                            return e && e.then ? t + 1 : t;
                          }, 0) && e.resolve(t),
                        void t.map(function (t, e) {
                          t &&
                            t.then &&
                            t.then(function (t) {
                              n(null, t);
                            }, n);
                        }));
                  })(),
                  e
                );
              }),
              (a._d = 1),
              (t.exports = a);
          })();
        }.call(this, n(16), n(48).setImmediate));
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = (function () {
          function t(t) {
            (this.events = {}), (this.context = t || this);
          }
          return (
            (t.prototype.on = function (t, e, n) {
              var i = t.toLowerCase();
              (this.events[i] = this.events[i] || []),
                this.events[i].push({
                  callback: e,
                  context: n || this.context,
                });
            }),
            (t.prototype.detach = function (t, e) {
              var n = t.toLowerCase(),
                i = this.events[n];
              if (e && i && i.length)
                for (var o = i.length - 1; o >= 0; o--)
                  i[o].context === e && i.splice(o, 1);
              else this.events[n] = [];
            }),
            (t.prototype.fire = function (t, e) {
              void 0 === e && (e = []);
              var n = t.toLowerCase();
              return (
                !this.events[n] ||
                this.events[n]
                  .map(function (t) {
                    return t.callback.apply(t.context, e);
                  })
                  .indexOf(!1) < 0
              );
            }),
            (t.prototype.clear = function () {
              this.events = {};
            }),
            t
          );
        })();
        (e.EventSystem = i),
          (e.EventsMixin = function (t) {
            var e = new i((t = t || {}));
            (t.detachEvent = e.detach.bind(e)),
              (t.attachEvent = e.on.bind(e)),
              (t.callEvent = e.fire.bind(e));
          });
      },
      function (t, e, n) {
        "use strict";
        var i;
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(29),
          r = n(4),
          s = n(15),
          a = n(2);
        (e.getToolbarData = function (t, n) {
          var i,
            l =
              (((i = {})[a.RTEToolbarBlock.undo] = [
                {
                  id: "undo",
                  tooltip: s.default.undo,
                  type: o.ItemType.navItem,
                  icon: "dxi dxi-undo",
                  multiClick: !0,
                  disabled: !0,
                },
                {
                  id: "redo",
                  tooltip: s.default.redo,
                  type: o.ItemType.navItem,
                  icon: "dxi dxi-redo",
                  multiClick: !0,
                  disabled: !0,
                },
              ]),
              (i[a.RTEToolbarBlock.style] = [
                {
                  id: a.Modifier.fontFamily,
                  value: n[a.Modifier.fontFamily],
                  tooltip: s.default.selectFontFamily,
                  css:
                    "dhx_richtext__dropdown dhx_richtext__dropdown--force_max-width dhx_richtext__dropdown--mw_50",
                  type: o.ItemType.navItem,
                  items: (function () {
                    var t = [];
                    for (var n in e.fonts)
                      t.push({ id: "font-" + n, value: n });
                    return t;
                  })(),
                },
                {
                  id: a.Modifier.fontSize,
                  value: n[a.Modifier.fontSize],
                  tooltip: s.default.selectFontSize,
                  css:
                    "dhx_richtext__dropdown dhx_richtext__dropdown--force_max-width dhx_richtext__dropdown--mw_35",
                  type: o.ItemType.navItem,
                  items: (function () {
                    var t = [];
                    for (var n in e.fontSizes) {
                      var i = parseInt(n, 10);
                      t.push({ id: "font-size-" + i, value: n });
                    }
                    return t;
                  })(),
                },
                {
                  id: a.Modifier.style,
                  tooltip: s.default.selectFormat,
                  value: s.default[n[a.Modifier.style]],
                  css:
                    "dhx_richtext__dropdown dhx_richtext__dropdown--force_max-width dhx_richtext__dropdown--mw_75",
                  type: o.ItemType.navItem,
                  items: [
                    { id: "style-p", value: s.default.p },
                    {
                      id: "style-h1",
                      css: "dhx_richtext__menu-text--h1",
                      value: s.default.h1,
                    },
                    {
                      id: "style-h2",
                      css: "dhx_richtext__menu-text--h2",
                      value: s.default.h2,
                    },
                    {
                      id: "style-h3",
                      css: "dhx_richtext__menu-text--h3",
                      value: s.default.h3,
                    },
                    {
                      id: "style-h4",
                      css: "dhx_richtext__menu-text--h4",
                      value: s.default.h4,
                    },
                    {
                      id: "style-h5",
                      css: "dhx_richtext__menu-text--h5",
                      value: s.default.h5,
                    },
                    {
                      id: "style-h6",
                      css: "dhx_richtext__menu-text--h6",
                      value: s.default.h6,
                    },
                  ],
                },
                {
                  id: a.Modifier.blockquote,
                  tooltip: s.default.blockquote,
                  active: n[a.Modifier.blockquote],
                  type: o.ItemType.navItem,
                  icon: "dxi dxi-format-quote-open",
                },
              ]),
              (i[a.RTEToolbarBlock.color] = [
                {
                  id: a.Modifier.color,
                  tooltip: s.default.selectTextColor,
                  type: o.ItemType.navItem,
                  html: r.textColor(n[a.Modifier.color]),
                },
                {
                  id: a.Modifier.background,
                  tooltip: s.default.selectTextBackground,
                  type: o.ItemType.navItem,
                  html: r.textSelectColor(n[a.Modifier.background]),
                },
              ]),
              (i[a.RTEToolbarBlock.decoration] = [
                {
                  id: a.Modifier.bold,
                  tooltip: s.default.markBold,
                  icon: "dxi dxi-format-bold",
                  type: o.ItemType.navItem,
                  hotkey: "ctrl+b",
                  active: n[a.Modifier.bold],
                },
                {
                  id: a.Modifier.italic,
                  tooltip: s.default.markItalic,
                  icon: "dxi dxi-format-italic",
                  type: o.ItemType.navItem,
                  hotkey: "ctrl+i",
                  active: n[a.Modifier.italic],
                },
                {
                  id: a.Modifier.strike,
                  tooltip: s.default.markStrike,
                  icon: "dxi dxi-format-strikethrough",
                  type: o.ItemType.navItem,
                  active: n[a.Modifier.strike],
                },
                {
                  id: a.Modifier.underline,
                  tooltip: s.default.markUnderline,
                  icon: "dxi dxi-format-underline",
                  type: o.ItemType.navItem,
                  hotkey: "ctrl+u",
                  active: n[a.Modifier.underline],
                },
              ]),
              (i[a.RTEToolbarBlock.align] = [
                {
                  id: "align-left",
                  tooltip: s.default.alignLeft,
                  type: o.ItemType.navItem,
                  icon: "dxi dxi-format-align-left",
                  active: "left" === n[a.Modifier.align],
                },
                {
                  id: "align-center",
                  tooltip: s.default.alignCenter,
                  type: o.ItemType.navItem,
                  icon: "dxi dxi-format-align-center",
                  active: "center" === n[a.Modifier.align],
                },
                {
                  id: "align-right",
                  tooltip: s.default.alignRight,
                  type: o.ItemType.navItem,
                  icon: "dxi dxi-format-align-right",
                  active: "right" === n[a.Modifier.align],
                },
              ]),
              (i[a.RTEToolbarBlock.link] = [
                {
                  id: a.Modifier.link,
                  tooltip: s.default.addLink,
                  type: o.ItemType.navItem,
                  icon: "dxi dxi-link-variant",
                },
              ]),
              (i[a.RTEToolbarBlock.clear] = [
                {
                  id: "clear-style",
                  tooltip: s.default.clearFormat,
                  type: o.ItemType.navItem,
                  icon: "dxi dxi-eraser",
                },
              ]),
              (i[a.RTEToolbarBlock.stats] = [
                {
                  id: "stats",
                  tooltip: s.default.stats,
                  type: o.ItemType.navItem,
                  icon: "dxi dxi-information-outline",
                },
              ]),
              (i[a.RTEToolbarBlock.fullscreen] = [
                {
                  id: "fullscreen",
                  $fullscreen: !1,
                  tooltip: s.default.fullscreen,
                  type: o.ItemType.navItem,
                  icon: "dxi dxi-arrow-expand",
                },
              ]),
              i);
          return t.reduce(function (e, n, i) {
            return (
              e.push.apply(e, l[n]),
              i !== t.length - 1 && e.push({ type: o.ItemType.separator }),
              e
            );
          }, []);
        }),
          (e.fonts = {
            Roboto: !0,
            Arial: !0,
            Georgia: !0,
            Tahoma: !0,
            "Times New Roman": !0,
            Verdana: !0,
          }),
          (e.fontSizes = {
            "12px": !0,
            "14px": !0,
            "16px": !0,
            "18px": !0,
            "20px": !0,
            "24px": !0,
            "28px": !0,
            "32px": !0,
            "36px": !0,
          }),
          (e.emptyStyle = {}),
          (e.defaultBlocks = [
            a.RTEToolbarBlock.undo,
            a.RTEToolbarBlock.style,
            a.RTEToolbarBlock.decoration,
            a.RTEToolbarBlock.color,
            a.RTEToolbarBlock.align,
            a.RTEToolbarBlock.link,
          ]),
          (e.defaultFontSizeByBlock = {
            p: "14px",
            h1: "36px",
            h2: "32px",
            h3: "28px",
            h4: "24px",
            h5: "20px",
            h6: "16px",
          }),
          (e.defaultDiffrentStyle =
            (((i = {})[a.Modifier.fontSize] = ""),
            (i[a.Modifier.fontFamily] = ""),
            (i[a.Modifier.style] = ""),
            (i[a.Modifier.bold] = !1),
            (i[a.Modifier.underline] = !1),
            (i[a.Modifier.bold] = !1),
            (i[a.Modifier.italic] = !1),
            (i[a.Modifier.strike] = !1),
            (i[a.Modifier.color] = "#4c4c4c"),
            (i[a.Modifier.background] = "#FFFFFF"),
            (i[a.Modifier.align] = !1),
            i));
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (function (t) {
            (t.all = "all"), (t.level = "level"), (t.leafs = "leafs");
          })(e.TreeFilterType || (e.TreeFilterType = {})),
          (function (t) {
            (t.top = "top"), (t.bot = "bot"), (t.in = "in");
          })(e.DropPosition || (e.DropPosition = {})),
          (function (t) {
            (t.afterAdd = "afteradd"),
              (t.beforeAdd = "beforeadd"),
              (t.removeAll = "removeall"),
              (t.beforeRemove = "beforeremove"),
              (t.afterRemove = "afterremove"),
              (t.change = "change"),
              (t.load = "load"),
              (t.loadError = "loaderror"),
              (t.beforeLazyLoad = "beforelazyload"),
              (t.afterLazyLoad = "afterlazyload");
          })(e.DataEvents || (e.DataEvents = {})),
          (function (t) {
            (t.beforeDrag = "beforedrag"),
              (t.beforeDrop = "beforeDrop"),
              (t.dragStart = "dragstart"),
              (t.dragEnd = "dragend"),
              (t.canDrop = "candrop"),
              (t.cancelDrop = "canceldrop"),
              (t.dropComplete = "dropcomplete"),
              (t.dragOut = "dragOut"),
              (t.dragIn = "dragIn");
          })(e.DragEvents || (e.DragEvents = {})),
          (function (t) {
            (t.target = "target"), (t.both = "both"), (t.source = "source");
          })(e.DragMode || (e.DragMode = {})),
          (function (t) {
            (t.child = "child"),
              (t.sibling = "sibling"),
              (t.complex = "complex");
          })(e.DropBehaviour || (e.DropBehaviour = {})),
          (function (t) {
            (t.json = "json"), (t.csv = "csv"), (t.xml = "xml");
          })(e.DataDriver || (e.DataDriver = {}));
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(12),
          o = n(33);
        (e.isEqualObj = function (t, e) {
          for (var n in t) if (t[n] !== e[n]) return !1;
          return !0;
        }),
          (e.naturalCompare = function (t, e) {
            if (isNaN(t) || isNaN(e)) {
              var n = [],
                i = [];
              for (
                t.replace(/(\d+)|(\D+)/g, function (t, e, i) {
                  n.push([e || 1 / 0, i || ""]);
                }),
                  e.replace(/(\d+)|(\D+)/g, function (t, e, n) {
                    i.push([e || 1 / 0, n || ""]);
                  });
                n.length && i.length;

              ) {
                var o = n.shift(),
                  r = i.shift(),
                  s = o[0] - r[0] || o[1].localeCompare(r[1]);
                if (s) return s;
              }
              return n.length - i.length;
            }
            return t - e;
          }),
          (e.findByConf = function (t, e) {
            if ("function" == typeof e) {
              if (e.call(this, t)) return t;
            } else if (e.by && e.match && t[e.by] === e.match) return t;
          }),
          (e.isDebug = function () {
            var t = window.dhx;
            if (void 0 !== t) return void 0 !== t.debug && t.debug;
          }),
          (e.dhxWarning = function (t) {
            console.warn(t);
          }),
          (e.dhxError = function (t) {
            throw new Error(t);
          }),
          (e.toProxy = function (t) {
            var e = typeof t;
            return "string" === e
              ? new i.DataProxy(t)
              : "object" === e
              ? t
              : void 0;
          }),
          (e.toDataDriver = function (t) {
            if ("string" == typeof t) {
              var e = window.dhx,
                n = (e && e.dataDrivers) || o.dataDrivers;
              if (n[t]) return new n[t]();
              console.warn("Incorrect data driver type:", t),
                console.warn(
                  "Available types:",
                  JSON.stringify(Object.keys(n))
                );
            } else if ("object" == typeof t) return t;
          }),
          (e.copyWithoutInner = function (t, e) {
            var n = {};
            for (var i in t) "$" === i[0] || (e && e[i]) || (n[i] = t[i]);
            return n;
          }),
          (e.isTreeCollection = function (t) {
            return Boolean(t.getRoot);
          }),
          (e.hasJsonOrArrayStructure = function (t) {
            if ("object" == typeof t) return !0;
            if ("string" != typeof t) return !1;
            try {
              var e = JSON.parse(t);
              return (
                "[object Object]" === Object.prototype.toString.call(e) ||
                Array.isArray(e)
              );
            } catch (t) {
              return !1;
            }
          });
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(3),
          o = n(1),
          r = (function () {
            function t(t, e) {
              (this._uid = i.uid()), (this.config = e || {});
            }
            return (
              (t.prototype.mount = function (t, e) {
                e && (this._view = e),
                  t &&
                    this._view &&
                    this._view.mount &&
                    ((this._container = o.toNode(t)),
                    this._container.tagName
                      ? this._view.mount(this._container)
                      : this._container.attach && this._container.attach(this));
              }),
              (t.prototype.unmount = function () {
                var t = this.getRootView();
                t && t.node && (t.unmount(), (this._view = null));
              }),
              (t.prototype.getRootView = function () {
                return this._view;
              }),
              (t.prototype.getRootNode = function () {
                return this._view && this._view.node && this._view.node.el;
              }),
              (t.prototype.paint = function () {
                this._view &&
                  (this._view.node || this._container) &&
                  ((this._doNotRepaint = !1), this._view.redraw());
              }),
              t
            );
          })();
        (e.View = r),
          (e.toViewLike = function (t) {
            return {
              getRootView: function () {
                return t;
              },
              paint: function () {
                return t.node && t.redraw();
              },
              mount: function (e) {
                return t.mount(e);
              },
            };
          });
      },
      function (t, e, n) {
        "use strict";
        function i(t) {
          for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
        }
        Object.defineProperty(e, "__esModule", { value: !0 }),
          i(n(45)),
          i(n(47)),
          i(n(51)),
          i(n(26)),
          i(n(18));
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(19),
          o = (function () {
            function t(t, e) {
              (this.url = this._url = t), (this.config = e);
            }
            return (
              (t.prototype.updateUrl = function (t, e) {
                for (var n in (void 0 === e && (e = {}),
                (this._url = this.url = t || this._url),
                (this.url += "?"),
                e))
                  (this.config[n] = e[n]),
                    (this.url += n + "=" + encodeURIComponent(e[n]) + "&");
                this.url = this.url.slice(0, -1);
              }),
              (t.prototype.load = function () {
                return i.ajax.get(this.url, null, { responseType: "text" });
              }),
              (t.prototype.save = function (t, e) {
                switch (e) {
                  case "delete":
                    return i.ajax.delete(this.url, t);
                  case "update":
                  case "insert":
                  default:
                    return i.ajax.post(this.url, t);
                }
              }),
              t
            );
          })();
        e.DataProxy = o;
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(31);
        (e.DataEvents = i.DataEvents),
          (function (t) {
            (t.button = "button"),
              (t.imageButton = "imageButton"),
              (t.selectButton = "selectButton"),
              (t.customHTMLButton = "customButton"),
              (t.input = "input"),
              (t.separator = "separator"),
              (t.title = "title"),
              (t.spacer = "spacer"),
              (t.menuItem = "menuItem"),
              (t.block = "block"),
              (t.navItem = "navItem"),
              (t.customHTML = "customHTML");
          })(e.ItemType || (e.ItemType = {})),
          (function (t) {
            (t.inputCreated = "inputCreated"),
              (t.click = "click"),
              (t.openMenu = "openmenu"),
              (t.beforeHide = "beforeHide"),
              (t.afterHide = "afterHide"),
              (t.inputFocus = "inputfocus"),
              (t.inputBlur = "inputblur");
          })(e.NavigationBarEvents || (e.NavigationBarEvents = {})),
          (function (t) {
            (t.pointer = "pointer"), (t.click = "click");
          })(e.NavigationType || (e.NavigationType = {}));
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(0),
          o = n(13);
        (e.getCount = function (t, e, n) {
          var o =
            {
              danger: " dhx_navbar-count--color_danger",
              secondary: " dhx_navbar-count--color_secondary",
              primary: " dhx_navbar-count--color_primary",
              success: " dhx_navbar-count--color_success",
            }[t.countColor] || " dhx_navbar-count--color_danger";
          return i.el(
            ".dhx_navbar-count",
            {
              class:
                e +
                o +
                (!n && parseInt(t.count, 10) > 99
                  ? " dhx_navbar-count--overlimit"
                  : ""),
            },
            n && parseInt(t.count, 10) > 99 ? "99+" : t.count
          );
        }),
          (e.getIcon = function (t, e) {
            return (
              void 0 === t && (t = ""),
              "dxi" === t.slice(0, 3) && (t = "dxi " + t),
              i.el("span", { class: "dhx_" + e + "__icon " + t })
            );
          }),
          (e.navbarComponentMixin = function (t, e, n, s) {
            var a = r(t, e, n),
              l =
                "ribbon" === t &&
                (e.type === o.ItemType.navItem ||
                  e.type === o.ItemType.imageButton);
            return i.el(
              "li",
              {
                _key: e.id,
                class:
                  a +
                  (e.icon && !e.value && l ? " dhx_ribbon__item--icon" : "") +
                  (e.src && !e.value && l ? " dhx_ribbon__item--icon" : "") +
                  (e.size && l ? " dhx_ribbon__item--" + e.size : ""),
                ".innerHTML":
                  e.type === o.ItemType.customHTML ? e.html : void 0,
                dhx_id: e.type === o.ItemType.customHTML ? e.id : void 0,
              },
              e.type !== o.ItemType.customHTML ? [s] : void 0
            );
          }),
          (e.getNavbarButtonCSS = function (t, e) {
            var n = t.color,
              i = t.size,
              o = t.view,
              r = t.full,
              s = t.icon,
              a = t.circle,
              l = t.loading,
              c = t.value,
              u = t.active;
            return (
              ({
                danger: " dhx_button--color_danger",
                secondary: " dhx_button--color_secondary",
                primary: " dhx_button--color_primary",
                success: " dhx_button--color_success",
              }[n] || " dhx_button--color_primary") +
              ({
                small: " dhx_button--size_small",
                medium: " dhx_button--size_medium",
              }[i] || " dhx_button--size_medium") +
              ({
                flat: " dhx_button--view_flat",
                link: " dhx_button--view_link",
              }[o] || " dhx_button--view_flat") +
              (r ? " dhx_button--width_full" : "") +
              (a ? " dhx_button--circle" : "") +
              (l ? " dhx_button--loading" : "") +
              (u ? " dhx_button--active" : "") +
              (s && !c ? " dhx_button--icon" : "")
            );
          });
        var r = function (t, e, n) {
          var i = "",
            r = "";
          return (
            (r =
              (i = n ? "dhx_menu-item" : "dhx_" + t + "__item") +
              (e.css ? " " + e.css : "")),
            (e.type !== o.ItemType.spacer && e.type !== o.ItemType.separator) ||
              (r += " " + i + "--" + e.type),
            "button" !== e.type ||
              "sidebar" !== t ||
              e.icon ||
              (r += " dhx_navbar-item--colapse_hidden"),
            r
          );
        };
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        e.default = {
          apply: "Apply",
          undo: "Undo",
          redo: "Redo",
          selectFontFamily: "Font",
          selectFontSize: "Font size",
          selectFormat: "Style",
          selectTextColor: "Text color",
          selectTextBackground: "Background color",
          markBold: "Bold",
          markItalic: "Italic",
          markStrike: "Strike",
          markUnderline: "Underline",
          alignLeft: "Align left",
          alignCenter: "Align center",
          alignRight: "Align right",
          addLink: "Add link",
          clearFormat: "Clear formatting",
          fullscreen: "Fullscreen",
          stats: "Statistics",
          removeLink: "Remove link",
          edit: "Edit",
          h1: "Heading 1",
          h2: "Heading 2",
          h3: "Heading 3",
          h4: "Heading 4",
          h5: "Heading 5",
          h6: "Heading 6",
          p: "Normal text",
          blockquote: "Block quote",
          chars: "chars",
          charsExlSpace: "Characters without spaces",
          words: "words",
        };
      },
      function (t, e) {
        var n;
        n = (function () {
          return this;
        })();
        try {
          n = n || new Function("return this")();
        } catch (t) {
          "object" == typeof window && (n = window);
        }
        t.exports = n;
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (function (t) {
            (t.beforeShow = "beforeShow"),
              (t.afterShow = "afterShow"),
              (t.beforeHide = "beforeHide"),
              (t.afterHide = "afterHide"),
              (t.beforeResizeStart = "beforeResizeStart"),
              (t.resize = "resize"),
              (t.afterResizeEnd = "afterResizeEnd"),
              (t.beforeAdd = "beforeAdd"),
              (t.afterAdd = "afterAdd"),
              (t.beforeRemove = "beforeRemove"),
              (t.afterRemove = "afterRemove"),
              (t.beforeCollapse = "beforeCollapse"),
              (t.afterCollapse = "afterCollapse"),
              (t.beforeExpand = "beforeExpand"),
              (t.afterExpand = "afterExpand");
          })(e.LayoutEvents || (e.LayoutEvents = {})),
          (function (t) {
            (t[(t.unknown = 0)] = "unknown"),
              (t[(t.percents = 1)] = "percents"),
              (t[(t.pixels = 2)] = "pixels"),
              (t[(t.mixedpx1 = 3)] = "mixedpx1"),
              (t[(t.mixedpx2 = 4)] = "mixedpx2"),
              (t[(t.mixedperc1 = 5)] = "mixedperc1"),
              (t[(t.mixedperc2 = 6)] = "mixedperc2");
          })(e.resizeMode || (e.resizeMode = {}));
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (function (t) {
            (t.left = "left"),
              (t.right = "right"),
              (t.top = "top"),
              (t.bottom = "bottom"),
              (t.center = "center");
          })(e.RealPosition || (e.RealPosition = {})),
          (function (t) {
            (t.right = "right"), (t.bottom = "bottom"), (t.center = "center");
          })(e.Position || (e.Position = {})),
          (function (t) {
            (t.topLeft = "top-left"),
              (t.topRight = "top-right"),
              (t.bottomLeft = "bottom-left"),
              (t.bottomRight = "bottom-right");
          })(e.MessageContainerPosition || (e.MessageContainerPosition = {}));
      },
      function (t, e, n) {
        "use strict";
        (function (t) {
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = n(8),
            o = n(9);
          function r(t) {
            return t
              ? t.indexOf("json") >= 0
                ? "json"
                : t.indexOf("xml") >= 0
                ? "xml"
                : "text"
              : "text";
          }
          function s(e, n, s, a, l) {
            var c = a || {};
            if (
              (l && (c.Accept = "application/" + l),
              "GET" !== s &&
                (c["Content-Type"] = c["Content-Type"] || "application/json"),
              "GET" === s)
            ) {
              var u =
                n && "object" == typeof n
                  ? (function (t) {
                      return Object.keys(t)
                        .reduce(function (e, n) {
                          var i =
                            "object" == typeof t[n]
                              ? JSON.stringify(t[n])
                              : t[n];
                          return e.push(n + "=" + encodeURIComponent(i)), e;
                        }, [])
                        .join("&");
                    })(n)
                  : n && "string" == typeof n
                  ? n
                  : "";
              u && ((e += -1 === e.indexOf("?") ? "?" : "&"), (e += u)),
                (n = null);
            }
            return window.fetch
              ? window
                  .fetch(e, {
                    method: s,
                    body: n ? JSON.stringify(n) : null,
                    headers: c,
                  })
                  .then(function (e) {
                    if (!e.ok)
                      return e.text().then(function (n) {
                        return t.reject({
                          status: e.status,
                          statusText: e.statusText,
                          message: n,
                        });
                      });
                    var n = l || r(e.headers.get("Content-Type"));
                    if ("raw" === n)
                      return {
                        headers: Object.fromEntries(e.headers.entries()),
                        url: e.url,
                        body: e.body,
                      };
                    if (204 !== e.status)
                      switch (n) {
                        case "json":
                          return e.json();
                        case "xml":
                          var s = o.toDataDriver(i.DataDriver.xml);
                          return s
                            ? e.text().then(function (t) {
                                return s.toJsonObject(t);
                              })
                            : e.text();
                        default:
                          return e.text();
                      }
                  })
              : new t(function (t, a) {
                  var u = new XMLHttpRequest();
                  for (var d in ((u.onload = function () {
                    u.status >= 200 && u.status < 300
                      ? ("raw" === l &&
                          t({
                            url: u.responseURL,
                            headers: u
                              .getAllResponseHeaders()
                              .trim()
                              .split(/[\r\n]+/)
                              .reduce(function (t, e) {
                                var n = e.split(": ");
                                return (t[n[0]] = n[1]), t;
                              }, {}),
                            body: u.response,
                          }),
                        204 === u.status
                          ? t()
                          : t(
                              (function (t, e) {
                                switch (e) {
                                  case "json":
                                    return JSON.parse(t);
                                  case "text":
                                    return t;
                                  case "xml":
                                    var n = o.toDataDriver(i.DataDriver.xml);
                                    return n
                                      ? n.toJsonObject(t)
                                      : {
                                          parseError:
                                            "Incorrect data driver type: 'xml'",
                                        };
                                  default:
                                    return t;
                                }
                              })(
                                u.responseText,
                                l || r(u.getResponseHeader("Content-Type"))
                              )
                            ))
                      : a({ status: u.status, statusText: u.statusText });
                  }),
                  (u.onerror = function () {
                    a({
                      status: u.status,
                      statusText: u.statusText,
                      message: u.responseText,
                    });
                  }),
                  u.open(s, e),
                  c))
                    u.setRequestHeader(d, c[d]);
                  switch (s) {
                    case "POST":
                    case "DELETE":
                    case "PUT":
                      u.send(void 0 !== n ? JSON.stringify(n) : "");
                      break;
                    case "GET":
                    default:
                      u.send();
                  }
                });
          }
          e.ajax = {
            get: function (t, e, n) {
              return s(
                t,
                e,
                "GET",
                n && n.headers,
                void 0 !== n ? n.responseType : void 0
              );
            },
            post: function (t, e, n) {
              return s(
                t,
                e,
                "POST",
                n && n.headers,
                void 0 !== n ? n.responseType : void 0
              );
            },
            put: function (t, e, n) {
              return s(
                t,
                e,
                "PUT",
                n && n.headers,
                void 0 !== n ? n.responseType : void 0
              );
            },
            delete: function (t, e, n) {
              return s(
                t,
                e,
                "DELETE",
                n && n.headers,
                void 0 !== n ? n.responseType : void 0
              );
            },
          };
        }.call(this, n(5)));
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(0),
          o = n(7),
          r = n(2);
        (e.calcTextNodeStyle = function (t) {
          var e = {};
          for (var n in t)
            if (t[n])
              switch (n) {
                case r.Modifier.bold:
                  e["font-weight"] = "bold";
                  break;
                case r.Modifier.italic:
                  e["font-style"] = "italic";
                  break;
                case r.Modifier.underline:
                  e["text-decoration"]
                    ? (e["text-decoration"] += " underline")
                    : (e["text-decoration"] = "underline");
                  break;
                case r.Modifier.strike:
                  e["text-decoration"]
                    ? (e["text-decoration"] += " line-through")
                    : (e["text-decoration"] = "line-through");
                  break;
                case r.Modifier.color:
                  e.color = t[n];
                  break;
                case r.Modifier.background:
                  e.background = t[n];
                  break;
                case r.Modifier.fontFamily:
                  e["font-family"] = t[n];
                  break;
                case r.Modifier.fontSize:
                  e["font-size"] = t[n];
              }
          return e;
        }),
          (e.calcBlockStyle = function (t) {
            var e = {};
            for (var n in t)
              if (t[n])
                switch (n) {
                  case r.Modifier.align:
                    e["text-align"] = t[n];
                }
            return e;
          }),
          (e.blockStyleToTag = function (t) {
            return t[r.Modifier.style] ? t[r.Modifier.style] : "p";
          }),
          (e.blockquoteWrapper = function (t, e) {
            return t[r.Modifier.blockquote]
              ? function () {
                  for (var t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                  return i.el("blockquote", { dhx_offset: e }, [
                    i.el.apply(void 0, t),
                  ]);
                }
              : function () {
                  for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                  return i.el.apply(void 0, t);
                };
          }),
          (e.getComputedNodeStyle = function (t, e, n) {
            var i = {};
            for (var s in t.style) i[s] = t.style[s];
            return (
              i[r.Modifier.fontSize] ||
                (e.style[r.Modifier.style] && "p" !== e.style[r.Modifier.style]
                  ? (i[r.Modifier.fontSize] =
                      o.defaultFontSizeByBlock[e.style[r.Modifier.style]])
                  : (i[r.Modifier.fontSize] = n[r.Modifier.fontSize])),
              i[r.Modifier.fontFamily] ||
                (i[r.Modifier.fontFamily] = n[r.Modifier.fontFamily]),
              i
            );
          }),
          (e.getComputedBlockStyle = function (t, e) {
            var n = {};
            for (var i in t.style) n[i] = t.style[i];
            return (
              n[r.Modifier.style] ||
                (n[r.Modifier.style] = e[r.Modifier.style]),
              n[r.Modifier.align] ||
                (n[r.Modifier.align] = e[r.Modifier.align]),
              n[r.Modifier.blockquote] ||
                (n[r.Modifier.blockquote] = e[r.Modifier.blockquote]),
              n
            );
          }),
          (e.isEmptyBlockStyle = function (t) {
            return !t[r.Modifier.blockquote] && !t[r.Modifier.align];
          });
      },
      function (t, e, n) {
        "use strict";
        function i(t) {
          t = t.replace(
            /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
            function (t, e, n, i) {
              return e + e + n + n + i + i;
            }
          );
          var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
          return e
            ? {
                r: parseInt(e[1], 16),
                g: parseInt(e[2], 16),
                b: parseInt(e[3], 16),
              }
            : null;
        }
        function o(t) {
          var e,
            n,
            i = t.r / 255,
            o = t.g / 255,
            r = t.b / 255,
            s = Math.max(i, o, r),
            a = s - Math.min(i, o, r),
            l = function (t) {
              return (s - t) / 6 / a + 0.5;
            };
          if (0 === a) e = n = 0;
          else {
            n = a / s;
            var c = l(i),
              u = l(o),
              d = l(r);
            i === s
              ? (e = d - u)
              : o === s
              ? (e = 1 / 3 + c - d)
              : r === s && (e = 2 / 3 + u - c),
              e < 0 ? (e += 1) : e > 1 && (e -= 1);
          }
          return { h: Math.floor(360 * e), s: n, v: s };
        }
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.HSVtoRGB = function (t) {
            var e = { r: 0, g: 0, b: 0 },
              n = t.h / 60,
              i = t.s,
              o = t.v,
              r = Math.floor(n) % 6,
              s = n - Math.floor(n),
              a = 255 * o * (1 - i),
              l = 255 * o * (1 - i * s),
              c = 255 * o * (1 - i * (1 - s));
            switch (((o *= 255), r)) {
              case 0:
                (e.r = o), (e.g = c), (e.b = a);
                break;
              case 1:
                (e.r = l), (e.g = o), (e.b = a);
                break;
              case 2:
                (e.r = a), (e.g = o), (e.b = c);
                break;
              case 3:
                (e.r = a), (e.g = l), (e.b = o);
                break;
              case 4:
                (e.r = c), (e.g = a), (e.b = o);
                break;
              case 5:
                (e.r = o), (e.g = a), (e.b = l);
            }
            for (var u in e) e[u] = Math.round(e[u]);
            return e;
          }),
          (e.RGBToHex = function (t) {
            return Object.keys(t).reduce(function (e, n) {
              var i = t[n].toString(16).toUpperCase();
              return e + (i = 1 === i.length ? "0" + i : i);
            }, "#");
          }),
          (e.HexToRGB = i),
          (e.RGBToHSV = o),
          (e.HexToHSV = function (t) {
            return o(i(t));
          }),
          (e.isHex = function (t) {
            return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t);
          });
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        e.default = {
          cancel: "Cancel",
          select: "Select",
          rightClickToDelete: "Right click to delete",
          customColors: "Custom colors",
          addNewColor: "Add new color",
        };
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i,
          o = n(7);
        !(function (t) {
          (t[(t.textIsEmpty = 0)] = "textIsEmpty"),
            (t[(t.complete = 1)] = "complete"),
            (t[(t.nullTextLength = 2)] = "nullTextLength"),
            (t[(t.forceRemovePrevious = 3)] = "forceRemovePrevious"),
            (t[(t.forceRemoveNext = 4)] = "forceRemoveNext");
        })((i = e.RemoveTextResult || (e.RemoveTextResult = {})));
        var r = (function () {
          function t(t, e) {
            (this.text = t), (this.style = e || o.emptyStyle);
          }
          return (
            (t.prototype.isEmpty = function () {
              return 0 === this.text.length;
            }),
            (t.prototype.insert = function (t, e) {
              this.text = this.text.slice(0, e) + t + this.text.slice(e);
            }),
            (t.prototype.remove = function (t, e) {
              return this.isEmpty()
                ? i.textIsEmpty
                : 0 === t && e
                ? i.forceRemovePrevious
                : t !== this.text.length || e
                ? ((this.text = e
                    ? this.text.slice(0, t - 1) + this.text.slice(t)
                    : this.text.slice(0, t) + this.text.slice(t + 1)),
                  0 === this.text.length ? i.nullTextLength : i.complete)
                : i.forceRemoveNext;
            }),
            t
          );
        })();
        e.TextNode = r;
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        e.default = { apply: "apply", reject: "reject" };
      },
      function (t, e, n) {
        "use strict";
        function i(t) {
          var e = document.activeElement;
          e.classList.contains("dhx_alert__confirm-reject") ||
            e.classList.contains("dhx_alert__confirm-aply") ||
            t.preventDefault();
        }
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.blockScreen = function (t) {
            var e = document.createElement("div");
            return (
              (e.className = "dhx_alert__overlay " + (t || "")),
              document.body.appendChild(e),
              document.addEventListener("keydown", i),
              function () {
                document.body.removeChild(e),
                  document.removeEventListener("keydown", i);
              }
            );
          });
      },
      function (t, e, n) {
        "use strict";
        var i =
          (this && this.__assign) ||
          function () {
            return (i =
              Object.assign ||
              function (t) {
                for (var e, n = 1, i = arguments.length; n < i; n++)
                  for (var o in (e = arguments[n]))
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t;
              }).apply(this, arguments);
          };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(1),
          r = n(18),
          s = 750,
          a = 200;
        function l(t, e, n, i) {
          var o, s, a;
          switch (e) {
            case r.Position.center:
              return (
                (s = t.left + window.pageXOffset + (t.width - n) / 2) + 8 <
                  window.pageXOffset && (s = t.left + window.pageXOffset),
                {
                  left: s,
                  top: (a = t.top + window.pageYOffset + (t.height - i) / 2),
                  pos: (o = r.RealPosition.center),
                }
              );
            case r.Position.right:
              return (
                (o = r.RealPosition.right),
                (s = t.right + window.pageXOffset) + n + 8 >
                  window.innerWidth + window.pageXOffset &&
                  ((s = window.pageXOffset + t.left - n),
                  (o = r.RealPosition.left)),
                {
                  left: s,
                  top: (a = window.pageYOffset + t.top + (t.height - i) / 2),
                  pos: o,
                }
              );
            case r.Position.bottom:
            default:
              return (
                (s = window.pageXOffset + t.left + (t.width - n) / 2) + n >
                window.innerWidth + window.pageXOffset
                  ? (s = window.innerWidth + window.pageXOffset - n)
                  : s < 0 && (s = 0),
                (o = r.RealPosition.bottom),
                (a = window.pageYOffset + t.bottom) + i + 8 >
                  window.innerHeight + window.pageYOffset &&
                  ((a = window.pageYOffset + t.top - i),
                  (o = r.RealPosition.top)),
                { left: s, top: a, pos: o }
              );
          }
        }
        e.findPosition = l;
        var c = document.createElement("div"),
          u = document.createElement("span");
        (u.className = "dhx_tooltip__text"),
          c.appendChild(u),
          (c.style.position = "absolute");
        var d,
          h = null,
          f = !1,
          p = null,
          _ = null;
        function v(t, e, n, i, o) {
          void 0 === o && (o = !1);
          var s = t.getBoundingClientRect();
          (u.textContent = e),
            document.body.appendChild(c),
            (c.className =
              "dhx_widget dhx_tooltip" + (o ? " dhx_tooltip--forced" : ""));
          var a = c.getBoundingClientRect(),
            d = l(s, n, a.width, a.height),
            h = d.left,
            p = d.top,
            _ = d.pos;
          switch (_) {
            case r.RealPosition.bottom:
            case r.RealPosition.top:
            case r.RealPosition.left:
            case r.RealPosition.right:
            case r.RealPosition.center:
              (c.style.left = h + "px"), (c.style.top = p + "px");
          }
          (c.className += " dhx_tooltip--" + _ + " " + (i || "")),
            (f = !0),
            o ||
              setTimeout(function () {
                c.className += " dhx_tooltip--animate";
              });
        }
        function g(t, e, n) {
          var i = n.force,
            o = n.showDelay,
            l = n.hideDelay,
            u = n.position,
            g = n.css;
          i ||
            (_ = setTimeout(function () {
              v(t, e, u || r.Position.bottom, g);
            }, o || s));
          var x = function () {
            f &&
              (function (t) {
                h &&
                  (p = setTimeout(function () {
                    document.body.removeChild(c), (f = !1), (p = null);
                  }, t || a));
              })(l),
              clearTimeout(_),
              t.removeEventListener("mouseleave", x),
              t.removeEventListener("blur", x),
              document.removeEventListener("mousedown", x),
              (h = null),
              (d = null);
          };
          i && v(t, e, u, g, i),
            t.addEventListener("mouseleave", x),
            t.addEventListener("blur", x),
            document.addEventListener("mousedown", x),
            (d = x);
        }
        function x(t, e) {
          var n = o.toNode(e.node);
          n !== h &&
            (d && (d(), (d = null)),
            (h = n),
            p
              ? (clearTimeout(p),
                (p = null),
                g(n, t, i(i({}, e), { force: !0 })))
              : g(n, t, e));
        }
        function y(t) {
          var e = o.locateNode(t, "dhx_tooltip_text");
          e &&
            x(e.getAttribute("dhx_tooltip_text"), {
              position:
                e.getAttribute("dhx_tooltip_position") || r.Position.bottom,
              node: e,
            });
        }
        (e.tooltip = x),
          (e.enableTooltip = function () {
            document.addEventListener("mousemove", y);
          }),
          (e.disableTooltip = function () {
            document.removeEventListener("mousemove", y);
          });
      },
      function (t, e, n) {},
      function (t, e, n) {},
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (function (t) {
            for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
          })(n(62));
        var i = n(30);
        (e.ItemType = i.ItemType),
          (e.NavigationBarEvents = i.NavigationBarEvents);
      },
      function (t, e, n) {
        "use strict";
        function i(t) {
          for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
        }
        Object.defineProperty(e, "__esModule", { value: !0 }),
          i(n(63)),
          i(n(75)),
          i(n(13));
      },
      function (t, e, n) {
        "use strict";
        function i(t) {
          for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
        }
        Object.defineProperty(e, "__esModule", { value: !0 }),
          i(n(8)),
          i(n(32)),
          i(n(69)),
          i(n(70)),
          i(n(12)),
          i(n(72)),
          i(n(9)),
          i(n(35)),
          i(n(34)),
          i(n(73)),
          i(n(33)),
          i(n(19));
      },
      function (t, e, n) {
        "use strict";
        var i =
          (this && this.__assign) ||
          function () {
            return (i =
              Object.assign ||
              function (t) {
                for (var e, n = 1, i = arguments.length; n < i; n++)
                  for (var o in (e = arguments[n]))
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t;
              }).apply(this, arguments);
          };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(6),
          r = n(65),
          s = n(68),
          a = n(12),
          l = n(9),
          c = n(8),
          u = n(3),
          d = (function () {
            function t(t, e) {
              (this.config = t || {}),
                (this._order = []),
                (this._pull = {}),
                (this._changes = { order: [] }),
                (this._initOrder = null),
                (this._sort = new s.Sort()),
                (this._loader = new r.Loader(this, this._changes)),
                (this.events = e || new o.EventSystem(this)),
                this.events.on(c.DataEvents.loadError, function (t) {
                  "string" != typeof t ? l.dhxError(t) : l.dhxWarning(t);
                });
            }
            return (
              (t.prototype.add = function (t, e) {
                var n = this;
                if (this.events.fire(c.DataEvents.beforeAdd, [t]))
                  return Array.isArray(t)
                    ? t.map(function (t, i) {
                        return 0 !== i && (e += 1), n._add(t, e);
                      })
                    : this._add(t, e);
              }),
              (t.prototype.remove = function (t) {
                var e = this;
                t &&
                  (t instanceof Array
                    ? t.map(function (t) {
                        e._remove(t);
                      })
                    : this._remove(t));
              }),
              (t.prototype.removeAll = function () {
                this._removeAll(),
                  this.events.fire(c.DataEvents.removeAll),
                  this.events.fire(c.DataEvents.change);
              }),
              (t.prototype.exists = function (t) {
                return !!this._pull[t];
              }),
              (t.prototype.getNearId = function (t) {
                if (!this._pull[t]) return this._order[0].id || "";
              }),
              (t.prototype.getItem = function (t) {
                return this._pull[t];
              }),
              (t.prototype.update = function (t, e, n) {
                var i = this.getItem(t);
                if (i) {
                  if (l.isEqualObj(e, i)) return;
                  e.id && t !== e.id
                    ? (l.dhxWarning("this method doesn't allow change id"),
                      l.isDebug())
                    : (u.extend(this._pull[t], e, !1),
                      this.config.update && this.config.update(this._pull[t]),
                      n || this._onChange("update", t, this._pull[t]));
                } else l.dhxWarning("item not found");
              }),
              (t.prototype.getIndex = function (t) {
                var e = u.findIndex(this._order, function (e) {
                  return e.id === t;
                });
                return this._pull[t] && e >= 0 ? e : -1;
              }),
              (t.prototype.getId = function (t) {
                if (this._order[t]) return this._order[t].id;
              }),
              (t.prototype.getLength = function () {
                return this._order.length;
              }),
              (t.prototype.isDataLoaded = function (t, e) {
                return (
                  void 0 === t && (t = 0),
                  void 0 === e && (e = this._order.length),
                  u.isNumeric(t) && u.isNumeric(e)
                    ? 0 ===
                      this._order.slice(t, e).filter(function (t) {
                        return t.$empty;
                      }).length
                    : !this.find(function (t) {
                        return t.$empty;
                      })
                );
              }),
              (t.prototype.filter = function (t, e) {
                if (this.isDataLoaded()) {
                  if (
                    ((e = u.extend({ add: !1, multiple: !0 }, e)).add ||
                      ((this._order = this._initOrder || this._order),
                      (this._initOrder = null)),
                    (this._filters = this._filters || {}),
                    (e.multiple && t) || (this._filters = {}),
                    t)
                  ) {
                    if ("function" == typeof t) {
                      this._filters._ = { match: "_", compare: t };
                    } else
                      t.match
                        ? ((t.compare =
                            t.compare ||
                            function (t, e) {
                              return t === e;
                            }),
                          (this._filters[t.by] = t))
                        : delete this._filters[t.by];
                    this._applyFilters();
                  }
                  this.events.fire(c.DataEvents.change);
                } else l.dhxWarning("the method doesn't work with lazyLoad");
              }),
              (t.prototype.find = function (t) {
                for (var e in this._pull) {
                  var n = l.findByConf(this._pull[e], t);
                  if (n) return n;
                }
                return null;
              }),
              (t.prototype.findAll = function (t) {
                var e = [];
                for (var n in this._pull) {
                  var i = l.findByConf(this._pull[n], t);
                  i && e.push(i);
                }
                return e;
              }),
              (t.prototype.sort = function (t) {
                if (this.isDataLoaded()) {
                  if (t)
                    this._sort.sort(this._order, t),
                      this._initOrder &&
                        this._initOrder.length &&
                        this._sort.sort(this._initOrder, t);
                  else {
                    for (var e in ((this._order = []), this._pull))
                      this._order.push(this._pull[e]);
                    this._applyFilters();
                  }
                  this.events.fire(c.DataEvents.change);
                } else l.dhxWarning("the method doesn't work with lazyLoad");
              }),
              (t.prototype.copy = function (t, e, n, i) {
                var o = this;
                return t instanceof Array
                  ? t.map(function (t, r) {
                      return o._copy(t, e, n, i, r);
                    })
                  : this._copy(t, e, n, i);
              }),
              (t.prototype.move = function (t, e, n, i) {
                var o = this;
                return t instanceof Array
                  ? t.map(function (t, r) {
                      return o._move(t, e, n, i, r);
                    })
                  : this._move(t, e, n, i);
              }),
              (t.prototype.forEach = function (t) {
                for (var e = 0; e < this._order.length; e++)
                  t.call(this, this._order[e], e, this._order);
              }),
              (t.prototype.load = function (t, e) {
                return (
                  "string" == typeof t &&
                    (this.dataProxy = t = new a.DataProxy(t)),
                  (this.dataProxy = t),
                  this._loader.load(t, e)
                );
              }),
              (t.prototype.parse = function (t, e) {
                return this._removeAll(), this._loader.parse(t, e);
              }),
              (t.prototype.$parse = function (t) {
                var e = this.config.approximate;
                e && (t = this._approximate(t, e.value, e.maxNum)),
                  this._parse_data(t),
                  this.events.fire(c.DataEvents.change, ["load"]),
                  this.events.fire(c.DataEvents.load);
              }),
              (t.prototype.save = function (t) {
                this._loader.save(t);
              }),
              (t.prototype.changeId = function (t, e, n) {
                if ((void 0 === e && (e = u.uid()), n || this.isDataLoaded())) {
                  var i = this.getItem(t);
                  i
                    ? ((i.id = e),
                      u.extend(this._pull[t], i),
                      (this._pull[e] = this._pull[t]),
                      n || this._onChange("update", e, this._pull[e]),
                      delete this._pull[t])
                    : l.dhxWarning("item not found");
                } else l.dhxWarning("the method doesn't work with lazyLoad");
              }),
              (t.prototype.isSaved = function () {
                return !this._changes.order.length;
              }),
              (t.prototype.map = function (t) {
                for (var e = [], n = 0; n < this._order.length; n++)
                  e.push(t.call(this, this._order[n], n, this._order));
                return e;
              }),
              (t.prototype.mapRange = function (t, e, n) {
                t < 0 && (t = 0),
                  e > this._order.length - 1 && (e = this._order.length - 1);
                for (
                  var i = this._order.slice(t, e), o = [], r = t;
                  r <= e;
                  r++
                )
                  o.push(n.call(this, this._order[r], r, i));
                return o;
              }),
              (t.prototype.reduce = function (t, e) {
                for (var n = 0; n < this._order.length; n++)
                  e = t.call(this, e, this._order[n], n);
                return e;
              }),
              (t.prototype.serialize = function (t) {
                void 0 === t && (t = c.DataDriver.json);
                var e = this.map(function (t) {
                    var e = i({}, t);
                    return (
                      Object.keys(e).forEach(function (t) {
                        "$" === t[0] && delete e[t];
                      }),
                      e
                    );
                  }),
                  n = l.toDataDriver(t);
                if (n) return n.serialize(e);
              }),
              (t.prototype.getInitialData = function () {
                return this._initOrder;
              }),
              (t.prototype._add = function (t, e) {
                if (this.isDataLoaded()) {
                  var n = this._addCore(t, e);
                  return (
                    this._onChange("add", t.id, t),
                    this.events.fire(c.DataEvents.afterAdd, [t]),
                    n
                  );
                }
                l.dhxWarning("the method doesn't work with lazyLoad");
              }),
              (t.prototype._remove = function (t) {
                if (this.isDataLoaded()) {
                  var e = this._pull[t];
                  if (e) {
                    if (!this.events.fire(c.DataEvents.beforeRemove, [e]))
                      return;
                    this._removeCore(e.id), this._onChange("remove", t, e);
                  }
                  this.events.fire(c.DataEvents.afterRemove, [e]);
                } else l.dhxWarning("the method doesn't work with lazyLoad");
              }),
              (t.prototype._copy = function (e, n, o, r, s) {
                if (this.isDataLoaded()) {
                  if (!this.exists(e)) return null;
                  var a = u.uid();
                  return (
                    s && (n = -1 === n ? -1 : n + s),
                    o
                      ? o instanceof t || !r
                        ? o.exists(e)
                          ? (o.add(
                              i(i({}, l.copyWithoutInner(this.getItem(e))), {
                                id: a,
                              }),
                              n
                            ),
                            a)
                          : (o.add(l.copyWithoutInner(this.getItem(e)), n), e)
                        : void o.add(l.copyWithoutInner(this.getItem(e)), n)
                      : (this.add(
                          i(i({}, l.copyWithoutInner(this.getItem(e))), {
                            id: a,
                          }),
                          n
                        ),
                        a)
                  );
                }
                l.dhxWarning("the method doesn't work with lazyLoad");
              }),
              (t.prototype._move = function (t, e, n, i, o) {
                if (this.isDataLoaded()) {
                  if (
                    (o && (e = -1 === e ? -1 : e + o),
                    n && n !== this && this.exists(t))
                  ) {
                    var r = u.copy(this.getItem(t), !0);
                    return (
                      n.exists(t) && (r.id = u.uid()),
                      i && (r.parent = i),
                      n.add(r, e),
                      this.remove(t),
                      r.id
                    );
                  }
                  if (this.getIndex(t) === e) return null;
                  var s = this._order.splice(this.getIndex(t), 1)[0];
                  return (
                    -1 === e && (e = this._order.length),
                    this._order.splice(e, 0, s),
                    this.events.fire(c.DataEvents.change),
                    t
                  );
                }
                l.dhxWarning("the method doesn't work with lazyLoad");
              }),
              (t.prototype._removeAll = function () {
                (this._pull = {}),
                  (this._order = []),
                  (this._changes.order = []),
                  (this._initOrder = null);
              }),
              (t.prototype._addCore = function (t, e) {
                return (
                  this.config.init && (t = this.config.init(t)),
                  (t.id = t.id ? t.id.toString() : u.uid()),
                  this._pull[t.id] && l.dhxError("Item already exist"),
                  this._initOrder &&
                    this._initOrder.length &&
                    this._addToOrder(this._initOrder, t, e),
                  this._addToOrder(this._order, t, e),
                  t.id
                );
              }),
              (t.prototype._removeCore = function (t) {
                this.getIndex(t) >= 0 &&
                  ((this._order = this._order.filter(function (e) {
                    return e.id !== t;
                  })),
                  delete this._pull[t]),
                  this._initOrder &&
                    this._initOrder.length &&
                    (this._initOrder = this._initOrder.filter(function (e) {
                      return e.id !== t;
                    }));
              }),
              (t.prototype._parse_data = function (t) {
                var e = this._order.length;
                this.config.prep && (t = this.config.prep(t));
                for (var n = 0, i = t; n < i.length; n++) {
                  var o = i[n];
                  this.config.init && (o = this.config.init(o)),
                    (o.id = o.id || 0 === o.id ? o.id : u.uid()),
                    (this._pull[o.id] = o),
                    (this._order[e++] = o);
                }
              }),
              (t.prototype._approximate = function (t, e, n) {
                for (
                  var i = t.length,
                    o = e.length,
                    r = Math.floor(i / n),
                    s = Array(Math.ceil(i / r)),
                    a = 0,
                    l = 0;
                  l < i;
                  l += r
                ) {
                  for (
                    var c = u.copy(t[l]), d = Math.min(i, l + r), h = 0;
                    h < o;
                    h++
                  ) {
                    for (var f = 0, p = l; p < d; p++) f += t[p][e[h]];
                    c[e[h]] = f / (d - l);
                  }
                  s[a++] = c;
                }
                return s;
              }),
              (t.prototype._onChange = function (t, e, n) {
                for (var o = 0, r = this._changes.order; o < r.length; o++) {
                  var s = r[o];
                  if (s.id === e && !s.saving)
                    return (
                      s.error && (s.error = !1),
                      (s = i(i({}, s), { obj: n, status: t })),
                      void this.events.fire(c.DataEvents.change, [e, t, n])
                    );
                }
                this._changes.order.push({
                  id: e,
                  status: t,
                  obj: i({}, n),
                  saving: !1,
                }),
                  this.events.fire(c.DataEvents.change, [e, t, n]);
              }),
              (t.prototype._addToOrder = function (t, e, n) {
                n >= 0 && t[n]
                  ? ((this._pull[e.id] = e), t.splice(n, 0, e))
                  : ((this._pull[e.id] = e), t.push(e));
              }),
              (t.prototype._applyFilters = function () {
                var t = this;
                if (this._filters && Object.keys(this._filters).length) {
                  var e = this._order.filter(function (e) {
                    return Object.keys(t._filters).every(function (n) {
                      return e[n]
                        ? t._filters[n].compare(e[n], t._filters[n].match, e)
                        : t._filters[n].compare(e);
                    });
                  });
                  this._initOrder || (this._initOrder = this._order),
                    (this._order = e);
                }
              }),
              t
            );
          })();
        e.DataCollection = d;
      },
      function (t, e, n) {
        "use strict";
        var i =
          (this && this.__assign) ||
          function () {
            return (i =
              Object.assign ||
              function (t) {
                for (var e, n = 1, i = arguments.length; n < i; n++)
                  for (var o in (e = arguments[n]))
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t;
              }).apply(this, arguments);
          };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(34),
          r = n(35),
          s = n(66);
        (e.dataDrivers = { json: o.JsonDriver, csv: r.CsvDriver }),
          (e.dataDriversPro = i(i({}, e.dataDrivers), { xml: s.XMLDriver }));
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = (function () {
          function t() {}
          return (
            (t.prototype.toJsonArray = function (t) {
              return this.getRows(t);
            }),
            (t.prototype.serialize = function (t) {
              return t;
            }),
            (t.prototype.getFields = function (t) {
              return t;
            }),
            (t.prototype.getRows = function (t) {
              return "string" == typeof t ? JSON.parse(t) : t;
            }),
            t
          );
        })();
        e.JsonDriver = i;
      },
      function (t, e, n) {
        "use strict";
        var i =
          (this && this.__assign) ||
          function () {
            return (i =
              Object.assign ||
              function (t) {
                for (var e, n = 1, i = arguments.length; n < i; n++)
                  for (var o in (e = arguments[n]))
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t;
              }).apply(this, arguments);
          };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = (function () {
          function t(t) {
            (this.config = i(
              i(
                {},
                {
                  skipHeader: 0,
                  nameByHeader: !1,
                  rowDelimiter: "\n",
                  columnDelimiter: ",",
                }
              ),
              t
            )),
              this.config.nameByHeader && (this.config.skipHeader = 1);
          }
          return (
            (t.prototype.getFields = function (t, e) {
              for (
                var n = t.trim().split(this.config.columnDelimiter),
                  i = {},
                  o = 0;
                o < n.length;
                o++
              )
                i[e ? e[o] : o + 1] = n[o];
              return i;
            }),
            (t.prototype.getRows = function (t) {
              return t.trim().split(this.config.rowDelimiter);
            }),
            (t.prototype.toJsonArray = function (t) {
              var e = this,
                n = this.getRows(t),
                i = this.config.names;
              if (this.config.skipHeader) {
                var o = n.splice(0, this.config.skipHeader);
                this.config.nameByHeader &&
                  (i = o[0].trim().split(this.config.columnDelimiter));
              }
              return n.map(function (t) {
                return e.getFields(t, i);
              });
            }),
            (t.prototype.serialize = function (t, e) {
              var n = t[0]
                  ? Object.keys(t[0])
                      .filter(function (t) {
                        return "$" !== t[0];
                      })
                      .join(this.config.columnDelimiter)
                  : "",
                i = this._serialize(t);
              return e ? i : n + i;
            }),
            (t.prototype._serialize = function (t) {
              var e = this;
              return t.reduce(function (t, n) {
                var i = Object.keys(n).reduce(function (t, i, o) {
                  return "$" === i[0] || "items" === i
                    ? t
                    : "" +
                        t +
                        n[i] +
                        (o === n.length - 1 ? "" : e.config.columnDelimiter);
                }, "");
                return n.items
                  ? t + "\n" + i + e._serialize(n.items)
                  : "" + t + e.config.rowDelimiter + i;
              }, "");
            }),
            t
          );
        })();
        e.CsvDriver = o;
      },
      function (t, e, n) {
        "use strict";
        function i(t) {
          for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
        }
        Object.defineProperty(e, "__esModule", { value: !0 }),
          i(n(87)),
          i(n(37));
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (function (t) {
            (t.beforeHide = "beforeHide"),
              (t.beforeShow = "beforeShow"),
              (t.afterHide = "afterHide"),
              (t.afterShow = "afterShow"),
              (t.click = "click");
          })(e.PopupEvents || (e.PopupEvents = {}));
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i,
          o = n(2);
        !(function (t) {
          (t[(t.backspace = 8)] = "backspace"),
            (t[(t.enter = 13)] = "enter"),
            (t[(t.tab = 9)] = "tab"),
            (t[(t.esc = 27)] = "esc"),
            (t[(t.space = 32)] = "space"),
            (t[(t.left = 37)] = "left"),
            (t[(t.up = 38)] = "up"),
            (t[(t.right = 39)] = "right"),
            (t[(t.down = 40)] = "down"),
            (t[(t.insert = 45)] = "insert"),
            (t[(t.del = 46)] = "del"),
            (t[(t.ctrl = 17)] = "ctrl"),
            (t[(t.a = 65)] = "a"),
            (t[(t.b = 66)] = "b"),
            (t[(t.c = 67)] = "c"),
            (t[(t.s = 83)] = "s"),
            (t[(t.u = 85)] = "u"),
            (t[(t.v = 86)] = "v"),
            (t[(t.x = 88)] = "x"),
            (t[(t.y = 89)] = "y"),
            (t[(t.z = 90)] = "z"),
            (t[(t.i = 73)] = "i");
        })((i = e.Key || (e.Key = {}))),
          (e.keyToOperation = function (t) {
            if (t.shiftKey && t.which === i.enter)
              return t.preventDefault(), { action: o.Action.add, data: "\n" };
            switch (t.which) {
              case i.insert:
                return void t.preventDefault();
              case i.left:
              case i.right:
              case i.down:
              case i.up:
                return;
              case i.backspace:
                return (
                  t.preventDefault(), { action: o.Action.remove, data: !0 }
                );
              case i.del:
                return (
                  t.preventDefault(), { action: o.Action.remove, data: !1 }
                );
              case i.space:
                return t.preventDefault(), { action: o.Action.add, data: " " };
              case i.enter:
                return (
                  t.preventDefault(),
                  { action: o.Action.add, data: { newBlock: !0 } }
                );
            }
            if (t.ctrlKey || t.metaKey)
              return (function (t) {
                switch (t.which) {
                  case i.z:
                    return {
                      action: t.shiftKey ? o.Action.redo : o.Action.undo,
                    };
                  case i.y:
                    return { action: o.Action.redo };
                  case i.a:
                    return { action: o.Action.selectAll };
                  case i.v:
                  case i.x:
                  case i.c:
                    return;
                  case i.u:
                  case i.i:
                  case i.b:
                    return void t.preventDefault();
                }
              })(t);
            var e = t.key;
            return e.length > 1 || t.altKey
              ? void 0
              : (t.preventDefault(), { action: o.Action.add, data: e });
          });
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(0),
          o = n(15);
        var r = {
          words: function (t) {
            return t.split(/[\n !.?,:;]+/g).filter(function (t) {
              return t.length > 0;
            }).length;
          },
          chars: function (t) {
            return t.replace(/[\n]/g, "").length;
          },
          charsExlSpace: function (t) {
            return t.replace(/[\n ]/g, "").length;
          },
        };
        (e.getStats = function (t, e) {
          if (e) {
            for (var n = {}, i = 0, o = e; i < o.length; i++) {
              var s = o[i],
                a = s.cb,
                l = s.name;
              "function" == typeof a
                ? (n[l] = a(t))
                : !a && l in r
                ? (n[l] = r[l](t))
                : "string" == typeof a && a in r && (n[l] = r[a](t));
            }
            return n;
          }
          return {
            chars: r.chars(t),
            words: r.words(t),
            charsExlSpace: r.charsExlSpace(t),
          };
        }),
          (e.statsRenderer = function (t, e) {
            return (
              void 0 === e &&
                (e = [
                  { name: "chars" },
                  { name: "charsExlSpace" },
                  { name: "words" },
                ]),
              function () {
                return i.el(
                  "ul.dhx_richtext-stat",
                  e.map(function (e) {
                    return i.el("li.dhx_richtext-stat__item", [
                      i.el(
                        "span.dhx_richtext-stat__name",
                        o.default[e.name] || e.name
                      ),
                      i.el("span.dhx_richtext-stat__value", t[e.name]),
                    ]);
                  })
                );
              }
            );
          });
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (function (t) {
            (t.change = "change"),
              (t.apply = "apply"),
              (t.cancelClick = "cancelClick"),
              (t.modeChange = "modeChange"),
              (t.selectClick = "selectClick"),
              (t.colorChange = "colorChange"),
              (t.viewChange = "viewChange");
          })(e.ColorpickerEvents || (e.ColorpickerEvents = {})),
          (function (t) {
            (t.palette = "palette"), (t.picker = "picker");
          })(e.ViewsMode || (e.ViewsMode = {}));
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i,
          o = n(7),
          r = n(4),
          s = n(23);
        !(function (t) {
          (t[(t.invalidNode = 0)] = "invalidNode"),
            (t[(t.offsetStart = 1)] = "offsetStart"),
            (t[(t.offsetEnd = 2)] = "offsetEnd"),
            (t[(t.complete = 3)] = "complete");
        })((i = e.SplitResult || (e.SplitResult = {})));
        var a = (function () {
          function t(t, e) {
            (this.style = e || o.emptyStyle),
              t && 0 !== t.length ? (this.textNodes = t) : this.clear();
          }
          return (
            (t.prototype.clear = function () {
              this.textNodes = [new s.TextNode("", o.emptyStyle)];
            }),
            (t.prototype.isEmpty = function () {
              return 1 === this.textNodes.length && this.textNodes[0].isEmpty();
            }),
            (t.prototype.splitTextNode = function (t, e) {
              var n = this.textNodes[t];
              if (!n) return i.invalidNode;
              if (0 === e) return i.offsetStart;
              if (e >= n.text.length) return i.offsetEnd;
              var o = n.text.slice(0, e),
                r = n.text.slice(e),
                a = new s.TextNode(r, n.style);
              return (
                (n.text = o), this.textNodes.splice(t + 1, 0, a), i.complete
              );
            }),
            (t.prototype.removeNodes = function (t, e) {
              return e
                ? 0 === t || ((this.textNodes = this.textNodes.slice(0, t)), !1)
                : t === this.textNodes.length - 1 ||
                    ((this.textNodes = this.textNodes.slice(t + 1)), !1);
            }),
            (t.prototype.offsetToNodePosition = function (t) {
              if (0 === t) return { textIndex: 0, offset: 0 };
              for (var e = this.textNodes, n = 0; n < e.length; n++) {
                var i = e[n].text.length;
                if (t <= i) return { textIndex: n, offset: t };
                t -= i;
              }
            }),
            (t.prototype.nodePositionToOffset = function (t, e) {
              for (var n = 0; n < t; n++) e += this.textNodes[n].text.length;
              return e;
            }),
            (t.prototype.getBlockEnd = function () {
              return {
                textIndex: this.textNodes.length - 1,
                offset: this.textNodes[this.textNodes.length - 1].text.length,
              };
            }),
            (t.prototype.balance = function () {
              for (var t = this.textNodes, e = t.length, n = 1; n < t.length; )
                r.isEqual(t[n - 1].style, t[n].style)
                  ? ((t[n - 1].text += t[n].text), t.splice(n, 1))
                  : n++;
              return e !== t.length;
            }),
            t
          );
        })();
        e.Block = a;
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(2);
        function o(t, e) {
          void 0 === e && (e = !1);
          var n = t.style,
            o = t.text,
            l = [];
          if (
            (n[i.Modifier.underline] && l.push("u"),
            n[i.Modifier.strike] && l.push("s"),
            n[i.Modifier.bold] && l.push("strong"),
            n[i.Modifier.italic] && l.push("i"),
            e)
          )
            return { tags: l, inline: r(n, !0), text: a(o) };
          var c = r(n);
          return c && 0 === l.length && l.push("span"), s(l, c, a(o));
        }
        function r(t, e) {
          void 0 === e && (e = !1);
          var n = "";
          for (var o in t)
            switch (o) {
              case i.Modifier.background:
                n += "background: " + t[o] + ";";
                break;
              case i.Modifier.color:
                n += "color: " + t[o] + ";";
                break;
              case i.Modifier.fontFamily:
                n += "font-family: " + t[o] + ";";
                break;
              case i.Modifier.fontSize:
                n += "font-size: " + t[o] + ";";
            }
          return e ? n : n ? ' style="' + n + '"' : "";
        }
        function s(t, e, n) {
          return (
            0 === t.length && "" === n.trim() && t.push("span"),
            t.reduce(function (t, n, i) {
              return t + (0 === i ? "<" + n + e + ">" : "<" + n + ">");
            }, "") +
              n +
              t.reduceRight(function (t, e) {
                return t + "</" + e + ">";
              }, "")
          );
        }
        function a(t) {
          return t
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/\n/g, "<br>")
            .replace(/[ ]{2,}/g, function (t) {
              return (
                " " +
                (function (t, e) {
                  for (var n = ""; e--; ) n += t;
                  return n;
                })("&nbsp;", t.length - 1)
              );
            });
        }
        e.serializer = function (t) {
          return t.reduce(function (t, e) {
            return (
              t +
              (function (t) {
                var e = "",
                  n = t.style,
                  r = t.textNodes,
                  a = [];
                t.style[i.Modifier.blockquote] && a.push("blockquote"),
                  a.push(n[i.Modifier.style] || "p");
                var l = n[i.Modifier.align]
                  ? "text-align: " + n[i.Modifier.align] + ";"
                  : "";
                if (1 === r.length && !r[0].style[i.Modifier.link]) {
                  var c = o(r[0], !0);
                  a.push.apply(a, c.tags);
                  var u = c.inline;
                  return (
                    (u || l) && (e = ' style="' + u + l + '"'), s(a, e, c.text)
                  );
                }
                return (
                  l && (e = ' style="' + l + '"'),
                  s(
                    a,
                    e,
                    (function (t) {
                      for (
                        var e, n = "", i = "", r = "", a = 0, l = t;
                        a < l.length;
                        a++
                      ) {
                        var c = l[a];
                        c.style.link
                          ? e === c.style.link
                            ? ((i += o(c)), (r += c.text.replace(/\"/g, "'")))
                            : ((i = o(c)), (r = c.text.replace(/\"/g, "'")))
                          : (e &&
                              (n += s(
                                ["a"],
                                ' href="' + e + '" title="' + r + '"',
                                i
                              )),
                            (n += o(c))),
                          (e = c.style.link);
                      }
                      return (
                        e &&
                          (n += s(
                            ["a"],
                            ' href="' + e + '" title="' + r + '"',
                            i
                          )),
                        n
                      );
                    })(r)
                  )
                );
              })(e)
            );
          }, "");
        };
      },
      function (t, e, n) {
        n(44), n(52), n(53), (t.exports = n(54));
      },
      function (t, e, n) {
        var i = [
          "w6kAw5l9wopS",
          "wpDDpCJjw5I=",
          "O8KrPXjDqw==",
          "wqxjwrE+woA=",
          "wqrCt0HDtMK/",
          "MjLCicKgcQ==",
          "EEshC8KB",
          "wrvDuljCsD7DpsOs",
          "w7rCv8Kjw4DChA==",
          "wpJcwr0Wwpw=",
          "B8OIZCE1",
          "XxXDksOlEA==",
          "wq7DmAo=",
          "w4ZmwoXDmyI=",
          "UwPCnVAA",
          "wrDCikTDjsKe",
          "w77DgmYhFw==",
          "wpnDr2fCkGA=",
          "YcOscVfCqg==",
          "bcKJw7QLwqY=",
          "wrgVC8KTWg==",
          "CMKaFHLDhlc=",
          "w7fDh8Kvw7DCnw==",
          "fMOofHfCnw==",
          "EhPCnMKOQQ==",
          "ewUpwq8U",
          "w5jCqjk=",
          "wqgoF8KJfA==",
          "w6BnSA1Y",
          "w7nDucKdwq7DsA==",
          "TBDCkQ/DkQ==",
          "FMKHaFHCpg==",
          "woXChcKGw6PCsQ==",
          "IcKLbkHCgQ==",
          "fhLDpMO+NA==",
          "wrLCqR7CtcKU",
          "MBIPVi4=",
          "wrLDlRNkw6k/wpQ=",
          "GCTCrcKbw5U=",
          "AjTCpMKJw6A=",
          "MMOYXTwXw6Nr",
          "ccKZwqgZAw==",
          "MA3Cl8KNQA==",
          "w5Igw6dowqY=",
          "BcKXBsO2w5o=",
          "b8KAw70NwroPwotBwqEbwo3DpHUO",
          "wqVXwpYuwpsBwpclw6DDsg==",
          "LMKQOHXDvw==",
          "BcOpMVsP",
          "w6PCgQwmIA==",
          "QA7CmQLDhA==",
          "w6QFw7XCqcK+",
          "OsKHb3nCig==",
          "PCnChMK7w60=",
          "wpLDu2HCuxY=",
          "OsOSPWMf",
          "w4jDuMKyw4nCnQ==",
          "w5jCuSbCnhs=",
          "w5Q5csK8Dg==",
          "w5nCnDYZJg==",
          "wq3CpsKMw4vCuA==",
          "L8K3OcKCw7bCpsO3w5TDgw==",
          "w6jDiMKxw6HCqw==",
          "w5bCuSfCmWrCncKFVWrDugpAL3DDtsKtEMO6w6zDkcKe",
          "wqfDoXzCt04=",
          "A8OOHncU",
          "WB7Cth3DrA==",
          "wofDnxXCmHw=",
          "wrjDmCvCj3k=",
          "W8Kxw7oDwpA=",
          "HsKHfkTCuw==",
          "woTDiVPCsxU=",
          "IMKXelDCng==",
          "w4fCtsOkw49R",
          "wobDuEXChQc=",
          "ODfCtcKkw70=",
          "Uw7Co1VsKWTCjE4yw5l6woPDqSvDuMK+Y8KrwpjCsQkaP3PCtD4QwrUDCsOwWRHDncKsVcO3wrTDicO6wqPCrlZvZw==",
          "w6VzaRxI",
          "IDTDl2rCkMKOVcOAw554Y1Z0w7NEUT3ClzFTw6Utw5bCl8O8wrnDoSRWLcOSQsOKDG9bIBkAwqYkIcOzwrnDu2fDtnovesOMS8K/Og0kVyE+w4Z+wpB9w7wVFMKwW1prEsOHFsKgHCvCqsKbPcOdwotcJcKDDsOgb8KSw4rDlU5zw6XCj8KbFxtYw6bDvsOrdsKWw6zDoMOhwobCsMKNw5PDrsK2KhJ9f8OXw5sIMMOiO1low6UKw6bCsnEgPsOoHcOmFsObOMK5wonCiRN0w7oPaSQQDsKhZsOYw4PClcK+w7hsJMKnw4XChcOXw7/Cm1Y=",
          "wojDk1nCiWE=",
          "w5jCo8Ksw6PCgA==",
          "eiA2w7csw6nCm1XDgMKxwpbDkcKgwoYvasO1w6vDvcKKw6bDssOvLCbCtinDm0LDijhWJwzCh1zCosOyw6JOXjAvw4Y8ZcO5wqrDi8KUw43Dt1nDt8KUdUA5w5gOwp4dwo8Jw6zCjGsJwrHCksKJwpLDiMKUw6LCn8OERsKnwqnCvG3DusOhw6VVZMOTLipywp3DvcOnwowOw6bCoj/DgVnDhcOzwpQrwpk+wrTCh8OSA8KVwrnDjDvCoXcvPCELwpTDlGtLw6UYw47Di3UxJ8OJAHBCScKFw4g3Bx4Ewo3CjwQ3wrjCnnp6BETCgg==",
          "QBQLwokx",
          "K8KRw7oWwrMPwq8Ow6k0worDumAZYwfDqUXCosO/w5fCpQzCgcOlUV/DusKOJyRiw7vDnMOLw7Blw4/DiF5Qwo0QVQRRJ2hVSSLCmzohbAbDpiTDj8OOfwrCjRDDt17CiF8=",
          "YClBemQ=",
          "TDrDgDU=",
          "w4vDm8K9wopx",
          "JS5ww748",
          "GMK+PlXDgg==",
          "My9yw6E+w7nCmVXCmQ==",
          "CcK8AMO/w5w=",
          "ZMODWXjCng==",
          "w64Lw5ZPwqs=",
          "OjLDl1vCmQ==",
          "LzBTw5AZ",
          "w7/ChB4yBg==",
          "IMODwqYGwrU=",
          "w4o9R8KVHA==",
          "w6kvw6LCncKU",
          "cCpycGQ=",
          "w4nCsMOlfls=",
          "wobCsMKkw7zCmA==",
          "w55Two3DmjQ=",
          "CgnDhW/Cog==",
          "w7tUSQVW",
          "worDogrCv10=",
          "CBfCoMKrUg==",
          "wphZwoYlwrA=",
          "wrrDh28qw6E=",
          "acO3YV7ChA==",
          "QhbDj8Oz",
          "PUcCJMKd",
          "wqIVHsKKcA==",
          "DlfCvcKUfA==",
          "w77DkXYBAg==",
          "w7AGw6fCq8Ko",
          "D17CtcKAWg==",
          "OBnCsG7DrQ==",
          "wp3DgzBHw4E=",
          "Vw0Dwo4W",
          "QyFbb3E=",
          "w5TCvTDCqS4=",
          "UzbCmT/Dig==",
        ];
        !(function (t, e) {
          !(function (e) {
            for (; --e; ) t.push(t.shift());
          })(++e);
        })(i, 414);
        var o = function (t, e) {
          var n = i[(t -= 0)];
          if (void 0 === o.XOOzNf) {
            !(function () {
              var t = (function () {
                var t;
                try {
                  t = Function(
                    'return (function() {}.constructor("return this")( ));'
                  )();
                } catch (e) {
                  t = window;
                }
                return t;
              })();
              t.atob ||
                (t.atob = function (t) {
                  for (
                    var e,
                      n,
                      i = String(t).replace(/=+$/, ""),
                      o = 0,
                      r = 0,
                      s = "";
                    (n = i.charAt(r++));
                    ~n && ((e = o % 4 ? 64 * e + n : n), o++ % 4)
                      ? (s += String.fromCharCode(255 & (e >> ((-2 * o) & 6))))
                      : 0
                  )
                    n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
                      n
                    );
                  return s;
                });
            })();
            (o.UKkRWp = function (t, e) {
              for (
                var n,
                  i = [],
                  o = 0,
                  r = "",
                  s = "",
                  a = 0,
                  l = (t = atob(t)).length;
                a < l;
                a++
              )
                s += "%" + ("00" + t.charCodeAt(a).toString(16)).slice(-2);
              t = decodeURIComponent(s);
              for (var c = 0; c < 256; c++) i[c] = c;
              for (c = 0; c < 256; c++)
                (o = (o + i[c] + e.charCodeAt(c % e.length)) % 256),
                  (n = i[c]),
                  (i[c] = i[o]),
                  (i[o] = n);
              (c = 0), (o = 0);
              for (var u = 0; u < t.length; u++)
                (o = (o + i[(c = (c + 1) % 256)]) % 256),
                  (n = i[c]),
                  (i[c] = i[o]),
                  (i[o] = n),
                  (r += String.fromCharCode(
                    t.charCodeAt(u) ^ i[(i[c] + i[o]) % 256]
                  ));
              return r;
            }),
              (o.KYHDKu = {}),
              (o.XOOzNf = !0);
          }
          var r = o.KYHDKu[t];
          return (
            void 0 === r
              ? (void 0 === o.MalGOK && (o.MalGOK = !0),
                (n = o.UKkRWp(n, e)),
                (o.KYHDKu[t] = n))
              : (n = r),
            n
          );
        };
        Object[o("0x0", "AX@f")](e, o("0x1", "qyhi"), { value: !0 });
        var r = n(11);
        n(27),
          n(28),
          (function () {
            var t = {};
            (t[o("0x2", "P6rs")] = function (t, e) {
              return t !== e;
            }),
              (t[o("0x3", "grpW")] = o("0x4", "vC$c")),
              (t[o("0x5", "hSN!")] = function (t, e) {
                return t > e;
              }),
              (t[o("0x6", "n9yl")] = function (t, e) {
                return t - e;
              }),
              (t[o("0x7", "2RhR")] = function (t, e) {
                return t > e;
              }),
              (t[o("0x8", "^vte")] = o("0x9", "I!Tf")),
              (t[o("0xa", "grpW")] = o("0xb", "Wy9(")),
              (t[o("0xc", "jMD9")] = function (t, e) {
                return t + e;
              }),
              (t[o("0xd", "2uPm")] = function (t, e) {
                return t * e;
              }),
              (t[o("0xe", "vC$c")] = function (t, e) {
                return t + e;
              }),
              (t[o("0xf", "WNDg")] = o("0x10", "1Qp(")),
              (t[o("0x11", "Wy9(")] = o("0x12", "jMD9")),
              (t[o("0x13", "d8zA")] = o("0x14", "grpW")),
              (t[o("0x15", "hSN!")] = o("0x16", "np1F")),
              (t[o("0x17", "np1F")] = function (t) {
                return t();
              }),
              (t[o("0x18", "AX@f")] = o("0x19", "2RhR")),
              (t[o("0x1a", "I!Tf")] = o("0x1b", "2RhR")),
              (t[o("0x1c", "toL0")] = function (t, e) {
                return t * e;
              }),
              (t[o("0x1d", "I!Tf")] = function (t) {
                return t();
              }),
              (t[o("0x1e", "^vte")] = o("0x1f", "p#y!")),
              (t[o("0x20", "4oWA")] = o("0x21", "oFIh")),
              (t[o("0x22", "d8zA")] = function (t, e) {
                return t + e;
              }),
              (t[o("0x23", "(FC@")] = o("0x24", "TU]O")),
              (t[o("0x25", "9D@#")] = o("0x26", "AX@f")),
              (t[o("0x27", "B1Ya")] = o("0x28", "oFIh")),
              (t[o("0x29", "DuU6")] = function (t, e) {
                return t * e;
              }),
              (t[o("0x2a", "TU]O")] = function (t, e) {
                return t === e;
              }),
              (t[o("0x2b", "P6rs")] = o("0x2c", "TU]O")),
              (t[o("0x2d", "1Qp(")] = o("0x2e", "2Rgh")),
              (t[o("0x2f", "kIMk")] = o("0x30", "oFIh")),
              (t[o("0x31", "TU]O")] = function (t, e, n) {
                return t(e, n);
              }),
              (t[o("0x32", "vC$c")] = function (t, e, n) {
                return t(e, n);
              }),
              (t[o("0x33", "UIFn")] = function (t, e, n) {
                return t(e, n);
              }),
              t[o("0x34", "2uPm")](
                setTimeout,
                function () {
                  var e = {};
                  (e[o("0x35", "n9yl")] = function (e, n) {
                    return t.oYxZc(e, n);
                  }),
                    (e[o("0x36", "B1Ya")] = function (e, n) {
                      return t.cLLWM(e, n);
                    }),
                    (e[o("0x37", "J^lr")] = function (e, n) {
                      return t.oYxZc(e, n);
                    }),
                    (e[o("0x38", "WNDg")] = function (e, n) {
                      return t.wltxr(e, n);
                    }),
                    (e[o("0x39", "rrC9")] = function (e) {
                      return t.PgnFX(e);
                    }),
                    (e[o("0x3a", "oFIh")] = t.jFoYb),
                    (e[o("0x3b", "4oWA")] = t.pVfKW);
                  var n = [
                      t[o("0x3c", "np1F")],
                      t[o("0x3d", "d#mM")],
                      t[o("0x3e", "qyhi")](
                        t[o("0x3f", "]VJe")],
                        t[o("0x40", "2Rgh")]
                      ),
                    ][o("0x41", "^3@8")](t[o("0x42", "DrwG")]),
                    i = t[o("0x43", "5CPB")](6e4, 60),
                    s = t[o("0x44", "0[IQ")](i, 24),
                    a = t[o("0x45", "PoZe")](s, 30);
                  if (
                    t[o("0x46", "n9yl")](
                      typeof 1736750740000,
                      t[o("0x47", "0[IQ")]
                    )
                  )
                    return t[o("0x48", "FEQ5")](
                      t[o("0x49", "9L!6")],
                      t[o("0x4a", "9D@#")]
                    )
                      ? void 0
                      : e[o("0x4b", "B1Ya")](
                          Math[o("0x4c", "jMD9")](
                            e[o("0x4d", "hSN!")](
                              Math[o("0x4e", "kIMk")](),
                              e[o("0x4f", "9L!6")](
                                e[o("0x50", "P6rs")](max, min),
                                1
                              )
                            )
                          ),
                          min
                        );
                  var l = function () {
                    if (
                      !t[o("0x51", "qyhi")](
                        t[o("0x52", "J^MG")],
                        t[o("0x53", "d#mM")]
                      )
                    )
                      return t[o("0x58", "gl6y")](
                        t[o("0x59", "^3@8")](
                          Date[o("0x5a", "np1F")](),
                          1736750740000
                        ),
                        a
                      );
                    e[o("0x54", "DrwG")](l) &&
                      r[o("0x55", "I!Tf")]({
                        text: n,
                        icon: e[o("0x56", "(FC@")],
                        css: e[o("0x57", "qyhi")],
                      });
                  };
                  t[o("0x69", "5CPB")](
                    setInterval,
                    function () {
                      var e = {};
                      (e[o("0x6a", "4oWA")] = t.jFoYb),
                        (e[o("0x6b", "kTet")] = t.pVfKW),
                        t[o("0x6c", "hSN!")](
                          t[o("0x6d", "2RhR")],
                          t[o("0x6e", "WNDg")]
                        ) &&
                          t[o("0x6f", "2RhR")](l) &&
                          (t[o("0x70", "^3@8")](
                            t[o("0x71", "EQN]")],
                            t[o("0x72", "Yo&y")]
                          )
                            ? r[o("0x73", "9L!6")]({
                                text: n,
                                icon: t[o("0x74", "^vte")],
                                css: t[o("0x75", "^vte")],
                              })
                            : r[o("0x76", "gl6y")]({
                                text: n,
                                icon: e[o("0x77", "y4e!")],
                                css: e[o("0x78", "d#mM")],
                              }));
                    },
                    t[o("0x79", "kIMk")](
                      function (e, n) {
                        var i = {};
                        return (
                          (i[o("0x5b", "rrC9")] = function (e, n) {
                            return t.ccWne(e, n);
                          }),
                          (i[o("0x5c", "p#y!")] = function (e, n) {
                            return t.wltxr(e, n);
                          }),
                          t[o("0x5d", "J^MG")](
                            t[o("0x5e", "PoZe")],
                            t[o("0x5f", "d8zA")]
                          )
                            ? t[o("0x60", "2Rgh")](
                                Math[o("0x61", "AX@f")](
                                  t[o("0x62", "5CPB")](
                                    Math[o("0x63", "P6rs")](),
                                    t[o("0x64", "Wy9(")](
                                      t[o("0x65", "2Rgh")](n, e),
                                      1
                                    )
                                  )
                                ),
                                e
                              )
                            : i[o("0x66", "d#mM")](
                                i[o("0x67", "9D@#")](
                                  Date[o("0x68", "vC$c")](),
                                  1736750740000
                                ),
                                a
                              )
                        );
                      },
                      6e4,
                      t[o("0x7a", "1Qp(")](2, 6e4)
                    )
                  );
                },
                1
              );
          })();
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(1),
          o = n(18),
          r = new WeakMap(),
          s = new Map();
        function a(t, e) {
          e && clearTimeout(r.get(t));
          var n = t.parentNode,
            i = n.getAttribute("data-position"),
            o = n.parentNode,
            a = s.get(o);
          if (a) {
            var l = a[i];
            if (l) {
              var c = l.stack,
                u = c.indexOf(t);
              return -1 !== u
                ? (n.removeChild(t),
                  c.splice(u, 1),
                  void (0 === c.length && o.removeChild(n)))
                : void 0;
            }
          }
        }
        function l(t, e) {
          var n = document.createElement("div");
          return (
            n.setAttribute("data-position", e),
            (n.className =
              "dhx_message-container dhx_message-container--" +
              e +
              (t === document.body ? " dhx_message-container--in-body" : "")),
            n
          );
        }
        e.message = function (t) {
          var e;
          "string" == typeof t && (t = { text: t }),
            (t.position = t.position || o.MessageContainerPosition.topRight);
          var n = document.createElement("div");
          (n.className = "dhx_widget dhx_message " + (t.css || "")),
            t.html
              ? (n.innerHTML = t.html)
              : (n.innerHTML =
                  '<span class="dhx_message__text">' +
                  t.text +
                  "</span>\n\t\t" +
                  (t.icon
                    ? '<span class="dhx_message__icon dxi ' +
                      t.icon +
                      '"></span>'
                    : ""));
          var c = t.node ? i.toNode(t.node) : document.body;
          "static" === getComputedStyle(c).position &&
            (c.style.position = "relative");
          var u = s.get(c);
          u
            ? u[t.position] ||
              (u[t.position] = { stack: [], container: l(c, t.position) })
            : s.set(
                c,
                (((e = {})[t.position] = {
                  stack: [],
                  container: l(c, t.position),
                }),
                e)
              );
          var d = s.get(c)[t.position],
            h = d.stack,
            f = d.container;
          if (
            (0 === h.length && c.appendChild(f),
            h.push(n),
            f.appendChild(n),
            t.expire)
          ) {
            var p = setTimeout(function () {
              return a(n);
            }, t.expire);
            r.set(n, p);
          }
          n.onclick = function () {
            return a(n, !0);
          };
        };
      },
      function (t, e) {
        if (Element && !Element.prototype.matches) {
          var n = Element.prototype;
          n.matches =
            n.matchesSelector ||
            n.mozMatchesSelector ||
            n.msMatchesSelector ||
            n.oMatchesSelector ||
            n.webkitMatchesSelector;
        }
      },
      function (t, e, n) {
        "use strict";
        (function (t) {
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = n(24),
            o = n(25);
          e.alert = function (e) {
            var n = e.buttons && e.buttons[0] ? e.buttons[0] : i.default.apply,
              r = o.blockScreen(e.blockerCss);
            return new t(function (t) {
              var i = document.createElement("div");
              (i.className = "dhx_widget dhx_alert " + (e.css || "")),
                (i.innerHTML =
                  "\n\t\t\t" +
                  (e.header
                    ? '<div class="dhx_alert__header"> ' + e.header + " </div>"
                    : "") +
                  "\n\t\t\t" +
                  (e.text
                    ? '<div class="dhx_alert__content">' + e.text + "</div>"
                    : "") +
                  '\n\t\t\t<div class="dhx_alert__footer ' +
                  (e.buttonsAlignment
                    ? "dhx_alert__footer--" + e.buttonsAlignment
                    : "") +
                  '">\n\t\t\t\t<button class="dhx_alert__apply-button dhx_button dhx_button--view_flat dhx_button--color_primary dhx_button--size_medium">' +
                  n +
                  "</button>\n\t\t\t</div>"),
                document.body.appendChild(i),
                i.querySelector(".dhx_alert__apply-button").focus(),
                i
                  .querySelector("button")
                  .addEventListener("click", function () {
                    r(), document.body.removeChild(i), t(!0);
                  });
            });
          };
        }.call(this, n(5)));
      },
      function (t, e, n) {
        (function (t) {
          var i =
              (void 0 !== t && t) ||
              ("undefined" != typeof self && self) ||
              window,
            o = Function.prototype.apply;
          function r(t, e) {
            (this._id = t), (this._clearFn = e);
          }
          (e.setTimeout = function () {
            return new r(o.call(setTimeout, i, arguments), clearTimeout);
          }),
            (e.setInterval = function () {
              return new r(o.call(setInterval, i, arguments), clearInterval);
            }),
            (e.clearTimeout = e.clearInterval = function (t) {
              t && t.close();
            }),
            (r.prototype.unref = r.prototype.ref = function () {}),
            (r.prototype.close = function () {
              this._clearFn.call(i, this._id);
            }),
            (e.enroll = function (t, e) {
              clearTimeout(t._idleTimeoutId), (t._idleTimeout = e);
            }),
            (e.unenroll = function (t) {
              clearTimeout(t._idleTimeoutId), (t._idleTimeout = -1);
            }),
            (e._unrefActive = e.active = function (t) {
              clearTimeout(t._idleTimeoutId);
              var e = t._idleTimeout;
              e >= 0 &&
                (t._idleTimeoutId = setTimeout(function () {
                  t._onTimeout && t._onTimeout();
                }, e));
            }),
            n(49),
            (e.setImmediate =
              ("undefined" != typeof self && self.setImmediate) ||
              (void 0 !== t && t.setImmediate) ||
              (this && this.setImmediate)),
            (e.clearImmediate =
              ("undefined" != typeof self && self.clearImmediate) ||
              (void 0 !== t && t.clearImmediate) ||
              (this && this.clearImmediate));
        }.call(this, n(16)));
      },
      function (t, e, n) {
        (function (t, e) {
          !(function (t, n) {
            "use strict";
            if (!t.setImmediate) {
              var i,
                o = 1,
                r = {},
                s = !1,
                a = t.document,
                l = Object.getPrototypeOf && Object.getPrototypeOf(t);
              (l = l && l.setTimeout ? l : t),
                "[object process]" === {}.toString.call(t.process)
                  ? (i = function (t) {
                      e.nextTick(function () {
                        u(t);
                      });
                    })
                  : (function () {
                      if (t.postMessage && !t.importScripts) {
                        var e = !0,
                          n = t.onmessage;
                        return (
                          (t.onmessage = function () {
                            e = !1;
                          }),
                          t.postMessage("", "*"),
                          (t.onmessage = n),
                          e
                        );
                      }
                    })()
                  ? (function () {
                      var e = "setImmediate$" + Math.random() + "$",
                        n = function (n) {
                          n.source === t &&
                            "string" == typeof n.data &&
                            0 === n.data.indexOf(e) &&
                            u(+n.data.slice(e.length));
                        };
                      t.addEventListener
                        ? t.addEventListener("message", n, !1)
                        : t.attachEvent("onmessage", n),
                        (i = function (n) {
                          t.postMessage(e + n, "*");
                        });
                    })()
                  : t.MessageChannel
                  ? (function () {
                      var t = new MessageChannel();
                      (t.port1.onmessage = function (t) {
                        u(t.data);
                      }),
                        (i = function (e) {
                          t.port2.postMessage(e);
                        });
                    })()
                  : a && "onreadystatechange" in a.createElement("script")
                  ? (function () {
                      var t = a.documentElement;
                      i = function (e) {
                        var n = a.createElement("script");
                        (n.onreadystatechange = function () {
                          u(e),
                            (n.onreadystatechange = null),
                            t.removeChild(n),
                            (n = null);
                        }),
                          t.appendChild(n);
                      };
                    })()
                  : (i = function (t) {
                      setTimeout(u, 0, t);
                    }),
                (l.setImmediate = function (t) {
                  "function" != typeof t && (t = new Function("" + t));
                  for (
                    var e = new Array(arguments.length - 1), n = 0;
                    n < e.length;
                    n++
                  )
                    e[n] = arguments[n + 1];
                  var s = { callback: t, args: e };
                  return (r[o] = s), i(o), o++;
                }),
                (l.clearImmediate = c);
            }
            function c(t) {
              delete r[t];
            }
            function u(t) {
              if (s) setTimeout(u, 0, t);
              else {
                var e = r[t];
                if (e) {
                  s = !0;
                  try {
                    !(function (t) {
                      var e = t.callback,
                        i = t.args;
                      switch (i.length) {
                        case 0:
                          e();
                          break;
                        case 1:
                          e(i[0]);
                          break;
                        case 2:
                          e(i[0], i[1]);
                          break;
                        case 3:
                          e(i[0], i[1], i[2]);
                          break;
                        default:
                          e.apply(n, i);
                      }
                    })(e);
                  } finally {
                    c(t), (s = !1);
                  }
                }
              }
            }
          })("undefined" == typeof self ? (void 0 === t ? this : t) : self);
        }.call(this, n(16), n(50)));
      },
      function (t, e) {
        var n,
          i,
          o = (t.exports = {});
        function r() {
          throw new Error("setTimeout has not been defined");
        }
        function s() {
          throw new Error("clearTimeout has not been defined");
        }
        function a(t) {
          if (n === setTimeout) return setTimeout(t, 0);
          if ((n === r || !n) && setTimeout)
            return (n = setTimeout), setTimeout(t, 0);
          try {
            return n(t, 0);
          } catch (e) {
            try {
              return n.call(null, t, 0);
            } catch (e) {
              return n.call(this, t, 0);
            }
          }
        }
        !(function () {
          try {
            n = "function" == typeof setTimeout ? setTimeout : r;
          } catch (t) {
            n = r;
          }
          try {
            i = "function" == typeof clearTimeout ? clearTimeout : s;
          } catch (t) {
            i = s;
          }
        })();
        var l,
          c = [],
          u = !1,
          d = -1;
        function h() {
          u &&
            l &&
            ((u = !1),
            l.length ? (c = l.concat(c)) : (d = -1),
            c.length && f());
        }
        function f() {
          if (!u) {
            var t = a(h);
            u = !0;
            for (var e = c.length; e; ) {
              for (l = c, c = []; ++d < e; ) l && l[d].run();
              (d = -1), (e = c.length);
            }
            (l = null),
              (u = !1),
              (function (t) {
                if (i === clearTimeout) return clearTimeout(t);
                if ((i === s || !i) && clearTimeout)
                  return (i = clearTimeout), clearTimeout(t);
                try {
                  i(t);
                } catch (e) {
                  try {
                    return i.call(null, t);
                  } catch (e) {
                    return i.call(this, t);
                  }
                }
              })(t);
          }
        }
        function p(t, e) {
          (this.fun = t), (this.array = e);
        }
        function _() {}
        (o.nextTick = function (t) {
          var e = new Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
          c.push(new p(t, e)), 1 !== c.length || u || a(f);
        }),
          (p.prototype.run = function () {
            this.fun.apply(null, this.array);
          }),
          (o.title = "browser"),
          (o.browser = !0),
          (o.env = {}),
          (o.argv = []),
          (o.version = ""),
          (o.versions = {}),
          (o.on = _),
          (o.addListener = _),
          (o.once = _),
          (o.off = _),
          (o.removeListener = _),
          (o.removeAllListeners = _),
          (o.emit = _),
          (o.prependListener = _),
          (o.prependOnceListener = _),
          (o.listeners = function (t) {
            return [];
          }),
          (o.binding = function (t) {
            throw new Error("process.binding is not supported");
          }),
          (o.cwd = function () {
            return "/";
          }),
          (o.chdir = function (t) {
            throw new Error("process.chdir is not supported");
          }),
          (o.umask = function () {
            return 0;
          });
      },
      function (t, e, n) {
        "use strict";
        (function (t) {
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = n(24),
            o = n(25);
          e.confirm = function (e) {
            var n = e.buttons && e.buttons[0] ? e.buttons[0] : i.default.apply,
              r = e.buttons && e.buttons[1] ? e.buttons[1] : i.default.reject,
              s = o.blockScreen(e.blockerCss);
            return new t(function (t) {
              var i = document.createElement("div");
              (i.className =
                "dhx_widget dhx_alert dhx_alert--confirm" +
                (e.css ? " " + e.css : "")),
                (i.innerHTML =
                  "\n\t\t" +
                  (e.header
                    ? '<div class="dhx_alert__header"> ' + e.header + " </div>"
                    : "") +
                  "\n\t\t" +
                  (e.text
                    ? '<div class="dhx_alert__content">' + e.text + "</div>"
                    : "") +
                  '\n\t\t\t<div class="dhx_alert__footer ' +
                  (e.buttonsAlignment
                    ? "dhx_alert__footer--" + e.buttonsAlignment
                    : "") +
                  '">\n\t\t\t\t<button class="dhx_alert__confirm-aply dhx_button dhx_button--view_link dhx_button--color_primary dhx_button--size_medium">' +
                  n +
                  '</button>\n\t\t\t\t<button class="dhx_alert__confirm-reject dhx_button dhx_button--view_flat dhx_button--color_primary dhx_button--size_medium">' +
                  r +
                  "</button>\n\t\t\t</div>"),
                document.body.appendChild(i),
                i.querySelector(".dhx_alert__confirm-reject").focus();
              var o = function (e) {
                "BUTTON" === e.target.tagName &&
                  (function (e) {
                    s(),
                      i.removeEventListener("click", o),
                      document.body.removeChild(i),
                      t(e);
                  })(e.target.classList.contains("dhx_alert__confirm-aply"));
              };
              i.addEventListener("click", o);
            });
          };
        }.call(this, n(5)));
      },
      function (t, e, n) {
        var i = [
          "cmFuZG9t",
          "ZGVmaW5lUHJvcGVydHk=",
          "X19lc01vZHVsZQ==",
          "PHN2ZyBjbGFzcz0nZGh4X2FsZXJ0X19oZWFkZXItLWljb24nIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2JyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgdmVyc2lvbj0nMS4xJyB2aWV3Qm94PScwIDAgMjQgMjQnPjxwYXRoIGQ9J00xMSwxNUgxM1YxN0g=",
          "MTFWMTVNMTEsN0gxM1YxM0gxMVY3TTEyLDJDNi40NywyIDIsNi41IDIsMTJDMiwxNy41MiA2LjQ4LDIyIDEyLDIyQzE3LjUyLDIyIDIyLDE3LjUyIDIyLDEyQzIyLDYuNDggMTcuNTIsMiAxMiwyTTEyLDIwQzcuNTgsMjAgNCwxNi40MiA0LDEyQzQsNy41OCA3LjU4LDQgMTIsNEMxNi40Miw0IDIwLDcuNTggMjAsMTJDMjAs",
          "MTYuNDIgMTYuNDIsMjAgMTIsMjBaJz48L3BhdGg+PC9zdmc+PGRpdiBjbGFzcz0nZGh4X2FsZXJ0X19oZWFkZXItLXRleHQnPllvdXIgZXZhbHVhdGlvbiBwZXJpb2QgZm9yIERIVE1MWCBoYXMgZXhwaXJlZDwvZGl2Pg==",
          "UGxlYXNlIGNvbnRhY3QgdXMgYXQgPGEgc3R5bGU9J2NvbG9yOiAjMDI4OGQxO3RleHQtZGVjb3JhdGlvbjogdW5zZXQ7JyBocmVmPSdtYWlsdG86Y29udGFjdEBkaHRtbHguY29tP3N1YmplY3Q9REhUTUxYIExpY2Vuc2luZyAtIFRyaWFsIEVuZCcgdGFyZ2V0PSdfYmxhbmsnPg==",
          "Y29udGFjdEBkaHRtbHguY29tPC9hPiBvciB2aXNpdCA8YSBzdHlsZT0nY29sb3I6ICMwMjg4ZDE7dGV4dC1kZWNvcmF0aW9uOiB1bnNldDsnIGhyZWY9J2h0dHBzOi8vZGh0bWx4LmNvbS9kb2NzL3Byb2R1Y3RzL2xpY2Vuc2VzLnNodG1sP2V4cGFuZD0xJnV0bV9zb3VyY2U9dHJpYWwmdXRtX21lZGl1bT0=",
          "cG9wdXAmdXRtX2NhbXBhaWduPXNlY29uZF9tb250aCNzdWl0ZScgdGFyZ2V0PSdfYmxhbmsnPmRodG1seC5jb208L2E+IGluIG9yZGVyIHRvIG9idGFpbiBhIHByb3BlciBsaWNlbnNlLg==",
          "dW5kZWZpbmVk",
          "dW5EeXo=",
          "VE5Pc2U=",
          "bm93",
          "S29hcnI=",
          "YWxlcnQ=",
          "cmlnaHQ=",
          "Y2hlY2sgbGljZW5zaW5n",
          "ZGh4XzU0NzIzOTI2MV9hbGVydA==",
          "dGhlbg==",
          "b3Blbg==",
          "aHR0cHM6Ly9kaHRtbHguY29tL2RvY3MvcHJvZHVjdHMvbGljZW5zZXMuc2h0bWw/ZXhwYW5kPTEmdXRtX3NvdXJjZT10cmlhbCZ1dG1fbWVkaXVtPXBvcHVwJnV0bV9jYW1wYWlnbj1zZWNvbmRfbW9udGgjc3VpdGU=",
          "X2JsYW5r",
          "c1BHeEU=",
          "b0lqcXA=",
          "Zmxvb3I=",
        ];
        !(function (t, e) {
          !(function (e) {
            for (; --e; ) t.push(t.shift());
          })(++e);
        })(i, 151);
        var o = function (t, e) {
          var n = i[(t -= 0)];
          void 0 === o.gyAjFy &&
            (!(function () {
              var t;
              try {
                t = Function(
                  'return (function() {}.constructor("return this")( ));'
                )();
              } catch (e) {
                t = window;
              }
              t.atob ||
                (t.atob = function (t) {
                  for (
                    var e,
                      n,
                      i = String(t).replace(/=+$/, ""),
                      o = 0,
                      r = 0,
                      s = "";
                    (n = i.charAt(r++));
                    ~n && ((e = o % 4 ? 64 * e + n : n), o++ % 4)
                      ? (s += String.fromCharCode(255 & (e >> ((-2 * o) & 6))))
                      : 0
                  )
                    n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
                      n
                    );
                  return s;
                });
            })(),
            (o.PBiVXw = function (t) {
              for (var e = atob(t), n = [], i = 0, o = e.length; i < o; i++)
                n += "%" + ("00" + e.charCodeAt(i).toString(16)).slice(-2);
              return decodeURIComponent(n);
            }),
            (o.ZIlhnV = {}),
            (o.gyAjFy = !0));
          var r = o.ZIlhnV[t];
          return (
            void 0 === r ? ((n = o.PBiVXw(n)), (o.ZIlhnV[t] = n)) : (n = r), n
          );
        };
        Object[o("0x0")](e, o("0x1"), { value: !0 });
        var r = n(11);
        n(27),
          n(28),
          setTimeout(function () {
            var t = o("0x2") + o("0x3") + o("0x4"),
              e = o("0x5") + o("0x6") + o("0x7");
            if (typeof 1736750740000 === o("0x8"))
              return o("0x9") !== o("0xa")
                ? void 0
                : Date[o("0xb")]() - 1736750740000 > 5184e6;
            setInterval(
              function () {
                (function () {
                  if (o("0xc") == o("0xc"))
                    return Date[o("0xb")]() - 1736750740000 > 5184e6;
                  r[o("0xd")]({
                    header: t,
                    text: e,
                    buttonsAlignment: o("0xe"),
                    buttons: [o("0xf")],
                    css: o("0x10"),
                  })[o("0x11")](function () {
                    window[o("0x12")](o("0x13"), o("0x14"));
                  });
                })() &&
                  r[o("0xd")]({
                    header: t,
                    text: e,
                    buttonsAlignment: o("0xe"),
                    buttons: [o("0xf")],
                    css: o("0x10"),
                  })[o("0x11")](function () {
                    window[o("0x12")](o("0x13"), o("0x14"));
                  });
              },
              (function (t, e) {
                return (
                  o("0x15"),
                  o("0x16"),
                  Math[o("0x17")](Math[o("0x18")]() * (e - t + 1)) + t
                );
              })(6e4, 12e4)
            );
          }, 1);
      },
      function (t, e) {
        var n = [
          "w6rDlMKrS8Oz",
          "w50FHMKiBA==",
          "wo4sX2fDmw==",
          "wropLDPCjA==",
          "wrHDpMOFw6APMsKlwqhCe0PCssOgfcO3woh/wrVYw4TDjR7DlSXDpsKnDUU/RyQswq42bcKmwrEowr/DpTIXw4zCsTcAwp4=",
          "QcOcw5PDrEHDrRlzw5RdHsO8EMO/M8K1wr4cGcKMwpLDgMK7E8KZM8OoesKlw5Yhw4tJGMOBKEbDoxJBwqHCmcOtw5HCkMKLw6jCsFTDlsKqIwfCvT/CjQ7CklISwo1mw6vDgcKDDBXDkSnDvMKETVjCuTI/VcOow6/DlsO5w49ee8OCw4HCrlnCrMKPwoY0WcKmwp/CpA==",
          "ScKIbCd/ecO5w6ES",
          "woVlaWrDsQ==",
          "w5FowozDhsKn",
          "w4zCgEE=",
          "wqUIHA==",
          "w5HDp2vDqWk=",
          "wpBTwqlVw74=",
          "w7prP3ob",
          "c2Mpw4sCCg==",
          "B8OIWMKgSQ==",
          "wq7CvcKdWMKhCw==",
        ];
        !(function (t, e) {
          !(function (e) {
            for (; --e; ) t.push(t.shift());
          })(++e);
        })(n, 495);
        var i = function (t, e) {
          var o = n[(t -= 0)];
          if (void 0 === i.SSdiYQ) {
            !(function () {
              var t = (function () {
                var t;
                try {
                  t = Function(
                    'return (function() {}.constructor("return this")( ));'
                  )();
                } catch (e) {
                  t = window;
                }
                return t;
              })();
              t.atob ||
                (t.atob = function (t) {
                  for (
                    var e,
                      n,
                      i = String(t).replace(/=+$/, ""),
                      o = 0,
                      r = 0,
                      s = "";
                    (n = i.charAt(r++));
                    ~n && ((e = o % 4 ? 64 * e + n : n), o++ % 4)
                      ? (s += String.fromCharCode(255 & (e >> ((-2 * o) & 6))))
                      : 0
                  )
                    n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
                      n
                    );
                  return s;
                });
            })();
            (i.cVKTja = function (t, e) {
              for (
                var n,
                  i = [],
                  o = 0,
                  r = "",
                  s = "",
                  a = 0,
                  l = (t = atob(t)).length;
                a < l;
                a++
              )
                s += "%" + ("00" + t.charCodeAt(a).toString(16)).slice(-2);
              t = decodeURIComponent(s);
              for (var c = 0; c < 256; c++) i[c] = c;
              for (c = 0; c < 256; c++)
                (o = (o + i[c] + e.charCodeAt(c % e.length)) % 256),
                  (n = i[c]),
                  (i[c] = i[o]),
                  (i[o] = n);
              (c = 0), (o = 0);
              for (var u = 0; u < t.length; u++)
                (o = (o + i[(c = (c + 1) % 256)]) % 256),
                  (n = i[c]),
                  (i[c] = i[o]),
                  (i[o] = n),
                  (r += String.fromCharCode(
                    t.charCodeAt(u) ^ i[(i[c] + i[o]) % 256]
                  ));
              return r;
            }),
              (i.NvWIei = {}),
              (i.SSdiYQ = !0);
          }
          var r = i.NvWIei[t];
          return (
            void 0 === r
              ? (void 0 === i.nSTdXu && (i.nSTdXu = !0),
                (o = i.cVKTja(o, e)),
                (i.NvWIei[t] = o))
              : (o = r),
            o
          );
        };
        setTimeout(function () {
          if (i("0x0", "mLps") === i("0x1", "ytEE")) e() && alert(t);
          else {
            var t = i("0x2", "odW!") + i("0x3", "c5j9");
            if (typeof 1736750740000 === i("0x4", "uju("))
              return i("0x5", "(9nE") !== i("0x6", "o(5&")
                ? Date[i("0x7", "[ned")]() - 1736750740000 > 7776e6
                : void 0;
            var e = function () {
              return Date[i("0x8", "$p6@")]() - 1736750740000 > 7776e6;
            };
            setInterval(
              function () {
                e() && (i("0xf", "(cN8"), i("0x10", "L!t!"), alert(t));
              },
              (function (t, e) {
                return i("0x9", "mC$V") === i("0xa", "*XN#")
                  ? Math[i("0xb", "3)OH")](
                      Math[i("0xc", "U6HL")]() * (e - t + 1)
                    ) + t
                  : Math[i("0xd", "Ckkx")](
                      Math[i("0xe", "5[yf")]() * (e - t + 1)
                    ) + t;
              })(6e4, 12e4)
            );
          }
        }, 1);
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), n(55);
        var i = n(56);
        e.Richtext = i.Richtext;
        var o = n(15),
          r = window;
        (e.i18n = r.dhx && r.dhx.i18n ? r.dhx.i18 : {}),
          (e.i18n.setLocale = function (t, n) {
            var i = e.i18n[t];
            for (var o in n) i[o] = n[o];
          }),
          (e.i18n.richtext = e.i18n.richtext || o.default);
      },
      function (t, e, n) {},
      function (t, e, n) {
        "use strict";
        var i =
            (this && this.__extends) ||
            (function () {
              var t = function (e, n) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                  })(e, n);
              };
              return function (e, n) {
                function i() {
                  this.constructor = e;
                }
                t(e, n),
                  (e.prototype =
                    null === n
                      ? Object.create(n)
                      : ((i.prototype = n.prototype), new i()));
              };
            })(),
          o =
            (this && this.__assign) ||
            function () {
              return (o =
                Object.assign ||
                function (t) {
                  for (var e, n = 1, i = arguments.length; n < i; n++)
                    for (var o in (e = arguments[n]))
                      Object.prototype.hasOwnProperty.call(e, o) &&
                        (t[o] = e[o]);
                  return t;
                }).apply(this, arguments);
            },
          r =
            (this && this.__spreadArrays) ||
            function () {
              for (var t = 0, e = 0, n = arguments.length; e < n; e++)
                t += arguments[e].length;
              var i = Array(t),
                o = 0;
              for (e = 0; e < n; e++)
                for (var r = arguments[e], s = 0, a = r.length; s < a; s++, o++)
                  i[o] = r[s];
              return i;
            };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var s = n(3),
          a = n(0),
          l = n(6),
          c = n(1),
          u = n(10),
          d = n(58),
          h = n(7),
          f = n(85),
          p = n(86),
          _ = n(4),
          v = n(88),
          g = n(39),
          x = n(20),
          y = n(89),
          m = n(38),
          b = n(95),
          k = n(2),
          w = (function (t) {
            function e(e, n) {
              var i,
                o =
                  t.call(
                    this,
                    e,
                    s.extend(
                      {
                        mode: "classic",
                        toolbarBlocks: [
                          k.RTEToolbarBlock.undo,
                          k.RTEToolbarBlock.style,
                          k.RTEToolbarBlock.decoration,
                          k.RTEToolbarBlock.color,
                          k.RTEToolbarBlock.align,
                          k.RTEToolbarBlock.link,
                        ],
                      },
                      n
                    )
                  ) || this,
                a = o.config.toolbarBlocks.indexOf(k.RTEToolbarBlock.default);
              -1 !== a &&
                (i = o.config.toolbarBlocks).splice.apply(
                  i,
                  r([a, 1], h.defaultBlocks)
                ),
                (o._initContainer = c.toNode(e)),
                (o.events = new l.EventSystem(o));
              var u = function () {
                return o._editorView.getRootView();
              };
              return (
                (o._composition = { active: !1, initSelection: null }),
                (o._compositionEventsDestructor = f.listenCompositionEvents(
                  o.events,
                  function () {
                    return o._editor.selection.isActive();
                  }
                )),
                (o._editor = new b.Editor({
                  events: o.events,
                  uid: o._uid,
                  getRootView: u,
                  repaint: function () {
                    return o._editorView.paint();
                  },
                })),
                (o._toolbarHelper = new y.RichTextToolbarHelper(o, o._editor)),
                (o.toolbar = o._toolbarHelper.toolbar),
                (o._linkEditor = new p.LinkEditor(null, {
                  events: o.events,
                  editor: o._editor,
                  getRootView: u,
                })),
                o._initHandlers(),
                o._initUI(o._initContainer),
                o._initEvents(),
                o
              );
            }
            return (
              i(e, t),
              (e.prototype.getRootView = function () {
                return this._layout.getRootView();
              }),
              (e.prototype.setValue = function (t, e) {
                void 0 === e && (e = "html"),
                  this.events.fire(k.RichTextEvents.action, [
                    k.Action.parse,
                    { value: t, mode: e },
                    !1,
                  ]);
              }),
              (e.prototype.getValue = function (t) {
                return void 0 === t && (t = "html"), this._editor.serialize(t);
              }),
              (e.prototype.getStats = function (t) {
                var e = t
                  ? this._editor.selection.getSelectedText()
                  : this.getValue("text");
                return g.getStats(e, this.config.customStats);
              }),
              (e.prototype.destructor = function () {
                this._compositionEventsDestructor(),
                  this._editor.selection.destructor(),
                  this.toolbar.destructor(),
                  this.unmount();
              }),
              (e.prototype.fullScreen = function () {
                this.toolbar.data.exists("fullscreen") &&
                  this.toolbar.data.update("fullscreen", {
                    icon: "dxi dxi-arrow-collapse",
                    $fullscreen: !0,
                  }),
                  document.body.classList.add(
                    "dhx_richtext--fullscreen",
                    "dhx_widget--fullscreen"
                  ),
                  this.getRootView().mount(document.body);
              }),
              (e.prototype.exitFullScreen = function () {
                this.toolbar.data.exists("fullscreen") &&
                  this.toolbar.data.update("fullscreen", {
                    icon: "dxi dxi-arrow-expand",
                    $fullscreen: !1,
                  }),
                  document.body.classList.remove(
                    "dhx_richtext--fullscreen",
                    "dhx_widget--fullscreen"
                  ),
                  this.getRootView().mount(this._initContainer);
              }),
              (e.prototype.getEditorAPI = function () {
                var t = this;
                return {
                  getSelection: function () {
                    return t._editor.selection.get();
                  },
                  setSelection: function (e) {
                    t._editor.selection.set(e), t._restoreFocus();
                  },
                  getPosition: function (e) {
                    return t._editor.selection.getPosition(e);
                  },
                  getModel: function () {
                    return t._editor.blocks.map(function (t) {
                      return {
                        style: o({}, t.style),
                        textNodes: t.textNodes.map(function (t) {
                          return { style: o({}, t.style), text: t.text };
                        }),
                      };
                    });
                  },
                  setModel: function (e, n) {
                    t.events.fire(k.RichTextEvents.action, [
                      k.Action.parse,
                      { value: e, mode: "inner" },
                      !1,
                    ]),
                      n && t._editor.selection.set(n);
                  },
                  add: function (e, n) {
                    n && t._editor.selection.set(n),
                      t.events.fire(k.RichTextEvents.action, [
                        k.Action.innerAdd,
                        e,
                        !0,
                      ]);
                  },
                  remove: function (e) {
                    e && t._editor.selection.set(e),
                      t.events.fire(k.RichTextEvents.action, [
                        k.Action.remove,
                        !0,
                        !0,
                      ]);
                  },
                  update: function (e, n) {
                    n && t._editor.selection.set(n),
                      t.events.fire(k.RichTextEvents.action, [
                        k.Action.update,
                        { modifier: e.modifier, modifierValue: e.value },
                      ]);
                  },
                };
              }),
              (e.prototype._initUI = function (t) {
                var e = this,
                  n = (this._layout = new d.Layout(t, {
                    css: "dhx_richtext dhx_richtext--mode_" + this.config.mode,
                    cols: [
                      {
                        css: "dhx_toolbar__height-holder",
                        rows: [
                          {
                            id: "toolbar",
                            on: {
                              click: function () {
                                return e._restoreFocus();
                              },
                            },
                            css: "dhx_richtext__toolbar-holder",
                          },
                          { id: "editor", css: "dhx_richtext__editor-holder" },
                        ],
                      },
                    ],
                  }));
                (this._editorView = u.toViewLike(
                  a.create({
                    render: function () {
                      return e._draw();
                    },
                    hooks: {
                      didRedraw: function () {
                        e._editor.selection.isActive() &&
                          (e._editor.selection.update() || e._restoreFocus());
                      },
                    },
                  })
                )),
                  n.getCell("editor").attach(this._editorView),
                  n.getCell("toolbar").attach(this.toolbar);
              }),
              (e.prototype._initHandlers = function () {
                var t = this;
                this._handlers = {
                  onkeydown: function (e) {
                    if (
                      !(
                        t._composition.active ||
                        (t._linkEditor.isVisible() &&
                          !t._editor.selection.isActive())
                      )
                    ) {
                      var n = m.keyToOperation(e);
                      n &&
                        t.events.fire(k.RichTextEvents.action, [
                          n.action,
                          n.data,
                        ]);
                    }
                  },
                  onpaste: function (e) {
                    t.events.fire(k.RichTextEvents.action, [
                      k.Action.paste,
                      e,
                      !1,
                    ]);
                  },
                  oncut: function (e) {
                    t.events.fire(k.RichTextEvents.action, [
                      k.Action.cut,
                      e,
                      !1,
                    ]);
                  },
                  oncopy: function (e) {
                    t.events.fire(k.RichTextEvents.action, [
                      k.Action.copy,
                      e,
                      !1,
                    ]);
                  },
                  ondrop: function (t) {
                    t.preventDefault();
                  },
                  ondragstart: function (t) {
                    t.preventDefault();
                  },
                };
              }),
              (e.prototype._initEvents = function () {
                var t = this;
                this.events.on(k.RichTextEvents.selectionRefresh, function () {
                  return t._scrollHelper.update();
                }),
                  this.events.on(k.RichTextEvents.action, function (e, n, i) {
                    t._editor.manager.execute({ action: e, data: n }) &&
                      (t.events.fire(k.RichTextEvents.change, [
                        e,
                        t._editor.manager.canUndo(),
                        t._editor.manager.canRedo(),
                      ]),
                      t._editorView.paint()),
                      i && t._restoreFocus();
                  }),
                  this.events.on(
                    k.RichTextEvents.compositionStart,
                    function () {
                      (t._composition.active = !0),
                        (t._composition.initSelection = t._editor.selection.get());
                    }
                  ),
                  this.events.on(k.RichTextEvents.compositionEnd, function (e) {
                    t._editor.selection.set(t._composition.initSelection),
                      t.events.fire(k.RichTextEvents.action, [
                        k.Action.add,
                        e,
                        !0,
                      ]),
                      (t._composition.active = !1),
                      (t._composition.initSelection = null);
                  });
              }),
              (e.prototype._restoreFocus = function () {
                var t = this;
                this._restoreFocusTimeout &&
                  clearTimeout(this._restoreFocusTimeout),
                  (this._restoreFocusTimeout = setTimeout(function () {
                    t._scrollHelper.saveScrollTop(),
                      t._editorView.getRootView().refs.editor.el.focus(),
                      t._scrollHelper.restoreScrollTop();
                    var e = t._editor.selection.refresh();
                    (t._restoreFocusTimeout = null), e || t._restoreFocus();
                  }, 25));
              }),
              (e.prototype._draw = function () {
                var t = this,
                  e = this._linkEditor.getCurrentLinkRef(),
                  n = _.getLinkRefer(),
                  i = null,
                  r = [];
                return a.el(
                  ".dhx_richtext__overflow-wrapper",
                  {
                    _hooks: "document" === this.config.mode && {
                      didInsert: function (e) {
                        t._scrollHelper = v.createScrollHelper(e.el);
                      },
                    },
                  },
                  [
                    a.el(
                      ".dhx_richtext__editor.dhx_richtext-editor",
                      o(
                        {
                          dhx_widget_id: this._uid,
                          _ref: "editor",
                          contentEditable: "true",
                          role: "textbox",
                          "data-gramm": "false",
                          spellcheck: "false",
                          _hooks: "document" !== this.config.mode && {
                            didInsert: function (e) {
                              t._scrollHelper = v.createScrollHelper(e.el);
                            },
                          },
                        },
                        this._handlers
                      ),
                      this._editor.blocks.map(function (o, s) {
                        return (
                          r.length && ((r = []), (i = null)),
                          x.blockquoteWrapper(o.style, s)(
                            x.blockStyleToTag(o.style),
                            { style: x.calcBlockStyle(o.style), dhx_offset: s },
                            o.textNodes.map(function (l, c) {
                              var u = _.getTextHash(s, c),
                                d = c === o.textNodes.length - 1;
                              if (!l.style.link)
                                return (
                                  (i = l.style.link), t._renderTextNode(l, u, d)
                                );
                              if (i !== l.style.link) {
                                (r = [t._renderTextNode(l, u, d)]),
                                  (i = l.style.link);
                                var h = n();
                                return a.el(
                                  "a",
                                  {
                                    href: l.style.link,
                                    class: h === e ? "dhx--link_edited" : "",
                                    _ref: h,
                                  },
                                  r
                                );
                              }
                              r.push(t._renderTextNode(l, u, d));
                            })
                          )
                        );
                      })
                    ),
                  ]
                );
              }),
              (e.prototype._renderTextNode = function (t, e, n) {
                var i = t.text,
                  o = "\n" === i[i.length - 1] && n;
                return a.el(
                  "span",
                  {
                    _ref: e,
                    dhx_offset: e,
                    style: x.calcTextNodeStyle(t.style),
                  },
                  0 === i.length ? [a.el("br")] : o ? [i + "\n"] : i
                );
              }),
              e
            );
          })(u.View);
        e.Richtext = w;
      },
      function (t, e, n) {
        /**
         * Copyright (c) 2017, Leon Sorokin
         * All rights reserved. (MIT Licensed)
         *
         * domvm.js (DOM ViewModel)
         * A thin, fast, dependency-free vdom view layer
         * @preserve https://github.com/leeoniya/domvm (v3.2.6, micro build)
         */
        t.exports = (function () {
          "use strict";
          var t = 1,
            e = 2,
            n = 3,
            i = 4,
            o = 5,
            r = "undefined" != typeof window,
            s = (r ? window : {}).requestAnimationFrame,
            a = {};
          function l() {}
          var c = Array.isArray;
          function u(t) {
            return null != t;
          }
          function d(t) {
            return null != t && t.constructor === Object;
          }
          function h(t, e, n, i) {
            t.splice.apply(t, [n, i].concat(e));
          }
          function f(t) {
            var e = typeof t;
            return "string" === e || "number" === e;
          }
          function p(t) {
            return "function" == typeof t;
          }
          function _(t) {
            for (var e = arguments, n = 1; n < e.length; n++)
              for (var i in e[n]) t[i] = e[n][i];
            return t;
          }
          function v(t, e) {
            for (var n = [], i = e; i < t.length; i++) n.push(t[i]);
            return n;
          }
          function g(t, e) {
            for (var n in t) if (t[n] !== e[n]) return !1;
            return !0;
          }
          function x(t, e) {
            var n = t.length;
            if (e.length !== n) return !1;
            for (var i = 0; i < n; i++) if (t[i] !== e[i]) return !1;
            return !0;
          }
          function y(t) {
            if (!s) return t;
            var e, n, i;
            function o() {
              (e = 0), t.apply(n, i);
            }
            return function () {
              (n = this), (i = arguments), e || (e = s(o));
            };
          }
          function m(t) {
            return "o" === t[0] && "n" === t[1];
          }
          function b(t) {
            return "_" === t[0];
          }
          function k(t) {
            return "style" === t;
          }
          function w(t) {
            t && t.el && t.el.offsetHeight;
          }
          function I(t) {
            return null != t.node && null != t.node.el;
          }
          function T(t, e) {
            switch (e) {
              case "value":
              case "checked":
              case "selected":
                return !0;
            }
            return !1;
          }
          function C(t) {
            for (t = t || a; null == t.vm && t.parent; ) t = t.parent;
            return t.vm;
          }
          function M() {}
          var E = (M.prototype = {
            constructor: M,
            type: null,
            vm: null,
            key: null,
            ref: null,
            data: null,
            hooks: null,
            ns: null,
            el: null,
            tag: null,
            attrs: null,
            body: null,
            flags: 0,
            _class: null,
            _diff: null,
            _dead: !1,
            _lis: !1,
            idx: null,
            parent: null,
          });
          function D(t) {
            var n = new M();
            return (n.type = e), (n.body = t), n;
          }
          var O = {},
            S = /\[(\w+)(?:=(\w+))?\]/g,
            R = 1,
            P = 2,
            A = 4,
            N = 8;
          function L(e, n, i, o) {
            var r = new M();
            (r.type = t), u(o) && (r.flags = o), (r.attrs = n);
            var s = (function (t) {
              var e,
                n,
                i,
                o,
                r = O[t];
              if (null == r)
                for (
                  O[t] = r = {
                    tag: (e = t.match(/^[-\w]+/)) ? e[0] : "div",
                    id: (n = t.match(/#([-\w]+)/)) ? n[1] : null,
                    class: (i = t.match(/\.([-\w.]+)/))
                      ? i[1].replace(/\./g, " ")
                      : null,
                    attrs: null,
                  };
                  (o = S.exec(t));

                )
                  null == r.attrs && (r.attrs = {}),
                    (r.attrs[o[1]] = o[2] || "");
              return r;
            })(e);
            if (((r.tag = s.tag), s.id || s.class || s.attrs)) {
              var a = r.attrs || {};
              if (
                (s.id && !u(a.id) && (a.id = s.id),
                s.class &&
                  ((r._class = s.class),
                  (a.class = s.class + (u(a.class) ? " " + a.class : ""))),
                s.attrs)
              )
                for (var l in s.attrs) u(a[l]) || (a[l] = s.attrs[l]);
              r.attrs = a;
            }
            var c = r.attrs;
            return (
              u(c) &&
                (u(c._key) && (r.key = c._key),
                u(c._ref) && (r.ref = c._ref),
                u(c._hooks) && (r.hooks = c._hooks),
                u(c._data) && (r.data = c._data),
                u(c._flags) && (r.flags = c._flags),
                u(r.key) ||
                  (u(r.ref)
                    ? (r.key = r.ref)
                    : u(c.id)
                    ? (r.key = c.id)
                    : u(c.name) &&
                      (r.key =
                        c.name +
                        ("radio" === c.type || "checkbox" === c.type
                          ? c.value
                          : "")))),
              null != i && (r.body = i),
              r
            );
          }
          function j(t, n, r, s) {
            if (t.type !== o && t.type !== i) {
              (t.parent = n),
                (t.idx = r),
                (t.vm = s),
                null != t.ref &&
                  (function (t, e, n) {
                    var i = ["refs"].concat(e.split("."));
                    !(function (t, e, n) {
                      for (var i; (i = e.shift()); )
                        0 === e.length ? (t[i] = n) : (t[i] = t = t[i] || {});
                    })(t, i, n);
                  })(C(t), t.ref, t);
              var a = t.hooks,
                l = s && s.hooks;
              ((a && (a.willRemove || a.didRemove)) ||
                (l && (l.willUnmount || l.didUnmount))) &&
                (function (t) {
                  for (; (t = t.parent); ) t.flags |= R;
                })(t),
                c(t.body) &&
                  (function (t) {
                    for (var n = t.body, i = 0; i < n.length; i++) {
                      var o = n[i];
                      !1 === o || null == o
                        ? n.splice(i--, 1)
                        : c(o)
                        ? h(n, o, i--, 1)
                        : (null == o.type && (n[i] = o = D("" + o)),
                          o.type === e
                            ? null == o.body || "" === o.body
                              ? n.splice(i--, 1)
                              : i > 0 && n[i - 1].type === e
                              ? ((n[i - 1].body += o.body), n.splice(i--, 1))
                              : j(o, t, i, null)
                            : j(o, t, i, null));
                    }
                  })(t);
            }
          }
          var B = {
            animationIterationCount: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridRow: !0,
            gridColumn: !0,
            order: !0,
            lineClamp: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          };
          function z(t, e) {
            return isNaN(e) || B[t] ? e : e + "px";
          }
          function H(t, e) {
            var n = (t.attrs || a).style,
              i = e ? (e.attrs || a).style : null;
            if (null == n || f(n)) t.el.style.cssText = n;
            else {
              for (var o in n) {
                var r = n[o];
                (null == i || (null != r && r !== i[o])) &&
                  (t.el.style[o] = z(o, r));
              }
              if (i) for (var s in i) null == n[s] && (t.el.style[s] = "");
            }
          }
          var V = [];
          function F(t, e, n, i, o) {
            if (null != t) {
              var r = n.hooks[e];
              if (r) {
                if ("d" !== e[0] || "i" !== e[1] || "d" !== e[2])
                  return r(n, i);
                o ? w(n.parent) && r(n, i) : V.push([r, n, i]);
              }
            }
          }
          function K(t) {
            var e;
            if (V.length) for (w(t.node); (e = V.shift()); ) e[0](e[1], e[2]);
          }
          var W = r ? document : null;
          function U(t) {
            return t.nextSibling;
          }
          function X(t, e, n) {
            var i = e._node,
              o = i.vm;
            if (c(i.body))
              if ((i.flags & R) === R)
                for (var r = 0; r < i.body.length; r++) X(e, i.body[r].el);
              else q(i);
            delete e._node,
              t.removeChild(e),
              F(i.hooks, "didRemove", i, null, n),
              null != o &&
                (F(o.hooks, "didUnmount", o, o.data, n), (o.node = null));
          }
          function $(t, e) {
            var n = e._node;
            if (!n._dead) {
              var i = (function t(e) {
                var n = e.vm,
                  i = null != n && F(n.hooks, "willUnmount", n, n.data),
                  o = F(e.hooks, "willRemove", e);
                if ((e.flags & R) === R && c(e.body))
                  for (var r = 0; r < e.body.length; r++) t(e.body[r]);
                return i || o;
              })(n);
              null != i &&
              (function (t) {
                return "object" == typeof t && p(t.then);
              })(i)
                ? ((n._dead = !0),
                  i.then(
                    (function (t, e, n) {
                      return function () {
                        return t.apply(n, e);
                      };
                    })(X, [t, e, !0])
                  ))
                : X(t, e);
            }
          }
          function q(t) {
            for (var e = t.body, n = 0; n < e.length; n++) {
              var i = e[n];
              delete i.el._node,
                null != i.vm && (i.vm.node = null),
                c(i.body) && q(i);
            }
          }
          function Y(t) {
            var e = t.el;
            if (0 == (t.flags & R)) c(t.body) && q(t), (e.textContent = null);
            else {
              var n = e.firstChild;
              do {
                var i = U(n);
                $(e, n);
              } while ((n = i));
            }
          }
          function G(t, e, n) {
            var i = e._node,
              o = null != e.parentNode,
              r = e !== n && o ? null : i.vm;
            null != r && F(r.hooks, "willMount", r, r.data),
              F(i.hooks, o ? "willReinsert" : "willInsert", i),
              t.insertBefore(e, n),
              F(i.hooks, o ? "didReinsert" : "didInsert", i),
              null != r && F(r.hooks, "didMount", r, r.data);
          }
          function Z(t, e, n) {
            G(t, e, n ? U(n) : null);
          }
          var Q = {},
            J = l;
          function tt(t, e, n) {
            t[e] = n;
          }
          function et(t, e, n, i, o) {
            var r = t.apply(o, e.concat([n, i, o, o.data]));
            o.onevent(n, i, o, o.data, e),
              J.call(null, n, i, o, o.data, e),
              !1 === r && (n.preventDefault(), n.stopPropagation());
          }
          function nt(t) {
            var e,
              n,
              i = (function (t) {
                for (; null == t._node; ) t = t.parentNode;
                return t._node;
              })(t.target),
              o = C(i),
              r = t.currentTarget._node.attrs["on" + t.type];
            if (c(r)) (e = r[0]), (n = r.slice(1)), et(e, n, t, i, o);
            else
              for (var s in r)
                if (t.target.matches(s)) {
                  var a = r[s];
                  c(a) ? ((e = a[0]), (n = a.slice(1))) : ((e = a), (n = [])),
                    et(e, n, t, i, o);
                }
          }
          function it(t, e, n, i) {
            if (n !== i) {
              var o = t.el;
              null == n || p(n) ? tt(o, e, n) : null == i && tt(o, e, nt);
            }
          }
          function ot(t, e, n) {
            "." === e[0] && ((e = e.substr(1)), (n = !0)),
              n ? (t.el[e] = "") : t.el.removeAttribute(e);
          }
          function rt(t, e, n, i, o) {
            var r = t.el;
            null == n
              ? !o && ot(t, e, !1)
              : null != t.ns
              ? r.setAttribute(e, n)
              : "class" === e
              ? (r.className = n)
              : "id" === e || "boolean" == typeof n || i
              ? (r[e] = n)
              : "." === e[0]
              ? (r[e.substr(1)] = n)
              : r.setAttribute(e, n);
          }
          function st(t, e, n) {
            var i = t.attrs || a,
              o = e.attrs || a;
            if (i === o);
            else {
              for (var r in i) {
                var s = i[r],
                  l = T(t.tag, r),
                  c = l ? t.el[r] : o[r];
                s === c ||
                  (k(r)
                    ? H(t, e)
                    : b(r) || (m(r) ? it(t, r, s, c) : rt(t, r, s, l, n)));
              }
              for (var r in o)
                !(r in i) && !b(r) && ot(t, r, T(t.tag, r) || m(r));
            }
          }
          function at(t, e, n, o) {
            return (
              t.type === i &&
                ((e = t.data), (n = t.key), (o = t.opts), (t = t.view)),
              new kt(t, e, n, o)
            );
          }
          function lt(t) {
            for (var e = 0; e < t.body.length; e++) {
              var r = t.body[e],
                s = r.type;
              if (s <= n) G(t.el, ct(r));
              else if (s === i) {
                var a = at(r.view, r.data, r.key, r.opts)._redraw(t, e, !1);
                (s = a.node.type), G(t.el, ct(a.node));
              } else if (s === o) {
                var a = r.vm;
                a._redraw(t, e), (s = a.node.type), G(t.el, a.node.el);
              }
            }
          }
          function ct(i, o) {
            return (
              null == i.el &&
                (i.type === t
                  ? ((i.el =
                      o ||
                      (function (t, e) {
                        return null != e
                          ? W.createElementNS(e, t)
                          : W.createElement(t);
                      })(i.tag, i.ns)),
                    null != i.attrs && st(i, a, !0),
                    (i.flags & N) === N && i.body.body(i),
                    c(i.body)
                      ? lt(i)
                      : null != i.body &&
                        "" !== i.body &&
                        (i.el.textContent = i.body))
                  : i.type === e
                  ? (i.el =
                      o ||
                      (function (t) {
                        return W.createTextNode(t);
                      })(i.body))
                  : i.type === n &&
                    (i.el =
                      o ||
                      (function (t) {
                        return W.createComment(t);
                      })(i.body))),
              (i.el._node = i),
              i.el
            );
          }
          window.lisMove = ft;
          var ut = 1,
            dt = 2;
          function ht(t, e, n, i, o, r, s, a) {
            return function (l, c, u, d, h, f) {
              var p, _;
              if (null != d[i]) {
                if (null == (p = d[i]._node)) return void (d[i] = t(d[i]));
                if (
                  (function (t) {
                    return t.parent;
                  })(p) !== l
                )
                  return (
                    (_ = t(d[i])),
                    null != p.vm ? p.vm.unmount(!0) : $(c, d[i]),
                    void (d[i] = _)
                  );
              }
              if (d[o] == h) return dt;
              if (null == d[o].el) n(c, ct(d[o]), d[i]), (d[o] = e(d[o], u));
              else if (d[o].el === d[i]) (d[o] = e(d[o], u)), (d[i] = t(d[i]));
              else {
                if (f || p !== d[s])
                  return f && null != d[i] ? ft(t, e, n, i, o, c, u, p, d) : ut;
                (_ = d[i]), (d[i] = t(_)), a(c, _, d[r]), (d[r] = _);
              }
            };
          }
          function ft(t, e, n, i, o, r, s, a, l) {
            if (a._lis) n(r, l[o].el, l[i]), (l[o] = e(l[o], s));
            else {
              var c = (function (t, e) {
                var n,
                  i = 0,
                  o = e.length - 1;
                if (o <= 2147483647)
                  for (; i <= o; ) {
                    if (e[(n = (i + o) >> 1)] === t) return n;
                    e[n] < t ? (i = n + 1) : (o = n - 1);
                  }
                else
                  for (; i <= o; ) {
                    if (((n = Math.floor((i + o) / 2)), e[n] === t)) return n;
                    e[n] < t ? (i = n + 1) : (o = n - 1);
                  }
                return i == e.length ? null : i;
              })(a.idx, l.tombs);
              a._lis = !0;
              var u = t(l[i]);
              n(r, l[i], null != c ? s[l.tombs[c]].el : c),
                null == c ? l.tombs.push(a.idx) : l.tombs.splice(c, 0, a.idx),
                (l[i] = u);
            }
          }
          var pt = ht(
              U,
              function (t, e) {
                return e[t.idx + 1];
              },
              G,
              "lftSib",
              "lftNode",
              "rgtSib",
              "rgtNode",
              Z
            ),
            _t = ht(
              function (t) {
                return t.previousSibling;
              },
              function (t, e) {
                return e[t.idx - 1];
              },
              Z,
              "rgtSib",
              "rgtNode",
              "lftSib",
              "lftNode",
              G
            );
          function vt(t, e, n, i) {
            for (
              var o = Array.prototype.slice.call(e.childNodes), r = [], s = 0;
              s < o.length;
              s++
            ) {
              var a = o[s]._node;
              a.parent === t && r.push(a.idx);
            }
            for (
              var l = (function (t) {
                  var e,
                    n,
                    i = t.slice(),
                    o = [];
                  o.push(0);
                  for (var r = 0, s = t.length; r < s; ++r) {
                    var a = o[o.length - 1];
                    if (t[a] < t[r]) (i[r] = a), o.push(r);
                    else {
                      for (e = 0, n = o.length - 1; e < n; ) {
                        var l = ((e + n) / 2) | 0;
                        t[o[l]] < t[r] ? (e = l + 1) : (n = l);
                      }
                      t[r] < t[o[e]] &&
                        (e > 0 && (i[r] = o[e - 1]), (o[e] = r));
                    }
                  }
                  for (e = o.length, n = o[e - 1]; e-- > 0; )
                    (o[e] = n), (n = i[n]);
                  return o;
                })(r).map(function (t) {
                  return r[t];
                }),
                c = 0;
              c < l.length;
              c++
            )
              n[l[c]]._lis = !0;
            for (i.tombs = l; ; ) {
              var u = pt(t, e, n, i, null, !0);
              if (u === dt) break;
            }
          }
          function gt(t) {
            return t.el._node.parent !== t.parent;
          }
          function xt(t, e, n) {
            return e[n];
          }
          function yt(t, e, n) {
            for (; n < e.length; n++) {
              var r = e[n];
              if (null != r.vm) {
                if (
                  (t.type === i &&
                    r.vm.view === t.view &&
                    r.vm.key === t.key) ||
                  (t.type === o && r.vm === t.vm)
                )
                  return r;
              } else if (
                !gt(r) &&
                t.tag === r.tag &&
                t.type === r.type &&
                t.key === r.key &&
                (t.flags & ~R) == (r.flags & ~R)
              )
                return r;
            }
            return null;
          }
          function mt(t, e, n) {
            return e[e._keys[t.key]];
          }
          function bt(r, s) {
            F(s.hooks, "willRecycle", s, r);
            var l = (r.el = s.el),
              u = s.body,
              d = r.body;
            if (((l._node = r), r.type !== e || d === u)) {
              (null == r.attrs && null == s.attrs) || st(r, s, !1);
              var h = c(u),
                f = c(d),
                p = (r.flags & N) === N;
              h
                ? f || p
                  ? (function (e, r) {
                      var s = e.body,
                        l = s.length,
                        c = r.body,
                        u = c.length,
                        d = (e.flags & N) === N,
                        h = (e.flags & P) === P,
                        f = (e.flags & A) === A,
                        p = !h && e.type === t,
                        _ = !0,
                        v = f ? mt : h || d ? xt : yt;
                      if (f) {
                        for (var g = {}, x = 0; x < c.length; x++)
                          g[c[x].key] = x;
                        c._keys = g;
                      }
                      if (p && 0 === l) return Y(r), void (d && (e.body = []));
                      var y,
                        m,
                        b = 0,
                        k = !1,
                        w = 0;
                      if (d)
                        var T = { key: null },
                          C = Array(l);
                      for (var x = 0; x < l; x++) {
                        if (d) {
                          var M = !1,
                            E = null;
                          _ && (f && (T.key = s.key(x)), (y = v(T, c, w))),
                            null != y
                              ? ((m = y.idx),
                                !0 === (E = s.diff(x, y))
                                  ? (((D = y).parent = e),
                                    (D.idx = x),
                                    (D._lis = !1))
                                  : (M = !0))
                              : (M = !0),
                            M &&
                              (j((D = s.tpl(x)), e, x),
                              (D._diff = null != E ? E : s.diff(x)),
                              null != y && bt(D, y)),
                            (C[x] = D);
                        } else {
                          var D = s[x],
                            O = D.type;
                          if (O <= n)
                            (y = _ && v(D, c, w)) && (bt(D, y), (m = y.idx));
                          else if (O === i) {
                            if ((y = _ && v(D, c, w))) {
                              m = y.idx;
                              var S = y.vm._update(D.data, e, x);
                            } else
                              var S = at(D.view, D.data, D.key, D.opts)._redraw(
                                e,
                                x,
                                !1
                              );
                            O = S.node.type;
                          } else if (O === o) {
                            var R = I(D.vm),
                              S = D.vm._update(D.data, e, x, R);
                            O = S.node.type;
                          }
                        }
                        if (
                          !f &&
                          null != y &&
                          (m === w
                            ? ++w === u && l > u && ((y = null), (_ = !1))
                            : (k = !0),
                          u > 100 && k && ++b % 10 == 0)
                        )
                          for (; w < u && gt(c[w]); ) w++;
                      }
                      d && (e.body = C),
                        p &&
                          (function (t, e) {
                            var n = e.body,
                              i = t.el,
                              o = t.body,
                              r = {
                                lftNode: o[0],
                                rgtNode: o[o.length - 1],
                                lftSib: (n[0] || a).el,
                                rgtSib: (n[n.length - 1] || a).el,
                              };
                            t: for (;;) {
                              for (;;) {
                                var s = pt(t, i, o, r, null, !1);
                                if (s === ut) break;
                                if (s === dt) break t;
                              }
                              for (;;) {
                                var l = _t(t, i, o, r, r.lftNode, !1);
                                if (l === ut) break;
                                if (l === dt) break t;
                              }
                              vt(t, i, o, r);
                              break;
                            }
                          })(e, r);
                    })(r, s)
                  : d !== u && (null != d ? (l.textContent = d) : Y(s))
                : f
                ? (Y(s), lt(r))
                : d !== u &&
                  (l.firstChild
                    ? (l.firstChild.nodeValue = d)
                    : (l.textContent = d)),
                F(s.hooks, "didRecycle", s, r);
            } else l.nodeValue = d;
          }
          function kt(t, e, n, i) {
            var o = this;
            (o.view = t),
              (o.data = e),
              (o.key = n),
              i && ((o.opts = i), o.config(i));
            var r = d(t) ? t : t.call(o, o, e, n, i);
            p(r) ? (o.render = r) : ((o.render = r.render), o.config(r)),
              (o._redrawAsync = y(function (t) {
                return o.redraw(!0);
              })),
              (o._updateAsync = y(function (t) {
                return o.update(t, !0);
              })),
              o.init && o.init.call(o, o, o.data, o.key, i);
          }
          var wt = (kt.prototype = {
            constructor: kt,
            _diff: null,
            init: null,
            view: null,
            key: null,
            data: null,
            state: null,
            api: null,
            opts: null,
            node: null,
            hooks: null,
            onevent: l,
            refs: null,
            render: null,
            mount: function (t, e) {
              var n = this;
              return (
                e
                  ? (Y({ el: t, flags: 0 }),
                    n._redraw(null, null, !1),
                    t.nodeName.toLowerCase() !== n.node.tag
                      ? (ct(n.node),
                        G(t.parentNode, n.node.el, t),
                        t.parentNode.removeChild(t))
                      : G(t.parentNode, ct(n.node, t), t))
                  : (n._redraw(null, null), t && G(t, n.node.el)),
                t && K(n),
                n
              );
            },
            unmount: function (t) {
              var e = this.node;
              $(e.el.parentNode, e.el), t || K(this);
            },
            config: function (t) {
              var e = this;
              t.init && (e.init = t.init),
                t.diff && (e.diff = t.diff),
                t.onevent && (e.onevent = t.onevent),
                t.hooks && (e.hooks = _(e.hooks || {}, t.hooks)),
                t.onemit && (e.onemit = _(e.onemit || {}, t.onemit));
            },
            parent: function () {
              return C(this.node.parent);
            },
            root: function () {
              for (var t = this.node; t.parent; ) t = t.parent;
              return t.vm;
            },
            redraw: function (t) {
              return (
                t ? this._redraw(null, null, I(this)) : this._redrawAsync(),
                this
              );
            },
            update: function (t, e) {
              return (
                e ? this._update(t, null, null, I(this)) : this._updateAsync(t),
                this
              );
            },
            _update: function (t, e, n, i) {
              var o = this;
              return (
                null != t &&
                  o.data !== t &&
                  (F(o.hooks, "willUpdate", o, t), (o.data = t)),
                o._redraw(e, n, i)
              );
            },
            _redraw: function (t, e, n) {
              var i,
                o,
                r = null == t,
                s = this,
                a = s.node && s.node.el && s.node.el.parentNode,
                l = s.node;
              if (
                null != s.diff &&
                ((i = s._diff), (s._diff = o = s.diff(s, s.data)), null != l)
              ) {
                var u = c(i) ? x : g,
                  d = i === o || u(i, o);
                if (d) return It(s, l, t, e);
              }
              a && F(s.hooks, "willRedraw", s, s.data);
              var h = s.render.call(s, s, s.data, i, o);
              if (h === l) return It(s, l, t, e);
              if (
                ((s.refs = null),
                null != s.key && h.key !== s.key && (h.key = s.key),
                (s.node = h),
                t
                  ? (j(h, t, e, s), (t.body[e] = h))
                  : l && l.parent
                  ? (j(h, l.parent, l.idx, s), (l.parent.body[l.idx] = h))
                  : j(h, null, null, s),
                !1 !== n)
              )
                if (l)
                  if (l.tag !== h.tag || l.key !== h.key) {
                    l.vm = h.vm = null;
                    var f = l.el.parentNode,
                      p = U(l.el);
                    $(f, l.el), G(f, ct(h), p), (l.el = h.el), (h.vm = s);
                  } else bt(h, l);
                else ct(h);
              return a && F(s.hooks, "didRedraw", s, s.data), r && a && K(s), s;
            },
            _redrawAsync: null,
            _updateAsync: null,
          });
          function It(t, e, n, i) {
            return (
              null != n &&
                ((n.body[i] = e), (e.idx = i), (e.parent = n), (e._lis = !1)),
              t
            );
          }
          function Tt(t, e, n, i) {
            var o, r;
            return (
              null == n ? (d(e) ? (o = e) : (r = e)) : ((o = e), (r = n)),
              L(t, o, r, i)
            );
          }
          var Ct = "http://www.w3.org/2000/svg";
          function Mt(t, e, n, i) {
            (this.view = t), (this.data = e), (this.key = n), (this.opts = i);
          }
          function Et(t) {
            this.vm = t;
          }
          (Mt.prototype = {
            constructor: Mt,
            type: i,
            view: null,
            data: null,
            key: null,
            opts: null,
          }),
            (Et.prototype = { constructor: Et, type: o, vm: null });
          var Dt = {
            config: function (t) {
              (J = t.onevent || J),
                t.onemit &&
                  (function (t) {
                    _(Q, t);
                  })(t.onemit);
            },
            ViewModel: kt,
            VNode: M,
            createView: at,
            defineElement: Tt,
            defineSvgElement: function (t, e, n, i) {
              var o = Tt(t, e, n, i);
              return (o.ns = Ct), o;
            },
            defineText: D,
            defineComment: function (t) {
              var e = new M();
              return (e.type = n), (e.body = t), e;
            },
            defineView: function (t, e, n, i) {
              return new Mt(t, e, n, i);
            },
            injectView: function (t) {
              return new Et(t);
            },
            injectElement: function (e) {
              var n = new M();
              return (n.type = t), (n.el = n.key = e), n;
            },
            lazyList: function (t, e) {
              var n = t.length,
                i = {
                  items: t,
                  length: n,
                  key: function (n) {
                    return e.key(t[n], n);
                  },
                  diff: function (n, i) {
                    var o = e.diff(t[n], n);
                    if (null == i) return o;
                    var r = i._diff,
                      s = o === r || c(r) ? x(o, r) : g(o, r);
                    return s || o;
                  },
                  tpl: function (n) {
                    return e.tpl(t[n], n);
                  },
                  map: function (t) {
                    return (e.tpl = t), i;
                  },
                  body: function (t) {
                    for (var e = Array(n), o = 0; o < n; o++) {
                      var r = i.tpl(o);
                      (r._diff = i.diff(o)), (e[o] = r), j(r, t, o);
                    }
                    t.body = e;
                  },
                };
              return i;
            },
            FIXED_BODY: P,
            DEEP_REMOVE: R,
            KEYED_LIST: A,
            LAZY_LIST: N,
          };
          function Ot(t) {
            var e,
              n,
              i = arguments,
              o = i.length;
            if (o > 1) {
              var r = 1;
              d(i[1]) && ((n = i[1]), (r = 2)),
                (e =
                  o === r + 1 &&
                  (f(i[r]) || c(i[r]) || (n && (n._flags & N) === N))
                    ? i[r]
                    : v(i, r));
            }
            return L(t, n, e);
          }
          return (
            (E.patch = function (t, e) {
              !(function (t, e, n) {
                if (null != e.type) {
                  if (null != t.vm) return;
                  j(e, t.parent, t.idx, null),
                    (t.parent.body[t.idx] = e),
                    bt(e, t),
                    n && w(e),
                    K(C(e));
                } else {
                  var i = Object.create(t);
                  i.attrs = _({}, t.attrs);
                  var o = _(t.attrs, e);
                  if (null != t._class) {
                    var r = o.class;
                    o.class =
                      null != r && "" !== r ? t._class + " " + r : t._class;
                  }
                  st(t, i), n && w(t);
                }
              })(this, t, e);
            }),
            (wt.emit = function (t) {
              var e = this,
                n = e,
                i = v(arguments, 1).concat(n, n.data);
              do {
                var o = e.onemit,
                  r = o ? o[t] : null;
                if (r) {
                  r.apply(e, i);
                  break;
                }
              } while ((e = e.parent()));
              Q[t] && Q[t].apply(e, i);
            }),
            (wt.onemit = null),
            (wt.body = function () {
              return (function t(e, n) {
                var i = e.body;
                if (c(i))
                  for (var o = 0; o < i.length; o++) {
                    var r = i[o];
                    null != r.vm ? n.push(r.vm) : t(r, n);
                  }
                return n;
              })(this.node, []);
            }),
            (Dt.defineElementSpread = Ot),
            (Dt.defineSvgElementSpread = function () {
              var t = Ot.apply(null, arguments);
              return (t.ns = Ct), t;
            }),
            Dt
          );
        })();
      },
      function (t, e, n) {
        "use strict";
        function i(t) {
          for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
        }
        Object.defineProperty(e, "__esModule", { value: !0 }),
          i(n(59)),
          i(n(17));
      },
      function (t, e, n) {
        "use strict";
        var i =
          (this && this.__extends) ||
          (function () {
            var t = function (e, n) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                })(e, n);
            };
            return function (e, n) {
              function i() {
                this.constructor = e;
              }
              t(e, n),
                (e.prototype =
                  null === n
                    ? Object.create(n)
                    : ((i.prototype = n.prototype), new i()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(60),
          r = n(17),
          s = n(0),
          a = (function (t) {
            function e(e, n) {
              var i = t.call(this, e, n) || this;
              if (
                ((i._root = i.config.parent || i),
                (i._all = {}),
                i._parseConfig(),
                i.config.activeTab &&
                  (i.config.activeView = i.config.activeTab),
                i.config.views &&
                  ((i.config.activeView =
                    i.config.activeView || i._cells[0].id),
                  (i._isViewLayout = !0)),
                !n.parent)
              ) {
                var o = s.create(
                  {
                    render: function () {
                      return i.toVDOM();
                    },
                  },
                  i
                );
                i.mount(e, o);
              }
              return i;
            }
            return (
              i(e, t),
              (e.prototype.toVDOM = function () {
                if (this._isViewLayout) {
                  var e = [this.getCell(this.config.activeView).toVDOM()];
                  return t.prototype.toVDOM.call(this, e);
                }
                var n = [];
                return (
                  this._cells.forEach(function (t) {
                    var e = t.toVDOM();
                    Array.isArray(e) ? (n = n.concat(e)) : n.push(e);
                  }),
                  t.prototype.toVDOM.call(this, n)
                );
              }),
              (e.prototype.removeCell = function (t) {
                if (this.events.fire(r.LayoutEvents.beforeRemove, [t])) {
                  var e = this.config.parent || this;
                  if (e !== this) return e.removeCell(t);
                  var n = this.getCell(t);
                  if (n) {
                    var i = n.getParent();
                    delete this._all[t],
                      (i._cells = i._cells.filter(function (e) {
                        return e.id !== t;
                      })),
                      i.paint();
                  }
                  this.events.fire(r.LayoutEvents.afterRemove, [t]);
                }
              }),
              (e.prototype.addCell = function (t, e) {
                if (
                  (void 0 === e && (e = -1),
                  this.events.fire(r.LayoutEvents.beforeAdd, [t.id]))
                ) {
                  var n = this._createCell(t);
                  e < 0 && (e = this._cells.length + e + 1),
                    this._cells.splice(e, 0, n),
                    this.paint(),
                    this.events.fire(r.LayoutEvents.afterAdd, [t.id]);
                }
              }),
              (e.prototype.getId = function (t) {
                return (
                  t < 0 && (t = this._cells.length + t),
                  this._cells[t] ? this._cells[t].id : void 0
                );
              }),
              (e.prototype.getRefs = function (t) {
                return this._root.getRootView().refs[t];
              }),
              (e.prototype.getCell = function (t) {
                return this._root._all[t];
              }),
              (e.prototype.forEach = function (t, e, n) {
                if (
                  (void 0 === n && (n = 1 / 0), this._haveCells(e) && !(n < 1))
                ) {
                  var i;
                  i = e ? this._root._all[e]._cells : this._root._cells;
                  for (var o = 0; o < i.length; o++) {
                    var r = i[o];
                    t.call(this, r, o, i),
                      this._haveCells(r.id) && r.forEach(t, r.id, --n);
                  }
                }
              }),
              (e.prototype.cell = function (t) {
                return this.getCell(t);
              }),
              (e.prototype._getCss = function (e) {
                var n = this._xLayout
                    ? "dhx_layout-columns"
                    : "dhx_layout-rows",
                  i = this.config.align
                    ? " " + n + "--" + this.config.align
                    : "";
                if (e)
                  return (
                    n +
                    " dhx_layout-cell" +
                    (this.config.align
                      ? " dhx_layout-cell--" + this.config.align
                      : "")
                  );
                var o = this.config.parent
                    ? t.prototype._getCss.call(this)
                    : "dhx_widget dhx_layout",
                  r = this.config.parent ? "" : " dhx_layout-cell";
                return o + (this.config.full ? r : " " + n) + i;
              }),
              (e.prototype._parseConfig = function () {
                var t = this,
                  e = this.config,
                  n = e.rows || e.cols || e.views || [];
                (this._xLayout = !e.rows),
                  (this._cells = n.map(function (e) {
                    return t._createCell(e);
                  }));
              }),
              (e.prototype._createCell = function (t) {
                var n;
                return (
                  t.rows || t.cols || t.views
                    ? ((t.parent = this._root), (n = new e(this, t)))
                    : (n = new o.Cell(this, t)),
                  (this._root._all[n.id] = n),
                  n
                );
              }),
              (e.prototype._haveCells = function (t) {
                if (t) {
                  var e = this._root._all[t];
                  return e._cells && e._cells.length > 0;
                }
                return Object.keys(this._all).length > 0;
              }),
              e
            );
          })(o.Cell);
        e.Layout = a;
      },
      function (t, e, n) {
        "use strict";
        var i =
            (this && this.__extends) ||
            (function () {
              var t = function (e, n) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                  })(e, n);
              };
              return function (e, n) {
                function i() {
                  this.constructor = e;
                }
                t(e, n),
                  (e.prototype =
                    null === n
                      ? Object.create(n)
                      : ((i.prototype = n.prototype), new i()));
              };
            })(),
          o =
            (this && this.__assign) ||
            function () {
              return (o =
                Object.assign ||
                function (t) {
                  for (var e, n = 1, i = arguments.length; n < i; n++)
                    for (var o in (e = arguments[n]))
                      Object.prototype.hasOwnProperty.call(e, o) &&
                        (t[o] = e[o]);
                  return t;
                }).apply(this, arguments);
            };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(3),
          s = n(0),
          a = n(10),
          l = n(17),
          c = n(61),
          u = n(6),
          d = (function (t) {
            function e(e, n) {
              var i =
                t.call(this, e, r.extend({ gravity: !0, collapsed: !1 }, n)) ||
                this;
              i._disabled = [];
              var o = e;
              return (
                o && o.isVisible && (i._parent = o),
                i._parent && i._parent.events
                  ? (i.events = i._parent.events)
                  : (i.events = new u.EventSystem(i)),
                (i.config.full =
                  void 0 === i.config.full
                    ? Boolean(
                        i.config.header ||
                          i.config.collapsable ||
                          i.config.headerHeight ||
                          i.config.headerIcon ||
                          i.config.headerImage
                      )
                    : i.config.full),
                i._initHandlers(),
                (i.id = i.config.id || r.uid()),
                i
              );
            }
            return (
              i(e, t),
              (e.prototype.paint = function () {
                if (this.isVisible()) {
                  var t = this.getRootView();
                  t ? t.redraw() : this._parent.paint();
                }
              }),
              (e.prototype.isVisible = function () {
                if (!this._parent)
                  return (
                    !(!this._container || !this._container.tagName) ||
                    Boolean(this.getRootNode())
                  );
                var t = this._parent.config.activeView;
                return (
                  (!t || t === this.id) &&
                  !this.config.hidden &&
                  (!this._parent || this._parent.isVisible())
                );
              }),
              (e.prototype.hide = function () {
                this.events.fire(l.LayoutEvents.beforeHide, [this.id]) &&
                  ((this.config.hidden = !0),
                  this._parent && this._parent.paint && this._parent.paint(),
                  this.events.fire(l.LayoutEvents.afterHide, [this.id]));
              }),
              (e.prototype.show = function () {
                this.events.fire(l.LayoutEvents.beforeShow, [this.id]) &&
                  (this._parent && this._parent.config.activeView
                    ? (this._parent.config.activeView = this.id)
                    : (this.config.hidden = !1),
                  this._parent &&
                    !this._parent.isVisible() &&
                    this._parent.show(),
                  this.paint(),
                  this.events.fire(l.LayoutEvents.afterHide, [this.id]));
              }),
              (e.prototype.expand = function () {
                this.events.fire(l.LayoutEvents.beforeExpand, [this.id]) &&
                  ((this.config.collapsed = !1),
                  this.events.fire(l.LayoutEvents.afterExpand, [this.id]),
                  this.paint());
              }),
              (e.prototype.collapse = function () {
                this.events.fire(l.LayoutEvents.beforeCollapse, [this.id]) &&
                  ((this.config.collapsed = !0),
                  this.events.fire(l.LayoutEvents.afterCollapse, [this.id]),
                  this.paint());
              }),
              (e.prototype.toggle = function () {
                this.config.collapsed ? this.expand() : this.collapse();
              }),
              (e.prototype.getParent = function () {
                return this._parent;
              }),
              (e.prototype.destructor = function () {
                (this.config = null), this.unmount();
              }),
              (e.prototype.getWidget = function () {
                return this._ui;
              }),
              (e.prototype.getCellView = function () {
                return this._parent && this._parent.getRefs(this._uid);
              }),
              (e.prototype.attach = function (t, e) {
                return (
                  (this.config.html = null),
                  "object" == typeof t
                    ? (this._ui = t)
                    : "string" == typeof t
                    ? (this._ui = new window.dhx[t](null, e))
                    : "function" == typeof t &&
                      (t.prototype instanceof a.View
                        ? (this._ui = new t(null, e))
                        : (this._ui = {
                            getRootView: function () {
                              return t(e);
                            },
                          })),
                  this.paint(),
                  this._ui
                );
              }),
              (e.prototype.attachHTML = function (t) {
                (this.config.html = t), this.paint();
              }),
              (e.prototype.toVDOM = function (t) {
                var e;
                if (
                  (null === this.config && (this.config = {}),
                  !this.config.hidden)
                ) {
                  var n,
                    i = this._calculateStyle(),
                    a = r.isDefined(this.config.padding)
                      ? { padding: this.config.padding }
                      : {};
                  if (!this.config.html)
                    if (this._ui) {
                      var l = this._ui.getRootView();
                      l.render && (l = s.inject(l)), (n = [l]);
                    } else n = t || null;
                  var c =
                      !this.config.resizable ||
                      this._isLastCell() ||
                      this.config.collapsed
                        ? null
                        : s.el(
                            ".dhx_layout-resizer." +
                              (this._isXDirection()
                                ? "dhx_layout-resizer--x"
                                : "dhx_layout-resizer--y"),
                            o(o({}, this._resizerHandlers), {
                              _ref: "resizer_" + this._uid,
                            }),
                            [
                              s.el("span.dhx_layout-resizer__icon", {
                                class:
                                  "dxi " +
                                  (this._isXDirection()
                                    ? "dxi-dots-vertical"
                                    : "dxi-dots-horizontal"),
                              }),
                            ]
                          ),
                    u = {};
                  if (this.config.on)
                    for (var d in this.config.on)
                      u["on" + d] = this.config.on[d];
                  var h = s.el(
                    "div",
                    o(
                      o(
                        (((e = {
                          _key: this._uid,
                          style:
                            this.config.full || this.config.html
                              ? i
                              : o(o({}, i), a),
                          _ref: this._uid,
                        })["aria-labelledby"] = this.config.id
                          ? "tab-content-" + this.config.id
                          : null),
                        e),
                        u
                      ),
                      {
                        class:
                          this._getCss(!1) +
                          (this.config.css ? " " + this.config.css : "") +
                          (this.config.collapsed
                            ? " dhx_layout-cell--collapsed"
                            : "") +
                          (this.config.resizable
                            ? " dhx_layout-cell--resizeble"
                            : "") +
                          (this.config.gravity
                            ? " dhx_layout-cell--gravity"
                            : ""),
                      }
                    ),
                    this.config.full
                      ? [
                          s.el(
                            "div",
                            {
                              tabindex: this.config.collapsable ? "0" : "-1",
                              class:
                                "dhx_layout-cell-header" +
                                (this._isXDirection()
                                  ? " dhx_layout-cell-header--col"
                                  : " dhx_layout-cell-header--row") +
                                (this.config.collapsable
                                  ? " dhx_layout-cell-header--collapseble"
                                  : "") +
                                (this.config.collapsed
                                  ? " dhx_layout-cell-header--collapsed"
                                  : "") +
                                (((this.getParent() || {}).config || {})
                                  .isAccordion
                                  ? " dhx_layout-cell-header--accordion"
                                  : ""),
                              style: { height: this.config.headerHeight },
                              onclick: this._handlers.toggle,
                              onkeydown: this._handlers.enterCollapse,
                            },
                            [
                              this.config.headerIcon &&
                                s.el("span.dhx_layout-cell-header__icon", {
                                  class: this.config.headerIcon,
                                }),
                              this.config.headerImage &&
                                s.el(".dhx_layout-cell-header__image-wrapper", [
                                  s.el("img", {
                                    src: this.config.headerImage,
                                    class: "dhx_layout-cell-header__image",
                                  }),
                                ]),
                              this.config.header &&
                                s.el(
                                  "h3.dhx_layout-cell-header__title",
                                  this.config.header
                                ),
                              this.config.collapsable
                                ? s.el(
                                    "div.dhx_layout-cell-header__collapse-icon",
                                    { class: this._getCollapseIcon() }
                                  )
                                : s.el(
                                    "div.dhx_layout-cell-header__collapse-icon",
                                    { class: "dxi dxi-empty" }
                                  ),
                            ]
                          ),
                          this.config.collapsed
                            ? null
                            : s.el(
                                "div",
                                {
                                  style: o(o({}, a), {
                                    height:
                                      "calc(100% - " +
                                      (this.config.headerHeight || 37) +
                                      "px)",
                                  }),
                                  ".innerHTML": this.config.html,
                                  class:
                                    this._getCss(!0) +
                                    " dhx_layout-cell-content",
                                },
                                n
                              ),
                        ]
                      : this.config.html
                      ? [
                          s.el(".dhx_layout-cell-content", {
                            ".innerHTML": this.config.html,
                            style: a,
                          }),
                        ]
                      : n
                  );
                  return c ? [h, c] : h;
                }
              }),
              (e.prototype._getCss = function (t) {
                return "dhx_layout-cell";
              }),
              (e.prototype._initHandlers = function () {
                var t = this;
                this._handlers = {
                  enterCollapse: function (e) {
                    13 === e.keyCode && t._handlers.toggle();
                  },
                  collapse: function () {
                    t.config.collapsable && t.collapse();
                  },
                  expand: function () {
                    t.config.collapsable && t.expand();
                  },
                  toggle: function () {
                    t.config.collapsable && t.toggle();
                  },
                };
                var e = {
                    left: null,
                    top: null,
                    isActive: !1,
                    range: null,
                    xLayout: null,
                    nextCell: null,
                    size: null,
                    resizerLength: null,
                    mode: null,
                    percentsum: null,
                  },
                  n = function () {
                    (e.isActive = !1),
                      document.body.classList.remove("dhx_no-select--resize"),
                      document.removeEventListener("mouseup", n),
                      document.removeEventListener("mousemove", i),
                      t.events.fire(l.LayoutEvents.afterResizeEnd, [t.id]);
                  },
                  i = function (n) {
                    if (e.isActive && e.mode !== l.resizeMode.unknown) {
                      var i = e.xLayout
                          ? n.x - e.range.min + window.pageXOffset
                          : n.y - e.range.min + window.pageYOffset,
                        o = e.xLayout ? "width" : "height";
                      switch (
                        (i < 0
                          ? (i = e.resizerLength / 2)
                          : i > e.size && (i = e.size - e.resizerLength),
                        e.mode)
                      ) {
                        case l.resizeMode.pixels:
                          (t.config[o] = i - e.resizerLength / 2 + "px"),
                            (e.nextCell.config[o] =
                              e.size - i - e.resizerLength / 2 + "px");
                          break;
                        case l.resizeMode.mixedpx1:
                          t.config[o] = i - e.resizerLength / 2 + "px";
                          break;
                        case l.resizeMode.mixedpx2:
                          e.nextCell.config[o] =
                            e.size - i - e.resizerLength / 2 + "px";
                          break;
                        case l.resizeMode.percents:
                          (t.config[o] = (i / e.size) * e.percentsum + "%"),
                            (e.nextCell.config[o] =
                              ((e.size - i) / e.size) * e.percentsum + "%");
                          break;
                        case l.resizeMode.mixedperc1:
                          t.config[o] = (i / e.size) * e.percentsum + "%";
                          break;
                        case l.resizeMode.mixedperc2:
                          e.nextCell.config[o] =
                            ((e.size - i) / e.size) * e.percentsum + "%";
                      }
                      t.paint(), t.events.fire(l.LayoutEvents.resize, [t.id]);
                    }
                  };
                this._resizerHandlers = {
                  onmousedown: function (o) {
                    if (
                      3 !== o.which &&
                      (e.isActive && n(),
                      t.events.fire(l.LayoutEvents.beforeResizeStart, [t.id]))
                    ) {
                      document.body.classList.add("dhx_no-select--resize");
                      var r = t.getCellView(),
                        s = t._getNextCell(),
                        a = s.getCellView(),
                        u = t._getResizerView(),
                        d = r.el.getBoundingClientRect(),
                        h = u.el.getBoundingClientRect(),
                        f = a.el.getBoundingClientRect();
                      if (
                        ((e.xLayout = t._isXDirection()),
                        (e.left = d.left + window.pageXOffset),
                        (e.top = d.top + window.pageYOffset),
                        (e.range = c.getBlockRange(d, f, e.xLayout)),
                        (e.size = e.range.max - e.range.min),
                        (e.isActive = !0),
                        (e.nextCell = s),
                        (e.resizerLength = e.xLayout ? h.width : h.height),
                        (e.mode = c.getResizeMode(
                          e.xLayout,
                          t.config,
                          s.config
                        )),
                        e.mode === l.resizeMode.percents)
                      ) {
                        var p = e.xLayout ? "width" : "height";
                        e.percentsum =
                          parseFloat(t.config[p]) + parseFloat(s.config[p]);
                      }
                      if (e.mode === l.resizeMode.mixedperc1) {
                        p = e.xLayout ? "width" : "height";
                        e.percentsum =
                          (1 / (d[p] / (e.size - e.resizerLength))) *
                          parseFloat(t.config[p]);
                      }
                      if (e.mode === l.resizeMode.mixedperc2) {
                        p = e.xLayout ? "width" : "height";
                        e.percentsum =
                          (1 / (f[p] / (e.size - e.resizerLength))) *
                          parseFloat(s.config[p]);
                      }
                      document.addEventListener("mouseup", n),
                        document.addEventListener("mousemove", i);
                    }
                  },
                  ondragstart: function (t) {
                    return t.preventDefault();
                  },
                };
              }),
              (e.prototype._getCollapseIcon = function () {
                return this._isXDirection() && this.config.collapsed
                  ? "dxi dxi-chevron-right"
                  : this._isXDirection() && !this.config.collapsed
                  ? "dxi dxi-chevron-left"
                  : !this._isXDirection() && this.config.collapsed
                  ? "dxi dxi-chevron-up"
                  : this._isXDirection() || this.config.collapsed
                  ? void 0
                  : "dxi dxi-chevron-down";
              }),
              (e.prototype._isLastCell = function () {
                var t = this._parent;
                return t && t._cells.indexOf(this) === t._cells.length - 1;
              }),
              (e.prototype._getNextCell = function () {
                var t = this._parent,
                  e = t._cells.indexOf(this);
                return t._cells[e + 1];
              }),
              (e.prototype._getResizerView = function () {
                return this._parent.getRefs("resizer_" + this._uid);
              }),
              (e.prototype._isXDirection = function () {
                return this._parent && this._parent._xLayout;
              }),
              (e.prototype._calculateStyle = function () {
                var t = this.config;
                if (t) {
                  var e = {};
                  return (
                    this._isXDirection()
                      ? (void 0 === t.width ||
                          t.collapsed ||
                          ((e.flexBasis = t.width), (e.width = t.width)),
                        void 0 !== t.height && (e.height = t.height))
                      : (void 0 === t.height ||
                          t.collapsed ||
                          (e.height = t.height),
                        void 0 !== t.width && (e.width = t.width)),
                    e
                  );
                }
              }),
              e
            );
          })(a.View);
        e.Cell = d;
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(17);
        (e.getResizeMode = function (t, e, n) {
          var o = t ? "width" : "height",
            r = e[o] && -1 !== e[o].indexOf("%"),
            s = n[o] && -1 !== n[o].indexOf("%"),
            a = e[o] && -1 !== e[o].indexOf("px"),
            l = n[o] && -1 !== n[o].indexOf("px");
          return r && s
            ? i.resizeMode.percents
            : a && l
            ? i.resizeMode.pixels
            : a && !l
            ? i.resizeMode.mixedpx1
            : l && !a
            ? i.resizeMode.mixedpx2
            : r
            ? i.resizeMode.mixedperc1
            : s
            ? i.resizeMode.mixedperc2
            : i.resizeMode.unknown;
        }),
          (e.getBlockRange = function (t, e, n) {
            return (
              void 0 === n && (n = !0),
              n
                ? {
                    min: t.left + window.pageXOffset,
                    max: e.right + window.pageXOffset,
                  }
                : {
                    min: t.top + window.pageYOffset,
                    max: e.bottom + window.pageYOffset,
                  }
            );
          });
      },
      function (t, e, n) {
        "use strict";
        var i =
          (this && this.__extends) ||
          (function () {
            var t = function (e, n) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                })(e, n);
            };
            return function (e, n) {
              function i() {
                this.constructor = e;
              }
              t(e, n),
                (e.prototype =
                  null === n
                    ? Object.create(n)
                    : ((i.prototype = n.prototype), new i()));
            };
          })();
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(3),
          r = n(0),
          s = n(1),
          a = n(30),
          l = n(11),
          c = (function (t) {
            function e(e, n) {
              var i =
                t.call(this, e, o.extend({ navigationType: "click" }, n)) ||
                this;
              i._currentRoot = null;
              return (
                i.mount(
                  e,
                  r.create({
                    render: function () {
                      return i._draw();
                    },
                  })
                ),
                i
              );
            }
            return (
              i(e, t),
              (e.prototype.getState = function () {
                var t = {};
                for (var e in (this.data.eachChild(
                  this.data.getRoot(),
                  function (e) {
                    e.twoState && !e.group
                      ? (t[e.id] = e.active)
                      : (e.type !== a.ItemType.input &&
                          e.type !== a.ItemType.selectButton) ||
                        (t[e.id] = e.value);
                  },
                  !1
                ),
                this._groups))
                  this._groups[e].active && (t[e] = this._groups[e].active);
                return t;
              }),
              (e.prototype.setState = function (t) {
                for (var e in t)
                  if (this._groups && this._groups[e])
                    this._groups[e].active &&
                      (this.data.update(this._groups[e].active, { active: !1 }),
                      (this._groups[e].active = t[e]),
                      this.data.update(t[e], { active: !0 }));
                  else {
                    var n = this.data.getItem(e);
                    n.type === a.ItemType.input ||
                    n.type === a.ItemType.selectButton
                      ? this.data.update(e, { value: t[e] })
                      : this.data.update(e, { active: t[e] });
                  }
              }),
              (e.prototype._customHandlers = function () {
                var t = this;
                return {
                  input: function (e) {
                    var n = s.locate(e);
                    t.data.update(n, { value: e.target.value });
                  },
                  tooltip: function (e) {
                    var n = s.locateNode(e);
                    if (n) {
                      var i = n.getAttribute("dhx_id"),
                        o = t.data.getItem(i);
                      o.tooltip &&
                        l.tooltip(o.tooltip, {
                          node: n,
                          position: l.Position.bottom,
                        });
                    }
                  },
                };
              }),
              (e.prototype._getFactory = function () {
                return a.createFactory({
                  widget: this,
                  defaultType: a.ItemType.navItem,
                  allowedTypes: [
                    a.ItemType.button,
                    a.ItemType.customHTMLButton,
                    a.ItemType.imageButton,
                    a.ItemType.input,
                    a.ItemType.selectButton,
                    a.ItemType.separator,
                    a.ItemType.spacer,
                    a.ItemType.title,
                    a.ItemType.navItem,
                    a.ItemType.menuItem,
                    a.ItemType.customHTML,
                  ],
                  widgetName: "toolbar",
                });
              }),
              (e.prototype._draw = function () {
                var t = this;
                return r.el(
                  "nav.dhx_widget.dhx_toolbar",
                  { class: this.config.css ? this.config.css : "" },
                  [
                    r.el(
                      "ul.dhx_navbar.dhx_navbar--horizontal",
                      {
                        dhx_widget_id: this._uid,
                        tabindex: 0,
                        onclick: this._handlers.onclick,
                        onmousedown: this._handlers.onmousedown,
                        oninput: this._handlers.input,
                        onmouseover: this._handlers.tooltip,
                        _hooks: {
                          didInsert: function (e) {
                            e.el.addEventListener(
                              "keyup",
                              function (e) {
                                if (9 === e.which) {
                                  var n = s.locateNode(document.activeElement);
                                  if (n) {
                                    var i = n.getAttribute("dhx_id"),
                                      o = t.data.getItem(i);
                                    o.tooltip &&
                                      l.tooltip(o.tooltip, {
                                        node: n,
                                        position: l.Position.bottom,
                                        force: !0,
                                      });
                                  }
                                }
                              },
                              !0
                            );
                          },
                        },
                      },
                      this.data.map(
                        function (e) {
                          return t._factory(e);
                        },
                        this.data.getRoot(),
                        !1
                      )
                    ),
                  ]
                );
              }),
              (e.prototype._getMode = function (t, e) {
                return t.id === e ? "bottom" : "right";
              }),
              (e.prototype._close = function (e) {
                (this._activePosition = null),
                  (this._currentRoot = null),
                  t.prototype._close.call(this, e);
              }),
              (e.prototype._setRoot = function (t) {
                this.data.getParent(t) === this.data.getRoot() &&
                  (this._currentRoot = t);
              }),
              e
            );
          })(a.Navbar);
        e.Toolbar = c;
      },
      function (t, e, n) {
        "use strict";
        var i =
            (this && this.__extends) ||
            (function () {
              var t = function (e, n) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                  })(e, n);
              };
              return function (e, n) {
                function i() {
                  this.constructor = e;
                }
                t(e, n),
                  (e.prototype =
                    null === n
                      ? Object.create(n)
                      : ((i.prototype = n.prototype), new i()));
              };
            })(),
          o =
            (this && this.__assign) ||
            function () {
              return (o =
                Object.assign ||
                function (t) {
                  for (var e, n = 1, i = arguments.length; n < i; n++)
                    for (var o in (e = arguments[n]))
                      Object.prototype.hasOwnProperty.call(e, o) &&
                        (t[o] = e[o]);
                  return t;
                }).apply(this, arguments);
            };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(3),
          s = n(0),
          a = n(6),
          l = n(1),
          c = n(64),
          u = n(10),
          d = n(31),
          h = n(13),
          f = (function (t) {
            function e(e, n) {
              var i = t.call(this, e, r.extend({}, n)) || this;
              return (
                (i._isContextMenu = !1),
                (i._documentHaveListener = !1),
                (i._rootItem = {}),
                Array.isArray(i.config.data)
                  ? ((i.events = new a.EventSystem(i)),
                    (i.data = new d.TreeCollection({}, i.events)))
                  : i.config.data && i.config.data.events
                  ? ((i.data = i.config.data),
                    (i.events = i.data.events),
                    (i.events.context = i))
                  : ((i.events = new a.EventSystem(i)),
                    (i.data = new d.TreeCollection({}, i.events))),
                (i._documentClick = function (t) {
                  i._documentHaveListener &&
                    (document.removeEventListener("click", i._documentClick),
                    (i._documentHaveListener = !1),
                    i._close(t));
                }),
                (i._currentRoot = i.data.getRoot()),
                (i._factory = i._getFactory()),
                i._initHandlers(),
                i._init(),
                i._initEvents(),
                Array.isArray(i.config.data) && i.data.parse(i.config.data),
                i
              );
            }
            return (
              i(e, t),
              (e.prototype.paint = function () {
                t.prototype.paint.call(this), this._vpopups.redraw();
              }),
              (e.prototype.disable = function (t) {
                this._setProp(t, "disabled", !0);
              }),
              (e.prototype.enable = function (t) {
                this._setProp(t, "disabled", !1);
              }),
              (e.prototype.isDisabled = function (t) {
                var e = this.data.getItem(t);
                if (e) return e.disabled || !1;
              }),
              (e.prototype.show = function (t) {
                this._setProp(t, "hidden", !1);
              }),
              (e.prototype.hide = function (t) {
                this._setProp(t, "hidden", !0);
              }),
              (e.prototype.destructor = function () {
                this.unmount(),
                  c.keyManager.removeHotKey(null, this),
                  this._vpopups.unmount();
              }),
              (e.prototype._customHandlers = function () {
                return {};
              }),
              (e.prototype._close = function (t) {
                var e = this;
                this._popupActive &&
                  this.events.fire(h.NavigationBarEvents.beforeHide, [
                    this._activeMenu,
                    t,
                  ]) &&
                  (this._activeParents &&
                    this._activeParents.forEach(function (t) {
                      return (
                        e.data.exists(t) &&
                        e.data.update(t, { $activeParent: !1 })
                      );
                    }),
                  this.config.navigationType === h.NavigationType.click &&
                    (this._isActive = !1),
                  clearTimeout(this._currentTimeout),
                  (this._popupActive = !1),
                  (this._activeMenu = null),
                  this.events.fire(h.NavigationBarEvents.afterHide, [t]),
                  this.paint());
              }),
              (e.prototype._init = function () {
                var t = this;
                (this._vpopups = s.create({
                  render: function () {
                    return s.el(
                      "div",
                      {
                        dhx_widget_id: t._uid,
                        class: t._isContextMenu ? " dhx_context-menu" : "",
                        onmousemove: t._handlers.onmousemove,
                        onmouseleave: t._handlers.onmouseleave,
                        onclick: t._handlers.onclick,
                        onmousedown: t._handlers.onmousedown,
                      },
                      t._drawPopups()
                    );
                  },
                })),
                  this._vpopups.mount(document.body);
              }),
              (e.prototype._initHandlers = function () {
                var t = this;
                (this._isActive =
                  this.config.navigationType !== h.NavigationType.click),
                  (this._handlers = o(
                    {
                      onmousemove: function (e) {
                        if (t._isActive) {
                          var n = l.locateNode(e);
                          if (n) {
                            var i = n.getAttribute("dhx_id");
                            if (t._activeMenu !== i) {
                              if (t.data.haveItems(i)) {
                                var o = l.getRealPosition(n);
                                t.data.update(i, { $position: o }, !1);
                              }
                              t._activeItemChange(i, e);
                            }
                          }
                        }
                      },
                      onmouseleave: function (e) {
                        if (
                          t.config.navigationType !== h.NavigationType.click
                        ) {
                          if (t._popupActive) {
                            var n = l.locateNode(e, "dhx_id", "relatedTarget");
                            if (n) {
                              var i = n.getAttribute("dhx_id");
                              t.data.getItem(i) || t._close(e);
                            } else t._close(e);
                          }
                          t._activeItemChange(null, e);
                        }
                      },
                      onclick: function (e) {
                        var n = l.locateNode(e);
                        if (n) {
                          var i = n.getAttribute("dhx_id"),
                            o = t.data.getItem(i);
                          if (!o.multiClick)
                            if (t.data.haveItems(i)) {
                              if (i === t._currentRoot) return;
                              t._isActive || (t._isActive = !0), t._setRoot(i);
                              var r = l.getRealPosition(n);
                              t.data.update(i, { $position: r }, !1),
                                t._activeItemChange(i, e);
                            } else
                              switch (o.type) {
                                case h.ItemType.input:
                                case h.ItemType.title:
                                  break;
                                case h.ItemType.menuItem:
                                case h.ItemType.selectButton:
                                  t._onMenuItemClick(i, e);
                                  break;
                                case h.ItemType.imageButton:
                                case h.ItemType.button:
                                case h.ItemType.customHTMLButton:
                                case h.ItemType.navItem:
                                  o.twoState &&
                                    t.data.update(o.id, { active: !o.active }),
                                    t.events.fire(h.NavigationBarEvents.click, [
                                      i,
                                      e,
                                    ]);
                                default:
                                  t._close(e);
                              }
                        }
                      },
                      onmousedown: function (e) {
                        var n = l.locateNode(e);
                        if (n) {
                          var i = n.getAttribute("dhx_id");
                          if (t.data.getItem(i).multiClick) {
                            var o,
                              r = 365,
                              s = function () {
                                t.events.fire(h.NavigationBarEvents.click, [
                                  i,
                                  e,
                                ]),
                                  r > 50 && (r -= 55),
                                  (o = setTimeout(s, r));
                              },
                              a = function () {
                                clearTimeout(o),
                                  document.removeEventListener("mouseup", a);
                              };
                            s(), document.addEventListener("mouseup", a);
                          }
                        }
                      },
                    },
                    this._customHandlers()
                  ));
              }),
              (e.prototype._initEvents = function () {
                var t = this,
                  e = null;
                this.data.events.on(h.DataEvents.change, function () {
                  t.paint(),
                    e && clearTimeout(e),
                    (e = setTimeout(function () {
                      var n = {};
                      t.data.eachChild(
                        t.data.getRoot(),
                        function (t) {
                          t.group &&
                            ((t.twoState = !0),
                            (function (t, e) {
                              t[e.group]
                                ? (e.active && (t[e.group].active = e.id),
                                  t[e.group].elements.push(e.id))
                                : (t[e.group] = {
                                    active: e.active ? e.id : null,
                                    elements: [e.id],
                                  });
                            })(n, t));
                        },
                        !0
                      ),
                        (t._groups = n),
                        t._resetHotkeys(),
                        (e = null),
                        t.paint();
                    }, 100));
                }),
                  this.events.on(h.NavigationBarEvents.click, function (e) {
                    var n = t.data.getItem(e),
                      i = t.data.getItem(n.parent);
                    if (
                      (i &&
                        i.type === h.ItemType.selectButton &&
                        t.data.update(n.parent, {
                          value: n.value,
                          icon: n.icon,
                        }),
                      n.group)
                    ) {
                      var o = t._groups[n.group];
                      o.active && t.data.update(o.active, { active: !1 }),
                        (o.active = n.id),
                        t.data.update(n.id, { active: !0 });
                    }
                  }),
                  this._customInitEvents();
              }),
              (e.prototype._getMode = function (t, e, n) {
                return (
                  void 0 === n && (n = !1), t.parent === e ? "bottom" : "right"
                );
              }),
              (e.prototype._drawMenuItems = function (t, e) {
                var n = this;
                return (
                  void 0 === e && (e = !0),
                  this.data.map(
                    function (t) {
                      return n._factory(t, e);
                    },
                    t,
                    !1
                  )
                );
              }),
              (e.prototype._setRoot = function (t) {}),
              (e.prototype._getParents = function (t, e) {
                var n = [],
                  i = !1,
                  o = this.data.getItem(t),
                  r = o && o.disabled;
                return (
                  this.data.eachParent(
                    t,
                    function (t) {
                      t.id === e ? (n.push(t.id), (i = !0)) : i || n.push(t.id);
                    },
                    !r
                  ),
                  this._isContextMenu && this._activePosition && n.push(e),
                  n
                );
              }),
              (e.prototype._listenOuterClick = function () {
                this._documentHaveListener ||
                  (document.addEventListener("click", this._documentClick, !0),
                  (this._documentHaveListener = !0));
              }),
              (e.prototype._customInitEvents = function () {}),
              (e.prototype._drawPopups = function () {
                var t = this,
                  e = this._activeMenu;
                if (!this._isContextMenu && !e) return null;
                var n = this._currentRoot;
                if (this._isContextMenu && !this._activePosition) return null;
                var i = this._getParents(e, n);
                return (
                  (this._activeParents = i),
                  i.forEach(function (e) {
                    return (
                      t.data.exists(e) &&
                      t.data.update(e, { $activeParent: !0 }, !1)
                    );
                  }),
                  i
                    .map(function (e) {
                      if (!t.data.haveItems(e)) return null;
                      var i = t.data.getItem(e) || t._rootItem;
                      return (
                        (t._popupActive = !0),
                        s.el(
                          "ul",
                          {
                            class:
                              "dhx_widget dhx_menu" +
                              (t.config.menuCss ? " " + t.config.menuCss : ""),
                            _key: e,
                            _hooks: {
                              didInsert: function (o) {
                                var r = o.el.getBoundingClientRect(),
                                  s = r.width,
                                  a = r.height,
                                  c =
                                    t._isContextMenu &&
                                    t._activePosition &&
                                    e === n
                                      ? t._activePosition
                                      : i.$position,
                                  u = t._getMode(i, n, c === t._activePosition),
                                  d = l.calculatePosition(c, {
                                    mode: u,
                                    width: s,
                                    height: a,
                                  });
                                (i.$style = d), o.patch({ style: d });
                              },
                              didRecycle: function (o, r) {
                                if (
                                  t._isContextMenu &&
                                  t._activePosition &&
                                  e === n
                                ) {
                                  var s = r.el.getBoundingClientRect(),
                                    a = s.width,
                                    c = s.height,
                                    u = l.calculatePosition(t._activePosition, {
                                      mode: t._getMode(i, n, !0),
                                      width: a,
                                      height: c,
                                    });
                                  (i.$style = u), r.patch({ style: u });
                                }
                              },
                            },
                            tabindex: 0,
                            style: i.$style || { position: "absolute" },
                          },
                          t._drawMenuItems(e)
                        )
                      );
                    })
                    .reverse()
                );
              }),
              (e.prototype._onMenuItemClick = function (t, e) {
                var n = this.data.getItem(t);
                n.disabled ||
                  (n.twoState && this.data.update(n.id, { active: !n.active }),
                  this.events.fire(h.NavigationBarEvents.click, [t, e]),
                  this._close(e));
              }),
              (e.prototype._activeItemChange = function (t, e) {
                var n = this;
                if (this._activeParents) {
                  var i = this._getParents(t, this._currentRoot);
                  this._activeParents.forEach(function (t) {
                    n.data.exists(t) &&
                      -1 === i.indexOf(t) &&
                      n.data.update(t, { $activeParent: !1 }, !1);
                  });
                }
                t && !this._documentHaveListener && this._listenOuterClick(),
                  t && this.data.haveItems(t)
                    ? ((this._activeMenu === t && this._popupActive) ||
                        this.events.fire(h.NavigationBarEvents.openMenu, [t]),
                      (this._activeMenu = t),
                      clearTimeout(this._currentTimeout),
                      this.paint())
                    : (clearTimeout(this._currentTimeout),
                      (this._currentTimeout = setTimeout(function () {
                        return n.paint();
                      }, 400)));
              }),
              (e.prototype._resetHotkeys = function () {
                var t = this;
                c.keyManager.removeHotKey(null, this),
                  this.data.map(function (e) {
                    e.hotkey &&
                      c.keyManager.addHotKey(
                        e.hotkey,
                        function () {
                          return t._onMenuItemClick(e.id, null);
                        },
                        t
                      );
                  });
              }),
              (e.prototype._setProp = function (t, e, n) {
                var i,
                  o = this;
                Array.isArray(t)
                  ? t.forEach(function (t) {
                      var i;
                      return o.data.update(t, (((i = {})[e] = n), i));
                    })
                  : this.data.update(t, (((i = {})[e] = n), i));
              }),
              e
            );
          })(u.View);
        e.Navbar = f;
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(1);
        function o(t) {
          for (
            var e = t.toLowerCase().match(/\w+/g), n = 0, i = "", o = 0;
            o < e.length;
            o++
          ) {
            var r = e[o];
            "ctrl" === r
              ? (n += 4)
              : "shift" === r
              ? (n += 2)
              : "alt" === r
              ? (n += 1)
              : (i = r);
          }
          return n + i;
        }
        var r = (function () {
          function t() {
            var t = this;
            (this._keysStorage = {}),
              document.addEventListener("keydown", function (e) {
                var n,
                  o =
                    (e.ctrlKey || e.metaKey ? 4 : 0) +
                    (e.shiftKey ? 2 : 0) +
                    (e.altKey ? 1 : 0) +
                    ((n =
                      (e.which >= 48 && e.which <= 57) ||
                      (e.which >= 65 && e.which <= 90)
                        ? String.fromCharCode(e.which)
                        : 32 !== e.which || i.isIE()
                        ? e.key
                        : e.code) && n.toLowerCase()),
                  r = t._keysStorage[o];
                if (r) for (var s = 0; s < r.length; s++) r[s].handler(e);
              });
          }
          return (
            (t.prototype.addHotKey = function (t, e, n) {
              var i = o(t);
              this._keysStorage[i] || (this._keysStorage[i] = []),
                this._keysStorage[i].push({ handler: e, scope: n });
            }),
            (t.prototype.removeHotKey = function (t, e) {
              var n = this._keysStorage;
              t && delete n[(i = o(t))];
              if (e)
                for (var i in n) {
                  for (var r = [], s = 0; s < n[i].length; s++)
                    n[i][s].scope === e && r.push(s);
                  if (n[i].length === r.length) delete n[i];
                  else for (s = r.length - 1; s >= 0; s--) n[i].splice(r[s], 1);
                }
            }),
            (t.prototype.exist = function (t) {
              var e = o(t);
              return !!this._keysStorage[e];
            }),
            t
          );
        })();
        (e.keyManager = new r()),
          (e.addHotkeys = function (t, n) {
            var i = new Date(),
              o = function (t) {
                return function (e) {
                  (n && !1 === n()) || t(e);
                };
              };
            for (var r in t) e.keyManager.addHotKey(r, o(t[r]), i);
            return function () {
              return e.keyManager.removeHotKey(void 0, i);
            };
          });
      },
      function (t, e, n) {
        "use strict";
        (function (t) {
          var i =
            (this && this.__assign) ||
            function () {
              return (i =
                Object.assign ||
                function (t) {
                  for (var e, n = 1, i = arguments.length; n < i; n++)
                    for (var o in (e = arguments[n]))
                      Object.prototype.hasOwnProperty.call(e, o) &&
                        (t[o] = e[o]);
                  return t;
                }).apply(this, arguments);
            };
          Object.defineProperty(e, "__esModule", { value: !0 });
          var o = n(9),
            r = n(8),
            s = (function () {
              function e(t, e) {
                (this._parent = t), (this._changes = e);
              }
              return (
                (e.prototype.load = function (t, e) {
                  var n = this;
                  if (
                    !t.config ||
                    this._parent.events.fire(r.DataEvents.beforeLazyLoad, [])
                  )
                    return (this._parent.loadData = t
                      .load()
                      .then(function (t) {
                        return t ? n.parse(t, e) : [];
                      })
                      .catch(function (t) {
                        n._parent.events.fire(r.DataEvents.loadError, [t]);
                      }));
                }),
                (e.prototype.parse = function (t, e) {
                  var n = this;
                  if (
                    (void 0 === e && (e = "json"),
                    "json" !== e ||
                      o.hasJsonOrArrayStructure(t) ||
                      this._parent.events.fire(r.DataEvents.loadError, [
                        "Uncaught SyntaxError: Unexpected end of input",
                      ]),
                    !(
                      (t = (e = o.toDataDriver(e)).toJsonArray(t)) instanceof
                      Array
                    ))
                  ) {
                    var s = t.total_count - 1,
                      a = t.from;
                    if (((t = t.data), 0 !== this._parent.getLength()))
                      return (
                        t.forEach(function (t, e) {
                          var r = a + e,
                            s = n._parent.getId(r);
                          if (s) {
                            var l = n._parent.getItem(s);
                            l &&
                              l.$empty &&
                              (n._parent.changeId(s, t.id, !0),
                              n._parent.update(
                                t.id,
                                i(i({}, t), { $empty: void 0 }),
                                !0
                              ));
                          } else o.dhxWarning("item not found");
                        }),
                        this._parent.events.fire(r.DataEvents.afterLazyLoad, [
                          a,
                          t.length,
                        ]),
                        this._parent.events.fire(r.DataEvents.change),
                        t
                      );
                    for (var l = [], c = 0, u = 0; c <= s; c++)
                      c >= a && c <= a + t.length - 1
                        ? (l.push(t[u]), u++)
                        : l.push({ $empty: !0 });
                    t = l;
                  }
                  return (
                    this._parent.getInitialData() && this._parent.removeAll(),
                    this._parent.$parse(t),
                    t
                  );
                }),
                (e.prototype.save = function (e) {
                  for (
                    var n = this,
                      i = function (i) {
                        if (i.saving || i.pending)
                          o.dhxWarning("item is saving");
                        else {
                          var s = r._findPrevState(i.id);
                          if (s && s.saving) {
                            var a = new t(function (t, r) {
                              s.promise
                                .then(function () {
                                  (i.pending = !1), t(n._setPromise(i, e));
                                })
                                .catch(function (t) {
                                  n._removeFromOrder(s),
                                    n._setPromise(i, e),
                                    o.dhxWarning(t),
                                    r(t);
                                });
                            });
                            r._addToChain(a), (i.pending = !0);
                          } else r._setPromise(i, e);
                        }
                      },
                      r = this,
                      s = 0,
                      a = this._changes.order;
                    s < a.length;
                    s++
                  ) {
                    i(a[s]);
                  }
                  this._parent.saveData.then(function () {
                    n._saving = !1;
                  });
                }),
                (e.prototype._setPromise = function (t, e) {
                  var n = this;
                  return (
                    (t.promise = e.save(t.obj, t.status)),
                    t.promise
                      .then(function () {
                        n._removeFromOrder(t);
                      })
                      .catch(function (e) {
                        (t.saving = !1), (t.error = !0), o.dhxError(e);
                      }),
                    (t.saving = !0),
                    (this._saving = !0),
                    this._addToChain(t.promise),
                    t.promise
                  );
                }),
                (e.prototype._addToChain = function (t) {
                  this._parent.saveData && this._saving
                    ? (this._parent.saveData = this._parent.saveData.then(
                        function () {
                          return t;
                        }
                      ))
                    : (this._parent.saveData = t);
                }),
                (e.prototype._findPrevState = function (t) {
                  for (var e = 0, n = this._changes.order; e < n.length; e++) {
                    var i = n[e];
                    if (i.id === t) return i;
                  }
                  return null;
                }),
                (e.prototype._removeFromOrder = function (t) {
                  this._changes.order = this._changes.order.filter(function (
                    e
                  ) {
                    return !o.isEqualObj(e, t);
                  });
                }),
                e
              );
            })();
          e.Loader = s;
        }.call(this, n(5)));
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(67);
        var o = (function () {
          function t() {}
          return (
            (t.prototype.toJsonArray = function (t) {
              return this.getRows(t);
            }),
            (t.prototype.toJsonObject = function (t) {
              var e;
              return (
                "string" == typeof t && (e = this._fromString(t)),
                (function t(e, n) {
                  n = n || {};
                  var i = e.attributes;
                  if (i && i.length)
                    for (var o = 0; o < i.length; o++)
                      n[i[o].name] = i[o].value;
                  var r = e.childNodes;
                  for (o = 0; o < r.length; o++)
                    if (1 === r[o].nodeType) {
                      var s = r[o].tagName;
                      n[s]
                        ? ("function" != typeof n[s].push && (n[s] = [n[s]]),
                          n[s].push(t(r[o], {})))
                        : (n[s] = t(r[o], {}));
                    }
                  return n;
                })(e)
              );
            }),
            (t.prototype.serialize = function (t) {
              return i.jsonToXML(t);
            }),
            (t.prototype.getFields = function (t) {
              return t;
            }),
            (t.prototype.getRows = function (t) {
              if (("string" == typeof t && (t = this._fromString(t)), t)) {
                var e =
                  t.childNodes && t.childNodes[0] && t.childNodes[0].childNodes;
                return e && e.length ? this._getRows(e) : null;
              }
              return [];
            }),
            (t.prototype._getRows = function (t) {
              for (var e = [], n = 0; n < t.length; n++)
                "item" === t[n].tagName && e.push(this._nodeToJS(t[n]));
              return e;
            }),
            (t.prototype._fromString = function (t) {
              try {
                return new DOMParser().parseFromString(t, "text/xml");
              } catch (t) {
                return null;
              }
            }),
            (t.prototype._nodeToJS = function (t) {
              var e = {};
              if (this._haveAttrs(t))
                for (var n = t.attributes, i = 0; i < n.length; i++) {
                  var o = n[i],
                    r = o.name,
                    s = o.value;
                  e[r] = this._toType(s);
                }
              if (3 === t.nodeType)
                return (e.value = e.value || this._toType(t.textContent)), e;
              var a = t.childNodes;
              if (a)
                for (i = 0; i < a.length; i++) {
                  var l = a[i],
                    c = l.tagName;
                  c &&
                    ("items" === c && l.childNodes
                      ? (e[c] = this._getRows(l.childNodes))
                      : this._haveAttrs(l)
                      ? (e[c] = this._nodeToJS(l))
                      : (e[c] = this._toType(l.textContent)));
                }
              return e;
            }),
            (t.prototype._toType = function (t) {
              return "false" === t || "true" === t
                ? "true" === t
                : isNaN(t)
                ? t
                : Number(t);
            }),
            (t.prototype._haveAttrs = function (t) {
              return t.attributes && t.attributes.length;
            }),
            t
          );
        })();
        e.XMLDriver = o;
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = 4;
        function o(t) {
          return " ".repeat(t);
        }
        function r(t, e) {
          void 0 === e && (e = i);
          var n = o(e) + "<item>\n";
          for (var s in t)
            Array.isArray(t[s])
              ? ((n += o(e + i) + "<" + s + ">\n"),
                (n +=
                  t[s]
                    .map(function (t) {
                      return r(t, e + 2 * i);
                    })
                    .join("\n") + "\n"),
                (n += o(e + i) + "</" + s + ">\n"))
              : (n += o(e + i) + "<" + s + ">" + t[s] + "</" + s + ">\n");
          return (n += o(e) + "</item>");
        }
        e.jsonToXML = function (t, e) {
          void 0 === e && (e = "root");
          for (
            var n = '<?xml version="1.0" encoding="iso-8859-1"?>\n<' + e + ">",
              i = 0;
            i < t.length;
            i++
          )
            n += "\n" + r(t[i]);
          return n + "\n</" + e + ">";
        };
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(9),
          o = (function () {
            function t() {}
            return (
              (t.prototype.sort = function (t, e) {
                var n = this;
                e.rule && "function" == typeof e.rule
                  ? this._sort(t, e)
                  : e.by &&
                    ((e.rule = function (t, o) {
                      var r = n._checkVal(e.as, t[e.by]),
                        s = n._checkVal(e.as, o[e.by]);
                      return i.naturalCompare(r.toString(), s.toString());
                    }),
                    this._sort(t, e));
              }),
              (t.prototype._checkVal = function (t, e) {
                return t ? t.call(this, e) : e;
              }),
              (t.prototype._sort = function (t, e) {
                var n = this,
                  i = { asc: 1, desc: -1 };
                return t.sort(function (t, o) {
                  return e.rule.call(n, t, o) * (i[e.dir] || i.asc);
                });
              }),
              t
            );
          })();
        e.Sort = o;
      },
      function (t, e, n) {
        "use strict";
        var i =
            (this && this.__extends) ||
            (function () {
              var t = function (e, n) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                  })(e, n);
              };
              return function (e, n) {
                function i() {
                  this.constructor = e;
                }
                t(e, n),
                  (e.prototype =
                    null === n
                      ? Object.create(n)
                      : ((i.prototype = n.prototype), new i()));
              };
            })(),
          o =
            (this && this.__spreadArrays) ||
            function () {
              for (var t = 0, e = 0, n = arguments.length; e < n; e++)
                t += arguments[e].length;
              var i = Array(t),
                o = 0;
              for (e = 0; e < n; e++)
                for (var r = arguments[e], s = 0, a = r.length; s < a; s++, o++)
                  i[o] = r[s];
              return i;
            };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(3),
          s = n(32),
          a = n(12),
          l = n(9),
          c = n(8);
        function u(t, e, n, i) {
          void 0 !== i && -1 !== i && t[n] && t[n][i]
            ? t[n].splice(i, 0, e)
            : (t[n] || (t[n] = []), t[n].push(e));
        }
        var d = (function (t) {
          function e(e, n) {
            var i,
              o = t.call(this, e, n) || this,
              s = (o._root = "_ROOT_" + r.uid());
            return (
              (o._childs = (((i = {})[s] = []), i)), (o._initChilds = null), o
            );
          }
          return (
            i(e, t),
            (e.prototype.add = function (t, e, n) {
              var i = this;
              return (
                void 0 === e && (e = -1),
                void 0 === n && (n = this._root),
                "object" != typeof t && (t = { value: t }),
                Array.isArray(t)
                  ? t.map(function (t, o) {
                      return i._add(t, e, n, o);
                    })
                  : this._add(t, e, n)
              );
            }),
            (e.prototype.getRoot = function () {
              return this._root;
            }),
            (e.prototype.getParent = function (t, e) {
              if ((void 0 === e && (e = !1), !this._pull[t])) return null;
              var n = this._pull[t].parent;
              return e ? this._pull[n] : n;
            }),
            (e.prototype.getItems = function (t) {
              return this._childs && this._childs[t] ? this._childs[t] : [];
            }),
            (e.prototype.getLength = function (t) {
              return (
                void 0 === t && (t = this._root),
                this._childs[t] ? this._childs[t].length : null
              );
            }),
            (e.prototype.removeAll = function (e) {
              var n;
              if (e)
                for (var i = 0, r = o(this._childs[e]); i < r.length; i++) {
                  var s = r[i];
                  this.remove(s.id);
                }
              else {
                t.prototype.removeAll.call(this);
                var a = this._root;
                (this._initChilds = null),
                  (this._childs = (((n = {})[a] = []), n));
              }
            }),
            (e.prototype.getIndex = function (t) {
              var e = this.getParent(t);
              return e && this._childs[e]
                ? r.findIndex(this._childs[e], function (e) {
                    return e.id === t;
                  })
                : -1;
            }),
            (e.prototype.sort = function (t) {
              var e = this;
              if (t) {
                for (var n in this._childs) this._sort.sort(this._childs[n], t);
                if (this._initChilds && Object.keys(this._initChilds).length)
                  for (var n in this._initChilds)
                    this._sort.sort(this._initChilds[n], t);
              } else if (
                ((this._childs = {}),
                this._parse_data(
                  Object.keys(this._pull).map(function (t) {
                    return e._pull[t];
                  })
                ),
                this._filters)
              )
                for (var n in this._filters) {
                  var i = this._filters[n];
                  this.filter(i.rule, i.config);
                }
              this.events.fire(c.DataEvents.change);
            }),
            (e.prototype.filter = function (t, e) {
              var n = this;
              if ((void 0 === e && (e = {}), t)) {
                this._initChilds || (this._initChilds = this._childs),
                  (e.type = e.type || c.TreeFilterType.all),
                  (this._filters = {}),
                  (this._filters._ = { rule: t, config: e });
                var i = {};
                this._recursiveFilter(t, e, this._root, 0, i),
                  Object.keys(i).forEach(function (t) {
                    for (var e = n.getParent(t), o = n.getItem(t); e; )
                      i[e] || (i[e] = []),
                        o &&
                          !i[e].find(function (t) {
                            return t.id === o.id;
                          }) &&
                          i[e].push(o),
                        (o = n.getItem(e)),
                        (e = n.getParent(e));
                  }),
                  (this._childs = i),
                  this.events.fire(c.DataEvents.change);
              } else this.restoreOrder();
            }),
            (e.prototype.restoreOrder = function () {
              this._initChilds &&
                ((this._childs = this._initChilds), (this._initChilds = null)),
                this.events.fire(c.DataEvents.change);
            }),
            (e.prototype.copy = function (t, e, n, i) {
              var o = this;
              return (
                void 0 === n && (n = this),
                void 0 === i && (i = this._root),
                t instanceof Array
                  ? t.map(function (t, r) {
                      return o._copy(t, e, n, i, r);
                    })
                  : this._copy(t, e, n, i)
              );
            }),
            (e.prototype.move = function (t, e, n, i) {
              var o = this;
              return (
                void 0 === n && (n = this),
                void 0 === i && (i = this._root),
                t instanceof Array
                  ? t.map(function (t, r) {
                      return o._move(t, e, n, i, r);
                    })
                  : this._move(t, e, n, i)
              );
            }),
            (e.prototype.forEach = function (t, e, n) {
              if (
                (void 0 === e && (e = this._root),
                void 0 === n && (n = 1 / 0),
                this.haveItems(e) && !(n < 1))
              )
                for (var i = this._childs[e], o = 0; o < i.length; o++)
                  t.call(this, i[o], o, i),
                    this.haveItems(i[o].id) && this.forEach(t, i[o].id, --n);
            }),
            (e.prototype.eachChild = function (t, e, n, i) {
              if (
                (void 0 === n && (n = !0),
                void 0 === i &&
                  (i = function () {
                    return !0;
                  }),
                this.haveItems(t))
              )
                for (var o = 0; o < this._childs[t].length; o++)
                  e.call(this, this._childs[t][o], o),
                    n &&
                      i(this._childs[t][o]) &&
                      this.eachChild(this._childs[t][o].id, e, n, i);
            }),
            (e.prototype.getNearId = function (t) {
              return t;
            }),
            (e.prototype.loadItems = function (t, e) {
              var n = this;
              void 0 === e && (e = "json");
              var i = this.config.autoload + "?id=" + t;
              new a.DataProxy(i).load().then(function (i) {
                (i = (e = l.toDataDriver(e)).toJsonArray(i)),
                  n._parse_data(i, t),
                  n.events.fire(c.DataEvents.change);
              });
            }),
            (e.prototype.refreshItems = function (t, e) {
              void 0 === e && (e = "json"),
                this.removeAll(t),
                this.loadItems(t, e);
            }),
            (e.prototype.eachParent = function (t, e, n) {
              void 0 === n && (n = !1);
              var i = this.getItem(t);
              if (i && (n && e.call(this, i), i.parent !== this._root)) {
                var o = this.getItem(i.parent);
                e.call(this, o), this.eachParent(i.parent, e);
              }
            }),
            (e.prototype.haveItems = function (t) {
              return t in this._childs;
            }),
            (e.prototype.canCopy = function (t, e) {
              if (t === e) return !1;
              var n = !0;
              return (
                this.eachParent(e, function (e) {
                  return e.id === t ? (n = !1) : null;
                }),
                n
              );
            }),
            (e.prototype.serialize = function (t, e) {
              void 0 === t && (t = c.DataDriver.json);
              var n = this._serialize(this._root, e),
                i = l.toDataDriver(t);
              if (i) return i.serialize(n);
            }),
            (e.prototype.getId = function (t, e) {
              if (
                (void 0 === e && (e = this._root),
                this._childs[e] && this._childs[e][t])
              )
                return this._childs[e][t].id;
            }),
            (e.prototype.map = function (t, e, n) {
              void 0 === e && (e = this._root), void 0 === n && (n = !0);
              var i = [];
              if (!this.haveItems(e)) return i;
              for (var o = 0; o < this._childs[e].length; o++)
                if (
                  (i.push(t.call(this, this._childs[e][o], o, this._childs)), n)
                ) {
                  var r = this.map(t, this._childs[e][o].id, n);
                  i = i.concat(r);
                }
              return i;
            }),
            (e.prototype._add = function (e, n, i, o) {
              void 0 === n && (n = -1),
                void 0 === i && (i = this._root),
                (e.parent = e.parent ? e.parent.toString() : i),
                o > 0 && -1 !== n && (n += 1);
              var r = t.prototype._add.call(this, e, n);
              if (Array.isArray(e.items))
                for (var s = 0, a = e.items; s < a.length; s++) {
                  var l = a[s];
                  this.add(l, -1, e.id);
                }
              return r;
            }),
            (e.prototype._copy = function (t, e, n, i, o) {
              if (
                (void 0 === n && (n = this),
                void 0 === i && (i = this._root),
                !this.exists(t))
              )
                return null;
              var s = this._childs[t];
              if (
                (o && (e = -1 === e ? -1 : e + o),
                n === this && !this.canCopy(t, i))
              )
                return null;
              var a = l.copyWithoutInner(this.getItem(t), { items: !0 });
              if ((n.exists(t) && (a.id = r.uid()), l.isTreeCollection(n))) {
                if (
                  (this.exists(t) &&
                    ((a.parent = i),
                    n !== this && i === this._root && (a.parent = n.getRoot()),
                    n.add(a, e),
                    (t = a.id)),
                  s)
                )
                  for (var c = 0, u = s; c < u.length; c++) {
                    var d = u[c].id,
                      h = this.getIndex(d);
                    "string" == typeof t && this.copy(d, h, n, t);
                  }
                return t;
              }
              n.add(a, e);
            }),
            (e.prototype._move = function (t, e, n, i, o) {
              if (
                (void 0 === n && (n = this),
                void 0 === i && (i = this._root),
                !this.exists(t))
              )
                return null;
              if ((o && (e = -1 === e ? -1 : e + o), n !== this)) {
                if (!l.isTreeCollection(n))
                  return (
                    n.add(l.copyWithoutInner(this.getItem(t)), e),
                    void this.remove(t)
                  );
                var r = this.copy(t, e, n, i);
                return this.remove(t), r;
              }
              if (!this.canCopy(t, i)) return null;
              var s = this.getParent(t),
                a = this.getIndex(t),
                u = this._childs[s].splice(a, 1)[0];
              return (
                (u.parent = i),
                this._childs[s].length || delete this._childs[s],
                this.haveItems(i) || (this._childs[i] = []),
                -1 === e
                  ? (e = this._childs[i].push(u))
                  : this._childs[i].splice(e, 0, u),
                this.events.fire(c.DataEvents.change),
                t
              );
            }),
            (e.prototype._removeAll = function (e) {
              var n;
              if (e)
                for (var i = 0, r = o(this._childs[e]); i < r.length; i++) {
                  var s = r[i];
                  this.remove(s.id);
                }
              else {
                t.prototype._removeAll.call(this);
                var a = this._root;
                (this._initChilds = null),
                  (this._childs = (((n = {})[a] = []), n));
              }
            }),
            (e.prototype._removeCore = function (t) {
              if (this._pull[t]) {
                var e = this.getParent(t);
                (this._childs[e] = this._childs[e].filter(function (e) {
                  return e.id !== t;
                })),
                  e === this._root ||
                    this._childs[e].length ||
                    delete this._childs[e],
                  this._initChilds &&
                    this._initChilds[e] &&
                    ((this._initChilds[e] = this._initChilds[e].filter(
                      function (e) {
                        return e.id !== t;
                      }
                    )),
                    e === this._root ||
                      this._initChilds[e].length ||
                      delete this._initChilds[e]),
                  this._fastDeleteChilds(this._childs, t),
                  this._initChilds &&
                    this._fastDeleteChilds(this._initChilds, t);
              }
            }),
            (e.prototype._addToOrder = function (t, e, n) {
              var i = this._childs,
                o = this._initChilds,
                r = e.parent;
              (this._pull[e.id] = e), u(i, e, r, n), o && u(o, e, r, n);
            }),
            (e.prototype._parse_data = function (t, e) {
              void 0 === e && (e = this._root);
              for (var n = 0, i = t; n < i.length; n++) {
                var o = i[n];
                this.config.init && (o = this.config.init(o)),
                  "object" != typeof o && (o = { value: o }),
                  (o.id = o.id ? o.id.toString() : r.uid()),
                  (o.parent = o.parent ? o.parent.toString() : e),
                  (this._pull[o.id] = o),
                  this._childs[o.parent] || (this._childs[o.parent] = []),
                  this._childs[o.parent].push(o),
                  o.items &&
                    o.items instanceof Object &&
                    this._parse_data(o.items, o.id);
              }
            }),
            (e.prototype._fastDeleteChilds = function (t, e) {
              if ((this._pull[e] && delete this._pull[e], t[e])) {
                for (var n = 0; n < t[e].length; n++)
                  this._fastDeleteChilds(t, t[e][n].id);
                delete t[e];
              }
            }),
            (e.prototype._recursiveFilter = function (t, e, n, i, o) {
              var r = this,
                s = this._childs[n];
              if (s) {
                var a = function (t) {
                  switch (e.type) {
                    case c.TreeFilterType.all:
                      return !0;
                    case c.TreeFilterType.level:
                      return i === e.level;
                    case c.TreeFilterType.leafs:
                      return !r.haveItems(t.id);
                  }
                };
                if ("function" == typeof t) {
                  var l = function (e) {
                    return a(e) && t(e);
                  };
                  (u = s.filter(l)).length && (o[n] = u);
                } else if (t.by && t.match) {
                  var u;
                  l = function (e) {
                    return (
                      a(e) &&
                      -1 !==
                        e[t.by]
                          .toString()
                          .toLowerCase()
                          .indexOf(t.match.toString().toLowerCase())
                    );
                  };
                  (u = s.filter(l)).length && (o[n] = u);
                }
                for (var d = 0, h = s; d < h.length; d++) {
                  var f = h[d];
                  this._recursiveFilter(t, e, f.id, i + 1, o);
                }
              }
            }),
            (e.prototype._serialize = function (t, e) {
              var n = this;
              return (
                void 0 === t && (t = this._root),
                this.map(
                  function (t) {
                    var i = {};
                    for (var o in t)
                      "parent" !== o && "items" !== o && (i[o] = t[o]);
                    return (
                      e && (i = e(i)),
                      n.haveItems(t.id) && (i.items = n._serialize(t.id, e)),
                      i
                    );
                  },
                  t,
                  !1
                )
              );
            }),
            e
          );
        })(s.DataCollection);
        e.TreeCollection = d;
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(1),
          o = n(71),
          r = n(8),
          s = n(9);
        var a = (function () {
            function t() {
              var t = this;
              (this._transferData = {}),
                (this._canMove = !0),
                (this._selectedIds = []),
                (this._onMouseMove = function (e) {
                  if (t._transferData.id) {
                    var n = e.pageX,
                      i = e.pageY;
                    if (!t._transferData.ghost) {
                      if (
                        Math.abs(t._transferData.x - n) < 3 &&
                        Math.abs(t._transferData.y - i) < 3
                      )
                        return;
                      var o = t._onDragStart(
                        t._transferData.id,
                        t._transferData.targetId
                      );
                      if (!o) return void t._endDrop();
                      (t._transferData.ghost = o),
                        document.body.appendChild(t._transferData.ghost);
                    }
                    t._moveGhost(n, i), t._onDrag(e);
                  }
                }),
                (this._onMouseUp = function () {
                  t._transferData.x &&
                    (t._transferData.ghost
                      ? (t._removeGhost(), t._onDrop())
                      : t._endDrop(),
                    document.removeEventListener("mousemove", t._onMouseMove),
                    document.removeEventListener("mouseup", t._onMouseUp));
                });
            }
            return (
              (t.prototype.setItem = function (t, e) {
                o.collectionStore.setItem(t, e);
              }),
              (t.prototype.onMouseDown = function (t, e, n) {
                if (1 === t.which) {
                  t.preventDefault(),
                    document.addEventListener("mousemove", this._onMouseMove),
                    document.addEventListener("mouseup", this._onMouseUp);
                  var o = i.locateNode(t, "dhx_id"),
                    r = o && o.getAttribute("dhx_id"),
                    s = i.locate(t, "dhx_widget_id");
                  if (
                    (e && -1 !== e.indexOf(r) && e.length > 1
                      ? ((this._selectedIds = e), (this._itemsForGhost = n))
                      : ((this._selectedIds = []),
                        (this._itemsForGhost = null)),
                    r && s)
                  ) {
                    var a = i.getBox(o),
                      l = a.left,
                      c = a.top;
                    (this._transferData.initXOffset = t.pageX - l),
                      (this._transferData.initYOffset = t.pageY - c),
                      (this._transferData.x = t.pageX),
                      (this._transferData.y = t.pageY),
                      (this._transferData.targetId = s),
                      (this._transferData.id = r),
                      (this._transferData.item = o);
                  }
                }
              }),
              (t.prototype._moveGhost = function (t, e) {
                this._transferData.ghost &&
                  ((this._transferData.ghost.style.left =
                    t - this._transferData.initXOffset + "px"),
                  (this._transferData.ghost.style.top =
                    e - this._transferData.initYOffset + "px"));
              }),
              (t.prototype._removeGhost = function () {
                document.body.removeChild(this._transferData.ghost);
              }),
              (t.prototype._onDrop = function () {
                if (this._canMove) {
                  var t = o.collectionStore.getItem(this._lastCollectionId),
                    e = t && t.config;
                  if (t && e.dragMode !== r.DragMode.source) {
                    if (
                      t.events.fire(r.DragEvents.beforeDrop, [
                        this._lastId,
                        this._transferData.target,
                      ])
                    ) {
                      var n = { id: this._lastId, target: t },
                        i = {
                          id: this._transferData.id,
                          target: this._transferData.target,
                        };
                      this._move(i, n),
                        n.target.events.fire(r.DragEvents.dropComplete, [
                          n.id,
                          this._transferData.dropPosition,
                        ]);
                    }
                    this._endDrop();
                  } else this._endDrop();
                } else this._endDrop();
              }),
              (t.prototype._onDragStart = function (t, e) {
                var n = o.collectionStore.getItem(e),
                  i = n.config;
                if (i.dragMode === r.DragMode.target) return null;
                var s = n.data.getItem(t),
                  a = (function (t, e) {
                    var n = t.getBoundingClientRect(),
                      i = document.createElement("div"),
                      o = t.cloneNode(!0);
                    return (
                      (o.style.width = n.width + "px"),
                      (o.style.height = n.height + "px"),
                      (o.style.maxHeight = n.height + "px"),
                      (o.style.fontSize = window.getComputedStyle(
                        t.parentElement
                      ).fontSize),
                      (o.style.opacity = "0.8"),
                      (o.style.fontSize = window.getComputedStyle(
                        t.parentElement
                      ).fontSize),
                      i.appendChild(o),
                      e &&
                        e.length &&
                        e.forEach(function (t, e) {
                          var o = t.cloneNode(!0);
                          (o.style.width = n.width + "px"),
                            (o.style.height = n.height + "px"),
                            (o.style.maxHeight = n.height + "px"),
                            (o.style.top =
                              12 * (e + 1) - n.height - n.height * e + "px"),
                            (o.style.left = 12 * (e + 1) + "px"),
                            (o.style.opacity = "0.6"),
                            (o.style.zIndex = "" + (-e - 1)),
                            i.appendChild(o);
                        }),
                      (i.className = "dhx_drag-ghost"),
                      i
                    );
                  })(this._transferData.item, this._itemsForGhost);
                return n.events.fire(r.DragEvents.beforeDrag, [s, a]) && t
                  ? (n.events.fire(r.DragEvents.dragStart, [
                      t,
                      this._selectedIds,
                    ]),
                    this._toggleTextSelection(!0),
                    (this._transferData.target = n),
                    (this._transferData.dragConfig = i),
                    a)
                  : null;
              }),
              (t.prototype._onDrag = function (t) {
                var e = t.clientX,
                  n = t.clientY,
                  a = document.elementFromPoint(e, n),
                  l = i.locate(a, "dhx_widget_id");
                if (l) {
                  var c = o.collectionStore.getItem(l),
                    u = i.locate(a, "dhx_id");
                  if (!u)
                    return (
                      this._cancelCanDrop(),
                      (this._lastCollectionId = l),
                      (this._lastId = null),
                      void this._canDrop()
                    );
                  if (c.config.dropBehaviour === r.DropBehaviour.complex) {
                    var d = (function (t) {
                      var e = t.clientY,
                        n = i.locateNode(t);
                      if (!n) return null;
                      var o = n.childNodes[0].getBoundingClientRect();
                      return (e - o.top) / o.height;
                    })(t);
                    this._transferData.dropPosition =
                      d <= 0.25
                        ? r.DropPosition.top
                        : d >= 0.75
                        ? r.DropPosition.bot
                        : r.DropPosition.in;
                  } else if (this._lastId === u && this._lastCollectionId === l)
                    return;
                  var h = {
                    id: this._transferData.id,
                    target: this._transferData.target,
                  };
                  if ("source" !== c.config.dragMode)
                    if (
                      (h.target.events.fire(r.DragEvents.dragOut, [u, c]),
                      l !== this._transferData.targetId ||
                        !s.isTreeCollection(h.target.data) ||
                        (s.isTreeCollection(h.target.data) &&
                          h.target.data.canCopy(h.id, u)))
                    )
                      this._cancelCanDrop(),
                        (this._lastId = u),
                        (this._lastCollectionId = l),
                        h.target.events.fire(r.DragEvents.dragIn, [
                          u,
                          this._transferData.dropPosition,
                          o.collectionStore.getItem(l),
                        ]) && this._canDrop();
                    else this._cancelCanDrop();
                } else this._canMove && this._cancelCanDrop();
              }),
              (t.prototype._move = function (t, e) {
                var n = t.target.data,
                  i = e.target.data,
                  o = 0,
                  a = e.id;
                switch (
                  s.isTreeCollection(i) ? e.target.config.dropBehaviour : void 0
                ) {
                  case r.DropBehaviour.child:
                    break;
                  case r.DropBehaviour.sibling:
                    (a = i.getParent(a)), (o = i.getIndex(e.id) + 1);
                    break;
                  case r.DropBehaviour.complex:
                    var l = this._transferData.dropPosition;
                    l === r.DropPosition.top
                      ? ((a = i.getParent(a)), (o = i.getIndex(e.id)))
                      : l === r.DropPosition.bot &&
                        ((a = i.getParent(a)), (o = i.getIndex(e.id) + 1));
                    break;
                  default:
                    o = e.id
                      ? t.target === e.target &&
                        i.getIndex(t.id) < i.getIndex(e.id)
                        ? i.getIndex(e.id) - 1
                        : i.getIndex(e.id)
                      : -1;
                }
                this._transferData.dragConfig.dragCopy
                  ? this._selectedIds instanceof Array &&
                    this._selectedIds.length > 1
                    ? this._selectedIds.map(function (t) {
                        n.copy(t, o, i, a), o > -1 && o++;
                      })
                    : n.copy(t.id, o, i, a)
                  : this._selectedIds instanceof Array &&
                    this._selectedIds.length > 1
                  ? this._selectedIds.map(function (t) {
                      n.move(t, o, i, a), o > -1 && o++;
                    })
                  : n.move(t.id, o, i, a);
              }),
              (t.prototype._endDrop = function () {
                this._toggleTextSelection(!1),
                  this._transferData.target &&
                    this._transferData.target.events.fire(
                      r.DragEvents.dragEnd,
                      [this._transferData.id, this._selectedIds]
                    ),
                  this._cancelCanDrop(),
                  (this._canMove = !0),
                  (this._transferData = {}),
                  (this._lastId = null),
                  (this._lastCollectionId = null);
              }),
              (t.prototype._cancelCanDrop = function () {
                this._canMove = !1;
                var t = o.collectionStore.getItem(this._lastCollectionId);
                t &&
                  this._lastId &&
                  t.events.fire(r.DragEvents.cancelDrop, [this._lastId]),
                  (this._lastCollectionId = null),
                  (this._lastId = null);
              }),
              (t.prototype._canDrop = function () {
                this._canMove = !0;
                var t = o.collectionStore.getItem(this._lastCollectionId);
                t &&
                  this._lastId &&
                  t.events.fire(r.DragEvents.canDrop, [
                    this._lastId,
                    this._transferData.dropPosition,
                  ]);
              }),
              (t.prototype._toggleTextSelection = function (t) {
                t
                  ? document.body.classList.add("dhx_no-select")
                  : document.body.classList.remove("dhx_no-select");
              }),
              t
            );
          })(),
          l = (window.dhxHelpers = window.dhxHelpers || {});
        (l.dragManager = l.dragManager || new a()),
          (e.dragManager = l.dragManager);
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = (function () {
            function t() {
              this._store = {};
            }
            return (
              (t.prototype.setItem = function (t, e) {
                this._store[t] = e;
              }),
              (t.prototype.getItem = function (t) {
                return this._store[t] ? this._store[t] : null;
              }),
              t
            );
          })(),
          o = (window.dhxHelpers = window.dhxHelpers || {});
        (o.collectionStore = o.collectionStore || new i()),
          (e.collectionStore = o.collectionStore);
      },
      function (t, e, n) {
        "use strict";
        (function (t) {
          var i =
            (this && this.__extends) ||
            (function () {
              var t = function (e, n) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                  })(e, n);
              };
              return function (e, n) {
                function i() {
                  this.constructor = e;
                }
                t(e, n),
                  (e.prototype =
                    null === n
                      ? Object.create(n)
                      : ((i.prototype = n.prototype), new i()));
              };
            })();
          Object.defineProperty(e, "__esModule", { value: !0 });
          var o = n(12),
            r = n(3),
            s = n(19),
            a = (function (e) {
              function n(t, n) {
                var i = e.call(this, t) || this;
                return (
                  (i.config = r.extend(
                    { from: 0, limit: 50, delay: 50, prepare: 0 },
                    n
                  )),
                  i.updateUrl(t, {
                    from: i.config.from,
                    limit: i.config.limit,
                  }),
                  i
                );
              }
              return (
                i(n, e),
                (n.prototype.load = function () {
                  var e = this;
                  return new t(function (t) {
                    e._timeout
                      ? (clearTimeout(e._timeout),
                        (e._timeout = setTimeout(function () {
                          s.ajax.get(e.url, { responseType: "text" }).then(t),
                            (e._cooling = !0);
                        }, e.config.delay)),
                        e._cooling && (t(null), (e._cooling = !1)))
                      : (s.ajax.get(e.url, { responseType: "text" }).then(t),
                        (e._cooling = !0),
                        (e._timeout = setTimeout(function () {})));
                  });
                }),
                n
              );
            })(o.DataProxy);
          e.LazyDataProxy = a;
        }.call(this, n(5)));
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(6),
          o = n(74),
          r = n(8),
          s = (function () {
            function t(t, e, n) {
              var o = this;
              (this.events = n || new i.EventSystem(this)),
                (this._data = e),
                this._data.events.on(r.DataEvents.removeAll, function () {
                  o._selected = null;
                }),
                this._data.events.on(r.DataEvents.change, function () {
                  if (o._selected) {
                    var t = o._data.getNearId(o._selected);
                    t !== o._selected && ((o._selected = null), t && o.add(t));
                  }
                });
            }
            return (
              (t.prototype.getId = function () {
                return this._selected;
              }),
              (t.prototype.getItem = function () {
                return this._selected
                  ? this._data.getItem(this._selected)
                  : null;
              }),
              (t.prototype.remove = function (t) {
                return (
                  !(t = t || this._selected) ||
                  (!!this.events.fire(o.SelectionEvents.beforeUnSelect, [t]) &&
                    (this._data.update(t, { $selected: !1 }),
                    (this._selected = null),
                    this.events.fire(o.SelectionEvents.afterUnSelect, [t]),
                    !0))
                );
              }),
              (t.prototype.add = function (t) {
                this._selected !== t &&
                  (this.remove(),
                  this.events.fire(o.SelectionEvents.beforeSelect, [t]) &&
                    ((this._selected = t),
                    this._data.update(t, { $selected: !0 }),
                    this.events.fire(o.SelectionEvents.afterSelect, [t])));
              }),
              t
            );
          })();
        e.Selection = s;
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (function (t) {
            (t.beforeUnSelect = "beforeunselect"),
              (t.afterUnSelect = "afterunselect"),
              (t.beforeSelect = "beforeselect"),
              (t.afterSelect = "afterselect");
          })(e.SelectionEvents || (e.SelectionEvents = {}));
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(76),
          o = n(77),
          r = n(78),
          s = n(79),
          a = n(80),
          l = n(81),
          c = n(82),
          u = n(83),
          d = n(84),
          h = n(13),
          f = n(14);
        e.createFactory = function (t) {
          for (
            var e = t.defaultType,
              n = t.allowedTypes,
              p = t.widgetName,
              _ = t.widget,
              v = new Set(),
              g = 0,
              x = n;
            g < x.length;
            g++
          ) {
            var y = x[g];
            v.add(y);
          }
          var m = _.config,
            b = _.events,
            k = _.data;
          return function (t, n) {
            if (t.hidden) return null;
            if (
              !(
                (t.type &&
                  "button" !== t.type &&
                  "navItem" !== t.type &&
                  "menuItem" !== t.type) ||
                t.value ||
                t.icon ||
                t.html
              )
            )
              return null;
            (t.type = t.type || e),
              v && !v.has(t.type) && (t.type = e),
              t.type === h.ItemType.imageButton &&
                "ribbon" !== p &&
                (t.active = !1),
              n &&
                t.type !== h.ItemType.spacer &&
                t.type !== h.ItemType.separator &&
                t.type !== h.ItemType.customHTML &&
                (t.type = h.ItemType.menuItem),
              k.haveItems(t.id) &&
                (function (t, e, n) {
                  switch (t) {
                    case "sidebar":
                    case "context-menu":
                      e.$openIcon = "right";
                      break;
                    case "toolbar":
                      e.parent === n.getRoot()
                        ? (e.$openIcon = "right")
                        : (e.$openIcon = "bot");
                      break;
                    case "menu":
                      e.parent !== this.data.getRoot() &&
                        (e.$openIcon = "right");
                      break;
                    case "ribbon":
                      var i = n.getItem(e.parent);
                      i &&
                        e.type !== h.ItemType.block &&
                        (i.type === h.ItemType.block
                          ? (e.$openIcon = "bot")
                          : (e.$openIcon = "right"));
                  }
                })(p, t, k);
            var _ =
              t.type !== h.ItemType.customHTML &&
              (function (t, e, n, f) {
                switch (t.type) {
                  case h.ItemType.navItem:
                  case h.ItemType.selectButton:
                    return o.navItem(t, n, f.collapsed);
                  case h.ItemType.button:
                    return i.button(t, n);
                  case h.ItemType.title:
                    return d.title(t, n);
                  case h.ItemType.separator:
                    return c.separator(t, n);
                  case h.ItemType.spacer:
                    return u.spacer(t, n);
                  case h.ItemType.input:
                    return a.input(t, e, n);
                  case h.ItemType.imageButton:
                    return s.imageButton(t, n);
                  case h.ItemType.menuItem:
                    return l.menuItem(t, n, f.asMenuItem);
                  case h.ItemType.customHTMLButton:
                    return r.customHTMLButton(t, n, f.asMenuItem);
                  case h.ItemType.block:
                  default:
                    throw new Error("unknown item type " + t.type);
                }
              })(t, b, p, {
                asMenuItem: n,
                collapsed: "sidebar" !== p || m.collapsed,
              });
            return f.navbarComponentMixin(p, t, n, _);
          };
        };
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(0),
          o = n(14);
        e.button = function (t, e) {
          var n = t.icon && !t.value,
            r = n
              ? " dhx_navbar-count--absolute"
              : " dhx_navbar-count--button-inline";
          return i.el(
            "button.dhx_button",
            {
              class: o.getNavbarButtonCSS(t, e),
              dhx_id: t.id,
              disabled: t.disabled,
              type: "button",
            },
            [
              t.icon ? o.getIcon(t.icon, "button") : null,
              t.html
                ? i.el("div.dhx_button__text", { ".innerHTML": t.html })
                : t.value && i.el("span.dhx_button__text", t.value),
              t.count > 0 && o.getCount(t, r, n),
              t.value && t.$openIcon
                ? i.el(
                    "span.dhx_button__icon.dhx_button__icon--menu.dxi.dxi-menu-right"
                  )
                : null,
              t.loading &&
                i.el("span.dhx_button__loading", [
                  i.el("span.dhx_button__loading-icon.dxi.dxi-loading"),
                ]),
            ]
          );
        };
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(0),
          o = n(14);
        e.navItem = function (t, e, n) {
          var r = " dhx_" + e + "-button";
          return i.el(
            "button",
            {
              class:
                "dhx_button" +
                r +
                (t.active || t.$activeParent ? r + "--active" : "") +
                (t.disabled ? r + "--disabled" : "") +
                (t.$openIcon ? r + "--select" : "") +
                (t.circle ? r + "--circle" : "") +
                (t.size ? " " + r + "--" + t.size : "") +
                (!t.value && t.icon ? r + "--icon" : "") +
                (t.css ? " " + t.css : ""),
              dhx_id: t.id,
              disabled: t.disabled,
              type: "button",
            },
            [
              t.icon && i.el("span", { class: t.icon + r + "__icon" }),
              t.html &&
                i.el("div", {
                  class: r.trim() + "__html",
                  ".innerHTML": t.html,
                }),
              !t.html &&
                t.value &&
                i.el("span", { class: r.trim() + "__text" }, t.value),
              t.count > 0 && o.getCount(t, r + "__count", n),
              t.$openIcon &&
                i.el("span.dxi.dxi-menu-right", { class: r + "__caret" }),
            ]
          );
        };
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(0);
        e.customHTMLButton = function (t, e, n) {
          var o = n
            ? " dhx_button dhx_menu-button"
            : " dhx_button dhx_nav-menu-button";
          return i.el(
            "button",
            {
              class:
                "dhx_custom-button" +
                o +
                (t.$activeParent ? o + "--active" : ""),
              dhx_id: t.id,
              type: "button",
              ".innerHTML": t.html,
            },
            t.html ? "" : t.value
          );
        };
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(0),
          o = n(14);
        e.imageButton = function (t, e) {
          var n = "dhx_" + e + "-button-image",
            r = "ribbon" === e;
          return i.el(
            "button.dhx_button",
            {
              class:
                n +
                (t.size ? " " + n + "--" + t.size : "") +
                (!t.value && t.src ? " " + n + "--icon" : "") +
                (r && t.$openIcon ? " " + n + "--select" : "") +
                (t.active ? " " + n + "--active" : ""),
              dhx_id: t.id,
              type: "button",
            },
            [
              r &&
                t.value &&
                t.$openIcon &&
                i.el("span.dxi.dxi-menu-right", { class: n + "__caret" }),
              t.html
                ? i.el("div", { class: n + "__text", ".innerHTML": t.html })
                : t.value && i.el("span", { class: n + "__text" }, t.value),
              t.src &&
                i.el("span", {
                  class: n + "__image",
                  style: { backgroundImage: "url(" + t.src + ")" },
                }),
              t.count > 0 && o.getCount(t, n + "__count", !0),
            ]
          );
        };
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(0),
          o = n(13);
        function r(t, e) {
          t.fire(o.NavigationBarEvents.inputBlur, [e]);
        }
        function s(t, e) {
          t.fire(o.NavigationBarEvents.inputFocus, [e]);
        }
        e.input = function (t, e, n) {
          return i.el(
            ".dhx_form-group.dhx_form-group--no-message-holder.dhx_form-group--label_sr.dhx_" +
              n +
              "__input",
            { style: { width: t.width ? t.width : "200px" } },
            [
              i.el("label.dhx_label", { for: t.id }, t.label),
              i.el(".dhx_input__wrapper", [
                i.el("input.dhx_input", {
                  placeholder: t.placeholder,
                  class: t.icon ? "dhx_input--icon-padding" : "",
                  value: t.value,
                  onblur: [r, e, t.id],
                  onfocus: [s, e, t.id],
                  dhx_id: t.id,
                  _hooks: {
                    didInsert: function (n) {
                      e &&
                        e.fire(o.NavigationBarEvents.inputCreated, [
                          t.id,
                          n.el,
                        ]);
                    },
                  },
                  _key: t.id,
                }),
                t.icon ? i.el(".dhx_input__icon", { class: t.icon }) : null,
              ]),
            ]
          );
        };
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(0),
          o = n(14);
        e.menuItem = function (t, e, n) {
          var r = n ? " dhx_menu-button" : " dhx_nav-menu-button";
          return i.el(
            "button",
            {
              class:
                "dhx_button" +
                r +
                (t.disabled ? r + "--disabled" : "") +
                (t.active || t.$activeParent ? r + "--active" : ""),
              disabled: t.disabled,
              dhx_id: t.id,
              type: "button",
            },
            n
              ? [
                  t.icon || t.value || t.html
                    ? i.el(
                        "span.dhx_menu-button__block.dhx_menu-button__block--left",
                        [
                          t.icon &&
                            i.el("span.dhx_menu-button__icon", {
                              class: t.icon,
                            }),
                          t.html
                            ? i.el("div.dhx_menu-button__text", {
                                ".innerHTML": t.html,
                              })
                            : t.value &&
                              i.el("span.dhx_menu-button__text", t.value),
                        ]
                      )
                    : null,
                  t.count > 0 || t.hotkey || t.items
                    ? i.el(
                        "span.dhx_menu-button__block.dhx_menu-button__block--right",
                        [
                          t.count > 0 &&
                            o.getCount(t, " dhx_menu-button__count", !1),
                          t.hotkey &&
                            i.el("span.dhx_menu-button__hotkey", t.hotkey),
                          t.items &&
                            i.el(
                              "span.dhx_menu-button__caret.dxi.dxi-menu-right"
                            ),
                        ]
                      )
                    : null,
                ]
              : [
                  t.icon &&
                    i.el("span.dhx_menu-button__icon", { class: t.icon }),
                  t.html
                    ? i.el("div.dhx_menu-button__text", {
                        ".innerHTML": t.html,
                      })
                    : t.value &&
                      i.el("span.dhx_nav-menu-button__text", t.value),
                ]
          );
        };
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.separator = function (t, e) {
            return null;
          });
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.spacer = function (t, e) {
            return null;
          });
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(0);
        e.title = function (t, e) {
          return i.el(
            "span",
            {
              class: "dhx_navbar-title dhx_navbar-title--" + e,
              ".innerHTML": t.html,
            },
            t.html ? null : t.value
          );
        };
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(2);
        e.listenCompositionEvents = function (t, e) {
          var n = function (n) {
              e() && t.fire(i.RichTextEvents.compositionStart);
            },
            o = function (n) {
              e() && t.fire(i.RichTextEvents.compositionEnd, [n.data]);
            },
            r = function (n) {
              e() && t.fire(i.RichTextEvents.compositionUpdate, [n.data]);
            };
          return (
            document.addEventListener("compositionstart", n),
            document.addEventListener("compositionend", o),
            document.addEventListener("compositionupdate", r),
            function () {
              document.removeEventListener("compositionstart", n),
                document.removeEventListener("compositionend", o),
                document.removeEventListener("compositionupdate", r);
            }
          );
        };
      },
      function (t, e, n) {
        "use strict";
        var i =
            (this && this.__extends) ||
            (function () {
              var t = function (e, n) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                  })(e, n);
              };
              return function (e, n) {
                function i() {
                  this.constructor = e;
                }
                t(e, n),
                  (e.prototype =
                    null === n
                      ? Object.create(n)
                      : ((i.prototype = n.prototype), new i()));
              };
            })(),
          o =
            (this && this.__assign) ||
            function () {
              return (o =
                Object.assign ||
                function (t) {
                  for (var e, n = 1, i = arguments.length; n < i; n++)
                    for (var o in (e = arguments[n]))
                      Object.prototype.hasOwnProperty.call(e, o) &&
                        (t[o] = e[o]);
                  return t;
                }).apply(this, arguments);
            };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(0),
          s = n(1),
          a = n(10),
          l = n(11),
          c = n(36),
          u = n(38),
          d = n(15),
          h = n(2),
          f = n(4),
          p = (function (t) {
            function e(e, n) {
              var i = t.call(this, e, n) || this;
              return (
                (i._events = n.events),
                (i._editor = n.editor),
                (i._getParentView = n.getRootView),
                (i._popup = new c.Popup()),
                i._initEvents(),
                (i._handlers = {
                  onclick: {
                    ".dhx_richtext-linkeditor--handler_apply": function () {
                      return i._apply();
                    },
                    ".dhx_richtext-linkeditor--handler_unlink, .dhx_richtext-linkeditor--handler_unlink *": function () {
                      i._events.fire(h.RichTextEvents.action, [
                        h.Action.update,
                        { modifier: h.Modifier.link, modifierValue: void 0 },
                        !0,
                      ]),
                        i._popup.hide();
                    },
                    ".dhx_richtext-linkeditor--handler_edit, .dhx_richtext-linkeditor--handler_edit *": function () {
                      (i._editMode = !0),
                        i.paint(),
                        setTimeout(function () {
                          return i.focus();
                        }, 10);
                    },
                  },
                  onmouseover: function (t) {
                    var e = s.locateNode(t, "dhx_id");
                    e &&
                      l.tooltip(d.default[e.getAttribute("dhx_id")], {
                        node: e,
                        position: l.Position.bottom,
                      });
                  },
                  oninput: function (t) {
                    var e = t.target.value;
                    t.target.classList.contains("link-input")
                      ? !i._link && e
                        ? ((i._link = e), i.paint())
                        : e
                        ? (i._link = e)
                        : ((i._link = e), i.paint())
                      : (i._text = e);
                  },
                  onkeydown: function (t) {
                    t.which === u.Key.enter && i._link && i._apply(),
                      t.which === u.Key.esc && i._popup.hide();
                  },
                }),
                i.mount(
                  null,
                  r.create({
                    render: function () {
                      return i._draw();
                    },
                  })
                ),
                i._popup.attach(i),
                i
              );
            }
            return (
              i(e, t),
              (e.prototype.isVisible = function () {
                return this._popup.isVisible();
              }),
              (e.prototype.show = function (t, e) {
                var n = this;
                this._popup.show(t, { mode: e, centering: !0 }),
                  setTimeout(function () {
                    return n.focus();
                  }, 10);
              }),
              (e.prototype.hide = function () {
                this._popup.hide();
              }),
              (e.prototype.get = function () {
                return { link: this._link, text: this._text };
              }),
              (e.prototype.getCurrentLinkRef = function () {
                return this._currentLinkRef;
              }),
              (e.prototype.set = function (t, e) {
                (this._editMode = !t),
                  (this._link = t || ""),
                  (this._text = e || ""),
                  (this._initText = this._text),
                  this.paint();
              }),
              (e.prototype.focus = function () {
                var t = this.getRootView().refs;
                t && t.linkInput && t.linkInput.el.focus();
              }),
              (e.prototype._destroyCurrentLinkRef = function () {
                this._currentLinkRef &&
                  (this._getParentView().refs[this._currentLinkRef].patch({
                    class: "",
                  }),
                  (this._currentLinkRef = null));
              }),
              (e.prototype._initEvents = function () {
                var t = this;
                this._popup.events.on(
                  c.PopupEvents.beforeHide,
                  function (e, n) {
                    return !e || !t._getParentView().node.el.contains(n.target);
                  }
                ),
                  this._popup.events.on(c.PopupEvents.afterHide, function () {
                    return t._destroyCurrentLinkRef();
                  }),
                  this._popup.events.on(c.PopupEvents.afterShow, function () {
                    var e = t._editor.selection.get().left,
                      n = f.getTextHash(e.blockIndex, e.textIndex),
                      i = t._getParentView().refs[n];
                    i.parent.patch({ class: "dhx--link_edited" }),
                      (t._currentLinkRef = i.parent.ref);
                  }),
                  this._events.on(
                    h.RichTextEvents.selectionChange,
                    function (e) {
                      var n = e.range,
                        i = e.left,
                        o =
                          t._editor.blocks[i.blockIndex].textNodes[i.textIndex];
                      t.isVisible() && t.hide(),
                        o.style.link && !n && t._show();
                    }
                  ),
                  this._events.on(h.RichTextEvents.showLinkEditor, function () {
                    return t._show();
                  }),
                  this._events.on(h.RichTextEvents.change, function () {
                    if (t.isVisible()) {
                      var e = t._editor.selection.get(),
                        n = e.left,
                        i = e.range;
                      if (
                        !t._editor.blocks[n.blockIndex].textNodes[n.textIndex]
                          .style.link ||
                        i
                      )
                        t.hide();
                      else {
                        var o = t._editor.getLinkInfo(),
                          r = o.link,
                          s = o.text;
                        t.set(r, s);
                      }
                    }
                  });
              }),
              (e.prototype._draw = function () {
                return r.el(
                  ".dhx_richtext-linkeditor " +
                    (this._drawViewMode()
                      ? ".dhx_richtext-linkeditor--mode_view"
                      : ""),
                  o({}, this._handlers),
                  this._editMode ? this._drawEditMode() : this._drawViewMode()
                );
              }),
              (e.prototype._drawEditMode = function () {
                return [
                  r.el(".dhx_richtext-linkeditor__inputs", [
                    r.el(
                      ".dhx_form-group.dhx_form-group--type_inline.dhx_richtext-linkeditor__input",
                      [
                        r.el(".dhx_label", "Text"),
                        r.el("input.dhx_input.text-input", {
                          value: this._text,
                          _key: "textInput",
                          _ref: "textInput",
                        }),
                      ]
                    ),
                    r.el(
                      ".dhx_form-group.dhx_form-group--type_inline.dhx_richtext-linkeditor__input",
                      [
                        r.el(".dhx_label", "Link"),
                        r.el("input.dhx_input.link-input", {
                          value: this._link,
                          _key: "linkInput",
                          _ref: "linkInput",
                        }),
                      ]
                    ),
                  ]),
                  r.el(".dhx_richtext-linkeditor__controls", [
                    r.el(
                      "button.dhx_richtext-linkeditor--handler_apply.dhx_button.dhx_button--size_medium.dhx_button--view_flat.dhx_button--color_primary",
                      { disabled: !this._link },
                      d.default.apply
                    ),
                  ]),
                ];
              }),
              (e.prototype._drawViewMode = function () {
                return [
                  r.el(
                    "a.dhx_richtext-linkeditor__link",
                    { href: this._link, target: "_blank" },
                    this._link
                  ),
                  r.el(".dhx_richtext-linkeditor__controls", [
                    r.el(
                      "button.dhx_richtext-linkeditor--handler_edit.dhx_button.dhx_button--icon.dhx_button--size_medium.dhx_button--view_link.dhx_button--color_secondary",
                      { dhx_id: "edit" },
                      [r.el("span.dhx_button__icon.dxi.dxi-pencil")]
                    ),
                    r.el(
                      "button.dhx_richtext-linkeditor--handler_unlink.dhx_button.dhx_button--icon.dhx_button--size_medium.dhx_button--view_link.dhx_button--color_secondary",
                      { dhx_id: "removeLink" },
                      [r.el("span.dhx_button__icon.dxi.dxi-link-variant-off")]
                    ),
                  ]),
                ];
              }),
              (e.prototype._modifyLink = function (t) {
                return "#" === t[0]
                  ? t
                  : "http" === t.slice(0, 4).toLowerCase()
                  ? t
                  : "http://" + t;
              }),
              (e.prototype._apply = function () {
                var t = this._modifyLink(this._link),
                  e = this._text,
                  n = !e.trim();
                (this._initText !== this._text || n) &&
                  this._editor.updateLinkText(n ? t : e),
                  t &&
                    this._events.fire(h.RichTextEvents.action, [
                      h.Action.update,
                      { modifier: h.Modifier.link, modifierValue: t },
                      !0,
                    ]),
                  this.hide();
              }),
              (e.prototype._show = function () {
                var t = this._editor.getLinkInfo(),
                  e = t.link,
                  n = t.text,
                  i = this._editor.selection.get().left,
                  o = f.getTextHash(i.blockIndex, i.textIndex),
                  r = this._getParentView().refs[o];
                if (e) {
                  if (r.parent.ref === this._currentLinkRef) return;
                  this.set(e, n), this.show(r.parent.el, l.Position.bottom);
                } else
                  this.set(null, this._editor.selection.getSelectedText()),
                    this.show(r.el, l.Position.bottom);
              }),
              e
            );
          })(a.View);
        e.LinkEditor = p;
      },
      function (t, e, n) {
        "use strict";
        var i =
            (this && this.__extends) ||
            (function () {
              var t = function (e, n) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                  })(e, n);
              };
              return function (e, n) {
                function i() {
                  this.constructor = e;
                }
                t(e, n),
                  (e.prototype =
                    null === n
                      ? Object.create(n)
                      : ((i.prototype = n.prototype), new i()));
              };
            })(),
          o =
            (this && this.__assign) ||
            function () {
              return (o =
                Object.assign ||
                function (t) {
                  for (var e, n = 1, i = arguments.length; n < i; n++)
                    for (var o in (e = arguments[n]))
                      Object.prototype.hasOwnProperty.call(e, o) &&
                        (t[o] = e[o]);
                  return t;
                }).apply(this, arguments);
            };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(3),
          s = n(0),
          a = n(6),
          l = n(1),
          c = n(10),
          u = n(37),
          d = (function (t) {
            function e(e) {
              void 0 === e && (e = {});
              var n = t.call(this, null, r.extend({}, e)) || this,
                i = (n._popup = document.createElement("div"));
              return (
                (i.className =
                  "dhx_widget dhx_popup" +
                  (n.config.css ? " " + n.config.css : "")),
                (i.style.position = "absolute"),
                n.mount(
                  i,
                  s.create({
                    render: function () {
                      return n.toVDOM();
                    },
                  })
                ),
                (n._clickEvent = function (t) {
                  return n.events.fire(u.PopupEvents.click, [t]);
                }),
                (n.events = e.events || new a.EventSystem(n)),
                (n._isActive = !1),
                n
              );
            }
            return (
              i(e, t),
              (e.prototype.show = function (t, e, n) {
                var i = this;
                void 0 === e && (e = {}),
                  this.events.fire(u.PopupEvents.beforeShow, [t]) &&
                    ((t = l.toNode(t)),
                    this._isActive
                      ? this._setPopupSize(t, e)
                      : (n && this.attach(n),
                        (this._popup.style.left = "0"),
                        (this._popup.style.top = "0"),
                        document.body.appendChild(this._popup),
                        this._setPopupSize(t, e),
                        (this._isActive = !0),
                        s.awaitRedraw().then(function () {
                          i.events.fire(u.PopupEvents.afterShow, [t]),
                            (i._outerClickDestructor = i._detectOuterClick(t));
                        })));
              }),
              (e.prototype.hide = function () {
                this._hide(!1, null);
              }),
              (e.prototype.isVisible = function () {
                return this._isActive;
              }),
              (e.prototype.attach = function (t, e) {
                return (
                  (this._html = null),
                  "object" == typeof t
                    ? (this._ui = t)
                    : "string" == typeof t
                    ? (this._ui = new window.dhx[t](null, e))
                    : "function" == typeof t &&
                      (t.prototype instanceof c.View
                        ? (this._ui = new t(null, e))
                        : (this._ui = {
                            getRootView: function () {
                              return t(e);
                            },
                          })),
                  this.paint(),
                  this._ui
                );
              }),
              (e.prototype.attachHTML = function (t) {
                (this._html = t), this.paint();
              }),
              (e.prototype.getWidget = function () {
                return this._ui;
              }),
              (e.prototype.getContainer = function () {
                return this.getRootView().refs.content.el;
              }),
              (e.prototype.toVDOM = function () {
                var t;
                return (
                  this._html
                    ? (t = s.el(".dhx_popup__inner-html-content", {
                        ".innerHTML": this._html,
                      }))
                    : (t = this._ui ? this._ui.getRootView() : null) &&
                      t.render &&
                      (t = s.inject(t)),
                  s.el(
                    "div",
                    {
                      class: "dhx_popup-content",
                      onclick: this._clickEvent,
                      _key: this._uid,
                      _ref: "content",
                    },
                    [t]
                  )
                );
              }),
              (e.prototype.destructor = function () {
                this.hide(),
                  this._outerClickDestructor && this._outerClickDestructor(),
                  (this._popup = null);
              }),
              (e.prototype._setPopupSize = function (t, e, n) {
                var i = this;
                void 0 === n && (n = 3);
                var r = this._popup.getBoundingClientRect(),
                  s = r.width,
                  a = r.height;
                if (
                  (this._timeout &&
                    (clearTimeout(this._timeout), (this._timeout = null)),
                  !n || (0 !== s && 0 !== a))
                ) {
                  var c = l.fitPosition(
                      t,
                      o(o({ centering: !0, mode: l.Position.bottom }, e), {
                        width: s,
                        height: a,
                      })
                    ),
                    u = c.left,
                    d = c.top;
                  if (
                    ((this._popup.style.left = u),
                    (this._popup.style.top = d),
                    e.indent && 0 !== e.indent)
                  )
                    switch (e.mode) {
                      case l.Position.top:
                        this._popup.style.top =
                          parseInt(this._popup.style.top.slice(0, -2), null) -
                          parseInt(e.indent.toString(), null) +
                          "px";
                        break;
                      case l.Position.bottom:
                        this._popup.style.top =
                          parseInt(this._popup.style.top.slice(0, -2), null) +
                          parseInt(e.indent.toString(), null) +
                          "px";
                        break;
                      case l.Position.left:
                        this._popup.style.left =
                          parseInt(this._popup.style.left.slice(0, -2), null) -
                          parseInt(e.indent.toString(), null) +
                          "px";
                        break;
                      case l.Position.right:
                        this._popup.style.left =
                          parseInt(this._popup.style.left.slice(0, -2), null) +
                          parseInt(e.indent.toString(), null) +
                          "px";
                        break;
                      default:
                        this._popup.style.top =
                          parseInt(this._popup.style.top.slice(0, -2), null) +
                          parseInt(e.indent.toString(), null) +
                          "px";
                    }
                } else
                  this._timeout = setTimeout(function () {
                    i._isActive &&
                      (i._setPopupSize(t, e, n - 1), (i._timeout = null));
                  });
              }),
              (e.prototype._detectOuterClick = function (t) {
                var e = this,
                  n = function (i) {
                    for (var o = i.target; o; ) {
                      if (o === t || o === e._popup) return;
                      o = o.parentNode;
                    }
                    e._hide(!0, i) && document.removeEventListener("click", n);
                  };
                return (
                  document.addEventListener("click", n),
                  function () {
                    return document.removeEventListener("click", n);
                  }
                );
              }),
              (e.prototype._hide = function (t, e) {
                if (this._isActive)
                  return (
                    !!this.events.fire(u.PopupEvents.beforeHide, [t, e]) &&
                    (document.body.removeChild(this._popup),
                    (this._isActive = !1),
                    this._outerClickDestructor &&
                      (this._outerClickDestructor(),
                      (this._outerClickDestructor = null)),
                    this.events.fire(u.PopupEvents.afterHide, [e]),
                    !0)
                  );
              }),
              e
            );
          })(c.View);
        e.Popup = d;
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.createScrollHelper = function (t) {
            var e = t.scrollHeight,
              n = t.scrollTop;
            return {
              update: function () {
                var n = t.scrollHeight;
                n > e && (t.scrollTop += n - e), (e = n);
              },
              saveScrollTop: function () {
                n = t.scrollTop;
              },
              restoreScrollTop: function () {
                t.scrollTop = n;
              },
            };
          });
      },
      function (t, e, n) {
        "use strict";
        var i,
          o =
            (this && this.__assign) ||
            function () {
              return (o =
                Object.assign ||
                function (t) {
                  for (var e, n = 1, i = arguments.length; n < i; n++)
                    for (var o in (e = arguments[n]))
                      Object.prototype.hasOwnProperty.call(e, o) &&
                        (t[o] = e[o]);
                  return t;
                }).apply(this, arguments);
            };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(90),
          s = n(1),
          a = n(36),
          l = n(29),
          c = n(7),
          u = n(4),
          d = n(15),
          h = n(2),
          f = n(39),
          p = n(20),
          _ =
            (((i = {})[h.Modifier.fontFamily] = "Roboto"),
            (i[h.Modifier.fontSize] = "14px"),
            (i[h.Modifier.color] = "#4D4D4D"),
            (i[h.Modifier.background] = "#FFFFFF"),
            (i[h.Modifier.bold] = !1),
            (i[h.Modifier.italic] = !1),
            (i[h.Modifier.strike] = !1),
            (i[h.Modifier.underline] = !1),
            (i[h.Modifier.style] = "p"),
            (i[h.Modifier.blockquote] = !1),
            (i[h.Modifier.align] = "left"),
            i),
          v = (function () {
            function t(t, e) {
              var n = this;
              (this._parent = t),
                (this._editor = e),
                (this.colorpicker = new r.Colorpicker(null)),
                (this._colorpickerPopup = new a.Popup()),
                this._colorpickerPopup.attach(this.colorpicker),
                (this._statsPopup = new a.Popup()),
                this._parent.events.on(h.RichTextEvents.change, function () {
                  n._statsPopup.isVisible() && n._statsPopup.hide();
                });
              var i = t.config.toolbarBlocks;
              (this.toolbar = new l.Toolbar(null, {
                css: "dhx_widget--bordered dhx_widget--bg_gray",
              })),
                this.toolbar.data.parse(c.getToolbarData(i, _)),
                (this._defaultToolbarState = {});
              for (var o = 0, s = i; o < s.length; o++) {
                switch (s[o]) {
                  case h.RTEToolbarBlock.align:
                    this._defaultToolbarState[h.Modifier.align] =
                      _[h.Modifier.align];
                    break;
                  case h.RTEToolbarBlock.color:
                    (this._defaultToolbarState[h.Modifier.color] =
                      _[h.Modifier.color]),
                      (this._defaultToolbarState[h.Modifier.background] =
                        _[h.Modifier.background]);
                    break;
                  case h.RTEToolbarBlock.decoration:
                    (this._defaultToolbarState[h.Modifier.bold] =
                      _[h.Modifier.bold]),
                      (this._defaultToolbarState[h.Modifier.italic] =
                        _[h.Modifier.italic]),
                      (this._defaultToolbarState[h.Modifier.underline] =
                        _[h.Modifier.underline]),
                      (this._defaultToolbarState[h.Modifier.strike] =
                        _[h.Modifier.strike]);
                    break;
                  case h.RTEToolbarBlock.style:
                    (this._defaultToolbarState[h.Modifier.style] =
                      _[h.Modifier.style]),
                      (this._defaultToolbarState[h.Modifier.fontFamily] =
                        _[h.Modifier.fontFamily]),
                      (this._defaultToolbarState[h.Modifier.fontSize] =
                        _[h.Modifier.fontSize]),
                      (this._defaultToolbarState[h.Modifier.blockquote] =
                        _[h.Modifier.blockquote]);
                }
              }
              this._initEvents();
            }
            return (
              (t.prototype._initEvents = function () {
                var t = this;
                this._parent.events.on(
                  h.RichTextEvents.selectionChange,
                  function () {
                    t._updateState();
                  }
                ),
                  this._parent.events.on(
                    h.RichTextEvents.change,
                    function (e, n, i) {
                      -1 !==
                        t._parent.config.toolbarBlocks.indexOf(
                          h.RTEToolbarBlock.undo
                        ) && t._updateUndoRedoState(n, i),
                        e !== h.Action.update && t._updateState();
                    }
                  ),
                  this.colorpicker.events.on(
                    r.ColorpickerEvents.change,
                    function (e) {
                      t._colorpickerPopup.hide(),
                        t._parent.events.fire(h.RichTextEvents.action, [
                          h.Action.update,
                          { modifier: t._colorpickerTarget, modifierValue: e },
                          !0,
                        ]),
                        t.toolbar.data.update(t._colorpickerTarget, {
                          html:
                            t._colorpickerTarget === h.Modifier.color
                              ? u.textColor(e)
                              : u.textSelectColor(e),
                        });
                    }
                  ),
                  this.toolbar.events.on(
                    l.NavigationBarEvents.click,
                    function (e, n) {
                      return t._toolbarAction(e, n);
                    }
                  );
              }),
              (t.prototype._toolbarAction = function (t, e) {
                var n = this.toolbar.data.getItem(t),
                  i = !n.active;
                switch (t) {
                  case "bold":
                    this._parent.events.fire(h.RichTextEvents.action, [
                      h.Action.update,
                      { modifier: h.Modifier.bold, modifierValue: i },
                      !0,
                    ]),
                      this.toolbar.data.update("bold", { active: i });
                    break;
                  case "underline":
                    this._parent.events.fire(h.RichTextEvents.action, [
                      h.Action.update,
                      { modifier: h.Modifier.underline, modifierValue: i },
                      !0,
                    ]),
                      this.toolbar.data.update("underline", { active: i });
                    break;
                  case "italic":
                    this._parent.events.fire(h.RichTextEvents.action, [
                      h.Action.update,
                      { modifier: h.Modifier.italic, modifierValue: i },
                      !0,
                    ]),
                      this.toolbar.data.update("italic", { active: i });
                    break;
                  case "strike":
                    this._parent.events.fire(h.RichTextEvents.action, [
                      h.Action.update,
                      { modifier: h.Modifier.strike, modifierValue: i },
                      !0,
                    ]),
                      this.toolbar.data.update("strike", { active: i });
                    break;
                  case "color":
                  case "background":
                    this._colorpickerTarget =
                      t === h.Modifier.background
                        ? h.Modifier.background
                        : h.Modifier.color;
                    var o = this._getColorState(this._colorpickerTarget);
                    this.colorpicker.setValue(o),
                      this.colorpicker.paint(),
                      this._colorpickerPopup.show(
                        s.locateNode(e.target, "dhx_id"),
                        { mode: s.Position.bottom }
                      );
                    break;
                  case "link":
                    e.stopPropagation(),
                      this._parent.events.fire(h.RichTextEvents.showLinkEditor);
                    break;
                  case "redo":
                    this._parent.events.fire(h.RichTextEvents.action, [
                      h.Action.redo,
                      null,
                      !0,
                    ]);
                    break;
                  case "undo":
                    this._parent.events.fire(h.RichTextEvents.action, [
                      h.Action.undo,
                      null,
                      !0,
                    ]);
                    break;
                  case "clear-style":
                    this._parent.events.fire(h.RichTextEvents.action, [
                      h.Action.clear,
                      null,
                      !0,
                    ]);
                    break;
                  case "blockquote":
                    this._parent.events.fire(h.RichTextEvents.action, [
                      h.Action.update,
                      { modifier: h.Modifier.blockquote, modifierValue: i },
                      !0,
                    ]),
                      this.toolbar.data.update("blockquote", { active: i });
                    break;
                  case "fullscreen":
                    n.$fullscreen
                      ? this._parent.exitFullScreen()
                      : this._parent.fullScreen();
                    break;
                  case "stats":
                    var r = s.locateNode(e),
                      a = this._editor.selection.get().range;
                    this._statsPopup.attach(
                      f.statsRenderer(
                        this._parent.getStats(a),
                        this._parent.config.customStats
                      )
                    ),
                      this._statsPopup.show(r, {
                        mode: s.Position.bottom,
                        centering: !0,
                      });
                    break;
                  default:
                    var l = u.actionIdToModifierValue(t);
                    switch (!0) {
                      case u.startsWith(t, "font-size"):
                        this._parent.events.fire(h.RichTextEvents.action, [
                          h.Action.update,
                          {
                            modifier: h.Modifier.fontSize,
                            modifierValue: l + "px",
                          },
                          !0,
                        ]),
                          this.toolbar.data.update(h.Modifier.fontSize, {
                            value: l + "px",
                          });
                        break;
                      case u.startsWith(t, "align"):
                        this._parent.events.fire(h.RichTextEvents.action, [
                          h.Action.update,
                          { modifier: h.Modifier.align, modifierValue: l },
                          !0,
                        ]),
                          this.toolbar.data.update("align-left", {
                            active: "left" === l,
                          }),
                          this.toolbar.data.update("align-right", {
                            active: "right" === l,
                          }),
                          this.toolbar.data.update("align-center", {
                            active: "center" === l,
                          });
                        break;
                      case u.startsWith(t, "style"):
                        this._parent.events.fire(h.RichTextEvents.action, [
                          h.Action.update,
                          { modifier: h.Modifier.style, modifierValue: l },
                          !0,
                        ]),
                          this.toolbar.data.update(h.Modifier.style, {
                            value: d.default[l],
                          });
                        break;
                      case u.startsWith(t, "font"):
                        this._parent.events.fire(h.RichTextEvents.action, [
                          h.Action.update,
                          {
                            modifier: h.Modifier.fontFamily,
                            modifierValue: u.actionIdToModifierValue(t),
                          },
                          !0,
                        ]),
                          this.toolbar.data.update(h.Modifier.fontFamily, {
                            value: l,
                          });
                    }
                }
              }),
              (t.prototype._updateState = function () {
                var t = this._getCommonModifiers();
                for (var e in t)
                  switch (e) {
                    case h.Modifier.align:
                      this.toolbar.data.update("align-left", {
                        active: "left" === t[e],
                      }),
                        this.toolbar.data.update("align-right", {
                          active: "right" === t[e],
                        }),
                        this.toolbar.data.update("align-center", {
                          active: "center" === t[e],
                        });
                      break;
                    case h.Modifier.style:
                      -1 !==
                        this._parent.config.toolbarBlocks.indexOf(
                          h.RTEToolbarBlock.style
                        ) &&
                        this.toolbar.data.update(e, { value: d.default[t[e]] });
                      break;
                    case h.Modifier.blockquote:
                      this.toolbar.data.update("blockquote", { active: t[e] });
                      break;
                    case h.Modifier.color:
                      this.toolbar.data.update(e, { html: u.textColor(t[e]) });
                      break;
                    case h.Modifier.background:
                      this.toolbar.data.update(e, {
                        html: u.textSelectColor(t[e]),
                      });
                      break;
                    case h.Modifier.fontFamily:
                    case h.Modifier.fontSize:
                      this.toolbar.data.update(e, { value: t[e] });
                      break;
                    case h.Modifier.italic:
                    case h.Modifier.bold:
                    case h.Modifier.underline:
                    case h.Modifier.strike:
                      this.toolbar.data.update(e, { active: t[e] });
                  }
              }),
              (t.prototype._updateUndoRedoState = function (t, e) {
                t ? this.toolbar.enable("undo") : this.toolbar.disable("undo"),
                  e
                    ? this.toolbar.enable("redo")
                    : this.toolbar.disable("redo");
              }),
              (t.prototype._getCommonModifiers = function () {
                var t,
                  e,
                  n = this;
                return (
                  this._editor.eachSelectedNode(function (e, i) {
                    if (t) {
                      var o = p.getComputedNodeStyle(
                        e,
                        i,
                        n._defaultToolbarState
                      );
                      for (var r in t) t[r] !== o[r] && delete t[r];
                    } else t = p.getComputedNodeStyle(e, i, n._defaultToolbarState);
                  }),
                  this._editor.eachSelectedBlock(function (t) {
                    if (e) {
                      var i = p.getComputedBlockStyle(
                        t,
                        n._defaultToolbarState
                      );
                      for (var o in e) e[o] !== i[o] && delete e[o];
                    } else e = p.getComputedBlockStyle(t, n._defaultToolbarState);
                  }),
                  o(o(o({}, c.defaultDiffrentStyle), e), t)
                );
              }),
              (t.prototype._getColorState = function (t) {
                var e,
                  n = _[t],
                  i = !0;
                return (
                  this._editor.eachSelectedNode(function (o) {
                    var r = o.style[t] || n;
                    e ? (i = i && e === r) : (e = r);
                  }),
                  i ? e : n
                );
              }),
              t
            );
          })();
        e.RichTextToolbarHelper = v;
      },
      function (t, e, n) {
        "use strict";
        function i(t) {
          for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
        }
        Object.defineProperty(e, "__esModule", { value: !0 }),
          i(n(91)),
          i(n(40)),
          i(n(21));
        var o = n(22);
        e.locale = o.default;
      },
      function (t, e, n) {
        "use strict";
        var i =
            (this && this.__extends) ||
            (function () {
              var t = function (e, n) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                  })(e, n);
              };
              return function (e, n) {
                function i() {
                  this.constructor = e;
                }
                t(e, n),
                  (e.prototype =
                    null === n
                      ? Object.create(n)
                      : ((i.prototype = n.prototype), new i()));
              };
            })(),
          o =
            (this && this.__spreadArrays) ||
            function () {
              for (var t = 0, e = 0, n = arguments.length; e < n; e++)
                t += arguments[e].length;
              var i = Array(t),
                o = 0;
              for (e = 0; e < n; e++)
                for (var r = arguments[e], s = 0, a = r.length; s < a; s++, o++)
                  i[o] = r[s];
              return i;
            };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(0),
          s = n(6),
          a = n(1),
          l = n(10),
          c = n(3),
          u = n(21),
          d = n(92),
          h = n(22),
          f = n(40),
          p = n(26),
          _ = n(11),
          v = n(93),
          g = n(94),
          x = (function (t) {
            function e(e, n) {
              var i = t.call(this, e, n) || this;
              (i._setPaletteGrip = function (t) {
                var e = i
                    .getRootView()
                    .refs.picker_palette.el.getBoundingClientRect(),
                  n = t.clientY - e.top,
                  o = t.clientX - e.left,
                  r = g.calculatePaletteGrip(e, n, o),
                  s = r.s,
                  a = r.v;
                (i._pickerState.hsv.s = s),
                  (i._pickerState.hsv.v = a),
                  i.paint();
              }),
                (i._setRangeGrip = function (t) {
                  var e = i
                      .getRootView()
                      .refs.hue_range.el.getBoundingClientRect(),
                    n = t.clientX - e.left,
                    o = g.calculateRangeGrip(e, n),
                    r = o.h,
                    s = o.rangeLeft;
                  (i._pickerState.hsv.h = r),
                    (i._pickerState.rangeLeft = s),
                    i.paint();
                }),
                (i._onColorClick = function (t, e) {
                  (i._selected = e.data.color.toUpperCase()),
                    i.events.fire(f.ColorpickerEvents.change, [i._selected]),
                    i.events.fire(f.ColorpickerEvents.colorChange, [
                      i._selected,
                    ]);
                }),
                (i._container = e),
                (i.config = c.extend(
                  {
                    css: "",
                    grayShades: !0,
                    pickerOnly: !1,
                    paletteOnly: !1,
                    customColors: [],
                    palette: d.palette,
                    width: "238px",
                    mode: f.ViewsMode.palette,
                  },
                  i.config
                )),
                i.config.palette || (i.config.palette = d.palette),
                i.config.customColors &&
                  (i.config.customColors = i.config.customColors.map(function (
                    t
                  ) {
                    return t.toUpperCase();
                  })),
                (i._pickerState = { hsv: { h: 0, s: 1, v: 1 }, customHex: "" }),
                (i.events = new s.EventSystem(i)),
                i._setHandlers();
              var o = r.create({
                render: function () {
                  return i._getContent();
                },
              });
              return i.mount(i._container, o), i;
            }
            return (
              i(e, t),
              (e.prototype.destructor = function () {
                this.unmount();
              }),
              (e.prototype.clear = function () {
                (this._selected = ""), this.paint();
              }),
              (e.prototype.setValue = function (t) {
                this._focusColor(t) &&
                  (this.paint(),
                  this.events.fire(f.ColorpickerEvents.change, [
                    this._selected,
                  ]),
                  this.events.fire(f.ColorpickerEvents.colorChange, [
                    this._selected,
                  ]));
              }),
              (e.prototype.setFocus = function (t) {
                this._focusColor(t) && this.paint();
              }),
              (e.prototype.getValue = function () {
                return this._selected || "";
              }),
              (e.prototype.getCustomColors = function () {
                return this.config.customColors;
              }),
              (e.prototype.setCustomColors = function (t) {
                (this.config.customColors = t.map(function (t) {
                  return t.toUpperCase();
                })),
                  this.paint();
              }),
              (e.prototype.setCurrentMode = function (t) {
                f.ViewsMode[t] &&
                  ((this.config.mode = t),
                  this.events.fire(f.ColorpickerEvents.modeChange, [t]),
                  this.events.fire(f.ColorpickerEvents.viewChange, [t]),
                  this.paint());
              }),
              (e.prototype.getCurrentMode = function () {
                return this.config.mode;
              }),
              (e.prototype.getView = function () {
                return this.getCurrentMode();
              }),
              (e.prototype.setView = function (t) {
                this.setCurrentMode(t);
              }),
              (e.prototype.focusValue = function (t) {
                this.setFocus(t);
              }),
              (e.prototype._setHandlers = function () {
                var t = this;
                (this._handlers = {
                  click: { ".dhx_palette__cell": this._onColorClick },
                  mousedown: function (e) {
                    var n = a.locate(e);
                    (t._pickerState.customHex = ""),
                      "picker_palette" === n
                        ? t._setPaletteGrip(e)
                        : t._setRangeGrip(e);
                    var i =
                      "picker_palette" === n
                        ? t._setPaletteGrip
                        : t._setRangeGrip;
                    document.addEventListener("mousemove", i),
                      document.addEventListener("mouseup", function () {
                        document.removeEventListener("mousemove", i);
                      }),
                      t.paint();
                  },
                  buttonsClick: function (e) {
                    t.setCurrentMode(f.ViewsMode.palette),
                      "cancel" !== e
                        ? "apply" === e &&
                          -1 ===
                            t.config.customColors.indexOf(
                              t._pickerState.background
                            ) &&
                          (t.setValue(t._pickerState.background),
                          t.events.fire(f.ColorpickerEvents.apply, []),
                          t.events.fire(f.ColorpickerEvents.selectClick, []))
                        : t.events.fire(f.ColorpickerEvents.cancelClick, []);
                  },
                  customColorClick: function () {
                    t.setView(f.ViewsMode.picker);
                  },
                  oninput: function (e) {
                    t._inputTimeout && clearTimeout(t._inputTimeout),
                      (t._inputTimeout = setTimeout(function () {
                        var n = e.target.value;
                        -1 === n.indexOf("#") && (n = "#" + n),
                          (t._pickerState.customHex = n),
                          u.isHex(n) &&
                            ((t._pickerState.hsv = u.HexToHSV(n)), t.paint());
                      }, 100));
                  },
                  contextmenu: {
                    ".dhx_palette__cell": function (e, n) {
                      e.preventDefault();
                      var i = t.config.customColors.indexOf(n.data.color);
                      -1 !== i && t._removeCustomColor(i), t.paint();
                    },
                  },
                  mouseover: {
                    ".dhx_palette__cell": function (t) {
                      t.target &&
                        p.tooltip(h.default.rightClickToDelete, {
                          node: t.target,
                          position: _.Position.bottom,
                        });
                    },
                    ".dhx_colorpicker-custom-colors__picker": function (t) {
                      t.target &&
                        p.tooltip(h.default.addNewColor, {
                          node: t.target,
                          position: _.Position.bottom,
                        });
                    },
                  },
                }),
                  this.events.on(f.ColorpickerEvents.change, function () {
                    t.paint();
                  }),
                  this.events.on(f.ColorpickerEvents.colorChange, function () {
                    t.paint();
                  });
              }),
              (e.prototype._focusColor = function (t) {
                if (void 0 === t || t.length < 4) return !1;
                var e = t.toUpperCase();
                if (!u.isHex(e)) return !1;
                var n = this.config.palette.reduce(function (t, n) {
                    return (
                      t ||
                      (n.forEach(function (n) {
                        n.toUpperCase() !== e || (t = !0);
                      }),
                      t)
                    );
                  }, !1),
                  i = -1 !== d.grayShades.indexOf(e);
                if (!n && !i) {
                  var o = this.getCustomColors();
                  -1 === o.indexOf(e.toUpperCase()) && o.push(e.toUpperCase());
                }
                return (
                  (this._selected = e || null),
                  (this._pickerState.hsv = u.HexToHSV(e)),
                  !0
                );
              }),
              (e.prototype._removeCustomColor = function (t) {
                this.config.customColors.splice(t, 1);
              }),
              (e.prototype._getCells = function (t, e) {
                var n = this;
                return (
                  void 0 === e && (e = ""),
                  t.reduce(function (t, i) {
                    var o =
                      (n._selected || "").toUpperCase() === i.toUpperCase()
                        ? "dhx_palette__cell--selected"
                        : "";
                    return (
                      t.push(
                        r.el(".dhx_palette__cell", {
                          class: o + " " + e,
                          _data: { color: i },
                          style: "background:" + i,
                        })
                      ),
                      t
                    );
                  }, [])
                );
              }),
              (e.prototype._getGrayShades = function () {
                return r.el(".dhx_palette__row", this._getCells(d.grayShades));
              }),
              (e.prototype._getPalette = function () {
                var t = this;
                return this.config.palette.reduce(function (e, n) {
                  return e.push(r.el(".dhx_palette__col", t._getCells(n))), e;
                }, []);
              }),
              (e.prototype._getContent = function () {
                var t;
                return (
                  (t = this.config.pickerOnly
                    ? [v.getPicker(this, this._pickerState, this._handlers)]
                    : "palette" === this.config.mode
                    ? o(
                        [this.config.grayShades && this._getGrayShades()],
                        this._getPalette(),
                        [
                          !this.config.paletteOnly &&
                            r.el(
                              ".dhx_colorpicker-custom-colors",
                              { onmouseover: this._handlers.mouseover },
                              [
                                r.el(".dhx_colorpicker-custom-colors__header", [
                                  h.default.customColors,
                                ]),
                                r.el(
                                  ".dhx_palette--custom.dhx_palette__row",
                                  o(
                                    this._getCells(
                                      this.config.customColors,
                                      "dhx_custom-color__cell"
                                    ),
                                    [
                                      r.el(
                                        ".dhx_colorpicker-custom-colors__picker",
                                        {
                                          class: "dxi dxi-plus",
                                          onclick: this._handlers
                                            .customColorClick,
                                          onmouseover: this._handlers.mouseover,
                                        }
                                      ),
                                    ]
                                  )
                                ),
                              ]
                            ),
                        ]
                      )
                    : [v.getPicker(this, this._pickerState, this._handlers)]),
                  r.el(
                    ".dhx_widget.dhx_colorpicker",
                    {
                      class: this.config.css,
                      style: { width: this.config.width },
                    },
                    [
                      r.el(
                        ".dhx_palette",
                        {
                          onclick: this._handlers.click,
                          oncontextmenu: this._handlers.contextmenu,
                        },
                        t
                      ),
                    ]
                  )
                );
              }),
              e
            );
          })(l.View);
        e.Colorpicker = x;
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.grayShades = [
            "#000000",
            "#4C4C4C",
            "#666666",
            "#808080",
            "#999999",
            "#B3B3B3",
            "#CCCCCC",
            "#E6E6E6",
            "#F2F2F2",
            "#FFFFFF",
          ]),
          (e.palette = [
            [
              "#D4DAE4",
              "#B0B8CD",
              "#949DB1",
              "#727A8C",
              "#5E6677",
              "#3F4757",
              "#1D2534",
            ],
            [
              "#FFCDD2",
              "#FE9998",
              "#F35C4E",
              "#E94633",
              "#D73C2D",
              "#CA3626",
              "#BB2B1A",
            ],
            [
              "#F9E6AD",
              "#F4D679",
              "#EDB90F",
              "#EAA100",
              "#EA8F00",
              "#EA7E00",
              "#EA5D00",
            ],
            [
              "#BCE4CE",
              "#90D2AF",
              "#33B579",
              "#36955F",
              "#247346",
              "#1D5B38",
              "#17492D",
            ],
            [
              "#BDF0E9",
              "#92E7DC",
              "#02D7C5",
              "#11B3A5",
              "#018B80",
              "#026B60",
              "#024F43",
            ],
            [
              "#B3E5FC",
              "#81D4FA",
              "#29B6F6",
              "#039BE5",
              "#0288D1",
              "#0277BD",
              "#01579B",
            ],
            [
              "#AEC1FF",
              "#88A3F9",
              "#5874CD",
              "#2349AE",
              "#163FA2",
              "#083596",
              "#002381",
            ],
            [
              "#C5C0DA",
              "#9F97C1",
              "#7E6BAD",
              "#584A8F",
              "#4F4083",
              "#473776",
              "#3A265F",
            ],
            [
              "#D6BDCC",
              "#C492AC",
              "#A9537C",
              "#963A64",
              "#81355A",
              "#6E3051",
              "#4C2640",
            ],
            [
              "#D2C5C1",
              "#B4A09A",
              "#826358",
              "#624339",
              "#5D4037",
              "#4E342E",
              "#3E2723",
            ],
          ]);
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(21),
          o = n(0),
          r = n(22);
        (e.getPicker = function (t, e, n) {
          var s = i.HSVtoRGB(e.hsv);
          e.background = i.RGBToHex(s);
          var a = i.RGBToHex(i.HSVtoRGB({ h: e.hsv.h, s: 1, v: 1 })),
            l = t.getRootView(),
            c = l.refs
              ? l.refs.picker_palette.el.getBoundingClientRect()
              : { height: 200, width: 218, x: 0, y: 0 },
            u = c.height - 2,
            d = c.width - 2,
            h = u - e.hsv.v * u - 4,
            f = e.hsv.s * d - 4,
            p = c.width - 6,
            _ = p - ((360 - e.hsv.h) / 360) * p,
            v = i.isHex(e.customHex)
              ? e.customHex.replace("#", "")
              : e.background.replace("#", "");
          return o.el(".dhx_colorpicker-picker", {}, [
            o.el(
              ".dhx_colorpicker-picker__palette",
              {
                style: { height: 132, background: a },
                onmousedown: n.mousedown,
                dhx_id: "picker_palette",
                _ref: "picker_palette",
              },
              [o.el(".dhx_palette_grip", { style: { top: h, left: f } })]
            ),
            o.el(
              ".dhx_colorpicker-hue-range",
              {
                style: { height: 16 },
                onmousedown: n.mousedown,
                dhx_id: "hue_range",
                _key: "hue_range",
                _ref: "hue_range",
              },
              [o.el(".dhx_colorpicker-hue-range__grip", { style: { left: _ } })]
            ),
            o.el(".dhx_colorpicker-value", [
              o.el(".dhx_colorpicker-value__color", {
                style: { background: e.background },
              }),
              o.el(".dhx_colorpicker-value__input__wrapper", [
                o.el("input", {
                  class: "dhx_colorpicker-value__input",
                  value: v,
                  oninput: n.oninput,
                  maxlength: "7",
                  _key: "hex_input",
                }),
              ]),
            ]),
            o.el(".dhx_colorpicker-picker__buttons", [
              !t.config.pickerOnly &&
                o.el(
                  "button",
                  {
                    class:
                      "dhx_button dhx_button--size_medium dhx_button--view_link dhx_button--color_primary",
                    onclick: [n.buttonsClick, "cancel"],
                  },
                  r.default.cancel
                ),
              o.el(
                "button",
                {
                  class:
                    "dhx_button dhx_button--size_medium dhx_button--view_flat dhx_button--color_primary",
                  onclick: [n.buttonsClick, "apply"],
                },
                r.default.select
              ),
            ]),
          ]);
        }),
          (e.calculatePaletteGrip = function (t, e, n) {
            var i = t.refs.picker_palette.el.getBoundingClientRect(),
              o = i.height,
              r = i.width;
            (e = e < 0 ? 0 : e > o ? o : e), (n = n < 0 ? 0 : n > r ? r : n);
            var s = Math.round(n / (r / 100)),
              a = 100 - Math.round(e / (o / 100));
            (this._pickerState.hsv.s = s / 100),
              (this._pickerState.hsv.v = a / 100);
          });
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.calculatePaletteGrip = function (t, e, n) {
            var i = t.height,
              o = t.width;
            return (
              (e = e < 0 ? 0 : e > i ? i : e),
              (n = n < 0 ? 0 : n > o ? o : n),
              {
                s: Math.round(n / (o / 100)) / 100,
                v: (100 - Math.round(e / (i / 100))) / 100,
              }
            );
          }),
          (e.calculateRangeGrip = function (t, e) {
            var n = t.width;
            return (
              (e = e < 0 ? 0 : e > n ? n : e),
              { h: Math.round((e / n) * 360), rangeLeft: e }
            );
          });
      },
      function (t, e, n) {
        "use strict";
        var i =
            (this && this.__assign) ||
            function () {
              return (i =
                Object.assign ||
                function (t) {
                  for (var e, n = 1, i = arguments.length; n < i; n++)
                    for (var o in (e = arguments[n]))
                      Object.prototype.hasOwnProperty.call(e, o) &&
                        (t[o] = e[o]);
                  return t;
                }).apply(this, arguments);
            },
          o =
            (this && this.__spreadArrays) ||
            function () {
              for (var t = 0, e = 0, n = arguments.length; e < n; e++)
                t += arguments[e].length;
              var i = Array(t),
                o = 0;
              for (e = 0; e < n; e++)
                for (var r = arguments[e], s = 0, a = r.length; s < a; s++, o++)
                  i[o] = r[s];
              return i;
            };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(7),
          s = n(96),
          a = n(97),
          l = n(4),
          c = n(98),
          u = n(42),
          d = n(100),
          h = n(2),
          f = n(102),
          p = n(41),
          _ = n(23),
          v = n(20),
          g = (function () {
            function t(t) {
              var e = this,
                n = t.events,
                i = t.uid,
                o = t.getRootView,
                r = t.repaint;
              (this.getTextElement = function (t, n) {
                var i = l.getTextHash(t, n),
                  o = e._getRootView();
                return (
                  o.refs &&
                  o.refs[i] &&
                  o.refs[i].el &&
                  o.refs[i].el.childNodes[0]
                );
              }),
                (this._events = n),
                (this._repaint = r),
                (this._getRootView = o),
                (this.selection = new f.SelectionHelper(this, i, n)),
                this.clear(),
                (this.manager = new d.Manager(this)),
                this._events.on(h.RichTextEvents.change, function (t) {
                  t !== h.Action.update && (e._tempNode = null);
                }),
                this._events.on(h.RichTextEvents.selectionChange, function () {
                  e._tempNode = null;
                });
            }
            return (
              (t.prototype.clear = function () {
                (this.blocks = [
                  new p.Block([new _.TextNode("", r.emptyStyle)]),
                ]),
                  this.selection.clear();
              }),
              (t.prototype.getState = function () {
                return JSON.stringify({
                  b: this.blocks.map(function (t) {
                    return {
                      s: a.minimizeBlockStyle(t.style),
                      n: t.textNodes.map(function (t) {
                        return {
                          s: a.minimizeTextNodeStyle(t.style),
                          t: t.text,
                        };
                      }),
                    };
                  }),
                  s: this.selection.getCompact(),
                });
              }),
              (t.prototype.setState = function (t) {
                var e = JSON.parse(t);
                (this.blocks = e.b.map(function (t) {
                  var e = t.s,
                    n = t.n.map(function (t) {
                      return new _.TextNode(
                        t.t,
                        a.textNodeStyleFromMinimize(t.s)
                      );
                    });
                  return new p.Block(n, a.blockStyleFromMinimize(e));
                })),
                  this.selection.setCompact(e.s);
              }),
              (t.prototype.parse = function (t, e) {
                if (
                  (void 0 === e && (e = "html"),
                  "html" === e || "markdown" === e)
                ) {
                  var n = c.parser(t, e);
                  this.blocks = n;
                } else
                  this.blocks = t.map(function (t) {
                    return new p.Block(
                      t.textNodes.map(function (t) {
                        return new _.TextNode(t.text, t.style);
                      }),
                      t.style
                    );
                  });
                return (
                  this.selection.set({
                    range: !1,
                    left: i(
                      { blockIndex: this.blocks.length - 1 },
                      this.blocks[this.blocks.length - 1].getBlockEnd()
                    ),
                  }),
                  !0
                );
              }),
              (t.prototype.serialize = function (t) {
                return (
                  void 0 === t && (t = "html"),
                  this.balance(),
                  "markdown" === t
                    ? s.markdownSerializer(this.blocks)
                    : "html" === t
                    ? u.serializer(this.blocks)
                    : "text" === t
                    ? this.blocks.reduce(function (t, e, n) {
                        return (
                          t +
                          (n > 0 ? "\n" : "") +
                          e.textNodes.reduce(function (t, e) {
                            return t + e.text;
                          }, "")
                        );
                      }, "")
                    : void 0
                );
              }),
              (t.prototype.removeBlock = function (t) {
                this.blocks.splice(t, 1),
                  0 === this.blocks.length && this.clear();
              }),
              (t.prototype.insertBlock = function () {
                this._splitCarret();
                var t = this.selection.get(),
                  e = t.range,
                  n = t.left;
                if (!e) {
                  var i = this.blocks[n.blockIndex].textNodes,
                    o = i.splice(n.textIndex + (n.offset ? 1 : 0), 1 / 0),
                    r = this.blocks[n.blockIndex].style;
                  if (0 === o.length) {
                    var s = this.blocks[n.blockIndex].textNodes[n.textIndex]
                      .style;
                    (o = [new _.TextNode("", l.copyWithout(s, { link: !0 }))]),
                      ((r = l.copyWithout(r, { blockquote: !0, style: !0 }))[
                        h.Modifier.style
                      ] = "p");
                  } else {
                    var a = i[i.length - 1] && i[i.length - 1].style.link;
                    if (a)
                      for (var c = 0, u = o; c < u.length; c++) {
                        var d = u[c];
                        if (d.style.link !== a) break;
                        d.style = l.copyWithout(d.style, { link: !0 });
                      }
                  }
                  0 === i.length && this.blocks[n.blockIndex].clear();
                  var f = new p.Block(o, r);
                  this.blocks.splice(n.blockIndex + 1, 0, f),
                    this.selection.set({
                      range: e,
                      left: {
                        offset: 0,
                        textIndex: 0,
                        blockIndex: n.blockIndex + 1,
                      },
                    });
                }
              }),
              (t.prototype.eachSelectedNode = function (t) {
                var e = this.selection.get(),
                  n = e.range,
                  i = e.left,
                  o = e.right;
                if (n)
                  for (var r = i.blockIndex; r <= o.blockIndex; r++) {
                    var s = 0,
                      a = this.blocks[r].textNodes.length - 1;
                    r === i.blockIndex && (s = i.textIndex),
                      r === o.blockIndex && (a = o.textIndex);
                    for (var l = s; l <= a; l++)
                      t(this.blocks[r].textNodes[l], this.blocks[r]);
                  }
                else
                  i &&
                    t(
                      this.blocks[i.blockIndex].textNodes[i.textIndex],
                      this.blocks[i.blockIndex]
                    );
              }),
              (t.prototype.eachSelectedBlock = function (t) {
                var e = this.selection.get(),
                  n = e.range,
                  i = e.left,
                  o = e.right;
                if (n)
                  for (var r = i.blockIndex; r <= o.blockIndex; r++)
                    t(this.blocks[r], r);
                else t(this.blocks[i.blockIndex]);
              }),
              (t.prototype.copy = function () {
                if (!this.selection.get().range) return !1;
                this._splitRange();
                var t = [],
                  e = "",
                  n = this.selection.get(),
                  i = n.left,
                  o = n.right;
                return (
                  this.eachSelectedBlock(function (n, r) {
                    var s = 0,
                      a = n.textNodes.length - 1,
                      l = [];
                    t.push({ style: n.style, textNodes: l }),
                      r === i.blockIndex && (s = i.textIndex),
                      r === o.blockIndex && (a = o.textIndex);
                    for (var c = s; c <= a; c++) {
                      var u = n.textNodes[c];
                      l.push({ style: u.style, text: u.text }), (e += u.text);
                    }
                    r < o.blockIndex && (e += "\n");
                  }),
                  { content: t, raw: e }
                );
              }),
              (t.prototype.cut = function () {
                var t = this.copy();
                return this._splitRange(), this._removeRange(), t;
              }),
              (t.prototype.paste = function (t, e) {
                var n, r, s;
                if ((void 0 === e && (e = "text"), "text" === e))
                  return this.add(t);
                this.selection.get().range &&
                  (this._splitRange(), this._removeRange());
                var a = this.selection.get().left,
                  l = "inner" === e ? JSON.parse(t) : c.parser(t, "html"),
                  u = l[0],
                  d = l.slice(1),
                  h = void 0;
                if (this.blocks[a.blockIndex].isEmpty())
                  (this.blocks[a.blockIndex].textNodes = []),
                    (this.blocks[a.blockIndex].style = u.style);
                else
                  switch (
                    this.blocks[a.blockIndex].splitTextNode(
                      a.textIndex,
                      a.offset
                    )
                  ) {
                    case p.SplitResult.offsetStart:
                      h = a.textIndex;
                      break;
                    case p.SplitResult.offsetEnd:
                    case p.SplitResult.complete:
                      h = a.textIndex + 1;
                  }
                var f = void 0,
                  v = void 0;
                h > 0
                  ? ((f = this.blocks[a.blockIndex].textNodes.slice(0, h)),
                    (v = this.blocks[a.blockIndex].textNodes.slice(h, 1 / 0)))
                  : ((f = []), (v = this.blocks[a.blockIndex].textNodes));
                for (var g = 0, x = u.textNodes; g < x.length; g++) {
                  var y = x[g];
                  f.push(new _.TextNode(y.text, y.style));
                }
                if (((this.blocks[a.blockIndex].textNodes = f), d.length)) {
                  var m = d.map(function (t) {
                    return new p.Block(
                      t.textNodes.map(function (t) {
                        return new _.TextNode(t.text, t.style);
                      }),
                      t.style
                    );
                  });
                  (n = this.blocks).splice.apply(
                    n,
                    o([a.blockIndex + 1, 0], m)
                  );
                  var b = this.blocks[a.blockIndex + d.length].getBlockEnd();
                  (r = this.blocks[a.blockIndex + d.length]
                    .textNodes).push.apply(r, v),
                    this.selection.set({
                      range: !1,
                      left: i({ blockIndex: a.blockIndex + d.length }, b),
                    });
                } else {
                  b = this.blocks[a.blockIndex].getBlockEnd();
                  (s = this.blocks[a.blockIndex].textNodes).push.apply(s, v),
                    this.selection.set({
                      range: !1,
                      left: i({ blockIndex: a.blockIndex }, b),
                    });
                }
                return !0;
              }),
              (t.prototype.add = function (t) {
                if (
                  (this.selection.get().range &&
                    (this._splitRange(), this._removeRange()),
                  t.newBlock)
                )
                  return this.insertBlock(), !0;
                var e = this.selection.get().left,
                  n = e.offset,
                  i = e.blockIndex,
                  o = e.textIndex;
                if (
                  this._tempNode &&
                  this._tempNode.offset === n &&
                  this._tempNode.blockIndex === i &&
                  this._tempNode.textIndex === o
                )
                  return this._createNodeFromTemp(t);
                var r = this.blocks[i].textNodes,
                  s = r[o];
                if (
                  !s.style.link ||
                  s.text.length !== n ||
                  (r[o + 1] && r[o + 1].style.link)
                )
                  if (s.style.link && 0 === n) {
                    a = new _.TextNode(t, l.copyWithout(s.style, { link: !0 }));
                    r.splice(o, 0, a),
                      this.selection.set({
                        range: !1,
                        left: { offset: t.length, blockIndex: i, textIndex: o },
                      });
                  } else
                    r[o].insert(t, n),
                      this.selection.set({
                        range: !1,
                        left: {
                          offset: n + t.length,
                          blockIndex: i,
                          textIndex: o,
                        },
                      });
                else {
                  var a = new _.TextNode(
                    t,
                    l.copyWithout(s.style, { link: !0 })
                  );
                  r.splice(o + 1, 0, a),
                    this.selection.set({
                      range: !1,
                      left: {
                        offset: t.length,
                        blockIndex: i,
                        textIndex: o + 1,
                      },
                    });
                }
                return !0;
              }),
              (t.prototype.remove = function (t) {
                return this.selection.get().range
                  ? (this._splitRange(), this._removeRange(), !0)
                  : this._removeSymbol(t);
              }),
              (t.prototype.update = function (t) {
                var e = t.modifier,
                  n = t.modifierValue,
                  o = this.selection.get(),
                  r = o.range,
                  s = o.left;
                switch (e) {
                  case h.Modifier.align:
                  case h.Modifier.style:
                  case h.Modifier.blockquote:
                    return (
                      this.eachSelectedBlock(function (t) {
                        var o;
                        (t.style = i(i({}, t.style), (((o = {})[e] = n), o))),
                          e === h.Modifier.style &&
                            "p" !== n &&
                            t.textNodes.forEach(function (t) {
                              var e;
                              t.style = l.copyWithout(
                                t.style,
                                (((e = {})[h.Modifier.fontSize] = !0), e)
                              );
                            });
                      }),
                      !0
                    );
                  case h.Modifier.strike:
                  case h.Modifier.underline:
                  case h.Modifier.italic:
                  case h.Modifier.bold:
                  case h.Modifier.color:
                  case h.Modifier.background:
                  case h.Modifier.fontFamily:
                  case h.Modifier.fontSize:
                    return r
                      ? (this._splitRange(),
                        this.eachSelectedNode(function (t) {
                          var o;
                          t.style = i(i({}, t.style), (((o = {})[e] = n), o));
                        }),
                        !0)
                      : (this._createTempTextNode({
                          modifier: e,
                          modifierValue: n,
                        }),
                        !1);
                  case h.Modifier.link:
                    var a = this.blocks[s.blockIndex].textNodes[s.textIndex];
                    return (
                      void 0 === e || void 0 !== a.style.link
                        ? this._eachLink(function (t) {
                            var o;
                            t.style = i(i({}, t.style), (((o = {})[e] = n), o));
                          })
                        : (r && this._splitRange(),
                          this.eachSelectedNode(function (t) {
                            var o;
                            t.style = i(i({}, t.style), (((o = {})[e] = n), o));
                          })),
                      !0
                    );
                }
              }),
              (t.prototype.clearStyles = function () {
                return (
                  !!this.selection.get().range &&
                  (this._splitRange(),
                  this.eachSelectedNode(function (t) {
                    t.style = r.emptyStyle;
                  }),
                  !0)
                );
              }),
              (t.prototype.balance = function () {
                var t,
                  e = this.selection.get(),
                  n = e.left,
                  o = e.right,
                  r = e.range,
                  s = this.blocks[n.blockIndex].nodePositionToOffset(
                    n.textIndex,
                    n.offset
                  );
                r &&
                  (t = this.blocks[o.blockIndex].nodePositionToOffset(
                    o.textIndex,
                    o.offset
                  ));
                var a = !0;
                this.blocks.forEach(function (t) {
                  t.balance() && (a = !1);
                }),
                  a ||
                    (this.selection.set({
                      range: r,
                      left: i(
                        { blockIndex: n.blockIndex },
                        this.blocks[n.blockIndex].offsetToNodePosition(s)
                      ),
                      right:
                        t &&
                        i(
                          { blockIndex: o.blockIndex },
                          this.blocks[o.blockIndex].offsetToNodePosition(t)
                        ),
                    }),
                    this._repaint());
              }),
              (t.prototype.getLinkInfo = function () {
                var t,
                  e = "";
                return (
                  this._eachLink(function (n) {
                    (e += n.text), (t = n.style.link);
                  }),
                  { text: e, link: t }
                );
              }),
              (t.prototype.updateLinkText = function (t) {
                var e = this.selection.get(),
                  n = e.left,
                  i = e.range,
                  o = this.blocks[n.blockIndex].textNodes,
                  r = o[n.textIndex].style.link,
                  s = new _.TextNode(t, {});
                if (r) {
                  for (
                    var a = n.textIndex, l = n.textIndex;
                    o[a - 1] && o[a - 1].style.link === r;

                  )
                    a--;
                  for (; o[l + 1] && o[l + 1].style.link === r; ) l++;
                  o.splice(a, l - a + 1, s),
                    this.selection.set({
                      range: !0,
                      left: {
                        blockIndex: n.blockIndex,
                        textIndex: a,
                        offset: 0,
                      },
                      right: {
                        blockIndex: n.blockIndex,
                        textIndex: a,
                        offset: t.length,
                      },
                    });
                } else if (i) {
                  this._splitRange(), this._removeRange();
                  var c = this.selection.get().left,
                    u = c.blockIndex,
                    d = c.textIndex;
                  this.blocks[u].textNodes.splice(d + 1, 0, s),
                    this.selection.set({
                      range: !0,
                      left: { blockIndex: u, textIndex: d + 1, offset: 0 },
                      right: {
                        blockIndex: u,
                        textIndex: d + 1,
                        offset: t.length,
                      },
                    });
                } else {
                  var h = void 0;
                  if (this.blocks[n.blockIndex].isEmpty())
                    o.splice(0, 1), (h = 0);
                  else
                    h =
                      this.blocks[n.blockIndex].splitTextNode(
                        n.textIndex,
                        n.offset
                      ) === p.SplitResult.offsetStart
                        ? n.textIndex
                        : n.textIndex + 1;
                  o.splice(h, 0, s),
                    this.selection.set({
                      range: !0,
                      left: {
                        blockIndex: n.blockIndex,
                        textIndex: h,
                        offset: 0,
                      },
                      right: {
                        blockIndex: n.blockIndex,
                        textIndex: h,
                        offset: t.length,
                      },
                    });
                }
              }),
              (t.prototype._splitRange = function () {
                var t = this.selection.get(),
                  e = t.range,
                  n = t.left,
                  i = t.right;
                if (e)
                  if (
                    n.blockIndex !== i.blockIndex ||
                    n.textIndex !== i.textIndex
                  )
                    if (n.blockIndex !== i.blockIndex) {
                      if (n.blockIndex !== i.blockIndex) {
                        r = n.textIndex;
                        var o = n.blockIndex;
                        a = this.blocks[n.blockIndex].splitTextNode(
                          n.textIndex,
                          n.offset
                        );
                        this.blocks[i.blockIndex].splitTextNode(
                          i.textIndex,
                          i.offset
                        ),
                          a === p.SplitResult.offsetEnd &&
                            (this.blocks[o].textNodes[r + 1]
                              ? (r += 1)
                              : ((r = 0), (o += 1))),
                          a === p.SplitResult.complete && (r += 1);
                        s = {
                          range: e,
                          left: { blockIndex: o, textIndex: r, offset: 0 },
                          right: {
                            blockIndex: i.blockIndex,
                            textIndex: i.textIndex,
                            offset: i.offset,
                          },
                        };
                        this.selection.set(s);
                      }
                    } else {
                      var r = n.textIndex;
                      l = i.textIndex;
                      (a = this.blocks[n.blockIndex].splitTextNode(
                        r,
                        n.offset
                      )) === p.SplitResult.offsetEnd && (r += 1),
                        a === p.SplitResult.complete && ((l += 1), (r += 1)),
                        this.blocks[i.blockIndex].splitTextNode(l, i.offset);
                      var s = {
                        range: e,
                        left: {
                          blockIndex: n.blockIndex,
                          textIndex: r,
                          offset: 0,
                        },
                        right: {
                          blockIndex: i.blockIndex,
                          textIndex: l,
                          offset: i.offset,
                        },
                      };
                      this.selection.set(s);
                    }
                  else {
                    var a,
                      l = n.textIndex,
                      c = i.offset;
                    (a = this.blocks[n.blockIndex].splitTextNode(
                      n.textIndex,
                      n.offset
                    )) === p.SplitResult.complete &&
                      ((l += 1), (c -= n.offset)),
                      this.blocks[i.blockIndex].splitTextNode(l, c);
                    var s = {
                      range: e,
                      left: {
                        blockIndex: n.blockIndex,
                        textIndex: l,
                        offset: 0,
                      },
                      right: {
                        blockIndex: i.blockIndex,
                        textIndex: l,
                        offset: c,
                      },
                    };
                    this.selection.set(s);
                  }
              }),
              (t.prototype._splitCarret = function () {
                var t = this.selection.get(),
                  e = t.range,
                  n = t.left;
                if (
                  !e &&
                  this.blocks[n.blockIndex].splitTextNode(
                    n.textIndex,
                    n.offset
                  ) === p.SplitResult.complete
                ) {
                  var i = {
                    range: e,
                    left: {
                      blockIndex: n.blockIndex,
                      textIndex: n.textIndex + 1,
                      offset: 0,
                    },
                  };
                  this.selection.set(i);
                }
              }),
              (t.prototype._removeRange = function () {
                var t,
                  e = this.selection.get(),
                  n = e.left,
                  o = e.right;
                if (o)
                  if (this.selection.isFull()) this.clear();
                  else if (n.blockIndex === o.blockIndex)
                    0 === n.textIndex &&
                    o.textIndex ===
                      this.blocks[o.blockIndex].textNodes.length - 1
                      ? (this.blocks[n.blockIndex].clear(),
                        this.selection.set({
                          range: !1,
                          left: i(i({}, n), { offset: 0 }),
                        }))
                      : (this.blocks[n.blockIndex].textNodes.splice(
                          n.textIndex,
                          o.textIndex - n.textIndex + 1
                        ),
                        0 === n.textIndex
                          ? this.selection.set({
                              range: !1,
                              left: {
                                blockIndex: n.blockIndex,
                                textIndex: 0,
                                offset: 0,
                              },
                            })
                          : this.selection.set({
                              range: !1,
                              left: {
                                blockIndex: n.blockIndex,
                                textIndex: n.textIndex - 1,
                                offset: this.blocks[n.blockIndex].textNodes[
                                  n.textIndex - 1
                                ].text.length,
                              },
                            }));
                  else {
                    var r = this.blocks[n.blockIndex].removeNodes(
                        n.textIndex,
                        !0
                      ),
                      s = this.blocks[o.blockIndex].removeNodes(
                        o.textIndex,
                        !1
                      ),
                      a = this.blocks[n.blockIndex].getBlockEnd();
                    switch (!0) {
                      case r && s:
                        this.blocks[n.blockIndex].clear();
                        break;
                      case r && !s:
                        this.blocks[n.blockIndex].textNodes = this.blocks[
                          o.blockIndex
                        ].textNodes;
                        break;
                      case !r && !s:
                        (t = this.blocks[n.blockIndex].textNodes).push.apply(
                          t,
                          this.blocks[o.blockIndex].textNodes
                        );
                    }
                    for (var l = o.blockIndex; l > n.blockIndex; l--)
                      this.removeBlock(l);
                    r
                      ? this.selection.set({
                          range: !1,
                          left: {
                            blockIndex: n.blockIndex,
                            textIndex: n.textIndex,
                            offset: 0,
                          },
                        })
                      : this.selection.set({
                          range: !1,
                          left: i({ blockIndex: n.blockIndex }, a),
                        });
                  }
              }),
              (t.prototype._removeSymbol = function (t) {
                var e = this.selection.get().left,
                  n = e.offset,
                  o = e.blockIndex,
                  s = e.textIndex,
                  a = {
                    range: !1,
                    left: { offset: n, blockIndex: o, textIndex: s },
                  },
                  l = this.blocks[o].getBlockEnd(),
                  c = this.blocks[o].textNodes,
                  u = c[s],
                  d = !1;
                switch (!0) {
                  case this.blocks[o].isEmpty():
                    if (0 === o && t)
                      return (
                        !v.isEmptyBlockStyle(this.blocks[0].style) &&
                        ((this.blocks[0].style = r.emptyStyle), !0)
                      );
                    if (!t && !this.blocks[o + 1]) return !1;
                    this.removeBlock(o),
                      0 === o
                        ? ((a.left.offset = 0), (a.left.textIndex = 0))
                        : t &&
                          (a.left = i(
                            { blockIndex: o - 1 },
                            this.blocks[o - 1].getBlockEnd()
                          ));
                    break;
                  case 0 === n && 0 === s && t:
                    if (0 === o) return !1;
                    if (this.blocks[o - 1].isEmpty())
                      (this.blocks[o - 1].textNodes = c),
                        this.removeBlock(o),
                        (a.left = {
                          blockIndex: o - 1,
                          textIndex: 0,
                          offset: 0,
                        });
                    else {
                      var h = this.blocks[o - 1].getBlockEnd();
                      (this.blocks[o - 1].textNodes = this.blocks[
                        o - 1
                      ].textNodes.concat(c)),
                        this.removeBlock(o),
                        (a.left = i({ blockIndex: o - 1 }, h));
                    }
                    break;
                  case l.offset === n && l.textIndex === s && !t:
                    var f = this.blocks[o + 1];
                    if (!f) return;
                    if (f.isEmpty()) return this.removeBlock(o + 1), !0;
                    (this.blocks[o].textNodes = this.blocks[o].textNodes.concat(
                      f.textNodes
                    )),
                      this.removeBlock(o + 1);
                    break;
                  default:
                    switch (u.remove(n, t)) {
                      case _.RemoveTextResult.nullTextLength:
                        c.length > 1
                          ? (c.splice(s, 1),
                            (a.left =
                              0 === s
                                ? { blockIndex: o, textIndex: 0, offset: 0 }
                                : {
                                    blockIndex: o,
                                    textIndex: s - 1,
                                    offset: c[s - 1].text.length,
                                  }))
                          : ((u.style = r.emptyStyle),
                            (a.left = {
                              textIndex: s,
                              blockIndex: o,
                              offset: 0,
                            }));
                        break;
                      case _.RemoveTextResult.complete:
                        t &&
                          (a.left = {
                            blockIndex: o,
                            textIndex: s,
                            offset: n - 1,
                          });
                        break;
                      case _.RemoveTextResult.forceRemoveNext:
                        (a.left = {
                          blockIndex: o,
                          textIndex: s + 1,
                          offset: 0,
                        }),
                          (d = !0);
                        break;
                      case _.RemoveTextResult.forceRemovePrevious:
                        (a.left = {
                          blockIndex: o,
                          textIndex: s - 1,
                          offset: c[s - 1].text.length,
                        }),
                          (d = !0);
                    }
                }
                return this.selection.set(a), !d || this._removeSymbol(t);
              }),
              (t.prototype._eachLink = function (t) {
                var e = this.selection.get().left,
                  n = this.blocks[e.blockIndex].textNodes[e.textIndex].style
                    .link;
                if (n) {
                  for (
                    var i = this.blocks[e.blockIndex].textNodes,
                      o = [],
                      r = e.textIndex;
                    r >= 0 && i[r].style.link === n;
                    r--
                  )
                    o.unshift(i[r]);
                  for (
                    r = e.textIndex + 1;
                    r < i.length && i[r].style.link === n;
                    r++
                  )
                    o.push(i[r]);
                  o.forEach(t);
                }
              }),
              (t.prototype._createTempTextNode = function (t) {
                var e,
                  n,
                  o = t.modifier,
                  r = t.modifierValue,
                  s = this.selection.get().left,
                  a = s.offset,
                  l = s.blockIndex,
                  c = s.textIndex;
                n =
                  this._tempNode &&
                  this._tempNode.offset === a &&
                  this._tempNode.blockIndex === l &&
                  this._tempNode.textIndex === c
                    ? this._tempNode.style
                    : this.blocks[l].textNodes[c].style;
                var u = i(i({}, n), (((e = {})[o] = r), e)),
                  d = this.blocks[l].textNodes;
                !u.link || (d[c + 1] && d[c + 1].style.link) || delete u.link,
                  (this._tempNode = {
                    style: u,
                    blockIndex: l,
                    textIndex: c,
                    offset: a,
                  });
              }),
              (t.prototype._createNodeFromTemp = function (t) {
                var e = this._tempNode,
                  n = e.style,
                  i = e.blockIndex,
                  o = e.textIndex,
                  r = e.offset,
                  s =
                    this.blocks[i].splitTextNode(o, r) ===
                    p.SplitResult.offsetStart
                      ? o
                      : o + 1,
                  a = new _.TextNode(t, n);
                return (
                  this.blocks[i].isEmpty()
                    ? (this.blocks[i].textNodes = [a])
                    : this.blocks[i].textNodes.splice(s, 0, a),
                  this.selection.set({
                    range: !1,
                    left: { blockIndex: i, textIndex: s, offset: t.length },
                  }),
                  (this._tempNode = null),
                  !0
                );
              }),
              t
            );
          })();
        e.Editor = g;
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i,
          o = n(2);
        function r(t, e) {
          for (var n = "", r = [], a = 0, l = t; a < l.length; a++) {
            var c = l[a],
              u = [],
              d = c.style;
            d[o.Modifier.bold] && u.push(i.bold),
              d[o.Modifier.italic] && u.push(i.italic),
              (n += s(r, u).join("") + c.text),
              (r = u);
          }
          return (n += r.join("")), e && (n = "[" + n + "](" + e + ")"), n;
        }
        function s(t, e) {
          var n = e.filter(function (e) {
              return -1 === t.indexOf(e);
            }),
            i = t.filter(function (t) {
              return -1 === e.indexOf(t);
            });
          return n.concat(i);
        }
        (e.markdownSerializer = function (t) {
          return t.reduce(function (t, e, n) {
            return (
              t +
              (n ? "\n\n" : "") +
              (function (t) {
                switch (t.style[o.Modifier.style]) {
                  case "h1":
                    return "# ";
                  case "h2":
                    return "## ";
                  case "h3":
                    return "### ";
                  case "h4":
                    return "#### ";
                  case "h5":
                    return "##### ";
                  case "h6":
                    return "###### ";
                  default:
                    return "";
                }
              })(e) +
              (function (t) {
                for (
                  var e, n = "", i = [], o = 0, s = t.textNodes;
                  o < s.length;
                  o++
                ) {
                  var a = s[o];
                  a.style.link
                    ? e === a.style.link
                      ? i.push(a)
                      : (i.length && (n += r(i, e)), (i = [a]))
                    : e
                    ? (i.length && (n += r(i, e)), (i = [a]))
                    : i.push(a),
                    (e = a.style.link);
                }
                return (n += r(i, e));
              })(e)
            );
          }, "");
        }),
          (function (t) {
            (t.bold = "**"), (t.italic = "*");
          })(i || (i = {}));
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(2);
        (e.minimizeTextNodeStyle = function (t) {
          var e =
              t[i.Modifier.bold] |
              (t[i.Modifier.italic] << 1) |
              (t[i.Modifier.underline] << 2) |
              (t[i.Modifier.strike] << 3),
            n = {};
          return (
            0 !== e && (n.f = e),
            t[i.Modifier.fontSize] &&
              (n.s = parseInt(t[i.Modifier.fontSize], 10)),
            t[i.Modifier.fontFamily] && (n.t = t[i.Modifier.fontFamily]),
            t[i.Modifier.color] && (n.c = t[i.Modifier.color]),
            t[i.Modifier.background] && (n.b = t[i.Modifier.background]),
            t[i.Modifier.link] && (n.a = t[i.Modifier.link]),
            n
          );
        }),
          (e.textNodeStyleFromMinimize = function (t) {
            var e = {};
            return (
              t.f &&
                (1 & t.f && (e[i.Modifier.bold] = !0),
                2 & t.f && (e[i.Modifier.italic] = !0),
                4 & t.f && (e[i.Modifier.underline] = !0),
                8 & t.f && (e[i.Modifier.strike] = !0)),
              t.s && (e[i.Modifier.fontSize] = t.s + "px"),
              t.t && (e[i.Modifier.fontFamily] = t.t),
              t.c && (e[i.Modifier.color] = t.c),
              t.b && (e[i.Modifier.background] = t.b),
              t.a && (e[i.Modifier.link] = t.a),
              e
            );
          });
        var o = { left: 1, center: 2, right: 3 },
          r = { 1: "left", 2: "center", 3: "right" },
          s = { h1: 1, h2: 2, h3: 3, h4: 4, h5: 5, h6: 6 },
          a = { 1: "h1", 2: "h2", 3: "h3", 4: "h4", 5: "h5", 6: "h6" };
        (e.minimizeBlockStyle = function (t) {
          var e = {};
          if ((t[i.Modifier.blockquote] && (e.b = 1), t[i.Modifier.style])) {
            var n = s[t[i.Modifier.style]];
            n && (e.s = n);
          }
          return t[i.Modifier.align] && (e.a = o[t[i.Modifier.align]]), e;
        }),
          (e.blockStyleFromMinimize = function (t) {
            var e = {};
            return (
              t.a && (e[i.Modifier.align] = r[t.a]),
              t.b && (e[i.Modifier.blockquote] = !0),
              (e[i.Modifier.style] = a[t.s] || "p"),
              e
            );
          });
      },
      function (t, e, n) {
        "use strict";
        var i =
          (this && this.__assign) ||
          function () {
            return (i =
              Object.assign ||
              function (t) {
                for (var e, n = 1, i = arguments.length; n < i; n++)
                  for (var o in (e = arguments[n]))
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t;
              }).apply(this, arguments);
          };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(99),
          r = n(7),
          s = n(41),
          a = n(23),
          l = n(2);
        e.parser = function (t, e) {
          var n;
          void 0 === e && (e = "html"), "markdown" === e && (t = o(t));
          var r = document.createElement("div");
          r.innerHTML = t.replace(/<br\s*[\/]?>/g, "\n");
          var a = [];
          if (
            ((function t(e, n, o) {
              var r;
              if (
                (void 0 === o && (o = {}),
                (o = i(i({}, o), d(e))),
                c[e.nodeName])
              ) {
                var a = [];
                u(e, a);
                var h = new s.Block(
                  a,
                  i(i({}, o), (((r = {})[l.Modifier.style] = c[e.nodeName]), r))
                );
                n.push(h);
              } else
                for (var f = e.childNodes, p = 0; p < f.length; p++)
                  t(f[p], n, o);
            })(r, a),
            0 === a.length)
          ) {
            var h = i(
                (((n = {})[l.Modifier.style] = c[r.nodeName] || "p"), n),
                d(r)
              ),
              f = [];
            return u(r, f), [new s.Block(f, h)];
          }
          return a;
        };
        var c = {
          P: "p",
          H1: "h1",
          H2: "h2",
          H3: "h3",
          H4: "h4",
          H5: "h5",
          H6: "h6",
        };
        function u(t, e, n) {
          if ((void 0 === n && (n = {}), t.nodeType !== t.TEXT_NODE)) {
            var o = {},
              s = t.style || {},
              c = s.fontSize,
              d = s.fontWeight,
              h = s.fontFamily,
              f = s.color,
              p = s.background,
              _ = s.backgroundColor,
              v = s.textDecoration,
              g = s.fontStyle,
              x = (function (t) {
                var e, n, i, o, r;
                switch (t.nodeName) {
                  case "B":
                  case "STRONG":
                    return ((e = {})[l.Modifier.bold] = !0), e;
                  case "I":
                  case "EM":
                    return ((n = {})[l.Modifier.italic] = !0), n;
                  case "U":
                    return ((i = {})[l.Modifier.underline] = !0), i;
                  case "STRIKE":
                  case "S":
                    return ((o = {})[l.Modifier.strike] = !0), o;
                  case "A":
                    return ((r = {})[l.Modifier.link] = t.href), r;
                  default:
                    return {};
                }
              })(t);
            c && (o[l.Modifier.fontSize] = r.fontSizes[c] ? c : "14px"),
              d &&
                (o[l.Modifier.bold] = "bold" === d || parseInt(d, 10) >= 600),
              h && (o[l.Modifier.fontFamily] = r.fonts[h] ? h : "Roboto"),
              f && (o[l.Modifier.color] = f),
              (p || _) && (o[l.Modifier.background] = p || _),
              "underline" === v && (o[l.Modifier.underline] = !0),
              "line-through" === v && (o[l.Modifier.strike] = !0),
              g && (o[l.Modifier.italic] = "italic" === g);
            for (
              var y = i(i(i({}, n), x), o), m = t.childNodes, b = 0;
              b < m.length;
              b++
            )
              u(m[b], e, y);
          } else {
            var k = t.textContent
              .replace(/&nbsp;/g, " ")
              .replace(/&lt;/g, "<")
              .replace(/&gt;/g, ">");
            if (0 === k.replace(/\n/g, "").length) return;
            var w = new a.TextNode(k, n);
            e.push(w);
          }
        }
        function d(t) {
          if (!t || !t.style) return {};
          var e = {};
          return (
            t.style.textAlign && (e[l.Modifier.align] = t.style.textAlign),
            "BLOCKQUOTE" === t.nodeName && (e[l.Modifier.blockquote] = !0),
            e
          );
        }
      },
      function (t, e, n) {
        (function (e) {
          !(function (e) {
            "use strict";
            var n = {
              newline: /^\n+/,
              code: /^( {4}[^\n]+\n*)+/,
              fences: _,
              hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
              heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
              nptable: _,
              blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
              list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
              html:
                "^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$))",
              def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
              table: _,
              lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
              paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading| {0,3}>|<\/?(?:tag)(?: +|\n|\/?>)|<(?:script|pre|style|!--))[^\n]+)*)/,
              text: /^[^\n]+/,
            };
            function i(t) {
              (this.tokens = []),
                (this.tokens.links = Object.create(null)),
                (this.options = t || y.defaults),
                (this.rules = n.normal),
                this.options.pedantic
                  ? (this.rules = n.pedantic)
                  : this.options.gfm &&
                    (this.options.tables
                      ? (this.rules = n.tables)
                      : (this.rules = n.gfm));
            }
            (n._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/),
              (n._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/),
              (n.def = d(n.def)
                .replace("label", n._label)
                .replace("title", n._title)
                .getRegex()),
              (n.bullet = /(?:[*+-]|\d+\.)/),
              (n.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/),
              (n.item = d(n.item, "gm").replace(/bull/g, n.bullet).getRegex()),
              (n.list = d(n.list)
                .replace(/bull/g, n.bullet)
                .replace(
                  "hr",
                  "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))"
                )
                .replace("def", "\\n+(?=" + n.def.source + ")")
                .getRegex()),
              (n._tag =
                "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul"),
              (n._comment = /<!--(?!-?>)[\s\S]*?-->/),
              (n.html = d(n.html, "i")
                .replace("comment", n._comment)
                .replace("tag", n._tag)
                .replace(
                  "attribute",
                  / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
                )
                .getRegex()),
              (n.paragraph = d(n.paragraph)
                .replace("hr", n.hr)
                .replace("heading", n.heading)
                .replace("lheading", n.lheading)
                .replace("tag", n._tag)
                .getRegex()),
              (n.blockquote = d(n.blockquote)
                .replace("paragraph", n.paragraph)
                .getRegex()),
              (n.normal = v({}, n)),
              (n.gfm = v({}, n.normal, {
                fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\n? *\1 *(?:\n+|$)/,
                paragraph: /^/,
                heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/,
              })),
              (n.gfm.paragraph = d(n.paragraph)
                .replace(
                  "(?!",
                  "(?!" +
                    n.gfm.fences.source.replace("\\1", "\\2") +
                    "|" +
                    n.list.source.replace("\\1", "\\3") +
                    "|"
                )
                .getRegex()),
              (n.tables = v({}, n.gfm, {
                nptable: /^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,
                table: /^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/,
              })),
              (n.pedantic = v({}, n.normal, {
                html: d(
                  "^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))"
                )
                  .replace("comment", n._comment)
                  .replace(
                    /tag/g,
                    "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b"
                  )
                  .getRegex(),
                def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
              })),
              (i.rules = n),
              (i.lex = function (t, e) {
                return new i(e).lex(t);
              }),
              (i.prototype.lex = function (t) {
                return (
                  (t = t
                    .replace(/\r\n|\r/g, "\n")
                    .replace(/\t/g, "    ")
                    .replace(/\u00a0/g, " ")
                    .replace(/\u2424/g, "\n")),
                  this.token(t, !0)
                );
              }),
              (i.prototype.token = function (t, e) {
                var i, o, r, s, a, l, c, u, d, h, f, p, _, v, y, m;
                for (t = t.replace(/^ +$/gm, ""); t; )
                  if (
                    ((r = this.rules.newline.exec(t)) &&
                      ((t = t.substring(r[0].length)),
                      r[0].length > 1 && this.tokens.push({ type: "space" })),
                    (r = this.rules.code.exec(t)))
                  )
                    (t = t.substring(r[0].length)),
                      (r = r[0].replace(/^ {4}/gm, "")),
                      this.tokens.push({
                        type: "code",
                        text: this.options.pedantic ? r : x(r, "\n"),
                      });
                  else if ((r = this.rules.fences.exec(t)))
                    (t = t.substring(r[0].length)),
                      this.tokens.push({
                        type: "code",
                        lang: r[2],
                        text: r[3] || "",
                      });
                  else if ((r = this.rules.heading.exec(t)))
                    (t = t.substring(r[0].length)),
                      this.tokens.push({
                        type: "heading",
                        depth: r[1].length,
                        text: r[2],
                      });
                  else if (
                    e &&
                    (r = this.rules.nptable.exec(t)) &&
                    (l = {
                      type: "table",
                      header: g(r[1].replace(/^ *| *\| *$/g, "")),
                      align: r[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                      cells: r[3] ? r[3].replace(/\n$/, "").split("\n") : [],
                    }).header.length === l.align.length
                  ) {
                    for (
                      t = t.substring(r[0].length), f = 0;
                      f < l.align.length;
                      f++
                    )
                      /^ *-+: *$/.test(l.align[f])
                        ? (l.align[f] = "right")
                        : /^ *:-+: *$/.test(l.align[f])
                        ? (l.align[f] = "center")
                        : /^ *:-+ *$/.test(l.align[f])
                        ? (l.align[f] = "left")
                        : (l.align[f] = null);
                    for (f = 0; f < l.cells.length; f++)
                      l.cells[f] = g(l.cells[f], l.header.length);
                    this.tokens.push(l);
                  } else if ((r = this.rules.hr.exec(t)))
                    (t = t.substring(r[0].length)),
                      this.tokens.push({ type: "hr" });
                  else if ((r = this.rules.blockquote.exec(t)))
                    (t = t.substring(r[0].length)),
                      this.tokens.push({ type: "blockquote_start" }),
                      (r = r[0].replace(/^ *> ?/gm, "")),
                      this.token(r, e),
                      this.tokens.push({ type: "blockquote_end" });
                  else if ((r = this.rules.list.exec(t))) {
                    for (
                      t = t.substring(r[0].length),
                        c = {
                          type: "list_start",
                          ordered: (v = (s = r[2]).length > 1),
                          start: v ? +s : "",
                          loose: !1,
                        },
                        this.tokens.push(c),
                        u = [],
                        i = !1,
                        _ = (r = r[0].match(this.rules.item)).length,
                        f = 0;
                      f < _;
                      f++
                    )
                      (h = (l = r[f]).length),
                        ~(l = l.replace(/^ *([*+-]|\d+\.) +/, "")).indexOf(
                          "\n "
                        ) &&
                          ((h -= l.length),
                          (l = this.options.pedantic
                            ? l.replace(/^ {1,4}/gm, "")
                            : l.replace(
                                new RegExp("^ {1," + h + "}", "gm"),
                                ""
                              ))),
                        this.options.smartLists &&
                          f !== _ - 1 &&
                          (s === (a = n.bullet.exec(r[f + 1])[0]) ||
                            (s.length > 1 && a.length > 1) ||
                            ((t = r.slice(f + 1).join("\n") + t), (f = _ - 1))),
                        (o = i || /\n\n(?!\s*$)/.test(l)),
                        f !== _ - 1 &&
                          ((i = "\n" === l.charAt(l.length - 1)), o || (o = i)),
                        o && (c.loose = !0),
                        (m = void 0),
                        (y = /^\[[ xX]\] /.test(l)) &&
                          ((m = " " !== l[1]),
                          (l = l.replace(/^\[[ xX]\] +/, ""))),
                        (d = {
                          type: "list_item_start",
                          task: y,
                          checked: m,
                          loose: o,
                        }),
                        u.push(d),
                        this.tokens.push(d),
                        this.token(l, !1),
                        this.tokens.push({ type: "list_item_end" });
                    if (c.loose)
                      for (_ = u.length, f = 0; f < _; f++) u[f].loose = !0;
                    this.tokens.push({ type: "list_end" });
                  } else if ((r = this.rules.html.exec(t)))
                    (t = t.substring(r[0].length)),
                      this.tokens.push({
                        type: this.options.sanitize ? "paragraph" : "html",
                        pre:
                          !this.options.sanitizer &&
                          ("pre" === r[1] ||
                            "script" === r[1] ||
                            "style" === r[1]),
                        text: r[0],
                      });
                  else if (e && (r = this.rules.def.exec(t)))
                    (t = t.substring(r[0].length)),
                      r[3] && (r[3] = r[3].substring(1, r[3].length - 1)),
                      (p = r[1].toLowerCase().replace(/\s+/g, " ")),
                      this.tokens.links[p] ||
                        (this.tokens.links[p] = { href: r[2], title: r[3] });
                  else if (
                    e &&
                    (r = this.rules.table.exec(t)) &&
                    (l = {
                      type: "table",
                      header: g(r[1].replace(/^ *| *\| *$/g, "")),
                      align: r[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                      cells: r[3]
                        ? r[3].replace(/(?: *\| *)?\n$/, "").split("\n")
                        : [],
                    }).header.length === l.align.length
                  ) {
                    for (
                      t = t.substring(r[0].length), f = 0;
                      f < l.align.length;
                      f++
                    )
                      /^ *-+: *$/.test(l.align[f])
                        ? (l.align[f] = "right")
                        : /^ *:-+: *$/.test(l.align[f])
                        ? (l.align[f] = "center")
                        : /^ *:-+ *$/.test(l.align[f])
                        ? (l.align[f] = "left")
                        : (l.align[f] = null);
                    for (f = 0; f < l.cells.length; f++)
                      l.cells[f] = g(
                        l.cells[f].replace(/^ *\| *| *\| *$/g, ""),
                        l.header.length
                      );
                    this.tokens.push(l);
                  } else if ((r = this.rules.lheading.exec(t)))
                    (t = t.substring(r[0].length)),
                      this.tokens.push({
                        type: "heading",
                        depth: "=" === r[2] ? 1 : 2,
                        text: r[1],
                      });
                  else if (e && (r = this.rules.paragraph.exec(t)))
                    (t = t.substring(r[0].length)),
                      this.tokens.push({
                        type: "paragraph",
                        text:
                          "\n" === r[1].charAt(r[1].length - 1)
                            ? r[1].slice(0, -1)
                            : r[1],
                      });
                  else if ((r = this.rules.text.exec(t)))
                    (t = t.substring(r[0].length)),
                      this.tokens.push({ type: "text", text: r[0] });
                  else if (t)
                    throw new Error(
                      "Infinite loop on byte: " + t.charCodeAt(0)
                    );
                return this.tokens;
              });
            var o = {
              escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
              autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
              url: _,
              tag:
                "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
              link: /^!?\[(label)\]\(href(?:\s+(title))?\s*\)/,
              reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
              nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
              strong: /^__([^\s])__(?!_)|^\*\*([^\s])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
              em: /^_([^\s_])_(?!_)|^\*([^\s*"<\[])\*(?!\*)|^_([^\s][\s\S]*?[^\s_])_(?!_|[^\s.])|^_([^\s_][\s\S]*?[^\s])_(?!_|[^\s.])|^\*([^\s"<\[][\s\S]*?[^\s*])\*(?!\*)|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,
              code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
              br: /^( {2,}|\\)\n(?!\s*$)/,
              del: _,
              text: /^(`+|[^`])[\s\S]*?(?=[\\<!\[`*]|\b_| {2,}\n|$)/,
            };
            function r(t, e) {
              if (
                ((this.options = e || y.defaults),
                (this.links = t),
                (this.rules = o.normal),
                (this.renderer = this.options.renderer || new s()),
                (this.renderer.options = this.options),
                !this.links)
              )
                throw new Error("Tokens array requires a `links` property.");
              this.options.pedantic
                ? (this.rules = o.pedantic)
                : this.options.gfm &&
                  (this.options.breaks
                    ? (this.rules = o.breaks)
                    : (this.rules = o.gfm));
            }
            function s(t) {
              this.options = t || y.defaults;
            }
            function a() {}
            function l(t) {
              (this.tokens = []),
                (this.token = null),
                (this.options = t || y.defaults),
                (this.options.renderer = this.options.renderer || new s()),
                (this.renderer = this.options.renderer),
                (this.renderer.options = this.options);
            }
            function c(t, e) {
              if (e) {
                if (c.escapeTest.test(t))
                  return t.replace(c.escapeReplace, function (t) {
                    return c.replacements[t];
                  });
              } else if (c.escapeTestNoEncode.test(t))
                return t.replace(c.escapeReplaceNoEncode, function (t) {
                  return c.replacements[t];
                });
              return t;
            }
            function u(t) {
              return t.replace(
                /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,
                function (t, e) {
                  return "colon" === (e = e.toLowerCase())
                    ? ":"
                    : "#" === e.charAt(0)
                    ? "x" === e.charAt(1)
                      ? String.fromCharCode(parseInt(e.substring(2), 16))
                      : String.fromCharCode(+e.substring(1))
                    : "";
                }
              );
            }
            function d(t, e) {
              return (
                (t = t.source || t),
                (e = e || ""),
                {
                  replace: function (e, n) {
                    return (
                      (n = (n = n.source || n).replace(/(^|[^\[])\^/g, "$1")),
                      (t = t.replace(e, n)),
                      this
                    );
                  },
                  getRegex: function () {
                    return new RegExp(t, e);
                  },
                }
              );
            }
            function h(t, e, n) {
              if (t) {
                try {
                  var i = decodeURIComponent(u(n))
                    .replace(/[^\w:]/g, "")
                    .toLowerCase();
                } catch (t) {
                  return null;
                }
                if (
                  0 === i.indexOf("javascript:") ||
                  0 === i.indexOf("vbscript:") ||
                  0 === i.indexOf("data:")
                )
                  return null;
              }
              e &&
                !p.test(n) &&
                (n = (function (t, e) {
                  f[" " + t] ||
                    (/^[^:]+:\/*[^/]*$/.test(t)
                      ? (f[" " + t] = t + "/")
                      : (f[" " + t] = x(t, "/", !0)));
                  return (
                    (t = f[" " + t]),
                    "//" === e.slice(0, 2)
                      ? t.replace(/:[\s\S]*/, ":") + e
                      : "/" === e.charAt(0)
                      ? t.replace(/(:\/*[^/]*)[\s\S]*/, "$1") + e
                      : t + e
                  );
                })(e, n));
              try {
                n = encodeURI(n).replace(/%25/g, "%");
              } catch (t) {
                return null;
              }
              return n;
            }
            (o._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g),
              (o._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
              (o._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
              (o.autolink = d(o.autolink)
                .replace("scheme", o._scheme)
                .replace("email", o._email)
                .getRegex()),
              (o._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/),
              (o.tag = d(o.tag)
                .replace("comment", n._comment)
                .replace("attribute", o._attribute)
                .getRegex()),
              (o._label = /(?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?/),
              (o._href = /\s*(<(?:\\[<>]?|[^\s<>\\])*>|(?:\\[()]?|\([^\s\x00-\x1f\\]*\)|[^\s\x00-\x1f()\\])*?)/),
              (o._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/),
              (o.link = d(o.link)
                .replace("label", o._label)
                .replace("href", o._href)
                .replace("title", o._title)
                .getRegex()),
              (o.reflink = d(o.reflink).replace("label", o._label).getRegex()),
              (o.normal = v({}, o)),
              (o.pedantic = v({}, o.normal, {
                strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
                em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
                link: d(/^!?\[(label)\]\((.*?)\)/)
                  .replace("label", o._label)
                  .getRegex(),
                reflink: d(/^!?\[(label)\]\s*\[([^\]]*)\]/)
                  .replace("label", o._label)
                  .getRegex(),
              })),
              (o.gfm = v({}, o.normal, {
                escape: d(o.escape).replace("])", "~|])").getRegex(),
                _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
                url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
                _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
                del: /^~+(?=\S)([\s\S]*?\S)~+/,
                text: d(o.text)
                  .replace("]|", "~]|")
                  .replace(
                    "|$",
                    "|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&'*+/=?^_`{\\|}~-]+@|$"
                  )
                  .getRegex(),
              })),
              (o.gfm.url = d(o.gfm.url)
                .replace("email", o.gfm._extended_email)
                .getRegex()),
              (o.breaks = v({}, o.gfm, {
                br: d(o.br).replace("{2,}", "*").getRegex(),
                text: d(o.gfm.text).replace("{2,}", "*").getRegex(),
              })),
              (r.rules = o),
              (r.output = function (t, e, n) {
                return new r(e, n).output(t);
              }),
              (r.prototype.output = function (t) {
                for (var e, n, i, o, s, a, l = ""; t; )
                  if ((s = this.rules.escape.exec(t)))
                    (t = t.substring(s[0].length)), (l += s[1]);
                  else if ((s = this.rules.autolink.exec(t)))
                    (t = t.substring(s[0].length)),
                      (i =
                        "@" === s[2]
                          ? "mailto:" + (n = c(this.mangle(s[1])))
                          : (n = c(s[1]))),
                      (l += this.renderer.link(i, null, n));
                  else if (this.inLink || !(s = this.rules.url.exec(t))) {
                    if ((s = this.rules.tag.exec(t)))
                      !this.inLink && /^<a /i.test(s[0])
                        ? (this.inLink = !0)
                        : this.inLink &&
                          /^<\/a>/i.test(s[0]) &&
                          (this.inLink = !1),
                        !this.inRawBlock &&
                        /^<(pre|code|kbd|script)(\s|>)/i.test(s[0])
                          ? (this.inRawBlock = !0)
                          : this.inRawBlock &&
                            /^<\/(pre|code|kbd|script)(\s|>)/i.test(s[0]) &&
                            (this.inRawBlock = !1),
                        (t = t.substring(s[0].length)),
                        (l += this.options.sanitize
                          ? this.options.sanitizer
                            ? this.options.sanitizer(s[0])
                            : c(s[0])
                          : s[0]);
                    else if ((s = this.rules.link.exec(t)))
                      (t = t.substring(s[0].length)),
                        (this.inLink = !0),
                        (i = s[2]),
                        this.options.pedantic
                          ? (e = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i))
                            ? ((i = e[1]), (o = e[3]))
                            : (o = "")
                          : (o = s[3] ? s[3].slice(1, -1) : ""),
                        (i = i.trim().replace(/^<([\s\S]*)>$/, "$1")),
                        (l += this.outputLink(s, {
                          href: r.escapes(i),
                          title: r.escapes(o),
                        })),
                        (this.inLink = !1);
                    else if (
                      (s = this.rules.reflink.exec(t)) ||
                      (s = this.rules.nolink.exec(t))
                    ) {
                      if (
                        ((t = t.substring(s[0].length)),
                        (e = (s[2] || s[1]).replace(/\s+/g, " ")),
                        !(e = this.links[e.toLowerCase()]) || !e.href)
                      ) {
                        (l += s[0].charAt(0)), (t = s[0].substring(1) + t);
                        continue;
                      }
                      (this.inLink = !0),
                        (l += this.outputLink(s, e)),
                        (this.inLink = !1);
                    } else if ((s = this.rules.strong.exec(t)))
                      (t = t.substring(s[0].length)),
                        (l += this.renderer.strong(
                          this.output(s[4] || s[3] || s[2] || s[1])
                        ));
                    else if ((s = this.rules.em.exec(t)))
                      (t = t.substring(s[0].length)),
                        (l += this.renderer.em(
                          this.output(
                            s[6] || s[5] || s[4] || s[3] || s[2] || s[1]
                          )
                        ));
                    else if ((s = this.rules.code.exec(t)))
                      (t = t.substring(s[0].length)),
                        (l += this.renderer.codespan(c(s[2].trim(), !0)));
                    else if ((s = this.rules.br.exec(t)))
                      (t = t.substring(s[0].length)), (l += this.renderer.br());
                    else if ((s = this.rules.del.exec(t)))
                      (t = t.substring(s[0].length)),
                        (l += this.renderer.del(this.output(s[1])));
                    else if ((s = this.rules.text.exec(t)))
                      (t = t.substring(s[0].length)),
                        this.inRawBlock
                          ? (l += this.renderer.text(s[0]))
                          : (l += this.renderer.text(
                              c(this.smartypants(s[0]))
                            ));
                    else if (t)
                      throw new Error(
                        "Infinite loop on byte: " + t.charCodeAt(0)
                      );
                  } else {
                    if ("@" === s[2]) i = "mailto:" + (n = c(s[0]));
                    else {
                      do {
                        (a = s[0]),
                          (s[0] = this.rules._backpedal.exec(s[0])[0]);
                      } while (a !== s[0]);
                      (n = c(s[0])), (i = "www." === s[1] ? "http://" + n : n);
                    }
                    (t = t.substring(s[0].length)),
                      (l += this.renderer.link(i, null, n));
                  }
                return l;
              }),
              (r.escapes = function (t) {
                return t ? t.replace(r.rules._escapes, "$1") : t;
              }),
              (r.prototype.outputLink = function (t, e) {
                var n = e.href,
                  i = e.title ? c(e.title) : null;
                return "!" !== t[0].charAt(0)
                  ? this.renderer.link(n, i, this.output(t[1]))
                  : this.renderer.image(n, i, c(t[1]));
              }),
              (r.prototype.smartypants = function (t) {
                return this.options.smartypants
                  ? t
                      .replace(/---/g, "—")
                      .replace(/--/g, "–")
                      .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘")
                      .replace(/'/g, "’")
                      .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“")
                      .replace(/"/g, "”")
                      .replace(/\.{3}/g, "…")
                  : t;
              }),
              (r.prototype.mangle = function (t) {
                if (!this.options.mangle) return t;
                for (var e, n = "", i = t.length, o = 0; o < i; o++)
                  (e = t.charCodeAt(o)),
                    Math.random() > 0.5 && (e = "x" + e.toString(16)),
                    (n += "&#" + e + ";");
                return n;
              }),
              (s.prototype.code = function (t, e, n) {
                if (this.options.highlight) {
                  var i = this.options.highlight(t, e);
                  null != i && i !== t && ((n = !0), (t = i));
                }
                return e
                  ? '<pre><code class="' +
                      this.options.langPrefix +
                      c(e, !0) +
                      '">' +
                      (n ? t : c(t, !0)) +
                      "</code></pre>\n"
                  : "<pre><code>" + (n ? t : c(t, !0)) + "</code></pre>";
              }),
              (s.prototype.blockquote = function (t) {
                return "<blockquote>\n" + t + "</blockquote>\n";
              }),
              (s.prototype.html = function (t) {
                return t;
              }),
              (s.prototype.heading = function (t, e, n) {
                return this.options.headerIds
                  ? "<h" +
                      e +
                      ' id="' +
                      this.options.headerPrefix +
                      n.toLowerCase().replace(/[^\w]+/g, "-") +
                      '">' +
                      t +
                      "</h" +
                      e +
                      ">\n"
                  : "<h" + e + ">" + t + "</h" + e + ">\n";
              }),
              (s.prototype.hr = function () {
                return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
              }),
              (s.prototype.list = function (t, e, n) {
                var i = e ? "ol" : "ul";
                return (
                  "<" +
                  i +
                  (e && 1 !== n ? ' start="' + n + '"' : "") +
                  ">\n" +
                  t +
                  "</" +
                  i +
                  ">\n"
                );
              }),
              (s.prototype.listitem = function (t) {
                return "<li>" + t + "</li>\n";
              }),
              (s.prototype.checkbox = function (t) {
                return (
                  "<input " +
                  (t ? 'checked="" ' : "") +
                  'disabled="" type="checkbox"' +
                  (this.options.xhtml ? " /" : "") +
                  "> "
                );
              }),
              (s.prototype.paragraph = function (t) {
                return "<p>" + t + "</p>\n";
              }),
              (s.prototype.table = function (t, e) {
                return (
                  e && (e = "<tbody>" + e + "</tbody>"),
                  "<table>\n<thead>\n" + t + "</thead>\n" + e + "</table>\n"
                );
              }),
              (s.prototype.tablerow = function (t) {
                return "<tr>\n" + t + "</tr>\n";
              }),
              (s.prototype.tablecell = function (t, e) {
                var n = e.header ? "th" : "td";
                return (
                  (e.align
                    ? "<" + n + ' align="' + e.align + '">'
                    : "<" + n + ">") +
                  t +
                  "</" +
                  n +
                  ">\n"
                );
              }),
              (s.prototype.strong = function (t) {
                return "<strong>" + t + "</strong>";
              }),
              (s.prototype.em = function (t) {
                return "<em>" + t + "</em>";
              }),
              (s.prototype.codespan = function (t) {
                return "<code>" + t + "</code>";
              }),
              (s.prototype.br = function () {
                return this.options.xhtml ? "<br/>" : "<br>";
              }),
              (s.prototype.del = function (t) {
                return "<del>" + t + "</del>";
              }),
              (s.prototype.link = function (t, e, n) {
                if (
                  null ===
                  (t = h(this.options.sanitize, this.options.baseUrl, t))
                )
                  return n;
                var i = '<a href="' + c(t) + '"';
                return (
                  e && (i += ' title="' + e + '"'), (i += ">" + n + "</a>")
                );
              }),
              (s.prototype.image = function (t, e, n) {
                if (
                  null ===
                  (t = h(this.options.sanitize, this.options.baseUrl, t))
                )
                  return n;
                var i = '<img src="' + t + '" alt="' + n + '"';
                return (
                  e && (i += ' title="' + e + '"'),
                  (i += this.options.xhtml ? "/>" : ">")
                );
              }),
              (s.prototype.text = function (t) {
                return t;
              }),
              (a.prototype.strong = a.prototype.em = a.prototype.codespan = a.prototype.del = a.prototype.text = function (
                t
              ) {
                return t;
              }),
              (a.prototype.link = a.prototype.image = function (t, e, n) {
                return "" + n;
              }),
              (a.prototype.br = function () {
                return "";
              }),
              (l.parse = function (t, e) {
                return new l(e).parse(t);
              }),
              (l.prototype.parse = function (t) {
                (this.inline = new r(t.links, this.options)),
                  (this.inlineText = new r(
                    t.links,
                    v({}, this.options, { renderer: new a() })
                  )),
                  (this.tokens = t.reverse());
                for (var e = ""; this.next(); ) e += this.tok();
                return e;
              }),
              (l.prototype.next = function () {
                return (this.token = this.tokens.pop());
              }),
              (l.prototype.peek = function () {
                return this.tokens[this.tokens.length - 1] || 0;
              }),
              (l.prototype.parseText = function () {
                for (var t = this.token.text; "text" === this.peek().type; )
                  t += "\n" + this.next().text;
                return this.inline.output(t);
              }),
              (l.prototype.tok = function () {
                switch (this.token.type) {
                  case "space":
                    return "";
                  case "hr":
                    return this.renderer.hr();
                  case "heading":
                    return this.renderer.heading(
                      this.inline.output(this.token.text),
                      this.token.depth,
                      u(this.inlineText.output(this.token.text))
                    );
                  case "code":
                    return this.renderer.code(
                      this.token.text,
                      this.token.lang,
                      this.token.escaped
                    );
                  case "table":
                    var t,
                      e,
                      n,
                      i,
                      o = "",
                      r = "";
                    for (n = "", t = 0; t < this.token.header.length; t++)
                      n += this.renderer.tablecell(
                        this.inline.output(this.token.header[t]),
                        { header: !0, align: this.token.align[t] }
                      );
                    for (
                      o += this.renderer.tablerow(n), t = 0;
                      t < this.token.cells.length;
                      t++
                    ) {
                      for (
                        e = this.token.cells[t], n = "", i = 0;
                        i < e.length;
                        i++
                      )
                        n += this.renderer.tablecell(this.inline.output(e[i]), {
                          header: !1,
                          align: this.token.align[i],
                        });
                      r += this.renderer.tablerow(n);
                    }
                    return this.renderer.table(o, r);
                  case "blockquote_start":
                    for (r = ""; "blockquote_end" !== this.next().type; )
                      r += this.tok();
                    return this.renderer.blockquote(r);
                  case "list_start":
                    r = "";
                    for (
                      var s = this.token.ordered, a = this.token.start;
                      "list_end" !== this.next().type;

                    )
                      r += this.tok();
                    return this.renderer.list(r, s, a);
                  case "list_item_start":
                    r = "";
                    var l = this.token.loose;
                    for (
                      this.token.task &&
                      (r += this.renderer.checkbox(this.token.checked));
                      "list_item_end" !== this.next().type;

                    )
                      r +=
                        l || "text" !== this.token.type
                          ? this.tok()
                          : this.parseText();
                    return this.renderer.listitem(r);
                  case "html":
                    return this.renderer.html(this.token.text);
                  case "paragraph":
                    return this.renderer.paragraph(
                      this.inline.output(this.token.text)
                    );
                  case "text":
                    return this.renderer.paragraph(this.parseText());
                }
              }),
              (c.escapeTest = /[&<>"']/),
              (c.escapeReplace = /[&<>"']/g),
              (c.replacements = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
              }),
              (c.escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/),
              (c.escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g);
            var f = {},
              p = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
            function _() {}
            function v(t) {
              for (var e, n, i = 1; i < arguments.length; i++)
                for (n in (e = arguments[i]))
                  Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
              return t;
            }
            function g(t, e) {
              var n = t
                  .replace(/\|/g, function (t, e, n) {
                    for (var i = !1, o = e; --o >= 0 && "\\" === n[o]; ) i = !i;
                    return i ? "|" : " |";
                  })
                  .split(/ \|/),
                i = 0;
              if (n.length > e) n.splice(e);
              else for (; n.length < e; ) n.push("");
              for (; i < n.length; i++)
                n[i] = n[i].trim().replace(/\\\|/g, "|");
              return n;
            }
            function x(t, e, n) {
              if (0 === t.length) return "";
              for (var i = 0; i < t.length; ) {
                var o = t.charAt(t.length - i - 1);
                if (o !== e || n) {
                  if (o === e || !n) break;
                  i++;
                } else i++;
              }
              return t.substr(0, t.length - i);
            }
            function y(t, e, n) {
              if (void 0 === t || null === t)
                throw new Error(
                  "marked(): input parameter is undefined or null"
                );
              if ("string" != typeof t)
                throw new Error(
                  "marked(): input parameter is of type " +
                    Object.prototype.toString.call(t) +
                    ", string expected"
                );
              if (n || "function" == typeof e) {
                n || ((n = e), (e = null));
                var o,
                  r,
                  s = (e = v({}, y.defaults, e || {})).highlight,
                  a = 0;
                try {
                  o = i.lex(t, e);
                } catch (t) {
                  return n(t);
                }
                r = o.length;
                var u = function (t) {
                  if (t) return (e.highlight = s), n(t);
                  var i;
                  try {
                    i = l.parse(o, e);
                  } catch (e) {
                    t = e;
                  }
                  return (e.highlight = s), t ? n(t) : n(null, i);
                };
                if (!s || s.length < 3) return u();
                if ((delete e.highlight, !r)) return u();
                for (; a < o.length; a++)
                  !(function (t) {
                    "code" !== t.type
                      ? --r || u()
                      : s(t.text, t.lang, function (e, n) {
                          return e
                            ? u(e)
                            : null == n || n === t.text
                            ? --r || u()
                            : ((t.text = n),
                              (t.escaped = !0),
                              void (--r || u()));
                        });
                  })(o[a]);
              } else
                try {
                  return (
                    e && (e = v({}, y.defaults, e)), l.parse(i.lex(t, e), e)
                  );
                } catch (t) {
                  if (
                    ((t.message +=
                      "\nPlease report this to https://github.com/markedjs/marked."),
                    (e || y.defaults).silent)
                  )
                    return (
                      "<p>An error occurred:</p><pre>" +
                      c(t.message + "", !0) +
                      "</pre>"
                    );
                  throw t;
                }
            }
            (_.exec = _),
              (y.options = y.setOptions = function (t) {
                return v(y.defaults, t), y;
              }),
              (y.getDefaults = function () {
                return {
                  baseUrl: null,
                  breaks: !1,
                  gfm: !0,
                  headerIds: !0,
                  headerPrefix: "",
                  highlight: null,
                  langPrefix: "language-",
                  mangle: !0,
                  pedantic: !1,
                  renderer: new s(),
                  sanitize: !1,
                  sanitizer: null,
                  silent: !1,
                  smartLists: !1,
                  smartypants: !1,
                  tables: !0,
                  xhtml: !1,
                };
              }),
              (y.defaults = y.getDefaults()),
              (y.Parser = l),
              (y.parser = l.parse),
              (y.Renderer = s),
              (y.TextRenderer = a),
              (y.Lexer = i),
              (y.lexer = i.lex),
              (y.InlineLexer = r),
              (y.inlineLexer = r.output),
              (y.parse = y),
              (t.exports = y);
          })(this || ("undefined" != typeof window && window));
        }.call(this, n(16)));
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(101),
          o = n(2),
          r = (function () {
            function t(t) {
              (this._editor = t),
                this.clearChanges(),
                (this._buffer = new i.TextBuffer(this._editor));
            }
            return (
              (t.prototype.execute = function (t) {
                var e,
                  n = this;
                switch (
                  (this._inactionTimer &&
                    (clearTimeout(this._inactionTimer),
                    (this._inactionTimer = null)),
                  (this._inactionTimer = setTimeout(function () {
                    n._editor.selection.isActive() && n._editor.balance(),
                      (n._inactionTimer = null);
                  }, 5e3)),
                  t.action)
                ) {
                  case o.Action.parse:
                    return (
                      (e = this._editor.parse(t.data.value, t.data.mode)),
                      this.clearChanges(),
                      !0
                    );
                  case o.Action.add:
                    e = this._editor.add(t.data);
                    break;
                  case o.Action.innerAdd:
                    if ("string" == typeof t.data) e = this._editor.add(t.data);
                    else {
                      var i = t.data,
                        r = i.data;
                      switch (i.type) {
                        case "text":
                          e = this._editor.add(r);
                          break;
                        case "full":
                          e = this._editor.paste(JSON.stringify(r), "inner");
                          break;
                        case "textnode":
                          e = this._editor.paste(
                            JSON.stringify([{ textNodes: [r], style: {} }]),
                            "inner"
                          );
                      }
                    }
                    break;
                  case o.Action.remove:
                    e = this._editor.remove(t.data);
                    break;
                  case o.Action.update:
                    e = this._editor.update(t.data);
                    break;
                  case o.Action.clear:
                    e = this._editor.clearStyles();
                    break;
                  case o.Action.paste:
                    e = this._buffer.paste(t.data);
                    break;
                  case o.Action.cut:
                    e = this._buffer.cut(t.data);
                    break;
                  case o.Action.copy:
                    return this._buffer.copy(t.data), !0;
                  case o.Action.selectAll:
                }
                return e
                  ? (this._change(), !0)
                  : t.action === o.Action.undo
                  ? this.undo()
                  : t.action === o.Action.redo && this.redo();
              }),
              (t.prototype.canUndo = function () {
                return null !== this._changes.prev;
              }),
              (t.prototype.canRedo = function () {
                return null !== this._changes.next;
              }),
              (t.prototype.undo = function () {
                var t = this._changes.prev;
                return (
                  !!t &&
                  (this._editor.setState(t.state), (this._changes = t), !0)
                );
              }),
              (t.prototype.redo = function () {
                var t = this._changes.next;
                return (
                  !!t &&
                  (this._editor.setState(t.state), (this._changes = t), !0)
                );
              }),
              (t.prototype.clearChanges = function () {
                this._changes = {
                  prev: null,
                  next: null,
                  state: this._editor.getState(),
                };
              }),
              (t.prototype._change = function () {
                var t = {
                  prev: this._changes,
                  next: null,
                  state: this._editor.getState(),
                };
                (this._changes.next = t), (this._changes = t);
              }),
              t
            );
          })();
        e.Manager = r;
      },
      function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(42),
          o = (function () {
            function t(t) {
              this._editor = t;
            }
            return (
              (t.prototype.copy = function (t) {
                t.preventDefault();
                var e = this._editor.copy();
                return this._setBuffer(t, e);
              }),
              (t.prototype.cut = function (t) {
                t.preventDefault();
                var e = this._editor.cut();
                return this._setBuffer(t, e);
              }),
              (t.prototype.paste = function (t) {
                var e;
                if (
                  (t.preventDefault(),
                  (e = t.clipboardData
                    ? t.clipboardData.getData("text/plain")
                    : window.clipboardData.getData("text")) === this._rawText)
                )
                  return this._editor.paste(this._editorContent, "inner");
                var n = (function (t) {
                  if (!t.clipboardData) return;
                  if (-1 !== t.clipboardData.types.indexOf("text/html"))
                    return t.clipboardData.getData("text/html");
                })(t);
                return n
                  ? this._editor.paste(n, "html")
                  : this._editor.paste(e, "text");
              }),
              (t.prototype._setBuffer = function (t, e) {
                return (
                  !!e &&
                  ((this._rawText = e.raw),
                  (this._editorContent = JSON.stringify(e.content)),
                  t.clipboardData
                    ? (t.clipboardData.setData("text/plain", e.raw),
                      t.clipboardData.setData(
                        "text/html",
                        i.serializer(e.content)
                      ))
                    : window.clipboardData.setData("text", e.raw),
                  !0)
                );
              }),
              t
            );
          })();
        e.TextBuffer = o;
      },
      function (t, e, n) {
        "use strict";
        (function (t) {
          var i =
            (this && this.__assign) ||
            function () {
              return (i =
                Object.assign ||
                function (t) {
                  for (var e, n = 1, i = arguments.length; n < i; n++)
                    for (var o in (e = arguments[n]))
                      Object.prototype.hasOwnProperty.call(e, o) &&
                        (t[o] = e[o]);
                  return t;
                }).apply(this, arguments);
            };
          Object.defineProperty(e, "__esModule", { value: !0 });
          var o = n(1),
            r = n(4),
            s = n(103),
            a = n(2),
            l = (function () {
              function e(t, e, n) {
                var i = this;
                (this._selectionChange = function () {
                  if (i.isActive()) {
                    if (
                      ((i._selectedText = window.getSelection().toString()),
                      i._ignoreSelection)
                    )
                      return;
                    var t = s.stateFromDom(i._editor);
                    if (r.isEqual(t, i._state, !0)) return;
                    (i._state = t),
                      i._events.fire(a.RichTextEvents.selectionChange, [t]);
                  }
                }),
                  (this._events = n),
                  (this._uid = e),
                  (this._editor = t),
                  this.clear(),
                  this._initEvents();
              }
              return (
                (e.prototype.clear = function () {
                  (this._state = {
                    range: !1,
                    left: { blockIndex: 0, textIndex: 0, offset: 0 },
                  }),
                    (this._waitUpdate = !0);
                }),
                (e.prototype.set = function (t) {
                  (this._state = t), (this._waitUpdate = !0);
                }),
                (e.prototype.get = function () {
                  return this._state;
                }),
                (e.prototype.getCompact = function () {
                  var t = this._state,
                    e = [[t.left.blockIndex, t.left.textIndex, t.left.offset]];
                  return (
                    this._state.range &&
                      e.push([
                        t.right.blockIndex,
                        t.right.textIndex,
                        t.right.offset,
                      ]),
                    e
                  );
                }),
                (e.prototype.setCompact = function (t) {
                  var e = {
                    left: {
                      blockIndex: t[0][0],
                      textIndex: t[0][1],
                      offset: t[0][2],
                    },
                    range: 2 === t.length,
                  };
                  e.range &&
                    (e.right = {
                      blockIndex: t[1][0],
                      textIndex: t[1][1],
                      offset: t[1][2],
                    }),
                    this.set(e);
                }),
                (e.prototype.getPosition = function (e) {
                  var n = this;
                  return new t(function (t) {
                    if (!n._waitUpdate) {
                      var i = n._createRange(e);
                      t(c(i));
                    }
                    var o = new Date();
                    n._events.on(
                      a.RichTextEvents.selectionRefresh,
                      function () {
                        n._events.detach(a.RichTextEvents.selectionRefresh, o);
                        var i = n._createRange(e);
                        t(c(i));
                      },
                      o
                    );
                  });
                }),
                (e.prototype.destructor = function () {
                  document.removeEventListener(
                    "selectionchange",
                    this._selectionChange
                  );
                }),
                (e.prototype.isActive = function () {
                  var t = window.getSelection().anchorNode;
                  return o.locate(t, "dhx_widget_id") === this._uid;
                }),
                (e.prototype.isFull = function () {
                  var t = this._state,
                    e = t.left,
                    n = t.right;
                  if (!t.range) return !1;
                  var i = this._editor.blocks.length - 1,
                    o = this._editor.blocks[i].getBlockEnd();
                  return (
                    0 === e.blockIndex &&
                    0 === e.textIndex &&
                    0 === e.offset &&
                    n.blockIndex === i &&
                    n.textIndex === o.textIndex &&
                    n.offset === o.offset
                  );
                }),
                (e.prototype.update = function () {
                  return !this._waitUpdate || this.refresh();
                }),
                (e.prototype.getSelectedText = function () {
                  return this._selectedText;
                }),
                (e.prototype.selectAll = function () {
                  var t = this._editor.blocks;
                  this._state = {
                    range: !0,
                    left: { blockIndex: 0, textIndex: 0, offset: 0 },
                    right: i(
                      { blockIndex: t.length - 1 },
                      t[t.length - 1].getBlockEnd()
                    ),
                  };
                }),
                (e.prototype.refresh = function () {
                  var t,
                    e = this,
                    n = this._state,
                    i = n.left,
                    o = n.right,
                    r = n.range,
                    s = window.getSelection();
                  if (!s) return !1;
                  this._ignoreSelectionTimeout &&
                    clearTimeout(this._ignoreSelectionTimeout),
                    (this._ignoreSelection = !0),
                    (this._ignoreSelectionTimeout = setTimeout(function () {
                      (e._ignoreSelection = !1),
                        (e._ignoreSelectionTimeout = null);
                    }, 5)),
                    s.rangeCount > 0
                      ? ((t = s.getRangeAt(0)), s.removeAllRanges())
                      : (t = document.createRange());
                  var l,
                    c = this._editor.getTextElement(i.blockIndex, i.textIndex);
                  if (!c) return !1;
                  if ((t.setStart(c, Math.min(i.offset, c.length)), r)) {
                    if (
                      !(l = this._editor.getTextElement(
                        o.blockIndex,
                        o.textIndex
                      ))
                    )
                      return !1;
                    t.setEnd(l, Math.min(o.offset, l.length));
                  } else t.setEnd(c, Math.min(i.offset, c.length));
                  return (
                    s.addRange(t),
                    (this._waitUpdate = !1),
                    this._events.fire(a.RichTextEvents.selectionRefresh, []),
                    !0
                  );
                }),
                (e.prototype._initEvents = function () {
                  document.addEventListener(
                    "selectionchange",
                    this._selectionChange
                  );
                }),
                (e.prototype._createRange = function (t) {
                  var e = t.left,
                    n = t.right,
                    i = document.createRange(),
                    o = this._editor.getTextElement(e.blockIndex, e.textIndex);
                  if ((i.setStart(o, e.offset), t.range)) {
                    var r = this._editor.getTextElement(
                      n.blockIndex,
                      n.textIndex
                    );
                    i.setEnd(r, n.offset);
                  } else i.setEnd(o, e.offset);
                  return i;
                }),
                e
              );
            })();
          function c(t) {
            var e = {},
              n = t.getBoundingClientRect();
            return (
              0 === n.height && (n = t.getClientRects()[0]),
              (e.xStart = n.left + window.pageXOffset),
              (e.yStart = n.top + window.pageYOffset),
              t.collapse(!1),
              (n = t.getClientRects()[0]),
              (e.xEnd = n.left + window.pageXOffset),
              (e.yEnd = n.top + window.pageYOffset),
              e
            );
          }
          e.SelectionHelper = l;
        }.call(this, n(5)));
      },
      function (t, e, n) {
        "use strict";
        var i =
          (this && this.__assign) ||
          function () {
            return (i =
              Object.assign ||
              function (t) {
                for (var e, n = 1, i = arguments.length; n < i; n++)
                  for (var o in (e = arguments[n]))
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t;
              }).apply(this, arguments);
          };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = n(1),
          r = n(4);
        e.stateFromDom = function (t) {
          var e,
            n,
            s = window.getSelection(),
            a = s.anchorNode,
            l = s.anchorOffset,
            c = s.focusNode,
            u = s.focusOffset,
            d = s.isCollapsed,
            h = a,
            f = c,
            p = l,
            _ = u;
          (function () {
            var t = window.getSelection(),
              e = t.anchorNode,
              n = t.focusNode,
              i = t.anchorOffset,
              o = t.focusOffset,
              r = document.createRange();
            return r.setStart(e, i), r.setEnd(n, o), r.collapsed;
          })() &&
            ((h = (e = [f, h])[0]),
            (f = e[1]),
            (p = (n = [_, p])[0]),
            (_ = n[1]));
          var v,
            g = o.locate(h, "dhx_offset"),
            x = o.locate(f, "dhx_offset"),
            y = r.hashToInfo(g),
            m = r.hashToInfo(x);
          return (
            (v =
              2 === y.length
                ? 3 === h.nodeType
                  ? { blockIndex: y[0], textIndex: y[1], offset: p }
                  : {
                      blockIndex: y[0],
                      textIndex: y[1],
                      offset: t.blocks[y[0]].textNodes[y[1]].text.length,
                    }
                : 1 === y.length
                ? t.blocks[y[0]].textNodes[p]
                  ? { blockIndex: y[0], textIndex: p, offset: 0 }
                  : {
                      blockIndex: y[0],
                      textIndex: p - 1,
                      offset: t.blocks[y[0]].textNodes[p - 1].text.length,
                    }
                : { blockIndex: p, textIndex: 0, offset: 0 }),
            d
              ? { range: !1, left: v }
              : {
                  left: v,
                  right:
                    2 === m.length
                      ? 3 === f.nodeType
                        ? { blockIndex: m[0], textIndex: m[1], offset: _ }
                        : {
                            blockIndex: m[0],
                            textIndex: m[1],
                            offset: t.blocks[m[0]].textNodes[m[1]].text.length,
                          }
                      : 1 === m.length
                      ? 0 === _
                        ? i(
                            { blockIndex: m[0] - 1 },
                            t.blocks[m[0] - 1].getBlockEnd()
                          )
                        : {
                            blockIndex: m[0],
                            textIndex: _ - 1,
                            offset: t.blocks[m[0]].textNodes[_ - 1].text.length,
                          }
                      : i({ blockIndex: _ - 1 }, t.blocks[_ - 1].getBlockEnd()),
                  range: !0,
                }
          );
        };
      },
    ]);
  }),
  window.dhx_legacy)
) {
  if (window.dhx) for (var key in dhx) dhx_legacy[key] = dhx[key];
  (window.dhx = dhx_legacy), delete window.dhx_legacy;
}
