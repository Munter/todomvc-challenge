! function () {
    "use strict";

    function e() {
        "tastejs.github.io" === location.hostname && (location.href = location.href.replace("tastejs.github.io/todomvc", "todomvc.com"))
    }

    function t() {
        var e;
        return [/labs/, /\w*-examples/].forEach(function (t) {
            var n = location.href.match(t);
            !e && n && (e = location.href.indexOf(n))
        }), location.href.substr(0, e)
    }

    function n(e, n) {
        if (!location.host) return console.info("Miss the info bar? Run TodoMVC from a server to avoid a cross-origin error.");
        var r = new XMLHttpRequest;
        r.open("GET", t() + e, !0), r.send(), r.onload = function () {
            200 === r.status && n && n(r.responseText)
        }
    }

    function r(e, t) {
        if (!(this instanceof r)) return new r(e, t);
        var n, i;
        if ("object" != typeof e) try {
            e = JSON.parse(e)
        } catch (o) {
            return
        }
        t && (n = t.template, i = t.framework), !n && e.templates && (n = e.templates.todomvc), !i && document.querySelector("[data-framework]") && (i = document.querySelector("[data-framework]").getAttribute("data-framework")), n && e[i] && (this.frameworkJSON = e[i], this.template = n, this.append())
    }
    var i = function (e) {
        e.defaults = function (e) {
            if (!e) return e;
            for (var t = 1, n = arguments.length; n > t; t++) {
                var r = arguments[t];
                if (r)
                    for (var i in r) null == e[i] && (e[i] = r[i])
            }
            return e
        }, e.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var t = /(.)^/,
            n = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "	": "t",
                "\u2028": "u2028",
                "\u2029": "u2029"
            }, r = /\\|'|\r|\n|\t|\u2028|\u2029/g;
        return e.template = function (i, o, a) {
            var s;
            a = e.defaults({}, a, e.templateSettings);
            var u = new RegExp([(a.escape || t).source, (a.interpolate || t).source, (a.evaluate || t).source].join("|") + "|$", "g"),
                l = 0,
                c = "__p+='";
            i.replace(u, function (e, t, o, a, s) {
                return c += i.slice(l, s).replace(r, function (e) {
                    return "\\" + n[e]
                }), t && (c += "'+\n((__t=(" + t + "))==null?'':_.escape(__t))+\n'"), o && (c += "'+\n((__t=(" + o + "))==null?'':__t)+\n'"), a && (c += "';\n" + a + "\n__p+='"), l = s + e.length, e
            }), c += "';\n", a.variable || (c = "with(obj||{}){\n" + c + "}\n"), c = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + c + "return __p;\n";
            try {
                s = new Function(a.variable || "obj", "_", c)
            } catch (f) {
                throw f.source = c, f
            }
            if (o) return s(o, e);
            var p = function (t) {
                return s.call(this, t, e)
            };
            return p.source = "function(" + (a.variable || "obj") + "){\n" + c + "}", p
        }, e
    }({});
    "todomvc.com" === location.hostname && (window._gaq = [
        ["_setAccount", "UA-31081062-1"],
        ["_trackPageview"]
    ], function (e, t) {
        var n = e.createElement(t),
            r = e.getElementsByTagName(t)[0];
        n.src = "//www.google-analytics.com/ga.js", r.parentNode.insertBefore(n, r)
    }(document, "script")), r.prototype.append = function () {
        var e = document.createElement("aside");
        e.innerHTML = i.template(this.template, this.frameworkJSON), e.className = "learn";
        var n = e.querySelectorAll(".demo-link");
        Array.prototype.forEach.call(n, function (e) {
            e.setAttribute("href", t() + e.getAttribute("href"))
        }), document.body.className = (document.body.className + " learn-bar").trim(), document.body.insertAdjacentHTML("afterBegin", e.outerHTML)
    }, e(), n("learn.json", r)
}(),
/*!
 * jQuery JavaScript Library v1.9.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2012 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-2-4
 */
