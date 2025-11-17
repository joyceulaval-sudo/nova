
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://joyceulaval-sudo.github.io/nova/',
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
    'index.csr.html': {size: 23600, hash: '5a6d540bc935a2b8d959e7520b908d8a60b7b59beb9cc047ffa14b84cca4439b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17174, hash: '928edc8fe23cd7555a14df7743d6c3d2f1f804607dcec048fc5ce0d3d253d3eb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'nova/index.html': {size: 80232, hash: 'bc4760195777d07b053a35deec5e523986d5967e448309058b49a42d58586294', text: () => import('./assets-chunks/nova_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 72836, hash: '72b8d2a0d927e89fabf22ba200f7ae7a2bd37272fc0dac583666d0fd2e307a12', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 75710, hash: 'd0b2657e985a5c21503762d9cfc9d1484e01bce648106a21a521277e66584468', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
