(function (t) {
  function e(e) {
    for (
      var s, r, o = e[0], c = e[1], l = e[2], f = 0, d = [];
      f < o.length;
      f++
    )
      (r = o[f]),
        Object.prototype.hasOwnProperty.call(i, r) && i[r] && d.push(i[r][0]),
        (i[r] = 0);
    for (s in c) Object.prototype.hasOwnProperty.call(c, s) && (t[s] = c[s]);
    u && u(e);
    while (d.length) d.shift()();
    return n.push.apply(n, l || []), a();
  }
  function a() {
    for (var t, e = 0; e < n.length; e++) {
      for (var a = n[e], s = !0, o = 1; o < a.length; o++) {
        var c = a[o];
        0 !== i[c] && (s = !1);
      }
      s && (n.splice(e--, 1), (t = r((r.s = a[0]))));
    }
    return t;
  }
  var s = {},
    i = { app: 0 },
    n = [];
  function r(e) {
    if (s[e]) return s[e].exports;
    var a = (s[e] = { i: e, l: !1, exports: {} });
    return t[e].call(a.exports, a, a.exports, r), (a.l = !0), a.exports;
  }
  (r.m = t),
    (r.c = s),
    (r.d = function (t, e, a) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a });
    }),
    (r.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var a = Object.create(null);
      if (
        (r.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var s in t)
          r.d(
            a,
            s,
            function (e) {
              return t[e];
            }.bind(null, s)
          );
      return a;
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = "/");
  var o = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = o.push.bind(o);
  (o.push = e), (o = o.slice());
  for (var l = 0; l < o.length; l++) e(o[l]);
  var u = c;
  n.push([0, "chunk-vendors"]), a();
})({
  0: function (t, e, a) {
    t.exports = a("cd49");
  },
  "08a5": function (t, e, a) {
    "use strict";
    a("64e5");
  },
  "14b3": function (t, e, a) {},
  "2bd1": function (t, e, a) {},
  3792: function (t, e) {
    t.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAA5CAYAAADtCTSrAAAAAXNSR0IArs4c6QAABC1JREFUeJztneuO3CAMRidV3/+Vpz+qWWUzBLCxwQ7nSKNtd5OAzYfDfV4vAAAAAAAAAAAAAAAAAAAAAID8HJW/vQXXapmRhifa/F/vK5HNF1p6fCHhSX7zqB9T69zdw+8K3SozNVFlEciIjwgw9oHljqx+9KiD3vX6iz+CTLT+thP4aIyZPspYHh76WqLZUoBpMZqZjAUOuUFziygFGKsmvuV9AKOgvQVoWjAAWSHITObvwL3vl2xwiIFN6MVaV9fr0dkk7low1gXAmwO8OE4fCEati+Q5FqNND6AGGgqGxRhMK8jQNYJo0KKeRCvAjFZ8CrJMy68EXD34LhA9g7zHq6+Voi1YS0FIAtrThEhL0Z8d9TW06n5kFqmUkePy/xYrW0jne7OKQTOD8iGrzTOZqS9JWqVrV0zMfK65Tbs3wPS0YkoJe2H9/KajgmFhfzabZzJbX1bl6bEZUnLPV/qSQV7rKKx1hmfwyjBm5CH+DHbPYra+IvnefBuQZRfpNpECEYPLbDQ+eJL9EdnZvy62S6epLZpg0YNLdpEdhU8P2e3+EH2fXPYzkFr8sk/TgpGOx8xGcohWJkZahp/fZ7a/h177Riq1h74s6pR1oCo9T5xHjy5SDc9o3fPs3oqWcb9Kr/1PDTLednnrSzID663N0RfVj33albwaAz1O4rJ4NuRGOkiteTPvpC9TW0daMFHehtpgFyHvK8jQXYqUt530ZR5IR/YizXTgTm8QLdLy0A4GZ6bV9Ic+uv2lDTAji3G0lIxCGL9hTcs9mv1fO+nLxdbZg7yjrFqpGAFJs/vpU6FSeu3fWV8uaALM6P6M2WKnwPcNODPsRF8VpAEm0p6J2vOfitXg4VP3IRFQgpGti3Rlx8K2nAWKGmii5GdHfZkiCTCWzh5pxVDo/7EONFEq9WrQlyG9s0iSJdiee18sCv9pU7JW9lCx0Jc5PS0Yzf4Oj4VGmuftVNBXW7UBfCefnUFfDqweg+kVNMdBypGeLni+djdfoi8nWl2kkd2pM48J2KnwtW9amu568JuSWoCx2Po+Y2xgp8J/n36yatcG9OVIlO+mnl1RMlbMuzxr9iCBLxn15cJdgLE8uCfaiWoUPniCvk6UAozHqWBRVu4+tfCfalcE0NcAUbpIH7zOU9WMV2QTi3Yj5BW6UN9E01f0byf44TpN7Xmmae/amOs0qeS+3Wkt/cdH32TVVy3IhHlJaFowXgcmzyZSXnqQ5Pd987FMA+qsrCdhgmG0LtIdlsLPvB5k9aHpTwV9OZHpe5E80m49M8yb4ISHeKkQ8fT1iDKRnLBubbA2HY89I5q8zPJTDY9jSGcRwX8louirdW8N6Ric9ckGx9c/Gjd6FfpoOpZvAE1eIp0U5zlA70Uk/5VYra/evEieZ+3z6GUIAAAAAAAAAAAAAAAA4fgHngj5W8WKoYQAAAAASUVORK5CYII=";
  },
  "3b49": function (t, e, a) {
    "use strict";
    a("2bd1");
  },
  "49af": function (t, e, a) {},
  "4a87": function (t, e, a) {},
  "56ae": function (t, e, a) {
    t.exports = a.p + "img/gameplay-click.2da93062.png";
  },
  "5c0b": function (t, e, a) {
    "use strict";
    a("9c0c");
  },
  6111: function (t, e, a) {
    "use strict";
    a("faec");
  },
  "64e5": function (t, e, a) {},
  6993: function (t, e, a) {
    "use strict";
    a("49af");
  },
  "6d0f": function (t, e, a) {},
  9175: function (t, e, a) {
    t.exports = a.p + "img/gameplay-shop.8263cb09.png";
  },
  "941e": function (t, e, a) {
    "use strict";
    a("4a87");
  },
  9688: function (t, e, a) {
    "use strict";
    a("14b3");
  },
  "97c1": function (t, e, a) {
    t.exports = a.p + "img/gameplay-buffs.4e7c4c6c.png";
  },
  "9c0c": function (t, e, a) {},
  "9d8b": function (t, e, a) {
    t.exports = a.p + "img/gameplay-rewards.f1e971dc.png";
  },
  "9e95": function (t, e, a) {
    t.exports = a.p + "img/logo-crop.2a2b1b73.png";
  },
  aedd: function (t, e, a) {
    "use strict";
    a("6d0f");
  },
  b101: function (t, e, a) {},
  b107: function (t, e, a) {},
  b22e: function (t, e, a) {
    t.exports = a.p + "img/story-animation.fb19785b.gif";
  },
  b735: function (t, e, a) {},
  c32f: function (t, e) {
    t.exports =
      "data:image/png;base64,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";
  },
  cd49: function (t, e, a) {
    "use strict";
    a.r(e);
    var s = a("2b0e"),
      i = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "div",
          [
            a("NavBar"),
            a(
              "main",
              [
                a("Banner"),
                a("Story"),
                a("Gameplay"),
                a("Music"),
                a("ComingSoon"),
              ],
              1
            ),
            a("Footer"),
          ],
          1
        );
      },
      n = [],
      r = a("9ab4"),
      o = a("2fe1"),
      c = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("b-navbar", {
          attrs: { type: "is-primary", spaced: !0, "fixed-top": !0 },
          scopedSlots: t._u([
            {
              key: "brand",
              fn: function () {
                return [
                  s(
                    "b-navbar-item",
                    { staticClass: "brand" },
                    [
                      s(
                        "b-navbar-item",
                        {
                          on: {
                            click: function (e) {
                              return t.scrollIntoView("banner");
                            },
                          },
                        },
                        [
                          s("img", {
                            staticClass: "image",
                            attrs: {
                              alt: "Intrigue Games Logo",
                              src: a("9e95"),
                            },
                          }),
                        ]
                      ),
                      s(
                        "b-navbar-item",
                        {
                          attrs: {
                            href: "https://twitter.com/intrigue_games",
                            target: "_blank",
                          },
                        },
                        [
                          s("b-icon", {
                            attrs: {
                              type: "is-white",
                              icon: "twitter",
                              title: "Twitter Icon",
                            },
                          }),
                        ],
                        1
                      ),
                      s(
                        "b-navbar-item",
                        {
                          attrs: {
                            href:
                              "https://www.youtube.com/channel/UCQPXkDppOggoio7FFq_dpcg",
                            target: "_blank",
                          },
                        },
                        [
                          s("b-icon", {
                            attrs: {
                              type: "is-white",
                              icon: "youtube",
                              title: "youtube Icon",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ];
              },
              proxy: !0,
            },
            { key: "start", fn: function () {}, proxy: !0 },
            {
              key: "end",
              fn: function () {
                return [
                  s(
                    "b-navbar-item",
                    {
                      staticClass: "has-text-white",
                      on: {
                        click: function (e) {
                          return t.scrollIntoView("story");
                        },
                      },
                    },
                    [t._v("Story")]
                  ),
                  s(
                    "b-navbar-item",
                    {
                      staticClass: "has-text-white",
                      on: {
                        click: function (e) {
                          return t.scrollIntoView("gameplay");
                        },
                      },
                    },
                    [t._v("Gameplay")]
                  ),
                  s(
                    "b-navbar-item",
                    {
                      staticClass: "has-text-white",
                      on: {
                        click: function (e) {
                          return t.scrollIntoView("music");
                        },
                      },
                    },
                    [t._v("Music")]
                  ),
                  s(
                    "b-navbar-item",
                    {
                      staticClass: "has-text-white",
                      on: {
                        click: function (e) {
                          return t.scrollIntoView("coming-soon");
                        },
                      },
                    },
                    [t._v("Coming Soon!")]
                  ),
                ];
              },
              proxy: !0,
            },
          ]),
        });
      },
      l = [],
      u = a("1b40");
    let f = class extends s["a"] {
      scrollIntoView(t) {
        const e = document.getElementsByClassName(t)[0];
        e && e.scrollIntoView({ behavior: "smooth" });
      }
    };
    f = Object(r["a"])([u["a"]], f);
    var d = f,
      b = d,
      h = (a("9688"), a("d5d8"), a("2877")),
      p = Object(h["a"])(b, c, l, !1, null, "0da2a126", null),
      A = p.exports,
      m = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("section", { staticClass: "music hero bg-image is-large" }, [
          a("div", { staticClass: "anchor", attrs: { id: "music" } }),
          a("div", { staticClass: "hero-body" }, [
            a("h1", { staticClass: "title" }, [t._v("Music")]),
            a(
              "div",
              { staticClass: "has-text-centered" },
              [
                a(
                  "b-button",
                  {
                    staticClass: "is-centered",
                    attrs: {
                      type: "has-background-grey is-primary has-text-black",
                      size: "is-large",
                    },
                    on: { click: t.clickMe },
                  },
                  [t._v("Listen to the Free Soundtrack")]
                ),
              ],
              1
            ),
          ]),
        ]);
      },
      g = [];
    let v = class extends s["a"] {
      constructor() {
        super(...arguments),
          (this.soundtrackLink = "https://www.youtube.com/watch?v=hDrSy_biKRo");
      }
      clickMe() {
        window.open(this.soundtrackLink, "_blank");
      }
    };
    v = Object(r["a"])([o["b"]], v);
    var y = v,
      C = y,
      E = (a("941e"), Object(h["a"])(C, m, g, !1, null, "fe3bb384", null)),
      w = E.exports,
      I = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "section",
          { staticClass: "banner hero is-fullheight bg-image" },
          [
            a("div", { staticClass: "hero-body" }, [
              a("div", { staticClass: "columns is-vcentered banner-content" }, [
                t._m(0),
                a(
                  "div",
                  { staticClass: "column is-6" },
                  [
                    a("video-embed", {
                      staticClass: "has-text-centered my-video",
                      attrs: {
                        src:
                          "https://www.youtube.com/watch?v=r0CQO2x3VGY&list=FLm9PjqjdwqIX9b2aiDxIoiA&index=7",
                        css: "embed-responsive-21by9",
                      },
                    }),
                  ],
                  1
                ),
              ]),
            ]),
          ]
        );
      },
      x = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "column" }, [
            s("div", { staticClass: "columns" }, [
              s("div", { staticClass: "column is-one-quarter" }),
              s("div", { staticClass: "column has-background-green" }, [
                s("img", {
                  staticClass: "image",
                  attrs: { src: a("3792"), alt: "Xal title" },
                }),
                s("h2", { staticClass: "subtitle has-text-black" }, [
                  t._v(" A story driven clicker game "),
                ]),
                s("p", { staticClass: "content" }, [
                  t._v(
                    " Join Xal's Path, where you, the stranger, strive to help Xal rid the realm of a terrible blight and uncover the deceitful truth behind it. "
                  ),
                ]),
              ]),
              s("div", { staticClass: "column is-one-quarter" }),
            ]),
          ]);
        },
      ];
    let R = class extends s["a"] {
      constructor() {
        super(...arguments), (this.addedAttribute = !1);
      }
      mounted() {
        this.addTitleToIframeWhenAvailable();
      }
      addTitleToIframeWhenAvailable() {
        setInterval(() => {
          if (this.addedAttribute) return;
          const t = document.getElementsByTagName("iframe");
          t.length &&
            ((this.addedAttribute = !0),
            t[0].setAttribute("title", "Xal's Path Trailer"));
        }, 100);
      }
    };
    R = Object(r["a"])([o["b"]], R);
    var k = R,
      Q = k,
      j =
        (a("6111"),
        a("aedd"),
        Object(h["a"])(Q, I, x, !1, null, "3649f8c8", null)),
      O = j.exports,
      T = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("footer", { staticClass: "footer has-background-primary" }, [
          a(
            "div",
            { staticClass: "content has-text-centered has-text-white" },
            [
              a("p", [
                a("b", [t._v("© " + t._s(t.year()) + " Intrigue Games, LLC.")]),
                t._v(
                  " Trademarks belong to their respective owners. All Rights Reserved. "
                ),
              ]),
            ]
          ),
        ]);
      },
      F = [];
    let S = class extends s["a"] {
      year() {
        return new Date().getFullYear().toString();
      }
    };
    S = Object(r["a"])([o["b"]], S);
    var U = S,
      W = U,
      L = (a("6993"), Object(h["a"])(W, T, F, !1, null, "7eecd1ea", null)),
      G = L.exports,
      P = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("section", { staticClass: "gameplay hero bg-image" }, [
          a(
            "div",
            { staticClass: "hero-body" },
            [
              a("h1", { staticClass: "title" }, [t._v("Gameplay")]),
              a(
                "b-carousel",
                {
                  attrs: {
                    indicator: "",
                    "indicator-mode": "click",
                    "indicator-style": "is-dots",
                  },
                },
                t._l(t.carouselItems, function (e, s) {
                  return a("b-carousel-item", { key: s }, [
                    a("section", { staticClass: "columns is-centered" }, [
                      a(
                        "div",
                        { staticClass: "column" },
                        [
                          a("b-image", {
                            staticClass: "my-carousel",
                            attrs: { src: e.image, alt: e.title },
                          }),
                          a("h1", { staticClass: "title" }, [
                            t._v(t._s(e.title)),
                          ]),
                          a(
                            "p",
                            { staticClass: "content has-background-green" },
                            [t._v(" " + t._s(e.description) + " ")]
                          ),
                        ],
                        1
                      ),
                    ]),
                  ]);
                }),
                1
              ),
            ],
            1
          ),
        ]);
      },
      V = [];
    const D = a("56ae"),
      J = a("97c1"),
      Y = a("9d8b"),
      M = a("9175");
    let X = class extends s["a"] {
      constructor() {
        super(...arguments),
          (this.carouselItems = [
            {
              title: "Spells",
              description:
                "Cast spells to raise your influence and help the creatures you encounter.",
              image: D,
            },
            {
              title: "Buffs",
              description:
                "Use buffs to gain temporary benefits against mana cost.",
              image: J,
            },
            {
              title: "Rewards",
              description:
                "Earn rewards to level up your abilities and gain more influence.",
              image: Y,
            },
            {
              title: "Shop",
              description:
                "Purchase Tomes from the shop so that you can earn influence over time.",
              image: M,
            },
          ]);
      }
    };
    X = Object(r["a"])([o["b"]], X);
    var B = X,
      z = B,
      N =
        (a("3b49"),
        a("d5c4"),
        Object(h["a"])(z, P, V, !1, null, "afb1c2f2", null)),
      Z = N.exports,
      q = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "section",
          { staticClass: "coming-soon hero bg-image is-large" },
          [
            s("div", { staticClass: "hero-body" }, [
              s("h1", { staticClass: "title has-text-centered" }, [
                t._v("Coming Soon!"),
              ]),
              s("div", { staticClass: "columns" }, [
                s("div", { staticClass: "column is-4 is-offset-4 columns" }, [
                  s(
                    "div",
                    { staticClass: "column is-5" },
                    [
                      s("b-image", {
                        staticClass: "image",
                        attrs: { src: a("e00f"), alt: "Android Logo Image" },
                      }),
                    ],
                    1
                  ),
                  s(
                    "div",
                    { staticClass: "column is-5 is-offset-2" },
                    [
                      s("b-image", {
                        staticClass: "image",
                        attrs: { src: a("c32f"), alt: "Apple Logo Image" },
                      }),
                    ],
                    1
                  ),
                ]),
              ]),
            ]),
          ]
        );
      },
      K = [];
    let H = class extends s["a"] {};
    H = Object(r["a"])([o["b"]], H);
    var _ = H,
      $ = _,
      tt = (a("f847"), Object(h["a"])($, q, K, !1, null, "3287c9be", null)),
      et = tt.exports,
      at = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("section", { staticClass: "story hero is-medium bg-image" }, [
          s("div", { staticClass: "hero-body" }, [
            s("h1", { staticClass: "title has-text-centered" }, [
              t._v("Story"),
            ]),
            s("div", { staticClass: "columns is-vcentered" }, [
              s("div", { staticClass: "column" }, [
                s("img", {
                  staticClass: "image",
                  attrs: { src: a("b22e"), alt: "Xal at his desk" },
                }),
              ]),
              t._m(0),
            ]),
          ]),
        ]);
      },
      st = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "column" }, [
            a("p", { staticClass: "content" }, [
              t._v(
                " Xal's path's story focuses on the concept of relativity and control and how far people will go to fight the natural impermanence of life. Join the druid, Xal, on his path as the stranger. On your journey, you will travel across different regions and encounter several creatures that span various areas of mythology. On your path, not only will you slowly learn more about Xal, but you will also start to uncover the truth behind his intentions as well as your own. "
              ),
            ]),
          ]);
        },
      ];
    let it = class extends s["a"] {};
    it = Object(r["a"])([o["b"]], it);
    var nt = it,
      rt = nt,
      ot = (a("08a5"), Object(h["a"])(rt, at, st, !1, null, "756d65ae", null)),
      ct = ot.exports;
    let lt = class extends s["a"] {};
    lt = Object(r["a"])(
      [
        Object(o["b"])({
          components: {
            NavBar: A,
            Music: w,
            Banner: O,
            Footer: G,
            Gameplay: Z,
            ComingSoon: et,
            Story: ct,
          },
        }),
      ],
      lt
    );
    var ut = lt,
      ft = ut,
      dt = (a("5c0b"), Object(h["a"])(ft, i, n, !1, null, null, null)),
      bt = dt.exports,
      ht = a("289d"),
      pt = (a("b107"), a("3c91")),
      At = a.n(pt);
    s["a"].use(ht["a"]),
      s["a"].use(At.a),
      (document.title = "Intrigue Games"),
      (s["a"].config.productionTip = !0),
      new s["a"]({ render: (t) => t(bt) }).$mount("#app");
  },
  d5c4: function (t, e, a) {
    "use strict";
    a("e7f9");
  },
  d5d8: function (t, e, a) {
    "use strict";
    a("b101");
  },
  e00f: function (t, e, a) {
    t.exports = a.p + "img/android.78e96c8e.png";
  },
  e7f9: function (t, e, a) {},
  f847: function (t, e, a) {
    "use strict";
    a("b735");
  },
  faec: function (t, e, a) {},
});
//# sourceMappingURL=app.004bda4b.js.map