function (e, t) {
    function n(e) {
        var t = e.length,
            n = ut.type(e);
        return ut.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function r(e) {
        var t = kt[e] = {};
        return ut.each(e.match(ct) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function i(e, n, r, i) {
        if (ut.acceptData(e)) {
            var o, a, s = ut.expando,
                u = "string" == typeof n,
                l = e.nodeType,
                c = l ? ut.cache : e,
                f = l ? e[s] : e[s] && s;
            if (f && c[f] && (i || c[f].data) || !u || r !== t) return f || (l ? e[s] = f = Z.pop() || ut.guid++ : f = s), c[f] || (c[f] = {}, l || (c[f].toJSON = ut.noop)), ("object" == typeof n || "function" == typeof n) && (i ? c[f] = ut.extend(c[f], n) : c[f].data = ut.extend(c[f].data, n)), o = c[f], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[ut.camelCase(n)] = r), u ? (a = o[n], null == a && (a = o[ut.camelCase(n)])) : a = o, a
        }
    }

    function o(e, t, n) {
        if (ut.acceptData(e)) {
            var r, i, o, a = e.nodeType,
                u = a ? ut.cache : e,
                l = a ? e[ut.expando] : ut.expando;
            if (u[l]) {
                if (t && (o = n ? u[l] : u[l].data)) {
                    ut.isArray(t) ? t = t.concat(ut.map(t, ut.camelCase)) : t in o ? t = [t] : (t = ut.camelCase(t), t = t in o ? [t] : t.split(" "));
                    for (r = 0, i = t.length; i > r; r++) delete o[t[r]];
                    if (!(n ? s : ut.isEmptyObject)(o)) return
                }(n || (delete u[l].data, s(u[l]))) && (a ? ut.cleanData([e], !0) : ut.support.deleteExpando || u != u.window ? delete u[l] : u[l] = null)
            }
        }
    }

    function a(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(Et, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : Nt.test(r) ? ut.parseJSON(r) : r
                } catch (o) {}
                ut.data(e, n, r)
            } else r = t
        }
        return r
    }

    function s(e) {
        var t;
        for (t in e)
            if (("data" !== t || !ut.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function u() {
        return !0
    }

    function l() {
        return !1
    }

    function c(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function f(e, t, n) {
        if (t = t || 0, ut.isFunction(t)) return ut.grep(e, function (e, r) {
            var i = !! t.call(e, r, e);
            return i === n
        });
        if (t.nodeType) return ut.grep(e, function (e) {
            return e === t === n
        });
        if ("string" == typeof t) {
            var r = ut.grep(e, function (e) {
                return 1 === e.nodeType
            });
            if (Wt.test(t)) return ut.filter(t, r, !n);
            t = ut.filter(t, r)
        }
        return ut.grep(e, function (e) {
            return ut.inArray(e, t) >= 0 === n
        })
    }

    function p(e) {
        var t = Ut.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function h(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }

    function d(e) {
        var t = e.getAttributeNode("type");
        return e.type = (t && t.specified) + "/" + e.type, e
    }

    function g(e) {
        var t = on.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function m(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) ut._data(n, "globalEval", !t || ut._data(t[r], "globalEval"))
    }

    function v(e, t) {
        if (1 === t.nodeType && ut.hasData(e)) {
            var n, r, i, o = ut._data(e),
                a = ut._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (r = 0, i = s[n].length; i > r; r++) ut.event.add(t, n, s[n][r])
            }
            a.data && (a.data = ut.extend({}, a.data))
        }
    }

    function y(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !ut.support.noCloneEvent && t[ut.expando]) {
                i = ut._data(t);
                for (r in i.events) ut.removeEvent(t, r, i.handle);
                t.removeAttribute(ut.expando)
            }
            "script" === n && t.text !== e.text ? (d(t).text = e.text, g(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ut.support.html5Clone && e.innerHTML && !ut.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && tn.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function b(e, n) {
        var r, i, o = 0,
            a = typeof e.getElementsByTagName !== V ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== V ? e.querySelectorAll(n || "*") : t;
        if (!a)
            for (a = [], r = e.childNodes || e; null != (i = r[o]); o++)!n || ut.nodeName(i, n) ? a.push(i) : ut.merge(a, b(i, n));
        return n === t || n && ut.nodeName(e, n) ? ut.merge([e], a) : a
    }

    function x(e) {
        tn.test(e.type) && (e.defaultChecked = e.checked)
    }

    function w(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = En.length; i--;)
            if (t = En[i] + n, t in e) return t;
        return r
    }

    function T(e, t) {
        return e = t || e, "none" === ut.css(e, "display") || !ut.contains(e.ownerDocument, e)
    }

    function k(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (o[a] = ut._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && T(r) && (o[a] = ut._data(r, "olddisplay", _(r.nodeName)))) : o[a] || (i = T(r), (n && "none" !== n || !i) && ut._data(r, "olddisplay", i ? n : ut.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function N(e, t, n) {
        var r = yn.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function E(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += ut.css(e, n + Nn[o], !0, i)), r ? ("content" === n && (a -= ut.css(e, "padding" + Nn[o], !0, i)), "margin" !== n && (a -= ut.css(e, "border" + Nn[o] + "Width", !0, i))) : (a += ut.css(e, "padding" + Nn[o], !0, i), "padding" !== n && (a += ut.css(e, "border" + Nn[o] + "Width", !0, i)));
        return a
    }

    function C(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = fn(e),
            a = ut.support.boxSizing && "border-box" === ut.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = pn(e, t, o), (0 > i || null == i) && (i = e.style[t]), bn.test(i)) return i;
            r = a && (ut.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + E(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function _(e) {
        var t = J,
            n = wn[e];
        return n || (n = S(e, t), "none" !== n && n || (cn = (cn || ut("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (cn[0].contentWindow || cn[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = S(e, t), cn.detach()), wn[e] = n), n
    }

    function S(e, t) {
        var n = ut(t.createElement(e)).appendTo(t.body),
            r = ut.css(n[0], "display");
        return n.remove(), r
    }

    function A(e, t, n, r) {
        var i;
        if (ut.isArray(t)) ut.each(t, function (t, i) {
            n || _n.test(e) ? r(e, i) : A(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== ut.type(t)) r(e, t);
        else
            for (i in t) A(e + "[" + i + "]", t[i], n, r)
    }

    function j(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(ct) || [];
            if (ut.isFunction(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function H(e, t, n, r) {
        function i(s) {
            var u;
            return o[s] = !0, ut.each(e[s] || [], function (e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
            }), u
        }
        var o = {}, a = e === zn;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function D(e, n) {
        var r, i, o = ut.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        return r && ut.extend(!0, e, r), e
    }

    function O(e, n, r) {
        var i, o, a, s, u = e.contents,
            l = e.dataTypes,
            c = e.responseFields;
        for (s in c) s in r && (n[c[s]] = r[s]);
        for (;
            "*" === l[0];) l.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o)
            for (s in u)
                if (u[s] && u[s].test(o)) {
                    l.unshift(s);
                    break
                }
        if (l[0] in r) a = l[0];
        else {
            for (s in r) {
                if (!l[0] || e.converters[s + " " + l[0]]) {
                    a = s;
                    break
                }
                i || (i = s)
            }
            a = a || i
        }
        return a ? (a !== l[0] && l.unshift(a), r[a]) : void 0
    }

    function L(e, t) {
        var n, r, i, o, a = {}, s = 0,
            u = e.dataTypes.slice(),
            l = u[0];
        if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), u[1])
            for (i in e.converters) a[i.toLowerCase()] = e.converters[i];
        for (; r = u[++s];)
            if ("*" !== r) {
                if ("*" !== l && l !== r) {
                    if (i = a[l + " " + r] || a["* " + r], !i)
                        for (n in a)
                            if (o = n.split(" "), o[1] === r && (i = a[l + " " + o[0]] || a["* " + o[0]])) {
                                i === !0 ? i = a[n] : a[n] !== !0 && (r = o[0], u.splice(s--, 0, r));
                                break
                            }
                    if (i !== !0)
                        if (i && e["throws"]) t = i(t);
                        else try {
                            t = i(t)
                        } catch (c) {
                            return {
                                state: "parsererror",
                                error: i ? c : "No conversion from " + l + " to " + r
                            }
                        }
                }
                l = r
            }
        return {
            state: "success",
            data: t
        }
    }

    function M() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function F() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function $() {
        return setTimeout(function () {
            Zn = t
        }), Zn = ut.now()
    }

    function q(e, t) {
        ut.each(t, function (t, n) {
            for (var r = (or[t] || []).concat(or["*"]), i = 0, o = r.length; o > i; i++)
                if (r[i].call(e, t, n)) return
        })
    }

    function B(e, t, n) {
        var r, i, o = 0,
            a = ir.length,
            s = ut.Deferred().always(function () {
                delete u.elem
            }),
            u = function () {
                if (i) return !1;
                for (var t = Zn || $(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++) l.tweens[a].run(o);
                return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1)
            }, l = s.promise({
                elem: e,
                props: ut.extend({}, t),
                opts: ut.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Zn || $(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = ut.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) l.tweens[n].run(1);
                    return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (R(c, l.opts.specialEasing); a > o; o++)
            if (r = ir[o].call(l, e, c, l.opts)) return r;
        return q(l, c), ut.isFunction(l.opts.start) && l.opts.start.call(e, l), ut.fx.timer(ut.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function R(e, t) {
        var n, r, i, o, a;
        for (i in e)
            if (r = ut.camelCase(i), o = t[r], n = e[i], ut.isArray(n) && (o = n[1], n = e[i] = n[0]), i !== r && (e[r] = n, delete e[i]), a = ut.cssHooks[r], a && "expand" in a) {
                n = a.expand(n), delete e[r];
                for (i in n) i in e || (e[i] = n[i], t[i] = o)
            } else t[r] = o
    }

    function P(e, t, n) {
        var r, i, o, a, s, u, l, c, f, p = this,
            h = e.style,
            d = {}, g = [],
            m = e.nodeType && T(e);
        n.queue || (c = ut._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, f = c.empty.fire, c.empty.fire = function () {
            c.unqueued || f()
        }), c.unqueued++, p.always(function () {
            p.always(function () {
                c.unqueued--, ut.queue(e, "fx").length || c.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === ut.css(e, "display") && "none" === ut.css(e, "float") && (ut.support.inlineBlockNeedsLayout && "inline" !== _(e.nodeName) ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", ut.support.shrinkWrapBlocks || p.always(function () {
            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (a = t[i], tr.exec(a)) {
                if (delete t[i], u = u || "toggle" === a, a === (m ? "hide" : "show")) continue;
                g.push(i)
            }
        if (o = g.length) {
            s = ut._data(e, "fxshow") || ut._data(e, "fxshow", {}), "hidden" in s && (m = s.hidden), u && (s.hidden = !m), m ? ut(e).show() : p.done(function () {
                ut(e).hide()
            }), p.done(function () {
                var t;
                ut._removeData(e, "fxshow");
                for (t in d) ut.style(e, t, d[t])
            });
            for (i = 0; o > i; i++) r = g[i], l = p.createTween(r, m ? s[r] : 0), d[r] = s[r] || ut.style(e, r), r in s || (s[r] = l.start, m && (l.end = l.start, l.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function I(e, t, n, r, i) {
        return new I.prototype.init(e, t, n, r, i)
    }

    function W(e, t) {
        var n, r = {
                height: e
            }, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Nn[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function z(e) {
        return ut.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var X, U, V = typeof t,
        J = e.document,
        Y = e.location,
        G = e.jQuery,
        Q = e.$,
        K = {}, Z = [],
        et = "1.9.1",
        tt = Z.concat,
        nt = Z.push,
        rt = Z.slice,
        it = Z.indexOf,
        ot = K.toString,
        at = K.hasOwnProperty,
        st = et.trim,
        ut = function (e, t) {
            return new ut.fn.init(e, t, U)
        }, lt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ct = /\S+/g,
        ft = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        pt = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ht = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        dt = /^[\],:{}\s]*$/,
        gt = /(?:^|:|,)(?:\s*\[)+/g,
        mt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        vt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        yt = /^-ms-/,
        bt = /-([\da-z])/gi,
        xt = function (e, t) {
            return t.toUpperCase()
        }, wt = function (e) {
            (J.addEventListener || "load" === e.type || "complete" === J.readyState) && (Tt(), ut.ready())
        }, Tt = function () {
            J.addEventListener ? (J.removeEventListener("DOMContentLoaded", wt, !1), e.removeEventListener("load", wt, !1)) : (J.detachEvent("onreadystatechange", wt), e.detachEvent("onload", wt))
        };
    ut.fn = ut.prototype = {
        jquery: et,
        constructor: ut,
        init: function (e, n, r) {
            var i, o;
            if (!e) return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : pt.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof ut ? n[0] : n, ut.merge(this, ut.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : J, !0)), ht.test(i[1]) && ut.isPlainObject(n))
                        for (i in n) ut.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this
                }
                if (o = J.getElementById(i[2]), o && o.parentNode) {
                    if (o.id !== i[2]) return r.find(e);
                    this.length = 1, this[0] = o
                }
                return this.context = J, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ut.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), ut.makeArray(e, this))
        },
        selector: "",
        length: 0,
        size: function () {
            return this.length
        },
        toArray: function () {
            return rt.call(this)
        },
        get: function (e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function (e) {
            var t = ut.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function (e, t) {
            return ut.each(this, e, t)
        },
        ready: function (e) {
            return ut.ready.promise().done(e), this
        },
        slice: function () {
            return this.pushStack(rt.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        map: function (e) {
            return this.pushStack(ut.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: nt,
        sort: [].sort,
        splice: [].splice
    }, ut.fn.init.prototype = ut.fn, ut.extend = ut.fn.extend = function () {
        var e, n, r, i, o, a, s = arguments[0] || {}, u = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, u = 2), "object" == typeof s || ut.isFunction(s) || (s = {}), l === u && (s = this, --u); l > u; u++)
            if (null != (o = arguments[u]))
                for (i in o) e = s[i], r = o[i], s !== r && (c && r && (ut.isPlainObject(r) || (n = ut.isArray(r))) ? (n ? (n = !1, a = e && ut.isArray(e) ? e : []) : a = e && ut.isPlainObject(e) ? e : {}, s[i] = ut.extend(c, a, r)) : r !== t && (s[i] = r));
        return s
    }, ut.extend({
        noConflict: function (t) {
            return e.$ === ut && (e.$ = Q), t && e.jQuery === ut && (e.jQuery = G), ut
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? ut.readyWait++ : ut.ready(!0)
        },
        ready: function (e) {
            if (e === !0 ? !--ut.readyWait : !ut.isReady) {
                if (!J.body) return setTimeout(ut.ready);
                ut.isReady = !0, e !== !0 && --ut.readyWait > 0 || (X.resolveWith(J, [ut]), ut.fn.trigger && ut(J).trigger("ready").off("ready"))
            }
        },
        isFunction: function (e) {
            return "function" === ut.type(e)
        },
        isArray: Array.isArray || function (e) {
            return "array" === ut.type(e)
        },
        isWindow: function (e) {
            return null != e && e == e.window
        },
        isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function (e) {
            return null == e ? String(e) : "object" == typeof e || "function" == typeof e ? K[ot.call(e)] || "object" : typeof e
        },
        isPlainObject: function (e) {
            if (!e || "object" !== ut.type(e) || e.nodeType || ut.isWindow(e)) return !1;
            try {
                if (e.constructor && !at.call(e, "constructor") && !at.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            var r;
            for (r in e);
            return r === t || at.call(e, r)
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        error: function (e) {
            throw new Error(e)
        },
        parseHTML: function (e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || J;
            var r = ht.exec(e),
                i = !n && [];
            return r ? [t.createElement(r[1])] : (r = ut.buildFragment([e], t, i), i && ut(i).remove(), ut.merge([], r.childNodes))
        },
        parseJSON: function (t) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(t) : null === t ? t : "string" == typeof t && (t = ut.trim(t), t && dt.test(t.replace(mt, "@").replace(vt, "]").replace(gt, ""))) ? new Function("return " + t)() : (ut.error("Invalid JSON: " + t), void 0)
        },
        parseXML: function (n) {
            var r, i;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (o) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || ut.error("Invalid XML: " + n), r
        },
        noop: function () {},
        globalEval: function (t) {
            t && ut.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function (e) {
            return e.replace(yt, "ms-").replace(bt, xt)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, t, r) {
            var i, o = 0,
                a = e.length,
                s = n(e);
            if (r) {
                if (s)
                    for (; a > o && (i = t.apply(e[o], r), i !== !1); o++);
                else
                    for (o in e)
                        if (i = t.apply(e[o], r), i === !1) break
            } else if (s)
                for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
            else
                for (o in e)
                    if (i = t.call(e[o], o, e[o]), i === !1) break; return e
        },
        trim: st && !st.call("﻿ ") ? function (e) {
            return null == e ? "" : st.call(e)
        } : function (e) {
            return null == e ? "" : (e + "").replace(ft, "")
        },
        makeArray: function (e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? ut.merge(r, "string" == typeof e ? [e] : e) : nt.call(r, e)), r
        },
        inArray: function (e, t, n) {
            var r;
            if (t) {
                if (it) return it.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function (e, n) {
            var r = n.length,
                i = e.length,
                o = 0;
            if ("number" == typeof r)
                for (; r > o; o++) e[i++] = n[o];
            else
                for (; n[o] !== t;) e[i++] = n[o++];
            return e.length = i, e
        },
        grep: function (e, t, n) {
            var r, i = [],
                o = 0,
                a = e.length;
            for (n = !! n; a > o; o++) r = !! t(e[o], o), n !== r && i.push(e[o]);
            return i
        },
        map: function (e, t, r) {
            var i, o = 0,
                a = e.length,
                s = n(e),
                u = [];
            if (s)
                for (; a > o; o++) i = t(e[o], o, r), null != i && (u[u.length] = i);
            else
                for (o in e) i = t(e[o], o, r), null != i && (u[u.length] = i);
            return tt.apply([], u)
        },
        guid: 1,
        proxy: function (e, n) {
            var r, i, o;
            return "string" == typeof n && (o = e[n], n = e, e = o), ut.isFunction(e) ? (r = rt.call(arguments, 2), i = function () {
                return e.apply(n || this, r.concat(rt.call(arguments)))
            }, i.guid = e.guid = e.guid || ut.guid++, i) : t
        },
        access: function (e, n, r, i, o, a, s) {
            var u = 0,
                l = e.length,
                c = null == r;
            if ("object" === ut.type(r)) {
                o = !0;
                for (u in r) ut.access(e, n, u, r[u], !0, a, s)
            } else if (i !== t && (o = !0, ut.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function (e, t, n) {
                return c.call(ut(e), n)
            })), n))
                for (; l > u; u++) n(e[u], r, s ? i : i.call(e[u], u, n(e[u], r)));
            return o ? e : c ? n.call(e) : l ? n(e[0], r) : a
        },
        now: function () {
            return (new Date).getTime()
        }
    }), ut.ready.promise = function (t) {
        if (!X)
            if (X = ut.Deferred(), "complete" === J.readyState) setTimeout(ut.ready);
            else
        if (J.addEventListener) J.addEventListener("DOMContentLoaded", wt, !1), e.addEventListener("load", wt, !1);
        else {
            J.attachEvent("onreadystatechange", wt), e.attachEvent("onload", wt);
            var n = !1;
            try {
                n = null == e.frameElement && J.documentElement
            } catch (r) {}
            n && n.doScroll && ! function i() {
                if (!ut.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(i, 50)
                    }
                    Tt(), ut.ready()
                }
            }()
        }
        return X.promise(t)
    }, ut.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        K["[object " + t + "]"] = t.toLowerCase()
    }), U = ut(J);
    var kt = {};
    ut.Callbacks = function (e) {
        e = "string" == typeof e ? kt[e] || r(e) : ut.extend({}, e);
        var n, i, o, a, s, u, l = [],
            c = !e.once && [],
            f = function (t) {
                for (i = e.memory && t, o = !0, s = u || 0, u = 0, a = l.length, n = !0; l && a > s; s++)
                    if (l[s].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        i = !1;
                        break
                    }
                n = !1, l && (c ? c.length && f(c.shift()) : i ? l = [] : p.disable())
            }, p = {
                add: function () {
                    if (l) {
                        var t = l.length;
                        ! function r(t) {
                            ut.each(t, function (t, n) {
                                var i = ut.type(n);
                                "function" === i ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
                            })
                        }(arguments), n ? a = l.length : i && (u = t, f(i))
                    }
                    return this
                },
                remove: function () {
                    return l && ut.each(arguments, function (e, t) {
                        for (var r;
                            (r = ut.inArray(t, l, r)) > -1;) l.splice(r, 1), n && (a >= r && a--, s >= r && s--)
                    }), this
                },
                has: function (e) {
                    return e ? ut.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function () {
                    return l = [], this
                },
                disable: function () {
                    return l = c = i = t, this
                },
                disabled: function () {
                    return !l
                },
                lock: function () {
                    return c = t, i || p.disable(), this
                },
                locked: function () {
                    return !c
                },
                fireWith: function (e, t) {
                    return t = t || [], t = [e, t.slice ? t.slice() : t], !l || o && !c || (n ? c.push(t) : f(t)), this
                },
                fire: function () {
                    return p.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!o
                }
            };
        return p
    }, ut.extend({
        Deferred: function (e) {
            var t = [
                ["resolve", "done", ut.Callbacks("once memory"), "resolved"],
                ["reject", "fail", ut.Callbacks("once memory"), "rejected"],
                ["notify", "progress", ut.Callbacks("memory")]
            ],
                n = "pending",
                r = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var e = arguments;
                        return ut.Deferred(function (n) {
                            ut.each(t, function (t, o) {
                                var a = o[0],
                                    s = ut.isFunction(e[t]) && e[t];
                                i[o[1]](function () {
                                    var e = s && s.apply(this, arguments);
                                    e && ut.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? ut.extend(e, r) : r
                    }
                }, i = {};
            return r.pipe = r.then, ut.each(t, function (e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function () {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function (e) {
            var t, n, r, i = 0,
                o = rt.call(arguments),
                a = o.length,
                s = 1 !== a || e && ut.isFunction(e.promise) ? a : 0,
                u = 1 === s ? e : ut.Deferred(),
                l = function (e, n, r) {
                    return function (i) {
                        n[e] = this, r[e] = arguments.length > 1 ? rt.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                    }
                };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && ut.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --s;
            return s || u.resolveWith(r, o), u.promise()
        }
    }), ut.support = function () {
        var t, n, r, i, o, a, s, u, l, c, f = J.createElement("div");
        if (f.setAttribute("className", "t"), f.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = f.getElementsByTagName("*"), r = f.getElementsByTagName("a")[0], !n || !r || !n.length) return {};
        o = J.createElement("select"), s = o.appendChild(J.createElement("option")), i = f.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {
            getSetAttribute: "t" !== f.className,
            leadingWhitespace: 3 === f.firstChild.nodeType,
            tbody: !f.getElementsByTagName("tbody").length,
            htmlSerialize: !! f.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: "/a" === r.getAttribute("href"),
            opacity: /^0.5/.test(r.style.opacity),
            cssFloat: !! r.style.cssFloat,
            checkOn: !! i.value,
            optSelected: s.selected,
            enctype: !! J.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== J.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === J.compatMode,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, i.checked = !0, t.noCloneChecked = i.cloneNode(!0).checked, o.disabled = !0, t.optDisabled = !s.disabled;
        try {
            delete f.test
        } catch (p) {
            t.deleteExpando = !1
        }
        i = J.createElement("input"), i.setAttribute("value", ""), t.input = "" === i.getAttribute("value"), i.value = "t", i.setAttribute("type", "radio"), t.radioValue = "t" === i.value, i.setAttribute("checked", "t"), i.setAttribute("name", "t"), a = J.createDocumentFragment(), a.appendChild(i), t.appendChecked = i.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, f.attachEvent && (f.attachEvent("onclick", function () {
            t.noCloneEvent = !1
        }), f.cloneNode(!0).click());
        for (c in {
            submit: !0,
            change: !0,
            focusin: !0
        }) f.setAttribute(u = "on" + c, "t"), t[c + "Bubbles"] = u in e || f.attributes[u].expando === !1;
        return f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === f.style.backgroundClip, ut(function () {
            var n, r, i, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                a = J.getElementsByTagName("body")[0];
            a && (n = J.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(f), f.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = f.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", l = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", t.reliableHiddenOffsets = l && 0 === i[0].offsetHeight, f.innerHTML = "", f.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === f.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== a.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(f, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(f, null) || {
                width: "4px"
            }).width, r = f.appendChild(J.createElement("div")), r.style.cssText = f.style.cssText = o, r.style.marginRight = r.style.width = "0", f.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof f.style.zoom !== V && (f.innerHTML = "", f.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === f.offsetWidth, f.style.display = "block", f.innerHTML = "<div></div>", f.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== f.offsetWidth, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = f = i = r = null)
        }), n = o = a = s = r = i = null, t
    }();
    var Nt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        Et = /([A-Z])/g;
    ut.extend({
        cache: {},
        expando: "jQuery" + (et + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (e) {
            return e = e.nodeType ? ut.cache[e[ut.expando]] : e[ut.expando], !! e && !s(e)
        },
        data: function (e, t, n) {
            return i(e, t, n)
        },
        removeData: function (e, t) {
            return o(e, t)
        },
        _data: function (e, t, n) {
            return i(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return o(e, t, !0)
        },
        acceptData: function (e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
            var t = e.nodeName && ut.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), ut.fn.extend({
        data: function (e, n) {
            var r, i, o = this[0],
                s = 0,
                u = null;
            if (e === t) {
                if (this.length && (u = ut.data(o), 1 === o.nodeType && !ut._data(o, "parsedAttrs"))) {
                    for (r = o.attributes; s < r.length; s++) i = r[s].name, i.indexOf("data-") || (i = ut.camelCase(i.slice(5)), a(o, i, u[i]));
                    ut._data(o, "parsedAttrs", !0)
                }
                return u
            }
            return "object" == typeof e ? this.each(function () {
                ut.data(this, e)
            }) : ut.access(this, function (n) {
                return n === t ? o ? a(o, e, ut.data(o, e)) : null : (this.each(function () {
                    ut.data(this, e, n)
                }), void 0)
            }, null, n, arguments.length > 1, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                ut.removeData(this, e)
            })
        }
    }), ut.extend({
        queue: function (e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = ut._data(e, t), n && (!r || ut.isArray(n) ? r = ut._data(e, t, ut.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = ut.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = ut._queueHooks(e, t),
                a = function () {
                    ut.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), o.cur = i, i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return ut._data(e, n) || ut._data(e, n, {
                empty: ut.Callbacks("once memory").add(function () {
                    ut._removeData(e, t + "queue"), ut._removeData(e, n)
                })
            })
        }
    }), ut.fn.extend({
        queue: function (e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), arguments.length < r ? ut.queue(this[0], e) : n === t ? this : this.each(function () {
                var t = ut.queue(this, e, n);
                ut._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ut.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                ut.dequeue(this, e)
            })
        },
        delay: function (e, t) {
            return e = ut.fx ? ut.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, n) {
            var r, i = 1,
                o = ut.Deferred(),
                a = this,
                s = this.length,
                u = function () {
                    --i || o.resolveWith(a, [a])
                };
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;) r = ut._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(u));
            return u(), o.promise(n)
        }
    });
    var Ct, _t, St = /[\t\r\n]/g,
        At = /\r/g,
        jt = /^(?:input|select|textarea|button|object)$/i,
        Ht = /^(?:a|area)$/i,
        Dt = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
        Ot = /^(?:checked|selected)$/i,
        Lt = ut.support.getSetAttribute,
        Mt = ut.support.input;
    ut.fn.extend({
        attr: function (e, t) {
            return ut.access(this, ut.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                ut.removeAttr(this, e)
            })
        },
        prop: function (e, t) {
            return ut.access(this, ut.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return e = ut.propFix[e] || e, this.each(function () {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function (e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                u = "string" == typeof e && e;
            if (ut.isFunction(e)) return this.each(function (t) {
                ut(this).addClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(ct) || []; s > a; a++)
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(St, " ") : " ")) {
                        for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        n.className = ut.trim(r)
                    }
            return this
        },
        removeClass: function (e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                u = 0 === arguments.length || "string" == typeof e && e;
            if (ut.isFunction(e)) return this.each(function (t) {
                ut(this).removeClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(ct) || []; s > a; a++)
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(St, " ") : "")) {
                        for (o = 0; i = t[o++];)
                            for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        n.className = e ? ut.trim(r) : ""
                    }
            return this
        },
        toggleClass: function (e, t) {
            var n = typeof e,
                r = "boolean" == typeof t;
            return ut.isFunction(e) ? this.each(function (n) {
                ut(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if ("string" === n)
                    for (var i, o = 0, a = ut(this), s = t, u = e.match(ct) || []; i = u[o++];) s = r ? s : !a.hasClass(i), a[s ? "addClass" : "removeClass"](i);
                else(n === V || "boolean" === n) && (this.className && ut._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ut._data(this, "__className__") || "")
            })
        },
        hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(St, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function (e) {
            var n, r, i, o = this[0]; {
                if (arguments.length) return i = ut.isFunction(e), this.each(function (n) {
                    var o, a = ut(this);
                    1 === this.nodeType && (o = i ? e.call(this, n, a.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : ut.isArray(o) && (o = ut.map(o, function (e) {
                        return null == e ? "" : e + ""
                    })), r = ut.valHooks[this.type] || ut.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
                });
                if (o) return r = ut.valHooks[o.type] || ut.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(At, "") : null == n ? "" : n)
            }
        }
    }), ut.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function (e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++)
                        if (n = r[u], !(!n.selected && u !== i || (ut.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ut.nodeName(n.parentNode, "optgroup"))) {
                            if (t = ut(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function (e, t) {
                    var n = ut.makeArray(t);
                    return ut(e).find("option").each(function () {
                        this.selected = ut.inArray(ut(this).val(), n) >= 0
                    }), n.length || (e.selectedIndex = -1), n
                }
            }
        },
        attr: function (e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === V ? ut.prop(e, n, r) : (o = 1 !== s || !ut.isXMLDoc(e), o && (n = n.toLowerCase(), i = ut.attrHooks[n] || (Dt.test(n) ? _t : Ct)), r === t ? i && o && "get" in i && null !== (a = i.get(e, n)) ? a : (typeof e.getAttribute !== V && (a = e.getAttribute(n)), null == a ? t : a) : null !== r ? i && o && "set" in i && (a = i.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""), r) : (ut.removeAttr(e, n), void 0))
        },
        removeAttr: function (e, t) {
            var n, r, i = 0,
                o = t && t.match(ct);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = ut.propFix[n] || n, Dt.test(n) ? !Lt && Ot.test(n) ? e[ut.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : ut.attr(e, n, ""), e.removeAttribute(Lt ? n : r)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!ut.support.radioValue && "radio" === t && ut.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !ut.isXMLDoc(e), a && (n = ut.propFix[n] || n, o = ut.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : jt.test(e.nodeName) || Ht.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), _t = {
        get: function (e, n) {
            var r = ut.prop(e, n),
                i = "boolean" == typeof r && e.getAttribute(n),
                o = "boolean" == typeof r ? Mt && Lt ? null != i : Ot.test(n) ? e[ut.camelCase("default-" + n)] : !! i : e.getAttributeNode(n);
            return o && o.value !== !1 ? n.toLowerCase() : t
        },
        set: function (e, t, n) {
            return t === !1 ? ut.removeAttr(e, n) : Mt && Lt || !Ot.test(n) ? e.setAttribute(!Lt && ut.propFix[n] || n, n) : e[ut.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, Mt && Lt || (ut.attrHooks.value = {
        get: function (e, n) {
            var r = e.getAttributeNode(n);
            return ut.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t
        },
        set: function (e, t, n) {
            return ut.nodeName(e, "input") ? (e.defaultValue = t, void 0) : Ct && Ct.set(e, t, n)
        }
    }), Lt || (Ct = ut.valHooks.button = {
        get: function (e, n) {
            var r = e.getAttributeNode(n);
            return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value : r.specified) ? r.value : t
        },
        set: function (e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
        }
    }, ut.attrHooks.contenteditable = {
        get: Ct.get,
        set: function (e, t, n) {
            Ct.set(e, "" === t ? !1 : t, n)
        }
    }, ut.each(["width", "height"], function (e, t) {
        ut.attrHooks[t] = ut.extend(ut.attrHooks[t], {
            set: function (e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        })
    })), ut.support.hrefNormalized || (ut.each(["href", "src", "width", "height"], function (e, n) {
        ut.attrHooks[n] = ut.extend(ut.attrHooks[n], {
            get: function (e) {
                var r = e.getAttribute(n, 2);
                return null == r ? t : r
            }
        })
    }), ut.each(["href", "src"], function (e, t) {
        ut.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    })), ut.support.style || (ut.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || t
        },
        set: function (e, t) {
            return e.style.cssText = t + ""
        }
    }), ut.support.optSelected || (ut.propHooks.selected = ut.extend(ut.propHooks.selected, {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), ut.support.enctype || (ut.propFix.enctype = "encoding"), ut.support.checkOn || ut.each(["radio", "checkbox"], function () {
        ut.valHooks[this] = {
            get: function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
        }
    }), ut.each(["radio", "checkbox"], function () {
        ut.valHooks[this] = ut.extend(ut.valHooks[this], {
            set: function (e, t) {
                return ut.isArray(t) ? e.checked = ut.inArray(ut(e).val(), t) >= 0 : void 0
            }
        })
    });
    var Ft = /^(?:input|select|textarea)$/i,
        $t = /^key/,
        qt = /^(?:mouse|contextmenu)|click/,
        Bt = /^(?:focusinfocus|focusoutblur)$/,
        Rt = /^([^.]*)(?:\.(.+)|)$/;
    ut.event = {
        global: {},
        add: function (e, n, r, i, o) {
            var a, s, u, l, c, f, p, h, d, g, m, v = ut._data(e);
            if (v) {
                for (r.handler && (l = r, r = l.handler, o = l.selector), r.guid || (r.guid = ut.guid++), (s = v.events) || (s = v.events = {}), (f = v.handle) || (f = v.handle = function (e) {
                    return typeof ut === V || e && ut.event.triggered === e.type ? t : ut.event.dispatch.apply(f.elem, arguments)
                }, f.elem = e), n = (n || "").match(ct) || [""], u = n.length; u--;) a = Rt.exec(n[u]) || [], d = m = a[1], g = (a[2] || "").split(".").sort(), c = ut.event.special[d] || {}, d = (o ? c.delegateType : c.bindType) || d, c = ut.event.special[d] || {}, p = ut.extend({
                    type: d,
                    origType: m,
                    data: i,
                    handler: r,
                    guid: r.guid,
                    selector: o,
                    needsContext: o && ut.expr.match.needsContext.test(o),
                    namespace: g.join(".")
                }, l), (h = s[d]) || (h = s[d] = [], h.delegateCount = 0, c.setup && c.setup.call(e, i, g, f) !== !1 || (e.addEventListener ? e.addEventListener(d, f, !1) : e.attachEvent && e.attachEvent("on" + d, f))), c.add && (c.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), o ? h.splice(h.delegateCount++, 0, p) : h.push(p), ut.event.global[d] = !0;
                e = null
            }
        },
        remove: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, h, d, g, m = ut.hasData(e) && ut._data(e);
            if (m && (c = m.events)) {
                for (t = (t || "").match(ct) || [""], l = t.length; l--;)
                    if (s = Rt.exec(t[l]) || [], h = g = s[1], d = (s[2] || "").split(".").sort(), h) {
                        for (f = ut.event.special[h] || {}, h = (r ? f.delegateType : f.bindType) || h, p = c[h] || [], s = s[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = p.length; o--;) a = p[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (p.splice(o, 1), a.selector && p.delegateCount--, f.remove && f.remove.call(e, a));
                        u && !p.length && (f.teardown && f.teardown.call(e, d, m.handle) !== !1 || ut.removeEvent(e, h, m.handle), delete c[h])
                    } else
                        for (h in c) ut.event.remove(e, h + t[l], n, r, !0);
                ut.isEmptyObject(c) && (delete m.handle, ut._removeData(e, "events"))
            }
        },
        trigger: function (n, r, i, o) {
            var a, s, u, l, c, f, p, h = [i || J],
                d = at.call(n, "type") ? n.type : n,
                g = at.call(n, "namespace") ? n.namespace.split(".") : [];
            if (u = f = i = i || J, 3 !== i.nodeType && 8 !== i.nodeType && !Bt.test(d + ut.event.triggered) && (d.indexOf(".") >= 0 && (g = d.split("."), d = g.shift(), g.sort()), s = d.indexOf(":") < 0 && "on" + d, n = n[ut.expando] ? n : new ut.Event(d, "object" == typeof n && n), n.isTrigger = !0, n.namespace = g.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : ut.makeArray(r, [n]), c = ut.event.special[d] || {}, o || !c.trigger || c.trigger.apply(i, r) !== !1)) {
                if (!o && !c.noBubble && !ut.isWindow(i)) {
                    for (l = c.delegateType || d, Bt.test(l + d) || (u = u.parentNode); u; u = u.parentNode) h.push(u), f = u;
                    f === (i.ownerDocument || J) && h.push(f.defaultView || f.parentWindow || e)
                }
                for (p = 0;
                    (u = h[p++]) && !n.isPropagationStopped();) n.type = p > 1 ? l : c.bindType || d, a = (ut._data(u, "events") || {})[n.type] && ut._data(u, "handle"), a && a.apply(u, r), a = s && u[s], a && ut.acceptData(u) && a.apply && a.apply(u, r) === !1 && n.preventDefault();
                if (n.type = d, !(o || n.isDefaultPrevented() || c._default && c._default.apply(i.ownerDocument, r) !== !1 || "click" === d && ut.nodeName(i, "a") || !ut.acceptData(i) || !s || !i[d] || ut.isWindow(i))) {
                    f = i[s], f && (i[s] = null), ut.event.triggered = d;
                    try {
                        i[d]()
                    } catch (m) {}
                    ut.event.triggered = t, f && (i[s] = f)
                }
                return n.result
            }
        },
        dispatch: function (e) {
            e = ut.event.fix(e);
            var n, r, i, o, a, s = [],
                u = rt.call(arguments),
                l = (ut._data(this, "events") || {})[e.type] || [],
                c = ut.event.special[e.type] || {};
            if (u[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (s = ut.event.handlers.call(this, e, l), n = 0;
                    (o = s[n++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, a = 0;
                        (i = o.handlers[a++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((ut.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, n) {
            var r, i, o, a, s = [],
                u = n.delegateCount,
                l = e.target;
            if (u && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (o = [], a = 0; u > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? ut(r, this).index(l) >= 0 : ut.find(r, this, null, [l]).length), o[r] && o.push(i);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return u < n.length && s.push({
                elem: this,
                handlers: n.slice(u)
            }), s
        },
        fix: function (e) {
            if (e[ut.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = qt.test(i) ? this.mouseHooks : $t.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new ut.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || J), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !! e.metaKey, a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, n) {
                var r, i, o, a = n.button,
                    s = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || J, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                trigger: function () {
                    return ut.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                }
            },
            focus: {
                trigger: function () {
                    if (this !== J.activeElement && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === J.activeElement && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            beforeunload: {
                postDispatch: function (e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = ut.extend(new ut.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? ut.event.trigger(i, null, t) : ut.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, ut.removeEvent = J.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === V && (e[r] = null), e.detachEvent(r, n))
    }, ut.Event = function (e, t) {
        return this instanceof ut.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? u : l) : this.type = e, t && ut.extend(this, t), this.timeStamp = e && e.timeStamp || ut.now(), this[ut.expando] = !0, void 0) : new ut.Event(e, t)
    }, ut.Event.prototype = {
        isDefaultPrevented: l,
        isPropagationStopped: l,
        isImmediatePropagationStopped: l,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = u, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = u, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = u, this.stopPropagation()
        }
    }, ut.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (e, t) {
        ut.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return (!i || i !== r && !ut.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), ut.support.submitBubbles || (ut.event.special.submit = {
        setup: function () {
            return ut.nodeName(this, "form") ? !1 : (ut.event.add(this, "click._submit keypress._submit", function (e) {
                var n = e.target,
                    r = ut.nodeName(n, "input") || ut.nodeName(n, "button") ? n.form : t;
                r && !ut._data(r, "submitBubbles") && (ut.event.add(r, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), ut._data(r, "submitBubbles", !0))
            }), void 0)
        },
        postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ut.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function () {
            return ut.nodeName(this, "form") ? !1 : (ut.event.remove(this, "._submit"), void 0)
        }
    }), ut.support.changeBubbles || (ut.event.special.change = {
        setup: function () {
            return Ft.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ut.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), ut.event.add(this, "click._change", function (e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), ut.event.simulate("change", this, e, !0)
            })), !1) : (ut.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Ft.test(t.nodeName) && !ut._data(t, "changeBubbles") && (ut.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || ut.event.simulate("change", this.parentNode, e, !0)
                }), ut._data(t, "changeBubbles", !0))
            }), void 0)
        },
        handle: function (e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function () {
            return ut.event.remove(this, "._change"), !Ft.test(this.nodeName)
        }
    }), ut.support.focusinBubbles || ut.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = 0,
            r = function (e) {
                ut.event.simulate(t, e.target, ut.event.fix(e), !0)
            };
        ut.event.special[t] = {
            setup: function () {
                0 === n++ && J.addEventListener(e, r, !0)
            },
            teardown: function () {
                0 === --n && J.removeEventListener(e, r, !0)
            }
        }
    }), ut.fn.extend({
        on: function (e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (a in e) this.on(a, n, r, e[a], o);
                return this
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = l;
            else if (!i) return this;
            return 1 === o && (s = i, i = function (e) {
                return ut().off(e), s.apply(this, arguments)
            }, i.guid = s.guid || (s.guid = ut.guid++)), this.each(function () {
                ut.event.add(this, e, i, r, n)
            })
        },
        one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function (e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ut(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, n, e[o]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = l), this.each(function () {
                ut.event.remove(this, e, r, n)
            })
        },
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        trigger: function (e, t) {
            return this.each(function () {
                ut.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            return n ? ut.event.trigger(e, t, n, !0) : void 0
        }
    }),
    /*!
     * Sizzle CSS Selector Engine
     * Copyright 2012 jQuery Foundation and other contributors
     * Released under the MIT license
     * http://sizzlejs.com/
     */
    function (e, t) {
        function n(e) {
            return dt.test(e + "")
        }

        function r() {
            var e, t = [];
            return e = function (n, r) {
                return t.push(n += " ") > N.cacheLength && delete e[t.shift()], e[n] = r
            }
        }

        function i(e) {
            return e[B] = !0, e
        }

        function o(e) {
            var t = H.createElement("div");
            try {
                return e(t)
            } catch (n) {
                return !1
            } finally {
                t = null
            }
        }

        function a(e, t, n, r) {
            var i, o, a, s, u, l, c, h, d, g;
            if ((t ? t.ownerDocument || t : R) !== H && j(t), t = t || H, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (s = t.nodeType) && 9 !== s) return [];
            if (!O && !r) {
                if (i = gt.exec(e))
                    if (a = i[1]) {
                        if (9 === s) {
                            if (o = t.getElementById(a), !o || !o.parentNode) return n;
                            if (o.id === a) return n.push(o), n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && $(t, o) && o.id === a) return n.push(o), n
                    } else {
                        if (i[2]) return Q.apply(n, K.call(t.getElementsByTagName(e), 0)), n;
                        if ((a = i[3]) && P.getByClassName && t.getElementsByClassName) return Q.apply(n, K.call(t.getElementsByClassName(a), 0)), n
                    }
                if (P.qsa && !L.test(e)) {
                    if (c = !0, h = B, d = t, g = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (l = f(e), (c = t.getAttribute("id")) ? h = c.replace(yt, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", u = l.length; u--;) l[u] = h + p(l[u]);
                        d = ht.test(e) && t.parentNode || t, g = l.join(",")
                    }
                    if (g) try {
                        return Q.apply(n, K.call(d.querySelectorAll(g), 0)), n
                    } catch (m) {} finally {
                        c || t.removeAttribute("id")
                    }
                }
            }
            return x(e.replace(at, "$1"), t, n, r)
        }

        function s(e, t) {
            var n = t && e,
                r = n && (~t.sourceIndex || J) - (~e.sourceIndex || J);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function u(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function c(e) {
            return i(function (t) {
                return t = +t, i(function (n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function f(e, t) {
            var n, r, i, o, s, u, l, c = X[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (s = e, u = [], l = N.preFilter; s;) {
                (!n || (r = st.exec(s))) && (r && (s = s.slice(r[0].length) || s), u.push(i = [])), n = !1, (r = lt.exec(s)) && (n = r.shift(), i.push({
                    value: n,
                    type: r[0].replace(at, " ")
                }), s = s.slice(n.length));
                for (o in N.filter)!(r = pt[o].exec(s)) || l[o] && !(r = l[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? a.error(e) : X(e, u).slice(0)
        }

        function p(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r
        }

        function h(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                o = W++;
            return t.first ? function (t, n, o) {
                for (; t = t[r];)
                    if (1 === t.nodeType || i) return e(t, n, o)
            } : function (t, n, a) {
                var s, u, l, c = I + " " + o;
                if (a) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || i) && e(t, n, a)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || i)
                            if (l = t[B] || (t[B] = {}), (u = l[r]) && u[0] === c) {
                                if ((s = u[1]) === !0 || s === k) return s === !0
                            } else if (u = l[r] = [c], u[1] = e(t, n, a) || k, u[1] === !0) return !0
            }
        }

        function d(e) {
            return e.length > 1 ? function (t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function g(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
            return a
        }

        function m(e, t, n, r, o, a) {
            return r && !r[B] && (r = m(r)), o && !o[B] && (o = m(o, a)), i(function (i, a, s, u) {
                var l, c, f, p = [],
                    h = [],
                    d = a.length,
                    m = i || b(t || "*", s.nodeType ? [s] : s, []),
                    v = !e || !i && t ? m : g(m, p, e, s, u),
                    y = n ? o || (i ? e : d || r) ? [] : a : v;
                if (n && n(v, y, s, u), r)
                    for (l = g(y, h), r(l, [], s, u), c = l.length; c--;)(f = l[c]) && (y[h[c]] = !(v[h[c]] = f));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = y.length; c--;)(f = y[c]) && l.push(v[c] = f);
                            o(null, y = [], l, u)
                        }
                        for (c = y.length; c--;)(f = y[c]) && (l = o ? Z.call(i, f) : p[c]) > -1 && (i[l] = !(a[l] = f))
                    }
                } else y = g(y === a ? y.splice(d, y.length) : y), o ? o(null, a, y, u) : Q.apply(a, y)
            })
        }

        function v(e) {
            for (var t, n, r, i = e.length, o = N.relative[e[0].type], a = o || N.relative[" "], s = o ? 1 : 0, u = h(function (e) {
                    return e === t
                }, a, !0), l = h(function (e) {
                    return Z.call(t, e) > -1
                }, a, !0), c = [
                    function (e, n, r) {
                        return !o && (r || n !== A) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r))
                    }
                ]; i > s; s++)
                if (n = N.relative[e[s].type]) c = [h(d(c), n)];
                else {
                    if (n = N.filter[e[s].type].apply(null, e[s].matches), n[B]) {
                        for (r = ++s; i > r && !N.relative[e[r].type]; r++);
                        return m(s > 1 && d(c), s > 1 && p(e.slice(0, s - 1)).replace(at, "$1"), n, r > s && v(e.slice(s, r)), i > r && v(e = e.slice(r)), i > r && p(e))
                    }
                    c.push(n)
                }
            return d(c)
        }

        function y(e, t) {
            var n = 0,
                r = t.length > 0,
                o = e.length > 0,
                s = function (i, s, u, l, c) {
                    var f, p, h, d = [],
                        m = 0,
                        v = "0",
                        y = i && [],
                        b = null != c,
                        x = A,
                        w = i || o && N.find.TAG("*", c && s.parentNode || s),
                        T = I += null == x ? 1 : Math.random() || .1;
                    for (b && (A = s !== H && s, k = n); null != (f = w[v]); v++) {
                        if (o && f) {
                            for (p = 0; h = e[p++];)
                                if (h(f, s, u)) {
                                    l.push(f);
                                    break
                                }
                            b && (I = T, k = ++n)
                        }
                        r && ((f = !h && f) && m--, i && y.push(f))
                    }
                    if (m += v, r && v !== m) {
                        for (p = 0; h = t[p++];) h(y, d, s, u);
                        if (i) {
                            if (m > 0)
                                for (; v--;) y[v] || d[v] || (d[v] = G.call(l));
                            d = g(d)
                        }
                        Q.apply(l, d), b && !i && d.length > 0 && m + t.length > 1 && a.uniqueSort(l)
                    }
                    return b && (I = T, A = x), y
                };
            return r ? i(s) : s
        }

        function b(e, t, n) {
            for (var r = 0, i = t.length; i > r; r++) a(e, t[r], n);
            return n
        }

        function x(e, t, n, r) {
            var i, o, a, s, u, l = f(e);
            if (!r && 1 === l.length) {
                if (o = l[0] = l[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && !O && N.relative[o[1].type]) {
                    if (t = N.find.ID(a.matches[0].replace(xt, wt), t)[0], !t) return n;
                    e = e.slice(o.shift().value.length)
                }
                for (i = pt.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !N.relative[s = a.type]);)
                    if ((u = N.find[s]) && (r = u(a.matches[0].replace(xt, wt), ht.test(o[0].type) && t.parentNode || t))) {
                        if (o.splice(i, 1), e = r.length && p(o), !e) return Q.apply(n, K.call(r, 0)), n;
                        break
                    }
            }
            return _(e, l)(r, t, O, n, ht.test(e)), n
        }

        function w() {}
        var T, k, N, E, C, _, S, A, j, H, D, O, L, M, F, $, q, B = "sizzle" + -new Date,
            R = e.document,
            P = {}, I = 0,
            W = 0,
            z = r(),
            X = r(),
            U = r(),
            V = typeof t,
            J = 1 << 31,
            Y = [],
            G = Y.pop,
            Q = Y.push,
            K = Y.slice,
            Z = Y.indexOf || function (e) {
                for (var t = 0, n = this.length; n > t; t++)
                    if (this[t] === e) return t;
                return -1
            }, et = "[\\x20\\t\\r\\n\\f]",
            tt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            nt = tt.replace("w", "w#"),
            rt = "([*^$|!~]?=)",
            it = "\\[" + et + "*(" + tt + ")" + et + "*(?:" + rt + et + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + nt + ")|)|)" + et + "*\\]",
            ot = ":(" + tt + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + it.replace(3, 8) + ")*)|.*)\\)|)",
            at = new RegExp("^" + et + "+|((?:^|[^\\\\])(?:\\\\.)*)" + et + "+$", "g"),
            st = new RegExp("^" + et + "*," + et + "*"),
            lt = new RegExp("^" + et + "*([\\x20\\t\\r\\n\\f>+~])" + et + "*"),
            ct = new RegExp(ot),
            ft = new RegExp("^" + nt + "$"),
            pt = {
                ID: new RegExp("^#(" + tt + ")"),
                CLASS: new RegExp("^\\.(" + tt + ")"),
                NAME: new RegExp("^\\[name=['\"]?(" + tt + ")['\"]?\\]"),
                TAG: new RegExp("^(" + tt.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + it),
                PSEUDO: new RegExp("^" + ot),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + et + "*(even|odd|(([+-]|)(\\d*)n|)" + et + "*(?:([+-]|)" + et + "*(\\d+)|))" + et + "*\\)|)", "i"),
                needsContext: new RegExp("^" + et + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + et + "*((?:-\\d)?\\d*)" + et + "*\\)|)(?=[^-]|$)", "i")
            }, ht = /[\x20\t\r\n\f]*[+~]/,
            dt = /^[^{]+\{\s*\[native code/,
            gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            mt = /^(?:input|select|textarea|button)$/i,
            vt = /^h\d$/i,
            yt = /'|\\/g,
            bt = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
            xt = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
            wt = function (e, t) {
                var n = "0x" + t - 65536;
                return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
            };
        try {
            K.call(R.documentElement.childNodes, 0)[0].nodeType
        } catch (Tt) {
            K = function (e) {
                for (var t, n = []; t = this[e++];) n.push(t);
                return n
            }
        }
        C = a.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, j = a.setDocument = function (e) {
            var r = e ? e.ownerDocument || e : R;
            return r !== H && 9 === r.nodeType && r.documentElement ? (H = r, D = r.documentElement, O = C(r), P.tagNameNoComments = o(function (e) {
                return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
            }), P.attributes = o(function (e) {
                e.innerHTML = "<select></select>";
                var t = typeof e.lastChild.getAttribute("multiple");
                return "boolean" !== t && "string" !== t
            }), P.getByClassName = o(function (e) {
                return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
            }), P.getByName = o(function (e) {
                e.id = B + 0, e.innerHTML = "<a name='" + B + "'></a><div name='" + B + "'></div>", D.insertBefore(e, D.firstChild);
                var t = r.getElementsByName && r.getElementsByName(B).length === 2 + r.getElementsByName(B + 0).length;
                return P.getIdNotName = !r.getElementById(B), D.removeChild(e), t
            }), N.attrHandle = o(function (e) {
                return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== V && "#" === e.firstChild.getAttribute("href")
            }) ? {} : {
                href: function (e) {
                    return e.getAttribute("href", 2)
                },
                type: function (e) {
                    return e.getAttribute("type")
                }
            }, P.getIdNotName ? (N.find.ID = function (e, t) {
                if (typeof t.getElementById !== V && !O) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, N.filter.ID = function (e) {
                var t = e.replace(xt, wt);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (N.find.ID = function (e, n) {
                if (typeof n.getElementById !== V && !O) {
                    var r = n.getElementById(e);
                    return r ? r.id === e || typeof r.getAttributeNode !== V && r.getAttributeNode("id").value === e ? [r] : t : []
                }
            }, N.filter.ID = function (e) {
                var t = e.replace(xt, wt);
                return function (e) {
                    var n = typeof e.getAttributeNode !== V && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), N.find.TAG = P.tagNameNoComments ? function (e, t) {
                return typeof t.getElementsByTagName !== V ? t.getElementsByTagName(e) : void 0
            } : function (e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, N.find.NAME = P.getByName && function (e, t) {
                return typeof t.getElementsByName !== V ? t.getElementsByName(name) : void 0
            }, N.find.CLASS = P.getByClassName && function (e, t) {
                return typeof t.getElementsByClassName === V || O ? void 0 : t.getElementsByClassName(e)
            }, M = [], L = [":focus"], (P.qsa = n(r.querySelectorAll)) && (o(function (e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || L.push("\\[" + et + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || L.push(":checked")
            }), o(function (e) {
                e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && L.push("[*^$]=" + et + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), L.push(",.*:")
            })), (P.matchesSelector = n(F = D.matchesSelector || D.mozMatchesSelector || D.webkitMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && o(function (e) {
                P.disconnectedMatch = F.call(e, "div"), F.call(e, "[s!='']:x"), M.push("!=", ot)
            }), L = new RegExp(L.join("|")), M = new RegExp(M.join("|")), $ = n(D.contains) || D.compareDocumentPosition ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, q = D.compareDocumentPosition ? function (e, t) {
                var n;
                return e === t ? (S = !0, 0) : (n = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & n || e.parentNode && 11 === e.parentNode.nodeType ? e === r || $(R, e) ? -1 : t === r || $(R, t) ? 1 : 0 : 4 & n ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            } : function (e, t) {
                var n, i = 0,
                    o = e.parentNode,
                    a = t.parentNode,
                    u = [e],
                    l = [t];
                if (e === t) return S = !0, 0;
                if (!o || !a) return e === r ? -1 : t === r ? 1 : o ? -1 : a ? 1 : 0;
                if (o === a) return s(e, t);
                for (n = e; n = n.parentNode;) u.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; u[i] === l[i];) i++;
                return i ? s(u[i], l[i]) : u[i] === R ? -1 : l[i] === R ? 1 : 0
            }, S = !1, [0, 0].sort(q), P.detectDuplicates = S, H) : H
        }, a.matches = function (e, t) {
            return a(e, null, null, t)
        }, a.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== H && j(e), t = t.replace(bt, "='$1']"), !(!P.matchesSelector || O || M && M.test(t) || L.test(t))) try {
                var n = F.call(e, t);
                if (n || P.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (r) {}
            return a(t, H, null, [e]).length > 0
        }, a.contains = function (e, t) {
            return (e.ownerDocument || e) !== H && j(e), $(e, t)
        }, a.attr = function (e, t) {
            var n;
            return (e.ownerDocument || e) !== H && j(e), O || (t = t.toLowerCase()), (n = N.attrHandle[t]) ? n(e) : O || P.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null
        }, a.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, a.uniqueSort = function (e) {
            var t, n = [],
                r = 1,
                i = 0;
            if (S = !P.detectDuplicates, e.sort(q), S) {
                for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
                for (; i--;) e.splice(n[i], 1)
            }
            return e
        }, E = a.getText = function (e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += E(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else
                for (; t = e[r]; r++) n += E(t);
            return n
        }, N = a.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: pt,
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(xt, wt), e[3] = (e[4] || e[5] || "").replace(xt, wt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || a.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && a.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, n = !e[5] && e[2];
                    return pt.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && ct.test(n) && (t = f(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    return "*" === e ? function () {
                        return !0
                    } : (e = e.replace(xt, wt).toLowerCase(), function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    })
                },
                CLASS: function (e) {
                    var t = z[e + " "];
                    return t || (t = new RegExp("(^|" + et + ")" + e + "(" + et + "|$)")) && z(e, function (e) {
                        return t.test(e.className || typeof e.getAttribute !== V && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, t, n) {
                    return function (r) {
                        var i = a.attr(r, e);
                        return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, u) {
                        var l, c, f, p, h, d, g = o !== a ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            y = !u && !s;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (f = t; f = f[g];)
                                        if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                    d = g = "only" === e && !d && "nextSibling"
                                }
                                return !0
                            }
                            if (d = [a ? m.firstChild : m.lastChild], a && y) {
                                for (c = m[B] || (m[B] = {}), l = c[e] || [], h = l[0] === I && l[1], p = l[0] === I && l[2], f = h && m.childNodes[h]; f = ++h && f && f[g] || (p = h = 0) || d.pop();)
                                    if (1 === f.nodeType && ++p && f === t) {
                                        c[e] = [I, h, p];
                                        break
                                    }
                            } else if (y && (l = (t[B] || (t[B] = {}))[e]) && l[0] === I) p = l[1];
                            else
                                for (;
                                    (f = ++h && f && f[g] || (p = h = 0) || d.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++p || (y && ((f[B] || (f[B] = {}))[e] = [I, p]), f !== t)););
                            return p -= i, p === r || 0 === p % r && p / r >= 0
                        }
                    }
                },
                PSEUDO: function (e, t) {
                    var n, r = N.pseudos[e] || N.setFilters[e.toLowerCase()] || a.error("unsupported pseudo: " + e);
                    return r[B] ? r(t) : r.length > 1 ? (n = [e, e, "", t], N.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, n) {
                        for (var i, o = r(e, t), a = o.length; a--;) i = Z.call(e, o[a]), e[i] = !(n[i] = o[a])
                    }) : function (e) {
                        return r(e, 0, n)
                    }) : r
                }
            },
            pseudos: {
                not: i(function (e) {
                    var t = [],
                        n = [],
                        r = _(e.replace(at, "$1"));
                    return r[B] ? i(function (e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, i, o) {
                        return t[0] = e, r(t, null, o, n), !n.pop()
                    }
                }),
                has: i(function (e) {
                    return function (t) {
                        return a(e, t).length > 0
                    }
                }),
                contains: i(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || E(t)).indexOf(e) > -1
                    }
                }),
                lang: i(function (e) {
                    return ft.test(e || "") || a.error("unsupported lang: " + e), e = e.replace(xt, wt).toLowerCase(),
                    function (t) {
                        var n;
                        do
                            if (n = O ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function (e) {
                    return e === D
                },
                focus: function (e) {
                    return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !! (e.type || e.href || ~e.tabIndex)
                },
                enabled: function (e) {
                    return e.disabled === !1
                },
                disabled: function (e) {
                    return e.disabled === !0
                },
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !! e.checked || "option" === t && !! e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                    return !0
                },
                parent: function (e) {
                    return !N.pseudos.empty(e)
                },
                header: function (e) {
                    return vt.test(e.nodeName)
                },
                input: function (e) {
                    return mt.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                },
                first: c(function () {
                    return [0]
                }),
                last: c(function (e, t) {
                    return [t - 1]
                }),
                eq: c(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: c(function (e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: c(function (e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: c(function (e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: c(function (e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        };
        for (T in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) N.pseudos[T] = u(T);
        for (T in {
            submit: !0,
            reset: !0
        }) N.pseudos[T] = l(T);
        _ = a.compile = function (e, t) {
            var n, r = [],
                i = [],
                o = U[e + " "];
            if (!o) {
                for (t || (t = f(e)), n = t.length; n--;) o = v(t[n]), o[B] ? r.push(o) : i.push(o);
                o = U(e, y(i, r))
            }
            return o
        }, N.pseudos.nth = N.pseudos.eq, N.filters = w.prototype = N.pseudos, N.setFilters = new w, j(), a.attr = ut.attr, ut.find = a, ut.expr = a.selectors, ut.expr[":"] = ut.expr.pseudos, ut.unique = a.uniqueSort, ut.text = a.getText, ut.isXMLDoc = a.isXML, ut.contains = a.contains
    }(e);
    var Pt = /Until$/,
        It = /^(?:parents|prev(?:Until|All))/,
        Wt = /^.[^:#\[\.,]*$/,
        zt = ut.expr.match.needsContext,
        Xt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ut.fn.extend({
        find: function (e) {
            var t, n, r, i = this.length;
            if ("string" != typeof e) return r = this, this.pushStack(ut(e).filter(function () {
                for (t = 0; i > t; t++)
                    if (ut.contains(r[t], this)) return !0
            }));
            for (n = [], t = 0; i > t; t++) ut.find(e, this[t], n);
            return n = this.pushStack(i > 1 ? ut.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + e, n
        },
        has: function (e) {
            var t, n = ut(e, this),
                r = n.length;
            return this.filter(function () {
                for (t = 0; r > t; t++)
                    if (ut.contains(this, n[t])) return !0
            })
        },
        not: function (e) {
            return this.pushStack(f(this, e, !1))
        },
        filter: function (e) {
            return this.pushStack(f(this, e, !0))
        },
        is: function (e) {
            return !!e && ("string" == typeof e ? zt.test(e) ? ut(e, this.context).index(this[0]) >= 0 : ut.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function (e, t) {
            for (var n, r = 0, i = this.length, o = [], a = zt.test(e) || "string" != typeof e ? ut(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n.ownerDocument && n !== t && 11 !== n.nodeType;) {
                    if (a ? a.index(n) > -1 : ut.find.matchesSelector(n, e)) {
                        o.push(n);
                        break
                    }
                    n = n.parentNode
                }
            return this.pushStack(o.length > 1 ? ut.unique(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? ut.inArray(this[0], ut(e)) : ut.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            var n = "string" == typeof e ? ut(e, t) : ut.makeArray(e && e.nodeType ? [e] : e),
                r = ut.merge(this.get(), n);
            return this.pushStack(ut.unique(r))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ut.fn.andSelf = ut.fn.addBack, ut.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return ut.dir(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return ut.dir(e, "parentNode", n)
        },
        next: function (e) {
            return c(e, "nextSibling")
        },
        prev: function (e) {
            return c(e, "previousSibling")
        },
        nextAll: function (e) {
            return ut.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return ut.dir(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return ut.dir(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return ut.dir(e, "previousSibling", n)
        },
        siblings: function (e) {
            return ut.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return ut.sibling(e.firstChild)
        },
        contents: function (e) {
            return ut.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ut.merge([], e.childNodes)
        }
    }, function (e, t) {
        ut.fn[e] = function (n, r) {
            var i = ut.map(this, t, n);
            return Pt.test(e) || (r = n), r && "string" == typeof r && (i = ut.filter(r, i)), i = this.length > 1 && !Xt[e] ? ut.unique(i) : i, this.length > 1 && It.test(e) && (i = i.reverse()), this.pushStack(i)
        }
    }), ut.extend({
        filter: function (e, t, n) {
            return n && (e = ":not(" + e + ")"), 1 === t.length ? ut.find.matchesSelector(t[0], e) ? [t[0]] : [] : ut.find.matches(e, t)
        },
        dir: function (e, n, r) {
            for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !ut(o).is(r));) 1 === o.nodeType && i.push(o), o = o[n];
            return i
        },
        sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var Ut = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Vt = / jQuery\d+="(?:null|\d+)"/g,
        Jt = new RegExp("<(?:" + Ut + ")[\\s/>]", "i"),
        Yt = /^\s+/,
        Gt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Qt = /<([\w:]+)/,
        Kt = /<tbody/i,
        Zt = /<|&#?\w+;/,
        en = /<(?:script|style|link)/i,
        tn = /^(?:checkbox|radio)$/i,
        nn = /checked\s*(?:[^=]|=\s*.checked.)/i,
        rn = /^$|\/(?:java|ecma)script/i,
        on = /^true\/(.*)/,
        an = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        sn = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ut.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, un = p(J),
        ln = un.appendChild(J.createElement("div"));
    sn.optgroup = sn.option, sn.tbody = sn.tfoot = sn.colgroup = sn.caption = sn.thead, sn.th = sn.td, ut.fn.extend({
        text: function (e) {
            return ut.access(this, function (e) {
                return e === t ? ut.text(this) : this.empty().append((this[0] && this[0].ownerDocument || J).createTextNode(e))
            }, null, e, arguments.length)
        },
        wrapAll: function (e) {
            if (ut.isFunction(e)) return this.each(function (t) {
                ut(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = ut(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function (e) {
            return ut.isFunction(e) ? this.each(function (t) {
                ut(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = ut(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = ut.isFunction(e);
            return this.each(function (n) {
                ut(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                ut.nodeName(this, "body") || ut(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function () {
            return this.domManip(arguments, !0, function (e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
            })
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
            })
        },
        before: function () {
            return this.domManip(arguments, !1, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return this.domManip(arguments, !1, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function (e, t) {
            for (var n, r = 0; null != (n = this[r]); r++)(!e || ut.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || ut.cleanData(b(n)), n.parentNode && (t && ut.contains(n.ownerDocument, n) && m(b(n, "script")), n.parentNode.removeChild(n)));
            return this
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && ut.cleanData(b(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && ut.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return ut.clone(this, e, t)
            })
        },
        html: function (e) {
            return ut.access(this, function (e) {
                var n = this[0] || {}, r = 0,
                    i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Vt, "") : t;
                if (!("string" != typeof e || en.test(e) || !ut.support.htmlSerialize && Jt.test(e) || !ut.support.leadingWhitespace && Yt.test(e) || sn[(Qt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Gt, "<$1></$2>");
                    try {
                        for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (ut.cleanData(b(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (o) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function (e) {
            var t = ut.isFunction(e);
            return t || "string" == typeof e || (e = ut(e).not(this).detach()), this.domManip([e], !0, function (e) {
                var t = this.nextSibling,
                    n = this.parentNode;
                n && (ut(this).remove(), n.insertBefore(e, t))
            })
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (e, n, r) {
            e = tt.apply([], e);
            var i, o, a, s, u, l, c = 0,
                f = this.length,
                p = this,
                m = f - 1,
                v = e[0],
                y = ut.isFunction(v);
            if (y || !(1 >= f || "string" != typeof v || ut.support.checkClone) && nn.test(v)) return this.each(function (i) {
                var o = p.eq(i);
                y && (e[0] = v.call(this, i, n ? o.html() : t)), o.domManip(e, n, r)
            });
            if (f && (l = ut.buildFragment(e, this[0].ownerDocument, !1, this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) {
                for (n = n && ut.nodeName(i, "tr"), s = ut.map(b(l, "script"), d), a = s.length; f > c; c++) o = l, c !== m && (o = ut.clone(o, !0, !0), a && ut.merge(s, b(o, "script"))), r.call(n && ut.nodeName(this[c], "table") ? h(this[c], "tbody") : this[c], o, c);
                if (a)
                    for (u = s[s.length - 1].ownerDocument, ut.map(s, g), c = 0; a > c; c++) o = s[c], rn.test(o.type || "") && !ut._data(o, "globalEval") && ut.contains(u, o) && (o.src ? ut.ajax({
                        url: o.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : ut.globalEval((o.text || o.textContent || o.innerHTML || "").replace(an, "")));
                l = i = null
            }
            return this
        }
    }), ut.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        ut.fn[e] = function (e) {
            for (var n, r = 0, i = [], o = ut(e), a = o.length - 1; a >= r; r++) n = r === a ? this : this.clone(!0), ut(o[r])[t](n), nt.apply(i, n.get());
            return this.pushStack(i)
        }
    }), ut.extend({
        clone: function (e, t, n) {
            var r, i, o, a, s, u = ut.contains(e.ownerDocument, e);
            if (ut.support.html5Clone || ut.isXMLDoc(e) || !Jt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (ln.innerHTML = e.outerHTML, ln.removeChild(o = ln.firstChild)), !(ut.support.noCloneEvent && ut.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ut.isXMLDoc(e)))
                for (r = b(o), s = b(e), a = 0; null != (i = s[a]); ++a) r[a] && y(i, r[a]);
            if (t)
                if (n)
                    for (s = s || b(e), r = r || b(o), a = 0; null != (i = s[a]); a++) v(i, r[a]);
                else v(e, o);
            return r = b(o, "script"), r.length > 0 && m(r, !u && b(e, "script")), r = s = i = null, o
        },
        buildFragment: function (e, t, n, r) {
            for (var i, o, a, s, u, l, c, f = e.length, h = p(t), d = [], g = 0; f > g; g++)
                if (o = e[g], o || 0 === o)
                    if ("object" === ut.type(o)) ut.merge(d, o.nodeType ? [o] : o);
                    else
            if (Zt.test(o)) {
                for (s = s || h.appendChild(t.createElement("div")), u = (Qt.exec(o) || ["", ""])[1].toLowerCase(), c = sn[u] || sn._default, s.innerHTML = c[1] + o.replace(Gt, "<$1></$2>") + c[2], i = c[0]; i--;) s = s.lastChild;
                if (!ut.support.leadingWhitespace && Yt.test(o) && d.push(t.createTextNode(Yt.exec(o)[0])), !ut.support.tbody)
                    for (o = "table" !== u || Kt.test(o) ? "<table>" !== c[1] || Kt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length; i--;) ut.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l);
                for (ut.merge(d, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = h.lastChild
            } else d.push(t.createTextNode(o));
            for (s && h.removeChild(s), ut.support.appendChecked || ut.grep(b(d, "input"), x), g = 0; o = d[g++];)
                if ((!r || -1 === ut.inArray(o, r)) && (a = ut.contains(o.ownerDocument, o), s = b(h.appendChild(o), "script"), a && m(s), n))
                    for (i = 0; o = s[i++];) rn.test(o.type || "") && n.push(o);
            return s = null, h
        },
        cleanData: function (e, t) {
            for (var n, r, i, o, a = 0, s = ut.expando, u = ut.cache, l = ut.support.deleteExpando, c = ut.event.special; null != (n = e[a]); a++)
                if ((t || ut.acceptData(n)) && (i = n[s], o = i && u[i])) {
                    if (o.events)
                        for (r in o.events) c[r] ? ut.event.remove(n, r) : ut.removeEvent(n, r, o.handle);
                    u[i] && (delete u[i], l ? delete n[s] : typeof n.removeAttribute !== V ? n.removeAttribute(s) : n[s] = null, Z.push(i))
                }
        }
    });
    var cn, fn, pn, hn = /alpha\([^)]*\)/i,
        dn = /opacity\s*=\s*([^)]*)/,
        gn = /^(top|right|bottom|left)$/,
        mn = /^(none|table(?!-c[ea]).+)/,
        vn = /^margin/,
        yn = new RegExp("^(" + lt + ")(.*)$", "i"),
        bn = new RegExp("^(" + lt + ")(?!px)[a-z%]+$", "i"),
        xn = new RegExp("^([+-])=(" + lt + ")", "i"),
        wn = {
            BODY: "block"
        }, Tn = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, kn = {
            letterSpacing: 0,
            fontWeight: 400
        }, Nn = ["Top", "Right", "Bottom", "Left"],
        En = ["Webkit", "O", "Moz", "ms"];
    ut.fn.extend({
        css: function (e, n) {
            return ut.access(this, function (e, n, r) {
                var i, o, a = {}, s = 0;
                if (ut.isArray(n)) {
                    for (o = fn(e), i = n.length; i > s; s++) a[n[s]] = ut.css(e, n[s], !1, o);
                    return a
                }
                return r !== t ? ut.style(e, n, r) : ut.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function () {
            return k(this, !0)
        },
        hide: function () {
            return k(this)
        },
        toggle: function (e) {
            var t = "boolean" == typeof e;
            return this.each(function () {
                (t ? e : T(this)) ? ut(this).show() : ut(this).hide()
            })
        }
    }), ut.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = pn(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ut.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, u = ut.camelCase(n),
                    l = e.style;
                if (n = ut.cssProps[u] || (ut.cssProps[u] = w(l, u)), s = ut.cssHooks[n] || ut.cssHooks[u], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : l[n];
                if (a = typeof r, "string" === a && (o = xn.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(ut.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || ut.cssNumber[u] || (r += "px"), ut.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
                    l[n] = r
                } catch (c) {}
            }
        },
        css: function (e, n, r, i) {
            var o, a, s, u = ut.camelCase(n);
            return n = ut.cssProps[u] || (ut.cssProps[u] = w(e.style, u)), s = ut.cssHooks[n] || ut.cssHooks[u], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = pn(e, n, i)), "normal" === a && n in kn && (a = kn[n]), "" === r || r ? (o = parseFloat(a), r === !0 || ut.isNumeric(o) ? o || 0 : a) : a
        },
        swap: function (e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        }
    }), e.getComputedStyle ? (fn = function (t) {
        return e.getComputedStyle(t, null)
    }, pn = function (e, n, r) {
        var i, o, a, s = r || fn(e),
            u = s ? s.getPropertyValue(n) || s[n] : t,
            l = e.style;
        return s && ("" !== u || ut.contains(e.ownerDocument, e) || (u = ut.style(e, n)), bn.test(u) && vn.test(n) && (i = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, u = s.width, l.width = i, l.minWidth = o, l.maxWidth = a)), u
    }) : J.documentElement.currentStyle && (fn = function (e) {
        return e.currentStyle
    }, pn = function (e, n, r) {
        var i, o, a, s = r || fn(e),
            u = s ? s[n] : t,
            l = e.style;
        return null == u && l && l[n] && (u = l[n]), bn.test(u) && !gn.test(n) && (i = l.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), l.left = "fontSize" === n ? "1em" : u, u = l.pixelLeft + "px", l.left = i, a && (o.left = a)), "" === u ? "auto" : u
    }), ut.each(["height", "width"], function (e, t) {
        ut.cssHooks[t] = {
            get: function (e, n, r) {
                return n ? 0 === e.offsetWidth && mn.test(ut.css(e, "display")) ? ut.swap(e, Tn, function () {
                    return C(e, t, r)
                }) : C(e, t, r) : void 0
            },
            set: function (e, n, r) {
                var i = r && fn(e);
                return N(e, n, r ? E(e, t, r, ut.support.boxSizing && "border-box" === ut.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), ut.support.opacity || (ut.cssHooks.opacity = {
        get: function (e, t) {
            return dn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function (e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = ut.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === ut.trim(o.replace(hn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = hn.test(o) ? o.replace(hn, i) : o + " " + i)
        }
    }), ut(function () {
        ut.support.reliableMarginRight || (ut.cssHooks.marginRight = {
            get: function (e, t) {
                return t ? ut.swap(e, {
                    display: "inline-block"
                }, pn, [e, "marginRight"]) : void 0
            }
        }), !ut.support.pixelPosition && ut.fn.position && ut.each(["top", "left"], function (e, t) {
            ut.cssHooks[t] = {
                get: function (e, n) {
                    return n ? (n = pn(e, t), bn.test(n) ? ut(e).position()[t] + "px" : n) : void 0
                }
            }
        })
    }), ut.expr && ut.expr.filters && (ut.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ut.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ut.css(e, "display"))
    }, ut.expr.filters.visible = function (e) {
        return !ut.expr.filters.hidden(e)
    }), ut.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        ut.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Nn[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, vn.test(e) || (ut.cssHooks[e + t].set = N)
    });
    var Cn = /%20/g,
        _n = /\[\]$/,
        Sn = /\r?\n/g,
        An = /^(?:submit|button|image|reset|file)$/i,
        jn = /^(?:input|select|textarea|keygen)/i;
    ut.fn.extend({
        serialize: function () {
            return ut.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = ut.prop(this, "elements");
                return e ? ut.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !ut(this).is(":disabled") && jn.test(this.nodeName) && !An.test(e) && (this.checked || !tn.test(e))
            }).map(function (e, t) {
                var n = ut(this).val();
                return null == n ? null : ut.isArray(n) ? ut.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(Sn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Sn, "\r\n")
                }
            }).get()
        }
    }), ut.param = function (e, n) {
        var r, i = [],
            o = function (e, t) {
                t = ut.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (n === t && (n = ut.ajaxSettings && ut.ajaxSettings.traditional), ut.isArray(e) || e.jquery && !ut.isPlainObject(e)) ut.each(e, function () {
            o(this.name, this.value)
        });
        else
            for (r in e) A(r, e[r], n, o);
        return i.join("&").replace(Cn, "+")
    }, ut.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        ut.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), ut.fn.hover = function (e, t) {
        return this.mouseenter(e).mouseleave(t || e)
    };
    var Hn, Dn, On = ut.now(),
        Ln = /\?/,
        Mn = /#.*$/,
        Fn = /([?&])_=[^&]*/,
        $n = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        qn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Bn = /^(?:GET|HEAD)$/,
        Rn = /^\/\//,
        Pn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        In = ut.fn.load,
        Wn = {}, zn = {}, Xn = "*/".concat("*");
    try {
        Dn = Y.href
    } catch (Un) {
        Dn = J.createElement("a"), Dn.href = "", Dn = Dn.href
    }
    Hn = Pn.exec(Dn.toLowerCase()) || [], ut.fn.load = function (e, n, r) {
        if ("string" != typeof e && In) return In.apply(this, arguments);
        var i, o, a, s = this,
            u = e.indexOf(" ");
        return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)), ut.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && ut.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done(function (e) {
            o = arguments, s.html(i ? ut("<div>").append(ut.parseHTML(e)).find(i) : e)
        }).complete(r && function (e, t) {
            s.each(r, o || [e.responseText, t, e])
        }), this
    }, ut.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        ut.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), ut.each(["get", "post"], function (e, n) {
        ut[n] = function (e, r, i, o) {
            return ut.isFunction(r) && (o = o || i, i = r, r = t), ut.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    }), ut.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Dn,
            type: "GET",
            isLocal: qn.test(Hn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Xn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": ut.parseJSON,
                "text xml": ut.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? D(D(e, ut.ajaxSettings), t) : D(ut.ajaxSettings, e)
        },
        ajaxPrefilter: j(Wn),
        ajaxTransport: j(zn),
        ajax: function (e, n) {
            function r(e, n, r, i) {
                var o, f, y, b, w, k = n;
                2 !== x && (x = 2, u && clearTimeout(u), c = t, s = i || "", T.readyState = e > 0 ? 4 : 0, r && (b = O(p, T, r)), e >= 200 && 300 > e || 304 === e ? (p.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (ut.lastModified[a] = w), w = T.getResponseHeader("etag"), w && (ut.etag[a] = w)), 204 === e ? (o = !0, k = "nocontent") : 304 === e ? (o = !0, k = "notmodified") : (o = L(p, b), k = o.state, f = o.data, y = o.error, o = !y)) : (y = k, (e || !k) && (k = "error", 0 > e && (e = 0))), T.status = e, T.statusText = (n || k) + "", o ? g.resolveWith(h, [f, k, T]) : g.rejectWith(h, [T, k, y]), T.statusCode(v), v = t, l && d.trigger(o ? "ajaxSuccess" : "ajaxError", [T, p, o ? f : y]), m.fireWith(h, [T, k]), l && (d.trigger("ajaxComplete", [T, p]), --ut.active || ut.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = t), n = n || {};
            var i, o, a, s, u, l, c, f, p = ut.ajaxSetup({}, n),
                h = p.context || p,
                d = p.context && (h.nodeType || h.jquery) ? ut(h) : ut.event,
                g = ut.Deferred(),
                m = ut.Callbacks("once memory"),
                v = p.statusCode || {}, y = {}, b = {}, x = 0,
                w = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === x) {
                            if (!f)
                                for (f = {}; t = $n.exec(s);) f[t[1].toLowerCase()] = t[2];
                            t = f[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === x ? s : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return x || (e = b[n] = b[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return x || (p.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (2 > x)
                                for (t in e) v[t] = [v[t], e[t]];
                            else T.always(e[T.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || w;
                        return c && c.abort(t), r(0, t), this
                    }
                };
            if (g.promise(T).complete = m.add, T.success = T.done, T.error = T.fail, p.url = ((e || p.url || Dn) + "").replace(Mn, "").replace(Rn, Hn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = ut.trim(p.dataType || "*").toLowerCase().match(ct) || [""], null == p.crossDomain && (i = Pn.exec(p.url.toLowerCase()), p.crossDomain = !(!i || i[1] === Hn[1] && i[2] === Hn[2] && (i[3] || ("http:" === i[1] ? 80 : 443)) == (Hn[3] || ("http:" === Hn[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = ut.param(p.data, p.traditional)), H(Wn, p, n, T), 2 === x) return T;
            l = p.global, l && 0 === ut.active++ && ut.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Bn.test(p.type), a = p.url, p.hasContent || (p.data && (a = p.url += (Ln.test(a) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = Fn.test(a) ? a.replace(Fn, "$1_=" + On++) : a + (Ln.test(a) ? "&" : "?") + "_=" + On++)), p.ifModified && (ut.lastModified[a] && T.setRequestHeader("If-Modified-Since", ut.lastModified[a]), ut.etag[a] && T.setRequestHeader("If-None-Match", ut.etag[a])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", p.contentType), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Xn + "; q=0.01" : "") : p.accepts["*"]);
            for (o in p.headers) T.setRequestHeader(o, p.headers[o]);
            if (p.beforeSend && (p.beforeSend.call(h, T, p) === !1 || 2 === x)) return T.abort();
            w = "abort";
            for (o in {
                success: 1,
                error: 1,
                complete: 1
            }) T[o](p[o]);
            if (c = H(zn, p, n, T)) {
                T.readyState = 1, l && d.trigger("ajaxSend", [T, p]), p.async && p.timeout > 0 && (u = setTimeout(function () {
                    T.abort("timeout")
                }, p.timeout));
                try {
                    x = 1, c.send(y, r)
                } catch (k) {
                    if (!(2 > x)) throw k;
                    r(-1, k)
                }
            } else r(-1, "No Transport");
            return T
        },
        getScript: function (e, n) {
            return ut.get(e, t, n, "script")
        },
        getJSON: function (e, t, n) {
            return ut.get(e, t, n, "json")
        }
    }), ut.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (e) {
                return ut.globalEval(e), e
            }
        }
    }), ut.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), ut.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var n, r = J.head || ut("head")[0] || J.documentElement;
            return {
                send: function (t, i) {
                    n = J.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function () {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var Vn = [],
        Jn = /(=)\?(?=&|$)|\?\?/;
    ut.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Vn.pop() || ut.expando + "_" + On++;
            return this[e] = !0, e
        }
    }), ut.ajaxPrefilter("json jsonp", function (n, r, i) {
        var o, a, s, u = n.jsonp !== !1 && (Jn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Jn.test(n.data) && "data");
        return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = ut.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, u ? n[u] = n[u].replace(Jn, "$1" + o) : n.jsonp !== !1 && (n.url += (Ln.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () {
            return s || ut.error(o + " was not called"), s[0]
        }, n.dataTypes[0] = "json", a = e[o], e[o] = function () {
            s = arguments
        }, i.always(function () {
            e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Vn.push(o)), s && ut.isFunction(a) && a(s[0]), s = a = t
        }), "script") : void 0
    });
    var Yn, Gn, Qn = 0,
        Kn = e.ActiveXObject && function () {
            var e;
            for (e in Yn) Yn[e](t, !0)
        };
    ut.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && M() || F()
    } : M, Gn = ut.ajaxSettings.xhr(), ut.support.cors = !! Gn && "withCredentials" in Gn, Gn = ut.support.ajax = !! Gn, Gn && ut.ajaxTransport(function (n) {
        if (!n.crossDomain || ut.support.cors) {
            var r;
            return {
                send: function (i, o) {
                    var a, s, u = n.xhr();
                    if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields)
                        for (s in n.xhrFields) u[s] = n.xhrFields[s];
                    n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i) u.setRequestHeader(s, i[s])
                    } catch (l) {}
                    u.send(n.hasContent && n.data || null), r = function (e, i) {
                        var s, l, c, f;
                        try {
                            if (r && (i || 4 === u.readyState))
                                if (r = t, a && (u.onreadystatechange = ut.noop, Kn && delete Yn[a]), i) 4 !== u.readyState && u.abort();
                                else {
                                    f = {}, s = u.status, l = u.getAllResponseHeaders(), "string" == typeof u.responseText && (f.text = u.responseText);
                                    try {
                                        c = u.statusText
                                    } catch (p) {
                                        c = ""
                                    }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = f.text ? 200 : 404
                                }
                        } catch (h) {
                            i || o(-1, h)
                        }
                        f && o(s, c, f, l)
                    }, n.async ? 4 === u.readyState ? setTimeout(r) : (a = ++Qn, Kn && (Yn || (Yn = {}, ut(e).unload(Kn)), Yn[a] = r), u.onreadystatechange = r) : r()
                },
                abort: function () {
                    r && r(t, !0)
                }
            }
        }
    });
    var Zn, er, tr = /^(?:toggle|show|hide)$/,
        nr = new RegExp("^(?:([+-])=|)(" + lt + ")([a-z%]*)$", "i"),
        rr = /queueHooks$/,
        ir = [P],
        or = {
            "*": [
                function (e, t) {
                    var n, r, i = this.createTween(e, t),
                        o = nr.exec(t),
                        a = i.cur(),
                        s = +a || 0,
                        u = 1,
                        l = 20;
                    if (o) {
                        if (n = +o[2], r = o[3] || (ut.cssNumber[e] ? "" : "px"), "px" !== r && s) {
                            s = ut.css(i.elem, e, !0) || n || 1;
                            do u = u || ".5", s /= u, ut.style(i.elem, e, s + r); while (u !== (u = i.cur() / a) && 1 !== u && --l)
                        }
                        i.unit = r, i.start = s, i.end = o[1] ? s + (o[1] + 1) * n : n
                    }
                    return i
                }
            ]
        };
    ut.Animation = ut.extend(B, {
        tweener: function (e, t) {
            ut.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, r = 0, i = e.length; i > r; r++) n = e[r], or[n] = or[n] || [], or[n].unshift(t)
        },
        prefilter: function (e, t) {
            t ? ir.unshift(e) : ir.push(e)
        }
    }), ut.Tween = I, I.prototype = {
        constructor: I,
        init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ut.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = I.propHooks[this.prop];
            return e && e.get ? e.get(this) : I.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = I.propHooks[this.prop];
            return this.pos = t = this.options.duration ? ut.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : I.propHooks._default.set(this), this
        }
    }, I.prototype.init.prototype = I.prototype, I.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ut.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function (e) {
                ut.fx.step[e.prop] ? ut.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ut.cssProps[e.prop]] || ut.cssHooks[e.prop]) ? ut.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, I.propHooks.scrollTop = I.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ut.each(["toggle", "show", "hide"], function (e, t) {
        var n = ut.fn[t];
        ut.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(W(t, !0), e, r, i)
        }
    }), ut.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(T).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function (e, t, n, r) {
            var i = ut.isEmptyObject(e),
                o = ut.speed(t, n, r),
                a = function () {
                    var t = B(this, ut.extend({}, e), o);
                    a.finish = function () {
                        t.stop(!0)
                    }, (i || ut._data(this, "finish")) && t.stop(!0)
                };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function (e, n, r) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0,
                    n = null != e && e + "queueHooks",
                    o = ut.timers,
                    a = ut._data(this);
                if (n) a[n] && a[n].stop && i(a[n]);
                else
                    for (n in a) a[n] && a[n].stop && rr.test(n) && i(a[n]);
                for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                (t || !r) && ut.dequeue(this, e)
            })
        },
        finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = ut._data(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = ut.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, ut.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), ut.each({
        slideDown: W("show"),
        slideUp: W("hide"),
        slideToggle: W("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, t) {
        ut.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), ut.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? ut.extend({}, e) : {
            complete: n || !n && t || ut.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !ut.isFunction(t) && t
        };
        return r.duration = ut.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ut.fx.speeds ? ut.fx.speeds[r.duration] : ut.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            ut.isFunction(r.old) && r.old.call(this), r.queue && ut.dequeue(this, r.queue)
        }, r
    }, ut.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, ut.timers = [], ut.fx = I.prototype.init, ut.fx.tick = function () {
        var e, n = ut.timers,
            r = 0;
        for (Zn = ut.now(); r < n.length; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || ut.fx.stop(), Zn = t
    }, ut.fx.timer = function (e) {
        e() && ut.timers.push(e) && ut.fx.start()
    }, ut.fx.interval = 13, ut.fx.start = function () {
        er || (er = setInterval(ut.fx.tick, ut.fx.interval))
    }, ut.fx.stop = function () {
        clearInterval(er), er = null
    }, ut.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ut.fx.step = {}, ut.expr && ut.expr.filters && (ut.expr.filters.animated = function (e) {
        return ut.grep(ut.timers, function (t) {
            return e === t.elem
        }).length
    }), ut.fn.offset = function (e) {
        if (arguments.length) return e === t ? this : this.each(function (t) {
            ut.offset.setOffset(this, e, t)
        });
        var n, r, i = {
                top: 0,
                left: 0
            }, o = this[0],
            a = o && o.ownerDocument;
        if (a) return n = a.documentElement, ut.contains(n, o) ? (typeof o.getBoundingClientRect !== V && (i = o.getBoundingClientRect()), r = z(a), {
            top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : i
    }, ut.offset = {
        setOffset: function (e, t, n) {
            var r = ut.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i, o, a = ut(e),
                s = a.offset(),
                u = ut.css(e, "top"),
                l = ut.css(e, "left"),
                c = ("absolute" === r || "fixed" === r) && ut.inArray("auto", [u, l]) > -1,
                f = {}, p = {};
            c ? (p = a.position(), i = p.top, o = p.left) : (i = parseFloat(u) || 0, o = parseFloat(l) || 0), ut.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + i), null != t.left && (f.left = t.left - s.left + o), "using" in t ? t.using.call(e, f) : a.css(f)
        }
    }, ut.fn.extend({
        position: function () {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    }, r = this[0];
                return "fixed" === ut.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ut.nodeName(e[0], "html") || (n = e.offset()), n.top += ut.css(e[0], "borderTopWidth", !0), n.left += ut.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - ut.css(r, "marginTop", !0),
                    left: t.left - n.left - ut.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || J.documentElement; e && !ut.nodeName(e, "html") && "static" === ut.css(e, "position");) e = e.offsetParent;
                return e || J.documentElement
            })
        }
    }), ut.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, n) {
        var r = /Y/.test(n);
        ut.fn[e] = function (i) {
            return ut.access(this, function (e, i, o) {
                var a = z(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? ut(a).scrollLeft() : o, r ? o : ut(a).scrollTop()) : e[i] = o, void 0)
            }, e, i, arguments.length, null)
        }
    }), ut.each({
        Height: "height",
        Width: "width"
    }, function (e, n) {
        ut.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function (r, i) {
            ut.fn[i] = function (i, o) {
                var a = arguments.length && (r || "boolean" != typeof i),
                    s = r || (i === !0 || o === !0 ? "margin" : "border");
                return ut.access(this, function (n, r, i) {
                    var o;
                    return ut.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? ut.css(n, r, s) : ut.style(n, r, i, s)
                }, n, a ? i : t, a, null)
            }
        })
    }), e.jQuery = e.$ = ut, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return ut
    })
}(window),
function () {
    var e = this,
        t = e._,
        n = {}, r = Array.prototype,
        i = Object.prototype,
        o = Function.prototype,
        a = r.push,
        s = r.slice,
        u = r.concat,
        l = i.toString,
        c = i.hasOwnProperty,
        f = r.forEach,
        p = r.map,
        h = r.reduce,
        d = r.reduceRight,
        g = r.filter,
        m = r.every,
        v = r.some,
        y = r.indexOf,
        b = r.lastIndexOf,
        x = Array.isArray,
        w = Object.keys,
        T = o.bind,
        k = function (e) {
            return e instanceof k ? e : this instanceof k ? (this._wrapped = e, void 0) : new k(e)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = k), exports._ = k) : e._ = k, k.VERSION = "1.4.4";
    var N = k.each = k.forEach = function (e, t, r) {
        if (null != e)
            if (f && e.forEach === f) e.forEach(t, r);
            else
        if (e.length === +e.length) {
            for (var i = 0, o = e.length; o > i; i++)
                if (t.call(r, e[i], i, e) === n) return
        } else
            for (var a in e)
                if (k.has(e, a) && t.call(r, e[a], a, e) === n) return
    };
    k.map = k.collect = function (e, t, n) {
        var r = [];
        return null == e ? r : p && e.map === p ? e.map(t, n) : (N(e, function (e, i, o) {
            r[r.length] = t.call(n, e, i, o)
        }), r)
    };
    var E = "Reduce of empty array with no initial value";
    k.reduce = k.foldl = k.inject = function (e, t, n, r) {
        var i = arguments.length > 2;
        if (null == e && (e = []), h && e.reduce === h) return r && (t = k.bind(t, r)), i ? e.reduce(t, n) : e.reduce(t);
        if (N(e, function (e, o, a) {
            i ? n = t.call(r, n, e, o, a) : (n = e, i = !0)
        }), !i) throw new TypeError(E);
        return n
    }, k.reduceRight = k.foldr = function (e, t, n, r) {
        var i = arguments.length > 2;
        if (null == e && (e = []), d && e.reduceRight === d) return r && (t = k.bind(t, r)), i ? e.reduceRight(t, n) : e.reduceRight(t);
        var o = e.length;
        if (o !== +o) {
            var a = k.keys(e);
            o = a.length
        }
        if (N(e, function (s, u, l) {
            u = a ? a[--o] : --o, i ? n = t.call(r, n, e[u], u, l) : (n = e[u], i = !0)
        }), !i) throw new TypeError(E);
        return n
    }, k.find = k.detect = function (e, t, n) {
        var r;
        return C(e, function (e, i, o) {
            return t.call(n, e, i, o) ? (r = e, !0) : void 0
        }), r
    }, k.filter = k.select = function (e, t, n) {
        var r = [];
        return null == e ? r : g && e.filter === g ? e.filter(t, n) : (N(e, function (e, i, o) {
            t.call(n, e, i, o) && (r[r.length] = e)
        }), r)
    }, k.reject = function (e, t, n) {
        return k.filter(e, function (e, r, i) {
            return !t.call(n, e, r, i)
        }, n)
    }, k.every = k.all = function (e, t, r) {
        t || (t = k.identity);
        var i = !0;
        return null == e ? i : m && e.every === m ? e.every(t, r) : (N(e, function (e, o, a) {
            return (i = i && t.call(r, e, o, a)) ? void 0 : n
        }), !! i)
    };
    var C = k.some = k.any = function (e, t, r) {
        t || (t = k.identity);
        var i = !1;
        return null == e ? i : v && e.some === v ? e.some(t, r) : (N(e, function (e, o, a) {
            return i || (i = t.call(r, e, o, a)) ? n : void 0
        }), !! i)
    };
    k.contains = k.include = function (e, t) {
        return null == e ? !1 : y && e.indexOf === y ? -1 != e.indexOf(t) : C(e, function (e) {
            return e === t
        })
    }, k.invoke = function (e, t) {
        var n = s.call(arguments, 2),
            r = k.isFunction(t);
        return k.map(e, function (e) {
            return (r ? t : e[t]).apply(e, n)
        })
    }, k.pluck = function (e, t) {
        return k.map(e, function (e) {
            return e[t]
        })
    }, k.where = function (e, t, n) {
        return k.isEmpty(t) ? n ? null : [] : k[n ? "find" : "filter"](e, function (e) {
            for (var n in t)
                if (t[n] !== e[n]) return !1;
            return !0
        })
    }, k.findWhere = function (e, t) {
        return k.where(e, t, !0)
    }, k.max = function (e, t, n) {
        if (!t && k.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.max.apply(Math, e);
        if (!t && k.isEmpty(e)) return -1 / 0;
        var r = {
            computed: -1 / 0,
            value: -1 / 0
        };
        return N(e, function (e, i, o) {
            var a = t ? t.call(n, e, i, o) : e;
            a >= r.computed && (r = {
                value: e,
                computed: a
            })
        }), r.value
    }, k.min = function (e, t, n) {
        if (!t && k.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.min.apply(Math, e);
        if (!t && k.isEmpty(e)) return 1 / 0;
        var r = {
            computed: 1 / 0,
            value: 1 / 0
        };
        return N(e, function (e, i, o) {
            var a = t ? t.call(n, e, i, o) : e;
            a < r.computed && (r = {
                value: e,
                computed: a
            })
        }), r.value
    }, k.shuffle = function (e) {
        var t, n = 0,
            r = [];
        return N(e, function (e) {
            t = k.random(n++), r[n - 1] = r[t], r[t] = e
        }), r
    };
    var _ = function (e) {
        return k.isFunction(e) ? e : function (t) {
            return t[e]
        }
    };
    k.sortBy = function (e, t, n) {
        var r = _(t);
        return k.pluck(k.map(e, function (e, t, i) {
            return {
                value: e,
                index: t,
                criteria: r.call(n, e, t, i)
            }
        }).sort(function (e, t) {
            var n = e.criteria,
                r = t.criteria;
            if (n !== r) {
                if (n > r || void 0 === n) return 1;
                if (r > n || void 0 === r) return -1
            }
            return e.index < t.index ? -1 : 1
        }), "value")
    };
    var S = function (e, t, n, r) {
        var i = {}, o = _(t || k.identity);
        return N(e, function (t, a) {
            var s = o.call(n, t, a, e);
            r(i, s, t)
        }), i
    };
    k.groupBy = function (e, t, n) {
        return S(e, t, n, function (e, t, n) {
            (k.has(e, t) ? e[t] : e[t] = []).push(n)
        })
    }, k.countBy = function (e, t, n) {
        return S(e, t, n, function (e, t) {
            k.has(e, t) || (e[t] = 0), e[t]++
        })
    }, k.sortedIndex = function (e, t, n, r) {
        n = null == n ? k.identity : _(n);
        for (var i = n.call(r, t), o = 0, a = e.length; a > o;) {
            var s = o + a >>> 1;
            n.call(r, e[s]) < i ? o = s + 1 : a = s
        }
        return o
    }, k.toArray = function (e) {
        return e ? k.isArray(e) ? s.call(e) : e.length === +e.length ? k.map(e, k.identity) : k.values(e) : []
    }, k.size = function (e) {
        return null == e ? 0 : e.length === +e.length ? e.length : k.keys(e).length
    }, k.first = k.head = k.take = function (e, t, n) {
        return null == e ? void 0 : null == t || n ? e[0] : s.call(e, 0, t)
    }, k.initial = function (e, t, n) {
        return s.call(e, 0, e.length - (null == t || n ? 1 : t))
    }, k.last = function (e, t, n) {
        return null == e ? void 0 : null == t || n ? e[e.length - 1] : s.call(e, Math.max(e.length - t, 0))
    }, k.rest = k.tail = k.drop = function (e, t, n) {
        return s.call(e, null == t || n ? 1 : t)
    }, k.compact = function (e) {
        return k.filter(e, k.identity)
    };
    var A = function (e, t, n) {
        return N(e, function (e) {
            k.isArray(e) ? t ? a.apply(n, e) : A(e, t, n) : n.push(e)
        }), n
    };
    k.flatten = function (e, t) {
        return A(e, t, [])
    }, k.without = function (e) {
        return k.difference(e, s.call(arguments, 1))
    }, k.uniq = k.unique = function (e, t, n, r) {
        k.isFunction(t) && (r = n, n = t, t = !1);
        var i = n ? k.map(e, n, r) : e,
            o = [],
            a = [];
        return N(i, function (n, r) {
            (t ? r && a[a.length - 1] === n : k.contains(a, n)) || (a.push(n), o.push(e[r]))
        }), o
    }, k.union = function () {
        return k.uniq(u.apply(r, arguments))
    }, k.intersection = function (e) {
        var t = s.call(arguments, 1);
        return k.filter(k.uniq(e), function (e) {
            return k.every(t, function (t) {
                return k.indexOf(t, e) >= 0
            })
        })
    }, k.difference = function (e) {
        var t = u.apply(r, s.call(arguments, 1));
        return k.filter(e, function (e) {
            return !k.contains(t, e)
        })
    }, k.zip = function () {
        for (var e = s.call(arguments), t = k.max(k.pluck(e, "length")), n = new Array(t), r = 0; t > r; r++) n[r] = k.pluck(e, "" + r);
        return n
    }, k.object = function (e, t) {
        if (null == e) return {};
        for (var n = {}, r = 0, i = e.length; i > r; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
        return n
    }, k.indexOf = function (e, t, n) {
        if (null == e) return -1;
        var r = 0,
            i = e.length;
        if (n) {
            if ("number" != typeof n) return r = k.sortedIndex(e, t), e[r] === t ? r : -1;
            r = 0 > n ? Math.max(0, i + n) : n
        }
        if (y && e.indexOf === y) return e.indexOf(t, n);
        for (; i > r; r++)
            if (e[r] === t) return r;
        return -1
    }, k.lastIndexOf = function (e, t, n) {
        if (null == e) return -1;
        var r = null != n;
        if (b && e.lastIndexOf === b) return r ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
        for (var i = r ? n : e.length; i--;)
            if (e[i] === t) return i;
        return -1
    }, k.range = function (e, t, n) {
        arguments.length <= 1 && (t = e || 0, e = 0), n = arguments[2] || 1;
        for (var r = Math.max(Math.ceil((t - e) / n), 0), i = 0, o = new Array(r); r > i;) o[i++] = e, e += n;
        return o
    }, k.bind = function (e, t) {
        if (e.bind === T && T) return T.apply(e, s.call(arguments, 1));
        var n = s.call(arguments, 2);
        return function () {
            return e.apply(t, n.concat(s.call(arguments)))
        }
    }, k.partial = function (e) {
        var t = s.call(arguments, 1);
        return function () {
            return e.apply(this, t.concat(s.call(arguments)))
        }
    }, k.bindAll = function (e) {
        var t = s.call(arguments, 1);
        return 0 === t.length && (t = k.functions(e)), N(t, function (t) {
            e[t] = k.bind(e[t], e)
        }), e
    }, k.memoize = function (e, t) {
        var n = {};
        return t || (t = k.identity),
        function () {
            var r = t.apply(this, arguments);
            return k.has(n, r) ? n[r] : n[r] = e.apply(this, arguments)
        }
    }, k.delay = function (e, t) {
        var n = s.call(arguments, 2);
        return setTimeout(function () {
            return e.apply(null, n)
        }, t)
    }, k.defer = function (e) {
        return k.delay.apply(k, [e, 1].concat(s.call(arguments, 1)))
    }, k.throttle = function (e, t) {
        var n, r, i, o, a = 0,
            s = function () {
                a = new Date, i = null, o = e.apply(n, r)
            };
        return function () {
            var u = new Date,
                l = t - (u - a);
            return n = this, r = arguments, 0 >= l ? (clearTimeout(i), i = null, a = u, o = e.apply(n, r)) : i || (i = setTimeout(s, l)), o
        }
    }, k.debounce = function (e, t, n) {
        var r, i;
        return function () {
            var o = this,
                a = arguments,
                s = function () {
                    r = null, n || (i = e.apply(o, a))
                }, u = n && !r;
            return clearTimeout(r), r = setTimeout(s, t), u && (i = e.apply(o, a)), i
        }
    }, k.once = function (e) {
        var t, n = !1;
        return function () {
            return n ? t : (n = !0, t = e.apply(this, arguments), e = null, t)
        }
    }, k.wrap = function (e, t) {
        return function () {
            var n = [e];
            return a.apply(n, arguments), t.apply(this, n)
        }
    }, k.compose = function () {
        var e = arguments;
        return function () {
            for (var t = arguments, n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
            return t[0]
        }
    }, k.after = function (e, t) {
        return 0 >= e ? t() : function () {
            return --e < 1 ? t.apply(this, arguments) : void 0
        }
    }, k.keys = w || function (e) {
        if (e !== Object(e)) throw new TypeError("Invalid object");
        var t = [];
        for (var n in e) k.has(e, n) && (t[t.length] = n);
        return t
    }, k.values = function (e) {
        var t = [];
        for (var n in e) k.has(e, n) && t.push(e[n]);
        return t
    }, k.pairs = function (e) {
        var t = [];
        for (var n in e) k.has(e, n) && t.push([n, e[n]]);
        return t
    }, k.invert = function (e) {
        var t = {};
        for (var n in e) k.has(e, n) && (t[e[n]] = n);
        return t
    }, k.functions = k.methods = function (e) {
        var t = [];
        for (var n in e) k.isFunction(e[n]) && t.push(n);
        return t.sort()
    }, k.extend = function (e) {
        return N(s.call(arguments, 1), function (t) {
            if (t)
                for (var n in t) e[n] = t[n]
        }), e
    }, k.pick = function (e) {
        var t = {}, n = u.apply(r, s.call(arguments, 1));
        return N(n, function (n) {
            n in e && (t[n] = e[n])
        }), t
    }, k.omit = function (e) {
        var t = {}, n = u.apply(r, s.call(arguments, 1));
        for (var i in e) k.contains(n, i) || (t[i] = e[i]);
        return t
    }, k.defaults = function (e) {
        return N(s.call(arguments, 1), function (t) {
            if (t)
                for (var n in t) null == e[n] && (e[n] = t[n])
        }), e
    }, k.clone = function (e) {
        return k.isObject(e) ? k.isArray(e) ? e.slice() : k.extend({}, e) : e
    }, k.tap = function (e, t) {
        return t(e), e
    };
    var j = function (e, t, n, r) {
        if (e === t) return 0 !== e || 1 / e == 1 / t;
        if (null == e || null == t) return e === t;
        e instanceof k && (e = e._wrapped), t instanceof k && (t = t._wrapped);
        var i = l.call(e);
        if (i != l.call(t)) return !1;
        switch (i) {
        case "[object String]":
            return e == String(t);
        case "[object Number]":
            return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
        case "[object Date]":
        case "[object Boolean]":
            return +e == +t;
        case "[object RegExp]":
            return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
        }
        if ("object" != typeof e || "object" != typeof t) return !1;
        for (var o = n.length; o--;)
            if (n[o] == e) return r[o] == t;
        n.push(e), r.push(t);
        var a = 0,
            s = !0;
        if ("[object Array]" == i) {
            if (a = e.length, s = a == t.length)
                for (; a-- && (s = j(e[a], t[a], n, r)););
        } else {
            var u = e.constructor,
                c = t.constructor;
            if (u !== c && !(k.isFunction(u) && u instanceof u && k.isFunction(c) && c instanceof c)) return !1;
            for (var f in e)
                if (k.has(e, f) && (a++, !(s = k.has(t, f) && j(e[f], t[f], n, r)))) break;
            if (s) {
                for (f in t)
                    if (k.has(t, f) && !a--) break;
                s = !a
            }
        }
        return n.pop(), r.pop(), s
    };
    k.isEqual = function (e, t) {
        return j(e, t, [], [])
    }, k.isEmpty = function (e) {
        if (null == e) return !0;
        if (k.isArray(e) || k.isString(e)) return 0 === e.length;
        for (var t in e)
            if (k.has(e, t)) return !1;
        return !0
    }, k.isElement = function (e) {
        return !(!e || 1 !== e.nodeType)
    }, k.isArray = x || function (e) {
        return "[object Array]" == l.call(e)
    }, k.isObject = function (e) {
        return e === Object(e)
    }, N(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (e) {
        k["is" + e] = function (t) {
            return l.call(t) == "[object " + e + "]"
        }
    }), k.isArguments(arguments) || (k.isArguments = function (e) {
        return !(!e || !k.has(e, "callee"))
    }), "function" != typeof / . / && (k.isFunction = function (e) {
        return "function" == typeof e
    }), k.isFinite = function (e) {
        return isFinite(e) && !isNaN(parseFloat(e))
    }, k.isNaN = function (e) {
        return k.isNumber(e) && e != +e
    }, k.isBoolean = function (e) {
        return e === !0 || e === !1 || "[object Boolean]" == l.call(e)
    }, k.isNull = function (e) {
        return null === e
    }, k.isUndefined = function (e) {
        return void 0 === e
    }, k.has = function (e, t) {
        return c.call(e, t)
    }, k.noConflict = function () {
        return e._ = t, this
    }, k.identity = function (e) {
        return e
    }, k.times = function (e, t, n) {
        for (var r = Array(e), i = 0; e > i; i++) r[i] = t.call(n, i);
        return r
    }, k.random = function (e, t) {
        return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
    };
    var H = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        }
    };
    H.unescape = k.invert(H.escape);
    var D = {
        escape: new RegExp("[" + k.keys(H.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + k.keys(H.unescape).join("|") + ")", "g")
    };
    k.each(["escape", "unescape"], function (e) {
        k[e] = function (t) {
            return null == t ? "" : ("" + t).replace(D[e], function (t) {
                return H[e][t]
            })
        }
    }), k.result = function (e, t) {
        if (null == e) return null;
        var n = e[t];
        return k.isFunction(n) ? n.call(e) : n
    }, k.mixin = function (e) {
        N(k.functions(e), function (t) {
            var n = k[t] = e[t];
            k.prototype[t] = function () {
                var e = [this._wrapped];
                return a.apply(e, arguments), $.call(this, n.apply(k, e))
            }
        })
    };
    var O = 0;
    k.uniqueId = function (e) {
        var t = ++O + "";
        return e ? e + t : t
    }, k.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var L = /(.)^/,
        M = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "	": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        }, F = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    k.template = function (e, t, n) {
        var r;
        n = k.defaults({}, n, k.templateSettings);
        var i = new RegExp([(n.escape || L).source, (n.interpolate || L).source, (n.evaluate || L).source].join("|") + "|$", "g"),
            o = 0,
            a = "__p+='";
        e.replace(i, function (t, n, r, i, s) {
            return a += e.slice(o, s).replace(F, function (e) {
                return "\\" + M[e]
            }), n && (a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), r && (a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'"), i && (a += "';\n" + i + "\n__p+='"), o = s + t.length, t
        }), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
        try {
            r = new Function(n.variable || "obj", "_", a)
        } catch (s) {
            throw s.source = a, s
        }
        if (t) return r(t, k);
        var u = function (e) {
            return r.call(this, e, k)
        };
        return u.source = "function(" + (n.variable || "obj") + "){\n" + a + "}", u
    }, k.chain = function (e) {
        return k(e).chain()
    };
    var $ = function (e) {
        return this._chain ? k(e).chain() : e
    };
    k.mixin(k), N(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
        var t = r[e];
        k.prototype[e] = function () {
            var n = this._wrapped;
            return t.apply(n, arguments), "shift" != e && "splice" != e || 0 !== n.length || delete n[0], $.call(this, n)
        }
    }), N(["concat", "join", "slice"], function (e) {
        var t = r[e];
        k.prototype[e] = function () {
            return $.call(this, t.apply(this._wrapped, arguments))
        }
    }), k.extend(k.prototype, {
        chain: function () {
            return this._chain = !0, this
        },
        value: function () {
            return this._wrapped
        }
    })
}.call(this),
function () {
    var e, t = this,
        n = t.Backbone,
        r = [],
        i = r.push,
        o = r.slice,
        a = r.splice;
    e = "undefined" != typeof exports ? exports : t.Backbone = {}, e.VERSION = "1.0.0";
    var s = t._;
    s || "undefined" == typeof require || (s = require("underscore")), e.$ = t.jQuery || t.Zepto || t.ender || t.$, e.noConflict = function () {
        return t.Backbone = n, this
    }, e.emulateHTTP = !1, e.emulateJSON = !1;
    var u = e.Events = {
        on: function (e, t, n) {
            if (!c(this, "on", e, [t, n]) || !t) return this;
            this._events || (this._events = {});
            var r = this._events[e] || (this._events[e] = []);
            return r.push({
                callback: t,
                context: n,
                ctx: n || this
            }), this
        },
        once: function (e, t, n) {
            if (!c(this, "once", e, [t, n]) || !t) return this;
            var r = this,
                i = s.once(function () {
                    r.off(e, i), t.apply(this, arguments)
                });
            return i._callback = t, this.on(e, i, n)
        },
        off: function (e, t, n) {
            var r, i, o, a, u, l, f, p;
            if (!this._events || !c(this, "off", e, [t, n])) return this;
            if (!e && !t && !n) return this._events = {}, this;
            for (a = e ? [e] : s.keys(this._events), u = 0, l = a.length; l > u; u++)
                if (e = a[u], o = this._events[e]) {
                    if (this._events[e] = r = [], t || n)
                        for (f = 0, p = o.length; p > f; f++) i = o[f], (t && t !== i.callback && t !== i.callback._callback || n && n !== i.context) && r.push(i);
                    r.length || delete this._events[e]
                }
            return this
        },
        trigger: function (e) {
            if (!this._events) return this;
            var t = o.call(arguments, 1);
            if (!c(this, "trigger", e, t)) return this;
            var n = this._events[e],
                r = this._events.all;
            return n && f(n, t), r && f(r, arguments), this
        },
        stopListening: function (e, t, n) {
            var r = this._listeners;
            if (!r) return this;
            var i = !t && !n;
            "object" == typeof t && (n = this), e && ((r = {})[e._listenerId] = e);
            for (var o in r) r[o].off(t, n, this), i && delete this._listeners[o];
            return this
        }
    }, l = /\s+/,
        c = function (e, t, n, r) {
            if (!n) return !0;
            if ("object" == typeof n) {
                for (var i in n) e[t].apply(e, [i, n[i]].concat(r));
                return !1
            }
            if (l.test(n)) {
                for (var o = n.split(l), a = 0, s = o.length; s > a; a++) e[t].apply(e, [o[a]].concat(r));
                return !1
            }
            return !0
        }, f = function (e, t) {
            var n, r = -1,
                i = e.length,
                o = t[0],
                a = t[1],
                s = t[2];
            switch (t.length) {
            case 0:
                for (; ++r < i;)(n = e[r]).callback.call(n.ctx);
                return;
            case 1:
                for (; ++r < i;)(n = e[r]).callback.call(n.ctx, o);
                return;
            case 2:
                for (; ++r < i;)(n = e[r]).callback.call(n.ctx, o, a);
                return;
            case 3:
                for (; ++r < i;)(n = e[r]).callback.call(n.ctx, o, a, s);
                return;
            default:
                for (; ++r < i;)(n = e[r]).callback.apply(n.ctx, t)
            }
        }, p = {
            listenTo: "on",
            listenToOnce: "once"
        };
    s.each(p, function (e, t) {
        u[t] = function (t, n, r) {
            var i = this._listeners || (this._listeners = {}),
                o = t._listenerId || (t._listenerId = s.uniqueId("l"));
            return i[o] = t, "object" == typeof n && (r = this), t[e](n, r, this), this
        }
    }), u.bind = u.on, u.unbind = u.off, s.extend(e, u);
    var h = e.Model = function (e, t) {
        var n, r = e || {};
        t || (t = {}), this.cid = s.uniqueId("c"), this.attributes = {}, s.extend(this, s.pick(t, d)), t.parse && (r = this.parse(r, t) || {}), (n = s.result(this, "defaults")) && (r = s.defaults({}, r, n)), this.set(r, t), this.changed = {}, this.initialize.apply(this, arguments)
    }, d = ["url", "urlRoot", "collection"];
    s.extend(h.prototype, u, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        initialize: function () {},
        toJSON: function () {
            return s.clone(this.attributes)
        },
        sync: function () {
            return e.sync.apply(this, arguments)
        },
        get: function (e) {
            return this.attributes[e]
        },
        escape: function (e) {
            return s.escape(this.get(e))
        },
        has: function (e) {
            return null != this.get(e)
        },
        set: function (e, t, n) {
            var r, i, o, a, u, l, c, f;
            if (null == e) return this;
            if ("object" == typeof e ? (i = e, n = t) : (i = {})[e] = t, n || (n = {}), !this._validate(i, n)) return !1;
            o = n.unset, u = n.silent, a = [], l = this._changing, this._changing = !0, l || (this._previousAttributes = s.clone(this.attributes), this.changed = {}), f = this.attributes, c = this._previousAttributes, this.idAttribute in i && (this.id = i[this.idAttribute]);
            for (r in i) t = i[r], s.isEqual(f[r], t) || a.push(r), s.isEqual(c[r], t) ? delete this.changed[r] : this.changed[r] = t, o ? delete f[r] : f[r] = t;
            if (!u) {
                a.length && (this._pending = !0);
                for (var p = 0, h = a.length; h > p; p++) this.trigger("change:" + a[p], this, f[a[p]], n)
            }
            if (l) return this;
            if (!u)
                for (; this._pending;) this._pending = !1, this.trigger("change", this, n);
            return this._pending = !1, this._changing = !1, this
        },
        unset: function (e, t) {
            return this.set(e, void 0, s.extend({}, t, {
                unset: !0
            }))
        },
        clear: function (e) {
            var t = {};
            for (var n in this.attributes) t[n] = void 0;
            return this.set(t, s.extend({}, e, {
                unset: !0
            }))
        },
        hasChanged: function (e) {
            return null == e ? !s.isEmpty(this.changed) : s.has(this.changed, e)
        },
        changedAttributes: function (e) {
            if (!e) return this.hasChanged() ? s.clone(this.changed) : !1;
            var t, n = !1,
                r = this._changing ? this._previousAttributes : this.attributes;
            for (var i in e) s.isEqual(r[i], t = e[i]) || ((n || (n = {}))[i] = t);
            return n
        },
        previous: function (e) {
            return null != e && this._previousAttributes ? this._previousAttributes[e] : null
        },
        previousAttributes: function () {
            return s.clone(this._previousAttributes)
        },
        fetch: function (e) {
            e = e ? s.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
            var t = this,
                n = e.success;
            return e.success = function (r) {
                return t.set(t.parse(r, e), e) ? (n && n(t, r, e), t.trigger("sync", t, r, e), void 0) : !1
            }, $(this, e), this.sync("read", this, e)
        },
        save: function (e, t, n) {
            var r, i, o, a = this.attributes;
            if (null == e || "object" == typeof e ? (r = e, n = t) : (r = {})[e] = t, !(!r || n && n.wait || this.set(r, n))) return !1;
            if (n = s.extend({
                validate: !0
            }, n), !this._validate(r, n)) return !1;
            r && n.wait && (this.attributes = s.extend({}, a, r)), void 0 === n.parse && (n.parse = !0);
            var u = this,
                l = n.success;
            return n.success = function (e) {
                u.attributes = a;
                var t = u.parse(e, n);
                return n.wait && (t = s.extend(r || {}, t)), s.isObject(t) && !u.set(t, n) ? !1 : (l && l(u, e, n), u.trigger("sync", u, e, n), void 0)
            }, $(this, n), i = this.isNew() ? "create" : n.patch ? "patch" : "update", "patch" === i && (n.attrs = r), o = this.sync(i, this, n), r && n.wait && (this.attributes = a), o
        },
        destroy: function (e) {
            e = e ? s.clone(e) : {};
            var t = this,
                n = e.success,
                r = function () {
                    t.trigger("destroy", t, t.collection, e)
                };
            if (e.success = function (i) {
                (e.wait || t.isNew()) && r(), n && n(t, i, e), t.isNew() || t.trigger("sync", t, i, e)
            }, this.isNew()) return e.success(), !1;
            $(this, e);
            var i = this.sync("delete", this, e);
            return e.wait || r(), i
        },
        url: function () {
            var e = s.result(this, "urlRoot") || s.result(this.collection, "url") || F();
            return this.isNew() ? e : e + ("/" === e.charAt(e.length - 1) ? "" : "/") + encodeURIComponent(this.id)
        },
        parse: function (e) {
            return e
        },
        clone: function () {
            return new this.constructor(this.attributes)
        },
        isNew: function () {
            return null == this.id
        },
        isValid: function (e) {
            return this._validate({}, s.extend(e || {}, {
                validate: !0
            }))
        },
        _validate: function (e, t) {
            if (!t.validate || !this.validate) return !0;
            e = s.extend({}, this.attributes, e);
            var n = this.validationError = this.validate(e, t) || null;
            return n ? (this.trigger("invalid", this, n, s.extend(t || {}, {
                validationError: n
            })), !1) : !0
        }
    });
    var g = ["keys", "values", "pairs", "invert", "pick", "omit"];
    s.each(g, function (e) {
        h.prototype[e] = function () {
            var t = o.call(arguments);
            return t.unshift(this.attributes), s[e].apply(s, t)
        }
    });
    var m = e.Collection = function (e, t) {
        t || (t = {}), t.url && (this.url = t.url), t.model && (this.model = t.model), void 0 !== t.comparator && (this.comparator = t.comparator), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, s.extend({
            silent: !0
        }, t))
    }, v = {
            add: !0,
            remove: !0,
            merge: !0
        }, y = {
            add: !0,
            merge: !1,
            remove: !1
        };
    s.extend(m.prototype, u, {
        model: h,
        initialize: function () {},
        toJSON: function (e) {
            return this.map(function (t) {
                return t.toJSON(e)
            })
        },
        sync: function () {
            return e.sync.apply(this, arguments)
        },
        add: function (e, t) {
            return this.set(e, s.defaults(t || {}, y))
        },
        remove: function (e, t) {
            e = s.isArray(e) ? e.slice() : [e], t || (t = {});
            var n, r, i, o;
            for (n = 0, r = e.length; r > n; n++) o = this.get(e[n]), o && (delete this._byId[o.id], delete this._byId[o.cid], i = this.indexOf(o), this.models.splice(i, 1), this.length--, t.silent || (t.index = i, o.trigger("remove", o, this, t)), this._removeReference(o));
            return this
        },
        set: function (e, t) {
            t = s.defaults(t || {}, v), t.parse && (e = this.parse(e, t)), s.isArray(e) || (e = e ? [e] : []);
            var n, r, o, u, l, c = t.at,
                f = this.comparator && null == c && t.sort !== !1,
                p = s.isString(this.comparator) ? this.comparator : null,
                h = [],
                d = [],
                g = {};
            for (n = 0, r = e.length; r > n; n++)(o = this._prepareModel(e[n], t)) && ((u = this.get(o)) ? (t.remove && (g[u.cid] = !0), t.merge && (u.set(o.attributes, t), f && !l && u.hasChanged(p) && (l = !0))) : t.add && (h.push(o), o.on("all", this._onModelEvent, this), this._byId[o.cid] = o, null != o.id && (this._byId[o.id] = o)));
            if (t.remove) {
                for (n = 0, r = this.length; r > n; ++n) g[(o = this.models[n]).cid] || d.push(o);
                d.length && this.remove(d, t)
            }
            if (h.length && (f && (l = !0), this.length += h.length, null != c ? a.apply(this.models, [c, 0].concat(h)) : i.apply(this.models, h)), l && this.sort({
                silent: !0
            }), t.silent) return this;
            for (n = 0, r = h.length; r > n; n++)(o = h[n]).trigger("add", o, this, t);
            return l && this.trigger("sort", this, t), this
        },
        reset: function (e, t) {
            t || (t = {});
            for (var n = 0, r = this.models.length; r > n; n++) this._removeReference(this.models[n]);
            return t.previousModels = this.models, this._reset(), this.add(e, s.extend({
                silent: !0
            }, t)), t.silent || this.trigger("reset", this, t), this
        },
        push: function (e, t) {
            return e = this._prepareModel(e, t), this.add(e, s.extend({
                at: this.length
            }, t)), e
        },
        pop: function (e) {
            var t = this.at(this.length - 1);
            return this.remove(t, e), t
        },
        unshift: function (e, t) {
            return e = this._prepareModel(e, t), this.add(e, s.extend({
                at: 0
            }, t)), e
        },
        shift: function (e) {
            var t = this.at(0);
            return this.remove(t, e), t
        },
        slice: function (e, t) {
            return this.models.slice(e, t)
        },
        get: function (e) {
            return null == e ? void 0 : this._byId[null != e.id ? e.id : e.cid || e]
        },
        at: function (e) {
            return this.models[e]
        },
        where: function (e, t) {
            return s.isEmpty(e) ? t ? void 0 : [] : this[t ? "find" : "filter"](function (t) {
                for (var n in e)
                    if (e[n] !== t.get(n)) return !1;
                return !0
            })
        },
        findWhere: function (e) {
            return this.where(e, !0)
        },
        sort: function (e) {
            if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
            return e || (e = {}), s.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(s.bind(this.comparator, this)), e.silent || this.trigger("sort", this, e), this
        },
        sortedIndex: function (e, t, n) {
            t || (t = this.comparator);
            var r = s.isFunction(t) ? t : function (e) {
                    return e.get(t)
                };
            return s.sortedIndex(this.models, e, r, n)
        },
        pluck: function (e) {
            return s.invoke(this.models, "get", e)
        },
        fetch: function (e) {
            e = e ? s.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
            var t = e.success,
                n = this;
            return e.success = function (r) {
                var i = e.reset ? "reset" : "set";
                n[i](r, e), t && t(n, r, e), n.trigger("sync", n, r, e)
            }, $(this, e), this.sync("read", this, e)
        },
        create: function (e, t) {
            if (t = t ? s.clone(t) : {}, !(e = this._prepareModel(e, t))) return !1;
            t.wait || this.add(e, t);
            var n = this,
                r = t.success;
            return t.success = function (i) {
                t.wait && n.add(e, t), r && r(e, i, t)
            }, e.save(null, t), e
        },
        parse: function (e) {
            return e
        },
        clone: function () {
            return new this.constructor(this.models)
        },
        _reset: function () {
            this.length = 0, this.models = [], this._byId = {}
        },
        _prepareModel: function (e, t) {
            if (e instanceof h) return e.collection || (e.collection = this), e;
            t || (t = {}), t.collection = this;
            var n = new this.model(e, t);
            return n._validate(e, t) ? n : (this.trigger("invalid", this, e, t), !1)
        },
        _removeReference: function (e) {
            this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function (e, t, n, r) {
            ("add" !== e && "remove" !== e || n === this) && ("destroy" === e && this.remove(t, r), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], null != t.id && (this._byId[t.id] = t)), this.trigger.apply(this, arguments))
        }
    });
    var b = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain"];
    s.each(b, function (e) {
        m.prototype[e] = function () {
            var t = o.call(arguments);
            return t.unshift(this.models), s[e].apply(s, t)
        }
    });
    var x = ["groupBy", "countBy", "sortBy"];
    s.each(x, function (e) {
        m.prototype[e] = function (t, n) {
            var r = s.isFunction(t) ? t : function (e) {
                    return e.get(t)
                };
            return s[e](this.models, r, n)
        }
    });
    var w = e.View = function (e) {
        this.cid = s.uniqueId("view"), this._configure(e || {}), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
    }, T = /^(\S+)\s*(.*)$/,
        k = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    s.extend(w.prototype, u, {
        tagName: "div",
        $: function (e) {
            return this.$el.find(e)
        },
        initialize: function () {},
        render: function () {
            return this
        },
        remove: function () {
            return this.$el.remove(), this.stopListening(), this
        },
        setElement: function (t, n) {
            return this.$el && this.undelegateEvents(), this.$el = t instanceof e.$ ? t : e.$(t), this.el = this.$el[0], n !== !1 && this.delegateEvents(), this
        },
        delegateEvents: function (e) {
            if (!e && !(e = s.result(this, "events"))) return this;
            this.undelegateEvents();
            for (var t in e) {
                var n = e[t];
                if (s.isFunction(n) || (n = this[e[t]]), n) {
                    var r = t.match(T),
                        i = r[1],
                        o = r[2];
                    n = s.bind(n, this), i += ".delegateEvents" + this.cid, "" === o ? this.$el.on(i, n) : this.$el.on(i, o, n)
                }
            }
            return this
        },
        undelegateEvents: function () {
            return this.$el.off(".delegateEvents" + this.cid), this
        },
        _configure: function (e) {
            this.options && (e = s.extend({}, s.result(this, "options"), e)), s.extend(this, s.pick(e, k)), this.options = e
        },
        _ensureElement: function () {
            if (this.el) this.setElement(s.result(this, "el"), !1);
            else {
                var t = s.extend({}, s.result(this, "attributes"));
                this.id && (t.id = s.result(this, "id")), this.className && (t["class"] = s.result(this, "className"));
                var n = e.$("<" + s.result(this, "tagName") + ">").attr(t);
                this.setElement(n, !1)
            }
        }
    }), e.sync = function (t, n, r) {
        var i = N[t];
        s.defaults(r || (r = {}), {
            emulateHTTP: e.emulateHTTP,
            emulateJSON: e.emulateJSON
        });
        var o = {
            type: i,
            dataType: "json"
        };
        if (r.url || (o.url = s.result(n, "url") || F()), null != r.data || !n || "create" !== t && "update" !== t && "patch" !== t || (o.contentType = "application/json", o.data = JSON.stringify(r.attrs || n.toJSON(r))), r.emulateJSON && (o.contentType = "application/x-www-form-urlencoded", o.data = o.data ? {
            model: o.data
        } : {}), r.emulateHTTP && ("PUT" === i || "DELETE" === i || "PATCH" === i)) {
            o.type = "POST", r.emulateJSON && (o.data._method = i);
            var a = r.beforeSend;
            r.beforeSend = function (e) {
                return e.setRequestHeader("X-HTTP-Method-Override", i), a ? a.apply(this, arguments) : void 0
            }
        }
        "GET" === o.type || r.emulateJSON || (o.processData = !1), "PATCH" !== o.type || !window.ActiveXObject || window.external && window.external.msActiveXFilteringEnabled || (o.xhr = function () {
            return new ActiveXObject("Microsoft.XMLHTTP")
        });
        var u = r.xhr = e.ajax(s.extend(o, r));
        return n.trigger("request", n, u, r), u
    };
    var N = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        "delete": "DELETE",
        read: "GET"
    };
    e.ajax = function () {
        return e.$.ajax.apply(e.$, arguments)
    };
    var E = e.Router = function (e) {
        e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
    }, C = /\((.*?)\)/g,
        _ = /(\(\?)?:\w+/g,
        S = /\*\w+/g,
        A = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    s.extend(E.prototype, u, {
        initialize: function () {},
        route: function (t, n, r) {
            s.isRegExp(t) || (t = this._routeToRegExp(t)), s.isFunction(n) && (r = n, n = ""), r || (r = this[n]);
            var i = this;
            return e.history.route(t, function (o) {
                var a = i._extractParameters(t, o);
                r && r.apply(i, a), i.trigger.apply(i, ["route:" + n].concat(a)), i.trigger("route", n, a), e.history.trigger("route", i, n, a)
            }), this
        },
        navigate: function (t, n) {
            return e.history.navigate(t, n), this
        },
        _bindRoutes: function () {
            if (this.routes) {
                this.routes = s.result(this, "routes");
                for (var e, t = s.keys(this.routes); null != (e = t.pop());) this.route(e, this.routes[e])
            }
        },
        _routeToRegExp: function (e) {
            return e = e.replace(A, "\\$&").replace(C, "(?:$1)?").replace(_, function (e, t) {
                return t ? e : "([^/]+)"
            }).replace(S, "(.*?)"), new RegExp("^" + e + "$")
        },
        _extractParameters: function (e, t) {
            var n = e.exec(t).slice(1);
            return s.map(n, function (e) {
                return e ? decodeURIComponent(e) : null
            })
        }
    });
    var j = e.History = function () {
        this.handlers = [], s.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
    }, H = /^[#\/]|\s+$/g,
        D = /^\/+|\/+$/g,
        O = /msie [\w.]+/,
        L = /\/$/;
    j.started = !1, s.extend(j.prototype, u, {
        interval: 50,
        getHash: function (e) {
            var t = (e || this).location.href.match(/#(.*)$/);
            return t ? t[1] : ""
        },
        getFragment: function (e, t) {
            if (null == e)
                if (this._hasPushState || !this._wantsHashChange || t) {
                    e = this.location.pathname;
                    var n = this.root.replace(L, "");
                    e.indexOf(n) || (e = e.substr(n.length))
                } else e = this.getHash();
            return e.replace(H, "")
        },
        start: function (t) {
            if (j.started) throw new Error("Backbone.history has already been started");
            j.started = !0, this.options = s.extend({}, {
                root: "/"
            }, this.options, t), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !! this.options.pushState, this._hasPushState = !! (this.options.pushState && this.history && this.history.pushState);
            var n = this.getFragment(),
                r = document.documentMode,
                i = O.exec(navigator.userAgent.toLowerCase()) && (!r || 7 >= r);
            this.root = ("/" + this.root + "/").replace(D, "/"), i && this._wantsHashChange && (this.iframe = e.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(n)), this._hasPushState ? e.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !i ? e.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = n;
            var o = this.location,
                a = o.pathname.replace(/[^\/]$/, "$&/") === this.root;
            return this._wantsHashChange && this._wantsPushState && !this._hasPushState && !a ? (this.fragment = this.getFragment(null, !0), this.location.replace(this.root + this.location.search + "#" + this.fragment), !0) : (this._wantsPushState && this._hasPushState && a && o.hash && (this.fragment = this.getHash().replace(H, ""), this.history.replaceState({}, document.title, this.root + this.fragment + o.search)), this.options.silent ? void 0 : this.loadUrl())
        },
        stop: function () {
            e.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), j.started = !1
        },
        route: function (e, t) {
            this.handlers.unshift({
                route: e,
                callback: t
            })
        },
        checkUrl: function () {
            var e = this.getFragment();
            return e === this.fragment && this.iframe && (e = this.getFragment(this.getHash(this.iframe))), e === this.fragment ? !1 : (this.iframe && this.navigate(e), this.loadUrl() || this.loadUrl(this.getHash()), void 0)
        },
        loadUrl: function (e) {
            var t = this.fragment = this.getFragment(e),
                n = s.any(this.handlers, function (e) {
                    return e.route.test(t) ? (e.callback(t), !0) : void 0
                });
            return n
        },
        navigate: function (e, t) {
            if (!j.started) return !1;
            if (t && t !== !0 || (t = {
                trigger: t
            }), e = this.getFragment(e || ""), this.fragment !== e) {
                this.fragment = e;
                var n = this.root + e;
                if (this._hasPushState) this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n);
                else {
                    if (!this._wantsHashChange) return this.location.assign(n);
                    this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, e, t.replace))
                }
                t.trigger && this.loadUrl(e)
            }
        },
        _updateHash: function (e, t, n) {
            if (n) {
                var r = e.href.replace(/(javascript:|#).*$/, "");
                e.replace(r + "#" + t)
            } else e.hash = "#" + t
        }
    }), e.history = new j;
    var M = function (e, t) {
        var n, r = this;
        n = e && s.has(e, "constructor") ? e.constructor : function () {
            return r.apply(this, arguments)
        }, s.extend(n, r, t);
        var i = function () {
            this.constructor = n
        };
        return i.prototype = r.prototype, n.prototype = new i, e && s.extend(n.prototype, e), n.__super__ = r.prototype, n
    };
    h.extend = m.extend = E.extend = w.extend = j.extend = M;
    var F = function () {
        throw new Error('A "url" property or function must be specified')
    }, $ = function (e, t) {
            var n = t.error;
            t.error = function (r) {
                n && n(e, r, t), e.trigger("error", e, r, t)
            }
        }
}.call(this), define("backbone.localStorage", ["underscore", "backbone"], function (e, t) {
    return factory(e || root._, t || root.Backbone)
});
var app = app || {};
! function () {
    "use strict";
    app.Todo = Backbone.Model.extend({
        defaults: {
            title: "",
            completed: !1
        },
        toggle: function () {
            this.save({
                completed: !this.get("completed")
            })
        }
    })
}();
var app = app || {};
! function () {
    "use strict";
    var e = Backbone.Collection.extend({
        model: app.Todo,
        localStorage: new Backbone.LocalStorage("todos-backbone"),
        completed: function () {
            return this.filter(function (e) {
                return e.get("completed")
            })
        },
        remaining: function () {
            return this.without.apply(this, this.completed())
        },
        nextOrder: function () {
            return this.length ? this.last().get("order") + 1 : 1
        },
        comparator: function (e) {
            return e.get("order")
        }
    });
    app.todos = new e
}();
var app = app || {};
! function (e) {
    "use strict";
    app.TodoView = Backbone.View.extend({
        tagName: "li",
        template: _.template(e("#item-template").html()),
        events: {
            "click .toggle": "toggleCompleted",
            "dblclick label": "edit",
            "click .destroy": "clear",
            "keypress .edit": "updateOnEnter",
            "blur .edit": "close"
        },
        initialize: function () {
            this.listenTo(this.model, "change", this.render), this.listenTo(this.model, "destroy", this.remove), this.listenTo(this.model, "visible", this.toggleVisible)
        },
        render: function () {
            return this.$el.html(this.template(this.model.toJSON())), this.$el.toggleClass("completed", this.model.get("completed")), this.toggleVisible(), this.$input = this.$(".edit"), this
        },
        toggleVisible: function () {
            this.$el.toggleClass("hidden", this.isHidden())
        },
        isHidden: function () {
            var e = this.model.get("completed");
            return !e && "completed" === app.TodoFilter || e && "active" === app.TodoFilter
        },
        toggleCompleted: function () {
            this.model.toggle()
        },
        edit: function () {
            this.$el.addClass("editing"), this.$input.focus()
        },
        close: function () {
            var e = this.$input.val(),
                t = e.trim();
            t ? (this.model.save({
                title: t
            }), e !== t && this.model.trigger("change")) : this.clear(), this.$el.removeClass("editing")
        },
        updateOnEnter: function (e) {
            e.which === ENTER_KEY && this.close()
        },
        clear: function () {
            this.model.destroy()
        }
    })
}(jQuery);
var app = app || {};
! function (e) {
    "use strict";
    app.AppView = Backbone.View.extend({
        el: "#todoapp",
        statsTemplate: _.template(e("#stats-template").html()),
        events: {
            "keypress #new-todo": "createOnEnter",
            "click #clear-completed": "clearCompleted",
            "click #toggle-all": "toggleAllComplete"
        },
        initialize: function () {
            this.allCheckbox = this.$("#toggle-all")[0], this.$input = this.$("#new-todo"), this.$footer = this.$("#footer"), this.$main = this.$("#main"), this.listenTo(app.todos, "add", this.addOne), this.listenTo(app.todos, "reset", this.addAll), this.listenTo(app.todos, "change:completed", this.filterOne), this.listenTo(app.todos, "filter", this.filterAll), this.listenTo(app.todos, "all", this.render), app.todos.fetch({
                reset: !0
            })
        },
        render: function () {
            var e = app.todos.completed().length,
                t = app.todos.remaining().length;
            app.todos.length ? (this.$main.show(), this.$footer.show(), this.$footer.html(this.statsTemplate({
                completed: e,
                remaining: t
            })), this.$("#filters li a").removeClass("selected").filter('[href="#/' + (app.TodoFilter || "") + '"]').addClass("selected")) : (this.$main.hide(), this.$footer.hide()), this.allCheckbox.checked = !t
        },
        addOne: function (t) {
            var n = new app.TodoView({
                model: t
            });
            e("#todo-list").append(n.render().el)
        },
        addAll: function () {
            this.$("#todo-list").html(""), app.todos.each(this.addOne, this)
        },
        filterOne: function (e) {
            e.trigger("visible")
        },
        filterAll: function () {
            app.todos.each(this.filterOne, this)
        },
        newAttributes: function () {
            return {
                title: this.$input.val().trim(),
                order: app.todos.nextOrder(),
                completed: !1
            }
        },
        createOnEnter: function (e) {
            e.which === ENTER_KEY && this.$input.val().trim() && (app.todos.create(this.newAttributes()), this.$input.val(""))
        },
        clearCompleted: function () {
            return _.invoke(app.todos.completed(), "destroy"), !1
        },
        toggleAllComplete: function () {
            var e = this.allCheckbox.checked;
            app.todos.each(function (t) {
                t.save({
                    completed: e
                })
            })
        }
    })
}(jQuery);
var app = app || {};
! function () {
    "use strict";
    var e = Backbone.Router.extend({
        routes: {
            "*filter": "setFilter"
        },
        setFilter: function (e) {
            app.TodoFilter = e || "", app.todos.trigger("filter")
        }
    });
    app.TodoRouter = new e, Backbone.history.start()
}();
var app = app || {}, ENTER_KEY = 13;
$(function () {
    "use strict";
    new app.AppView
});
