/*
@license

dhtmlxSuite v.7.0.3 Evaluation

This software is covered by DHTMLX Evaluation License and purposed only for evaluation.
Contact sales@dhtmlx.com to get Commercial or Enterprise license.
Usage without proper license is prohibited.

(c) XB Software.

*/
if (window.dhx && (window.dhx_legacy = dhx, delete window.dhx), function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.dhx = e() : t.dhx = e()
}(window, function() {
    return n = {}, o.m = i = [function(t, o, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(o, "__esModule", {
                value: !0
            });
            var e = n(108);

            function i(i) {
                function e(t) {
                    var e = t.el.offsetHeight,
                        t = t.el.offsetWidth;
                    i(t, e)
                }
                var n = window.ResizeObserver;
                return n ? o.el("div.dhx-resize-observer", {
                    _hooks: {
                        didInsert: function(t) {
                            new n(function() {
                                return e(t)
                            }).observe(t.el)
                        }
                    }
                }) : o.el("iframe.dhx-resize-observer", {
                    _hooks: {
                        didInsert: function(t) {
                            t.el.contentWindow.onresize = function() {
                                return e(t)
                            }, e(t)
                        }
                    }
                })
            }
            o.el = e.defineElement, o.sv = e.defineSvgElement, o.view = e.defineView, o.create = e.createView, o.inject = e.injectView, o.KEYED_LIST = e.KEYED_LIST, o.disableHelp = function() {
                e.DEVMODE.mutations = !1, e.DEVMODE.warnings = !1, e.DEVMODE.verbose = !1, e.DEVMODE.UNKEYED_INPUT = !1
            }, o.resizer = i, o.resizeHandler = function(t, e) {
                return o.create({
                    render: function() {
                        return i(e)
                    }
                }).mount(t)
            }, o.awaitRedraw = function() {
                return new t(function(t) {
                    requestAnimationFrame(function() {
                        t()
                    })
                })
            }
        }).call(this, n(13))
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(2),
            o = (new Date).valueOf();
        e.uid = function() {
            return "u" + o++
        }, e.extend = function t(e, i, n) {
            if (void 0 === n && (n = !0), i)
                for (var o in i) {
                    var r = i[o],
                        s = e[o];
                    void 0 === r ? delete e[o] : !n || "object" != typeof s || s instanceof Date || s instanceof Array ? e[o] = r : t(s, r)
                }
            return e
        }, e.copy = function(t, e) {
            var i, n = {};
            for (i in t) e && i.startsWith("$") || (n[i] = t[i]);
            return n
        }, e.naturalSort = function(t) {
            return t.sort(function(t, e) {
                return "string" == typeof t ? t.localeCompare(e) : t - e
            })
        }, e.findIndex = function(t, e) {
            for (var i = t.length, n = 0; n < i; n++)
                if (e(t[n])) return n;
            return -1
        }, e.isEqualString = function(t, e) {
            if (t = t.toString(), e = e.toString(), t.length > e.length) return !1;
            for (var i = 0; i < t.length; i++)
                if (t[i].toLowerCase() !== e[i].toLowerCase()) return !1;
            return !0
        }, e.singleOuterClick = function(e) {
            var i = function(t) {
                e(t) && document.removeEventListener("click", i)
            };
            document.addEventListener("click", i)
        }, e.detectWidgetClick = function(e, i) {
            function t(t) {
                return i(n.locate(t, "dhx_widget_id") === e)
            }
            return document.addEventListener("click", t),
                function() {
                    return document.removeEventListener("click", t)
                }
        }, e.unwrapBox = function(t) {
            return Array.isArray(t) ? t[0] : t
        }, e.wrapBox = function(t) {
            return Array.isArray(t) ? t : [t]
        }, e.isDefined = function(t) {
            return null != t
        }, e.range = function(t, e) {
            if (e < t) return [];
            for (var i = []; t <= e;) i.push(t++);
            return i
        }, e.isNumeric = function(t) {
            return !isNaN(t - parseFloat(t))
        }, e.downloadFile = function(t, e, i) {
            void 0 === i && (i = "text/plain");
            var n, o, i = new Blob([t], {
                type: i
            });
            window.navigator.msSaveOrOpenBlob ? window.navigator.msSaveOrOpenBlob(i, e) : (n = document.createElement("a"), o = URL.createObjectURL(i), n.href = o, n.download = e, document.body.appendChild(n), n.click(), setTimeout(function() {
                document.body.removeChild(n), window.URL.revokeObjectURL(o)
            }, 0))
        }, e.debounce = function(o, r, s) {
            var a;
            return function() {
                for (var t = this, e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
                var n = s && !a;
                clearTimeout(a), a = setTimeout(function() {
                    a = null, s || o.apply(t, e)
                }, r), n && o.apply(this, e)
            }
        }, e.compare = function t(e, i) {
            for (var n in e) {
                if (e.hasOwnProperty(n) !== i.hasOwnProperty(n)) return !1;
                switch (typeof e[n]) {
                    case "object":
                        if (!t(e[n], i[n])) return !1;
                        break;
                    case "function":
                        if (void 0 === i[n] || "compare" !== n && e[n].toString() !== i[n].toString()) return !1;
                        break;
                    default:
                        if (e[n] !== i[n]) return !1
                }
            }
            for (var n in i)
                if (void 0 === e[n]) return !1;
            return !0
        }, e.isType = function(t) {
            return ((Object.prototype.toString.call(t).match(/^\[object (\S+?)\]$/) || [])[1] || "undefined").toLowerCase()
        }, e.isEmptyObj = function(t) {
            for (var e in t) return !1;
            return !0
        }, e.sign = function(t) {
            return 0 === (t = +t) || isNaN(t) ? t : 0 < t ? 1 : -1
        }
    }, function(t, e, i) {
        "use strict";
        var c = this && this.__assign || function() {
            return (c = Object.assign || function(t) {
                for (var e, i = 1, n = arguments.length; i < n; i++)
                    for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t
            }).apply(this, arguments)
        };

        function n(t, e, i) {
            for (void 0 === e && (e = "dhx_id"), void 0 === i && (i = "target"), t instanceof Event && (t = t[i]); t;) {
                if (t.getAttribute && t.getAttribute(e)) return t;
                t = t.parentNode
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.toNode = function(t) {
            return "string" == typeof t ? document.getElementById(t) || document.querySelector(t) || document.body : t || document.body
        }, e.eventHandler = function(s, a, l) {
            var c = Object.keys(a);
            return function(t) {
                var e = s(t);
                if (e) {
                    var i = t.target;
                    t: for (; i;) {
                        var n = i.getAttribute && i.getAttribute("class") || "";
                        if (n.length)
                            for (var o = n.split(" "), r = 0; r < c.length; r++)
                                if (o.includes(c[r])) {
                                    if (!1 === a[c[r]](t, e)) return !1;
                                    break t
                                } i = i.parentNode
                    }
                }
                return l && l(t), !0
            }
        }, e.locateNode = n, e.locate = function(t, e) {
            return void 0 === e && (e = "dhx_id"), (t = n(t, e)) ? t.getAttribute(e) : ""
        }, e.locateNodeByClassName = function(t, e) {
            for (t instanceof Event && (t = t.target); t;) {
                if (e) {
                    if (t.classList && t.classList.contains(e)) return t
                } else if (t.getAttribute && t.getAttribute("dhx_id")) return t;
                t = t.parentNode
            }
        }, e.getBox = function(t) {
            var e = t.getBoundingClientRect(),
                i = document.body,
                n = window.pageYOffset || i.scrollTop,
                t = window.pageXOffset || i.scrollLeft;
            return {
                top: e.top + n,
                left: e.left + t,
                right: i.offsetWidth - e.right,
                bottom: i.offsetHeight - e.bottom,
                width: e.right - e.left,
                height: e.bottom - e.top
            }
        };
        var o = -1;

        function r(t) {
            t = t.getBoundingClientRect();
            return {
                left: t.left + window.pageXOffset,
                right: t.right + window.pageXOffset,
                top: t.top + window.pageYOffset,
                bottom: t.bottom + window.pageYOffset
            }
        }

        function u() {
            return {
                rightBorder: window.pageXOffset + window.innerWidth,
                bottomBorder: window.pageYOffset + window.innerHeight
            }
        }

        function l(t, e) {
            var i, n, o, r = u(),
                s = r.rightBorder,
                a = r.bottomBorder - t.bottom - e.height,
                l = t.top - e.height;
            if ("bottom" === e.mode ? 0 <= a ? i = t.bottom : 0 <= l && (i = l) : 0 <= l ? i = l : 0 <= a && (i = t.bottom), a < 0 && l < 0) {
                if (e.auto) return d(t, c(c({}, e), {
                    mode: "right",
                    auto: !1
                }));
                i = l < a ? t.bottom : l
            }
            return {
                left: e.centering ? (n = t, o = e.width, r = s, a = (o - (n.right - n.left)) / 2, l = n.left - a, a = n.right + a, 0 <= l && a <= r ? l : l < 0 ? 0 : r - o) : (s = s - t.left - e.width, e = t.right - e.width, 0 <= s || !(0 <= e) && s < e ? t.left : e),
                top: i
            }
        }

        function d(t, e) {
            var i, n, o = u(),
                r = o.rightBorder,
                s = o.bottomBorder,
                a = r - t.right - e.width,
                o = t.left - e.width;
            if ("right" === e.mode ? 0 <= a ? n = t.right : 0 <= o && (n = o) : 0 <= o ? n = o : 0 <= a && (n = t.right), o < 0 && a < 0) {
                if (e.auto) return l(t, c(c({}, e), {
                    mode: "bottom",
                    auto: !1
                }));
                n = a < o ? o : t.right
            }
            return {
                left: n,
                top: e.centering ? (a = t, i = e.height, o = r, n = (i - (a.bottom - a.top)) / 2, r = a.top - n, n = a.bottom + n, 0 <= r && n <= o ? r : r < 0 ? 0 : o - i) : (i = t.bottom - e.height, !(0 <= (e = s - t.top - e.height)) && (0 < i || e < i) ? i : t.top)
            }
        }

        function s(t, e) {
            var i = ("bottom" === e.mode || "top" === e.mode ? l : d)(t, e),
                t = i.left,
                i = i.top;
            return {
                left: Math.round(t) + "px",
                top: Math.round(i) + "px",
                minWidth: Math.round(e.width) + "px",
                position: "absolute"
            }
        }
        e.getScrollbarWidth = function() {
            if (-1 < o) return o;
            var t = document.createElement("div");
            return document.body.appendChild(t), t.style.cssText = "position: absolute;left: -99999px;overflow:scroll;width: 100px;height: 100px;", o = t.offsetWidth - t.clientWidth, document.body.removeChild(t), o
        }, e.isIE = function() {
            var t = window.navigator.userAgent;
            return t.includes("MSIE ") || t.includes("Trident/")
        }, e.getRealPosition = r, e.calculatePosition = s, e.fitPosition = function(t, e) {
            return s(r(t), e)
        }, e.getStrSize = function(t, e) {
            e = c({
                fontSize: "14px",
                fontFamily: "Arial",
                lineHeight: "14px",
                fontWeight: "normal",
                fontStyle: "normal"
            }, e);
            var i = document.createElement("span"),
                n = e.fontSize,
                o = e.fontFamily,
                r = e.lineHeight,
                s = e.fontWeight,
                e = e.fontStyle;
            return i.style.fontSize = n, i.style.fontFamily = o, i.style.lineHeight = r, i.style.fontWeight = s, i.style.fontStyle = e, i.style.display = "inline-flex", i.innerText = t, document.body.appendChild(i), e = i.offsetWidth, t = i.clientHeight, document.body.removeChild(i), {
                width: e,
                height: t
            }
        }, e.getPageCss = function() {
            for (var t = [], e = 0; e < document.styleSheets.length; e++)
                for (var i = document.styleSheets[e], n = ("cssRules" in i ? i.cssRules : i.rules), o = 0; o < n.length; o++) {
                    var r = n[o];
                    "cssText" in r ? t.push(r.cssText) : t.push(r.selectorText + " {\n" + r.style.cssText + "\n}\n")
                }
            return t.join("\n")
        }
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = (o.prototype.on = function(t, e, i) {
            t = t.toLowerCase();
            this.events[t] = this.events[t] || [], this.events[t].push({
                callback: e,
                context: i || this.context
            })
        }, o.prototype.detach = function(t, e) {
            var t = t.toLowerCase(),
                i = this.events[t];
            if (e && i && i.length)
                for (var n = i.length - 1; 0 <= n; n--) i[n].context === e && i.splice(n, 1);
            else this.events[t] = []
        }, o.prototype.fire = function(t, e) {
            void 0 === e && (e = []);
            t = t.toLowerCase();
            return !this.events[t] || !this.events[t].map(function(t) {
                return t.callback.apply(t.context, e)
            }).includes(!1)
        }, o.prototype.clear = function() {
            this.events = {}
        }, o);

        function o(t) {
            this.events = {}, this.context = t || this
        }
        e.EventSystem = n, e.EventsMixin = function(t) {
            var e = new n(t = t || {});
            t.detachEvent = e.detach.bind(e), t.attachEvent = e.on.bind(e), t.callEvent = e.fire.bind(e)
        }
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(1),
            o = i(2),
            i = (r.prototype.mount = function(t, e) {
                e && (this._view = e), t && this._view && this._view.mount && (this._container = o.toNode(t), this._container.tagName ? this._view.mount(this._container) : this._container.attach && this._container.attach(this))
            }, r.prototype.unmount = function() {
                var t = this.getRootView();
                t && t.node && (t.unmount(), this._view = null)
            }, r.prototype.getRootView = function() {
                return this._view
            }, r.prototype.getRootNode = function() {
                return this._view && this._view.node && this._view.node.el
            }, r.prototype.paint = function() {
                this._view && (this._view.node || this._container) && (this._doNotRepaint = !1, this._view.redraw())
            }, r);

        function r(t, e) {
            this.config = e || {}, this._uid = this.config.rootId || n.uid()
        }
        e.View = i, e.toViewLike = function(e) {
            return {
                getRootView: function() {
                    return e
                },
                paint: function() {
                    return e.node && e.redraw()
                },
                mount: function(t) {
                    return e.mount(t)
                }
            }
        }
    }, function(t, i, e) {
        "use strict";

        function n(t) {
            for (var e in t) i.hasOwnProperty(e) || (i[e] = t[e])
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), n(e(16)), n(e(62)), n(e(113)), n(e(114)), n(e(20)), n(e(116)), n(e(17)), n(e(65)), n(e(64)), n(e(117)), n(e(63)), n(e(34))
    }, function(t, e, i) {
        "use strict";
        var n = this && this.__rest || function(t, e) {
            var i = {};
            for (o in t) Object.prototype.hasOwnProperty.call(t, o) && e.indexOf(o) < 0 && (i[o] = t[o]);
            if (null != t && "function" == typeof Object.getOwnPropertySymbols)
                for (var n = 0, o = Object.getOwnPropertySymbols(t); n < o.length; n++) e.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[n]) && (i[o[n]] = t[o[n]]);
            return i
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var c = i(7);
        e.getFormItemCss = function(t, e) {
            var i = t.type,
                n = t.labelPosition,
                o = t.required,
                r = t.disabled,
                s = t.hiddenLabel,
                a = void 0 === (l = t.css) ? "" : l,
                l = t.$validationStatus,
                l = ((t = {})[c.ValidationStatus.pre] = "", t[c.ValidationStatus.error] = " dhx_form-group--state_error", t[c.ValidationStatus.success] = " dhx_form-group--state_success", t[l] || ""),
                n = "left" === n ? " dhx_form-group--inline" : "",
                r = r ? " dhx_form-group--disabled" : "",
                s = s ? " dhx_form-group--label_sr" : "";
            return e ? n + l + (o && "select" !== i ? " dhx_form-group--required" : "") + r + s + " " + a : n + r + s + " " + a
        };
        var o = ((i = {})[c.Validation.validAlphaNumeric] = /^[a-zA-Z0-9_]+$/, i[c.Validation.validEmail] = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, i[c.Validation.validInteger] = /^-?\d+$/, i[c.Validation.validIPv4] = /\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}\b/, i[c.Validation.validNumeric] = /^-?\d+(\.\d+)?$/, i);
        e.getValidationMessage = function(t) {
            var e;
            return (e = {
                undefined: t.preMessage
            })[c.ValidationStatus.pre] = t.preMessage, e[c.ValidationStatus.error] = t.errorMessage, e[c.ValidationStatus.success] = t.successMessage, e[t.$validationStatus] || ""
        }, e.validateTemplate = function(t, e) {
            return !o[t] || o[t].test(e)
        }, e.isBlock = function(t) {
            return Boolean(t.rows) || Boolean(t.cols)
        }, e.validateInput = function(t, e) {
            var i = !0;
            return "function" == typeof e ? i = e(t) : (e = o[e]) && (i = e.test(t.toString())), i
        }, e.baseInputValidate = function(t, e) {
            var i = e.inputType,
                n = e.min,
                o = e.max,
                r = e.minlength,
                e = e.maxlength;
            return "number" === i ? void 0 !== n && void 0 !== o ? Number(n) <= Number(o) && Number(n) <= Number(t) && Number(o) >= Number(t) : void 0 !== n ? Number(n) <= Number(t) : void 0 !== o ? Number(o) >= Number(t) : 0 === t || "0" === t || !!t : void 0 !== r && void 0 !== e ? Number(r) <= String(t).length && Number(e) >= String(t).length : void 0 !== r ? Number(r) <= String(t).length : void 0 !== e ? Number(e) >= String(t).length : "string" == typeof t && !!t
        }, e.isTimeFormat = function(t, e) {
            return (12 === e ? /(^0?([1-9][0-2]?):[0-5][0-9]?([AP][M]?)$)/i : /(^(0[0-9]|1[0-9]|2[0-3]|[0-9]):[0-5][0-9]$)/i).test(t)
        }, e.isVerify = function(e) {
            return ["required", "validation", "minlength", "maxlength", "min", "max"].some(function(t) {
                switch (t) {
                    case "required":
                        return !!e[t];
                    case "validation":
                        return "function" == typeof e[t] || "email" === e[t] || "integer" === e[t] || "numeric" === e[t] || "alphanumeric" === e[t] || "IPv4" === e[t];
                    case "minlength":
                    case "maxlength":
                        return "number" == typeof e[t] || "string" == typeof e[t];
                    case "min":
                    case "max":
                        return ("number" == typeof e[t] || "string" == typeof e[t]) && "number" === e.inputType
                }
            })
        }, e.baseProps = ["width", "height", "padding", "css"], e.widgetConfig = function(t) {
            t.width, t.type, t.id, t.name, t.hidden, t.editable, t.valueFormat, t.css, t.required, t.helpMessage, t.preMessage, t.successMessage, t.errorMessage, t.label, t.labelWidth, t.labelPosition, t.hiddenLabel, t.validation, t.icon;
            return n(t, ["width", "type", "id", "name", "hidden", "editable", "valueFormat", "css", "required", "helpMessage", "preMessage", "successMessage", "errorMessage", "label", "labelWidth", "labelPosition", "hiddenLabel", "validation", "icon"])
        }, e.getLabelStyle = function(t) {
            var e = t.helpMessage,
                i = t.type,
                n = t.labelWidth,
                o = t.label,
                r = n && n.toString().startsWith("0"),
                t = "text" !== i && t.required;
            return !!(e || t || !(!o || o && r) || n && !r) && {
                style: (o || n) && !r && {
                    width: n,
                    "max-width": "100%"
                },
                label: o && r ? null : o
            }
        }
    }, function(t, e, i) {
        "use strict";
        var n;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), (n = e.FormEvents || (e.FormEvents = {})).change = "change", n.click = "click", n.beforeShow = "beforeShow", n.afterShow = "afterShow", n.beforeHide = "beforeHide", n.afterHide = "afterHide", n.afterValidate = "afterValidate", n.beforeValidate = "beforeValidate", n.beforeChangeProperties = "beforeChangeProperties", n.afterChangeProperties = "afterChangeProperties", n.beforeSend = "beforesend", n.afterSend = "aftersend", n.buttonClick = "buttonClick", n.validationFail = "validationfail", (n = e.FileStatus || (e.FileStatus = {})).queue = "queue", n.uploaded = "uploaded", n.failed = "failed", n.inprogress = "inprogress", (n = e.UploaderEvents || (e.UploaderEvents = {})).uploadBegin = "uploadbegin", n.beforeUploadFile = "beforeuploadfile", n.uploadFile = "uploadfile", n.uploadFail = "uploadfail", n.uploadComplete = "uploadcomplete", n.uploadProgress = "uploadprogress", (n = e.ItemEvent || (e.ItemEvent = {})).click = "click", n.change = "change", n.input = "input", n.changeOptions = "changeOptions", n.beforeShow = "beforeShow", n.afterShow = "afterShow", n.beforeHide = "beforeHide", n.afterHide = "afterHide", n.beforeValidate = "beforeValidate", n.afterValidate = "afterValidate", n.beforeUploadFile = "beforeUploadFile", n.uploadFile = "uploadfile", n.uploadBegin = "uploadBegin", n.uploadComplete = "uploadComplete", n.uploadFail = "uploadFail", n.uploadProgress = "uploadProgress", n.beforeChangeProperties = "beforeChangeProperties", n.afterChangeProperties = "afterChangeProperties", (n = e.ClearMethod || (e.ClearMethod = {})).value = "value", n.validation = "validation", (n = e.Validation || (e.Validation = {})).empty = "", n.validEmail = "email", n.validInteger = "integer", n.validNumeric = "numeric", n.validAlphaNumeric = "alphanumeric", n.validIPv4 = "IPv4", (e = e.ValidationStatus || (e.ValidationStatus = {}))[e.pre = 0] = "pre", e[e.error = 1] = "error", e[e.success = 2] = "success"
    }, function(t, e, i) {
        "use strict";
        var n = this && this.__assign || function() {
            return (n = Object.assign || function(t) {
                for (var e, i = 1, n = arguments.length; i < n; i++)
                    for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t
            }).apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r, s, o = i(0),
            a = ["#394E79", "#5E83BA", "#C2D2E9", "#647B37", "#98A468", "#F0D0A9", "#EEB98E", "#9A8BA5", "#E3C5D5"];

        function l(e) {
            var i = {};
            return function(t) {
                return i[t] || (i[t] = e(t))
            }
        }
        e.getDefaultColor = function(t) {
            return void 0 === t && (t = 0), a[t]
        }, e.locator = function(e) {
            return e ? "string" == typeof e ? function(t) {
                return t[e]
            } : e : function() {
                return ""
            }
        }, e.log10 = function(t) {
            return Math.log(t) / Math.LN10
        }, e.getTextWidth = (r = function(t, e) {
            void 0 === e && (e = "");
            var i = document.createElement("canvas").getContext("2d");
            return e && (i.font = e), i.measureText(t).width
        }, s = {}, function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            for (var i = s, n = 0; n < t.length - 1; n++) i[t[n]] = i[t[n]] || {}, i = i[t[n]];
            var o = t.length - 1;
            return i[o] || (i[o] = r.apply(void 0, t))
        });
        var c = l(function(t) {
            var e = document.createElement("canvas").getContext("2d");
            return e.fillStyle = t, e.fillRect(0, 0, 2, 2), [(e = e.getImageData(1, 1, 1, 1).data)[0], e[1], e[2]]
        });
        e.getColorShade = function(t, e) {
            return "rgb(" + (t = c(t).map(function(t) {
                return Math.floor(t * e + 255 * (1 - e))
            }))[0] + "," + t[1] + "," + t[2] + ")"
        }, e.getFontStyle = l(function(t) {
            var e = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            e.setAttribute("class", "dhx_chart");
            var i = document.createElementNS("http://www.w3.org/2000/svg", "text");
            i.setAttribute("class", t), e.setAttribute("visibility", "hidden"), i.textContent = "test", e.appendChild(i), document.body.appendChild(e);
            i = getComputedStyle(i), i = i.fontSize + " " + i.fontFamily;
            return document.body.removeChild(e), i
        }), e.linearGradient = function(t, e) {
            return t = t.stops.map(function(t) {
                return o.sv("stop", {
                    offset: 100 * t.offset + "%",
                    "stop-color": t.color,
                    "stop-opacity": t.opacity || 1
                })
            }), o.sv("linearGradient", {
                id: e,
                gradientTransform: "rotate(90)"
            }, t)
        }, e.getRadialGradient = function(t, e, i) {
            return e = e.map(function(t) {
                return o.sv("stop", {
                    offset: t.offset,
                    "stop-color": t.color,
                    "stop-opacity": t.opacity || 1
                })
            }), o.sv("radialGradient", n({
                id: i,
                cx: 0,
                cy: 0,
                gradientUnits: "userSpaceOnUse"
            }, t), e)
        }, e.euclideanDistance = function(t, e, i, n) {
            return Math.sqrt((t - i) * (t - i) + (e - n) * (e - n))
        }, e.verticalCenteredText = function(t) {
            return o.sv("tspan", {
                dy: "0.5ex"
            }, t)
        }, e.verticalTopText = function(t) {
            return o.sv("tspan", {
                dy: "-0.5ex"
            }, t)
        }, e.verticalBottomText = function(t) {
            return o.sv("tspan", {
                dy: "1.5ex"
            }, t)
        }, e.calcPointRef = function(t, e) {
            return t + "_" + e
        }, e.getClassesForRotateScale = function(t, e) {
            var i = "",
                n = [];
            switch ("left" === t || "top" === t ? n.push("start-text", "end-text") : "right" !== t && "bottom" !== t || n.push("end-text", "start-text"), t) {
                case "left":
                case "right":
                    0 === e ? i = n[1] : 0 < e ? 180 === e ? i = n[0] : 180 < e ? e < 270 ? i = n[0] : 270 < e && (i = n[1]) : e < 180 && (90 < e ? i = n[0] : e < 90 && (i = n[1])) : e < 0 && (-180 === e ? i = n[0] : e < -180 ? -270 < e ? i = n[0] : e < -270 && (i = n[1]) : -180 < e && (e < -90 ? i = n[0] : -90 < e && (i = n[1])));
                    break;
                case "top":
                case "bottom":
                    0 < e ? 180 < e ? i = n[0] : e < 180 && (i = n[1]) : e < 0 && (-180 < e ? i = n[0] : e < -180 && (i = n[1]))
            }
            return i
        }, e.getScales = function(t) {
            var e, i = [];
            for (e in t) {
                var n = t[e];
                (n.min || n.max || n.maxTicks || n.text || n.value) && i.push(e)
            }
            return i
        }
    }, function(t, e, i) {
        "use strict";
        var n;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), (n = e.GridEvents || (e.GridEvents = {})).scroll = "scroll", n.sort = "sort", n.expand = "expand", n.filterChange = "filterChange", n.beforeResizeStart = "beforeResizeStart", n.resize = "resize", n.afterResizeEnd = "afterResizeEnd", n.cellClick = "cellClick", n.cellRightClick = "cellRightClick", n.cellMouseOver = "cellMouseOver", n.cellMouseDown = "cellMouseDown", n.cellDblClick = "cellDblClick", n.headerCellClick = "headerCellClick", n.footerCellClick = "footerCellClick", n.headerCellMouseOver = "headerCellMouseOver", n.footerCellMouseOver = "footerCellMouseOver", n.headerCellMouseDown = "headerCellMouseDown", n.footerCellMouseDown = "footerCellMouseDown", n.headerCellDblClick = "headerCellDblClick", n.footerCellDblClick = "footerCellDblClick", n.headerCellRightClick = "headerCellRightClick", n.footerCellRightClick = "footerCellRightClick", n.beforeEditStart = "beforeEditStart", n.afterEditStart = "afterEditStart", n.beforeEditEnd = "beforeEditEnd", n.afterEditEnd = "afterEditEnd", n.beforeKeyDown = "beforeKeyDown", n.afterKeyDown = "afterKeyDown", n.beforeColumnHide = "beforeColumnHide", n.afterColumnHide = "afterColumnHide", n.beforeColumnShow = "beforeColumnShow", n.afterColumnShow = "afterColumnShow", n.beforeRowHide = "beforeRowHide", n.afterRowHide = "afterRowHide", n.beforeRowShow = "beforeRowShow", n.afterRowShow = "afterRowShow", n.beforeRowDrag = "beforeRowDrag", n.dragRowStart = "dragRowStart", n.dragRowOut = "dragRowOut", n.dragRowIn = "dragRowIn", n.canRowDrop = "canRowDrop", n.cancelRowDrop = "cancelRowDrop", n.beforeRowDrop = "beforeRowDrop", n.afterRowDrop = "afterRowDrop", n.afterRowDrag = "afterRowDrag", n.beforeColumnDrag = "beforeColumnDrag", n.dragColumnStart = "dragColumnStart", n.dragColumnOut = "dragColumnOut", n.dragColumnIn = "dragColumnIn", n.canColumnDrop = "canColumnDrop", n.cancelColumnDrop = "cancelColumnDrop", n.beforeColumnDrop = "beforeColumnDrop", n.afterColumnDrop = "afterColumnDrop", n.afterColumnDrag = "afterColumnDrag", n.headerInput = "headerInput", (n = e.GridSystemEvents || (e.GridSystemEvents = {})).cellTouchMove = "cellTouchMove", n.cellTouchEnd = "cellTouchEnd", n.headerCellTouchMove = "headerCellTouchMove", n.headerCellTouchEnd = "headerCellTouchEnd", (e = e.GridSelectionEvents || (e.GridSelectionEvents = {})).beforeUnSelect = "beforeUnSelect", e.afterUnSelect = "afterUnSelect", e.beforeSelect = "beforeSelect", e.afterSelect = "afterSelect"
    }, function(t, i, e) {
        "use strict";

        function n(t) {
            for (var e in t) i.hasOwnProperty(e) || (i[e] = t[e])
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), n(e(146)), n(e(67))
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(t, e)
            }, function(t, e) {
                function i() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }),
            r = this && this.__assign || function() {
                return (r = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = i(0),
            l = i(4),
            c = i(10),
            u = i(6),
            o = (s = l.View, o(d, s), d.prototype._getHandlers = function() {
                return {}
            }, d.prototype._init = function() {}, d.prototype._draw = function() {
                return this._drawLabel()
            }, d.prototype._drawLabel = function() {
                var t = this.config,
                    e = t.id,
                    i = t.helpMessage,
                    n = t.required;
                this.config.helpMessage && (this._helper || (this._helper = new c.Popup({
                    css: "dhx_tooltip dhx_tooltip--forced dhx_tooltip--light"
                })), this._helper.attachHTML(this.config.helpMessage));
                t = u.getLabelStyle(this.config);
                return t && a.el("label.dhx_label", {
                    for: e || this._uid,
                    class: i ? "dhx_label--with-help" : "",
                    style: t.style
                }, i ? [(t.label || n) && a.el("span.dhx_label__holder", t.label), a.el("span.dhx_label-help.dxi.dxi-help-circle-outline", {
                    tabindex: "0",
                    role: "button",
                    onclick: this._handlers.showHelper
                })] : t.label)
            }, d);

        function d(t, e) {
            void 0 === e && (e = {});
            var i = s.call(this, t, e) || this;
            i._handlers = r({
                showHelper: function(t) {
                    t.preventDefault(), t.stopPropagation(), i._helper.show(t.target, {
                        mode: "left" === i.config.labelPosition ? "right" : "bottom"
                    })
                }
            }, i._getHandlers());
            return i.mount(t, a.create({
                render: function() {
                    return i._draw()
                }
            })), i
        }
        e.Label = o
    }, function(t, i, e) {
        "use strict";

        function n(t) {
            for (var e in t) i.hasOwnProperty(e) || (i[e] = t[e])
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), n(e(97)), n(e(98)), n(e(102)), n(e(58)), n(e(30))
    }, function(t, e, i) {
        (function(o, r) {
            ! function() {
                var e = 1,
                    i = {},
                    n = !1;

                function u(t) {
                    o.setImmediate ? r(t) : o.importScripts ? setTimeout(t) : (i[++e] = t, o.postMessage(e, "*"))
                }

                function d(t) {
                    "use strict";
                    if ("function" != typeof t && null != t) throw TypeError();
                    if ("object" != typeof this || this && this.then) throw TypeError();
                    var e, i, n = this,
                        r = 0,
                        s = 0,
                        o = [];
                    (n.promise = n).resolve = function(t) {
                        return e = n.fn, i = n.er, r || (s = t, r = 1, u(c)), n
                    }, n.reject = function(t) {
                        return e = n.fn, i = n.er, r || (s = t, r = 2, u(c)), n
                    }, n._d = 1, n.then = function(t, e) {
                        if (1 != this._d) throw TypeError();
                        var i = new d;
                        return i.fn = t, i.er = e, 3 == r ? i.resolve(s) : 4 == r ? i.reject(s) : o.push(i), i
                    }, n.catch = function(t) {
                        return n.then(null, t)
                    };
                    var a = function(t) {
                        r = t || 4, o.map(function(t) {
                            3 == r && t.resolve(s) || t.reject(s)
                        })
                    };
                    try {
                        "function" == typeof t && t(n.resolve, n.reject)
                    } catch (t) {
                        n.reject(t)
                    }
                    return n;

                    function l(t, e, i, n) {
                        if (2 == r) return n();
                        if ("object" != typeof s && "function" != typeof s || "function" != typeof t) n();
                        else try {
                            var o = 0;
                            t.call(s, function(t) {
                                o++ || (s = t, e())
                            }, function(t) {
                                o++ || (s = t, i())
                            })
                        } catch (t) {
                            s = t, i()
                        }
                    }

                    function c() {
                        var t;
                        try {
                            t = s && s.then
                        } catch (t) {
                            return s = t, r = 2, c()
                        }
                        l(t, function() {
                            r = 1, c()
                        }, function() {
                            r = 2, c()
                        }, function() {
                            try {
                                1 == r && "function" == typeof e ? s = e(s) : 2 == r && "function" == typeof i && (s = i(s), r = 1)
                            } catch (t) {
                                return s = t, a()
                            }
                            s == n ? (s = TypeError(), a()) : l(t, function() {
                                a(3)
                            }, a, function() {
                                a(1 == r && 3)
                            })
                        })
                    }
                }(o = this).setImmediate || o.addEventListener("message", function(t) {
                    if (t.source == o)
                        if (n) u(i[t.data]);
                        else {
                            n = !0;
                            try {
                                i[t.data]()
                            } catch (t) {}
                            delete i[t.data], n = !1
                        }
                }), d.resolve = function(e) {
                    if (1 != this._d) throw TypeError();
                    return e instanceof d ? e : new d(function(t) {
                        t(e)
                    })
                }, d.reject = function(i) {
                    if (1 != this._d) throw TypeError();
                    return new d(function(t, e) {
                        e(i)
                    })
                }, d.all = function(n) {
                    if (1 != this._d) throw TypeError();
                    if (!(n instanceof Array)) return d.reject(TypeError());
                    var o = new d;
                    return function i(t, e) {
                        return e ? o.resolve(e) : t ? o.reject(t) : (0 == n.reduce(function(t, e) {
                            return e && e.then ? t + 1 : t
                        }, 0) && o.resolve(n), void n.map(function(t, e) {
                            t && t.then && t.then(function(t) {
                                return n[e] = t, i(), t
                            }, i)
                        }))
                    }(), o
                }, d.race = function(n) {
                    if (1 != this._d) throw TypeError();
                    if (!(n instanceof Array)) return d.reject(TypeError());
                    if (0 == n.length) return new d;
                    var o = new d;
                    return function i(t, e) {
                        return e ? o.resolve(e) : t ? o.reject(t) : (0 == n.reduce(function(t, e) {
                            return e && e.then ? t + 1 : t
                        }, 0) && o.resolve(n), void n.map(function(t, e) {
                            t && t.then && t.then(function(t) {
                                i(null, t)
                            }, i)
                        }))
                    }(), o
                }, d._d = 1, t.exports = d
            }()
        }).call(this, i(31), i(99).setImmediate)
    }, function(t, i, e) {
        "use strict";

        function n(t) {
            for (var e in t) i.hasOwnProperty(e) || (i[e] = t[e])
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), n(e(120)), n(e(26))
    }, function(t, o, e) {
        "use strict";
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = e(2),
            s = e(125);

        function a(t) {
            for (var e = t.toLowerCase().match(/\w+/g), i = 0, n = "", o = 0; o < e.length; o++) {
                var r = e[o];
                "ctrl" === r ? i += 4 : "shift" === r ? i += 2 : "alt" === r ? i += 1 : n = r
            }
            return i + n
        }
        var l = {
                Up: "arrowUp",
                Down: "arrowDown",
                Right: "arrowRight",
                Left: "arrowLeft",
                Esc: "escape",
                Spacebar: "space"
            },
            e = (i.prototype.addHotKey = function(t, e, i) {
                t = a(t);
                this._keysStorage[t] || (this._keysStorage[t] = []), this._keysStorage[t].push({
                    handler: e,
                    scope: i
                })
            }, i.prototype.removeHotKey = function(t, e) {
                var i = this._keysStorage;
                if (t && delete i[n = a(t)], e)
                    for (var n in i) {
                        for (var o = [], r = 0; r < i[n].length; r++) i[n][r].scope === e && o.push(r);
                        if (i[n].length === o.length) delete i[n];
                        else
                            for (r = o.length - 1; 0 <= r; r--) i[n].splice(o[r], 1)
                    }
            }, i.prototype.exist = function(t) {
                t = a(t);
                return !!this._keysStorage[t]
            }, i);

        function i() {
            var o = this;
            this._keysStorage = {}, document.addEventListener("keydown", function(t) {
                var e = (t.ctrlKey || t.metaKey ? 4 : 0) + (t.shiftKey ? 2 : 0) + (t.altKey ? 1 : 0) + ((e = 48 <= t.which && t.which <= 57 || 65 <= t.which && t.which <= 90 ? String.fromCharCode(t.which) : (e = 32 === t.which ? t.code : t.key, r.isIE() && l[e] || e)) && e.toLowerCase()),
                    i = o._keysStorage[e];
                if (i)
                    for (var n = 0; n < i.length; n++) i[n].handler(t)
            })
        }
        o.keyManager = new e, o.addHotkeys = function(t, i, e) {
            for (var n in e = e || new Date, t) o.keyManager.addHotKey(n, function(e) {
                return function(t) {
                    !1 !== i(t, s.getFocus()) && e(t)
                }
            }(t[n]), e);
            return function() {
                return o.keyManager.removeHotKey(void 0, e)
            }
        }
    }, function(t, e, i) {
        "use strict";
        var n;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), (n = e.TreeFilterType || (e.TreeFilterType = {})).all = "all", n.level = "level", n.leafs = "leafs", (n = e.DataEvents || (e.DataEvents = {})).afterAdd = "afteradd", n.beforeAdd = "beforeadd", n.removeAll = "removeall", n.beforeRemove = "beforeremove", n.afterRemove = "afterremove", n.change = "change", n.load = "load", n.loadError = "loaderror", n.beforeLazyLoad = "beforelazyload", n.afterLazyLoad = "afterlazyload", (n = e.DragEvents || (e.DragEvents = {})).beforeDrag = "beforeDrag", n.dragStart = "dragStart", n.dragOut = "dragOut", n.dragIn = "dragIn", n.canDrop = "canDrop", n.cancelDrop = "cancelDrop", n.beforeDrop = "beforeDrop", n.afterDrop = "afterDrop", n.afterDrag = "afterDrag", (e = e.DataDriver || (e.DataDriver = {})).json = "json", e.csv = "csv", e.xml = "xml"
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(20),
            o = i(63);
        e.isEqualObj = function(t, e) {
            for (var i in t)
                if (t[i] !== e[i]) return !1;
            return !0
        }, e.naturalCompare = function(t, e) {
            if (isNaN(t) || isNaN(e)) {
                var n = [],
                    o = [];
                for (t.replace(/(\d+)|(\D+)/g, function(t, e, i) {
                        n.push([e || 1 / 0, i || ""])
                    }), e.replace(/(\d+)|(\D+)/g, function(t, e, i) {
                        o.push([e || 1 / 0, i || ""])
                    }); n.length && o.length;) {
                    var i = n.shift(),
                        r = o.shift(),
                        r = i[0] - r[0] || i[1].localeCompare(r[1]);
                    if (r) return r
                }
                return n.length - o.length
            }
            return t - e
        }, e.findByConf = function(t, e) {
            if ("function" == typeof e) {
                if (e.call(this, t)) return t
            } else if (e.by && e.match && t[e.by] === e.match) return t
        }, e.isDebug = function() {
            var t = window.dhx;
            if (void 0 !== t) return void 0 !== t.debug && t.debug
        }, e.dhxWarning = function(t) {
            console.warn(t)
        }, e.dhxError = function(t) {
            throw new Error(t)
        }, e.toProxy = function(t) {
            var e = typeof t;
            return "string" == e ? new n.DataProxy(t) : "object" == e ? t : void 0
        }, e.toDataDriver = function(t) {
            if ("string" == typeof t) {
                var e = window.dhx,
                    e = e && e.dataDrivers || o.dataDrivers;
                if (e[t]) return new e[t];
                console.warn("Incorrect data driver type:", t), console.warn("Available types:", JSON.stringify(Object.keys(e)))
            } else if ("object" == typeof t) return t
        }, e.copyWithoutInner = function(t, e) {
            var i, n = {};
            for (i in t) i.startsWith("$") || e && e[i] || (n[i] = t[i]);
            return n
        }, e.isTreeCollection = function(t) {
            return Boolean(t.getRoot)
        }, e.hasJsonOrArrayStructure = function(t) {
            if ("object" == typeof t) return !0;
            if ("string" != typeof t) return !1;
            try {
                var e = JSON.parse(t);
                return "[object Object]" === Object.prototype.toString.call(e) || Array.isArray(e)
            } catch (t) {
                return !1
            }
        }
    }, function(t, i, e) {
        "use strict";

        function n(t) {
            for (var e in t) i.hasOwnProperty(e) || (i[e] = t[e])
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), n(e(124)), n(e(126)), n(e(35))
    }, function(t, e, i) {
        "use strict";

        function o(t) {
            if ("#" === t.substr(0, 1)) return t;
            t = /(.*?)rgb[a]?\((\d+), *(\d+), *(\d+),* *([\d+.]*)\)/.exec(t);
            return "#" + parseInt(t[2], 10).toString(16).padStart(2, "0") + parseInt(t[3], 10).toString(16).padStart(2, "0") + parseInt(t[4], 10).toString(16).padStart(2, "0")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.rgbToHex = o, e.transpose = function(t, e) {
            for (var i = [], n = 0; n < t.length; n++)
                for (var o = t[n], r = 0; r < o.length; r++) {
                    i[r] = i[r] || [];
                    var s = e ? e(o[r]) : o[r];
                    i[r].push(s)
                }
            return i
        }, e.getStyleByClass = function(t, e, i, n) {
            return e = e.querySelector("." + i), i = e, i = "string" == typeof(t = '<div class="' + t + '"></div>') ? (i.insertAdjacentHTML("beforeend", t), i.lastChild) : (i.appendChild(t), t), t = {
                color: "rgb(0, 0, 0)" === (t = window.getComputedStyle(i)).color ? n.color : o(t.color),
                background: "rgba(0, 0, 0, 0)" === t.backgroundColor ? n.background : o(t.backgroundColor),
                fontSize: parseFloat(t.fontSize)
            }, e.removeChild(i), t.color === n.color && t.background === n.background && t.fontSize === n.fontSize ? null : t
        }, e.removeHTMLTags = function(t) {
            return "string" != typeof t && "number" != typeof t && "boolean" != typeof t ? "" : ("" + (null == t ? "" : t)).replace(/<[^>]*>/g, "").replace(/["]/g, "&quot;").trim()
        }, e.isCssSupport = function(e, i) {
            try {
                return CSS.supports(e, i)
            } catch (t) {
                var n = document.createElement("div");
                return n.style[e] = i, n.style[e] === i
            }
        }, e.isRowEmpty = function(i) {
            if (i) return Object.keys(i).reduce(function(t, e) {
                return ("id" === e || e.startsWith("$") || !t || void 0 === i[e] || "" === i[e]) && t
            }, !0)
        }, e.isSortable = function(t, e) {
            return !1 !== e.sortable && t.sortable || e.sortable
        }, e.isAutoWidth = function(e, t) {
            if (t) return !1 !== t.autoWidth && e.autoWidth || t.autoWidth;
            var i = !1;
            return e.columns.map(function(t) {
                (!1 !== t.autoWidth && e.autoWidth || t.autoWidth) && (i = !0)
            }), i
        }, e.getTotalWidth = function(t) {
            return t.reduce(function(t, e) {
                return !e.hidden && t + (e.$width || 0)
            }, 0)
        }
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(34),
            i = (o.prototype.updateUrl = function(t, e) {
                for (var i in void 0 === e && (e = {}), this._url = this.url = t || this._url, this.url += this.url.includes("?") ? "&" : "?", e) this.config[i] = e[i], this.url += i + "=" + encodeURIComponent(e[i]) + "&";
                this.url = this.url.slice(0, -1)
            }, o.prototype.load = function() {
                return n.ajax.get(this.url, null, {
                    responseType: "text"
                })
            }, o.prototype.save = function(t, e) {
                switch (e) {
                    case "delete":
                        return n.ajax.delete(this.url, t);
                    case "update":
                    case "insert":
                    default:
                        return n.ajax.post(this.url, t)
                }
            }, o);

        function o(t, e) {
            this.url = this._url = t, this.config = e
        }
        e.DataProxy = i
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), (e = e.SelectionEvents || (e.SelectionEvents = {})).beforeUnSelect = "beforeunselect", e.afterUnSelect = "afterunselect", e.beforeSelect = "beforeselect", e.afterSelect = "afterselect"
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(0);
        e.getCount = function(t, e, i) {
            var n = {
                danger: " dhx_navbar-count--color_danger",
                secondary: " dhx_navbar-count--color_secondary",
                primary: " dhx_navbar-count--color_primary",
                success: " dhx_navbar-count--color_success"
            } [t.countColor] || " dhx_navbar-count--color_danger";
            return a.el(".dhx_navbar-count", {
                class: e + n + (!i && 99 < parseInt(t.count, 10) ? " dhx_navbar-count--overlimit" : "")
            }, i && 99 < parseInt(t.count, 10) ? "99+" : t.count)
        }, e.getIcon = function(t, e) {
            return void 0 === t && (t = ""), t.startsWith("dxi") && (t = "dxi " + t), a.el("span", {
                class: "dhx_" + e + "__icon " + t
            })
        };
        e.navbarComponentMixin = function(t, e, i, n) {
            var o, r, s = (o = t, s = r = "", s = (r = i ? "dhx_menu-item" : "dhx_" + o + "__item") + ((i = e).css ? " " + i.css : ""), "spacer" !== i.type && "separator" !== i.type || (s += " " + r + "--" + i.type), "button" !== i.type || "sidebar" !== o || i.icon || (s += " dhx_navbar-item--colapse_hidden"), s),
                t = "ribbon" === t && ("navItem" === e.type || "imageButton" === e.type);
            return a.el("li", {
                _key: e.id,
                class: s + (e.icon && !e.value && t ? " dhx_ribbon__item--icon" : "") + (e.src && !e.value && t ? " dhx_ribbon__item--icon" : "") + (e.size && t ? " dhx_ribbon__item--" + e.size : ""),
                ".innerHTML": "customHTML" === e.type ? e.html : void 0,
                dhx_id: "customHTML" === e.type ? e.id : void 0
            }, "customHTML" !== e.type ? [n] : void 0)
        }, e.getNavbarButtonCSS = function(t, e) {
            var i = t.color,
                n = t.size,
                o = t.view,
                r = t.full,
                s = t.icon,
                a = t.circle,
                l = t.loading,
                c = t.value,
                t = t.active;
            return ({
                danger: " dhx_button--color_danger",
                secondary: " dhx_button--color_secondary",
                primary: " dhx_button--color_primary",
                success: " dhx_button--color_success"
            } [i] || " dhx_button--color_primary") + ({
                small: " dhx_button--size_small",
                medium: " dhx_button--size_medium"
            } [n] || " dhx_button--size_medium") + ({
                flat: " dhx_button--view_flat",
                link: " dhx_button--view_link"
            } [o] || " dhx_button--view_flat") + (r ? " dhx_button--width_full" : "") + (a ? " dhx_button--circle" : "") + (l ? " dhx_button--loading" : "") + (t ? " dhx_button--active" : "") + (s && !c ? " dhx_button--icon" : "")
        }
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), (e = e.ChartEvents || (e.ChartEvents = {})).toggleSeries = "toggleSeries", e.chartMouseMove = "chartMouseMove", e.chartMouseLeave = "chartMouseLeave", e.resize = "resize", e.serieClick = "serieClick"
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var g = i(0),
            v = i(8);

        function m(t, e, i) {
            return [Math.cos(2 * Math.PI * t) * e, Math.sin(2 * Math.PI * t) * i]
        }

        function y(t, e) {
            return t - 1e-6 < e && e < t + 1e-6
        }

        function b(t, e) {
            return "M" + -t + ",0A" + t + "," + t + " 0 " + (e ? 0 : 1) + " 1 " + t + ",0A" + t + "," + t + " 0 " + (e ? 0 : 1) + " 1 " + -t + ",0"
        }
        e.getCoordinates = m, e.shiftCoordinates = function(t, e, i) {
            return [t[0] + e, t[1] + i]
        }, e.pieLikeHandlers = {
            onmouseover: function(t, e, i, n) {
                n.el.setAttribute("transform", "translate(" + t + ", " + e + ") scale(1.05)"), n.el.classList.add("dhx_pie-transform-delay")
            },
            onmouseout: function(t, e) {
                e.el.setAttribute("transform", "translate(0, 0)"), e.el.classList.remove("dhx_pie-transform-delay")
            }
        }, e.radarScale = function(t, e, i) {
            var n, a = e < i ? e / 2 : i / 2,
                l = 1 / t.scales.length,
                c = .5 < l ? 1 : 0,
                u = [],
                o = (n = a, o = "#FAFBFD", g.sv("circle", {
                    cx: 0,
                    cy: 0,
                    r: n,
                    fill: o,
                    stroke: "none",
                    class: "background-circle"
                }));
            u.push(o);
            for (var d = -.25, r = [], s = t.axis, h = "radar-grid " + (t.zebra ? "zebra" : ""), f = 1; f < s.length; f += 2) {
                var p = a * s[f - 1],
                    _ = a * s[f],
                    _ = b(p, !0) + " " + b(_, !1),
                    _ = g.sv("path", {
                        d: _,
                        fill: "none",
                        stroke: "black",
                        class: h
                    });
                r.push(_)
            }
            return u.push(r), t.scales.forEach(function(t) {
                var e = m(d, a, a),
                    i = e[0],
                    n = e[1],
                    o = d + l,
                    r = m(o, a, a),
                    e = r[0],
                    r = r[1],
                    e = "M " + i + " " + n + " A " + a + " " + a + " 0 " + c + " 1 " + e + " " + r + " L 0 0",
                    r = g.sv("path", {
                        d: e,
                        stroke: "black",
                        fill: "none",
                        class: "radar-scale"
                    });
                u.push(r);
                var s, e = [8, 8],
                    r = e[0],
                    e = e[1],
                    r = y(d, 0) || y(d, .5) ? 0 : d < 0 || .5 < d ? -r : r,
                    e = y(d, -.25) || y(d, .25) ? 0 : d < -.25 || .25 < d ? -e : e;
                t = y(d, -.25) || y(d, .25) ? (s = y(d, -.25) ? v.verticalTopText : v.verticalBottomText, g.sv("text", {
                    x: i + e,
                    y: n + r,
                    class: "scale-text"
                }, [s(t)])) : (s = -.25 <= d && d <= .25 ? "start-text scale-text" : "end-text scale-text", g.sv("text", {
                    x: i + e,
                    y: n + r,
                    class: s
                }, [v.verticalCenteredText(t)])), u.push(t), d = o
            }), d = -.25, t.realAxis && (t = t.realAxis.map(function(t, e) {
                var i = m(-.25, a * s[e], a * s[e]),
                    e = i[0],
                    i = i[1];
                return g.sv("text", {
                    x: e,
                    y: i,
                    dx: -10,
                    class: "radar-axis-text"
                }, [v.verticalCenteredText(t.toString())])
            }), u.push(t)), g.sv("g", {
                transform: "translate(" + e / 2 + ", " + i / 2 + ")"
            }, u)
        }
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        i(5);
        (i = e.FileStatus || (e.FileStatus = {})).queue = "queue", i.uploaded = "uploaded", i.failed = "failed", i.inprogress = "inprogress", (i = e.UploaderEvents || (e.UploaderEvents = {})).uploadBegin = "uploadbegin", i.beforeUploadFile = "beforeuploadfile", i.uploadFile = "uploadfile", i.uploadFail = "uploadfail", i.uploadComplete = "uploadcomplete", i.uploadProgress = "uploadprogress", (e.ProgressBarEvents || (e.ProgressBarEvents = {})).cancel = "cancel", (e = e.VaultMode || (e.VaultMode = {})).grid = "grid", e.list = "list"
    }, function(t, e, i) {
        "use strict";
        var n;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), (n = e.LayoutEvents || (e.LayoutEvents = {})).beforeShow = "beforeShow", n.afterShow = "afterShow", n.beforeHide = "beforeHide", n.afterHide = "afterHide", n.beforeResizeStart = "beforeResizeStart", n.resize = "resize", n.afterResizeEnd = "afterResizeEnd", n.beforeAdd = "beforeAdd", n.afterAdd = "afterAdd", n.beforeRemove = "beforeRemove", n.afterRemove = "afterRemove", n.beforeCollapse = "beforeCollapse", n.afterCollapse = "afterCollapse", n.beforeExpand = "beforeExpand", n.afterExpand = "afterExpand", (e = e.resizeMode || (e.resizeMode = {}))[e.unknown = 0] = "unknown", e[e.percents = 1] = "percents", e[e.pixels = 2] = "pixels", e[e.mixedpx1 = 3] = "mixedpx1", e[e.mixedpx2 = 4] = "mixedpx2", e[e.mixedperc1 = 5] = "mixedperc1", e[e.mixedperc2 = 6] = "mixedperc2"
    }, function(t, i, e) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            function(t) {
                for (var e in t) i.hasOwnProperty(e) || (i[e] = t[e])
            }(e(123))
    }, function(t, i, e) {
        "use strict";

        function n(t) {
            for (var e in t) i.hasOwnProperty(e) || (i[e] = t[e])
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), n(e(143)), n(e(71)), n(e(41))
    }, function(t, i, e) {
        "use strict";

        function n(t) {
            for (var e in t) i.hasOwnProperty(e) || (i[e] = t[e])
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), n(e(175)), n(e(78))
    }, function(t, e, i) {
        "use strict";
        var n;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), (n = e.RealPosition || (e.RealPosition = {})).left = "left", n.right = "right", n.top = "top", n.bottom = "bottom", n.center = "center", (n = e.Position || (e.Position = {})).right = "right", n.bottom = "bottom", n.center = "center", (e = e.MessageContainerPosition || (e.MessageContainerPosition = {})).topLeft = "top-left", e.topRight = "top-right", e.bottomLeft = "bottom-left", e.bottomRight = "bottom-right"
    }, function(t, e) {
        "use strict";
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            },
            n = function() {
                return this
            }();
        try {
            n = n || new Function("return this")()
        } catch (t) {
            "object" === ("undefined" == typeof window ? "undefined" : i(window)) && (n = window)
        }
        t.exports = n
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.default = {
            apply: "apply",
            reject: "reject"
        }
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(1),
            i = (o.prototype.update = function() {
                this._styleCont.innerHTML !== this._generateCss() && (document.head.appendChild(this._styleCont), this._styleCont.innerHTML = this._generateCss())
            }, o.prototype.remove = function(t) {
                delete this._classes[t], this.update()
            }, o.prototype.add = function(t, e, i) {
                void 0 === i && (i = !1);
                var n = this._toCssString(t),
                    t = this._findSameClassId(n);
                return t && e && e !== t ? (this._classes[e] = this._classes[t], e) : t || this._addNewClass(n, e, i)
            }, o.prototype.get = function(t) {
                if (this._classes[t]) {
                    for (var e = {}, i = 0, n = this._classes[t].split(";"); i < n.length; i++) {
                        var o = n[i];
                        o && (e[(o = o.split(":"))[0]] = o[1])
                    }
                    return e
                }
                return null
            }, o.prototype._findSameClassId = function(t) {
                for (var e in this._classes)
                    if (t === this._classes[e]) return e;
                return null
            }, o.prototype._addNewClass = function(t, e, i) {
                e = e || "dhx_generated_class_" + n.uid();
                return this._classes[e] = t, i || this.update(), e
            }, o.prototype._toCssString = function(t) {
                var e, i = "";
                for (e in t) {
                    var n = t[e];
                    i += e.replace(/[A-Z]{1}/g, function(t) {
                        return "-" + t.toLowerCase()
                    }) + ":" + n + ";"
                }
                return i
            }, o.prototype._generateCss = function() {
                var t, e = "";
                for (t in this._classes) e += "." + t + "{" + this._classes[t] + "}\n";
                return e
            }, o);

        function o() {
            this._classes = {};
            var t = document.createElement("style");
            t.id = "dhx_generated_styles", this._styleCont = document.head.appendChild(t)
        }
        e.CssManager = i, e.cssManager = new i
    }, function(t, e, i) {
        "use strict";
        (function(c) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var u = i(16),
                d = i(17);

            function h(t) {
                return t ? t.includes("json") ? "json" : t.includes("xml") ? "xml" : "text" : "text"
            }

            function n(o, r, s, t, a) {
                var n, l = t || {};
                return a && (l.Accept = "application/" + a), "GET" !== s && (l["Content-Type"] = l["Content-Type"] || "application/json"), "GET" === s && ((t = r && "object" == typeof r ? (n = r, Object.keys(n).reduce(function(t, e) {
                    var i = "object" == typeof n[e] ? JSON.stringify(n[e]) : n[e];
                    return t.push(e + "=" + encodeURIComponent(i)), t
                }, []).join("&")) : r && "string" == typeof r ? r : "") && (o += o.includes("?") ? "&" : "?", o += t), r = null), window.fetch ? window.fetch(o, {
                    method: s,
                    body: r ? JSON.stringify(r) : null,
                    headers: l
                }).then(function(e) {
                    if (!e.ok) return e.text().then(function(t) {
                        return c.reject({
                            status: e.status,
                            statusText: e.statusText,
                            message: t
                        })
                    });
                    var t = a || h(e.headers.get("Content-Type"));
                    if ("raw" === t) return {
                        headers: Object.fromEntries(e.headers.entries()),
                        url: e.url,
                        body: e.body
                    };
                    if (204 !== e.status) switch (t) {
                        case "json":
                            return e.json();
                        case "xml":
                            var i = d.toDataDriver(u.DataDriver.xml);
                            return i ? e.text().then(function(t) {
                                return i.toJsonObject(t)
                            }) : e.text();
                        default:
                            return e.text()
                    }
                }) : new c(function(t, e) {
                    var i, n = new XMLHttpRequest;
                    for (i in n.onload = function() {
                            200 <= n.status && n.status < 300 ? ("raw" === a && t({
                                url: n.responseURL,
                                headers: n.getAllResponseHeaders().trim().split(/[\r\n]+/).reduce(function(t, e) {
                                    e = e.split(": ");
                                    return t[e[0]] = e[1], t
                                }, {}),
                                body: n.response
                            }), 204 === n.status ? t() : t(function(t, e) {
                                switch (e) {
                                    case "json":
                                        return JSON.parse(t);
                                    case "text":
                                        return t;
                                    case "xml":
                                        var i = d.toDataDriver(u.DataDriver.xml);
                                        return i ? i.toJsonObject(t) : {
                                            parseError: "Incorrect data driver type: 'xml'"
                                        };
                                    default:
                                        return t
                                }
                            }(n.responseText, a || h(n.getResponseHeader("Content-Type"))))) : e({
                                status: n.status,
                                statusText: n.statusText
                            })
                        }, n.onerror = function() {
                            e({
                                status: n.status,
                                statusText: n.statusText,
                                message: n.responseText
                            })
                        }, n.open(s, o), l) n.setRequestHeader(i, l[i]);
                    switch (s) {
                        case "POST":
                        case "DELETE":
                        case "PUT":
                            n.send(void 0 !== r ? JSON.stringify(r) : "");
                            break;
                        case "GET":
                        default:
                            n.send()
                    }
                })
            }
            e.ajax = {
                get: function(t, e, i) {
                    return n(t, e, "GET", i && i.headers, void 0 !== i ? i.responseType : void 0)
                },
                post: function(t, e, i) {
                    return n(t, e, "POST", i && i.headers, void 0 !== i ? i.responseType : void 0)
                },
                put: function(t, e, i) {
                    return n(t, e, "PUT", i && i.headers, void 0 !== i ? i.responseType : void 0)
                },
                delete: function(t, e, i) {
                    return n(t, e, "DELETE", i && i.headers, void 0 !== i ? i.responseType : void 0)
                }
            }
        }).call(this, i(13))
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        i = i(5);
        e.DataEvents = i.DataEvents, (e = e.NavigationBarEvents || (e.NavigationBarEvents = {})).inputCreated = "inputCreated", e.click = "click", e.openMenu = "openmenu", e.beforeHide = "beforeHide", e.afterHide = "afterHide", e.inputFocus = "inputfocus", e.inputBlur = "inputblur"
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.default = {
            dragAndDrop: "Drag & drop",
            or: "or",
            browse: "Browse files",
            filesOrFoldersHere: "files or folders here",
            cancel: "Cancel",
            clearAll: "Clear all",
            clear: "Clear",
            add: "Add",
            upload: "Upload",
            download: "Download",
            error: "error",
            byte: "B",
            kilobyte: "KB",
            megabyte: "MB",
            gigabyte: "GB"
        }
    }, function(t, i, e) {
        "use strict";

        function n(t) {
            for (var e in t) i.hasOwnProperty(e) || (i[e] = t[e])
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), n(e(140)), n(e(66)), n(e(38))
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), (e = e.ListEvents || (e.ListEvents = {})).click = "click", e.doubleClick = "doubleclick", e.focusChange = "focuschange", e.beforeEditStart = "beforeEditStart", e.afterEditStart = "afterEditStart", e.beforeEditEnd = "beforeEditEnd", e.afterEditEnd = "afterEditEnd", e.itemRightClick = "itemRightClick", e.itemMouseOver = "itemMouseOver", e.contextmenu = "contextmenu"
    }, function(t, i, e) {
        "use strict";

        function n(t) {
            for (var e in t) i.hasOwnProperty(e) || (i[e] = t[e])
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), n(e(144)), n(e(70))
    }, function(t, i, e) {
        "use strict";

        function n(t) {
            for (var e in t) i.hasOwnProperty(e) || (i[e] = t[e])
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), n(e(145)), n(e(68))
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var v, n = i(42),
            o = i(1),
            r = {
                "%d": function(t) {
                    t = t.getDate();
                    return t < 10 ? "0" + t : t
                },
                "%j": function(t) {
                    return t.getDate()
                },
                "%l": function(t) {
                    return n.default.days[t.getDay()]
                },
                "%D": function(t) {
                    return n.default.daysShort[t.getDay()]
                },
                "%m": function(t) {
                    t = t.getMonth() + 1;
                    return t < 10 ? "0" + t : t
                },
                "%n": function(t) {
                    return t.getMonth() + 1
                },
                "%M": function(t) {
                    return n.default.monthsShort[t.getMonth()]
                },
                "%F": function(t) {
                    return n.default.months[t.getMonth()]
                },
                "%y": function(t) {
                    return t.getFullYear().toString().slice(2)
                },
                "%Y": function(t) {
                    return t.getFullYear()
                },
                "%h": function(t) {
                    t = t.getHours() % 12;
                    return 0 === t && (t = 12), t < 10 ? "0" + t : t
                },
                "%g": function(t) {
                    t = t.getHours() % 12;
                    return 0 === t && (t = 12), t
                },
                "%H": function(t) {
                    t = t.getHours();
                    return t < 10 ? "0" + t : t
                },
                "%G": function(t) {
                    return t.getHours()
                },
                "%i": function(t) {
                    t = t.getMinutes();
                    return t < 10 ? "0" + t : t
                },
                "%s": function(t) {
                    t = t.getSeconds();
                    return t < 10 ? "0" + t : t
                },
                "%a": function(t) {
                    return 12 <= t.getHours() ? "pm" : "am"
                },
                "%A": function(t) {
                    return 12 <= t.getHours() ? "PM" : "AM"
                },
                "%u": function(t) {
                    return t.getMilliseconds()
                }
            },
            m = {
                "%d": function(t, e) {
                    /(^([0-9][0-9])$)/i.test(e) ? t.setDate(Number(e)) : t.setDate(Number(1))
                },
                "%j": function(t, e) {
                    /(^([0-9]?[0-9])$)/i.test(e) ? t.setDate(Number(e)) : t.setDate(Number(1))
                },
                "%m": function(t, e) {
                    /(^([0-9][0-9])$)/i.test(e) ? t.setMonth(Number(e) - 1) : t.setMonth(Number(0))
                },
                "%n": function(t, e) {
                    /(^([0-9]?[0-9])$)/i.test(e) ? t.setMonth(Number(e) - 1) : t.setMonth(Number(0))
                },
                "%M": function(t, e) {
                    var i = o.findIndex(n.default.monthsShort, function(t) {
                        return t === e
                    }); - 1 === i ? t.setMonth(0) : t.setMonth(i)
                },
                "%F": function(t, e) {
                    var i = o.findIndex(n.default.months, function(t) {
                        return t === e
                    }); - 1 === i ? t.setMonth(0) : t.setMonth(i)
                },
                "%y": function(t, e) {
                    /(^([0-9][0-9])$)/i.test(e) ? t.setFullYear(Number("20" + e)) : t.setFullYear(Number("2000"))
                },
                "%Y": function(t, e) {
                    /(^([0-9][0-9][0-9][0-9])$)/i.test(e) ? t.setFullYear(Number(e)) : t.setFullYear(Number("2000"))
                },
                "%h": function(t, e, i) {
                    /(^0[1-9]|1[0-2]$)/i.test(e) && "pm" === i || "PM" === i ? t.setHours(Number(e)) : t.setHours(Number(0))
                },
                "%g": function(t, e, i) {
                    /(^[1-9]$)|(^0[1-9]|1[0-2]$)/i.test(e) && "pm" === i || "PM" === i ? t.setHours(Number(e)) : t.setHours(Number(0))
                },
                "%H": function(t, e) {
                    /(^[0-2][0-9]$)/i.test(e) ? t.setHours(Number(e)) : t.setHours(Number(0))
                },
                "%G": function(t, e) {
                    /(^[1-9][0-9]?$)/i.test(e) ? t.setHours(Number(e)) : t.setHours(Number(0))
                },
                "%i": function(t, e) {
                    /(^([0-5][0-9])$)/i.test(e) ? t.setMinutes(Number(e)) : t.setMinutes(Number(0))
                },
                "%s": function(t, e) {
                    /(^([0-5][0-9])$)/i.test(e) ? t.setSeconds(Number(e)) : t.setSeconds(Number(0))
                },
                "%a": function(t, e) {
                    "pm" === e && t.setHours(t.getHours() + 12)
                },
                "%A": function(t, e) {
                    "PM" === e && t.setHours(t.getHours() + 12)
                }
            };

        function y(t) {
            for (var e = [], i = "", n = 0; n < t.length; n++) "%" === t[n] ? (0 < i.length && (e.push({
                type: v.separator,
                value: i
            }), i = ""), e.push({
                type: v.datePart,
                value: t[n] + t[n + 1]
            }), n++) : i += t[n];
            return 0 < i.length && e.push({
                type: v.separator,
                value: i
            }), e
        }(i = v = v || {})[i.separator = 0] = "separator", i[i.datePart = 1] = "datePart", e.getFormatedDate = function(t, i) {
            return y(t).reduce(function(t, e) {
                return e.type === v.separator ? t + e.value : r[e.value] ? t + r[e.value](i) : t
            }, "")
        }, e.stringToDate = function(t, e, i) {
            if ("string" == typeof t) {
                for (var n, o = [], r = 0, s = null, a = 0, l = y(e); a < l.length; a++) {
                    var c = l[a];
                    if (c.type === v.separator) {
                        var u = t.indexOf(c.value, r);
                        if (-1 === u) {
                            if (i) return !1;
                            throw new Error("Incorrect date, see docs: https://docs.dhtmlx.com/suite/calendar__api__calendar_dateformat_config.html")
                        }
                        s && (o.push({
                            formatter: s,
                            value: t.slice(r, u)
                        }), s = null), r = u + c.value.length
                    } else c.type === v.datePart && (s = c.value)
                }
                s && o.push({
                    formatter: s,
                    value: t.slice(r)
                }), o.reverse();
                for (var d = 0, h = o; d < h.length; d++) "%A" !== (g = h[d]).formatter && "%a" !== g.formatter || (n = g.value);
                for (var f = new Date(0), p = 0, _ = o; p < _.length; p++) {
                    var g = _[p];
                    m[g.formatter] && m[g.formatter](f, g.value, n)
                }
                return !!i || f
            }
        }
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.default = {
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Monday"],
            cancel: "Cancel"
        }
    }, function(t, i, e) {
        "use strict";

        function n(t) {
            for (var e in t) i.hasOwnProperty(e) || (i[e] = t[e])
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), n(e(150)), n(e(73)), n(e(72)), n(e(44));
        e = e(45);
        i.locale = e.default
    }, function(t, e, i) {
        "use strict";

        function n(t) {
            t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(t, e, i, n) {
                return e + e + i + i + n + n
            });
            t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
            return t ? {
                r: parseInt(t[1], 16),
                g: parseInt(t[2], 16),
                b: parseInt(t[3], 16)
            } : null
        }

        function o(t) {
            var e, i, n, o = t.r / 255,
                r = t.g / 255,
                s = t.b / 255,
                a = Math.max(o, r, s),
                l = a - Math.min(o, r, s),
                c = function(t) {
                    return (a - t) / 6 / l + .5
                };
            return 0 == l ? e = i = 0 : (i = l / a, n = c(o), t = c(r), c = c(s), o === a ? e = c - t : r === a ? e = 1 / 3 + n - c : s === a && (e = 2 / 3 + t - n), e < 0 ? e += 1 : 1 < e && --e), {
                h: Math.floor(360 * e),
                s: i,
                v: a
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.HSVtoRGB = function(t) {
            var e, i = {
                    r: 0,
                    g: 0,
                    b: 0
                },
                n = t.h / 60,
                o = t.s,
                r = t.v,
                t = Math.floor(n) % 6,
                n = n - Math.floor(n),
                s = 255 * r * (1 - o),
                a = 255 * r * (1 - o * n),
                l = 255 * r * (1 - o * (1 - n));
            switch (r *= 255, t) {
                case 0:
                    i.r = r, i.g = l, i.b = s;
                    break;
                case 1:
                    i.r = a, i.g = r, i.b = s;
                    break;
                case 2:
                    i.r = s, i.g = r, i.b = l;
                    break;
                case 3:
                    i.r = s, i.g = a, i.b = r;
                    break;
                case 4:
                    i.r = l, i.g = s, i.b = r;
                    break;
                case 5:
                    i.r = r, i.g = s, i.b = a
            }
            for (e in i) i[e] = Math.round(i[e]);
            return i
        }, e.RGBToHex = function(i) {
            return Object.keys(i).reduce(function(t, e) {
                e = i[e].toString(16).toUpperCase();
                return t + (e = 1 === e.length ? "0" + e : e)
            }, "#")
        }, e.HexToRGB = n, e.RGBToHSV = o, e.HexToHSV = function(t) {
            return o(n(t))
        }, e.isHex = function(t) {
            return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)
        }
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.default = {
            cancel: "Cancel",
            select: "Select",
            rightClickToDelete: "Right click to delete",
            customColors: "Custom colors",
            addNewColor: "Add new color"
        }
    }, function(t, e, i) {
        "use strict";
        var n = this && this.__assign || function() {
            return (n = Object.assign || function(t) {
                for (var e, i = 1, n = arguments.length; i < n; i++)
                    for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t
            }).apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = i(162),
            r = i(74),
            s = i(8),
            a = {
                left: r.left,
                right: r.right,
                bottom: r.bottom,
                top: r.top
            },
            h = {
                left: r.leftGrid,
                right: r.rightGrid,
                bottom: r.bottomGrid,
                top: r.topGrid
            },
            r = (l.prototype.addPadding = function() {
                this._padding = !0
            }, l.prototype.getSize = function() {
                return this.config.size
            }, l.prototype.scaleReady = function(t) {
                var e = [];
                this._charts.forEach(function(t) {
                    t.getPoints().forEach(function(t) {
                        return e.push(t[1])
                    })
                }), this._axis = new o.AxisCreator(e, this.config).getScale();
                var i = this._position;
                "radial" !== i && (t[i] += this.config.size)
            }, l.prototype.point = function(t) {
                return this.config.log ? this._logPoint(t) : this._isXDirection ? (t - this._axis.min) / (this._axis.max - this._axis.min) : 1 - (t - this._axis.min) / (this._axis.max - this._axis.min)
            }, l.prototype.add = function(t) {
                this._charts.push(t)
            }, l.prototype.paint = function(e, i) {
                var n = this;
                if (this.config.hidden) return null;
                var t = this._axis.steps.map(function(t) {
                    return [n._isXDirection ? n.point(t) * e : n.point(t) * i, t]
                });
                return 0 === t.length && "left" === this._position && (t = [
                    [0, 0]
                ]), a[this._position](t, this.config, e, i)
            }, l.prototype.scaleGrid = function() {
                var a = this,
                    l = this._position,
                    c = this.config.grid,
                    u = this.config.dashed,
                    d = this.config.hidden;
                return {
                    paint: function(t, e) {
                        var i, n, o = a._axis.steps.indexOf(a.config.targetLine),
                            r = (i = t, n = e, a._axis.steps.map(function(t) {
                                return [a._isXDirection ? a.point(t) * i : a.point(t) * n, t]
                            })),
                            s = a.point(a.config.targetValue),
                            s = {
                                targetLine: o,
                                dashed: u,
                                grid: c,
                                targetValue: s,
                                hidden: d
                            };
                        return h[l](r, t, e, s)
                    }
                }
            }, l.prototype._setDefaults = function(t) {
                t.locator && (this.locator = s.locator(t.locator)), this.config = n(n({}, {
                    scalePadding: 20,
                    textPadding: 11,
                    grid: !0,
                    targetLine: null,
                    showText: !0
                }), t)
            }, l.prototype._logPoint = function(t) {
                var e = Math.abs(t) / t,
                    i = this._axis.steps,
                    n = i.length - 1,
                    o = i.indexOf(t);
                return n = -1 !== o ? o / n : ((this._axis.min < 0 ? i.indexOf(0) : 0) + e * (s.log10(Math.abs(t)) - 1)) / n, this._isXDirection ? n : 1 - n
            }, l);

        function l(t, e, i) {
            this._data = t, this._padding = !1, this._charts = [], this._position = i, this._setDefaults(e), this._isXDirection = "bottom" === i || "top" === i, "radial" !== i && (this.config.size = "left" === i || "right" === i ? this.config.size || 40 + (this.config.title ? 40 : 0) : this.config.size || 20 + (this.config.title ? 40 : 0))
        }
        e.Scale = r
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r, s = i(8),
            i = i(48),
            o = (r = i.default, o(a, r), a.prototype.addScale = function(t, e) {
                "bottom" === t || "top" === t ? (this.xScale = e, this._xLocator = e.locator) : (this.yScale = e, this._yLocator = s.locator(this.config.value))
            }, a.prototype.paint = function(t, e) {
                r.prototype.paint.call(this, t, e)
            }, a.prototype.dataReady = function(o) {
                var r = this;
                return this.config.active ? (this._points = this._data.map(function(t, e) {
                    var i = r._xLocator(t),
                        n = r._yLocator(t),
                        n = [i, n, t.id, i, n];
                    return o && (n[1] += o[e][1]), n
                }), this._points) : this._points = []
            }, a.prototype._calckFinalPoints = function(i, n) {
                var o = this;
                this._points.forEach(function(t, e) {
                    t[0] = o.xScale.point(t[0]) * i || 0, t[1] = o.yScale.point(t[1]) * n || 0
                })
            }, a.prototype._defaultLocator = function(t) {
                return [this._yLocator(t), this._xLocator(t)]
            }, a);

        function a() {
            return null !== r && r.apply(this, arguments) || this
        }
        e.default = o
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = i(1),
            r = i(23),
            s = i(8),
            n = i(165),
            i = (a.prototype.toggle = function() {
                this.config.active = !this.config.active
            }, a.prototype.getClosest = function(t, e) {
                for (var i = [1 / 0, null, null, null], n = 0, o = this._points; n < o.length; n++) {
                    var r = o[n],
                        s = this._getClosestDist(t, e, r[0], r[1]);
                    i[0] > s && (i[0] = s, i[1] = r[0], i[2] = r[1], i[3] = r[2])
                }
                return i
            }, a.prototype.getTooltipType = function(t) {
                return "top"
            }, a.prototype.getTooltipText = function(t) {
                if (this._data.getItem(t) && this.config.tooltip) {
                    t = this._defaultLocator(this._data.getItem(t));
                    return this.config.tooltipTemplate ? this.config.tooltipTemplate(t) : t[0]
                }
            }, a.prototype.dataReady = function(t) {
                return this._points = []
            }, a.prototype.paint = function(t, e) {
                return this._calckFinalPoints(t, e)
            }, a.prototype.getPoints = function() {
                return this._points
            }, a.prototype.addScale = function(t, e) {}, a.prototype._getClosestDist = function(t, e, i, n) {
                return s.euclideanDistance(t, e, i, n)
            }, a.prototype._calckFinalPoints = function(t, e) {}, a.prototype._setDefaults = function(t) {
                this.config = t
            }, a.prototype._defaultLocator = function(t) {
                return [null, null]
            }, a.prototype._getPointType = function(t, e, i) {
                return i ? n.getShadeHelper(t, e, n.hoverMode) : n.getShadeHelper(t, e, n.standarMode)
            }, a);

        function a(t, e, i) {
            var n = this;
            this._data = t, this._handlers = {
                onclick: function(t, e) {
                    return n._events.fire(r.ChartEvents.serieClick, [t, e])
                }
            }, this.id = e.id = e.id || o.uid(), this._events = i, this._points = [], this._setDefaults(e)
        }
        e.default = i
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(t, e)
            }, function(t, e) {
                function i() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }),
            r = this && this.__assign || function() {
                return (r = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = i(8),
            i = i(48),
            o = (s = i.default, o(l, s), l.prototype.scaleReady = function(t) {
                for (var e in t) t[e] += this.config.paddings;
                return t
            }, l.prototype.dataReady = function() {
                var s = this,
                    t = this._data;
                return this._sum = t.reduce(function(t, e) {
                    return e.$hidden ? t : t + parseFloat(s._valueLocator(e))
                }, 0), this._points = t.reduce(function(t, e, i) {
                    if (e.$hidden) return t;
                    var n = s._textLocator(e),
                        o = s._valueLocator(e),
                        r = o / s._sum,
                        i = s._colorLocator ? s._colorLocator(e) : a.getDefaultColor(i);
                    return t.push([r, o, e.id, n, i]), t
                }, []), this._points
            }, l.prototype.toggle = function(t) {
                var e = this._data.getItem(t);
                e && this._data.update(t, {
                    $hidden: !e.$hidden
                })
            }, l.prototype.getClosest = function(t, e) {
                for (var i = 1 - (Math.atan2(t - this._center[0], e - this._center[1]) + Math.PI) / Math.PI / 2, n = this._points, o = 0; o < n.length; o++) {
                    if (n[o][0] >= i) return [0, this._tooltipData[o][0], this._tooltipData[o][1], n[o][2]];
                    i -= n[o][0]
                }
                return [1 / 0, null, null, null]
            }, l.prototype.getTooltipText = function(t) {
                if (this.config.tooltip) {
                    t = this._defaultLocator(this._data.getItem(t));
                    return this.config.tooltipTemplate ? this.config.tooltipTemplate(t) : t[0]
                }
            }, l.prototype.getTooltipType = function(t) {
                return "simple"
            }, l.prototype._setDefaults = function(e) {
                var i = this;
                this.config = r(r({}, {
                    subType: "basic",
                    paddings: 20
                }), e), this._drawPointType = this._getPointType("empty", "none", this.config.tooltip), this._valueLocator = a.locator(e.value), this._textLocator = a.locator(e.text), e.color ? this._colorLocator = a.locator(e.color) : e.monochrome && (this._colorLocator = function(t) {
                    return a.getColorShade(e.monochrome, 2 * i._getPercent(t))
                })
            }, l.prototype._defaultLocator = function(t) {
                return [this._valueLocator(t), this._textLocator(t)]
            }, l.prototype._getPercent = function(t) {
                return parseFloat(this._valueLocator(t)) / this._sum
            }, l);

        function l() {
            var t = null !== s && s.apply(this, arguments) || this;
            return t._center = [0, 0], t._tooltipData = [], t
        }
        e.default = o
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(t, e)
            }, function(t, e) {
                function i() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }),
            r = this && this.__assign || function() {
                return (r = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a, l = i(0),
            c = i(8),
            i = i(47),
            o = (a = i.default, o(s, a), s.prototype.paint = function(t, e) {
                var i = this;
                a.prototype.paint.call(this, t, e);
                var n, o = this.config.pointColor || this.config.color,
                    r = "chart " + this.config.type + " " + (this.config.css || "") + " " + (this.config.dashed ? "dash-line" : ""),
                    s = [];
                return this.config.strokeWidth && s.push(this._getForm(this._points, this.config, r, t, e)), this.config.pointType && (n = this._getPointType(this.config.pointType, o, !1), s = s.concat(this._points.map(function(t) {
                    return n(t[0], t[1], c.calcPointRef(t[2], i.id))
                }))), l.sv("g", {
                    class: "seria",
                    _key: this.id
                }, s)
            }, s.prototype._getForm = function(t, e, i, n, o) {
                t = t.map(function(t, e) {
                    return (e ? "L" : "M") + t[0] + " " + t[1]
                }).join(" ");
                return l.sv("path", {
                    id: "seria" + e.id,
                    d: t,
                    stroke: e.color,
                    class: i,
                    "stroke-width": this.config.strokeWidth,
                    fill: "none"
                })
            }, s.prototype._setDefaults = function(t) {
                this.config = r(r({}, {
                    alpha: 1,
                    strokeWidth: 2,
                    active: !0,
                    tooltip: !0
                }), t)
            }, s);

        function s() {
            return null !== a && a.apply(this, arguments) || this
        }
        e.default = o
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = {
            notFound: "Not Found",
            selectAll: "Select All",
            unselectAll: "Unselect All",
            selectedItems: "selected items"
        }
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(t, e)
            }, function(t, e) {
                function i() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }),
            r = this && this.__spreadArrays || function() {
                for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
                for (var n = Array(t), o = 0, e = 0; e < i; e++)
                    for (var r = arguments[e], s = 0, a = r.length; s < a; s++, o++) n[o] = r[s];
                return n
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, _ = i(0),
            g = i(1),
            v = i(6),
            a = i(11),
            l = i(3),
            c = i(7),
            o = (s = a.Label, o(u, s), u.prototype.setProperties = function(t) {
                if (t && !g.isEmptyObj(t) && this.events.fire(c.ItemEvent.beforeChangeProperties, [this.getProperties()])) {
                    for (var e in t) this._props.includes(e) && (this.config[e] = t[e]);
                    this.events.fire(c.ItemEvent.afterChangeProperties, [this.getProperties()]), this.paint()
                }
            }, u.prototype.getProperties = function() {
                var t, e = {};
                for (t in this.config) this._props.includes(t) && (e[t] = this.config[t]);
                return e
            }, u.prototype.show = function() {
                var t = this.config,
                    e = t.value;
                t.hidden && this.events.fire(c.ItemEvent.beforeShow, [e]) && (this.config.hidden = !1, this.events.fire(c.ItemEvent.afterShow, [e]))
            }, u.prototype.hide = function(t) {
                var e = this.config,
                    i = e.value;
                e.hidden && !t || !this.events.fire(c.ItemEvent.beforeHide, [i, t]) || (this.config.hidden = !0, this.events.fire(c.ItemEvent.afterHide, [i, t]))
            }, u.prototype.isVisible = function() {
                return !this.config.hidden
            }, u.prototype.disable = function() {
                this.config.disabled = !0, this.paint()
            }, u.prototype.enable = function() {
                this.config.disabled = !1, this.paint()
            }, u.prototype.isDisabled = function() {
                return this.config.disabled
            }, u.prototype.validate = function(t, e) {
                void 0 === t && (t = !1);
                e = void 0 === e ? this.getValue() : e;
                if (t || this.events.fire(c.ItemEvent.beforeValidate, [e])) return this._isValid = this.config.validation ? v.validateInput(e, this.config.validation) : this.config.required ? !(!v.baseInputValidate(e, this.config) || !String(e).length) : v.baseInputValidate(e, this.config), t || (this.config.$validationStatus = this._isValid ? c.ValidationStatus.success : c.ValidationStatus.error, this.events.fire(c.ItemEvent.afterValidate, [e, this._isValid])), this._isValid
            }, u.prototype.clearValidate = function() {
                this.config.$validationStatus = c.ValidationStatus.pre, this.paint()
            }, u.prototype.clear = function() {
                "" !== this.config.value && (this.config.value = "", this.events.fire(c.ItemEvent.change, [this.getValue()]))
            }, u.prototype.setValue = function(t) {
                void 0 !== t && this.config.value !== t && (this.config.value = t, this.events.fire(c.ItemEvent.change, [this.getValue()]), v.isVerify(this.config) && this.validate())
            }, u.prototype.getValue = function() {
                var t = this.config,
                    e = t.inputType,
                    t = t.value;
                return "number" === e && "number" == typeof t ? t : "number" === e && "string" == typeof t ? t.length ? Number(t) : "" : "string" == typeof t ? t.length ? t : "" : void 0 === t ? "" : String(t)
            }, u.prototype.focus = function() {
                var t = this;
                _.awaitRedraw().then(function() {
                    t.getRootView().refs.input.el.focus()
                })
            }, u.prototype._initView = function(t) {
                var e, i = this;
                if (g.isEmptyObj(t)) throw new Error("Check the configuration is correct");
                for (e in this.config = {
                        type: "input",
                        id: t.id,
                        name: t.name,
                        disabled: !1,
                        hidden: !1,
                        value: "",
                        inputType: "text",
                        required: !1,
                        validation: void 0,
                        maxlength: void 0,
                        minlength: void 0,
                        min: void 0,
                        max: void 0,
                        icon: "",
                        placeholder: "",
                        autocomplete: !1,
                        readOnly: !1,
                        label: "",
                        labelWidth: "",
                        labelPosition: "top",
                        hiddenLabel: !1,
                        helpMessage: "",
                        preMessage: "",
                        successMessage: "",
                        errorMessage: "",
                        width: "content",
                        height: "content",
                        padding: 0
                    }, t) "id" !== e && "type" !== e && "name" !== e && (this.config[e] = t[e]);
                this.config.hidden && _.awaitRedraw().then(function() {
                    i.hide(!0)
                }), this.paint()
            }, u.prototype._initHandlers = function() {
                var t = this;
                this.events.on(c.ItemEvent.change, function() {
                    return t.paint()
                }), this.events.on(c.ItemEvent.afterValidate, function() {
                    t.config.$validationStatus = t._isValid ? c.ValidationStatus.success : c.ValidationStatus.error, t.paint()
                })
            }, u.prototype._getHandlers = function() {
                var e = this;
                return {
                    oninput: function(t) {
                        t = t.target.value.trim();
                        e.config.value = t, e.events.fire(c.ItemEvent.input, [t])
                    },
                    onchange: function(t) {
                        t = t.target.value.trim();
                        e.config.value = t, e.events.fire(c.ItemEvent.change, [e.getValue()]), v.isVerify(e.config) && e.validate(), e.paint()
                    },
                    onfocus: function() {
                        "" !== e.config.value && e.clearValidate()
                    },
                    onblur: function() {
                        "" !== e.config.value && (e.validate(!0), e.config.$validationStatus = e._isValid ? c.ValidationStatus.success : c.ValidationStatus.error, e.paint())
                    }
                }
            }, u.prototype._draw = function() {
                var t = this.config,
                    e = t.id,
                    i = t.value,
                    n = t.disabled,
                    o = t.name,
                    r = t.icon,
                    s = t.placeholder,
                    a = t.required,
                    l = t.inputType,
                    c = t.hidden,
                    u = t.autocomplete,
                    d = t.readOnly,
                    h = t.maxlength,
                    f = t.minlength,
                    p = t.max,
                    t = t.min,
                    c = c ? " dhx_form-group--hidden" : "";
                return _.el("div.dhx_form-group", {
                    class: v.getFormItemCss(this.config, v.isVerify(this.config)) + c
                }, [this._drawLabel(), _.el(".dhx_input__wrapper", {}, [_.el("div.dhx_input__container", {}, [this.config.icon ? _.el(".dhx_input__icon", {
                    class: this.config.icon
                }) : null, _.el("input.dhx_input", {
                    type: ["text", "number", "password"].includes(l) ? l : "text",
                    id: e || this._uid,
                    placeholder: s || "",
                    value: g.isDefined(i) ? i : "",
                    name: o || "",
                    disabled: n,
                    required: a,
                    readOnly: d,
                    maxlength: h,
                    minlength: f,
                    max: p,
                    min: t,
                    onblur: this._handlers.onblur,
                    oninput: this._handlers.oninput,
                    onchange: this._handlers.onchange,
                    onfocus: this._handlers.onfocus,
                    class: r ? "dhx_input--icon-padding" : "",
                    autocomplete: u ? "on" : "off",
                    _ref: "input"
                })]), v.getValidationMessage(this.config) && _.el("span.dhx_input__caption", v.getValidationMessage(this.config))])])
            }, u);

        function u(t, e) {
            void 0 === e && (e = {});
            var i = s.call(this, null, e) || this;
            return i.events = new l.EventSystem, i._propsItem = ["inputType", "required", "validation", "icon", "placeholder", "autocomplete", "readOnly", "maxlength", "minlength", "min", "max", "step", "label", "labelWidth", "labelPosition", "hiddenLabel", "helpMessage", "preMessage", "successMessage", "errorMessage"], i._props = r(v.baseProps, i._propsItem), i._isValid = !0, i._initView(e), i._initHandlers(), i
        }
        e.Input = o
    }, function(t, i, e) {
        "use strict";

        function n(t) {
            for (var e in t) i.hasOwnProperty(e) || (i[e] = t[e])
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), n(e(82)), n(e(213)), n(e(9)), n(e(56));
        var o = e(55);
        i.getTreeCell = o.getTreeCell, n(e(54)), n(e(19))
    }, function(t, e, i) {
        "use strict";

        function r(t, e) {
            t[e] && ("string" == typeof t[e] ? t[e] = [{
                text: "" + t[e]
            }] : t[e] = t[e].map(function(t) {
                return "string" == typeof t && (t = {
                    text: t
                }), t
            }))
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.normalizeColumns = function(t) {
            for (var e = 0, i = t; e < i.length; e++) {
                var n = i[e];
                n.$cellCss = n.$cellCss || {}, r(n, "header"), r(n, "footer"), n.header.reduce(function(t, e) {
                    return t || !!e.content
                }, !1) && (n.$uniqueData = []);
                var o = n.minWidth || 100;
                n.width && (o = n.maxWidth && n.minWidth ? n.width >= n.minWidth && n.width <= n.maxWidth ? n.width : n.minWidth : n.maxWidth ? n.width <= n.maxWidth ? n.width : 100 < n.maxWidth ? 100 : n.maxWidth : !n.minWidth || n.width >= n.minWidth ? n.width : n.minWidth), n.$width = n.$width || o, n.$width > n.maxWidth && (n.$width = n.maxWidth), n.$width < n.minWidth && (n.$width = n.minWidth)
            }
        }, e.countColumns = function(t, e) {
            var n = 0,
                o = 0,
                r = 0,
                s = !1,
                i = 0,
                a = !1;
            return e.map(function(t) {
                if (n = Math.max(n, t.header.length), r += t.$width, t.footer && (o = Math.max(o, t.footer.length), a = a || !0), !s)
                    for (var e = 0, i = t.header; e < i.length; e++)
                        if (i[e].colspan) return void(s = !0)
            }), e.map(function(t) {
                if (t.header.length < n)
                    for (var e = 0; e < n; e++) t.header[e] = t.header[e] || {
                        text: ""
                    };
                if (a && (t.footer = t.footer || []), t.footer && t.footer.length < o)
                    for (e = 0; e < o; e++) t.footer[e] = t.footer[e] || {
                        text: ""
                    };
                t.header.map(function(t) {
                    t.css = t.css || "", t.text || t.css.includes("dhx_cell-empty") || (t.css += " dhx_cell-empty")
                }), "" === t.header[0].text && i++
            }), t.$totalWidth = r, t.$headerLevel = n, t.$footerLevel = o, t.$colspans = s, t.$footer = a, i
        }, e.calculatePositions = function(t, e, i, n) {
            for (var o = n.columns.filter(function(t) {
                    return !t.hidden
                }), r = o.map(function(t) {
                    return t.$width
                }), s = Math.max.apply(Math, r), r = Math.min.apply(Math, r), s = Math.round(s / r), a = n.$totalWidth / o.length, r = Math.round(t / a), l = 0, c = i.left, u = 0; u < o.length; u++) {
                if (!(0 < (c -= o[u].$width) + a / 2)) break;
                l++
            }
            return t = 0 <= l - s ? l - s : 0, s = l + r + s, e = Math.round(e / n.rowHeight), n = Math.round(i.top / n.rowHeight) || 0, {
                xStart: t,
                xEnd: s,
                yStart: 0 <= n - 1 ? n - 1 : 0,
                yEnd: n + e + 1
            }
        }, e.getUnique = function(t, e) {
            return t.map(function(t) {
                return t[e]
            }).filter(function(t, e, i) {
                return i.indexOf(t) === e
            }).sort()
        }
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var E = i(1),
            C = i(0),
            S = i(56),
            k = i(19),
            n = i(9),
            h = i(204),
            l = i(2);

        function o(t, e, i, n, o) {
            e = l.locateNodeByClassName(o.target, "dhx_grid-fixed-cols-wrap") ? 0 : e;
            var r, s, a = l.locateNodeByClassName(o.target, "dhx_grid-cell");
            a && n && (r = (s = a.parentNode).parentNode, a = Array.prototype.indexOf.call(s.childNodes, a), a = i.columns.filter(function(t) {
                return !t.hidden
            })[e + a], s = Array.prototype.indexOf.call(r.childNodes, s), s = i.data[t + s], (n.toLocaleLowerCase().includes("touch") ? i._events : i.events).fire(n, [s, a, o]))
        }

        function f(t, e, i, n) {
            var o = n.$editable && n.$editable.row === e.id && n.$editable.col === i.id,
                r = "",
                s = i.align ? " dhx_align-" + i.align : "dhx_align-left";
            n.dragMode && "row" === n.dragItem && (r += (e.$drophere && !o ? " dhx_grid-cell--drophere" : "") + (e.$dragtarget && !o ? " dhx_grid-cell--dragtarget" : "") + (o ? "" : " dhx_grid-cell--drag"));
            var a = n.tooltip && "boolean" != typeof i.tooltip || i.tooltip,
                l = 20 + 20 * e.$level - (e.$items ? 20 : 0);
            return C.el(".dhx_grid-cell", {
                class: "dhx_tree-cell " + (i.$cellCss[e.id] || "") + " " + (e.$items ? "dhx_grid-expand-cell" : "") + " " + (o ? "dhx_tree-editing-cell" : "") + " " + r,
                style: {
                    width: i.$width,
                    lineHeight: n.rowHeight - 1 + "px",
                    padding: e.$items ? 0 : "0 0 0 " + l + "px"
                },
                dhx_col_id: i.id
            }, [e.$items ? C.el(".dhx_grid-expand-cell-icon", {
                class: e.$opened ? "dxi dxi-chevron-up" : "dxi dxi-chevron-down",
                dhx_id: e.id,
                style: {
                    padding: e.$level ? "0 0 0 " + (4 + l) + "px" : "0 0 0 4px"
                }
            }) : null, C.el(".dhx_tree-cell", {
                class: s,
                title: a ? k.removeHTMLTags(e[i.id]) : null,
                style: {
                    width: "100%",
                    height: "100%"
                }
            }, [t])])
        }
        e.getHandlers = function(t, e, i) {
            return {
                onclick: [o, t, e, i, n.GridEvents.cellClick],
                onmouseover: [o, t, e, i, n.GridEvents.cellMouseOver],
                onmousedown: [o, t, e, i, n.GridEvents.cellMouseDown],
                ondblclick: [o, t, e, i, n.GridEvents.cellDblClick],
                oncontextmenu: [o, t, e, i, n.GridEvents.cellRightClick],
                ontouchstart: [o, t, e, i, n.GridEvents.cellMouseDown],
                ontouchmove: [o, t, e, i, n.GridSystemEvents.cellTouchMove],
                ontouchend: [o, t, e, i, n.GridSystemEvents.cellTouchEnd]
            }
        }, e.getTreeCell = f, e.getCells = function(d) {
            if (!d.data || !d.columns) return [];
            var t = d.$positions,
                i = d.data ? d.data.slice(t.yStart, t.yEnd) : [],
                n = d.columns.filter(function(t) {
                    return !t.hidden
                }).slice(t.xStart, t.xEnd);
            return i.map(function(u, t) {
                var e = i.length - 1 === t,
                    t = "";
                return d.rowCss && (t = d.rowCss(u)), u.$css && (t += u.$css), C.el(".dhx_grid-row", {
                    style: {
                        height: e ? d.rowHeight + 1 : d.rowHeight
                    },
                    dhx_id: u.id,
                    class: t,
                    _key: u.id,
                    _flags: C.KEYED_LIST
                }, u.$customRender ? [u.$customRender(u, d)] : n.map(function(t) {
                    if (!t.hidden) {
                        var e = d.tooltip && "boolean" != typeof t.tooltip || t.tooltip,
                            i = t.template ? t.template(u[t.id], u, t) : "boolean" != typeof(c = u[t.id]) && "boolean" !== t.type || "string" == typeof c ? c || 0 === c ? c : "" : "" + Boolean(c);
                        "string" == typeof i && (i = C.el("div.dhx_cell-content", d.htmlEnable && !1 !== t.htmlEnable || t.htmlEnable ? {
                            ".innerHTML": i
                        } : i));
                        var n = ((t.$cellCss && t.$cellCss[u.id] || "") + " dhx_" + t.type + "-cell").replace(/\s+/g, " "),
                            o = t.$width,
                            r = d.$editable && d.$editable.row === u.id && d.$editable.col === t.id;
                        if ((r || "boolean" === t.type && (d.editable || t.editable)) && (d.leftSplit && d.columns.length !== d.leftSplit && d.columns.indexOf(t) < d.leftSplit || (s = u, a = t, l = d, i = h.getEditor(s, a, l).toHTML(), n += " dhx_grid-cell__editable", d.leftSplit === d.columns.indexOf(t) + 1 && --o)), "tree" === d.type && d.firstColId === t.id) return f(i, u, t, d);
                        l = void 0;
                        return "boolean" === t.type && (l = E.findIndex(t.header, function(t) {
                            return void 0 !== t.text
                        })), d.dragMode && "row" === d.dragItem && (n += (u.$drophere && !r ? " dhx_grid-cell--drophere" : "") + (u.$dragtarget && !r ? " dhx_grid-cell--dragtarget" : "") + (r ? "" : " dhx_grid-cell--drag")), t.align && (n += " dhx_align-" + t.align), C.el(".dhx_grid-cell", {
                            class: n,
                            style: {
                                width: o,
                                lineHeight: d.rowHeight - 1 + "px"
                            },
                            _key: t.id,
                            title: e ? "boolean" === t.type ? l.text : k.removeHTMLTags("string" == typeof i ? i : u[t.id]) : null,
                            dhx_col_id: t.id
                        }, [i])
                    }
                    var s, a, l, c
                }))
            })
        }, e.getSpans = function(v, m) {
            var y = [],
                b = v.columns.filter(function(t) {
                    return !t.hidden
                });
            if (!b.length) return null;
            if (!v.spans) return null;
            for (var w = v.spans.sort(function(t, e) {
                    return "string" == typeof t.row && "string" == typeof e.row ? t.row.localeCompare(e.row) : t.row - e.row
                }), x = v.rowHeight, t = 0; t < w.length; t++) ! function(t) {
                var e = w[t].row,
                    i = w[t].column,
                    n = w[t].rowspan,
                    o = w[t].colspan,
                    r = w[t].css,
                    s = v.tooltip && "boolean" != typeof w[t].tooltip || w[t].tooltip;
                if (1 === n) return;
                var a = E.findIndex(b, function(t) {
                        return "" + t.id == "" + i
                    }),
                    l = E.findIndex(v.data, function(t) {
                        return "" + t.id == "" + e
                    });
                if (a < 0 || l < 0) return;
                if (!0 === m && ((o || 1) + a > v.leftSplit || a + 1 > v.leftSplit)) return;
                var c = b[a],
                    u = v.data[l];
                if (c.hidden) return;
                var d = w[t].text || (void 0 === u[i] ? "" : u[i]),
                    h = d;
                d = "string" == typeof(d = (c.template || function(t, e, i) {
                    return t || 0 === t ? t : ""
                })(d, u, c)) ? C.el("div.dhx_span-cell-content", {
                    ".innerHTML": d
                }) : d;
                for (var f = v.rowHeight * l - 1, p = 0, _ = a - 1; 0 <= _; _--) p += b[_].$width;
                var g = a === b.length - 1,
                    t = a + o === b.length,
                    u = c.header[0].text ? "dhx_span-cell" : "dhx_span-cell dhx_span-cell--title";
                u += r ? " " + r : "", u += 0 === l ? " dhx_span-first-row" : "", u += 0 === a ? " dhx_span-first-col" : "", u += g || t ? " dhx_span-last-col" : "", u += o ? " dhx_span-string-cell" : " dhx_span-" + (c.type || "string") + "-cell", u += c.align ? " dhx_align-" + c.align : " dhx_align-left";
                c = 1 < o ? S.getWidth(v.columns, o, a) : c.$width;
                y.push(C.el("div", {
                    class: u,
                    style: {
                        width: c,
                        height: (n || 1) * x,
                        top: f,
                        left: p,
                        lineHeight: v.rowHeight + "px"
                    },
                    title: s ? k.removeHTMLTags(h) : null
                }, [d]))
            }(t);
            return y
        }, e.getShifts = function(t) {
            var e = t.columns.filter(function(t) {
                return !t.hidden
            }).slice(0, t.$positions.xStart);
            return {
                x: k.getTotalWidth(e),
                y: t.$positions.yStart * t.rowHeight
            }
        }
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.getWidth = function(t, n, o) {
            return t = t.filter(function(t) {
                return !t.hidden
            }), n ? t.reduce(function(t, e, i) {
                return t += o <= i && i < o + n ? e.$width : 0
            }, 0) : t[o].$width
        }
    }, function(t, e, i) {
        "use strict";

        function n(t) {
            var e = document.activeElement;
            e.classList.contains("dhx_alert__confirm-reject") || e.classList.contains("dhx_alert__confirm-aply") || t.preventDefault()
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.blockScreen = function(t) {
            var e = document.createElement("div");
            return e.className = "dhx_alert__overlay " + (t || ""), document.body.appendChild(e), document.addEventListener("keydown", n),
                function() {
                    document.body.removeChild(e), document.removeEventListener("keydown", n)
                }
        }
    }, function(t, e, i) {
        "use strict";
        var n = this && this.__assign || function() {
            return (n = Object.assign || function(t) {
                for (var e, i = 1, n = arguments.length; i < n; i++)
                    for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t
            }).apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = i(2),
            c = i(30),
            u = 750,
            d = 200;

        function a(t, e, i, n) {
            var o, r, s;
            switch (e) {
                case c.Position.center:
                    return (r = t.left + window.pageXOffset + (t.width - i) / 2) + 8 < window.pageXOffset && (r = t.left + window.pageXOffset), {
                        left: r,
                        top: s = t.top + window.pageYOffset + (t.height - n) / 2,
                        pos: o = c.RealPosition.center
                    };
                case c.Position.right:
                    return o = c.RealPosition.right, (r = t.right + window.pageXOffset) + i + 8 > window.innerWidth + window.pageXOffset && (r = window.pageXOffset + t.left - i, o = c.RealPosition.left), {
                        left: r,
                        top: s = window.pageYOffset + t.top + (t.height - n) / 2,
                        pos: o
                    };
                case c.Position.bottom:
                default:
                    return (r = window.pageXOffset + t.left + (t.width - i) / 2) + i > window.innerWidth + window.pageXOffset ? r = window.innerWidth + window.pageXOffset - i : r < 0 && (r = 0), o = c.RealPosition.bottom, (s = window.pageYOffset + t.bottom) + n + 8 > window.innerHeight + window.pageYOffset && (s = window.pageYOffset + t.top - n, o = c.RealPosition.top), {
                        left: r,
                        top: s,
                        pos: o
                    }
            }
        }
        e.findPosition = a;
        var h = document.createElement("div"),
            l = document.createElement("span");
        l.className = "dhx_tooltip__text", h.appendChild(l), h.style.position = "absolute";
        var f, p = null,
            _ = !1,
            g = null,
            v = null;

        function m(t, e, i, n, o) {
            void 0 === o && (o = !1);
            t = t.getBoundingClientRect();
            l.textContent = e, document.body.appendChild(h), h.className = "dhx_widget dhx_tooltip" + (o ? " dhx_tooltip--forced" : "");
            var e = h.getBoundingClientRect(),
                e = a(t, i, e.width, e.height),
                r = e.left,
                s = e.top,
                e = e.pos;
            switch (e) {
                case c.RealPosition.bottom:
                case c.RealPosition.top:
                case c.RealPosition.left:
                case c.RealPosition.right:
                case c.RealPosition.center:
                    h.style.left = r + "px", h.style.top = s + "px"
            }
            h.className += " dhx_tooltip--" + e + " " + (n || ""), _ = !0, o || setTimeout(function() {
                h.className += " dhx_tooltip--animate"
            })
        }

        function r(e, t, i) {
            var n = i.force,
                o = i.showDelay,
                r = i.hideDelay,
                s = i.position,
                a = i.css;
            n || (v = setTimeout(function() {
                m(e, t, s || c.Position.bottom, a)
            }, o || u));
            var l = function() {
                var t;
                _ && (t = r, p && (g = setTimeout(function() {
                    document.body.removeChild(h), _ = !1, g = null
                }, t || d))), clearTimeout(v), e.removeEventListener("mouseleave", l), e.removeEventListener("blur", l), document.removeEventListener("mousedown", l), f = p = null
            };
            n && m(e, t, s, a, n), e.addEventListener("mouseleave", l), e.addEventListener("blur", l), document.addEventListener("mousedown", l), f = l
        }

        function s(t, e) {
            var i = o.toNode(e.node);
            i !== p && (f && (f(), f = null), p = i, g ? (clearTimeout(g), g = null, r(i, t, n(n({}, e), {
                force: !0
            }))) : r(i, t, e))
        }

        function y(t) {
            t = o.locateNode(t, "dhx_tooltip_text");
            t && s(t.getAttribute("dhx_tooltip_text"), {
                position: t.getAttribute("dhx_tooltip_position") || c.Position.bottom,
                node: t
            })
        }
        e.tooltip = s, e.enableTooltip = function() {
            document.addEventListener("mousemove", y)
        }, e.disableTooltip = function() {
            document.removeEventListener("mousemove", y)
        }
    }, function(t, e, i) {}, function(t, i, e) {
        "use strict";

        function n(t) {
            for (var e in t) i.hasOwnProperty(e) || (i[e] = t[e])
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), n(e(61)), n(e(118)), n(e(25))
    }, function(t, i, a) {
        "use strict";
        (function(r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var n = a(1),
                o = a(2),
                s = a(5),
                c = a(25),
                t = (e.prototype.selectFile = function() {
                    this._fileInput.click()
                }, e.prototype.linkDropArea = function(t) {
                    function e(t) {
                        return t.preventDefault()
                    }
                    var i = this,
                        n = o.toNode(t),
                        t = function(t) {
                            t.preventDefault(), i.parseFiles(t.dataTransfer)
                        };
                    n.addEventListener("dragover", e), n.addEventListener("drop", t), this._dropAreas.set(n, {
                        dragover: e,
                        drop: t
                    })
                }, e.prototype.unlinkDropArea = function(t) {
                    var i = this;
                    t ? (t = o.toNode(t), this._unlinkDropArea(t), this._dropAreas.delete(t)) : (this._dropAreas.forEach(function(t, e) {
                        i._unlinkDropArea(e)
                    }), this._dropAreas.clear())
                }, e.prototype.parseFiles = function(t) {
                    if (t.items && t.items[0] && t.items[0].webkitGetAsEntry) this._parseAsWebkitEntry(t.items);
                    else {
                        for (var e = t.files, i = 0; i < e.length; i++) this._addFile(e[i]);
                        this.config.autosend && this.send()
                    }
                }, e.prototype.send = function(t) {
                    var e = this;
                    if (!this._uploadInfo || !this.isActive) {
                        var i = this.data.findAll(function(t) {
                            return t.status === c.FileStatus.queue || t.status === c.FileStatus.failed
                        }).filter(function(t) {
                            return e.events.fire(c.UploaderEvents.beforeUploadFile, [t])
                        });
                        if (i.length)
                            if (this.isActive = !0, this._uploadInfo = {
                                    files: i,
                                    count: i.length,
                                    size: i.reduce(function(t, e) {
                                        return t + e.file.size
                                    }, 0)
                                }, this.events.fire(c.UploaderEvents.uploadBegin, [i]), this.events.fire(c.UploaderEvents.uploadProgress, [0, 0, this._uploadInfo.size]), this.config.singleRequest) this._xhrSend(i, t);
                            else
                                for (var n = 0, o = i; n < o.length; n++) {
                                    var r = o[n];
                                    this._xhrSend([r], t)
                                }
                    }
                }, e.prototype.abort = function(t) {
                    if (t) {
                        t = this.data.getItem(t);
                        t && t.request && 4 !== t.request.readyState && t.request.abort()
                    } else if (this._uploadInfo && this._uploadInfo.files)
                        for (var e = 0, i = this._uploadInfo.files; e < i.length; e++) {
                            var n = i[e];
                            this.abort(n.id)
                        }
                }, e.prototype._unlinkDropArea = function(t) {
                    var e, i = this._dropAreas.get(t);
                    i && (e = i.dragover, i = i.drop, t.removeEventListener("dragover", e), t.removeEventListener("drop", i))
                }, e.prototype._initEvents = function() {
                    var i = this;
                    this._fileInput.addEventListener("change", function() {
                        for (var t = i._fileInput.files, e = 0; e < t.length; e++) i._addFile(t[e]);
                        i.config.autosend && i.send(), i._fileInput.value = null
                    })
                }, e.prototype._xhrSend = function(a, t) {
                    for (var l = this, t = this._createFormData(a, t), r = new XMLHttpRequest, e = 0, i = a; e < i.length; e++) {
                        var n = i[e];
                        this.data.update(n.id, {
                            request: r,
                            status: c.FileStatus.inprogress,
                            progress: 0
                        })
                    }
                    r.open("POST", this.config.target), r.upload.onprogress = function(t) {
                        for (var e = 0, i = a; e < i.length; e++) {
                            var n = i[e];
                            l.data.update(n.id, {
                                progress: t.loaded / t.total,
                                status: c.FileStatus.inprogress
                            })
                        }
                        var o = l._uploadInfo.files.reduce(function(t, e) {
                                return t + e.size * e.progress
                            }, 0) || 0,
                            r = l._uploadInfo.size,
                            s = o / l._uploadInfo.size * 100 || 0;
                        l.events.fire(c.UploaderEvents.uploadProgress, [s, o, r])
                    }, r.onloadend = function() {
                        l._uploadInfo.count = l.config.singleRequest ? 0 : l._uploadInfo.count - 1;
                        for (var t = 200 === r.status ? c.FileStatus.uploaded : c.FileStatus.failed, e = 200 === r.status && r.response ? JSON.parse(r.response) : null, i = 0, n = a; i < n.length; i++) {
                            var o = n[i];
                            l.data.update(o.id, {
                                status: t
                            }), t === c.FileStatus.uploaded ? (l.config.updateFromResponse && e && (l.config.singleRequest && e[o.id] ? l.data.update(o.id, e[o.id]) : l.config.singleRequest || l.data.update(o.id, e)), l.events.fire(c.UploaderEvents.uploadFile, [o, e])) : l.events.fire(c.UploaderEvents.uploadFail, [o])
                        }
                        0 === l._uploadInfo.count && (l.isActive = !1, l.events.fire(c.UploaderEvents.uploadComplete, [l._uploadInfo.files]))
                    }, r.send(t)
                }, e.prototype._parseAsWebkitEntry = function(t) {
                    for (var e = this, i = [], n = 0; n < t.length; n++) {
                        var o = t[n].webkitGetAsEntry();
                        i.push(this._traverseFileTree(o))
                    }
                    r.all(i).then(function() {
                        e.config.autosend && e.send()
                    })
                }, e.prototype._createFormData = function(t, e) {
                    var i = this.config.fieldName,
                        n = new FormData,
                        o = this.config.params;
                    if (e)
                        for (var r in e) n.append(r, e[r]);
                    if (o)
                        for (var r in o) n.append(r, o[r]);
                    for (var s = 1 < t.length ? "[]" : "", a = 0, l = t; a < l.length; a++) {
                        var c = l[a];
                        n.append(i + s, c.file, c.file.name), n.append(i + "_fullname" + s, c.path + c.file.name), n.append(i + "_id" + s, c.id)
                    }
                    return n
                }, e.prototype._addFile = function(t, e) {
                    void 0 === e && (e = "");
                    e = {
                        id: n.uid(),
                        file: t,
                        progress: 0,
                        status: c.FileStatus.queue,
                        src: null,
                        path: e
                    };
                    this.data.add(e)
                }, e.prototype._traverseFileTree = function(t) {
                    var n = this;
                    return new r(function(r) {
                        var s = 0,
                            a = function(t, e) {
                                var i, o;
                                t.isFile ? (s++, t.file(function(t) {
                                    s--, n._addFile(t, e), 0 === s && r()
                                })) : t.isDirectory && (i = t.createReader(), i = i, o = e + t.name + "/", s++, i.readEntries(function(t) {
                                    s--;
                                    for (var e = 0, i = t; e < i.length; e++) {
                                        var n = i[e];
                                        a(n, o)
                                    }
                                    0 === s && r()
                                }))
                            };
                        a(t, "")
                    })
                }, e);

            function e(t, e, i) {
                void 0 === t && (t = {}), this.config = n.extend({
                    autosend: !0,
                    updateFromResponse: !0,
                    fieldName: "file"
                }, t), this.data = e || new s.DataCollection, this.events = i || this.data.events, this.isActive = !1, this._fileInput = document.createElement("input"), this._fileInput.type = "file", this._fileInput.multiple = !0, this._initEvents(), this._dropAreas = new Map
            }
            i.Uploader = t
        }).call(this, a(13))
    }, function(t, e, i) {
        "use strict";
        var a = this && this.__assign || function() {
            return (a = Object.assign || function(t) {
                for (var e, i = 1, n = arguments.length; i < n; i++)
                    for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t
            }).apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = i(3),
            r = i(109),
            s = i(112),
            n = i(20),
            l = i(17),
            c = i(16),
            p = i(1),
            i = (u.prototype._reset = function() {
                this._order = [], this._pull = {}, this._changes = {
                    order: []
                }, this._initOrder = null, this._meta = new WeakMap, this._loaded = !1
            }, u.prototype.add = function(t, i) {
                var n = this;
                if (this.events.fire(c.DataEvents.beforeAdd, [t])) {
                    t = Array.isArray(t) ? t.map(function(t, e) {
                        return 0 !== e && (i += 1), n._add(t, i)
                    }) : this._add(t, i);
                    return this._applySmart(), t
                }
            }, u.prototype.remove = function(t) {
                var e = this;
                t && (t instanceof Array ? t.map(function(t) {
                    e._remove(t)
                }) : this._remove(t))
            }, u.prototype.removeAll = function() {
                this._reset(), this.events.fire(c.DataEvents.removeAll), this.events.fire(c.DataEvents.change)
            }, u.prototype.exists = function(t) {
                return !!this._pull[t]
            }, u.prototype.getNearId = function(t) {
                if (!this._pull[t]) return this._order[0].id || ""
            }, u.prototype.getItem = function(t) {
                return this._pull[t]
            }, u.prototype.update = function(t, e, i) {
                var n = this.getItem(t);
                n ? l.isEqualObj(e, n) || (e.id && t !== e.id ? (l.dhxWarning("this method doesn't allow change id"), l.isDebug()) : (e.parent && n.parent && e.parent !== n.parent && this.move(t, -1, this, e.parent), p.extend(this._pull[t], e, !1), this.config.update && this.config.update(this._pull[t]), i || this._onChange("update", t, this._pull[t])), this._applySmart()) : l.dhxWarning("item not found")
            }, u.prototype.getIndex = function(e) {
                if (!e) return -1;
                var t = p.findIndex(this._order, function(t) {
                    return t && t.id.toString() === e.toString()
                });
                return this._pull[e] && 0 <= t ? t : void 0
            }, u.prototype.getId = function(t) {
                if (this._order[t]) return this._order[t].id
            }, u.prototype.getLength = function() {
                return this._order.length
            }, u.prototype.isDataLoaded = function(t, e) {
                return void 0 === t && (t = 0), void 0 === e && (e = this._order.length), p.isNumeric(t) && p.isNumeric(e) ? 0 === this._order.slice(t, e).filter(function(t) {
                    return t && t.$empty
                }).length : (this._loaded || (this._loaded = !this.find(function(t) {
                    return t.$empty
                })), !!this._loaded)
            }, u.prototype.filter = function(t, e) {
                var i;
                this.isDataLoaded() ? (e && e.add || (this._order = this._initOrder || this._order, this._initOrder = null), !t || "function" == typeof t || void 0 !== (i = t).by && void 0 !== i.match && (t = i.compare ? function(t) {
                    return i.compare(t[i.by], i.match, t)
                } : function(t) {
                    return t[i.by] == i.match
                }), this._filter = e && e.smartFilter ? t : null, this._applyFilters(t), this.events.fire(c.DataEvents.change)) : l.dhxWarning("the method doesn't work with lazyLoad")
            }, u.prototype.find = function(t) {
                for (var e in this._pull) {
                    var i = l.findByConf(this._pull[e], t);
                    if (i) return i
                }
                return null
            }, u.prototype.findAll = function(t) {
                var e, i = [];
                for (e in this._pull) {
                    var n = l.findByConf(this._pull[e], t);
                    n && i.push(n)
                }
                return i
            }, u.prototype.sort = function(t, e) {
                this.isDataLoaded() ? (e && e.smartSorting && (this._sorter = t), t && this._applySorters(t), this.events.fire(c.DataEvents.change)) : l.dhxWarning("the method doesn't work with lazyLoad")
            }, u.prototype.copy = function(t, i, n, o) {
                var r = this;
                return t instanceof Array ? t.map(function(t, e) {
                    return r._copy(t, i, n, o, e)
                }) : this._copy(t, i, n, o)
            }, u.prototype.move = function(t, i, n, o) {
                var r = this;
                return t instanceof Array ? t.map(function(t, e) {
                    return r._move(t, i, n, o, e)
                }) : this._move(t, i, n, o)
            }, u.prototype.forEach = function(t) {
                for (var e = 0; e < this._order.length; e++) t.call(this, this._order[e], e, this._order)
            }, u.prototype.load = function(t, e) {
                return "string" == typeof t && (this.dataProxy = t = new n.DataProxy(t)), this.dataProxy = t, this._loader.load(t, e)
            }, u.prototype.parse = function(t, e) {
                return this._reset(), this._loader.parse(t, e)
            }, u.prototype.$parse = function(t) {
                var e = this.config.approximate;
                e && (t = this._approximate(t, e.value, e.maxNum)), this._parse_data(t), this._applySmart(), this.events.fire(c.DataEvents.change, ["load"]), this.events.fire(c.DataEvents.load)
            }, u.prototype.save = function(t) {
                "string" == typeof t && (t = new n.DataProxy(t)), this._loader.save(t)
            }, u.prototype.changeId = function(t, e, i) {
                var n;
                void 0 === e && (e = p.uid()), i || this.isDataLoaded() ? (n = this.getItem(t)) ? (n.id = e, p.extend(this._pull[t], n), this._pull[e] = this._pull[t], i || this._onChange("update", e, this._pull[e]), delete this._pull[t]) : l.dhxWarning("item not found") : l.dhxWarning("the method doesn't work with lazyLoad")
            }, u.prototype.isSaved = function() {
                return !this._changes.order.length
            }, u.prototype.map = function(t) {
                for (var e = [], i = 0; i < this._order.length; i++) e.push(t.call(this, this._order[i], i, this._order));
                return e
            }, u.prototype.mapRange = function(t, e, i) {
                t < 0 && (t = 0), e > this._order.length - 1 && (e = this._order.length - 1);
                for (var n = this._order.slice(t, e), o = [], r = t; r <= e; r++) o.push(i.call(this, this._order[r], r, n));
                return o
            }, u.prototype.reduce = function(t, e) {
                for (var i = 0; i < this._order.length; i++) e = t.call(this, e, this._order[i], i);
                return e
            }, u.prototype.serialize = function(t) {
                void 0 === t && (t = c.DataDriver.json);
                var e = this.map(function(t) {
                        var e = a({}, t);
                        return Object.keys(e).forEach(function(t) {
                            t.startsWith("$") && delete e[t]
                        }), e
                    }),
                    t = l.toDataDriver(t);
                if (t) return t.serialize(e)
            }, u.prototype.getInitialData = function() {
                return this._initOrder
            }, u.prototype.setMeta = function(t, e, i) {
                var n;
                t && ((n = this._meta.get(t)) || (n = {}, this._meta.set(t, n)), n[e] = i)
            }, u.prototype.getMeta = function(t, e) {
                t = this._meta.get(t);
                return t ? t[e] : null
            }, u.prototype.getMetaMap = function(t) {
                return this._meta.get(t)
            }, u.prototype.setRange = function(t, e) {
                this._range = e ? [t, e] : null
            }, u.prototype.getRawData = function(t, e, i, n) {
                if (i = i || this._order, 1 === n) return i;
                var o;
                if (this._range && (t = this._range[0] + t, e = -1 === e || t + (o = e - t) > this._range[1] ? this._range[1] : t + o), !e || 0 === t && (-1 === e || e === i.length)) return i;
                if (t >= i.length) return [];
                (-1 === e || e > i.length) && (e = i.length);
                i = i.slice(t, e);
                return 0 !== i.filter(function(t) {
                    return t.$empty
                }).length && this.events.fire("dataRequest", [t, e]), i
            }, u.prototype._add = function(t, e) {
                if (this.isDataLoaded()) {
                    e = this._addCore(t, e);
                    return this._onChange("add", t.id, t), this.events.fire(c.DataEvents.afterAdd, [t]), e
                }
                l.dhxWarning("the method doesn't work with lazyLoad")
            }, u.prototype._remove = function(t) {
                if (this.isDataLoaded()) {
                    var e = this._pull[t];
                    if (e) {
                        if (!this.events.fire(c.DataEvents.beforeRemove, [e])) return;
                        this._removeCore(e.id), this._onChange("remove", t, e)
                    }
                    this.events.fire(c.DataEvents.afterRemove, [e])
                } else l.dhxWarning("the method doesn't work with lazyLoad")
            }, u.prototype._copy = function(t, e, i, n, o) {
                if (this.isDataLoaded()) {
                    if (!this.exists(t)) return null;
                    var r = p.uid();
                    return (o && (e = -1 === e ? -1 : e + o), i) ? i instanceof u || !n ? i.exists(t) ? (i.add(a(a({}, l.copyWithoutInner(this.getItem(t))), {
                        id: r
                    }), e), r) : (i.add(l.copyWithoutInner(this.getItem(t)), e), t) : void i.add(l.copyWithoutInner(this.getItem(t)), e) : (this.add(a(a({}, l.copyWithoutInner(this.getItem(t))), {
                        id: r
                    }), e), r)
                }
                l.dhxWarning("the method doesn't work with lazyLoad")
            }, u.prototype._move = function(t, e, i, n, o) {
                if (this.isDataLoaded()) {
                    if (o && (e = -1 === e ? -1 : e + o), i && i !== this && this.exists(t)) {
                        var r = p.copy(this.getItem(t), !0);
                        return i.exists(t) && (r.id = p.uid()), n && (r.parent = n), i.add(r, e), this.remove(t), r.id
                    }
                    if (this.getIndex(t) === e) return null;
                    r = this._order.splice(this.getIndex(t), 1)[0];
                    return -1 === e && (e = this._order.length), this._order.splice(e, 0, r), this.events.fire(c.DataEvents.change, [t, "update", this.getItem(t)]), t
                }
                l.dhxWarning("the method doesn't work with lazyLoad")
            }, u.prototype._addCore = function(t, e) {
                return this.config.init && (t = this.config.init(t)), t.id = t.id ? t.id.toString() : p.uid(), this._pull[t.id] && l.dhxError("Item already exist"), this._initOrder && this._initOrder.length && this._addToOrder(this._initOrder, t, e), this._addToOrder(this._order, t, e), t.id
            }, u.prototype._removeCore = function(e) {
                0 <= this.getIndex(e) && (this._order = this._order.filter(function(t) {
                    return t.id !== e
                }), delete this._pull[e]), this._initOrder && this._initOrder.length && (this._initOrder = this._initOrder.filter(function(t) {
                    return t.id !== e
                }), delete this._pull[e])
            }, u.prototype._parse_data = function(t) {
                var e = this._order.length;
                this.config.prep && (t = this.config.prep(t));
                for (var i = 0, n = t; i < n.length; i++) {
                    var o = n[i];
                    this.config.init && (o = this.config.init(o)), o.id = o.id || 0 === o.id ? o.id : p.uid(), this._pull[o.id] = o, this._order[e++] = o
                }
            }, u.prototype._approximate = function(t, e, i) {
                for (var n = t.length, o = e.length, r = Math.floor(n / i), s = Array(Math.ceil(n / r)), a = 0, l = 0; l < n; l += r) {
                    for (var c = p.copy(t[l]), u = Math.min(n, l + r), d = 0; d < o; d++) {
                        for (var h = 0, f = l; f < u; f++) h += t[f][e[d]];
                        c[e[d]] = h / (u - l)
                    }
                    s[a++] = c
                }
                return s
            }, u.prototype._onChange = function(t, e, i) {
                for (var n = 0, o = this._changes.order; n < o.length; n++)
                    if ((s = o[n]).id === e && !s.saving) {
                        s.error && (s.error = !1);
                        var r = this._changes.order.indexOf(s),
                            s = a(a({}, s), {
                                obj: i,
                                status: t
                            });
                        return this._changes.order.splice(r, 1, s), this._loader.updateChanges(this._changes), void this.events.fire(c.DataEvents.change, [e, t, i])
                    } this._changes.order.push({
                    id: e,
                    status: t,
                    obj: a({}, i),
                    saving: !1
                }), this._loader.updateChanges(this._changes), this.events.fire(c.DataEvents.change, [e, t, i])
            }, u.prototype._addToOrder = function(t, e, i) {
                0 <= i && t[i] ? (this._pull[e.id] = e, t.splice(i, 0, e)) : (this._pull[e.id] = e, t.push(e))
            }, u.prototype._applySmart = function() {
                this._filter && this._applyFilters(), this._sorter && this._applySorters()
            }, u.prototype._applySorters = function(t) {
                this._sort.sort(this._order, t, this._sorter), this._initOrder && this._initOrder.length && this._sort.sort(this._initOrder, t, this._sorter)
            }, u.prototype._applyFilters = function(e) {
                var t, i = this._filter;
                e === i && (e = null), (e || i) && (t = this._order.filter(function(t) {
                    return (!e || e(t)) && (!i || i(t))
                }), this._initOrder || (this._initOrder = this._order), this._order = t)
            }, u);

        function u(t, e) {
            var n = this;
            this._changes = {
                order: []
            }, this.config = t || {}, this._sort = new s.Sort, this._loader = new r.Loader(this, this._changes), this.events = e || new o.EventSystem(this), this.events.on("dataRequest", function(t, e) {
                var i = n.dataProxy;
                i && i.updateUrl && (i.updateUrl(null, {
                    from: t,
                    limit: i.config.limit || e - t
                }), n.load(i))
            }), this.events.on(c.DataEvents.loadError, function(t) {
                "string" != typeof t ? l.dhxError(t) : l.dhxWarning(t)
            }), this._reset()
        }
        e.DataCollection = i
    }, function(t, e, i) {
        "use strict";
        var n = this && this.__assign || function() {
            return (n = Object.assign || function(t) {
                for (var e, i = 1, n = arguments.length; i < n; i++)
                    for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t
            }).apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = i(64),
            r = i(65),
            i = i(110);
        e.dataDrivers = {
            json: o.JsonDriver,
            csv: r.CsvDriver
        }, e.dataDriversPro = n(n({}, e.dataDrivers), {
            xml: i.XMLDriver
        })
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = (o.prototype.toJsonArray = function(t) {
            return this.getRows(t)
        }, o.prototype.serialize = function(t) {
            return t
        }, o.prototype.getFields = function(t) {
            return t
        }, o.prototype.getRows = function(t) {
            return "string" == typeof t ? JSON.parse(t) : t
        }, o);

        function o() {}
        e.JsonDriver = n
    }, function(t, e, i) {
        "use strict";
        var n = this && this.__assign || function() {
            return (n = Object.assign || function(t) {
                for (var e, i = 1, n = arguments.length; i < n; i++)
                    for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t
            }).apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = (r.prototype.getFields = function(t, e) {
            for (var i = t.trim().split(this.config.columnDelimiter), n = {}, o = 0; o < i.length; o++) n[e ? e[o] : o + 1] = isNaN(Number(i[o])) ? i[o] : parseFloat(i[o]);
            return n
        }, r.prototype.getRows = function(t) {
            return t.trim().split(this.config.rowDelimiter)
        }, r.prototype.toJsonArray = function(t) {
            var e = this,
                i = this.getRows(t),
                n = this.config.names;
            return this.config.skipHeader && (t = i.splice(0, this.config.skipHeader), this.config.nameByHeader && (n = t[0].trim().split(this.config.columnDelimiter))), i.map(function(t) {
                return e.getFields(t, n)
            })
        }, r.prototype.serialize = function(t, e) {
            var i = t[0] ? Object.keys(t[0]).filter(function(t) {
                    return !t.startsWith("$")
                }).join(this.config.columnDelimiter) : "",
                t = this._serialize(t);
            return e ? t : i + t
        }, r.prototype._serialize = function(t) {
            var o = this;
            return t.reduce(function(t, n) {
                var e = Object.keys(n).reduce(function(t, e, i) {
                    return e.startsWith("$") || "items" === e ? t : "" + t + n[e] + (i === n.length - 1 ? "" : o.config.columnDelimiter)
                }, "");
                return n.items ? t + (t ? "\n" : "") + e + o._serialize(n.items) : "" + t + (t ? o.config.rowDelimiter : "") + e
            }, "")
        }, r);

        function r(t) {
            this.config = n(n({}, {
                skipHeader: 0,
                nameByHeader: !1,
                rowDelimiter: "\n",
                columnDelimiter: ","
            }), t), this.config.nameByHeader && (this.config.skipHeader = 1)
        }
        e.CsvDriver = o
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(21),
            o = i(5),
            i = (r.prototype.enable = function() {
                this.config.disabled = !1
            }, r.prototype.disable = function() {
                this.remove(), this.config.disabled = !0
            }, r.prototype.getId = function() {
                return this.config.multiselection ? this._selected : this._selected[0]
            }, r.prototype.getItem = function() {
                var e = this;
                return this.config.multiselection ? this._selected.map(function(t) {
                    return e._data.getItem(t)
                }) : this._selected.length ? this._data.getItem(this._selected[0]) : null
            }, r.prototype.contains = function(t) {
                return t ? this._selected.includes(t) : 0 < this._selected.length
            }, r.prototype.remove = function(t) {
                var e = this;
                t ? this._unselectItem(t) : (this._selected.forEach(function(t) {
                    return e._unselectItem(t)
                }), this._selected = [])
            }, r.prototype.add = function(t, e, i, n) {
                var o, r = this;
                this.config.disabled || (void 0 !== t ? (o = this.config.multiselection, i && this._selected.length && o ? this._addMulti(t, n) : this._addSingle(t, o && ("ctrlClick" !== o || e), n)) : this._data.serialize().filter(function(t) {
                    t = t.id;
                    return !r._selected.includes(t)
                }).forEach(function(t) {
                    t = t.id;
                    r._addMulti(t, n)
                }))
            }, r.prototype.destructor = function() {
                var e = this;
                this._selected.forEach(function(t) {
                    return e._unselectItem(t, !0)
                })
            }, r.prototype._addMulti = function(t, e) {
                var i = this._selected[this._selected.length - 1],
                    n = this._data.getIndex(i),
                    o = this._data.getIndex(t);
                for (o < n && (n = (t = [o, n])[0], o = t[1]); n <= o; n++) {
                    var r = this._data.getId(n);
                    this._selectItem(r, e)
                }
            }, r.prototype._addSingle = function(e, t, i) {
                var n = this;
                t || this._selected.forEach(function(t) {
                    t != e && n._unselectItem(t)
                }), t && this._selected.includes(e) ? this._unselectItem(e, i) : this._selectItem(e, i)
            }, r.prototype._selectItem = function(t, e) {
                var i = this._data.getItem(t);
                i && !this._data.getMeta(i, "selected") && (e || this.events.fire(n.SelectionEvents.beforeSelect, [t])) && (this._selected.push(t), this._data.setMeta(i, "selected", !0), e || this.events.fire(n.SelectionEvents.afterSelect, [t]))
            }, r.prototype._unselectItem = function(e, t) {
                (t || this.events.fire(n.SelectionEvents.beforeUnSelect, [e])) && (this._selected = this._selected.filter(function(t) {
                    return t !== e
                }), this._data.setMeta(this._data.getItem(e), "selected", !1), t || this.events.fire(n.SelectionEvents.afterUnSelect, [e]))
            }, r);

        function r(t, e, i) {
            var n = this;
            this.config = t, this.events = i, this._data = e, this._selected = [], this._data.events.on(o.DataEvents.removeAll, function() {
                n._selected = []
            }), "string" == typeof this.config.multiselection && (["click", "ctrlClick"].includes(this.config.multiselection) || (this.config.multiselection = !1)), this._data.events.on(o.DataEvents.beforeRemove, function(t) {
                var e;
                n._nextSelection = null, 1 === n._selected.length && (e = n._data.getIndex(t.id), 1 < (t = n._data.getLength()) && (e = t == e - 1 ? e - 1 : e + 1, n._nextSelection = n._data.getId(e)))
            }), this._data.events.on(o.DataEvents.afterRemove, function(t) {
                t = n._selected.indexOf(t.id); - 1 !== t && n._selected.splice(t, 1), n._nextSelection && (n.add(n._nextSelection), n._nextSelection = null)
            })
        }
        e.Selection = i
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), (e = e.PopupEvents || (e.PopupEvents = {})).beforeHide = "beforeHide", e.beforeShow = "beforeShow", e.afterHide = "afterHide", e.afterShow = "afterShow", e.click = "click"
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), (e = e.SliderEvents || (e.SliderEvents = {})).change = "change", e.mousedown = "mousedown", e.mouseup = "mouseup"
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.default = {
            hours: "Hours",
            minutes: "Minutes",
            save: "save"
        }
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), (e = e.TimepickerEvents || (e.TimepickerEvents = {})).change = "change", e.beforeApply = "beforeApply", e.afterApply = "afterApply", e.beforeClose = "beforeClose", e.afterClose = "afterClose", e.apply = "apply", e.close = "close", e.save = "save"
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), (e = e.CalendarEvents || (e.CalendarEvents = {})).change = "change", e.beforeChange = "beforechange", e.modeChange = "modeChange", e.monthSelected = "monthSelected", e.yearSelected = "yearSelected", e.cancelClick = "cancelClick", e.dateMouseOver = "dateMouseOver", e.dateHover = "dateHover"
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.grayShades = ["#000000", "#4C4C4C", "#666666", "#808080", "#999999", "#B3B3B3", "#CCCCCC", "#E6E6E6", "#F2F2F2", "#FFFFFF"], e.palette = [
            ["#D4DAE4", "#B0B8CD", "#949DB1", "#727A8C", "#5E6677", "#3F4757", "#1D2534"],
            ["#FFCDD2", "#FE9998", "#F35C4E", "#E94633", "#D73C2D", "#CA3626", "#BB2B1A"],
            ["#F9E6AD", "#F4D679", "#EDB90F", "#EAA100", "#EA8F00", "#EA7E00", "#EA5D00"],
            ["#BCE4CE", "#90D2AF", "#33B579", "#36955F", "#247346", "#1D5B38", "#17492D"],
            ["#BDF0E9", "#92E7DC", "#02D7C5", "#11B3A5", "#018B80", "#026B60", "#024F43"],
            ["#B3E5FC", "#81D4FA", "#29B6F6", "#039BE5", "#0288D1", "#0277BD", "#01579B"],
            ["#AEC1FF", "#88A3F9", "#5874CD", "#2349AE", "#163FA2", "#083596", "#002381"],
            ["#C5C0DA", "#9F97C1", "#7E6BAD", "#584A8F", "#4F4083", "#473776", "#3A265F"],
            ["#D6BDCC", "#C492AC", "#A9537C", "#963A64", "#81355A", "#6E3051", "#4C2640"],
            ["#D2C5C1", "#B4A09A", "#826358", "#624339", "#5D4037", "#4E342E", "#3E2723"]
        ]
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), (e = e.ColorpickerEvents || (e.ColorpickerEvents = {})).change = "change", e.apply = "apply", e.cancelClick = "cancelClick", e.modeChange = "modeChange", e.selectClick = "selectClick", e.colorChange = "colorChange", e.viewChange = "viewChange"
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });

        function _(t) {
            return t.toString()
        }
        var g = i(1),
            v = i(0),
            m = i(8);
        e.bottom = function(t, e, i, n) {
            var r, s, o = e.title,
                a = e.textPadding,
                l = e.scalePadding,
                c = e.textTemplate,
                u = e.showText,
                d = e.scaleRotate,
                h = c || _,
                e = [],
                c = 0;
            return u && (c = a, r = d && !isNaN(d), s = n + a, e = t.map(function(t) {
                var e, i = t[0],
                    n = r ? "rotate(" + d + " " + i + " " + s + ")" : "",
                    o = ["scale-text", "top-text"];
                return r && (e = d % 360, o.push(m.getClassesForRotateScale("bottom", e))), v.sv("text", {
                    x: i,
                    y: s,
                    class: o.join(" "),
                    transform: n
                }, [m.verticalCenteredText(h(t[1]))])
            })), a = g.uid(), t = null, n = v.sv("path", {
                class: "main-scale",
                d: "M0 " + n + " H" + (i - .5),
                id: a
            }), o && (t = v.sv("text", {
                dx: i / 2,
                dy: l + c
            }, [v.sv("textPath", {
                href: "#" + a,
                class: "scale-title "
            }, o)])), v.sv("g", [n, t].concat(e))
        }, e.bottomGrid = function(t, e, i, n) {
            for (var o, r, s, a = n.dashed, l = n.grid, c = n.targetLine, u = n.targetValue, d = t.length, h = [], f = "grid-line " + (a ? "dash-line" : ""), p = 0; p < d; p++) 0 === p && 0 === t[p][0] && !n.hidden || (p !== c ? l && (r = "M" + t[p][0] + " 0 V " + i, s = v.sv("path", {
                d: r,
                class: f
            }), h.push(s), p === d - 1 && t[p][0] !== e && (o = "M" + e + " 0 V " + i, o = v.sv("path", {
                d: o,
                class: f
            }), h.push(o))) : (r = "M" + t[p][0] + " 0 V " + i, s = v.sv("path", {
                d: r,
                class: f + " spec-grid-line"
            }), h.push(s)));
            return u && (r = "M" + u * e + " 0 V " + i, s = v.sv("path", {
                d: r,
                class: f + " spec-grid-line"
            }), h.push(s)), v.sv("g", h)
        }, e.top = function(t, e, i, n) {
            var r, s, o = e.title,
                a = e.textPadding,
                l = e.scalePadding,
                c = e.textTemplate,
                u = e.showText,
                d = e.scaleRotate,
                h = c || _,
                e = [],
                c = 0;
            return u && (c = a, r = d && !isNaN(d), s = -a, e = t.map(function(t) {
                var e, i = ["scale-text"],
                    n = t[0],
                    o = r ? "rotate(" + d + " " + n + " " + s + ")" : "";
                return r && (e = d % 360, i.push(m.getClassesForRotateScale("top", e))), v.sv("text", {
                    x: n,
                    y: s,
                    class: i.join(" "),
                    transform: o
                }, [m.verticalCenteredText(h(t[1]))])
            })), u = g.uid(), a = v.sv("path", {
                d: "M0 0 H" + i,
                class: "main-scale",
                id: u
            }), t = null, o && (t = v.sv("text", {
                dx: i / 2,
                dy: -l - c
            }, [v.sv("textPath", {
                href: "#" + u,
                class: "scale-title"
            }, o)])), v.sv("g", [a, t].concat(e))
        }, e.topGrid = function(t, e, i, n) {
            for (var o, r, s, a = n.dashed, l = n.grid, c = n.targetLine, u = t.length, d = [], h = "grid-line " + (a ? "dash-line" : ""), f = 0; f < u; f++) 0 === f && 0 === t[f][0] && !n.hidden || (f !== c ? l && (r = "M" + t[f][0] + " 0 V " + i, s = v.sv("path", {
                d: r,
                class: h
            }), d.push(s), f === u - 1 && 0 !== t[f][0] && (o = "M0 0 V " + i, o = v.sv("path", {
                d: o,
                class: h
            }), d.push(o))) : (r = "M" + t[f][0] + " 0 V " + i, s = v.sv("path", {
                d: r,
                class: h + " spec-grid-line"
            }), d.push(s)));
            return v.sv("g", d)
        }, e.left = function(t, e, i, n) {
            var s, a, l, c = e.title,
                u = e.textPadding,
                o = e.scalePadding,
                r = e.textTemplate,
                d = e.showText,
                h = e.scaleRotate,
                f = r || _,
                p = [],
                e = 0;
            return d && (s = m.getFontStyle("scale-text"), a = 0, l = h && !isNaN(h), p = t.map(function(t) {
                var e, i = t[0],
                    n = -u,
                    o = l ? "rotate(" + h + " " + n + " " + i + ")" : "",
                    r = ["scale-text"],
                    t = f(t[1]);
                return c && (e = m.getTextWidth(t, s), a < e && (a = e)), l ? (e = h % 360, r.push(m.getClassesForRotateScale("left", e))) : r.push("end-text"), v.sv("text", {
                    x: n,
                    y: i,
                    class: r.join(" "),
                    transform: o
                }, [m.verticalCenteredText(t)])
            }), e = a + u), r = g.uid(), d = v.sv("path", {
                class: "main-scale",
                d: "M0 " + n + " V 0.5",
                id: r
            }), t = null, c && (t = v.sv("text", {
                dx: n / 2,
                dy: -o - e
            }, [v.sv("textPath", {
                href: "#" + r,
                class: "scale-title"
            }, c)])), v.sv("g", [d, t].concat(p))
        }, e.leftGrid = function(t, e, i, n) {
            for (var o, r, s, a = n.dashed, l = n.grid, c = n.targetLine, u = n.targetValue, d = t.length, h = [], f = "grid-line " + (a ? "dash-line" : ""), p = 0; p < d; p++) 0 === p && t[p][0] === i && !n.hidden || (c !== p ? l && (r = "M0 " + t[p][0] + " H " + e, s = v.sv("path", {
                d: r,
                class: f
            }), h.push(s), p === d - 1 && t[p][0] !== e && (o = "M0 0 H" + e, o = v.sv("path", {
                d: o,
                class: f
            }), h.push(o))) : (r = "M0 " + t[p][0] + " H " + e, s = v.sv("path", {
                d: r,
                class: f + " spec-grid-line"
            }), h.push(s)));
            return u && (r = "M0 " + u * i + " H " + e, s = v.sv("path", {
                d: r,
                class: f + " spec-grid-line"
            }), h.push(s)), v.sv("g", h)
        }, e.right = function(t, e, s, i) {
            var a, l, c, u = e.title,
                d = e.textPadding,
                n = e.scalePadding,
                o = e.textTemplate,
                r = e.showText,
                h = e.scaleRotate,
                f = o || _,
                p = [],
                e = 0;
            return r && (a = m.getFontStyle("scale-text"), l = 0, c = h && !isNaN(h), p = t.map(function(t) {
                var e, i = f(t[1]),
                    n = t[0],
                    o = s + d,
                    r = c ? "rotate(" + h + " " + o + " " + n + ")" : "",
                    t = ["scale-text"];
                return u && (e = m.getTextWidth(i, a), l < e && (l = e)), c ? (e = h % 360, t.push(m.getClassesForRotateScale("right", e))) : t.push("start-text"), v.sv("text", {
                    x: o,
                    y: n,
                    class: t.join(" "),
                    transform: r
                }, [m.verticalCenteredText(i)])
            }), e = d + l), o = g.uid(), r = v.sv("path", {
                d: "M" + s + " " + i + " V 0",
                class: "main-scale",
                id: o
            }), t = null, u && (t = v.sv("text", {
                dx: i / 2,
                dy: n + e
            }, [v.sv("textPath", {
                href: "#" + o,
                class: "scale-title"
            }, u)])), v.sv("g", [r, t].concat(p))
        }, e.rightGrid = function(t, e, i, n) {
            for (var o, r, s, a = n.dashed, l = n.grid, c = n.targetLine, u = t.length, d = [], h = "grid-line " + (a ? "dash-line" : ""), f = 0; f < u; f++) 0 === f && t[f][0] === i && !n.hidden || (c !== f ? l && (r = "M0 " + t[f][0] + " H " + e, s = v.sv("path", {
                d: r,
                class: h
            }), d.push(s), f === u - 1 && t[f][0] !== e && (o = "M0 0 H" + e, o = v.sv("path", {
                d: o,
                class: h
            }), d.push(o))) : (r = "M0 " + t[f][0] + " H " + e, s = v.sv("path", {
                d: r,
                class: h + " spec-grid-line"
            }), d.push(s)));
            return v.sv("g", d)
        }
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(t, e)
            }, function(t, e) {
                function i() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }),
            r = this && this.__assign || function() {
                return (r = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, g = i(0),
            a = i(8),
            i = i(47),
            o = (s = i.default, o(l, s), l.prototype.paint = function(t, e, i) {
                s.prototype.paint.call(this, t, e);
                var n = [];
                return this._form(t, e, n, i), this._markers(n), g.sv("g", {
                    class: "seria",
                    _key: this.id
                }, n)
            }, l.prototype.paintformAndMarkers = function(t, e, i) {
                s.prototype.paint.call(this, t, e);
                var n = [],
                    o = [];
                return this._form(t, e, n, i), this._markers(o), [g.sv("g", {
                    class: "seria",
                    _key: this.id
                }, n), g.sv("g", {
                    class: "seria_markers",
                    _key: this.id + "_markers"
                }, o)]
            }, l.prototype._markers = function(t) {
                var e, i, n = this;
                this.config.pointType && (e = this.config.pointColor || this.config.color, i = this._getPointType(this.config.pointType, e, !1), t.push.apply(t, this._points.map(function(t) {
                    return i(t[0], t[1], a.calcPointRef(t[2], n.id))
                })))
            }, l.prototype._form = function(t, i, e, n) {
                var o, r = "chart " + this.config.type + " " + (this.config.css || "") + " " + (this.config.dashed ? "dash-line" : ""),
                    s = this.config,
                    a = s.id,
                    l = s.fill,
                    c = s.alpha,
                    u = s.color,
                    d = s.strokeWidth,
                    h = this._points,
                    s = h[h.length - 1],
                    f = "";
                if (n) {
                    for (var p = n.length - 1; 0 <= p; p--) {
                        var _ = n[p];
                        f += p === h.length - 1 ? "M" + _[0] + " " + _[1] + " " : "L" + _[0] + " " + _[1] + " "
                    }
                    f += h.map(function(t, e) {
                        return e ? "L " + t[0] + " " + t[1] : "V " + t[1]
                    }).join(" ") + "Z"
                } else f += h.map(function(t, e) {
                    return e ? "L" + t[0] + " " + t[1] : "M0 " + i + " L0 " + t[1] + " L" + t[0] + " " + t[1]
                }).join(" ") + ("L" + t + " " + s[1]) + " V " + i;
                d && (o = h.length - 1, s = h.map(function(t, e) {
                    return (e ? "L" : "M") + (t[0] + ((e = e) === o ? -.5 : e ? 0 : .5)) + " " + t[1]
                }).join(" "), u = g.sv("path", {
                    d: s,
                    "stroke-width": d,
                    stroke: u,
                    fill: "none",
                    class: r
                }), e.push(u));
                c = g.sv("path", {
                    id: "seria" + a,
                    d: f,
                    class: r,
                    fill: l,
                    "fill-opacity": c,
                    stroke: "none"
                });
                return e.push(c), e
            }, l.prototype._setDefaults = function(t) {
                var e = {
                    alpha: .3,
                    strokeWidth: 2,
                    fill: t.color || "#5E83BA",
                    color: "#5E83BA",
                    active: !0,
                    tooltip: !0,
                    pointType: "empty"
                };
                this.config = r(r({}, e), t);
                var i = this.config.tooltip,
                    e = this.config.pointType,
                    t = this.config.pointColor || this.config.color;
                e && (this._drawPointType = this._getPointType(e, t, i))
            }, l);

        function l() {
            return null !== s && s.apply(this, arguments) || this
        }
        e.default = o
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(t, e)
            }, function(t, e) {
                function i() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }),
            r = this && this.__assign || function() {
                return (r = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = i(1),
            p = i(0),
            _ = i(8),
            i = i(47),
            o = (s = i.default, o(l, s), l.prototype.addScale = function(t, e) {
                s.prototype.addScale.call(this, t, e), e.addPadding()
            }, l.prototype.seriesShift = function(t) {
                return this._shift = t, this.config.barWidth
            }, l.prototype.paint = function(t, e, i) {
                if (s.prototype.paint.call(this, t, e), !this.config.active) return null;
                var n = [];
                this._gradient && n.push(p.sv("defs", [this._gradient()]));
                var o = "chart " + this.config.type + " " + (this.config.css || "") + " " + (this.config.dashed ? "dash-line" : ""),
                    i = this._getForm(this._points, o, t, e, i),
                    n = n.concat(i);
                return p.sv("g", {
                    class: "seria",
                    _key: this.id
                }, n)
            }, l.prototype.getTooltipType = function(t, e, i) {
                return void 0 !== this.config.baseLine && this._baseLinePosition < i ? "bot" : "top"
            }, l.prototype._getClosestDist = function(t, e, i, n) {
                return this.config.stacked && e < n ? 1 / 0 : Math.abs(t - i)
            }, l.prototype._path = function(t, e) {
                return t[0] += this._shift, "\nM " + (t[0] - this.config.barWidth / 2) + " " + e + "\nV " + t[1] + "\nh " + this.config.barWidth + "\nV " + e
            }, l.prototype._base = function(t) {
                var e = this.config.baseLine;
                return this._baseLinePosition = void 0 !== e ? this.yScale.point(e) * t : t - 1
            }, l.prototype._text = function(t, e, i) {
                var n = t[0],
                    t = (e + t[1]) / 2;
                return {
                    x: n,
                    y: t,
                    class: "bar-text",
                    transform: i && !isNaN(i) ? "rotate(" + i + " " + n + " " + t + ")" : ""
                }
            }, l.prototype._getForm = function(t, i, e, n, o) {
                function r(t) {
                    return o ? o[t][1] : f
                }
                var s = this,
                    a = this.config,
                    l = a.fill,
                    c = a.alpha,
                    u = a.showText,
                    d = a.showTextTemplate,
                    h = a.showTextRotate,
                    a = [],
                    f = this._base(n),
                    n = t.map(function(t, e) {
                        return p.sv("path", {
                            _key: "seria" + s.config.id + e,
                            d: s._path(t, r(e)),
                            class: i,
                            fill: l,
                            onclick: [s._handlers.onclick, t[2], s.config.value],
                            "fill-opacity": c
                        })
                    });
                return a.push.apply(a, n), (u || d || h) && !1 !== u && (t = t.map(function(t, e) {
                    var i, n, o = s._getText(t);
                    return i = t, n = e, 16 < Math.abs(r(n) - i[1]) ? p.sv("text", s._text(t, r(e), h), [d ? _.verticalCenteredText(d(o)) : _.verticalCenteredText(o)]) : null
                }), a.push.apply(a, t)), a
            }, l.prototype._getText = function(t) {
                return t[4].toString()
            }, l.prototype._setDefaults = function(t) {
                this.config = r(r({}, {
                    barWidth: 30,
                    alpha: 1,
                    active: !0,
                    tooltip: !0,
                    pointType: "empty"
                }), t);
                var e, i, n = this.config.tooltip,
                    o = this.config.pointType,
                    t = this.config.pointColor || this.config.color;
                o && (this.config.pointType = o, this._drawPointType = this._getPointType(o, t, n)), this.config.gradient && (e = "gradient" + a.uid(), i = this.config.gradient(this.config.fill), this._gradient = function() {
                    return _.linearGradient(i, e)
                }, this.config.fill = "url(#" + e + ")")
            }, l);

        function l() {
            var t = null !== s && s.apply(this, arguments) || this;
            return t._shift = 0, t
        }
        e.default = o
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = function(t, e) {
            var i = t.length;
            if (i < 3) a = t;
            else
                for (var n = t[0], o = t[0], r = t[1], s = t[2], a = [t[0].slice(0, 2)], l = 1; l < i; l++) a.push([(-n[0] + 6 * o[0] + r[0]) / 6, (-n[1] + 6 * o[1] + r[1]) / 6, (o[0] + 6 * r[0] - s[0]) / 6, (o[1] + 6 * r[1] - s[1]) / 6, r[0], r[1]]), n = o, o = r, r = s, s = t[l + 2] || s;
            for (var c = "", l = 0; l < a.length; l++) {
                var u = a[l],
                    d = u.length;
                l ? c += 5 < d ? "C" + u[0] + " " + u[1] + "\n\t\t\t\t" + u[2] + " " + u[3] + "\n\t\t\t\t" + u[4] + " " + u[5] : 5 === d ? "L" + u[0] + " " + u[1] : "S" + u[0] + " " + u[1] + "\n\t\t\t\t" + u[2] + " " + u[3] : (c += e ? "L" : "M", c += 5 === d ? u[0] + " " + u[1] : u[d - 2] + " " + u[d - 1])
            }
            return c
        }
    }, function(t, e, i) {
        "use strict";
        var n;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), (n = e.ComboboxEvents || (e.ComboboxEvents = {})).change = "change", n.open = "open", n.input = "input", n.beforeClose = "beforeClose", n.afterClose = "afterClose", n.close = "close", (e = e.ComboState || (e.ComboState = {}))[e.default = 0] = "default", e[e.error = 1] = "error", e[e.success = 2] = "success"
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), (e = e.DataViewEvents || (e.DataViewEvents = {})).click = "click", e.doubleClick = "doubleclick", e.focusChange = "focuschange", e.beforeEditStart = "beforeEditStart", e.afterEditStart = "afterEditStart", e.beforeEditEnd = "beforeEditEnd", e.afterEditEnd = "afterEditEnd", e.itemRightClick = "itemRightClick", e.itemMouseOver = "itemMouseOver", e.contextmenu = "contextmenu"
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(t, e)
            }, function(t, e) {
                function i() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }),
            r = this && this.__spreadArrays || function() {
                for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
                for (var n = Array(t), o = 0, e = 0; e < i; e++)
                    for (var r = arguments[e], s = 0, a = r.length; s < a; s++, o++) n[o] = r[s];
                return n
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, d = i(0),
            a = i(3),
            h = i(6),
            l = i(10),
            c = i(7),
            u = i(11),
            f = i(1),
            o = (s = u.Label, o(p, s), p.prototype.setProperties = function(t, e) {
                if (void 0 === e && (e = !1), t && !f.isEmptyObj(t) && (e || this.events.fire(c.ItemEvent.beforeChangeProperties, [this.getProperties()]))) {
                    for (var i in t) this._props.includes(i) && (this.config[i] = t[i]);
                    e || this.events.fire(c.ItemEvent.afterChangeProperties, [this.getProperties()]), this.paint()
                }
            }, p.prototype.getProperties = function() {
                var t, e = {};
                for (t in this.config) this._props.includes(t) && (e[t] = this.config[t]);
                return e
            }, p.prototype.show = function() {
                this.config.hidden && this.events.fire(c.ItemEvent.beforeShow, [this.getValue()]) && (this.config.hidden = !1, this.events.fire(c.ItemEvent.afterShow, [this.getValue()]))
            }, p.prototype.hide = function(t) {
                this.config.hidden && !t || !this.events.fire(c.ItemEvent.beforeHide, [this.getValue(), t]) || (this.config.hidden = !0, this.events.fire(c.ItemEvent.afterHide, [this.getValue(), t]))
            }, p.prototype.isVisible = function() {
                return !this.config.hidden
            }, p.prototype.disable = function() {
                this.config.disabled = !0, this.paint()
            }, p.prototype.enable = function() {
                this.config.disabled = !1, this.paint()
            }, p.prototype.isDisabled = function() {
                return this.config.disabled
            }, p.prototype.validate = function(t) {
                if (void 0 === t && (t = !1), t || this.events.fire(c.ItemEvent.beforeValidate, [this.getValue()])) return (this.config.required || this.config.$required) && (this._isValid = !!this.config.checked), t || (this.config.$validationStatus = this._isValid ? c.ValidationStatus.success : c.ValidationStatus.error, this.events.fire(c.ItemEvent.afterValidate, [this.getValue(), this._isValid])), this._isValid
            }, p.prototype.clearValidate = function() {
                this.config.$validationStatus = c.ValidationStatus.pre, this.paint()
            }, p.prototype.setValue = function(t, e) {
                void 0 === e && (e = !1), void 0 !== t && t !== this.config.checked && (this.config.checked = !!t, e || (this.events.fire(c.ItemEvent.change, [this.getValue()]), h.isVerify(this.config) && this.validate()))
            }, p.prototype.getValue = function() {
                var t = this.config,
                    e = t.value,
                    t = t.checked;
                return e ? t ? e : "" : !!t
            }, p.prototype.clear = function(t) {
                this.config.checked && (this.config.checked = !1, t || this.events.fire(c.ItemEvent.change, [this.getValue()]))
            }, p.prototype.destructor = function() {
                this.events.clear(), this.unmount()
            }, p.prototype.focus = function() {
                var t = this;
                d.awaitRedraw().then(function() {
                    t.getRootView().refs.input.el.focus()
                })
            }, p.prototype.isChecked = function() {
                return !!this.config.checked
            }, p.prototype._initView = function(t) {
                var e = this;
                if (this._inGroup = this.config.$group, this._inGroup) {
                    for (var i in this.config = {
                            type: t.type,
                            id: t.id,
                            text: "",
                            width: "content",
                            height: "content",
                            padding: 0
                        }, t) "id" !== i && "type" !== i && "name" !== i && (this.config[i] = t[i]);
                    this._handlers = {
                        onchange: function(t) {
                            e.config.checked = t.target.checked, e.events.fire(c.ItemEvent.change, [e.getValue()]), h.isVerify(e.config) && e.validate()
                        }
                    }
                } else {
                    for (var i in this.config = {
                            type: t.type,
                            id: t.id,
                            name: t.name,
                            disabled: !1,
                            required: !1,
                            label: "",
                            labelWidth: "",
                            labelPosition: "top",
                            hiddenLabel: !1,
                            helpMessage: "",
                            preMessage: "",
                            successMessage: "",
                            errorMessage: "",
                            width: "content",
                            height: "content",
                            padding: 0
                        }, t) "id" !== i && "type" !== i && "name" !== i && (this.config[i] = t[i]);
                    this.config.helpMessage && (this._helper = new l.Popup({
                        css: "dhx_tooltip dhx_tooltip--forced dhx_tooltip--light"
                    }), this._helper.attachHTML(this.config.helpMessage)), this._handlers = {
                        showHelper: function(t) {
                            t.preventDefault(), t.stopPropagation(), e._helper.show(t.target)
                        },
                        cancelUnusefulClick: function(t) {
                            t.preventDefault()
                        },
                        onchange: function(t) {
                            e.config.checked = t.target.checked, e.events.fire(c.ItemEvent.change, [e.getValue()]), h.isVerify(e.config) && e.validate()
                        }
                    }
                }
                this.config.hidden && d.awaitRedraw().then(function() {
                    e.hide(!0)
                })
            }, p.prototype._initHandlers = function() {
                var t = this;
                this.events.on(c.ItemEvent.change, function() {
                    return t.paint()
                }), this.events.on(c.ItemEvent.afterValidate, function() {
                    t.config.$validationStatus = t._isValid ? c.ValidationStatus.success : c.ValidationStatus.error, t.paint()
                })
            }, p.prototype._draw = function() {
                var t = this.config,
                    e = t.id,
                    i = t.value,
                    n = t.checked,
                    o = t.disabled,
                    r = t.name,
                    s = t.required,
                    a = t.$required,
                    l = t.text,
                    c = t.label,
                    u = t.labelWidth,
                    t = t.helpMessage;
                return d.el("label.dhx_checkbox.dhx_form-group.dhx_form-group--checkbox", {
                    class: h.getFormItemCss(this.config, h.isVerify(this.config) || !!a)
                }, this._inGroup ? [d.el(".dhx_checkbox__holder", [d.el("input.dhx_checkbox__input", {
                    type: "checkbox",
                    id: e,
                    value: i || "",
                    name: r || "",
                    disabled: o,
                    checked: n,
                    onchange: this._handlers.onchange,
                    required: s,
                    _ref: "input"
                }), d.el("span.dhx_checkbox__visual-input"), d.el("span.dhx_text", [l])])] : [c || u || t || s ? this._drawLabel() : null, d.el(".dhx_checkbox__container", [d.el(".dhx_checkbox__holder", [d.el("input.dhx_checkbox__input", {
                    type: "checkbox",
                    id: e,
                    value: i,
                    name: r,
                    disabled: o,
                    checked: n,
                    onchange: this._handlers.onchange,
                    required: s,
                    _ref: "input"
                }), d.el("span.dhx_checkbox__visual-input"), d.el("span.dhx_text", [l])]), s && h.getValidationMessage(this.config) && d.el("span.dhx_input__caption", h.getValidationMessage(this.config))])])
            }, p);

        function p(t, e) {
            void 0 === e && (e = {});
            var i = s.call(this, t, e) || this;
            i.events = new a.EventSystem, i._isValid = !0, i._propsItem = ["required", "label", "labelWidth", "labelPosition", "hiddenLabel", "helpMessage", "preMessage", "successMessage", "errorMessage", "text"], i._props = r(h.baseProps, i._propsItem), i._initView(e), i._initHandlers();
            return i.mount(t, d.create({
                render: function() {
                    return i._draw()
                }
            })), i
        }
        e.Checkbox = o
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = {
            simpleVaultText: "Drag & drop files or folders here or",
            simpleVaultLabel: "browse files"
        }
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(t, e)
            }, function(t, e) {
                function i() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }),
            s = this && this.__assign || function() {
                return (s = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r, a = i(0),
            l = i(3),
            c = i(2),
            u = i(4),
            d = i(5),
            h = i(199),
            f = i(54),
            p = i(19),
            _ = i(200),
            g = i(201),
            v = i(9),
            m = i(203),
            y = i(1),
            b = i(28),
            w = i(211),
            x = i(212),
            o = (r = u.View, o(E, r), E.prototype.destructor = function() {
                this._destroyContent(), this.events.events = {}, this.events.context = null, this._activeFilters = this._filterData = this._scroll = this.content = null, this.unmount()
            }, E.prototype.setColumns = function(t) {
                this.config.columns = t, this._parseColumns(), this._checkFilters(), this._checkMarks(), this.paint()
            }, E.prototype.addRowCss = function(t, e) {
                var i = this.data.getItem(t),
                    t = i.$css || "";
                t.match(new RegExp(e, "g")) || (i.$css = t + " " + e, this.paint())
            }, E.prototype.removeRowCss = function(t, e) {
                t = this.data.getItem(t), e = t.$css ? t.$css.replace(e, "") : "";
                t.$css = e, this.paint()
            }, E.prototype.addCellCss = function(t, e, i) {
                e = this._getColumn(e);
                e && (e.$cellCss[t] ? e.$cellCss[t] += e.$cellCss[t].match(new RegExp(i, "g")) ? "" : " " + i : this.data.getItem(t) && (e.$cellCss[t] = i + " "), this.paint())
            }, E.prototype.removeCellCss = function(t, e, i) {
                e = this._getColumn(e);
                e && (e.$cellCss[t] ? (e.$cellCss[t] = e.$cellCss[t].replace(i, ""), this.paint()) : this.data.getItem(t) && (e.$cellCss[t] = ""))
            }, E.prototype.showColumn = function(t) {
                var e = this._getColumn(t);
                e && e.hidden && this.events.fire(v.GridEvents.beforeColumnShow, [e]) && (e.hidden = !1, this.config.$totalWidth += e.width, (t = this._hiddenFilters && this._hiddenFilters[e.id]) && (this._activeFilters[e.id] = t, delete this._hiddenFilters[e.id]), this.paint(), this._checkFilters(), this.events.fire(v.GridEvents.afterColumnShow, [e]))
            }, E.prototype.hideColumn = function(t) {
                var e = this._getColumn(t);
                e && !e.hidden && this.events.fire(v.GridEvents.beforeColumnHide, [e]) && (e.hidden = !0, this.config.$totalWidth -= e.width, (t = this._activeFilters && this._activeFilters[e.id]) && (this._hiddenFilters || (this._hiddenFilters = {}), this._hiddenFilters[e.id] = t, delete this._activeFilters[e.id], this.data.filter()), this.paint(), this._checkFilters(), this.events.fire(v.GridEvents.afterColumnHide, [e]))
            }, E.prototype.isColumnHidden = function(t) {
                t = this._getColumn(t);
                if (t) return !!t.hidden
            }, E.prototype.showRow = function(t) {
                var e;
                t && (e = t.toString(), (t = this.data.getItem(e)) && t.hidden && this.events.fire(v.GridEvents.beforeRowShow, [t]) && (this.data.update(e, {
                    hidden: !1
                }), this.data.filter(function(t) {
                    return !t.hidden
                }), this.events.fire(v.GridEvents.afterRowShow, [t])))
            }, E.prototype.hideRow = function(t) {
                var e;
                t && (e = t.toString(), (t = this.data.getItem(e)) && this.events.fire(v.GridEvents.beforeRowHide, [t]) && (this.data.update(e, {
                    hidden: !0
                }), this.data.filter(function(t) {
                    return !t.hidden
                }), this.events.fire(v.GridEvents.afterRowHide, [t])))
            }, E.prototype.isRowHidden = function(t) {
                if (t) {
                    t = this.data.getItem(t.toString());
                    return t ? !!t.hidden : void 0
                }
            }, E.prototype.getScrollState = function() {
                return {
                    x: this._scroll.left,
                    y: this._scroll.top
                }
            }, E.prototype.scroll = function(t, e) {
                var i = this.getRootView().refs.grid_body.el;
                i.scrollLeft = "number" == typeof t ? t : i.scrollLeft, i.scrollTop = "number" == typeof e ? e : i.scrollTop
            }, E.prototype.scrollTo = function(t, e) {
                var i = this.config.columns.filter(function(t) {
                        return !t.hidden
                    }),
                    n = y.findIndex(i, function(t) {
                        return t.id === e
                    }),
                    o = this.selection.getCell(),
                    r = o ? o.column : this.config.columns[0],
                    s = y.findIndex(i, function(t) {
                        return t.id === r.id
                    }),
                    a = this.config.leftSplit ? p.getTotalWidth(i.slice(0, this.config.leftSplit)) : 0,
                    l = p.getTotalWidth(i.slice(0, n)) - (n - s < 0 ? a : 0),
                    c = this.data.getIndex(t) * this.config.rowHeight,
                    u = this.getScrollState(),
                    o = this.config.width + u.x,
                    s = this.config.height + u.y - this.config.headerRowHeight * this.config.$headerLevel,
                    a = c - u.y - this.config.rowHeight,
                    t = l - u.x - i[n].$width,
                    s = c + 2 * this.config.rowHeight + 18 - s,
                    o = l + 2 * i[n].$width + 18 - o,
                    s = 0 < a && s < 0 ? 0 : a < 0 ? a : s,
                    o = 0 < t && o < 0 ? 0 : t < 0 ? t : o;
                this.scroll(o + u.x, s + u.y)
            }, E.prototype.adjustColumnWidth = function(e, t) {
                var i = this;
                void 0 === t && (t = !0);
                var n = this.config.columns.filter(function(t) {
                        return !t.hidden
                    }),
                    o = y.findIndex(n, function(t) {
                        return t.id === e
                    }),
                    r = n[o],
                    s = [];
                "header" !== t && !0 !== t || !r.header || r.header.forEach(function(t) {
                    t.text && s.push(c.getStrSize(p.removeHTMLTags(t.text)).width + (p.isSortable(i.config, r) ? 40 : 20))
                }), "footer" !== t && !0 !== t || !r.footer || r.footer.forEach(function(t) {
                    (t.text || t.content) && s.push(c.getStrSize(p.removeHTMLTags(t.text || i.content[t.content].toHtml(r, i.config))).width + 20)
                }), "data" !== t && !0 !== t || this.data.map(function(t) {
                    "string" != typeof t[r.id] && "number" != typeof t[r.id] || s.push(c.getStrSize(p.removeHTMLTags(t[r.id])).width + 20)
                }), 0 < s.length && (this.config.$totalWidth = n.reduce(function(t, e, i) {
                    return i === o && (e.$width = Math.max.apply(Math, s)), t + (e.hidden ? 0 : e.$width)
                }, 0), this.paint())
            }, E.prototype.getCellRect = function(t, e) {
                var i = this.config.columns.filter(function(t) {
                        return !t.hidden
                    }),
                    n = y.findIndex(i, function(t) {
                        return t.id === e
                    }),
                    t = this._getRowIndex(t);
                return {
                    x: p.getTotalWidth(i.slice(0, n)),
                    y: t * this.config.rowHeight,
                    height: this.config.rowHeight,
                    width: i[n].$width
                }
            }, E.prototype.getColumn = function(e) {
                var t = y.findIndex(this.config.columns, function(t) {
                    return t.id === e
                });
                if (0 <= t) return this.config.columns[t]
            }, E.prototype.addSpan = function(e) {
                this.config.spans = this.config.spans || [];
                var t = y.findIndex(this.config.spans, function(t) {
                    return "" + t.row == "" + e.row && "" + t.column == "" + e.column
                });
                0 <= t ? this.config.spans[t] = e : this.config.spans.push(e)
            }, E.prototype.getSpan = function(e, i) {
                if (this.config.spans) {
                    var t = y.findIndex(this.config.spans, function(t) {
                        return "" + t.row == "" + e && "" + t.column == "" + i
                    });
                    return this.config.spans[t]
                }
            }, E.prototype.removeSpan = function(e, i) {
                var t;
                this.config.spans && (t = y.findIndex(this.config.spans, function(t) {
                    return "" + t.row == "" + e && "" + t.column == "" + i
                }), this.config.spans.splice(t, 1))
            }, E.prototype.editCell = function(t, e, i) {
                var n = this.data.getItem(t),
                    o = this.getColumn(e),
                    r = o.editorType;
                n && void 0 !== n[e] ? (i || ("date" === o.type && (i = "datePicker"), "boolean" === o.type && (i = "checkbox"), r && (i = r)), this.events.fire(v.GridEvents.beforeEditStart, [n, o, i]) && (this.config.$editable && this.config.$editable.row === t && this.config.$editable.col === e && this.config.$editable.editorType === i || (this.config.$editable = {
                    row: t,
                    col: e,
                    editorType: i
                }, this.selection.config.disabled || this.selection.setCell(t.toString(), e.toString()), this.paint(), this.events.fire(v.GridEvents.afterEditStart, [n, o, i])))) : d.dhxWarning("item not found")
            }, E.prototype.editEnd = function(t) {
                this.config.$editable && this.config.$editable.editor && this.config.$editable.editor.endEdit(t)
            }, E.prototype.getSortingState = function() {
                return {
                    dir: this._sortDir,
                    by: this._sortBy
                }
            }, E.prototype.getHeaderFilter = function(i) {
                var n = this,
                    t = this.getColumn(i);
                if (t) {
                    var o = null;
                    return t.header.forEach(function(t) {
                        var e;
                        t.content && (e = n.content[t.content].element[i], o = "comboFilter" === t.content ? e : e.el)
                    }), o
                }
            }, E.prototype.edit = function(t, e, i) {
                this.editCell(t, e, i)
            }, E.prototype._parseColumns = function() {
                f.normalizeColumns(this.config.columns);
                var t = this.config.columns.filter(function(t) {
                    return !t.hidden
                });
                f.countColumns(this.config, t)
            }, E.prototype._parseData = function() {
                var t = this.config.columns.filter(function(t) {
                    return !t.hidden
                });
                this.data.getId(0) && t.length && this._checkColumns(), this._checkFilters(), this._checkMarks(), this._render()
            }, E.prototype._checkColumns = function() {
                this._detectColsTypes()
            }, E.prototype._createCollection = function(t) {
                this.data = new d.DataCollection({
                    prep: t
                }, this.events)
            }, E.prototype._getRowIndex = function(t) {
                return this.data.getIndex(t)
            }, E.prototype._setEventHandlers = function() {
                function i(t) {
                    return 1
                }
                var r = this;
                this.data.events.on(d.DataEvents.load, function() {
                    r._parseData()
                }), this.data.events.on(d.DataEvents.change, function(t, e, i) {
                    if ("remove" !== e || !i.$emptyRow) {
                        if (t && (r._filterData = r.data.map(function(t) {
                                return t
                            }) || [], r._checkFilters()), r._detectColsTypes(), r._removeMarks(), r._checkMarks(), r._adjustColumns(), r.config.autoEmptyRow && (!r._activeFilters || y.isEmptyObj(r._activeFilters))) {
                            i = r.data.find({
                                by: "$emptyRow",
                                match: !0
                            });
                            if (i) {
                                if (i.id === t) return;
                                r.data.move(i.id, r.data.getLength() - 1)
                            } else r._addEmptyRow()
                        }
                        r._render()
                    }
                }), this.data.events.on(d.DataEvents.removeAll, function() {
                    r.config.columns.map(function(e) {
                        e.header.map(function(t) {
                            !t.content || "selectFilter" !== t.content && "comboFilter" !== t.content || (e.$uniqueData = [])
                        })
                    })
                }), this.events.on(d.DragEvents.beforeDrag, function(t, e) {
                    return r.data.getItem(t.start) ? r.events.fire(v.GridEvents.beforeRowDrag, [t, e]) : "column" === r.config.dragItem ? r.events.fire(v.GridEvents.beforeColumnDrag, [t, e]) : void 0
                }), this.events.on(d.DragEvents.dragStart, function(t, e) {
                    i({
                        $dragtarget: !0
                    }), r.data.getItem(t.start) ? r.events.fire(v.GridEvents.dragRowStart, [t, e]) : "column" === r.config.dragItem && r.events.fire(v.GridEvents.dragColumnStart, [t, e])
                }), this.events.on(d.DragEvents.dragIn, function(t, e) {
                    r.data.getItem(t.start) ? r.events.fire(v.GridEvents.dragRowIn, [t, e]) : "column" === r.config.dragItem && r.events.fire(v.GridEvents.dragColumnIn, [t, e])
                }), this.events.on(d.DragEvents.dragOut, function(t, e) {
                    r.data.getItem(t.start) ? r.events.fire(v.GridEvents.dragRowOut, [t, e]) : "column" === r.config.dragItem && r.events.fire(v.GridEvents.dragColumnOut, [t, e])
                }), this.events.on(d.DragEvents.canDrop, function(t, e) {
                    i({
                        $drophere: !0
                    }), r.data.getItem(t.start) ? r.events.fire(v.GridEvents.canRowDrop, [t, e]) : "column" === r.config.dragItem && r.events.fire(v.GridEvents.canColumnDrop, [t, e])
                }), this.events.on(d.DragEvents.cancelDrop, function(t, e) {
                    i({
                        $drophere: void 0
                    }), r.data.getItem(t.start) ? r.events.fire(v.GridEvents.cancelRowDrop, [t, e]) : "column" === r.config.dragItem && r.events.fire(v.GridEvents.cancelColumnDrop, [t, e])
                }), this.events.on(d.DragEvents.beforeDrop, function(t, e) {
                    return r.data.getItem(t.start) ? r.events.fire(v.GridEvents.beforeRowDrop, [t, e]) : "column" === r.config.dragItem ? r.events.fire(v.GridEvents.beforeColumnDrop, [t, e]) : void 0
                }), this.events.on(d.DragEvents.afterDrop, function(t, e) {
                    r.data.getItem(t.start) ? r.events.fire(v.GridEvents.afterRowDrop, [t, e]) : "column" === r.config.dragItem && r.events.fire(v.GridEvents.afterColumnDrop, [t, e])
                }), this.events.on(d.DragEvents.afterDrag, function(t, e) {
                    i({
                        $dragtarget: void 0
                    }), r.data.getItem(t.start) ? r.events.fire(v.GridEvents.afterRowDrag, [t, e]) : "column" === r.config.dragItem && r.events.fire(v.GridEvents.afterColumnDrag, [t, e])
                }), this.events.on(v.GridEvents.sort, function(t) {
                    t && r._sort(t)
                }), this.events.on(v.GridEvents.cellMouseDown, function(t, e, i) {
                    i.targetTouches ? (r._touch.timer = setTimeout(function() {
                        r._dragStart(i)
                    }, r._touch.duration), r._touch.timeStamp ? (r._touch.dblDuration >= r._touch.timeStamp - +i.timeStamp.toFixed() && ((!1 !== e.editable && r.config.editable || e.editable) && r.editCell(t.id, e.id, e.editorType), i.preventDefault(), r.events.fire(v.GridEvents.cellDblClick, [t, e, i])), r._touch.timeStamp = null) : r._touch.timeStamp = +i.timeStamp.toFixed(), setTimeout(function() {
                        r._touch.timeStamp = null
                    }, r._touch.dblDuration)) : r._dragStart(i)
                }), this._events.on(v.GridSystemEvents.cellTouchMove, function(t, e, i) {
                    r._touch.start && i.preventDefault(), r._clearTouchTimer()
                }), this._events.on(v.GridSystemEvents.cellTouchEnd, function() {
                    r._touch.start = !1, r._clearTouchTimer()
                }), this.events.on(v.GridEvents.headerInput, function(t, e, i) {
                    var n, o;
                    for (o in !r.config.autoEmptyRow || (n = r.data.find({
                            by: "$emptyRow",
                            match: !0
                        })) && r.data.remove(n.id), r._activeFilters || (r._activeFilters = {}), t ? r._activeFilters[e] = {
                            by: e,
                            match: t,
                            compare: r.content[i].match
                        } : delete r._activeFilters[e], r.data.filter(function(t) {
                            return t
                        }), r._activeFilters) r.data.filter(r._activeFilters[o], {
                        add: !0
                    })
                }), this.events.on(v.GridEvents.filterChange, function(t, e, i) {
                    var n, o;
                    for (o in !r.config.autoEmptyRow || (n = r.data.find({
                            by: "$emptyRow",
                            match: !0
                        })) && r.data.remove(n.id), r._activeFilters || (r._activeFilters = {}), t ? r._activeFilters[e] = {
                            by: e,
                            match: t,
                            compare: r.content[i].match
                        } : delete r._activeFilters[e], r.data.filter(function(t) {
                            return t
                        }), r._activeFilters) r.data.filter(r._activeFilters[o], {
                        add: !0
                    })
                }), this.events.on(v.GridEvents.scroll, function(t) {
                    r._scroll = {
                        top: t.y,
                        left: t.x
                    }, r.editEnd(), r.paint()
                }), this.events.on(v.GridEvents.cellDblClick, function(t, e) {
                    (!1 !== e.editable && r.config.editable || e.editable) && r.editCell(t.id, e.id, e.editorType)
                }), this.events.on(v.GridEvents.afterEditEnd, function(t, e, i) {
                    var n, e = r.config.$editable ? (n = r.config.$editable.row, r.config.$editable.col) : (n = e.id, i.id),
                        i = r.data.getItem(n);
                    delete i.$emptyRow, void 0 !== t && r.data.update(n, s(s({}, i), ((i = {})[e] = t, i))), r.config.$editable = null, r._checkFilters(), r.paint()
                }), this.events.on(v.GridEvents.headerCellMouseDown, function(t, e) {
                    var i = e.target.getAttribute("dhx_resized");
                    i && r.events.fire(v.GridEvents.beforeResizeStart, [t, e]) && x.startResize(r, i.toString(), e, function() {
                        r.paint(), r.config.$resizing = null, r.events.fire(v.GridEvents.afterResizeEnd, [t, e])
                    }), e.targetTouches && (r._touch.timeStamp ? (r._touch.dblDuration >= r._touch.timeStamp - +e.timeStamp.toFixed() && (e.preventDefault(), r.events.fire(v.GridEvents.headerCellDblClick, [t, e])), r._touch.timeStamp = null) : r._touch.timeStamp = +e.timeStamp.toFixed(), setTimeout(function() {
                        r._touch.timeStamp = null
                    }, r._touch.dblDuration))
                }), this.events.on(v.GridEvents.footerCellDblClick, function(t, e) {
                    e.targetTouches && (r._touch.timeStamp ? (r._touch.dblDuration >= r._touch.timeStamp - +e.timeStamp.toFixed() && (e.preventDefault(), r.events.fire(v.GridEvents.footerCellDblClick, [t, e])), r._touch.timeStamp = null) : r._touch.timeStamp = +e.timeStamp.toFixed(), setTimeout(function() {
                        r._touch.timeStamp = null
                    }, r._touch.dblDuration))
                }), this.events.on(v.GridEvents.resize, function() {
                    r._parseColumns(), r._checkFilters()
                })
            }, E.prototype._addEmptyRow = function() {
                var t = this.data.getId(this.data.getLength() - 1),
                    e = this.data.getItem(t),
                    t = this.config.columns.filter(function(t) {
                        return !t.hidden
                    });
                p.isRowEmpty(e) || this.data.add(t.reduce(function(t, e) {
                    return t[e.id] = "", t
                }, {
                    $emptyRow: !0
                }))
            }, E.prototype._sort = function(i, t) {
                var n = this;
                t ? this._sortDir = t : this._sortBy === i ? this._sortDir = "asc" === this._sortDir ? "desc" : "asc" : this._sortDir = "desc", this._sortBy = i, this.data.sort({
                    by: i,
                    dir: this._sortDir,
                    as: function(t) {
                        var e = n.getColumn(i);
                        return t && "date" === e.type ? "" + b.stringToDate(t, e.dateFormat).getTime() : t ? "" + t : ""
                    }
                })
            }, E.prototype._clearTouchTimer = function() {
                this._touch.timer && (clearTimeout(this._touch.timer), this._touch.timer = null)
            }, E.prototype._dragStart = function(t) {
                if (this.config.dragMode && "row" === this.config.dragItem && !this.config.$editable) {
                    var e = c.locateNode(t, "dhx_id"),
                        i = e && e.getAttribute("dhx_id");
                    return t.targetTouches && (this._touch.start = !0), d.dragManager.onMouseDown(t, [i], [e])
                }
            }, E.prototype._getColumn = function(t) {
                for (var e = 0, i = this.config.columns; e < i.length; e++) {
                    var n = i[e];
                    if (n.id === t) return n
                }
            }, E.prototype._init = function() {
                this.events = new l.EventSystem(this), this._events = new l.EventSystem(this), this._attachDataCollection(), this.export = new h.Exporter(this), this._setEventHandlers()
            }, E.prototype._attachDataCollection = function() {
                var e = this;
                if (this.config.data instanceof d.DataCollection) return this.data = this.config.data, this.config.data = [], void this._parseData();
                this._createCollection(function(t) {
                    return t.spans && (e.config.spans = t.spans, t = t.data), t
                })
            }, E.prototype._setMarks = function(n, o) {
                for (var t = this.data.map(function(t) {
                        return {
                            id: t.id,
                            data: t[n.id],
                            row: t
                        }
                    }), r = this.data.map(function(t) {
                        return t[n.id]
                    }), e = 0, i = t; e < i.length; e++) ! function(t) {
                    var e, i = o(t.data, r, t.row, n);
                    i && (n.$cellCss = n.$cellCss || {}, e = (n.$cellCss[t.id] || "").split(" "), i.split(" ").map(function(t) {
                        e.includes(t) || e.push(t)
                    }), n.$cellCss[t.id] = e.join(" "))
                }(i[e])
            }, E.prototype._checkMarks = function() {
                var e = this;
                this.config.columns.map(function(t) {
                    var n = t.mark;
                    n && ("function" == typeof n ? e._setMarks(t, n) : e._setMarks(t, function(t, e) {
                        var i = e.filter(function(t) {
                                return null != t && "" !== t
                            }),
                            e = Math.min.apply(Math, i),
                            i = Math.max.apply(Math, i);
                        return n.max && i === parseFloat(t) ? n.max : !(!n.min || e !== parseFloat(t)) && n.min
                    }))
                })
            }, E.prototype._removeMarks = function() {
                this.config.columns.forEach(function(t) {
                    t.mark && (t.$cellCss = {})
                })
            }, E.prototype._adjustColumns = function() {
                var i = this;
                this.config.columns.filter(function(t) {
                    return !t.hidden
                }).map(function(t, e) {
                    (!1 !== t.adjust && i.config.adjust || t.adjust) && i.adjustColumnWidth(t.id, t.adjust || i.config.adjust)
                })
            }, E.prototype._detectColsTypes = function() {
                var n = this.data.getItem(this.data.getId(0));
                n && this.config.columns.map(function(t) {
                    if (t.type) return t;
                    var e = n ? n[t.id] : "",
                        i = parseFloat(e),
                        i = isNaN(i) ? e : i;
                    return i ? (t.type = typeof i, t) : void 0
                })
            }, E.prototype._checkFilters = function() {
                var n = this,
                    i = this._filterData;
                this.config.columns.map(function(e) {
                    e.header.map(function(t) {
                        !t.content || "selectFilter" !== t.content && "comboFilter" !== t.content || (t = f.getUnique(i, e.id), e.$uniqueData && e.$uniqueData.length > t.length ? t.forEach(function(t) {
                            e.$uniqueData.includes(t) || e.$uniqueData.push(t)
                        }) : e.$uniqueData = t)
                    })
                });
                var t, o = this;
                for (t in this._activeFilters) ! function(e) {
                    var t = o.config.columns.find(function(t) {
                            return t.id === e
                        }),
                        i = t.header.find(function(t) {
                            return t.content
                        });
                    !i || "selectFilter" !== i.content && "comboFilter" !== i.content || t.$uniqueData.find(function(t) {
                        return t.toString() === n._activeFilters[e].match
                    }) ? o.data.filter(o._activeFilters[e], {
                        add: !0
                    }) : (delete o._activeFilters[e], o.data.filter())
                }(t)
            }, E.prototype._destroyContent = function() {
                for (var t in this.content) "comboFilter" === t && this.content[t].destroy()
            }, E.prototype._render = function() {
                this.paint()
            }, E.prototype._lazyLoad = function(t) {
                var e, i = t.target.scrollTop;
                this.getScrollState().y !== i && (e = Math.round(i / this.config.rowHeight), t = (this.config.height - this.config.headerRowHeight) / this.config.rowHeight, (i = this.data.dataProxy) && i.config && !this.data.isDataLoaded(e, t + e + i.config.prepare) && (i.updateUrl(null, {
                    from: e,
                    limit: i.config.limit
                }), this.data.load(i)))
            }, E);

        function E(t, e) {
            var n = r.call(this, t, e) || this;
            n._touch = {
                duration: 350,
                dblDuration: 300,
                timer: null,
                start: !1,
                timeStamp: null
            }, n.config = y.extend({
                rowHeight: 40,
                headerRowHeight: 40,
                footerRowHeight: 40,
                keyNavigation: !0,
                sortable: !0,
                columns: [],
                data: [],
                tooltip: !0,
                rootParent: "string" == typeof t && t,
                headerSort: !0
            }, e), n.config.splitAt && (n.config.leftSplit = n.config.splitAt), n.content = w.getContent(), n._scroll = {
                top: 0,
                left: 0
            }, n.config.autoWidth = n.config.autoWidth || n.config.fitToContainer, n.config.adjust = n.config.adjust || n.config.columnsAutoWidth, n.config.editable = n.config.editable || n.config.editing, n.config.sortable && n.config.headerSort || (n.config.sortable = !1);
            var i = {
                onclick: c.eventHandler(function(t) {
                    return c.locate(t)
                }, {
                    "dhx_grid-header-cell": function(t, e) {
                        var i = t.target.getAttribute("dhx_resized"),
                            t = n._getColumn(e);
                        t && p.isSortable(n.config, t) && !i && n.events.fire(v.GridEvents.sort, [e])
                    },
                    "dhx_grid-expand-cell": function(t, e) {
                        t.target.classList.contains("dhx_grid-expand-cell-icon") && n.events.fire(v.GridEvents.expand, [e])
                    }
                }),
                onscroll: function(t) {
                    n._lazyLoad(t), n.events.fire(v.GridEvents.scroll, [{
                        y: t.target.scrollTop,
                        x: t.target.scrollLeft
                    }])
                }
            };
            (n.config.dragMode || n.config.dragItem) && (d.dragManager.setItem(n._uid, n), n.config.dragItem || (n.config.dragItem = "row"), n.config.dragMode || (n.config.dragMode = "both")), n._init(), n.config.columns && n._parseColumns(), n.config.data && n.config.data instanceof Array && n.config.data.length && n.config.columns && n.data.parse(n.config.data), n.selection = new _.Selection(n, {
                disabled: !n.config.selection
            }, n.events), n.config.keyNavigation && (n.keyManager = new g.KeyManager(n));
            var o = a.create({
                render: function(t, e) {
                    return m.render(t, e, i, n.selection, n._uid)
                }
            }, n);
            return n.mount(t, o), e.autoEmptyRow && 0 === n.data.getLength() && (n._addEmptyRow(), n.paint()), n
        }
        e.Grid = o
    }, function(t, e, i) {
        "use strict";
        var _ = this && this.__assign || function() {
                return (_ = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            },
            a = this && this.__spreadArrays || function() {
                for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
                for (var n = Array(t), o = 0, e = 0; e < i; e++)
                    for (var r = arguments[e], s = 0, a = r.length; s < a; s++, o++) n[o] = r[s];
                return n
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var g = i(0),
            v = i(56),
            m = i(19),
            n = i(9);

        function o(t, e, i, n) {
            i && (i.toLocaleLowerCase().includes("touch") ? e._events : e.events).fire(i, [t, n])
        }

        function y(t, e, i) {
            return {
                onclick: [o, t, i, n.GridEvents[e + "CellClick"]],
                onmouseover: [o, t, i, n.GridEvents[e + "CellMouseOver"]],
                onmousedown: [o, t, i, n.GridEvents[e + "CellMouseDown"]],
                ontouchstart: [o, t, i, n.GridEvents[e + "CellMouseDown"]],
                ondblclick: [o, t, i, n.GridEvents[e + "CellDblClick"]],
                oncontextmenu: [o, t, i, n.GridEvents[e + "CellRightClick"]],
                ontouchmove: [o, t, i, n.GridSystemEvents[e + "CellTouchMove"]],
                ontouchend: [o, t, i, n.GridSystemEvents[e + "CelltouchEnd"]]
            }
        }

        function l(u, t) {
            if (!u.data || !u.columns) return [];
            var e, d = t.name,
                h = u.currentColumns.filter(function(t) {
                    return !t.hidden
                }),
                f = u[d + "RowHeight"] || 40,
                p = (e = d, t = (t = h).map(function(t) {
                    return t[e] || [{}]
                }), m.transpose(t));
            return p.map(function(t, c) {
                return g.el(".dhx_" + d + "-row", {
                    style: {
                        height: f
                    }
                }, t.map(function(t, e) {
                    var i = u.tooltip && "boolean" != typeof h[e].tooltip || h[e].tooltip,
                        n = t.css || "",
                        o = h[e],
                        r = "dxi dxi-sort-variant dhx_grid-sort-icon";
                    u.sortBy && "" + o.id === u.sortBy && !t.content && (r += " dhx_grid-sort-icon--" + (u.sortDir || "asc"), n += " dhx_grid-" + d + "-cell--sorted ");
                    var s = m.isSortable(u, o) && t.text && "footer" !== d;
                    s && (n += " dhx_grid-header-cell--sortable");
                    var a = 0 === e ? "dhx_first-column-cell" : "",
                        l = e === h.length - 1 ? "dhx_last-column-cell" : "";
                    t.content || (t.align && "center" !== t.align ? n += " dhx_grid-header-cell--align_" + ("right" === t.align ? "right" : "left") + " " : n += " dhx_grid-header-cell--" + ("number" === o.type ? "align_right" : "align_left") + " "), (u.sortable && !1 !== o.sortable || o.sortable) && (n += " dhx_grid-sortable "), n += a + " " + l;
                    l = (void 0 !== o.resizable ? o : u).resizable;
                    return l && (l = g.el("div", {
                        class: "dhx_resizer_grip_wrap"
                    }, [g.el("div", {
                        class: "dhx_resizer_grip",
                        dhx_resized: o.id,
                        style: {
                            height: 100 * p.length + "%"
                        }
                    }, [g.el("div", {
                        class: "dhx_resizer_grip_line"
                    })])]), ("footer" === d || 0 < c) && (l = null)), t.align && (n += " dhx_align-" + t.align), t.content ? function(t, e, i, n, o) {
                        void 0 === o && (o = "");
                        var r = i[n + "RowHeight"] - 10 + 1 || 31,
                            s = e.type ? "dhx_" + e.type + "-cell" : "dhx_string_cell";
                        return g.el(".dhx_grid-" + n + "-cell.dhx_grid-custom-content-cell." + s, _({
                            class: o,
                            style: {
                                width: e.$width,
                                lineHeight: r + "px"
                            }
                        }, y(e, n, i)), [i.content[t.content] && i.content[t.content].toHtml(e, i)])
                    }(t, o, u, d, n) : g.el(".dhx_grid-" + d + "-cell", _(_({
                        class: n.trim(),
                        dhx_id: o.id,
                        _key: e,
                        style: {
                            width: o.$width,
                            lineHeight: f + 1 + "px"
                        }
                    }, y(o, d, u)), {
                        title: i ? m.removeHTMLTags(t.text) : null
                    }), [g.el("div", {
                        class: "dhx_grid-header-cell-text"
                    }, [g.el("div", {
                        ".innerHTML": t.text
                    }), l || null]), s && g.el("div", {
                        class: r
                    })])
                }))
            })
        }

        function c(d, h) {
            var f = d.columns.filter(function(t) {
                    return !t.hidden
                }),
                t = m.transpose(f.map(function(t) {
                    return t[h.name] || []
                })),
                p = d[h.name + "RowHeight"] || 40,
                _ = 0;
            return t.map(function(t, u) {
                return _ = 0, g.el(".dhx_span-row", {
                    style: {
                        top: p * u + "px",
                        height: p
                    },
                    class: "dhx_header-row"
                }, t.map(function(t, e) {
                    var i, n = f[e];
                    d.spans && d.spans.forEach(function(t) {
                        t.column === n.id && (i = d.tooltip && "boolean" != typeof t.tooltip || t.tooltip)
                    }), _ += n.hidden ? 0 : n.$width;
                    var o = 0 === e ? "dhx_first-column-cell" : "",
                        r = e === f.length - 1 || (t.colspan || 0) + (e - 1) >= f.length - 1 ? "dhx_last-column-cell" : "",
                        s = p;
                    t.rowspan && (s = s * t.rowspan - 1);
                    var a = m.isSortable(d, n) && t.rowspan && t.text && "footer" !== h.name,
                        l = "dxi dxi-sort-variant dhx_grid-sort-icon";
                    d.sortBy && "" + n.id === d.sortBy && !t.content && (l += " dhx_grid-sort-icon--" + (d.sortDir || "asc"));
                    var c = n.align ? "dhx_align-" + n.align : "number" !== n.type || t.colspan ? "dhx_align-left" : "dhx_align-right",
                        r = "dhx_grid-header-cell " + o + " " + r + " " + (t.rowspan ? "dhx_span-cell__rowspan" : "") + " " + (t.align ? "dhx_align-" + t.align : c);
                    a && (r += " dhx_grid-header-cell--sortable"), t.content || (!t.align && t.colspan ? r += " dhx_grid-header-cell--align_left" : t.align && "center" !== t.align ? r += " dhx_grid-header-cell--align_" + ("right" === t.align ? "right" : "left") + " " : r += " dhx_grid-header-cell--align_" + ("number" === n.type ? "right" : "left") + " ");
                    c = "";
                    return 0 < _ - n.$width && (c = "1px solid #e4e4e4"), t.colspan || t.rowspan ? g.el(".dhx_span-cell", {
                        style: {
                            width: v.getWidth(f, t.colspan, e),
                            height: s,
                            left: _ - n.$width,
                            borderLeft: c,
                            top: p * u,
                            lineHeight: s + "px"
                        },
                        class: r.trim(),
                        title: i ? m.removeHTMLTags(t.text) : null,
                        dhx_id: n.id
                    }, [g.el("div", {
                        ".innerHTML": t.text
                    }), a && g.el("div", {
                        class: l
                    })]) : null
                }).filter(function(t) {
                    return t
                }))
            })
        }
        e.getRows = l, e.getSpans = c, e.getFixedRows = function(t, e) {
            var i = l(t, e),
                n = c(t, e),
                o = null;
            "footer" !== e.name || e.sticky || (o = 0 <= t.leftSplit && l(_(_({}, t), {
                currentColumns: t.columns.filter(function(t) {
                    return !t.hidden
                }).slice(0, t.leftSplit),
                $positions: _(_({}, t.$positions), {
                    xStart: 0,
                    xEnd: t.leftSplit
                })
            }), e));
            var r, s = ((s = {
                position: "sticky"
            })[e.position] = 0, s);
            return e.sticky || (s.left = -t.scroll.left, r = -t.scroll.left, s.position = "relative"), g.el(".dhx_" + e.name + "-wrapper", {
                class: e.sticky ? "" : "dhx_compatible-" + e.name,
                style: _(_({}, s), {
                    left: e.sticky ? r : 0,
                    height: t[e.name + "Height"],
                    width: e.sticky ? t.$totalWidth : e.wrapper.width - 2
                })
            }, [g.el(".dhx_grid-" + e.name, {
                style: {
                    height: t[e.name + "Height"],
                    left: r,
                    paddingLeft: e.shifts.x,
                    width: t.$totalWidth
                }
            }, [g.el(".dhx_" + e.name + "-rows", a(i)), g.el(".dhx_" + e.name + "-spans", {
                style: {
                    marginLeft: -e.shifts.x
                },
                class: "dhx_" + e.name + "-rows"
            }, n), o && g.el(".dhx_" + e.name + "-fixed-cols", {
                style: {
                    position: "absolute",
                    top: 0,
                    left: t.scroll.left + "px",
                    height: "100%"
                }
            }, o)]), g.el("div", {
                style: {
                    width: t.$totalWidth
                }
            })])
        }
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), (e = e.SidebarEvents || (e.SidebarEvents = {})).beforeCollapse = "beforeCollapse", e.afterCollapse = "afterCollapse", e.beforeExpand = "beforeExpand", e.afterExpand = "afterExpand", e.toggle = "toggle"
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), (e = e.TabbarEvents || (e.TabbarEvents = {})).change = "change", e.beforeClose = "beforeClose", e.afterClose = "afterClose", e.close = "close"
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n, o, r = i(0),
            s = i(3),
            a = i(2),
            l = i(15);
        (i = n = e.EditorMode || (e.EditorMode = {})).editText = "text", i.selectItem = "select", (i = o = e.EditorEvents || (e.EditorEvents = {})).begin = "begin", i.end = "end";
        c.prototype.edit = function(t, e) {
            return this._active && this._item !== e.item && this._finishEdit(), this._active = !0, this._targetId = t, this.config = e, this._item = e.item, this._currentValue = this._item.value, this.events.fire(o.begin, [t]), this._initOuterClick(), this._addHotkeys(), this._draw()
        }, c.prototype.isEditable = function() {
            return this._active
        }, c.prototype._draw = function() {
            var e = this;
            if (this.config.mode !== n.selectItem) return r.el("input", {
                _hooks: {
                    didInsert: function(t) {
                        t.el.focus()
                    }
                },
                id: "input_" + this._item.id,
                class: "dhx_tree-input",
                oninput: this._handlers.editText,
                value: this._item.value,
                autofocus: !0
            });
            var t = this.config.options;
            return r.el("select", {
                id: "input_" + this._item.id,
                dhx_id: this._item.id,
                onchange: this._handlers.itemSelected
            }, t.map(function(t) {
                return r.el("option", {
                    class: "editor-select",
                    value: t,
                    selected: e._currentValue === t,
                    style: {
                        border: "1px solid"
                    }
                }, t)
            }))
        }, c.prototype._addHotkeys = function() {
            var t = this;
            l.keyManager.addHotKey("escape", function() {
                t._finishEdit()
            }, this), l.keyManager.addHotKey("enter", function() {
                t._finishEdit()
            }, this)
        }, c.prototype._removeHotkeys = function() {
            l.keyManager.removeHotKey(null, this)
        }, c.prototype._finishEdit = function() {
            this.events.fire(o.end, [this._targetId, this._item.id, this._currentValue]) && this._clear()
        }, c.prototype._clear = function() {
            this._active = !1, this._removeClickListener(), this._removeHotkeys()
        }, c.prototype._initOuterClick = function() {
            document.addEventListener("click", this._documentClick)
        }, c.prototype._removeClickListener = function() {
            document.removeEventListener("click", this._documentClick)
        }, i = c;

        function c() {
            var e = this;
            this.events = new s.EventSystem, this._documentClick = function(t) {
                a.locate(t, "id") !== "input_" + e._item.id && (e._removeClickListener(), e._finishEdit())
            }, this._handlers = {
                editText: function(t) {
                    e._currentValue = t.target.value
                },
                itemSelected: function(t) {
                    e._currentValue = t.target.value, e._finishEdit()
                }
            }
        }
        e.default = new i
    }, function(t, e, i) {
        "use strict";
        var n;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), (n = e.SelectStatus || (e.SelectStatus = {}))[n.unselected = 0] = "unselected", n[n.selected = 1] = "selected", n[n.indeterminate = 2] = "indeterminate", (e = e.TreeEvents || (e.TreeEvents = {})).itemClick = "itemclick", e.itemDblClick = "itemdblclick", e.itemRightClick = "itemrightclick", e.beforeCollapse = "beforeCollapse", e.afterCollapse = "afterCollapse", e.beforeExpand = "beforeExpand", e.afterExpand = "afterExpand", e.beforeEditStart = "beforeEditStart", e.afterEditStart = "afterEditStart", e.beforeEditEnd = "beforeEditEnd", e.afterEditEnd = "afterEditEnd", e.focusChange = "focusChange", e.itemContextMenu = "itemcontextmenu"
    }, function(t, i, e) {
        "use strict";

        function n(t) {
            for (var e in t) i.hasOwnProperty(e) || (i[e] = t[e])
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), n(e(230)), n(e(90)), n(e(89))
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(t, e)
            }, function(t, e) {
                function i() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }),
            r = this && this.__assign || function() {
                return (r = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = i(1),
            l = i(5),
            o = (s = l.TreeCollection, o(c, s), c.prototype.eachChild = function(t, e, i, n) {
                void 0 === i && (i = !0), n = n || function(t) {
                    return !1 !== t.$opened
                }, s.prototype.eachChild.call(this, t, e, i, n)
            }, c.prototype.getMaxLevel = function() {
                var e = this,
                    i = 1;
                return this.map(function(t) {
                    t = e.getLevel(t.id);
                    i = Math.max(t, i)
                }), i
            }, c.prototype.getLevel = function(t) {
                var e = 0;
                return this.eachParent(t, function() {
                    e++
                }), e
            }, c.prototype.serialize = function(t) {
                var i = this;
                void 0 === t && (t = l.DataDriver.json);
                var n = [];
                this.eachChild(this.getRoot(), function(t) {
                    var e;
                    t && (e = r(r({}, t), {
                        $level: t.$level || i.getLevel(t.id),
                        $items: i.haveItems(t.id)
                    }), i.haveItems(t.id) && void 0 === t.$opened && (t.$opened = e.$opened = !0), n.push(e))
                });
                t = l.toDataDriver(t);
                if (t) return t.serialize(n)
            }, c.prototype.getPlainIndex = function(t) {
                return Object.keys(this._pull).indexOf(t)
            }, c.prototype.map = function(t, e, i) {
                void 0 === e && (e = this._root), void 0 === i && (i = !0);
                var n = [];
                if (!this.haveItems(e)) return n;
                for (var o, r = 0; r < this._childs[e].length; r++) n.push(t.call(this, this._childs[e][r], r)), i && this._childs[e][r].$opened && (o = this.map(t, this._childs[e][r].id, i), n = n.concat(o));
                return n
            }, c.prototype.getId = function(t) {
                return Object.keys(this._pull)[t]
            }, c.prototype._parse_data = function(t, e) {
                void 0 === e && (e = this._root);
                for (var i = 0, n = t; i < n.length; i++) {
                    var o = n[i];
                    this.config.init && (o = this.config.init(o)), o.id = o.id ? o.id.toString() : a.uid(), o.parent = void 0 === o.parent || o.parent && o.$items ? e : o.parent.toString(), this._pull[o.id] = o, this._childs[o.parent] || (this._childs[o.parent] = []), this._childs[o.parent].push(o), o.$level = o.$level || this.getLevel(o.id), o.items && o.items instanceof Object && (o.$opened = !0, this._parse_data(o.items, o.id))
                }
                this._checkItems()
            }, c.prototype._checkItems = function() {
                var e = this;
                this.eachChild(this._root, function(t) {
                    t.$items = t.$opened = e.haveItems(t.id)
                })
            }, c);

        function c(t, e) {
            return s.call(this, t, e) || this
        }
        e.TreeGridCollection = o
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), (e = e.TreeGridEvents || (e.TreeGridEvents = {})).beforeCollapse = "beforeCollapse", e.afterCollapse = "afterCollapse", e.beforeExpand = "beforeExpand", e.afterExpand = "afterExpand"
    }, function(t, e, i) {
        i(92), i(93), i(94), i(95), i(96), i(103), i(104), t.exports = i(105)
    }, function(t, e) {
        Object.values = Object.values || function(e) {
            var t = Object.prototype.toString.call(e);
            if (null == e) throw new TypeError("Cannot convert undefined or null to object");
            if (~["[object String]", "[object Object]", "[object Array]", "[object Function]"].indexOf(t)) {
                if (Object.keys) return Object.keys(e).map(function(t) {
                    return e[t]
                });
                var i, n = [];
                for (i in e) e.hasOwnProperty(i) && n.push(e[i]);
                return n
            }
            return []
        }
    }, function(t, e) {
        Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
            value: function(t, e) {
                if (null == this) throw new TypeError('"this" is null or not defined');
                var i = Object(this),
                    n = i.length >>> 0;
                if (0 == n) return !1;
                var o, r, e = 0 | e,
                    s = Math.max(0 <= e ? e : n - Math.abs(e), 0);
                for (; s < n;) {
                    if ((o = i[s]) === (r = t) || "number" == typeof o && "number" == typeof r && isNaN(o) && isNaN(r)) return !0;
                    s++
                }
                return !1
            },
            configurable: !0,
            writable: !0
        }), Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
            value: function(t) {
                if (null == this) throw new TypeError('"this" is null or not defined');
                var e = Object(this),
                    i = e.length >>> 0;
                if ("function" != typeof t) throw new TypeError("predicate must be a function");
                for (var n = arguments[1], o = 0; o < i;) {
                    var r = e[o];
                    if (t.call(n, r, o, e)) return r;
                    o++
                }
            },
            configurable: !0,
            writable: !0
        }), Array.prototype.findIndex || (Array.prototype.findIndex = function(t) {
            if (null == this) throw new TypeError("Array.prototype.findIndex called on null or undefined");
            if ("function" != typeof t) throw new TypeError("predicate must be a function");
            for (var e, i = Object(this), n = i.length >>> 0, o = arguments[1], r = 0; r < n; r++)
                if (e = i[r], t.call(o, e, r, i)) return r;
            return -1
        })
    }, function(t, e) {
        String.prototype.includes || (String.prototype.includes = function(t, e) {
            "use strict";
            return "number" != typeof e && (e = 0), !(e + t.length > this.length) && -1 !== this.indexOf(t, e)
        }), String.prototype.startsWith || Object.defineProperty(String.prototype, "startsWith", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function(t, e) {
                return e = e || 0, this.indexOf(t, e) === e
            }
        }), String.prototype.padStart || (String.prototype.padStart = function(t, e) {
            return t >>= 0, e = String(e || " "), this.length > t ? String(this) : ((t -= this.length) > e.length && (e += e.repeat(t / e.length)), e.slice(0, t) + String(this))
        })
    }, function(t, e) {
        var i;
        Element && !Element.prototype.matches && ((i = Element.prototype).matches = i.matchesSelector || i.mozMatchesSelector || i.msMatchesSelector || i.oMatchesSelector || i.webkitMatchesSelector), "classList" in SVGElement.prototype || Object.defineProperty(SVGElement.prototype, "classList", {
            get: function() {
                var i = this;
                return {
                    contains: function(t) {
                        return -1 !== i.className.baseVal.split(" ").indexOf(t)
                    },
                    add: function(t) {
                        return i.setAttribute("class", i.getAttribute("class") + " " + t)
                    },
                    remove: function(t) {
                        var e = i.getAttribute("class").replace(new RegExp("(\\s|^)".concat(t, "(\\s|$)"), "g"), "$2");
                        i.classList.contains(t) && i.setAttribute("class", e)
                    },
                    toggle: function(t) {
                        this.contains(t) ? this.remove(t) : this.add(t)
                    }
                }
            },
            configurable: !0
        });
        var n = Function.bind.call(Function.call, Array.prototype.reduce),
            o = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable),
            r = Function.bind.call(Function.call, Array.prototype.concat);
        Object.entries || (Object.entries = function(i) {
            return n(Object.keys(i), function(t, e) {
                return r(t, "string" == typeof e && o(i, e) ? [
                    [e, i[e]]
                ] : [])
            }, [])
        })
    }, function(t, e, i) {
        "use strict";
        i.r(e);
        var n, o = i(12),
            e = i(59),
            r = ["dhx_638523928_message", "undefined", "Please contact us at <a style='color: white;' href='mailto:contact@dhtmlx.com?subject=DHTMLX Licensing - Trial End' target='_blank'>contact@dhtmlx.com</a> or visit ", " target='_blank'>dhtmlx.com</a> in order to obtain a proper license.", "Your evaluation period for DHTMLX has expired.", "now", "1613198714000", "join", "<a style='color: white;' href='https://dhtmlx.com/docs/products/licenses.shtml?expand=1&utm_source=trial&utm_medium=popup&utm_campaign=second_month#suite'"];
        n = r,
            function(t) {
                for (; --t;) n.push(n.shift())
            }(150);

        function s(t, e) {
            return r[t -= 374]
        }
        setTimeout(function() {
            var t, e, i = s,
                n = [i(382), i(380), i(377) + i(381)][i(376)]("<br>");
            typeof i(375) !== i(379) && setInterval(function() {
                var t, e = i;
                t = i, 1577e8 < Date[t(374)]() - t(375) && Object(o.message)({
                    text: n,
                    icon: "dxi-close",
                    css: e(378)
                })
            }, (t = 6e4, e = 12e4, Math.floor(Math.random() * (e - t + 1)) + t))
        }, 1)
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = i(2),
            s = i(30),
            a = new WeakMap,
            l = new Map;

        function c(t, e) {
            var i = document.createElement("div");
            return i.setAttribute("data-position", e), i.className = "dhx_message-container dhx_message-container--" + e + (t === document.body ? " dhx_message-container--in-body" : ""), i
        }

        function u(t, e) {
            e && clearTimeout(a.get(t));
            var i = t.parentNode,
                n = i.getAttribute("data-position"),
                o = i.parentNode,
                e = l.get(o);
            e && (!(e = e[n]) || -1 !== (e = (n = e.stack).indexOf(t)) && (i.removeChild(t), n.splice(e, 1), 0 === n.length && o.removeChild(i)))
        }
        e.message = function(t) {
            "string" == typeof t && (t = {
                text: t
            }), t.position = t.position || s.MessageContainerPosition.topRight;
            var e = document.createElement("div");
            e.className = "dhx_widget dhx_message " + (t.css || ""), t.html ? e.innerHTML = t.html : e.innerHTML = '<span class="dhx_message__text">' + t.text + "</span>\n\t\t" + (t.icon ? '<span class="dhx_message__icon dxi ' + t.icon + '"></span>' : "");
            var i = t.node ? r.toNode(t.node) : document.body;
            "static" === getComputedStyle(i).position && (i.style.position = "relative"), (o = l.get(i)) ? o[t.position] || (o[t.position] = {
                stack: [],
                container: c(i, t.position)
            }) : l.set(i, ((n = {})[t.position] = {
                stack: [],
                container: c(i, t.position)
            }, n));
            var n = (o = l.get(i)[t.position]).stack,
                o = o.container;
            0 === n.length && i.appendChild(o), n.push(e), o.appendChild(e), t.expire && (t = setTimeout(function() {
                return u(e)
            }, t.expire), a.set(e, t)), e.onclick = function() {
                return u(e, !0)
            }
        }
    }, function(t, i, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var e = n(32),
                r = n(57);
            i.alert = function(i) {
                var n = i.buttons && i.buttons[0] ? i.buttons[0] : e.default.apply,
                    o = r.blockScreen(i.blockerCss);
                return new t(function(t) {
                    var e = document.createElement("div");
                    e.className = "dhx_widget dhx_alert " + (i.css || ""), e.innerHTML = "\n\t\t\t" + (i.header ? '<div class="dhx_alert__header"> ' + i.header + " </div>" : "") + "\n\t\t\t" + (i.text ? '<div class="dhx_alert__content">' + i.text + "</div>" : "") + '\n\t\t\t<div class="dhx_alert__footer ' + (i.buttonsAlignment ? "dhx_alert__footer--" + i.buttonsAlignment : "") + '">\n\t\t\t\t<button class="dhx_alert__apply-button dhx_button dhx_button--view_flat dhx_button--color_primary dhx_button--size_medium">' + n + "</button>\n\t\t\t</div>", document.body.appendChild(e), e.querySelector(".dhx_alert__apply-button").focus(), e.querySelector("button").addEventListener("click", function() {
                        o(), document.body.removeChild(e), t(!0)
                    })
                })
            }
        }).call(this, n(13))
    }, function(t, o, r) {
        (function(t) {
            var e = void 0 !== t && t || "undefined" != typeof self && self || window,
                i = Function.prototype.apply;

            function n(t, e) {
                this._id = t, this._clearFn = e
            }
            o.setTimeout = function() {
                return new n(i.call(setTimeout, e, arguments), clearTimeout)
            }, o.setInterval = function() {
                return new n(i.call(setInterval, e, arguments), clearInterval)
            }, o.clearTimeout = o.clearInterval = function(t) {
                t && t.close()
            }, n.prototype.unref = n.prototype.ref = function() {}, n.prototype.close = function() {
                this._clearFn.call(e, this._id)
            }, o.enroll = function(t, e) {
                clearTimeout(t._idleTimeoutId), t._idleTimeout = e
            }, o.unenroll = function(t) {
                clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
            }, o._unrefActive = o.active = function(t) {
                clearTimeout(t._idleTimeoutId);
                var e = t._idleTimeout;
                0 <= e && (t._idleTimeoutId = setTimeout(function() {
                    t._onTimeout && t._onTimeout()
                }, e))
            }, r(100), o.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate, o.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate
        }).call(this, r(31))
    }, function(t, e, i) {
        (function(t, p) {
            ! function(i, n) {
                "use strict";
                var o, r, s, a, l, c, e, u, t;

                function d(t) {
                    delete r[t]
                }

                function h(t) {
                    if (s) setTimeout(h, 0, t);
                    else {
                        var e = r[t];
                        if (e) {
                            s = !0;
                            try {
                                ! function(t) {
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
                                            e.apply(n, i)
                                    }
                                }(e)
                            } finally {
                                d(t), s = !1
                            }
                        }
                    }
                }

                function f(t) {
                    t.source === i && "string" == typeof t.data && 0 === t.data.indexOf(u) && h(+t.data.slice(u.length))
                }
                i.setImmediate || (o = 1, s = !(r = {}), a = i.document, t = (t = Object.getPrototypeOf && Object.getPrototypeOf(i)) && t.setTimeout ? t : i, l = "[object process]" === {}.toString.call(i.process) ? function(t) {
                    p.nextTick(function() {
                        h(t)
                    })
                } : function() {
                    if (i.postMessage && !i.importScripts) {
                        var t = !0,
                            e = i.onmessage;
                        return i.onmessage = function() {
                            t = !1
                        }, i.postMessage("", "*"), i.onmessage = e, t
                    }
                }() ? (u = "setImmediate$" + Math.random() + "$", i.addEventListener ? i.addEventListener("message", f, !1) : i.attachEvent("onmessage", f), function(t) {
                    i.postMessage(u + t, "*")
                }) : i.MessageChannel ? ((e = new MessageChannel).port1.onmessage = function(t) {
                    h(t.data)
                }, function(t) {
                    e.port2.postMessage(t)
                }) : a && "onreadystatechange" in a.createElement("script") ? (c = a.documentElement, function(t) {
                    var e = a.createElement("script");
                    e.onreadystatechange = function() {
                        h(t), e.onreadystatechange = null, c.removeChild(e), e = null
                    }, c.appendChild(e)
                }) : function(t) {
                    setTimeout(h, 0, t)
                }, t.setImmediate = function(t) {
                    "function" != typeof t && (t = new Function("" + t));
                    for (var e = new Array(arguments.length - 1), i = 0; i < e.length; i++) e[i] = arguments[i + 1];
                    return t = {
                        callback: t,
                        args: e
                    }, r[o] = t, l(o), o++
                }, t.clearImmediate = d)
            }("undefined" == typeof self ? void 0 === t ? this : t : self)
        }).call(this, i(31), i(101))
    }, function(t, e) {
        var i, n, t = t.exports = {};

        function o() {
            throw new Error("setTimeout has not been defined")
        }

        function r() {
            throw new Error("clearTimeout has not been defined")
        }

        function s(e) {
            if (i === setTimeout) return setTimeout(e, 0);
            if ((i === o || !i) && setTimeout) return i = setTimeout, setTimeout(e, 0);
            try {
                return i(e, 0)
            } catch (t) {
                try {
                    return i.call(null, e, 0)
                } catch (t) {
                    return i.call(this, e, 0)
                }
            }
        }! function() {
            try {
                i = "function" == typeof setTimeout ? setTimeout : o
            } catch (t) {
                i = o
            }
            try {
                n = "function" == typeof clearTimeout ? clearTimeout : r
            } catch (t) {
                n = r
            }
        }();
        var a, l = [],
            c = !1,
            u = -1;

        function d() {
            c && a && (c = !1, a.length ? l = a.concat(l) : u = -1, l.length && h())
        }

        function h() {
            if (!c) {
                var t = s(d);
                c = !0;
                for (var e = l.length; e;) {
                    for (a = l, l = []; ++u < e;) a && a[u].run();
                    u = -1, e = l.length
                }
                a = null, c = !1,
                    function(e) {
                        if (n === clearTimeout) return clearTimeout(e);
                        if ((n === r || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                        try {
                            n(e)
                        } catch (t) {
                            try {
                                return n.call(null, e)
                            } catch (t) {
                                return n.call(this, e)
                            }
                        }
                    }(t)
            }
        }

        function f(t, e) {
            this.fun = t, this.array = e
        }

        function p() {}
        t.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (1 < arguments.length)
                for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
            l.push(new f(t, e)), 1 !== l.length || c || s(h)
        }, f.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, t.title = "browser", t.browser = !0, t.env = {}, t.argv = [], t.version = "", t.versions = {}, t.on = p, t.addListener = p, t.once = p, t.off = p, t.removeListener = p, t.removeAllListeners = p, t.emit = p, t.prependListener = p, t.prependOnceListener = p, t.listeners = function(t) {
            return []
        }, t.binding = function(t) {
            throw new Error("process.binding is not supported")
        }, t.cwd = function() {
            return "/"
        }, t.chdir = function(t) {
            throw new Error("process.chdir is not supported")
        }, t.umask = function() {
            return 0
        }
    }, function(t, o, r) {
        "use strict";
        (function(e) {
            Object.defineProperty(o, "__esModule", {
                value: !0
            });
            var i = r(32),
                n = r(57);
            o.confirm = function(t) {
                t.buttonsAlignment = t.buttonsAlignment || "right";
                var s = t.buttons && t.buttons[1] ? t.buttons[1] : i.default.apply,
                    a = t.buttons && t.buttons[0] ? t.buttons[0] : i.default.reject,
                    l = n.blockScreen(t.blockerCss);
                return new e(function(e) {
                    function i(t) {
                        l(), n.removeEventListener("click", o), n.removeEventListener("keydown", r), document.body.removeChild(n), e(t)
                    }
                    var n = document.createElement("div"),
                        o = function(t) {
                            "BUTTON" === t.target.tagName && i(t.target.classList.contains("dhx_alert__confirm-aply"))
                        },
                        r = function(t) {
                            "Escape" !== t.key && "Esc" !== t.key || (n.querySelector(".dhx_alert__confirm-aply").focus(), i(t.target.classList.contains("dhx_alert__confirm-reject")))
                        };
                    n.className = "dhx_widget dhx_alert dhx_alert--confirm" + (t.css ? " " + t.css : ""), n.innerHTML = "\n\t\t" + (t.header ? '<div class="dhx_alert__header"> ' + t.header + " </div>" : "") + "\n\t\t" + (t.text ? '<div class="dhx_alert__content">' + t.text + "</div>" : "") + '\n\t\t\t<div class="dhx_alert__footer ' + (t.buttonsAlignment ? "dhx_alert__footer--" + t.buttonsAlignment : "") + '">\n\t\t\t\t<button class="dhx_alert__confirm-reject dhx_button dhx_button--view_link dhx_button--color_primary dhx_button--size_medium">' + a + '</button>\n\t\t\t\t<button class="dhx_alert__confirm-aply dhx_button dhx_button--view_flat dhx_button--color_primary dhx_button--size_medium">' + s + "</button>\n\t\t\t</div>", document.body.appendChild(n), n.querySelector(".dhx_alert__confirm-aply").focus(), n.addEventListener("click", o), n.addEventListener("keydown", r)
                })
            }
        }).call(this, r(13))
    }, function(t, e, i) {
        "use strict";
        i.r(e);
        var n, s = i(12),
            e = i(59),
            o = ["contact@dhtmlx.com</a> or visit <a style='color: #0288d1;text-decoration: unset;' href='https://dhtmlx.com/docs/products/licenses.shtml?expand=1&utm_source=trial&utm_medium=", "1613198714000", "https://dhtmlx.com/docs/products/licenses.shtml?expand=1&utm_source=trial&utm_medium=popup&utm_campaign=second_month#suite", "random", "popup&utm_campaign=second_month#suite' target='_blank'>dhtmlx.com</a> in order to obtain a proper license.", "<svg class='dhx_alert__header--icon' xmlns='http://www.w3.org/2000/sv' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' viewBox='0 0 24 24'><path d='M11,15H13V17H", "now", "right", "floor", "open", "_blank", "Please contact us at <a style='color: #0288d1;text-decoration: unset;' href='mailto:contact@dhtmlx.com?subject=DHTMLX Licensing - Trial End' target='_blank'>", "dhx_547239261_alert", "16.42 16.42,20 12,20Z'></path></svg><div class='dhx_alert__header--text'>Your evaluation period for DHTMLX has expired</div>"];
        n = o,
            function(t) {
                for (; --t;) n.push(n.shift())
            }(148);

        function a(t, e) {
            return o[t -= 257]
        }
        setTimeout(function() {
            var t, e, i, n = a,
                o = n(269) + "11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20," + n(263),
                r = n(261) + n(264) + n(268);
            void 0 !== n(265) && setInterval(function() {
                var t, e = n;
                t = n, 1577e8 < Date[t(270)]() - t(265) && Object(s.alert)({
                    header: o,
                    text: r,
                    buttonsAlignment: e(257),
                    buttons: ["check licensing"],
                    css: e(262)
                }).then(function() {
                    var t = e;
                    window[t(259)](t(266), t(260))
                })
            }, (t = 6e4, e = 12e4, i = n, Math[i(258)](Math[i(267)]() * (e - t + 1)) + t))
        }, 1)
    }, function(t, e) {
        var i, n = ["1613198714000", "random", "undefined", "floor", "now"];
        i = n,
            function(t) {
                for (; --t;) i.push(i.shift())
            }(179);

        function o(t, e) {
            return n[t -= 168]
        }
        setTimeout(function() {
            var t, e, i, n = o;
            typeof n(170) !== n(172) && setInterval(function() {
                var t;
                t = n, 1577e8 < Date[t(169)]() - t(170) && alert("Your evaluation period for DHTMLX has expired.\nPlease contact us at contact@dhtmlx.com or visit dhtmlx.com in order to obtain a proper license.")
            }, (t = 6e4, e = 12e4, i = n, Math[i(168)](Math[i(171)]() * (e - t + 1)) + t))
        }, 1)
    }, function(t, i, e) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            function(t) {
                for (var e in t) i.hasOwnProperty(e) || (i[e] = t[e])
            }(e(106));
        var n = e(5);
        i.dataDrivers = n.dataDriversPro, i.LazyDataProxy = n.LazyDataProxy;
        n = e(88);
        i.TreeGridCollection = n.TreeGridCollection;
        n = e(53);
        i.Grid = n.ProGrid;
        n = e(231);
        i.Pagination = n.Pagination;
        e = e(88);
        i.TreeGrid = e.TreeGrid
    }, function(t, o, e) {
        "use strict";
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), e(107);
        var i = e(33);
        o.cssManager = i.cssManager;
        var n = e(3);
        o.EventSystem = n.EventSystem;
        var r = e(0);
        o.awaitRedraw = r.awaitRedraw, o.resizeHandler = r.resizeHandler;
        var s = e(60);
        o.Uploader = s.Uploader;
        var a = e(5);
        o.DataCollection = a.DataCollection, o.TreeCollection = a.TreeCollection, o.DataProxy = a.DataProxy, o.dataDrivers = a.dataDrivers, o.ajax = a.ajax;
        var l = e(14);
        o.Layout = l.Layout;
        i = e(37);
        o.List = i.List;
        n = e(28);
        o.Calendar = n.Calendar;
        r = e(43);
        o.Colorpicker = r.Colorpicker;
        s = e(153);
        o.Chart = s.Chart;
        a = e(29);
        o.Combobox = a.Combobox;
        l = e(179);
        o.DataView = l.DataView;
        i = e(183);
        o.Form = i.Form;
        n = e(53);
        o.Grid = n.Grid;
        r = e(12);
        o.message = r.message, o.alert = r.alert, o.confirm = r.confirm, o.enableTooltip = r.enableTooltip, o.disableTooltip = r.disableTooltip, o.tooltip = r.tooltip;
        s = e(214);
        o.Menu = s.Menu, o.ContextMenu = s.ContextMenu;
        a = e(10);
        o.Popup = a.Popup;
        l = e(217);
        o.Ribbon = l.Ribbon;
        i = e(219);
        o.Sidebar = i.Sidebar;
        n = e(40);
        o.Slider = n.Slider;
        r = e(221);
        o.Tabbar = r.Tabbar;
        s = e(39);
        o.Timepicker = s.Timepicker;
        a = e(27);
        o.Toolbar = a.Toolbar;
        l = e(223);
        o.Tree = l.Tree;
        i = e(226);
        o.Window = i.Window;
        n = e(43), r = e(32), s = e(42), a = e(51), l = e(81), i = e(69), e = window;
        o.i18n = e.dhx && e.dhx.i18n ? e.dhx.i18 : {}, o.i18n.setLocale = function(t, e) {
            var i, n = o.i18n[t];
            for (i in e) n[i] = e[i]
        }, o.i18n.colorpicker = o.i18n.colorpicker || n.locale, o.i18n.message = o.i18n.message || r.default, o.i18n.calendar = o.i18n.calendar || s.default, o.i18n.combobox = o.i18n.combobox || a.default, o.i18n.form = o.i18n.form || l.default, o.i18n.timepicker = o.i18n.timepicker || i.default
    }, function(t, e, i) {}, function(t, e, i) {
        /**
         * Copyright (c) 2017, Leon Sorokin
         * All rights reserved. (MIT Licensed)
         *
         * domvm.js (DOM ViewModel)
         * A thin, fast, dependency-free vdom view layer
         * @preserve https://github.com/leeoniya/domvm (v3.2.6, micro build)
         */
        t.exports = function() {
            "use strict";
            var P = 1,
                l = 2,
                O = 3,
                M = 4,
                I = 5,
                t = typeof window !== "undefined",
                e, r = (t ? window : {}).requestAnimationFrame,
                c = {};

            function i() {}
            var p = Array.isArray;

            function u(t) {
                return t != null
            }

            function s(t) {
                return t != null && t.constructor === Object
            }

            function o(t, e, i, n) {
                t.splice.apply(t, [i, n].concat(e))
            }

            function a(t) {
                var e = typeof t;
                return e === "string" || e === "number"
            }

            function d(t) {
                return typeof t === "function"
            }

            function h(t) {
                return typeof t === "object" && d(t.then)
            }

            function f(t) {
                var e = arguments;
                for (var i = 1; i < e.length; i++)
                    for (var n in e[i]) t[n] = e[i][n];
                return t
            }

            function _(t, e, i) {
                var n;
                while (n = e.shift())
                    if (e.length === 0) t[n] = i;
                    else t[n] = t = t[n] || {}
            }

            function g(t, e) {
                var i = [];
                for (var n = e; n < t.length; n++) i.push(t[n]);
                return i
            }

            function v(t, e) {
                for (var i in t)
                    if (t[i] !== e[i]) return false;
                return true
            }

            function m(t, e) {
                var i = t.length;
                if (e.length !== i) return false;
                for (var n = 0; n < i; n++)
                    if (t[n] !== e[n]) return false;
                return true
            }

            function y(t) {
                if (!r) return t;
                var e, i, n;

                function o() {
                    e = 0;
                    t.apply(i, n)
                }
                return function() {
                    i = this;
                    n = arguments;
                    if (!e) e = r(o)
                }
            }

            function b(t, e, i) {
                return function() {
                    return t.apply(i, e)
                }
            }

            function w(t) {
                var e = t.slice();
                var i = [];
                i.push(0);
                var n;
                var o;
                for (var r = 0, s = t.length; r < s; ++r) {
                    var a = i[i.length - 1];
                    if (t[a] < t[r]) {
                        e[r] = a;
                        i.push(r);
                        continue
                    }
                    n = 0;
                    o = i.length - 1;
                    while (n < o) {
                        var l = (n + o) / 2 | 0;
                        if (t[i[l]] < t[r]) n = l + 1;
                        else o = l
                    }
                    if (t[r] < t[i[n]]) {
                        if (n > 0) e[r] = i[n - 1];
                        i[n] = r
                    }
                }
                n = i.length;
                o = i[n - 1];
                while (n-- > 0) {
                    i[n] = o;
                    o = e[o]
                }
                return i
            }

            function x(t, e) {
                var i = 0;
                var n = e.length - 1;
                var o;
                var r = n <= 2147483647 ? true : false;
                if (r)
                    while (i <= n) {
                        o = i + n >> 1;
                        if (e[o] === t) return o;
                        else if (e[o] < t) i = o + 1;
                        else n = o - 1
                    } else
                        while (i <= n) {
                            o = Math.floor((i + n) / 2);
                            if (e[o] === t) return o;
                            else if (e[o] < t) i = o + 1;
                            else n = o - 1
                        }
                return i == e.length ? null : i
            }

            function E(t) {
                return t[0] === "o" && t[1] === "n"
            }

            function C(t) {
                return t[0] === "_"
            }

            function S(t) {
                return t === "style"
            }

            function k(t) {
                t && t.el && t.el.offsetHeight
            }

            function D(t) {
                return t.node != null && t.node.el != null
            }

            function T(t, e) {
                switch (e) {
                    case "value":
                    case "checked":
                    case "selected":
                        return true
                }
                return false
            }

            function V(t) {
                t = t || c;
                while (t.vm == null && t.parent) t = t.parent;
                return t.vm
            }

            function H() {}
            var n = H.prototype = {
                constructor: H,
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
                _dead: false,
                _lis: false,
                idx: null,
                parent: null
            };

            function j(t) {
                var e = new H;
                e.type = l;
                e.body = t;
                return e
            }
            var L = {},
                F = /\[(\w+)(?:=(\w+))?\]/g;

            function A(t) {
                {
                    var e = L[t];
                    if (e == null) {
                        var i, n, o, r;
                        L[t] = e = {
                            tag: (i = t.match(/^[-\w]+/)) ? i[0] : "div",
                            id: (n = t.match(/#([-\w]+)/)) ? n[1] : null,
                            class: (o = t.match(/\.([-\w.]+)/)) ? o[1].replace(/\./g, " ") : null,
                            attrs: null
                        };
                        while (r = F.exec(t)) {
                            if (e.attrs == null) e.attrs = {};
                            e.attrs[r[1]] = r[2] || ""
                        }
                    }
                    return e
                }
            }
            var R = 1,
                z = 2,
                $ = 4,
                N = 8;

            function W(t, e, i, n) {
                var o = new H;
                o.type = P;
                if (u(n)) o.flags = n;
                o.attrs = e;
                var r = A(t);
                o.tag = r.tag;
                if (r.id || r.class || r.attrs) {
                    var s = o.attrs || {};
                    if (r.id && !u(s.id)) s.id = r.id;
                    if (r.class) {
                        o._class = r.class;
                        s.class = r.class + (u(s.class) ? " " + s.class : "")
                    }
                    if (r.attrs)
                        for (var a in r.attrs)
                            if (!u(s[a])) s[a] = r.attrs[a];
                    o.attrs = s
                }
                var l = o.attrs;
                if (u(l)) {
                    if (u(l._key)) o.key = l._key;
                    if (u(l._ref)) o.ref = l._ref;
                    if (u(l._hooks)) o.hooks = l._hooks;
                    if (u(l._data)) o.data = l._data;
                    if (u(l._flags)) o.flags = l._flags;
                    if (!u(o.key))
                        if (u(o.ref)) o.key = o.ref;
                        else if (u(l.id)) o.key = l.id;
                    else if (u(l.name)) o.key = l.name + (l.type === "radio" || l.type === "checkbox" ? l.value : "")
                }
                if (i != null) o.body = i;
                return o
            }

            function B(t, e, i) {
                var n = ["refs"].concat(e.split("."));
                _(t, n, i)
            }

            function G(t) {
                while (t = t.parent) t.flags |= R
            }

            function q(t, e, i, n) {
                if (t.type === I || t.type === M) return;
                t.parent = e;
                t.idx = i;
                t.vm = n;
                if (t.ref != null) B(V(t), t.ref, t);
                var o = t.hooks,
                    r = n && n.hooks;
                if (o && (o.willRemove || o.didRemove) || r && (r.willUnmount || r.didUnmount)) G(t);
                if (p(t.body)) U(t);
                else;
            }

            function U(t) {
                var e = t.body;
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    if (n === false || n == null) e.splice(i--, 1);
                    else if (p(n)) o(e, n, i--, 1);
                    else {
                        if (n.type == null) e[i] = n = j("" + n);
                        if (n.type === l)
                            if (n.body == null || n.body === "") e.splice(i--, 1);
                            else if (i > 0 && e[i - 1].type === l) {
                            e[i - 1].body += n.body;
                            e.splice(i--, 1)
                        } else q(n, t, i, null);
                        else q(n, t, i, null)
                    }
                }
            }
            var Y = {
                animationIterationCount: true,
                boxFlex: true,
                boxFlexGroup: true,
                boxOrdinalGroup: true,
                columnCount: true,
                flex: true,
                flexGrow: true,
                flexPositive: true,
                flexShrink: true,
                flexNegative: true,
                flexOrder: true,
                gridRow: true,
                gridColumn: true,
                order: true,
                lineClamp: true,
                borderImageOutset: true,
                borderImageSlice: true,
                borderImageWidth: true,
                fontWeight: true,
                lineHeight: true,
                opacity: true,
                orphans: true,
                tabSize: true,
                widows: true,
                zIndex: true,
                zoom: true,
                fillOpacity: true,
                floodOpacity: true,
                stopOpacity: true,
                strokeDasharray: true,
                strokeDashoffset: true,
                strokeMiterlimit: true,
                strokeOpacity: true,
                strokeWidth: true
            };

            function X(t, e) {
                return !isNaN(e) && !Y[t] ? e + "px" : e
            }

            function K(t, e) {
                var i = (t.attrs || c).style;
                var n = e ? (e.attrs || c).style : null;
                if (i == null || a(i)) t.el.style.cssText = i;
                else {
                    for (var o in i) {
                        var r = i[o];
                        if (n == null || r != null && r !== n[o]) t.el.style[o] = X(o, r)
                    }
                    if (n)
                        for (var s in n)
                            if (i[s] == null) t.el.style[s] = ""
                }
            }
            var J = [];

            function Z(t, e, i, n, o) {
                if (t != null) {
                    var r = i.hooks[e];
                    if (r)
                        if (e[0] === "d" && e[1] === "i" && e[2] === "d") o ? k(i.parent) && r(i, n) : J.push([r, i, n]);
                        else return r(i, n)
                }
            }

            function Q(t) {
                if (J.length) {
                    k(t.node);
                    var e;
                    while (e = J.shift()) e[0](e[1], e[2])
                }
            }
            var tt = t ? document : null;

            function et(t) {
                while (t._node == null) t = t.parentNode;
                return t._node
            }

            function it(t, e) {
                if (e != null) return tt.createElementNS(e, t);
                return tt.createElement(t)
            }

            function nt(t) {
                return tt.createTextNode(t)
            }

            function ot(t) {
                return tt.createComment(t)
            }

            function rt(t) {
                return t.nextSibling
            }

            function st(t) {
                return t.previousSibling
            }

            function at(t) {
                var e = t.vm;
                var i = e != null && Z(e.hooks, "willUnmount", e, e.data);
                var n = Z(t.hooks, "willRemove", t);
                if ((t.flags & R) === R && p(t.body))
                    for (var o = 0; o < t.body.length; o++) at(t.body[o]);
                return i || n
            }

            function lt(t, e, i) {
                var n = e._node,
                    o = n.vm;
                if (p(n.body))
                    if ((n.flags & R) === R)
                        for (var r = 0; r < n.body.length; r++) lt(e, n.body[r].el);
                    else ut(n);
                delete e._node;
                t.removeChild(e);
                Z(n.hooks, "didRemove", n, null, i);
                if (o != null) {
                    Z(o.hooks, "didUnmount", o, o.data, i);
                    o.node = null
                }
            }

            function ct(t, e) {
                var i = e._node;
                if (i._dead) return;
                var n = at(i);
                if (n != null && h(n)) {
                    i._dead = true;
                    n.then(b(lt, [t, e, true]))
                } else lt(t, e)
            }

            function ut(t) {
                var e = t.body;
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    delete n.el._node;
                    if (n.vm != null) n.vm.node = null;
                    if (p(n.body)) ut(n)
                }
            }

            function dt(t) {
                var e = t.el;
                if ((t.flags & R) === 0) {
                    p(t.body) && ut(t);
                    e.textContent = null
                } else {
                    var i = e.firstChild;
                    do {
                        var n = rt(i);
                        ct(e, i)
                    } while (i = n)
                }
            }

            function ht(t, e, i) {
                var n = e._node,
                    o = e.parentNode != null;
                var r = e === i || !o ? n.vm : null;
                if (r != null) Z(r.hooks, "willMount", r, r.data);
                Z(n.hooks, o ? "willReinsert" : "willInsert", n);
                t.insertBefore(e, i);
                Z(n.hooks, o ? "didReinsert" : "didInsert", n);
                if (r != null) Z(r.hooks, "didMount", r, r.data)
            }

            function ft(t, e, i) {
                ht(t, e, i ? rt(i) : null)
            }
            var pt = {};

            function _t(t) {
                f(pt, t)
            }

            function gt(t) {
                var e = this,
                    i = e,
                    n = g(arguments, 1).concat(i, i.data);
                do {
                    var o = e.onemit,
                        o = o ? o[t] : null;
                    if (o) {
                        o.apply(e, n);
                        break
                    }
                } while (e = e.parent());
                if (pt[t]) pt[t].apply(e, n)
            }
            var vt = i;

            function mt(t) {
                vt = t.onevent || vt;
                if (t.onemit) _t(t.onemit)
            }

            function yt(t, e, i) {
                t[e] = i
            }

            function bt(t, e, i, n, o) {
                var r = t.apply(o, e.concat([i, n, o, o.data]));
                o.onevent(i, n, o, o.data, e);
                vt.call(null, i, n, o, o.data, e);
                if (r === false) {
                    i.preventDefault();
                    i.stopPropagation()
                }
            }

            function wt(t) {
                var e = et(t.target);
                var i = V(e);
                var n = t.currentTarget._node.attrs["on" + t.type],
                    o, r;
                if (p(n)) {
                    o = n[0];
                    r = n.slice(1);
                    bt(o, r, t, e, i)
                } else
                    for (var s in n)
                        if (t.target.matches(s)) {
                            var a = n[s];
                            if (p(a)) {
                                o = a[0];
                                r = a.slice(1)
                            } else {
                                o = a;
                                r = []
                            }
                            bt(o, r, t, e, i)
                        }
            }

            function xt(t, e, i, n) {
                if (i === n) return;
                var o = t.el;
                if (i == null || d(i)) yt(o, e, i);
                else if (n == null) yt(o, e, wt)
            }

            function Et(t, e, i) {
                if (e[0] === ".") {
                    e = e.substr(1);
                    i = true
                }
                if (i) t.el[e] = "";
                else t.el.removeAttribute(e)
            }

            function Ct(t, e, i, n, o) {
                var r = t.el;
                if (i == null) !o && Et(t, e, false);
                else if (t.ns != null) r.setAttribute(e, i);
                else if (e === "class") r.className = i;
                else if (e === "id" || typeof i === "boolean" || n) r[e] = i;
                else if (e[0] === ".") r[e.substr(1)] = i;
                else r.setAttribute(e, i)
            }

            function St(t, e, i) {
                var n = t.attrs || c;
                var o = e.attrs || c;
                if (n === o);
                else {
                    for (var r in n) {
                        var s = n[r];
                        var a = T(t.tag, r);
                        var l = a ? t.el[r] : o[r];
                        if (s === l);
                        else if (S(r)) K(t, e);
                        else if (C(r));
                        else if (E(r)) xt(t, r, s, l);
                        else Ct(t, r, s, a, i)
                    }
                    for (var r in o) !(r in n) && !C(r) && Et(t, r, T(t.tag, r) || E(r))
                }
            }

            function kt(t, e, i, n) {
                if (t.type === M) {
                    e = t.data;
                    i = t.key;
                    n = t.opts;
                    t = t.view
                }
                return new qt(t, e, i, n)
            }

            function Pt(t) {
                for (var e = 0; e < t.body.length; e++) {
                    var i = t.body[e];
                    var n = i.type;
                    if (n <= O) ht(t.el, Ot(i));
                    else if (n === M) {
                        var o = kt(i.view, i.data, i.key, i.opts)._redraw(t, e, false);
                        n = o.node.type;
                        ht(t.el, Ot(o.node))
                    } else if (n === I) {
                        var o = i.vm;
                        o._redraw(t, e);
                        n = o.node.type;
                        ht(t.el, o.node.el)
                    }
                }
            }

            function Ot(t, e) {
                if (t.el == null)
                    if (t.type === P) {
                        t.el = e || it(t.tag, t.ns);
                        if (t.attrs != null) St(t, c, true);
                        if ((t.flags & N) === N) t.body.body(t);
                        if (p(t.body)) Pt(t);
                        else if (t.body != null && t.body !== "") t.el.textContent = t.body
                    } else if (t.type === l) t.el = e || nt(t.body);
                else if (t.type === O) t.el = e || ot(t.body);
                t.el._node = t;
                return t.el
            }

            function Mt(t, e) {
                return e[t.idx + 1]
            }

            function It(t, e) {
                return e[t.idx - 1]
            }

            function Dt(t) {
                return t.parent
            }
            window.lisMove = jt;
            var Tt = 1,
                Vt = 2;

            function Ht(l, c, u, d, h, f, p, _) {
                return function(t, e, i, n, o, r) {
                    var s, a;
                    if (n[d] != null) {
                        if ((s = n[d]._node) == null) {
                            n[d] = l(n[d]);
                            return
                        }
                        if (Dt(s) !== t) {
                            a = l(n[d]);
                            s.vm != null ? s.vm.unmount(true) : ct(e, n[d]);
                            n[d] = a;
                            return
                        }
                    }
                    if (n[h] == o) return Vt;
                    else if (n[h].el == null) {
                        u(e, Ot(n[h]), n[d]);
                        n[h] = c(n[h], i)
                    } else if (n[h].el === n[d]) {
                        n[h] = c(n[h], i);
                        n[d] = l(n[d])
                    } else if (!r && s === n[p]) {
                        a = n[d];
                        n[d] = l(a);
                        _(e, a, n[f]);
                        n[f] = a
                    } else {
                        if (r && n[d] != null) return jt(l, c, u, d, h, e, i, s, n);
                        return Tt
                    }
                }
            }

            function jt(t, e, i, n, o, r, s, a, l) {
                if (a._lis) {
                    i(r, l[o].el, l[n]);
                    l[o] = e(l[o], s)
                } else {
                    var c = x(a.idx, l.tombs);
                    a._lis = true;
                    var u = t(l[n]);
                    i(r, l[n], c != null ? s[l.tombs[c]].el : c);
                    if (c == null) l.tombs.push(a.idx);
                    else l.tombs.splice(c, 0, a.idx);
                    l[n] = u
                }
            }
            var Lt = Ht(rt, Mt, ht, "lftSib", "lftNode", "rgtSib", "rgtNode", ft),
                Ft = Ht(st, It, ft, "rgtSib", "rgtNode", "lftSib", "lftNode", ht);

            function At(t, e) {
                var i = e.body,
                    n = t.el,
                    o = t.body,
                    r = {
                        lftNode: o[0],
                        rgtNode: o[o.length - 1],
                        lftSib: (i[0] || c).el,
                        rgtSib: (i[i.length - 1] || c).el
                    };
                t: while (1) {
                    while (1) {
                        var s = Lt(t, n, o, r, null, false);
                        if (s === Tt) break;
                        if (s === Vt) break t
                    }
                    while (1) {
                        var a = Ft(t, n, o, r, r.lftNode, false);
                        if (a === Tt) break;
                        if (a === Vt) break t
                    }
                    Rt(t, n, o, r);
                    break
                }
            }

            function Rt(t, e, i, n) {
                var o = Array.prototype.slice.call(e.childNodes);
                var r = [];
                for (var s = 0; s < o.length; s++) {
                    var a = o[s]._node;
                    if (a.parent === t) r.push(a.idx)
                }
                var l = w(r).map(function(t) {
                    return r[t]
                });
                for (var c = 0; c < l.length; c++) i[l[c]]._lis = true;
                n.tombs = l;
                while (1) {
                    var u = Lt(t, e, i, n, null, true);
                    if (u === Vt) break
                }
            }

            function zt(t) {
                return t.el._node.parent !== t.parent
            }

            function $t(t, e, i) {
                return e[i]
            }

            function Nt(t, e, i) {
                for (; i < e.length; i++) {
                    var n = e[i];
                    if (n.vm != null) {
                        if (t.type === M && n.vm.view === t.view && n.vm.key === t.key || t.type === I && n.vm === t.vm) return n
                    } else if (!zt(n) && t.tag === n.tag && t.type === n.type && t.key === n.key && (t.flags & ~R) === (n.flags & ~R)) return n
                }
                return null
            }

            function Wt(t, e, i) {
                return e[e._keys[t.key]]
            }

            function Bt(t, e) {
                Z(e.hooks, "willRecycle", e, t);
                var i = t.el = e.el;
                var n = e.body;
                var o = t.body;
                i._node = t;
                if (t.type === l && o !== n) {
                    i.nodeValue = o;
                    return
                }
                if (t.attrs != null || e.attrs != null) St(t, e, false);
                var r = p(n);
                var s = p(o);
                var a = (t.flags & N) === N;
                if (r) {
                    if (s || a) Gt(t, e);
                    else if (o !== n)
                        if (o != null) i.textContent = o;
                        else dt(e)
                } else if (s) {
                    dt(e);
                    Pt(t)
                } else if (o !== n)
                    if (i.firstChild) i.firstChild.nodeValue = o;
                    else i.textContent = o;
                Z(e.hooks, "didRecycle", e, t)
            }

            function Gt(t, e) {
                var i = t.body,
                    n = i.length,
                    o = e.body,
                    r = o.length,
                    s = (t.flags & N) === N,
                    a = (t.flags & z) === z,
                    l = (t.flags & $) === $,
                    c = !a && t.type === P,
                    u = true,
                    d = l ? Wt : a || s ? $t : Nt;
                if (l) {
                    var h = {};
                    for (var f = 0; f < o.length; f++) h[o[f].key] = f;
                    o._keys = h
                }
                if (c && n === 0) {
                    dt(e);
                    if (s) t.body = [];
                    return
                }
                var p, _, g, v = 0,
                    m = false,
                    y = 0;
                if (s) {
                    var b = {
                        key: null
                    };
                    var w = Array(n)
                }
                for (var f = 0; f < n; f++) {
                    if (s) {
                        var x = false;
                        var E = null;
                        if (u) {
                            if (l) b.key = i.key(f);
                            p = d(b, o, y)
                        }
                        if (p != null) {
                            g = p.idx;
                            E = i.diff(f, p);
                            if (E === true) {
                                _ = p;
                                _.parent = t;
                                _.idx = f;
                                _._lis = false
                            } else x = true
                        } else x = true;
                        if (x) {
                            _ = i.tpl(f);
                            q(_, t, f);
                            _._diff = E != null ? E : i.diff(f);
                            if (p != null) Bt(_, p)
                        } else;
                        w[f] = _
                    } else {
                        var _ = i[f];
                        var C = _.type;
                        if (C <= O) {
                            if (p = u && d(_, o, y)) {
                                Bt(_, p);
                                g = p.idx
                            }
                        } else if (C === M) {
                            if (p = u && d(_, o, y)) {
                                g = p.idx;
                                var S = p.vm._update(_.data, t, f)
                            } else var S = kt(_.view, _.data, _.key, _.opts)._redraw(t, f, false);
                            C = S.node.type
                        } else if (C === I) {
                            var k = D(_.vm);
                            var S = _.vm._update(_.data, t, f, k);
                            C = S.node.type
                        }
                    }
                    if (!l && p != null) {
                        if (g === y) {
                            y++;
                            if (y === r && n > r) {
                                p = null;
                                u = false
                            }
                        } else m = true;
                        if (r > 100 && m && ++v % 10 === 0)
                            while (y < r && zt(o[y])) y++
                    }
                }
                if (s) t.body = w;
                c && At(t, e)
            }

            function qt(t, e, i, n) {
                var o = this;
                o.view = t;
                o.data = e;
                o.key = i;
                if (n) {
                    o.opts = n;
                    o.config(n)
                }
                var r = s(t) ? t : t.call(o, o, e, i, n);
                if (d(r)) o.render = r;
                else {
                    o.render = r.render;
                    o.config(r)
                }
                o._redrawAsync = y(function(t) {
                    return o.redraw(true)
                });
                o._updateAsync = y(function(t) {
                    return o.update(t, true)
                });
                o.init && o.init.call(o, o, o.data, o.key, n)
            }
            var Ut = qt.prototype = {
                constructor: qt,
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
                onevent: i,
                refs: null,
                render: null,
                mount: Yt,
                unmount: Xt,
                config: function(t) {
                    var e = this;
                    if (t.init) e.init = t.init;
                    if (t.diff) e.diff = t.diff;
                    if (t.onevent) e.onevent = t.onevent;
                    if (t.hooks) e.hooks = f(e.hooks || {}, t.hooks);
                    if (t.onemit) e.onemit = f(e.onemit || {}, t.onemit)
                },
                parent: function() {
                    return V(this.node.parent)
                },
                root: function() {
                    var t = this.node;
                    while (t.parent) t = t.parent;
                    return t.vm
                },
                redraw: function(t) {
                    var e = this;
                    t ? e._redraw(null, null, D(e)) : e._redrawAsync();
                    return e
                },
                update: function(t, e) {
                    var i = this;
                    e ? i._update(t, null, null, D(i)) : i._updateAsync(t);
                    return i
                },
                _update: Zt,
                _redraw: Jt,
                _redrawAsync: null,
                _updateAsync: null
            };

            function Yt(t, e) {
                var i = this;
                if (e) {
                    dt({
                        el: t,
                        flags: 0
                    });
                    i._redraw(null, null, false);
                    if (t.nodeName.toLowerCase() !== i.node.tag) {
                        Ot(i.node);
                        ht(t.parentNode, i.node.el, t);
                        t.parentNode.removeChild(t)
                    } else ht(t.parentNode, Ot(i.node, t), t)
                } else {
                    i._redraw(null, null);
                    if (t) ht(t, i.node.el)
                }
                if (t) Q(i);
                return i
            }

            function Xt(t) {
                var e = this;
                var i = e.node;
                var n = i.el.parentNode;
                ct(n, i.el);
                if (!t) Q(e)
            }

            function Kt(t, e, i, n) {
                if (i != null) {
                    i.body[n] = e;
                    e.idx = n;
                    e.parent = i;
                    e._lis = false
                }
                return t
            }

            function Jt(t, e, i) {
                var n = t == null;
                var o = this;
                var r = o.node && o.node.el && o.node.el.parentNode;
                var s = o.node,
                    a, l;
                if (o.diff != null) {
                    a = o._diff;
                    o._diff = l = o.diff(o, o.data);
                    if (s != null) {
                        var c = p(a) ? m : v;
                        var u = a === l || c(a, l);
                        if (u) return Kt(o, s, t, e)
                    }
                }
                r && Z(o.hooks, "willRedraw", o, o.data);
                var d = o.render.call(o, o, o.data, a, l);
                if (d === s) return Kt(o, s, t, e);
                o.refs = null;
                if (o.key != null && d.key !== o.key) d.key = o.key;
                o.node = d;
                if (t) {
                    q(d, t, e, o);
                    t.body[e] = d
                } else if (s && s.parent) {
                    q(d, s.parent, s.idx, o);
                    s.parent.body[s.idx] = d
                } else q(d, null, null, o);
                if (i !== false)
                    if (s)
                        if (s.tag !== d.tag || s.key !== d.key) {
                            s.vm = d.vm = null;
                            var h = s.el.parentNode;
                            var f = rt(s.el);
                            ct(h, s.el);
                            ht(h, Ot(d), f);
                            s.el = d.el;
                            d.vm = o
                        } else Bt(d, s);
                else Ot(d);
                r && Z(o.hooks, "didRedraw", o, o.data);
                if (n && r) Q(o);
                return o
            }

            function Zt(t, e, i, n) {
                var o = this;
                if (t != null)
                    if (o.data !== t) {
                        Z(o.hooks, "willUpdate", o, t);
                        o.data = t
                    } return o._redraw(e, i, n)
            }

            function Qt(t, e, i, n) {
                var o, r;
                if (i == null)
                    if (s(e)) o = e;
                    else r = e;
                else {
                    o = e;
                    r = i
                }
                return W(t, o, r, n)
            }
            var te = "http://www.w3.org/2000/svg";

            function ee(t, e, i, n) {
                var o = Qt(t, e, i, n);
                o.ns = te;
                return o
            }

            function ie(t) {
                var e = new H;
                e.type = O;
                e.body = t;
                return e
            }

            function ne(t, e, i, n) {
                this.view = t;
                this.data = e;
                this.key = i;
                this.opts = n
            }

            function oe(t, e, i, n) {
                return new ne(t, e, i, n)
            }

            function re(t) {
                this.vm = t
            }

            function se(t) {
                return new re(t)
            }

            function ae(t) {
                var e = new H;
                e.type = P;
                e.el = e.key = t;
                return e
            }

            function le(r, s) {
                var o = r.length;
                var a = {
                    items: r,
                    length: o,
                    key: function(t) {
                        return s.key(r[t], t)
                    },
                    diff: function(t, e) {
                        var i = s.diff(r[t], t);
                        if (e == null) return i;
                        var n = e._diff;
                        var o = i === n || p(n) ? m(i, n) : v(i, n);
                        return o || i
                    },
                    tpl: function(t) {
                        return s.tpl(r[t], t)
                    },
                    map: function(t) {
                        s.tpl = t;
                        return a
                    },
                    body: function(t) {
                        var e = Array(o);
                        for (var i = 0; i < o; i++) {
                            var n = a.tpl(i);
                            n._diff = a.diff(i);
                            e[i] = n;
                            q(n, t, i)
                        }
                        t.body = e
                    }
                };
                return a
            }
            ne.prototype = {
                constructor: ne,
                type: M,
                view: null,
                data: null,
                key: null,
                opts: null
            }, re.prototype = {
                constructor: re,
                type: I,
                vm: null
            };
            var ce = {
                config: mt,
                ViewModel: qt,
                VNode: H,
                createView: kt,
                defineElement: Qt,
                defineSvgElement: ee,
                defineText: j,
                defineComment: ie,
                defineView: oe,
                injectView: se,
                injectElement: ae,
                lazyList: le,
                FIXED_BODY: z,
                DEEP_REMOVE: R,
                KEYED_LIST: $,
                LAZY_LIST: N
            };

            function ue(t, e) {
                ! function(t, e, i) {
                    {
                        var n, o;
                        null != e.type ? null == t.vm && (q(e, t.parent, t.idx, null), Bt(t.parent.body[t.idx] = e, t), i && k(e), Q(V(e))) : ((n = Object.create(t)).attrs = f({}, t.attrs), o = f(t.attrs, e), null != t._class && (e = o.class, o.class = null != e && "" !== e ? t._class + " " + e : t._class), St(t, n), i && k(t))
                    }
                }(this, t, e)
            }

            function de(t, e, i) {
                if (null != e.type) null == t.vm && (q(e, t.parent, t.idx, null), Bt(t.parent.body[t.idx] = e, t), i && k(e), Q(V(e)));
                else {
                    var n = Object.create(t);
                    (n = Object.create(t)).attrs = f({}, t.attrs);
                    var o = f(t.attrs, e),
                        s;
                    null != t._class && (e = o.class, o.class = null != e && "" !== e ? t._class + " " + e : t._class), St(t, n), i && k(t)
                }
            }

            function he(t, e) {
                var i = t.body;
                if (p(i))
                    for (var n = 0; n < i.length; n++) {
                        var o = i[n];
                        if (o.vm != null) e.push(o.vm);
                        else he(o, e)
                    }
                return e
            }

            function fe(t) {
                var e = arguments;
                var i = e.length;
                var n, o;
                if (i > 1) {
                    var r = 1;
                    if (s(e[1])) {
                        o = e[1];
                        r = 2
                    }
                    if (i === r + 1 && (a(e[r]) || p(e[r]) || o && (o._flags & N) === N)) n = e[r];
                    else n = g(e, r)
                }
                return W(t, o, n)
            }

            function pe() {
                var t = fe.apply(null, arguments);
                return t.ns = te, t
            }
            return n.patch = function(t, e) {
                ! function(t, e, i) {
                    {
                        var n, o;
                        null != e.type ? null == t.vm && (q(e, t.parent, t.idx, null), Bt(t.parent.body[t.idx] = e, t), i && k(e), Q(V(e))) : ((n = Object.create(t)).attrs = f({}, t.attrs), o = f(t.attrs, e), null != t._class && (e = o.class, o.class = null != e && "" !== e ? t._class + " " + e : t._class), St(t, n), i && k(t))
                    }
                }(this, t, e)
            }, Ut.emit = function(t) {
                var e = this,
                    i = e,
                    n = g(arguments, 1).concat(i, i.data);
                do {
                    var o = e.onemit,
                        o = o ? o[t] : null;
                    if (o) {
                        o.apply(e, n);
                        break
                    }
                } while (e = e.parent());
                pt[t] && pt[t].apply(e, n)
            }, Ut.onemit = null, Ut.body = function() {
                return function t(e, i) {
                    var n = e.body;
                    if (p(n))
                        for (var o = 0; o < n.length; o++) {
                            var r = n[o];
                            null != r.vm ? i.push(r.vm) : t(r, i)
                        }
                    return i
                }(this.node, [])
            }, ce.defineElementSpread = fe, ce.defineSvgElementSpread = function() {
                var t = fe.apply(null, arguments);
                return t.ns = te, t
            }, ce
        }()
    }, function(t, i, n) {
        "use strict";
        (function(s) {
            var l = this && this.__assign || function() {
                return (l = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            };
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var c = n(17),
                u = n(16),
                t = (e.prototype.load = function(t, e) {
                    var i = this;
                    if (!t.config || this._parent.events.fire(u.DataEvents.beforeLazyLoad, [])) return this._parent.loadData = t.load().then(function(t) {
                        return t ? i.parse(t, e) : []
                    }).catch(function(t) {
                        i._parent.events.fire(u.DataEvents.loadError, [t])
                    })
                }, e.prototype.parse = function(t, e) {
                    var n = this;
                    if (void 0 === e && (e = "json"), "json" !== e || c.hasJsonOrArrayStructure(t) || this._parent.events.fire(u.DataEvents.loadError, ["Uncaught SyntaxError: Unexpected end of input"]), !((t = (e = c.toDataDriver(e)).toJsonArray(t)) instanceof Array)) {
                        var i = t.total_count - 1,
                            o = t.from;
                        if (t = t.data, 0 !== this._parent.getLength()) return t.forEach(function(t, e) {
                            var i = o + e,
                                e = n._parent.getId(i);
                            e ? (i = n._parent.getItem(e)) && i.$empty && (n._parent.changeId(e, t.id, !0), n._parent.update(t.id, l(l({}, t), {
                                $empty: void 0
                            }), !0)) : c.dhxWarning("item not found")
                        }), this._parent.events.fire(u.DataEvents.afterLazyLoad, [o, t.length]), this._parent.events.fire(u.DataEvents.change), t;
                        for (var r = [], s = 0, a = 0; s <= i; s++) o <= s && s <= o + t.length - 1 ? (r.push(t[a]), a++) : r.push({
                            $empty: !0
                        });
                        t = r
                    }
                    return this._parent.getInitialData() && this._parent.removeAll(), this._parent.$parse(t), t
                }, e.prototype.save = function(o) {
                    for (var r = this, e = this, t = 0, i = this._changes.order; t < i.length; t++) ! function(i) {
                        var n, t;
                        i.saving || i.pending ? c.dhxWarning("item is saving") : (n = e._findPrevState(i.id)) && n.saving ? (t = new s(function(t, e) {
                            n.promise.then(function() {
                                i.pending = !1, t(r._setPromise(i, o))
                            }).catch(function(t) {
                                r._removeFromOrder(n), r._setPromise(i, o), c.dhxWarning(t), e(t)
                            })
                        }), e._addToChain(t), i.pending = !0) : e._setPromise(i, o)
                    }(i[t]);
                    this._changes.order.length && this._parent.saveData.then(function() {
                        r._saving = !1
                    })
                }, e.prototype.updateChanges = function(t) {
                    this._changes = t
                }, e.prototype._setPromise = function(e, t) {
                    var i = this;
                    return e.promise = t.save(e.obj, e.status), e.promise.then(function() {
                        i._removeFromOrder(e)
                    }).catch(function(t) {
                        e.saving = !1, e.error = !0, c.dhxError(t)
                    }), e.saving = !0, this._saving = !0, this._addToChain(e.promise), e.promise
                }, e.prototype._addToChain = function(t) {
                    this._parent.saveData && this._saving ? this._parent.saveData = this._parent.saveData.then(function() {
                        return t
                    }) : this._parent.saveData = t
                }, e.prototype._findPrevState = function(t) {
                    for (var e = 0, i = this._changes.order; e < i.length; e++) {
                        var n = i[e];
                        if (n.id === t) return n
                    }
                    return null
                }, e.prototype._removeFromOrder = function(e) {
                    this._changes.order = this._changes.order.filter(function(t) {
                        return !c.isEqualObj(t, e)
                    })
                }, e);

            function e(t, e) {
                this._parent = t, this._changes = e
            }
            i.Loader = t
        }).call(this, n(13))
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(111);
        o.prototype.toJsonArray = function(t) {
            return this.getRows(t)
        }, o.prototype.toJsonObject = function(t) {
            var e;
            return "string" == typeof t && (e = this._fromString(t)),
                function t(e, i) {
                    i = i || {};
                    var n = e.attributes;
                    if (n && n.length)
                        for (var o = 0; o < n.length; o++) i[n[o].name] = n[o].value;
                    for (var r, s = e.childNodes, o = 0; o < s.length; o++) 1 === s[o].nodeType && (i[r = s[o].tagName] ? ("function" != typeof i[r].push && (i[r] = [i[r]]), i[r].push(t(s[o], {}))) : i[r] = t(s[o], {}));
                    return i
                }(e)
        }, o.prototype.serialize = function(t) {
            return n.jsonToXML(t)
        }, o.prototype.getFields = function(t) {
            return t
        }, o.prototype.getRows = function(t) {
            if ("string" == typeof t && (t = this._fromString(t)), t) {
                t = t.childNodes && t.childNodes[0] && t.childNodes[0].childNodes;
                return t && t.length ? this._getRows(t) : null
            }
            return []
        }, o.prototype._getRows = function(t) {
            for (var e = [], i = 0; i < t.length; i++) "item" === t[i].tagName && e.push(this._nodeToJS(t[i]));
            return e
        }, o.prototype._fromString = function(t) {
            try {
                return (new DOMParser).parseFromString(t, "text/xml")
            } catch (t) {
                return null
            }
        }, o.prototype._nodeToJS = function(t) {
            var e = {};
            if (this._haveAttrs(t))
                for (var i = t.attributes, n = 0; n < i.length; n++) {
                    var o = i[n],
                        r = o.name,
                        o = o.value;
                    e[r] = this._toType(o)
                }
            if (3 === t.nodeType) return e.value = e.value || this._toType(t.textContent), e;
            var s = t.childNodes;
            if (s)
                for (n = 0; n < s.length; n++) {
                    var a = s[n],
                        l = a.tagName;
                    l && ("items" === l && a.childNodes ? e[l] = this._getRows(a.childNodes) : this._haveAttrs(a) ? e[l] = this._nodeToJS(a) : e[l] = this._toType(a.textContent))
                }
            return e
        }, o.prototype._toType = function(t) {
            return "false" === t || "true" === t ? "true" === t : isNaN(t) ? t : Number(t)
        }, o.prototype._haveAttrs = function(t) {
            return t.attributes && t.attributes.length
        }, i = o;

        function o() {}
        e.XMLDriver = i
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = 4;

        function s(t) {
            return " ".repeat(t)
        }
        e.jsonToXML = function(t, e) {
            void 0 === e && (e = "root");
            for (var i = '<?xml version="1.0" encoding="iso-8859-1"?>\n<' + e + ">", n = 0; n < t.length; n++) i += "\n" + function e(t, i) {
                void 0 === i && (i = r);
                var n, o = s(i) + "<item>\n";
                for (n in t) Array.isArray(t[n]) ? (o += s(i + r) + "<" + n + ">\n", o += t[n].map(function(t) {
                    return e(t, i + 2 * r)
                }).join("\n") + "\n", o += s(i + r) + "</" + n + ">\n") : o += s(i + r) + ("<" + n + ">" + t[n]) + "</" + n + ">\n";
                return o += s(i) + "</item>"
            }(t[n]);
            return i + "\n</" + e + ">"
        }
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = i(17),
            i = (n.prototype.sort = function(t, e, i) {
                this._createSorter(e), i === e && (e = null), (i || e) && this._sort(t, i, e)
            }, n.prototype._createSorter = function(i) {
                var n = this;
                i && !i.rule && (i.rule = function(t, e) {
                    t = n._checkVal(i.as, t[i.by]), e = n._checkVal(i.as, e[i.by]);
                    return o.naturalCompare(t.toString(), e.toString())
                })
            }, n.prototype._checkVal = function(t, e) {
                return t ? t.call(this, e) : e
            }, n.prototype._sort = function(t, n, o) {
                var r = this,
                    s = {
                        asc: 1,
                        desc: -1
                    };
                return t.sort(function(t, e) {
                    var i = 0;
                    return n && (i = n.rule.call(r, t, e) * (s[n.dir] || s.asc)), 0 === i && o && (i = o.rule.call(r, t, e) * (s[o.dir] || s.asc)), i
                })
            }, n);

        function n() {}
        e.Sort = i
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(t, e)
            }, function(t, e) {
                function i() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }),
            r = this && this.__spreadArrays || function() {
                for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
                for (var n = Array(t), o = 0, e = 0; e < i; e++)
                    for (var r = arguments[e], s = 0, a = r.length; s < a; s++, o++) n[o] = r[s];
                return n
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var u = i(1),
            s = i(62),
            a = i(20),
            d = i(17),
            f = i(16);

        function l(t, e, i, n) {
            void 0 !== n && -1 !== n && t[i] && t[i][n] ? t[i].splice(n, 0, e) : (t[i] || (t[i] = []), t[i].push(e))
        }
        var c, o = (c = s.DataCollection, o(h, c), h.prototype.add = function(t, i, n) {
            var o = this;
            return void 0 === i && (i = -1), void 0 === n && (n = this._root), "object" != typeof t && (t = {
                value: t
            }), Array.isArray(t) ? t.map(function(t, e) {
                return o._add(t, i, n, e)
            }) : this._add(t, i, n)
        }, h.prototype.getRoot = function() {
            return this._root
        }, h.prototype.getParent = function(t, e) {
            if (void 0 === e && (e = !1), !this._pull[t]) return null;
            t = this._pull[t].parent;
            return e ? this._pull[t] : t
        }, h.prototype.getItems = function(t) {
            return this._childs && this._childs[t] ? this._childs[t] : []
        }, h.prototype.getLength = function(t) {
            return void 0 === t && (t = this._root), this._childs[t] ? this._childs[t].length : null
        }, h.prototype.removeAll = function(t) {
            if (t) {
                if (this._childs[t])
                    for (var e = 0, i = r(this._childs[t]); e < i.length; e++) {
                        var n = i[e];
                        this.remove(n.id)
                    }
            } else {
                c.prototype.removeAll.call(this);
                var o = this._root;
                this._initChilds = null, this._childs = ((t = {})[o] = [], t)
            }
        }, h.prototype.getIndex = function(e) {
            var t = this.getParent(e);
            return t && this._childs[t] ? u.findIndex(this._childs[t], function(t) {
                return t.id === e
            }) : -1
        }, h.prototype.sort = function(t) {
            var e = this;
            if (t) {
                for (var i in this._childs) this._sort.sort(this._childs[i], t);
                if (this._initChilds && Object.keys(this._initChilds).length)
                    for (var i in this._initChilds) this._sort.sort(this._initChilds[i], t)
            } else if (this._childs = {}, this._parse_data(Object.keys(this._pull).map(function(t) {
                    return e._pull[t]
                })), this._filters)
                for (var i in this._filters) {
                    var n = this._filters[i];
                    this.filter(n.rule, n.config)
                }
            this.events.fire(f.DataEvents.change)
        }, h.prototype.filter = function(t, e) {
            var n, o = this;
            void 0 === e && (e = {}), t ? (this._initChilds || (this._initChilds = this._childs), e.type = e.type || f.TreeFilterType.all, this._filters = {}, this._filters._ = {
                rule: t,
                config: e
            }, n = {}, this._recursiveFilter(t, e, this._root, 0, n), Object.keys(n).forEach(function(t) {
                for (var e = o.getParent(t), i = o.getItem(t); e;) n[e] || (n[e] = []), i && !n[e].find(function(t) {
                    return t.id === i.id
                }) && n[e].push(i), i = o.getItem(e), e = o.getParent(e)
            }), this._childs = n, this.events.fire(f.DataEvents.change)) : this.restoreOrder()
        }, h.prototype.restoreOrder = function() {
            this._initChilds && (this._childs = this._initChilds, this._initChilds = null), this.events.fire(f.DataEvents.change)
        }, h.prototype.copy = function(t, i, n, o) {
            var r = this;
            return void 0 === n && (n = this), void 0 === o && (o = this._root), t instanceof Array ? t.map(function(t, e) {
                return r._copy(t, i, n, o, e)
            }) : this._copy(t, i, n, o)
        }, h.prototype.move = function(t, i, n, o) {
            var r = this;
            return void 0 === n && (n = this), void 0 === o && (o = this._root), t instanceof Array ? t.map(function(t, e) {
                return r._move(t, i, n, o, e)
            }) : this._move(t, i, n, o)
        }, h.prototype.forEach = function(t, e, i) {
            if (void 0 === e && (e = this._root), void 0 === i && (i = 1 / 0), this.haveItems(e) && !(i < 1))
                for (var n = this._childs[e], o = 0; o < n.length; o++) t.call(this, n[o], o, n), this.haveItems(n[o].id) && this.forEach(t, n[o].id, --i)
        }, h.prototype.eachChild = function(t, e, i, n) {
            if (void 0 === i && (i = !0), void 0 === n && (n = function() {
                    return !0
                }), this.haveItems(t))
                for (var o = 0; o < this._childs[t].length; o++) e.call(this, this._childs[t][o], o), i && n(this._childs[t][o]) && this.eachChild(this._childs[t][o].id, e, i, n)
        }, h.prototype.getNearId = function(t) {
            return t
        }, h.prototype.loadItems = function(e, i) {
            var n = this;
            void 0 === i && (i = "json");
            var t = this.config.autoload + "?id=" + e;
            new a.DataProxy(t).load().then(function(t) {
                t = (i = d.toDataDriver(i)).toJsonArray(t), n._parse_data(t, e), n.events.fire(f.DataEvents.change)
            })
        }, h.prototype.refreshItems = function(t, e) {
            void 0 === e && (e = "json"), this.removeAll(t), this.loadItems(t, e)
        }, h.prototype.eachParent = function(t, e, i) {
            void 0 === i && (i = !1);
            t = this.getItem(t);
            t && (i && e.call(this, t), t.parent !== this._root && (i = this.getItem(t.parent), e.call(this, i), this.eachParent(t.parent, e)))
        }, h.prototype.haveItems = function(t) {
            return t in this._childs
        }, h.prototype.canCopy = function(e, t) {
            if (e === t) return !1;
            var i = !0;
            return this.eachParent(t, function(t) {
                return t.id === e ? i = !1 : null
            }), i
        }, h.prototype.serialize = function(t, e) {
            void 0 === t && (t = f.DataDriver.json);
            e = this._serialize(this._root, e), t = d.toDataDriver(t);
            if (t) return t.serialize(e)
        }, h.prototype.getId = function(t, e) {
            if (void 0 === e && (e = this._root), this._childs[e] && this._childs[e][t]) return this._childs[e][t].id
        }, h.prototype.map = function(t, e, i) {
            void 0 === e && (e = this._root), void 0 === i && (i = !0);
            var n = [];
            if (!this.haveItems(e)) return n;
            for (var o, r = 0; r < this._childs[e].length; r++) n.push(t.call(this, this._childs[e][r], r, this._childs)), i && (o = this.map(t, this._childs[e][r].id, i), n = n.concat(o));
            return n
        }, h.prototype.getRawData = function(t, e, i, n, o) {
            o = (o = o || this._root) === this._root ? c.prototype.getRawData.call(this, t, e, this._childs[o]) : this._childs[o];
            return 2 === n ? this.flatten(o) : o
        }, h.prototype.flatten = function(t) {
            var i = this,
                n = [];
            return t.forEach(function(t) {
                n.push(t);
                var e = i._childs[t.id];
                e && t.$opened && (n = n.concat(i.flatten(e)))
            }), n
        }, h.prototype._add = function(t, e, i, n) {
            void 0 === e && (e = -1), void 0 === i && (i = this._root), t.parent = t.parent ? t.parent.toString() : i, 0 < n && -1 !== e && (e += 1);
            e = c.prototype._add.call(this, t, e);
            if (Array.isArray(t.items))
                for (var o = 0, r = t.items; o < r.length; o++) {
                    var s = r[o];
                    this.add(s, -1, t.id)
                }
            return e
        }, h.prototype._copy = function(t, e, i, n, o) {
            if (void 0 === i && (i = this), void 0 === n && (n = this._root), !this.exists(t)) return null;
            var r = this._childs[t];
            if (o && (e = -1 === e ? -1 : e + o), i === this && !this.canCopy(t, n)) return null;
            o = d.copyWithoutInner(this.getItem(t), {
                items: !0
            });
            if (i.exists(t) && (o.id = u.uid()), d.isTreeCollection(i)) {
                if (this.exists(t) && (o.parent = n, i !== this && n === this._root && (o.parent = i.getRoot()), i.add(o, e), t = o.id), r)
                    for (var s = 0, a = r; s < a.length; s++) {
                        var l = a[s].id,
                            c = this.getIndex(l);
                        "string" == typeof t && this.copy(l, c, i, t)
                    }
                return t
            }
            i.add(o, e)
        }, h.prototype._move = function(t, e, i, n, o) {
            if (void 0 === i && (i = this), void 0 === n && (n = this._root), !this.exists(t)) return null;
            if (o && (e = -1 === e ? -1 : e + o), i !== this) {
                if (!d.isTreeCollection(i)) return i.add(d.copyWithoutInner(this.getItem(t)), e), void this.remove(t);
                var r = this.copy(t, e, i, n);
                return this.remove(t), r
            }
            if (!this.canCopy(t, n)) return null;
            i = this.getParent(t), r = this.getIndex(t), r = this._childs[i].splice(r, 1)[0];
            return r.parent = n, this._childs[i].length || delete this._childs[i], this.haveItems(n) || (this._childs[n] = []), -1 === e ? e = this._childs[n].push(r) : this._childs[n].splice(e, 0, r), this.events.fire(f.DataEvents.change, [t, "update", this.getItem(t)]), t
        }, h.prototype._reset = function(t) {
            if (t)
                for (var e = 0, i = r(this._childs[t]); e < i.length; e++) {
                    var n = i[e];
                    this.remove(n.id)
                } else {
                    c.prototype._reset.call(this);
                    var o = this._root;
                    this._initChilds = null, this._childs = ((t = {})[o] = [], t)
                }
        }, h.prototype._removeCore = function(e) {
            var t;
            this._pull[e] && (t = this.getParent(e), this._childs[t] = this._childs[t].filter(function(t) {
                return t.id !== e
            }), t === this._root || this._childs[t].length || delete this._childs[t], this._initChilds && this._initChilds[t] && (this._initChilds[t] = this._initChilds[t].filter(function(t) {
                return t.id !== e
            }), t === this._root || this._initChilds[t].length || delete this._initChilds[t]), this._fastDeleteChilds(this._childs, e), this._initChilds && this._fastDeleteChilds(this._initChilds, e))
        }, h.prototype._addToOrder = function(t, e, i) {
            var n = this._childs,
                o = this._initChilds,
                r = e.parent;
            l(n, this._pull[e.id] = e, r, i), o && l(o, e, r, i)
        }, h.prototype._parse_data = function(t, e) {
            void 0 === e && (e = this._root);
            for (var i = 0, n = t; i < n.length; i++) {
                var o = n[i];
                this.config.init && (o = this.config.init(o)), "object" != typeof o && (o = {
                    value: o
                }), o.id = o.id ? o.id.toString() : u.uid(), o.parent = void 0 === o.parent || o.parent && o.$items ? e : o.parent.toString(), this._pull[o.id] = o, this._childs[o.parent] || (this._childs[o.parent] = []), this._childs[o.parent].push(o), o.items && o.items instanceof Object && this._parse_data(o.items, o.id)
            }
        }, h.prototype._fastDeleteChilds = function(t, e) {
            if (this._pull[e] && delete this._pull[e], t[e]) {
                for (var i = 0; i < t[e].length; i++) this._fastDeleteChilds(t, t[e][i].id);
                delete t[e]
            }
        }, h.prototype._recursiveFilter = function(e, i, t, n, o) {
            var r = this,
                s = this._childs[t];
            if (s) {
                var a, l, c = function(t) {
                    switch (i.type) {
                        case f.TreeFilterType.all:
                            return !0;
                        case f.TreeFilterType.level:
                            return n === i.level;
                        case f.TreeFilterType.leafs:
                            return !r.haveItems(t.id)
                    }
                };
                "function" == typeof e ? (a = function(t) {
                    return c(t) && e(t)
                }, (l = s.filter(a)).length && (o[t] = l)) : e.by && e.match && (a = function(t) {
                    return c(t) && t[e.by] && -1 !== t[e.by].toString().toLowerCase().indexOf(e.match.toString().toLowerCase())
                }, (l = s.filter(a)).length && (o[t] = l));
                for (var u = 0, d = s; u < d.length; u++) {
                    var h = d[u];
                    this._recursiveFilter(e, i, h.id, n + 1, o)
                }
            }
        }, h.prototype._serialize = function(t, n) {
            var o = this;
            return void 0 === t && (t = this._root), this.map(function(t) {
                var e, i = {};
                for (e in t) "parent" !== e && "items" !== e && (i[e] = t[e]);
                return n && (i = n(i)), o.haveItems(t.id) && (i.items = o._serialize(t.id, n)), i
            }, t, !1)
        }, h);

        function h(t, e) {
            var i = c.call(this, t, e) || this;
            i._childs = {};
            e = i._root = t && t.rootId || "_ROOT_" + u.uid();
            return i._childs = ((t = {})[e] = [], t), i._initChilds = null, i
        }
        e.TreeCollection = o
    }, function(t, e, i) {
        "use strict";
        var h = this && this.__assign || function() {
            return (h = Object.assign || function(t) {
                for (var e, i = 1, n = arguments.length; i < n; i++)
                    for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t
            }).apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var f = i(2),
            p = i(115),
            _ = i(16),
            g = i(17);
        var n = (o.prototype.setItem = function(t, e) {
            p.collectionStore.setItem(t, e)
        }, o.prototype.onMouseDown = function(t, e, i) {
            var n, o, r, s;
            1 !== t.which && !t.targetTouches || (t.targetTouches ? (document.addEventListener("touchmove", this._onMouseMove, !1), document.addEventListener("touchend", this._onMouseUp, !1)) : (document.addEventListener("mousemove", this._onMouseMove), document.addEventListener("mouseup", this._onMouseUp)), o = (n = f.locateNode(t, "dhx_id")) && n.getAttribute("dhx_id"), r = f.locate(t, "dhx_widget_id"), e && e.includes(o) && 1 < e.length ? (this._transferData.source = e, this._itemsForGhost = i) : (this._transferData.source = [o], this._itemsForGhost = null), o && r && (e = (s = f.getBox(n)).left, i = s.top, s = (t.targetTouches ? t.targetTouches[0] : t).pageX, t = (t.targetTouches ? t.targetTouches[0] : t).pageY, this._transferData.initXOffset = s - e, this._transferData.initYOffset = t - i, this._transferData.x = s, this._transferData.y = t, this._transferData.componentId = r, this._transferData.start = o, this._transferData.item = n))
        }, o.prototype.isDrag = function() {
            return this._isDrag
        }, o.prototype._moveGhost = function(t, e) {
            this._transferData.ghost && (this._transferData.ghost.style.left = t - this._transferData.initXOffset + "px", this._transferData.ghost.style.top = e - this._transferData.initYOffset + "px")
        }, o.prototype._removeGhost = function() {
            document.body.removeChild(this._transferData.ghost)
        }, o.prototype._onDrop = function(t) {
            var e, i, n, o, r;
            this._canMove && (r = (o = this._transferData).start, i = o.source, e = o.target, n = o.dropComponentId, i = {
                start: r,
                source: i,
                target: e,
                dropPosition: o.dropPosition
            }, n = (o = p.collectionStore.getItem(n)) && o.config, o && "source" !== n.dragMode && o.events.fire(_.DragEvents.beforeDrop, [i, t]) && (o = {
                id: e,
                component: o
            }, r = {
                id: r,
                component: this._transferData.component
            }, this._move(r, o), o.component.events.fire(_.DragEvents.afterDrop, [i, t]))), this._endDrop(t)
        }, o.prototype._onDragStart = function(t, e, i) {
            var n = p.collectionStore.getItem(e),
                o = n.config,
                r = this._transferData,
                e = {
                    start: r.start,
                    source: r.source,
                    target: r.target
                };
            if ("target" === o.dragMode) return null;
            r = function(t, e, i) {
                void 0 === i && (i = !1);
                var n = t.getBoundingClientRect(),
                    o = document.createElement("div"),
                    r = t.cloneNode(!0);
                return r.style.width = n.width + "px", r.style.height = n.height + "px", r.style.maxHeight = n.height + "px", r.style.fontSize = window.getComputedStyle(t.parentElement).fontSize, r.style.opacity = "0.8", r.style.fontSize = window.getComputedStyle(t.parentElement).fontSize, i && e && e.length || o.appendChild(r), e && e.length && e.forEach(function(t, e) {
                    t = t.cloneNode(!0);
                    t.style.width = n.width + "px", t.style.height = n.height + "px", t.style.maxHeight = n.height + "px", t.style.top = 12 * (e + 1) - n.height - n.height * e + "px", t.style.left = 12 * (e + 1) + "px", t.style.opacity = "0.6", t.style.zIndex = "" + (-e - 1), o.appendChild(t)
                }), o.className = "dhx_drag-ghost", o
            }(this._transferData.item, this._itemsForGhost, "column" === o.dragItem);
            return n.events.fire(_.DragEvents.beforeDrag, [e, i, r]) && t ? (n.events.fire(_.DragEvents.dragStart, [e, i]), this._isDrag = !0, this._toggleTextSelection(!0), this._transferData.component = n, this._transferData.dragConfig = o, r) : null
        }, o.prototype._onDrag = function(t) {
            var e = (t.targetTouches ? t.targetTouches[0] : t).clientX,
                i = (t.targetTouches ? t.targetTouches[0] : t).clientY,
                n = document.elementFromPoint(e, i),
                o = f.locate(n, "dhx_widget_id");
            if (o) {
                var r = this._transferData,
                    s = r.dropComponentId,
                    a = r.start,
                    l = r.source,
                    c = r.target,
                    u = r.componentId,
                    d = r.dropPosition,
                    e = p.collectionStore.getItem(o),
                    i = f.locate(n, "dhx_id");
                if (!i) return this._cancelCanDrop(t), this._transferData.dropComponentId = o, this._transferData.target = null, void this._canDrop(t);
                if ("complex" === e.config.dropBehaviour) {
                    r = (n = (r = t).clientY, (r = f.locateNode(r)) ? (r = r.childNodes[0].getBoundingClientRect(), (n - r.top) / r.height) : null);
                    this._transferData.dropPosition = r <= .25 ? "top" : .75 <= r ? "bottom" : "in"
                } else if (c === i && s === o) return;
                s = {
                    id: a,
                    component: this._transferData.component
                };
                "source" !== e.config.dragMode && (s.component.events.fire(_.DragEvents.dragOut, [{
                    start: a,
                    source: l,
                    target: c
                }, t]), o !== u || !g.isTreeCollection(s.component.data) || g.isTreeCollection(s.component.data) && s.component.data.canCopy(s.id, i) ? (this._cancelCanDrop(t), this._transferData.target = i, this._transferData.dropComponentId = o, s.component.events.fire(_.DragEvents.dragIn, [{
                    start: a,
                    source: l,
                    target: c,
                    dropPosition: d
                }, t]) && this._canDrop(t)) : this._cancelCanDrop(t))
            } else this._canMove && this._cancelCanDrop(t)
        }, o.prototype._move = function(e, i) {
            var n = e.component.data,
                o = i.component.data,
                r = 0,
                s = i.id,
                t = g.isTreeCollection(o) ? i.component.config.dropBehaviour : void 0,
                a = e.component.config.columns ? e.component.config : void 0;
            if (a && ("complex" === a.dragItem || "column" === a.dragItem) && a.columns.map(function(t) {
                    return t.id
                }).filter(function(t) {
                    return t === e.id || t === i.id
                }).length && e.component === i.component && e.id !== i.id) {
                var l = e.component,
                    c = l.config.columns.map(function(t) {
                        return h({}, t)
                    }),
                    u = c.findIndex(function(t) {
                        return t.id === e.id
                    }),
                    a = c.findIndex(function(t) {
                        return t.id === i.id
                    });
                return c.splice(a, 0, c.splice(u, 1)[0]), l.setColumns(c), void l.paint()
            }
            switch (t) {
                case "child":
                    break;
                case "sibling":
                    s = o.getParent(s), r = o.getIndex(i.id) + 1;
                    break;
                case "complex":
                    var d = this._transferData.dropPosition;
                    "top" === d ? (s = o.getParent(s), r = o.getIndex(i.id)) : "bottom" === d && (s = o.getParent(s), r = o.getIndex(i.id) + 1);
                    break;
                default:
                    r = i.id ? e.component === i.component && o.getIndex(e.id) < o.getIndex(i.id) ? o.getIndex(i.id) - 1 : o.getIndex(i.id) : -1
            }
            this._transferData.dragConfig.dragCopy ? this._transferData.source instanceof Array && 1 < this._transferData.source.length ? this._transferData.source.map(function(t) {
                n.copy(t, r, o, s), -1 < r && r++
            }) : n.copy(e.id, r, o, s) : this._transferData.source instanceof Array && 1 < this._transferData.source.length ? this._transferData.source.map(function(t) {
                n.move(t, r, o, s), -1 < r && r++
            }) : n.move(e.id, r, o, s)
        }, o.prototype._endDrop = function(t) {
            var e;
            this._toggleTextSelection(!1), this._transferData.component && (e = {
                start: (e = this._transferData).start,
                source: e.source,
                target: e.target
            }, this._transferData.component.events.fire(_.DragEvents.afterDrag, [e, t])), this._cancelCanDrop(t), this._canMove = !0, this._transferData = {}, this._transferData.target = null, this._transferData.dropComponentId = null
        }, o.prototype._cancelCanDrop = function(t) {
            this._canMove = !1, this._isDrag = !1;
            var e = this._transferData,
                i = e.start,
                n = e.source,
                o = e.target,
                e = e.dropComponentId,
                n = {
                    start: i,
                    source: n,
                    target: o
                },
                e = p.collectionStore.getItem(e);
            e && o && e.events.fire(_.DragEvents.cancelDrop, [n, t]), this._transferData.dropComponentId = null, this._transferData.target = null
        }, o.prototype._canDrop = function(t) {
            this._canMove = !0;
            var e = this._transferData,
                i = {
                    start: e.start,
                    source: e.source,
                    target: e.target,
                    dropPosition: e.dropPosition
                },
                e = p.collectionStore.getItem(this._transferData.dropComponentId);
            e && this._transferData.target && e.events.fire(_.DragEvents.canDrop, [i, t])
        }, o.prototype._toggleTextSelection = function(t) {
            t ? document.body.classList.add("dhx_no-select") : document.body.classList.remove("dhx_no-select")
        }, o);

        function o() {
            var a = this;
            this._transferData = {}, this._canMove = !0, this._isDrag = !1, this._onMouseMove = function(t) {
                if (a._transferData.start) {
                    var e = (t.targetTouches ? t.targetTouches[0] : t).pageX,
                        i = (t.targetTouches ? t.targetTouches[0] : t).pageY,
                        n = a._transferData,
                        o = n.x,
                        r = n.y,
                        s = n.start,
                        n = n.componentId;
                    if (!a._transferData.ghost) {
                        if (Math.abs(o - e) < 3 && Math.abs(r - i) < 3) return;
                        n = a._onDragStart(s, n, t);
                        if (!n) return void a._endDrop(t);
                        a._transferData.ghost = n, document.body.appendChild(a._transferData.ghost)
                    }
                    a._moveGhost(e, i), a._onDrag(t)
                }
            }, this._onMouseUp = function(t) {
                a._transferData.x && (a._transferData.ghost ? (a._removeGhost(), a._onDrop(t)) : a._endDrop(t), t.targetTouches ? (document.removeEventListener("touchmove", a._onMouseMove), document.removeEventListener("touchend", a._onMouseUp)) : (document.removeEventListener("mousemove", a._onMouseMove), document.removeEventListener("mouseup", a._onMouseUp)))
            }
        }
        i = window.dhxHelpers = window.dhxHelpers || {};
        i.dragManager = i.dragManager || new n, e.dragManager = i.dragManager
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = (o.prototype.setItem = function(t, e) {
            this._store[t] = e
        }, o.prototype.getItem = function(t) {
            return this._store[t] || null
        }, o);

        function o() {
            this._store = {}
        }
        var r = window.dhxHelpers = window.dhxHelpers || {};
        r.collectionStore = r.collectionStore || new n, e.collectionStore = r.collectionStore
    }, function(t, l, c) {
        "use strict";
        (function(t) {
            var n, e = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(t, e)
            }, function(t, e) {
                function i() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            });
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var o, i = c(20),
                r = c(1),
                s = c(34),
                e = (o = i.DataProxy, e(a, o), a.prototype.load = function() {
                    var e = this;
                    return new t(function(t) {
                        e._timeout ? (clearTimeout(e._timeout), e._timeout = setTimeout(function() {
                            s.ajax.get(e.url, {
                                responseType: "text"
                            }).then(t), e._cooling = !0
                        }, e.config.delay), e._cooling && (t(null), e._cooling = !1)) : (s.ajax.get(e.url, {
                            responseType: "text"
                        }).then(t), e._cooling = !0, e._timeout = setTimeout(function() {}))
                    })
                }, a);

            function a(t, e) {
                var i = o.call(this, t) || this;
                return i.config = r.extend({
                    from: 0,
                    limit: 50,
                    delay: 50,
                    prepare: 0
                }, e), i.updateUrl(t, {
                    from: i.config.from,
                    limit: i.config.limit
                }), i
            }
            l.LazyDataProxy = e
        }).call(this, c(13))
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = i(3),
            n = i(21),
            r = i(16),
            i = (s.prototype.getId = function() {
                return this._selected
            }, s.prototype.getItem = function() {
                return this._selected ? this._data.getItem(this._selected) : null
            }, s.prototype.remove = function(t) {
                return !(t = t || this._selected) || !!this.events.fire(n.SelectionEvents.beforeUnSelect, [t]) && (this._data.update(t, {
                    $selected: !1
                }, !0), this._selected = null, this.events.fire(n.SelectionEvents.afterUnSelect, [t]), !0)
            }, s.prototype.add = function(t) {
                this._selected !== t && !this.config.disabled && this._data.exists(t) && (this.remove(), this._addSingle(t))
            }, s.prototype.enable = function() {
                this.config.disabled = !1
            }, s.prototype.disable = function() {
                this.remove(), this.config.disabled = !0
            }, s.prototype._addSingle = function(t) {
                this.events.fire(n.SelectionEvents.beforeSelect, [t]) && (this._selected = t, this._data.update(t, {
                    $selected: !0
                }, !0), this.events.fire(n.SelectionEvents.afterSelect, [t]))
            }, s);

        function s(t, e, i) {
            var n = this;
            this.events = i || new o.EventSystem(this), this._data = e, this.config = t, this._data.events.on(r.DataEvents.removeAll, function() {
                n._selected = null
            }), this._data.events.on(r.DataEvents.change, function() {
                var t;
                !n._selected || (t = n._data.getNearId(n._selected)) !== n._selected && (n._selected = null, t && n.add(t))
            })
        }
        e.Selection = i
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(t, e)
            }, function(t, e) {
                function i() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }),
            r = this && this.__assign || function() {
                return (r = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            },
            s = this && this.__spreadArrays || function() {
                for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
                for (var n = Array(t), o = 0, e = 0; e < i; e++)
                    for (var r = arguments[e], s = 0, a = r.length; s < a; s++, o++) n[o] = r[s];
                return n
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a, l = i(1),
            c = i(0),
            u = i(3),
            d = i(2),
            h = i(119),
            f = i(4),
            p = i(5),
            _ = i(14),
            g = i(12),
            v = i(27),
            m = i(18),
            y = i(36),
            b = i(25),
            w = i(61),
            x = i(136),
            E = i(137),
            C = i(138),
            S = i(139),
            o = (a = f.View, o(k, a), k.prototype.destructor = function() {
                this.toolbar.destructor(), this._readStack.stop(), this.uploader.unlinkDropArea(), this.uploader.abort()
            }, k.prototype.getRootView = function() {
                return this._layout.getRootView()
            }, k.prototype._initUI = function(t) {
                var e = this,
                    i = this.config.toolbar ? x.layoutConfig : x.layoutConfigWithoutTopbar;
                i.on = this._getDragEvents();
                t = this._layout = new _.Layout(t, i), i = this.toolbar = new v.Toolbar(null, {
                    css: "vault-toolbar"
                });
                this.toolbar.data.parse([{
                    id: "add",
                    tooltip: y.default.add,
                    type: "button",
                    icon: "dxi-plus"
                }, {
                    id: "upload",
                    tooltip: y.default.upload,
                    type: "button",
                    icon: "dxi icon-upload"
                }, {
                    id: "spacer",
                    type: "spacer"
                }, {
                    id: "remove-all",
                    tooltip: y.default.clearAll,
                    type: "button",
                    icon: "dxi-delete-forever"
                }]), this._hideUploadAndDeleteButtons(), this._vaultView = f.toViewLike(c.create({
                    render: function() {
                        return e._draw()
                    }
                })), this.config.toolbar && t.getCell("topbar").attach(i), t.getCell("vault").attach(this._vaultView)
            }, k.prototype._initHandlers = function() {
                var i = this;
                this._handlers = {
                    onclick: {
                        ".action-add": function() {
                            return i.uploader.selectFile()
                        },
                        ".action-remove-file": function(t) {
                            var e = d.locate(t);
                            e && (i.data.update(e, {
                                $toRemove: !0
                            }), setTimeout(function() {
                                i.data.update(e, {
                                    $toRemove: !1
                                }, !0), i.data.remove(e)
                            }, 200))
                        }
                    },
                    onmouseover: {
                        ".action-download": function(t) {
                            g.tooltip(y.default.download, {
                                node: t.target,
                                position: g.Position.bottom
                            })
                        },
                        ".action-remove-file": function(t) {
                            g.tooltip(y.default.clear, {
                                node: t.target,
                                position: g.Position.bottom
                            })
                        },
                        ".title-content, .dhx-file-name": function(t) {
                            var e = d.locate(t),
                                e = i.data.getItem(e);
                            g.tooltip(e.name, {
                                node: t.target,
                                position: g.Position.bottom,
                                css: "tooltip-light"
                            })
                        }
                    }
                }
            }, k.prototype._getDragEvents = function() {
                var o = this,
                    r = {
                        left: null,
                        top: null,
                        width: null,
                        height: null
                    };
                return {
                    dragleave: function(t) {
                        o._canDrop && (t.pageX > r.left + r.width - 1 || t.pageX < r.left || t.pageY > r.top + r.height - 1 || t.pageY < r.top) && (o._canDrop = !1, o.config.toolbar && o._layout.getCell("topbar").show(), o._layout.config.css = "vault-layout", o._layout.paint())
                    },
                    dragenter: function(t) {
                        if (t.preventDefault(), !o.uploader.isActive && !o._canDrop) {
                            for (var e = 0, i = t.dataTransfer.types; e < i.length; e++) {
                                var n = i[e];
                                if ("Files" !== n && "application/x-moz-file" !== n) return void(o._canDrop = !1)
                            }
                            o._canDrop = !0;
                            t = o.getRootView().node.el.getBoundingClientRect();
                            r.left = t.left + window.pageXOffset, r.top = t.top + window.pageYOffset, r.width = t.width, r.height = t.height, o._canDrop = !0, o.config.toolbar && o._layout.getCell("topbar").hide(), o._layout.config.css = "vault-layout dhx-dragin", o._layout.paint()
                        }
                    },
                    dragover: function(t) {
                        t.preventDefault()
                    },
                    drop: function(t) {
                        t.preventDefault(), o._canDrop && (t = t.dataTransfer, o.uploader.parseFiles(t), o._canDrop = !1, o.config.toolbar && o._layout.getCell("topbar").show(), o._layout.config.css = "vault-layout", o._layout.paint())
                    }
                }
            }, k.prototype._hideUploadAndDeleteButtons = function() {
                this.toolbar.hide(["upload", "remove-all"])
            }, k.prototype._showUploadAndDeleteButtons = function() {
                this.uploader.config.autosend ? this.toolbar.show("remove-all") : this.toolbar.show(["upload", "remove-all"])
            }, k.prototype._initEvents = function() {
                var e = this;
                this.data.events.on(p.DataEvents.change, function() {
                    e.data.getLength() ? e._showUploadAndDeleteButtons() : e._hideUploadAndDeleteButtons(), e._vaultView.paint()
                }), this.events.on(b.UploaderEvents.uploadBegin, function() {
                    e.config.toolbar && e._layout.getCell("topbar").attach(e._progressBar)
                }), this.events.on(b.UploaderEvents.uploadComplete, function() {
                    e.config.mode === b.VaultMode.grid && e.uploader.config.autosend && e._readStack.read(), e.config.toolbar && e._layout.getCell("topbar").attach(e.toolbar)
                }), this.toolbar.events.on(m.NavigationBarEvents.click, function(t) {
                    switch (t) {
                        case "add":
                            e.uploader.selectFile();
                            break;
                        case "remove-all":
                            e.data.removeAll();
                            break;
                        case "upload":
                            e.uploader.send()
                    }
                }), this.events.on(b.ProgressBarEvents.cancel, function() {
                    e.uploader.abort(), e._vaultView.paint()
                })
            }, k.prototype._draw = function() {
                var t = !this.data.getLength(),
                    e = this.config.mode === b.VaultMode.grid ? this._drawGrid() : this._drawList();
                return c.el("div", r(r({
                    class: "vault dhx_widget" + (this._canDrop ? " drop-here" : "")
                }, this._handlers), {
                    dhx_widget_id: this._uid
                }), [this._canDrop || t ? this._drawDropableArea() : this.config.customScroll ? this._scrollView.render(e) : e])
            }, k.prototype._getFileActions = function(t) {
                var e, i = [],
                    n = [],
                    o = [c.el(".dhx-default-actions", i), c.el(".dhx-hover-actions", n)];
                if (t.status === b.FileStatus.inprogress) return o;
                t.status !== b.FileStatus.failed && t.link && (e = (r = (this.config.downloadURL || "") + t.link).split("/").pop().split("?")[0], r = c.el("a", {
                    download: e,
                    class: "download-link",
                    href: r
                }, [c.el(".icon-btn.dxi.dxi-download.action-download")]), n.push(r));
                var r = c.el(".icon-btn.dxi.dxi-delete-forever.action-remove-file");
                return n.push(r), t.status === b.FileStatus.failed && (r = c.el(".dxi.dxi-alert-circle.warning-status"), i.push(r)), t.status === b.FileStatus.uploaded && (t = c.el(".dxi.dxi-checkbox-marked-circle.uploaded-status"), i.push(t)), o
            }, k.prototype._drawList = function() {
                var r = this;
                return c.el(".dhx-files-block.dhx-webkit-scroll", this.data.map(function(t) {
                    var e = t.status === b.FileStatus.failed && t.request,
                        i = t.status === b.FileStatus.inprogress,
                        n = t.status === b.FileStatus.queue,
                        o = t.status !== b.FileStatus.uploaded;
                    return c.el("div", {
                        class: "dhx-file-item" + (t.$toRemove ? " to-remove" : "") + (n ? " in-queue" : ""),
                        dhx_id: t.id,
                        _key: t.id
                    }, [c.el(".dhx-file-icon", [c.el("div", {
                        class: "dhx-file-type " + E.getFileClassName(t) + (o ? " not-loaded" : "")
                    })]), c.el(".dhx-file-title", [c.el(".dhx-title-content", t.name), c.el(".dhx-file-info", [e && c.el(".warn-message", t.request.statusText || y.default.error), i ? c.el(".progress-value", (100 * t.progress).toFixed(1) + "%") : c.el(".dhx-size" + (e ? ".dhx-size-error" : ""), E.getBasis(t.size))])]), i && c.el(".dhx-download-progress", {
                        style: {
                            width: (100 * t.progress).toFixed(1) + "%"
                        }
                    }), !i && c.el(".dhx-file-action", r._getFileActions(t))])
                }))
            }, k.prototype._drawDropableArea = function() {
                return c.el(".dhx-dropable-area.drop-files-here", [c.el(".dhx-big-icon-block", [c.el(".dxi.icon-upload")]), !this._canDrop && c.el(".drop-area-bold-text", y.default.dragAndDrop), !this._canDrop && c.el(".drop-area-bold-text", y.default.filesOrFoldersHere), !this._canDrop && c.el(".drop-area-light-text", y.default.or), !this._canDrop && c.el("button.dhx_btn.dhx_btn--flat.dhx_btn--small.action-add", y.default.browse)])
            }, k.prototype._drawGrid = function() {
                var l = this;
                return c.el("div", {
                    class: "dhx-files-grid dhx-webkit-scroll"
                }, [c.el(".dhx-grid-content", this.data.map(function(a) {
                    var t = a.status === b.FileStatus.inprogress,
                        e = a.status === b.FileStatus.queue,
                        i = a.status === b.FileStatus.failed;
                    return c.el("div", {
                        class: "dhx-file-grid-item" + (t ? " in-progress" : "") + (a.$toRemove ? " to-remove" : "") + (e ? " in-queue" : "") + (i ? " failed" : ""),
                        dhx_id: a.id,
                        _key: a.id
                    }, [c.el(".dhx-preview-wrapper", s([a.preview ? c.el(".dhx-server-file-preview", [c.el("img", {
                        src: a.preview
                    })]) : a.image ? c.el("canvas", {
                        width: 98 * l.config.scaleFactor,
                        height: 98 * l.config.scaleFactor,
                        _hooks: {
                            didInsert: function(t) {
                                var e = E.calculateCover(a.image),
                                    i = e.dx,
                                    n = e.dy,
                                    o = e.sx,
                                    r = e.sy,
                                    s = e.sHeight,
                                    e = e.sWidth;
                                t.el.getContext("2d").drawImage(a.image, o, r, e, s, i, n, 98 * l.config.scaleFactor, 98 * l.config.scaleFactor)
                            }
                        }
                    }) : c.el("div", {
                        class: "dhx-file-preview dhx-file-type " + E.getFileClassName(a)
                    }), t && l._drawCircle(a.progress)], l._getFileActions(a), [c.el(".dhx-file-info", [i && c.el(".warn-message", a.request.statusText || y.default.error), !t && c.el(".dhx-size" + (i ? ".dhx-size-error" : ""), E.getBasis(a.size))])])), c.el(".dhx-file-name", E.truncateWord(a.name))])
                }))])
            }, k.prototype._drawCircle = function(t) {
                return c.el(".progress-layout", [c.el(".progress-amount", (100 * t).toFixed(1) + "%"), c.sv("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "progress-circle",
                    viewBox: "0 0 60 60"
                }, [c.sv("circle", {
                    cx: 30,
                    cy: 30,
                    r: 28,
                    "stroke-width": 4,
                    class: "progress-bar-background"
                }), c.sv("circle.active-circle", {
                    cx: 30,
                    cy: 30,
                    r: 28,
                    "stroke-width": 4,
                    "stroke-dasharray": "175.9 175.9",
                    "stroke-dashoffset": 175.9 * (1 - t),
                    class: "progress-bar-active"
                })])])
            }, k);

        function k(t, e) {
            void 0 === e && (e = {});
            var n = a.call(this, null, l.extend({
                mode: b.VaultMode.list,
                toolbar: !0,
                updateFromResponse: !0,
                scaleFactor: 4,
                customScroll: !0,
                uploader: {},
                progressBar: {}
            }, e)) || this;
            return n.config.toolbar || (n.config.uploader.autosend = !0), e.data ? (n.data = e.data, n.events = e.data.events, n.events.context = n) : (n.events = new u.EventSystem(n), n.data = new p.DataCollection({}, n.events)), n.data.config.init = function(t) {
                return t.status = t.status || b.FileStatus.uploaded, t.file ? (t.size = t.file.size, t.name = t.file.name) : (t.size = t.size || 0, t.name = t.name || ""), n.config.mode === b.VaultMode.grid && t.file && E.isImage(t) && n._readStack.add(t, n.uploader.config.autosend), t
            }, n._readStack = new S.ReadStackPreview(n.data), n.uploader = new w.Uploader(n.config.uploader, n.data, n.events), n._scrollView = new h.ScrollView(function() {
                return n._vaultView.getRootView()
            }), n._progressBar = new C.ProgressBar(n.events, n.config.progressBar), n.events.on(b.UploaderEvents.uploadProgress, function(t, e, i) {
                return n._progressBar.setState(t, {
                    current: e,
                    total: i
                })
            }), n._initHandlers(), n._initUI(t), n._initEvents(), n
        }
        e.Vault = o
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(1),
            o = i(0),
            r = i(2),
            i = (s.prototype.render = function(t) {
                var e = this;
                return 0 === this._scrollWidth ? t : o.el(".scroll-view-wrapper", {
                    style: {
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                        position: "relative"
                    }
                }, [o.el(".scroll-view", {
                    onscroll: this._handlers.onscroll,
                    _ref: "scroll-view",
                    _hooks: {
                        didInsert: function() {
                            e._update()
                        },
                        didRecycle: function() {
                            e._update()
                        }
                    },
                    style: {
                        height: "100%",
                        width: "calc(100% + " + this._scrollWidth + "px)",
                        overflowY: "scroll",
                        "-ms-overflow-style": "scrollbar"
                    }
                }, [t]), o.el(".y-scroll", ((t = {
                    onmousedown: this._handlers.onmousedownTrack
                })[this._wheelName] = this._handlers[this._wheelName], t.style = {
                    width: "10px",
                    height: "100%",
                    right: 0,
                    top: 0,
                    position: "absolute"
                }, t), [o.el(".scroll-runner", {
                    _ref: "scroll-runner",
                    onmousedown: this._handlers.onmousedownRunner,
                    style: {
                        height: this._runnerHeight + "px",
                        right: "2px",
                        top: this._runnerTop,
                        width: "6px",
                        position: "absolute"
                    }
                })])])
            }, s.prototype._update = function() {
                var t, e = this._getRefs();
                e && (t = e.area, e = e.runner, this._visibleArea = t.clientHeight / t.scrollHeight, this._scrollTop = t.scrollTop, this._runnerTop = this._scrollTop * this._visibleArea, this._visibleArea < 1 ? this._runnerHeight = t.clientHeight * this._visibleArea : this._runnerHeight = 0, e.style.top = this._runnerTop + "px", e.style.height = this._runnerHeight + "px")
            }, s.prototype._getRefs = function() {
                var t = this._getRootView();
                if (t.refs && t.refs["scroll-view"] && t.refs["scroll-runner"]) return {
                    area: t.refs["scroll-view"].el,
                    runner: t.refs["scroll-runner"].el
                }
            }, s);

        function s(t, e) {
            var u = this;
            void 0 === e && (e = {}), this.config = n.extend({
                speed: 20
            }, e), this._wheelName = r.isIE() ? "onmousewheel" : "onwheel", this._getRootView = t, this._scrollTop = 0, this._runnerTop = 0, this._runnerHeight = 0, this._visibleArea = 1, this._scrollWidth = r.getScrollbarWidth(), this._handlers = ((t = {
                onscroll: function() {
                    u._update()
                }
            })[this._wheelName] = function(t) {
                t.preventDefault();
                var e = (0 < (t.deltaY || -t.wheelDelta) ? 1 : -1) * u.config.speed,
                    i = u._getRefs().area,
                    t = i.scrollHeight - u._runnerHeight,
                    e = u._scrollTop + e;
                i.scrollTop = e < 0 ? 0 : t < e ? t : e, u._update()
            }, t.onmousedownRunner = function(t) {
                t.preventDefault();

                function e(t) {
                    t = t.pageY - l, n.scrollTop = t <= r ? 0 : s < t ? a : (t - r) / u._visibleArea, u._update()
                }
                var i = u._getRefs(),
                    n = i.area,
                    o = i.runner,
                    i = n.getBoundingClientRect(),
                    r = i.top + window.pageYOffset,
                    s = i.bottom + window.pageYOffset,
                    a = n.scrollHeight - u._runnerHeight,
                    l = t.pageY - o.getBoundingClientRect().top - window.pageYOffset,
                    c = function() {
                        document.removeEventListener("mousemove", e), document.removeEventListener("mouseup", c), document.body.classList.remove("dhx-no-select")
                    };
                document.body.classList.add("dhx-no-select"), document.addEventListener("mousemove", e), document.addEventListener("mouseup", c)
            }, t.onmousedownTrack = function(t) {
                var e, i, n, o, r, s;
                t.target.classList.contains("scroll-runner") || (t.preventDefault(), e = u._getRefs().area, i = t.target.getBoundingClientRect().top + window.pageYOffset, n = e.scrollHeight - u._runnerHeight, o = t.pageY, (t = function() {
                    var t;
                    if (o < i + u._runnerTop)(t = u._scrollTop - e.clientHeight) < 0 && (t = 0);
                    else {
                        if (!(o > i + u._runnerTop + u._runnerHeight)) return;
                        t = u._scrollTop + e.clientHeight, n < t && (t = n)
                    }
                    e.scrollTop = t, u._update()
                })(), r = setInterval(t, 100), s = function() {
                    document.removeEventListener("mouseup", s), window.clearInterval(r)
                }, document.addEventListener("mouseup", s))
            }, t)
        }
        e.ScrollView = i
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r, s = i(121),
            a = i(26),
            l = i(0),
            o = (r = s.Cell, o(c, r), c.prototype.destructor = function() {
                this.forEach(function(t) {
                    t.getWidget() && "function" == typeof t.getWidget().destructor && t.getWidget().destructor()
                }), r.prototype.destructor.call(this)
            }, c.prototype.toVDOM = function() {
                if (this._isViewLayout) {
                    var t = [this.getCell(this.config.activeView).toVDOM()];
                    return r.prototype.toVDOM.call(this, t)
                }
                var e = [];
                return this._inheritTypes(), this._cells.forEach(function(t) {
                    t = t.toVDOM();
                    Array.isArray(t) ? e = e.concat(t) : e.push(t)
                }), r.prototype.toVDOM.call(this, e)
            }, c.prototype.removeCell = function(e) {
                if (this.events.fire(a.LayoutEvents.beforeRemove, [e])) {
                    var t = this.config.parent || this;
                    if (t !== this) return t.removeCell(e);
                    t = this.getCell(e);
                    t && (t = t.getParent(), delete this._all[e], t._cells = t._cells.filter(function(t) {
                        return t.id !== e
                    }), t.paint()), this.events.fire(a.LayoutEvents.afterRemove, [e])
                }
            }, c.prototype.addCell = function(t, e) {
                var i;
                void 0 === e && (e = -1), this.events.fire(a.LayoutEvents.beforeAdd, [t.id]) && (i = this._createCell(t), e < 0 && (e = this._cells.length + e + 1), this._cells.splice(e, 0, i), this.paint(), this.events.fire(a.LayoutEvents.afterAdd, [t.id]))
            }, c.prototype.getId = function(t) {
                return t < 0 && (t = this._cells.length + t), this._cells[t] ? this._cells[t].id : void 0
            }, c.prototype.getRefs = function(t) {
                return this._root.getRootView().refs[t]
            }, c.prototype.getCell = function(t) {
                return this._root._all[t]
            }, c.prototype.forEach = function(t, e, i) {
                if (void 0 === i && (i = 1 / 0), this._haveCells(e) && !(i < 1))
                    for (var n = (e ? this._root._all[e] : this._root)._cells, o = 0; o < n.length; o++) {
                        var r = n[o];
                        t.call(this, r, o, n), this._haveCells(r.id) && r.forEach(t, r.id, --i)
                    }
            }, c.prototype.cell = function(t) {
                return this.getCell(t)
            }, c.prototype._getCss = function(t) {
                var e = this._xLayout ? "dhx_layout-columns" : "dhx_layout-rows",
                    i = this.config.align ? " " + e + "--" + this.config.align : "";
                if (t) return e + " dhx_layout-cell" + (this.config.align ? " dhx_layout-cell--" + this.config.align : "");
                var n = this.config.parent ? r.prototype._getCss.call(this) : "dhx_widget dhx_layout",
                    t = this.config.parent ? "" : " dhx_layout-cell";
                return n + (this.config.full ? t : " " + e) + i
            }, c.prototype._parseConfig = function() {
                var e = this,
                    t = this.config,
                    i = t.rows || t.cols || t.views || [];
                this._xLayout = !t.rows, this._cells = i.map(function(t) {
                    return e._createCell(t)
                })
            }, c.prototype._createCell = function(t) {
                var e = t.rows || t.cols || t.views ? (t.parent = this._root, new c(this, t)) : new s.Cell(this, t);
                return this._root._all[e.id] = e, t.init && t.init(e, t), e
            }, c.prototype._haveCells = function(t) {
                if (t) {
                    t = this._root._all[t];
                    return t._cells && 0 < t._cells.length
                }
                return 0 < Object.keys(this._all).length
            }, c.prototype._inheritTypes = function(t) {
                var e, i = this;
                void 0 === t && (t = this._cells), Array.isArray(t) ? t.forEach(function(t) {
                    return i._inheritTypes(t)
                }) : ((e = t.config).rows || e.cols) && (t = t.getParent(), !e.type && t && (t.config.type ? e.type = t.config.type : this._inheritTypes(t)))
            }, c);

        function c(t, e) {
            var i = r.call(this, t, e) || this;
            return i._root = i.config.parent || i, i._all = {}, i._parseConfig(), i.config.activeTab && (i.config.activeView = i.config.activeTab), i.config.views && (i.config.activeView = i.config.activeView || i._cells[0].id, i._isViewLayout = !0), e.parent || (e = l.create({
                render: function() {
                    return i.toVDOM()
                }
            }, i), i.mount(t, e)), i
        }
        e.Layout = o
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(t, e)
            }, function(t, e) {
                function i() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }),
            c = this && this.__assign || function() {
                return (c = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r, m = i(1),
            u = i(0),
            s = i(4),
            l = i(26),
            d = i(122),
            a = i(3),
            h = i(33),
            o = (r = s.View, o(f, r), f.prototype.paint = function() {
                var t;
                this.isVisible() && ((t = this.getRootView()) ? t.redraw() : this._parent.paint())
            }, f.prototype.isVisible = function() {
                if (!this._parent) return !(!this._container || !this._container.tagName) || Boolean(this.getRootNode());
                var t = this._parent.config.activeView;
                return (!t || t === this.id) && (!this.config.hidden && (!this._parent || this._parent.isVisible()))
            }, f.prototype.hide = function() {
                this.events.fire(l.LayoutEvents.beforeHide, [this.id]) && (this.config.hidden = !0, this._parent && this._parent.paint && this._parent.paint(), this.events.fire(l.LayoutEvents.afterHide, [this.id]))
            }, f.prototype.show = function() {
                this.events.fire(l.LayoutEvents.beforeShow, [this.id]) && (this._parent && this._parent.config && void 0 !== this._parent.config.activeView ? this._parent.config.activeView = this.id : this.config.hidden = !1, this._parent && !this._parent.isVisible() && this._parent.show(), this.paint(), this.events.fire(l.LayoutEvents.afterShow, [this.id]))
            }, f.prototype.expand = function() {
                this.events.fire(l.LayoutEvents.beforeExpand, [this.id]) && (this.config.collapsed = !1, this.events.fire(l.LayoutEvents.afterExpand, [this.id]), this.paint())
            }, f.prototype.collapse = function() {
                this.events.fire(l.LayoutEvents.beforeCollapse, [this.id]) && (this.config.collapsed = !0, this.events.fire(l.LayoutEvents.afterCollapse, [this.id]), this.paint())
            }, f.prototype.toggle = function() {
                this.config.collapsed ? this.expand() : this.collapse()
            }, f.prototype.getParent = function() {
                return this._parent
            }, f.prototype.destructor = function() {
                this.config = null, this.unmount()
            }, f.prototype.getWidget = function() {
                return this._ui
            }, f.prototype.getCellView = function() {
                return this._parent && this._parent.getRefs(this._uid)
            }, f.prototype.attach = function(t, e) {
                return this.config.html = null, "object" == typeof t ? this._ui = t : "string" == typeof t ? this._ui = new window.dhx[t](null, e) : "function" == typeof t && (t.prototype instanceof s.View ? this._ui = new t(null, e) : this._ui = {
                    getRootView: function() {
                        return t(e)
                    }
                }), this.paint(), this._ui
            }, f.prototype.attachHTML = function(t) {
                this.config.html = t, this.paint()
            }, f.prototype.toVDOM = function(t) {
                if (null === this.config && (this.config = {}), !this.config.hidden) {
                    var e, i = this._calculateStyle(),
                        n = m.isDefined(this.config.padding) ? isNaN(Number(this.config.padding)) ? {
                            padding: this.config.padding
                        } : {
                            padding: this.config.padding + "px"
                        } : "",
                        o = this.config.full || this.config.html ? i : c(c({}, i), n),
                        i = this._cssManager.add(o, "dhx_cell-style__" + this._uid);
                    this.config.html || (e = this._ui ? ((r = this._ui.getRootView()).render && (r = u.inject(r)), [r]) : t || null);
                    var r = !this.config.resizable || this._isLastCell() || this.config.collapsed ? null : u.el(".dhx_layout-resizer." + (this._isXDirection() ? "dhx_layout-resizer--x" : "dhx_layout-resizer--y"), c(c({}, this._resizerHandlers), {
                            _ref: "resizer_" + this._uid
                        }), [u.el("span.dhx_layout-resizer__icon", {
                            class: "dxi " + (this._isXDirection() ? "dxi-dots-vertical" : "dxi-dots-horizontal")
                        })]),
                        s = {};
                    if (this.config.on)
                        for (var a in this.config.on) s["on" + a] = this.config.on[a];
                    var l = "",
                        t = this.config.cols || this.config.rows;
                    if (this.config.type && t) switch (this.config.type) {
                        case "line":
                            l = " dhx_layout-line";
                            break;
                        case "wide":
                            l = " dhx_layout-wide";
                            break;
                        case "space":
                            l = " dhx_layout-space"
                    }
                    n = u.el("div", c(c(((t = {
                        _key: this._uid,
                        _ref: this._uid
                    })["aria-labelledby"] = this.config.id ? "tab-content-" + this.config.id : null, t), s), {
                        class: this._getCss(!1) + (this.config.css ? " " + this.config.css : "") + (o ? " " + i : "") + (this.config.collapsed ? " dhx_layout-cell--collapsed" : "") + (this.config.resizable ? " dhx_layout-cell--resizable" : "") + (this.config.type && !this.config.full ? l : "")
                    }), this.config.full ? [u.el("div", {
                        tabindex: this.config.collapsable ? "0" : "-1",
                        class: "dhx_layout-cell-header" + (this._isXDirection() ? " dhx_layout-cell-header--col" : " dhx_layout-cell-header--row") + (this.config.collapsable ? " dhx_layout-cell-header--collapseble" : "") + (this.config.collapsed ? " dhx_layout-cell-header--collapsed" : "") + (((this.getParent() || {}).config || {}).isAccordion ? " dhx_layout-cell-header--accordion" : ""),
                        style: {
                            height: this.config.headerHeight
                        },
                        onclick: this._handlers.toggle,
                        onkeydown: this._handlers.enterCollapse
                    }, [this.config.headerIcon && u.el("span.dhx_layout-cell-header__icon", {
                        class: this.config.headerIcon
                    }), this.config.headerImage && u.el(".dhx_layout-cell-header__image-wrapper", [u.el("img", {
                        src: this.config.headerImage,
                        class: "dhx_layout-cell-header__image"
                    })]), this.config.header && u.el("h3.dhx_layout-cell-header__title", this.config.header), this.config.collapsable ? u.el("div.dhx_layout-cell-header__collapse-icon", {
                        class: this._getCollapseIcon()
                    }) : u.el("div.dhx_layout-cell-header__collapse-icon", {
                        class: "dxi dxi-empty"
                    })]), this.config.collapsed ? null : u.el("div", {
                        style: c(c({}, n), {
                            height: "calc(100% - " + (this.config.headerHeight || 37) + "px)"
                        }),
                        ".innerHTML": this.config.html,
                        class: this._getCss(!0) + " dhx_layout-cell-content" + (this.config.type ? l : "")
                    }, e)] : !this.config.html || this.config.rows && this.config.cols && this.config.views ? e : [u.el(".dhx_layout-cell-content", {
                        ".innerHTML": this.config.html,
                        style: n
                    })]);
                    return r ? [n, r] : n
                }
            }, f.prototype._getCss = function(t) {
                return "dhx_layout-cell"
            }, f.prototype._initHandlers = function() {
                function e(t) {
                    if (s.isActive) {
                        var e = (t.targetTouches ? t.targetTouches[0] : t).clientX,
                            t = (t.targetTouches ? t.targetTouches[0] : t).clientY,
                            i = s.xLayout ? e - s.range.min + window.pageXOffset : t - s.range.min + window.pageYOffset,
                            n = s.xLayout ? "width" : "height";
                        switch (i < 0 ? i = s.resizerLength / 2 : i > s.size && (i = s.size - s.resizerLength), s.mode) {
                            case l.resizeMode.pixels:
                                r.config[n] = i - s.resizerLength / 2 + "px", s.nextCell.config[n] = s.size - i - s.resizerLength / 2 + "px";
                                break;
                            case l.resizeMode.mixedpx1:
                                r.config[n] = i - s.resizerLength / 2 + "px";
                                break;
                            case l.resizeMode.mixedpx2:
                                s.nextCell.config[n] = s.size - i - s.resizerLength / 2 + "px";
                                break;
                            case l.resizeMode.percents:
                                r.config[n] = i / s.size * s.percentsum + "%", s.nextCell.config[n] = (s.size - i) / s.size * s.percentsum + "%";
                                break;
                            case l.resizeMode.mixedperc1:
                                r.config[n] = i / s.size * s.percentsum + "%";
                                break;
                            case l.resizeMode.mixedperc2:
                                s.nextCell.config[n] = (s.size - i) / s.size * s.percentsum + "%";
                                break;
                            case l.resizeMode.unknown:
                                r.config[n] = i - s.resizerLength / 2 + "px", s.nextCell.config[n] = s.size - i - s.resizerLength / 2 + "px", r.config.$fixed = !0
                        }
                        r.paint(), r.events.fire(l.LayoutEvents.resize, [r.id])
                    }
                }

                function i(t) {
                    var e, i, n, o;
                    t.targetTouches && t.preventDefault(), 3 !== t.which && (s.isActive && a(t), r.events.fire(l.LayoutEvents.beforeResizeStart, [r.id]) && (document.body.classList.add("dhx_no-select--resize"), i = r.getCellView(), n = (e = r._getNextCell()).getCellView(), t = r._getResizerView(), i = i.el.getBoundingClientRect(), t = t.el.getBoundingClientRect(), n = n.el.getBoundingClientRect(), s.xLayout = r._isXDirection(), s.left = i.left + window.pageXOffset, s.top = i.top + window.pageYOffset, s.margin = d.getMarginSize(r.getParent().config, s.xLayout), s.range = d.getBlockRange(i, n, s.xLayout), s.size = s.range.max - s.range.min - s.margin, s.isActive = !0, s.nextCell = e, s.resizerLength = s.xLayout ? t.width : t.height, s.mode = d.getResizeMode(s.xLayout, r.config, e.config), s.mode === l.resizeMode.percents && (o = s.xLayout ? "width" : "height", s.percentsum = parseFloat(r.config[o].slice(0, -1)) + parseFloat(e.config[o].slice(0, -1))), s.mode === l.resizeMode.mixedperc1 && (o = s.xLayout ? "width" : "height", s.percentsum = 1 / (i[o] / (s.size - s.resizerLength)) * parseFloat(r.config[o].slice(0, -1))), s.mode === l.resizeMode.mixedperc2 && (o = s.xLayout ? "width" : "height", s.percentsum = 1 / (n[o] / (s.size - s.resizerLength)) * parseFloat(e.config[o]))))
                }
                var r = this,
                    s = {
                        left: null,
                        top: null,
                        isActive: !(this._handlers = {
                            enterCollapse: function(t) {
                                13 === t.keyCode && r._handlers.toggle()
                            },
                            collapse: function() {
                                r.config.collapsable && r.collapse()
                            },
                            expand: function() {
                                r.config.collapsable && r.expand()
                            },
                            toggle: function() {
                                r.config.collapsable && r.toggle()
                            }
                        }),
                        range: null,
                        xLayout: null,
                        nextCell: null,
                        size: null,
                        resizerLength: null,
                        mode: null,
                        percentsum: null,
                        margin: null
                    },
                    a = function(t) {
                        s.isActive = !1, document.body.classList.remove("dhx_no-select--resize"), t.targetTouches ? (document.removeEventListener("touchend", a), document.removeEventListener("touchmove", e)) : (document.removeEventListener("mouseup", a), document.removeEventListener("mousemove", e)), r.events.fire(l.LayoutEvents.afterResizeEnd, [r.id])
                    };
                this._resizerHandlers = {
                    onmousedown: function(t) {
                        i(t), document.addEventListener("mouseup", a), document.addEventListener("mousemove", e)
                    },
                    ontouchstart: function(t) {
                        i(t), document.addEventListener("touchend", a), document.addEventListener("touchmove", e)
                    },
                    ondragstart: function(t) {
                        return t.preventDefault()
                    }
                }
            }, f.prototype._getCollapseIcon = function() {
                return this._isXDirection() && this.config.collapsed ? "dxi dxi-chevron-right" : this._isXDirection() && !this.config.collapsed ? "dxi dxi-chevron-left" : !this._isXDirection() && this.config.collapsed ? "dxi dxi-chevron-up" : this._isXDirection() || this.config.collapsed ? void 0 : "dxi dxi-chevron-down"
            }, f.prototype._isLastCell = function() {
                var t = this._parent;
                return t && t._cells.indexOf(this) === t._cells.length - 1
            }, f.prototype._getNextCell = function() {
                var t = this._parent,
                    e = t._cells.indexOf(this);
                return t._cells[e + 1]
            }, f.prototype._getResizerView = function() {
                return this._parent.getRefs("resizer_" + this._uid)
            }, f.prototype._isXDirection = function() {
                return this._parent && this._parent._xLayout
            }, f.prototype._calculateStyle = function() {
                var t = this.config;
                if (t) {
                    var e = {},
                        i = !1,
                        n = !1;
                    isNaN(Number(t.width)) || (t.width = t.width + "px"), isNaN(Number(t.height)) || (t.height = t.height + "px"), isNaN(Number(t.minWidth)) || (t.minWidth = t.minWidth + "px"), isNaN(Number(t.minHeight)) || (t.minHeight = t.minHeight + "px"), isNaN(Number(t.maxWidth)) || (t.maxWidth = t.maxWidth + "px"), isNaN(Number(t.maxHeight)) || (t.maxHeight = t.maxHeight + "px"), "content" === t.width && (i = !0), "content" === t.height && (n = !0);
                    var o = t.width,
                        r = t.height,
                        s = t.cols,
                        a = t.rows,
                        l = t.minWidth,
                        c = t.minHeight,
                        u = t.maxWidth,
                        d = t.maxHeight,
                        h = t.gravity,
                        f = t.collapsed,
                        p = t.$fixed,
                        _ = -1 === m.sign(h) ? 0 : h;
                    "boolean" == typeof h && (_ = h ? 1 : 0);
                    var g = "boolean" == typeof h ? !h : -1 === m.sign(h);
                    this._isXDirection() ? (p || o || void 0 === h && (l || u)) && (g = !0) : (p || r || void 0 === h && (c || d)) && (g = !0);
                    var v, g = g ? 0 : _ || 1,
                        _ = this._isXDirection() ? "x" : "y";
                    return void 0 !== l && (e.minWidth = l), void 0 !== c && (e.minHeight = c), void 0 !== u && (e.maxWidth = u), void 0 !== d && (e.maxHeight = d), void 0 === this._parent && (_ = !0), void 0 !== o && "content" !== o ? e.width = o : !0 === _ ? e.width = "100%" : "x" === _ && (i ? e.flex = "0 0 auto" : (v = this._isXDirection() ? "1px" : "auto", e.flex = g + " " + (s || a ? "0 " + v : "1 auto"))), void 0 !== r && "content" !== r ? e.height = r : !0 === _ ? e.height = "100%" : "y" === _ && (n ? e.flex = "0 0 auto" : (v = this._isXDirection() ? "auto" : "1px", e.flex = g + " " + (s || a ? "0 " + v : "1 auto"))), !0 === _ && void 0 === t.width && void 0 === t.height && (e.flex = g + " 1 auto"), f && (this._isXDirection() ? e.width = "auto" : e.height = "auto", e.flex = "0 0 auto"), e
                }
            }, f);

        function f(t, e) {
            e = r.call(this, t, e) || this;
            return e._disabled = [], t && t.isVisible && (e._parent = t), e._parent && e._parent.events ? e.events = e._parent.events : e.events = new a.EventSystem(e), e._cssManager = new h.CssManager, e.config.full = void 0 === e.config.full ? Boolean(e.config.header || e.config.collapsable || e.config.headerHeight || e.config.headerIcon || e.config.headerImage) : e.config.full, e._initHandlers(), e.id = e.config.id || m.uid(), e
        }
        e.Cell = o
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = i(26);
        e.getResizeMode = function(t, e, i) {
            var n = e[o = t ? "width" : "height"] && e[o].includes("%"),
                t = i[o] && i[o].includes("%"),
                e = e[o] && e[o].includes("px"),
                o = i[o] && i[o].includes("px");
            return n && t ? r.resizeMode.percents : e && o ? r.resizeMode.pixels : e && !o ? r.resizeMode.mixedpx1 : o && !e ? r.resizeMode.mixedpx2 : n ? r.resizeMode.mixedperc1 : t ? r.resizeMode.mixedperc2 : r.resizeMode.unknown
        }, e.getBlockRange = function(t, e, i) {
            return void 0 === i && (i = !0), i ? {
                min: t.left + window.pageXOffset,
                max: e.right + window.pageXOffset
            } : {
                min: t.top + window.pageYOffset,
                max: e.bottom + window.pageYOffset
            }
        }, e.getMarginSize = function(t, e) {
            return t && ("space" === t.type || "wide" === t.type && e) ? 10 : 0
        }
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r, s = i(1),
            a = i(0),
            l = i(2),
            c = i(12),
            u = i(18),
            o = (r = u.Navbar, o(d, r), d.prototype.getState = function(t) {
                if (!t || this.data.getItem(t.toString())) {
                    var e, i = {};
                    for (e in this.data.eachChild(this.data.getRoot(), function(t) {
                            t.twoState && !t.group ? i[t.id] = t.active : "input" !== t.type && "selectButton" !== t.type || (i[t.id] = t.value)
                        }, !1), this._groups) this._groups[e].active && (i[e] = this._groups[e].active);
                    return t ? i[t] : i
                }
            }, d.prototype.setState = function(t) {
                for (var e in t) {
                    var i;
                    this._groups && this._groups[e] ? this._groups[e].active && (this.data.update(this._groups[e].active, {
                        active: !1
                    }), this._groups[e].active = t[e], this.data.update(t[e], {
                        active: !0
                    })) : "input" === (i = this.data.getItem(e)).type || "selectButton" === i.type ? this.data.update(e, {
                        value: t[e]
                    }) : this.data.update(e, {
                        active: t[e]
                    })
                }
            }, d.prototype._customHandlers = function() {
                var i = this;
                return {
                    input: function(t) {
                        var e = l.locate(t);
                        i.data.update(e, {
                            value: t.target.value
                        })
                    },
                    tooltip: function(t) {
                        var e = l.locateNode(t);
                        e && (t = e.getAttribute("dhx_id"), (t = i.data.getItem(t)).tooltip && c.tooltip(t.tooltip, {
                            node: e,
                            position: c.Position.bottom
                        }))
                    }
                }
            }, d.prototype._getFactory = function() {
                return u.createFactory({
                    widget: this,
                    defaultType: "navItem",
                    allowedTypes: ["button", "imageButton", "selectButton", "navItem", "menuItem", "separator", "spacer", "title", "input", "customHTML", "customHTMLButton"],
                    widgetName: "toolbar"
                })
            }, d.prototype._draw = function() {
                var i = this;
                return a.el("nav.dhx_widget.dhx_toolbar", {
                    class: this.config.css || ""
                }, [a.el("ul.dhx_navbar.dhx_navbar--horizontal", {
                    dhx_widget_id: this._uid,
                    tabindex: 0,
                    onclick: this._handlers.onclick,
                    onmousedown: this._handlers.onmousedown,
                    oninput: this._handlers.input,
                    onmouseover: this._handlers.tooltip,
                    _hooks: {
                        didInsert: function(t) {
                            t.el.addEventListener("keyup", function(t) {
                                var e;
                                9 !== t.which || (e = l.locateNode(document.activeElement)) && (t = e.getAttribute("dhx_id"), (t = i.data.getItem(t)).tooltip && c.tooltip(t.tooltip, {
                                    node: e,
                                    position: c.Position.bottom,
                                    force: !0
                                }))
                            }, !0)
                        }
                    }
                }, this.data.map(function(t) {
                    return i._factory(t)
                }, this.data.getRoot(), !1))])
            }, d.prototype._getMode = function(t, e) {
                return t.id === e ? "bottom" : "right"
            }, d.prototype._close = function(t) {
                this._activePosition = null, this._currentRoot = null, r.prototype._close.call(this, t)
            }, d.prototype._setRoot = function(t) {
                this.data.getParent(t) === this.data.getRoot() && (this._currentRoot = t)
            }, d);

        function d(t, e) {
            var i = r.call(this, t, s.extend({
                navigationType: "click"
            }, e)) || this;
            i._currentRoot = null;
            return i.mount(t, a.create({
                render: function() {
                    return i._draw()
                }
            })), i
        }
        e.Toolbar = o
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(t, e)
            }, function(t, e) {
                function i() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }),
            r = this && this.__assign || function() {
                return (r = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = i(1),
            c = i(0),
            a = i(3),
            u = i(2),
            l = i(15),
            d = i(4),
            h = i(5),
            f = i(35);
        var p, o = (p = d.View, o(_, p), _.prototype.paint = function() {
            p.prototype.paint.call(this), this._vpopups.redraw()
        }, _.prototype.disable = function(t) {
            var e = this;
            void 0 !== t ? this._setProp(t, "disabled", !0) : this.data.forEach(function(t) {
                t = t.id;
                return e._setProp(t, "disabled", !0)
            })
        }, _.prototype.enable = function(t) {
            var e = this;
            void 0 !== t ? this._setProp(t, "disabled", !1) : this.data.forEach(function(t) {
                t = t.id;
                return e._setProp(t, "disabled", !1)
            })
        }, _.prototype.isDisabled = function(t) {
            t = this.data.getItem(t);
            if (t) return t.disabled || !1
        }, _.prototype.show = function(t) {
            var e = this;
            void 0 !== t ? this._setProp(t, "hidden", !1) : this.data.forEach(function(t) {
                t = t.id;
                return e._setProp(t, "hidden", !1)
            })
        }, _.prototype.hide = function(t) {
            var e = this;
            void 0 !== t ? this._setProp(t, "hidden", !0) : this.data.forEach(function(t) {
                t = t.id;
                return e._setProp(t, "hidden", !0)
            })
        }, _.prototype.destructor = function() {
            this.events.clear(), l.keyManager.removeHotKey(null, this), this._vpopups.node && this._vpopups.unmount(), this.unmount()
        }, _.prototype.select = function(t, e) {
            var i = this;
            if (void 0 === e && (e = !0), !t) throw new Error("Function argument cannot be empty, for more info check documentation https://docs.dhtmlx.com");
            e && this.unselect(), this.data.update(t, {
                active: !0
            }), this.data.eachParent(t, function(t) {
                i.data.update(t.id, {
                    active: !0
                })
            })
        }, _.prototype.unselect = function(t) {
            var e = this;
            t ? (this.data.update(t, {
                active: !1
            }), this.data.eachChild(t, function(t) {
                e.data.update(t.id, {
                    active: !1
                })
            })) : this.data.forEach(function(t) {
                e.data.update(t.id, {
                    active: !1
                })
            })
        }, _.prototype.isSelected = function(t) {
            if (t && this.data.getItem(t)) return !!this.data.getItem(t).active
        }, _.prototype.getSelected = function() {
            var e = [];
            return this.data.forEach(function(t) {
                t.active && e.push(t.id)
            }), e
        }, _.prototype._customHandlers = function() {
            return {}
        }, _.prototype._close = function(t) {
            var e = this;
            this._popupActive && this.events.fire(f.NavigationBarEvents.beforeHide, [this._activeMenu, t]) && (this._activeParents && this._activeParents.forEach(function(t) {
                return e.data.exists(t) && e.data.update(t, {
                    $activeParent: !1
                })
            }), "click" === this.config.navigationType && (this._isActive = !1), clearTimeout(this._currentTimeout), this._popupActive = !1, this._activeMenu = null, this.events.fire(f.NavigationBarEvents.afterHide, [t]), this.paint())
        }, _.prototype._init = function() {
            var t = this;
            this._vpopups = c.create({
                render: function() {
                    return c.el("div", {
                        dhx_widget_id: t._uid,
                        class: (t._isContextMenu ? " dhx_context-menu" : "") + " " + (t.config.css ? t.config.css.split(" ").map(function(t) {
                            return t + "--context-menu"
                        }).join(" ") : ""),
                        onmousemove: t._handlers.onmousemove,
                        onmouseleave: t._handlers.onmouseleave,
                        onclick: t._handlers.onclick,
                        onmousedown: t._handlers.onmousedown
                    }, t._drawPopups())
                }
            }), this._vpopups.mount(document.body)
        }, _.prototype._initHandlers = function() {
            var a = this;
            this._isActive = "click" !== this.config.navigationType, this._handlers = r({
                onmousemove: function(t) {
                    var e, i;
                    !a._isActive || (i = u.locateNode(t)) && (e = i.getAttribute("dhx_id"), a._activeMenu !== e && (a.data.haveItems(e) && (i = u.getRealPosition(i), a.data.update(e, {
                        $position: i
                    }, !1)), a._activeItemChange(e, t)))
                },
                onmouseleave: function(t) {
                    var e;
                    "click" !== a.config.navigationType && (a._popupActive && ((e = u.locateNode(t, "dhx_id", "relatedTarget")) ? (e = e.getAttribute("dhx_id"), a.data.getItem(e) || a._close(t)) : a._close(t)), a._activeItemChange(null, t))
                },
                onclick: function(t) {
                    var e = u.locateNode(t);
                    if (e) {
                        var i = e.getAttribute("dhx_id");
                        if (!a.isDisabled(i)) {
                            var n = a.data.getItem(i);
                            if (!n.multiClick)
                                if (a.data.haveItems(i)) i !== a._currentRoot && (a._isActive || (a._isActive = !0), a._setRoot(i), e = u.getRealPosition(e), a.data.update(i, {
                                    $position: e
                                }, !1), a._activeItemChange(i, t));
                                else switch (n.type) {
                                    case "input":
                                    case "title":
                                        break;
                                    case "menuItem":
                                    case "selectButton":
                                        a._onMenuItemClick(i, t);
                                        break;
                                    case "imageButton":
                                    case "button":
                                    case "customButton":
                                    case "customHTML":
                                    case "navItem":
                                        n.twoState && a.data.update(n.id, {
                                            active: !n.active
                                        }), a.events.fire(f.NavigationBarEvents.click, [i, t]), a._close(t);
                                        break;
                                    default:
                                        a._close(t)
                                }
                        }
                    }
                },
                onmousedown: function(t) {
                    var e, i, n, o, r, s = u.locateNode(t);
                    s && (e = s.getAttribute("dhx_id"), a.data.getItem(e).multiClick && (i = 365, r = function() {
                        clearTimeout(n), document.removeEventListener("mouseup", r)
                    }, (o = function() {
                        a.events.fire(f.NavigationBarEvents.click, [e, t]), 50 < i && (i -= 55), n = setTimeout(o, i)
                    })(), document.addEventListener("mouseup", r)))
                }
            }, this._customHandlers())
        }, _.prototype._initEvents = function() {
            var n = this,
                t = null;
            this.data.events.on(f.DataEvents.change, function() {
                n.paint(), t && clearTimeout(t), t = setTimeout(function() {
                    var i = {};
                    n.data.eachChild(n.data.getRoot(), function(t) {
                        var e;
                        t.group && (t.twoState = !0, (e = i)[(t = t).group] ? (t.active && (e[t.group].active = t.id), e[t.group].elements.push(t.id)) : e[t.group] = {
                            active: t.active ? t.id : null,
                            elements: [t.id]
                        })
                    }, !0), n._groups = i, n._resetHotkeys(), t = null, n.paint()
                }, 100)
            }), this.events.on(f.NavigationBarEvents.click, function(t) {
                var e = n.data.getItem(t),
                    t = n.data.getItem(e.parent);
                t && "selectButton" === t.type && n.data.update(e.parent, {
                    value: e.value,
                    icon: e.icon
                }), e.group && ((t = n._groups[e.group]).active && n.data.update(t.active, {
                    active: !1
                }), t.active = e.id, n.data.update(e.id, {
                    active: !0
                }))
            }), this._customInitEvents()
        }, _.prototype._getMode = function(t, e, i) {
            return void 0 === i && (i = !1), t.parent === e ? "bottom" : "right"
        }, _.prototype._drawMenuItems = function(t, e) {
            var i = this;
            return void 0 === e && (e = !0), this.data.map(function(t) {
                return i._factory(t, e)
            }, t, !1)
        }, _.prototype._setRoot = function(t) {}, _.prototype._getParents = function(t, e) {
            var i = [],
                n = !1,
                o = this.data.getItem(t),
                o = o && o.disabled;
            return this.data.eachParent(t, function(t) {
                t.id === e ? (i.push(t.id), n = !0) : n || i.push(t.id)
            }, !o), this._isContextMenu && this._activePosition && i.push(e), i
        }, _.prototype._listenOuterClick = function() {
            this._documentHaveListener || (document.addEventListener("click", this._documentClick, !0), this._documentHaveListener = !0)
        }, _.prototype._customInitEvents = function() {}, _.prototype._drawPopups = function() {
            var a = this,
                t = this._activeMenu;
            if (!this._isContextMenu && !t) return null;
            var l = this._currentRoot;
            if (this._isContextMenu && !this._activePosition) return null;
            t = this._getParents(t, l);
            return (this._activeParents = t).forEach(function(t) {
                return a.data.exists(t) && a.data.update(t, {
                    $activeParent: !0
                }, !1)
            }), t.map(function(r) {
                if (!a.data.haveItems(r)) return null;
                var s = a.data.getItem(r) || a._rootItem;
                return a._popupActive = !0, c.el("ul", {
                    class: "dhx_widget dhx_menu" + (a.config.menuCss ? " " + a.config.menuCss : ""),
                    _key: r,
                    _hooks: {
                        didInsert: function(t) {
                            var e = t.el.getBoundingClientRect(),
                                i = e.width,
                                n = e.height,
                                o = a._isContextMenu && a._activePosition && r === l ? a._activePosition : s.$position,
                                e = a._getMode(s, l, o === a._activePosition),
                                n = u.calculatePosition(o, {
                                    mode: e,
                                    width: i,
                                    height: n
                                });
                            s.$style = n, t.patch({
                                style: n
                            })
                        },
                        didRecycle: function(t, e) {
                            var i, n;
                            a._isContextMenu && a._activePosition && r === l && (i = (n = e.el.getBoundingClientRect()).width, n = n.height, n = u.calculatePosition(a._activePosition, {
                                mode: a._getMode(s, l, !0),
                                width: i,
                                height: n
                            }), s.$style = n, e.patch({
                                style: n
                            }))
                        }
                    },
                    tabindex: 0,
                    style: s.$style || {
                        position: "absolute"
                    }
                }, a._drawMenuItems(r))
            }).reverse()
        }, _.prototype._onMenuItemClick = function(t, e) {
            var i = this.data.getItem(t);
            i.disabled || (i.twoState && this.data.update(i.id, {
                active: !i.active
            }), this.events.fire(f.NavigationBarEvents.click, [t, e]), this._close(e))
        }, _.prototype._activeItemChange = function(t, e) {
            var i, n = this;
            this._activeParents && (i = this._getParents(t, this._currentRoot), this._activeParents.forEach(function(t) {
                n.data.exists(t) && !i.includes(t) && n.data.update(t, {
                    $activeParent: !1
                }, !1)
            })), t && !this._documentHaveListener && this._listenOuterClick(), t && this.data.haveItems(t) ? (this._activeMenu === t && this._popupActive || this.events.fire(f.NavigationBarEvents.openMenu, [t]), clearTimeout(this._currentTimeout), this.paint()) : (clearTimeout(this._currentTimeout), this._currentTimeout = setTimeout(function() {
                return n.paint()
            }, 400)), this._activeMenu = t
        }, _.prototype._resetHotkeys = function() {
            var e = this;
            l.keyManager.removeHotKey(null, this), this.data.map(function(t) {
                t.hotkey && l.keyManager.addHotKey(t.hotkey, function() {
                    return e._onMenuItemClick(t.id, null)
                }, e)
            })
        }, _.prototype._setProp = function(t, e, i) {
            var n = this;
            Array.isArray(t) ? t.forEach(function(t) {
                return n.data.update(t, ((t = {})[e] = i, t))
            }) : this.data.update(t, ((t = {})[e] = i, t))
        }, _);

        function _(t, e) {
            var n = p.call(this, t, s.extend({}, e)) || this;
            return n._isContextMenu = !1, n._documentHaveListener = !1, n._rootItem = {}, !Array.isArray(n.config.data) && n.config.data && n.config.data.events ? (n.data = n.config.data, n.events = n.data.events, n.events.context = n) : (n.events = new a.EventSystem(n), n.data = new h.TreeCollection({}, n.events)), n._documentClick = function(t) {
                var e, i;
                n._documentHaveListener && (e = u.locateNode(t), i = "ontouchstart" in window || navigator.msMaxTouchPoints, document.removeEventListener("click", n._documentClick), n._documentHaveListener = !1, (!i || e) && n._isContextMenu || n._close(t))
            }, n._currentRoot = n.data.getRoot(), n._factory = n._getFactory(), n._initHandlers(), n._init(), n._initEvents(), Array.isArray(n.config.data) && n.data.parse(n.config.data), n
        }
        e.Navbar = o
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(2),
            o = null;
        e.getFocus = function() {
            return o
        }, document.addEventListener("click", function(t) {
            o = n.locate(t, "dhx_widget_id")
        })
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var d = i(127),
            h = i(128),
            f = i(129),
            p = i(130),
            _ = i(131),
            g = i(132),
            v = i(133),
            m = i(134),
            y = i(135),
            b = i(22);
        e.createFactory = function(t) {
            for (var n = t.defaultType, e = t.allowedTypes, o = t.widgetName, t = t.widget, r = new Set, i = 0, s = e; i < s.length; i++) {
                var a = s[i];
                r.add(a)
            }
            var l = t.config,
                c = t.events,
                u = t.data;
            return function(t, e) {
                if (t.hidden) return null;
                if (!(t.type && "button" !== t.type && "navItem" !== t.type && "menuItem" !== t.type || t.value || t.icon || t.html)) return null;
                t.type = t.type || n, r && !r.has(t.type) && (t.type = n), "imageButton" === t.type && "ribbon" !== o && (t.active = !1), e && "spacer" !== t.type && "separator" !== t.type && "customHTML" !== t.type && (t.type = "menuItem"), u.haveItems(t.id) && function(t, e, i) {
                    switch (t) {
                        case "sidebar":
                        case "context-menu":
                            e.$openIcon = "right";
                            break;
                        case "toolbar":
                            e.parent === i.getRoot() ? e.$openIcon = "right" : e.$openIcon = "bottom";
                            break;
                        case "menu":
                            e.parent !== this.data.getRoot() && (e.$openIcon = "right");
                            break;
                        case "ribbon":
                            var n = i.getItem(e.parent);
                            n && "block" !== e.type && ("block" === n.type ? e.$openIcon = "bottom" : e.$openIcon = "right")
                    }
                }(o, t, u), "toolbar" === o && t.items && t.items.forEach(function(t) {
                    t.type || (t.type = "menuItem")
                });
                var i = "customHTML" !== t.type && function(t, e, i, n) {
                    switch (t.type) {
                        case "navItem":
                        case "selectButton":
                            return h.navItem(t, i, n.collapsed);
                        case "button":
                            return d.button(t, i);
                        case "title":
                            return y.title(t, i);
                        case "separator":
                            return v.separator(t, i);
                        case "spacer":
                            return m.spacer(t, i);
                        case "input":
                            return _.input(t, e, i);
                        case "imageButton":
                            return p.imageButton(t, i);
                        case "menuItem":
                            return g.menuItem(t, i, n.asMenuItem);
                        case "customHTMLButton":
                            return f.customHTMLButton(t, i, n.asMenuItem);
                        case "block":
                        default:
                            throw new Error("unknown item type " + t.type)
                    }
                }(t, c, o, {
                    asMenuItem: e,
                    collapsed: "sidebar" !== o || l.collapsed
                });
                return b.navbarComponentMixin(o, t, e, i)
            }
        }
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = i(0),
            r = i(22);
        e.button = function(t, e) {
            var i = t.icon && !t.value,
                n = i ? " dhx_navbar-count--absolute" : " dhx_navbar-count--button-inline";
            return o.el("button.dhx_button", {
                class: r.getNavbarButtonCSS(t, e),
                dhx_id: t.id,
                disabled: t.disabled,
                type: "button"
            }, [t.icon ? r.getIcon(t.icon, "button") : null, t.html ? o.el("div.dhx_button__text", {
                ".innerHTML": t.html
            }) : t.value && o.el("span.dhx_button__text", t.value), 0 < t.count && r.getCount(t, n, i), t.value && t.$openIcon ? o.el("span.dhx_button__icon.dhx_button__icon--menu.dxi.dxi-menu-right") : null, t.loading && o.el("span.dhx_button__loading", [o.el("span.dhx_button__loading-icon.dxi.dxi-loading")])])
        }
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(0),
            o = i(22);
        e.navItem = function(t, e, i) {
            return e = " dhx_" + e + "-button", n.el("button", {
                class: "dhx_button" + e + (t.active || t.$activeParent ? e + "--active" : "") + (t.disabled ? e + "--disabled" : "") + (t.$openIcon ? e + "--select" : "") + (t.circle ? e + "--circle" : "") + (t.size ? " " + e + "--" + t.size : "") + (!t.value && t.icon ? e + "--icon" : "") + (t.css ? " " + t.css : ""),
                dhx_id: t.id,
                disabled: t.disabled,
                type: "button"
            }, [t.icon && n.el("span", {
                class: t.icon + e + "__icon"
            }), t.html && n.el("div", {
                class: e.trim() + "__html",
                ".innerHTML": t.html
            }), !t.html && t.value && n.el("span", {
                class: e.trim() + "__text"
            }, t.value), 0 < t.count && o.getCount(t, e + "__count", i), t.$openIcon && n.el("span.dxi.dxi-menu-right", {
                class: e + "__caret"
            })])
        }
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(0);
        e.customHTMLButton = function(t, e, i) {
            return i = i ? " dhx_button dhx_menu-button" : " dhx_button dhx_nav-menu-button", n.el("button", {
                class: "dhx_custom-button" + i + (t.$activeParent ? i + "--active" : ""),
                dhx_id: t.id,
                type: "button",
                ".innerHTML": t.html
            }, t.html ? "" : t.value)
        }
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(0),
            o = i(22);
        e.imageButton = function(t, e) {
            var i = "dhx_" + e + "-button-image",
                e = "ribbon" === e;
            return n.el("button.dhx_button", {
                class: i + (t.size ? " " + i + "--" + t.size : "") + (!t.value && t.src ? " " + i + "--icon" : "") + (e && t.$openIcon ? " " + i + "--select" : "") + (t.active ? " " + i + "--active" : ""),
                dhx_id: t.id,
                type: "button"
            }, [e && t.value && t.$openIcon && n.el("span.dxi.dxi-menu-right", {
                class: i + "__caret"
            }), t.html ? n.el("div", {
                class: i + "__text",
                ".innerHTML": t.html
            }) : t.value && n.el("span", {
                class: i + "__text"
            }, t.value), t.src && n.el("span", {
                class: i + "__image",
                style: {
                    backgroundImage: "url(" + t.src + ")"
                }
            }), 0 < t.count && o.getCount(t, i + "__count", !0)])
        }
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(0),
            o = i(35);

        function r(t, e) {
            t.fire(o.NavigationBarEvents.inputBlur, [e])
        }

        function s(t, e) {
            t.fire(o.NavigationBarEvents.inputFocus, [e])
        }
        e.input = function(e, i, t) {
            return n.el(".dhx_form-group.dhx_form-group--no-message-holder.dhx_form-group--label_sr.dhx_" + t + "__input", {
                style: {
                    width: e.width || "200px"
                }
            }, [n.el("label.dhx_label", {
                for: e.id
            }, e.label), n.el(".dhx_input__wrapper", [n.el("input.dhx_input", {
                placeholder: e.placeholder,
                class: e.icon ? "dhx_input--icon-padding" : "",
                value: e.value,
                disabled: e.disabled,
                onblur: [r, i, e.id],
                onfocus: [s, i, e.id],
                dhx_id: e.id,
                _hooks: {
                    didInsert: function(t) {
                        i && i.fire(o.NavigationBarEvents.inputCreated, [e.id, t.el])
                    }
                },
                _key: e.id
            }), e.icon ? n.el(".dhx_input__icon", {
                class: e.icon
            }) : null])])
        }
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = i(0),
            r = i(22);
        e.menuItem = function(t, e, i) {
            var n = i ? " dhx_menu-button" : " dhx_nav-menu-button";
            return o.el("button", {
                class: "dhx_button" + n + (t.disabled ? n + "--disabled" : "") + (t.active || t.$activeParent ? n + "--active" : ""),
                disabled: t.disabled,
                dhx_id: t.id,
                type: "button"
            }, i ? [t.icon || t.value || t.html ? o.el("span.dhx_menu-button__block.dhx_menu-button__block--left", [t.icon && o.el("span.dhx_menu-button__icon", {
                class: t.icon
            }), t.html ? o.el("div.dhx_menu-button__text", {
                ".innerHTML": t.html
            }) : t.value && o.el("span.dhx_menu-button__text", t.value)]) : null, 0 < t.count || t.hotkey || t.items ? o.el("span.dhx_menu-button__block.dhx_menu-button__block--right", [0 < t.count && r.getCount(t, " dhx_menu-button__count", !1), t.hotkey && o.el("span.dhx_menu-button__hotkey", t.hotkey), t.items && o.el("span.dhx_menu-button__caret.dxi.dxi-menu-right")]) : null] : [t.icon && o.el("span.dhx_menu-button__icon", {
                class: t.icon
            }), t.html ? o.el("div.dhx_menu-button__text", {
                ".innerHTML": t.html
            }) : t.value && o.el("span.dhx_nav-menu-button__text", t.value)])
        }
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.separator = function(t, e) {
            return null
        }
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.spacer = function(t, e) {
            return null
        }
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(0);
        e.title = function(t, e) {
            return n.el("span", {
                class: "dhx_navbar-title dhx_navbar-title--" + e,
                dhx_id: t.id,
                ".innerHTML": t.html
            }, t.html ? null : t.value)
        }
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.layoutConfig = {
            css: "vault-layout",
            rows: [{
                id: "topbar",
                css: "vault-topbar"
            }, {
                id: "vault",
                css: "vault-file-grid"
            }]
        }, e.layoutConfigWithoutTopbar = {
            css: "vault-layout",
            rows: [{
                id: "vault",
                css: "vault-file-grid"
            }]
        }
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(36),
            o = ["byte", "kilobyte", "megabyte", "gigabyte"];
        e.getBasis = function(t, e) {
            return void 0 === t && (t = 0), void 0 === e && (e = 0), t < 1024 ? t + " " + n.default[o[e]] : this.getBasis(Math.round(t / 1024), e + 1)
        };
        var r;

        function s(t) {
            return {
                extension: t.name.split(".").pop() || "none",
                mime: t.file ? t.file.type : ""
            }
        }

        function a(t, e) {
            switch (t) {
                case "jpg":
                case "jpeg":
                case "gif":
                case "png":
                case "bmp":
                case "tiff":
                case "pcx":
                case "svg":
                case "ico":
                    return r.image;
                case "avi":
                case "mpg":
                case "mpeg":
                case "rm":
                case "move":
                case "mov":
                case "mkv":
                case "flv":
                case "f4v":
                case "mp4":
                case "3gp":
                case "wmv":
                case "webm":
                case "vob":
                    return r.video;
                case "rar":
                case "zip":
                case "tar":
                case "tgz":
                case "arj":
                case "gzip":
                case "bzip2":
                case "7z":
                case "ace":
                case "apk":
                case "deb":
                case "zipx":
                case "cab":
                case "tar-gz":
                case "rpm":
                case "xar":
                    return r.archive;
                case "xlr":
                case "xls":
                case "xlsm":
                case "xlsx":
                case "ods":
                case "csv":
                case "tsv":
                    return r.table;
                case "doc":
                case "docx":
                case "docm":
                case "dot":
                case "dotx":
                case "odt":
                case "wpd":
                case "wps":
                case "pages":
                    return r.document;
                case "wav":
                case "aiff":
                case "au":
                case "mp3":
                case "aac":
                case "wma":
                case "ogg":
                case "flac":
                case "ape":
                case "wv":
                case "m4a":
                case "mid":
                case "midi":
                    return r.audio;
                case "pot":
                case "potm":
                case "potx":
                case "pps":
                case "ppsm":
                case "ppsx":
                case "ppt":
                case "pptx":
                case "pptm":
                case "odp":
                    return r.presentation;
                case "html":
                case "htm":
                case "eml":
                    return r.web;
                case "exe":
                    return r.application;
                case "dmg":
                    return r.apple;
                case "pdf":
                case "ps":
                case "eps":
                    return r.pdf;
                case "psd":
                    return r.psd;
                case "txt":
                case "djvu":
                case "nfo":
                case "xml":
                    return r.text;
                default:
                    switch (e.split("/")[0]) {
                        case "image":
                            return r.image;
                        case "audio":
                            return r.audio;
                        case "video":
                            return r.video;
                        default:
                            return r.other
                    }
            }
        }
        e.truncateWord = function(t, e) {
            if (void 0 === e && (e = 13), t.length <= e) return t;
            var i, n = t.lastIndexOf(".");
            return (-1 === n ? (i = t.substr(t.length - 4), t.substr(0, e - 7)) : (n = n - 3, i = t.substr(n), t.substr(0, e - (t.length - n)))) + "..." + i
        }, e.calculateCover = function(t) {
            var e, i, n, o = t.width,
                r = t.height,
                o = 1 < (t = o / r) ? (e = i = r, n = (o - i) / 2, 0) : t < 1 ? (n = 0, (r - (e = i = o)) / 2) : (i = e = o, n = 0);
            return {
                sx: n,
                sy: o,
                sWidth: i,
                sHeight: e,
                dx: 0,
                dy: 0
            }
        }, (i = r = e.FileType || (e.FileType = {})).image = "image", i.video = "video", i.archive = "archive", i.table = "table", i.document = "document", i.presentation = "presentation", i.application = "application", i.web = "web", i.apple = "apple", i.pdf = "pdf", i.psd = "psd", i.audio = "audio", i.other = "other", i.text = "text", e.getFileType = a, e.getFileClassName = function(t) {
            var e = s(t),
                t = e.mime;
            return a(e = e.extension, t) + " extension-" + e
        }, e.isImage = function(t) {
            var e = s(t),
                t = e.mime;
            return a(e.extension, t) === r.image
        }
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r, s = i(0),
            a = i(4),
            l = i(36),
            c = i(25),
            o = (r = a.View, o(u, r), u.prototype.setState = function(t, e) {
                this._progress = t, this.config.template ? this._progressText = this.config.template(t, e) : this._progressText = this._progress.toFixed(1) + "%", this.paint()
            }, u.prototype._draw = function() {
                return s.el(".progress-bar", {
                    _key: this._uid
                }, [s.el(".progress-indicator", {
                    style: {
                        width: this._progress + "%"
                    }
                }), s.el(".progress-text", {
                    ".innerHTML": this._progressText
                }), s.el("button", {
                    class: "dhx_btn dhx_btn--flat dhx_btn_small action-abort-all",
                    onclick: this._abortUpload
                }, l.default.cancel)])
            }, u);

        function u(t, e) {
            var i = r.call(this, null, e) || this;
            i.events = t, i._progress = 0;
            return i.mount(null, s.create({
                render: function() {
                    return i._draw()
                }
            })), i._abortUpload = function() {
                i.events.fire(c.ProgressBarEvents.cancel)
            }, i
        }
        e.ProgressBar = o
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = (o.prototype.add = function(t, e) {
            void 0 === e && (e = !1), this._readerStack.push(t), e || this.read()
        }, o.prototype.read = function() {
            var i, t, n = this;
            this._readerStack.length && !this._isActive && (i = this._readerStack.shift(), this._isActive = !0, (t = new FileReader).readAsDataURL(i.file), t.onload = function(t) {
                var e = new Image;
                e.src = t.target.result, e.onload = function() {
                    n._data.exists(i.id) && n._data.update(i.id, {
                        image: e
                    }), n._isActive = !1, n.read()
                }
            }, t.onerror = function() {
                n._isActive = !1, n.read()
            })
        }, o.prototype.stop = function() {
            this._readerStack = []
        }, o);

        function o(t) {
            this._readerStack = [], this._isActive = !1, this._data = t
        }
        e.ReadStackPreview = n
    }, function(t, r, e) {
        "use strict";
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(t, e)
            }, function(t, e) {
                function i() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }),
            s = this && this.__assign || function() {
                return (s = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            },
            a = this && this.__spreadArrays || function() {
                for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
                for (var n = Array(t), o = 0, e = 0; e < i; e++)
                    for (var r = arguments[e], s = 0, a = r.length; s < a; s++, o++) n[o] = r[s];
                return n
            };
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var l = e(1),
            c = e(5),
            u = e(0),
            o = e(15),
            d = e(21),
            h = e(4),
            f = e(66),
            p = e(2),
            _ = e(38),
            g = e(141);
        r.MOVE_UP = 1, r.MOVE_DOWN = 2;
        var v, i = (v = h.View, i(m, v), m.prototype._didRedraw = function(t) {}, m.prototype._dblClick = function(t) {
            var e = p.locate(t);
            e && (this.config.editable && this.editItem(e), this.events.fire(_.ListEvents.doubleClick, [e, t]))
        }, m.prototype._clearTouchTimer = function() {
            this._touch.timer && (clearTimeout(this._touch.timer), this._touch.timer = null)
        }, m.prototype._dragStart = function(t) {
            var e = this;
            this._touch.start = !0;
            var i = [],
                n = p.locateNode(t, "dhx_id"),
                o = n && n.getAttribute("dhx_id"),
                n = this.selection.getId();
            return this.config.multiselection && n instanceof Array && (n.map(function(t) {
                t !== o && e.getRootView().refs[t] && i.push(e.getRootView().refs[t].el)
            }), n = a(n)), this.config.dragMode && !this._edited ? c.dragManager.onMouseDown(t, n || [o], i) : null
        }, m.prototype.disableSelection = function() {
            this.selection.disable()
        }, m.prototype.enableSelection = function() {
            this.selection.enable()
        }, m.prototype.editItem = function(t) {
            this._edited = t, this.data.getItem(this._edited) && this.events.fire(_.ListEvents.beforeEditStart, [t]) ? (this._getHotkeys(), this.paint(), this.events.fire(_.ListEvents.afterEditStart, [t])) : this._edited = null
        }, m.prototype.editEnd = function(t, e) {
            var i;
            this._edited && (null !== t && (i = this.data.getItem(e), this.data.update(e, s(s({}, i), {
                value: t
            }))), this._edited = null, this.paint())
        }, m.prototype.getFocusItem = function() {
            return this.data.getItem(this._focus)
        }, m.prototype.setFocus = function(t) {
            this._focus != t && (this._focus = t, this.showItem(t), this.events.fire(_.ListEvents.focusChange, [this.data.getIndex(this._focus), this._focus]), this.paint())
        }, m.prototype.getFocus = function() {
            return this._focus
        }, m.prototype.destructor = function() {
            o.keyManager.removeHotKey(null, this), this.selection.destructor(), this.unmount()
        }, m.prototype.showItem = function(t) {
            var e, i, n, o = this.getRootView();
            o && o.node && o.node.el && void 0 !== t && ((e = this.getRootNode()) && (i = this.config.virtual, n = this.data.getIndex(t), o = e.children[n], (i || o) && (t = i ? parseInt(this.config.itemHeight) : o.clientHeight, (o = i ? n * t : o.offsetTop) >= e.scrollTop + e.clientHeight - t ? e.scrollTo(0, o - e.clientHeight + t) : o < e.scrollTop && e.scrollTo(0, o))))
        }, m.prototype._renderItem = function(t, e) {
            var i = this.config.itemHeight;
            if (t.$empty) return u.el("li", {
                class: "dhx_list-item",
                style: {
                    height: i
                }
            });
            var n = this.config.template && this.config.template(t) || t.html,
                o = t.id === this._focus;
            if (t.id === this._edited) return g.getEditor(t, this).toHTML();
            var r = this.data.getMetaMap(t),
                i = s(s({}, this._events), {
                    class: "dhx_list-item" + (r && r.selected ? " dhx_list-item--selected" : "") + (o ? " dhx_list-item--focus" : "") + (r && r.drop && !this._edited ? " dhx_list-item--drophere" : "") + (r && r.drag && !this._edited ? " dhx_list-item--dragtarget" : "") + (this.config.dragMode && !this._edited ? " dhx_list-item--drag" : "") + (t.css ? " " + t.css : ""),
                    dhx_id: t.id,
                    _ref: t.id.toString(),
                    style: {
                        height: i
                    },
                    _key: t.id,
                    ".innerHTML": n
                });
            return n ? (i[".innerHTML"] = n, u.el("li", i)) : (i.class += " dhx_list-item--text", u.el("li", i, t.text || t.value))
        }, m.prototype._renderList = function() {
            var i = this,
                t = this._getRange(),
                e = this.data.getRawData(t[0], t[1]).map(function(t, e) {
                    return i._renderItem(t, e)
                });
            return this.config.virtual && (e = a([u.el(".div", {
                style: {
                    height: t[2] + "px"
                }
            })], e, [u.el(".div", {
                style: {
                    height: t[3] + "px"
                }
            })])), u.el("ul.dhx_widget.dhx_list", s({
                style: {
                    "min-height": this.config.itemHeight,
                    "max-height": this.config.height,
                    position: "relative"
                },
                class: (this.config.css || "") + (this.config.multiselection && this.selection.getItem() ? " dhx_no-select--pointer" : ""),
                dhx_widget_id: this._uid
            }, this._handlers), e)
        }, m.prototype.moveFocus = function(t, e) {
            var i, n, o = this.data.getLength();
            o && (n = (i = this._focus) ? this.data.getIndex(i) : -1, e = e || 1, t === r.MOVE_DOWN ? i = this.data.getId(Math.min(n + e, o - 1)) : t === r.MOVE_UP && (i = this.data.getId(Math.max(n - e, 0))), this.setFocus(i))
        }, m.prototype._getRange = function() {
            if (this.config.virtual) {
                var t = this._visibleHeight || parseInt(this.config.height),
                    e = parseInt(this.config.itemHeight),
                    i = this.data.getLength(),
                    n = this.data.getLength() * e,
                    o = this._topOffset,
                    o = Math.max(0, Math.min(o, n - t)),
                    r = Math.floor(o / e),
                    t = Math.min(i - r, Math.floor(t / e) + 5);
                return this._topOffset = o, [r, t + r, r * e, n - e * (t + r)]
            }
            return [0, -1, 0, 0]
        }, m.prototype._getHotkeys = function() {
            var e = this;
            return {
                arrowDown: function(t) {
                    e.moveFocus(r.MOVE_DOWN), t.preventDefault()
                },
                arrowUp: function(t) {
                    e.moveFocus(r.MOVE_UP), t.preventDefault()
                },
                enter: function(t) {
                    e.selection.add(e._focus), e.events.fire(_.ListEvents.click, [e._focus, t])
                },
                "enter+shift": function(t) {
                    e.selection.add(e._focus, !1, !0), e.events.fire(_.ListEvents.click, [e._focus, t])
                },
                "enter+ctrl": function(t) {
                    e.selection.add(e._focus, !0, !1), e.events.fire(_.ListEvents.click, [e._focus, t])
                },
                "ctrl+a": function(t) {
                    e.config.multiselection && (t.preventDefault(), e.selection.remove(), e.data.map(function(t) {
                        return t.id
                    }).forEach(function(t) {
                        "ctrlClick" === e.config.multiselection ? e.selection.add(t, !0) : e.selection.add(t)
                    }))
                }
            }
        }, m.prototype._enableHotKeys = function() {
            var i = this,
                t = s(s({}, this._getHotkeys()), this.config.hotkeys || {});
            o.addHotkeys(t, function(t, e) {
                return e === i._uid && !i._edited
            }, this), o.keyManager.addHotKey("escape", function() {
                i.editEnd(null)
            })
        }, m);

        function m(t, e) {
            void 0 === e && (e = {});
            var i = this,
                n = e.itemHeight || (e.virtual ? 37 : null);
            n && "number" == typeof n && (n = n.toString() + "px"), (i = v.call(this, t, l.extend({
                itemHeight: n,
                keyNavigation: !0,
                editable: !1,
                selection: !0
            }, e)) || this)._touch = {
                duration: 350,
                dblDuration: 300,
                timer: null,
                start: !1,
                timeStamp: null
            };
            e = i.config.data;
            e instanceof c.DataCollection ? (i.data = e, i.events = e.events) : (i.data = new c.DataCollection({}), i.events = i.data.events, e && i.data.parse(e)), i.selection = new f.Selection({
                disabled: !i.config.selection,
                multiselection: i.config.multiselection
            }, i.data, i.events), i.config.keyNavigation && i._enableHotKeys(), i.events.on(c.DataEvents.change, function() {
                return i.paint()
            }), i.events.on(d.SelectionEvents.afterUnSelect, function() {
                return i.paint()
            }), i.events.on(d.SelectionEvents.afterSelect, function() {
                return i.paint()
            }), i.events.on(_.ListEvents.afterEditEnd, i.editEnd.bind(i));
            e = function(e) {
                return function(t) {
                    i.data.setMeta(i.data.getItem(t.target), "drop", e), i.paint()
                }
            };
            i.events.on(c.DragEvents.canDrop, e(!0)), i.events.on(c.DragEvents.cancelDrop, e(!1));
            e = function(e) {
                return function(t) {
                    t.source.map(function(t) {
                        return i.data.setMeta(i.data.getItem(t), "drag", e)
                    }), i.paint()
                }
            };
            i.events.on(c.DragEvents.dragStart, e(!0)), i.events.on(c.DragEvents.afterDrag, e(!1)), i._handlers = {
                onmousedown: function(t) {
                    i._dragStart(t)
                },
                ontouchstart: function(t) {
                    i._touch.timer = setTimeout(function() {
                        i._dragStart(t)
                    }, i._touch.duration), i._touch.timeStamp ? (i._touch.dblDuration >= i._touch.timeStamp - +t.timeStamp.toFixed() && (t.preventDefault(), i._dblClick(t)), i._touch.timeStamp = null) : i._touch.timeStamp = +t.timeStamp.toFixed(), setTimeout(function() {
                        i._touch.timeStamp = null
                    }, i._touch.dblDuration)
                },
                ontouchmove: function(t) {
                    i._touch.start && t.preventDefault(), i._clearTouchTimer()
                },
                ontouchend: function() {
                    i._touch.start = !1, i._clearTouchTimer()
                },
                ondragstart: function() {
                    return !(i.config.dragMode && !i._edited) && null
                },
                oncontextmenu: function(t) {
                    var e = p.locate(t);
                    e && i.events.fire(_.ListEvents.itemRightClick, [e, t])
                },
                onclick: function(t) {
                    var e = p.locate(t);
                    e && (i.selection.add(e, t.ctrlKey || t.metaKey, t.shiftKey), i.events.fire(_.ListEvents.click, [e, t]), i._focus = e, i.paint())
                },
                ondblclick: function(t) {
                    i._dblClick(t)
                },
                onscroll: function(t) {
                    i.config.virtual && (i._topOffset = t.target.scrollTop, i._visibleHeight = t.target.offsetHeight, i.paint())
                },
                onmouseover: function(t) {
                    var e = p.locate(t);
                    e && e !== p.locate(t.relatedTarget) && i.events.fire(_.ListEvents.itemMouseOver, [e, t])
                }
            };
            e = i.config.eventHandlers;
            if (e)
                for (var o = 0, r = Object.entries(e); o < r.length; o++) {
                    var s = r[o],
                        a = s[0],
                        s = s[1];
                    i._handlers[a] = p.eventHandler(function(t) {
                        return p.locate(t)
                    }, s, i._handlers[a])
                }
            i.config.dragMode && c.dragManager.setItem(i._uid, i), i._topOffset = i._visibleHeight = 0;
            e = u.create({
                render: function() {
                    return i._renderList()
                },
                hooks: {
                    didMount: function(t) {
                        i.config.virtual && (i._visibleHeight = t.node.el.offsetHeight)
                    },
                    didRedraw: function(t) {
                        return i._didRedraw(t)
                    }
                }
            });
            return i.mount(t, e), i
        }
        r.List = i
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(142);
        e.getEditor = function(t, e) {
            return new n.InputEditor(t, e)
        }
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(0),
            o = i(38),
            i = (r.prototype.endEdit = function() {
                var t;
                this._input && (t = this._input.value, this._list.events.fire(o.ListEvents.beforeEditEnd, [t, this._item.id]) ? (this._input.removeEventListener("blur", this._handlers.onBlur), this._input.removeEventListener("change", this._handlers.onChange), this._handlers = {}, this._mode = !1, this._list.events.fire(o.ListEvents.afterEditEnd, [t, this._item.id])) : this._input.focus())
            }, r.prototype.toHTML = function() {
                this._mode = !0;
                var t = this._config.itemHeight;
                return n.el(".dhx_input__wrapper", {}, [n.el("div.dhx_input__container", {}, [n.el("input.dhx_input", {
                    class: this._item.css ? " " + this._item.css : "",
                    style: {
                        height: t,
                        width: "100%",
                        padding: "8px, 12px"
                    },
                    _hooks: {
                        didInsert: this._handlers.didInsert
                    },
                    _key: this._item.id,
                    dhx_id: this._item.id
                })])])
            }, r.prototype._initHandlers = function() {
                var e = this;
                this._handlers = {
                    onBlur: function() {
                        e.endEdit()
                    },
                    onChange: function() {
                        e.endEdit()
                    },
                    didInsert: function(t) {
                        t = t.el;
                        (e._input = t).focus(), t.value = e._item.value, t.setSelectionRange(0, t.value.length), t.addEventListener("change", e._handlers.onChange), t.addEventListener("blur", e._handlers.onBlur)
                    }
                }
            }, r);

        function r(t, e) {
            var i = this;
            this._list = e, this._config = e.config, this._item = t, this._list.events.on(o.ListEvents.focusChange, function(t, e) {
                i._mode && e !== i._item.id && i.endEdit()
            }), this._initHandlers()
        }
        e.InputEditor = i
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(t, e)
            }, function(t, e) {
                function i() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }),
            f = this && this.__assign || function() {
                return (f = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            },
            p = this && this.__spreadArrays || function() {
                for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
                for (var n = Array(t), o = 0, e = 0; e < i; e++)
                    for (var r = arguments[e], s = 0, a = r.length; s < a; s++, o++) n[o] = r[s];
                return n
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r, s = i(1),
            _ = i(0),
            a = i(3),
            l = i(4),
            c = i(39),
            h = i(148),
            u = i(41),
            d = i(149),
            g = i(42),
            v = i(71),
            o = (r = l.View, o(m, r), m.prototype.setValue = function(t) {
                if (!t || t instanceof Array && 0 === t.length) return !1;
                this._selected = [];
                var e = t instanceof Array ? t[0] : t,
                    i = h.DateHelper.toDateObject(e, this.config.dateFormat),
                    e = h.DateHelper.copy(this._getSelected());
                return !!this.events.fire(v.CalendarEvents.beforeChange, [i, e, !1]) && (this._setSelected(t), this._timepicker && (this._timepicker.setValue(i), this._time = this._timepicker.getValue()), this.showDate(this._getSelected()), this.events.fire(v.CalendarEvents.change, [i, e, !1]), this.paint(), !0)
            }, m.prototype.getValue = function(t) {
                var e = this;
                return void 0 === t && (t = !1), this._selected[0] ? this.config.range ? t ? this._selected.map(function(t) {
                    return h.DateHelper.copy(t)
                }) : this._selected.map(function(t) {
                    return u.getFormatedDate(e.config.dateFormat, t)
                }) : t ? h.DateHelper.copy(this._selected[0]) : u.getFormatedDate(this.config.dateFormat, this._selected[0]) : ""
            }, m.prototype.getCurrentMode = function() {
                return this._currentViewMode
            }, m.prototype.showDate = function(t, e) {
                t && (this._currentDate = h.DateHelper.copy(t)), e && (this._currentViewMode = e), this.paint()
            }, m.prototype.destructor = function() {
                this._linkedCalendar && this._unlink(), this._timepicker && this._timepicker.destructor(), this.unmount()
            }, m.prototype.clear = function() {
                var t = this.getValue(!0);
                this.config.timePicker && (this._timepicker.clear(), this._time = this._timepicker.getValue()), this._selected = [], this.showDate(null, this.config.mode), this.events.fire(v.CalendarEvents.change, [this.getValue(!0), t, !1])
            }, m.prototype.link = function(t) {
                var e = this;
                this._linkedCalendar && this._unlink(), this._linkedCalendar = t;
                var i = this.getValue(!0),
                    n = t.getValue(!0),
                    o = i && h.DateHelper.dayStart(i),
                    r = n && h.DateHelper.dayStart(n);
                this.config.$rangeMark && this._linkedCalendar.config.$rangeMark || (this.config.$rangeMark = this._linkedCalendar.config.$rangeMark = function(t) {
                    if (o && r) return o <= t && t <= r && function(t) {
                        if (h.DateHelper.isSameDay(r, o)) return null;
                        var e = "dhx_calendar-day--in-range";
                        return h.DateHelper.isSameDay(t, o) && (e += " dhx_calendar-day--first-date"), h.DateHelper.isSameDay(t, r) && (e += " dhx_calendar-day--last-date"), e
                    }(t)
                }), this.config.disabledDates && this._linkedCalendar.config.disabledDates || (this.config.disabledDates = function(t) {
                    if (r) return r < t
                }, this._linkedCalendar.config.disabledDates = function(t) {
                    if (o) return t < o
                }), this.config.thisMonthOnly = !0, t.config.thisMonthOnly = !0, this.events.on(v.CalendarEvents.change, function(t) {
                    o = h.DateHelper.dayStart(t), e._linkedCalendar.paint()
                }, "link"), this._linkedCalendar.events.on(v.CalendarEvents.change, function(t) {
                    r = h.DateHelper.dayStart(t), e.paint()
                }, "link"), this._linkedCalendar.paint(), this.paint()
            }, m.prototype._unlink = function() {
                this._linkedCalendar && (this.config.$rangeMark = this._linkedCalendar.config.$rangeMark = null, this.config.disabledDates = this._linkedCalendar.config.disabledDates = null, this.events.detach(v.CalendarEvents.change, "link"), this._linkedCalendar.events.detach(v.CalendarEvents.change, "link"), this._linkedCalendar.paint(), this.paint(), this._linkedCalendar = null)
            }, m.prototype._setSelected = function(t) {
                var i, n = this,
                    e = t instanceof Array ? t[0] : t,
                    e = h.DateHelper.toDateObject(e, this.config.dateFormat);
                t instanceof Array && this.config.range ? (i = [], t.forEach(function(t, e) {
                    e < 2 && i.push(h.DateHelper.toDateObject(t, n.config.dateFormat))
                }), 2 === i.length && i[0] < i[1] ? i.forEach(function(t) {
                    return n._selected.push(t)
                }) : this._selected[0] = i[0]) : this._selected[0] = e
            }, m.prototype._getSelected = function() {
                return this._selected[this._selected.length - 1]
            }, m.prototype._draw = function() {
                switch (this._currentViewMode) {
                    case "calendar":
                        return this.events.fire(v.CalendarEvents.modeChange, ["calendar"]), this._drawCalendar();
                    case "month":
                        return this.events.fire(v.CalendarEvents.modeChange, ["month"]), this._drawMonthSelector();
                    case "year":
                        return this.events.fire(v.CalendarEvents.modeChange, ["year"]), this._drawYearSelector();
                    case "timepicker":
                        return this.events.fire(v.CalendarEvents.modeChange, ["timepicker"]), this._drawTimepicker()
                }
            }, m.prototype._initHandlers = function() {
                var s = this;
                this._handlers = {
                    onclick: {
                        ".dhx_calendar-year, .dhx_calendar-month, .dhx_calendar-day": function(t, e) {
                            var i = e.attrs._date,
                                n = h.DateHelper.copy(s._getSelected());
                            switch (s._currentViewMode) {
                                case "calendar":
                                    var o = s.config.timePicker ? h.DateHelper.mergeHoursAndMinutes(i, s._getSelected() || s._currentDate) : i;
                                    if (!s.events.fire(v.CalendarEvents.beforeChange, [o, n, !0])) return;
                                    s.config.range && 1 === s._selected.length && s._selected[0] < o ? s._selected.push(o) : (s._selected = [], s._selected[0] = o), s.showDate(s._getSelected()), s.events.fire(v.CalendarEvents.change, [i, n, !0]);
                                    break;
                                case "month":
                                    if ("month" !== s.config.mode) h.DateHelper.setMonth(s._currentDate, i), s.showDate(null, "calendar"), s.events.fire(v.CalendarEvents.monthSelected, [i]);
                                    else {
                                        var r = h.DateHelper.fromYearAndMonth(s._currentDate.getFullYear() || s._getSelected().getFullYear(), i);
                                        if (!s.events.fire(v.CalendarEvents.beforeChange, [r, n, !0])) return;
                                        s._currentDate = r, s._selected[0] = r, s.events.fire(v.CalendarEvents.change, [s._getSelected(), n, !0]), s.events.fire(v.CalendarEvents.monthSelected, [i]), s.paint()
                                    }
                                    break;
                                case "year":
                                    if ("year" !== s.config.mode) h.DateHelper.setYear(s._currentDate, i), s.showDate(null, "month"), s.events.fire(v.CalendarEvents.yearSelected, [i]);
                                    else {
                                        r = h.DateHelper.fromYear(i);
                                        if (!s.events.fire(v.CalendarEvents.beforeChange, [r, n, !0])) return;
                                        s._currentDate = r, s._selected[0] = r, s.events.fire(v.CalendarEvents.change, [s._getSelected(), n, !0]), s.events.fire(v.CalendarEvents.yearSelected, [i]), s.paint()
                                    }
                            }
                        },
                        ".dhx_calendar-action__cancel": function() {
                            s.showDate(s._getSelected(), "calendar"), s.events.fire(v.CalendarEvents.cancelClick, [])
                        },
                        ".dhx_calendar-action__show-month": function() {
                            return s.showDate(null, "month")
                        },
                        ".dhx_calendar-action__show-year": function() {
                            return s.showDate(null, "year")
                        },
                        ".dhx_calendar-action__next": function() {
                            var t;
                            switch (s._currentViewMode) {
                                case "calendar":
                                    t = h.DateHelper.addMonth(s._currentDate, 1);
                                    break;
                                case "month":
                                    t = h.DateHelper.addYear(s._currentDate, 1);
                                    break;
                                case "year":
                                    t = h.DateHelper.addYear(s._currentDate, 12)
                            }
                            s.showDate(t)
                        },
                        ".dhx_calendar-action__prev": function() {
                            var t;
                            switch (s._currentViewMode) {
                                case "calendar":
                                    t = h.DateHelper.addMonth(s._currentDate, -1);
                                    break;
                                case "month":
                                    t = h.DateHelper.addYear(s._currentDate, -1);
                                    break;
                                case "year":
                                    t = h.DateHelper.addYear(s._currentDate, -12)
                            }
                            s.showDate(t)
                        },
                        ".dhx_calendar-action__show-timepicker": function() {
                            s._currentViewMode = "timepicker", s.paint()
                        }
                    },
                    onmouseover: {
                        ".dhx_calendar-day": function(t, e) {
                            s.events.fire(v.CalendarEvents.dateMouseOver, [new Date(e.attrs._date), t]), s.events.fire(v.CalendarEvents.dateHover, [new Date(e.attrs._date), t])
                        }
                    }
                }
            }, m.prototype._getData = function(r) {
                for (var s = this, t = "monday" === this.config.weekStart ? 1 : 0, e = [], i = 6, a = h.DateHelper.weekStart(h.DateHelper.monthStart(r), t); i--;) {
                    for (var n = h.DateHelper.getWeekNumber(a), l = 0, o = 7, c = [], u = function() {
                            var t, e = h.DateHelper.isWeekEnd(a),
                                i = r.getMonth() === a.getMonth(),
                                n = d.config.disabledDates && d.config.disabledDates(a),
                                o = [];
                            d.config.range && d._selected[0] && d._selected[1] && (t = function() {
                                if (s._selected[0] && s._selected[1]) {
                                    var t = h.DateHelper.dayStart(s._selected[0]),
                                        e = h.DateHelper.dayStart(s._selected[1]);
                                    return t <= a && a <= e && (h.DateHelper.isSameDay(s._selected[0], s._selected[1]) ? null : "dhx_calendar-day--in-range")
                                }
                            }, d.config.$rangeMark = t), e && i && o.push("dhx_calendar-day--weekend"), i || (d.config.thisMonthOnly ? (l++, o.push("dhx_calendar-day--hidden")) : o.push("dhx_calendar-day--muffled")), !d.config.mark || (i = d.config.mark(a)) && o.push(i), d.config.$rangeMark && (t = d.config.$rangeMark(a)) && o.push(t), n && (e ? o.push("dhx_calendar-day--weekend-disabled") : o.push("dhx_calendar-day--disabled")), d._selected.forEach(function(t, e) {
                                t && h.DateHelper.isSameDay(t, a) && (t = "dhx_calendar-day--selected", s.config.range && (t += " dhx_calendar-day--selected-" + (0 === e ? "first " : "last")), o.push(t))
                            }), c.push({
                                date: a,
                                day: a.getDate(),
                                css: o.join(" ")
                            }), a = h.DateHelper.addDay(a)
                        }, d = this; o--;) u();
                    e.push({
                        weekNumber: n,
                        days: c,
                        disabledWeekNumber: 7 === l
                    })
                }
                return e
            }, m.prototype._drawCalendar = function() {
                for (var t, e = this._currentDate, i = this.config, n = i.weekStart, o = i.thisMonthOnly, r = i.css, s = i.timePicker, i = i.width, n = ("monday" === n ? p(g.default.daysShort.slice(1), [g.default.daysShort[0]]) : g.default.daysShort).map(function(t) {
                        return _.el(".dhx_calendar-weekday", t)
                    }), a = [], l = [], c = 0, u = this._getData(e); c < u.length; c++) {
                    var d = u[c],
                        h = d.days.map(function(t) {
                            return _.el("div.dhx_calendar-day", {
                                class: t.css,
                                _date: t.date,
                                tabIndex: 1
                            }, t.day)
                        });
                    !this.config.weekNumbers || d.disabledWeekNumber && o || l.push(_.el("div", {
                        class: "dhx_calendar-week-number"
                    }, d.weekNumber)), a = a.concat(h)
                }
                this.config.weekNumbers && (t = _.el(".dhx_calendar__week-numbers", l));
                r = "dhx_calendar dhx_widget" + (r ? " " + r : "") + (s ? " dhx_calendar--with_timepicker" : "") + (this.config.weekNumbers ? " dhx_calendar--with_week-numbers" : "");
                return _.el("div", f({
                    class: r,
                    style: {
                        width: this.config.weekNumbers ? "calc(" + i + " + 48px )" : i
                    }
                }, this._handlers), [_.el(".dhx_calendar__wrapper", [this._drawHeader(_.el("button.dhx_calendar-action__show-month.dhx_button.dhx_button--view_link.dhx_button--size_small.dhx_button--color_secondary.dhx_button--circle", g.default.months[e.getMonth()] + " " + e.getFullYear())), this.config.weekNumbers && _.el(".dhx_calendar__dates-wrapper", [_.el(".dhx_calendar__weekdays", n), _.el(".dhx_calendar__days", a), t]), !this.config.weekNumbers && _.el(".dhx_calendar__weekdays", n), !this.config.weekNumbers && _.el(".dhx_calendar__days", a), s ? _.el(".dhx_timepicker__actions", [_.el("button.dhx_calendar__timepicker-button.dhx_button.dhx_button--view_link.dhx_button--size_small.dhx_button--color_secondary.dhx_button--width_full.dhx_button--circle.dhx_calendar-action__show-timepicker", [_.el("span.dhx_button__icon.dxi.dxi-clock-outline"), _.el("span.dhx_button__text", this._time)])]) : null])])
            }, m.prototype._drawMonthSelector = function() {
                var i = this._currentDate,
                    n = i.getMonth(),
                    o = this._getSelected() ? this._getSelected().getFullYear() : null,
                    t = this.config,
                    e = t.css,
                    r = t.timePicker,
                    s = t.weekNumbers,
                    a = t.width,
                    t = t.mode,
                    r = "dhx_calendar dhx_widget" + (e ? " " + e : "") + (r ? " dhx_calendar--with_timepicker" : "") + (s ? " dhx_calendar--with_week-numbers" : "");
                return _.el("div", f({
                    class: r,
                    style: {
                        width: s ? "calc(" + a + " + 48px)" : a
                    }
                }, this._handlers), [_.el(".dhx_calendar__wrapper", [this._drawHeader(_.el("button.dhx_calendar-action__show-year.dhx_button.dhx_button--view_link.dhx_button--size_small.dhx_button--color_secondary.dhx_button--circle", i.getFullYear())), _.el(".dhx_calendar__months", g.default.monthsShort.map(function(t, e) {
                    return _.el("div", {
                        class: "dhx_calendar-month" + (n === e && o === i.getFullYear() ? " dhx_calendar-month--selected" : ""),
                        tabIndex: 1,
                        _date: e
                    }, t)
                })), "month" !== t ? _.el(".dhx_calendar__actions", [_.el("button.dhx_button.dhx_button--color_primary.dhx_button--view_link.dhx_button--size_small.dhx_button--width_full.dhx_button--circle.dhx_calendar-action__cancel", g.default.cancel)]) : null])])
            }, m.prototype._drawYearSelector = function() {
                var e = this,
                    t = this._currentDate,
                    i = h.DateHelper.getTwelweYears(t),
                    n = this.config,
                    o = n.css,
                    r = n.timePicker,
                    s = n.weekNumbers,
                    t = n.width,
                    n = n.mode,
                    r = "dhx_calendar dhx_widget" + (o ? " " + o : "") + (r ? " dhx_calendar--with_timepicker" : "") + (s ? " dhx_calendar--with_week-numbers" : "");
                return _.el("div", f({
                    class: r,
                    style: {
                        width: s ? "calc(" + t + " + 48px)" : t
                    }
                }, this._handlers), [_.el(".dhx_calendar__wrapper", [this._drawHeader(_.el("button.dhx_button.dhx_button--view_link.dhx_button--size_small.dhx_button--color_secondary.dhx_button--circle", i[0] + "-" + i[i.length - 1])), _.el(".dhx_calendar__years", i.map(function(t) {
                    return _.el("div", {
                        class: "dhx_calendar-year" + (e._getSelected() && t === e._getSelected().getFullYear() ? " dhx_calendar-year--selected" : ""),
                        _date: t,
                        tabIndex: 1
                    }, t)
                })), "year" !== n && "month" !== n ? _.el(".dhx_calendar__actions", [_.el("button.dhx_button.dhx_button--color_primary.dhx_button--view_link.dhx_button--size_small.dhx_button--width_full.dhx_button--circle.dhx_calendar-action__cancel", g.default.cancel)]) : null])])
            }, m.prototype._drawHeader = function(t) {
                return _.el(".dhx_calendar__navigation", [_.el("button.dhx_calendar-navigation__button.dhx_calendar-action__prev" + d.linkButtonClasses + ".dhx_button--icon.dhx_button--circle", [_.el(".dhx_button__icon.dxi.dxi-chevron-left")]), t, _.el("button.dhx_calendar-navigation__button.dhx_calendar-action__next" + d.linkButtonClasses + ".dhx_button--icon.dhx_button--circle", [_.el(".dhx_button__icon.dxi.dxi-chevron-right")])])
            }, m.prototype._drawTimepicker = function() {
                var t = this.config,
                    e = t.css,
                    i = t.weekNumbers,
                    t = t.width;
                return _.el(".dhx_widget.dhx-calendar", {
                    class: e ? " " + e : "",
                    style: {
                        width: i ? "calc(" + t + " + 48px)" : t
                    }
                }, [_.inject(this._timepicker.getRootView())])
            }, m);

        function m(t, e) {
            void 0 === e && (e = {});
            var o = r.call(this, t, s.extend({
                weekStart: "sunday",
                thisMonthOnly: !1,
                dateFormat: window && window.dhx && window.dhx.dateFormat,
                width: "250px"
            }, e)) || this;
            switch (o._selected = [], o.events = new a.EventSystem, o.config.disabledDates = o.config.disabledDates || o.config.block, o.config.mode = o.config.mode || o.config.view, o.config.dateFormat || (o.config.timePicker ? 12 === o.config.timeFormat ? o.config.dateFormat = "%d/%m/%y %h:%i %A" : o.config.dateFormat = "%d/%m/%y %H:%i" : o.config.dateFormat = "%d/%m/%y"), o.config.value && o._setSelected(o.config.value), o.config.date ? o._currentDate = h.DateHelper.toDateObject(o.config.date, o.config.dateFormat) : o._getSelected() ? o._currentDate = h.DateHelper.copy(o._getSelected()) : o._currentDate = new Date, o.config.mode) {
                case "month":
                    o._currentViewMode = "month";
                    break;
                case "year":
                    o._currentViewMode = "year";
                    break;
                default:
                    o._currentViewMode = "calendar"
            }
            o._initHandlers(), o.config.timePicker && (o._timepicker = new c.Timepicker(null, {
                timeFormat: o.config.timeFormat,
                controls: !0
            }), e = o._getSelected() || new Date, o._timepicker.setValue(e), o._time = o._timepicker.getValue(), o._timepicker.events.on(c.TimepickerEvents.afterClose, function() {
                o._timepicker.setValue(o._time), o.showDate(null, "calendar")
            }), o._timepicker.events.on(c.TimepickerEvents.afterApply, function() {
                var t = o._timepicker.getValue(!0),
                    e = t.hour,
                    i = t.minute,
                    n = t.AM,
                    t = o._getSelected(),
                    n = h.DateHelper.withHoursAndMinutes(o._getSelected() || new Date, e, i, n);
                o.events.fire(v.CalendarEvents.beforeChange, [n, t, !0]) && (o._selected[o._selected.length - 1] = n, o.events.fire(v.CalendarEvents.change, [n, t, !0])), o._time = o._timepicker.getValue(), o.showDate(null, "calendar")
            }));
            return o.mount(t, _.create({
                render: function() {
                    return o._draw()
                }
            })), o
        }
        e.Calendar = o
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(t, e)
            }, function(t, e) {
                function i() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }),
            r = this && this.__assign || function() {
                return (r = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = i(1),
            a = i(0),
            l = i(3),
            c = i(4),
            u = i(14),
            d = i(40),
            h = i(69),
            f = i(147),
            p = i(70);

        function _(t, e) {
            return isNaN(t) ? 0 : Math.min(e, Math.max(0, t))
        }
        var g, o = (g = c.View, o(v, g), v.prototype.getValue = function(t) {
            12 === this.config.timeFormat && (this._time.hour = this._time.hour % 12 || 12);
            var e = this._time,
                i = e.hour,
                n = e.minute,
                e = e.AM;
            if (t) {
                t = {
                    hour: i,
                    minute: n
                };
                return 12 === this.config.timeFormat && (t.AM = e), t
            }
            return (i < 10 ? "0" + i : i) + ":" + (n < 10 ? "0" + n : n) + (12 === this.config.timeFormat ? e ? "AM" : "PM" : "")
        }, v.prototype.setValue = function(t) {
            this._setValue(t), this._hoursSlider.setValue(this._time.hour), this._minutesSlider.setValue(this._time.minute), this._inputsView.paint()
        }, v.prototype.clear = function() {
            24 === this.config.timeFormat ? this.setValue("00:00") : this.setValue("12:00AM")
        }, v.prototype.destructor = function() {
            this._minutesSlider.destructor(), this._hoursSlider.destructor(), this.events.clear(), this.unmount()
        }, v.prototype.getRootView = function() {
            return this.layout.getRootView()
        }, v.prototype._setValue = function(t) {
            var e, i, n = 0,
                o = 0;
            return "number" == typeof t && (t = new Date(t)), t instanceof Date ? (n = t.getMinutes(), o = t.getHours()) : Array.isArray(t) ? (o = _(t[0], 23), n = _(t[1], 59), t[2] && "pm" === t[2].toLowerCase() && (e = !0)) : "string" == typeof t ? (o = _(+(i = t.match(/\d+/g))[0], 23), n = _(+i[1], 59), t.toLowerCase().includes("pm") && (e = !0)) : "object" == typeof t && t.hasOwnProperty("hour") && t.hasOwnProperty("minute") && (o = t.hour, n = t.minute, e = !t.AM), e && o < 12 && (o += 12), 12 === this.config.timeFormat && !f.isTimeCheck(t) && 12 <= o && (e = !0), this._time = {
                hour: o,
                minute: n,
                AM: !e
            }
        }, v.prototype._initUI = function(t) {
            var e = this,
                i = {
                    gravity: !1,
                    css: "dhx_widget dhx_timepicker " + (this.config.css || "") + (this.config.controls ? " dhx_timepicker--with-controls" : ""),
                    rows: [{
                        id: "timepicker",
                        css: "dhx_timepicker__inputs"
                    }, {
                        id: "hour-slider",
                        css: "dhx_timepicker__hour"
                    }, {
                        id: "minute-slider",
                        css: "dhx_timepicker__minute"
                    }]
                };
            this.config.controls && (i.rows.unshift({
                id: "close-action",
                css: "dhx_timepicker__close"
            }), i.rows.push({
                id: "save-action",
                css: "dhx_timepicker__save"
            }));
            var n = this.layout = new u.Layout(t, i),
                o = a.create({
                    render: function() {
                        return e._draw()
                    }
                }),
                t = this._inputsView = c.toViewLike(o),
                i = this._minutesSlider = new d.Slider(null, {
                    min: 0,
                    max: 59,
                    step: 1,
                    tooltip: !1,
                    labelPosition: "top",
                    label: h.default.minutes,
                    value: this.config.value ? this._time.minute : 0
                }),
                o = this._hoursSlider = new d.Slider(null, {
                    min: 0,
                    max: 23,
                    step: 1,
                    tooltip: !1,
                    labelPosition: "top",
                    label: h.default.hours,
                    value: !this.config.value || 12 === this._time.hour && this._time.AM ? 0 : this._time.hour
                });
            n.getCell("timepicker").attach(t), n.getCell("hour-slider").attach(o), n.getCell("minute-slider").attach(i), this.config.controls && (n.getCell("save-action").attach(function() {
                return a.el("button.dhx_timepicker__button-save.dhx_button.dhx_button--view_flat.dhx_button--color_primary.dhx_button--size_medium.dhx_button--circle.dhx_button--width_full", {
                    onclick: e._outerHandlers.save
                }, h.default.save)
            }), n.getCell("close-action").attach(function() {
                return a.el("button.dhx_timepicker__button-close.dhx_button.dhx_button--view_link.dhx_button--size_medium.dhx_button--view_link.dhx_button--color_secondary.dhx_button--icon.dhx_button--circle", {
                    onclick: e._outerHandlers.close
                }, [a.el("span.dhx_button__icon.dxi.dxi-close")])
            }))
        }, v.prototype._initHandlers = function() {
            var i = this;
            this._handlers = {
                onchange: {
                    ".dhx_timepicker-input--hour": function(t) {
                        var e = _(parseInt(t.target.value, 10), 23);
                        t.target.value = e, i._hoursSlider.setValue(e)
                    },
                    ".dhx_timepicker-input--minutes": function(t) {
                        var e = _(parseInt(t.target.value, 10), 59);
                        t.target.value = e, i._minutesSlider.setValue(e)
                    }
                }
            }, this._outerHandlers = {
                close: function() {
                    i.events.fire(p.TimepickerEvents.beforeClose, [i.getValue("timeObject" === i.config.valueFormat)]) && (i.events.fire(p.TimepickerEvents.afterClose, [i.getValue("timeObject" === i.config.valueFormat)]), i.events.fire(p.TimepickerEvents.close, []))
                },
                save: function() {
                    i.events.fire(p.TimepickerEvents.beforeApply, [i.getValue("timeObject" === i.config.valueFormat)]) && (i.events.fire(p.TimepickerEvents.afterApply, [i.getValue("timeObject" === i.config.valueFormat)]), i.events.fire(p.TimepickerEvents.apply, [i.getValue()]), i.events.fire(p.TimepickerEvents.save, [i._time]))
                }
            }
        }, v.prototype._initEvents = function() {
            var e = this;
            this._hoursSlider.events.on(d.SliderEvents.change, function(t) {
                t < e._hoursSlider.config.min || t > e._hoursSlider.config.max || (12 === e.config.timeFormat ? (e._time.AM = t < 12, e._time.hour = t % 12 || 12) : e._time.hour = t, e.events.fire(p.TimepickerEvents.change, [e.getValue("timeObject" === e.config.valueFormat)]), e._inputsView.paint())
            }), this._minutesSlider.events.on(d.SliderEvents.change, function(t) {
                t < e._minutesSlider.config.min || t > e._minutesSlider.config.max || (e._time.minute = t, e.events.fire(p.TimepickerEvents.change, [e.getValue("timeObject" === e.config.valueFormat)]), e._inputsView.paint())
            })
        }, v.prototype._draw = function() {
            return a.el(".dhx_timepicker-inputs", r({}, this._handlers), [a.el("input.dhx_timepicker-input.dhx_timepicker-input--hour", {
                _key: "hour",
                value: 1 < this.getValue(!0).hour.toString().length ? this.getValue(!0).hour : "0" + this.getValue(!0).hour
            }), a.el("span.dhx_timepicker-delimer", ":"), a.el("input.dhx_timepicker-input.dhx_timepicker-input--minutes", {
                _key: "minute",
                value: 1 < this.getValue(!0).minute.toString().length ? this.getValue(!0).minute : "0" + this.getValue(!0).minute
            }), 12 === this.config.timeFormat ? a.el(".dhx_timepicker-ampm", this._time.AM ? "AM" : "PM") : null])
        }, v);

        function v(t, e) {
            void 0 === e && (e = {});
            e = g.call(this, t, s.extend({
                timeFormat: 24,
                controls: !1,
                valueFormat: "string",
                actions: !1
            }, e)) || this;
            return e.events = new l.EventSystem(e), e._time = {
                hour: 0,
                minute: 0,
                AM: !0
            }, 12 === e.config.timeFormat && (e._time.hour = 12), e.config.controls = e.config.controls || e.config.actions, e.config.value && e._setValue(e.config.value), e._initUI(t), e._initHandlers(), e._initEvents(), e
        }
        e.Timepicker = o
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(t, e)
            }, function(t, e) {
                function i() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }),
            l = this && this.__assign || function() {
                return (l = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = i(1),
            c = i(0),
            s = i(3),
            a = i(15),
            u = i(4),
            d = i(10),
            h = i(68),
            f = i(6);

        function p(t, e, i) {
            return t < e ? e : i < t ? i : t
        }
        var _, o = (_ = u.View, o(g, _), g.prototype.disable = function() {
            this._disabled = !0, this.paint()
        }, g.prototype.enable = function() {
            this._disabled = !1, this.paint()
        }, g.prototype.isDisabled = function() {
            return this._disabled
        }, g.prototype.focus = function(t) {
            this.getRootView().refs[t ? "extraRunner" : "runner"].el.focus()
        }, g.prototype.getValue = function() {
            var t, e;
            return this.config.range ? (t = this._getValue(this._currentPosition)) < (e = this._getValue(this._extraCurrentPosition)) ? [t, e] : [e, t] : [this._getValue(this._currentPosition)]
        }, g.prototype.setValue = function(t) {
            var e = this._getValue(this._currentPosition);
            if (Array.isArray(t) && 1 < t.length) {
                var i = this._getValue(this._extraCurrentPosition);
                this._setValue(t[0], !1), this.events.fire(h.SliderEvents.change, [t[0], e, !1]), this._setValue(t[1], !0), this.events.fire(h.SliderEvents.change, [t[1], i, !0])
            } else {
                if (t = parseFloat(t), isNaN(t)) throw new Error("Wrong value type, for more info check documentation https://docs.dhtmlx.com/suite/slider__api__slider_setvalue_method.html");
                this._setValue(t), this.events.fire(h.SliderEvents.change, [t, e, !1])
            }
            this.paint()
        }, g.prototype.destructor = function() {
            this._hotkeysDestructor(), document.body.contains(this._tooltip) && document.body.removeChild(this._tooltip), this._tooltip = null, this.unmount()
        }, g.prototype._calcSliderPosition = function() {
            var t = this.getRootView();
            t && (t = t.refs.track.el.getBoundingClientRect(), this._offsets = {
                left: t.left + window.pageXOffset,
                top: t.top + window.pageYOffset
            }, this._length = "horizontal" === this.config.mode ? t.width : t.height)
        }, g.prototype._initHotkeys = function() {
            var n = this;
            this._hotkeysDestructor = a.addHotkeys({
                arrowleft: function(t) {
                    "vertical" !== n.config.mode && (t.preventDefault(), n._move(-n.config.step, t.target.classList.contains("dhx_slider__thumb--extra")))
                },
                arrowright: function(t) {
                    "vertical" !== n.config.mode && (t.preventDefault(), n._move(n.config.step, t.target.classList.contains("dhx_slider__thumb--extra")))
                },
                arrowup: function(t) {
                    "horizontal" !== n.config.mode && (t.preventDefault(), n._move(n.config.step, t.target.classList.contains("dhx_slider__thumb--extra")))
                },
                arrowdown: function(t) {
                    "horizontal" !== n.config.mode && (t.preventDefault(), n._move(-n.config.step, t.target.classList.contains("dhx_slider__thumb--extra")))
                }
            }, function() {
                var t = document.activeElement,
                    e = n.getRootView().refs;
                if (!e) return !1;
                var i = e.runner;
                return !(!i || i.el !== t) || !(!n.config.range || !e.extraRunner || e.extraRunner.el !== t)
            })
        }, g.prototype._move = function(t, e) {
            this.config.inverse && (t = -t);
            var i = this.config,
                n = i.max,
                o = i.min,
                r = e ? this._getValue(this._extraCurrentPosition) : this._getValue(this._currentPosition),
                i = r + t;
            this._setValue(r + t, e), (n < i || i < o) && (i = r), this.events.fire(h.SliderEvents.change, [i, r, e]), this.paint()
        }, g.prototype._initStartPosition = function() {
            var t, e, i = this.config,
                n = i.max,
                o = i.min,
                r = i.range,
                i = (t = this.config.value, e = this.config.min, i = this.config.max, (t = void 0 === t ? [] : Array.isArray(t) ? t : "string" == typeof t ? t.split(",").map(function(t) {
                    return parseInt(t, 10)
                }) : [t])[0] = void 0 === t[0] ? e : p(t[0], e, i), t[1] = void 0 === t[1] ? i : p(t[1], e, i), t),
                t = i[0],
                i = i[1];
            this._currentPosition = (t - o) / (n - o) * 100, r && (this._extraCurrentPosition = (n - i) / (n - o) * 100), this._currentPosition = (t - o) / (n - o) * 100, r && (this._extraCurrentPosition = (i - o) / (n - o) * 100), this._isInverse() && (this._currentPosition = 100 - this._currentPosition, r && (this._extraCurrentPosition = 100 - this._extraCurrentPosition))
        }, g.prototype._getValue = function(t) {
            this._isInverse() && (t = 100 - t);
            var e = this.config,
                i = e.min,
                n = e.max,
                e = e.step;
            if (100 === t) return n;
            if (0 === t) return i;
            t = t * (n - i) / 100, n = t % e, e = e / 2 <= n ? e : 0;
            return +(Number(i) + Number(t) - n + e).toFixed(5)
        }, g.prototype._setValue = function(t, e) {
            void 0 === e && (e = !1);
            var i = this.config,
                n = i.max,
                i = i.min;
            if (n < t || t < i) return !1;
            i = (t - i) / (n - i) * 100, i = this._isInverse() ? 100 - i : i;
            e ? this._extraCurrentPosition = i : this._currentPosition = i
        }, g.prototype._initHandlers = function() {
            function e(t) {
                if (t.targetTouches || t.preventDefault(), t = ((t.targetTouches ? t.targetTouches[0] : t)[n._axis] - n._getBegining()) / n._length * 100, n._findNewDirection) {
                    if (Math.abs(n._currentPosition - t) < 1) return;
                    t > n._currentPosition ? n._possibleRange = [n._currentPosition, 100] : n._possibleRange = [0, n._currentPosition], n._findNewDirection = null
                }
                n._inSide(t) && n._updatePosition(t, n._isExtraActive), n.paint()
            }

            function i(t) {
                var e, i;
                n._disabled || 3 === t.which || (n.events.fire(h.SliderEvents.mousedown, [t]), n._isMouseMoving = !0, e = t.target.classList.contains("dhx_slider__thumb--extra") ? (n._isExtraActive = !0, n._extraCurrentPosition) : (n._isExtraActive = !1, n._currentPosition), n._findNewDirection = null, n.config.range ? (t = (i = n._currentPosition > n._extraCurrentPosition ? [n._currentPosition, n._extraCurrentPosition] : [n._extraCurrentPosition, n._currentPosition])[0], i = i[1], n._currentPosition === n._extraCurrentPosition ? (n._findNewDirection = e, n._possibleRange = [0, 100]) : n._possibleRange = e < t ? [0, t] : [i, 100]) : n._possibleRange = [0, 100])
            }
            var n = this,
                o = function(t) {
                    n.events.fire(h.SliderEvents.mouseup, [t]), setTimeout(function() {
                        n._isMouseMoving = !1, n.paint()
                    }, 4), t.targetTouches ? (document.removeEventListener("touchend", o), document.removeEventListener("touchmove", e)) : (document.removeEventListener("mouseup", o), document.removeEventListener("mousemove", e))
                };
            this.config.helpMessage && (this._helper = new d.Popup({
                css: "dhx_tooltip dhx_tooltip--forced dhx_tooltip--light"
            }), this._helper.attachHTML(this.config.helpMessage)), this._handlers = {
                showHelper: function(t) {
                    t.preventDefault(), t.stopPropagation(), n._helper.show(t.target)
                },
                onmousedown: function(t) {
                    i(t), document.addEventListener("mousemove", e), document.addEventListener("mouseup", o)
                },
                ontouchstart: function(t) {
                    n._setTooltip(t), n._mouseIn = !1, i(t), document.addEventListener("touchmove", e), document.addEventListener("touchend", o), n.paint()
                },
                ontouchend: function(t) {
                    n._setTooltip(t), n._mouseIn = !1, n.paint()
                },
                onlabelClick: function() {
                    n.getRootView().refs.runner.el.focus()
                },
                onclick: function(t) {
                    var e;
                    n._disabled || n._isMouseMoving || 3 === t.which || (e = (t[n._axis] - n._getBegining()) / n._length * 100, t = n.getRootView().refs, !n.config.range || Math.abs(n._currentPosition - e) < Math.abs(n._extraCurrentPosition - e) ? (n._updatePosition(e, !1), t.runner.el.focus()) : (n._updatePosition(e, !0), t.extraRunner.el.focus()), n.paint())
                },
                onmouseover: function(t) {
                    n._setTooltip(t), n._mouseIn = !0, n.paint()
                },
                onmouseout: function(t) {
                    n._setTooltip(t), n._mouseIn = !1, n.paint()
                },
                onfocus: function(t) {
                    n._setTooltip(t), n._focusIn = !0, n.paint()
                },
                onblur: function(t) {
                    n._setTooltip(t), n._focusIn = !1, n.paint()
                }
            }
        }, g.prototype._getBegining = function() {
            return "horizontal" === this.config.mode ? this._offsets.left - window.pageXOffset : this._offsets.top - window.pageYOffset
        }, g.prototype._inSide = function(t) {
            var e = this._possibleRange;
            return t < e[0] ? (this._updatePosition(e[0], this._isExtraActive), !1) : !(t > e[1]) || (this._updatePosition(e[1], this._isExtraActive), !1)
        }, g.prototype._updatePosition = function(t, e) {
            void 0 === e && (e = !1), 100 < t && (t = 100), t < 0 && (t = 0);
            var i = this.config,
                n = i.max,
                o = i.min,
                i = e ? this._extraCurrentPosition : this._currentPosition,
                i = this._getValue(i),
                t = this._getValue(t);
            i !== t && (o = (t - o) / (n - o) * 100, o = this._isInverse() ? 100 - o : o, e ? this._extraCurrentPosition = o : this._currentPosition = o, this.events.fire(h.SliderEvents.change, [t, i, e]))
        }, g.prototype._getRunnerStyle = function(t) {
            void 0 === t && (t = !1);
            var e = "horizontal" === this.config.mode ? "left" : "top",
                i = t ? this._extraCurrentPosition : this._currentPosition;
            return (t = {})[e] = i + "%", t
        }, g.prototype._isInverse = function() {
            return this.config.inverse && "horizontal" === this.config.mode || !this.config.inverse && "vertical" === this.config.mode
        }, g.prototype._getRunnerCss = function(t) {
            return void 0 === t && (t = !1), "dhx_slider__thumb" + (t ? " dhx_slider__thumb--extra" : "") + (this._isMouseMoving && (t && this._isExtraActive || !t && !this._isExtraActive) ? " dhx_slider__thumb--active" : "") + (this._disabled ? " dhx_slider__thumb--disabled" : "") + (this._isNullable(t ? this._extraCurrentPosition : this._currentPosition) && !this.config.range ? " dhx_slider__thumb--nullable" : "")
        }, g.prototype._draw = function() {
            var t = this.config,
                e = t.labelPosition,
                i = t.mode,
                n = t.hiddenLabel,
                o = t.tick,
                r = t.majorTick,
                s = t.css,
                a = t.helpMessage,
                t = f.getLabelStyle(l(l({}, this.config), {
                    required: !1
                }));
            return !this._tooltip || this._mouseIn && this._focusIn && this._isMouseMoving || document.body.contains(this._tooltip) && document.body.removeChild(this._tooltip), c.el("div", {
                class: "dhx_slider dhx_slider--mode_" + i + ("left" === e ? " dhx_slider--label-inline" : "") + (n ? " dhx_slider--label_sr" : "") + (o ? " dhx_slider--ticks" : "") + (r ? " dhx_slider--major-ticks" : "") + (s ? " " + s : "") + (this._disabled ? " dhx_slider--disabled" : "")
            }, [t ? c.el("label.dhx_label.dhx_slider__label", {
                style: t.style,
                class: a ? "dhx_label--with-help" : "",
                onclick: this._handlers.onlabelClick
            }, a ? [t.label && c.el("span.dhx_label__holder", t.label), c.el("span.dhx_label-help.dxi.dxi-help-circle-outline", {
                tabindex: "0",
                role: "button",
                onclick: this._handlers.showHelper
            })] : t.label) : null, this._drawSlider()])
        }, g.prototype._drawSlider = function() {
            return c.el(".dhx_widget.dhx_slider__track-holder", {
                dhx_widget_id: this._uid
            }, [c.el(".dhx_slider__track", {
                _ref: "track",
                onmouseover: this._handlers.onmouseover,
                onmouseout: this._handlers.onmouseout,
                onclick: this._handlers.onclick
            }, [this._getDetector(), c.el("div", {
                _ref: "runner",
                class: this._getRunnerCss(),
                ontouchstart: this._handlers.ontouchstart,
                ontouchend: this._handlers.ontouchend,
                onmousedown: this._handlers.onmousedown,
                onfocus: this._handlers.onfocus,
                onblur: this._handlers.onblur,
                style: this._getRunnerStyle(),
                tabindex: 0
            }), this.config.tooltip && (this._mouseIn || this._focusIn || this._isMouseMoving) ? this._drawTooltip() : null, this.config.tooltip && this.config.range && (this._mouseIn || this._focusIn || this._isMouseMoving) ? this._drawTooltip(!0) : null, this.config.range ? c.el("div", {
                _ref: "extraRunner",
                class: this._getRunnerCss(!0),
                ontouchstart: this._handlers.ontouchstart,
                ontouchend: this._handlers.ontouchend,
                onmousedown: this._handlers.onmousedown,
                onfocus: this._handlers.onfocus,
                onblur: this._handlers.onblur,
                style: this._getRunnerStyle(!0),
                tabindex: 0
            }) : null]), this.config.tick ? this._drawTicks() : null])
        }, g.prototype._getDetector = function() {
            var t;
            if (this._disabled) return c.el(".dhx_slider__range");
            var e = "horizontal" === this.config.mode ? "left" : "top",
                i = "horizontal" === this.config.mode ? "width" : "height";
            if (this.config.range) {
                var n = this._currentPosition > this._extraCurrentPosition ? [this._currentPosition, this._extraCurrentPosition] : [this._extraCurrentPosition, this._currentPosition],
                    o = n[0],
                    r = n[1];
                return c.el(".dhx_slider__range", {
                    style: ((n = {})[e] = r + "%", n[i] = o - r + "%", n)
                })
            }
            return this._isInverse() ? c.el(".dhx_slider__range", {
                style: ((t = {})[e] = this._currentPosition + "%", t[i] = 100 - this._currentPosition + "%", t)
            }) : c.el(".dhx_slider__range", {
                style: ((t = {})[e] = 0, t[i] = this._currentPosition + "%", t)
            })
        }, g.prototype._drawTooltip = function(t) {
            var e, i, n;
            void 0 === t && (t = !1), "none" !== this._activeTooltip && (e = "extraTooltip" === this._activeTooltip ? this._extraCurrentPosition : this._currentPosition, i = "horizontal" === this.config.mode ? "left" : "top", n = "", (t && this._isExtraActive || !t && !this._isExtraActive) && (n += " dhx_slider__thumb-label--active"), this._tooltip || (this._tooltip = document.createElement("div")), t = ("tooltip" === this._activeTooltip ? this.getRootView().refs.runner : this.getRootView().refs.extraRunner).el.getBoundingClientRect(), this._tooltip.className = "dhx_slider__thumb-label" + n, this._tooltip.style.left = t.x + ("left" == i ? 6 : -30) + window.pageXOffset + "px", this._tooltip.style.top = t.y + ("left" == i ? -30 : 6) + window.pageYOffset + "px", this._tooltip.innerText = this._getValue(e).toString(), document.body.appendChild(this._tooltip))
        }, g.prototype._getTicks = function() {
            for (var t = this.config, e = t.max, i = t.min, n = t.step, o = t.tick, r = t.majorTick, s = e - i, a = n * o / s, l = [], c = 0, u = 0; c < 1;) {
                var d = +(Number(i) + c * s).toFixed(5),
                    h = u % r == 0;
                l.push({
                    position: (this._isInverse() ? 100 * (1 - c) : 100 * c) + "%",
                    isMultiple: h,
                    label: h && "function" == typeof this.config.tickTemplate ? this.config.tickTemplate(d) : null
                }), c += a, u++
            }
            return l.push({
                position: (this._isInverse() ? 0 : 100) + "%",
                isMultiple: !0,
                label: "function" == typeof this.config.tickTemplate ? this.config.tickTemplate(e) : null
            }), l
        }, g.prototype._drawTicks = function() {
            var i = "horizontal" === this.config.mode ? "left" : "top";
            return c.el(".dhx_slider__ticks-holder", this._getTicks().map(function(t) {
                var e;
                return c.el("div", {
                    class: "dhx_slider__tick" + (t.isMultiple ? " dhx_slider__tick--major" : ""),
                    style: ((e = {})[i] = t.position, e)
                }, void 0 !== t.label ? [c.el(".dhx_slider__tick-label", t.label)] : null)
            }))
        }, g.prototype._isNullable = function(t) {
            return this._isInverse() ? 100 === t : 0 === t
        }, g.prototype._setTooltip = function(t) {
            t.target.classList.contains("dhx_slider__thumb--extra") ? this._activeTooltip = "extraTooltip" : t.target.classList.contains("dhx_slider__thumb") ? this._activeTooltip = "tooltip" : this._activeTooltip = "none"
        }, g);

        function g(t, e) {
            var i = _.call(this, t, r.extend({
                mode: "horizontal",
                min: 0,
                max: 100,
                step: 1,
                tooltip: !0
            }, e)) || this;
            i._disabled = !1, i.config.helpMessage = i.config.helpMessage || i.config.help, void 0 !== i.config.thumbLabel && (i.config.tooltip = i.config.thumbLabel), i.config.labelInline && (i.config.labelPosition = "left"), i.events = new s.EventSystem(i), i._axis = "horizontal" === i.config.mode ? "clientX" : "clientY", i._initStartPosition(), i._initHotkeys();
            e = c.create({
                render: function() {
                    return i._draw()
                },
                hooks: {
                    didMount: function() {
                        return i._calcSliderPosition()
                    },
                    didRedraw: function() {
                        return i._calcSliderPosition()
                    }
                }
            });
            return i._initHandlers(), i.mount(t, e), i
        }
        e.Slider = o
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(t, e)
            }, function(t, e) {
                function i() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }),
            s = this && this.__assign || function() {
                return (s = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r, a = i(1),
            l = i(0),
            c = i(3),
            u = i(2),
            d = i(4),
            h = i(67),
            o = (r = d.View, o(f, r), f.prototype.show = function(t, e, i) {
                var n = this;
                void 0 === e && (e = {}), this.events.fire(h.PopupEvents.beforeShow, [t]) && (t = u.toNode(t), this._isActive ? this._setPopupSize(t, e) : (i && this.attach(i), this._popup.style.left = "0", this._popup.style.top = "0", l.awaitRedraw().then(function() {
                    n._setPopupSize(t, e), n._popup.style.position = "fixed", document.body.appendChild(n._popup), n._isActive = !0
                }).then(function() {
                    n._popup.style.position = "absolute", n.events.fire(h.PopupEvents.afterShow, [t]), n._outerClickDestructor = n._detectOuterClick(t)
                })))
            }, f.prototype.hide = function() {
                this._hide(!1, null)
            }, f.prototype.isVisible = function() {
                return this._isActive
            }, f.prototype.attach = function(t, e) {
                return this._html = null, "object" == typeof t ? this._ui = t : "string" == typeof t ? this._ui = new window.dhx[t](null, e) : "function" == typeof t && (t.prototype instanceof d.View ? this._ui = new t(null, e) : this._ui = {
                    getRootView: function() {
                        return t(e)
                    }
                }), this.paint(), this._ui
            }, f.prototype.attachHTML = function(t) {
                this._html = t, this.paint()
            }, f.prototype.getWidget = function() {
                return this._ui
            }, f.prototype.getContainer = function() {
                return this.getRootView().refs.content.el
            }, f.prototype.toVDOM = function() {
                var t;
                return this._html ? t = l.el(".dhx_popup__inner-html-content", {
                    ".innerHTML": this._html
                }) : (t = this._ui ? this._ui.getRootView() : null) && t.render && (t = l.inject(t)), l.el("div", {
                    class: "dhx_popup-content",
                    onclick: this._clickEvent,
                    _key: this._uid,
                    _ref: "content"
                }, [t])
            }, f.prototype.destructor = function() {
                this.hide(), this._outerClickDestructor && this._outerClickDestructor(), this._popup = null
            }, f.prototype._setPopupSize = function(t, e, i) {
                var n = this;
                void 0 === i && (i = 3);
                var o = this._popup.getBoundingClientRect(),
                    r = o.width,
                    o = o.height;
                if (this._timeout && (clearTimeout(this._timeout), this._timeout = null), !i || 0 !== r && 0 !== o) {
                    r = u.fitPosition(t, s(s({
                        centering: !0,
                        mode: "bottom"
                    }, e), {
                        width: r,
                        height: o
                    })), o = r.left, r = r.top;
                    if (this._popup.style.left = o, this._popup.style.top = r, e.indent && 0 !== e.indent) switch (e.mode) {
                        case "top":
                            this._popup.style.top = parseInt(this._popup.style.top.slice(0, -2), null) - parseInt(e.indent.toString(), null) + "px";
                            break;
                        case "bottom":
                            this._popup.style.top = parseInt(this._popup.style.top.slice(0, -2), null) + parseInt(e.indent.toString(), null) + "px";
                            break;
                        case "left":
                            this._popup.style.left = parseInt(this._popup.style.left.slice(0, -2), null) - parseInt(e.indent.toString(), null) + "px";
                            break;
                        case "right":
                            this._popup.style.left = parseInt(this._popup.style.left.slice(0, -2), null) + parseInt(e.indent.toString(), null) + "px";
                            break;
                        default:
                            this._popup.style.top = parseInt(this._popup.style.top.slice(0, -2), null) + parseInt(e.indent.toString(), null) + "px"
                    }
                } else this._timeout = setTimeout(function() {
                    n._isActive && (n._setPopupSize(t, e, i - 1), n._timeout = null)
                })
            }, f.prototype._detectOuterClick = function(i) {
                var n = this,
                    o = function(t) {
                        for (var e = t.target; e;) {
                            if (e === i || e === n._popup) return;
                            e = e.parentNode
                        }
                        n._hide(!0, t) && document.removeEventListener("click", o)
                    };
                return document.addEventListener("click", o),
                    function() {
                        return document.removeEventListener("click", o)
                    }
            }, f.prototype._hide = function(t, e) {
                if (this._isActive) return !!this.events.fire(h.PopupEvents.beforeHide, [t, e]) && (document.body.removeChild(this._popup), this._isActive = !1, this._outerClickDestructor && (this._outerClickDestructor(), this._outerClickDestructor = null), this.events.fire(h.PopupEvents.afterHide, [e]), !0)
            }, f);

        function f(t) {
            void 0 === t && (t = {});
            var e = r.call(this, null, a.extend({}, t)) || this,
                i = e._popup = document.createElement("div");
            return i.className = "dhx_widget dhx_popup" + (e.config.css ? " " + e.config.css : ""), i.style.position = "absolute", e.mount(i, l.create({
                render: function() {
                    return e.toVDOM()
                }
            })), e._clickEvent = function(t) {
                return e.events.fire(h.PopupEvents.click, [t])
            }, e.events = t.events || new c.EventSystem(e), e._isActive = !1, e
        }
        e.Popup = o
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.isTimeCheck = function(t) {
            return /(^12:[0-5][0-9]?AM$)/i.test(t)
        }
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(1),
            o = i(41),
            i = (r.copy = function(t) {
                return new Date(t)
            }, r.fromYear = function(t) {
                return new Date(t, 0, 1)
            }, r.fromYearAndMonth = function(t, e) {
                return new Date(t, e, 1)
            }, r.weekStart = function(t, e) {
                e = (t.getDay() + 7 - e) % 7;
                return new Date(t.getFullYear(), t.getMonth(), t.getDate() - e)
            }, r.monthStart = function(t) {
                return new Date(t.getFullYear(), t.getMonth(), 1)
            }, r.yearStart = function(t) {
                return new Date(t.getFullYear(), 0, 1)
            }, r.dayStart = function(t) {
                return new Date(t.getFullYear(), t.getMonth(), t.getDate())
            }, r.addDay = function(t, e) {
                return void 0 === e && (e = 1), new Date(t.getFullYear(), t.getMonth(), t.getDate() + e)
            }, r.addMonth = function(t, e) {
                return void 0 === e && (e = 1), new Date(t.getFullYear(), t.getMonth() + e)
            }, r.addYear = function(t, e) {
                return void 0 === e && (e = 1), new Date(t.getFullYear() + e, t.getMonth())
            }, r.withHoursAndMinutes = function(t, e, i, n) {
                return void 0 === n || !n && 12 === e || n && 12 !== e ? new Date(t.getFullYear(), t.getMonth(), t.getDate(), e, i) : n && 12 === e ? new Date(t.getFullYear(), t.getMonth(), t.getDate(), 0, i) : new Date(t.getFullYear(), t.getMonth(), t.getDate(), e + 12, i)
            }, r.setMonth = function(t, e) {
                t.setMonth(e)
            }, r.setYear = function(t, e) {
                t.setFullYear(e)
            }, r.mergeHoursAndMinutes = function(t, e) {
                return new Date(t.getFullYear(), t.getMonth(), t.getDate(), e.getHours(), e.getMinutes())
            }, r.isWeekEnd = function(t) {
                return 0 === t.getDay() || 6 === t.getDay()
            }, r.getTwelweYears = function(t) {
                t = t.getFullYear(), t -= t % 12;
                return n.range(t, 11 + t)
            }, r.getWeekNumber = function(t) {
                6 !== t.getDay() && (t = r.addDay(t, 6 - t.getDay()));
                var e = (t.valueOf() - r.yearStart(t).valueOf()) / 864e5;
                return Math.floor((e - t.getDay() + 10) / 7)
            }, r.isSameDay = function(t, e) {
                return t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate()
            }, r.toDateObject = function(t, e) {
                return "string" == typeof t ? o.stringToDate(t, e) : new Date(t)
            }, r.nullTimestampDate = new Date(0), r);

        function r() {}
        e.DateHelper = i
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.linkButtonClasses = ".dhx_button.dhx_button--view_link.dhx_button--icon.dhx_button--size_medium.dhx_button--color_secondary"
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(t, e)
            }, function(t, e) {
                function i() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }),
            r = this && this.__spreadArrays || function() {
                for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
                for (var n = Array(t), o = 0, e = 0; e < i; e++)
                    for (var r = arguments[e], s = 0, a = r.length; s < a; s++, o++) n[o] = r[s];
                return n
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = i(0),
            l = i(3),
            c = i(2),
            u = i(4),
            d = i(1),
            h = i(44),
            f = i(72),
            p = i(45),
            _ = i(73),
            g = i(58),
            v = i(12),
            m = i(151),
            y = i(152),
            o = (s = u.View, o(b, s), b.prototype.destructor = function() {
                this.unmount()
            }, b.prototype.clear = function() {
                this._selected = "", this.events.fire(_.ColorpickerEvents.change, [this._selected]), this.paint()
            }, b.prototype.setValue = function(t) {
                this._focusColor(t) && (this.paint(), this.events.fire(_.ColorpickerEvents.change, [this._selected]), this.events.fire(_.ColorpickerEvents.colorChange, [this._selected]))
            }, b.prototype.setFocus = function(t) {
                this._focusColor(t) && this.paint()
            }, b.prototype.getValue = function() {
                return this._selected || ""
            }, b.prototype.getCustomColors = function() {
                return this.config.customColors
            }, b.prototype.setCustomColors = function(t) {
                this.config.customColors = t.map(function(t) {
                    return t.toUpperCase()
                }), this.paint()
            }, b.prototype.setCurrentMode = function(t) {
                "palette" !== t && "picker" !== t || (this.config.mode = t, this.events.fire(_.ColorpickerEvents.modeChange, [t]), this.events.fire(_.ColorpickerEvents.viewChange, [t]), this.paint())
            }, b.prototype.getCurrentMode = function() {
                return this.config.mode
            }, b.prototype.getView = function() {
                return this.getCurrentMode()
            }, b.prototype.setView = function(t) {
                this.setCurrentMode(t)
            }, b.prototype.focusValue = function(t) {
                this.setFocus(t)
            }, b.prototype._setHandlers = function() {
                var i = this;
                this._handlers = {
                    click: {
                        ".dhx_palette__cell": this._onColorClick
                    },
                    mousedown: function(t) {
                        i._pickerMove(t)
                    },
                    touchstart: function(t) {
                        i._pickerMove(t)
                    },
                    buttonsClick: function(t) {
                        i.setCurrentMode("palette"), "cancel" !== t ? "apply" !== t || i.config.customColors.includes(i._pickerState.background) || (i.setValue(i._pickerState.background), i.events.fire(_.ColorpickerEvents.apply, []), i.events.fire(_.ColorpickerEvents.selectClick, [])) : i.events.fire(_.ColorpickerEvents.cancelClick, [])
                    },
                    customColorClick: function() {
                        i.setView("picker")
                    },
                    oninput: function(e) {
                        i._inputTimeout && clearTimeout(i._inputTimeout), i._inputTimeout = setTimeout(function() {
                            var t = e.target.value; - 1 === t.indexOf("#") && (t = "#" + t), i._pickerState.customHex = t, h.isHex(t) && (i._pickerState.hsv = h.HexToHSV(t), i.paint())
                        }, 100)
                    },
                    contextmenu: {
                        ".dhx_palette__cell": function(t, e) {
                            t.preventDefault();
                            e = i.config.customColors.indexOf(e.data.color); - 1 !== e && i._removeCustomColor(e), i.paint()
                        }
                    },
                    mouseover: {
                        ".dhx_palette__cell": function(t) {
                            t.target && g.tooltip(p.default.rightClickToDelete, {
                                node: t.target,
                                position: v.Position.bottom
                            })
                        },
                        ".dhx_colorpicker-custom-colors__picker": function(t) {
                            t.target && g.tooltip(p.default.addNewColor, {
                                node: t.target,
                                position: v.Position.bottom
                            })
                        }
                    }
                }, this.events.on(_.ColorpickerEvents.change, function() {
                    i.paint()
                }), this.events.on(_.ColorpickerEvents.colorChange, function() {
                    i.paint()
                })
            }, b.prototype._pickerMove = function(t) {
                var e = c.locate(t);
                this._pickerState.customHex = "", "picker_palette" === e ? this._setPaletteGrip(t) : this._setRangeGrip(t);
                var i = "picker_palette" === e ? this._setPaletteGrip : this._setRangeGrip,
                    n = t.targetTouches ? "touchmove" : "mousemove",
                    t = t.targetTouches ? "touchend" : "mouseup";
                document.addEventListener(n, i), document.addEventListener(t, function() {
                    document.removeEventListener(n, i)
                }), this.paint()
            }, b.prototype._focusColor = function(t) {
                if (void 0 === t || t.length < 4) return !1;
                var i = t.toUpperCase();
                if (!h.isHex(i)) return !1;
                var e = this.config.palette.reduce(function(e, t) {
                        return e || (t.forEach(function(t) {
                            t.toUpperCase() === i && (e = !0)
                        }), e)
                    }, !1),
                    t = f.grayShades.includes(i);
                return e || t || ((t = this.getCustomColors()).includes(i.toUpperCase()) || t.push(i.toUpperCase())), this._selected = i || null, this._pickerState.hsv = h.HexToHSV(i), !0
            }, b.prototype._removeCustomColor = function(t) {
                this.config.customColors.splice(t, 1)
            }, b.prototype._getCells = function(t, n) {
                var o = this;
                return void 0 === n && (n = ""), t.reduce(function(t, e) {
                    var i = (o._selected || "").toUpperCase() === e.toUpperCase() ? "dhx_palette__cell--selected" : "";
                    return t.push(a.el(".dhx_palette__cell", {
                        class: i + " " + n,
                        _data: {
                            color: e
                        },
                        style: "background:" + e
                    })), t
                }, [])
            }, b.prototype._getGrayShades = function() {
                return a.el(".dhx_palette__row", this._getCells(f.grayShades))
            }, b.prototype._getPalette = function() {
                var i = this;
                return this.config.palette.reduce(function(t, e) {
                    return t.push(a.el(".dhx_palette__col", i._getCells(e))), t
                }, [])
            }, b.prototype._getContent = function() {
                var t = !this.config.pickerOnly && "palette" === this.config.mode ? r([this.config.grayShades && this._getGrayShades()], this._getPalette(), [!this.config.paletteOnly && a.el(".dhx_colorpicker-custom-colors", {
                    onmouseover: this._handlers.mouseover
                }, [a.el(".dhx_colorpicker-custom-colors__header", [p.default.customColors]), a.el(".dhx_palette--custom.dhx_palette__row", r(this._getCells(this.config.customColors, "dhx_custom-color__cell"), [a.el(".dhx_colorpicker-custom-colors__picker", {
                    class: "dxi dxi-plus",
                    onclick: this._handlers.customColorClick,
                    onmouseover: this._handlers.mouseover
                })]))])]) : [m.getPicker(this, this._pickerState, this._handlers)];
                return a.el(".dhx_widget.dhx_colorpicker", {
                    class: this.config.css,
                    style: {
                        width: this.config.width
                    }
                }, [a.el(".dhx_palette", {
                    onclick: this._handlers.click,
                    oncontextmenu: this._handlers.contextmenu
                }, t)])
            }, b);

        function b(t, e) {
            var n = s.call(this, t, e) || this;
            n._setPaletteGrip = function(t) {
                var e = n.getRootView().refs.picker_palette.el.getBoundingClientRect(),
                    i = (t.targetTouches ? t.targetTouches[0] : t).clientX,
                    t = (t.targetTouches ? t.targetTouches[0] : t).clientY - e.top,
                    i = i - e.left,
                    t = y.calculatePaletteGrip(e, t, i),
                    i = t.s,
                    t = t.v;
                n._pickerState.hsv.s = i, n._pickerState.hsv.v = t, n.paint()
            }, n._setRangeGrip = function(t) {
                var e = n.getRootView().refs.hue_range.el.getBoundingClientRect(),
                    t = (t.targetTouches ? t.targetTouches[0] : t).clientX - e.left,
                    e = y.calculateRangeGrip(e, t),
                    t = e.h,
                    e = e.rangeLeft;
                n._pickerState.hsv.h = t, n._pickerState.rangeLeft = e, n.paint()
            }, n._onColorClick = function(t, e) {
                n._selected = e.data.color.toUpperCase(), n.events.fire(_.ColorpickerEvents.change, [n._selected]), n.events.fire(_.ColorpickerEvents.colorChange, [n._selected])
            }, n._container = t, n.config = d.extend({
                css: "",
                grayShades: !0,
                pickerOnly: !1,
                paletteOnly: !1,
                customColors: [],
                palette: f.palette,
                width: "238px",
                mode: "palette"
            }, n.config), n.config.palette || (n.config.palette = f.palette), n.config.customColors && (n.config.customColors = n.config.customColors.map(function(t) {
                return t.toUpperCase()
            })), n._pickerState = {
                hsv: {
                    h: 0,
                    s: 1,
                    v: 1
                },
                customHex: ""
            }, n.events = new l.EventSystem(n), n._setHandlers();
            t = a.create({
                render: function() {
                    return n._getContent()
                }
            });
            return n.mount(n._container, t), n
        }
        e.Colorpicker = o
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var l = i(44),
            c = i(0),
            u = i(45);
        e.getPicker = function(t, e, i) {
            var n = l.HSVtoRGB(e.hsv);
            e.background = l.RGBToHex(n);
            var o = l.RGBToHex(l.HSVtoRGB({
                    h: e.hsv.h,
                    s: 1,
                    v: 1
                })),
                r = t.getRootView(),
                s = (a = r.refs ? r.refs.picker_palette.el.getBoundingClientRect() : {
                    height: 200,
                    width: 218,
                    x: 0,
                    y: 0
                }).height - 2,
                n = a.width - 2,
                r = s - e.hsv.v * s - 4,
                s = e.hsv.s * n - 4,
                a = (n = a.width - 6) - (360 - e.hsv.h) / 360 * n,
                n = (l.isHex(e.customHex) ? e.customHex : e.background).replace("#", "");
            return c.el(".dhx_colorpicker-picker", {}, [c.el(".dhx_colorpicker-picker__palette", {
                style: {
                    height: 132,
                    background: o
                },
                onmousedown: i.mousedown,
                ontouchstart: i.touchstart,
                dhx_id: "picker_palette",
                _ref: "picker_palette"
            }, [c.el(".dhx_palette_grip", {
                style: {
                    top: r,
                    left: s
                }
            })]), c.el(".dhx_colorpicker-hue-range", {
                style: {
                    height: 16
                },
                onmousedown: i.mousedown,
                ontouchstart: i.touchstart,
                dhx_id: "hue_range",
                _key: "hue_range",
                _ref: "hue_range"
            }, [c.el(".dhx_colorpicker-hue-range__grip", {
                style: {
                    left: a
                }
            })]), c.el(".dhx_colorpicker-value", [c.el(".dhx_colorpicker-value__color", {
                style: {
                    background: e.background
                }
            }), c.el(".dhx_colorpicker-value__input__wrapper", [c.el("input", {
                class: "dhx_colorpicker-value__input",
                value: n,
                oninput: i.oninput,
                maxlength: "7",
                _key: "hex_input"
            })])]), c.el(".dhx_colorpicker-picker__buttons", [!t.config.pickerOnly && c.el("button", {
                class: "dhx_button dhx_button--size_medium dhx_button--view_link dhx_button--color_primary",
                onclick: [i.buttonsClick, "cancel"]
            }, u.default.cancel), c.el("button", {
                class: "dhx_button dhx_button--size_medium dhx_button--view_flat dhx_button--color_primary",
                onclick: [i.buttonsClick, "apply"]
            }, u.default.select)])])
        }, e.calculatePaletteGrip = function(t, e, i) {
            var t = (n = t.refs.picker_palette.el.getBoundingClientRect()).height,
                n = n.width;
            e = e < 0 ? 0 : t < e ? t : e, i = i < 0 ? 0 : n < i ? n : i, n = Math.round(i / (n / 100)), t = 100 - Math.round(e / (t / 100)), this._pickerState.hsv.s = n / 100, this._pickerState.hsv.v = t / 100
        }
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.calculatePaletteGrip = function(t, e, i) {
            var n = t.height,
                t = t.width;
            return e = e < 0 ? 0 : n < e ? n : e, i = i < 0 ? 0 : t < i ? t : i, {
                s: Math.round(i / (t / 100)) / 100,
                v: (100 - Math.round(e / (n / 100))) / 100
            }
        }, e.calculateRangeGrip = function(t, e) {
            return t = t.width, e = e < 0 ? 0 : t < e ? t : e, {
                h: Math.round(e / t * 360),
                rangeLeft: e
            }
        }
    }, function(t, i, e) {
        "use strict";

        function n(t) {
            for (var e in t) i.hasOwnProperty(e) || (i[e] = t[e])
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), n(e(154)), n(e(23))
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(t, e)
            }, function(t, e) {
                function i() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }),
            a = this && this.__assign || function() {
                return (a = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r, s = i(0),
            l = i(3),
            c = i(4),
            u = i(5),
            d = i(155),
            h = i(157),
            f = i(159),
            p = i(23),
            _ = i(160),
            g = i(164),
            v = i(174),
            m = i(8),
            o = (r = c.View, o(y, r), y.prototype.getSeries = function(t) {
                return this._series[t]
            }, y.prototype.eachSeries = function(t) {
                var e, i = [];
                for (e in this._series) i.push(t.call(this, this._series[e]));
                return i
            }, y.prototype.destructor = function() {
                this._tooltip.destructor(), this.events.clear(), this.unmount()
            }, y.prototype.setConfig = function(e) {
                var o, r = this;
                if (this.config = e, this._layers.clear(), this._series = {}, this._scales = {}, e.scales)
                    for (var t in e.scales) {
                        var i = a({}, e.scales[t]);
                        void 0 !== e.scales[t].min && (o = e.scales[t].min), i.type = i.type || this._detectScaleType(i, t), e.scales.radial && "radial" !== t && (i.hidden = !0), this._setScale(i, t)
                    }
                var n, s = new v.default;
                this._layers.add(s), e.series.forEach(function(t) {
                    void 0 !== t.baseLine && t.baseLine < o && (t.baseLine = void 0);
                    var i = a({}, t);
                    i.type = i.type || e.type;
                    t = g.default[i.type];
                    (i.barWidth || r.config.barWidth) && (i.barWidth = i.barWidth || r.config.barWidth);
                    var n = new t(r.data, i, r.events),
                        t = m.getScales(e.scales);
                    (1 < t.length && "radial" !== t[0] || "radial" === t[0] ? t : ["bottom", "left"]).forEach(function(t) {
                        var e = r._scales[t];
                        e && (n.addScale(t, e), i.stacked ? e.add(s) : e.add(n))
                    }), r._series[n.id] = n, (i.stacked ? s : r._layers).add(n)
                }), e.legend && ((n = a({}, e.legend)).series && (n.$seriesInfo = n.series.map(function(t) {
                    return r._series[t]
                })), n = new h.Legend(this.data, n, this.events), this._layers.add(n)), this._tooltip = new f.Tooltip(document.body, {
                    chart: this
                }), this.paint()
            }, y.prototype._setScale = function(t, e) {
                t = new _.default[t.type](this.data, t, e);
                t.config.grid && "radial" !== t.config.type && this._layers.add(t.scaleGrid()), this._layers.add(t), this._scales[e] = t
            }, y.prototype._detectScaleType = function(t, e) {
                return "radial" === e ? e : t.text ? "text" : "numeric"
            }, y.prototype._initEvents = function() {
                var i = this;
                this.events.on(p.ChartEvents.toggleSeries, function(t, e) {
                    e ? (e = i._series[Object.keys(i._series)[0]]) && (e.toggle(t), i.paint()) : i._series[t] && (i._series[t].toggle(), i.paint())
                }, this), this.events.on(u.DataEvents.change, function() {
                    return i.paint()
                })
            }, y);

        function y(t, n) {
            void 0 === n && (n = {});
            var a = r.call(this, null, n) || this;
            a._width = 0, a._height = 0, a._left = 0, a._top = 0;
            var e = {};
            n.maxPoints && (e.approximate = {
                value: n.series.map(function(t) {
                    return t.value
                }),
                maxNum: n.maxPoints
            }), Array.isArray(n.data) ? (a.events = new l.EventSystem(a), a.data = new u.DataCollection(e, a.events), a.data.parse(n.data)) : n.data && n.data.events ? (a.data = n.data, a.events = a.data.events, a.events.context = a) : (a.events = new l.EventSystem(a), a.data = new u.DataCollection(e, a.events)), a._globalHTMLHandlers = {
                onmousemove: function(t) {
                    var e = a._layers.getSizes(),
                        i = e.left,
                        n = e.top,
                        o = e.bottom,
                        r = e.right,
                        s = t.pageX,
                        e = t.pageY,
                        t = a.getRootView().node.el.getBoundingClientRect();
                    a._left = t.left + window.pageXOffset, a._top = t.top + window.pageYOffset;
                    s = s - i - a._left, e = e - n - a._top;
                    0 <= s && s <= a._width - r - i && 0 <= e && e <= a._height - o - n ? a.events.fire(p.ChartEvents.chartMouseMove, [s, e, a._left + i, a._top + n]) : a.events.fire(p.ChartEvents.chartMouseLeave)
                },
                onmouseleave: function() {
                    return a.events.fire(p.ChartEvents.chartMouseLeave)
                }
            }, a._layers = new d.ComposeLayer, a.setConfig(n), a._initEvents();
            return a.mount(t, s.create({
                render: function(t, e) {
                    if (!a.data.getLength()) return s.el("div");
                    var i = [s.resizer(function(t, e) {
                        a._width = t, a._height = e || 400;
                        e = a.getRootView();
                        e && e.node && e.node.el && (e = e.node.el.getBoundingClientRect(), a._left = e.left + window.pageXOffset, a._top = e.top + window.pageYOffset), a.events.fire(p.ChartEvents.resize, [{
                            width: a._width,
                            height: a._height
                        }]), a.paint()
                    })];
                    return a._width && a._height && i.push(a._layers.toVDOM(a._width, a._height)), s.el(".dhx_widget.dhx_chart", {
                        class: n.css || "",
                        onmousemove: a._globalHTMLHandlers.onmousemove,
                        onmouseleave: a._globalHTMLHandlers.onmouseleave
                    }, i)
                }
            })), a
        }
        e.Chart = o
    }, function(t, e, i) {
        "use strict";
        var c = this && this.__spreadArrays || function() {
            for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
            for (var n = Array(t), o = 0, e = 0; e < i; e++)
                for (var r = arguments[e], s = 0, a = r.length; s < a; s++, o++) n[o] = r[s];
            return n
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var u = i(0),
            d = i(156),
            i = (n.prototype.add = function(t) {
                this._data.push(t)
            }, n.prototype.clear = function() {
                this._data.forEach(function(t) {
                    return t.destructor && t.destructor()
                }), this._data = []
            }, n.prototype.getSizes = function() {
                return this._sizes
            }, n.prototype.toVDOM = function(e, i) {
                var n = {
                        left: 20,
                        right: 20,
                        top: 10,
                        bottom: 10
                    },
                    t = this._data.filter(function(t) {
                        return !t.dataReady || t.dataReady().length
                    });
                this._data.forEach(function(t) {
                    return !t.scaleReady || t.scaleReady(n)
                });
                var o = 0,
                    r = 0;
                t.forEach(function(t) {
                    t.seriesShift && (o += t.seriesShift(), r++)
                });
                var s = o / r,
                    o = r ? (s - o) / 2 : 0;
                t.forEach(function(t) {
                    t.seriesShift && (t.seriesShift(o), o += s)
                }), this._sizes = n;
                var a = e - n.left - n.right,
                    l = i - n.top - n.bottom,
                    l = u.sv("g", {
                        transform: "translate(" + n.left + ", " + n.top + ")"
                    }, c([u.sv("rect.dhx_chart-graph_area", {
                        width: 0 < a ? a : 0,
                        height: 0 < l ? l : 0,
                        fill: "transparent"
                    })], t.map(function(t) {
                        return t.paint(e - (n.left + n.right), i - (n.top + n.bottom))
                    }))),
                    t = u.sv("defs", [d.dropShadow(), d.shadow()]);
                return u.sv("svg", {
                    width: e,
                    height: i
                }, [t, l])
            }, n);

        function n() {
            this._data = [], this._sizes = {
                left: 20,
                right: 20,
                top: 10,
                bottom: 10
            }
        }
        e.ComposeLayer = i
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(0);
        e.shadow = function() {
            return n.sv("filter", {
                id: "shadow"
            }, [n.sv("feDiffuseLighting", {
                in: "SourceGraphic",
                result: "light",
                "lighting-color": "white"
            }, [n.sv("feDistantLight", {
                azimuth: 90,
                elevation: 25
            })]), n.sv("feComposite", {
                in: "SourceGraphic",
                in2: "light",
                operator: "arithmetic",
                k1: "1",
                k2: "0",
                k3: "0",
                k4: "0"
            })])
        }, e.dropShadow = function() {
            return n.sv("filter", {
                id: "dropshadow",
                x: "-100%",
                y: "-100%",
                width: "300%",
                height: "300%"
            }, [n.sv("feGaussianBlur", {
                in: "SourceAlpha",
                stdDeviation: 2
            }), n.sv("feOffset", {
                dx: 0,
                dy: 0,
                result: "offsetblur"
            }), n.sv("feOffset", {
                dx: 0,
                dy: 0,
                result: "offsetblur"
            }), n.sv("feFlood", {
                "flood-color": "rgba(85,85,85,0.5)"
            }), n.sv("feComposite", {
                in2: "offsetblur",
                operator: "in"
            }), n.sv("feMerge", [n.sv("feMergeNode"), n.sv("feMergeNode", {
                in: "SourceGraphic"
            })])])
        }
    }, function(t, e, i) {
        "use strict";
        var o = this && this.__assign || function() {
            return (o = Object.assign || function(t) {
                for (var e, i = 1, n = arguments.length; i < n; i++)
                    for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t
            }).apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = i(23),
            p = i(0),
            _ = i(8),
            g = i(158);
        n.prototype.scaleReady = function(t) {
            "middle" === this.config.valign ? "right" === this.config.halign ? t.right += this.config.size || 200 : "left" === this.config.halign && (t.left += this.config.size || 200) : "top" === this.config.valign ? t.top += this.config.size || 40 : "bottom" === this.config.valign && (t.bottom += this.config.size || 40)
        }, n.prototype.paint = function(t, e) {
            var i, n, o = this,
                r = this._getData(),
                s = this.config,
                a = _.getFontStyle("legend-text"),
                l = s.margin,
                c = s.itemPadding,
                u = [],
                d = "middle" === s.valign,
                h = 0,
                f = 0;
            switch (r.forEach(function(t) {
                    u.push(p.sv("g", {
                        transform: "translate(" + h + "," + f + ")",
                        onclick: [o._handlers.onclick, t.id, o.config.values],
                        class: "legend-item " + (t.active ? "" : "not-active")
                    }, [p.sv("text", {
                        x: 10,
                        y: 0,
                        class: "start-text legend-text"
                    }, [_.verticalCenteredText(t.text)]), g.legendShape(s.form, t)])), d ? f += c + 2 : (t = _.getTextWidth(t.text, a), h += t + c + 15)
                }), s.valign) {
                case "top":
                    n = -l - 5;
                    break;
                case "middle":
                    n = (e - f) / 2 + c / 2;
                    break;
                case "bottom":
                    n = e + l
            }
            switch (s.halign) {
                case "left":
                    i = d ? -l : 5;
                    break;
                case "center":
                    i = (t - h) / 2;
                    break;
                case "right":
                    i = d ? t + l + 5 : t - h + c + 5
            }
            return p.sv("g", {
                transform: "translate(" + i + ", " + n + ")"
            }, u)
        }, n.prototype._getData = function() {
            var i = [];
            if (this.config.values) {
                var n = _.locator(this.config.values.text),
                    o = _.locator(this.config.values.color);
                this._data.map(function(t, e) {
                    i.push({
                        id: t.id,
                        text: n(t).toString(),
                        alpha: 1,
                        fill: o(t).toString() || _.getDefaultColor(e),
                        active: !t.$hidden
                    })
                })
            } else
                for (var t = 0, e = this.config.$seriesInfo; t < e.length; t++) {
                    var r = e[t].config,
                        s = r.fill && r.color;
                    i.push({
                        id: r.id,
                        text: r.name || r.value,
                        alpha: r.alpha,
                        fill: r.fill || r.color,
                        color: s && r.color,
                        active: r.active
                    })
                }
            return i
        }, i = n;

        function n(t, e, i) {
            var n = this;
            this._data = t, this._events = i;
            this.config = o(o({}, {
                form: "rect",
                itemPadding: 20,
                halign: "right",
                valign: "middle"
            }), e), this.config.margin = e.margin || function(t, e) {
                switch (e) {
                    case "middle":
                        switch (t) {
                            case "right":
                                return 60;
                            case "left":
                                return 120;
                            case "center":
                                throw new Error("cant place legend on center, middle")
                        }
                        case "top":
                            return 20;
                        case "bottom":
                            return 60
                }
            }(this.config.halign, this.config.valign), this._handlers = {
                onclick: function(t, e) {
                    return n._events.fire(r.ChartEvents.toggleSeries, [t, e])
                }
            }
        }
        e.Legend = i
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(1),
            o = i(0),
            r = {
                circle: function(t, e, i) {
                    return o.sv("circle", {
                        id: n.uid(),
                        r: 5,
                        fill: e,
                        class: "figure " + ("none" !== t ? "with-stroke" : ""),
                        "stroke-width": 2,
                        "fill-opacity": i,
                        stroke: t,
                        transform: "translate(0, -1)"
                    })
                },
                rect: function(t, e, i) {
                    return o.sv("rect", {
                        id: n.uid(),
                        fill: e,
                        "fill-opacity": i,
                        width: 10,
                        "stroke-width": 2,
                        height: 10,
                        class: "figure " + ("none" !== t ? "with-stroke" : ""),
                        stroke: t,
                        transform: "translate(-5, -5)"
                    })
                }
            };
        e.legendShape = function(t, e) {
            return "string" == typeof t && (t = r[t]), t(e.color || "none", e.fill, e.alpha || 1)
        }
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r, a = i(0),
            u = i(8),
            s = i(23),
            i = i(4),
            o = (r = i.View, o(l, r), l.prototype.destructor = function() {
                this._chart.events.detach(s.ChartEvents.chartMouseLeave, this), this._chart.events.detach(s.ChartEvents.chartMouseMove, this), this.unmount()
            }, l.prototype._hide = function() {
                this._disableLastActivePoint(), this._state.isVisible = !1, this.paint()
            }, l.prototype._enableActivePoint = function(t) {
                var e = this._chart.getRootView(),
                    e = e && e.refs && e.refs[t];
                e && (this._disableLastActivePoint(), this._lastPointRef = t, e.patch({
                    class: e.attrs.class + " active-figure"
                }))
            }, l.prototype._disableLastActivePoint = function() {
                var t;
                this._lastPointRef && ((t = (t = this._chart.getRootView()) && t.refs && t.refs[this._lastPointRef]) && t.patch({
                    class: t.attrs.class.replace(" active-figure", "")
                }), this._lastPointRef = null)
            }, l.prototype._draw = function() {
                var t = this._state,
                    e = t.value,
                    i = t.x,
                    n = t.y,
                    o = t.type,
                    r = t.chartType,
                    s = t.isVisible;
                return r = s && "" !== e ? (t = u.getFontStyle("tooltip-text"), function(t, e, i, n, o) {
                    var r, s, a = "bar" === o ? 5 : 0;
                    switch (n) {
                        case "top":
                            return {
                                d: "M0 0 l4 -4 h" + (r = (t + 20 - 8 - 4) / 2) + " a2 2 0 0 0 2 -2 v-18 a2 2 0 0 0 -2 -2 h" + -(t + 20 - 4) + " a2 2 0 0 0 -2 2 v18 a2 2 0 0 0 2 2 h" + r + " Z", left: e, top: i - 6 + a, textX: 0, textY: -15
                            };
                        case "bot":
                            return {
                                d: "M0 0 l4 4 h" + (r = (t + 20 - 8 - 4) / 2) + " a2 2 0 0 1 2 2 v18 a2 2 0 0 1 -2 2 h" + -(t + 20 - 4) + " a2 2 0 0 1 -2 -2 v-18 a2 2 0 0 1 2 -2 h" + r + " Z", left: e, top: i + 6 - a, textX: 0, textY: 15
                            };
                        case "right":
                            return {
                                d: "M0 0 l4 -4 v-5 a2 2 0 0 1 2 -2 h" + (s = t + 20 - 4) + " a2 2 0 0 1 2 2 v18 a2 2 0 0 1 -2 2 h" + -s + " a2 2 0 0 1 -2 -2 v-5 Z", left: e + 1, top: i, textX: s / 2 + 6, textY: 0
                            };
                        case "left":
                            return {
                                d: "M0 0 l-4 -4 v-5 a2 2 0 0 0 -2 -2 h" + -(s = t + 20 - 4) + " a2 2 0 0 0 -2 2 v18 a2 2 0 0 0 2 2 h" + s + " a2 2 0 0 0 2 -2 v-5 Z", left: e - 1, top: i, textX: -s / 2 - 6, textY: 0
                            };
                        case "simple":
                            return {
                                d: "M0 0 v-4 a2 2 0 0 1 2 -2 h" + (s = t + 20 - 4) + " a2 2 0 0 1 2 2 v18 a2 2 0 0 1 -2 2 h" + -s + " a2 2 0 0 1 -2 -2 v-6 Z", left: e - s / 2 - 2, top: i - 5, textX: s / 2 + 2, textY: 6
                            }
                    }
                }(u.getTextWidth(e, t), i, n, o || "top", r)) : {
                    textX: 0,
                    textY: 0,
                    d: null,
                    left: 0,
                    top: 0
                }, a.el(".dhx_chart.tooltip-container", {
                    style: {
                        pointerEvents: "none",
                        width: 0,
                        height: 0,
                        visibility: s ? "visible" : "hidden",
                        position: "absolute",
                        left: r.left + this._state.leftOffset + "px",
                        top: r.top + this._state.topOffset + "px"
                    }
                }, s ? [a.sv("svg", [a.sv("path", {
                    d: r.d,
                    class: "tooltip-form"
                }), a.sv("text", {
                    x: r.textX,
                    y: r.textY,
                    class: "tooltip-text"
                }, [u.verticalCenteredText(e)])])] : null)
            }, l);

        function l(t, e) {
            var c = r.call(this, t, e) || this;
            return c._chart = e.chart, c._state = {
                leftOffset: 0,
                topOffset: 0,
                value: "",
                x: 0,
                y: 0,
                type: null,
                chartType: null,
                isVisible: !1
            }, c.mount(t, a.create({
                render: function() {
                    return c._draw()
                }
            })), c._chart.events.on(s.ChartEvents.chartMouseMove, function(i, n, t, e) {
                var o = [1 / 0, null, null, null, null];
                c._chart.eachSeries(function(t) {
                    var e = t.getClosest(i, n);
                    o[0] > e[0] && (o[0] = e[0], o[1] = e[1], o[2] = e[2], o[3] = e[3], o[4] = t.id)
                });
                var r, s, a, l = c._chart.getSeries(o[4]);
                !l || (r = u.calcPointRef(o[3], o[4])) !== c._lastPointRef && ((s = l.getTooltipText(o[3])) ? (a = l.getTooltipType(o[3], o[1], o[2]), c._enableActivePoint(r), c._state.leftOffset = t, c._state.topOffset = e, c._state.value = s, c._state.x = o[1], c._state.y = o[2], c._state.type = a, c._state.chartType = l.config.type, c._state.isVisible = !0) : c._hide(), c.paint())
            }, c), c._chart.events.on(s.ChartEvents.chartMouseLeave, function() {
                return c._hide()
            }, c), c
        }
        e.Tooltip = o
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(161),
            o = i(46),
            i = i(163),
            o = {
                radial: n.RadialScale,
                text: i.TextScale,
                numeric: o.Scale
            };
        e.default = o
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r, a = i(24),
            i = i(46),
            o = (r = i.Scale, o(s, r), s.prototype.paint = function(t, e) {
                var i = this;
                if (this.config.hidden) return null;
                var n = this.config.zebra,
                    o = this.config.value,
                    r = this.config.showAxis ? this._axis.steps : null,
                    s = this._axis.steps.map(function(t) {
                        return i.point(t)
                    }),
                    n = {
                        scales: this._data.map(function(t) {
                            return t[o]
                        }),
                        axis: s,
                        realAxis: r,
                        zebra: n
                    };
                return a.radarScale(n, t, e)
            }, s.prototype.point = function(t) {
                return (t - this._axis.min) / (this._axis.max - this._axis.min)
            }, s);

        function s(t, e) {
            return r.call(this, t, e, "radial") || this
        }
        e.RadialScale = o
    }, function(t, e, i) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            },
            o = this && this.__spreadArrays || function() {
                for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
                for (var n = Array(t), o = 0, e = 0; e < i; e++)
                    for (var r = arguments[e], s = 0, a = r.length; s < a; s++, o++) n[o] = r[s];
                return n
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = i(8),
            s = [1, 2, 3, 5, 10],
            i = (a.prototype.getScale = function() {
                var t = this.config.log ? this._logSteps() : this._calculateSteps(this._getStep());
                return {
                    min: t[0],
                    max: t[t.length - 1],
                    steps: t
                }
            }, a.prototype._getStep = function() {
                var t = this.config.maxTicks,
                    e = this.config.max - this.config.min,
                    i = Math.floor(r.log10(e / t)),
                    i = Math.pow(10, i),
                    t = e / i / t;
                return s[o(s, [t]).sort(function(t, e) {
                    return t - e
                }).indexOf(t)] * i
            }, a.prototype._calculateSteps = function(t) {
                for (var e = Math.floor(this.config.min / t), i = Math.ceil(this.config.max / t), n = [], o = e; o <= i; o++) {
                    var r = t * o;
                    Math.floor(r) !== r && (r = parseFloat(r.toFixed(8))), n.push(r)
                }
                return n
            }, a.prototype._logSteps = function() {
                var t = [];
                if (this.config.min < 0) {
                    for (var e = Math.ceil(r.log10(-this.config.min)); 0 < e; e--) t.push(-Math.pow(10, e));
                    t.push(0)
                }
                if (0 < this.config.max)
                    for (var i = Math.ceil(r.log10(this.config.max)), e = 1; e <= i; e++) t.push(Math.pow(10, e));
                return t
            }, a.prototype._addPadding = function() {
                this.config.min -= this.config.padding
            }, a);

        function a(t, e) {
            void 0 === e && (e = {}), this._data = t;
            t = {
                min: Math.min.apply(Math, this._data),
                max: Math.max.apply(Math, this._data),
                maxTicks: this._data.length < 20 ? this._data.length : 20
            };
            this.config = n(n({}, t), e), this.config.padding && this._addPadding()
        }
        e.AxisCreator = i
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(t, e)
            }, function(t, e) {
                function i() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }),
            r = this && this.__assign || function() {
                return (r = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = i(8),
            l = i(46),
            i = i(74),
            c = {
                left: i.left,
                right: i.right,
                bottom: i.bottom,
                top: i.top
            },
            d = {
                left: i.leftGrid,
                right: i.rightGrid,
                bottom: i.bottomGrid,
                top: i.topGrid
            },
            o = (s = l.Scale, o(u, s), u.prototype.scaleReady = function(t) {
                var e = this._data.getLength() - 1,
                    i = this._data.map(this.locator);
                this._axis = {
                    max: e,
                    steps: i
                }, t[this._position] += this.config.size
            }, u.prototype.point = function(t) {
                var e = this._axis.steps.indexOf(t);
                if (this._padding) {
                    var i = this._axis.max + 1,
                        t = .5 / i,
                        i = e / i;
                    return this._isXDirection ? t + i : 1 - t - i
                }
                return this._isXDirection ? e / this._axis.max : 1 - e / this._axis.max
            }, u.prototype.paint = function(i, n) {
                var o = this;
                if (this.config.hidden) return null;
                var t = this._axis.steps.map(function(t, e) {
                    return [o._isXDirection ? o._getAxisPoint(e) * i : o.point(t) * n, t]
                });
                return c[this._position](t, this.config, i, n)
            }, u.prototype.scaleGrid = function() {
                var s = this,
                    a = this._position,
                    l = this.config.grid,
                    c = this.config.dashed,
                    u = this.config.hidden;
                return {
                    paint: function(t, e) {
                        var i, n, o = s._axis.steps.indexOf(s.config.targetLine),
                            r = (i = t, n = e, s._axis.steps.map(function(t, e) {
                                return [s._isXDirection ? s._getAxisPoint(e) * i : s._getAxisPoint(e) * n, t]
                            })),
                            o = {
                                targetLine: o,
                                dashed: c,
                                grid: l,
                                hidden: u
                            };
                        return d[a](r, t, e, o)
                    }
                }
            }, u.prototype._setDefaults = function(t) {
                this.locator = a.locator(t.text), this.config = r(r({}, {
                    scalePadding: 30,
                    textPadding: 12,
                    grid: !0,
                    targetLine: null,
                    showText: !0
                }), t)
            }, u.prototype._getAxisPoint = function(t) {
                var e = this._axis.max;
                if (this._padding) {
                    var i = e + 1,
                        n = .5 / i,
                        i = t / i;
                    return this._isXDirection ? n + i : 1 - n - i
                }
                return this._isXDirection ? t / e : 1 - t / e
            }, u);

        function u() {
            return null !== s && s.apply(this, arguments) || this
        }
        e.TextScale = o
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(75),
            o = i(76),
            r = i(166),
            s = i(167),
            a = i(50),
            l = i(168),
            c = i(169),
            u = i(170),
            d = i(171),
            h = i(172),
            i = i(173),
            r = {
                line: a.default,
                spline: h.default,
                area: n.default,
                splineArea: i.default,
                scatter: d.default,
                pie: l.default,
                pie3D: c.default,
                donut: s.default,
                radar: u.default,
                bar: o.default,
                xbar: r.default
            };
        e.default = r
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(0),
            l = i(8);
        e.hoverMode = function(t) {
            return t
        }, e.standarMode = function(t) {
            return t
        };
        var n = {
            circle: function(t, e, i, n, o, r, s) {
                t = {
                    _ref: r,
                    cx: n,
                    cy: o,
                    r: 4,
                    class: "figure point-circle",
                    fill: e,
                    stroke: t,
                    "stroke-width": 2
                };
                return a.sv("circle", s(t))
            },
            rect: function(t, e, i, n, o, r, s) {
                t = {
                    _ref: r,
                    x: n - 4,
                    y: o - 4,
                    width: 8,
                    height: 8,
                    class: "figure point-rect",
                    fill: e,
                    stroke: t,
                    "stroke-width": 2
                };
                return a.sv("rect", s(t))
            },
            rhombus: function(t, e, i, n, o, r, s) {
                t = {
                    _ref: r,
                    points: n - 5 + "," + o + " " + n + "," + (o + 5) + " " + (n + 5) + "," + o + " " + n + "," + (o - 5),
                    class: "figure point-rhombus",
                    fill: e,
                    stroke: t,
                    "stroke-width": 2
                };
                return a.sv("polygon", s(t))
            },
            triangle: function(t, e, i, n, o, r, s) {
                t = {
                    _ref: r,
                    points: n + "," + (o - 5) + " " + (n + 5) + "," + (o + 5) + " " + (n - 5) + "," + (o + 5),
                    class: "figure point-triangle",
                    fill: e,
                    stroke: t,
                    "stroke-width": 2
                };
                return a.sv("polygon", s(t))
            },
            simpleCircle: function(t, e, i, n, o, r, s) {
                t = {
                    _ref: r,
                    cx: n,
                    cy: o,
                    r: 3,
                    class: "figure point-simple-circle",
                    fill: t
                };
                return a.sv("circle", s(t))
            },
            simpleRect: function(t, e, i, n, o, r, s) {
                t = {
                    _ref: r,
                    x: n - 3,
                    y: o - 3,
                    width: 6,
                    height: 6,
                    class: "figure point-simple-rect",
                    fill: t
                };
                return a.sv("rect", s(t))
            },
            empty: function() {
                return null
            }
        };

        function c(t) {
            t = n[t.toString()];
            if (!t) throw new Error("unknown point type");
            return t
        }
        e.getHelper = c, e.getShadeHelper = function(t, n, o) {
            var r = c(t);
            n = n || "none";
            var s = l.getColorShade(n, .2);
            return function(t, e, i) {
                return r(n, s, "", t, e, i, o)
            }
        }
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r, i = i(76),
            o = (r = i.default, o(s, r), s.prototype.addScale = function(t, e) {
                t = "top" === t || "bottom" === t ? "left" : "top";
                r.prototype.addScale.call(this, t, e)
            }, s.prototype.paint = function(t, e, i) {
                return r.prototype.paint.call(this, e, t, i)
            }, s.prototype.getTooltipType = function(t, e, i) {
                return void 0 !== this.config.baseLine && this._baseLinePosition > e ? "left" : "right"
            }, s.prototype.getClosest = function(t, e) {
                for (var i = [1 / 0, null, null, null], n = 0, o = this._points; n < o.length; n++) {
                    var r = o[n],
                        s = this._getClosestDist(t, e, r[1], r[0]);
                    i[0] > s && (i[0] = s, i[1] = r[1], i[2] = r[0], i[3] = r[2])
                }
                return i
            }, s.prototype._getText = function(t) {
                return t[4].toString()
            }, s.prototype._getClosestDist = function(t, e, i, n) {
                return this.config.stacked && i < t ? 1 / 0 : Math.abs(e - n)
            }, s.prototype._path = function(t, e) {
                return t[0] += this._shift, "\nM " + e + " " + (t[0] - this.config.barWidth / 2) + "\nH " + t[1] + "\nv " + this.config.barWidth + "\nH " + e
            }, s.prototype._base = function(t) {
                var e = this.config.baseLine;
                return this._baseLinePosition = void 0 !== e ? this.yScale.point(e) * t : 0
            }, s.prototype._text = function(t, e, i) {
                e = (e + t[1]) / 2, t = t[0];
                return {
                    x: e,
                    y: t,
                    class: "bar-text",
                    transform: i && !isNaN(i) ? "rotate(" + i + " " + e + " " + t + ")" : ""
                }
            }, s);

        function s() {
            return null !== r && r.apply(this, arguments) || this
        }
        e.default = o
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r, I = i(0),
            D = i(24),
            T = i(8),
            i = i(49),
            o = (r = i.default, o(s, r), s.prototype.paint = function(x, E) {
                var C = this,
                    S = x < E ? x / 2 : E / 2,
                    k = -.25,
                    P = [],
                    O = [],
                    M = [];
                return this._points.forEach(function(t) {
                    var e = t[0],
                        i = t[1],
                        n = t[2],
                        o = t[3],
                        r = t[4],
                        s = 0 === e || 1 === e ? -1e-6 : 0,
                        a = D.getCoordinates(k, S, S),
                        l = a[0],
                        c = a[1],
                        u = k + e / 2;
                    k += e + s;
                    var d = D.getCoordinates(k, S, S),
                        a = d[0],
                        s = d[1],
                        d = .5 < e ? 1 : 0,
                        h = D.getCoordinates(u, S, S),
                        f = -.25 < u && u < .25,
                        p = .5 < u || u < 0;
                    switch (C.config.subType) {
                        case "basic":
                            var _ = f ? "donut-value-title start-text" : "donut-value-title end-text",
                                g = 10,
                                v = p ? 2 * -g : g,
                                m = D.getCoordinates(u, S + 10, S + 10),
                                y = f ? "donut-value start-text" : "donut-value end-text",
                                b = I.sv("text", {
                                    x: m[0],
                                    y: m[1] + v,
                                    class: _
                                }, [T.verticalCenteredText(o.toString())]),
                                y = I.sv("text", {
                                    x: m[0],
                                    y: m[1] + v + 16,
                                    class: y
                                }, [T.verticalCenteredText(i.toString())]);
                            O.push(b), O.push(y);
                            break;
                        case "valueOnly":
                            var _ = f ? "donut-value start-text" : "donut-value end-text",
                                g = 10,
                                v = p ? -g : g,
                                m = D.getCoordinates(u, S + 10, S + 10),
                                w = I.sv("text", {
                                    x: m[0],
                                    y: m[1] + v,
                                    class: _
                                }, [T.verticalCenteredText(o.toString())]);
                            O.push(w);
                            break;
                        case "percentOnly":
                            w = I.sv("text", {
                                x: 7 * h[0] / 9,
                                y: 7 * h[1] / 9,
                                class: "pie-inner-value"
                            }, [T.verticalCenteredText(Math.round(100 * e) + "%")]);
                            O.push(w)
                    }
                    d = "M " + l + " " + c + " A " + S + " " + S + " 0 " + d + " 1 " + a + " " + s + " L 0 0", a = D.getCoordinates(u, 4, 4), s = a[0], a = a[1], a = I.sv("path", {
                        d: d,
                        _key: n,
                        fill: r,
                        class: "chart donut",
                        onclick: [C._handlers.onclick, t[1], t[2]],
                        onmouseout: [D.pieLikeHandlers.onmouseout],
                        onmouseover: [D.pieLikeHandlers.onmouseover, s, a]
                    });
                    P.push(a), 1 === C._points.length ? M.push([x / 2, E / 2]) : M.push([.8 * h[0] + x / 2, .8 * h[1] + E / 2])
                }), this._center = [x / 2, E / 2], this._tooltipData = M, P.push(I.sv("circle", {
                    cx: 0,
                    cy: 0,
                    r: 5 * S / 9,
                    fill: "#FFFFFF"
                })), P = P.concat(O), I.sv("g", {
                    transform: "translate(" + x / 2 + ", " + E / 2 + ")"
                }, P)
            }, s);

        function s() {
            return null !== r && r.apply(this, arguments) || this
        }
        e.default = o
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(t, e)
            }, function(t, e) {
                function i() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }),
            V = this && this.__assign || function() {
                return (V = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r, H = i(1),
            j = i(0),
            L = i(24),
            F = i(8),
            i = i(49),
            o = (r = i.default, o(s, r), s.prototype.paint = function(g, v) {
                var m = this,
                    t = this.config,
                    y = t.stroke,
                    b = t.strokeWidth,
                    w = t.gradient,
                    x = t.useLines,
                    E = t.showText,
                    C = t.showTextTemplate,
                    S = t.subType,
                    k = g < v ? g / 2 : v / 2,
                    P = -.25,
                    O = [],
                    t = [],
                    M = [],
                    I = [],
                    D = [],
                    T = [];
                return this._points.forEach(function(t) {
                    var e = t[0],
                        i = t[1],
                        n = t[2],
                        o = t[3],
                        r = t[4],
                        s = 0 === e || 1 === e ? -1e-6 : 0,
                        a = r;
                    w && (h = w(r), f = "gradient" + H.uid(), p = F.getRadialGradient(h.options, h.stops, f), a = "url(#" + f + ")", M.push(p));
                    var l = L.getCoordinates(P, k, k),
                        c = l[0],
                        u = l[1],
                        d = P + e / 2,
                        r = d < .25 ? 5 : -5,
                        h = L.getCoordinates(d, k, k),
                        f = [5, 30],
                        p = f[0],
                        l = f[1],
                        f = [L.getCoordinates(d, k + p, k + p), L.getCoordinates(d, k + l, k + l)],
                        p = f[0],
                        l = f[1],
                        f = -.25 < d && d < .25 ? "pie-value start-text" : "pie-value end-text";
                    o = x ? (I.push(j.sv("path", {
                        d: "M" + p[0] + " " + p[1] + " L" + l[0] + " " + l[1] + " h " + r,
                        class: "pie-value-connector"
                    })), j.sv("text", {
                        x: l[0],
                        y: l[1],
                        dx: 0 < r / 2 + r ? 10 : -10,
                        class: f
                    }, [F.verticalCenteredText(o.toString())])) : (r = .5 < d || d < 0 ? -5 : 5, j.sv("text", {
                        x: p[0],
                        y: p[1] + r,
                        class: f
                    }, [F.verticalCenteredText(o.toString())])), I.push(o), (E || C) && !1 !== E && (i = j.sv("text", {
                        x: .7 * h[0],
                        y: .7 * h[1],
                        class: "pie-inner-value"
                    }, [C ? F.verticalCenteredText(C(i.toString())) : F.verticalCenteredText(i.toString())]), I.push(i)), "percentOnly" === S && (_ = j.sv("text", {
                        x: .5 * h[0],
                        y: .5 * h[1],
                        class: "pie-inner-value"
                    }, [F.verticalCenteredText(Math.round(100 * e) + "%")]), I.push(_)), P += e + s;
                    var _ = L.getCoordinates(P, k, k),
                        s = _[0],
                        _ = _[1],
                        u = "M " + c + " " + u + " A " + k + " " + k + " 0 " + (.5 < e ? 1 : 0) + " 1 " + s + " " + _ + " L 0 0",
                        e = L.getCoordinates(d, 4, 4),
                        d = e[0],
                        e = e[1],
                        e = j.sv("path", {
                            d: u,
                            class: "chart pie",
                            _key: n,
                            fill: a,
                            onclick: [m._handlers.onclick, t[1], t[2]],
                            onmouseover: [L.pieLikeHandlers.onmouseover, d, e],
                            onmouseout: [L.pieLikeHandlers.onmouseout]
                        });
                    D.push(e), 1 < m._points.length && y && (e = {
                        "stroke-width": b,
                        stroke: y
                    }, e = j.sv("path", V({
                        d: "M0 0 L" + s + " " + _,
                        fill: "none"
                    }, e)), T.push(e)), 1 === m._points.length ? O.push([g / 2, v / 2]) : O.push([.7 * h[0] + g / 2, .7 * h[1] + v / 2])
                }), this._center = [g / 2, v / 2], this._tooltipData = O, t.push(j.sv("defs", M)), t = (t = (t = t.concat(D)).concat(T)).concat(I), j.sv("g", {
                    transform: "translate(" + g / 2 + ", " + v / 2 + ")"
                }, t)
            }, s);

        function s() {
            return null !== r && r.apply(this, arguments) || this
        }
        e.default = o
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r, V = i(0),
            H = i(24),
            j = i(8),
            i = i(49),
            o = (r = i.default, o(s, r), s.prototype.paint = function(y, b) {
                var w = this,
                    t = this.config,
                    x = t.subType,
                    E = t.useLines,
                    C = t.showText,
                    S = t.showTextTemplate,
                    k = y < b ? y / 2 : b / 2,
                    P = .5 * k,
                    O = k / 5,
                    M = [],
                    I = -.25,
                    D = [],
                    T = [];
                return this._points.forEach(function(t) {
                    var e = t[0],
                        i = t[1],
                        n = t[2],
                        o = t[3],
                        r = t[4],
                        s = 0 === e || 1 === e ? -1e-6 : 0,
                        a = H.getCoordinates(I, k, P),
                        l = a[0],
                        c = a[1],
                        u = I + e / 2,
                        d = u < .25 ? 5 : -5,
                        h = H.getCoordinates(u, k, P),
                        f = 0;
                    0 < u && u < .5 && (f = O * Math.sin(2 * Math.PI * u));
                    var p = H.getCoordinates(u, k + 5 + f, 5 + P + f),
                        _ = H.getCoordinates(u, k + 30 + f, 30 + P + f),
                        g = I + e + s,
                        v = H.getCoordinates(g, k, P),
                        a = v[0],
                        f = v[1],
                        s = .5 < e ? 1 : 0,
                        v = -.25 < u && u < .25 ? "pie-value start-text" : "pie-value end-text";
                    o = E ? (T.push(V.sv("path", {
                        d: "M" + p[0] + " " + p[1] + " L" + _[0] + " " + _[1] + " h " + d,
                        class: "pie-value-connector"
                    })), V.sv("text", {
                        x: _[0],
                        y: _[1],
                        dx: 0 < d / 2 + d ? 10 : -10,
                        class: v
                    }, [j.verticalCenteredText(o.toString())])) : (u = .5 < u || u < 0 ? -10 : 10, V.sv("text", {
                        x: p[0],
                        y: p[1] + u,
                        class: v
                    }, [j.verticalCenteredText(o.toString())])), T.push(o), (C || S) && !1 !== C && (o = V.sv("text", {
                        x: .7 * h[0],
                        y: .7 * h[1],
                        class: "pie-inner-value"
                    }, [S ? j.verticalCenteredText(S(i)) : j.verticalCenteredText(i.toString())]), T.push(o)), "percentOnly" === x && (m = V.sv("text", {
                        x: .6 * h[0],
                        y: .6 * h[1],
                        class: "pie-inner-value"
                    }, [j.verticalCenteredText(Math.round(100 * e) + "%")]), T.push(m));
                    var m = "";
                    I <= 0 && .5 <= g ? m = "M " + k + " 0 v " + O + " A " + k + " " + P + " 0 1 1 " + -k + " " + O + " v " + -O : I <= 0 && g < .5 ? m = "M " + k + " 0 v " + O + " A " + k + " " + P + " 0 0 1 " + a + " " + (f + O) + " v " + -O : 0 < I && I <= .5 && .5 <= g ? m = "M " + l + " " + c + " v " + O + " A " + k + " " + P + " 0 0 1 " + -k + " " + O + " v " + -O : 0 < I && g < .5 && (m = "M " + l + " " + c + " v " + O + " A " + k + " " + P + " 0 0 1 " + a + " " + (f + O) + " v " + -O), m && (m = V.sv("path", {
                        _key: n + "__shadow__",
                        d: m,
                        fill: r,
                        onclick: [w._handlers.onclick, t[1], t[2]],
                        class: "chart pie3d addition",
                        stroke: "none",
                        filter: "url(#shadow)"
                    }), D.push(m));
                    f = "M " + l + " " + c + " A " + k + " " + P + " 0 " + s + " 1 " + a + " " + f + " L 0 0";
                    D.push(V.sv("path", {
                        d: f,
                        _key: n,
                        fill: r,
                        stroke: "none",
                        onclick: [w._handlers.onclick, t[1], t[2]],
                        class: "chart pie3d"
                    })), 1 === w._points.length ? M.push([y / 2, b / 2]) : M.push([.7 * h[0] + y / 2, .7 * h[1] + b / 2]), I = g
                }), this._center = [y / 2, b / 2], this._tooltipData = M, D = D.concat(T), V.sv("g", {
                    transform: "translate(" + y / 2 + ", " + b / 2 + ")"
                }, D)
            }, s);

        function s() {
            return null !== r && r.apply(this, arguments) || this
        }
        e.default = o
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(t, e)
            }, function(t, e) {
                function i() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }),
            r = this && this.__assign || function() {
                return (r = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = i(0),
            c = i(24),
            l = i(8),
            i = i(48),
            o = (s = i.default, o(u, s), u.prototype.addScale = function(t, e) {
                this._scale = e
            }, u.prototype.scaleReady = function(t) {
                for (var e in t) t[e] += this.config.paddings;
                return t
            }, u.prototype.dataReady = function(n) {
                var o = this;
                return this.config.active ? (this._points = this._data.map(function(t, e) {
                    var i = o._locator(t),
                        i = [i, i, t.id, i, i];
                    return n && (i[1] += n[e][1]), i
                }), this._points) : this._points = []
            }, u.prototype.getTooltipText = function(t) {
                if (this.config.tooltip) {
                    t = this._defaultLocator(this._data.getItem(t));
                    return this.config.tooltipTemplate ? this.config.tooltipTemplate(t) : t
                }
            }, u.prototype.paint = function(t, e) {
                var i = this;
                if (s.prototype.paint.call(this, t, e), this.config.active) {
                    var n = this.config,
                        t = [],
                        e = this._points.map(function(t, e) {
                            return (e ? "L" : "M") + t[0] + " " + t[1]
                        }).join(" ") + "Z";
                    return t.push(a.sv("path", {
                        d: e,
                        stroke: n.color,
                        "stroke-width": n.strokeWidth,
                        fill: n.fill,
                        "fill-opacity": n.alpha,
                        class: "chart radar"
                    })), n.pointType && (e = this._points.map(function(t) {
                        return i._drawPointType(t[0], t[1], l.calcPointRef(t[2], i.id))
                    }), t.push(a.sv("g", e))), a.sv("g", {
                        id: "seria" + n.id
                    }, t)
                }
            }, u.prototype._calckFinalPoints = function(n, o) {
                var r = this,
                    s = n < o ? n / 2 : o / 2,
                    a = 1 / this._data.getLength(),
                    l = -.25 - a;
                this._points.forEach(function(t, e) {
                    l += a;
                    var i = r._scale.point(t[0]),
                        i = c.getCoordinates(l, i * s, i * s);
                    t[0] = i[0] + n / 2, t[1] = i[1] + o / 2
                })
            }, u.prototype._defaultLocator = function(t) {
                return this._locator(t)
            }, u.prototype._setDefaults = function(t) {
                this._locator = l.locator(t.value), t.scales = t.scales || ["radial"], this.config = r(r({}, {
                    strokeWidth: 2,
                    active: !0,
                    tooltip: !0,
                    paddings: 5,
                    color: "none",
                    fill: "none",
                    pointType: "circle"
                }), t), this.config.pointType && (t = this.config.pointColor || this.config.color, this._drawPointType = this._getPointType(this.config.pointType, t, this.config.tooltip))
            }, u);

        function u() {
            return null !== s && s.apply(this, arguments) || this
        }
        e.default = o
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(t, e)
            }, function(t, e) {
                function i() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }),
            r = this && this.__assign || function() {
                return (r = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = i(50),
            l = i(8),
            o = (s = a.default, o(c, s), c.prototype.addScale = function(t, e) {
                "bottom" === t || "top" === t ? (this.xScale = e, this._xLocator = l.locator(this.config.value)) : (this.yScale = e, this._yLocator = l.locator(this.config.valueY))
            }, c.prototype._setDefaults = function(t) {
                this.config = r(r({}, {
                    active: !0,
                    tooltip: !0,
                    pointType: "rect"
                }), t);
                var e = this.config.tooltip,
                    i = this.config.pointType,
                    t = this.config.pointColor || this.config.color;
                i && (this._drawPointType = this._getPointType(i, t, e))
            }, c);

        function c() {
            return null !== s && s.apply(this, arguments) || this
        }
        e.default = o
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r, a = i(0),
            l = i(77),
            i = i(50),
            o = (r = i.default, o(s, r), s.prototype._getForm = function(t, e, i, n, o) {
                var r = e.color,
                    s = e.css,
                    t = l.default(t);
                return a.sv("path", {
                    id: "seria" + e.id,
                    d: t,
                    class: s,
                    stroke: r,
                    "stroke-width": 2,
                    fill: "none"
                })
            }, s);

        function s() {
            return null !== r && r.apply(this, arguments) || this
        }
        e.default = o
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r, h = i(0),
            f = i(77),
            i = i(75),
            o = (r = i.default, o(s, r), s.prototype._form = function(t, e, i, n) {
                var o = this.config,
                    r = o.fill,
                    s = o.alpha,
                    a = o.strokeWidth,
                    l = o.color,
                    c = o.id,
                    u = this.config.css,
                    d = "",
                    o = this._points[0],
                    d = n ? f.default([].concat(n).reverse()) + " " + f.default(this._points, !0) + " Z" : "M" + o[0] + " " + e + " V " + o[1] + " " + f.default(this._points) + " V" + e + " H " + o[0];
                a && (o = f.default(this._points), l = h.sv("path", {
                    d: o,
                    "stroke-width": a,
                    stroke: l,
                    fill: "none",
                    "stroke-linecap": "butt",
                    class: u
                }), i.push(l));
                s = h.sv("path", {
                    id: "seria" + c,
                    d: d,
                    class: u,
                    fill: r,
                    "fill-opacity": s,
                    stroke: "none"
                });
                return i.push(s), i
            }, s);

        function s() {
            return null !== r && r.apply(this, arguments) || this
        }
        e.default = o
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var l = i(0),
            i = (n.prototype.add = function(t) {
                this._series.push(t)
            }, n.prototype.dataReady = function(e) {
                return this._toPaint = this._series.filter(function(t) {
                    t = t.dataReady(e);
                    return !!t.length && (e = t, !0)
                }), e || []
            }, n.prototype.getPoints = function() {
                return this._toPaint.length ? this._toPaint[0].getPoints().concat(this._toPaint[this._toPaint.length - 1].getPoints()) : []
            }, n.prototype.paint = function(n, o, r) {
                var s = [],
                    a = [];
                return this._toPaint.forEach(function(t) {
                    var e, i;
                    t.paintformAndMarkers ? (i = (e = t.paintformAndMarkers(n, o, r))[0], e = e[1], s.push(i), a.push(e)) : (i = t.paint(n, o, r), s.push(i)), r = t.getPoints()
                }), l.sv("g", s.concat(a))
            }, n);

        function n() {
            this._series = []
        }
        e.default = i
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(t, e)
            }, function(t, e) {
                function i() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }),
            d = this && this.__spreadArrays || function() {
                for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
                for (var n = Array(t), o = 0, e = 0; e < i; e++)
                    for (var r = arguments[e], s = 0, a = r.length; s < a; s++, o++) n[o] = r[s];
                return n
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = i(1),
            h = i(0),
            s = i(3),
            a = i(2),
            l = i(176),
            c = i(4),
            u = i(5),
            f = i(14),
            p = i(37),
            _ = i(10),
            g = i(177),
            v = i(51),
            m = i(21),
            y = i(178),
            b = i(78),
            w = i(6);

        function x(t) {
            return t.icon ? '<span class="' + t.icon + ' dhx_combobox-options__icon"></span> <span class="dhx_combobox-options__value">' + t.value + "</span>" : t.src ? '<img src="' + t.src + '" class="dhx_combobox-options__image"></img> <span class="dhx_combobox-options__value">' + t.value + "</span>" : '<span class="dhx_combobox-options__value">' + t.value + "</span>"
        }
        var E, o = (E = c.View, o(C, E), C.prototype.focus = function() {
            if (this.config.disabled) return !1;
            this.getRootView().refs.input.el.focus()
        }, C.prototype.enable = function() {
            this.config.disabled = !1, this.paint()
        }, C.prototype.disable = function() {
            this.config.disabled = !0, this.paint()
        }, C.prototype.isDisabled = function() {
            return this.config.disabled
        }, C.prototype.clear = function() {
            if (this.config.disabled) return !1;
            this.list.selection.remove(), this._state.value = "", this._filter(), this.paint()
        }, C.prototype.getValue = function(t) {
            var e = this.list.selection.getId();
            return t ? r.wrapBox(e) : Array.isArray(e) ? e.join(",") : e
        }, C.prototype.setValue = function(t) {
            return this._setValue(t)
        }, C.prototype.destructor = function() {
            this.popup.destructor(), this.events.clear(), this.list.destructor(), this._layout.config = null, this._layout.destructor(), this._isPopupConfiqureted = null, this.unmount()
        }, C.prototype.setState = function(t) {
            switch (t) {
                case "success":
                    this._state.currentState = b.ComboState.success;
                    break;
                case "error":
                    this._state.currentState = b.ComboState.error;
                    break;
                default:
                    this._state.currentState = b.ComboState.default
            }
            this.paint()
        }, C.prototype._setValue = function(t, e) {
            var i = this;
            if (void 0 === e && (e = !1), this.config.disabled || !this._exsistId(t)) return !1;
            this._filter(), this.list.selection.remove(), this._state.value = "", this.config.multiselection ? ("string" == typeof t && (t = t.split(",")), t.forEach(function(t) {
                i.list.selection.add(t, !1, !1, e)
            })) : (t = r.unwrapBox(t), this.list.selection.add(t, !1, !1, e), (t = this.data.getItem(t)) && (this._state.value = this._getItemText(t))), this.paint()
        }, C.prototype._createLayout = function() {
            var t = this,
                e = this.list = new p.List(null, {
                    template: this.config.template,
                    virtual: this.config.virtual,
                    keyNavigation: function() {
                        return t.popup.isVisible()
                    },
                    multiselection: this.config.multiselection,
                    itemHeight: this.config.itemHeight,
                    height: this.config.listHeight,
                    data: this.data
                }),
                i = this._layout = new f.Layout(this.popup.getContainer(), {
                    css: "dhx_combobox-options dhx_combobox__options",
                    rows: [{
                        id: "select-unselect-all",
                        hidden: !this.config.multiselection || !this.config.selectAllButton
                    }, {
                        id: "list",
                        css: "dhx_layout-cell--gravity",
                        height: "content"
                    }, {
                        id: "not-found",
                        hidden: !0
                    }],
                    on: {
                        click: {
                            ".dhx_combobox__action-select-all": this._handlers.selectAll
                        }
                    }
                });
            i.getCell("list").attach(e), this.config.multiselection && this.config.selectAllButton && i.getCell("select-unselect-all").attach(y.selectAllView)
        }, C.prototype._initHandlers = function() {
            var i = this;
            this.config.helpMessage && (this._helper = new _.Popup({
                css: "dhx_tooltip dhx_tooltip--forced dhx_tooltip--light"
            }), this._helper.attachHTML(this.config.helpMessage)), this._handlers = {
                showHelper: function(t) {
                    t.preventDefault(), t.stopPropagation(), i._helper.show(t.target)
                },
                selectAll: function() {
                    i._state.unselectActive ? (i.list.selection.remove(), i.config.selectAllButton && (i._layout.getCell("select-unselect-all").attach(y.selectAllView), i._state.unselectActive = !1)) : (i.data.filter(), i.list.selection.add(), i.config.selectAllButton && (i._layout.getCell("select-unselect-all").attach(y.unselectAllView), i._state.unselectActive = !0)), i._changePopupPosition(), i.paint()
                },
                onkeydown: function(t) {
                    "Tab" === t.key && i.popup.isVisible() ? i._hideOptions() : (i.popup.isVisible() || t.which !== l.KEY_CODES.DOWN_ARROW || i._showOptions(), i.popup.isVisible() && t.which === l.KEY_CODES.RIGHT_ARROW && i.config.readOnly && !i.config.multiselection && (i.list.moveFocus(p.MOVE_DOWN), t.preventDefault()), i.popup.isVisible() && t.which === l.KEY_CODES.LEFT_ARROW && i.config.readOnly && !i.config.multiselection && (i.list.moveFocus(p.MOVE_UP), t.preventDefault()), i.popup.isVisible() && t.which === l.KEY_CODES.DOWN_ARROW && (i.list.moveFocus(p.MOVE_DOWN), t.preventDefault()), i.popup.isVisible() && t.which === l.KEY_CODES.UP_ARROW && (i.list.moveFocus(p.MOVE_UP), t.preventDefault()), i.popup.isVisible() && t.which === l.KEY_CODES.ESC && i._hideOptions(), i.popup.isVisible() && t.which === l.KEY_CODES.ENTER && (i.setValue(i.list.getFocus()), i.config.multiselection || i._hideOptions()))
                },
                onkeyup: function(t) {
                    i.config.multiselection && !i.config.itemsCount && (i._state.ignoreNext ? i._state.ignoreNext = !1 : t.which === l.KEY_CODES.BACKSPACE && i._state.canDelete && i.list.selection.getId().length && (t = (t = i.list.selection.getId())[t.length - 1], i.list.selection.remove(t), i.paint()))
                },
                oninput: function(t) {
                    i.config.disabled || (t = t.target.value, i.events.fire(b.ComboboxEvents.input, [t]), i._state.value = t, i._filter(), t.length ? i._state.canDelete = !1 : (i._state.ignoreNext = !0, i._state.canDelete = !0), i.config.multiselection || (i.list.selection.remove(), i.paint()), i.popup.isVisible() || i._showOptions())
                },
                oninputclick: function(t) {
                    if (!i.config.disabled) {
                        if (i.focus(), t.target.classList.contains("dhx_combobox__action-remove")) {
                            var e = a.locate(t);
                            return e ? (i.list.selection.remove(e), i._changePopupPosition(), void i.paint()) : void 0
                        }
                        if (t.target.classList.contains("dhx_combobox__action-clear-all")) return i.list.selection.getId().forEach(function(t) {
                            return i.list.selection.remove(t)
                        }), i.config.selectAllButton && i._state.unselectActive && (i._layout.getCell("select-unselect-all").attach(y.selectAllView), i._state.unselectActive = !1), void i.paint();
                        t.preventDefault(), i.popup.isVisible() ? i.focus() : i._showOptions()
                    }
                },
                toggleIcon: function() {
                    i.focus(), i.popup.isVisible() ? i._hideOptions() : i._showOptions()
                }
            }
        }, C.prototype._initEvents = function() {
            var i = this;
            this.data.events.on(u.DataEvents.load, function() {
                i.config.value && i._setValue(i.config.value, !0)
            }), this.list.events.on(p.ListEvents.click, function() {
                i.config.multiselection || i._hideOptions(), i._changePopupPosition()
            }), this.list.selection.events.on(m.SelectionEvents.afterSelect, function() {
                var t = i.getValue(i.config.multiselection);
                i.events.fire(b.ComboboxEvents.change, [t]), i._updateSelectedItem(t)
            }), this.list.selection.events.on(m.SelectionEvents.afterUnSelect, function() {
                var t = i.config.multiselection,
                    e = i.getValue(t);
                i.events.fire(b.ComboboxEvents.change, [e]), t && i._updateSelectedItem(e)
            }), this.popup.events.on(_.PopupEvents.beforeShow, function() {
                if (!i.popup.isVisible() && !i._isPopupConfiqureted) return i._configurePopup(), !1
            }), this.config.readOnly && this.popup.events.on(_.PopupEvents.afterShow, function() {
                var t;
                i._state.value ? (t = i.list.selection.getId(), i.list.setFocus(t)) : i.list.setFocus(i.data.getId(0)), i._keyListener.startNewListen(function(t) {
                    return i._findBest(t)
                })
            })
        }, C.prototype._showOptions = function() {
            this._state.value.length && (this._state.canDelete = !0), this._state.value && this._filter(), this._configurePopup() && this.events.fire(b.ComboboxEvents.open)
        }, C.prototype._configurePopup = function() {
            this._isPopupConfiqureted = !0;
            var t = this.getRootView();
            return !!(t && t.refs && t.refs.holder) && (this.popup.isVisible() || (t = t.refs.holder.el, this.popup.getContainer().style.width = t.offsetWidth + "px", this.popup.show(t, {
                mode: "bottom"
            })), !0)
        }, C.prototype._hideOptions = function() {
            this.events.fire(b.ComboboxEvents.beforeClose) && (this.config.readOnly && this._keyListener.endListen(), this.list.setFocus(this.data.getId(0)), this.config.multiselection || this.config.readOnly || this.list.selection.contains() || (this._state.value = ""), this.popup.hide(), this.events.fire(b.ComboboxEvents.afterClose), this.events.fire(b.ComboboxEvents.close), this._filter(), this.paint())
        }, C.prototype._filter = function() {
            var t, e = this;
            this.config.readOnly || (this.data.filter(function(t) {
                return e.config.filter ? e.config.filter(t, e._state.value) : r.isEqualString(e._state.value, e._getItemText(t))
            }), this.config.multiselection ? this.list.setFocus(this.data.getId(0)) : (t = this.data.getIndex(this.list.selection.getId()), this.list.setFocus(this.data.getId(-1 < t ? t : 0))), 0 === this.data.getLength() ? (this.config.multiselection && this.config.selectAllButton && this._layout.getCell("select-unselect-all").hide(), this._layout.getCell("list").hide(), this._layout.getCell("not-found").attach(y.emptyListView), this._layout.getCell("not-found").show()) : (this.config.multiselection && this.config.selectAllButton && this._layout.getCell("select-unselect-all").show(), this._layout.getCell("not-found").isVisible() && (this._layout.getCell("list").show(), this._layout.getCell("not-found").hide())))
        }, C.prototype._findBest = function(e) {
            var i = this,
                t = this.data.find(function(t) {
                    return r.isEqualString(e, i._getItemText(t))
                });
            t && this.list.selection.getId() !== t.id && (this.list.setFocus(t.id), this.list.selection.add(t.id), this.paint())
        }, C.prototype._exsistId = function(t) {
            var e = this;
            return t instanceof Array ? t.every(function(t) {
                return e.data.exists(t)
            }) : "string" == typeof t ? this.data.exists(t) : void 0
        }, C.prototype._draw = function() {
            var t = this.config,
                e = t.multiselection,
                i = t.labelPosition,
                n = t.hiddenLabel,
                o = t.required,
                r = t.disabled,
                s = t.css,
                a = t.helpMessage,
                l = t.readOnly,
                c = t.placeholder,
                u = e ? null : this.data.getItem(this.list.selection.getId()),
                t = !this.list.selection.getId() || 0 === this.list.selection.getId().length,
                e = w.getLabelStyle(this.config);
            return h.el(".dhx_widget.dhx_combobox" + ("left" === i ? ".dhx_combobox--label-inline" : "") + (n ? ".dhx_combobox--sr_only" : "") + (o ? ".dhx_combobox--required" : "") + (r ? ".dhx_combobox--disabled" : "") + (s ? "." + s : ""), {
                dhx_widget_id: this._uid,
                onkeydown: this._handlers.onkeydown,
                onkeyup: this._handlers.onkeyup
            }, [e ? h.el("label.dhx_label.dhx_combobox__label", {
                style: e.style,
                class: a ? "dhx_label--with-help" : "",
                onclick: this._handlers.oninputclick
            }, a ? [(e.label || o) && h.el("span.dhx_label__holder", e.label), h.el("span.dhx_label-help.dxi.dxi-help-circle-outline", {
                tabindex: "0",
                role: "button",
                onclick: this._handlers.showHelper
            })] : e.label) : null, h.el("div.dhx_combobox-input-box" + (r ? ".dhx_combobox-input-box--disabled" : "") + (l ? ".dhx_combobox-input-box--readonly" : "") + (this._state.currentState === b.ComboState.error ? ".dhx_combobox-input-box--state_error" : "") + (this._state.currentState === b.ComboState.success ? ".dhx_combobox-input-box--state_success" : ""), {
                _ref: "holder"
            }, [h.el("div.dhx_combobox-input__icon", {
                onclick: this._handlers.toggleIcon
            }, [h.el("span" + (this.popup.isVisible() ? ".dxi.dxi-menu-up" : ".dxi.dxi-menu-down"))]), h.el("div.dhx_combobox-input-list-wrapper", {
                onclick: this._handlers.oninputclick
            }, [h.el("ul.dhx_combobox-input-list", d(this._drawSelectedItems(), [h.el("li.dhx_combobox-input-list__item.dhx_combobox-input-list__item--input", [h.el("input.dhx_combobox-input", {
                oninput: this._handlers.oninput,
                _ref: "input",
                _key: this._uid,
                type: "text",
                placeHolder: t && c ? c : void 0,
                value: l && u ? this._getItemText(u) : this._state.value,
                readOnly: l || r,
                required: o
            })])]))])])])
        }, C.prototype._drawSelectedItems = function() {
            var t, i = this;
            if (!this.config.multiselection) return [];
            if (this.config.itemsCount) {
                var e = this.list.selection.getId().length;
                return e ? [h.el("li.dhx_combobox-input-list__item.dhx_combobox-tag", [h.el("span.dhx_combobox-tag__value", (t = e, "function" == typeof(e = this.config.itemsCount) ? e(t) : t + " " + v.default.selectedItems)), h.el("button.dhx_button.dhx_combobox-tag__action.dhx_combobox__action-clear-all", [h.el("span.dhx_button__icon.dxi.dxi-close-circle")])])] : []
            }
            return this.list.selection.getId().map(function(t) {
                var e = i.data.getItem(t);
                return e ? h.el("li.dhx_combobox-input-list__item.dhx_combobox-tag", {
                    dhx_id: t
                }, [i._drawImageOrIcon(e), h.el("span.dhx_combobox-tag__value", i._getItemText(e)), h.el("button.dhx_button.dhx_button--icon.dhx_combobox-tag__action.dhx_combobox__action-remove", {
                    type: "button"
                }, [h.el("span.dhx_button__icon.dxi.dxi-close-circle")])]) : null
            })
        }, C.prototype._drawImageOrIcon = function(t) {
            return t.src ? h.el("img.dhx_combobox-tag__image", {
                src: t.src
            }) : t.icon ? h.el("span.dhx_combobox-tag__icon", {
                class: t.icon
            }) : null
        }, C.prototype._getItemText = function(t) {
            return t ? t.value : null
        }, C.prototype._updateSelectedItem = function(t) {
            this.config.multiselection ? (this.config.selectAllButton && !this._state.unselectActive && this.data.getLength() === t.length ? (this._layout.getCell("select-unselect-all").attach(y.unselectAllView), this._state.unselectActive = !0) : this.config.selectAllButton && this._state.unselectActive && (this._layout.getCell("select-unselect-all").attach(y.selectAllView), this._state.unselectActive = !1), this._state.value.length || (this._state.canDelete = 0 === t.length)) : this._state.value = this._getItemText(this.data.getItem(t)) || "", this.paint()
        }, C.prototype._changePopupPosition = function() {
            var e = this;
            this.config.multiselection && h.awaitRedraw().then(function() {
                var t = e.getRootView().refs.holder.el;
                e.popup.getContainer().style.width = t.offsetWidth + "px", e.popup.show(t, {
                    mode: "bottom"
                })
            })
        }, C);

        function C(t, e) {
            var i = E.call(this, t, r.extend({
                template: x,
                listHeight: 224,
                itemHeight: 32,
                disabled: !1,
                readOnly: !1
            }, e)) || this;
            i.config.itemsCount = i.config.itemsCount || i.config.showItemsCount, i.config.helpMessage = i.config.helpMessage || i.config.help, i.config.cellHeight && 32 === i.config.itemHeight && (i.config.itemHeight = i.config.cellHeight), i.config.labelInline && (i.config.labelPosition = "left"), Array.isArray(i.config.data) ? (i.events = new s.EventSystem(i), i.data = new u.DataCollection({}), i.data.parse(i.config.data)) : i.config.data ? (i.data = i.config.data, i.events = new s.EventSystem(i), i.events.context = i) : (i.events = new s.EventSystem(i), i.data = new u.DataCollection({})), i.popup = new _.Popup, i.popup.events.on(_.PopupEvents.afterShow, function() {
                i.paint()
            }), i.popup.events.on(_.PopupEvents.afterHide, function() {
                i.config.multiselection && (i._state.value = ""), i.paint()
            }), i.popup.events.on(_.PopupEvents.beforeHide, function(t) {
                t && i.events.fire(b.ComboboxEvents.beforeClose) && (i.events.fire(b.ComboboxEvents.afterClose), i.events.fire(b.ComboboxEvents.close))
            }), (i.config.readonly || i.config.readOnly) && (i.config.readOnly = i.config.readOnly || i.config.readonly, i._keyListener = new g.KeyListener), i._state = {
                value: "",
                ignoreNext: !1,
                canDelete: !1,
                unselectActive: !1,
                currentState: b.ComboState.default
            }, i._initHandlers(), i._createLayout(), i.config.value && i._setValue(i.config.value, !0), i._initEvents();
            e = h.create({
                render: function() {
                    return i._draw()
                },
                hooks: {
                    didRedraw: function() {
                        i.popup.isVisible() && (i.focus(), i._configurePopup())
                    }
                }
            });
            return i.mount(t, e), i
        }
        e.Combobox = o
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.KEY_CODES = {
            BACKSPACE: 8,
            ENTER: 13,
            ESC: 27,
            DOWN_ARROW: 40,
            UP_ARROW: 38,
            LEFT_ARROW: 37,
            RIGHT_ARROW: 39
        }
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = (o.prototype.startNewListen = function(t) {
            this._isActive = !0, this._sequence = "", this._currentAction = t
        }, o.prototype.endListen = function() {
            this._currentAction = null, this.reset(), this._isActive = !1
        }, o.prototype.reset = function() {
            this._sequence = ""
        }, o.prototype._change = function() {
            this._currentAction(this._sequence), this._addClearTimeout()
        }, o.prototype._addClearTimeout = function() {
            var t = this;
            this._clearTimeout && clearTimeout(this._clearTimeout), this._clearTimeout = setTimeout(function() {
                t.reset(), t._clearTimeout = null
            }, 2e3)
        }, o);

        function o() {
            var e = this;
            this._sequence = "", document.addEventListener("keydown", function(t) {
                e._isActive && ("Backspace" === (t = t.key) && 0 < e._sequence.length && (e._sequence = e._sequence.slice(0, e._sequence.length - 1), e._change()), t.length < 2 && (e._sequence += t, e._change()))
            })
        }
        e.KeyListener = n
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(0),
            o = i(51);
        e.selectAllView = function() {
            return n.el(".dhx_list-item.dhx_combobox-options__item.dhx_combobox-options__item--select-all.dhx_combobox__action-select-all", o.default.selectAll)
        }, e.unselectAllView = function() {
            return n.el(".dhx_list-item.dhx_combobox-options__item.dhx_combobox-options__item--select-all.dhx_combobox__action-select-all", o.default.unselectAll)
        }, e.emptyListView = function() {
            return n.el("ul.dhx_list", [n.el("li.dhx_list-item.dhx_combobox-options__item", {}, o.default.notFound)])
        }
    }, function(t, i, e) {
        "use strict";

        function n(t) {
            for (var e in t) i.hasOwnProperty(e) || (i[e] = t[e])
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), n(e(180)), n(e(79))
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(t, e)
            }, function(t, e) {
                function i() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }),
            a = this && this.__assign || function() {
                return (a = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r, s = i(1),
            d = i(0),
            l = i(37),
            h = i(181),
            o = (r = l.List, o(c, r), c.prototype.showItem = function(t) {
                var e, i, n = this.getRootView();
                n && n.node && n.node.el && void 0 !== t && ((e = this.getRootNode()) && (i = this.config.virtual, n = this.data.getIndex(t), t = e.children[Math.floor(n / this.config.itemsInRow)], (i || t) && (t = t.children[n % this.config.itemsInRow], n = parseInt(this.config.gap.toString().replace("px", ""), null), t.offsetTop >= e.clientHeight + e.scrollTop - t.clientHeight ? e.scrollTop = t.offsetTop - e.clientHeight + t.clientHeight + n : t.offsetTop < e.scrollTop - n && (e.scrollTop = t.offsetTop - n))))
            }, c.prototype._didRedraw = function(t) {
                var e = t.node.el,
                    i = e.scrollHeight > e.offsetHeight,
                    e = t.node.attrs.class.replace(" dhx_dataview--has-scroll", ""),
                    e = i ? e + " dhx_dataview--has-scroll" : e;
                t.node.patch({
                    class: e
                })
            }, c.prototype._renderItem = function(t, e) {
                function i(t) {
                    return parseFloat(t)
                }
                var n = this.config,
                    o = n.itemsInRow,
                    r = n.gap,
                    s = n.template,
                    a = n.itemHeight,
                    l = s ? s(t) : t.htmlContent,
                    c = t.id === this._focus,
                    u = (e + 1) % this.config.itemsInRow == 0,
                    n = t.id.toString();
                if (n === this._edited) return h.getEditor(t, this).toHTML(u);
                e = this.data.getMetaMap(t);
                return d.el("div", {
                    class: "dhx_dataview-item" + (e && e.selected ? " dhx_dataview-item--selected" : "") + (c ? " dhx_dataview-item--focus" : "") + (e && e.drop && !this._edited ? " dhx_dataview-item--drophere" : "") + (e && e.drag && !this._edited ? " dhx_dataview-item--dragtarget" : "") + (this.config.dragMode && !this._edited ? " dhx_dataview-item--drag" : "") + (i(r) ? " dhx_dataview-item--with-gap" : "") + (t.css ? " " + t.css : "") + (u ? " dhx_dataview-item--last-item-in-row" : ""),
                    style: {
                        width: "calc(" + 100 / o + "% - " + i(r) + " * " + (o - 1) / o + "px)",
                        "margin-right": u ? "" : r,
                        height: s ? null : a
                    },
                    _key: n,
                    dhx_id: n,
                    _ref: n
                }, l ? [d.el(".dhx_dataview-item__inner-html", {
                    ".innerHTML": l
                })] : t.value || t.text || t.value)
            }, c.prototype._renderList = function() {
                var n = this,
                    t = this.data.getRawData(0, -1),
                    e = this.config,
                    o = e.itemsInRow,
                    i = e.css,
                    r = e.gap,
                    s = 0,
                    t = t.reduce(function(t, e, i) {
                        return 0 === s && t.push([]), t[t.length - 1].push(n._renderItem(e, i)), s = (s + 1) % o, t
                    }, []);
                return d.el("", a(a({}, this._handlers), {
                    dhx_widget_id: this._uid,
                    class: (i || "") + " dhx_widget dhx_dataview" + (this.config.multiselection && this.selection.getItem() ? " dhx_no-select--pointer" : ""),
                    style: {
                        height: this.config.height
                    }
                }), t.map(function(t) {
                    return d.el(".dhx_dataview-row", {
                        style: {
                            margin: r
                        }
                    }, t)
                }))
            }, c.prototype._getHotkeys = function() {
                var e = this,
                    t = r.prototype._getHotkeys.call(this);
                return t.arrowUp = function(t) {
                    e.moveFocus(l.MOVE_UP, e.config.itemsInRow), t.preventDefault()
                }, t.arrowDown = function(t) {
                    e.moveFocus(l.MOVE_DOWN, e.config.itemsInRow), t.preventDefault()
                }, t.arrowLeft = function(t) {
                    e.moveFocus(l.MOVE_UP), t.preventDefault()
                }, t.arrowRight = function(t) {
                    e.moveFocus(l.MOVE_DOWN), t.preventDefault()
                }, t
            }, c);

        function c(t, e) {
            return void 0 === e && (e = {}), r.call(this, t, s.extend({
                itemsInRow: 1,
                gap: "0px"
            }, e)) || this
        }
        e.DataView = o
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(182);
        e.getEditor = function(t, e) {
            return new n.InputEditor(t, e)
        }
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = i(0),
            n = i(79),
            i = (r.prototype.endEdit = function() {
                var t;
                this._input && (t = this._input.value, this._dataView.events.fire(n.DataViewEvents.beforeEditEnd, [t, this._item.id]) ? (this._input.removeEventListener("blur", this._handlers.onBlur), this._input.removeEventListener("change", this._handlers.onChange), this._handlers = {}, this._mode = !1, this._dataView.events.fire(n.DataViewEvents.afterEditEnd, [t, this._item.id])) : this._input.focus())
            }, r.prototype.toHTML = function(t) {
                this._mode = !0;
                var e = this._config,
                    i = e.itemsInRow,
                    n = e.gap,
                    e = function(t) {
                        return parseFloat(t)
                    };
                return o.el(".dhx_input__wrapper", {
                    style: {
                        width: "calc(" + 100 / i + "% - " + e(n) + " * " + (i - 1) / i + "px)",
                        maxWidth: "calc(" + 100 / i + "% - " + e(n) + " * " + (i - 1) / i + "px)",
                        marginRight: t ? "" : n
                    }
                }, [o.el("div.dhx_input__container", {
                    style: {
                        height: "100%"
                    }
                }, [o.el("input.dhx_input", {
                    class: (this._item.css ? " " + this._item.css : "") + (t ? " dhx_dataview-item--last-item-in-row" : ""),
                    style: {
                        padding: "8px, 12px",
                        width: "100%",
                        height: "100%"
                    },
                    _hooks: {
                        didInsert: this._handlers.didInsert
                    },
                    _key: this._item.id,
                    dhx_id: this._item.id
                })])])
            }, r.prototype._initHandlers = function() {
                var e = this;
                this._handlers = {
                    onBlur: function() {
                        e.endEdit()
                    },
                    onChange: function() {
                        e.endEdit()
                    },
                    didInsert: function(t) {
                        t = t.el;
                        (e._input = t).focus(), t.value = e._item.value, t.setSelectionRange(0, t.value.length), t.addEventListener("change", e._handlers.onChange), t.addEventListener("blur", e._handlers.onBlur)
                    }
                }
            }, r);

        function r(t, e) {
            var i = this;
            this._dataView = e, this._config = e.config, this._item = t, this._dataView.events.on(n.DataViewEvents.focusChange, function(t, e) {
                i._mode && e !== i._item.id && i.endEdit()
            }), this._initHandlers()
        }
        e.InputEditor = i
    }, function(t, i, e) {
        "use strict";

        function n(t) {
            for (var e in t) i.hasOwnProperty(e) || (i[e] = t[e])
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), n(e(184)), n(e(7));
        e = e(7);
        i.FormEvents = e.FormEvents
    }, function(t, u, d) {
        "use strict";
        (function(t) {
            var n, e = this && this.__extends || (n = function(t, e) {
                    return (n = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(t, e)
                }, function(t, e) {
                    function i() {
                        this.constructor = t
                    }
                    n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
                }),
                i = this && this.__assign || function() {
                    return (i = Object.assign || function(t) {
                        for (var e, i = 1, n = arguments.length; i < n; i++)
                            for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        return t
                    }).apply(this, arguments)
                },
                E = this && this.__rest || function(t, e) {
                    var i = {};
                    for (o in t) Object.prototype.hasOwnProperty.call(t, o) && e.indexOf(o) < 0 && (i[o] = t[o]);
                    if (null != t && "function" == typeof Object.getOwnPropertySymbols)
                        for (var n = 0, o = Object.getOwnPropertySymbols(t); n < o.length; n++) e.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[n]) && (i[o[n]] = t[o[n]]);
                    return i
                },
                C = this && this.__spreadArrays || function() {
                    for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
                    for (var n = Array(t), o = 0, e = 0; e < i; e++)
                        for (var r = arguments[e], s = 0, a = r.length; s < a; s++, o++) n[o] = r[s];
                    return n
                };
            Object.defineProperty(u, "__esModule", {
                value: !0
            });
            var o, r = d(3),
                s = d(4),
                a = d(14),
                S = d(1),
                k = d(185),
                P = d(186),
                O = d(80),
                M = d(187),
                I = d(52),
                D = d(188),
                T = d(190),
                V = d(191),
                H = d(192),
                j = d(193),
                L = d(194),
                l = d(6),
                F = d(195),
                A = d(196),
                R = d(197),
                z = d(198),
                $ = d(7),
                e = (o = s.View, e(c, o), c.prototype.send = function(n, o, r) {
                    var s = this;
                    if (void 0 === o && (o = "POST"), this.events.fire($.FormEvents.beforeSend)) return new t(function(t, e) {
                        var i = new XMLHttpRequest;
                        switch (i.onload = function() {
                                200 === i.status ? t(i.response || i.responseText) : e({
                                    status: i.status,
                                    statusText: i.statusText
                                })
                            }, i.onloadend = function() {
                                i.readyState === XMLHttpRequest.DONE && 200 === i.status && s.events.fire($.FormEvents.afterSend)
                            }, i.onerror = function() {
                                e({
                                    status: i.status,
                                    statusText: i.statusText
                                })
                            }, "GET" === o && (n += "?" + encodeURIComponent(JSON.stringify(s.getValue()))), i.open(o, n), r || i.setRequestHeader("Content-Type", "application/json"), o) {
                            case "POST":
                                s._send(), i.send(r ? s.getValue(!0) : JSON.stringify(s.getValue()));
                                break;
                            case "DELETE":
                            case "PUT":
                                i.send(r ? s.getValue(!0) : JSON.stringify(s.getValue()));
                                break;
                            case "GET":
                            default:
                                i.send()
                        }
                    })
                }, c.prototype.clear = function(t) {
                    switch (t) {
                        case $.ClearMethod.value:
                            this._clear();
                            break;
                        case $.ClearMethod.validation:
                            this._clearValidate();
                            break;
                        default:
                            this._clear(), this._clearValidate()
                    }
                    this.paint()
                }, c.prototype.setValue = function(t) {
                    for (var e in t)
                        for (var i in this._attachments) "function" == typeof this._attachments[i].setValue && this._attachments[i].config.name === e && this._attachments[i].setValue(t[e])
                }, c.prototype.getValue = function(t) {
                    if (t) {
                        var e, n = new FormData,
                            o = this;
                        for (e in this._state) ! function(i) {
                            Array.isArray(o._state[i]) ? o._state[i].forEach(function(t, e) {
                                return n.append(i + "[" + e + "]", t)
                            }) : n.append(i, o._state[i])
                        }(e);
                        return n
                    }
                    return i({}, this._state)
                }, c.prototype.getItem = function(t) {
                    for (var e in this._attachments)
                        if (e === t) return this._attachments[e]
                }, c.prototype.validate = function(t) {
                    for (var e in void 0 === t && (t = !1), this._isValid = !0, this._attachments) "function" == typeof this._attachments[e].validate && l.isVerify(this._attachments[e].config) && !this._attachments[e].validate(t) && (this._isValid = !1, t || this.events.fire($.FormEvents.validationFail, [e, this._attachments[e]]));
                    return this._isValid
                }, c.prototype.setProperties = function(t, e) {
                    if ("string" == typeof t && e && !S.isEmptyObj(e))
                        for (var i in this._attachments) "function" == typeof this._attachments[i].setProperties && i === t && this._attachments[i].setProperties(e);
                    if ("object" == typeof t && !S.isEmptyObj(t))
                        for (var i in this._attachments) "function" != typeof this._attachments[i].setProperties || S.isEmptyObj(t[i]) || this._attachments[i].setProperties(t[i])
                }, c.prototype.getProperties = function(t) {
                    if (t)
                        for (var e in this._attachments)
                            if ("function" == typeof this._attachments[e].getProperties && e === t) return this._attachments[e].getProperties();
                    var i = {};
                    for (e in this._attachments) "function" == typeof this._attachments[e].getProperties && (i[e] = this._attachments[e].getProperties());
                    return i
                }, c.prototype.show = function() {
                    if (this.config.hidden || Object.values(this._attachments).some(function(t) {
                            return !t.config.hidden
                        }))
                        for (var t in this._formContainerShow(), this._attachments) "function" == typeof this._attachments[t].show && this._attachments[t].show()
                }, c.prototype.hide = function(t) {
                    if (!this.config.hidden || t)
                        for (var e in this._formContainerHide(), this._attachments) "function" == typeof this._attachments[e].hide && this._attachments[e].hide(t)
                }, c.prototype.setFocus = function(t) {
                    for (var e in this._attachments) {
                        var i = this._attachments[e];
                        "radiogroup" !== i.config.type && "checkboxgroup" !== i.config.type || i.focus(t), i.config.name === t && i.focus()
                    }
                }, c.prototype.isVisible = function(t) {
                    if (!t) return !this.config.hidden;
                    for (var e in this._attachments)
                        if (e === t) return !this._attachments[e].config.hidden
                }, c.prototype.disable = function() {
                    for (var t in this.config.disabled = !0, this._attachments) "function" == typeof this._attachments[t].disable && this._attachments[t].disable()
                }, c.prototype.enable = function() {
                    for (var t in this.config.disabled = !1, this._attachments) "function" == typeof this._attachments[t].enable && this._attachments[t].enable()
                }, c.prototype.isDisabled = function(t) {
                    if (!t) return this.config.disabled;
                    for (var e in this._attachments)
                        if (e === t) return this._attachments[e].config.disabled
                }, c.prototype.forEach = function(t) {
                    for (var e = Object.values(this._attachments), i = 0; i < e.length; i++) t.call(this, e[i], i, e)
                }, c.prototype.destructor = function() {
                    this.events.clear(), this.unmount()
                }, c.prototype.getRootView = function() {
                    return this.layout.getRootView()
                }, c.prototype._addLayoutItem = function(t) {
                    var i = this,
                        e = t.id = t.id || S.uid(),
                        n = t.name = t.name || e;
                    t.type = t.type && t.type.toLowerCase();
                    var o = t.width,
                        r = t.height,
                        s = t.css,
                        e = t.padding,
                        a = E(t, ["css", "padding"]),
                        l = s ? s + " dhx_form-element" : "dhx_form-element",
                        s = !("spacer" === t.type || void 0 === t.type);
                    switch (s && !o && (o = "content"), s && !r && (r = "content"), a.type) {
                        case "button":
                            a.full && (l += " dhx_button--full-gravity");
                            var c = this._attachments[n] = new P.Button(null, a);
                            c.events.on($.ItemEvent.beforeChangeProperties, function(t) {
                                return i.events.fire($.FormEvents.beforeChangeProperties, [n, t])
                            }), c.events.on($.ItemEvent.afterChangeProperties, function(t) {
                                i._changeProps(n, t), i.events.fire($.FormEvents.afterChangeProperties, [n, t]), i.layout.paint()
                            }), c.events.on($.ItemEvent.click, function(t) {
                                t.preventDefault(), i.events.fire($.FormEvents.click, [n, t]), i.events.fire($.FormEvents.buttonClick, [n, t]), c.config.submit && i.validate() && c.config.url && i.send(c.config.url)
                            }), c.events.on($.ItemEvent.beforeHide, function(t, e) {
                                if (!e) return i.events.fire($.FormEvents.beforeHide, [n, t])
                            }), c.events.on($.ItemEvent.beforeShow, function(t) {
                                return i.events.fire($.FormEvents.beforeShow, [n, t])
                            }), c.events.on($.ItemEvent.afterHide, function(t, e) {
                                i.layout.getCell(n).hide(), e || i.events.fire($.FormEvents.afterHide, [n, t])
                            }), c.events.on($.ItemEvent.afterShow, function(t) {
                                i.layout.getCell(n).show(), i.events.fire($.FormEvents.afterShow, [n, t])
                            });
                            break;
                        case "datepicker":
                            var u = this._attachments[n] = new k.DatePicker(null, a);
                            this._state[n] = u.getValue("Date" === a.valueFormat), u.events.on($.ItemEvent.beforeChangeProperties, function(t) {
                                return i.events.fire($.FormEvents.beforeChangeProperties, [n, t])
                            }), u.events.on($.ItemEvent.afterChangeProperties, function(t) {
                                i._changeProps(n, t), i._state[n] = u.getValue("Date" === a.valueFormat), i.events.fire($.FormEvents.afterChangeProperties, [n, t]), i.layout.paint()
                            }), u.events.on($.ItemEvent.change, function(t) {
                                i._state[n] = t, i.events.fire($.FormEvents.change, [n, t])
                            }), u.events.on($.ItemEvent.beforeHide, function(t, e) {
                                if (!e) return i.events.fire($.FormEvents.beforeHide, [n, t])
                            }), u.events.on($.ItemEvent.beforeShow, function(t) {
                                return i.events.fire($.FormEvents.beforeShow, [n, t])
                            }), u.events.on($.ItemEvent.afterHide, function(t, e) {
                                i.layout.getCell(n).hide(), e || i.events.fire($.FormEvents.afterHide, [n, t])
                            }), u.events.on($.ItemEvent.afterShow, function(t) {
                                i.layout.getCell(n).show(), i.events.fire($.FormEvents.afterShow, [n, t])
                            }), u.events.on($.ItemEvent.beforeValidate, function(t) {
                                return i.events.fire($.FormEvents.beforeValidate, [n, t])
                            }), u.events.on($.ItemEvent.afterValidate, function(t, e) {
                                i.events.fire($.FormEvents.afterValidate, [n, t, e])
                            });
                            break;
                        case "checkbox":
                            var d = this._attachments[n] = new O.Checkbox(null, a);
                            this._state[n] = d.getValue(), d.events.on($.ItemEvent.beforeChangeProperties, function(t) {
                                return i.events.fire($.FormEvents.beforeChangeProperties, [n, t])
                            }), d.events.on($.ItemEvent.afterChangeProperties, function(t) {
                                i._changeProps(n, t), i._state[n] = d.getValue(), i.events.fire($.FormEvents.afterChangeProperties, [n, t]), i.layout.paint()
                            }), d.events.on($.ItemEvent.change, function(t) {
                                i._state[n] = t, i.events.fire($.FormEvents.change, [n, t])
                            }), d.events.on($.ItemEvent.beforeHide, function(t, e) {
                                if (!e) return i.events.fire($.FormEvents.beforeHide, [n, t])
                            }), d.events.on($.ItemEvent.beforeShow, function(t) {
                                return i.events.fire($.FormEvents.beforeShow, [n, t])
                            }), d.events.on($.ItemEvent.afterHide, function(t, e) {
                                i.layout.getCell(n).hide(), e || i.events.fire($.FormEvents.afterHide, [n, t])
                            }), d.events.on($.ItemEvent.afterShow, function(t) {
                                i.layout.getCell(n).show(), i.events.fire($.FormEvents.afterShow, [n, t])
                            }), d.events.on($.ItemEvent.beforeValidate, function(t) {
                                return i.events.fire($.FormEvents.beforeValidate, [n, t])
                            }), d.events.on($.ItemEvent.afterValidate, function(t, e) {
                                i.events.fire($.FormEvents.afterValidate, [n, t, e])
                            });
                            break;
                        case "checkboxgroup":
                            var h = this._attachments[n] = new M.CheckboxGroup(null, a);
                            this._state[n] = h.getValue(), h.events.on($.ItemEvent.beforeChangeProperties, function(t) {
                                return i.events.fire($.FormEvents.beforeChangeProperties, [n, t])
                            }), h.events.on($.ItemEvent.afterChangeProperties, function(t) {
                                i._changeProps(n, t), i._state[n] = h.getValue(), i.events.fire($.FormEvents.afterChangeProperties, [n, t]), i.layout.paint()
                            }), h.events.on($.ItemEvent.change, function(t) {
                                i._state[n] = t, i.events.fire($.FormEvents.change, [n, t])
                            }), h.events.on($.ItemEvent.beforeHide, function(t, e) {
                                if (!e) return i.events.fire($.FormEvents.beforeHide, [n, t])
                            }), h.events.on($.ItemEvent.beforeShow, function(t) {
                                return i.events.fire($.FormEvents.beforeShow, [n, t])
                            }), h.events.on($.ItemEvent.afterHide, function(t, e) {
                                i.layout.getCell(n).hide(), e || i.events.fire($.FormEvents.afterHide, [n, t])
                            }), h.events.on($.ItemEvent.afterShow, function(t) {
                                i.layout.getCell(n).show(), i.events.fire($.FormEvents.afterShow, [n, t])
                            }), h.events.on($.ItemEvent.beforeValidate, function(t) {
                                return i.events.fire($.FormEvents.beforeValidate, [n, t])
                            }), h.events.on($.ItemEvent.afterValidate, function(t, e) {
                                i.events.fire($.FormEvents.afterValidate, [n, t, e])
                            });
                            break;
                        case "combo":
                            var f = this._attachments[n] = new j.Combo(null, a);
                            this._state[n] = f.getValue(), f.events.on($.ItemEvent.beforeChangeProperties, function(t) {
                                return i.events.fire($.FormEvents.beforeChangeProperties, [n, t])
                            }), f.events.on($.ItemEvent.afterChangeProperties, function(t) {
                                i._changeProps(n, t), i._state[n] = f.getValue(), i.events.fire($.FormEvents.afterChangeProperties, [n, t]), i.layout.paint()
                            }), f.events.on($.ItemEvent.change, function(t) {
                                i._state[n] = t, i.events.fire($.FormEvents.change, [n, t])
                            }), f.events.on($.ItemEvent.beforeHide, function(t, e) {
                                if (!e) return i.events.fire($.FormEvents.beforeHide, [n, t])
                            }), f.events.on($.ItemEvent.beforeShow, function(t) {
                                return i.events.fire($.FormEvents.beforeShow, [n, t])
                            }), f.events.on($.ItemEvent.afterHide, function(t, e) {
                                i.layout.getCell(n).hide(), e || i.events.fire($.FormEvents.afterHide, [n, t])
                            }), f.events.on($.ItemEvent.afterShow, function(t) {
                                i.layout.getCell(n).show(), i.events.fire($.FormEvents.afterShow, [n, t])
                            }), f.events.on($.ItemEvent.beforeValidate, function(t) {
                                return i.events.fire($.FormEvents.beforeValidate, [n, t])
                            }), f.events.on($.ItemEvent.afterValidate, function(t, e) {
                                i.events.fire($.FormEvents.afterValidate, [n, t, e])
                            });
                            break;
                        case "input":
                            var p = this._attachments[n] = new I.Input(null, a);
                            this._state[n] = p.getValue(), p.events.on($.ItemEvent.beforeChangeProperties, function(t) {
                                return i.events.fire($.FormEvents.beforeChangeProperties, [n, t])
                            }), p.events.on($.ItemEvent.afterChangeProperties, function(t) {
                                i._changeProps(n, t), i._state[n] = p.getValue(), i.events.fire($.FormEvents.afterChangeProperties, [n, t]), i.layout.paint()
                            }), p.events.on($.ItemEvent.change, function(t) {
                                i._state[n] = t, i.events.fire($.FormEvents.change, [n, t])
                            }), p.events.on($.ItemEvent.beforeHide, function(t, e) {
                                if (!e) return i.events.fire($.FormEvents.beforeHide, [n, t])
                            }), p.events.on($.ItemEvent.beforeShow, function(t) {
                                return i.events.fire($.FormEvents.beforeShow, [n, t])
                            }), p.events.on($.ItemEvent.afterHide, function(t, e) {
                                i.layout.getCell(n).hide(), e || i.events.fire($.FormEvents.afterHide, [n, t])
                            }), p.events.on($.ItemEvent.afterShow, function(t) {
                                i.layout.getCell(n).show(), i.events.fire($.FormEvents.afterShow, [n, t])
                            }), p.events.on($.ItemEvent.beforeValidate, function(t) {
                                return i.events.fire($.FormEvents.beforeValidate, [n, t])
                            }), p.events.on($.ItemEvent.afterValidate, function(t, e) {
                                i.events.fire($.FormEvents.afterValidate, [n, t, e])
                            });
                            break;
                        case "radiogroup":
                            var _ = this._attachments[n] = new D.RadioGroup(null, a);
                            this._state[n] = _.getValue(), _.events.on($.ItemEvent.beforeChangeProperties, function(t) {
                                return i.events.fire($.FormEvents.beforeChangeProperties, [n, t])
                            }), _.events.on($.ItemEvent.afterChangeProperties, function(t) {
                                i._changeProps(n, t), i._state[n] = _.getValue(), i.events.fire($.FormEvents.afterChangeProperties, [n, t]), i.layout.paint()
                            }), _.events.on($.ItemEvent.change, function(t) {
                                i._state[n] = t, i.events.fire($.FormEvents.change, [n, t])
                            }), _.events.on($.ItemEvent.beforeHide, function(t, e) {
                                if (!e) return i.events.fire($.FormEvents.beforeHide, [n, t])
                            }), _.events.on($.ItemEvent.beforeShow, function(t) {
                                return i.events.fire($.FormEvents.beforeShow, [n, t])
                            }), _.events.on($.ItemEvent.afterHide, function(t, e) {
                                i.layout.getCell(n).hide(), e || i.events.fire($.FormEvents.afterHide, [n, t])
                            }), _.events.on($.ItemEvent.afterShow, function(t) {
                                i.layout.getCell(n).show(), i.events.fire($.FormEvents.afterShow, [n, t])
                            }), _.events.on($.ItemEvent.beforeValidate, function(t) {
                                return i.events.fire($.FormEvents.beforeValidate, [n, t])
                            }), _.events.on($.ItemEvent.afterValidate, function(t, e) {
                                i.events.fire($.FormEvents.afterValidate, [n, t, e])
                            });
                            break;
                        case "select":
                            var g = this._attachments[n] = new T.Select(null, a);
                            this._state[n] = g.getValue(), g.events.on($.ItemEvent.beforeChangeProperties, function(t) {
                                return i.events.fire($.FormEvents.beforeChangeProperties, [n, t])
                            }), g.events.on($.ItemEvent.afterChangeProperties, function(t) {
                                i._changeProps(n, t), i._state[n] = g.getValue(), i.events.fire($.FormEvents.afterChangeProperties, [n, t]), i.layout.paint()
                            }), g.events.on($.ItemEvent.changeOptions, function(t) {
                                i.layout.getCell(n).config.options = C(t)
                            }), g.events.on($.ItemEvent.change, function(t) {
                                i._state[n] = t, i.events.fire($.FormEvents.change, [n, t])
                            }), g.events.on($.ItemEvent.beforeHide, function(t, e) {
                                if (!e) return i.events.fire($.FormEvents.beforeHide, [n, t])
                            }), g.events.on($.ItemEvent.beforeShow, function(t) {
                                return i.events.fire($.FormEvents.beforeShow, [n, t])
                            }), g.events.on($.ItemEvent.afterHide, function(t, e) {
                                i.layout.getCell(n).hide(), e || i.events.fire($.FormEvents.afterHide, [n, t])
                            }), g.events.on($.ItemEvent.afterShow, function(t) {
                                i.layout.getCell(n).show(), i.events.fire($.FormEvents.afterShow, [n, t])
                            }), g.events.on($.ItemEvent.beforeValidate, function(t) {
                                return i.events.fire($.FormEvents.beforeValidate, [n, t])
                            }), g.events.on($.ItemEvent.afterValidate, function(t, e) {
                                i.events.fire($.FormEvents.afterValidate, [n, t, e])
                            });
                            break;
                        case "simplevault":
                            a.$vaultHeight = r;
                            var v = this._attachments[n] = new F.SimpleVault(null, a);
                            this._state[n] = v.getValue(), v.events.on($.ItemEvent.beforeChangeProperties, function(t) {
                                return i.events.fire($.FormEvents.beforeChangeProperties, [n, t])
                            }), v.events.on($.ItemEvent.afterChangeProperties, function(t) {
                                i._changeProps(n, t), i._state[n] = v.getValue(), i.events.fire($.FormEvents.afterChangeProperties, [n, t]), i.layout.paint()
                            }), v.events.on($.ItemEvent.change, function(t) {
                                i._state[n] = t, i.events.fire($.FormEvents.change, [n, t])
                            }), v.events.on($.ItemEvent.beforeHide, function(t, e) {
                                if (!e) return i.events.fire($.FormEvents.beforeHide, [n, t])
                            }), v.events.on($.ItemEvent.beforeShow, function(t) {
                                return i.events.fire($.FormEvents.beforeShow, [n, t])
                            }), v.events.on($.ItemEvent.afterHide, function(t, e) {
                                i.layout.getCell(n).hide(), e || i.events.fire($.FormEvents.afterHide, [n, t])
                            }), v.events.on($.ItemEvent.afterShow, function(t) {
                                i.layout.getCell(n).show(), i.events.fire($.FormEvents.afterShow, [n, t])
                            }), v.events.on($.ItemEvent.beforeValidate, function(t) {
                                return i.events.fire($.FormEvents.beforeValidate, [n, t])
                            }), v.events.on($.ItemEvent.afterValidate, function(t, e) {
                                i.events.fire($.FormEvents.afterValidate, [n, t, e])
                            });
                            break;
                        case "slider":
                            var m = this._attachments[n] = new L.SliderForm(null, a);
                            this._state[n] = m.getValue(), m.events.on($.ItemEvent.change, function(t) {
                                i._state[n] = t, i.events.fire($.FormEvents.change, [n, t])
                            }), m.events.on($.ItemEvent.beforeHide, function(t, e) {
                                if (!e) return i.events.fire($.FormEvents.beforeHide, [n, t])
                            }), m.events.on($.ItemEvent.beforeShow, function(t) {
                                return i.events.fire($.FormEvents.beforeShow, [n, t])
                            }), m.events.on($.ItemEvent.afterHide, function(t, e) {
                                i.layout.getCell(n).hide(), e || i.events.fire($.FormEvents.afterHide, [n, t])
                            }), m.events.on($.ItemEvent.afterShow, function(t) {
                                i.layout.getCell(n).show(), i.events.fire($.FormEvents.afterShow, [n, t])
                            });
                            break;
                        case "textarea":
                            var y = this._attachments[n] = new V.Textarea(null, a);
                            this._state[n] = y.getValue(), y.events.on($.ItemEvent.beforeChangeProperties, function(t) {
                                return i.events.fire($.FormEvents.beforeChangeProperties, [n, t])
                            }), y.events.on($.ItemEvent.afterChangeProperties, function(t) {
                                i._changeProps(n, t), i._state[n] = y.getValue(), i.events.fire($.FormEvents.afterChangeProperties, [n, t]), i.layout.paint()
                            }), y.events.on($.ItemEvent.change, function(t) {
                                i._state[n] = t, i.events.fire($.FormEvents.change, [n, t])
                            }), y.events.on($.ItemEvent.beforeHide, function(t, e) {
                                if (!e) return i.events.fire($.FormEvents.beforeHide, [n, t])
                            }), y.events.on($.ItemEvent.beforeShow, function(t) {
                                return i.events.fire($.FormEvents.beforeShow, [n, t])
                            }), y.events.on($.ItemEvent.afterHide, function(t, e) {
                                i.layout.getCell(n).hide(), e || i.events.fire($.FormEvents.afterHide, [n, t])
                            }), y.events.on($.ItemEvent.afterShow, function(t) {
                                i.layout.getCell(n).show(), i.events.fire($.FormEvents.afterShow, [n, t])
                            }), y.events.on($.ItemEvent.beforeValidate, function(t) {
                                return i.events.fire($.FormEvents.beforeValidate, [n, t])
                            }), y.events.on($.ItemEvent.afterValidate, function(t, e) {
                                i.events.fire($.FormEvents.afterValidate, [n, t, e])
                            });
                            break;
                        case "text":
                            var b = this._attachments[n] = new H.Text(null, a);
                            this._state[n] = b.getValue(), b.events.on($.ItemEvent.beforeChangeProperties, function(t) {
                                return i.events.fire($.FormEvents.beforeChangeProperties, [n, t])
                            }), b.events.on($.ItemEvent.afterChangeProperties, function(t) {
                                i._changeProps(n, t), i._state[n] = b.getValue(), i.events.fire($.FormEvents.afterChangeProperties, [n, t]), i.layout.paint()
                            }), b.events.on($.ItemEvent.change, function(t) {
                                i._state[n] = t, i.events.fire($.FormEvents.change, [n, t])
                            }), b.events.on($.ItemEvent.beforeHide, function(t, e) {
                                if (!e) return i.events.fire($.FormEvents.beforeHide, [n, t])
                            }), b.events.on($.ItemEvent.beforeShow, function(t) {
                                return i.events.fire($.FormEvents.beforeShow, [n, t])
                            }), b.events.on($.ItemEvent.afterHide, function(t, e) {
                                i.layout.getCell(n).hide(), e || i.events.fire($.FormEvents.afterHide, [n, t])
                            }), b.events.on($.ItemEvent.afterShow, function(t) {
                                i.layout.getCell(n).show(), i.events.fire($.FormEvents.afterShow, [n, t])
                            }), b.events.on($.ItemEvent.beforeValidate, function(t) {
                                return i.events.fire($.FormEvents.beforeValidate, [n, t])
                            }), b.events.on($.ItemEvent.afterValidate, function(t, e) {
                                i.events.fire($.FormEvents.afterValidate, [n, t, e])
                            });
                            break;
                        case "timepicker":
                            var w = this._attachments[n] = new A.TimePicker(null, a);
                            this._state[n] = a.value && w.getValue("timeObject" === a.valueFormat) || "", w.events.on($.ItemEvent.beforeChangeProperties, function(t) {
                                return i.events.fire($.FormEvents.beforeChangeProperties, [n, t])
                            }), w.events.on($.ItemEvent.afterChangeProperties, function(t) {
                                i._changeProps(n, t), i._state[n] = w.getValue("timeObject" === a.valueFormat), i.events.fire($.FormEvents.afterChangeProperties, [n, t]), i.layout.paint()
                            }), w.events.on($.ItemEvent.change, function(t) {
                                i._state[n] = t, i.events.fire($.FormEvents.change, [n, t])
                            }), w.events.on($.ItemEvent.beforeHide, function(t, e) {
                                if (!e) return i.events.fire($.FormEvents.beforeHide, [n, t])
                            }), w.events.on($.ItemEvent.beforeShow, function(t) {
                                return i.events.fire($.FormEvents.beforeShow, [n, t])
                            }), w.events.on($.ItemEvent.afterHide, function(t, e) {
                                i.layout.getCell(n).hide(), e || i.events.fire($.FormEvents.afterHide, [n, t])
                            }), w.events.on($.ItemEvent.afterShow, function(t) {
                                i.layout.getCell(n).show(), i.events.fire($.FormEvents.afterShow, [n, t])
                            }), w.events.on($.ItemEvent.beforeValidate, function(t) {
                                return i.events.fire($.FormEvents.beforeValidate, [n, t])
                            }), w.events.on($.ItemEvent.afterValidate, function(t, e) {
                                i.events.fire($.FormEvents.afterValidate, [n, t, e])
                            });
                            break;
                        case "colorpicker":
                            var x = this._attachments[n] = new R.ColorPicker(null, a);
                            this._state[n] = x.getValue(), x.events.on($.ItemEvent.beforeChangeProperties, function(t) {
                                return i.events.fire($.FormEvents.beforeChangeProperties, [n, t])
                            }), x.events.on($.ItemEvent.afterChangeProperties, function(t) {
                                i._changeProps(n, t), i._state[n] = x.getValue(), i.events.fire($.FormEvents.afterChangeProperties, [n, t]), i.layout.paint()
                            }), x.events.on($.ItemEvent.change, function(t) {
                                i._state[n] = t, i.events.fire($.FormEvents.change, [n, t])
                            }), x.events.on($.ItemEvent.beforeHide, function(t, e) {
                                if (!e) return i.events.fire($.FormEvents.beforeHide, [n, t])
                            }), x.events.on($.ItemEvent.beforeShow, function(t) {
                                return i.events.fire($.FormEvents.beforeShow, [n, t])
                            }), x.events.on($.ItemEvent.afterHide, function(t, e) {
                                i.layout.getCell(n).hide(), e || i.events.fire($.FormEvents.afterHide, [n, t])
                            }), x.events.on($.ItemEvent.afterShow, function(t) {
                                i.layout.getCell(n).show(), i.events.fire($.FormEvents.afterShow, [n, t])
                            }), x.events.on($.ItemEvent.beforeValidate, function(t) {
                                return i.events.fire($.FormEvents.beforeValidate, [n, t])
                            }), x.events.on($.ItemEvent.afterValidate, function(t, e) {
                                i.events.fire($.FormEvents.afterValidate, [n, t, e])
                            });
                            break;
                        case "spacer":
                        default:
                            m = this._attachments[n] = new z.Spacer(null, a);
                            m.events.on($.ItemEvent.beforeChangeProperties, function(t) {
                                return i.events.fire($.FormEvents.beforeChangeProperties, [n, t])
                            }), m.events.on($.ItemEvent.afterChangeProperties, function(t) {
                                i._changeProps(n, t), i.events.fire($.FormEvents.afterChangeProperties, [n, t]), i.layout.paint()
                            }), m.events.on($.ItemEvent.beforeHide, function(t, e) {
                                if (!e) return i.events.fire($.FormEvents.beforeHide, [n, t])
                            }), m.events.on($.ItemEvent.beforeShow, function(t) {
                                return i.events.fire($.FormEvents.beforeShow, [n, t])
                            }), m.events.on($.ItemEvent.afterHide, function(t, e) {
                                i.layout.getCell(n).hide(), e || i.events.fire($.FormEvents.afterHide, [n, t])
                            }), m.events.on($.ItemEvent.afterShow, function(t) {
                                i.layout.getCell(n).show(), i.events.fire($.FormEvents.afterShow, [n, t])
                            })
                    }
                    e = {
                        id: n,
                        width: o,
                        height: r,
                        padding: e,
                        css: l
                    };
                    return "gravity" in t && (e.gravity = t.gravity), e
                }, c.prototype._changeProps = function(t, e) {
                    var i, n = ["width", "height", "css", "padding"];
                    for (i in e) n.includes(i) && (this.layout.getCell(t).config[i] = e[i])
                }, c.prototype._addLayoutItems = function(t) {
                    var i = this;
                    return t.map(function(t) {
                        if (l.isBlock(t)) {
                            var e = {
                                width: "content",
                                height: "content"
                            };
                            return i._createLayoutConfig(t, e), e
                        }
                        return i._addLayoutItem(t)
                    })
                }, c.prototype._checkLayoutConfig = function(t, e) {
                    return S.isDefined(t.css) && (e.css = t.css), S.isDefined(t.title) && (e.header = t.title), S.isDefined(t.padding) && (e.padding = t.padding), S.isDefined(t.gravity) && (e.gravity = t.gravity), S.isDefined(t.width) && (e.width = t.width), S.isDefined(t.height) && (e.height = t.height), S.isDefined(t.align) && (e.align = t.align), e
                }, c.prototype._createLayoutConfig = function(t, e) {
                    e = this._checkLayoutConfig(t, e), S.isDefined(t.rows) ? e.rows = this._addLayoutItems(t.rows) : S.isDefined(t.cols) && (e.cols = this._addLayoutItems(t.cols))
                }, c.prototype._initUI = function(t) {
                    var e = this._attachments = {},
                        i = {
                            padding: "8px"
                        };
                    this.config.css += " dhx_form", this._createLayoutConfig(this.config, i);
                    var n, o = this.layout = new a.Layout(t, i);
                    for (n in e) o.getCell(n).attach(e[n])
                }, c.prototype._clear = function() {
                    for (var t in this._state = {}, this._attachments) {
                        var e = this._attachments[t].config.name;
                        "function" == typeof this._attachments[t].clear && (this._attachments[t].clear(), e ? this._state[e] = this._attachments[t].getValue() : this._state[t] = this._attachments[t].getValue())
                    }
                }, c.prototype._clearValidate = function() {
                    for (var t in this._attachments) "function" == typeof this._attachments[t].clearValidate && this._attachments[t].clearValidate()
                }, c.prototype._formContainerShow = function() {
                    this.config.hidden = !1, this.getRootView().node && (this.getRootView().node.el.style.display = "flex")
                }, c.prototype._formContainerHide = function() {
                    this.config.hidden = !0, this.getRootView().node && (this.getRootView().node.el.style.display = "none")
                }, c.prototype._send = function() {
                    for (var t in this._attachments) "function" == typeof this._attachments[t].send && this._attachments[t].send()
                }, c);

            function c(t, e) {
                var i = o.call(this, null, S.extend({
                    disabled: !1,
                    hidden: !1
                }, e)) || this;
                return i._state = {}, i._isValid = !0, i.events = new r.EventSystem(i), i.container = t, i._initUI(t), i.config.hidden && i.hide(!0), i.config.disabled && i.disable(), i.events.on($.FormEvents.afterShow, function() {
                    i._formContainerShow()
                }), i.events.on($.FormEvents.afterHide, function() {
                    Object.values(i._attachments).some(function(t) {
                        return !t.config.hidden
                    }) || i._formContainerHide()
                }), i
            }
            u.Form = e
        }).call(this, d(13))
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(t, e)
            }, function(t, e) {
                function i() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }),
            r = this && this.__spreadArrays || function() {
                for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
                for (var n = Array(t), o = 0, e = 0; e < i; e++)
                    for (var r = arguments[e], s = 0, a = r.length; s < a; s++, o++) n[o] = r[s];
                return n
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = i(28),
            l = i(3),
            c = i(0),
            u = i(1),
            d = i(11),
            h = i(10),
            f = i(7),
            p = i(6),
            o = (s = d.Label, o(_, s), _.prototype.setProperties = function(t) {
                if (t && !u.isEmptyObj(t) && this.events.fire(f.ItemEvent.beforeChangeProperties, [this.getProperties()])) {
                    for (var e in t) this._props.includes(e) && (this.config[e] = t[e], this._propsCalendar.includes(e) && (this.calendar.config[e] = t[e]));
                    this.events.fire(f.ItemEvent.afterChangeProperties, [this.getProperties()]), this.calendar.paint(), this.paint()
                }
            }, _.prototype.getProperties = function() {
                var t, e = {};
                for (t in this.config) this._props.includes(t) && (e[t] = this.config[t]);
                return e
            }, _.prototype.show = function() {
                var t = this.config,
                    e = t.value;
                t.hidden && this.events.fire(f.ItemEvent.beforeShow, [e]) && (this.config.hidden = !1, this.events.fire(f.ItemEvent.afterShow, [e]))
            }, _.prototype.hide = function(t) {
                var e = this.config,
                    i = e.value;
                e.hidden && !t || !this.events.fire(f.ItemEvent.beforeHide, [i, t]) || (this.config.hidden = !0, this.events.fire(f.ItemEvent.afterHide, [i, t]))
            }, _.prototype.isVisible = function() {
                return !this.config.hidden
            }, _.prototype.disable = function() {
                this.config.disabled = !0, this.paint()
            }, _.prototype.enable = function() {
                this.config.disabled = !1, this.paint()
            }, _.prototype.isDisabled = function() {
                return this.config.disabled
            }, _.prototype.validate = function(t, e) {
                void 0 === t && (t = !1);
                var i = void 0 === e ? this.getValue() : e,
                    e = "Date" === this.config.valueFormat ? i instanceof Date : a.stringToDate(i, this.calendar.config.dateFormat, !0);
                if (t || this.events.fire(f.ItemEvent.beforeValidate, [i])) return this._isValid = this.config.validation ? this.config.validation(i) : !!e, t || this.events.fire(f.ItemEvent.afterValidate, [i, this._isValid]), this._isValid
            }, _.prototype.clearValidate = function() {
                this.config.$validationStatus = f.ValidationStatus.pre, this.paint()
            }, _.prototype.setValue = function(t) {
                void 0 !== t && t !== this.config.value && (this.calendar.setValue(t), p.isVerify(this.config) && this.validate())
            }, _.prototype.getValue = function(t) {
                var e = this.config,
                    i = e.value,
                    e = e.valueFormat;
                return (i instanceof Date || !t || "" === i) && (i instanceof Date || "Date" !== e || "" === i) ? i || "" : a.stringToDate(i, this.calendar.config.dateFormat) || ""
            }, _.prototype.focus = function() {
                var t = this;
                c.awaitRedraw().then(function() {
                    t.getRootView().refs.input.el.focus()
                })
            }, _.prototype.clear = function() {
                "" !== this.config.value && (this.config.value = "", this.calendar.clear())
            }, _.prototype.getWidget = function() {
                return this.calendar
            }, _.prototype._initView = function(t) {
                var e, i = this;
                if (u.isEmptyObj(t)) throw new Error("Check the configuration is correct");
                for (e in this.calendar && this.calendar.destructor(), this._popup && this._popup.destructor(), this.config = {
                        type: t.type,
                        id: t.id,
                        name: t.name,
                        disabled: !1,
                        editable: !1,
                        hidden: !1,
                        value: "",
                        mode: "calendar",
                        mark: void 0,
                        disabledDates: void 0,
                        weekStart: "sunday",
                        weekNumbers: !1,
                        timePicker: !1,
                        dateFormat: "%d/%m/%y",
                        timeFormat: 24,
                        thisMonthOnly: !1,
                        valueFormat: "string",
                        required: !1,
                        validation: void 0,
                        icon: "",
                        placeholder: "",
                        label: "",
                        labelWidth: "",
                        labelPosition: "top",
                        hiddenLabel: !1,
                        helpMessage: "",
                        preMessage: "",
                        successMessage: "",
                        errorMessage: "",
                        width: "content",
                        height: "content",
                        padding: 0
                    }, t) "id" !== e && "type" !== e && "name" !== e && (this.config[e] = t[e]);
                this._popup = new h.Popup({
                    css: "dhx_widget--border-shadow"
                }), this.calendar = new a.Calendar(null, p.widgetConfig(t)), this._popup.attach(this.calendar), this.config.hidden && c.awaitRedraw().then(function() {
                    i.hide(!0)
                })
            }, _.prototype._initHandlers = function() {
                var e = this;
                this.calendar.events.on(a.CalendarEvents.change, function() {
                    var t = e.config.value = e.calendar.getValue("Date" === e.config.valueFormat);
                    e.events.fire(f.ItemEvent.change, [t]), e._popup.hide(), e.paint()
                }), this.events.on(f.ItemEvent.afterValidate, function() {
                    e.config.$validationStatus = e._isValid ? f.ValidationStatus.success : f.ValidationStatus.error, e.paint()
                }), this._popup.events.on(h.PopupEvents.afterHide, function() {
                    return e.config.value && p.isVerify(e.config) && e.validate()
                })
            }, _.prototype._getHandlers = function() {
                var e = this;
                return {
                    onblur: function() {
                        "" !== e.config.value && (e.validate(!0), e.config.$validationStatus = e._isValid ? f.ValidationStatus.success : f.ValidationStatus.error, e.paint())
                    },
                    onfocus: function() {
                        var t;
                        e._popup.isVisible() || ("" !== e.config.value && e.clearValidate(), t = e.getRootView().refs.input.el, e._popup.show(t))
                    },
                    oninput: function(t) {
                        t = t.target.value;
                        e.events.fire(f.ItemEvent.input, [t])
                    },
                    onchange: function(t) {
                        t = t.target.value;
                        e.config.editable && a.stringToDate(t, e.calendar.config.dateFormat, !0) ? e.setValue(t) : ("" === t && e.clear(), p.isVerify(e.config) && e.validate(), e.paint())
                    },
                    onkeyup: function(t) {
                        13 === t.keyCode && (e._popup.isVisible() && e._popup.hide(), e.getRootView().refs.input.el.blur())
                    },
                    onkeydown: function(t) {
                        "Tab" === t.key && e._popup.hide()
                    }
                }
            }, _.prototype._draw = function() {
                var t = this.config,
                    e = t.icon,
                    i = t.required,
                    n = t.disabled,
                    o = t.placeholder,
                    r = t.name,
                    s = t.id,
                    a = t.editable,
                    t = this.config.value instanceof Date ? this.calendar.getValue() : this.config.value;
                return c.el("div.dhx_form-group", {
                    class: p.getFormItemCss(this.config, p.isVerify(this.config))
                }, [this._drawLabel(), c.el(".dhx_input__wrapper", [c.el("div.dhx_input__container", {}, [c.el(".dhx_input__icon", {
                    class: e || "dxi dxi-calendar-today"
                }), c.el("input.dhx_input.dhx_input--icon-padding", {
                    _key: this._uid,
                    value: t,
                    type: "text",
                    _ref: "input",
                    required: i,
                    disabled: n,
                    placeholder: o || "",
                    name: r || "",
                    id: s || this._uid,
                    onfocus: this._handlers.onfocus,
                    oninput: this._handlers.oninput,
                    onchange: this._handlers.onchange,
                    onkeyup: this._handlers.onkeyup,
                    onkeydown: this._handlers.onkeydown,
                    onblur: this._handlers.onblur,
                    autocomplete: "off",
                    readOnly: !a
                })]), p.getValidationMessage(this.config) && c.el("span.dhx_input__caption", {}, p.getValidationMessage(this.config))])])
            }, _);

        function _(t, e) {
            var i = s.call(this, null, e) || this;
            i.events = new l.EventSystem, i._isValid = !0, i._propsItem = ["required", "validation", "valueFormat", "icon", "placeholder", "editable", "label", "labelWidth", "labelPosition", "hiddenLabel", "helpMessage", "preMessage", "successMessage", "errorMessage"], i._propsCalendar = ["mode", "mark", "disabledDates", "weekStart", "weekNumbers", "timePicker", "dateFormat", "timeFormat", "thisMonthOnly"], i._props = r(p.baseProps, i._propsItem, i._propsCalendar), i._initView(e), i._initHandlers();
            return i.mount(t, c.create({
                render: function() {
                    return i._draw()
                }
            })), i
        }
        e.DatePicker = o
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(t, e)
            }, function(t, e) {
                function i() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }),
            r = this && this.__assign || function() {
                return (r = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            },
            s = this && this.__spreadArrays || function() {
                for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
                for (var n = Array(t), o = 0, e = 0; e < i; e++)
                    for (var r = arguments[e], s = 0, a = r.length; s < a; s++, o++) n[o] = r[s];
                return n
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a, f = i(0),
            l = i(4),
            c = i(7),
            u = i(3),
            d = i(1),
            h = i(6),
            o = (a = l.View, o(p, a), p.prototype.setProperties = function(t) {
                if (t && !d.isEmptyObj(t) && this.events.fire(c.ItemEvent.beforeChangeProperties, [this.getProperties()])) {
                    for (var e in t) this._props.includes(e) && (this.config[e] = t[e]);
                    this.config.text = this.config.text || this.config.value, this.events.fire(c.ItemEvent.afterChangeProperties, [this.getProperties()]), this.paint()
                }
            }, p.prototype.getProperties = function() {
                var t, e = {};
                for (t in this.config) this._props.includes(t) && (e[t] = this.config[t]);
                return e
            }, p.prototype.show = function() {
                var t = this.config,
                    e = t.text;
                t.hidden && this.events.fire(c.ItemEvent.beforeShow, [e]) && (this.config.hidden = !1, this.events.fire(c.ItemEvent.afterShow, [e]))
            }, p.prototype.hide = function(t) {
                var e = this.config,
                    i = e.text;
                e.hidden && !t || !this.events.fire(c.ItemEvent.beforeHide, [i, t]) || (this.config.hidden = !0, this.events.fire(c.ItemEvent.afterHide, [i, t]))
            }, p.prototype.isVisible = function() {
                return !this.config.hidden
            }, p.prototype.disable = function() {
                this.config.disabled = !0, this.paint()
            }, p.prototype.enable = function() {
                this.config.disabled = !1, this.paint()
            }, p.prototype.isDisabled = function() {
                return this.config.disabled
            }, p.prototype._draw = function() {
                var t = this.config,
                    e = t.color,
                    i = t.size,
                    n = t.view,
                    o = t.full,
                    r = t.loading,
                    s = t.circle,
                    a = t.icon,
                    l = t.text,
                    c = t.disabled,
                    u = t.submit,
                    d = t.id,
                    h = {
                        danger: " dhx_button--color_danger",
                        secondary: " dhx_button--color_secondary",
                        primary: " dhx_button--color_primary",
                        success: " dhx_button--color_success"
                    } [e] || " dhx_button--color_primary",
                    t = {
                        small: " dhx_button--size_small",
                        medium: " dhx_button--size_medium"
                    } [i] || " dhx_button--size_medium",
                    e = {
                        flat: " dhx_button--view_flat",
                        link: " dhx_button--view_link"
                    } [n] || " dhx_button--view_flat",
                    i = o ? " dhx_button--width_full" : "",
                    n = s ? " dhx_button--circle" : "",
                    o = r ? " dhx_button--loading" : "",
                    s = a && !l ? " dhx_button--icon" : "";
                return f.el("button", {
                    disabled: c,
                    id: d,
                    onclick: this._handlers.onclick,
                    type: u ? "submit" : "button",
                    class: "dhx_button" + h + t + e + i + n + o + s
                }, [a && f.el("span.dhx_button__icon", {
                    class: a
                }), l && f.el("span.dhx_button__text", l), r && f.el("span.dhx_button__loading", [f.el("span.dhx_button__loading-icon.dxi.dxi-loading")])])
            }, p);

        function p(t, e) {
            var i = a.call(this, t, r({
                disabled: !1,
                hidden: !1,
                submit: !1,
                full: !1,
                circle: !1,
                loading: !1,
                view: "flat",
                size: "medium",
                color: "primary",
                width: "content",
                height: "content",
                padding: 0,
                url: "",
                text: "",
                icon: ""
            }, e)) || this;
            i._propsItem = ["submit", "url", "text", "icon", "view", "size", "color", "full", "circle", "loading"], i._props = s(h.baseProps, i._propsItem), i.config.text = i.config.text || i.config.value || "", i.events = new u.EventSystem, i._handlers = {
                onclick: function(t) {
                    return i.events.fire(c.ItemEvent.click, [t])
                }
            }, i.config.hidden && f.awaitRedraw().then(function() {
                i.hide(!0)
            });
            return i.mount(t, f.create({
                render: function() {
                    return i._draw()
                }
            })), i
        }
        e.Button = o
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(t, e)
            }, function(t, e) {
                function i() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }),
            r = this && this.__assign || function() {
                return (r = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            },
            s = this && this.__spreadArrays || function() {
                for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
                for (var n = Array(t), o = 0, e = 0; e < i; e++)
                    for (var r = arguments[e], s = 0, a = r.length; s < a; s++, o++) n[o] = r[s];
                return n
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a, l = i(0),
            c = i(14),
            u = i(3),
            d = i(80),
            h = i(11),
            f = i(7),
            p = i(1),
            _ = i(6),
            g = i(10),
            o = (a = h.Label, o(v, a), v.prototype.destructor = function() {
                this._buttons.forEach(function(t) {
                    return t.destructor()
                }), this.events.clear(), this.unmount()
            }, v.prototype.setProperties = function(e, t) {
                if (void 0 !== e && this.events.fire(f.ItemEvent.beforeChangeProperties, [this.getProperties()])) {
                    if ("object" == typeof e && !p.isEmptyObj(e)) {
                        for (var i in e) this._props.includes(i) && (this.config[i] = e[i]);
                        e.hasOwnProperty("options") && (this._initView(this.config), this._initHandlers())
                    }
                    var n;
                    "string" != typeof e || !t || p.isEmptyObj(t) || (n = this._buttons.find(function(t) {
                        return t.config.id === e
                    })) && n.setProperties(t, !0), this.events.fire(f.ItemEvent.afterChangeProperties, [this.getProperties()]), this.paint()
                }
            }, v.prototype.getProperties = function(e) {
                if (void 0 !== e) return this._buttons.find(function(t) {
                    return t.config.id === e
                }).getProperties();
                var t, i = {};
                for (t in this.config) this._props.includes(t) && (i[t] = this.config[t]);
                return i
            }, v.prototype.getValue = function(e) {
                if (void 0 === e) {
                    var i = {};
                    return this._buttons.forEach(function(t) {
                        i[t.config.id] = t.getValue()
                    }), i
                }
                var t = this._buttons.find(function(t) {
                    return t.config.id === e
                });
                if (e && t) return t.getValue()
            }, v.prototype.setValue = function(t) {
                if (void 0 !== t && !p.isEmptyObj(t)) {
                    for (var n = !1, o = this, e = 0, i = Object.entries(t); e < i.length; e++) {
                        var r = i[e];
                        ! function(e, t) {
                            var i = o._buttons.find(function(t) {
                                return t.config.id === e
                            });
                            i && (i.setValue(!!t, !0), n = !0)
                        }(r[0], r[1])
                    }
                    n && (this.events.fire(f.ItemEvent.change, [this.getValue()]), _.isVerify(this.config) && this.validate())
                }
            }, v.prototype.isChecked = function(e) {
                if (void 0 === e) {
                    var i = {};
                    return this._buttons.forEach(function(t) {
                        i[t.config.id] = t.isChecked()
                    }), i
                }
                var t = this._buttons.find(function(t) {
                    return t.config.id === e
                });
                if (e && t) return t.isChecked()
            }, v.prototype.focus = function(e) {
                var i = this;
                l.awaitRedraw().then(function() {
                    if (i._buttons.length) {
                        if (!e) return i._buttons[0].focus();
                        var t = i._buttons.find(function(t) {
                            return t.config.id === e
                        });
                        t && t.focus()
                    }
                })
            }, v.prototype.show = function() {
                this.config.hidden && this.events.fire(f.ItemEvent.beforeShow, [this.getValue()]) && (this.config.hidden = !1, this.events.fire(f.ItemEvent.afterShow, [this.getValue()]))
            }, v.prototype.hide = function(t) {
                this.config.hidden && !t || !this.events.fire(f.ItemEvent.beforeHide, [this.getValue(), t]) || (this.config.hidden = !0, this.events.fire(f.ItemEvent.afterHide, [this.getValue(), t]))
            }, v.prototype.isVisible = function() {
                return !this.config.hidden
            }, v.prototype.disable = function() {
                this.config.disabled = !0, this.paint()
            }, v.prototype.enable = function() {
                this.config.disabled = !1, this.paint()
            }, v.prototype.isDisabled = function() {
                return this.config.disabled
            }, v.prototype.clear = function() {
                this._buttons.some(function(t) {
                    return t.isChecked()
                }) && (this._buttons.forEach(function(t) {
                    t.clear(!0)
                }), this.events.fire(f.ItemEvent.change, [this.getValue()]))
            }, v.prototype.validate = function(t) {
                var e = this;
                if (void 0 === t && (t = !1), t || this.events.fire(f.ItemEvent.beforeValidate, [this.getValue()])) return this.config.required && (this._isValid = this._buttons.some(function(t) {
                    return t.config.$required && !!t.config.checked
                })), t || (this._buttons.forEach(function(t) {
                    t.config.$validationStatus = e._isValid ? f.ValidationStatus.success : f.ValidationStatus.error
                }), this.config.$validationStatus = this._isValid ? f.ValidationStatus.success : f.ValidationStatus.error, this.events.fire(f.ItemEvent.afterValidate, [this.getValue(), this._isValid])), this._isValid
            }, v.prototype.clearValidate = function() {
                this.config.$validationStatus = f.ValidationStatus.pre, this._buttons.forEach(function(t) {
                    t.clearValidate()
                }), this.paint()
            }, v.prototype._initView = function(i) {
                var t, n = this;
                if (p.isEmptyObj(i) || !i.options || p.isEmptyObj(i.options)) throw new Error("Check the configuration is correct");
                for (t in this.layout && this.layout.destructor(), this._buttons.length && (this._buttons.forEach(function(t) {
                        t.destructor()
                    }), this._buttons = []), this.config = {
                        type: i.type,
                        id: i.id,
                        name: i.name,
                        disabled: !1,
                        hidden: !1,
                        options: {},
                        required: !1,
                        label: "",
                        labelWidth: "",
                        labelPosition: "top",
                        hiddenLabel: !1,
                        helpMessage: "",
                        preMessage: "",
                        successMessage: "",
                        errorMessage: "",
                        width: "content",
                        height: "content",
                        padding: 0
                    }, i) "id" !== t && "type" !== t && "name" !== t && (this.config[t] = i[t]);
                this.config.helpMessage && (this._helper = new g.Popup({
                    css: "dhx_tooltip dhx_tooltip--forced dhx_tooltip--light"
                }), this._helper.attachHTML(this.config.helpMessage)), this._handlers = {
                    showHelper: function(t) {
                        t.preventDefault(), t.stopPropagation(), n._helper.show(t.target)
                    },
                    cancelUnusefulClick: function(t) {
                        t.preventDefault()
                    }
                };
                var e = this.config.options.rows || this.config.options.cols;
                e.forEach(function(t) {
                    t.id = t.id || p.uid(), t.$group = !0
                }), this.layout = new c.Layout(null, this.config.options), e.forEach(function(t) {
                    var e = new d.Checkbox(null, r(r({}, t), {
                        disabled: i.disabled,
                        name: i.name,
                        $required: i.required
                    }));
                    n._buttons.push(e), n.layout.getCell(t.id).attach(e), e.events.on(f.ItemEvent.change, function() {
                        n.events.fire(f.ItemEvent.change, [n.getValue()]), _.isVerify(n.config) && n.validate()
                    })
                }), this.config.value && this.setValue(this.config.value), this.clearValidate(), this.config.hidden && l.awaitRedraw().then(function() {
                    n.hide(!0)
                })
            }, v.prototype._initHandlers = function() {
                var t = this;
                this.events.on(f.ItemEvent.change, function() {
                    t.config.value = t.getValue(), t.paint()
                }), this.events.on(f.ItemEvent.afterValidate, function() {
                    t.config.$validationStatus = t._isValid ? f.ValidationStatus.success : f.ValidationStatus.error, t.paint()
                })
            }, v.prototype._draw = function() {
                var t = this.config.hidden ? " dhx_form-group--hidden" : "",
                    e = this.config,
                    i = e.label,
                    n = e.labelWidth,
                    o = e.helpMessage,
                    e = e.required;
                return l.el("div.dhx_form-group.dhx_form-group--checkbox-group", {
                    class: _.getFormItemCss(this.config, _.isVerify(this.config)) + t
                }, [i || n || o || e ? this._drawLabel() : null, l.el("div.dhx_checkbox-group--container", {}, [this.layout && l.inject(this.layout.getRootView()), e && _.getValidationMessage(this.config) && l.el("span.dhx_input__caption", _.getValidationMessage(this.config))])])
            }, v);

        function v(t, e) {
            var i = a.call(this, null, e) || this;
            i.events = new u.EventSystem, i._buttons = [], i._isValid = !0, i._propsItem = ["required", "label", "labelWidth", "labelPosition", "hiddenLabel", "helpMessage", "preMessage", "successMessage", "errorMessage", "options"], i._props = s(_.baseProps, i._propsItem), i._initView(e), i._initHandlers();
            return i.mount(t, l.create({
                render: function() {
                    return i._draw()
                }
            })), i
        }
        e.CheckboxGroup = o
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(t, e)
            }, function(t, e) {
                function i() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }),
            r = this && this.__assign || function() {
                return (r = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            },
            s = this && this.__spreadArrays || function() {
                for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
                for (var n = Array(t), o = 0, e = 0; e < i; e++)
                    for (var r = arguments[e], s = 0, a = r.length; s < a; s++, o++) n[o] = r[s];
                return n
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a, l = i(0),
            c = i(1),
            u = i(14),
            d = i(10),
            h = i(3),
            f = i(189),
            p = i(6),
            _ = i(11),
            g = i(7),
            o = (a = _.Label, o(v, a), v.prototype.destructor = function() {
                this._buttons.forEach(function(t) {
                    return t.destructor()
                }), this.events.clear(), this.unmount()
            }, v.prototype.setProperties = function(e, t) {
                if (void 0 !== e && this.events.fire(g.ItemEvent.beforeChangeProperties, [this.getProperties()])) {
                    if ("object" == typeof e && !c.isEmptyObj(e)) {
                        for (var i in e) this._props.includes(i) && (this.config[i] = e[i]);
                        e.hasOwnProperty("options") && (this._initView(this.config), this._initHandlers())
                    }
                    var n;
                    "string" != typeof e || !t || c.isEmptyObj(t) || (n = this._buttons.find(function(t) {
                        return t.config.id === e
                    })) && n.setProperties(t), this.events.fire(g.ItemEvent.afterChangeProperties, [this.getProperties()]), this.paint()
                }
            }, v.prototype.getProperties = function(e) {
                if (void 0 !== e) return this._buttons.find(function(t) {
                    return t.config.id === e
                }).getProperties();
                var t, i = {};
                for (t in this.config) this._props.includes(t) && (i[t] = this.config[t]);
                return i
            }, v.prototype.getValue = function() {
                var e = this;
                return this._buttons.forEach(function(t) {
                    t.getValue() && (e.config.value = t.getValue() || "")
                }), this.config.value || ""
            }, v.prototype.setValue = function(t) {
                t !== this.config.value && (this._setValue(t), this.events.fire(g.ItemEvent.change, [t]), p.isVerify(this.config) && this.validate())
            }, v.prototype.focus = function(e) {
                var i = this;
                l.awaitRedraw().then(function() {
                    if (i._buttons.length) {
                        if (!e) return i._buttons[0].focus();
                        var t = i._buttons.find(function(t) {
                            return t.config.id === e
                        });
                        return t ? t.focus() : void 0
                    }
                })
            }, v.prototype.show = function() {
                this.config.hidden && this.events.fire(g.ItemEvent.beforeShow, [this.getValue()]) && (this.config.hidden = !1, this.events.fire(g.ItemEvent.afterShow, [this.getValue()]))
            }, v.prototype.hide = function(t) {
                this.config.hidden && !t || !this.events.fire(g.ItemEvent.beforeHide, [this.getValue(), t]) || (this.config.hidden = !0, this.events.fire(g.ItemEvent.afterHide, [this.getValue(), t]))
            }, v.prototype.isVisible = function() {
                return !this.config.hidden
            }, v.prototype.disable = function() {
                this.config.disabled = !0, this.paint()
            }, v.prototype.enable = function() {
                this.config.disabled = !1, this.paint()
            }, v.prototype.isDisabled = function() {
                return this.config.disabled
            }, v.prototype.clear = function() {
                "" !== this.config.value && (this._buttons.forEach(function(t) {
                    t.clear()
                }), this.config.value = "", this.events.fire(g.ItemEvent.change, [this.config.value]))
            }, v.prototype.validate = function(t) {
                var e = this;
                if (void 0 === t && (t = !1), t || this.events.fire(g.ItemEvent.beforeValidate, [this.getValue()])) return this.config.required && (this._isValid = this._buttons.some(function(t) {
                    return e.config.required && !!t.config.checked
                })), t || (this._buttons.forEach(function(t) {
                    t.config.$validationStatus = e._isValid ? g.ValidationStatus.success : g.ValidationStatus.error
                }), this.config.$validationStatus = this._isValid ? g.ValidationStatus.success : g.ValidationStatus.error, this.events.fire(g.ItemEvent.afterValidate, [this.getValue(), this._isValid])), this._isValid
            }, v.prototype.clearValidate = function() {
                this.config.$validationStatus = g.ValidationStatus.pre, this._buttons.map(function(t) {
                    t.clearValidate()
                }), this.paint()
            }, v.prototype._initView = function(i) {
                var t, n = this;
                if (c.isEmptyObj(i) || !i.options || c.isEmptyObj(i.options)) throw new Error("Check the configuration is correct");
                for (t in this.layout && this.layout.destructor(), this._buttons.length && (this._buttons.forEach(function(t) {
                        t.destructor()
                    }), this._buttons = []), this.config = {
                        type: i.type,
                        id: i.id,
                        name: i.name,
                        disabled: !1,
                        hidden: !1,
                        options: {},
                        required: !1,
                        label: "",
                        labelWidth: "",
                        labelPosition: "top",
                        hiddenLabel: !1,
                        helpMessage: "",
                        preMessage: "",
                        successMessage: "",
                        errorMessage: "",
                        width: "content",
                        height: "content",
                        padding: 0
                    }, i) "id" !== t && "type" !== t && "name" !== t && (this.config[t] = i[t]);
                this.config.hidden && l.awaitRedraw().then(function() {
                    n.hide(!0)
                });
                var e = this.config.options.rows || this.config.options.cols;
                e.map(function(t) {
                    t.id = t.id || c.uid()
                }), this.layout = new u.Layout(null, this.config.options), e.map(function(t) {
                    var e = new f.RadioButton(null, r(r({}, t), {
                        $disabled: i.disabled,
                        $name: i.name,
                        $required: i.required
                    }));
                    n._buttons.push(e), n.layout.getCell(t.id).attach(e), e.events.on(f.RadioButtonEvents.change, function() {
                        n._buttons.map(function(t) {
                            t.config.id !== e.config.id && t.setValue(!1)
                        }), n.events.fire(g.ItemEvent.change, [n.getValue()]), p.isVerify(n.config) && n.validate()
                    })
                })
            }, v.prototype._initHandlers = function() {
                var t = this;
                this.events.on(g.ItemEvent.change, function() {
                    t.config.value = t.getValue(), t.paint()
                }), this.events.on(g.ItemEvent.afterValidate, function() {
                    t.config.$validationStatus = t._isValid ? g.ValidationStatus.success : g.ValidationStatus.error, t.paint()
                })
            }, v.prototype._draw = function() {
                var t = this.config,
                    e = t.label,
                    i = t.labelWidth,
                    n = t.helpMessage,
                    o = t.required,
                    t = t.hidden ? " dhx_form-group--hidden" : "";
                return l.el("div.dhx_form-group.dhx_form-group--radio-group", {
                    class: p.getFormItemCss(this.config, p.isVerify(this.config)) + t
                }, [e || i || n || o ? this._drawLabel() : null, l.el("div.dhx_radio-group--container", {}, [this.layout && l.inject(this.layout.getRootView()), o && p.getValidationMessage(this.config) && l.el("span.dhx_input__caption", p.getValidationMessage(this.config))])])
            }, v.prototype._setValue = function(e) {
                void 0 !== e && -1 !== this._buttons.findIndex(function(t) {
                    return t.config.value === e
                }) && this._buttons.forEach(function(t) {
                    e === t.config.value ? t.setValue(!0) : t.setValue(!1)
                })
            }, v);

        function v(t, e) {
            var i = a.call(this, null, e) || this;
            i.events = new h.EventSystem, i._buttons = [], i._isValid = !0, i._propsItem = ["required", "label", "labelWidth", "labelPosition", "hiddenLabel", "helpMessage", "preMessage", "successMessage", "errorMessage", "options"], i._props = s(p.baseProps, i._propsItem), i._initView(e), i._initHandlers(), i.config.value && i._setValue(i.config.value), i.clearValidate(), i.config.helpMessage && (i._helper = new d.Popup({
                css: "dhx_tooltip dhx_tooltip--forced dhx_tooltip--light"
            }), i._helper.attachHTML(i.config.helpMessage)), i._handlers = {
                showHelper: function(t) {
                    t.preventDefault(), t.stopPropagation(), i._helper.show(t.target)
                },
                cancelUnusefulClick: function(t) {
                    t.preventDefault()
                }
            };
            return i.mount(t, l.create({
                render: function() {
                    return i._draw()
                }
            })), i
        }
        e.RadioGroup = o
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(t, e)
            }, function(t, e) {
                function i() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }),
            r = this && this.__assign || function() {
                return (r = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            },
            s = this && this.__spreadArrays || function() {
                for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
                for (var n = Array(t), o = 0, e = 0; e < i; e++)
                    for (var r = arguments[e], s = 0, a = r.length; s < a; s++, o++) n[o] = r[s];
                return n
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a, l = i(1),
            c = i(0),
            u = i(3),
            d = i(4),
            h = i(6),
            f = i(7);
        (a = e.RadioButtonEvents || (e.RadioButtonEvents = {})).change = "change";
        var p, o = (p = d.View, o(_, p), _.prototype.destructor = function() {
            this.events.clear(), this.unmount()
        }, _.prototype.setProperties = function(t) {
            if (t && !l.isEmptyObj(t)) {
                for (var e in t) this._props.includes(e) && (this.config[e] = t[e]);
                this.paint()
            }
        }, _.prototype.getProperties = function() {
            var t, e = {};
            for (t in this.config) this._props.includes(t) && (e[t] = this.config[t]);
            return e
        }, _.prototype.getValue = function() {
            if (this.config.checked) return this.config.value
        }, _.prototype.setValue = function(t) {
            this.config.checked = t, this.paint()
        }, _.prototype.focus = function() {
            var t = this;
            c.awaitRedraw().then(function() {
                t.getRootView().refs.input.el.focus()
            })
        }, _.prototype.disable = function() {
            this.config.$disabled = !0, this.paint()
        }, _.prototype.enable = function() {
            this.config.$disabled = !1, this.paint()
        }, _.prototype.isDisabled = function() {
            return this.config.$disabled
        }, _.prototype.clear = function() {
            this.config.checked = !1, this.paint()
        }, _.prototype.validate = function() {
            var t = !1;
            return this.config.checked && (t = !0), this.config.$validationStatus = t ? f.ValidationStatus.success : f.ValidationStatus.error, this.paint(), t
        }, _.prototype.clearValidate = function() {
            this.config.$validationStatus = f.ValidationStatus.pre, this.paint()
        }, _.prototype._draw = function() {
            var t = this.config,
                e = t.id,
                i = t.value,
                n = t.checked,
                o = t.$disabled,
                r = t.$name,
                s = t.$required,
                t = t.text;
            return c.el("label.dhx_radiobutton.dhx_form-group", {
                class: h.getFormItemCss(this.config, !!s)
            }, [c.el("input.dhx_radiobutton__input", {
                type: "radio",
                id: e,
                value: i || "",
                name: r || "",
                disabled: o,
                checked: n,
                onchange: this._handlers.onchange,
                required: s,
                _ref: "input"
            }), c.el("span.dhx_radiobutton__visual-input"), c.el("span.dhx_text", [t])])
        }, _);

        function _(t, e) {
            void 0 === e && (e = {});
            var i = p.call(this, t, r({
                text: "",
                width: "content",
                height: "content",
                padding: 0
            }, e)) || this;
            i._propsItem = ["text"], i._props = s(h.baseProps, i._propsItem), i._handlers = {
                onchange: function(t) {
                    i.config.checked = t.target.checked, i.events.fire(a.change, [t.target.checked])
                }
            }, i.events = new u.EventSystem;
            return i.mount(t, c.create({
                render: function() {
                    return i._draw()
                }
            })), i
        }
        e.RadioButton = o
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(t, e)
            }, function(t, e) {
                function i() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }),
            r = this && this.__spreadArrays || function() {
                for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
                for (var n = Array(t), o = 0, e = 0; e < i; e++)
                    for (var r = arguments[e], s = 0, a = r.length; s < a; s++, o++) n[o] = r[s];
                return n
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, l = i(0),
            a = i(1),
            c = i(11),
            u = i(6),
            d = i(3),
            h = i(7),
            o = (s = c.Label, o(f, s), f.prototype.setProperties = function(t) {
                if (t && !a.isEmptyObj(t) && this.events.fire(h.ItemEvent.beforeChangeProperties, [this.getProperties()])) {
                    for (var e in t) this._props.includes(e) && (this.config[e] = t[e]);
                    this.events.fire(h.ItemEvent.afterChangeProperties, [this.getProperties()]), this.paint()
                }
            }, f.prototype.getProperties = function() {
                var t, e = {};
                for (t in this.config) this._props.includes(t) && (e[t] = this.config[t]);
                return e
            }, f.prototype.show = function() {
                var t = this.config,
                    e = t.value;
                t.hidden && this.events.fire(h.ItemEvent.beforeShow, [e]) && (this.config.hidden = !1, this.events.fire(h.ItemEvent.afterShow, [e]))
            }, f.prototype.hide = function(t) {
                var e = this.config,
                    i = e.value;
                e.hidden && !t || !this.events.fire(h.ItemEvent.beforeHide, [i, t]) || (this.config.hidden = !0, this.events.fire(h.ItemEvent.afterHide, [i, t]))
            }, f.prototype.isVisible = function() {
                return !this.config.hidden
            }, f.prototype.disable = function() {
                this.config.disabled = !0, this.paint()
            }, f.prototype.enable = function() {
                this.config.disabled = !1, this.paint()
            }, f.prototype.isDisabled = function() {
                return this.config.disabled
            }, f.prototype.validate = function(t) {
                void 0 === t && (t = !1);
                var e = this.config,
                    i = e.value,
                    e = e.validation;
                if (t || this.events.fire(h.ItemEvent.beforeValidate, [i])) return this._isValid = e ? this.config.validation(i) : void 0 !== i, t || this.events.fire(h.ItemEvent.afterValidate, [i, this._isValid]), this._isValid
            }, f.prototype.clearValidate = function() {
                this.config.$validationStatus = h.ValidationStatus.pre, this.paint()
            }, f.prototype.clear = function() {
                this.config.value !== this.config.options[0].value && (this.config.value = this.config.options[0].value, this.events.fire(h.ItemEvent.change, [this.getValue()]))
            }, f.prototype.setValue = function(e) {
                void 0 !== e && e !== this.config.value && -1 !== this.config.options.findIndex(function(t) {
                    return t.value === e
                }) && (this.config.value = e, this.events.fire(h.ItemEvent.change, [e]), u.isVerify(this.config) && this.validate())
            }, f.prototype.focus = function() {
                var t = this;
                l.awaitRedraw().then(function() {
                    t.getRootView().refs.select.el.focus()
                })
            }, f.prototype.getValue = function() {
                return this.config.value
            }, f.prototype.setOptions = function(t) {
                if (!t || !t.length) throw new Error("Function argument cannot be empty, for more info check documentation https://docs.dhtmlx.com/suite/form__select.html#addingselect");
                this._checkOptions(t), this.config.options = r(t), this.config.value = this.config.options[0].value, this.events.fire(h.ItemEvent.changeOptions, [r(t)]), this.paint()
            }, f.prototype.getOptions = function() {
                return this.config.options
            }, f.prototype._initView = function(t) {
                var e, i = this;
                if (a.isEmptyObj(t)) throw new Error("Check the configuration is correct");
                for (e in this._checkOptions(t.options), this.config = {
                        type: t.type,
                        id: t.id,
                        name: t.name,
                        disabled: !1,
                        hidden: !1,
                        validation: void 0,
                        icon: "",
                        label: "",
                        labelWidth: "",
                        labelPosition: "top",
                        hiddenLabel: !1,
                        helpMessage: "",
                        preMessage: "",
                        successMessage: "",
                        errorMessage: "",
                        width: "content",
                        height: "content",
                        padding: 0,
                        options: t.options,
                        value: t.options[0].value
                    }, t) "id" !== e && "type" !== e && "name" !== e && (this.config[e] = t[e]);
                this.config.hidden && l.awaitRedraw().then(function() {
                    i.hide(!0)
                }), this.paint()
            }, f.prototype._initHandlers = function() {
                var t = this;
                this.events.on(h.ItemEvent.afterValidate, function() {
                    t.config.$validationStatus = t._isValid ? h.ValidationStatus.success : h.ValidationStatus.error, t.paint()
                }), this.events.on(h.ItemEvent.changeOptions, function() {
                    t.events.fire(h.ItemEvent.change, [t.getValue()]), u.isVerify(t.config) && t.validate()
                }), this.events.on(h.ItemEvent.change, function() {
                    return t.paint()
                })
            }, f.prototype._getHandlers = function() {
                var i = this;
                return {
                    onchange: function(e) {
                        var t = i.config.options.map(function(t) {
                            return t.value
                        }).find(function(t) {
                            return t == e.target.value
                        });
                        i.config.value = t, i.events.fire(h.ItemEvent.change, [t]), u.isVerify(i.config) && i.validate()
                    }
                }
            }, f.prototype._draw = function() {
                var t = this.config,
                    e = t.id,
                    i = t.options,
                    n = t.icon,
                    o = t.value,
                    r = t.validation,
                    s = t.label,
                    a = t.labelWidth,
                    t = t.helpMessage;
                return l.el(".dhx_form-group", {
                    class: u.getFormItemCss(this.config, Boolean(r))
                }, [(s || a || t) && this._drawLabel(), l.el(".dhx_input__wrapper", {}, [l.el("div.dhx_input__container", {}, [l.el(".dhx_input__icon", {
                    class: n || "dxi dxi-menu-down"
                }), l.el("select", {
                    id: e,
                    class: "dhx_select dhx_input",
                    onchange: this._handlers.onchange,
                    _ref: "select"
                }, i.length && i.map(function(t) {
                    return l.el("option", {
                        value: t.value,
                        disabled: t.disabled,
                        selected: o === t.value
                    }, t.content)
                }))]), u.getValidationMessage(this.config) && l.el("span.dhx_input__caption", u.getValidationMessage(this.config))])])
            }, f.prototype._checkOptions = function(t) {
                if (0 === t.length) throw new Error("Property options* cannot be empty, for more info check documentation https://docs.dhtmlx.com/suite/form__select.html#addingselect");
                t.forEach(function(t) {
                    if (!t.hasOwnProperty("value") || !t.hasOwnProperty("content")) throw new Error("The object must contain two required properties value and content, for more info check documentation https://docs.dhtmlx.com/suite/form__select.html#addingselect")
                })
            }, f);

        function f(t, e) {
            var i = s.call(this, null, e) || this;
            return i.events = new d.EventSystem, i._isValid = !0, i._propsItem = ["validation", "icon", "label", "labelWidth", "labelPosition", "hiddenLabel", "helpMessage", "preMessage", "successMessage", "errorMessage"], i._props = r(u.baseProps, i._propsItem), i._initView(e), i._initHandlers(), i
        }
        e.Select = o
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(t, e)
            }, function(t, e) {
                function i() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }),
            r = this && this.__spreadArrays || function() {
                for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
                for (var n = Array(t), o = 0, e = 0; e < i; e++)
                    for (var r = arguments[e], s = 0, a = r.length; s < a; s++, o++) n[o] = r[s];
                return n
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, u = i(0),
            d = i(6),
            a = i(52),
            l = i(7),
            h = i(1),
            o = (s = a.Input, o(c, s), c.prototype.setValue = function(t) {
                void 0 !== t && this.config.value !== t && (this.config.value = t, this.events.fire(l.ItemEvent.change, [this.getValue()]), d.isVerify(this.config) && this.validate())
            }, c.prototype.getValue = function() {
                return void 0 === this.config.value ? "" : String(this.config.value)
            }, c.prototype.focus = function() {
                var t = this;
                u.awaitRedraw().then(function() {
                    t.getRootView().refs.textarea.el.focus()
                })
            }, c.prototype.setProperties = function(t) {
                if (t && !h.isEmptyObj(t) && this.events.fire(l.ItemEvent.beforeChangeProperties, [this.getProperties()])) {
                    for (var e in t) this._props.includes(e) && (this.config[e] = t[e]);
                    this.events.fire(l.ItemEvent.afterChangeProperties, [this.getProperties()]), this.paint()
                }
            }, c.prototype.getProperties = function() {
                var t, e = {};
                for (t in this.config) this._props.includes(t) && (e[t] = this.config[t]);
                return e
            }, c.prototype._initView = function(t) {
                var e, i = this;
                if (h.isEmptyObj(t)) throw new Error("Check the configuration is correct");
                for (e in this.config = {
                        type: t.type,
                        id: t.id,
                        name: t.name,
                        disabled: !1,
                        hidden: !1,
                        value: "",
                        required: !1,
                        validation: void 0,
                        maxlength: void 0,
                        minlength: void 0,
                        placeholder: "",
                        readOnly: !1,
                        label: "",
                        labelWidth: "",
                        labelPosition: "top",
                        hiddenLabel: !1,
                        helpMessage: "",
                        preMessage: "",
                        successMessage: "",
                        errorMessage: "",
                        width: "content",
                        height: "content",
                        padding: 0
                    }, t) "id" !== e && "type" !== e && "name" !== e && (this.config[e] = t[e]);
                this.config.hidden && u.awaitRedraw().then(function() {
                    i.hide(!0)
                }), this.paint()
            }, c.prototype._draw = function() {
                var t = this.config,
                    e = t.id,
                    i = t.value,
                    n = t.disabled,
                    o = t.name,
                    r = t.placeholder,
                    s = t.required,
                    a = t.resizable,
                    l = t.readOnly,
                    c = t.maxlength,
                    t = t.minlength;
                return u.el("div.dhx_form-group.dhx_form-group--textarea", {
                    class: d.getFormItemCss(this.config, d.isVerify(this.config))
                }, [this._drawLabel(), u.el(".dhx_input__wrapper", [u.el("textarea.dhx_input.dhx_input--textarea", {
                    type: "text",
                    id: e,
                    placeholder: r || "",
                    value: h.isDefined(i) ? i : "",
                    name: o || "",
                    disabled: n,
                    required: s,
                    readOnly: l,
                    maxlength: c,
                    minlength: t,
                    onblur: this._handlers.onblur,
                    oninput: this._handlers.oninput,
                    onchange: this._handlers.onchange,
                    onfocus: this._handlers.onfocus,
                    style: {
                        resize: a ? "both" : "none"
                    },
                    _ref: "textarea"
                }), d.getValidationMessage(this.config) && u.el("span.dhx_input__caption", {}, d.getValidationMessage(this.config))])])
            }, c);

        function c() {
            var t = null !== s && s.apply(this, arguments) || this;
            return t._propsItem = ["required", "validation", "placeholder", "readOnly", "maxlength", "minlength", "label", "labelWidth", "labelPosition", "hiddenLabel", "helpMessage", "preMessage", "successMessage", "errorMessage"], t._props = r(d.baseProps, t._propsItem), t
        }
        e.Textarea = o
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(t, e)
            }, function(t, e) {
                function i() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }),
            r = this && this.__spreadArrays || function() {
                for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
                for (var n = Array(t), o = 0, e = 0; e < i; e++)
                    for (var r = arguments[e], s = 0, a = r.length; s < a; s++, o++) n[o] = r[s];
                return n
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = i(0),
            l = i(1),
            c = i(6),
            u = i(52),
            d = i(7),
            o = (s = u.Input, o(h, s), h.prototype.setProperties = function(t) {
                if (t && !l.isEmptyObj(t) && this.events.fire(d.ItemEvent.beforeChangeProperties, [this.getProperties()])) {
                    for (var e in t) this._props.includes(e) && (this.config[e] = t[e]);
                    this.events.fire(d.ItemEvent.afterChangeProperties, [this.getProperties()]), this.paint()
                }
            }, h.prototype.getProperties = function() {
                var t, e = {};
                for (t in this.config) this._props.includes(t) && (e[t] = this.config[t]);
                return e
            }, h.prototype.focus = function() {
                var t = this;
                a.awaitRedraw().then(function() {
                    t.getRootView().refs.input.el.focus()
                })
            }, h.prototype._initView = function(t) {
                var e, i = this;
                if (l.isEmptyObj(t)) throw new Error("Check the configuration is correct");
                for (e in this.config = {
                        type: t.type,
                        id: t.id,
                        name: t.name,
                        disabled: !1,
                        hidden: !1,
                        value: "",
                        inputType: "text",
                        label: "",
                        labelWidth: "",
                        labelPosition: "top",
                        hiddenLabel: !1,
                        helpMessage: "",
                        width: "content",
                        height: "content",
                        padding: 0
                    }, t) "id" !== e && "type" !== e && "name" !== e && (this.config[e] = t[e]);
                this.config.hidden && a.awaitRedraw().then(function() {
                    i.hide(!0)
                }), this.paint()
            }, h.prototype._draw = function() {
                var t = this.config,
                    e = t.id,
                    i = t.value,
                    n = t.name,
                    t = t.inputType;
                return a.el("div.dhx_form-group.dhx_form-group--textinput", {
                    class: c.getFormItemCss(this.config)
                }, [this._drawLabel(), a.el(".dhx_input__wrapper", [a.el("input.dhx_input.dhx_input--textinput", {
                    type: ["text", "number", "password"].includes(t) ? t : "text",
                    readOnly: !0,
                    id: e,
                    value: l.isDefined(i) ? i : "",
                    name: n,
                    _ref: "input"
                })])])
            }, h);

        function h() {
            var t = null !== s && s.apply(this, arguments) || this;
            return t._propsItem = ["inputType", "label", "labelWidth", "labelPosition", "hiddenLabel", "helpMessage"], t._props = r(c.baseProps, t._propsItem), t
        }
        e.Text = o
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(t, e)
            }, function(t, e) {
                function i() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }),
            r = this && this.__spreadArrays || function() {
                for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
                for (var n = Array(t), o = 0, e = 0; e < i; e++)
                    for (var r = arguments[e], s = 0, a = r.length; s < a; s++, o++) n[o] = r[s];
                return n
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = i(0),
            l = i(1),
            c = i(6),
            u = i(29),
            d = i(3),
            h = i(11),
            f = i(7),
            o = (s = h.Label, o(p, s), p.prototype.setProperties = function(t) {
                if (t && !l.isEmptyObj(t) && this.events.fire(f.ItemEvent.beforeChangeProperties, [this.getProperties()])) {
                    for (var e in t) this._props.includes(e) && (this.config[e] = t[e]);
                    this._initView(this.config), this._initHandlers(), this.events.fire(f.ItemEvent.afterChangeProperties, [this.getProperties()]), this.combobox.paint(), this.paint()
                }
            }, p.prototype.getProperties = function() {
                var t, e = {};
                for (t in this.config) this._props.includes(t) && (e[t] = this.config[t]);
                return e
            }, p.prototype.show = function() {
                var t = this.config,
                    e = t.value;
                t.hidden && this.events.fire(f.ItemEvent.beforeShow, [e]) && (this.config.hidden = !1, this.events.fire(f.ItemEvent.afterShow, [e]))
            }, p.prototype.hide = function(t) {
                var e = this.config,
                    i = e.value;
                e.hidden && !t || !this.events.fire(f.ItemEvent.beforeHide, [i, t]) || (this.config.hidden = !0, this.events.fire(f.ItemEvent.afterHide, [i, t]))
            }, p.prototype.isVisible = function() {
                return !this.config.hidden
            }, p.prototype.disable = function() {
                this.config.disabled = !0, this.combobox.disable(), this.paint()
            }, p.prototype.enable = function() {
                this.config.disabled = !1, this.combobox.enable(), this.paint()
            }, p.prototype.isDisabled = function() {
                return this.config.disabled
            }, p.prototype.clear = function() {
                this.config.value && this.combobox.clear()
            }, p.prototype.getValue = function() {
                return this.config.multiselection ? this.combobox.getValue(!0) || [""] : this.combobox.getValue() || ""
            }, p.prototype.setValue = function(t) {
                void 0 !== t && t !== this.config.value && t && this.combobox.setValue(t)
            }, p.prototype.validate = function(t, e) {
                void 0 === t && (t = !1);
                e = void 0 === e ? this.getValue() : e;
                if (t || this.events.fire(f.ItemEvent.beforeValidate, [e])) return this._isValid = this.config.validation ? this.config.validation(e) : ("string" == typeof e || e instanceof Array) && this._exsistData(e), t || (this.config.$validationStatus = this._isValid ? f.ValidationStatus.success : f.ValidationStatus.error, this.config.required && this._validationStatus(), this.events.fire(f.ItemEvent.afterValidate, [e, this._isValid])), this._isValid
            }, p.prototype.clearValidate = function() {
                this.config.$validationStatus = f.ValidationStatus.pre, this._validationStatus(), this.paint()
            }, p.prototype.getWidget = function() {
                return this.combobox
            }, p.prototype.focus = function() {
                var t = this;
                a.awaitRedraw().then(function() {
                    t.combobox.focus()
                })
            }, p.prototype._initView = function(t) {
                var e = this;
                if (l.isEmptyObj(t)) throw new Error("Check the configuration is correct");
                this.combobox && this.combobox.destructor(), this.config = {
                    type: t.type,
                    id: t.id,
                    name: t.name,
                    disabled: !1,
                    hidden: !1,
                    value: "",
                    readOnly: !1,
                    template: void 0,
                    filter: void 0,
                    multiselection: !1,
                    selectAllButton: !1,
                    itemsCount: void 0,
                    itemHeight: 32,
                    virtual: !1,
                    listHeight: 224,
                    required: !1,
                    validation: void 0,
                    placeholder: "",
                    label: "",
                    labelWidth: "",
                    labelPosition: "top",
                    hiddenLabel: !1,
                    helpMessage: "",
                    preMessage: "",
                    successMessage: "",
                    errorMessage: "",
                    width: "content",
                    height: "content",
                    padding: 0
                };
                var i, n = {};
                for (i in t) "id" !== i && "type" !== i && "name" !== i && (this.config[i] = t[i], "validation" !== i && (n[i] = t[i]));
                this.combobox = new u.Combobox(null, n), this.config.hidden && a.awaitRedraw().then(function() {
                    e.hide(!0)
                }), this.paint()
            }, p.prototype._initHandlers = function() {
                var e = this;
                this.combobox.events.on(u.ComboboxEvents.change, function() {
                    var t = e.config.value = e.getValue();
                    e.events.fire(f.ItemEvent.change, [t]), c.isVerify(e.config) && e.validate(), e.paint()
                }), this.events.on(f.ItemEvent.afterValidate, function() {
                    e.config.$validationStatus = e._isValid ? f.ValidationStatus.success : f.ValidationStatus.error, e.paint()
                })
            }, p.prototype._validationStatus = function() {
                switch (this.config.$validationStatus) {
                    case f.ValidationStatus.success:
                        this.combobox.config.css = (this.config.css || "") + "dhx_form-group--state_success";
                        break;
                    case f.ValidationStatus.error:
                        this.combobox.config.css = (this.config.css || "") + "dhx_form-group--state_error";
                        break;
                    case f.ValidationStatus.pre:
                    default:
                        this.combobox.config.css = this.config.css || ""
                }
            }, p.prototype._getRootView = function() {
                return this.combobox.getRootView()
            }, p.prototype._draw = function() {
                var t = this.config,
                    e = t.labelWidth,
                    i = t.labelPosition,
                    t = t.$validationStatus;
                return a.el(".dhx_form-group", {}, [a.inject(this._getRootView()), a.el("div", {
                    style: {
                        "margin-left": e && "left" === i ? "calc(" + e + " + 16px)" : ""
                    },
                    class: 1 === t ? "dhx_form-group--state_error" : 2 === t ? "dhx_form-group--state_success" : ""
                }, [a.el("span.dhx_input__caption", c.getValidationMessage(this.config))])])
            }, p.prototype._exsistData = function(t) {
                var e = this;
                return t instanceof Array ? !!t.length && t.every(function(t) {
                    return e.combobox.data.exists(t)
                }) : "string" == typeof t ? this.combobox.data.exists(t) : void 0
            }, p);

        function p(t, e) {
            var i = s.call(this, null, e) || this;
            return i.events = new d.EventSystem, i._isValid = !0, i._propsItem = ["required", "validation", "placeholder", "label", "labelWidth", "labelPosition", "hiddenLabel", "helpMessage", "preMessage", "successMessage", "errorMessage", "readonly", "readOnly"], i._propsCombo = ["template", "filter", "multiselection", "selectAllButton", "itemsCount", "itemHeight", "virtual", "listHeight"], i._props = r(c.baseProps, i._propsItem, i._propsCombo), i._initView(e), i._initHandlers(), i
        }
        e.Combo = o
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(t, e)
            }, function(t, e) {
                function i() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }),
            r = this && this.__assign || function() {
                return (r = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            },
            s = this && this.__spreadArrays || function() {
                for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
                for (var n = Array(t), o = 0, e = 0; e < i; e++)
                    for (var r = arguments[e], s = 0, a = r.length; s < a; s++, o++) n[o] = r[s];
                return n
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a, l = i(0),
            c = i(1),
            u = i(40),
            d = i(3),
            h = i(11),
            f = i(7),
            p = i(6),
            o = (a = h.Label, o(_, a), _.prototype.setProperties = function(t) {
                if (t && !c.isEmptyObj(t) && this.events.fire(f.ItemEvent.beforeChangeProperties, [this.getProperties()])) {
                    for (var e in t) this._props.includes(e) && (this.config[e] = t[e]);
                    this._initView(this.config), this._initHandlers(), this.events.fire(f.ItemEvent.afterChangeProperties, [this.getProperties()]), this.slider.paint(), this.paint()
                }
            }, _.prototype.getProperties = function() {
                var t, e = {};
                for (t in this.config) this._props.includes(t) && (e[t] = this.config[t]);
                return e
            }, _.prototype.show = function() {
                var t = this.config,
                    e = t.value;
                t.hidden && this.events.fire(f.ItemEvent.beforeShow, [e]) && (this.config.hidden = !1, this.events.fire(f.ItemEvent.afterShow, [e]))
            }, _.prototype.hide = function(t) {
                var e = this.config,
                    i = e.value;
                e.hidden && !t || !this.events.fire(f.ItemEvent.beforeHide, [i, t]) || (this.config.hidden = !0, this.events.fire(f.ItemEvent.afterHide, [i, t]))
            }, _.prototype.isVisible = function() {
                return !this.config.hidden
            }, _.prototype.disable = function() {
                this.config.disabled = !0, this.slider.disable(), this.paint()
            }, _.prototype.enable = function() {
                this.config.disabled = !1, this.slider.enable(), this.paint()
            }, _.prototype.isDisabled = function() {
                return this.config.disabled
            }, _.prototype.clear = function() {
                var t = this.config,
                    e = t.value,
                    t = t.min;
                e[0] !== t && this.slider.setValue(t)
            }, _.prototype.getValue = function() {
                return this.slider.getValue()
            }, _.prototype.setValue = function(t) {
                void 0 !== t && t !== this.config.value && this.slider.setValue(t)
            }, _.prototype.getWidget = function() {
                return this.slider
            }, _.prototype._initView = function(t) {
                var e = this;
                if (c.isEmptyObj(t)) throw new Error("Check the configuration is correct");
                this.slider && this.slider.destructor();
                var i, n = {
                    type: t.type,
                    id: t.id,
                    name: t.name,
                    mode: "horizontal",
                    min: 0,
                    max: 100,
                    step: 1,
                    range: !1,
                    inverse: !1,
                    tick: void 0,
                    tickTemplate: void 0,
                    majorTick: void 0,
                    tooltip: !0,
                    disabled: !1,
                    hidden: !1,
                    label: "",
                    labelWidth: "",
                    labelPosition: "top",
                    hiddenLabel: !1,
                    helpMessage: "",
                    width: "content",
                    height: "content",
                    padding: 0
                };
                for (i in t) "id" !== i && "type" !== i && "name" !== i && (n[i] = t[i]);
                this.config = r({
                    type: this.config.type
                }, n), this.slider = new u.Slider(null, n), this.config.disabled && this.slider.disable(), this.config.value = this.slider.getValue(), this.config.hidden && l.awaitRedraw().then(function() {
                    e.hide(!0)
                })
            }, _.prototype._initHandlers = function() {
                var e = this;
                this.slider.events.on(u.SliderEvents.change, function() {
                    var t = e.config.value = e.slider.getValue();
                    e.events.fire(f.ItemEvent.change, [t]), e.paint()
                })
            }, _.prototype._getRootView = function() {
                return this.slider.paint(), this.slider.getRootView()
            }, _.prototype._drawSlider = function() {
                return l.el("div.dhx_form-group", {}, [l.inject(this._getRootView())])
            }, _);

        function _(t, e) {
            var i = a.call(this, null, e) || this;
            i.events = new d.EventSystem, i._propsItem = ["label", "labelWidth", "labelPosition", "hiddenLabel", "helpMessage"], i._propsCombo = ["min", "max", "step", "mode", "range", "inverse", "tooltip", "tick", "tickTemplate", "majorTick"], i._props = s(p.baseProps, i._propsItem, i._propsCombo), i._initView(e), i._initHandlers();
            return i.mount(t, l.create({
                render: function() {
                    return i._drawSlider()
                }
            })), i
        }
        e.SliderForm = o
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(t, e)
            }, function(t, e) {
                function i() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }),
            r = this && this.__assign || function() {
                return (r = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            },
            s = this && this.__spreadArrays || function() {
                for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
                for (var n = Array(t), o = 0, e = 0; e < i; e++)
                    for (var r = arguments[e], s = 0, a = r.length; s < a; s++, o++) n[o] = r[s];
                return n
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a, l = i(0),
            c = i(3),
            u = i(2),
            d = i(4),
            h = i(1),
            f = i(5),
            p = i(60),
            _ = i(10),
            g = i(6),
            v = i(81),
            m = i(7),
            o = (a = d.View, o(y, a), y.prototype.setProperties = function(t) {
                if (t && !h.isEmptyObj(t) && this.events.fire(m.ItemEvent.beforeChangeProperties, [this.getProperties()])) {
                    for (var e in t) this._props.includes(e) && (this.config[e] = t[e], this._propsSimpleVault.includes(e) && (this._uploader.config[e] = t[e]));
                    this.events.fire(m.ItemEvent.afterChangeProperties, [this.getProperties()]), this.paint()
                }
            }, y.prototype.getProperties = function() {
                var t, e = {};
                for (t in this.config) this._props.includes(t) && (e[t] = this.config[t]);
                return e
            }, y.prototype.show = function() {
                var t = this.config,
                    e = t.value;
                t.hidden && this.events.fire(m.ItemEvent.beforeShow, [e]) && (this.config.hidden = !1, this.events.fire(m.ItemEvent.afterShow, [e]))
            }, y.prototype.hide = function(t) {
                var e = this.config,
                    i = e.value;
                e.hidden && !t || !this.events.fire(m.ItemEvent.beforeHide, [i, t]) || (this.config.hidden = !0, this.events.fire(m.ItemEvent.afterHide, [i, t]))
            }, y.prototype.isVisible = function() {
                return !this.config.hidden
            }, y.prototype.disable = function() {
                this.config.disabled = !0, this.paint()
            }, y.prototype.enable = function() {
                this.config.disabled = !1, this.paint()
            }, y.prototype.isDisabled = function() {
                return this.config.disabled
            }, y.prototype.validate = function(t) {
                void 0 === t && (t = !1);
                var e = this.config,
                    i = e.required,
                    e = e.value;
                if (t || this.events.fire(m.ItemEvent.beforeValidate, [e])) return this._isValid = !i || 0 < this.data.getLength(), t || this.events.fire(m.ItemEvent.afterValidate, [e, this._isValid]), this._isValid
            }, y.prototype.clearValidate = function() {
                this.config.$validationStatus = m.ValidationStatus.pre, this.paint()
            }, y.prototype.clear = function() {
                0 !== this.getValue().length && (this.data.removeAll(), this.paint())
            }, y.prototype.getValue = function() {
                return this.data.serialize()
            }, y.prototype.selectFile = function() {
                this._uploader.selectFile()
            }, y.prototype.send = function(t) {
                g.isVerify(this.config) && !this.validate(!0) || this._uploader.send(t)
            }, y.prototype.setValue = function(t) {
                t.length && (this.data.parse(t), g.isVerify(this.config) && this.validate())
            }, y.prototype._initView = function(t) {
                var e, i = this;
                if (h.isEmptyObj(t)) throw new Error("Check the configuration is correct");
                for (e in this.config = {
                        type: t.type,
                        id: t.id,
                        name: t.name,
                        fieldName: t.fieldName || t.name || t.id,
                        params: void 0,
                        disabled: !1,
                        hidden: !1,
                        singleRequest: !1,
                        target: "",
                        value: [],
                        label: "",
                        labelWidth: "",
                        labelPosition: "top",
                        hiddenLabel: !1,
                        helpMessage: "",
                        preMessage: "",
                        successMessage: "",
                        errorMessage: "",
                        width: "content",
                        height: "content",
                        padding: 0
                    }, t) "id" !== e && "type" !== e && "name" !== e && (this.config[e] = t[e]);
                this.config.hidden && l.awaitRedraw().then(function() {
                    i.hide(!0)
                }), this.config.value.length && this.setValue(this.config.value), this.paint()
            }, y.prototype._initHandlers = function() {
                var n = this;
                this.data.events.on(m.ItemEvent.change, function(t, e) {
                    var i = n.config.value = n.getValue();
                    n.events.fire(m.ItemEvent.change, [i]), e && g.isVerify(n.config) && n.validate(), n.paint()
                }), this.events.on(m.ItemEvent.afterValidate, function() {
                    n.config.$validationStatus = n._isValid ? m.ValidationStatus.success : m.ValidationStatus.error, n.paint()
                }), this._uploader.events.on("beforeUploadFile", function(t) {
                    return n.events.fire(m.ItemEvent.beforeUploadFile, [t, n.config.value])
                }), this._uploader.events.on("uploadBegin", function(t) {
                    n.events.fire(m.ItemEvent.uploadBegin, [t, n.config.value])
                }), this._uploader.events.on("uploadComplete", function(t) {
                    n.events.fire(m.ItemEvent.uploadComplete, [t, n.config.value])
                }), this._uploader.events.on("uploadFail", function(t) {
                    n.events.fire(m.ItemEvent.uploadFail, [t, n.config.value])
                }), this._uploader.events.on("uploadFile", function(t, e) {
                    n.events.fire(m.ItemEvent.uploadFile, [t, n.config.value, e])
                }), this._uploader.events.on("uploadProgress", function(t) {
                    n.events.fire(m.ItemEvent.uploadProgress, [t, n.config.value])
                })
            }, y.prototype._draw = function() {
                var e = this;
                this.config.helpMessage && (this._helper || (this._helper = new _.Popup({
                    css: "dhx_tooltip dhx_tooltip--forced dhx_tooltip--light"
                })), this._helper.attachHTML(this.config.helpMessage));
                var t = this.data.getLength() ? l.el("ul.dhx_simplevault__files.dhx_simplevault-files", {
                        class: this.config.$vaultHeight ? "" : "dhx_simplevault-files__fixed"
                    }, this.data.map(function(t) {
                        return l.el("li.dhx_simplevault-files__item", [l.el("span.dhx_simplevault-files__item-name", t.file && t.file.name || t.name), l.el(".dhx_button.dhx_simplevault-files__delete.dhx_button--icon.dhx_button--view_link.dhx_button--size_small.dhx_button--color_secondary.dhx_button--circle", {
                            dhx_id: t.id,
                            onclick: e._handlers.remove
                        }, [l.el("span.dxi.dxi-delete-forever")])])
                    })) : null,
                    i = this.config,
                    n = i.id,
                    o = i.helpMessage,
                    r = i.disabled,
                    s = i.required,
                    i = g.getLabelStyle(this.config);
                return l.el(".dhx_form-group.dhx_form-group--simplevault", {
                    class: g.getFormItemCss(this.config, g.isVerify(this.config))
                }, [i && l.el("label.dhx_label", {
                    for: n || this._uid,
                    class: o ? "dhx_label--with-help" : "",
                    style: i.style,
                    onclick: this._handlers.add
                }, o ? [(i.label || s) && l.el("span.dhx_label__holder", i.label), l.el("span.dhx_label-help.dxi.dxi-help-circle-outline", {
                    tabindex: "0",
                    role: "button",
                    onclick: this._handlers.showHelper
                })] : i.label), l.el(".dhx_input__wrapper", [l.el("div", {
                    _hooks: {
                        didInsert: function(t) {
                            e._uploader.linkDropArea(t.el)
                        }
                    },
                    ondragover: this._handlers.ondragover,
                    class: "dhx_simplevault" + (this._dragover ? " dhx_simplevault--on-drag" : "")
                }, [l.el("div.dhx_simplevault-loader", [l.el("span.dhx_simplevault__icon.dxi.dxi-vault")]), l.el(".dhx_simplevault__drop-area", [l.el("input.dhx_simplevault__input", {
                    type: "file",
                    id: n,
                    disabled: r
                }), l.el("span.dhx_simplevault__icon.dxi.dxi-vault"), l.el("span.dhx_simplevault__title", [l.el("span", v.default.simpleVaultText), l.el("br"), l.el("label.dhx_simplevault__label", {
                    onclick: this._handlers.add,
                    for: n
                }, " " + v.default.simpleVaultLabel)])]), t]), g.getValidationMessage(this.config) && l.el("span.dhx_input__caption", {}, g.getValidationMessage(this.config))])])
            }, y);

        function y(t, e) {
            var o = a.call(this, t, e) || this;
            o._isValid = !0, o._propsItem = ["required", "label", "labelWidth", "labelPosition", "hiddenLabel", "helpMessage", "preMessage", "successMessage", "errorMessage"], o._propsSimpleVault = ["target", "singleRequest", "fieldName", "params"], o._props = s(g.baseProps, o._propsItem, o._propsSimpleVault), o.events = new c.EventSystem(o), o.data = new f.DataCollection, o._uploader = new p.Uploader(r(r({}, e), {
                autosend: !1,
                fieldName: e.fieldName || e.name || e.id
            }), o.data, o.data.events), o._initView(e), o._initHandlers(), o._handlers = {
                add: function(t) {
                    o.config.disabled || (t.preventDefault(), o._uploader.selectFile())
                },
                remove: function(t) {
                    o.config.disabled || (t = u.locate(t)) && o.data.remove(t)
                },
                ondragover: function(t) {
                    for (var e = 0, i = t.dataTransfer.types; e < i.length; e++) {
                        var n = i[e];
                        if ("Files" !== n && "application/x-moz-file" !== n) return
                    }
                    o._dragoverTimeout ? clearTimeout(o._dragoverTimeout) : o.paint(), o._dragover = !0, o._dragoverTimeout = setTimeout(function() {
                        o._dragover = !1, o._dragoverTimeout = null, o.paint()
                    }, 150)
                },
                showHelper: function(t) {
                    t.stopPropagation(), t.preventDefault(), o._helper.show(t.target)
                }
            };
            return o.mount(t, l.create({
                render: function() {
                    return o._draw()
                }
            })), o
        }
        e.SimpleVault = o
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(t, e)
            }, function(t, e) {
                function i() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }),
            r = this && this.__spreadArrays || function() {
                for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
                for (var n = Array(t), o = 0, e = 0; e < i; e++)
                    for (var r = arguments[e], s = 0, a = r.length; s < a; s++, o++) n[o] = r[s];
                return n
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = i(39),
            l = i(0),
            c = i(1),
            u = i(11),
            d = i(10),
            h = i(3),
            f = i(7),
            p = i(6),
            o = (s = u.Label, o(_, s), _.prototype.setProperties = function(t) {
                if (t && !c.isEmptyObj(t) && this.events.fire(f.ItemEvent.beforeChangeProperties, [this.getProperties()])) {
                    for (var e in t) this._props.includes(e) && (this.config[e] = t[e]);
                    this._initView(this.config), this._initHandlers(), this.events.fire(f.ItemEvent.afterChangeProperties, [this.getProperties()]), this.paint()
                }
            }, _.prototype.getProperties = function() {
                var t, e = {};
                for (t in this.config) this._props.includes(t) && (e[t] = this.config[t]);
                return e
            }, _.prototype.show = function() {
                this.config.hidden && this.events.fire(f.ItemEvent.beforeShow, [this.getValue("timeObject" === this.config.valueFormat)]) && (this.config.hidden = !1, this.events.fire(f.ItemEvent.afterShow, [this.getValue("timeObject" === this.config.valueFormat)]))
            }, _.prototype.hide = function(t) {
                this.config.hidden && !t || !this.events.fire(f.ItemEvent.beforeHide, [this.getValue("timeObject" === this.config.valueFormat), t]) || (this.config.hidden = !0, this.events.fire(f.ItemEvent.afterHide, [this.getValue("timeObject" === this.config.valueFormat), t]))
            }, _.prototype.isVisible = function() {
                return !this.config.hidden
            }, _.prototype.disable = function() {
                this.config.disabled = !0, this.paint()
            }, _.prototype.enable = function() {
                this.config.disabled = !1, this.paint()
            }, _.prototype.isDisabled = function() {
                return this.config.disabled
            }, _.prototype.validate = function(t, e) {
                void 0 === t && (t = !1);
                e = void 0 === e ? this.getValue("timeObject" === this.config.valueFormat) : e;
                if (t || this.events.fire(f.ItemEvent.beforeValidate, [e])) return this._isValid = this.config.validation ? this.config.validation(e) : p.isTimeFormat(this.getValue(), this.config.timeFormat), t || this.events.fire(f.ItemEvent.afterValidate, [e, this._isValid]), this._isValid
            }, _.prototype.clearValidate = function() {
                this.config.$validationStatus = f.ValidationStatus.pre, this.paint()
            }, _.prototype.setValue = function(t) {
                void 0 !== t && t !== this.config.value && (this.timepicker.setValue(t), this.config.controls && (this.config.value = this.timepicker.getValue(), this.events.fire(f.ItemEvent.change, [this.getValue("timeObject" === this.config.valueFormat)]), p.isVerify(this.config) && this.validate(), this.paint()))
            }, _.prototype.getValue = function(t) {
                return t ? this.timepicker.getValue(t) : this.config.value || ""
            }, _.prototype.focus = function() {
                var t = this;
                l.awaitRedraw().then(function() {
                    t.getRootView().refs.input.el.focus()
                })
            }, _.prototype.clear = function() {
                "" !== this.config.value && this._clear()
            }, _.prototype.getWidget = function() {
                return this.timepicker
            }, _.prototype._initView = function(t) {
                var e, i = this;
                if (c.isEmptyObj(t)) throw new Error("Check the configuration is correct");
                for (e in this.timepicker && this.timepicker.destructor(), this._popup && this._popup.destructor(), this.config = {
                        type: t.type,
                        id: t.id,
                        name: t.name,
                        disabled: !1,
                        editable: !1,
                        hidden: !1,
                        timeFormat: 24,
                        controls: !1,
                        valueFormat: "string",
                        required: !1,
                        validation: void 0,
                        icon: "",
                        placeholder: "",
                        label: "",
                        labelWidth: "",
                        labelPosition: "top",
                        hiddenLabel: !1,
                        helpMessage: "",
                        preMessage: "",
                        successMessage: "",
                        errorMessage: "",
                        width: "content",
                        height: "content",
                        padding: 0
                    }, t) "id" !== e && "type" !== e && "name" !== e && (this.config[e] = t[e]);
                this._popup = new d.Popup({
                    css: "dhx_widget--border-shadow"
                }), this.timepicker = new a.Timepicker(null, p.widgetConfig(t)), this._popup.attach(this.timepicker), this.config.hasOwnProperty("value") && (this.config.value = this.timepicker.getValue()), this.config.hidden && l.awaitRedraw().then(function() {
                    i.hide(!0)
                })
            }, _.prototype._initHandlers = function() {
                var i = this;
                this.events.on(f.ItemEvent.afterValidate, function() {
                    i.config.$validationStatus = i._isValid ? f.ValidationStatus.success : f.ValidationStatus.error, i.paint()
                }), this.config.controls ? (this.timepicker.events.on(a.TimepickerEvents.afterClose, function() {
                    i._popup.hide()
                }), this.timepicker.events.on(a.TimepickerEvents.afterApply, function() {
                    var t = i.getRootView().refs.input.el.value;
                    i.config.value && "" === t ? i.clear() : (i.config.value = i.timepicker.getValue(), i.events.fire(f.ItemEvent.change, [i.getValue("timeObject" === i.config.valueFormat)])), i._popup.hide(), p.isVerify(i.config) && i.validate(), i.paint()
                }), this._popup.events.on(d.PopupEvents.afterHide, function() {
                    i.config.value && i.config.value !== i.timepicker.getValue() ? i.timepicker.setValue(i.config.value) : "" !== i.config.value && void 0 !== i.config.value || i._clear(!0)
                })) : (this.timepicker.events.on(a.TimepickerEvents.change, function() {
                    i.config.value = i.timepicker.getValue(), i.events.fire(f.ItemEvent.change, [i.getValue("timeObject" === i.config.valueFormat)]), i.paint()
                }), this._popup.events.on(d.PopupEvents.afterHide, function() {
                    i.config.value && p.isVerify(i.config) && i.validate(), i.paint()
                })), this._popup.events.on(d.PopupEvents.afterHide, function() {
                    "" !== i.config.value && void 0 !== i.config.value && (i.validate(!0), i.config.$validationStatus = i._isValid ? f.ValidationStatus.success : f.ValidationStatus.error, i.paint())
                }), this.events.on(f.ItemEvent.input, function(t) {
                    var e = 12 === i.config.timeFormat ? 7 : 5;
                    t.length >= e && p.isTimeFormat(t, i.config.timeFormat) ? i.timepicker.setValue(t) : "" !== t || i.config.controls || i.clear()
                }), this.events.on(f.ItemEvent.afterChangeProperties, function() {
                    i.config.value = i.timepicker.getValue(), i.paint()
                })
            }, _.prototype._getHandlers = function() {
                var e = this;
                return {
                    onfocus: function() {
                        var t;
                        e._popup.isVisible() || ("" === e.config.value && void 0 === e.config.value || e.clearValidate(), t = e.getRootView().refs.input.el, e._popup.show(t))
                    },
                    oninput: function(t) {
                        t = t.target.value;
                        e.events.fire(f.ItemEvent.input, [t])
                    },
                    onkeyup: function(t) {
                        e.config.controls || 13 !== t.keyCode || (e._popup.isVisible() && e._popup.hide(), e.getRootView().refs.input.el.blur())
                    },
                    onkeydown: function(t) {
                        "Tab" === t.key && e._popup.hide()
                    }
                }
            }, _.prototype._draw = function() {
                var t = this.config,
                    e = t.value,
                    i = t.required,
                    n = t.disabled,
                    o = t.placeholder,
                    r = t.name,
                    s = t.id,
                    t = t.editable;
                return l.el("div.dhx_form-group", {
                    class: p.getFormItemCss(this.config, p.isVerify(this.config))
                }, [this._drawLabel(), l.el(".dhx_input__wrapper", [l.el("div.dhx_input__container", {}, [l.el(".dhx_input__icon.dxi.dxi-clock-outline"), l.el("input.dhx_input.dhx_input--icon-padding", {
                    _key: this._uid,
                    value: e,
                    type: "text",
                    _ref: "input",
                    required: i,
                    disabled: n,
                    placeholder: o || "",
                    name: r || "",
                    id: s || this._uid,
                    onfocus: this._handlers.onfocus,
                    onkeyup: this._handlers.onkeyup,
                    oninput: this._handlers.oninput,
                    onkeydown: this._handlers.onkeydown,
                    autocomplete: "off",
                    readOnly: !t
                })]), p.getValidationMessage(this.config) && l.el("span.dhx_input__caption", {}, p.getValidationMessage(this.config))])])
            }, _.prototype._clear = function(t) {
                this.timepicker.clear(), this.config.value = "", t || this.events.fire(f.ItemEvent.change, [this.config.value])
            }, _);

        function _(t, e) {
            var i = s.call(this, null, e) || this;
            i.events = new h.EventSystem, i._isValid = !0, i._propsItem = ["required", "validation", "icon", "placeholder", "editable", "label", "labelWidth", "labelPosition", "hiddenLabel", "helpMessage", "preMessage", "successMessage", "errorMessage"], i._propsTimepicker = ["timeFormat", "controls", "valueFormat"], i._props = r(p.baseProps, i._propsItem, i._propsTimepicker), i._initView(e), i._initHandlers();
            return i.mount(t, l.create({
                render: function() {
                    return i._draw()
                }
            })), i
        }
        e.TimePicker = o
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(t, e)
            }, function(t, e) {
                function i() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }),
            r = this && this.__spreadArrays || function() {
                for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
                for (var n = Array(t), o = 0, e = 0; e < i; e++)
                    for (var r = arguments[e], s = 0, a = r.length; s < a; s++, o++) n[o] = r[s];
                return n
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = i(43),
            l = i(3),
            c = i(0),
            u = i(1),
            d = i(11),
            h = i(10),
            f = i(7),
            p = i(6),
            o = (s = d.Label, o(_, s), _.prototype.setProperties = function(t) {
                if (t && !u.isEmptyObj(t) && this.events.fire(f.ItemEvent.beforeChangeProperties, [this.getProperties()])) {
                    for (var e in t) this._props.includes(e) && (this.config[e] = t[e], this._propsColorpicker.includes(e) && (this.colorpicker.config[e] = t[e]));
                    this.events.fire(f.ItemEvent.afterChangeProperties, [this.getProperties()]), this.colorpicker.paint(), this.paint()
                }
            }, _.prototype.getProperties = function() {
                var t, e = {};
                for (t in this.config) this._props.includes(t) && (e[t] = this.config[t]);
                return e
            }, _.prototype.show = function() {
                var t = this.config,
                    e = t.value;
                t.hidden && this.events.fire(f.ItemEvent.beforeShow, [e]) && (this.config.hidden = !1, this.events.fire(f.ItemEvent.afterShow, [e]))
            }, _.prototype.hide = function(t) {
                var e = this.config,
                    i = e.value;
                e.hidden && !t || !this.events.fire(f.ItemEvent.beforeHide, [i, t]) || (this.config.hidden = !0, this.events.fire(f.ItemEvent.afterHide, [i, t]))
            }, _.prototype.isVisible = function() {
                return !this.config.hidden
            }, _.prototype.disable = function() {
                this.config.disabled = !0, this.paint()
            }, _.prototype.enable = function() {
                this.config.disabled = !1, this.paint()
            }, _.prototype.isDisabled = function() {
                return this.config.disabled
            }, _.prototype.validate = function(t, e) {
                void 0 === t && (t = !1);
                e = void 0 === e ? this.getValue() : e;
                if (t || this.events.fire(f.ItemEvent.beforeValidate, [e])) return this._isValid = this.config.validation ? this.config.validation(e) : a.isHex(e), t || this.events.fire(f.ItemEvent.afterValidate, [e, this._isValid]), this._isValid
            }, _.prototype.clearValidate = function() {
                this.config.$validationStatus = f.ValidationStatus.pre, this.paint()
            }, _.prototype.setValue = function(t) {
                void 0 !== t && t !== this.config.value && (this.colorpicker.setValue(t), p.isVerify(this.config) && this.validate())
            }, _.prototype.getValue = function() {
                return this.config.value || ""
            }, _.prototype.clear = function() {
                "" !== this.config.value && (this.config.value = "", this.colorpicker.clear())
            }, _.prototype.getWidget = function() {
                return this.colorpicker
            }, _.prototype.focus = function() {
                var t = this;
                c.awaitRedraw().then(function() {
                    t.getRootView().refs.input.el.focus()
                })
            }, _.prototype._initView = function(t) {
                var e, i = this;
                if (u.isEmptyObj(t)) throw new Error("Check the configuration is correct");
                for (e in this.colorpicker && this.colorpicker.destructor(), this._popup && this._popup.destructor(), this.config = {
                        type: t.type,
                        id: t.id,
                        name: t.name,
                        disabled: !1,
                        editable: !1,
                        hidden: !1,
                        value: "",
                        grayShades: !0,
                        pickerOnly: !1,
                        paletteOnly: !1,
                        customColors: [],
                        palette: a.palette,
                        mode: "palette",
                        required: !1,
                        validation: void 0,
                        icon: "",
                        placeholder: "",
                        label: "",
                        labelWidth: "",
                        labelPosition: "top",
                        hiddenLabel: !1,
                        helpMessage: "",
                        preMessage: "",
                        successMessage: "",
                        errorMessage: "",
                        width: "content",
                        height: "content",
                        padding: 0
                    }, t) "id" !== e && "type" !== e && "name" !== e && (this.config[e] = t[e]);
                this._popup = new h.Popup({
                    css: "dhx_widget--border-shadow"
                }), this.colorpicker = new a.Colorpicker(null, p.widgetConfig(t)), this._popup.attach(this.colorpicker), this.config.hidden && c.awaitRedraw().then(function() {
                    i.hide(!0)
                })
            }, _.prototype._initHandlers = function() {
                var e = this;
                this.colorpicker.events.on(a.ColorpickerEvents.change, function() {
                    var t = e.config.value = e.colorpicker.getValue();
                    e.events.fire(f.ItemEvent.change, [t]), e._popup.hide(), e.paint()
                }), this.events.on(f.ItemEvent.afterValidate, function() {
                    e.config.$validationStatus = e._isValid ? f.ValidationStatus.success : f.ValidationStatus.error, e.paint()
                }), this._popup.events.on(h.PopupEvents.afterHide, function() {
                    return e.config.value && p.isVerify(e.config) && e.validate()
                })
            }, _.prototype._getHandlers = function() {
                var e = this;
                return {
                    onblur: function() {
                        "" !== e.config.value && (e.validate(!0), e.config.$validationStatus = e._isValid ? f.ValidationStatus.success : f.ValidationStatus.error, e.paint())
                    },
                    onfocus: function() {
                        var t;
                        e._popup.isVisible() || ("" !== e.config.value && e.clearValidate(), t = e.getRootView().refs.input.el, e._popup.show(t))
                    },
                    oninput: function(t) {
                        t = t.target.value;
                        e.events.fire(f.ItemEvent.input, [t])
                    },
                    onchange: function(t) {
                        t = t.target.value;
                        e.config.editable && a.isHex(t) ? e.setValue(t) : "" === t ? e.clear() : (p.isVerify(e.config) && e.validate(), e.paint())
                    },
                    onkeyup: function(t) {
                        13 === t.keyCode && (e._popup.isVisible() && e._popup.hide(), e.getRootView().refs.input.el.blur())
                    },
                    onkeydown: function(t) {
                        "Tab" === t.key && e._popup.hide()
                    }
                }
            }, _.prototype._draw = function() {
                var t = this.config,
                    e = t.required,
                    i = t.value,
                    n = t.icon,
                    o = t.disabled,
                    r = t.placeholder,
                    s = t.name,
                    a = t.id,
                    t = t.editable;
                return c.el("div.dhx_form-group", {
                    class: p.getFormItemCss(this.config, p.isVerify(this.config))
                }, [this._drawLabel(), c.el(".dhx_input__wrapper", [c.el("div.dhx_input__container", {}, [c.el(".dhx_input__icon", {
                    class: n || "dxi dxi-eyedropper-variant" + (i ? " dhx_input__icon--color-selected" : ""),
                    style: {
                        "background-color": i || "transparent"
                    }
                }), c.el("input.dhx_input.dhx_input--icon-padding", {
                    _key: this._uid,
                    value: i,
                    type: "text",
                    _ref: "input",
                    required: e,
                    disabled: o,
                    placeholder: r || "",
                    name: s || "",
                    id: a || this._uid,
                    onfocus: this._handlers.onfocus,
                    oninput: this._handlers.oninput,
                    onchange: this._handlers.onchange,
                    onkeyup: this._handlers.onkeyup,
                    onkeydown: this._handlers.onkeydown,
                    onblur: this._handlers.onblur,
                    autocomplete: "off",
                    readOnly: !t
                })]), p.getValidationMessage(this.config) && c.el("span.dhx_input__caption", {}, p.getValidationMessage(this.config))])])
            }, _);

        function _(t, e) {
            var i = s.call(this, null, e) || this;
            i.events = new l.EventSystem, i._isValid = !0, i._propsItem = ["required", "validation", "icon", "placeholder", "editable", "label", "labelWidth", "labelPosition", "hiddenLabel", "helpMessage", "preMessage", "successMessage", "errorMessage"], i._propsColorpicker = ["mode", "grayShades", "customColors", "palette"], i._props = r(p.baseProps, i._propsItem, i._propsColorpicker), i._initView(e), i._initHandlers();
            return i.mount(t, c.create({
                render: function() {
                    return i._draw()
                }
            })), i
        }
        e.ColorPicker = o
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(t, e)
            }, function(t, e) {
                function i() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }),
            r = this && this.__assign || function() {
                return (r = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = i(0),
            l = i(4),
            c = i(7),
            u = i(3),
            d = i(1),
            h = i(6),
            o = (s = l.View, o(f, s), f.prototype.setProperties = function(t) {
                if (t && !d.isEmptyObj(t) && this.events.fire(c.ItemEvent.beforeChangeProperties, [this.getProperties()])) {
                    for (var e in t) h.baseProps.includes(e) && (this.config[e] = t[e]);
                    this.events.fire(c.ItemEvent.afterChangeProperties, [this.getProperties()]), this.paint()
                }
            }, f.prototype.getProperties = function() {
                var t, e = {};
                for (t in this.config) h.baseProps.includes(t) && (e[t] = this.config[t]);
                return e
            }, f.prototype.show = function() {
                this.config.hidden && this.events.fire(c.ItemEvent.beforeShow, [void 0]) && (this.config.hidden = !1, this.events.fire(c.ItemEvent.afterShow, [void 0]))
            }, f.prototype.hide = function(t) {
                this.config.hidden && !t || !this.events.fire(c.ItemEvent.beforeHide, [void 0, t]) || (this.config.hidden = !0, this.events.fire(c.ItemEvent.afterHide, [void 0, t]))
            }, f.prototype.isVisible = function() {
                return !this.config.hidden
            }, f.prototype._draw = function() {
                return a.el("div")
            }, f);

        function f(t, e) {
            var i = s.call(this, t, r({
                disabled: !1,
                hidden: !1,
                width: "content",
                height: "content",
                padding: 0
            }, e)) || this;
            i.events = new u.EventSystem, i.config.hidden && a.awaitRedraw().then(function() {
                i.hide(!0)
            });
            return i.mount(t, a.create({
                render: function() {
                    return i._draw()
                }
            })), i
        }
        e.Spacer = o
    }, function(t, e, i) {
        "use strict";
        var n = this && this.__assign || function() {
                return (n = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            },
            a = this && this.__spreadArrays || function() {
                for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
                for (var n = Array(t), o = 0, e = 0; e < i; e++)
                    for (var r = arguments[e], s = 0, a = r.length; s < a; s++, o++) n[o] = r[s];
                return n
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var v = i(19),
            l = i(5),
            o = i(1);
        r.prototype.xlsx = function(t) {
            return this._export(t)
        }, r.prototype.csv = function(t) {
            var e;
            void 0 === t && (t = {}), t = n({
                asFile: !0,
                rowDelimiter: "\n",
                columnDelimiter: ",",
                skipHeader: 0
            }, t), e = "getRoot" in this._view.data && t.flat ? this.getFlatCSV(t) : this._getCSV(t);
            var i = t.name || "grid_export";
            return t.asFile && o.downloadFile(e, i + ".csv", "text/csv"), e
        }, r.prototype._export = function(t) {
            void 0 === t && (t = {});
            for (var c = this._view.config.columns.filter(function(t) {
                    return !t.hidden
                }), u = {}, e = v.transpose(c.map(function(t) {
                    return t.header.map(function(t) {
                        return t.text || " "
                    })
                })), d = [], h = {
                    default: {
                        color: "#000000",
                        background: "#FFFFFF",
                        fontSize: 14
                    }
                }, f = [], n = {}, i = this._view.data.serialize().map(function(i, t) {
                    return u[i.id] = t, c.map(function(t, e) {
                        return n[t.id] = e, v.removeHTMLTags(i[t.id])
                    })
                }), p = [], _ = this._view.content, g = this, o = 0, r = c; o < r.length; o++) ! function(t) {
                var n, e, o, i, r;
                for (r in t.footer && (n = t.id, i = e = g._view.data.serialize().reduce(function(t, e) {
                        return void 0 === e[n] || "" === e[n] || isNaN(e[n]) || t.push(parseFloat(e[n])), t
                    }, []), "tree" === g._view.config.type && (i = (o = g._view.data).serialize().reduce(function(t, e) {
                        var i;
                        return 0 === e.$level && (void 0 === e[n] || "" === e[n] || isNaN(e[n]) ? (i = 0, o.eachChild(e.id, function(t) {
                            o.haveItems(t.id) || (i += parseFloat(t[n]))
                        }), t.push(i)) : t.push(parseFloat(e[n]) || 0)), t
                    }, [])), t.footer[0].content ? (i = _[t.footer[0].content].calculate(e, i), p.push(i)) : p.push(t.footer[0].colspan || t.footer[0].css || t.footer[0].text || " ")), d.push({
                        width: t.width
                    }), t.$cellCss) {
                    var s, a = t.$cellCss[r],
                        l = a.split("").reduce(function(t, e) {
                            e = (t << 5) - t + e.charCodeAt(0);
                            return Math.abs(e & e)
                        }, 0).toString();
                    h[l] || (s = document.body, (s = v.getStyleByClass(a, s, "dhx_grid-row", h.default)) && (h[l] = s)), h[l] && f.push([u[r], c.indexOf(t), l])
                }
            }(r[o]);
            p.length && i.push(p);
            var s, i = {
                name: t.name || "data",
                columns: d,
                header: e,
                data: i,
                styles: {
                    cells: f,
                    css: h
                }
            };
            return t.url && ((s = document.createElement("form")).setAttribute("target", "_blank"), s.setAttribute("action", t.url), s.setAttribute("method", "POST"), s.style.visibility = "hidden", (t = document.createElement("textarea")).setAttribute("name", "data"), t.value = JSON.stringify(i), s.appendChild(t), document.body.appendChild(s), s.submit(), setTimeout(function() {
                s.parentNode.removeChild(s)
            }, 100)), i
        }, r.prototype.getFlatCSV = function(o) {
            var e = this._view.data,
                t = e.getRoot(),
                r = this._view.config.columns[0],
                s = e.getMaxLevel(),
                i = "";
            e.eachChild(t, function(n) {
                var t = function(t, e) {
                    for (var i, n = [], o = 0; o <= s; o++) t && t[r.id] ? (n[t.$level] = t[r.id], t = (i = e.getParent(t.id, !0)) && i.id ? i : null) : n[o] = "";
                    return n
                }(n, e).join(o.columnDelimiter);
                i += t + Object.keys(n).reduce(function(t, e, i) {
                    return "id" === e || "parent" === e || e.startsWith("$") || 0 === i ? t : t + o.columnDelimiter + (null === n[e] ? "" : n[e])
                }, ""), i += o.rowDelimiter
            });
            var t = this._export(o),
                n = function(t, e) {
                    for (var i = 0; i < t.length; i++) t[i] = e;
                    return t
                }(new Array(s + 1), ""),
                t = t.header.map(function(t) {
                    return t.splice.apply(t, a([0, 1], n)), t
                });
            return new l.CsvDriver(o).serialize(t, !0) + o.rowDelimiter + i
        }, r.prototype._getCSV = function(t) {
            var e = this._export(t),
                i = e.header,
                t = new l.CsvDriver(t);
            return t.serialize(i, !0) + t.serialize(e.data, !0)
        }, i = r;

        function r(t) {
            this._view = t
        }
        e.Exporter = i
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var h = i(0),
            r = i(1),
            o = i(5),
            n = i(3),
            f = i(9),
            i = (s.prototype.setCell = function(e, i, t, n) {
                var o, r, s, a, l, c, u, d = this;
                void 0 === t && (t = !1), void 0 === n && (n = !1), this.config.disabled || this._grid.config.$editable || !this._multiselection && this._oldSelectedCell && this._oldSelectedCell.row.id === (e && e.id || e) && this._oldSelectedCell.column.id === (i && i.id || i) || this._multiselection && 1 === this._selectedCells.length && this._selectedCells[0].row.id === (e && e.id || e) && this._selectedCells[0].column.id === (i && i.id || i) || ((!this._multiselection || t || n) && this._multiselection || this._selectedCells.length && this._removeCells(), this._multiselection && "cell" === this._type && this._selectedCells.find(function(t) {
                    return t.row.id === (e && e.id || e) && t.column.id === (i && i.id || i)
                }) ? this.removeCell(e && e.id || e, i && i.id || i) : (l = this._oldSelectedCell || void 0, e = this._grid.data.getItem(e && e.id || e), o = this._grid.config.columns.filter(function(t) {
                    return !t.hidden
                }), i = i || o[0], (i = this._grid.getColumn(i.id || i)) && e && (i = i.id ? i : this._grid.getColumn(i), this.events.fire(f.GridSelectionEvents.beforeSelect, [e, i]) && (this._selectedCell = {
                    row: e,
                    column: i
                }, this.events.fire(f.GridSelectionEvents.afterSelect, [e, i]), this._multiselection && n && l ? this._oldSelectedCell = l : this._oldSelectedCell = this._selectedCell, this._multiselection ? n && !t && 0 < this._selectedCells.length ? (r = this._grid.data.getIndex(this._oldSelectedCell.row.id), (s = this._grid.data.getIndex(e.id)) < r && (a = r, r = s, s = a), this._selectedCells = [this._oldSelectedCell], "cell" === this._type ? (l = (c = o.map(function(t) {
                    return t.id
                })).indexOf(l.column.id), c = c.indexOf(i.id), -1 !== l && -1 !== c && (c < l && (a = l, l = c, c = a), u = o.slice(l, c + 1), this._grid.data.mapRange(r, s, function(e) {
                    u.forEach(function(t) {
                        t = {
                            row: e,
                            column: t
                        }; - 1 === d._findIndex(t) && d._selectedCells.push(t)
                    })
                }))) : this._grid.data.mapRange(r, s, function(t) {
                    t = {
                        row: t,
                        column: i
                    }; - 1 === d._findIndex(t) && d._selectedCells.push(t)
                })) : t && !n ? -1 === (n = this._findIndex()) ? this._selectedCells.push({
                    row: this._selectedCell.row,
                    column: this._selectedCell.column
                }) : 1 < this._selectedCells.length && this._selectedCells.splice(n, 1) : this._selectedCells = [this._selectedCell] : this._selectedCells = [this._selectedCell], h.awaitRedraw().then(function() {
                    d._grid.paint()
                })))))
            }, s.prototype.getCell = function() {
                return this._selectedCell
            }, s.prototype.getCells = function() {
                return this._selectedCells
            }, s.prototype.toHTML = function() {
                var n = this;
                if (!this._isUnselected()) {
                    if (this._multiselection) {
                        var o = [];
                        return this._selectedCells.forEach(function(t, e, i) {
                            o.push(n._toHTML(t.row, t.column, e === i.length - 1 || "cell" === n._type))
                        }), o
                    }
                    return this._toHTML(this._selectedCell.row, this._selectedCell.column, !0)
                }
            }, s.prototype.disable = function() {
                this.removeCell(), this.config.disabled = !0, this._grid.paint()
            }, s.prototype.enable = function() {
                this.config.disabled = !1, this._grid.paint()
            }, s.prototype.removeCell = function(i, n) {
                var t, o = this;
                i && n && "cell" === this._type ? (t = this._selectedCells.find(function(t) {
                    var e = t.row,
                        t = t.column;
                    return e.id === i && t.id === n
                })) && this._removeCell(t.row, t.column) : i ? this._selectedCells.filter(function(t) {
                    return t.row.id === i
                }).forEach(function(t) {
                    var e = t.row,
                        t = t.column;
                    o._removeCell(e, t)
                }) : this._removeCells(), h.awaitRedraw().then(function() {
                    o._grid.paint()
                })
            }, s.prototype._removeCell = function(e, i) {
                var t;
                e && i && e.id && i.id && this.events.fire(f.GridSelectionEvents.beforeUnSelect, [e, i]) && (t = this._selectedCells.findIndex(function(t) {
                    return t.row.id === e.id && t.column.id === i.id
                }), this._selectedCells.splice(t, 1), this._selectedCell && i.id === this._selectedCell.column.id && e.id === this._selectedCell.row.id && (this._selectedCell = this._selectedCells[this._selectedCells.length - 1] || void 0), this.events.fire(f.GridSelectionEvents.afterUnSelect, [e, i]))
            }, s.prototype._removeCells = function() {
                var e = this;
                this._selectedCells.forEach(function(t) {
                    e._removeCell(t && t.row, t && t.column)
                }), this._selectedCells.length && this._removeCells()
            }, s.prototype._init = function() {
                var n = this;
                this._grid.events.on(f.GridEvents.cellClick, function(t, e, i) {
                    n.setCell(t, e, i.ctrlKey || i.metaKey, i.shiftKey)
                }), this._grid.data.events.on(o.DataEvents.beforeRemove, function(t) {
                    var e;
                    t && n._selectedCell && n._selectedCell.row && (e = n._grid.data.getIndex(String(n._selectedCell.row.id)), (t = n._grid.data.getId(e + 1)) ? n.setCell(t) : (e = n._grid.data.getId(e - 1)) && n.setCell(e), n._grid.paint())
                })
            }, s.prototype._toHTML = function(t, e, i) {
                void 0 === i && (i = !1);
                var n, o = this._grid.config.columns.filter(function(t) {
                        return !t.hidden
                    }),
                    o = (this._grid.config.leftSplit ? o.slice(0, this._grid.config.leftSplit) : []).map(function(t) {
                        return t.id
                    }),
                    t = this._grid.getCellRect(t.id, e.id);
                o.includes(e.id) && i && (r = this._grid.getScrollState(), n = h.el(".dhx_grid-selected-cell", {
                    style: {
                        width: this._grid.config.leftSplit === o.indexOf(e.id) + 1 ? t.width - 1 : t.width,
                        height: t.height,
                        top: t.y,
                        left: t.x + r.x,
                        position: "absolute",
                        zIndex: 10
                    }
                }));
                var r = this._grid.config.$totalWidth;
                return h.el(".dhx_grid-selection", {
                    style: {
                        zIndex: n ? 20 : 10
                    }
                }, [("row" === this._type || "complex" === this._type) && h.el(".dhx_grid-selected-row", {
                    style: {
                        width: r,
                        height: t.height - 1,
                        top: t.y,
                        left: 0,
                        position: "absolute"
                    }
                }), ("cell" === this._type || "complex" === this._type) && n || ("cell" === this._type || "complex" === this._type) && i && h.el(".dhx_grid-selected-cell", {
                    style: {
                        width: t.width - 1,
                        height: t.height - 1,
                        top: t.y,
                        left: t.x + 1,
                        position: "absolute"
                    }
                })])
            }, s.prototype._isUnselected = function() {
                return !this._selectedCell || !this._selectedCell.row || !this._selectedCell.column || 0 === this._selectedCells.length
            }, s.prototype._findIndex = function(i) {
                var n = this;
                void 0 === i && (i = this._selectedCell);
                var o = -1;
                return this._selectedCells.some(function(t, e) {
                    if ("cell" === n._type) {
                        if (r.compare(t.row, i.row) && r.compare(t.column, i.column)) return o = e, !0
                    } else if ("row" === n._type && r.compare(t.row, i.row)) return o = e, !0
                }), o
            }, s);

        function s(t, e, i) {
            this._grid = t, this.config = e, this._selectedCell = void 0, this._oldSelectedCell = void 0, this._selectedCells = [], this._type = ["cell", "row", "complex"].includes(this._grid.config.selection) ? this._grid.config.selection : "complex", this._multiselection = t.config.multiselection && "complex" !== this._type, this.events = i || new n.EventSystem(this), this._init()
        }
        e.Selection = i
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = i(9),
            n = i(15),
            r = i(202),
            s = i(2),
            i = (a.prototype.addHotKey = function(t, e) {
                var i = this;
                n.keyManager.addHotKey(t, function(t) {
                    i.isFocus() && i._grid.events.fire(o.GridEvents.beforeKeyDown, [t]) && (e(t), i._grid.events.fire(o.GridEvents.afterKeyDown, [t]))
                })
            }, a.prototype.isFocus = function() {
                return this._focusedId === this._grid._uid
            }, a.prototype._initFocusHandlers = function() {
                var e = this;
                document.addEventListener("click", function(t) {
                    e._focusedId = s.locate(t, "dhx_widget_id")
                })
            }, a.prototype._cellSelecting = function(t) {
                return "cell" === t || "complex" === t
            }, a.prototype._initHotKeys = function() {
                var e, n = this;
                this.addHotKey("enter", function() {
                    var t;
                    !n._cellSelecting(n._grid.config.selection) || (t = n._grid.selection.getCell()) && (!1 !== t.column.editable && n._grid.config.editable || t.column.editable) && (n._grid.config.$editable ? n._grid.editEnd() : "boolean" !== t.column.type ? n._grid.edit(t.row.id, t.column.id, t.column.editorType) : n._grid.events.fire(o.GridEvents.afterEditEnd, [!t.row[t.column.id], t.row, t.column]))
                }), this.addHotKey("space", function(t) {
                    var e;
                    !n._cellSelecting(n._grid.config.selection) || !n._grid.config.editable || n._grid.config.$editable || (e = n._grid.selection.getCell()) && "boolean" === e.column.type && (t.preventDefault(), n._grid.events.fire(o.GridEvents.afterEditEnd, [!e.row[e.column.id], e.row, e.column]))
                }), this.addHotKey("escape", function() {
                    n._grid.config.$editable && n._grid.editEnd(!0)
                }), this._grid.getRootView() && (e = this._grid.getRootView().refs.grid_body.el, this.addHotKey("pageUp", function(t) {
                    t.preventDefault(), e.scrollTop -= e.clientHeight
                }), this.addHotKey("pageDown", function(t) {
                    t.preventDefault(), e.scrollTop += e.clientHeight
                }), this.addHotKey("home", function(t) {
                    t.preventDefault(), e.scrollTop = 0
                }), this.addHotKey("end", function(t) {
                    t.preventDefault(), e.scrollTop += e.scrollHeight
                })), this.addHotKey("tab", function(t) {
                    var e, i;
                    n._grid.config.$editable || !n._grid.config.selection || s.locateNodeByClassName(t, "dhx_grid-header-cell") || (t && t.preventDefault(), i = n._grid.selection.getCell(), e = n._grid.config.columns.filter(function(t) {
                        return !t.hidden
                    }), i && (0 <= (t = e.indexOf(i.column) + 1) && t < e.length ? (n._grid.selection.setCell(i.row.id, e[t].id), n._grid.scrollTo(i.row.id.toString(), e[t].id.toString())) : 0 <= t && ((i = n._grid.data.getIndex(i.row.id.toString()) + 1) < n._grid.data.getLength() && (n._grid.selection.setCell(n._grid.data.getId(i), e[0].id), n._grid.scrollTo(n._grid.data.getId(i), e[0].id.toString())))))
                }), this.addHotKey("shift+tab", function(t) {
                    var e, i;
                    n._grid.config.$editable || !n._grid.config.selection || s.locateNodeByClassName(t, "dhx_grid-header-cell") || (t && t.preventDefault(), i = n._grid.selection.getCell(), e = n._grid.config.columns.filter(function(t) {
                        return !t.hidden
                    }), i && (0 <= (t = e.indexOf(i.column) - 1) && t < e.length ? (n._grid.selection.setCell(i.row.id, e[t].id), n._grid.scrollTo(i.row.id.toString(), e[t].id.toString())) : t < n._grid.data.getLength() && (0 <= (i = n._grid.data.getIndex(i.row.id.toString()) - 1) && (n._grid.selection.setCell(n._grid.data.getId(i), e[e.length - 1].id), n._grid.scrollTo(n._grid.data.getId(i), e[e.length - 1].id.toString())))))
                }), this.addHotKey("arrowUp", function(t) {
                    r.selectionMove(t, n._grid, "vertical", -1)
                }), this.addHotKey("ctrl+arrowUp", function(t) {
                    r.selectionMove(t, n._grid, "vertical", -1, !0)
                }), this.addHotKey("shift+arrowUp", function(t) {
                    n._grid.config.multiselection && r.selectionMove(t, n._grid, "vertical", -1, !1, !1, !0)
                }), this.addHotKey("ctrl+shift+arrowUp", function(t) {
                    n._grid.config.multiselection && r.selectionMove(t, n._grid, "vertical", -1, !0, !1, !0)
                }), this.addHotKey("arrowDown", function(t) {
                    r.selectionMove(t, n._grid, "vertical", 1)
                }), this.addHotKey("ctrl+arrowDown", function(t) {
                    r.selectionMove(t, n._grid, "vertical", 1, !0)
                }), this.addHotKey("shift+arrowDown", function(t) {
                    n._grid.config.multiselection && r.selectionMove(t, n._grid, "vertical", 1, !1, !1, !0)
                }), this.addHotKey("ctrl+shift+arrowDown", function(t) {
                    n._grid.config.multiselection && r.selectionMove(t, n._grid, "vertical", 1, !0, !1, !0)
                }), this.addHotKey("arrowRight", function(t) {
                    r.selectionMove(t, n._grid, "horizontal", 1)
                }), this.addHotKey("ctrl+arrowRight", function(t) {
                    r.selectionMove(t, n._grid, "horizontal", 1, !0)
                }), this.addHotKey("shift+arrowRight", function(t) {
                    n._grid.config.multiselection && r.selectionMove(t, n._grid, "horizontal", 1, !1, !1, !0)
                }), this.addHotKey("ctrl+shift+arrowRight", function(t) {
                    n._grid.config.multiselection && r.selectionMove(t, n._grid, "horizontal", 1, !0, !1, !0)
                }), this.addHotKey("arrowLeft", function(t) {
                    r.selectionMove(t, n._grid, "horizontal", -1)
                }), this.addHotKey("ctrl+arrowLeft", function(t) {
                    r.selectionMove(t, n._grid, "horizontal", -1, !0)
                }), this.addHotKey("shift+arrowLeft", function(t) {
                    n._grid.config.multiselection && r.selectionMove(t, n._grid, "horizontal", -1, !1, !1, !0)
                }), this.addHotKey("ctrl+shift+arrowLeft", function(t) {
                    n._grid.config.multiselection && r.selectionMove(t, n._grid, "horizontal", -1, !0, !1, !0)
                })
            }, a);

        function a(t) {
            this._grid = t, this._initFocusHandlers(), this._initHotKeys()
        }
        e.KeyManager = i
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var u = i(2);
        e.selectionMove = function(t, e, i, n, o, r, s) {
            var a, l, c;
            void 0 === o && (o = !1), void 0 === r && (r = !1), void 0 === s && (s = !1), e.config.$editable || !e.config.selection || u.locateNodeByClassName(t, "dhx_grid-header-cell") || (t && t.preventDefault(), a = e.selection.getCell(), t = e.config.columns.filter(function(t) {
                return !t.hidden
            }), a && ("vertical" === i ? o ? (l = 1 === n ? e.data.getItem(e.data.getId(e.data.getLength() - 1)) : e.data.getItem(e.data.getId(0)), e.selection.setCell(l.id, a.column.id, r, s), e.scrollTo(l.id, a.column.id.toString())) : 0 <= (c = e.data.getIndex(a.row.id.toString())) + n && c + n < e.data.getLength() && (l = e.data.getItem(e.data.getId(c + n)), e.selection.setCell(l.id, a.column.id, r, s), e.scrollTo(l.id, a.column.id.toString())) : o ? (l = 1 === n ? t[t.length - 1] : t[0], e.selection.setCell(a.row.id, l.id, r, s), e.scrollTo(a.row.id.toString(), l.id.toString())) : 0 <= (c = t.indexOf(a.column)) + n && c + n < t.length && (e.scrollTo(a.row.id.toString(), t[c + n].id.toString()), e.selection.setCell(a.row.id, t[c + n].id, r, s))))
        }
    }, function(t, e, i) {
        "use strict";
        var v = this && this.__assign || function() {
            return (v = Object.assign || function(t) {
                for (var e, i = 1, n = arguments.length; i < n; i++)
                    for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t
            }).apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var m = i(0),
            y = i(2),
            b = i(54),
            w = i(19),
            x = i(55),
            E = i(210),
            C = i(83),
            d = i(1),
            S = 2;

        function k(t) {
            if (t) {
                var e = t.currentStyle || window.getComputedStyle(t),
                    i = parseFloat(e.paddingLeft) + parseFloat(e.paddingRight) || 0,
                    e = parseFloat(e.paddingTop) + parseFloat(e.paddingBottom) || 0;
                return {
                    width: t.clientWidth - i,
                    height: t.clientHeight - e
                }
            }
        }

        function P(o, t) {
            var e, i = x.getCells(o),
                n = x.getSpans(o),
                r = o.columns.filter(function(t) {
                    return !t.hidden
                });
            o.$resizing && (a = d.findIndex(r, function(t) {
                return t.id === o.$resizing
            }), l = w.getTotalWidth(r.slice(0, a)) + r[a].$width, e = m.el(".dhx_grid-resize-line", {
                style: {
                    top: 0,
                    left: l,
                    height: o.$totalHeight
                }
            }));
            var s, a = "string" == typeof(a = o.selection ? o.selection.toHTML() : null) ? m.el("div.dhx_selection", {
                    ".innerHTML": a
                }) : a,
                l = o.$positions,
                c = {};
            if (o.eventHandlers)
                for (var u in o.eventHandlers) o.eventHandlers.hasOwnProperty(u) && (s = o.eventHandlers[u], c[u] = y.eventHandler(function(t) {
                    return e = t, i = y.locate(e, "dhx_id"), n = y.locate(e, "dhx_col_id"), t = o.data.filter(function(t) {
                        return t.id === i
                    })[0], e = o.currentColumns.filter(function(t) {
                        return t.id === n
                    })[0], {
                        row: i ? t : {},
                        col: n ? e : {}
                    };
                    var e, i, n
                }, v({}, s)));
            return m.el(".dhx_data-wrap", v({
                style: {
                    height: o.$totalHeight,
                    width: o.$totalWidth,
                    "padding-left": t.x,
                    "padding-top": t.y
                }
            }, c), [m.el(".dhx_grid_data", v({
                _flags: m.KEYED_LIST
            }, x.getHandlers(l.yStart, l.xStart, o)), i), m.el(".dhx_span-spans", n), m.el(".dhx_grid_selection", {
                _ref: "selection"
            }, [a, e])])
        }
        e.render = function(t, e, i, n, o) {
            e._container || (e.config.width = 1, e.config.height = 1), t && t.node && t.node.parent && t.node.parent.el && (g = k(t.node.parent.el), e.config.width = g.width, e.config.height = g.height);
            var r = e.config;
            if (!r) return m.el("div");
            if (!r.columns.length) return m.el(".dhx_grid");
            var s = e.data.getRawData(0, -1, null, 2);
            r.columns.filter(function(t) {
                return !t.hidden
            }).reduce(function(t, e) {
                return e.hidden && t
            }, !0) ? r.$totalHeight = 0 : r.$totalHeight = s.length * r.rowHeight;
            var a = k(e._container),
                l = {
                    width: r.width || a && a.width || 0,
                    height: r.height || a && a.height || 0
                };
            w.isAutoWidth(r) && (! function t(e, i, o) {
                void 0 === o && (o = !0);
                var r, n = e.$totalHeight >= i.height - e.headerRowHeight ? y.getScrollbarWidth() : 0,
                    s = i.width - S - n,
                    n = e.columns.filter(function(t) {
                        return !t.hidden && !t.width && !t.$fixed && w.isAutoWidth(e, t)
                    }),
                    a = w.getTotalWidth(e.columns.filter(function(t) {
                        return t.width || t.$fixed || !w.isAutoWidth(e, t)
                    })),
                    l = n.reduce(function(t, e) {
                        return t + (e.gravity || 1)
                    }, 0);
                s < e.$totalWidth ? (r = n.reduce(function(t, e) {
                    return t + (e.maxWidth || e.$width)
                }, 0), 1 < n.length && n.forEach(function(t) {
                    var e = Math.abs(s - r) * ((t.gravity || 1) / l),
                        i = e < t.minWidth,
                        n = e > t.maxWidth;
                    i || n ? i ? (a += t.$width - e, t.$fixed = !0) : n && (t.$width = t.maxWidth, t.$fixed = !0) : t.$width = e
                })) : n.forEach(function(t) {
                    var e = Math.abs(s - a) * ((t.gravity || 1) / l),
                        i = e < t.minWidth,
                        n = e > t.maxWidth;
                    i || n ? i ? (a += t.$width - e, t.$fixed = !0) : n && (t.$width = t.maxWidth, t.$fixed = !0) : t.$width = e, !o && t.$fixed && delete t.$fixed
                }), o && t(e, i, !1)
            }(r, l), r.$totalWidth = w.getTotalWidth(r.columns)), r.width = l.width, r.height = l.height, d = s, h = l, _ = (f = e).config, p = _.columns.filter(function(t) {
                return !t.hidden
            }), g = b.calculatePositions(h.width, h.height, f._scroll, _), h = p.slice(g.xStart, g.xEnd), (a = v(v({}, _), {
                data: d,
                scroll: f._scroll,
                $positions: g,
                headerHeight: _.$headerLevel * _.headerRowHeight,
                footerHeight: _.$footerLevel * _.footerRowHeight,
                firstColId: p[0].id,
                events: f.events,
                _events: f._events,
                currentColumns: h,
                sortBy: f._sortBy,
                sortDir: f._sortDir,
                content: f.content,
                gridId: f._uid
            })).selection = n, a.datacollection = e.data;
            var c, u, s = x.getShifts(a),
                d = w.isCssSupport("position", "sticky"),
                h = (g = a, _ = (_ = l).height - S, _ = (p = d) ? _ : _ - g.headerHeight, !g.$footer || p ? _ : _ - g.footerHeight),
                f = {
                    wrapper: l,
                    sticky: d,
                    shifts: s,
                    gridBodyHeight: h
                },
                n = C.getFixedRows(a, v(v({}, f), {
                    name: "header",
                    position: "top"
                })),
                p = a.$footer ? C.getFixedRows(a, v(v({}, f), {
                    name: "footer",
                    position: "bottom"
                })) : null,
                _ = a.$totalWidth + S < l.width ? "dhx_grid-less-width" : "",
                g = a.$totalHeight + S < l.height ? "dhx_grid-less-height" : "";
            return t.node || (t = e.getScrollState(), c = t.x, u = t.y, m.awaitRedraw().then(function() {
                e.scroll(c, u)
            })), m.el(".dhx_grid.dhx_widget", {
                class: (a.css || "") + (d ? "" : " dhx_grid_border") + (r.multiselection ? " dhx_no-select--pointer" : ""),
                dhx_widget_id: o
            }, [m.resizer(function() {
                return e.paint()
            }), m.el(".dhx_grid-content", {
                style: v({}, l),
                onclick: i.onclick,
                class: (_ + " " + g).trim()
            }, [d ? null : n, m.el(".dhx_grid-body", {
                style: {
                    height: h,
                    width: l.width - S
                },
                onscroll: i.onscroll,
                _ref: "grid_body"
            }, [d ? n : null, P(a, s), d ? p : null]), E.getFixedColsHeader(a, f), E.getFixedCols(a, f), d ? null : p])])
        }
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o, r = i(9),
            s = i(205),
            a = i(206),
            l = i(207),
            c = i(208),
            u = i(209),
            d = {
                cell: {
                    row: null,
                    col: null
                },
                editor: null,
                gridId: null
            };
        e.getEditor = function(t, e, i) {
            var n = "boolean" === e.type ? "checkbox" : i.$editable.editorType;
            if (d.cell.row === t.id && d.cell.col === e.id && d.gridId === i.gridId) return d.editor;
            switch (d = {
                    cell: {
                        row: t.id,
                        col: e.id
                    },
                    editor: d.editor,
                    gridId: i.gridId
                }, o || (o = function() {
                    d = {
                        cell: {
                            row: null,
                            col: null
                        },
                        editor: null,
                        gridId: null
                    }
                }, i.events.on(r.GridEvents.afterEditEnd, o)), n) {
                case "input":
                    return d.editor = new s.InputEditor(t, e, i);
                case "select":
                    return d.editor = new a.SelectEditor(t, e, i);
                case "datePicker":
                    return d.editor = new l.DateEditor(t, e, i);
                case "checkbox":
                    return d.editor = new c.CheckboxEditor(t, e, i);
                case "combobox":
                    return d.editor = new u.ComboboxEditor(t, e, i);
                default:
                    return d.editor = new s.InputEditor(t, e, i)
            }
        }
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(0),
            o = i(9),
            r = i(1),
            i = (s.prototype.endEdit = function(t) {
                var e;
                t || (e = this._input.value), this._config.events.fire(o.GridEvents.beforeEditEnd, [e, this._cell.row, this._cell.col]) ? (this._input.removeEventListener("blur", this._handlers.onBlur), this._input.removeEventListener("change", this._handlers.onChange), "string" !== this._cell.col.type && r.isNumeric(e) && (e = parseFloat(e)), this._cell.row = this._config.datacollection.getItem(this._cell.row.id), this._config.events.fire(o.GridEvents.afterEditEnd, [e, this._cell.row, this._cell.col])) : this._input.focus()
            }, s.prototype.toHTML = function() {
                var t = this._cell.row[this._cell.col.id];
                return this._input && (t = this._input.value), this._config.$editable.editor = this, n.el("input.dhx_cell-editor.dhx_cell-editor__input", {
                    _hooks: {
                        didInsert: this._handlers.didInsert
                    },
                    _key: "cell_editor",
                    dhx_id: "cell_editor",
                    value: t
                })
            }, s.prototype._initHandlers = function() {
                var e = this;
                this._handlers = {
                    onBlur: function() {
                        e.endEdit()
                    },
                    onChange: function() {
                        e.endEdit()
                    },
                    didInsert: function(t) {
                        t = t.el;
                        (e._input = t).focus(), t.setSelectionRange(0, t.value.length), t.addEventListener("change", e._handlers.onChange), t.addEventListener("blur", e._handlers.onBlur)
                    }
                }
            }, s);

        function s(t, e, i) {
            this._config = i, this._cell = {
                row: t,
                col: e
            }, this._initHandlers()
        }
        e.InputEditor = i
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(0),
            o = i(9),
            i = (r.prototype.endEdit = function(t) {
                var e;
                t || (e = this._input.value), this._config.events.fire(o.GridEvents.beforeEditEnd, [e, this._cell.row, this._cell.col]) ? (this._input.removeEventListener("blur", this._handlers.onBlur), this._cell.row = this._config.datacollection.getItem(this._cell.row.id), this._config.events.fire(o.GridEvents.afterEditEnd, [e, this._cell.row, this._cell.col])) : this._input.focus()
            }, r.prototype.toHTML = function() {
                var t = this._cell.col.options || [],
                    e = this._cell.row[this._cell.col.id];
                this._input && (e = this._input.options[this._input.selectedIndex].value);
                t = t.map(function(t) {
                    return n.el("option", {
                        selected: t === e
                    }, t)
                });
                return this._config.$editable.editor = this, n.el("select.dhx_cell-editor.dhx_cell-editor__select", {
                    _hooks: {
                        didInsert: this._handlers.didInsert
                    },
                    _key: "cell_editor",
                    dhx_id: "cell_editor"
                }, t)
            }, r.prototype._initHandlers = function() {
                var e = this;
                this._handlers = {
                    onBlur: function() {
                        e.endEdit()
                    },
                    didInsert: function(t) {
                        t = t.el;
                        (e._input = t).focus(), t.addEventListener("blur", e._handlers.onBlur)
                    }
                }
            }, r);

        function r(t, e, i) {
            this._config = i, this._cell = {
                row: t,
                col: e
            }, this._initHandlers()
        }
        e.SelectEditor = i
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(0),
            o = i(9),
            r = i(28),
            s = i(10),
            i = (a.prototype.endEdit = function(t, e) {
                if (this._handlers) {
                    var i = this._calendar.config.dateFormat,
                        n = this._cell.row[this._cell.col.id];
                    if (!t) {
                        if (n instanceof Date || e) return this._value = this._calendar.getValue(), this._input.value = this._value, void this._popup.hide();
                        r.stringToDate(this._input.value, i, !0) && this._input.value.length === n.length && (this._value = this._input.value)
                    }
                    this._config.events.fire(o.GridEvents.beforeEditEnd, [this._value, this._cell.row, this._cell.col]) ? (this._input.removeEventListener("focus", this._handlers.onFocus), this._input.removeEventListener("change", this._handlers.onChange), document.removeEventListener("mousedown", this._handlers.onOuterClick), this._popup.destructor(), this._calendar.destructor(), this._cell.row = this._config.datacollection.getItem(this._cell.row.id), this._config.events.fire(o.GridEvents.afterEditEnd, [this._value, this._cell.row, this._cell.col])) : this._input.focus()
                }
            }, a.prototype.toHTML = function() {
                var t = this._cell.row[this._cell.col.id];
                return this._config.$editable.editor = this, document.addEventListener("mousedown", this._handlers.onOuterClick), n.el("input.dhx_cell-editor.dhx_cell-editor__input.dhx_cell-editor__datepicker", {
                    _hooks: {
                        didInsert: this._handlers.didInsert
                    },
                    _key: "cell_editor",
                    dhx_id: "cell_editor",
                    value: t
                })
            }, a.prototype._initHandlers = function() {
                var i = this;
                this._handlers = {
                    onFocus: function() {
                        n.awaitRedraw().then(function() {
                            i._popup.show(i._input, {
                                centering: !0,
                                mode: "bottom"
                            })
                        })
                    },
                    onChange: function() {
                        i.endEdit()
                    },
                    onOuterClick: function(t) {
                        var e;
                        t.target instanceof Node && (e = i._input && i._input.contains(t.target), t = i._popup && i._popup.getRootNode() && i._popup.getRootNode().contains(t.target), e || t || i._popup.hide())
                    },
                    didInsert: function(t) {
                        t = t.el;
                        i._input = t, i._input.addEventListener("focus", i._handlers.onFocus), i._input.addEventListener("change", i._handlers.onChange), t.focus(), t.setSelectionRange(t.value.length, t.value.length)
                    }
                }
            }, a);

        function a(t, e, i) {
            var n = this;
            this._config = i, this._cell = {
                row: t,
                col: e
            }, this._calendar = new r.Calendar(null, {
                dateFormat: e.dateFormat
            });
            t = this._cell.row[this._cell.col.id], e = this._calendar.config.dateFormat;
            (r.stringToDate(t, e, !0) || t instanceof Date) && (this._calendar.setValue(t), this._value = this._calendar.getValue(), this._cell.row[this._cell.col.id] = this._value), this._popup = new s.Popup({
                css: "dhx_widget--bordered"
            }), this._popup.attach(this._calendar), this._calendar.events.on(r.CalendarEvents.change, function() {
                n.endEdit(!1, !0)
            }), this._popup.events.on(s.PopupEvents.afterHide, function() {
                n.endEdit()
            }), this._initHandlers()
        }
        e.DateEditor = i
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(0),
            o = i(9),
            i = (r.prototype.endEdit = function() {
                var t = this._checked;
                this._config.events.fire(o.GridEvents.beforeEditEnd, [t, this._cell.row, this._cell.col]) ? (this._cell.row = this._config.datacollection.getItem(this._cell.row.id), this._config.events.fire(o.GridEvents.afterEditEnd, [t, this._cell.row, this._cell.col])) : this._input.checked = !t
            }, r.prototype.toHTML = function() {
                return void 0 === this._checked && (this._checked = this._cell.row[this._cell.col.id]), n.el("label.dhx_checkbox.dhx_cell-editor__checkbox", [n.el("input.dhx_checkbox__input", {
                    type: "checkbox",
                    _hooks: {
                        didInsert: this._handlers.didInsert
                    },
                    _key: "cell_editor",
                    dhx_id: "cell_editor",
                    checked: this._checked,
                    style: {
                        userSelect: "none"
                    }
                }), n.el("span.dhx_checkbox__visual-input")])
            }, r.prototype._initHandlers = function() {
                var e = this;
                this._handlers = {
                    onChange: function(t) {
                        t = t.target.checked;
                        e._config.events.fire(o.GridEvents.beforeEditStart, [e._cell.row, e._cell.col, "checkbox"]) ? (e._checked = t, e._config.events.fire(o.GridEvents.afterEditStart, [e._cell.row, e._cell.col, "checkbox"]), e.endEdit()) : e._input.checked = !t
                    },
                    didInsert: function(t) {
                        e._checkbox = t.el.parentNode.lastChild, e._input = t.el.parentNode.firstChild, e._input.addEventListener("change", e._handlers.onChange)
                    }
                }
            }, r);

        function r(t, e, i) {
            this._config = i, this._cell = {
                row: t,
                col: e
            }, this._initHandlers()
        }
        e.CheckboxEditor = i
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(0),
            o = i(9),
            r = i(29),
            i = (s.prototype.endEdit = function(t) {
                var e;
                t || (e = this._input.getValue()), this._config.events.fire(o.GridEvents.beforeEditEnd, [e, this._cell.row, this._cell.col]) ? (this._input.popup.hide(), document.removeEventListener("mousedown", this._handlers.onOuterClick), this._cell.row = this._config.datacollection.getItem(this._cell.row.id), this._config.events.fire(o.GridEvents.afterEditEnd, [e, this._cell.row, this._cell.col])) : this._input.focus()
            }, s.prototype.toHTML = function() {
                var e = this,
                    t = this._cell.col.options.map(function(t) {
                        return {
                            id: "" + t,
                            value: t
                        }
                    }) || [];
                return this._input || (this._input = new r.Combobox(null, {
                    readOnly: !0,
                    cellHeight: 37,
                    css: "dhx_cell-editor__combobox"
                }), this._input.data.parse(t), this._input.setValue(this._cell.row[this._cell.col.id])), document.addEventListener("mousedown", this._handlers.onOuterClick), this._config.$editable.editor = this, n.awaitRedraw().then(function() {
                    var t = e._input.getRootView().refs.holder.el;
                    e._input.popup.getContainer().style.width = t.offsetWidth + "px", e._input.popup.show(t)
                }), n.inject(this._input.getRootView())
            }, s.prototype._initHandlers = function() {
                var i = this;
                this._handlers = {
                    onOuterClick: function(t) {
                        var e;
                        t.target instanceof Node && (e = i._input && i._input.getRootNode() && i._input.getRootNode().contains(t.target), t = i._input.popup && i._input.popup.getRootNode() && i._input.popup.getRootNode().contains(t.target), e || t || i.endEdit())
                    }
                }
            }, s);

        function s(t, e, i) {
            this._config = i, this._cell = {
                row: t,
                col: e
            }, this._initHandlers()
        }
        e.ComboboxEditor = i
    }, function(t, e, i) {
        "use strict";
        var d = this && this.__assign || function() {
                return (d = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            },
            h = this && this.__spreadArrays || function() {
                for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
                for (var n = Array(t), o = 0, e = 0; e < i; e++)
                    for (var r = arguments[e], s = 0, a = r.length; s < a; s++, o++) n[o] = r[s];
                return n
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var f = i(0),
            p = i(2),
            _ = i(55),
            g = i(83),
            v = i(19);
        e.getFixedColsHeader = function(t, e) {
            if ("number" == typeof t.leftSplit) {
                for (var i = 0, n = 0; n < t.leftSplit; n++) t.columns[n].hidden && i++;
                if (i !== t.leftSplit) {
                    for (var o = t.columns.filter(function(t) {
                            return !t.hidden
                        }).slice(0, t.leftSplit - i), r = 0, s = 0, a = o; s < a.length; s++) r += a[s].$width;
                    o = 0 <= t.leftSplit && g.getFixedRows(d(d({}, t), {
                        currentColumns: o,
                        $positions: d(d({}, t.$positions), {
                            xStart: 0,
                            xEnd: t.leftSplit
                        }),
                        scroll: {
                            top: 0,
                            left: 0
                        },
                        columns: o
                    }), d(d({}, e), {
                        name: "header",
                        position: "top",
                        shifts: {
                            x: 0,
                            y: 0
                        }
                    })), e = d(d({}, e), {
                        name: "header",
                        position: "top"
                    });
                    return o && f.el(".dhx_" + e.name + "-fixed-cols", {
                        style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            maxWidth: r,
                            overflow: "hidden"
                        }
                    }, o.body)
                }
            }
        }, e.getFixedCols = function(t, e) {
            if ("number" == typeof t.leftSplit) {
                for (var i = 0, n = 0; n < t.leftSplit; n++) t.columns[n].hidden && i++;
                if (i !== t.leftSplit) {
                    var o = t.$totalWidth <= e.wrapper.width ? 0 : p.getScrollbarWidth(),
                        r = t.$totalHeight + t.headerHeight + t.footerHeight,
                        s = r - (r > e.gridBodyHeight ? o : null),
                        a = t.columns.filter(function(t) {
                            return !t.hidden
                        }).slice(0, t.leftSplit - i);
                    t.fixedColumnsWidth = v.getTotalWidth(a);
                    var l = _.getCells(d(d({}, t), {
                            columns: a,
                            $positions: d(d({}, t.$positions), {
                                xStart: 0,
                                xEnd: t.leftSplit
                            })
                        })),
                        c = e.sticky,
                        u = d(d({}, e), {
                            name: "footer",
                            position: "bottom"
                        }),
                        r = 0 <= t.leftSplit && g.getRows(d(d({}, t), {
                            currentColumns: a,
                            $positions: d(d({}, t.$positions), {
                                xStart: 0,
                                xEnd: t.leftSplit
                            })
                        }), d(d({}, e), {
                            name: "footer",
                            position: "bottom"
                        })),
                        a = c ? r && f.el(".dhx_" + u.name + "-fixed-cols", {
                            style: {
                                position: "absolute",
                                bottom: 0,
                                left: 0
                            }
                        }, r) : null,
                        u = t.$positions,
                        r = _.getSpans(t, !0);
                    return f.el(".dhx_grid-fixed-cols-wrap", {
                        style: {
                            height: s > e.gridBodyHeight ? (c ? e.gridBodyHeight : e.gridBodyHeight + t.headerHeight) - o : s,
                            paddingTop: t.headerHeight,
                            overflow: "hidden",
                            width: t.fixedColumnsWidth
                        }
                    }, [f.el(".dhx_grid-fixed-cols", d({
                        style: {
                            top: -t.scroll.top + t.headerHeight - 1 + "px",
                            paddingTop: e.shifts.y,
                            height: t.$totalHeight,
                            position: "absolute"
                        },
                        _flags: f.KEYED_LIST
                    }, _.getHandlers(u.yStart, u.xStart, t)), h([r && f.el(".dhx_span-spans", r)], l)), t.$footer && a, f.el(".dhx_frozen-cols-border")])
                }
            }
        }
    }, function(t, e, i) {
        "use strict";
        var o = this && this.__spreadArrays || function() {
            for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
            for (var n = Array(t), o = 0, e = 0; e < i; e++)
                for (var r = arguments[e], s = 0, a = r.length; s < a; s++, o++) n[o] = r[s];
            return n
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, r = i(0),
            a = i(29),
            l = i(5),
            c = i(9),
            u = i(2);

        function d(e, i, n, o, r) {
            function t() {
                var t = (u.isIE() ? r.target : r.path ? r.path[0] : r.explicitOriginalTarget).value;
                o.value[i] = t, e.fire(c.GridEvents.filterChange, [t, i, n]), e.fire(c.GridEvents.headerInput, [t, i, n])
            }
            "selectFilter" !== n ? (s && clearTimeout(s), s = setTimeout(t, 250)) : t()
        }

        function n(t, n, e, i) {
            if (t && n && e) {
                var o = t.id,
                    t = i ? i(o, n.data) : n.data.reduce(function(t, e) {
                        return void 0 === e[o] || "" === e[o] || isNaN(e[o]) || t.push(parseFloat(e[o])), t
                    }, []),
                    i = t;
                return "tree" === n.type && (i = n.data.reduce(function(t, e) {
                    var i;
                    return 0 === e.$level && (void 0 === e[o] || "" === e[o] || isNaN(e[o]) ? (i = 0, n.datacollection.eachChild(e.id, function(t) {
                        n.datacollection.haveItems(t.id) || (i += parseFloat(t[o]))
                    }), t.push(i)) : t.push(parseFloat(e[o]) || 0)), t
                }, [])), e(t, i)
            }
        }
        e.getContent = function() {
            var i = this;
            return {
                inputFilter: {
                    element: {},
                    toHtml: function(t, e) {
                        var i = t.id.toString();
                        return this.element[i] = r.el("label.dhx_grid-filter__label.dxi.dxi-magnify", [r.el("input", {
                            type: "text",
                            class: "dhx_input dhx_grid-filter",
                            oninput: [d, e.events, t.id, "inputFilter", this],
                            _key: t.id,
                            value: this.value[t.id] || ""
                        })]), this.element[i]
                    },
                    match: function(t, e) {
                        for (var i = "", n = 0; n < e.length; n++) {
                            var o = e.charCodeAt(n);
                            i += 32 < o && o < 48 || 63 === o || 90 < o && o < 95 || 124 === o ? "\\" + e[n] : e[n]
                        }
                        return new RegExp("" + i, "i").test(t)
                    },
                    value: {}
                },
                selectFilter: {
                    element: {},
                    toHtml: function(e, t) {
                        var i = this,
                            n = e.id.toString();
                        return this.element[n] = r.el("label.dhx_grid-filter__label.dxi.dxi-menu-down", [r.el("select.dxi.dxi-menu-down", {
                            type: "text",
                            class: "dhx_input dhx_grid-filter dhx_grid-filter--select",
                            onchange: [d, t.events, e.id, "selectFilter", this],
                            _key: e.id
                        }, o([r.el("option", {
                            value: ""
                        }, "")], e.$uniqueData.map(function(t) {
                            return t && r.el("option", {
                                value: t,
                                selected: i.value[e.id] === t.toString()
                            }, t)
                        })))]), this.element[n]
                    },
                    match: function(t, e) {
                        return !e || t.toString() == e
                    },
                    value: {}
                },
                comboFilter: {
                    element: {},
                    toHtml: function(t, i) {
                        var e, n, o = t.id.toString();
                        return this.element[o] ? n = this.element[t.id] : (e = t.header.filter(function(t) {
                            return void 0 !== t.filterConfig
                        })[0], (n = e && e.filterConfig ? new a.Combobox(null, JSON.parse(JSON.stringify(e.filterConfig))) : new a.Combobox(null, {})).data.parse(t.$uniqueData.map(function(t) {
                            return {
                                value: t
                            }
                        })), i.events.on(l.DataEvents.load, function() {
                            n.data.parse(t.$uniqueData.map(function(t) {
                                return {
                                    value: t
                                }
                            }))
                        }), (this.element[o] = n).events.on("change", function(t) {
                            var e;
                            t && (e = void 0, n.data.getItem(t) ? (e = n.list.selection.getItem().value, i.events.fire(c.GridEvents.filterChange, [e, o, "comboFilter"]), i.events.fire(c.GridEvents.headerInput, [e, o, "comboFilter"])) : (i.events.fire(c.GridEvents.filterChange, ["", o, "comboFilter"]), i.events.fire(c.GridEvents.headerInput, ["", o, "comboFilter"])))
                        }), n.popup.events.on("afterHide", function() {
                            n.list.selection.getItem() || (n.clear(), i.events.fire(c.GridEvents.filterChange, ["", o, "comboFilter"]), i.events.fire(c.GridEvents.headerInput, ["", o, "comboFilter"]))
                        })), r.inject(n.getRootView())
                    },
                    match: function(t, e) {
                        return !e || t === e
                    },
                    destroy: function() {
                        if (i.content && i.content.comboFilter.element) {
                            var t, e = i.content.comboFilter.element;
                            for (t in e) e[t].destructor(), delete e[t]
                        }
                    },
                    value: {}
                },
                sum: {
                    calculate: function(t, e) {
                        return e.reduce(function(t, e) {
                            return t + (parseFloat(e) || 0)
                        }, 0).toFixed(3)
                    },
                    toHtml: function(t, e) {
                        return n(t, e, this.calculate)
                    }
                },
                avg: {
                    calculate: function(t, e) {
                        return (e.reduce(function(t, e) {
                            return t + e
                        }, 0) / t.length).toFixed(3)
                    },
                    toHtml: function(t, e) {
                        return n(t, e, this.calculate)
                    }
                },
                min: {
                    calculate: function(t) {
                        return Math.min.apply(Math, t).toFixed(3)
                    },
                    toHtml: function(t, e) {
                        return n(t, e, this.calculate)
                    }
                },
                max: {
                    calculate: function(t) {
                        return Math.max.apply(Math, t).toFixed(3)
                    },
                    toHtml: function(t, e) {
                        return n(t, e, this.calculate)
                    }
                },
                count: {
                    calculate: function(t, e) {
                        return e.reduce(function(t, e) {
                            return t + e
                        }, 0)
                    },
                    validate: function(i, t) {
                        return t.reduce(function(t, e) {
                            return void 0 !== e[i] && "" !== e[i] && (isNaN(e) ? t.push(1) : t.push(e)), t
                        }, [])
                    },
                    toHtml: function(t, e) {
                        return n(t, e, this.calculate, this.validate)
                    }
                }
            }
        }
    }, function(t, e, i) {
        "use strict";
        var h = this && this.__spreadArrays || function() {
            for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
            for (var n = Array(t), o = 0, e = 0; e < i; e++)
                for (var r = arguments[e], s = 0, a = r.length; s < a; s++, o++) n[o] = r[s];
            return n
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var f = i(1),
            p = i(9),
            _ = i(2);
        e.startResize = function(a, l, t, e) {
            t.targetTouches && t.preventDefault();
            var c = (t.targetTouches ? t.targetTouches[0] : t).clientX,
                u = a.config.columns.filter(function(t) {
                    return !t.hidden
                }),
                d = 0;

            function i(t) {
                var e, i, n = f.findIndex(u, function(t) {
                        return t.id === l
                    }),
                    o = (t.targetTouches ? t.targetTouches[0] : t).clientX,
                    r = o - a.getRootNode().getBoundingClientRect().left,
                    s = a.config.$totalHeight > a.config.height ? _.getScrollbarWidth() : 0;
                a.config.leftSplit === n + 1 && r >= a.config.width - s - 2 || (d = d || u[n].$width, e = u[n].minWidth || 40, r = u[n].maxWidth, s = o - c, o = h(u), s = d + s, r && r <= s || s <= e ? (s <= e && (i = e), r <= s && (i = r)) : i = s, o[n].$width = i, o[n].$fixed = !0, a.events.fire(p.GridEvents.resize, [u[n], t]), a.paint())
            }
            a.config.$resizing = l;
            var n = function() {
                t.targetTouches ? (document.removeEventListener("touchmove", i), document.removeEventListener("touchend", n)) : (document.removeEventListener("mousemove", i), document.removeEventListener("mouseup", n)), e()
            };
            t.targetTouches ? (document.addEventListener("touchmove", i), document.addEventListener("touchend", n)) : (document.addEventListener("mousemove", i), document.addEventListener("mouseup", n)), a.paint()
        }
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r, s = i(82),
            a = i(9),
            l = i(5),
            c = i(2),
            o = (r = s.Grid, o(u, r), u.prototype._setEventHandlers = function() {
                var i = this;
                r.prototype._setEventHandlers.call(this), this.events.on(a.GridEvents.headerCellMouseDown, function(t, e) {
                    e.targetTouches ? i._touch.timer = setTimeout(function() {
                        i._dragStartColumn(e, t)
                    }, i._touch.duration) : i._dragStartColumn(e, t)
                }), this._events.on(a.GridSystemEvents.headerCellTouchMove, function(t, e) {
                    i._touch.start && e.preventDefault(), i._clearTouchTimer()
                }), this._events.on(a.GridSystemEvents.headerCellTouchEnd, function() {
                    i._touch.start = !1, i._clearTouchTimer()
                })
            }, u.prototype._getColumnGhost = function(t) {
                var e = this._container.querySelector(".dhx_header-row"),
                    i = e.querySelector('.dhx_grid-header-cell[dhx_id="' + t.id + '"]'),
                    i = Array.from(e.childNodes).indexOf(i) + 1,
                    t = this._container.querySelectorAll('.dhx_grid-header-cell[dhx_id="' + t.id + '"]'),
                    i = this._container.querySelectorAll(".dhx_grid_data .dhx_grid-cell:nth-child(" + i + ")"),
                    n = document.createElement("div");
                return t.forEach(function(t) {
                    return n.appendChild(t.cloneNode(!0))
                }), i.forEach(function(t) {
                    return n.appendChild(t.cloneNode(!0))
                }), n
            }, u.prototype._dragStartColumn = function(t, e) {
                function i(t) {
                    return t.classList.contains("dhx_grid-custom-content-cell")
                }
                var n = t.target;
                i(n.parentElement) || i(n.parentElement.parentElement) || !(e.draggable || "column" === this.config.dragItem && !1 !== e.draggable) || c.locateNodeByClassName(t, "dhx_resizer_grip_wrap") || (t.targetTouches && (this._touch.start = !0), l.dragManager.onMouseDown(t, e.id, [this._getColumnGhost(e)]))
            }, u);

        function u(t, e) {
            return r.call(this, t, e) || this
        }
        e.ProGrid = o
    }, function(t, i, e) {
        "use strict";

        function n(t) {
            for (var e in t) i.hasOwnProperty(e) || (i[e] = t[e])
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), n(e(215)), n(e(216))
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r, s = i(2),
            a = i(18),
            o = (r = a.Navbar, o(l, r), l.prototype.showAt = function(t, e) {
                void 0 === e && (e = "bottom"), t instanceof MouseEvent ? this._changeActivePosition({
                    left: window.pageXOffset + t.x + 1,
                    right: window.pageXOffset + t.x + 1,
                    top: window.pageYOffset + t.y,
                    bottom: window.pageYOffset + t.y
                }, e) : (t = s.toNode(t), this._changeActivePosition(s.getRealPosition(t), e))
            }, l.prototype._getFactory = function() {
                return a.createFactory({
                    widget: this,
                    defaultType: "menuItem",
                    allowedTypes: ["menuItem", "spacer", "separator", "customHTML", "customHTMLButton"],
                    widgetName: "context-menu"
                })
            }, l.prototype._close = function(t) {
                r.prototype._close.call(this, t), this._activeMenu = null, this._changeActivePosition(null, null)
            }, l.prototype._getMode = function(t, e, i) {
                return i ? this._mode : "right"
            }, l.prototype._changeActivePosition = function(t, e) {
                this._activePosition = t, this._mode = e, this._listenOuterClick(), this.paint()
            }, l);

        function l() {
            var t = null !== r && r.apply(this, arguments) || this;
            return t._isContextMenu = !0, t
        }
        e.ContextMenu = o
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r, s = i(0),
            a = i(18),
            o = (r = a.Navbar, o(l, r), l.prototype._getFactory = function() {
                return a.createFactory({
                    widget: this,
                    defaultType: "menuItem",
                    allowedTypes: ["navItem", "menuItem", "spacer", "separator", "customHTML", "customHTMLButton"],
                    widgetName: "menu-nav"
                })
            }, l.prototype._draw = function() {
                return s.el("ul.dhx_widget", {
                    dhx_widget_id: this._uid,
                    onmousemove: this._handlers.onmousemove,
                    onmouseleave: this._handlers.onmouseleave,
                    onclick: this._handlers.onclick,
                    onmousedown: this._handlers.onmousedown,
                    class: "dhx_menu-nav " + (this.config.css || "")
                }, this._drawMenuItems(this.data.getRoot(), !1))
            }, l);

        function l(t, e) {
            var i = r.call(this, t, e) || this;
            return i.mount(t, s.create({
                render: function() {
                    return i._draw()
                }
            })), i
        }
        e.Menu = o
    }, function(t, i, e) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            function(t) {
                for (var e in t) i.hasOwnProperty(e) || (i[e] = t[e])
            }(e(218))
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r, s = i(0),
            a = i(18),
            l = i(1),
            c = i(2),
            u = i(12),
            o = (r = a.Navbar, o(d, r), d.prototype.getState = function() {
                var t, e = {};
                for (t in this.data.eachChild(this.data.getRoot(), function(t) {
                        t.twoState && !t.group ? e[t.id] = t.active : "input" !== t.type && "selectButton" !== t.type || (e[t.id] = t.value)
                    }, !0), this._groups) this._groups[t].active && (e[t] = this._groups[t].active);
                return e
            }, d.prototype.setState = function(t) {
                for (var e in t) {
                    var i;
                    this._groups && this._groups[e] ? this._groups[e].active && (this.data.update(this._groups[e].active, {
                        active: !1
                    }), this._groups[e].active = t[e], this.data.update(t[e], {
                        active: !0
                    })) : "input" === (i = this.data.getItem(e)).type || "selectButton" === i.type ? this.data.update(e, {
                        value: t[e]
                    }) : this.data.update(e, {
                        active: t[e]
                    })
                }
            }, d.prototype._getFactory = function() {
                return a.createFactory({
                    widget: this,
                    defaultType: "navItem",
                    allowedTypes: ["navItem", "button", "imageButton", "selectButton", "customHTML", "input", "separator", "spacer", "title", "block", "customHTMLButton"],
                    widgetName: "ribbon"
                })
            }, d.prototype._getMode = function(t, e) {
                return t.id === e ? "bottom" : "right"
            }, d.prototype._close = function(t) {
                this._activePosition = null, this._currentRoot = null, r.prototype._close.call(this, t)
            }, d.prototype._draw = function() {
                var i = this;
                return s.el("ul.dhx_ribbon.dhx_widget", {
                    dhx_widget_id: this._uid,
                    class: this.config.css || "",
                    tabindex: 0,
                    onclick: this._handlers.onclick,
                    onmousedown: this._handlers.onmousedown,
                    oninput: this._listeners.input,
                    onmouseover: this._listeners.tooltip,
                    _hooks: {
                        didInsert: function(t) {
                            t.el.addEventListener("keyup", function(t) {
                                var e;
                                9 !== t.which || (e = c.locateNode(document.activeElement)) && (t = e.getAttribute("dhx_id"), (t = i.data.getItem(t)).tooltip && u.tooltip(t.tooltip, {
                                    node: e,
                                    position: u.Position.bottom,
                                    force: !0
                                }))
                            }, !0)
                        }
                    }
                }, [s.el("li", {
                    class: "dhx_ribbon-block dhx_ribbon-block--root"
                }, [s.el("ul.dhx_ribbon-content.dhx_ribbon-content--full-width", this.data.map(function(t) {
                    return "block" === t.type ? i._drawBlock(t, !0) : i._factory(t)
                }, this.data.getRoot(), !1))])])
            }, d.prototype._setRoot = function(t) {
                var e = this.data.getParent(t);
                "block" === this.data.getItem(e).type && (this._currentRoot = t)
            }, d.prototype._drawBlock = function(t, e) {
                var i = this;
                if (!t || t.hidden) return null;
                var n = "dhx_ribbon-block dhx_ribbon-block" + ("col" === t.direction ? "--col" : "--row") + (t.title ? " dhx_ribbon-block--title" : "") + (t.css ? " " + t.css : "") + (e ? " dhx_ribbon-block--indented" : ""),
                    e = this.data.map(function(t) {
                        return "block" === t.type ? i._drawBlock(t) : "separator" !== t.type && "spacer" !== t.type ? i._factory(t) : null
                    }, t.id, !1);
                return s.el("li", {
                    class: n
                }, [s.el("ul.dhx_ribbon-content", e), t.title ? s.el("span.dhx_ribbon-content-label-wrapper", [s.el("span.dhx_ribbon-content-label", t.title)]) : null])
            }, d);

        function d(t, e) {
            var i = r.call(this, t, l.extend({
                navigationType: "click"
            }, e)) || this;
            i._listeners = {
                input: function(t) {
                    var e = c.locate(t);
                    i.data.update(e, {
                        value: t.target.value
                    })
                },
                tooltip: function(t) {
                    var e = c.locateNode(t);
                    e && (t = e.getAttribute("dhx_id"), (t = i.data.getItem(t)).tooltip && u.tooltip(t.tooltip, {
                        node: e,
                        position: u.Position.bottom
                    }))
                }
            }, i._currentRoot = null;
            return i.mount(t, s.create({
                render: function() {
                    return i._draw()
                }
            })), i
        }
        e.Ribbon = o
    }, function(t, i, e) {
        "use strict";

        function n(t) {
            for (var e in t) i.hasOwnProperty(e) || (i[e] = t[e])
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), n(e(220)), n(e(84))
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r, s = i(0),
            a = i(2),
            l = i(84),
            c = i(12),
            u = i(18),
            d = i(1),
            o = (r = u.Navbar, o(h, r), h.prototype.toggle = function() {
                this.config.collapsed ? this.expand() : this.collapse(), this.events.fire(l.SidebarEvents.toggle, [this.config.collapsed]), this.paint()
            }, h.prototype.collapse = function() {
                this.events.fire(l.SidebarEvents.beforeCollapse, []) && (this.config.collapsed = !0, this.events.fire(l.SidebarEvents.afterCollapse, []), this.paint())
            }, h.prototype.expand = function() {
                this.events.fire(l.SidebarEvents.beforeExpand, []) && (this.config.collapsed = !1, this.events.fire(l.SidebarEvents.afterExpand, []), this.paint())
            }, h.prototype.isCollapsed = function() {
                return this.config.collapsed
            }, h.prototype._getFactory = function() {
                return u.createFactory({
                    widget: this,
                    defaultType: "navItem",
                    allowedTypes: ["navItem", "menuItem", "customHTML", "separator", "spacer", "title", "customHTMLButton"],
                    widgetName: "sidebar"
                })
            }, h.prototype._close = function(t) {
                this._activePosition = null, this._currentRoot = null, r.prototype._close.call(this, t)
            }, h.prototype._setRoot = function(t) {
                this.data.getParent(t) === this.data.getRoot() && (this._currentRoot = t)
            }, h.prototype._customHandlers = function() {
                var i = this;
                return {
                    tooltip: function(t) {
                        var e = a.locateNode(t);
                        e && (t = e.getAttribute("dhx_id"), ((t = i.data.getItem(t)).tooltip || i.config.collapsed && t.value) && c.tooltip(t.tooltip || t.value, {
                            node: e,
                            position: c.Position.right
                        }))
                    }
                }
            }, h.prototype._draw = function() {
                var i = this,
                    t = this.config,
                    e = t.width,
                    t = t.minWidth,
                    e = this.config.collapsed ? t : e;
                return s.el("nav.dhx_widget.dhx_sidebar", {
                    class: (this.config.css || "") + (this.config.collapsed ? " dhx_sidebar--minimized" : ""),
                    style: {
                        width: e + "px"
                    }
                }, [s.el("ul.dhx_navbar.dhx_navbar--vertical", {
                    dhx_widget_id: this._uid,
                    tabindex: 0,
                    onclick: this._handlers.onclick,
                    onmousedown: this._handlers.onmousedown,
                    oninput: this._handlers.input,
                    onmouseover: this._handlers.tooltip,
                    _hooks: {
                        didInsert: function(t) {
                            t.el.addEventListener("keyup", function(t) {
                                var e;
                                9 !== t.which || (e = a.locateNode(document.activeElement)) && (t = e.getAttribute("dhx_id"), ((t = i.data.getItem(t)).tooltip || i.config.collapsed && t.value) && c.tooltip(t.tooltip || t.value, {
                                    node: e,
                                    position: c.Position.right,
                                    force: !0
                                }))
                            }, !0)
                        }
                    }
                }, this.data.map(function(t) {
                    return i._factory(t)
                }, this.data.getRoot(), !1))])
            }, h.prototype._getMode = function() {
                return "right"
            }, h.prototype._customInitEvents = function() {
                var t = this;
                this.events.on(u.NavigationBarEvents.inputBlur, function() {
                    t._waitRestore && (t.toggle(), t._waitRestore = !1)
                }), this.events.on(u.NavigationBarEvents.inputFocus, function() {
                    t.config.collapsed && (t._waitRestore = !0, t.toggle())
                })
            }, h);

        function h(t, e) {
            var i = r.call(this, t, d.extend({
                navigationType: "click",
                width: "200",
                minWidth: "44",
                collapsed: !1
            }, e)) || this;
            i._currentRoot = null;
            return i.mount(t, s.create({
                render: function() {
                    return i._draw()
                }
            })), i
        }
        e.Sidebar = o
    }, function(t, i, e) {
        "use strict";

        function n(t) {
            for (var e in t) i.hasOwnProperty(e) || (i[e] = t[e])
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), n(e(222)), n(e(85))
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(t, e)
            }, function(t, e) {
                function i() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }),
            r = this && this.__assign || function() {
                return (r = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            },
            s = this && this.__spreadArrays || function() {
                for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
                for (var n = Array(t), o = 0, e = 0; e < i; e++)
                    for (var r = arguments[e], s = 0, a = r.length; s < a; s++, o++) n[o] = r[s];
                return n
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a, l = i(1),
            c = i(0),
            u = i(3),
            d = i(2),
            h = i(15),
            f = i(33),
            p = i(14),
            _ = i(85),
            o = (a = p.Layout, o(g, a), g.prototype.toVDOM = function() {
                var t = this;
                this._getTabContainer();
                var e, i = null;
                return this.config.noContent || (i = this.getCell(this.config.activeView)) && (e = this._disabled.includes(this.config.activeView) ? " dhx_tabbar-content--disabled" : "", i.config.css ? -1 !== i.config.css.indexOf("dhx_tabbar-content--disabled") ? i.config.css = i.config.css.replace("dhx_tabbar-content--disabled", "") : i.config.css = i.config.css + e : i.config.css = e), c.awaitRedraw().then(function() {
                    t._tabsContainer || t.paint()
                }), c.el("div", {
                    class: "dhx_widget dhx_tabbar" + (this.config.mode ? " dhx_tabbar--" + this.config.mode : "") + (this.config.css ? " " + this.config.css : "")
                }, this._tabsContainer ? s(this._drawTabs(), [i ? i.toVDOM() : null]) : [])
            }, g.prototype.destructor = function() {
                this._hotkeysDestructor(), this._tabsContainer = this._beforeScrollSize = this._afterScrollSize = null, a.prototype.destructor.call(this)
            }, g.prototype.getWidget = function() {
                var e = this;
                return this._cells.filter(function(t) {
                    return e.getActive() === t.id
                })[0].getWidget()
            }, g.prototype.setActive = function(t) {
                var e;
                this._cells.map(function(t) {
                    return t.id
                }).includes(t) && !this._disabled.includes(t) && (e = this.config.activeView, this.config.activeView = t, this.getCell(t).show(), this._focusTab(t), this.events.fire(_.TabbarEvents.change, [t, e]))
            }, g.prototype.getActive = function() {
                return this.config ? this.config.activeView : null
            }, g.prototype.addTab = function(t, e) {
                this.addCell(t, e), 1 !== this._cells.length || t.disabled || this.setActive(this._cells[0].id)
            }, g.prototype.removeTab = function(t) {
                var e = this;
                if (this.events.fire(_.TabbarEvents.beforeClose, [t])) {
                    if (t === this.config.activeView) {
                        var i = this._getEnableTabs().length,
                            n = l.findIndex(this._getEnableTabs(), function(t) {
                                return t.id === e.config.activeView
                            });
                        if (n < 0) return;
                        n === i - 1 && --n, a.prototype.removeCell.call(this, t), 1 === i ? this.config.activeView = null : this.setActive(this._getEnableTabs()[n].id)
                    } else a.prototype.removeCell.call(this, t);
                    this.events.fire(_.TabbarEvents.afterClose, [t]), this.events.fire(_.TabbarEvents.close, [t])
                }
            }, g.prototype.disableTab = function(t) {
                return !(!this._cells.map(function(t) {
                    return t.id
                }).includes(t) || this._disabled.includes(t)) && (this._disabled.push(t), this.paint(), !0)
            }, g.prototype.enableTab = function(e) {
                var t;
                this._disabled.includes(e) && (t = this._disabled.filter(function(t) {
                    return t !== e
                }), this._disabled = s(t), this.paint())
            }, g.prototype.isDisabled = function(t) {
                return this._disabled.includes(t || this.config.activeView)
            }, g.prototype.removeCell = function(t) {
                this.removeTab(t)
            }, g.prototype._initHandlers = function() {
                var u = this;
                a.prototype._initHandlers.call(this), this._handlers = r(r({}, this._handlers), {
                    onTabClick: function(i) {
                        c.awaitRedraw().then(function() {
                            var t, e = d.locate(i, "dhx_tabid");
                            e && !u._disabled.includes(e) && (t = u.config.activeView, i.target.classList.contains("dhx_tabbar-tab__close") ? u.removeTab(e) : (u.config.activeView = e, u.events.fire(_.TabbarEvents.change, [u.config.activeView, t])), u.paint())
                        })
                    },
                    onScrollClick: function(t) {
                        var n, o, r, s, a, l, c = d.locate(t, "mode"),
                            t = {
                                behavior: "smooth"
                            };
                        u._isHorizontalMode() ? (n = u._normalizeSize({
                            width: u._getSizes(u._cells[0].config).width
                        }).width, o = u._normalizeSize({
                            width: u._getSizes(u._cells[u._cells.length - 1].config).width
                        }).width, u._tabsContainer && (r = u._tabsContainer.clientWidth, u._cells.reduce(function(t, e, i) {
                            if (t >= u._tabsContainer.scrollLeft && 0 !== i && "left" === c) n = Math.abs(u._normalizeSize({
                                width: u._getSizes(u._cells[i - 1].config).width
                            }).width - (t - u._tabsContainer.scrollLeft));
                            else {
                                if (!(t > r + u._tabsContainer.scrollLeft && "right" === c)) return t + u._normalizeSize({
                                    width: u._getSizes(e.config).width
                                }).width;
                                o = Math.abs(r + u._tabsContainer.scrollLeft - t)
                            }
                        }, 0)), t.left = "left" === c ? u._tabsContainer.scrollLeft - n : u._tabsContainer.scrollLeft + o) : (s = u._normalizeSize({
                            height: u._getSizes(u._cells[0].config).height
                        }).height, a = u._normalizeSize({
                            height: u._getSizes(u._cells[u._cells.length - 1].config).height
                        }).height, u._tabsContainer && (l = u._tabsContainer.clientHeight, u._cells.reduce(function(t, e, i) {
                            if (t >= u._tabsContainer.scrollTop && 0 !== i && "up" === c) s = Math.abs(u._normalizeSize({
                                height: u._getSizes(u._cells[i - 1].config).height
                            }).height - (t - u._tabsContainer.scrollTop));
                            else {
                                if (!(t > l + u._tabsContainer.scrollTop && "down" === c)) return t + u._normalizeSize({
                                    height: u._getSizes(e.config).height
                                }).height;
                                a = Math.abs(l + u._tabsContainer.scrollTop - t)
                            }
                        }, 0)), t.top = "up" === c ? u._tabsContainer.scrollTop - s : u._tabsContainer.scrollTop + a), d.isIE() ? (u._tabsContainer.scrollLeft = t.left, u._tabsContainer.scrollTop = t.top) : u._tabsContainer.scrollTo(t)
                    },
                    onHeaderScroll: l.debounce(function() {
                        u.paint()
                    }, 10)
                });

                function t(t) {
                    t.preventDefault();
                    var e = u._getEnableTabs(),
                        i = l.findIndex(e, function(t) {
                            return t.id === u.config.activeView
                        }),
                        t = u.config.activeView; - 1 !== i && (i === e.length - 1 ? u.config.activeView = e[0].id : u.config.activeView = e[i + 1].id, u.events.fire(_.TabbarEvents.change, [u.config.activeView, t]), u._focusTab(u.config.activeView), u.paint())
                }

                function e(t) {
                    t.preventDefault();
                    var e = u._getEnableTabs(),
                        i = l.findIndex(e, function(t) {
                            return t.id === u.config.activeView
                        }),
                        t = u.config.activeView; - 1 !== i && (u.config.activeView = (0 === i ? e[e.length - 1] : e[i - 1]).id, u.events.fire(_.TabbarEvents.change, [u.config.activeView, t]), u._focusTab(u.config.activeView), u.paint())
                }
                var i = "right" === this.config.mode || "left" === this.config.mode;
                this._hotkeysDestructor = h.addHotkeys({
                    arrowright: t,
                    arrowup: i ? e : t,
                    arrowleft: e,
                    arrowdown: i ? t : e
                }, function() {
                    return d.locate(document.activeElement, "tabs_id") === u._uid
                })
            }, g.prototype._isHorizontalMode = function() {
                return "bottom" === this.config.mode || "top" === this.config.mode
            }, g.prototype._focusTab = function(t) {
                var e = this;
                c.awaitRedraw().then(function() {
                    e.getRootView().refs[t].el.focus()
                })
            }, g.prototype._getEnableTabs = function() {
                var e = this;
                return this._cells.filter(function(t) {
                    return !e._disabled.includes(t.config.id)
                })
            }, g.prototype._getIndicatorPosition = function() {
                var n = this,
                    o = l.findIndex(this._cells, function(t) {
                        return t.id === n.config.activeView
                    }); - 1 === o && (o = 0);
                var t = this.getCell(this.config.activeView);
                if (this._isHorizontalMode()) {
                    var e = this._normalizeSize({
                            width: this._getSizes(t.config).width
                        }),
                        i = e.width,
                        e = e.unit,
                        r = this._tabsContainer.clientWidth;
                    return {
                        left: 0,
                        transform: "translateX(" + this._cells.reduce(function(t, e, i) {
                            e = n._normalizeSize({
                                width: n._getSizes(e.config).width
                            });
                            return "%" === e.unit && (e.width = r / 100 * e.width), i < o ? t + e.width : t
                        }, 0) + "px)",
                        transition: "all 0.1s ease",
                        width: i + e,
                        height: "2px"
                    }
                }
                var i = this._normalizeSize({
                        height: this._getSizes(t.config).height
                    }),
                    t = i.height,
                    e = i.unit,
                    s = this._tabsContainer.clientHeight;
                return {
                    top: 0,
                    transform: "translateY(" + this._cells.reduce(function(t, e, i) {
                        e = n._normalizeSize({
                            height: n._getSizes(e.config).height
                        });
                        return "%" === e.unit && (e.height = s / 100 * e.height), i < o ? t + e.height : t
                    }, 0) + "px)",
                    transition: "all 0.1s ease",
                    height: t + e,
                    width: "2px"
                }
            }, g.prototype._drawTabs = function() {
                var o = this;
                if (!this._cells.length) return [];
                this._beforeScrollSize = 0, this._afterScrollSize = 0;
                var t = this._isHorizontalMode(),
                    e = t ? (i = this._tabsContainer.clientWidth, e = Math.round(this._cells.reduce(function(t, e) {
                        return o._normalizeSize({
                            width: o._getSizes(e.config).width
                        }).width + t
                    }, 0)), this._tabsContainer && i <= e ? (this._beforeScrollSize = this._tabsContainer.scrollLeft, this._afterScrollSize = e - (i + this._beforeScrollSize)) : i <= e && (this._afterScrollSize = e - i), this._cssManager.add({
                        height: this.config.tabHeight || "45px",
                        top: "top" === this.config.mode ? 0 : ""
                    }, "dhx_tabbar-arrow-style__" + this._uid)) : (i = this._tabsContainer.clientHeight, e = Math.round(this._cells.reduce(function(t, e) {
                        return o._normalizeSize({
                            height: o._getSizes(e.config).height
                        }).height + t
                    }, 0)), this._tabsContainer && i <= e ? (this._beforeScrollSize = this._tabsContainer.scrollTop, this._afterScrollSize = e - (i + this._beforeScrollSize)) : this._afterScrollSize = e - i, this._cssManager.add({
                        width: this.config.tabWidth || "200px",
                        left: "left" === this.config.mode ? 0 : ""
                    }, "dhx_tabbar-arrow-style__" + this._uid)),
                    i = this._cssManager.add(this._getIndicatorPosition(), "dhx_tabbar-header-style__" + this._uid);
                return [c.el(".dhx_tabbar-header__wrapper", {
                    onscroll: this._handlers.onHeaderScroll,
                    class: this.config.tabAlign && this._beforeScrollSize <= 0 && this._afterScrollSize <= 0 ? "dhx_tabbar-header__wrapper-" + this.config.tabAlign : ""
                }, [c.el("ul." + this.config.mode, {
                    tabs_id: this._uid,
                    class: "dhx_tabbar-header ",
                    onclick: this._handlers.onTabClick
                }, s(this._cells.map(function(t) {
                    var e = o.config,
                        i = e.closable,
                        n = e.closeButtons,
                        e = e.activeView;
                    return c.el("li", {
                        class: "dhx_tabbar-tab" + (t.config.tabCss ? " " + t.config.tabCss : ""),
                        dhx_tabid: t.id,
                        role: "presentation",
                        style: o._getSizes(t.config)
                    }, [c.el("button.dhx_button.dhx_tabbar-tab-button" + (e === t.id ? ".dhx_tabbar-tab-button--active" : "") + (o._disabled.includes(t.config.id) ? ".dhx_tabbar-tab-button--disabled" : ""), {
                        tabindex: "0",
                        "aria-controls": t.id,
                        id: "tab-content-" + t.id,
                        "aria-selected": "" + (e === t.id),
                        _ref: t.id.toString()
                    }, [c.el("span.dhx_button__text", t.config.tab)]), Array.isArray(i) && i.includes(t.config.id) && !o._disabled.includes(t.config.id) || i && "boolean" == typeof i && !o._disabled.includes(t.config.id) || n && "boolean" == typeof n && !o._disabled.includes(t.config.id) ? c.el("div.dhx_tabbar-tab__close.dxi--small.dxi.dxi-close", {
                        tabindex: 0,
                        role: "button",
                        "aria-pressed": "false"
                    }) : null])
                }), [c.el(".dhx_tabbar-header-active", {
                    class: i
                })]))]), 0 < this._beforeScrollSize && c.el(".dhx_tabbar_scroll", {
                    class: "dxi dxi-chevron-" + (t ? "left" : "up") + " arrow-" + (t ? "left" : "up") + " " + e,
                    _key: "startArrow",
                    onclick: this._handlers.onScrollClick,
                    mode: t ? "left" : "up"
                }), 0 < this._afterScrollSize && c.el(".dhx_tabbar_scroll", {
                    class: "dxi dxi-chevron-" + (t ? "right" : "down") + " arrow-" + (t ? "right" : "down") + " " + e,
                    _key: "endArrow",
                    onclick: this._handlers.onScrollClick,
                    mode: t ? "right" : "down"
                })]
            }, g.prototype._getSizes = function(t) {
                "number" == typeof t.tabWidth && (t.tabWidth = t.tabWidth + "px"), "number" == typeof t.tabHeight && (t.tabHeight = t.tabHeight + "px"), "number" == typeof this.config.tabWidth && (this.config.tabWidth = this.config.tabWidth + "px"), "number" == typeof this.config.tabHeight && (this.config.tabHeight = this.config.tabHeight + "px");
                var e = this.config.tabWidth || (this._isHorizontalMode() ? d.getStrSize(t.tab.toUpperCase(), {
                        fontWeight: "500"
                    }).width + 50 + "px" : "200px"),
                    i = this.config.tabHeight || "45px";
                return this._isHorizontalMode() ? void 0 !== t.tabWidth && (e = t.tabWidth) : void 0 !== t.tabHeight && (i = t.tabHeight), (this.config.tabAutoWidth && !1 !== t.tabAutoWidth || t.tabAutoWidth) && void 0 === this.config.tabWidth && void 0 === t.tabWidth && (e = this._getTabAutoWidth()), (this.config.tabAutoHeight && !1 !== t.tabAutoHeight || t.tabAutoHeight) && void 0 === this.config.tabHeight && void 0 === t.tabHeight && (i = this._getTabAutoHeight()), {
                    width: e,
                    height: i
                }
            }, g.prototype._normalizeSize = function(t) {
                var e = {};
                if (1 <= Object.keys(t).length)
                    for (var i in t) "number" == typeof t[i] ? e.unit = "px" : (t[i].includes("%") ? (e[i] = t[i].slice(0, -1), e.unit = "%") : t[i].includes("px") && (e[i] = t[i].slice(0, -2), e.unit = "px"), e[i] = parseFloat(e[i]));
                return e
            }, g.prototype._getTabAutoWidth = function() {
                var e = this,
                    t = this._tabsContainer.clientWidth,
                    i = 0,
                    n = 0;
                return this._cells.forEach(function(t) {
                    t.config.tabAutoWidth || e.config.tabAutoWidth && !1 !== t.config.tabAutoWidth ? t.config.tabWidth ? i += e._normalizeSize({
                        width: t.config.tabWidth
                    }).width : n++ : i += e._normalizeSize({
                        width: e._getSizes(t.config).width
                    }).width
                }), (t - i) / n + "px"
            }, g.prototype._getTabAutoHeight = function() {
                var e = this,
                    t = this._tabsContainer.clientHeight,
                    i = 0,
                    n = 0;
                return this._cells.forEach(function(t) {
                    t.config.tabAutoHeight || e.config.tabAutoHeight && !1 !== t.config.tabAutoHeight ? t.config.tabHeight ? i += e._normalizeSize({
                        height: t.config.tabHeight
                    }).height : n++ : i += e._normalizeSize({
                        height: e._getSizes(t.config).height
                    }).height
                }), (t - i) / n + "px"
            }, g.prototype._getTabContainer = function() {
                var t, e = this;
                this._tabsContainer ? this.getRootNode() ? (t = this.getRootNode() && this.getRootNode().getElementsByClassName("dhx_tabbar-header__wrapper")[0]) && this._tabsContainer !== t && (this._tabsContainer = t, this.paint()) : c.awaitRedraw().then(function() {
                    return e.paint()
                }) : (this._tabsContainer = this.getRootNode(), this.paint())
            }, g);

        function g(t, e) {
            var i, n = a.call(this, t, l.extend({
                mode: "top"
            }, e)) || this;
            return n._cssManager = new f.CssManager, n.config.disabled && (e = n.config.disabled, i = n._cells.map(function(t) {
                return t.id
            }), Array.isArray(e) ? e.forEach(function(t) {
                i.includes(t) && !n._disabled.includes(t) && n._disabled.push(t)
            }) : i.includes(e) && !n._disabled.includes(e) && n._disabled.push(e), n.paint()), n.events = new u.EventSystem(n), n
        }
        e.Tabbar = o
    }, function(t, i, e) {
        "use strict";

        function n(t) {
            for (var e in t) i.hasOwnProperty(e) || (i[e] = t[e])
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), n(e(224)), n(e(86)), n(e(87))
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(t, e)
            }, function(t, e) {
                function i() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }),
            c = this && this.__assign || function() {
                return (c = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = i(1),
            u = i(0),
            s = i(3),
            a = i(2),
            l = i(21),
            d = i(4),
            h = i(5),
            f = i(86),
            p = i(225),
            _ = i(87);

        function g(t, e) {
            return t ? e ? "openFolder" : "folder" : "file"
        }
        var v, o = (v = d.View, o(m, v), m.prototype.focusItem = function(t) {
            var e = this;
            this._focusId = t, this.data.eachParent(t, function(t) {
                t.opened || e.expand(t.id)
            }), this.events.fire(_.TreeEvents.focusChange, [this.data.getIndex(t), t]), this.paint()
        }, m.prototype.destructor = function() {
            this.events.clear(), this.unmount()
        }, m.prototype.editItem = function(t, e) {
            var i;
            this._editor.isEditable() || (i = this.data.getItem(t), this.events.fire(_.TreeEvents.beforeEditStart, [i.value, t]) && (this.data.update(t, {
                $edit: !0,
                $editConfig: e
            }, !0), this.events.fire(_.TreeEvents.afterEditStart, [i.value, t])))
        }, m.prototype.getState = function() {
            var e = {};
            return this.data.eachChild(this._root, function(t) {
                e[t.id] = {
                    open: t.opened,
                    selected: t.$mark
                }
            }, !0), e
        }, m.prototype.setState = function(e) {
            this.data.eachChild(this._root, function(t) {
                t.id in e && (t.opened = e[t.id].open, t.$mark = e[t.id].selected)
            }, !0), this.paint()
        }, m.prototype.toggle = function(t) {
            var e = this.data.getItem(t);
            e.$autoload ? (this.data.loadItems(t), this.data.update(t, {
                $autoload: !1,
                opened: !0
            })) : e.opened ? this.collapse(t) : this.expand(t)
        }, m.prototype.getChecked = function() {
            var e = [];
            return this.data.eachChild(this._root, function(t) {
                t.$mark === _.SelectStatus.selected && e.push(t.id)
            }), e
        }, m.prototype.checkItem = function(t) {
            t && this.data.getItem(t) && (this._updateItemCheck(t, _.SelectStatus.selected), this.paint())
        }, m.prototype.collapse = function(t) {
            this.data.haveItems(t) && this.events.fire(_.TreeEvents.beforeCollapse, [t]) && (this.data.update(t, {
                opened: !1
            }), this.events.fire(_.TreeEvents.afterCollapse, [t]))
        }, m.prototype.collapseAll = function() {
            var e = this;
            this.data.eachChild(this._root, function(t) {
                t = t.id;
                return e.collapse(t)
            }, !0)
        }, m.prototype.expand = function(t) {
            this.data.haveItems(t) && this.events.fire(_.TreeEvents.beforeExpand, [t]) && (this.data.update(t, {
                opened: !0
            }), this.events.fire(_.TreeEvents.afterExpand, [t]))
        }, m.prototype.expandAll = function() {
            var e = this;
            this.data.eachChild(this._root, function(t) {
                t = t.id;
                return e.expand(t)
            }, !0)
        }, m.prototype.uncheckItem = function(t) {
            t && this.data.getItem(t) && (this._updateItemCheck(t, _.SelectStatus.unselected), this.paint())
        }, m.prototype.close = function(t) {
            this.collapse(t)
        }, m.prototype.closeAll = function() {
            this.collapseAll()
        }, m.prototype.open = function(t) {
            this.expand(t)
        }, m.prototype.openAll = function() {
            this.expandAll()
        }, m.prototype.unCheckItem = function(t) {
            this.uncheckItem(t)
        }, m.prototype._draw = function() {
            this._getRightPos();
            var t = this._drawItems(this.data.getRoot());
            return u.el("ul", c({
                class: "dhx_widget dhx_tree" + (this._isSelectionActive ? "" : " dhx_tree--no-selection ") + (this.config.css ? " " + this.config.css : ""),
                dhx_widget_id: this._uid
            }, this._handlers), t)
        }, m.prototype._initEvents = function() {
            var r = this;
            this.data.events.on(h.DataEvents.change, function(t, e, i) {
                "remove" === e && r._updateParents(i.parent, !0), "add" === e && r._updateParents(t), r.paint()
            }), this.data.events.on(h.DataEvents.beforeRemove, function(t) {
                var e, i, n = t.id,
                    o = t.parent;
                n === r._focusId && (e = r.data.findAll(function(t) {
                    return t.parent === o
                }), i = o, 1 < e.length && (t = e.findIndex(function(t) {
                    return t.id === n
                }), i = e[t === e.length - 1 ? e.length - 2 : t + 1].id), r.selection.remove(n), r.selection.add(i), r.focusItem(i))
            }), this._editor.events.on(f.EditorEvents.begin, function(t) {
                t === r._uid && (r.config.$editable = !0)
            }), this._editor.events.on(f.EditorEvents.end, function(t, e, i) {
                return !!r.events.fire(_.TreeEvents.beforeEditEnd, [i, e]) && (r._uid === t && r.data.update(e, {
                    $edit: !1,
                    value: i
                }), r.config.$editable = !1, void r.events.fire(_.TreeEvents.afterEditEnd, [i, e]))
            }), this.events.on(h.DragEvents.beforeDrag, function(t, e, i) {
                var n = t.start,
                    t = r.data.getItem(n),
                    n = g(r.config.isFolder ? r.config.isFolder(t) : r.data.haveItems(t.id), t.opened),
                    n = (t.icon || r.config.icon)[n] || r.config.icon[n];
                i.innerHTML = '<div class="dhx_tree-list-item__icon ' + n + '"></div><span class="dhx_tree-list-item__text">' + (t.text || t.value) + "</span>"
            }), this.events.on(h.DragEvents.canDrop, function(t) {
                var e = t.target,
                    t = t.dropPosition,
                    t = "complex" === r.config.dropBehaviour ? "top" === t ? "dhx_tree-drop--top" : "bottom" === t ? "dhx_tree-drop--bottom" : "dhx_tree-drop--in-folder" : "child" === r.config.dropBehaviour ? "dhx_tree-drop--in-folder" : "dhx_tree-drop--bottom";
                r.data.exists(e) && r.data.update(e, {
                    $drophere: t
                }, !0), r.paint()
            }), this.events.on(h.DragEvents.cancelDrop, function(t) {
                t = t.target;
                r.data.exists(t) && r.data.update(t, {
                    $drophere: null
                }, !0)
            }), this.events.on(h.DragEvents.afterDrop, function(t) {
                var e = t.target,
                    t = t.dropPosition;
                ("child" === r.config.dropBehaviour || "complex" === r.config.dropBehaviour && "in" === t) && r.expand(e)
            }), this.events.on(h.DragEvents.dragStart, function() {
                r._isSelectionActive = !1, r.paint()
            }), this.events.on(h.DragEvents.afterDrag, function(t) {
                r._isSelectionActive = !0, r._isDraget = !0, r.data.exists(t.start) && r.selection.add(t.start), r.paint()
            }), this.events.on(_.TreeEvents.itemClick, function(t) {
                r._focusId = t, r.paint()
            }), this.events.on(l.SelectionEvents.afterSelect, function() {
                return r.paint()
            }), this.events.on(l.SelectionEvents.afterUnSelect, function() {
                return r.paint()
            })
        }, m.prototype._initHandlers = function() {
            var i = this;
            this._handlers = {
                onmouseleave: function(t) {
                    h.dragManager._cancelCanDrop(t)
                },
                onclick: function(t) {
                    var e;
                    i._isDraget ? i._isDraget = !1 : (e = a.locate(t)) && (t.target.classList.contains("dhx_tree-toggle-button") ? i.toggle(e) : t.target.classList.contains("dhx_tree-checkbox") ? i.data.getItem(e).$mark === _.SelectStatus.unselected ? i.checkItem(e) : i.uncheckItem(e) : (i.events.fire(_.TreeEvents.itemClick, [e, t]), i.data.exists(e) && i.selection.add(e)))
                },
                ondblclick: function(t) {
                    i._dblClick(t)
                },
                ondragstart: function(t) {
                    t.preventDefault()
                },
                onmousedown: function(t) {
                    i._dragStart(t)
                },
                ontouchstart: function(t) {
                    i._touch.timer = setTimeout(function() {
                        i._dragStart(t)
                    }, i._touch.duration), i._touch.timeStamp ? (i._touch.dblDuration >= i._touch.timeStamp - +t.timeStamp.toFixed() && i._dblClick(t), i._touch.timeStamp = null) : i._touch.timeStamp = +t.timeStamp.toFixed(), setTimeout(function() {
                        i._touch.timeStamp = null
                    }, i._touch.dblDuration)
                },
                ontouchmove: function(t) {
                    i._touch.start && t.preventDefault(), i._clearTouchTimer()
                },
                ontouchend: function() {
                    i._touch.start = !1, i._clearTouchTimer()
                },
                oncontextmenu: function(t) {
                    var e = a.locate(t);
                    e && (i.events.fire(_.TreeEvents.itemRightClick, [e, t]), i.events.fire(_.TreeEvents.itemContextMenu, [e, t]))
                }
            }
        }, m.prototype._dblClick = function(t) {
            var e = a.locate(t);
            e && (this.events.fire(_.TreeEvents.itemDblClick, [e, t]), this.config.editable && this.editItem(e))
        }, m.prototype._clearTouchTimer = function() {
            this._touch.timer && (clearTimeout(this._touch.timer), this._touch.timer = null)
        }, m.prototype._dragStart = function(t) {
            this.config.dragMode && "target" !== this.config.dragMode && (this._editor.isEditable() || (this._touch.start = !0, h.dragManager.onMouseDown(t)))
        }, m.prototype._getRightPos = function(t, e) {
            if (void 0 === e && (e = 0), !t)
                for (var i = this.data.getRoot(), n = 0, o = this.data.findAll(function(t) {
                        return t.parent === i
                    }); n < o.length; n++) {
                    var r = o[n];
                    return this._getRightPos(r.id, e)
                }
            t = this.data.getItem(t);
            if (t && (this._right = e, this.data.haveItems(t.id) && t.opened && t.items))
                for (var s = 0, a = t.items; s < a.length; s++) {
                    var l = a[s];
                    this._getRightPos(l.id, e + 1)
                }
        }, m.prototype._drawItems = function(t, a) {
            var l = this;
            return void 0 === a && (a = 0), this.data.getRawData(0, -1, null, 0, t).map(function(t) {
                if (t) {
                    var e, i, n, o = !!l.config.isFolder && l.config.isFolder(t);
                    (t.$autoload || l.data.haveItems(t.id)) && (o = !0, e = u.el("div", {
                        class: "dxi dxi-menu-right dhx_tree-toggle-button"
                    }, ""), t.opened && (e = u.el("div", {
                        class: "dxi dxi-menu-down dhx_tree-toggle-button dhx_tree-toggle-button--open"
                    }, ""), i = l._drawItems(t.id, a + 1))), t.checkbox && (s = t.$mark === _.SelectStatus.indeterminate ? "dxi-minus-box" : t.$mark === _.SelectStatus.selected ? "dxi-checkbox-marked" : "dxi-checkbox-blank-outline", n = u.el("div", {
                        class: "dhx_tree-checkbox dxi " + s
                    }));
                    var r = g(o, t.opened),
                        s = (t.icon || l.config.icon)[r] || l.config.icon[r],
                        r = t.$edit ? l._editor.edit(l._uid, c({
                            item: t
                        }, t.$editConfig)) : u.el("span", {
                            class: "dhx_tree-list-item__text"
                        }, t.text || t.value);
                    return o ? u.el("li", {
                        class: "dhx_tree-list-item dhx_tree-list-item--parent" + (t.css ? " " + t.css : ""),
                        dhx_id: t.id,
                        _key: t.id
                    }, [u.el("div.dhx_tree-folder", {
                        class: (t.id === l._focusId ? " dhx_tree-folder--focused" : "") + (t.$selected ? " dhx_tree-folder--selected" : "") + (t.$drophere ? " " + t.$drophere : ""),
                        style: {
                            left: -20 * a + "px",
                            right: 0,
                            "margin-left": 20 * a + "px"
                        }
                    }, [e, u.el("div.dhx_tree-list-item__content", [n, u.el("div", {
                        class: "dhx_tree-list-item__icon " + s
                    }), r])]), i && u.el("ul.dhx_tree-list", i)]) : u.el("li", {
                        class: "dhx_tree-list__item dhx_tree-list-item" + (t.id === l._focusId ? " dhx_tree-list-item--focused" : "") + (t.$selected ? " dhx_tree-list-item--selected" : "") + (t.$drophere ? " " + t.$drophere : "") + (o ? "dhx_tree-list-item--folder" : ""),
                        style: {
                            left: -20 * a + "px",
                            right: 0,
                            "margin-left": 20 * a + "px"
                        },
                        dhx_id: t.id,
                        level: a
                    }, [e, u.el("div", {
                        class: "dhx_tree-list-item__content"
                    }, [n, u.el("div", {
                        class: "dhx_tree-list-item__icon " + s
                    }), r])])
                }
            })
        }, m.prototype._updateItemCheck = function(t, e) {
            this.data.update(t, {
                $mark: e
            }, !0), this.data.eachChild(t, function(t) {
                return t.$mark = e
            }), this._updateParents(t)
        }, m.prototype._updateParents = function(t, e) {
            var n = this;
            void 0 === e && (e = !1), t !== this._root && this.data.eachParent(t, function(t) {
                var e = 0,
                    i = 0;
                n.data.eachChild(t.id, function(t) {
                    if (t.checkbox) switch (t.$mark) {
                        case _.SelectStatus.unselected:
                            i++;
                            break;
                        case _.SelectStatus.selected:
                            e++
                    }
                }, !0), t.$mark = 0 !== e && 0 !== i ? _.SelectStatus.indeterminate : 0 === e && 0 !== i ? _.SelectStatus.unselected : _.SelectStatus.selected
            }, e)
        }, m);

        function m(t, e) {
            void 0 === e && (e = {});
            var i = v.call(this, t, r.extend({
                dropBehaviour: "child",
                icon: {
                    file: "dxi dxi-file-outline",
                    folder: "dxi dxi-folder",
                    openFolder: "dxi dxi-folder-open"
                },
                keyNavigation: !0,
                editable: !1,
                selection: !0,
                rootId: "string" == typeof t && t
            }, e)) || this;
            i._touch = {
                duration: 350,
                dblDuration: 300,
                timer: null,
                start: !1,
                timeStamp: null
            }, i.config.editable = i.config.editable || i.config.editing;
            e = function(t) {
                return t.$mark = _.SelectStatus.unselected, t.checkbox = i.config.checkbox, t.$autoload = Boolean(t.items && "string" == typeof i.config.autoload), t.$editor = !1, t
            };
            Array.isArray(i.config.data) ? (i.events = new s.EventSystem(i), i.data = new h.TreeCollection({
                autoload: i.config.autoload,
                init: e,
                rootId: i.config.rootId || t
            }, i.events), i.data.parse(i.config.data)) : i.config.data && i.config.data.events ? (i.data = i.config.data, i.data.config.init = e, i.events = i.data.events, i.events.context = i) : (i.events = new s.EventSystem(i), i.data = new h.TreeCollection({
                autoload: i.config.autoload,
                init: e,
                rootId: i.config.rootId || t
            }, i.events)), i._isSelectionActive = !0, i.selection = new h.Selection({
                disabled: !i.config.selection
            }, i.data, i.events), i.config.keyNavigation && new p.KeyManager(i), i._editor = f.default, i._initEvents(), i._initHandlers(), i.config.dragMode && h.dragManager.setItem(i._uid, i), i._root = i.data.getRoot();
            return i.mount(t, u.create({
                render: function() {
                    return i._draw()
                }
            })), i
        }
        e.Tree = o
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(15),
            r = i(1),
            o = i(2),
            i = (s.prototype.addHotKey = function(t, e) {
                var i = this;
                n.keyManager.addHotKey(t, function(t) {
                    i.isFocus() && !i._tree.config.$editable && e(t)
                })
            }, s.prototype.isFocus = function() {
                return this._focusedId === this._tree._uid
            }, s.prototype._initFocusHandlers = function() {
                var e = this;
                document.addEventListener("click", function(t) {
                    e._focusedId = o.locate(t, "dhx_widget_id")
                })
            }, s.prototype._initHotKeys = function() {
                var i = this;
                this.addHotKey("arrowLeft", function(t) {
                    t.preventDefault();
                    var e = i._getFocused(),
                        t = i._tree.data.getParent(e);
                    i._tree.data.getRoot() !== t ? !i._tree.data.getItem(e).opened ? i._tree.focusItem(t) : e !== i._tree.data.getRoot() && i._tree.collapse(e) : i._tree.collapse(e)
                }), this.addHotKey("arrowRight", function(t) {
                    t.preventDefault();
                    t = i._getFocused();
                    i._tree.data.haveItems(t) && i._tree.expand(t)
                }), this.addHotKey("arrowUp", function(t) {
                    t.preventDefault();
                    var e = i._getFocused(),
                        t = i._tree.data,
                        t = i._getClosestTop(e, t);
                    t && i._tree.focusItem(t)
                }), this.addHotKey("arrowDown", function(t) {
                    t.preventDefault();
                    var e = i._getFocused(),
                        t = i._tree.data,
                        t = i._getClosestBot(e, t);
                    t && i._tree.focusItem(t)
                }), this.addHotKey("enter", function(t) {
                    var e = i._getFocused();
                    e && i._tree.selection.add(e)
                })
            }, s.prototype._getClosestBot = function(e, t, i) {
                void 0 === i && (i = !1);
                var n = t.getItem(e);
                if (t.haveItems(e) && n.opened && !i) return t.getItems(e)[0].id;
                var o = t.getParent(e),
                    n = t.getItems(o),
                    i = r.findIndex(n, function(t) {
                        return t.id === e
                    });
                return i + 1 < n.length ? n[i + 1].id : o === t.getRoot() ? null : this._getClosestBot(o, t, !0)
            }, s.prototype._getClosestTop = function(t, e) {
                var i = e.getIndex(t),
                    t = e.getParent(t);
                if (0 < i) {
                    var n = e.getItems(t)[i - 1];
                    if (!e.haveItems(n.id) || !n.opened) return n.id;
                    for (; e.haveItems(n.id) && n.opened;) var o = e.getItems(n.id),
                        n = o[o.length - 1];
                    return n.id
                }
                return t === e.getRoot() ? null : t
            }, s.prototype._getFocused = function() {
                var t = this._tree._focusId;
                if (t) return t;
                t = this._tree.data.getRoot();
                return this._tree.data.getItems(t)[0].id
            }, s);

        function s(t) {
            this._tree = t, this._initFocusHandlers(), this._initHotKeys()
        }
        e.KeyManager = i
    }, function(t, i, e) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            function(t) {
                for (var e in t) i.hasOwnProperty(e) || (i[e] = t[e])
            }(e(227))
    }, function(t, p, _) {
        "use strict";
        (function(t) {
            Object.defineProperty(p, "__esModule", {
                value: !0
            });
            var l = _(1),
                e = _(0),
                i = _(3),
                o = _(15),
                r = _(14),
                s = _(27),
                f = _(228),
                c = _(229),
                a = _(2),
                u = _(18);

            function n(r) {
                return new t(function(e) {
                    var i = function() {
                            document.removeEventListener("mousemove", o), document.removeEventListener("mouseup", i), e(!1)
                        },
                        n = setTimeout(function() {
                            i()
                        }, 1e3),
                        o = function(t) {
                            (4 < Math.abs(t.pageX - r.pageX) || 4 < Math.abs(t.pageY - r.pageY)) && (document.removeEventListener("mousemove", o), document.removeEventListener("mouseup", i), clearTimeout(n), e({
                                x: r.pageX,
                                y: r.pageY
                            }))
                        };
                    document.addEventListener("mousemove", o), document.addEventListener("mouseup", i)
                })
            }
            var d = (h.prototype.paint = function() {
                this._layout.paint()
            }, h.prototype.setFullScreen = function() {
                this.setSize(window.innerWidth, window.innerHeight), this.setPosition(window.pageXOffset, window.pageYOffset)
            }, h.prototype.setSize = function(t, e) {
                var i = {
                        width: this._popup.offsetWidth,
                        height: this._popup.offsetHeight
                    },
                    n = {
                        width: i.width,
                        height: i.height
                    };
                l.isDefined(t) && (this.config.width = n.width = t), l.isDefined(e) && (this.config.height = n.height = e), this._popup.style.width = n.width + "px", this._popup.style.height = n.height + "px", this.events.fire(f.WindowEvents.resize, [n, i, {
                    left: !0,
                    top: !0,
                    bottom: !0,
                    right: !0
                }])
            }, h.prototype.getSize = function() {
                return {
                    width: this._popup.offsetWidth,
                    height: this._popup.offsetHeight
                }
            }, h.prototype.setPosition = function(t, e) {
                var i = {
                        left: this._popup.offsetLeft,
                        top: this._popup.offsetTop
                    },
                    n = {
                        left: i.left,
                        top: i.top
                    };
                l.isDefined(t) && (this.config.left = n.left = t), l.isDefined(e) && (this.config.top = n.top = e), this._popup.style.left = n.left + "px", this._popup.style.top = n.top + "px", this.events.fire(f.WindowEvents.resize, [n, i, {
                    left: !0,
                    top: !0,
                    bottom: !0,
                    right: !0
                }])
            }, h.prototype.getPosition = function() {
                return {
                    left: this._popup.offsetLeft,
                    top: this._popup.offsetTop
                }
            }, h.prototype.show = function(t, e) {
                if (void 0 === t && (t = this.config.left), void 0 === e && (e = this.config.top), this.events.fire(f.WindowEvents.beforeShow, [{
                        left: t,
                        top: e
                    }])) {
                    this.isVisible() && this.hide(), c.default.setActive(this._uid), this._popup.className = "dhx_popup dhx_widget" + (this.config.modal ? " dhx_popup--window_modal" : " dhx_popup--window") + (this.config.css ? " " + this.config.css : ""), this._popup.style.position = this.config.modal ? "fixed" : "absolute";
                    var i = this._getContainerParams(),
                        n = i.containerInnerWidth,
                        o = i.containerInnerHeight,
                        r = i.containerXOffset,
                        s = i.containerYOffset,
                        a = this.config.width = this.config.width || this.config.minWidth || n / 2,
                        i = this.config.height = this.config.height || this.config.minHeight || o / 2;
                    if (this.config.left = t = l.isDefined(t) ? t : (n - a) / (this.config.modal ? 2 : 2 + r), this.config.top = e = l.isDefined(e) ? e : (o - i) / (this.config.modal ? 2 : 2 + s), this._isActive) return this._popup.style.left = t + "px", void(this._popup.style.top = e + "px");
                    this.config.viewportOverflow && c.default.openFreeWindow(this.config.node), this.config.modal && this._blockScreen(), this._popup.style.width = a + "px", this._popup.style.height = i + "px", this._popup.style.left = t + "px", this._popup.style.top = e + "px", this.config.node.appendChild(this._popup), this._popup.focus(), this._isActive = !0, this.events.fire(f.WindowEvents.afterShow, [{
                        left: t,
                        top: e
                    }])
                }
            }, h.prototype.hide = function() {
                this._hide()
            }, h.prototype._hide = function(t) {
                this._isActive && this.events.fire(f.WindowEvents.beforeHide, [{
                    left: this.config.left,
                    top: this.config.top
                }, t]) && (this.config.viewportOverflow && c.default.closeFreeWindow(this.config.node), this._blocker && (this.config.node.removeChild(this._blocker), this.config.closable && o.keyManager.removeHotKey(null, this), this._blocker = null), this.config.node.removeChild(this._popup), this._isActive = !1, this.events.fire(f.WindowEvents.afterHide, [{
                    left: this.config.left,
                    top: this.config.top
                }, t]))
            }, h.prototype.isVisible = function() {
                return this._isActive
            }, h.prototype.getWidget = function() {
                return this._layout.getCell("content").getWidget()
            }, h.prototype.getContainer = function() {
                return this.getRootView().data._container
            }, h.prototype.attach = function(t, e) {
                this._layout.getCell("content").attach(t, e)
            }, h.prototype.attachHTML = function(t) {
                this._layout.getCell("content").attach(function() {
                    return e.el(".dhx_window__inner-html-content", {
                        ".innerHTML": t
                    })
                })
            }, h.prototype.getRootView = function() {
                return this._layout.getRootView()
            }, h.prototype.destructor = function() {
                this._isActive && this.hide(), this.header && this.header.destructor(), this.footer && this.footer.destructor(), this._layout.destructor(), this._popup = null
            }, h.prototype.fullScreen = function() {
                this.setFullScreen()
            }, h.prototype._initHandlers = function() {
                var i = this;
                this._handlers = {
                    headerDblClick: function(t) {
                        return i.events.fire(f.WindowEvents.headerDoubleClick, [t])
                    },
                    move: function(t) {
                        3 !== t.which && (t.preventDefault(), c.default.setActive(i._uid), n(t).then(function(t) {
                            t && i._startDrag(t.x, t.y)
                        }))
                    },
                    resize: {
                        ".dhx_window-resizer": function(e) {
                            3 !== e.which && (e.preventDefault(), c.default.setActive(i._uid), n(e).then(function(t) {
                                t && ((t = e.target.classList).contains("dhx_window-resizer--left") ? i._startResize({
                                    left: !0
                                }) : t.contains("dhx_window-resizer--right") ? i._startResize({
                                    right: !0
                                }) : t.contains("dhx_window-resizer--top") ? i._startResize({
                                    top: !0
                                }) : t.contains("dhx_window-resizer--bottom") ? i._startResize({
                                    bottom: !0
                                }) : t.contains("dhx_window-resizer--bottom_left") ? i._startResize({
                                    left: !0,
                                    bottom: !0
                                }) : t.contains("dhx_window-resizer--bottom_right") ? i._startResize({
                                    bottom: !0,
                                    right: !0
                                }) : t.contains("dhx_window-resizer--top_left") ? i._startResize({
                                    top: !0,
                                    left: !0
                                }) : t.contains("dhx_window-resizer--top_right") && i._startResize({
                                    top: !0,
                                    right: !0
                                }))
                            }))
                        }
                    },
                    setActive: function() {
                        c.default.setActive(i._uid)
                    }
                }
            }, h.prototype._initUI = function() {
                var i = this,
                    t = [],
                    e = (this.config.header || this.config.title || this.config.closable || this.config.movable) && !1 !== this.config.header;
                e && t.push({
                    id: "header",
                    height: "content",
                    css: "dhx_window-header " + (this.config.movable ? "dhx_window-header--movable" : ""),
                    on: {
                        mousedown: this.config.movable && this._handlers.move,
                        dblclick: this._handlers.headerDblClick
                    }
                }), t.push({
                    id: "content",
                    css: e ? "dhx_window-content" : "dhx_window-content-without-header"
                }), this.config.footer && t.push({
                    id: "footer",
                    height: "content",
                    css: "dhx_window-footer"
                }), this.config.resizable && t.push({
                    id: "resizers",
                    height: "content",
                    css: "resizers"
                });
                var n, t = this._layout = new r.Layout(this._popup, {
                    css: "dhx_window" + (this.config.modal ? " dhx_window--modal" : ""),
                    rows: t,
                    on: {
                        click: this._handlers.setActive
                    },
                    id: this._uid
                });
                e && (n = this.header = new s.Toolbar, this.config.title && this.header.data.add({
                    type: "title",
                    value: this.config.title,
                    id: "title",
                    css: "title_max"
                }), this.config.closable && (this.header.data.add({
                    type: "spacer"
                }), this.header.data.add({
                    id: "close",
                    type: "button",
                    view: "link",
                    size: "medium",
                    color: "secondary",
                    circle: !0,
                    icon: "dxi dxi-close"
                }), n.events.on(u.NavigationBarEvents.click, function(t, e) {
                    "close" === t && i._hide(e)
                })), t.getCell("header").attach(n)), this.config.footer && (n = this.footer = new s.Toolbar, t.getCell("footer").attach(n)), this.config.resizable && t.getCell("resizers").attach(function() {
                    return i._drawResizers()
                })
            }, h.prototype._drawResizers = function() {
                return e.el(".dhx-resizers", {
                    onmousedown: this._handlers.resize
                }, [e.el(".dhx_window-resizer.dhx_window-resizer--left", {
                    _ref: "left"
                }), e.el(".dhx_window-resizer.dhx_window-resizer--right", {
                    _ref: "right"
                }), e.el(".dhx_window-resizer.dhx_window-resizer--bottom", {
                    _ref: "bottom"
                }), e.el(".dhx_window-resizer.dhx_window-resizer--top", {
                    _ref: "top"
                }), e.el(".dhx_window-resizer.dhx_window-resizer--bottom_right", {
                    _ref: "bottomRight"
                }), e.el(".dhx_window-resizer.dhx_window-resizer--bottom_left", {
                    _ref: "bottomLeft"
                }), e.el(".dhx_window-resizer.dhx_window-resizer--top_right", {
                    _ref: "topRight"
                }), e.el(".dhx_window-resizer.dhx_window-resizer--top_left", {
                    _ref: "topLeft"
                })])
            }, h.prototype._startDrag = function(t, e) {
                var a = this;
                this.config.node.classList.add("dhx_window--stop_selection");

                function i(t) {
                    var e, i, n, o = {
                            left: a._popup.offsetLeft,
                            top: a._popup.offsetTop
                        },
                        r = t.pageX - l,
                        s = t.pageY - c;
                    a.config.viewportOverflow || (e = (n = a._getContainerParams()).containerXOffset, i = n.containerYOffset, t = n.containerInnerWidth, n = n.containerInnerHeight, r < e ? r = e : e + t - u < r && (r = e + t - u), s < i ? s = i : i + n - d < s && (s = i + n - d)), a.config.left = r, a.config.top = s, a._popup.style.left = r + "px", a._popup.style.top = s + "px", s = {
                        left: r,
                        top: s
                    }, a.events.fire(f.WindowEvents.move, [s, o, {
                        left: !0,
                        top: !0,
                        bottom: !0,
                        right: !0
                    }])
                }
                var l = t - this._popup.offsetLeft,
                    c = e - this._popup.offsetTop,
                    u = this._popup.offsetWidth,
                    d = this._popup.offsetHeight,
                    n = function() {
                        document.removeEventListener("mouseup", n), document.removeEventListener("mousemove", i), a.config.node.classList.remove("dhx_window--stop_selection")
                    };
                document.addEventListener("mouseup", n), document.addEventListener("mousemove", i)
            }, h.prototype._startResize = function(r) {
                var t, e, s = this,
                    a = 100 | this.config.minWidth,
                    l = 100 | this.config.minHeight,
                    c = this._popup.offsetLeft,
                    u = this._popup.offsetTop,
                    d = this._popup.offsetWidth,
                    h = this._popup.offsetHeight,
                    i = this.getRootView().refs;
                switch (!0) {
                    case r.bottom && r.left:
                        e = "dhx_window-body-pointer--bottom_left", t = i.bottomLeft;
                        break;
                    case r.bottom && r.right:
                        e = "dhx_window-body-pointer--bottom_right", t = i.bottomLeft;
                        break;
                    case r.top && r.left:
                        e = "dhx_window-body-pointer--top_left", t = i.bottomLeft;
                        break;
                    case r.top && r.right:
                        e = "dhx_window-body-pointer--top-right", t = i.right;
                        break;
                    case r.top:
                        e = "dhx_window-body-pointer--top", t = i.bottomLeft;
                        break;
                    case r.bottom:
                        e = "dhx_window-body-pointer--bottom", t = i.bottomLeft;
                        break;
                    case r.left:
                        e = "dhx_window-body-pointer--left", t = i.bottomLeft;
                        break;
                    case r.right:
                        e = "dhx_window-body-pointer--right", t = i.right
                }
                t.el.classList.add("dhx_window-resizer--active"), this.config.node.classList.add("dhx_window--stop_selection"), this.config.node.classList.add(e);

                function n(t) {
                    var e = (o = s._getContainerParams()).containerInnerWidth,
                        i = o.containerInnerHeight,
                        n = o.containerXOffset,
                        o = o.containerYOffset,
                        t = {
                            width: s._notInNode() ? t.pageX - c : t.pageX - s.config.node.offsetLeft - c,
                            height: s._notInNode() ? t.pageY - u : t.pageY - s.config.node.offsetTop - u,
                            left: s._notInNode() ? t.pageX : t.pageX - s.config.node.offsetLeft,
                            top: s._notInNode() ? t.pageY : t.pageY - s.config.node.offsetTop
                        };
                    r.right && (t.width < a ? t.width = a : t.width > n + e - c && (t.width = n + e - c), s._popup.style.width = t.width + "px"), r.bottom && (t.height < l ? t.height = l : t.height > o + i - u && (t.height = o + i - u), s._popup.style.height = t.height + "px"), r.left && (c + d - t.left < a && (t.left = c + d - a), t.width = c + d - t.left, s.config.left = t.left, s._popup.style.left = t.left + "px", s._popup.style.width = t.width + "px"), r.top && (t.top < o ? t.top = o : u + h - t.top < l && (t.top = u + h - l), t.height = u + h - t.top, s.config.top = t.top, s._popup.style.top = t.top + "px", s._popup.style.height = t.height + "px"), s.config.width = s._popup.offsetWidth, s.config.height = s._popup.offsetHeight, s.events.fire(f.WindowEvents.resize, [t, {
                        left: c,
                        top: u,
                        height: h,
                        width: d
                    }, r])
                }
                var o = function() {
                    document.removeEventListener("mouseup", o), document.removeEventListener("mousemove", n), s.config.node.classList.remove("dhx_window--stop_selection"), s.config.node.classList.remove(e), t.el.classList.remove("dhx_window-resizer--active")
                };
                document.addEventListener("mouseup", o), document.addEventListener("mousemove", n)
            }, h.prototype._blockScreen = function() {
                var n = this,
                    t = document.createElement("div");
                t.className = "dhx_window__overlay", this.config.node.appendChild(t), this._blocker = t, this.config.closable && (t.addEventListener("click", function(t) {
                    return n._hide(t)
                }), t = a.isIE() ? "esc" : "escape", o.keyManager.addHotKey(t, function(t) {
                    var e = Array.prototype.slice.call(document.querySelectorAll(".dhx_popup--window_modal")),
                        i = Array.prototype.slice.call(document.querySelectorAll(".dhx_popup--window")),
                        i = e.concat(i);
                    1 !== i.length ? (i.sort(function(t, e) {
                        return +window.getComputedStyle(e).zIndex - +window.getComputedStyle(t).zIndex
                    }), i[i.length - 1] === n._popup && n._hide(t)) : n._hide(t)
                }))
            }, h.prototype._notInNode = function() {
                return this.config.node === document.body || this.config.modal
            }, h.prototype._getContainerParams = function() {
                var t = this._notInNode();
                return {
                    containerInnerWidth: t ? window.innerWidth : this.config.node.offsetWidth,
                    containerInnerHeight: t ? window.innerHeight : this.config.node.offsetHeight,
                    containerXOffset: t ? window.pageXOffset : this.config.node.scrollLeft,
                    containerYOffset: t ? window.pageYOffset : this.config.node.scrollTop
                }
            }, h);

            function h(t) {
                this.config = l.extend({
                    movable: !1,
                    resizable: !1,
                    closable: t.modal
                }, t), this.config.node && "string" == typeof this.config.node ? this.config.node = document.getElementById(this.config.node) : this.config.node || (this.config.node = document.body), this._uid = l.uid(), this.events = new i.EventSystem(this), (this._popup = document.createElement("div")).tabIndex = 1, this.config.modal || c.default.add(this._uid, this._popup), this._isActive = !1, this._initHandlers(), this._initUI(), this.config.html && this.attachHTML(this.config.html)
            }
            p.Window = d
        }).call(this, _(13))
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), (e = e.WindowEvents || (e.WindowEvents = {})).resize = "resize", e.headerDoubleClick = "headerdoubleclick", e.move = "move", e.afterShow = "aftershow", e.afterHide = "afterhide", e.beforeShow = "beforeshow", e.beforeHide = "beforehide"
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = {
            popups: {},
            lastActive: null,
            freeCount: 0,
            add: function(t, e) {
                this.lastActive && this.popups[this.lastActive].classList.remove("dhx_popup--window_active"), this.lastActive = t, e.classList.add("dhx_popup--window_active"), this.popups[t] = e
            },
            setActive: function(t) {
                var e;
                t === this.lastActive || (e = this.popups[t]) && (this.lastActive && this.popups[this.lastActive].classList.remove("dhx_popup--window_active"), this.lastActive = t, e.classList.add("dhx_popup--window_active"))
            },
            openFreeWindow: function(t) {
                0 === this.freeCount && t.classList.add("dhx_window--no-scroll"), this.freeCount++
            },
            closeFreeWindow: function(t) {
                this.freeCount--, 0 === this.freeCount && t.classList.remove("dhx_window--no-scroll")
            }
        }
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });

        function r(t, e) {
            return (t || "") + " (" + e.length + ")"
        }

        function s(t, e) {
            return c.getTreeCell(e.groupTitleTemplate(t.$groupName, t.items), t, {
                id: "$groupName",
                $width: "100%",
                $cellCss: {}
            }, e)
        }
        var a, c = i(53),
            u = i(1),
            l = i(2),
            d = i(5),
            h = i(89),
            f = i(90),
            o = (a = c.ProGrid, o(p, a), p.prototype.scrollTo = function(t, e) {
                var i = u.findIndex(this.config.columns, function(t) {
                        return t.id === e
                    }),
                    n = this.config.leftSplit ? c.getTotalWidth(this.config.columns.slice(0, this.config.leftSplit)) : 0,
                    o = c.getTotalWidth(this.config.columns.slice(0, i)) - n,
                    r = this.data.getPlainIndex(t) * this.config.rowHeight,
                    s = this.getScrollState(),
                    a = this.config.width + s.x,
                    l = this.config.height + s.y - this.config.headerRowHeight * this.config.$headerLevel,
                    n = r - s.y - this.config.rowHeight,
                    t = o - s.x - this.config.columns[i].$width,
                    l = r + 2 * this.config.rowHeight + 17 - l,
                    a = o + 2 * this.config.columns[i].$width + 17 - a,
                    l = 0 < n && l < 0 ? 0 : n < 0 ? n : l,
                    a = 0 < t && a < 0 ? 0 : t < 0 ? t : a;
                this.scroll(a + s.x, l + s.y)
            }, p.prototype.expand = function(t) {
                this.data.haveItems(t) && this.events.fire(f.TreeGridEvents.beforeExpand, [t]) && (this.data.update(t, {
                    $opened: !0
                }), this.events.fire(f.TreeGridEvents.afterExpand, [t]))
            }, p.prototype.collapse = function(t) {
                this.data.haveItems(t) && this.events.fire(f.TreeGridEvents.beforeCollapse, [t]) && (this.data.update(t, {
                    $opened: !1
                }), this.events.fire(f.TreeGridEvents.afterCollapse, [t]))
            }, p.prototype.expandAll = function() {
                var e = this;
                this.data.eachChild(this.data.getRoot(), function(t) {
                    t = t.id;
                    return e.expand(t)
                })
            }, p.prototype.collapseAll = function() {
                var e = this;
                this.data.forEach(function(t) {
                    e.data.haveItems(t.id) && e.collapse(t.id)
                })
            }, p.prototype.adjustColumnWidth = function(e, t) {
                var i = this;
                void 0 === t && (t = !0);
                var n = u.findIndex(this.config.columns, function(t) {
                        return t.id === e
                    }),
                    o = this.config.columns[n],
                    r = [];
                "header" !== t && !0 !== t || o.header.forEach(function(t) {
                    r.push(l.getStrSize(c.removeHTMLTags(t.text)).width + (c.isSortable(i.config, o) ? 40 : 20))
                }), "data" !== t && !0 !== t || this.data.map(function(t) {
                    "string" != typeof t[o.id] && "number" != typeof t[o.id] || r.push(l.getStrSize(c.removeHTMLTags(t[o.id])).width + (0 === n ? 24 * i.data.getMaxLevel() + 20 : 20))
                }), this.config.$totalWidth = this.config.columns.reduce(function(t, e, i) {
                    return i === n && (e.$width = Math.max.apply(Math, r)), t + (e.hidden ? 0 : e.$width)
                }, 0), this.paint()
            }, p.prototype.groupBy = function(t) {
                var e = this;
                this.ungroup(), this.config.groupTitleTemplate = this.config.groupTitleTemplate || r, this._pregroupData = this.data.serialize();
                t = this._groupBy(this.data.serialize(), t);
                this.data.parse(t), t.forEach(function(t) {
                    e.addRowCss(t.id, "dhx_tree-cell_group-title")
                })
            }, p.prototype.ungroup = function() {
                this._pregroupData && this.data.parse(this._pregroupData)
            }, p.prototype.showRow = function(t) {
                var e, i = this;
                t && (t = t.toString(), (e = this.data.getItem(t)) && e.hidden && this.events.fire(c.GridEvents.beforeRowShow, [e]) && (this.data.update(t, {
                    hidden: !1,
                    wasHidden: !1
                }), this.data.restoreOrder(), this.data.eachChild(t, function(t) {
                    t.wasHidden || i.data.update(t.id, {
                        hidden: !1
                    })
                }), this.data.filter(function(t) {
                    return !t.hidden
                }), this.events.fire(c.GridEvents.afterRowShow, [e])))
            }, p.prototype.hideRow = function(t) {
                var e, i = this;
                t && (t = t.toString(), (e = this.data.getItem(t)) && !e.hidden && this.events.fire(c.GridEvents.beforeRowShow, [e]) && (this.data.update(t, {
                    hidden: !0,
                    wasHidden: !0
                }), this.data.eachChild(t, function(t) {
                    return i.data.update(t.id, {
                        hidden: !0
                    })
                }), this.data.filter(function(t) {
                    return !t.hidden
                }), this.events.fire(c.GridEvents.afterRowShow, [e])))
            }, p.prototype._createCollection = function(t) {
                this.data = new h.TreeGridCollection({
                    prep: t,
                    rootId: this.config.rootParent
                }, this.events)
            }, p.prototype._checkColumns = function() {
                a.prototype._checkColumns.call(this)
            }, p.prototype._getRowIndex = function(e) {
                return u.findIndex(this.data.serialize(), function(t) {
                    return t.id === e
                })
            }, p.prototype._parseColumns = function() {
                a.prototype._parseColumns.call(this)
            }, p.prototype._setEventHandlers = function() {
                var n = this;
                a.prototype._setEventHandlers.call(this), this.events.on(c.GridEvents.expand, function(t) {
                    n.data.getItem(t).$opened ? n.collapse(t) : n.expand(t)
                }), this.events.detach(c.GridEvents.filterChange, this), this.events.on(c.GridEvents.filterChange, function(t, e, i) {
                    n.data.filter(), t && n.data.filter({
                        by: e,
                        match: t,
                        compare: n.content[i].match
                    })
                }), this.events.detach(c.GridEvents.headerInput, this), this.events.on(c.GridEvents.headerInput, function(t, e, i) {
                    n.data.filter(), t && n.data.filter({
                        by: e,
                        match: t,
                        compare: n.content[i].match
                    })
                }), this.events.on(d.DataEvents.afterAdd, function() {
                    return n.data.sort()
                })
            }, p.prototype._groupBy = function(t, n) {
                var e = {};
                return t.reduce(function(t, e) {
                    var i = "string" == typeof n ? e[n] && e[n].toString() : n(e);
                    return t[i] || (t[i] = []), t[i].push(e), t
                }, e), Object.entries(e).map(function(t) {
                    var e = t[0],
                        t = t[1];
                    return t.forEach(function(t) {
                        t.parent = "$group::" + e
                    }), {
                        id: "$group::" + e,
                        $groupName: e,
                        $customRender: s,
                        items: t
                    }
                })
            }, p);

        function p(t, e) {
            var i = this;
            return e.keyNavigation = !1, e.multiselection = !1, (i = a.call(this, t, e) || this).config.dropBehaviour || (i.config.dropBehaviour = "sibling"), i.config.type = "tree", i
        }
        e.TreeGrid = o
    }, function(t, i, e) {
        "use strict";

        function n(t) {
            for (var e in t) i.hasOwnProperty(e) || (i[e] = t[e])
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), n(e(232)), n(e(233))
    }, function(t, e, i) {
        "use strict";
        var n, o = this && this.__extends || (n = function(t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r, s = i(1),
            a = i(0),
            l = i(3),
            c = i(5),
            u = i(4),
            d = i(27),
            o = (r = u.View, o(h, r), h.prototype.paint = function() {
                this._updateSizeUI()
            }, h.prototype.destructor = function() {
                this._toolbar.destructor(), this.events.clear(), this.unmount()
            }, h.prototype.setPage = function(t, e) {
                void 0 === e && (e = !1);
                var i = Math.max(0, Math.min(t, this.getPagesCount() - 1)),
                    t = this._page;
                i !== t || e ? (this._page = i, e = this._page * this._size, this.data.setRange(e, e + this._size), this._toolbar.data.update("count", {
                    value: (i + 1).toString()
                }), this.paint(), this.events.fire("change", [i, t]), this.data.events.fire("change")) : this.paint()
            }, h.prototype.getPage = function() {
                return this._page
            }, h.prototype.setPageSize = function(t) {
                this._size = t, this.setPage(this._page, !0)
            }, h.prototype.getPageSize = function() {
                return this._size
            }, h.prototype.getPagesCount = function() {
                return Math.ceil(this.data.getLength() / this._size)
            }, h.prototype._showItem = function(t) {
                this.setPage(Math.floor(t / this._size))
            }, h.prototype._showTreeItem = function(t) {
                var e = this.data.getItem(t);
                this.data.getItem(e.parent) ? this._showTreeItem(e.parent) : this.setPage(Math.floor(this.data.getIndex(t) / this._size))
            }, h.prototype._updateSizeUI = function() {
                this._toolbar.data.update("size", {
                    value: "/ " + this.getPagesCount()
                })
            }, h.prototype._initUI = function() {
                this._toolbar = new d.Toolbar(null, {
                    data: [{
                        id: "first",
                        type: "button",
                        icon: "dxi dxi-chevron-double-left",
                        tooltip: "First",
                        view: "link",
                        circle: !0
                    }, {
                        id: "previous",
                        type: "button",
                        icon: "dxi dxi-chevron-left",
                        tooltip: "Previous",
                        view: "link",
                        circle: !0
                    }, {
                        id: "count",
                        type: "input",
                        width: this.config.inputWidth,
                        css: "dhx_pagination__count-panel"
                    }, {
                        id: "size",
                        type: "title",
                        css: "dhx_pagination__count-panel"
                    }, {
                        id: "next",
                        type: "button",
                        icon: "dxi dxi-chevron-right",
                        tooltip: "Next",
                        view: "link",
                        circle: !0
                    }, {
                        id: "last",
                        type: "button",
                        icon: "dxi dxi-chevron-double-right",
                        tooltip: "Last",
                        view: "link",
                        circle: !0
                    }]
                }), this._updateSizeUI()
            }, h.prototype._initEvents = function() {
                var i = this;
                this.data.events.on("focusChange", function(t, e) {
                    i.data instanceof c.TreeCollection ? i._showItem(t) : i._showTreeItem(e)
                }), this.data.events.on("change", function() {
                    i.setPage(i._page)
                }), this._toolbar.events.on("click", function(t) {
                    var e;
                    switch (t) {
                        case "previous":
                            e = i._page - 1;
                            break;
                        case "next":
                            e = i._page + 1;
                            break;
                        case "first":
                            e = 0;
                            break;
                        case "last":
                            e = 1 / 0
                    }
                    void 0 !== e && i.setPage(e)
                }), this._toolbar.events.on("inputFocus", function(t) {
                    var e = document.querySelector(".dhx_pagination[dhx_widget_id=" + i._uid + "] .dhx_input");
                    e && e.select()
                }), this._toolbar.events.on("inputBlur", function(t) {
                    var e = document.querySelector(".dhx_pagination[dhx_widget_id=" + i._uid + "] .dhx_input");
                    e && !e.value && (e.value = (i._page + 1).toString())
                }), this._toolbar.events.on("change", function(t) {
                    "count" === t && (t = parseInt(i._toolbar.data.getItem(t).value), isNaN(t) || i.setPage(t - 1))
                })
            }, h.prototype._render = function() {
                return a.el(".dhx_widget.dhx_pagination", {
                    class: this.config.css,
                    dhx_widget_id: this._uid,
                    _key: this._uid
                }, [a.inject(this._toolbar.getRootView())])
            }, h);

        function h(t, e) {
            var i = r.call(this, t, s.extend({
                page: 0,
                pageSize: 10,
                inputWidth: 40
            }, e)) || this;
            i.data = i.config.data, i._page = -1, i._size = i.config.pageSize, i.events = new l.EventSystem(i), i._initUI(), i._initEvents();
            e = a.create({
                render: function() {
                    return i._render()
                }
            });
            return i.mount(t, e), i.setPage(i.config.page), i
        }
        e.Pagination = o
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), (e.PaginationEvents || (e.PaginationEvents = {})).change = "change"
    }], o.c = n, o.d = function(t, e, i) {
        o.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }, o.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, o.t = function(e, t) {
        if (1 & t && (e = o(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (o.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var n in e) o.d(i, n, function(t) {
                return e[t]
            }.bind(null, n));
        return i
    }, o.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return o.d(e, "a", e), e
    }, o.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, o.p = "/codebase/", o(o.s = 91);

    function o(t) {
        if (n[t]) return n[t].exports;
        var e = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return i[t].call(e.exports, e, e.exports, o), e.l = !0, e.exports
    }
    var i, n
}), window.dhx_legacy) {
if (window.dhx)
    for (var key in dhx) dhx_legacy[key] = dhx[key];
window.dhx = dhx_legacy, delete window.dhx_legacy
}