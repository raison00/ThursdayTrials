﻿// Underscore 1.5.2 
(function() {
    var n = this,
        t = n._,
        r = {},
        e = Array.prototype,
        u = Object.prototype,
        i = Function.prototype,
        a = e.push,
        o = e.slice,
        c = e.concat,
        l = u.toString,
        f = u.hasOwnProperty,
        s = e.forEach,
        p = e.map,
        h = e.reduce,
        v = e.reduceRight,
        g = e.filter,
        d = e.every,
        m = e.some,
        y = e.indexOf,
        b = e.lastIndexOf,
        x = Array.isArray,
        w = Object.keys,
        _ = i.bind,
        j = function(n) {
            return n instanceof j ? n : this instanceof j ? (this._wrapped = n, void 0) : new j(n)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = j), exports._ = j) : n._ = j, j.VERSION = "1.5.2";
    var A = j.each = j.forEach = function(n, t, e) {
        if (null != n)
            if (s && n.forEach === s) n.forEach(t, e);
            else if (n.length === +n.length) {
            for (var u = 0, i = n.length; i > u; u++)
                if (t.call(e, n[u], u, n) === r) return
        } else
            for (var a = j.keys(n), u = 0, i = a.length; i > u; u++)
                if (t.call(e, n[a[u]], a[u], n) === r) return
    };
    j.map = j.collect = function(n, t, r) {
        var e = [];
        return null == n ? e : p && n.map === p ? n.map(t, r) : (A(n, function(n, u, i) {
            e.push(t.call(r, n, u, i))
        }), e)
    };
    var E = "Reduce of empty array with no initial value";
    j.reduce = j.foldl = j.inject = function(n, t, r, e) {
        var u = arguments.length > 2;
        if (null == n && (n = []), h && n.reduce === h) return e && (t = j.bind(t, e)), u ? n.reduce(t, r) : n.reduce(t);
        if (A(n, function(n, i, a) {
                u ? r = t.call(e, r, n, i, a) : (r = n, u = !0)
            }), !u) throw new TypeError(E);
        return r
    }, j.reduceRight = j.foldr = function(n, t, r, e) {
        var u = arguments.length > 2;
        if (null == n && (n = []), v && n.reduceRight === v) return e && (t = j.bind(t, e)), u ? n.reduceRight(t, r) : n.reduceRight(t);
        var i = n.length;
        if (i !== +i) {
            var a = j.keys(n);
            i = a.length
        }
        if (A(n, function(o, c, l) {
                c = a ? a[--i] : --i, u ? r = t.call(e, r, n[c], c, l) : (r = n[c], u = !0)
            }), !u) throw new TypeError(E);
        return r
    }, j.find = j.detect = function(n, t, r) {
        var e;
        return O(n, function(n, u, i) {
            return t.call(r, n, u, i) ? (e = n, !0) : void 0
        }), e
    }, j.filter = j.select = function(n, t, r) {
        var e = [];
        return null == n ? e : g && n.filter === g ? n.filter(t, r) : (A(n, function(n, u, i) {
            t.call(r, n, u, i) && e.push(n)
        }), e)
    }, j.reject = function(n, t, r) {
        return j.filter(n, function(n, e, u) {
            return !t.call(r, n, e, u)
        }, r)
    }, j.every = j.all = function(n, t, e) {
        t || (t = j.identity);
        var u = !0;
        return null == n ? u : d && n.every === d ? n.every(t, e) : (A(n, function(n, i, a) {
            return (u = u && t.call(e, n, i, a)) ? void 0 : r
        }), !!u)
    };
    var O = j.some = j.any = function(n, t, e) {
        t || (t = j.identity);
        var u = !1;
        return null == n ? u : m && n.some === m ? n.some(t, e) : (A(n, function(n, i, a) {
            return u || (u = t.call(e, n, i, a)) ? r : void 0
        }), !!u)
    };
    j.contains = j.include = function(n, t) {
        return null == n ? !1 : y && n.indexOf === y ? n.indexOf(t) != -1 : O(n, function(n) {
            return n === t
        })
    }, j.invoke = function(n, t) {
        var r = o.call(arguments, 2),
            e = j.isFunction(t);
        return j.map(n, function(n) {
            return (e ? t : n[t]).apply(n, r)
        })
    }, j.pluck = function(n, t) {
        return j.map(n, function(n) {
            return n[t]
        })
    }, j.where = function(n, t, r) {
        return j.isEmpty(t) ? r ? void 0 : [] : j[r ? "find" : "filter"](n, function(n) {
            for (var r in t)
                if (t[r] !== n[r]) return !1;
            return !0
        })
    }, j.findWhere = function(n, t) {
        return j.where(n, t, !0)
    }, j.max = function(n, t, r) {
        if (!t && j.isArray(n) && n[0] === +n[0] && n.length < 65535) return Math.max.apply(Math, n);
        if (!t && j.isEmpty(n)) return -1 / 0;
        var e = {
            computed: -1 / 0,
            value: -1 / 0
        };
        return A(n, function(n, u, i) {
            var a = t ? t.call(r, n, u, i) : n;
            a > e.computed && (e = {
                value: n,
                computed: a
            })
        }), e.value
    }, j.min = function(n, t, r) {
        if (!t && j.isArray(n) && n[0] === +n[0] && n.length < 65535) return Math.min.apply(Math, n);
        if (!t && j.isEmpty(n)) return 1 / 0;
        var e = {
            computed: 1 / 0,
            value: 1 / 0
        };
        return A(n, function(n, u, i) {
            var a = t ? t.call(r, n, u, i) : n;
            a < e.computed && (e = {
                value: n,
                computed: a
            })
        }), e.value
    }, j.shuffle = function(n) {
        var t, r = 0,
            e = [];
        return A(n, function(n) {
            t = j.random(r++), e[r - 1] = e[t], e[t] = n
        }), e
    }, j.sample = function(n, t, r) {
        return arguments.length < 2 || r ? n[j.random(n.length - 1)] : j.shuffle(n).slice(0, Math.max(0, t))
    };
    var k = function(n) {
        return j.isFunction(n) ? n : function(t) {
            return t[n]
        }
    };
    j.sortBy = function(n, t, r) {
        var e = k(t);
        return j.pluck(j.map(n, function(n, t, u) {
            return {
                value: n,
                index: t,
                criteria: e.call(r, n, t, u)
            }
        }).sort(function(n, t) {
            var r = n.criteria,
                e = t.criteria;
            if (r !== e) {
                if (r > e || r === void 0) return 1;
                if (e > r || e === void 0) return -1
            }
            return n.index - t.index
        }), "value")
    };
    var F = function(n) {
        return function(t, r, e) {
            var u = {},
                i = null == r ? j.identity : k(r);
            return A(t, function(r, a) {
                var o = i.call(e, r, a, t);
                n(u, o, r)
            }), u
        }
    };
    j.groupBy = F(function(n, t, r) {
        (j.has(n, t) ? n[t] : n[t] = []).push(r)
    }), j.indexBy = F(function(n, t, r) {
        n[t] = r
    }), j.countBy = F(function(n, t) {
        j.has(n, t) ? n[t] ++ : n[t] = 1
    }), j.sortedIndex = function(n, t, r, e) {
        r = null == r ? j.identity : k(r);
        for (var u = r.call(e, t), i = 0, a = n.length; a > i;) {
            var o = i + a >>> 1;
            r.call(e, n[o]) < u ? i = o + 1 : a = o
        }
        return i
    }, j.toArray = function(n) {
        return n ? j.isArray(n) ? o.call(n) : n.length === +n.length ? j.map(n, j.identity) : j.values(n) : []
    }, j.size = function(n) {
        return null == n ? 0 : n.length === +n.length ? n.length : j.keys(n).length
    }, j.first = j.head = j.take = function(n, t, r) {
        return null == n ? void 0 : null == t || r ? n[0] : o.call(n, 0, t)
    }, j.initial = function(n, t, r) {
        return o.call(n, 0, n.length - (null == t || r ? 1 : t))
    }, j.last = function(n, t, r) {
        return null == n ? void 0 : null == t || r ? n[n.length - 1] : o.call(n, Math.max(n.length - t, 0))
    }, j.rest = j.tail = j.drop = function(n, t, r) {
        return o.call(n, null == t || r ? 1 : t)
    }, j.compact = function(n) {
        return j.filter(n, j.identity)
    };
    var M = function(n, t, r) {
        return t && j.every(n, j.isArray) ? c.apply(r, n) : (A(n, function(n) {
            j.isArray(n) || j.isArguments(n) ? t ? a.apply(r, n) : M(n, t, r) : r.push(n)
        }), r)
    };
    j.flatten = function(n, t) {
        return M(n, t, [])
    }, j.without = function(n) {
        return j.difference(n, o.call(arguments, 1))
    }, j.uniq = j.unique = function(n, t, r, e) {
        j.isFunction(t) && (e = r, r = t, t = !1);
        var u = r ? j.map(n, r, e) : n,
            i = [],
            a = [];
        return A(u, function(r, e) {
            (t ? e && a[a.length - 1] === r : j.contains(a, r)) || (a.push(r), i.push(n[e]))
        }), i
    }, j.union = function() {
        return j.uniq(j.flatten(arguments, !0))
    }, j.intersection = function(n) {
        var t = o.call(arguments, 1);
        return j.filter(j.uniq(n), function(n) {
            return j.every(t, function(t) {
                return j.indexOf(t, n) >= 0
            })
        })
    }, j.difference = function(n) {
        var t = c.apply(e, o.call(arguments, 1));
        return j.filter(n, function(n) {
            return !j.contains(t, n)
        })
    }, j.zip = function() {
        for (var n = j.max(j.pluck(arguments, "length").concat(0)), t = new Array(n), r = 0; n > r; r++) t[r] = j.pluck(arguments, "" + r);
        return t
    }, j.object = function(n, t) {
        if (null == n) return {};
        for (var r = {}, e = 0, u = n.length; u > e; e++) t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
        return r
    }, j.indexOf = function(n, t, r) {
        if (null == n) return -1;
        var e = 0,
            u = n.length;
        if (r) {
            if ("number" != typeof r) return e = j.sortedIndex(n, t), n[e] === t ? e : -1;
            e = 0 > r ? Math.max(0, u + r) : r
        }
        if (y && n.indexOf === y) return n.indexOf(t, r);
        for (; u > e; e++)
            if (n[e] === t) return e;
        return -1
    }, j.lastIndexOf = function(n, t, r) {
        if (null == n) return -1;
        var e = null != r;
        if (b && n.lastIndexOf === b) return e ? n.lastIndexOf(t, r) : n.lastIndexOf(t);
        for (var u = e ? r : n.length; u--;)
            if (n[u] === t) return u;
        return -1
    }, j.range = function(n, t, r) {
        arguments.length <= 1 && (t = n || 0, n = 0), r = arguments[2] || 1;
        for (var e = Math.max(Math.ceil((t - n) / r), 0), u = 0, i = new Array(e); e > u;) i[u++] = n, n += r;
        return i
    };
    var R = function() {};
    j.bind = function(n, t) {
        var r, e;
        if (_ && n.bind === _) return _.apply(n, o.call(arguments, 1));
        if (!j.isFunction(n)) throw new TypeError;
        return r = o.call(arguments, 2), e = function() {
            if (!(this instanceof e)) return n.apply(t, r.concat(o.call(arguments)));
            R.prototype = n.prototype;
            var u = new R;
            R.prototype = null;
            var i = n.apply(u, r.concat(o.call(arguments)));
            return Object(i) === i ? i : u
        }
    }, j.partial = function(n) {
        var t = o.call(arguments, 1);
        return function() {
            return n.apply(this, t.concat(o.call(arguments)))
        }
    }, j.bindAll = function(n) {
        var t = o.call(arguments, 1);
        if (0 === t.length) throw new Error("bindAll must be passed function names");
        return A(t, function(t) {
            n[t] = j.bind(n[t], n)
        }), n
    }, j.memoize = function(n, t) {
        var r = {};
        return t || (t = j.identity),
            function() {
                var e = t.apply(this, arguments);
                return j.has(r, e) ? r[e] : r[e] = n.apply(this, arguments)
            }
    }, j.delay = function(n, t) {
        var r = o.call(arguments, 2);
        return setTimeout(function() {
            return n.apply(null, r)
        }, t)
    }, j.defer = function(n) {
        return j.delay.apply(j, [n, 1].concat(o.call(arguments, 1)))
    }, j.throttle = function(n, t, r) {
        var e, u, i, a = null,
            o = 0;
        r || (r = {});
        var c = function() {
            o = r.leading === !1 ? 0 : new Date, a = null, i = n.apply(e, u)
        };
        return function() {
            var l = new Date;
            o || r.leading !== !1 || (o = l);
            var f = t - (l - o);
            return e = this, u = arguments, 0 >= f ? (clearTimeout(a), a = null, o = l, i = n.apply(e, u)) : a || r.trailing === !1 || (a = setTimeout(c, f)), i
        }
    }, j.debounce = function(n, t, r) {
        var e, u, i, a, o;
        return function() {
            i = this, u = arguments, a = new Date;
            var c = function() {
                    var l = new Date - a;
                    t > l ? e = setTimeout(c, t - l) : (e = null, r || (o = n.apply(i, u)))
                },
                l = r && !e;
            return e || (e = setTimeout(c, t)), l && (o = n.apply(i, u)), o
        }
    }, j.once = function(n) {
        var t, r = !1;
        return function() {
            return r ? t : (r = !0, t = n.apply(this, arguments), n = null, t)
        }
    }, j.wrap = function(n, t) {
        return function() {
            var r = [n];
            return a.apply(r, arguments), t.apply(this, r)
        }
    }, j.compose = function() {
        var n = arguments;
        return function() {
            for (var t = arguments, r = n.length - 1; r >= 0; r--) t = [n[r].apply(this, t)];
            return t[0]
        }
    }, j.after = function(n, t) {
        return function() {
            return --n < 1 ? t.apply(this, arguments) : void 0
        }
    }, j.keys = w || function(n) {
        if (n !== Object(n)) throw new TypeError("Invalid object");
        var t = [];
        for (var r in n) j.has(n, r) && t.push(r);
        return t
    }, j.values = function(n) {
        for (var t = j.keys(n), r = t.length, e = new Array(r), u = 0; r > u; u++) e[u] = n[t[u]];
        return e
    }, j.pairs = function(n) {
        for (var t = j.keys(n), r = t.length, e = new Array(r), u = 0; r > u; u++) e[u] = [t[u], n[t[u]]];
        return e
    }, j.invert = function(n) {
        for (var t = {}, r = j.keys(n), e = 0, u = r.length; u > e; e++) t[n[r[e]]] = r[e];
        return t
    }, j.functions = j.methods = function(n) {
        var t = [];
        for (var r in n) j.isFunction(n[r]) && t.push(r);
        return t.sort()
    }, j.extend = function(n) {
        return A(o.call(arguments, 1), function(t) {
            if (t)
                for (var r in t) n[r] = t[r]
        }), n
    }, j.pick = function(n) {
        var t = {},
            r = c.apply(e, o.call(arguments, 1));
        return A(r, function(r) {
            r in n && (t[r] = n[r])
        }), t
    }, j.omit = function(n) {
        var t = {},
            r = c.apply(e, o.call(arguments, 1));
        for (var u in n) j.contains(r, u) || (t[u] = n[u]);
        return t
    }, j.defaults = function(n) {
        return A(o.call(arguments, 1), function(t) {
            if (t)
                for (var r in t) n[r] === void 0 && (n[r] = t[r])
        }), n
    }, j.clone = function(n) {
        return j.isObject(n) ? j.isArray(n) ? n.slice() : j.extend({}, n) : n
    }, j.tap = function(n, t) {
        return t(n), n
    };
    var S = function(n, t, r, e) {
        if (n === t) return 0 !== n || 1 / n == 1 / t;
        if (null == n || null == t) return n === t;
        n instanceof j && (n = n._wrapped), t instanceof j && (t = t._wrapped);
        var u = l.call(n);
        if (u != l.call(t)) return !1;
        switch (u) {
            case "[object String]":
                return n == String(t);
            case "[object Number]":
                return n != +n ? t != +t : 0 == n ? 1 / n == 1 / t : n == +t;
            case "[object Date]":
            case "[object Boolean]":
                return +n == +t;
            case "[object RegExp]":
                return n.source == t.source && n.global == t.global && n.multiline == t.multiline && n.ignoreCase == t.ignoreCase
        }
        if ("object" != typeof n || "object" != typeof t) return !1;
        for (var i = r.length; i--;)
            if (r[i] == n) return e[i] == t;
        var a = n.constructor,
            o = t.constructor;
        if (a !== o && !(j.isFunction(a) && a instanceof a && j.isFunction(o) && o instanceof o)) return !1;
        r.push(n), e.push(t);
        var c = 0,
            f = !0;
        if ("[object Array]" == u) {
            if (c = n.length, f = c == t.length)
                for (; c-- && (f = S(n[c], t[c], r, e)););
        } else {
            for (var s in n)
                if (j.has(n, s) && (c++, !(f = j.has(t, s) && S(n[s], t[s], r, e)))) break;
            if (f) {
                for (s in t)
                    if (j.has(t, s) && !c--) break;
                f = !c
            }
        }
        return r.pop(), e.pop(), f
    };
    j.isEqual = function(n, t) {
        return S(n, t, [], [])
    }, j.isEmpty = function(n) {
        if (null == n) return !0;
        if (j.isArray(n) || j.isString(n)) return 0 === n.length;
        for (var t in n)
            if (j.has(n, t)) return !1;
        return !0
    }, j.isElement = function(n) {
        return !(!n || 1 !== n.nodeType)
    }, j.isArray = x || function(n) {
        return "[object Array]" == l.call(n)
    }, j.isObject = function(n) {
        return n === Object(n)
    }, A(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(n) {
        j["is" + n] = function(t) {
            return l.call(t) == "[object " + n + "]"
        }
    }), j.isArguments(arguments) || (j.isArguments = function(n) {
        return !(!n || !j.has(n, "callee"))
    }), "function" != typeof /./ && (j.isFunction = function(n) {
        return "function" == typeof n
    }), j.isFinite = function(n) {
        return isFinite(n) && !isNaN(parseFloat(n))
    }, j.isNaN = function(n) {
        return j.isNumber(n) && n != +n
    }, j.isBoolean = function(n) {
        return n === !0 || n === !1 || "[object Boolean]" == l.call(n)
    }, j.isNull = function(n) {
        return null === n
    }, j.isUndefined = function(n) {
        return n === void 0
    }, j.has = function(n, t) {
        return f.call(n, t)
    }, j.noConflict = function() {
        return n._ = t, this
    }, j.identity = function(n) {
        return n
    }, j.times = function(n, t, r) {
        for (var e = Array(Math.max(0, n)), u = 0; n > u; u++) e[u] = t.call(r, u);
        return e
    }, j.random = function(n, t) {
        return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1))
    };
    var I = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;"
        }
    };
    I.unescape = j.invert(I.escape);
    var T = {
        escape: new RegExp("[" + j.keys(I.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + j.keys(I.unescape).join("|") + ")", "g")
    };
    j.each(["escape", "unescape"], function(n) {
        j[n] = function(t) {
            return null == t ? "" : ("" + t).replace(T[n], function(t) {
                return I[n][t]
            })
        }
    }), j.result = function(n, t) {
        if (null == n) return void 0;
        var r = n[t];
        return j.isFunction(r) ? r.call(n) : r
    }, j.mixin = function(n) {
        A(j.functions(n), function(t) {
            var r = j[t] = n[t];
            j.prototype[t] = function() {
                var n = [this._wrapped];
                return a.apply(n, arguments), z.call(this, r.apply(j, n))
            }
        })
    };
    var N = 0;
    j.uniqueId = function(n) {
        var t = ++N + "";
        return n ? n + t : t
    }, j.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var q = /(.)^/,
        B = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "	": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        D = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    j.template = function(n, t, r) {
        var e;
        r = j.defaults({}, r, j.templateSettings);
        var u = new RegExp([(r.escape || q).source, (r.interpolate || q).source, (r.evaluate || q).source].join("|") + "|$", "g"),
            i = 0,
            a = "__p+='";
        n.replace(u, function(t, r, e, u, o) {
            return a += n.slice(i, o).replace(D, function(n) {
                return "\\" + B[n]
            }), r && (a += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'"), e && (a += "'+\n((__t=(" + e + "))==null?'':__t)+\n'"), u && (a += "';\n" + u + "\n__p+='"), i = o + t.length, t
        }), a += "';\n", r.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
        try {
            e = new Function(r.variable || "obj", "_", a)
        } catch (o) {
            throw o.source = a, o
        }
        if (t) return e(t, j);
        var c = function(n) {
            return e.call(this, n, j)
        };
        return c.source = "function(" + (r.variable || "obj") + "){\n" + a + "}", c
    }, j.chain = function(n) {
        return j(n).chain()
    };
    var z = function(n) {
        return this._chain ? j(n).chain() : n
    };
    j.mixin(j), A(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(n) {
        var t = e[n];
        j.prototype[n] = function() {
            var r = this._wrapped;
            return t.apply(r, arguments), "shift" != n && "splice" != n || 0 !== r.length || delete r[0], z.call(this, r)
        }
    }), A(["concat", "join", "slice"], function(n) {
        var t = e[n];
        j.prototype[n] = function() {
            return z.call(this, t.apply(this._wrapped, arguments))
        }
    }), j.extend(j.prototype, {
        chain: function() {
            return this._chain = !0, this
        },
        value: function() {
            return this._wrapped
        }
    })
}).call(this);

