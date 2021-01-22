const autoPreprocess = require('svelte-preprocess');
const postcss = require('./postcss.config');

module.exports = {
  preprocess: autoPreprocess({
    postcss,
    defaults: {
      script: 'typescript',
    },
  }),
};
