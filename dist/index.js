import { jsx as Lr } from "react/jsx-runtime";
import { useRef as yi, useEffect as vi } from "react";
function gt(h) {
  if (h === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return h;
}
function Vi(h, t) {
  h.prototype = Object.create(t.prototype), h.prototype.constructor = h, h.__proto__ = t;
}
/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var nt = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, Wt = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, Je, G, E, ht = 1e8, A = 1 / ht, Ve = Math.PI * 2, Nr = Ve / 4, Vr = 0, Bi = Math.sqrt, Br = Math.cos, Yr = Math.sin, U = function(t) {
  return typeof t == "string";
}, L = function(t) {
  return typeof t == "function";
}, yt = function(t) {
  return typeof t == "number";
}, ti = function(t) {
  return typeof t > "u";
}, dt = function(t) {
  return typeof t == "object";
}, K = function(t) {
  return t !== !1;
}, ei = function() {
  return typeof window < "u";
}, ge = function(t) {
  return L(t) || U(t);
}, Yi = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, j = Array.isArray, Xr = /random\([^)]+\)/g, Ur = /,\s*/g, xi = /(?:-?\.?\d|\.)+/gi, Xi = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Yt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Ae = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Ui = /[+-]=-?[.\d]+/, qr = /[^,'"\[\]\s]+/gi, Gr = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, F, ft, Be, ii, st = {}, we = {}, qi, Gi = function(t) {
  return (we = jt(t, st)) && J;
}, ri = function(t, e) {
  return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
}, oe = function(t, e) {
  return !e && console.warn(t);
}, Wi = function(t, e) {
  return t && (st[t] = e) && we && (we[t] = e) || st;
}, he = function() {
  return 0;
}, Wr = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, ye = {
  suppressEvents: !0,
  kill: !1
}, jr = {
  suppressEvents: !0
}, ni = {}, Tt = [], Ye = {}, ji, tt = {}, Re = {}, wi = 30, ve = [], si = "", ai = function(t) {
  var e = t[0], i, r;
  if (dt(e) || L(e) || (t = [t]), !(i = (e._gsap || {}).harness)) {
    for (r = ve.length; r-- && !ve[r].targetTest(e); )
      ;
    i = ve[r];
  }
  for (r = t.length; r--; )
    t[r] && (t[r]._gsap || (t[r]._gsap = new mr(t[r], i))) || t.splice(r, 1);
  return t;
}, Ft = function(t) {
  return t._gsap || ai(ut(t))[0]._gsap;
}, $i = function(t, e, i) {
  return (i = t[e]) && L(i) ? t[e]() : ti(i) && t.getAttribute && t.getAttribute(e) || i;
}, Q = function(t, e) {
  return (t = t.split(",")).forEach(e) || t;
}, N = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, z = function(t) {
  return Math.round(t * 1e7) / 1e7 || 0;
}, Ut = function(t, e) {
  var i = e.charAt(0), r = parseFloat(e.substr(2));
  return t = parseFloat(t), i === "+" ? t + r : i === "-" ? t - r : i === "*" ? t * r : t / r;
}, $r = function(t, e) {
  for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i; )
    ;
  return r < i;
}, be = function() {
  var t = Tt.length, e = Tt.slice(0), i, r;
  for (Ye = {}, Tt.length = 0, i = 0; i < t; i++)
    r = e[i], r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
}, oi = function(t) {
  return !!(t._initted || t._startAt || t.add);
}, Ki = function(t, e, i, r) {
  Tt.length && !G && be(), t.render(e, i, !!(G && e < 0 && oi(t))), Tt.length && !G && be();
}, Qi = function(t) {
  var e = parseFloat(t);
  return (e || e === 0) && (t + "").match(qr).length < 2 ? e : U(t) ? t.trim() : t;
}, Zi = function(t) {
  return t;
}, at = function(t, e) {
  for (var i in e)
    i in t || (t[i] = e[i]);
  return t;
}, Kr = function(t) {
  return function(e, i) {
    for (var r in i)
      r in e || r === "duration" && t || r === "ease" || (e[r] = i[r]);
  };
}, jt = function(t, e) {
  for (var i in e)
    t[i] = e[i];
  return t;
}, bi = function h(t, e) {
  for (var i in e)
    i !== "__proto__" && i !== "constructor" && i !== "prototype" && (t[i] = dt(e[i]) ? h(t[i] || (t[i] = {}), e[i]) : e[i]);
  return t;
}, Te = function(t, e) {
  var i = {}, r;
  for (r in t)
    r in e || (i[r] = t[r]);
  return i;
}, ne = function(t) {
  var e = t.parent || F, i = t.keyframes ? Kr(j(t.keyframes)) : at;
  if (K(t.inherit))
    for (; e; )
      i(t, e.vars.defaults), e = e.parent || e._dp;
  return t;
}, Qr = function(t, e) {
  for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i]; )
    ;
  return i < 0;
}, Hi = function(t, e, i, r, n) {
  var s = t[r], a;
  if (n)
    for (a = e[n]; s && s[n] > a; )
      s = s._prev;
  return s ? (e._next = s._next, s._next = e) : (e._next = t[i], t[i] = e), e._next ? e._next._prev = e : t[r] = e, e._prev = s, e.parent = e._dp = t, e;
}, ke = function(t, e, i, r) {
  i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
  var n = e._prev, s = e._next;
  n ? n._next = s : t[i] === e && (t[i] = s), s ? s._prev = n : t[r] === e && (t[r] = n), e._next = e._prev = e.parent = null;
}, Pt = function(t, e) {
  t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0;
}, It = function(t, e) {
  if (t && (!e || e._end > t._dur || e._start < 0))
    for (var i = t; i; )
      i._dirty = 1, i = i.parent;
  return t;
}, Zr = function(t) {
  for (var e = t.parent; e && e.parent; )
    e._dirty = 1, e.totalDuration(), e = e.parent;
  return t;
}, Xe = function(t, e, i, r) {
  return t._startAt && (G ? t._startAt.revert(ye) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, r));
}, Hr = function h(t) {
  return !t || t._ts && h(t.parent);
}, Ti = function(t) {
  return t._repeat ? $t(t._tTime, t = t.duration() + t._rDelay) * t : 0;
}, $t = function(t, e) {
  var i = Math.floor(t = z(t / e));
  return t && i === t ? i - 1 : i;
}, Se = function(t, e) {
  return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
}, Me = function(t) {
  return t._end = z(t._start + (t._tDur / Math.abs(t._ts || t._rts || A) || 0));
}, De = function(t, e) {
  var i = t._dp;
  return i && i.smoothChildTiming && t._ts && (t._start = z(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Me(t), i._dirty || It(i, t)), t;
}, Ji = function(t, e) {
  var i;
  if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (i = Se(t.rawTime(), e), (!e._dur || de(0, e.totalDuration(), i) - e._tTime > A) && e.render(i, !0)), It(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
    if (t._dur < t.duration())
      for (i = t; i._dp; )
        i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
    t._zTime = -A;
  }
}, _t = function(t, e, i, r) {
  return e.parent && Pt(e), e._start = z((yt(i) ? i : i || t !== F ? ot(t, i, e) : t._time) + e._delay), e._end = z(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), Hi(t, e, "_first", "_last", t._sort ? "_start" : 0), Ue(e) || (t._recent = e), r || Ji(t, e), t._ts < 0 && De(t, t._tTime), t;
}, tr = function(t, e) {
  return (st.ScrollTrigger || ri("scrollTrigger", e)) && st.ScrollTrigger.create(e, t);
}, er = function(t, e, i, r, n) {
  if (ui(t, e, n), !t._initted)
    return 1;
  if (!i && t._pt && !G && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && ji !== et.frame)
    return Tt.push(t), t._lazy = [n, r], 1;
}, Jr = function h(t) {
  var e = t.parent;
  return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || h(e));
}, Ue = function(t) {
  var e = t.data;
  return e === "isFromStart" || e === "isStart";
}, tn = function(t, e, i, r) {
  var n = t.ratio, s = e < 0 || !e && (!t._start && Jr(t) && !(!t._initted && Ue(t)) || (t._ts < 0 || t._dp._ts < 0) && !Ue(t)) ? 0 : 1, a = t._rDelay, o = 0, u, l, _;
  if (a && t._repeat && (o = de(0, t._tDur, e), l = $t(o, a), t._yoyo && l & 1 && (s = 1 - s), l !== $t(t._tTime, a) && (n = 1 - s, t.vars.repeatRefresh && t._initted && t.invalidate())), s !== n || G || r || t._zTime === A || !e && t._zTime) {
    if (!t._initted && er(t, e, r, i, o))
      return;
    for (_ = t._zTime, t._zTime = e || (i ? A : 0), i || (i = e && !_), t.ratio = s, t._from && (s = 1 - s), t._time = 0, t._tTime = o, u = t._pt; u; )
      u.r(s, u.d), u = u._next;
    e < 0 && Xe(t, e, i, !0), t._onUpdate && !i && it(t, "onUpdate"), o && t._repeat && !i && t.parent && it(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === s && (s && Pt(t, 1), !i && !G && (it(t, s ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
  } else t._zTime || (t._zTime = e);
}, en = function(t, e, i) {
  var r;
  if (i > e)
    for (r = t._first; r && r._start <= i; ) {
      if (r.data === "isPause" && r._start > e)
        return r;
      r = r._next;
    }
  else
    for (r = t._last; r && r._start >= i; ) {
      if (r.data === "isPause" && r._start < e)
        return r;
      r = r._prev;
    }
}, Kt = function(t, e, i, r) {
  var n = t._repeat, s = z(e) || 0, a = t._tTime / t._tDur;
  return a && !r && (t._time *= s / t._dur), t._dur = s, t._tDur = n ? n < 0 ? 1e10 : z(s * (n + 1) + t._rDelay * n) : s, a > 0 && !r && De(t, t._tTime = t._tDur * a), t.parent && Me(t), i || It(t.parent, t), t;
}, Si = function(t) {
  return t instanceof $ ? It(t) : Kt(t, t._dur);
}, rn = {
  _start: 0,
  endTime: he,
  totalDuration: he
}, ot = function h(t, e, i) {
  var r = t.labels, n = t._recent || rn, s = t.duration() >= ht ? n.endTime(!1) : t._dur, a, o, u;
  return U(e) && (isNaN(e) || e in r) ? (o = e.charAt(0), u = e.substr(-1) === "%", a = e.indexOf("="), o === "<" || o === ">" ? (a >= 0 && (e = e.replace(/=/, "")), (o === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (u ? (a < 0 ? n : i).totalDuration() / 100 : 1)) : a < 0 ? (e in r || (r[e] = s), r[e]) : (o = parseFloat(e.charAt(a - 1) + e.substr(a + 1)), u && i && (o = o / 100 * (j(i) ? i[0] : i).totalDuration()), a > 1 ? h(t, e.substr(0, a - 1), i) + o : s + o)) : e == null ? s : +e;
}, se = function(t, e, i) {
  var r = yt(e[1]), n = (r ? 2 : 1) + (t < 2 ? 0 : 1), s = e[n], a, o;
  if (r && (s.duration = e[1]), s.parent = i, t) {
    for (a = s, o = i; o && !("immediateRender" in a); )
      a = o.vars.defaults || {}, o = K(o.vars.inherit) && o.parent;
    s.immediateRender = K(a.immediateRender), t < 2 ? s.runBackwards = 1 : s.startAt = e[n - 1];
  }
  return new B(e[0], s, e[n + 1]);
}, kt = function(t, e) {
  return t || t === 0 ? e(t) : e;
}, de = function(t, e, i) {
  return i < t ? t : i > e ? e : i;
}, W = function(t, e) {
  return !U(t) || !(e = Gr.exec(t)) ? "" : e[1];
}, nn = function(t, e, i) {
  return kt(i, function(r) {
    return de(t, e, r);
  });
}, qe = [].slice, ir = function(t, e) {
  return t && dt(t) && "length" in t && (!e && !t.length || t.length - 1 in t && dt(t[0])) && !t.nodeType && t !== ft;
}, sn = function(t, e, i) {
  return i === void 0 && (i = []), t.forEach(function(r) {
    var n;
    return U(r) && !e || ir(r, 1) ? (n = i).push.apply(n, ut(r)) : i.push(r);
  }) || i;
}, ut = function(t, e, i) {
  return E && !e && E.selector ? E.selector(t) : U(t) && !i && (Be || !Qt()) ? qe.call((e || ii).querySelectorAll(t), 0) : j(t) ? sn(t, i) : ir(t) ? qe.call(t, 0) : t ? [t] : [];
}, Ge = function(t) {
  return t = ut(t)[0] || oe("Invalid scope") || {}, function(e) {
    var i = t.current || t.nativeElement || t;
    return ut(e, i.querySelectorAll ? i : i === t ? oe("Invalid scope") || ii.createElement("div") : t);
  };
}, rr = function(t) {
  return t.sort(function() {
    return 0.5 - Math.random();
  });
}, nr = function(t) {
  if (L(t))
    return t;
  var e = dt(t) ? t : {
    each: t
  }, i = Lt(e.ease), r = e.from || 0, n = parseFloat(e.base) || 0, s = {}, a = r > 0 && r < 1, o = isNaN(r) || a, u = e.axis, l = r, _ = r;
  return U(r) ? l = _ = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[r] || 0 : !a && o && (l = r[0], _ = r[1]), function(c, d, p) {
    var f = (p || e).length, g = s[f], m, y, x, b, w, S, T, P, v;
    if (!g) {
      if (v = e.grid === "auto" ? 0 : (e.grid || [1, ht])[1], !v) {
        for (T = -ht; T < (T = p[v++].getBoundingClientRect().left) && v < f; )
          ;
        v < f && v--;
      }
      for (g = s[f] = [], m = o ? Math.min(v, f) * l - 0.5 : r % v, y = v === ht ? 0 : o ? f * _ / v - 0.5 : r / v | 0, T = 0, P = ht, S = 0; S < f; S++)
        x = S % v - m, b = y - (S / v | 0), g[S] = w = u ? Math.abs(u === "y" ? b : x) : Bi(x * x + b * b), w > T && (T = w), w < P && (P = w);
      r === "random" && rr(g), g.max = T - P, g.min = P, g.v = f = (parseFloat(e.amount) || parseFloat(e.each) * (v > f ? f - 1 : u ? u === "y" ? f / v : v : Math.max(v, f / v)) || 0) * (r === "edges" ? -1 : 1), g.b = f < 0 ? n - f : n, g.u = W(e.amount || e.each) || 0, i = i && f < 0 ? dr(i) : i;
    }
    return f = (g[c] - g.min) / g.max || 0, z(g.b + (i ? i(f) : f) * g.v) + g.u;
  };
}, We = function(t) {
  var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
  return function(i) {
    var r = z(Math.round(parseFloat(i) / t) * t * e);
    return (r - r % 1) / e + (yt(i) ? 0 : W(i));
  };
}, sr = function(t, e) {
  var i = j(t), r, n;
  return !i && dt(t) && (r = i = t.radius || ht, t.values ? (t = ut(t.values), (n = !yt(t[0])) && (r *= r)) : t = We(t.increment)), kt(e, i ? L(t) ? function(s) {
    return n = t(s), Math.abs(n - s) <= r ? n : s;
  } : function(s) {
    for (var a = parseFloat(n ? s.x : s), o = parseFloat(n ? s.y : 0), u = ht, l = 0, _ = t.length, c, d; _--; )
      n ? (c = t[_].x - a, d = t[_].y - o, c = c * c + d * d) : c = Math.abs(t[_] - a), c < u && (u = c, l = _);
    return l = !r || u <= r ? t[l] : s, n || l === s || yt(s) ? l : l + W(s);
  } : We(t));
}, ar = function(t, e, i, r) {
  return kt(j(t) ? !e : i === !0 ? !!(i = 0) : !r, function() {
    return j(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + i * 0.99)) / i) * i * r) / r;
  });
}, an = function() {
  for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
    e[i] = arguments[i];
  return function(r) {
    return e.reduce(function(n, s) {
      return s(n);
    }, r);
  };
}, on = function(t, e) {
  return function(i) {
    return t(parseFloat(i)) + (e || W(i));
  };
}, hn = function(t, e, i) {
  return hr(t, e, 0, 1, i);
}, or = function(t, e, i) {
  return kt(i, function(r) {
    return t[~~e(r)];
  });
}, un = function h(t, e, i) {
  var r = e - t;
  return j(t) ? or(t, h(0, t.length), e) : kt(i, function(n) {
    return (r + (n - t) % r) % r + t;
  });
}, ln = function h(t, e, i) {
  var r = e - t, n = r * 2;
  return j(t) ? or(t, h(0, t.length - 1), e) : kt(i, function(s) {
    return s = (n + (s - t) % n) % n || 0, t + (s > r ? n - s : s);
  });
}, ue = function(t) {
  return t.replace(Xr, function(e) {
    var i = e.indexOf("[") + 1, r = e.substring(i || 7, i ? e.indexOf("]") : e.length - 1).split(Ur);
    return ar(i ? r : +r[0], i ? 0 : +r[1], +r[2] || 1e-5);
  });
}, hr = function(t, e, i, r, n) {
  var s = e - t, a = r - i;
  return kt(n, function(o) {
    return i + ((o - t) / s * a || 0);
  });
}, fn = function h(t, e, i, r) {
  var n = isNaN(t + e) ? 0 : function(d) {
    return (1 - d) * t + d * e;
  };
  if (!n) {
    var s = U(t), a = {}, o, u, l, _, c;
    if (i === !0 && (r = 1) && (i = null), s)
      t = {
        p: t
      }, e = {
        p: e
      };
    else if (j(t) && !j(e)) {
      for (l = [], _ = t.length, c = _ - 2, u = 1; u < _; u++)
        l.push(h(t[u - 1], t[u]));
      _--, n = function(p) {
        p *= _;
        var f = Math.min(c, ~~p);
        return l[f](p - f);
      }, i = e;
    } else r || (t = jt(j(t) ? [] : {}, t));
    if (!l) {
      for (o in e)
        hi.call(a, t, o, "get", e[o]);
      n = function(p) {
        return _i(p, a) || (s ? t.p : t);
      };
    }
  }
  return kt(i, n);
}, Pi = function(t, e, i) {
  var r = t.labels, n = ht, s, a, o;
  for (s in r)
    a = r[s] - e, a < 0 == !!i && a && n > (a = Math.abs(a)) && (o = s, n = a);
  return o;
}, it = function(t, e, i) {
  var r = t.vars, n = r[e], s = E, a = t._ctx, o, u, l;
  if (n)
    return o = r[e + "Params"], u = r.callbackScope || t, i && Tt.length && be(), a && (E = a), l = o ? n.apply(u, o) : n.call(u), E = s, l;
}, ie = function(t) {
  return Pt(t), t.scrollTrigger && t.scrollTrigger.kill(!!G), t.progress() < 1 && it(t, "onInterrupt"), t;
}, Xt, ur = [], lr = function(t) {
  if (t)
    if (t = !t.name && t.default || t, ei() || t.headless) {
      var e = t.name, i = L(t), r = e && !i && t.init ? function() {
        this._props = [];
      } : t, n = {
        init: he,
        render: _i,
        add: hi,
        kill: On,
        modifier: Cn,
        rawVars: 0
      }, s = {
        targetTest: 0,
        get: 0,
        getSetter: fi,
        aliases: {},
        register: 0
      };
      if (Qt(), t !== r) {
        if (tt[e])
          return;
        at(r, at(Te(t, n), s)), jt(r.prototype, jt(n, Te(t, s))), tt[r.prop = e] = r, t.targetTest && (ve.push(r), ni[e] = 1), e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
      }
      Wi(e, r), t.register && t.register(J, r, Z);
    } else
      ur.push(t);
}, D = 255, re = {
  aqua: [0, D, D],
  lime: [0, D, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, D],
  navy: [0, 0, 128],
  white: [D, D, D],
  olive: [128, 128, 0],
  yellow: [D, D, 0],
  orange: [D, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [D, 0, 0],
  pink: [D, 192, 203],
  cyan: [0, D, D],
  transparent: [D, D, D, 0]
}, Ee = function(t, e, i) {
  return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? e + (i - e) * t * 6 : t < 0.5 ? i : t * 3 < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * D + 0.5 | 0;
}, fr = function(t, e, i) {
  var r = t ? yt(t) ? [t >> 16, t >> 8 & D, t & D] : 0 : re.black, n, s, a, o, u, l, _, c, d, p;
  if (!r) {
    if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), re[t])
      r = re[t];
    else if (t.charAt(0) === "#") {
      if (t.length < 6 && (n = t.charAt(1), s = t.charAt(2), a = t.charAt(3), t = "#" + n + n + s + s + a + a + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9)
        return r = parseInt(t.substr(1, 6), 16), [r >> 16, r >> 8 & D, r & D, parseInt(t.substr(7), 16) / 255];
      t = parseInt(t.substr(1), 16), r = [t >> 16, t >> 8 & D, t & D];
    } else if (t.substr(0, 3) === "hsl") {
      if (r = p = t.match(xi), !e)
        o = +r[0] % 360 / 360, u = +r[1] / 100, l = +r[2] / 100, s = l <= 0.5 ? l * (u + 1) : l + u - l * u, n = l * 2 - s, r.length > 3 && (r[3] *= 1), r[0] = Ee(o + 1 / 3, n, s), r[1] = Ee(o, n, s), r[2] = Ee(o - 1 / 3, n, s);
      else if (~t.indexOf("="))
        return r = t.match(Xi), i && r.length < 4 && (r[3] = 1), r;
    } else
      r = t.match(xi) || re.transparent;
    r = r.map(Number);
  }
  return e && !p && (n = r[0] / D, s = r[1] / D, a = r[2] / D, _ = Math.max(n, s, a), c = Math.min(n, s, a), l = (_ + c) / 2, _ === c ? o = u = 0 : (d = _ - c, u = l > 0.5 ? d / (2 - _ - c) : d / (_ + c), o = _ === n ? (s - a) / d + (s < a ? 6 : 0) : _ === s ? (a - n) / d + 2 : (n - s) / d + 4, o *= 60), r[0] = ~~(o + 0.5), r[1] = ~~(u * 100 + 0.5), r[2] = ~~(l * 100 + 0.5)), i && r.length < 4 && (r[3] = 1), r;
}, _r = function(t) {
  var e = [], i = [], r = -1;
  return t.split(St).forEach(function(n) {
    var s = n.match(Yt) || [];
    e.push.apply(e, s), i.push(r += s.length + 1);
  }), e.c = i, e;
}, Ci = function(t, e, i) {
  var r = "", n = (t + r).match(St), s = e ? "hsla(" : "rgba(", a = 0, o, u, l, _;
  if (!n)
    return t;
  if (n = n.map(function(c) {
    return (c = fr(c, e, 1)) && s + (e ? c[0] + "," + c[1] + "%," + c[2] + "%," + c[3] : c.join(",")) + ")";
  }), i && (l = _r(t), o = i.c, o.join(r) !== l.c.join(r)))
    for (u = t.replace(St, "1").split(Yt), _ = u.length - 1; a < _; a++)
      r += u[a] + (~o.indexOf(a) ? n.shift() || s + "0,0,0,0)" : (l.length ? l : n.length ? n : i).shift());
  if (!u)
    for (u = t.split(St), _ = u.length - 1; a < _; a++)
      r += u[a] + n[a];
  return r + u[_];
}, St = (function() {
  var h = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in re)
    h += "|" + t + "\\b";
  return new RegExp(h + ")", "gi");
})(), _n = /hsl[a]?\(/, cr = function(t) {
  var e = t.join(" "), i;
  if (St.lastIndex = 0, St.test(e))
    return i = _n.test(e), t[1] = Ci(t[1], i), t[0] = Ci(t[0], i, _r(t[1])), !0;
}, le, et = (function() {
  var h = Date.now, t = 500, e = 33, i = h(), r = i, n = 1e3 / 240, s = n, a = [], o, u, l, _, c, d, p = function f(g) {
    var m = h() - r, y = g === !0, x, b, w, S;
    if ((m > t || m < 0) && (i += m - e), r += m, w = r - i, x = w - s, (x > 0 || y) && (S = ++_.frame, c = w - _.time * 1e3, _.time = w = w / 1e3, s += x + (x >= n ? 4 : n - x), b = 1), y || (o = u(f)), b)
      for (d = 0; d < a.length; d++)
        a[d](w, c, S, g);
  };
  return _ = {
    time: 0,
    frame: 0,
    tick: function() {
      p(!0);
    },
    deltaRatio: function(g) {
      return c / (1e3 / (g || 60));
    },
    wake: function() {
      qi && (!Be && ei() && (ft = Be = window, ii = ft.document || {}, st.gsap = J, (ft.gsapVersions || (ft.gsapVersions = [])).push(J.version), Gi(we || ft.GreenSockGlobals || !ft.gsap && ft || {}), ur.forEach(lr)), l = typeof requestAnimationFrame < "u" && requestAnimationFrame, o && _.sleep(), u = l || function(g) {
        return setTimeout(g, s - _.time * 1e3 + 1 | 0);
      }, le = 1, p(2));
    },
    sleep: function() {
      (l ? cancelAnimationFrame : clearTimeout)(o), le = 0, u = he;
    },
    lagSmoothing: function(g, m) {
      t = g || 1 / 0, e = Math.min(m || 33, t);
    },
    fps: function(g) {
      n = 1e3 / (g || 240), s = _.time * 1e3 + n;
    },
    add: function(g, m, y) {
      var x = m ? function(b, w, S, T) {
        g(b, w, S, T), _.remove(x);
      } : g;
      return _.remove(g), a[y ? "unshift" : "push"](x), Qt(), x;
    },
    remove: function(g, m) {
      ~(m = a.indexOf(g)) && a.splice(m, 1) && d >= m && d--;
    },
    _listeners: a
  }, _;
})(), Qt = function() {
  return !le && et.wake();
}, O = {}, cn = /^[\d.\-M][\d.\-,\s]/, dn = /["']/g, pn = function(t) {
  for (var e = {}, i = t.substr(1, t.length - 3).split(":"), r = i[0], n = 1, s = i.length, a, o, u; n < s; n++)
    o = i[n], a = n !== s - 1 ? o.lastIndexOf(",") : o.length, u = o.substr(0, a), e[r] = isNaN(u) ? u.replace(dn, "").trim() : +u, r = o.substr(a + 1).trim();
  return e;
}, gn = function(t) {
  var e = t.indexOf("(") + 1, i = t.indexOf(")"), r = t.indexOf("(", e);
  return t.substring(e, ~r && r < i ? t.indexOf(")", i + 1) : i);
}, mn = function(t) {
  var e = (t + "").split("("), i = O[e[0]];
  return i && e.length > 1 && i.config ? i.config.apply(null, ~t.indexOf("{") ? [pn(e[1])] : gn(t).split(",").map(Qi)) : O._CE && cn.test(t) ? O._CE("", t) : i;
}, dr = function(t) {
  return function(e) {
    return 1 - t(1 - e);
  };
}, pr = function h(t, e) {
  for (var i = t._first, r; i; )
    i instanceof $ ? h(i, e) : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== e && (i.timeline ? h(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next;
}, Lt = function(t, e) {
  return t && (L(t) ? t : O[t] || mn(t)) || e;
}, Vt = function(t, e, i, r) {
  i === void 0 && (i = function(o) {
    return 1 - e(1 - o);
  }), r === void 0 && (r = function(o) {
    return o < 0.5 ? e(o * 2) / 2 : 1 - e((1 - o) * 2) / 2;
  });
  var n = {
    easeIn: e,
    easeOut: i,
    easeInOut: r
  }, s;
  return Q(t, function(a) {
    O[a] = st[a] = n, O[s = a.toLowerCase()] = i;
    for (var o in n)
      O[s + (o === "easeIn" ? ".in" : o === "easeOut" ? ".out" : ".inOut")] = O[a + "." + o] = n[o];
  }), n;
}, gr = function(t) {
  return function(e) {
    return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
  };
}, ze = function h(t, e, i) {
  var r = e >= 1 ? e : 1, n = (i || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1), s = n / Ve * (Math.asin(1 / r) || 0), a = function(l) {
    return l === 1 ? 1 : r * Math.pow(2, -10 * l) * Yr((l - s) * n) + 1;
  }, o = t === "out" ? a : t === "in" ? function(u) {
    return 1 - a(1 - u);
  } : gr(a);
  return n = Ve / n, o.config = function(u, l) {
    return h(t, u, l);
  }, o;
}, Fe = function h(t, e) {
  e === void 0 && (e = 1.70158);
  var i = function(s) {
    return s ? --s * s * ((e + 1) * s + e) + 1 : 0;
  }, r = t === "out" ? i : t === "in" ? function(n) {
    return 1 - i(1 - n);
  } : gr(i);
  return r.config = function(n) {
    return h(t, n);
  }, r;
};
Q("Linear,Quad,Cubic,Quart,Quint,Strong", function(h, t) {
  var e = t < 5 ? t + 1 : t;
  Vt(h + ",Power" + (e - 1), t ? function(i) {
    return Math.pow(i, e);
  } : function(i) {
    return i;
  }, function(i) {
    return 1 - Math.pow(1 - i, e);
  }, function(i) {
    return i < 0.5 ? Math.pow(i * 2, e) / 2 : 1 - Math.pow((1 - i) * 2, e) / 2;
  });
});
O.Linear.easeNone = O.none = O.Linear.easeIn;
Vt("Elastic", ze("in"), ze("out"), ze());
(function(h, t) {
  var e = 1 / t, i = 2 * e, r = 2.5 * e, n = function(a) {
    return a < e ? h * a * a : a < i ? h * Math.pow(a - 1.5 / t, 2) + 0.75 : a < r ? h * (a -= 2.25 / t) * a + 0.9375 : h * Math.pow(a - 2.625 / t, 2) + 0.984375;
  };
  Vt("Bounce", function(s) {
    return 1 - n(1 - s);
  }, n);
})(7.5625, 2.75);
Vt("Expo", function(h) {
  return Math.pow(2, 10 * (h - 1)) * h + h * h * h * h * h * h * (1 - h);
});
Vt("Circ", function(h) {
  return -(Bi(1 - h * h) - 1);
});
Vt("Sine", function(h) {
  return h === 1 ? 1 : -Br(h * Nr) + 1;
});
Vt("Back", Fe("in"), Fe("out"), Fe());
O.SteppedEase = O.steps = st.SteppedEase = {
  config: function(t, e) {
    t === void 0 && (t = 1);
    var i = 1 / t, r = t + (e ? 0 : 1), n = e ? 1 : 0, s = 1 - A;
    return function(a) {
      return ((r * de(0, s, a) | 0) + n) * i;
    };
  }
};
Wt.ease = O["quad.out"];
Q("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(h) {
  return si += h + "," + h + "Params,";
});
var mr = function(t, e) {
  this.id = Vr++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : $i, this.set = e ? e.getSetter : fi;
}, fe = /* @__PURE__ */ (function() {
  function h(e) {
    this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, Kt(this, +e.duration, 1, 1), this.data = e.data, E && (this._ctx = E, E.data.push(this)), le || et.wake();
  }
  var t = h.prototype;
  return t.delay = function(i) {
    return i || i === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + i - this._delay), this._delay = i, this) : this._delay;
  }, t.duration = function(i) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i) : this.totalDuration() && this._dur;
  }, t.totalDuration = function(i) {
    return arguments.length ? (this._dirty = 0, Kt(this, this._repeat < 0 ? i : (i - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, t.totalTime = function(i, r) {
    if (Qt(), !arguments.length)
      return this._tTime;
    var n = this._dp;
    if (n && n.smoothChildTiming && this._ts) {
      for (De(this, i), !n._dp || n.parent || Ji(n, this); n && n.parent; )
        n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && i < this._tDur || this._ts < 0 && i > 0 || !this._tDur && !i) && _t(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== i || !this._dur && !r || this._initted && Math.abs(this._zTime) === A || !this._initted && this._dur && i || !i && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = i), Ki(this, i, r)), this;
  }, t.time = function(i, r) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), i + Ti(this)) % (this._dur + this._rDelay) || (i ? this._dur : 0), r) : this._time;
  }, t.totalProgress = function(i, r) {
    return arguments.length ? this.totalTime(this.totalDuration() * i, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, t.progress = function(i, r) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + Ti(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, t.iteration = function(i, r) {
    var n = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (i - 1) * n, r) : this._repeat ? $t(this._tTime, n) + 1 : 1;
  }, t.timeScale = function(i, r) {
    if (!arguments.length)
      return this._rts === -A ? 0 : this._rts;
    if (this._rts === i)
      return this;
    var n = this.parent && this._ts ? Se(this.parent._time, this) : this._tTime;
    return this._rts = +i || 0, this._ts = this._ps || i === -A ? 0 : this._rts, this.totalTime(de(-Math.abs(this._delay), this.totalDuration(), n), r !== !1), Me(this), Zr(this);
  }, t.paused = function(i) {
    return arguments.length ? (this._ps !== i && (this._ps = i, i ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Qt(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== A && (this._tTime -= A)))), this) : this._ps;
  }, t.startTime = function(i) {
    if (arguments.length) {
      this._start = z(i);
      var r = this.parent || this._dp;
      return r && (r._sort || !this.parent) && _t(r, this, this._start - this._delay), this;
    }
    return this._start;
  }, t.endTime = function(i) {
    return this._start + (K(i) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, t.rawTime = function(i) {
    var r = this.parent || this._dp;
    return r ? i && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Se(r.rawTime(i), this) : this._tTime : this._tTime;
  }, t.revert = function(i) {
    i === void 0 && (i = jr);
    var r = G;
    return G = i, oi(this) && (this.timeline && this.timeline.revert(i), this.totalTime(-0.01, i.suppressEvents)), this.data !== "nested" && i.kill !== !1 && this.kill(), G = r, this;
  }, t.globalTime = function(i) {
    for (var r = this, n = arguments.length ? i : r.rawTime(); r; )
      n = r._start + n / (Math.abs(r._ts) || 1), r = r._dp;
    return !this.parent && this._sat ? this._sat.globalTime(i) : n;
  }, t.repeat = function(i) {
    return arguments.length ? (this._repeat = i === 1 / 0 ? -2 : i, Si(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, t.repeatDelay = function(i) {
    if (arguments.length) {
      var r = this._time;
      return this._rDelay = i, Si(this), r ? this.time(r) : this;
    }
    return this._rDelay;
  }, t.yoyo = function(i) {
    return arguments.length ? (this._yoyo = i, this) : this._yoyo;
  }, t.seek = function(i, r) {
    return this.totalTime(ot(this, i), K(r));
  }, t.restart = function(i, r) {
    return this.play().totalTime(i ? -this._delay : 0, K(r)), this._dur || (this._zTime = -A), this;
  }, t.play = function(i, r) {
    return i != null && this.seek(i, r), this.reversed(!1).paused(!1);
  }, t.reverse = function(i, r) {
    return i != null && this.seek(i || this.totalDuration(), r), this.reversed(!0).paused(!1);
  }, t.pause = function(i, r) {
    return i != null && this.seek(i, r), this.paused(!0);
  }, t.resume = function() {
    return this.paused(!1);
  }, t.reversed = function(i) {
    return arguments.length ? (!!i !== this.reversed() && this.timeScale(-this._rts || (i ? -A : 0)), this) : this._rts < 0;
  }, t.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -A, this;
  }, t.isActive = function() {
    var i = this.parent || this._dp, r = this._start, n;
    return !!(!i || this._ts && this._initted && i.isActive() && (n = i.rawTime(!0)) >= r && n < this.endTime(!0) - A);
  }, t.eventCallback = function(i, r, n) {
    var s = this.vars;
    return arguments.length > 1 ? (r ? (s[i] = r, n && (s[i + "Params"] = n), i === "onUpdate" && (this._onUpdate = r)) : delete s[i], this) : s[i];
  }, t.then = function(i) {
    var r = this, n = r._prom;
    return new Promise(function(s) {
      var a = L(i) ? i : Zi, o = function() {
        var l = r.then;
        r.then = null, n && n(), L(a) && (a = a(r)) && (a.then || a === r) && (r.then = l), s(a), r.then = l;
      };
      r._initted && r.totalProgress() === 1 && r._ts >= 0 || !r._tTime && r._ts < 0 ? o() : r._prom = o;
    });
  }, t.kill = function() {
    ie(this);
  }, h;
})();
at(fe.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -A,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var $ = /* @__PURE__ */ (function(h) {
  Vi(t, h);
  function t(i, r) {
    var n;
    return i === void 0 && (i = {}), n = h.call(this, i) || this, n.labels = {}, n.smoothChildTiming = !!i.smoothChildTiming, n.autoRemoveChildren = !!i.autoRemoveChildren, n._sort = K(i.sortChildren), F && _t(i.parent || F, gt(n), r), i.reversed && n.reverse(), i.paused && n.paused(!0), i.scrollTrigger && tr(gt(n), i.scrollTrigger), n;
  }
  var e = t.prototype;
  return e.to = function(r, n, s) {
    return se(0, arguments, this), this;
  }, e.from = function(r, n, s) {
    return se(1, arguments, this), this;
  }, e.fromTo = function(r, n, s, a) {
    return se(2, arguments, this), this;
  }, e.set = function(r, n, s) {
    return n.duration = 0, n.parent = this, ne(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new B(r, n, ot(this, s), 1), this;
  }, e.call = function(r, n, s) {
    return _t(this, B.delayedCall(0, r, n), s);
  }, e.staggerTo = function(r, n, s, a, o, u, l) {
    return s.duration = n, s.stagger = s.stagger || a, s.onComplete = u, s.onCompleteParams = l, s.parent = this, new B(r, s, ot(this, o)), this;
  }, e.staggerFrom = function(r, n, s, a, o, u, l) {
    return s.runBackwards = 1, ne(s).immediateRender = K(s.immediateRender), this.staggerTo(r, n, s, a, o, u, l);
  }, e.staggerFromTo = function(r, n, s, a, o, u, l, _) {
    return a.startAt = s, ne(a).immediateRender = K(a.immediateRender), this.staggerTo(r, n, a, o, u, l, _);
  }, e.render = function(r, n, s) {
    var a = this._time, o = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, l = r <= 0 ? 0 : z(r), _ = this._zTime < 0 != r < 0 && (this._initted || !u), c, d, p, f, g, m, y, x, b, w, S, T;
    if (this !== F && l > o && r >= 0 && (l = o), l !== this._tTime || s || _) {
      if (a !== this._time && u && (l += this._time - a, r += this._time - a), c = l, b = this._start, x = this._ts, m = !x, _ && (u || (a = this._zTime), (r || !n) && (this._zTime = r)), this._repeat) {
        if (S = this._yoyo, g = u + this._rDelay, this._repeat < -1 && r < 0)
          return this.totalTime(g * 100 + r, n, s);
        if (c = z(l % g), l === o ? (f = this._repeat, c = u) : (w = z(l / g), f = ~~w, f && f === w && (c = u, f--), c > u && (c = u)), w = $t(this._tTime, g), !a && this._tTime && w !== f && this._tTime - w * g - this._dur <= 0 && (w = f), S && f & 1 && (c = u - c, T = 1), f !== w && !this._lock) {
          var P = S && w & 1, v = P === (S && f & 1);
          if (f < w && (P = !P), a = P ? 0 : l % u ? u : l, this._lock = 1, this.render(a || (T ? 0 : z(f * g)), n, !u)._lock = 0, this._tTime = l, !n && this.parent && it(this, "onRepeat"), this.vars.repeatRefresh && !T && (this.invalidate()._lock = 1, w = f), a && a !== this._time || m !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (u = this._dur, o = this._tDur, v && (this._lock = 2, a = P ? u : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !T && this.invalidate()), this._lock = 0, !this._ts && !m)
            return this;
          pr(this, T);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (y = en(this, z(a), z(c)), y && (l -= c - (c = y._start))), this._tTime = l, this._time = c, this._act = !x, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = r, a = 0), !a && l && u && !n && !w && (it(this, "onStart"), this._tTime !== l))
        return this;
      if (c >= a && r >= 0)
        for (d = this._first; d; ) {
          if (p = d._next, (d._act || c >= d._start) && d._ts && y !== d) {
            if (d.parent !== this)
              return this.render(r, n, s);
            if (d.render(d._ts > 0 ? (c - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (c - d._start) * d._ts, n, s), c !== this._time || !this._ts && !m) {
              y = 0, p && (l += this._zTime = -A);
              break;
            }
          }
          d = p;
        }
      else {
        d = this._last;
        for (var C = r < 0 ? r : c; d; ) {
          if (p = d._prev, (d._act || C <= d._end) && d._ts && y !== d) {
            if (d.parent !== this)
              return this.render(r, n, s);
            if (d.render(d._ts > 0 ? (C - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (C - d._start) * d._ts, n, s || G && oi(d)), c !== this._time || !this._ts && !m) {
              y = 0, p && (l += this._zTime = C ? -A : A);
              break;
            }
          }
          d = p;
        }
      }
      if (y && !n && (this.pause(), y.render(c >= a ? 0 : -A)._zTime = c >= a ? 1 : -1, this._ts))
        return this._start = b, Me(this), this.render(r, n, s);
      this._onUpdate && !n && it(this, "onUpdate", !0), (l === o && this._tTime >= this.totalDuration() || !l && a) && (b === this._start || Math.abs(x) !== Math.abs(this._ts)) && (this._lock || ((r || !u) && (l === o && this._ts > 0 || !l && this._ts < 0) && Pt(this, 1), !n && !(r < 0 && !a) && (l || a || !o) && (it(this, l === o && r >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(l < o && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, e.add = function(r, n) {
    var s = this;
    if (yt(n) || (n = ot(this, n, r)), !(r instanceof fe)) {
      if (j(r))
        return r.forEach(function(a) {
          return s.add(a, n);
        }), this;
      if (U(r))
        return this.addLabel(r, n);
      if (L(r))
        r = B.delayedCall(0, r);
      else
        return this;
    }
    return this !== r ? _t(this, r, n) : this;
  }, e.getChildren = function(r, n, s, a) {
    r === void 0 && (r = !0), n === void 0 && (n = !0), s === void 0 && (s = !0), a === void 0 && (a = -ht);
    for (var o = [], u = this._first; u; )
      u._start >= a && (u instanceof B ? n && o.push(u) : (s && o.push(u), r && o.push.apply(o, u.getChildren(!0, n, s)))), u = u._next;
    return o;
  }, e.getById = function(r) {
    for (var n = this.getChildren(1, 1, 1), s = n.length; s--; )
      if (n[s].vars.id === r)
        return n[s];
  }, e.remove = function(r) {
    return U(r) ? this.removeLabel(r) : L(r) ? this.killTweensOf(r) : (r.parent === this && ke(this, r), r === this._recent && (this._recent = this._last), It(this));
  }, e.totalTime = function(r, n) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = z(et.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))), h.prototype.totalTime.call(this, r, n), this._forcing = 0, this) : this._tTime;
  }, e.addLabel = function(r, n) {
    return this.labels[r] = ot(this, n), this;
  }, e.removeLabel = function(r) {
    return delete this.labels[r], this;
  }, e.addPause = function(r, n, s) {
    var a = B.delayedCall(0, n || he, s);
    return a.data = "isPause", this._hasPause = 1, _t(this, a, ot(this, r));
  }, e.removePause = function(r) {
    var n = this._first;
    for (r = ot(this, r); n; )
      n._start === r && n.data === "isPause" && Pt(n), n = n._next;
  }, e.killTweensOf = function(r, n, s) {
    for (var a = this.getTweensOf(r, s), o = a.length; o--; )
      xt !== a[o] && a[o].kill(r, n);
    return this;
  }, e.getTweensOf = function(r, n) {
    for (var s = [], a = ut(r), o = this._first, u = yt(n), l; o; )
      o instanceof B ? $r(o._targets, a) && (u ? (!xt || o._initted && o._ts) && o.globalTime(0) <= n && o.globalTime(o.totalDuration()) > n : !n || o.isActive()) && s.push(o) : (l = o.getTweensOf(a, n)).length && s.push.apply(s, l), o = o._next;
    return s;
  }, e.tweenTo = function(r, n) {
    n = n || {};
    var s = this, a = ot(s, r), o = n, u = o.startAt, l = o.onStart, _ = o.onStartParams, c = o.immediateRender, d, p = B.to(s, at({
      ease: n.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: a,
      overwrite: "auto",
      duration: n.duration || Math.abs((a - (u && "time" in u ? u.time : s._time)) / s.timeScale()) || A,
      onStart: function() {
        if (s.pause(), !d) {
          var g = n.duration || Math.abs((a - (u && "time" in u ? u.time : s._time)) / s.timeScale());
          p._dur !== g && Kt(p, g, 0, 1).render(p._time, !0, !0), d = 1;
        }
        l && l.apply(p, _ || []);
      }
    }, n));
    return c ? p.render(0) : p;
  }, e.tweenFromTo = function(r, n, s) {
    return this.tweenTo(n, at({
      startAt: {
        time: ot(this, r)
      }
    }, s));
  }, e.recent = function() {
    return this._recent;
  }, e.nextLabel = function(r) {
    return r === void 0 && (r = this._time), Pi(this, ot(this, r));
  }, e.previousLabel = function(r) {
    return r === void 0 && (r = this._time), Pi(this, ot(this, r), 1);
  }, e.currentLabel = function(r) {
    return arguments.length ? this.seek(r, !0) : this.previousLabel(this._time + A);
  }, e.shiftChildren = function(r, n, s) {
    s === void 0 && (s = 0);
    var a = this._first, o = this.labels, u;
    for (r = z(r); a; )
      a._start >= s && (a._start += r, a._end += r), a = a._next;
    if (n)
      for (u in o)
        o[u] >= s && (o[u] += r);
    return It(this);
  }, e.invalidate = function(r) {
    var n = this._first;
    for (this._lock = 0; n; )
      n.invalidate(r), n = n._next;
    return h.prototype.invalidate.call(this, r);
  }, e.clear = function(r) {
    r === void 0 && (r = !0);
    for (var n = this._first, s; n; )
      s = n._next, this.remove(n), n = s;
    return this._dp && (this._time = this._tTime = this._pTime = 0), r && (this.labels = {}), It(this);
  }, e.totalDuration = function(r) {
    var n = 0, s = this, a = s._last, o = ht, u, l, _;
    if (arguments.length)
      return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -r : r));
    if (s._dirty) {
      for (_ = s.parent; a; )
        u = a._prev, a._dirty && a.totalDuration(), l = a._start, l > o && s._sort && a._ts && !s._lock ? (s._lock = 1, _t(s, a, l - a._delay, 1)._lock = 0) : o = l, l < 0 && a._ts && (n -= l, (!_ && !s._dp || _ && _.smoothChildTiming) && (s._start += z(l / s._ts), s._time -= l, s._tTime -= l), s.shiftChildren(-l, !1, -1 / 0), o = 0), a._end > n && a._ts && (n = a._end), a = u;
      Kt(s, s === F && s._time > n ? s._time : n, 1, 1), s._dirty = 0;
    }
    return s._tDur;
  }, t.updateRoot = function(r) {
    if (F._ts && (Ki(F, Se(r, F)), ji = et.frame), et.frame >= wi) {
      wi += nt.autoSleep || 120;
      var n = F._first;
      if ((!n || !n._ts) && nt.autoSleep && et._listeners.length < 2) {
        for (; n && !n._ts; )
          n = n._next;
        n || et.sleep();
      }
    }
  }, t;
})(fe);
at($.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var yn = function(t, e, i, r, n, s, a) {
  var o = new Z(this._pt, t, e, 0, 1, Tr, null, n), u = 0, l = 0, _, c, d, p, f, g, m, y;
  for (o.b = i, o.e = r, i += "", r += "", (m = ~r.indexOf("random(")) && (r = ue(r)), s && (y = [i, r], s(y, t, e), i = y[0], r = y[1]), c = i.match(Ae) || []; _ = Ae.exec(r); )
    p = _[0], f = r.substring(u, _.index), d ? d = (d + 1) % 5 : f.substr(-5) === "rgba(" && (d = 1), p !== c[l++] && (g = parseFloat(c[l - 1]) || 0, o._pt = {
      _next: o._pt,
      p: f || l === 1 ? f : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: g,
      c: p.charAt(1) === "=" ? Ut(g, p) - g : parseFloat(p) - g,
      m: d && d < 4 ? Math.round : 0
    }, u = Ae.lastIndex);
  return o.c = u < r.length ? r.substring(u, r.length) : "", o.fp = a, (Ui.test(r) || m) && (o.e = 0), this._pt = o, o;
}, hi = function(t, e, i, r, n, s, a, o, u, l) {
  L(r) && (r = r(n || 0, t, s));
  var _ = t[e], c = i !== "get" ? i : L(_) ? u ? t[e.indexOf("set") || !L(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : _, d = L(_) ? u ? Tn : wr : li, p;
  if (U(r) && (~r.indexOf("random(") && (r = ue(r)), r.charAt(1) === "=" && (p = Ut(c, r) + (W(c) || 0), (p || p === 0) && (r = p))), !l || c !== r || je)
    return !isNaN(c * r) && r !== "" ? (p = new Z(this._pt, t, e, +c || 0, r - (c || 0), typeof _ == "boolean" ? Pn : br, 0, d), u && (p.fp = u), a && p.modifier(a, this, t), this._pt = p) : (!_ && !(e in t) && ri(e, r), yn.call(this, t, e, c, r, d, o || nt.stringFilter, u));
}, vn = function(t, e, i, r, n) {
  if (L(t) && (t = ae(t, n, e, i, r)), !dt(t) || t.style && t.nodeType || j(t) || Yi(t))
    return U(t) ? ae(t, n, e, i, r) : t;
  var s = {}, a;
  for (a in t)
    s[a] = ae(t[a], n, e, i, r);
  return s;
}, yr = function(t, e, i, r, n, s) {
  var a, o, u, l;
  if (tt[t] && (a = new tt[t]()).init(n, a.rawVars ? e[t] : vn(e[t], r, n, s, i), i, r, s) !== !1 && (i._pt = o = new Z(i._pt, n, t, 0, 1, a.render, a, 0, a.priority), i !== Xt))
    for (u = i._ptLookup[i._targets.indexOf(n)], l = a._props.length; l--; )
      u[a._props[l]] = o;
  return a;
}, xt, je, ui = function h(t, e, i) {
  var r = t.vars, n = r.ease, s = r.startAt, a = r.immediateRender, o = r.lazy, u = r.onUpdate, l = r.runBackwards, _ = r.yoyoEase, c = r.keyframes, d = r.autoRevert, p = t._dur, f = t._startAt, g = t._targets, m = t.parent, y = m && m.data === "nested" ? m.vars.targets : g, x = t._overwrite === "auto" && !Je, b = t.timeline, w, S, T, P, v, C, k, M, R, q, Y, V, X;
  if (b && (!c || !n) && (n = "none"), t._ease = Lt(n, Wt.ease), t._yEase = _ ? dr(Lt(_ === !0 ? n : _, Wt.ease)) : 0, _ && t._yoyo && !t._repeat && (_ = t._yEase, t._yEase = t._ease, t._ease = _), t._from = !b && !!r.runBackwards, !b || c && !r.stagger) {
    if (M = g[0] ? Ft(g[0]).harness : 0, V = M && r[M.prop], w = Te(r, ni), f && (f._zTime < 0 && f.progress(1), e < 0 && l && a && !d ? f.render(-1, !0) : f.revert(l && p ? ye : Wr), f._lazy = 0), s) {
      if (Pt(t._startAt = B.set(g, at({
        data: "isStart",
        overwrite: !1,
        parent: m,
        immediateRender: !0,
        lazy: !f && K(o),
        startAt: null,
        delay: 0,
        onUpdate: u && function() {
          return it(t, "onUpdate");
        },
        stagger: 0
      }, s))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (G || !a && !d) && t._startAt.revert(ye), a && p && e <= 0 && i <= 0) {
        e && (t._zTime = e);
        return;
      }
    } else if (l && p && !f) {
      if (e && (a = !1), T = at({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: a && !f && K(o),
        immediateRender: a,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: m
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, w), V && (T[M.prop] = V), Pt(t._startAt = B.set(g, T)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (G ? t._startAt.revert(ye) : t._startAt.render(-1, !0)), t._zTime = e, !a)
        h(t._startAt, A, A);
      else if (!e)
        return;
    }
    for (t._pt = t._ptCache = 0, o = p && K(o) || o && !p, S = 0; S < g.length; S++) {
      if (v = g[S], k = v._gsap || ai(g)[S]._gsap, t._ptLookup[S] = q = {}, Ye[k.id] && Tt.length && be(), Y = y === g ? S : y.indexOf(v), M && (R = new M()).init(v, V || w, t, Y, y) !== !1 && (t._pt = P = new Z(t._pt, v, R.name, 0, 1, R.render, R, 0, R.priority), R._props.forEach(function(lt) {
        q[lt] = P;
      }), R.priority && (C = 1)), !M || V)
        for (T in w)
          tt[T] && (R = yr(T, w, t, Y, v, y)) ? R.priority && (C = 1) : q[T] = P = hi.call(t, v, T, "get", w[T], Y, y, 0, r.stringFilter);
      t._op && t._op[S] && t.kill(v, t._op[S]), x && t._pt && (xt = t, F.killTweensOf(v, q, t.globalTime(e)), X = !t.parent, xt = 0), t._pt && o && (Ye[k.id] = 1);
    }
    C && Sr(t), t._onInit && t._onInit(t);
  }
  t._onUpdate = u, t._initted = (!t._op || t._pt) && !X, c && e <= 0 && b.render(ht, !0, !0);
}, xn = function(t, e, i, r, n, s, a, o) {
  var u = (t._pt && t._ptCache || (t._ptCache = {}))[e], l, _, c, d;
  if (!u)
    for (u = t._ptCache[e] = [], c = t._ptLookup, d = t._targets.length; d--; ) {
      if (l = c[d][e], l && l.d && l.d._pt)
        for (l = l.d._pt; l && l.p !== e && l.fp !== e; )
          l = l._next;
      if (!l)
        return je = 1, t.vars[e] = "+=0", ui(t, a), je = 0, o ? oe(e + " not eligible for reset") : 1;
      u.push(l);
    }
  for (d = u.length; d--; )
    _ = u[d], l = _._pt || _, l.s = (r || r === 0) && !n ? r : l.s + (r || 0) + s * l.c, l.c = i - l.s, _.e && (_.e = N(i) + W(_.e)), _.b && (_.b = l.s + W(_.b));
}, wn = function(t, e) {
  var i = t[0] ? Ft(t[0]).harness : 0, r = i && i.aliases, n, s, a, o;
  if (!r)
    return e;
  n = jt({}, e);
  for (s in r)
    if (s in n)
      for (o = r[s].split(","), a = o.length; a--; )
        n[o[a]] = n[s];
  return n;
}, bn = function(t, e, i, r) {
  var n = e.ease || r || "power1.inOut", s, a;
  if (j(e))
    a = i[t] || (i[t] = []), e.forEach(function(o, u) {
      return a.push({
        t: u / (e.length - 1) * 100,
        v: o,
        e: n
      });
    });
  else
    for (s in e)
      a = i[s] || (i[s] = []), s === "ease" || a.push({
        t: parseFloat(t),
        v: e[s],
        e: n
      });
}, ae = function(t, e, i, r, n) {
  return L(t) ? t.call(e, i, r, n) : U(t) && ~t.indexOf("random(") ? ue(t) : t;
}, vr = si + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", xr = {};
Q(vr + ",id,stagger,delay,duration,paused,scrollTrigger", function(h) {
  return xr[h] = 1;
});
var B = /* @__PURE__ */ (function(h) {
  Vi(t, h);
  function t(i, r, n, s) {
    var a;
    typeof r == "number" && (n.duration = r, r = n, n = null), a = h.call(this, s ? r : ne(r)) || this;
    var o = a.vars, u = o.duration, l = o.delay, _ = o.immediateRender, c = o.stagger, d = o.overwrite, p = o.keyframes, f = o.defaults, g = o.scrollTrigger, m = o.yoyoEase, y = r.parent || F, x = (j(i) || Yi(i) ? yt(i[0]) : "length" in r) ? [i] : ut(i), b, w, S, T, P, v, C, k;
    if (a._targets = x.length ? ai(x) : oe("GSAP target " + i + " not found. https://gsap.com", !nt.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = d, p || c || ge(u) || ge(l)) {
      if (r = a.vars, b = a.timeline = new $({
        data: "nested",
        defaults: f || {},
        targets: y && y.data === "nested" ? y.vars.targets : x
      }), b.kill(), b.parent = b._dp = gt(a), b._start = 0, c || ge(u) || ge(l)) {
        if (T = x.length, C = c && nr(c), dt(c))
          for (P in c)
            ~vr.indexOf(P) && (k || (k = {}), k[P] = c[P]);
        for (w = 0; w < T; w++)
          S = Te(r, xr), S.stagger = 0, m && (S.yoyoEase = m), k && jt(S, k), v = x[w], S.duration = +ae(u, gt(a), w, v, x), S.delay = (+ae(l, gt(a), w, v, x) || 0) - a._delay, !c && T === 1 && S.delay && (a._delay = l = S.delay, a._start += l, S.delay = 0), b.to(v, S, C ? C(w, v, x) : 0), b._ease = O.none;
        b.duration() ? u = l = 0 : a.timeline = 0;
      } else if (p) {
        ne(at(b.vars.defaults, {
          ease: "none"
        })), b._ease = Lt(p.ease || r.ease || "none");
        var M = 0, R, q, Y;
        if (j(p))
          p.forEach(function(V) {
            return b.to(x, V, ">");
          }), b.duration();
        else {
          S = {};
          for (P in p)
            P === "ease" || P === "easeEach" || bn(P, p[P], S, p.easeEach);
          for (P in S)
            for (R = S[P].sort(function(V, X) {
              return V.t - X.t;
            }), M = 0, w = 0; w < R.length; w++)
              q = R[w], Y = {
                ease: q.e,
                duration: (q.t - (w ? R[w - 1].t : 0)) / 100 * u
              }, Y[P] = q.v, b.to(x, Y, M), M += Y.duration;
          b.duration() < u && b.to({}, {
            duration: u - b.duration()
          });
        }
      }
      u || a.duration(u = b.duration());
    } else
      a.timeline = 0;
    return d === !0 && !Je && (xt = gt(a), F.killTweensOf(x), xt = 0), _t(y, gt(a), n), r.reversed && a.reverse(), r.paused && a.paused(!0), (_ || !u && !p && a._start === z(y._time) && K(_) && Hr(gt(a)) && y.data !== "nested") && (a._tTime = -A, a.render(Math.max(0, -l) || 0)), g && tr(gt(a), g), a;
  }
  var e = t.prototype;
  return e.render = function(r, n, s) {
    var a = this._time, o = this._tDur, u = this._dur, l = r < 0, _ = r > o - A && !l ? o : r < A ? 0 : r, c, d, p, f, g, m, y, x, b;
    if (!u)
      tn(this, r, n, s);
    else if (_ !== this._tTime || !r || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== l || this._lazy) {
      if (c = _, x = this.timeline, this._repeat) {
        if (f = u + this._rDelay, this._repeat < -1 && l)
          return this.totalTime(f * 100 + r, n, s);
        if (c = z(_ % f), _ === o ? (p = this._repeat, c = u) : (g = z(_ / f), p = ~~g, p && p === g ? (c = u, p--) : c > u && (c = u)), m = this._yoyo && p & 1, m && (b = this._yEase, c = u - c), g = $t(this._tTime, f), c === a && !s && this._initted && p === g)
          return this._tTime = _, this;
        p !== g && (x && this._yEase && pr(x, m), this.vars.repeatRefresh && !m && !this._lock && c !== f && this._initted && (this._lock = s = 1, this.render(z(f * p), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (er(this, l ? r : c, s, n, _))
          return this._tTime = 0, this;
        if (a !== this._time && !(s && this.vars.repeatRefresh && p !== g))
          return this;
        if (u !== this._dur)
          return this.render(r, n, s);
      }
      if (this._tTime = _, this._time = c, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = y = (b || this._ease)(c / u), this._from && (this.ratio = y = 1 - y), !a && _ && !n && !g && (it(this, "onStart"), this._tTime !== _))
        return this;
      for (d = this._pt; d; )
        d.r(y, d.d), d = d._next;
      x && x.render(r < 0 ? r : x._dur * x._ease(c / this._dur), n, s) || this._startAt && (this._zTime = r), this._onUpdate && !n && (l && Xe(this, r, n, s), it(this, "onUpdate")), this._repeat && p !== g && this.vars.onRepeat && !n && this.parent && it(this, "onRepeat"), (_ === this._tDur || !_) && this._tTime === _ && (l && !this._onUpdate && Xe(this, r, !0, !0), (r || !u) && (_ === this._tDur && this._ts > 0 || !_ && this._ts < 0) && Pt(this, 1), !n && !(l && !a) && (_ || a || m) && (it(this, _ === o ? "onComplete" : "onReverseComplete", !0), this._prom && !(_ < o && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, e.targets = function() {
    return this._targets;
  }, e.invalidate = function(r) {
    return (!r || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(r), h.prototype.invalidate.call(this, r);
  }, e.resetTo = function(r, n, s, a, o) {
    le || et.wake(), this._ts || this.play();
    var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts), l;
    return this._initted || ui(this, u), l = this._ease(u / this._dur), xn(this, r, n, s, a, l, u, o) ? this.resetTo(r, n, s, a, 1) : (De(this, 0), this.parent || Hi(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, e.kill = function(r, n) {
    if (n === void 0 && (n = "all"), !r && (!n || n === "all"))
      return this._lazy = this._pt = 0, this.parent ? ie(this) : this.scrollTrigger && this.scrollTrigger.kill(!!G), this;
    if (this.timeline) {
      var s = this.timeline.totalDuration();
      return this.timeline.killTweensOf(r, n, xt && xt.vars.overwrite !== !0)._first || ie(this), this.parent && s !== this.timeline.totalDuration() && Kt(this, this._dur * this.timeline._tDur / s, 0, 1), this;
    }
    var a = this._targets, o = r ? ut(r) : a, u = this._ptLookup, l = this._pt, _, c, d, p, f, g, m;
    if ((!n || n === "all") && Qr(a, o))
      return n === "all" && (this._pt = 0), ie(this);
    for (_ = this._op = this._op || [], n !== "all" && (U(n) && (f = {}, Q(n, function(y) {
      return f[y] = 1;
    }), n = f), n = wn(a, n)), m = a.length; m--; )
      if (~o.indexOf(a[m])) {
        c = u[m], n === "all" ? (_[m] = n, p = c, d = {}) : (d = _[m] = _[m] || {}, p = n);
        for (f in p)
          g = c && c[f], g && ((!("kill" in g.d) || g.d.kill(f) === !0) && ke(this, g, "_pt"), delete c[f]), d !== "all" && (d[f] = 1);
      }
    return this._initted && !this._pt && l && ie(this), this;
  }, t.to = function(r, n) {
    return new t(r, n, arguments[2]);
  }, t.from = function(r, n) {
    return se(1, arguments);
  }, t.delayedCall = function(r, n, s, a) {
    return new t(n, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: r,
      onComplete: n,
      onReverseComplete: n,
      onCompleteParams: s,
      onReverseCompleteParams: s,
      callbackScope: a
    });
  }, t.fromTo = function(r, n, s) {
    return se(2, arguments);
  }, t.set = function(r, n) {
    return n.duration = 0, n.repeatDelay || (n.repeat = 0), new t(r, n);
  }, t.killTweensOf = function(r, n, s) {
    return F.killTweensOf(r, n, s);
  }, t;
})(fe);
at(B.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
Q("staggerTo,staggerFrom,staggerFromTo", function(h) {
  B[h] = function() {
    var t = new $(), e = qe.call(arguments, 0);
    return e.splice(h === "staggerFromTo" ? 5 : 4, 0, 0), t[h].apply(t, e);
  };
});
var li = function(t, e, i) {
  return t[e] = i;
}, wr = function(t, e, i) {
  return t[e](i);
}, Tn = function(t, e, i, r) {
  return t[e](r.fp, i);
}, Sn = function(t, e, i) {
  return t.setAttribute(e, i);
}, fi = function(t, e) {
  return L(t[e]) ? wr : ti(t[e]) && t.setAttribute ? Sn : li;
}, br = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
}, Pn = function(t, e) {
  return e.set(e.t, e.p, !!(e.s + e.c * t), e);
}, Tr = function(t, e) {
  var i = e._pt, r = "";
  if (!t && e.b)
    r = e.b;
  else if (t === 1 && e.e)
    r = e.e;
  else {
    for (; i; )
      r = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round((i.s + i.c * t) * 1e4) / 1e4) + r, i = i._next;
    r += e.c;
  }
  e.set(e.t, e.p, r, e);
}, _i = function(t, e) {
  for (var i = e._pt; i; )
    i.r(t, i.d), i = i._next;
}, Cn = function(t, e, i, r) {
  for (var n = this._pt, s; n; )
    s = n._next, n.p === r && n.modifier(t, e, i), n = s;
}, On = function(t) {
  for (var e = this._pt, i, r; e; )
    r = e._next, e.p === t && !e.op || e.op === t ? ke(this, e, "_pt") : e.dep || (i = 1), e = r;
  return !i;
}, kn = function(t, e, i, r) {
  r.mSet(t, e, r.m.call(r.tween, i, r.mt), r);
}, Sr = function(t) {
  for (var e = t._pt, i, r, n, s; e; ) {
    for (i = e._next, r = n; r && r.pr > e.pr; )
      r = r._next;
    (e._prev = r ? r._prev : s) ? e._prev._next = e : n = e, (e._next = r) ? r._prev = e : s = e, e = i;
  }
  t._pt = n;
}, Z = /* @__PURE__ */ (function() {
  function h(e, i, r, n, s, a, o, u, l) {
    this.t = i, this.s = n, this.c = s, this.p = r, this.r = a || br, this.d = o || this, this.set = u || li, this.pr = l || 0, this._next = e, e && (e._prev = this);
  }
  var t = h.prototype;
  return t.modifier = function(i, r, n) {
    this.mSet = this.mSet || this.set, this.set = kn, this.m = i, this.mt = n, this.tween = r;
  }, h;
})();
Q(si + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(h) {
  return ni[h] = 1;
});
st.TweenMax = st.TweenLite = B;
st.TimelineLite = st.TimelineMax = $;
F = new $({
  sortChildren: !1,
  defaults: Wt,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
nt.stringFilter = cr;
var Nt = [], xe = {}, Mn = [], Oi = 0, Dn = 0, Ie = function(t) {
  return (xe[t] || Mn).map(function(e) {
    return e();
  });
}, $e = function() {
  var t = Date.now(), e = [];
  t - Oi > 2 && (Ie("matchMediaInit"), Nt.forEach(function(i) {
    var r = i.queries, n = i.conditions, s, a, o, u;
    for (a in r)
      s = ft.matchMedia(r[a]).matches, s && (o = 1), s !== n[a] && (n[a] = s, u = 1);
    u && (i.revert(), o && e.push(i));
  }), Ie("matchMediaRevert"), e.forEach(function(i) {
    return i.onMatch(i, function(r) {
      return i.add(null, r);
    });
  }), Oi = t, Ie("matchMedia"));
}, Pr = /* @__PURE__ */ (function() {
  function h(e, i) {
    this.selector = i && Ge(i), this.data = [], this._r = [], this.isReverted = !1, this.id = Dn++, e && this.add(e);
  }
  var t = h.prototype;
  return t.add = function(i, r, n) {
    L(i) && (n = r, r = i, i = L);
    var s = this, a = function() {
      var u = E, l = s.selector, _;
      return u && u !== s && u.data.push(s), n && (s.selector = Ge(n)), E = s, _ = r.apply(s, arguments), L(_) && s._r.push(_), E = u, s.selector = l, s.isReverted = !1, _;
    };
    return s.last = a, i === L ? a(s, function(o) {
      return s.add(null, o);
    }) : i ? s[i] = a : a;
  }, t.ignore = function(i) {
    var r = E;
    E = null, i(this), E = r;
  }, t.getTweens = function() {
    var i = [];
    return this.data.forEach(function(r) {
      return r instanceof h ? i.push.apply(i, r.getTweens()) : r instanceof B && !(r.parent && r.parent.data === "nested") && i.push(r);
    }), i;
  }, t.clear = function() {
    this._r.length = this.data.length = 0;
  }, t.kill = function(i, r) {
    var n = this;
    if (i ? (function() {
      for (var a = n.getTweens(), o = n.data.length, u; o--; )
        u = n.data[o], u.data === "isFlip" && (u.revert(), u.getChildren(!0, !0, !1).forEach(function(l) {
          return a.splice(a.indexOf(l), 1);
        }));
      for (a.map(function(l) {
        return {
          g: l._dur || l._delay || l._sat && !l._sat.vars.immediateRender ? l.globalTime(0) : -1 / 0,
          t: l
        };
      }).sort(function(l, _) {
        return _.g - l.g || -1 / 0;
      }).forEach(function(l) {
        return l.t.revert(i);
      }), o = n.data.length; o--; )
        u = n.data[o], u instanceof $ ? u.data !== "nested" && (u.scrollTrigger && u.scrollTrigger.revert(), u.kill()) : !(u instanceof B) && u.revert && u.revert(i);
      n._r.forEach(function(l) {
        return l(i, n);
      }), n.isReverted = !0;
    })() : this.data.forEach(function(a) {
      return a.kill && a.kill();
    }), this.clear(), r)
      for (var s = Nt.length; s--; )
        Nt[s].id === this.id && Nt.splice(s, 1);
  }, t.revert = function(i) {
    this.kill(i || {});
  }, h;
})(), An = /* @__PURE__ */ (function() {
  function h(e) {
    this.contexts = [], this.scope = e, E && E.data.push(this);
  }
  var t = h.prototype;
  return t.add = function(i, r, n) {
    dt(i) || (i = {
      matches: i
    });
    var s = new Pr(0, n || this.scope), a = s.conditions = {}, o, u, l;
    E && !s.selector && (s.selector = E.selector), this.contexts.push(s), r = s.add("onMatch", r), s.queries = i;
    for (u in i)
      u === "all" ? l = 1 : (o = ft.matchMedia(i[u]), o && (Nt.indexOf(s) < 0 && Nt.push(s), (a[u] = o.matches) && (l = 1), o.addListener ? o.addListener($e) : o.addEventListener("change", $e)));
    return l && r(s, function(_) {
      return s.add(null, _);
    }), this;
  }, t.revert = function(i) {
    this.kill(i || {});
  }, t.kill = function(i) {
    this.contexts.forEach(function(r) {
      return r.kill(i, !0);
    });
  }, h;
})(), Pe = {
  registerPlugin: function() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
      e[i] = arguments[i];
    e.forEach(function(r) {
      return lr(r);
    });
  },
  timeline: function(t) {
    return new $(t);
  },
  getTweensOf: function(t, e) {
    return F.getTweensOf(t, e);
  },
  getProperty: function(t, e, i, r) {
    U(t) && (t = ut(t)[0]);
    var n = Ft(t || {}).get, s = i ? Zi : Qi;
    return i === "native" && (i = ""), t && (e ? s((tt[e] && tt[e].get || n)(t, e, i, r)) : function(a, o, u) {
      return s((tt[a] && tt[a].get || n)(t, a, o, u));
    });
  },
  quickSetter: function(t, e, i) {
    if (t = ut(t), t.length > 1) {
      var r = t.map(function(l) {
        return J.quickSetter(l, e, i);
      }), n = r.length;
      return function(l) {
        for (var _ = n; _--; )
          r[_](l);
      };
    }
    t = t[0] || {};
    var s = tt[e], a = Ft(t), o = a.harness && (a.harness.aliases || {})[e] || e, u = s ? function(l) {
      var _ = new s();
      Xt._pt = 0, _.init(t, i ? l + i : l, Xt, 0, [t]), _.render(1, _), Xt._pt && _i(1, Xt);
    } : a.set(t, o);
    return s ? u : function(l) {
      return u(t, o, i ? l + i : l, a, 1);
    };
  },
  quickTo: function(t, e, i) {
    var r, n = J.to(t, at((r = {}, r[e] = "+=0.1", r.paused = !0, r.stagger = 0, r), i || {})), s = function(o, u, l) {
      return n.resetTo(e, o, u, l);
    };
    return s.tween = n, s;
  },
  isTweening: function(t) {
    return F.getTweensOf(t, !0).length > 0;
  },
  defaults: function(t) {
    return t && t.ease && (t.ease = Lt(t.ease, Wt.ease)), bi(Wt, t || {});
  },
  config: function(t) {
    return bi(nt, t || {});
  },
  registerEffect: function(t) {
    var e = t.name, i = t.effect, r = t.plugins, n = t.defaults, s = t.extendTimeline;
    (r || "").split(",").forEach(function(a) {
      return a && !tt[a] && !st[a] && oe(e + " effect requires " + a + " plugin.");
    }), Re[e] = function(a, o, u) {
      return i(ut(a), at(o || {}, n), u);
    }, s && ($.prototype[e] = function(a, o, u) {
      return this.add(Re[e](a, dt(o) ? o : (u = o) && {}, this), u);
    });
  },
  registerEase: function(t, e) {
    O[t] = Lt(e);
  },
  parseEase: function(t, e) {
    return arguments.length ? Lt(t, e) : O;
  },
  getById: function(t) {
    return F.getById(t);
  },
  exportRoot: function(t, e) {
    t === void 0 && (t = {});
    var i = new $(t), r, n;
    for (i.smoothChildTiming = K(t.smoothChildTiming), F.remove(i), i._dp = 0, i._time = i._tTime = F._time, r = F._first; r; )
      n = r._next, (e || !(!r._dur && r instanceof B && r.vars.onComplete === r._targets[0])) && _t(i, r, r._start - r._delay), r = n;
    return _t(F, i, 0), i;
  },
  context: function(t, e) {
    return t ? new Pr(t, e) : E;
  },
  matchMedia: function(t) {
    return new An(t);
  },
  matchMediaRefresh: function() {
    return Nt.forEach(function(t) {
      var e = t.conditions, i, r;
      for (r in e)
        e[r] && (e[r] = !1, i = 1);
      i && t.revert();
    }) || $e();
  },
  addEventListener: function(t, e) {
    var i = xe[t] || (xe[t] = []);
    ~i.indexOf(e) || i.push(e);
  },
  removeEventListener: function(t, e) {
    var i = xe[t], r = i && i.indexOf(e);
    r >= 0 && i.splice(r, 1);
  },
  utils: {
    wrap: un,
    wrapYoyo: ln,
    distribute: nr,
    random: ar,
    snap: sr,
    normalize: hn,
    getUnit: W,
    clamp: nn,
    splitColor: fr,
    toArray: ut,
    selector: Ge,
    mapRange: hr,
    pipe: an,
    unitize: on,
    interpolate: fn,
    shuffle: rr
  },
  install: Gi,
  effects: Re,
  ticker: et,
  updateRoot: $.updateRoot,
  plugins: tt,
  globalTimeline: F,
  core: {
    PropTween: Z,
    globals: Wi,
    Tween: B,
    Timeline: $,
    Animation: fe,
    getCache: Ft,
    _removeLinkedListItem: ke,
    reverting: function() {
      return G;
    },
    context: function(t) {
      return t && E && (E.data.push(t), t._ctx = E), E;
    },
    suppressOverwrites: function(t) {
      return Je = t;
    }
  }
};
Q("to,from,fromTo,delayedCall,set,killTweensOf", function(h) {
  return Pe[h] = B[h];
});
et.add($.updateRoot);
Xt = Pe.to({}, {
  duration: 0
});
var Rn = function(t, e) {
  for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
    i = i._next;
  return i;
}, En = function(t, e) {
  var i = t._targets, r, n, s;
  for (r in e)
    for (n = i.length; n--; )
      s = t._ptLookup[n][r], s && (s = s.d) && (s._pt && (s = Rn(s, r)), s && s.modifier && s.modifier(e[r], t, i[n], r));
}, Le = function(t, e) {
  return {
    name: t,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(r, n, s) {
      s._onInit = function(a) {
        var o, u;
        if (U(n) && (o = {}, Q(n, function(l) {
          return o[l] = 1;
        }), n = o), e) {
          o = {};
          for (u in n)
            o[u] = e(n[u]);
          n = o;
        }
        En(a, n);
      };
    }
  };
}, J = Pe.registerPlugin({
  name: "attr",
  init: function(t, e, i, r, n) {
    var s, a, o;
    this.tween = i;
    for (s in e)
      o = t.getAttribute(s) || "", a = this.add(t, "setAttribute", (o || 0) + "", e[s], r, n, 0, 0, s), a.op = s, a.b = o, this._props.push(s);
  },
  render: function(t, e) {
    for (var i = e._pt; i; )
      G ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), i = i._next;
  }
}, {
  name: "endArray",
  headless: 1,
  init: function(t, e) {
    for (var i = e.length; i--; )
      this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1);
  }
}, Le("roundProps", We), Le("modifiers"), Le("snap", sr)) || Pe;
B.version = $.version = J.version = "3.14.2";
qi = 1;
ei() && Qt();
O.Power0;
O.Power1;
O.Power2;
O.Power3;
O.Power4;
O.Linear;
O.Quad;
O.Cubic;
O.Quart;
O.Quint;
O.Strong;
O.Elastic;
O.Back;
O.SteppedEase;
O.Bounce;
O.Sine;
O.Expo;
O.Circ;
/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var ki, wt, qt, ci, zt, Mi, di, zn = function() {
  return typeof window < "u";
}, vt = {}, Et = 180 / Math.PI, Gt = Math.PI / 180, Bt = Math.atan2, Di = 1e8, pi = /([A-Z])/g, Fn = /(left|right|width|margin|padding|x)/i, In = /[\s,\(]\S/, ct = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, Ke = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, Ln = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, Nn = function(t, e) {
  return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, Vn = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, Bn = function(t, e) {
  var i = e.s + e.c * t;
  e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
}, Cr = function(t, e) {
  return e.set(e.t, e.p, t ? e.e : e.b, e);
}, Or = function(t, e) {
  return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
}, Yn = function(t, e, i) {
  return t.style[e] = i;
}, Xn = function(t, e, i) {
  return t.style.setProperty(e, i);
}, Un = function(t, e, i) {
  return t._gsap[e] = i;
}, qn = function(t, e, i) {
  return t._gsap.scaleX = t._gsap.scaleY = i;
}, Gn = function(t, e, i, r, n) {
  var s = t._gsap;
  s.scaleX = s.scaleY = i, s.renderTransform(n, s);
}, Wn = function(t, e, i, r, n) {
  var s = t._gsap;
  s[e] = i, s.renderTransform(n, s);
}, I = "transform", H = I + "Origin", jn = function h(t, e) {
  var i = this, r = this.target, n = r.style, s = r._gsap;
  if (t in vt && n) {
    if (this.tfm = this.tfm || {}, t !== "transform")
      t = ct[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(a) {
        return i.tfm[a] = mt(r, a);
      }) : this.tfm[t] = s.x ? s[t] : mt(r, t), t === H && (this.tfm.zOrigin = s.zOrigin);
    else
      return ct.transform.split(",").forEach(function(a) {
        return h.call(i, a, e);
      });
    if (this.props.indexOf(I) >= 0)
      return;
    s.svg && (this.svgo = r.getAttribute("data-svg-origin"), this.props.push(H, e, "")), t = I;
  }
  (n || e) && this.props.push(t, e, n[t]);
}, kr = function(t) {
  t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
}, $n = function() {
  var t = this.props, e = this.target, i = e.style, r = e._gsap, n, s;
  for (n = 0; n < t.length; n += 3)
    t[n + 1] ? t[n + 1] === 2 ? e[t[n]](t[n + 2]) : e[t[n]] = t[n + 2] : t[n + 2] ? i[t[n]] = t[n + 2] : i.removeProperty(t[n].substr(0, 2) === "--" ? t[n] : t[n].replace(pi, "-$1").toLowerCase());
  if (this.tfm) {
    for (s in this.tfm)
      r[s] = this.tfm[s];
    r.svg && (r.renderTransform(), e.setAttribute("data-svg-origin", this.svgo || "")), n = di(), (!n || !n.isStart) && !i[I] && (kr(i), r.zOrigin && i[H] && (i[H] += " " + r.zOrigin + "px", r.zOrigin = 0, r.renderTransform()), r.uncache = 1);
  }
}, Mr = function(t, e) {
  var i = {
    target: t,
    props: [],
    revert: $n,
    save: jn
  };
  return t._gsap || J.core.getCache(t), e && t.style && t.nodeType && e.split(",").forEach(function(r) {
    return i.save(r);
  }), i;
}, Dr, Qe = function(t, e) {
  var i = wt.createElementNS ? wt.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : wt.createElement(t);
  return i && i.style ? i : wt.createElement(t);
}, rt = function h(t, e, i) {
  var r = getComputedStyle(t);
  return r[e] || r.getPropertyValue(e.replace(pi, "-$1").toLowerCase()) || r.getPropertyValue(e) || !i && h(t, Zt(e) || e, 1) || "";
}, Ai = "O,Moz,ms,Ms,Webkit".split(","), Zt = function(t, e, i) {
  var r = e || zt, n = r.style, s = 5;
  if (t in n && !i)
    return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); s-- && !(Ai[s] + t in n); )
    ;
  return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? Ai[s] : "") + t;
}, Ze = function() {
  zn() && window.document && (ki = window, wt = ki.document, qt = wt.documentElement, zt = Qe("div") || {
    style: {}
  }, Qe("div"), I = Zt(I), H = I + "Origin", zt.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Dr = !!Zt("perspective"), di = J.core.reverting, ci = 1);
}, Ri = function(t) {
  var e = t.ownerSVGElement, i = Qe("svg", e && e.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = t.cloneNode(!0), n;
  r.style.display = "block", i.appendChild(r), qt.appendChild(i);
  try {
    n = r.getBBox();
  } catch {
  }
  return i.removeChild(r), qt.removeChild(i), n;
}, Ei = function(t, e) {
  for (var i = e.length; i--; )
    if (t.hasAttribute(e[i]))
      return t.getAttribute(e[i]);
}, Ar = function(t) {
  var e, i;
  try {
    e = t.getBBox();
  } catch {
    e = Ri(t), i = 1;
  }
  return e && (e.width || e.height) || i || (e = Ri(t)), e && !e.width && !e.x && !e.y ? {
    x: +Ei(t, ["x", "cx", "x1"]) || 0,
    y: +Ei(t, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : e;
}, Rr = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Ar(t));
}, Ct = function(t, e) {
  if (e) {
    var i = t.style, r;
    e in vt && e !== H && (e = I), i.removeProperty ? (r = e.substr(0, 2), (r === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), i.removeProperty(r === "--" ? e : e.replace(pi, "-$1").toLowerCase())) : i.removeAttribute(e);
  }
}, bt = function(t, e, i, r, n, s) {
  var a = new Z(t._pt, e, i, 0, 1, s ? Or : Cr);
  return t._pt = a, a.b = r, a.e = n, t._props.push(i), a;
}, zi = {
  deg: 1,
  rad: 1,
  turn: 1
}, Kn = {
  grid: 1,
  flex: 1
}, Ot = function h(t, e, i, r) {
  var n = parseFloat(i) || 0, s = (i + "").trim().substr((n + "").length) || "px", a = zt.style, o = Fn.test(e), u = t.tagName.toLowerCase() === "svg", l = (u ? "client" : "offset") + (o ? "Width" : "Height"), _ = 100, c = r === "px", d = r === "%", p, f, g, m;
  if (r === s || !n || zi[r] || zi[s])
    return n;
  if (s !== "px" && !c && (n = h(t, e, i, "px")), m = t.getCTM && Rr(t), (d || s === "%") && (vt[e] || ~e.indexOf("adius")))
    return p = m ? t.getBBox()[o ? "width" : "height"] : t[l], N(d ? n / p * _ : n / 100 * p);
  if (a[o ? "width" : "height"] = _ + (c ? s : r), f = r !== "rem" && ~e.indexOf("adius") || r === "em" && t.appendChild && !u ? t : t.parentNode, m && (f = (t.ownerSVGElement || {}).parentNode), (!f || f === wt || !f.appendChild) && (f = wt.body), g = f._gsap, g && d && g.width && o && g.time === et.time && !g.uncache)
    return N(n / g.width * _);
  if (d && (e === "height" || e === "width")) {
    var y = t.style[e];
    t.style[e] = _ + r, p = t[l], y ? t.style[e] = y : Ct(t, e);
  } else
    (d || s === "%") && !Kn[rt(f, "display")] && (a.position = rt(t, "position")), f === t && (a.position = "static"), f.appendChild(zt), p = zt[l], f.removeChild(zt), a.position = "absolute";
  return o && d && (g = Ft(f), g.time = et.time, g.width = f[l]), N(c ? p * n / _ : p && n ? _ / p * n : 0);
}, mt = function(t, e, i, r) {
  var n;
  return ci || Ze(), e in ct && e !== "transform" && (e = ct[e], ~e.indexOf(",") && (e = e.split(",")[0])), vt[e] && e !== "transform" ? (n = ce(t, r), n = e !== "transformOrigin" ? n[e] : n.svg ? n.origin : Oe(rt(t, H)) + " " + n.zOrigin + "px") : (n = t.style[e], (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) && (n = Ce[e] && Ce[e](t, e, i) || rt(t, e) || $i(t, e) || (e === "opacity" ? 1 : 0))), i && !~(n + "").trim().indexOf(" ") ? Ot(t, e, n, i) + i : n;
}, Qn = function(t, e, i, r) {
  if (!i || i === "none") {
    var n = Zt(e, t, 1), s = n && rt(t, n, 1);
    s && s !== i ? (e = n, i = s) : e === "borderColor" && (i = rt(t, "borderTopColor"));
  }
  var a = new Z(this._pt, t.style, e, 0, 1, Tr), o = 0, u = 0, l, _, c, d, p, f, g, m, y, x, b, w;
  if (a.b = i, a.e = r, i += "", r += "", r.substring(0, 6) === "var(--" && (r = rt(t, r.substring(4, r.indexOf(")")))), r === "auto" && (f = t.style[e], t.style[e] = r, r = rt(t, e) || r, f ? t.style[e] = f : Ct(t, e)), l = [i, r], cr(l), i = l[0], r = l[1], c = i.match(Yt) || [], w = r.match(Yt) || [], w.length) {
    for (; _ = Yt.exec(r); )
      g = _[0], y = r.substring(o, _.index), p ? p = (p + 1) % 5 : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (p = 1), g !== (f = c[u++] || "") && (d = parseFloat(f) || 0, b = f.substr((d + "").length), g.charAt(1) === "=" && (g = Ut(d, g) + b), m = parseFloat(g), x = g.substr((m + "").length), o = Yt.lastIndex - x.length, x || (x = x || nt.units[e] || b, o === r.length && (r += x, a.e += x)), b !== x && (d = Ot(t, e, f, x) || 0), a._pt = {
        _next: a._pt,
        p: y || u === 1 ? y : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: d,
        c: m - d,
        m: p && p < 4 || e === "zIndex" ? Math.round : 0
      });
    a.c = o < r.length ? r.substring(o, r.length) : "";
  } else
    a.r = e === "display" && r === "none" ? Or : Cr;
  return Ui.test(r) && (a.e = 0), this._pt = a, a;
}, Fi = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, Zn = function(t) {
  var e = t.split(" "), i = e[0], r = e[1] || "50%";
  return (i === "top" || i === "bottom" || r === "left" || r === "right") && (t = i, i = r, r = t), e[0] = Fi[i] || i, e[1] = Fi[r] || r, e.join(" ");
}, Hn = function(t, e) {
  if (e.tween && e.tween._time === e.tween._dur) {
    var i = e.t, r = i.style, n = e.u, s = i._gsap, a, o, u;
    if (n === "all" || n === !0)
      r.cssText = "", o = 1;
    else
      for (n = n.split(","), u = n.length; --u > -1; )
        a = n[u], vt[a] && (o = 1, a = a === "transformOrigin" ? H : I), Ct(i, a);
    o && (Ct(i, I), s && (s.svg && i.removeAttribute("transform"), r.scale = r.rotate = r.translate = "none", ce(i, 1), s.uncache = 1, kr(r)));
  }
}, Ce = {
  clearProps: function(t, e, i, r, n) {
    if (n.data !== "isFromStart") {
      var s = t._pt = new Z(t._pt, e, i, 0, 0, Hn);
      return s.u = r, s.pr = -10, s.tween = n, t._props.push(i), 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */
}, _e = [1, 0, 0, 1, 0, 0], Er = {}, zr = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
}, Ii = function(t) {
  var e = rt(t, I);
  return zr(e) ? _e : e.substr(7).match(Xi).map(N);
}, gi = function(t, e) {
  var i = t._gsap || Ft(t), r = t.style, n = Ii(t), s, a, o, u;
  return i.svg && t.getAttribute("transform") ? (o = t.transform.baseVal.consolidate().matrix, n = [o.a, o.b, o.c, o.d, o.e, o.f], n.join(",") === "1,0,0,1,0,0" ? _e : n) : (n === _e && !t.offsetParent && t !== qt && !i.svg && (o = r.display, r.display = "block", s = t.parentNode, (!s || !t.offsetParent && !t.getBoundingClientRect().width) && (u = 1, a = t.nextElementSibling, qt.appendChild(t)), n = Ii(t), o ? r.display = o : Ct(t, "display"), u && (a ? s.insertBefore(t, a) : s ? s.appendChild(t) : qt.removeChild(t))), e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
}, He = function(t, e, i, r, n, s) {
  var a = t._gsap, o = n || gi(t, !0), u = a.xOrigin || 0, l = a.yOrigin || 0, _ = a.xOffset || 0, c = a.yOffset || 0, d = o[0], p = o[1], f = o[2], g = o[3], m = o[4], y = o[5], x = e.split(" "), b = parseFloat(x[0]) || 0, w = parseFloat(x[1]) || 0, S, T, P, v;
  i ? o !== _e && (T = d * g - p * f) && (P = b * (g / T) + w * (-f / T) + (f * y - g * m) / T, v = b * (-p / T) + w * (d / T) - (d * y - p * m) / T, b = P, w = v) : (S = Ar(t), b = S.x + (~x[0].indexOf("%") ? b / 100 * S.width : b), w = S.y + (~(x[1] || x[0]).indexOf("%") ? w / 100 * S.height : w)), r || r !== !1 && a.smooth ? (m = b - u, y = w - l, a.xOffset = _ + (m * d + y * f) - m, a.yOffset = c + (m * p + y * g) - y) : a.xOffset = a.yOffset = 0, a.xOrigin = b, a.yOrigin = w, a.smooth = !!r, a.origin = e, a.originIsAbsolute = !!i, t.style[H] = "0px 0px", s && (bt(s, a, "xOrigin", u, b), bt(s, a, "yOrigin", l, w), bt(s, a, "xOffset", _, a.xOffset), bt(s, a, "yOffset", c, a.yOffset)), t.setAttribute("data-svg-origin", b + " " + w);
}, ce = function(t, e) {
  var i = t._gsap || new mr(t);
  if ("x" in i && !e && !i.uncache)
    return i;
  var r = t.style, n = i.scaleX < 0, s = "px", a = "deg", o = getComputedStyle(t), u = rt(t, H) || "0", l, _, c, d, p, f, g, m, y, x, b, w, S, T, P, v, C, k, M, R, q, Y, V, X, lt, pe, Ht, Jt, Mt, mi, pt, Dt;
  return l = _ = c = f = g = m = y = x = b = 0, d = p = 1, i.svg = !!(t.getCTM && Rr(t)), o.translate && ((o.translate !== "none" || o.scale !== "none" || o.rotate !== "none") && (r[I] = (o.translate !== "none" ? "translate3d(" + (o.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (o.rotate !== "none" ? "rotate(" + o.rotate + ") " : "") + (o.scale !== "none" ? "scale(" + o.scale.split(" ").join(",") + ") " : "") + (o[I] !== "none" ? o[I] : "")), r.scale = r.rotate = r.translate = "none"), T = gi(t, i.svg), i.svg && (i.uncache ? (lt = t.getBBox(), u = i.xOrigin - lt.x + "px " + (i.yOrigin - lt.y) + "px", X = "") : X = !e && t.getAttribute("data-svg-origin"), He(t, X || u, !!X || i.originIsAbsolute, i.smooth !== !1, T)), w = i.xOrigin || 0, S = i.yOrigin || 0, T !== _e && (k = T[0], M = T[1], R = T[2], q = T[3], l = Y = T[4], _ = V = T[5], T.length === 6 ? (d = Math.sqrt(k * k + M * M), p = Math.sqrt(q * q + R * R), f = k || M ? Bt(M, k) * Et : 0, y = R || q ? Bt(R, q) * Et + f : 0, y && (p *= Math.abs(Math.cos(y * Gt))), i.svg && (l -= w - (w * k + S * R), _ -= S - (w * M + S * q))) : (Dt = T[6], mi = T[7], Ht = T[8], Jt = T[9], Mt = T[10], pt = T[11], l = T[12], _ = T[13], c = T[14], P = Bt(Dt, Mt), g = P * Et, P && (v = Math.cos(-P), C = Math.sin(-P), X = Y * v + Ht * C, lt = V * v + Jt * C, pe = Dt * v + Mt * C, Ht = Y * -C + Ht * v, Jt = V * -C + Jt * v, Mt = Dt * -C + Mt * v, pt = mi * -C + pt * v, Y = X, V = lt, Dt = pe), P = Bt(-R, Mt), m = P * Et, P && (v = Math.cos(-P), C = Math.sin(-P), X = k * v - Ht * C, lt = M * v - Jt * C, pe = R * v - Mt * C, pt = q * C + pt * v, k = X, M = lt, R = pe), P = Bt(M, k), f = P * Et, P && (v = Math.cos(P), C = Math.sin(P), X = k * v + M * C, lt = Y * v + V * C, M = M * v - k * C, V = V * v - Y * C, k = X, Y = lt), g && Math.abs(g) + Math.abs(f) > 359.9 && (g = f = 0, m = 180 - m), d = N(Math.sqrt(k * k + M * M + R * R)), p = N(Math.sqrt(V * V + Dt * Dt)), P = Bt(Y, V), y = Math.abs(P) > 2e-4 ? P * Et : 0, b = pt ? 1 / (pt < 0 ? -pt : pt) : 0), i.svg && (X = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !zr(rt(t, I)), X && t.setAttribute("transform", X))), Math.abs(y) > 90 && Math.abs(y) < 270 && (n ? (d *= -1, y += f <= 0 ? 180 : -180, f += f <= 0 ? 180 : -180) : (p *= -1, y += y <= 0 ? 180 : -180)), e = e || i.uncache, i.x = l - ((i.xPercent = l && (!e && i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-l) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + s, i.y = _ - ((i.yPercent = _ && (!e && i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-_) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + s, i.z = c + s, i.scaleX = N(d), i.scaleY = N(p), i.rotation = N(f) + a, i.rotationX = N(g) + a, i.rotationY = N(m) + a, i.skewX = y + a, i.skewY = x + a, i.transformPerspective = b + s, (i.zOrigin = parseFloat(u.split(" ")[2]) || !e && i.zOrigin || 0) && (r[H] = Oe(u)), i.xOffset = i.yOffset = 0, i.force3D = nt.force3D, i.renderTransform = i.svg ? ts : Dr ? Fr : Jn, i.uncache = 0, i;
}, Oe = function(t) {
  return (t = t.split(" "))[0] + " " + t[1];
}, Ne = function(t, e, i) {
  var r = W(e);
  return N(parseFloat(e) + parseFloat(Ot(t, "x", i + "px", r))) + r;
}, Jn = function(t, e) {
  e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Fr(t, e);
}, At = "0deg", te = "0px", Rt = ") ", Fr = function(t, e) {
  var i = e || this, r = i.xPercent, n = i.yPercent, s = i.x, a = i.y, o = i.z, u = i.rotation, l = i.rotationY, _ = i.rotationX, c = i.skewX, d = i.skewY, p = i.scaleX, f = i.scaleY, g = i.transformPerspective, m = i.force3D, y = i.target, x = i.zOrigin, b = "", w = m === "auto" && t && t !== 1 || m === !0;
  if (x && (_ !== At || l !== At)) {
    var S = parseFloat(l) * Gt, T = Math.sin(S), P = Math.cos(S), v;
    S = parseFloat(_) * Gt, v = Math.cos(S), s = Ne(y, s, T * v * -x), a = Ne(y, a, -Math.sin(S) * -x), o = Ne(y, o, P * v * -x + x);
  }
  g !== te && (b += "perspective(" + g + Rt), (r || n) && (b += "translate(" + r + "%, " + n + "%) "), (w || s !== te || a !== te || o !== te) && (b += o !== te || w ? "translate3d(" + s + ", " + a + ", " + o + ") " : "translate(" + s + ", " + a + Rt), u !== At && (b += "rotate(" + u + Rt), l !== At && (b += "rotateY(" + l + Rt), _ !== At && (b += "rotateX(" + _ + Rt), (c !== At || d !== At) && (b += "skew(" + c + ", " + d + Rt), (p !== 1 || f !== 1) && (b += "scale(" + p + ", " + f + Rt), y.style[I] = b || "translate(0, 0)";
}, ts = function(t, e) {
  var i = e || this, r = i.xPercent, n = i.yPercent, s = i.x, a = i.y, o = i.rotation, u = i.skewX, l = i.skewY, _ = i.scaleX, c = i.scaleY, d = i.target, p = i.xOrigin, f = i.yOrigin, g = i.xOffset, m = i.yOffset, y = i.forceCSS, x = parseFloat(s), b = parseFloat(a), w, S, T, P, v;
  o = parseFloat(o), u = parseFloat(u), l = parseFloat(l), l && (l = parseFloat(l), u += l, o += l), o || u ? (o *= Gt, u *= Gt, w = Math.cos(o) * _, S = Math.sin(o) * _, T = Math.sin(o - u) * -c, P = Math.cos(o - u) * c, u && (l *= Gt, v = Math.tan(u - l), v = Math.sqrt(1 + v * v), T *= v, P *= v, l && (v = Math.tan(l), v = Math.sqrt(1 + v * v), w *= v, S *= v)), w = N(w), S = N(S), T = N(T), P = N(P)) : (w = _, P = c, S = T = 0), (x && !~(s + "").indexOf("px") || b && !~(a + "").indexOf("px")) && (x = Ot(d, "x", s, "px"), b = Ot(d, "y", a, "px")), (p || f || g || m) && (x = N(x + p - (p * w + f * T) + g), b = N(b + f - (p * S + f * P) + m)), (r || n) && (v = d.getBBox(), x = N(x + r / 100 * v.width), b = N(b + n / 100 * v.height)), v = "matrix(" + w + "," + S + "," + T + "," + P + "," + x + "," + b + ")", d.setAttribute("transform", v), y && (d.style[I] = v);
}, es = function(t, e, i, r, n) {
  var s = 360, a = U(n), o = parseFloat(n) * (a && ~n.indexOf("rad") ? Et : 1), u = o - r, l = r + u + "deg", _, c;
  return a && (_ = n.split("_")[1], _ === "short" && (u %= s, u !== u % (s / 2) && (u += u < 0 ? s : -s)), _ === "cw" && u < 0 ? u = (u + s * Di) % s - ~~(u / s) * s : _ === "ccw" && u > 0 && (u = (u - s * Di) % s - ~~(u / s) * s)), t._pt = c = new Z(t._pt, e, i, r, u, Ln), c.e = l, c.u = "deg", t._props.push(i), c;
}, Li = function(t, e) {
  for (var i in e)
    t[i] = e[i];
  return t;
}, is = function(t, e, i) {
  var r = Li({}, i._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", s = i.style, a, o, u, l, _, c, d, p;
  r.svg ? (u = i.getAttribute("transform"), i.setAttribute("transform", ""), s[I] = e, a = ce(i, 1), Ct(i, I), i.setAttribute("transform", u)) : (u = getComputedStyle(i)[I], s[I] = e, a = ce(i, 1), s[I] = u);
  for (o in vt)
    u = r[o], l = a[o], u !== l && n.indexOf(o) < 0 && (d = W(u), p = W(l), _ = d !== p ? Ot(i, o, u, p) : parseFloat(u), c = parseFloat(l), t._pt = new Z(t._pt, a, o, _, c - _, Ke), t._pt.u = p || 0, t._props.push(o));
  Li(a, r);
};
Q("padding,margin,Width,Radius", function(h, t) {
  var e = "Top", i = "Right", r = "Bottom", n = "Left", s = (t < 3 ? [e, i, r, n] : [e + n, e + i, r + i, r + n]).map(function(a) {
    return t < 2 ? h + a : "border" + a + h;
  });
  Ce[t > 1 ? "border" + h : h] = function(a, o, u, l, _) {
    var c, d;
    if (arguments.length < 4)
      return c = s.map(function(p) {
        return mt(a, p, u);
      }), d = c.join(" "), d.split(c[0]).length === 5 ? c[0] : d;
    c = (l + "").split(" "), d = {}, s.forEach(function(p, f) {
      return d[p] = c[f] = c[f] || c[(f - 1) / 2 | 0];
    }), a.init(o, d, _);
  };
});
var Ir = {
  name: "css",
  register: Ze,
  targetTest: function(t) {
    return t.style && t.nodeType;
  },
  init: function(t, e, i, r, n) {
    var s = this._props, a = t.style, o = i.vars.startAt, u, l, _, c, d, p, f, g, m, y, x, b, w, S, T, P, v;
    ci || Ze(), this.styles = this.styles || Mr(t), P = this.styles.props, this.tween = i;
    for (f in e)
      if (f !== "autoRound" && (l = e[f], !(tt[f] && yr(f, e, i, r, t, n)))) {
        if (d = typeof l, p = Ce[f], d === "function" && (l = l.call(i, r, t, n), d = typeof l), d === "string" && ~l.indexOf("random(") && (l = ue(l)), p)
          p(this, t, f, l, i) && (T = 1);
        else if (f.substr(0, 2) === "--")
          u = (getComputedStyle(t).getPropertyValue(f) + "").trim(), l += "", St.lastIndex = 0, St.test(u) || (g = W(u), m = W(l), m ? g !== m && (u = Ot(t, f, u, m) + m) : g && (l += g)), this.add(a, "setProperty", u, l, r, n, 0, 0, f), s.push(f), P.push(f, 0, a[f]);
        else if (d !== "undefined") {
          if (o && f in o ? (u = typeof o[f] == "function" ? o[f].call(i, r, t, n) : o[f], U(u) && ~u.indexOf("random(") && (u = ue(u)), W(u + "") || u === "auto" || (u += nt.units[f] || W(mt(t, f)) || ""), (u + "").charAt(1) === "=" && (u = mt(t, f))) : u = mt(t, f), c = parseFloat(u), y = d === "string" && l.charAt(1) === "=" && l.substr(0, 2), y && (l = l.substr(2)), _ = parseFloat(l), f in ct && (f === "autoAlpha" && (c === 1 && mt(t, "visibility") === "hidden" && _ && (c = 0), P.push("visibility", 0, a.visibility), bt(this, a, "visibility", c ? "inherit" : "hidden", _ ? "inherit" : "hidden", !_)), f !== "scale" && f !== "transform" && (f = ct[f], ~f.indexOf(",") && (f = f.split(",")[0]))), x = f in vt, x) {
            if (this.styles.save(f), v = l, d === "string" && l.substring(0, 6) === "var(--") {
              if (l = rt(t, l.substring(4, l.indexOf(")"))), l.substring(0, 5) === "calc(") {
                var C = t.style.perspective;
                t.style.perspective = l, l = rt(t, "perspective"), C ? t.style.perspective = C : Ct(t, "perspective");
              }
              _ = parseFloat(l);
            }
            if (b || (w = t._gsap, w.renderTransform && !e.parseTransform || ce(t, e.parseTransform), S = e.smoothOrigin !== !1 && w.smooth, b = this._pt = new Z(this._pt, a, I, 0, 1, w.renderTransform, w, 0, -1), b.dep = 1), f === "scale")
              this._pt = new Z(this._pt, w, "scaleY", w.scaleY, (y ? Ut(w.scaleY, y + _) : _) - w.scaleY || 0, Ke), this._pt.u = 0, s.push("scaleY", f), f += "X";
            else if (f === "transformOrigin") {
              P.push(H, 0, a[H]), l = Zn(l), w.svg ? He(t, l, 0, S, 0, this) : (m = parseFloat(l.split(" ")[2]) || 0, m !== w.zOrigin && bt(this, w, "zOrigin", w.zOrigin, m), bt(this, a, f, Oe(u), Oe(l)));
              continue;
            } else if (f === "svgOrigin") {
              He(t, l, 1, S, 0, this);
              continue;
            } else if (f in Er) {
              es(this, w, f, c, y ? Ut(c, y + l) : l);
              continue;
            } else if (f === "smoothOrigin") {
              bt(this, w, "smooth", w.smooth, l);
              continue;
            } else if (f === "force3D") {
              w[f] = l;
              continue;
            } else if (f === "transform") {
              is(this, l, t);
              continue;
            }
          } else f in a || (f = Zt(f) || f);
          if (x || (_ || _ === 0) && (c || c === 0) && !In.test(l) && f in a)
            g = (u + "").substr((c + "").length), _ || (_ = 0), m = W(l) || (f in nt.units ? nt.units[f] : g), g !== m && (c = Ot(t, f, u, m)), this._pt = new Z(this._pt, x ? w : a, f, c, (y ? Ut(c, y + _) : _) - c, !x && (m === "px" || f === "zIndex") && e.autoRound !== !1 ? Bn : Ke), this._pt.u = m || 0, x && v !== l ? (this._pt.b = u, this._pt.e = v, this._pt.r = Vn) : g !== m && m !== "%" && (this._pt.b = u, this._pt.r = Nn);
          else if (f in a)
            Qn.call(this, t, f, u, y ? y + l : l);
          else if (f in t)
            this.add(t, f, u || t[f], y ? y + l : l, r, n);
          else if (f !== "parseTransform") {
            ri(f, l);
            continue;
          }
          x || (f in a ? P.push(f, 0, a[f]) : typeof t[f] == "function" ? P.push(f, 2, t[f]()) : P.push(f, 1, u || t[f])), s.push(f);
        }
      }
    T && Sr(this);
  },
  render: function(t, e) {
    if (e.tween._time || !di())
      for (var i = e._pt; i; )
        i.r(t, i.d), i = i._next;
    else
      e.styles.revert();
  },
  get: mt,
  aliases: ct,
  getSetter: function(t, e, i) {
    var r = ct[e];
    return r && r.indexOf(",") < 0 && (e = r), e in vt && e !== H && (t._gsap.x || mt(t, "x")) ? i && Mi === i ? e === "scale" ? qn : Un : (Mi = i || {}) && (e === "scale" ? Gn : Wn) : t.style && !ti(t.style[e]) ? Yn : ~e.indexOf("-") ? Xn : fi(t, e);
  },
  core: {
    _removeProperty: Ct,
    _getMatrix: gi
  }
};
J.utils.checkPrefix = Zt;
J.core.getStyleSaver = Mr;
(function(h, t, e, i) {
  var r = Q(h + "," + t + "," + e, function(n) {
    vt[n] = 1;
  });
  Q(t, function(n) {
    nt.units[n] = "deg", Er[n] = 1;
  }), ct[r[13]] = h + "," + t, Q(i, function(n) {
    var s = n.split(":");
    ct[s[1]] = r[s[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Q("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(h) {
  nt.units[h] = "px";
});
J.registerPlugin(Ir);
var rs = J.registerPlugin(Ir) || J, Ni = rs.core.Tween;
class ee {
  constructor(t) {
    var e = this, i = {
      change: []
    }, r = { r: 0, g: 0, b: 0, a: 0 };
    function n(m, y, x) {
      return m + (y - m) * x;
    }
    function s(m, y) {
      var x;
      for (x in r)
        m[x] && (r[x] = n(r[x], m[x], y));
      return d("change"), e;
    }
    function a(m, y) {
      if (Ni.killTweensOf(r), y && y.tween) {
        m.onUpdate = function() {
          d("change");
        };
        for (var x in y)
          m[x] = y[x];
        Ni.to(r, y.tween.time || 1, m);
      } else {
        var x;
        for (x in r)
          isNaN(m[x]) || (r[x] = m[x]);
      }
      return d("change"), e;
    }
    function o() {
      a({
        r: Math.random() * 255,
        g: Math.random() * 255,
        b: Math.random() * 255
      });
    }
    function u(m) {
      return { r: r.r, g: r.g, b: r.b, a: r.a };
    }
    function l() {
      return [Math.max(0, Math.min(255, Math.round(r.r))), Math.max(0, Math.min(255, Math.round(r.g))), Math.max(0, Math.min(255, Math.round(r.b))), Math.max(0, Math.min(1, r.a))];
    }
    function _() {
      return "rgba(" + l().join() + ")";
    }
    function c() {
      return "rgba(" + l().slice(0, -1).join() + ")";
    }
    function d(m) {
      if (i[m])
        for (var y = i[m].length; y--; )
          i[m][y].callback.call(e, { type: m, target: e });
    }
    function p(m, y) {
      i[m] && i[m].push({
        callback: y
      });
    }
    function f(m, y) {
      if (i[m])
        for (var x = i[m].length; x--; )
          (y === null || y === i[m][x].callback) && i[m].splice(x, 1);
    }
    function g(m) {
      m ? p("change", m) : d("change");
    }
    t && (t.color && a(t.color), t.change && g(t.change)), e.on = p, e.off = f, e.change = g, e.getValue = u, e.setValue = a, e.toRGBA = _, e.toRGB = c, e.toArray = l, e.interpolate = s, e.randomize = o;
  }
}
class me {
  /** @type {any} */
  config;
  /** @type {HTMLCanvasElement} */
  cvs;
  /** @type {CanvasRenderingContext2D} */
  ctx;
  /** @type {Function} */
  clear;
  /** @type {Function} */
  draw;
  /** @type {Function} */
  fill;
  /** @type {Function} */
  fillStyle;
  /** @type {Function} */
  getCenter;
  /** @type {Function} */
  width;
  /** @type {Function} */
  height;
  /** @type {Function} */
  size;
  /** @type {Function} */
  circle;
  /** @type {Function} */
  render;
  /** @type {Function} */
  buffer;
  /** @type {Function} */
  snapshot;
  /** @type {Function} */
  getSnapshot;
  /** @type {Function} */
  alpha;
  /**
   * @param {any} _config
   */
  constructor(t) {
    var e = this, i = Object.assign(
      {
        background: "rgba(0,0,0,0)",
        width: 100,
        height: 100,
        globalAlpha: 1
      },
      t || {}
    ), r = { x: 0, y: 0 }, n = document.createElement("canvas"), s = n.getContext("2d"), a = document.createElement("canvas"), o = a.getContext("2d");
    function u() {
      return a.width = n.width, a.height = n.height, o.drawImage(n, 0, 0), e;
    }
    function l() {
      return a;
    }
    function _() {
      return o.clearRect(0, 0, a.width, a.height), o.drawImage(n, 0, 0), a;
    }
    function c() {
      i.render && i.render.call(e, e.ctx, e.cvs, { target: e });
    }
    function d(v, C, k) {
      return C === null && (arguments[1] = 0), k === null && (arguments[2] = 0), s.drawImage.apply(s, arguments), e;
    }
    function p(v, C, k) {
      s.beginPath(), s.arc(v, C, k, 0, 2 * Math.PI), s.fill(), s.closePath();
    }
    function f(v, C, k, M) {
      return s.clearRect(v || 0, C || 0, k || n.width, M || n.height), e;
    }
    function g(v, C) {
      var k = s.fillStyle, M = s.strokeStyle;
      return n.width = v, n.height = C, s.fillStyle = k, s.strokeStyle = M, b(), e;
    }
    function m(v) {
      return v && (n.width = v, b()), n.width;
    }
    function y(v) {
      return v && (n.height = v, b()), n.height;
    }
    function x(v) {
      return v && (n.globalAlpha = Math.max(0, Math.min(1, v))), e;
    }
    function b() {
      r = {
        x: n.width * 0.5,
        y: n.height * 0.5
      }, a.width = n.width, a.height = n.height;
    }
    function w() {
      return r;
    }
    function S(v, C, k, M) {
      return s.fillRect(v || 0, C || 0, k || n.width, M || n.height), e;
    }
    function T(v) {
      return s.fillStyle = v, e;
    }
    function P(v) {
      return s.strokeStyle = v, e;
    }
    i && (i.width && m(i.width), i.height && y(i.height), i.alpha && x(i.alpha), i.fillStyle && T(i.fillStyle), i.strokeStyle && P(i.strokeStyle)), e.config = i, e.cvs = n, e.ctx = s, e.clear = f, e.draw = d, e.fill = S, e.fillStyle = T, e.getCenter = w, e.width = m, e.height = y, e.size = g, e.circle = p, e.render = c, e.buffer = _, e.snapshot = u, e.getSnapshot = l, e.alpha = x, c();
  }
}
class ns {
  /**
   * @param {Object} opts
   * @param {HTMLDivElement} opts.container - canvas element or selector (optional; the original code appends CanvasSprite canvases)
   * @param {boolean} opts.createScore - whether to create the SCORE div
   */
  constructor({ container: t, createScore: e = !0 } = {}) {
    const i = this;
    this.RAD = Math.PI / 180, this.rand = (r, n = 0, s) => {
      typeof n != "number" && (typeof n == "boolean" && (s = !0), Number.isNaN(n) && (n = 0));
      const a = r + Math.random() * (n - r);
      return s === !0 ? Math.round(a) : a;
    }, this.interpolate = (r, n, s) => r + (n - r) * s, this.layers = [], this.lines = [], this.dots = [], this.explosions = [], this.animating = !1, this.viewport = {
      width: 100,
      height: 100,
      scaleDelta: 1.02,
      mouseFactor: 0.02,
      acceleration: 0,
      centerX: 50,
      centerY: 50
    }, this.mouseX = 0, this.mouseY = 0, this.mouseIsDown = !1, this.centerOffsetX = 0, this.centerOffsetY = 0, this.pilot = { offsetX: 0, offsetY: 0, x: 0, y: 0 }, this.score = { level: 0, kills: 0, points: 0 }, this.scoreEl = null, this.createScore = e, this.container = t, this.viewport.mouseFactor = this.interpolate(0.02, 0.05, this.viewport.acceleration), this.viewport.scaleDelta = this.interpolate(1, 1.1, this.viewport.acceleration), this.flavors = {
      purple_blue: {
        lines: [
          { r: 0.9802014472166198, g: 157.36234423883127, b: 255, a: 0.5 },
          { r: 148.21405502788946, g: 129.47137911956344, b: 255, a: 0.5 },
          { r: 64.50694067184185, g: 74.83181585614483, b: 255, a: 0.5 },
          { r: 35.64625568637682, g: 155.87893689351827, b: 255, a: 0.5 }
        ],
        comets: { r: 50, g: 190, b: 165 }
      },
      red: {
        lines: [
          { r: 255, g: 0, b: 0 },
          { r: 255, g: 0, b: 0 },
          { r: 255, g: 0, b: 0 },
          { r: 255, g: 0, b: 0 }
        ],
        comets: { r: 255, g: 200, b: 200 }
      }
    }, this._handleMouse = this.handleMouse.bind(this), this.lineColor = new ee({
      color: { r: 255, g: 255, b: 255, a: 0.5 },
      change: function() {
      }
    }), this.dotColor = new ee({
      color: { r: 255, g: 255, b: 200, a: 0.5 },
      change: () => {
        this.dotSprite?.render();
      }
    }), this.dotSprite = new me({
      width: 100,
      height: 100,
      render: function() {
        this.clear();
        const r = this.getCenter(), n = i.dotColor.toArray().slice(0, -1), s = this.ctx.createRadialGradient(r.x, r.y, 0, r.x, r.y, this.width() * 0.48);
        s.addColorStop(0, "rgba(255,255,255,1)"), s.addColorStop(0.6, "rgba(255,255,255,1)");
        const a = new ee({ color: i.dotColor.getValue() });
        a.interpolate({ r: 255, g: 255, b: 255 }, 0.5), s.addColorStop(0.7, `rgba(${a.toArray().slice(0, -1).join()},1)`), s.addColorStop(0.75, `rgba(${n.join()},.5)`), s.addColorStop(1, `rgba(${n.join()},0)`), this.fillStyle(s).circle(r.x, r.y, this.height() * 0.5);
      }
    }), this.dotSprite.__game = this, this.targetColor = new ee({
      color: { r: 0, g: 0, b: 200, a: 0.5 },
      change: function() {
        i.targetSprite.clear().fillStyle(this.toRGBA()).fill();
      }
    }), this.targetSprite = new me({
      width: 80,
      height: 80,
      render: function() {
        const r = this.getCenter(), n = this.ctx.createRadialGradient(r.x, r.y, this.width() * 0.4, this.width() * 0.5, this.height() * 0.5, this.width() * 0.48);
        n.addColorStop(0, "rgba(255,255,255,0)"), n.addColorStop(0.5, "rgba(255,255,255,1)"), n.addColorStop(1, "rgba(255,255,255,0)"), this.clear().fillStyle(n).circle(r.x, r.y, this.height() * 0.5), this.ctx.arc(this.cvs.width * 0.5, this.cvs.height * 0.5, this.cvs.width * 0.45, 0, 2 * Math.PI), this.ctx.fill();
      }
    });
  }
  // ------- lifecycle -------
  initGame() {
    this.createScore && (this.scoreEl = document.createElement("div"), this.scoreEl.id = "score", this.scoreEl.textContent = "kills: 0", Object.assign(this.scoreEl.style, { padding: "10px", zIndex: "990", position: "absolute", top: "0px", color: "#fff", zIndex: 3 }), this.container.appendChild(this.scoreEl), this.scoreEl.id = "l0"), this.setupLayers(), this.mountLayers(), this.container.addEventListener("mousedown", this._handleMouse), this.container.addEventListener("mouseup", this._handleMouse), this.container.addEventListener("mousemove", this._handleMouse);
    for (let t = 0; t < 5; t++) this.makeLine();
    for (let t = 0; t < 3; t++) this.addDot();
    this.prerender(), this.startAnim(), this.setFlavor("purple_blue");
  }
  destroy() {
    console.log("destroy game"), this.stopAnim(), this.container.removeEventListener("mousedown", this._handleMouse), this.container.removeEventListener("mouseup", this._handleMouse), this.container.removeEventListener("mousemove", this._handleMouse), this.scoreEl?.parentNode && this.scoreEl.parentNode.removeChild(this.scoreEl), this.layers.forEach((t) => t?.cvs?.parentNode && t.cvs.parentNode.removeChild(t.cvs));
  }
  // ------- UI / mounting -------
  mountLayers() {
    Object.assign(this.layers[0].cvs.style, { zIndex: "900", position: "absolute", top: "0px", left: "0px", zIndex: 1 }), Object.assign(this.layers[1].cvs.style, { zIndex: "910", position: "absolute", top: "0px", left: "0px", zIndex: 2 }), this.container.appendChild(this.layers[0].cvs), this.container.appendChild(this.layers[1].cvs), this.layers[0].cvs.id = "l0", this.layers[1].cvs.id = "l1";
  }
  setupLayers() {
    const t = this;
    this.layers[0] = new me({
      background: "rgba(255,0,0)",
      fillStyle: "rgba(0,0,0,.02)",
      strokeStyle: "rgba(255,255,255,1)",
      render: function(e, i) {
        t.pilot.offsetX = t.pilot.x - (t.viewport.scaleDelta * t.viewport.width - t.viewport.width) * 0.5, t.pilot.offsetY = t.pilot.y - (t.viewport.scaleDelta * t.viewport.height - t.viewport.height) * 0.5, e.drawImage(i, 0, 0, i.width, i.height, t.pilot.offsetX, t.pilot.offsetY, i.width * t.viewport.scaleDelta, i.height * t.viewport.scaleDelta), this.fillStyle("rgba(0,0,0,.02)").fill();
        for (let r = t.lines.length - 1; r >= 0; r--) {
          const n = t.lines[r];
          for (let s = n.points.length - 1; s >= 0; s--)
            t.renderPosition(n.points[s]);
          t.drawLine(n, this.ctx);
        }
      }
    }), this.layers[1] = new me({
      render: function() {
        const e = this.ctx, i = this.cvs, r = this.buffer();
        this.clear(), e.globalAlpha = 0.9, e.drawImage(r, 0, 0, i.width, i.height, t.pilot.offsetX, t.pilot.offsetY, i.width * t.viewport.scaleDelta, i.height * t.viewport.scaleDelta), e.globalAlpha = 1;
        for (let n = t.dots.length - 1; n >= 0; n--) {
          const s = t.dots[n];
          t.renderPosition(s);
          const a = Math.sqrt(s.lifespan);
          e.drawImage(t.dotSprite.cvs, 0, 0, t.dotSprite.width(), t.dotSprite.height(), s._x, s._y, a, a), s.killed ? (t.explosion(s._x, s._y, a), t.dots.splice(n, 1)) : s.lifespan < 0.01 ? t.dots.splice(n, 1) : s.lifespan *= 0.98;
        }
        for (let n = 0; n < 100; n++) {
          const s = t.rand(2, 5);
          e.globalAlpha = t.rand(0, 1), e.drawImage(t.dotSprite.cvs, 0, 0, t.dotSprite.width(), t.dotSprite.height(), t.rand(0, t.viewport.width), t.rand(0, t.viewport.height), s, s);
        }
        for (e.globalAlpha = 1, e.fillStyle = "rgba(255,255,255,.5)"; Math.random() < 0.8 && t.explosions.length; ) {
          const n = t.explosions.shift();
          e.globalAlpha = n.alpha, e.beginPath(), e.arc(n.x, n.y, n.size, 0, 2 * Math.PI), e.closePath(), e.fill();
        }
        e.globalAlpha = 1;
      }
    });
  }
  // ------- core logic -------
  updateScore() {
    this.scoreEl && (this.scoreEl.textContent = `kills: ${this.score.kills}`);
  }
  addDot() {
    const t = {
      lifespan: 60 * this.rand(3, 150),
      x: this.viewport.width * 0.5,
      y: this.viewport.height * 0.5,
      offset: { x: 0, y: 0, decay: 0.95 },
      rotations: Array.from({ length: 3 }, () => ({
        radius: { x: 100, y: 100 },
        angle: { x: this.rand(360), y: this.rand(360) },
        speed: { x: this.rand(-2, 2), y: this.rand(-2, 2) }
      }))
    };
    this.dots.push(t), this.dots.sort((e, i) => e.lifespan > i.lifespan ? -1 : e.lifespan < i.lifespan ? 1 : 0);
  }
  renderPosition(t) {
    let e = 0, i = 0;
    for (let r = t.rotations.length - 1; r >= 0; r--) {
      const n = t.rotations[r];
      n.angle.x += n.speed.x, n.angle.y += n.speed.y, e += Math.sin(n.angle.x * this.RAD) * n.radius.x, i += Math.cos(n.angle.y * this.RAD) * n.radius.y;
    }
    t._x = t.x + t.offset.x + e, t._y = t.y + t.offset.y + i;
  }
  Point() {
    return { _x: 0, _y: 0, x: 0, y: 0, offset: { x: 0, y: 0 }, rotations: [] };
  }
  Line() {
    return { color: new ee({ color: { r: 255, g: 255, b: 255, a: 1 } }), alpha: 0, points: [] };
  }
  randomLineRotation() {
    return {
      radius: { x: this.rand(35), y: this.rand(85) },
      angle: { x: this.rand(360), y: this.rand(360) },
      speed: {
        x: this.rand(-Math.sqrt(8), Math.sqrt(8)) * 0.2,
        y: this.rand(-Math.sqrt(8), Math.sqrt(8)) * 0.2
      }
    };
  }
  makeLine() {
    const e = this.Line();
    e.color.setValue({ a: 0 }), e.color.setValue({ a: 0.5 }, { tween: { delay: this.rand(10), time: this.rand(20, 30) } }), e.points = Array.from({ length: 6 }, (i, r) => {
      const n = this.Point();
      return n.offset.x = r === 0 ? -200 : r === 5 ? 200 : 0, n.offset.y = this.rand(-50, 50), n.rotations.push(this.randomLineRotation()), n;
    }), this.lines.push(e);
  }
  drawLine(t, e) {
    t.color && (t.alpha < 0 && (t.alpha += 0.01, t.color.setValue({ r: this.rand(0, 255), a: t.alpha })), e.strokeStyle = t.color.toRGBA()), e.beginPath(), e.moveTo(t.points[0]._x, t.points[0]._y);
    let i;
    for (i = 1; i < t.points.length - 2; i++) {
      const r = (t.points[i]._x + t.points[i + 1]._x) / 2, n = (t.points[i]._y + t.points[i + 1]._y) / 2;
      e.quadraticCurveTo(t.points[i]._x, t.points[i]._y, r, n);
    }
    e.quadraticCurveTo(t.points[i]._x, t.points[i]._y, t.points[i + 1]._x, t.points[i + 1]._y), e.stroke();
  }
  render() {
    this.layers[0].render(), this.layers[1].render(), this.animating && window.requestAnimationFrame(() => this.render()), Math.random() < 0.02 && this.addDot(), this.mouseIsDown ? this.viewport.scaleDelta < 1.1 && (this.viewport.scaleDelta += 1e-3) : this.viewport.scaleDelta > 1 && (this.viewport.scaleDelta -= 1e-3);
  }
  explosion(t, e, i) {
    let r = this.rand(5, 10, !0);
    const n = i * 0.5;
    for (; r--; )
      this.explosions.push({
        x: this.rand(t - n, t + n),
        y: this.rand(e - n, e + n),
        size: this.rand(i * 0.1, i * 1.5),
        alpha: this.rand(0.5, 1)
      });
  }
  prerender() {
    this.animating = !1;
    for (let t = 0; t < 1e3; t++) this.render();
  }
  resize(t, e) {
    this.handleResize(!0, t, e);
  }
  handleResize(t, e = 500, i = 500) {
    if (t !== !0) {
      clearTimeout(this._resizeTimeout), this._resizeTimeout = setTimeout(() => this.handleResize(!0), 1050);
      return;
    }
    this.layers[0].size(e, i), this.layers[1].size(e, i), this.viewport.width = e, this.viewport.height = i, this.viewport.centerX = e * 0.5, this.viewport.centerY = i * 0.5;
    for (let r = this.lines.length - 1; r >= 0; r--) {
      const n = this.lines[r], s = e / (n.points.length - 1);
      for (let a = n.points.length - 1; a >= 0; a--) {
        const o = n.points[a];
        o.x = a * s, o.y = i * 0.55;
      }
    }
    for (let r = this.dots.length - 1; r >= 0; r--)
      this.dots[r].x = e * 0.5, this.dots[r].y = i * 0.5;
  }
  startAnim() {
    this.animating = !0, window.requestAnimationFrame(() => this.render());
  }
  stopAnim() {
    this.animating = !1;
  }
  setFlavor(t) {
    const e = this.flavors[t];
    if (e) {
      for (let i = 0; i < this.lines.length; i++)
        this.lines[i].color.setValue(e.lines[i % e.lines.length]);
      this.dotColor.setValue(e.comets);
    }
  }
  fadeLines(t) {
    for (let e = 0; e < this.lines.length; e++)
      this.lines[e].color.setValue({ a: t }, { tween: { delay: this.rand(3), time: this.rand(3, 8) } });
  }
  fireWeapon() {
    this.layers[1].ctx.drawImage(this.targetSprite.cvs, this.mouseX - this.targetSprite.width() * 0.5, this.mouseY - this.targetSprite.height() * 0.5);
    let t = 0, e = 0;
    for (let i = this.dots.length - 1; i >= 0; i--) {
      const r = this.dots[i], n = r._x - this.mouseX, s = r._y - this.mouseY;
      Math.sqrt(n * n + s * s) < this.targetSprite.width() * 0.5 && (r.killed = !0, e++, t++);
    }
    this.score.kills += e, this.score.points += e * t, this.updateScore();
  }
  // ------- input handlers (no jQuery) -------
  handleMouse(t) {
    const e = this.layers[0].cvs.getBoundingClientRect();
    this.mouseX = t.clientX - e.left, this.mouseY = t.clientY - e.top, this.centerOffsetX = this.mouseX - e.width * 0.5, this.centerOffsetY = this.mouseY - e.height * 0.5;
    const i = this.centerOffsetX / (e.width * 0.5), r = this.centerOffsetY / (e.height * 0.5);
    switch (this.pilot.x = i * -16, this.pilot.y = r * -16, t.type) {
      case "mousedown":
        this.mouseIsDown = !0, this.fireWeapon();
        break;
      case "mouseup":
        this.mouseIsDown = !1;
        break;
    }
  }
  // handleKeys(e) {
  //   if (e.keyCode === 32 && e.target === document.body) e.preventDefault();
  // }
  // handleKeysBody(evt) {
  //   if (evt.type === 'keydown') {
  //     if (evt.keyCode === 32) evt.preventDefault();
  //     return;
  //   }
  //   // keyup
  //   if (evt.keyCode === 38) {
  //     for (let i = 0; i < 100; i++) this.addDot();
  //   }
  // }
}
const os = ({ width: h = 500, height: t = 500 }) => {
  const e = yi(null), i = yi(null);
  return vi(() => {
    if (e.current)
      try {
        return i.current = new ns({ container: e.current, createScore: !0 }), i.current.initGame(), i.current.resize(h, t), () => {
          i.current.destroy();
        };
      } catch (r) {
        console.log(r);
      }
  }, []), vi(() => {
    i.current && i.current.resize(h, t);
  }, [h, t]), /* @__PURE__ */ Lr("div", { ref: e, style: { position: "absolute", inset: 0, width: h, height: t } });
};
export {
  os as SpaceBallsComponent
};
//# sourceMappingURL=index.js.map