// Backbone 1.1.0
(function() {
    var t = this;
    var e = t.Backbone;
    var i = [];
    var r = i.push;
    var s = i.slice;
    var n = i.splice;
    var a;
    if (typeof exports !== "undefined") {
        a = exports
    } else {
        a = t.Backbone = {}
    }
    a.VERSION = "1.1.0";
    var h = t._;
    if (!h && typeof require !== "undefined") h = require("underscore");
    a.$ = t.jQuery || t.Zepto || t.ender || t.$;
    a.noConflict = function() {
        t.Backbone = e;
        return this
    };
    a.emulateHTTP = false;
    a.emulateJSON = false;
    var o = a.Events = {
        on: function(t, e, i) {
            if (!l(this, "on", t, [e, i]) || !e) return this;
            this._events || (this._events = {});
            var r = this._events[t] || (this._events[t] = []);
            r.push({
                callback: e,
                context: i,
                ctx: i || this
            });
            return this
        },
        once: function(t, e, i) {
            if (!l(this, "once", t, [e, i]) || !e) return this;
            var r = this;
            var s = h.once(function() {
                r.off(t, s);
                e.apply(this, arguments)
            });
            s._callback = e;
            return this.on(t, s, i)
        },
        off: function(t, e, i) {
            var r, s, n, a, o, u, c, f;
            if (!this._events || !l(this, "off", t, [e, i])) return this;
            if (!t && !e && !i) {
                this._events = {};
                return this
            }
            a = t ? [t] : h.keys(this._events);
            for (o = 0, u = a.length; o < u; o++) {
                t = a[o];
                if (n = this._events[t]) {
                    this._events[t] = r = [];
                    if (e || i) {
                        for (c = 0, f = n.length; c < f; c++) {
                            s = n[c];
                            if (e && e !== s.callback && e !== s.callback._callback || i && i !== s.context) {
                                r.push(s)
                            }
                        }
                    }
                    if (!r.length) delete this._events[t]
                }
            }
            return this
        },
        trigger: function(t) {
            if (!this._events) return this;
            var e = s.call(arguments, 1);
            if (!l(this, "trigger", t, e)) return this;
            var i = this._events[t];
            var r = this._events.all;
            if (i) c(i, e);
            if (r) c(r, arguments);
            return this
        },
        stopListening: function(t, e, i) {
            var r = this._listeningTo;
            if (!r) return this;
            var s = !e && !i;
            if (!i && typeof e === "object") i = this;
            if (t)(r = {})[t._listenId] = t;
            for (var n in r) {
                t = r[n];
                t.off(e, i, this);
                if (s || h.isEmpty(t._events)) delete this._listeningTo[n]
            }
            return this
        }
    };
    var u = /\s+/;
    var l = function(t, e, i, r) {
        if (!i) return true;
        if (typeof i === "object") {
            for (var s in i) {
                t[e].apply(t, [s, i[s]].concat(r))
            }
            return false
        }
        if (u.test(i)) {
            var n = i.split(u);
            for (var a = 0, h = n.length; a < h; a++) {
                t[e].apply(t, [n[a]].concat(r))
            }
            return false
        }
        return true
    };
    var c = function(t, e) {
        var i, r = -1,
            s = t.length,
            n = e[0],
            a = e[1],
            h = e[2];
        switch (e.length) {
            case 0:
                while (++r < s)(i = t[r]).callback.call(i.ctx);
                return;
            case 1:
                while (++r < s)(i = t[r]).callback.call(i.ctx, n);
                return;
            case 2:
                while (++r < s)(i = t[r]).callback.call(i.ctx, n, a);
                return;
            case 3:
                while (++r < s)(i = t[r]).callback.call(i.ctx, n, a, h);
                return;
            default:
                while (++r < s)(i = t[r]).callback.apply(i.ctx, e)
        }
    };
    var f = {
        listenTo: "on",
        listenToOnce: "once"
    };
    h.each(f, function(t, e) {
        o[e] = function(e, i, r) {
            var s = this._listeningTo || (this._listeningTo = {});
            var n = e._listenId || (e._listenId = h.uniqueId("l"));
            s[n] = e;
            if (!r && typeof i === "object") r = this;
            e[t](i, r, this);
            return this
        }
    });
    o.bind = o.on;
    o.unbind = o.off;
    h.extend(a, o);
    var d = a.Model = function(t, e) {
        var i = t || {};
        e || (e = {});
        this.cid = h.uniqueId("c");
        this.attributes = {};
        if (e.collection) this.collection = e.collection;
        if (e.parse) i = this.parse(i, e) || {};
        i = h.defaults({}, i, h.result(this, "defaults"));
        this.set(i, e);
        this.changed = {};
        this.initialize.apply(this, arguments)
    };
    h.extend(d.prototype, o, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        initialize: function() {},
        toJSON: function(t) {
            return h.clone(this.attributes)
        },
        sync: function() {
            return a.sync.apply(this, arguments)
        },
        get: function(t) {
            return this.attributes[t]
        },
        escape: function(t) {
            return h.escape(this.get(t))
        },
        has: function(t) {
            return this.get(t) != null
        },
        set: function(t, e, i) {
            var r, s, n, a, o, u, l, c;
            if (t == null) return this;
            if (typeof t === "object") {
                s = t;
                i = e
            } else {
                (s = {})[t] = e
            }
            i || (i = {});
            if (!this._validate(s, i)) return false;
            n = i.unset;
            o = i.silent;
            a = [];
            u = this._changing;
            this._changing = true;
            if (!u) {
                this._previousAttributes = h.clone(this.attributes);
                this.changed = {}
            }
            c = this.attributes, l = this._previousAttributes;
            if (this.idAttribute in s) this.id = s[this.idAttribute];
            for (r in s) {
                e = s[r];
                if (!h.isEqual(c[r], e)) a.push(r);
                if (!h.isEqual(l[r], e)) {
                    this.changed[r] = e
                } else {
                    delete this.changed[r]
                }
                n ? delete c[r] : c[r] = e
            }
            if (!o) {
                if (a.length) this._pending = true;
                for (var f = 0, d = a.length; f < d; f++) {
                    this.trigger("change:" + a[f], this, c[a[f]], i)
                }
            }
            if (u) return this;
            if (!o) {
                while (this._pending) {
                    this._pending = false;
                    this.trigger("change", this, i)
                }
            }
            this._pending = false;
            this._changing = false;
            return this
        },
        unset: function(t, e) {
            return this.set(t, void 0, h.extend({}, e, {
                unset: true
            }))
        },
        clear: function(t) {
            var e = {};
            for (var i in this.attributes) e[i] = void 0;
            return this.set(e, h.extend({}, t, {
                unset: true
            }))
        },
        hasChanged: function(t) {
            if (t == null) return !h.isEmpty(this.changed);
            return h.has(this.changed, t)
        },
        changedAttributes: function(t) {
            if (!t) return this.hasChanged() ? h.clone(this.changed) : false;
            var e, i = false;
            var r = this._changing ? this._previousAttributes : this.attributes;
            for (var s in t) {
                if (h.isEqual(r[s], e = t[s])) continue;
                (i || (i = {}))[s] = e
            }
            return i
        },
        previous: function(t) {
            if (t == null || !this._previousAttributes) return null;
            return this._previousAttributes[t]
        },
        previousAttributes: function() {
            return h.clone(this._previousAttributes)
        },
        fetch: function(t) {
            t = t ? h.clone(t) : {};
            if (t.parse === void 0) t.parse = true;
            var e = this;
            var i = t.success;
            t.success = function(r) {
                if (!e.set(e.parse(r, t), t)) return false;
                if (i) i(e, r, t);
                e.trigger("sync", e, r, t)
            };
            M(this, t);
            return this.sync("read", this, t)
        },
        save: function(t, e, i) {
            var r, s, n, a = this.attributes;
            if (t == null || typeof t === "object") {
                r = t;
                i = e
            } else {
                (r = {})[t] = e
            }
            i = h.extend({
                validate: true
            }, i);
            if (r && !i.wait) {
                if (!this.set(r, i)) return false
            } else {
                if (!this._validate(r, i)) return false
            }
            if (r && i.wait) {
                this.attributes = h.extend({}, a, r)
            }
            if (i.parse === void 0) i.parse = true;
            var o = this;
            var u = i.success;
            i.success = function(t) {
                o.attributes = a;
                var e = o.parse(t, i);
                if (i.wait) e = h.extend(r || {}, e);
                if (h.isObject(e) && !o.set(e, i)) {
                    return false
                }
                if (u) u(o, t, i);
                o.trigger("sync", o, t, i)
            };
            M(this, i);
            s = this.isNew() ? "create" : i.patch ? "patch" : "update";
            if (s === "patch") i.attrs = r;
            n = this.sync(s, this, i);
            if (r && i.wait) this.attributes = a;
            return n
        },
        destroy: function(t) {
            t = t ? h.clone(t) : {};
            var e = this;
            var i = t.success;
            var r = function() {
                e.trigger("destroy", e, e.collection, t)
            };
            t.success = function(s) {
                if (t.wait || e.isNew()) r();
                if (i) i(e, s, t);
                if (!e.isNew()) e.trigger("sync", e, s, t)
            };
            if (this.isNew()) {
                t.success();
                return false
            }
            M(this, t);
            var s = this.sync("delete", this, t);
            if (!t.wait) r();
            return s
        },
        url: function() {
            var t = h.result(this, "urlRoot") || h.result(this.collection, "url") || U();
            if (this.isNew()) return t;
            return t + (t.charAt(t.length - 1) === "/" ? "" : "/") + encodeURIComponent(this.id)
        },
        parse: function(t, e) {
            return t
        },
        clone: function() {
            return new this.constructor(this.attributes)
        },
        isNew: function() {
            return this.id == null
        },
        isValid: function(t) {
            return this._validate({}, h.extend(t || {}, {
                validate: true
            }))
        },
        _validate: function(t, e) {
            if (!e.validate || !this.validate) return true;
            t = h.extend({}, this.attributes, t);
            var i = this.validationError = this.validate(t, e) || null;
            if (!i) return true;
            this.trigger("invalid", this, i, h.extend(e, {
                validationError: i
            }));
            return false
        }
    });
    var p = ["keys", "values", "pairs", "invert", "pick", "omit"];
    h.each(p, function(t) {
        d.prototype[t] = function() {
            var e = s.call(arguments);
            e.unshift(this.attributes);
            return h[t].apply(h, e)
        }
    });
    var v = a.Collection = function(t, e) {
        e || (e = {});
        if (e.model) this.model = e.model;
        if (e.comparator !== void 0) this.comparator = e.comparator;
        this._reset();
        this.initialize.apply(this, arguments);
        if (t) this.reset(t, h.extend({
            silent: true
        }, e))
    };
    var g = {
        add: true,
        remove: true,
        merge: true
    };
    var m = {
        add: true,
        remove: false
    };
    h.extend(v.prototype, o, {
        model: d,
        initialize: function() {},
        toJSON: function(t) {
            return this.map(function(e) {
                return e.toJSON(t)
            })
        },
        sync: function() {
            return a.sync.apply(this, arguments)
        },
        add: function(t, e) {
            return this.set(t, h.extend({
                merge: false
            }, e, m))
        },
        remove: function(t, e) {
            var i = !h.isArray(t);
            t = i ? [t] : h.clone(t);
            e || (e = {});
            var r, s, n, a;
            for (r = 0, s = t.length; r < s; r++) {
                a = t[r] = this.get(t[r]);
                if (!a) continue;
                delete this._byId[a.id];
                delete this._byId[a.cid];
                n = this.indexOf(a);
                this.models.splice(n, 1);
                this.length--;
                if (!e.silent) {
                    e.index = n;
                    a.trigger("remove", a, this, e)
                }
                this._removeReference(a)
            }
            return i ? t[0] : t
        },
        set: function(t, e) {
            e = h.defaults({}, e, g);
            if (e.parse) t = this.parse(t, e);
            var i = !h.isArray(t);
            t = i ? t ? [t] : [] : h.clone(t);
            var r, s, n, a, o, u, l;
            var c = e.at;
            var f = this.model;
            var p = this.comparator && c == null && e.sort !== false;
            var v = h.isString(this.comparator) ? this.comparator : null;
            var m = [],
                y = [],
                _ = {};
            var w = e.add,
                b = e.merge,
                x = e.remove;
            var E = !p && w && x ? [] : false;
            for (r = 0, s = t.length; r < s; r++) {
                o = t[r];
                if (o instanceof d) {
                    n = a = o
                } else {
                    n = o[f.prototype.idAttribute]
                }
                if (u = this.get(n)) {
                    if (x) _[u.cid] = true;
                    if (b) {
                        o = o === a ? a.attributes : o;
                        if (e.parse) o = u.parse(o, e);
                        u.set(o, e);
                        if (p && !l && u.hasChanged(v)) l = true
                    }
                    t[r] = u
                } else if (w) {
                    a = t[r] = this._prepareModel(o, e);
                    if (!a) continue;
                    m.push(a);
                    a.on("all", this._onModelEvent, this);
                    this._byId[a.cid] = a;
                    if (a.id != null) this._byId[a.id] = a
                }
                if (E) E.push(u || a)
            }
            if (x) {
                for (r = 0, s = this.length; r < s; ++r) {
                    if (!_[(a = this.models[r]).cid]) y.push(a)
                }
                if (y.length) this.remove(y, e)
            }
            if (m.length || E && E.length) {
                if (p) l = true;
                this.length += m.length;
                if (c != null) {
                    for (r = 0, s = m.length; r < s; r++) {
                        this.models.splice(c + r, 0, m[r])
                    }
                } else {
                    if (E) this.models.length = 0;
                    var T = E || m;
                    for (r = 0, s = T.length; r < s; r++) {
                        this.models.push(T[r])
                    }
                }
            }
            if (l) this.sort({
                silent: true
            });
            if (!e.silent) {
                for (r = 0, s = m.length; r < s; r++) {
                    (a = m[r]).trigger("add", a, this, e)
                }
                if (l || E && E.length) this.trigger("sort", this, e)
            }
            return i ? t[0] : t
        },
        reset: function(t, e) {
            e || (e = {});
            for (var i = 0, r = this.models.length; i < r; i++) {
                this._removeReference(this.models[i])
            }
            e.previousModels = this.models;
            this._reset();
            t = this.add(t, h.extend({
                silent: true
            }, e));
            if (!e.silent) this.trigger("reset", this, e);
            return t
        },
        push: function(t, e) {
            return this.add(t, h.extend({
                at: this.length
            }, e))
        },
        pop: function(t) {
            var e = this.at(this.length - 1);
            this.remove(e, t);
            return e
        },
        unshift: function(t, e) {
            return this.add(t, h.extend({
                at: 0
            }, e))
        },
        shift: function(t) {
            var e = this.at(0);
            this.remove(e, t);
            return e
        },
        slice: function() {
            return s.apply(this.models, arguments)
        },
        get: function(t) {
            if (t == null) return void 0;
            return this._byId[t.id] || this._byId[t.cid] || this._byId[t]
        },
        at: function(t) {
            return this.models[t]
        },
        where: function(t, e) {
            if (h.isEmpty(t)) return e ? void 0 : [];
            return this[e ? "find" : "filter"](function(e) {
                for (var i in t) {
                    if (t[i] !== e.get(i)) return false
                }
                return true
            })
        },
        findWhere: function(t) {
            return this.where(t, true)
        },
        sort: function(t) {
            if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
            t || (t = {});
            if (h.isString(this.comparator) || this.comparator.length === 1) {
                this.models = this.sortBy(this.comparator, this)
            } else {
                this.models.sort(h.bind(this.comparator, this))
            }
            if (!t.silent) this.trigger("sort", this, t);
            return this
        },
        pluck: function(t) {
            return h.invoke(this.models, "get", t)
        },
        fetch: function(t) {
            t = t ? h.clone(t) : {};
            if (t.parse === void 0) t.parse = true;
            var e = t.success;
            var i = this;
            t.success = function(r) {
                var s = t.reset ? "reset" : "set";
                i[s](r, t);
                if (e) e(i, r, t);
                i.trigger("sync", i, r, t)
            };
            M(this, t);
            return this.sync("read", this, t)
        },
        create: function(t, e) {
            e = e ? h.clone(e) : {};
            if (!(t = this._prepareModel(t, e))) return false;
            if (!e.wait) this.add(t, e);
            var i = this;
            var r = e.success;
            e.success = function(t, e, s) {
                if (s.wait) i.add(t, s);
                if (r) r(t, e, s)
            };
            t.save(null, e);
            return t
        },
        parse: function(t, e) {
            return t
        },
        clone: function() {
            return new this.constructor(this.models)
        },
        _reset: function() {
            this.length = 0;
            this.models = [];
            this._byId = {}
        },
        _prepareModel: function(t, e) {
            if (t instanceof d) {
                if (!t.collection) t.collection = this;
                return t
            }
            e = e ? h.clone(e) : {};
            e.collection = this;
            var i = new this.model(t, e);
            if (!i.validationError) return i;
            this.trigger("invalid", this, i.validationError, e);
            return false
        },
        _removeReference: function(t) {
            if (this === t.collection) delete t.collection;
            t.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function(t, e, i, r) {
            if ((t === "add" || t === "remove") && i !== this) return;
            if (t === "destroy") this.remove(e, r);
            if (e && t === "change:" + e.idAttribute) {
                delete this._byId[e.previous(e.idAttribute)];
                if (e.id != null) this._byId[e.id] = e
            }
            this.trigger.apply(this, arguments)
        }
    });
    var y = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain"];
    h.each(y, function(t) {
        v.prototype[t] = function() {
            var e = s.call(arguments);
            e.unshift(this.models);
            return h[t].apply(h, e)
        }
    });
    var _ = ["groupBy", "countBy", "sortBy"];
    h.each(_, function(t) {
        v.prototype[t] = function(e, i) {
            var r = h.isFunction(e) ? e : function(t) {
                return t.get(e)
            };
            return h[t](this.models, r, i)
        }
    });
    var w = a.View = function(t) {
        this.cid = h.uniqueId("view");
        t || (t = {});
        h.extend(this, h.pick(t, x));
        this._ensureElement();
        this.initialize.apply(this, arguments);
        this.delegateEvents()
    };
    var b = /^(\S+)\s*(.*)$/;
    var x = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    h.extend(w.prototype, o, {
        tagName: "div",
        $: function(t) {
            return this.$el.find(t)
        },
        initialize: function() {},
        render: function() {
            return this
        },
        remove: function() {
            this.$el.remove();
            this.stopListening();
            return this
        },
        setElement: function(t, e) {
            if (this.$el) this.undelegateEvents();
            this.$el = t instanceof a.$ ? t : a.$(t);
            this.el = this.$el[0];
            if (e !== false) this.delegateEvents();
            return this
        },
        delegateEvents: function(t) {
            if (!(t || (t = h.result(this, "events")))) return this;
            this.undelegateEvents();
            for (var e in t) {
                var i = t[e];
                if (!h.isFunction(i)) i = this[t[e]];
                if (!i) continue;
                var r = e.match(b);
                var s = r[1],
                    n = r[2];
                i = h.bind(i, this);
                s += ".delegateEvents" + this.cid;
                if (n === "") {
                    this.$el.on(s, i)
                } else {
                    this.$el.on(s, n, i)
                }
            }
            return this
        },
        undelegateEvents: function() {
            this.$el.off(".delegateEvents" + this.cid);
            return this
        },
        _ensureElement: function() {
            if (!this.el) {
                var t = h.extend({}, h.result(this, "attributes"));
                if (this.id) t.id = h.result(this, "id");
                if (this.className) t["class"] = h.result(this, "className");
                var e = a.$("<" + h.result(this, "tagName") + ">").attr(t);
                this.setElement(e, false)
            } else {
                this.setElement(h.result(this, "el"), false)
            }
        }
    });
    a.sync = function(t, e, i) {
        var r = T[t];
        h.defaults(i || (i = {}), {
            emulateHTTP: a.emulateHTTP,
            emulateJSON: a.emulateJSON
        });
        var s = {
            type: r,
            dataType: "json"
        };
        if (!i.url) {
            s.url = h.result(e, "url") || U()
        }
        if (i.data == null && e && (t === "create" || t === "update" || t === "patch")) {
            s.contentType = "application/json";
            s.data = JSON.stringify(i.attrs || e.toJSON(i))
        }
        if (i.emulateJSON) {
            s.contentType = "application/x-www-form-urlencoded";
            s.data = s.data ? {
                model: s.data
            } : {}
        }
        if (i.emulateHTTP && (r === "PUT" || r === "DELETE" || r === "PATCH")) {
            s.type = "POST";
            if (i.emulateJSON) s.data._method = r;
            var n = i.beforeSend;
            i.beforeSend = function(t) {
                t.setRequestHeader("X-HTTP-Method-Override", r);
                if (n) return n.apply(this, arguments)
            }
        }
        if (s.type !== "GET" && !i.emulateJSON) {
            s.processData = false
        }
        if (s.type === "PATCH" && E) {
            s.xhr = function() {
                return new ActiveXObject("Microsoft.XMLHTTP")
            }
        }
        var o = i.xhr = a.ajax(h.extend(s, i));
        e.trigger("request", e, o, i);
        return o
    };
    var E = typeof window !== "undefined" && !!window.ActiveXObject && !(window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent);
    var T = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        "delete": "DELETE",
        read: "GET"
    };
    a.ajax = function() {
        return a.$.ajax.apply(a.$, arguments)
    };
    var k = a.Router = function(t) {
        t || (t = {});
        if (t.routes) this.routes = t.routes;
        this._bindRoutes();
        this.initialize.apply(this, arguments)
    };
    var S = /\((.*?)\)/g;
    var $ = /(\(\?)?:\w+/g;
    var H = /\*\w+/g;
    var A = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    h.extend(k.prototype, o, {
        initialize: function() {},
        route: function(t, e, i) {
            if (!h.isRegExp(t)) t = this._routeToRegExp(t);
            if (h.isFunction(e)) {
                i = e;
                e = ""
            }
            if (!i) i = this[e];
            var r = this;
            a.history.route(t, function(s) {
                var n = r._extractParameters(t, s);
                i && i.apply(r, n);
                r.trigger.apply(r, ["route:" + e].concat(n));
                r.trigger("route", e, n);
                a.history.trigger("route", r, e, n)
            });
            return this
        },
        navigate: function(t, e) {
            a.history.navigate(t, e);
            return this
        },
        _bindRoutes: function() {
            if (!this.routes) return;
            this.routes = h.result(this, "routes");
            var t, e = h.keys(this.routes);
            while ((t = e.pop()) != null) {
                this.route(t, this.routes[t])
            }
        },
        _routeToRegExp: function(t) {
            t = t.replace(A, "\\$&").replace(S, "(?:$1)?").replace($, function(t, e) {
                return e ? t : "([^/]+)"
            }).replace(H, "(.*?)");
            return new RegExp("^" + t + "$")
        },
        _extractParameters: function(t, e) {
            var i = t.exec(e).slice(1);
            return h.map(i, function(t) {
                return t ? decodeURIComponent(t) : null
            })
        }
    });
    var I = a.History = function() {
        this.handlers = [];
        h.bindAll(this, "checkUrl");
        if (typeof window !== "undefined") {
            this.location = window.location;
            this.history = window.history
        }
    };
    var N = /^[#\/]|\s+$/g;
    var O = /^\/+|\/+$/g;
    var P = /msie [\w.]+/;
    var C = /\/$/;
    var j = /[?#].*$/;
    I.started = false;
    h.extend(I.prototype, o, {
        interval: 50,
        getHash: function(t) {
            var e = (t || this).location.href.match(/#(.*)$/);
            return e ? e[1] : ""
        },
        getFragment: function(t, e) {
            if (t == null) {
                if (this._hasPushState || !this._wantsHashChange || e) {
                    t = this.location.pathname;
                    var i = this.root.replace(C, "");
                    if (!t.indexOf(i)) t = t.slice(i.length)
                } else {
                    t = this.getHash()
                }
            }
            return t.replace(N, "")
        },
        start: function(t) {
            if (I.started) throw new Error("Backbone.history has already been started");
            I.started = true;
            this.options = h.extend({
                root: "/"
            }, this.options, t);
            this.root = this.options.root;
            this._wantsHashChange = this.options.hashChange !== false;
            this._wantsPushState = !!this.options.pushState;
            this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
            var e = this.getFragment();
            var i = document.documentMode;
            var r = P.exec(navigator.userAgent.toLowerCase()) && (!i || i <= 7);
            this.root = ("/" + this.root + "/").replace(O, "/");
            if (r && this._wantsHashChange) {
                this.iframe = a.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow;
                this.navigate(e)
            }
            if (this._hasPushState) {
                a.$(window).on("popstate", this.checkUrl)
            } else if (this._wantsHashChange && "onhashchange" in window && !r) {
                a.$(window).on("hashchange", this.checkUrl)
            } else if (this._wantsHashChange) {
                this._checkUrlInterval = setInterval(this.checkUrl, this.interval)
            }
            this.fragment = e;
            var s = this.location;
            var n = s.pathname.replace(/[^\/]$/, "$&/") === this.root;
            if (this._wantsHashChange && this._wantsPushState) {
                if (!this._hasPushState && !n) {
                    this.fragment = this.getFragment(null, true);
                    this.location.replace(this.root + this.location.search + "#" + this.fragment);
                    return true
                } else if (this._hasPushState && n && s.hash) {
                    this.fragment = this.getHash().replace(N, "");
                    this.history.replaceState({}, document.title, this.root + this.fragment + s.search)
                }
            }
            if (!this.options.silent) return this.loadUrl()
        },
        stop: function() {
            a.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl);
            clearInterval(this._checkUrlInterval);
            I.started = false
        },
        route: function(t, e) {
            this.handlers.unshift({
                route: t,
                callback: e
            })
        },
        checkUrl: function(t) {
            var e = this.getFragment();
            if (e === this.fragment && this.iframe) {
                e = this.getFragment(this.getHash(this.iframe))
            }
            if (e === this.fragment) return false;
            if (this.iframe) this.navigate(e);
            this.loadUrl()
        },
        loadUrl: function(t) {
            t = this.fragment = this.getFragment(t);
            return h.any(this.handlers, function(e) {
                if (e.route.test(t)) {
                    e.callback(t);
                    return true
                }
            })
        },
        navigate: function(t, e) {
            if (!I.started) return false;
            if (!e || e === true) e = {
                trigger: !!e
            };
            var i = this.root + (t = this.getFragment(t || ""));
            t = t.replace(j, "");
            if (this.fragment === t) return;
            this.fragment = t;
            if (t === "" && i !== "/") i = i.slice(0, -1);
            if (this._hasPushState) {
                this.history[e.replace ? "replaceState" : "pushState"]({}, document.title, i)
            } else if (this._wantsHashChange) {
                this._updateHash(this.location, t, e.replace);
                if (this.iframe && t !== this.getFragment(this.getHash(this.iframe))) {
                    if (!e.replace) this.iframe.document.open().close();
                    this._updateHash(this.iframe.location, t, e.replace)
                }
            } else {
                return this.location.assign(i)
            }
            if (e.trigger) return this.loadUrl(t)
        },
        _updateHash: function(t, e, i) {
            if (i) {
                var r = t.href.replace(/(javascript:|#).*$/, "");
                t.replace(r + "#" + e)
            } else {
                t.hash = "#" + e
            }
        }
    });
    a.history = new I;
    var R = function(t, e) {
        var i = this;
        var r;
        if (t && h.has(t, "constructor")) {
            r = t.constructor
        } else {
            r = function() {
                return i.apply(this, arguments)
            }
        }
        h.extend(r, i, e);
        var s = function() {
            this.constructor = r
        };
        s.prototype = i.prototype;
        r.prototype = new s;
        if (t) h.extend(r.prototype, t);
        r.__super__ = i.prototype;
        return r
    };
    d.extend = v.extend = k.extend = w.extend = I.extend = R;
    var U = function() {
        throw new Error('A "url" property or function must be specified')
    };
    var M = function(t, e) {
        var i = e.error;
        e.error = function(r) {
            if (i) i(t, r, e);
            t.trigger("error", t, r, e)
        }
    }
}).call(this);

/*! waitForImages jQuery Plugin 2013-07-20 */
! function(a) {
    var b = "waitForImages";
    a.waitForImages = {
        hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage", "cursor"]
    }, a.expr[":"].uncached = function(b) {
        if (!a(b).is('img[src!=""]')) return !1;
        var c = new Image;
        return c.src = b.src, !c.complete
    }, a.fn.waitForImages = function(c, d, e) {
        var f = 0,
            g = 0;
        if (a.isPlainObject(arguments[0]) && (e = arguments[0].waitForAll, d = arguments[0].each, c = arguments[0].finished), c = c || a.noop, d = d || a.noop, e = !!e, !a.isFunction(c) || !a.isFunction(d)) throw new TypeError("An invalid callback was supplied.");
        return this.each(function() {
            var h = a(this),
                i = [],
                j = a.waitForImages.hasImageProperties || [],
                k = /url\(\s*(['"]?)(.*?)\1\s*\)/g;
            e ? h.find("*").addBack().each(function() {
                var b = a(this);
                b.is("img:uncached") && i.push({
                    src: b.attr("src"),
                    element: b[0]
                }), a.each(j, function(a, c) {
                    var d, e = b.css(c);
                    if (!e) return !0;
                    for (; d = k.exec(e);) i.push({
                        src: d[2],
                        element: b[0]
                    })
                })
            }) : h.find("img:uncached").each(function() {
                i.push({
                    src: this.src,
                    element: this
                })
            }), f = i.length, g = 0, 0 === f && c.call(h[0]), a.each(i, function(e, i) {
                var j = new Image;
                a(j).on("load." + b + " error." + b, function(a) {
                    return g++, d.call(i.element, g, f, "load" == a.type), g == f ? (c.call(h[0]), !1) : void 0
                }), j.src = i.src
            })
        })
    }
}(jQuery);

/* Modernizr 2.7.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransforms3d-canvas-video-svg-shiv-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
;
window.Modernizr = function(a, b, c) {
        function A(a) {
            j.cssText = a
        }

        function B(a, b) {
            return A(m.join(a + ";") + (b || ""))
        }

        function C(a, b) {
            return typeof a === b
        }

        function D(a, b) {
            return !!~("" + a).indexOf(b)
        }

        function E(a, b) {
            for (var d in a) {
                var e = a[d];
                if (!D(e, "-") && j[e] !== c) return b == "pfx" ? e : !0
            }
            return !1
        }

        function F(a, b, d) {
            for (var e in a) {
                var f = b[a[e]];
                if (f !== c) return d === !1 ? a[e] : C(f, "function") ? f.bind(d || b) : f
            }
            return !1
        }

        function G(a, b, c) {
            var d = a.charAt(0).toUpperCase() + a.slice(1),
                e = (a + " " + o.join(d + " ") + d).split(" ");
            return C(b, "string") || C(b, "undefined") ? E(e, b) : (e = (a + " " + p.join(d + " ") + d).split(" "), F(e, b, c))
        }
        var d = "2.7.1",
            e = {},
            f = !0,
            g = b.documentElement,
            h = "modernizr",
            i = b.createElement(h),
            j = i.style,
            k, l = {}.toString,
            m = " -webkit- -moz- -o- -ms- ".split(" "),
            n = "Webkit Moz O ms",
            o = n.split(" "),
            p = n.toLowerCase().split(" "),
            q = {
                svg: "http://www.w3.org/2000/svg"
            },
            r = {},
            s = {},
            t = {},
            u = [],
            v = u.slice,
            w, x = function(a, c, d, e) {
                var f, i, j, k, l = b.createElement("div"),
                    m = b.body,
                    n = m || b.createElement("body");
                if (parseInt(d, 10))
                    while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
                return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i
            },
            y = {}.hasOwnProperty,
            z;
        !C(y, "undefined") && !C(y.call, "undefined") ? z = function(a, b) {
            return y.call(a, b)
        } : z = function(a, b) {
            return b in a && C(a.constructor.prototype[b], "undefined")
        }, Function.prototype.bind || (Function.prototype.bind = function(b) {
            var c = this;
            if (typeof c != "function") throw new TypeError;
            var d = v.call(arguments, 1),
                e = function() {
                    if (this instanceof e) {
                        var a = function() {};
                        a.prototype = c.prototype;
                        var f = new a,
                            g = c.apply(f, d.concat(v.call(arguments)));
                        return Object(g) === g ? g : f
                    }
                    return c.apply(b, d.concat(v.call(arguments)))
                };
            return e
        }), r.canvas = function() {
            var a = b.createElement("canvas");
            return !!a.getContext && !!a.getContext("2d")
        }, r.csstransforms3d = function() {
            var a = !!G("perspective");
            return a && "webkitPerspective" in g.style && x("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b, c) {
                a = b.offsetLeft === 9 && b.offsetHeight === 3
            }), a
        }, r.video = function() {
            var a = b.createElement("video"),
                c = !1;
            try {
                if (c = !!a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
            } catch (d) {}
            return c
        }, r.svg = function() {
            return !!b.createElementNS && !!b.createElementNS(q.svg, "svg").createSVGRect
        };
        for (var H in r) z(r, H) && (w = H.toLowerCase(), e[w] = r[H](), u.push((e[w] ? "" : "no-") + w));
        return e.addTest = function(a, b) {
                if (typeof a == "object")
                    for (var d in a) z(a, d) && e.addTest(d, a[d]);
                else {
                    a = a.toLowerCase();
                    if (e[a] !== c) return e;
                    b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
                }
                return e
            }, A(""), i = k = null,
            function(a, b) {
                function l(a, b) {
                    var c = a.createElement("p"),
                        d = a.getElementsByTagName("head")[0] || a.documentElement;
                    return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
                }

                function m() {
                    var a = s.elements;
                    return typeof a == "string" ? a.split(" ") : a
                }

                function n(a) {
                    var b = j[a[h]];
                    return b || (b = {}, i++, a[h] = i, j[i] = b), b
                }

                function o(a, c, d) {
                    c || (c = b);
                    if (k) return c.createElement(a);
                    d || (d = n(c));
                    var g;
                    return d.cache[a] ? g = d.cache[a].cloneNode() : f.test(a) ? g = (d.cache[a] = d.createElem(a)).cloneNode() : g = d.createElem(a), g.canHaveChildren && !e.test(a) && !g.tagUrn ? d.frag.appendChild(g) : g
                }

                function p(a, c) {
                    a || (a = b);
                    if (k) return a.createDocumentFragment();
                    c = c || n(a);
                    var d = c.frag.cloneNode(),
                        e = 0,
                        f = m(),
                        g = f.length;
                    for (; e < g; e++) d.createElement(f[e]);
                    return d
                }

                function q(a, b) {
                    b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
                        return s.shivMethods ? o(c, a, b) : b.createElem(c)
                    }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/[\w\-]+/g, function(a) {
                        return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                    }) + ");return n}")(s, b.frag)
                }

                function r(a) {
                    a || (a = b);
                    var c = n(a);
                    return s.shivCSS && !g && !c.hasCSS && (c.hasCSS = !!l(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || q(a, c), a
                }
                var c = "3.7.0",
                    d = a.html5 || {},
                    e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    g, h = "_html5shiv",
                    i = 0,
                    j = {},
                    k;
                (function() {
                    try {
                        var a = b.createElement("a");
                        a.innerHTML = "<xyz></xyz>", g = "hidden" in a, k = a.childNodes.length == 1 || function() {
                            b.createElement("a");
                            var a = b.createDocumentFragment();
                            return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                        }()
                    } catch (c) {
                        g = !0, k = !0
                    }
                })();
                var s = {
                    elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: c,
                    shivCSS: d.shivCSS !== !1,
                    supportsUnknownElements: k,
                    shivMethods: d.shivMethods !== !1,
                    type: "default",
                    shivDocument: r,
                    createElement: o,
                    createDocumentFragment: p
                };
                a.html5 = s, r(b)
            }(this, b), e._version = d, e._prefixes = m, e._domPrefixes = p, e._cssomPrefixes = o, e.testProp = function(a) {
                return E([a])
            }, e.testAllProps = G, e.testStyles = x, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + u.join(" ") : ""), e
    }(this, this.document),
    function(a, b, c) {
        function d(a) {
            return "[object Function]" == o.call(a)
        }

        function e(a) {
            return "string" == typeof a
        }

        function f() {}

        function g(a) {
            return !a || "loaded" == a || "complete" == a || "uninitialized" == a
        }

        function h() {
            var a = p.shift();
            q = 1, a ? a.t ? m(function() {
                ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
            }, 0) : (a(), h()) : q = 0
        }

        function i(a, c, d, e, f, i, j) {
            function k(b) {
                if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                    "img" != a && m(function() {
                        t.removeChild(l)
                    }, 50);
                    for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
                }
            }
            var j = j || B.errorTimeout,
                l = b.createElement(a),
                o = 0,
                r = 0,
                u = {
                    t: d,
                    s: c,
                    e: f,
                    a: i,
                    x: j
                };
            1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
                k.call(this, r)
            }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
        }

        function j(a, b, c, d, f) {
            return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
        }

        function k() {
            var a = B;
            return a.loader = {
                load: j,
                i: 0
            }, a
        }
        var l = b.documentElement,
            m = a.setTimeout,
            n = b.getElementsByTagName("script")[0],
            o = {}.toString,
            p = [],
            q = 0,
            r = "MozAppearance" in l.style,
            s = r && !!b.createRange().compareNode,
            t = s ? l : n.parentNode,
            l = a.opera && "[object Opera]" == o.call(a.opera),
            l = !!b.attachEvent && !l,
            u = r ? "object" : l ? "script" : "img",
            v = l ? "script" : u,
            w = Array.isArray || function(a) {
                return "[object Array]" == o.call(a)
            },
            x = [],
            y = {},
            z = {
                timeout: function(a, b) {
                    return b.length && (a.timeout = b[0]), a
                }
            },
            A, B;
        B = function(a) {
            function b(a) {
                var a = a.split("!"),
                    b = x.length,
                    c = a.pop(),
                    d = a.length,
                    c = {
                        url: c,
                        origUrl: c,
                        prefixes: a
                    },
                    e, f, g;
                for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
                for (f = 0; f < b; f++) c = x[f](c);
                return c
            }

            function g(a, e, f, g, h) {
                var i = b(a),
                    j = i.autoCallback;
                i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
                    k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
                })))
            }

            function h(a, b) {
                function c(a, c) {
                    if (a) {
                        if (e(a)) c || (j = function() {
                            var a = [].slice.call(arguments);
                            k.apply(this, a), l()
                        }), g(a, j, b, 0, h);
                        else if (Object(a) === a)
                            for (n in m = function() {
                                    var b = 0,
                                        c;
                                    for (c in a) a.hasOwnProperty(c) && b++;
                                    return b
                                }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                                var a = [].slice.call(arguments);
                                k.apply(this, a), l()
                            } : j[n] = function(a) {
                                return function() {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this, b), l()
                                }
                            }(k[n])), g(a[n], j, b, n, h))
                    } else !c && l()
                }
                var h = !!a.test,
                    i = a.load || a.both,
                    j = a.callback || f,
                    k = j,
                    l = a.complete || f,
                    m, n;
                c(h ? a.yep : a.nope, !!i), i && c(i)
            }
            var i, j, l = this.yepnope.loader;
            if (e(a)) g(a, 0, l, 0);
            else if (w(a))
                for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
            else Object(a) === a && h(a, l)
        }, B.addPrefix = function(a, b) {
            z[a] = b
        }, B.addFilter = function(a) {
            x.push(a)
        }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
            b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
        }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
            var k = b.createElement("script"),
                l, o, e = e || B.errorTimeout;
            k.src = a;
            for (o in d) k.setAttribute(o, d[o]);
            c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
                !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
            }, m(function() {
                l || (l = 1, c(1))
            }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
        }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
            var e = b.createElement("link"),
                j, c = i ? h : c || f;
            e.href = a, e.rel = "stylesheet", e.type = "text/css";
            for (j in d) e.setAttribute(j, d[j]);
            g || (n.parentNode.insertBefore(e, n), m(c, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    };

/* TweenLite */
/*!
 * VERSION: 1.11.2
 * DATE: 2013-11-20
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
(function(t) {
    "use strict";
    var e = t.GreenSockGlobals || t;
    if (!e.TweenLite) {
        var i, s, r, n, a, o = function(t) {
                var i, s = t.split("."),
                    r = e;
                for (i = 0; s.length > i; i++) r[s[i]] = r = r[s[i]] || {};
                return r
            },
            l = o("com.greensock"),
            h = 1e-10,
            _ = [].slice,
            u = function() {},
            m = function() {
                var t = Object.prototype.toString,
                    e = t.call([]);
                return function(i) {
                    return i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e
                }
            }(),
            f = {},
            p = function(i, s, r, n) {
                this.sc = f[i] ? f[i].sc : [], f[i] = this, this.gsClass = null, this.func = r;
                var a = [];
                this.check = function(l) {
                    for (var h, _, u, m, c = s.length, d = c; --c > -1;)(h = f[s[c]] || new p(s[c], [])).gsClass ? (a[c] = h.gsClass, d--) : l && h.sc.push(this);
                    if (0 === d && r)
                        for (_ = ("com.greensock." + i).split("."), u = _.pop(), m = o(_.join("."))[u] = this.gsClass = r.apply(r, a), n && (e[u] = m, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + i.split(".").join("/"), [], function() {
                                return m
                            }) : "undefined" != typeof module && module.exports && (module.exports = m)), c = 0; this.sc.length > c; c++) this.sc[c].check()
                }, this.check(!0)
            },
            c = t._gsDefine = function(t, e, i, s) {
                return new p(t, e, i, s)
            },
            d = l._class = function(t, e, i) {
                return e = e || function() {}, c(t, [], function() {
                    return e
                }, i), e
            };
        c.globals = e;
        var v = [0, 0, 1, 1],
            g = [],
            T = d("easing.Ease", function(t, e, i, s) {
                this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? v.concat(e) : v
            }, !0),
            w = T.map = {},
            P = T.register = function(t, e, i, s) {
                for (var r, n, a, o, h = e.split(","), _ = h.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --_ > -1;)
                    for (n = h[_], r = s ? d("easing." + n, null, !0) : l.easing[n] || {}, a = u.length; --a > -1;) o = u[a], w[n + "." + o] = w[o + n] = r[o] = t.getRatio ? t : t[o] || new t
            };
        for (r = T.prototype, r._calcEnd = !1, r.getRatio = function(t) {
                if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                var e = this._type,
                    i = this._power,
                    s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2
            }, i = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], s = i.length; --s > -1;) r = i[s] + ",Power" + s, P(new T(null, null, 1, s), r, "easeOut", !0), P(new T(null, null, 2, s), r, "easeIn" + (0 === s ? ",easeNone" : "")), P(new T(null, null, 3, s), r, "easeInOut");
        w.linear = l.easing.Linear.easeIn, w.swing = l.easing.Quad.easeInOut;
        var y = d("events.EventDispatcher", function(t) {
            this._listeners = {}, this._eventTarget = t || this
        });
        r = y.prototype, r.addEventListener = function(t, e, i, s, r) {
            r = r || 0;
            var o, l, h = this._listeners[t],
                _ = 0;
            for (null == h && (this._listeners[t] = h = []), l = h.length; --l > -1;) o = h[l], o.c === e && o.s === i ? h.splice(l, 1) : 0 === _ && r > o.pr && (_ = l + 1);
            h.splice(_, 0, {
                c: e,
                s: i,
                up: s,
                pr: r
            }), this !== n || a || n.wake()
        }, r.removeEventListener = function(t, e) {
            var i, s = this._listeners[t];
            if (s)
                for (i = s.length; --i > -1;)
                    if (s[i].c === e) return s.splice(i, 1), void 0
        }, r.dispatchEvent = function(t) {
            var e, i, s, r = this._listeners[t];
            if (r)
                for (e = r.length, i = this._eventTarget; --e > -1;) s = r[e], s.up ? s.c.call(s.s || i, {
                    type: t,
                    target: i
                }) : s.c.call(s.s || i)
        };
        var b = t.requestAnimationFrame,
            k = t.cancelAnimationFrame,
            A = Date.now || function() {
                return (new Date).getTime()
            },
            S = A();
        for (i = ["ms", "moz", "webkit", "o"], s = i.length; --s > -1 && !b;) b = t[i[s] + "RequestAnimationFrame"], k = t[i[s] + "CancelAnimationFrame"] || t[i[s] + "CancelRequestAnimationFrame"];
        d("Ticker", function(t, e) {
            var i, s, r, o, l, h = this,
                _ = A(),
                m = e !== !1 && b,
                f = function(t) {
                    S = A(), h.time = (S - _) / 1e3;
                    var e, n = h.time - l;
                    (!i || n > 0 || t === !0) && (h.frame++, l += n + (n >= o ? .004 : o - n), e = !0), t !== !0 && (r = s(f)), e && h.dispatchEvent("tick")
                };
            y.call(h), h.time = h.frame = 0, h.tick = function() {
                f(!0)
            }, h.sleep = function() {
                null != r && (m && k ? k(r) : clearTimeout(r), s = u, r = null, h === n && (a = !1))
            }, h.wake = function() {
                null !== r && h.sleep(), s = 0 === i ? u : m && b ? b : function(t) {
                    return setTimeout(t, 0 | 1e3 * (l - h.time) + 1)
                }, h === n && (a = !0), f(2)
            }, h.fps = function(t) {
                return arguments.length ? (i = t, o = 1 / (i || 60), l = this.time + o, h.wake(), void 0) : i
            }, h.useRAF = function(t) {
                return arguments.length ? (h.sleep(), m = t, h.fps(i), void 0) : m
            }, h.fps(t), setTimeout(function() {
                m && (!r || 5 > h.frame) && h.useRAF(!1)
            }, 1500)
        }), r = l.Ticker.prototype = new l.events.EventDispatcher, r.constructor = l.Ticker;
        var x = d("core.Animation", function(t, e) {
            if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, Q) {
                a || n.wake();
                var i = this.vars.useFrames ? G : Q;
                i.add(this, i._time), this.vars.paused && this.paused(!0)
            }
        });
        n = x.ticker = new l.Ticker, r = x.prototype, r._dirty = r._gc = r._initted = r._paused = !1, r._totalTime = r._time = 0, r._rawPrevTime = -1, r._next = r._last = r._onUpdate = r._timeline = r.timeline = null, r._paused = !1;
        var C = function() {
            a && A() - S > 2e3 && n.wake(), setTimeout(C, 2e3)
        };
        C(), r.play = function(t, e) {
            return arguments.length && this.seek(t, e), this.reversed(!1).paused(!1)
        }, r.pause = function(t, e) {
            return arguments.length && this.seek(t, e), this.paused(!0)
        }, r.resume = function(t, e) {
            return arguments.length && this.seek(t, e), this.paused(!1)
        }, r.seek = function(t, e) {
            return this.totalTime(Number(t), e !== !1)
        }, r.restart = function(t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
        }, r.reverse = function(t, e) {
            return arguments.length && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, r.render = function() {}, r.invalidate = function() {
            return this
        }, r.isActive = function() {
            var t, e = this._timeline,
                i = this._startTime;
            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
        }, r._enabled = function(t, e) {
            return a || n.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
        }, r._kill = function() {
            return this._enabled(!1, !1)
        }, r.kill = function(t, e) {
            return this._kill(t, e), this
        }, r._uncache = function(t) {
            for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
            return this
        }, r._swapSelfInParams = function(t) {
            for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
            return i
        }, r.eventCallback = function(t, e, i, s) {
            if ("on" === (t || "").substr(0, 2)) {
                var r = this.vars;
                if (1 === arguments.length) return r[t];
                null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = m(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        }, r.delay = function(t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
        }, r.duration = function(t) {
            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, r.totalDuration = function(t) {
            return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
        }, r.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
        }, r.totalTime = function(t, e, i) {
            if (a || n.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var s = this._totalDuration,
                        r = this._timeline;
                    if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? s - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                        for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                }
                this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && this.render(t, e, !1)
            }
            return this
        }, r.progress = r.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
        }, r.startTime = function(t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
        }, r.timeScale = function(t) {
            if (!arguments.length) return this._timeScale;
            if (t = t || h, this._timeline && this._timeline.smoothChildTiming) {
                var e = this._pauseTime,
                    i = e || 0 === e ? e : this._timeline.totalTime();
                this._startTime = i - (i - this._startTime) * this._timeScale / t
            }
            return this._timeScale = t, this._uncache(!1)
        }, r.reversed = function(t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._totalTime, !0)), this) : this._reversed
        }, r.paused = function(t) {
            if (!arguments.length) return this._paused;
            if (t != this._paused && this._timeline) {
                a || t || n.wake();
                var e = this._timeline,
                    i = e.rawTime(),
                    s = i - this._pauseTime;
                !t && e.smoothChildTiming && (this._startTime += s, this._uncache(!1)), this._pauseTime = t ? i : null, this._paused = t, this._active = this.isActive(), !t && 0 !== s && this._initted && this.duration() && this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
            }
            return this._gc && !t && this._enabled(!0, !1), this
        };
        var R = d("core.SimpleTimeline", function(t) {
            x.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        r = R.prototype = new x, r.constructor = R, r.kill()._gc = !1, r._first = r._last = null, r._sortChildren = !1, r.add = r.insert = function(t, e) {
            var i, s;
            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                for (s = t._startTime; i && i._startTime > s;) i = i._prev;
            return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._timeline && this._uncache(!0), this
        }, r._remove = function(t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0), t.timeline = null, t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), this._timeline && this._uncache(!0)), this
        }, r.render = function(t, e, i) {
            var s, r = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; r;) s = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = s
        }, r.rawTime = function() {
            return a || n.wake(), this._totalTime
        };
        var D = d("TweenLite", function(e, i, s) {
                if (x.call(this, i, s), this.render = D.prototype.render, null == e) throw "Cannot tween a null target.";
                this.target = e = "string" != typeof e ? e : D.selector(e) || e;
                var r, n, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                    l = this.vars.overwrite;
                if (this._overwrite = l = null == l ? j[D.defaultOverwrite] : "number" == typeof l ? l >> 0 : j[l], (o || e instanceof Array || e.push && m(e)) && "number" != typeof e[0])
                    for (this._targets = a = _.call(e, 0), this._propLookup = [], this._siblings = [], r = 0; a.length > r; r++) n = a[r], n ? "string" != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(_.call(n, 0))) : (this._siblings[r] = B(n, this, !1), 1 === l && this._siblings[r].length > 1 && q(n, this, null, 1, this._siblings[r])) : (n = a[r--] = D.selector(n), "string" == typeof n && a.splice(r + 1, 1)) : a.splice(r--, 1);
                else this._propLookup = {}, this._siblings = B(e, this, !1), 1 === l && this._siblings.length > 1 && q(e, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && this.render(-this._delay, !1, !0)
            }, !0),
            E = function(e) {
                return e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
            },
            I = function(t, e) {
                var i, s = {};
                for (i in t) F[i] || i in e && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!N[i] || N[i] && N[i]._autoCSS) || (s[i] = t[i], delete t[i]);
                t.css = s
            };
        r = D.prototype = new x, r.constructor = D, r.kill()._gc = !1, r.ratio = 0, r._firstPT = r._targets = r._overwrittenProps = r._startAt = null, r._notifyPluginsOfEnabled = !1, D.version = "1.11.2", D.defaultEase = r._ease = new T(null, null, 1, 1), D.defaultOverwrite = "auto", D.ticker = n, D.autoSleep = !0, D.selector = t.$ || t.jQuery || function(e) {
            return t.$ ? (D.selector = t.$, t.$(e)) : t.document ? t.document.getElementById("#" === e.charAt(0) ? e.substr(1) : e) : e
        };
        var O = D._internals = {
                isArray: m,
                isSelector: E
            },
            N = D._plugins = {},
            L = D._tweenLookup = {},
            U = 0,
            F = O.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1
            },
            j = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                "true": 1,
                "false": 0
            },
            G = x._rootFramesTimeline = new R,
            Q = x._rootTimeline = new R;
        Q._startTime = n.time, G._startTime = n.frame, Q._active = G._active = !0, x._updateRoot = function() {
            if (Q.render((n.time - Q._startTime) * Q._timeScale, !1, !1), G.render((n.frame - G._startTime) * G._timeScale, !1, !1), !(n.frame % 120)) {
                var t, e, i;
                for (i in L) {
                    for (e = L[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete L[i]
                }
                if (i = Q._first, (!i || i._paused) && D.autoSleep && !G._first && 1 === n._listeners.tick.length) {
                    for (; i && i._paused;) i = i._next;
                    i || n.sleep()
                }
            }
        }, n.addEventListener("tick", x._updateRoot);
        var B = function(t, e, i) {
                var s, r, n = t._gsTweenID;
                if (L[n || (t._gsTweenID = n = "t" + U++)] || (L[n] = {
                        target: t,
                        tweens: []
                    }), e && (s = L[n].tweens, s[r = s.length] = e, i))
                    for (; --r > -1;) s[r] === e && s.splice(r, 1);
                return L[n].tweens
            },
            q = function(t, e, i, s, r) {
                var n, a, o, l;
                if (1 === s || s >= 4) {
                    for (l = r.length, n = 0; l > n; n++)
                        if ((o = r[n]) !== e) o._gc || o._enabled(!1, !1) && (a = !0);
                        else if (5 === s) break;
                    return a
                }
                var _, u = e._startTime + h,
                    m = [],
                    f = 0,
                    p = 0 === e._duration;
                for (n = r.length; --n > -1;)(o = r[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (_ = _ || $(e, 0, p), 0 === $(o, _, p) && (m[f++] = o)) : u >= o._startTime && o._startTime + o.totalDuration() / o._timeScale + h > u && ((p || !o._initted) && 2e-10 >= u - o._startTime || (m[f++] = o)));
                for (n = f; --n > -1;) o = m[n], 2 === s && o._kill(i, t) && (a = !0), (2 !== s || !o._firstPT && o._initted) && o._enabled(!1, !1) && (a = !0);
                return a
            },
            $ = function(t, e, i) {
                for (var s = t._timeline, r = s._timeScale, n = t._startTime; s._timeline;) {
                    if (n += s._startTime, r *= s._timeScale, s._paused) return -100;
                    s = s._timeline
                }
                return n /= r, n > e ? n - e : i && n === e || !t._initted && 2 * h > n - e ? h : (n += t.totalDuration() / t._timeScale / r) > e + h ? 0 : n - e - h
            };
        r._init = function() {
            var t, e, i, s, r = this.vars,
                n = this._overwrittenProps,
                a = this._duration,
                o = r.immediateRender,
                l = r.ease;
            if (r.startAt) {
                if (this._startAt && this._startAt.render(-1, !0), r.startAt.overwrite = 0, r.startAt.immediateRender = !0, this._startAt = D.to(this.target, 0, r.startAt), o)
                    if (this._time > 0) this._startAt = null;
                    else if (0 !== a) return
            } else if (r.runBackwards && 0 !== a)
                if (this._startAt) this._startAt.render(-1, !0), this._startAt = null;
                else {
                    i = {};
                    for (s in r) F[s] && "autoCSS" !== s || (i[s] = r[s]);
                    if (i.overwrite = 0, i.data = "isFromStart", this._startAt = D.to(this.target, 0, i), r.immediateRender) {
                        if (0 === this._time) return
                    } else this._startAt.render(-1, !0)
                }
            if (this._ease = l ? l instanceof T ? r.easeParams instanceof Array ? l.config.apply(l, r.easeParams) : l : "function" == typeof l ? new T(l, r.easeParams) : w[l] || D.defaultEase : D.defaultEase, this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], n ? n[t] : null) && (e = !0);
            else e = this._initProps(this.target, this._propLookup, this._siblings, n);
            if (e && D._onPluginEvent("_onInitAllProps", this), n && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), r.runBackwards)
                for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
            this._onUpdate = r.onUpdate, this._initted = !0
        }, r._initProps = function(e, i, s, r) {
            var n, a, o, l, h, _;
            if (null == e) return !1;
            this.vars.css || e.style && e !== t && e.nodeType && N.css && this.vars.autoCSS !== !1 && I(this.vars, e);
            for (n in this.vars) {
                if (_ = this.vars[n], F[n]) _ && (_ instanceof Array || _.push && m(_)) && -1 !== _.join("").indexOf("{self}") && (this.vars[n] = _ = this._swapSelfInParams(_, this));
                else if (N[n] && (l = new N[n])._onInitTween(e, this.vars[n], this)) {
                    for (this._firstPT = h = {
                            _next: this._firstPT,
                            t: l,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: !0,
                            n: n,
                            pg: !0,
                            pr: l._priority
                        }, a = l._overwriteProps.length; --a > -1;) i[l._overwriteProps[a]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (o = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
                } else this._firstPT = i[n] = h = {
                    _next: this._firstPT,
                    t: e,
                    p: n,
                    f: "function" == typeof e[n],
                    n: n,
                    pg: !1,
                    pr: 0
                }, h.s = h.f ? e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(e[n]), h.c = "string" == typeof _ && "=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * Number(_.substr(2)) : Number(_) - h.s || 0;
                h && h._next && (h._next._prev = h)
            }
            return r && this._kill(r, e) ? this._initProps(e, i, s, r) : this._overwrite > 1 && this._firstPT && s.length > 1 && q(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, r)) : o
        }, r.render = function(t, e, i) {
            var s, r, n, a, o = this._time,
                l = this._duration;
            if (t >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, r = "onComplete"), 0 === l && (a = this._rawPrevTime, (0 === t || 0 > a || a === h) && a !== t && (i = !0, a > h && (r = "onReverseComplete")), this._rawPrevTime = a = !e || t ? t : h);
            else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && this._rawPrevTime > h) && (r = "onReverseComplete", s = this._reversed), 0 > t ? (this._active = !1, 0 === l && (this._rawPrevTime >= 0 && (i = !0), this._rawPrevTime = a = !e || t ? t : h)) : this._initted || (i = !0);
            else if (this._totalTime = this._time = t, this._easeType) {
                var _ = t / l,
                    u = this._easeType,
                    m = this._easePower;
                (1 === u || 3 === u && _ >= .5) && (_ = 1 - _), 3 === u && (_ *= 2), 1 === m ? _ *= _ : 2 === m ? _ *= _ * _ : 3 === m ? _ *= _ * _ * _ : 4 === m && (_ *= _ * _ * _ * _), this.ratio = 1 === u ? 1 - _ : 2 === u ? _ : .5 > t / l ? _ / 2 : 1 - _ / 2
            } else this.ratio = this._ease.getRatio(t / l);
            if (this._time !== o || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    this._time && !s ? this.ratio = this._ease.getRatio(this._time / l) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || g))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
                this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || i && 0 === this._time && 0 === o || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || g)), r && (this._gc || (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || g), 0 === l && this._rawPrevTime === h && a !== h && (this._rawPrevTime = 0)))
            }
        }, r._kill = function(t, e) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : D.selector(e) || e;
            var i, s, r, n, a, o, l, h;
            if ((m(e) || E(e)) && "number" != typeof e[0])
                for (i = e.length; --i > -1;) this._kill(t, e[i]) && (o = !0);
            else {
                if (this._targets) {
                    for (i = this._targets.length; --i > -1;)
                        if (e === this._targets[i]) {
                            a = this._propLookup[i] || {}, this._overwrittenProps = this._overwrittenProps || [], s = this._overwrittenProps[i] = t ? this._overwrittenProps[i] || {} : "all";
                            break
                        }
                } else {
                    if (e !== this.target) return !1;
                    a = this._propLookup, s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (a) {
                    l = t || a, h = t !== s && "all" !== s && t !== a && ("object" != typeof t || !t._tempKill);
                    for (r in l)(n = a[r]) && (n.pg && n.t._kill(l) && (o = !0), n.pg && 0 !== n.t._overwriteProps.length || (n._prev ? n._prev._next = n._next : n === this._firstPT && (this._firstPT = n._next), n._next && (n._next._prev = n._prev), n._next = n._prev = null), delete a[r]), h && (s[r] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return o
        }, r.invalidate = function() {
            return this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._startAt = null, this._initted = this._active = this._notifyPluginsOfEnabled = !1, this._propLookup = this._targets ? {} : [], this
        }, r._enabled = function(t, e) {
            if (a || n.wake(), t && this._gc) {
                var i, s = this._targets;
                if (s)
                    for (i = s.length; --i > -1;) this._siblings[i] = B(s[i], this, !0);
                else this._siblings = B(this.target, this, !0)
            }
            return x.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? D._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
        }, D.to = function(t, e, i) {
            return new D(t, e, i)
        }, D.from = function(t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new D(t, e, i)
        }, D.fromTo = function(t, e, i, s) {
            return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new D(t, e, s)
        }, D.delayedCall = function(t, e, i, s, r) {
            return new D(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                onCompleteScope: s,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                onReverseCompleteScope: s,
                immediateRender: !1,
                useFrames: r,
                overwrite: 0
            })
        }, D.set = function(t, e) {
            return new D(t, 0, e)
        }, D.getTweensOf = function(t, e) {
            if (null == t) return [];
            t = "string" != typeof t ? t : D.selector(t) || t;
            var i, s, r, n;
            if ((m(t) || E(t)) && "number" != typeof t[0]) {
                for (i = t.length, s = []; --i > -1;) s = s.concat(D.getTweensOf(t[i], e));
                for (i = s.length; --i > -1;)
                    for (n = s[i], r = i; --r > -1;) n === s[r] && s.splice(i, 1)
            } else
                for (s = B(t).concat(), i = s.length; --i > -1;)(s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
            return s
        }, D.killTweensOf = D.killDelayedCallsTo = function(t, e, i) {
            "object" == typeof e && (i = e, e = !1);
            for (var s = D.getTweensOf(t, e), r = s.length; --r > -1;) s[r]._kill(i, t)
        };
        var M = d("plugins.TweenPlugin", function(t, e) {
            this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = M.prototype
        }, !0);
        if (r = M.prototype, M.version = "1.10.1", M.API = 2, r._firstPT = null, r._addTween = function(t, e, i, s, r, n) {
                var a, o;
                return null != s && (a = "number" == typeof s || "=" !== s.charAt(1) ? Number(s) - i : parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2))) ? (this._firstPT = o = {
                    _next: this._firstPT,
                    t: t,
                    p: e,
                    s: i,
                    c: a,
                    f: "function" == typeof t[e],
                    n: r || e,
                    r: n
                }, o._next && (o._next._prev = o), o) : void 0
            }, r.setRatio = function(t) {
                for (var e, i = this._firstPT, s = 1e-6; i;) e = i.c * t + i.s, i.r ? e = 0 | e + (e > 0 ? .5 : -.5) : s > e && e > -s && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
            }, r._kill = function(t) {
                var e, i = this._overwriteProps,
                    s = this._firstPT;
                if (null != t[this._propName]) this._overwriteProps = [];
                else
                    for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                for (; s;) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
                return !1
            }, r._roundProps = function(t, e) {
                for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
            }, D._onPluginEvent = function(t, e) {
                var i, s, r, n, a, o = e._firstPT;
                if ("_onInitAllProps" === t) {
                    for (; o;) {
                        for (a = o._next, s = r; s && s.pr > o.pr;) s = s._next;
                        (o._prev = s ? s._prev : n) ? o._prev._next = o: r = o, (o._next = s) ? s._prev = o : n = o, o = a
                    }
                    o = e._firstPT = r
                }
                for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
                return i
            }, M.activate = function(t) {
                for (var e = t.length; --e > -1;) t[e].API === M.API && (N[(new t[e])._propName] = t[e]);
                return !0
            }, c.plugin = function(t) {
                if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                var e, i = t.propName,
                    s = t.priority || 0,
                    r = t.overwriteProps,
                    n = {
                        init: "_onInitTween",
                        set: "setRatio",
                        kill: "_kill",
                        round: "_roundProps",
                        initAll: "_onInitAllProps"
                    },
                    a = d("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                        M.call(this, i, s), this._overwriteProps = r || []
                    }, t.global === !0),
                    o = a.prototype = new M(i);
                o.constructor = a, a.API = t.API;
                for (e in n) "function" == typeof t[e] && (o[n[e]] = t[e]);
                return a.version = t.version, M.activate([a]), a
            }, i = t._gsQueue) {
            for (s = 0; i.length > s; s++) i[s]();
            for (r in f) f[r].func || t.console.log("GSAP encountered missing dependency: com.greensock." + r)
        }
        a = !1
    }
})(window);

/* GS CSS Plugin */
/*!
 * VERSION: beta 1.11.2
 * DATE: 2013-11-20
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
(window._gsQueue || (window._gsQueue = [])).push(function() {
    "use strict";
    window._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
        var i, s, r, n, a = function() {
                t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
            },
            o = {},
            l = a.prototype = new t("css");
        l.constructor = a, a.version = "1.11.2", a.API = 2, a.defaultTransformPerspective = 0, l = "px", a.suffixMap = {
            top: l,
            right: l,
            bottom: l,
            left: l,
            width: l,
            height: l,
            fontSize: l,
            padding: l,
            margin: l,
            perspective: l
        };
        var h, u, _, p, f, c, d = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
            m = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
            g = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
            v = /[^\d\-\.]/g,
            y = /(?:\d|\-|\+|=|#|\.)*/g,
            T = /opacity *= *([^)]*)/,
            x = /opacity:([^;]*)/,
            w = /alpha\(opacity *=.+?\)/i,
            b = /^(rgb|hsl)/,
            P = /([A-Z])/g,
            S = /-([a-z])/gi,
            R = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
            k = function(t, e) {
                return e.toUpperCase()
            },
            C = /(?:Left|Right|Width)/i,
            A = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
            O = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
            D = /,(?=[^\)]*(?:\(|$))/gi,
            M = Math.PI / 180,
            L = 180 / Math.PI,
            X = {},
            N = document,
            I = N.createElement("div"),
            F = N.createElement("img"),
            E = a._internals = {
                _specialProps: o
            },
            Y = navigator.userAgent,
            z = function() {
                var t, e = Y.indexOf("Android"),
                    i = N.createElement("div");
                return _ = -1 !== Y.indexOf("Safari") && -1 === Y.indexOf("Chrome") && (-1 === e || Number(Y.substr(e + 8, 1)) > 3), f = _ && 6 > Number(Y.substr(Y.indexOf("Version/") + 8, 1)), p = -1 !== Y.indexOf("Firefox"), /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y) && (c = parseFloat(RegExp.$1)), i.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", t = i.getElementsByTagName("a")[0], t ? /^0.55/.test(t.style.opacity) : !1
            }(),
            U = function(t) {
                return T.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
            },
            B = function(t) {
                window.console && console.log(t)
            },
            j = "",
            V = "",
            q = function(t, e) {
                e = e || I;
                var i, s, r = e.style;
                if (void 0 !== r[t]) return t;
                for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; --s > -1 && void 0 === r[i[s] + t];);
                return s >= 0 ? (V = 3 === s ? "ms" : i[s], j = "-" + V.toLowerCase() + "-", V + t) : null
            },
            W = N.defaultView ? N.defaultView.getComputedStyle : function() {},
            Q = a.getStyle = function(t, e, i, s, r) {
                var n;
                return z || "opacity" !== e ? (!s && t.style[e] ? n = t.style[e] : (i = i || W(t, null)) ? (t = i.getPropertyValue(e.replace(P, "-$1").toLowerCase()), n = t || i.length ? t : i[e]) : t.currentStyle && (n = t.currentStyle[e]), null == r || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : r) : U(t)
            },
            Z = function(t, e, i, s, r) {
                if ("px" === s || !s) return i;
                if ("auto" === s || !i) return 0;
                var n, a = C.test(e),
                    o = t,
                    l = I.style,
                    h = 0 > i;
                return h && (i = -i), "%" === s && -1 !== e.indexOf("border") ? n = i / 100 * (a ? t.clientWidth : t.clientHeight) : (l.cssText = "border:0 solid red;position:" + Q(t, "position") + ";line-height:0;", "%" !== s && o.appendChild ? l[a ? "borderLeftWidth" : "borderTopWidth"] = i + s : (o = t.parentNode || N.body, l[a ? "width" : "height"] = i + s), o.appendChild(I), n = parseFloat(I[a ? "offsetWidth" : "offsetHeight"]), o.removeChild(I), 0 !== n || r || (n = Z(t, e, i, s, !0))), h ? -n : n
            },
            H = function(t, e, i) {
                if ("absolute" !== Q(t, "position", i)) return 0;
                var s = "left" === e ? "Left" : "Top",
                    r = Q(t, "margin" + s, i);
                return t["offset" + s] - (Z(t, e, parseFloat(r), r.replace(y, "")) || 0)
            },
            $ = function(t, e) {
                var i, s, r = {};
                if (e = e || W(t, null))
                    if (i = e.length)
                        for (; --i > -1;) r[e[i].replace(S, k)] = e.getPropertyValue(e[i]);
                    else
                        for (i in e) r[i] = e[i];
                else if (e = t.currentStyle || t.style)
                    for (i in e) "string" == typeof i && void 0 !== r[i] && (r[i.replace(S, k)] = e[i]);
                return z || (r.opacity = U(t)), s = be(t, e, !1), r.rotation = s.rotation, r.skewX = s.skewX, r.scaleX = s.scaleX, r.scaleY = s.scaleY, r.x = s.x, r.y = s.y, we && (r.z = s.z, r.rotationX = s.rotationX, r.rotationY = s.rotationY, r.scaleZ = s.scaleZ), r.filters && delete r.filters, r
            },
            G = function(t, e, i, s, r) {
                var n, a, o, l = {},
                    h = t.style;
                for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (l[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(v, "") ? n : 0 : H(t, a), void 0 !== h[a] && (o = new _e(h, a, h[a], o)));
                if (s)
                    for (a in s) "className" !== a && (l[a] = s[a]);
                return {
                    difs: l,
                    firstMPT: o
                }
            },
            K = {
                width: ["Left", "Right"],
                height: ["Top", "Bottom"]
            },
            J = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
            te = function(t, e, i) {
                var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                    r = K[e],
                    n = r.length;
                for (i = i || W(t, null); --n > -1;) s -= parseFloat(Q(t, "padding" + r[n], i, !0)) || 0, s -= parseFloat(Q(t, "border" + r[n] + "Width", i, !0)) || 0;
                return s
            },
            ee = function(t, e) {
                (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
                var i = t.split(" "),
                    s = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                    r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                return null == r ? r = "0" : "center" === r && (r = "50%"), ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"), e && (e.oxp = -1 !== s.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === s.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(s.replace(v, "")), e.oy = parseFloat(r.replace(v, ""))), s + " " + r + (i.length > 2 ? " " + i[2] : "")
            },
            ie = function(t, e) {
                return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
            },
            se = function(t, e) {
                return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * Number(t.substr(2)) + e : parseFloat(t)
            },
            re = function(t, e, i, s) {
                var r, n, a, o, l = 1e-6;
                return null == t ? o = e : "number" == typeof t ? o = t : (r = 360, n = t.split("_"), a = Number(n[0].replace(v, "")) * (-1 === t.indexOf("rad") ? 1 : L) - ("=" === t.charAt(1) ? 0 : e), n.length && (s && (s[i] = e + a), -1 !== t.indexOf("short") && (a %= r, a !== a % (r / 2) && (a = 0 > a ? a + r : a - r)), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * r) % r - (0 | a / r) * r : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (0 | a / r) * r)), o = e + a), l > o && o > -l && (o = 0), o
            },
            ne = {
                aqua: [0, 255, 255],
                lime: [0, 255, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                fuchsia: [255, 0, 255],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255, 192, 203],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0]
            },
            ae = function(t, e, i) {
                return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
            },
            oe = function(t) {
                var e, i, s, r, n, a;
                return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ne[t] ? ne[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), s = t.charAt(3), t = "#" + e + e + i + i + s + s), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(d), r = Number(t[0]) % 360 / 360, n = Number(t[1]) / 100, a = Number(t[2]) / 100, i = .5 >= a ? a * (n + 1) : a + n - a * n, e = 2 * a - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = ae(r + 1 / 3, e, i), t[1] = ae(r, e, i), t[2] = ae(r - 1 / 3, e, i), t) : (t = t.match(d) || ne.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : ne.black
            },
            le = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (l in ne) le += "|" + l + "\\b";
        le = RegExp(le + ")", "gi");
        var he = function(t, e, i, s) {
                if (null == t) return function(t) {
                    return t
                };
                var r, n = e ? (t.match(le) || [""])[0] : "",
                    a = t.split(n).join("").match(g) || [],
                    o = t.substr(0, t.indexOf(a[0])),
                    l = ")" === t.charAt(t.length - 1) ? ")" : "",
                    h = -1 !== t.indexOf(" ") ? " " : ",",
                    u = a.length,
                    _ = u > 0 ? a[0].replace(d, "") : "";
                return u ? r = e ? function(t) {
                    var e, p, f, c;
                    if ("number" == typeof t) t += _;
                    else if (s && D.test(t)) {
                        for (c = t.replace(D, "|").split("|"), f = 0; c.length > f; f++) c[f] = r(c[f]);
                        return c.join(",")
                    }
                    if (e = (t.match(le) || [n])[0], p = t.split(e).join("").match(g) || [], f = p.length, u > f--)
                        for (; u > ++f;) p[f] = i ? p[0 | (f - 1) / 2] : a[f];
                    return o + p.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                } : function(t) {
                    var e, n, p;
                    if ("number" == typeof t) t += _;
                    else if (s && D.test(t)) {
                        for (n = t.replace(D, "|").split("|"), p = 0; n.length > p; p++) n[p] = r(n[p]);
                        return n.join(",")
                    }
                    if (e = t.match(g) || [], p = e.length, u > p--)
                        for (; u > ++p;) e[p] = i ? e[0 | (p - 1) / 2] : a[p];
                    return o + e.join(h) + l
                } : function(t) {
                    return t
                }
            },
            ue = function(t) {
                return t = t.split(","),
                    function(e, i, s, r, n, a, o) {
                        var l, h = (i + "").split(" ");
                        for (o = {}, l = 0; 4 > l; l++) o[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
                        return r.parse(e, o, n, a)
                    }
            },
            _e = (E._setPluginRatio = function(t) {
                this.plugin.setRatio(t);
                for (var e, i, s, r, n = this.data, a = n.proxy, o = n.firstMPT, l = 1e-6; o;) e = a[o.v], o.r ? e = e > 0 ? 0 | e + .5 : 0 | e - .5 : l > e && e > -l && (e = 0), o.t[o.p] = e, o = o._next;
                if (n.autoRotate && (n.autoRotate.rotation = a.rotation), 1 === t)
                    for (o = n.firstMPT; o;) {
                        if (i = o.t, i.type) {
                            if (1 === i.type) {
                                for (r = i.xs0 + i.s + i.xs1, s = 1; i.l > s; s++) r += i["xn" + s] + i["xs" + (s + 1)];
                                i.e = r
                            }
                        } else i.e = i.s + i.xs0;
                        o = o._next
                    }
            }, function(t, e, i, s, r) {
                this.t = t, this.p = e, this.v = i, this.r = r, s && (s._prev = this, this._next = s)
            }),
            pe = (E._parseToProxy = function(t, e, i, s, r, n) {
                var a, o, l, h, u, _ = s,
                    p = {},
                    f = {},
                    c = i._transform,
                    d = X;
                for (i._transform = null, X = e, s = u = i.parse(t, e, s, r), X = d, n && (i._transform = c, _ && (_._prev = null, _._prev && (_._prev._next = null))); s && s !== _;) {
                    if (1 >= s.type && (o = s.p, f[o] = s.s + s.c, p[o] = s.s, n || (h = new _e(s, "s", o, h, s.r), s.c = 0), 1 === s.type))
                        for (a = s.l; --a > 0;) l = "xn" + a, o = s.p + "_" + l, f[o] = s.data[l], p[o] = s[l], n || (h = new _e(s, l, o, h, s.rxp[l]));
                    s = s._next
                }
                return {
                    proxy: p,
                    end: f,
                    firstMPT: h,
                    pt: u
                }
            }, E.CSSPropTween = function(t, e, s, r, a, o, l, h, u, _, p) {
                this.t = t, this.p = e, this.s = s, this.c = r, this.n = l || e, t instanceof pe || n.push(this.n), this.r = h, this.type = o || 0, u && (this.pr = u, i = !0), this.b = void 0 === _ ? s : _, this.e = void 0 === p ? s + r : p, a && (this._next = a, a._prev = this)
            }),
            fe = a.parseComplex = function(t, e, i, s, r, n, a, o, l, u) {
                i = i || n || "", a = new pe(t, e, 0, 0, a, u ? 2 : 1, null, !1, o, i, s), s += "";
                var _, p, f, c, g, v, y, T, x, w, P, S, R = i.split(", ").join(",").split(" "),
                    k = s.split(", ").join(",").split(" "),
                    C = R.length,
                    A = h !== !1;
                for ((-1 !== s.indexOf(",") || -1 !== i.indexOf(",")) && (R = R.join(" ").replace(D, ", ").split(" "), k = k.join(" ").replace(D, ", ").split(" "), C = R.length), C !== k.length && (R = (n || "").split(" "), C = R.length), a.plugin = l, a.setRatio = u, _ = 0; C > _; _++)
                    if (c = R[_], g = k[_], T = parseFloat(c), T || 0 === T) a.appendXtra("", T, ie(g, T), g.replace(m, ""), A && -1 !== g.indexOf("px"), !0);
                    else if (r && ("#" === c.charAt(0) || ne[c] || b.test(c))) S = "," === g.charAt(g.length - 1) ? ")," : ")", c = oe(c), g = oe(g), x = c.length + g.length > 6, x && !z && 0 === g[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(k[_]).join("transparent")) : (z || (x = !1), a.appendXtra(x ? "rgba(" : "rgb(", c[0], g[0] - c[0], ",", !0, !0).appendXtra("", c[1], g[1] - c[1], ",", !0).appendXtra("", c[2], g[2] - c[2], x ? "," : S, !0), x && (c = 4 > c.length ? 1 : c[3], a.appendXtra("", c, (4 > g.length ? 1 : g[3]) - c, S, !1)));
                else if (v = c.match(d)) {
                    if (y = g.match(m), !y || y.length !== v.length) return a;
                    for (f = 0, p = 0; v.length > p; p++) P = v[p], w = c.indexOf(P, f), a.appendXtra(c.substr(f, w - f), Number(P), ie(y[p], P), "", A && "px" === c.substr(w + P.length, 2), 0 === p), f = w + P.length;
                    a["xs" + a.l] += c.substr(f)
                } else a["xs" + a.l] += a.l ? " " + c : c;
                if (-1 !== s.indexOf("=") && a.data) {
                    for (S = a.xs0 + a.data.s, _ = 1; a.l > _; _++) S += a["xs" + _] + a.data["xn" + _];
                    a.e = S + a["xs" + _]
                }
                return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
            },
            ce = 9;
        for (l = pe.prototype, l.l = l.pr = 0; --ce > 0;) l["xn" + ce] = 0, l["xs" + ce] = "";
        l.xs0 = "", l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null, l.appendXtra = function(t, e, i, s, r, n) {
            var a = this,
                o = a.l;
            return a["xs" + o] += n && o ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = s || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = r, a["xn" + o] = e, a.plugin || (a.xfirst = new pe(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
                s: e + i
            }, a.rxp = {}, a.s = e, a.c = i, a.r = r, a)) : (a["xs" + o] += e + (s || ""), a)
        };
        var de = function(t, e) {
                e = e || {}, this.p = e.prefix ? q(t) || t : t, o[t] = o[this.p] = this, this.format = e.formatter || he(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
            },
            me = E._registerComplexSpecialProp = function(t, e, i) {
                "object" != typeof e && (e = {
                    parser: i
                });
                var s, r, n = t.split(","),
                    a = e.defaultValue;
                for (i = i || [a], s = 0; n.length > s; s++) e.prefix = 0 === s && e.prefix, e.defaultValue = i[s] || a, r = new de(n[s], e)
            },
            ge = function(t) {
                if (!o[t]) {
                    var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                    me(t, {
                        parser: function(t, i, s, r, n, a, l) {
                            var h = (window.GreenSockGlobals || window).com.greensock.plugins[e];
                            return h ? (h._cssRegister(), o[s].parse(t, i, s, r, n, a, l)) : (B("Error: " + e + " js file not loaded."), n)
                        }
                    })
                }
            };
        l = de.prototype, l.parseComplex = function(t, e, i, s, r, n) {
            var a, o, l, h, u, _, p = this.keyword;
            if (this.multi && (D.test(i) || D.test(e) ? (o = e.replace(D, "|").split("|"), l = i.replace(D, "|").split("|")) : p && (o = [e], l = [i])), l) {
                for (h = l.length > o.length ? l.length : o.length, a = 0; h > a; a++) e = o[a] = o[a] || this.dflt, i = l[a] = l[a] || this.dflt, p && (u = e.indexOf(p), _ = i.indexOf(p), u !== _ && (i = -1 === _ ? l : o, i[a] += " " + p));
                e = o.join(", "), i = l.join(", ")
            }
            return fe(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, r, n)
        }, l.parse = function(t, e, i, s, n, a) {
            return this.parseComplex(t.style, this.format(Q(t, this.p, r, !1, this.dflt)), this.format(e), n, a)
        }, a.registerSpecialProp = function(t, e, i) {
            me(t, {
                parser: function(t, s, r, n, a, o) {
                    var l = new pe(t, r, 0, 0, a, 2, r, !1, i);
                    return l.plugin = o, l.setRatio = e(t, s, n._tween, r), l
                },
                priority: i
            })
        };
        var ve = "scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),
            ye = q("transform"),
            Te = j + "transform",
            xe = q("transformOrigin"),
            we = null !== q("perspective"),
            be = function(t, e, i, s) {
                if (t._gsTransform && i && !s) return t._gsTransform;
                var r, n, o, l, h, u, _, p, f, c, d, m, g, v = i ? t._gsTransform || {
                        skewY: 0
                    } : {
                        skewY: 0
                    },
                    y = 0 > v.scaleX,
                    T = 2e-5,
                    x = 1e5,
                    w = 179.99,
                    b = w * M,
                    P = we ? parseFloat(Q(t, xe, e, !1, "0 0 0").split(" ")[2]) || v.zOrigin || 0 : 0;
                for (ye ? r = Q(t, Te, e, !0) : t.currentStyle && (r = t.currentStyle.filter.match(A), r = r && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), v.x || 0, v.y || 0].join(",") : ""), n = (r || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], o = n.length; --o > -1;) l = Number(n[o]), n[o] = (h = l - (l |= 0)) ? (0 | h * x + (0 > h ? -.5 : .5)) / x + l : l;
                if (16 === n.length) {
                    var S = n[8],
                        R = n[9],
                        k = n[10],
                        C = n[12],
                        O = n[13],
                        D = n[14];
                    if (v.zOrigin && (D = -v.zOrigin, C = S * D - n[12], O = R * D - n[13], D = k * D + v.zOrigin - n[14]), !i || s || null == v.rotationX) {
                        var X, N, I, F, E, Y, z, U = n[0],
                            B = n[1],
                            j = n[2],
                            V = n[3],
                            q = n[4],
                            W = n[5],
                            Z = n[6],
                            H = n[7],
                            $ = n[11],
                            G = Math.atan2(Z, k),
                            K = -b > G || G > b;
                        v.rotationX = G * L, G && (F = Math.cos(-G), E = Math.sin(-G), X = q * F + S * E, N = W * F + R * E, I = Z * F + k * E, S = q * -E + S * F, R = W * -E + R * F, k = Z * -E + k * F, $ = H * -E + $ * F, q = X, W = N, Z = I), G = Math.atan2(S, U), v.rotationY = G * L, G && (Y = -b > G || G > b, F = Math.cos(-G), E = Math.sin(-G), X = U * F - S * E, N = B * F - R * E, I = j * F - k * E, R = B * E + R * F, k = j * E + k * F, $ = V * E + $ * F, U = X, B = N, j = I), G = Math.atan2(B, W), v.rotation = G * L, G && (z = -b > G || G > b, F = Math.cos(-G), E = Math.sin(-G), U = U * F + q * E, N = B * F + W * E, W = B * -E + W * F, Z = j * -E + Z * F, B = N), z && K ? v.rotation = v.rotationX = 0 : z && Y ? v.rotation = v.rotationY = 0 : Y && K && (v.rotationY = v.rotationX = 0), v.scaleX = (0 | Math.sqrt(U * U + B * B) * x + .5) / x, v.scaleY = (0 | Math.sqrt(W * W + R * R) * x + .5) / x, v.scaleZ = (0 | Math.sqrt(Z * Z + k * k) * x + .5) / x, v.skewX = 0, v.perspective = $ ? 1 / (0 > $ ? -$ : $) : 0, v.x = C, v.y = O, v.z = D
                    }
                } else if (!(we && !s && n.length && v.x === n[4] && v.y === n[5] && (v.rotationX || v.rotationY) || void 0 !== v.x && "none" === Q(t, "display", e))) {
                    var J = n.length >= 6,
                        te = J ? n[0] : 1,
                        ee = n[1] || 0,
                        ie = n[2] || 0,
                        se = J ? n[3] : 1;
                    v.x = n[4] || 0, v.y = n[5] || 0, u = Math.sqrt(te * te + ee * ee), _ = Math.sqrt(se * se + ie * ie), p = te || ee ? Math.atan2(ee, te) * L : v.rotation || 0, f = ie || se ? Math.atan2(ie, se) * L + p : v.skewX || 0, c = u - Math.abs(v.scaleX || 0), d = _ - Math.abs(v.scaleY || 0), Math.abs(f) > 90 && 270 > Math.abs(f) && (y ? (u *= -1, f += 0 >= p ? 180 : -180, p += 0 >= p ? 180 : -180) : (_ *= -1, f += 0 >= f ? 180 : -180)), m = (p - v.rotation) % 180, g = (f - v.skewX) % 180, (void 0 === v.skewX || c > T || -T > c || d > T || -T > d || m > -w && w > m && false | m * x || g > -w && w > g && false | g * x) && (v.scaleX = u, v.scaleY = _, v.rotation = p, v.skewX = f), we && (v.rotationX = v.rotationY = v.z = 0, v.perspective = parseFloat(a.defaultTransformPerspective) || 0, v.scaleZ = 1)
                }
                v.zOrigin = P;
                for (o in v) T > v[o] && v[o] > -T && (v[o] = 0);
                return i && (t._gsTransform = v), v
            },
            Pe = function(t) {
                var e, i, s = this.data,
                    r = -s.rotation * M,
                    n = r + s.skewX * M,
                    a = 1e5,
                    o = (0 | Math.cos(r) * s.scaleX * a) / a,
                    l = (0 | Math.sin(r) * s.scaleX * a) / a,
                    h = (0 | Math.sin(n) * -s.scaleY * a) / a,
                    u = (0 | Math.cos(n) * s.scaleY * a) / a,
                    _ = this.t.style,
                    p = this.t.currentStyle;
                if (p) {
                    i = l, l = -h, h = -i, e = p.filter, _.filter = "";
                    var f, d, m = this.t.offsetWidth,
                        g = this.t.offsetHeight,
                        v = "absolute" !== p.position,
                        x = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + l + ", M21=" + h + ", M22=" + u,
                        w = s.x,
                        b = s.y;
                    if (null != s.ox && (f = (s.oxp ? .01 * m * s.ox : s.ox) - m / 2, d = (s.oyp ? .01 * g * s.oy : s.oy) - g / 2, w += f - (f * o + d * l), b += d - (f * h + d * u)), v ? (f = m / 2, d = g / 2, x += ", Dx=" + (f - (f * o + d * l) + w) + ", Dy=" + (d - (f * h + d * u) + b) + ")") : x += ", sizingMethod='auto expand')", _.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(O, x) : x + " " + e, (0 === t || 1 === t) && 1 === o && 0 === l && 0 === h && 1 === u && (v && -1 === x.indexOf("Dx=0, Dy=0") || T.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(" && e.indexOf("Alpha")) && _.removeAttribute("filter")), !v) {
                        var P, S, R, k = 8 > c ? 1 : -1;
                        for (f = s.ieOffsetX || 0, d = s.ieOffsetY || 0, s.ieOffsetX = Math.round((m - ((0 > o ? -o : o) * m + (0 > l ? -l : l) * g)) / 2 + w), s.ieOffsetY = Math.round((g - ((0 > u ? -u : u) * g + (0 > h ? -h : h) * m)) / 2 + b), ce = 0; 4 > ce; ce++) S = J[ce], P = p[S], i = -1 !== P.indexOf("px") ? parseFloat(P) : Z(this.t, S, parseFloat(P), P.replace(y, "")) || 0, R = i !== s[S] ? 2 > ce ? -s.ieOffsetX : -s.ieOffsetY : 2 > ce ? f - s.ieOffsetX : d - s.ieOffsetY, _[S] = (s[S] = Math.round(i - R * (0 === ce || 2 === ce ? 1 : k))) + "px"
                    }
                }
            },
            Se = function() {
                var t, e, i, s, r, n, a, o, l, h, u, _, f, c, d, m, g, v, y, T, x, w, b, P = this.data,
                    S = this.t.style,
                    R = P.rotation * M,
                    k = P.scaleX,
                    C = P.scaleY,
                    A = P.scaleZ,
                    O = P.perspective;
                if (p) {
                    var D = 1e-4;
                    D > k && k > -D && (k = A = 2e-5), D > C && C > -D && (C = A = 2e-5), !O || P.z || P.rotationX || P.rotationY || (O = 0)
                }
                if (R || P.skewX) v = Math.cos(R), y = Math.sin(R), t = v, r = y, P.skewX && (R -= P.skewX * M, v = Math.cos(R), y = Math.sin(R)), e = -y, n = v;
                else {
                    if (!(P.rotationY || P.rotationX || 1 !== A || O)) return S[ye] = "translate3d(" + P.x + "px," + P.y + "px," + P.z + "px)" + (1 !== k || 1 !== C ? " scale(" + k + "," + C + ")" : ""), void 0;
                    t = n = 1, e = r = 0
                }
                u = 1, i = s = a = o = l = h = _ = f = c = 0, d = O ? -1 / O : 0, m = P.zOrigin, g = 1e5, R = P.rotationY * M, R && (v = Math.cos(R), y = Math.sin(R), l = u * -y, f = d * -y, i = t * y, a = r * y, u *= v, d *= v, t *= v, r *= v), R = P.rotationX * M, R && (v = Math.cos(R), y = Math.sin(R), T = e * v + i * y, x = n * v + a * y, w = h * v + u * y, b = c * v + d * y, i = e * -y + i * v, a = n * -y + a * v, u = h * -y + u * v, d = c * -y + d * v, e = T, n = x, h = w, c = b), 1 !== A && (i *= A, a *= A, u *= A, d *= A), 1 !== C && (e *= C, n *= C, h *= C, c *= C), 1 !== k && (t *= k, r *= k, l *= k, f *= k), m && (_ -= m, s = i * _, o = a * _, _ = u * _ + m), s = (T = (s += P.x) - (s |= 0)) ? (0 | T * g + (0 > T ? -.5 : .5)) / g + s : s, o = (T = (o += P.y) - (o |= 0)) ? (0 | T * g + (0 > T ? -.5 : .5)) / g + o : o, _ = (T = (_ += P.z) - (_ |= 0)) ? (0 | T * g + (0 > T ? -.5 : .5)) / g + _ : _, S[ye] = "matrix3d(" + [(0 | t * g) / g, (0 | r * g) / g, (0 | l * g) / g, (0 | f * g) / g, (0 | e * g) / g, (0 | n * g) / g, (0 | h * g) / g, (0 | c * g) / g, (0 | i * g) / g, (0 | a * g) / g, (0 | u * g) / g, (0 | d * g) / g, s, o, _, O ? 1 + -_ / O : 1].join(",") + ")"
            },
            Re = function() {
                var t, e, i, s, r, n, a, o, l, h = this.data,
                    u = this.t,
                    _ = u.style;
                p && (t = _.top ? "top" : _.bottom ? "bottom" : parseFloat(Q(u, "top", null, !1)) ? "bottom" : "top", e = Q(u, t, null, !1), i = parseFloat(e) || 0, s = e.substr((i + "").length) || "px", h._ffFix = !h._ffFix, _[t] = (h._ffFix ? i + .05 : i - .05) + s), h.rotation || h.skewX ? (r = h.rotation * M, n = r - h.skewX * M, a = 1e5, o = h.scaleX * a, l = h.scaleY * a, _[ye] = "matrix(" + (0 | Math.cos(r) * o) / a + "," + (0 | Math.sin(r) * o) / a + "," + (0 | Math.sin(n) * -l) / a + "," + (0 | Math.cos(n) * l) / a + "," + h.x + "," + h.y + ")") : _[ye] = "matrix(" + h.scaleX + ",0,0," + h.scaleY + "," + h.x + "," + h.y + ")"
            };
        me("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D", {
            parser: function(t, e, i, s, n, a, o) {
                if (s._transform) return n;
                var l, h, u, _, p, f, c, d = s._transform = be(t, r, !0, o.parseTransform),
                    m = t.style,
                    g = 1e-6,
                    v = ve.length,
                    y = o,
                    T = {};
                if ("string" == typeof y.transform && ye) u = m.cssText, m[ye] = y.transform, m.display = "block", l = be(t, null, !1), m.cssText = u;
                else if ("object" == typeof y) {
                    if (l = {
                            scaleX: se(null != y.scaleX ? y.scaleX : y.scale, d.scaleX),
                            scaleY: se(null != y.scaleY ? y.scaleY : y.scale, d.scaleY),
                            scaleZ: se(null != y.scaleZ ? y.scaleZ : y.scale, d.scaleZ),
                            x: se(y.x, d.x),
                            y: se(y.y, d.y),
                            z: se(y.z, d.z),
                            perspective: se(y.transformPerspective, d.perspective)
                        }, c = y.directionalRotation, null != c)
                        if ("object" == typeof c)
                            for (u in c) y[u] = c[u];
                        else y.rotation = c;
                    l.rotation = re("rotation" in y ? y.rotation : "shortRotation" in y ? y.shortRotation + "_short" : "rotationZ" in y ? y.rotationZ : d.rotation, d.rotation, "rotation", T), we && (l.rotationX = re("rotationX" in y ? y.rotationX : "shortRotationX" in y ? y.shortRotationX + "_short" : d.rotationX || 0, d.rotationX, "rotationX", T), l.rotationY = re("rotationY" in y ? y.rotationY : "shortRotationY" in y ? y.shortRotationY + "_short" : d.rotationY || 0, d.rotationY, "rotationY", T)), l.skewX = null == y.skewX ? d.skewX : re(y.skewX, d.skewX), l.skewY = null == y.skewY ? d.skewY : re(y.skewY, d.skewY), (h = l.skewY - d.skewY) && (l.skewX += h, l.rotation += h)
                }
                for (null != y.force3D && (d.force3D = y.force3D, f = !0), p = d.force3D || d.z || d.rotationX || d.rotationY || l.z || l.rotationX || l.rotationY || l.perspective, p || null == y.scale || (l.scaleZ = 1); --v > -1;) i = ve[v], _ = l[i] - d[i], (_ > g || -g > _ || null != X[i]) && (f = !0, n = new pe(d, i, d[i], _, n), i in T && (n.e = T[i]), n.xs0 = 0, n.plugin = a, s._overwriteProps.push(n.n));
                return _ = y.transformOrigin, (_ || we && p && d.zOrigin) && (ye ? (f = !0, i = xe, _ = (_ || Q(t, i, r, !1, "50% 50%")) + "", n = new pe(m, i, 0, 0, n, -1, "transformOrigin"), n.b = m[i], n.plugin = a, we ? (u = d.zOrigin, _ = _.split(" "), d.zOrigin = (_.length > 2 && (0 === u || "0px" !== _[2]) ? parseFloat(_[2]) : u) || 0, n.xs0 = n.e = m[i] = _[0] + " " + (_[1] || "50%") + " 0px", n = new pe(d, "zOrigin", 0, 0, n, -1, n.n), n.b = u, n.xs0 = n.e = d.zOrigin) : n.xs0 = n.e = m[i] = _) : ee(_ + "", d)), f && (s._transformType = p || 3 === this._transformType ? 3 : 2), n
            },
            prefix: !0
        }), me("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }), me("borderRadius", {
            defaultValue: "0px",
            parser: function(t, e, i, n, a) {
                e = this.format(e);
                var o, l, h, u, _, p, f, c, d, m, g, v, y, T, x, w, b = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                    P = t.style;
                for (d = parseFloat(t.offsetWidth), m = parseFloat(t.offsetHeight), o = e.split(" "), l = 0; b.length > l; l++) this.p.indexOf("border") && (b[l] = q(b[l])), _ = u = Q(t, b[l], r, !1, "0px"), -1 !== _.indexOf(" ") && (u = _.split(" "), _ = u[0], u = u[1]), p = h = o[l], f = parseFloat(_), v = _.substr((f + "").length), y = "=" === p.charAt(1), y ? (c = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), c *= parseFloat(p), g = p.substr((c + "").length - (0 > c ? 1 : 0)) || "") : (c = parseFloat(p), g = p.substr((c + "").length)), "" === g && (g = s[i] || v), g !== v && (T = Z(t, "borderLeft", f, v), x = Z(t, "borderTop", f, v), "%" === g ? (_ = 100 * (T / d) + "%", u = 100 * (x / m) + "%") : "em" === g ? (w = Z(t, "borderLeft", 1, "em"), _ = T / w + "em", u = x / w + "em") : (_ = T + "px", u = x + "px"), y && (p = parseFloat(_) + c + g, h = parseFloat(u) + c + g)), a = fe(P, b[l], _ + " " + u, p + " " + h, !1, "0px", a);
                return a
            },
            prefix: !0,
            formatter: he("0px 0px 0px 0px", !1, !0)
        }), me("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(t, e, i, s, n, a) {
                var o, l, h, u, _, p, f = "background-position",
                    d = r || W(t, null),
                    m = this.format((d ? c ? d.getPropertyValue(f + "-x") + " " + d.getPropertyValue(f + "-y") : d.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                    g = this.format(e);
                if (-1 !== m.indexOf("%") != (-1 !== g.indexOf("%")) && (p = Q(t, "backgroundImage").replace(R, ""), p && "none" !== p)) {
                    for (o = m.split(" "), l = g.split(" "), F.setAttribute("src", p), h = 2; --h > -1;) m = o[h], u = -1 !== m.indexOf("%"), u !== (-1 !== l[h].indexOf("%")) && (_ = 0 === h ? t.offsetWidth - F.width : t.offsetHeight - F.height, o[h] = u ? parseFloat(m) / 100 * _ + "px" : 100 * (parseFloat(m) / _) + "%");
                    m = o.join(" ")
                }
                return this.parseComplex(t.style, m, g, n, a)
            },
            formatter: ee
        }), me("backgroundSize", {
            defaultValue: "0 0",
            formatter: ee
        }), me("perspective", {
            defaultValue: "0px",
            prefix: !0
        }), me("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }), me("transformStyle", {
            prefix: !0
        }), me("backfaceVisibility", {
            prefix: !0
        }), me("userSelect", {
            prefix: !0
        }), me("margin", {
            parser: ue("marginTop,marginRight,marginBottom,marginLeft")
        }), me("padding", {
            parser: ue("paddingTop,paddingRight,paddingBottom,paddingLeft")
        }), me("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(t, e, i, s, n, a) {
                var o, l, h;
                return 9 > c ? (l = t.currentStyle, h = 8 > c ? " " : ",", o = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (o = this.format(Q(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, n, a)
            }
        }), me("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }), me("autoRound,strictUnits", {
            parser: function(t, e, i, s, r) {
                return r
            }
        }), me("border", {
            defaultValue: "0px solid #000",
            parser: function(t, e, i, s, n, a) {
                return this.parseComplex(t.style, this.format(Q(t, "borderTopWidth", r, !1, "0px") + " " + Q(t, "borderTopStyle", r, !1, "solid") + " " + Q(t, "borderTopColor", r, !1, "#000")), this.format(e), n, a)
            },
            color: !0,
            formatter: function(t) {
                var e = t.split(" ");
                return e[0] + " " + (e[1] || "solid") + " " + (t.match(le) || ["#000"])[0]
            }
        }), me("float,cssFloat,styleFloat", {
            parser: function(t, e, i, s, r) {
                var n = t.style,
                    a = "cssFloat" in n ? "cssFloat" : "styleFloat";
                return new pe(n, a, 0, 0, r, -1, i, !1, 0, n[a], e)
            }
        });
        var ke = function(t) {
            var e, i = this.t,
                s = i.filter || Q(this.data, "filter"),
                r = 0 | this.s + this.c * t;
            100 === r && (-1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") && -1 === s.indexOf("oader(") ? (i.removeAttribute("filter"), e = !Q(this.data, "filter")) : (i.filter = s.replace(w, ""), e = !0)), e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + r + ")"), -1 === s.indexOf("opacity") ? 0 === r && this.xn1 || (i.filter = s + " alpha(opacity=" + r + ")") : i.filter = s.replace(T, "opacity=" + r))
        };
        me("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(t, e, i, s, n, a) {
                var o = parseFloat(Q(t, "opacity", r, !1, "1")),
                    l = t.style,
                    h = "autoAlpha" === i;
                return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), h && 1 === o && "hidden" === Q(t, "visibility", r) && 0 !== e && (o = 0), z ? n = new pe(l, "opacity", o, e - o, n) : (n = new pe(l, "opacity", 100 * o, 100 * (e - o), n), n.xn1 = h ? 1 : 0, l.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = a, n.setRatio = ke), h && (n = new pe(l, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), n.xs0 = "inherit", s._overwriteProps.push(n.n), s._overwriteProps.push(i)), n
            }
        });
        var Ce = function(t, e) {
                e && (t.removeProperty ? t.removeProperty(e.replace(P, "-$1").toLowerCase()) : t.removeAttribute(e))
            },
            Ae = function(t) {
                if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                    this.t.className = 0 === t ? this.b : this.e;
                    for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Ce(i, e.p), e = e._next;
                    1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                } else this.t.className !== this.e && (this.t.className = this.e)
            };
        me("className", {
            parser: function(t, e, s, n, a, o, l) {
                var h, u, _, p, f, c = t.className,
                    d = t.style.cssText;
                if (a = n._classNamePT = new pe(t, s, 0, 0, a, 2), a.setRatio = Ae, a.pr = -11, i = !0, a.b = c, u = $(t, r), _ = t._gsClassPT) {
                    for (p = {}, f = _.data; f;) p[f.p] = 1, f = f._next;
                    _.setRatio(1)
                }
                return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : c.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), n._tween._duration && (t.className = a.e, h = G(t, u, $(t), l, p), t.className = c, a.data = h.firstMPT, t.style.cssText = d, a = a.xfirst = n.parse(t, h.difs, a, o)), a
            }
        });
        var Oe = function(t) {
            if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var e, i, s, r, n = this.t.style,
                    a = o.transform.parse;
                if ("all" === this.e) n.cssText = "", r = !0;
                else
                    for (e = this.e.split(","), s = e.length; --s > -1;) i = e[s], o[i] && (o[i].parse === a ? r = !0 : i = "transformOrigin" === i ? xe : o[i].p), Ce(n, i);
                r && (Ce(n, ye), this.t._gsTransform && delete this.t._gsTransform)
            }
        };
        for (me("clearProps", {
                parser: function(t, e, s, r, n) {
                    return n = new pe(t, s, 0, 0, n, 2), n.setRatio = Oe, n.e = e, n.pr = -10, n.data = r._tween, i = !0, n
                }
            }), l = "bezier,throwProps,physicsProps,physics2D".split(","), ce = l.length; ce--;) ge(l[ce]);
        l = a.prototype, l._firstPT = null, l._onInitTween = function(t, e, o) {
            if (!t.nodeType) return !1;
            this._target = t, this._tween = o, this._vars = e, h = e.autoRound, i = !1, s = e.suffixMap || a.suffixMap, r = W(t, ""), n = this._overwriteProps;
            var l, p, c, d, m, g, v, y, T, w = t.style;
            if (u && "" === w.zIndex && (l = Q(t, "zIndex", r), ("auto" === l || "" === l) && (w.zIndex = 0)), "string" == typeof e && (d = w.cssText, l = $(t, r), w.cssText = d + ";" + e, l = G(t, l, $(t)).difs, !z && x.test(e) && (l.opacity = parseFloat(RegExp.$1)), e = l, w.cssText = d), this._firstPT = p = this.parse(t, e, null), this._transformType) {
                for (T = 3 === this._transformType, ye ? _ && (u = !0, "" === w.zIndex && (v = Q(t, "zIndex", r), ("auto" === v || "" === v) && (w.zIndex = 0)), f && (w.WebkitBackfaceVisibility = this._vars.WebkitBackfaceVisibility || (T ? "visible" : "hidden"))) : w.zoom = 1, c = p; c && c._next;) c = c._next;
                y = new pe(t, "transform", 0, 0, null, 2), this._linkCSSP(y, null, c), y.setRatio = T && we ? Se : ye ? Re : Pe, y.data = this._transform || be(t, r, !0), n.pop()
            }
            if (i) {
                for (; p;) {
                    for (g = p._next, c = d; c && c.pr > p.pr;) c = c._next;
                    (p._prev = c ? c._prev : m) ? p._prev._next = p: d = p, (p._next = c) ? c._prev = p : m = p, p = g
                }
                this._firstPT = d
            }
            return !0
        }, l.parse = function(t, e, i, n) {
            var a, l, u, _, p, f, c, d, m, g, v = t.style;
            for (a in e) f = e[a], l = o[a], l ? i = l.parse(t, f, a, this, i, n, e) : (p = Q(t, a, r) + "", m = "string" == typeof f, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || m && b.test(f) ? (m || (f = oe(f), f = (f.length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"), i = fe(v, a, p, f, !0, "transparent", i, 0, n)) : !m || -1 === f.indexOf(" ") && -1 === f.indexOf(",") ? (u = parseFloat(p), c = u || 0 === u ? p.substr((u + "").length) : "", ("" === p || "auto" === p) && ("width" === a || "height" === a ? (u = te(t, a, r), c = "px") : "left" === a || "top" === a ? (u = H(t, a, r), c = "px") : (u = "opacity" !== a ? 0 : 1, c = "")), g = m && "=" === f.charAt(1), g ? (_ = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), _ *= parseFloat(f), d = f.replace(y, "")) : (_ = parseFloat(f), d = m ? f.substr((_ + "").length) || "" : ""), "" === d && (d = s[a] || c), f = _ || 0 === _ ? (g ? _ + u : _) + d : e[a], c !== d && "" !== d && (_ || 0 === _) && (u || 0 === u) && (u = Z(t, a, u, c), "%" === d ? (u /= Z(t, a, 100, "%") / 100, u > 100 && (u = 100), e.strictUnits !== !0 && (p = u + "%")) : "em" === d ? u /= Z(t, a, 1, "em") : (_ = Z(t, a, _, d), d = "px"), g && (_ || 0 === _) && (f = _ + u + d)), g && (_ += u), !u && 0 !== u || !_ && 0 !== _ ? void 0 !== v[a] && (f || "NaN" != f + "" && null != f) ? (i = new pe(v, a, _ || u || 0, 0, i, -1, a, !1, 0, p, f), i.xs0 = "none" !== f || "display" !== a && -1 === a.indexOf("Style") ? f : p) : B("invalid " + a + " tween value: " + e[a]) : (i = new pe(v, a, u, _ - u, i, 0, a, h !== !1 && ("px" === d || "zIndex" === a), 0, p, f), i.xs0 = d)) : i = fe(v, a, p, f, !0, null, i, 0, n)), n && i && !i.plugin && (i.plugin = n);
            return i
        }, l.setRatio = function(t) {
            var e, i, s, r = this._firstPT,
                n = 1e-6;
            if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                    for (; r;) {
                        if (e = r.c * t + r.s, r.r ? e = e > 0 ? 0 | e + .5 : 0 | e - .5 : n > e && e > -n && (e = 0), r.type)
                            if (1 === r.type)
                                if (s = r.l, 2 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                else if (3 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                        else if (4 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                        else if (5 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                        else {
                            for (i = r.xs0 + e + r.xs1, s = 1; r.l > s; s++) i += r["xn" + s] + r["xs" + (s + 1)];
                            r.t[r.p] = i
                        } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                        else r.t[r.p] = e + r.xs0;
                        r = r._next
                    } else
                        for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                else
                    for (; r;) 2 !== r.type ? r.t[r.p] = r.e : r.setRatio(t), r = r._next
        }, l._enableTransforms = function(t) {
            this._transformType = t || 3 === this._transformType ? 3 : 2, this._transform = this._transform || be(this._target, r, !0)
        }, l._linkCSSP = function(t, e, i, s) {
            return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, s = !0), i ? i._next = t : s || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
        }, l._kill = function(e) {
            var i, s, r, n = e;
            if (e.autoAlpha || e.alpha) {
                n = {};
                for (s in e) n[s] = e[s];
                n.opacity = 1, n.autoAlpha && (n.visibility = 1)
            }
            return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, n)
        };
        var De = function(t, e, i) {
            var s, r, n, a;
            if (t.slice)
                for (r = t.length; --r > -1;) De(t[r], e, i);
            else
                for (s = t.childNodes, r = s.length; --r > -1;) n = s[r], a = n.type, n.style && (e.push($(n)), i && i.push(n)), 1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || De(n, e, i)
        };
        return a.cascadeTo = function(t, i, s) {
            var r, n, a, o = e.to(t, i, s),
                l = [o],
                h = [],
                u = [],
                _ = [],
                p = e._internals.reservedProps;
            for (t = o._targets || o.target, De(t, h, _), o.render(i, !0), De(t, u), o.render(0, !0), o._enabled(!0), r = _.length; --r > -1;)
                if (n = G(_[r], h[r], u[r]), n.firstMPT) {
                    n = n.difs;
                    for (a in s) p[a] && (n[a] = s[a]);
                    l.push(e.to(_[r], i, n))
                }
            return l
        }, t.activate([a]), a
    }, !0)
}), window._gsDefine && window._gsQueue.pop()();

/* GS Easing */
/*!
 * VERSION: beta 1.9.3
 * DATE: 2013-04-02
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
(window._gsQueue || (window._gsQueue = [])).push(function() {
    "use strict";
    window._gsDefine("easing.Back", ["easing.Ease"], function(t) {
        var e, i, s, r = window.GreenSockGlobals || window,
            n = r.com.greensock,
            a = 2 * Math.PI,
            o = Math.PI / 2,
            h = n._class,
            l = function(e, i) {
                var s = h("easing." + e, function() {}, !0),
                    r = s.prototype = new t;
                return r.constructor = s, r.getRatio = i, s
            },
            _ = t.register || function() {},
            u = function(t, e, i, s) {
                var r = h("easing." + t, {
                    easeOut: new e,
                    easeIn: new i,
                    easeInOut: new s
                }, !0);
                return _(r, t), r
            },
            c = function(t, e, i) {
                this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
            },
            p = function(e, i) {
                var s = h("easing." + e, function(t) {
                        this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                    }, !0),
                    r = s.prototype = new t;
                return r.constructor = s, r.getRatio = i, r.config = function(t) {
                    return new s(t)
                }, s
            },
            f = u("Back", p("BackOut", function(t) {
                return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
            }), p("BackIn", function(t) {
                return t * t * ((this._p1 + 1) * t - this._p1)
            }), p("BackInOut", function(t) {
                return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
            })),
            m = h("easing.SlowMo", function(t, e, i) {
                e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
            }, !0),
            d = m.prototype = new t;
        return d.constructor = m, d.getRatio = function(t) {
            var e = t + (.5 - t) * this._p;
            return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
        }, m.ease = new m(.7, .7), d.config = m.config = function(t, e, i) {
            return new m(t, e, i)
        }, e = h("easing.SteppedEase", function(t) {
            t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
        }, !0), d = e.prototype = new t, d.constructor = e, d.getRatio = function(t) {
            return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
        }, d.config = e.config = function(t) {
            return new e(t)
        }, i = h("easing.RoughEase", function(e) {
            e = e || {};
            for (var i, s, r, n, a, o, h = e.taper || "none", l = [], _ = 0, u = 0 | (e.points || 20), p = u, f = e.randomize !== !1, m = e.clamp === !0, d = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --p > -1;) i = f ? Math.random() : 1 / u * p, s = d ? d.getRatio(i) : i, "none" === h ? r = g : "out" === h ? (n = 1 - i, r = n * n * g) : "in" === h ? r = i * i * g : .5 > i ? (n = 2 * i, r = .5 * n * n * g) : (n = 2 * (1 - i), r = .5 * n * n * g), f ? s += Math.random() * r - .5 * r : p % 2 ? s += .5 * r : s -= .5 * r, m && (s > 1 ? s = 1 : 0 > s && (s = 0)), l[_++] = {
                x: i,
                y: s
            };
            for (l.sort(function(t, e) {
                    return t.x - e.x
                }), o = new c(1, 1, null), p = u; --p > -1;) a = l[p], o = new c(a.x, a.y, o);
            this._prev = new c(0, 0, 0 !== o.t ? o : o.next)
        }, !0), d = i.prototype = new t, d.constructor = i, d.getRatio = function(t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t;) e = e.next;
                e = e.prev
            } else
                for (; e.prev && e.t >= t;) e = e.prev;
            return this._prev = e, e.v + (t - e.t) / e.gap * e.c
        }, d.config = function(t) {
            return new i(t)
        }, i.ease = new i, u("Bounce", l("BounceOut", function(t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }), l("BounceIn", function(t) {
            return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }), l("BounceInOut", function(t) {
            var e = .5 > t;
            return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
        })), u("Circ", l("CircOut", function(t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }), l("CircIn", function(t) {
            return -(Math.sqrt(1 - t * t) - 1)
        }), l("CircInOut", function(t) {
            return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        })), s = function(e, i, s) {
            var r = h("easing." + e, function(t, e) {
                    this._p1 = t || 1, this._p2 = e || s, this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0)
                }, !0),
                n = r.prototype = new t;
            return n.constructor = r, n.getRatio = i, n.config = function(t, e) {
                return new r(t, e)
            }, r
        }, u("Elastic", s("ElasticOut", function(t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * a / this._p2) + 1
        }, .3), s("ElasticIn", function(t) {
            return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2))
        }, .3), s("ElasticInOut", function(t) {
            return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) + 1
        }, .45)), u("Expo", l("ExpoOut", function(t) {
            return 1 - Math.pow(2, -10 * t)
        }), l("ExpoIn", function(t) {
            return Math.pow(2, 10 * (t - 1)) - .001
        }), l("ExpoInOut", function(t) {
            return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        })), u("Sine", l("SineOut", function(t) {
            return Math.sin(t * o)
        }), l("SineIn", function(t) {
            return -Math.cos(t * o) + 1
        }), l("SineInOut", function(t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        })), h("easing.EaseLookup", {
            find: function(e) {
                return t.map[e]
            }
        }, !0), _(r.SlowMo, "SlowMo", "ease,"), _(i, "RoughEase", "ease,"), _(e, "SteppedEase", "ease,"), f
    }, !0)
}), window._gsDefine && window._gsQueue.pop()();


videoPath = "media/";

/* Clear Video, outside of app 
$(".jp-video .ff-details-close-x").click(function(){
    $(".jp-video").css({zIndex:0,opacity:0}), 
    $(".jp-jplayer").jPlayer("clearMedia");
});*/


/* Safari 6 check */
var isSafari = !!navigator.userAgent.match("10_8_5") && !navigator.userAgent.match(/chrome/i) && typeof document.body.style.webkitFilter !== "undefined" && !window.chrome; 
    userAgent = navigator.userAgent.toLowerCase(),
    version = 0;
    userAgent = userAgent.substring(userAgent.indexOf('version/') + 8);
    userAgent = userAgent.substring(0, userAgent.indexOf('.'));
    version = userAgent;

/* app.js */
(function() {
    var c = Backbone.View.extend({
        el: "#dockers-ff-wrapper",
        panels: {
            templates: {},
            views: {}
        },
        homePanel: null,
        lastActivePanel: null,
        activePanel: null,
        activeFitNav: null,
        activeStyleNav: null,
        events: _.extend({}, Backbone.Events),
        controls: {
            templates: {},
            views: {}
        },
        models: {
            templates: {}
        },
        collections: {},
        model: null,

        initialize: function() {
            $(function() {
                app.panels.views.loading = new app.panels.templates.Loading;
                app.registerActivePanel(app.panels.views.loading);
                app.registerActiveSlide(app.panels.views.loading);
                app.controls.views.header = new app.controls.templates.Header;
                app.collections.categories.each(function(a) {
                    var b = a.get("name");
                    app.controls.views["categoryNav_" + b] = new app.controls.templates.CategoryNav({
                        model: a
                    });
                    app.panels.views["category_" + b] = new app.panels.templates.Category({
                        model: a
                    })
                });
                app.collections.fits.each(function(a) {
                    var b = a.get("category") + "_" + a.get("name");
                    app.controls.views["styleNav_" + b] = new app.controls.templates.StyleNav({
                        model: a
                    });
                    app.panels.views["fit_" + b] = new app.panels.templates.Fit({
                        model: a
                    });
                });
            })
        },
        createStyleContent: function(a) {
            var b = a.get("category") + "_" + a.get("fit") + "_" + a.get("name");
            app.panels.views["style_" + b] = new app.panels.templates.Style({
                model: a
            });
            app.panels.views["detail_" + b] = new app.panels.templates.Detail({
                model: a
            })
        },
        notifySpotlight: function(a) {
            var b = {
                _: +new Date
            };
            b[a] = 1;
            a = ("https:" == location.protocol ? "https:" : "http:") + "//fls-na.amazon.com/1/softlines/1/OP/spotlighttestapp?" +
                jQuery.param(b);
            (new Image).src = a
        },
        registerActivePanel: function(a) {  
            "undefined" !== typeof a && (null !== this.activePanel && this.activePanel.unrender(), this.lastActivePanel = this.activePanel, this.activePanel = a, a.render())
        },
        registerActiveSlide: function(a) {
            "undefined" !== typeof a && (null !== this.activePanel && this.activePanel.unrenderSlide(), this.lastActivePanel = this.activePanel, this.activePanel = a, a.renderSlide())
        },
        registerActiveFitNav: function(a) {
            "undefined" !== typeof a && (null !== this.activeFitNav && this.activeFitNav.unrender(), this.activeFitNav = a, a.render())
        },
        registerActiveStyleNav: function(a) {
            "undefined" !== typeof a && (null !== this.activeStyleNav && this.activeStyleNav.unrender({
                closeWhenDone: !0
            }), this.activeStyleNav = a, a.render())
        }
    });
    window.app = new c

})();

/* app.router.js */
(function() {
    'use strict';
    var Router = Backbone.Router.extend({
        routes: {
            'fitpage': 'fit-panel',
            'stylepage': 'style-panel'
        },
    });
    $(function() {
        app.router = new Router();
        Backbone.history.start();
    });
})();

/* app.models.js */
(function() {
    app.models.templates.Category = Backbone.Model.extend({
        defaults: {
            name: null
        }
    });
    app.models.templates.Fit = Backbone.Model.extend({
        defaults: {
            name: null,
            category: null,
            heading: null,
            description: null,
            fitPoints: [{
                animationDirection: null,
                contentText: null,
                width: null,
                position: {
                    left: null,
                    top: null
                }
            }]
        }
    });
    app.models.templates.Style = Backbone.Model.extend({
        defaults: {
            name: null,
            category: null,
            fit: null,
            styleNavName: null,
            heading: null,
            description: null,
            extraText: null
        }
    })
})();

/* app.collections.js */
(function() {
    var a = Backbone.Collection.extend({
        model: app.models.templates.Category
    });
    app.collections.categories = new a;
    a = Backbone.Collection.extend({
        model: app.models.templates.Fit
    });
    app.collections.fits = new a;
    a = Backbone.Collection.extend({
        model: app.models.templates.Style
    });
    app.collections.styles = new a
})();

/* app.panels.js */
(function() {
    var b = Backbone.View.extend({
        initialize: function(options) {
            this.options = {
                rsp: rsp,
                rep: rep,
                usp: usp,
                uep: uep
            };
           
        },
        render: function() {

            TweenLite.to(this.$el, 0.5, {
                css: {
                    autoAlpha: 1
                }
            });
            this.$el.addClass("active").css({
                left: 0
            });

            return this
        },
        unrender: function() {

            this.$el.removeClass("active");
            TweenLite.to(this.$el, 0.4, {
                css: {
                    autoAlpha: 0
                }
            });
            return this
        },
        renderSlide: function() {
            if ("undefined" == typeof rsp) {
                rsp = -10;
                rep = -10;
            }
            
     
            this.$el.addClass("active");
            this.$el.find(".ff-panel-holder").css({
                left: rsp
            }).animate({
                left: rep
            }, {
                duration: 500
            });
            TweenLite.set(this.$el.find(".ff-style-background").eq(0), 0, {
                css: {
                    autoAlpha: 1
                }
            });
            TweenLite.to(this.$el, 0.8, {
                css: {
                    autoAlpha: 1
                }
            });

            return this
        },
        unrenderSlide: function() {
            if ("undefined" == typeof usp) {
                usp = -10;
                uep = -10;
            }

            this.$el.removeClass("active");
            this.$el.find(".ff-panel-holder").css({
                left: usp
            }).animate({
                left: uep
            }, {
                duration: 500
            });
            TweenLite.to(this.$el, {
                delay: 800,
                css: {
                    autoAlpha: 0
                }
            });
            TweenLite.set(this.$el.find(".ff-style-background").eq(0), {
                delay: 800,
                css: {
                    autoAlpha: 0
                }
            });
           
          
            return this
        }
    });

    app.panels.templates.Category = b.extend({
        tagName: "ul",
        className: "ff-panel ff-panel-category",
        template: _.template($("#ff-category-template").html()),
        events: {
            "mouseenter li": "onMouseEnter",
            "mouseleave li": "onMouseLeave",
            "click li": "fitClick"
        },
        initialize: function() {
            var a = app.collections.fits.where({
                    category: this.model.get("name")
                }),
                d = 708 - a.length + 1,
                c = Math.floor(d / a.length);
            this.$el.html(this.template({
                fits: a,
                liWidth: c,
                leftOverWidth: d - c * a.length
            }));
            app.$el.append(this.$el);
            this.listenTo(app.events, "categoryNav:mouseOver", this.highlightFit);
            this.listenTo(app.events, "categoryNav:mouseOut", this.clearHighlight);
        },
        render: function() {
            var a = "ff_" + this.model.get("name");
            this.$el.addClass("active");
          
            app.notifySpotlight(a);
            return b.prototype.render.call(this)
        },
        renderSlide: function() {
            var a = "ff_" + this.model.get("name");
            app.notifySpotlight(a);
            return b.prototype.renderSlide.call(this)
        },
        onMouseEnter: function(a) {
            a = $(a.currentTarget).attr("data-fit");
            app.events.trigger("category:mouseOver", a);
            this.highlightFit(a);
        },

        onMouseLeave: function(a) {
            app.events.trigger("category:mouseOut");
            this.clearHighlight()
        },
       highlightFit:function(a){
            ba=this.$el.find("li[data-fit="+a+"] .ff-fit-hover-overlay");
            bb = this.$el.find("li:not([data-fit="+a+"]) .ff-fit-hover-overlay");
            a=this.$el.find("li:not([data-fit="+a+"]) .ff-fit-overlay");
                TweenLite.to(a,0.4,{css:{autoAlpha:0.8}});
                TweenLite.to(ba,0.5,{css:{autoAlpha:0.9}});
                TweenLite.to(bb,0.5,{css:{autoAlpha:0.3}});
        },
        clearHighlight:function(){
            TweenLite.to(this.$el.find(".ff-fit-overlay"),0.3,{css:{autoAlpha:0}});
            TweenLite.to(this.$el.find(".ff-fit-hover-overlay"),0.3,{css:{autoAlpha:0.8}});

        },
        fitClick: function(a) {
            a = $(a.currentTarget).attr("data-fit");
            app.panels.views.loading.reset();
            app.registerActiveSlide(app.panels.views["fit_" + a]);
            /*app.events.trigger("closeVideo");*/
            app.events.trigger("fit:selected", a)
        },
        unrender: function() {
            this.$el.removeClass("active");
            TweenLite.to(this.$el, 0, {
                css: {
                    autoAlpha: 0
                }
            });
            return this
        },
        unrenderSlide: function() {
            this.$el.removeClass("active");
            TweenLite.to(this.$el, 0, {
                css: {
                    autoAlpha: 0
                }
            });
            return this
        }
    });


    app.panels.templates.Fit = b.extend({
        tagName: "div",
        className: "ff-panel ff-panel-fit",
        template: _.template($('#ff-fit-template').html()),
        events: {
            "click .ff-fit-shop-button": "shopBtnClick",
            'click .ff-fit-scroll-style': 'fitScrollClick',
            /*'click .ff-fit-video-button': 'onFitVideoClick',*/
            'click .ff-fit-style-button': 'openStyleNav',
            /*'click .ff-details-close-x': 'clearVideo',*/
            'click .ff-view-thumbs li': 'onThumbClick'          
        },
        controls: [],
        $fitPoints: null,
        initialize: function() {
            this.$el.html(this.template(this.model.toJSON()));
            app.$el.append(this.$el);
            this.$fitPoints = this.$el.find(".ff-fit-point");
            /*this.listenTo(app.events, "closeVideo", this.clearVideo);*/
            this.listenTo(app.events, "buttonAnim", this.animateButton);
        },
        animateButton:function(a) {
            that = $(a.currentTarget);
            that.find(".animation-zoom-in").addClass("animated");   
              _.delay(this.removeAnimation, 700, that);
        },
        removeAnimation: function(that) {
            that.find(".animation-zoom-in").removeClass("animated");    
        },
        /*clearVideo: function() {
            $("#ff_jp_container_1").css({zIndex:0,opacity:0}), 
            $("#ff_jquery_jplayer_1").jPlayer("clearMedia");
            $("#ff_jp_container_2").css({zIndex:0,opacity:0}), 
            $("#ff_jquery_jplayer_2").jPlayer("clearMedia");
        },*/
        render: function() {
 
            TweenLite.set(this.$fitPoints, {
                css: {
                    alpha: 1
                }
            });
            this.$el.addClass("active");
            TweenLite.set(this.$el.find(".ff-fit-info-wrapper"),  {
                css: {
                    autoAlpha: 1
                }
            });
            var a = "ff_" + this.model.get("category") + "_" + this.model.get("name");
            app.notifySpotlight(a);
            var a = this.$el.find(".ff-view-thumbs li"),
                d = a.eq(0);
              var fitStyles = app.collections.fits.where({
                category: this.model.get('category')                
            });
            var index = fitStyles.indexOf(this.model);
            if (index == fitStyles.length-1) {
                TweenLite.set(this.$el.find(".ff-fit-scroll-style-right").addClass("inactive"))
            }
            if (index == 0) {
                TweenLite.set(this.$el.find(".ff-fit-scroll-style-left").addClass("inactive"))
            };
            if (!1 === d.hasClass("active")) {
                var c = this.$el.find(".ff-fit-background");
                TweenLite.set (c.slice(1), {
                    css: {
                        autoAlpha: 0
                    }
                });
               d.addClass("active");
                a.slice(1).removeClass("active")
            }
            TweenLite.set(this.$el.find(".ff-fit-background").eq(0),  {
                css: {
                    autoAlpha: 1
                }
            });
            TweenLite.set(this.$el.find(".ff-panel-holder"), {
                css: {
                    left: 0
                }
            });

            return b.prototype.render.call(this)
        },
        renderSlide: function() {
         this.$el.addClass("active");
          
            TweenLite.set(this.$fitPoints, {
                css: {
                    alpha: 1
                }
            });
            TweenLite.set(this.$el.find(".ff-fit-info-wrapper"), {
                css: {
                    autoAlpha: 1
                }
            });
            this.$el.find(".ff-fit-scroll-style-left").css({
                left:-3
            });
            this.$el.find(".ff-fit-scroll-style-right").css({
                right:-1
            });
            var a = "ff_" + this.model.get("category") + "_" + this.model.get("name");
            app.notifySpotlight(a);
            var a = this.$el.find(".ff-view-thumbs li"),
                d = a.eq(0);
              var fitStyles = app.collections.fits.where({
                category: this.model.get('category')                
            });
            var index = fitStyles.indexOf(this.model);
            if (index == fitStyles.length-1) {
                TweenLite.set(this.$el.find(".ff-fit-scroll-style-right").addClass("inactive"))
            }
            if (index == 0) {
                TweenLite.set(this.$el.find(".ff-fit-scroll-style-left").addClass("inactive"))
            };
            if (!1 === d.hasClass("active")) {
                var c = this.$el.find(".ff-fit-background");
                TweenLite.set (c.slice(1), {
                    css: {
                        autoAlpha: 0
                    }
                });
                d.addClass("active");
                a.slice(1).removeClass("active")
            }
            TweenLite.set(this.$el.find(".ff-fit-background").eq(0), {
                css: {
                    autoAlpha: 1
                }
            });
             TweenLite.set(this.$el.find(".ff-panel-holder"), {
                css: {
                    left: 0
                }
            });
            return b.prototype.renderSlide.call(this)
        },
        /*onFitVideoClick: function(a){
            a=$(a.currentTarget);
            e=a.attr("data-target");
            $("#ff_jquery_jplayer_2").jPlayer("play");$("#ff_jquery_jplayer_2").jPlayer("setMedia", {m4v:videoPath+e+".m4v",webmv:videoPath+e+".webm",ogv:videoPath+e+".ogg"}).jPlayer("play");
            $("#ff_jp_container_2").css({zIndex:500,opacity:1});
        },*/
        onThumbClick: function(a) {
             a = $(a.currentTarget);
            var b = a.index(),
                c = this.$el.find(".ff-fit-background");
            a.addClass("active").siblings(".active").removeClass("active");
            TweenLite.to(c, 0.6, {
                css: {
                    autoAlpha: 0
                }
            });
            TweenLite.to(c.eq(b), 0.6, {
                css: {
                    autoAlpha: 1
                }
            });
            a = "ff_" + this.model.get("category") + "_" + this.model.get("name") + "_alt";
          
            app.notifySpotlight(a)
        },
        openStyleNav: function(a) {
            app.events.trigger("buttonAnim", a);
              var childStyles = app.collections.styles.where({
                category: this.model.get('category'),
                fit: this.model.get('name')
                });
             if (childStyles.length > 1) {
                  app.activeStyleNav.slideOpen();
                } else {
               _.delay(this.goToStyle, 800, childStyles);
             
            }
        },

        goToStyle: function(childStyles) {
                getStyle=childStyles[0];
                var targetCategory = getStyle.get("category");
                var targetFit = getStyle.get("fit");
                var targetStyle = getStyle.get("name");
                var viewId = targetCategory + '_' + targetFit + '_' + targetStyle;
                    var styleModel = app.collections.styles.findWhere({
                        category: targetCategory,
                        fit: targetFit,
                        name: targetStyle
                    });
                    app.createStyleContent(styleModel);
                    app.panels.views.loading.reset();
                    app.registerActiveSlide(app.panels.views['style_' + viewId]);
        },
        fitScrollClick: function(e) {
            var $target = $(e.currentTarget)
            var target = $target.attr('data-find');
         
            var fitList = app.collections.fits.where({
                category: this.model.get('category')
            });
            var index = fitList.indexOf(this.model);
            if (index == fitList.length - 1) {
                TweenLite.set(this.$el.find(".ff-fit-scroll-style-right").addClass("inactive"))
            }
            //getFit = fitList[0];
             if ("prev" == target && 0 == index) {
                getFit = fitList[0];
                rsp = -778;
                rep = -10;
                usp = -10;
                uep = 778;
            } else {
            if ("next" == target) {
                    var getFit = fitList[index + 1];
                    rsp = 778;
                    rep = -10;
                    usp = -10;
                    uep = -778;
                } else if ("prev" == target) {
                    rsp = -778;
                    rep = -10;
                    usp = -10;
                    uep = 778;
                    var getFit = fitList[index - 1];
                }
            }
            var targetCategory = getFit.get("category");
            var targetFit = getFit.get("name");
           var viewId = targetCategory + '_' + targetFit;
            if (typeof app.panels.views['fit' + viewId] === typeof void 0) {
                app.registerActiveSlide(app.panels.views.loading);
                var styleModel = app.collections.fits.findWhere({
                    category: targetCategory,
                    name: targetFit
                });
                app.panels.views.loading.reset();
                app.registerActiveSlide(app.panels.views['fit_' + viewId]);
                app.events.trigger("fit:selected", viewId)

            } else {
                app.registerActiveSlide(app.panels.views['fit_' + viewId]);
                app.events.trigger("fit:selected", viewId)

            }
        },
        shopBtnClick: function(a) {
            app.events.trigger("buttonAnim", a);
            "undefined" !== typeof this.model.get("shopUrl") && (window.parent.location.href = this.model.get("shopUrl"))
        },
        unrender: function() {
             this.$el.removeClass("active");
          
            return b.prototype.unrender.call(this)
        },
        unrenderSlide: function() {
             this.$el.removeClass("active");
          
            return b.prototype.unrenderSlide.call(this)
        }
    });

    app.panels.templates.Style = b.extend({
        tagName: "div",
        className: "ff-panel ff-panel-style",
        template: _.template($("#ff-style-template").html()),
        events: {
            "click .ff-style-view-thumbs li": "onThumbClick",
            "click .ff-style-detail-button": "onDetailClick",
            "click .ff-style-shop-button": "onShopClick",
            /*"click .ff-style-video-button": "onVideoClick",*/
            'click .ff-fit-scroll-style': 'styleScrollClick'
        },
        controls: [],
        initialize: function() {
            this.$el.html(this.template(this.model.toJSON()));
            app.$el.append(this.$el);
           /* this.listenTo(app.events, "onVideoClick", this.goToVideo); */
            this.listenTo(app.events, "onThumbClick", this.onThumbClick);
        },
        render: function() {
           this.$el.addClass("active");
          
            var a = "ff_" + this.model.get("category") + "_" + this.model.get("fit") + "_" + this.model.get("name");
            app.notifySpotlight(a);
            var a = this.$el.find(".ff-style-view-thumbs li"),
                d = a.eq(0);
            var childFitStyles = app.collections.styles.where({
                category: this.model.get('category'),
                fit: this.model.get('fit')
            });
            var index = childFitStyles.indexOf(this.model);
            if (index == childFitStyles.length - 1) {
                TweenLite.set(this.$el.find(".ff-fit-scroll-style-right").addClass("inactive"))
            }
             if (index == 0) {
                TweenLite.set(this.$el.find(".ff-fit-scroll-style-left").addClass("inactive"))
            }
            if (!1 === d.hasClass("active")) {
                var c = this.$el.find(".ff-style-background");
                TweenLite.to (c.slice(1), 1, {
                    css: {
                        autoAlpha: 0
                    }
                });
                d.addClass("active");
                a.slice(1).removeClass("active")
            }
            TweenLite.to(this.$el.find(".ff-style-background").eq(0), 1, {
                css: {
                    autoAlpha: 1
                }
            });
            return b.prototype.render.call(this)
        },
        renderSlide: function() {
             this.$el.addClass("active");
          
            var a = "ff_" + this.model.get("category") + "_" + this.model.get("fit") + "_" + this.model.get("name");
            app.notifySpotlight(a);
            var a = this.$el.find(".ff-style-view-thumbs li"),
                d = a.eq(0);
            this.$el.find(".ff-fit-scroll-style-left").css({
                left:-3
            });
            this.$el.find(".ff-fit-scroll-style-right").css({
                right:-1
            });
            var childFitStyles = app.collections.styles.where({
                category: this.model.get('category'),
                fit: this.model.get('fit')
            });
            var index = childFitStyles.indexOf(this.model);
            if (index == childFitStyles.length - 1) {
                TweenLite.set(this.$el.find(".ff-fit-scroll-style-right").addClass("inactive"));
            }
            if (index == 0) {
                TweenLite.set(this.$el.find(".ff-fit-scroll-style-left").addClass("inactive"))
            }
            if (!1 === d.hasClass("active")) {
                var c = this.$el.find(".ff-style-background");
                TweenLite.set(c.slice(1), {
                    css: {
                        autoAlpha: 0
                    }
                });
                d.addClass("active");
                a.slice(1).removeClass("active")
            }
            TweenLite.set(this.$el.find(".ff-style-background").eq(0), {
                css: {
                    autoAlpha: 1
                }
            });
            return b.prototype.renderSlide.call(this)
        },

        newActiveFit: function(a) {
            this.$el.find("li[data-fit=" + a + "]").addClass("active").siblings(".active").removeClass("active");
            app.panels.views.loading.reset();
            app.registerActiveStyleNav(app.controls.views["styleNav_" + a])
        },
        styleScrollClick: function(e) {
            var $target = $(e.currentTarget)
            var target = $target.attr('data-find');
            var a = e;
            var childFitStyles = app.collections.styles.where({
                category: this.model.get('category'),
                fit: this.model.get('fit')
            });
            var index = childFitStyles.indexOf(this.model);
         
            if (index == childFitStyles.length - 1) {
                TweenLite.set(this.$el.find(".ff-fit-scroll-style-right").addClass("inactive"))
            }

            if ("prev" == target && 0 == index) {
                rsp = -778;
                rep = -10;
                usp = -10;
                uep = 778;
            } else {

                if ("next" == target) {
                    var getStyle = childFitStyles[index + 1];
                    rsp = 778;
                    rep = -10;
                    usp = -10;
                    uep = -778;
                } else if ("prev" == target && 0 < index) {
                    rsp = -778;
                    rep = -10;
                    usp = -10;
                    uep = 768;
                    var getStyle = childFitStyles[index - 1];
                }
                var targetCategory = getStyle.get("category");
                var targetFit = getStyle.get("fit");
                var targetStyle = getStyle.get("name");
                var viewId = targetCategory + '_' + targetFit + '_' + targetStyle;
                if (typeof app.panels.views['style_' + viewId] === typeof void 0) {
                    app.registerActiveSlide(app.panels.views.loading);
                    var styleModel = app.collections.styles.findWhere({
                        category: targetCategory,
                        fit: targetFit,
                        name: targetStyle
                    });
                    app.createStyleContent(styleModel);
                    app.panels.views.loading.reset();

                    app.registerActiveSlide(app.panels.views['style_' + viewId]);

                } else {

                    app.registerActiveSlide(app.panels.views['style_' + viewId]);
                }
            }
        },
        onThumbClick: function(a) {
            a = $(a.currentTarget);
            var b = a.index(),
                c = this.$el.find(".ff-style-background");
            a.addClass("active").siblings(".active").removeClass("active");
            TweenLite.to(c, 0.6, {
                css: {
                    autoAlpha: 0
                }
            });
            TweenLite.to(c.eq(b), 0.6, {
                css: {
                    autoAlpha: 1
                }
            });
            a = "ff_" + this.model.get("category") + "_" + this.model.get("fit") + "_" + this.model.get("name") + "_alt";
            z = this.$el.find(".ff-style-extra-text");
            zz = this.$el.find(".ff-style-extra-text2");
            TweenLite.to(z, 0, {
                css: {
                    autoAlpha: 1
                }
            });
            TweenLite.to(zz, 0, {
                css: {
                    autoAlpha: 0
                }
            });
            if (b > 2) {
                TweenLite.to(z, 0, {
                    css: {
                        autoAlpha: 0
                    }
                });
                TweenLite.to(zz, 0, {
                    css: {
                        autoAlpha: 1
                    }
                });
            }
            app.notifySpotlight(a)
        },

        onDetailClick: function(a) {
            app.events.trigger("buttonAnim", a);
            a = this.model.get("category") + "_" + this.model.get("fit") + "_" + this.model.get("name");
            _.delay(this.goToDetail, 800, a);
        },
        goToDetail: function(a) {
            app.registerActivePanel(app.panels.views["detail_" + a]);
        },
        onShopClick: function(a) {
            app.events.trigger("buttonAnim", a);
            "undefined" !== typeof this.model.get("shopUrl") && (window.parent.location.href = this.model.get("shopUrl"))
        },
       /* onVideoClick: function(a){
            app.events.trigger("buttonAnim", a);
            _.delay(this.goToVideo, 800, a);    
        },

        goToVideo: function(a){
            a=$(a.currentTarget);
            e=a.attr("data-target");
            $("#ff_jquery_jplayer_1").jPlayer("play");$("#ff_jquery_jplayer_1").jPlayer("setMedia", {m4v:videoPath+e+".m4v",webmv:videoPath+e+".webm",ogv:videoPath+e+".ogg"}).jPlayer("play");
            $("#ff_jp_container_1").css({zIndex:500,opacity:1});
        }*/
    });

    app.panels.templates.Detail = b.extend({
        tagName: "div",
        className: "ff-panel-detail ff-panel",
        template: _.template($("#ff-style-detail-template").html()),
        events: {
            "click .ff-details-arrows": "onArrowClick",
            "click .ff-detail-close-x": "onCloseXClick",
            "click .ff-detail-shop-btn": "onShopClick",
           /* "click .ff-detail-video-btn": "onVideoClick" */
        },
        controls: [],
        initialize: function() {
            this.$el.html(this.template(this.model.toJSON()));
            app.$el.append(this.$el)
        },
        render: function() {
           TweenLite.to(this.$el.find(".ff-detail-content-background.active"), 0.8, {
                css: {
                    autoAlpha: 1
                }
            });
            var a = "ff_" + this.model.get("category") + "_" + this.model.get("fit") + "_" + this.model.get("name") + "_det";
            return b.prototype.render.call(this)
        },
        unrender: function() {

             var a = this.$el.find(".ff-detail-content-background"),
                d = a.eq(0);
            !1 === d.hasClass("active") && (a = a.filter(".active"), a.removeClass("active"), TweenLite.set(a, {
                css: {
                    autoAlpha: 0
                }
            }), d.addClass("active"), this.$el.find(".ff-details-left-arrow").hide(), this.$el.find(".ff-details-right-arrow").show());
            return b.prototype.unrender.call(this)
        },
        onCloseXClick: function() {
            app.events.trigger("closeVideo");
            app.registerActivePanel(app.lastActivePanel);
            a = this.model.get("category") + "_" + this.model.get("fit") + "_" + this.model.get("name");
            app.registerActivePanel(app.panels.views["style_" + a]);
        },
        onArrowClick: function(a) {
            var b = $(a.currentTarget);
            a = this.$el.find(".ff-detail-content-background.active");
                var c = null,
                    c = "left" === b.attr("data-direction") ? a.prev(".ff-detail-content-background") : a.next(".ff-detail-content-background");

                    if ("left" === b.attr("data-direction")) {
                        rsp = -778;
                        rep = -10;
                        usp = -10;
                        uep = 778;
                    } else {
                        rsp = 778;
                        rep = -10;
                        usp = -10;
                        uep = -778;
                    };
                if (0 < c.length && !1 === a.is(c)) {
                    var b = this.$el.find(".ff-details-left-arrow"),
                        e = this.$el.find(".ff-details-right-arrow");
                    0 === c.prev(".ff-detail-content-background").length ? b.hide() : b.show();
                    0 === c.next(".ff-detail-content-background").length ? e.hide() : e.show();
                   a.removeClass("active");

                    a.css({
                        left: usp
                    }).animate({
                        left: uep
                    }, {
                        duration: 300
                    });
                    c.addClass("active");
                    c.css({
                        left:rsp
                    }).animate({
                        left:rep
                    }, {duration: 300
                    });
                    a = "ff_" + this.model.get("category") + "_" + this.model.get("fit") + "_" + this.model.get("name") + "_det";
                app.notifySpotlight(a)
            }
        },
        onShopClick: function(a) {
            app.events.trigger("buttonAnim", a);
            "undefined" !== typeof this.model.get("shopUrl") && (window.parent.location.href = this.model.get("shopUrl"))
        },
       /* onVideoClick: function(a){
            app.events.trigger("buttonAnim", a);
            _.delay(this.goToVideo, 1000, a);
        },
        goToVideo: function(a) {
            app.events.trigger("onVideoClick",a );
        }*/
    });

    app.panels.templates.Loading = b.extend({
        el: "#ff-panel-loading",
        $progressBar: null,
        events: {},
       
        initialize: function() {
            this.$progressBar = this.$el.find(".ff-loading-progress-bar");
            this.$progressInit = this.$el.find(".ff-loading-progress-icon");
            this.$progressAnim = this.$el.find(".ff-loading-progress-animation");
        },
        reset: function() {
            TweenLite.to(this.$progressInit, 0, {
                css: {
                    autoAlpha: 1
                }
            });
            this.$progressBar.css({
                width: "100%",
                height: "50%",
                top: "100%",
                //marginTop: "-2px"
            })

        },
        updateProgress: function(a) {
            TweenLite.to(this.$progressInit, 2.5, {
                css: {
                    autoAlpha: 0
                }
            });
            TweenLite.to(this.$progressAnim, .8, {
                css: {
                    autoAlpha: 1
                }
            });
        },
        finishAnimation: function(a) {
            TweenLite.to(this.$progressBar, 1.8, {
                css: {
                    height: "100%",
                    top: "0%",
                    marginTop: 0
                },
                delay:.7,
                onComplete: a
            });
            
        } 

    })
})();

/* app.controls.js */
(function() {
    app.controls.templates.Header = Backbone.View.extend({
        el: "#ff-header",
        lastCategoryChosen: null,
        events: {
            "click #ff-header-categories li": "categoryNavClick",
            "click .ff-header-bar": "returnToHome"
        },
        initialize: function() {},
        categoryNavClick: function(a) {
            a = $(a.currentTarget).attr("data-category");
            this.changeCategory(a)
        },
        changeCategory: function(a) {
            app.registerActivePanel(app.panels.views["category_" + a]);
            app.registerActiveFitNav(app.controls.views["categoryNav_" + a]);
            this.lastCategoryChosen = a;
            null !== app.activeStyleNav && (app.activeStyleNav.slideClosed(), app.activeStyleNav.unrender({
                closeWhenDone: !0
            }));
            this.$el.find("li[data-category=" + a + "]").addClass("highlighted").siblings().removeClass("highlighted")
        },
        returnToHome: function() {
            /*app.events.trigger("closeVideo"); */
            null !== this.lastCategoryChosen ? app.controls.views.header.changeCategory(this.lastCategoryChosen) : app.controls.views.header.changeCategory("men")
        }
    });
    app.controls.templates.CategoryNav = Backbone.View.extend({
        tagName: "ul",
        className: "ff-category-nav",
        template: _.template($("#ff-category-nav-template").html()),
        events: {
            "mouseover li": "onMouseOver",
            "mouseout li": "onMouseOut",
            "click li": "fitClick"
        },
        initialize: function() {
            var a = app.collections.fits.where({
                    category: this.model.get("name")
                }),
                b = 708 - a.length + 1,
                c = Math.floor(b / a.length);
            this.$el.html(this.template({
                fits: a,
                liWidth: c,
                leftOverWidth: b - c * a.length,
                tabLeftPos: this.model.get("styleNavLeftPos"),
            }));
            app.$el.append(this.$el);
            this.listenTo(app.events, "category:mouseOver", this.highlightFit);
            this.listenTo(app.events, "category:mouseOut", this.clearHighlight);
            this.listenTo(app.events, "fit:selected", this.newActiveFit);
            this.listenTo(app.events, "returnToFit", this.fitClick);
        },
        onMouseOver: function(a) {
            a = $(a.currentTarget).attr("data-fit");
            app.events.trigger("categoryNav:mouseOver", a)
        },
        onMouseOut: function(a) {
            app.events.trigger("categoryNav:mouseOut")
        },
        highlightFit: function(a) {
            /*this.$el.find("li[data-fit=" + a + "]").addClass("highlight") */
        },
        clearHighlight: function() {
            /*this.$el.find("li.highlight").removeClass("highlight") */
        },
        fitClick: function(a) {
            target = $(a.currentTarget).attr('data-pos');
            a = $(a.currentTarget).attr('data-fit');
            index = this.$el.find("li[data-fit=" + a + "]").siblings(".active").attr("data-pos");
            if (index > target) {
                rsp= -778,
                rep= -10,
                usp= -10,
                uep= 778
            } else {
                rsp= 778,
                rep= -10,
                usp= -10,
                uep= -778
            }
            app.events.trigger("clearActiveFit", a);
            app.registerActiveSlide(app.panels.views["fit_" + a], rsp, rep, usp, uep);
            app.events.trigger("fit:selected", a);
            /*app.events.trigger("closeVideo"); */
        },
        newActiveFit: function(a) {
            this.$el.find("li[data-fit=" + a + "]").addClass("active").siblings(".active").removeClass("active");
            app.registerActiveStyleNav(app.controls.views["styleNav_" + a])
        },
        clearActiveFit: function() {
            this.$el.find("li.active").removeClass("active");
        },
        render: function() {
            this.$el.addClass("active");
            TweenLite.to(this.$el, 0.6, {
                css: {
                    autoAlpha: 1
                }
            })
        },
        unrender: function() {
            this.$el.removeClass("active");
            TweenLite.to(this.$el, 0.6, {
                css: {
                    autoAlpha: 0
                }
            });
            this.clearActiveFit()
        }
    });
    app.controls.templates.StyleNav = Backbone.View.extend({
        tagName: "div",
        className: "ff-style-nav-wrapper",
        template: _.template($("#ff-style-nav-template").html()),
        events: {
            "click li": "styleClick",
            "click .ff-style-nav-tab": "toggleOpenOrClosed",
            "click .ff-style-left": "styleScrollLeft",
            "click .ff-style-right": "styleScrollRight"
        },
        closed: !0,
        initialize: function() {
            var a = app.collections.styles.where({
                    category: this.model.get("category"),
                    fit: this.model.get("name")
                }),
                b = 0;
            "undefined" !== typeof this.model.get("styleNavMinWidth") && (b = this.model.get("styleNavMinWidth"));
            this.$el.html(this.template({
                navMinWidth: b,
                tabLeftPos: this.model.get("styleTabLeftPos"),
                styles: a,
                fitCategory: this.model.get("name")
            }));
            app.$el.append(this.$el);
            this.listenTo(app.events, "slideOpen", this.slideOpen);
        },
        toggleOpenOrClosed: function() {
            this.closed ? this.slideOpen() : this.slideClosed()
        },
        slideOpen: function() {
            var styles = app.collections.styles.where({
                category: this.model.get("category"),
                fit: this.model.get("name")
            });
            //var a = 569 - this.$el.outerHeight();
            this.closed = !1;
            
                TweenLite.to(this.$el.find(".ff-style-nav"), 0.5, {
                    css: {
                        bottom: "-533"
                    }
                });
            this.$el.addClass("open");
            app.events.trigger("navStyle:opening")
        },
        slideClosed: function() {
            !1 === this.closed && (this.closed = !0, TweenLite.to(this.$el.find(".ff-style-nav"), 0.8, {
                css: {
                    bottom: 533
                },
                onComplete: _.bind(function() {}, this)
            }), this.$el.removeClass("open"), this.$el.removeClass("active"), 
            app.events.trigger("navStyle:closing"))
        },
        styleClick: function(a) {
             var a = $(a.currentTarget);
           
            app.events.trigger("buttonAnim", a);
            b = a;
            a = b.attr("data-category");
            var c = b.attr("data-fit"),
                b = b.attr("data-style"),
                d = a + "_" + c + "_" + b;
            this.slideClosed();
            app.panels.views.loading.reset();
            app.registerActiveSlide(app.panels.views.loading), a = app.collections.styles.findWhere({
                category: a,
                fit: c,
                name: b
            }), app.createStyleContent(a), app.panels.views.loading.reset(), app.panels.views["style_" + d].$el.waitForImages({
                finished: function() {
                    app.panels.views.loading.finishAnimation(function() {
                        app.registerActiveSlide(app.panels.views["style_" + d])
                    })
                },
                each: function(a, b) {
                    var c = Math.ceil(a / b * 100);
                    app.panels.views.loading.updateProgress(c)
                },
                waitForAll: !0
            })
        },
        render: function() {
            this.$el.addClass("active");
            TweenLite.to(this.$el, 0.6, {
                css: {
                    autoAlpha: 1
                }
            })
        },
        unrender: function(a) {
            this.$el.removeClass("active");
            TweenLite.to(this.$el, 0.6, {
                css: {
                    autoAlpha: 0
                }
            });
            "undefined" !== typeof a && !0 === a.closeWhenDone && this.slideClosed()
        }
    });
 
 })();