
export default {
  basePath: 'https://joyceulaval-sudo.github.io/nova',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
