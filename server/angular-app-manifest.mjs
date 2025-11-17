
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/nova/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/nova/nova",
    "route": "/nova"
  },
  {
    "renderMode": 2,
    "route": "/nova/nova"
  },
  {
    "renderMode": 2,
    "route": "/nova/faq"
  },
  {
    "renderMode": 2,
    "route": "/nova/about"
  },
  {
    "renderMode": 2,
    "redirectTo": "/nova/nova",
    "route": "/nova/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23566, hash: '2500a770cd7866801004b2f2cde442f76a6a98551c6b2dc55eb9223b439783f2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17140, hash: '25a4ad580e906685caa07e48b12516c6bc10ae2f154e06afb4c33af52c12d1e9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 72802, hash: 'c5fcfa1d60fc4645a95c14217651c272f73a1f8bd3d8bdedaf9baa8cf9998099', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'nova/index.html': {size: 80198, hash: '76d00516594a380565d0c2b7c05a0c0a2dbda773419c41693dcf1f15864db0ba', text: () => import('./assets-chunks/nova_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 75676, hash: 'dd0adc08269f9028a7723a34e75f362c6ae17d74c4c5073932825933aae86634', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
