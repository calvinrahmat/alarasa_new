var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// _worker.js/index.js
import("node:buffer").then(({ Buffer: Buffer2 }) => {
  globalThis.Buffer = Buffer2;
}).catch(() => null);
var __ALSes_PROMISE__ = import("node:async_hooks").then(({ AsyncLocalStorage }) => {
  globalThis.AsyncLocalStorage = AsyncLocalStorage;
  const envAsyncLocalStorage = new AsyncLocalStorage();
  const requestContextAsyncLocalStorage = new AsyncLocalStorage();
  globalThis.process = {
    env: new Proxy(
      {},
      {
        ownKeys: () => Reflect.ownKeys(envAsyncLocalStorage.getStore()),
        getOwnPropertyDescriptor: (_2, ...args) => Reflect.getOwnPropertyDescriptor(envAsyncLocalStorage.getStore(), ...args),
        get: (_2, property) => Reflect.get(envAsyncLocalStorage.getStore(), property),
        set: (_2, property, value) => Reflect.set(envAsyncLocalStorage.getStore(), property, value)
      }
    )
  };
  globalThis[Symbol.for("__cloudflare-request-context__")] = new Proxy(
    {},
    {
      ownKeys: () => Reflect.ownKeys(requestContextAsyncLocalStorage.getStore()),
      getOwnPropertyDescriptor: (_2, ...args) => Reflect.getOwnPropertyDescriptor(requestContextAsyncLocalStorage.getStore(), ...args),
      get: (_2, property) => Reflect.get(requestContextAsyncLocalStorage.getStore(), property),
      set: (_2, property, value) => Reflect.set(requestContextAsyncLocalStorage.getStore(), property, value)
    }
  );
  return { envAsyncLocalStorage, requestContextAsyncLocalStorage };
}).catch(() => null);
var ae = Object.create;
var H = Object.defineProperty;
var se = Object.getOwnPropertyDescriptor;
var re = Object.getOwnPropertyNames;
var ne = Object.getPrototypeOf;
var ie = Object.prototype.hasOwnProperty;
var C = /* @__PURE__ */ __name((e, t) => () => (e && (t = e(e = 0)), t), "C");
var O = /* @__PURE__ */ __name((e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), "O");
var ce = /* @__PURE__ */ __name((e, t, s, a) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let n of re(t))
      !ie.call(e, n) && n !== s && H(e, n, { get: () => t[n], enumerable: !(a = se(t, n)) || a.enumerable });
  return e;
}, "ce");
var F = /* @__PURE__ */ __name((e, t, s) => (s = e != null ? ae(ne(e)) : {}, ce(t || !e || !e.__esModule ? H(s, "default", { value: e, enumerable: true }) : s, e)), "F");
var x;
var u = C(() => {
  x = { collectedLocales: [] };
});
var _;
var l = C(() => {
  _ = { version: 3, routes: { none: [{ src: "^(?:/((?:[^/]+?)(?:/(?:[^/]+?))*))/$", headers: { Location: "/$1" }, status: 308, continue: true }, { src: "^/_next/__private/trace$", dest: "/404", status: 404, continue: true }, { src: "^/404/?$", status: 404, continue: true, missing: [{ type: "header", key: "x-prerender-revalidate" }] }, { src: "^/500$", status: 500, continue: true }, { src: "^/?$", has: [{ type: "header", key: "rsc" }], dest: "/index.rsc", headers: { vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" }, continue: true, override: true }, { src: "^/((?!.+\\.rsc).+?)(?:/)?$", has: [{ type: "header", key: "rsc" }], dest: "/$1.rsc", headers: { vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" }, continue: true, override: true }], filesystem: [{ src: "^/index(\\.action|\\.rsc)$", dest: "/", continue: true }, { src: "^/_next/data/(.*)$", dest: "/_next/data/$1", check: true }, { src: "^/\\.prefetch\\.rsc$", dest: "/__index.prefetch.rsc", check: true }, { src: "^/(.+)/\\.prefetch\\.rsc$", dest: "/$1.prefetch.rsc", check: true }, { src: "^/\\.rsc$", dest: "/index.rsc", check: true }, { src: "^/(.+)/\\.rsc$", dest: "/$1.rsc", check: true }], miss: [{ src: "^/_next/static/(?:[^/]+/pages|pages|chunks|runtime|css|image|media)/.+$", status: 404, check: true, dest: "$0" }], rewrite: [{ src: "^/_next/data/(.*)$", dest: "/404", status: 404 }, { src: "^/article/(?<nxtParticleSlug>[^/]+?)(?:\\.rsc)(?:/)?$", dest: "/article/[articleSlug].rsc?nxtParticleSlug=$nxtParticleSlug" }, { src: "^/article/(?<nxtParticleSlug>[^/]+?)(?:/)?$", dest: "/article/[articleSlug]?nxtParticleSlug=$nxtParticleSlug" }, { src: "^/studio(?:/(?<nxtPtool>.+?))?(?:\\.rsc)(?:/)?$", dest: "/studio/[[...tool]].rsc?nxtPtool=$nxtPtool" }, { src: "^/studio(?:/(?<nxtPtool>.+?))?(?:/)?$", dest: "/studio/[[...tool]]?nxtPtool=$nxtPtool" }], resource: [{ src: "^/.*$", status: 404 }], hit: [{ src: "^/_next/static/(?:[^/]+/pages|pages|chunks|runtime|css|image|media|eR\\-CkqEcceNuutppnzarr)/.+$", headers: { "cache-control": "public,max-age=31536000,immutable" }, continue: true, important: true }, { src: "^/index(?:/)?$", headers: { "x-matched-path": "/" }, continue: true, important: true }, { src: "^/((?!index$).*?)(?:/)?$", headers: { "x-matched-path": "/$1" }, continue: true, important: true }], error: [{ src: "^/.*$", dest: "/404", status: 404 }, { src: "^/.*$", dest: "/500", status: 500 }] }, images: { domains: [], sizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840, 16, 32, 48, 64, 96, 128, 256, 384], remotePatterns: [{ protocol: "https", hostname: "^(?:^(?:cdn\\.sanity\\.io)$)$", pathname: "^(?:\\/images(?:\\/(?!\\.{1,2}(?:\\/|$))(?:(?:(?!(?:^|\\/)\\.{1,2}(?:\\/|$)).)*?)|$))$" }], minimumCacheTTL: 60, formats: ["image/webp"], dangerouslyAllowSVG: false, contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;", contentDispositionType: "attachment" }, overrides: { "404.html": { path: "404", contentType: "text/html; charset=utf-8" }, "500.html": { path: "500", contentType: "text/html; charset=utf-8" }, "_error.rsc.json": { path: "_error.rsc", contentType: "application/json" }, "_app.rsc.json": { path: "_app.rsc", contentType: "application/json" }, "_document.rsc.json": { path: "_document.rsc", contentType: "application/json" }, "404.rsc.json": { path: "404.rsc", contentType: "application/json" } }, framework: { version: "15.0.3" }, crons: [] };
});
var g;
var p = C(() => {
  g = { "/.DS_Store": { type: "static" }, "/404.html": { type: "override", path: "/404.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/404.rsc.json": { type: "override", path: "/404.rsc.json", headers: { "content-type": "application/json" } }, "/500.html": { type: "override", path: "/500.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/BASIC MENU - NASI AYAM WOKU (FLATLAY).jpg": { type: "static" }, "/BASIC MENU - NASI BERKAT (FLATLAY).jpg": { type: "static" }, "/BASIC MENU - NASI SAIKORO (FLATLAY).jpg": { type: "static" }, "/KAMPUNG HALAMAN MENU - NASI JINGGO BALI (FLATLAY).jpeg": { type: "static" }, "/KAMPUNG HALAMAN MENU - NASI KUNING CIREBON (FLATLAY).jpeg": { type: "static" }, "/KAMPUNG HALAMAN MENU - NASI PADANG (FLATLAY).jpg": { type: "static" }, "/PREMIUM MENU - NASI ALARASA (FLATLAY).jpg": { type: "static" }, "/PREMIUM MENU - NASI AYAM MENTEGA (FLATLAY).jpg": { type: "static" }, "/PREMIUM MENU - NASI OPOR (FLATLAY).jpg": { type: "static" }, "/UPH.png": { type: "static" }, "/_app.rsc.json": { type: "override", path: "/_app.rsc.json", headers: { "content-type": "application/json" } }, "/_document.rsc.json": { type: "override", path: "/_document.rsc.json", headers: { "content-type": "application/json" } }, "/_error.rsc.json": { type: "override", path: "/_error.rsc.json", headers: { "content-type": "application/json" } }, "/_next/static/chunks/1103-485752c41c8219ec.js": { type: "static" }, "/_next/static/chunks/1157.e7579b7bf4bd5261.js": { type: "static" }, "/_next/static/chunks/13b76428-250fb8d199f8d754.js": { type: "static" }, "/_next/static/chunks/1517-3843c8838ae445a7.js": { type: "static" }, "/_next/static/chunks/1574.9177c7bec23dafe2.js": { type: "static" }, "/_next/static/chunks/167.f8b2ba0d093b5fbf.js": { type: "static" }, "/_next/static/chunks/20e9ecfc-8468405b3626e0aa.js": { type: "static" }, "/_next/static/chunks/2131.bb903fd63721197f.js": { type: "static" }, "/_next/static/chunks/2338.b6792db27046ffcd.js": { type: "static" }, "/_next/static/chunks/2390.e0fa57f12c0a08fa.js": { type: "static" }, "/_next/static/chunks/256.1e144ccfda87613b.js": { type: "static" }, "/_next/static/chunks/2805.48e773d88647b986.js": { type: "static" }, "/_next/static/chunks/284.6a1186c5c45d4235.js": { type: "static" }, "/_next/static/chunks/2848.5120fdb877dbec80.js": { type: "static" }, "/_next/static/chunks/3204862b-be0159e29e933018.js": { type: "static" }, "/_next/static/chunks/3281.0178585113b16e99.js": { type: "static" }, "/_next/static/chunks/3394-fca5cb7dc49647b7.js": { type: "static" }, "/_next/static/chunks/363642f4.860abe4d10dd288d.js": { type: "static" }, "/_next/static/chunks/3869.9bdf75e9f3af304e.js": { type: "static" }, "/_next/static/chunks/4099.ce3fa28f4c1cbabf.js": { type: "static" }, "/_next/static/chunks/4321-ff0392746adb3dac.js": { type: "static" }, "/_next/static/chunks/4836.19c468a95d848b16.js": { type: "static" }, "/_next/static/chunks/4bd1b696-985b09d5e7915070.js": { type: "static" }, "/_next/static/chunks/5393.732db03f40c2cf36.js": { type: "static" }, "/_next/static/chunks/5952-c97424e5d2b262d5.js": { type: "static" }, "/_next/static/chunks/5954.825311d7d935af55.js": { type: "static" }, "/_next/static/chunks/6004-647d527b3297ea1c.js": { type: "static" }, "/_next/static/chunks/6627-bf1135d9721fdb50.js": { type: "static" }, "/_next/static/chunks/7970-e4637c3fa94ae63c.js": { type: "static" }, "/_next/static/chunks/8062.2c1712fcb40052ba.js": { type: "static" }, "/_next/static/chunks/8494.996e3a5fd3999e62.js": { type: "static" }, "/_next/static/chunks/8cc6faea-cfc581e8e5520561.js": { type: "static" }, "/_next/static/chunks/9059-5e05121c3d5219de.js": { type: "static" }, "/_next/static/chunks/9224.3fd05a0eecfa140a.js": { type: "static" }, "/_next/static/chunks/9340.31a80c8a2cbfa74f.js": { type: "static" }, "/_next/static/chunks/9371-22a0a6c567337e15.js": { type: "static" }, "/_next/static/chunks/app/_not-found/page-f3ac8a425c8fd7bd.js": { type: "static" }, "/_next/static/chunks/app/about/page-3bafcf1fcac4fbff.js": { type: "static" }, "/_next/static/chunks/app/admin/page-c997207a85e0e699.js": { type: "static" }, "/_next/static/chunks/app/article/[articleSlug]/page-352acb6d42c955b0.js": { type: "static" }, "/_next/static/chunks/app/article/page-0710760c086c38a4.js": { type: "static" }, "/_next/static/chunks/app/layout-93efd26249552007.js": { type: "static" }, "/_next/static/chunks/app/nasi-box/page-0a4e56037c281dc4.js": { type: "static" }, "/_next/static/chunks/app/page-73436165e2315478.js": { type: "static" }, "/_next/static/chunks/app/prasmanan/page-cb8587de53990354.js": { type: "static" }, "/_next/static/chunks/app/snack-box/page-5d0264897cdfcd63.js": { type: "static" }, "/_next/static/chunks/app/studio/[[...tool]]/page-b15501f2875e76a8.js": { type: "static" }, "/_next/static/chunks/c23fc295-28b8f50188607736.js": { type: "static" }, "/_next/static/chunks/ca7446a9.1c3f11bf47a0c904.js": { type: "static" }, "/_next/static/chunks/ccd63cfe-aeb1a6499295e477.js": { type: "static" }, "/_next/static/chunks/d648eb28-178d5a875a19c92a.js": { type: "static" }, "/_next/static/chunks/d8e9270f-40c3b04d7a6fa075.js": { type: "static" }, "/_next/static/chunks/d8f92815-b43ad521f7808e7c.js": { type: "static" }, "/_next/static/chunks/framework-1ec85e83ffeb8a74.js": { type: "static" }, "/_next/static/chunks/main-app-c5b8d05cf23b6b18.js": { type: "static" }, "/_next/static/chunks/main-cf6c6f10e24a0a25.js": { type: "static" }, "/_next/static/chunks/pages/_app-5f03510007f8ee45.js": { type: "static" }, "/_next/static/chunks/pages/_error-8efa4fbf3acc0458.js": { type: "static" }, "/_next/static/chunks/polyfills-42372ed130431b0a.js": { type: "static" }, "/_next/static/chunks/webpack-3247959f2826a654.js": { type: "static" }, "/_next/static/css/1e9446437c52d5aa.css": { type: "static" }, "/_next/static/eR-CkqEcceNuutppnzarr/_buildManifest.js": { type: "static" }, "/_next/static/eR-CkqEcceNuutppnzarr/_ssgManifest.js": { type: "static" }, "/_next/static/media/4473ecc91f70f139-s.p.woff": { type: "static" }, "/_next/static/media/463dafcda517f24f-s.p.woff": { type: "static" }, "/_next/static/media/c97ba388c2f2fc15-s.p.ttf": { type: "static" }, "/about-us.jpg": { type: "static" }, "/about-us2.jpg": { type: "static" }, "/alarasa.jpg": { type: "static" }, "/alarasa2.jpg": { type: "static" }, "/alarasa3.jpg": { type: "static" }, "/article-bg.jpg": { type: "static" }, "/atma-jaya.png": { type: "static" }, "/avatar.jpg": { type: "static" }, "/bakrie.png": { type: "static" }, "/djp.png": { type: "static" }, "/fatmawati.png": { type: "static" }, "/fonts/Berenika-Bold.ttf": { type: "static" }, "/hero-image.jpeg": { type: "static" }, "/hero-image2.jpg": { type: "static" }, "/home-coffee-break.jpg": { type: "static" }, "/home-nasi-box.jpg": { type: "static" }, "/home-prasmanan.jpg": { type: "static" }, "/huawei.png": { type: "static" }, "/kemendikbud.png": { type: "static" }, "/kementrian.png": { type: "static" }, "/kimia-farma.png": { type: "static" }, "/kitchen1.jpg": { type: "static" }, "/kitchen2.jpg": { type: "static" }, "/kitchen3.jpg": { type: "static" }, "/kitchen4.jpg": { type: "static" }, "/logo.png": { type: "static" }, "/menu-basic.png": { type: "static" }, "/minuman.png": { type: "static" }, "/nasi-box.png": { type: "static" }, "/our-values.png": { type: "static" }, "/paragon.png": { type: "static" }, "/prasmanan-hero.png": { type: "static" }, "/prasmanan-hero2.png": { type: "static" }, "/prasmanan.jpg": { type: "static" }, "/prasmanan.png": { type: "static" }, "/prasmanan2.jpg": { type: "static" }, "/prasmanan3.jpg": { type: "static" }, "/prasmanan4.jpg": { type: "static" }, "/prasmanan5.PNG": { type: "static" }, "/premium-box-hero.png": { type: "static" }, "/promo1.jpeg": { type: "static" }, "/promo2.jpeg": { type: "static" }, "/promo3.png": { type: "static" }, "/promo4.png": { type: "static" }, "/ruangguru.png": { type: "static" }, "/snack.jpg": { type: "static" }, "/snack1.jpg": { type: "static" }, "/snack2.jpg": { type: "static" }, "/snack3.png": { type: "static" }, "/snack4.png": { type: "static" }, "/snackbox.png": { type: "static" }, "/whatsapp-logo.svg": { type: "static" }, "/studio/[[...tool]]": { type: "function", entrypoint: "__next-on-pages-dist__/functions/studio/[[...tool]].func.js" }, "/studio/[[...tool]].rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/studio/[[...tool]].func.js" }, "/404": { type: "override", path: "/404.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/500": { type: "override", path: "/500.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/_error.rsc": { type: "override", path: "/_error.rsc.json", headers: { "content-type": "application/json" } }, "/_app.rsc": { type: "override", path: "/_app.rsc.json", headers: { "content-type": "application/json" } }, "/_document.rsc": { type: "override", path: "/_document.rsc.json", headers: { "content-type": "application/json" } }, "/404.rsc": { type: "override", path: "/404.rsc.json", headers: { "content-type": "application/json" } }, "/about.html": { type: "override", path: "/about.html", headers: { "x-nextjs-stale-time": "4294967294", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/about/layout,_N_T_/about/page,_N_T_/about", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/about": { type: "override", path: "/about.html", headers: { "x-nextjs-stale-time": "4294967294", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/about/layout,_N_T_/about/page,_N_T_/about", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/about.rsc": { type: "override", path: "/about.rsc", headers: { "x-nextjs-stale-time": "4294967294", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/about/layout,_N_T_/about/page,_N_T_/about", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch", "content-type": "text/x-component" } }, "/admin.html": { type: "override", path: "/admin.html", headers: { "x-nextjs-stale-time": "4294967294", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/admin/layout,_N_T_/admin/page,_N_T_/admin", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/admin": { type: "override", path: "/admin.html", headers: { "x-nextjs-stale-time": "4294967294", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/admin/layout,_N_T_/admin/page,_N_T_/admin", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/admin.rsc": { type: "override", path: "/admin.rsc", headers: { "x-nextjs-stale-time": "4294967294", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/admin/layout,_N_T_/admin/page,_N_T_/admin", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch", "content-type": "text/x-component" } }, "/article/4-tips-memilih-jasa-catering-dengan-dapur-yang-bersih.html": { type: "override", path: "/article/4-tips-memilih-jasa-catering-dengan-dapur-yang-bersih.html", headers: { "x-nextjs-stale-time": "4294967294", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/article/layout,_N_T_/article/[articleSlug]/layout,_N_T_/article/[articleSlug]/page,_N_T_/article/4-tips-memilih-jasa-catering-dengan-dapur-yang-bersih,sanity,sanity:s1:FHeK/Q,sanity:s1:28aiFw", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/article/4-tips-memilih-jasa-catering-dengan-dapur-yang-bersih": { type: "override", path: "/article/4-tips-memilih-jasa-catering-dengan-dapur-yang-bersih.html", headers: { "x-nextjs-stale-time": "4294967294", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/article/layout,_N_T_/article/[articleSlug]/layout,_N_T_/article/[articleSlug]/page,_N_T_/article/4-tips-memilih-jasa-catering-dengan-dapur-yang-bersih,sanity,sanity:s1:FHeK/Q,sanity:s1:28aiFw", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/article/4-tips-memilih-jasa-catering-dengan-dapur-yang-bersih.rsc": { type: "override", path: "/article/4-tips-memilih-jasa-catering-dengan-dapur-yang-bersih.rsc", headers: { "x-nextjs-stale-time": "4294967294", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/article/layout,_N_T_/article/[articleSlug]/layout,_N_T_/article/[articleSlug]/page,_N_T_/article/4-tips-memilih-jasa-catering-dengan-dapur-yang-bersih,sanity,sanity:s1:FHeK/Q,sanity:s1:28aiFw", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch", "content-type": "text/x-component" } }, "/article/5-keuntungan-pakai-jasa-catering-kantor-untuk-acara-meeting.html": { type: "override", path: "/article/5-keuntungan-pakai-jasa-catering-kantor-untuk-acara-meeting.html", headers: { "x-nextjs-stale-time": "4294967294", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/article/layout,_N_T_/article/[articleSlug]/layout,_N_T_/article/[articleSlug]/page,_N_T_/article/5-keuntungan-pakai-jasa-catering-kantor-untuk-acara-meeting,sanity,sanity:s1:FHeK/Q,sanity:s1:db+TgA", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/article/5-keuntungan-pakai-jasa-catering-kantor-untuk-acara-meeting": { type: "override", path: "/article/5-keuntungan-pakai-jasa-catering-kantor-untuk-acara-meeting.html", headers: { "x-nextjs-stale-time": "4294967294", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/article/layout,_N_T_/article/[articleSlug]/layout,_N_T_/article/[articleSlug]/page,_N_T_/article/5-keuntungan-pakai-jasa-catering-kantor-untuk-acara-meeting,sanity,sanity:s1:FHeK/Q,sanity:s1:db+TgA", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/article/5-keuntungan-pakai-jasa-catering-kantor-untuk-acara-meeting.rsc": { type: "override", path: "/article/5-keuntungan-pakai-jasa-catering-kantor-untuk-acara-meeting.rsc", headers: { "x-nextjs-stale-time": "4294967294", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/article/layout,_N_T_/article/[articleSlug]/layout,_N_T_/article/[articleSlug]/page,_N_T_/article/5-keuntungan-pakai-jasa-catering-kantor-untuk-acara-meeting,sanity,sanity:s1:FHeK/Q,sanity:s1:db+TgA", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch", "content-type": "text/x-component" } }, "/article/5-menu-nasi-kotak-yang-cocok-untuk-acara-kantor.html": { type: "override", path: "/article/5-menu-nasi-kotak-yang-cocok-untuk-acara-kantor.html", headers: { "x-nextjs-stale-time": "4294967294", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/article/layout,_N_T_/article/[articleSlug]/layout,_N_T_/article/[articleSlug]/page,_N_T_/article/5-menu-nasi-kotak-yang-cocok-untuk-acara-kantor,sanity,sanity:s1:HlKlbA,sanity:s1:9/woeA", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/article/5-menu-nasi-kotak-yang-cocok-untuk-acara-kantor": { type: "override", path: "/article/5-menu-nasi-kotak-yang-cocok-untuk-acara-kantor.html", headers: { "x-nextjs-stale-time": "4294967294", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/article/layout,_N_T_/article/[articleSlug]/layout,_N_T_/article/[articleSlug]/page,_N_T_/article/5-menu-nasi-kotak-yang-cocok-untuk-acara-kantor,sanity,sanity:s1:HlKlbA,sanity:s1:9/woeA", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/article/5-menu-nasi-kotak-yang-cocok-untuk-acara-kantor.rsc": { type: "override", path: "/article/5-menu-nasi-kotak-yang-cocok-untuk-acara-kantor.rsc", headers: { "x-nextjs-stale-time": "4294967294", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/article/layout,_N_T_/article/[articleSlug]/layout,_N_T_/article/[articleSlug]/page,_N_T_/article/5-menu-nasi-kotak-yang-cocok-untuk-acara-kantor,sanity,sanity:s1:HlKlbA,sanity:s1:9/woeA", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch", "content-type": "text/x-component" } }, "/article/cara-cari-jasa-catering-dengan-cepat-untuk-acara-dadakan.html": { type: "override", path: "/article/cara-cari-jasa-catering-dengan-cepat-untuk-acara-dadakan.html", headers: { "x-nextjs-stale-time": "4294967294", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/article/layout,_N_T_/article/[articleSlug]/layout,_N_T_/article/[articleSlug]/page,_N_T_/article/cara-cari-jasa-catering-dengan-cepat-untuk-acara-dadakan,sanity,sanity:s1:PqFSxw", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/article/cara-cari-jasa-catering-dengan-cepat-untuk-acara-dadakan": { type: "override", path: "/article/cara-cari-jasa-catering-dengan-cepat-untuk-acara-dadakan.html", headers: { "x-nextjs-stale-time": "4294967294", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/article/layout,_N_T_/article/[articleSlug]/layout,_N_T_/article/[articleSlug]/page,_N_T_/article/cara-cari-jasa-catering-dengan-cepat-untuk-acara-dadakan,sanity,sanity:s1:PqFSxw", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/article/cara-cari-jasa-catering-dengan-cepat-untuk-acara-dadakan.rsc": { type: "override", path: "/article/cara-cari-jasa-catering-dengan-cepat-untuk-acara-dadakan.rsc", headers: { "x-nextjs-stale-time": "4294967294", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/article/layout,_N_T_/article/[articleSlug]/layout,_N_T_/article/[articleSlug]/page,_N_T_/article/cara-cari-jasa-catering-dengan-cepat-untuk-acara-dadakan,sanity,sanity:s1:PqFSxw", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch", "content-type": "text/x-component" } }, "/article.html": { type: "override", path: "/article.html", headers: { "x-nextjs-stale-time": "4294967294", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/article/layout,_N_T_/article/page,_N_T_/article", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/article": { type: "override", path: "/article.html", headers: { "x-nextjs-stale-time": "4294967294", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/article/layout,_N_T_/article/page,_N_T_/article", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/article.rsc": { type: "override", path: "/article.rsc", headers: { "x-nextjs-stale-time": "4294967294", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/article/layout,_N_T_/article/page,_N_T_/article", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch", "content-type": "text/x-component" } }, "/favicon.ico": { type: "override", path: "/favicon.ico", headers: { "cache-control": "public, max-age=0, must-revalidate", "content-type": "image/x-icon", "x-next-cache-tags": "_N_T_/layout,_N_T_/favicon.ico/layout,_N_T_/favicon.ico/route,_N_T_/favicon.ico", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/index.html": { type: "override", path: "/index.html", headers: { "x-nextjs-stale-time": "4294967294", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/page,_N_T_/", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/index": { type: "override", path: "/index.html", headers: { "x-nextjs-stale-time": "4294967294", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/page,_N_T_/", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/": { type: "override", path: "/index.html", headers: { "x-nextjs-stale-time": "4294967294", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/page,_N_T_/", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/index.rsc": { type: "override", path: "/index.rsc", headers: { "x-nextjs-stale-time": "4294967294", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/page,_N_T_/", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch", "content-type": "text/x-component" } }, "/nasi-box.html": { type: "override", path: "/nasi-box.html", headers: { "x-nextjs-stale-time": "4294967294", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/nasi-box/layout,_N_T_/nasi-box/page,_N_T_/nasi-box", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/nasi-box": { type: "override", path: "/nasi-box.html", headers: { "x-nextjs-stale-time": "4294967294", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/nasi-box/layout,_N_T_/nasi-box/page,_N_T_/nasi-box", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/nasi-box.rsc": { type: "override", path: "/nasi-box.rsc", headers: { "x-nextjs-stale-time": "4294967294", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/nasi-box/layout,_N_T_/nasi-box/page,_N_T_/nasi-box", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch", "content-type": "text/x-component" } }, "/prasmanan.html": { type: "override", path: "/prasmanan.html", headers: { "x-nextjs-stale-time": "4294967294", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/prasmanan/layout,_N_T_/prasmanan/page,_N_T_/prasmanan", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/prasmanan": { type: "override", path: "/prasmanan.html", headers: { "x-nextjs-stale-time": "4294967294", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/prasmanan/layout,_N_T_/prasmanan/page,_N_T_/prasmanan", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/prasmanan.rsc": { type: "override", path: "/prasmanan.rsc", headers: { "x-nextjs-stale-time": "4294967294", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/prasmanan/layout,_N_T_/prasmanan/page,_N_T_/prasmanan", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch", "content-type": "text/x-component" } }, "/snack-box.html": { type: "override", path: "/snack-box.html", headers: { "x-nextjs-stale-time": "4294967294", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/snack-box/layout,_N_T_/snack-box/page,_N_T_/snack-box", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/snack-box": { type: "override", path: "/snack-box.html", headers: { "x-nextjs-stale-time": "4294967294", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/snack-box/layout,_N_T_/snack-box/page,_N_T_/snack-box", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/snack-box.rsc": { type: "override", path: "/snack-box.rsc", headers: { "x-nextjs-stale-time": "4294967294", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/snack-box/layout,_N_T_/snack-box/page,_N_T_/snack-box", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch", "content-type": "text/x-component" } } };
});
var q = O((Ke, V) => {
  "use strict";
  u();
  l();
  p();
  function R(e, t) {
    e = String(e || "").trim();
    let s = e, a, n = "";
    if (/^[^a-zA-Z\\\s]/.test(e)) {
      a = e[0];
      let c = e.lastIndexOf(a);
      n += e.substring(c + 1), e = e.substring(1, c);
    }
    let r = 0;
    return e = le(e, (c) => {
      if (/^\(\?[P<']/.test(c)) {
        let o = /^\(\?P?[<']([^>']+)[>']/.exec(c);
        if (!o)
          throw new Error(`Failed to extract named captures from ${JSON.stringify(c)}`);
        let h = c.substring(o[0].length, c.length - 1);
        return t && (t[r] = o[1]), r++, `(${h})`;
      }
      return c.substring(0, 3) === "(?:" || r++, c;
    }), e = e.replace(/\[:([^:]+):\]/g, (c, o) => R.characterClasses[o] || c), new R.PCRE(e, n, s, n, a);
  }
  __name(R, "R");
  function le(e, t) {
    let s = 0, a = 0, n = false;
    for (let i = 0; i < e.length; i++) {
      let r = e[i];
      if (n) {
        n = false;
        continue;
      }
      switch (r) {
        case "(":
          a === 0 && (s = i), a++;
          break;
        case ")":
          if (a > 0 && (a--, a === 0)) {
            let c = i + 1, o = s === 0 ? "" : e.substring(0, s), h = e.substring(c), d = String(t(e.substring(s, c)));
            e = o + d + h, i = s;
          }
          break;
        case "\\":
          n = true;
          break;
        default:
          break;
      }
    }
    return e;
  }
  __name(le, "le");
  (function(e) {
    class t extends RegExp {
      constructor(a, n, i, r, c) {
        super(a, n), this.pcrePattern = i, this.pcreFlags = r, this.delimiter = c;
      }
    }
    __name(t, "t");
    e.PCRE = t, e.characterClasses = { alnum: "[A-Za-z0-9]", word: "[A-Za-z0-9_]", alpha: "[A-Za-z]", blank: "[ \\t]", cntrl: "[\\x00-\\x1F\\x7F]", digit: "\\d", graph: "[\\x21-\\x7E]", lower: "[a-z]", print: "[\\x20-\\x7E]", punct: "[\\]\\[!\"#$%&'()*+,./:;<=>?@\\\\^_`{|}~-]", space: "\\s", upper: "[A-Z]", xdigit: "[A-Fa-f0-9]" };
  })(R || (R = {}));
  R.prototype = R.PCRE.prototype;
  V.exports = R;
});
var Q = O((U) => {
  "use strict";
  u();
  l();
  p();
  U.parse = Se;
  U.serialize = ke;
  var Ne = Object.prototype.toString, j = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
  function Se(e, t) {
    if (typeof e != "string")
      throw new TypeError("argument str must be a string");
    for (var s = {}, a = t || {}, n = a.decode || Te, i = 0; i < e.length; ) {
      var r = e.indexOf("=", i);
      if (r === -1)
        break;
      var c = e.indexOf(";", i);
      if (c === -1)
        c = e.length;
      else if (c < r) {
        i = e.lastIndexOf(";", r - 1) + 1;
        continue;
      }
      var o = e.slice(i, r).trim();
      if (s[o] === void 0) {
        var h = e.slice(r + 1, c).trim();
        h.charCodeAt(0) === 34 && (h = h.slice(1, -1)), s[o] = ve(h, n);
      }
      i = c + 1;
    }
    return s;
  }
  __name(Se, "Se");
  function ke(e, t, s) {
    var a = s || {}, n = a.encode || be;
    if (typeof n != "function")
      throw new TypeError("option encode is invalid");
    if (!j.test(e))
      throw new TypeError("argument name is invalid");
    var i = n(t);
    if (i && !j.test(i))
      throw new TypeError("argument val is invalid");
    var r = e + "=" + i;
    if (a.maxAge != null) {
      var c = a.maxAge - 0;
      if (isNaN(c) || !isFinite(c))
        throw new TypeError("option maxAge is invalid");
      r += "; Max-Age=" + Math.floor(c);
    }
    if (a.domain) {
      if (!j.test(a.domain))
        throw new TypeError("option domain is invalid");
      r += "; Domain=" + a.domain;
    }
    if (a.path) {
      if (!j.test(a.path))
        throw new TypeError("option path is invalid");
      r += "; Path=" + a.path;
    }
    if (a.expires) {
      var o = a.expires;
      if (!Pe(o) || isNaN(o.valueOf()))
        throw new TypeError("option expires is invalid");
      r += "; Expires=" + o.toUTCString();
    }
    if (a.httpOnly && (r += "; HttpOnly"), a.secure && (r += "; Secure"), a.priority) {
      var h = typeof a.priority == "string" ? a.priority.toLowerCase() : a.priority;
      switch (h) {
        case "low":
          r += "; Priority=Low";
          break;
        case "medium":
          r += "; Priority=Medium";
          break;
        case "high":
          r += "; Priority=High";
          break;
        default:
          throw new TypeError("option priority is invalid");
      }
    }
    if (a.sameSite) {
      var d = typeof a.sameSite == "string" ? a.sameSite.toLowerCase() : a.sameSite;
      switch (d) {
        case true:
          r += "; SameSite=Strict";
          break;
        case "lax":
          r += "; SameSite=Lax";
          break;
        case "strict":
          r += "; SameSite=Strict";
          break;
        case "none":
          r += "; SameSite=None";
          break;
        default:
          throw new TypeError("option sameSite is invalid");
      }
    }
    return r;
  }
  __name(ke, "ke");
  function Te(e) {
    return e.indexOf("%") !== -1 ? decodeURIComponent(e) : e;
  }
  __name(Te, "Te");
  function be(e) {
    return encodeURIComponent(e);
  }
  __name(be, "be");
  function Pe(e) {
    return Ne.call(e) === "[object Date]" || e instanceof Date;
  }
  __name(Pe, "Pe");
  function ve(e, t) {
    try {
      return t(e);
    } catch {
      return e;
    }
  }
  __name(ve, "ve");
});
u();
l();
p();
u();
l();
p();
u();
l();
p();
var S = "INTERNAL_SUSPENSE_CACHE_HOSTNAME.local";
u();
l();
p();
u();
l();
p();
u();
l();
p();
u();
l();
p();
var $ = F(q());
function P(e, t, s) {
  if (t == null)
    return { match: null, captureGroupKeys: [] };
  let a = s ? "" : "i", n = [];
  return { match: (0, $.default)(`%${e}%${a}`, n).exec(t), captureGroupKeys: n };
}
__name(P, "P");
function k(e, t, s, { namedOnly: a } = {}) {
  return e.replace(/\$([a-zA-Z0-9_]+)/g, (n, i) => {
    let r = s.indexOf(i);
    return a && r === -1 ? n : (r === -1 ? t[parseInt(i, 10)] : t[r + 1]) || "";
  });
}
__name(k, "k");
function A(e, { url: t, cookies: s, headers: a, routeDest: n }) {
  switch (e.type) {
    case "host":
      return { valid: t.hostname === e.value };
    case "header":
      return e.value !== void 0 ? E(e.value, a.get(e.key), n) : { valid: a.has(e.key) };
    case "cookie": {
      let i = s[e.key];
      return i && e.value !== void 0 ? E(e.value, i, n) : { valid: i !== void 0 };
    }
    case "query":
      return e.value !== void 0 ? E(e.value, t.searchParams.get(e.key), n) : { valid: t.searchParams.has(e.key) };
  }
}
__name(A, "A");
function E(e, t, s) {
  let { match: a, captureGroupKeys: n } = P(e, t);
  return s && a && n.length ? { valid: !!a, newRouteDest: k(s, a, n, { namedOnly: true }) } : { valid: !!a };
}
__name(E, "E");
u();
l();
p();
function D(e) {
  let t = new Headers(e.headers);
  return e.cf && (t.set("x-vercel-ip-city", encodeURIComponent(e.cf.city)), t.set("x-vercel-ip-country", e.cf.country), t.set("x-vercel-ip-country-region", e.cf.regionCode), t.set("x-vercel-ip-latitude", e.cf.latitude), t.set("x-vercel-ip-longitude", e.cf.longitude)), t.set("x-vercel-sc-host", S), new Request(e, { headers: t });
}
__name(D, "D");
u();
l();
p();
function y(e, t, s) {
  let a = t instanceof Headers ? t.entries() : Object.entries(t);
  for (let [n, i] of a) {
    let r = n.toLowerCase(), c = s?.match ? k(i, s.match, s.captureGroupKeys) : i;
    r === "set-cookie" ? e.append(r, c) : e.set(r, c);
  }
}
__name(y, "y");
function T(e) {
  return /^https?:\/\//.test(e);
}
__name(T, "T");
function m(e, t) {
  for (let [s, a] of t.entries()) {
    let n = /^nxtP(.+)$/.exec(s), i = /^nxtI(.+)$/.exec(s);
    n?.[1] ? (e.set(s, a), e.set(n[1], a)) : i?.[1] ? e.set(i[1], a.replace(/(\(\.+\))+/, "")) : (!e.has(s) || !!a && !e.getAll(s).includes(a)) && e.append(s, a);
  }
}
__name(m, "m");
function M(e, t) {
  let s = new URL(t, e.url);
  return m(s.searchParams, new URL(e.url).searchParams), s.pathname = s.pathname.replace(/\/index.html$/, "/").replace(/\.html$/, ""), new Request(s, e);
}
__name(M, "M");
function b(e) {
  return new Response(e.body, e);
}
__name(b, "b");
function I(e) {
  return e.split(",").map((t) => {
    let [s, a] = t.split(";"), n = parseFloat((a ?? "q=1").replace(/q *= */gi, ""));
    return [s.trim(), isNaN(n) ? 1 : n];
  }).sort((t, s) => s[1] - t[1]).map(([t]) => t === "*" || t === "" ? [] : t).flat();
}
__name(I, "I");
u();
l();
p();
function L(e) {
  switch (e) {
    case "none":
      return "filesystem";
    case "filesystem":
      return "rewrite";
    case "rewrite":
      return "resource";
    case "resource":
      return "miss";
    default:
      return "miss";
  }
}
__name(L, "L");
async function v(e, { request: t, assetsFetcher: s, ctx: a }, { path: n, searchParams: i }) {
  let r, c = new URL(t.url);
  m(c.searchParams, i);
  let o = new Request(c, t);
  try {
    switch (e?.type) {
      case "function":
      case "middleware": {
        let h = await import(e.entrypoint);
        try {
          r = await h.default(o, a);
        } catch (d) {
          let f = d;
          throw f.name === "TypeError" && f.message.endsWith("default is not a function") ? new Error(`An error occurred while evaluating the target edge function (${e.entrypoint})`) : d;
        }
        break;
      }
      case "override": {
        r = b(await s.fetch(M(o, e.path ?? n))), e.headers && y(r.headers, e.headers);
        break;
      }
      case "static": {
        r = await s.fetch(M(o, n));
        break;
      }
      default:
        r = new Response("Not Found", { status: 404 });
    }
  } catch (h) {
    return console.error(h), new Response("Internal Server Error", { status: 500 });
  }
  return b(r);
}
__name(v, "v");
function B(e, t) {
  let s = "^//?(?:", a = ")/(.*)$";
  return !e.startsWith(s) || !e.endsWith(a) ? false : e.slice(s.length, -a.length).split("|").every((i) => t.has(i));
}
__name(B, "B");
u();
l();
p();
function pe(e, { protocol: t, hostname: s, port: a, pathname: n }) {
  return !(t && e.protocol.replace(/:$/, "") !== t || !new RegExp(s).test(e.hostname) || a && !new RegExp(a).test(e.port) || n && !new RegExp(n).test(e.pathname));
}
__name(pe, "pe");
function he(e, t) {
  if (e.method !== "GET")
    return;
  let { origin: s, searchParams: a } = new URL(e.url), n = a.get("url"), i = Number.parseInt(a.get("w") ?? "", 10), r = Number.parseInt(a.get("q") ?? "75", 10);
  if (!n || Number.isNaN(i) || Number.isNaN(r) || !t?.sizes?.includes(i) || r < 0 || r > 100)
    return;
  let c = new URL(n, s);
  if (c.pathname.endsWith(".svg") && !t?.dangerouslyAllowSVG)
    return;
  let o = n.startsWith("//"), h = n.startsWith("/") && !o;
  if (!h && !t?.domains?.includes(c.hostname) && !t?.remotePatterns?.find((N) => pe(c, N)))
    return;
  let d = e.headers.get("Accept") ?? "", f = t?.formats?.find((N) => d.includes(N))?.replace("image/", "");
  return { isRelative: h, imageUrl: c, options: { width: i, quality: r, format: f } };
}
__name(he, "he");
function de(e, t, s) {
  let a = new Headers();
  if (s?.contentSecurityPolicy && a.set("Content-Security-Policy", s.contentSecurityPolicy), s?.contentDispositionType) {
    let i = t.pathname.split("/").pop(), r = i ? `${s.contentDispositionType}; filename="${i}"` : s.contentDispositionType;
    a.set("Content-Disposition", r);
  }
  e.headers.has("Cache-Control") || a.set("Cache-Control", `public, max-age=${s?.minimumCacheTTL ?? 60}`);
  let n = b(e);
  return y(n.headers, a), n;
}
__name(de, "de");
async function K(e, { buildOutput: t, assetsFetcher: s, imagesConfig: a }) {
  let n = he(e, a);
  if (!n)
    return new Response("Invalid image resizing request", { status: 400 });
  let { isRelative: i, imageUrl: r } = n, o = await (i && r.pathname in t ? s.fetch.bind(s) : fetch)(r);
  return de(o, r, a);
}
__name(K, "K");
u();
l();
p();
u();
l();
p();
var _e = "x-vercel-cache-tags";
var ge = "x-next-cache-soft-tags";
var xe = Symbol.for("__cloudflare-request-context__");
async function z(e) {
  let t = `https://${S}/v1/suspense-cache/`;
  if (!e.url.startsWith(t))
    return null;
  try {
    let s = new URL(e.url), a = await fe();
    if (s.pathname === "/v1/suspense-cache/revalidate") {
      let i = s.searchParams.get("tags")?.split(",") ?? [];
      for (let r of i)
        await a.revalidateTag(r);
      return new Response(null, { status: 200 });
    }
    let n = s.pathname.replace("/v1/suspense-cache/", "");
    if (!n.length)
      return new Response("Invalid cache key", { status: 400 });
    switch (e.method) {
      case "GET": {
        let i = W(e, ge), r = await a.get(n, { softTags: i });
        return r ? new Response(JSON.stringify(r.value), { status: 200, headers: { "Content-Type": "application/json", "x-vercel-cache-state": "fresh", age: `${(Date.now() - (r.lastModified ?? Date.now())) / 1e3}` } }) : new Response(null, { status: 404 });
      }
      case "POST": {
        let i = globalThis[xe], r = /* @__PURE__ */ __name(async () => {
          let c = await e.json();
          c.data.tags === void 0 && (c.tags ??= W(e, _e) ?? []), await a.set(n, c);
        }, "r");
        return i ? i.ctx.waitUntil(r()) : await r(), new Response(null, { status: 200 });
      }
      default:
        return new Response(null, { status: 405 });
    }
  } catch (s) {
    return console.error(s), new Response("Error handling cache request", { status: 500 });
  }
}
__name(z, "z");
async function fe() {
  return process.env.__NEXT_ON_PAGES__KV_SUSPENSE_CACHE ? G("kv") : G("cache-api");
}
__name(fe, "fe");
async function G(e) {
  let t = await import(`./__next-on-pages-dist__/cache/${e}.js`);
  return new t.default();
}
__name(G, "G");
function W(e, t) {
  return e.headers.get(t)?.split(",")?.filter(Boolean);
}
__name(W, "W");
function J() {
  globalThis[Y] || (ye(), globalThis[Y] = true);
}
__name(J, "J");
function ye() {
  let e = globalThis.fetch;
  globalThis.fetch = async (...t) => {
    let s = new Request(...t), a = await me(s);
    return a || (a = await z(s), a) ? a : (Re(s), e(s));
  };
}
__name(ye, "ye");
async function me(e) {
  if (e.url.startsWith("blob:"))
    try {
      let s = (await import(`./__next-on-pages-dist__/assets/${new URL(e.url).pathname}.bin`)).default, a = { async arrayBuffer() {
        return s;
      }, get body() {
        return new ReadableStream({ start(n) {
          let i = Buffer.from(s);
          n.enqueue(i), n.close();
        } });
      }, async text() {
        return Buffer.from(s).toString();
      }, async json() {
        let n = Buffer.from(s);
        return JSON.stringify(n.toString());
      }, async blob() {
        return new Blob(s);
      } };
      return a.clone = () => ({ ...a }), a;
    } catch {
    }
  return null;
}
__name(me, "me");
function Re(e) {
  e.headers.has("user-agent") || e.headers.set("user-agent", "Next.js Middleware");
}
__name(Re, "Re");
var Y = Symbol.for("next-on-pages fetch patch");
u();
l();
p();
var Z = F(Q());
var w = /* @__PURE__ */ __name(class {
  constructor(t, s, a, n, i) {
    this.routes = t;
    this.output = s;
    this.reqCtx = a;
    this.url = new URL(a.request.url), this.cookies = (0, Z.parse)(a.request.headers.get("cookie") || ""), this.path = this.url.pathname || "/", this.headers = { normal: new Headers(), important: new Headers() }, this.searchParams = new URLSearchParams(), m(this.searchParams, this.url.searchParams), this.checkPhaseCounter = 0, this.middlewareInvoked = [], this.wildcardMatch = i?.find((r) => r.domain === this.url.hostname), this.locales = new Set(n.collectedLocales);
  }
  url;
  cookies;
  wildcardMatch;
  path;
  status;
  headers;
  searchParams;
  body;
  checkPhaseCounter;
  middlewareInvoked;
  locales;
  checkRouteMatch(t, { checkStatus: s, checkIntercept: a }) {
    let n = P(t.src, this.path, t.caseSensitive);
    if (!n.match || t.methods && !t.methods.map((r) => r.toUpperCase()).includes(this.reqCtx.request.method.toUpperCase()))
      return;
    let i = { url: this.url, cookies: this.cookies, headers: this.reqCtx.request.headers, routeDest: t.dest };
    if (!t.has?.find((r) => {
      let c = A(r, i);
      return c.newRouteDest && (i.routeDest = c.newRouteDest), !c.valid;
    }) && !t.missing?.find((r) => A(r, i).valid) && !(s && t.status !== this.status)) {
      if (a && t.dest) {
        let r = /\/(\(\.+\))+/, c = r.test(t.dest), o = r.test(this.path);
        if (c && !o)
          return;
      }
      return { routeMatch: n, routeDest: i.routeDest };
    }
  }
  processMiddlewareResp(t) {
    let s = "x-middleware-override-headers", a = t.headers.get(s);
    if (a) {
      let o = new Set(a.split(",").map((h) => h.trim()));
      for (let h of o.keys()) {
        let d = `x-middleware-request-${h}`, f = t.headers.get(d);
        this.reqCtx.request.headers.get(h) !== f && (f ? this.reqCtx.request.headers.set(h, f) : this.reqCtx.request.headers.delete(h)), t.headers.delete(d);
      }
      t.headers.delete(s);
    }
    let n = "x-middleware-rewrite", i = t.headers.get(n);
    if (i) {
      let o = new URL(i, this.url), h = this.url.hostname !== o.hostname;
      this.path = h ? `${o}` : o.pathname, m(this.searchParams, o.searchParams), t.headers.delete(n);
    }
    let r = "x-middleware-next";
    t.headers.get(r) ? t.headers.delete(r) : !i && !t.headers.has("location") ? (this.body = t.body, this.status = t.status) : t.headers.has("location") && t.status >= 300 && t.status < 400 && (this.status = t.status), y(this.reqCtx.request.headers, t.headers), y(this.headers.normal, t.headers), this.headers.middlewareLocation = t.headers.get("location");
  }
  async runRouteMiddleware(t) {
    if (!t)
      return true;
    let s = t && this.output[t];
    if (!s || s.type !== "middleware")
      return this.status = 500, false;
    let a = await v(s, this.reqCtx, { path: this.path, searchParams: this.searchParams, headers: this.headers, status: this.status });
    return this.middlewareInvoked.push(t), a.status === 500 ? (this.status = a.status, false) : (this.processMiddlewareResp(a), true);
  }
  applyRouteOverrides(t) {
    !t.override || (this.status = void 0, this.headers.normal = new Headers(), this.headers.important = new Headers());
  }
  applyRouteHeaders(t, s, a) {
    !t.headers || (y(this.headers.normal, t.headers, { match: s, captureGroupKeys: a }), t.important && y(this.headers.important, t.headers, { match: s, captureGroupKeys: a }));
  }
  applyRouteStatus(t) {
    !t.status || (this.status = t.status);
  }
  applyRouteDest(t, s, a) {
    if (!t.dest)
      return this.path;
    let n = this.path, i = t.dest;
    this.wildcardMatch && /\$wildcard/.test(i) && (i = i.replace(/\$wildcard/g, this.wildcardMatch.value)), this.path = k(i, s, a);
    let r = /\/index\.rsc$/i.test(this.path), c = /^\/(?:index)?$/i.test(n), o = /^\/__index\.prefetch\.rsc$/i.test(n);
    r && !c && !o && (this.path = n);
    let h = /\.rsc$/i.test(this.path), d = /\.prefetch\.rsc$/i.test(this.path), f = this.path in this.output;
    h && !d && !f && (this.path = this.path.replace(/\.rsc/i, ""));
    let N = new URL(this.path, this.url);
    return m(this.searchParams, N.searchParams), T(this.path) || (this.path = N.pathname), n;
  }
  applyLocaleRedirects(t) {
    if (!t.locale?.redirect || !/^\^(.)*$/.test(t.src) && t.src !== this.path || this.headers.normal.has("location"))
      return;
    let { locale: { redirect: a, cookie: n } } = t, i = n && this.cookies[n], r = I(i ?? ""), c = I(this.reqCtx.request.headers.get("accept-language") ?? ""), d = [...r, ...c].map((f) => a[f]).filter(Boolean)[0];
    if (d) {
      !this.path.startsWith(d) && (this.headers.normal.set("location", d), this.status = 307);
      return;
    }
  }
  getLocaleFriendlyRoute(t, s) {
    return !this.locales || s !== "miss" ? t : B(t.src, this.locales) ? { ...t, src: t.src.replace(/\/\(\.\*\)\$$/, "(?:/(.*))?$") } : t;
  }
  async checkRoute(t, s) {
    let a = this.getLocaleFriendlyRoute(s, t), { routeMatch: n, routeDest: i } = this.checkRouteMatch(a, { checkStatus: t === "error", checkIntercept: t === "rewrite" }) ?? {}, r = { ...a, dest: i };
    if (!n?.match || r.middlewarePath && this.middlewareInvoked.includes(r.middlewarePath))
      return "skip";
    let { match: c, captureGroupKeys: o } = n;
    if (this.applyRouteOverrides(r), this.applyLocaleRedirects(r), !await this.runRouteMiddleware(r.middlewarePath))
      return "error";
    if (this.body !== void 0 || this.headers.middlewareLocation)
      return "done";
    this.applyRouteHeaders(r, c, o), this.applyRouteStatus(r);
    let d = this.applyRouteDest(r, c, o);
    if (r.check && !T(this.path))
      if (d === this.path) {
        if (t !== "miss")
          return this.checkPhase(L(t));
        this.status = 404;
      } else if (t === "miss") {
        if (!(this.path in this.output) && !(this.path.replace(/\/$/, "") in this.output))
          return this.checkPhase("filesystem");
        this.status === 404 && (this.status = void 0);
      } else
        return this.checkPhase("none");
    return !r.continue || r.status && r.status >= 300 && r.status <= 399 ? "done" : "next";
  }
  async checkPhase(t) {
    if (this.checkPhaseCounter++ >= 50)
      return console.error(`Routing encountered an infinite loop while checking ${this.url.pathname}`), this.status = 500, "error";
    this.middlewareInvoked = [];
    let s = true;
    for (let i of this.routes[t]) {
      let r = await this.checkRoute(t, i);
      if (r === "error")
        return "error";
      if (r === "done") {
        s = false;
        break;
      }
    }
    if (t === "hit" || T(this.path) || this.headers.normal.has("location") || !!this.body)
      return "done";
    if (t === "none")
      for (let i of this.locales) {
        let r = new RegExp(`/${i}(/.*)`), o = this.path.match(r)?.[1];
        if (o && o in this.output) {
          this.path = o;
          break;
        }
      }
    let a = this.path in this.output;
    if (!a && this.path.endsWith("/")) {
      let i = this.path.replace(/\/$/, "");
      a = i in this.output, a && (this.path = i);
    }
    if (t === "miss" && !a) {
      let i = !this.status || this.status < 400;
      this.status = i ? 404 : this.status;
    }
    let n = "miss";
    return a || t === "miss" || t === "error" ? n = "hit" : s && (n = L(t)), this.checkPhase(n);
  }
  async run(t = "none") {
    this.checkPhaseCounter = 0;
    let s = await this.checkPhase(t);
    return this.headers.normal.has("location") && (!this.status || this.status < 300 || this.status >= 400) && (this.status = 307), s;
  }
}, "w");
async function X(e, t, s, a) {
  let n = new w(t.routes, s, e, a, t.wildcard), i = await ee(n);
  return je(e, i, s);
}
__name(X, "X");
async function ee(e, t = "none", s = false) {
  return await e.run(t) === "error" || !s && e.status && e.status >= 400 ? ee(e, "error", true) : { path: e.path, status: e.status, headers: e.headers, searchParams: e.searchParams, body: e.body };
}
__name(ee, "ee");
async function je(e, { path: t = "/404", status: s, headers: a, searchParams: n, body: i }, r) {
  let c = a.normal.get("location");
  if (c) {
    if (c !== a.middlewareLocation) {
      let d = [...n.keys()].length ? `?${n.toString()}` : "";
      a.normal.set("location", `${c ?? "/"}${d}`);
    }
    return new Response(null, { status: s, headers: a.normal });
  }
  let o;
  if (i !== void 0)
    o = new Response(i, { status: s });
  else if (T(t)) {
    let d = new URL(t);
    m(d.searchParams, n), o = await fetch(d, e.request);
  } else
    o = await v(r[t], e, { path: t, status: s, headers: a, searchParams: n });
  let h = a.normal;
  return y(h, o.headers), y(h, a.important), o = new Response(o.body, { ...o, status: s || o.status, headers: h }), o;
}
__name(je, "je");
u();
l();
p();
function te() {
  globalThis.__nextOnPagesRoutesIsolation ??= { _map: /* @__PURE__ */ new Map(), getProxyFor: we };
}
__name(te, "te");
function we(e) {
  let t = globalThis.__nextOnPagesRoutesIsolation._map.get(e);
  if (t)
    return t;
  let s = Ce();
  return globalThis.__nextOnPagesRoutesIsolation._map.set(e, s), s;
}
__name(we, "we");
function Ce() {
  let e = /* @__PURE__ */ new Map();
  return new Proxy(globalThis, { get: (t, s) => e.has(s) ? e.get(s) : Reflect.get(globalThis, s), set: (t, s, a) => Ee.has(s) ? Reflect.set(globalThis, s, a) : (e.set(s, a), true) });
}
__name(Ce, "Ce");
var Ee = /* @__PURE__ */ new Set(["_nextOriginalFetch", "fetch", "__incrementalCache"]);
var ga = { async fetch(e, t, s) {
  te(), J();
  let a = await __ALSes_PROMISE__;
  if (!a) {
    let r = new URL(e.url), c = await t.ASSETS.fetch(`${r.protocol}//${r.host}/cdn-cgi/errors/no-nodejs_compat.html`), o = c.ok ? c.body : "Error: Could not access built-in Node.js modules. Please make sure that your Cloudflare Pages project has the 'nodejs_compat' compatibility flag set.";
    return new Response(o, { status: 503 });
  }
  let { envAsyncLocalStorage: n, requestContextAsyncLocalStorage: i } = a;
  return n.run({ ...t, NODE_ENV: "production", SUSPENSE_CACHE_URL: S }, async () => i.run({ env: t, ctx: s, cf: e.cf }, async () => {
    if (new URL(e.url).pathname.startsWith("/_next/image"))
      return K(e, { buildOutput: g, assetsFetcher: t.ASSETS, imagesConfig: _.images });
    let c = D(e);
    return X({ request: c, ctx: s, assetsFetcher: t.ASSETS }, _, g, x);
  }));
} };
export {
  ga as default
};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
//# sourceMappingURL=bundledWorker-0.24097342936835076.mjs.map
