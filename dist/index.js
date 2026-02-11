import { jsx as yi } from "react/jsx-runtime";
import { useRef as vi, useEffect as xi } from "react";
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
}, Je, G, E, ht = 1e8, A = 1 / ht, Be = Math.PI * 2, Nr = Be / 4, Br = 0, Yi = Math.sqrt, Vr = Math.cos, Yr = Math.sin, U = function(t) {
  return typeof t == "string";
}, I = function(t) {
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
  return I(t) || U(t);
}, Xi = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, j = Array.isArray, Xr = /random\([^)]+\)/g, Ur = /,\s*/g, wi = /(?:-?\.?\d|\.)+/gi, Ui = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Yt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Ae = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, qi = /[+-]=-?[.\d]+/, qr = /[^,'"\[\]\s]+/gi, Gr = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, F, ft, Ve, ii, st = {}, we = {}, Gi, Wi = function(t) {
  return (we = jt(t, st)) && J;
}, ri = function(t, e) {
  return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
}, ae = function(t, e) {
  return !e && console.warn(t);
}, ji = function(t, e) {
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
}, ni = {}, Tt = [], Ye = {}, $i, tt = {}, Re = {}, bi = 30, ve = [], si = "", oi = function(t) {
  var e = t[0], i, r;
  if (dt(e) || I(e) || (t = [t]), !(i = (e._gsap || {}).harness)) {
    for (r = ve.length; r-- && !ve[r].targetTest(e); )
      ;
    i = ve[r];
  }
  for (r = t.length; r--; )
    t[r] && (t[r]._gsap || (t[r]._gsap = new yr(t[r], i))) || t.splice(r, 1);
  return t;
}, Ft = function(t) {
  return t._gsap || oi(ut(t))[0]._gsap;
}, Ki = function(t, e, i) {
  return (i = t[e]) && I(i) ? t[e]() : ti(i) && t.getAttribute && t.getAttribute(e) || i;
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
}, ai = function(t) {
  return !!(t._initted || t._startAt || t.add);
}, Qi = function(t, e, i, r) {
  Tt.length && !G && be(), t.render(e, i, !!(G && e < 0 && ai(t))), Tt.length && !G && be();
}, Hi = function(t) {
  var e = parseFloat(t);
  return (e || e === 0) && (t + "").match(qr).length < 2 ? e : U(t) ? t.trim() : t;
}, Zi = function(t) {
  return t;
}, ot = function(t, e) {
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
}, Ti = function h(t, e) {
  for (var i in e)
    i !== "__proto__" && i !== "constructor" && i !== "prototype" && (t[i] = dt(e[i]) ? h(t[i] || (t[i] = {}), e[i]) : e[i]);
  return t;
}, Te = function(t, e) {
  var i = {}, r;
  for (r in t)
    r in e || (i[r] = t[r]);
  return i;
}, ne = function(t) {
  var e = t.parent || F, i = t.keyframes ? Kr(j(t.keyframes)) : ot;
  if (K(t.inherit))
    for (; e; )
      i(t, e.vars.defaults), e = e.parent || e._dp;
  return t;
}, Qr = function(t, e) {
  for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i]; )
    ;
  return i < 0;
}, Ji = function(t, e, i, r, n) {
  var s = t[r], o;
  if (n)
    for (o = e[n]; s && s[n] > o; )
      s = s._prev;
  return s ? (e._next = s._next, s._next = e) : (e._next = t[i], t[i] = e), e._next ? e._next._prev = e : t[r] = e, e._prev = s, e.parent = e._dp = t, e;
}, Oe = function(t, e, i, r) {
  i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
  var n = e._prev, s = e._next;
  n ? n._next = s : t[i] === e && (t[i] = s), s ? s._prev = n : t[r] === e && (t[r] = n), e._next = e._prev = e.parent = null;
}, Pt = function(t, e) {
  t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0;
}, Lt = function(t, e) {
  if (t && (!e || e._end > t._dur || e._start < 0))
    for (var i = t; i; )
      i._dirty = 1, i = i.parent;
  return t;
}, Hr = function(t) {
  for (var e = t.parent; e && e.parent; )
    e._dirty = 1, e.totalDuration(), e = e.parent;
  return t;
}, Xe = function(t, e, i, r) {
  return t._startAt && (G ? t._startAt.revert(ye) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, r));
}, Zr = function h(t) {
  return !t || t._ts && h(t.parent);
}, Si = function(t) {
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
  return i && i.smoothChildTiming && t._ts && (t._start = z(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Me(t), i._dirty || Lt(i, t)), t;
}, tr = function(t, e) {
  var i;
  if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (i = Se(t.rawTime(), e), (!e._dur || de(0, e.totalDuration(), i) - e._tTime > A) && e.render(i, !0)), Lt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
    if (t._dur < t.duration())
      for (i = t; i._dp; )
        i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
    t._zTime = -A;
  }
}, _t = function(t, e, i, r) {
  return e.parent && Pt(e), e._start = z((yt(i) ? i : i || t !== F ? at(t, i, e) : t._time) + e._delay), e._end = z(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), Ji(t, e, "_first", "_last", t._sort ? "_start" : 0), Ue(e) || (t._recent = e), r || tr(t, e), t._ts < 0 && De(t, t._tTime), t;
}, er = function(t, e) {
  return (st.ScrollTrigger || ri("scrollTrigger", e)) && st.ScrollTrigger.create(e, t);
}, ir = function(t, e, i, r, n) {
  if (ui(t, e, n), !t._initted)
    return 1;
  if (!i && t._pt && !G && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && $i !== et.frame)
    return Tt.push(t), t._lazy = [n, r], 1;
}, Jr = function h(t) {
  var e = t.parent;
  return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || h(e));
}, Ue = function(t) {
  var e = t.data;
  return e === "isFromStart" || e === "isStart";
}, tn = function(t, e, i, r) {
  var n = t.ratio, s = e < 0 || !e && (!t._start && Jr(t) && !(!t._initted && Ue(t)) || (t._ts < 0 || t._dp._ts < 0) && !Ue(t)) ? 0 : 1, o = t._rDelay, a = 0, u, l, _;
  if (o && t._repeat && (a = de(0, t._tDur, e), l = $t(a, o), t._yoyo && l & 1 && (s = 1 - s), l !== $t(t._tTime, o) && (n = 1 - s, t.vars.repeatRefresh && t._initted && t.invalidate())), s !== n || G || r || t._zTime === A || !e && t._zTime) {
    if (!t._initted && ir(t, e, r, i, a))
      return;
    for (_ = t._zTime, t._zTime = e || (i ? A : 0), i || (i = e && !_), t.ratio = s, t._from && (s = 1 - s), t._time = 0, t._tTime = a, u = t._pt; u; )
      u.r(s, u.d), u = u._next;
    e < 0 && Xe(t, e, i, !0), t._onUpdate && !i && it(t, "onUpdate"), a && t._repeat && !i && t.parent && it(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === s && (s && Pt(t, 1), !i && !G && (it(t, s ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
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
  var n = t._repeat, s = z(e) || 0, o = t._tTime / t._tDur;
  return o && !r && (t._time *= s / t._dur), t._dur = s, t._tDur = n ? n < 0 ? 1e10 : z(s * (n + 1) + t._rDelay * n) : s, o > 0 && !r && De(t, t._tTime = t._tDur * o), t.parent && Me(t), i || Lt(t.parent, t), t;
}, Pi = function(t) {
  return t instanceof $ ? Lt(t) : Kt(t, t._dur);
}, rn = {
  _start: 0,
  endTime: he,
  totalDuration: he
}, at = function h(t, e, i) {
  var r = t.labels, n = t._recent || rn, s = t.duration() >= ht ? n.endTime(!1) : t._dur, o, a, u;
  return U(e) && (isNaN(e) || e in r) ? (a = e.charAt(0), u = e.substr(-1) === "%", o = e.indexOf("="), a === "<" || a === ">" ? (o >= 0 && (e = e.replace(/=/, "")), (a === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (u ? (o < 0 ? n : i).totalDuration() / 100 : 1)) : o < 0 ? (e in r || (r[e] = s), r[e]) : (a = parseFloat(e.charAt(o - 1) + e.substr(o + 1)), u && i && (a = a / 100 * (j(i) ? i[0] : i).totalDuration()), o > 1 ? h(t, e.substr(0, o - 1), i) + a : s + a)) : e == null ? s : +e;
}, se = function(t, e, i) {
  var r = yt(e[1]), n = (r ? 2 : 1) + (t < 2 ? 0 : 1), s = e[n], o, a;
  if (r && (s.duration = e[1]), s.parent = i, t) {
    for (o = s, a = i; a && !("immediateRender" in o); )
      o = a.vars.defaults || {}, a = K(a.vars.inherit) && a.parent;
    s.immediateRender = K(o.immediateRender), t < 2 ? s.runBackwards = 1 : s.startAt = e[n - 1];
  }
  return new V(e[0], s, e[n + 1]);
}, Ot = function(t, e) {
  return t || t === 0 ? e(t) : e;
}, de = function(t, e, i) {
  return i < t ? t : i > e ? e : i;
}, W = function(t, e) {
  return !U(t) || !(e = Gr.exec(t)) ? "" : e[1];
}, nn = function(t, e, i) {
  return Ot(i, function(r) {
    return de(t, e, r);
  });
}, qe = [].slice, rr = function(t, e) {
  return t && dt(t) && "length" in t && (!e && !t.length || t.length - 1 in t && dt(t[0])) && !t.nodeType && t !== ft;
}, sn = function(t, e, i) {
  return i === void 0 && (i = []), t.forEach(function(r) {
    var n;
    return U(r) && !e || rr(r, 1) ? (n = i).push.apply(n, ut(r)) : i.push(r);
  }) || i;
}, ut = function(t, e, i) {
  return E && !e && E.selector ? E.selector(t) : U(t) && !i && (Ve || !Qt()) ? qe.call((e || ii).querySelectorAll(t), 0) : j(t) ? sn(t, i) : rr(t) ? qe.call(t, 0) : t ? [t] : [];
}, Ge = function(t) {
  return t = ut(t)[0] || ae("Invalid scope") || {}, function(e) {
    var i = t.current || t.nativeElement || t;
    return ut(e, i.querySelectorAll ? i : i === t ? ae("Invalid scope") || ii.createElement("div") : t);
  };
}, nr = function(t) {
  return t.sort(function() {
    return 0.5 - Math.random();
  });
}, sr = function(t) {
  if (I(t))
    return t;
  var e = dt(t) ? t : {
    each: t
  }, i = It(e.ease), r = e.from || 0, n = parseFloat(e.base) || 0, s = {}, o = r > 0 && r < 1, a = isNaN(r) || o, u = e.axis, l = r, _ = r;
  return U(r) ? l = _ = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[r] || 0 : !o && a && (l = r[0], _ = r[1]), function(c, d, p) {
    var f = (p || e).length, g = s[f], m, y, x, b, w, S, T, P, v;
    if (!g) {
      if (v = e.grid === "auto" ? 0 : (e.grid || [1, ht])[1], !v) {
        for (T = -ht; T < (T = p[v++].getBoundingClientRect().left) && v < f; )
          ;
        v < f && v--;
      }
      for (g = s[f] = [], m = a ? Math.min(v, f) * l - 0.5 : r % v, y = v === ht ? 0 : a ? f * _ / v - 0.5 : r / v | 0, T = 0, P = ht, S = 0; S < f; S++)
        x = S % v - m, b = y - (S / v | 0), g[S] = w = u ? Math.abs(u === "y" ? b : x) : Yi(x * x + b * b), w > T && (T = w), w < P && (P = w);
      r === "random" && nr(g), g.max = T - P, g.min = P, g.v = f = (parseFloat(e.amount) || parseFloat(e.each) * (v > f ? f - 1 : u ? u === "y" ? f / v : v : Math.max(v, f / v)) || 0) * (r === "edges" ? -1 : 1), g.b = f < 0 ? n - f : n, g.u = W(e.amount || e.each) || 0, i = i && f < 0 ? pr(i) : i;
    }
    return f = (g[c] - g.min) / g.max || 0, z(g.b + (i ? i(f) : f) * g.v) + g.u;
  };
}, We = function(t) {
  var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
  return function(i) {
    var r = z(Math.round(parseFloat(i) / t) * t * e);
    return (r - r % 1) / e + (yt(i) ? 0 : W(i));
  };
}, or = function(t, e) {
  var i = j(t), r, n;
  return !i && dt(t) && (r = i = t.radius || ht, t.values ? (t = ut(t.values), (n = !yt(t[0])) && (r *= r)) : t = We(t.increment)), Ot(e, i ? I(t) ? function(s) {
    return n = t(s), Math.abs(n - s) <= r ? n : s;
  } : function(s) {
    for (var o = parseFloat(n ? s.x : s), a = parseFloat(n ? s.y : 0), u = ht, l = 0, _ = t.length, c, d; _--; )
      n ? (c = t[_].x - o, d = t[_].y - a, c = c * c + d * d) : c = Math.abs(t[_] - o), c < u && (u = c, l = _);
    return l = !r || u <= r ? t[l] : s, n || l === s || yt(s) ? l : l + W(s);
  } : We(t));
}, ar = function(t, e, i, r) {
  return Ot(j(t) ? !e : i === !0 ? !!(i = 0) : !r, function() {
    return j(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + i * 0.99)) / i) * i * r) / r;
  });
}, on = function() {
  for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
    e[i] = arguments[i];
  return function(r) {
    return e.reduce(function(n, s) {
      return s(n);
    }, r);
  };
}, an = function(t, e) {
  return function(i) {
    return t(parseFloat(i)) + (e || W(i));
  };
}, hn = function(t, e, i) {
  return ur(t, e, 0, 1, i);
}, hr = function(t, e, i) {
  return Ot(i, function(r) {
    return t[~~e(r)];
  });
}, un = function h(t, e, i) {
  var r = e - t;
  return j(t) ? hr(t, h(0, t.length), e) : Ot(i, function(n) {
    return (r + (n - t) % r) % r + t;
  });
}, ln = function h(t, e, i) {
  var r = e - t, n = r * 2;
  return j(t) ? hr(t, h(0, t.length - 1), e) : Ot(i, function(s) {
    return s = (n + (s - t) % n) % n || 0, t + (s > r ? n - s : s);
  });
}, ue = function(t) {
  return t.replace(Xr, function(e) {
    var i = e.indexOf("[") + 1, r = e.substring(i || 7, i ? e.indexOf("]") : e.length - 1).split(Ur);
    return ar(i ? r : +r[0], i ? 0 : +r[1], +r[2] || 1e-5);
  });
}, ur = function(t, e, i, r, n) {
  var s = e - t, o = r - i;
  return Ot(n, function(a) {
    return i + ((a - t) / s * o || 0);
  });
}, fn = function h(t, e, i, r) {
  var n = isNaN(t + e) ? 0 : function(d) {
    return (1 - d) * t + d * e;
  };
  if (!n) {
    var s = U(t), o = {}, a, u, l, _, c;
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
      for (a in e)
        hi.call(o, t, a, "get", e[a]);
      n = function(p) {
        return _i(p, o) || (s ? t.p : t);
      };
    }
  }
  return Ot(i, n);
}, Ci = function(t, e, i) {
  var r = t.labels, n = ht, s, o, a;
  for (s in r)
    o = r[s] - e, o < 0 == !!i && o && n > (o = Math.abs(o)) && (a = s, n = o);
  return a;
}, it = function(t, e, i) {
  var r = t.vars, n = r[e], s = E, o = t._ctx, a, u, l;
  if (n)
    return a = r[e + "Params"], u = r.callbackScope || t, i && Tt.length && be(), o && (E = o), l = a ? n.apply(u, a) : n.call(u), E = s, l;
}, ie = function(t) {
  return Pt(t), t.scrollTrigger && t.scrollTrigger.kill(!!G), t.progress() < 1 && it(t, "onInterrupt"), t;
}, Xt, lr = [], fr = function(t) {
  if (t)
    if (t = !t.name && t.default || t, ei() || t.headless) {
      var e = t.name, i = I(t), r = e && !i && t.init ? function() {
        this._props = [];
      } : t, n = {
        init: he,
        render: _i,
        add: hi,
        kill: kn,
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
        ot(r, ot(Te(t, n), s)), jt(r.prototype, jt(n, Te(t, s))), tt[r.prop = e] = r, t.targetTest && (ve.push(r), ni[e] = 1), e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
      }
      ji(e, r), t.register && t.register(J, r, H);
    } else
      lr.push(t);
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
}, _r = function(t, e, i) {
  var r = t ? yt(t) ? [t >> 16, t >> 8 & D, t & D] : 0 : re.black, n, s, o, a, u, l, _, c, d, p;
  if (!r) {
    if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), re[t])
      r = re[t];
    else if (t.charAt(0) === "#") {
      if (t.length < 6 && (n = t.charAt(1), s = t.charAt(2), o = t.charAt(3), t = "#" + n + n + s + s + o + o + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9)
        return r = parseInt(t.substr(1, 6), 16), [r >> 16, r >> 8 & D, r & D, parseInt(t.substr(7), 16) / 255];
      t = parseInt(t.substr(1), 16), r = [t >> 16, t >> 8 & D, t & D];
    } else if (t.substr(0, 3) === "hsl") {
      if (r = p = t.match(wi), !e)
        a = +r[0] % 360 / 360, u = +r[1] / 100, l = +r[2] / 100, s = l <= 0.5 ? l * (u + 1) : l + u - l * u, n = l * 2 - s, r.length > 3 && (r[3] *= 1), r[0] = Ee(a + 1 / 3, n, s), r[1] = Ee(a, n, s), r[2] = Ee(a - 1 / 3, n, s);
      else if (~t.indexOf("="))
        return r = t.match(Ui), i && r.length < 4 && (r[3] = 1), r;
    } else
      r = t.match(wi) || re.transparent;
    r = r.map(Number);
  }
  return e && !p && (n = r[0] / D, s = r[1] / D, o = r[2] / D, _ = Math.max(n, s, o), c = Math.min(n, s, o), l = (_ + c) / 2, _ === c ? a = u = 0 : (d = _ - c, u = l > 0.5 ? d / (2 - _ - c) : d / (_ + c), a = _ === n ? (s - o) / d + (s < o ? 6 : 0) : _ === s ? (o - n) / d + 2 : (n - s) / d + 4, a *= 60), r[0] = ~~(a + 0.5), r[1] = ~~(u * 100 + 0.5), r[2] = ~~(l * 100 + 0.5)), i && r.length < 4 && (r[3] = 1), r;
}, cr = function(t) {
  var e = [], i = [], r = -1;
  return t.split(St).forEach(function(n) {
    var s = n.match(Yt) || [];
    e.push.apply(e, s), i.push(r += s.length + 1);
  }), e.c = i, e;
}, ki = function(t, e, i) {
  var r = "", n = (t + r).match(St), s = e ? "hsla(" : "rgba(", o = 0, a, u, l, _;
  if (!n)
    return t;
  if (n = n.map(function(c) {
    return (c = _r(c, e, 1)) && s + (e ? c[0] + "," + c[1] + "%," + c[2] + "%," + c[3] : c.join(",")) + ")";
  }), i && (l = cr(t), a = i.c, a.join(r) !== l.c.join(r)))
    for (u = t.replace(St, "1").split(Yt), _ = u.length - 1; o < _; o++)
      r += u[o] + (~a.indexOf(o) ? n.shift() || s + "0,0,0,0)" : (l.length ? l : n.length ? n : i).shift());
  if (!u)
    for (u = t.split(St), _ = u.length - 1; o < _; o++)
      r += u[o] + n[o];
  return r + u[_];
}, St = (function() {
  var h = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in re)
    h += "|" + t + "\\b";
  return new RegExp(h + ")", "gi");
})(), _n = /hsl[a]?\(/, dr = function(t) {
  var e = t.join(" "), i;
  if (St.lastIndex = 0, St.test(e))
    return i = _n.test(e), t[1] = ki(t[1], i), t[0] = ki(t[0], i, cr(t[1])), !0;
}, le, et = (function() {
  var h = Date.now, t = 500, e = 33, i = h(), r = i, n = 1e3 / 240, s = n, o = [], a, u, l, _, c, d, p = function f(g) {
    var m = h() - r, y = g === !0, x, b, w, S;
    if ((m > t || m < 0) && (i += m - e), r += m, w = r - i, x = w - s, (x > 0 || y) && (S = ++_.frame, c = w - _.time * 1e3, _.time = w = w / 1e3, s += x + (x >= n ? 4 : n - x), b = 1), y || (a = u(f)), b)
      for (d = 0; d < o.length; d++)
        o[d](w, c, S, g);
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
      Gi && (!Ve && ei() && (ft = Ve = window, ii = ft.document || {}, st.gsap = J, (ft.gsapVersions || (ft.gsapVersions = [])).push(J.version), Wi(we || ft.GreenSockGlobals || !ft.gsap && ft || {}), lr.forEach(fr)), l = typeof requestAnimationFrame < "u" && requestAnimationFrame, a && _.sleep(), u = l || function(g) {
        return setTimeout(g, s - _.time * 1e3 + 1 | 0);
      }, le = 1, p(2));
    },
    sleep: function() {
      (l ? cancelAnimationFrame : clearTimeout)(a), le = 0, u = he;
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
      return _.remove(g), o[y ? "unshift" : "push"](x), Qt(), x;
    },
    remove: function(g, m) {
      ~(m = o.indexOf(g)) && o.splice(m, 1) && d >= m && d--;
    },
    _listeners: o
  }, _;
})(), Qt = function() {
  return !le && et.wake();
}, k = {}, cn = /^[\d.\-M][\d.\-,\s]/, dn = /["']/g, pn = function(t) {
  for (var e = {}, i = t.substr(1, t.length - 3).split(":"), r = i[0], n = 1, s = i.length, o, a, u; n < s; n++)
    a = i[n], o = n !== s - 1 ? a.lastIndexOf(",") : a.length, u = a.substr(0, o), e[r] = isNaN(u) ? u.replace(dn, "").trim() : +u, r = a.substr(o + 1).trim();
  return e;
}, gn = function(t) {
  var e = t.indexOf("(") + 1, i = t.indexOf(")"), r = t.indexOf("(", e);
  return t.substring(e, ~r && r < i ? t.indexOf(")", i + 1) : i);
}, mn = function(t) {
  var e = (t + "").split("("), i = k[e[0]];
  return i && e.length > 1 && i.config ? i.config.apply(null, ~t.indexOf("{") ? [pn(e[1])] : gn(t).split(",").map(Hi)) : k._CE && cn.test(t) ? k._CE("", t) : i;
}, pr = function(t) {
  return function(e) {
    return 1 - t(1 - e);
  };
}, gr = function h(t, e) {
  for (var i = t._first, r; i; )
    i instanceof $ ? h(i, e) : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== e && (i.timeline ? h(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next;
}, It = function(t, e) {
  return t && (I(t) ? t : k[t] || mn(t)) || e;
}, Bt = function(t, e, i, r) {
  i === void 0 && (i = function(a) {
    return 1 - e(1 - a);
  }), r === void 0 && (r = function(a) {
    return a < 0.5 ? e(a * 2) / 2 : 1 - e((1 - a) * 2) / 2;
  });
  var n = {
    easeIn: e,
    easeOut: i,
    easeInOut: r
  }, s;
  return Q(t, function(o) {
    k[o] = st[o] = n, k[s = o.toLowerCase()] = i;
    for (var a in n)
      k[s + (a === "easeIn" ? ".in" : a === "easeOut" ? ".out" : ".inOut")] = k[o + "." + a] = n[a];
  }), n;
}, mr = function(t) {
  return function(e) {
    return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
  };
}, ze = function h(t, e, i) {
  var r = e >= 1 ? e : 1, n = (i || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1), s = n / Be * (Math.asin(1 / r) || 0), o = function(l) {
    return l === 1 ? 1 : r * Math.pow(2, -10 * l) * Yr((l - s) * n) + 1;
  }, a = t === "out" ? o : t === "in" ? function(u) {
    return 1 - o(1 - u);
  } : mr(o);
  return n = Be / n, a.config = function(u, l) {
    return h(t, u, l);
  }, a;
}, Fe = function h(t, e) {
  e === void 0 && (e = 1.70158);
  var i = function(s) {
    return s ? --s * s * ((e + 1) * s + e) + 1 : 0;
  }, r = t === "out" ? i : t === "in" ? function(n) {
    return 1 - i(1 - n);
  } : mr(i);
  return r.config = function(n) {
    return h(t, n);
  }, r;
};
Q("Linear,Quad,Cubic,Quart,Quint,Strong", function(h, t) {
  var e = t < 5 ? t + 1 : t;
  Bt(h + ",Power" + (e - 1), t ? function(i) {
    return Math.pow(i, e);
  } : function(i) {
    return i;
  }, function(i) {
    return 1 - Math.pow(1 - i, e);
  }, function(i) {
    return i < 0.5 ? Math.pow(i * 2, e) / 2 : 1 - Math.pow((1 - i) * 2, e) / 2;
  });
});
k.Linear.easeNone = k.none = k.Linear.easeIn;
Bt("Elastic", ze("in"), ze("out"), ze());
(function(h, t) {
  var e = 1 / t, i = 2 * e, r = 2.5 * e, n = function(o) {
    return o < e ? h * o * o : o < i ? h * Math.pow(o - 1.5 / t, 2) + 0.75 : o < r ? h * (o -= 2.25 / t) * o + 0.9375 : h * Math.pow(o - 2.625 / t, 2) + 0.984375;
  };
  Bt("Bounce", function(s) {
    return 1 - n(1 - s);
  }, n);
})(7.5625, 2.75);
Bt("Expo", function(h) {
  return Math.pow(2, 10 * (h - 1)) * h + h * h * h * h * h * h * (1 - h);
});
Bt("Circ", function(h) {
  return -(Yi(1 - h * h) - 1);
});
Bt("Sine", function(h) {
  return h === 1 ? 1 : -Vr(h * Nr) + 1;
});
Bt("Back", Fe("in"), Fe("out"), Fe());
k.SteppedEase = k.steps = st.SteppedEase = {
  config: function(t, e) {
    t === void 0 && (t = 1);
    var i = 1 / t, r = t + (e ? 0 : 1), n = e ? 1 : 0, s = 1 - A;
    return function(o) {
      return ((r * de(0, s, o) | 0) + n) * i;
    };
  }
};
Wt.ease = k["quad.out"];
Q("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(h) {
  return si += h + "," + h + "Params,";
});
var yr = function(t, e) {
  this.id = Br++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : Ki, this.set = e ? e.getSetter : fi;
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
      for (De(this, i), !n._dp || n.parent || tr(n, this); n && n.parent; )
        n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && i < this._tDur || this._ts < 0 && i > 0 || !this._tDur && !i) && _t(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== i || !this._dur && !r || this._initted && Math.abs(this._zTime) === A || !this._initted && this._dur && i || !i && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = i), Qi(this, i, r)), this;
  }, t.time = function(i, r) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), i + Si(this)) % (this._dur + this._rDelay) || (i ? this._dur : 0), r) : this._time;
  }, t.totalProgress = function(i, r) {
    return arguments.length ? this.totalTime(this.totalDuration() * i, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, t.progress = function(i, r) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + Si(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, t.iteration = function(i, r) {
    var n = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (i - 1) * n, r) : this._repeat ? $t(this._tTime, n) + 1 : 1;
  }, t.timeScale = function(i, r) {
    if (!arguments.length)
      return this._rts === -A ? 0 : this._rts;
    if (this._rts === i)
      return this;
    var n = this.parent && this._ts ? Se(this.parent._time, this) : this._tTime;
    return this._rts = +i || 0, this._ts = this._ps || i === -A ? 0 : this._rts, this.totalTime(de(-Math.abs(this._delay), this.totalDuration(), n), r !== !1), Me(this), Hr(this);
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
    return G = i, ai(this) && (this.timeline && this.timeline.revert(i), this.totalTime(-0.01, i.suppressEvents)), this.data !== "nested" && i.kill !== !1 && this.kill(), G = r, this;
  }, t.globalTime = function(i) {
    for (var r = this, n = arguments.length ? i : r.rawTime(); r; )
      n = r._start + n / (Math.abs(r._ts) || 1), r = r._dp;
    return !this.parent && this._sat ? this._sat.globalTime(i) : n;
  }, t.repeat = function(i) {
    return arguments.length ? (this._repeat = i === 1 / 0 ? -2 : i, Pi(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, t.repeatDelay = function(i) {
    if (arguments.length) {
      var r = this._time;
      return this._rDelay = i, Pi(this), r ? this.time(r) : this;
    }
    return this._rDelay;
  }, t.yoyo = function(i) {
    return arguments.length ? (this._yoyo = i, this) : this._yoyo;
  }, t.seek = function(i, r) {
    return this.totalTime(at(this, i), K(r));
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
      var o = I(i) ? i : Zi, a = function() {
        var l = r.then;
        r.then = null, n && n(), I(o) && (o = o(r)) && (o.then || o === r) && (r.then = l), s(o), r.then = l;
      };
      r._initted && r.totalProgress() === 1 && r._ts >= 0 || !r._tTime && r._ts < 0 ? a() : r._prom = a;
    });
  }, t.kill = function() {
    ie(this);
  }, h;
})();
ot(fe.prototype, {
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
    return i === void 0 && (i = {}), n = h.call(this, i) || this, n.labels = {}, n.smoothChildTiming = !!i.smoothChildTiming, n.autoRemoveChildren = !!i.autoRemoveChildren, n._sort = K(i.sortChildren), F && _t(i.parent || F, gt(n), r), i.reversed && n.reverse(), i.paused && n.paused(!0), i.scrollTrigger && er(gt(n), i.scrollTrigger), n;
  }
  var e = t.prototype;
  return e.to = function(r, n, s) {
    return se(0, arguments, this), this;
  }, e.from = function(r, n, s) {
    return se(1, arguments, this), this;
  }, e.fromTo = function(r, n, s, o) {
    return se(2, arguments, this), this;
  }, e.set = function(r, n, s) {
    return n.duration = 0, n.parent = this, ne(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new V(r, n, at(this, s), 1), this;
  }, e.call = function(r, n, s) {
    return _t(this, V.delayedCall(0, r, n), s);
  }, e.staggerTo = function(r, n, s, o, a, u, l) {
    return s.duration = n, s.stagger = s.stagger || o, s.onComplete = u, s.onCompleteParams = l, s.parent = this, new V(r, s, at(this, a)), this;
  }, e.staggerFrom = function(r, n, s, o, a, u, l) {
    return s.runBackwards = 1, ne(s).immediateRender = K(s.immediateRender), this.staggerTo(r, n, s, o, a, u, l);
  }, e.staggerFromTo = function(r, n, s, o, a, u, l, _) {
    return o.startAt = s, ne(o).immediateRender = K(o.immediateRender), this.staggerTo(r, n, o, a, u, l, _);
  }, e.render = function(r, n, s) {
    var o = this._time, a = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, l = r <= 0 ? 0 : z(r), _ = this._zTime < 0 != r < 0 && (this._initted || !u), c, d, p, f, g, m, y, x, b, w, S, T;
    if (this !== F && l > a && r >= 0 && (l = a), l !== this._tTime || s || _) {
      if (o !== this._time && u && (l += this._time - o, r += this._time - o), c = l, b = this._start, x = this._ts, m = !x, _ && (u || (o = this._zTime), (r || !n) && (this._zTime = r)), this._repeat) {
        if (S = this._yoyo, g = u + this._rDelay, this._repeat < -1 && r < 0)
          return this.totalTime(g * 100 + r, n, s);
        if (c = z(l % g), l === a ? (f = this._repeat, c = u) : (w = z(l / g), f = ~~w, f && f === w && (c = u, f--), c > u && (c = u)), w = $t(this._tTime, g), !o && this._tTime && w !== f && this._tTime - w * g - this._dur <= 0 && (w = f), S && f & 1 && (c = u - c, T = 1), f !== w && !this._lock) {
          var P = S && w & 1, v = P === (S && f & 1);
          if (f < w && (P = !P), o = P ? 0 : l % u ? u : l, this._lock = 1, this.render(o || (T ? 0 : z(f * g)), n, !u)._lock = 0, this._tTime = l, !n && this.parent && it(this, "onRepeat"), this.vars.repeatRefresh && !T && (this.invalidate()._lock = 1, w = f), o && o !== this._time || m !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (u = this._dur, a = this._tDur, v && (this._lock = 2, o = P ? u : -1e-4, this.render(o, !0), this.vars.repeatRefresh && !T && this.invalidate()), this._lock = 0, !this._ts && !m)
            return this;
          gr(this, T);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (y = en(this, z(o), z(c)), y && (l -= c - (c = y._start))), this._tTime = l, this._time = c, this._act = !x, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = r, o = 0), !o && l && u && !n && !w && (it(this, "onStart"), this._tTime !== l))
        return this;
      if (c >= o && r >= 0)
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
            if (d.render(d._ts > 0 ? (C - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (C - d._start) * d._ts, n, s || G && ai(d)), c !== this._time || !this._ts && !m) {
              y = 0, p && (l += this._zTime = C ? -A : A);
              break;
            }
          }
          d = p;
        }
      }
      if (y && !n && (this.pause(), y.render(c >= o ? 0 : -A)._zTime = c >= o ? 1 : -1, this._ts))
        return this._start = b, Me(this), this.render(r, n, s);
      this._onUpdate && !n && it(this, "onUpdate", !0), (l === a && this._tTime >= this.totalDuration() || !l && o) && (b === this._start || Math.abs(x) !== Math.abs(this._ts)) && (this._lock || ((r || !u) && (l === a && this._ts > 0 || !l && this._ts < 0) && Pt(this, 1), !n && !(r < 0 && !o) && (l || o || !a) && (it(this, l === a && r >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(l < a && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, e.add = function(r, n) {
    var s = this;
    if (yt(n) || (n = at(this, n, r)), !(r instanceof fe)) {
      if (j(r))
        return r.forEach(function(o) {
          return s.add(o, n);
        }), this;
      if (U(r))
        return this.addLabel(r, n);
      if (I(r))
        r = V.delayedCall(0, r);
      else
        return this;
    }
    return this !== r ? _t(this, r, n) : this;
  }, e.getChildren = function(r, n, s, o) {
    r === void 0 && (r = !0), n === void 0 && (n = !0), s === void 0 && (s = !0), o === void 0 && (o = -ht);
    for (var a = [], u = this._first; u; )
      u._start >= o && (u instanceof V ? n && a.push(u) : (s && a.push(u), r && a.push.apply(a, u.getChildren(!0, n, s)))), u = u._next;
    return a;
  }, e.getById = function(r) {
    for (var n = this.getChildren(1, 1, 1), s = n.length; s--; )
      if (n[s].vars.id === r)
        return n[s];
  }, e.remove = function(r) {
    return U(r) ? this.removeLabel(r) : I(r) ? this.killTweensOf(r) : (r.parent === this && Oe(this, r), r === this._recent && (this._recent = this._last), Lt(this));
  }, e.totalTime = function(r, n) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = z(et.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))), h.prototype.totalTime.call(this, r, n), this._forcing = 0, this) : this._tTime;
  }, e.addLabel = function(r, n) {
    return this.labels[r] = at(this, n), this;
  }, e.removeLabel = function(r) {
    return delete this.labels[r], this;
  }, e.addPause = function(r, n, s) {
    var o = V.delayedCall(0, n || he, s);
    return o.data = "isPause", this._hasPause = 1, _t(this, o, at(this, r));
  }, e.removePause = function(r) {
    var n = this._first;
    for (r = at(this, r); n; )
      n._start === r && n.data === "isPause" && Pt(n), n = n._next;
  }, e.killTweensOf = function(r, n, s) {
    for (var o = this.getTweensOf(r, s), a = o.length; a--; )
      xt !== o[a] && o[a].kill(r, n);
    return this;
  }, e.getTweensOf = function(r, n) {
    for (var s = [], o = ut(r), a = this._first, u = yt(n), l; a; )
      a instanceof V ? $r(a._targets, o) && (u ? (!xt || a._initted && a._ts) && a.globalTime(0) <= n && a.globalTime(a.totalDuration()) > n : !n || a.isActive()) && s.push(a) : (l = a.getTweensOf(o, n)).length && s.push.apply(s, l), a = a._next;
    return s;
  }, e.tweenTo = function(r, n) {
    n = n || {};
    var s = this, o = at(s, r), a = n, u = a.startAt, l = a.onStart, _ = a.onStartParams, c = a.immediateRender, d, p = V.to(s, ot({
      ease: n.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: o,
      overwrite: "auto",
      duration: n.duration || Math.abs((o - (u && "time" in u ? u.time : s._time)) / s.timeScale()) || A,
      onStart: function() {
        if (s.pause(), !d) {
          var g = n.duration || Math.abs((o - (u && "time" in u ? u.time : s._time)) / s.timeScale());
          p._dur !== g && Kt(p, g, 0, 1).render(p._time, !0, !0), d = 1;
        }
        l && l.apply(p, _ || []);
      }
    }, n));
    return c ? p.render(0) : p;
  }, e.tweenFromTo = function(r, n, s) {
    return this.tweenTo(n, ot({
      startAt: {
        time: at(this, r)
      }
    }, s));
  }, e.recent = function() {
    return this._recent;
  }, e.nextLabel = function(r) {
    return r === void 0 && (r = this._time), Ci(this, at(this, r));
  }, e.previousLabel = function(r) {
    return r === void 0 && (r = this._time), Ci(this, at(this, r), 1);
  }, e.currentLabel = function(r) {
    return arguments.length ? this.seek(r, !0) : this.previousLabel(this._time + A);
  }, e.shiftChildren = function(r, n, s) {
    s === void 0 && (s = 0);
    var o = this._first, a = this.labels, u;
    for (r = z(r); o; )
      o._start >= s && (o._start += r, o._end += r), o = o._next;
    if (n)
      for (u in a)
        a[u] >= s && (a[u] += r);
    return Lt(this);
  }, e.invalidate = function(r) {
    var n = this._first;
    for (this._lock = 0; n; )
      n.invalidate(r), n = n._next;
    return h.prototype.invalidate.call(this, r);
  }, e.clear = function(r) {
    r === void 0 && (r = !0);
    for (var n = this._first, s; n; )
      s = n._next, this.remove(n), n = s;
    return this._dp && (this._time = this._tTime = this._pTime = 0), r && (this.labels = {}), Lt(this);
  }, e.totalDuration = function(r) {
    var n = 0, s = this, o = s._last, a = ht, u, l, _;
    if (arguments.length)
      return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -r : r));
    if (s._dirty) {
      for (_ = s.parent; o; )
        u = o._prev, o._dirty && o.totalDuration(), l = o._start, l > a && s._sort && o._ts && !s._lock ? (s._lock = 1, _t(s, o, l - o._delay, 1)._lock = 0) : a = l, l < 0 && o._ts && (n -= l, (!_ && !s._dp || _ && _.smoothChildTiming) && (s._start += z(l / s._ts), s._time -= l, s._tTime -= l), s.shiftChildren(-l, !1, -1 / 0), a = 0), o._end > n && o._ts && (n = o._end), o = u;
      Kt(s, s === F && s._time > n ? s._time : n, 1, 1), s._dirty = 0;
    }
    return s._tDur;
  }, t.updateRoot = function(r) {
    if (F._ts && (Qi(F, Se(r, F)), $i = et.frame), et.frame >= bi) {
      bi += nt.autoSleep || 120;
      var n = F._first;
      if ((!n || !n._ts) && nt.autoSleep && et._listeners.length < 2) {
        for (; n && !n._ts; )
          n = n._next;
        n || et.sleep();
      }
    }
  }, t;
})(fe);
ot($.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var yn = function(t, e, i, r, n, s, o) {
  var a = new H(this._pt, t, e, 0, 1, Sr, null, n), u = 0, l = 0, _, c, d, p, f, g, m, y;
  for (a.b = i, a.e = r, i += "", r += "", (m = ~r.indexOf("random(")) && (r = ue(r)), s && (y = [i, r], s(y, t, e), i = y[0], r = y[1]), c = i.match(Ae) || []; _ = Ae.exec(r); )
    p = _[0], f = r.substring(u, _.index), d ? d = (d + 1) % 5 : f.substr(-5) === "rgba(" && (d = 1), p !== c[l++] && (g = parseFloat(c[l - 1]) || 0, a._pt = {
      _next: a._pt,
      p: f || l === 1 ? f : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: g,
      c: p.charAt(1) === "=" ? Ut(g, p) - g : parseFloat(p) - g,
      m: d && d < 4 ? Math.round : 0
    }, u = Ae.lastIndex);
  return a.c = u < r.length ? r.substring(u, r.length) : "", a.fp = o, (qi.test(r) || m) && (a.e = 0), this._pt = a, a;
}, hi = function(t, e, i, r, n, s, o, a, u, l) {
  I(r) && (r = r(n || 0, t, s));
  var _ = t[e], c = i !== "get" ? i : I(_) ? u ? t[e.indexOf("set") || !I(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : _, d = I(_) ? u ? Tn : br : li, p;
  if (U(r) && (~r.indexOf("random(") && (r = ue(r)), r.charAt(1) === "=" && (p = Ut(c, r) + (W(c) || 0), (p || p === 0) && (r = p))), !l || c !== r || je)
    return !isNaN(c * r) && r !== "" ? (p = new H(this._pt, t, e, +c || 0, r - (c || 0), typeof _ == "boolean" ? Pn : Tr, 0, d), u && (p.fp = u), o && p.modifier(o, this, t), this._pt = p) : (!_ && !(e in t) && ri(e, r), yn.call(this, t, e, c, r, d, a || nt.stringFilter, u));
}, vn = function(t, e, i, r, n) {
  if (I(t) && (t = oe(t, n, e, i, r)), !dt(t) || t.style && t.nodeType || j(t) || Xi(t))
    return U(t) ? oe(t, n, e, i, r) : t;
  var s = {}, o;
  for (o in t)
    s[o] = oe(t[o], n, e, i, r);
  return s;
}, vr = function(t, e, i, r, n, s) {
  var o, a, u, l;
  if (tt[t] && (o = new tt[t]()).init(n, o.rawVars ? e[t] : vn(e[t], r, n, s, i), i, r, s) !== !1 && (i._pt = a = new H(i._pt, n, t, 0, 1, o.render, o, 0, o.priority), i !== Xt))
    for (u = i._ptLookup[i._targets.indexOf(n)], l = o._props.length; l--; )
      u[o._props[l]] = a;
  return o;
}, xt, je, ui = function h(t, e, i) {
  var r = t.vars, n = r.ease, s = r.startAt, o = r.immediateRender, a = r.lazy, u = r.onUpdate, l = r.runBackwards, _ = r.yoyoEase, c = r.keyframes, d = r.autoRevert, p = t._dur, f = t._startAt, g = t._targets, m = t.parent, y = m && m.data === "nested" ? m.vars.targets : g, x = t._overwrite === "auto" && !Je, b = t.timeline, w, S, T, P, v, C, O, M, R, q, Y, B, X;
  if (b && (!c || !n) && (n = "none"), t._ease = It(n, Wt.ease), t._yEase = _ ? pr(It(_ === !0 ? n : _, Wt.ease)) : 0, _ && t._yoyo && !t._repeat && (_ = t._yEase, t._yEase = t._ease, t._ease = _), t._from = !b && !!r.runBackwards, !b || c && !r.stagger) {
    if (M = g[0] ? Ft(g[0]).harness : 0, B = M && r[M.prop], w = Te(r, ni), f && (f._zTime < 0 && f.progress(1), e < 0 && l && o && !d ? f.render(-1, !0) : f.revert(l && p ? ye : Wr), f._lazy = 0), s) {
      if (Pt(t._startAt = V.set(g, ot({
        data: "isStart",
        overwrite: !1,
        parent: m,
        immediateRender: !0,
        lazy: !f && K(a),
        startAt: null,
        delay: 0,
        onUpdate: u && function() {
          return it(t, "onUpdate");
        },
        stagger: 0
      }, s))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (G || !o && !d) && t._startAt.revert(ye), o && p && e <= 0 && i <= 0) {
        e && (t._zTime = e);
        return;
      }
    } else if (l && p && !f) {
      if (e && (o = !1), T = ot({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: o && !f && K(a),
        immediateRender: o,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: m
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, w), B && (T[M.prop] = B), Pt(t._startAt = V.set(g, T)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (G ? t._startAt.revert(ye) : t._startAt.render(-1, !0)), t._zTime = e, !o)
        h(t._startAt, A, A);
      else if (!e)
        return;
    }
    for (t._pt = t._ptCache = 0, a = p && K(a) || a && !p, S = 0; S < g.length; S++) {
      if (v = g[S], O = v._gsap || oi(g)[S]._gsap, t._ptLookup[S] = q = {}, Ye[O.id] && Tt.length && be(), Y = y === g ? S : y.indexOf(v), M && (R = new M()).init(v, B || w, t, Y, y) !== !1 && (t._pt = P = new H(t._pt, v, R.name, 0, 1, R.render, R, 0, R.priority), R._props.forEach(function(lt) {
        q[lt] = P;
      }), R.priority && (C = 1)), !M || B)
        for (T in w)
          tt[T] && (R = vr(T, w, t, Y, v, y)) ? R.priority && (C = 1) : q[T] = P = hi.call(t, v, T, "get", w[T], Y, y, 0, r.stringFilter);
      t._op && t._op[S] && t.kill(v, t._op[S]), x && t._pt && (xt = t, F.killTweensOf(v, q, t.globalTime(e)), X = !t.parent, xt = 0), t._pt && a && (Ye[O.id] = 1);
    }
    C && Pr(t), t._onInit && t._onInit(t);
  }
  t._onUpdate = u, t._initted = (!t._op || t._pt) && !X, c && e <= 0 && b.render(ht, !0, !0);
}, xn = function(t, e, i, r, n, s, o, a) {
  var u = (t._pt && t._ptCache || (t._ptCache = {}))[e], l, _, c, d;
  if (!u)
    for (u = t._ptCache[e] = [], c = t._ptLookup, d = t._targets.length; d--; ) {
      if (l = c[d][e], l && l.d && l.d._pt)
        for (l = l.d._pt; l && l.p !== e && l.fp !== e; )
          l = l._next;
      if (!l)
        return je = 1, t.vars[e] = "+=0", ui(t, o), je = 0, a ? ae(e + " not eligible for reset") : 1;
      u.push(l);
    }
  for (d = u.length; d--; )
    _ = u[d], l = _._pt || _, l.s = (r || r === 0) && !n ? r : l.s + (r || 0) + s * l.c, l.c = i - l.s, _.e && (_.e = N(i) + W(_.e)), _.b && (_.b = l.s + W(_.b));
}, wn = function(t, e) {
  var i = t[0] ? Ft(t[0]).harness : 0, r = i && i.aliases, n, s, o, a;
  if (!r)
    return e;
  n = jt({}, e);
  for (s in r)
    if (s in n)
      for (a = r[s].split(","), o = a.length; o--; )
        n[a[o]] = n[s];
  return n;
}, bn = function(t, e, i, r) {
  var n = e.ease || r || "power1.inOut", s, o;
  if (j(e))
    o = i[t] || (i[t] = []), e.forEach(function(a, u) {
      return o.push({
        t: u / (e.length - 1) * 100,
        v: a,
        e: n
      });
    });
  else
    for (s in e)
      o = i[s] || (i[s] = []), s === "ease" || o.push({
        t: parseFloat(t),
        v: e[s],
        e: n
      });
}, oe = function(t, e, i, r, n) {
  return I(t) ? t.call(e, i, r, n) : U(t) && ~t.indexOf("random(") ? ue(t) : t;
}, xr = si + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", wr = {};
Q(xr + ",id,stagger,delay,duration,paused,scrollTrigger", function(h) {
  return wr[h] = 1;
});
var V = /* @__PURE__ */ (function(h) {
  Vi(t, h);
  function t(i, r, n, s) {
    var o;
    typeof r == "number" && (n.duration = r, r = n, n = null), o = h.call(this, s ? r : ne(r)) || this;
    var a = o.vars, u = a.duration, l = a.delay, _ = a.immediateRender, c = a.stagger, d = a.overwrite, p = a.keyframes, f = a.defaults, g = a.scrollTrigger, m = a.yoyoEase, y = r.parent || F, x = (j(i) || Xi(i) ? yt(i[0]) : "length" in r) ? [i] : ut(i), b, w, S, T, P, v, C, O;
    if (o._targets = x.length ? oi(x) : ae("GSAP target " + i + " not found. https://gsap.com", !nt.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = d, p || c || ge(u) || ge(l)) {
      if (r = o.vars, b = o.timeline = new $({
        data: "nested",
        defaults: f || {},
        targets: y && y.data === "nested" ? y.vars.targets : x
      }), b.kill(), b.parent = b._dp = gt(o), b._start = 0, c || ge(u) || ge(l)) {
        if (T = x.length, C = c && sr(c), dt(c))
          for (P in c)
            ~xr.indexOf(P) && (O || (O = {}), O[P] = c[P]);
        for (w = 0; w < T; w++)
          S = Te(r, wr), S.stagger = 0, m && (S.yoyoEase = m), O && jt(S, O), v = x[w], S.duration = +oe(u, gt(o), w, v, x), S.delay = (+oe(l, gt(o), w, v, x) || 0) - o._delay, !c && T === 1 && S.delay && (o._delay = l = S.delay, o._start += l, S.delay = 0), b.to(v, S, C ? C(w, v, x) : 0), b._ease = k.none;
        b.duration() ? u = l = 0 : o.timeline = 0;
      } else if (p) {
        ne(ot(b.vars.defaults, {
          ease: "none"
        })), b._ease = It(p.ease || r.ease || "none");
        var M = 0, R, q, Y;
        if (j(p))
          p.forEach(function(B) {
            return b.to(x, B, ">");
          }), b.duration();
        else {
          S = {};
          for (P in p)
            P === "ease" || P === "easeEach" || bn(P, p[P], S, p.easeEach);
          for (P in S)
            for (R = S[P].sort(function(B, X) {
              return B.t - X.t;
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
      u || o.duration(u = b.duration());
    } else
      o.timeline = 0;
    return d === !0 && !Je && (xt = gt(o), F.killTweensOf(x), xt = 0), _t(y, gt(o), n), r.reversed && o.reverse(), r.paused && o.paused(!0), (_ || !u && !p && o._start === z(y._time) && K(_) && Zr(gt(o)) && y.data !== "nested") && (o._tTime = -A, o.render(Math.max(0, -l) || 0)), g && er(gt(o), g), o;
  }
  var e = t.prototype;
  return e.render = function(r, n, s) {
    var o = this._time, a = this._tDur, u = this._dur, l = r < 0, _ = r > a - A && !l ? a : r < A ? 0 : r, c, d, p, f, g, m, y, x, b;
    if (!u)
      tn(this, r, n, s);
    else if (_ !== this._tTime || !r || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== l || this._lazy) {
      if (c = _, x = this.timeline, this._repeat) {
        if (f = u + this._rDelay, this._repeat < -1 && l)
          return this.totalTime(f * 100 + r, n, s);
        if (c = z(_ % f), _ === a ? (p = this._repeat, c = u) : (g = z(_ / f), p = ~~g, p && p === g ? (c = u, p--) : c > u && (c = u)), m = this._yoyo && p & 1, m && (b = this._yEase, c = u - c), g = $t(this._tTime, f), c === o && !s && this._initted && p === g)
          return this._tTime = _, this;
        p !== g && (x && this._yEase && gr(x, m), this.vars.repeatRefresh && !m && !this._lock && c !== f && this._initted && (this._lock = s = 1, this.render(z(f * p), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (ir(this, l ? r : c, s, n, _))
          return this._tTime = 0, this;
        if (o !== this._time && !(s && this.vars.repeatRefresh && p !== g))
          return this;
        if (u !== this._dur)
          return this.render(r, n, s);
      }
      if (this._tTime = _, this._time = c, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = y = (b || this._ease)(c / u), this._from && (this.ratio = y = 1 - y), !o && _ && !n && !g && (it(this, "onStart"), this._tTime !== _))
        return this;
      for (d = this._pt; d; )
        d.r(y, d.d), d = d._next;
      x && x.render(r < 0 ? r : x._dur * x._ease(c / this._dur), n, s) || this._startAt && (this._zTime = r), this._onUpdate && !n && (l && Xe(this, r, n, s), it(this, "onUpdate")), this._repeat && p !== g && this.vars.onRepeat && !n && this.parent && it(this, "onRepeat"), (_ === this._tDur || !_) && this._tTime === _ && (l && !this._onUpdate && Xe(this, r, !0, !0), (r || !u) && (_ === this._tDur && this._ts > 0 || !_ && this._ts < 0) && Pt(this, 1), !n && !(l && !o) && (_ || o || m) && (it(this, _ === a ? "onComplete" : "onReverseComplete", !0), this._prom && !(_ < a && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, e.targets = function() {
    return this._targets;
  }, e.invalidate = function(r) {
    return (!r || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(r), h.prototype.invalidate.call(this, r);
  }, e.resetTo = function(r, n, s, o, a) {
    le || et.wake(), this._ts || this.play();
    var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts), l;
    return this._initted || ui(this, u), l = this._ease(u / this._dur), xn(this, r, n, s, o, l, u, a) ? this.resetTo(r, n, s, o, 1) : (De(this, 0), this.parent || Ji(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, e.kill = function(r, n) {
    if (n === void 0 && (n = "all"), !r && (!n || n === "all"))
      return this._lazy = this._pt = 0, this.parent ? ie(this) : this.scrollTrigger && this.scrollTrigger.kill(!!G), this;
    if (this.timeline) {
      var s = this.timeline.totalDuration();
      return this.timeline.killTweensOf(r, n, xt && xt.vars.overwrite !== !0)._first || ie(this), this.parent && s !== this.timeline.totalDuration() && Kt(this, this._dur * this.timeline._tDur / s, 0, 1), this;
    }
    var o = this._targets, a = r ? ut(r) : o, u = this._ptLookup, l = this._pt, _, c, d, p, f, g, m;
    if ((!n || n === "all") && Qr(o, a))
      return n === "all" && (this._pt = 0), ie(this);
    for (_ = this._op = this._op || [], n !== "all" && (U(n) && (f = {}, Q(n, function(y) {
      return f[y] = 1;
    }), n = f), n = wn(o, n)), m = o.length; m--; )
      if (~a.indexOf(o[m])) {
        c = u[m], n === "all" ? (_[m] = n, p = c, d = {}) : (d = _[m] = _[m] || {}, p = n);
        for (f in p)
          g = c && c[f], g && ((!("kill" in g.d) || g.d.kill(f) === !0) && Oe(this, g, "_pt"), delete c[f]), d !== "all" && (d[f] = 1);
      }
    return this._initted && !this._pt && l && ie(this), this;
  }, t.to = function(r, n) {
    return new t(r, n, arguments[2]);
  }, t.from = function(r, n) {
    return se(1, arguments);
  }, t.delayedCall = function(r, n, s, o) {
    return new t(n, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: r,
      onComplete: n,
      onReverseComplete: n,
      onCompleteParams: s,
      onReverseCompleteParams: s,
      callbackScope: o
    });
  }, t.fromTo = function(r, n, s) {
    return se(2, arguments);
  }, t.set = function(r, n) {
    return n.duration = 0, n.repeatDelay || (n.repeat = 0), new t(r, n);
  }, t.killTweensOf = function(r, n, s) {
    return F.killTweensOf(r, n, s);
  }, t;
})(fe);
ot(V.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
Q("staggerTo,staggerFrom,staggerFromTo", function(h) {
  V[h] = function() {
    var t = new $(), e = qe.call(arguments, 0);
    return e.splice(h === "staggerFromTo" ? 5 : 4, 0, 0), t[h].apply(t, e);
  };
});
var li = function(t, e, i) {
  return t[e] = i;
}, br = function(t, e, i) {
  return t[e](i);
}, Tn = function(t, e, i, r) {
  return t[e](r.fp, i);
}, Sn = function(t, e, i) {
  return t.setAttribute(e, i);
}, fi = function(t, e) {
  return I(t[e]) ? br : ti(t[e]) && t.setAttribute ? Sn : li;
}, Tr = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
}, Pn = function(t, e) {
  return e.set(e.t, e.p, !!(e.s + e.c * t), e);
}, Sr = function(t, e) {
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
}, kn = function(t) {
  for (var e = this._pt, i, r; e; )
    r = e._next, e.p === t && !e.op || e.op === t ? Oe(this, e, "_pt") : e.dep || (i = 1), e = r;
  return !i;
}, On = function(t, e, i, r) {
  r.mSet(t, e, r.m.call(r.tween, i, r.mt), r);
}, Pr = function(t) {
  for (var e = t._pt, i, r, n, s; e; ) {
    for (i = e._next, r = n; r && r.pr > e.pr; )
      r = r._next;
    (e._prev = r ? r._prev : s) ? e._prev._next = e : n = e, (e._next = r) ? r._prev = e : s = e, e = i;
  }
  t._pt = n;
}, H = /* @__PURE__ */ (function() {
  function h(e, i, r, n, s, o, a, u, l) {
    this.t = i, this.s = n, this.c = s, this.p = r, this.r = o || Tr, this.d = a || this, this.set = u || li, this.pr = l || 0, this._next = e, e && (e._prev = this);
  }
  var t = h.prototype;
  return t.modifier = function(i, r, n) {
    this.mSet = this.mSet || this.set, this.set = On, this.m = i, this.mt = n, this.tween = r;
  }, h;
})();
Q(si + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(h) {
  return ni[h] = 1;
});
st.TweenMax = st.TweenLite = V;
st.TimelineLite = st.TimelineMax = $;
F = new $({
  sortChildren: !1,
  defaults: Wt,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
nt.stringFilter = dr;
var Nt = [], xe = {}, Mn = [], Oi = 0, Dn = 0, Le = function(t) {
  return (xe[t] || Mn).map(function(e) {
    return e();
  });
}, $e = function() {
  var t = Date.now(), e = [];
  t - Oi > 2 && (Le("matchMediaInit"), Nt.forEach(function(i) {
    var r = i.queries, n = i.conditions, s, o, a, u;
    for (o in r)
      s = ft.matchMedia(r[o]).matches, s && (a = 1), s !== n[o] && (n[o] = s, u = 1);
    u && (i.revert(), a && e.push(i));
  }), Le("matchMediaRevert"), e.forEach(function(i) {
    return i.onMatch(i, function(r) {
      return i.add(null, r);
    });
  }), Oi = t, Le("matchMedia"));
}, Cr = /* @__PURE__ */ (function() {
  function h(e, i) {
    this.selector = i && Ge(i), this.data = [], this._r = [], this.isReverted = !1, this.id = Dn++, e && this.add(e);
  }
  var t = h.prototype;
  return t.add = function(i, r, n) {
    I(i) && (n = r, r = i, i = I);
    var s = this, o = function() {
      var u = E, l = s.selector, _;
      return u && u !== s && u.data.push(s), n && (s.selector = Ge(n)), E = s, _ = r.apply(s, arguments), I(_) && s._r.push(_), E = u, s.selector = l, s.isReverted = !1, _;
    };
    return s.last = o, i === I ? o(s, function(a) {
      return s.add(null, a);
    }) : i ? s[i] = o : o;
  }, t.ignore = function(i) {
    var r = E;
    E = null, i(this), E = r;
  }, t.getTweens = function() {
    var i = [];
    return this.data.forEach(function(r) {
      return r instanceof h ? i.push.apply(i, r.getTweens()) : r instanceof V && !(r.parent && r.parent.data === "nested") && i.push(r);
    }), i;
  }, t.clear = function() {
    this._r.length = this.data.length = 0;
  }, t.kill = function(i, r) {
    var n = this;
    if (i ? (function() {
      for (var o = n.getTweens(), a = n.data.length, u; a--; )
        u = n.data[a], u.data === "isFlip" && (u.revert(), u.getChildren(!0, !0, !1).forEach(function(l) {
          return o.splice(o.indexOf(l), 1);
        }));
      for (o.map(function(l) {
        return {
          g: l._dur || l._delay || l._sat && !l._sat.vars.immediateRender ? l.globalTime(0) : -1 / 0,
          t: l
        };
      }).sort(function(l, _) {
        return _.g - l.g || -1 / 0;
      }).forEach(function(l) {
        return l.t.revert(i);
      }), a = n.data.length; a--; )
        u = n.data[a], u instanceof $ ? u.data !== "nested" && (u.scrollTrigger && u.scrollTrigger.revert(), u.kill()) : !(u instanceof V) && u.revert && u.revert(i);
      n._r.forEach(function(l) {
        return l(i, n);
      }), n.isReverted = !0;
    })() : this.data.forEach(function(o) {
      return o.kill && o.kill();
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
    var s = new Cr(0, n || this.scope), o = s.conditions = {}, a, u, l;
    E && !s.selector && (s.selector = E.selector), this.contexts.push(s), r = s.add("onMatch", r), s.queries = i;
    for (u in i)
      u === "all" ? l = 1 : (a = ft.matchMedia(i[u]), a && (Nt.indexOf(s) < 0 && Nt.push(s), (o[u] = a.matches) && (l = 1), a.addListener ? a.addListener($e) : a.addEventListener("change", $e)));
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
      return fr(r);
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
    var n = Ft(t || {}).get, s = i ? Zi : Hi;
    return i === "native" && (i = ""), t && (e ? s((tt[e] && tt[e].get || n)(t, e, i, r)) : function(o, a, u) {
      return s((tt[o] && tt[o].get || n)(t, o, a, u));
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
    var s = tt[e], o = Ft(t), a = o.harness && (o.harness.aliases || {})[e] || e, u = s ? function(l) {
      var _ = new s();
      Xt._pt = 0, _.init(t, i ? l + i : l, Xt, 0, [t]), _.render(1, _), Xt._pt && _i(1, Xt);
    } : o.set(t, a);
    return s ? u : function(l) {
      return u(t, a, i ? l + i : l, o, 1);
    };
  },
  quickTo: function(t, e, i) {
    var r, n = J.to(t, ot((r = {}, r[e] = "+=0.1", r.paused = !0, r.stagger = 0, r), i || {})), s = function(a, u, l) {
      return n.resetTo(e, a, u, l);
    };
    return s.tween = n, s;
  },
  isTweening: function(t) {
    return F.getTweensOf(t, !0).length > 0;
  },
  defaults: function(t) {
    return t && t.ease && (t.ease = It(t.ease, Wt.ease)), Ti(Wt, t || {});
  },
  config: function(t) {
    return Ti(nt, t || {});
  },
  registerEffect: function(t) {
    var e = t.name, i = t.effect, r = t.plugins, n = t.defaults, s = t.extendTimeline;
    (r || "").split(",").forEach(function(o) {
      return o && !tt[o] && !st[o] && ae(e + " effect requires " + o + " plugin.");
    }), Re[e] = function(o, a, u) {
      return i(ut(o), ot(a || {}, n), u);
    }, s && ($.prototype[e] = function(o, a, u) {
      return this.add(Re[e](o, dt(a) ? a : (u = a) && {}, this), u);
    });
  },
  registerEase: function(t, e) {
    k[t] = It(e);
  },
  parseEase: function(t, e) {
    return arguments.length ? It(t, e) : k;
  },
  getById: function(t) {
    return F.getById(t);
  },
  exportRoot: function(t, e) {
    t === void 0 && (t = {});
    var i = new $(t), r, n;
    for (i.smoothChildTiming = K(t.smoothChildTiming), F.remove(i), i._dp = 0, i._time = i._tTime = F._time, r = F._first; r; )
      n = r._next, (e || !(!r._dur && r instanceof V && r.vars.onComplete === r._targets[0])) && _t(i, r, r._start - r._delay), r = n;
    return _t(F, i, 0), i;
  },
  context: function(t, e) {
    return t ? new Cr(t, e) : E;
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
    distribute: sr,
    random: ar,
    snap: or,
    normalize: hn,
    getUnit: W,
    clamp: nn,
    splitColor: _r,
    toArray: ut,
    selector: Ge,
    mapRange: ur,
    pipe: on,
    unitize: an,
    interpolate: fn,
    shuffle: nr
  },
  install: Wi,
  effects: Re,
  ticker: et,
  updateRoot: $.updateRoot,
  plugins: tt,
  globalTimeline: F,
  core: {
    PropTween: H,
    globals: ji,
    Tween: V,
    Timeline: $,
    Animation: fe,
    getCache: Ft,
    _removeLinkedListItem: Oe,
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
  return Pe[h] = V[h];
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
}, Ie = function(t, e) {
  return {
    name: t,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(r, n, s) {
      s._onInit = function(o) {
        var a, u;
        if (U(n) && (a = {}, Q(n, function(l) {
          return a[l] = 1;
        }), n = a), e) {
          a = {};
          for (u in n)
            a[u] = e(n[u]);
          n = a;
        }
        En(o, n);
      };
    }
  };
}, J = Pe.registerPlugin({
  name: "attr",
  init: function(t, e, i, r, n) {
    var s, o, a;
    this.tween = i;
    for (s in e)
      a = t.getAttribute(s) || "", o = this.add(t, "setAttribute", (a || 0) + "", e[s], r, n, 0, 0, s), o.op = s, o.b = a, this._props.push(s);
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
}, Ie("roundProps", We), Ie("modifiers"), Ie("snap", or)) || Pe;
V.version = $.version = J.version = "3.14.2";
Gi = 1;
ei() && Qt();
k.Power0;
k.Power1;
k.Power2;
k.Power3;
k.Power4;
k.Linear;
k.Quad;
k.Cubic;
k.Quart;
k.Quint;
k.Strong;
k.Elastic;
k.Back;
k.SteppedEase;
k.Bounce;
k.Sine;
k.Expo;
k.Circ;
/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var Mi, wt, qt, ci, zt, Di, di, zn = function() {
  return typeof window < "u";
}, vt = {}, Et = 180 / Math.PI, Gt = Math.PI / 180, Vt = Math.atan2, Ai = 1e8, pi = /([A-Z])/g, Fn = /(left|right|width|margin|padding|x)/i, Ln = /[\s,\(]\S/, ct = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, Ke = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, In = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, Nn = function(t, e) {
  return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, Bn = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, Vn = function(t, e) {
  var i = e.s + e.c * t;
  e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
}, kr = function(t, e) {
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
}, L = "transform", Z = L + "Origin", jn = function h(t, e) {
  var i = this, r = this.target, n = r.style, s = r._gsap;
  if (t in vt && n) {
    if (this.tfm = this.tfm || {}, t !== "transform")
      t = ct[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(o) {
        return i.tfm[o] = mt(r, o);
      }) : this.tfm[t] = s.x ? s[t] : mt(r, t), t === Z && (this.tfm.zOrigin = s.zOrigin);
    else
      return ct.transform.split(",").forEach(function(o) {
        return h.call(i, o, e);
      });
    if (this.props.indexOf(L) >= 0)
      return;
    s.svg && (this.svgo = r.getAttribute("data-svg-origin"), this.props.push(Z, e, "")), t = L;
  }
  (n || e) && this.props.push(t, e, n[t]);
}, Mr = function(t) {
  t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
}, $n = function() {
  var t = this.props, e = this.target, i = e.style, r = e._gsap, n, s;
  for (n = 0; n < t.length; n += 3)
    t[n + 1] ? t[n + 1] === 2 ? e[t[n]](t[n + 2]) : e[t[n]] = t[n + 2] : t[n + 2] ? i[t[n]] = t[n + 2] : i.removeProperty(t[n].substr(0, 2) === "--" ? t[n] : t[n].replace(pi, "-$1").toLowerCase());
  if (this.tfm) {
    for (s in this.tfm)
      r[s] = this.tfm[s];
    r.svg && (r.renderTransform(), e.setAttribute("data-svg-origin", this.svgo || "")), n = di(), (!n || !n.isStart) && !i[L] && (Mr(i), r.zOrigin && i[Z] && (i[Z] += " " + r.zOrigin + "px", r.zOrigin = 0, r.renderTransform()), r.uncache = 1);
  }
}, Dr = function(t, e) {
  var i = {
    target: t,
    props: [],
    revert: $n,
    save: jn
  };
  return t._gsap || J.core.getCache(t), e && t.style && t.nodeType && e.split(",").forEach(function(r) {
    return i.save(r);
  }), i;
}, Ar, Qe = function(t, e) {
  var i = wt.createElementNS ? wt.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : wt.createElement(t);
  return i && i.style ? i : wt.createElement(t);
}, rt = function h(t, e, i) {
  var r = getComputedStyle(t);
  return r[e] || r.getPropertyValue(e.replace(pi, "-$1").toLowerCase()) || r.getPropertyValue(e) || !i && h(t, Ht(e) || e, 1) || "";
}, Ri = "O,Moz,ms,Ms,Webkit".split(","), Ht = function(t, e, i) {
  var r = e || zt, n = r.style, s = 5;
  if (t in n && !i)
    return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); s-- && !(Ri[s] + t in n); )
    ;
  return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? Ri[s] : "") + t;
}, He = function() {
  zn() && window.document && (Mi = window, wt = Mi.document, qt = wt.documentElement, zt = Qe("div") || {
    style: {}
  }, Qe("div"), L = Ht(L), Z = L + "Origin", zt.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Ar = !!Ht("perspective"), di = J.core.reverting, ci = 1);
}, Ei = function(t) {
  var e = t.ownerSVGElement, i = Qe("svg", e && e.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = t.cloneNode(!0), n;
  r.style.display = "block", i.appendChild(r), qt.appendChild(i);
  try {
    n = r.getBBox();
  } catch {
  }
  return i.removeChild(r), qt.removeChild(i), n;
}, zi = function(t, e) {
  for (var i = e.length; i--; )
    if (t.hasAttribute(e[i]))
      return t.getAttribute(e[i]);
}, Rr = function(t) {
  var e, i;
  try {
    e = t.getBBox();
  } catch {
    e = Ei(t), i = 1;
  }
  return e && (e.width || e.height) || i || (e = Ei(t)), e && !e.width && !e.x && !e.y ? {
    x: +zi(t, ["x", "cx", "x1"]) || 0,
    y: +zi(t, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : e;
}, Er = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Rr(t));
}, Ct = function(t, e) {
  if (e) {
    var i = t.style, r;
    e in vt && e !== Z && (e = L), i.removeProperty ? (r = e.substr(0, 2), (r === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), i.removeProperty(r === "--" ? e : e.replace(pi, "-$1").toLowerCase())) : i.removeAttribute(e);
  }
}, bt = function(t, e, i, r, n, s) {
  var o = new H(t._pt, e, i, 0, 1, s ? Or : kr);
  return t._pt = o, o.b = r, o.e = n, t._props.push(i), o;
}, Fi = {
  deg: 1,
  rad: 1,
  turn: 1
}, Kn = {
  grid: 1,
  flex: 1
}, kt = function h(t, e, i, r) {
  var n = parseFloat(i) || 0, s = (i + "").trim().substr((n + "").length) || "px", o = zt.style, a = Fn.test(e), u = t.tagName.toLowerCase() === "svg", l = (u ? "client" : "offset") + (a ? "Width" : "Height"), _ = 100, c = r === "px", d = r === "%", p, f, g, m;
  if (r === s || !n || Fi[r] || Fi[s])
    return n;
  if (s !== "px" && !c && (n = h(t, e, i, "px")), m = t.getCTM && Er(t), (d || s === "%") && (vt[e] || ~e.indexOf("adius")))
    return p = m ? t.getBBox()[a ? "width" : "height"] : t[l], N(d ? n / p * _ : n / 100 * p);
  if (o[a ? "width" : "height"] = _ + (c ? s : r), f = r !== "rem" && ~e.indexOf("adius") || r === "em" && t.appendChild && !u ? t : t.parentNode, m && (f = (t.ownerSVGElement || {}).parentNode), (!f || f === wt || !f.appendChild) && (f = wt.body), g = f._gsap, g && d && g.width && a && g.time === et.time && !g.uncache)
    return N(n / g.width * _);
  if (d && (e === "height" || e === "width")) {
    var y = t.style[e];
    t.style[e] = _ + r, p = t[l], y ? t.style[e] = y : Ct(t, e);
  } else
    (d || s === "%") && !Kn[rt(f, "display")] && (o.position = rt(t, "position")), f === t && (o.position = "static"), f.appendChild(zt), p = zt[l], f.removeChild(zt), o.position = "absolute";
  return a && d && (g = Ft(f), g.time = et.time, g.width = f[l]), N(c ? p * n / _ : p && n ? _ / p * n : 0);
}, mt = function(t, e, i, r) {
  var n;
  return ci || He(), e in ct && e !== "transform" && (e = ct[e], ~e.indexOf(",") && (e = e.split(",")[0])), vt[e] && e !== "transform" ? (n = ce(t, r), n = e !== "transformOrigin" ? n[e] : n.svg ? n.origin : ke(rt(t, Z)) + " " + n.zOrigin + "px") : (n = t.style[e], (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) && (n = Ce[e] && Ce[e](t, e, i) || rt(t, e) || Ki(t, e) || (e === "opacity" ? 1 : 0))), i && !~(n + "").trim().indexOf(" ") ? kt(t, e, n, i) + i : n;
}, Qn = function(t, e, i, r) {
  if (!i || i === "none") {
    var n = Ht(e, t, 1), s = n && rt(t, n, 1);
    s && s !== i ? (e = n, i = s) : e === "borderColor" && (i = rt(t, "borderTopColor"));
  }
  var o = new H(this._pt, t.style, e, 0, 1, Sr), a = 0, u = 0, l, _, c, d, p, f, g, m, y, x, b, w;
  if (o.b = i, o.e = r, i += "", r += "", r.substring(0, 6) === "var(--" && (r = rt(t, r.substring(4, r.indexOf(")")))), r === "auto" && (f = t.style[e], t.style[e] = r, r = rt(t, e) || r, f ? t.style[e] = f : Ct(t, e)), l = [i, r], dr(l), i = l[0], r = l[1], c = i.match(Yt) || [], w = r.match(Yt) || [], w.length) {
    for (; _ = Yt.exec(r); )
      g = _[0], y = r.substring(a, _.index), p ? p = (p + 1) % 5 : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (p = 1), g !== (f = c[u++] || "") && (d = parseFloat(f) || 0, b = f.substr((d + "").length), g.charAt(1) === "=" && (g = Ut(d, g) + b), m = parseFloat(g), x = g.substr((m + "").length), a = Yt.lastIndex - x.length, x || (x = x || nt.units[e] || b, a === r.length && (r += x, o.e += x)), b !== x && (d = kt(t, e, f, x) || 0), o._pt = {
        _next: o._pt,
        p: y || u === 1 ? y : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: d,
        c: m - d,
        m: p && p < 4 || e === "zIndex" ? Math.round : 0
      });
    o.c = a < r.length ? r.substring(a, r.length) : "";
  } else
    o.r = e === "display" && r === "none" ? Or : kr;
  return qi.test(r) && (o.e = 0), this._pt = o, o;
}, Li = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, Hn = function(t) {
  var e = t.split(" "), i = e[0], r = e[1] || "50%";
  return (i === "top" || i === "bottom" || r === "left" || r === "right") && (t = i, i = r, r = t), e[0] = Li[i] || i, e[1] = Li[r] || r, e.join(" ");
}, Zn = function(t, e) {
  if (e.tween && e.tween._time === e.tween._dur) {
    var i = e.t, r = i.style, n = e.u, s = i._gsap, o, a, u;
    if (n === "all" || n === !0)
      r.cssText = "", a = 1;
    else
      for (n = n.split(","), u = n.length; --u > -1; )
        o = n[u], vt[o] && (a = 1, o = o === "transformOrigin" ? Z : L), Ct(i, o);
    a && (Ct(i, L), s && (s.svg && i.removeAttribute("transform"), r.scale = r.rotate = r.translate = "none", ce(i, 1), s.uncache = 1, Mr(r)));
  }
}, Ce = {
  clearProps: function(t, e, i, r, n) {
    if (n.data !== "isFromStart") {
      var s = t._pt = new H(t._pt, e, i, 0, 0, Zn);
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
}, _e = [1, 0, 0, 1, 0, 0], zr = {}, Fr = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
}, Ii = function(t) {
  var e = rt(t, L);
  return Fr(e) ? _e : e.substr(7).match(Ui).map(N);
}, gi = function(t, e) {
  var i = t._gsap || Ft(t), r = t.style, n = Ii(t), s, o, a, u;
  return i.svg && t.getAttribute("transform") ? (a = t.transform.baseVal.consolidate().matrix, n = [a.a, a.b, a.c, a.d, a.e, a.f], n.join(",") === "1,0,0,1,0,0" ? _e : n) : (n === _e && !t.offsetParent && t !== qt && !i.svg && (a = r.display, r.display = "block", s = t.parentNode, (!s || !t.offsetParent && !t.getBoundingClientRect().width) && (u = 1, o = t.nextElementSibling, qt.appendChild(t)), n = Ii(t), a ? r.display = a : Ct(t, "display"), u && (o ? s.insertBefore(t, o) : s ? s.appendChild(t) : qt.removeChild(t))), e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
}, Ze = function(t, e, i, r, n, s) {
  var o = t._gsap, a = n || gi(t, !0), u = o.xOrigin || 0, l = o.yOrigin || 0, _ = o.xOffset || 0, c = o.yOffset || 0, d = a[0], p = a[1], f = a[2], g = a[3], m = a[4], y = a[5], x = e.split(" "), b = parseFloat(x[0]) || 0, w = parseFloat(x[1]) || 0, S, T, P, v;
  i ? a !== _e && (T = d * g - p * f) && (P = b * (g / T) + w * (-f / T) + (f * y - g * m) / T, v = b * (-p / T) + w * (d / T) - (d * y - p * m) / T, b = P, w = v) : (S = Rr(t), b = S.x + (~x[0].indexOf("%") ? b / 100 * S.width : b), w = S.y + (~(x[1] || x[0]).indexOf("%") ? w / 100 * S.height : w)), r || r !== !1 && o.smooth ? (m = b - u, y = w - l, o.xOffset = _ + (m * d + y * f) - m, o.yOffset = c + (m * p + y * g) - y) : o.xOffset = o.yOffset = 0, o.xOrigin = b, o.yOrigin = w, o.smooth = !!r, o.origin = e, o.originIsAbsolute = !!i, t.style[Z] = "0px 0px", s && (bt(s, o, "xOrigin", u, b), bt(s, o, "yOrigin", l, w), bt(s, o, "xOffset", _, o.xOffset), bt(s, o, "yOffset", c, o.yOffset)), t.setAttribute("data-svg-origin", b + " " + w);
}, ce = function(t, e) {
  var i = t._gsap || new yr(t);
  if ("x" in i && !e && !i.uncache)
    return i;
  var r = t.style, n = i.scaleX < 0, s = "px", o = "deg", a = getComputedStyle(t), u = rt(t, Z) || "0", l, _, c, d, p, f, g, m, y, x, b, w, S, T, P, v, C, O, M, R, q, Y, B, X, lt, pe, Zt, Jt, Mt, mi, pt, Dt;
  return l = _ = c = f = g = m = y = x = b = 0, d = p = 1, i.svg = !!(t.getCTM && Er(t)), a.translate && ((a.translate !== "none" || a.scale !== "none" || a.rotate !== "none") && (r[L] = (a.translate !== "none" ? "translate3d(" + (a.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (a.rotate !== "none" ? "rotate(" + a.rotate + ") " : "") + (a.scale !== "none" ? "scale(" + a.scale.split(" ").join(",") + ") " : "") + (a[L] !== "none" ? a[L] : "")), r.scale = r.rotate = r.translate = "none"), T = gi(t, i.svg), i.svg && (i.uncache ? (lt = t.getBBox(), u = i.xOrigin - lt.x + "px " + (i.yOrigin - lt.y) + "px", X = "") : X = !e && t.getAttribute("data-svg-origin"), Ze(t, X || u, !!X || i.originIsAbsolute, i.smooth !== !1, T)), w = i.xOrigin || 0, S = i.yOrigin || 0, T !== _e && (O = T[0], M = T[1], R = T[2], q = T[3], l = Y = T[4], _ = B = T[5], T.length === 6 ? (d = Math.sqrt(O * O + M * M), p = Math.sqrt(q * q + R * R), f = O || M ? Vt(M, O) * Et : 0, y = R || q ? Vt(R, q) * Et + f : 0, y && (p *= Math.abs(Math.cos(y * Gt))), i.svg && (l -= w - (w * O + S * R), _ -= S - (w * M + S * q))) : (Dt = T[6], mi = T[7], Zt = T[8], Jt = T[9], Mt = T[10], pt = T[11], l = T[12], _ = T[13], c = T[14], P = Vt(Dt, Mt), g = P * Et, P && (v = Math.cos(-P), C = Math.sin(-P), X = Y * v + Zt * C, lt = B * v + Jt * C, pe = Dt * v + Mt * C, Zt = Y * -C + Zt * v, Jt = B * -C + Jt * v, Mt = Dt * -C + Mt * v, pt = mi * -C + pt * v, Y = X, B = lt, Dt = pe), P = Vt(-R, Mt), m = P * Et, P && (v = Math.cos(-P), C = Math.sin(-P), X = O * v - Zt * C, lt = M * v - Jt * C, pe = R * v - Mt * C, pt = q * C + pt * v, O = X, M = lt, R = pe), P = Vt(M, O), f = P * Et, P && (v = Math.cos(P), C = Math.sin(P), X = O * v + M * C, lt = Y * v + B * C, M = M * v - O * C, B = B * v - Y * C, O = X, Y = lt), g && Math.abs(g) + Math.abs(f) > 359.9 && (g = f = 0, m = 180 - m), d = N(Math.sqrt(O * O + M * M + R * R)), p = N(Math.sqrt(B * B + Dt * Dt)), P = Vt(Y, B), y = Math.abs(P) > 2e-4 ? P * Et : 0, b = pt ? 1 / (pt < 0 ? -pt : pt) : 0), i.svg && (X = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !Fr(rt(t, L)), X && t.setAttribute("transform", X))), Math.abs(y) > 90 && Math.abs(y) < 270 && (n ? (d *= -1, y += f <= 0 ? 180 : -180, f += f <= 0 ? 180 : -180) : (p *= -1, y += y <= 0 ? 180 : -180)), e = e || i.uncache, i.x = l - ((i.xPercent = l && (!e && i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-l) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + s, i.y = _ - ((i.yPercent = _ && (!e && i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-_) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + s, i.z = c + s, i.scaleX = N(d), i.scaleY = N(p), i.rotation = N(f) + o, i.rotationX = N(g) + o, i.rotationY = N(m) + o, i.skewX = y + o, i.skewY = x + o, i.transformPerspective = b + s, (i.zOrigin = parseFloat(u.split(" ")[2]) || !e && i.zOrigin || 0) && (r[Z] = ke(u)), i.xOffset = i.yOffset = 0, i.force3D = nt.force3D, i.renderTransform = i.svg ? ts : Ar ? Lr : Jn, i.uncache = 0, i;
}, ke = function(t) {
  return (t = t.split(" "))[0] + " " + t[1];
}, Ne = function(t, e, i) {
  var r = W(e);
  return N(parseFloat(e) + parseFloat(kt(t, "x", i + "px", r))) + r;
}, Jn = function(t, e) {
  e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Lr(t, e);
}, At = "0deg", te = "0px", Rt = ") ", Lr = function(t, e) {
  var i = e || this, r = i.xPercent, n = i.yPercent, s = i.x, o = i.y, a = i.z, u = i.rotation, l = i.rotationY, _ = i.rotationX, c = i.skewX, d = i.skewY, p = i.scaleX, f = i.scaleY, g = i.transformPerspective, m = i.force3D, y = i.target, x = i.zOrigin, b = "", w = m === "auto" && t && t !== 1 || m === !0;
  if (x && (_ !== At || l !== At)) {
    var S = parseFloat(l) * Gt, T = Math.sin(S), P = Math.cos(S), v;
    S = parseFloat(_) * Gt, v = Math.cos(S), s = Ne(y, s, T * v * -x), o = Ne(y, o, -Math.sin(S) * -x), a = Ne(y, a, P * v * -x + x);
  }
  g !== te && (b += "perspective(" + g + Rt), (r || n) && (b += "translate(" + r + "%, " + n + "%) "), (w || s !== te || o !== te || a !== te) && (b += a !== te || w ? "translate3d(" + s + ", " + o + ", " + a + ") " : "translate(" + s + ", " + o + Rt), u !== At && (b += "rotate(" + u + Rt), l !== At && (b += "rotateY(" + l + Rt), _ !== At && (b += "rotateX(" + _ + Rt), (c !== At || d !== At) && (b += "skew(" + c + ", " + d + Rt), (p !== 1 || f !== 1) && (b += "scale(" + p + ", " + f + Rt), y.style[L] = b || "translate(0, 0)";
}, ts = function(t, e) {
  var i = e || this, r = i.xPercent, n = i.yPercent, s = i.x, o = i.y, a = i.rotation, u = i.skewX, l = i.skewY, _ = i.scaleX, c = i.scaleY, d = i.target, p = i.xOrigin, f = i.yOrigin, g = i.xOffset, m = i.yOffset, y = i.forceCSS, x = parseFloat(s), b = parseFloat(o), w, S, T, P, v;
  a = parseFloat(a), u = parseFloat(u), l = parseFloat(l), l && (l = parseFloat(l), u += l, a += l), a || u ? (a *= Gt, u *= Gt, w = Math.cos(a) * _, S = Math.sin(a) * _, T = Math.sin(a - u) * -c, P = Math.cos(a - u) * c, u && (l *= Gt, v = Math.tan(u - l), v = Math.sqrt(1 + v * v), T *= v, P *= v, l && (v = Math.tan(l), v = Math.sqrt(1 + v * v), w *= v, S *= v)), w = N(w), S = N(S), T = N(T), P = N(P)) : (w = _, P = c, S = T = 0), (x && !~(s + "").indexOf("px") || b && !~(o + "").indexOf("px")) && (x = kt(d, "x", s, "px"), b = kt(d, "y", o, "px")), (p || f || g || m) && (x = N(x + p - (p * w + f * T) + g), b = N(b + f - (p * S + f * P) + m)), (r || n) && (v = d.getBBox(), x = N(x + r / 100 * v.width), b = N(b + n / 100 * v.height)), v = "matrix(" + w + "," + S + "," + T + "," + P + "," + x + "," + b + ")", d.setAttribute("transform", v), y && (d.style[L] = v);
}, es = function(t, e, i, r, n) {
  var s = 360, o = U(n), a = parseFloat(n) * (o && ~n.indexOf("rad") ? Et : 1), u = a - r, l = r + u + "deg", _, c;
  return o && (_ = n.split("_")[1], _ === "short" && (u %= s, u !== u % (s / 2) && (u += u < 0 ? s : -s)), _ === "cw" && u < 0 ? u = (u + s * Ai) % s - ~~(u / s) * s : _ === "ccw" && u > 0 && (u = (u - s * Ai) % s - ~~(u / s) * s)), t._pt = c = new H(t._pt, e, i, r, u, In), c.e = l, c.u = "deg", t._props.push(i), c;
}, Ni = function(t, e) {
  for (var i in e)
    t[i] = e[i];
  return t;
}, is = function(t, e, i) {
  var r = Ni({}, i._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", s = i.style, o, a, u, l, _, c, d, p;
  r.svg ? (u = i.getAttribute("transform"), i.setAttribute("transform", ""), s[L] = e, o = ce(i, 1), Ct(i, L), i.setAttribute("transform", u)) : (u = getComputedStyle(i)[L], s[L] = e, o = ce(i, 1), s[L] = u);
  for (a in vt)
    u = r[a], l = o[a], u !== l && n.indexOf(a) < 0 && (d = W(u), p = W(l), _ = d !== p ? kt(i, a, u, p) : parseFloat(u), c = parseFloat(l), t._pt = new H(t._pt, o, a, _, c - _, Ke), t._pt.u = p || 0, t._props.push(a));
  Ni(o, r);
};
Q("padding,margin,Width,Radius", function(h, t) {
  var e = "Top", i = "Right", r = "Bottom", n = "Left", s = (t < 3 ? [e, i, r, n] : [e + n, e + i, r + i, r + n]).map(function(o) {
    return t < 2 ? h + o : "border" + o + h;
  });
  Ce[t > 1 ? "border" + h : h] = function(o, a, u, l, _) {
    var c, d;
    if (arguments.length < 4)
      return c = s.map(function(p) {
        return mt(o, p, u);
      }), d = c.join(" "), d.split(c[0]).length === 5 ? c[0] : d;
    c = (l + "").split(" "), d = {}, s.forEach(function(p, f) {
      return d[p] = c[f] = c[f] || c[(f - 1) / 2 | 0];
    }), o.init(a, d, _);
  };
});
var Ir = {
  name: "css",
  register: He,
  targetTest: function(t) {
    return t.style && t.nodeType;
  },
  init: function(t, e, i, r, n) {
    var s = this._props, o = t.style, a = i.vars.startAt, u, l, _, c, d, p, f, g, m, y, x, b, w, S, T, P, v;
    ci || He(), this.styles = this.styles || Dr(t), P = this.styles.props, this.tween = i;
    for (f in e)
      if (f !== "autoRound" && (l = e[f], !(tt[f] && vr(f, e, i, r, t, n)))) {
        if (d = typeof l, p = Ce[f], d === "function" && (l = l.call(i, r, t, n), d = typeof l), d === "string" && ~l.indexOf("random(") && (l = ue(l)), p)
          p(this, t, f, l, i) && (T = 1);
        else if (f.substr(0, 2) === "--")
          u = (getComputedStyle(t).getPropertyValue(f) + "").trim(), l += "", St.lastIndex = 0, St.test(u) || (g = W(u), m = W(l), m ? g !== m && (u = kt(t, f, u, m) + m) : g && (l += g)), this.add(o, "setProperty", u, l, r, n, 0, 0, f), s.push(f), P.push(f, 0, o[f]);
        else if (d !== "undefined") {
          if (a && f in a ? (u = typeof a[f] == "function" ? a[f].call(i, r, t, n) : a[f], U(u) && ~u.indexOf("random(") && (u = ue(u)), W(u + "") || u === "auto" || (u += nt.units[f] || W(mt(t, f)) || ""), (u + "").charAt(1) === "=" && (u = mt(t, f))) : u = mt(t, f), c = parseFloat(u), y = d === "string" && l.charAt(1) === "=" && l.substr(0, 2), y && (l = l.substr(2)), _ = parseFloat(l), f in ct && (f === "autoAlpha" && (c === 1 && mt(t, "visibility") === "hidden" && _ && (c = 0), P.push("visibility", 0, o.visibility), bt(this, o, "visibility", c ? "inherit" : "hidden", _ ? "inherit" : "hidden", !_)), f !== "scale" && f !== "transform" && (f = ct[f], ~f.indexOf(",") && (f = f.split(",")[0]))), x = f in vt, x) {
            if (this.styles.save(f), v = l, d === "string" && l.substring(0, 6) === "var(--") {
              if (l = rt(t, l.substring(4, l.indexOf(")"))), l.substring(0, 5) === "calc(") {
                var C = t.style.perspective;
                t.style.perspective = l, l = rt(t, "perspective"), C ? t.style.perspective = C : Ct(t, "perspective");
              }
              _ = parseFloat(l);
            }
            if (b || (w = t._gsap, w.renderTransform && !e.parseTransform || ce(t, e.parseTransform), S = e.smoothOrigin !== !1 && w.smooth, b = this._pt = new H(this._pt, o, L, 0, 1, w.renderTransform, w, 0, -1), b.dep = 1), f === "scale")
              this._pt = new H(this._pt, w, "scaleY", w.scaleY, (y ? Ut(w.scaleY, y + _) : _) - w.scaleY || 0, Ke), this._pt.u = 0, s.push("scaleY", f), f += "X";
            else if (f === "transformOrigin") {
              P.push(Z, 0, o[Z]), l = Hn(l), w.svg ? Ze(t, l, 0, S, 0, this) : (m = parseFloat(l.split(" ")[2]) || 0, m !== w.zOrigin && bt(this, w, "zOrigin", w.zOrigin, m), bt(this, o, f, ke(u), ke(l)));
              continue;
            } else if (f === "svgOrigin") {
              Ze(t, l, 1, S, 0, this);
              continue;
            } else if (f in zr) {
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
          } else f in o || (f = Ht(f) || f);
          if (x || (_ || _ === 0) && (c || c === 0) && !Ln.test(l) && f in o)
            g = (u + "").substr((c + "").length), _ || (_ = 0), m = W(l) || (f in nt.units ? nt.units[f] : g), g !== m && (c = kt(t, f, u, m)), this._pt = new H(this._pt, x ? w : o, f, c, (y ? Ut(c, y + _) : _) - c, !x && (m === "px" || f === "zIndex") && e.autoRound !== !1 ? Vn : Ke), this._pt.u = m || 0, x && v !== l ? (this._pt.b = u, this._pt.e = v, this._pt.r = Bn) : g !== m && m !== "%" && (this._pt.b = u, this._pt.r = Nn);
          else if (f in o)
            Qn.call(this, t, f, u, y ? y + l : l);
          else if (f in t)
            this.add(t, f, u || t[f], y ? y + l : l, r, n);
          else if (f !== "parseTransform") {
            ri(f, l);
            continue;
          }
          x || (f in o ? P.push(f, 0, o[f]) : typeof t[f] == "function" ? P.push(f, 2, t[f]()) : P.push(f, 1, u || t[f])), s.push(f);
        }
      }
    T && Pr(this);
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
    return r && r.indexOf(",") < 0 && (e = r), e in vt && e !== Z && (t._gsap.x || mt(t, "x")) ? i && Di === i ? e === "scale" ? qn : Un : (Di = i || {}) && (e === "scale" ? Gn : Wn) : t.style && !ti(t.style[e]) ? Yn : ~e.indexOf("-") ? Xn : fi(t, e);
  },
  core: {
    _removeProperty: Ct,
    _getMatrix: gi
  }
};
J.utils.checkPrefix = Ht;
J.core.getStyleSaver = Dr;
(function(h, t, e, i) {
  var r = Q(h + "," + t + "," + e, function(n) {
    vt[n] = 1;
  });
  Q(t, function(n) {
    nt.units[n] = "deg", zr[n] = 1;
  }), ct[r[13]] = h + "," + t, Q(i, function(n) {
    var s = n.split(":");
    ct[s[1]] = r[s[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Q("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(h) {
  nt.units[h] = "px";
});
J.registerPlugin(Ir);
var rs = J.registerPlugin(Ir) || J, Bi = rs.core.Tween;
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
    function o(m, y) {
      if (Bi.killTweensOf(r), y && y.tween) {
        m.onUpdate = function() {
          d("change");
        };
        for (var x in y)
          m[x] = y[x];
        Bi.to(r, y.tween.time || 1, m);
      } else {
        var x;
        for (x in r)
          isNaN(m[x]) || (r[x] = m[x]);
      }
      return d("change"), e;
    }
    function a() {
      o({
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
    t && (t.color && o(t.color), t.change && g(t.change)), e.on = p, e.off = f, e.change = g, e.getValue = u, e.setValue = o, e.toRGBA = _, e.toRGB = c, e.toArray = l, e.interpolate = s, e.randomize = a;
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
    ), r = { x: 0, y: 0 }, n = document.createElement("canvas"), s = n.getContext("2d"), o = document.createElement("canvas"), a = o.getContext("2d");
    function u() {
      return o.width = n.width, o.height = n.height, a.drawImage(n, 0, 0), e;
    }
    function l() {
      return o;
    }
    function _() {
      return a.clearRect(0, 0, o.width, o.height), a.drawImage(n, 0, 0), o;
    }
    function c() {
      i.render && i.render.call(e, e.ctx, e.cvs, { target: e });
    }
    function d(v, C, O) {
      return C === null && (arguments[1] = 0), O === null && (arguments[2] = 0), s.drawImage.apply(s, arguments), e;
    }
    function p(v, C, O) {
      s.beginPath(), s.arc(v, C, O, 0, 2 * Math.PI), s.fill(), s.closePath();
    }
    function f(v, C, O, M) {
      return s.clearRect(v || 0, C || 0, O || n.width, M || n.height), e;
    }
    function g(v, C) {
      var O = s.fillStyle, M = s.strokeStyle;
      return n.width = v, n.height = C, s.fillStyle = O, s.strokeStyle = M, b(), e;
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
      }, o.width = n.width, o.height = n.height;
    }
    function w() {
      return r;
    }
    function S(v, C, O, M) {
      return s.fillRect(v || 0, C || 0, O || n.width, M || n.height), e;
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
   * @param {HTMLCanvasElement|string|null} opts.canvas - canvas element or selector (optional; the original code appends CanvasSprite canvases)
   * @param {boolean} opts.createScore - whether to create the SCORE div
   */
  constructor({ canvas: t = "canvas#header-anim", createScore: e = !0 } = {}) {
    console.log("build game");
    const i = this;
    this.RAD = Math.PI / 180, this.rand = (r, n = 0, s) => {
      typeof n != "number" && (typeof n == "boolean" && (s = !0), Number.isNaN(n) && (n = 0));
      const o = r + Math.random() * (n - r);
      return s === !0 ? Math.round(o) : o;
    }, this.interpolate = (r, n, s) => r + (n - r) * s, this.layers = [], this.lines = [], this.dots = [], this.explosions = [], this.animating = !1, this.viewport = {
      width: 100,
      height: 100,
      scaleDelta: 1.02,
      mouseFactor: 0.02,
      acceleration: 0,
      centerX: 50,
      centerY: 50
    }, this.mouseX = 0, this.mouseY = 0, this.mouseIsDown = !1, this.centerOffsetX = 0, this.centerOffsetY = 0, this.pilot = { offsetX: 0, offsetY: 0, x: 0, y: 0 }, this.score = { level: 0, kills: 0, points: 0 }, this.scoreEl = null, this.createScore = e, this.canvas = typeof t == "string" ? document.querySelector(t) : t instanceof HTMLCanvasElement ? t : null, this.viewport.mouseFactor = this.interpolate(0.02, 0.05, this.viewport.acceleration), this.viewport.scaleDelta = this.interpolate(1, 1.1, this.viewport.acceleration), this.flavors = {
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
        const o = new ee({ color: i.dotColor.getValue() });
        o.interpolate({ r: 255, g: 255, b: 255 }, 0.5), s.addColorStop(0.7, `rgba(${o.toArray().slice(0, -1).join()},1)`), s.addColorStop(0.75, `rgba(${n.join()},.5)`), s.addColorStop(1, `rgba(${n.join()},0)`), this.fillStyle(s).circle(r.x, r.y, this.height() * 0.5);
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
    this.createScore && (this.scoreEl = document.createElement("div"), this.scoreEl.id = "score", this.scoreEl.textContent = "kills: 0", Object.assign(this.scoreEl.style, { padding: "10px", zIndex: "990", position: "absolute", top: "0px", color: "#fff", zIndex: 3 }), document.body.appendChild(this.scoreEl), this.scoreEl.id = "l0"), this.setupLayers(), this.mountLayers(), document.addEventListener("mousedown", this._handleMouse), document.addEventListener("mouseup", this._handleMouse), document.addEventListener("mousemove", this._handleMouse), window.addEventListener("keydown", this._handleKeys), document.body.addEventListener("keyup", this._handleKeysBody), document.body.addEventListener("keydown", this._handleKeysBody);
    for (let t = 0; t < 5; t++) this.makeLine();
    for (let t = 0; t < 3; t++) this.addDot();
    this.prerender(), this.resize(this.canvas.width, this.canvas.height), this.startAnim(), this.setFlavor("purple_blue");
  }
  destroy() {
    console.log("destroy game"), this.stopAnim(), document.removeEventListener("mousedown", this._handleMouse), document.removeEventListener("mouseup", this._handleMouse), document.removeEventListener("mousemove", this._handleMouse), window.removeEventListener("keydown", this._handleKeys), document.body.removeEventListener("keyup", this._handleKeysBody), document.body.removeEventListener("keydown", this._handleKeysBody), this.scoreEl?.parentNode && this.scoreEl.parentNode.removeChild(this.scoreEl), this.layers.forEach((t) => t?.cvs?.parentNode && t.cvs.parentNode.removeChild(t.cvs));
  }
  // ------- UI / mounting -------
  mountLayers() {
    Object.assign(this.layers[0].cvs.style, { zIndex: "900", position: "absolute", top: "0px", left: "0px", zIndex: 1 }), Object.assign(this.layers[1].cvs.style, { zIndex: "910", position: "absolute", top: "0px", left: "0px", zIndex: 2 }), document.body.appendChild(this.layers[0].cvs), document.body.appendChild(this.layers[1].cvs), this.layers[0].cvs.id = "l0", this.layers[1].cvs.id = "l1";
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
          const o = Math.sqrt(s.lifespan);
          e.drawImage(t.dotSprite.cvs, 0, 0, t.dotSprite.width(), t.dotSprite.height(), s._x, s._y, o, o), s.killed ? (t.explosion(s._x, s._y, o), t.dots.splice(n, 1)) : s.lifespan < 0.01 ? t.dots.splice(n, 1) : s.lifespan *= 0.98;
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
      for (let o = n.points.length - 1; o >= 0; o--) {
        const a = n.points[o];
        a.x = o * s, a.y = i * 0.55;
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
const as = ({ width: h = 500, height: t = 500 }) => {
  const e = vi(null), i = vi(null);
  return xi(() => {
    if (e.current)
      try {
        return i.current = new ns({ canvas: e.current, createScore: !0 }), i.current.initGame(), i.current.resize(h, t), () => {
          i.current.destroy();
        };
      } catch (r) {
        console.log(r);
      }
  }, []), xi(() => {
    i.current && i.current.resize(h, t);
  }, [h, t]), /* @__PURE__ */ yi("div", { children: /* @__PURE__ */ yi("canvas", { ref: e, width: 500, height: 500 }) });
};
export {
  as as SpaceBallsComponent
};
//# sourceMappingURL=index.js.map
