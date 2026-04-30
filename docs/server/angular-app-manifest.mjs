
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/tasksProject/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/tasksProject/home",
    "route": "/tasksProject"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XXL26R25.js"
    ],
    "route": "/tasksProject/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WLVJNR6G.js",
      "chunk-FQ2WMU4A.js"
    ],
    "route": "/tasksProject/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-E7I7C7CZ.js",
      "chunk-FQ2WMU4A.js"
    ],
    "route": "/tasksProject/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NLVY42Q2.js"
    ],
    "route": "/tasksProject/formarray"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 7148, hash: 'dd35b3270b5be4de51582378d71ae0b2342ba37df5eea6cf60e8e1cfc8a9efbb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1397, hash: '0204406b240c36242642c751a66bbfb8dd458c8005fe470f3c5c2e1aae2e93a7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 95426, hash: 'cf0f5fbd456e8fce00e8671cf3ffc516ddbf1c60ae7cb6f902466a828b747e70', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 98443, hash: '585b6c1c184789eff4a0be60fe32eb66027ec8f5c441e497972d11360d9f0394', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 92740, hash: '900eaf1a111a41c3d1f70b03a0f662a08a575863d305ae9e083b960bbbeefa1c', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'formarray/index.html': {size: 84304, hash: 'f396fd2c688ce6b9fc7dcc8b358c00de090e03f2785ee9b44a83a8721615ba5a', text: () => import('./assets-chunks/formarray_index_html.mjs').then(m => m.default)},
    'styles-RGN2EXZO.css': {size: 16038, hash: 'U5a6u91sawc', text: () => import('./assets-chunks/styles-RGN2EXZO_css.mjs').then(m => m.default)}
  },
};
