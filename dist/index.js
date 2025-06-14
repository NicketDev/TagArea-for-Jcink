"use strict";
(() => {
  // src/TagArea/index.esm.min.js
  var sr = true;
  var Fn = globalThis.process?.env?.NODE_ENV;
  var v = Fn && !Fn.toLowerCase().startsWith("prod");
  var he = Array.isArray;
  var Pn = Array.prototype.indexOf;
  var Rt = Array.from;
  var Fr = Object.keys;
  var B = Object.defineProperty;
  var ge = Object.getOwnPropertyDescriptor;
  var Pr = Object.getOwnPropertyDescriptors;
  var Mr = Object.prototype;
  var Mn = Array.prototype;
  var pt = Object.getPrototypeOf;
  var Ur = Object.isExtensible;
  function Vr(e) {
    return typeof e == "function";
  }
  var X = () => {
  };
  function Ct(e) {
    for (var t = 0; t < e.length; t++) e[t]();
  }
  var se = Symbol("$state");
  var qt = Symbol("legacy props");
  var Un = Symbol("");
  function ar(e) {
    return e === this.v;
  }
  function lr(e, t) {
    return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
  }
  function dt(e) {
    return !lr(e, this.v);
  }
  function Vn() {
    if (v) {
      let e = new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);
      throw e.name = "Svelte error", e;
    } else throw new Error("https://svelte.dev/e/derived_references_self");
  }
  function Bn(e) {
    if (v) {
      let t = new Error(`effect_in_teardown
\`${e}\` cannot be used inside an effect cleanup function
https://svelte.dev/e/effect_in_teardown`);
      throw t.name = "Svelte error", t;
    } else throw new Error("https://svelte.dev/e/effect_in_teardown");
  }
  function Hn() {
    if (v) {
      let e = new Error("effect_in_unowned_derived\nEffect cannot be created inside a `$derived` value that was not itself created inside an effect\nhttps://svelte.dev/e/effect_in_unowned_derived");
      throw e.name = "Svelte error", e;
    } else throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
  }
  function zn(e) {
    if (v) {
      let t = new Error(`effect_orphan
\`${e}\` can only be used inside an effect (e.g. during component initialisation)
https://svelte.dev/e/effect_orphan`);
      throw t.name = "Svelte error", t;
    } else throw new Error("https://svelte.dev/e/effect_orphan");
  }
  function Yn() {
    if (v) {
      let e = new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This can happen when a reactive block or effect repeatedly sets a new value. Svelte limits the number of nested updates to prevent infinite loops
https://svelte.dev/e/effect_update_depth_exceeded`);
      throw e.name = "Svelte error", e;
    } else throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
  }
  function Gn() {
    if (v) {
      let e = new Error(`hydration_failed
Failed to hydrate the application
https://svelte.dev/e/hydration_failed`);
      throw e.name = "Svelte error", e;
    } else throw new Error("https://svelte.dev/e/hydration_failed");
  }
  function jn(e) {
    if (v) {
      let t = new Error(`props_invalid_value
Cannot do \`bind:${e}={undefined}\` when \`${e}\` has a fallback value
https://svelte.dev/e/props_invalid_value`);
      throw t.name = "Svelte error", t;
    } else throw new Error("https://svelte.dev/e/props_invalid_value");
  }
  function Wn(e) {
    if (v) {
      let t = new Error(`rune_outside_svelte
The \`${e}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);
      throw t.name = "Svelte error", t;
    } else throw new Error("https://svelte.dev/e/rune_outside_svelte");
  }
  function Kn() {
    if (v) {
      let e = new Error("state_descriptors_fixed\nProperty descriptors defined on `$state` objects must contain `value` and always be `enumerable`, `configurable` and `writable`.\nhttps://svelte.dev/e/state_descriptors_fixed");
      throw e.name = "Svelte error", e;
    } else throw new Error("https://svelte.dev/e/state_descriptors_fixed");
  }
  function Zn() {
    if (v) {
      let e = new Error("state_prototype_fixed\nCannot set prototype of `$state` object\nhttps://svelte.dev/e/state_prototype_fixed");
      throw e.name = "Svelte error", e;
    } else throw new Error("https://svelte.dev/e/state_prototype_fixed");
  }
  function Jn() {
    if (v) {
      let e = new Error("state_unsafe_mutation\nUpdating state inside a derived or a template expression is forbidden. If the value should not be reactive, declare it without `$state`\nhttps://svelte.dev/e/state_unsafe_mutation");
      throw e.name = "Svelte error", e;
    } else throw new Error("https://svelte.dev/e/state_unsafe_mutation");
  }
  var Le = false;
  var De = false;
  var Ke = "[";
  var Ze = "[!";
  var tt = "]";
  var Ne = {};
  var P = Symbol();
  var ue = Symbol("filename");
  var Xn = Symbol("hmr");
  var Qn = "http://www.w3.org/1999/xhtml";
  var Lt = null;
  function Ie(e) {
    let t = Error(), r = t.stack;
    if (r) {
      let n = r.split(`
`), o = [`
`];
      for (let i = 0; i < n.length; i++) {
        let s = n[i];
        if (s !== "Error") {
          if (s.includes("validate_each_keys")) return null;
          s.includes("svelte/src/internal") || o.push(s);
        }
      }
      if (o.length === 1) return null;
      B(t, "stack", { value: o.join(`
`) }), B(t, "name", { value: `${e}Error` });
    }
    return t;
  }
  function Ot(e) {
    if (v) {
      let t = new Error(`lifecycle_outside_component
\`${e}(...)\` can only be used during component initialisation
https://svelte.dev/e/lifecycle_outside_component`);
      throw t.name = "Svelte error", t;
    } else throw new Error("https://svelte.dev/e/lifecycle_outside_component");
  }
  var D = null;
  function Ft(e) {
    D = e;
  }
  var pe = null;
  function Pt(e) {
    pe = e;
  }
  function Oe(e, t = false, r) {
    var n = D = { p: D, c: null, d: false, e: null, m: false, s: e, x: null, l: null };
    Le && !t && (D.l = { s: null, u: null, r1: [], r2: q(false) }), ee(() => {
      n.d = true;
    }), v && (D.function = r, pe = r);
  }
  function Fe(e) {
    let t = D;
    if (t !== null) {
      e !== void 0 && (t.x = e);
      let s = t.e;
      if (s !== null) {
        var r = E, n = T;
        t.e = null;
        try {
          for (var o = 0; o < s.length; o++) {
            var i = s[o];
            U(i.effect), F(i.reaction), ae(i.fn);
          }
        } finally {
          U(r), F(n);
        }
      }
      D = t.p, v && (pe = t.p?.function ?? null), t.m = true;
    }
    return e || {};
  }
  function Pe() {
    return !Le || D !== null && D.l === null;
  }
  function te(e) {
    if (typeof e != "object" || e === null || se in e) return e;
    let t = pt(e);
    if (t !== Mr && t !== Mn) return e;
    var r = /* @__PURE__ */ new Map(), n = he(e), o = L(0), i = v && De ? Ie("CreatedAt") : null, s = T, a = (f) => {
      var l = T;
      F(s);
      var u = f();
      return F(l), u;
    };
    return n && r.set("length", L(e.length, i)), new Proxy(e, { defineProperty(f, l, u) {
      (!("value" in u) || u.configurable === false || u.enumerable === false || u.writable === false) && Kn();
      var p = r.get(l);
      return p === void 0 ? (p = a(() => L(u.value, i)), r.set(l, p)) : w(p, a(() => te(u.value))), true;
    }, deleteProperty(f, l) {
      var u = r.get(l);
      if (u === void 0) l in f && (r.set(l, a(() => L(P, i))), Hr(o));
      else {
        if (n && typeof l == "string") {
          var p = r.get("length"), c = Number(l);
          Number.isInteger(c) && c < p.v && w(p, c);
        }
        w(u, P), Hr(o);
      }
      return true;
    }, get(f, l, u) {
      if (l === se) return e;
      var p = r.get(l), c = l in f;
      if (p === void 0 && (!c || ge(f, l)?.writable) && (p = a(() => L(te(c ? f[l] : P), i)), r.set(l, p)), p !== void 0) {
        var _ = d(p);
        return _ === P ? void 0 : _;
      }
      return Reflect.get(f, l, u);
    }, getOwnPropertyDescriptor(f, l) {
      var u = Reflect.getOwnPropertyDescriptor(f, l);
      if (u && "value" in u) {
        var p = r.get(l);
        p && (u.value = d(p));
      } else if (u === void 0) {
        var c = r.get(l), _ = c?.v;
        if (c !== void 0 && _ !== P) return { enumerable: true, configurable: true, value: _, writable: true };
      }
      return u;
    }, has(f, l) {
      if (l === se) return true;
      var u = r.get(l), p = u !== void 0 && u.v !== P || Reflect.has(f, l);
      if (u !== void 0 || E !== null && (!p || ge(f, l)?.writable)) {
        u === void 0 && (u = a(() => L(p ? te(f[l]) : P, i)), r.set(l, u));
        var c = d(u);
        if (c === P) return false;
      }
      return p;
    }, set(f, l, u, p) {
      var c = r.get(l), _ = l in f;
      if (n && l === "length") for (var h = u; h < c.v; h += 1) {
        var m = r.get(h + "");
        m !== void 0 ? w(m, P) : h in f && (m = a(() => L(P, i)), r.set(h + "", m));
      }
      c === void 0 ? (!_ || ge(f, l)?.writable) && (c = a(() => L(void 0, i)), w(c, a(() => te(u))), r.set(l, c)) : (_ = c.v !== P, w(c, a(() => te(u))));
      var g = Reflect.getOwnPropertyDescriptor(f, l);
      if (g?.set && g.set.call(p, u), !_) {
        if (n && typeof l == "string") {
          var k = r.get("length"), A = Number(l);
          Number.isInteger(A) && A >= k.v && w(k, A + 1);
        }
        Hr(o);
      }
      return true;
    }, ownKeys(f) {
      d(o);
      var l = Reflect.ownKeys(f).filter((c) => {
        var _ = r.get(c);
        return _ === void 0 || _.v !== P;
      });
      for (var [u, p] of r) p.v !== P && !(u in f) && l.push(u);
      return l;
    }, setPrototypeOf() {
      Zn();
    } });
  }
  function Hr(e, t = 1) {
    w(e, e.v + t);
  }
  function cr(e) {
    try {
      if (e !== null && typeof e == "object" && se in e) return e[se];
    } catch {
    }
    return e;
  }
  function Me(e) {
    var t = 2050, r = T !== null && (T.f & 2) !== 0 ? T : null;
    E === null || r !== null && (r.f & 256) !== 0 ? t |= 256 : E.f |= 1048576;
    let n = { ctx: D, deps: null, effects: null, equals: ar, f: t, fn: e, reactions: null, rv: 0, v: null, wv: 0, parent: r ?? E };
    return v && De && (n.created = Ie("CreatedAt")), n;
  }
  function Re(e) {
    let t = Me(e);
    return pr(t), t;
  }
  function Mt(e) {
    let t = Me(e);
    return t.equals = dt, t;
  }
  function fr(e) {
    var t = e.effects;
    if (t !== null) {
      e.effects = null;
      for (var r = 0; r < t.length; r += 1) z(t[r]);
    }
  }
  var zr = [];
  function pi(e) {
    for (var t = e.parent; t !== null; ) {
      if ((t.f & 2) === 0) return t;
      t = t.parent;
    }
    return null;
  }
  function jr(e) {
    var t, r = E;
    if (U(pi(e)), v) {
      let n = rt;
      Yr(/* @__PURE__ */ new Set());
      try {
        zr.includes(e) && Vn(), zr.push(e), fr(e), t = ur(e);
      } finally {
        U(r), Yr(n), zr.pop();
      }
    } else try {
      fr(e), t = ur(e);
    } finally {
      U(r);
    }
    return t;
  }
  function Wr(e) {
    var t = jr(e);
    if (e.equals(t) || (e.v = t, e.wv = Ut()), !Ue) {
      var r = (Ve || (e.f & 256) !== 0) && e.deps !== null ? 4096 : 1024;
      W(e, r);
    }
  }
  var rt = /* @__PURE__ */ new Set();
  var _t = /* @__PURE__ */ new Map();
  function Yr(e) {
    rt = e;
  }
  function q(e, t) {
    var r = { f: 0, v: e, reactions: null, equals: ar, rv: 0, wv: 0 };
    return v && De && (r.created = t ?? Ie("CreatedAt"), r.debug = null), r;
  }
  function L(e, t) {
    let r = q(e, t);
    return pr(r), r;
  }
  function He(e, t = false) {
    let r = q(e);
    return t || (r.equals = dt), Le && D !== null && D.l !== null && (D.l.s ??= []).push(r), r;
  }
  function w(e, t, r = false) {
    T !== null && !xe && Pe() && (T.f & 18) !== 0 && !Ce?.includes(e) && Jn();
    let n = r ? te(t) : t;
    return mt(e, n);
  }
  function mt(e, t) {
    if (!e.equals(t)) {
      var r = e.v;
      if (Ue ? _t.set(e, t) : _t.set(e, r), e.v = t, v && De && (e.updated = Ie("UpdatedAt"), E != null && (e.trace_need_increase = true, e.trace_v ??= r)), (e.f & 2) !== 0 && ((e.f & 2048) !== 0 && jr(e), W(e, (e.f & 256) === 0 ? 1024 : 4096)), e.wv = Ut(), ro(e, 2048), Pe() && E !== null && (E.f & 1024) !== 0 && (E.f & 96) === 0 && (_e === null ? no([e]) : _e.push(e)), v && rt.size > 0) {
        let n = Array.from(rt);
        for (let o of n) (o.f & 1024) !== 0 && W(o, 4096), Je(o) && vt(o);
        rt.clear();
      }
    }
    return t;
  }
  function ro(e, t) {
    var r = e.reactions;
    if (r !== null) for (var n = Pe(), o = r.length, i = 0; i < o; i++) {
      var s = r[i], a = s.f;
      if ((a & 2048) === 0 && !(!n && s === E)) {
        if (v && (a & 262144) !== 0) {
          rt.add(s);
          continue;
        }
        W(s, t), (a & 1280) !== 0 && ((a & 2) !== 0 ? ro(s, 4096) : ht(s));
      }
    }
  }
  var Vt = "font-weight: bold";
  var Bt = "font-weight: normal";
  function oo(e, t, r) {
    v ? console.warn(`%c[svelte] hydration_attribute_changed
%cThe \`${e}\` attribute on \`${t}\` changed its value between server and client renders. The client value, \`${r}\`, will be ignored in favour of the server value
https://svelte.dev/e/hydration_attribute_changed`, Vt, Bt) : console.warn("https://svelte.dev/e/hydration_attribute_changed");
  }
  function io(e) {
    v ? console.warn(`%c[svelte] hydration_html_changed
%c${e ? `The value of an \`{@html ...}\` block ${e} changed between server and client renders. The client value will be ignored in favour of the server value` : "The value of an `{@html ...}` block changed between server and client renders. The client value will be ignored in favour of the server value"}
https://svelte.dev/e/hydration_html_changed`, Vt, Bt) : console.warn("https://svelte.dev/e/hydration_html_changed");
  }
  function Xe(e) {
    v ? console.warn(`%c[svelte] hydration_mismatch
%c${e ? `Hydration failed because the initial UI does not match what was rendered on the server. The error occurred near ${e}` : "Hydration failed because the initial UI does not match what was rendered on the server"}
https://svelte.dev/e/hydration_mismatch`, Vt, Bt) : console.warn("https://svelte.dev/e/hydration_mismatch");
  }
  function so() {
    v ? console.warn(`%c[svelte] lifecycle_double_unmount
%cTried to unmount a component that was not mounted
https://svelte.dev/e/lifecycle_double_unmount`, Vt, Bt) : console.warn("https://svelte.dev/e/lifecycle_double_unmount");
  }
  function dr(e) {
    v ? console.warn(`%c[svelte] state_proxy_equality_mismatch
%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${e}\` will produce unexpected results
https://svelte.dev/e/state_proxy_equality_mismatch`, Vt, Bt) : console.warn("https://svelte.dev/e/state_proxy_equality_mismatch");
  }
  var x = false;
  function K(e) {
    x = e;
  }
  var $;
  function I(e) {
    if (e === null) throw Xe(), Ne;
    return $ = e;
  }
  function H() {
    return I(Z($));
  }
  function ot(e) {
    if (x) {
      if (Z($) !== null) throw Xe(), Ne;
      $ = e;
    }
  }
  function it() {
    for (var e = 0, t = $; ; ) {
      if (t.nodeType === 8) {
        var r = t.data;
        if (r === tt) {
          if (e === 0) return t;
          e -= 1;
        } else (r === Ke || r === Ze) && (e += 1);
      }
      var n = Z(t);
      t.remove(), t = n;
    }
  }
  function _r(e) {
    if (!e || e.nodeType !== 8) throw Xe(), Ne;
    return e.data;
  }
  function ao() {
    let e = Array.prototype, t = Array.__svelte_cleanup;
    t && t();
    let { indexOf: r, lastIndexOf: n, includes: o } = e;
    e.indexOf = function(i, s) {
      let a = r.call(this, i, s);
      if (a === -1) {
        for (let f = s ?? 0; f < this.length; f += 1) if (cr(this[f]) === i) {
          dr("array.indexOf(...)");
          break;
        }
      }
      return a;
    }, e.lastIndexOf = function(i, s) {
      let a = n.call(this, i, s ?? this.length - 1);
      if (a === -1) {
        for (let f = 0; f <= (s ?? this.length - 1); f += 1) if (cr(this[f]) === i) {
          dr("array.lastIndexOf(...)");
          break;
        }
      }
      return a;
    }, e.includes = function(i, s) {
      let a = o.call(this, i, s);
      if (!a) {
        for (let f = 0; f < this.length; f += 1) if (cr(this[f]) === i) {
          dr("array.includes(...)");
          break;
        }
      }
      return a;
    }, Array.__svelte_cleanup = () => {
      e.indexOf = r, e.lastIndexOf = n, e.includes = o;
    };
  }
  var Ht;
  var lo;
  var zt;
  var co;
  var fo;
  function mr() {
    if (Ht === void 0) {
      Ht = window, lo = document, zt = /Firefox/.test(navigator.userAgent);
      var e = Element.prototype, t = Node.prototype, r = Text.prototype;
      co = ge(t, "firstChild").get, fo = ge(t, "nextSibling").get, Ur(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Ur(r) && (r.__t = void 0), v && (e.__svelte_meta = null, ao());
    }
  }
  function we(e = "") {
    return document.createTextNode(e);
  }
  function M(e) {
    return co.call(e);
  }
  function Z(e) {
    return fo.call(e);
  }
  function st(e, t) {
    if (!x) return M(e);
    var r = M($);
    if (r === null) r = $.appendChild(we());
    else if (t && r.nodeType !== 3) {
      var n = we();
      return r?.before(n), I(n), n;
    }
    return I(r), r;
  }
  function ze(e, t) {
    if (!x) {
      var r = M(e);
      return r instanceof Comment && r.data === "" ? Z(r) : r;
    }
    if (t && $?.nodeType !== 3) {
      var n = we();
      return $?.before(n), I(n), n;
    }
    return $;
  }
  function gt(e, t = 1, r = false) {
    let n = x ? $ : e;
    for (var o; t--; ) o = n, n = Z(n);
    if (!x) return n;
    var i = n?.nodeType;
    if (r && i !== 3) {
      var s = we();
      return n === null ? o?.after(s) : n.before(s), I(s), s;
    }
    return I(n), n;
  }
  function Yt(e) {
    e.textContent = "";
  }
  function Qr(e) {
    E === null && T === null && zn(e), T !== null && (T.f & 256) !== 0 && E === null && Hn(), Ue && Bn(e);
  }
  function di(e, t) {
    var r = t.last;
    r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
  }
  function at(e, t, r, n = true) {
    var o = E;
    if (v) for (; o !== null && (o.f & 262144) !== 0; ) o = o.parent;
    var i = { ctx: D, deps: null, nodes_start: null, nodes_end: null, f: e | 2048, first: null, fn: t, last: null, next: null, parent: o, prev: null, teardown: null, transitions: null, wv: 0 };
    if (v && (i.component_function = pe), r) try {
      vt(i), i.f |= 32768;
    } catch (f) {
      throw z(i), f;
    }
    else t !== null && ht(i);
    var s = r && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & 1048704) === 0;
    if (!s && n && (o !== null && di(i, o), T !== null && (T.f & 2) !== 0)) {
      var a = T;
      (a.effects ??= []).push(i);
    }
    return i;
  }
  function ee(e) {
    let t = at(8, null, false);
    return W(t, 1024), t.teardown = e, t;
  }
  function Ye(e) {
    Qr("$effect");
    var t = E !== null && (E.f & 32) !== 0 && D !== null && !D.m;
    if (v && B(e, "name", { value: "$effect" }), t) {
      var r = D;
      (r.e ??= []).push({ fn: e, effect: E, reaction: T });
    } else {
      var n = ae(e);
      return n;
    }
  }
  function lt(e) {
    return Qr("$effect.pre"), v && B(e, "name", { value: "$effect.pre" }), ne(e);
  }
  function en(e) {
    let t = at(64, e, true);
    return () => {
      z(t);
    };
  }
  function po(e) {
    let t = at(64, e, true);
    return (r = {}) => new Promise((n) => {
      r.outro ? Se(t, () => {
        z(t), n(void 0);
      }) : (z(t), n(void 0));
    });
  }
  function ae(e) {
    return at(4, e, false);
  }
  function ne(e) {
    return at(8, e, true);
  }
  function Ge(e, t = [], r = Me) {
    let n = t.map(r), o = () => e(...n.map(d));
    return v && B(o, "name", { value: "{expression}" }), oe(o);
  }
  function oe(e, t = 0) {
    return at(24 | t, e, true);
  }
  function Y(e, t = true) {
    return at(40, e, true, t);
  }
  function tn(e) {
    var t = e.teardown;
    if (t !== null) {
      let r = Ue, n = T;
      Zr(true), F(null);
      try {
        t.call(null);
      } finally {
        Zr(r), F(n);
      }
    }
  }
  function rn(e, t = false) {
    var r = e.first;
    for (e.first = e.last = null; r !== null; ) {
      var n = r.next;
      (r.f & 64) !== 0 ? r.parent = null : z(r, t), r = n;
    }
  }
  function _o(e) {
    for (var t = e.first; t !== null; ) {
      var r = t.next;
      (t.f & 32) === 0 && z(t), t = r;
    }
  }
  function z(e, t = true) {
    var r = false;
    (t || (e.f & 524288) !== 0) && e.nodes_start !== null && (nn(e.nodes_start, e.nodes_end), r = true), rn(e, t && !r), jt(e, 0), W(e, 16384);
    var n = e.transitions;
    if (n !== null) for (let i of n) i.stop();
    tn(e);
    var o = e.parent;
    o !== null && o.first !== null && on(e), v && (e.component_function = null), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
  }
  function nn(e, t) {
    for (; e !== null; ) {
      var r = e === t ? null : Z(e);
      e.remove(), e = r;
    }
  }
  function on(e) {
    var t = e.parent, r = e.prev, n = e.next;
    r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
  }
  function Se(e, t) {
    var r = [];
    hr(e, r, true), sn(r, () => {
      z(e), t && t();
    });
  }
  function sn(e, t) {
    var r = e.length;
    if (r > 0) {
      var n = () => --r || t();
      for (var o of e) o.out(n);
    } else t();
  }
  function hr(e, t, r) {
    if ((e.f & 8192) === 0) {
      if (e.f ^= 8192, e.transitions !== null) for (let s of e.transitions) (s.is_global || r) && t.push(s);
      for (var n = e.first; n !== null; ) {
        var o = n.next, i = (n.f & 65536) !== 0 || (n.f & 32) !== 0;
        hr(n, t, i ? r : false), n = o;
      }
    }
  }
  function Qe(e) {
    mo(e, true);
  }
  function mo(e, t) {
    if ((e.f & 8192) !== 0) {
      e.f ^= 8192, (e.f & 1024) === 0 && (e.f ^= 1024), Je(e) && (W(e, 2048), ht(e));
      for (var r = e.first; r !== null; ) {
        var n = r.next, o = (r.f & 65536) !== 0 || (r.f & 32) !== 0;
        mo(r, o ? t : false), r = n;
      }
      if (e.transitions !== null) for (let i of e.transitions) (i.is_global || t) && i.in();
    }
  }
  var Wt = [];
  var an = [];
  function vo() {
    var e = Wt;
    Wt = [], Ct(e);
  }
  function _i() {
    var e = an;
    an = [], Ct(e);
  }
  function ce(e) {
    Wt.length === 0 && queueMicrotask(vo), Wt.push(e);
  }
  function ho() {
    Wt.length > 0 && vo(), an.length > 0 && _i();
  }
  var go = /* @__PURE__ */ new WeakSet();
  var gr = false;
  var xt = false;
  var Kt = null;
  var ct = false;
  var Ue = false;
  function Zr(e) {
    Ue = e;
  }
  var Zt = [];
  var xr = [];
  var T = null;
  var xe = false;
  function F(e) {
    T = e;
  }
  var E = null;
  function U(e) {
    E = e;
  }
  var Ce = null;
  function pr(e) {
    T !== null && T.f & 2097152 && (Ce === null ? Ce = [e] : Ce.push(e));
  }
  var ie = null;
  var me = 0;
  var _e = null;
  function no(e) {
    _e = e;
  }
  var yo = 1;
  var wr = 0;
  var Ve = false;
  var It = null;
  function Ut() {
    return ++yo;
  }
  function Je(e) {
    var t = e.f;
    if ((t & 2048) !== 0) return true;
    if ((t & 4096) !== 0) {
      var r = e.deps, n = (t & 256) !== 0;
      if (r !== null) {
        var o, i, s = (t & 512) !== 0, a = n && E !== null && !Ve, f = r.length;
        if (s || a) {
          var l = e, u = l.parent;
          for (o = 0; o < f; o++) i = r[o], (s || !i?.reactions?.includes(l)) && (i.reactions ??= []).push(l);
          s && (l.f ^= 512), a && u !== null && (u.f & 256) === 0 && (l.f ^= 256);
        }
        for (o = 0; o < f; o++) if (i = r[o], Je(i) && Wr(i), i.wv > e.wv) return true;
      }
      (!n || E !== null && !Ve) && W(e, 1024);
    }
    return false;
  }
  function mi(e, t) {
    for (var r = t; r !== null; ) {
      if ((r.f & 128) !== 0) try {
        r.fn(e);
        return;
      } catch {
        r.f ^= 128;
      }
      r = r.parent;
    }
    throw gr = false, e;
  }
  function bo(e) {
    return (e.f & 16384) === 0 && (e.parent === null || (e.parent.f & 128) === 0);
  }
  function wt(e, t, r, n) {
    if (gr) {
      if (r === null && (gr = false), bo(t)) throw e;
      return;
    }
    if (r !== null && (gr = true), v && n !== null && e instanceof Error && !go.has(e)) {
      go.add(e);
      let i = [], s = t.fn?.name;
      s && i.push(s);
      let a = n;
      for (; a !== null; ) {
        var o = a.function?.[ue];
        if (o) {
          let u = o.split("/").pop();
          i.push(u);
        }
        a = a.p;
      }
      let f = zt ? "  " : "	";
      B(e, "message", { value: e.message + `
${i.map((u) => `
${f}in ${u}`).join("")}
` }), B(e, "component_stack", { value: i });
      let l = e.stack;
      if (l) {
        let u = l.split(`
`), p = [];
        for (let c = 0; c < u.length; c++) {
          let _ = u[c];
          _.includes("svelte/src/internal") || p.push(_);
        }
        B(e, "stack", { value: p.join(`
`) });
      }
    }
    if (mi(e, t), bo(t)) throw e;
  }
  function Eo(e, t, r = true) {
    var n = e.reactions;
    if (n !== null) for (var o = 0; o < n.length; o++) {
      var i = n[o];
      Ce?.includes(e) || ((i.f & 2) !== 0 ? Eo(i, t, false) : t === i && (r ? W(i, 2048) : (i.f & 1024) !== 0 && W(i, 4096), ht(i)));
    }
  }
  function ur(e) {
    var t = ie, r = me, n = _e, o = T, i = Ve, s = Ce, a = D, f = xe, l = e.f;
    ie = null, me = 0, _e = null, Ve = (l & 256) !== 0 && (xe || !ct || T === null), T = (l & 96) === 0 ? e : null, Ce = null, Ft(e.ctx), xe = false, wr++, e.f |= 2097152;
    try {
      var u = (0, e.fn)(), p = e.deps;
      if (ie !== null) {
        var c;
        if (jt(e, me), p !== null && me > 0) for (p.length = me + ie.length, c = 0; c < ie.length; c++) p[me + c] = ie[c];
        else e.deps = p = ie;
        if (!Ve) for (c = me; c < p.length; c++) (p[c].reactions ??= []).push(e);
      } else p !== null && me < p.length && (jt(e, me), p.length = me);
      if (Pe() && _e !== null && !xe && p !== null && (e.f & 6146) === 0) for (c = 0; c < _e.length; c++) Eo(_e[c], e);
      return o !== null && o !== e && (wr++, _e !== null && (n === null ? n = _e : n.push(..._e))), u;
    } finally {
      ie = t, me = r, _e = n, T = o, Ve = i, Ce = s, Ft(a), xe = f, e.f ^= 2097152;
    }
  }
  function vi(e, t) {
    let r = t.reactions;
    if (r !== null) {
      var n = Pn.call(r, e);
      if (n !== -1) {
        var o = r.length - 1;
        o === 0 ? r = t.reactions = null : (r[n] = r[o], r.pop());
      }
    }
    r === null && (t.f & 2) !== 0 && (ie === null || !ie.includes(t)) && (W(t, 4096), (t.f & 768) === 0 && (t.f ^= 512), fr(t), jt(t, 0));
  }
  function jt(e, t) {
    var r = e.deps;
    if (r !== null) for (var n = t; n < r.length; n++) vi(e, r[n]);
  }
  function vt(e) {
    var t = e.f;
    if ((t & 16384) === 0) {
      W(e, 1024);
      var r = E, n = D, o = ct;
      if (E = e, ct = true, v) {
        var i = pe;
        Pt(e.component_function);
      }
      try {
        (t & 16) !== 0 ? _o(e) : rn(e), tn(e);
        var s = ur(e);
        e.teardown = typeof s == "function" ? s : null, e.wv = yo;
        var a = e.deps;
        if (v && De && (e.f & 2048) !== 0 && a !== null) for (let l = 0; l < a.length; l++) {
          var f = a[l];
          f.trace_need_increase && (f.wv = Ut(), f.trace_need_increase = void 0, f.trace_v = void 0);
        }
        v && xr.push(e);
      } catch (l) {
        wt(l, e, r, n || e.ctx);
      } finally {
        ct = o, E = r, v && Pt(i);
      }
    }
  }
  function xo() {
    console.error("Last ten effects were: ", xr.slice(-10).map((e) => e.fn)), xr = [];
  }
  function hi() {
    try {
      Yn();
    } catch (e) {
      if (v && B(e, "stack", { value: "" }), Kt !== null) if (v) try {
        wt(e, Kt, null, null);
      } catch (t) {
        throw xo(), t;
      }
      else wt(e, Kt, null, null);
      else throw v && xo(), e;
    }
  }
  function cn() {
    var e = ct;
    try {
      var t = 0;
      for (ct = true; Zt.length > 0; ) {
        t++ > 1e3 && hi();
        var r = Zt, n = r.length;
        Zt = [];
        for (var o = 0; o < n; o++) {
          var i = bi(r[o]);
          gi(i);
        }
        _t.clear();
      }
    } finally {
      xt = false, ct = e, Kt = null, v && (xr = []);
    }
  }
  function gi(e) {
    var t = e.length;
    if (t !== 0) for (var r = 0; r < t; r++) {
      var n = e[r];
      if ((n.f & 24576) === 0) try {
        Je(n) && (vt(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? on(n) : n.fn = null));
      } catch (o) {
        wt(o, n, null, n.ctx);
      }
    }
  }
  function ht(e) {
    xt || (xt = true, queueMicrotask(cn));
    for (var t = Kt = e; t.parent !== null; ) {
      t = t.parent;
      var r = t.f;
      if ((r & 96) !== 0) {
        if ((r & 1024) === 0) return;
        t.f ^= 1024;
      }
    }
    Zt.push(t);
  }
  function bi(e) {
    for (var t = [], r = e; r !== null; ) {
      var n = r.f, o = (n & 96) !== 0, i = o && (n & 1024) !== 0;
      if (!i && (n & 8192) === 0) {
        if ((n & 4) !== 0) t.push(r);
        else if (o) r.f ^= 1024;
        else try {
          Je(r) && vt(r);
        } catch (f) {
          wt(f, r, null, r.ctx);
        }
        var s = r.first;
        if (s !== null) {
          r = s;
          continue;
        }
      }
      var a = r.parent;
      for (r = r.next; r === null && a !== null; ) r = a.next, a = a.parent;
    }
    return t;
  }
  function Jt(e) {
    var t;
    for (e && (xt = true, cn(), xt = true, t = e()); ; ) {
      if (ho(), Zt.length === 0) return t;
      xt = true, cn();
    }
  }
  function d(e) {
    var t = e.f, r = (t & 2) !== 0;
    if (It !== null && It.add(e), T !== null && !xe) {
      if (!Ce?.includes(e)) {
        var n = T.deps;
        e.rv < wr && (e.rv = wr, ie === null && n !== null && n[me] === e ? me++ : ie === null ? ie = [e] : (!Ve || !ie.includes(e)) && ie.push(e));
      }
    } else if (r && e.deps === null && e.effects === null) {
      var o = e, i = o.parent;
      i !== null && (i.f & 256) === 0 && (o.f ^= 256);
    }
    if (r && (o = e, Je(o) && Wr(o)), v && De && Lt !== null && T !== null && Lt.reaction === T) {
      if (e.debug) e.debug();
      else if (e.created) {
        var s = Lt.entries.get(e);
        s === void 0 && (s = { read: [] }, Lt.entries.set(e, s)), s.read.push(Ie("TracedAt"));
      }
    }
    return Ue && _t.has(e) ? _t.get(e) : e.v;
  }
  function R(e) {
    var t = xe;
    try {
      return xe = true, e();
    } finally {
      xe = t;
    }
  }
  var xi = -7169;
  function W(e, t) {
    e.f = e.f & xi | t;
  }
  var yi = /\r/g;
  function $o(e) {
    e = e.replace(yi, "");
    let t = 5381, r = e.length;
    for (; r--; ) t = (t << 5) - t ^ e.charCodeAt(r);
    return (t >>> 0).toString(36);
  }
  var Ei = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "inert", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected", "webkitdirectory", "defer", "disablepictureinpicture", "disableremoteplayback"];
  var Vl = [...Ei, "formNoValidate", "isMap", "noModule", "playsInline", "readOnly", "value", "volume", "defaultValue", "defaultChecked", "srcObject", "noValidate", "allowFullscreen", "disablePictureInPicture", "disableRemotePlayback"];
  var $i = ["touchstart", "touchmove"];
  function To(e) {
    return $i.includes(e);
  }
  var Ti = ["$state", "$state.raw", "$derived", "$derived.by"];
  var Bl = [...Ti, "$state.snapshot", "$props", "$props.id", "$bindable", "$effect", "$effect.pre", "$effect.tracking", "$effect.root", "$inspect", "$inspect().with", "$inspect.trace", "$host"];
  function yr(e) {
    return e?.replace(/\//g, "/\u200B");
  }
  var Ao = /* @__PURE__ */ new Map();
  function So(e, t) {
    var r = Ao.get(e);
    r || (r = /* @__PURE__ */ new Set(), Ao.set(e, r)), r.add(t);
  }
  function Xt(e) {
    var t = T, r = E;
    F(null), U(null);
    try {
      return e();
    } finally {
      F(t), U(r);
    }
  }
  var fn = /* @__PURE__ */ new Set();
  var Er = /* @__PURE__ */ new Set();
  function ko(e, t, r, n = {}) {
    function o(i) {
      if (n.capture || yt.call(t, i), !i.cancelBubble) return Xt(() => r?.call(this, i));
    }
    return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? ce(() => {
      t.addEventListener(e, o, n);
    }) : t.addEventListener(e, o, n), o;
  }
  function un(e, t, r, n, o) {
    var i = { capture: n, passive: o }, s = ko(e, t, r, i);
    (t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && ee(() => {
      t.removeEventListener(e, s, i);
    });
  }
  function $r(e) {
    for (var t = 0; t < e.length; t++) fn.add(e[t]);
    for (var r of Er) r(e);
  }
  function yt(e) {
    var t = this, r = t.ownerDocument, n = e.type, o = e.composedPath?.() || [], i = o[0] || e.target, s = 0, a = e.__root;
    if (a) {
      var f = o.indexOf(a);
      if (f !== -1 && (t === document || t === window)) {
        e.__root = t;
        return;
      }
      var l = o.indexOf(t);
      if (l === -1) return;
      f <= l && (s = f);
    }
    if (i = o[s] || e.target, i !== t) {
      B(e, "currentTarget", { configurable: true, get() {
        return i || r;
      } });
      var u = T, p = E;
      F(null), U(null);
      try {
        for (var c, _ = []; i !== null; ) {
          var h = i.assignedSlot || i.parentNode || i.host || null;
          try {
            var m = i["__" + n];
            if (m != null && (!i.disabled || e.target === i)) if (he(m)) {
              var [g, ...k] = m;
              g.apply(i, [e, ...k]);
            } else m.call(i, e);
          } catch (A) {
            c ? _.push(A) : c = A;
          }
          if (e.cancelBubble || h === t || h === null) break;
          i = h;
        }
        if (c) {
          for (let A of _) queueMicrotask(() => {
            throw A;
          });
          throw c;
        }
      } finally {
        e.__root = t, delete e.currentTarget, F(u), U(p);
      }
    }
  }
  var Si;
  function Do() {
    Si = void 0;
  }
  function Qt(e) {
    var t = document.createElement("template");
    return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
  }
  function ye(e, t) {
    var r = E;
    r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
  }
  function Ee(e, t) {
    var r = (t & 1) !== 0, n = (t & 2) !== 0, o, i = !e.startsWith("<!>");
    return () => {
      if (x) return ye($, null), $;
      o === void 0 && (o = Qt(i ? e : "<!>" + e), r || (o = M(o)));
      var s = n || zt ? document.importNode(o, true) : o.cloneNode(true);
      if (r) {
        var a = M(s), f = s.lastChild;
        ye(a, f);
      } else ye(s, s);
      return s;
    };
  }
  function Et() {
    if (x) return ye($, null), $;
    var e = document.createDocumentFragment(), t = document.createComment(""), r = we();
    return e.append(t, r), ye(t, r), e;
  }
  function G(e, t) {
    if (x) {
      E.nodes_end = $, H();
      return;
    }
    e !== null && e.before(t);
  }
  var Tr = true;
  function dn(e, t) {
    var r = t == null ? "" : typeof t == "object" ? t + "" : t;
    r !== (e.__t ??= e.nodeValue) && (e.__t = r, e.nodeValue = r + "");
  }
  function Tt(e, t) {
    return Ro(e, t);
  }
  function _n(e, t) {
    mr(), t.intro = t.intro ?? false;
    let r = t.target, n = x, o = $;
    try {
      for (var i = M(r); i && (i.nodeType !== 8 || i.data !== Ke); ) i = Z(i);
      if (!i) throw Ne;
      K(true), I(i), H();
      let s = Ro(e, { ...t, anchor: i });
      if ($ === null || $.nodeType !== 8 || $.data !== tt) throw Xe(), Ne;
      return K(false), s;
    } catch (s) {
      if (s === Ne) return t.recover === false && Gn(), mr(), Yt(r), K(false), Tt(e, t);
      throw s;
    } finally {
      K(n), I(o), Do();
    }
  }
  var $t = /* @__PURE__ */ new Map();
  function Ro(e, { target: t, anchor: r, props: n = {}, events: o, context: i, intro: s = true }) {
    mr();
    var a = /* @__PURE__ */ new Set(), f = (p) => {
      for (var c = 0; c < p.length; c++) {
        var _ = p[c];
        if (!a.has(_)) {
          a.add(_);
          var h = To(_);
          t.addEventListener(_, yt, { passive: h });
          var m = $t.get(_);
          m === void 0 ? (document.addEventListener(_, yt, { passive: h }), $t.set(_, 1)) : $t.set(_, m + 1);
        }
      }
    };
    f(Rt(fn)), Er.add(f);
    var l = void 0, u = po(() => {
      var p = r ?? t.appendChild(we());
      return Y(() => {
        if (i) {
          Oe({});
          var c = D;
          c.c = i;
        }
        o && (n.$$events = o), x && ye(p, null), Tr = s, l = e(p, n) || {}, Tr = true, x && (E.nodes_end = $), i && Fe();
      }), () => {
        for (var c of a) {
          t.removeEventListener(c, yt);
          var _ = $t.get(c);
          --_ === 0 ? (document.removeEventListener(c, yt), $t.delete(c)) : $t.set(c, _);
        }
        Er.delete(f), p !== r && p.parentNode?.removeChild(p);
      };
    });
    return pn.set(l, u), l;
  }
  var pn = /* @__PURE__ */ new WeakMap();
  function er(e, t) {
    let r = pn.get(e);
    return r ? (pn.delete(e), r(t)) : (v && so(), Promise.resolve());
  }
  function qe(e, t, [r, n] = [0, 0]) {
    x && r === 0 && H();
    var o = e, i = null, s = null, a = P, f = r > 0 ? 65536 : 0, l = false;
    let u = (c, _ = true) => {
      l = true, p(_, c);
    }, p = (c, _) => {
      if (a === (a = c)) return;
      let h = false;
      if (x && n !== -1) {
        if (r === 0) {
          let g = _r(o);
          g === Ke ? n = 0 : g === Ze ? n = 1 / 0 : (n = parseInt(g.substring(1)), n !== n && (n = a ? 1 / 0 : -1));
        }
        let m = n > r;
        !!a === m && (o = it(), I(o), K(false), h = true, n = -1);
      }
      a ? (i ? Qe(i) : _ && (i = Y(() => _(o))), s && Se(s, () => {
        s = null;
      })) : (s ? Qe(s) : _ && (s = Y(() => _(o, [r + 1, n]))), i && Se(i, () => {
        i = null;
      })), h && K(true);
    };
    oe(() => {
      l = false, t(u), l || p(null, null);
    }, f), x && (o = $);
  }
  var tr = null;
  function hn(e, t) {
    return t;
  }
  function qi(e, t, r, n) {
    for (var o = [], i = t.length, s = 0; s < i; s++) hr(t[s].e, o, true);
    var a = i > 0 && o.length === 0 && r !== null;
    if (a) {
      var f = r.parentNode;
      Yt(f), f.append(r), n.clear(), et(e, t[0].prev, t[i - 1].next);
    }
    sn(o, () => {
      for (var l = 0; l < i; l++) {
        var u = t[l];
        a || (n.delete(u.k), et(e, u.prev, u.next)), z(u.e, !a);
      }
    });
  }
  function gn(e, t, r, n, o, i = null) {
    var s = e, a = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, f = (t & 4) !== 0;
    if (f) {
      var l = e;
      s = x ? I(M(l)) : l.appendChild(we());
    }
    x && H();
    var u = null, p = false, c = Mt(() => {
      var _ = r();
      return he(_) ? _ : _ == null ? [] : Rt(_);
    });
    oe(() => {
      var _ = d(c), h = _.length;
      if (p && h === 0) return;
      p = h === 0;
      let m = false;
      if (x) {
        var g = _r(s) === Ze;
        g !== (h === 0) && (s = it(), I(s), K(false), m = true);
      }
      if (x) {
        for (var k = null, A, b = 0; b < h; b++) {
          if ($.nodeType === 8 && $.data === tt) {
            s = $, m = true, K(false);
            break;
          }
          var y = _[b], S = n(y, b);
          A = Lo($, a, k, null, y, S, b, o, t, r), a.items.set(S, A), k = A;
        }
        h > 0 && I(it());
      }
      x || Li(_, a, s, o, t, n, r), i !== null && (h === 0 ? u ? Qe(u) : u = Y(() => i(s)) : u !== null && Se(u, () => {
        u = null;
      })), m && K(true), d(c);
    }), x && (s = $);
  }
  function Li(e, t, r, n, o, i, s) {
    var a = (o & 8) !== 0, f = (o & 3) !== 0, l = e.length, u = t.items, p = t.first, c = p, _, h = null, m, g = [], k = [], A, b, y, S;
    if (a) for (S = 0; S < l; S += 1) A = e[S], b = i(A, S), y = u.get(b), y !== void 0 && (y.a?.measure(), (m ??= /* @__PURE__ */ new Set()).add(y));
    for (S = 0; S < l; S += 1) {
      if (A = e[S], b = i(A, S), y = u.get(b), y === void 0) {
        var O = c ? c.e.nodes_start : r;
        h = Lo(O, t, h, h === null ? t.first : h.next, A, b, S, n, o, s), u.set(b, h), g = [], k = [], c = h.next;
        continue;
      }
      if (f && Ii(y, A, S, o), (y.e.f & 8192) !== 0 && (Qe(y.e), a && (y.a?.unfix(), (m ??= /* @__PURE__ */ new Set()).delete(y))), y !== c) {
        if (_ !== void 0 && _.has(y)) {
          if (g.length < k.length) {
            var N = k[0], C;
            h = N.prev;
            var J = g[0], Nt = g[g.length - 1];
            for (C = 0; C < g.length; C += 1) Co(g[C], N, r);
            for (C = 0; C < k.length; C += 1) _.delete(k[C]);
            et(t, J.prev, Nt.next), et(t, h, J), et(t, Nt, N), c = N, h = Nt, S -= 1, g = [], k = [];
          } else _.delete(y), Co(y, c, r), et(t, y.prev, y.next), et(t, y, h === null ? t.first : h.next), et(t, h, y), h = y;
          continue;
        }
        for (g = [], k = []; c !== null && c.k !== b; ) (c.e.f & 8192) === 0 && (_ ??= /* @__PURE__ */ new Set()).add(c), k.push(c), c = c.next;
        if (c === null) continue;
        y = c;
      }
      g.push(y), h = y, c = y.next;
    }
    if (c !== null || _ !== void 0) {
      for (var ve = _ === void 0 ? [] : Rt(_); c !== null; ) (c.e.f & 8192) === 0 && ve.push(c), c = c.next;
      var je = ve.length;
      if (je > 0) {
        var Lr = (o & 4) !== 0 && l === 0 ? r : null;
        if (a) {
          for (S = 0; S < je; S += 1) ve[S].a?.measure();
          for (S = 0; S < je; S += 1) ve[S].a?.fix();
        }
        qi(t, ve, Lr, u);
      }
    }
    a && ce(() => {
      if (m !== void 0) for (y of m) y.a?.apply();
    }), E.first = t.first && t.first.e, E.last = h && h.e;
  }
  function Ii(e, t, r, n) {
    (n & 1) !== 0 && mt(e.v, t), (n & 2) !== 0 ? mt(e.i, r) : e.i = r;
  }
  function Lo(e, t, r, n, o, i, s, a, f, l) {
    var u = tr, p = (f & 1) !== 0, c = (f & 16) === 0, _ = p ? c ? He(o) : q(o) : o, h = (f & 2) === 0 ? s : q(s);
    v && p && (_.debug = () => {
      var g = typeof h == "number" ? s : h.v;
      l()[g];
    });
    var m = { i: h, v: _, k: i, a: null, e: null, prev: r, next: n };
    tr = m;
    try {
      return m.e = Y(() => a(e, _, h, l), x), m.e.prev = r && r.e, m.e.next = n && n.e, r === null ? t.first = m : (r.next = m, r.e.next = m.e), n !== null && (n.prev = m, n.e.prev = m.e), m;
    } finally {
      tr = u;
    }
  }
  function Co(e, t, r) {
    for (var n = e.next ? e.next.e.nodes_start : r, o = t ? t.e.nodes_start : r, i = e.e.nodes_start; i !== n; ) {
      var s = Z(i);
      o.before(i), i = s;
    }
  }
  function et(e, t, r) {
    t === null ? e.first = r : (t.next = r, t.e.next = r && r.e), r !== null && (r.prev = t, r.e.prev = t && t.e);
  }
  function Oi(e, t, r) {
    if (!t || t === $o(String(r ?? ""))) return;
    let n, o = e.__svelte_meta?.loc;
    o ? n = `near ${o.file}:${o.line}:${o.column}` : pe?.[ue] && (n = `in ${pe[ue]}`), io(yr(n));
  }
  function ft(e, t, r = false, n = false, o = false) {
    var i = e, s = "";
    Ge(() => {
      var a = E;
      if (s === (s = t() ?? "")) {
        x && H();
        return;
      }
      if (a.nodes_start !== null && (nn(a.nodes_start, a.nodes_end), a.nodes_start = a.nodes_end = null), s !== "") {
        if (x) {
          for (var f = $.data, l = H(), u = l; l !== null && (l.nodeType !== 8 || l.data !== ""); ) u = l, l = Z(l);
          if (l === null) throw Xe(), Ne;
          v && !o && Oi(l.parentNode, f, s), ye($, u), i = I(l);
          return;
        }
        var p = s + "";
        r ? p = `<svg>${p}</svg>` : n && (p = `<math>${p}</math>`);
        var c = Qt(p);
        if ((r || n) && (c = M(c)), ye(M(c), c.lastChild), r || n) for (; M(c); ) i.before(M(c));
        else i.before(c);
      }
    });
  }
  function bn(e, t) {
    ce(() => {
      var r = e.getRootNode(), n = r.host ? r : r.head ?? r.ownerDocument.head;
      if (!n.querySelector("#" + t.hash)) {
        let o = document.createElement("style");
        o.id = t.hash, o.textContent = t.code, n.appendChild(o), v && So(t.hash, o);
      }
    });
  }
  var Oo = [...` 	
\r\f\xA0\v\uFEFF`];
  function Po(e, t, r) {
    var n = e == null ? "" : "" + e;
    if (t && (n = n ? n + " " + t : t), r) {
      for (var o in r) if (r[o]) n = n ? n + " " + o : o;
      else if (n.length) for (var i = o.length, s = 0; (s = n.indexOf(o, s)) >= 0; ) {
        var a = s + i;
        (s === 0 || Oo.includes(n[s - 1])) && (a === n.length || Oo.includes(n[a])) ? n = (s === 0 ? "" : n.substring(0, s)) + n.substring(a + 1) : s = a;
      }
    }
    return n === "" ? null : n;
  }
  function Fo(e, t = false) {
    var r = t ? " !important;" : ";", n = "";
    for (var o in e) {
      var i = e[o];
      i != null && i !== "" && (n += " " + o + ": " + i + r);
    }
    return n;
  }
  function xn(e) {
    return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
  }
  function Mo(e, t) {
    if (t) {
      var r = "", n, o;
      if (Array.isArray(t) ? (n = t[0], o = t[1]) : n = t, e) {
        e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
        var i = false, s = 0, a = false, f = [];
        n && f.push(...Object.keys(n).map(xn)), o && f.push(...Object.keys(o).map(xn));
        var l = 0, u = -1;
        let m = e.length;
        for (var p = 0; p < m; p++) {
          var c = e[p];
          if (a ? c === "/" && e[p - 1] === "*" && (a = false) : i ? i === c && (i = false) : c === "/" && e[p + 1] === "*" ? a = true : c === '"' || c === "'" ? i = c : c === "(" ? s++ : c === ")" && s--, !a && i === false && s === 0) {
            if (c === ":" && u === -1) u = p;
            else if (c === ";" || p === m - 1) {
              if (u !== -1) {
                var _ = xn(e.substring(l, u).trim());
                if (!f.includes(_)) {
                  c !== ";" && p++;
                  var h = e.substring(l, p).trim();
                  r += " " + h + ";";
                }
              }
              l = p + 1, u = -1;
            }
          }
        }
      }
      return n && (r += Fo(n)), o && (r += Fo(o, true)), r = r.trim(), r === "" ? null : r;
    }
    return e == null ? null : String(e);
  }
  function Ar(e, t, r, n, o, i) {
    var s = e.__className;
    if (x || s !== r || s === void 0) {
      var a = Po(r, n, i);
      (!x || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a)), e.__className = r;
    } else if (i && o !== i) for (var f in i) {
      var l = !!i[f];
      (o == null || l !== !!o[f]) && e.classList.toggle(f, l);
    }
    return i;
  }
  function wn(e, t = {}, r, n) {
    for (var o in r) {
      var i = r[o];
      t[o] !== i && (r[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, n));
    }
  }
  function At(e, t, r, n) {
    var o = e.__style;
    if (x || o !== t) {
      var i = Mo(t, n);
      (!x || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
    } else n && (Array.isArray(n) ? (wn(e, r?.[0], n[0]), wn(e, r?.[1], n[1], "important")) : wn(e, r, n));
    return n;
  }
  var Gi = Symbol("class");
  var ji = Symbol("style");
  var Wi = Symbol("is custom element");
  var Ki = Symbol("is html");
  function rr(e, t, r, n) {
    var o = Zi(e);
    if (x && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK")) {
      n || Xi(e, t, r ?? "");
      return;
    }
    o[t] !== (o[t] = r) && (t === "loading" && (e[Un] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Ji(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
  }
  function Zi(e) {
    return e.__attributes ??= { [Wi]: e.nodeName.includes("-"), [Ki]: e.namespaceURI === Qn };
  }
  var Uo = /* @__PURE__ */ new Map();
  function Ji(e) {
    var t = Uo.get(e.nodeName);
    if (t) return t;
    Uo.set(e.nodeName, t = []);
    for (var r, n = e, o = Element.prototype; o !== n; ) {
      r = Pr(n);
      for (var i in r) r[i].set && t.push(i);
      n = pt(n);
    }
    return t;
  }
  function Xi(e, t, r) {
    v && (t === "srcset" && Qi(e, r) || yn(e.getAttribute(t) ?? "", r) || oo(t, e.outerHTML.replace(e.innerHTML, e.innerHTML && "..."), String(r)));
  }
  function yn(e, t) {
    return e === t ? true : new URL(e, document.baseURI).href === new URL(t, document.baseURI).href;
  }
  function Vo(e) {
    return e.split(",").map((t) => t.trim().split(" ").filter(Boolean));
  }
  function Qi(e, t) {
    var r = Vo(e.srcset), n = Vo(t);
    return n.length === r.length && n.every(([o, i], s) => i === r[s][1] && (yn(r[s][0], o) || yn(o, r[s][0])));
  }
  var es = sr ? () => performance.now() : () => Date.now();
  var ke = { tick: (e) => (sr ? requestAnimationFrame : X)(e), now: () => es(), tasks: /* @__PURE__ */ new Set() };
  function Bo() {
    let e = ke.now();
    ke.tasks.forEach((t) => {
      t.c(e) || (ke.tasks.delete(t), t.f());
    }), ke.tasks.size !== 0 && ke.tick(Bo);
  }
  function Ho(e) {
    let t;
    return ke.tasks.size === 0 && ke.tick(Bo), { promise: new Promise((r) => {
      ke.tasks.add(t = { c: e, f: r });
    }), abort() {
      ke.tasks.delete(t);
    } };
  }
  function Sr(e, t) {
    Xt(() => {
      e.dispatchEvent(new CustomEvent(t));
    });
  }
  function os(e) {
    if (e === "float") return "cssFloat";
    if (e === "offset") return "cssOffset";
    if (e.startsWith("--")) return e;
    let t = e.split("-");
    return t.length === 1 ? t[0] : t[0] + t.slice(1).map((r) => r[0].toUpperCase() + r.slice(1)).join("");
  }
  function zo(e) {
    let t = {}, r = e.split(";");
    for (let n of r) {
      let [o, i] = n.split(":");
      if (!o || i === void 0) break;
      let s = os(o.trim());
      t[s] = i.trim();
    }
    return t;
  }
  var is = (e) => e;
  function $n(e, t, r, n) {
    var o = (e & 1) !== 0, i = (e & 2) !== 0, s = o && i, a = (e & 4) !== 0, f = s ? "both" : o ? "in" : "out", l, u = t.inert, p = t.style.overflow, c, _;
    function h() {
      var b = T, y = E;
      F(null), U(null);
      try {
        return l ??= r()(t, n?.() ?? {}, { direction: f });
      } finally {
        F(b), U(y);
      }
    }
    var m = { is_global: a, in() {
      if (t.inert = u, !o) {
        _?.abort(), _?.reset?.();
        return;
      }
      i || c?.abort(), Sr(t, "introstart"), c = En(t, h(), _, 1, () => {
        Sr(t, "introend"), c?.abort(), c = l = void 0, t.style.overflow = p;
      });
    }, out(b) {
      if (!i) {
        b?.(), l = void 0;
        return;
      }
      t.inert = true, Sr(t, "outrostart"), _ = En(t, h(), c, 0, () => {
        Sr(t, "outroend"), b?.();
      });
    }, stop: () => {
      c?.abort(), _?.abort();
    } }, g = E;
    if ((g.transitions ??= []).push(m), o && Tr) {
      var k = a;
      if (!k) {
        for (var A = g.parent; A && (A.f & 65536) !== 0; ) for (; (A = A.parent) && (A.f & 16) === 0; ) ;
        k = !A || (A.f & 32768) !== 0;
      }
      k && ae(() => {
        R(() => m.in());
      });
    }
  }
  function En(e, t, r, n, o) {
    var i = n === 1;
    if (Vr(t)) {
      var s, a = false;
      return ce(() => {
        if (!a) {
          var g = t({ direction: i ? "in" : "out" });
          s = En(e, g, r, n, o);
        }
      }), { abort: () => {
        a = true, s?.abort();
      }, deactivate: () => s.deactivate(), reset: () => s.reset(), t: () => s.t() };
    }
    if (r?.deactivate(), !t?.duration) return o(), { abort: X, deactivate: X, reset: X, t: () => n };
    let { delay: f = 0, css: l, tick: u, easing: p = is } = t;
    var c = [];
    if (i && r === void 0 && (u && u(0, 1), l)) {
      var _ = zo(l(0, 1));
      c.push(_, _);
    }
    var h = () => 1 - n, m = e.animate(c, { duration: f, fill: "forwards" });
    return m.onfinish = () => {
      m.cancel();
      var g = r?.t() ?? 1 - n;
      r?.abort();
      var k = n - g, A = t.duration * Math.abs(k), b = [];
      if (A > 0) {
        var y = false;
        if (l) for (var S = Math.ceil(A / 16.666666666666668), O = 0; O <= S; O += 1) {
          var N = g + k * p(O / S), C = zo(l(N, 1 - N));
          b.push(C), y ||= C.overflow === "hidden";
        }
        y && (e.style.overflow = "hidden"), h = () => {
          var J = m.currentTime;
          return g + k * p(J / A);
        }, u && Ho(() => {
          if (m.playState !== "running") return false;
          var J = h();
          return u(J, 1 - J), true;
        });
      }
      m = e.animate(b, { duration: A, fill: "forwards" }), m.onfinish = () => {
        h = () => n, u?.(n, 1 - n), o();
      };
    }, { abort: () => {
      m && (m.cancel(), m.effect = null, m.onfinish = X);
    }, deactivate: () => {
      o = X;
    }, reset: () => {
      n === 0 && u?.(1, 0);
    }, t: () => h() };
  }
  function Yo(e, t) {
    return e === t || e?.[se] === t;
  }
  function nr(e = {}, t, r, n) {
    return ae(() => {
      var o, i;
      return ne(() => {
        o = i, i = n?.() || [], R(() => {
          e !== r(...i) && (t(e, ...i), o && Yo(r(...o), e) && t(null, ...o));
        });
      }), () => {
        ce(() => {
          i && Yo(r(...i), e) && t(null, ...i);
        });
      };
    }), e;
  }
  var Dr = false;
  var R_ = Symbol();
  function Tn(e) {
    var t = Dr;
    try {
      return Dr = false, [e(), Dr];
    } finally {
      Dr = t;
    }
  }
  function jo(e) {
    return e.ctx?.d ?? false;
  }
  function St(e, t, r, n) {
    var o = (r & 1) !== 0, i = !Le || (r & 2) !== 0, s = (r & 8) !== 0, a = (r & 16) !== 0, f = false, l;
    s ? [l, f] = Tn(() => e[t]) : l = e[t];
    var u = se in e || qt in e, p = s && (ge(e, t)?.set ?? (u && t in e && ((N) => e[t] = N))) || void 0, c = n, _ = true, h = false, m = () => (h = true, _ && (_ = false, a ? c = R(n) : c = n), c);
    l === void 0 && n !== void 0 && (p && i && jn(t), l = m(), p && p(l));
    var g;
    if (i) g = () => {
      var N = e[t];
      return N === void 0 ? m() : (_ = true, h = false, N);
    };
    else {
      var k = (o ? Me : Mt)(() => e[t]);
      k.f |= 131072, g = () => {
        var N = d(k);
        return N !== void 0 && (c = void 0), N === void 0 ? c : N;
      };
    }
    if ((r & 4) === 0 && i) return g;
    if (p) {
      var A = e.$$legacy;
      return function(N, C) {
        return arguments.length > 0 ? ((!i || !C || A || f) && p(C ? g() : N), N) : g();
      };
    }
    var b = false, y = false, S = He(l), O = Me(() => {
      var N = g(), C = d(S);
      return b ? (b = false, y = true, C) : (y = false, S.v = N);
    });
    return s && d(O), o || (O.equals = dt), function(N, C) {
      if (It !== null && (b = y, g(), d(S)), arguments.length > 0) {
        let J = C ? d(O) : i && s ? te(N) : N;
        if (!O.equals(J)) {
          if (b = true, w(S, J), h && c !== void 0 && (c = J), jo(O)) return N;
          R(() => d(O));
        }
        return N;
      }
      return jo(O) ? O.v : d(O);
    };
  }
  function Wo(e) {
    return new An(e);
  }
  var An = class {
    #e;
    #t;
    constructor(t) {
      var r = /* @__PURE__ */ new Map(), n = (i, s) => {
        var a = He(s);
        return r.set(i, a), a;
      };
      let o = new Proxy({ ...t.props || {}, $$events: {} }, { get(i, s) {
        return d(r.get(s) ?? n(s, Reflect.get(i, s)));
      }, has(i, s) {
        return s === qt ? true : (d(r.get(s) ?? n(s, Reflect.get(i, s))), Reflect.has(i, s));
      }, set(i, s, a) {
        return w(r.get(s) ?? n(s, a), a), Reflect.set(i, s, a);
      } });
      this.#t = (t.hydrate ? _n : Tt)(t.component, { target: t.target, anchor: t.anchor, props: o, context: t.context, intro: t.intro ?? false, recover: t.recover }), (!t?.props?.$$host || t.sync === false) && Jt(), this.#e = o.$$events;
      for (let i of Object.keys(this.#t)) i === "$set" || i === "$destroy" || i === "$on" || B(this, i, { get() {
        return this.#t[i];
      }, set(s) {
        this.#t[i] = s;
      }, enumerable: true });
      this.#t.$set = (i) => {
        Object.assign(o, i);
      }, this.#t.$destroy = () => {
        er(this.#t);
      };
    }
    $set(t) {
      this.#t.$set(t);
    }
    $on(t, r) {
      this.#e[t] = this.#e[t] || [];
      let n = (...o) => r.call(this, ...o);
      return this.#e[t].push(n), () => {
        this.#e[t] = this.#e[t].filter((o) => o !== n);
      };
    }
    $destroy() {
      this.#t.$destroy();
    }
  };
  var xs;
  typeof HTMLElement == "function" && (xs = class extends HTMLElement {
    $$ctor;
    $$s;
    $$c;
    $$cn = false;
    $$d = {};
    $$r = false;
    $$p_d = {};
    $$l = {};
    $$l_u = /* @__PURE__ */ new Map();
    $$me;
    constructor(e, t, r) {
      super(), this.$$ctor = e, this.$$s = t, r && this.attachShadow({ mode: "open" });
    }
    addEventListener(e, t, r) {
      if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
        let n = this.$$c.$on(e, t);
        this.$$l_u.set(t, n);
      }
      super.addEventListener(e, t, r);
    }
    removeEventListener(e, t, r) {
      if (super.removeEventListener(e, t, r), this.$$c) {
        let n = this.$$l_u.get(t);
        n && (n(), this.$$l_u.delete(t));
      }
    }
    async connectedCallback() {
      if (this.$$cn = true, !this.$$c) {
        let e = function(n) {
          return (o) => {
            let i = document.createElement("slot");
            n !== "default" && (i.name = n), G(o, i);
          };
        };
        if (await Promise.resolve(), !this.$$cn || this.$$c) return;
        let t = {}, r = ws(this);
        for (let n of this.$$s) n in r && (n === "default" && !this.$$d.children ? (this.$$d.children = e(n), t.default = true) : t[n] = e(n));
        for (let n of this.attributes) {
          let o = this.$$g_p(n.name);
          o in this.$$d || (this.$$d[o] = Sn(o, n.value, this.$$p_d, "toProp"));
        }
        for (let n in this.$$p_d) !(n in this.$$d) && this[n] !== void 0 && (this.$$d[n] = this[n], delete this[n]);
        this.$$c = Wo({ component: this.$$ctor, target: this.shadowRoot || this, props: { ...this.$$d, $$slots: t, $$host: this } }), this.$$me = en(() => {
          ne(() => {
            this.$$r = true;
            for (let n of Fr(this.$$c)) {
              if (!this.$$p_d[n]?.reflect) continue;
              this.$$d[n] = this.$$c[n];
              let o = Sn(n, this.$$d[n], this.$$p_d, "toAttribute");
              o == null ? this.removeAttribute(this.$$p_d[n].attribute || n) : this.setAttribute(this.$$p_d[n].attribute || n, o);
            }
            this.$$r = false;
          });
        });
        for (let n in this.$$l) for (let o of this.$$l[n]) {
          let i = this.$$c.$on(n, o);
          this.$$l_u.set(o, i);
        }
        this.$$l = {};
      }
    }
    attributeChangedCallback(e, t, r) {
      this.$$r || (e = this.$$g_p(e), this.$$d[e] = Sn(e, r, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
    }
    disconnectedCallback() {
      this.$$cn = false, Promise.resolve().then(() => {
        !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
      });
    }
    $$g_p(e) {
      return Fr(this.$$p_d).find((t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e) || e;
    }
  });
  function Sn(e, t, r, n) {
    let o = r[e]?.type;
    if (t = o === "Boolean" && typeof t != "boolean" ? t != null : t, !n || !r[e]) return t;
    if (n === "toAttribute") switch (o) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
    else switch (o) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
  }
  function ws(e) {
    let t = {};
    return e.childNodes.forEach((r) => {
      t[r.slot || "default"] = true;
    }), t;
  }
  if (v) {
    let e = function(t) {
      if (!(t in globalThis)) {
        let r;
        Object.defineProperty(globalThis, t, { configurable: true, get: () => {
          if (r !== void 0) return r;
          Wn(t);
        }, set: (n) => {
          r = n;
        } });
      }
    };
    e("$state"), e("$effect"), e("$derived"), e("$inspect"), e("$props"), e("$bindable");
  }
  function or(e) {
    D === null && Ot("onMount"), Le && D.l !== null ? ys(D).m.push(e) : Ye(() => {
      let t = R(e);
      if (typeof t == "function") return t;
    });
  }
  function Nr(e) {
    D === null && Ot("onDestroy"), or(() => () => R(e));
  }
  function ys(e) {
    var t = e.l;
    return t.u ??= { a: [], b: [], m: [] };
  }
  var Zo = "5";
  typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Zo);
  var Rr = /* @__PURE__ */ new Set([" ", "	", `
`, "\r", ".", ",", "!", "?", ";", ":"]);
  function Jo(e) {
    let t = [], r = e.length, n = 0;
    for (; n < r; ) {
      let o = e.indexOf("@", n);
      if (o === -1) break;
      if (e[o + 1] === "[") {
        let a = e.indexOf("]", o + 2);
        if (a === -1) {
          for (let f = o + 2; f < r; f++) if (Rr.has(e[f])) {
            a = f;
            break;
          }
        }
        if (a === -1 && (a = r), a !== -1) {
          let f = e.slice(o + 2, a);
          t.push({ start: o, end: a + 1, name: f, tag: `@[${f}]` }), n = a + 1;
          continue;
        }
      }
      let i = o + 1;
      for (; i < r; i++) {
        let a = e[i];
        if (Rr.has(a)) break;
      }
      let s = e.slice(o + 1, i);
      t.push({ start: o, end: i, name: s, tag: `@${s}` }), n = i;
    }
    return t;
  }
  var Xo = () => "r" + Math.random().toString(36).substring(2);
  var Dn = Es;
  function Es(e, t, r) {
    var n = null, o = null, i = function() {
      n && (clearTimeout(n), o = null, n = null);
    }, s = function() {
      var f = o;
      i(), f && f();
    }, a = function() {
      if (!t) return e.apply(this, arguments);
      var f = this, l = arguments, u = r && !n;
      if (i(), o = function() {
        e.apply(f, l);
      }, n = setTimeout(function() {
        if (n = null, !u) {
          var p = o;
          return o = null, p();
        }
      }, t), u) return o();
    };
    return a.cancel = i, a.flush = s, a;
  }
  var Qo = (e) => {
    let t = getComputedStyle(e), r = /* @__PURE__ */ new Map();
    for (let n = 0; n < t.length; n++) {
      let o = t[n], i = t.getPropertyValue(o);
      r.set(o, i);
    }
    return r;
  };
  function fe(e) {
    w(e, e.v + 1);
  }
  var ir = class extends Map {
    #e = /* @__PURE__ */ new Map();
    #t = q(0);
    #r = q(0);
    constructor(t) {
      if (super(), v && (t = new Map(t)), t) {
        for (var [r, n] of t) super.set(r, n);
        this.#r.v = super.size;
      }
    }
    has(t) {
      var r = this.#e, n = r.get(t);
      if (n === void 0) {
        var o = super.get(t);
        if (o !== void 0) n = q(0), r.set(t, n);
        else return d(this.#t), false;
      }
      return d(n), true;
    }
    forEach(t, r) {
      this.#n(), super.forEach(t, r);
    }
    get(t) {
      var r = this.#e, n = r.get(t);
      if (n === void 0) {
        var o = super.get(t);
        if (o !== void 0) n = q(0), r.set(t, n);
        else {
          d(this.#t);
          return;
        }
      }
      return d(n), super.get(t);
    }
    set(t, r) {
      var n = this.#e, o = n.get(t), i = super.get(t), s = super.set(t, r), a = this.#t;
      if (o === void 0) n.set(t, q(0)), w(this.#r, super.size), fe(a);
      else if (i !== r) {
        fe(o);
        var f = a.reactions === null ? null : new Set(a.reactions), l = f === null || !o.reactions?.every((u) => f.has(u));
        l && fe(a);
      }
      return s;
    }
    delete(t) {
      var r = this.#e, n = r.get(t), o = super.delete(t);
      return n !== void 0 && (r.delete(t), w(this.#r, super.size), w(n, -1), fe(this.#t)), o;
    }
    clear() {
      if (super.size !== 0) {
        super.clear();
        var t = this.#e;
        w(this.#r, 0);
        for (var r of t.values()) w(r, -1);
        fe(this.#t), t.clear();
      }
    }
    #n() {
      d(this.#t);
      var t = this.#e;
      if (this.#r.v !== t.size) for (var r of super.keys()) t.has(r) || t.set(r, q(0));
      for (var [, n] of this.#e) d(n);
    }
    keys() {
      return d(this.#t), super.keys();
    }
    values() {
      return this.#n(), super.values();
    }
    entries() {
      return this.#n(), super.entries();
    }
    [Symbol.iterator]() {
      return this.entries();
    }
    get size() {
      return d(this.#r), super.size;
    }
  };
  var ei = Symbol();
  var Cr = class extends URLSearchParams {
    #e = q(0);
    #t = ti();
    #r = false;
    #n() {
      if (!this.#t || this.#r) return;
      this.#r = true;
      let t = this.toString();
      this.#t.search = t && `?${t}`, this.#r = false;
    }
    [ei](t) {
      if (!this.#r) {
        this.#r = true;
        for (let r of [...super.keys()]) super.delete(r);
        for (let [r, n] of t) super.append(r, n);
        fe(this.#e), this.#r = false;
      }
    }
    append(t, r) {
      super.append(t, r), this.#n(), fe(this.#e);
    }
    delete(t, r) {
      var n = super.has(t, r);
      super.delete(t, r), n && (this.#n(), fe(this.#e));
    }
    get(t) {
      return d(this.#e), super.get(t);
    }
    getAll(t) {
      return d(this.#e), super.getAll(t);
    }
    has(t, r) {
      return d(this.#e), super.has(t, r);
    }
    keys() {
      return d(this.#e), super.keys();
    }
    set(t, r) {
      var n = super.getAll(t).join("");
      super.set(t, r), n !== super.getAll(t).join("") && (this.#n(), fe(this.#e));
    }
    sort() {
      super.sort(), this.#n(), fe(this.#e);
    }
    toString() {
      return d(this.#e), super.toString();
    }
    values() {
      return d(this.#e), super.values();
    }
    entries() {
      return d(this.#e), super.entries();
    }
    [Symbol.iterator]() {
      return this.entries();
    }
    get size() {
      return d(this.#e), super.size;
    }
  };
  var $s = null;
  function ti() {
    return $s;
  }
  var As = Ee("<!><span></span><!>", 1);
  var Ss = Ee("<div><!></div>");
  function Nn(e, t) {
    Oe(t, true);
    let r = St(t, "markerRect", 15), n = St(t, "formatTag", 3, (m) => `<span style="${["color:var(--tagarea-tag-color, inherit)", "background-color:var(--tagarea-tag-background-color, inherit)", "font-weight:var(--tagarea-tag-font-weight, inherit)", "font-style:var(--tagarea-tag-font-style, inherit)", "font-size:var(--tagarea-tag-font-size, inherit)", "font-family:var(--tagarea-tag-font-family, inherit)", "text-transform:var(--tagarea-tag-text-transform, inherit)", "text-align:var(--tagarea-tag-text-align, inherit)", "text-decoration-line:var(--tagarea-tag-text-decoration-line, underline)", "text-decoration-color:var(--tagarea-tag-text-decoration-color, inherit)", "text-decoration-style:var(--tagarea-tag-text-decoration-style, inherit)", "text-decoration-thickness:var(--tagarea-tag-text-decoration-thickness, inherit)", "border:var(--tagarea-tag-border, inherit)", "border-radius:var(--tagarea-tag-border-radius, 0)"].join(";")};">${m}</span>`), o = L(null);
    Ye(() => {
      d(o) && t.currentWord ? r(d(o).getBoundingClientRect()) : r(null);
    });
    let i = Re(() => Qo(t.source)), s = (m) => !m.startsWith("-") && (m.includes("color") || m.includes("padding") || m.includes("font") || m.includes("border") || m.includes("letter") || m.includes("text") || m.includes("line") || m.includes("spacing")), a = new ir(), f = () => {
      let m = t.source.getBoundingClientRect(), g = window.pageXOffset || document.documentElement.scrollLeft, k = window.pageYOffset || document.documentElement.scrollTop;
      a.set("width", `${m.width}px`), a.set("height", `${m.height}px`), a.set("left", `${m.left + g}px`), a.set("top", `${m.top + k}px`);
    };
    lt(() => {
      let m = new ResizeObserver(f);
      return m.observe(t.source), () => m.disconnect();
    }), lt(() => {
      t.source;
      for (let [m, g] of d(i)) s(m) && a.set(m, g);
      f(), a.set("position", "absolute"), a.set("box-sizing", "border-box"), a.set("pointer-events", "none"), a.set("white-space", "pre-wrap"), a.set("border-color", "transparent"), a.set("background-color", "transparent"), a.set("color", "transparent");
    });
    let l = Re(() => Array.from(a.entries()).map(([m, g]) => `${m}:${g};`).join(""));
    function u(m) {
      if (!t.knownWords?.length) return m;
      for (let g of t.knownWords) g !== t.currentWord && (m = m.replaceAll(g.tag, n()(g.tag)));
      return m;
    }
    var p = Ss();
    un("resize", Ht, f);
    var c = st(p);
    {
      var _ = (m) => {
        var g = As();
        let k = Re(() => u(t.value.substring(0, t.currentWord.start))), A = Re(() => u(t.value.substring(t.currentWord.start)));
        var b = ze(g);
        ft(b, () => d(k));
        var y = gt(b);
        nr(y, (O) => w(o, O), () => d(o));
        var S = gt(y);
        ft(S, () => d(A)), G(m, g);
      }, h = (m) => {
        var g = Et(), k = ze(g);
        ft(k, () => u(t.value)), G(m, g);
      };
      qe(c, (m) => {
        t.currentWord ? m(_) : m(h, false);
      });
    }
    ot(p), Ge(() => At(p, d(l))), G(e, p), Fe();
  }
  var ks = (e) => e;
  function ri(e, { delay: t = 0, duration: r = 400, easing: n = ks } = {}) {
    let o = +getComputedStyle(e).opacity;
    return { delay: t, duration: r, easing: n, css: (i) => `opacity: ${i * o}` };
  }
  var kt = function() {
    return kt = Object.assign || function(e) {
      for (var t, r = 1, n = arguments.length; r < n; r++) {
        t = arguments[r];
        for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
      }
      return e;
    }, kt.apply(this, arguments);
  };
  var Ds = "~";
  var Ns = "~~";
  function Rn(e, t) {
    for (var r = {}, n = {}, o = e.split(Ns), i = false, s = 0; o.length > s; s++) {
      for (var a = o[s].split(Ds), f = 0; f < a.length; f += 2) {
        var l = a[f], u = a[f + 1], p = "&" + l + ";";
        r[p] = u, i && (r["&" + l] = u), n[u] = p;
      }
      i = true;
    }
    return t ? { entities: kt(kt({}, r), t.entities), characters: kt(kt({}, n), t.characters) } : { entities: r, characters: n };
  }
  var qr = { xml: /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g, html4: /&notin;|&(?:nbsp|iexcl|cent|pound|curren|yen|brvbar|sect|uml|copy|ordf|laquo|not|shy|reg|macr|deg|plusmn|sup2|sup3|acute|micro|para|middot|cedil|sup1|ordm|raquo|frac14|frac12|frac34|iquest|Agrave|Aacute|Acirc|Atilde|Auml|Aring|AElig|Ccedil|Egrave|Eacute|Ecirc|Euml|Igrave|Iacute|Icirc|Iuml|ETH|Ntilde|Ograve|Oacute|Ocirc|Otilde|Ouml|times|Oslash|Ugrave|Uacute|Ucirc|Uuml|Yacute|THORN|szlig|agrave|aacute|acirc|atilde|auml|aring|aelig|ccedil|egrave|eacute|ecirc|euml|igrave|iacute|icirc|iuml|eth|ntilde|ograve|oacute|ocirc|otilde|ouml|divide|oslash|ugrave|uacute|ucirc|uuml|yacute|thorn|yuml|quot|amp|lt|gt|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g, html5: /&centerdot;|&copysr;|&divideontimes;|&gtcc;|&gtcir;|&gtdot;|&gtlPar;|&gtquest;|&gtrapprox;|&gtrarr;|&gtrdot;|&gtreqless;|&gtreqqless;|&gtrless;|&gtrsim;|&ltcc;|&ltcir;|&ltdot;|&lthree;|&ltimes;|&ltlarr;|&ltquest;|&ltrPar;|&ltri;|&ltrie;|&ltrif;|&notin;|&notinE;|&notindot;|&notinva;|&notinvb;|&notinvc;|&notni;|&notniva;|&notnivb;|&notnivc;|&parallel;|&timesb;|&timesbar;|&timesd;|&(?:AElig|AMP|Aacute|Acirc|Agrave|Aring|Atilde|Auml|COPY|Ccedil|ETH|Eacute|Ecirc|Egrave|Euml|GT|Iacute|Icirc|Igrave|Iuml|LT|Ntilde|Oacute|Ocirc|Ograve|Oslash|Otilde|Ouml|QUOT|REG|THORN|Uacute|Ucirc|Ugrave|Uuml|Yacute|aacute|acirc|acute|aelig|agrave|amp|aring|atilde|auml|brvbar|ccedil|cedil|cent|copy|curren|deg|divide|eacute|ecirc|egrave|eth|euml|frac12|frac14|frac34|gt|iacute|icirc|iexcl|igrave|iquest|iuml|laquo|lt|macr|micro|middot|nbsp|not|ntilde|oacute|ocirc|ograve|ordf|ordm|oslash|otilde|ouml|para|plusmn|pound|quot|raquo|reg|sect|shy|sup1|sup2|sup3|szlig|thorn|times|uacute|ucirc|ugrave|uml|uuml|yacute|yen|yuml|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g };
  var ut = {};
  ut.xml = Rn(`lt~<~gt~>~quot~"~apos~'~amp~&`);
  ut.html4 = Rn(`apos~'~OElig~\u0152~oelig~\u0153~Scaron~\u0160~scaron~\u0161~Yuml~\u0178~circ~\u02C6~tilde~\u02DC~ensp~\u2002~emsp~\u2003~thinsp~\u2009~zwnj~\u200C~zwj~\u200D~lrm~\u200E~rlm~\u200F~ndash~\u2013~mdash~\u2014~lsquo~\u2018~rsquo~\u2019~sbquo~\u201A~ldquo~\u201C~rdquo~\u201D~bdquo~\u201E~dagger~\u2020~Dagger~\u2021~permil~\u2030~lsaquo~\u2039~rsaquo~\u203A~euro~\u20AC~fnof~\u0192~Alpha~\u0391~Beta~\u0392~Gamma~\u0393~Delta~\u0394~Epsilon~\u0395~Zeta~\u0396~Eta~\u0397~Theta~\u0398~Iota~\u0399~Kappa~\u039A~Lambda~\u039B~Mu~\u039C~Nu~\u039D~Xi~\u039E~Omicron~\u039F~Pi~\u03A0~Rho~\u03A1~Sigma~\u03A3~Tau~\u03A4~Upsilon~\u03A5~Phi~\u03A6~Chi~\u03A7~Psi~\u03A8~Omega~\u03A9~alpha~\u03B1~beta~\u03B2~gamma~\u03B3~delta~\u03B4~epsilon~\u03B5~zeta~\u03B6~eta~\u03B7~theta~\u03B8~iota~\u03B9~kappa~\u03BA~lambda~\u03BB~mu~\u03BC~nu~\u03BD~xi~\u03BE~omicron~\u03BF~pi~\u03C0~rho~\u03C1~sigmaf~\u03C2~sigma~\u03C3~tau~\u03C4~upsilon~\u03C5~phi~\u03C6~chi~\u03C7~psi~\u03C8~omega~\u03C9~thetasym~\u03D1~upsih~\u03D2~piv~\u03D6~bull~\u2022~hellip~\u2026~prime~\u2032~Prime~\u2033~oline~\u203E~frasl~\u2044~weierp~\u2118~image~\u2111~real~\u211C~trade~\u2122~alefsym~\u2135~larr~\u2190~uarr~\u2191~rarr~\u2192~darr~\u2193~harr~\u2194~crarr~\u21B5~lArr~\u21D0~uArr~\u21D1~rArr~\u21D2~dArr~\u21D3~hArr~\u21D4~forall~\u2200~part~\u2202~exist~\u2203~empty~\u2205~nabla~\u2207~isin~\u2208~notin~\u2209~ni~\u220B~prod~\u220F~sum~\u2211~minus~\u2212~lowast~\u2217~radic~\u221A~prop~\u221D~infin~\u221E~ang~\u2220~and~\u2227~or~\u2228~cap~\u2229~cup~\u222A~int~\u222B~there4~\u2234~sim~\u223C~cong~\u2245~asymp~\u2248~ne~\u2260~equiv~\u2261~le~\u2264~ge~\u2265~sub~\u2282~sup~\u2283~nsub~\u2284~sube~\u2286~supe~\u2287~oplus~\u2295~otimes~\u2297~perp~\u22A5~sdot~\u22C5~lceil~\u2308~rceil~\u2309~lfloor~\u230A~rfloor~\u230B~lang~\u2329~rang~\u232A~loz~\u25CA~spades~\u2660~clubs~\u2663~hearts~\u2665~diams~\u2666~~nbsp~\xA0~iexcl~\xA1~cent~\xA2~pound~\xA3~curren~\xA4~yen~\xA5~brvbar~\xA6~sect~\xA7~uml~\xA8~copy~\xA9~ordf~\xAA~laquo~\xAB~not~\xAC~shy~\xAD~reg~\xAE~macr~\xAF~deg~\xB0~plusmn~\xB1~sup2~\xB2~sup3~\xB3~acute~\xB4~micro~\xB5~para~\xB6~middot~\xB7~cedil~\xB8~sup1~\xB9~ordm~\xBA~raquo~\xBB~frac14~\xBC~frac12~\xBD~frac34~\xBE~iquest~\xBF~Agrave~\xC0~Aacute~\xC1~Acirc~\xC2~Atilde~\xC3~Auml~\xC4~Aring~\xC5~AElig~\xC6~Ccedil~\xC7~Egrave~\xC8~Eacute~\xC9~Ecirc~\xCA~Euml~\xCB~Igrave~\xCC~Iacute~\xCD~Icirc~\xCE~Iuml~\xCF~ETH~\xD0~Ntilde~\xD1~Ograve~\xD2~Oacute~\xD3~Ocirc~\xD4~Otilde~\xD5~Ouml~\xD6~times~\xD7~Oslash~\xD8~Ugrave~\xD9~Uacute~\xDA~Ucirc~\xDB~Uuml~\xDC~Yacute~\xDD~THORN~\xDE~szlig~\xDF~agrave~\xE0~aacute~\xE1~acirc~\xE2~atilde~\xE3~auml~\xE4~aring~\xE5~aelig~\xE6~ccedil~\xE7~egrave~\xE8~eacute~\xE9~ecirc~\xEA~euml~\xEB~igrave~\xEC~iacute~\xED~icirc~\xEE~iuml~\xEF~eth~\xF0~ntilde~\xF1~ograve~\xF2~oacute~\xF3~ocirc~\xF4~otilde~\xF5~ouml~\xF6~divide~\xF7~oslash~\xF8~ugrave~\xF9~uacute~\xFA~ucirc~\xFB~uuml~\xFC~yacute~\xFD~thorn~\xFE~yuml~\xFF~quot~"~amp~&~lt~<~gt~>`);
  ut.html5 = Rn('Abreve~\u0102~Acy~\u0410~Afr~\u{1D504}~Amacr~\u0100~And~\u2A53~Aogon~\u0104~Aopf~\u{1D538}~ApplyFunction~\u2061~Ascr~\u{1D49C}~Assign~\u2254~Backslash~\u2216~Barv~\u2AE7~Barwed~\u2306~Bcy~\u0411~Because~\u2235~Bernoullis~\u212C~Bfr~\u{1D505}~Bopf~\u{1D539}~Breve~\u02D8~Bscr~\u212C~Bumpeq~\u224E~CHcy~\u0427~Cacute~\u0106~Cap~\u22D2~CapitalDifferentialD~\u2145~Cayleys~\u212D~Ccaron~\u010C~Ccirc~\u0108~Cconint~\u2230~Cdot~\u010A~Cedilla~\xB8~CenterDot~\xB7~Cfr~\u212D~CircleDot~\u2299~CircleMinus~\u2296~CirclePlus~\u2295~CircleTimes~\u2297~ClockwiseContourIntegral~\u2232~CloseCurlyDoubleQuote~\u201D~CloseCurlyQuote~\u2019~Colon~\u2237~Colone~\u2A74~Congruent~\u2261~Conint~\u222F~ContourIntegral~\u222E~Copf~\u2102~Coproduct~\u2210~CounterClockwiseContourIntegral~\u2233~Cross~\u2A2F~Cscr~\u{1D49E}~Cup~\u22D3~CupCap~\u224D~DD~\u2145~DDotrahd~\u2911~DJcy~\u0402~DScy~\u0405~DZcy~\u040F~Darr~\u21A1~Dashv~\u2AE4~Dcaron~\u010E~Dcy~\u0414~Del~\u2207~Dfr~\u{1D507}~DiacriticalAcute~\xB4~DiacriticalDot~\u02D9~DiacriticalDoubleAcute~\u02DD~DiacriticalGrave~`~DiacriticalTilde~\u02DC~Diamond~\u22C4~DifferentialD~\u2146~Dopf~\u{1D53B}~Dot~\xA8~DotDot~\u20DC~DotEqual~\u2250~DoubleContourIntegral~\u222F~DoubleDot~\xA8~DoubleDownArrow~\u21D3~DoubleLeftArrow~\u21D0~DoubleLeftRightArrow~\u21D4~DoubleLeftTee~\u2AE4~DoubleLongLeftArrow~\u27F8~DoubleLongLeftRightArrow~\u27FA~DoubleLongRightArrow~\u27F9~DoubleRightArrow~\u21D2~DoubleRightTee~\u22A8~DoubleUpArrow~\u21D1~DoubleUpDownArrow~\u21D5~DoubleVerticalBar~\u2225~DownArrow~\u2193~DownArrowBar~\u2913~DownArrowUpArrow~\u21F5~DownBreve~\u0311~DownLeftRightVector~\u2950~DownLeftTeeVector~\u295E~DownLeftVector~\u21BD~DownLeftVectorBar~\u2956~DownRightTeeVector~\u295F~DownRightVector~\u21C1~DownRightVectorBar~\u2957~DownTee~\u22A4~DownTeeArrow~\u21A7~Downarrow~\u21D3~Dscr~\u{1D49F}~Dstrok~\u0110~ENG~\u014A~Ecaron~\u011A~Ecy~\u042D~Edot~\u0116~Efr~\u{1D508}~Element~\u2208~Emacr~\u0112~EmptySmallSquare~\u25FB~EmptyVerySmallSquare~\u25AB~Eogon~\u0118~Eopf~\u{1D53C}~Equal~\u2A75~EqualTilde~\u2242~Equilibrium~\u21CC~Escr~\u2130~Esim~\u2A73~Exists~\u2203~ExponentialE~\u2147~Fcy~\u0424~Ffr~\u{1D509}~FilledSmallSquare~\u25FC~FilledVerySmallSquare~\u25AA~Fopf~\u{1D53D}~ForAll~\u2200~Fouriertrf~\u2131~Fscr~\u2131~GJcy~\u0403~Gammad~\u03DC~Gbreve~\u011E~Gcedil~\u0122~Gcirc~\u011C~Gcy~\u0413~Gdot~\u0120~Gfr~\u{1D50A}~Gg~\u22D9~Gopf~\u{1D53E}~GreaterEqual~\u2265~GreaterEqualLess~\u22DB~GreaterFullEqual~\u2267~GreaterGreater~\u2AA2~GreaterLess~\u2277~GreaterSlantEqual~\u2A7E~GreaterTilde~\u2273~Gscr~\u{1D4A2}~Gt~\u226B~HARDcy~\u042A~Hacek~\u02C7~Hat~^~Hcirc~\u0124~Hfr~\u210C~HilbertSpace~\u210B~Hopf~\u210D~HorizontalLine~\u2500~Hscr~\u210B~Hstrok~\u0126~HumpDownHump~\u224E~HumpEqual~\u224F~IEcy~\u0415~IJlig~\u0132~IOcy~\u0401~Icy~\u0418~Idot~\u0130~Ifr~\u2111~Im~\u2111~Imacr~\u012A~ImaginaryI~\u2148~Implies~\u21D2~Int~\u222C~Integral~\u222B~Intersection~\u22C2~InvisibleComma~\u2063~InvisibleTimes~\u2062~Iogon~\u012E~Iopf~\u{1D540}~Iscr~\u2110~Itilde~\u0128~Iukcy~\u0406~Jcirc~\u0134~Jcy~\u0419~Jfr~\u{1D50D}~Jopf~\u{1D541}~Jscr~\u{1D4A5}~Jsercy~\u0408~Jukcy~\u0404~KHcy~\u0425~KJcy~\u040C~Kcedil~\u0136~Kcy~\u041A~Kfr~\u{1D50E}~Kopf~\u{1D542}~Kscr~\u{1D4A6}~LJcy~\u0409~Lacute~\u0139~Lang~\u27EA~Laplacetrf~\u2112~Larr~\u219E~Lcaron~\u013D~Lcedil~\u013B~Lcy~\u041B~LeftAngleBracket~\u27E8~LeftArrow~\u2190~LeftArrowBar~\u21E4~LeftArrowRightArrow~\u21C6~LeftCeiling~\u2308~LeftDoubleBracket~\u27E6~LeftDownTeeVector~\u2961~LeftDownVector~\u21C3~LeftDownVectorBar~\u2959~LeftFloor~\u230A~LeftRightArrow~\u2194~LeftRightVector~\u294E~LeftTee~\u22A3~LeftTeeArrow~\u21A4~LeftTeeVector~\u295A~LeftTriangle~\u22B2~LeftTriangleBar~\u29CF~LeftTriangleEqual~\u22B4~LeftUpDownVector~\u2951~LeftUpTeeVector~\u2960~LeftUpVector~\u21BF~LeftUpVectorBar~\u2958~LeftVector~\u21BC~LeftVectorBar~\u2952~Leftarrow~\u21D0~Leftrightarrow~\u21D4~LessEqualGreater~\u22DA~LessFullEqual~\u2266~LessGreater~\u2276~LessLess~\u2AA1~LessSlantEqual~\u2A7D~LessTilde~\u2272~Lfr~\u{1D50F}~Ll~\u22D8~Lleftarrow~\u21DA~Lmidot~\u013F~LongLeftArrow~\u27F5~LongLeftRightArrow~\u27F7~LongRightArrow~\u27F6~Longleftarrow~\u27F8~Longleftrightarrow~\u27FA~Longrightarrow~\u27F9~Lopf~\u{1D543}~LowerLeftArrow~\u2199~LowerRightArrow~\u2198~Lscr~\u2112~Lsh~\u21B0~Lstrok~\u0141~Lt~\u226A~Map~\u2905~Mcy~\u041C~MediumSpace~\u205F~Mellintrf~\u2133~Mfr~\u{1D510}~MinusPlus~\u2213~Mopf~\u{1D544}~Mscr~\u2133~NJcy~\u040A~Nacute~\u0143~Ncaron~\u0147~Ncedil~\u0145~Ncy~\u041D~NegativeMediumSpace~\u200B~NegativeThickSpace~\u200B~NegativeThinSpace~\u200B~NegativeVeryThinSpace~\u200B~NestedGreaterGreater~\u226B~NestedLessLess~\u226A~NewLine~\n~Nfr~\u{1D511}~NoBreak~\u2060~NonBreakingSpace~\xA0~Nopf~\u2115~Not~\u2AEC~NotCongruent~\u2262~NotCupCap~\u226D~NotDoubleVerticalBar~\u2226~NotElement~\u2209~NotEqual~\u2260~NotEqualTilde~\u2242\u0338~NotExists~\u2204~NotGreater~\u226F~NotGreaterEqual~\u2271~NotGreaterFullEqual~\u2267\u0338~NotGreaterGreater~\u226B\u0338~NotGreaterLess~\u2279~NotGreaterSlantEqual~\u2A7E\u0338~NotGreaterTilde~\u2275~NotHumpDownHump~\u224E\u0338~NotHumpEqual~\u224F\u0338~NotLeftTriangle~\u22EA~NotLeftTriangleBar~\u29CF\u0338~NotLeftTriangleEqual~\u22EC~NotLess~\u226E~NotLessEqual~\u2270~NotLessGreater~\u2278~NotLessLess~\u226A\u0338~NotLessSlantEqual~\u2A7D\u0338~NotLessTilde~\u2274~NotNestedGreaterGreater~\u2AA2\u0338~NotNestedLessLess~\u2AA1\u0338~NotPrecedes~\u2280~NotPrecedesEqual~\u2AAF\u0338~NotPrecedesSlantEqual~\u22E0~NotReverseElement~\u220C~NotRightTriangle~\u22EB~NotRightTriangleBar~\u29D0\u0338~NotRightTriangleEqual~\u22ED~NotSquareSubset~\u228F\u0338~NotSquareSubsetEqual~\u22E2~NotSquareSuperset~\u2290\u0338~NotSquareSupersetEqual~\u22E3~NotSubset~\u2282\u20D2~NotSubsetEqual~\u2288~NotSucceeds~\u2281~NotSucceedsEqual~\u2AB0\u0338~NotSucceedsSlantEqual~\u22E1~NotSucceedsTilde~\u227F\u0338~NotSuperset~\u2283\u20D2~NotSupersetEqual~\u2289~NotTilde~\u2241~NotTildeEqual~\u2244~NotTildeFullEqual~\u2247~NotTildeTilde~\u2249~NotVerticalBar~\u2224~Nscr~\u{1D4A9}~Ocy~\u041E~Odblac~\u0150~Ofr~\u{1D512}~Omacr~\u014C~Oopf~\u{1D546}~OpenCurlyDoubleQuote~\u201C~OpenCurlyQuote~\u2018~Or~\u2A54~Oscr~\u{1D4AA}~Otimes~\u2A37~OverBar~\u203E~OverBrace~\u23DE~OverBracket~\u23B4~OverParenthesis~\u23DC~PartialD~\u2202~Pcy~\u041F~Pfr~\u{1D513}~PlusMinus~\xB1~Poincareplane~\u210C~Popf~\u2119~Pr~\u2ABB~Precedes~\u227A~PrecedesEqual~\u2AAF~PrecedesSlantEqual~\u227C~PrecedesTilde~\u227E~Product~\u220F~Proportion~\u2237~Proportional~\u221D~Pscr~\u{1D4AB}~Qfr~\u{1D514}~Qopf~\u211A~Qscr~\u{1D4AC}~RBarr~\u2910~Racute~\u0154~Rang~\u27EB~Rarr~\u21A0~Rarrtl~\u2916~Rcaron~\u0158~Rcedil~\u0156~Rcy~\u0420~Re~\u211C~ReverseElement~\u220B~ReverseEquilibrium~\u21CB~ReverseUpEquilibrium~\u296F~Rfr~\u211C~RightAngleBracket~\u27E9~RightArrow~\u2192~RightArrowBar~\u21E5~RightArrowLeftArrow~\u21C4~RightCeiling~\u2309~RightDoubleBracket~\u27E7~RightDownTeeVector~\u295D~RightDownVector~\u21C2~RightDownVectorBar~\u2955~RightFloor~\u230B~RightTee~\u22A2~RightTeeArrow~\u21A6~RightTeeVector~\u295B~RightTriangle~\u22B3~RightTriangleBar~\u29D0~RightTriangleEqual~\u22B5~RightUpDownVector~\u294F~RightUpTeeVector~\u295C~RightUpVector~\u21BE~RightUpVectorBar~\u2954~RightVector~\u21C0~RightVectorBar~\u2953~Rightarrow~\u21D2~Ropf~\u211D~RoundImplies~\u2970~Rrightarrow~\u21DB~Rscr~\u211B~Rsh~\u21B1~RuleDelayed~\u29F4~SHCHcy~\u0429~SHcy~\u0428~SOFTcy~\u042C~Sacute~\u015A~Sc~\u2ABC~Scedil~\u015E~Scirc~\u015C~Scy~\u0421~Sfr~\u{1D516}~ShortDownArrow~\u2193~ShortLeftArrow~\u2190~ShortRightArrow~\u2192~ShortUpArrow~\u2191~SmallCircle~\u2218~Sopf~\u{1D54A}~Sqrt~\u221A~Square~\u25A1~SquareIntersection~\u2293~SquareSubset~\u228F~SquareSubsetEqual~\u2291~SquareSuperset~\u2290~SquareSupersetEqual~\u2292~SquareUnion~\u2294~Sscr~\u{1D4AE}~Star~\u22C6~Sub~\u22D0~Subset~\u22D0~SubsetEqual~\u2286~Succeeds~\u227B~SucceedsEqual~\u2AB0~SucceedsSlantEqual~\u227D~SucceedsTilde~\u227F~SuchThat~\u220B~Sum~\u2211~Sup~\u22D1~Superset~\u2283~SupersetEqual~\u2287~Supset~\u22D1~TRADE~\u2122~TSHcy~\u040B~TScy~\u0426~Tab~	~Tcaron~\u0164~Tcedil~\u0162~Tcy~\u0422~Tfr~\u{1D517}~Therefore~\u2234~ThickSpace~\u205F\u200A~ThinSpace~\u2009~Tilde~\u223C~TildeEqual~\u2243~TildeFullEqual~\u2245~TildeTilde~\u2248~Topf~\u{1D54B}~TripleDot~\u20DB~Tscr~\u{1D4AF}~Tstrok~\u0166~Uarr~\u219F~Uarrocir~\u2949~Ubrcy~\u040E~Ubreve~\u016C~Ucy~\u0423~Udblac~\u0170~Ufr~\u{1D518}~Umacr~\u016A~UnderBar~_~UnderBrace~\u23DF~UnderBracket~\u23B5~UnderParenthesis~\u23DD~Union~\u22C3~UnionPlus~\u228E~Uogon~\u0172~Uopf~\u{1D54C}~UpArrow~\u2191~UpArrowBar~\u2912~UpArrowDownArrow~\u21C5~UpDownArrow~\u2195~UpEquilibrium~\u296E~UpTee~\u22A5~UpTeeArrow~\u21A5~Uparrow~\u21D1~Updownarrow~\u21D5~UpperLeftArrow~\u2196~UpperRightArrow~\u2197~Upsi~\u03D2~Uring~\u016E~Uscr~\u{1D4B0}~Utilde~\u0168~VDash~\u22AB~Vbar~\u2AEB~Vcy~\u0412~Vdash~\u22A9~Vdashl~\u2AE6~Vee~\u22C1~Verbar~\u2016~Vert~\u2016~VerticalBar~\u2223~VerticalLine~|~VerticalSeparator~\u2758~VerticalTilde~\u2240~VeryThinSpace~\u200A~Vfr~\u{1D519}~Vopf~\u{1D54D}~Vscr~\u{1D4B1}~Vvdash~\u22AA~Wcirc~\u0174~Wedge~\u22C0~Wfr~\u{1D51A}~Wopf~\u{1D54E}~Wscr~\u{1D4B2}~Xfr~\u{1D51B}~Xopf~\u{1D54F}~Xscr~\u{1D4B3}~YAcy~\u042F~YIcy~\u0407~YUcy~\u042E~Ycirc~\u0176~Ycy~\u042B~Yfr~\u{1D51C}~Yopf~\u{1D550}~Yscr~\u{1D4B4}~ZHcy~\u0416~Zacute~\u0179~Zcaron~\u017D~Zcy~\u0417~Zdot~\u017B~ZeroWidthSpace~\u200B~Zfr~\u2128~Zopf~\u2124~Zscr~\u{1D4B5}~abreve~\u0103~ac~\u223E~acE~\u223E\u0333~acd~\u223F~acy~\u0430~af~\u2061~afr~\u{1D51E}~aleph~\u2135~amacr~\u0101~amalg~\u2A3F~andand~\u2A55~andd~\u2A5C~andslope~\u2A58~andv~\u2A5A~ange~\u29A4~angle~\u2220~angmsd~\u2221~angmsdaa~\u29A8~angmsdab~\u29A9~angmsdac~\u29AA~angmsdad~\u29AB~angmsdae~\u29AC~angmsdaf~\u29AD~angmsdag~\u29AE~angmsdah~\u29AF~angrt~\u221F~angrtvb~\u22BE~angrtvbd~\u299D~angsph~\u2222~angst~\xC5~angzarr~\u237C~aogon~\u0105~aopf~\u{1D552}~ap~\u2248~apE~\u2A70~apacir~\u2A6F~ape~\u224A~apid~\u224B~approx~\u2248~approxeq~\u224A~ascr~\u{1D4B6}~ast~*~asympeq~\u224D~awconint~\u2233~awint~\u2A11~bNot~\u2AED~backcong~\u224C~backepsilon~\u03F6~backprime~\u2035~backsim~\u223D~backsimeq~\u22CD~barvee~\u22BD~barwed~\u2305~barwedge~\u2305~bbrk~\u23B5~bbrktbrk~\u23B6~bcong~\u224C~bcy~\u0431~becaus~\u2235~because~\u2235~bemptyv~\u29B0~bepsi~\u03F6~bernou~\u212C~beth~\u2136~between~\u226C~bfr~\u{1D51F}~bigcap~\u22C2~bigcirc~\u25EF~bigcup~\u22C3~bigodot~\u2A00~bigoplus~\u2A01~bigotimes~\u2A02~bigsqcup~\u2A06~bigstar~\u2605~bigtriangledown~\u25BD~bigtriangleup~\u25B3~biguplus~\u2A04~bigvee~\u22C1~bigwedge~\u22C0~bkarow~\u290D~blacklozenge~\u29EB~blacksquare~\u25AA~blacktriangle~\u25B4~blacktriangledown~\u25BE~blacktriangleleft~\u25C2~blacktriangleright~\u25B8~blank~\u2423~blk12~\u2592~blk14~\u2591~blk34~\u2593~block~\u2588~bne~=\u20E5~bnequiv~\u2261\u20E5~bnot~\u2310~bopf~\u{1D553}~bot~\u22A5~bottom~\u22A5~bowtie~\u22C8~boxDL~\u2557~boxDR~\u2554~boxDl~\u2556~boxDr~\u2553~boxH~\u2550~boxHD~\u2566~boxHU~\u2569~boxHd~\u2564~boxHu~\u2567~boxUL~\u255D~boxUR~\u255A~boxUl~\u255C~boxUr~\u2559~boxV~\u2551~boxVH~\u256C~boxVL~\u2563~boxVR~\u2560~boxVh~\u256B~boxVl~\u2562~boxVr~\u255F~boxbox~\u29C9~boxdL~\u2555~boxdR~\u2552~boxdl~\u2510~boxdr~\u250C~boxh~\u2500~boxhD~\u2565~boxhU~\u2568~boxhd~\u252C~boxhu~\u2534~boxminus~\u229F~boxplus~\u229E~boxtimes~\u22A0~boxuL~\u255B~boxuR~\u2558~boxul~\u2518~boxur~\u2514~boxv~\u2502~boxvH~\u256A~boxvL~\u2561~boxvR~\u255E~boxvh~\u253C~boxvl~\u2524~boxvr~\u251C~bprime~\u2035~breve~\u02D8~bscr~\u{1D4B7}~bsemi~\u204F~bsim~\u223D~bsime~\u22CD~bsol~\\~bsolb~\u29C5~bsolhsub~\u27C8~bullet~\u2022~bump~\u224E~bumpE~\u2AAE~bumpe~\u224F~bumpeq~\u224F~cacute~\u0107~capand~\u2A44~capbrcup~\u2A49~capcap~\u2A4B~capcup~\u2A47~capdot~\u2A40~caps~\u2229\uFE00~caret~\u2041~caron~\u02C7~ccaps~\u2A4D~ccaron~\u010D~ccirc~\u0109~ccups~\u2A4C~ccupssm~\u2A50~cdot~\u010B~cemptyv~\u29B2~centerdot~\xB7~cfr~\u{1D520}~chcy~\u0447~check~\u2713~checkmark~\u2713~cir~\u25CB~cirE~\u29C3~circeq~\u2257~circlearrowleft~\u21BA~circlearrowright~\u21BB~circledR~\xAE~circledS~\u24C8~circledast~\u229B~circledcirc~\u229A~circleddash~\u229D~cire~\u2257~cirfnint~\u2A10~cirmid~\u2AEF~cirscir~\u29C2~clubsuit~\u2663~colon~:~colone~\u2254~coloneq~\u2254~comma~,~commat~@~comp~\u2201~compfn~\u2218~complement~\u2201~complexes~\u2102~congdot~\u2A6D~conint~\u222E~copf~\u{1D554}~coprod~\u2210~copysr~\u2117~cross~\u2717~cscr~\u{1D4B8}~csub~\u2ACF~csube~\u2AD1~csup~\u2AD0~csupe~\u2AD2~ctdot~\u22EF~cudarrl~\u2938~cudarrr~\u2935~cuepr~\u22DE~cuesc~\u22DF~cularr~\u21B6~cularrp~\u293D~cupbrcap~\u2A48~cupcap~\u2A46~cupcup~\u2A4A~cupdot~\u228D~cupor~\u2A45~cups~\u222A\uFE00~curarr~\u21B7~curarrm~\u293C~curlyeqprec~\u22DE~curlyeqsucc~\u22DF~curlyvee~\u22CE~curlywedge~\u22CF~curvearrowleft~\u21B6~curvearrowright~\u21B7~cuvee~\u22CE~cuwed~\u22CF~cwconint~\u2232~cwint~\u2231~cylcty~\u232D~dHar~\u2965~daleth~\u2138~dash~\u2010~dashv~\u22A3~dbkarow~\u290F~dblac~\u02DD~dcaron~\u010F~dcy~\u0434~dd~\u2146~ddagger~\u2021~ddarr~\u21CA~ddotseq~\u2A77~demptyv~\u29B1~dfisht~\u297F~dfr~\u{1D521}~dharl~\u21C3~dharr~\u21C2~diam~\u22C4~diamond~\u22C4~diamondsuit~\u2666~die~\xA8~digamma~\u03DD~disin~\u22F2~div~\xF7~divideontimes~\u22C7~divonx~\u22C7~djcy~\u0452~dlcorn~\u231E~dlcrop~\u230D~dollar~$~dopf~\u{1D555}~dot~\u02D9~doteq~\u2250~doteqdot~\u2251~dotminus~\u2238~dotplus~\u2214~dotsquare~\u22A1~doublebarwedge~\u2306~downarrow~\u2193~downdownarrows~\u21CA~downharpoonleft~\u21C3~downharpoonright~\u21C2~drbkarow~\u2910~drcorn~\u231F~drcrop~\u230C~dscr~\u{1D4B9}~dscy~\u0455~dsol~\u29F6~dstrok~\u0111~dtdot~\u22F1~dtri~\u25BF~dtrif~\u25BE~duarr~\u21F5~duhar~\u296F~dwangle~\u29A6~dzcy~\u045F~dzigrarr~\u27FF~eDDot~\u2A77~eDot~\u2251~easter~\u2A6E~ecaron~\u011B~ecir~\u2256~ecolon~\u2255~ecy~\u044D~edot~\u0117~ee~\u2147~efDot~\u2252~efr~\u{1D522}~eg~\u2A9A~egs~\u2A96~egsdot~\u2A98~el~\u2A99~elinters~\u23E7~ell~\u2113~els~\u2A95~elsdot~\u2A97~emacr~\u0113~emptyset~\u2205~emptyv~\u2205~emsp13~\u2004~emsp14~\u2005~eng~\u014B~eogon~\u0119~eopf~\u{1D556}~epar~\u22D5~eparsl~\u29E3~eplus~\u2A71~epsi~\u03B5~epsiv~\u03F5~eqcirc~\u2256~eqcolon~\u2255~eqsim~\u2242~eqslantgtr~\u2A96~eqslantless~\u2A95~equals~=~equest~\u225F~equivDD~\u2A78~eqvparsl~\u29E5~erDot~\u2253~erarr~\u2971~escr~\u212F~esdot~\u2250~esim~\u2242~excl~!~expectation~\u2130~exponentiale~\u2147~fallingdotseq~\u2252~fcy~\u0444~female~\u2640~ffilig~\uFB03~fflig~\uFB00~ffllig~\uFB04~ffr~\u{1D523}~filig~\uFB01~fjlig~fj~flat~\u266D~fllig~\uFB02~fltns~\u25B1~fopf~\u{1D557}~fork~\u22D4~forkv~\u2AD9~fpartint~\u2A0D~frac13~\u2153~frac15~\u2155~frac16~\u2159~frac18~\u215B~frac23~\u2154~frac25~\u2156~frac35~\u2157~frac38~\u215C~frac45~\u2158~frac56~\u215A~frac58~\u215D~frac78~\u215E~frown~\u2322~fscr~\u{1D4BB}~gE~\u2267~gEl~\u2A8C~gacute~\u01F5~gammad~\u03DD~gap~\u2A86~gbreve~\u011F~gcirc~\u011D~gcy~\u0433~gdot~\u0121~gel~\u22DB~geq~\u2265~geqq~\u2267~geqslant~\u2A7E~ges~\u2A7E~gescc~\u2AA9~gesdot~\u2A80~gesdoto~\u2A82~gesdotol~\u2A84~gesl~\u22DB\uFE00~gesles~\u2A94~gfr~\u{1D524}~gg~\u226B~ggg~\u22D9~gimel~\u2137~gjcy~\u0453~gl~\u2277~glE~\u2A92~gla~\u2AA5~glj~\u2AA4~gnE~\u2269~gnap~\u2A8A~gnapprox~\u2A8A~gne~\u2A88~gneq~\u2A88~gneqq~\u2269~gnsim~\u22E7~gopf~\u{1D558}~grave~`~gscr~\u210A~gsim~\u2273~gsime~\u2A8E~gsiml~\u2A90~gtcc~\u2AA7~gtcir~\u2A7A~gtdot~\u22D7~gtlPar~\u2995~gtquest~\u2A7C~gtrapprox~\u2A86~gtrarr~\u2978~gtrdot~\u22D7~gtreqless~\u22DB~gtreqqless~\u2A8C~gtrless~\u2277~gtrsim~\u2273~gvertneqq~\u2269\uFE00~gvnE~\u2269\uFE00~hairsp~\u200A~half~\xBD~hamilt~\u210B~hardcy~\u044A~harrcir~\u2948~harrw~\u21AD~hbar~\u210F~hcirc~\u0125~heartsuit~\u2665~hercon~\u22B9~hfr~\u{1D525}~hksearow~\u2925~hkswarow~\u2926~hoarr~\u21FF~homtht~\u223B~hookleftarrow~\u21A9~hookrightarrow~\u21AA~hopf~\u{1D559}~horbar~\u2015~hscr~\u{1D4BD}~hslash~\u210F~hstrok~\u0127~hybull~\u2043~hyphen~\u2010~ic~\u2063~icy~\u0438~iecy~\u0435~iff~\u21D4~ifr~\u{1D526}~ii~\u2148~iiiint~\u2A0C~iiint~\u222D~iinfin~\u29DC~iiota~\u2129~ijlig~\u0133~imacr~\u012B~imagline~\u2110~imagpart~\u2111~imath~\u0131~imof~\u22B7~imped~\u01B5~in~\u2208~incare~\u2105~infintie~\u29DD~inodot~\u0131~intcal~\u22BA~integers~\u2124~intercal~\u22BA~intlarhk~\u2A17~intprod~\u2A3C~iocy~\u0451~iogon~\u012F~iopf~\u{1D55A}~iprod~\u2A3C~iscr~\u{1D4BE}~isinE~\u22F9~isindot~\u22F5~isins~\u22F4~isinsv~\u22F3~isinv~\u2208~it~\u2062~itilde~\u0129~iukcy~\u0456~jcirc~\u0135~jcy~\u0439~jfr~\u{1D527}~jmath~\u0237~jopf~\u{1D55B}~jscr~\u{1D4BF}~jsercy~\u0458~jukcy~\u0454~kappav~\u03F0~kcedil~\u0137~kcy~\u043A~kfr~\u{1D528}~kgreen~\u0138~khcy~\u0445~kjcy~\u045C~kopf~\u{1D55C}~kscr~\u{1D4C0}~lAarr~\u21DA~lAtail~\u291B~lBarr~\u290E~lE~\u2266~lEg~\u2A8B~lHar~\u2962~lacute~\u013A~laemptyv~\u29B4~lagran~\u2112~langd~\u2991~langle~\u27E8~lap~\u2A85~larrb~\u21E4~larrbfs~\u291F~larrfs~\u291D~larrhk~\u21A9~larrlp~\u21AB~larrpl~\u2939~larrsim~\u2973~larrtl~\u21A2~lat~\u2AAB~latail~\u2919~late~\u2AAD~lates~\u2AAD\uFE00~lbarr~\u290C~lbbrk~\u2772~lbrace~{~lbrack~[~lbrke~\u298B~lbrksld~\u298F~lbrkslu~\u298D~lcaron~\u013E~lcedil~\u013C~lcub~{~lcy~\u043B~ldca~\u2936~ldquor~\u201E~ldrdhar~\u2967~ldrushar~\u294B~ldsh~\u21B2~leftarrow~\u2190~leftarrowtail~\u21A2~leftharpoondown~\u21BD~leftharpoonup~\u21BC~leftleftarrows~\u21C7~leftrightarrow~\u2194~leftrightarrows~\u21C6~leftrightharpoons~\u21CB~leftrightsquigarrow~\u21AD~leftthreetimes~\u22CB~leg~\u22DA~leq~\u2264~leqq~\u2266~leqslant~\u2A7D~les~\u2A7D~lescc~\u2AA8~lesdot~\u2A7F~lesdoto~\u2A81~lesdotor~\u2A83~lesg~\u22DA\uFE00~lesges~\u2A93~lessapprox~\u2A85~lessdot~\u22D6~lesseqgtr~\u22DA~lesseqqgtr~\u2A8B~lessgtr~\u2276~lesssim~\u2272~lfisht~\u297C~lfr~\u{1D529}~lg~\u2276~lgE~\u2A91~lhard~\u21BD~lharu~\u21BC~lharul~\u296A~lhblk~\u2584~ljcy~\u0459~ll~\u226A~llarr~\u21C7~llcorner~\u231E~llhard~\u296B~lltri~\u25FA~lmidot~\u0140~lmoust~\u23B0~lmoustache~\u23B0~lnE~\u2268~lnap~\u2A89~lnapprox~\u2A89~lne~\u2A87~lneq~\u2A87~lneqq~\u2268~lnsim~\u22E6~loang~\u27EC~loarr~\u21FD~lobrk~\u27E6~longleftarrow~\u27F5~longleftrightarrow~\u27F7~longmapsto~\u27FC~longrightarrow~\u27F6~looparrowleft~\u21AB~looparrowright~\u21AC~lopar~\u2985~lopf~\u{1D55D}~loplus~\u2A2D~lotimes~\u2A34~lowbar~_~lozenge~\u25CA~lozf~\u29EB~lpar~(~lparlt~\u2993~lrarr~\u21C6~lrcorner~\u231F~lrhar~\u21CB~lrhard~\u296D~lrtri~\u22BF~lscr~\u{1D4C1}~lsh~\u21B0~lsim~\u2272~lsime~\u2A8D~lsimg~\u2A8F~lsqb~[~lsquor~\u201A~lstrok~\u0142~ltcc~\u2AA6~ltcir~\u2A79~ltdot~\u22D6~lthree~\u22CB~ltimes~\u22C9~ltlarr~\u2976~ltquest~\u2A7B~ltrPar~\u2996~ltri~\u25C3~ltrie~\u22B4~ltrif~\u25C2~lurdshar~\u294A~luruhar~\u2966~lvertneqq~\u2268\uFE00~lvnE~\u2268\uFE00~mDDot~\u223A~male~\u2642~malt~\u2720~maltese~\u2720~map~\u21A6~mapsto~\u21A6~mapstodown~\u21A7~mapstoleft~\u21A4~mapstoup~\u21A5~marker~\u25AE~mcomma~\u2A29~mcy~\u043C~measuredangle~\u2221~mfr~\u{1D52A}~mho~\u2127~mid~\u2223~midast~*~midcir~\u2AF0~minusb~\u229F~minusd~\u2238~minusdu~\u2A2A~mlcp~\u2ADB~mldr~\u2026~mnplus~\u2213~models~\u22A7~mopf~\u{1D55E}~mp~\u2213~mscr~\u{1D4C2}~mstpos~\u223E~multimap~\u22B8~mumap~\u22B8~nGg~\u22D9\u0338~nGt~\u226B\u20D2~nGtv~\u226B\u0338~nLeftarrow~\u21CD~nLeftrightarrow~\u21CE~nLl~\u22D8\u0338~nLt~\u226A\u20D2~nLtv~\u226A\u0338~nRightarrow~\u21CF~nVDash~\u22AF~nVdash~\u22AE~nacute~\u0144~nang~\u2220\u20D2~nap~\u2249~napE~\u2A70\u0338~napid~\u224B\u0338~napos~\u0149~napprox~\u2249~natur~\u266E~natural~\u266E~naturals~\u2115~nbump~\u224E\u0338~nbumpe~\u224F\u0338~ncap~\u2A43~ncaron~\u0148~ncedil~\u0146~ncong~\u2247~ncongdot~\u2A6D\u0338~ncup~\u2A42~ncy~\u043D~neArr~\u21D7~nearhk~\u2924~nearr~\u2197~nearrow~\u2197~nedot~\u2250\u0338~nequiv~\u2262~nesear~\u2928~nesim~\u2242\u0338~nexist~\u2204~nexists~\u2204~nfr~\u{1D52B}~ngE~\u2267\u0338~nge~\u2271~ngeq~\u2271~ngeqq~\u2267\u0338~ngeqslant~\u2A7E\u0338~nges~\u2A7E\u0338~ngsim~\u2275~ngt~\u226F~ngtr~\u226F~nhArr~\u21CE~nharr~\u21AE~nhpar~\u2AF2~nis~\u22FC~nisd~\u22FA~niv~\u220B~njcy~\u045A~nlArr~\u21CD~nlE~\u2266\u0338~nlarr~\u219A~nldr~\u2025~nle~\u2270~nleftarrow~\u219A~nleftrightarrow~\u21AE~nleq~\u2270~nleqq~\u2266\u0338~nleqslant~\u2A7D\u0338~nles~\u2A7D\u0338~nless~\u226E~nlsim~\u2274~nlt~\u226E~nltri~\u22EA~nltrie~\u22EC~nmid~\u2224~nopf~\u{1D55F}~notinE~\u22F9\u0338~notindot~\u22F5\u0338~notinva~\u2209~notinvb~\u22F7~notinvc~\u22F6~notni~\u220C~notniva~\u220C~notnivb~\u22FE~notnivc~\u22FD~npar~\u2226~nparallel~\u2226~nparsl~\u2AFD\u20E5~npart~\u2202\u0338~npolint~\u2A14~npr~\u2280~nprcue~\u22E0~npre~\u2AAF\u0338~nprec~\u2280~npreceq~\u2AAF\u0338~nrArr~\u21CF~nrarr~\u219B~nrarrc~\u2933\u0338~nrarrw~\u219D\u0338~nrightarrow~\u219B~nrtri~\u22EB~nrtrie~\u22ED~nsc~\u2281~nsccue~\u22E1~nsce~\u2AB0\u0338~nscr~\u{1D4C3}~nshortmid~\u2224~nshortparallel~\u2226~nsim~\u2241~nsime~\u2244~nsimeq~\u2244~nsmid~\u2224~nspar~\u2226~nsqsube~\u22E2~nsqsupe~\u22E3~nsubE~\u2AC5\u0338~nsube~\u2288~nsubset~\u2282\u20D2~nsubseteq~\u2288~nsubseteqq~\u2AC5\u0338~nsucc~\u2281~nsucceq~\u2AB0\u0338~nsup~\u2285~nsupE~\u2AC6\u0338~nsupe~\u2289~nsupset~\u2283\u20D2~nsupseteq~\u2289~nsupseteqq~\u2AC6\u0338~ntgl~\u2279~ntlg~\u2278~ntriangleleft~\u22EA~ntrianglelefteq~\u22EC~ntriangleright~\u22EB~ntrianglerighteq~\u22ED~num~#~numero~\u2116~numsp~\u2007~nvDash~\u22AD~nvHarr~\u2904~nvap~\u224D\u20D2~nvdash~\u22AC~nvge~\u2265\u20D2~nvgt~>\u20D2~nvinfin~\u29DE~nvlArr~\u2902~nvle~\u2264\u20D2~nvlt~<\u20D2~nvltrie~\u22B4\u20D2~nvrArr~\u2903~nvrtrie~\u22B5\u20D2~nvsim~\u223C\u20D2~nwArr~\u21D6~nwarhk~\u2923~nwarr~\u2196~nwarrow~\u2196~nwnear~\u2927~oS~\u24C8~oast~\u229B~ocir~\u229A~ocy~\u043E~odash~\u229D~odblac~\u0151~odiv~\u2A38~odot~\u2299~odsold~\u29BC~ofcir~\u29BF~ofr~\u{1D52C}~ogon~\u02DB~ogt~\u29C1~ohbar~\u29B5~ohm~\u03A9~oint~\u222E~olarr~\u21BA~olcir~\u29BE~olcross~\u29BB~olt~\u29C0~omacr~\u014D~omid~\u29B6~ominus~\u2296~oopf~\u{1D560}~opar~\u29B7~operp~\u29B9~orarr~\u21BB~ord~\u2A5D~order~\u2134~orderof~\u2134~origof~\u22B6~oror~\u2A56~orslope~\u2A57~orv~\u2A5B~oscr~\u2134~osol~\u2298~otimesas~\u2A36~ovbar~\u233D~par~\u2225~parallel~\u2225~parsim~\u2AF3~parsl~\u2AFD~pcy~\u043F~percnt~%~period~.~pertenk~\u2031~pfr~\u{1D52D}~phiv~\u03D5~phmmat~\u2133~phone~\u260E~pitchfork~\u22D4~planck~\u210F~planckh~\u210E~plankv~\u210F~plus~+~plusacir~\u2A23~plusb~\u229E~pluscir~\u2A22~plusdo~\u2214~plusdu~\u2A25~pluse~\u2A72~plussim~\u2A26~plustwo~\u2A27~pm~\xB1~pointint~\u2A15~popf~\u{1D561}~pr~\u227A~prE~\u2AB3~prap~\u2AB7~prcue~\u227C~pre~\u2AAF~prec~\u227A~precapprox~\u2AB7~preccurlyeq~\u227C~preceq~\u2AAF~precnapprox~\u2AB9~precneqq~\u2AB5~precnsim~\u22E8~precsim~\u227E~primes~\u2119~prnE~\u2AB5~prnap~\u2AB9~prnsim~\u22E8~profalar~\u232E~profline~\u2312~profsurf~\u2313~propto~\u221D~prsim~\u227E~prurel~\u22B0~pscr~\u{1D4C5}~puncsp~\u2008~qfr~\u{1D52E}~qint~\u2A0C~qopf~\u{1D562}~qprime~\u2057~qscr~\u{1D4C6}~quaternions~\u210D~quatint~\u2A16~quest~?~questeq~\u225F~rAarr~\u21DB~rAtail~\u291C~rBarr~\u290F~rHar~\u2964~race~\u223D\u0331~racute~\u0155~raemptyv~\u29B3~rangd~\u2992~range~\u29A5~rangle~\u27E9~rarrap~\u2975~rarrb~\u21E5~rarrbfs~\u2920~rarrc~\u2933~rarrfs~\u291E~rarrhk~\u21AA~rarrlp~\u21AC~rarrpl~\u2945~rarrsim~\u2974~rarrtl~\u21A3~rarrw~\u219D~ratail~\u291A~ratio~\u2236~rationals~\u211A~rbarr~\u290D~rbbrk~\u2773~rbrace~}~rbrack~]~rbrke~\u298C~rbrksld~\u298E~rbrkslu~\u2990~rcaron~\u0159~rcedil~\u0157~rcub~}~rcy~\u0440~rdca~\u2937~rdldhar~\u2969~rdquor~\u201D~rdsh~\u21B3~realine~\u211B~realpart~\u211C~reals~\u211D~rect~\u25AD~rfisht~\u297D~rfr~\u{1D52F}~rhard~\u21C1~rharu~\u21C0~rharul~\u296C~rhov~\u03F1~rightarrow~\u2192~rightarrowtail~\u21A3~rightharpoondown~\u21C1~rightharpoonup~\u21C0~rightleftarrows~\u21C4~rightleftharpoons~\u21CC~rightrightarrows~\u21C9~rightsquigarrow~\u219D~rightthreetimes~\u22CC~ring~\u02DA~risingdotseq~\u2253~rlarr~\u21C4~rlhar~\u21CC~rmoust~\u23B1~rmoustache~\u23B1~rnmid~\u2AEE~roang~\u27ED~roarr~\u21FE~robrk~\u27E7~ropar~\u2986~ropf~\u{1D563}~roplus~\u2A2E~rotimes~\u2A35~rpar~)~rpargt~\u2994~rppolint~\u2A12~rrarr~\u21C9~rscr~\u{1D4C7}~rsh~\u21B1~rsqb~]~rsquor~\u2019~rthree~\u22CC~rtimes~\u22CA~rtri~\u25B9~rtrie~\u22B5~rtrif~\u25B8~rtriltri~\u29CE~ruluhar~\u2968~rx~\u211E~sacute~\u015B~sc~\u227B~scE~\u2AB4~scap~\u2AB8~sccue~\u227D~sce~\u2AB0~scedil~\u015F~scirc~\u015D~scnE~\u2AB6~scnap~\u2ABA~scnsim~\u22E9~scpolint~\u2A13~scsim~\u227F~scy~\u0441~sdotb~\u22A1~sdote~\u2A66~seArr~\u21D8~searhk~\u2925~searr~\u2198~searrow~\u2198~semi~;~seswar~\u2929~setminus~\u2216~setmn~\u2216~sext~\u2736~sfr~\u{1D530}~sfrown~\u2322~sharp~\u266F~shchcy~\u0449~shcy~\u0448~shortmid~\u2223~shortparallel~\u2225~sigmav~\u03C2~simdot~\u2A6A~sime~\u2243~simeq~\u2243~simg~\u2A9E~simgE~\u2AA0~siml~\u2A9D~simlE~\u2A9F~simne~\u2246~simplus~\u2A24~simrarr~\u2972~slarr~\u2190~smallsetminus~\u2216~smashp~\u2A33~smeparsl~\u29E4~smid~\u2223~smile~\u2323~smt~\u2AAA~smte~\u2AAC~smtes~\u2AAC\uFE00~softcy~\u044C~sol~/~solb~\u29C4~solbar~\u233F~sopf~\u{1D564}~spadesuit~\u2660~spar~\u2225~sqcap~\u2293~sqcaps~\u2293\uFE00~sqcup~\u2294~sqcups~\u2294\uFE00~sqsub~\u228F~sqsube~\u2291~sqsubset~\u228F~sqsubseteq~\u2291~sqsup~\u2290~sqsupe~\u2292~sqsupset~\u2290~sqsupseteq~\u2292~squ~\u25A1~square~\u25A1~squarf~\u25AA~squf~\u25AA~srarr~\u2192~sscr~\u{1D4C8}~ssetmn~\u2216~ssmile~\u2323~sstarf~\u22C6~star~\u2606~starf~\u2605~straightepsilon~\u03F5~straightphi~\u03D5~strns~\xAF~subE~\u2AC5~subdot~\u2ABD~subedot~\u2AC3~submult~\u2AC1~subnE~\u2ACB~subne~\u228A~subplus~\u2ABF~subrarr~\u2979~subset~\u2282~subseteq~\u2286~subseteqq~\u2AC5~subsetneq~\u228A~subsetneqq~\u2ACB~subsim~\u2AC7~subsub~\u2AD5~subsup~\u2AD3~succ~\u227B~succapprox~\u2AB8~succcurlyeq~\u227D~succeq~\u2AB0~succnapprox~\u2ABA~succneqq~\u2AB6~succnsim~\u22E9~succsim~\u227F~sung~\u266A~supE~\u2AC6~supdot~\u2ABE~supdsub~\u2AD8~supedot~\u2AC4~suphsol~\u27C9~suphsub~\u2AD7~suplarr~\u297B~supmult~\u2AC2~supnE~\u2ACC~supne~\u228B~supplus~\u2AC0~supset~\u2283~supseteq~\u2287~supseteqq~\u2AC6~supsetneq~\u228B~supsetneqq~\u2ACC~supsim~\u2AC8~supsub~\u2AD4~supsup~\u2AD6~swArr~\u21D9~swarhk~\u2926~swarr~\u2199~swarrow~\u2199~swnwar~\u292A~target~\u2316~tbrk~\u23B4~tcaron~\u0165~tcedil~\u0163~tcy~\u0442~tdot~\u20DB~telrec~\u2315~tfr~\u{1D531}~therefore~\u2234~thetav~\u03D1~thickapprox~\u2248~thicksim~\u223C~thkap~\u2248~thksim~\u223C~timesb~\u22A0~timesbar~\u2A31~timesd~\u2A30~tint~\u222D~toea~\u2928~top~\u22A4~topbot~\u2336~topcir~\u2AF1~topf~\u{1D565}~topfork~\u2ADA~tosa~\u2929~tprime~\u2034~triangle~\u25B5~triangledown~\u25BF~triangleleft~\u25C3~trianglelefteq~\u22B4~triangleq~\u225C~triangleright~\u25B9~trianglerighteq~\u22B5~tridot~\u25EC~trie~\u225C~triminus~\u2A3A~triplus~\u2A39~trisb~\u29CD~tritime~\u2A3B~trpezium~\u23E2~tscr~\u{1D4C9}~tscy~\u0446~tshcy~\u045B~tstrok~\u0167~twixt~\u226C~twoheadleftarrow~\u219E~twoheadrightarrow~\u21A0~uHar~\u2963~ubrcy~\u045E~ubreve~\u016D~ucy~\u0443~udarr~\u21C5~udblac~\u0171~udhar~\u296E~ufisht~\u297E~ufr~\u{1D532}~uharl~\u21BF~uharr~\u21BE~uhblk~\u2580~ulcorn~\u231C~ulcorner~\u231C~ulcrop~\u230F~ultri~\u25F8~umacr~\u016B~uogon~\u0173~uopf~\u{1D566}~uparrow~\u2191~updownarrow~\u2195~upharpoonleft~\u21BF~upharpoonright~\u21BE~uplus~\u228E~upsi~\u03C5~upuparrows~\u21C8~urcorn~\u231D~urcorner~\u231D~urcrop~\u230E~uring~\u016F~urtri~\u25F9~uscr~\u{1D4CA}~utdot~\u22F0~utilde~\u0169~utri~\u25B5~utrif~\u25B4~uuarr~\u21C8~uwangle~\u29A7~vArr~\u21D5~vBar~\u2AE8~vBarv~\u2AE9~vDash~\u22A8~vangrt~\u299C~varepsilon~\u03F5~varkappa~\u03F0~varnothing~\u2205~varphi~\u03D5~varpi~\u03D6~varpropto~\u221D~varr~\u2195~varrho~\u03F1~varsigma~\u03C2~varsubsetneq~\u228A\uFE00~varsubsetneqq~\u2ACB\uFE00~varsupsetneq~\u228B\uFE00~varsupsetneqq~\u2ACC\uFE00~vartheta~\u03D1~vartriangleleft~\u22B2~vartriangleright~\u22B3~vcy~\u0432~vdash~\u22A2~vee~\u2228~veebar~\u22BB~veeeq~\u225A~vellip~\u22EE~verbar~|~vert~|~vfr~\u{1D533}~vltri~\u22B2~vnsub~\u2282\u20D2~vnsup~\u2283\u20D2~vopf~\u{1D567}~vprop~\u221D~vrtri~\u22B3~vscr~\u{1D4CB}~vsubnE~\u2ACB\uFE00~vsubne~\u228A\uFE00~vsupnE~\u2ACC\uFE00~vsupne~\u228B\uFE00~vzigzag~\u299A~wcirc~\u0175~wedbar~\u2A5F~wedge~\u2227~wedgeq~\u2259~wfr~\u{1D534}~wopf~\u{1D568}~wp~\u2118~wr~\u2240~wreath~\u2240~wscr~\u{1D4CC}~xcap~\u22C2~xcirc~\u25EF~xcup~\u22C3~xdtri~\u25BD~xfr~\u{1D535}~xhArr~\u27FA~xharr~\u27F7~xlArr~\u27F8~xlarr~\u27F5~xmap~\u27FC~xnis~\u22FB~xodot~\u2A00~xopf~\u{1D569}~xoplus~\u2A01~xotime~\u2A02~xrArr~\u27F9~xrarr~\u27F6~xscr~\u{1D4CD}~xsqcup~\u2A06~xuplus~\u2A04~xutri~\u25B3~xvee~\u22C1~xwedge~\u22C0~yacy~\u044F~ycirc~\u0177~ycy~\u044B~yfr~\u{1D536}~yicy~\u0457~yopf~\u{1D56A}~yscr~\u{1D4CE}~yucy~\u044E~zacute~\u017A~zcaron~\u017E~zcy~\u0437~zdot~\u017C~zeetrf~\u2128~zfr~\u{1D537}~zhcy~\u0436~zigrarr~\u21DD~zopf~\u{1D56B}~zscr~\u{1D4CF}~~AMP~&~COPY~\xA9~GT~>~LT~<~QUOT~"~REG~\xAE', ut.html4);
  var Rs = String.fromCodePoint || function(e) {
    return String.fromCharCode(Math.floor((e - 65536) / 1024) + 55296, (e - 65536) % 1024 + 56320);
  };
  var ni = String.prototype.codePointAt ? function(e, t) {
    return e.codePointAt(t);
  } : function(e, t) {
    return (e.charCodeAt(t) - 55296) * 1024 + e.charCodeAt(t + 1) - 56320 + 65536;
  };
  var Dt = function() {
    return Dt = Object.assign || function(e) {
      for (var t, r = 1, n = arguments.length; r < n; r++) {
        t = arguments[r];
        for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
      }
      return e;
    }, Dt.apply(this, arguments);
  };
  var Cs = Dt(Dt({}, ut), { all: ut.html5 });
  var qs = { specialChars: /[<>'"&]/g, nonAscii: /[<>'"&\u0080-\uD7FF\uE000-\uFFFF\uDC00-\uDFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]?/g, nonAsciiPrintable: /[<>'"&\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF\uDC00-\uDFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]?/g, nonAsciiPrintableOnly: /[\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF\uDC00-\uDFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]?/g, extensive: /[\x01-\x0c\x0e-\x1f\x21-\x2c\x2e-\x2f\x3a-\x40\x5b-\x60\x7b-\x7d\x7f-\uD7FF\uE000-\uFFFF\uDC00-\uDFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]?/g };
  var Ls = { mode: "specialChars", level: "all", numeric: "decimal" };
  function ii(e, t) {
    var r = t === void 0 ? Ls : t, n = r.mode, o = n === void 0 ? "specialChars" : n, i = r.numeric, s = i === void 0 ? "decimal" : i, a = r.level, f = a === void 0 ? "all" : a;
    if (!e) return "";
    var l = qs[o], u = Cs[f].characters, p = s === "hexadecimal";
    return String.prototype.replace.call(e, l, function(c) {
      var _ = u[c];
      if (!_) {
        var h = c.length > 1 ? ni(c, 0) : c.charCodeAt(0);
        _ = (p ? "&#x" + h.toString(16) : "&#" + h) + ";";
      }
      return _;
    });
  }
  var Cn = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);/g;
  var qn = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+)[;=]?/g;
  var oi = { xml: { strict: Cn, attribute: qn, body: qr.xml }, html4: { strict: Cn, attribute: qn, body: qr.html4 }, html5: { strict: Cn, attribute: qn, body: qr.html5 } };
  var Nx = Dt(Dt({}, oi), { all: oi.html5 });
  var Is = String.fromCharCode;
  var Rx = Is(65533);
  var Os = Ee('<li class="tag-option-loading svelte-nenf6b">Loading\u2026</li>');
  var Fs = Ee('<li class="tag-option-error svelte-nenf6b"> </li>');
  var Ps = Ee('<li class="tag-option-empty svelte-nenf6b">No results</li>');
  var Ms = (e, t, r) => {
    e.preventDefault(), t(d(r));
  };
  var Us = (e, t, r) => {
    e.preventDefault(), t(d(r));
  };
  var Vs = Ee('<li role="option" tabindex="-1"><!></li>');
  var Bs = Ee('<ul class="tag-dropdown svelte-nenf6b" role="listbox" aria-label="tag suggestions" tabindex="0"><!></ul>');
  var Hs = { hash: "svelte-nenf6b", code: `.tag-dropdown.svelte-nenf6b {position:absolute;left:0;top:0;min-width:var(--tagarea-dropdown-min-width, 180px);background-color:var(--tagarea-dropdown-background-color, #fff);border:1px solid var(--tagarea-dropdown-border-color, #ccc);border-radius:4px;z-index:1000;box-shadow:var(\r
			--tagarea-dropdown-box-shadow,\r
			0 2px 8px rgba(0, 0, 0, 0.08)\r
		);padding:var(--tagarea-dropdown-padding, 0);margin:0;list-style:none;max-height:var(--tagarea-dropdown-max-height, 250px);overflow-y:auto;font-family:var(--tagarea-dropdown-font-family, sans-serif);font-size:var(--tagarea-dropdown-font-size, 1rem);color:var(--tagarea-dropdown-color, #000);}.tag-dropdown.svelte-nenf6b li:where(.svelte-nenf6b) {padding:var(--tagarea-dropdown-option-padding, 8px);cursor:pointer;transition:background-color 0.3s;}.tag-dropdown.svelte-nenf6b .tag-option:where(.svelte-nenf6b) {background-color:var(--tagarea-dropdown-option-background-color, #fff);color:var(--tagarea-dropdown-option-color, inherit);}.tag-dropdown.svelte-nenf6b .tag-option:where(.svelte-nenf6b):hover {background-color:var(\r
			--tagarea-dropdown-option-hover-background-color,\r
			#f0f4ff\r
		);color:var(--tagarea-dropdown-option-hover-color, inherit);}.tag-dropdown.svelte-nenf6b .tag-option.selected:where(.svelte-nenf6b) {background-color:var(\r
			--tagarea-dropdown-option-selected-background-color,\r
			#e0e8ff\r
		);color:var(--tagarea-dropdown-option-selected-color, inherit);}.tag-dropdown.svelte-nenf6b .tag-option-loading:where(.svelte-nenf6b) {color:var(--tagarea-dropdown-option-loading-color, #888);}.tag-dropdown.svelte-nenf6b .tag-option-error:where(.svelte-nenf6b) {color:var(--tagarea-dropdown-option-error-color, #c00);}.tag-dropdown.svelte-nenf6b .tag-option-empty:where(.svelte-nenf6b) {color:var(--tagarea-dropdown-option-empty-color, #888);}` };
  function Ln(e, t) {
    Oe(t, true), bn(e, Hs);
    let r = Xo(), n = L(te([])), o = L(false), i = L(0), s = L(null), a = L(null);
    Ye(() => {
      t.currentWord ? (async () => {
        w(o, true), w(s, null);
        try {
          let _ = await t.fetchData(t.currentWord.name);
          w(n, Array.isArray(_) ? _ : [], true);
        } catch (_) {
          console.error(_), w(n, [], true), w(s, "Failed to load");
        }
        w(o, false), w(i, 0);
      })() : (w(n, [], true), w(o, false), w(i, 0));
    }), Ye(() => {
      if (d(a)) {
        let _ = d(a).querySelector(`#${r}-tag-option-${d(i)}`);
        _ && _.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
    });
    function f(_) {
      t.onSelect?.(_);
    }
    function l(_) {
      d(n).length && (_.key === "ArrowDown" ? (_.preventDefault(), w(i, (d(i) + 1) % d(n).length)) : _.key === "ArrowUp" ? (_.preventDefault(), w(i, (d(i) - 1 + d(n).length) % d(n).length)) : _.key === "Enter" && (_.preventDefault(), d(n)[d(i)] && f(d(n)[d(i)])));
    }
    or(() => {
      t.input?.addEventListener("keydown", l);
    }), Nr(() => {
      t.input?.removeEventListener("keydown", l);
    });
    var u = Et(), p = ze(u);
    {
      var c = (_) => {
        var h = Bs();
        let m;
        var g = st(h);
        {
          var k = (b) => {
            var y = Os();
            G(b, y);
          }, A = (b, y) => {
            {
              var S = (N) => {
                var C = Fs(), J = st(C, true);
                ot(C), Ge(() => dn(J, d(s))), G(N, C);
              }, O = (N, C) => {
                {
                  var J = (ve) => {
                    var je = Ps();
                    G(ve, je);
                  }, Nt = (ve) => {
                    var je = Et(), Lr = ze(je);
                    gn(Lr, 17, () => d(n), hn, (li, Ir, Or) => {
                      var We = Vs();
                      let On;
                      We.__mousedown = [Ms, f, Ir], We.__touchstart = [Us, f, Ir];
                      var ci = st(We);
                      ft(ci, () => ii(d(Ir)).replaceAll(t.currentWord.name, `<strong>${t.currentWord.name}</strong>`)), ot(We), Ge((fi) => {
                        On = Ar(We, 1, "tag-option svelte-nenf6b", null, On, fi), rr(We, "id", `${r}-tag-option-${Or}`), rr(We, "aria-selected", d(i) === Or);
                      }, [() => ({ selected: d(i) === Or })]), G(li, We);
                    }), G(ve, je);
                  };
                  qe(N, (ve) => {
                    d(n).length === 0 ? ve(J) : ve(Nt, false);
                  }, C);
                }
              };
              qe(b, (N) => {
                d(s) ? N(S) : N(O, false);
              }, y);
            }
          };
          qe(g, (b) => {
            d(o) ? b(k) : b(A, false);
          });
        }
        ot(h), nr(h, (b) => w(a, b), () => d(a)), Ge(() => {
          rr(h, "aria-activedescendant", d(n)[d(i)] ? `${r}-tag-option-${d(i)}` : void 0), m = At(h, "", m, { left: `${t.markerRect.left + window.scrollX}px`, top: `${t.markerRect.bottom + window.scrollY}px` });
        }), $n(3, h, () => ri), G(_, h);
      };
      qe(p, (_) => {
        t.markerRect && _(c);
      });
    }
    G(e, u), Fe();
  }
  $r(["mousedown", "touchstart"]);
  var si = (e) => {
    let t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = e.pageSize;
    return async (o) => {
      if (t.has(o)) return t.get(o);
      for (let s = 1; s <= o.length; s++) {
        let a = o.slice(0, s);
        if (r.has(a)) return (t.get(a) || []).filter((l) => l.startsWith(o));
      }
      let i = await e.fetch(o);
      return t.set(o, i), n && i.length < n && r.add(o), i;
    };
  };
  var zs = Ee("<!> <!>", 1);
  function In(e, t) {
    Oe(t, true);
    let r = St(t, "input", 7), n = L(null), o = Re(() => si(t.data)), i = L(-1), s = L(te(r().value)), a = L(te([])), f = Dn(() => {
      w(i, r() === document.activeElement && r().selectionStart || -1, true);
    }, 150), l = Re(() => {
      if (d(i) === -1) return null;
      let b = d(a).find((y) => y.end >= d(i));
      return !b || b.start > d(i) ? null : b;
    }), u = Dn(() => {
      let b = Jo(r().value);
      (d(a).length !== b.length || JSON.stringify(d(a)) !== JSON.stringify(b)) && w(a, b, true);
    }, 500), p = () => {
      d(i) !== r().selectionStart && f(), (d(s).length !== r().value.length || d(s) !== r().value) && (w(s, r().value, true), u());
    }, c = () => {
      w(i, -1);
    }, _ = L(null);
    function h(b) {
      if (!d(l)) return;
      let y = r().value.slice(0, d(l).start), S = r().value.slice(d(l).end), O = b.includes(" ") ? `@[${b}]` : `@${b}`;
      r().value = y + O + (Rr.has(S.charAt(0)) ? S : " " + S), w(_, b, true), r().selectionStart = y.length + O.length + 1, p();
    }
    or(() => {
      r().addEventListener("input", p), r().addEventListener("focus", p), r().addEventListener("blur", c), r().addEventListener("keyup", p), r().addEventListener("click", p);
    }), Nr(() => {
      r().removeEventListener("input", p), r().removeEventListener("focus", p), r().removeEventListener("blur", c), r().removeEventListener("keyup", p), r().removeEventListener("click", p);
    });
    var m = zs(), g = ze(m);
    Nn(g, { get source() {
      return r();
    }, get value() {
      return d(s);
    }, get currentWord() {
      return d(l);
    }, get knownWords() {
      return d(a);
    }, get formatTag() {
      return t.formatTag;
    }, get markerRect() {
      return d(n);
    }, set markerRect(b) {
      w(n, b, true);
    } });
    var k = gt(g, 2);
    {
      var A = (b) => {
        Ln(b, { get markerRect() {
          return d(n);
        }, get currentWord() {
          return d(l);
        }, get fetchData() {
          return d(o);
        }, get input() {
          return r();
        }, onSelect: h });
      };
      qe(k, (b) => {
        d(l) && b(A);
      });
    }
    G(e, m), Fe();
  }
  var ai = class {
    component;
    constructor(t) {
      this.component = Tt(In, { target: document.body, props: t });
    }
    destroy() {
      er(this.component);
    }
  };

  // src/index.ts
  document.querySelectorAll('textarea[name="Post"]').forEach(
    (input) => new ai({
      input,
      data: {
        fetch: async (search) => {
          const response = await fetch(
            `?act=Members&max_results=100&sort_order=desc&sort_key=posts&filter=ALL&name_box=begins&name=${encodeURIComponent(
              search
            )}`
          );
          const html = await response.text();
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, "text/html");
          const anchors = doc.querySelectorAll("a");
          const names = /* @__PURE__ */ new Set();
          for (let i = 0, l = anchors.length; i < l; i++)
            try {
              const anchor = anchors[i];
              const url = new URL(anchor?.href);
              if (!anchor || !anchor.textContent || url.protocol === "javascript:" || !url.searchParams.has("showuser"))
                continue;
              names.add(anchor.textContent);
            } catch {
            }
          return Array.from(names).filter(
            (name) => name.toLowerCase().startsWith(search.toLowerCase())
          );
        },
        pageSize: 100
      },
      formatTag: (tag) => {
        return `<span style="color:blue;text-decoration:underline;">${tag}</span>`;
      }
    })
  );
})();
