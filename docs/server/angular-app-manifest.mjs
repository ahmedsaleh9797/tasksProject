
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/leafletjs_example/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/leafletjs_example/home",
    "route": "/leafletjs_example"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XXL26R25.js"
    ],
    "route": "/leafletjs_example/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WLVJNR6G.js",
      "chunk-FQ2WMU4A.js"
    ],
    "route": "/leafletjs_example/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-E7I7C7CZ.js",
      "chunk-FQ2WMU4A.js"
    ],
    "route": "/leafletjs_example/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NLVY42Q2.js"
    ],
    "route": "/leafletjs_example/formarray"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 7153, hash: '448d059548aa7177660c9c1c86a04aabaa0ee1f2f5877e2073b6ff7335988dbf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1402, hash: '136884a2ac3356673bfd22fdf4fa62b6523e28d2fb08e38d1af69007c1598cbb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 92734, hash: '45321c6b9a04f5cf110cec417c71d5b5e8e37587104a8e3cebb0802cf06540e6', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 95436, hash: 'a092ff8ccdc42ff6160e66be5430c2ce714808b2cb61727f10f75c242e6ab615', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'formarray/index.html': {size: 84311, hash: '5007e0b8ab2ceae5a4703191b86ad146a8325ff6f98b24edad9a5cd8ee008f95', text: () => import('./assets-chunks/formarray_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 98453, hash: '05e6668157f3316e61fcb7198474b6617446588f48e31cf85bb76d4a5615f058', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'styles-RGN2EXZO.css': {size: 16038, hash: 'U5a6u91sawc', text: () => import('./assets-chunks/styles-RGN2EXZO_css.mjs').then(m => m.default)}
  },
};
