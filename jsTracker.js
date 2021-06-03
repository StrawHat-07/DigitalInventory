/**
 * @description JavaScript tracker for Snowplow
 * @version     2.18.0
 * @copyright   Anthon Pang, Snowplow Analytics Ltd
 * @license     Simplified BSD
 *
 * Documentation: http://bit.ly/sp-js
 */

"use strict";
(function () {
  function D(a) {
    "@babel/helpers - typeof";
    D =
      "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
        ? function (a) {
            return typeof a;
          }
        : function (a) {
            return a &&
              "function" === typeof Symbol &&
              a.constructor === Symbol &&
              a !== Symbol.prototype
              ? "symbol"
              : typeof a;
          };
    return D(a);
  }
  function Gb(a, b) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var e = Object.getOwnPropertySymbols(a);
      b &&
        (e = e.filter(function (b) {
          return Object.getOwnPropertyDescriptor(a, b).enumerable;
        }));
      c.push.apply(c, e);
    }
    return c;
  }
  function md(a) {
    for (var b = 1; b < arguments.length; b++) {
      var c = null != arguments[b] ? arguments[b] : {};
      b % 2
        ? Gb(Object(c), !0).forEach(function (b) {
            var d = c[b];
            b in a
              ? Object.defineProperty(a, b, {
                  value: d,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (a[b] = d);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c))
        : Gb(Object(c)).forEach(function (b) {
            Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
          });
    }
    return a;
  }
  function na(a) {
    var b = Array.isArray(a) ? Ea(a) : void 0;
    b ||
      (b =
        "undefined" !== typeof Symbol && Symbol.iterator in Object(a)
          ? Array.from(a)
          : void 0);
    if (!(a = b || Hb(a)))
      throw new TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    return a;
  }
  function Hb(a, b) {
    if (a) {
      if ("string" === typeof a) return Ea(a, b);
      var c = Object.prototype.toString.call(a).slice(8, -1);
      "Object" === c && a.constructor && (c = a.constructor.name);
      if ("Map" === c || "Set" === c) return Array.from(a);
      if (
        "Arguments" === c ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
      )
        return Ea(a, b);
    }
  }
  function Ea(a, b) {
    if (null == b || b > a.length) b = a.length;
    for (var c = 0, e = Array(b); c < b; c++) e[c] = a[c];
    return e;
  }
  function lb(a, b) {
    var c;
    if ("undefined" === typeof Symbol || null == a[Symbol.iterator]) {
      if (
        Array.isArray(a) ||
        (c = Hb(a)) ||
        (b && a && "number" === typeof a.length)
      ) {
        c && (a = c);
        var e = 0;
        b = function () {};
        return {
          s: b,
          n: function () {
            return e >= a.length ? { done: !0 } : { done: !1, value: a[e++] };
          },
          e: function (a) {
            throw a;
          },
          f: b,
        };
      }
      throw new TypeError(
        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }
    var d = !0,
      f = !1,
      h;
    return {
      s: function () {
        c = a[Symbol.iterator]();
      },
      n: function () {
        var a = c.next();
        d = a.done;
        return a;
      },
      e: function (a) {
        f = !0;
        h = a;
      },
      f: function () {
        try {
          d || null == c.return || c.return();
        } finally {
          if (f) throw h;
        }
      },
    };
  }
  function oa(a) {
    var b = { exports: {} };
    return a(b, b.exports), b.exports;
  }
  function pa(a) {
    var b = -1,
      c = null == a ? 0 : a.length;
    for (this.clear(); ++b < c; ) {
      var e = a[b];
      this.set(e[0], e[1]);
    }
  }
  function V(a) {
    var b = -1,
      c = null == a ? 0 : a.length;
    for (this.clear(); ++b < c; ) {
      var e = a[b];
      this.set(e[0], e[1]);
    }
  }
  function qa(a) {
    var b = -1,
      c = null == a ? 0 : a.length;
    for (this.clear(); ++b < c; ) {
      var e = a[b];
      this.set(e[0], e[1]);
    }
  }
  function ra(a) {
    this.size = (this.__data__ = new Fa(a)).size;
  }
  function mb(a) {
    var b = -1,
      c = null == a ? 0 : a.length;
    for (this.__data__ = new Ga(); ++b < c; ) this.add(a[b]);
  }
  function Ha(a, b, c, e, d) {
    if (a === b) b = !0;
    else if (null == a || null == b || (!Q(a) && !Q(b))) b = a !== a && b !== b;
    else
      a: {
        var f = u(a),
          h = u(b),
          g = f ? "[object Array]" : Tb(a),
          k = h ? "[object Array]" : Tb(b);
        g = "[object Arguments]" == g ? "[object Object]" : g;
        k = "[object Arguments]" == k ? "[object Object]" : k;
        var p = "[object Object]" == g;
        h = "[object Object]" == k;
        if ((k = g == k) && nb(a)) {
          if (!nb(b)) {
            b = !1;
            break a;
          }
          f = !0;
          p = !1;
        }
        if (k && !p)
          d || (d = new sa()),
            (b = f || gc(a) ? hc(a, b, c, e, Ha, d) : nd(a, b, g, c, e, Ha, d));
        else {
          if (
            !(c & 1) &&
            ((f = p && ic.call(a, "__wrapped__")),
            (g = h && ic.call(b, "__wrapped__")),
            f || g)
          ) {
            a = f ? a.value() : a;
            b = g ? b.value() : b;
            d || (d = new sa());
            b = Ha(a, b, c, e, d);
            break a;
          }
          if (k)
            b: if (
              (d || (d = new sa()),
              (f = c & 1),
              (g = jc(a, Ia, kc)),
              (h = g.length),
              (k = jc(b, Ia, kc).length),
              h == k || f)
            ) {
              for (k = h; k--; ) {
                var v = g[k];
                if (!(f ? v in b : od.call(b, v))) {
                  b = !1;
                  break b;
                }
              }
              p = d.get(a);
              v = d.get(b);
              if (p && v) b = p == b && v == a;
              else {
                p = !0;
                d.set(a, b);
                d.set(b, a);
                for (var J = f; ++k < h; ) {
                  v = g[k];
                  var m = a[v],
                    r = b[v];
                  if (e) var M = f ? e(r, m, v, b, a, d) : e(m, r, v, a, b, d);
                  if (void 0 === M ? m !== r && !Ha(m, r, c, e, d) : !M) {
                    p = !1;
                    break;
                  }
                  J || (J = "constructor" == v);
                }
                p &&
                  !J &&
                  ((c = a.constructor),
                  (e = b.constructor),
                  c != e &&
                    "constructor" in a &&
                    "constructor" in b &&
                    !(
                      "function" == typeof c &&
                      c instanceof c &&
                      "function" == typeof e &&
                      e instanceof e
                    ) &&
                    (p = !1));
                d["delete"](a);
                d["delete"](b);
                b = p;
              }
            } else b = !1;
          else b = !1;
        }
      }
    return b;
  }
  function Ja(a, b) {
    if ("function" != typeof a || (null != b && "function" != typeof b))
      throw new TypeError("Expected a function");
    var c = function d() {
      var c = arguments,
        h = b ? b.apply(this, c) : c[0],
        g = d.cache;
      if (g.has(h)) return g.get(h);
      c = a.apply(this, c);
      d.cache = g.set(h, c) || g;
      return c;
    };
    c.cache = new (Ja.Cache || Ga)();
    return c;
  }
  function lc(a) {
    if ("string" == typeof a) return a;
    if (u(a)) return mc(a, lc) + "";
    if (Ka(a)) return nc ? nc.call(a) : "";
    var b = a + "";
    return "0" == b && 1 / a == -pd ? "-0" : b;
  }
  function oc(a) {
    if (!pc(a)) {
      a = a.text || "";
      var b = La.getElementsByTagName("title");
      b && void 0 !== b[0] && (a = b[0].text);
    }
    return a;
  }
  function Ub(a) {
    var b = /^(?:(?:https?|ftp):)\/*(?:[^@]+@)?([^:/#]+)/.exec(a);
    return b ? b[1] : a;
  }
  function dc(a) {
    var b = a.length;
    "." === a.charAt(--b) && (a = a.slice(0, b));
    "*." === a.slice(0, 2) && (a = a.slice(1));
    return a;
  }
  function ec(a) {
    var b = "",
      c = Ib("referrer", da.location.href) || Ib("referer", da.location.href);
    if (c) return c;
    if (a) return a;
    try {
      b = da.top.document.referrer;
    } catch (e) {
      if (da.parent)
        try {
          b = da.parent.document.referrer;
        } catch (d) {
          b = "";
        }
    }
    "" === b && (b = La.referrer);
    return b;
  }
  function q(a, b, c, e) {
    if (a.addEventListener) return a.addEventListener(b, c, e), !0;
    if (a.attachEvent) return a.attachEvent("on" + b, c);
    a["on" + b] = c;
  }
  function Ib(a, b) {
    return (a = new RegExp("^[^#]*[?&]" + a + "=([^&#]*)").exec(b))
      ? decodeURIComponent(a[1].replace(/\+/g, " "))
      : null;
  }
  function Jb(a) {
    var b = Array.prototype.slice.call(arguments, 1);
    return qd(
      ea(a, function (a) {
        if ("function" === typeof a)
          try {
            return a.apply(null, b);
          } catch (e) {}
        else return a;
      })
    );
  }
  function y(a) {
    "undefined" !== typeof console && console.warn("Snowplow: " + a);
  }
  function Ma(a) {
    return a.className.match(/\S+/g) || [];
  }
  function ob(a, b) {
    if (Array.isArray(a) || !K(a))
      return function () {
        return !0;
      };
    if (a.hasOwnProperty("filter")) return a.filter;
    var c = a.hasOwnProperty("whitelist");
    a = a.whitelist || a.blacklist;
    Array.isArray(a) || (a = [a]);
    for (var e = {}, d = 0; d < a.length; d++) e[a[d]] = !0;
    return b
      ? function (a) {
          a: {
            a = Ma(a);
            var b;
            for (b = 0; b < a.length; b++)
              if (e[a[b]]) {
                a = !0;
                break a;
              }
            a = !1;
          }
          return a === c;
        }
      : function (a) {
          return a.name in e === c;
        };
  }
  function rd(a) {
    return K(a)
      ? a.hasOwnProperty("transform")
        ? a.transform
        : function (a) {
            return a;
          }
      : function (a) {
          return a;
        };
  }
  function Vb(a, b) {
    var c =
      2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 63072e3;
    try {
      var e = Date.now() + 1e3 * c;
      ta.setItem("".concat(a, ".expires"), e);
      ta.setItem(a, b);
      return !0;
    } catch (d) {
      return !1;
    }
  }
  function qc(a) {
    try {
      return ta.removeItem(a), ta.removeItem(a + ".expires"), !0;
    } catch (b) {
      return !1;
    }
  }
  function sd(a, b) {
    for (
      var c = "_sp_root_domain_test_" + new Date().getTime(),
        e = "_test_value_" + new Date().getTime(),
        d = da.location.hostname.split("."),
        f = d.length - 1;
      0 <= f;

    ) {
      var h = d.slice(f, d.length).join(".");
      N(c, e, 0, "/", h, a, b);
      if (N(c) === e) {
        N(c, "", -1, "/", h, a, b);
        c = La.cookie.split("; ");
        e = [];
        for (d = 0; d < c.length; d++)
          "_sp_root_domain_test_" === c[d].substring(0, 21) && e.push(c[d]);
        c = e;
        for (e = 0; e < c.length; e++) N(c[e], "", -1, "/", h, a, b);
        return h;
      }
      --f;
    }
    return da.location.hostname;
  }
  function rc(a, b) {
    for (var c = 0; c < b.length; c++) if (b[c] === a) return !0;
    return !1;
  }
  function N(a, b, c, e, d, f, h) {
    return 1 < arguments.length
      ? (La.cookie =
          a +
          "=" +
          encodeURIComponent(b) +
          (c
            ? "; Expires=" + new Date(+new Date() + 1e3 * c).toUTCString()
            : "") +
          (e ? "; Path=" + e : "") +
          (d ? "; Domain=" + d : "") +
          (f ? "; SameSite=" + f : "") +
          (h ? "; Secure" : ""))
      : decodeURIComponent(
          (("; " + La.cookie).split("; " + a + "=")[1] || "").split(";")[0]
        );
  }
  function pb(a) {
    a = parseInt(a);
    return isNaN(a) ? void 0 : a;
  }
  function Kb(a) {
    a = parseFloat(a);
    return isNaN(a) ? void 0 : a;
  }
  function fa(a) {
    return a && "function" === typeof a ? !0 : !1;
  }
  function td(a, b, c, e, d) {
    function f(e, f, h) {
      h = h || {};
      g.hasOwnProperty(e)
        ? y("Tracker namespace " + e + " already exists.")
        : ((g[e] = new a(d, e, b, c, h)), g[e].setCollectorUrl(f));
    }
    function h() {
      var a;
      for (a = 0; a < arguments.length; a += 1) {
        var b = arguments[a];
        var c = Array.prototype.shift.call(b);
        if (fa(c))
          try {
            c.apply(g, b);
          } catch (C) {
            y("Custom callback error - ".concat(C));
          } finally {
            continue;
          }
        var d = c.split(":");
        c = d[0];
        d = 1 < d.length ? d[1].split(";") : [];
        d = [c, d];
        c = d[0];
        d = d[1];
        if ("newTracker" === c) f(b[0], b[1], b[2]);
        else if (
          ("setCollectorCf" !== c && "setCollectorUrl" !== c) ||
          (d && 0 !== d.length)
        ) {
          var e = [];
          if (d && 0 !== d.length)
            for (var h = 0; h < d.length; h++)
              g.hasOwnProperty(d[h])
                ? e.push(g[d[h]])
                : y('Warning: Tracker namespace "' + d[h] + '" not configured');
          else e = ea(g);
          0 === e.length && y("Warning: No tracker configured");
          for (d = 0; d < e.length; d++) e[d][c].apply(e[d], b);
        } else
          (d = b[0]),
            (b = b[1]),
            y(
              c +
                " is deprecated. Set the collector when a new tracker instance using newTracker."
            ),
            (b = void 0 === b ? "sp" : b),
            f(b),
            g[b][c](d);
      }
    }
    for (var g = {}, k = 0; k < e.length; k++) h(e[k]);
    return { push: h };
  }
  function sc(a, b, c) {
    if ("translate.googleusercontent.com" === a)
      "" === c && (c = b),
        (a = /^(?:https?|ftp)(?::\/*(?:[^?]+))([?][^#]+)/.exec(b)),
        (b = Ib("u", a[1])),
        (a = Ub(b));
    else {
      var e;
      if (!(e = "cc.bingj.com" === a || "webcache.googleusercontent.com" === a))
        a: {
          if (
            /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
              a
            )
          )
            try {
              var d =
                document.body.children[0].children[0].children[0].children[0]
                  .children[0].children[0].innerHTML;
              e = "You have reached the cached page for" === d.slice(0, 36);
              break a;
            } catch (f) {
              e = !1;
              break a;
            }
          e = void 0;
        }
      e && ((b = document.links[0].href), (a = Ub(b)));
    }
    return [a, b, c];
  }
  function ud() {
    try {
      var a = !!ua.localStorage;
    } catch (b) {
      a = !0;
    }
    if (!a) return !1;
    try {
      return (
        ua.localStorage.setItem("modernizr", "modernizr"),
        ua.localStorage.removeItem("modernizr"),
        !0
      );
    } catch (b) {
      return !1;
    }
  }
  function vd() {
    var a = ua,
      b = "inner";
    "innerWidth" in ua || ((b = "client"), (a = qb.documentElement || qb.body));
    var c = a[b + "Width"];
    a = a[b + "Height"];
    return 0 <= c && 0 <= a ? c + "x" + a : null;
  }
  function wd() {
    var a = qb.documentElement,
      b = qb.body,
      c = Math.max(a.clientWidth, a.offsetWidth, a.scrollWidth);
    a = Math.max(
      a.clientHeight,
      a.offsetHeight,
      a.scrollHeight,
      b ? Math.max(b.offsetHeight, b.scrollHeight) : 0
    );
    return isNaN(c) || isNaN(a) ? "" : c + "x" + a;
  }
  function xd() {
    var a,
      b = {
        pdf: "application/pdf",
        qt: "video/quicktime",
        realp: "audio/x-pn-realaudio-plugin",
        wma: "application/x-mplayer2",
        dir: "application/x-director",
        fla: "application/x-shockwave-flash",
        java: "application/x-java-vm",
        gears: "application/x-googlegears",
        ag: "application/x-silverlight",
      },
      c = {};
    if (W.mimeTypes && W.mimeTypes.length)
      for (a in b)
        if (Object.prototype.hasOwnProperty.call(b, a)) {
          var e = W.mimeTypes[b[a]];
          c[a] = e && e.enabledPlugin ? "1" : "0";
        }
    W.constructor === window.Navigator &&
      "unknown" !== typeof W.javaEnabled &&
      void 0 !== W.javaEnabled &&
      W.javaEnabled() &&
      (c.java = "1");
    fa(ua.GearsFactory) && (c.gears = "1");
    c.res = Lb.width + "x" + Lb.height;
    c.cd = Lb.colorDepth;
    c.cookie = W.cookieEnabled ? "1" : "0";
    return c;
  }
  function yd(a, b, c) {
    function e(b, d) {
      for (
        var e, f, h, k;
        null !== (e = b.parentNode) &&
        void 0 !== e &&
        "A" !== (f = b.tagName.toUpperCase()) &&
        "AREA" !== f;

      )
        b = e;
      if (void 0 !== b.href) {
        e = b.hostname || Ub(b.href);
        f = e.toLowerCase();
        var p = b.href.replace(e, f);
        /^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto):/i.test(
          p
        ) ||
          ((e = b.id),
          (f = Ma(b)),
          (h = b.target),
          (k = g ? b.innerHTML : null),
          (p = unescape(p)),
          a.trackLinkClick(p, e, f, h, k, c(Jb(d, b))));
      }
    }
    function d(a) {
      return function (b) {
        b = b || window.event;
        var c = b.which || b.button;
        var d = b.target || b.srcElement;
        "click" === b.type
          ? d && e(d, a)
          : "mousedown" === b.type
          ? (1 !== c && 2 !== c) || !d
            ? (p = v = null)
            : ((p = c), (v = d))
          : "mouseup" === b.type &&
            (c === p && d === v && e(d, a), (p = v = null));
      };
    }
    var f, h, g, k, p, v;
    return {
      configureLinkClickTracking: function (a, b, c, d) {
        g = c;
        k = d;
        h = b;
        f = ob(a, !0);
      },
      addClickListeners: function () {
        var a = document.links,
          c;
        for (c = 0; c < a.length; c++)
          if (f(a[c]) && !a[c][b]) {
            var e = a[c];
            h
              ? (q(e, "mouseup", d(k), !1), q(e, "mousedown", d(k), !1))
              : q(e, "click", d(k), !1);
            a[c][b] = !0;
          }
      },
    };
  }
  function zd(a, b, c) {
    function e(a) {
      return a[
        Ad(["name", "id", "type", "nodeName"], function (b) {
          return a[b] && "string" === typeof a[b];
        })
      ];
    }
    function d(a) {
      for (
        ;
        a &&
        a.nodeName &&
        "HTML" !== a.nodeName.toUpperCase() &&
        "FORM" !== a.nodeName.toUpperCase();

      )
        a = a.parentNode;
      if (a && a.nodeName && "FORM" === a.nodeName.toUpperCase()) return e(a);
    }
    function f(a) {
      var b = [];
      O(k, function (c) {
        c = Array.prototype.filter.call(
          a.getElementsByTagName(c),
          function (a) {
            return a.hasOwnProperty(p);
          }
        );
        O(c, function (a) {
          if ("submit" !== a.type) {
            var c = { name: e(a), value: a.value, nodeName: a.nodeName };
            a.type && "INPUT" === a.nodeName.toUpperCase() && (c.type = a.type);
            ("checkbox" !== a.type && "radio" !== a.type) ||
              a.checked ||
              (c.value = null);
            b.push(c);
          }
        });
      });
      return b;
    }
    function h(b, f) {
      return function (g) {
        g = g.target;
        var h =
            g.nodeName && "INPUT" === g.nodeName.toUpperCase() ? g.type : null,
          k = "checkbox" !== g.type || g.checked ? m(g.value, g) : null;
        ("change_form" === b || ("checkbox" !== h && "radio" !== h)) &&
          a.trackFormFocusOrChange(
            b,
            d(g),
            e(g),
            g.nodeName,
            h,
            Ma(g),
            k,
            c(Jb(f, g, h, k))
          );
      };
    }
    function g(b) {
      return function (d) {
        d = d.target;
        var g = f(d);
        O(g, function (a) {
          a.value = m(a.value, a);
        });
        a.trackFormSubmission(e(d), Ma(d), g, c(Jb(b, d, g)));
      };
    }
    var k = ["textarea", "input", "select"],
      p = b + "form",
      v = function () {
        return !0;
      },
      J = function () {
        return !0;
      },
      m = function (a) {
        return a;
      };
    return {
      configureFormTracking: function (a) {
        a &&
          ((v = ob(a.forms, !0)), (J = ob(a.fields, !1)), (m = rd(a.fields)));
      },
      addFormListeners: function (a) {
        O(document.getElementsByTagName("form"), function (b) {
          v(b) &&
            !b[p] &&
            (O(k, function (c) {
              O(b.getElementsByTagName(c), function (b) {
                J(b) &&
                  !b[p] &&
                  "password" !== b.type.toLowerCase() &&
                  (q(b, "focus", h("focus_form", a), !1),
                  q(b, "change", h("change_form", a), !1),
                  (b[p] = !0));
              });
            }),
            q(b, "submit", g(a)),
            (b[p] = !0));
        });
      },
    };
  }
  function Bd(a) {
    function b(b, e, d, f, h, g) {
      a.trackSelfDescribingEvent(
        {
          schema:
            "iglu:com.snowplowanalytics.snowplow/application_error/jsonschema/1-0-1",
          data: {
            programmingLanguage: "JAVASCRIPT",
            message:
              b || "JS Exception. Browser doesn't support ErrorEvent API",
            stackTrace: h && h.stack ? h.stack : null,
            lineNumber: d,
            lineColumn: f,
            fileName: e,
          },
        },
        g
      );
    }
    return {
      trackError: b,
      enableErrorTracking: function (a, e, d) {
        q(
          Cd,
          "error",
          function (c) {
            if ((fa(a) && a(c)) || null == a) {
              var f = fa(e) ? d.concat(e(c)) : d;
              b(c.message, c.filename, c.lineno, c.colno, c.error, f);
            }
          },
          !0
        );
      },
    };
  }
  function Dd(a, b, c, e, d, f, h, g, k, p, v, J) {
    function m(a) {
      var b = "?",
        c = { co: !0, cx: !0 },
        d = !0,
        e;
      for (e in a)
        a.hasOwnProperty(e) &&
          !c.hasOwnProperty(e) &&
          (d ? (d = !1) : (b += "&"),
          (b += encodeURIComponent(e) + "=" + encodeURIComponent(a[e])));
      for (var g in c)
        a.hasOwnProperty(g) &&
          c.hasOwnProperty(g) &&
          (b += "&" + g + "=" + encodeURIComponent(a[g]));
      return b;
    }
    function r(a) {
      a = Ed(a, function (a) {
        return a.toString();
      });
      return { evt: a, bytes: M(JSON.stringify(a)) };
    }
    function M(a) {
      for (var b = 0, c = 0; c < a.length; c++) {
        var d = a.charCodeAt(c);
        127 >= d
          ? (b += 1)
          : 2047 >= d
          ? (b += 2)
          : 55296 <= d && 57343 >= d
          ? ((b += 4), c++)
          : (b = 65535 > d ? b + 3 : b + 4);
      }
      return b;
    }
    function C() {
      for (; E.length && "string" !== typeof E[0] && "object" !== D(E[0]); )
        E.shift();
      if (1 > E.length) q = !1;
      else {
        if (!pc(u)) throw "No collector configured";
        q = !0;
        var a = E[0];
        if (F) {
          var b = function (a) {
              for (
                var b = 0, c = 0;
                b < a.length && !((c += a[b].bytes), c >= g);

              )
                b += 1;
              return b;
            },
            c = function (a) {
              for (var b = 0; b < a; b++) E.shift();
              e && Vb(R, JSON.stringify(E.slice(0, p)));
              C();
            };
          if (x) {
            a = uc(a);
            var d = n(a, !1);
            var f = 1;
          } else (a = u), (d = n(a, !0)), (f = b(E));
          var h = setTimeout(function () {
            d.abort();
            q = !1;
          }, v);
          d.onreadystatechange = function () {
            if (4 === d.readyState && 200 <= d.status && 400 > d.status) {
              clearTimeout(h);
              if (O && !H)
                try {
                  vc.setItem(Q, !0);
                } catch (tc) {}
              c(f);
            } else
              4 === d.readyState &&
                400 <= d.status &&
                (clearTimeout(h), (q = !1));
          };
          if (x) d.send();
          else if (((b = E.slice(0, f)), 0 < b.length)) {
            var k;
            if (!(k = H) && (k = O))
              try {
                k = vc.getItem(Q);
              } catch (tc) {
                k = void 0;
              }
            H = k;
            b = ea(b, function (a) {
              return a.evt;
            });
            if (H) {
              k = new Blob([Mb(w(b))], { type: "application/json" });
              try {
                var m = navigator.sendBeacon(a, k);
              } catch (tc) {
                m = !1;
              }
            }
            !0 === m && c(f);
            (O && m) || d.send(Mb(w(b)));
          }
        } else if (J) q = !1;
        else {
          m = new Image(1, 1);
          var r = !0;
          m.onload = function () {
            r &&
              ((r = !1),
              E.shift(),
              e && Vb(R, JSON.stringify(E.slice(0, p))),
              C());
          };
          m.onerror = function () {
            r && (q = r = !1);
          };
          m.src = uc(a);
          setTimeout(function () {
            r && q && ((r = !1), C());
          }, v);
        }
      }
    }
    function n(a, b) {
      var c = new XMLHttpRequest();
      b
        ? (c.open("POST", a, !0),
          c.setRequestHeader("Content-Type", "application/json; charset=UTF-8"))
        : c.open("GET", a, !0);
      c.withCredentials = !0;
      J && c.setRequestHeader("SP-Anonymous", "*");
      return c;
    }
    function Mb(a) {
      return JSON.stringify({
        schema:
          "iglu:com.snowplowanalytics.snowplow/payload_data/jsonschema/1-0-4",
        data: a,
      });
    }
    function w(a) {
      for (var b = new Date().getTime().toString(), c = 0; c < a.length; c++)
        a[c].stm = b;
      return a;
    }
    function uc(a) {
      return k
        ? u + a.replace("?", "?stm=" + new Date().getTime() + "&")
        : u + a;
    }
    var B = window.localStorage,
      q = !1,
      u,
      H;
    d = d.toLowerCase ? d.toLowerCase() : d;
    var N = null === d || !0 === d || "beacon" === d || "true" === d,
      O = !!(N && navigator && navigator.sendBeacon) && N,
      x = "get" === d,
      F = !!(
        window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest()
      ),
      K = !x && F && ("post" === d || N),
      P = K ? f : "/i";
    h = (ud() && e && K && h) || 1;
    var R = "snowplowOutQueue_"
      .concat(a, "_")
      .concat(b, "_")
      .concat(K ? "post2" : "get");
    var Q = "spBeaconPreflight_".concat(a, "_").concat(b);
    if (e)
      try {
        var E = JSON.parse(B.getItem(R));
      } catch (cf) {}
    Array.isArray(E) || (E = []);
    c.outQueues.push(E);
    F &&
      1 < h &&
      c.bufferFlushers.push(function () {
        q || C();
      });
    return {
      enqueueRequest: function (a, b) {
        u = b + P;
        if (K) {
          a = r(a);
          if (a.bytes >= g) {
            y("Event (" + a.bytes + "B) too big, max is " + g);
            n(u, !0).send(Mb(w([a.evt])));
            return;
          }
          E.push(a);
        } else E.push(m(a));
        a = !1;
        e && (a = Vb(R, JSON.stringify(E.slice(0, p))));
        q || (a && !(E.length >= h)) || C();
      },
      executeQueue: function () {
        q || C();
      },
      setUseLocalStorage: function (a) {
        e = a;
      },
      setAnonymousTracking: function (a) {
        J = a;
      },
      setCollectorUrl: function (a) {
        u = a + P;
      },
    };
  }
  function Fd(a) {
    var b = {};
    "object" === D(a) &&
      null !== a &&
      Object.getOwnPropertyNames(a).forEach(function (c, e, d) {
        "function" === typeof a[c] && (b[c] = Gd(a[c]));
      });
    return b;
  }
  function Hd(a) {
    if (!a) return a;
    switch (4 - (a.length % 4)) {
      case 2:
        a += "==";
        break;
      case 3:
        a += "=";
    }
    a = a.replace(/-/g, "+").replace(/_/g, "/");
    return Id(a);
  }
  function Id(a) {
    var b = 0,
      c = 0;
    var e = "";
    var d = [];
    if (!a) return a;
    a += "";
    do {
      var f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
        a.charAt(b++)
      );
      var h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
        a.charAt(b++)
      );
      e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
        a.charAt(b++)
      );
      var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
        a.charAt(b++)
      );
      var k = (f << 18) | (h << 12) | (e << 6) | g;
      f = (k >> 16) & 255;
      h = (k >> 8) & 255;
      k &= 255;
      64 === e
        ? (d[c++] = String.fromCharCode(f))
        : 64 === g
        ? (d[c++] = String.fromCharCode(f, h))
        : (d[c++] = String.fromCharCode(f, h, k));
    } while (b < a.length);
    e = d.join("");
    return (function (a) {
      return decodeURIComponent(
        a
          .split("")
          .map(function (a) {
            return "%" + ("00" + a.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );
    })(e.replace(/\0+$/, ""));
  }
  function Na(a) {
    if (!wc(a)) return !1;
    for (var b in a) if (Object.prototype.hasOwnProperty.call(a, b)) return !0;
    return !1;
  }
  function wc(a) {
    return (
      "undefined" !== typeof a &&
      null !== a &&
      (a.constructor === {}.constructor || a.constructor === [].constructor)
    );
  }
  function va(a) {
    var b = {},
      c = function (a, c) {
        null != c && "" !== c && (b[a] = c);
      };
    return {
      add: c,
      addDict: function (a) {
        for (var b in a)
          Object.prototype.hasOwnProperty.call(a, b) && c(b, a[b]);
      },
      addJson: function (b, d, f) {
        if (f && Na(f))
          if (((f = JSON.stringify(f)), a)) {
            if (f) {
              d = f;
              var e = (f = 0),
                g = [];
              if (d) {
                d = unescape(encodeURIComponent(d));
                do {
                  var k = d.charCodeAt(f++);
                  var p = d.charCodeAt(f++);
                  var v = d.charCodeAt(f++);
                  var J = (k << 16) | (p << 8) | v;
                  k = (J >> 18) & 63;
                  p = (J >> 12) & 63;
                  v = (J >> 6) & 63;
                  J &= 63;
                  g[e++] =
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
                      k
                    ) +
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
                      p
                    ) +
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
                      v
                    ) +
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
                      J
                    );
                } while (f < d.length);
                f = g.join("");
                d = d.length % 3;
                d = (d ? f.slice(0, d - 3) : f) + "===".slice(d || 3);
              }
              d = d.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
            } else d = f;
            c(b, d);
          } else c(d, f);
      },
      build: function () {
        return b;
      },
    };
  }
  function Jd() {
    var a = [],
      b = [];
    return {
      getGlobalPrimitives: function () {
        return a;
      },
      getConditionalProviders: function () {
        return b;
      },
      addGlobalContexts: function (c) {
        var e = [],
          d = [];
        c = lb(c);
        var f;
        try {
          for (c.s(); !(f = c.n()).done; ) {
            var h = f.value;
            xc(h) ? e.push(h) : wa(h) && d.push(h);
          }
        } catch (g) {
          c.e(g);
        } finally {
          c.f();
        }
        a = a.concat(d);
        b = b.concat(e);
      },
      clearGlobalContexts: function () {
        b = [];
        a = [];
      },
      removeGlobalContexts: function (c) {
        c = lb(c);
        var e;
        try {
          var d = function () {
            var c = e.value;
            xc(c)
              ? (b = b.filter(function (a) {
                  return !rb(a, c);
                }))
              : wa(c) &&
                (a = a.filter(function (a) {
                  return !rb(a, c);
                }));
          };
          for (c.s(); !(e = c.n()).done; ) d();
        } catch (f) {
          c.e(f);
        } finally {
          c.f();
        }
      },
      getApplicableContexts: function (c) {
        c = c.build();
        var e = Na(c) && "e" in c ? "string" === typeof c.e : !1;
        if (e) {
          c = md({}, c);
          try {
            null != c &&
              sb(c, "ue_px", tb) &&
              (c.ue_px = JSON.parse(Hd(F(c, ["ue_px"]))));
            var d = c;
          } catch (g) {
            d = c;
          }
          c = d;
          e =
            "string" === typeof F(c, "ue_px.data.schema")
              ? F(c, "ue_px.data.schema")
              : "string" === typeof F(c, "ue_pr.data.schema")
              ? F(c, "ue_pr.data.schema")
              : "string" === typeof F(c, "schema")
              ? F(c, "schema")
              : "";
          var f = F(c, "e", "");
          d = [];
          var h = Oa(a, c, f, e);
          d.push.apply(d, na(h));
          c = Kd(b, c, f, e);
          d.push.apply(d, na(c));
          return d;
        }
        return [];
      },
    };
  }
  function Ld(a) {
    if ("*" === a[0] || "*" === a[1]) return !1;
    if (0 < a.slice(2).length) {
      var b = !1;
      a = lb(a.slice(2));
      var c;
      try {
        for (a.s(); !(c = a.n()).done; )
          if ("*" === c.value) b = !0;
          else if (b) return !1;
      } catch (e) {
        a.e(e);
      } finally {
        a.f();
      }
      return !0;
    }
    return 2 == a.length ? !0 : !1;
  }
  function yc(a) {
    return (a = a.split(".")) && 1 < a.length ? Ld(a) : !1;
  }
  function zc(a) {
    a = /^iglu:((?:(?:[a-zA-Z0-9-_]+|\*).)+(?:[a-zA-Z0-9-_]+|\*))\/([a-zA-Z0-9-_.]+|\*)\/jsonschema\/([1-9][0-9]*|\*)-(0|[1-9][0-9]*|\*)-(0|[1-9][0-9]*|\*)$/.exec(
      a
    );
    if (null !== a && yc(a[1])) return a.slice(1, 6);
  }
  function Nb(a) {
    if ((a = zc(a))) {
      var b = a[0];
      return 5 === a.length && yc(b);
    }
    return !1;
  }
  function Md(a) {
    return (
      Array.isArray(a) &&
      a.every(function (a) {
        return "string" === typeof a;
      })
    );
  }
  function Ac(a) {
    return Md(a)
      ? a.every(function (a) {
          return Nb(a);
        })
      : "string" === typeof a
      ? Nb(a)
      : !1;
  }
  function xa(a) {
    return Na(a) && "schema" in a && "data" in a
      ? "string" === typeof a.schema && "object" === D(a.data)
      : !1;
  }
  function Nd(a) {
    var b = 0;
    if (Q(a) && "[object Object]" == S(a)) {
      var c = Od(a);
      null === c
        ? (c = !0)
        : ((c = Pd.call(c, "constructor") && c.constructor),
          (c = "function" == typeof c && c instanceof c && Bc.call(c) == Qd));
    } else c = !1;
    if (c) {
      if (null != a && sb(a, "accept", tb))
        if (Ac(a.accept)) b += 1;
        else return !1;
      if (null != a && sb(a, "reject", tb))
        if (Ac(a.reject)) b += 1;
        else return !1;
      return 0 < b && 2 >= b;
    }
    return !1;
  }
  function Cc(a) {
    return "function" === typeof a && 1 >= a.length;
  }
  function wa(a) {
    return ("function" === typeof a && 1 >= a.length) || xa(a);
  }
  function Dc(a) {
    return Array.isArray(a) && 2 === a.length
      ? Array.isArray(a[1])
        ? Cc(a[0]) && ub(a[1], wa)
        : Cc(a[0]) && wa(a[1])
      : !1;
  }
  function Ec(a) {
    return Array.isArray(a) && 2 === a.length
      ? Nd(a[0])
        ? Array.isArray(a[1])
          ? ub(a[1], wa)
          : wa(a[1])
        : !1
      : !1;
  }
  function xc(a) {
    return Dc(a) || Ec(a);
  }
  function Rd(a, b) {
    var c = 0,
      e = 0,
      d = F(a, "accept");
    Array.isArray(d)
      ? a.accept.some(function (a) {
          return vb(a, b);
        }) && e++
      : "string" === typeof d && vb(d, b) && e++;
    d = F(a, "reject");
    Array.isArray(d)
      ? a.reject.some(function (a) {
          return vb(a, b);
        }) && c++
      : "string" === typeof d && vb(d, b) && c++;
    return 0 < e && 0 === c ? !0 : !1;
  }
  function vb(a, b) {
    if (!Nb(a)) return !1;
    a = zc(a);
    b = /^iglu:([a-zA-Z0-9-_.]+)\/([a-zA-Z0-9-_]+)\/jsonschema\/([1-9][0-9]*)-(0|[1-9][0-9]*)-(0|[1-9][0-9]*)$/.exec(
      b
    );
    b = null !== b ? b.slice(1, 6) : void 0;
    if (a && b) {
      if (!Sd(a[0], b[0])) return !1;
      for (var c = 1; 5 > c; c++) if (!Fc(a[c], b[c])) return !1;
      return !0;
    }
    return !1;
  }
  function Sd(a, b) {
    b = b.split(".");
    a = a.split(".");
    if (b && a) {
      if (b.length !== a.length) return !1;
      for (var c = 0; c < a.length; c++) if (!Fc(b[c], a[c])) return !1;
      return !0;
    }
    return !1;
  }
  function Fc(a, b) {
    return (a && b && "*" === a) || a === b;
  }
  function Gc(a) {
    return Array.isArray(a) ? a : [a];
  }
  function Oa(a, b, c, e) {
    var d;
    a = Gc(a);
    a = ea(a, function (a) {
      a: if (xa(a)) a = [a];
      else {
        if ("function" === typeof a && 1 >= a.length) {
          b: {
            var d = void 0;
            try {
              d = a({ event: b, eventType: c, eventSchema: e });
              if (xa(d) || (Array.isArray(d) && ub(d, xa))) {
                var g = d;
                break b;
              }
              g = void 0;
              break b;
            } catch (k) {}
            g = void 0;
          }
          if (xa(g)) {
            a = [g];
            break a;
          } else if (Array.isArray(g)) {
            a = g;
            break a;
          }
        }
        a = void 0;
      }
      if (a && 0 !== a.length) return a;
    });
    return (d = []).concat.apply(d, na(Hc(a)));
  }
  function Kd(a, b, c, e) {
    var d;
    a = Gc(a);
    a = ea(a, function (a) {
      a: {
        if (Dc(a)) {
          var d = a[0],
            g = !1;
          try {
            g = d({ event: b, eventType: c, eventSchema: e });
          } catch (k) {
            g = !1;
          }
          if (!0 === g) {
            a = Oa(a[1], b, c, e);
            break a;
          }
        } else if (Ec(a) && Rd(a[0], e)) {
          a = Oa(a[1], b, c, e);
          break a;
        }
        a = [];
      }
      if (a && 0 !== a.length) return a;
    });
    return (d = []).concat.apply(d, na(Hc(a)));
  }
  function Td(a, b) {
    var c = Jd(),
      e = {};
    "undefined" === typeof a && (a = !0);
    var d = function (a, b) {
        var c = {};
        b = b || {};
        for (var d in a)
          if (b[d] || (null !== a[d] && "undefined" !== typeof a[d]))
            c[d] = a[d];
        return c;
      },
      f = function (a, d, f, h) {
        a.addDict(e);
        a.add("eid", Ud.v4());
        f =
          null == f
            ? { type: "dtm", value: new Date().getTime() }
            : "number" === typeof f
            ? { type: "dtm", value: f }
            : "ttm" === f.type
            ? { type: "ttm", value: f.value }
            : { type: "dtm", value: f.value || new Date().getTime() };
        a.add(f.type, f.value.toString());
        f = c.getApplicableContexts(a);
        var g = [];
        d && d.length && g.push.apply(g, na(d));
        f && f.length && g.push.apply(g, na(f));
        d =
          g && g.length
            ? {
                schema:
                  "iglu:com.snowplowanalytics.snowplow/contexts/jsonschema/1-0-0",
                data: g,
              }
            : void 0;
        void 0 !== d && a.addJson("cx", "co", d);
        "function" === typeof b && b(a);
        try {
          h && h(a.build());
        } catch (m) {
          console.warn("Snowplow: error running custom callback");
        }
        return a;
      },
      h = function (b, c, d, e) {
        var g = va(a);
        b = {
          schema:
            "iglu:com.snowplowanalytics.snowplow/unstruct_event/jsonschema/1-0-0",
          data: b,
        };
        g.add("e", "ue");
        g.addJson("ue_px", "ue_pr", b);
        return f(g, c, d, e);
      };
    return {
      addPayloadPair: function (a, b) {
        e[a] = b;
      },
      setBase64Encoding: function (b) {
        a = b;
      },
      addPayloadDict: function (a) {
        for (var b in a)
          Object.prototype.hasOwnProperty.call(a, b) && (e[b] = a[b]);
      },
      resetPayloadPairs: function (a) {
        e = wc(a) ? a : {};
      },
      setTrackerVersion: function (a) {
        e.tv = a;
      },
      setTrackerNamespace: function (a) {
        e.tna = a;
      },
      setAppId: function (a) {
        e.aid = a;
      },
      setPlatform: function (a) {
        e.p = a;
      },
      setUserId: function (a) {
        e.uid = a;
      },
      setScreenResolution: function (a, b) {
        e.res = a + "x" + b;
      },
      setViewport: function (a, b) {
        e.vp = a + "x" + b;
      },
      setColorDepth: function (a) {
        e.cd = a;
      },
      setTimezone: function (a) {
        e.tz = a;
      },
      setLang: function (a) {
        e.lang = a;
      },
      setIpAddress: function (a) {
        e.ip = a;
      },
      setUseragent: function (a) {
        e.ua = a;
      },
      trackUnstructEvent: h,
      trackSelfDescribingEvent: h,
      trackPageView: function (b, c, d, e, h, m) {
        var g = va(a);
        g.add("e", "pv");
        g.add("url", b);
        g.add("page", c);
        g.add("refr", d);
        return f(g, e, h, m);
      },
      trackPagePing: function (b, c, d, e, h, m, r, M, C, n) {
        var g = va(a);
        g.add("e", "pp");
        g.add("url", b);
        g.add("page", c);
        g.add("refr", d);
        g.add("pp_mix", e.toString());
        g.add("pp_max", h.toString());
        g.add("pp_miy", m.toString());
        g.add("pp_may", r.toString());
        return f(g, M, C, n);
      },
      trackStructEvent: function (b, c, d, e, h, m, r, M) {
        var g = va(a);
        g.add("e", "se");
        g.add("se_ca", b);
        g.add("se_ac", c);
        g.add("se_la", d);
        g.add("se_pr", e);
        g.add("se_va", null == h ? void 0 : h.toString());
        return f(g, m, r, M);
      },
      trackEcommerceTransaction: function (
        b,
        c,
        d,
        e,
        h,
        m,
        r,
        M,
        C,
        n,
        Mb,
        w
      ) {
        var g = va(a);
        g.add("e", "tr");
        g.add("tr_id", b);
        g.add("tr_af", c);
        g.add("tr_tt", d);
        g.add("tr_tx", e);
        g.add("tr_sh", h);
        g.add("tr_ci", m);
        g.add("tr_st", r);
        g.add("tr_co", M);
        g.add("tr_cu", C);
        return f(g, n, Mb, w);
      },
      trackEcommerceTransactionItem: function (b, c, d, e, h, m, r, M, C, n) {
        var g = va(a);
        g.add("e", "ti");
        g.add("ti_id", b);
        g.add("ti_sk", c);
        g.add("ti_nm", d);
        g.add("ti_ca", e);
        g.add("ti_pr", h);
        g.add("ti_qu", m);
        g.add("ti_cu", r);
        return f(g, M, C, n);
      },
      trackScreenView: function (a, b, c, e, f) {
        return h(
          {
            schema:
              "iglu:com.snowplowanalytics.snowplow/screen_view/jsonschema/1-0-0",
            data: d({ name: a, id: b }),
          },
          c,
          e,
          f
        );
      },
      trackLinkClick: function (a, b, c, e, f, m, r, M) {
        a = {
          schema:
            "iglu:com.snowplowanalytics.snowplow/link_click/jsonschema/1-0-1",
          data: d({
            targetUrl: a,
            elementId: b,
            elementClasses: c,
            elementTarget: e,
            elementContent: f,
          }),
        };
        return h(a, m, r, M);
      },
      trackAdImpression: function (a, b, c, e, f, m, r, M, n, q, u) {
        a = {
          schema:
            "iglu:com.snowplowanalytics.snowplow/ad_impression/jsonschema/1-0-0",
          data: d({
            impressionId: a,
            costModel: b,
            cost: c,
            targetUrl: e,
            bannerId: f,
            zoneId: m,
            advertiserId: r,
            campaignId: M,
          }),
        };
        return h(a, n, q, u);
      },
      trackAdClick: function (a, b, c, e, f, m, r, n, C, q, u, w) {
        a = {
          schema:
            "iglu:com.snowplowanalytics.snowplow/ad_click/jsonschema/1-0-0",
          data: d({
            targetUrl: a,
            clickId: b,
            costModel: c,
            cost: e,
            bannerId: f,
            zoneId: m,
            impressionId: r,
            advertiserId: n,
            campaignId: C,
          }),
        };
        return h(a, q, u, w);
      },
      trackAdConversion: function (a, b, c, e, f, m, r, n, C, q, u, w) {
        a = {
          schema:
            "iglu:com.snowplowanalytics.snowplow/ad_conversion/jsonschema/1-0-0",
          data: d({
            conversionId: a,
            costModel: b,
            cost: c,
            category: e,
            action: f,
            property: m,
            initialValue: r,
            advertiserId: n,
            campaignId: C,
          }),
        };
        return h(a, q, u, w);
      },
      trackSocialInteraction: function (a, b, c, e, f, m) {
        a = {
          schema:
            "iglu:com.snowplowanalytics.snowplow/social_interaction/jsonschema/1-0-0",
          data: d({ action: a, network: b, target: c }),
        };
        return h(a, e, f, m);
      },
      trackAddToCart: function (a, b, c, e, f, m, r, n, q) {
        return h(
          {
            schema:
              "iglu:com.snowplowanalytics.snowplow/add_to_cart/jsonschema/1-0-0",
            data: d({
              sku: a,
              name: b,
              category: c,
              unitPrice: e,
              quantity: f,
              currency: m,
            }),
          },
          r,
          n,
          q
        );
      },
      trackRemoveFromCart: function (a, b, c, e, f, m, r, n, q) {
        return h(
          {
            schema:
              "iglu:com.snowplowanalytics.snowplow/remove_from_cart/jsonschema/1-0-0",
            data: d({
              sku: a,
              name: b,
              category: c,
              unitPrice: e,
              quantity: f,
              currency: m,
            }),
          },
          r,
          n,
          q
        );
      },
      trackFormFocusOrChange: function (a, b, c, e, f, m, r, n, q, u) {
        var g = "";
        b = {
          formId: b,
          elementId: c,
          nodeName: e,
          elementClasses: m,
          value: r,
        };
        "change_form" === a
          ? ((g =
              "iglu:com.snowplowanalytics.snowplow/change_form/jsonschema/1-0-0"),
            (b.type = f))
          : "focus_form" === a &&
            ((g =
              "iglu:com.snowplowanalytics.snowplow/focus_form/jsonschema/1-0-0"),
            (b.elementType = f));
        return h({ schema: g, data: d(b, { value: !0 }) }, n, q, u);
      },
      trackFormSubmission: function (a, b, c, e, f, m) {
        return h(
          {
            schema:
              "iglu:com.snowplowanalytics.snowplow/submit_form/jsonschema/1-0-0",
            data: d({ formId: a, formClasses: b, elements: c }),
          },
          e,
          f,
          m
        );
      },
      trackSiteSearch: function (a, b, c, e, f, m, r) {
        return h(
          {
            schema:
              "iglu:com.snowplowanalytics.snowplow/site_search/jsonschema/1-0-0",
            data: d({ terms: a, filters: b, totalResults: c, pageResults: e }),
          },
          f,
          m,
          r
        );
      },
      trackConsentWithdrawn: function (a, b, c, e, f, m, r, n) {
        b = {
          schema:
            "iglu:com.snowplowanalytics.snowplow/consent_document/jsonschema/1-0-0",
          data: d({ id: b, version: c, name: e, description: f }),
        };
        return h(
          {
            schema:
              "iglu:com.snowplowanalytics.snowplow/consent_withdrawn/jsonschema/1-0-0",
            data: d({ all: a }),
          },
          b.data && m ? m.concat([b]) : m,
          r,
          n
        );
      },
      trackConsentGranted: function (a, b, c, e, f, m, r, n) {
        a = {
          schema:
            "iglu:com.snowplowanalytics.snowplow/consent_document/jsonschema/1-0-0",
          data: d({ id: a, version: b, name: c, description: e }),
        };
        return h(
          {
            schema:
              "iglu:com.snowplowanalytics.snowplow/consent_granted/jsonschema/1-0-0",
            data: d({ expiry: f }),
          },
          m ? m.concat([a]) : [a],
          r,
          n
        );
      },
      addGlobalContexts: function (a) {
        c.addGlobalContexts(a);
      },
      clearGlobalContexts: function () {
        c.clearGlobalContexts();
      },
      removeGlobalContexts: function (a) {
        c.removeGlobalContexts(a);
      },
    };
  }
  function wb(a, b, c, e, d) {
    function f(a) {
      return (
        -1 <
        Tb.map(function (a) {
          return a.toLowerCase();
        }).indexOf(a.toLowerCase())
      );
    }
    function h() {
      Pa = sc(z.domain, A.location.href, ec());
      Pa[1] !== ya && (Ob = ec(ya));
      Ma = dc(Pa[0]);
      ya = Pa[1];
    }
    function g() {
      var a = new Date().getTime();
      if (this.href) {
        a = "_sp=" + (xb + "." + a);
        var b = this.href.split("#"),
          c = b[0].split("?"),
          d = c.shift();
        if ((c = c.join("?"))) {
          for (var e = !0, f = c.split("&"), g = 0; g < f.length; g++)
            if ("_sp=" === f[g].substr(0, 4)) {
              e = !1;
              f[g] = a;
              c = f.join("&");
              break;
            }
          e && (c = a + "&" + c);
        } else c = a;
        b[0] = d + "?" + c;
        this.href = b.join("#");
      }
    }
    function k(a) {
      for (var b = 0; b < z.links.length; b++) {
        var c = z.links[b];
        !c.spDecorationEnabled &&
          a(c) &&
          (q(c, "click", g, !0),
          q(c, "mousedown", g, !0),
          (c.spDecorationEnabled = !0));
      }
    }
    function p(a) {
      if (Va) {
        var b = /#.*/;
        a = a.replace(b, "");
      }
      Ya && ((b = /[{}]/g), (a = a.replace(b, "")));
      return a;
    }
    function v(a) {
      return (a = /^([a-z]+):/.exec(a)) ? a[1] : null;
    }
    function n(a) {
      a = Qa + a + "." + Ra;
      if ("localStorage" == G) {
        a: {
          try {
            var b = ta.getItem(a + ".expires");
            if (null === b || +b > Date.now()) {
              var c = ta.getItem(a);
              break a;
            } else ta.removeItem(a), ta.removeItem(a + ".expires");
            c = void 0;
            break a;
          } catch (df) {}
          c = void 0;
        }
        return c;
      }
      if ("cookie" == G || "cookieAndLocalStorage" == G) return N(a);
    }
    function m() {
      h();
      Ra = Sb((yb || Ma) + (Ba || "/")).slice(0, 4);
    }
    function r() {
      Wb = new Date().getTime();
    }
    function u() {
      var a = C(),
        b = a[0];
      b < Xb ? (Xb = b) : b > Yb && (Yb = b);
      a = a[1];
      a < Zb ? (Zb = a) : a > $b && ($b = a);
      r();
    }
    function C() {
      var a =
        z.compatMode && "BackCompat" !== z.compatMode
          ? z.documentElement
          : z.body;
      return [a.scrollLeft || A.pageXOffset, a.scrollTop || A.pageYOffset];
    }
    function B() {
      var a = C(),
        b = a[0];
      Yb = Xb = b;
      $b = Zb = a = a[1];
    }
    function D(a) {
      a = Math.round(a);
      if (!isNaN(a)) return a;
    }
    function w() {
      K(Qa + "ses." + Ra, "*", Ja);
    }
    function F(a, b, c, d, e, f) {
      K(
        Qa + "id." + Ra,
        a + "." + b + "." + c + "." + d + "." + e + "." + f,
        nb
      );
    }
    function K(a, b, c) {
      if (!za || zb)
        "localStorage" == G
          ? Vb(a, b, c)
          : ("cookie" == G || "cookieAndLocalStorage" == G) &&
            N(a, b, c, Ba, yb, ja, la);
    }
    function P(a) {
      a && ((d.stateStorageStrategy = a), (G = Ca(d)));
      za = !!d.anonymousTracking;
      zb = Da(d);
      Na = Fa(d);
      Sa.setUseLocalStorage(
        "localStorage" == G || "cookieAndLocalStorage" == G
      );
      Sa.setAnonymousTracking(Na);
    }
    function Q(a, b) {
      var c = Qa + "id." + Ra,
        d = Qa + "ses." + Ra;
      qc(c);
      qc(d);
      N(c, "", -1, "/", yb, ja, la);
      N(d, "", -1, "/", yb, ja, la);
      a || ((T = H()), (aa = 0));
      b || ((xb = H()), (Ta = null));
    }
    function W() {
      if (!za || zb) {
        var a = "none" != G && !!n("ses"),
          b = S();
        b[1] ? (xb = b[1]) : ((xb = za ? "" : H()), (b[1] = xb));
        T = b[6];
        a || (b[3]++, (T = H()), (b[6] = T), (b[5] = b[4]));
        "none" != G &&
          (w(),
          (b[4] = Math.round(new Date().getTime() / 1e3)),
          b.shift(),
          F.apply(null, b));
      }
    }
    function S() {
      if ("none" == G) return [];
      var a = Math.round(new Date().getTime() / 1e3),
        b = n("id");
      b ? ((a = b.split(".")), a.unshift("0")) : (a = ["1", xb, a, 0, a, ""]);
      a[6] || (a[6] = H());
      return a;
    }
    function Y(a) {
      return ob
        ? "https://" + a
        : Lb
        ? "http://" + a
        : ("https:" === z.location.protocol ? "https" : "http") + "://" + a;
    }
    function x(a) {
      var b = kb.concat(a || []);
      I.webPage &&
        b.push({
          schema:
            "iglu:com.snowplowanalytics.snowplow/web_page/jsonschema/1-0-0",
          data: { id: V() },
        });
      I.performanceTiming && (a = da()) && b.push(a);
      if (A.optimizely) {
        I.optimizelySummary &&
          ((a = ua()),
          O(a, function (a) {
            b.push(a);
          }));
        I.optimizelyXSummary &&
          ((a = va()),
          O(a, function (a) {
            b.push(a);
          }));
        if (I.optimizelyExperiments) {
          var c = ka();
          for (a = 0; a < c.length; a++) b.push(c[a]);
        }
        if (I.optimizelyStates)
          for (c = na(), a = 0; a < c.length; a++) b.push(c[a]);
        if (I.optimizelyVariations)
          for (c = oa(), a = 0; a < c.length; a++) b.push(c[a]);
        I.optimizelyVisitor && (a = pa()) && b.push(a);
        if (I.optimizelyAudiences)
          for (c = qa(), a = 0; a < c.length; a++) b.push(c[a]);
        if (I.optimizelyDimensions)
          for (c = ra(), a = 0; a < c.length; a++) b.push(c[a]);
      }
      I.parrable && (a = wa()) && b.push(a);
      I.gdprBasis &&
        Ua.gdprBasis &&
        ((a = Ua.gdprBasis
          ? {
              schema:
                "iglu:com.snowplowanalytics.snowplow/gdpr/jsonschema/1-0-0",
              data: {
                basisForProcessing: Ua.gdprBasis,
                documentId: Ua.gdprDocId || null,
                documentVersion: Ua.gdprDocVer || null,
                documentDescription: Ua.gdprDocDesc || null,
              },
            }
          : void 0),
        a && b.push(a));
      I.clientHints &&
        Aa &&
        b.push({
          schema: "iglu:org.ietf/http_client_hints/jsonschema/1-0-0",
          data: Aa,
        });
      return b;
    }
    function Z() {
      (Gb && null != e.pageViewId) || (e.pageViewId = H());
    }
    function V() {
      null == e.pageViewId && (e.pageViewId = H());
      return e.pageViewId;
    }
    function da() {
      var a = "navigationStart redirectStart redirectEnd fetchStart domainLookupStart domainLookupEnd connectStart secureConnectionStart connectEnd requestStart responseStart responseEnd unloadEventStart unloadEventEnd domLoading domInteractive domContentLoadedEventStart domContentLoadedEventEnd domComplete loadEventStart loadEventEnd msFirstPaint chromeFirstPaint requestEnd proxyStart proxyEnd".split(
          " "
        ),
        b =
          A.performance ||
          A.mozPerformance ||
          A.msPerformance ||
          A.webkitPerformance;
      if (b) {
        var c = {},
          d;
        for (d in b.timing)
          rc(d, a) && null !== b.timing[d] && (c[d] = b.timing[d]);
        delete c.requestEnd;
        return {
          schema: "iglu:org.w3/PerformanceTiming/jsonschema/1-0-0",
          data: c,
        };
      }
    }
    function R(a, b) {
      if (A.optimizely && A.optimizely.data) {
        var c = A.optimizely.data[a];
        "undefined" !== typeof b && void 0 !== c && (c = c[b]);
      }
      return c;
    }
    function ca(a, b) {
      if (A.optimizely && "function" === typeof A.optimizely.get) {
        var c = A.optimizely.get(a);
        "undefined" !== typeof b && void 0 !== c && (c = c[b]);
      }
      return c;
    }
    function E() {
      var a = R("state"),
        b = R("experiments");
      return ea(a && b && a.activeExperiments, function (c) {
        var d = b[c];
        return {
          activeExperimentId: c.toString(),
          variation: a.variationIdsMap[c][0].toString(),
          conditional: d && d.conditional,
          manual: d && d.manual,
          name: d && d.name,
        };
      });
    }
    function ia() {
      var a = ca("state"),
        b = a && a.getActiveExperimentIds(),
        c = a && a.getVariationMap(),
        d = ca("visitor");
      return ea(b, function (a) {
        var b = c[a],
          e = (b && b.name && b.name.toString()) || null;
        b = b && b.id;
        var f = (d && d.visitorId && d.visitorId.toString()) || null;
        return {
          experimentId: pb(a) || null,
          variationName: e,
          variation: pb(b) || null,
          visitorId: f,
        };
      });
    }
    function ka() {
      var a = R("experiments");
      if (a) {
        var b = [],
          c;
        for (c in a)
          if (a.hasOwnProperty(c)) {
            var d = {};
            d.id = c;
            var e = a[c];
            d.code = e.code;
            d.manual = e.manual;
            d.conditional = e.conditional;
            d.name = e.name;
            d.variationIds = e.variation_ids;
            b.push({
              schema: "iglu:com.optimizely/experiment/jsonschema/1-0-0",
              data: d,
            });
          }
        return b;
      }
      return [];
    }
    function na() {
      var a = [],
        b = R("experiments");
      if (b) for (var c in b) b.hasOwnProperty(c) && a.push(c);
      if ((b = R("state"))) {
        c = [];
        for (var d = b.activeExperiments || [], e = 0; e < a.length; e++) {
          var f = a[e],
            g = {};
          g.experimentId = f;
          g.isActive = rc(a[e], d);
          g.variationIndex = (b.variationMap || {})[f];
          g.variationName = (b.variationNamesMap || {})[f];
          var h = b.variationIdsMap || {};
          h[f] && 1 === h[f].length && (g.variationId = h[f][0]);
          c.push({
            schema: "iglu:com.optimizely/state/jsonschema/1-0-0",
            data: g,
          });
        }
        return c;
      }
      return [];
    }
    function oa() {
      var a = R("variations");
      if (a) {
        var b = [],
          c;
        for (c in a)
          if (a.hasOwnProperty(c)) {
            var d = {};
            d.id = c;
            var e = a[c];
            d.name = e.name;
            d.code = e.code;
            b.push({
              schema: "iglu:com.optimizely/variation/jsonschema/1-0-0",
              data: d,
            });
          }
        return b;
      }
      return [];
    }
    function pa() {
      var a = R("visitor");
      if (a) {
        var b = {};
        b.browser = a.browser;
        b.browserVersion = a.browserVersion;
        b.device = a.device;
        b.deviceType = a.deviceType;
        b.ip = a.ip;
        var c = a.platform || {};
        b.platformId = c.id;
        b.platformVersion = c.version;
        c = a.location || {};
        b.locationCity = c.city;
        b.locationRegion = c.region;
        b.locationCountry = c.country;
        b.mobile = a.mobile;
        b.mobileId = a.mobileId;
        b.referrer = a.referrer;
        b.os = a.os;
        return {
          schema: "iglu:com.optimizely/visitor/jsonschema/1-0-0",
          data: b,
        };
      }
    }
    function qa() {
      var a = R("visitor", "audiences");
      if (a) {
        var b = [],
          c;
        for (c in a)
          a.hasOwnProperty(c) &&
            b.push({
              schema: "iglu:com.optimizely/visitor_audience/jsonschema/1-0-0",
              data: { id: c, isMember: a[c] },
            });
        return b;
      }
      return [];
    }
    function ra() {
      var a = R("visitor", "dimensions");
      if (a) {
        var b = [],
          c;
        for (c in a)
          a.hasOwnProperty(c) &&
            b.push({
              schema: "iglu:com.optimizely/visitor_dimension/jsonschema/1-0-0",
              data: { id: c, value: a[c] },
            });
        return b;
      }
      return [];
    }
    function ua() {
      return ea(E(), function (a) {
        return {
          schema:
            "iglu:com.optimizely.snowplow/optimizely_summary/jsonschema/1-0-0",
          data: a,
        };
      });
    }
    function va() {
      return ea(ia(), function (a) {
        return {
          schema: "iglu:com.optimizely.optimizelyx/summary/jsonschema/1-0-0",
          data: a,
        };
      });
    }
    function wa() {
      var a = window._hawk;
      if (a) {
        var b = { encryptedId: null, optout: null };
        b.encryptedId = a.browserid;
        a = new RegExp(
          "(?:^|;)\\s?" +
            "_parrable_hawk_optout".replace(
              /([.*+?^=!:${}()|[\]\/\\])/g,
              "\\$1"
            ) +
            "=(.*?)(?:;|$)",
          "i"
        );
        a = document.cookie.match(a);
        b.optout =
          a && decodeURIComponent(a[1])
            ? a && decodeURIComponent(a[1])
            : "false";
        return {
          schema: "iglu:com.parrable/encrypted_payload/jsonschema/1-0-0",
          data: b,
        };
      }
    }
    function ma() {
      !Fb &&
        U.geolocation &&
        U.geolocation.getCurrentPosition &&
        ((Fb = !0),
        U.geolocation.getCurrentPosition(function (a) {
          var b = a.coords;
          kb.push({
            schema:
              "iglu:com.snowplowanalytics.snowplow/geolocation_context/jsonschema/1-1-0",
            data: {
              latitude: b.latitude,
              longitude: b.longitude,
              latitudeLongitudeAccuracy: b.accuracy,
              altitude: b.altitude,
              altitudeAccuracy: b.altitudeAccuracy,
              bearing: b.heading,
              speed: b.speed,
              timestamp: Math.round(a.timestamp),
            },
          });
        }));
    }
    function Ha() {
      var a = {};
      O("__utma __utmb __utmc __utmv __utmz _ga".split(" "), function (b) {
        var c = N(b);
        c && (a[b] = c);
      });
      return {
        schema: "iglu:com.google.analytics/cookies/jsonschema/1-0-0",
        data: a,
      };
    }
    function Ia(a, b, c, d, e) {
      h();
      Hb && Z();
      Hb = !0;
      Ab = z.title;
      Pb = a;
      a = oc(Pb || Ab);
      t.trackPageView(
        p(Bb || ya),
        a,
        p(fa || Ob),
        x((b || []).concat(c ? c() : [])),
        d,
        e
      );
      d = new Date();
      e = !1;
      if (X.enabled && !X.installed) {
        e = X.installed = !0;
        var f = {
          update: function () {
            if (
              "undefined" !== typeof window &&
              "function" === typeof window.addEventListener
            ) {
              var a = !1,
                b = Object.defineProperty({}, "passive", {
                  get: function () {
                    a = !0;
                  },
                }),
                c = function () {};
              window.addEventListener("testPassiveEventSupport", c, b);
              window.removeEventListener("testPassiveEventSupport", c, b);
              f.hasSupport = a;
            }
          },
        };
        f.update();
        a =
          "onwheel" in document.createElement("div")
            ? "wheel"
            : void 0 !== document.onmousewheel
            ? "mousewheel"
            : "DOMMouseScroll";
        Object.prototype.hasOwnProperty.call(f, "hasSupport")
          ? q(z, a, r, { passive: !0 })
          : q(z, a, r);
        B();
        a = function (a) {
          var b =
            1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : r;
          return function (a) {
            return q(z, a, b);
          };
        };
        O(
          "click mouseup mousedown mousemove keypress keydown keyup".split(" "),
          a(z)
        );
        O(["resize", "focus", "blur"], a(A));
        a(A, u)("scroll");
      }
      if (X.enabled && (wb || e)) {
        Wb = d.getTime();
        for (var g in X.configurations)
          X.configurations.hasOwnProperty(g) &&
            ((d = X.configurations[g]),
            clearInterval(d.activityInterval),
            La(d, b, c));
      }
    }
    function La(a, b, c) {
      var d = function (a, b) {
          h();
          a({
            context: b,
            pageViewId: V(),
            minXOffset: Xb,
            minYOffset: Zb,
            maxXOffset: Yb,
            maxYOffset: $b,
          });
          B();
        },
        e = function () {
          Wb + a.configHeartBeatTimer > new Date().getTime() &&
            d(a.callback, (b || []).concat(c ? c() : []));
        };
      a.activityInterval =
        0 != a.configMinimumVisitLength
          ? setTimeout(function () {
              Wb + a.configMinimumVisitLength > new Date().getTime() &&
                d(a.callback, (b || []).concat(c ? c() : []));
              a.activityInterval = setInterval(e, a.configHeartBeatTimer);
            }, a.configMinimumVisitLength)
          : setInterval(e, a.configHeartBeatTimer);
    }
    function xa(a, b, c) {
      if (
        "number" == typeof a &&
        a == fc(a) &&
        "number" == typeof b &&
        b == fc(b)
      )
        return {
          configMinimumVisitLength: 1e3 * a,
          configHeartBeatTimer: 1e3 * b,
          activityInterval: null,
          callback: c,
        };
      y(
        "Activity tracking not enabled, please provide integer values for minimumVisitLength and heartBeatDelay."
      );
      return {};
    }
    function Wa(a) {
      var b = a.context,
        c = a.minXOffset,
        d = a.minYOffset,
        e = a.maxXOffset;
      a = a.maxYOffset;
      var f = z.title;
      f !== Ab && ((Ab = f), (Pb = null));
      t.trackPagePing(
        p(Bb || ya),
        oc(Pb || Ab),
        p(fa || Ob),
        D(c),
        D(e),
        D(d),
        D(a),
        x(b)
      );
    }
    function ha(a, b) {
      return "" !== a ? a + b.charAt(0).toUpperCase() + b.slice(1) : b;
    }
    function L(a) {
      var b,
        c,
        d = ["", "webkit", "ms", "moz"];
      if (!lb)
        for (c = 0; c < d.length; c++) {
          var e = d[c];
          if (z[ha(e, "hidden")]) {
            "prerender" === z[ha(e, "visibilityState")] && (b = !0);
            break;
          } else if (!1 === z[ha(e, "hidden")]) break;
        }
      b
        ? q(z, e + "visibilitychange", function Wd() {
            z.removeEventListener(e + "visibilitychange", Wd, !1);
            a();
          })
        : a();
    }
    d = d || {};
    d.hasOwnProperty("post")
      ? (d.eventMethod = !0 === d.post ? "post" : "get")
      : (d.eventMethod = d.eventMethod || "post");
    d.hasOwnProperty("useStm") || (d.useStm = !0);
    var Ca = function (a) {
        return a.hasOwnProperty("stateStorageStrategy")
          ? a.stateStorageStrategy
          : Oa || tb
          ? Oa && tb
            ? "cookieAndLocalStorage"
            : Oa
            ? "cookie"
            : "localStorage"
          : "none";
      },
      Da = function (a) {
        return a.hasOwnProperty("anonymousTracking")
          ? !0 === a.anonymousTracking.withSessionTracking
          : !1;
      },
      Fa = function (a) {
        return a.hasOwnProperty("anonymousTracking")
          ? !0 === a.anonymousTracking.withServerAnonymisation
          : !1;
      },
      mb = Object.freeze({
        consent: "consent",
        contract: "contract",
        legalObligation: "legal_obligation",
        vitalInterests: "vital_interests",
        publicTask: "public_task",
        legitimateInterests: "legitimate_interests",
      }),
      t = Td(!0, function (a) {
        var b = Math.round(new Date().getTime() / 1e3),
          c = n("ses"),
          d = S(),
          f = d[0],
          g = d[1],
          Vd = d[2],
          k = d[3],
          l = d[4],
          m = d[5];
        d = d[6];
        var v = Qb ? !!N(Qb) : !1;
        Ea || v
          ? Q()
          : ("0" === f
              ? ((T = d),
                c || "none" == G || (k++, (m = l), (T = H())),
                (aa = k))
              : new Date().getTime() - Xa > 1e3 * Ja && ((T = H()), aa++),
            a.add("vp", vd()),
            a.add("ds", wd()),
            a.add("vid", zb ? aa : za ? null : aa),
            a.add("sid", zb ? T : za ? null : T),
            a.add("duid", za ? null : g),
            a.add("uid", za ? null : Ta),
            h(),
            a.add("refr", p(fa || Ob)),
            a.add("url", p(Bb || ya)),
            "none" != G && (F(g, Vd, aa, b, m, T), w()),
            (Xa = new Date().getTime()));
        b = vb;
        c = new Date();
        f = Qb ? !!N(Qb) : !1;
        Ea ||
          f ||
          (Sa.enqueueRequest(a.build(), Rb),
          (e.expireDateTime = c.getTime() + b));
      }),
      Ga = !1,
      l = {},
      sa = {},
      Ka = {},
      z = document,
      A = window,
      U = navigator,
      Pa = sc(z.domain, A.location.href, ec()),
      Ma = dc(Pa[0]),
      ya = Pa[1],
      Ob = Pa[2],
      fa,
      qb = d.hasOwnProperty("platform") ? d.platform : "web",
      Rb,
      rb = d.hasOwnProperty("postPath")
        ? d.postPath
        : "/com.snowplowanalytics.snowplow/tp2",
      sb = d.hasOwnProperty("appId") ? d.appId : "",
      Bb,
      Ab = z.title,
      Pb,
      vb = d.hasOwnProperty("pageUnloadTimer") ? d.pageUnloadTimer : 500,
      wb = d.hasOwnProperty("resetActivityTrackingOnPageView")
        ? d.resetActivityTrackingOnPageView
        : !0,
      Va,
      Ya,
      Qa = d.hasOwnProperty("cookieName") ? d.cookieName : "_sp_",
      yb = d.hasOwnProperty("cookieDomain") ? d.cookieDomain : null,
      Ba = "/",
      ja = d.hasOwnProperty("cookieSameSite") ? d.cookieSameSite : "None",
      la = d.hasOwnProperty("cookieSecure") ? d.cookieSecure : !0,
      ib = U.doNotTrack || U.msDoNotTrack || A.doNotTrack,
      Ea = d.hasOwnProperty("respectDoNotTrack")
        ? d.respectDoNotTrack && ("yes" === ib || "1" === ib)
        : !1,
      Qb,
      lb,
      nb = d.hasOwnProperty("cookieLifetime") ? d.cookieLifetime : 63072e3,
      Ja = d.hasOwnProperty("sessionCookieTimeout")
        ? d.sessionCookieTimeout
        : 1800,
      Jb = z.characterSet || z.charset,
      ob = d.hasOwnProperty("forceSecureTracker")
        ? !0 === d.forceSecureTracker
        : !1,
      Lb =
        !ob && d.hasOwnProperty("forceUnsecureTracker")
          ? !0 === d.forceUnsecureTracker
          : !1,
      zb = Da(d),
      Na = Fa(d),
      za = !!d.anonymousTracking,
      tb = d.hasOwnProperty("useLocalStorage")
        ? (y(
            "argmap.useLocalStorage is deprecated. Use argmap.stateStorageStrategy instead."
          ),
          d.useLocalStorage)
        : !0,
      Oa = d.hasOwnProperty("useCookies")
        ? (y(
            "argmap.useCookies is deprecated. Use argmap.stateStorageStrategy instead."
          ),
          d.useCookies)
        : !0,
      G = Ca(d),
      Nb = U.userLanguage || U.language,
      ac = xd(),
      ub = a + "_" + b,
      Wb,
      Xa = new Date().getTime(),
      Xb,
      Yb,
      Zb,
      $b,
      Sb = Xd,
      Ra,
      xb,
      T,
      aa = 1,
      Ta,
      Za,
      $a,
      ab,
      bb,
      cb,
      db,
      eb,
      fb,
      gb,
      hb,
      jb,
      bc = [],
      Cb = new yd(t, ub, x),
      cc = new zd(t, ub, x),
      Eb = new Bd(t),
      Sa = new Dd(
        a,
        b,
        e,
        "localStorage" == G || "cookieAndLocalStorage" == G,
        d.eventMethod,
        rb,
        d.bufferSize,
        d.maxPostBytes || 4e4,
        d.useStm,
        d.maxLocalStorageQueueSize || 1e3,
        d.connectionTimeout || 5e3,
        Na
      ),
      Fb = !1,
      I = d.contexts || {},
      kb = [],
      Db = [],
      Gb = !1,
      Hb = !1,
      X = { enabled: !1, installed: !1, configurations: {} },
      Aa = null;
    I.clientHints &&
      U.userAgentData &&
      ((Aa = {
        isMobile: U.userAgentData.mobile,
        brands: U.userAgentData.brands,
      }),
      I.clientHints.includeHighEntropy &&
        U.userAgentData.getHighEntropyValues &&
        U.userAgentData
          .getHighEntropyValues([
            "platform",
            "platformVersion",
            "architecture",
            "model",
            "uaFullVersion",
          ])
          .then(function (a) {
            Aa.architecture = a.architecture;
            Aa.model = a.model;
            Aa.platform = a.platform;
            Aa.uaFullVersion = a.uaFullVersion;
            Aa.platformVersion = a.platformVersion;
          }));
    var Tb = d.skippedBrowserFeatures || [],
      Ua = {};
    d.hasOwnProperty("discoverRootDomain") &&
      d.discoverRootDomain &&
      (yb = sd(ja, la));
    I.gaCookies && kb.push(Ha());
    I.geolocation && ma();
    t.setBase64Encoding(d.hasOwnProperty("encodeBase64") ? d.encodeBase64 : !0);
    t.setTrackerVersion(c);
    t.setTrackerNamespace(b);
    t.setAppId(sb);
    t.setPlatform(qb);
    t.setTimezone(Yd.jstz.determine().name());
    t.addPayloadPair("lang", Nb);
    t.addPayloadPair("cs", Jb);
    for (var ba in ac)
      Object.prototype.hasOwnProperty.call(ac, ba) &&
        (("res" !== ba && "cd" !== ba && "cookie" !== ba) || f(ba)
          ? f(ba) || t.addPayloadPair("f_" + ba, ac[ba])
          : t.addPayloadPair(ba, ac[ba]));
    m();
    W();
    d.crossDomainLinker && k(d.crossDomainLinker);
    l.getDomainSessionIndex = function () {
      return aa;
    };
    l.getPageViewId = function () {
      return V();
    };
    l.newSession = function () {
      var a = Math.round(new Date().getTime() / 1e3),
        b = S(),
        c = b[1],
        d = b[2],
        e = b[3],
        f = b[4],
        g = b[5],
        h = b[6];
      "0" === b[0]
        ? ((T = h), "none" != G && (e++, (g = f), (T = H())), (aa = e), w())
        : ((T = H()), aa++);
      "none" != G && (F(c, d, aa, a, g, T), w());
      Xa = new Date().getTime();
    };
    l.getCookieName = function (a) {
      return Qa + a + "." + Ra;
    };
    l.getUserId = function () {
      return Ta;
    };
    l.getDomainUserId = function () {
      return S()[1];
    };
    l.getDomainUserInfo = function () {
      return S();
    };
    l.getUserFingerprint = function () {
      y(
        "User Fingerprinting is no longer supported. This function will be removed in a future release."
      );
      return 0;
    };
    l.setAppId = function (a) {
      y(
        "setAppId is deprecated. Instead use the argmap argument on tracker initialisation: appId"
      );
      t.setAppId(a);
    };
    l.setReferrerUrl = function (a) {
      fa = a;
    };
    l.setCustomUrl = function (a) {
      h();
      var b = ya,
        c;
      v(a)
        ? (Bb = a)
        : "/" === a.slice(0, 1)
        ? (Bb = v(b) + "://" + Ub(b) + a)
        : ((b = p(b)),
          0 <= (c = b.indexOf("?")) && (b = b.slice(0, c)),
          (c = b.lastIndexOf("/")) !== b.length - 1 && (b = b.slice(0, c + 1)),
          (Bb = b + a));
    };
    l.setDocumentTitle = function (a) {
      Ab = z.title;
      Pb = a;
    };
    l.discardHashTag = function (a) {
      Va = a;
    };
    l.discardBrace = function (a) {
      Ya = a;
    };
    l.setCookieNamePrefix = function (a) {
      y(
        "setCookieNamePrefix is deprecated. Instead use the argmap argument on tracker initialisation: cookieName"
      );
      Qa = a;
    };
    l.setCookieDomain = function (a) {
      y(
        "setCookieDomain is deprecated. Instead use the argmap argument on tracker initialisation: cookieDomain"
      );
      yb = dc(a);
      m();
    };
    l.setCookiePath = function (a) {
      Ba = a;
      m();
    };
    l.setVisitorCookieTimeout = function (a) {
      nb = a;
    };
    l.setSessionCookieTimeout = function (a) {
      y(
        "setSessionCookieTimeout is deprecated. Instead use the argmap argument on tracker initialisation: sessionCookieTimeout"
      );
      Ja = a;
    };
    l.setUserFingerprintSeed = function () {
      y(
        "User Fingerprinting is no longer supported. This function will be removed in a future release."
      );
    };
    l.enableUserFingerprint = function () {
      y(
        "User Fingerprinting is no longer supported. This function will be removed in a future release."
      );
    };
    l.respectDoNotTrack = function (a) {
      y(
        "respectDoNotTrack is deprecated. Instead use the argmap argument on tracker initialisation: respectDoNotTrack"
      );
      var b = U.doNotTrack || U.msDoNotTrack;
      Ea = a && ("yes" === b || "1" === b);
    };
    l.crossDomainLinker = function (a) {
      k(a);
    };
    l.enableLinkClickTracking = function (a, b, c, d) {
      e.hasLoaded
        ? (Cb.configureLinkClickTracking(a, b, c, d), Cb.addClickListeners())
        : e.registeredOnLoadHandlers.push(function () {
            Cb.configureLinkClickTracking(a, b, c, d);
            Cb.addClickListeners();
          });
    };
    l.refreshLinkClickTracking = function () {
      e.hasLoaded
        ? Cb.addClickListeners()
        : e.registeredOnLoadHandlers.push(function () {
            Cb.addClickListeners();
          });
    };
    l.enableActivityTracking = function (a, b) {
      X.enabled = !0;
      X.configurations.pagePing = xa(a, b, Wa);
    };
    l.enableActivityTrackingCallback = function (a, b, c) {
      X.enabled = !0;
      X.configurations.callback = xa(a, b, c);
    };
    l.updatePageActivity = function () {
      r();
    };
    l.enableFormTracking = function (a, b) {
      e.hasLoaded
        ? (cc.configureFormTracking(a), cc.addFormListeners(b))
        : e.registeredOnLoadHandlers.push(function () {
            cc.configureFormTracking(a);
            cc.addFormListeners(b);
          });
    };
    l.killFrame = function () {
      A.location !== A.top.location && (A.top.location = A.location);
    };
    l.redirectFile = function (a) {
      "file:" === A.location.protocol && (A.location = a);
    };
    l.setOptOutCookie = function (a) {
      Qb = a;
    };
    l.setCountPreRendered = function (a) {
      lb = a;
    };
    l.setUserId = function (a) {
      Ta = a;
    };
    l.identifyUser = function (a) {
      l.setUserId(a);
    };
    l.setUserIdFromLocation = function (a) {
      h();
      Ta = Ib(a, ya);
    };
    l.setUserIdFromReferrer = function (a) {
      h();
      Ta = Ib(a, Ob);
    };
    l.setUserIdFromCookie = function (a) {
      Ta = N(a);
    };
    l.setCollectorCf = function (a) {
      Rb = Y(a + ".cloudfront.net");
      Sa.setCollectorUrl(Rb);
    };
    l.setCollectorUrl = function (a) {
      Rb = Y(a);
      Sa.setCollectorUrl(Rb);
    };
    l.setPlatform = function (a) {
      y(
        "setPlatform is deprecated. Instead use the argmap argument on tracker initialisation: platform"
      );
      t.setPlatform(a);
    };
    l.encodeBase64 = function (a) {
      y(
        "encodeBase64 is deprecated. Instead use the argmap argument on tracker initialisation: encodeBase64"
      );
      t.setBase64Encoding(a);
    };
    l.flushBuffer = function () {
      Sa.executeQueue();
    };
    l.enableGeolocationContext = ma;
    l.trackPageView = function (a, b, c, d, e) {
      L(function () {
        Ia(a, b, c, d, e);
      });
    };
    l.trackStructEvent = function (a, b, c, d, e, f, g, h) {
      L(function () {
        t.trackStructEvent(a, b, c, d, e, x(f), g, h);
      });
    };
    l.trackSelfDescribingEvent = function (a, b, c, d) {
      L(function () {
        t.trackSelfDescribingEvent(a, x(b), c, d);
      });
    };
    l.trackUnstructEvent = function (a, b, c) {
      L(function () {
        t.trackSelfDescribingEvent(a, x(b), c);
      });
    };
    l.addTrans = function (a, b, c, d, e, f, g, h, k, l, p) {
      Za = a;
      $a = b;
      ab = c;
      bb = d;
      cb = e;
      db = f;
      eb = g;
      fb = h;
      gb = k;
      hb = l;
      jb = p;
    };
    l.addItem = function (a, b, c, d, e, f, g, h, k) {
      bc.push({
        orderId: a,
        sku: b,
        name: c,
        category: d,
        price: e,
        quantity: f,
        currency: g,
        context: h,
        tstamp: k,
      });
    };
    l.trackTrans = function () {
      L(function () {
        var a = jb;
        t.trackEcommerceTransaction(
          Za,
          $a,
          ab,
          bb,
          cb,
          db,
          eb,
          fb,
          gb,
          x(hb),
          a
        );
        for (a = 0; a < bc.length; a++) {
          var b = bc[a],
            c = b.tstamp;
          t.trackEcommerceTransactionItem(
            b.orderId,
            b.sku,
            b.name,
            b.category,
            b.price,
            b.quantity,
            b.currency,
            x(b.context),
            c
          );
        }
        jb = hb = gb = fb = eb = db = cb = bb = ab = $a = Za = void 0;
        bc = [];
      });
    };
    l.trackLinkClick = function (a, b, c, d, e, f, g) {
      L(function () {
        t.trackLinkClick(a, b, c, d, e, x(f), g);
      });
    };
    l.trackAdImpression = function (a, b, c, d, e, f, g, h, k, l) {
      L(function () {
        t.trackAdImpression(a, b, c, d, e, f, g, h, x(k), l);
      });
    };
    l.trackAdClick = function (a, b, c, d, e, f, g, h, k, l, p) {
      L(function () {
        t.trackAdClick(a, b, c, d, e, f, g, h, k, x(l), p);
      });
    };
    l.trackAdConversion = function (a, b, c, d, e, f, g, h, k, l, p) {
      L(function () {
        t.trackAdConversion(a, b, c, d, e, f, g, h, k, x(l), p);
      });
    };
    l.trackSocialInteraction = function (a, b, c, d, e) {
      L(function () {
        t.trackSocialInteraction(a, b, c, x(d), e);
      });
    };
    l.trackAddToCart = function (a, b, c, d, e, f, g, h) {
      L(function () {
        t.trackAddToCart(a, b, c, d, e, f, x(g), h);
      });
    };
    l.trackRemoveFromCart = function (a, b, c, d, e, f, g, h) {
      L(function () {
        t.trackRemoveFromCart(a, b, c, d, e, f, x(g), h);
      });
    };
    l.trackSiteSearch = function (a, b, c, d, e, f) {
      L(function () {
        t.trackSiteSearch(a, b, c, d, x(e), f);
      });
    };
    l.trackTiming = function (a, b, c, d, e, f) {
      L(function () {
        t.trackSelfDescribingEvent(
          {
            schema:
              "iglu:com.snowplowanalytics.snowplow/timing/jsonschema/1-0-0",
            data: { category: a, variable: b, timing: c, label: d },
          },
          x(e),
          f
        );
      });
    };
    l.trackConsentWithdrawn = function (a, b, c, d, e, f, g) {
      L(function () {
        t.trackConsentWithdrawn(a, b, c, d, e, x(f), g);
      });
    };
    l.trackConsentGranted = function (a, b, c, d, e, f, g) {
      L(function () {
        t.trackConsentGranted(a, b, c, d, e, x(f), g);
      });
    };
    l.trackEnhancedEcommerceAction = function (a, b, c) {
      var d = Db.concat(b || []);
      Db.length = 0;
      L(function () {
        t.trackSelfDescribingEvent(
          {
            schema:
              "iglu:com.google.analytics.enhanced-ecommerce/action/jsonschema/1-0-0",
            data: { action: a },
          },
          x(d),
          c
        );
      });
    };
    l.addEnhancedEcommerceActionContext = function (
      a,
      b,
      c,
      d,
      e,
      f,
      g,
      h,
      k,
      l
    ) {
      Db.push({
        schema:
          "iglu:com.google.analytics.enhanced-ecommerce/actionFieldObject/jsonschema/1-0-0",
        data: {
          id: a,
          affiliation: b,
          revenue: Kb(c),
          tax: Kb(d),
          shipping: Kb(e),
          coupon: f,
          list: g,
          step: pb(h),
          option: k,
          currency: l,
        },
      });
    };
    l.addEnhancedEcommerceImpressionContext = function (
      a,
      b,
      c,
      d,
      e,
      f,
      g,
      h,
      k
    ) {
      Db.push({
        schema:
          "iglu:com.google.analytics.enhanced-ecommerce/impressionFieldObject/jsonschema/1-0-0",
        data: {
          id: a,
          name: b,
          list: c,
          brand: d,
          category: e,
          variant: f,
          position: pb(g),
          price: Kb(h),
          currency: k,
        },
      });
    };
    l.addEnhancedEcommerceProductContext = function (
      a,
      b,
      c,
      d,
      e,
      f,
      g,
      h,
      k,
      l,
      p
    ) {
      Db.push({
        schema:
          "iglu:com.google.analytics.enhanced-ecommerce/productFieldObject/jsonschema/1-0-0",
        data: {
          id: a,
          name: b,
          list: c,
          brand: d,
          category: e,
          variant: f,
          price: Kb(g),
          quantity: pb(h),
          coupon: k,
          position: pb(l),
          currency: p,
        },
      });
    };
    l.addEnhancedEcommercePromoContext = function (a, b, c, d, e) {
      Db.push({
        schema:
          "iglu:com.google.analytics.enhanced-ecommerce/promoFieldObject/jsonschema/1-0-0",
        data: { id: a, name: b, creative: c, position: d, currency: e },
      });
    };
    l.enableGdprContext = function (a) {
      var b =
          1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
        c =
          2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
        d =
          3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
        e = mb[a];
      e
        ? ((I.gdprBasis = !0),
          (Ua = { gdprBasis: e, gdprDocId: b, gdprDocVer: c, gdprDocDesc: d }))
        : y(
            "enableGdprContext failed. basisForProcessing must be set to one of: consent, legalObligation, vitalInterests publicTask, legitimateInterests"
          );
    };
    l.addGlobalContexts = function (a) {
      t.addGlobalContexts(a);
    };
    l.removeGlobalContexts = function (a) {
      t.removeGlobalContexts(a);
    };
    l.clearGlobalContexts = function () {
      t.clearGlobalContexts();
    };
    l.enableErrorTracking = function (a, b) {
      Eb.enableErrorTracking(a, b, x());
    };
    l.trackError = function (a, b, c, d, e, f) {
      f = x(f);
      Eb.trackError(a, b, c, d, e, f);
    };
    l.preservePageViewId = function () {
      Gb = !0;
    };
    l.disableAnonymousTracking = function (a) {
      d.anonymousTracking = !1;
      P(a);
      W();
      Sa.executeQueue();
    };
    l.enableAnonymousTracking = function (a, b) {
      d.anonymousTracking = a || !0;
      P(b);
      zb || Z();
    };
    l.clearUserData = Q;
    l.setDebug = function (a) {
      Ka = (Ga = (!!a).valueOf()) ? l : sa;
    };
    sa = Fd(l);
    return (Ka = Ga ? l : sa);
  }
  function Ic(a, b) {
    function c() {
      var a;
      if (!h.hasLoaded)
        for (
          h.hasLoaded = !0, a = 0;
          a < h.registeredOnLoadHandlers.length;
          a++
        )
          h.registeredOnLoadHandlers[a]();
      return !0;
    }
    function e() {
      var a;
      d.addEventListener
        ? q(d, "DOMContentLoaded", function p() {
            d.removeEventListener("DOMContentLoaded", p, !1);
            c();
          })
        : d.attachEvent &&
          (d.attachEvent("onreadystatechange", function p() {
            "complete" === d.readyState &&
              (d.detachEvent("onreadystatechange", p), c());
          }),
          d.documentElement.doScroll &&
            f === f.top &&
            (function v() {
              if (!h.hasLoaded) {
                try {
                  d.documentElement.doScroll("left");
                } catch (J) {
                  setTimeout(v, 0);
                  return;
                }
                c();
              }
            })());
      /WebKit/.test(navigator.userAgent) &&
        (a = setInterval(function () {
          if (h.hasLoaded || /loaded|complete/.test(d.readyState))
            clearInterval(a), c();
        }, 10));
      q(f, "load", c, !1);
    }
    var d = document,
      f = window,
      h = {
        outQueues: [],
        bufferFlushers: [],
        expireDateTime: null,
        hasLoaded: !1,
        registeredOnLoadHandlers: [],
        pageViewId: null,
      };
    f.Snowplow = {
      getTrackerCf: function (a) {
        var c = new wb(b, "", "js-2.18.0", h, {});
        c.setCollectorCf(a);
        return c;
      },
      getTrackerUrl: function (a) {
        var c = new wb(b, "", "js-2.18.0", h, {});
        c.setCollectorUrl(a);
        return c;
      },
      getAsyncTracker: function () {
        return new wb(b, "", "js-2.18.0", h, {});
      },
    };
    q(
      f,
      "beforeunload",
      function () {
        O(h.bufferFlushers, function (a) {
          a();
        });
        if (h.expireDateTime) {
          do {
            var a = new Date();
            if (
              0 ===
              Array.prototype.filter.call(h.outQueues, function (a) {
                return 0 < a.length;
              }).length
            )
              break;
          } while (a.getTime() < h.expireDateTime);
        }
      },
      !1
    );
    "loading" === document.readyState ? e() : c();
    return new td(wb, "js-2.18.0", h, a, b);
  }
  var Zd = function (a, b) {
      for (
        var c = -1, e = null == a ? 0 : a.length;
        ++c < e && !1 !== b(a[c], c, a);

      );
      return a;
    },
    $d = (function (a) {
      return function (b, c, e) {
        var d = -1,
          f = Object(b);
        e = e(b);
        for (var h = e.length; h--; ) {
          var g = e[a ? h : ++d];
          if (!1 === c(f[g], g, f)) break;
        }
        return b;
      };
    })(),
    Va =
      "undefined" !== typeof globalThis
        ? globalThis
        : "undefined" !== typeof window
        ? window
        : "undefined" !== typeof global
        ? global
        : "undefined" !== typeof self
        ? self
        : {},
    Jc = "object" == D(Va) && Va && Va.Object === Object && Va,
    ae =
      "object" == ("undefined" === typeof self ? "undefined" : D(self)) &&
      self &&
      self.Object === Object &&
      self,
    P = Jc || ae || Function("return this")(),
    Y = P.Symbol,
    Kc = Object.prototype,
    be = Kc.hasOwnProperty,
    ce = Kc.toString,
    Wa = Y ? Y.toStringTag : void 0,
    de = Object.prototype.toString,
    Lc = Y ? Y.toStringTag : void 0,
    S = function (a) {
      if (null == a) a = void 0 === a ? "[object Undefined]" : "[object Null]";
      else if (Lc && Lc in Object(a)) {
        var b = be.call(a, Wa),
          c = a[Wa];
        try {
          a[Wa] = void 0;
          var e = !0;
        } catch (f) {}
        var d = ce.call(a);
        e && (b ? (a[Wa] = c) : delete a[Wa]);
        a = d;
      } else a = de.call(a);
      return a;
    },
    Q = function (a) {
      return null != a && "object" == D(a);
    },
    Mc = function (a) {
      return Q(a) && "[object Arguments]" == S(a);
    },
    Nc = Object.prototype,
    ee = Nc.hasOwnProperty,
    fe = Nc.propertyIsEnumerable,
    Oc = Mc(
      (function () {
        return arguments;
      })()
    )
      ? Mc
      : function (a) {
          return Q(a) && ee.call(a, "callee") && !fe.call(a, "callee");
        },
    u = Array.isArray,
    ge = function () {
      return !1;
    },
    nb = oa(function (a, b) {
      var c = (b = b && !b.nodeType && b) && a && !a.nodeType && a;
      b = c && c.exports === b ? P.Buffer : void 0;
      a.exports = (b ? b.isBuffer : void 0) || ge;
    }),
    he = /^(?:0|[1-9]\d*)$/,
    Xa = function (a, b) {
      var c = D(a);
      b = null == b ? 9007199254740991 : b;
      return (
        !!b &&
        ("number" == c || ("symbol" != c && he.test(a))) &&
        -1 < a &&
        0 == a % 1 &&
        a < b
      );
    },
    Sb = function (a) {
      return (
        "number" == typeof a && -1 < a && 0 == a % 1 && 9007199254740991 >= a
      );
    },
    n = {};
  n["[object Float32Array]"] = n["[object Float64Array]"] = n[
    "[object Int8Array]"
  ] = n["[object Int16Array]"] = n["[object Int32Array]"] = n[
    "[object Uint8Array]"
  ] = n["[object Uint8ClampedArray]"] = n["[object Uint16Array]"] = n[
    "[object Uint32Array]"
  ] = !0;
  n["[object Arguments]"] = n["[object Array]"] = n["[object ArrayBuffer]"] = n[
    "[object Boolean]"
  ] = n["[object DataView]"] = n["[object Date]"] = n["[object Error]"] = n[
    "[object Function]"
  ] = n["[object Map]"] = n["[object Number]"] = n["[object Object]"] = n[
    "[object RegExp]"
  ] = n["[object Set]"] = n["[object String]"] = n["[object WeakMap]"] = !1;
  var ie = function (a) {
      return Q(a) && Sb(a.length) && !!n[S(a)];
    },
    je = function (a) {
      return function (b) {
        return a(b);
      };
    },
    Pc = oa(function (a, b) {
      var c = b && !b.nodeType && b;
      c = (b = c && a && !a.nodeType && a) && b.exports === c && Jc.process;
      a: {
        try {
          var e = b && b.require && b.require("util").types;
          if (e) {
            var d = e;
            break a;
          }
          d = c && c.binding && c.binding("util");
          break a;
        } catch (f) {}
        d = void 0;
      }
      a.exports = d;
    }),
    Qc = Pc && Pc.isTypedArray,
    gc = Qc ? je(Qc) : ie,
    ke = Object.prototype.hasOwnProperty,
    le = Object.prototype,
    Rc = function (a, b) {
      return function (c) {
        return a(b(c));
      };
    },
    me = Rc(Object.keys, Object),
    ne = Object.prototype.hasOwnProperty,
    K = function (a) {
      var b = D(a);
      return null != a && ("object" == b || "function" == b);
    },
    Sc = function (a) {
      if (!K(a)) return !1;
      a = S(a);
      return (
        "[object Function]" == a ||
        "[object GeneratorFunction]" == a ||
        "[object AsyncFunction]" == a ||
        "[object Proxy]" == a
      );
    },
    ha = function (a) {
      return null != a && Sb(a.length) && !Sc(a);
    },
    Ia = function (a) {
      if (ha(a)) {
        var b = u(a),
          c = !b && Oc(a),
          e = !b && !c && nb(a),
          d = !b && !c && !e && gc(a);
        if ((b = b || c || e || d)) {
          c = a.length;
          for (var f = String, h = -1, g = Array(c); ++h < c; ) g[h] = f(h);
          c = g;
        } else c = [];
        f = c.length;
        for (var k in a)
          !ke.call(a, k) ||
            (b &&
              ("length" == k ||
                (e && ("offset" == k || "parent" == k)) ||
                (d &&
                  ("buffer" == k || "byteLength" == k || "byteOffset" == k)) ||
                Xa(k, f))) ||
            c.push(k);
        a = c;
      } else if (
        ((k = a && a.constructor),
        a === (("function" == typeof k && k.prototype) || le))
      ) {
        k = [];
        for (e in Object(a)) ne.call(a, e) && "constructor" != e && k.push(e);
        a = k;
      } else a = me(a);
      return a;
    },
    Tc = function (a, b) {
      return a && $d(a, b, Ia);
    },
    Ya = (function (a, b) {
      return function (c, e) {
        if (null == c) return c;
        if (!ha(c)) return a(c, e);
        for (
          var d = c.length, f = b ? d : -1, h = Object(c);
          (b ? f-- : ++f < d) && !1 !== e(h[f], f, h);

        );
        return c;
      };
    })(Tc),
    Uc = function (a) {
      return a;
    },
    O = function (a, b) {
      return (u(a) ? Zd : Ya)(a, "function" == typeof b ? b : Uc);
    },
    Vc = function (a, b) {
      for (var c = -1, e = null == a ? 0 : a.length, d = 0, f = []; ++c < e; ) {
        var h = a[c];
        b(h, c, a) && (f[d++] = h);
      }
      return f;
    },
    oe = function (a, b) {
      var c = [];
      Ya(a, function (a, d, f) {
        b(a, d, f) && c.push(a);
      });
      return c;
    },
    Za = function (a, b) {
      return a === b || (a !== a && b !== b);
    },
    Ba = function (a, b) {
      for (var c = a.length; c--; ) if (Za(a[c][0], b)) return c;
      return -1;
    },
    pe = Array.prototype.splice;
  pa.prototype.clear = function () {
    this.__data__ = [];
    this.size = 0;
  };
  pa.prototype["delete"] = function (a) {
    var b = this.__data__;
    a = Ba(b, a);
    if (0 > a) return !1;
    a == b.length - 1 ? b.pop() : pe.call(b, a, 1);
    --this.size;
    return !0;
  };
  pa.prototype.get = function (a) {
    var b = this.__data__;
    a = Ba(b, a);
    return 0 > a ? void 0 : b[a][1];
  };
  pa.prototype.has = function (a) {
    return -1 < Ba(this.__data__, a);
  };
  pa.prototype.set = function (a, b) {
    var c = this.__data__,
      e = Ba(c, a);
    0 > e ? (++this.size, c.push([a, b])) : (c[e][1] = b);
    return this;
  };
  var Fa = pa,
    $a = P["__core-js_shared__"],
    Wc = (function () {
      var a = /[^.]+$/.exec(($a && $a.keys && $a.keys.IE_PROTO) || "");
      return a ? "Symbol(src)_1." + a : "";
    })(),
    qe = Function.prototype.toString,
    ca = function (a) {
      if (null != a) {
        try {
          return qe.call(a);
        } catch (b) {}
        return a + "";
      }
      return "";
    },
    re = /^\[object .+?Constructor\]$/,
    se = RegExp(
      "^" +
        Function.prototype.toString
          .call(Object.prototype.hasOwnProperty)
          .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    ),
    ia = function (a, b) {
      a = null == a ? void 0 : a[b];
      return (!K(a) || (Wc && Wc in a) ? 0 : (Sc(a) ? se : re).test(ca(a)))
        ? a
        : void 0;
    },
    Ca = ia(P, "Map"),
    Da = ia(Object, "create"),
    te = Object.prototype.hasOwnProperty,
    ue = Object.prototype.hasOwnProperty;
  V.prototype.clear = function () {
    this.__data__ = Da ? Da(null) : {};
    this.size = 0;
  };
  V.prototype["delete"] = function (a) {
    a = this.has(a) && delete this.__data__[a];
    this.size -= a ? 1 : 0;
    return a;
  };
  V.prototype.get = function (a) {
    var b = this.__data__;
    return Da
      ? ((a = b[a]), "__lodash_hash_undefined__" === a ? void 0 : a)
      : te.call(b, a)
      ? b[a]
      : void 0;
  };
  V.prototype.has = function (a) {
    var b = this.__data__;
    return Da ? void 0 !== b[a] : ue.call(b, a);
  };
  V.prototype.set = function (a, b) {
    var c = this.__data__;
    this.size += this.has(a) ? 0 : 1;
    c[a] = Da && void 0 === b ? "__lodash_hash_undefined__" : b;
    return this;
  };
  var ja = function (a, b) {
    a = a.__data__;
    var c = D(b);
    return (
      "string" == c || "number" == c || "symbol" == c || "boolean" == c
        ? "__proto__" !== b
        : null === b
    )
      ? a["string" == typeof b ? "string" : "hash"]
      : a.map;
  };
  qa.prototype.clear = function () {
    this.size = 0;
    this.__data__ = { hash: new V(), map: new (Ca || Fa)(), string: new V() };
  };
  qa.prototype["delete"] = function (a) {
    a = ja(this, a)["delete"](a);
    this.size -= a ? 1 : 0;
    return a;
  };
  qa.prototype.get = function (a) {
    return ja(this, a).get(a);
  };
  qa.prototype.has = function (a) {
    return ja(this, a).has(a);
  };
  qa.prototype.set = function (a, b) {
    var c = ja(this, a),
      e = c.size;
    c.set(a, b);
    this.size += c.size == e ? 0 : 1;
    return this;
  };
  var Ga = qa;
  ra.prototype.clear = function () {
    this.__data__ = new Fa();
    this.size = 0;
  };
  ra.prototype["delete"] = function (a) {
    var b = this.__data__;
    a = b["delete"](a);
    this.size = b.size;
    return a;
  };
  ra.prototype.get = function (a) {
    return this.__data__.get(a);
  };
  ra.prototype.has = function (a) {
    return this.__data__.has(a);
  };
  ra.prototype.set = function (a, b) {
    var c = this.__data__;
    if (c instanceof Fa) {
      var e = c.__data__;
      if (!Ca || 199 > e.length)
        return e.push([a, b]), (this.size = ++c.size), this;
      c = this.__data__ = new Ga(e);
    }
    c.set(a, b);
    this.size = c.size;
    return this;
  };
  var sa = ra;
  mb.prototype.add = mb.prototype.push = function (a) {
    this.__data__.set(a, "__lodash_hash_undefined__");
    return this;
  };
  mb.prototype.has = function (a) {
    return this.__data__.has(a);
  };
  var ve = function (a, b) {
      for (var c = -1, e = null == a ? 0 : a.length; ++c < e; )
        if (b(a[c], c, a)) return !0;
      return !1;
    },
    hc = function (a, b, c, e, d, f) {
      var h = c & 1,
        g = a.length,
        k = b.length;
      if (g != k && !(h && k > g)) return !1;
      k = f.get(a);
      var p = f.get(b);
      if (k && p) return k == b && p == a;
      k = -1;
      p = !0;
      var n = c & 2 ? new mb() : void 0;
      f.set(a, b);
      for (f.set(b, a); ++k < g; ) {
        var q = a[k],
          m = b[k];
        if (e) var r = h ? e(m, q, k, b, a, f) : e(q, m, k, a, b, f);
        if (void 0 !== r) {
          if (r) continue;
          p = !1;
          break;
        }
        if (n) {
          if (
            !ve(b, function (a, b) {
              if (!n.has(b) && (q === a || d(q, a, c, e, f))) return n.push(b);
            })
          ) {
            p = !1;
            break;
          }
        } else if (q !== m && !d(q, m, c, e, f)) {
          p = !1;
          break;
        }
      }
      f["delete"](a);
      f["delete"](b);
      return p;
    },
    Xc = P.Uint8Array,
    we = function (a) {
      var b = -1,
        c = Array(a.size);
      a.forEach(function (a, d) {
        c[++b] = [d, a];
      });
      return c;
    },
    xe = function (a) {
      var b = -1,
        c = Array(a.size);
      a.forEach(function (a) {
        c[++b] = a;
      });
      return c;
    },
    Yc = Y ? Y.prototype : void 0,
    ab = Yc ? Yc.valueOf : void 0,
    nd = function (a, b, c, e, d, f, h) {
      switch (c) {
        case "[object DataView]":
          if (a.byteLength != b.byteLength || a.byteOffset != b.byteOffset)
            break;
          a = a.buffer;
          b = b.buffer;
        case "[object ArrayBuffer]":
          if (a.byteLength != b.byteLength || !f(new Xc(a), new Xc(b))) break;
          return !0;
        case "[object Boolean]":
        case "[object Date]":
        case "[object Number]":
          return Za(+a, +b);
        case "[object Error]":
          return a.name == b.name && a.message == b.message;
        case "[object RegExp]":
        case "[object String]":
          return a == b + "";
        case "[object Map]":
          var g = we;
        case "[object Set]":
          g || (g = xe);
          if (a.size != b.size && !(e & 1)) break;
          if ((c = h.get(a))) return c == b;
          e |= 2;
          h.set(a, b);
          b = hc(g(a), g(b), e, d, f, h);
          h["delete"](a);
          return b;
        case "[object Symbol]":
          if (ab) return ab.call(a) == ab.call(b);
      }
      return !1;
    },
    jc = function (a, b, c) {
      b = b(a);
      if (!u(a)) {
        a = c(a);
        c = -1;
        for (var e = a.length, d = b.length; ++c < e; ) b[d + c] = a[c];
      }
      return b;
    },
    ye = function () {
      return [];
    },
    ze = Object.prototype.propertyIsEnumerable,
    Zc = Object.getOwnPropertySymbols,
    kc = Zc
      ? function (a) {
          if (null == a) return [];
          a = Object(a);
          return Vc(Zc(a), function (b) {
            return ze.call(a, b);
          });
        }
      : ye,
    od = Object.prototype.hasOwnProperty,
    bb = ia(P, "DataView"),
    cb = ia(P, "Promise"),
    db = ia(P, "Set"),
    eb = ia(P, "WeakMap"),
    Ae = ca(bb),
    Be = ca(Ca),
    Ce = ca(cb),
    De = ca(db),
    Ee = ca(eb),
    ka = S;
  if (
    (bb && "[object DataView]" != ka(new bb(new ArrayBuffer(1)))) ||
    (Ca && "[object Map]" != ka(new Ca())) ||
    (cb && "[object Promise]" != ka(cb.resolve())) ||
    (db && "[object Set]" != ka(new db())) ||
    (eb && "[object WeakMap]" != ka(new eb()))
  )
    ka = function (a) {
      var b = S(a);
      if (
        (a = (a = "[object Object]" == b ? a.constructor : void 0) ? ca(a) : "")
      )
        switch (a) {
          case Ae:
            return "[object DataView]";
          case Be:
            return "[object Map]";
          case Ce:
            return "[object Promise]";
          case De:
            return "[object Set]";
          case Ee:
            return "[object WeakMap]";
        }
      return b;
    };
  var Tb = ka,
    ic = Object.prototype.hasOwnProperty,
    rb = Ha,
    Fe = function (a, b, c, e) {
      var d = c.length,
        f = d,
        h = !e;
      if (null == a) return !f;
      for (a = Object(a); d--; ) {
        var g = c[d];
        if (h && g[2] ? g[1] !== a[g[0]] : !(g[0] in a)) return !1;
      }
      for (; ++d < f; ) {
        g = c[d];
        var k = g[0],
          p = a[k],
          n = g[1];
        if (h && g[2]) {
          if (void 0 === p && !(k in a)) return !1;
        } else {
          g = new sa();
          if (e) var q = e(p, n, k, a, b, g);
          if (void 0 === q ? !rb(n, p, 3, e, g) : !q) return !1;
        }
      }
      return !0;
    },
    Ge = function (a) {
      for (var b = Ia(a), c = b.length; c--; ) {
        var e = b[c],
          d = a[e];
        b[c] = [e, d, d === d && !K(d)];
      }
      return b;
    },
    $c = function (a, b) {
      return function (c) {
        return null == c ? !1 : c[a] === b && (void 0 !== b || a in Object(c));
      };
    },
    He = function (a) {
      var b = Ge(a);
      return 1 == b.length && b[0][2]
        ? $c(b[0][0], b[0][1])
        : function (c) {
            return c === a || Fe(c, a, b);
          };
    },
    Ka = function (a) {
      return "symbol" == D(a) || (Q(a) && "[object Symbol]" == S(a));
    },
    Ie = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    Je = /^\w*$/,
    fb = function (a, b) {
      if (u(a)) return !1;
      var c = D(a);
      return "number" == c ||
        "symbol" == c ||
        "boolean" == c ||
        null == a ||
        Ka(a)
        ? !0
        : Je.test(a) || !Ie.test(a) || (null != b && a in Object(b));
    };
  Ja.Cache = Ga;
  var Ke = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    Le = /\\(\\)?/g,
    Me = (function (a) {
      a = Ja(a, function (a) {
        500 === b.size && b.clear();
        return a;
      });
      var b = a.cache;
      return a;
    })(function (a) {
      var b = [];
      46 === a.charCodeAt(0) && b.push("");
      a.replace(Ke, function (a, e, d, f) {
        b.push(d ? f.replace(Le, "$1") : e || a);
      });
      return b;
    }),
    mc = function (a, b) {
      for (var c = -1, e = null == a ? 0 : a.length, d = Array(e); ++c < e; )
        d[c] = b(a[c], c, a);
      return d;
    },
    pd = 1 / 0,
    ad = Y ? Y.prototype : void 0,
    nc = ad ? ad.toString : void 0,
    bd = function (a, b) {
      return u(a) ? a : fb(a, b) ? [a] : Me(null == a ? "" : lc(a));
    },
    Ne = 1 / 0,
    la = function (a) {
      if ("string" == typeof a || Ka(a)) return a;
      var b = a + "";
      return "0" == b && 1 / a == -Ne ? "-0" : b;
    },
    cd = function (a, b) {
      b = bd(b, a);
      for (var c = 0, e = b.length; null != a && c < e; ) a = a[la(b[c++])];
      return c && c == e ? a : void 0;
    },
    F = function (a, b, c) {
      a = null == a ? void 0 : cd(a, b);
      return void 0 === a ? c : a;
    },
    Oe = function (a, b) {
      return null != a && b in Object(a);
    },
    sb = function (a, b, c) {
      b = bd(b, a);
      for (var e = -1, d = b.length, f = !1; ++e < d; ) {
        var h = la(b[e]);
        if (!(f = null != a && c(a, h))) break;
        a = a[h];
      }
      if (f || ++e != d) return f;
      d = null == a ? 0 : a.length;
      return !!d && Sb(d) && Xa(h, d) && (u(a) || Oc(a));
    },
    Pe = function (a, b) {
      return fb(a) && b === b && !K(b)
        ? $c(la(a), b)
        : function (c) {
            var e = F(c, a);
            return void 0 === e && e === b
              ? null != c && sb(c, a, Oe)
              : rb(b, e, 3);
          };
    },
    Qe = function (a) {
      return function (b) {
        return null == b ? void 0 : b[a];
      };
    },
    Re = function (a) {
      return function (b) {
        return cd(b, a);
      };
    },
    ma = function (a) {
      return "function" == typeof a
        ? a
        : null == a
        ? Uc
        : "object" == D(a)
        ? u(a)
          ? Pe(a[0], a[1])
          : He(a)
        : fb(a)
        ? Qe(la(a))
        : Re(a);
    },
    qd = function (a, b) {
      return (u(a) ? Vc : oe)(a, ma(b));
    },
    pc = function (a) {
      return (
        "string" == typeof a || (!u(a) && Q(a) && "[object String]" == S(a))
      );
    },
    Se = function (a, b) {
      var c = -1,
        e = ha(a) ? Array(a.length) : [];
      Ya(a, function (a, f, h) {
        e[++c] = b(a, f, h);
      });
      return e;
    },
    ea = function (a, b) {
      return (u(a) ? mc : Se)(a, ma(b));
    },
    da = window,
    La = document,
    ta = window.localStorage,
    vc = window.sessionStorage,
    dd = 0 / 0,
    Te = /^\s+|\s+$/g,
    Ue = /^[-+]0x[0-9a-f]+$/i,
    Ve = /^0b[01]+$/i,
    We = /^0o[0-7]+$/i,
    Xe = parseInt,
    Ye = function (a) {
      if ("number" == typeof a) return a;
      if (Ka(a)) return dd;
      K(a) &&
        ((a = "function" == typeof a.valueOf ? a.valueOf() : a),
        (a = K(a) ? a + "" : a));
      if ("string" != typeof a) return 0 === a ? a : +a;
      a = a.replace(Te, "");
      var b = Ve.test(a);
      return b || We.test(a) ? Xe(a.slice(2), b ? 2 : 8) : Ue.test(a) ? dd : +a;
    },
    ed = 1 / 0,
    fc = function (a) {
      a
        ? ((a = Ye(a)),
          (a =
            a === ed || a === -ed
              ? 1.7976931348623157e308 * (0 > a ? -1 : 1)
              : a === a
              ? a
              : 0))
        : (a = 0 === a ? a : 0);
      var b = a % 1;
      return a === a ? (b ? a - b : a) : 0;
    },
    Yd = oa(function (a, b) {
      (function (a) {
        var c = (function () {
          var a = function (a) {
              a = -a.getTimezoneOffset();
              return null !== a ? a : 0;
            },
            b = function (a, b, c) {
              var d = new Date();
              void 0 !== a && d.setFullYear(a);
              d.setMonth(b);
              d.setDate(c);
              return d;
            };
          return {
            determine: function () {
              var d = a(b(void 0, 0, 2)),
                e = a(b(void 0, 5, 2)),
                f = d - e;
              return new c.TimeZone(
                c.olson.timezones[
                  0 > f ? d + ",1" : 0 < f ? e + ",1,s" : d + ",0"
                ]
              );
            },
            date_is_dst: function (c) {
              var d = 7 < c.getMonth(),
                e = d
                  ? a(b(c.getFullYear(), 5, 2))
                  : a(b(c.getFullYear(), 0, 2));
              c = a(c);
              c = e - c;
              return 0 > e || d ? 0 !== c : 0 > c;
            },
            dst_start_for: function (a) {
              var b = new Date(2010, 6, 15, 1, 0, 0, 0);
              return {
                "America/Denver": new Date(2011, 2, 13, 3, 0, 0, 0),
                "America/Mazatlan": new Date(2011, 3, 3, 3, 0, 0, 0),
                "America/Chicago": new Date(2011, 2, 13, 3, 0, 0, 0),
                "America/Mexico_City": new Date(2011, 3, 3, 3, 0, 0, 0),
                "America/Asuncion": new Date(2012, 9, 7, 3, 0, 0, 0),
                "America/Santiago": new Date(2012, 9, 3, 3, 0, 0, 0),
                "America/Campo_Grande": new Date(2012, 9, 21, 5, 0, 0, 0),
                "America/Montevideo": new Date(2011, 9, 2, 3, 0, 0, 0),
                "America/Sao_Paulo": new Date(2011, 9, 16, 5, 0, 0, 0),
                "America/Los_Angeles": new Date(2011, 2, 13, 8, 0, 0, 0),
                "America/Santa_Isabel": new Date(2011, 3, 5, 8, 0, 0, 0),
                "America/Havana": new Date(2012, 2, 10, 2, 0, 0, 0),
                "America/New_York": new Date(2012, 2, 10, 7, 0, 0, 0),
                "Europe/Helsinki": new Date(2013, 2, 31, 5, 0, 0, 0),
                "Pacific/Auckland": new Date(2011, 8, 26, 7, 0, 0, 0),
                "America/Halifax": new Date(2011, 2, 13, 6, 0, 0, 0),
                "America/Goose_Bay": new Date(2011, 2, 13, 2, 1, 0, 0),
                "America/Miquelon": new Date(2011, 2, 13, 5, 0, 0, 0),
                "America/Godthab": new Date(2011, 2, 27, 1, 0, 0, 0),
                "Europe/Moscow": b,
                "Asia/Amman": new Date(2013, 2, 29, 1, 0, 0, 0),
                "Asia/Beirut": new Date(2013, 2, 31, 2, 0, 0, 0),
                "Asia/Damascus": new Date(2013, 3, 6, 2, 0, 0, 0),
                "Asia/Jerusalem": new Date(2013, 2, 29, 5, 0, 0, 0),
                "Asia/Yekaterinburg": b,
                "Asia/Omsk": b,
                "Asia/Krasnoyarsk": b,
                "Asia/Irkutsk": b,
                "Asia/Yakutsk": b,
                "Asia/Vladivostok": b,
                "Asia/Baku": new Date(2013, 2, 31, 4, 0, 0),
                "Asia/Yerevan": new Date(2013, 2, 31, 3, 0, 0),
                "Asia/Kamchatka": b,
                "Asia/Gaza": new Date(2010, 2, 27, 4, 0, 0),
                "Africa/Cairo": new Date(2010, 4, 1, 3, 0, 0),
                "Europe/Minsk": b,
                "Pacific/Apia": new Date(2010, 10, 1, 1, 0, 0, 0),
                "Pacific/Fiji": new Date(2010, 11, 1, 0, 0, 0),
                "Australia/Perth": new Date(2008, 10, 1, 1, 0, 0, 0),
              }[a];
            },
          };
        })();
        c.TimeZone = function (a) {
          var b = {
              "America/Denver": ["America/Denver", "America/Mazatlan"],
              "America/Chicago": ["America/Chicago", "America/Mexico_City"],
              "America/Santiago": [
                "America/Santiago",
                "America/Asuncion",
                "America/Campo_Grande",
              ],
              "America/Montevideo": ["America/Montevideo", "America/Sao_Paulo"],
              "Asia/Beirut": [
                "Asia/Amman",
                "Asia/Jerusalem",
                "Asia/Beirut",
                "Europe/Helsinki",
                "Asia/Damascus",
              ],
              "Pacific/Auckland": ["Pacific/Auckland", "Pacific/Fiji"],
              "America/Los_Angeles": [
                "America/Los_Angeles",
                "America/Santa_Isabel",
              ],
              "America/New_York": ["America/Havana", "America/New_York"],
              "America/Halifax": ["America/Goose_Bay", "America/Halifax"],
              "America/Godthab": ["America/Miquelon", "America/Godthab"],
              "Asia/Dubai": ["Europe/Moscow"],
              "Asia/Dhaka": ["Asia/Yekaterinburg"],
              "Asia/Jakarta": ["Asia/Omsk"],
              "Asia/Shanghai": ["Asia/Krasnoyarsk", "Australia/Perth"],
              "Asia/Tokyo": ["Asia/Irkutsk"],
              "Australia/Brisbane": ["Asia/Yakutsk"],
              "Pacific/Noumea": ["Asia/Vladivostok"],
              "Pacific/Tarawa": ["Asia/Kamchatka", "Pacific/Fiji"],
              "Pacific/Tongatapu": ["Pacific/Apia"],
              "Asia/Baghdad": ["Europe/Minsk"],
              "Asia/Baku": ["Asia/Yerevan", "Asia/Baku"],
              "Africa/Johannesburg": ["Asia/Gaza", "Africa/Cairo"],
            },
            d = a;
          a = function () {
            for (var a = b[d], e = a.length, f = 0, h; f < e; f += 1)
              if (((h = a[f]), c.date_is_dst(c.dst_start_for(h)))) {
                d = h;
                break;
              }
          };
          "undefined" !== typeof b[d] && a();
          return {
            name: function () {
              return d;
            },
          };
        };
        c.olson = {};
        c.olson.timezones = {
          "-720,0": "Pacific/Majuro",
          "-660,0": "Pacific/Pago_Pago",
          "-600,1": "America/Adak",
          "-600,0": "Pacific/Honolulu",
          "-570,0": "Pacific/Marquesas",
          "-540,0": "Pacific/Gambier",
          "-540,1": "America/Anchorage",
          "-480,1": "America/Los_Angeles",
          "-480,0": "Pacific/Pitcairn",
          "-420,0": "America/Phoenix",
          "-420,1": "America/Denver",
          "-360,0": "America/Guatemala",
          "-360,1": "America/Chicago",
          "-360,1,s": "Pacific/Easter",
          "-300,0": "America/Bogota",
          "-300,1": "America/New_York",
          "-270,0": "America/Caracas",
          "-240,1": "America/Halifax",
          "-240,0": "America/Santo_Domingo",
          "-240,1,s": "America/Santiago",
          "-210,1": "America/St_Johns",
          "-180,1": "America/Godthab",
          "-180,0": "America/Argentina/Buenos_Aires",
          "-180,1,s": "America/Montevideo",
          "-120,0": "America/Noronha",
          "-120,1": "America/Noronha",
          "-60,1": "Atlantic/Azores",
          "-60,0": "Atlantic/Cape_Verde",
          "0,0": "UTC",
          "0,1": "Europe/London",
          "60,1": "Europe/Berlin",
          "60,0": "Africa/Lagos",
          "60,1,s": "Africa/Windhoek",
          "120,1": "Asia/Beirut",
          "120,0": "Africa/Johannesburg",
          "180,0": "Asia/Baghdad",
          "180,1": "Europe/Moscow",
          "210,1": "Asia/Tehran",
          "240,0": "Asia/Dubai",
          "240,1": "Asia/Baku",
          "270,0": "Asia/Kabul",
          "300,1": "Asia/Yekaterinburg",
          "300,0": "Asia/Karachi",
          "330,0": "Asia/Kolkata",
          "345,0": "Asia/Kathmandu",
          "360,0": "Asia/Dhaka",
          "360,1": "Asia/Omsk",
          "390,0": "Asia/Rangoon",
          "420,1": "Asia/Krasnoyarsk",
          "420,0": "Asia/Jakarta",
          "480,0": "Asia/Shanghai",
          "480,1": "Asia/Irkutsk",
          "525,0": "Australia/Eucla",
          "525,1,s": "Australia/Eucla",
          "540,1": "Asia/Yakutsk",
          "540,0": "Asia/Tokyo",
          "570,0": "Australia/Darwin",
          "570,1,s": "Australia/Adelaide",
          "600,0": "Australia/Brisbane",
          "600,1": "Asia/Vladivostok",
          "600,1,s": "Australia/Sydney",
          "630,1,s": "Australia/Lord_Howe",
          "660,1": "Asia/Kamchatka",
          "660,0": "Pacific/Noumea",
          "690,0": "Pacific/Norfolk",
          "720,1,s": "Pacific/Auckland",
          "720,0": "Pacific/Tarawa",
          "765,1,s": "Pacific/Chatham",
          "780,0": "Pacific/Tongatapu",
          "780,1,s": "Pacific/Apia",
          "840,0": "Pacific/Kiritimati",
        };
        b.jstz = c;
      })();
    }),
    ua = window,
    W = navigator,
    Lb = screen,
    qb = document,
    gb = oa(function (a) {
      (function () {
        var b = {
          rotl: function (a, b) {
            return (a << b) | (a >>> (32 - b));
          },
          rotr: function (a, b) {
            return (a << (32 - b)) | (a >>> b);
          },
          endian: function (a) {
            if (a.constructor == Number)
              return (b.rotl(a, 8) & 16711935) | (b.rotl(a, 24) & 4278255360);
            for (var c = 0; c < a.length; c++) a[c] = b.endian(a[c]);
            return a;
          },
          randomBytes: function (a) {
            for (var b = []; 0 < a; a--)
              b.push(Math.floor(256 * Math.random()));
            return b;
          },
          bytesToWords: function (a) {
            for (var b = [], c = 0, f = 0; c < a.length; c++, f += 8)
              b[f >>> 5] |= a[c] << (24 - (f % 32));
            return b;
          },
          wordsToBytes: function (a) {
            for (var b = [], c = 0; c < 32 * a.length; c += 8)
              b.push((a[c >>> 5] >>> (24 - (c % 32))) & 255);
            return b;
          },
          bytesToHex: function (a) {
            for (var b = [], c = 0; c < a.length; c++)
              b.push((a[c] >>> 4).toString(16)),
                b.push((a[c] & 15).toString(16));
            return b.join("");
          },
          hexToBytes: function (a) {
            for (var b = [], c = 0; c < a.length; c += 2)
              b.push(parseInt(a.substr(c, 2), 16));
            return b;
          },
          bytesToBase64: function (a) {
            for (var b = [], c = 0; c < a.length; c += 3)
              for (
                var f = (a[c] << 16) | (a[c + 1] << 8) | a[c + 2], h = 0;
                4 > h;
                h++
              )
                8 * c + 6 * h <= 8 * a.length
                  ? b.push(
                      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(
                        (f >>> (6 * (3 - h))) & 63
                      )
                    )
                  : b.push("=");
            return b.join("");
          },
          base64ToBytes: function (a) {
            a = a.replace(/[^A-Z0-9+\/]/gi, "");
            for (var b = [], c = 0, f = 0; c < a.length; f = ++c % 4)
              0 != f &&
                b.push(
                  (("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(
                    a.charAt(c - 1)
                  ) &
                    (Math.pow(2, -2 * f + 8) - 1)) <<
                    (2 * f)) |
                    ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(
                      a.charAt(c)
                    ) >>>
                      (6 - 2 * f))
                );
            return b;
          },
        };
        a.exports = b;
      })();
    }),
    hb = {
      utf8: {
        stringToBytes: function (a) {
          return hb.bin.stringToBytes(unescape(encodeURIComponent(a)));
        },
        bytesToString: function (a) {
          return decodeURIComponent(escape(hb.bin.bytesToString(a)));
        },
      },
      bin: {
        stringToBytes: function (a) {
          for (var b = [], c = 0; c < a.length; c++)
            b.push(a.charCodeAt(c) & 255);
          return b;
        },
        bytesToString: function (a) {
          for (var b = [], c = 0; c < a.length; c++)
            b.push(String.fromCharCode(a[c]));
          return b.join("");
        },
      },
    },
    fd = hb,
    Xd = oa(function (a) {
      (function () {
        var b = fd.utf8,
          c = fd.bin,
          e = function (a) {
            a.constructor == String && (a = b.stringToBytes(a));
            var c = gb.bytesToWords(a),
              d = 8 * a.length;
            a = [];
            var e = 1732584193,
              f = -271733879,
              n = -1732584194,
              q = 271733878,
              m = -1009589776;
            c[d >> 5] |= 128 << (24 - (d % 32));
            c[(((d + 64) >>> 9) << 4) + 15] = d;
            for (d = 0; d < c.length; d += 16) {
              for (var r = e, u = f, C = n, B = q, D = m, w = 0; 80 > w; w++) {
                if (16 > w) a[w] = c[d + w];
                else {
                  var y = a[w - 3] ^ a[w - 8] ^ a[w - 14] ^ a[w - 16];
                  a[w] = (y << 1) | (y >>> 31);
                }
                y =
                  ((e << 5) | (e >>> 27)) +
                  m +
                  (a[w] >>> 0) +
                  (20 > w
                    ? ((f & n) | (~f & q)) + 1518500249
                    : 40 > w
                    ? (f ^ n ^ q) + 1859775393
                    : 60 > w
                    ? ((f & n) | (f & q) | (n & q)) - 1894007588
                    : (f ^ n ^ q) - 899497514);
                m = q;
                q = n;
                n = (f << 30) | (f >>> 2);
                f = e;
                e = y;
              }
              e += r;
              f += u;
              n += C;
              q += B;
              m += D;
            }
            return [e, f, n, q, m];
          },
          d = function (a, b) {
            a = gb.wordsToBytes(e(a));
            return b && b.asBytes
              ? a
              : b && b.asString
              ? c.bytesToString(a)
              : gb.bytesToHex(a);
          };
        d._blocksize = 16;
        d._digestsize = 20;
        a.exports = d;
      })();
    }),
    Ze = Math.max,
    Ad = (function (a) {
      return function (b, c, e) {
        var d = Object(b);
        if (!ha(b)) {
          var f = ma(c);
          b = Ia(b);
          c = function (a) {
            return f(d[a], a, d);
          };
        }
        c = a(b, c, e);
        return -1 < c ? d[f ? b[c] : c] : void 0;
      };
    })(function (a, b, c) {
      var e = null == a ? 0 : a.length;
      if (!e) return -1;
      c = null == c ? 0 : fc(c);
      0 > c && (c = Ze(e + c, 0));
      a: {
        b = ma(b);
        e = a.length;
        for (c += -1; ++c < e; )
          if (b(a[c], c, a)) {
            a = c;
            break a;
          }
        a = -1;
      }
      return a;
    }),
    Cd = window,
    gd = (function () {
      try {
        var a = ia(Object, "defineProperty");
        a({}, "", {});
        return a;
      } catch (b) {}
    })(),
    Ed = function (a, b) {
      var c = {};
      b = ma(b);
      Tc(a, function (a, d, f) {
        a = b(a, d, f);
        "__proto__" == d && gd
          ? gd(c, d, {
              configurable: !0,
              enumerable: !0,
              value: a,
              writable: !0,
            })
          : (c[d] = a);
      });
      return c;
    },
    Gd = function (a) {
      return function () {
        try {
          return a.apply(this, arguments);
        } catch (b) {}
      };
    },
    hd = oa(function (a) {
      var b =
        ("undefined" != typeof crypto &&
          crypto.getRandomValues &&
          crypto.getRandomValues.bind(crypto)) ||
        ("undefined" != typeof msCrypto &&
          "function" == typeof window.msCrypto.getRandomValues &&
          msCrypto.getRandomValues.bind(msCrypto));
      if (b) {
        var c = new Uint8Array(16);
        a.exports = function () {
          b(c);
          return c;
        };
      } else {
        var e = Array(16);
        a.exports = function () {
          for (var a = 0, b; 16 > a; a++)
            0 === (a & 3) && (b = 4294967296 * Math.random()),
              (e[a] = (b >>> ((a & 3) << 3)) & 255);
          return e;
        };
      }
    }),
    B = [],
    ib = 0;
  for (; 256 > ib; ++ib) B[ib] = (ib + 256).toString(16).substr(1);
  var id = function (a, b) {
      b = b || 0;
      return [
        B[a[b++]],
        B[a[b++]],
        B[a[b++]],
        B[a[b++]],
        "-",
        B[a[b++]],
        B[a[b++]],
        "-",
        B[a[b++]],
        B[a[b++]],
        "-",
        B[a[b++]],
        B[a[b++]],
        "-",
        B[a[b++]],
        B[a[b++]],
        B[a[b++]],
        B[a[b++]],
        B[a[b++]],
        B[a[b++]],
      ].join("");
    },
    jd,
    jb,
    Eb = 0,
    Fb = 0,
    H = function (a, b, c) {
      c = (b && c) || 0;
      "string" == typeof a &&
        ((b = "binary" === a ? Array(16) : null), (a = null));
      a = a || {};
      a = a.random || (a.rng || hd)();
      a[6] = (a[6] & 15) | 64;
      a[8] = (a[8] & 63) | 128;
      if (b) for (var e = 0; 16 > e; ++e) b[c + e] = a[e];
      return b || id(a);
    },
    kb = H;
  kb.v1 = function (a, b, c) {
    c = (b && c) || 0;
    var e = b || [];
    a = a || {};
    var d = a.node || jd,
      f = void 0 !== a.clockseq ? a.clockseq : jb;
    if (null == d || null == f) {
      var h = hd();
      null == d && (d = jd = [h[0] | 1, h[1], h[2], h[3], h[4], h[5]]);
      null == f && (f = jb = ((h[6] << 8) | h[7]) & 16383);
    }
    h = void 0 !== a.msecs ? a.msecs : new Date().getTime();
    var g = void 0 !== a.nsecs ? a.nsecs : Fb + 1,
      k = h - Eb + (g - Fb) / 1e4;
    0 > k && void 0 === a.clockseq && (f = (f + 1) & 16383);
    (0 > k || h > Eb) && void 0 === a.nsecs && (g = 0);
    if (1e4 <= g)
      throw Error("uuid.v1(): Can't create more than 10M uuids/sec");
    Eb = h;
    Fb = g;
    jb = f;
    h += 122192928e5;
    a = (1e4 * (h & 268435455) + g) % 4294967296;
    e[c++] = (a >>> 24) & 255;
    e[c++] = (a >>> 16) & 255;
    e[c++] = (a >>> 8) & 255;
    e[c++] = a & 255;
    a = ((h / 4294967296) * 1e4) & 268435455;
    e[c++] = (a >>> 8) & 255;
    e[c++] = a & 255;
    e[c++] = ((a >>> 24) & 15) | 16;
    e[c++] = (a >>> 16) & 255;
    e[c++] = (f >>> 8) | 128;
    e[c++] = f & 255;
    for (f = 0; 6 > f; ++f) e[c + f] = d[f];
    return b ? b : id(e);
  };
  kb.v4 = H;
  var Ud = kb,
    $e = Object.prototype.hasOwnProperty,
    tb = function (a, b) {
      return null != a && $e.call(a, b);
    },
    af = function (a, b) {
      for (var c = -1, e = null == a ? 0 : a.length; ++c < e; )
        if (!b(a[c], c, a)) return !1;
      return !0;
    },
    bf = function (a, b) {
      var c = !0;
      Ya(a, function (a, d, f) {
        return (c = !!b(a, d, f));
      });
      return c;
    },
    ub = function (a, b, c) {
      var e = u(a) ? af : bf,
        d;
      if ((d = c))
        if (((d = b), K(c))) {
          var f = D(d);
          d = (
            "number" == f ? ha(c) && Xa(d, c.length) : "string" == f && d in c
          )
            ? Za(c[d], a)
            : !1;
        } else d = !1;
      d && (b = void 0);
      return e(a, ma(b));
    },
    Hc = function (a) {
      for (var b = -1, c = null == a ? 0 : a.length, e = 0, d = []; ++b < c; ) {
        var f = a[b];
        f && (d[e++] = f);
      }
      return d;
    },
    Od = Rc(Object.getPrototypeOf, Object),
    Bc = Function.prototype.toString,
    Pd = Object.prototype.hasOwnProperty,
    Qd = Bc.call(Object),
    Z = window;
  if (Z.GlobalSnowplowNamespace && 0 < Z.GlobalSnowplowNamespace.length) {
    var kd = Z.GlobalSnowplowNamespace.shift();
    var ld = Z[kd];
    ld.q = new Ic(ld.q, kd);
  } else (Z._snaq = Z._snaq || []), (Z._snaq = new Ic(Z._snaq, "_snaq"));
})();
